import { mandelbrotFractal } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const MANDELBROT_FRACTAL_TOOL: ToolDefinition = {
  entry: mandelbrotFractal,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
