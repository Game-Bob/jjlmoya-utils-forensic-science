import type { TimeOfDeathAlgorMortisUI } from './ui';
import { calculateAlgorMortis, celsiusToFahrenheit, fahrenheitToCelsius, kgToLb, lbToKg, type AlgorMortisInputs } from './logic';
import { loadSavedState, saveState } from './storage';
import { renderTelemetry, renderSvgNomogram } from './dom-views';

interface SliderRange {
  min: number;
  max: number;
  step: number;
}

interface PresetDef {
  nameKey: string;
  rectal: number;
  ambient: number;
  weight: number;
  factor: number;
}

const PRESETS: Record<string, PresetDef> = {
  dressedIndoor: { nameKey: 'presetDressedIndoor', rectal: 30.5, ambient: 19.5, weight: 75, factor: 1.1 },
  nakedCalm: { nameKey: 'presetNakedCalm', rectal: 28.5, ambient: 20.0, weight: 70, factor: 1.0 },
  winterOutdoor: { nameKey: 'presetWinterOutdoor', rectal: 22.0, ambient: 4.0, weight: 80, factor: 1.4 },
  submergedWater: { nameKey: 'presetSubmergedWater', rectal: 24.0, ambient: 12.0, weight: 70, factor: 0.5 },
  heavyDuvet: { nameKey: 'presetHeavyDuvet', rectal: 33.0, ambient: 18.0, weight: 85, factor: 1.8 }
};

export class AlgorMortisController {
  private container: HTMLElement;
  private ui: TimeOfDeathAlgorMortisUI;
  private inputs: AlgorMortisInputs;

  constructor(container: HTMLElement) {
    this.container = container;
    this.ui = JSON.parse(container.dataset.i18n || '{}');
    this.inputs = this.getInitialInputs();
    this.updateUnitUI();
    this.syncAllFormControls();
    this.bindUnitToggle();
    this.bindInputs();
    this.bindPresets();
    this.bindCustomSelect();
    this.bindActionButtons();
    this.update();
  }

  private getInitialInputs(): AlgorMortisInputs {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const defaults: AlgorMortisInputs = {
      rectalTemp: 30.5,
      ambientTemp: 19.5,
      bodyWeight: 75,
      correctionFactor: 1.1,
      measurementTime: `${hh}:${mm}`,
      unitSystem: 'metric'
    };
    return Object.assign(defaults, loadSavedState() || {});
  }

