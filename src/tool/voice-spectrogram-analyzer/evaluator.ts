export type SampleState = 'empty' | 'decoding' | 'ready' | 'error';

export interface StageEvaluation {
  key: 'empty' | 'single' | 'ready';
  loadedCount: number;
}

export function evaluateStage(first: SampleState, second: SampleState): StageEvaluation {
  const loadedCount = [first, second].filter((state) => state === 'ready').length;
  if (loadedCount === 0) return { key: 'empty', loadedCount };
  if (loadedCount === 1) return { key: 'single', loadedCount };
  return { key: 'ready', loadedCount };
}
