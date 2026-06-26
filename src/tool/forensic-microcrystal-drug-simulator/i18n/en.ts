import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-microcrystal-drug-simulator';
const title = 'Forensic Microcrystal Drug Test Simulator';
const description = 'Simulate educational microcrystalline drug screening patterns by combining suspected controlled substances with classic forensic reagents and comparing crystal habit, growth speed, and polarized-light response.';

const howTo = [
  {
    name: 'Choose a suspected sample',
    text: 'Select cocaine, heroin, amphetamine, or methamphetamine to load a teaching profile for the unknown material.',
  },
  {
    name: 'Apply a microcrystal reagent',
    text: 'Switch between platinum chloride, gold chloride, and Dragendorff reagent to see how reagent chemistry changes crystal morphology.',
  },
  {
    name: 'Adjust simulated polarization',
    text: 'Move the polarization control to increase or reduce birefringent contrast in the virtual microscope field.',
  },
  {
    name: 'Compare the reference-like result',
    text: 'Use the habit label, confidence score, growth speed, and interpretation note to decide whether the pattern is reference-like, partial, or non-specific.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Are microcrystal tests confirmatory for illegal drugs?',
    answer: 'No. Microcrystal tests are presumptive or comparative screening tools. Real seized-drug identification should follow validated schemes that include appropriate controls and confirmatory instrumental methods such as GC-MS, LC-MS, or infrared spectroscopy.',
  },
  {
    key: 'faq-2',
    question: 'Why do different reagents produce different crystal shapes?',
    answer: 'The reagent forms salts, complexes, or precipitates with functional groups in the target compound. Solubility, acid strength, concentration, impurities, and drying rate influence whether the observed habit appears as needles, rosettes, prisms, plates, or weak scatter.',
  },
  {
    key: 'faq-3',
    question: 'What does polarized light add to microcrystal examination?',
    answer: 'Polarized light can increase contrast and reveal birefringence, making edges, branching, and internal crystal structure easier to compare. It does not remove the need for reference standards and controls.',
  },
  {
    key: 'faq-4',
    question: 'Why can a positive-looking pattern still be misleading?',
    answer: 'Cutting agents, mixtures, degraded material, reagent age, contamination, and analyst expectation can all produce ambiguous or overlapping morphologies. That is why presumptive results must be interpreted cautiously.',
  },
  {
    key: 'faq-5',
    question: 'Can this simulator identify an unknown substance?',
    answer: 'No. It is an educational visualization of common morphology concepts. It cannot test real evidence, measure chemistry, or issue a laboratory conclusion.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Polarized microscope',
    canvasAria: 'Animated microcrystal growth field',
    sample: 'Suspected sample',
    sampleCocaine: 'Cocaine',
    sampleHeroin: 'Heroin',
    sampleAmphetamine: 'Amphetamine',
    sampleMethamphetamine: 'Methamphetamine',
    reagent: 'Reagent shelf',
    reagentPlatinum: 'Platinum chloride',
    reagentGold: 'Gold chloride',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Polarized contrast',
    confidence: 'Match',
    growth: 'Growth',
    birefringence: 'Birefr.',
    regrow: 'Regrow crystals',
    warningLabel: 'Forensic caution',
    warningTitle: 'Screening caution',
    matchReference: 'Reference-like',
    matchPartial: 'Partial match',
    matchNonSpecific: 'Non-specific',
    habitFeatheryNeedles: 'Feathery needle bundles',
    habitRosettes: 'Rosette starbursts',
    habitBranchingPrisms: 'Branching prisms',
    habitPlates: 'Thin plates',
    habitWeakScatter: 'Sparse non-specific scatter',
    cueCocainePlatinumChloride: 'Feathery and branching needle bundles are the expected teaching pattern for cocaine with platinum chloride.',
    cueCocaineGoldChloride: 'Gold chloride can form branching orange-brown crystals, but the pattern is less specific than platinum chloride.',
    cueCocaineDragendorff: 'Dragendorff gives a weak alkaloid response here; morphology should be treated as screening information only.',
    cueHeroinPlatinumChloride: 'Plate-like deposits may appear, but this pairing is not a strong confirmatory teaching match.',
    cueHeroinGoldChloride: 'Rosette clusters and rounded starbursts are the reference-like heroin pattern in this simulator.',
    cueHeroinDragendorff: 'Dragendorff produces orange branching prisms consistent with an alkaloid screen, not an identity proof.',
    cueAmphetaminePlatinumChloride: 'Fast branching prisms suggest a stimulant-like teaching pattern under the chosen reagent.',
    cueAmphetamineGoldChloride: 'Sparse crystallization means the visual finding should be reported as non-specific.',
    cueAmphetamineDragendorff: 'Needle sprays grow quickly and are useful for teaching presumptive amphetamine comparisons.',
    cueMethamphetaminePlatinumChloride: 'Polarized rosettes may form, but the result remains a presumptive morphology comparison.',
    cueMethamphetamineGoldChloride: 'Thin plate forms are visible, though overlap with other compounds limits specificity.',
    cueMethamphetamineDragendorff: 'Dense orange branching prisms provide the strongest teaching match for methamphetamine in this set.',
    disclaimer: 'Educational screening model only. Real drug identification requires validated reference standards, reagent controls, chain of custody, and confirmatory instrumental analysis.',
  },
  seo: [
    {
      type: 'title',
      text: 'Microcrystal Drug Testing in Forensic Science',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Teaching simulator',
      title: 'What this microcrystal simulator is for',
      html: 'This tool explains how classic forensic microcrystalline tests can produce recognizable crystal habits after a suspected drug is mixed with a reagent. It helps students compare <strong>crystal morphology</strong>, growth speed, and polarized-light contrast without treating the browser result as evidence.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'teaching sample profiles', icon: 'mdi:flask-outline' },
        { value: '3', label: 'traditional reagent options', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'crystal habits modeled', icon: 'mdi:shape-outline' },
        { value: '0', label: 'legal identification claims', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'How to Interpret the Crystal Habit',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Practical comparison checklist',
      items: [
        'Start with a known reference standard and a blank reagent control before comparing an unknown.',
        'Record the reagent, concentration, drop size, drying time, temperature, and microscope magnification.',
        'Compare the overall habit first: needles, rosettes, plates, prisms, branching, or weak scatter.',
        'Treat partial or sparse growth as a reason for further testing, not as a confident identification.',
      ],
    },
    {
      type: 'table',
      headers: ['Observed habit', 'What users often ask', 'Careful interpretation'],
      rows: [
        ['Feathery needles', 'Does this look like cocaine with platinum chloride?', 'It can be a useful teaching match, but mixtures and reagent conditions can change the habit.'],
        ['Rosettes', 'Are starburst crystals diagnostic?', 'Rosettes may support a comparison when controls match, but they are not enough alone.'],
        ['Branching prisms', 'Why are stimulant screens often fast-growing?', 'Some salts nucleate quickly and branch as solvent evaporates; speed is supportive, not confirmatory.'],
        ['Weak scatter', 'Does a weak pattern mean no drug is present?', 'No. Low concentration, impurity, aged reagent, or poor preparation can suppress crystal growth.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Microcrystal screening helps with',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Fast visual comparison when a trained analyst uses controls and reference materials.',
          points: ['Classroom demonstrations', 'Morphology vocabulary', 'Presumptive triage', 'Reagent effect comparison'],
        },
        {
          title: 'Microcrystal screening cannot replace',
          icon: 'mdi:alert-circle-outline',
          description: 'Validated confirmatory chemistry for a real seized-drug conclusion.',
          points: ['Instrumental confirmation', 'Accredited procedures', 'Matrix-specific validation', 'Uncertainty documentation'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Scientific Background on Microcrystal Testing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Microcrystalline tests represent a historic and highly sensitive class of chemical screening tests utilized by forensic chemists to identify suspected controlled substances. When a small amount of a drug sample is dissolved in an acid and combined with a specific heavy metal reagent, such as gold chloride or platinum chloride, a coordination complex or insoluble salt precipitates. The molecular structure of the drug dictates the growth rate, orientation, and symmetry of the resulting crystals, producing distinctive microscopic shapes or habits.',
    },
    {
      type: 'paragraph',
      html: 'Analyzing these habits under a polarized light microscope allows forensic examiners to observe optical properties such as birefringence, where the crystal splits light into two rays, creating vivid colors and high contrast. While instrumental methods like gas chromatography mass spectrometry have largely replaced microcrystal tests for confirmatory identification, microcrystalline screening remains a valued technique due to its speed, low cost, and ability to separate optical isomers that can be challenging to differentiate by other means.',
    },
    {
      type: 'paragraph',
      html: 'In educational settings, simulating these reactions helps students understand the relationship between chemical reagents and physical crystal morphology. By observing how cocaine, heroin, and various amphetamines respond to different reagents, students learn that a single positive test is not a final forensic conclusion. Proper drug screening protocols require comparing unknown samples to known reference materials and performing reagent blanks to ensure the validity and specificity of the observed crystal patterns.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Crystal habit', definition: 'The visible shape or growth form of a crystal, such as needles, plates, prisms, or rosettes.' },
        { term: 'Nucleation', definition: 'The first formation of tiny crystal centers from which larger structures grow.' },
        { term: 'Birefringence', definition: 'Optical behavior that can make crystals appear brighter or colored under polarized light.' },
        { term: 'Presumptive test', definition: 'A screening test that suggests a possible class or compound but does not prove identity by itself.' },
        { term: 'Reference standard', definition: 'A known material tested under the same conditions to compare the unknown pattern.' },
      ],
    },
    {
      type: 'tip',
      title: 'Best practice for real evidence',
      html: 'Use microcrystal morphology as one line of inquiry. A reliable workflow includes blanks, positive controls, documentation of reagent age, independent review when needed, and confirmatory testing under an accepted seized-drug scheme.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Forensic caution',
      title: 'A pretty crystal is not a legal identification',
      html: 'The simulator deliberately separates a visual match score from a forensic conclusion. Real casework must account for mixtures, cutting agents, contamination, reagent performance, analyst training, and validated laboratory procedures.',
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
      applicationCategory: 'ForensicApplication',
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
