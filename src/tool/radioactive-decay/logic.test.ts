import { describe, expect, it } from 'vitest';
import { calculateRemainingFraction, simulateDecay } from './logic';

describe('radioactive decay logic', () => {
  it('halves the remaining fraction every half-life', () => {
    expect(calculateRemainingFraction(0, 10)).toBe(1);
    expect(calculateRemainingFraction(10, 10)).toBeCloseTo(0.5);
    expect(calculateRemainingFraction(20, 10)).toBeCloseTo(0.25);
  });

  it('creates deterministic stochastic atom states from a seed', () => {
    const first = simulateDecay({ initialAtoms: 80, halfLife: 8, elapsedTime: 8, seed: 11 });
    const second = simulateDecay({ initialAtoms: 80, halfLife: 8, elapsedTime: 8, seed: 11 });

    expect(first.decayedAtoms).toBe(second.decayedAtoms);
    expect(first.atoms).toEqual(second.atoms);
    expect(first.remainingFraction).toBeCloseTo(0.5);
  });
});

