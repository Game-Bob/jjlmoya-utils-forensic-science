import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { DnaProfileMatchProbabilityUI } from '../ui';

const slug = 'dna-profile-match-probability-lab';
const title = 'DNA Profile Match Probability Lab';
const description = 'Explore how allele frequencies and Hardy Weinberg genotype rules combine into an educational random match probability for a small STR profile.';

const ui: DnaProfileMatchProbabilityUI = {
  controls: 'Profile controls',
  controlKicker: 'Build a profile',
  controlHelper: 'Use a classroom preset or open each locus to edit the alleles and their population frequencies.',
  presets: 'Classroom presets',
  presetbalanced: 'Balanced',
  presethomozygote: 'Homozygotes',
  presetclassroom: 'Simple class',
  loci: 'loci',
  locus: 'Locus',
  locusName: 'Locus name',
  alleleA: 'Allele A',
  alleleB: 'Allele B',
  frequencyA: 'Frequency A (%)',
  frequencyB: 'Frequency B (%)',
  removeLocus: 'Remove locus',
  addLocus: 'Add locus',
  disclaimer: 'Educational simulator. It does not identify a person, validate a case, or replace a laboratory calculation.',
  sceneKicker: 'Signal trace',
  electropherogram: 'Profile trace',
  sceneNote: 'Two peaks show the two alleles entered for each locus. Peak height is a visual cue for frequency, not a lab signal.',
  peakHeight: 'Peak height scales with entered frequency',
  results: 'Probability results',
  resultKicker: 'Random match probability',
  locusBreakdown: 'Locus by locus calculation',
  genotype: 'Genotype',
  rule: 'Rule',
  frequency: 'Genotype frequency',
  badgeNeedsData: 'Needs data',
  badgeExploratory: 'Exploratory',
  badgeCalculated: 'Calculated model',
  needsData: 'Complete every locus with two alleles, frequencies between 0 and 100 percent, and a frequency pair no greater than 100 percent.',
  exploratoryResult: 'This small profile is useful for learning the method. More loci can make a profile rarer, but do not make the model a case conclusion.',
  calculatedResult: 'The product is calculated from the entered frequencies under simplified independence assumptions.',
  notCalculated: 'Not calculated',
  completeFields: 'Complete the profile fields to see a result.',
  ofRandomProfiles: 'of random profiles under this classroom model',
  missingValue: 'Unnamed locus',
};

const faq = [
  {
    question: 'What does random match probability mean?',
    answer: 'It is the estimated probability that a randomly selected unrelated person would have the entered profile under the selected allele frequencies and assumptions. It is not the probability that a person is guilty or that a sample came from a particular person.',
  },
  {
    question: 'How is a genotype frequency calculated?',
    answer: 'For a homozygote the simulator uses p squared. For a heterozygote it uses 2pq, where p and q are the entered allele frequencies. The locus frequencies are then multiplied across the profile.',
  },
  {
    question: 'Why are the preset frequencies synthetic?',
    answer: 'The presets are deliberately small classroom examples. Real forensic work needs a validated, representative population database, documented sampling, uncertainty estimates, and laboratory review.',
  },
  {
    question: 'Can this tool compare two people or identify a DNA sample?',
    answer: 'No. It does not accept biological samples, compare two profiles, search a database, or identify anyone. It only explores a mathematical model from values you enter.',
  },
  {
    question: 'Why is a very small probability not a verdict?',
    answer: 'A random match probability depends on the population database, the independence assumptions, the quality of the profile, and how the person was selected. A forensic conclusion also needs propositions, validation, context, and qualified interpretation.',
  },
];

const howTo = [
  {
    name: 'Choose a classroom preset',
    text: 'Start with the balanced, homozygote, or simple class preset to see how different genotype patterns change the calculation.',
  },
  {
    name: 'Open a locus and edit its profile',
    text: 'Enter a locus name, two alleles, and the frequency of each allele as a percentage. The two allele names can be the same for a homozygote.',
  },
  {
    name: 'Read the locus rule',
    text: 'The table shows p squared for a homozygote and 2pq for a heterozygote, followed by the resulting genotype frequency.',
  },
  {
    name: 'Interpret the combined result carefully',
    text: 'The large result is written as one in a power of ten. Treat it as an educational model and keep the assumptions visible when discussing it.',
  },
];

export const content: ToolLocaleContent<DnaProfileMatchProbabilityUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'DNA Profile Match Probability Calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This DNA profile match probability lab helps students and curious readers explore how a small autosomal STR profile becomes a probability under a simplified population genetics model. Enter two alleles and their frequencies for each locus. The calculator applies the <strong>Hardy Weinberg genotype rule</strong> and multiplies the locus frequencies to show a classroom random match probability.',
    },
    {
      type: 'paragraph',
      html: 'The interface keeps the calculation visible: the trace shows the entered alleles, the table shows each genotype frequency, and the final result is expressed as <strong>one in a power of ten</strong>. The frequencies in the presets are synthetic teaching values, not an official population database.',
    },
    {
      type: 'title',
      text: 'How the Genotype Rule Works',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Profile pattern', 'Calculation', 'Meaning'],
      rows: [
        ['Two copies of one allele', 'p²', 'The allele frequency is multiplied by itself.'],
        ['Two different alleles', '2pq', 'The two allele frequencies are multiplied and doubled.'],
        ['Several independent loci', 'Product of locus values', 'Each locus contributes to the combined profile frequency.'],
      ],
    },
    {
      type: 'title',
      text: 'Why Population Frequencies Matter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Allele frequencies are estimates from population databases. The relevant population, sampling method, database size, substructure, relatedness, and validation all affect how confidently a genotype frequency can be used. A synthetic preset can demonstrate the arithmetic, but it cannot stand in for a validated forensic database.',
    },
    {
      type: 'paragraph',
      html: 'The result is best understood as a conditional statement: if the entered frequencies describe the relevant population, if the profile is a clean single source, and if the loci are treated as independent, then the product estimates how often that profile could appear in unrelated random people. Changing any of those assumptions can change the interpretation. The tool intentionally keeps the data editable so that this dependency is visible rather than hidden behind a single authoritative looking number.',
    },
    {
      type: 'paragraph',
      html: 'In a real case, analysts also document how a profile was selected, whether a database search influenced the investigation, whether the sample is a mixture, and whether relatives or population substructure need special treatment. Those questions are outside this small laboratory. Use the trace and table to explain the arithmetic, then use the limitations to explain why arithmetic alone is not a forensic opinion.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use one population context:</strong> Do not mix frequencies from unrelated databases.',
        '<strong>Keep assumptions visible:</strong> This lab assumes unrelated contributors and simplified independence between loci.',
        '<strong>Separate probability from identity:</strong> A rare profile is not a statement about guilt, source, or legal certainty.',
        '<strong>Document the data:</strong> A formal report needs the source, population, method, uncertainty, and interpretation.',
      ],
    },
    {
      type: 'title',
      text: 'Educational Limits',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Use this as a model, not a verdict',
      html: 'This calculator does not analyse electropherograms, model mixtures, correct for population substructure, apply theta corrections, estimate likelihood ratios, or search a DNA database. It is for learning how simple genotype frequencies combine.',
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
