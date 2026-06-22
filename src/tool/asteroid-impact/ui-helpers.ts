import type { Composition } from "./logic/impactPhysics";
import { formatSize, getCompositionLabel, getCompositionColor } from "./utils";

export function updateVisualState(config: { diameter: number; velocity: number; composition: Composition }, visual: HTMLElement | null, surface: HTMLElement | null) {
	const scale = 1 + (config.diameter / 5000) * 0.5;
	if (visual) {
		visual.style.transform = `scale(${scale})`;
		if (config.composition === "ice") {
			visual.classList.add("ice-type");
		} else {
			visual.classList.remove("ice-type");
		}
	}

	if (surface) {
		const spinDuration = Math.max(2, 8 - (config.velocity / 10));
		surface.style.animation = `asteroid-spin ${spinDuration}s linear infinite`;
		surface.style.background = getCompositionColor(config.composition);
	}
}

export function updateMaterialButtons(composition: Composition) {
	const matBtns = document.querySelectorAll(".asteroid-material-btn");
	matBtns.forEach((btn) => {
		if (btn.getAttribute("data-type") === composition) {
			btn.classList.add("active");
		} else {
			btn.classList.remove("active");
		}
	});
}

export function updateControlUI(config: { diameter: number; velocity: number; composition: Composition }) {
	const displaySize = document.getElementById("display-size");
	const displayVel = document.getElementById("display-velocity");
	const sizeInput = document.getElementById("input-size") as HTMLInputElement;
	const velInput = document.getElementById("input-velocity") as HTMLInputElement;

	if (displaySize) displaySize.textContent = formatSize(config.diameter);
	if (displayVel) displayVel.textContent = `${config.velocity} km/s`;
	if (sizeInput) sizeInput.value = config.diameter.toString();
	if (velInput) velInput.value = config.velocity.toString();

	const paramSizeVal = document.getElementById("asteroid-param-size-val");
	const paramVelVal = document.getElementById("asteroid-param-vel-val");
	const paramTypeVal = document.getElementById("asteroid-param-type-val");

	if (paramSizeVal) paramSizeVal.textContent = formatSize(config.diameter);
	if (paramVelVal) paramVelVal.textContent = `${config.velocity} km/s`;
	if (paramTypeVal) paramTypeVal.textContent = getCompositionLabel(config.composition);

	const visual = document.getElementById("asteroid-visual");
	const surface = document.getElementById("asteroid-surface");
	updateVisualState(config, visual, surface);
	updateMaterialButtons(config.composition);
}
