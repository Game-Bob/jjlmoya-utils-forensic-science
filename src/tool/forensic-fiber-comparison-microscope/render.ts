import type { FiberProfile, SpectrumPoint } from './logic';

export interface RenderTheme {
  field: string;
  fiberA: string;
  fiberB: string;
  glow: string;
  text: string;
  grid: string;
}

interface ScopeMetrics {
  width: number;
  height: number;
  radius: number;
  blur: number;
}

interface HalfRenderConfig {
  context: CanvasRenderingContext2D;
  profile: FiberProfile;
  theme: RenderTheme;
  metrics: ScopeMetrics;
  xOffset: number;
  angle: number;
  leftSide: boolean;
}

interface TextureStyle {
  alpha: number;
  stroke: string;
  step: number;
}

interface MicroscopeScene {
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  left: FiberProfile;
  right: FiberProfile;
  focus: number;
  polarizationDegrees: number;
}

interface TextureConfig {
  context: CanvasRenderingContext2D;
  width: number;
  y: number;
  profile: FiberProfile;
  texture: TextureStyle;
}

const DYE_COLORS: Record<string, string> = {
  'indigo reactive blue': '#1d5f84',
  'acid crimson': '#b91c4a',
  'disperse navy': '#243c8f',
  'acid violet': '#8b5cf6',
};

export function currentTheme(): RenderTheme {
  const dark = document.documentElement.classList.contains('theme-dark') || document.body.classList.contains('theme-dark');
  if (dark) return { field: '#10171c', fiberA: '#7dd3fc', fiberB: '#c4b5fd', glow: '#facc15', text: '#f8fafc', grid: 'rgba(255,255,255,0.12)' };
  return { field: '#f3f7ed', fiberA: '#1d5f84', fiberB: '#7c3aed', glow: '#b45309', text: '#17212b', grid: 'rgba(15,23,42,0.14)' };
}

export function dyeColor(profile: FiberProfile, fallback: string): string {
  return DYE_COLORS[profile.dyeFamily] ?? fallback;
}

export function drawMicroscopeScene(scene: MicroscopeScene): void {
  const { context, canvas, left, right, focus, polarizationDegrees } = scene;
  const theme = currentTheme();
  const metrics = scopeMetrics(canvas, focus);

  context.clearRect(0, 0, metrics.width, metrics.height);
  context.fillStyle = theme.field;
  context.fillRect(0, 0, metrics.width, metrics.height);
  context.save();
  context.beginPath();
  context.arc(metrics.width / 2, metrics.height / 2, metrics.radius, 0, Math.PI * 2);
  context.clip();
  drawHalf({ context, profile: left, theme, metrics, xOffset: 0, angle: polarizationDegrees, leftSide: true });
  drawHalf({ context, profile: right, theme, metrics, xOffset: metrics.width / 2, angle: polarizationDegrees, leftSide: false });
  drawReticle(context, metrics, theme);
  context.restore();
  context.lineWidth = 18;
  context.strokeStyle = 'rgba(12,18,24,0.72)';
  context.beginPath();
  context.arc(metrics.width / 2, metrics.height / 2, metrics.radius, 0, Math.PI * 2);
  context.stroke();
}

function scopeMetrics(canvas: HTMLCanvasElement, focus: number): ScopeMetrics {
  return {
    width: canvas.width,
    height: canvas.height,
    radius: Math.min(canvas.width, canvas.height) * 0.43,
    blur: Math.abs(focus - 62) / 8,
  };
}

function drawHalf(config: HalfRenderConfig): void {
  const { context, profile, theme, metrics, xOffset, angle, leftSide } = config;
  const brightness = 0.38 + Math.pow(Math.sin((angle * Math.PI) / 180), 2) * profile.birefringence * 9;
  const fiberColor = dyeColor(profile, leftSide ? theme.fiberA : theme.fiberB);
  const wave = fiberWave(profile.material);
  const texture = textureStyle(profile);
  const columnWidth = metrics.width / 2;

  context.save();
  context.translate(xOffset, 0);
  context.fillStyle = `${fiberColor}18`;
  context.fillRect(0, 0, columnWidth, metrics.height);
  context.filter = `blur(${metrics.blur.toFixed(1)}px)`;

  for (let i = 0; i < 7; i++) {
    drawFiberStroke({ context, profile, fiberColor, theme, texture, wave, brightness, y: fiberY(i, leftSide), width: columnWidth });
  }

  context.restore();
  context.globalAlpha = 1;
  context.filter = 'none';
  context.shadowBlur = 0;
}

function fiberWave(material: FiberProfile['material']): number {
  if (material === 'wool') return 74;
  if (material === 'cotton') return 48;
  return 30;
}

function textureStyle(profile: FiberProfile): TextureStyle {
  if (profile.material === 'wool') return { alpha: 0.38, stroke: 'rgba(255,255,255,0.62)', step: 22 };
  if (profile.material === 'cotton') return { alpha: 0.28, stroke: 'rgba(255,255,255,0.62)', step: 30 };
  return { alpha: 0.2, stroke: 'rgba(255,255,255,0.75)', step: 42 };
}

