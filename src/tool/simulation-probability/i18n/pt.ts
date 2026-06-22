const slug = 'calculadora-probabilidade-simulacao';
const description = 'Analise se a nossa realidade é uma simulação utilizando o argumento do trilema de Nick Bostrom. Calcule a probabilidade existencial com 4 parâmetros fundamentais.';
const title = 'Calculadora de Probabilidade de Simulação: Vive num Universo Virtual?';
const howTo = [
    {
      name: 'Ajustar o Progresso Tecnológico',
      text: 'Estime a probabilidade de a humanidade atingir o nível pós-humano. 50% é neutro; aumente se acredita que a IA e a computação continuarão a avançar exponencialmente.',
    },
    {
      name: 'Definir Taxa de Sobrevivência',
      text: 'Considere a probabilidade de a humanidade não se autodestruir. Fatores como guerras, alterações climáticas, pandemias. Valores altos = otimismo sobre o nosso futuro.',
    },
    {
      name: 'Avaliar Interesse em Simular',
      text: 'Se a humanidade atingir o nível pós-humano, quereria criar simulações do seu passado? Considere as motivações: investigação científica, entretenimento, preservação histórica.',
    },
    {
      name: 'Interpretar o resultado',
      text: 'Observe como as probabilidades mudam. Resultados > 90% sugerem que a simulação é quase inevitável se os pressupostos forem cumpridos. Jogue com os parâmetros para explorar diferentes futuros.',
    },
  ];
