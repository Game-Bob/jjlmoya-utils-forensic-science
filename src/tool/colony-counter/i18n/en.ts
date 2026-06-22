const howTo = [
    {
      name: 'Prepare the plate image',
      text: 'Place your Petri plate against a dark background or use a trans-illuminator so colonies contrast clearly.',
    },
    {
      name: 'Identify colony types',
      text: 'Use different marker colors to group colonies by morphology, color, or size.',
    },
    {
      name: 'Mark each colony',
      text: 'Click on each visible colony. The tool automatically numbers each click to prevent repetition or missed colonies.',
    },
    {
      name: 'Calculate final concentration',
      text: 'Enter the plated volume and dilution factor to get the final result in CFU/ml or CFU/g.',
    },
  ];
const faq = [
    {
      question: 'What is CFU counting?',
      answer: 'Colony Forming Units (CFU) is a measurement that estimates the number of viable bacteria or fungal cells in a sample. It is assumed that each visible colony originated from a single cell or group of cells.',
    },
    {
      question: 'Why is a digital counter better than manual counting?',
      answer: 'Digital counting avoids human error in "losing track" while visually marking colonies. Our tool additionally allows differentiation of colony types by colors, facilitating analysis of mixed plates.',
    },
    {
      question: 'How are CFU per milliliter calculated?',
      answer: 'The number of colonies counted is multiplied by the inverted dilution factor. For example, if you count 30 colonies in a 1:100 dilution, the original sample contains 3000 CFU/ml.',
    },
    {
      question: 'When is a plate considered "uncountable"?',
      answer: 'In standard microbiology, if there are more than 250-300 colonies, the plate is considered too crowded (Too Numerous To Count, TNTC) and the data is unreliable due to colony competition.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'colony-counter';
const title = 'Colony Counter: Digital CFU Counting Tool for Petri Plates';
const description = 'Digital tool for counting bacterial colonies on Petri plates. Differentiate types, avoid errors, and calculate CFU with precision.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Click to upload your Petri dish',
    uploadSubtitle: 'Upload a photo of your plate and start counting colonies',
    currentModeLabel: 'Current Mode',
    typeA: 'Type A',
    typeB: 'Type B',
    colonyType: 'Colony Type',
    counting: 'Counting',
    totalCFU: 'Total CFU',
    undo: 'Undo Last',
    clearAll: 'Clear All',
    infoClick: 'Click on the plate to mark colonies',
    infoChange: 'Change type before marking',
    confirmClear: 'Are you sure you want to clear all marked colonies?',
  },
  seo: [
    {
      type: 'title',
      text: 'Digital Microbiology: Precise Colony Counting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Counting bacterial colonies on Petri plates is a fundamental technique in microbiology. Traditionally performed with a hand counter and marker, it is easy to lose count or mark the same colony twice. This digital tool eliminates those errors and allows visual differentiation between colony types.',
    },
    {
      type: 'title',
      text: 'Why Colony Counting Matters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The number of colonies on a plate is directly proportional to the concentration of viable microorganisms in the original sample. This data is critical in:',
    },
    {
      type: 'list',
      items: [
        '<strong>Food Quality Control:</strong> Detecting bacterial contamination.',
        '<strong>Pharmaceutical Research:</strong> Evaluating antibiotic efficacy.',
        '<strong>Clinical Diagnosis:</strong> Quantifying infections in patient samples.',
        '<strong>Biotechnology:</strong> Optimizing production cultures for recombinant proteins.',
      ],
    },
    {
      type: 'title',
      text: 'Colony Forming Units (CFU)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Each visible colony on a plate is assumed to originate from a single viable cell. That\'s why they are called <strong>CFU</strong> (Colony Forming Units).',
    },
    {
      type: 'paragraph',
      html: '<strong>Concentration Formula:</strong><br><code>CFU/mL = (Colonies Counted × Dilution Factor) / Volume Plated</code>',
    },
    {
      type: 'title',
      text: 'Best Practices for Counting',
      level: 3,
    },
    {
      type: 'title',
      text: 'Countable Range',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'The ideal range for manual counting is <strong>30 to 300 colonies</strong> per plate. Below 30, statistical error is too high. Above 300, colonies begin to merge and individual distinction becomes impossible.',
    },
    {
      type: 'title',
      text: 'Colony Types',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'On selective or differential media, it is common to see multiple colony morphologies:',
    },
    {
      type: 'list',
      items: [
        '<strong>Type A (Teal/Green):</strong> Large, mucoid colonies, typical of Gram-negative lactose-fermenting bacteria.',
        '<strong>Type B (Pink/Purple):</strong> Small, translucent colonies, non-fermenters.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Our tool allows differentiation of up to two colony types with distinct colors, facilitating differential counting without the need for physical markers.',
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

