import { PRIMARY_BODIES, SATELLITE_BODIES, calculateRocheLimit } from './logic';
import { capitalize, capitalizeId, labelFor } from './labels';
import type { PrimaryId, RocheResult, SatelliteId } from './logic';
import { animateParticles, resizeParticleCanvas } from './particle-system';
import type { VisualState } from './particle-system';
import { clearState, restoreState, saveState } from './storage';
import { planetPalettes, satelliteStyles } from './visual-data';

const root = document.getElementById('roche-console') as HTMLElement;
const ui = JSON.parse(root.dataset.ui ?? '{}');
const $ = <T extends HTMLElement | SVGElement>(id: string) => document.getElementById(id) as T;
const refs = {
  primaryName: $('roche-primary-name'),
  primaryDensity: $('roche-primary-density'),
  satelliteName: $('roche-satellite-name'),
  satelliteDensity: $('roche-satellite-density'),
  primaryPicker: $('roche-primary-picker'),
  satellitePicker: $('roche-satellite-picker'),
  primaryTrigger: $('roche-primary-trigger'),
  satelliteTrigger: $('roche-satellite-trigger'),
  primaryMenu: $('roche-primary-menu'),
  satelliteMenu: $('roche-satellite-menu'),
  distanceInput: $('roche-distance') as HTMLInputElement,
  distanceOutput: $('roche-distance-output'),
  verdict: $('roche-verdict'),
  particleCanvas: $('roche-particle-canvas') as HTMLCanvasElement,
  moon: $('roche-moon') as unknown as SVGGElement,
  moonBody: $('roche-moon-body') as unknown as SVGEllipseElement,
  moonScar: $('roche-moon-scar') as unknown as SVGPathElement,
  planet: $('roche-planet') as unknown as SVGCircleElement,
  planetStops: [$('roche-planet-stop-a'), $('roche-planet-stop-b'), $('roche-planet-stop-c')] as SVGElement[],
  orbit: $('roche-orbit') as unknown as SVGCircleElement,
  boundary: $('roche-boundary') as unknown as SVGCircleElement,
  fragments: $('roche-fragments') as unknown as SVGGElement,
  activeLimit: $('roche-active-limit'),
  safetyRatio: $('roche-safety-ratio'),
  period: $('roche-period'),
  ringProgress: $('roche-ring-progress'),
  fluidLimit: $('roche-fluid-limit'),
  rigidLimit: $('roche-rigid-limit'),
  fluidBar: $('roche-fluid-bar'),
  rigidBar: $('roche-rigid-bar'),
  density: $('roche-density'),
  cohesion: $('roche-cohesion'),
  radius: $('roche-radius'),
  mapLabel: $('roche-map-label') as unknown as SVGTextElement,
  closePass: $('roche-close-pass'),
  reset: $('roche-reset'),
};

let selectedPrimary: PrimaryId = 'saturn';
let selectedSatellite: SatelliteId = 'icy-moon';
let latestMoon = { x: 0, y: 0, orbitRadius: 160, progress: 0 };
let latestResult = calculateRocheLimit({ primaryId: selectedPrimary, satelliteId: selectedSatellite, orbitDistanceKm: 140000 });
let orbitPhase = -35;
let visualState: VisualState = 'orbiting';
const verdictLabels: Record<RocheResult['verdict'], string> = {
  stable: ui.stable,
  grazing: ui.grazing,
  fragmenting: ui.fragmenting,
  ring: ui.ring,
};

function formatKm(value: number): string {
  return `${Math.round(value).toLocaleString('en')} ${ui.km}`;
}

function formatValueUnit(value: string, unit: string): string {
  return `<span>${value}</span><small>${unit}</small>`;
}

function setDistanceRange(): void {
  const primary = PRIMARY_BODIES.find((item) => item.id === selectedPrimary) ?? PRIMARY_BODIES[0];
  refs.distanceInput.min = `${Math.round(primary.radiusKm * 1.08)}`;
  refs.distanceInput.max = `${Math.round(primary.radiusKm * 6.2)}`;
  const value = Number(refs.distanceInput.value);
  if (value < Number(refs.distanceInput.min) || value > Number(refs.distanceInput.max)) refs.distanceInput.value = `${Math.round(primary.radiusKm * 3.8)}`;
}

