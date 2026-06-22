export interface BodyState {
  id: string;
  label: string;
  mass: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

export interface ThreeBodyMetrics {
  kineticEnergy: number;
  potentialEnergy: number;
  totalEnergy: number;
  centerOfMassX: number;
  centerOfMassY: number;
  maxSeparation: number;
  minSeparation: number;
}

export interface SimulationSnapshot {
  bodies: BodyState[];
  metrics: ThreeBodyMetrics;
}

export interface ThreeBodyPreset {
  id: string;
  bodies: BodyState[];
  timeStep: number;
  trailLength: number;
  zoom: number;
}

interface SeparationMetrics {
  potentialEnergy: number;
  maxSeparation: number;
  minSeparation: number;
}

const GRAVITATIONAL_CONSTANT = 1;
const SOFTENING = 0.035;

export const THREE_BODY_PRESETS: ThreeBodyPreset[] = [
  {
    id: 'figureEight',
    timeStep: 0.012,
    trailLength: 720,
    zoom: 145,
    bodies: [
      { id: 'body-a', label: 'A', mass: 1, x: -0.97000436, y: 0.24308753, vx: 0.46620369, vy: 0.43236573, color: '#b85b62' },
      { id: 'body-b', label: 'B', mass: 1, x: 0.97000436, y: -0.24308753, vx: 0.46620369, vy: 0.43236573, color: '#2f7f8d' },
      { id: 'body-c', label: 'C', mass: 1, x: 0, y: 0, vx: -0.93240737, vy: -0.86473146, color: '#a9853d' },
    ],
  },
  {
    id: 'lagrange',
    timeStep: 0.014,
    trailLength: 620,
    zoom: 155,
    bodies: [
      { id: 'body-a', label: 'A', mass: 1.2, x: 0, y: 1, vx: -0.54, vy: 0, color: '#b85b62' },
      { id: 'body-b', label: 'B', mass: 1.2, x: -0.866, y: -0.5, vx: 0.27, vy: -0.468, color: '#2f7f8d' },
      { id: 'body-c', label: 'C', mass: 1.2, x: 0.866, y: -0.5, vx: 0.27, vy: 0.468, color: '#a9853d' },
    ],
  },
  {
    id: 'slingshot',
    timeStep: 0.01,
    trailLength: 520,
    zoom: 120,
    bodies: [
      { id: 'body-a', label: 'A', mass: 2.5, x: -0.45, y: 0, vx: 0, vy: -0.24, color: '#b85b62' },
      { id: 'body-b', label: 'B', mass: 1, x: 0.72, y: 0.1, vx: -0.2, vy: 0.66, color: '#2f7f8d' },
      { id: 'body-c', label: 'C', mass: 0.35, x: 0.16, y: -1.22, vx: 1.18, vy: 0.25, color: '#a9853d' },
    ],
  },
];

export class ThreeBodyEngine {
  public cloneBodies(bodies: BodyState[]): BodyState[] {
    return bodies.map((body) => ({ ...body }));
  }

  public step(bodies: BodyState[], dt: number): SimulationSnapshot {
    const accelerations = this.calculateAccelerations(bodies);
    const halfStepBodies = bodies.map((body, index) => ({
      ...body,
      vx: body.vx + accelerations[index].ax * dt * 0.5,
      vy: body.vy + accelerations[index].ay * dt * 0.5,
    }));

    const movedBodies = halfStepBodies.map((body) => ({
      ...body,
      x: body.x + body.vx * dt,
      y: body.y + body.vy * dt,
    }));

    const nextAccelerations = this.calculateAccelerations(movedBodies);
    const nextBodies = movedBodies.map((body, index) => ({
      ...body,
      vx: body.vx + nextAccelerations[index].ax * dt * 0.5,
      vy: body.vy + nextAccelerations[index].ay * dt * 0.5,
    }));

    return {
      bodies: nextBodies,
      metrics: this.calculateMetrics(nextBodies),
    };
  }

  public calculateMetrics(bodies: BodyState[]): ThreeBodyMetrics {
    let kineticEnergy = 0;
    let totalMass = 0;
    let weightedX = 0;
    let weightedY = 0;

    bodies.forEach((body) => {
      kineticEnergy += 0.5 * body.mass * (body.vx * body.vx + body.vy * body.vy);
      totalMass += body.mass;
      weightedX += body.mass * body.x;
      weightedY += body.mass * body.y;
    });

    const separation = this.calculateSeparationMetrics(bodies);

    return {
      kineticEnergy,
      potentialEnergy: separation.potentialEnergy,
      totalEnergy: kineticEnergy + separation.potentialEnergy,
      centerOfMassX: weightedX / totalMass,
      centerOfMassY: weightedY / totalMass,
      maxSeparation: separation.maxSeparation,
      minSeparation: separation.minSeparation,
    };
  }

  private calculateSeparationMetrics(bodies: BodyState[]): SeparationMetrics {
    let potentialEnergy = 0;
    let maxSeparation = 0;
    let minSeparation = Number.POSITIVE_INFINITY;

    for (let i = 0; i < bodies.length; i += 1) {
      for (let j = i + 1; j < bodies.length; j += 1) {
        const dx = bodies[j].x - bodies[i].x;
        const dy = bodies[j].y - bodies[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy + SOFTENING * SOFTENING);
        potentialEnergy -= (GRAVITATIONAL_CONSTANT * bodies[i].mass * bodies[j].mass) / distance;
        maxSeparation = Math.max(maxSeparation, distance);
        minSeparation = Math.min(minSeparation, distance);
      }
    }

    return {
      potentialEnergy,
      maxSeparation,
      minSeparation,
    };
  }

  private calculateAccelerations(bodies: BodyState[]) {
    return bodies.map((body, index) => {
      let ax = 0;
      let ay = 0;

      bodies.forEach((other, otherIndex) => {
        if (index === otherIndex) return;
        const dx = other.x - body.x;
        const dy = other.y - body.y;
        const softenedDistanceSquared = dx * dx + dy * dy + SOFTENING * SOFTENING;
        const inverseDistanceCubed = 1 / Math.pow(softenedDistanceSquared, 1.5);
        ax += GRAVITATIONAL_CONSTANT * other.mass * dx * inverseDistanceCubed;
        ay += GRAVITATIONAL_CONSTANT * other.mass * dy * inverseDistanceCubed;
      });

      return { ax, ay };
    });
  }
}
