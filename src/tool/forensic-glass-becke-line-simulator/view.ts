import { RefractiveIndexCalculator } from './logic';
import type { FocusDirection, GlassReference } from './logic';

type Ui = Record<string, string>;
type Theme = { center: string; background: string; glass: string; halo: string; grain: string; text: string };
type Result = ReturnType<RefractiveIndexCalculator['simulate']>;

const STORAGE_KEY = 'forensic-glass-becke-line-simulator-state';
const GLASS_VALUES: GlassReference[] = ['sodaLime', 'borosilicate', 'leadCrystal', 'tempered'];
const GLASS_TINTS: Record<GlassReference, string> = { sodaLime: '#b9d7d3', borosilicate: '#c8dff2', leadCrystal: '#d6ccf4', tempered: '#cfe4bd' };
const HALO_SCALE: Record<GlassReference, number> = { sodaLime: 1, borosilicate: 0.42, leadCrystal: 1, tempered: 1 };

function byId<T extends HTMLElement>(id: string): T | null { return document.getElementById(id) as T | null; }

function isGlassReference(value: unknown): value is GlassReference { return typeof value === 'string' && GLASS_VALUES.includes(value as GlassReference); }

function currentTheme(): Theme {
  const dark = document.documentElement.classList.contains('theme-dark') || document.body.classList.contains('theme-dark');
  if (dark) return { center: '#64717a', background: '#101820', glass: '#253943', halo: '#f6c95c', grain: 'rgba(255,255,255,0.16)', text: '#f8fafc' };
  return { center: '#ffffff', background: '#edf7f4', glass: '#b9d7d3', halo: '#d97706', grain: 'rgba(15,23,42,0.12)', text: '#15242d' };
}

function drawBorosilicate(ctx: CanvasRenderingContext2D, radius: number): void {
  ctx.moveTo(-radius * 0.62, -radius * 0.22);
  ctx.bezierCurveTo(-radius * 0.5, -radius * 0.62, radius * 0.36, -radius * 0.64, radius * 0.58, -radius * 0.2);
  ctx.bezierCurveTo(radius * 0.78, radius * 0.2, radius * 0.22, radius * 0.64, -radius * 0.42, radius * 0.46);
  ctx.bezierCurveTo(-radius * 0.78, radius * 0.34, -radius * 0.84, radius * 0.02, -radius * 0.62, -radius * 0.22);
}

function drawLeadCrystal(ctx: CanvasRenderingContext2D, radius: number): void { drawPolygon(ctx, radius, [[0, -0.68], [0.28, -0.24], [0.74, -0.12], [0.34, 0.18], [0.42, 0.62], [0, 0.36], [-0.46, 0.58], [-0.34, 0.14], [-0.74, -0.16], [-0.26, -0.28]]); }

function drawPolygon(ctx: CanvasRenderingContext2D, radius: number, points: number[][]): void { points.forEach(([x, y], index) => index === 0 ? ctx.moveTo(radius * x, radius * y) : ctx.lineTo(radius * x, radius * y)); }

function drawGlassPath(ctx: CanvasRenderingContext2D, glass: GlassReference, radius: number): void {
  if (glass === 'borosilicate') drawBorosilicate(ctx, radius);
  else if (glass === 'leadCrystal') drawLeadCrystal(ctx, radius);
  else if (glass === 'tempered') drawPolygon(ctx, radius, [[-0.7, -0.48], [0.66, -0.34], [0.7, 0.38], [-0.2, 0.64], [-0.76, 0.16]]);
  else drawPolygon(ctx, radius, [[-0.72, -0.44], [0.58, -0.56], [0.78, 0.18], [0.14, 0.62], [-0.64, 0.38]]);
}

export function initBeckeLineSimulator(ui: Ui): void { new BeckeLineView(ui).init(); }

