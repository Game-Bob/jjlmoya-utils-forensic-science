import { forensicAgeEstimator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_AGE_ESTIMATOR_TOOL: ToolDefinition = {
  entry: forensicAgeEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
