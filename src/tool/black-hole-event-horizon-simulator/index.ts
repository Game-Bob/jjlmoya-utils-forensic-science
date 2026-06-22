import { blackHoleEventHorizonSimulator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const BLACK_HOLE_EVENT_HORIZON_SIMULATOR_TOOL: ToolDefinition = {
  entry: blackHoleEventHorizonSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
