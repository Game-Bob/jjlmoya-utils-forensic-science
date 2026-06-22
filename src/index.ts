export { scienceCategory, scienceCategory as templateCategory } from './category';
export const ScienceCategorySEO = () => import('./category/seo.astro').then((m) => m.default);
export { COLONY_COUNTER_TOOL } from './tool/colony-counter/index';
export { ASTEROID_IMPACT_TOOL } from './tool/asteroid-impact/index';
export { MICROWAVE_DETECTOR_TOOL } from './tool/microwave-detector/index';
export { SIMULATION_PROBABILITY_TOOL } from './tool/simulation-probability/index';
export { CELLULAR_RENEWAL_TOOL } from './tool/cellular-renewal/index';
export { COSMIC_INFLATION_TOOL } from './tool/cosmic-inflation/index';
export { TEMPERATURE_TIMELINE_TOOL } from './tool/temperature-timeline/index';
export { LORENZ_ATTRACTOR_TOOL } from './tool/lorenz-attractor/index';
export { STELLAR_HABITABILITY_ZONE_TOOL } from './tool/stellar-habitability-zone/index';
export { RADIOACTIVE_DECAY_TOOL } from './tool/radioactive-decay/index';
export { NATURAL_SELECTION_DRIFT_TOOL } from './tool/natural-selection-drift/index';
export { ENTROPY_SECOND_LAW_TOOL } from './tool/entropy-second-law/index';
export { DOUBLE_SLIT_DECOHERENCE_TOOL } from './tool/double-slit-decoherence/index';
export { PHASE_DIAGRAM_CRITICAL_POINTS_TOOL } from './tool/phase-diagram-critical-points/index';
export { TWIN_PARADOX_VISUALIZER_TOOL } from './tool/twin-paradox-visualizer/index';
export { MANDELBROT_FRACTAL_TOOL } from './tool/mandelbrot-fractal/index';
export { PLANET_ATMOSPHERE_SURVIVAL_TOOL } from './tool/planet-atmosphere-survival/index';
export { THREE_BODY_PROBLEM_TOOL } from './tool/three-body-problem/index';
export { ROCHE_LIMIT_SATELLITE_DISRUPTION_TOOL } from './tool/roche-limit-satellite-disruption/index';
export { DYSON_SPHERE_ENERGY_CAPTURE_TOOL } from './tool/dyson-sphere-energy-capture/index';
export { GLOBAL_ALBEDO_SNOWBALL_SIMULATOR_TOOL } from './tool/global-albedo-snowball-simulator/index';
export { CONWAY_LIFE_RULE_LAB_TOOL } from './tool/conway-life-rule-lab/index';
export { CRYSTAL_LATTICE_STRUCTURE_FINDER_TOOL } from './tool/crystal-lattice-structure-finder/index';
export { FERMI_PARADOX_FILTER_LAB_TOOL } from './tool/fermi-paradox-filter-lab/index';
export { EPIDEMIC_SIR_SIMULATOR_TOOL } from './tool/epidemic-sir-simulator/index';
export { BLACK_HOLE_EVENT_HORIZON_SIMULATOR_TOOL } from './tool/black-hole-event-horizon-simulator/index';
export { EXOPLANET_BIOSIGNATURE_DETECTOR_TOOL } from './tool/exoplanet-biosignature-detector/index';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  ScienceToolEntry,
  ScienceCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
