import { firePatternOriginAnalyzer } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FIRE_PATTERN_ORIGIN_ANALYZER_TOOL: ToolDefinition = {
  entry: firePatternOriginAnalyzer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
