const slug = 'simulador-impacto-de-asteroide';
const description = 'Simule impactos de asteroides com física real. Calcule energia, cratera, radiação térmica e onda de choque. Sobreviveria a Chicxulub?';
const title = 'Simulador de Impacto de Asteroide: Calculadora do Apocalipse';
const howTo = [
    {
      name: 'Escolher o tamanho do projétil',
      text: 'Insira o diâmetro do asteroide, desde um pequeno meteorito de 10 metros até um assassino de planetas de 10 quilómetros.',
    },
    {
      name: 'Configurar velocidade e ângulo',
      text: 'Ajuste a velocidade de aproximação e o ângulo de entrada (45° é o valor estatisticamente mais provável).',
    },
    {
      name: 'Definir a natureza do asteroide',
      text: 'Selecione se o asteroide é feito de rocha, ferro ou gelo para calcular a profundidade da cratera corretamente.',
    },
    {
      name: 'Analisar o veredito de sobrevivência',
      text: 'Arraste o asteroide para o mapa e indique a que distância se encontra para ver os efeitos da radiação, sismo e onda de choque.',
    },
  ];
const faq = [
    {
      question: 'Como é calculada a energia do impacto?',
      answer: 'A energia primária é cinética: (1/2) * massa * velocidade². Utilizamos densidades realistas (ex: 3000 kg/m³ para asteroides rochosos) e velocidades típicas de entrada na atmosfera (11 a 72 km/s). A energia resultante é medida em Megatoneladas de TNT.',
    },
    {
      question: 'O que é uma onda de choque térmica?',
      answer: 'Ao entrar na atmosfera, o asteroide comprime o ar tão violentamente que cria uma bola de fogo mil vezes mais brilhante do que o Sol. A radiação térmica resultante pode causar queimaduras de terceiro grau e incendiar florestas a quilómetros do local do impacto.',
    },
    {
      question: 'Porque é que alguns asteroides não criam crateras?',
      answer: 'Rochas mais pequenas (<50m) geralmente fragmentam-se e explodem na atmosfera devido à pressão do ar (Airburst), como aconteceu em Chelyabinsk. A energia é libertada como uma poderosa onda de choque de pressão, mas não atinge o solo como um corpo sólido.',
    },
    {
      question: 'Qual é a probabilidade real de um impacto?',
      answer: 'Pequenos impactos (como na Rússia em 2013) acontecem a cada década. Impactos catastróficos (estilo Tunguska) a cada poucos séculos. Um evento de extinção global como Chicxulub acontece aproximadamente a cada 100 milhões de anos.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copiado',
    noHistory: 'Sem histórico',
    load: 'Carregar',
    delete: 'Apagar',
    activateGPS: 'Ativar GPS',
    analysisLabel: 'Análise',
    dragToMap: 'ARRASTAR PARA O MAPA',
    diameterLabel: 'Diâmetro',
    velocityLabel: 'Velocidade',
    typeLabel: 'Tipo',
    historicalData: 'Dados Históricos',
    composition: 'Composição',
    rock: 'Rocha',
    iron: 'Ferro',
    ice: 'Gelo',
    clearAll: 'Limpar tudo',
    searching: 'A procurar...',
    gpsActive: 'GPS Ativo',
    gpsError: 'Erro de GPS',
    verdictSafe: 'ZONA SEGURA',
    verdictSafeSub: 'Sem ameaças',
    verdictShock: 'ONDA DE CHOQUE',
    verdictShockSub: 'Danos estruturais',
    verdictBurned: 'RADIAÇÃO TÉRMICA',
    verdictBurnedSub: 'Perigo extremo',
    verdictVaporized: 'GROUND ZERO',
    verdictVaporizedSub: 'Impacto direto',
    presetAerial: 'Aéreo',
    presetForest: 'Floresta',
    presetComet: 'Cometa',
    presetELE: 'E.L.E. (Extinção)',
  },
  seo: [
    {
      type: 'title',
      text: 'Quando o Céu Cai: A Física do Apocalipse Cósmico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Os asteroides não são apenas rochas espaciais. São balas cósmicas que viajam a 20 km/s, capazes de libertar mais energia do que todas as armas nucleares do planeta combinadas. Este simulador traduz a física abstrata em consequências humanas tangíveis.',
    },
    {
      type: 'title',
      text: 'A Equação do Juízo Final',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tudo começa com a energia cinética: <strong>E = ½mv²</strong>. Um asteroide de 100 metros que viaja a 20 km/s liberta aproximadamente 0,5 megatoneladas de TNT. Para contextualizar, a bomba de Hiroxima tinha 0,015 megatoneladas.',
    },
    {
      type: 'paragraph',
      html: 'Mas o tamanho escala exponencialmente. Um objeto 10 vezes maior tem 1.000 vezes mais volume (e massa), libertando energia equivalente a <strong>500 megatoneladas</strong>. Chicxulub, o assassino dos dinossauros, libertou o equivalente a <strong>100 milhões de megatoneladas</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Um asteroide de 1 km que atingisse a Terra libertaria mais energia do que todas as armas nucleares do planeta detonadas simultaneamente.',
    },
    {
      type: 'title',
      text: 'Anatomia da Destruição: Camadas Concêntricas do Apocalipse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>A Cratera (Ground Zero):</strong> O diâmetro da cratera escala com E^0.3. Um impacto de 1 megatonelada cria uma cratera de ~1 km. Tudo o que estiver lá dentro é instantaneamente vaporizado.',
        '<strong>Radiação Térmica (O Clarão):</strong> A bola de fogo emite radiação infravermelha intensa. A distâncias de E^0.41 km, as roupas incendeiam-se e a pele sofre queimaduras de terceiro grau.',
        '<strong>Onda de Choque (O Martelo):</strong> A onda de sobrepressão viaja a velocidade supersónica. A 1 psi, os vidros partem-se. A 5 psi, os edifícios colapsam.',
        '<strong>Sismo (O Eco Sísmico):</strong> O impacto gera ondas sísmicas globais. Chicxulub causou um sismo de magnitude 11, quebrando a escala de Richter.',
      ],
    },
    {
      type: 'title',
      text: 'Impactos Históricos: Lições do Passado',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Local e Ano', 'Tamanho', 'Energia', 'Efeitos'],
      rows: [
        ['Chelyabinsk, Rússia (2013)', '20 metros', '500 kilotoneladas', 'Onda de choque a 100 km, 1.500 feridos, vidros partidos'],
        ['Tunguska, Sibéria (1908)', '50-60 metros', '10-15 megatoneladas', '2.000 km² de floresta arrasada, 80 milhões de árvores derrubadas'],
        ['Chicxulub, Golfo do México (66 M de anos)', '10 km', '100 milhões de megatoneladas', 'Extinção de 75% da vida na Terra'],
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


