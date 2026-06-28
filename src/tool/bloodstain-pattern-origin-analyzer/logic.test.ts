import { describe, expect, it } from 'vitest';
import { BloodstainCalculator, analyzeBloodstains } from './logic';

describe('bloodstain pattern origin analyzer', () => {
  it('calculates a 30 degree impact angle from a 1 cm by 2 cm stain', () => {
    const calculator = new BloodstainCalculator();

    expect(calculator.calculateImpactAngleDeg(1, 2)).toBeCloseTo(30, 8);
  });

  it('resolves a compact origin region from three convergent trajectories', () => {
    const result = analyzeBloodstains([
      { id: 'A', xCm: 0, yCm: 0, widthCm: 1.2, lengthCm: 2, rotationDeg: 0 },
      { id: 'B', xCm: 24, yCm: 0, widthCm: 1.08, lengthCm: 2, rotationDeg: 30.3 },
      { id: 'C', xCm: -24, yCm: 0, widthCm: 1.08, lengthCm: 2, rotationDeg: -30.3 },
    ]);

    expect(result.point.x).toBeCloseTo(0, 0);
    expect(result.point.y).toBeCloseTo(37, 0);
    expect(result.point.z).toBeCloseTo(28, 0);
    expect(result.spreadCm).toBeLessThan(2);
  });
});
