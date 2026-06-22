export interface TwinParadoxInput {
  earthYears: number;
  velocityFractionC: number;
}

export interface TwinParadoxResult {
  gamma: number;
  shipYears: number;
  ageGapYears: number;
  earthDistanceLightYears: number;
  contractedDistanceLightYears: number;
  shipClockRatePercent: number;
}

export function calculateTwinParadox(input: TwinParadoxInput): TwinParadoxResult {
  const earthYears = Math.max(0, input.earthYears);
  const velocityFractionC = Math.min(0.999, Math.max(0.01, input.velocityFractionC));
  const gamma = 1 / Math.sqrt(1 - velocityFractionC * velocityFractionC);
  const shipYears = earthYears / gamma;
  const ageGapYears = earthYears - shipYears;
  const earthDistanceLightYears = (velocityFractionC * earthYears) / 2;
  const contractedDistanceLightYears = earthDistanceLightYears / gamma;
  const shipClockRatePercent = (1 / gamma) * 100;

  return {
    gamma,
    shipYears,
    ageGapYears,
    earthDistanceLightYears,
    contractedDistanceLightYears,
    shipClockRatePercent,
  };
}
