import { forensicMicrocrystalDrugSimulator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_MICROCRYSTAL_DRUG_SIMULATOR_TOOL: ToolDefinition = {
  entry: forensicMicrocrystalDrugSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
