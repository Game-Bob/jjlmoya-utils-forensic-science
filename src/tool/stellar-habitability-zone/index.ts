import { stellarHabitabilityZone } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const STELLAR_HABITABILITY_ZONE_TOOL: ToolDefinition = {
  entry: stellarHabitabilityZone,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
