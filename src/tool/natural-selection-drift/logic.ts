export type Habitat = 'forest' | 'desert' | 'island';
export type Trait = 'camouflage' | 'speed' | 'endurance';

export interface SimulationConfig {
  population: number;
  generations: number;
  mutationRate: number;
  selectionPressure: number;
  driftIntensity: number;
  alleleCount: number;
  innovationRate: number;
  seed?: number;
  habitat: Habitat;
  trait: Trait;
}

export interface GenerationPoint {
  generation: number;
  alleleA: number;
  alleleB: number;
  fitness: number;
}

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

function seededRandom(seed: number) {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function habitatBias(habitat: Habitat, trait: Trait) {
  if (habitat === 'forest' && trait === 'camouflage') return 0.18;
  if (habitat === 'desert' && trait === 'endurance') return 0.18;
  if (habitat === 'island' && trait === 'speed') return 0.18;
  return 0.04;
}

function makeSeed(config: SimulationConfig) {
  return Math.round(
    config.population * 17 +
      config.generations * 31 +
      config.mutationRate * 1000 +
      config.selectionPressure * 1000 +
      config.driftIntensity * 1000 +
      (config.seed || 0)
  );
}

function advanceAlleles(
  alleleA: number,
  config: SimulationConfig,
  random: () => number
) {
  const traitBonus = habitatBias(config.habitat, config.trait);
  const pressure = config.selectionPressure * (0.5 + traitBonus);
  const drift = (random() - 0.5) * config.driftIntensity;
  const mutation = (random() - 0.5) * config.mutationRate;

  const nextAlleleA = clamp01(alleleA + pressure * 0.08 + drift + mutation);
  return {
    alleleA: nextAlleleA,
    alleleB: 1 - nextAlleleA,
    fitness: clamp01(0.35 + nextAlleleA * 0.55 + traitBonus * 0.5 - config.driftIntensity * 0.12),
  };
}

export function runSelectionDrift(config: SimulationConfig): GenerationPoint[] {
  const random = seededRandom(makeSeed(config));

  let alleleA = 0.5 + habitatBias(config.habitat, config.trait);
  let alleleB = 1 - alleleA;
  const points: GenerationPoint[] = [];

  for (let generation = 0; generation <= config.generations; generation++) {
    const next = advanceAlleles(alleleA, config, random);
    alleleA = next.alleleA;
    alleleB = next.alleleB;

    points.push({
      generation,
      alleleA,
      alleleB,
      fitness: next.fitness,
    });
  }

  return points;
}

export function summarizeOutcome(points: GenerationPoint[]) {
  const finalPoint = points[points.length - 1];
  if (!finalPoint) {
    return {
      dominant: 'alleleA' as const,
      score: 0,
      diversity: 1,
    };
  }

  const dominant = finalPoint.alleleA >= finalPoint.alleleB ? 'alleleA' : 'alleleB';
  const diversity = clamp01(1 - Math.abs(finalPoint.alleleA - finalPoint.alleleB));

  return {
    dominant,
    score: Math.round(finalPoint.fitness * 100),
    diversity: Math.round(diversity * 100),
  };
}
