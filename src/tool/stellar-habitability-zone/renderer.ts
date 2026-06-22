export interface RenderState {
  cx: number;
  cy: number;
  runawayGreenhousePx: number;
  maximumGreenhousePx: number;
  planetDistPx: number;
  isTooHot: boolean;
  isTooCold: boolean;
  curMass: number;
  curLuminosity: number;
  curTemp: number;
  curDistanceAu: number;
}

interface BackgroundStar {
  x: number;
  y: number;
  size: number;
  speed: number;
  offset: number;
  baseOpacity: number;
}

interface CosmicDust {
  distanceFactor: number;
  angle: number;
  speed: number;
  size: number;
  opacity: number;
}

export class StellarHabitabilityRenderer {
  private canvas: HTMLCanvasElement;
  private canvasContainer: HTMLElement;
  private ctx: CanvasRenderingContext2D;
  private bgStars: BackgroundStar[];
  private dustParticles: CosmicDust[];
  private orbitAngle = 0;

  constructor(canvas: HTMLCanvasElement, canvasContainer: HTMLElement) {
    this.canvas = canvas;
    this.canvasContainer = canvasContainer;
    this.ctx = canvas.getContext('2d')!;

    this.bgStars = Array.from({ length: 45 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 0.6 + Math.random() * 0.9,
      speed: 0.001 + Math.random() * 0.003,
      offset: Math.random() * Math.PI * 2,
      baseOpacity: 0.2 + Math.random() * 0.5,
    }));

