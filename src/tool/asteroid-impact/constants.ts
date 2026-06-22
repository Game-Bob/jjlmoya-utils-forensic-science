export interface VerdictConfig {
	text: string;
	label: string;
	iconId: string;
	class: string;
}

export const VERDICT_CONFIGS: Record<string, VerdictConfig> = {
	safe: {
		text: "ZONA SEGURA",
		label: "Sin amenazas",
		iconId: "icon-safe",
		class: "asteroid-verdict-safe",
	},
	shook: {
		text: "ONDA DE CHOQUE",
		label: "Daños estructurales",
		iconId: "icon-shock",
		class: "asteroid-verdict-shock",
	},
	burned: {
		text: "RADIACIÓN TÉRMICA",
		label: "Peligro extremo",
		iconId: "icon-burn",
		class: "asteroid-verdict-burned",
	},
	vaporized: {
		text: "ZONA CERO",
		label: "Impacto directo",
		iconId: "icon-death",
		class: "asteroid-verdict-vaporized",
	},
};

export interface Labels {
	searching: string;
	gpsActive: string;
	gpsError: string;
	verdictSafe: string;
	verdictSafeSub: string;
	verdictShock: string;
	verdictShockSub: string;
	verdictBurned: string;
	verdictBurnedSub: string;
	verdictVaporized: string;
	verdictVaporizedSub: string;
	rock: string;
	iron: string;
	ice: string;
}

export const DEFAULT_LABELS: Labels = {
	searching: "Searching...",
	gpsActive: "GPS Active",
	gpsError: "GPS Error",
	verdictSafe: "SAFE",
	verdictSafeSub: "No threat",
	verdictShock: "SHOCK",
	verdictShockSub: "Damage",
	verdictBurned: "BURNED",
	verdictBurnedSub: "Extreme",
	verdictVaporized: "ZERO",
	verdictVaporizedSub: "Vaporized",
	rock: "Rock",
	iron: "Iron",
	ice: "Ice",
};
