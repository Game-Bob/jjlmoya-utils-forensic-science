import type { LatticeStructure } from '../data';
import { cubeCorners, cubeEdges, cubeFaceCenters, cubeVertices, renamedSites } from './shared';

export const rockSalt: LatticeStructure = {
  id: 'rock-salt',
  name: 'Rock salt',
  shortName: 'NaCl',
  cellGeometry: 'cubic',
  coordinationNumber: 6,
  atomsPerCell: 4,
  packingFactor: 0.667,
  radiusToA: 0.5,
  vertices: cubeVertices,
  edges: cubeEdges,
  sites: [
    ...cubeCorners('rock-salt'),
    ...renamedSites('rock-salt', cubeFaceCenters),
    { id: 'rock-salt-edge-a', x: 0.5, y: 0, z: 0, role: 'face' },
    { id: 'rock-salt-edge-b', x: 0, y: 0.5, z: 0, role: 'face' },
    { id: 'rock-salt-edge-c', x: 0, y: 0, z: 0.5, role: 'face' },
    { id: 'rock-salt-center', x: 0.5, y: 0.5, z: 0.5, role: 'interior' },
  ],
};
