import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'twin-paradox-visualizer';
const title = 'Twin Paradox Visualizer: Special Relativity Time Dilation';
const description = 'Visualize how special relativity makes a fast traveling twin return younger than the twin who stayed on Earth.';

const howTo = [
  {
    name: 'Set the spacecraft speed',
    text: 'Use the velocity slider to choose a fraction of the speed of light and watch the Lorentz factor increase.',
  },
  {
    name: 'Choose the Earth-frame mission length',
    text: 'Adjust how many years pass for the twin who remains on Earth during the complete outbound and return trip.',
  },
  {
    name: 'Compare the clocks and worldlines',
    text: 'Read the age gap, spacecraft elapsed time, Earth-frame distance and the bent worldline that marks the traveling twin changing inertial frames.',
  },
];

const faq = [
  {
    question: 'What is the twin paradox in special relativity?',
    answer: 'The twin paradox is a thought experiment where one twin travels through space at relativistic speed and later returns to Earth younger than the twin who stayed home. It feels paradoxical because each twin can initially describe the other as moving, but the traveling twin changes inertial frames when turning around, so the two paths through spacetime are not symmetric.',
  },
  {
    question: 'Why does the traveling twin age less?',
    answer: 'In special relativity, elapsed proper time depends on the path through spacetime. A clock moving at speed v relative to an inertial observer ticks slower by the Lorentz factor gamma. The traveler accumulates less proper time along the outbound and inbound legs than the stay-at-home twin accumulates on Earth.',
  },
  {
    question: 'Does acceleration cause the age difference?',
    answer: 'Acceleration is important because it lets the traveler reverse direction and reunite with Earth, but the age gap is calculated from the full spacetime path, not from acceleration alone. Even if the turnaround were very brief, the traveling path would still contain less proper time than the Earth path.',
  },
  {
    question: 'What does the Lorentz factor gamma mean?',
    answer: 'The Lorentz factor gamma equals 1 divided by the square root of 1 minus v squared over c squared. It tells you how strongly time intervals, lengths and energies differ between inertial frames. At everyday speeds gamma is almost 1, but near light speed it rises sharply.',
  },
  {
    question: 'Can this effect be measured in real life?',
    answer: 'Yes. Time dilation has been measured with fast particles, atomic clocks flown on aircraft, satellite timing systems and particle accelerators. The twin paradox uses an extreme travel story, but the underlying clock effect is a routinely verified part of modern physics.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Twin paradox spacetime visualization',
    controlsTitle: 'Twin paradox controls',
    worldlineLabel: 'Worldline diagram for Earth twin and traveling twin',
    earthTwin: 'Earth twin age',
    travelingTwin: 'Traveler age',
    presetCruise: 'Cruise',
    presetRelativistic: 'Relativistic',
    presetExtreme: 'Extreme',
    velocityLabel: 'Ship velocity',
    earthYearsLabel: 'Earth elapsed time',
    ageGapLabel: 'Age gap on reunion',
    gammaLabel: 'Lorentz factor',
    shipTimeLabel: 'Traveler proper time',
    distanceLabel: 'Turnaround distance',
    yearsUnit: 'years',
    yearsShortUnit: 'yr',
  },
  seo: [
    {
      type: 'title',
      text: 'Twin Paradox Calculator for Special Relativity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The twin paradox visualizer turns one of the most famous ideas in special relativity into an interactive spacetime diagram. Set a spacecraft velocity as a fraction of light speed, choose how many years pass on Earth, and the calculator computes the Lorentz factor, the traveler proper time, the reunion age gap and the outward distance to the turnaround point. The visual layout separates the Earth clock from the spacecraft clock so the asymmetry is visible instead of hidden inside formulas.',
    },
    {
      type: 'title',
      text: 'How the Calculation Works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The core quantity is the Lorentz factor: gamma = 1 / sqrt(1 - v^2 / c^2). For a simple out-and-back trip with constant cruising speed, the time experienced by the traveler is the Earth-frame mission duration divided by gamma. The difference between those two durations is the age gap when the twins reunite. The tool also shows the Earth-frame turnaround distance, which is half of the total Earth time multiplied by the ship velocity in light-years per year.',
    },
    {
      type: 'table',
      headers: ['Speed', 'Lorentz Factor', 'Traveler Clock Rate', 'Physical Meaning'],
      rows: [
        ['0.50c', '1.155', '86.6% of Earth rate', 'A noticeable but moderate relativistic effect.'],
        ['0.86c', '1.960', '51.0% of Earth rate', 'The traveler ages roughly half as fast during cruise.'],
        ['0.98c', '5.025', '19.9% of Earth rate', 'Extreme time dilation dominates the mission outcome.'],
      ],
    },
    {
      type: 'title',
      text: 'Why the Situation Is Not Symmetric',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'At first glance each twin can say the other is moving, which makes the outcome seem contradictory. The resolution is that the Earth twin remains approximately in one inertial frame, while the traveling twin leaves, reverses direction and returns. That change of inertial frame gives the traveler a different path through spacetime. The worldline drawn by this tool bends at the turnaround event, while the Earth twin worldline stays straight.',
    },
    {
      type: 'title',
      text: 'Reading the Worldline Diagram',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A worldline is a map of an object through spacetime rather than through space alone. In this visualizer, the vertical Earth line represents the twin who stays home. The angled red path represents the traveler leaving Earth and coming back. Increasing speed makes the traveler path lean more dramatically and reduces the amount of proper time accumulated on the spacecraft clock.',
    },
    {
      type: 'list',
      items: [
        '<strong>Age gap:</strong> how much younger the traveler is at reunion.',
        '<strong>Lorentz factor:</strong> the multiplier that links Earth-frame time to traveler proper time.',
        '<strong>Traveler proper time:</strong> the actual elapsed time measured by a clock on the spacecraft.',
        '<strong>Turnaround distance:</strong> the outward distance in Earth frame before the traveler reverses course.',
      ],
    },
    {
      type: 'title',
      text: 'Practical Evidence for Time Dilation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The twin paradox is a clean thought experiment, but time dilation is not speculative. Muons created in the upper atmosphere survive long enough to reach the ground because their moving clocks are dilated from Earth perspective. Atomic clock experiments on aircraft and precision satellite navigation also require relativistic corrections. The same mathematics behind this visualizer is part of the timing infrastructure used by modern GPS systems.',
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
