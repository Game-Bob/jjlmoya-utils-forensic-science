import { LATTICE_STRUCTURES as STRUCTURES } from './structures';

export type LatticeId = string;

export interface AtomSite {
  id: string;
  x: number;
  y: number;
  z: number;
  role: 'corner' | 'face' | 'interior';
}

export interface LatticeStructure {
  id: LatticeId;
  name: string;
  shortName: string;
  cellGeometry: 'cubic' | 'hexagonal' | 'tetragonal';
  coordinationNumber: number;
  atomsPerCell: number;
  packingFactor: number;
  radiusToA: number;
  cToA?: number;
  sites: AtomSite[];
  edges: [number, number][];
  vertices: [number, number, number][];
}

export interface MaterialPreset {
  id: string;
  name: string;
  note: string;
  formula: string;
  latticeId: LatticeId;
  atomicMass: number;
  latticeA: number;
  cToA?: number;
  atomsPerFormulaUnit?: number;
}

export interface DensityResult {
  density: number;
  cellVolumeCm3: number;
  cellMassG: number;
  atomsPerCell: number;
  packingFactor: number;
}

export const LATTICE_STRUCTURES: LatticeStructure[] = STRUCTURES;

export const MATERIAL_PRESETS: MaterialPreset[] = [
  {
    id: 'copper',
    name: 'Copper',
    note: 'Common FCC metal with high electrical conductivity.',
    formula: 'Cu',
    latticeId: 'face-centered-cubic',
    atomicMass: 63.546,
    latticeA: 3.615,
  },
  {
    id: 'aluminum',
    name: 'Aluminum',
    note: 'Lightweight FCC metal used as a classroom density benchmark.',
    formula: 'Al',
    latticeId: 'face-centered-cubic',
    atomicMass: 26.9815,
    latticeA: 4.0495,
  },
  {
    id: 'alpha-iron',
    name: 'Alpha iron',
    note: 'Room-temperature body-centered cubic iron phase.',
    formula: 'Fe',
    latticeId: 'body-centered-cubic',
    atomicMass: 55.845,
    latticeA: 2.866,
  },
  {
    id: 'tungsten',
    name: 'Tungsten',
    note: 'Dense BCC refractory metal with a very high melting point.',
    formula: 'W',
    latticeId: 'body-centered-cubic',
    atomicMass: 183.84,
    latticeA: 3.165,
  },
  {
    id: 'polonium',
    name: 'Alpha polonium',
    note: 'Rare example of a simple cubic elemental crystal.',
    formula: 'Po',
    latticeId: 'simple-cubic',
    atomicMass: 208.9824,
    latticeA: 3.359,
  },
  {
    id: 'magnesium',
    name: 'Magnesium',
    note: 'HCP metal with a c/a ratio close to ideal packing.',
    formula: 'Mg',
    latticeId: 'hexagonal-close-packed',
    atomicMass: 24.305,
    latticeA: 3.209,
    cToA: 1.624,
  },
  {
    id: 'titanium',
    name: 'Alpha titanium',
    note: 'Room-temperature HCP phase of titanium.',
    formula: 'Ti',
    latticeId: 'hexagonal-close-packed',
    atomicMass: 47.867,
    latticeA: 2.951,
    cToA: 1.587,
  },
  {
    id: 'silicon',
    name: 'Silicon',
    note: 'Diamond cubic semiconductor used in integrated circuits.',
    formula: 'Si',
    latticeId: 'diamond-cubic',
    atomicMass: 28.0855,
    latticeA: 5.431,
  },
  {
    id: 'diamond',
    name: 'Diamond',
    note: 'Covalent carbon network in the diamond cubic structure.',
    formula: 'C',
    latticeId: 'diamond-cubic',
    atomicMass: 12.011,
    latticeA: 3.567,
  },
  {
    id: 'halite',
    name: 'Halite',
    note: 'Rock salt crystal with four NaCl formula units per conventional cell.',
    formula: 'NaCl',
    latticeId: 'rock-salt',
    atomicMass: 58.4428,
    latticeA: 5.640,
    atomsPerFormulaUnit: 4,
  },
  {
    id: 'cesium-chloride',
    name: 'Cesium chloride',
    note: 'Interpenetrating simple cubic ionic structure with eightfold coordination.',
    formula: 'CsCl',
    latticeId: 'cesium-chloride',
    atomicMass: 168.358,
    latticeA: 4.123,
  },
  {
    id: 'zinc-sulfide',
    name: 'Zinc sulfide',
    note: 'Sphalerite, also called zinc blende, with tetrahedral coordination.',
    formula: 'ZnS',
    latticeId: 'zinc-blende',
    atomicMass: 97.474,
    latticeA: 5.409,
    atomsPerFormulaUnit: 4,
  },
  {
    id: 'gallium-nitride',
    name: 'Gallium nitride',
    note: 'Wurtzite semiconductor used in LEDs and power electronics.',
    formula: 'GaN',
    latticeId: 'wurtzite',
    atomicMass: 83.730,
    latticeA: 3.189,
    cToA: 1.626,
    atomsPerFormulaUnit: 2,
  },
  {
    id: 'strontium-titanate',
    name: 'Strontium titanate',
    note: 'Cubic perovskite oxide often used as a substrate and dielectric model.',
    formula: 'SrTiO3',
    latticeId: 'perovskite',
    atomicMass: 183.49,
    latticeA: 3.905,
  },
  {
    id: 'rutile-titania',
    name: 'Rutile titania',
    note: 'Rutile TiO2 structure with octahedral titanium coordination.',
    formula: 'TiO2',
    latticeId: 'rutile',
    atomicMass: 79.866,
    latticeA: 4.594,
    cToA: 0.644,
    atomsPerFormulaUnit: 2,
  },
];
