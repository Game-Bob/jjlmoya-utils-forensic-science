export type DrugSample = 'cocaine' | 'heroin' | 'amphetamine' | 'methamphetamine';
export type CrystalReagent = 'platinumChloride' | 'goldChloride' | 'dragendorff';
export type CrystalHabit = 'featheryNeedles' | 'rosettes' | 'branchingPrisms' | 'plates' | 'weakScatter';

export interface CrystalPattern {
  sample: DrugSample;
  reagent: CrystalReagent;
  habit: CrystalHabit;
  confidence: number;
  growthRate: number;
  birefringence: number;
  density: number;
  hue: number;
  cueKey: string;
}

export interface CrystalSeed {
  x: number;
  y: number;
  angle: number;
  length: number;
  branch: number;
  width: number;
}

export interface CrystalSimulation extends CrystalPattern {
  seeds: CrystalSeed[];
  matchLabel: 'reference-like' | 'partial' | 'non-specific';
}

const PATTERN_MAP: Record<DrugSample, Record<CrystalReagent, Omit<CrystalPattern, 'sample' | 'reagent'>>> = {
  cocaine: {
    platinumChloride: {
      habit: 'featheryNeedles',
      confidence: 92,
      growthRate: 84,
      birefringence: 78,
      density: 74,
      hue: 205,
      cueKey: 'cueCocainePlatinumChloride',
    },
    goldChloride: {
      habit: 'branchingPrisms',
      confidence: 76,
      growthRate: 68,
      birefringence: 62,
      density: 58,
      hue: 42,
      cueKey: 'cueCocaineGoldChloride',
    },
    dragendorff: {
      habit: 'weakScatter',
      confidence: 38,
      growthRate: 34,
      birefringence: 28,
      density: 36,
      hue: 28,
      cueKey: 'cueCocaineDragendorff',
    },
  },
  heroin: {
    platinumChloride: {
      habit: 'plates',
      confidence: 54,
      growthRate: 44,
      birefringence: 46,
      density: 45,
      hue: 268,
      cueKey: 'cueHeroinPlatinumChloride',
    },
    goldChloride: {
      habit: 'rosettes',
      confidence: 81,
      growthRate: 62,
      birefringence: 70,
      density: 66,
      hue: 324,
      cueKey: 'cueHeroinGoldChloride',
    },
    dragendorff: {
      habit: 'branchingPrisms',
      confidence: 70,
      growthRate: 56,
      birefringence: 52,
      density: 61,
      hue: 22,
      cueKey: 'cueHeroinDragendorff',
    },
  },
  amphetamine: {
    platinumChloride: {
      habit: 'branchingPrisms',
      confidence: 72,
      growthRate: 72,
      birefringence: 64,
      density: 58,
      hue: 184,
      cueKey: 'cueAmphetaminePlatinumChloride',
    },
    goldChloride: {
      habit: 'weakScatter',
      confidence: 42,
      growthRate: 38,
      birefringence: 35,
      density: 40,
      hue: 48,
      cueKey: 'cueAmphetamineGoldChloride',
    },
    dragendorff: {
      habit: 'featheryNeedles',
      confidence: 79,
      growthRate: 80,
      birefringence: 66,
      density: 69,
      hue: 18,
      cueKey: 'cueAmphetamineDragendorff',
    },
  },
  methamphetamine: {
    platinumChloride: {
      habit: 'rosettes',
      confidence: 68,
      growthRate: 58,
      birefringence: 74,
      density: 55,
      hue: 196,
      cueKey: 'cueMethamphetaminePlatinumChloride',
    },
    goldChloride: {
      habit: 'plates',
      confidence: 64,
      growthRate: 48,
      birefringence: 58,
      density: 50,
      hue: 52,
      cueKey: 'cueMethamphetamineGoldChloride',
    },
    dragendorff: {
      habit: 'branchingPrisms',
      confidence: 83,
      growthRate: 76,
      birefringence: 68,
      density: 72,
      hue: 30,
      cueKey: 'cueMethamphetamineDragendorff',
    },
  },
};

function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state * 1103515245 + 12345) >>> 0;
    return state / 4294967296;
  };
}

function createSeeds(pattern: CrystalPattern): CrystalSeed[] {
  const random = seededRandom(pattern.confidence * 997 + pattern.growthRate * 37 + pattern.hue);
  const count = Math.round(18 + pattern.density * 0.56);

  return Array.from({ length: count }, (_, index) => ({
    x: 8 + random() * 84,
    y: 8 + random() * 84,
    angle: random() * Math.PI * 2 + index * 0.08,
    length: 12 + random() * (18 + pattern.growthRate * 0.38),
    branch: 0.25 + random() * 0.9,
    width: 0.7 + random() * 2.1,
  }));
}

function getMatchLabel(confidence: number): CrystalSimulation['matchLabel'] {
  if (confidence >= 78) return 'reference-like';
  if (confidence >= 58) return 'partial';
  return 'non-specific';
}

export class CrystallographyEngine {
  simulate(sample: DrugSample, reagent: CrystalReagent): CrystalSimulation {
    const selected = PATTERN_MAP[sample]?.[reagent] ?? PATTERN_MAP.cocaine.platinumChloride;
    const pattern = { sample, reagent, ...selected };

    return {
      ...pattern,
      seeds: createSeeds(pattern),
      matchLabel: getMatchLabel(pattern.confidence),
    };
  }
}
