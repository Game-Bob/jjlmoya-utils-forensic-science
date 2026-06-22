import { naturalSelectionDrift } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';
export const NATURAL_SELECTION_DRIFT_TOOL: ToolDefinition = {
  entry: naturalSelectionDrift,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
