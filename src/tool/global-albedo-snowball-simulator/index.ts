import { globalAlbedoSnowballSimulator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const GLOBAL_ALBEDO_SNOWBALL_SIMULATOR_TOOL: ToolDefinition = {
  entry: globalAlbedoSnowballSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
