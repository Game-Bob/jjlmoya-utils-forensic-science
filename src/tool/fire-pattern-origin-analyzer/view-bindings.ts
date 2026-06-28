import type { FireOriginEstimator, FireVector } from './logic';
import { drawHeatmap, drawOriginMarker, drawVector, pointFromPointer, snapPoint, WIDTH, HEIGHT } from './render';
import {
  animateToState,
  closeRadialMenu,
  commitDraft,
  exportReport,
  filteredVectors,
  interpolatedState,
  loadPlanFile,
  openRadialMenu,
  syncLayers,
  type Pattern,
  type ViewRefs,
  type ViewState,
  updateOriginOverlay,
  updatePointerOverlay,
} from './view-model';

export function bindLayerToggles(refs: ViewRefs, estimator: FireOriginEstimator, state: ViewState): void {
  refs.root.querySelectorAll<HTMLButtonElement>('[data-fire-layer-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const pattern = button.dataset.fireLayerToggle as Pattern;
      state.visibleLayers[pattern] = !state.visibleLayers[pattern];
      syncLayers(refs, state);
      animateToState(refs, estimator, state);
    });
  });
}

export function bindRadialMenu(refs: ViewRefs, state: ViewState, ui: Record<string, string>): void {
  refs.radialMenu.querySelectorAll<HTMLButtonElement>('[data-fire-pattern]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!state.pendingStart) return;
      state.currentPattern = button.dataset.firePattern as Pattern;
      state.draftVector = {
        id: `vector-${Date.now()}`,
        start: state.pendingStart,
        end: state.pendingStart,
        pattern: state.currentPattern,
        confidence: 78,
      };
      closeRadialMenu(refs);
      refs.modeLabel.textContent = `${ui.refiningVector}: ${ui[state.currentPattern] || state.currentPattern}`;
    });
  });
}

function handlePointerMove(refs: ViewRefs, state: ViewState, event: PointerEvent): void {
  state.pointer = pointFromPointer(refs.svg, event);
  state.pointerClient = { x: event.offsetX, y: event.offsetY };
  updatePointerOverlay(refs, state);
  if (state.draftVector && state.pendingStart) {
    state.draftVector = { ...state.draftVector, end: snapPoint(state.pendingStart, state.pointer) };
  }
}

export function bindCanvasInteractions(
  refs: ViewRefs,
  estimator: FireOriginEstimator,
  state: ViewState,
  ui: Record<string, string>,
): void {
  refs.svg.addEventListener('pointermove', (event) => {
    handlePointerMove(refs, state, event);
  });
  refs.svg.addEventListener('pointerdown', (event) => {
    state.pointer = pointFromPointer(refs.svg, event);
    state.pointerClient = { x: event.offsetX, y: event.offsetY };
    updatePointerOverlay(refs, state);
    if (state.draftVector) {
      commitDraft(refs, estimator, state, ui);
      return;
    }
    openRadialMenu(refs, state, ui, state.pointer);
  });
  refs.svg.addEventListener('pointerleave', () => {
    refs.pointerOverlay.style.opacity = '0';
  });
  refs.svg.addEventListener('pointerenter', () => {
    refs.pointerOverlay.style.opacity = '1';
  });
}

export function bindShortcuts(refs: ViewRefs, estimator: FireOriginEstimator, state: ViewState, ui: Record<string, string>): void {
  const shortcutMap: Record<string, Pattern> = { v: 'vPattern', d: 'deepChar', s: 'sootShadow', c: 'cleanBurn' };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      state.draftVector = null;
      state.pendingStart = null;
      closeRadialMenu(refs);
      refs.modeLabel.textContent = ui.awaitingVector;
      return;
    }
    const pattern = shortcutMap[event.key.toLowerCase()];
    if (!state.hasLoadedPlan || !pattern) return;
    state.visibleLayers[pattern] = !state.visibleLayers[pattern];
    syncLayers(refs, state);
    animateToState(refs, estimator, state);
  });
}

export function bindUpload(refs: ViewRefs, estimator: FireOriginEstimator, state: ViewState): void {
  refs.upload.addEventListener('change', () => {
    const file = refs.upload.files?.[0];
    if (file) loadPlanFile(refs, estimator, state, file);
  });
  refs.dropzone.addEventListener('click', () => {
    refs.upload.click();
  });
  ['dragenter', 'dragover'].forEach((eventName) => {
    refs.svg.addEventListener(eventName, (event) => {
      event.preventDefault();
      refs.dropzone.hidden = false;
    });
  });
  ['dragleave', 'drop'].forEach((eventName) => {
    refs.svg.addEventListener(eventName, (event) => {
      event.preventDefault();
      refs.dropzone.hidden = true;
    });
  });
  refs.svg.addEventListener('drop', (event) => {
    const file = event.dataTransfer?.files?.[0];
    if (file) loadPlanFile(refs, estimator, state, file);
  });
}

export function bindAuxiliaryActions(refs: ViewRefs, estimator: FireOriginEstimator, state: ViewState, ui: Record<string, string>): void {
  document.addEventListener('click', (event) => {
    const target = event.target as Node;
    if (!refs.radialMenu.hidden && !refs.radialMenu.contains(target) && !refs.svg.contains(target)) {
      closeRadialMenu(refs);
      if (!state.draftVector) refs.modeLabel.textContent = ui.awaitingVector;
    }
  });
  refs.exportButton.addEventListener('click', () => {
    exportReport(state);
  });
  refs.resetButton.addEventListener('click', () => {
    state.vectors = [];
    state.draftVector = null;
    state.pendingStart = null;
    animateToState(refs, estimator, state);
    refs.modeLabel.textContent = ui.awaitingVector;
  });
}

export function startRenderLoop(refs: ViewRefs, state: ViewState): void {
  const render = (now: number) => {
    refs.ctx.clearRect(0, 0, WIDTH, HEIGHT);
    if (state.hasLoadedPlan) {
      const frame = interpolatedState(state, now);
      filteredVectors(state).forEach((vector: FireVector) => drawVector(refs.ctx, vector, 0.96));
      if (state.draftVector) drawVector(refs.ctx, state.draftVector, 0.52);
      drawHeatmap(refs.ctx, {
        point: frame.origin,
        radius: frame.radius,
        confidence: frame.confidence,
        intersections: frame.intersections,
      }, now);
      drawOriginMarker(refs.ctx, frame.origin);
      updateOriginOverlay(refs, frame.origin);
    }
    state.animationFrame = requestAnimationFrame(render);
  };

  state.animationFrame = requestAnimationFrame(render);
  window.addEventListener('beforeunload', () => cancelAnimationFrame(state.animationFrame), { once: true });
}
