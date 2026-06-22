export interface ChamberConfig {
  count: number;
  temperature: number;
}

export interface ParticleState {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  energy: number;
  chamberBias: 'left' | 'right';
}

export interface SimulationOptions {
  width: number;
  height: number;
  left: ChamberConfig;
  right: ChamberConfig;
  gateOpen: number;
  seed?: number;
}

export interface FrameMetrics {
  spatialEntropy: number;
  thermalEntropy: number;
  totalEntropy: number;
  leftCount: number;
  rightCount: number;
  leftAverageEnergy: number;
  rightAverageEnergy: number;
}

interface StepContext {
  dt: number;
  divider: number;
  gateTop: number;
  gateBottom: number;
}

function seededRandom(seed: number): () => number {
  let state = seed >>> 0;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function temperatureToSpeed(temperature: number): number {
  return 0.55 + (temperature / 100) * 2.6;
}

function normalizeTemperature(temperature: number): number {
  return clamp(temperature / 100, 0, 1);
}

function bounceWithinBounds(particle: ParticleState, width: number, height: number) {
  if (particle.x < 8 || particle.x > width - 8) {
    particle.vx *= -1;
    particle.x = clamp(particle.x, 8, width - 8);
  }

  if (particle.y < 8 || particle.y > height - 8) {
    particle.vy *= -1;
    particle.y = clamp(particle.y, 8, height - 8);
  }
}

function bounceOffDivider(particle: ParticleState, divider: number, gateTop: number, gateBottom: number) {
  const crossesDivider = particle.x > divider - 7 && particle.x < divider + 7;
  const insideGate = particle.y > gateTop && particle.y < gateBottom;

  if (crossesDivider && !insideGate) {
    particle.vx *= -1;
    particle.x = particle.x < divider ? divider - 8 : divider + 8;
  }

  return insideGate;
}

function applyTemperatureDrift(particle: ParticleState, leftTemperature: number, rightTemperature: number, divider: number) {
  const speed = Math.hypot(particle.vx, particle.vy) || 1;
  const drift = particle.x < divider
    ? temperatureToSpeed(leftTemperature)
    : temperatureToSpeed(rightTemperature);
  const adjustment = (drift - speed) * 0.015;

  particle.vx += (particle.vx / speed) * adjustment;
  particle.vy += (particle.vy / speed) * adjustment;
}

function blendParticleEnergy(particle: ParticleState, divider: number, leftTemperature: number, rightTemperature: number) {
  if (Math.abs(particle.x - divider) >= 14) return;

  const oppositeTemperature = particle.x < divider ? rightTemperature : leftTemperature;
  const nextEnergy = (particle.energy * 4 + normalizeTemperature(oppositeTemperature)) / 5;
  particle.energy = clamp(nextEnergy, 0.08, 1.18);
}

function stepParticle(particle: ParticleState, options: SimulationOptions, context: StepContext) {
  particle.x += particle.vx * context.dt;
  particle.y += particle.vy * context.dt;

  bounceWithinBounds(particle, options.width, options.height);
  const insideGate = bounceOffDivider(particle, context.divider, context.gateTop, context.gateBottom);

  applyTemperatureDrift(particle, options.left.temperature, options.right.temperature, context.divider);

  if (insideGate) {
    blendParticleEnergy(particle, context.divider, options.left.temperature, options.right.temperature);
  }
}

export function createParticles(options: SimulationOptions): ParticleState[] {
  const random = seededRandom(options.seed ?? 12345);
  const divider = options.width / 2;
  const particles: ParticleState[] = [];
  const total = options.left.count + options.right.count;

  for (let index = 0; index < total; index += 1) {
    const chamberBias = index < options.left.count ? 'left' : 'right';
    const chamber = chamberBias === 'left' ? options.left : options.right;
    const baseTemperature = normalizeTemperature(chamber.temperature);
    const speed = temperatureToSpeed(chamber.temperature);
    const angle = random() * Math.PI * 2;
    const horizontalPadding = 16;
    const verticalPadding = 16;
    const minX = chamberBias === 'left' ? horizontalPadding : divider + horizontalPadding;
    const maxX = chamberBias === 'left' ? divider - horizontalPadding : options.width - horizontalPadding;

    particles.push({
      id: index,
      x: minX + random() * Math.max(20, maxX - minX),
      y: verticalPadding + random() * Math.max(20, options.height - verticalPadding * 2),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      energy: 0.2 + baseTemperature * 0.8 + random() * 0.18,
      chamberBias,
    });
  }

  return particles;
}

export function stepParticles(
  particles: ParticleState[],
  options: SimulationOptions,
  deltaMs: number,
): void {
  const divider = options.width / 2;
  const aperture = clamp(options.gateOpen, 0.08, 0.96) * options.height;
  const gateTop = (options.height - aperture) / 2;
  const gateBottom = gateTop + aperture;
  const context = {
    dt: Math.max(0.5, deltaMs / 16.67),
    divider,
    gateTop,
    gateBottom,
  };

  particles.forEach((particle) => {
    stepParticle(particle, options, context);
  });
}

function shannonBinary(leftCount: number, rightCount: number): number {
  const total = leftCount + rightCount;
  if (total <= 0) return 0;

  const probabilities = [leftCount / total, rightCount / total].filter((value) => value > 0);
  const entropy = probabilities.reduce((sum, value) => sum - value * Math.log2(value), 0);

  return clamp(entropy, 0, 1);
}

export function measureSystem(particles: ParticleState[], width: number, temperatures: { left: number; right: number }): FrameMetrics {
  const divider = width / 2;
  const leftParticles = particles.filter((particle) => particle.x < divider);
  const rightParticles = particles.filter((particle) => particle.x >= divider);
  const leftCount = leftParticles.length;
  const rightCount = rightParticles.length;
  const leftAverageEnergy = leftCount > 0
    ? leftParticles.reduce((sum, particle) => sum + particle.energy, 0) / leftCount
    : normalizeTemperature(temperatures.left);
  const rightAverageEnergy = rightCount > 0
    ? rightParticles.reduce((sum, particle) => sum + particle.energy, 0) / rightCount
    : normalizeTemperature(temperatures.right);
  const spatialEntropy = shannonBinary(leftCount, rightCount);
  const thermalDifference = Math.abs(leftAverageEnergy - rightAverageEnergy);
  const thermalEntropy = clamp(1 - thermalDifference / 1.18, 0, 1);
  const totalEntropy = clamp(spatialEntropy * 0.58 + thermalEntropy * 0.42, 0, 1);

  return {
    spatialEntropy,
    thermalEntropy,
    totalEntropy,
    leftCount,
    rightCount,
    leftAverageEnergy,
    rightAverageEnergy,
  };
}
