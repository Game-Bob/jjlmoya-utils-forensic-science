export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { COLONY_COUNTER_TOOL } from './tool/colony-counter/index';
import { ASTEROID_IMPACT_TOOL } from './tool/asteroid-impact/index';
import { MICROWAVE_DETECTOR_TOOL } from './tool/microwave-detector/index';
import { SIMULATION_PROBABILITY_TOOL } from './tool/simulation-probability/index';
import { CELLULAR_RENEWAL_TOOL } from './tool/cellular-renewal/index';
import { COSMIC_INFLATION_TOOL } from './tool/cosmic-inflation/index';
import { TEMPERATURE_TIMELINE_TOOL } from './tool/temperature-timeline/index';
import { LORENZ_ATTRACTOR_TOOL } from './tool/lorenz-attractor/index';
import { STELLAR_HABITABILITY_ZONE_TOOL } from './tool/stellar-habitability-zone/index';
import { RADIOACTIVE_DECAY_TOOL } from './tool/radioactive-decay/index';
import { NATURAL_SELECTION_DRIFT_TOOL } from './tool/natural-selection-drift/index';
import { ENTROPY_SECOND_LAW_TOOL } from './tool/entropy-second-law/index';
import { DOUBLE_SLIT_DECOHERENCE_TOOL } from './tool/double-slit-decoherence/index';
import { PHASE_DIAGRAM_CRITICAL_POINTS_TOOL } from './tool/phase-diagram-critical-points/index';
import { TWIN_PARADOX_VISUALIZER_TOOL } from './tool/twin-paradox-visualizer/index';
import { MANDELBROT_FRACTAL_TOOL } from './tool/mandelbrot-fractal/index';
import { PLANET_ATMOSPHERE_SURVIVAL_TOOL } from './tool/planet-atmosphere-survival/index';
import { THREE_BODY_PROBLEM_TOOL } from './tool/three-body-problem/index';
import { ROCHE_LIMIT_SATELLITE_DISRUPTION_TOOL } from './tool/roche-limit-satellite-disruption/index';
import { DYSON_SPHERE_ENERGY_CAPTURE_TOOL } from './tool/dyson-sphere-energy-capture/index';
import { GLOBAL_ALBEDO_SNOWBALL_SIMULATOR_TOOL } from './tool/global-albedo-snowball-simulator/index';
import { CONWAY_LIFE_RULE_LAB_TOOL } from './tool/conway-life-rule-lab/index';
import { CRYSTAL_LATTICE_STRUCTURE_FINDER_TOOL } from './tool/crystal-lattice-structure-finder/index';
import { FERMI_PARADOX_FILTER_LAB_TOOL } from './tool/fermi-paradox-filter-lab/index';
import { EPIDEMIC_SIR_SIMULATOR_TOOL } from './tool/epidemic-sir-simulator/index';
import { BLACK_HOLE_EVENT_HORIZON_SIMULATOR_TOOL } from './tool/black-hole-event-horizon-simulator/index';
import { EXOPLANET_BIOSIGNATURE_DETECTOR_TOOL } from './tool/exoplanet-biosignature-detector/index';

export const ALL_TOOLS: ToolDefinition[] = [
  COLONY_COUNTER_TOOL,
  ASTEROID_IMPACT_TOOL,
  MICROWAVE_DETECTOR_TOOL,
  SIMULATION_PROBABILITY_TOOL,
  CELLULAR_RENEWAL_TOOL,
  COSMIC_INFLATION_TOOL,
  TEMPERATURE_TIMELINE_TOOL,
  LORENZ_ATTRACTOR_TOOL,
  STELLAR_HABITABILITY_ZONE_TOOL,
  RADIOACTIVE_DECAY_TOOL,
  NATURAL_SELECTION_DRIFT_TOOL,
  ENTROPY_SECOND_LAW_TOOL,
  DOUBLE_SLIT_DECOHERENCE_TOOL,
  PHASE_DIAGRAM_CRITICAL_POINTS_TOOL,
  TWIN_PARADOX_VISUALIZER_TOOL,
  MANDELBROT_FRACTAL_TOOL,
  PLANET_ATMOSPHERE_SURVIVAL_TOOL,
  THREE_BODY_PROBLEM_TOOL,
  ROCHE_LIMIT_SATELLITE_DISRUPTION_TOOL,
  DYSON_SPHERE_ENERGY_CAPTURE_TOOL,
  GLOBAL_ALBEDO_SNOWBALL_SIMULATOR_TOOL,
  CONWAY_LIFE_RULE_LAB_TOOL,
  CRYSTAL_LATTICE_STRUCTURE_FINDER_TOOL,
  FERMI_PARADOX_FILTER_LAB_TOOL,
  EPIDEMIC_SIR_SIMULATOR_TOOL,
  BLACK_HOLE_EVENT_HORIZON_SIMULATOR_TOOL,
  EXOPLANET_BIOSIGNATURE_DETECTOR_TOOL,
];
