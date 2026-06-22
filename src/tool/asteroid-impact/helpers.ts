import { type Composition } from "./logic/impactPhysics";

export function formatSize(diameter: number): string {
	return diameter >= 1000 ? `${(diameter / 1000).toFixed(1)} km` : `${diameter}m`;
}

export function getTypeLabel(composition: Composition): string {
	if (composition === "ice") return "Hielo";
	if (composition === "iron") return "Hierro";
	return "Roca";
}

export function getCompositionColor(composition: Composition): string {
	if (composition === "ice") return "#67e8f9";
	if (composition === "iron") return "#1e293b";
	return "#64748b";
}
