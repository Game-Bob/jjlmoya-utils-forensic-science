import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'global-albedo-snowball-simulator';
const title = 'Global Albedo and Snowball Earth Simulator';
const description = 'Explore Earth thermal radiation balance, solar constant changes, greenhouse gas concentration, and ice-albedo feedback to see whether ice sheets retreat, stabilize, or trigger a snowball climate.';

const howTo = [
  {
    name: 'Set incoming sunlight',
    text: 'Move the solar constant slider to test dimmer young-Sun scenarios, present Earth sunlight, or brighter future forcing.',
  },
  {
    name: 'Adjust greenhouse concentration',
    text: 'Change the greenhouse gas concentration to see how radiative forcing competes with higher planetary albedo.',
  },
  {
    name: 'Seed the planet with ice',
    text: 'Start with a small polar cap or a large ice-covered world. The model iterates the feedback loop and shows whether ice advances or retreats.',
  },
  {
    name: 'Read the climate state',
    text: 'Use the temperature, absorbed radiation, final ice cover, and timeline curve to compare temperate, snowball, and hothouse outcomes.',
  },
];

const faq = [
  {
    question: 'What is ice-albedo feedback?',
    answer: 'Ice and snow reflect more sunlight than ocean or land. When ice expands, planetary albedo rises, absorbed solar energy falls, and cooling can allow even more ice to form. When ice retreats, the darker surface absorbs more energy and warming accelerates.',
  },
  {
    question: 'What does Snowball Earth mean?',
    answer: 'Snowball Earth is a hypothesized climate state in which ice reaches low latitudes or nearly global coverage. Geological evidence suggests Earth may have approached such states during the Neoproterozoic era.',
  },
  {
    question: 'Is this a full climate model?',
    answer: 'No. It is a compact energy balance model for learning. It ignores atmospheric circulation, clouds, ocean heat transport, seasons, geography, and carbon cycle feedbacks, but it captures the core radiative logic of albedo feedback.',
  },
  {
    question: 'Why can greenhouse gases break a snowball state?',
    answer: 'Greenhouse gases reduce outgoing longwave cooling by adding radiative forcing. In Snowball Earth scenarios, volcanic carbon dioxide can accumulate when silicate weathering slows, eventually warming the planet enough to melt low-latitude ice.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Climate controls',
    solarConstant: 'Solar constant',
    greenhouse: 'Greenhouse gases',
    initialIce: 'Initial ice cover',
    temperature: 'Equilibrium temperature',
    absorbed: 'Absorbed sunlight',
    finalIce: 'Final ice cover',
    albedo: 'Planetary albedo',
    forcing: 'Greenhouse forcing',
    state: 'Climate state',
    timeline: 'Ice cover timeline',
    years: 'model years',
    snowball: 'Snowball lock-in',
    temperate: 'Temperate balance',
    hothouse: 'Hothouse retreat',
    retreating: 'Ice retreating',
    advancing: 'Ice advancing',
    stable: 'Near equilibrium',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Radiation diagnostics',
  },
  seo: [
    {
      type: 'title',
      text: 'Global albedo simulator for ice-albedo feedback and Snowball Earth',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This simulator explores one of the most important feedback loops in planetary climate: the link between ice cover, reflectivity, and absorbed sunlight. A planet with bright ice reflects more incoming solar radiation back to space. That cooling can preserve or expand the ice, raising albedo further and pushing the system toward a Snowball Earth state. A planet with less ice absorbs more sunlight, which can accelerate deglaciation.',
    },
    {
      type: 'paragraph',
      html: 'Use the sliders to change the solar constant, greenhouse gas concentration, and initial ice cover. The model then iterates a simple global energy balance and shows whether the climate moves toward extensive glaciation, a temperate equilibrium, or a hot low-ice state. It is designed for fast intuition: every control maps directly to a physical term in the radiation budget.',
    },
    {
      type: 'title',
      text: 'How the energy balance is estimated',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The absorbed shortwave radiation is estimated as S(1 - a) / 4, where S is the solar constant and a is planetary albedo. The division by four converts sunlight intercepted by Earths disk into an average over the whole spherical surface. Higher albedo lowers absorbed energy; higher greenhouse concentration adds positive radiative forcing that raises the surface temperature estimate.',
    },
    {
      type: 'table',
      headers: ['Control', 'Physical meaning', 'Climate effect'],
      rows: [
        ['Solar constant', 'Incoming stellar energy at Earth orbit', 'Higher values warm the planet and shrink ice.'],
        ['Greenhouse gases', 'Longwave radiative forcing relative to a reference atmosphere', 'Higher values make snowball lock-in harder.'],
        ['Initial ice cover', 'Starting reflectivity of the planet', 'High values can trigger runaway cooling through albedo feedback.'],
      ],
    },
    {
      type: 'title',
      text: 'Why albedo feedback can become nonlinear',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The ice-albedo loop is not a gentle one-way adjustment. Once ice reaches enough of the planet, the brighter surface can remove so much absorbed sunlight that summer melt becomes weak. In the opposite direction, retreating ice exposes darker ocean and land, increasing absorption and pushing the planet away from glaciation. That is why similar forcing can produce different outcomes depending on the initial ice cover.',
    },
    {
      type: 'paragraph',
      html: 'Real Earth adds many complications: clouds, dust on ice, ocean heat transport, continental positions, seasonal sunlight, sea ice dynamics, and the carbon cycle. A simple model still has value because it isolates the first-order radiation budget. It lets you see why Snowball Earth hypotheses depend on both weak sunlight or high albedo triggers and later greenhouse buildup for escape.',
    },
    {
      type: 'title',
      text: 'Interpreting the simulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Snowball lock-in:</strong> final ice cover is very high and the equilibrium temperature remains far below freezing.',
        '<strong>Temperate balance:</strong> the model settles with partial ice cover and moderate absorbed radiation.',
        '<strong>Hothouse retreat:</strong> ice collapses to a very small fraction while greenhouse forcing and absorbed sunlight remain high.',
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
