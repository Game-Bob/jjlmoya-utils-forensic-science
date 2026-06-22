import { threeBodyProblem } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const THREE_BODY_PROBLEM_TOOL: ToolDefinition = {
  entry: threeBodyProblem,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
