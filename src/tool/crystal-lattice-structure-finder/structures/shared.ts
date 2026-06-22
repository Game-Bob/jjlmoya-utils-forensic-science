import type { AtomSite } from '../data';

export const cubeVertices: [number, number, number][] = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 1, 0],
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 1, 1],
];

export const cubeEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

export const hexVertices: [number, number, number][] = [
  [1, 0, 0],
  [0.5, 0.866, 0],
  [-0.5, 0.866, 0],
  [-1, 0, 0],
  [-0.5, -0.866, 0],
  [0.5, -0.866, 0],
  [1, 0, 1],
  [0.5, 0.866, 1],
  [-0.5, 0.866, 1],
  [-1, 0, 1],
  [-0.5, -0.866, 1],
  [0.5, -0.866, 1],
];

export const hexEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 6],
  [0, 6],
  [1, 7],
  [2, 8],
  [3, 9],
  [4, 10],
  [5, 11],
];

export function cubeCorners(prefix: string): AtomSite[] {
  return cubeVertices.map(([x, y, z], index) => ({
    id: `${prefix}-corner-${index}`,
    x,
    y,
    z,
    role: 'corner' as const,
  }));
}

export const cubeFaceCenters: AtomSite[] = [
  { id: 'face-bottom', x: 0.5, y: 0.5, z: 0, role: 'face' },
  { id: 'face-top', x: 0.5, y: 0.5, z: 1, role: 'face' },
  { id: 'face-front', x: 0.5, y: 0, z: 0.5, role: 'face' },
  { id: 'face-back', x: 0.5, y: 1, z: 0.5, role: 'face' },
  { id: 'face-left', x: 0, y: 0.5, z: 0.5, role: 'face' },
  { id: 'face-right', x: 1, y: 0.5, z: 0.5, role: 'face' },
];

export function renamedSites(prefix: string, sites: AtomSite[]): AtomSite[] {
  return sites.map((site) => ({ ...site, id: `${prefix}-${site.id}` }));
}
