export type SampleType = 'blood' | 'rust' | 'bleach' | 'potato' | 'saliva';
export type ReagentType = 'km' | 'h2o2' | 'luminol';

export interface ReactionState {
  addedReagents: ReagentType[];
  color: string;
  glow: boolean;
  glowColor: string;
  intensity: number;
  durationMs: number;
  resultType: 'true-positive' | 'false-positive' | 'negative';
  descriptionKey: string;
}

interface SampleReactionDef {
  color: string;
  glow: boolean;
  glowColor: string;
  intensity: number;
  durationMs: number;
  resultType: 'true-positive' | 'false-positive' | 'negative';
  descriptionKey: string;
}

const LUMINOL_MAP: Record<SampleType, SampleReactionDef> = {
  blood: {
    color: 'clear',
    glow: true,
    glowColor: '#38bdf8',
    intensity: 1.0,
    durationMs: 8000,
    resultType: 'true-positive',
    descriptionKey: 'luminolBlood'
  },
  bleach: {
    color: 'clear',
    glow: true,
    glowColor: '#7dd3fc',
    intensity: 0.9,
    durationMs: 2000,
    resultType: 'false-positive',
    descriptionKey: 'luminolBleach'
  },
  rust: {
    color: 'clear',
    glow: true,
    glowColor: '#0284c7',
    intensity: 0.3,
    durationMs: 3000,
    resultType: 'false-positive',
    descriptionKey: 'luminolRust'
  },
  potato: {
    color: 'clear',
    glow: false,
    glowColor: '',
    intensity: 0,
    durationMs: 0,
    resultType: 'negative',
    descriptionKey: 'luminolPotato'
  },
  saliva: {
    color: 'clear',
    glow: false,
    glowColor: '',
    intensity: 0,
    durationMs: 0,
    resultType: 'negative',
    descriptionKey: 'luminolNegative'
  }
};

const KM_MAP: Record<SampleType, SampleReactionDef> = {
  blood: {
    color: '#ec4899',
    glow: false,
    glowColor: '',
    intensity: 1.0,
    durationMs: 0,
    resultType: 'true-positive',
    descriptionKey: 'kmBlood'
  },
  bleach: {
    color: '#f472b6',
    glow: false,
    glowColor: '',
    intensity: 0.8,
    durationMs: 0,
    resultType: 'false-positive',
    descriptionKey: 'kmBleach'
  },
  rust: {
    color: '#b45309',
    glow: false,
    glowColor: '',
    intensity: 0.4,
    durationMs: 0,
    resultType: 'false-positive',
    descriptionKey: 'kmRust'
  },
  potato: {
    color: '#fbcfe8',
    glow: false,
    glowColor: '',
    intensity: 0.5,
    durationMs: 0,
    resultType: 'false-positive',
    descriptionKey: 'kmPotato'
  },
  saliva: {
    color: 'clear',
    glow: false,
    glowColor: '',
    intensity: 0,
    durationMs: 0,
    resultType: 'negative',
    descriptionKey: 'kmNegative'
  }
};

export class ChemicalReactionEngine {
  public static getReaction(sample: SampleType, reagents: ReagentType[]): ReactionState {
    const hasKM = reagents.includes('km');
    const hasH2O2 = reagents.includes('h2o2');
    const hasLuminol = reagents.includes('luminol');

    if (hasLuminol) {
      return this.getLuminolReaction(sample);
    }

    if (hasKM && hasH2O2) {
      return this.getKMReaction(sample);
    }

    if (hasKM) {
      return this.getDefaultState('clear', 'kmPending');
    }

    if (hasH2O2) {
      return this.getDefaultState('clear', 'h2o2Only');
    }

    return this.getDefaultState('clear', 'noReaction');
  }

  private static getLuminolReaction(sample: SampleType): ReactionState {
    const def = LUMINOL_MAP[sample];
    return {
      addedReagents: ['luminol'],
      ...def
    };
  }

  private static getKMReaction(sample: SampleType): ReactionState {
    const def = KM_MAP[sample];
    return {
      addedReagents: ['km', 'h2o2'],
      ...def
    };
  }

  private static getDefaultState(color: string, descKey: string): ReactionState {
    return {
      addedReagents: [],
      color,
      glow: false,
      glowColor: '',
      intensity: 0,
      durationMs: 0,
      resultType: 'negative',
      descriptionKey: descKey
    };
  }
}
