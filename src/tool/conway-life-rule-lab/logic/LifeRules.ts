export type NeighborCount = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface LifeRuleSet {
  birth: Set<NeighborCount>;
  survival: Set<NeighborCount>;
  notation: string;
}

export interface RulePreset {
  id: string;
  notation: string;
}

const countPattern = /^[0-8]*$/;

export const RULE_PRESETS: RulePreset[] = [
  {
    id: 'classic',
    notation: 'B3/S23',
  },
  {
    id: 'highlife',
    notation: 'B36/S23',
  },
  {
    id: 'seeds',
    notation: 'B2/S',
  },
  {
    id: 'day-night',
    notation: 'B3678/S34678',
  },
];

export function parseRuleNotation(input: string): LifeRuleSet {
  const normalized = input.trim().toUpperCase().replace(/\s+/g, '');
  const match = /^B([0-8]*)\/?S([0-8]*)$/.exec(normalized);

  if (!match || !countPattern.test(match[1]) || !countPattern.test(match[2])) {
    throw new Error('INVALID_RULE_NOTATION');
  }

  return {
    birth: toCountSet(match[1]),
    survival: toCountSet(match[2]),
    notation: `B${match[1]}/S${match[2]}`,
  };
}

export function formatRuleSet(ruleSet: LifeRuleSet): string {
  return `B${formatCounts(ruleSet.birth)}/S${formatCounts(ruleSet.survival)}`;
}

function toCountSet(value: string): Set<NeighborCount> {
  return new Set([...value].map((count) => Number(count) as NeighborCount));
}

function formatCounts(counts: Set<NeighborCount>): string {
  return [...counts].sort((a, b) => a - b).join('');
}
