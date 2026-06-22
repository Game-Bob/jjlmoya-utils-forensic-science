import { StellarHabitabilityEngine, STELLAR_PRESETS } from './logic/StellarHabitabilityEngine';
import { StellarHabitabilityRenderer } from './renderer';
import type { RenderState } from './renderer';
import { updateValTexts, updateResults, updateSliderFill } from './dom-updater';
import { setupCanvasInteraction } from './interaction';

const STORAGE_KEY = 'stellar-habitability-zone:config';
const KEYS = ['temp', 'lum', 'mass', 'rad', 'dist', 'albedo', 'green'];

function parseVal(val: string, fallback: number): number {
  const parsed = parseFloat(val);
  return isNaN(parsed) ? fallback : parsed;
}

export function initStellarSimulator() {
  new StellarSimulator();
}

class StellarSimulator {
  private curDistanceAu = 1.0; private curRunawayLimit = 0.95; private curMaxLimit = 1.67;
  private curTemp = 5778; private curLuminosity = 1.0; private curMass = 1.0;
  private prevStatus = 'habitable'; private isImperial = false;

  private tempInput!: HTMLInputElement; private lumInput!: HTMLInputElement; private massInput!: HTMLInputElement;
  private radInput!: HTMLInputElement; private distInput!: HTMLInputElement; private albedoInput!: HTMLInputElement;
  private greenInput!: HTMLInputElement;

  private tempVal!: HTMLElement | null; private lumVal!: HTMLElement | null; private massVal!: HTMLElement | null;
  private radVal!: HTMLElement | null; private distVal!: HTMLElement | null; private albedoVal!: HTMLElement | null;
  private greenVal!: HTMLElement | null;

  private eqTempResult!: HTMLElement | null; private surfTempResult!: HTMLElement | null; private fluxResult!: HTMLElement | null;
  private periodResult!: HTMLElement | null; private velocityResult!: HTMLElement | null; private innerResult!: HTMLElement | null;
  private outerResult!: HTMLElement | null;

  private statusBox!: HTMLElement | null; private statusTitle!: HTMLElement | null; private unitToggleBtn!: HTMLElement | null;

  private canvas!: HTMLCanvasElement;
  private canvasContainer!: HTMLElement;
  private presetBtns!: NodeListOf<Element>;

  private engine!: StellarHabitabilityEngine;
  private renderer!: StellarHabitabilityRenderer;

  constructor() {
    const root = document.getElementById('hz-simulator-root');
    if (!root) return;

    this.getElements();
    this.engine = new StellarHabitabilityEngine();
    this.renderer = new StellarHabitabilityRenderer(this.canvas, this.canvasContainer);

    this.bindEvents();
    this.loadFromStorage();
    this.update();
    this.animate();
  }

  private getElements() {
    const getEl = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
    this.tempInput = getEl<HTMLInputElement>('hz-temperature');
    this.lumInput = getEl<HTMLInputElement>('hz-luminosity');
    this.massInput = getEl<HTMLInputElement>('hz-mass');
    this.radInput = getEl<HTMLInputElement>('hz-radius');
    this.distInput = getEl<HTMLInputElement>('hz-distance');
    this.albedoInput = getEl<HTMLInputElement>('hz-albedo');
    this.greenInput = getEl<HTMLInputElement>('hz-greenhouse');

    this.tempVal = getEl('hz-temperature-val');
    this.lumVal = getEl('hz-luminosity-val');
    this.massVal = getEl('hz-mass-val');
    this.radVal = getEl('hz-radius-val');
    this.distVal = getEl('hz-distance-val');
    this.albedoVal = getEl('hz-albedo-val');
    this.greenVal = getEl('hz-greenhouse-val');

    this.eqTempResult = getEl('hz-eq-temp');
    this.surfTempResult = getEl('hz-surf-temp');
    this.fluxResult = getEl('hz-stellar-flux');
    this.periodResult = getEl('hz-orbit-period');
    this.velocityResult = getEl('hz-orbit-velocity');
    this.innerResult = getEl('hz-inner-limit');
    this.outerResult = getEl('hz-outer-limit');

    this.statusBox = getEl('hz-status-box');
    this.statusTitle = getEl('hz-status-title');
    this.unitToggleBtn = getEl('hz-unit-toggle');

    this.canvas = getEl<HTMLCanvasElement>('hz-orbit-canvas');
    this.canvasContainer = getEl('hz-canvas-placeholder');
    this.presetBtns = document.querySelectorAll('.hz-preset-btn:not(#hz-unit-toggle)');
  }

