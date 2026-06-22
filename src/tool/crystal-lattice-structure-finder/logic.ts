import { LATTICE_STRUCTURES, MATERIAL_PRESETS } from './data';
import type { LatticeId, AtomSite, LatticeStructure, MaterialPreset, DensityResult } from './data';

export { LATTICE_STRUCTURES, MATERIAL_PRESETS };
export type { LatticeId, AtomSite, LatticeStructure, MaterialPreset, DensityResult };

const AVOGADRO = 6.02214076e23;
const ANGSTROM_TO_CM = 1e-8;

export function getLattice(id: LatticeId): LatticeStructure {
  return LATTICE_STRUCTURES.find((structure) => structure.id === id) ?? LATTICE_STRUCTURES[0]!;
}

export function getMaterial(id: string): MaterialPreset {
  return MATERIAL_PRESETS.find((material) => material.id === id) ?? MATERIAL_PRESETS[0]!;
}

export function calculateTheoreticalDensity(material: MaterialPreset): DensityResult {
  const lattice = getLattice(material.latticeId);
  const cToA = material.cToA ?? lattice.cToA ?? 1;
  const atomsPerCell = material.atomsPerFormulaUnit ?? lattice.atomsPerCell;
  let volumeA3 = material.latticeA ** 3;
  if (lattice.cellGeometry === 'hexagonal') {
    volumeA3 = (3 * Math.sqrt(3) / 2) * material.latticeA ** 2 * material.latticeA * cToA;
  }
  if (lattice.cellGeometry === 'tetragonal') {
    volumeA3 = material.latticeA ** 2 * material.latticeA * cToA;
  }
  const cellVolumeCm3 = volumeA3 * ANGSTROM_TO_CM ** 3;
  const cellMassG = (atomsPerCell * material.atomicMass) / AVOGADRO;

  return {
    density: cellMassG / cellVolumeCm3,
    cellVolumeCm3,
    cellMassG,
    atomsPerCell,
    packingFactor: lattice.packingFactor,
  };
}

export function calculatePackingPercent(lattice: LatticeStructure): number {
  return lattice.packingFactor * 100;
}
