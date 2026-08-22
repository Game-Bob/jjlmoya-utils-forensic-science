import type { SpectrogramAnalysis } from './logic';
import type { SpectrogramView } from './storage';
import type { VoiceSpectrogramUI } from './ui';

export interface SpectrogramScene {
  first: SpectrogramAnalysis | null;
  second: SpectrogramAnalysis | null;
  active: 'a' | 'b' | null;
  progress: number;
  view: SpectrogramView;
}

interface Palette {
  background: string;
  grid: string;
  text: string;
  first: [number, number, number];
  second: [number, number, number];
  firstLine: string;
  secondLine: string;
  cursor: string;
}

interface CanvasLayout {
  width: number;
  height: number;
}

interface FormantStyle {
  color: string;
  flipped: boolean;
}

const plateCache = new WeakMap<SpectrogramAnalysis, { color: string; plate: HTMLCanvasElement }>();

function parseHex(value: string): [number, number, number] {
  const normalized = value.trim().replace('#', '');
  const full = normalized.length === 3 ? normalized.split('').map((part) => part + part).join('') : normalized;
  return [0, 2, 4].map((offset) => Number.parseInt(full.slice(offset, offset + 2), 16)) as [number, number, number];
}

function readPalette(root: HTMLElement): Palette {
  const style = getComputedStyle(root);
  const value = (name: string): string => style.getPropertyValue(name).trim();
  return {
    background: value('--n-va-canvas'),
    grid: value('--n-va-grid'),
    text: value('--n-va-muted'),
    first: parseHex(value('--n-va-a')),
    second: parseHex(value('--n-va-b')),
    firstLine: value('--n-va-a-line'),
    secondLine: value('--n-va-b-line'),
    cursor: value('--n-va-cursor')
  };
}

function buildPlate(analysis: SpectrogramAnalysis, color: [number, number, number]): HTMLCanvasElement {
  const plate = document.createElement('canvas');
  plate.width = analysis.frames.length;
  plate.height = analysis.frames[0]?.energy.length ?? 1;
  const context = plate.getContext('2d');
  if (!context) return plate;
  const image = context.createImageData(plate.width, plate.height);
  analysis.frames.forEach((frame, x) => frame.energy.forEach((energy, bin) => {
    const row = plate.height - 1 - bin;
    const offset = ((row * plate.width) + x) * 4;
    image.data[offset] = color[0];
    image.data[offset + 1] = color[1];
    image.data[offset + 2] = color[2];
    image.data[offset + 3] = Math.round(255 * Math.pow(energy, 1.25));
  }));
  context.putImageData(image, 0, 0);
  return plate;
}

function cachedPlate(analysis: SpectrogramAnalysis, color: [number, number, number]): HTMLCanvasElement {
  const colorKey = color.join(',');
  const cached = plateCache.get(analysis);
  if (cached?.color === colorKey) return cached.plate;
  const plate = buildPlate(analysis, color);
  plateCache.set(analysis, { color: colorKey, plate });
  return plate;
}

function drawPlate(context: CanvasRenderingContext2D, plate: HTMLCanvasElement, rect: DOMRect, flipped: boolean): void {
  context.save();
  if (flipped) {
    context.translate(0, (2 * rect.y) + rect.height);
    context.scale(1, -1);
  }
  context.drawImage(plate, rect.x, rect.y, rect.width, rect.height);
  context.restore();
}

function frequencyY(frequency: number, analysis: SpectrogramAnalysis, rect: DOMRect, flipped: boolean): number {
  const ratio = Math.min(1, frequency / analysis.ceilingHz);
  return flipped ? rect.y + (ratio * rect.height) : rect.y + rect.height - (ratio * rect.height);
}

