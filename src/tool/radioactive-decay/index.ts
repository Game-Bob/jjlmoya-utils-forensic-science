import { radioactiveDecay } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const RADIOACTIVE_DECAY_TOOL: ToolDefinition = {
  entry: radioactiveDecay,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

