import { gsrDispersionCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const GSR_DISPERSION_CALCULATOR_TOOL: ToolDefinition = {
  entry: gsrDispersionCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
