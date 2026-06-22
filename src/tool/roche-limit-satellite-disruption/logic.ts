export type PrimaryId = 'earth' | 'mars' | 'jupiter' | 'saturn' | 'neptune';
export type SatelliteId = 'icy-moon' | 'rocky-moon' | 'rubble-pile' | 'iron-core';

export interface PrimaryBody {
  id: PrimaryId;
  name: string;
  radiusKm: number;
  densityGcm3: number;
  massKg: number;
}

export interface SatelliteBody {
  id: SatelliteId;
  name: string;
  densityGcm3: number;
  radiusKm: number;
  cohesion: 'fluid' | 'fractured' | 'rigid';
}

export interface RocheInput {
  primaryId: PrimaryId;
  satelliteId: SatelliteId;
  orbitDistanceKm: number;
}

export interface RocheResult {
  primary: PrimaryBody;
  satellite: SatelliteBody;
  fluidLimitKm: number;
  rigidLimitKm: number;
  selectedLimitKm: number;
  safetyRatio: number;
  tidalStressIndex: number;
  ringProgress: number;
  orbitalPeriodHours: number;
  verdict: 'stable' | 'grazing' | 'fragmenting' | 'ring';
}

const GRAVITATIONAL_CONSTANT = 6.6743e-11;

export const PRIMARY_BODIES: PrimaryBody[] = [
  { id: 'earth', name: 'Earth', radiusKm: 6371, densityGcm3: 5.51, massKg: 5.972e24 },
  { id: 'mars', name: 'Mars', radiusKm: 3390, densityGcm3: 3.93, massKg: 6.417e23 },
  { id: 'jupiter', name: 'Jupiter', radiusKm: 69911, densityGcm3: 1.33, massKg: 1.898e27 },
  { id: 'saturn', name: 'Saturn', radiusKm: 58232, densityGcm3: 0.69, massKg: 5.683e26 },
  { id: 'neptune', name: 'Neptune', radiusKm: 24622, densityGcm3: 1.64, massKg: 1.024e26 },
];

export const SATELLITE_BODIES: SatelliteBody[] = [
  { id: 'icy-moon', name: 'Icy moon', densityGcm3: 0.93, radiusKm: 760, cohesion: 'fluid' },
  { id: 'rocky-moon', name: 'Rocky moon', densityGcm3: 3.34, radiusKm: 1737, cohesion: 'fractured' },
  { id: 'rubble-pile', name: 'Rubble pile', densityGcm3: 1.75, radiusKm: 45, cohesion: 'fluid' },
  { id: 'iron-core', name: 'Iron-rich moon', densityGcm3: 5.3, radiusKm: 980, cohesion: 'rigid' },
];

function findPrimary(id: PrimaryId): PrimaryBody {
  return PRIMARY_BODIES.find((body) => body.id === id) ?? PRIMARY_BODIES[0];
}

function findSatellite(id: SatelliteId): SatelliteBody {
  return SATELLITE_BODIES.find((body) => body.id === id) ?? SATELLITE_BODIES[0];
}

function selectedLimitFor(satellite: SatelliteBody, fluidLimitKm: number, rigidLimitKm: number): number {
  if (satellite.cohesion === 'rigid') return rigidLimitKm;
  if (satellite.cohesion === 'fractured') return (fluidLimitKm + rigidLimitKm) / 2;
  return fluidLimitKm;
}

function verdictFor(safetyRatio: number): RocheResult['verdict'] {
  if (safetyRatio < 0.78) return 'ring';
  if (safetyRatio < 1) return 'fragmenting';
  if (safetyRatio < 1.12) return 'grazing';
  return 'stable';
}

export function calculateRocheLimit(input: RocheInput): RocheResult {
  const primary = findPrimary(input.primaryId);
  const satellite = findSatellite(input.satelliteId);
  const densityRatio = primary.densityGcm3 / satellite.densityGcm3;
  const fluidLimitKm = 2.44 * primary.radiusKm * Math.cbrt(densityRatio);
  const rigidLimitKm = 1.26 * primary.radiusKm * Math.cbrt(densityRatio);
  const selectedLimitKm = selectedLimitFor(satellite, fluidLimitKm, rigidLimitKm);
  const orbitDistanceKm = Math.max(primary.radiusKm * 1.02, input.orbitDistanceKm);
  const safetyRatio = orbitDistanceKm / selectedLimitKm;
  const tidalStressIndex = Math.min(2.2, Math.pow(selectedLimitKm / orbitDistanceKm, 3));
  const ringProgress = Math.max(0, Math.min(1, (1.08 - safetyRatio) / 0.38));
  const orbitalPeriodHours = 2 * Math.PI * Math.sqrt(Math.pow(orbitDistanceKm * 1000, 3) / (GRAVITATIONAL_CONSTANT * primary.massKg)) / 3600;

  return {
    primary,
    satellite,
    fluidLimitKm,
    rigidLimitKm,
    selectedLimitKm,
    safetyRatio,
    tidalStressIndex,
    ringProgress,
    orbitalPeriodHours,
    verdict: verdictFor(safetyRatio),
  };
}
