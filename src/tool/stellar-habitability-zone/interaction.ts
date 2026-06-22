interface InteractionParams {
  canvasContainer: HTMLElement;
  distInput: HTMLInputElement;
  presetBtns: NodeListOf<Element>;
  getCurDistanceAu: () => number;
  getCurMaxLimit: () => number;
  getCurRunawayLimit: () => number;
  onUpdate: () => void;
}

function handleInteraction(clientX: number, clientY: number, p: InteractionParams) {
  const rect = p.canvasContainer.getBoundingClientRect();
  const distPx = Math.sqrt(Math.pow(clientX - rect.left - p.canvasContainer.clientWidth / 2, 2) + Math.pow(clientY - rect.top - p.canvasContainer.clientHeight / 2, 2));
  const maxDist = Math.max(p.getCurDistanceAu() * 1.3, p.getCurMaxLimit() * 1.25);
  const scale = (Math.min(p.canvasContainer.clientWidth, p.canvasContainer.clientHeight) * 0.4) / maxDist;
  p.distInput.value = Math.log10(Math.max(0.01, Math.min(1000, distPx / scale))).toFixed(2);
  p.presetBtns.forEach(b => b.classList.remove('active'));
  p.onUpdate();
}

export function setupCanvasInteraction(p: InteractionParams) {
  let isDrawing = false;
  const add = (ev: string, cb: (e: Event) => void) => p.canvasContainer.addEventListener(ev, cb as EventListener);

  add('mousedown', (e) => {
    isDrawing = true;
    handleInteraction((e as MouseEvent).clientX, (e as MouseEvent).clientY, p);
  });
  add('mousemove', (e) => {
    if (isDrawing) handleInteraction((e as MouseEvent).clientX, (e as MouseEvent).clientY, p);
  });
  window.addEventListener('mouseup', () => { isDrawing = false; });
  add('touchstart', (e) => {
    const te = e as TouchEvent;
    if (te.touches.length > 0) {
      isDrawing = true;
      handleInteraction(te.touches[0].clientX, te.touches[0].clientY, p);
    }
  });
  add('touchmove', (e) => {
    const te = e as TouchEvent;
    if (isDrawing && te.touches.length > 0) handleInteraction(te.touches[0].clientX, te.touches[0].clientY, p);
  });
  add('touchend', () => { isDrawing = false; });
}
