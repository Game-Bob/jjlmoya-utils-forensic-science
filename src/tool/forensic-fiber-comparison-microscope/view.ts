import { FiberComparisonMicroscope } from './logic';
import type { DyePreset, FiberMaterial, FiberProfile, FiberReference, FiberTwist, QuestionedFiberInput, SpectrumPoint } from './logic';

type Ui = Record<string, string>;
type Theme = { field: string; fiberA: string; fiberB: string; glow: string; text: string; grid: string };
type Result = ReturnType<FiberComparisonMicroscope['compare']>;

const STORAGE_KEY = 'forensic-fiber-comparison-microscope-state';
const FIBER_VALUES: FiberReference[] = ['questionedCotton', 'suspectCotton', 'wool', 'polyester', 'nylon'];
const MATERIAL_VALUES: FiberMaterial[] = ['cotton', 'wool', 'polyester', 'nylon'];
const TWIST_VALUES: FiberTwist[] = ['S', 'Z', 'irregular'];
const DYE_VALUES: DyePreset[] = ['indigo', 'crimson', 'navy', 'violet'];
const DYE_COLORS: Record<string, string> = {
  'indigo reactive blue': '#1d5f84',
  'acid crimson': '#b91c4a',
  'disperse navy': '#243c8f',
  'acid violet': '#8b5cf6',
};

function byId<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function isFiberReference(value: unknown): value is FiberReference {
  return typeof value === 'string' && FIBER_VALUES.includes(value as FiberReference);
}

