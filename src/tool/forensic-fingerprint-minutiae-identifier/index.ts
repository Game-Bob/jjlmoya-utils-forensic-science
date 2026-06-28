import { forensicFingerprintMinutiaeIdentifier } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const FORENSIC_FINGERPRINT_MINUTIAE_IDENTIFIER_TOOL: ToolDefinition = {
  entry: forensicFingerprintMinutiaeIdentifier,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
