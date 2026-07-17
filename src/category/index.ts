import type { ScienceCategoryEntry } from '../types';
import { forensicAgeEstimator } from '../tool/forensic-age-estimator/entry';
import { widmarkAlcoholSimulator } from '../tool/widmark-alcohol-simulator/entry';
import { forensicSexDeterminator } from '../tool/forensic-sex-determinator/entry';
import { forensicStatureEstimator } from '../tool/forensic-stature-estimator/entry';
import { forensicBloodTestSimulator } from '../tool/forensic-blood-test-simulator/entry';
import { forensicImageAuthenticityAnalyzer } from '../tool/forensic-image-authenticity-analyzer/entry';
import { gsrDispersionCalculator } from '../tool/gsr-dispersion-calculator/entry';
import { forensicTlcInkSimulator } from '../tool/forensic-tlc-ink-simulator/entry';
import { forensicMicrocrystalDrugSimulator } from '../tool/forensic-microcrystal-drug-simulator/entry';
import { forensicGlassBeckeLineSimulator } from '../tool/forensic-glass-becke-line-simulator/entry';
import { forensicFiberComparisonMicroscope } from '../tool/forensic-fiber-comparison-microscope/entry';
import { bloodstainPatternOriginAnalyzer } from '../tool/bloodstain-pattern-origin-analyzer/entry';
import { forensicFingerprintMinutiaeIdentifier } from '../tool/forensic-fingerprint-minutiae-identifier/entry';
import { firePatternOriginAnalyzer } from '../tool/fire-pattern-origin-analyzer/entry';
import { forensicToolmarkStriationMatcher } from '../tool/forensic-toolmark-striation-matcher/entry';

export const forensicCategory: ScienceCategoryEntry = {
  icon: 'mdi:fingerprint',
  tools: [
    forensicAgeEstimator,
    widmarkAlcoholSimulator,
    forensicSexDeterminator,
    forensicStatureEstimator,
    forensicBloodTestSimulator,
    forensicImageAuthenticityAnalyzer,
    gsrDispersionCalculator,
    forensicTlcInkSimulator,
    forensicMicrocrystalDrugSimulator,
    forensicGlassBeckeLineSimulator,
    forensicFiberComparisonMicroscope,
    bloodstainPatternOriginAnalyzer,
    forensicFingerprintMinutiaeIdentifier,
    firePatternOriginAnalyzer,
    forensicToolmarkStriationMatcher
  ],
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content)
  }
};

export const scienceCategory = forensicCategory;
