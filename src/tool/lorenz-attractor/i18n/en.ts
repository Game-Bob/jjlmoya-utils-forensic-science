const slug = 'lorenz-attractor';
const title = 'Lorenz Attractor Chaos Simulator: The Butterfly Effect in 3D';
const description = 'Explore chaos theory with this interactive 3D Lorenz attractor simulation. Visualize the butterfly effect by running two nearly identical trajectories side-by-side.';

const howTo = [
  {
    name: 'Rotate the canvas',
    text: 'Click and drag on the 3D viewport (or swipe on mobile) to rotate the attractor and view it from different angles.',
  },
  {
    name: 'Adjust the sliders',
    text: 'Modify the Sigma, Rho, and Beta parameters. Observe how changing Rho transitions the system from stable orbits to chaotic behavior.',
  },
  {
    name: 'Observe the divergence',
    text: 'Adjust the initial perturbation slider. Watch the live chart showing the separation distance between the two trajectories grow exponentially.',
  },
  {
    name: 'Pause and reset',
    text: 'Use the controls to pause the simulation, clear the drawing paths, or reset parameters to the standard chaotic defaults.',
  },
];

const faq = [
  {
    question: 'What is the Lorenz Attractor?',
    answer: 'The Lorenz attractor is a set of chaotic solutions to the Lorenz system, a system of three ordinary differential equations first formulated by Edward Lorenz in 1963. It was originally derived from a simplified mathematical model of atmospheric convection.',
  },
  {
    question: 'What is the Butterfly Effect?',
    answer: 'The butterfly effect is the sensitive dependence on initial conditions, where a small change in one state of a deterministic nonlinear system can result in large differences in a later state. In this simulator, a tiny starting perturbation of 0.0001 causes the two paths to diverge completely after a short time.',
  },
  {
    question: 'What do the parameters Sigma, Rho, and Beta represent?',
    answer: 'Sigma represents the Prandtl number (related to fluid viscosity and thermal conductivity), Rho represents the Rayleigh number (related to thermal convection strength), and Beta is a geometric parameter related to the physical dimensions of the convective layer.',
  },
  {
    question: 'Why does the attractor shape look like a butterfly?',
    answer: 'The iconic double-winged butterfly shape arises because the system has two unstable equilibrium points. The trajectory orbits around one wing, then unpredictably transitions to orbit the other, creating the distinctive structure in 3D phase space.',
  },
  {
    question: 'Is the Lorenz Attractor truly random?',
    answer: 'No. The Lorenz system is entirely deterministic, meaning its future state is fully defined by its current state and equations. However, because it is chaotic, it is completely unpredictable in the long term without infinite precision of the initial conditions.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copied',
    noHistory: 'No history',
    load: 'Load',
    delete: 'Delete',
    title: 'Lorenz Attractor',
    subTitle: 'Deterministic Chaos and Sensitive Dependence',
    parameterControls: 'System Parameters',
    simulationSpeed: 'Simulation Speed (dt)',
    initialPerturbation: 'Initial Perturbation (dx)',
    trajectories: 'Trajectories',
    distance: 'Divergence Distance',
    exponentialGrowth: 'Exponential Divergence',
    resetDefault: 'Reset',
    clearPath: 'Clear',
    play: 'Resume',
    pause: 'Pause',
    coords: 'Coordinates',
    divergenceExplanation: 'The divergence chart shows the Euclidean distance between the two trajectories over time. Notice how it remains near zero before spiking rapidly, illustrating the butterfly effect.',
  },
  seo: [
    {
      type: 'title',
      text: 'Deterministic Chaos: Understanding the Lorenz Equations',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The Lorenz system is a landmark formulation in nonlinear dynamics and chaos theory. Originally derived in 1963 by the meteorologist and mathematician <strong>Edward Lorenz</strong>, the model was born out of a simplified representation of atmospheric convection. Lorenz simplified the complex fluid dynamics equations of atmospheric flow into three coupled, ordinary differential equations. His discovery that these simple, deterministic equations could produce highly complex, non-periodic, and chaotic behavior changed our understanding of physical systems.',
    },
    {
      type: 'paragraph',
      html: 'The system is defined by three coupled differential equations that track a coordinate in a three-dimensional phase space over time:',
    },
    {
      type: 'list',
      items: [
        '<strong>dx/dt = &sigma; * (y - x):</strong> Describes the rate of convective motion. The parameter &sigma; (Prandtl number) represents the ratio of fluid viscosity to thermal conductivity.',
        '<strong>dy/dt = x * (&rho; - z) - y:</strong> Represents the temperature difference between ascending and descending convective currents. The parameter &rho; (Rayleigh number) represents the convective heating intensity.',
        '<strong>dz/dt = x * y - &beta; * z:</strong> Tracks the distortion of the vertical temperature profile from a linear gradient. The parameter &beta; is a geometric aspect ratio of the convective physical cell.',
      ],
    },
    {
      type: 'title',
      text: 'The Butterfly Effect: Sensitive Dependence on Initial Conditions',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The defining feature of chaotic systems is their <strong>sensitive dependence on initial conditions</strong>, popularly known as the <strong>Butterfly Effect</strong>. In a non-chaotic system, a minor difference in the initial state leads to a proportionally minor difference in the final state. In a chaotic system, however, the distance between two trajectories starting arbitrarily close to each other grows exponentially over time.',
    },
    {
      type: 'paragraph',
      html: 'This sensitivity is demonstrated in this simulator by running two trajectories (T1 in Cyan and T2 in Pink) that start with a tiny separation (defined by the Perturbation slider). Initially, they travel along virtually the same path, rendering a blended purple line. After a short period of time, the minor starting difference is amplified by the system\'s nonlinear terms, and the paths diverge completely, orbiting different wings of the attractor.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Standard Value', 'Physical Setting', 'System Behavior on Change'],
      rows: [
        ['&sigma; (Sigma)', '10.0', 'Prandtl Number', 'Determines the fluid\'s internal friction. Higher values speed up the reaction of velocity changes relative to temperature gradients.'],
        ['&rho; (Rho)', '28.0', 'Rayleigh Number', 'Main driver of chaos. Below &rho; = 1, the origin is the only stable point. At &rho; = 28, the system is fully chaotic.'],
        ['&beta; (Beta)', '8/3 (2.667)', 'Geometric Aspect Ratio', 'Controls the physical width-to-height ratio of the convection cells. Modifies the scale and rotation speed of the orbits.'],
      ],
    },
    {
      type: 'title',
      text: 'Phase Space, Strange Attractors, and Fractals',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In classical physics, trajectories eventually settle into steady points (sinks) or repeat the same path indefinitely (limit cycles). The Lorenz system does neither. The path loops in three dimensions infinitely without ever crossing itself, since the system is deterministic and unique at every coordinate. This infinite, non-repeating structure is bounded within a finite volume of phase space, forming a <strong>strange attractor</strong>.',
    },
    {
      type: 'paragraph',
      html: 'The geometry of this attractor is fractal, with a Hausdorff dimension of approximately 2.06. This means the attractor is more than a two-dimensional surface but less than a solid three-dimensional volume, showcasing a complex topological structure where paths fold over each other without intersecting.',
    },
    {
      type: 'title',
      text: 'Applications of Chaos Theory in Science',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The lessons learned from the Lorenz attractor extend far beyond weather forecasting. Chaos theory has influenced many modern fields of study:',
    },
    {
      type: 'list',
      items: [
        '<strong>Meteorology:</strong> Established the fundamental limits of weather predictability, leading to ensemble forecasting methods.',
        '<strong>Cryptography:</strong> The deterministic yet unpredictable nature of chaotic orbits is used to generate secure pseudo-random keys and encrypt sensitive data streams.',
        '<strong>Cardiology:</strong> Used to model cardiac rhythms, where healthy hearts exhibit chaotic characteristics, while periodic rhythms can indicate pathology.',
        '<strong>Engineering:</strong> Helps design stable structures by analyzing and avoiding chaotic resonance in suspension bridges and mechanical systems.',
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