function drawFormants(context: CanvasRenderingContext2D, analysis: SpectrogramAnalysis, rect: DOMRect, style: FormantStyle): void {
  context.save();
  context.strokeStyle = style.color;
  context.lineWidth = 1.5;
  context.globalAlpha = 0.86;
  for (let formant = 0; formant < 3; formant += 1) {
    context.beginPath();
    let drawing = false;
    analysis.frames.forEach((frame, index) => {
      const frequency = frame.formants?.[formant];
      if (!frequency) {
        drawing = false;
        return;
      }
      const x = rect.x + ((index / Math.max(1, analysis.frames.length - 1)) * rect.width);
      const y = frequencyY(frequency, analysis, rect, style.flipped);
      if (drawing) context.lineTo(x, y);
      else context.moveTo(x, y);
      drawing = true;
    });
    context.stroke();
  }
  context.restore();
}

function drawGrid(context: CanvasRenderingContext2D, width: number, height: number, palette: Palette): void {
  context.strokeStyle = palette.grid;
  context.lineWidth = 1;
  for (let index = 1; index < 8; index += 1) {
    const x = 58 + (((width - 82) / 8) * index);
    context.beginPath();
    context.moveTo(x, 24);
    context.lineTo(x, height - 30);
    context.stroke();
  }
  context.beginPath();
  context.moveTo(58, height / 2);
  context.lineTo(width - 24, height / 2);
  context.stroke();
}

function plateRects(width: number, height: number): [DOMRect, DOMRect] {
  const x = 58;
  const plotWidth = width - 82;
  const halfHeight = (height - 54) / 2;
  return [new DOMRect(x, 24, plotWidth, halfHeight), new DOMRect(x, 24 + halfHeight, plotWidth, halfHeight)];
}

function drawLabels(context: CanvasRenderingContext2D, layout: CanvasLayout, ui: VoiceSpectrogramUI, palette: Palette): void {
  context.fillStyle = palette.text;
  context.font = '12px sans-serif';
  context.fillText(ui.sampleALabel, 12, 42);
  context.fillText(ui.sampleBLabel, 12, layout.height - 38);
  context.textAlign = 'center';
  context.fillText(ui.timeAxisLabel, layout.width / 2, layout.height - 8);
  context.save();
  context.translate(14, layout.height / 2);
  context.rotate(-Math.PI / 2);
  context.fillText(ui.frequencyAxisLabel, 0, 0);
  context.restore();
  context.textAlign = 'left';
}

function drawCursor(context: CanvasRenderingContext2D, scene: SpectrogramScene, layout: CanvasLayout, palette: Palette): void {
  if (!scene.active) return;
  const x = 58 + ((layout.width - 82) * scene.progress);
  context.strokeStyle = palette.cursor;
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(x, 20);
  context.lineTo(x, layout.height - 28);
  context.stroke();
  context.fillStyle = palette.cursor;
  context.beginPath();
  context.arc(x, layout.height / 2, 4, 0, Math.PI * 2);
  context.fill();
}

export function renderSpectrogram(root: HTMLElement, canvas: HTMLCanvasElement, scene: SpectrogramScene, ui: VoiceSpectrogramUI): void {
  const ratio = Math.min(2, window.devicePixelRatio || 1);
  const width = Math.max(320, canvas.clientWidth);
  const height = Math.max(360, canvas.clientHeight);
  const layout = { width, height };
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  const context = canvas.getContext('2d');
  if (!context) return;
  context.scale(ratio, ratio);
  const palette = readPalette(root);
  context.fillStyle = palette.background;
  context.fillRect(0, 0, width, height);
  drawGrid(context, width, height, palette);
  const [firstRect, secondRect] = plateRects(width, height);
  const secondFlipped = scene.view === 'mirror';
  if (scene.first) {
    drawPlate(context, cachedPlate(scene.first, palette.first), firstRect, false);
    drawFormants(context, scene.first, firstRect, { color: palette.firstLine, flipped: false });
  }
  if (scene.second) {
    drawPlate(context, cachedPlate(scene.second, palette.second), secondRect, secondFlipped);
    drawFormants(context, scene.second, secondRect, { color: palette.secondLine, flipped: secondFlipped });
  }
  drawLabels(context, layout, ui, palette);
  drawCursor(context, scene, layout, palette);
}
