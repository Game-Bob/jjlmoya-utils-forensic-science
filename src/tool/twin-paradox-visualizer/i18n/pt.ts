import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'visualizador-paradoxo-gemeos';
const title = 'Visualizador do Paradoxo dos Gêmeos: Dilatação do Tempo na Relatividade Especial';
const description = 'Visualize como a relatividade especial faz um gêmeo que viaja rapidamente retornar mais jovem do que o gêmeo que ficou na Terra.';

const howTo = [
  {
    name: 'Ajuste a velocidade da nave espacial',
    text: 'Use o controle deslizante de velocidade para escolher uma fração da velocidade da luz e observe o fator de Lorentz aumentar.',
  },
  {
    name: 'Escolha a duração da missão no referencial da Terra',
    text: 'Ajuste quantos anos se passam para o gêmeo que permanece na Terra durante a viagem completa de ida e volta.',
  },
  {
    name: 'Compare os relógios e as linhas de universo',
    text: 'Leia a diferença de idade, o tempo decorrido na nave, a distância no referencial da Terra e a linha de universo que marca a mudança de referenciais inerciais do gêmeo viajante.',
  },
];

const faq = [
  {
    question: 'O que é o paradoxo dos gêmeos na relatividade especial?',
    answer: 'O paradoxo dos gêmeos é um experimento mental em que um gêmeo viaja pelo espaço em velocidade relativística e depois retorna à Terra mais jovem do que o gêmeo que ficou em casa. Parece paradoxal porque cada gêmeo pode inicialmente descrever o outro como se movendo, mas o gêmeo viajante muda de referencial inercial ao fazer meia-volta, tornando os dois caminhos através do espaço-tempo não simétricos.',
  },
  {
    question: 'Por que o gêmeo viajante envelhece menos?',
    answer: 'Na relatividade especial, o tempo próprio decorrido depende do caminho através do espaço-tempo. Um relógio movendo-se a velocidade v em relação a um observador inercial tiquetaqueia mais lentamente pelo fator de Lorentz gamma. O viajante acumula menos tempo próprio ao longo do percurso do que o gêmeo que permanece na Terra.',
  },
  {
    question: 'A aceleração causa a diferença de idade?',
    answer: 'A aceleração é necessária para que o viajante inverta a direção e se reúna à Terra, mas a diferença de idade é calculada a partir do caminho completo no espaço-tempo. Mesmo que a meia-volta fosse muito breve, o caminho do viajante ainda conteria menos tempo próprio do que o caminho da Terra.',
  },
  {
    question: 'O que significa o fator de Lorentz gamma?',
    answer: 'O fator de Lorentz gamma é igual a 1 dividido pela raiz quadrada de 1 menos v ao quadrado sobre c ao quadrado. Ele quantifica o quanto intervalos de tempo, comprimentos e energias diferem entre referenciais inerciais. Em velocidades cotidianas, gamma é quase 1, mas perto da velocidade da luz ele aumenta bruscamente.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Visualização espaço-temporal do paradoxo dos gêmeos',
    controlsTitle: 'Controles do paradoxo dos gêmeos',
    worldlineLabel: 'Diagrama de linha de universo para o gêmeo terrestre e o viajante',
    earthTwin: 'Idade do gêmeo terrestre',
    travelingTwin: 'Idade do viajante',
    presetCruise: 'Cruzeiro',
    presetRelativistic: 'Relativístico',
    presetExtreme: 'Extremo',
    velocityLabel: 'Velocidade da nave',
    earthYearsLabel: 'Tempo decorrido na Terra',
    ageGapLabel: 'Diferença de idade no reencontro',
    gammaLabel: 'Fator de Lorentz',
    shipTimeLabel: 'Tempo próprio do viajante',
    distanceLabel: 'Distância de meia-volta',
    yearsUnit: 'anos',
    yearsShortUnit: 'anos',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora do Paradoxo dos Gêmeos para a Relatividade Especial',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O visualizador do paradoxo dos gêmeos transforma um dos experimentos mentais mais famosos da relatividade especial em um diagrama espaço-temporal interativo. Defina a velocidade da nave, o tempo na Terra e veja como o fator de Lorentz determina a assimetria temporal entre os gêmeos.',
    },
    {
      type: 'title',
      text: 'Como o cálculo funciona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A quantidade central é o fator de Lorentz: <strong>gamma = 1 / sqrt(1 - v^2 / c^2)</strong>. Para uma viagem de ida e volta, o tempo experimentado pelo viajante é a duração da missão na Terra dividida por gamma. A diferença entre essas durações é a diferença de idade no reencontro.',
    },
    {
      type: 'table',
      headers: ['Velocidade', 'Fator de Lorentz', 'Taxa do Relógio do Viajante', 'Significado Físico'],
      rows: [
        ['0.50c', '1.155', '86.6% da taxa terrestre', 'Efeito relativístico moderado.'],
        ['0.86c', '1.960', '51.0% da taxa terrestre', 'O viajante envelhece quase metade da taxa terrestre.'],
        ['0.98c', '5.025', '19.9% da taxa terrestre', 'Dilatação temporal extrema.'],
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