  private bindUnitToggle(): void {
    this.container.querySelectorAll<HTMLButtonElement>('.sc-unit-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.unit as 'metric' | 'imperial';
        if (target !== this.inputs.unitSystem) this.switchUnitSystem(target);
      });
    });
  }

  private switchUnitSystem(targetUnit: 'metric' | 'imperial'): void {
    const isTargetImp = targetUnit === 'imperial';
    this.inputs.rectalTemp = isTargetImp ? celsiusToFahrenheit(this.inputs.rectalTemp) : fahrenheitToCelsius(this.inputs.rectalTemp);
    this.inputs.ambientTemp = isTargetImp ? celsiusToFahrenheit(this.inputs.ambientTemp) : fahrenheitToCelsius(this.inputs.ambientTemp);
    this.inputs.bodyWeight = isTargetImp ? kgToLb(this.inputs.bodyWeight) : lbToKg(this.inputs.bodyWeight);
    this.inputs.unitSystem = targetUnit;
    this.updateUnitUI();
    this.syncAllFormControls();
    this.update();
  }

  private updateUnitUI(): void {
    const isImp = this.inputs.unitSystem === 'imperial';
    this.container.querySelectorAll<HTMLButtonElement>('.sc-unit-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.unit === this.inputs.unitSystem);
    });
    this.setText('#label-unit-temp-1', isImp ? this.ui.fahrenheitUnit : this.ui.celsiusUnit);
    this.setText('#label-unit-temp-2', isImp ? this.ui.fahrenheitUnit : this.ui.celsiusUnit);
    this.setText('#label-unit-weight', isImp ? this.ui.lbUnit : this.ui.kgUnit);
    this.setSliderBounds('#slider-rectalTemp', '#num-rectalTemp', isImp ? { min: 50, max: 104, step: 0.2 } : { min: 10, max: 40, step: 0.1 });
    this.setSliderBounds('#slider-ambientTemp', '#num-ambientTemp', isImp ? { min: 14, max: 100, step: 0.2 } : { min: -10, max: 38, step: 0.1 });
    this.setSliderBounds('#slider-bodyWeight', '#num-bodyWeight', isImp ? { min: 44, max: 400, step: 1 } : { min: 20, max: 180, step: 0.5 });
    this.updatePresetLabels();
  }

  private updatePresetLabels(): void {
    const isImp = this.inputs.unitSystem === 'imperial';
    this.container.querySelectorAll<HTMLButtonElement>('.sc-preset-chip').forEach((chip) => {
      const p = PRESETS[chip.dataset.preset || ''];
      if (!p) return;
      const rawText = this.ui[p.nameKey];
      const baseName = rawText ? rawText.split('(')[0]?.trim() : p.nameKey;
      const tempDisplay = isImp ? `${celsiusToFahrenheit(p.ambient)}°F` : `${p.ambient}°C`;
      chip.textContent = `${baseName} (${tempDisplay})`;
    });
  }

  private setSliderBounds(sId: string, nId: string, range: SliderRange): void {
    const s = this.container.querySelector<HTMLInputElement>(sId);
    const n = this.container.querySelector<HTMLInputElement>(nId);
    [s, n].forEach((el) => {
      if (el) {
        el.min = String(range.min);
        el.max = String(range.max);
        el.step = String(range.step);
      }
    });
  }

  private setText(selector: string, val: string): void {
    const el = this.container.querySelector<HTMLElement>(selector);
    if (el) el.textContent = val;
  }

  private bindInputs(): void {
    this.container.querySelectorAll<HTMLInputElement>('.sc-slider').forEach((slider) => {
      slider.addEventListener('input', () => this.handleSliderSync(slider));
    });
    this.container.querySelectorAll<HTMLInputElement>('.sc-num-input').forEach((input) => {
      input.addEventListener('input', () => this.handleNumSync(input));
    });
    const timeInput = this.container.querySelector<HTMLInputElement>('#input-time');
    timeInput?.addEventListener('input', () => {
      this.inputs.measurementTime = timeInput.value;
      this.update();
    });
  }

  private handleSliderSync(slider: HTMLInputElement): void {
    const key = slider.dataset.key as keyof AlgorMortisInputs;
    if (!key) return;
    const val = parseFloat(slider.value) || 0;
    (this.inputs[key] as number) = val;
    const numInput = this.container.querySelector<HTMLInputElement>(`#num-${key}`);
    if (numInput) numInput.value = String(val);
    this.update();
  }

  private handleNumSync(input: HTMLInputElement): void {
    const key = input.dataset.key as keyof AlgorMortisInputs;
    if (!key) return;
    const val = parseFloat(input.value) || 0;
    (this.inputs[key] as number) = val;
    const slider = this.container.querySelector<HTMLInputElement>(`#slider-${key}`);
    if (slider) slider.value = String(val);
    this.update();
  }

  private bindPresets(): void {
    this.container.querySelectorAll<HTMLButtonElement>('.sc-preset-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const presetKey = chip.dataset.preset;
        if (!presetKey || !PRESETS[presetKey]) return;
        const p = PRESETS[presetKey];
        const isImp = this.inputs.unitSystem === 'imperial';
        this.inputs.rectalTemp = isImp ? celsiusToFahrenheit(p.rectal) : p.rectal;
        this.inputs.ambientTemp = isImp ? celsiusToFahrenheit(p.ambient) : p.ambient;
        this.inputs.bodyWeight = isImp ? kgToLb(p.weight) : p.weight;
        this.inputs.correctionFactor = p.factor;
        this.syncAllFormControls();
        this.updatePresetChips(presetKey);
        this.update();
      });
    });
  }

  private updatePresetChips(activeKey?: string): void {
    this.container.querySelectorAll<HTMLButtonElement>('.sc-preset-chip').forEach((chip) => {
      chip.classList.toggle('active', chip.dataset.preset === activeKey);
    });
  }

  private bindCustomSelect(): void {
    const trigger = this.container.querySelector<HTMLButtonElement>('#factor-select-trigger');
    const dropdown = this.container.querySelector<HTMLElement>('#factor-select-dropdown');
    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown?.classList.toggle('open');
    });
    document.addEventListener('click', () => dropdown?.classList.remove('open'));
    this.container.querySelectorAll<HTMLElement>(`[data-factor-val]`).forEach((opt) => {
      opt.addEventListener('click', () => {
        this.inputs.correctionFactor = parseFloat(opt.dataset.factorVal || '1.1');
        const span = trigger?.querySelector<HTMLElement>('.sc-select-val');
        if (span) span.textContent = opt.textContent || '';
        dropdown?.classList.remove('open');
        this.update();
      });
    });
  }

  private bindActionButtons(): void {
    this.container.querySelector<HTMLButtonElement>('#btn-now')?.addEventListener('click', () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      this.inputs.measurementTime = `${hh}:${mm}`;
      const timeInput = this.container.querySelector<HTMLInputElement>('#input-time');
      if (timeInput) timeInput.value = this.inputs.measurementTime;
      this.update();
    });
    this.container.querySelector<HTMLButtonElement>('#btn-reset')?.addEventListener('click', () => {
      const isImp = this.inputs.unitSystem === 'imperial';
      this.inputs.rectalTemp = isImp ? 86.9 : 30.5;
      this.inputs.ambientTemp = isImp ? 67.1 : 19.5;
      this.inputs.bodyWeight = isImp ? 165 : 75;
      this.inputs.correctionFactor = 1.1;
      this.inputs.measurementTime = '14:00';
      this.syncAllFormControls();
      this.updatePresetChips();
      this.update();
    });
  }

  private syncAllFormControls(): void {
    const syncPair = (key: string, val: number) => {
      const slider = this.container.querySelector<HTMLInputElement>(`#slider-${key}`);
      const num = this.container.querySelector<HTMLInputElement>(`#num-${key}`);
      if (slider) slider.value = String(val);
      if (num) num.value = String(val);
    };
    syncPair('rectalTemp', this.inputs.rectalTemp);
    syncPair('ambientTemp', this.inputs.ambientTemp);
    syncPair('bodyWeight', this.inputs.bodyWeight);
    const timeInput = this.container.querySelector<HTMLInputElement>('#input-time');
    if (timeInput) timeInput.value = this.inputs.measurementTime;
    const trigger = this.container.querySelector<HTMLElement>('#factor-select-trigger .sc-select-val');
    const matchingOpt = this.container.querySelector<HTMLElement>(`[data-factor-val="${this.inputs.correctionFactor}"]`);
    if (trigger && matchingOpt) trigger.textContent = matchingOpt.textContent || '';
  }

  private update(): void {
    saveState(this.inputs);
    const result = calculateAlgorMortis(this.inputs);
    const telemetryContainer = this.container.querySelector<HTMLElement>('#telemetry-stage');
    if (telemetryContainer) {
      renderTelemetry(telemetryContainer, result, this.inputs, this.ui);
    }
    const svgEl = this.container.querySelector<SVGSVGElement>('#nomogram-svg');
    if (svgEl) {
      renderSvgNomogram(svgEl, { result, inputs: this.inputs, ui: this.ui });
    }
  }
}
