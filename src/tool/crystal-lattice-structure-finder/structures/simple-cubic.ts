import type { LatticeStructure } from '../data';
import { cubeCorners, cubeEdges, cubeVertices } from './shared';

export const simpleCubic: LatticeStructure = {
  id: 'simple-cubic',
  name: 'Simple cubic',
  shortName: 'SC',
  cellGeometry: 'cubic',
  coordinationNumber: 6,
  atomsPerCell: 1,
  packingFactor: Math.PI / 6,
  radiusToA: 0.5,
  vertices: cubeVertices,
  edges: cubeEdges,
  sites: cubeCorners('sc'),
};
