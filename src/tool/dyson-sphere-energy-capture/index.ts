import { dysonSphereEnergyCapture } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const DYSON_SPHERE_ENERGY_CAPTURE_TOOL: ToolDefinition = {
  entry: dysonSphereEnergyCapture,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
