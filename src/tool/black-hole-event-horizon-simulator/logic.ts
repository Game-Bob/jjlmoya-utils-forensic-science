export interface BlackHoleInput {
  massSolar: number;
  distanceMultiplier: number;
  orbitalSpeedFraction: number;
}

export interface BlackHoleResult {
  schwarzschildRadiusKm: number;
  diameterKm: number;
  lightCrossingMs: number;
  photonSphereKm: number;
  iscoKm: number;
  orbitRadiusKm: number;
  escapeVelocityFraction: number;
  timeDilationFactor: number;
  orbitalPeriodMs: number;
  tidalGradientEarthGPerMeter: number;
  gravitationalRedshift: number;
  status: 'inside-horizon' | 'photon-sphere' | 'stable-orbit';
}

const solarSchwarzschildRadiusKm = 2.95325008;
const lightSpeedKmPerSecond = 299792.458;
const gravitationalConstant = 6.6743e-11;
const solarMassKg = 1.98847e30;
const earthGravity = 9.80665;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function eventHorizonStatus(distanceMultiplier: number): BlackHoleResult['status'] {
  if (distanceMultiplier <= 1) return 'inside-horizon';
  if (distanceMultiplier < 1.5) return 'photon-sphere';
  return 'stable-orbit';
}

export function simulateEventHorizon(input: BlackHoleInput): BlackHoleResult {
  const massSolar = clamp(input.massSolar, 3, 10000000000);
  const distanceMultiplier = clamp(input.distanceMultiplier, 1.02, 12);
  const speedFraction = clamp(input.orbitalSpeedFraction, 0.05, 0.99);
  const schwarzschildRadiusKm = massSolar * solarSchwarzschildRadiusKm;
  const orbitRadiusKm = schwarzschildRadiusKm * distanceMultiplier;
  const relativityTerm = Math.max(0.0001, 1 - schwarzschildRadiusKm / orbitRadiusKm);
  const escapeVelocityFraction = Math.sqrt(schwarzschildRadiusKm / orbitRadiusKm);
  const timeDilationFactor = Math.sqrt(relativityTerm);
  const orbitalCircumferenceKm = 2 * Math.PI * orbitRadiusKm;
  const orbitalPeriodMs = orbitalCircumferenceKm / (speedFraction * lightSpeedKmPerSecond) * 1000;
  const radiusMeters = orbitRadiusKm * 1000;
  const massKg = massSolar * solarMassKg;
  const tidalGradientEarthGPerMeter = 2 * gravitationalConstant * massKg / radiusMeters ** 3 / earthGravity;
  const gravitationalRedshift = 1 / timeDilationFactor - 1;

  return {
    schwarzschildRadiusKm,
    diameterKm: schwarzschildRadiusKm * 2,
    lightCrossingMs: schwarzschildRadiusKm / lightSpeedKmPerSecond * 1000,
    photonSphereKm: schwarzschildRadiusKm * 1.5,
    iscoKm: schwarzschildRadiusKm * 3,
    orbitRadiusKm,
    escapeVelocityFraction,
    timeDilationFactor,
    orbitalPeriodMs,
    tidalGradientEarthGPerMeter,
    gravitationalRedshift,
    status: eventHorizonStatus(distanceMultiplier),
  };
}
