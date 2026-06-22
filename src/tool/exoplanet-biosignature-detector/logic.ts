export type MoleculeId = 'oxygen' | 'methane' | 'ozone' | 'water' | 'carbon-dioxide';
export type StarClass = 'm-dwarf' | 'sun-like' | 'k-dwarf';

export interface SpectralLine {
  wavelengthNm: number;
  depth: number;
}

export interface MoleculeSignature {
  id: MoleculeId;
  name: string;
  kind: 'biosignature' | 'context';
  lines: SpectralLine[];
  weight: number;
}

export interface BiosignatureInput {
  oxygenAlignmentNm: number;
  methaneAlignmentNm: number;
  ozoneAlignmentNm: number;
  noisePercent: number;
  stellarClass: StarClass;
  waterVaporPercent: number;
  carbonDioxidePercent: number;
}

export interface MoleculeScore {
  id: MoleculeId;
  name: string;
  alignmentNm: number;
  matchScore: number;
  confidence: number;
}

export interface BiosignatureResult {
  biologicalIndex: number;
  technologicalIndex: number;
  habitabilityIndex: number;
  falsePositiveRisk: number;
  evidence: MoleculeScore[];
  verdict: 'weak' | 'promising' | 'strong' | 'ambiguous';
}

const OXYGEN_SIGNATURE: MoleculeSignature = {
  id: 'oxygen',
  name: 'Oxygen O2',
  kind: 'biosignature',
  weight: 0.34,
  lines: [
    { wavelengthNm: 687, depth: 0.42 },
    { wavelengthNm: 760, depth: 0.92 },
  ],
};

const METHANE_SIGNATURE: MoleculeSignature = {
  id: 'methane',
  name: 'Methane CH4',
  kind: 'biosignature',
  weight: 0.3,
  lines: [
    { wavelengthNm: 890, depth: 0.46 },
    { wavelengthNm: 1660, depth: 0.82 },
  ],
};

const OZONE_SIGNATURE: MoleculeSignature = {
  id: 'ozone',
  name: 'Ozone O3',
  kind: 'biosignature',
  weight: 0.25,
  lines: [
    { wavelengthNm: 255, depth: 0.72 },
    { wavelengthNm: 960, depth: 0.5 },
  ],
};

export const MOLECULE_SIGNATURES: MoleculeSignature[] = [
  OXYGEN_SIGNATURE,
  METHANE_SIGNATURE,
  OZONE_SIGNATURE,
  {
    id: 'water',
    name: 'Water vapor H2O',
    kind: 'context',
    weight: 0.07,
    lines: [
      { wavelengthNm: 720, depth: 0.38 },
      { wavelengthNm: 940, depth: 0.66 },
    ],
  },
  {
    id: 'carbon-dioxide',
    name: 'Carbon dioxide CO2',
    kind: 'context',
    weight: 0.04,
    lines: [
      { wavelengthNm: 1570, depth: 0.5 },
      { wavelengthNm: 2000, depth: 0.72 },
    ],
  },
];

const STAR_FALSE_POSITIVE_RISK: Record<StarClass, number> = {
  'm-dwarf': 24,
  'sun-like': 11,
  'k-dwarf': 8,
};

const STAR_TECH_MULTIPLIER: Record<StarClass, number> = {
  'm-dwarf': 1.2,
  'sun-like': 1,
  'k-dwarf': 0.88,
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function moleculeScore(signature: MoleculeSignature, alignmentNm: number, noisePercent: number): MoleculeScore {
  const toleranceNm = 24 + (noisePercent * 0.42);
  const weightedMatch = signature.lines.reduce((sum, line) => {
    const offset = Math.abs(alignmentNm - line.wavelengthNm);
    const lineMatch = Math.max(0, 1 - (offset / toleranceNm));
    return sum + (lineMatch * line.depth);
  }, 0);
  const lineDepth = signature.lines.reduce((sum, line) => sum + line.depth, 0);
  const matchScore = clamp((weightedMatch / lineDepth) * 100, 0, 100);
  const confidence = clamp(matchScore - (noisePercent * 0.55), 0, 100);

  return {
    id: signature.id,
    name: signature.name,
    alignmentNm,
    matchScore,
    confidence,
  };
}

function verdictFromScores(biologicalIndex: number, technologicalIndex: number, falsePositiveRisk: number): BiosignatureResult['verdict'] {
  if (falsePositiveRisk > 48 && biologicalIndex > 52) return 'ambiguous';
  if (biologicalIndex > 72 && technologicalIndex < 62) return 'strong';
  if (biologicalIndex > 45) return 'promising';
  return 'weak';
}

export function analyzeBiosignatures(input: BiosignatureInput): BiosignatureResult {
  const noisePercent = clamp(input.noisePercent, 0, 80);
  const oxygen = moleculeScore(OXYGEN_SIGNATURE, input.oxygenAlignmentNm, noisePercent);
  const methane = moleculeScore(METHANE_SIGNATURE, input.methaneAlignmentNm, noisePercent);
  const ozone = moleculeScore(OZONE_SIGNATURE, input.ozoneAlignmentNm, noisePercent);
  const waterContext = clamp(input.waterVaporPercent, 0, 100) / 100;
  const co2Context = clamp(input.carbonDioxidePercent, 0, 100) / 100;
  const disequilibrium = Math.sqrt((oxygen.confidence / 100) * (methane.confidence / 100)) * 100;
  const ozoneShield = ozone.confidence * 0.7;
  const contextBonus = (waterContext * 12) - (Math.abs(co2Context - 0.38) * 18);
  const biologicalIndex = clamp((disequilibrium * 0.48) + (ozoneShield * 0.34) + (oxygen.confidence * 0.12) + contextBonus, 0, 100);
  const technologicalIndex = clamp(((methane.confidence * 0.25) + (oxygen.confidence * 0.2) + (ozone.confidence * 0.12) + (noisePercent * 0.45)) * STAR_TECH_MULTIPLIER[input.stellarClass], 0, 100);
  const falsePositiveRisk = clamp(STAR_FALSE_POSITIVE_RISK[input.stellarClass] + (noisePercent * 0.38) + (co2Context * 18) - (waterContext * 10), 0, 100);
  const habitabilityIndex = clamp((biologicalIndex * 0.72) + (waterContext * 18) + ((100 - falsePositiveRisk) * 0.1), 0, 100);

  return {
    biologicalIndex,
    technologicalIndex,
    habitabilityIndex,
    falsePositiveRisk,
    evidence: [oxygen, methane, ozone],
    verdict: verdictFromScores(biologicalIndex, technologicalIndex, falsePositiveRisk),
  };
}
