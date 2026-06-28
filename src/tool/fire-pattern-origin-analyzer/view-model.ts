import type { FireOriginEstimator, FirePoint, FireVector } from './logic';
import { HEIGHT, TRANSITION_MS, WIDTH, clamp, ease, lerp, patternColor, toCanvas } from './render';

export type Pattern = FireVector['pattern'];
type PatternState = Record<Pattern, boolean>;

export interface AnimatedState {
  origin: FirePoint;
  radius: number;
  confidence: number;
  intersections: FirePoint[];
  vectorCount: number;
  statusKey: 'needsMoreVectors' | 'wideArea' | 'focusedArea';
}

export interface ViewRefs {
  root: HTMLElement;
  svg: SVGSVGElement;
  ctx: CanvasRenderingContext2D;
  radialMenu: HTMLDivElement;
  pointerOverlay: HTMLDivElement;
  originOverlay: HTMLDivElement;
  pointerCoordinate: HTMLElement;
  originCoordinate: HTMLElement;
  vectorCount: HTMLElement;
  confidenceScore: HTMLElement;
  variance: HTMLElement;
  modeLabel: HTMLElement;
  upload: HTMLInputElement;
  exportButton: HTMLButtonElement;
  resetButton: HTMLButtonElement;
  dropzone: HTMLButtonElement;
  planImage: SVGImageElement;
}

export interface ViewState {
  visibleLayers: PatternState;
  vectors: FireVector[];
  pendingStart: FirePoint | null;
  draftVector: FireVector | null;
  pointer: FirePoint;
  pointerClient: FirePoint;
  hasLoadedPlan: boolean;
  currentPattern: Pattern;
  importedPlanName: string;
  renderStart: number;
  animationFrame: number;
  previousState: AnimatedState | null;
  currentState: AnimatedState;
}

const DEFAULT_STATE: AnimatedState = {
  origin: { x: 50, y: 50 },
  radius: 24,
  confidence: 12,
  intersections: [],
  vectorCount: 0,
  statusKey: 'needsMoreVectors',
};

function required<T>(value: T | null): T {
  if (!value) throw new Error('Missing fire analyzer DOM node');
  return value;
}

