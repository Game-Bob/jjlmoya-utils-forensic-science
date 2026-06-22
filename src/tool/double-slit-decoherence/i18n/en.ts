import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'double-slit-decoherence-simulator';
const title = 'Double Slit Experiment and Decoherence Simulator';
const description = 'Switch which-path detectors on and off to see quantum interference fade into two particle bands in a visual double slit simulator.';

const howTo = [
  {
    name: 'Start with the detector off',
    text: 'Leave the which-path detector disabled and watch the screen form bright and dark interference fringes from coherent probability amplitudes.',
  },
  {
    name: 'Increase detector strength',
    text: 'Raise the detector control to introduce which-path information. As the detector becomes stronger, coherence falls and the fringes wash out.',
  },
  {
    name: 'Change slit geometry',
    text: 'Adjust slit separation and slit width to see how geometry changes fringe spacing, envelope width, and the final distribution on the screen.',
  },
  {
    name: 'Read the live metrics',
    text: 'Use fringe visibility, which-path information, and coherence to connect the visual pattern with the quantum measurement story.',
  },
];

const faq = [
  {
    question: 'Why does the pattern change when detectors are turned on?',
    answer: 'A detector that can reveal which slit the particle used destroys the phase relationship between the two alternatives. Without that coherence, the two probability paths no longer interfere and the screen approaches two broad particle bands.',
  },
  {
    question: 'Does this simulator mean consciousness collapses the wavefunction?',
    answer: 'No. The simulator focuses on physical which-path information and decoherence. A detector, environment, or any interaction that makes the path distinguishable can suppress interference without requiring a conscious observer.',
  },
  {
    question: 'What is fringe visibility?',
    answer: 'Fringe visibility compares bright and dark regions on the screen. High visibility means strong interference contrast. Low visibility means the dark gaps have filled in and the pattern behaves more like two independent particle streams.',
  },
  {
    question: 'Is this a full quantum mechanics solver?',
    answer: 'No. It is an educational model that blends a double-slit interference envelope with a decoherence control. It is built to explain the measurement effect visually, not to replace a Schrodinger equation simulation for a real apparatus.',
  },
  {
    question: 'Why does slit separation affect fringe spacing?',
    answer: 'Larger separation creates a faster phase difference across the screen, so bright and dark bands become closer together. Smaller separation spreads the fringes farther apart.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Double slit apparatus',
    controls: 'Double slit controls',
    results: 'Double slit results',
    kicker: 'Measurement control',
    detectorToggle: 'Enable which-path detector',
    detectorStrength: 'Detector strength',
    slitSeparation: 'Slit separation',
    slitWidth: 'Slit width',
    unobserved: 'Unobserved',
    observed: 'Observed',
    waveMode: 'Interference',
    particleMode: 'Particle bands',
    fringeVisibility: 'Fringe visibility',
    whichPath: 'Which-path info',
    coherence: 'Coherence',
    readoutNote: 'Interference survives when both paths remain indistinguishable. Measurement makes path information available and the screen loses its dark fringes.',
  },
  seo: [
    {
      type: 'title',
      text: 'Double slit experiment simulator with decoherence and which-path detection',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This double slit simulator turns the classic quantum experiment into an interactive visual model. With the detector switched off, the screen shows an interference pattern: bright and dark bands produced because the two possible paths remain coherent. When a which-path detector is added, the pattern gradually changes into two broad particle bands because the path alternatives become distinguishable.',
    },
    {
      type: 'paragraph',
      html: 'The tool is designed for learners searching for a clear explanation of why observation changes the double slit result. It avoids the vague phrase "the observer changes reality" and instead focuses on the physically useful idea: interference requires indistinguishable alternatives, while measurement and environmental entanglement remove the phase relationship needed for fringes.',
    },
    {
      type: 'title',
      text: 'What the double slit experiment demonstrates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In the unobserved setup, a single quantum object is described by probability amplitudes associated with both slits. Those amplitudes add with phase. At some positions on the screen they reinforce one another, producing bright bands; at other positions they cancel, producing dark bands. That alternating structure is the signature of interference.',
    },
    {
      type: 'paragraph',
      html: 'If a detector records which slit was used, the alternatives stop being indistinguishable. The screen no longer receives one coherent sum of amplitudes. It receives a mixture of two path-conditioned outcomes, so the dark interference gaps fill in and the result looks like particles passing through one slit or the other.',
    },
    {
      type: 'title',
      text: 'How to read the simulator',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Control or metric', 'What it changes', 'What to look for'],
      rows: [
        ['Detector strength', 'How much which-path information is available', 'Higher values reduce fringe visibility and increase the two-band particle pattern.'],
        ['Slit separation', 'The distance between the two openings', 'Wider separation makes interference bands more tightly spaced on the screen.'],
        ['Slit width', 'The size of each opening', 'Wider slits narrow the diffraction envelope and reshape the overall brightness.'],
        ['Fringe visibility', 'Contrast between bright and dark screen regions', 'A high number means coherent interference is still visible.'],
        ['Coherence', 'How much phase relationship remains between paths', 'Coherence falls as the detector makes paths distinguishable.'],
      ],
    },
    {
      type: 'title',
      text: 'Decoherence without mysticism',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Decoherence is the loss of usable phase coherence when a quantum system becomes correlated with a detector or environment. In a double slit experiment, that correlation can carry which-path information. Once the path is recorded in principle, even if nobody reads the record, the interference pattern is suppressed.',
    },
    {
      type: 'paragraph',
      html: 'This distinction matters because many explanations overstate the role of human observation. The important physics is not eyesight or awareness; it is whether the experimental setup preserves or destroys the indistinguishability of the alternatives that would otherwise interfere.',
    },
    {
      type: 'title',
      text: 'Limits of this educational model',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The simulator uses a compact optical-style double slit pattern and blends it with a detector-strength model for decoherence. It is excellent for intuition, classroom demonstrations, and conceptual revision, but it is not a numerical solution of a full quantum apparatus with detector Hilbert spaces, noise sources, or laboratory calibration.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use it to understand concepts:</strong> interference, which-path information, coherence, and measurement.',
        '<strong>Do not use it for experimental design:</strong> real double slit experiments require precise wavelength, aperture, detector, and propagation calculations.',
        '<strong>Focus on the trend:</strong> as distinguishability rises, interference contrast falls.',
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
