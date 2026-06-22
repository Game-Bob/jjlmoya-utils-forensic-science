import { PRIMARY_BODIES, SATELLITE_BODIES } from './logic';
import type { PrimaryId, SatelliteId } from './logic';

const storageKey = 'roche-limit-satellite-disruption-state';

export function saveState(primaryId: PrimaryId, satelliteId: SatelliteId, orbitDistanceKm: number): void {
  window.localStorage.setItem(storageKey, JSON.stringify({ primaryId, satelliteId, orbitDistanceKm }));
}

export function clearState(): void {
  window.localStorage.removeItem(storageKey);
}

export function restoreState(): { primaryId?: PrimaryId; satelliteId?: SatelliteId; orbitDistanceKm?: number } {
  const rawState = window.localStorage.getItem(storageKey);
  if (!rawState) return {};
  try {
    const state = JSON.parse(rawState);
    return {
      primaryId: PRIMARY_BODIES.some((body) => body.id === state.primaryId) ? state.primaryId : undefined,
      satelliteId: SATELLITE_BODIES.some((body) => body.id === state.satelliteId) ? state.satelliteId : undefined,
      orbitDistanceKm: Number.isFinite(state.orbitDistanceKm) ? state.orbitDistanceKm : undefined,
    };
  } catch {
    clearState();
    return {};
  }
}
