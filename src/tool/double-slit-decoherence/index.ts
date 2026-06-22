import { doubleSlitDecoherence } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const DOUBLE_SLIT_DECOHERENCE_TOOL: ToolDefinition = {
  entry: doubleSlitDecoherence,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
