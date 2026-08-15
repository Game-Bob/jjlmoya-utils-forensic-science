import type { AlgorMortisInputs } from './logic';

const STORAGE_KEY = 'jjlmoya_forensic_algor_mortis_state';

export function loadSavedState(): Partial<AlgorMortisInputs> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveState(inputs: AlgorMortisInputs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {
    return;
  }
}
