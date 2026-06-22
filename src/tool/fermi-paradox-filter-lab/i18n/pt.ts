const description = 'Modele o paradoxo de Fermi com entradas da equação de Drake, filtros evolutivos, tempo de vida do sinal e uma projeção temporal de civilizações detectáveis na Via Láctea.';
const slug = 'laboratorio-filtro-paradoxo-fermi';
const title = 'Laboratório do Paradoxo de Fermi';

const howTo = [
  {
    name: 'Estimar o pipeline de Drake',
    text: 'Mova os controles deslizantes de formação estelar, planeta habitável, vida, inteligência e tecnologia para definir com que frequência a Via Láctea cria civilizações detectáveis.',
  },
  {
    name: 'Ajustar a intensidade do filtro',
    text: 'Aumente o filtro evolutivo quando quiser que colapso, autodestruição, instabilidade ecológica ou gargalos tecnológicos removam civilizações mais rapidamente.',
  },
  {
    name: 'Comparar tempo de vida com horizonte',
    text: 'Use o tempo de vida do sinal e o horizonte de projeção juntos. Um tempo de vida curto pode tornar uma galáxia silenciosa mesmo quando civilizações nascem regularmente.',
  },
  {
    name: 'Ler a curva temporal',
    text: 'O gráfico mostra civilizações detectáveis ao longo do tempo, tornando a coexistência e a extinção visíveis em vez de reduzir o paradoxo de Fermi a um único número.',
  },
];

