export interface SirSimulationInput {
  population: number;
  initialInfectedPercent: number;
  r0: number;
  infectiousDays: number;
  vaccinationPercent: number;
  vaccineEffectiveness: number;
  fatalityPercent: number;
  days: number;
}

export interface SirDayPoint {
  day: number;
  susceptible: number;
  infected: number;
  recovered: number;
  vaccinated: number;
  deaths: number;
  newInfections: number;
}

export interface SirSummary {
  peakInfected: number;
  peakDay: number;
  totalInfected: number;
  attackRate: number;
  finalDeaths: number;
  effectiveR0: number;
}

export interface SirSimulationResult {
  points: SirDayPoint[];
  summary: SirSummary;
}

interface SirRuntimeState {
  susceptible: number;
  infected: number;
  recovered: number;
  deaths: number;
}

interface SirPreparedInput {
  population: number;
  days: number;
  beta: number;
  recoveryRate: number;
  protectedVaccinated: number;
  fatalityShare: number;
  effectivePopulation: number;
  initialInfected: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function prepareInput(input: SirSimulationInput): SirPreparedInput {
  const population = Math.max(1, input.population);
  const days = Math.max(1, Math.round(input.days));
  const recoveryRate = 1 / Math.max(1, input.infectiousDays);
  const beta = Math.max(0, input.r0) * recoveryRate;
  const vaccinated = population * clamp(input.vaccinationPercent / 100, 0, 0.98);
  const protectedVaccinated = vaccinated * clamp(input.vaccineEffectiveness / 100, 0, 1);
  const initialInfected = population * clamp(input.initialInfectedPercent / 100, 0.0001, 0.2);
  const fatalityShare = clamp(input.fatalityPercent / 100, 0, 0.25);
  const effectivePopulation = Math.max(1, population - protectedVaccinated);

  return {
    population,
    days,
    beta,
    recoveryRate,
    protectedVaccinated,
    fatalityShare,
    effectivePopulation,
    initialInfected,
  };
}

function initialState(prepared: SirPreparedInput): SirRuntimeState {
  return {
    susceptible: Math.max(0, prepared.population - prepared.protectedVaccinated - prepared.initialInfected),
    infected: Math.min(prepared.initialInfected, prepared.effectivePopulation),
    recovered: 0,
    deaths: 0,
  };
}

function pointFromState(day: number, state: SirRuntimeState, protectedVaccinated: number, newInfections: number) {
  return {
    day,
    susceptible: state.susceptible,
    infected: state.infected,
    recovered: state.recovered,
    vaccinated: protectedVaccinated,
    deaths: state.deaths,
    newInfections,
  };
}

function nextState(state: SirRuntimeState, prepared: SirPreparedInput) {
  const forceOfInfection = prepared.beta * state.infected * state.susceptible / prepared.effectivePopulation;
  const newInfections = Math.min(state.susceptible, Math.max(0, forceOfInfection));
  const leavingInfected = Math.min(state.infected + newInfections, state.infected * prepared.recoveryRate);
  const newDeaths = leavingInfected * prepared.fatalityShare;

  return {
    newInfections,
    state: {
      susceptible: Math.max(0, state.susceptible - newInfections),
      infected: Math.max(0, state.infected + newInfections - leavingInfected),
      recovered: state.recovered + leavingInfected - newDeaths,
      deaths: state.deaths + newDeaths,
    },
  };
}

function summarize(points: SirDayPoint[], population: number, input: SirSimulationInput, protectedVaccinated: number) {
  let peakInfected = 0;
  let peakDay = 0;

  for (const point of points) {
    if (point.infected > peakInfected) {
      peakInfected = point.infected;
      peakDay = point.day;
    }
  }

  const finalPoint = points[points.length - 1] ?? points[0];
  const finalRecovered = finalPoint.recovered;
  const finalDeaths = finalPoint.deaths;
  const finalInfected = finalPoint.infected;
  const outbreakBurden = finalRecovered + finalDeaths + finalInfected;

  return {
    peakInfected,
    peakDay,
    totalInfected: outbreakBurden,
    attackRate: outbreakBurden / population,
    finalDeaths,
    effectiveR0: input.r0 * (1 - protectedVaccinated / population),
  };
}

export function runSirSimulation(input: SirSimulationInput): SirSimulationResult {
  const prepared = prepareInput(input);
  let state = initialState(prepared);
  let latestNewInfections = prepared.initialInfected;
  const points: SirDayPoint[] = [];

  for (let day = 0; day <= prepared.days; day += 1) {
    points.push(pointFromState(day, state, prepared.protectedVaccinated, latestNewInfections));
    const next = nextState(state, prepared);
    state = next.state;
    latestNewInfections = next.newInfections;
  }

  return {
    points,
    summary: summarize(points, prepared.population, input, prepared.protectedVaccinated),
  };
}
