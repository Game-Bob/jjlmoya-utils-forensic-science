import type { ToolDefinition } from '../../types';
import { voiceSpectrogramAnalyzer } from './entry';

export * from './entry';

export const VOICE_SPECTROGRAM_ANALYZER_TOOL: ToolDefinition = {
  entry: voiceSpectrogramAnalyzer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro')
};