const faq = [
    {
      question: 'O que é exatamente o argumento de Bostrom?',
      answer: 'Nick Bostrom propõe que, se uma civilização pós-humana tiver poder de computação suficiente, poderá criar milhões de simulações de universos anteriores. Se isso ocorrer, o número de seres simulados seria massivamente superior ao dos seres biológicos originais. Estatisticamente, portanto, é mais provável que seja simulado do que original.',
    },
    {
      question: 'Probabilidades altas significam que somos definitivamente uma simulação?',
      answer: 'Não. Probabilidades altas sugerem que é uma possibilidade séria que deve ser considerada, mas não é uma prova. O argumento baseia-se em pressupostos sobre o futuro da tecnologia que podem não ser cumpridos.',
    },
    {
      question: 'Como é que saber que somos uma simulação nos afetaria?',
      answer: 'Filosoficamente, muitos argumentam que não muda nada de fundamental. Se você e os seus entes queridos forem simulados em conjunto, as vossas experiências, emoções e relações permanecem reais e sentidas. A experiência vivida é o que importa, não o substrato.',
    },
    {
      question: 'Existe evidência científica de que estamos numa simulação?',
      answer: 'Não existe evidência conclusiva. Alguns físicos apontam para anomalias na mecânica quântica (quantização, entrelaçamento) como possíveis "otimizações computacionais", mas estas são interpretações especulativas.',
    },
    {
      question: 'Que valor devo atribuir a "N" (escala da simulação)?',
      answer: 'Depende das suas crenças sobre o futuro da computação. Valores baixos (100-1000) assumem limitações de recursos. Valores altos (milhões) assumem um poder de computação praticamente ilimitado. A maioria das discussões científicas utiliza valores entre 1000 e 1 bilião.',
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
    delete: 'Eliminar',
    simulationParameters: 'Parâmetros de Simulação',
    fpLabel: 'fp',
    fpSub: 'Progresso Tecnológico',
    flLabel: 'fl',
    flSub: 'Sobrevivência da Espécie',
    fiLabel: 'fi',
    fiSub: 'Interesse em Simular',
    nLabel: 'N',
    nSub: 'Escala da Simulação',
    probabilityTitle: 'Probabilidade de Simulação',
    trilemmaResult: 'Veredito do Trilema',
    scenario1: 'Cenário 1: Extinção',
    scenario2: 'Cenário 2: Desinteresse',
    scenario3: 'Cenário 3: Somos Simulados',
    fpDescription: 'Probabilidade de a humanidade atingir a capacidade técnica para simular universos com consciência.',
    flDescription: 'Probabilidade de evitar o colapso (extinção, guerra) antes de atingir o nível pós-humano.',
    fiDescription: 'Percentagem de civilizações avançadas que decidem criar simulações dos seus antepassados.',
    nDescription: 'Número de mundos simulados que cada civilização avançada normalmente executa em simultâneo.',
    verdictDetail: 'Os dados sugerem que é extremamente provável que a sua consciência seja um processo de software.',
  },
  seo: [
    {
      type: 'title',
      text: 'Vivemos numa simulação? A ciência por trás do argumento de Nick Bostrom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A ideia de que a nossa realidade poderia ser uma construção artificial, uma simulação de computador extremamente avançada, passou de ficção científica a um debate filosófico e científico sério. Em 2003, o filósofo Nick Bostrom, da Universidade de Oxford, publicou um artigo intitulado <em>"Are You Living in a Computer Simulation?"</em>, onde propôs um argumento de trilema que desafia a nossa perceção da existência.',
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora de probabilidade de simulação utiliza parâmetros fundamentais derivados da hipótese de Bostrom para estimar as possibilidades de a sua consciência ser, de facto, o resultado de um processo de software executado por uma civilização pós-humana.',
    },
    {
      type: 'title',
      text: 'Os Pilares do Argumento da Simulação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O argumento de Bostrom não afirma que estamos numa simulação, mas que pelo menos uma das três proposições seguintes é quase certamente verdadeira:',
    },
    {
      type: 'list',
      items: [
        '<strong>Extinção Prematura:</strong> A espécie humana extinguir-se-á antes de atingir uma fase pós-humana capaz de executar simulações de antepassados.',
        '<strong>Desinteresse Tecnológico:</strong> Qualquer civilização pós-humana não terá interesse em executar simulações dos seus antepassados por razões éticas ou recreativas.',
        '<strong>Simulação Ubíqua:</strong> Quase certamente vivemos numa simulação porque o número de mentes simuladas excede massivamente o número de mentes biológicas originais.',
      ],
    },
    {
      type: 'title',
      text: 'Como Interpretar os Parâmetros',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para utilizar esta ferramenta corretamente, é essencial compreender o que as variáveis do modelo representam:',
    },
    {
      type: 'table',
      headers: ['Variável', 'Conceito', 'Significado'],
      rows: [
        ['<strong>fp</strong>', 'Progresso Tecnológico', 'Probabilidade de uma civilização atingir a capacidade de simular mentes.'],
        ['<strong>fl</strong>', 'Taxa de Sobrevivência', 'Probabilidade de a civilização não se autodestruir antes de atingir esse ponto.'],
        ['<strong>fi</strong>', 'Interesse em Simular', 'Percentagem de civilizações que decidem usar o seu poder para criar mundos virtuais.'],
        ['<strong>N</strong>', 'Escala da Simulação', 'Número total de simulações que uma única civilização pós-humana criaria.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que é que a probabilidade é geralmente tão alta?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se assumirmos que uma civilização pós-humana teria um imenso poder de computação (como o de uma Esfera de Dyson ou um Cérebro de Júpiter), o número <strong>N</strong> (simulações) poderia ser de milhares de milhões. Se <em>N</em> for muito grande, mesmo com valores baixos de interesse (<em>fi</em>), o número de seres simulados excederá em ordens de magnitude os seres originais.',
    },
    {
      type: 'title',
      text: 'Evidência e Limites Computacionais',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Da física quântica à cosmologia, alguns cientistas procuram "glitches" ou limites na resolução da nossa realidade. Se o universo tiver um comprimento mínimo (Comprimento de Planck) ou comportamentos que pareçam otimizações de código (como o entrelaçamento quântico), a hipótese ganha adeptos no campo da física digital.',
    },
    {
      type: 'title',
      text: 'Reflexão Ética',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se descobríssemos que somos uma simulação, a nossa moral mudaria? Para Bostrom, o que importa é a experiência da consciência. Uma mente simulada sofre e ama tal como uma biológica.',
    },
    {
      type: 'title',
      text: 'Casos de Uso da Calculadora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Educação Científica:</strong> Compreender modelos probabilísticos aplicados à cosmologia.',
        '<strong>Filosofia Contemporânea:</strong> Explorar o trilema de Bostrom de forma interativa.',
        '<strong>Futurologia:</strong> Analisar o impacto da taxa de sobrevivência da espécie no nosso destino.',
        '<strong>Curiosidade Existencial:</strong> Avaliar as suas próprias crenças sobre o futuro da tecnologia.',
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

