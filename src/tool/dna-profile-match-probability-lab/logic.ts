export interface LocusInput {
  name: string;
  allele1: string;
  allele2: string;
  frequency1: number;
  frequency2: number;
}

export interface ProfilePreset {
  id: string;
  loci: LocusInput[];
}

export interface LocusResult extends LocusInput {
  genotypeFrequency: number;
  log10Frequency: number;
  formula: 'p²' | '2pq';
  errors: string[];
}

export interface ProfileMatchResult {
  loci: LocusResult[];
  validLoci: number;
  totalLoci: number;
  combinedProbability: number;
  log10CombinedProbability: number;
  errors: string[];
}

export const MIN_LOCI = 2;
export const MAX_LOCI = 8;

export const PROFILE_PRESETS: ProfilePreset[] = [
  {
    id: 'balanced',
    loci: [
      { name: 'D3S1358', allele1: '15', allele2: '16', frequency1: 0.08, frequency2: 0.26 },
      { name: 'vWA', allele1: '16', allele2: '17', frequency1: 0.18, frequency2: 0.22 },
      { name: 'FGA', allele1: '21', allele2: '24', frequency1: 0.07, frequency2: 0.11 },
      { name: 'D8S1179', allele1: '12', allele2: '13', frequency1: 0.15, frequency2: 0.2 },
      { name: 'TH01', allele1: '6', allele2: '9.3', frequency1: 0.27, frequency2: 0.21 },
    ],
  },
  {
    id: 'homozygote',
    loci: [
      { name: 'D3S1358', allele1: '15', allele2: '15', frequency1: 0.08, frequency2: 0.08 },
      { name: 'vWA', allele1: '16', allele2: '16', frequency1: 0.18, frequency2: 0.18 },
      { name: 'FGA', allele1: '21', allele2: '21', frequency1: 0.07, frequency2: 0.07 },
      { name: 'D8S1179', allele1: '12', allele2: '12', frequency1: 0.15, frequency2: 0.15 },
      { name: 'TH01', allele1: '6', allele2: '6', frequency1: 0.27, frequency2: 0.27 },
    ],
  },
  {
    id: 'classroom',
    loci: [
      { name: 'Locus 1', allele1: 'A', allele2: 'B', frequency1: 0.5, frequency2: 0.3 },
      { name: 'Locus 2', allele1: 'B', allele2: 'C', frequency1: 0.3, frequency2: 0.2 },
      { name: 'Locus 3', allele1: 'A', allele2: 'A', frequency1: 0.5, frequency2: 0.5 },
    ],
  },
];

export const DEFAULT_PRESET_ID = 'balanced';

function sameAllele(first: string, second: string): boolean {
  return first.trim().toLowerCase() === second.trim().toLowerCase();
}

function validFrequency(value: number): boolean {
  return Number.isFinite(value) && value > 0 && value <= 1;
}

function hasValidFrequencyPair(locus: LocusInput): boolean {
  return validFrequency(locus.frequency1) && validFrequency(locus.frequency2);
}

function exceedsFrequencyTotal(locus: LocusInput): boolean {
  return hasValidFrequencyPair(locus) && locus.frequency1 + locus.frequency2 > 1;
}

function hasMismatchedHomozygoteFrequencies(locus: LocusInput): boolean {
  return sameAllele(locus.allele1, locus.allele2) && Math.abs(locus.frequency1 - locus.frequency2) > 0.000001;
}

export function validateLocus(locus: LocusInput): string[] {
  const errors: string[] = [];
  if (!locus.name.trim()) errors.push('locusName');
  if (!locus.allele1.trim()) errors.push('allele1');
  if (!locus.allele2.trim()) errors.push('allele2');
  if (!validFrequency(locus.frequency1)) errors.push('frequency1');
  if (!validFrequency(locus.frequency2)) errors.push('frequency2');
  if (exceedsFrequencyTotal(locus)) errors.push('frequencySum');
  if (hasMismatchedHomozygoteFrequencies(locus)) errors.push('matchingFrequency');
  return errors;
}

export function genotypeFrequency(locus: LocusInput): number {
  if (sameAllele(locus.allele1, locus.allele2)) return locus.frequency1 ** 2;
  return 2 * locus.frequency1 * locus.frequency2;
}

function resultForLocus(locus: LocusInput): LocusResult {
  const errors = validateLocus(locus);
  const frequency = errors.length > 0 ? 0 : genotypeFrequency(locus);
  return {
    ...locus,
    genotypeFrequency: frequency,
    log10Frequency: frequency > 0 ? Math.log10(frequency) : 0,
    formula: sameAllele(locus.allele1, locus.allele2) ? 'p²' : '2pq',
    errors,
  };
}

export function calculateProfile(loci: LocusInput[]): ProfileMatchResult {
  const results = loci.map(resultForLocus);
  const valid = results.filter((locus) => locus.errors.length === 0);
  const errors = results.flatMap((locus) => locus.errors);
  const log10CombinedProbability = valid.length > 0
    ? valid.reduce((sum, locus) => sum + locus.log10Frequency, 0)
    : 0;
  const combinedProbability = valid.length > 0 ? 10 ** log10CombinedProbability : 0;
  return {
    loci: results,
    validLoci: valid.length,
    totalLoci: results.length,
    combinedProbability,
    log10CombinedProbability,
    errors,
  };
}

export function getPreset(id: string): ProfilePreset {
  const preset = PROFILE_PRESETS.find((item) => item.id === id) ?? PROFILE_PRESETS[0]!;
  return {
    id: preset.id,
    loci: preset.loci.map((locus) => ({ ...locus })),
  };
}
