import type { FirePoint, FireVector } from './logic';

export const WIDTH = 1000;
export const HEIGHT = 680;
export const TRANSITION_MS = 300;

interface HeatmapFrame {
  point: FirePoint;
  radius: number;
  confidence: number;
  intersections: FirePoint[];
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function lerp(start: number, end: number, progress: number): number {
  return start + (end - start) * progress;
}

export function ease(progress: number): number {
  return 1 - Math.pow(1 - progress, 3);
}

export function pointFromPointer(svg: SVGSVGElement, event: PointerEvent): FirePoint {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const matrix = svg.getScreenCTM();
  if (!matrix) return { x: 50, y: 50 };
  const local = point.matrixTransform(matrix.inverse());
  return { x: clamp((local.x / WIDTH) * 100, 0, 100), y: clamp((local.y / HEIGHT) * 100, 0, 100) };
}

export function toCanvas(point: FirePoint): FirePoint {
  return { x: (point.x / 100) * WIDTH, y: (point.y / 100) * HEIGHT };
}

export function snapPoint(start: FirePoint, point: FirePoint): FirePoint {
  const dx = point.x - start.x;
  const dy = point.y - start.y;
  const angle = Math.atan2(dy, dx);
  const distance = Math.hypot(dx, dy);
  const snappedAngle = Math.round(angle / (Math.PI / 12)) * (Math.PI / 12);

  return {
    x: clamp(start.x + Math.cos(snappedAngle) * distance, 0, 100),
    y: clamp(start.y + Math.sin(snappedAngle) * distance, 0, 100),
  };
}

export function patternColor(pattern: FireVector['pattern']): string {
  switch (pattern) {
    case 'deepChar':
      return '#5b524c';
    case 'sootShadow':
      return '#35516b';
    case 'cleanBurn':
      return '#d17d10';
    default:
      return '#b12618';
  }
}

function drawArrowHead(
  ctx: CanvasRenderingContext2D,
  point: FirePoint,
  angle: number,
  color: string,
): void {
  ctx.save();
  ctx.translate(point.x, point.y);
  ctx.rotate(angle);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-18, -10);
  ctx.lineTo(-12, 0);
  ctx.lineTo(-18, 10);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export function drawVector(ctx: CanvasRenderingContext2D, vector: FireVector, alpha = 1): void {
  const start = toCanvas(vector.start);
  const end = toCanvas(vector.end);
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.hypot(dx, dy) || 1;
  const nx = -dy / length;
  const ny = dx / length;
  const bend = clamp(length * 0.12, 20, 46);
  const c1 = { x: lerp(start.x, end.x, 0.35) + nx * bend, y: lerp(start.y, end.y, 0.35) + ny * bend };
  const c2 = { x: lerp(start.x, end.x, 0.78) - nx * bend * 0.66, y: lerp(start.y, end.y, 0.78) - ny * bend * 0.66 };
  const color = patternColor(vector.pattern);

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = color;
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowBlur = 12;
  ctx.shadowColor = `${color}66`;
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, end.x, end.y);
  ctx.stroke();
  drawArrowHead(ctx, end, Math.atan2(end.y - c2.y, end.x - c2.x), color);
  ctx.restore();
}

function drawIntersections(ctx: CanvasRenderingContext2D, intersections: FirePoint[]): void {
  intersections.forEach((intersection) => {
    const dot = toCanvas(intersection);
    ctx.save();
    ctx.fillStyle = 'rgba(29, 50, 74, 0.9)';
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 3.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

export function drawHeatmap(ctx: CanvasRenderingContext2D, frame: HeatmapFrame, now: number): void {
  const center = toCanvas(frame.point);
  const pulse = 1 + Math.sin(now / 240) * (0.03 + frame.confidence / 5000);
  const rx = (frame.radius / 100) * WIDTH * pulse;
  const ry = rx * 0.76;

  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  ctx.filter = `blur(${Math.max(18, rx * 0.12).toFixed(1)}px)`;
  const gradient = ctx.createRadialGradient(center.x, center.y, rx * 0.06, center.x, center.y, rx);
  gradient.addColorStop(0, `rgba(255, 236, 210, ${0.32 + frame.confidence / 420})`);
  gradient.addColorStop(0.36, `rgba(255, 138, 61, ${0.22 + frame.confidence / 800})`);
  gradient.addColorStop(1, 'rgba(177, 38, 24, 0)');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.ellipse(center.x, center.y, rx, ry, Math.sin(now / 520) * 0.14, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  drawIntersections(ctx, frame.intersections);
}

export function drawOriginMarker(ctx: CanvasRenderingContext2D, point: FirePoint): void {
  const dot = toCanvas(point);
  ctx.save();
  ctx.fillStyle = '#161e28';
  ctx.strokeStyle = '#fff7ed';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(dot.x, dot.y, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}
