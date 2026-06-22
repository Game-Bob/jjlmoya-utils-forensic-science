import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'explorateur-structure-reseau-cristallin';
const title = 'Explorateur de structure de réseau cristallin';
const description = 'Explorez les mailles élémentaires cubique simple, cubique à faces centrées et hexagonal compact avec un visualiseur 3D interactif, la compacité atomique, le nombre de coordination et un calculateur de densité théorique.';

const howTo = [
  {
    name: 'Choisissez un réseau ou un matériau',
    text: 'Partez d\'une famille de structures telle que cubique simple, CFC ou HC, ou sélectionnez un préréglage de matériau réel pour charger son paramètre de maille et sa masse atomique ou molaire.',
  },
  {
    name: 'Faites pivoter la maille élémentaire',
    text: 'Faites glisser les commandes d\'angle et de zoom pour inspecter quels atomes se situent sur les sommets, les faces ou à l\'intérieur de la maille conventionnelle.',
  },
  {
    name: 'Lisez la compacité et la densité',
    text: 'Comparez la compacité atomique, le nombre de coordination, les atomes par maille, la masse de la maille, le volume de la maille et la densité théorique pour la structure sélectionnée.',
  },
  {
    name: 'Testez des constantes personnalisées',
    text: 'Modifiez le paramètre de maille a, le rapport c/a et la masse pour observer comment la densité théorique change lorsque le cristal se dilate, se contracte ou change de composition.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce qu\'une maille élémentaire dans un réseau cristallin ?',
    answer: 'Une maille élémentaire est la plus petite boîte tridimensionnelle qui se répète pour remplir l\'espace et construire le cristal. Ses atomes peuvent être partagés avec les mailles voisines, de sorte que le nombre net d\'atomes par maille peut être inférieur au nombre de sphères dessinées aux limites.',
  },
  {
    question: 'Pourquoi le CFC et le HC ont-ils la même compacité ?',
    answer: 'Le CFC et le HC idéal sont tous deux des empilements compacts de sphères identiques. Ils superposent des couches triangulaires denses dans des séquences différentes, ABCABC pour le CFC et ABAB pour le HC, mais tous deux remplissent environ 74 % de l\'espace avec des atomes.',
  },
  {
    question: 'Comment la densité théorique est-elle calculée ?',
    answer: 'Le calculateur divise la masse à l\'intérieur d\'une maille élémentaire par le volume de la maille. La masse de la maille provient du nombre d\'atomes ou de motifs formulaires par maille multiplié par la masse molaire et divisé par la constante d\'Avogadro.',
  },
  {
    question: 'Pourquoi la densité mesurée peut-elle différer du résultat théorique ?',
    answer: 'Les échantillons réels peuvent contenir des lacunes, des impuretés, des pores, des joints de grains, des mélanges isotopiques, une dilatation thermique ou plusieurs phases. La valeur théorique suppose un cristal parfait avec le paramètre de maille sélectionné.',
  },
  {
    question: 'La halite est-elle vraiment un réseau métallique CFC ?',
    answer: 'Non. La halite est un sel gemme ionique, pas un métal. Le préréglage utilise sa maille conventionnelle dérivée du CFC parce que NaCl a quatre motifs formulaires par maille cubique, ce qui la rend utile pour s\'entraîner au calcul de densité.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Maille cristalline interactive',
    material: 'Matériau',
    lattice: 'Réseau',
    rotation: 'Rotation',
    zoom: 'Zoom',
    latticeA: 'Paramètre a',
    cRatio: 'Rapport c/a',
    molarMass: 'Masse molaire',
    atomsPerCell: 'Atomes par maille',
    packingFactor: 'Compacité',
    coordination: 'Coordination',
    density: 'Densité',
    cellVolume: 'Volume de la maille',
    cellMass: 'Masse de la maille',
    radius: 'Rayon atomique',
    cornerAtoms: 'Atomes aux sommets',
    faceAtoms: 'Atomes aux faces',
    interiorAtoms: 'Atomes intérieurs',
    materialNote: 'Note sur le matériau',
    formula: 'Formule',
    resetView: 'Réinitialiser la vue',
    crystalProperties: 'Propriétés du cristal',
    physicalMetrics: 'Mesures physiques',
    latticeSimpleCubic: 'Cubique simple',
    latticeFcc: 'Cubique à faces centrées',
    latticeHcp: 'Hexagonal compact',
    shortSc: 'SC',
    shortFcc: 'CFC',
    shortHcp: 'HC',
    materialCopper: 'Cuivre',
    materialCopperNote: 'Métal CFC courant avec une conductivité électrique élevée.',
    materialAluminum: 'Aluminium',
    materialAluminumNote: 'Métal CFC léger souvent utilisé comme référence de densité dans les manuels scolaires.',
    materialPolonium: 'Polonium alpha',
    materialPoloniumNote: 'Exemple rare d\'un cristal élémentaire cubique simple.',
    materialMagnesium: 'Magnésium',
    materialMagnesiumNote: 'Métal HC avec un rapport c/a proche de l\'empilement idéal.',
    materialTitanium: 'Titane alpha',
    materialTitaniumNote: 'Phase HC du titane à température ambiante.',
    materialHalite: 'Halite (approximation)',
    materialHaliteNote: 'Le sel gemme est modélisé par sa maille conventionnelle CFC avec quatre motifs formulaires NaCl.',
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
    latticeBodyCenteredCubic: 'Cubique centré',
    latticeCesiumChloride: 'Chlorure de césium',
    latticeDiamondCubic: 'Cubique diamant',
    latticeFaceCenteredCubic: 'Cubique à faces centrées',
    latticeHexagonalClosePacked: 'Hexagonal compact',
    latticePerovskite: 'Pérovskite cubique',
    latticeRockSalt: 'Sel gemme',
    latticeRutile: 'Rutile',
    latticeWurtzite: 'Wurtzite',
    latticeZincBlende: 'Blende de zinc',
    materialAlphaIron: 'Fer alpha',
    materialAlphaIronNote: 'Phase cubique centrée du fer à température ambiante.',
    materialTungsten: 'Tungstène',
    materialTungstenNote: 'Métal réfractaire BCC dense à très haut point de fusion.',
    materialSilicon: 'Silicium',
    materialSiliconNote: 'Semi-conducteur cubique diamant utilisé dans les circuits intégrés.',
    materialDiamond: 'Diamant',
    materialDiamondNote: 'Réseau covalent de carbone en structure cubique diamant.',
    materialCesiumChloride: 'Chlorure de césium',
    materialCesiumChlorideNote: 'Structure ionique cubique simple interpénétrée à coordination huit.',
    materialZincSulfide: 'Sulfure de zinc',
    materialZincSulfideNote: 'Sphalérite, aussi appelée blende de zinc, à coordination tétraédrique.',
    materialGalliumNitride: 'Nitrure de gallium',
    materialGalliumNitrideNote: 'Semi-conducteur wurtzite utilisé dans les LED et en électronique de puissance.',
    materialStrontiumTitanate: 'Titanate de strontium',
    materialStrontiumTitanateNote: 'Oxyde pérovskite cubique utilisé comme substrat et modèle diélectrique.',
    materialRutileTitania: 'Titane rutile',
    materialRutileTitaniaNote: 'Structure TiO2 rutile avec coordination octaédrique du titane.',
  },
  seo: [
    {
      type: 'title',
      text: 'Explorateur de structure de réseau cristallin pour mailles élémentaires, compacité et densité',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cet explorateur de structure de réseau cristallin aide à relier l\'image d\'une maille élémentaire aux calculs dont les étudiants et les scientifiques des matériaux ont généralement besoin. Vous pouvez inspecter les structures cubique simple, cubique à faces centrées et hexagonal compact, puis calculer la compacité atomique, le nombre de coordination, les atomes par maille, le rayon atomique à partir du paramètre de maille, le volume de la maille, la masse de la maille et la densité théorique à partir de préréglages de matériaux réels ou de saisies personnalisées.',
    },
    {
      type: 'paragraph',
      html: 'Le visualiseur interactif est conçu pour la difficulté courante en cristallographie: les atomes aux limites sont visibles, mais seule une fraction de chaque atome limite appartient à la maille sélectionnée. La rotation du modèle rend la différence entre les sites de sommets, les sites de faces et les sites intérieurs plus facile à voir avant d\'utiliser la formule numérique.',
    },
    {
      type: 'title',
      text: 'Cubique simple, CFC et HC comparés',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Structure', 'Atomes nets par maille', 'Nombre de coordination', 'Compacité atomique', 'Exemples typiques'],
      rows: [
        ['Cubique simple', '1', '6', '52,36 %', 'Le polonium alpha est l\'exemple élémentaire classique.'],
        ['Cubique à faces centrées (CFC)', '4', '12', '74,05 %', 'Cuivre, aluminium, nickel, argent, or et de nombreux métaux ductiles.'],
        ['Hexagonal compact (HC)', '6', '12', '74,05 %', 'Magnésium, titane alpha, zinc, cobalt et béryllium.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'L\'empilement cubique simple est facile à visualiser car les atomes se touchent le long de l\'arête du cube et chaque atome de sommet contribue pour un huitième à la maille. Le CFC ajoute des atomes au centre de chaque face, donc les atomes se touchent le long des diagonales des faces et le nombre net devient quatre atomes par maille cubique conventionnelle. Le HC utilise des couches hexagonales au lieu d\'une boîte cubique, mais le HC idéal atteint la même limite d\'empilement compact que le CFC.',
    },
    {
      type: 'title',
      text: 'Formule de la compacité atomique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La compacité atomique est la fraction du volume de la maille élémentaire occupée par des atomes sphériques durs. Elle est calculée comme <strong>Compacité = volume des atomes dans la maille / volume de la maille élémentaire</strong>. Pour le cubique simple, cela donne pi / 6 car un atome de rayon a/2 s\'insère dans la maille cubique. Le CFC et le HC idéal atteignent tous deux environ 0,7405, ce qui correspond à la fraction de compacité maximale pour des sphères identiques.',
    },
    {
      type: 'paragraph',
      html: 'La compacité n\'est pas la même chose que la densité. La compacité décrit l\'efficacité avec laquelle des sphères identiques remplissent l\'espace, tandis que la densité dépend aussi de la masse molaire et des dimensions du réseau. Un métal HC léger et un métal CFC lourd peuvent avoir des compacités similaires mais des densités très différentes.',
    },
    {
      type: 'title',
      text: 'Formule de la densité théorique utilisée par le calculateur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le calculateur utilise <strong>rho = nM / (NA Vmaille)</strong>. Dans cette équation, <strong>n</strong> est le nombre d\'atomes ou de motifs formulaires par maille, <strong>M</strong> est la masse molaire en grammes par mole, <strong>NA</strong> est la constante d\'Avogadro et <strong>Vmaille</strong> est le volume de la maille élémentaire en centimètres cubes. Les mailles cubiques utilisent a^3. Les mailles hexagonales utilisent (3 sqrt(3) / 2) a^2 c, c étant fourni via le rapport c/a.',
    },
    {
      type: 'paragraph',
      html: 'Comme les paramètres de maille sont généralement tabulés en angströms, le calculateur convertit les angströms en centimètres avant de calculer la densité. Une petite variation du paramètre de maille peut affecter sensiblement la densité car le volume varie avec la puissance trois pour les mailles cubiques.',
    },
    {
      type: 'title',
      text: 'Comment utiliser les préréglages de réseau pour les métaux et les minéraux',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cuivre et aluminium :</strong> comparez deux métaux CFC avec le même nombre net d\'atomes par maille mais des masses molaires et des paramètres de maille différents.',
        '<strong>Magnésium et titane alpha :</strong> examinez l\'empilement HC et voyez comment le rapport c/a modifie le volume de la maille hexagonale.',
        '<strong>Polonium alpha :</strong> étudiez la rare structure cubique simple et sa plus faible efficacité d\'empilement.',
        '<strong>Halite :</strong> entraînez-vous au calcul de densité par motif formulaire avec une maille conventionnelle de NaCl de type minéral plutôt qu\'avec un métal à un seul élément.',
      ],
    },
    {
      type: 'title',
      text: 'Limites d\'un modèle de maille à sphères dures',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cet outil utilise des modèles géométriques idéalisés. Les cristaux réels possèdent une densité électronique plutôt que des limites dures, et les paramètres de maille changent avec la température, la pression, la composition et les défauts. Les cristaux ioniques et covalents peuvent également nécessiter des atomes de base, des occupations partielles et des opérations de symétrie qui vont au-delà des trois structures d\'enseignement présentées ici.',
    },
    {
      type: 'paragraph',
      html: 'Utilisez les résultats pour l\'enseignement, les estimations rapides et la comparaison des familles de réseaux courantes. Pour une cristallographie publiable, vérifiez les paramètres de maille, la phase, la stœchiométrie et l\'occupation des sites à partir de données de diffraction primaires ou d\'une base de données cristallographiques organisée.',
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
