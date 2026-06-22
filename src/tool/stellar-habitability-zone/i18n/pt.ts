import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'zona-habitavel-estelar';
const description = 'Calcule e visualize a zona habitável (zona de Goldilocks) em torno de diferentes tipos de estrelas usando configurações estelares e planetárias.';
const title = 'Simulador de Zona Habitável Estelar: Encontre as Zonas de Goldilocks';

const howTo = [
  {
    name: 'Selecione um preajuste estelar',
    text: 'Escolha um tipo de estrela, de gigantes azuis a anãs vermelhas, para carregar propriedades físicas padrão como massa, luminosidade e temperatura.',
  },
  {
    name: 'Ajuste os parâmetros planetários',
    text: 'Modifique a distância orbital do planeta (semieixo maior), o albedo e o efeito estufa da atmosfera usando os controles interativos.',
  },
  {
    name: 'Analise a órbita e a habitabilidade',
    text: 'Observe o planeta orbitando a estrela em tempo real. Verifique se as temperaturas de equilíbrio e de superfície permitem água líquida.',
  },
];

const faq = [
  {
    question: 'O que é a zona habitável circunstelar?',
    answer: 'A zona habitável circunstelar (frequentemente chamada de zona de Goldilocks) é a região em torno de uma estrela onde as temperaturas da superfície planetária são suficientes para manter a água líquida sob uma determinada pressão atmosférica. Ela é definida por limites conservadores e otimistas com base na luminosidade estelar e na temperatura efetiva.',
  },
  {
    question: 'Como a luminosidade estelar afeta a zona habitável?',
    answer: 'A luminosidade estelar determina a saída total de energia da estrela. Estrelas mais quentes e massivas (como estrelas do tipo O, B ou A) são extremamente brilhantes, posicionando suas zonas habitáveis muito mais distantes. Estrelas mais frias e menos massivas (como anãs laranjas ou vermelhas do tipo K ou M) têm baixas luminosidades, deslocando suas zonas habitáveis para muito perto da estrela.',
  },
  {
    question: 'Qual é a diferença entre temperatura de equilíbrio e de superfície?',
    answer: 'A temperatura de equilíbrio é a temperatura teórica que um planeta teria assumindo que ele se comporta como um corpo negro absorvendo a radiação estelar e irradiando-a de volta para o espaço. A temperatura de superfície inclui o efeito estufa da atmosfera do planeta, que retém o calor e aquece ainda mais o planeta.',
  },
  {
    question: 'Por que o albedo é importante para a habitabilidade planetária?',
    answer: 'O albedo é a medida da refletividade da superfície do planeta. Um albedo mais alto (próximo a 1.0) significa que o planeta reflete mais da luz estelar incidente, resfriando-o. Um albedo mais baixo significa que mais radiação é absorvida, aumentando sua temperatura geral.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Simulador de Zona Habitável Estelar',
    starPresetsLabel: 'Preajustes Espectrais',
    customStarHeader: 'Parâmetros Estelares',
    starTemperature: 'Temperatura Efetiva (K)',
    starLuminosity: 'Luminosidade (L/L⊙)',
    starMass: 'Massa (M/M⊙)',
    starRadius: 'Raio (R/R⊙)',
    planetHeader: 'Parámetros Planetários',
    planetDistance: 'Distância Orbital (UA)',
    planetAlbedo: 'Albedo de Bond',
    greenhouseDelta: 'Aquecimento Estufa (K)',
    resultsHeader: 'Resultados da Simulação',
    stellarFluxResult: 'Fluxo Estelar Recebido',
    eqTempResult: 'Temperatura de Equilíbrio',
    surfTempResult: 'Temperatura de Superfície Estimada',
    orbitPeriodResult: 'Período Orbital',
    orbitVelocityResult: 'Velocidade Orbital',
    hzLimitsHeader: 'Limites da Zona Habitável',
    innerLimit: 'Limite Interno Conservador',
    outerLimit: 'Limite Externo Conservador',
    optInnerLimit: 'Limite Interno Otimista',
    optOuterLimit: 'Limite Externo Otimista',
    orbitCanvasTitle: 'Visualizador de Órbita Interativo',
    statusLabel: 'Estado de Habitabilidade',
    statusTooHot: 'MUITO QUENTE (A água evapora)',
    statusHabitable: 'HABITÁVEL (Água líquida possível)',
    statusTooCold: 'MUITO FRIO (A água congela)',
    statusExplanation: 'Com base em limites conservadores, este planeta está dentro do estado de zona habitável especificado.',
    unitsLabel: 'Sistema de Unidades',
    unitsScientific: 'Científico',
    unitsImperial: 'Imperial',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGIA: Física das Zonas Habitáveis Estelares',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A busca por vida além da Terra começa com a compreensão das condições físicas necessárias para a água líquida. Os astrobiólogos usam modelos matemáticos para mapear os limites das zonas habitáveis ao redor de diferentes tipos de estrelas. Este simulador usa os modelos de Kopparapu et al. (2013) para estimar o fluxo de energia recebido pelos planetas e determinar se eles estão na zona de Goldilocks. A zona habitável é definida como a região onde um planeta de massa terrestre com uma atmosfera de CO2-H2O-N2 pode manter água líquida em sua superfície.',
    },
    {
      type: 'title',
      text: 'Fórmulas Matemáticas e Física Atmosférica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os limites da zona habitável são determinados calculando o fluxo estelar efetivo (Seff) necessário para desencadar condições de efeito estufa descontrolado ou máximo. A equação para Seff depende da temperatura efetiva da estrela (Teff):<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>onde T* = Teff - 5780 K, e os coeficientes (a, b, c, d) são empiricamente derivados de modelos climáticos radiativos-convectivos unidimensionais. Uma vez calculado Seff, a distância orbital d em unidades astronômicas (UA) é dada por:<br><br>d = sqrt(L / Seff)<br><br>onde L é a luminosidade da estrela em relação ao Sol. A temperatura de equilíbrio (Teq) do planeta é calculada assumindo um corpo negro esférico em equilíbrio térmico:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>onde R* é o raio estelar, A é o albedo de Bond planetário, e S é o fluxo estelar recebido em unidades da constante solar da Terra.',
    },
    {
      type: 'title',
      text: 'Classificação Espectral e Limites Habitáveis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'As características estelares variam amplamente entre os tipos espectrais. Aqui está um resumo das propriedades típicas e dos limites da ZH:',
    },
    {
      type: 'table',
      headers: [
        'Classe Espectral',
        'Temperatura (K)',
        'Luminosidade (L/L⊙)',
        'Limite Interno ZH (UA)',
        'Limite Externo ZH (UA)',
      ],
      rows: [
        ['Tipo O (Gigante)', '40.000', '100.000', '300.0', '530.0'],
        ['Tipo B (Gigante)', '20.000', '1.000', '30.1', '53.2'],
        ['Tipo A (Sirius)', '8.500', '20.0', '4.2', '7.4'],
        ['Tipo F (Procyon)', '6.500', '2.5', '1.5', '2.6'],
        ['Tipo G (Sol)', '5.778', '1.0', '0.95', '1.67'],
        ['Tipo K (Anã)', '4.500', '0.15', '0.37', '0.65'],
        ['Tipo M (Anã)', '3.200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Impacto da Classe Espectral na Habitabilidade',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada classe espectral cria um ambiente de radiação e gravitacional único para seus planetas:<br><br><strong>Estrelas do Tipo O e B:</strong> Estas estrelas azuis massivas emitem radiação ultravioleta (UV) intensa e têm vidas extremamente curtas (dezenas de milhões de anos). Água líquida pode existir em seus mundos externos, mas a vida não teria tempo suficiente para evoluir antes de a estrela explodir em supernova.<br><br><strong>Estrelas do Tipo A e F:</strong> Estas estrelas são mais brilhantes e quentes que o Sol. Suas zonas habitáveis são amplas e distantes, minimizando os efeitos de acoplamento de maré. No entanto, altos níveis de radiação UV próxima podem causar danos severos a moléculas orgânicas sem uma camada de ozônio protetora.<br><br><strong>Estrelas do Tipo G (semelhantes ao Sol):</strong> Fornecendo um fluxo estável de luminosidade por bilhões de anos, representam os alvos principais na busca por vida. Sua emissão de radiação se alinha perfeitamente com os requisitos da bioquímica padrão.<br><br><strong>Estrelas do Tipo K (anãs laranjas):</strong> Consideradas por muitos astrobiólogos como os hospedeiros "superhabitáveis". Vivem dezenas de bilhões de anos, emitem menos UV prejudicial do que estrelas tipo G, e não são tão propensas às erupções violentas associadas às anãs M jovens.<br><br><strong>Estrelas do Tipo M (anãs vermelhas):</strong> As estrelas mais comuns na galáxia. Como sua zona habitável fica muito próxima (geralmente < 0,2 UA), os planetas são propensos a acoplamento de maré (um lado permanentemente voltado para a estrela). Além disso, anãs M ativas produzem ventos estelares de alta energia e erupções que podem varrer as atmosferas planetárias.',
    },
    {
      type: 'title',
      text: 'Fatores Críticos em Ambientes Planetários Habitáveis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O ambiente físico de um planeta é moldado por múltiplas variáveis que vão além da mera distância de sua estrela hospedeira:',
    },
    {
      type: 'list',
      items: [
        '<strong>Efeito Estufa Atmosférico:</strong> Gases estufa naturais elevam a temperatura da superfície acima do nível de equilíbrio de corpo negro. Planetas terrestres requerem ciclos de carbonato-silicato para estabilizar o CO2 atmosférico e regular as temperaturas ao longo de escalas de tempo geológicas.',
        '<strong>Albedo de Bond Planetário:</strong> Alta refletividade (devido a nuvens, calotas polares ou aerossóis de sulfato) resfria o planeta, enquanto baixo albedo (solos escuros, corpos d\'água) retém mais energia estelar.',
        '<strong>Campos Magnéticos:</strong> Uma forte magnetosfera planetária protege a atmosfera dos ventos estelares, impedindo o escape atmosférico não térmico e a perda de água.',
        '<strong>Dinâmica da Armadilha de Frio:</strong> O efeito de armadilha de frio na alta atmosfera impede que o vapor de água atinja altas altitudes onde a radiação UV estelar o dissociaria em hidrogênio e oxigênio.',
      ],
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
      description: description,
      applicationCategory: 'ScientificApplication',
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
