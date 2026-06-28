export { forensicCategory, forensicCategory as templateCategory } from './category';
export const ForensicCategorySEO = () => import('./category/seo.astro').then((m) => m.default);
export { FORENSIC_AGE_ESTIMATOR_TOOL } from './tool/forensic-age-estimator/index';
export { WIDMARK_ALCOHOL_SIMULATOR_TOOL } from './tool/widmark-alcohol-simulator/index';
export { FORENSIC_SEX_DETERMINATOR_TOOL } from './tool/forensic-sex-determinator/index';
export { FORENSIC_STATURE_ESTIMATOR_TOOL } from './tool/forensic-stature-estimator/index';
export { FORENSIC_BLOOD_TEST_SIMULATOR_TOOL } from './tool/forensic-blood-test-simulator/index';
export { FORENSIC_IMAGE_AUTHENTICITY_ANALYZER_TOOL } from './tool/forensic-image-authenticity-analyzer/index';
export { GSR_DISPERSION_CALCULATOR_TOOL } from './tool/gsr-dispersion-calculator/index';
export { FORENSIC_TLC_INK_SIMULATOR_TOOL } from './tool/forensic-tlc-ink-simulator/index';
export { FORENSIC_MICROCRYSTAL_DRUG_SIMULATOR_TOOL } from './tool/forensic-microcrystal-drug-simulator/index';
export { FORENSIC_GLASS_BECKE_LINE_SIMULATOR_TOOL } from './tool/forensic-glass-becke-line-simulator/index';
export { FORENSIC_FIBER_COMPARISON_MICROSCOPE_TOOL } from './tool/forensic-fiber-comparison-microscope/index';
export { BLOODSTAIN_PATTERN_ORIGIN_ANALYZER_TOOL } from './tool/bloodstain-pattern-origin-analyzer/index';
export { FORENSIC_FINGERPRINT_MINUTIAE_IDENTIFIER_TOOL } from './tool/forensic-fingerprint-minutiae-identifier/index';
export { FIRE_PATTERN_ORIGIN_ANALYZER_TOOL } from './tool/fire-pattern-origin-analyzer/index';
export { FORENSIC_TOOLMARK_STRIATION_MATCHER_TOOL } from './tool/forensic-toolmark-striation-matcher/index';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  ScienceToolEntry,
  ScienceCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
