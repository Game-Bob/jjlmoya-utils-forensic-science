export interface IsotopePreset {
  id: string;
  name: string;
  halfLife: number;
  unit: TimeUnit;
  useCase: string;
}

export type TimeUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'years';

export interface DecayInput {
  initialAtoms: number;
  halfLife: number;
  elapsedTime: number;
  seed?: number;
}

export interface AtomState {
  id: number;
  decayed: boolean;
  threshold: number;
}

export interface DecayResult {
  remainingAtoms: number;
  decayedAtoms: number;
  remainingFraction: number;
  decayedFraction: number;
  activityFraction: number;
  atoms: AtomState[];
}

export const ISOTOPE_PRESETS: IsotopePreset[] = [
  {
    id: 'carbon-14',
    name: 'Carbon-14',
    halfLife: 5730,
    unit: 'years',
    useCase: 'Archaeology and radiocarbon dating',
  },
  {
    id: 'iodine-131',
    name: 'Iodine-131',
    halfLife: 8.02,
    unit: 'days',
    useCase: 'Medical thyroid diagnostics and therapy',
  },
  {
    id: 'uranium-238',
    name: 'Uranium-238',
    halfLife: 4_468_000_000,
    unit: 'years',
    useCase: 'Geologic dating and nuclear fuel cycles',
  },
  {
    id: 'technetium-99m',
    name: 'Technetium-99m',
    halfLife: 6.01,
    unit: 'hours',
    useCase: 'Nuclear medicine imaging',
  },
  {
    id: 'radon-222',
    name: 'Radon-222',
    halfLife: 3.82,
    unit: 'days',
    useCase: 'Indoor radiation exposure studies',
  },
];

export function calculateRemainingFraction(elapsedTime: number, halfLife: number): number {
  if (halfLife <= 0) {
    throw new Error('Half-life must be greater than zero.');
  }

  if (elapsedTime <= 0) {
    return 1;
  }

  return Math.pow(0.5, elapsedTime / halfLife);
}

function seededRandom(seed: number): () => number {
  let state = seed >>> 0;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

export function simulateDecay(input: DecayInput): DecayResult {
  const atomCount = Math.max(1, Math.round(input.initialAtoms));
  const remainingFraction = calculateRemainingFraction(input.elapsedTime, input.halfLife);
  const decayedFraction = 1 - remainingFraction;
  const random = seededRandom(input.seed ?? 42);

  const atoms = Array.from({ length: atomCount }, (_, index) => {
    const threshold = random();

    return {
      id: index,
      threshold,
      decayed: threshold < decayedFraction,
    };
  });

  const decayedAtoms = atoms.filter((atom) => atom.decayed).length;
  const remainingAtoms = atomCount - decayedAtoms;

  return {
    remainingAtoms,
    decayedAtoms,
    remainingFraction,
    decayedFraction,
    activityFraction: remainingFraction,
    atoms,
  };
}

