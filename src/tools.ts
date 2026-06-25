export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { FORENSIC_AGE_ESTIMATOR_TOOL } from './tool/forensic-age-estimator/index';
import { WIDMARK_ALCOHOL_SIMULATOR_TOOL } from './tool/widmark-alcohol-simulator/index';
import { FORENSIC_SEX_DETERMINATOR_TOOL } from './tool/forensic-sex-determinator/index';
import { FORENSIC_STATURE_ESTIMATOR_TOOL } from './tool/forensic-stature-estimator/index';

export const ALL_TOOLS: ToolDefinition[] = [
  FORENSIC_AGE_ESTIMATOR_TOOL,
  WIDMARK_ALCOHOL_SIMULATOR_TOOL,
  FORENSIC_SEX_DETERMINATOR_TOOL,
  FORENSIC_STATURE_ESTIMATOR_TOOL
];
