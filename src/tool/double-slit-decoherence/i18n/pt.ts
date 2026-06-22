import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-dupla-fenda-decoerencia';
const title = 'Simulador do Experimento da Dupla Fenda e Decoerência';
const description = 'Ligue e desligue detectores de caminho para ver a interferência quântica desaparecer em duas bandas de partículas num simulador visual de dupla fenda.';

const howTo = [
  {
    name: 'Comece com o detector desligado',
    text: 'Deixe o detector de caminho desativado e observe o ecrã formar franjas de interferência claras e escuras a partir de amplitudes de probabilidade coerentes.',
  },
  {
    name: 'Aumente a intensidade do detector',
    text: 'Aumente o controlo do detector para introduzir informação de caminho. Quanto mais forte o detector se torna, mais a coerência cai e as franjas desaparecem.',
  },
  {
    name: 'Altere a geometria das fendas',
    text: 'Ajuste a separação e a largura das fendas para ver como a geometria altera o espaçamento das franjas, a largura da envolvente e a distribuição final no ecrã.',
  },
  {
    name: 'Leia as métricas em tempo real',
    text: 'Use a visibilidade das franjas, a informação de caminho e a coerência para ligar o padrão visual à história da medição quântica.',
  },
];

const faq = [
  {
    question: 'Por que é que o padrão muda quando os detectores são ligados?',
    answer: 'Um detector que pode revelar qual fenda a partícula usou destrói a relação de fase entre as duas alternativas. Sem essa coerência, os dois caminhos de probabilidade já não interferem e o ecrã aproxima-se de duas bandas largas de partículas.',
  },
  {
    question: 'Este simulador significa que a consciência colapsa a função de onda?',
    answer: 'Não. O simulador centra-se na informação física de caminho e na decoerência. Um detector, o ambiente ou qualquer interação que torne o caminho distinguível pode suprimir a interferência sem necessitar de um observador consciente.',
  },
  {
    question: 'O que é a visibilidade das franjas?',
    answer: 'A visibilidade das franjas compara as regiões claras e escuras no ecrã. Visibilidade alta significa forte contraste de interferência. Visibilidade baixa significa que os espaços escuros se preencheram e o padrão comporta-se mais como dois fluxos de partículas independentes.',
  },
  {
    question: 'Isto é um resolvedor completo de mecânica quântica?',
    answer: 'Não. É um modelo educativo que combina uma envolvente de interferência de dupla fenda com um controlo de decoerência. Foi construído para explicar visualmente o efeito da medição, não para substituir uma simulação da equação de Schrödinger para um aparato real.',
  },
  {
    question: 'Por que é que a separação das fendas afeta o espaçamento das franjas?',
    answer: 'Uma separação maior cria uma diferença de fase mais rápida através do ecrã, por isso as bandas claras e escuras ficam mais próximas. Uma separação menor espalha as franjas mais amplamente.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Aparato de dupla fenda',
    controls: 'Controlos da dupla fenda',
    results: 'Resultados da dupla fenda',
    kicker: 'Controlo de medição',
    detectorToggle: 'Ativar detector de caminho',
    detectorStrength: 'Intensidade do detector',
    slitSeparation: 'Separação das fendas',
    slitWidth: 'Largura da fenda',
    unobserved: 'Não observado',
    observed: 'Observado',
    waveMode: 'Interferência',
    particleMode: 'Bandas de partículas',
    fringeVisibility: 'Visibilidade das franjas',
    whichPath: 'Informação de caminho',
    coherence: 'Coerência',
    readoutNote: 'A interferência sobrevive quando ambos os caminhos permanecem indistinguíveis. A medição torna a informação de caminho disponível e o ecrã perde as suas franjas escuras.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador do experimento da dupla fenda com decoerência e deteção de caminho',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador de dupla fenda transforma a experiência quântica clássica num modelo visual interativo. Com o detector desligado, o ecrã mostra um padrão de interferência: bandas claras e escuras produzidas porque os dois caminhos possíveis permanecem coerentes. Quando um detector de caminho é adicionado, o padrão transforma-se gradualmente em duas bandas largas de partículas porque as alternativas de caminho se tornam distinguíveis.',
    },
    {
      type: 'paragraph',
      html: 'A ferramenta foi concebida para estudantes que procuram uma explicação clara do porquê a observação altera o resultado da dupla fenda. Foca-se na ideia fisicamente útil: a interferência requer alternativas indistinguíveis, enquanto a medição e o entrelaçamento ambiental removem a relação de fase necessária para as franjas.',
    },
    {
      type: 'title',
      text: 'O que o experimento da dupla fenda demonstra',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Controlo ou métrica', 'O que altera', 'O que procurar'],
      rows: [
        ['Intensidade do detector', 'Informação de caminho disponível', 'Valores mais altos reduzem a visibilidade das franjas e aumentam o padrão de duas bandas.'],
        ['Separação das fendas', 'Distância entre aberturas', 'Maior separação torna as bandas mais apertadas no ecrã.'],
        ['Visibilidade das franjas', 'Contraste claro/escuro', 'Um número alto significa que a interferência coerente é visível.'],
        ['Coerência', 'Relação de fase entre caminhos', 'A coerência cai quando o detector torna os caminhos distinguíveis.'],
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