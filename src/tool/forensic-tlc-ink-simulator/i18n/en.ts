import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-tlc-ink-simulator';
const title = 'Forensic TLC Ink Chromatography Simulator';
const description = 'Simulate thin-layer chromatography of questioned writing inks, visualize solvent-front development, separate dye bands, and calculate exact Rf values for each pigment.';

const howTo = [
  {
    name: 'Choose the questioned ink or comparison pen',
    text: 'Select the ransom-note ink or a candidate pen profile. Each ink contains a different set of dye components with distinct polarity and stationary-phase affinity.',
  },
  {
    name: 'Select the mobile phase',
    text: 'Change the solvent system to see how solvent polarity alters capillary development and the relative migration of each dye band.',
  },
  {
    name: 'Develop the TLC plate',
    text: 'Move the development-time slider and watch the solvent front rise through the plate while separated bands appear above the origin line.',
  },
  {
    name: 'Read the Rf table',
    text: 'Compare each pigment distance with the solvent-front distance. The simulator calculates Rf as pigment distance divided by solvent-front distance.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'What does Rf mean in thin-layer chromatography?',
    answer: 'Rf is the retention factor: the distance traveled by the compound divided by the distance traveled by the solvent front from the same origin line. It is unitless and normally ranges from 0 to 1.',
  },
  {
    key: 'faq-2',
    question: 'Can TLC prove that two ink samples came from the same pen?',
    answer: 'No. TLC can show whether dye patterns are consistent or inconsistent, but source attribution requires validated comparison methods, controls, documentation, and expert interpretation.',
  },
  {
    key: 'faq-3',
    question: 'Why does changing the solvent alter the band pattern?',
    answer: 'Dyes partition differently between the stationary phase and the mobile phase. A solvent with a better polarity match can carry a dye farther, increasing its Rf value.',
  },
  {
    key: 'faq-4',
    question: 'Why is the origin line important?',
    answer: 'Both the solvent-front distance and pigment distance must be measured from the origin line. Measuring from the bottom of the plate produces incorrect Rf values.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Thin-layer chromatography chamber with developing plate',
    rulerAria: 'Virtual millimeter ruler for measuring solvent front and pigment bands',
    rulerMarks: '80,60,40,20,0',
    units: 'Unit system',
    metric: 'Metric',
    imperial: 'Imperial',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'min',
    inkSample: 'Ink sample',
    ransomNote: 'Questioned ransom-note ink',
    bluePen: 'Seized blue ballpoint',
    blackPen: 'Seized black ballpoint',
    gelPen: 'Seized gel pen',
    solventSystem: 'Mobile phase',
    ethanolWater: 'Ethanol / water',
    butanolAcetic: 'Butanol / acetic acid',
    isopropanolAmmonia: 'Isopropanol / ammonia',
    developmentTime: 'Development time',
    frontDistance: 'Solvent travel',
    matchScore: 'Pattern similarity',
    solventFront: 'Solvent front',
    originLine: 'Origin',
    pigment: 'Pigment band',
    pigmentCyanDye: 'cyan dye',
    pigmentVioletDye: 'violet dye',
    pigmentGrayCarrier: 'gray carrier',
    pigmentNavyDye: 'navy dye',
    pigmentYellowDye: 'yellow dye',
    pigmentRedDye: 'red dye',
    pigmentBlueDye: 'blue dye',
    pigmentDarkBinder: 'dark binder',
    pigmentTealDye: 'teal dye',
    pigmentMagentaDye: 'magenta dye',
    pigmentGelBinder: 'gel binder',
    distance: 'Distance',
    rfValue: 'Rf value',
    disclaimer: 'Educational simulation only. Forensic ink comparison requires original documents, validated laboratory methods, reference standards, and qualified document examiners.',
  },
  seo: [
    {
      type: 'title',
      text: 'Thin-Layer Chromatography for Forensic Ink Comparison',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Teaching simulator',
      title: 'What this TLC ink simulator helps you understand',
      html: 'This tool explains how <strong>thin-layer chromatography of writing inks</strong> can separate a visible ink line into multiple dye bands. It is designed for forensic science students, document-examination learners, and anyone trying to understand how Rf values are calculated from a developed TLC plate.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d band / d solvent', label: 'retention-factor formula', icon: 'mdi:division' },
        { value: '4', label: 'ink profiles compared', icon: 'mdi:pen' },
        { value: '3', label: 'mobile phases simulated', icon: 'mdi:flask-outline' },
        { value: '2', label: 'metric and imperial readouts', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Correct TLC measurement checklist',
      items: [
        'Mark the origin line above the solvent level before development starts.',
        'Remove the plate before the solvent reaches the top edge.',
        'Mark the solvent front immediately because it can evaporate or become hard to see.',
        'Measure pigment travel and solvent travel from the same origin line.',
        'Report Rf values with the solvent system, plate type, development conditions, and controls.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'What TLC can support',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'TLC can show whether questioned and known inks have similar dye separation behavior under the same conditions.',
          points: ['Screening comparison', 'Dye-pattern visualization', 'Rf documentation', 'Selection of samples for confirmatory testing'],
        },
        {
          title: 'What TLC cannot prove alone',
          icon: 'mdi:alert-circle-outline',
          description: 'TLC by itself cannot uniquely identify a pen, date a document, or prove authorship.',
          points: ['No unique source attribution', 'No writer identification', 'No aging conclusion by default', 'No replacement for validated protocols'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Question users ask', 'TLC concept involved', 'Careful answer'],
      rows: [
        ['How do you calculate Rf?', 'Distance of dye divided by distance of solvent front.', 'Measure both from the origin line, then divide. The result has no unit.'],
        ['Why do inks split into colors?', 'Different dyes have different affinity for the stationary and mobile phases.', 'A single written stroke may contain several colorants that migrate at different rates.'],
        ['Can two pens have the same TLC pattern?', 'Yes, similar formulations can produce close patterns.', 'Similarity supports consistency, not individualization to one pen.'],
        ['Why did my Rf change?', 'Solvent, plate, humidity, saturation, temperature, and spotting size affect migration.', 'Rf values are only comparable when conditions are controlled and documented.'],
      ],
    },
    {
      type: 'title',
      text: 'How the Simulator Models Separation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The model treats solvent-front movement as a capillary rise process that slows over time, while each dye receives an Rf value based on two simplified properties: its affinity for the moving solvent and its polarity match with the selected mobile phase. This is intentionally educational rather than instrument-grade chemistry, but it preserves the core relationship users need to learn: the solvent moves first, dyes partition between phases, and Rf is calculated from measured travel distances.',
    },
    {
      type: 'paragraph',
      html: 'Thin-layer chromatography is a widely accepted analytical technique in forensic laboratories due to its simplicity, speed, and cost-effectiveness. In the context of document examination, it is primarily used to compare the dye compositions of different ink samples. Forensic scientists extract a small plug of ink from a questioned document using a scalpel or a hollow needle, dissolve it in a suitable solvent such as pyridine or methanol, and spot it onto the TLC plate alongside reference ink standards.',
    },
    {
      type: 'paragraph',
      html: 'Once the plate is developed in a closed chamber, the individual components of the ink separate based on their differential partitioning between the stationary silica gel phase and the mobile solvent phase. The resulting chromatogram provides a visual fingerprint of the ink, displaying distinct bands of colors at specific heights. Document examiners then calculate the retention factor for each visible dye band, helping to determine if the questioned ink is chemically consistent with a suspect writing instrument or if it matches a known brand and formula in an ink reference database.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stationary phase', definition: 'The coating on the TLC plate, commonly silica gel, that interacts with compounds and slows their movement.' },
        { term: 'Mobile phase', definition: 'The solvent system that rises through the plate and carries dye components with it.' },
        { term: 'Origin line', definition: 'The pencil line where the ink sample is applied before development.' },
        { term: 'Solvent front', definition: 'The highest point reached by the mobile phase before the plate is removed.' },
        { term: 'Rf value', definition: 'The retention factor: compound travel distance divided by solvent-front travel distance.' },
      ],
    },
    {
      type: 'tip',
      title: 'Practical interpretation tip',
      html: 'In forensic document work, a mismatch can be especially useful because it may exclude a candidate pen formulation. A match-like TLC pattern is weaker: it says the samples are chemically consistent under those conditions, not that they necessarily came from the same pen.',
    },
    {
      type: 'proscons',
      title: 'TLC ink comparison strengths and limits',
      items: [
        { pro: 'Fast, inexpensive, and visually intuitive for separating ink dyes.', con: 'Usually destructive because a small sample is removed from the document.' },
        { pro: 'Rf values create a structured way to compare questioned and known samples.', con: 'Rf values shift when solvent, plate, humidity, and development conditions change.' },
        { pro: 'Useful as a screening method before more advanced analysis.', con: 'Cannot make a unique pen-source conclusion without broader evidence.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Do not overstate ink chromatography',
      html: 'A browser simulation cannot examine paper, ink age, extraction chemistry, plate quality, contamination, or instrumental confirmation. Use it to learn the measurement logic and interpretation limits, then rely on validated forensic document examination methods for real evidence.',
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
