import { AudioPlayer, decodeAudioFile } from './audio-runtime';
import type { DecodedAudio } from './audio-runtime';
import { renderSpectrogram } from './dom-views';
import { evaluateStage } from './evaluator';
import type { SampleState } from './evaluator';
import { analyzeSamples, compareFormants, createSyntheticVowel, formatDuration } from './logic';
import type { SpectrogramAnalysis, SyntheticVowel } from './logic';
import { loadSettings, saveSettings } from './storage';
import type { SpectrogramSettings } from './storage';
import type { VoiceSpectrogramUI } from './ui';

type TrackKey = 'a' | 'b';

interface Track extends DecodedAudio {
  name: string;
  state: SampleState;
  analysis: SpectrogramAnalysis;
  error: string;
}

interface AppState {
  tracks: Record<TrackKey, Track>;
  settings: SpectrogramSettings;
  active: TrackKey | null;
  progress: number;
}

interface ViewContext {
  root: HTMLElement;
  canvas: HTMLCanvasElement;
  state: AppState;
  ui: VoiceSpectrogramUI;
}

const presets = {
  warm: { fundamental: 118, formants: [650, 1080, 2450], duration: 2.8, sampleRate: 16000 },
  bright: { fundamental: 205, formants: [340, 2650, 3380], duration: 2.8, sampleRate: 16000 }
} satisfies Record<string, SyntheticVowel>;

