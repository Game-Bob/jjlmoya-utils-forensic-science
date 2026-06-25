export interface LimitInfo {
  min: number;
  max: number;
  step: number;
  formattedMin: string;
  formattedMax: string;
}

export function getLimitsForUnit(
  unit: 'metric' | 'imperial',
  config: { min: number; max: number; default: number }
): LimitInfo {
  const isImperial = unit === 'imperial';
  const min = isImperial ? config.min / 2.54 : config.min;
  const max = isImperial ? config.max / 2.54 : config.max;
  const step = isImperial ? 0.05 : 0.1;
  return {
    min,
    max,
    step,
    formattedMin: min.toFixed(2),
    formattedMax: max.toFixed(2)
  };
}

export function cmToFtIn(cm: number): string {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}' ${inches}" (${totalInches.toFixed(1)} in)`;
}

export function convertValueForUnit(val: number, unit: 'metric' | 'imperial'): number {
  if (unit === 'imperial') {
    return val / 2.54;
  }
  return val * 2.54;
}

export function applyLengthLimits(
  val: number,
  config: { min: number; max: number; default: number },
  unit: 'metric' | 'imperial'
): number {
  const min = unit === 'imperial' ? config.min / 2.54 : config.min;
  const max = unit === 'imperial' ? config.max / 2.54 : config.max;
  if (isNaN(val) || val < min || val > max) {
    return unit === 'imperial' ? config.default / 2.54 : config.default;
  }
  return val;
}
