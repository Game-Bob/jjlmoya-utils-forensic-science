import { forensicTlcInkSimulator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_TLC_INK_SIMULATOR_TOOL: ToolDefinition = {
  entry: forensicTlcInkSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
