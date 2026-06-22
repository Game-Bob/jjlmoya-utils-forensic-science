export interface AlbedoInput {
  solarConstant: number;
  greenhousePpm: number;
  initialIceCover: number;
}

export interface AlbedoStep {
  year: number;
  temperatureC: number;
  iceCover: number;
  albedo: number;
}

export interface AlbedoResult {
  absorbedWattsM2: number;
  greenhouseForcingWattsM2: number;
  equilibriumTemperatureC: number;
  finalIceCover: number;
  finalAlbedo: number;
  stability: 'snowball' | 'temperate' | 'hothouse';
  steps: AlbedoStep[];
}

const STEFAN_BOLTZMANN = 5.670374419e-8;
const REFERENCE_CO2_PPM = 280;
const ICE_ALBEDO = 0.62;
const OCEAN_LAND_ALBEDO = 0.24;
const EARTH_GREENHOUSE_OFFSET_C = 33;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function albedoFromIceCover(iceCover: number): number {
  const iceFraction = clamp(iceCover / 100, 0, 1);
  return OCEAN_LAND_ALBEDO + (ICE_ALBEDO - OCEAN_LAND_ALBEDO) * iceFraction;
}

export function greenhouseForcing(greenhousePpm: number): number {
  return 5.35 * Math.log(Math.max(1, greenhousePpm) / REFERENCE_CO2_PPM);
}

export function radiativeTemperatureC(solarConstant: number, albedo: number, greenhousePpm: number): number {
  const absorbed = solarConstant * (1 - albedo) / 4;
  const effectiveTemperatureK = Math.pow(absorbed / STEFAN_BOLTZMANN, 0.25);
  const greenhouseOffset = EARTH_GREENHOUSE_OFFSET_C + greenhouseForcing(greenhousePpm) * 0.82;

  return effectiveTemperatureK - 273.15 + greenhouseOffset;
}

function nextIceCover(iceCover: number, temperatureC: number): number {
  const freezePressure = clamp((-temperatureC - 2) * 1.18, -9, 14);
  const meltPressure = clamp((temperatureC - 7) * 0.72, 0, 9);
  const albedoMomentum = iceCover > 55 && temperatureC < 2 ? 3.8 : 0;

  return clamp(iceCover + freezePressure - meltPressure + albedoMomentum, 0, 100);
}

function classify(finalIceCover: number, temperatureC: number): AlbedoResult['stability'] {
  if (finalIceCover >= 82 && temperatureC < -8) return 'snowball';
  if (finalIceCover <= 8 && temperatureC > 27) return 'hothouse';
  return 'temperate';
}

export function simulateAlbedo(input: AlbedoInput, years = 80): AlbedoResult {
  let iceCover = clamp(input.initialIceCover, 0, 100);
  const steps: AlbedoStep[] = [];

  for (let year = 0; year <= years; year += 1) {
    const albedo = albedoFromIceCover(iceCover);
    const temperatureC = radiativeTemperatureC(input.solarConstant, albedo, input.greenhousePpm);
    steps.push({ year, temperatureC, iceCover, albedo });
    iceCover = nextIceCover(iceCover, temperatureC);
  }

  const final = steps[steps.length - 1] ?? steps[0]!;
  const finalAlbedo = final.albedo;

  return {
    absorbedWattsM2: input.solarConstant * (1 - finalAlbedo) / 4,
    greenhouseForcingWattsM2: greenhouseForcing(input.greenhousePpm),
    equilibriumTemperatureC: final.temperatureC,
    finalIceCover: final.iceCover,
    finalAlbedo,
    stability: classify(final.iceCover, final.temperatureC),
    steps,
  };
}
