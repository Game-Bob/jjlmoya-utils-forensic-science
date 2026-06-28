import { FiberComparisonMicroscope } from './logic';
import { buildSpectrumChartMarkup, drawMicroscopeScene } from './render';
import type { DyePreset, FiberMaterial, FiberReference, FiberTwist, QuestionedFiberInput } from './logic';

type Ui = Record<string, string>;
type Result = ReturnType<FiberComparisonMicroscope['compare']>;

const STORAGE_KEY = 'forensic-fiber-comparison-microscope-state';
const FIBER_VALUES: FiberReference[] = ['questionedCotton', 'suspectCotton', 'wool', 'polyester', 'nylon'];
const MATERIAL_VALUES: FiberMaterial[] = ['cotton', 'wool', 'polyester', 'nylon'];
const TWIST_VALUES: FiberTwist[] = ['S', 'Z', 'irregular'];
const DYE_VALUES: DyePreset[] = ['indigo', 'crimson', 'navy', 'violet'];
const DEFAULT_BUILDER: QuestionedFiberInput = { material: 'cotton', diameterMicrons: 18, twist: 'irregular', birefringence: 0.032, dyePreset: 'indigo' };

function byId<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function isFiberReference(value: unknown): value is FiberReference {
  return typeof value === 'string' && FIBER_VALUES.includes(value as FiberReference);
}

function normalizeDegrees(value: number): number {
  return Math.max(0, Math.min(180, value));
}

export function initFiberComparisonMicroscope(ui: Ui): void {
  new FiberComparisonView(ui).init();
}

class FiberComparisonView {
  private readonly model = new FiberComparisonMicroscope();
  private readonly canvas = byId<HTMLCanvasElement>('fiber-canvas');
  private readonly context = this.canvas?.getContext('2d') ?? null;
  private readonly chart = byId<SVGSVGElement>('fiber-spectrum-chart');
  private readonly rightSelect = byId<HTMLSelectElement>('fiber-right');
  private readonly focusInput = byId<HTMLInputElement>('fiber-focus');
  private readonly polarizerInput = byId<HTMLInputElement>('fiber-polarizer');
  private readonly diameterInput = byId<HTMLInputElement>('fiber-diameter');
  private readonly birefringenceInput = byId<HTMLInputElement>('fiber-questioned-birefringence');
  private builder: QuestionedFiberInput = { ...DEFAULT_BUILDER };

  constructor(private readonly ui: Ui) {}

