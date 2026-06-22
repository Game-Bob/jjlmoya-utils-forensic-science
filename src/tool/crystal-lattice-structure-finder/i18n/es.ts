import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'explorador-estructura-red-cristalina';
const title = 'Explorador de Estructuras de Redes Cristalinas';
const description = 'Explora celdillas unidad cúbica simple, cúbica centrada en caras y hexagonal compacta con un visor 3D interactivo, calculadora de factor de empaquetamiento, número de coordinación y densidad teórica.';

const howTo = [
  {
    name: 'Elige una red o material',
    text: 'Empieza por una familia estructural como cúbica simple, FCC o HCP, o selecciona un material real predefinido para cargar su constante de red y masa atómica o formula.',
  },
  {
    name: 'Gira la celdilla unidad',
    text: 'Arrastra los controles de ángulo y zoom para inspeccionar qué átomos están en esquinas, caras o dentro de la celdilla convencional.',
  },
  {
    name: 'Consulta el empaquetamiento y la densidad',
    text: 'Compara el factor de empaquetamiento atómico, el número de coordinación, los átomos por celda, la masa de celda, el volumen de celda y la densidad teórica para la estructura seleccionada.',
  },
  {
    name: 'Prueba parámetros personalizados',
    text: 'Edita el parámetro de red a, la relación c/a y la masa para ver cómo cambia la densidad teórica cuando el cristal se expande, contrae o cambia de composición.',
  },
];

