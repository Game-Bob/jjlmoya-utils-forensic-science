import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'phase-diagram-critical-points-visualizer';
const title = 'Phase Diagram and Critical Point Visualizer';
const description = 'Explore solid, liquid, gas, and supercritical regions on an interactive pressure-temperature phase diagram with triple point and critical point markers.';

const howTo = [
  {
    name: 'Choose a substance',
    text: 'Switch between water, carbon dioxide, and nitrogen to see how real triple points and critical points reshape the phase map.',
  },
  {
    name: 'Move temperature and pressure',
    text: 'Use the sliders to place the sample on the pressure-temperature plane. The diagram updates the active phase region and the live sample marker.',
  },
  {
    name: 'Watch the critical halo',
    text: 'Move toward the end of the vapor-liquid boundary to see latent heat fade and the liquid-gas distinction collapse into a supercritical fluid.',
  },
  {
    name: 'Read the teaching panel',
    text: 'Use the phase label, latent heat meter, and point readouts to connect the visual diagram with thermodynamic vocabulary.',
  },
];

const faq = [
  {
    question: 'What is a phase diagram?',
    answer: 'A phase diagram maps which state of matter is stable at different combinations of temperature and pressure. The boundary lines mark conditions where two phases can coexist in equilibrium.',
  },
  {
    question: 'What happens at the critical point?',
    answer: 'At the critical point, the vapor-liquid boundary ends. Above the critical temperature and pressure, the material becomes a supercritical fluid and there is no sharp distinction between liquid and gas.',
  },
  {
    question: 'Why does water have a different melting line?',
    answer: 'Water is unusual because ice is less dense than liquid water near the melting point. Increasing pressure can favor the denser liquid phase, so the solid-liquid boundary slopes differently from many substances.',
  },
  {
    question: 'Are the plotted curves laboratory exact?',
    answer: 'No. The tool uses simplified curves anchored to published triple point and critical point values. It is designed for conceptual learning, not process engineering or safety calculations.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Phase diagram controls',
    substance: 'Substance',
    units: 'Units',
    scientificUnits: 'Scientific (K, MPa)',
    metricUnits: 'Metric (Celsius, kPa)',
    imperialUnits: 'Imperial (Fahrenheit, psi)',
    temperature: 'Temperature',
    pressure: 'Pressure',
    diagram: 'Pressure temperature phase diagram',
    sample: 'Sample state',
    phase: 'Stable phase',
    triplePoint: 'Triple point',
    criticalPoint: 'Critical point',
    vaporCurve: 'Vapor-liquid boundary',
    meltingLine: 'Solid-liquid boundary',
    latentHeat: 'Latent heat contrast',
    criticalProximity: 'Critical proximity',
    coordinates: 'Coordinates',
    purePhase: 'Pure phase',
    coexistence: 'Coexistence',
    solid: 'Solid',
    liquid: 'Liquid',
    gas: 'Gas',
    supercritical: 'Supercritical',
    low: 'low',
    high: 'high',
    reset: 'Reset',
    interpretation: 'Interpretation',
    note: 'Boundary lines mark coexistence; regions mark the most stable phase for the selected conditions.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interactive phase diagram visualizer for triple points, boiling curves, and critical points',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This phase diagram visualizer turns an abstract pressure-temperature chart into an interactive map. Choose a substance, move the temperature and pressure, and see whether the sample is predicted to behave as a solid, liquid, gas, or supercritical fluid. The goal is to make phase boundaries feel spatial: crossing a line changes the stable state, while approaching the critical point changes what a phase boundary even means.',
    },
    {
      type: 'paragraph',
      html: 'The tool is built for students, teachers, science writers, and anyone searching for a clear explanation of phase diagrams. It emphasizes the features that matter most in introductory thermodynamics: the triple point where three phases coexist, the vapor-liquid curve, the solid-liquid boundary, and the critical endpoint where the liquid-gas distinction disappears.',
    },
    {
      type: 'title',
      text: 'How to read the pressure-temperature diagram',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A phase diagram places temperature on one axis and pressure on the other. Each region shows the phase that is stable under those conditions. The lines between regions are coexistence curves: along those lines, two phases can remain in equilibrium rather than one phase completely replacing the other.',
    },
    {
      type: 'table',
      headers: ['Diagram feature', 'Meaning', 'What to watch in the tool'],
      rows: [
        ['Triple point', 'Solid, liquid, and gas coexist', 'The low-temperature junction where the boundaries meet.'],
        ['Vapor-liquid curve', 'Boiling or condensation equilibrium', 'The curved line from the triple point to the critical point.'],
        ['Solid-liquid boundary', 'Melting or freezing equilibrium', 'The steep line separating solid and liquid regions.'],
        ['Critical point', 'End of the vapor-liquid boundary', 'The highlighted endpoint where latent heat fades.'],
        ['Supercritical region', 'No sharp liquid-gas distinction', 'The high-temperature, high-pressure area beyond the critical point.'],
      ],
    },
    {
      type: 'title',
      text: 'Why the critical point matters',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Below the critical point, boiling is a phase transition: liquid and vapor can coexist, and energy can be absorbed as latent heat while temperature remains tied to the boundary condition. At the critical point, that boundary terminates. Above it, density changes continuously and the substance is described as a supercritical fluid rather than a normal liquid or gas.',
    },
    {
      type: 'paragraph',
      html: 'This matters in chemistry, planetary science, industrial extraction, refrigeration, and high-pressure physics. Carbon dioxide, for example, becomes supercritical at relatively accessible conditions compared with water, which is why supercritical CO2 appears in extraction and materials processing. Water requires much higher temperature and pressure, making its critical point important for power systems and geophysics.',
    },
    {
      type: 'title',
      text: 'What this visualizer simplifies',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Real phase diagrams can include polymorphs, metastable states, nonideal mixtures, multiple solid phases, and experimentally fitted equations of state. This educational tool keeps the model intentionally compact. It anchors each substance to recognizable reference values and draws smooth teaching curves so the main ideas are easy to inspect without needing a thermodynamics table.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use it for intuition:</strong> it helps explain why pressure cookers, dry ice, boiling, and supercritical fluids behave differently.',
        '<strong>Do not use it for engineering limits:</strong> simplified curves are not a substitute for certified property data.',
        '<strong>Focus on topology:</strong> the most important learning outcome is how phase regions connect and where boundaries end.',
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