const faq = [
  {
    question: 'O que este simulador do paradoxo de Fermi calcula?',
    answer: 'Ele combina termos da equação de Drake com um filtro de sobrevivência e um horizonte temporal para estimar quantas civilizações tecnológicas podem ser detectáveis ao mesmo tempo na Via Láctea.',
  },
  {
    question: 'Isso é uma previsão de civilizações alienígenas reais?',
    answer: 'Não. É um modelo exploratório. O valor está em ver como as suposições interagem: uma galáxia pode produzir muitas civilizações ao longo da história e ainda assim ter muito poucas que se sobreponham à nossa.',
  },
  {
    question: 'O que é o Grande Filtro?',
    answer: 'O Grande Filtro é a ideia de que uma ou mais etapas entre a química simples e a civilização tecnológica longeva são extremamente improváveis ou perigosas.',
  },
  {
    question: 'Por que o tempo de vida do sinal é tão importante?',
    answer: 'A detectabilidade depende da sobreposição. Uma civilização que transmite por apenas alguns séculos pode ser real, mas invisível para outra civilização que observa em uma época diferente.',
  },
  {
    question: 'Como devo escolher as frações de vida e inteligência?',
    answer: 'Use valores baixos para um cenário pessimista de vida rara e valores mais altos ao explorar a possibilidade de que a biologia ou a inteligência surjam com frequência em mundos habitáveis estáveis.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Civilizações detectáveis projetadas ao longo do tempo',
    metricsLabel: 'Métricas do modelo de Fermi',
    controlsLabel: 'Controles do modelo de Fermi',
    birthRate: 'Taxa de nascimento',
    peakCivilizations: 'Pico de civilizações',
    finalCivilizations: 'Civilizações finais',
    silenceScore: 'Pontuação de silêncio',
    starFormationRate: 'Taxa de formação estelar',
    habitableFraction: 'Fração de planetas habitáveis',
    lifeFraction: 'Fração de surgimento de vida',
    intelligenceFraction: 'Fração de inteligência',
    technologyFraction: 'Fração de tecnologia',
    signalLifetime: 'Tempo de vida do sinal',
    filterSeverity: 'Severidade do filtro',
    horizonYears: 'Horizonte de projeção',
    maxLabel: 'máx',
    yearUnit: 'a',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'Um simulador prático do paradoxo de Fermi para suposições da equação de Drake',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O paradoxo de Fermi pergunta por que o céu noturno parece silencioso se a Via Láctea contém centenas de bilhões de estrelas e muitos planetas. Esta ferramenta transforma essa pergunta em um modelo interativo ao combinar a equação de Drake com filtros evolutivos e uma projeção temporal de civilizações detectáveis.',
    },
    {
      type: 'paragraph',
      html: 'Em vez de fornecer uma única estimativa estática, o simulador mostra como civilizações podem nascer, tornar-se detectáveis e desaparecer antes que outra sociedade tenha a chance de ouvi-las. Esse problema de sincronia é central para o SETI porque duas culturas tecnológicas precisam se sobrepor no espaço, no tempo e no comportamento do sinal.',
    },
    {
      type: 'title',
      text: 'Como o modelo usa os parâmetros da equação de Drake',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os primeiros controles representam um pipeline simplificado de Drake. A formação estelar fornece novos sistemas estelares. Uma fração desses sistemas forma planetas habitáveis, uma fração dos planetas habitáveis desenvolve vida, uma fração dos mundos vivos produz inteligência e uma fração das espécies inteligentes torna-se detectável por meio da tecnologia.',
    },
    {
      type: 'table',
      headers: ['Controle', 'Significado', 'Efeito'],
      rows: [
        ['Taxa de formação estelar', 'Novas estrelas por ano na Via Láctea', 'Aumenta ou reduz a oferta bruta de sistemas possíveis'],
        ['Fração de planetas habitáveis', 'Proporção de sistemas com mundos estáveis onde a química da água líquida poderia persistir', 'Controla quanto da galáxia entra no pipeline biológico'],
        ['Fração de surgimento de vida', 'Probabilidade de que a vida simples comece em um mundo habitável', 'Testa suposições de vida rara versus vida comum'],
        ['Fração de inteligência', 'Probabilidade de que a vida evolua cognição capaz de tecnologia', 'Representa gargalos biológicos e ecológicos'],
        ['Fração de tecnologia', 'Probabilidade de que a inteligência produza sinais detectáveis', 'Captura escolhas culturais, de engenharia e de comunicação'],
      ],
    },
    {
      type: 'title',
      text: 'Por que filtros podem fazer uma galáxia movimentada parecer vazia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O controle deslizante de severidade do filtro comprime vários possíveis pontos de falha em uma única pressão de sobrevivência: impactos de asteroides, climas instáveis, autodestruição, colapso de recursos, risco de inteligência artificial ou qualquer outro gargalo que encurte a fase detectável. Um filtro forte não significa que civilizações nunca surjam. Significa que raramente permanecem visíveis por muito tempo.',
    },
    {
      type: 'paragraph',
      html: 'Essa distinção é importante. A Via Láctea pode ter produzido milhares de espécies tecnológicas ao longo do tempo profundo, deixando quase nenhum vizinho ativo durante nossa própria janela de escuta estreita. O gráfico torna essa diferença visível ao plotar civilizações detectáveis ao longo do horizonte de projeção selecionado.',
    },
    {
      type: 'title',
      text: 'Interpretando a pontuação de silêncio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A pontuação de silêncio aumenta quando o número final de civilizações detectáveis sobrepostas é baixo. Um silêncio alto não prova que os humanos estão sozinhos; mostra que as suposições escolhidas tornam a não detecção nada surpreendente. Um silêncio baixo significa que o modelo espera uma galáxia mais barulhenta, então a ausência de evidência se torna mais interessante.',
    },
    {
      type: 'list',
      items: [
        '<strong>Alta taxa de nascimento com filtro baixo:</strong> uma galáxia populosa onde o silêncio do SETI é mais difícil de explicar.',
        '<strong>Alta taxa de nascimento com filtro alto:</strong> muitas civilizações aparecem, mas poucas sobrevivem o suficiente para se sobrepor.',
        '<strong>Frações biológicas baixas:</strong> a vida ou a inteligência é rara, então o silêncio pode surgir antes mesmo da tecnologia importar.',
        '<strong>Tempo de vida do sinal curto:</strong> civilizações podem existir, mas transmitir por tempo breve demais para que o contato seja provável.',
      ],
    },
    {
      type: 'title',
      text: 'Casos de uso para ensino, debate e intuição sobre SETI',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O Laboratório do Paradoxo de Fermi é útil em aulas de astronomia, discussões de astrobiologia, comunicação científica e debates filosóficos sobre o futuro da humanidade. Ele ajuda a separar três perguntas que muitas vezes são misturadas: com que frequência as civilizações nascem, quanto tempo permanecem detectáveis e se suas linhas do tempo se sobrepõem à nossa.',
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
