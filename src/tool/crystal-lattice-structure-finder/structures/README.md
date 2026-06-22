# Adding a crystal structure

Each structure lives in its own file so the catalog can grow without editing the viewer.

1. Copy one existing file, for example `body-centered-cubic.ts`.
2. Change these fields:
   - `id`: unique lowercase slug.
   - `name`: label shown in the selector.
   - `shortName`: compact label shown near the density.
   - `cellGeometry`: `cubic`, `hexagonal`, or `tetragonal`.
   - `coordinationNumber`: nearest-neighbor count.
   - `atomsPerCell`: net atoms or formula units per conventional cell.
   - `packingFactor`: decimal packing fraction. Use an estimate if the structure is not a hard-sphere metal.
   - `radiusToA`: atomic radius divided by lattice parameter `a`.
   - `cToA`: optional, only for non-cubic cells.
   - `sites`: atom positions normalized from 0 to 1 inside the cell.
3. Export the structure from the file.
4. Add it to `structures/index.ts`.

Site roles control color only:

- `corner`: orange boundary atoms.
- `face`: turquoise face or edge atoms.
- `interior`: violet atoms inside the cell.

If you also want a real material preset for the structure, add it to `MATERIAL_PRESETS` in `../data.ts` and point `latticeId` to the structure `id`.
