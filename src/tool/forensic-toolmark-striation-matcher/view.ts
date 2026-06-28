import { StriationMatcher } from './logic';
import { renderToolmarkCanvas } from './renderer';
import type { ToolProfile } from './logic';
import type { UploadedSample } from './renderer';

type Ui = Record<string, string>;
type UnitSystem = 'metric' | 'imperial';
type NumberInput = HTMLInputElement | null;

const STORAGE_KEY = 'forensic-toolmark-striation-matcher-state';
const PROFILES: ToolProfile[] = ['screwdriver', 'prybar', 'boltCutter'];
const DEFAULTS = { offset: 34, rotation: 2.5, zoom: 100, contrast: 108, brightness: 100, split: 50 };

function byId<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function isToolProfile(value: unknown): value is ToolProfile {
  return typeof value === 'string' && PROFILES.includes(value as ToolProfile);
}

function isDarkTheme(): boolean {
  return document.documentElement.classList.contains('theme-dark') || document.body.classList.contains('theme-dark');
}

function readNumber(input: NumberInput, fallback: number): number {
  return Number(input?.value ?? fallback);
}

function setInput(input: NumberInput, value: number): void {
  if (input) input.value = String(value);
}

function bindInput(input: NumberInput, render: () => void): void {
  input?.addEventListener('input', render);
}

export function initToolmarkStriationMatcher(ui: Ui): void {
  new ToolmarkView(ui).init();
}

class ToolmarkView {
  private readonly matcher = new StriationMatcher();
  private readonly canvas = byId<HTMLCanvasElement>('toolmark-canvas');
  private readonly root = document.querySelector<HTMLElement>('[data-toolmark-tool]');
  private readonly splitInput = byId<HTMLInputElement>('toolmark-split');
  private readonly offsetInput = byId<HTMLInputElement>('toolmark-offset');
  private readonly rotationInput = byId<HTMLInputElement>('toolmark-rotation');
  private readonly zoomInput = byId<HTMLInputElement>('toolmark-zoom');
  private readonly contrastInput = byId<HTMLInputElement>('toolmark-contrast');
  private readonly brightnessInput = byId<HTMLInputElement>('toolmark-brightness');
  private profile: ToolProfile = 'screwdriver';
  private unitSystem: UnitSystem = 'metric';
  private knownSample: UploadedSample | null = null;
  private questionedSample: UploadedSample | null = null;
  private gridEnabled = true;

  constructor(private readonly ui: Ui) {}

