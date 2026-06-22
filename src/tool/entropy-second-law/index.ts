import { entropySecondLaw } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const ENTROPY_SECOND_LAW_TOOL: ToolDefinition = {
  entry: entropySecondLaw,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
