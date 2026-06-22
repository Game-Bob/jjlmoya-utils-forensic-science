export type Composition = "ice" | "rock" | "iron";

export interface ImpactInputs {
    diameter: number;
    distance: number;
    composition: Composition;
    velocity: number;
}

export interface ImpactResults {
    kineticEnergy: number;
    megatons: number;
    craterDiameter: number;
    craterDepth: number;
    thermalRadius: number;
    shockwave1psi: number;
    shockwave5psi: number;
    seismicMagnitude: number;
    airburst: boolean;
    survivalVerdict: "vaporized" | "severe-burns" | "ruptured-eardrums" | "safe";
}

const DENSITIES: Record<Composition, number> = {
    ice: 917,
    rock: 2600,
    iron: 7800,
};

const MEGATONS_PER_JOULE = 2.39e-16;

export class ImpactPhysics {
    private static getMass(diameter: number, composition: Composition): number {
        const radius = diameter / 2;
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        const density = DENSITIES[composition];
        return volume * density;
    }

    private static getEnergy(mass: number, velocity: number): number {
        const kineticEnergy = 0.5 * mass * Math.pow(velocity, 2);
        return kineticEnergy * MEGATONS_PER_JOULE;
    }

    private static getRadius(megatons: number, airburst: boolean): number {
        return airburst ? 0 : Math.pow(megatons, 0.3) * 1000;
    }

    private static getSurvivalVerdict(
        distance: number,
        craterDiameter: number,
        thermalRadius: number,
        shockwave5psi: number
    ): ImpactResults["survivalVerdict"] {
        if (distance < craterDiameter / 2) return "vaporized";
        if (distance < thermalRadius) return "severe-burns";
        if (distance < shockwave5psi) return "ruptured-eardrums";
        return "safe";
    }

    static calculate(inputs: ImpactInputs): ImpactResults {
        const { diameter, distance, composition, velocity } = inputs;
        const mass = this.getMass(diameter, composition);
        const megatons = this.getEnergy(mass, velocity);
        const airburst = diameter < 50;
        const craterDiameter = this.getRadius(megatons, airburst);
        const craterDepth = craterDiameter * 0.3;
        const thermalRadius = Math.pow(megatons, 0.41) * 1000;
        const shockwave1psi = Math.pow(megatons, 0.33) * 2000;
        const shockwave5psi = Math.pow(megatons, 0.33) * 1000;
        const seismicMagnitude = Math.min(0.67 * Math.log10(megatons) + 3.87, 10);
        const survivalVerdict = this.getSurvivalVerdict(distance, craterDiameter, thermalRadius, shockwave5psi);

        return {
            kineticEnergy: 0.5 * mass * Math.pow(velocity, 2),
            megatons,
            craterDiameter,
            craterDepth,
            thermalRadius,
            shockwave1psi,
            shockwave5psi,
            seismicMagnitude,
            airburst,
            survivalVerdict,
        };
    }
}
