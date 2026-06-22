import { exoplanetBiosignatureDetector } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const EXOPLANET_BIOSIGNATURE_DETECTOR_TOOL: ToolDefinition = {
  entry: exoplanetBiosignatureDetector,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
