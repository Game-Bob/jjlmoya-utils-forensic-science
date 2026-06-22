import { runSelectionDrift, summarizeOutcome } from './logic';
import { drawBackground, drawParticles, evolveParticles } from './render';
import {
  readConfig,
  seedParticles,
  showActiveValue,
  updateMetrics,
  updateSliderValues,
  type RuntimeElements,
} from './simulation';

function bindSliders(elements: RuntimeElements, runSimulation: () => void) {
  const sliders = [
    [elements.populationInput, elements.populationValue],
    [elements.generationsInput, elements.generationsValue],
    [elements.mutationInput, elements.mutationValue],
    [elements.pressureInput, elements.pressureValue],
    [elements.driftInput, elements.driftValue],
    [elements.allelesInput, elements.allelesValue],
    [elements.innovationInput, elements.innovationValue],
  ] as const;

  sliders.forEach(([input, valueNode]) => {
    if (!input || !valueNode) return;
    input.addEventListener('pointerdown', () => showActiveValue(input, valueNode));
    input.addEventListener('input', () => {
      updateSliderValues(elements);
      runSimulation();
    });
  });
}

function startLoop(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  elements: RuntimeElements,
  state: { particles: never[]; outcome: { diversity: number } | null; runSeed: number }
) {
  let frameCount = 0;
  const frame = () => {
    frameCount += 1;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
    const config = readConfig(elements, state.runSeed);
    drawBackground(ctx, rect, config.selectionPressure);
    if (state.outcome) state.particles = evolveParticles(state.particles, config, state.outcome) as never[];
    drawParticles(ctx, rect, state.particles, { pressure: config.selectionPressure, drift: config.driftIntensity });
    if (frameCount % 6 === 0) updateMetrics(elements, state.particles);
    requestAnimationFrame(frame);
  };

  requestAnimationFrame(frame);
  return frame;
}

export function createNaturalSelectionRuntime(elements: RuntimeElements) {
  const canvas = elements.canvas;
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return () => {};

  let runSeed = 0;
  let particles = [];
  let outcome = null;
  const state = { particles, outcome, runSeed };

  const runSimulation = () => {
    runSeed += 1;
    updateSliderValues(elements);
    const config = readConfig(elements, runSeed);
    const points = runSelectionDrift(config);
    outcome = summarizeOutcome(points);
    particles = seedParticles(config, outcome);
    state.particles = particles;
    state.outcome = outcome;
    state.runSeed = runSeed;
    updateMetrics(elements, particles);
  };
  bindSliders(elements, runSimulation);

  window.addEventListener('resize', runSimulation);
  runSimulation();
  startLoop(canvas, ctx, elements, state);

  return () => window.removeEventListener('resize', runSimulation);
}