function fiberY(index: number, leftSide: boolean): number {
  return 95 + index * 58 + (leftSide ? index % 2 : (index + 1) % 2) * 18;
}

function drawFiberStroke(config: {
  context: CanvasRenderingContext2D;
  profile: FiberProfile;
  fiberColor: string;
  theme: RenderTheme;
  texture: TextureStyle;
  wave: number;
  brightness: number;
  y: number;
  width: number;
}): void {
  const { context, profile, fiberColor, theme, texture, wave, brightness, y, width } = config;
  context.beginPath();
  context.moveTo(-40, y);
  context.bezierCurveTo(width * 0.24, y - wave, width * 0.52, y + wave, width + 45, y + (profile.twist === 'S' ? -28 : 28));
  context.lineWidth = Math.max(4, profile.diameterMicrons / 2.7);
  context.strokeStyle = fiberColor;
  context.globalAlpha = Math.min(0.95, brightness + 0.035);
  context.shadowColor = theme.glow;
  context.shadowBlur = profile.natural ? 2 : 10 + brightness * 14;
  context.stroke();
  drawFiberTexture({ context, width, y, profile, texture });
}

function drawFiberTexture(config: TextureConfig): void {
  const { context, width, y, profile, texture } = config;
  context.save();
  context.globalAlpha = texture.alpha;
  context.strokeStyle = texture.stroke;
  context.lineWidth = 1;

  for (let x = 10; x < width; x += texture.step) {
    context.beginPath();
    if (profile.material === 'wool') {
      context.arc(x, y, 8, -0.9, 0.9);
    } else if (profile.material === 'cotton') {
      context.moveTo(x, y - 16);
      context.lineTo(x + (profile.twist === 'S' ? -12 : 12), y + 16);
    } else {
      context.moveTo(x, y - 10);
      context.lineTo(x + (profile.twist === 'S' ? -18 : 18), y + 10);
    }
    context.stroke();
  }

  context.restore();
}

function drawReticle(context: CanvasRenderingContext2D, metrics: ScopeMetrics, theme: RenderTheme): void {
  context.strokeStyle = theme.grid;
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(metrics.width / 2, metrics.height / 2 - metrics.radius);
  context.lineTo(metrics.width / 2, metrics.height / 2 + metrics.radius);
  context.moveTo(metrics.width / 2 - metrics.radius, metrics.height / 2);
  context.lineTo(metrics.width / 2 + metrics.radius, metrics.height / 2);
  context.stroke();
}

export function buildSpectrumChartMarkup(ui: Record<string, string>, left: FiberProfile, right: FiberProfile): string {
  const theme = currentTheme();
  const leftColor = dyeColor(left, theme.fiberA);
  const rightColor = dyeColor(right, theme.fiberB);
  const leftPath = pathFor(left.spectrum);
  const rightPath = pathFor(right.spectrum);
  const leftArea = areaFor(left.spectrum);
  const rightArea = areaFor(right.spectrum);
  const gridLines = [60, 110, 160, 210]
    .map((lineY) => `<line x1="54" y1="${lineY}" x2="688" y2="${lineY}"></line>`)
    .join('');

  return `${chartDefs(leftColor, rightColor)}
    <rect x="0" y="0" width="720" height="270" rx="8" fill="transparent"></rect>
    <g stroke="${theme.grid}" stroke-width="1">${gridLines}</g>
    ${chartLabels(ui.uvVisTitle, theme.text)}
    <path d="${leftArea}" fill="url(#fiber-left-area)"></path>
    <path d="${rightArea}" fill="url(#fiber-right-area)"></path>
    <path d="${leftPath}" fill="none" stroke="${leftColor}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="${rightPath}" fill="none" stroke="${rightColor}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="11 9"></path>
  `;
}

function chartDefs(leftColor: string, rightColor: string): string {
  return `
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
  `;
}

function chartLabels(title: string, textColor: string): string {
  return `
    <text x="54" y="34" fill="${textColor}" font-size="19" font-weight="850">${title}</text>
    <text x="54" y="246" fill="${textColor}" font-size="12" font-family="JetBrains Mono, ui-monospace, monospace">380 nm</text>
    <text x="638" y="246" fill="${textColor}" font-size="12" font-family="JetBrains Mono, ui-monospace, monospace">720 nm</text>
  `;
}

function pathFor(points: SpectrumPoint[]): string {
  return points
    .map((point, index) => {
      const x = 54 + ((point.wavelength - 380) / 340) * 634;
      const y = 222 - point.absorbance * 178;
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
}

function areaFor(points: SpectrumPoint[]): string {
  const first = points[0];
  const last = points[points.length - 1];
  if (!first || !last) return '';
  const firstX = 54 + ((first.wavelength - 380) / 340) * 634;
  const lastX = 54 + ((last.wavelength - 380) / 340) * 634;
  return `${pathFor(points)} L ${lastX.toFixed(1)} 222 L ${firstX.toFixed(1)} 222 Z`;
}