function currentTheme(): Theme {
  const dark = document.documentElement.classList.contains('theme-dark') || document.body.classList.contains('theme-dark');
  if (dark) return { field: '#10171c', fiberA: '#7dd3fc', fiberB: '#c4b5fd', glow: '#facc15', text: '#f8fafc', grid: 'rgba(255,255,255,0.12)' };
  return { field: '#f3f7ed', fiberA: '#1d5f84', fiberB: '#7c3aed', glow: '#b45309', text: '#17212b', grid: 'rgba(15,23,42,0.14)' };
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
  private readonly chart = document.getElementById('fiber-spectrum-chart') as SVGSVGElement | null;
  private readonly rightSelect = byId<HTMLSelectElement>('fiber-right');
  private readonly focusInput = byId<HTMLInputElement>('fiber-focus');
  private readonly polarizerInput = byId<HTMLInputElement>('fiber-polarizer');
  private readonly diameterInput = byId<HTMLInputElement>('fiber-diameter');
  private readonly questionedBirefringenceInput = byId<HTMLInputElement>('fiber-questioned-birefringence');
  private builder: QuestionedFiberInput = { material: 'cotton', diameterMicrons: 18, twist: 'irregular', birefringence: 0.032, dyePreset: 'indigo' };

  constructor(private readonly ui: Ui) {}

  init(): void {
    this.restoreState();
    this.bindEvents();
    this.render();
    new MutationObserver(() => this.render()).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  private bindEvents(): void {
    [this.rightSelect, this.focusInput, this.polarizerInput, this.diameterInput, this.questionedBirefringenceInput].forEach((input) => {
      input?.addEventListener('input', () => this.render());
      input?.addEventListener('change', () => this.render());
    });
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-choice-trigger]').forEach((button) => {
      button.addEventListener('click', () => this.toggleMenu(button.dataset.fiberChoiceTrigger ?? '', button.getAttribute('aria-expanded') !== 'true'));
    });
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-choice]').forEach((button) => {
      button.addEventListener('click', () => this.chooseFiber(button));
    });
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-builder]').forEach((button) => {
      button.addEventListener('click', () => this.updateBuilderButton(button));
    });
    document.addEventListener('click', (event) => this.closeMenusFromOutside(event.target as Node));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') this.closeAllMenus(); });
  }

  private restoreState(): void {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, unknown>;
      if (isFiberReference(saved.right) && this.rightSelect) this.rightSelect.value = saved.right;
      if (typeof saved.focus === 'number' && this.focusInput) this.focusInput.value = String(saved.focus);
      if (typeof saved.polarizer === 'number' && this.polarizerInput) this.polarizerInput.value = String(saved.polarizer);
      if (this.isBuilderState(saved.builder)) this.builder = saved.builder;
      if (this.diameterInput) this.diameterInput.value = String(this.builder.diameterMicrons);
      if (this.questionedBirefringenceInput) this.questionedBirefringenceInput.value = String(Math.round(this.builder.birefringence * 1000));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  private isBuilderState(value: unknown): value is QuestionedFiberInput {
    const candidate = value as QuestionedFiberInput;
    return MATERIAL_VALUES.includes(candidate?.material)
      && TWIST_VALUES.includes(candidate?.twist)
      && DYE_VALUES.includes(candidate?.dyePreset)
      && typeof candidate?.diameterMicrons === 'number'
      && typeof candidate?.birefringence === 'number';
  }

  private saveState(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      right: this.rightSelect?.value,
      focus: Number(this.focusInput?.value ?? 62),
      polarizer: Number(this.polarizerInput?.value ?? 45),
      builder: this.builder,
    }));
  }

  private label(id: FiberReference): string {
    return this.ui[id] ?? id;
  }

  private setText(id: string, value: string): void {
    const element = byId(id);
    if (element) element.textContent = value;
  }

  private toggleMenu(name: string, open: boolean): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fiber-choice-trigger]').forEach((button) => {
      const isTarget = button.dataset.fiberChoiceTrigger === name;
      button.setAttribute('aria-expanded', isTarget && open ? 'true' : 'false');
    });
    document.querySelectorAll<HTMLElement>('[data-fiber-choice-menu]').forEach((menu) => {
      menu.classList.toggle('is-open', menu.dataset.fiberChoiceMenu === name && open);
    });
  }

  private closeAllMenus(): void {
    this.toggleMenu('right', false);
  }

  private closeMenusFromOutside(target: Node): void {
    const element = target instanceof Element ? target : null;
    if (element?.closest('[data-fiber-choice-trigger], [data-fiber-choice-menu]')) return;
    this.closeAllMenus();
  }

  private chooseFiber(button: HTMLButtonElement): void {
    if (!this.rightSelect || !isFiberReference(button.dataset.fiberValue)) return;
    this.rightSelect.value = button.dataset.fiberValue;
    this.closeAllMenus();
    this.render();
  }

  private updateBuilderButton(button: HTMLButtonElement): void {
    const key = button.dataset.fiberBuilder;
    const value = button.dataset.builderValue;
    if (key === 'material' && MATERIAL_VALUES.includes(value as FiberMaterial)) this.builder.material = value as FiberMaterial;
    if (key === 'twist' && TWIST_VALUES.includes(value as FiberTwist)) this.builder.twist = value as FiberTwist;
    if (key === 'dyePreset' && DYE_VALUES.includes(value as DyePreset)) this.builder.dyePreset = value as DyePreset;
    this.render();
  }

  private render(): void {
    const right = isFiberReference(this.rightSelect?.value) ? this.rightSelect.value : 'suspectCotton';
    const focus = Number(this.focusInput?.value ?? 62);
    const polarizationDegrees = normalizeDegrees(Number(this.polarizerInput?.value ?? 45));
    this.builder.diameterMicrons = Number(this.diameterInput?.value ?? this.builder.diameterMicrons);
    this.builder.birefringence = Number((Number(this.questionedBirefringenceInput?.value ?? 32) / 1000).toFixed(3));
    const leftProfile = this.model.createQuestionedFiber(this.builder);
    const result = this.model.compare({ left: leftProfile, right, focus, polarizationDegrees });

    this.drawMicroscope(result, focus, polarizationDegrees);
    this.drawChart(result);
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
    this.setText('fiber-polar-label', `${polarizationDegrees}\u00b0`);
    this.setText('fiber-combined-score', `${result.combinedScore}%`);
    this.setText('fiber-verdict-score', `${result.combinedScore}%`);
    this.setText('fiber-morphology-score', `${result.morphologyScore}%`);
    this.setText('fiber-spectrum-score', `${result.spectrumScore}%`);
    this.setText('fiber-birefringence', result.birefringenceContrast.toFixed(3));
    this.setText('fiber-verdict', this.ui[result.verdictKey] ?? result.verdictKey);
    this.updateVerdict(result);
    this.saveState();
  }

  private questionedSummary(): string {
    const material = this.ui[`material${this.builder.material}`] ?? this.builder.material;
    const dye = this.ui[`dye${this.builder.dyePreset}`] ?? this.builder.dyePreset;
    return `${material} / ${this.builder.diameterMicrons} \u00b5m / ${this.builder.twist} / ${dye}`;
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
    const statusKey = result.verdictKey === 'verdictStrong' ? 'statusStrong' : result.verdictKey === 'verdictPartial' ? 'statusPartial' : 'statusDifferent';
    const state = result.verdictKey === 'verdictStrong' ? 'strong' : result.verdictKey === 'verdictPartial' ? 'partial' : 'different';
    this.setText('fiber-verdict-status', this.ui[statusKey] ?? statusKey);
    if (meter) meter.style.width = `${result.combinedScore}%`;
    if (!panel) return;
    panel.dataset.verdict = state;
    panel.classList.remove('is-updating');
    void panel.offsetWidth;
    panel.classList.add('is-updating');
  }

  private dyeColor(profile: FiberProfile, fallback: string): string {
    return DYE_COLORS[profile.dyeFamily] ?? fallback;
  }

  private drawMicroscope(result: Result, focus: number, polarizationDegrees: number): void {
    if (!this.canvas || !this.context) return;
    const theme = currentTheme();
    const ctx = this.context;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const radius = Math.min(width, height) * 0.43;
    const blur = Math.abs(focus - 62) / 8;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = theme.field;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
    ctx.clip();
    this.drawHalf(result.left, 0, width / 2, height, theme, blur, polarizationDegrees, true);
    this.drawHalf(result.right, width / 2, width / 2, height, theme, blur, polarizationDegrees, false);
    this.drawReticle(width, height, radius, theme);
    ctx.restore();
    ctx.lineWidth = 18;
    ctx.strokeStyle = 'rgba(12,18,24,0.72)';
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  private drawHalf(profile: FiberProfile, xOffset: number, width: number, height: number, theme: Theme, blur: number, angle: number, leftSide: boolean): void {
    if (!this.context) return;
    const ctx = this.context;
    const brightness = 0.38 + Math.pow(Math.sin((angle * Math.PI) / 180), 2) * profile.birefringence * 9;
    const fiberColor = this.dyeColor(profile, leftSide ? theme.fiberA : theme.fiberB);
    ctx.save();
    ctx.translate(xOffset, 0);
    ctx.fillStyle = `${fiberColor}18`;
    ctx.fillRect(0, 0, width, height);
    ctx.filter = `blur(${blur.toFixed(1)}px)`;
    for (let i = 0; i < 7; i++) {
      const y = 95 + i * 58 + (leftSide ? i % 2 : (i + 1) % 2) * 18;
      const wave = profile.material === 'wool' ? 74 : profile.material === 'cotton' ? 48 : 30;
      ctx.beginPath();
      ctx.moveTo(-40, y);
      ctx.bezierCurveTo(width * 0.24, y - wave, width * 0.52, y + wave, width + 45, y + (profile.twist === 'S' ? -28 : 28));
      ctx.lineWidth = Math.max(4, profile.diameterMicrons / 2.7);
      ctx.strokeStyle = fiberColor;
      ctx.globalAlpha = Math.min(0.95, brightness + i * 0.035);
      ctx.shadowColor = theme.glow;
      ctx.shadowBlur = profile.natural ? 2 : 10 + brightness * 14;
      ctx.stroke();
      this.drawFiberTexture(width, y, profile);
    }
    ctx.restore();
    ctx.globalAlpha = 1;
    ctx.filter = 'none';
    ctx.shadowBlur = 0;
  }

  private drawFiberTexture(width: number, y: number, profile: FiberProfile): void {
    if (!this.context) return;
    this.context.save();
    this.context.globalAlpha = profile.material === 'wool' ? 0.38 : profile.natural ? 0.28 : 0.2;
    this.context.strokeStyle = profile.material === 'polyester' || profile.material === 'nylon' ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.62)';
    this.context.lineWidth = 1;
    const step = profile.material === 'wool' ? 22 : profile.material === 'cotton' ? 30 : 42;
    for (let x = 10; x < width; x += step) {
      this.context.beginPath();
      if (profile.material === 'wool') {
        this.context.arc(x, y, 8, -0.9, 0.9);
      } else if (profile.material === 'cotton') {
        this.context.moveTo(x, y - 16);
        this.context.lineTo(x + (profile.twist === 'S' ? -12 : 12), y + 16);
      } else {
        this.context.moveTo(x, y - 10);
        this.context.lineTo(x + (profile.twist === 'S' ? -18 : 18), y + 10);
      }
      this.context.stroke();
    }
    this.context.restore();
  }

  private drawReticle(width: number, height: number, radius: number, theme: Theme): void {
    if (!this.context) return;
    const ctx = this.context;
    ctx.strokeStyle = theme.grid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2 - radius);
    ctx.lineTo(width / 2, height / 2 + radius);
    ctx.moveTo(width / 2 - radius, height / 2);
    ctx.lineTo(width / 2 + radius, height / 2);
    ctx.stroke();
  }

  private drawChart(result: Result): void {
    if (!this.chart) return;
    const theme = currentTheme();
    const leftColor = this.dyeColor(result.left, theme.fiberA);
    const rightColor = this.dyeColor(result.right, theme.fiberB);
    this.chart.innerHTML = '';
    const leftPath = this.pathFor(result.left.spectrum);
    const rightPath = this.pathFor(result.right.spectrum);
    const leftArea = this.areaFor(result.left.spectrum);
    const rightArea = this.areaFor(result.right.spectrum);
    this.chart.insertAdjacentHTML('beforeend', `
      <defs>
        <linearGradient id="fiber-left-area" x1="0" y1="44" x2="0" y2="222" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="${leftColor}" stop-opacity="0.22"></stop>
          <stop offset="0.62" stop-color="${leftColor}" stop-opacity="0.07"></stop>
          <stop offset="1" stop-color="${leftColor}" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient id="fiber-right-area" x1="0" y1="44" x2="0" y2="222" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="${rightColor}" stop-opacity="0.18"></stop>
          <stop offset="0.62" stop-color="${rightColor}" stop-opacity="0.06"></stop>
          <stop offset="1" stop-color="${rightColor}" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="720" height="270" rx="8" fill="transparent"></rect>
      <g stroke="${theme.grid}" stroke-width="1">${[60, 110, 160, 210].map((lineY) => `<line x1="54" y1="${lineY}" x2="688" y2="${lineY}"></line>`).join('')}</g>
      <text x="54" y="34" fill="${theme.text}" font-size="19" font-weight="850">${this.ui.uvVisTitle}</text>
      <text x="54" y="246" fill="${theme.text}" font-size="12" font-family="JetBrains Mono, ui-monospace, monospace">380 nm</text>
      <text x="638" y="246" fill="${theme.text}" font-size="12" font-family="JetBrains Mono, ui-monospace, monospace">720 nm</text>
      <path d="${leftArea}" fill="url(#fiber-left-area)"></path>
      <path d="${rightArea}" fill="url(#fiber-right-area)"></path>
      <path d="${leftPath}" fill="none" stroke="${leftColor}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="${rightPath}" fill="none" stroke="${rightColor}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="11 9"></path>
    `);
  }

  private pathFor(points: SpectrumPoint[]): string {
    return points.map((point, index) => {
      const x = 54 + ((point.wavelength - 380) / 340) * 634;
      const y = 222 - point.absorbance * 178;
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  }

  private areaFor(points: SpectrumPoint[]): string {
    const first = points[0];
    const last = points[points.length - 1];
    if (!first || !last) return '';
    const firstX = 54 + ((first.wavelength - 380) / 340) * 634;
    const lastX = 54 + ((last.wavelength - 380) / 340) * 634;
    return `${this.pathFor(points)} L ${lastX.toFixed(1)} 222 L ${firstX.toFixed(1)} 222 Z`;
  }
}
