import { LIFE_PATTERNS } from './LifePatterns';
import { LifeAchievements } from './LifeAchievements';
import { LifeCanvasRenderer } from './LifeCanvasRenderer';
import { fillPatternSelect, getLabels, getOutputs, type RuntimeLabels } from './LifeLabDom';
import { parseRuleNotation } from './LifeRules';
import { LifeUniverse, type LifeSnapshot } from './LifeUniverse';

interface CellPoint {
  x: number;
  y: number;
}

const grid = { width: 72, height: 48 };

export function startLifeLab(root: HTMLElement): void {
  new LifeLabRuntime(root).start();
}

class LifeLabRuntime {
  private readonly universe = new LifeUniverse(grid.width, grid.height);
  private ruleSet = parseRuleNotation('B3/S23');
  private running = false;
  private lastTick = 0;
  private latestPopulation = 0;
  private drawing = false;
  private drawAlive = true;
  private lastDrawnCell = '';
  private randomSeedDensity = 0.28;
  private readonly labels: RuntimeLabels;

  private readonly canvas: HTMLCanvasElement;
  private readonly playButton: HTMLButtonElement;
  private readonly stepButton: HTMLButtonElement;
  private readonly clearButton: HTMLButtonElement;
  private readonly randomizeButton: HTMLButtonElement;
  private readonly placePatternButton: HTMLButtonElement;
  private readonly ruleInput: HTMLInputElement;
  private readonly speedInput: HTMLInputElement;
  private readonly densityInput: HTMLInputElement;
  private readonly patternSelect: HTMLSelectElement;
  private readonly rulePresets: NodeListOf<HTMLButtonElement>;
  private readonly outputs: Record<string, HTMLElement | null>;
  private readonly renderer: LifeCanvasRenderer;
  private readonly achievements: LifeAchievements;

  public constructor(private readonly root: HTMLElement) {
    this.canvas = this.byId('life-lab-canvas') as HTMLCanvasElement;
    this.playButton = this.byId('life-lab-play') as HTMLButtonElement;
    this.stepButton = this.byId('life-lab-step') as HTMLButtonElement;
    this.clearButton = this.byId('life-lab-clear') as HTMLButtonElement;
    this.randomizeButton = this.byId('life-lab-randomize') as HTMLButtonElement;
    this.placePatternButton = this.byId('life-lab-place-pattern') as HTMLButtonElement;
    this.ruleInput = this.byId('life-lab-rule') as HTMLInputElement;
    this.speedInput = this.byId('life-lab-speed') as HTMLInputElement;
    this.densityInput = this.byId('life-lab-seed-density') as HTMLInputElement;
    this.patternSelect = this.byId('life-lab-pattern') as HTMLSelectElement;
    this.rulePresets = document.querySelectorAll<HTMLButtonElement>('.life-lab-rule-preset');
    this.outputs = getOutputs((id) => this.byId(id));
    this.labels = getLabels(this.root, this.playButton);
    this.renderer = new LifeCanvasRenderer(this.root, this.canvas, this.universe, grid);
    this.achievements = new LifeAchievements({
      pulsar: this.outputs.pulsar,
      immortal: this.outputs.immortal,
      bigBang: this.outputs.bigBang,
    });
  }

  public start(): void {
    fillPatternSelect(this.root, this.patternSelect);
    this.bindEvents();
    this.drawSnapshot(this.universe.randomize(this.randomSeedDensity));
    this.rememberSeed();
  }

  private byId(id: string): HTMLElement {
    return document.getElementById(id) as HTMLElement;
  }

  private bindEvents(): void {
    this.playButton.addEventListener('click', () => this.setRunning(!this.running));
    this.stepButton.addEventListener('click', () => this.stepOnce());
    this.randomizeButton.addEventListener('click', () => this.randomize());
    this.placePatternButton.addEventListener('click', () => this.placePattern());
    this.clearButton.addEventListener('click', () => this.enterEditCanvas());
    this.ruleInput.addEventListener('change', () => this.updateRule());
    this.rulePresets.forEach((preset) => preset.addEventListener('click', () => this.selectRule(preset)));
    this.canvas.addEventListener('pointerdown', (event) => this.startDrawing(event));
    this.canvas.addEventListener('pointermove', (event) => this.continueDrawing(event));
    this.canvas.addEventListener('pointerup', (event) => this.stopDrawing(event));
    this.canvas.addEventListener('pointercancel', () => this.cancelDrawing());
    window.addEventListener('resize', () => this.render());
  }

  private updateRule(): void {
    this.rulePresets.forEach((preset) => preset.classList.toggle('active', preset.dataset.rule === this.ruleInput.value));
    this.parseRuleFromInput();
  }

  private selectRule(preset: HTMLButtonElement): void {
    this.rulePresets.forEach((button) => button.classList.remove('active'));
    preset.classList.add('active');
    this.ruleInput.value = preset.dataset.rule || 'B3/S23';
    this.parseRuleFromInput();
  }

