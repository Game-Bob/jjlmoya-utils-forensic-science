export interface SubstanceProfile {
  id: string;
  name: string;
  tripleTemperature: number;
  triplePressure: number;
  criticalTemperature: number;
  criticalPressure: number;
  normalBoilingPoint: number;
  fusionSlope: number;
}

export interface PhasePoint {
  temperature: number;
  pressure: number;
}

export interface PhaseSample extends PhasePoint {
  phase: 'solid' | 'liquid' | 'gas' | 'supercritical';
  proximityToCritical: number;
  latentHeatIndex: number;
}

export const SUBSTANCES: SubstanceProfile[] = [
  {
    id: 'water',
    name: 'Water',
    tripleTemperature: 273.16,
    triplePressure: 0.006,
    criticalTemperature: 647.1,
    criticalPressure: 22.06,
    normalBoilingPoint: 373.15,
    fusionSlope: -0.075,
  },
  {
    id: 'carbon-dioxide',
    name: 'Carbon dioxide',
    tripleTemperature: 216.58,
    triplePressure: 0.518,
    criticalTemperature: 304.13,
    criticalPressure: 7.38,
    normalBoilingPoint: 194.67,
    fusionSlope: 0.18,
  },
  {
    id: 'nitrogen',
    name: 'Nitrogen',
    tripleTemperature: 63.15,
    triplePressure: 0.0125,
    criticalTemperature: 126.2,
    criticalPressure: 3.4,
    normalBoilingPoint: 77.36,
    fusionSlope: 0.09,
  },
];

export function getSubstance(id: string): SubstanceProfile {
  return SUBSTANCES.find((substance) => substance.id === id) ?? SUBSTANCES[0];
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function vaporPressureAt(substance: SubstanceProfile, temperature: number): number {
  const span = substance.criticalTemperature - substance.tripleTemperature;
  const progress = clamp((temperature - substance.tripleTemperature) / span, 0, 1);
  const curved = Math.pow(progress, 1.52);
  const logTriple = Math.log10(substance.triplePressure);
  const logCritical = Math.log10(substance.criticalPressure);

  return 10 ** (logTriple + (logCritical - logTriple) * curved);
}

export function meltingPressureAt(substance: SubstanceProfile, temperature: number): number {
  const delta = temperature - substance.tripleTemperature;
  const pressure = substance.triplePressure + delta * substance.fusionSlope;

  return clamp(pressure, 0.001, substance.criticalPressure * 1.4);
}

function metricsForPhase(substance: SubstanceProfile, point: PhasePoint) {
  const criticalDistance = Math.hypot(
    (point.temperature - substance.criticalTemperature) / substance.criticalTemperature,
    (point.pressure - substance.criticalPressure) / substance.criticalPressure,
  );
  const proximityToCritical = clamp(1 - criticalDistance * 3.2, 0, 1);

  return {
    proximityToCritical,
    latentHeatIndex: clamp(1 - proximityToCritical, 0, 1),
  };
}

function lowTemperaturePhase(substance: SubstanceProfile, point: PhasePoint): PhaseSample['phase'] {
  const sublimationPressure = vaporPressureAt(substance, substance.tripleTemperature)
    * Math.exp((point.temperature - substance.tripleTemperature) / Math.max(18, substance.tripleTemperature * 0.18));

  return point.pressure >= sublimationPressure ? 'solid' : 'gas';
}

function isSolidAboveMeltingLine(substance: SubstanceProfile, point: PhasePoint): boolean {
  return substance.fusionSlope > 0
    && point.pressure > meltingPressureAt(substance, point.temperature)
    && point.temperature < substance.criticalTemperature * 0.92;
}

function determinePhase(substance: SubstanceProfile, point: PhasePoint): PhaseSample['phase'] {
  if (point.temperature >= substance.criticalTemperature && point.pressure >= substance.criticalPressure) {
    return 'supercritical';
  }

  if (point.temperature < substance.tripleTemperature) {
    return lowTemperaturePhase(substance, point);
  }

  if (isSolidAboveMeltingLine(substance, point)) {
    return 'solid';
  }

  const vaporPressure = vaporPressureAt(substance, point.temperature);
  return point.pressure >= vaporPressure ? 'liquid' : 'gas';
}

export function classifyPhase(substance: SubstanceProfile, point: PhasePoint): PhaseSample {
  const { proximityToCritical, latentHeatIndex } = metricsForPhase(substance, point);
  const phase = determinePhase(substance, point);

  return { ...point, phase, proximityToCritical, latentHeatIndex };
}

export function buildPhaseCurve(substance: SubstanceProfile, steps = 72): PhasePoint[] {
  return Array.from({ length: steps }, (_, index) => {
    const progress = index / (steps - 1);
    const temperature = substance.tripleTemperature
      + (substance.criticalTemperature - substance.tripleTemperature) * progress;

    return {
      temperature,
      pressure: vaporPressureAt(substance, temperature),
    };
  });
}

export function formatTemperature(value: number): string {
  return `${Math.round(value)} K`;
}

export function formatPressure(value: number): string {
  if (value < 0.1) return `${value.toFixed(3)} MPa`;
  if (value < 10) return `${value.toFixed(2)} MPa`;
  return `${value.toFixed(1)} MPa`;
}

export type UnitSystem = 'scientific' | 'metric' | 'imperial';

export function formatTemperatureForUnits(valueKelvin: number, unitSystem: UnitSystem): string {
  if (unitSystem === 'metric') {
    return `${Math.round(valueKelvin - 273.15)} C`;
  }

  if (unitSystem === 'imperial') {
    return `${Math.round((valueKelvin - 273.15) * (9 / 5) + 32)} F`;
  }

  return formatTemperature(valueKelvin);
}

export function formatPressureForUnits(valueMpa: number, unitSystem: UnitSystem): string {
  if (unitSystem === 'metric') {
    const kpa = valueMpa * 1000;
    return kpa >= 1000 ? `${(kpa / 1000).toFixed(2)} MPa` : `${kpa.toFixed(1)} kPa`;
  }

  if (unitSystem === 'imperial') {
    return `${(valueMpa * 145.038).toFixed(1)} psi`;
  }

  return formatPressure(valueMpa);
}