function requireElement<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing ${selector}`);
  return element;
}

function parseUI(root: HTMLElement): VoiceSpectrogramUI {
  const script = requireElement<HTMLScriptElement>(root, '[data-voice-content]');
  return JSON.parse(script.textContent ?? '{}') as VoiceSpectrogramUI;
}

function presetTrack(key: keyof typeof presets, name: string, ceilingHz: number): Track {
  const config = presets[key];
  const samples = createSyntheticVowel(config);
  return { samples, sampleRate: config.sampleRate, name, state: 'ready', analysis: analyzeSamples(samples, config.sampleRate, ceilingHz), error: '' };
}

function initialState(ui: VoiceSpectrogramUI): AppState {
  const settings = loadSettings();
  return {
    settings,
    tracks: {
      a: presetTrack('warm', ui.presetWarmLabel, settings.ceilingHz),
      b: presetTrack('bright', ui.presetBrightLabel, settings.ceilingHz)
    },
    active: null,
    progress: 0
  };
}

function stateLabel(track: Track, ui: VoiceSpectrogramUI): string {
  const labels: Record<SampleState, string> = {
    empty: ui.emptySampleLabel,
    decoding: ui.decodingSampleLabel,
    ready: ui.readySampleLabel,
    error: ui.errorSampleLabel
  };
  return track.error || labels[track.state];
}

function setText(root: HTMLElement, selector: string, text: string): void {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = text;
}

function renderTrack(root: HTMLElement, key: TrackKey, track: Track, ui: VoiceSpectrogramUI): void {
  setText(root, `[data-name="${key}"]`, track.name);
  setText(root, `[data-status="${key}"]`, stateLabel(track, ui));
  setText(root, `[data-duration="${key}"]`, `${ui.durationLabel} ${formatDuration(track.analysis.duration)}`);
  const card = root.querySelector<HTMLElement>(`[data-card="${key}"]`);
  if (card) card.dataset.state = track.state;
  track.analysis.averages?.forEach((value, index) => setText(root, `[data-value="${key}-${index}"]`, `${value} Hz`));
}

function renderComparison(root: HTMLElement, state: AppState, ui: VoiceSpectrogramUI): void {
  const delta = compareFormants(state.tracks.a.analysis.averages, state.tracks.b.analysis.averages);
  for (let index = 0; index < 3; index += 1) {
    setText(root, `[data-value="d-${index}"]`, delta ? `${delta[index]} Hz` : ui.unavailableLabel);
  }
}

function stageStatusLabel(state: AppState, ui: VoiceSpectrogramUI): string {
  const evaluation = evaluateStage(state.tracks.a.state, state.tracks.b.state);
  if (evaluation.key === 'ready') return ui.statusReadyLabel;
  if (evaluation.key === 'single') return ui.statusSingleLabel;
  return ui.statusEmptyLabel;
}

function renderControls(root: HTMLElement, state: AppState, ui: VoiceSpectrogramUI): void {
  root.querySelectorAll<HTMLElement>('[data-ceiling]').forEach((button) => button.classList.toggle('is-active', Number(button.dataset.ceiling) === state.settings.ceilingHz));
  root.querySelectorAll<HTMLElement>('[data-view]').forEach((button) => button.classList.toggle('is-active', button.dataset.view === state.settings.view));
  setText(root, '[data-stage-status]', stageStatusLabel(state, ui));
}

function render(root: HTMLElement, canvas: HTMLCanvasElement, state: AppState, ui: VoiceSpectrogramUI): void {
  renderTrack(root, 'a', state.tracks.a, ui);
  renderTrack(root, 'b', state.tracks.b, ui);
  renderComparison(root, state, ui);
  renderControls(root, state, ui);
  renderSpectrogram(root, canvas, {
    first: state.tracks.a.analysis,
    second: state.tracks.b.analysis,
    active: state.active,
    progress: state.progress,
    view: state.settings.view
  }, ui);
}

function errorMessage(error: unknown, ui: VoiceSpectrogramUI): string {
  if (error instanceof Error && error.message === 'limit') return ui.limitError;
  if (error instanceof Error && error.message === 'browser') return ui.browserError;
  return ui.decodeError;
}

async function loadFile(context: ViewContext, key: TrackKey, file: File): Promise<void> {
  context.state.tracks[key].state = 'decoding';
  context.state.tracks[key].error = '';
  render(context.root, context.canvas, context.state, context.ui);
  try {
    const audio = await decodeAudioFile(file);
    context.state.tracks[key] = { ...audio, name: file.name, state: 'ready', analysis: analyzeSamples(audio.samples, audio.sampleRate, context.state.settings.ceilingHz), error: '' };
  } catch (error) {
    context.state.tracks[key].state = 'ready';
    context.state.tracks[key].error = errorMessage(error, context.ui);
  }
  render(context.root, context.canvas, context.state, context.ui);
}

function bindFiles(root: HTMLElement, canvas: HTMLCanvasElement, state: AppState, ui: VoiceSpectrogramUI): void {
  const context = { root, canvas, state, ui };
  root.querySelectorAll<HTMLInputElement>('[data-file]').forEach((input) => input.addEventListener('change', () => {
    const file = input.files?.[0];
    if (file) void loadFile(context, input.dataset.file as TrackKey, file);
  }));
  root.querySelectorAll<HTMLElement>('[data-drop]').forEach((zone) => {
    zone.addEventListener('dragover', (event) => event.preventDefault());
    zone.addEventListener('drop', (event) => {
      event.preventDefault();
      const file = event.dataTransfer?.files[0];
      if (file) void loadFile(context, zone.dataset.drop as TrackKey, file);
    });
  });
}

function bindPresets(root: HTMLElement, canvas: HTMLCanvasElement, state: AppState, ui: VoiceSpectrogramUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => {
    const key = button.dataset.track as TrackKey;
    const preset = button.dataset.preset as keyof typeof presets;
    const name = preset === 'warm' ? ui.presetWarmLabel : ui.presetBrightLabel;
    state.tracks[key] = presetTrack(preset, name, state.settings.ceilingHz);
    render(root, canvas, state, ui);
  }));
}

function bindSettings(root: HTMLElement, canvas: HTMLCanvasElement, state: AppState, ui: VoiceSpectrogramUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-ceiling]').forEach((button) => button.addEventListener('click', () => {
    state.settings.ceilingHz = Number(button.dataset.ceiling);
    Object.values(state.tracks).forEach((track) => track.analysis = analyzeSamples(track.samples, track.sampleRate, state.settings.ceilingHz));
    saveSettings(state.settings);
    render(root, canvas, state, ui);
  }));
  root.querySelectorAll<HTMLButtonElement>('[data-view]').forEach((button) => button.addEventListener('click', () => {
    state.settings.view = button.dataset.view as SpectrogramSettings['view'];
    saveSettings(state.settings);
    render(root, canvas, state, ui);
  }));
}

function bindPlayback(root: HTMLElement, canvas: HTMLCanvasElement, state: AppState, ui: VoiceSpectrogramUI): void {
  const player = new AudioPlayer();
  root.querySelectorAll<HTMLButtonElement>('[data-play]').forEach((button) => button.addEventListener('click', () => {
    const key = button.dataset.play as TrackKey;
    state.active = key;
    state.progress = 0;
    void player.play(state.tracks[key], {
      progress: (progress) => { state.progress = progress; render(root, canvas, state, ui); },
      ended: () => { state.active = null; state.progress = 0; render(root, canvas, state, ui); }
    });
  }));
  requireElement<HTMLButtonElement>(root, '[data-stop]').addEventListener('click', () => {
    player.stop();
    state.active = null;
    state.progress = 0;
    render(root, canvas, state, ui);
  });
}

export function mountVoiceSpectrogram(root: HTMLElement): void {
  if (root.dataset.mounted === 'true') return;
  root.dataset.mounted = 'true';
  const ui = parseUI(root);
  const canvas = requireElement<HTMLCanvasElement>(root, 'canvas');
  const state = initialState(ui);
  bindFiles(root, canvas, state, ui);
  bindPresets(root, canvas, state, ui);
  bindSettings(root, canvas, state, ui);
  bindPlayback(root, canvas, state, ui);
  new ResizeObserver(() => render(root, canvas, state, ui)).observe(canvas);
  render(root, canvas, state, ui);
}