function download(name: string, content: string, type: string): void {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

export function getRefs(): ViewRefs | null {
  try {
    const canvas = required(document.getElementById('fire-overlay-canvas') as HTMLCanvasElement | null);
    return {
      root: required(document.querySelector<HTMLElement>('[data-fire-origin-tool]')),
      svg: required(document.getElementById('fire-plan-svg') as SVGSVGElement | null),
      ctx: required(canvas.getContext('2d')),
      radialMenu: required(document.getElementById('fire-radial-menu') as HTMLDivElement | null),
      pointerOverlay: required(document.getElementById('fire-pointer-overlay') as HTMLDivElement | null),
      originOverlay: required(document.getElementById('fire-origin-overlay') as HTMLDivElement | null),
      pointerCoordinate: required(document.getElementById('fire-pointer-coordinate')),
      originCoordinate: required(document.getElementById('fire-origin-coordinate')),
      vectorCount: required(document.getElementById('fire-vector-count')),
      confidenceScore: required(document.getElementById('fire-confidence-score')),
      variance: required(document.getElementById('fire-origin-variance')),
      modeLabel: required(document.getElementById('fire-mode-label')),
      upload: required(document.getElementById('fire-plan-upload') as HTMLInputElement | null),
      exportButton: required(document.getElementById('fire-export') as HTMLButtonElement | null),
      resetButton: required(document.getElementById('fire-reset') as HTMLButtonElement | null),
      dropzone: required(document.getElementById('fire-dropzone') as HTMLButtonElement | null),
      planImage: required(document.getElementById('fire-plan-image') as SVGImageElement | null),
    };
  } catch {
    return null;
  }
}

export function createState(): ViewState {
  return {
    visibleLayers: { vPattern: true, deepChar: true, sootShadow: true, cleanBurn: true },
    vectors: [],
    pendingStart: null,
    draftVector: null,
    pointer: { x: 50, y: 50 },
    pointerClient: { x: 0, y: 0 },
    hasLoadedPlan: false,
    currentPattern: 'vPattern',
    importedPlanName: 'room-plan',
    renderStart: performance.now(),
    animationFrame: 0,
    previousState: null,
    currentState: { ...DEFAULT_STATE },
  };
}

export function filteredVectors(state: ViewState): FireVector[] {
  if (!state.hasLoadedPlan) return [];
  return state.vectors.filter((vector) => state.visibleLayers[vector.pattern]);
}

export function syncControls(refs: ViewRefs, enabled: boolean): void {
  refs.resetButton.disabled = !enabled;
  refs.exportButton.disabled = !enabled;
  refs.root.dataset.hasPlan = enabled ? 'true' : 'false';
  refs.pointerOverlay.hidden = !enabled;
  refs.originOverlay.hidden = !enabled;
  refs.root.querySelectorAll<HTMLButtonElement>('[data-fire-layer-toggle]').forEach((button) => {
    button.disabled = !enabled;
  });
}

export function syncLayers(refs: ViewRefs, state: ViewState): void {
  (Object.keys(state.visibleLayers) as Pattern[]).forEach((pattern) => {
    refs.root.querySelectorAll<HTMLElement>(`[data-fire-layer-toggle="${pattern}"]`).forEach((node) => {
      node.dataset.active = state.visibleLayers[pattern] ? 'true' : 'false';
    });
  });
}

export function animateToState(refs: ViewRefs, estimator: FireOriginEstimator, state: ViewState): void {
  state.previousState = state.currentState;
  state.currentState = estimator.estimate(filteredVectors(state));
  state.renderStart = performance.now();
  refs.vectorCount.textContent = String(state.currentState.vectorCount);
  refs.confidenceScore.textContent = `${state.currentState.confidence.toFixed(1)}%`;
  refs.variance.textContent = `+-${(state.currentState.radius / 10).toFixed(1)} m`;
  refs.originCoordinate.textContent = `${state.currentState.origin.x.toFixed(1)}, ${state.currentState.origin.y.toFixed(1)}`;
}

export function interpolatedState(state: ViewState, now: number): AnimatedState {
  if (!state.previousState) return state.currentState;
  const progress = ease(clamp((now - state.renderStart) / TRANSITION_MS, 0, 1));
  return {
    origin: {
      x: lerp(state.previousState.origin.x, state.currentState.origin.x, progress),
      y: lerp(state.previousState.origin.y, state.currentState.origin.y, progress),
    },
    radius: lerp(state.previousState.radius, state.currentState.radius, progress),
    confidence: lerp(state.previousState.confidence, state.currentState.confidence, progress),
    intersections: state.currentState.intersections,
    vectorCount: state.currentState.vectorCount,
    statusKey: state.currentState.statusKey,
  };
}

export function updatePointerOverlay(refs: ViewRefs, state: ViewState): void {
  refs.pointerCoordinate.textContent = `${state.pointer.x.toFixed(1)}, ${state.pointer.y.toFixed(1)}`;
  refs.pointerOverlay.style.left = `${state.pointerClient.x + 18}px`;
  refs.pointerOverlay.style.top = `${state.pointerClient.y - 24}px`;
}

export function updateOriginOverlay(refs: ViewRefs, point: FirePoint): void {
  const screen = toCanvas(point);
  refs.originOverlay.style.left = `${screen.x + 18}px`;
  refs.originOverlay.style.top = `${screen.y + 18}px`;
}

export function closeRadialMenu(refs: ViewRefs): void {
  refs.radialMenu.hidden = true;
}

export function openRadialMenu(refs: ViewRefs, state: ViewState, ui: Record<string, string>, point: FirePoint): void {
  if (!state.hasLoadedPlan) return;
  state.pendingStart = point;
  const canvasPoint = toCanvas(point);
  refs.radialMenu.style.left = `${canvasPoint.x}px`;
  refs.radialMenu.style.top = `${canvasPoint.y}px`;
  refs.radialMenu.hidden = false;
  refs.modeLabel.textContent = ui.selectIndicator;
}

export function commitDraft(refs: ViewRefs, estimator: FireOriginEstimator, state: ViewState, ui: Record<string, string>): void {
  if (!state.draftVector) return;
  state.vectors.push(state.draftVector);
  state.draftVector = null;
  state.pendingStart = null;
  animateToState(refs, estimator, state);
  refs.modeLabel.textContent = ui.awaitingVector;
}

export function loadPlanFile(refs: ViewRefs, estimator: FireOriginEstimator, state: ViewState, file: File): void {
  state.importedPlanName = file.name.replace(/\.[^.]+$/, '') || 'room-plan';
  refs.planImage.setAttribute('href', URL.createObjectURL(file));
  state.hasLoadedPlan = true;
  refs.dropzone.hidden = true;
  refs.dropzone.setAttribute('aria-hidden', 'true');
  syncControls(refs, true);
  animateToState(refs, estimator, state);
}

export function exportReport(state: ViewState): void {
  const payload = {
    exportedAt: new Date().toISOString(),
    plan: state.importedPlanName,
    origin: state.currentState.origin,
    confidence: Number(state.currentState.confidence.toFixed(1)),
    varianceMeters: Number((state.currentState.radius / 10).toFixed(1)),
    vectorCount: state.currentState.vectorCount,
    vectors: state.vectors,
    visibleLayers: state.visibleLayers,
  };
  const vectorMarkup = state.vectors.map((vector) => {
    const start = toCanvas(vector.start);
    const end = toCanvas(vector.end);
    return `<line x1="${start.x.toFixed(2)}" y1="${start.y.toFixed(2)}" x2="${end.x.toFixed(2)}" y2="${end.y.toFixed(2)}" stroke="${patternColor(vector.pattern)}" stroke-width="4" stroke-linecap="round" />`;
  }).join('');
  const origin = toCanvas(state.currentState.origin);
  const report = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <metadata>${JSON.stringify(payload)}</metadata>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#f7f2ea" />
  ${vectorMarkup}
  <circle cx="${origin.x.toFixed(2)}" cy="${origin.y.toFixed(2)}" r="10" fill="#161e28" stroke="#fff7ed" stroke-width="3" />
  <text x="24" y="${HEIGHT - 26}" font-family="IBM Plex Mono, monospace" font-size="16" fill="#16314a">
    VECTORS ${state.currentState.vectorCount} | CONFIDENCE ${state.currentState.confidence.toFixed(1)}% | VARIANCE +-${(state.currentState.radius / 10).toFixed(1)} m
  </text>
</svg>`;
  download(`${state.importedPlanName}-fire-origin-report.svg`, report, 'image/svg+xml');
}
