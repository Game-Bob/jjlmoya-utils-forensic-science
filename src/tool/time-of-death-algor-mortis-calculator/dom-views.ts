import type { TimeOfDeathAlgorMortisUI } from './ui';
import type { AlgorMortisResult, AlgorMortisInputs, CurvePoint } from './logic';
import { evaluateCoolingStatus } from './evaluator';

export interface SvgRenderConfig {
  result: AlgorMortisResult;
  inputs: AlgorMortisInputs;
  ui: TimeOfDeathAlgorMortisUI;
}

interface PlotBounds {
  w: number;
  h: number;
  padLeft: number;
  padBottom: number;
  minTemp: number;
  maxTemp: number;
  maxTime: number;
}

export function formatDuration(decimalHours: number, ui: TimeOfDeathAlgorMortisUI): string {
  const h = Math.floor(decimalHours);
  const m = Math.round((decimalHours - h) * 60);
  if (m === 60) return `${h + 1} ${ui.hoursUnit}`;
  if (h === 0) return `${m} ${ui.minutesUnit}`;
  return `${h} ${ui.hoursUnit} ${m} ${ui.minutesUnit}`;
}

export function renderTelemetry(container: HTMLElement, result: AlgorMortisResult, inputs: AlgorMortisInputs, ui: TimeOfDeathAlgorMortisUI): void {
  const isImp = inputs.unitSystem === 'imperial';
  const tempUnit = isImp ? ui.fahrenheitUnit : ui.celsiusUnit;
  const rateUnit = isImp ? ui.fahrenheitPerHour : ui.celsiusPerHour;
  const status = evaluateCoolingStatus({ result, ui, rectalTemp: result.rectalTempDisplay, ambientTemp: result.ambientTempDisplay, refTemp: result.refTempDisplay });

  container.innerHTML = `
    <div class="sc-hero-card">
      <div class="sc-hero-header">
        <span class="sc-hero-title">${ui.estimatedPmiLabel}</span>
        <span class="sc-badge ${status.badgeClass}">${status.phaseLabel}</span>
      </div>
      <div class="sc-hero-val">${formatDuration(result.pmiHours, ui)}</div>
      <div class="sc-hero-sub">${ui.deathWindowLabel}: <strong>${result.timeOfDeathMin} - ${result.timeOfDeathMax}</strong> (${result.timeOfDeathEstimated} est.)</div>
      <div class="sc-gauge-wrap">
        <div class="sc-gauge-track">
          <div class="sc-gauge-bar ${status.badgeClass}" style="width: ${status.gaugePercent}%"></div>
        </div>
        <div class="sc-gauge-labels">
          <span>${result.refTempDisplay}${tempUnit} ${ui.referenceBodyTempLabel || ''}</span>
          <span>${result.ambientTempDisplay}${tempUnit} ${ui.baselineAmbientLabel || ''}</span>
        </div>
      </div>
    </div>
    <div class="sc-stats-grid">
      <div class="sc-stat-card"><span class="sc-stat-label">${ui.confidenceMarginLabel}</span><span class="sc-stat-val">± ${formatDuration(result.confidenceMarginHours, ui)}</span><span class="sc-stat-sub">${ui.confidenceMarginSub || '95%'}</span></div>
      <div class="sc-stat-card"><span class="sc-stat-label">${ui.coolingRateLabel}</span><span class="sc-stat-val">${result.coolingRateDisplay} ${rateUnit}</span><span class="sc-stat-sub">${ui.coolingRateSub || 'ΔT/h'}</span></div>
      <div class="sc-stat-card"><span class="sc-stat-label">${ui.glaisterEstimateLabel}</span><span class="sc-stat-val">${formatDuration(result.glaisterPmiHours, ui)}</span><span class="sc-stat-sub">${ui.glaisterEstimateSub || 'Glaister'}</span></div>
    </div>
  `;
}

