import type { LatticeStructure } from '../data';
import { hexEdges, hexVertices } from './shared';

export const wurtzite: LatticeStructure = {
  id: 'wurtzite',
  name: 'Wurtzite',
  shortName: 'WZ',
  cellGeometry: 'hexagonal',
  coordinationNumber: 4,
  atomsPerCell: 2,
  packingFactor: 0.34,
  radiusToA: 0.375,
  cToA: 1.633,
  vertices: hexVertices,
  edges: hexEdges,
  sites: [
    { id: 'wurtzite-a-bottom', x: 0.5, y: 0.5, z: 0, role: 'face' },
    { id: 'wurtzite-a-top', x: 0.5, y: 0.5, z: 1, role: 'face' },
    { id: 'wurtzite-b-a', x: 0.33, y: 0.42, z: 0.375, role: 'interior' },
    { id: 'wurtzite-b-b', x: 0.67, y: 0.58, z: 0.875, role: 'interior' },
  ],
};
