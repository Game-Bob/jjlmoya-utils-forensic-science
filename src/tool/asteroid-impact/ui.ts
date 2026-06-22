import { type Composition } from "./logic/impactPhysics";
import { formatSize, getTypeLabel, getCompositionColor } from "./helpers";

let config = {
	diameter: 10000,
	velocity: 20,
	composition: "rock" as Composition,
};

export function getConfig() {
	return config;
}

export function setConfig(newConfig: typeof config) {
	config = newConfig;
}

export function updateMainDisplay() {
	const displaySize = document.getElementById("display-size");
	const displayVel = document.getElementById("display-velocity");
	const sizeInput = document.getElementById("input-size") as HTMLInputElement;
	const velInput = document.getElementById("input-velocity") as HTMLInputElement;

	if (displaySize) displaySize.textContent = formatSize(config.diameter);
	if (displayVel) displayVel.textContent = `${config.velocity} km/s`;
	if (sizeInput) sizeInput.value = config.diameter.toString();
	if (velInput) velInput.value = config.velocity.toString();
}

export function updateParamBadge() {
	const paramSizeVal = document.getElementById("asteroid-param-size-val");
	const paramVelVal = document.getElementById("asteroid-param-vel-val");
	const paramTypeVal = document.getElementById("asteroid-param-type-val");

	if (paramSizeVal) paramSizeVal.textContent = formatSize(config.diameter);
	if (paramVelVal) paramVelVal.textContent = `${config.velocity} km/s`;
	if (paramTypeVal) paramTypeVal.textContent = getTypeLabel(config.composition);
}

export function updateVisual() {
	const visual = document.getElementById("asteroid-visual");
	const surface = document.getElementById("asteroid-surface");
	const scale = 1 + (config.diameter / 5000) * 0.5;

	if (visual) {
		visual.style.transform = `scale(${scale})`;
		visual.classList.toggle("ice-type", config.composition === "ice");
	}

	if (surface) {
		const spinDuration = Math.max(2, 8 - (config.velocity / 10));
		surface.style.animation = `asteroid-spin ${spinDuration}s linear infinite`;
		surface.style.background = getCompositionColor(config.composition);
	}
}

export function updateMaterialButtons() {
	const matBtns = document.querySelectorAll(".asteroid-material-btn");
	matBtns.forEach((btn) => {
		btn.classList.toggle("active", btn.getAttribute("data-type") === config.composition);
	});
}

export function updateUI() {
	updateMainDisplay();
	updateParamBadge();
	updateVisual();
	updateMaterialButtons();
}
