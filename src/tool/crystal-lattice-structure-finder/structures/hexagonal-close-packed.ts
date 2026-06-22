import type { LatticeStructure } from '../data';
import { hexEdges, hexVertices } from './shared';

export const hexagonalClosePacked: LatticeStructure = {
  id: 'hexagonal-close-packed',
  name: 'Hexagonal close-packed',
  shortName: 'HCP',
  cellGeometry: 'hexagonal',
  coordinationNumber: 12,
  atomsPerCell: 6,
  packingFactor: 0.74048,
  radiusToA: 0.5,
  cToA: 1.633,
  vertices: hexVertices,
  edges: hexEdges,
  sites: [
    ...hexVertices.map(([x, y, z], index) => ({
      id: `hcp-boundary-${index}`,
      x: (x + 1) / 2,
      y: (y + 0.866) / 1.732,
      z,
      role: 'corner' as const,
    })),
    { id: 'hcp-center-bottom', x: 0.5, y: 0.5, z: 0, role: 'face' },
    { id: 'hcp-center-top', x: 0.5, y: 0.5, z: 1, role: 'face' },
    { id: 'hcp-interior-a', x: 0.33, y: 0.42, z: 0.5, role: 'interior' },
    { id: 'hcp-interior-b', x: 0.67, y: 0.58, z: 0.5, role: 'interior' },
    { id: 'hcp-interior-c', x: 0.5, y: 0.28, z: 0.5, role: 'interior' },
  ],
};
