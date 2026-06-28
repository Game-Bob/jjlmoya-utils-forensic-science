export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { FORENSIC_AGE_ESTIMATOR_TOOL } from './tool/forensic-age-estimator/index';
import { WIDMARK_ALCOHOL_SIMULATOR_TOOL } from './tool/widmark-alcohol-simulator/index';
import { FORENSIC_SEX_DETERMINATOR_TOOL } from './tool/forensic-sex-determinator/index';
import { FORENSIC_STATURE_ESTIMATOR_TOOL } from './tool/forensic-stature-estimator/index';
import { FORENSIC_BLOOD_TEST_SIMULATOR_TOOL } from './tool/forensic-blood-test-simulator/index';
import { FORENSIC_IMAGE_AUTHENTICITY_ANALYZER_TOOL } from './tool/forensic-image-authenticity-analyzer/index';
import { GSR_DISPERSION_CALCULATOR_TOOL } from './tool/gsr-dispersion-calculator/index';
import { FORENSIC_TLC_INK_SIMULATOR_TOOL } from './tool/forensic-tlc-ink-simulator/index';
import { FORENSIC_MICROCRYSTAL_DRUG_SIMULATOR_TOOL } from './tool/forensic-microcrystal-drug-simulator/index';
import { FORENSIC_GLASS_BECKE_LINE_SIMULATOR_TOOL } from './tool/forensic-glass-becke-line-simulator/index';
import { FORENSIC_FIBER_COMPARISON_MICROSCOPE_TOOL } from './tool/forensic-fiber-comparison-microscope/index';

export const ALL_TOOLS: ToolDefinition[] = [
  FORENSIC_AGE_ESTIMATOR_TOOL,
  WIDMARK_ALCOHOL_SIMULATOR_TOOL,
  FORENSIC_SEX_DETERMINATOR_TOOL,
  FORENSIC_STATURE_ESTIMATOR_TOOL,
  FORENSIC_BLOOD_TEST_SIMULATOR_TOOL,
  FORENSIC_IMAGE_AUTHENTICITY_ANALYZER_TOOL,
  GSR_DISPERSION_CALCULATOR_TOOL,
  FORENSIC_TLC_INK_SIMULATOR_TOOL,
  FORENSIC_MICROCRYSTAL_DRUG_SIMULATOR_TOOL,
  FORENSIC_GLASS_BECKE_LINE_SIMULATOR_TOOL,
  FORENSIC_FIBER_COMPARISON_MICROSCOPE_TOOL
];