  private bindEvents() {
    setupCanvasInteraction({
      canvasContainer: this.canvasContainer,
      distInput: this.distInput,
      presetBtns: this.presetBtns,
      getCurDistanceAu: () => this.curDistanceAu,
      getCurMaxLimit: () => this.curMaxLimit,
      getCurRunawayLimit: () => this.curRunawayLimit,
      onUpdate: () => this.update()
    });

    [this.tempInput, this.lumInput, this.massInput, this.radInput, this.distInput].forEach(inp => {
      inp.addEventListener('input', () => {
        this.presetBtns.forEach(b => b.classList.remove('active'));
        this.update();
      });
    });

    [this.albedoInput, this.greenInput].forEach(inp => inp.addEventListener('input', () => this.update()));
    this.presetBtns.forEach(btn => btn.addEventListener('click', () => this.applyPreset(btn)));

    if (this.unitToggleBtn) {
      this.unitToggleBtn.addEventListener('click', () => {
        this.isImperial = !this.isImperial;
        this.update();
      });
    }
  }

  private applyPreset(btn: Element) {
    this.presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.getAttribute('data-type');
    const preset = STELLAR_PRESETS.find(p => p.type === type);
    if (preset) {
      this.tempInput.value = preset.temperature.toString();
      this.lumInput.value = Math.log10(preset.luminosity).toString();
      this.massInput.value = preset.mass.toString();
      this.radInput.value = preset.radius.toString();

      const hzLimits = this.engine.calculateLimits(preset.luminosity, preset.temperature);
      this.distInput.value = Math.log10((hzLimits.runawayGreenhouse + hzLimits.maximumGreenhouse) / 2).toString();
      this.update();
    }
  }

  private getSelectedPresetType(): string | null {
    const activeBtn = document.querySelector('.hz-preset-btn.active:not(#hz-unit-toggle)');
    return activeBtn ? activeBtn.getAttribute('data-type') : null;
  }

