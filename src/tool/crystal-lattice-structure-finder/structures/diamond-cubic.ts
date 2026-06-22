import type { LatticeStructure } from '../data';
import { cubeCorners, cubeEdges, cubeFaceCenters, cubeVertices, renamedSites } from './shared';

export const diamondCubic: LatticeStructure = {
  id: 'diamond-cubic',
  name: 'Diamond cubic',
  shortName: 'DC',
  cellGeometry: 'cubic',
  coordinationNumber: 4,
  atomsPerCell: 8,
  packingFactor: Math.PI * Math.sqrt(3) / 16,
  radiusToA: Math.sqrt(3) / 8,
  vertices: cubeVertices,
  edges: cubeEdges,
  sites: [
    ...cubeCorners('diamond'),
    ...renamedSites('diamond', cubeFaceCenters),
    { id: 'diamond-tetra-a', x: 0.25, y: 0.25, z: 0.25, role: 'interior' },
    { id: 'diamond-tetra-b', x: 0.75, y: 0.75, z: 0.25, role: 'interior' },
    { id: 'diamond-tetra-c', x: 0.75, y: 0.25, z: 0.75, role: 'interior' },
    { id: 'diamond-tetra-d', x: 0.25, y: 0.75, z: 0.75, role: 'interior' },
  ],
};
