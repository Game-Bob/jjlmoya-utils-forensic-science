import { cosmicInflation } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const COSMIC_INFLATION_TOOL: ToolDefinition = {
  entry: cosmicInflation,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
