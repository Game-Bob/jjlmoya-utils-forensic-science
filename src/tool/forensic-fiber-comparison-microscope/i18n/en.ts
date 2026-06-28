import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensic-fiber-comparison-microscope';
const title = 'Forensic Fiber Comparison Microscope Simulator';
const description = 'Build a questioned textile fiber profile, compare it against known references, and interpret morphology, polarization, and UV-Vis dye evidence.';

const howTo = [
  {
    name: 'Build the questioned fiber profile',
    text: 'Set the material, diameter, twist direction, polarization response, and dye profile for the recovered fiber.',
  },
  {
    name: 'Choose a known comparison fiber',
    text: 'Select a suspect garment fiber such as cotton, wool, polyester, or nylon on the right side.',
  },
  {
    name: 'Adjust focus and polarization',
    text: 'Move the focus slider and rotate the polarizer to observe sharpness, surface ridges, and birefringence response.',
  },
  {
    name: 'Compare morphology and UV-Vis spectra',
    text: 'Use the morphology score, spectrum score, combined match, and absorption curves to decide whether the samples are consistent or clearly different.',
  },
];

const faq = [
  {
    question: 'Can fiber microscopy identify the exact garment a fiber came from?',
    answer: 'Usually no. Fiber comparison can show consistency or differences between a questioned fiber and a known textile, but individual source attribution requires careful context, validated methods, and often additional chemical or instrumental analysis.',
  },
  {
    question: 'Why use polarized light in fiber comparison?',
    answer: 'Polarized light helps reveal birefringence, extinction behavior, and structural differences between natural and synthetic fibers. Synthetic fibers often show a stronger polarization response because of molecular orientation.',
  },
  {
    question: 'What does the UV-Vis spectrum add?',
    answer: 'Microscopy describes shape and optical behavior, while UV-Vis absorbance can compare dye behavior across wavelengths. Similar fibers with different dyes may separate clearly in the spectral plot.',
  },
  {
    question: 'Why are the results shown as scores rather than a final identification?',
    answer: 'Forensic trace evidence should be reported proportionally. The scores are educational summaries of morphology and dye similarity, not a laboratory conclusion or legal opinion.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Virtual split-field forensic microscope comparing two textile fibers',
    chartAria: 'UV-Vis absorbance chart comparing questioned and known fiber dye spectra',
    questionedSample: 'Questioned sample',
    fixedEvidence: 'Fixed recovered evidence',
    builderSummaryDefault: 'Cotton / 18 µm / irregular / indigo',
    customQuestionedLabel: 'Questioned case fiber',
    material: 'Material',
    cotton: 'Cotton',
    woolMaterial: 'Wool',
    polyesterMaterial: 'Polyester',
    nylonMaterial: 'Nylon',
    materialcotton: 'cotton',
    materialwool: 'wool',
    materialpolyester: 'polyester',
    materialnylon: 'nylon',
    twist: 'Twist',
    irregularTwist: 'Irregular',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Diameter',
    polarResponse: 'Polar response',
    dyeProfile: 'Dye profile',
    indigoDye: 'Indigo',
    crimsonDye: 'Crimson',
    navyDye: 'Navy',
    violetDye: 'Violet',
    dyeindigo: 'indigo',
    dyecrimson: 'crimson',
    dyenavy: 'navy',
    dyeviolet: 'violet',
    knownSample: 'Known comparison',
    questionedCotton: 'Questioned blue cotton fiber',
    suspectCotton: 'Suspect shirt cotton fiber',
    wool: 'Red wool sweater fiber',
    polyester: 'Navy polyester jacket fiber',
    nylon: 'Violet nylon lining fiber',
    focus: 'Fine focus',
    polarizer: 'Polarizer angle',
    morphology: 'Morphology',
    spectrum: 'UV-Vis',
    birefringence: 'Birefringence',
    combinedMatch: 'Combined match',
    uvVisTitle: 'UV-Vis absorbance overlay',
    statusStrong: 'High consistency',
    statusPartial: 'Mixed comparison',
    statusDifferent: 'Exclusion supported',
    verdictStrong: 'The questioned and known fibers are highly consistent in diameter, twist, optical behavior, and dye spectrum. In a real case, report this as support for a possible common textile source, not as individual identification.',
    verdictPartial: 'The comparison is mixed. Some class characteristics agree, but morphology, dye response, or birefringence leaves enough difference that more examination would be required before any cautious association.',
    verdictDifferent: 'The fibers are not consistent across key class characteristics. The simulated result supports exclusion of this known textile as the likely source for the questioned fiber.',
    disclaimer: 'Educational simulation only. Real forensic fiber comparison requires validated microscopy, controls, documentation, contamination safeguards, peer review, and qualified trace-evidence interpretation.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensic Fiber Comparison with Split-Field Microscopy and UV-Vis Spectra',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Teaching simulator',
      title: 'What this virtual fiber microscope demonstrates',
      html: 'This simulator models the practical workflow behind <strong>forensic fiber comparison</strong>: describe the questioned textile fiber, compare it with a known reference, adjust focus, rotate polarizing filters, and compare the dye response with a simplified UV-Vis absorbance curve. It is designed for students learning trace evidence, not for making casework decisions.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 fields', label: 'split microscope view', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'visible spectrum range', icon: 'mdi:chart-bell-curve' },
        { value: '4 classes', label: 'cotton, wool, polyester, nylon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'polarizer rotation', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Core observations in textile fiber comparison',
      items: [
        'Measure or estimate fiber diameter while noting natural variation along the strand.',
        'Record twist direction, surface ridges, medulla-like features, delustering particles, and cross-sectional clues when available.',
        'Use polarized light to compare birefringence, extinction, and brightness changes under rotation.',
        'Compare color microscopically, then use instrumental dye information when the case requires greater discrimination.',
        'Report whether findings are consistent, different, or inconclusive; avoid wording that implies a unique garment source without support.',
      ],
    },
    {
      type: 'table',
      headers: ['Observation', 'What it helps answer', 'Limit'],
      rows: [
        ['Diameter and morphology', 'Are the fibers physically similar?', 'Manufacturing variation can overlap between garments.'],
        ['Twist and surface detail', 'Do natural or synthetic features agree?', 'Damage, stretching, and mounting can alter appearance.'],
        ['Polarized light response', 'Do optical properties match?', 'Birefringence is class-level evidence, not a unique signature.'],
        ['UV-Vis dye spectrum', 'Are colorants consistent?', 'Similar dyes may appear close; extraction and instrument settings matter.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'What supports consistency',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Multiple independent class characteristics agree between the questioned and known fibers.',
          points: ['Comparable diameter range', 'Same general fiber type', 'Similar polarization behavior', 'Overlapping dye absorbance peaks'],
        },
        {
          title: 'What supports exclusion',
          icon: 'mdi:close-circle-outline',
          description: 'A clear, repeatable difference appears in a characteristic that should match for a common textile source.',
          points: ['Natural versus synthetic mismatch', 'Different twist or surface morphology', 'Strongly different dye spectrum', 'Incompatible birefringence response'],
        },
      ],
    },
    {
      type: 'title',
      text: 'How the Simulation Model Works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The model stores a small reference database with diameter, twist direction, fiber class, birefringence, dye family, and UV-Vis absorbance points. The questioned fiber is user-configurable, so the comparison score responds to the case profile instead of a fixed classroom sample. The visual microscope view then responds to focus and polarizer angle so students can see why optical settings matter.',
    },
    {
      type: 'paragraph',
      html: 'The polarizer control is especially useful for synthetic fibers. Polyester and nylon are assigned stronger birefringence values, so their brightness changes more visibly as the polarizer rotates. Natural cotton and wool still respond, but the simulated effect is subtler. This reflects the teaching idea that molecular orientation and fiber structure affect optical behavior.',
    },
    {
      type: 'paragraph',
      html: 'The UV-Vis chart is a simplified overlay, not a replacement for a spectrophotometer. In actual trace evidence work, dye comparison may require microspectrophotometry, thin-layer chromatography, extraction chemistry, reference controls, and documented uncertainty. The chart exists to teach why two fibers that look similar under a microscope may still separate by dye chemistry.',
    },
    {
      type: 'paragraph',
      html: 'Forensic examiners must document every step of the fiber analysis process. This includes taking detailed photographs, recording measurements, and keeping a chain of custody for all physical evidence. The simulator helps students understand the importance of systematic documentation and objective comparison in forensic casework. By interacting with different settings, users can learn how light path, sample thickness, and dye concentration affect spectral curves and physical appearance.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Questioned fiber', definition: 'A fiber recovered from a scene, victim, suspect, tool, vehicle, or other item whose source is unknown.' },
        { term: 'Known fiber', definition: 'A reference fiber collected from a textile or object for comparison against the questioned sample.' },
        { term: 'Birefringence', definition: 'Optical behavior in which a material has different refractive indices depending on light direction or polarization.' },
        { term: 'UV-Vis spectrum', definition: 'A plot showing how strongly a dye or material absorbs light at different wavelengths.' },
        { term: 'Class characteristic', definition: 'A property that can associate evidence with a group of possible sources rather than one unique source.' },
      ],
    },
    {
      type: 'tip',
      title: 'Interpretation tip for students',
      html: 'A high similarity score should be read as <strong>consistency</strong>, not identity. Trace evidence is strongest when microscopy, chemistry, transfer context, persistence, recovery method, and contamination controls all point in the same direction.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Keep the conclusion within the evidence',
      html: 'A browser microscope cannot validate a fiber match. Formal reports should describe the observations, comparison basis, limitations, and the level of support without overstating source attribution.',
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
