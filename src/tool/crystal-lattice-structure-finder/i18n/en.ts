import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'crystal-lattice-structure-finder';
const title = 'Crystal Lattice Structure Finder';
const description = 'Explore common metallic, ionic, covalent, and ceramic crystal structures with an interactive 3D viewer, packing factor, coordination number, and theoretical density calculator.';

const howTo = [
  {
    name: 'Choose a lattice or material',
    text: 'Start from a structure family such as SC, BCC, FCC, HCP, diamond cubic, rock salt, zinc blende, wurtzite, perovskite, or rutile, or select a material preset to load lattice constants and mass.',
  },
  {
    name: 'Rotate the unit cell',
    text: 'Drag the angle and zoom controls to inspect which atoms sit on corners, faces, or inside the conventional cell.',
  },
  {
    name: 'Read packing and density',
    text: 'Compare atomic packing factor, coordination number, atoms per cell, cell mass, cell volume, and theoretical density for the selected structure.',
  },
  {
    name: 'Test custom constants',
    text: 'Edit lattice parameter a, c/a ratio, and mass to see how theoretical density changes when the crystal expands, contracts, or changes composition.',
  },
];

const faq = [
  {
    question: 'What is a unit cell in a crystal lattice?',
    answer: 'A unit cell is the smallest repeating three-dimensional box that can tile space to build the crystal. Its atoms may be shared with neighboring cells, so the net atoms per cell can be smaller than the number of spheres drawn on the boundaries.',
  },
  {
    question: 'Why do FCC and HCP have the same packing factor?',
    answer: 'FCC and ideal HCP are both close-packed arrangements of equal spheres. They stack dense triangular layers in different sequences, ABCABC for FCC and ABAB for HCP, but both fill about 74 percent of space with atoms.',
  },
  {
    question: 'How is theoretical density calculated?',
    answer: 'The calculator divides the mass inside one unit cell by the unit cell volume. Cell mass comes from atoms or formula units per cell multiplied by molar mass and divided by Avogadro constant.',
  },
  {
    question: 'Why can measured density differ from the theoretical result?',
    answer: 'Real samples can contain vacancies, impurities, pores, grain boundaries, isotopic mixtures, temperature expansion, or multiple phases. The theoretical value assumes a perfect crystal with the selected lattice constant.',
  },
  {
    question: 'Is halite really an FCC metal lattice?',
    answer: 'No. Halite is ionic rock salt, not a metal. The preset uses its conventional FCC-derived cell because NaCl has four formula units per cubic cell, which makes it useful for density calculation practice.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Interactive crystal unit cell',
    material: 'Material',
    lattice: 'Lattice',
    rotation: 'Rotation',
    zoom: 'Zoom',
    latticeA: 'Lattice a',
    cRatio: 'c/a ratio',
    molarMass: 'Molar mass',
    atomsPerCell: 'Atoms per cell',
    packingFactor: 'Packing factor',
    coordination: 'Coordination',
    density: 'Density',
    cellVolume: 'Cell volume',
    cellMass: 'Cell mass',
    radius: 'Atomic radius',
    cornerAtoms: 'Corner atoms',
    faceAtoms: 'Face atoms',
    interiorAtoms: 'Interior atoms',
    materialNote: 'Material note',
    formula: 'Formula',
    crystalProperties: 'Crystal properties',
    physicalMetrics: 'Physical metrics',
    latticeSimpleCubic: 'Simple cubic',
    latticeFcc: 'Face-centered cubic',
    latticeHcp: 'Hexagonal close-packed',
    shortSc: 'SC',
    shortFcc: 'FCC',
    shortHcp: 'HCP',
    materialCopper: 'Copper',
    materialCopperNote: 'Common FCC metal with high electrical conductivity.',
    materialAluminum: 'Aluminum',
    materialAluminumNote: 'Lightweight FCC metal used as a classroom density benchmark.',
    materialPolonium: 'Alpha polonium',
    materialPoloniumNote: 'Rare example of a simple cubic elemental crystal.',
    materialMagnesium: 'Magnesium',
    materialMagnesiumNote: 'HCP metal with a c/a ratio close to ideal packing.',
    materialTitanium: 'Alpha titanium',
    materialTitaniumNote: 'Room-temperature HCP phase of titanium.',
    materialHalite: 'Halite approximation',
    materialHaliteNote: 'Rock salt is modeled through its FCC conventional cell with four NaCl formula units.',
    shortSimpleCubic: 'SC',
    shortFaceCenteredCubic: 'FCC',
    shortHexagonalClosePacked: 'HCP',
    shortBodyCenteredCubic: 'BCC',
    shortDiamondCubic: 'DC',
    shortRockSalt: 'NaCl',
    shortCesiumChloride: 'CsCl',
    shortZincBlende: 'ZnS',
    shortWurtzite: 'WZ',
    shortPerovskite: 'ABO3',
    shortRutile: 'TiO2',
    latticeBodyCenteredCubic: 'Body-centered cubic',
    latticeCesiumChloride: 'Cesium chloride',
    latticeDiamondCubic: 'Diamond cubic',
    latticeFaceCenteredCubic: 'Face-centered cubic',
    latticeHexagonalClosePacked: 'Hexagonal close-packed',
    latticePerovskite: 'Cubic perovskite',
    latticeRockSalt: 'Rock salt',
    latticeRutile: 'Rutile',
    latticeWurtzite: 'Wurtzite',
    latticeZincBlende: 'Zinc blende',
    materialAlphaIron: 'Alpha iron',
    materialAlphaIronNote: 'Room-temperature body-centered cubic iron phase.',
    materialTungsten: 'Tungsten',
    materialTungstenNote: 'Dense BCC refractory metal with a very high melting point.',
    materialSilicon: 'Silicon',
    materialSiliconNote: 'Diamond cubic semiconductor used in integrated circuits.',
    materialDiamond: 'Diamond',
    materialDiamondNote: 'Covalent carbon network in the diamond cubic structure.',
    materialCesiumChloride: 'Cesium chloride',
    materialCesiumChlorideNote: 'Interpenetrating simple cubic ionic structure with eightfold coordination.',
    materialZincSulfide: 'Zinc sulfide',
    materialZincSulfideNote: 'Sphalerite, also called zinc blende, with tetrahedral coordination.',
    materialGalliumNitride: 'Gallium nitride',
    materialGalliumNitrideNote: 'Wurtzite semiconductor used in LEDs and power electronics.',
    materialStrontiumTitanate: 'Strontium titanate',
    materialStrontiumTitanateNote: 'Cubic perovskite oxide often used as a substrate and dielectric model.',
    materialRutileTitania: 'Rutile titania',
    materialRutileTitaniaNote: 'Rutile TiO2 structure with octahedral titanium coordination.',
  },
  seo: [
    {
      type: 'title',
      text: 'Crystal lattice structure finder for unit cells, packing factor, and density',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This crystal lattice structure finder helps connect the picture of a unit cell with the calculations that students and materials scientists usually need next. You can inspect metallic, ionic, covalent, and ceramic structures, then calculate atomic packing factor, coordination number, atoms per cell, atomic radius from lattice parameter, cell volume, cell mass, and theoretical density from real material presets or custom inputs.',
    },
    {
      type: 'paragraph',
      html: 'The interactive viewer is designed for the common difficulty in crystallography: boundary atoms are visible, but only a fraction of each boundary atom belongs to the selected cell. Rotating the model makes the difference between corner sites, face sites, and interior sites easier to see before you use the numerical formula.',
    },
    {
      type: 'title',
      text: 'Simple cubic, FCC, and HCP compared',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Structure', 'Net atoms per cell', 'Coordination number', 'Atomic packing factor', 'Typical examples'],
      rows: [
        ['Simple cubic', '1', '6', '52.36%', 'Alpha polonium is the classic elemental example.'],
        ['Face-centered cubic', '4', '12', '74.05%', 'Copper, aluminum, nickel, silver, gold, and many ductile metals.'],
        ['Hexagonal close-packed', '6', '12', '74.05%', 'Magnesium, alpha titanium, zinc, cobalt, and beryllium.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Simple cubic packing is easy to visualize because atoms touch along the cube edge and each corner atom contributes one eighth to the cell. FCC adds atoms to the center of each face, so the atoms touch along face diagonals and the net count becomes four atoms per conventional cubic cell. HCP uses hexagonal layers instead of a cubic box, but ideal HCP reaches the same close-packed limit as FCC.',
    },
    {
      type: 'title',
      text: 'Atomic packing factor formula',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Atomic packing factor is the fraction of unit cell volume occupied by hard-sphere atoms. It is calculated as <strong>APF = volume of atoms in the cell / unit cell volume</strong>. For simple cubic this becomes pi / 6 because one atom of radius a/2 fits into the cubic cell. FCC and ideal HCP both reach about 0.7405, which is the maximum packing fraction for equal spheres.',
    },
    {
      type: 'paragraph',
      html: 'Packing factor is not the same as density. APF describes how efficiently identical spheres fill space, while density also depends on molar mass and lattice dimensions. A light HCP metal and a heavy FCC metal can have similar packing factors but very different densities.',
    },
    {
      type: 'title',
      text: 'Theoretical density formula used by the calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The calculator uses <strong>rho = nM / (NA Vcell)</strong>. In this equation, <strong>n</strong> is the number of atoms or formula units per cell, <strong>M</strong> is molar mass in grams per mole, <strong>NA</strong> is Avogadro constant, and <strong>Vcell</strong> is the unit cell volume in cubic centimeters. Cubic cells use a^3. Hexagonal cells use (3 sqrt(3) / 2) a^2 c, with c supplied through the c/a ratio.',
    },
    {
      type: 'paragraph',
      html: 'Because lattice constants are usually tabulated in angstroms, the calculator converts angstroms to centimeters before computing density. A small change in lattice constant can noticeably affect density because volume scales with the third power for cubic cells.',
    },
    {
      type: 'title',
      text: 'How to use lattice presets for metals and minerals',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Copper and aluminum:</strong> compare two FCC metals with the same net atoms per cell but different molar masses and lattice constants.',
        '<strong>Magnesium and alpha titanium:</strong> inspect HCP packing and see how c/a ratio changes the hexagonal cell volume.',
        '<strong>Alpha polonium:</strong> study the rare simple cubic structure and its lower packing efficiency.',
        '<strong>Halite:</strong> practice formula-unit density with a mineral-style NaCl conventional cell instead of a single-element metal.',
      ],
    },
    {
      type: 'title',
      text: 'Limitations of a hard-sphere unit cell model',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This tool uses idealized geometric models. Real crystals have electron density rather than hard boundaries, and lattice constants change with temperature, pressure, composition, and defects. Ionic, covalent, and ceramic crystals can also require basis atoms, partial occupancies, and symmetry operations beyond a compact unit-cell teaching model.',
    },
    {
      type: 'paragraph',
      html: 'Use the results for education, quick estimates, and comparison of common lattice families. For publication-quality crystallography, verify lattice parameters, phase, stoichiometry, and site occupancy from primary diffraction data or a curated crystallographic database.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};

