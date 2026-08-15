import { describe, it, expect } from 'vitest';
import {
  computeHenssgeConstant,
  computeHenssgeQuotient,
  solveHenssgeTime,
  computeConfidenceMargin,
  computeCoolingRate,
  computeGlaisterPmi,
  determineCoolingPhase,
  calculateAlgorMortis
} from './logic';

describe('Algor Mortis Logic Suite', () => {
  it('calculates henssge cooling constant correctly', () => {
    const k = computeHenssgeConstant(70, 1.0);
    expect(k).toBeGreaterThan(0.05);
    expect(k).toBeLessThan(0.15);
  });

  it('computes henssge quotient within valid range', () => {
    const q1 = computeHenssgeQuotient(37.2, 20);
    expect(q1).toBe(1);
    const q2 = computeHenssgeQuotient(20, 20);
    expect(q2).toBe(0);
  });

  it('solves henssge time for typical corpse cooling', () => {
    const k = computeHenssgeConstant(75, 1.1);
    const q = computeHenssgeQuotient(30.0, 18.0);
    const time = solveHenssgeTime(q, k);
    expect(time).toBeGreaterThan(5);
    expect(time).toBeLessThan(18);
  });

  it('computes confidence margin according to time ranges', () => {
    const marginShort = computeConfidenceMargin(5, 1.0);
    expect(marginShort).toBe(2.8);
    const marginMed = computeConfidenceMargin(15, 1.0);
    expect(marginMed).toBe(3.5);
    const marginLong = computeConfidenceMargin(25, 1.0);
    expect(marginLong).toBe(4.5);
  });

  it('calculates cooling rate accurately', () => {
    const rate = computeCoolingRate(6, 0.08, 18);
    expect(rate).toBeGreaterThan(0);
    expect(rate).toBeLessThan(2);
  });

  it('calculates glaister rule PMI properly', () => {
    const pmi = computeGlaisterPmi(33.05);
    expect(pmi).toBeCloseTo(5.0, 1);
  });

  it('identifies cooling phases properly', () => {
    expect(determineCoolingPhase(1.5, 36.8, 20)).toBe('plateau');
    expect(determineCoolingPhase(8.0, 31.0, 20)).toBe('descent');
    expect(determineCoolingPhase(30.0, 20.3, 20)).toBe('equilibrium');
    expect(determineCoolingPhase(0.5, 38.5, 20)).toBe('hyperthermia');
  });

  it('runs complete algor mortis calculation bundle', () => {
    const result = calculateAlgorMortis({
      rectalTemp: 29.5,
      ambientTemp: 18.0,
      bodyWeight: 70,
      correctionFactor: 1.1,
      measurementTime: '14:30',
      unitSystem: 'metric'
    });
    expect(result.pmiHours).toBeGreaterThan(0);
    expect(result.confidenceMarginHours).toBeGreaterThan(0);
    expect(result.minPmiHours).toBeLessThan(result.maxPmiHours);
    expect(result.curvePoints.length).toBeGreaterThan(10);
    expect(result.timeOfDeathEstimated).toBeDefined();
  });
});
