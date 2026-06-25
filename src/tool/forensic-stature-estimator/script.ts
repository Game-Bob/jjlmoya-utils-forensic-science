import { estimateStature } from './logic';
import type { StatureInput, StatureResult } from './logic';
import { cmToFtIn, convertValueForUnit, applyLengthLimits, getLimitsForUnit } from './helpers';
import { setupCustomDropdown, closeAllDropdowns, restoreValue, restoreSelectable } from './dom-utils';

const uiDataEl = document.getElementById('stature-ui-data');
const ui = uiDataEl ? JSON.parse(uiDataEl.textContent || '{}') : {};

const boneInput = document.getElementById('input-bone') as HTMLInputElement | null,
  ancestryInput = document.getElementById('input-ancestry') as HTMLInputElement | null,
  lengthInputVal = document.getElementById('input-length-val') as HTMLInputElement | null,
  lengthInputSlider = document.getElementById('input-length') as HTMLInputElement | null,
  ageInput = document.getElementById('input-age') as HTMLInputElement | null,
  caliper = document.getElementById('caliper-slider'),
  fallbackBox = document.getElementById('fallback-alert'),
  lengthLabelText = document.getElementById('length-label-text'),
  boardTitle = document.querySelector('.osteometric-board-title'),
  rulerTicks = document.querySelector('.ruler-ticks');

const partBone = document.getElementById('part-bone'),
  partConst = document.getElementById('part-const'),
  operatorAgeSign = document.getElementById('operator-age-sign'),
  containerPartAge = document.getElementById('container-part-age'),
  partAge = document.getElementById('part-age'),
  partError = document.getElementById('part-error');

const statureCmValue = document.getElementById('stature-cm-value'),
  statureInchValue = document.getElementById('stature-inch-value'),
  seeValue = document.getElementById('see-value'),
  rangeValue = document.getElementById('range-value');

const STORAGE_KEY = 'forensic-stature-estimator-input';
let currentUnit: 'metric' | 'imperial' = 'metric';

document.addEventListener('click', closeAllDropdowns);

const getSex = () => (document.querySelector('input[name="sex"]:checked') as HTMLInputElement | null)?.value as 'male' | 'female' || 'male';
const getSelectedUnit = () => (document.querySelector('input[name="system-unit"]:checked') as HTMLInputElement | null)?.value as 'metric' | 'imperial' || 'metric';

function getBoneConfig(): { min: number; max: number; default: number } {
  if (!boneInput) return { min: 20, max: 60, default: 40 };
  const option = document.querySelector(`#dropdown-bone .custom-select-option[data-value="${boneInput.value}"]`);
  if (!option) return { min: 20, max: 60, default: 40 };
  return {
    min: parseFloat(option.getAttribute('data-min') || '20'),
    max: parseFloat(option.getAttribute('data-max') || '60'),
    default: parseFloat(option.getAttribute('data-default') || '40')
  };
}

function updateBoneVisuals(selectedBone: string, lengthCm: number) {
  const shapes = document.querySelectorAll('.bone-shape');
  shapes.forEach(shape => shape.classList.add('hidden'));

  const activeShape = document.getElementById(`bone-shape-${selectedBone}`);
  if (activeShape) activeShape.classList.remove('hidden');

  const boneStage = document.querySelector('.bone-stage') as HTMLElement | null;
  if (caliper && boneStage) {
    const ratio = Math.max(0, Math.min(1, lengthCm / 60));
    const positionPct = ratio * 80;
    caliper.style.left = `calc(${10 + positionPct}%)`;
    boneStage.style.width = `calc(${positionPct}% - 12px)`;
  }
}

function updateRulerLabels(unit: 'metric' | 'imperial') {
  if (lengthLabelText) {
    lengthLabelText.textContent = `${ui.lengthLabel} (${unit === 'imperial' ? ui.unitsInches : ui.unitsCm})`;
  }
  if (boardTitle) {
    boardTitle.textContent = unit === 'imperial' ? ui.rulerLabelImperial : ui.rulerLabelMetric;
  }
  if (rulerTicks) {
    rulerTicks.classList.toggle('unit-imperial', unit === 'imperial');
  }
}

