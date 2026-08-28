import { describe, expect, it } from 'vitest';
import {
  calculateProfile,
  genotypeFrequency,
  getPreset,
  validateLocus,
} from './logic';

describe('DNA profile match probability logic', () => {
  it('uses p squared for a homozygote', () => {
    expect(genotypeFrequency({ name: 'D1', allele1: '10', allele2: '10', frequency1: 0.2, frequency2: 0.2 })).toBeCloseTo(0.04);
  });

  it('uses 2pq for a heterozygote', () => {
    expect(genotypeFrequency({ name: 'D1', allele1: '10', allele2: '11', frequency1: 0.2, frequency2: 0.3 })).toBe(0.12);
  });

  it('multiplies independent loci in log space', () => {
    const result = calculateProfile([
      { name: 'D1', allele1: '10', allele2: '10', frequency1: 0.2, frequency2: 0.2 },
      { name: 'D2', allele1: '12', allele2: '13', frequency1: 0.2, frequency2: 0.3 },
    ]);
    expect(result.validLoci).toBe(2);
    expect(result.combinedProbability).toBeCloseTo(0.0048);
    expect(result.log10CombinedProbability).toBeCloseTo(Math.log10(0.0048));
  });

  it('flags missing names and out of range frequencies', () => {
    expect(validateLocus({ name: '', allele1: '10', allele2: '', frequency1: 0, frequency2: 1.2 })).toEqual([
      'locusName',
      'allele2',
      'frequency1',
      'frequency2',
    ]);
  });

  it('rejects impossible frequency pairs and mismatched homozygote frequencies', () => {
    expect(validateLocus({ name: 'D1', allele1: '10', allele2: '11', frequency1: 0.7, frequency2: 0.4 })).toContain('frequencySum');
    expect(validateLocus({ name: 'D1', allele1: '10', allele2: '10', frequency1: 0.2, frequency2: 0.3 })).toContain('matchingFrequency');
  });

  it('keeps invalid loci out of the combined product', () => {
    const result = calculateProfile([
      { name: 'D1', allele1: '10', allele2: '11', frequency1: 0.2, frequency2: 0.3 },
      { name: '', allele1: '12', allele2: '13', frequency1: 0.2, frequency2: 0.3 },
    ]);
    expect(result.validLoci).toBe(1);
    expect(result.combinedProbability).toBeCloseTo(0.12);
  });

  it('returns cloned preset data', () => {
    const first = getPreset('balanced');
    first.loci[0]!.name = 'Changed';
    expect(getPreset('balanced').loci[0]!.name).toBe('D3S1358');
  });
});
