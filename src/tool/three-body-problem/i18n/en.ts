import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'three-body-problem-simulator';
const title = 'Three Body Problem Simulator';
const description = 'Simulate three gravitational bodies in a two-dimensional plane with editable masses, velocity vectors, trails, and stable or chaotic presets.';

const howTo = [
  {
    name: 'Choose an orbital preset',
    text: 'Start with the figure-eight orbit for a stable benchmark, the Lagrange triangle for a rotating equilibrium, or the slingshot preset for a visibly chaotic encounter.',
  },
  {
    name: 'Adjust masses and velocity vectors',
    text: 'Use the sliders for each body to change mass and initial velocity components. Small changes can preserve a pattern, deform it, or destroy it entirely.',
  },
  {
    name: 'Read the diagnostics',
    text: 'Watch total energy, nearest and farthest separation, and center of mass to understand whether the numerical orbit remains bounded or is drifting apart.',
  },
];

const faq = [
  {
    question: 'What is the three-body problem?',
    answer: 'The three-body problem asks how three masses move when each body gravitationally attracts the other two. Unlike the two-body problem, there is no general closed-form equation that solves every possible configuration, so most practical cases are explored with numerical integration.',
  },
  {
    question: 'Why are three-body orbits unstable?',
    answer: 'Many three-body systems are sensitive to initial conditions. A tiny change in velocity, position, or mass changes the timing of close encounters, and those encounters can exchange energy dramatically. The result is a system that may remain bounded for a while and then suddenly eject one body.',
  },
  {
    question: 'What does the figure-eight preset show?',
    answer: 'The figure-eight preset is a famous periodic solution for three equal masses. Each body follows the same path with a phase offset, demonstrating that the three-body problem can contain elegant stable islands inside a much larger chaotic landscape.',
  },
  {
    question: 'Is this a physically exact astronomy simulator?',
    answer: 'This tool uses a softened Newtonian model and a symplectic-style velocity Verlet step so the motion feels faithful and stable for learning. It is designed for interactive exploration rather than high-precision ephemeris prediction.',
  },
  {
    question: 'How should I interpret total energy?',
    answer: 'Negative total energy usually indicates a bound system, while energy closer to zero can make escape easier. In a numerical simulation, large energy drift also warns that the time step or encounter geometry is stressing the integrator.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Gravitational chaos lab',
    canvasLabel: 'Interactive two-dimensional three-body orbit canvas',
    presetsLabel: 'Orbital presets',
    figureEightPreset: 'Figure eight',
    lagrangePreset: 'Lagrange triangle',
    slingshotPreset: 'Slingshot',
    pauseButton: 'Pause',
    playButton: 'Play',
    resetButton: 'Reset',
    speedLabel: 'Simulation speed',
    trailLabel: 'Trail length',
    massLabel: 'Mass',
    velocityXLabel: 'Velocity X',
    velocityYLabel: 'Velocity Y',
    energyLabel: 'Total energy',
    separationLabel: 'Separation range',
    centerMassLabel: 'Center of mass',
  },
  seo: [
    {
      type: 'title',
      text: 'Interactive Three-Body Problem Simulator for Orbital Chaos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The three-body problem is one of the clearest demonstrations that simple laws can produce complicated motion. Newtonian gravity gives a compact force rule, but the moment a third massive body joins the system, each orbit continuously reshapes the other two. This simulator lets you experiment with that instability directly: choose a known configuration, adjust masses and velocity vectors, and watch whether the bodies form a repeating orbit, a rotating triangle, or a chaotic scattering event.',
    },
    {
      type: 'title',
      text: 'What the Presets Demonstrate',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Preset', 'Physical idea', 'What to look for'],
      rows: [
        ['<strong>Figure eight</strong>', 'A periodic equal-mass solution where all three bodies share the same loop.', 'The orbit remains organized only when symmetry and velocity balance are carefully preserved.'],
        ['<strong>Lagrange triangle</strong>', 'Three bodies occupy an equilateral triangle that rotates around the center of mass.', 'Mass balance and tangential velocity keep the triangle from collapsing inward.'],
        ['<strong>Slingshot</strong>', 'A close encounter transfers energy between bodies.', 'One body can gain speed while another becomes more tightly bound, revealing why chaotic ejections occur.'],
      ],
    },
    {
      type: 'title',
      text: 'Why Small Changes Matter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In a two-body orbit, the center of mass and orbital ellipse provide a stable geometric picture. In a three-body system, close passes act like gravitational negotiations: a body can borrow orbital energy, change direction sharply, or convert an orderly loop into a scattering event. That sensitivity is why real astrophysical systems such as triple stars, planet-moon encounters, and early solar-system planetesimals often require numerical integration rather than a single neat formula.',
    },
    {
      type: 'title',
      text: 'How to Use the Diagnostics',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Total energy</strong> helps you judge whether the system is bound and whether the numerical integration is staying stable.',
        '<strong>Separation range</strong> shows the closest and farthest pair distances, making near-collisions and ejections easy to spot.',
        '<strong>Center of mass</strong> should remain relatively steady when the initial momentum is balanced; drift suggests an intentionally asymmetric setup or a changed velocity vector.',
        '<strong>Trail length</strong> reveals long-term structure: short trails emphasize the current interaction, while long trails expose repeating loops and slow orbital precession.',
      ],
    },
    {
      type: 'title',
      text: 'Numerical Model Used in the Tool',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The simulator uses Newtonian inverse-square attraction with a small softening term that prevents visual blow-ups during extremely close passes. Motion is advanced with a velocity Verlet style step, a common choice for orbital demonstrations because it handles energy behavior better than a simple Euler update. The result is a responsive educational model that makes the qualitative behavior of the three-body problem visible without pretending to replace professional celestial mechanics software.',
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
