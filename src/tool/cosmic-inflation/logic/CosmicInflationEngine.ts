export interface InflationResult {
  scaleFactorRatio: number;
  horizonRatio: number;
  finalEnergyDensity: number;
  reheatingTemperature: number;
}

export class CosmicInflationEngine {
  public calculate(efolds: number, initialEnergyScaleGev: number): InflationResult {
    const scaleFactorRatio = Math.exp(efolds);
    const horizonRatio = scaleFactorRatio;
    const finalEnergyDensity = Math.pow(initialEnergyScaleGev, 4) * Math.exp(-4 * efolds);
    const reheatingTemperature = initialEnergyScaleGev * Math.exp(-efolds);
    return {
      scaleFactorRatio,
      horizonRatio,
      finalEnergyDensity,
      reheatingTemperature,
    };
  }
}
