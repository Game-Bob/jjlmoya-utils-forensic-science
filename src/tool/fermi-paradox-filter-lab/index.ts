import { fermiParadoxFilterLab } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FERMI_PARADOX_FILTER_LAB_TOOL: ToolDefinition = {
  entry: fermiParadoxFilterLab,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