const faq = [
  {
    question: '¿Qué es una celdilla unidad en una red cristalina?',
    answer: 'Una celdilla unidad es la caja tridimensional repetitiva más pequeña que puede teselar el espacio para construir el cristal. Sus átomos pueden compartirse con celdillas vecinas, por lo que el número neto de átomos por celda puede ser menor que el número de esferas dibujadas en los bordes.',
  },
  {
    question: '¿Por qué FCC y HCP tienen el mismo factor de empaquetamiento?',
    answer: 'FCC y HCP ideal son ambos empaquetamientos compactos de esferas iguales. Apilan capas triangulares densas en distintas secuencias  - ABCABC para FCC y ABAB para HCP - , pero ambos llenan aproximadamente el 74 % del espacio con átomos.',
  },
  {
    question: '¿Cómo se calcula la densidad teórica?',
    answer: 'La calculadora divide la masa dentro de una celdilla unidad entre el volumen de la celdilla. La masa de la celda proviene de los átomos o unidades fórmula por celda multiplicados por la masa molar y divididos por la constante de Avogadro.',
  },
  {
    question: '¿Por qué la densidad medida puede diferir del resultado teórico?',
    answer: 'Las muestras reales pueden contener vacantes, impurezas, poros, bordes de grano, mezclas isotópicas, dilatación térmica o múltiples fases. El valor teórico asume un cristal perfecto con la constante de red seleccionada.',
  },
  {
    question: '¿Es realmente la halita una red metálica FCC?',
    answer: 'No. La halita es sal gema iónica, no un metal. El predefinido usa su celdilla derivada de FCC convencional porque el NaCl tiene cuatro unidades fórmula por celdilla cúbica, lo que resulta útil para practicar el cálculo de densidad.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Celdilla unidad cristalina interactiva',
    material: 'Material',
    lattice: 'Red',
    rotation: 'Rotación',
    zoom: 'Zoom',
    latticeA: 'Parámetro de red a',
    cRatio: 'Relación c/a',
    molarMass: 'Masa molar',
    atomsPerCell: 'Átomos por celda',
    packingFactor: 'Factor de empaquetamiento',
    coordination: 'Coordinación',
    density: 'Densidad',
    cellVolume: 'Volumen de celda',
    cellMass: 'Masa de celda',
    radius: 'Radio atómico',
    cornerAtoms: 'Átomos en esquinas',
    faceAtoms: 'Átomos en caras',
    interiorAtoms: 'Átomos interiores',
    materialNote: 'Nota del material',
    formula: 'Fórmula',
    resetView: 'Restablecer vista',
    crystalProperties: 'Propiedades del cristal',
    physicalMetrics: 'Métricas físicas',
    latticeSimpleCubic: 'Cúbica simple',
    latticeFcc: 'Cúbica centrada en caras',
    latticeHcp: 'Hexagonal compacta',
    shortSc: 'SC',
    shortFcc: 'FCC',
    shortHcp: 'HCP',
    materialCopper: 'Cobre',
    materialCopperNote: 'Metal FCC común con alta conductividad eléctrica.',
    materialAluminum: 'Aluminio',
    materialAluminumNote: 'Metal FCC ligero usado como referencia de densidad en el aula.',
    materialPolonium: 'Polonio alfa',
    materialPoloniumNote: 'Raro ejemplo de un cristal elemental cúbico simple.',
    materialMagnesium: 'Magnesio',
    materialMagnesiumNote: 'Metal HCP con una relación c/a cercana al empaquetamiento ideal.',
    materialTitanium: 'Titanio alfa',
    materialTitaniumNote: 'Fase HCP del titanio a temperatura ambiente.',
    materialHalite: 'Aproximación de halita',
    materialHaliteNote: 'La sal gema se modela mediante su celdilla FCC convencional con cuatro unidades fórmula de NaCl.',
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
    latticeBodyCenteredCubic: 'Cúbica centrada en el cuerpo',
    latticeCesiumChloride: 'Cloruro de cesio',
    latticeDiamondCubic: 'Cúbica tipo diamante',
    latticeFaceCenteredCubic: 'Cúbica centrada en caras',
    latticeHexagonalClosePacked: 'Hexagonal compacta',
    latticePerovskite: 'Perovskita cúbica',
    latticeRockSalt: 'Sal gema',
    latticeRutile: 'Rutilo',
    latticeWurtzite: 'Wurtzita',
    latticeZincBlende: 'Blenda de zinc',
    materialAlphaIron: 'Hierro alfa',
    materialAlphaIronNote: 'Fase de hierro cúbica centrada en el cuerpo a temperatura ambiente.',
    materialTungsten: 'Tungsteno',
    materialTungstenNote: 'Metal refractario BCC denso con punto de fusión muy alto.',
    materialSilicon: 'Silicio',
    materialSiliconNote: 'Semiconductor cúbico tipo diamante usado en circuitos integrados.',
    materialDiamond: 'Diamante',
    materialDiamondNote: 'Red covalente de carbono en estructura cúbica tipo diamante.',
    materialCesiumChloride: 'Cloruro de cesio',
    materialCesiumChlorideNote: 'Estructura iónica cúbica simple interpenetrada con coordinación ocho.',
    materialZincSulfide: 'Sulfuro de zinc',
    materialZincSulfideNote: 'Esfalerita, también llamada blenda de zinc, con coordinación tetraédrica.',
    materialGalliumNitride: 'Nitruro de galio',
    materialGalliumNitrideNote: 'Semiconductor wurtzita usado en LED y electrónica de potencia.',
    materialStrontiumTitanate: 'Titanato de estroncio',
    materialStrontiumTitanateNote: 'Óxido perovskita cúbico usado como sustrato y modelo dieléctrico.',
    materialRutileTitania: 'Titania rutilo',
    materialRutileTitaniaNote: 'Estructura TiO2 tipo rutilo con coordinación octaédrica del titanio.',
  },
  seo: [
    {
      type: 'title',
      text: 'Explorador de estructuras de redes cristalinas para celdillas unidad, factor de empaquetamiento y densidad',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este explorador de estructuras de redes cristalinas ayuda a conectar la imagen de una celdilla unidad con los cálculos que estudiantes y científicos de materiales suelen necesitar después. Puedes inspeccionar estructuras cúbica simple, cúbica centrada en caras y hexagonal compacta, y luego calcular el factor de empaquetamiento atómico, el número de coordinación, los átomos por celda, el radio atómico a partir del parámetro de red, el volumen de celda, la masa de celda y la densidad teórica a partir de materiales predefinidos o parámetros personalizados.',
    },
    {
      type: 'paragraph',
      html: 'El visor interactivo está diseñado para la dificultad habitual en cristalografía: los átomos en los bordes son visibles, pero solo una fracción de cada átomo del borde pertenece a la celdilla seleccionada. Rotar el modelo facilita ver la diferencia entre posiciones de esquina, posiciones de cara y posiciones interiores antes de usar la fórmula numérica.',
    },
    {
      type: 'title',
      text: 'Cúbica simple, FCC y HCP comparadas',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Estructura', 'Átomos netos por celda', 'Número de coordinación', 'Factor de empaquetamiento atómico', 'Ejemplos típicos'],
      rows: [
        ['Cúbica simple', '1', '6', '52.36 %', 'El polonio alfa es el ejemplo elemental clásico.'],
        ['Cúbica centrada en caras', '4', '12', '74.05 %', 'Cobre, aluminio, níquel, plata, oro y muchos metales dúctiles.'],
        ['Hexagonal compacta', '6', '12', '74.05 %', 'Magnesio, titanio alfa, zinc, cobalto y berilio.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'El empaquetamiento cúbico simple es fácil de visualizar porque los átomos se tocan a lo largo de la arista del cubo y cada átomo de esquina contribuye con un octavo a la celdilla. FCC añade átomos al centro de cada cara, por lo que los átomos se tocan a lo largo de las diagonales de las caras y el recuento neto pasa a ser cuatro átomos por celdilla cúbica convencional. HCP usa capas hexagonales en lugar de una caja cúbica, pero el HCP ideal alcanza el mismo límite de empaquetamiento compacto que FCC.',
    },
    {
      type: 'title',
      text: 'Fórmula del factor de empaquetamiento atómico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El factor de empaquetamiento atómico es la fracción del volumen de la celdilla unidad ocupada por átomos esféricos rígidos. Se calcula como <strong>FEA = volumen de los átomos en la celda / volumen de la celdilla unidad</strong>. Para cúbica simple esto es π / 6 porque un átomo de radio a/2 cabe en la celdilla cúbica. FCC y HCP ideal alcanzan ambos aproximadamente 0,7405, que es la fracción de empaquetamiento máxima para esferas iguales.',
    },
    {
      type: 'paragraph',
      html: 'El factor de empaquetamiento no es lo mismo que la densidad. El FEA describe la eficiencia con la que esferas idénticas llenan el espacio, mientras que la densidad también depende de la masa molar y las dimensiones de la red. Un metal HCP ligero y un metal FCC pesado pueden tener factores de empaquetamiento similares pero densidades muy diferentes.',
    },
    {
      type: 'title',
      text: 'Fórmula de densidad teórica usada por la calculadora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La calculadora usa <strong>ρ = nM / (NA V<sub>celda</sub>)</strong>. En esta ecuación, <strong>n</strong> es el número de átomos o unidades fórmula por celda, <strong>M</strong> es la masa molar en gramos por mol, <strong>NA</strong> es la constante de Avogadro y <strong>V<sub>celda</sub></strong> es el volumen de la celdilla unidad en centímetros cúbicos. Las celdillas cúbicas usan a³. Las celdillas hexagonales usan (3√3 / 2) a²c, donde c se proporciona a través de la relación c/a.',
    },
    {
      type: 'paragraph',
      html: 'Como las constantes de red suelen tabularse en ángstroms, la calculadora convierte ángstroms a centímetros antes de calcular la densidad. Un pequeño cambio en la constante de red puede afectar notablemente a la densidad porque el volumen escala con la tercera potencia para celdillas cúbicas.',
    },
    {
      type: 'title',
      text: 'Cómo usar los predefinidos de red para metales y minerales',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cobre y aluminio:</strong> compara dos metales FCC con los mismos átomos netos por celda pero distintas masas molares y constantes de red.',
        '<strong>Magnesio y titanio alfa:</strong> inspecciona el empaquetamiento HCP y observa cómo la relación c/a cambia el volumen de la celdilla hexagonal.',
        '<strong>Polonio alfa:</strong> estudia la rara estructura cúbica simple y su menor eficiencia de empaquetamiento.',
        '<strong>Halita:</strong> practica el cálculo de densidad con unidades fórmula en una celdilla convencional tipo NaCl en lugar de un metal monoatómico.',
      ],
    },
    {
      type: 'title',
      text: 'Limitaciones de un modelo de celdilla unidad con esferas rígidas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta usa modelos geométricos idealizados. Los cristales reales tienen densidad electrónica en lugar de límites rígidos, y las constantes de red cambian con la temperatura, la presión, la composición y los defectos. Los cristales iónicos y covalentes también pueden requerir átomos de base, ocupaciones parciales y operaciones de simetría que van más allá de las tres estructuras didácticas aquí mostradas.',
    },
    {
      type: 'paragraph',
      html: 'Usa los resultados con fines educativos, para estimaciones rápidas y comparación de familias de redes comunes. Para cristalografía de calidad publicable, verifica los parámetros de red, la fase, la estequiometría y la ocupación de sitios a partir de datos de difracción primarios o de una base de datos cristalográfica curada.',
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
