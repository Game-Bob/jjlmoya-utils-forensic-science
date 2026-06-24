import { widmarkAlcoholSimulator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const WIDMARK_ALCOHOL_SIMULATOR_TOOL: ToolDefinition = {
  entry: widmarkAlcoholSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
