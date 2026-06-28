import { FireOriginEstimator } from './logic';
import {
  bindAuxiliaryActions,
  bindCanvasInteractions,
  bindLayerToggles,
  bindRadialMenu,
  bindShortcuts,
  bindUpload,
  startRenderLoop,
} from './view-bindings';
import { createState, getRefs, syncControls, syncLayers, updatePointerOverlay } from './view-model';

export function initFirePatternOriginAnalyzer(ui: Record<string, string>): void {
  const refs = getRefs();
  if (!refs) return;

  const estimator = new FireOriginEstimator();
  const state = createState();

  syncControls(refs, false);
  syncLayers(refs, state);
  updatePointerOverlay(refs, state);
  bindLayerToggles(refs, estimator, state);
  bindRadialMenu(refs, state, ui);
  bindCanvasInteractions(refs, estimator, state, ui);
  bindShortcuts(refs, estimator, state, ui);
  bindUpload(refs, estimator, state);
  bindAuxiliaryActions(refs, estimator, state, ui);
  startRenderLoop(refs, state);
}
