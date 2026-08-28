import { dnaProfileMatchProbabilityLab } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const DNA_PROFILE_MATCH_PROBABILITY_LAB_TOOL: ToolDefinition = {
  entry: dnaProfileMatchProbabilityLab,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
