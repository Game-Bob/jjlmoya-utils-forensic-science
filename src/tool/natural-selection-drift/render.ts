import type { Particle } from './simulation';

type SimConfig = {
  population: number;
  mutationRate: number;
  selectionPressure: number;
  driftIntensity: number;
  alleleCount: number;
  innovationRate: number;
};

type Outcome = { diversity: number };

const pickFactor = (allele: number) => {
  if (allele === 0) return 1.1;
  if (allele === 1) return 0.95;
  return 0.8;
};

const pickFertility = (allele: number, base: number) => {
  if (allele === 0) return base * 1.08;
  if (allele === 1) return base;
  return base * 0.96;
};
const pickChildAllele = (parentAllele: number, mutation: number, innovationRate: number, alleleCount: number) => {
  const roll = Math.random();
  if (roll < mutation * 0.6) return (parentAllele + 1 + Math.floor(Math.random() * 2)) % alleleCount;
  if (roll < mutation * 0.6 + innovationRate) return alleleCount + Math.floor(Math.random() * 3);
  return parentAllele;
};

function clampPosition(value: number) {
  return Math.max(0, Math.min(1, value));
}

function updateNeighborCohesion(particle: Particle, neighbors: { x: number; y: number }[]) {
  let cohesionX = 0;
  let cohesionY = 0;
  neighbors.forEach((other) => {
    cohesionX += other.x - particle.x;
    cohesionY += other.y - particle.y;
  });
  return { cohesionX, cohesionY };
}

function moveParticle(args: {
  particle: Particle;
  cohesionX: number;
  cohesionY: number;
  config: SimConfig;
  index: number;
  squeeze: number;
}) {
  const { particle, cohesionX, cohesionY, config, index, squeeze } = args;
  const centerPull = 0.00018 + config.selectionPressure * 0.0012;
  const jitter = Math.sin(index + performance.now() * 0.0007) * 0.00025 + (Math.random() - 0.5) * 0.00045;
  particle.vx += (0.5 - particle.x) * centerPull + jitter + cohesionX * (1 - Math.max(0.08, config.driftIntensity)) * 0.0011 + (Math.random() - 0.5) * config.driftIntensity * 0.0008;
  particle.vy += (0.5 - particle.y) * centerPull + jitter + cohesionY * (1 - Math.max(0.08, config.driftIntensity)) * 0.0011 + (Math.random() - 0.5) * config.driftIntensity * 0.0008;
  particle.vx *= 0.99;
  particle.vy *= 0.99;
  particle.x += particle.vx;
  particle.y += particle.vy;

  const dx = particle.x - 0.5;
  const dy = particle.y - 0.5;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance > 0.52 * squeeze) {
    const scale = (0.52 * squeeze) / distance;
    particle.x = 0.5 + dx * scale;
    particle.y = 0.5 + dy * scale;
    particle.vx *= -0.25;
    particle.vy *= -0.25;
  }
}

function mutateAndCull(particle: Particle, config: SimConfig) {
  if (Math.random() < config.mutationRate * 0.02) {
    particle.allele = (particle.allele + 1 + Math.floor(Math.random() * 2)) % Math.max(2, Number(config.alleleCount || 3));
    particle.vx += (Math.random() - 0.5) * 0.006;
    particle.vy += (Math.random() - 0.5) * 0.006;
  }
  const agePressure = Math.min(1.35, 0.55 + particle.age * 0.01);
  const killChance = config.selectionPressure * 0.00006 * agePressure * pickFactor(particle.allele);
  if (Math.random() < killChance) {
    particle.alive = false;
  }
}

function gatherAlleleCentroids(particles: Particle[]) {
  const groups = new Map<number, { x: number; y: number; count: number }>();
  particles.forEach((particle) => {
    if (!particle.alive) return;
    const group = groups.get(particle.allele) || { x: 0, y: 0, count: 0 };
    group.x += particle.x;
    group.y += particle.y;
    group.count += 1;
    groups.set(particle.allele, group);
  });
  return groups;
}

function createBirthFromParent(parent: Particle, config: SimConfig, mutationPush: number) {
  const childAllele = pickChildAllele(parent.allele, config.mutationRate, config.innovationRate, Math.max(2, Number(config.alleleCount || 3)));
  return {
    x: clampPosition(parent.x + (Math.random() - 0.5) * 0.02),
    y: clampPosition(parent.y + (Math.random() - 0.5) * 0.02),
    vx: parent.vx * 0.72 + (Math.random() - 0.5) * mutationPush * 0.008,
    vy: parent.vy * 0.72 + (Math.random() - 0.5) * mutationPush * 0.008,
    size: Math.max(1.1, parent.size * (0.9 + Math.random() * 0.18)),
    allele: childAllele,
    alive: true,
    hue: parent.hue,
    energy: Math.max(0.25, Math.min(0.95, parent.energy + (Math.random() - 0.5) * 0.2)),
    bias: parent.bias,
    age: 0,
  } satisfies Particle;
}

