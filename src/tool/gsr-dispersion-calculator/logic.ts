export type AmmoType = 'pistol9mm' | 'revolver38' | 'shotgun12';

export interface AmmoProfile {
  id: AmmoType;
  label: string;
  baseParticles: number;
  spreadMultiplier: number;
  residueStrength: number;
  thermalReachCm: number;
}

export interface GsrParticle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  element: 'lead' | 'barium' | 'antimony' | 'soot';
}

export interface GsrSimulation {
  distanceCm: number;
  category: 'contact' | 'near-contact' | 'close-range' | 'distant';
  patternRadiusCm: number;
  densityScore: number;
  thermalScore: number;
  particles: GsrParticle[];
}

interface ParticleFieldConfig {
  count: number;
  spread: number;
  thermalScore: number;
  densityScore: number;
  seed: number;
}

export const AMMO_PROFILES: Record<AmmoType, AmmoProfile> = {
  pistol9mm: {
    id: 'pistol9mm',
    label: 'pistol9mm',
    baseParticles: 360,
    spreadMultiplier: 1,
    residueStrength: 1,
    thermalReachCm: 35,
  },
  revolver38: {
    id: 'revolver38',
    label: 'revolver38',
    baseParticles: 430,
    spreadMultiplier: 1.18,
    residueStrength: 1.12,
    thermalReachCm: 42,
  },
  shotgun12: {
    id: 'shotgun12',
    label: 'shotgun12',
    baseParticles: 520,
    spreadMultiplier: 1.65,
    residueStrength: 1.24,
    thermalReachCm: 55,
  },
};

function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function gaussian(random: () => number): number {
  const first = Math.max(random(), 0.0001);
  const second = random();
  return Math.sqrt(-2 * Math.log(first)) * Math.cos(2 * Math.PI * second);
}

function getCategory(distanceCm: number): GsrSimulation['category'] {
  if (distanceCm <= 3) return 'contact';
  if (distanceCm <= 30) return 'near-contact';
  if (distanceCm <= 120) return 'close-range';
  return 'distant';
}

function getSpread(distanceCm: number, profile: AmmoProfile): number {
  return Math.max(2, (distanceCm * 0.18 + 2.6) * profile.spreadMultiplier);
}

function getDensityScore(distanceCm: number, profile: AmmoProfile): number {
  return Math.round(Math.max(4, Math.min(100, (profile.residueStrength * 100) / (1 + distanceCm / 22))));
}

function getThermalScore(distanceCm: number, profile: AmmoProfile): number {
  return Math.round(Math.max(0, 100 * (1 - distanceCm / profile.thermalReachCm)));
}

function getVisibleParticles(profile: AmmoProfile, densityScore: number): number {
  return Math.round(Math.max(70, Math.min(620, profile.baseParticles * (0.42 + densityScore / 170))));
}

function createParticles(config: ParticleFieldConfig): GsrParticle[] {
  const { count, spread, thermalScore, densityScore, seed } = config;
  const random = seededRandom(seed);
  const particles: GsrParticle[] = [];
  const elements: GsrParticle['element'][] = ['lead', 'barium', 'antimony', 'soot'];

  for (let index = 0; index < count; index++) {
    const isSoot = random() < Math.max(0.04, thermalScore / 210);
    const angle = random() * Math.PI * 2;
    const radial = Math.abs(gaussian(random)) * spread * (isSoot ? 0.55 : 1);
      particles.push({
        x: Math.cos(angle) * radial,
        y: Math.sin(angle) * radial,
        radius: isSoot ? 1.8 + random() * 4 : 0.9 + random() * 2.8,
        opacity: Math.max(0.16, Math.min(0.92, (densityScore / 100) * (0.45 + random() * 0.65))),
        element: isSoot ? 'soot' : elements[Math.floor(random() * 3)],
      });
  }

  return particles;
}

export class GsrDispersionModel {
  simulate(distanceCm: number, ammoType: AmmoType): GsrSimulation {
    const profile = AMMO_PROFILES[ammoType] ?? AMMO_PROFILES.pistol9mm;
    const category = getCategory(distanceCm);
    const spread = getSpread(distanceCm, profile);
    const densityScore = getDensityScore(distanceCm, profile);
    const thermalScore = getThermalScore(distanceCm, profile);
    const visibleParticles = getVisibleParticles(profile, densityScore);
    const particles = createParticles({
      count: visibleParticles,
      spread,
      thermalScore,
      densityScore,
      seed: Math.round(distanceCm * 97) + profile.baseParticles,
    });

    return {
      distanceCm,
      category,
      patternRadiusCm: Math.round(spread * 2.8),
      densityScore,
      thermalScore,
      particles,
    };
  }
}
