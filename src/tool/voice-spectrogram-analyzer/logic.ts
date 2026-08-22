import { createHammingWindow, fftMagnitudes } from './fft';

export type FormantTriplet = [number, number, number];

export interface SpectrogramFrame {
  energy: number[];
  formants: FormantTriplet | null;
}

export interface SpectrogramAnalysis {
  frames: SpectrogramFrame[];
  averages: FormantTriplet | null;
  duration: number;
  ceilingHz: number;
  sampleRate: number;
}

export interface SyntheticVowel {
  fundamental: number;
  formants: FormantTriplet;
  duration: number;
  sampleRate: number;
}

const DISPLAY_BINS = 144;
const MAX_FRAMES = 220;

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function frameSizeFor(sampleRate: number): number {
  return sampleRate >= 16000 ? 2048 : 1024;
}

function buildStarts(length: number, frameSize: number): number[] {
  if (length <= frameSize) return [0];
  const available = length - frameSize;
  const hop = Math.max(Math.floor(frameSize / 4), Math.ceil(available / (MAX_FRAMES - 1)));
  const starts: number[] = [];
  for (let start = 0; start <= available; start += hop) starts.push(start);
  if (starts.at(-1) !== available) starts.push(available);
  return starts.slice(0, MAX_FRAMES);
}

function windowFrame(samples: Float32Array, start: number, size: number, window: Float32Array): Float32Array {
  const frame = new Float32Array(size);
  for (let index = 0; index < size; index += 1) frame[index] = (samples[start + index] ?? 0) * window[index]!;
  return frame;
}

function rms(frame: Float32Array): number {
  let sum = 0;
  for (const value of frame) sum += value * value;
  return Math.sqrt(sum / frame.length);
}

function smooth(magnitudes: Float64Array, radius: number): Float64Array {
  const output = new Float64Array(magnitudes.length);
  for (let index = 0; index < magnitudes.length; index += 1) {
    let sum = 0;
    let count = 0;
    for (let offset = -radius; offset <= radius; offset += 1) {
      const value = magnitudes[index + offset];
      if (value === undefined) continue;
      sum += value;
      count += 1;
    }
    output[index] = sum / count;
  }
  return output;
}

function peakInRange(values: Float64Array, hzPerBin: number, minimum: number, maximum: number): number {
  const start = clamp(Math.ceil(minimum / hzPerBin), 1, values.length - 2);
  const end = clamp(Math.floor(maximum / hzPerBin), start, values.length - 2);
  let best = start;
  for (let index = start + 1; index <= end; index += 1) {
    if (values[index]! > values[best]!) best = index;
  }
  return Math.round(best * hzPerBin);
}

function estimateFormants(magnitudes: Float64Array, sampleRate: number, frameRms: number): FormantTriplet | null {
  if (frameRms < 0.004) return null;
  const envelope = smooth(magnitudes, 5);
  const hzPerBin = sampleRate / (magnitudes.length * 2);
  const first = peakInRange(envelope, hzPerBin, 180, 1000);
  const second = peakInRange(envelope, hzPerBin, Math.max(900, first + 180), 3000);
  const third = peakInRange(envelope, hzPerBin, Math.max(2000, second + 240), 4500);
  return [first, second, third];
}

function displayEnergy(magnitudes: Float64Array, sampleRate: number, ceilingHz: number): number[] {
  const hzPerBin = sampleRate / (magnitudes.length * 2);
  const output: number[] = [];
  for (let bin = 0; bin < DISPLAY_BINS; bin += 1) {
    const frequency = (bin / (DISPLAY_BINS - 1)) * ceilingHz;
    const index = clamp(Math.round(frequency / hzPerBin), 0, magnitudes.length - 1);
    const decibels = 20 * Math.log10(magnitudes[index]! + 1e-8);
    output.push(clamp((decibels + 82) / 68, 0, 1));
  }
  return output;
}

function averageFormants(frames: SpectrogramFrame[]): FormantTriplet | null {
  const active = frames.flatMap((frame) => frame.formants ? [frame.formants] : []);
  if (active.length === 0) return null;
  const total: FormantTriplet = [0, 0, 0];
  for (const formants of active) {
    total[0] += formants[0];
    total[1] += formants[1];
    total[2] += formants[2];
  }
  return total.map((value) => Math.round(value / active.length)) as FormantTriplet;
}

export function analyzeSamples(samples: Float32Array, sampleRate: number, ceilingHz: number): SpectrogramAnalysis {
  const frameSize = frameSizeFor(sampleRate);
  const window = createHammingWindow(frameSize);
  const frames = buildStarts(samples.length, frameSize).map((start) => {
    const frame = windowFrame(samples, start, frameSize, window);
    const magnitudes = fftMagnitudes(frame);
    return {
      energy: displayEnergy(magnitudes, sampleRate, ceilingHz),
      formants: estimateFormants(magnitudes, sampleRate, rms(frame))
    };
  });
  return { frames, averages: averageFormants(frames), duration: samples.length / sampleRate, ceilingHz, sampleRate };
}

function fadeEnvelope(time: number, duration: number): number {
  const attack = clamp(time / 0.12, 0, 1);
  const release = clamp((duration - time) / 0.2, 0, 1);
  return Math.min(attack, release) * (0.82 + (0.18 * Math.sin(Math.PI * time / duration)));
}

export function createSyntheticVowel(config: SyntheticVowel): Float32Array {
  const length = Math.floor(config.duration * config.sampleRate);
  const output = new Float32Array(length);
  const weights = [0.6, 0.38, 0.24];
  for (let index = 0; index < length; index += 1) {
    const time = index / config.sampleRate;
    const drift = 1 + (0.012 * Math.sin(time * Math.PI * 0.8));
    let value = 0.18 * Math.sin(2 * Math.PI * config.fundamental * time);
    config.formants.forEach((frequency, formantIndex) => {
      value += weights[formantIndex]! * Math.sin(2 * Math.PI * frequency * drift * time);
    });
    output[index] = value * fadeEnvelope(time, config.duration) * 0.72;
  }
  return output;
}

export function compareFormants(first: FormantTriplet | null, second: FormantTriplet | null): FormantTriplet | null {
  if (!first || !second) return null;
  return first.map((value, index) => Math.abs(value - second[index]!)) as FormantTriplet;
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainder}`;
}
