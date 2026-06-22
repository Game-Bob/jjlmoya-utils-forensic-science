export interface Point3D {
  x: number;
  y: number;
  z: number;
}

export interface LorenzParams {
  sigma: number;
  rho: number;
  beta: number;
}

export class LorenzEngine {
  static nextPoint(point: Point3D, params: LorenzParams, dt: number): Point3D {
    const dx = params.sigma * (point.y - point.x) * dt;
    const dy = (point.x * (params.rho - point.z) - point.y) * dt;
    const dz = (point.x * point.y - params.beta * point.z) * dt;

    return {
      x: point.x + dx,
      y: point.y + dy,
      z: point.z + dz,
    };
  }

  static getDistance(p1: Point3D, p2: Point3D): number {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = p1.z - p2.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }
}
