export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { FORENSIC_AGE_ESTIMATOR_TOOL } from './tool/forensic-age-estimator/index';

export const ALL_TOOLS: ToolDefinition[] = [FORENSIC_AGE_ESTIMATOR_TOOL];
