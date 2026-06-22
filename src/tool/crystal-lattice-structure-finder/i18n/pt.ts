import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'explorador-estrutura-rede-cristalina';
const title = 'Explorador de Estruturas de Rede Cristalina';
const description = 'Explore células unitárias cúbica simples, cúbica de face centrada (CFC) e hexagonal compacta (HC) com um visualizador 3D interativo, calculadora de fator de empacotamento, número de coordenação e densidade teórica.';

const howTo = [
  {
    name: 'Escolha uma rede ou material',
    text: 'Comece por uma família estrutural como cúbica simples, CFC ou HC, ou selecione um material real predefinido para carregar sua constante de rede e massa atômica ou fórmula.',
  },
  {
    name: 'Gire a célula unitária',
    text: 'Arraste os controles de ângulo e zoom para inspecionar quais átomos estão nos vértices, faces ou interior da célula convencional.',
  },
  {
    name: 'Leia o empacotamento e a densidade',
    text: 'Compare o fator de empacotamento atômico, número de coordenação, átomos por célula, massa da célula, volume da célula e densidade teórica para a estrutura selecionada.',
  },
  {
    name: 'Teste constantes personalizadas',
    text: 'Edite o parâmetro de rede a, a razão c/a e a massa para ver como a densidade teórica muda quando o cristal se expande, contrai ou altera sua composição.',
  },
];

