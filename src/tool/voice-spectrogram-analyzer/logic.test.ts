import { describe, expect, it } from 'vitest';
import { createHammingWindow, fftMagnitudes } from './fft';
import { analyzeSamples, compareFormants, createSyntheticVowel, formatDuration } from './logic';

describe('voice spectrogram signal logic', () => {
  it('creates a symmetric Hamming window', () => {
    const window = createHammingWindow(8);
    expect(window).toHaveLength(8);
    expect(window[0]!).toBeCloseTo(window[7]!);
    expect(window[3]!).toBeGreaterThan(window[0]!);
  });

  it('places a pure tone in the expected FFT bin', () => {
    const size = 1024;
    const signal = Float32Array.from({ length: size }, (_, index) => Math.sin((2 * Math.PI * 32 * index) / size));
    const magnitudes = fftMagnitudes(signal);
    const peak = [...magnitudes].indexOf(Math.max(...magnitudes));
    expect(peak).toBe(32);
  });

  it('analyzes a short synthetic vowel into bounded frames and formants', () => {
    const samples = createSyntheticVowel({ fundamental: 120, formants: [650, 1150, 2500], duration: 2.4, sampleRate: 16000 });
    const analysis = analyzeSamples(samples, 16000, 6000);
    expect(analysis.frames.length).toBeGreaterThan(10);
    expect(analysis.frames.length).toBeLessThanOrEqual(220);
    expect(analysis.frames[0]!.energy).toHaveLength(144);
    expect(analysis.averages).not.toBeNull();
    expect(analysis.averages![2]).toBeGreaterThan(analysis.averages![1]);
    expect(analysis.duration).toBeCloseTo(2.4);
  });

  it('handles silence and audio shorter than an FFT frame', () => {
    const analysis = analyzeSamples(new Float32Array(200), 8000, 4000);
    expect(analysis.frames).toHaveLength(1);
    expect(analysis.averages).toBeNull();
  });

  it('reports absolute formant differences without an identity score', () => {
    expect(compareFormants([500, 1400, 2500], [620, 1300, 2800])).toEqual([120, 100, 300]);
    expect(compareFormants(null, [620, 1300, 2800])).toBeNull();
  });

  it('formats durations consistently', () => {
    expect(formatDuration(65.9)).toBe('1:05');
  });
});
