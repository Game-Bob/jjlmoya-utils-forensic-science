import { lorenzAttractor } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';
export const LORENZ_ATTRACTOR_TOOL: ToolDefinition = {
  entry: lorenzAttractor,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
