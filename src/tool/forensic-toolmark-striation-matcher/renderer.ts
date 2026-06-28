import type { ToolmarkResult } from './logic';

export type UploadedSample = { image: HTMLImageElement; name: string };

export interface RenderState {
  result: ToolmarkResult;
  knownSample: UploadedSample | null;
  questionedSample: UploadedSample | null;
  splitPercent: number;
  zoomPercent: number;
  contrastPercent: number;
  brightnessPercent: number;
  gridEnabled: boolean;
  dark: boolean;
  reliefGraphLabel: string;
}

interface Size {
  width: number;
  height: number;
}

interface PanelConfig extends Size {
  x: number;
  known: boolean;
  sample: UploadedSample | null;
  state: RenderState;
}

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
}

interface DemoLineConfig {
  result: ToolmarkResult;
  index: number;
  lateral: number;
  dark: boolean;
}

const PANEL_COLORS: Record<string, string> = {
  knownDarkStart: '#17252d',
  knownDarkEnd: '#0d1a21',
  knownLightStart: '#d7e5e0',
  knownLightEnd: '#eef5f1',
  questionedDarkStart: '#241820',
  questionedDarkEnd: '#1a141c',
  questionedLightStart: '#eadad5',
  questionedLightEnd: '#f5ebe8',
};

function panelColor(known: boolean, dark: boolean, end = false): string {
  const subject = known ? 'known' : 'questioned';
  const theme = dark ? 'Dark' : 'Light';
  const side = end ? 'End' : 'Start';
  return PANEL_COLORS[`${subject}${theme}${side}`];
}

function roundRect(ctx: CanvasRenderingContext2D, rect: Rect): void {
  ctx.beginPath();
  ctx.moveTo(rect.x + rect.radius, rect.y);
  ctx.arcTo(rect.x + rect.width, rect.y, rect.x + rect.width, rect.y + rect.height, rect.radius);
  ctx.arcTo(rect.x + rect.width, rect.y + rect.height, rect.x, rect.y + rect.height, rect.radius);
  ctx.arcTo(rect.x, rect.y + rect.height, rect.x, rect.y, rect.radius);
  ctx.arcTo(rect.x, rect.y, rect.x + rect.width, rect.y, rect.radius);
  ctx.closePath();
}

function drawBench(ctx: CanvasRenderingContext2D, size: Size, dark: boolean): void {
  const gradient = ctx.createLinearGradient(0, 0, size.width, size.height);
  gradient.addColorStop(0, dark ? '#0c141a' : '#dfe9e6');
  gradient.addColorStop(0.48, dark ? '#13212a' : '#edf2ee');
  gradient.addColorStop(1, dark ? '#19141b' : '#eaded9');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size.width, size.height);
  drawGrain(ctx, size, dark);
}

function drawGrain(ctx: CanvasRenderingContext2D, size: Size, dark: boolean): void {
  for (let i = 0; i < 120; i += 1) {
    ctx.fillStyle = dark ? 'rgba(255,255,255,0.035)' : 'rgba(15,23,42,0.035)';
    ctx.fillRect((i * 79) % size.width, (i * 43) % size.height, 1.2, 1.2);
  }
}

function drawPanel(ctx: CanvasRenderingContext2D, config: PanelConfig): void {
  ctx.save();
  ctx.beginPath();
  ctx.rect(config.x, 0, config.width, config.height);
  ctx.clip();
  fillPanel(ctx, config);
  drawMetalSheen(ctx, config, config.state.dark);
  if (config.sample) drawUploadedSample(ctx, config);
  else drawDemoStriations(ctx, config);
  ctx.restore();
}

function fillPanel(ctx: CanvasRenderingContext2D, config: PanelConfig): void {
  const panel = ctx.createLinearGradient(config.x, 0, config.x + config.width, config.height);
  panel.addColorStop(0, panelColor(config.known, config.state.dark));
  panel.addColorStop(1, panelColor(config.known, config.state.dark, true));
  ctx.fillStyle = panel;
  ctx.fillRect(config.x, 0, config.width, config.height);
}

function drawMetalSheen(ctx: CanvasRenderingContext2D, config: PanelConfig, dark: boolean): void {
  for (let i = 0; i < 9; i += 1) {
    const y = 54 + i * 48;
    ctx.strokeStyle = dark ? 'rgba(255,255,255,0.035)' : 'rgba(255,255,255,0.34)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(config.x + 22, y);
    ctx.lineTo(config.x + config.width - 22, y + 18);
    ctx.stroke();
  }
}

function drawDemoStriations(ctx: CanvasRenderingContext2D, config: PanelConfig): void {
  const result = config.state.result;
  ctx.translate(config.x + config.width / 2, config.height * 0.44);
  ctx.rotate((config.known ? 0 : result.rotationDegrees) * Math.PI / 180);
  const lateral = config.known ? 0 : result.offsetMicrons * 0.55;
  for (let i = -22; i <= 22; i += 1) drawDemoLine(ctx, { result, index: i, lateral, dark: config.state.dark });
}

