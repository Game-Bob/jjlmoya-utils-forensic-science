export interface AlgorMortisInputs {
  rectalTemp: number;
  ambientTemp: number;
  bodyWeight: number;
  correctionFactor: number;
  measurementTime: string;
  unitSystem: 'metric' | 'imperial';
}

export interface CurvePoint {
  time: number;
  temp: number;
  upperTemp: number;
  lowerTemp: number;
}

export interface AlgorMortisResult {
  pmiHours: number;
  confidenceMarginHours: number;
  minPmiHours: number;
  maxPmiHours: number;
  timeOfDeathMin: string;
  timeOfDeathMax: string;
  timeOfDeathEstimated: string;
  coolingPhase: 'plateau' | 'descent' | 'equilibrium' | 'hyperthermia';
  coolingRate: number;
  glaisterPmiHours: number;
  curvePoints: CurvePoint[];
  rectalTempDisplay: number;
  ambientTempDisplay: number;
  refTempDisplay: number;
  coolingRateDisplay: number;
}

export const STANDARD_BODY_TEMP = 37.2;

export function celsiusToFahrenheit(c: number): number {
  return Number(((c * 9) / 5 + 32).toFixed(1));
}

export function fahrenheitToCelsius(f: number): number {
  return Number((((f - 32) * 5) / 9).toFixed(1));
}

export function kgToLb(kg: number): number {
  return Number((kg * 2.20462).toFixed(1));
}

export function lbToKg(lb: number): number {
  return Number((lb / 2.20462).toFixed(1));
}

export function computeHenssgeConstant(weightKg: number, factor: number): number {
  const safeWeight = Math.max(5, weightKg);
  const safeFactor = Math.max(0.2, factor);
  const rawK = 1.2815 / (Math.pow(safeWeight, 0.625) * safeFactor) - 0.0284;
  return Math.max(0.005, rawK);
}

export function computeHenssgeQuotient(rectalTemp: number, ambientTemp: number): number {
  const denominator = STANDARD_BODY_TEMP - ambientTemp;
  if (denominator <= 0.1) return 0;
  const quotient = (rectalTemp - ambientTemp) / denominator;
  return Math.min(1.0, Math.max(0.0, quotient));
}

function henssgeEquation(t: number, k: number): number {
  return 1.25 * Math.exp(-k * t) - 0.25 * Math.exp(-5 * k * t);
}

