export interface SexDeterminatorInput {
  subpubicAngle: number;
  sciaticNotch: number;
  ventralArc: number;
  preauricularSulcus: number;
  mastoidProcess: number;
  supraorbitalRidge: number;
  mentalEminence: number;
  nuchalCrest: number;
}

export interface SexDeterminatorResult {
  femaleProbability: number;
  maleProbability: number;
  predominantSex: 'female' | 'male' | 'indeterminate';
  confidence: 'weak' | 'moderate' | 'strong';
  scoredIndicatorsCount: number;
  notes: string[];
}

const femaleLikelihoods = [0.45, 0.35, 0.12, 0.06, 0.02];
const maleLikelihoods = [0.02, 0.06, 0.12, 0.35, 0.45];

function getConfidence(count: number): 'weak' | 'moderate' | 'strong' {
  if (count >= 6) {
    return 'strong';
  }
  if (count >= 3) {
    return 'moderate';
  }
  return 'weak';
}

function getPredominantSex(femaleProb: number, maleProb: number): 'female' | 'male' | 'indeterminate' {
  if (Math.abs(femaleProb - maleProb) < 10) {
    return 'indeterminate';
  }
  return femaleProb > maleProb ? 'female' : 'male';
}

function calculateProducts(scores: number[]) {
  let female = 1.0;
  let male = 1.0;
  let count = 0;

  for (const score of scores) {
    if (score >= 1 && score <= 5) {
      const idx = score - 1;
      female *= (femaleLikelihoods[idx] ?? 0.2);
      male *= (maleLikelihoods[idx] ?? 0.2);
      count++;
    }
  }

  return { female, male, count };
}

export function determineSex(input: SexDeterminatorInput): SexDeterminatorResult {
  const scores = [
    input.subpubicAngle,
    input.sciaticNotch,
    input.ventralArc,
    input.preauricularSulcus,
    input.mastoidProcess,
    input.supraorbitalRidge,
    input.mentalEminence,
    input.nuchalCrest,
  ];

  const { female: femaleProduct, male: maleProduct, count: scoredCount } = calculateProducts(scores);

  const femaleNumerator = femaleProduct * 0.5;
  const maleNumerator = maleProduct * 0.5;
  const total = femaleNumerator + maleNumerator;

  const femaleProb = total > 0 ? (femaleNumerator / total) * 100 : 50;
  const maleProb = total > 0 ? (maleNumerator / total) * 100 : 50;

  const notes = scoredCount === 0 ? ['noteNoData'] : ['noteTriageOnly', 'noteBayesianEst'];

  return {
    femaleProbability: Math.round(femaleProb),
    maleProbability: Math.round(maleProb),
    predominantSex: getPredominantSex(femaleProb, maleProb),
    confidence: getConfidence(scoredCount),
    scoredIndicatorsCount: scoredCount,
    notes,
  };
}
