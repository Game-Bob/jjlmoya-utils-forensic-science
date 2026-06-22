export type VisualState = 'orbiting' | 'deforming' | 'disrupting' | 'ringFormed';

export interface ParticleState {
  moon: { x: number; y: number; orbitRadius: number; progress: number };
  visualState: VisualState;
}

const particles = Array.from({ length: 90 }, (_, index) => ({
  angle: index * 0.42,
  radiusOffset: (index % 9) - 4,
  speed: 0.006 + (index % 7) * 0.0012,
  life: 0,
}));

export function resizeParticleCanvas(canvas: HTMLCanvasElement): void {
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * scale));
  canvas.height = Math.max(1, Math.floor(rect.height * scale));
}

export function animateParticles(canvas: HTMLCanvasElement, getState: () => ParticleState): void {
  const context = canvas.getContext('2d');
  if (!context) return;
  context.clearRect(0, 0, canvas.width, canvas.height);
  const state = getState();
  if (state.moon.progress > 0.01) drawParticleFrame(canvas, context, state);
  window.requestAnimationFrame(() => animateParticles(canvas, getState));
}

function drawParticleFrame(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, state: ParticleState): void {
  const scaleX = canvas.width / 560;
  const scaleY = canvas.height / 560;
  particles.forEach((particle, index) => {
    const formed = state.visualState === 'ringFormed';
    particle.life = formed ? 1 : (particle.life + state.moon.progress * 0.018 + 0.004) % 1;
    particle.angle += particle.speed * (1 + state.moon.progress * 2.4);
    const release = formed ? 1 : Math.min(1, particle.life * 1.35);
    const angle = particle.angle + index;
    const ringX = 280 + Math.cos(angle) * (state.moon.orbitRadius + particle.radiusOffset * 3.2);
    const ringY = 280 + Math.sin(angle) * (state.moon.orbitRadius * 0.31 + particle.radiusOffset);
    drawParticle(context, {
      x: state.moon.x + (ringX - state.moon.x) * release,
      y: state.moon.y + (ringY - state.moon.y) * release,
      angle,
      frontSide: Math.sin(angle) > 0,
      scaleX,
      scaleY,
      progress: state.moon.progress,
      visualState: state.visualState,
    });
  });
}

function drawParticle(context: CanvasRenderingContext2D, point: { x: number; y: number; angle: number; frontSide: boolean; scaleX: number; scaleY: number; progress: number; visualState: VisualState }): void {
  const isDarkTheme = document.documentElement.classList.contains('theme-dark');
  let alpha = point.progress * 0.58;
  if (point.visualState === 'ringFormed') alpha = point.frontSide ? 0.72 : 0.26;
  context.strokeStyle = `rgba(${isDarkTheme ? '248, 214, 109' : '93, 70, 30'}, ${0.16 + alpha})`;
  context.lineCap = 'round';
  context.lineWidth = Math.max(1, (point.frontSide ? 1.65 : 0.9) * point.scaleX);
  context.beginPath();
  context.moveTo(point.x * point.scaleX, point.y * point.scaleY);
  context.lineTo((point.x + Math.cos(point.angle) * 6) * point.scaleX, (point.y + Math.sin(point.angle) * 3) * point.scaleY);
  context.stroke();
}