export function solveHenssgeTime(q: number, k: number): number {
  if (q >= 0.999) return 0;
  if (q <= 0.001) return 40;
  let low = 0;
  let high = 60;
  for (let i = 0; i < 40; i++) {
    const mid = (low + high) / 2;
    if (henssgeEquation(mid, k) > q) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return Number(((low + high) / 2).toFixed(2));
}

export function computeConfidenceMargin(pmiHours: number, factor: number): number {
  let baseMargin = 2.8;
  if (pmiHours > 20) {
    baseMargin = 4.5;
  } else if (pmiHours > 10) {
    baseMargin = 3.5;
  }
  const scaled = baseMargin * Math.sqrt(Math.max(0.5, factor));
  return Number(scaled.toFixed(1));
}

export function computeCoolingRate(t: number, k: number, ambientTemp: number): number {
  const delta = STANDARD_BODY_TEMP - ambientTemp;
  const derivative = 1.25 * k * Math.exp(-k * t) - 1.25 * k * Math.exp(-5 * k * t);
  return Number(Math.max(0, delta * derivative).toFixed(2));
}

export function computeGlaisterPmi(rectalTemp: number): number {
  if (rectalTemp >= STANDARD_BODY_TEMP) return 0;
  const diff = STANDARD_BODY_TEMP - rectalTemp;
  return Number(Math.max(0, diff / 0.83).toFixed(2));
}

export function calculateTimeWindow(measurementTime: string, pmiHours: number): string {
  const [hoursStr, minsStr] = measurementTime.split(':');
  const measDate = new Date();
  measDate.setHours(Number(hoursStr) || 12, Number(minsStr) || 0, 0, 0);
  const deathTimeMs = measDate.getTime() - pmiHours * 3600 * 1000;
  const deathDate = new Date(deathTimeMs);
  const hh = String(deathDate.getHours()).padStart(2, '0');
  const mm = String(deathDate.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

export function determineCoolingPhase(t: number, rectalTemp: number, ambientTemp: number): 'plateau' | 'descent' | 'equilibrium' | 'hyperthermia' {
  if (rectalTemp > STANDARD_BODY_TEMP) return 'hyperthermia';
  if (rectalTemp <= ambientTemp + 0.5) return 'equilibrium';
  if (t <= 2.5) return 'plateau';
  return 'descent';
}

export function generateCoolingCurve(k: number, ambientTemp: number, maxHours: number, isImperial: boolean): CurvePoint[] {
  const points: CurvePoint[] = [];
  const delta = STANDARD_BODY_TEMP - ambientTemp;
  const step = Math.max(0.5, maxHours / 50);
  for (let t = 0; t <= maxHours; t += step) {
    const q = henssgeEquation(t, k);
    let temp = Number((ambientTemp + delta * q).toFixed(2));
    let upperTemp = Number((ambientTemp + delta * henssgeEquation(Math.max(0, t - 1.5), k)).toFixed(2));
    let lowerTemp = Number((ambientTemp + delta * henssgeEquation(t + 1.5, k)).toFixed(2));
    if (isImperial) {
      temp = celsiusToFahrenheit(temp);
      upperTemp = celsiusToFahrenheit(upperTemp);
      lowerTemp = celsiusToFahrenheit(lowerTemp);
    }
    points.push({ time: Number(t.toFixed(1)), temp, upperTemp, lowerTemp });
  }
  return points;
}

export function calculateAlgorMortis(inputs: AlgorMortisInputs): AlgorMortisResult {
  const isImp = inputs.unitSystem === 'imperial';
  const cRectal = isImp ? fahrenheitToCelsius(inputs.rectalTemp) : inputs.rectalTemp;
  const cAmbient = isImp ? fahrenheitToCelsius(inputs.ambientTemp) : inputs.ambientTemp;
  const kgWeight = isImp ? lbToKg(inputs.bodyWeight) : inputs.bodyWeight;

  const k = computeHenssgeConstant(kgWeight, inputs.correctionFactor);
  const q = computeHenssgeQuotient(cRectal, cAmbient);
  const pmiHours = solveHenssgeTime(q, k);
  const confidenceMarginHours = computeConfidenceMargin(pmiHours, inputs.correctionFactor);
  const maxCurveTime = Math.max(24, Math.ceil(pmiHours + 8));
  const rateMetric = computeCoolingRate(pmiHours, k, cAmbient);

  return {
    pmiHours,
    confidenceMarginHours,
    minPmiHours: Math.max(0, Number((pmiHours - confidenceMarginHours).toFixed(2))),
    maxPmiHours: Number((pmiHours + confidenceMarginHours).toFixed(2)),
    timeOfDeathEstimated: calculateTimeWindow(inputs.measurementTime, pmiHours),
    timeOfDeathMin: calculateTimeWindow(inputs.measurementTime, pmiHours + confidenceMarginHours),
    timeOfDeathMax: calculateTimeWindow(inputs.measurementTime, Math.max(0, pmiHours - confidenceMarginHours)),
    coolingPhase: determineCoolingPhase(pmiHours, cRectal, cAmbient),
    coolingRate: rateMetric,
    glaisterPmiHours: computeGlaisterPmi(cRectal),
    curvePoints: generateCoolingCurve(k, cAmbient, maxCurveTime, isImp),
    rectalTempDisplay: inputs.rectalTemp,
    ambientTempDisplay: inputs.ambientTemp,
    refTempDisplay: isImp ? 98.9 : 37.2,
    coolingRateDisplay: isImp ? Number((rateMetric * 1.8).toFixed(2)) : rateMetric
  };
}
