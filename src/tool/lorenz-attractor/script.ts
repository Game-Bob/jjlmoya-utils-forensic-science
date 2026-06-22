import { LorenzEngine } from './logic/LorenzEngine';
import type { Point3D, LorenzParams } from './logic/LorenzEngine';
import {
  getCssVariable,
  drawGrid,
  drawShadowPath,
  drawPath,
  drawHead,
  drawAxes,
} from './renderer';

const canvas = document.getElementById('lorenzCanvas') as HTMLCanvasElement;
const ctx = canvas?.getContext('2d');
const chartCanvas = document.getElementById('chartCanvas') as HTMLCanvasElement;
const chartCtx = chartCanvas?.getContext('2d');

const getEl = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const slideSigma = getEl<HTMLInputElement>('slideSigma');
const slideRho = getEl<HTMLInputElement>('slideRho');
const slideBeta = getEl<HTMLInputElement>('slideBeta');
const slideDt = getEl<HTMLInputElement>('slideDt');
const slidePerturb = getEl<HTMLInputElement>('slidePerturb');

const valSigma = getEl('valSigma');
const valRho = getEl('valRho');
const valBeta = getEl('valBeta');
const valDt = getEl('valDt');
const valPerturb = getEl('valPerturb');

const btnPlayPause = getEl<HTMLButtonElement>('btnPlayPause');
const btnReset = getEl<HTMLButtonElement>('btnReset');
const btnClear = getEl<HTMLButtonElement>('btnClear');

const statT1 = getEl('statT1');
const statT2 = getEl('statT2');
const statDist = getEl('statDist');
const statDelta = getEl('statDelta');

let isRunning = true;
let t1: Point3D = { x: 10.0, y: 10.0, z: 10.0 };
let t2: Point3D = { x: 10.0001, y: 10.0, z: 10.0 };
let t1History: Point3D[] = [];
let t2History: Point3D[] = [];
let distanceHistory: number[] = [];
let lastDistance = 0.0001;

const maxHistory = 1000;
let rx = 0.6;
let ry = 0.45;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

function getParams(): LorenzParams {
  return {
    sigma: parseFloat(slideSigma.value),
    rho: parseFloat(slideRho.value),
    beta: parseFloat(slideBeta.value),
  };
}

function getDt(): number {
  return parseFloat(slideDt.value);
}

function getPerturbation(): number {
  return parseFloat(slidePerturb.value);
}

function updateDisplays() {
  if (valSigma) valSigma.textContent = parseFloat(slideSigma.value).toFixed(1);
  if (valRho) valRho.textContent = parseFloat(slideRho.value).toFixed(1);
  if (valBeta) valBeta.textContent = parseFloat(slideBeta.value).toFixed(2);
  if (valDt) valDt.textContent = parseFloat(slideDt.value).toFixed(3);
  if (valPerturb) valPerturb.textContent = parseFloat(slidePerturb.value).toFixed(5);
}

function resetToDefaults() {
  slideSigma.value = '10.0';
  slideRho.value = '28.0';
  slideBeta.value = '2.67';
  slideDt.value = '0.005';
  slidePerturb.value = '0.00010';
  updateDisplays();
  clearPaths();
}

function clearPaths() {
  const perturbation = getPerturbation();
  t1 = { x: 10.0, y: 10.0, z: 10.0 };
  t2 = { x: 10.0 + perturbation, y: 10.0, z: 10.0 };
  t1History = [];
  t2History = [];
  distanceHistory = [];
  lastDistance = perturbation;
}

function resize(c: HTMLCanvasElement | null, h: number) {
  if (!c || !c.parentElement) return;
  const rect = c.parentElement.getBoundingClientRect();
  c.width = rect.width * window.devicePixelRatio;
  c.height = h * window.devicePixelRatio;
  c.style.width = '100%';
  c.style.height = `${h}px`;
}

function resizeAll() {
  if (canvas && canvas.parentElement) {
    resize(canvas, canvas.parentElement.getBoundingClientRect().height);
  }
  const isMobile = window.innerWidth <= 991;
  resize(chartCanvas, isMobile ? 56 : 60);
}

function drawAttractor() {
  if (!canvas || !ctx) return;
  const config = { ctx, w: canvas.width, h: canvas.height, rx, ry };
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(config);
  drawShadowPath(config, t1History);
  drawShadowPath(config, t2History);
  ctx.lineWidth = 1.8 * window.devicePixelRatio;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const t1Color = getCssVariable('--lorenz-t1', '#00f0ff');
  const t2Color = getCssVariable('--lorenz-t2', '#ff007f');
  drawPath(config, t1History, t1Color);
  drawPath(config, t2History, t2Color);
  ctx.shadowBlur = 8 * window.devicePixelRatio;
  ctx.shadowColor = t1Color;
  drawHead(config, t1, t1Color);
  ctx.shadowColor = t2Color;
  drawHead(config, t2, t2Color);
  ctx.shadowBlur = 0;
  drawAxes(config);
}

function drawChartBaseline(w: number, h: number) {
  if (!chartCtx) return;
  chartCtx.strokeStyle = getCssVariable('--lorenz-border', 'rgba(255,255,255,0.06)');
  chartCtx.lineWidth = 1 * window.devicePixelRatio;
  chartCtx.setLineDash([4 * window.devicePixelRatio, 4 * window.devicePixelRatio]);
  chartCtx.beginPath();
  chartCtx.moveTo(0, h - 4);
  chartCtx.lineTo(w, h - 4);
  chartCtx.stroke();
  chartCtx.setLineDash([]);
}