function updateBodyVisuals(): void {
  const palette = planetPalettes[selectedPrimary];
  const satelliteStyle = satelliteStyles[selectedSatellite];
  refs.planetStops.forEach((stop, index) => stop.setAttribute('stop-color', palette.stops[index] ?? palette.stops[0]));
  refs.moonBody.style.fill = satelliteStyle.fill;
  refs.moonBody.style.stroke = satelliteStyle.stroke;
  refs.moonScar.style.stroke = satelliteStyle.scar;
  root.style.setProperty('--planet-line-rgb', palette.line);
}

function visualStateFor(result: RocheResult, stretch: number): VisualState {
  if (result.ringProgress >= 0.6) return 'ringFormed';
  if (result.ringProgress > 0.18) return 'disrupting';
  if (stretch > 0.2) return 'deforming';
  return 'orbiting';
}

function drawFragments(progress: number, orbitRadius: number): void {
  refs.fragments.textContent = '';
  for (let index = 0; index < 18 + Math.round(progress * 54); index += 1) {
    const angle = index * 137.5 + progress * 80;
    const lane = (index % 7) - 3;
    const point = fragmentPoint(angle, orbitRadius, lane, progress);
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', `${point.x.toFixed(2)}`);
    dot.setAttribute('cy', `${point.y.toFixed(2)}`);
    dot.setAttribute('r', `${(1.6 + (index % 4) * 0.7 + progress * 2.4).toFixed(2)}`);
    dot.classList.add('roche-fragment');
    dot.style.setProperty('--delay', `${index * -80}ms`);
    refs.fragments.append(dot);
  }
}

function fragmentPoint(angle: number, orbitRadius: number, lane: number, progress: number): { x: number; y: number } {
  const radians = angle * Math.PI / 180;
  const spread = progress * (18 + Math.abs(lane) * 6);
  return {
    x: 280 + Math.cos(radians) * (orbitRadius + lane * spread),
    y: 280 + Math.sin(radians) * (orbitRadius * 0.31 + lane * spread * 0.22),
  };
}

function updateMoon(result: RocheResult, orbitRadius: number, stretch: number): void {
  const radians = orbitPhase * Math.PI / 180;
  const moonX = 280 + Math.cos(radians) * orbitRadius;
  const moonY = 280 + Math.sin(radians) * orbitRadius * 0.35;
  const moonRx = 22 + stretch * 19;
  const moonRy = 22 - stretch * 8;
  const scale = visualState === 'ringFormed' ? 0.01 : satelliteStyles[selectedSatellite].size * Math.max(0.42, 1 - result.ringProgress * 0.65);
  refs.moon.setAttribute('transform', `translate(${moonX.toFixed(2)} ${moonY.toFixed(2)}) rotate(${(orbitPhase + stretch * 3).toFixed(2)}) scale(${scale.toFixed(2)})`);
  refs.moonBody.setAttribute('rx', `${moonRx.toFixed(2)}`);
  refs.moonBody.setAttribute('ry', `${moonRy.toFixed(2)}`);
  refs.moonScar.setAttribute('d', `M ${(-moonRx * 0.42).toFixed(1)} ${(-moonRy * 0.62).toFixed(1)} C ${(moonRx * 0.2).toFixed(1)} ${(-moonRy * 0.28).toFixed(1)} ${(moonRx * 0.42).toFixed(1)} ${(moonRy * 0.18).toFixed(1)} ${(moonRx * 0.18).toFixed(1)} ${(moonRy * 0.78).toFixed(1)}`);
  setMoonDepth(radians, result.ringProgress);
  latestMoon = { x: moonX, y: moonY, orbitRadius, progress: result.ringProgress };
}

