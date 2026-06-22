import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cosmic-inflation-calculator';
const description = 'Calculate the exponential expansion of the early universe during the cosmic inflationary epoch.';
const title = 'Cosmic Inflation Calculator: Early Universe Expansion';

const howTo = [
  {
    name: 'Choose a scenario or slide values',
    text: 'Select one of the cosmological presets or manually drag the sliders to configure inflation parameters.',
  },
  {
    name: 'Observe scale factor growth',
    text: 'Check how many orders of magnitude space has expanded and read the physical analogy explaining it.',
  },
  {
    name: 'Warp the space-time fabric',
    text: 'Look at the real-time space-time grid canvas dynamically expanding or collapsing under extreme values.',
  },
];

const faq = [
  {
    "question": "What is cosmic inflation and why did it occur?",
    "answer": "Cosmic inflation is a theory postulating an ultra-rapid, exponential expansion of space in the very early fractions of a second of the universe, specifically around 10^-36 seconds after the Big Bang. It occurred because a theoretical scalar field, called the inflaton, was in a state of high energy density of a false vacuum, which generated negative pressure and a repulsive gravitational force that stretched the fabric of space-time."
  },
  {
    "question": "What does the number of e-folds mean?",
    "answer": "The number of e-folds measures the duration of the exponential expansion phase. One e-fold represents the time in which the size of the universe is multiplied by Euler's number (approximately 2.718). If the universe undergoes N e-folds, its scale factor increases by a factor of e^N. Standard cosmological models require at least 50 to 60 e-folds to properly solve the flatness and horizon problems."
  },
  {
    "question": "How does inflation solve the horizon problem?",
    "answer": "The horizon problem asks why extremely distant regions of the universe have nearly identical cosmic microwave background radiation temperatures, even though the speed of light would not have allowed them to interact to reach equilibrium. Inflation resolves this by showing that, prior to exponential expansion, the entire observable universe was a tiny, thermally homogeneous region causally connected, which was instantly stretched beyond the visual horizon."
  },
  {
    "question": "What is the flatness problem and how is it resolved?",
    "answer": "The energy density of the universe today is extremely close to the critical density, meaning that space is flat with a minimal margin of error. Without inflation, any initial deviation from flatness would have grown exponentially over time, requiring impossible fine-tuning at the Big Bang. Inflation stretches the spatial curvature so violently that any initial curvature is diluted, similar to how the surface of a giant sphere appears flat locally."
  },
  {
    "question": "What is the reheating process?",
    "answer": "Reheating is the thermal transition that marks the end of inflation. During inflation, the universe cools to temperatures near absolute zero due to the exponential expansion of volume. When the inflaton field decays to the minimum of its potential, its remaining energy is dumped into space as Standard Model particles through quantum interactions, filling the cosmos with a hot, dense plasma that initiates the traditional Big Bang phase."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cosmic Inflation Calculator',
    efoldsLabel: 'Number of e-folds (N)',
    energyLabel: 'Initial Energy Scale (GeV)',
    scaleFactorResult: 'Scale Factor Growth',
    reheatingTempResult: 'Estimated Reheating Temperature',
    chartTitle: 'Space-Time Fabric Distortion',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Chaotic',
    presetExtreme: 'Extreme Limits',
    efoldsTooltip: 'Typical models predict between 50 and 60 e-folds to resolve flatness and horizon problems.',
    energyTooltip: 'GUT scale is around 10^16 GeV. Higher scales are close to the Planck limit.',
    scaleFactorTooltip: 'Represents the total size expansion factor from the start to the end of inflation.',
    reheatingTooltip: 'The temperature to which the universe was heated after inflation ended.',
    analogyInsuff: 'Moderate inflation. This expansion is <span class="highlight">insufficient</span> to solve the horizon problem.',
    analogyProton: 'The universe expanded from the size of a <span class="highlight">proton</span> to the size of a <span class="highlight">galaxy</span> in a fraction of a second.',
    analogyObservable: 'The universe expanded from a <span class="highlight">subatomic scale</span> to larger than the <span class="highlight">observable universe</span> in 10^-32 seconds.',
  },
  seo: [
  {
    "type": "title",
    "text": "COSMOLOGY: Cosmic Inflation Theory and Space-Time Expansion",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Cosmic inflation represents the fundamental pillar linking particle physics with observational astrophysics. Proposed in the early 1980s by physicists Alan Guth and Andrei Linde, this theory postulates that the early universe underwent a phase of exponential expansion driven by the energy density of a scalar field known as the inflaton. This expansion increased the volume of the universe by a factor of at least 10^26 in a tiny fraction of a second, resolving deep paradoxes of the classical Big Bang model and providing the theoretical framework for cosmic structure formation."
  },
  {
    "type": "title",
    "text": "Comparison of Inflation Models and Parameters",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Different potentials for the inflaton field produce distinct expansion rates and reheating temperatures. Below are the characteristics of the main models simulated in this calculator:"
  },
  {
    "type": "table",
    "headers": [
      "Inflation Model",
      "e-folds Range (N)",
      "Energy Scale (GeV)",
      "Physical and Dynamic Outcome"
    ],
    "rows": [
      [
        "<strong>Standard Guth</strong>",
        "50 - 60",
        "10^16",
        "Solves flatness and horizon; inflation ends via bubble nucleation in a slow phase transition."
      ],
      [
        "<strong>Chaotic Inflation (Linde)</strong>",
        "60 or more",
        "10^16",
        "The inflaton rolls gently down a simple parabolic potential; avoids abrupt phase transition issues."
      ],
      [
        "<strong>Extreme Limits</strong>",
        "90 or more",
        "10^19 (Planck)",
        "Energies near the quantum gravity limit; massive stretching of the primordial space-time."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Resolving Classical Big Bang Problems",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Before inflation was developed, classical Big Bang cosmology suffered from severe theoretical inconsistencies. The horizon problem, stemming from the homogeneity of the cosmic microwave background, and the flatness problem, associated with the critical density of space, suggested the need for extremely improbable initial conditions. Inflation naturally solves both difficulties by stretching a thermally homogeneous micro-region and dynamically flattening local spatial geometry. Additionally, it dilutes the concentration of magnetic monopoles that should have formed copiously in the early universe."
  },
  {
    "type": "title",
    "text": "Observational Astronomical Evidence of the Inflationary Model",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "The theory of cosmic inflation is not just an elegant mathematical construct; it has solid indirect evidence confirmed by space satellites like COBE, WMAP, and Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>CMB Homogeneity:</strong> The cosmic microwave background radiation shows a uniform temperature with variations of only 1 part in 100,000 on opposite sides of the visible sky.",
      "<strong>Flat Geometry:</strong> Measurements of the universe's curvature confirm it is spatially flat within less than 1% error, consistent with massive inflationary stretching.",
      "<strong>Absence of Monopoles:</strong> Logically explains the complete absence of stable, high-mass magnetic monopoles in our observable universe.",
      "<strong>Fluctuation Spectrum:</strong> Observed anisotropies in the cosmic background show a spectral index slightly below 1, exactly as predicted by slow-roll inflaton models."
    ]
  },
  {
    "type": "title",
    "text": "Quantum Fluctuations and the Seeds of Galaxies",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "The most extraordinary aspect of cosmic inflation is its ability to act as a cosmic microscope. Microscopic quantum fluctuations of the inflaton field were stretched to astronomical scales during the period of exponential expansion. At the end of inflation, these fluctuations froze as density variations (primordial perturbations). These density differences served as gravitational seeds that, over billions of years, pulled matter together to give rise to the first stars, galaxies, galaxy clusters, and the cosmic web we observe today."
  }
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
