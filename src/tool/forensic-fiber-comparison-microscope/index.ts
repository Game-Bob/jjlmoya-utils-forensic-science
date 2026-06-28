import { forensicFiberComparisonMicroscope } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_FIBER_COMPARISON_MICROSCOPE_TOOL: ToolDefinition = {
  entry: forensicFiberComparisonMicroscope,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
