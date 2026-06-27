export type GlassReference = 'sodaLime' | 'borosilicate' | 'leadCrystal' | 'tempered';
export type FocusDirection = 'raised' | 'lowered';

export interface GlassProfile {
  id: GlassReference;
  refractiveIndex: number;
  dispersion: number;
}

export interface BeckeLineInput {
  temperatureC: number;
  glass: GlassReference;
  focusDirection: FocusDirection;
}

export interface BeckeLineResult {
  temperatureC: number;
  temperatureF: number;
  liquidIndex: number;
  glassIndex: number;
  delta: number;
  absDelta: number;
  matchQuality: number;
  haloOpacity: number;
  haloOffset: number;
  lineDirection: 'inward' | 'outward' | 'matched';
  interpretationKey: string;
}

export const GLASS_PROFILES: Record<GlassReference, GlassProfile> = {
  sodaLime: {
    id: 'sodaLime',
    refractiveIndex: 1.517,
    dispersion: 0.012,
  },
  borosilicate: {
    id: 'borosilicate',
    refractiveIndex: 1.474,
    dispersion: 0.008,
  },
  leadCrystal: {
    id: 'leadCrystal',
    refractiveIndex: 1.545,
    dispersion: 0.018,
  },
  tempered: {
    id: 'tempered',
    refractiveIndex: 1.522,
    dispersion: 0.014,
  },
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export class RefractiveIndexCalculator {
  private readonly referenceTemperatureC = 25;
  private readonly referenceLiquidIndex = 1.565;
  private readonly thermalCoefficient = -0.00042;

  calculateLiquidIndex(temperatureC: number): number {
    const index = this.referenceLiquidIndex + ((temperatureC - this.referenceTemperatureC) * this.thermalCoefficient);
    return Number(index.toFixed(5));
  }

  simulate(input: BeckeLineInput): BeckeLineResult {
    const glass = GLASS_PROFILES[input.glass] ?? GLASS_PROFILES.sodaLime;
    const temperatureC = clamp(input.temperatureC, 15, 145);
    const liquidIndex = this.calculateLiquidIndex(temperatureC);
    const delta = Number((glass.refractiveIndex - liquidIndex).toFixed(5));
    const absDelta = Math.abs(delta);
    const matchQuality = Math.round(clamp(100 - (absDelta / 0.035) * 100, 0, 100));
    const isMatched = absDelta < 0.0012;
    const baseDirection = delta > 0 ? 'inward' : 'outward';
    const lineDirection = isMatched ? 'matched' : baseDirection;
    const focusMultiplier = input.focusDirection === 'raised' ? 1 : -1;
    const directionMultiplier = baseDirection === 'inward' ? -1 : 1;

    return {
      temperatureC: Number(temperatureC.toFixed(1)),
      temperatureF: Number(((temperatureC * 9 / 5) + 32).toFixed(1)),
      liquidIndex,
      glassIndex: glass.refractiveIndex,
      delta,
      absDelta: Number(absDelta.toFixed(5)),
      matchQuality,
      haloOpacity: Number(clamp(absDelta / 0.018, 0.05, 1).toFixed(2)),
      haloOffset: Number((directionMultiplier * focusMultiplier * clamp(absDelta * 900, 0, 24)).toFixed(1)),
      lineDirection,
      interpretationKey: this.getInterpretationKey(isMatched, baseDirection),
    };
  }

  private getInterpretationKey(isMatched: boolean, baseDirection: 'inward' | 'outward'): string {
    if (isMatched) return 'interpMatched';
    if (baseDirection === 'inward') return 'interpGlassHigher';
    return 'interpLiquidHigher';
  }
}
