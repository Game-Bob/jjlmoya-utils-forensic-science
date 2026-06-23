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
const evidenceWeights: Record<EvidenceType, [number, number, number]> = {
  dental: [0.55, 0.15, 0.3],
  skeletal: [0.2, 0.6, 0.2],
  mixed: [0.36, 0.36, 0.28],
};

function clampStage(value: number): number {
  return Math.min(8, Math.max(0, Math.round(value)));
}

function anchorFor(anchors: number[], stage: number): number {
  return anchors[clampStage(stage)] ?? anchors[0]!;
}

function weightedAverage(values: Array<{ value: number; weight: number }>): number {
  const totalWeight = values.reduce((sum, item) => sum + item.weight, 0);
  return values.reduce((sum, item) => sum + item.value * item.weight, 0) / totalWeight;
}

function confidenceFor(spread: number): AgeEstimatorResult['confidence'] {
  if (spread <= 2) return 'strong';
  if (spread <= 4) return 'moderate';
  return 'exploratory';
}

function notesFor(spread: number): string[] {
  const notes = ['noteTriage', 'noteFinalAssessment'];

  if (spread > 4) notes.push('noteWideInterval');
  return notes;
}

export function estimateForensicAge(input: AgeEstimatorInput): AgeEstimatorResult {
  const dentalStage = clampStage(input.dentalStage);
  const epiphysealStage = clampStage(input.epiphysealStage);
  const thirdMolarStage = clampStage(input.thirdMolarStage);
  const dentalAge = anchorFor(dentalAnchors, dentalStage);
  const epiphysealAge = anchorFor(epiphysealAnchors, epiphysealStage);
  const thirdMolarAge = anchorFor(thirdMolarAnchors, thirdMolarStage);
  const [dentalWeight, epiphysealWeight, thirdMolarWeight] = evidenceWeights[input.evidenceType];
  const weights = [
    { value: dentalAge, weight: dentalWeight },
    { value: epiphysealAge, weight: epiphysealWeight },
    { value: thirdMolarAge, weight: thirdMolarWeight },
  ];

  const likelyAge = weightedAverage(weights);
  const spread = Math.max(dentalAge, epiphysealAge, thirdMolarAge) - Math.min(dentalAge, epiphysealAge, thirdMolarAge);
  const uncertainty = input.evidenceType === 'mixed' ? 1.8 + spread * 0.18 : 2.3 + spread * 0.22;
  const maturityScore = Math.round(((dentalStage + epiphysealStage + thirdMolarStage) / 24) * 100);

  return {
    minimumAge: Math.max(0, Number((likelyAge - uncertainty).toFixed(1))),
    likelyAge: Number(likelyAge.toFixed(1)),
    maximumAge: Number((likelyAge + uncertainty).toFixed(1)),
    confidence: confidenceFor(spread),
    maturityScore,
    notes: notesFor(spread),
  };
}
