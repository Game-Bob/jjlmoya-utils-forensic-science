export type EvidenceType = 'dental' | 'skeletal' | 'mixed';

export interface AgeEstimatorInput {
  dentalStage: number;
  epiphysealStage: number;
  thirdMolarStage: number;
  evidenceType: EvidenceType;
}

export interface AgeEstimatorResult {
  minimumAge: number;
  likelyAge: number;
  maximumAge: number;
  confidence: 'exploratory' | 'moderate' | 'strong';
  maturityScore: number;
  notes: string[];
}

const dentalAnchors = [6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5, 18];
const epiphysealAnchors = [10, 11.5, 13, 14.5, 16, 17.5, 19, 20.5, 22];
const thirdMolarAnchors = [13, 14.5, 16, 17.5, 19, 20.5, 22, 23.5, 25];

function clampStage(value: number): number {
  return Math.min(8, Math.max(0, Math.round(value)));
}

function weightedAverage(values: Array<{ value: number; weight: number }>): number {
  const totalWeight = values.reduce((sum, item) => sum + item.weight, 0);
  return values.reduce((sum, item) => sum + item.value * item.weight, 0) / totalWeight;
}

export function estimateForensicAge(input: AgeEstimatorInput): AgeEstimatorResult {
  const dentalStage = clampStage(input.dentalStage);
  const epiphysealStage = clampStage(input.epiphysealStage);
  const thirdMolarStage = clampStage(input.thirdMolarStage);
  const dentalAge = dentalAnchors[dentalStage];
  const epiphysealAge = epiphysealAnchors[epiphysealStage];
  const thirdMolarAge = thirdMolarAnchors[thirdMolarStage];

  const weights = input.evidenceType === 'dental'
    ? [{ value: dentalAge, weight: 0.55 }, { value: thirdMolarAge, weight: 0.3 }, { value: epiphysealAge, weight: 0.15 }]
    : input.evidenceType === 'skeletal'
      ? [{ value: dentalAge, weight: 0.2 }, { value: thirdMolarAge, weight: 0.2 }, { value: epiphysealAge, weight: 0.6 }]
      : [{ value: dentalAge, weight: 0.36 }, { value: thirdMolarAge, weight: 0.28 }, { value: epiphysealAge, weight: 0.36 }];

  const likelyAge = weightedAverage(weights);
  const spread = Math.max(dentalAge, epiphysealAge, thirdMolarAge) - Math.min(dentalAge, epiphysealAge, thirdMolarAge);
  const uncertainty = input.evidenceType === 'mixed' ? 1.8 + spread * 0.18 : 2.3 + spread * 0.22;
  const confidence = spread <= 2 ? 'strong' : spread <= 4 ? 'moderate' : 'exploratory';
  const maturityScore = Math.round(((dentalStage + epiphysealStage + thirdMolarStage) / 24) * 100);

  const notes = [
    'Use as a triage estimate, not as a legal age determination.',
    'Final forensic age assessment should combine radiology, dental examination, documented history, and jurisdiction-specific standards.',
  ];

  if (spread > 4) {
    notes.push('The indicators disagree by more than four years, so the interval has been widened.');
  }

  return {
    minimumAge: Math.max(0, Number((likelyAge - uncertainty).toFixed(1))),
    likelyAge: Number(likelyAge.toFixed(1)),
    maximumAge: Number((likelyAge + uncertainty).toFixed(1)),
    confidence,
    maturityScore,
    notes,
  };
}
