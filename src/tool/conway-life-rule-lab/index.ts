import { conwayLifeRuleLab } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const CONWAY_LIFE_RULE_LAB_TOOL: ToolDefinition = {
  entry: conwayLifeRuleLab,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
