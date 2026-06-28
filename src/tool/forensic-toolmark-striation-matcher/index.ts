import { forensicToolmarkStriationMatcher } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_TOOLMARK_STRIATION_MATCHER_TOOL: ToolDefinition = {
  entry: forensicToolmarkStriationMatcher,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