function setMoonDepth(radians: number, ringProgress: number): void {
  const rearOrbit = Math.sin(radians) < 0;
  if (rearOrbit) refs.planet.parentNode?.insertBefore(refs.moon, refs.planet);
  if (!rearOrbit) refs.mapLabel.parentNode?.insertBefore(refs.moon, refs.mapLabel);
  refs.moon.classList.toggle('is-rear', rearOrbit);
  refs.moon.style.opacity = visualState === 'ringFormed' ? '0' : `${Math.max(rearOrbit ? 0.1 : 0.18, (rearOrbit ? 0.38 : 1) - ringProgress * 0.82)}`;
}

function updateReadouts(result: RocheResult): void {
  refs.distanceOutput.textContent = formatKm(Number(refs.distanceInput.value));
  refs.verdict.textContent = verdictLabels[result.verdict];
  refs.activeLimit.innerHTML = formatValueUnit(Math.round(result.selectedLimitKm).toLocaleString('en'), ui.km);
  refs.safetyRatio.innerHTML = formatValueUnit(result.safetyRatio.toFixed(2), 'x');
  refs.period.innerHTML = formatValueUnit(result.orbitalPeriodHours.toFixed(1), ui.hours);
  refs.ringProgress.innerHTML = formatValueUnit(`${Math.round(result.ringProgress * 100)}`, '%');
  refs.fluidLimit.textContent = formatKm(result.fluidLimitKm);
  refs.rigidLimit.textContent = formatKm(result.rigidLimitKm);
  refs.density.textContent = `${ui.density}: ${result.satellite.densityGcm3} g/cm3`;
  refs.cohesion.textContent = `${ui.cohesion}: ${labelFor(ui, `cohesion${capitalize(result.satellite.cohesion)}`, result.satellite.cohesion)}`;
  refs.radius.textContent = `${ui.planetRadius}: ${formatKm(result.primary.radiusKm)}`;
}

function update(persist = true): void {
  setDistanceRange();
  const result = calculateRocheLimit({ primaryId: selectedPrimary, satelliteId: selectedSatellite, orbitDistanceKm: Number(refs.distanceInput.value) });
  const orbitRadius = Math.max(104, Math.min(238, Number(refs.distanceInput.value) * (205 / Number(refs.distanceInput.max))));
  const stretch = Math.min(1, Math.max(0, (1.14 - result.safetyRatio) / 0.42));
  visualState = visualStateFor(result, stretch);
  latestResult = result;
  root.dataset.verdict = result.verdict;
  refs.orbit.setAttribute('r', `${orbitRadius.toFixed(1)}`);
  refs.boundary.setAttribute('r', `${Math.max(96, Math.min(236, result.selectedLimitKm * (205 / Number(refs.distanceInput.max)))).toFixed(1)}`);
  refs.fluidBar.style.width = `${Math.max(8, result.fluidLimitKm / Math.max(result.fluidLimitKm, result.rigidLimitKm) * 100)}%`;
  refs.rigidBar.style.width = `${Math.max(8, result.rigidLimitKm / Math.max(result.fluidLimitKm, result.rigidLimitKm) * 100)}%`;
  refs.mapLabel.textContent = result.ringProgress > 0.35 ? ui.debrisTrack : ui.moonTrack;
  root.style.setProperty('--ring-opacity', `${0.12 + result.ringProgress * 0.78}`);
  root.style.setProperty('--stress', `${Math.min(1, result.tidalStressIndex / 1.4)}`);
  updateBodyVisuals();
  updateMoon(result, orbitRadius, stretch);
  updateReadouts(result);
  drawFragments(result.ringProgress, orbitRadius);
  if (persist) saveState(selectedPrimary, selectedSatellite, Number(refs.distanceInput.value));
}

function syncPickers(): void {
  const primary = PRIMARY_BODIES.find((body) => body.id === selectedPrimary) ?? PRIMARY_BODIES[0];
  const satellite = SATELLITE_BODIES.find((body) => body.id === selectedSatellite) ?? SATELLITE_BODIES[0];
  refs.primaryName.textContent = labelFor(ui, `primary${capitalizeId(primary.id)}`, primary.name);
  refs.primaryDensity.textContent = `${primary.densityGcm3} g/cm3`;
  refs.satelliteName.textContent = labelFor(ui, `satellite${capitalizeId(satellite.id)}`, satellite.name);
  refs.satelliteDensity.textContent = `${satellite.densityGcm3} g/cm3`;
  refs.primaryMenu.querySelectorAll<HTMLButtonElement>('button').forEach((button) => button.classList.toggle('is-selected', button.dataset.value === selectedPrimary));
  refs.satelliteMenu.querySelectorAll<HTMLButtonElement>('button').forEach((button) => button.classList.toggle('is-selected', button.dataset.value === selectedSatellite));
}

