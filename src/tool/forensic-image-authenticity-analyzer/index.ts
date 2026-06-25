import { forensicImageAuthenticityAnalyzer } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_IMAGE_AUTHENTICITY_ANALYZER_TOOL: ToolDefinition = {
  entry: forensicImageAuthenticityAnalyzer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
