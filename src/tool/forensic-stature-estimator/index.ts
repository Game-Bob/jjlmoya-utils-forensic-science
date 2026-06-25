import { forensicStatureEstimator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_STATURE_ESTIMATOR_TOOL: ToolDefinition = {
  entry: forensicStatureEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro')
};
