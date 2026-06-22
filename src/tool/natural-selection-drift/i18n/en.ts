import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'natural-selection-drift';
const title = 'Natural Selection and Genetic Drift Simulator';
const description = 'See how selection pressure, mutation, drift, and reproduction change allele frequencies over time with an interactive evolution simulator that explains why populations adapt, diversify, or collapse.';
const howTo = [
  {
    name: 'Set the population',
    text: 'Choose a small or large population to see how sample size changes evolutionary stability and how easily chance can dominate the outcome.',
  },
  {
    name: 'Tune selection and drift',
    text: 'Increase selection pressure to favor one trait, or raise drift intensity to make chance dominate the outcome when populations are small or fluctuating.',
  },
  {
    name: 'Watch generations unfold',
    text: 'Run the simulation and compare dominant traits, fitness, and diversity across time so you can see whether adaptation or randomness wins.',
  },
  {
    name: 'Interpret the balance',
    text: 'Use the final metrics to understand when adaptation wins, when random fluctuation takes over, and why the same starting point can lead to different outcomes.',
  },
];
const faq = [
  {
    question: 'What is the difference between natural selection and genetic drift?',
    answer: 'Natural selection is a non-random process where traits that improve survival or reproduction become more common. Genetic drift is random change in allele frequencies, and it is strongest in small populations.',
  },
  {
    question: 'Why do small populations change faster?',
    answer: 'With fewer individuals, random sampling has a larger effect. That means chance events can move trait frequencies more dramatically from one generation to the next.',
  },
  {
    question: 'Can drift overpower selection?',
    answer: 'Yes. If drift is strong enough, a beneficial trait may still disappear by chance, especially when the population is small or selection pressure is weak.',
  },
  {
    question: 'What does fitness mean in this simulator?',
    answer: 'Fitness is a simplified score representing how well the current population is adapted to the chosen environment. It is a teaching metric, not a laboratory measurement.',
  },
  {
    question: 'Why does population size matter so much?',
    answer: 'Population size determines how strongly random sampling affects allele frequencies. In large populations, selection is easier to see because random noise averages out. In small populations, chance can overpower a seemingly beneficial trait.',
  },
  {
    question: 'When should I use this simulator instead of a textbook explanation?',
    answer: 'Use it when you want to understand the intuition behind evolution, especially the difference between a directional force like selection and a stochastic force like drift. It is useful for students, teachers, and anyone trying to connect the concept to real population behavior.',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Population size',
    generations: 'Generations',
    mutationRate: 'Mutation rate',
    selectionPressure: 'Selection pressure',
    driftIntensity: 'Drift intensity',
    alleleCount: 'Initial alleles',
    innovationRate: 'Innovation rate',
    run: 'Run simulation',
    dominantTrait: 'Dominant trait',
    fitness: 'Final fitness',
    diversity: 'Genetic diversity',
    evolutionConsole: 'Evolution console',
    populationLabel: 'Population',
    aliveLabel: 'alive',
    alleleCountsLabel: 'Allele counts',
    alleleDefault: 'Allele 1',
    populationValueLabel: 'Population',
  },
  seo: [
    {
      type: 'title',
      text: 'Natural Selection vs Genetic Drift: Understand Evolution Through a Live Population Simulator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'If you are trying to understand natural selection vs genetic drift, this simulator gives you the missing visual layer. Instead of reading a static definition, you can watch a population change in real time as selection pressure, mutation rate, drift intensity, and reproduction interact. That makes it much easier to connect the textbook idea of evolution with the actual behavior of alleles inside a living system.',
    },
    {
      type: 'title',
      text: 'What the Controls Mean and Why They Matter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natural selection is the non-random part of evolution. It increases the frequency of traits that improve survival or reproduction in a given environment. Genetic drift is the random part. It changes allele frequencies because not every individual contributes equally to the next generation, and those fluctuations become especially important when the population is small.',
    },
    {
      type: 'paragraph',
      html: 'The key idea is that both forces are always present. Selection tries to push the population in one direction, while drift can pull it somewhere else entirely. In a large population, selection usually has the stronger voice. In a small population, randomness can erase a useful trait, fix a neutral trait, or completely change the evolutionary outcome.',
    },
    {
      type: 'title',
      text: 'How to Read the Simulation Results',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The live metrics help you read the system as it changes. Dominant trait tells you which allele currently leads. Genetic diversity shows how much variation is still present. Final fitness gives a quick summary of how well the population is adapted to the selected environment. Alive and population show whether the lineage is expanding or collapsing.',
    },
    {
      type: 'title',
      text: 'Why Population Size Changes the Story',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Selection pressure:</strong> How strongly the environment rewards one trait over another and how quickly that advantage can spread.',
        '<strong>Drift intensity:</strong> How much random sampling noise changes the population each generation, even when no trait is objectively better.',
        '<strong>Mutation rate:</strong> How often new variation enters the system and prevents the population from becoming completely static.',
        '<strong>Allele count:</strong> How many explicit alleles are present at the start and how quickly new variants appear once innovation is enabled.',
        '<strong>Genetic diversity:</strong> Why variation is the raw material of evolution and why losing it makes populations more vulnerable.',
      ],
    },
    {
      type: 'paragraph',
      html: 'The result is a fast, practical way to understand evolution without needing to guess how the abstract terms interact. If you want a simulator that explains natural selection, genetic drift, mutation, reproduction, and why the same starting conditions can end in different outcomes, this tool is built for that exact search intent.',
    },
    {
      type: 'title',
      text: 'Quick Examples of What to Try',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Goal', 'What to change', 'What you should see'],
      rows: [
        ['Show selection winning', 'Raise selection pressure and keep drift low', 'One allele should dominate over time and diversity should drop more slowly'],
        ['Show randomness taking over', 'Lower population size and increase drift', 'Allele counts should swing unpredictably, even without a clear fitness advantage'],
        ['Show mutation creating new variation', 'Increase mutation and innovation rate', 'New alleles should appear and the ranking should reshuffle more often'],
      ],
    },
    {
      type: 'paragraph',
      html: 'That combination of live visuals, explicit allele ranking, and real-time metrics makes the simulator useful both as a teaching tool and as a quick way to explain evolutionary tradeoffs without hand-waving.',
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
