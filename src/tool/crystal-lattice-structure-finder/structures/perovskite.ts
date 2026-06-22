import type { LatticeStructure } from '../data';
import { cubeCorners, cubeEdges, cubeFaceCenters, cubeVertices, renamedSites } from './shared';

export const perovskite: LatticeStructure = {
  id: 'perovskite',
  name: 'Cubic perovskite',
  shortName: 'ABO3',
  cellGeometry: 'cubic',
  coordinationNumber: 6,
  atomsPerCell: 1,
  packingFactor: 0.64,
  radiusToA: 0.5,
  vertices: cubeVertices,
  edges: cubeEdges,
  sites: [
    ...cubeCorners('perovskite'),
    { id: 'perovskite-body-center', x: 0.5, y: 0.5, z: 0.5, role: 'interior' },
    ...renamedSites('perovskite-oxygen', cubeFaceCenters),
  ],
};
