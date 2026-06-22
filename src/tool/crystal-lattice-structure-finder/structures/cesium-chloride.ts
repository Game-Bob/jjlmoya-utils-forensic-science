import type { LatticeStructure } from '../data';
import { cubeCorners, cubeEdges, cubeVertices } from './shared';

export const cesiumChloride: LatticeStructure = {
  id: 'cesium-chloride',
  name: 'Cesium chloride',
  shortName: 'CsCl',
  cellGeometry: 'cubic',
  coordinationNumber: 8,
  atomsPerCell: 1,
  packingFactor: 0.732,
  radiusToA: Math.sqrt(3) / 2,
  vertices: cubeVertices,
  edges: cubeEdges,
  sites: [
    ...cubeCorners('cscl'),
    { id: 'cscl-body-center', x: 0.5, y: 0.5, z: 0.5, role: 'interior' },
  ],
};
