import { ChemicalReactionEngine } from './logic';
import type { SampleType, ReagentType, ReactionState } from './logic';
import { getReactionColor, getGlowOpacity } from './helpers';
import { animateDrop, applyPetriReaction } from './dom-utils';

const uiDataEl = document.getElementById('blood-test-ui-data');
const ui = uiDataEl ? JSON.parse(uiDataEl.textContent || '{}') : {};

const petriDish = document.getElementById('petri-dish'),
  petriSpecimen = document.getElementById('petri-specimen'),
  chemicalDrop = document.getElementById('chemical-drop'),
  viewport = document.getElementById('workbench-viewport');

const statusBadge = document.getElementById('status-badge'),
  explanationText = document.getElementById('explanation-text'),
  valCompounds = document.getElementById('val-compounds'),
  valSpeed = document.getElementById('val-speed'),
  valDuration = document.getElementById('val-duration'),
  valSpecimenBase = document.getElementById('val-specimen-base');

const btnReset = document.getElementById('btn-reset-workbench');
const btnToggleLights = document.getElementById('btn-toggle-lights');

let selectedSample: SampleType = 'blood';
const addedReagents: ReagentType[] = [];
let lightingMode: 'on' | 'off' = 'on';

let glowInterval: number | null = null;
let glowElapsed = 0;

function getSampleName(sample: SampleType): string {
  const map: Record<SampleType, string> = {
    blood: ui.sampleBlood,
    rust: ui.sampleRust,
    bleach: ui.sampleBleach,
    potato: ui.samplePotato,
    saliva: ui.sampleSaliva
  };
  return map[sample] || '';
}

function getReagentName(reagent: ReagentType): string {
  const map: Record<ReagentType, string> = {
    km: ui.reagentKM,
    h2o2: ui.reagentH2O2,
    luminol: ui.reagentLuminol
  };
  return map[reagent] || '';
}

function clearGlowTimer() {
  if (glowInterval) {
    clearInterval(glowInterval);
    glowInterval = null;
  }
}

function updateTextContent(el: HTMLElement | null, text: string) {
  if (el) {
    el.textContent = text;
  }
}

function updateBadgeState(result: ReactionState) {
  if (!statusBadge) return;
  const key = result.resultType.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join('');
  statusBadge.textContent = ui[`result${key}`] || '';
  statusBadge.className = `status-badge status-${result.resultType}`;
}

function renderReactionState(result: ReactionState, currentOpacity: number) {
  updateBadgeState(result);
  updateTextContent(explanationText, ui[result.descriptionKey] || '');

  const compoundsText = result.addedReagents.map(getReagentName).join(' + ') || '-';
  updateTextContent(valCompounds, compoundsText);

  const speedText = result.intensity > 0 ? `${(result.intensity * 100).toFixed(0)}%` : '-';
  updateTextContent(valSpeed, speedText);

  const durationText = result.durationMs > 0 ? `${(result.durationMs / 1000).toFixed(1)}s` : '∞';
  updateTextContent(valDuration, durationText);

  updateTextContent(valSpecimenBase, getSampleName(selectedSample));

  const showGlow = result.glow && lightingMode === 'off';
  const appliedColor = getReactionColor(result.color, result.intensity);

  applyPetriReaction(petriSpecimen, {
    color: appliedColor,
    glow: showGlow,
    glowColor: result.glowColor,
    opacity: currentOpacity
  });
}

function startGlowAnimation(result: ReactionState) {
  clearGlowTimer();
  glowElapsed = 0;

  glowInterval = window.setInterval(() => {
    glowElapsed += 100;
    const opacity = getGlowOpacity(glowElapsed, result.durationMs);
    renderReactionState(result, opacity);

    if (glowElapsed >= result.durationMs) {
      clearGlowTimer();
    }
  }, 100);
}

function triggerReactionUpdate() {
  const result = ChemicalReactionEngine.getReaction(selectedSample, addedReagents);

  if (result.glow && lightingMode === 'off' && result.durationMs > 0) {
    startGlowAnimation(result);
  } else {
    clearGlowTimer();
    renderReactionState(result, 1);
  }
}

function selectSample(sample: SampleType) {
  selectedSample = sample;
  addedReagents.length = 0;
  clearGlowTimer();
  triggerReactionUpdate();

  document.querySelectorAll('.specimen-tube').forEach(node => {
    node.classList.toggle('selected', node.getAttribute('data-sample') === sample);
  });
}

function applyReagentDrop(reagent: ReagentType) {
  if (reagent === 'luminol') {
    addedReagents.length = 0;
    addedReagents.push('luminol');
  } else {
    if (addedReagents.includes('luminol')) {
      addedReagents.length = 0;
    }
    if (!addedReagents.includes(reagent)) {
      addedReagents.push(reagent);
    }
  }

  animateDrop(chemicalDrop, petriDish, () => {
    triggerReactionUpdate();
  });
}

function toggleLighting() {
  const nextMode = lightingMode === 'on' ? 'off' : 'on';
  lightingMode = nextMode;
  if (viewport) {
    viewport.classList.toggle('workbench-lights-off', nextMode === 'off');
  }
  if (btnToggleLights) {
    btnToggleLights.classList.toggle('lights-off', nextMode === 'off');
  }
  triggerReactionUpdate();
}

document.querySelectorAll('.specimen-tube').forEach(node => {
  node.addEventListener('click', () => {
    const s = node.getAttribute('data-sample') as SampleType;
    if (s) selectSample(s);
  });
});

document.querySelectorAll('.btn-dispense-fluid').forEach(btn => {
  btn.addEventListener('click', () => {
    const r = btn.getAttribute('data-reagent') as ReagentType;
    if (r) applyReagentDrop(r);
  });
});

if (btnToggleLights) {
  btnToggleLights.addEventListener('click', () => {
    toggleLighting();
  });
}

if (btnReset) {
  btnReset.addEventListener('click', () => {
    addedReagents.length = 0;
    clearGlowTimer();
    triggerReactionUpdate();
  });
}

triggerReactionUpdate();
