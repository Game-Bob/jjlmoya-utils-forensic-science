import { cellularRenewal } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';
export const CELLULAR_RENEWAL_TOOL: ToolDefinition = {
  entry: cellularRenewal,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
