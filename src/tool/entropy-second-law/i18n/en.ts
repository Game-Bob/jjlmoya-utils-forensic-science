import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'entropy-second-law-simulator';
const title = 'Entropy and Second Law of Thermodynamics Simulator';
const description = 'Watch hot and cold particle chambers mix, equalize, and drive entropy upward with a visual diffusion simulator and live entropy graph.';

const howTo = [
  {
    name: 'Set the left and right temperatures',
    text: 'Choose a colder chamber and a hotter chamber to create an initial thermal imbalance. Larger differences make the irreversible approach to equilibrium easier to see.',
  },
  {
    name: 'Adjust the barrier aperture',
    text: 'Open or narrow the passage between the two chambers. A wider opening lets particles and energy diffuse faster, so the entropy curve rises more quickly.',
  },
  {
    name: 'Observe the particle box',
    text: 'Blue particles represent lower-energy motion and orange particles represent higher-energy motion. As collisions and crossings accumulate, the box becomes more mixed and less ordered.',
  },
  {
    name: 'Read the entropy graph',
    text: 'Track how spatial mixing and thermal equalization combine into a single rising entropy score. The curve is meant to build intuition for why isolated systems evolve toward more probable macrostates.',
  },
];

const faq = [
  {
    question: 'Why does entropy rise in this simulator?',
    answer: 'The starting state is artificially ordered: one side is colder, the other hotter. Once the barrier permits exchange, there are many more mixed arrangements than separated arrangements, so the system naturally moves toward the overwhelmingly more probable macrostate.',
  },
  {
    question: 'Does this prove the second law exactly?',
    answer: 'No. This is a didactic particle model, not a molecular dynamics laboratory code. It captures the core intuition behind irreversible diffusion and thermal equalization, which is the search intent most users have when they ask why entropy tends to increase.',
  },
  {
    question: 'What do spatial entropy and thermal entropy mean here?',
    answer: 'Spatial entropy measures how evenly particles are distributed between left and right chambers. Thermal entropy in this simulator measures how small the energy gap is between the two halves. The total score blends both so users can see mixing and heat flow at the same time.',
  },
  {
    question: 'Why do the particles keep moving even near equilibrium?',
    answer: 'Equilibrium does not mean motion stops. It means the macroscopic imbalance disappears. Molecules still move, collide, and exchange energy, but there is no persistent large-scale direction left to exploit.',
  },
  {
    question: 'Can entropy ever decrease momentarily?',
    answer: 'In microscopic systems, small fluctuations are possible. This visual tool smooths those fluctuations and emphasizes the overall statistical trend: in a large isolated system, low-entropy ordered states are vastly less probable than mixed states.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Irreversible mixing',
    results: 'Entropy simulator results',
    particleBox: 'Particle diffusion box',
    barrier: 'Barrier',
    entropyGraph: 'Entropy over time graph',
    liveTrace: 'Live trace',
    highEntropy: 'high',
    midEntropy: 'mid',
    lowEntropy: 'low',
    controls: 'Entropy simulator controls',
    leftTemperature: 'Left temperature',
    rightTemperature: 'Right temperature',
    gateAperture: 'Barrier aperture',
    pause: 'Pause',
    reset: 'Reset state',
    resume: 'Resume',
    totalEntropy: 'Total entropy',
    particleBalance: 'Particles left/right',
    spatialEntropy: 'Spatial entropy',
    thermalEntropy: 'Thermal entropy',
    energyGap: 'Energy gap',
    noteLabel: 'Interpretation',
    stateGradient: 'Gradient',
    stateMixing: 'Mixing',
    stateEquilibrium: 'Equilibrium',
    note: 'Macrostate probability points toward maximum disorder.',
  },
  seo: [
    {
      type: 'title',
      text: 'Entropy simulator for the second law of thermodynamics and irreversible diffusion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use this entropy simulator to visualize one of the most important ideas in physics: isolated systems evolve from artificially ordered states toward more probable mixed states. Instead of reading a static definition of entropy, you can watch a hot chamber and a cold chamber exchange particles and energy in real time while a live curve tracks the rise of disorder.',
    },
    {
      type: 'paragraph',
      html: 'This tool is designed for the most common search intent behind questions such as "why does entropy increase", "how does the second law work", and "what is thermal diffusion". The goal is not just to give a slogan about disorder, but to connect entropy with probability, heat flow, mixing, and equilibrium in a way that feels immediately visible.',
    },
    {
      type: 'title',
      text: 'What the second law of thermodynamics means in practical terms',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The second law says that for an isolated system, spontaneous processes move toward macrostates with higher entropy. In everyday language, that means a strongly organized thermal arrangement, such as hot particles on one side and cold particles on the other, does not stay separated unless work is continually supplied to maintain it.',
    },
    {
      type: 'paragraph',
      html: 'That does not happen because matter "prefers chaos" in a mystical sense. It happens because there are enormously more microscopic arrangements corresponding to a mixed state than to a separated one. Entropy therefore connects thermodynamics with counting: the larger the number of compatible microstates, the larger the entropy.',
    },
    {
      type: 'title',
      text: 'How this entropy diffusion simulator works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The particle box starts in a low-entropy configuration with a temperature imbalance across a barrier. When the passage between the chambers is open, particles cross, collide, and carry energy from one side to the other. The simulation tracks two intuitive ingredients: <strong>spatial entropy</strong>, which increases as particles become less segregated, and <strong>thermal entropy</strong>, which increases as the left and right energy distributions become less different.',
    },
    {
      type: 'paragraph',
      html: 'The total entropy score shown on screen is a teaching proxy built from those two ingredients. It is not a laboratory-grade state function and does not claim to reproduce full statistical mechanics. Its purpose is to help users build correct intuition: irreversible heat flow and diffusion both move the system toward equilibrium because equilibrium corresponds to many more accessible arrangements.',
    },
    {
      type: 'table',
      headers: ['Visual signal', 'What it represents', 'Why it matters'],
      rows: [
        ['Blue vs orange particles', 'Relative kinetic energy', 'Shows that temperature differences are really differences in average microscopic motion.'],
        ['Barrier aperture', 'Ease of exchange between chambers', 'Lets you see why diffusion rate changes when the pathway for transport changes.'],
        ['Spatial entropy meter', 'How evenly particles are spread', 'Explains that mixing alone already makes the macrostate more probable.'],
        ['Thermal entropy meter', 'How small the left-right energy gap becomes', 'Shows that equilibrium is not just about position but also about energy sharing.'],
        ['Entropy curve', 'Trend over time', 'Turns the abstract idea of irreversibility into a visible one-way relaxation process.'],
      ],
    },
    {
      type: 'title',
      text: 'Why entropy can increase even though every particle obeys simple motion',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Students often assume that the second law requires friction, intention, or a special "arrow of time force". The deeper point is statistical. Every particle follows local rules, but when many particles interact, the number of mixed macrostates completely dominates the number of ordered macrostates. The system therefore spends almost all of its time in mixed configurations and only an extremely tiny fraction in neatly separated ones.',
    },
    {
      type: 'paragraph',
      html: 'That is why a drop of dye spreads in water, why a room equalizes in temperature after a heater is turned off, and why a hot object cools down in contact with a colder one. The reverse process is not forbidden by Newtonian motion in a strict microscopic sense, but it is so statistically unlikely for large systems that it is effectively never observed at human scales.',
    },
    {
      type: 'title',
      text: 'Entropy, equilibrium, and common misconceptions',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Entropy is not just "messiness":</strong> the more precise idea is the number of microscopic arrangements compatible with the same macroscopic description.',
        '<strong>Equilibrium does not mean stillness:</strong> particles continue moving constantly, but their large-scale imbalances cancel out.',
        '<strong>Heat flow is directional because probability is directional:</strong> there are overwhelmingly more ways to share energy than to keep it sharply separated.',
        '<strong>Low entropy is not impossible:</strong> it simply requires constraints, preparation, or work from outside the isolated system.',
        '<strong>This simulator is qualitative:</strong> it gives physical intuition, not exact calorimetry, partition functions, or molecular transport coefficients.',
      ],
    },
    {
      type: 'title',
      text: 'When to use this simulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use it for classroom demonstrations, physics revision, chemistry education, science writing, and fast conceptual explanations. It is especially useful when someone understands that heat flows from hot to cold but does not yet see how that connects to probability, macrostate counting, and the second law of thermodynamics.',
    },
    {
      type: 'paragraph',
      html: 'If your goal is a rigorous thermodynamics calculation for a real gas, engine cycle, or laboratory system, you will need equations of state, boundary conditions, and experimentally grounded parameters. If your goal is intuition for why diffusion is irreversible and why entropy tends to rise, this simulator is built for exactly that question.',
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
