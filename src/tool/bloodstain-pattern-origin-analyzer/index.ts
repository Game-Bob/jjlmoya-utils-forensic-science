import { bloodstainPatternOriginAnalyzer } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const BLOODSTAIN_PATTERN_ORIGIN_ANALYZER_TOOL: ToolDefinition = {
  entry: bloodstainPatternOriginAnalyzer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