    this.dustParticles = Array.from({ length: 60 }, () => ({
      distanceFactor: 0.15 + Math.random() * 2.0,
      angle: Math.random() * Math.PI * 2,
      speed: 0.005 + Math.random() * 0.015,
      size: 0.4 + Math.random() * 0.8,
      opacity: 0.15 + Math.random() * 0.45,
    }));
  }

  public getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }

  public resize(): { w: number; h: number } {
    const dpr = window.devicePixelRatio || 1;
    const container = this.canvas.parentElement as HTMLElement;
    this.canvas.width = container.clientWidth * dpr;
    this.canvas.height = container.clientHeight * dpr;
    this.ctx.scale(dpr, dpr);
    return {
      w: container.clientWidth,
      h: container.clientHeight,
    };
  }

  public draw(state: RenderState, w: number, h: number) {
    this.ctx.clearRect(0, 0, w, h);
    this.drawBackground(w, h);
    this.drawStars(w, h);
    this.drawNebulae(w, h);
    this.drawHabitableZone(state);
    this.drawDust(state);
    this.drawOrbitLine(state);
    this.drawStar(state);
    this.drawPlanet(state);
  }

  private drawBackground(w: number, h: number) {
    this.ctx.fillStyle = '#050507';
    this.ctx.fillRect(0, 0, w, h);
  }

  private drawStars(w: number, h: number) {
    this.ctx.fillStyle = '#ffffff';
    this.bgStars.forEach(s => {
      const sx = s.x * w;
      const sy = s.y * h;
      const alpha = s.baseOpacity + Math.sin(Date.now() * s.speed + s.offset) * 0.25;
      this.ctx.globalAlpha = Math.max(0.1, Math.min(1.0, alpha));
      this.ctx.beginPath();
      this.ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1.0;
  }

  private drawNebulae(w: number, h: number) {
    const nebula1 = this.ctx.createRadialGradient(w * 0.25, h * 0.3, 0, w * 0.25, h * 0.3, 160);
    nebula1.addColorStop(0, 'rgba(139, 92, 246, 0.04)');
    nebula1.addColorStop(0.5, 'rgba(139, 92, 246, 0.01)');
    nebula1.addColorStop(1, 'rgba(139, 92, 246, 0)');
    this.ctx.fillStyle = nebula1;
    this.ctx.beginPath();
    this.ctx.arc(w * 0.25, h * 0.3, 160, 0, Math.PI * 2);
    this.ctx.fill();

    const nebula2 = this.ctx.createRadialGradient(w * 0.7, h * 0.65, 0, w * 0.7, h * 0.65, 200);
    nebula2.addColorStop(0, 'rgba(14, 165, 233, 0.03)');
    nebula2.addColorStop(0.5, 'rgba(14, 165, 233, 0.01)');
    nebula2.addColorStop(1, 'rgba(14, 165, 233, 0)');
    this.ctx.fillStyle = nebula2;
    this.ctx.beginPath();
    this.ctx.arc(w * 0.7, h * 0.65, 200, 0, Math.PI * 2);
    this.ctx.fill();
  }

  private drawHabitableZone(state: RenderState) {
    const fluctuation = Math.sin(Date.now() * 0.002) * 0.03;
    const runawayFluct = state.runawayGreenhousePx * (1 + fluctuation);
    const maxFluct = state.maximumGreenhousePx * (1 + fluctuation);

    const grad = this.ctx.createRadialGradient(state.cx, state.cy, runawayFluct, state.cx, state.cy, maxFluct);
    grad.addColorStop(0, 'rgba(16, 185, 129, 0.0)');
    grad.addColorStop(0.2, 'rgba(16, 185, 129, 0.12)');
    grad.addColorStop(0.5, 'rgba(16, 185, 129, 0.18)');
    grad.addColorStop(0.8, 'rgba(16, 185, 129, 0.12)');
    grad.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

    this.ctx.fillStyle = grad;
    this.ctx.beginPath();
    this.ctx.arc(state.cx, state.cy, maxFluct * 1.1, 0, Math.PI * 2);
    this.ctx.fill();
  }

  private drawDust(state: RenderState) {
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    const dustSpeedFactor = 0.5 / (Math.sqrt(state.curMass) || 1);
    this.dustParticles.forEach(p => {
      p.angle += p.speed * dustSpeedFactor;
      const pxFactor = p.distanceFactor * (state.runawayGreenhousePx + state.maximumGreenhousePx) * 0.5;
      const dx = state.cx + Math.cos(p.angle) * pxFactor;
      const dy = state.cy + Math.sin(p.angle) * pxFactor;
      this.ctx.globalAlpha = p.opacity * Math.min(1.0, state.curLuminosity);
      this.ctx.beginPath();
      this.ctx.arc(dx, dy, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1.0;
  }

  private drawOrbitLine(state: RenderState) {
    this.ctx.lineWidth = 1.0;
    if (state.isTooHot) {
      const warningFlash = Math.floor(Date.now() / 250) % 2 === 0;
      this.ctx.strokeStyle = warningFlash ? 'rgba(239, 68, 68, 0.8)' : 'rgba(239, 68, 68, 0.25)';
      this.ctx.setLineDash([2, 2]);
    } else if (state.isTooCold) {
      this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.45)';
      this.ctx.setLineDash([1, 4]);
    } else {
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      this.ctx.setLineDash([]);
    }

    this.ctx.beginPath();
    this.ctx.arc(state.cx, state.cy, state.planetDistPx, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
  }

  private getStellarColor(temp: number): string {
    if (temp >= 30000) return '#00bfff';
    if (temp >= 10000) return '#87cefa';
    if (temp >= 7500) return '#e0ffff';
    if (temp >= 6000) return '#fffacd';
    if (temp >= 5200) return '#ffff00';
    if (temp >= 3700) return '#ffa500';
    return '#ff4500';
  }

  private drawStar(state: RenderState) {
    const starColor = this.getStellarColor(state.curTemp);
    const baseRadius = Math.max(4, Math.min(24, 10 * Math.pow(state.curTemp / 5778, 0.5)));
    const pulseSpeed = 0.003 * state.curTemp;
    const pulseAmp = 0.06 * Math.min(2.5, Math.max(0.1, state.curLuminosity));
    const pulse = 1 + Math.sin(Date.now() * pulseSpeed) * pulseAmp;
    const starRadius = baseRadius * pulse;

    this.ctx.save();
    const starGrad = this.ctx.createRadialGradient(state.cx, state.cy, 0, state.cx, state.cy, starRadius * 2.5);
    starGrad.addColorStop(0, starColor);
    starGrad.addColorStop(0.3, starColor);
    starGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    this.ctx.fillStyle = starGrad;
    this.ctx.beginPath();
    this.ctx.arc(state.cx, state.cy, starRadius * 2.5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  private drawPlanet(state: RenderState) {
    const period = Math.sqrt(Math.pow(state.curDistanceAu, 3) / state.curMass) * 365.255;
    const speedFactor = 0.5;
    this.orbitAngle += (360 / (period || 1)) * speedFactor * (Math.PI / 180);

    const px = state.cx + Math.cos(this.orbitAngle) * state.planetDistPx;
    const py = state.cy + Math.sin(this.orbitAngle) * state.planetDistPx;

    this.ctx.save();
    if (state.isTooHot) {
      this.ctx.fillStyle = '#ef4444';
    } else if (state.isTooCold) {
      this.ctx.fillStyle = '#93c5fd';
      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor = '#3b82f6';
    } else {
      this.ctx.fillStyle = '#10b981';
    }

    this.ctx.strokeStyle = '#ffffff';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.arc(px, py, 4, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.restore();
  }
}