function updateLengthMinMax(convertValue: boolean = false) {
  if (!lengthInputVal || !lengthInputSlider) return;
  const config = getBoneConfig();
  const unit = getSelectedUnit();
  const limits = getLimitsForUnit(unit, config);

  lengthInputSlider.min = limits.formattedMin;
  lengthInputSlider.max = limits.formattedMax;
  lengthInputSlider.step = limits.step.toString();
  lengthInputVal.step = limits.step.toString();

  updateRulerLabels(unit);

  let val = parseFloat(lengthInputVal.value);
  if (convertValue) {
    val = convertValueForUnit(val, unit);
  }

  val = applyLengthLimits(val, config, unit);
  lengthInputVal.value = val.toFixed(unit === 'imperial' ? 2 : 1);
  lengthInputSlider.value = val.toString();
}

function updateMetricResults(result: StatureResult) {
  if (statureCmValue) {
    statureCmValue.textContent = result.stature.toFixed(2);
    const cmLabel = document.querySelector('.stature-unit');
    if (cmLabel) cmLabel.textContent = ui.unitsCm;
  }
  if (statureInchValue) statureInchValue.textContent = cmToFtIn(result.stature);
  if (seeValue) seeValue.textContent = `± ${result.see.toFixed(2)} ${ui.unitsCm}`;
  if (rangeValue) {
    rangeValue.textContent = `${result.minStature.toFixed(2)} - ${result.maxStature.toFixed(2)} ${ui.unitsCm}`;
  }
}

function updateImperialResults(result: StatureResult) {
  const seeInches = result.see / 2.54;
  const minInches = result.minStature / 2.54;
  const maxInches = result.maxStature / 2.54;

  if (statureCmValue) {
    statureCmValue.textContent = cmToFtIn(result.stature);
    const cmLabel = document.querySelector('.stature-unit');
    if (cmLabel) cmLabel.textContent = '';
  }
  if (statureInchValue) statureInchValue.textContent = `${result.stature.toFixed(2)} ${ui.unitsCm}`;
  if (seeValue) seeValue.textContent = `± ${seeInches.toFixed(2)} ${ui.unitsInches}`;
  if (rangeValue) {
    rangeValue.textContent = `${minInches.toFixed(2)} - ${maxInches.toFixed(2)} ${ui.unitsInches}`;
  }
}

function updateAgeVisuals(ageLoss: number, age: number) {
  if (age > 30) {
    if (operatorAgeSign) operatorAgeSign.style.display = 'inline-flex';
    if (containerPartAge) containerPartAge.style.display = 'inline-flex';
    if (partAge) {
      if (getSelectedUnit() === 'imperial') {
        partAge.textContent = `${ageLoss.toFixed(2)} ${ui.unitsCm} = ${(ageLoss / 2.54).toFixed(2)} ${ui.unitsInches}`;
      } else {
        partAge.textContent = `0.06 × (${age} - 30) = ${ageLoss.toFixed(2)} ${ui.unitsCm}`;
      }
    }
  } else {
    if (operatorAgeSign) operatorAgeSign.style.display = 'none';
    if (containerPartAge) containerPartAge.style.display = 'none';
  }
}

function updateFormulaMetric(result: StatureResult, lengthCm: number, age: number) {
  if (partBone) partBone.textContent = `${result.coef.multiplier} × ${lengthCm.toFixed(1)} ${ui.unitsCm}`;
  if (partConst) partConst.textContent = `${result.coef.constant} ${ui.unitsCm}`;
  if (partError) partError.textContent = `${result.coef.see.toFixed(2)} ${ui.unitsCm}`;
  updateAgeVisuals(result.coef.ageLoss, age);
}

function updateFormulaImperial(result: StatureResult, lengthCm: number, age: number) {
  if (partBone) {
    const valInches = (result.coef.multiplier * lengthCm) / 2.54;
    partBone.textContent = `${result.coef.multiplier} × ${lengthCm.toFixed(1)} ${ui.unitsCm} = ${valInches.toFixed(2)} ${ui.unitsInches}`;
  }
  if (partConst) {
    partConst.textContent = `${result.coef.constant} ${ui.unitsCm} = ${(result.coef.constant / 2.54).toFixed(2)} ${ui.unitsInches}`;
  }
  if (partError) {
    partError.textContent = `${(result.coef.see / 2.54).toFixed(2)} ${ui.unitsInches}`;
  }
  updateAgeVisuals(result.coef.ageLoss, age);
}

