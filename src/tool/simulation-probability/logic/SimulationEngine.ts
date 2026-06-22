import {
    VERDICTS_ES,
    VERDICTS_EN,
    VERDICTS_FR,
    DEFAULT_VERDICT_ES,
    DEFAULT_VERDICT_EN,
    DEFAULT_VERDICT_FR,
    type VerdictLevel,
} from '../constants';

export interface SimulationResult {
    probability: number;
    verdict: string;
    detail: string;
}

export class SimulationEngine {
    private lang: string = 'es';

    constructor(lang: string = 'es') {
        this.lang = lang;
    }

    setLanguage(lang: string) {
        this.lang = lang;
    }

    private getVerdicts(): VerdictLevel[] {
        switch (this.lang) {
            case 'en':
                return VERDICTS_EN;
            case 'fr':
                return VERDICTS_FR;
            case 'es':
            default:
                return VERDICTS_ES;
        }
    }

    private getDefaultVerdict() {
        switch (this.lang) {
            case 'en':
                return DEFAULT_VERDICT_EN;
            case 'fr':
                return DEFAULT_VERDICT_FR;
            case 'es':
            default:
                return DEFAULT_VERDICT_ES;
        }
    }

    calculate(
        fp: number,
        fl: number,
        fi: number,
        n: number
    ): SimulationResult {

        const numerator = fp * fl * fi * n;
        const pSim = numerator / (1 + numerator);
        const percentage = pSim * 100;

        const verdicts = this.getVerdicts();
        const defaultVerdict = this.getDefaultVerdict();

        let verdict = defaultVerdict.verdict;
        let detail = defaultVerdict.detail;

        for (const v of verdicts) {
            if (percentage > v.percentage) {
                verdict = v.verdict;
                detail = v.detail;
                break;
            }
        }

        return {
            probability: percentage,
            verdict,
            detail,
        };
    }
}
