export interface RenewalResult {
    total: number;
    skin: number;
    bone: number;
    organ: number;
    brain: number;
}

export class CellularRenewalEngine {
    private static readonly TURNOVER = {
        skin: 0.1,
        bone: 10,
        organ: 15,
        brain: 90,
    };

    private static readonly MASS_WEIGHTS = {
        skin: 0.30,
        bone: 0.35,
        organ: 0.25,
        brain: 0.10,
    };

    static calculate(age: number): RenewalResult {
        const getReplacement = (t: number, half: number) => {
            const remaining = Math.exp(-Math.log(2) * t / half);
            return (1 - remaining) * 100;
        };

        const pSkin = age < 0.2 ? (age * 100 / 0.2) : 100;
        const pBone = getReplacement(age, this.TURNOVER.bone);
        const pOrgan = getReplacement(age, this.TURNOVER.organ);
        const pBrain = Math.min(15, (age * 15 / 80));

        const total = (
            pSkin * this.MASS_WEIGHTS.skin +
            pBone * this.MASS_WEIGHTS.bone +
            pOrgan * this.MASS_WEIGHTS.organ +
            pBrain * this.MASS_WEIGHTS.brain
        );

        return {
            total: Math.round(total),
            skin: Math.round(pSkin),
            bone: Math.round(pBone),
            organ: Math.round(pOrgan),
            brain: Math.round(pBrain),
        };
    }
}
