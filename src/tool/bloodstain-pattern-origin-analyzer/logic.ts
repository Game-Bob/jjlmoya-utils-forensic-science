export interface BloodstainInput {
  id: string;
  xCm: number;
  yCm: number;
  widthCm: number;
  lengthCm: number;
  rotationDeg: number;
}

export interface TrajectoryLine {
  stain: BloodstainInput;
  impactAngleDeg: number;
  originPoint: Vector3;
  direction: Vector3;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface OriginEstimate {
  point: Vector3;
  spreadCm: number;
  confidence: 'low' | 'medium' | 'high';
  lines: TrajectoryLine[];
}

const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function normalize(vector: Vector3): Vector3 {
  const length = Math.hypot(vector.x, vector.y, vector.z) || 1;
  return { x: vector.x / length, y: vector.y / length, z: vector.z / length };
}

function dot(a: Vector3, b: Vector3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function subtract(a: Vector3, b: Vector3): Vector3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

function add(a: Vector3, b: Vector3): Vector3 {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

function scale(vector: Vector3, factor: number): Vector3 {
  return { x: vector.x * factor, y: vector.y * factor, z: vector.z * factor };
}

function distance(a: Vector3, b: Vector3): number {
  return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}

export class BloodstainCalculator {
  calculateImpactAngleDeg(widthCm: number, lengthCm: number): number {
    if (widthCm <= 0 || lengthCm <= 0) return 0;
    const ratio = clamp(widthCm / lengthCm, 0, 1);
    return Math.asin(ratio) * RAD_TO_DEG;
  }

  createTrajectory(stain: BloodstainInput): TrajectoryLine {
    const impactAngleDeg = this.calculateImpactAngleDeg(stain.widthCm, stain.lengthCm);
    const angle = stain.rotationDeg * DEG_TO_RAD;
    const elevation = Math.max(impactAngleDeg, 2) * DEG_TO_RAD;
    const planar = Math.cos(elevation);

    return {
      stain,
      impactAngleDeg,
      originPoint: { x: stain.xCm, y: stain.yCm, z: 0 },
      direction: normalize({
        x: -Math.sin(angle) * planar,
        y: Math.cos(angle) * planar,
        z: Math.sin(elevation),
      }),
    };
  }

  createTrajectories(stains: BloodstainInput[]): TrajectoryLine[] {
    return stains.map((stain) => this.createTrajectory(stain));
  }
}

export class ConvergenceResolver {
  resolve(lines: TrajectoryLine[]): OriginEstimate {
    if (lines.length === 0) {
      return { point: { x: 0, y: 0, z: 0 }, spreadCm: 0, confidence: 'low', lines };
    }

    let estimate = lines.reduce<Vector3>((sum, line) => add(sum, line.originPoint), { x: 0, y: 0, z: 80 });
    estimate = scale(estimate, 1 / lines.length);

    for (let iteration = 0; iteration < 16; iteration++) {
      let next = { x: 0, y: 0, z: 0 };
      for (const line of lines) {
        next = add(next, this.closestPointOnLine(estimate, line));
      }
      estimate = scale(next, 1 / lines.length);
    }

    const distances = lines.map((line) => distance(estimate, this.closestPointOnLine(estimate, line)));
    const spreadCm = distances.reduce((sum, item) => sum + item, 0) / Math.max(distances.length, 1);

    return {
      point: estimate,
      spreadCm,
      confidence: this.confidenceFromSpread(spreadCm),
      lines,
    };
  }

  private confidenceFromSpread(spreadCm: number): OriginEstimate['confidence'] {
    if (spreadCm < 8) return 'high';
    if (spreadCm < 20) return 'medium';
    return 'low';
  }

  private closestPointOnLine(point: Vector3, line: TrajectoryLine): Vector3 {
    const offset = subtract(point, line.originPoint);
    const t = dot(offset, line.direction);
    return add(line.originPoint, scale(line.direction, Math.max(0, t)));
  }
}

export function analyzeBloodstains(stains: BloodstainInput[]): OriginEstimate {
  const calculator = new BloodstainCalculator();
  const resolver = new ConvergenceResolver();
  return resolver.resolve(calculator.createTrajectories(stains));
}
