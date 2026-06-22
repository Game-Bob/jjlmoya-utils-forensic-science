export interface FermiInputs {
  starFormationRate: number;
  habitableFraction: number;
  lifeFraction: number;
  intelligenceFraction: number;
  technologyFraction: number;
  signalLifetime: number;
  filterSeverity: number;
  horizonYears: number;
}

export interface FermiPoint {
  year: number;
  detectable: number;
  births: number;
  losses: number;
}

export interface FermiResult {
  drakeRate: number;
  peakCivilizations: number;
  finalCivilizations: number;
  totalBirths: number;
  totalLosses: number;
  silenceScore: number;
  verdict: string;
  detail: string;
  series: FermiPoint[];
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function drakeRate(inputs: FermiInputs) {
  return (
    inputs.starFormationRate *
    inputs.habitableFraction *
    inputs.lifeFraction *
    inputs.intelligenceFraction *
    inputs.technologyFraction
  );
}

function verdictFor(finalCivilizations: number) {
  if (finalCivilizations > 10000) {
    return {
      verdict: 'Loud galaxy',
      detail: 'The model produces many overlapping technological societies. If the sky still looks silent, something outside these parameters must be hiding them.',
    };
  }

  if (finalCivilizations > 1000) {
    return {
      verdict: 'Crowded but quiet',
      detail: 'Civilizations should often coexist, but limited signal lifetimes and detection geometry can still make the galaxy feel empty.',
    };
  }

  if (finalCivilizations < 1) {
    return {
      verdict: 'Great Filter dominant',
      detail: 'The filters are severe enough that detectable societies rarely share the same epoch.',
    };
  }

  return {
    verdict: 'Sparse galaxy',
    detail: 'Your assumptions create only a thin scattering of detectable societies, so radio silence is not surprising.',
  };
}

function seriesPoint(year: number, detectable: number, births: number, losses: number): FermiPoint {
  return { year, detectable, births, losses };
}

function makeSeries(inputs: FermiInputs, rate: number) {
  const horizonYears = clamp(inputs.horizonYears, 1000, 1000000);
  const signalLifetime = clamp(inputs.signalLifetime, 100, 1000000);
  const filterSeverity = clamp(inputs.filterSeverity, 0, 0.98);
  const steps = 80;
  const stepYears = horizonYears / steps;
  const annualExtinctionRisk = -Math.log(clamp(1 - filterSeverity, 0.001, 1)) / signalLifetime;
  const survivalPerStep = Math.exp(-annualExtinctionRisk * stepYears);

  let active = 0;
  let totalBirths = 0;
  let totalLosses = 0;
  let peakCivilizations = 0;
  const series: FermiPoint[] = [];

  for (let step = 0; step <= steps; step += 1) {
    const year = Math.round(step * stepYears);
    const galacticMaturity = 1 - Math.exp(-year / (horizonYears * 0.28));
    const births = rate * stepYears * galacticMaturity;
    const losses = active * (1 - survivalPerStep);
    active = Math.max(0, active + births - losses);
    totalBirths += births;
    totalLosses += losses;
    peakCivilizations = Math.max(peakCivilizations, active);

    series.push(seriesPoint(year, active, births, losses));
  }

  return { active, horizonYears, signalLifetime, totalBirths, totalLosses, peakCivilizations, series };
}

export function simulateFermiFilters(inputs: FermiInputs): FermiResult {
  const rate = drakeRate(inputs);
  const simulation = makeSeries(inputs, rate);
  const finalCivilizations = simulation.active;
  const expectedNeighbors = finalCivilizations * Math.min(1, simulation.signalLifetime / Math.max(1, simulation.horizonYears));
  const silenceScore = clamp(100 / (1 + expectedNeighbors), 0, 100);
  const { verdict, detail } = verdictFor(finalCivilizations);

  return {
    drakeRate: rate,
    peakCivilizations: simulation.peakCivilizations,
    finalCivilizations,
    totalBirths: simulation.totalBirths,
    totalLosses: simulation.totalLosses,
    silenceScore,
    verdict,
    detail,
    series: simulation.series,
  };
}