  private parseRuleFromInput(): void {
    try {
      this.ruleSet = parseRuleNotation(this.ruleInput.value);
      this.ruleInput.classList.remove('life-lab-invalid');
      this.ruleInput.removeAttribute('aria-label');
    } catch {
      this.ruleInput.classList.add('life-lab-invalid');
      this.ruleInput.setAttribute('aria-label', this.labels.invalidRule);
    }
  }

  private setRunning(next: boolean): void {
    this.running = next;
    this.playButton.setAttribute('aria-label', this.running ? this.labels.pause : this.labels.play);
    this.playButton.classList.toggle('life-lab-running', this.running);
    this.playButton.classList.toggle('life-lab-paused-icon', this.running);
    if (this.running) requestAnimationFrame((time) => this.loop(time));
  }

  private loop(time: number): void {
    if (!this.running) return;
    const interval = 1000 / parseInt(this.speedInput.value, 10);
    if (time - this.lastTick >= interval) this.stepAt(time);
    requestAnimationFrame((nextTime) => this.loop(nextTime));
  }

  private stepAt(time: number): void {
    this.parseRuleFromInput();
    this.processSnapshot(this.universe.step(this.ruleSet));
    this.lastTick = time;
  }

  private stepOnce(): void {
    this.parseRuleFromInput();
    this.processSnapshot(this.universe.step(this.ruleSet));
  }

  private processSnapshot(snapshot: LifeSnapshot): void {
    this.drawSnapshot(snapshot);
    this.achievements.evaluate(snapshot, this.universe.getCells(), this.randomSeedDensity);
  }

  private randomize(): void {
    this.randomSeedDensity = parseInt(this.densityInput.value, 10) / 100;
    this.drawSnapshot(this.universe.randomize(this.randomSeedDensity));
    this.rememberSeed();
    this.exitEditCanvas();
  }

  private placePattern(): void {
    const pattern = LIFE_PATTERNS.find((item) => item.id === this.patternSelect.value) || LIFE_PATTERNS[0];
    this.drawSnapshot(this.universe.clear());
    this.drawSnapshot(this.universe.placePattern(pattern, Math.floor(grid.width * 0.36), Math.floor(grid.height * 0.36)));
    this.randomSeedDensity = 1;
    this.rememberSeed();
    this.exitEditCanvas();
  }

  private enterEditCanvas(): void {
    this.setRunning(false);
    this.drawSnapshot(this.universe.clear());
    this.rememberSeed();
    this.root.classList.add('life-lab-editing');
  }

  private exitEditCanvas(): void {
    this.root.classList.remove('life-lab-editing');
  }

  private drawSnapshot(snapshot: LifeSnapshot): void {
    this.updateStats(snapshot);
    this.render();
  }

  private updateStats(snapshot: LifeSnapshot): void {
    const stats = snapshot.stats;
    this.latestPopulation = stats.population;
    this.setText('generation', stats.generation.toLocaleString());
    this.setText('population', stats.population.toLocaleString());
    this.setText('density', `${(stats.density * 100).toFixed(1)}%`);
    this.setText('stability', `${(stats.stability * 100).toFixed(0)}%`);
    this.setText('births', stats.births.toLocaleString());
    this.setText('deaths', stats.deaths.toLocaleString());
    this.setText('status', this.statusFor(stats.population, stats.births, stats.deaths, stats.stability));
  }

  private setText(key: string, value: string): void {
    const output = this.outputs[key];
    if (output) output.textContent = value;
  }

  private statusFor(population: number, births: number, deaths: number, stability: number): string {
    if (population === 0 || stability > 0.9) return this.labels.frozen;
    return this.activityStatus(births, deaths);
  }

  private activityStatus(births: number, deaths: number): string {
    if (births > deaths * 1.4) return this.labels.growing;
    if (deaths > births * 1.4) return this.labels.fading;
    return this.labels.chaotic;
  }

  private render(): void {
    this.renderer.render(this.latestPopulation);
  }
  private startDrawing(event: PointerEvent): void {
    if (this.running) return;
    const cell = this.renderer.canvasToCell(event);
    if (!cell) return;
    this.drawAlive = this.universe.getCells()[cell.y * grid.width + cell.x] === 0;
    this.drawing = true;
    this.lastDrawnCell = '';
    this.canvas.setPointerCapture(event.pointerId);
    this.paintCellAt(cell);
  }

  private continueDrawing(event: PointerEvent): void {
    if (!this.drawing || this.running) return;
    const cell = this.renderer.canvasToCell(event);
    if (cell) this.paintCellAt(cell);
  }

  private stopDrawing(event: PointerEvent): void {
    this.drawing = false;
    this.lastDrawnCell = '';
    this.canvas.releasePointerCapture(event.pointerId);
    this.rememberSeed();
    this.root.classList.add('life-lab-editing');
  }

  private cancelDrawing(): void {
    this.drawing = false;
    this.lastDrawnCell = '';
  }

  private paintCellAt(cell: CellPoint): void {
    const key = `${cell.x}:${cell.y}`;
    if (key === this.lastDrawnCell) return;
    this.lastDrawnCell = key;
    this.drawSnapshot(this.universe.setCell(cell.x, cell.y, this.drawAlive));
  }

  private rememberSeed(): void {
    this.achievements.resetHistory(this.universe.getCells());
  }
}


