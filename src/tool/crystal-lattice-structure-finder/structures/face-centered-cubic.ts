import type { LatticeStructure } from '../data';
import { cubeCorners, cubeEdges, cubeFaceCenters, cubeVertices, renamedSites } from './shared';

export const faceCenteredCubic: LatticeStructure = {
  id: 'face-centered-cubic',
  name: 'Face-centered cubic',
  shortName: 'FCC',
  cellGeometry: 'cubic',
  coordinationNumber: 12,
  atomsPerCell: 4,
  packingFactor: Math.PI / (3 * Math.sqrt(2)),
  radiusToA: Math.sqrt(2) / 4,
  vertices: cubeVertices,
  edges: cubeEdges,
  sites: [...cubeCorners('fcc'), ...renamedSites('fcc', cubeFaceCenters)],
};
