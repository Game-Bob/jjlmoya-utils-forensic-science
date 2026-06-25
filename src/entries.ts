export { forensicAgeEstimator } from './tool/forensic-age-estimator/entry';
export type { ForensicAgeEstimatorUI, ForensicAgeEstimatorLocaleContent } from './tool/forensic-age-estimator/entry';
export { widmarkAlcoholSimulator } from './tool/widmark-alcohol-simulator/entry';
export type { WidmarkAlcoholSimulatorUI, WidmarkAlcoholSimulatorLocaleContent } from './tool/widmark-alcohol-simulator/entry';
export { forensicSexDeterminator } from './tool/forensic-sex-determinator/entry';
export type { SexDeterminatorUI, SexDeterminatorLocaleContent } from './tool/forensic-sex-determinator/entry';
export { forensicStatureEstimator } from './tool/forensic-stature-estimator/entry';
export type { StatureEstimatorUI, StatureEstimatorLocaleContent } from './tool/forensic-stature-estimator/entry';

import { forensicAgeEstimator } from './tool/forensic-age-estimator/entry';
import { widmarkAlcoholSimulator } from './tool/widmark-alcohol-simulator/entry';
import { forensicSexDeterminator } from './tool/forensic-sex-determinator/entry';
import { forensicStatureEstimator } from './tool/forensic-stature-estimator/entry';

export const ALL_ENTRIES = [
  forensicAgeEstimator,
  widmarkAlcoholSimulator,
  forensicSexDeterminator,
  forensicStatureEstimator
];
