import { ThreeBodyEngine, THREE_BODY_PRESETS, type BodyState } from './logic/ThreeBodyEngine';

export function initThreeBodyProblem() {
  const root = document.getElementById('three-body-root');
  if (root) {
    const canvas = document.getElementById('three-body-canvas') as HTMLCanvasElement;
    const controls = document.getElementById('three-body-controls');
    const toggleButton = document.getElementById('three-body-toggle');
    const resetButton = document.getElementById('three-body-reset');
    const speedInput = document.getElementById('three-body-speed') as HTMLInputElement;
    const trailInput = document.getElementById('three-body-trail') as HTMLInputElement;
    const energyValue = document.getElementById('three-body-energy');
    const separationValue = document.getElementById('three-body-separation');
    const centerValue = document.getElementById('three-body-center');
    const presetButtons = Array.from(document.querySelectorAll('.three-body-preset'));
    const tabButtons = Array.from(document.querySelectorAll('.three-body-tab'));
    const engine = new ThreeBodyEngine();
    let activePreset = THREE_BODY_PRESETS[0];
    let bodies = engine.cloneBodies(activePreset.bodies);
    let trails = bodies.map(() => [] as Array<{ x: number; y: number }>);
    let isRunning = true;
    let animationFrame = 0;
    let zoom = activePreset.zoom;
    let activeBodyIndex = 0;
    const labels = {
      pause: root.dataset.pauseLabel ?? 'Pause',
      play: root.dataset.playLabel ?? 'Play',
    };

    function setPreset(presetId: string) {
      const selectedPreset = THREE_BODY_PRESETS.find((preset) => preset.id === presetId) ?? THREE_BODY_PRESETS[0];
      activePreset = selectedPreset;
      bodies = engine.cloneBodies(selectedPreset.bodies);
      trails = bodies.map(() => []);
      zoom = selectedPreset.zoom;
      trailInput.value = selectedPreset.trailLength.toString();
      renderControls();
      updatePresetButtons(presetId);
    }
    function updatePresetButtons(presetId: string) {
      presetButtons.forEach((button) => {
        button.classList.toggle('is-active', button.getAttribute('data-preset') === presetId);
      });
    }
    function renderControls() {
      if (!controls) return;
      controls.innerHTML = '';
      bodies.forEach((body, index) => {
        controls.appendChild(createBodyPanel(body, index));
      });
      bindBodyInputs(controls.querySelectorAll('input'));
      bindScrubbableInputs(controls.querySelectorAll('.three-body-scrub-input'));
    }
    function createBodyPanel(body: BodyState, index: number) {
      const panel = document.createElement('article');
      panel.className = 'three-body-panel';
      panel.classList.toggle('is-active', index === activeBodyIndex);
      panel.style.setProperty('--body-color', body.color);
      panel.dataset.bodyLabel = body.label;
      panel.dataset.bodyIndex = index.toString();
      panel.innerHTML = `
        <div class="three-body-panel-title">
          <strong style="color: ${body.color}">${body.label}</strong>
        </div>
        ${renderScrubInput({ index, field: 'mass', label: 'm', min: 0.2, max: 4, value: body.mass, step: 0.05, color: body.color })}
        ${renderScrubInput({ index, field: 'vx', label: 'v_x', min: -1.6, max: 1.6, value: body.vx, step: 0.01, color: body.color })}
        ${renderScrubInput({ index, field: 'vy', label: 'v_y', min: -1.6, max: 1.6, value: body.vy, step: 0.01, color: body.color })}
      `;
      return panel;
    }
    function bindBodyInputs(inputs: NodeListOf<Element>) {
      inputs.forEach((input) => {
        input.addEventListener('input', () => {
          const slider = input as HTMLInputElement;
          const bodyIndex = Number(slider.dataset.bodyIndex);
          const field = slider.dataset.field as keyof BodyState;
          const value = clampToInput(slider, Number(slider.value));
          if (Number.isFinite(bodyIndex) && field) {
            bodies[bodyIndex] = { ...bodies[bodyIndex], [field]: value };
            trails[bodyIndex] = [];
            slider.value = formatInputValue(value, slider);
          }
        });
      });
    }
    function setActiveBody(index: number) {
      activeBodyIndex = index;
      tabButtons.forEach((button) => {
        button.classList.toggle('is-active', Number((button as HTMLElement).dataset.bodyTab) === index);
      });
      controls?.querySelectorAll('.three-body-panel').forEach((panel) => {
        panel.classList.toggle('is-active', Number((panel as HTMLElement).dataset.bodyIndex) === index);
      });
    }
    interface ScrubInputConfig {
      index: number;
      field: string;
      label: string;
      min: number;
      max: number;
      value: number;
      step: number;
      color: string;
    }
    function renderScrubInput(config: ScrubInputConfig) {
      const value = formatInputValue(config.value, { dataset: { step: config.step.toString() } } as HTMLInputElement);
      return `
        <label class="three-body-scrub-row">
          <span>${config.label}</span>
          <input class="three-body-scrub-input" style="color: ${config.color}" data-body-index="${config.index}" data-field="${config.field}" data-min="${config.min}" data-max="${config.max}" data-step="${config.step}" inputmode="decimal" value="${value}" />
        </label>
      `;
    }
    function formatInputValue(value: number, input: HTMLInputElement) {
      const step = Number(input.dataset.step) || 0.01;
      const decimals = step >= 1 ? 0 : Math.max(0, step.toString().split('.')[1]?.length ?? 2);
      return value.toFixed(decimals);
    }
    function clampToInput(input: HTMLInputElement, value: number) {
      const min = Number(input.dataset.min);
      const max = Number(input.dataset.max);
      if (!Number.isFinite(value)) return Number(input.value) || 0;
      return Math.min(max, Math.max(min, value));
    }
    function bindScrubbableInputs(inputs: NodeListOf<Element>) {
      inputs.forEach((inputElement) => {
        const input = inputElement as HTMLInputElement;
        let startX = 0;
        let startValue = 0;
        let dragged = false;

        input.addEventListener('pointerdown', (event) => {
          startX = event.clientX;
          startValue = Number(input.value) || 0;
          dragged = false;
          input.setPointerCapture(event.pointerId);
        });
        input.addEventListener('pointermove', (event) => {
          if (!input.hasPointerCapture(event.pointerId)) return;
          const delta = event.clientX - startX;
          if (Math.abs(delta) < 2) return;
          dragged = true;
          const step = Number(input.dataset.step) || 0.01;
          const nextValue = clampToInput(input, startValue + delta * step);
          input.value = formatInputValue(nextValue, input);
          input.dispatchEvent(new Event('input', { bubbles: true }));
        });
        input.addEventListener('pointerup', (event) => {
          if (input.hasPointerCapture(event.pointerId)) input.releasePointerCapture(event.pointerId);
          if (dragged) input.blur();
        });
      });
    }
    function draw() {
      const context = canvas.getContext('2d');
      if (!context) return;

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.scale(dpr, dpr);
      context.clearRect(0, 0, width, height);

      const originX = width / 2;
      const originY = height / 2;
      const origin = { x: originX, y: originY };
      drawGrid(context, width, height, origin);
      bodies.forEach((body, index) => drawBody(context, body, trails[index], origin));
    }
    function drawBody(context: CanvasRenderingContext2D, body: BodyState, trail: Array<{ x: number; y: number }>, origin: { x: number; y: number }) {
      drawTrail(context, body, trail, origin);
      drawBodyGlow(context, body, origin);
    }
    function drawTrail(context: CanvasRenderingContext2D, body: BodyState, trail: Array<{ x: number; y: number }>, origin: { x: number; y: number }) {
      context.beginPath();
      trail.forEach((point, pointIndex) => {
        const screenX = origin.x + point.x * zoom;
        const screenY = origin.y + point.y * zoom;
        if (pointIndex === 0) context.moveTo(screenX, screenY);
        else context.lineTo(screenX, screenY);
      });
      context.strokeStyle = body.color;
      context.globalAlpha = 0.82;
      context.lineWidth = 1.85;
      context.shadowColor = body.color;
      context.shadowBlur = 2.5;
      context.stroke();
      context.shadowBlur = 0;
      context.globalAlpha = 1;
    }
    function drawBodyGlow(context: CanvasRenderingContext2D, body: BodyState, origin: { x: number; y: number }) {
      const x = origin.x + body.x * zoom;
      const y = origin.y + body.y * zoom;
      const radius = Math.max(4, Math.sqrt(body.mass) * 5);
      const glow = context.createRadialGradient(x, y, 2, x, y, radius * 3);
      glow.addColorStop(0, body.color);
      glow.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(x, y, radius * 3, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = body.color;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }
    function drawGrid(context: CanvasRenderingContext2D, width: number, height: number, origin: { x: number; y: number }) {
      const isDark = document.documentElement.classList.contains('theme-dark') || document.body.classList.contains('theme-dark');
      context.strokeStyle = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(67, 56, 43, 0.12)';
      context.lineWidth = 1;
      for (let x = origin.x % 48; x < width; x += 48) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = origin.y % 48; y < height; y += 48) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
    }
    function updateReadout() {
      const metrics = engine.calculateMetrics(bodies);
      if (energyValue) energyValue.textContent = metrics.totalEnergy.toFixed(3);
      if (separationValue) separationValue.textContent = `${metrics.minSeparation.toFixed(2)} - ${metrics.maxSeparation.toFixed(2)}`;
      if (centerValue) centerValue.textContent = `${metrics.centerOfMassX.toFixed(2)}, ${metrics.centerOfMassY.toFixed(2)}`;
    }
    function tick() {
      if (isRunning) {
        const speed = Number(speedInput.value) || 1;
        for (let i = 0; i < 3; i += 1) {
          const snapshot = engine.step(bodies, activePreset.timeStep * speed);
          bodies = snapshot.bodies;
        }
        const trailLimit = Number(trailInput.value) || activePreset.trailLength;
        trails.forEach((trail, index) => {
          trail.push({ x: bodies[index].x, y: bodies[index].y });
          if (trail.length > trailLimit) trail.shift();
        });
      }
      updateReadout();
      draw();
      animationFrame = window.requestAnimationFrame(tick);
    }
    presetButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setPreset(button.getAttribute('data-preset') ?? 'figureEight');
      });
    });
    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setActiveBody(Number((button as HTMLElement).dataset.bodyTab) || 0);
      });
    });
    toggleButton?.addEventListener('click', () => {
      isRunning = !isRunning;
      toggleButton.textContent = isRunning ? labels.pause : labels.play;
    });

    resetButton?.addEventListener('click', () => {
      setPreset(activePreset.id);
    });
    bindScrubbableInputs(document.querySelectorAll('.three-body-global-controls .three-body-scrub-input'));
    setPreset('figureEight');
    tick();
    document.addEventListener('astro:before-swap', () => {
      window.cancelAnimationFrame(animationFrame);
    }, { once: true });
  }
}
