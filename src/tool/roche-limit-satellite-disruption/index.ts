import { rocheLimitSatelliteDisruption } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const ROCHE_LIMIT_SATELLITE_DISRUPTION_TOOL: ToolDefinition = {
  entry: rocheLimitSatelliteDisruption,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
