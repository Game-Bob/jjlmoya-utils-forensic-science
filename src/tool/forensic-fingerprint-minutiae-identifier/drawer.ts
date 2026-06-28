import type { FingerprintPattern, MinutiaMark } from './logic';

interface RidgeParams {
  x: number;
  nx: number;
  yBase: number;
  pattern: FingerprintPattern;
  i: number;
}

function getRidgeY(p: RidgeParams): number {
  let offset = 0;
  if (p.pattern === 'arch') {
    offset = -110 * Math.exp(-(p.nx * p.nx));
  } else if (p.pattern === 'loop') {
    offset = Math.sin(p.nx * Math.PI) * 68 * Math.exp(-Math.abs(p.i) / 12);
  } else if (p.pattern === 'whorl') {
    offset = Math.sin(Math.atan2(p.i, p.nx * 8) * 3 + Math.hypot(p.nx * 2.2, p.i / 4.8)) * 45;
  }
  return p.yBase + offset + Math.sin(p.x * 0.018 + p.i * 0.74) * 2.8;
}

export function drawPlaceholder(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  activePattern: FingerprintPattern,
  core: number
): void {
  const { width: w, height: h } = canvas;
  const style = getComputedStyle(canvas);
  context.fillStyle = style.getPropertyValue('--fp-paper').trim() || '#f8efe1';
  context.fillRect(0, 0, w, h);
  context.lineCap = 'round';
  context.lineWidth = 4.8;
  context.strokeStyle = style.getPropertyValue('--fp-ridge').trim() || '#253243';
  context.shadowColor = style.getPropertyValue('--fp-ridge-glow').trim() || 'rgba(37, 50, 67, 0.18)';
  context.shadowBlur = 5;

  for (let i = -15; i <= 15; i += 1) {
    context.beginPath();
    for (let x = 78; x <= w - 78; x += 9) {
      const nx = (x - w / 2 - core * 3) / 170;
      const y = getRidgeY({ x, nx, yBase: h / 2 + i * 17, pattern: activePattern, i });
      if (x === 78) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.stroke();
  }
  context.shadowBlur = 0;
}

export function drawUploadedImage(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  uploadedImage: HTMLImageElement
): { x: number; y: number; width: number; height: number } {
  const w = canvas.width;
  const h = canvas.height;
  const scale = Math.max(w / uploadedImage.naturalWidth, h / uploadedImage.naturalHeight);
  const drawWidth = uploadedImage.naturalWidth * scale;
  const drawHeight = uploadedImage.naturalHeight * scale;
  const x = (w - drawWidth) / 2;
  const y = (h - drawHeight) / 2;
  context.fillStyle = getComputedStyle(canvas).getPropertyValue('--fp-paper').trim() || '#f8efe1';
  context.fillRect(0, 0, w, h);
  context.drawImage(uploadedImage, x, y, drawWidth, drawHeight);
  return { x, y, width: drawWidth, height: drawHeight };
}

interface DrawMarkParams {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  mark: MinutiaMark;
  selectedMarkId: string;
  color: string;
  label: string;
}

export function drawMark(p: DrawMarkParams): void {
  const x = (p.mark.x / 100) * p.canvas.width;
  const y = (p.mark.y / 100) * p.canvas.height;
  p.context.fillStyle = p.color;
  p.context.strokeStyle = p.mark.id === p.selectedMarkId ? '#facc15' : '#ffffff';
  p.context.lineWidth = p.mark.id === p.selectedMarkId ? 7 : 4;
  p.context.beginPath();
  p.context.arc(x, y, 13, 0, Math.PI * 2);
  p.context.fill();
  p.context.stroke();
  p.context.fillStyle = '#ffffff';
  p.context.font = '900 16px system-ui';
  p.context.textAlign = 'center';
  p.context.textBaseline = 'middle';
  p.context.fillText(p.label, x, y);
}