function setPickerOpen(picker: HTMLElement, trigger: HTMLElement, open: boolean): void {
  picker.classList.toggle('is-open', open);
  trigger.setAttribute('aria-expanded', `${open}`);
}

function closePickers(): void {
  setPickerOpen(refs.primaryPicker, refs.primaryTrigger, false);
  setPickerOpen(refs.satellitePicker, refs.satelliteTrigger, false);
}

function fillMenus(): void {
  PRIMARY_BODIES.forEach((body) => appendOption({ menu: refs.primaryMenu, value: body.id, name: labelFor(ui, `primary${capitalizeId(body.id)}`, body.name), meta: `${body.densityGcm3} g/cm3`, select: () => {
    selectedPrimary = body.id;
  } }));
  SATELLITE_BODIES.forEach((body) => appendOption({ menu: refs.satelliteMenu, value: body.id, name: labelFor(ui, `satellite${capitalizeId(body.id)}`, body.name), meta: `${body.densityGcm3} g/cm3`, select: () => {
    selectedSatellite = body.id;
  } }));
}

function appendOption(option: { menu: HTMLElement; value: string; name: string; meta: string; select: () => void }): void {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.value = option.value;
  button.innerHTML = `<strong>${option.name}</strong><small>${option.meta}</small>`;
  button.addEventListener('click', () => {
    option.select();
    closePickers();
    syncPickers();
    update();
  });
  option.menu.append(button);
}

function bindEvents(): void {
  refs.distanceInput.addEventListener('input', () => update());
  window.addEventListener('resize', () => resizeParticleCanvas(refs.particleCanvas));
  refs.primaryTrigger.addEventListener('click', () => togglePicker(refs.primaryPicker, refs.primaryTrigger));
  refs.satelliteTrigger.addEventListener('click', () => togglePicker(refs.satellitePicker, refs.satelliteTrigger));
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closePickers();
  });
  refs.closePass.addEventListener('click', closePass);
  refs.reset.addEventListener('click', reset);
}

function togglePicker(picker: HTMLElement, trigger: HTMLElement): void {
  const willOpen = !picker.classList.contains('is-open');
  closePickers();
  setPickerOpen(picker, trigger, willOpen);
}

function closePass(): void {
  refs.distanceInput.value = `${Math.round(latestResult.selectedLimitKm * 0.86)}`;
  update();
}

function reset(): void {
  selectedPrimary = 'saturn';
  selectedSatellite = 'icy-moon';
  refs.distanceInput.value = '140000';
  clearState();
  syncPickers();
  update();
}

function animateOrbit(): void {
  const speed = visualState === 'ringFormed' ? 0 : 0.14 + Math.min(0.34, Math.pow(Math.max(0.2, 1 / latestResult.safetyRatio), 1.5) * 0.08);
  orbitPhase = (orbitPhase + speed) % 360;
  update(false);
  window.requestAnimationFrame(animateOrbit);
}

fillMenus(); refs.distanceInput.value = '140000';
const restoredState = restoreState();
if (restoredState.primaryId) selectedPrimary = restoredState.primaryId;
if (restoredState.satelliteId) selectedSatellite = restoredState.satelliteId;
if (restoredState.orbitDistanceKm) refs.distanceInput.value = `${restoredState.orbitDistanceKm}`;
setDistanceRange();
bindEvents(); syncPickers();
resizeParticleCanvas(refs.particleCanvas);
update();
window.requestAnimationFrame(() => animateParticles(refs.particleCanvas, () => ({ moon: latestMoon, visualState })));
window.requestAnimationFrame(animateOrbit);
