import type { LatticeStructure } from '../data';
import { cubeCorners, cubeEdges, cubeVertices } from './shared';

export const rutile: LatticeStructure = {
  id: 'rutile',
  name: 'Rutile',
  shortName: 'TiO2',
  cellGeometry: 'tetragonal',
  coordinationNumber: 6,
  atomsPerCell: 2,
  packingFactor: 0.58,
  radiusToA: 0.31,
  cToA: 0.644,
  vertices: cubeVertices,
  edges: cubeEdges,
  sites: [
    ...cubeCorners('rutile'),
    { id: 'rutile-metal-a', x: 0, y: 0, z: 0, role: 'corner' },
    { id: 'rutile-metal-b', x: 0.5, y: 0.5, z: 0.5, role: 'interior' },
    { id: 'rutile-oxygen-a', x: 0.305, y: 0.305, z: 0, role: 'face' },
    { id: 'rutile-oxygen-b', x: 0.695, y: 0.695, z: 0, role: 'face' },
    { id: 'rutile-oxygen-c', x: 0.195, y: 0.805, z: 0.5, role: 'interior' },
    { id: 'rutile-oxygen-d', x: 0.805, y: 0.195, z: 0.5, role: 'interior' },
  ],
};
