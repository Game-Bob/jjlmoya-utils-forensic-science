export type FingerprintPattern = 'arch' | 'loop' | 'whorl';
export type MinutiaType = 'ridgeEnding' | 'bifurcation' | 'island' | 'dot';

export const limits: Record<MinutiaType, number> = {
  ridgeEnding: 5,
  bifurcation: 3,
  island: 2,
  dot: 2,
};

export const colors: Record<MinutiaType, string> = {
  ridgeEnding: '#ef4444',
  bifurcation: '#0ea5e9',
  island: '#f59e0b',
  dot: '#22c55e',
};

export interface MinutiaMark {
  id: string;
  type: MinutiaType;
  x: number;
  y: number;
}

export interface FingerprintClassification {
  pattern: FingerprintPattern;
  henryLabel: string;
  confidence: number;
  ridgeFlow: string;
}

export interface MinutiaeSummary {
  total: number;
  byType: Record<MinutiaType, number>;
  validationScore: number;
  checklist: {
    ridgeEndings: boolean;
    bifurcations: boolean;
    diversity: boolean;
  };
}

export class MinutiaeState {
  private marks: MinutiaMark[] = [];

  addMark(type: MinutiaType, x: number, y: number): MinutiaMark {
    const mark = {
      id: `m-${Date.now()}-${Math.round(x * 10)}-${Math.round(y * 10)}`,
      type,
      x: clamp(x, 0, 100),
      y: clamp(y, 0, 100),
    };
    this.marks = [...this.marks, mark];
    return mark;
  }

  removeMark(id: string): void {
    this.marks = this.marks.filter((mark) => mark.id !== id);
  }

  clear(): void {
    this.marks = [];
  }

  replace(marks: MinutiaMark[]): void {
    this.marks = marks
      .filter((mark) => isMinutiaType(mark.type))
      .map((mark) => ({
        id: mark.id,
        type: mark.type,
        x: clamp(mark.x, 0, 100),
        y: clamp(mark.y, 0, 100),
      }));
  }

  list(): MinutiaMark[] {
    return [...this.marks];
  }

  summarize(): MinutiaeSummary {
    const byType: Record<MinutiaType, number> = {
      ridgeEnding: 0,
      bifurcation: 0,
      island: 0,
      dot: 0,
    };

    this.marks.forEach((mark) => {
      byType[mark.type] += 1;
    });

    const checklist = {
      ridgeEndings: byType.ridgeEnding >= 5,
      bifurcations: byType.bifurcation >= 3,
      diversity: Object.values(byType).filter((count) => count > 0).length >= 3,
    };
    const validationScore = Math.round(
      (Math.min(byType.ridgeEnding / 5, 1) * 42)
      + (Math.min(byType.bifurcation / 3, 1) * 36)
      + (checklist.diversity ? 22 : 0),
    );

    return {
      total: this.marks.length,
      byType,
      validationScore,
      checklist,
    };
  }

  canAdd(type: MinutiaType): boolean {
    return this.summarize().byType[type] < limits[type];
  }

  lastMark(): MinutiaMark | null {
    return this.marks[this.marks.length - 1] ?? null;
  }

  findMarkAt(x: number, y: number, canvasWidth: number, canvasHeight: number): MinutiaMark | null {
    return [...this.marks].reverse().find((mark) => {
      const markX = (mark.x / 100) * canvasWidth;
      const markY = (mark.y / 100) * canvasHeight;
      return Math.hypot(markX - x, markY - y) <= 18;
    }) ?? null;
  }

  firstAvailableMinutia(): MinutiaType | null {
    return (['ridgeEnding', 'bifurcation', 'island', 'dot'] as MinutiaType[]).find((type) => this.canAdd(type)) ?? null;
  }
}

export class FingerprintClassifier {
  classify(pattern: FingerprintPattern, coreOffset: number, deltaCount: number): FingerprintClassification {
    if (pattern === 'arch') {
      return {
        pattern,
        henryLabel: 'plainArch',
        confidence: Math.round(clamp(88 - deltaCount * 11 - Math.abs(coreOffset) * 0.3, 54, 96)),
        ridgeFlow: 'archFlow',
      };
    }

    if (pattern === 'loop') {
      const side = coreOffset >= 0 ? 'ulnarLoop' : 'radialLoop';
      return {
        pattern,
        henryLabel: side,
        confidence: Math.round(clamp(82 + Math.min(deltaCount, 1) * 9 - Math.abs(coreOffset - 18) * 0.2, 58, 97)),
        ridgeFlow: 'loopFlow',
      };
    }

    return {
      pattern,
      henryLabel: deltaCount >= 2 ? 'plainWhorl' : 'centralPocketWhorl',
      confidence: Math.round(clamp(74 + Math.min(deltaCount, 2) * 10 - Math.abs(coreOffset) * 0.12, 55, 98)),
      ridgeFlow: 'whorlFlow',
    };
  }
}

function isMinutiaType(value: string): value is MinutiaType {
  return value === 'ridgeEnding' || value === 'bifurcation' || value === 'island' || value === 'dot';
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