function drawDemoLine(ctx: CanvasRenderingContext2D, config: DemoLineConfig): void {
  const seed = config.result.relief[(config.index + 48) % config.result.relief.length];
  const px = (config.index * 18) + config.lateral;
  const depth = 72 + seed * 132;
  ctx.shadowColor = config.dark ? 'rgba(20,184,166,0.2)' : 'rgba(20,184,166,0.14)';
  ctx.shadowBlur = seed > 0.72 ? 10 : 0;
  ctx.strokeStyle = config.dark ? `rgba(226,232,240,${0.22 + seed * 0.52})` : `rgba(31,43,50,${0.24 + seed * 0.52})`;
  ctx.lineWidth = 1.8 + seed * 4.8;
  ctx.beginPath();
  ctx.moveTo(px, -depth);
  ctx.bezierCurveTo(px - 10 - seed * 8, -24, px + 12 + seed * 6, 32, px - 4, depth);
  ctx.stroke();
  ctx.shadowBlur = 0;
}

function drawUploadedSample(ctx: CanvasRenderingContext2D, config: PanelConfig): void {
  if (!config.sample) return;
  const image = config.sample.image;
  const baseScale = Math.max(config.width / image.width, config.height / image.height);
  const scale = baseScale * (config.state.zoomPercent / 100);
  const result = config.state.result;
  const dx = config.known ? 0 : result.offsetMicrons * 0.72;
  const dy = config.known ? 0 : result.offsetMicrons * 0.08;
  ctx.save();
  ctx.translate(config.x + config.width / 2 + dx, config.height / 2 + dy);
  ctx.rotate((config.known ? 0 : result.rotationDegrees) * Math.PI / 180);
  ctx.filter = `grayscale(100%) contrast(${config.state.contrastPercent}%) brightness(${config.state.brightnessPercent}%)`;
  ctx.drawImage(image, image.width * scale / -2, image.height * scale / -2, image.width * scale, image.height * scale);
  ctx.filter = 'none';
  ctx.globalCompositeOperation = 'overlay';
  ctx.fillStyle = 'rgba(20,184,166,0.12)';
  ctx.fillRect(-config.width, -config.height, config.width * 2, config.height * 2);
  ctx.globalCompositeOperation = 'source-over';
  ctx.restore();
}

function drawCorrespondenceBands(ctx: CanvasRenderingContext2D, state: RenderState, split: number, size: Size): void {
  if (state.result.correlation < 58) return;
  const alpha = state.result.correlation >= 82 ? 0.2 : 0.1;
  ctx.fillStyle = state.dark ? `rgba(20,184,166,${alpha})` : `rgba(13,148,136,${alpha})`;
  for (let i = 0; i < 5; i += 1) {
    const y = 118 + i * 58;
    ctx.fillRect(Math.max(28, split - 240), y, Math.min(480, size.width - 56), 18);
  }
}

function drawDivider(ctx: CanvasRenderingContext2D, split: number, height: number): void {
  ctx.shadowColor = 'rgba(245,158,11,0.65)';
  ctx.shadowBlur = 18;
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(split - 2, 0, 4, height);
  ctx.shadowBlur = 0;
}

function drawRelief(ctx: CanvasRenderingContext2D, state: RenderState, size: Size): void {
  const graphTop = size.height - 132;
  ctx.fillStyle = state.dark ? 'rgba(4,10,14,0.72)' : 'rgba(255,255,255,0.74)';
  roundRect(ctx, { x: 30, y: graphTop, width: size.width - 60, height: 92, radius: 16 });
  ctx.fill();
  drawReliefLine(ctx, state, graphTop, size.width);
}

function drawReliefLine(ctx: CanvasRenderingContext2D, state: RenderState, graphTop: number, width: number): void {
  ctx.beginPath();
  state.result.relief.forEach((value, index) => {
    const x = 42 + (index / (state.result.relief.length - 1)) * (width - 84);
    const y = graphTop + 74 - value * 62;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineWidth = 4.5;
  ctx.strokeStyle = '#14b8a6';
  ctx.stroke();
  ctx.fillStyle = state.dark ? '#e2e8f0' : '#1f2933';
  ctx.font = '800 18px system-ui, sans-serif';
  ctx.fillText(state.reliefGraphLabel, 44, graphTop + 28);
}

function drawReticle(ctx: CanvasRenderingContext2D, size: Size, dark: boolean): void {
  ctx.strokeStyle = dark ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.12)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(size.width / 2, size.height * 0.43, size.width * 0.47, size.height * 0.37, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(26, size.height * 0.43);
  ctx.lineTo(size.width - 26, size.height * 0.43);
  ctx.moveTo(size.width / 2, 28);
  ctx.lineTo(size.width / 2, size.height - 28);
  ctx.stroke();
}

export function renderToolmarkCanvas(canvas: HTMLCanvasElement, state: RenderState): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const size = { width: canvas.width, height: canvas.height };
  const split = size.width * (state.splitPercent / 100);
  ctx.clearRect(0, 0, size.width, size.height);
  drawBench(ctx, size, state.dark);
  drawPanel(ctx, { x: 0, width: split, height: size.height, known: true, sample: state.knownSample, state });
  drawPanel(ctx, { x: split, width: size.width - split, height: size.height, known: false, sample: state.questionedSample, state });
  if (!state.knownSample && !state.questionedSample) {
    drawCorrespondenceBands(ctx, state, split, size);
    drawRelief(ctx, state, size);
  }
  drawDivider(ctx, split, size.height);
  if (state.gridEnabled) drawReticle(ctx, size, state.dark);
}