function createFallbackBirth(parent: Particle) {
  return {
    x: clampPosition(parent.x + (Math.random() - 0.5) * 0.02),
    y: clampPosition(parent.y + (Math.random() - 0.5) * 0.02),
    vx: parent.vx * 0.7,
    vy: parent.vy * 0.7,
    size: Math.max(1.1, parent.size * 0.95),
    allele: parent.allele,
    alive: true,
    hue: parent.hue,
    energy: parent.energy,
    bias: parent.bias,
    age: 0,
  } satisfies Particle;
}

function reproduce(particles: Particle[], config: SimConfig, diversityFactor: number) {
  const survivors = particles.filter((particle) => particle.alive);
  const mutationPush = Math.max(0.1, config.mutationRate * 1.6);
  const reproductionRate = 0.035 + config.selectionPressure * 0.02 + diversityFactor * 0.012;
  const minBirths = Math.max(1, Math.round(survivors.length * 0.06));
  const targetBirths = Math.min(Math.max(2, minBirths), Math.max(6, Math.round(config.population * 0.08)));
  const births: Particle[] = [];

  for (let i = 0; i < survivors.length && births.length < targetBirths; i += 1) {
    const parent = survivors[i];
    if (Math.random() > pickFertility(parent.allele, reproductionRate)) continue;
    births.push(createBirthFromParent(parent, config, mutationPush));
  }

  while (births.length < minBirths && survivors.length > 0) {
    const parent = survivors[births.length % survivors.length];
    births.push(createFallbackBirth(parent));
  }

  return births;
}

function trimPopulation(particles: Particle[], population: number) {
  if (particles.length <= population * 1.25) return particles;
  return particles.sort((a, b) => {
    if (a.alive !== b.alive) return a.alive ? -1 : 1;
    return a.age - b.age;
  }).slice(-Math.round(population * 1.25));
}

export function evolveParticles(particles: Particle[], config: SimConfig, outcome: Outcome) {
  const diversityFactor = Math.max(0.08, outcome.diversity / 100);
  const squeeze = 1 - config.selectionPressure * 0.3;
  const groups = gatherAlleleCentroids(particles);

  particles.forEach((particle, index) => {
    particle.age += 1;
    if (!particle.alive) return;
    const centroid = groups.get(particle.allele);
    const neighbors = centroid && centroid.count > 1 ? [{ x: centroid.x / centroid.count, y: centroid.y / centroid.count }] : [];
    const { cohesionX, cohesionY } = updateNeighborCohesion(particle, neighbors);
    moveParticle({ particle, cohesionX, cohesionY, config, index, squeeze });
    mutateAndCull(particle, config);
  });

  const births = reproduce(particles, config, diversityFactor);
  if (births.length > 0) {
    const limit = Math.min(births.length, Math.max(4, Math.round(config.population * 0.08)));
    for (let i = 0; i < limit; i += 1) {
      particles.push(births[i]);
    }
  }
  return trimPopulation(particles, config.population);
}

export function drawBackground(ctx: CanvasRenderingContext2D, rect: DOMRect, pressure: number) {
  const background = ctx.createRadialGradient(rect.width / 2, rect.height / 2, 40, rect.width / 2, rect.height / 2, rect.width * 0.65);
  background.addColorStop(0, `rgba(56, 189, 248, ${0.08 + pressure * 0.12})`);
  background.addColorStop(0.45, 'rgba(34, 197, 94, 0.08)');
  background.addColorStop(1, 'rgba(2, 6, 23, 0.14)');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, rect.width, rect.height);
  const centerGlow = ctx.createRadialGradient(rect.width / 2, rect.height / 2, 20, rect.width / 2, rect.height / 2, rect.width * 0.34);
  centerGlow.addColorStop(0, `rgba(255,255,255,${0.02 + pressure * 0.04})`);
  centerGlow.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = centerGlow;
  ctx.fillRect(0, 0, rect.width, rect.height);
}

export function drawParticles(ctx: CanvasRenderingContext2D, rect: DOMRect, particles: Particle[], atmosphere: { pressure: number; drift: number }) {
  const { pressure, drift } = atmosphere;
  particles.forEach((particle) => {
    if (!particle.alive) return;
    const x = particle.x * rect.width;
    const y = particle.y * rect.height;
    const radius = particle.size * (0.75 + pressure * 0.35);
    ctx.beginPath();
    ctx.fillStyle = `hsla(${particle.hue}, 86%, ${62 + particle.energy * 14}%, ${0.55 + particle.energy * 0.35})`;
    ctx.shadowBlur = 10 + drift * 24;
    ctx.shadowColor = `hsla(${particle.hue}, 86%, 66%, 0.22)`;
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.shadowBlur = 0;
}
