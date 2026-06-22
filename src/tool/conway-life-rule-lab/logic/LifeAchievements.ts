import type { LifeSnapshot } from './LifeUniverse';

interface AchievementOutputs {
  pulsar: HTMLElement | null;
  immortal: HTMLElement | null;
  bigBang: HTMLElement | null;
}

export class LifeAchievements {
  private readonly active = { pulsar: false, immortal: false, bigBang: false };
  private readonly history: Uint8Array[] = [];
  private readonly storageKey = 'conway-life-rule-lab-achievements';

  public constructor(private readonly outputs: AchievementOutputs) {
    this.load();
  }

  public resetHistory(cells: Uint8Array): void {
    this.history.length = 0;
    this.record(cells);
  }

  public evaluate(snapshot: LifeSnapshot, cells: Uint8Array, randomSeedDensity: number): void {
    const previous = this.history.length >= 1 ? this.history[this.history.length - 1] : null;
    const twoBack = this.history.length >= 2 ? this.history[this.history.length - 2] : null;
    this.evaluatePulsar(cells, previous, twoBack);
    this.evaluateImmortal(snapshot);
    this.evaluateBigBang(snapshot, randomSeedDensity);
    this.record(cells);
  }

  private evaluatePulsar(cells: Uint8Array, previous: Uint8Array | null, twoBack: Uint8Array | null): void {
    if (this.active.pulsar || !previous || !twoBack) return;
    if (!this.arraysEqual(cells, twoBack) || this.arraysEqual(cells, previous)) return;
    this.active.pulsar = true;
    this.activate('pulsar');
  }

  private evaluateImmortal(snapshot: LifeSnapshot): void {
    if (this.active.immortal || snapshot.stats.generation < 500 || snapshot.stats.stability !== 1) return;
    this.activate('immortal');
  }

  private evaluateBigBang(snapshot: LifeSnapshot, randomSeedDensity: number): void {
    if (this.active.bigBang || randomSeedDensity > 0.12 || snapshot.stats.population <= 1000) return;
    this.activate('bigBang');
  }

  private activate(key: keyof typeof this.active): void {
    this.active[key] = true;
    this.outputs[key]?.classList.add('life-lab-achievement-active');
    this.save();
  }

  private load(): void {
    try {
      const saved = window.localStorage.getItem(this.storageKey);
      if (!saved) return;
      const parsed = JSON.parse(saved) as Partial<Record<keyof typeof this.active, boolean>>;
      Object.keys(this.active).forEach((key) => {
        const achievement = key as keyof typeof this.active;
        if (parsed[achievement]) this.activate(achievement);
      });
    } catch {
      window.localStorage.removeItem(this.storageKey);
    }
  }

  private save(): void {
    window.localStorage.setItem(this.storageKey, JSON.stringify(this.active));
  }

  private record(cells: Uint8Array): void {
    this.history.push(new Uint8Array(cells));
    if (this.history.length > 3) this.history.shift();
  }

  private arraysEqual(a: Uint8Array, b: Uint8Array): boolean {
    if (a.length !== b.length) return false;
    for (let index = 0; index < a.length; index += 1) {
      if (a[index] !== b[index]) return false;
    }
    return true;
  }
}