const faq = [
  {
    question: 'O que é uma célula unitária em uma rede cristalina?',
    answer: 'Uma célula unitária é o menor bloco tridimensional que se repete para preencher o espaço e construir o cristal. Seus átomos podem ser compartilhados com células vizinhas, de modo que o número líquido de átomos por célula pode ser menor que o número de esferas desenhadas nos limites.',
  },
  {
    question: 'Por que CFC e HC têm o mesmo fator de empacotamento?',
    answer: 'CFC e HC ideal são ambos arranjos compactos de esferas iguais. Eles empilham camadas triangulares densas em sequências diferentes, ABCABC para CFC e ABAB para HC, mas ambos preenchem cerca de 74% do espaço com átomos.',
  },
  {
    question: 'Como a densidade teórica é calculada?',
    answer: 'A calculadora divide a massa dentro de uma célula unitária pelo volume da célula unitária. A massa da célula vem dos átomos ou unidades de fórmula por célula multiplicados pela massa molar e divididos pela constante de Avogadro.',
  },
  {
    question: 'Por que a densidade medida pode diferir do resultado teórico?',
    answer: 'Amostras reais podem conter vacâncias, impurezas, poros, contornos de grão, misturas isotópicas, expansão térmica ou múltiplas fases. O valor teórico assume um cristal perfeito com a constante de rede selecionada.',
  },
  {
    question: 'A halita é realmente uma rede metálica CFC?',
    answer: 'Não. A halita é um sal iônico (rocha), não um metal. A predefinição usa sua célula convencional derivada da CFC porque o NaCl tem quatro unidades de fórmula por célula cúbica, o que a torna útil para praticar o cálculo de densidade.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Célula unitária cristalina interativa',
    material: 'Material',
    lattice: 'Rede',
    rotation: 'Rotação',
    zoom: 'Zoom',
    latticeA: 'Rede a',
    cRatio: 'Razão c/a',
    molarMass: 'Massa molar',
    atomsPerCell: 'Átomos por célula',
    packingFactor: 'Fator de empacotamento',
    coordination: 'Coordenação',
    density: 'Densidade',
    cellVolume: 'Volume da célula',
    cellMass: 'Massa da célula',
    radius: 'Raio atômico',
    cornerAtoms: 'Átomos nos vértices',
    faceAtoms: 'Átomos nas faces',
    interiorAtoms: 'Átomos no interior',
    materialNote: 'Nota do material',
    formula: 'Fórmula',
    resetView: 'Redefinir visão',
    crystalProperties: 'Propriedades do cristal',
    physicalMetrics: 'Métricas físicas',
    latticeSimpleCubic: 'Cúbica simples',
    latticeFcc: 'Cúbica de face centrada (CFC)',
    latticeHcp: 'Hexagonal compacta (HC)',
    shortSc: 'CS',
    shortFcc: 'CFC',
    shortHcp: 'HC',
    materialCopper: 'Cobre',
    materialCopperNote: 'Metal CFC comum com alta condutividade elétrica.',
    materialAluminum: 'Alumínio',
    materialAluminumNote: 'Metal CFC leve usado como referência de densidade em sala de aula.',
    materialPolonium: 'Polônio alfa',
    materialPoloniumNote: 'Exemplo raro de um cristal elementar cúbico simples.',
    materialMagnesium: 'Magnésio',
    materialMagnesiumNote: 'Metal HC com relação c/a próxima ao empacotamento ideal.',
    materialTitanium: 'Titânio alfa',
    materialTitaniumNote: 'Fase HC do titânio à temperatura ambiente.',
    materialHalite: 'Aproximação da halita',
    materialHaliteNote: 'O sal-gema é modelado através de sua célula CFC convencional com quatro unidades de fórmula NaCl.',
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
    latticeBodyCenteredCubic: 'Cúbica de corpo centrado',
    latticeCesiumChloride: 'Cloreto de césio',
    latticeDiamondCubic: 'Cúbica do diamante',
    latticeFaceCenteredCubic: 'Cúbica de face centrada',
    latticeHexagonalClosePacked: 'Hexagonal compacta',
    latticePerovskite: 'Perovskita cúbica',
    latticeRockSalt: 'Sal-gema',
    latticeRutile: 'Rutilo',
    latticeWurtzite: 'Wurtzita',
    latticeZincBlende: 'Blenda de zinco',
    materialAlphaIron: 'Ferro alfa',
    materialAlphaIronNote: 'Fase do ferro cúbica de corpo centrado em temperatura ambiente.',
    materialTungsten: 'Tungstênio',
    materialTungstenNote: 'Metal refratário BCC denso com ponto de fusão muito alto.',
    materialSilicon: 'Silício',
    materialSiliconNote: 'Semicondutor cúbico do diamante usado em circuitos integrados.',
    materialDiamond: 'Diamante',
    materialDiamondNote: 'Rede covalente de carbono na estrutura cúbica do diamante.',
    materialCesiumChloride: 'Cloreto de césio',
    materialCesiumChlorideNote: 'Estrutura iônica cúbica simples interpenetrada com coordenação oito.',
    materialZincSulfide: 'Sulfeto de zinco',
    materialZincSulfideNote: 'Esfalerita, também chamada blenda de zinco, com coordenação tetraédrica.',
    materialGalliumNitride: 'Nitreto de gálio',
    materialGalliumNitrideNote: 'Semicondutor wurtzita usado em LEDs e eletrônica de potência.',
    materialStrontiumTitanate: 'Titanato de estrôncio',
    materialStrontiumTitanateNote: 'Óxido perovskita cúbico usado como substrato e modelo dielétrico.',
    materialRutileTitania: 'Titânia rutilo',
    materialRutileTitaniaNote: 'Estrutura TiO2 rutilo com coordenação octaédrica do titânio.',
  },
  seo: [
    {
      type: 'title',
      text: 'Explorador de estrutura de rede cristalina para células unitárias, fator de empacotamento e densidade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este explorador de estrutura de rede cristalina ajuda a conectar a imagem de uma célula unitária com os cálculos que estudantes e cientistas de materiais geralmente precisam. Você pode inspecionar estruturas cúbica simples, cúbica de face centrada (CFC) e hexagonal compacta (HC), e então calcular o fator de empacotamento atômico, número de coordenação, átomos por célula, raio atômico a partir do parâmetro de rede, volume da célula, massa da célula e densidade teórica a partir de materiais reais predefinidos ou parâmetros personalizados.',
    },
    {
      type: 'paragraph',
      html: 'O visualizador interativo foi projetado para uma dificuldade comum em cristalografia: os átomos nos limites são visíveis, mas apenas uma fração de cada átomo na fronteira pertence à célula selecionada. Girar o modelo torna a diferença entre sítios de vértice, sítios de face e sítios internos mais fácil de enxergar antes de usar a fórmula numérica.',
    },
    {
      type: 'title',
      text: 'Comparação entre cúbica simples, CFC e HC',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Estrutura', 'Átomos líquidos por célula', 'Número de coordenação', 'Fator de empacotamento atômico', 'Exemplos típicos'],
      rows: [
        ['Cúbica simples', '1', '6', '52,36%', 'O polônio alfa é o exemplo elementar clássico.'],
        ['Cúbica de face centrada', '4', '12', '74,05%', 'Cobre, alumínio, níquel, prata, ouro e muitos metais dúcteis.'],
        ['Hexagonal compacta', '6', '12', '74,05%', 'Magnésio, titânio alfa, zinco, cobalto e berílio.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'O empacotamento cúbico simples é fácil de visualizar porque os átomos se tocam ao longo da aresta do cubo e cada átomo do vértice contribui com um oitavo para a célula. A CFC adiciona átomos ao centro de cada face, de modo que os átomos se tocam ao longo das diagonais da face e o número líquido se torna quatro átomos por célula cúbica convencional. A HC usa camadas hexagonais em vez de um cubo, mas a HC ideal atinge o mesmo limite de empacotamento compacto que a CFC.',
    },
    {
      type: 'title',
      text: 'Fórmula do fator de empacotamento atômico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O fator de empacotamento atômico é a fração do volume da célula unitária ocupada por átomos esféricos rígidos. É calculado como <strong>FEA = volume dos átomos na célula / volume da célula unitária</strong>. Para a cúbica simples, isso resulta em pi / 6, pois um átomo de raio a/2 cabe na célula cúbica. A CFC e a HC ideal alcançam cerca de 0,7405, que é a fração de empacotamento máxima para esferas iguais.',
    },
    {
      type: 'paragraph',
      html: 'O fator de empacotamento não é o mesmo que densidade. O FEA descreve a eficiência com que esferas idênticas preenchem o espaço, enquanto a densidade também depende da massa molar e das dimensões da rede. Um metal HC leve e um metal CFC pesado podem ter fatores de empacotamento semelhantes, mas densidades muito diferentes.',
    },
    {
      type: 'title',
      text: 'Fórmula da densidade teórica usada pela calculadora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A calculadora usa <strong>rho = nM / (NA Vcelula)</strong>. Nesta equação, <strong>n</strong> é o número de átomos ou unidades de fórmula por célula, <strong>M</strong> é a massa molar em gramas por mol, <strong>NA</strong> é a constante de Avogadro e <strong>Vcelula</strong> é o volume da célula unitária em centímetros cúbicos. Células cúbicas usam a^3. Células hexagonais usam (3 sqrt(3) / 2) a^2 c, com c fornecido pela razão c/a.',
    },
    {
      type: 'paragraph',
      html: 'Como as constantes de rede geralmente são tabeladas em angstroms, a calculadora converte angstroms para centímetros antes de calcular a densidade. Uma pequena mudança na constante de rede pode afetar visivelmente a densidade porque o volume escala com a terceira potência para células cúbicas.',
    },
    {
      type: 'title',
      text: 'Como usar predefinições de rede para metais e minerais',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cobre e alumínio:</strong> compare dois metais CFC com o mesmo número líquido de átomos por célula, mas massas molares e constantes de rede diferentes.',
        '<strong>Magnésio e titânio alfa:</strong> inspecione o empacotamento HC e veja como a razão c/a altera o volume da célula hexagonal.',
        '<strong>Polônio alfa:</strong> estude a rara estrutura cúbica simples e sua menor eficiência de empacotamento.',
        '<strong>Halita:</strong> pratique a densidade com unidades de fórmula usando uma célula convencional mineral de NaCl em vez de um metal monoelementar.',
      ],
    },
    {
      type: 'title',
      text: 'Limitações de um modelo de célula unitária de esferas rígidas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta usa modelos geométricos idealizados. Cristais reais têm densidade eletrônica em vez de limites rígidos, e as constantes de rede mudam com temperatura, pressão, composição e defeitos. Cristais iônicos e covalentes também podem exigir átomos de base, ocupações parciais e operações de simetria que vão além das três estruturas didáticas mostradas aqui.',
    },
    {
      type: 'paragraph',
      html: 'Use os resultados para educação, estimativas rápidas e comparação de famílias comuns de redes. Para cristalografia com qualidade de publicação, verifique parâmetros de rede, fase, estequiometria e ocupação de sítios a partir de dados primários de difração ou de um banco de dados cristalográfico selecionado.',
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
