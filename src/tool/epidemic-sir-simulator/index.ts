import { epidemicSirSimulator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const EPIDEMIC_SIR_SIMULATOR_TOOL: ToolDefinition = {
  entry: epidemicSirSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

