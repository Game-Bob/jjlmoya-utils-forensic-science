export type SpectrogramView = 'mirror' | 'split';

export interface SpectrogramSettings {
  ceilingHz: number;
  view: SpectrogramView;
}

const STORAGE_KEY = 'voice-spectrogram-analyzer-settings';
const DEFAULTS: SpectrogramSettings = { ceilingHz: 6000, view: 'mirror' };

function isSettings(value: unknown): value is SpectrogramSettings {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<SpectrogramSettings>;
  return [4000, 6000, 8000].includes(candidate.ceilingHz ?? 0)
    && ['mirror', 'split'].includes(candidate.view ?? '');
}

export function loadSettings(): SpectrogramSettings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULTS;
    const parsed: unknown = JSON.parse(stored);
    return isSettings(parsed) ? parsed : DEFAULTS;
  } catch {
    return DEFAULTS;
  }
}

export function saveSettings(settings: SpectrogramSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}