class BeckeLineView {
  private readonly model = new RefractiveIndexCalculator();
  private readonly canvas = byId<HTMLCanvasElement>('becke-canvas');
  private readonly context = this.canvas?.getContext('2d') ?? null;
  private readonly glassTrigger = byId<HTMLButtonElement>('becke-glass-trigger');
  private readonly glassLabel = byId('becke-glass-label');
  private readonly glassMenu = byId('becke-glass-menu');
  private readonly temperatureInput = byId<HTMLInputElement>('becke-temperature');
  private glassReference: GlassReference = 'sodaLime';
  private unitSystem: 'metric' | 'imperial' = 'metric';
  private focusDirection: FocusDirection = 'raised';
  private animationFrame = 0;
  private previousHaloOffset = 0;

  constructor(private readonly ui: Ui) {}

  init(): void {
    this.restoreState();
    this.bindEvents();
    this.updateButtons();
    this.render();
    new MutationObserver(() => this.render()).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  private labels(): Record<GlassReference, string> { return { sodaLime: this.ui.sodaLime, borosilicate: this.ui.borosilicate, leadCrystal: this.ui.leadCrystal, tempered: this.ui.tempered }; }

  private setText(id: string, value: string): void { const element = byId(id); if (element) element.textContent = value; }

  private formatTemperature(celsius: number, fahrenheit: number): string { return this.unitSystem === 'metric' ? `${celsius.toFixed(1)}\u00b0${this.ui.unitCelsius}` : `${fahrenheit.toFixed(1)}\u00b0${this.ui.unitFahrenheit}`; }

  private updateButtons(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-becke-unit]').forEach((button) => { button.dataset.active = button.dataset.beckeUnit === this.unitSystem ? 'true' : 'false'; });
    document.querySelectorAll<HTMLButtonElement>('[data-becke-focus]').forEach((button) => { button.dataset.active = button.dataset.beckeFocus === this.focusDirection ? 'true' : 'false'; });
    document.querySelectorAll<HTMLButtonElement>('[data-becke-glass]').forEach((button) => { button.setAttribute('aria-selected', button.dataset.beckeGlass === this.glassReference ? 'true' : 'false'); });
    if (this.glassLabel) this.glassLabel.textContent = this.labels()[this.glassReference];
  }

  private setGlassMenuOpen(open: boolean): void { this.glassTrigger?.setAttribute('aria-expanded', open ? 'true' : 'false'); this.glassMenu?.classList.toggle('is-open', open); }

  private bindEvents(): void {
    this.glassTrigger?.addEventListener('click', () => this.setGlassMenuOpen(this.glassTrigger?.getAttribute('aria-expanded') !== 'true'));
    document.querySelectorAll<HTMLButtonElement>('[data-becke-glass]').forEach((button) => this.bindGlassButton(button));
    this.temperatureInput?.addEventListener('input', () => this.render());
    document.querySelectorAll<HTMLButtonElement>('[data-becke-unit]').forEach((button) => this.bindUnitButton(button));
    document.querySelectorAll<HTMLButtonElement>('[data-becke-focus]').forEach((button) => this.bindFocusButton(button));
    document.addEventListener('click', (event) => this.closeMenuFromOutside(event.target as Node));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') this.setGlassMenuOpen(false); });
  }

  private bindGlassButton(button: HTMLButtonElement): void {
    button.addEventListener('click', () => {
      if (!isGlassReference(button.dataset.beckeGlass)) return;
      this.glassReference = button.dataset.beckeGlass;
      this.setGlassMenuOpen(false);
      this.updateButtons();
      this.render();
    });
  }

  private bindUnitButton(button: HTMLButtonElement): void {
    button.addEventListener('click', () => {
      this.unitSystem = button.dataset.beckeUnit === 'imperial' ? 'imperial' : 'metric';
      this.updateButtons();
      this.render();
    });
  }

