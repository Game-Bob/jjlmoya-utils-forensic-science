import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'radioactive-decay-half-life-calculator';
const title = 'Radioactive Decay Half Life Calculator';
const description = 'Simulate radioactive decay with isotope presets, half-life math, stochastic atom grids, remaining sample size, and activity estimates.';

const howTo = [
  {
    name: 'Choose an isotope preset',
    text: 'Start with Carbon-14, Iodine-131, Uranium-238, Technetium-99m, or Radon-222. Each preset loads a realistic half-life and context for its common scientific use.',
  },
  {
    name: 'Set sample size and elapsed time',
    text: 'Adjust the number of atoms represented in the grid and move time forward to see how the surviving fraction follows the exponential half-life law.',
  },
  {
    name: 'Compare exact math with random atoms',
    text: 'Use the deterministic result for the expected remaining fraction, then inspect the atom grid to understand why small samples fluctuate around the theoretical curve.',
  },
  {
    name: 'Interpret activity',
    text: 'Activity falls in the same proportion as the undecayed nuclei, so the activity meter shows how much radiation rate remains relative to the starting sample.',
  },
];

const faq = [
  {
    question: 'What does half-life mean?',
    answer: 'Half-life is the time required for half of the unstable nuclei in a sample to decay on average. After one half-life 50% remains, after two half-lives 25% remains, and after three half-lives 12.5% remains.',
  },
  {
    question: 'Why does the atom grid not always match the exact percentage?',
    answer: 'Radioactive decay is probabilistic. The formula gives the expected fraction for a very large sample, while the grid simulates individual atoms with random thresholds. Small samples naturally show statistical noise.',
  },
  {
    question: 'Is the activity meter the same as the remaining atoms?',
    answer: 'For a single isotope, activity is proportional to the number of undecayed nuclei. If 30% of the atoms remain, the instantaneous activity is also about 30% of the original activity.',
  },
  {
    question: 'Can this calculator be used for radiocarbon dating?',
    answer: 'Yes for conceptual calculations. Carbon-14 dating compares the remaining Carbon-14 activity against living material, but real laboratory dating also corrects for calibration curves, contamination, and sample preparation.',
  },
  {
    question: 'Does each isotope decay into one stable product?',
    answer: 'Not always. Some isotopes decay through chains with multiple daughter products. This tool models the parent isotope half-life, which is the most important first-order quantity for remaining parent nuclei and activity.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotope',
    sampleAtoms: 'Sample atoms',
    elapsedTime: 'Elapsed time',
    halfLife: 'Half-life',
    remaining: 'Remaining',
    decayed: 'Decayed',
    activity: 'Relative activity',
    timeUnit: 'Time unit',
    expectedCurve: 'Expected curve',
    atomField: 'Atom field',
    presetUse: 'Typical use',
    oneHalfLife: '1 half-life',
    twoHalfLives: '2 half-lives',
    fourHalfLives: '4 half-lives',
    custom: 'Custom',
    liveAtoms: 'Live atoms',
    decayedAtoms: 'Decayed atoms',
    resetSeed: 'New atom pattern',
  },
  seo: [
    {
      type: 'title',
      text: 'Radioactive decay half-life calculator: remaining atoms, activity, and isotope examples',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use this radioactive decay calculator to estimate how much of an unstable isotope remains after a chosen amount of time. It is designed for the most common search intent behind half-life questions: finding the formula, applying it to real isotopes, comparing remaining parent nuclei with decayed nuclei, and understanding why activity decreases as a sample ages.',
    },
    {
      type: 'paragraph',
      html: 'The tool combines two complementary models. The numerical results use the standard exponential decay equation, while the atom field simulates individual nuclei with stochastic thresholds. That makes it useful both as a quick half-life calculator and as a visual explanation of why radioactive decay is predictable in bulk but random for any single atom.',
    },
    {
      type: 'title',
      text: 'Radioactive decay formula used by the calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The calculator uses <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. In this equation, <strong>N0</strong> is the starting number of parent nuclei, <strong>N(t)</strong> is the expected number remaining after time <strong>t</strong>, and <strong>T1/2</strong> is the isotope half-life. The exponent <strong>t / T1/2</strong> counts how many half-lives have passed.',
    },
    {
      type: 'paragraph',
      html: 'For example, if a sample starts with 1,000 parent nuclei and two half-lives pass, the expected remaining amount is 1,000 x (1/2)^2 = 250 nuclei. The decayed amount is the difference between the original and remaining sample, so 750 nuclei have decayed. The same calculation works whether the half-life is measured in seconds, hours, days, years, or billions of years.',
    },
    {
      type: 'table',
      headers: ['Elapsed time', 'Formula factor', 'Parent nuclei remaining', 'Relative activity'],
      rows: [
        ['0 half-lives', '(1/2)^0', '100%', '100%'],
        ['1 half-life', '(1/2)^1', '50%', '50%'],
        ['2 half-lives', '(1/2)^2', '25%', '25%'],
        ['3 half-lives', '(1/2)^3', '12.5%', '12.5%'],
        ['5 half-lives', '(1/2)^5', '3.125%', '3.125%'],
        ['10 half-lives', '(1/2)^10', '0.098%', '0.098%'],
      ],
    },
    {
      type: 'title',
      text: 'How to calculate remaining activity after a half-life',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For a single parent isotope, activity is proportional to the number of undecayed nuclei. If 25% of the parent isotope remains, the activity from that isotope is also about 25% of the starting activity. This is why the calculator reports relative activity alongside remaining and decayed atoms: for one isotope, they follow the same exponential factor.',
    },
    {
      type: 'paragraph',
      html: 'This proportional relationship is especially important in nuclear medicine and radiation safety. A Technetium-99m tracer loses activity over hours, so imaging schedules are planned around its short half-life. Iodine-131 remains important over days, which affects therapy timing, contamination monitoring, and instructions for limiting exposure after treatment.',
    },
    {
      type: 'title',
      text: 'Examples: Carbon-14, Iodine-131, Technetium-99m, Uranium-238, and Radon-222',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Isotope', 'Approximate half-life', 'Common search use', 'What the result tells you'],
      rows: [
        ['Carbon-14', '5,730 years', 'Radiocarbon dating', 'How much parent Carbon-14 activity remains in once-living material.'],
        ['Iodine-131', '8.02 days', 'Medical therapy and nuclear incidents', 'How quickly activity falls over days after release or treatment.'],
        ['Technetium-99m', '6.01 hours', 'Diagnostic imaging', 'Why useful medical activity fades within a clinical workday.'],
        ['Uranium-238', '4.47 billion years', 'Geologic dating', 'Why very long-lived isotopes remain measurable over Earth history.'],
        ['Radon-222', '3.82 days', 'Indoor radiation and decay chains', 'How a gas exposure source changes over days.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'These examples cover different time scales and user intents. Carbon-14 answers archaeology and dating questions, Iodine-131 and Technetium-99m answer medical activity questions, Radon-222 is useful for environmental exposure examples, and Uranium-238 demonstrates why some isotopes decay so slowly that their half-life is best understood on geologic time scales.',
    },
    {
      type: 'title',
      text: 'How to read the stochastic atom simulation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The animated atom field is intentionally stochastic. The equation gives the expected value for a large sample, but individual nuclei decay randomly. With a small sample, one run after one half-life might leave slightly more or fewer than 50% of the atoms. With a larger sample, the visual result tends to sit closer to the theoretical curve because random fluctuations average out.',
    },
    {
      type: 'paragraph',
      html: 'This distinction matters for learning. Half-life does not mean every atom waits for a timer and then half of them disappear at once. Each unstable nucleus has a constant probability of decay per unit time. The smooth curve appears only when many independent random events are counted together.',
    },
    {
      type: 'title',
      text: 'Half-life calculator use cases',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Homework and classroom physics:</strong> calculate remaining parent nuclei after a given number of half-lives and connect the formula to a visual model.',
        '<strong>Chemistry and nuclear science:</strong> compare isotope stability, decay speed, and relative activity across very different time scales.',
        '<strong>Radiocarbon dating intuition:</strong> understand why older samples contain less Carbon-14 and why dating becomes harder as activity approaches background levels.',
        '<strong>Medical isotope planning:</strong> see why short half-lives are useful for imaging and why activity changes quickly after administration.',
        '<strong>Radiation safety education:</strong> estimate how relative activity falls over time for a single isotope without confusing half-life with immediate disappearance.',
      ],
    },
    {
      type: 'title',
      text: 'Important limitations',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This calculator models the parent isotope with a single half-life. Real measurements can require additional corrections: detector efficiency, background radiation, branching ratios, daughter products, biological clearance, chemical form, shielding, and calibration curves. For radiocarbon dating, laboratory age estimates also depend on calibration against atmospheric Carbon-14 records rather than the simple equation alone.',
    },
    {
      type: 'paragraph',
      html: 'Use the result as a clear scientific estimate and teaching model, not as a substitute for radiation safety advice, medical instructions, dosimetry, or laboratory dating analysis.',
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
