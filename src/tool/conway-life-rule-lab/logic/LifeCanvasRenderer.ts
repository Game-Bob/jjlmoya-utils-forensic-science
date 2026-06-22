import type { LifeUniverse } from './LifeUniverse';

interface RenderMetrics {
  dpr: number;
  cell: number;
  boardWidth: number;
  boardHeight: number;
  offsetX: number;
  offsetY: number;
}

interface GridSize {
  width: number;
  height: number;
}

export class LifeCanvasRenderer {
  public constructor(
    private readonly root: HTMLElement,
    private readonly canvas: HTMLCanvasElement,
    private readonly universe: LifeUniverse,
    private readonly grid: GridSize,
  ) {}

  public render(latestPopulation: number): void {
    this.resizeCanvas();
    const context = this.canvas.getContext('2d');
    if (!context) return;
    this.paintBoard(context, this.getRenderMetrics(), latestPopulation);
  }

  public canvasToCell(event: PointerEvent): { x: number; y: number } | null {
    const rect = this.canvas.getBoundingClientRect();
    const inset = this.boardInset();
    const size = Math.min((rect.width - inset * 2) / this.grid.width, (rect.height - inset * 2) / this.grid.height);
    const x = Math.floor((event.clientX - rect.left - (rect.width - size * this.grid.width) / 2) / size);
    const y = Math.floor((event.clientY - rect.top - (rect.height - size * this.grid.height) / 2) / size);
    if (x < 0 || y < 0 || x >= this.grid.width || y >= this.grid.height) return null;
    return { x, y };
  }

  private resizeCanvas(): void {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(rect.width * dpr);
    this.canvas.height = Math.floor(rect.height * dpr);
  }

  private getRenderMetrics(): RenderMetrics {
    const dpr = this.canvas.width / this.canvas.clientWidth;
    const inset = this.boardInset() * dpr;
    const cell = Math.min((this.canvas.width - inset * 2) / this.grid.width, (this.canvas.height - inset * 2) / this.grid.height);
    return {
      dpr,
      cell,
      boardWidth: cell * this.grid.width,
      boardHeight: cell * this.grid.height,
      offsetX: (this.canvas.width - cell * this.grid.width) / 2,
      offsetY: (this.canvas.height - cell * this.grid.height) / 2,
    };
  }

  private paintBoard(context: CanvasRenderingContext2D, metrics: RenderMetrics, latestPopulation: number): void {
    const styles = getComputedStyle(this.root);
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    context.fillStyle = styles.getPropertyValue('--life-board-canvas').trim();
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.paintGrid(context, metrics, styles.getPropertyValue('--life-grid-canvas').trim());
    this.paintCells(context, metrics, styles, latestPopulation);
  }

  private paintGrid(context: CanvasRenderingContext2D, metrics: RenderMetrics, color: string): void {
    context.strokeStyle = color;
    context.lineWidth = Math.max(1, metrics.dpr);
    for (let x = 0; x <= this.grid.width; x += 1) this.strokeGridLine(context, metrics, x, true);
    for (let y = 0; y <= this.grid.height; y += 1) this.strokeGridLine(context, metrics, y, false);
  }

  private strokeGridLine(context: CanvasRenderingContext2D, metrics: RenderMetrics, index: number, vertical: boolean): void {
    const position = vertical ? metrics.offsetX + index * metrics.cell : metrics.offsetY + index * metrics.cell;
    context.beginPath();
    context.moveTo(vertical ? position : metrics.offsetX, vertical ? metrics.offsetY : position);
    context.lineTo(vertical ? position : metrics.offsetX + metrics.boardWidth, vertical ? metrics.offsetY + metrics.boardHeight : position);
    context.stroke();
  }

  private paintCells(context: CanvasRenderingContext2D, metrics: RenderMetrics, styles: CSSStyleDeclaration, latestPopulation: number): void {
    const cells = this.universe.getCells();
    context.fillStyle = latestPopulation > this.grid.width * this.grid.height * 0.238 ? styles.getPropertyValue('--life-cell-high').trim() : styles.getPropertyValue('--life-cell-low').trim();
    for (let y = 0; y < this.grid.height; y += 1) {
      for (let x = 0; x < this.grid.width; x += 1) this.paintCell({ context, metrics, cells, x, y });
    }
  }

  private paintCell(cell: { context: CanvasRenderingContext2D; metrics: RenderMetrics; cells: Uint8Array; x: number; y: number }): void {
    const { context, metrics, cells, x, y } = cell;
    if (!cells[y * this.grid.width + x]) return;
    context.fillRect(metrics.offsetX + x * metrics.cell + metrics.dpr, metrics.offsetY + y * metrics.cell + metrics.dpr, Math.max(1, metrics.cell - metrics.dpr * 2), Math.max(1, metrics.cell - metrics.dpr * 2));
  }

  private boardInset(): number {
    return parseFloat(getComputedStyle(this.root).getPropertyValue('--life-board-inset')) || 0;
  }
}
