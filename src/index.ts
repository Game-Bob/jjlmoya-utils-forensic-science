export { forensicCategory, forensicCategory as templateCategory } from './category';
export const ForensicCategorySEO = () => import('./category/seo.astro').then((m) => m.default);
export { FORENSIC_AGE_ESTIMATOR_TOOL } from './tool/forensic-age-estimator/index';
export { WIDMARK_ALCOHOL_SIMULATOR_TOOL } from './tool/widmark-alcohol-simulator/index';
export { FORENSIC_SEX_DETERMINATOR_TOOL } from './tool/forensic-sex-determinator/index';
export { FORENSIC_STATURE_ESTIMATOR_TOOL } from './tool/forensic-stature-estimator/index';
export { FORENSIC_BLOOD_TEST_SIMULATOR_TOOL } from './tool/forensic-blood-test-simulator/index';
export { FORENSIC_IMAGE_AUTHENTICITY_ANALYZER_TOOL } from './tool/forensic-image-authenticity-analyzer/index';
export { GSR_DISPERSION_CALCULATOR_TOOL } from './tool/gsr-dispersion-calculator/index';

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
