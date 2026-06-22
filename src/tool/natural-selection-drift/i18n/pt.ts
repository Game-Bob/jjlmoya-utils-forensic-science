import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulador-selecao-natural-deriva-genetica';
const title = 'Simulador de Seleção Natural e Deriva Genética';
const description =
  'Veja em tempo real como a pressão seletiva, a mutação, a deriva genética e a reprodução alteram as frequências alélicas.';

const howTo = [
  {
    name: 'Defina a população',
    text: 'Escolha uma população pequena ou grande para observar como o tamanho da amostra influencia a estabilidade evolutiva.'
  },
  {
    name: 'Ajuste seleção e deriva',
    text: 'Ajuste a pressão seletiva ou a intensidade da deriva para observar trajetórias evolutivas distintas.'
  },
  {
    name: 'Acompanhe as gerações',
    text: 'Execute a simulação e compare o traço dominante, a fitness e a diversidade ao longo do tempo.'
  },
  {
    name: 'Interprete os resultados',
    text: 'Use as métricas para entender quando a adaptação vence e quando o acaso domina.'
  },
];

const faq = [
  {
    question: 'Qual é a diferença entre seleção natural e deriva genética?',
    answer: 'A seleção natural não é aleatória: características vantajosas aumentam a fitness e tornam-se mais comuns. A deriva genética é uma mudança aleatória nas frequências alélicas, ocorrendo puramente por acaso, sendo muito mais forte em populações reduzidas.'
  },
  {
    question: 'Por que populações pequenas mudam mais rapidamente?',
    answer: 'Em populações pequenas, o erro de amostragem é maior, o que significa que o acaso tem um peso muito superior na composição da próxima geração.'
  },
  {
    question: 'A deriva pode superar a seleção?',
    answer: 'Sim. Um alelo vantajoso pode ser eliminado por puro acaso se a deriva genética for forte o suficiente para superar o benefício seletivo.'
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Tamanho da população',
    generations: 'Gerações',
    mutationRate: 'Taxa de mutação',
    selectionPressure: 'Pressão seletiva',
    driftIntensity: 'Intensidade da deriva',
    alleleCount: 'Alelos iniciais',
    innovationRate: 'Taxa de inovação',
    run: 'Executar simulação',
    dominantTrait: 'Traço dominante',
    fitness: 'Fitness final',
    diversity: 'Diversidade genética',
    evolutionConsole: 'Console evolutivo',
    populationLabel: 'População',
    aliveLabel: 'vivos',
    alleleCountsLabel: 'Contagem de alelos',
    alleleDefault: 'Alelo 1',
    populationValueLabel: 'População',
  },
  seo: [
    {
      type: 'title',
      text: 'Seleção natural vs deriva genética: entenda a evolução com uma população viva',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Este simulador oferece uma visualização clara da diferença entre a seleção adaptativa e o efeito estocástico da deriva genética, tornando conceitos complexos de biologia evolutiva acessíveis e práticos.'
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    },
  ],
};