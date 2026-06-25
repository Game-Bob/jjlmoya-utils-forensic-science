import { forensicBloodTestSimulator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_BLOOD_TEST_SIMULATOR_TOOL: ToolDefinition = {
  entry: forensicBloodTestSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
