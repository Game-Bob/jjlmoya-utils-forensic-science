export type SolventSystem = 'ethanolWater' | 'butanolAcetic' | 'isopropanolAmmonia';
export type InkSample = 'ransomNote' | 'bluePen' | 'blackPen' | 'gelPen';

export interface PigmentProfile {
  id: string;
  labelKey: string;
  color: string;
  affinity: number;
  polarity: number;
}

export interface InkProfile {
  id: InkSample;
  pigments: PigmentProfile[];
}

export interface SolventProfile {
  id: SolventSystem;
  polarityPower: number;
  capillaryRate: number;
}

export interface TlcBand {
  id: string;
  labelKey: string;
  color: string;
  distanceMm: number;
  rf: number;
  widthMm: number;
}

export interface TlcSimulation {
  timeMinutes: number;
  solventFrontMm: number;
  plateHeightMm: number;
  originMm: number;
  solvent: SolventProfile;
  ink: InkProfile;
  bands: TlcBand[];
  matchScore: number;
}

export const SOLVENTS: Record<SolventSystem, SolventProfile> = {
  ethanolWater: {
    id: 'ethanolWater',
    polarityPower: 0.62,
    capillaryRate: 23,
  },
  butanolAcetic: {
    id: 'butanolAcetic',
    polarityPower: 0.78,
    capillaryRate: 18,
  },
  isopropanolAmmonia: {
    id: 'isopropanolAmmonia',
    polarityPower: 0.88,
    capillaryRate: 21,
  },
};

export const INKS: Record<InkSample, InkProfile> = {
  ransomNote: {
    id: 'ransomNote',
    pigments: [
      { id: 'r-blue', labelKey: 'pigmentCyanDye', color: '#0ea5e9', affinity: 0.72, polarity: 0.68 },
      { id: 'r-violet', labelKey: 'pigmentVioletDye', color: '#8b5cf6', affinity: 0.54, polarity: 0.74 },
      { id: 'r-gray', labelKey: 'pigmentGrayCarrier', color: '#475569', affinity: 0.31, polarity: 0.42 },
    ],
  },
  bluePen: {
    id: 'bluePen',
    pigments: [
      { id: 'b-cyan', labelKey: 'pigmentCyanDye', color: '#0284c7', affinity: 0.71, polarity: 0.66 },
      { id: 'b-violet', labelKey: 'pigmentVioletDye', color: '#7c3aed', affinity: 0.55, polarity: 0.72 },
      { id: 'b-navy', labelKey: 'pigmentNavyDye', color: '#1e3a8a', affinity: 0.36, polarity: 0.5 },
    ],
  },
  blackPen: {
    id: 'blackPen',
    pigments: [
      { id: 'k-yellow', labelKey: 'pigmentYellowDye', color: '#eab308', affinity: 0.83, polarity: 0.58 },
      { id: 'k-red', labelKey: 'pigmentRedDye', color: '#dc2626', affinity: 0.58, polarity: 0.64 },
      { id: 'k-blue', labelKey: 'pigmentBlueDye', color: '#2563eb', affinity: 0.42, polarity: 0.71 },
      { id: 'k-carbon', labelKey: 'pigmentDarkBinder', color: '#111827', affinity: 0.18, polarity: 0.32 },
    ],
  },
  gelPen: {
    id: 'gelPen',
    pigments: [
      { id: 'g-teal', labelKey: 'pigmentTealDye', color: '#14b8a6', affinity: 0.66, polarity: 0.75 },
      { id: 'g-magenta', labelKey: 'pigmentMagentaDye', color: '#db2777', affinity: 0.49, polarity: 0.8 },
      { id: 'g-black', labelKey: 'pigmentGelBinder', color: '#334155', affinity: 0.22, polarity: 0.38 },
    ],
  },
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export class ChromatographyPhysics {
  private readonly plateHeightMm = 80;
  private readonly originMm = 8;

  simulate(timeMinutes: number, inkSample: InkSample, solventSystem: SolventSystem): TlcSimulation {
    const ink = INKS[inkSample] ?? INKS.ransomNote;
    const solvent = SOLVENTS[solventSystem] ?? SOLVENTS.ethanolWater;
    const usableHeight = this.plateHeightMm - this.originMm - 7;
    const solventFrontMm = this.originMm + clamp(Math.sqrt(timeMinutes) * solvent.capillaryRate, 8, usableHeight);
    const travelMm = solventFrontMm - this.originMm;
    const bands = ink.pigments.map((pigment, index) => {
      const polarityFit = 1 - Math.abs(pigment.polarity - solvent.polarityPower);
      const rf = clamp((pigment.affinity * 0.72) + (polarityFit * 0.24) - (index * 0.025), 0.08, 0.94);
      const distanceMm = travelMm * rf;

      return {
        id: pigment.id,
        labelKey: pigment.labelKey,
        color: pigment.color,
        distanceMm: Number(distanceMm.toFixed(1)),
        rf: Number(rf.toFixed(2)),
        widthMm: Number((3.6 + (1 - polarityFit) * 5).toFixed(1)),
      };
    });

    return {
      timeMinutes,
      solventFrontMm: Number(solventFrontMm.toFixed(1)),
      plateHeightMm: this.plateHeightMm,
      originMm: this.originMm,
      solvent,
      ink,
      bands,
      matchScore: this.compareToRansomPattern(bands, solventFrontMm - this.originMm),
    };
  }

  private compareToRansomPattern(bands: TlcBand[], solventTravelMm: number): number {
    const reference = INKS.ransomNote.pigments.map((pigment) => pigment.affinity).sort((a, b) => a - b);
    const observed = bands.map((band) => band.distanceMm / solventTravelMm).sort((a, b) => a - b);
    const comparisons = Math.min(reference.length, observed.length);
    let penalty = Math.abs(reference.length - observed.length) * 18;

    for (let index = 0; index < comparisons; index++) {
      const refVal = reference[index] ?? 0;
      const obsVal = observed[index] ?? 0;
      penalty += Math.abs(refVal - obsVal) * 100;
    }

    return Math.round(clamp(100 - penalty, 0, 100));
  }
}