  private saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        temp: this.tempInput.value, lum: this.lumInput.value, mass: this.massInput.value, rad: this.radInput.value,
        dist: this.distInput.value, albedo: this.albedoInput.value, green: this.greenInput.value,
        preset: this.getSelectedPresetType(), imperial: this.isImperial,
      }));
    } catch {}
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const config = JSON.parse(stored);
      const inputs: Record<string, HTMLInputElement> = {
        temp: this.tempInput, lum: this.lumInput, mass: this.massInput, rad: this.radInput,
        dist: this.distInput, albedo: this.albedoInput, green: this.greenInput
      };
      KEYS.forEach(key => {
        const input = inputs[key];
        if (input && config[key] !== undefined) input.value = config[key];
      });
      if (config.imperial !== undefined) this.isImperial = config.imperial;
      this.presetBtns.forEach(b => {
        const isPresetMatch = b.getAttribute('data-type') === config.preset;
        b.classList.toggle('active', isPresetMatch);
      });
    } catch {}
  }

  private update() {
    const temp = parseVal(this.tempInput.value, 5778);
    const luminosity = Math.pow(10, parseVal(this.lumInput.value, 0));
    const mass = parseVal(this.massInput.value, 1.0);
    const radius = parseVal(this.radInput.value, 1.0);
    const distanceAu = Math.pow(10, parseVal(this.distInput.value, 0));
    const albedo = parseVal(this.albedoInput.value, 0.3);
    const greenhouse = parseVal(this.greenInput.value, 33);

    if (this.unitToggleBtn) {
      this.unitToggleBtn.textContent = this.isImperial ? 'Units: Imperial' : 'Units: Scientific';
    }

    updateValTexts({
      temp, luminosity, mass, radius, distanceAu, albedo, greenhouse, isImperial: this.isImperial,
      tempVal: this.tempVal, lumVal: this.lumVal, massVal: this.massVal, radVal: this.radVal, distVal: this.distVal, albedoVal: this.albedoVal, greenVal: this.greenVal
    });
    [this.tempInput, this.lumInput, this.massInput, this.radInput, this.distInput, this.albedoInput, this.greenInput].forEach(updateSliderFill);

    const result = this.engine.simulate({
      luminosity, temperature: temp, mass, distanceAu, albedo, greenhouseDeltaK: greenhouse,
    });

    updateResults({
      result, isImperial: this.isImperial, eqTempResult: this.eqTempResult, surfTempResult: this.surfTempResult,
      fluxResult: this.fluxResult, periodResult: this.periodResult, velocityResult: this.velocityResult, innerResult: this.innerResult, outerResult: this.outerResult
    });

    this.checkStatusFlash(result.status);
    this.updateStatusDisplay(result.status);
    this.saveToStorage();
  }

  private checkStatusFlash(status: string) {
    if (status !== this.prevStatus) {
      if (this.eqTempResult && this.surfTempResult) {
        this.eqTempResult.classList.remove('flash-cold', 'flash-hot');
        this.surfTempResult.classList.remove('flash-cold', 'flash-hot');
        void this.eqTempResult.offsetWidth;
        void this.surfTempResult.offsetWidth;
        const flashClass = status === 'too-cold' ? 'flash-cold' : 'flash-hot';
        if (status !== 'habitable') {
          this.eqTempResult.classList.add(flashClass);
          this.surfTempResult.classList.add(flashClass);
        }
      }
      this.prevStatus = status;
    }
  }

  private updateStatusDisplay(status: string) {
    if (this.statusBox && this.statusTitle) {
      this.statusBox.className = `hz-status-box ${status}`;
      let text = 'HABITABLE (Liquid water possible)';
      if (status === 'too-hot') {
        text = 'TOO HOT (Water vaporizes)';
      } else if (status === 'too-cold') {
        text = 'TOO COLD (Water freezes)';
      }
      this.statusTitle.textContent = text;
    }
  }

  private animate() {
    const targetDist = Math.pow(10, parseVal(this.distInput.value, 0));
    const targetTemp = parseVal(this.tempInput.value, 5778);
    const targetLuminosity = Math.pow(10, parseVal(this.lumInput.value, 0));
    const targetMass = parseVal(this.massInput.value, 1.0);
    const hzLimits = this.engine.calculateLimits(targetLuminosity, targetTemp);

    this.curDistanceAu += (targetDist - this.curDistanceAu) * 0.12;
    this.curRunawayLimit += (hzLimits.runawayGreenhouse - this.curRunawayLimit) * 0.12;
    this.curMaxLimit += (hzLimits.maximumGreenhouse - this.curMaxLimit) * 0.12;
    this.curTemp += (targetTemp - this.curTemp) * 0.12;
    this.curLuminosity += (targetLuminosity - this.curLuminosity) * 0.12;
    this.curMass += (targetMass - this.curMass) * 0.12;

    const size = this.renderer.resize();
    const canvasRect = this.canvas.getBoundingClientRect();
    const containerRect = this.canvasContainer.getBoundingClientRect();
    const cx = (containerRect.left - canvasRect.left) + containerRect.width / 2;
    const cy = (containerRect.top - canvasRect.top) + containerRect.height / 2;
    const maxDist = Math.max(this.curDistanceAu * 1.3, this.curMaxLimit * 1.25);
    const scale = (Math.min(containerRect.width, containerRect.height) * 0.4) / maxDist;

    this.renderer.draw({
      cx, cy,
      runawayGreenhousePx: this.curRunawayLimit * scale,
      maximumGreenhousePx: this.curMaxLimit * scale,
      planetDistPx: this.curDistanceAu * scale,
      isTooHot: this.curDistanceAu < this.curRunawayLimit,
      isTooCold: this.curDistanceAu > this.curMaxLimit,
      curMass: this.curMass, curLuminosity: this.curLuminosity, curTemp: this.curTemp, curDistanceAu: this.curDistanceAu,
    }, size.w, size.h);
    requestAnimationFrame(() => this.animate());
  }
}
export { type RenderState };
