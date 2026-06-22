import type { ScienceCategoryEntry } from '../types';
import { colonyCounter } from '../tool/colony-counter/index';
import { asteroidImpact } from '../tool/asteroid-impact/index';
import { microwaveDetector } from '../tool/microwave-detector/index';
import { simulationProbability } from '../tool/simulation-probability/index';
import { cellularRenewal } from '../tool/cellular-renewal/index';
import { cosmicInflation } from '../tool/cosmic-inflation/index';
import { temperatureTimeline } from '../tool/temperature-timeline/index';
import { lorenzAttractor } from '../tool/lorenz-attractor/index';
import { stellarHabitabilityZone } from '../tool/stellar-habitability-zone/index';
import { radioactiveDecay } from '../tool/radioactive-decay/index';
import { naturalSelectionDrift } from '../tool/natural-selection-drift/index';
import { entropySecondLaw } from '../tool/entropy-second-law/index';
import { doubleSlitDecoherence } from '../tool/double-slit-decoherence/index';
import { phaseDiagramCriticalPoints } from '../tool/phase-diagram-critical-points/index';
import { twinParadoxVisualizer } from '../tool/twin-paradox-visualizer/index';
import { mandelbrotFractal } from '../tool/mandelbrot-fractal/index';
import { planetAtmosphereSurvival } from '../tool/planet-atmosphere-survival/index';
import { threeBodyProblem } from '../tool/three-body-problem/index';
import { rocheLimitSatelliteDisruption } from '../tool/roche-limit-satellite-disruption/index';
import { dysonSphereEnergyCapture } from '../tool/dyson-sphere-energy-capture/index';
import { globalAlbedoSnowballSimulator } from '../tool/global-albedo-snowball-simulator/index';
import { conwayLifeRuleLab } from '../tool/conway-life-rule-lab/index';
import { crystalLatticeStructureFinder } from '../tool/crystal-lattice-structure-finder/index';
import { fermiParadoxFilterLab } from '../tool/fermi-paradox-filter-lab/index';
import { epidemicSirSimulator } from '../tool/epidemic-sir-simulator/index';
import { blackHoleEventHorizonSimulator } from '../tool/black-hole-event-horizon-simulator/index';
import { exoplanetBiosignatureDetector } from '../tool/exoplanet-biosignature-detector/index';

export const scienceCategory: ScienceCategoryEntry = {
  icon: 'mdi:flask',
  tools: [colonyCounter, asteroidImpact, microwaveDetector, simulationProbability, cellularRenewal, cosmicInflation, temperatureTimeline, lorenzAttractor, stellarHabitabilityZone, radioactiveDecay, naturalSelectionDrift, entropySecondLaw, doubleSlitDecoherence, phaseDiagramCriticalPoints, twinParadoxVisualizer, mandelbrotFractal, planetAtmosphereSurvival, threeBodyProblem, rocheLimitSatelliteDisruption, dysonSphereEnergyCapture, globalAlbedoSnowballSimulator, conwayLifeRuleLab, crystalLatticeStructureFinder, fermiParadoxFilterLab, epidemicSirSimulator, blackHoleEventHorizonSimulator, exoplanetBiosignatureDetector],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