  private bindFocusButton(button: HTMLButtonElement): void {
    button.addEventListener('click', () => {
      this.focusDirection = button.dataset.beckeFocus === 'lowered' ? 'lowered' : 'raised';
      this.updateButtons();
      this.render();
    });
  }

  private closeMenuFromOutside(target: Node): void { if (!this.glassMenu?.contains(target) && !this.glassTrigger?.contains(target)) this.setGlassMenuOpen(false); }

  private restoreState(): void {
    try {
      this.applySavedState(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, unknown>);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  private applySavedState(saved: Record<string, unknown>): void {
    if (isGlassReference(saved.glass)) this.glassReference = saved.glass;
    if (typeof saved.temperature === 'number' && this.temperatureInput) this.temperatureInput.value = String(saved.temperature);
    if (saved.unitSystem === 'metric' || saved.unitSystem === 'imperial') this.unitSystem = saved.unitSystem;
    if (saved.focusDirection === 'raised' || saved.focusDirection === 'lowered') this.focusDirection = saved.focusDirection;
  }

  private render(): void {
    const result = this.model.simulate({ temperatureC: Number(this.temperatureInput?.value ?? 96), glass: this.glassReference, focusDirection: this.focusDirection });
    this.animateDraw(result);
    this.setText('becke-temperature-label', this.formatTemperature(result.temperatureC, result.temperatureF));
    this.setText('becke-liquid-ri', result.liquidIndex.toFixed(5));
    this.setText('becke-glass-ri', result.glassIndex.toFixed(3));
    this.setText('becke-delta-ri', result.delta.toFixed(5));
    this.setText('becke-match', `${result.matchQuality}%`);
    this.setText('becke-interpretation', this.ui[result.interpretationKey] ?? result.interpretationKey);
    this.setText('becke-material-chip', this.labels()[this.glassReference]);
    this.saveState();
  }

  private saveState(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ glass: this.glassReference, temperature: Number(this.temperatureInput?.value ?? 96), unitSystem: this.unitSystem, focusDirection: this.focusDirection }));
  }

  private drawGrain(width: number, height: number, grain: string): void {
    if (!this.context) return;
    for (let i = 0; i < 90; i++) {
      this.context.fillStyle = grain;
      this.context.fillRect((i * 83) % width, (i * 47) % height, 1.4, 1.4);
    }
  }

  private drawGlass(radius: number, result: Result, animatedHaloOffset: number, theme: Theme): void {
    if (!this.context) return;
    this.context.rotate(-0.16);
    this.fillGlass(radius);
    this.strokeHalo(radius, result, animatedHaloOffset, theme);
    this.strokeGlass(radius);
    this.drawInclusions(radius);
  }

  private fillGlass(radius: number): void {
    if (!this.context) return;
    this.context.beginPath();
    drawGlassPath(this.context, this.glassReference, radius);
    this.context.closePath();
    this.context.fillStyle = GLASS_TINTS[this.glassReference];
    this.context.globalAlpha = 0.5;
    this.context.fill();
    this.context.globalAlpha = 1;
  }

  private strokeHalo(radius: number, result: Result, offset: number, theme: Theme): void {
    if (!this.context) return;
    this.context.save();
    this.context.translate(offset, offset * 0.35);
    this.context.shadowColor = theme.halo;
    this.context.shadowBlur = 22 * result.haloOpacity;
    this.context.lineWidth = Math.max(1, 8 * result.haloOpacity);
    this.context.strokeStyle = result.lineDirection === 'matched' ? 'rgba(255,255,255,0.32)' : theme.halo;
    this.context.setLineDash(result.lineDirection === 'matched' ? [10, 16] : []);
    this.context.beginPath();
    drawGlassPath(this.context, this.glassReference, radius);
    this.context.closePath();
    this.context.stroke();
    this.context.restore();
  }

  private strokeGlass(radius: number): void {
    if (!this.context) return;
    this.context.beginPath();
    drawGlassPath(this.context, this.glassReference, radius);
    this.context.closePath();
    this.context.lineWidth = 1.5;
    this.context.strokeStyle = 'rgba(255,255,255,0.34)';
    this.context.stroke();
    this.context.shadowBlur = 0;
  }

  private drawInclusions(radius: number): void {
    if (!this.context) return;
    this.context.beginPath();
    this.context.arc(-radius * 0.18, -radius * 0.08, radius * (this.glassReference === 'leadCrystal' ? 0.06 : 0.09), 0, Math.PI * 2);
    this.context.arc(radius * 0.26, radius * 0.12, radius * (this.glassReference === 'borosilicate' ? 0.035 : 0.055), 0, Math.PI * 2);
    if (this.glassReference === 'tempered') this.drawTemperedStressMarks(radius);
    this.context.fillStyle = 'rgba(255,255,255,0.28)';
    this.context.fill();
  }

  private drawTemperedStressMarks(radius: number): void { this.context?.rect(-radius * 0.5, -radius * 0.18, radius * 0.18, radius * 0.035); this.context?.rect(radius * 0.08, radius * 0.28, radius * 0.24, radius * 0.035); }

  private draw(result: Result, animatedHaloOffset = result.haloOffset): void {
    if (!this.canvas || !this.context) return;
    const theme = currentTheme();
    const width = this.canvas.width;
    const height = this.canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.36;
    this.drawBackground(centerX, centerY, radius, theme);
    this.context.save();
    this.clipScope(centerX, centerY, radius);
    this.drawGrain(width, height, theme.grain);
    this.context.translate(centerX, centerY);
    this.drawGlass(radius, result, animatedHaloOffset, theme);
    this.context.restore();
    this.drawScopeRing(centerX, centerY, radius);
    this.drawCanvasLabel(result, height, theme.text);
  }

  private drawBackground(centerX: number, centerY: number, radius: number, theme: Theme): void {
    if (!this.canvas || !this.context) return;
    const background = this.context.createRadialGradient(centerX, centerY, radius * 0.1, centerX, centerY, radius * 1.45);
    background.addColorStop(0, theme.center);
    background.addColorStop(1, theme.background);
    this.context.fillStyle = background;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private clipScope(centerX: number, centerY: number, radius: number): void { this.context?.beginPath(); this.context?.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2); this.context?.clip(); }

  private drawScopeRing(centerX: number, centerY: number, radius: number): void {
    if (!this.context) return;
    this.context.beginPath();
    this.context.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
    this.context.lineWidth = 12;
    this.context.strokeStyle = 'rgba(15, 23, 42, 0.18)';
    this.context.stroke();
  }

  private drawCanvasLabel(result: Result, height: number, textColor: string): void {
    if (!this.context) return;
    const focusLabel = this.focusDirection === 'raised' ? this.ui.focusRaised : this.ui.focusLowered;
    const label = result.lineDirection === 'matched' ? this.ui.canvasMatched : `${this.ui.canvasHalo}${this.ui.canvasFocusSeparator}${focusLabel}`;
    this.context.fillStyle = textColor;
    this.context.font = '600 24px system-ui, sans-serif';
    this.context.fillText(label, 28, height - 34);
  }

  private animateDraw(result: Result): void {
    cancelAnimationFrame(this.animationFrame);
    const startOffset = this.previousHaloOffset;
    const targetOffset = result.haloOffset * HALO_SCALE[this.glassReference];
    const startedAt = performance.now();
    const frame = (now: number): void => {
      const progress = Math.min(1, (now - startedAt) / 260);
      const offset = startOffset + ((targetOffset - startOffset) * (1 - Math.pow(1 - progress, 3)));
      this.draw(result, offset);
      if (progress < 1) this.animationFrame = requestAnimationFrame(frame);
      else this.previousHaloOffset = targetOffset;
    };
    this.animationFrame = requestAnimationFrame(frame);
  }
}
