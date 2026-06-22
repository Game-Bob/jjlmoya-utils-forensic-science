import type { ScienceToolEntry, ToolLocaleContent } from '../../types';

export interface ForensicAgeEstimatorUI {
  [key: string]: string;
}

export type ForensicAgeEstimatorLocaleContent = ToolLocaleContent<ForensicAgeEstimatorUI>;

export const forensicAgeEstimator: ScienceToolEntry<ForensicAgeEstimatorUI> = {
  id: 'forensic-age-estimator',
  icons: {
    bg: 'mdi:account-search-outline',
    fg: 'mdi:bone',
  },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
  },
};
