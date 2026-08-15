import { timeOfDeathAlgorMortisCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const TIME_OF_DEATH_ALGOR_MORTIS_CALCULATOR_TOOL: ToolDefinition = {
  entry: timeOfDeathAlgorMortisCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro')
};
