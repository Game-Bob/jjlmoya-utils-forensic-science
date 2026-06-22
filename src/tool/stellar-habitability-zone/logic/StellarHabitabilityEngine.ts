export interface StellarPreset {
  type: string;
  name: string;
  temperature: number;
  luminosity: number;
  mass: number;
  radius: number;
  color: string;
}

export interface HabitabilityLimits {
  recentVenus: number;
  runawayGreenhouse: number;
  maximumGreenhouse: number;
  earlyMars: number;
}

export interface SimulationResult {
  hzLimits: HabitabilityLimits;
  equilibriumTemperature: number;
  surfaceTemperature: number;
  orbitalPeriod: number;
  orbitalVelocity: number;
  stellarFlux: number;
  status: 'too-hot' | 'habitable' | 'too-cold';
}

export const STELLAR_PRESETS: StellarPreset[] = [
  {
    type: 'O',
    name: 'O-Type (Blue Hypergiant)',
    temperature: 40000,
    luminosity: 100000,
    mass: 50,
    radius: 15,
    color: '#00bfff',
  },
  {
    type: 'B',
    name: 'B-Type (Blue Giant)',
    temperature: 20000,
    luminosity: 1000,
    mass: 8,
    radius: 4,
    color: '#87cefa',
  },
  {
    type: 'A',
    name: 'A-Type (Sirius-like)',
    temperature: 8500,
    luminosity: 20,
    mass: 2.1,
    radius: 1.7,
    color: '#e0ffff',
  },
  {
    type: 'F',
    name: 'F-Type (Procyon-like)',
    temperature: 6500,
    luminosity: 2.5,
    mass: 1.4,
    radius: 1.3,
    color: '#f0fff0',
  },
  {
    type: 'G',
    name: 'G-Type (Sun-like)',
    temperature: 5778,
    luminosity: 1.0,
    mass: 1.0,
    radius: 1.0,
    color: '#ffff00',
  },
  {
    type: 'K',
    name: 'K-Type (Orange Dwarf)',
    temperature: 4500,
    luminosity: 0.15,
    mass: 0.7,
    radius: 0.7,
    color: '#ffa500',
  },
  {
    type: 'M',
    name: 'M-Type (Red Dwarf)',
    temperature: 3200,
    luminosity: 0.01,
    mass: 0.2,
    radius: 0.2,
    color: '#ff4500',
  },
];

export interface SeffParams {
  tEff: number;
  seffSun: number;
  a: number;
  b: number;
  c: number;
  d: number;
}

export interface SimulateParams {
  luminosity: number;
  temperature: number;
  mass: number;
  distanceAu: number;
  albedo: number;
  greenhouseDeltaK: number;
}

export class StellarHabitabilityEngine {
  private calculateSeff(params: SeffParams): number {
    const tClamp = Math.max(2600, Math.min(7200, params.tEff));
    const tStar = tClamp - 5780;
    return params.seffSun + params.a * tStar + params.b * Math.pow(tStar, 2) + params.c * Math.pow(tStar, 3) + params.d * Math.pow(tStar, 4);
  }

  public calculateLimits(luminosity: number, temperature: number): HabitabilityLimits {
    const rvSeff = this.calculateSeff({ tEff: temperature, seffSun: 1.776, a: 2.136e-4, b: 2.533e-8, c: -1.332e-11, d: -3.097e-15 });
    const rgSeff = this.calculateSeff({ tEff: temperature, seffSun: 1.107, a: 1.332e-4, b: 1.587e-8, c: -8.308e-12, d: -1.931e-16 });
    const mgSeff = this.calculateSeff({ tEff: temperature, seffSun: 0.356, a: 6.171e-5, b: 7.389e-9, c: -3.865e-12, d: -9.000e-17 });
    const emSeff = this.calculateSeff({ tEff: temperature, seffSun: 0.320, a: 5.547e-5, b: 6.641e-9, c: -3.474e-12, d: -8.087e-17 });

    return {
      recentVenus: Math.sqrt(luminosity / rvSeff),
      runawayGreenhouse: Math.sqrt(luminosity / rgSeff),
      maximumGreenhouse: Math.sqrt(luminosity / mgSeff),
      earlyMars: Math.sqrt(luminosity / emSeff),
    };
  }

  public simulate(params: SimulateParams): SimulationResult {
    const hzLimits = this.calculateLimits(params.luminosity, params.temperature);
    const stellarFlux = params.luminosity / Math.pow(params.distanceAu, 2);
    const equilibriumTemperature = 278.5 * Math.pow(stellarFlux * (1.0 - params.albedo), 0.25);
    const surfaceTemperature = equilibriumTemperature + params.greenhouseDeltaK;
    const orbitalPeriod = Math.sqrt(Math.pow(params.distanceAu, 3) / params.mass) * 365.255;
    const orbitalVelocity = 29.78 / Math.sqrt(params.distanceAu);

    let status: 'too-hot' | 'habitable' | 'too-cold' = 'habitable';
    if (params.distanceAu < hzLimits.runawayGreenhouse) {
      status = 'too-hot';
    } else if (params.distanceAu > hzLimits.maximumGreenhouse) {
      status = 'too-cold';
    }

    return {
      hzLimits,
      equilibriumTemperature,
      surfaceTemperature,
      orbitalPeriod,
      orbitalVelocity,
      stellarFlux,
      status,
    };
  }
}
