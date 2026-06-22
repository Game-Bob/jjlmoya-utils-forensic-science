import { LIFE_PATTERNS } from './LifePatterns';

export interface RuntimeLabels {
  play: string;
  pause: string;
  frozen: string;
  growing: string;
  fading: string;
  chaotic: string;
  invalidRule: string;
}

export function getOutputs(byId: (id: string) => HTMLElement): Record<string, HTMLElement | null> {
  return {
    generation: byId('life-lab-generation'),
    population: byId('life-lab-population'),
    density: byId('life-lab-density'),
    stability: byId('life-lab-stability'),
    births: byId('life-lab-births'),
    deaths: byId('life-lab-deaths'),
    status: byId('life-lab-status'),
    pulsar: byId('life-lab-achievement-pulsar'),
    immortal: byId('life-lab-achievement-immortal'),
    bigBang: byId('life-lab-achievement-big-bang'),
  };
}

export function getLabels(root: HTMLElement, playButton: HTMLButtonElement): RuntimeLabels {
  const data = root.dataset;
  return {
    play: playButton.getAttribute('aria-label') || '',
    pause: data.pause || '',
    frozen: data.statusFrozen || '',
    growing: data.statusGrowing || '',
    fading: data.statusFading || '',
    chaotic: data.statusChaotic || '',
    invalidRule: data.invalidRule || '',
  };
}

export function fillPatternSelect(root: HTMLElement, patternSelect: HTMLSelectElement): void {
  const data = root.dataset;
  const names: Record<string, string> = {
    glider: data.patternGlider || '',
    gosper: data.patternGosper || '',
    pulsar: data.patternPulsar || '',
    'r-pentomino': data.patternRPentomino || '',
  };
  LIFE_PATTERNS.forEach((pattern) => {
    const option = document.createElement('option');
    option.value = pattern.id;
    option.textContent = names[pattern.id] || pattern.id;
    patternSelect.append(option);
  });
}
