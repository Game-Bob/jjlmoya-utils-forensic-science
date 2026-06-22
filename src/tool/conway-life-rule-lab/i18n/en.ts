import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'conway-life-rule-lab';
const title = 'Conway Game of Life Rule Lab';
const description = 'Play, edit, and compare Conway-style cellular automata with B/S rules, pattern seeds, live metrics, and a responsive simulation board.';

const howTo = [
  {
    name: 'Seed the board',
    text: 'Choose a pattern such as a glider, pulsar, or Gosper gun, then place it on the grid or randomize a living population.',
  },
  {
    name: 'Run the simulation',
    text: 'Use play, pause, step, and speed controls to watch births, deaths, density, and stability evolve over time.',
  },
  {
    name: 'Change the rule',
    text: 'Switch presets or type a B/S rule such as B3/S23, B36/S23, or B3678/S34678 to compare different automata.',
  },
];

const faq = [
  {
    question: 'What is B/S notation in the Game of Life?',
    answer: 'B/S notation lists the neighbor counts that create a new live cell and the counts that let an existing live cell survive. Conway Life is B3/S23: dead cells are born with exactly three neighbors, and live cells survive with two or three neighbors.',
  },
  {
    question: 'Why is this tool called a rule lab instead of only a Game of Life simulator?',
    answer: 'The classic Conway rule is included, but the simulator is built to compare families of Life-like cellular automata. Editing the birth and survival counts changes the long-term behavior, producing replicators, waves, frozen islands, chaotic growth, or extinction.',
  },
  {
    question: 'What does stability mean in the simulator?',
    answer: 'Stability estimates how much the colony changed during the last generation. High stability means few cells were born or died relative to the population; low stability means the board is turbulent or rapidly reorganizing.',
  },
  {
    question: 'Does the board have edges?',
    answer: 'The simulation uses toroidal wrapping, so the left edge connects to the right edge and the top connects to the bottom. This keeps patterns moving naturally without disappearing at hard borders.',
  },
  {
    question: 'Can I draw my own starting pattern?',
    answer: 'Yes. Pause the simulation and click or tap cells on the board to toggle them. You can combine hand-drawn cells with built-in patterns and then run the result under any rule preset.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Life-like cellular automata board',
    play: 'Play',
    pause: 'Pause',
    step: 'Step',
    clear: 'Clear',
    randomize: 'Randomize',
    ruleLabel: 'Rule notation',
    ruleHelp: 'Birth / survival counts',
    speedLabel: 'Tempo',
    densityLabel: 'Seed density',
    patternLabel: 'Pattern',
    placePattern: 'Place pattern',
    generation: 'Generation',
    population: 'Population',
    density: 'Density',
    stability: 'Stability',
    births: 'Births',
    deaths: 'Deaths',
    achievementsLabel: 'Laboratory log',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Period-2 oscillation detected',
    achievementImmortal: 'Immortal',
    achievementImmortalDescription: 'Generation 500 reached at full stability',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Sparse random seed exceeded 1,000 living cells',
    presetClassic: 'Conway Classic',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Day & Night',
    patternGlider: 'Glider',
    patternGosper: 'Gosper Gun',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentomino',
    colonyStatus: 'Colony signal',
    statusFrozen: 'stable',
    statusGrowing: 'expanding',
    statusFading: 'declining',
    statusChaotic: 'volatile',
    invalidRule: 'Use B/S notation such as B3/S23.',
  },
  seo: [
    {
      type: 'title',
      text: 'Conway Game of Life Simulator with Editable Rules',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This Conway Game of Life rule lab lets you run the classic cellular automaton and then deliberately break, bend, and compare its rules. The board supports direct drawing, pattern placement, random seeds, step-by-step inspection, variable tempo, and live measurements for population, density, births, deaths, and stability. It is built for experimentation: you can start with a known pattern, change the rule notation, and immediately see whether the colony stabilizes, explodes, replicates, or vanishes.',
    },
    {
      type: 'title',
      text: 'How B/S Rules Change the Game',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Life-like cellular automata are often written in <strong>B/S notation</strong>. The B side defines how many live neighbors a dead cell needs to be born; the S side defines how many neighbors a live cell needs to survive. Conway\'s original rule, <strong>B3/S23</strong>, is famous because it sits in a narrow region between extinction and uncontrolled growth. Small changes can create dramatically different behavior, from HighLife replicators to Seeds-style branching fronts.',
    },
    {
      type: 'table',
      headers: ['Rule', 'Behavior to watch for', 'Good experiment'],
      rows: [
        ['<strong>B3/S23</strong>', 'Classic gliders, blinkers, still lifes, and engineered guns.', 'Place the Gosper gun and track population rhythm over several dozen generations.'],
        ['<strong>B36/S23</strong>', 'HighLife supports Conway structures plus self-replicating patterns.', 'Compare the same random seed against Conway Classic and look for faster expansion.'],
        ['<strong>B2/S</strong>', 'Cells never survive; the field becomes a wave of births and immediate deaths.', 'Start with a small seed and watch the frontier race outward.'],
        ['<strong>B3678/S34678</strong>', 'Day & Night supports dense inverse structures and large stable regions.', 'Randomize a high-density board and observe how voids behave like living islands.'],
      ],
    },
    {
      type: 'title',
      text: 'Why Patterns Matter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Patterns are the vocabulary of the Game of Life. A glider demonstrates movement, a pulsar demonstrates oscillation, the R-pentomino demonstrates long chaotic settling, and the Gosper gun demonstrates periodic production. Testing the same pattern under multiple rules reveals which behaviors depend on Conway\'s exact balance and which survive in nearby automata.',
    },
    {
      type: 'title',
      text: 'Reading the Live Metrics',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Population and density show how many cells are alive, but they do not tell the full story. Births and deaths expose the current activity level, while stability estimates whether the colony is settling into an oscillator, freezing into still lifes, or remaining turbulent. These measurements make the simulator useful for comparing rules instead of only watching attractive motion on a grid.',
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
      applicationCategory: 'EducationalApplication',
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
