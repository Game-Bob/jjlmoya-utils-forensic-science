import { asteroidImpact } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';
export const ASTEROID_IMPACT_TOOL: ToolDefinition = {
  entry: asteroidImpact,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
