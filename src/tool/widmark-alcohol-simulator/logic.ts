export interface SubjectProfile {
  weight: number;
  sex: 'male' | 'female';
  hydration: 'low' | 'normal' | 'high';
  stomach: 'empty' | 'light' | 'full';
}

export interface DrinkInput {
  volume: number;
  abv: number;
  time: number;
}

export interface BacDatapoint {
  time: number;
  bac: number;
}

export interface WidmarkResult {
  datapoints: BacDatapoint[];
  peakBac: number;
  peakTime: number;
  soberTime: number;
}

export class WidmarkEngine {
  private static readonly ETHANOL_DENSITY = 0.8;
  private static readonly BASE_BETA_60 = 0.15;

  private static getWidmarkFactor(sex: 'male' | 'female', hydration: 'low' | 'normal' | 'high'): number {
    let r = sex === 'male' ? 0.68 : 0.55;
    if (hydration === 'low') {
      r -= 0.05;
    } else if (hydration === 'high') {
      r += 0.05;
    }
    return r;
  }

  private static getAbsorptionRate(stomach: 'empty' | 'light' | 'full'): number {
    if (stomach === 'empty') return 4.0;
    if (stomach === 'light') return 2.0;
    return 1.0;
  }

  private static getDrinksMap(drinks: DrinkInput[], timeStep: number): Map<number, number> {
    const drinksMap = new Map<number, number>();
    for (const drink of drinks) {
      const timeSlot = Math.round(drink.time / timeStep) * timeStep;
      const alcoholGrams = drink.volume * (drink.abv / 100) * this.ETHANOL_DENSITY;
      drinksMap.set(timeSlot, (drinksMap.get(timeSlot) || 0) + alcoholGrams);
    }
    return drinksMap;
  }

  private static step(
    stomachGrams: number,
    params: { ka: number; elimGrams: number; wr: number },
    state: { stomach: number; blood: number }
  ): number {
    state.stomach += stomachGrams;
    const absorbed = state.stomach * (1 - Math.exp(-params.ka * 0.05));
    state.stomach -= absorbed;
    state.blood += absorbed;
    state.blood -= Math.min(params.elimGrams * 0.05, state.blood);
    return Number((state.blood / params.wr).toFixed(3));
  }

  public static simulate(profile: SubjectProfile, drinks: DrinkInput[]): WidmarkResult {
    const r = this.getWidmarkFactor(profile.sex, profile.hydration);
    const wr = profile.weight * r;
    const params = { ka: this.getAbsorptionRate(profile.stomach), elimGrams: this.BASE_BETA_60 * wr, wr };
    const drinksMap = this.getDrinksMap(drinks, 0.05);
    const datapoints: BacDatapoint[] = [];
    const state = { stomach: 0, blood: 0 };
    let peakBac = 0;
    let peakTime = 0;
    let soberTime = -1;

    for (let step = 0; step <= 240; step++) {
      const t = Number((step * 0.05).toFixed(2));
      const bac = this.step(drinksMap.get(t) || 0, params, state);
      datapoints.push({ time: t, bac });
      if (bac > peakBac) {
        peakBac = bac;
        peakTime = t;
      }
      if (bac > 0) soberTime = t;
    }
    return {
      datapoints,
      peakBac: Number(peakBac.toFixed(3)),
      peakTime,
      soberTime: soberTime >= 11.94 ? -2 : soberTime,
    };
  }
}