function displayResults(result: StatureResult, lengthCm: number, age: number, unit: 'metric' | 'imperial') {
  if (unit === 'metric') {
    updateMetricResults(result);
    updateFormulaMetric(result, lengthCm, age);
  } else {
    updateImperialResults(result);
    updateFormulaImperial(result, lengthCm, age);
  }
  if (fallbackBox) fallbackBox.classList.toggle('hidden', !result.fallbackWarning);
}

function getInputs() {
  if (!boneInput || !lengthInputVal || !ancestryInput || !ageInput) return null;
  return {
    bone: boneInput.value as StatureInput['bone'],
    length: parseFloat(lengthInputVal.value) || 0,
    sex: getSex(),
    ancestry: ancestryInput.value as StatureInput['ancestry'],
    age: parseInt(ageInput.value, 10) || 25,
    unit: getSelectedUnit()
  };
}

function update() {
  const inputs = getInputs();
  if (!inputs) return;

  const lengthCm = inputs.unit === 'imperial' ? inputs.length * 2.54 : inputs.length;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {}
  updateBoneVisuals(inputs.bone, lengthCm);

  const result = estimateStature({
    bone: inputs.bone,
    length: lengthCm,
    sex: inputs.sex,
    ancestry: inputs.ancestry,
    age: inputs.age
  });
  displayResults(result, lengthCm, inputs.age, inputs.unit);
}

function handleBoneChange() {
  updateLengthMinMax(false);
  update();
}

function handleUnitChange() {
  const prevUnit = currentUnit;
  currentUnit = getSelectedUnit();
  if (prevUnit !== currentUnit) {
    updateLengthMinMax(true);
    update();
  }
}

function handleSliderInput() {
  if (lengthInputVal && lengthInputSlider) {
    lengthInputVal.value = lengthInputSlider.value;
    update();
  }
}

function handleNumberInput() {
  if (lengthInputVal && lengthInputSlider) {
    const val = parseFloat(lengthInputVal.value);
    const config = getBoneConfig();
    const unit = getSelectedUnit();
    const min = unit === 'imperial' ? config.min / 2.54 : config.min;
    const max = unit === 'imperial' ? config.max / 2.54 : config.max;
    if (!isNaN(val) && val >= min && val <= max) {
      lengthInputSlider.value = val.toString();
      update();
    }
  }
}

setupCustomDropdown('dropdown-bone', handleBoneChange);
setupCustomDropdown('dropdown-ancestry', update);

if (lengthInputSlider) lengthInputSlider.addEventListener('input', handleSliderInput);
if (lengthInputVal) lengthInputVal.addEventListener('change', handleNumberInput);
if (ageInput) ageInput.addEventListener('input', update);

document.querySelectorAll('input[name="sex"]').forEach(el => el.addEventListener('change', update));
document.querySelectorAll('input[name="system-unit"]').forEach(el => el.addEventListener('change', handleUnitChange));

function restoreSavedState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    updateLengthMinMax(false);
    return;
  }
  const parsed = JSON.parse(saved);
  if (parsed.unit) {
    const el = document.querySelector(`input[name="system-unit"][value="${parsed.unit}"]`) as HTMLInputElement | null;
    if (el) el.checked = true;
    currentUnit = parsed.unit;
  }
  restoreSelectable(boneInput, parsed.bone, 'dropdown-bone');
  updateLengthMinMax(false);
  if (parsed.sex) {
    const el = document.querySelector(`input[name="sex"][value="${parsed.sex}"]`) as HTMLInputElement | null;
    if (el) el.checked = true;
  }
  restoreSelectable(ancestryInput, parsed.ancestry, 'dropdown-ancestry');
  restoreValue(ageInput, parsed.age);
  restoreValue(lengthInputVal, parsed.length);
  restoreValue(lengthInputSlider, parsed.length);
}

try {
  restoreSavedState();
} catch {
  updateLengthMinMax(false);
}

update();
