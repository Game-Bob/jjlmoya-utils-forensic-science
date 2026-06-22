import type { LatticeStructure } from '../data';
import { cubeCorners, cubeEdges, cubeVertices } from './shared';

export const bodyCenteredCubic: LatticeStructure = {
  id: 'body-centered-cubic',
  name: 'Body-centered cubic',
  shortName: 'BCC',
  cellGeometry: 'cubic',
  coordinationNumber: 8,
  atomsPerCell: 2,
  packingFactor: (Math.PI * Math.sqrt(3)) / 8,
  radiusToA: Math.sqrt(3) / 4,
  vertices: cubeVertices,
  edges: cubeEdges,
  sites: [
    ...cubeCorners('bcc'),
    { id: 'bcc-body-center', x: 0.5, y: 0.5, z: 0.5, role: 'interior' },
  ],
};
