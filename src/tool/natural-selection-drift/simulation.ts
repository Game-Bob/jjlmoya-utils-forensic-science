import type { summarizeOutcome } from './logic';

export type RuntimeElements = {
  populationInput: HTMLInputElement | null;
  generationsInput: HTMLInputElement | null;
  mutationInput: HTMLInputElement | null;
  pressureInput: HTMLInputElement | null;
  driftInput: HTMLInputElement | null;
  allelesInput: HTMLInputElement | null;
  innovationInput: HTMLInputElement | null;
  populationValue: HTMLElement | null;
  generationsValue: HTMLElement | null;
  mutationValue: HTMLElement | null;
  pressureValue: HTMLElement | null;
  driftValue: HTMLElement | null;
  allelesValue: HTMLElement | null;
  innovationValue: HTMLElement | null;
  aliveBadge: HTMLElement | null;
  dominantTrait: HTMLElement | null;
  fitnessScore: HTMLElement | null;
  diversityScore: HTMLElement | null;
  populationScore: HTMLElement | null;
  alleleRanking: HTMLElement | null;
  ui: {
    aliveLabel: string;
    alleleDefault: string;
  };
};

export type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  allele: number;
  alive: boolean;
  hue: number;
  energy: number;
  bias: number;
  age: number;
};

type Outcome = ReturnType<typeof summarizeOutcome>;
type SimConfig = ReturnType<typeof readConfig>;

const hues = [160, 208, 284, 28, 338, 118, 246, 52];
const palette = ['allele-1', 'allele-2', 'allele-3', 'allele-4', 'allele-5', 'allele-6', 'allele-7', 'allele-8'];

const readValue = (input: HTMLInputElement | null, fallback: number) => Number(input?.value || fallback);
const setText = (node: HTMLElement | null, value: string) => {
  if (node) node.textContent = value;
};

export function readConfig(elements: RuntimeElements, runSeed: number) {
  return {
    population: readValue(elements.populationInput, 120),
    generations: readValue(elements.generationsInput, 60),
    mutationRate: readValue(elements.mutationInput, 12) / 100,
    selectionPressure: readValue(elements.pressureInput, 55) / 100,
    driftIntensity: readValue(elements.driftInput, 28) / 100,
    alleleCount: readValue(elements.allelesInput, 3),
    innovationRate: readValue(elements.innovationInput, 2) / 100,
    seed: runSeed,
    habitat: 'forest' as const,
    trait: 'camouflage' as const,
  };
}

export function updateSliderValues(elements: RuntimeElements) {
  setText(elements.populationValue, String(readValue(elements.populationInput, 120)));
  setText(elements.generationsValue, String(readValue(elements.generationsInput, 60)));
  setText(elements.mutationValue, `${readValue(elements.mutationInput, 12)}%`);
  setText(elements.pressureValue, `${readValue(elements.pressureInput, 55)}%`);
  setText(elements.driftValue, `${readValue(elements.driftInput, 28)}%`);
  setText(elements.allelesValue, String(readValue(elements.allelesInput, 3)));
  setText(elements.innovationValue, `${readValue(elements.innovationInput, 2)}%`);
}

export function showActiveValue(input: HTMLInputElement | null, valueNode: HTMLElement | null) {
  if (!input || !valueNode) return;
  valueNode.classList.add('is-visible');
  const update = () => {
    const range = Number(input.max) - Number(input.min);
    const value = Number(input.value) - Number(input.min);
    valueNode.style.left = `${range > 0 ? (value / range) * 100 : 0}%`;
  };
  update();
  input.addEventListener('input', update, { once: true });
  input.addEventListener('pointerup', () => valueNode.classList.remove('is-visible'), { once: true });
  input.addEventListener('blur', () => valueNode.classList.remove('is-visible'), { once: true });
}

export function seedParticles(config: SimConfig, result: Outcome) {
  const total = Math.max(48, Math.min(180, Math.round(config.population / 3)));
  const dominantBias = result.dominant === 'alleleA' ? 0.56 : 0.38;
  const alleleCount = Math.max(2, Number(config.alleleCount || 3));
  return Array.from({ length: total }, (_, index) => {
    const allele = index % alleleCount;
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.08 + Math.random() * 0.48;
    return {
      x: 0.5 + Math.cos(angle) * radius,
      y: 0.5 + Math.sin(angle) * radius,
      vx: (Math.random() - 0.5) * 0.003,
      vy: (Math.random() - 0.5) * 0.003,
      size: 1.8 + Math.random() * 3.2,
      allele,
      alive: true,
      hue: hues[allele % hues.length],
      energy: 0.45 + Math.random() * 0.55,
      bias: dominantBias,
      age: Math.random() * 20,
    } satisfies Particle;
  });
}

export function buildCountMap(particles: Particle[]) {
  const counts = new Map<number, number>();
  particles.forEach((p) => {
    if (!p.alive) return;
    counts.set(p.allele, (counts.get(p.allele) || 0) + 1);
  });
  return counts;
}

export function updateRanking(elements: RuntimeElements, particles: Particle[]) {
  const counts = buildCountMap(particles);
  const ranking = Array.from(counts.entries())
    .map(([allele, count]) => ({ allele, count }))
    .sort((a, b) => b.count - a.count);
  setText(elements.dominantTrait, ranking.length > 0 ? `Allele ${ranking[0].allele + 1}` : elements.ui.alleleDefault);
  const maxCount = Math.max(1, ...ranking.map((item) => item.count));
  if (elements.alleleRanking) {
    elements.alleleRanking.innerHTML = ranking
      .map((item, index) => {
        const fill = Math.max(0.1, item.count / maxCount);
        const colorIndex = item.allele % palette.length;
        return `<div class="ns-allele-chip ${palette[colorIndex]} is-updated" style="--rank-scale:${fill}" data-allele="${item.allele}">
          <span>#${index + 1} Allele ${item.allele + 1}</span>
          <strong>${item.count}</strong>
          <div class="ns-allele-bar"><i></i></div>
        </div>`;
      })
      .join('');
  }
}

export function updateMetrics(elements: RuntimeElements, particles: Particle[]) {
  const aliveCount = particles.filter((p) => p.alive).length;
  setText(elements.aliveBadge, `${aliveCount} ${elements.ui.aliveLabel}`);
  setText(elements.populationScore, String(aliveCount));
  const liveRatio = particles.length ? Math.round((aliveCount / particles.length) * 100) : 0;
  setText(elements.fitnessScore, `${liveRatio}%`);
  const counts = buildCountMap(particles);
  const values = Array.from(counts.values());
  const total = values.reduce((sum, value) => sum + value, 0);
  const spread = total > 0 && values.length > 0 ? 1 - Math.max(...values) / total : 0;
  setText(elements.diversityScore, `${Math.max(0, Math.round(spread * 100))}%`);
  updateRanking(elements, particles);
}