  init(): void {
    this.restoreState();
    this.bindEvents();
    this.updateButtons();
    this.render();
    new MutationObserver(() => this.render()).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  private bindEvents(): void {
    [this.splitInput, this.offsetInput, this.rotationInput, this.zoomInput, this.contrastInput, this.brightnessInput].forEach((input) => bindInput(input, () => this.render()));
    byId<HTMLInputElement>('toolmark-known-file')?.addEventListener('change', (event) => this.loadSample(event, 'known'));
    byId<HTMLInputElement>('toolmark-questioned-file')?.addEventListener('change', (event) => this.loadSample(event, 'questioned'));
    byId<HTMLButtonElement>('toolmark-reset')?.addEventListener('click', () => this.resetAlignment());
    byId<HTMLButtonElement>('toolmark-grid')?.addEventListener('click', () => this.toggleGrid());
    byId<HTMLButtonElement>('toolmark-export')?.addEventListener('click', () => this.exportCanvas());
    this.bindProfileButtons();
    this.bindUnitButtons();
  }

  private bindProfileButtons(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-toolmark-profile]').forEach((button) => {
      button.addEventListener('click', () => this.chooseProfile(button.dataset.toolmarkProfile));
    });
  }

  private bindUnitButtons(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-toolmark-unit]').forEach((button) => {
      button.addEventListener('click', () => this.chooseUnit(button.dataset.toolmarkUnit));
    });
  }

  private chooseProfile(value: unknown): void {
    if (!isToolProfile(value)) return;
    this.profile = value;
    this.updateButtons();
    this.render();
  }

  private chooseUnit(value: unknown): void {
    this.unitSystem = value === 'imperial' ? 'imperial' : 'metric';
    this.updateButtons();
    this.render();
  }

  private resetAlignment(): void {
    setInput(this.offsetInput, 0);
    setInput(this.rotationInput, 0);
    setInput(this.zoomInput, DEFAULTS.zoom);
    setInput(this.contrastInput, DEFAULTS.contrast);
    setInput(this.brightnessInput, DEFAULTS.brightness);
    setInput(this.splitInput, DEFAULTS.split);
    this.render();
  }

  private toggleGrid(): void {
    this.gridEnabled = !this.gridEnabled;
    this.updateButtons();
    this.render();
  }

  private restoreState(): void {
    const saved = this.readSavedState();
    if (isToolProfile(saved.profile)) this.profile = saved.profile;
    if (saved.unitSystem === 'metric' || saved.unitSystem === 'imperial') this.unitSystem = saved.unitSystem;
    this.restoreNumberInputs(saved);
    if (typeof saved.gridEnabled === 'boolean') this.gridEnabled = saved.gridEnabled;
  }

  private readSavedState(): Record<string, unknown> {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, unknown>;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
  }

  private restoreNumberInputs(saved: Record<string, unknown>): void {
    this.restoreNumber(saved.offset, this.offsetInput);
    this.restoreNumber(saved.rotation, this.rotationInput);
    this.restoreNumber(saved.zoom, this.zoomInput);
    this.restoreNumber(saved.contrast, this.contrastInput);
    this.restoreNumber(saved.brightness, this.brightnessInput);
    this.restoreNumber(saved.split, this.splitInput);
  }

  private restoreNumber(value: unknown, input: NumberInput): void {
    if (typeof value === 'number') setInput(input, value);
  }

  private saveState(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.currentState()));
  }

  private currentState(): Record<string, unknown> {
    return {
      profile: this.profile,
      unitSystem: this.unitSystem,
      offset: readNumber(this.offsetInput, DEFAULTS.offset),
      rotation: readNumber(this.rotationInput, DEFAULTS.rotation),
      zoom: readNumber(this.zoomInput, DEFAULTS.zoom),
      contrast: readNumber(this.contrastInput, DEFAULTS.contrast),
      brightness: readNumber(this.brightnessInput, DEFAULTS.brightness),
      split: readNumber(this.splitInput, DEFAULTS.split),
      gridEnabled: this.gridEnabled,
    };
  }

  private updateButtons(): void {
    this.updateProfileButtons();
    document.querySelectorAll<HTMLButtonElement>('[data-toolmark-unit]').forEach((button) => {
      button.dataset.active = button.dataset.toolmarkUnit === this.unitSystem ? 'true' : 'false';
    });
    const gridButton = byId<HTMLButtonElement>('toolmark-grid');
    if (gridButton) gridButton.dataset.active = this.gridEnabled ? 'true' : 'false';
  }

  private updateProfileButtons(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-toolmark-profile]').forEach((button) => {
      button.dataset.active = button.dataset.toolmarkProfile === this.profile ? 'true' : 'false';
    });
  }

  private render(): void {
    const result = this.matcher.compare({ profile: this.profile, offsetMicrons: this.offset(), rotationDegrees: this.rotation() });
    this.renderCanvas(result);
    this.root?.style.setProperty('--toolmark-split', `${readNumber(this.splitInput, DEFAULTS.split)}%`);
    this.updateLabels(result);
    this.saveState();
  }

  private renderCanvas(result: ReturnType<StriationMatcher['compare']>): void {
    if (!this.canvas) return;
    renderToolmarkCanvas(this.canvas, {
      result,
      knownSample: this.knownSample,
      questionedSample: this.questionedSample,
      splitPercent: readNumber(this.splitInput, DEFAULTS.split),
      zoomPercent: readNumber(this.zoomInput, DEFAULTS.zoom),
      contrastPercent: readNumber(this.contrastInput, DEFAULTS.contrast),
      brightnessPercent: readNumber(this.brightnessInput, DEFAULTS.brightness),
      gridEnabled: this.gridEnabled,
      dark: isDarkTheme(),
      reliefGraphLabel: this.ui.reliefGraph,
    });
  }

  private updateLabels(result: ReturnType<StriationMatcher['compare']>): void {
    const visualMode = this.hasUploadedImages();
    this.setText('toolmark-correlation', visualMode ? this.ui.visualMode : `${result.correlation}%`);
    this.setText('toolmark-verdict', this.verdictLabel(result.correlation, visualMode));
    this.setText('toolmark-offset-label', this.offsetLabel(result));
    this.setText('toolmark-rotation-label', `${result.rotationDegrees.toFixed(1)}${this.ui.degrees}`);
    this.setText('toolmark-zoom-label', `${readNumber(this.zoomInput, DEFAULTS.zoom)}%`);
    this.setText('toolmark-interpretation', visualMode ? this.ui.visualInterpretation : '');
    this.setText('toolmark-phase-label', `${result.phaseScore}%`);
    this.setText('toolmark-rotation-fit-label', `${result.rotationScore}%`);
    this.setText('toolmark-known-name', this.knownSample?.name ?? this.ui.noFile);
    this.setText('toolmark-questioned-name', this.questionedSample?.name ?? this.ui.noFile);
    this.updateMeters(result);
  }

  private verdictLabel(correlation: number, visualMode: boolean): string {
    if (visualMode) return this.ui.visualVerdict;
    if (correlation >= 82) return this.ui.verdictStrong;
    if (correlation >= 58) return this.ui.verdictPartial;
    return this.ui.verdictWeak;
  }

  private offsetLabel(result: ReturnType<StriationMatcher['compare']>): string {
    if (this.unitSystem === 'imperial') return `${result.offsetThousandths.toFixed(2)} ${this.ui.thousandths}`;
    return `${result.offsetMicrons.toFixed(0)} ${this.ui.microns}`;
  }

  private updateMeters(result: ReturnType<StriationMatcher['compare']>): void {
    const phase = byId<HTMLMeterElement>('toolmark-phase');
    const rotation = byId<HTMLMeterElement>('toolmark-rotation-fit');
    if (phase) phase.value = result.phaseScore;
    if (rotation) rotation.value = result.rotationScore;
  }

  private setText(id: string, value: string): void {
    const element = byId(id);
    if (element) element.textContent = value;
  }

  private hasUploadedImages(): boolean {
    return Boolean(this.knownSample || this.questionedSample);
  }

  private loadSample(event: Event, kind: 'known' | 'questioned'): void {
    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    this.readImage(file, (sample) => this.setSample(kind, sample));
  }

  private readImage(file: File, callback: (sample: UploadedSample) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => this.createImage(String(reader.result ?? ''), file.name, callback));
    reader.readAsDataURL(file);
  }

  private createImage(src: string, name: string, callback: (sample: UploadedSample) => void): void {
    const image = new Image();
    image.addEventListener('load', () => callback({ image, name }));
    image.src = src;
  }

  private setSample(kind: 'known' | 'questioned', sample: UploadedSample): void {
    if (kind === 'known') this.knownSample = sample;
    else this.questionedSample = sample;
    this.render();
  }

  private exportCanvas(): void {
    if (!this.canvas) return;
    const link = document.createElement('a');
    link.download = this.ui.exportFilename;
    link.href = this.canvas.toDataURL('image/png');
    link.click();
  }

  private offset(): number {
    return readNumber(this.offsetInput, DEFAULTS.offset);
  }

  private rotation(): number {
    return readNumber(this.rotationInput, DEFAULTS.rotation);
  }

}
