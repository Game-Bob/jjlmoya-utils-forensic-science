import { simulationProbability } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';
export const SIMULATION_PROBABILITY_TOOL: ToolDefinition = {
  entry: simulationProbability,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
