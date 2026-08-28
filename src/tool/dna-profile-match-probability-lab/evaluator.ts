import type { ProfileMatchResult } from './logic';

export type EvaluationLevel = 'invalid' | 'review' | 'calculated';

export interface ProfileEvaluation {
  level: EvaluationLevel;
  badgeKey: string;
  detailKey: string;
}

export function evaluateProfile(result: ProfileMatchResult): ProfileEvaluation {
  if (result.totalLoci < 2 || result.validLoci < result.totalLoci) {
    return { level: 'invalid', badgeKey: 'badgeNeedsData', detailKey: 'needsData' };
  }
  if (result.validLoci < 4) {
    return { level: 'review', badgeKey: 'badgeExploratory', detailKey: 'exploratoryResult' };
  }
  return { level: 'calculated', badgeKey: 'badgeCalculated', detailKey: 'calculatedResult' };
}
