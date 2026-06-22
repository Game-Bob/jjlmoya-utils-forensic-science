import type { Point3D } from './logic/LorenzEngine';

export interface RenderContext {
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;
  rx: number;
  ry: number;
}

export function getCssVariable(name: string, fallback: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

export function project(p: Point3D, rx: number, ry: number, dims: { w: number; h: number }): { x: number; y: number } {
  const scale = Math.min(dims.w, dims.h) * 0.0135;
  const cx = dims.w / 2;
  const cy = dims.h / 2;
  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);
  const px = p.x;
  const py = p.y;
  const pz = p.z - 25;
  const x1 = px * cosY - pz * sinY;
  const z1 = px * sinY + pz * cosY;
  const y2 = py * cosX - z1 * sinX;
  return {
    x: cx + x1 * scale,
    y: cy - y2 * scale,
  };
}

function drawGridLine(ctx: CanvasRenderingContext2D, p1: Point3D, p2: Point3D, opts: { rx: number; ry: number; w: number; h: number }) {
  const dist1 = Math.sqrt(p1.x * p1.x + p1.y * p1.y);
  const dist2 = Math.sqrt(p2.x * p2.x + p2.y * p2.y);
  const avgDist = (dist1 + dist2) / 2;
  const alpha = Math.max(0, 0.22 - avgDist / 120);
  if (alpha <= 0) return;
  ctx.strokeStyle = `rgba(100, 116, 139, ${alpha})`;
  ctx.beginPath();
  const pt1 = project(p1, opts.rx, opts.ry, opts);
  const pt2 = project(p2, opts.rx, opts.ry, opts);
  ctx.moveTo(pt1.x, pt1.y);
  ctx.lineTo(pt2.x, pt2.y);
  ctx.stroke();
}

export function drawGrid(config: RenderContext) {
  const step = 8;
  const limit = 40;
  const opts = { rx: config.rx, ry: config.ry, w: config.w, h: config.h };
  config.ctx.lineWidth = 1 * window.devicePixelRatio;
  for (let x = -limit; x <= limit; x += step) {
    for (let y = -limit; y < limit; y += step) {
      drawGridLine(config.ctx, { x, y, z: 0 }, { x, y: y + step, z: 0 }, opts);
    }
  }
  for (let y = -limit; y <= limit; y += step) {
    for (let x = -limit; x < limit; x += step) {
      drawGridLine(config.ctx, { x, y, z: 0 }, { x: x + step, y, z: 0 }, opts);
    }
  }
}

export function drawShadowPath(config: RenderContext, history: Point3D[]) {
  if (history.length < 2) return;
  const { ctx, w, h, rx, ry } = config;
  const dims = { w, h };
  ctx.strokeStyle = getCssVariable('--lorenz-shadow-color', 'rgba(0, 0, 0, 0.05)');
  ctx.lineWidth = 1.5 * window.devicePixelRatio;
  ctx.beginPath();
  const p0 = project({ x: history[0].x, y: history[0].y, z: 0 }, rx, ry, dims);
  ctx.moveTo(p0.x, p0.y);
  for (let i = 1; i < history.length; i++) {
    const p = project({ x: history[i].x, y: history[i].y, z: 0 }, rx, ry, dims);
    ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
}

export function drawPath(config: RenderContext, history: Point3D[], color: string) {
  if (history.length < 2) return;
  const { ctx, w, h, rx, ry } = config;
  const dims = { w, h };
  ctx.strokeStyle = color;
  ctx.beginPath();
  const p0 = project(history[0], rx, ry, dims);
  ctx.moveTo(p0.x, p0.y);
  for (let i = 1; i < history.length; i++) {
    const p = project(history[i], rx, ry, dims);
    ctx.lineTo(p.x, p.y);
  }
  ctx.stroke();
}

export function drawHead(config: RenderContext, p: Point3D, color: string) {
  const { ctx, w, h, rx, ry } = config;
  const pt = project(p, rx, ry, { w, h });
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(pt.x, pt.y, 5 * window.devicePixelRatio, 0, Math.PI * 2);
  ctx.fill();
}

export function drawAxes(config: RenderContext) {
  const { ctx, h, rx, ry } = config;
  const ox = 50 * window.devicePixelRatio;
  const oy = h - 50 * window.devicePixelRatio;
  const axisLen = 20 * window.devicePixelRatio;
  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);
  const projectVector = (vx: number, vy: number, vz: number) => {
    const x1 = vx * cosY - vz * sinY;
    const z1 = vx * sinY + vz * cosY;
    const y2 = vy * cosX - z1 * sinX;
    return { dx: x1 * axisLen, dy: -y2 * axisLen };
  };
  ctx.lineWidth = 1 * window.devicePixelRatio;
  ctx.font = `${Math.round(9 * window.devicePixelRatio)}px var(--lorenz-font-mono)`;
  const drawAxisLine = (ax: { dx: number; dy: number }, label: string, color: string) => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + ax.dx, oy + ax.dy);
    ctx.stroke();
    ctx.fillText(label, ox + ax.dx + 4, oy + ax.dy + 3);
  };
  drawAxisLine(projectVector(1, 0, 0), 'X', 'rgba(239, 68, 68, 0.4)');
  drawAxisLine(projectVector(0, 1, 0), 'Y', 'rgba(34, 197, 94, 0.4)');
  drawAxisLine(projectVector(0, 0, 1), 'Z', 'rgba(59, 130, 246, 0.4)');
}
