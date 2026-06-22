import { colonyCounter } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';
export const COLONY_COUNTER_TOOL: ToolDefinition = {
  entry: colonyCounter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
