import { crystalLatticeStructureFinder } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const CRYSTAL_LATTICE_STRUCTURE_FINDER_TOOL: ToolDefinition = {
  entry: crystalLatticeStructureFinder,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