  init(): void {
    this.restoreState();
    this.bindEvents();
    this.render();
    new MutationObserver(() => this.render()).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  private bindEvents(): void {
    this.bindInputs();
    this.bindChoiceMenu();
    this.bindBuilderButtons();
    document.addEventListener('click', (event) => this.closeMenusFromOutside(event.target as Node));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') this.closeChoiceMenu(); });
  }

  private bindInputs(): void {
    const inputs = [this.rightSelect, this.focusInput, this.polarizerInput, this.diameterInput, this.birefringenceInput];
    inputs.forEach((input) => {
      input?.addEventListener('input', () => this.render());
      input?.addEventListener('change', () => this.render());
    });
  }

  private bindChoiceMenu(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-choice-trigger]').forEach((button) => {
      button.addEventListener('click', () => this.toggleChoiceMenu(button.getAttribute('aria-expanded') !== 'true'));
    });
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-choice]').forEach((button) => {
      button.addEventListener('click', () => this.chooseFiber(button));
    });
  }

  private bindBuilderButtons(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-builder]').forEach((button) => {
      button.addEventListener('click', () => {
        this.applyBuilderSelection(button.dataset.fiberBuilder, button.dataset.builderValue);
        this.render();
      });
    });
  }

  private restoreState(): void {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, unknown>;
      this.restoreChoiceState(saved);
      this.restoreBuilderState(saved.builder);
      this.syncBuilderInputs();
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  private restoreChoiceState(saved: Record<string, unknown>): void {
    if (isFiberReference(saved.right) && this.rightSelect) this.rightSelect.value = saved.right;
    if (typeof saved.focus === 'number' && this.focusInput) this.focusInput.value = String(saved.focus);
    if (typeof saved.polarizer === 'number' && this.polarizerInput) this.polarizerInput.value = String(saved.polarizer);
  }

  private restoreBuilderState(value: unknown): void {
    if (this.isBuilderState(value)) this.builder = value;
  }

  private syncBuilderInputs(): void {
    if (this.diameterInput) this.diameterInput.value = String(this.builder.diameterMicrons);
    if (this.birefringenceInput) this.birefringenceInput.value = String(Math.round(this.builder.birefringence * 1000));
  }

  private isBuilderState(value: unknown): value is QuestionedFiberInput {
    if (!value || typeof value !== 'object') return false;
    const candidate = value as QuestionedFiberInput;
    return MATERIAL_VALUES.includes(candidate.material)
      && TWIST_VALUES.includes(candidate.twist)
      && DYE_VALUES.includes(candidate.dyePreset)
      && typeof candidate.diameterMicrons === 'number'
      && typeof candidate.birefringence === 'number';
  }

  private saveState(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      right: this.rightSelect?.value,
      focus: Number(this.focusInput?.value ?? 62),
      polarizer: Number(this.polarizerInput?.value ?? 45),
      builder: this.builder,
    }));
  }

  private toggleChoiceMenu(open: boolean): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-choice-trigger]').forEach((button) => {
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll<HTMLElement>('[data-fiber-choice-menu]').forEach((menu) => {
      menu.classList.toggle('is-open', open);
    });
  }

  private closeChoiceMenu(): void {
    this.toggleChoiceMenu(false);
  }

  private closeMenusFromOutside(target: Node): void {
    const element = target instanceof Element ? target : null;
    if (element?.closest('[data-fiber-choice-trigger], [data-fiber-choice-menu]')) return;
    this.closeChoiceMenu();
  }

  private chooseFiber(button: HTMLButtonElement): void {
    if (!this.rightSelect || !isFiberReference(button.dataset.fiberValue)) return;
    this.rightSelect.value = button.dataset.fiberValue;
    this.closeChoiceMenu();
    this.render();
  }

  private applyBuilderSelection(key?: string, value?: string): void {
    if (key === 'material' && MATERIAL_VALUES.includes(value as FiberMaterial)) this.builder.material = value as FiberMaterial;
    if (key === 'twist' && TWIST_VALUES.includes(value as FiberTwist)) this.builder.twist = value as FiberTwist;
    if (key === 'dyePreset' && DYE_VALUES.includes(value as DyePreset)) this.builder.dyePreset = value as DyePreset;
  }

  private render(): void {
    const right = isFiberReference(this.rightSelect?.value) ? this.rightSelect.value : 'suspectCotton';
    const focus = Number(this.focusInput?.value ?? 62);
    const polarizationDegrees = normalizeDegrees(Number(this.polarizerInput?.value ?? 45));
    this.updateBuilderFromInputs();

    const leftProfile = this.model.createQuestionedFiber(this.builder);
    const result = this.model.compare({ left: leftProfile, right, focus, polarizationDegrees });

    this.renderVisuals(result, focus, polarizationDegrees);
    this.renderReadout(result, right, leftProfile);
    this.saveState();
  }

  private updateBuilderFromInputs(): void {
    this.builder.diameterMicrons = Number(this.diameterInput?.value ?? this.builder.diameterMicrons);
    this.builder.birefringence = Number((Number(this.birefringenceInput?.value ?? 32) / 1000).toFixed(3));
  }

  private renderVisuals(result: Result, focus: number, polarizationDegrees: number): void {
    if (this.canvas && this.context) {
      drawMicroscopeScene({ context: this.context, canvas: this.canvas, left: result.left, right: result.right, focus, polarizationDegrees });
    }
    if (this.chart) this.chart.innerHTML = buildSpectrumChartMarkup(this.ui, result.left, result.right);
  }

  private renderReadout(result: Result, right: FiberReference, leftProfile: ReturnType<FiberComparisonMicroscope['createQuestionedFiber']>): void {
    this.setText('fiber-left-label', this.ui.customQuestionedLabel ?? 'Questioned case fiber');
    this.setText('fiber-right-label', this.label(right));
    this.setText('fiber-left-choice', this.ui.customQuestionedLabel ?? 'Questioned case fiber');
    this.setText('fiber-left-summary', this.questionedSummary());
    this.setText('fiber-right-choice', this.label(right));
    this.updateChoiceState(right);
    this.updateBuilderState();
    this.setText('fiber-diameter-label', `${leftProfile.diameterMicrons} \u00b5m`);
    this.setText('fiber-birefringence-label', leftProfile.birefringence.toFixed(3));
    this.setText('fiber-focus-label', `${Math.round(result.visualSharpness)}%`);
    this.setText('fiber-polar-label', `${normalizeDegrees(Number(this.polarizerInput?.value ?? 45))}\u00b0`);
    this.setText('fiber-combined-score', `${result.combinedScore}%`);
    this.setText('fiber-verdict-score', `${result.combinedScore}%`);
    this.setText('fiber-morphology-score', `${result.morphologyScore}%`);
    this.setText('fiber-spectrum-score', `${result.spectrumScore}%`);
    this.setText('fiber-birefringence', result.birefringenceContrast.toFixed(3));
    this.setText('fiber-verdict', this.ui[result.verdictKey] ?? result.verdictKey);
    this.updateVerdict(result);
  }

  private label(id: FiberReference): string {
    return this.ui[id] ?? id;
  }

  private questionedSummary(): string {
    const material = this.ui[`material${this.builder.material}`] ?? this.builder.material;
    const dye = this.ui[`dye${this.builder.dyePreset}`] ?? this.builder.dyePreset;
    return `${material} / ${this.builder.diameterMicrons} \u00b5m / ${this.builder.twist} / ${dye}`;
  }

  private setText(id: string, value: string): void {
    const element = byId(id);
    if (element) element.textContent = value;
  }

  private updateChoiceState(right: FiberReference): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-choice]').forEach((button) => {
      button.setAttribute('aria-selected', button.dataset.fiberValue === right ? 'true' : 'false');
    });
  }

  private updateBuilderState(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-builder]').forEach((button) => {
      const key = button.dataset.fiberBuilder;
      const value = button.dataset.builderValue;
      const active = (key === 'material' && value === this.builder.material)
        || (key === 'twist' && value === this.builder.twist)
        || (key === 'dyePreset' && value === this.builder.dyePreset);
      button.dataset.active = active ? 'true' : 'false';
    });
  }

  private updateVerdict(result: Result): void {
    const panel = byId<HTMLElement>('fiber-verdict-panel');
    const meter = byId<HTMLElement>('fiber-verdict-meter');
    const statusKey = this.statusKey(result.verdictKey);
    const state = this.verdictState(result.verdictKey);
    this.setText('fiber-verdict-status', this.ui[statusKey] ?? statusKey);
    if (meter) meter.style.width = `${result.combinedScore}%`;
    if (!panel) return;
    panel.dataset.verdict = state;
    panel.classList.remove('is-updating');
    void panel.offsetWidth;
    panel.classList.add('is-updating');
  }

  private statusKey(verdictKey: Result['verdictKey']): string {
    if (verdictKey === 'verdictStrong') return 'statusStrong';
    if (verdictKey === 'verdictPartial') return 'statusPartial';
    return 'statusDifferent';
  }

  private verdictState(verdictKey: Result['verdictKey']): string {
    if (verdictKey === 'verdictStrong') return 'strong';
    if (verdictKey === 'verdictPartial') return 'partial';
    return 'different';
  }
}
