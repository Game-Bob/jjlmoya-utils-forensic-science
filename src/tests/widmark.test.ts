import { describe, it, expect } from 'vitest';
import { WidmarkEngine } from '../tool/widmark-alcohol-simulator/logic';

describe('WidmarkEngine simulation tests', () => {
  it('should calculate correct BAC and linear decay for an 80kg male', () => {
    const profile = {
      weight: 80,
      sex: 'male' as const,
      hydration: 'normal' as const,
      stomach: 'empty' as const,
    };
    const drinks = [
      { volume: 1000, abv: 5, time: 0 },
    ];
    
    const result = WidmarkEngine.simulate(profile, drinks);
    expect(result.peakBac).toBeGreaterThan(0.5);
    expect(result.peakBac).toBeLessThan(0.75);

    const peakIndex = result.datapoints.findIndex(dp => dp.bac === result.peakBac);
    expect(peakIndex).toBeGreaterThan(0);

    const step1 = result.datapoints[peakIndex + 5]!;
    const step2 = result.datapoints[peakIndex + 15]!;
    const rate = (step1.bac - step2.bac) / ((step2.time - step1.time));
    expect(rate).toBeCloseTo(0.15, 1);
  });
});
