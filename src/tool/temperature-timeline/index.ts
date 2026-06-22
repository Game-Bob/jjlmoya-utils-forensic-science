import { temperatureTimeline } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const TEMPERATURE_TIMELINE_TOOL: ToolDefinition = {
  entry: temperatureTimeline,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
