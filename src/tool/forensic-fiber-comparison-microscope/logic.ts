export type FiberReference = 'questionedCotton' | 'suspectCotton' | 'wool' | 'polyester' | 'nylon';
export type FiberMaterial = 'cotton' | 'wool' | 'polyester' | 'nylon';
export type FiberTwist = 'S' | 'Z' | 'irregular';
export type DyePreset = 'indigo' | 'crimson' | 'navy' | 'violet';

export interface SpectrumPoint {
  wavelength: number;
  absorbance: number;
}

export interface FiberProfile {
  id: string;
  material: FiberMaterial;
  origin: 'questioned' | 'known';
  diameterMicrons: number;
  twist: FiberTwist;
  birefringence: number;
  natural: boolean;
  dyeFamily: string;
  spectrum: SpectrumPoint[];
}

export interface FiberComparisonInput {
  left: FiberReference | FiberProfile;
  right: FiberReference;
  focus: number;
  polarizationDegrees: number;
}

export interface FiberComparisonResult {
  left: FiberProfile;
  right: FiberProfile;
  morphologyScore: number;
  spectrumScore: number;
  combinedScore: number;
  birefringenceContrast: number;
  visualSharpness: number;
  verdictKey: 'verdictStrong' | 'verdictPartial' | 'verdictDifferent';
}

export const FIBER_DATABASE: Record<FiberReference, FiberProfile> = {
  questionedCotton: {
    id: 'questionedCotton',
    material: 'cotton',
    origin: 'questioned',
    diameterMicrons: 18,
    twist: 'irregular',
    birefringence: 0.032,
    natural: true,
    dyeFamily: 'indigo reactive blue',
    spectrum: [
      { wavelength: 380, absorbance: 0.18 },
      { wavelength: 430, absorbance: 0.32 },
      { wavelength: 480, absorbance: 0.74 },
      { wavelength: 540, absorbance: 0.58 },
      { wavelength: 600, absorbance: 0.22 },
      { wavelength: 660, absorbance: 0.12 },
      { wavelength: 720, absorbance: 0.08 },
    ],
  },
  suspectCotton: {
    id: 'suspectCotton',
    material: 'cotton',
    origin: 'known',
    diameterMicrons: 19,
    twist: 'irregular',
    birefringence: 0.031,
    natural: true,
    dyeFamily: 'indigo reactive blue',
    spectrum: [
      { wavelength: 380, absorbance: 0.2 },
      { wavelength: 430, absorbance: 0.34 },
      { wavelength: 480, absorbance: 0.71 },
      { wavelength: 540, absorbance: 0.56 },
      { wavelength: 600, absorbance: 0.24 },
      { wavelength: 660, absorbance: 0.13 },
      { wavelength: 720, absorbance: 0.09 },
    ],
  },
  wool: {
    id: 'wool',
    material: 'wool',
    origin: 'known',
    diameterMicrons: 27,
    twist: 'S',
    birefringence: 0.018,
    natural: true,
    dyeFamily: 'acid crimson',
    spectrum: [
      { wavelength: 380, absorbance: 0.12 },
      { wavelength: 430, absorbance: 0.24 },
      { wavelength: 480, absorbance: 0.38 },
      { wavelength: 540, absorbance: 0.69 },
      { wavelength: 600, absorbance: 0.82 },
      { wavelength: 660, absorbance: 0.42 },
      { wavelength: 720, absorbance: 0.18 },
    ],
  },
  polyester: {
    id: 'polyester',
    material: 'polyester',
    origin: 'known',
    diameterMicrons: 14,
    twist: 'Z',
    birefringence: 0.055,
    natural: false,
    dyeFamily: 'disperse navy',
    spectrum: [
      { wavelength: 380, absorbance: 0.24 },
      { wavelength: 430, absorbance: 0.61 },
      { wavelength: 480, absorbance: 0.86 },
      { wavelength: 540, absorbance: 0.5 },
      { wavelength: 600, absorbance: 0.18 },
      { wavelength: 660, absorbance: 0.1 },
      { wavelength: 720, absorbance: 0.07 },
    ],
  },
  nylon: {
    id: 'nylon',
    material: 'nylon',
    origin: 'known',
    diameterMicrons: 16,
    twist: 'Z',
    birefringence: 0.047,
    natural: false,
    dyeFamily: 'acid violet',
    spectrum: [
      { wavelength: 380, absorbance: 0.2 },
      { wavelength: 430, absorbance: 0.28 },
      { wavelength: 480, absorbance: 0.4 },
      { wavelength: 540, absorbance: 0.77 },
      { wavelength: 600, absorbance: 0.62 },
      { wavelength: 660, absorbance: 0.25 },
      { wavelength: 720, absorbance: 0.11 },
    ],
  },
};

