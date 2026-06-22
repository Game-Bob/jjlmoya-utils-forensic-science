import type { LatticeStructure } from '../data';
import { cubeCorners, cubeEdges, cubeFaceCenters, cubeVertices, renamedSites } from './shared';

export const zincBlende: LatticeStructure = {
  id: 'zinc-blende',
  name: 'Zinc blende',
  shortName: 'ZnS',
  cellGeometry: 'cubic',
  coordinationNumber: 4,
  atomsPerCell: 4,
  packingFactor: 0.34,
  radiusToA: Math.sqrt(3) / 8,
  vertices: cubeVertices,
  edges: cubeEdges,
  sites: [
    ...cubeCorners('zinc-blende'),
    ...renamedSites('zinc-blende', cubeFaceCenters),
    { id: 'zinc-blende-tetra-a', x: 0.25, y: 0.25, z: 0.25, role: 'interior' },
    { id: 'zinc-blende-tetra-b', x: 0.75, y: 0.75, z: 0.25, role: 'interior' },
    { id: 'zinc-blende-tetra-c', x: 0.75, y: 0.25, z: 0.75, role: 'interior' },
    { id: 'zinc-blende-tetra-d', x: 0.25, y: 0.75, z: 0.75, role: 'interior' },
  ],
};
