export type StarType = 'm-dwarf' | 'sun' | 'a-star' | 'red-giant' | 'blue-giant';
export type StructureType = 'swarm' | 'ring' | 'shell' | 'statite-cloud';

export interface StarPreset {
  id: StarType;
  name: string;
  luminositySolar: number;
  massSolar: number;
  radiusSolar: number;
  temperatureK: number;
}

export interface StructurePreset {
  id: StructureType;
  name: string;
  coverageEfficiency: number;
  arealDensityKgM2: number;
  thermalLimitK: number;
  stabilityFactor: number;
}

export interface DysonInput {
  star: StarType;
  structure: StructureType;
  coveragePercent: number;
  operatingTempK: number;
  kardashevTarget: number;
}

export interface DysonResult {
  luminosityWatts: number;
  capturedWatts: number;
  optimalRadiusAu: number;
  orbitalPeriodDays: number;
  collectorAreaM2: number;
  materialMassKg: number;
  mercuryMasses: number;
  earthMasses: number;
  kardashevRating: number;
  targetCoveragePercent: number;
  status: 'underbuilt' | 'balanced' | 'extreme';
}

const SOLAR_LUMINOSITY_W = 3.828e26;
const SOLAR_MASS_KG = 1.98847e30;
const AU_M = 1.495978707e11;
const STEFAN_BOLTZMANN = 5.670374419e-8;
const MERCURY_MASS_KG = 3.3011e23;
const EARTH_MASS_KG = 5.9722e24;
const DAY_SECONDS = 86400;
const GRAVITATIONAL_CONSTANT = 6.6743e-11;

export const STAR_PRESETS: StarPreset[] = [
  { id: 'm-dwarf', name: 'M dwarf', luminositySolar: 0.035, massSolar: 0.35, radiusSolar: 0.42, temperatureK: 3400 },
  { id: 'sun', name: 'Sun-like G star', luminositySolar: 1, massSolar: 1, radiusSolar: 1, temperatureK: 5772 },
  { id: 'a-star', name: 'A-type main sequence', luminositySolar: 25, massSolar: 2.1, radiusSolar: 1.9, temperatureK: 9000 },
  { id: 'red-giant', name: 'Red giant', luminositySolar: 900, massSolar: 1.5, radiusSolar: 60, temperatureK: 3800 },
  { id: 'blue-giant', name: 'Blue giant', luminositySolar: 20000, massSolar: 12, radiusSolar: 7, temperatureK: 22000 },
];

export const STRUCTURE_PRESETS: StructurePreset[] = [
  { id: 'swarm', name: 'Dyson swarm', coverageEfficiency: 0.82, arealDensityKgM2: 0.35, thermalLimitK: 1100, stabilityFactor: 1.15 },
  { id: 'ring', name: 'Equatorial ring', coverageEfficiency: 0.22, arealDensityKgM2: 1.4, thermalLimitK: 900, stabilityFactor: 0.62 },
  { id: 'shell', name: 'Rigid shell', coverageEfficiency: 0.96, arealDensityKgM2: 8.5, thermalLimitK: 750, stabilityFactor: 0.28 },
  { id: 'statite-cloud', name: 'Statite mirror cloud', coverageEfficiency: 0.68, arealDensityKgM2: 0.08, thermalLimitK: 650, stabilityFactor: 0.88 },
];

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function findStar(id: StarType): StarPreset {
  return STAR_PRESETS.find((star) => star.id === id) ?? STAR_PRESETS[1];
}

function findStructure(id: StructureType): StructurePreset {
  return STRUCTURE_PRESETS.find((structure) => structure.id === id) ?? STRUCTURE_PRESETS[0];
}

function kardashevPower(rating: number): number {
  return Math.pow(10, (rating * 10) + 6);
}

function getDysonStatus(ratio: number): DysonResult['status'] {
  if (ratio < 0.85) return 'underbuilt';
  if (ratio > 2.5) return 'extreme';
  return 'balanced';
}

export function calculateDyson(input: DysonInput): DysonResult {
  const star = findStar(input.star);
  const structure = findStructure(input.structure);
  const luminosityWatts = star.luminositySolar * SOLAR_LUMINOSITY_W;
  const safeTemp = clamp(Math.min(input.operatingTempK, structure.thermalLimitK), 120, 1600);
  const optimalRadiusM = Math.sqrt(luminosityWatts / (16 * Math.PI * STEFAN_BOLTZMANN * Math.pow(safeTemp, 4)));
  const optimalRadiusAu = optimalRadiusM / AU_M;
  const coverageFraction = clamp(input.coveragePercent / 100, 0.001, 1);
  const capturedWatts = luminosityWatts * coverageFraction * structure.coverageEfficiency;
  const collectorAreaM2 = 4 * Math.PI * optimalRadiusM * optimalRadiusM * coverageFraction / Math.max(0.05, structure.coverageEfficiency);
  const materialMassKg = collectorAreaM2 * structure.arealDensityKgM2 * structure.stabilityFactor;
  const orbitalPeriodDays = (2 * Math.PI * Math.sqrt(Math.pow(optimalRadiusM, 3) / (GRAVITATIONAL_CONSTANT * star.massSolar * SOLAR_MASS_KG))) / DAY_SECONDS;
  const kardashevRating = (Math.log10(capturedWatts) - 6) / 10;
  const targetCoveragePercent = clamp((kardashevPower(input.kardashevTarget) / (luminosityWatts * structure.coverageEfficiency)) * 100, 0, 100);
  const ratio = input.coveragePercent / Math.max(0.01, targetCoveragePercent);
  const status = getDysonStatus(ratio);

  return {
    luminosityWatts,
    capturedWatts,
    optimalRadiusAu,
    orbitalPeriodDays,
    collectorAreaM2,
    materialMassKg,
    mercuryMasses: materialMassKg / MERCURY_MASS_KG,
    earthMasses: materialMassKg / EARTH_MASS_KG,
    kardashevRating,
    targetCoveragePercent,
    status,
  };
}
