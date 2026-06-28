export type ToolProfile = 'screwdriver' | 'prybar' | 'boltCutter';

export interface ToolmarkInput {
  profile: ToolProfile;
  offsetMicrons: number;
  rotationDegrees: number;
}

export interface ToolmarkResult {
  offsetMicrons: number;
  offsetThousandths: number;
  rotationDegrees: number;
  correlation: number;
  phaseScore: number;
  rotationScore: number;
  relief: number[];
  interpretationKey: string;
}

const PROFILE_SEEDS: Record<ToolProfile, number[]> = {
  screwdriver: [0.12, 0.4, 0.78, 0.22, 0.6, 0.91, 0.34, 0.55, 0.18, 0.73, 0.48, 0.86],
  prybar: [0.65, 0.24, 0.88, 0.42, 0.16, 0.72, 0.31, 0.94, 0.52, 0.2, 0.8, 0.38],
  boltCutter: [0.26, 0.84, 0.44, 0.7, 0.18, 0.58, 0.96, 0.36, 0.76, 0.12, 0.5, 0.9],
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function gaussian(value: number, sigma: number): number {
  return Math.exp(-(value * value) / (2 * sigma * sigma));
}

function interpretationKey(correlation: number): string {
  if (correlation >= 82) return 'interpMatch';
  if (correlation >= 58) return 'interpPossible';
  return 'interpMismatch';
}

export class StriationMatcher {
  buildRelief(profile: ToolProfile, offsetMicrons: number, rotationDegrees: number): number[] {
    const seed = PROFILE_SEEDS[profile] ?? PROFILE_SEEDS.screwdriver;
    const relief: number[] = [];
    for (let i = 0; i < 48; i += 1) {
      const base = seed[i % seed.length];
      const wave = Math.sin((i * 0.72) + (offsetMicrons / 18)) * 0.18;
      const tilt = Math.sin((rotationDegrees * Math.PI / 180) + (i * 0.17)) * 0.08;
      relief.push(Number(clamp(base + wave + tilt, 0.04, 1).toFixed(3)));
    }
    return relief;
  }

  compare(input: ToolmarkInput): ToolmarkResult {
    const offsetMicrons = clamp(input.offsetMicrons, -180, 180);
    const rotationDegrees = clamp(input.rotationDegrees, -12, 12);
    const phaseScore = gaussian(offsetMicrons, 46);
    const rotationScore = gaussian(rotationDegrees, 3.2);
    const correlation = Math.round(clamp((phaseScore * 0.62 + rotationScore * 0.38) * 100, 0, 100));

    return {
      offsetMicrons: Number(offsetMicrons.toFixed(1)),
      offsetThousandths: Number((offsetMicrons / 25.4).toFixed(2)),
      rotationDegrees: Number(rotationDegrees.toFixed(1)),
      correlation,
      phaseScore: Math.round(phaseScore * 100),
      rotationScore: Math.round(rotationScore * 100),
      relief: this.buildRelief(input.profile, offsetMicrons, rotationDegrees),
      interpretationKey: interpretationKey(correlation),
    };
  }
}
