import type { LifePattern } from './LifePatterns';
import type { LifeRuleSet, NeighborCount } from './LifeRules';

export interface LifeGenerationStats {
  generation: number;
  population: number;
  births: number;
  deaths: number;
  stability: number;
  density: number;
}

export interface LifeSnapshot {
  cells: Uint8Array;
  stats: LifeGenerationStats;
}

export class LifeUniverse {
  private current: Uint8Array;
  private next: Uint8Array;
  private generation = 0;
  private previousPopulation = 0;

  public constructor(
    public readonly width: number,
    public readonly height: number,
  ) {
    this.current = new Uint8Array(width * height);
    this.next = new Uint8Array(width * height);
  }

  public clear(): LifeSnapshot {
    this.current.fill(0);
    this.next.fill(0);
    this.generation = 0;
    this.previousPopulation = 0;
    return this.snapshot(0, 0);
  }

  public load(cells: Uint8Array): LifeSnapshot {
    if (cells.length !== this.current.length) {
      throw new Error('INVALID_LIFE_SNAPSHOT');
    }

    this.current.set(cells);
    this.next.fill(0);
    this.generation = 0;
    this.previousPopulation = this.current.reduce((sum, alive) => sum + alive, 0);
    return this.snapshot(0, 0);
  }

  public randomize(fillRatio: number): LifeSnapshot {
    const clamped = Math.max(0, Math.min(1, fillRatio));
    let population = 0;

    for (let index = 0; index < this.current.length; index += 1) {
      const alive = Math.random() < clamped ? 1 : 0;
      this.current[index] = alive;
      population += alive;
    }

    this.generation = 0;
    this.previousPopulation = population;
    return this.snapshot(population, 0);
  }

  public toggle(x: number, y: number): LifeSnapshot {
    const index = this.index(x, y);
    this.current[index] = this.current[index] ? 0 : 1;
    return this.snapshot(0, 0);
  }

  public setCell(x: number, y: number, alive: boolean): LifeSnapshot {
    this.current[this.index(x, y)] = alive ? 1 : 0;
    return this.snapshot(0, 0);
  }

  public placePattern(pattern: LifePattern, originX: number, originY: number): LifeSnapshot {
    for (const [x, y] of pattern.cells) {
      this.current[this.index(originX + x, originY + y)] = 1;
    }

    return this.snapshot(0, 0);
  }

  public step(ruleSet: LifeRuleSet): LifeSnapshot {
    let births = 0;
    let deaths = 0;
    let population = 0;
    const previousPopulation = this.previousPopulation;

    for (let y = 0; y < this.height; y += 1) {
      for (let x = 0; x < this.width; x += 1) {
        const result = this.stepCell(x, y, ruleSet);
        population += result.population;
        births += result.births;
        deaths += result.deaths;
      }
    }

    [this.current, this.next] = [this.next, this.current];
    this.next.fill(0);
    this.generation += 1;
    this.previousPopulation = population;
    return this.snapshot(births, deaths, previousPopulation);
  }

  public getCells(): Uint8Array {
    return this.current;
  }

  private snapshot(births: number, deaths: number, previousPopulation = this.previousPopulation): LifeSnapshot {
    const population = this.current.reduce((sum, alive) => sum + alive, 0);
    const changed = births + deaths;
    const stability = population === 0 ? 1 : Math.max(0, 1 - changed / Math.max(population, previousPopulation, 1));

    return {
      cells: this.current,
      stats: {
        generation: this.generation,
        population,
        births,
        deaths,
        stability,
        density: population / this.current.length,
      },
    };
  }

  private countNeighbors(x: number, y: number): NeighborCount {
    let total = 0;

    for (let dy = -1; dy <= 1; dy += 1) {
      for (let dx = -1; dx <= 1; dx += 1) {
        if (dx === 0 && dy === 0) continue;
        total += this.current[this.index(x + dx, y + dy)];
      }
    }

    return total as NeighborCount;
  }

  private willLive(alive: boolean, neighbors: NeighborCount, ruleSet: LifeRuleSet): boolean {
    if (alive) return ruleSet.survival.has(neighbors);
    return ruleSet.birth.has(neighbors);
  }

  private stepCell(x: number, y: number, ruleSet: LifeRuleSet): { population: number; births: number; deaths: number } {
    const index = this.index(x, y);
    const alive = this.current[index] === 1;
    const nextAlive = this.willLive(alive, this.countNeighbors(x, y), ruleSet);
    this.next[index] = nextAlive ? 1 : 0;
    return {
      population: nextAlive ? 1 : 0,
      births: !alive && nextAlive ? 1 : 0,
      deaths: alive && !nextAlive ? 1 : 0,
    };
  }

  private index(x: number, y: number): number {
    const wrappedX = (x + this.width) % this.width;
    const wrappedY = (y + this.height) % this.height;
    return wrappedY * this.width + wrappedX;
  }
}
