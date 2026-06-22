import { twinParadoxVisualizer } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const TWIN_PARADOX_VISUALIZER_TOOL: ToolDefinition = {
  entry: twinParadoxVisualizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