function buildPathString(points: CurvePoint[], b: PlotBounds): string {
  const span = Math.max(1, b.maxTemp - b.minTemp);
  const plotW = b.w - b.padLeft - 30;
  const plotH = b.h - b.padBottom - 25;
  return points.reduce((acc, pt, i) => {
    const x = b.padLeft + (pt.time / b.maxTime) * plotW;
    const y = 25 + plotH - ((pt.temp - b.minTemp) / span) * plotH;
    return i === 0 ? `M ${x.toFixed(1)} ${y.toFixed(1)}` : `${acc} L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }, '');
}

function buildBandPolygon(points: CurvePoint[], b: PlotBounds): string {
  const span = Math.max(1, b.maxTemp - b.minTemp);
  const plotW = b.w - b.padLeft - 30;
  const plotH = b.h - b.padBottom - 25;
  const upper = points.map((pt) => `${(b.padLeft + (pt.time / b.maxTime) * plotW).toFixed(1)},${(25 + plotH - ((pt.upperTemp - b.minTemp) / span) * plotH).toFixed(1)}`);
  const lower = points.slice().reverse().map((pt) => `${(b.padLeft + (pt.time / b.maxTime) * plotW).toFixed(1)},${(25 + plotH - ((pt.lowerTemp - b.minTemp) / span) * plotH).toFixed(1)}`);
  return `${upper.join(' ')} ${lower.join(' ')}`;
}

function renderAxesAndGrid(b: PlotBounds, tempUnit: string): string {
  const plotW = b.w - b.padLeft - 30;
  const plotH = b.h - b.padBottom - 25;
  const span = Math.max(1, b.maxTemp - b.minTemp);

  const yVals = [b.maxTemp, b.minTemp + span * 0.66, b.minTemp + span * 0.33, b.minTemp];
  const yTicks = yVals.map((val) => {
    const y = 25 + plotH - ((val - b.minTemp) / span) * plotH;
    return `<line x1="${b.padLeft}" y1="${y}" x2="${b.w - 30}" y2="${y}" class="sc-chart-grid" /><text x="${b.padLeft - 10}" y="${y + 4}" text-anchor="end" class="sc-chart-axis-label">${Math.round(val)}${tempUnit}</text>`;
  });

  const xSteps = [0, b.maxTime * 0.25, b.maxTime * 0.5, b.maxTime * 0.75, b.maxTime].map((t) => {
    const x = b.padLeft + (t / b.maxTime) * plotW;
    return `<line x1="${x}" y1="25" x2="${x}" y2="${25 + plotH}" class="sc-chart-grid" /><text x="${x}" y="${b.h - 15}" text-anchor="middle" class="sc-chart-axis-label">${Math.round(t)}h</text>`;
  });

  return `${yTicks.join('')}${xSteps.join('')}<line x1="${b.padLeft}" y1="25" x2="${b.padLeft}" y2="${25 + plotH}" class="sc-chart-axis" /><line x1="${b.padLeft}" y1="${25 + plotH}" x2="${b.w - 30}" y2="${25 + plotH}" class="sc-chart-axis" />`;
}

function buildSvgContent(cfg: SvgRenderConfig, b: PlotBounds, tUnit: string): string {
  const { result, ui } = cfg;
  const plotW = b.w - b.padLeft - 30;
  const plotH = b.h - b.padBottom - 25;
  const span = Math.max(1, b.maxTemp - b.minTemp);
  const pathD = buildPathString(result.curvePoints, b);
  const bandPoly = buildBandPolygon(result.curvePoints, b);
  const ptX = b.padLeft + (result.pmiHours / b.maxTime) * plotW;
  const ptY = 25 + plotH - ((result.rectalTempDisplay - b.minTemp) / span) * plotH;
  const ambY = 25 + plotH - ((result.ambientTempDisplay - b.minTemp) / span) * plotH;
  const plateauW = (2.5 / boundsOrDefault(b.maxTime)) * plotW;

  return `
    <defs><linearGradient id="sc-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="var(--n-accent-cyan)" /><stop offset="100%" stop-color="var(--n-primary)" /></linearGradient></defs>
    ${renderAxesAndGrid(b, tUnit)}
    <rect x="${b.padLeft}" y="25" width="${plateauW}" height="${plotH}" class="sc-chart-plateau" />
    <polygon points="${bandPoly}" class="sc-chart-band" />
    <line x1="${b.padLeft}" y1="${ambY}" x2="${b.w - 30}" y2="${ambY}" class="sc-chart-amb" />
    <path d="${pathD}" class="sc-chart-line" />
    <circle cx="${ptX}" cy="${ptY}" r="9" class="sc-chart-pulse" />
    <circle cx="${ptX}" cy="${ptY}" r="5" class="sc-chart-core" />
    <text x="${b.padLeft + plateauW / 2}" y="45" text-anchor="middle" class="sc-chart-tag">${ui.chartPlateauMarker}</text>
    <text x="${b.w - 35}" y="${ambY - 8}" text-anchor="end" class="sc-chart-tag">${result.ambientTempDisplay}${tUnit} ${ui.ambientTempLabel}</text>
    <text x="${Math.min(b.w - 110, ptX + 14)}" y="${Math.max(45, ptY - 12)}" class="sc-chart-pt-label">${result.rectalTempDisplay}${tUnit} (${result.pmiHours.toFixed(1)}h)</text>
  `;
}

function boundsOrDefault(maxTime: number): number {
  return Math.max(1, maxTime);
}

export function renderSvgNomogram(svg: SVGSVGElement, cfg: SvgRenderConfig): void {
  const isImp = cfg.inputs.unitSystem === 'imperial';
  const bounds: PlotBounds = {
    w: 700,
    h: 340,
    padLeft: 70,
    padBottom: 45,
    minTemp: Math.min(cfg.result.ambientTempDisplay, cfg.result.rectalTempDisplay) - (isImp ? 4 : 2),
    maxTemp: cfg.result.refTempDisplay + (isImp ? 3 : 1.5),
    maxTime: Math.max(24, Math.ceil(cfg.result.pmiHours + 6))
  };
  svg.setAttribute('viewBox', `0 0 ${bounds.w} ${bounds.h}`);
  svg.innerHTML = buildSvgContent(cfg, bounds, isImp ? cfg.ui.fahrenheitUnit : cfg.ui.celsiusUnit);
}
