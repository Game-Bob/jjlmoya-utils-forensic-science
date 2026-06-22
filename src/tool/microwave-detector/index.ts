import { microwaveDetector } from './entry';
import type { ToolDefinition } from '../../types';
export * from './entry';
export const MICROWAVE_DETECTOR_TOOL: ToolDefinition = {
  entry: microwaveDetector,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
