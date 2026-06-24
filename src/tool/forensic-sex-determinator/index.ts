import { forensicSexDeterminator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_SEX_DETERMINATOR_TOOL: ToolDefinition = {
  entry: forensicSexDeterminator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
