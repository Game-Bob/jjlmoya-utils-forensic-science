import { phaseDiagramCriticalPoints } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const PHASE_DIAGRAM_CRITICAL_POINTS_TOOL: ToolDefinition = {
  entry: phaseDiagramCriticalPoints,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