function getMaxDistance(): number {
  let maxDist = 0.01;
  for (let i = 0; i < distanceHistory.length; i++) {
    if (distanceHistory[i] > maxDist) {
      maxDist = distanceHistory[i];
    }
  }
  return maxDist;
}

function drawChartPath(w: number, h: number, maxDist: number, stepX: number) {
  if (!chartCtx) return;
  chartCtx.strokeStyle = getCssVariable('--lorenz-accent', '#a78bfa');
  chartCtx.lineWidth = 1.5 * window.devicePixelRatio;
  chartCtx.beginPath();
  chartCtx.moveTo(0, h - (distanceHistory[0] / maxDist) * (h - 10));
  for (let i = 1; i < distanceHistory.length; i++) {
    chartCtx.lineTo(i * stepX, h - (distanceHistory[i] / maxDist) * (h - 10));
  }
  chartCtx.stroke();
}

function fillChartArea(w: number, h: number) {
  if (!chartCtx) return;
  chartCtx.lineTo(w, h);
  chartCtx.lineTo(0, h);
  chartCtx.closePath();
  const gradient = chartCtx.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, `rgba(167, 139, 250, 0.12)`);
  gradient.addColorStop(1, `rgba(167, 139, 250, 0.0)`);
  chartCtx.fillStyle = gradient;
  chartCtx.fill();
}

function drawChart() {
  if (!chartCanvas || !chartCtx) return;
  const w = chartCanvas.width;
  const h = chartCanvas.height;
  chartCtx.clearRect(0, 0, w, h);
  drawChartBaseline(w, h);
  if (distanceHistory.length < 2) return;
  const maxDist = getMaxDistance();
  const stepX = w / (maxHistory - 1);
  drawChartPath(w, h, maxDist, stepX);
  fillChartArea(w, h);
}

function updatePhysics(params: LorenzParams, dt: number): number {
  let currentDist = lastDistance;
  for (let steps = 0; steps < 4; steps++) {
    t1 = LorenzEngine.nextPoint(t1, params, dt);
    t2 = LorenzEngine.nextPoint(t2, params, dt);
    t1History.push({ ...t1 });
    t2History.push({ ...t2 });
    currentDist = LorenzEngine.getDistance(t1, t2);
    distanceHistory.push(currentDist);
    if (t1History.length > maxHistory) {
      t1History.shift();
      t2History.shift();
      distanceHistory.shift();
    }
  }
  return currentDist;
}

function updateUIStats(currentDist: number, diff: number) {
  if (statT1) statT1.textContent = `X:${t1.x.toFixed(1)} Y:${t1.y.toFixed(1)} Z:${t1.z.toFixed(1)}`;
  if (statT2) statT2.textContent = `X:${t2.x.toFixed(1)} Y:${t2.y.toFixed(1)} Z:${t2.z.toFixed(1)}`;
  if (statDist) statDist.textContent = currentDist.toFixed(4);
  if (statDelta) {
    if (Math.abs(diff) < 0.0001) {
      statDelta.textContent = '--';
    } else if (diff > 0) {
      statDelta.textContent = `▲ +${diff.toFixed(4)}`;
    } else {
      statDelta.textContent = `▼ ${diff.toFixed(4)}`;
    }
  }
}

function loop() {
  if (isRunning) {
    const params = getParams();
    const dt = getDt();
    const currentDist = updatePhysics(params, dt);
    const diff = currentDist - lastDistance;
    lastDistance = currentDist;
    updateUIStats(currentDist, diff);
  }
  drawAttractor();
  drawChart();
  requestAnimationFrame(loop);
}

canvas.addEventListener('pointerdown', (e) => {
  isDragging = true;
  previousMousePosition = { x: e.clientX, y: e.clientY };
  canvas.setPointerCapture(e.pointerId);
});

window.addEventListener('pointerup', () => {
  isDragging = false;
});

window.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  ry += (e.clientX - previousMousePosition.x) * 0.01;
  rx += (e.clientY - previousMousePosition.y) * 0.01;
  previousMousePosition = { x: e.clientX, y: e.clientY };
});

slideSigma.addEventListener('input', () => { updateDisplays(); clearPaths(); });
slideRho.addEventListener('input', () => { updateDisplays(); clearPaths(); });
slideBeta.addEventListener('input', () => { updateDisplays(); clearPaths(); });
slideDt.addEventListener('input', () => { updateDisplays(); clearPaths(); });
slidePerturb.addEventListener('input', () => { updateDisplays(); clearPaths(); });

btnPlayPause.addEventListener('click', () => {
  isRunning = !isRunning;
  btnPlayPause.textContent = isRunning ? (btnPlayPause.dataset.pause || 'Pause') : (btnPlayPause.dataset.play || 'Resume');
  btnPlayPause.className = isRunning ? 'lorenz-btn lorenz-btn-active-state' : 'lorenz-btn';
});

btnReset.addEventListener('click', resetToDefaults);
btnClear.addEventListener('click', clearPaths);

window.addEventListener('resize', resizeAll);

btnPlayPause.dataset.pause = btnPlayPause.textContent || 'Pause';
btnPlayPause.dataset.play = 'Resume';

resizeAll();
updateDisplays();
clearPaths();
loop();
