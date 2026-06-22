import {
    INTERFERENCE_LEVELS_ES,
    INTERFERENCE_LEVELS_EN,
    INTERFERENCE_LEVELS_FR,
    CRITICAL_INTERFERENCE_ES,
    CRITICAL_INTERFERENCE_EN,
    CRITICAL_INTERFERENCE_FR,
    type InterferenceLevel,
} from '../constants';

export interface PingResult {
    latency: number;
    jitter: number;
    timestamp: number;
}

export class MicrowaveEngine {
    private lastPings: number[] = [];
    private maxHistory = 100;
    private lang: string = 'es';

    constructor(lang: string = 'es') {
        this.lang = lang;
    }

    setLanguage(lang: string) {
        this.lang = lang;
    }

    private getInterferenceLevels(): InterferenceLevel[] {
        switch (this.lang) {
            case 'en':
                return INTERFERENCE_LEVELS_EN;
            case 'fr':
                return INTERFERENCE_LEVELS_FR;
            case 'es':
            default:
                return INTERFERENCE_LEVELS_ES;
        }
    }

    private getCriticalInterference() {
        switch (this.lang) {
            case 'en':
                return CRITICAL_INTERFERENCE_EN;
            case 'fr':
                return CRITICAL_INTERFERENCE_FR;
            case 'es':
            default:
                return CRITICAL_INTERFERENCE_ES;
        }
    }

    async measurePing(): Promise<PingResult> {
        const start = performance.now();
        try {
            await fetch(`/?nocache=${Math.random()}`, {
                method: "GET",
                cache: "no-store",
            });
            const end = performance.now();
            const latency = end - start;

            this.lastPings.push(latency);
            if (this.lastPings.length > this.maxHistory) this.lastPings.shift();

            const jitter = this.calculateJitter();

            return {
                latency,
                jitter,
                timestamp: Date.now(),
            };
        } catch (e) {
            console.error("Ping failed", e);
            return { latency: 0, jitter: 0, timestamp: Date.now() };
        }
    }

    private calculateJitter(): number {
        if (this.lastPings.length < 2) return 0;
        let diffSum = 0;
        for (let i = 1; i < this.lastPings.length; i++) {
            const current = this.lastPings[i];
            const prev = this.lastPings[i - 1];
            if (current !== undefined && prev !== undefined) {
                diffSum += Math.abs(current - prev);
            }
        }
        return diffSum / (this.lastPings.length - 1);
    }

    getInterferenceLevel(jitter: number): {
        label: string;
        color: string;
        description: string;
    } {
        const levels = this.getInterferenceLevels();
        const level = levels.find((l) => jitter < l.threshold);
        if (level) {
            return { label: level.label, color: level.color, description: level.description };
        }
        return this.getCriticalInterference();
    }
}
