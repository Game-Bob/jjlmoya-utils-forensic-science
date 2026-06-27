import { forensicGlassBeckeLineSimulator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_GLASS_BECKE_LINE_SIMULATOR_TOOL: ToolDefinition = {
  entry: forensicGlassBeckeLineSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
