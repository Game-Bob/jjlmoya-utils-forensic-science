const description = 'Model the Fermi paradox with Drake equation inputs, evolutionary filters, signal lifetime, and a time projection of detectable Milky Way civilizations.';
const slug = 'fermi-paradox-filter-lab';
const title = 'Fermi Paradox Filter Lab';

const howTo = [
  {
    name: 'Estimate the Drake pipeline',
    text: 'Move the star formation, habitable planet, life, intelligence, and technology sliders to define how often the Milky Way creates detectable civilizations.',
  },
  {
    name: 'Set the filter strength',
    text: 'Increase the evolutionary filter when you want collapse, self-destruction, ecological instability, or technological bottlenecks to remove civilizations faster.',
  },
  {
    name: 'Compare lifetime with horizon',
    text: 'Use signal lifetime and projection horizon together. A short lifetime can make a galaxy silent even when civilizations are born regularly.',
  },
  {
    name: 'Read the temporal curve',
    text: 'The chart shows detectable civilizations through time, making coexistence and extinction visible instead of reducing the Fermi paradox to one number.',
  },
];

const faq = [
  {
    question: 'What does this Fermi paradox simulator calculate?',
    answer: 'It combines Drake equation terms with a survival filter and a time horizon to estimate how many technological civilizations may be detectable at the same time in the Milky Way.',
  },
  {
    question: 'Is this a prediction of real alien civilizations?',
    answer: 'No. It is an exploratory model. The value is in seeing how assumptions interact: a galaxy can produce many civilizations across history while still having very few that overlap with us.',
  },
  {
    question: 'What is the Great Filter?',
    answer: 'The Great Filter is the idea that one or more steps between simple chemistry and long-lived technological civilization are extremely unlikely or dangerous.',
  },
  {
    question: 'Why does signal lifetime matter so much?',
    answer: 'Detectability depends on overlap. A civilization that broadcasts for only a few centuries may be real but invisible to another civilization observing in a different epoch.',
  },
  {
    question: 'How should I choose the life and intelligence fractions?',
    answer: 'Use low values for a pessimistic rare-life scenario and higher values when exploring the possibility that biology or intelligence emerges often on stable habitable worlds.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Projected detectable civilizations through time',
    metricsLabel: 'Fermi model metrics',
    controlsLabel: 'Fermi model controls',
    birthRate: 'Birth rate',
    peakCivilizations: 'Peak civilizations',
    finalCivilizations: 'Final civilizations',
    silenceScore: 'Silence score',
    starFormationRate: 'Star formation rate',
    habitableFraction: 'Habitable planet fraction',
    lifeFraction: 'Life emergence fraction',
    intelligenceFraction: 'Intelligence fraction',
    technologyFraction: 'Technology fraction',
    signalLifetime: 'Signal lifetime',
    filterSeverity: 'Filter severity',
    horizonYears: 'Projection horizon',
    maxLabel: 'max',
    yearUnit: 'yr',
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
      text: 'A practical Fermi paradox simulator for Drake equation assumptions',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The Fermi paradox asks why the night sky appears silent if the Milky Way contains hundreds of billions of stars and many planets. This tool turns that question into an interactive model by combining the Drake equation with evolutionary filters and a time projection of detectable civilizations.',
    },
    {
      type: 'paragraph',
      html: 'Instead of giving a single static estimate, the simulator shows how civilizations can be born, become detectable, and vanish before another society has a chance to hear them. That timing problem is central to SETI because two technological cultures must overlap in space, time, and signal behavior.',
    },
    {
      type: 'title',
      text: 'How the model uses Drake equation parameters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The first controls represent a simplified Drake pipeline. Star formation supplies new stellar systems. A fraction of those systems form habitable planets, a fraction of habitable planets develop life, a fraction of living worlds produce intelligence, and a fraction of intelligent species become detectable through technology.',
    },
    {
      type: 'table',
      headers: ['Control', 'Meaning', 'Effect'],
      rows: [
        ['Star formation rate', 'New stars per year in the Milky Way', 'Raises or lowers the raw supply of possible systems'],
        ['Habitable planet fraction', 'Share of systems with stable worlds where liquid water chemistry could persist', 'Controls how much of the galaxy enters the biological pipeline'],
        ['Life emergence fraction', 'Probability that simple life begins on a habitable world', 'Tests rare-life versus common-life assumptions'],
        ['Intelligence fraction', 'Probability that life evolves technology-capable cognition', 'Represents biological and ecological bottlenecks'],
        ['Technology fraction', 'Probability that intelligence produces detectable signals', 'Captures culture, engineering, and communication choices'],
      ],
    },
    {
      type: 'title',
      text: 'Why filters can make a busy galaxy look empty',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The filter severity slider compresses many possible failure points into one survival pressure: asteroid impacts, unstable climates, self-destruction, resource collapse, artificial intelligence risk, or any other bottleneck that shortens the detectable phase. A strong filter does not mean civilizations never arise. It means they rarely remain visible for long.',
    },
    {
      type: 'paragraph',
      html: 'That distinction matters. The Milky Way could have produced thousands of technological species over deep time while leaving almost no neighbors active during our own narrow listening window. The chart makes this difference visible by plotting detectable civilizations through the selected projection horizon.',
    },
    {
      type: 'title',
      text: 'Interpreting the silence score',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The silence score rises when the final number of overlapping detectable civilizations is low. High silence does not prove that humans are alone; it shows that the chosen assumptions make non-detection unsurprising. Low silence means the model expects a louder galaxy, so the absence of evidence becomes more interesting.',
    },
    {
      type: 'list',
      items: [
        '<strong>High birth rate plus low filter:</strong> a crowded galaxy where SETI silence is harder to explain.',
        '<strong>High birth rate plus high filter:</strong> many civilizations appear, but few survive long enough to overlap.',
        '<strong>Low biological fractions:</strong> life or intelligence is rare, so silence can emerge before technology even matters.',
        '<strong>Short signal lifetime:</strong> civilizations may exist but broadcast too briefly for contact to be likely.',
      ],
    },
    {
      type: 'title',
      text: 'Use cases for teaching, debate, and SETI intuition',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The Fermi Paradox Filter Lab is useful in astronomy lessons, astrobiology discussions, science communication, and philosophical debates about humanitys future. It helps separate three questions that are often blended together: how often civilizations are born, how long they remain detectable, and whether their timelines overlap with ours.',
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
