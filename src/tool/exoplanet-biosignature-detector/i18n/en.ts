import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'exoplanet-biosignature-detector';
const title = 'Exoplanet Biosignature Detector';
const description = 'Align oxygen, methane, and ozone absorption lines in a simulated exoplanet transmission spectrum. Estimate biological habitability, possible technosignature contamination, and false-positive risk from spectral evidence.';

const howTo = [
  {
    name: 'Choose the host star',
    text: 'Select a K dwarf, Sun-like star, or M dwarf. The star changes the false-positive risk because ultraviolet flux, flares, and atmospheric photochemistry affect oxygen and ozone interpretation.',
  },
  {
    name: 'Align the spectral lines',
    text: 'Move the oxygen, methane, and ozone controls until the observed absorption markers line up with the reference bands in the simulated spectrum.',
  },
  {
    name: 'Set noise and atmospheric context',
    text: 'Increase instrument noise to see how confidence drops. Adjust water vapor and carbon dioxide to represent a wetter, drier, denser, or more photochemically suspicious atmosphere.',
  },
  {
    name: 'Read the habitability indices',
    text: 'Compare the biological, technological, false-positive, and habitability readouts. A strong result needs multiple gases in disequilibrium, not one isolated line.',
  },
];

const faq = [
  {
    question: 'What is a biosignature in exoplanet spectroscopy?',
    answer: 'A biosignature is a remotely detectable feature that could be caused by life. In atmospheric spectra, common candidates include oxygen, ozone, methane, water vapor, and combinations of gases that should react away unless a process keeps replenishing them.',
  },
  {
    question: 'Why does oxygen plus methane matter?',
    answer: 'Oxygen and methane are chemically reactive together. If both are present at meaningful levels, the atmosphere may be in chemical disequilibrium, which is more interesting than either gas alone. The simulator gives that pair extra weight.',
  },
  {
    question: 'Can oxygen be a false positive?',
    answer: 'Yes. Oxygen can accumulate without life through water loss, photolysis, weak volcanic sinks, or unusual stellar ultraviolet environments. That is why the tool reports false-positive risk instead of treating oxygen as proof.',
  },
  {
    question: 'Why is ozone included separately from oxygen?',
    answer: 'Ozone is produced from oxygen photochemistry and has strong spectral features. It can act as an indirect oxygen indicator, especially when direct oxygen bands are difficult to observe, but it still needs atmospheric context.',
  },
  {
    question: 'What does the technological index mean?',
    answer: 'The technological index is a speculative warning score for cases where an atmospheric spectrum looks energetic, noisy, or chemically unusual enough that an artificial source should not be dismissed. It is not a detection claim.',
  },
  {
    question: 'Is this a real exoplanet retrieval model?',
    answer: 'No. It is an educational simulator that translates core spectroscopy ideas into an interactive scoring model. Real retrievals use radiative transfer, stellar contamination correction, cloud models, instrument systematics, and Bayesian inference.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Exoplanet transmission spectrum visualization',
    starClass: 'Host star',
    starK: 'Quiet K dwarf',
    starSun: 'Sun-like G star',
    starM: 'Active M dwarf',
    noise: 'Instrument noise',
    oxygenLine: 'Oxygen marker',
    methaneLine: 'Methane marker',
    ozoneLine: 'Ozone marker',
    waterVapor: 'Water vapor context',
    carbonDioxide: 'CO2 context',
    habitabilityIndex: 'Habitability index',
    biologicalIndex: 'Biological',
    technologicalIndex: 'Technological',
    falsePositiveRisk: 'False positive',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Conclusion',
    dataLive: 'Data synthesis live',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Align the spectral markers to evaluate the atmospheric evidence.',
    verdictWeak: 'The spectrum is weak: the lines do not yet support a life-friendly interpretation.',
    verdictPromising: 'The spectrum is promising: multiple biosignature markers are partly aligned.',
    verdictStrong: 'The spectrum is strong: oxygen, methane, and ozone form a coherent disequilibrium signal.',
    verdictAmbiguous: 'The signal is interesting but ambiguous: stellar or atmospheric false positives remain high.',
  },
  seo: [
    {
      type: 'title',
      text: 'Exoplanet Biosignature Detector',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The exoplanet biosignature detector is an interactive spectroscopy simulator for exploring how life-related gases might appear in the light filtered through a distant atmosphere. Instead of treating a single molecule as a yes-or-no answer, the tool asks you to align oxygen, methane, and ozone absorption features, then weighs the result against noise, water vapor, carbon dioxide, and host-star behavior.',
    },
    {
      type: 'paragraph',
      html: 'This is the central difficulty of biosignature science: oxygen can be exciting, methane can be exciting, and ozone can be exciting, but none of them is proof by itself. The most persuasive cases combine multiple gases, physical context, and a careful search for non-biological explanations. The simulator makes those tradeoffs visible in a compact lab-style interface.',
    },
    {
      type: 'title',
      text: 'How Transmission Spectroscopy Reveals Atmospheric Gases',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When a planet crosses in front of its star, a tiny fraction of starlight passes through the planet atmosphere before reaching the telescope. Molecules absorb specific wavelengths, leaving narrow or broad dips in the measured spectrum. By comparing observed dips with laboratory line positions, astronomers can infer which gases may be present, although clouds, haze, temperature, stellar spots, and instrumental noise complicate the retrieval.',
    },
    {
      type: 'title',
      text: 'Oxygen, Methane, and Ozone as a Combined Signal',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Oxygen O2:</strong> on Earth, abundant oxygen is maintained by photosynthesis, but abiotic oxygen can accumulate under some planetary histories.',
        '<strong>Methane CH4:</strong> methane can come from biology, geology, or impacts. It becomes more suggestive when found with oxidizing gases.',
        '<strong>Ozone O3:</strong> ozone is a photochemical product of oxygen and can be easier to detect in some spectral ranges, but it is still an indirect clue.',
        '<strong>Water and CO2 context:</strong> water supports habitability, while carbon dioxide helps frame greenhouse state, photochemistry, and false-positive scenarios.',
      ],
    },
    {
      type: 'title',
      text: 'Why False Positives Matter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A high oxygen score does not automatically mean biology. Water loss can leave oxygen behind, stellar ultraviolet radiation can split molecules, and low volcanic reducing gas output can allow oxygen to build up. Active M dwarfs are especially tricky because flares and photochemistry can reshape atmospheric composition. The false-positive readout rises when noise, star type, or atmospheric context make a biological explanation less secure.',
    },
    {
      type: 'table',
      headers: ['Signal pattern', 'Interpretation', 'Caution'],
      rows: [
        ['O2 only', 'Potential oxygen-rich atmosphere', 'Can be abiotic after water loss or unusual photochemistry'],
        ['CH4 only', 'Possible reducing atmosphere or active geology', 'Methane alone is not a strong life claim'],
        ['O2 plus CH4', 'Chemical disequilibrium worth follow-up', 'Requires robust retrieval and contamination checks'],
        ['O2 plus O3 plus water', 'More coherent Earth-like context', 'Clouds and stellar activity still matter'],
      ],
    },
    {
      type: 'title',
      text: 'Biological and Technological Habitability Indices',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The biological index emphasizes chemical disequilibrium, especially oxygen together with methane, then adds ozone shielding and water context. The technological index is intentionally speculative: it highlights cases where the atmosphere looks energetic, noisy, or chemically unusual enough that artificial pollution, deliberate atmospheric modification, or observation artifacts should be considered before telling a simple life story.',
    },
    {
      type: 'paragraph',
      html: 'Use the tool as a reasoning aid, not as a claim generator. A real biosignature assessment would compare many atmospheric models, include stellar spectra, correct for telescope systematics, estimate cloud opacity, and calculate uncertainties. The educational value here is that it forces the same discipline: align the evidence, check the context, and keep false positives in view.',
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
