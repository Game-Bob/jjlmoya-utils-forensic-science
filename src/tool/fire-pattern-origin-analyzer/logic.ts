export interface FirePoint {
  x: number;
  y: number;
}

export interface FireVector {
  id: string;
  start: FirePoint;
  end: FirePoint;
  pattern: 'vPattern' | 'deepChar' | 'sootShadow' | 'cleanBurn';
  confidence: number;
}

export interface FireOriginEstimate {
  origin: FirePoint;
  radius: number;
  confidence: number;
  intersections: FirePoint[];
  vectorCount: number;
  statusKey: 'needsMoreVectors' | 'wideArea' | 'focusedArea';
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function distance(a: FirePoint, b: FirePoint): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function average(points: FirePoint[]): FirePoint {
  if (points.length === 0) return { x: 50, y: 50 };
  const total = points.reduce(
    (sum, point) => ({ x: sum.x + point.x, y: sum.y + point.y }),
    { x: 0, y: 0 },
  );
  return { x: total.x / points.length, y: total.y / points.length };
}

function lineIntersection(a: FireVector, b: FireVector): FirePoint | null {
  const x1 = a.start.x;
  const y1 = a.start.y;
  const x2 = a.end.x;
  const y2 = a.end.y;
  const x3 = b.start.x;
  const y3 = b.start.y;
  const x4 = b.end.x;
  const y4 = b.end.y;
  const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  if (Math.abs(denominator) < 0.0001) return null;

  const determinantA = x1 * y2 - y1 * x2;
  const determinantB = x3 * y4 - y3 * x4;

  return {
    x: ((determinantA * (x3 - x4)) - ((x1 - x2) * determinantB)) / denominator,
    y: ((determinantA * (y3 - y4)) - ((y1 - y2) * determinantB)) / denominator,
  };
}

function usableVectors(vectors: FireVector[]): FireVector[] {
  return vectors.filter((vector) => distance(vector.start, vector.end) >= 4);
}

function collectIntersections(vectors: FireVector[]): FirePoint[] {
  const intersections: FirePoint[] = [];

  for (let i = 0; i < vectors.length; i += 1) {
    for (let j = i + 1; j < vectors.length; j += 1) {
      const point = lineIntersection(vectors[i], vectors[j]);
      if (!point || point.x < -20 || point.x > 120 || point.y < -20 || point.y > 120) continue;
      intersections.push({
        x: clamp(point.x, 0, 100),
        y: clamp(point.y, 0, 100),
      });
    }
  }

  return intersections;
}

function estimateWithoutIntersections(vectors: FireVector[]): FireOriginEstimate {
  return {
    origin: average(vectors.map((vector) => vector.end)),
    radius: 24,
    confidence: vectors.length >= 2 ? 28 : 12,
    intersections: [],
    vectorCount: vectors.length,
    statusKey: 'needsMoreVectors',
  };
}

function estimateWithIntersections(vectors: FireVector[], intersections: FirePoint[]): FireOriginEstimate {
  const origin = average(intersections);
  const spread = intersections.reduce((sum, point) => sum + distance(point, origin), 0) / intersections.length;
  const radius = clamp(spread + (vectors.length < 3 ? 14 : 6), 5, 30);
  const meanConfidence = vectors.reduce((sum, vector) => sum + vector.confidence, 0) / vectors.length;
  const convergenceScore = clamp(100 - radius * 2.4, 18, 96);
  const confidence = Math.round((convergenceScore * 0.68) + (meanConfidence * 0.32));

  return {
    origin,
    radius,
    confidence,
    intersections,
    vectorCount: vectors.length,
    statusKey: confidence >= 68 && radius <= 15 ? 'focusedArea' : 'wideArea',
  };
}

export class FireOriginEstimator {
  estimate(vectors: FireVector[]): FireOriginEstimate {
    const filteredVectors = usableVectors(vectors);
    const intersections = collectIntersections(filteredVectors);

    if (intersections.length === 0) {
      return estimateWithoutIntersections(filteredVectors);
    }

    return estimateWithIntersections(filteredVectors, intersections);
  }
}