export const DYE_SPECTRA: Record<DyePreset, { dyeFamily: string; spectrum: SpectrumPoint[] }> = {
  indigo: {
    dyeFamily: 'indigo reactive blue',
    spectrum: FIBER_DATABASE.questionedCotton.spectrum,
  },
  crimson: {
    dyeFamily: 'acid crimson',
    spectrum: FIBER_DATABASE.wool.spectrum,
  },
  navy: {
    dyeFamily: 'disperse navy',
    spectrum: FIBER_DATABASE.polyester.spectrum,
  },
  violet: {
    dyeFamily: 'acid violet',
    spectrum: FIBER_DATABASE.nylon.spectrum,
  },
};

export interface QuestionedFiberInput {
  material: FiberMaterial;
  diameterMicrons: number;
  twist: FiberTwist;
  birefringence: number;
  dyePreset: DyePreset;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function scoreByDistance(distance: number, fullScale: number): number {
  return Math.round(clamp(100 - (distance / fullScale) * 100, 0, 100));
}

export class FiberComparisonMicroscope {
  compare(input: FiberComparisonInput): FiberComparisonResult {
    const left = this.resolveLeftProfile(input.left);
    const right = this.resolveRightProfile(input.right);
    const morphologyScore = this.calculateMorphologyScore(left, right);
    const spectrumScore = this.calculateSpectrumScore(left.spectrum, right.spectrum);
    const combinedScore = Math.round((morphologyScore * 0.48) + (spectrumScore * 0.52));
    const birefringenceContrast = Number(Math.abs(left.birefringence - right.birefringence).toFixed(3));
    const focus = clamp(input.focus, 0, 100);
    const visualSharpness = Math.round(clamp(100 - Math.abs(focus - 62) * 2.1, 10, 100));

    return {
      left,
      right,
      morphologyScore,
      spectrumScore,
      combinedScore,
      birefringenceContrast,
      visualSharpness,
      verdictKey: this.verdictForScore(combinedScore),
    };
  }

  createQuestionedFiber(input: QuestionedFiberInput): FiberProfile {
    const dye = DYE_SPECTRA[input.dyePreset] ?? DYE_SPECTRA.indigo;
    return {
      id: 'customQuestioned',
      material: input.material,
      origin: 'questioned',
      diameterMicrons: clamp(input.diameterMicrons, 8, 36),
      twist: input.twist,
      birefringence: Number(clamp(input.birefringence, 0.01, 0.065).toFixed(3)),
      natural: input.material === 'cotton' || input.material === 'wool',
      dyeFamily: dye.dyeFamily,
      spectrum: dye.spectrum,
    };
  }

  private calculateSpectrumScore(left: SpectrumPoint[], right: SpectrumPoint[]): number {
    const totalDifference = left.reduce((sum, point, index) => sum + Math.abs(point.absorbance - (right[index]?.absorbance ?? 0)), 0);
    return scoreByDistance(totalDifference, 2.1);
  }

  private resolveLeftProfile(left: FiberReference | FiberProfile): FiberProfile {
    if (typeof left === 'string') return FIBER_DATABASE[left] ?? FIBER_DATABASE.questionedCotton;
    return left;
  }

  private resolveRightProfile(right: FiberReference): FiberProfile {
    return FIBER_DATABASE[right] ?? FIBER_DATABASE.suspectCotton;
  }

  private calculateMorphologyScore(left: FiberProfile, right: FiberProfile): number {
    const diameterScore = scoreByDistance(Math.abs(left.diameterMicrons - right.diameterMicrons), 18);
    const twistScore = left.twist === right.twist ? 100 : 52;
    const materialScore = this.materialScore(left, right);
    return Math.round((diameterScore * 0.42) + (twistScore * 0.24) + (materialScore * 0.34));
  }

  private materialScore(left: FiberProfile, right: FiberProfile): number {
    if (left.material === right.material) return 100;
    if (left.natural === right.natural) return 68;
    return 34;
  }

  private verdictForScore(score: number): FiberComparisonResult['verdictKey'] {
    if (score >= 82) return 'verdictStrong';
    if (score >= 55) return 'verdictPartial';
    return 'verdictDifferent';
  }
}
