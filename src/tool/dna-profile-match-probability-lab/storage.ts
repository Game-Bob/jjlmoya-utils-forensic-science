import type { LocusInput } from './logic';

const storageKey = 'dna-profile-match-probability-lab:state';

export interface SavedProfileState {
  loci: LocusInput[];
}

export function loadProfileState(fallback: SavedProfileState): SavedProfileState {
  try {
    const value = localStorage.getItem(storageKey);
    if (!value) return fallback;
    const saved = JSON.parse(value) as SavedProfileState;
    if (!Array.isArray(saved.loci)) return fallback;
    return saved;
  } catch {
    return fallback;
  }
}

export function saveProfileState(state: SavedProfileState): void {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
  }
}
