import type { TimeOfDeathAlgorMortisUI } from './ui';
import type { AlgorMortisResult } from './logic';

export interface EvaluatedStatus {
  phaseLabel: string;
  badgeClass: string;
  gaugePercent: number;
}

export interface StatusEvaluationParams {
  result: AlgorMortisResult;
  ui: TimeOfDeathAlgorMortisUI;
  rectalTemp: number;
  ambientTemp: number;
  refTemp: number;
}

export function evaluateCoolingStatus(params: StatusEvaluationParams): EvaluatedStatus {
  const { result, ui, rectalTemp, ambientTemp, refTemp } = params;
  const totalSpan = Math.max(1, refTemp - ambientTemp);
  const dropped = Math.max(0, refTemp - rectalTemp);
  const gaugePercent = Math.min(100, Math.max(0, Math.round((dropped / totalSpan) * 100)));

  if (result.coolingPhase === 'hyperthermia') {
    return { phaseLabel: ui.phaseHyperthermia, badgeClass: 'badge-danger', gaugePercent: 0 };
  }
  if (result.coolingPhase === 'equilibrium') {
    return { phaseLabel: ui.phaseEquilibrium, badgeClass: 'badge-warning', gaugePercent: 100 };
  }
  if (result.coolingPhase === 'plateau') {
    return { phaseLabel: ui.phasePlateau, badgeClass: 'badge-info', gaugePercent };
  }
  return { phaseLabel: ui.phaseDescent, badgeClass: 'badge-success', gaugePercent };
}
