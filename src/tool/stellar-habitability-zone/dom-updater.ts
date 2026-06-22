import type { SimulationResult } from './logic/StellarHabitabilityEngine';

export interface UpdateValTextsParams {
  temp: number;
  luminosity: number;
  mass: number;
  radius: number;
  distanceAu: number;
  albedo: number;
  greenhouse: number;
  isImperial: boolean;
  tempVal: HTMLElement | null;
  lumVal: HTMLElement | null;
  massVal: HTMLElement | null;
  radVal: HTMLElement | null;
  distVal: HTMLElement | null;
  albedoVal: HTMLElement | null;
  greenVal: HTMLElement | null;
}

export interface UpdateResultsParams {
  result: SimulationResult;
  isImperial: boolean;
  eqTempResult: HTMLElement | null;
  surfTempResult: HTMLElement | null;
  fluxResult: HTMLElement | null;
  periodResult: HTMLElement | null;
  velocityResult: HTMLElement | null;
  innerResult: HTMLElement | null;
  outerResult: HTMLElement | null;
}

function setText(el: HTMLElement | null, text: string) {
  if (el) {
    el.textContent = text;
  }
}

export function updateSliderFill(slider: HTMLInputElement | null) {
  if (!slider) return;
  const min = parseFloat(slider.min) || 0;
  const max = parseFloat(slider.max) || 100;
  const val = parseFloat(slider.value) || 0;
  const percentage = ((val - min) / (max - min)) * 100;
  slider.style.setProperty('--percent', `${percentage}%`);
  slider.style.background = `linear-gradient(to right, var(--hz-slider-active) 0%, var(--hz-slider-active) ${percentage}%, var(--hz-slider-track) ${percentage}%, var(--hz-slider-track) 100%)`;
}

export function updateValTexts(p: UpdateValTextsParams) {
  setText(p.tempVal, p.temp.toLocaleString());
  setText(p.lumVal, p.luminosity >= 100 || p.luminosity <= 0.01 ? p.luminosity.toExponential(2) : p.luminosity.toFixed(2));
  setText(p.massVal, p.mass.toFixed(2));
  setText(p.radVal, p.radius.toFixed(2));
  const dist = p.isImperial ? `${(p.distanceAu * 92.9558).toFixed(1)} Mmi` : `${p.distanceAu.toFixed(2)} AU`;
  setText(p.distVal, dist);
  setText(p.albedoVal, p.albedo.toFixed(2));
  setText(p.greenVal, p.greenhouse.toString());
}

export function updateResults(p: UpdateResultsParams) {
  const isImp = p.isImperial;
  const res = p.result;
  const eq = isImp 
    ? `${Math.round((res.equilibriumTemperature - 273.15) * 1.8 + 32)}°F` 
    : `${Math.round(res.equilibriumTemperature - 273.15)}°C (${Math.round(res.equilibriumTemperature)}K)`;
  setText(p.eqTempResult, eq);

  const surf = isImp 
    ? `${Math.round((res.surfaceTemperature - 273.15) * 1.8 + 32)}°F` 
    : `${Math.round(res.surfaceTemperature - 273.15)}°C (${Math.round(res.surfaceTemperature)}K)`;
  setText(p.surfTempResult, surf);

  setText(p.fluxResult, `${res.stellarFlux.toFixed(2)} S⊕`);

  const period = res.orbitalPeriod >= 365 
    ? `${(res.orbitalPeriod / 365.255).toFixed(1)} yr` 
    : `${Math.round(res.orbitalPeriod)} d`;
  setText(p.periodResult, period);

  const vel = isImp 
    ? `${Math.round(res.orbitalVelocity * 2236.936).toLocaleString()} mph` 
    : `${res.orbitalVelocity.toFixed(1)} km/s`;
  setText(p.velocityResult, vel);

  const inner = isImp 
    ? `${(res.hzLimits.runawayGreenhouse * 92.9558).toFixed(1)} Mmi` 
    : `${res.hzLimits.runawayGreenhouse.toFixed(2)} AU`;
  setText(p.innerResult, inner);

  const outer = isImp 
    ? `${(res.hzLimits.maximumGreenhouse * 92.9558).toFixed(1)} Mmi` 
    : `${res.hzLimits.maximumGreenhouse.toFixed(2)} AU`;
  setText(p.outerResult, outer);
}
