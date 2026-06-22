const slug = 'roche-limit-satellite-disruption';
const title = 'Roche Limit Calculator and Satellite Disruption Simulator';
const description = 'Calculate the Roche limit for planets and moons, compare fluid and rigid breakup distances, and visualize how tidal forces turn a satellite into a ring system.';

const howTo = [
  {
    name: 'Choose the primary body',
    text: 'Select the planet whose gravity is stretching the satellite. The calculator loads its radius, density, and mass for the Roche limit and orbital period estimates.',
  },
  {
    name: 'Select the satellite type',
    text: 'Pick an icy moon, rocky moon, rubble pile, or iron-rich body. Density and internal cohesion change the breakup boundary.',
  },
  {
    name: 'Move the orbit slider',
    text: 'Drag the orbital distance inward or outward. The visual disk shows whether the satellite is outside the Roche limit, grazing it, fragmenting, or already becoming a ring.',
  },
  {
    name: 'Compare the limits',
    text: 'Use the readouts to compare the classical fluid Roche limit with the lower rigid-body estimate and the cohesion-adjusted operating limit.',
  },
];

const faq = [
  {
    question: 'What is the Roche limit?',
    answer: 'The Roche limit is the distance from a massive primary body at which tidal forces across a smaller orbiting body become strong enough to overcome the smaller body\'s self-gravity. Inside that boundary, a weak or fluid-like satellite can be pulled apart.',
  },
  {
    question: 'Why are there fluid and rigid Roche limits?',
    answer: 'A fluid satellite deforms easily, so tides can amplify its elongation and disrupt it farther from the planet. A rigid satellite can resist deformation with material strength, so the simple rigid estimate places breakup closer to the primary.',
  },
  {
    question: 'Does every moon inside the Roche limit instantly become rings?',
    answer: 'No. Real disruption depends on spin, composition, cracks, porosity, heating, impacts, and material strength. This tool shows the classical gravitational boundary and uses a transition band to communicate risk rather than an instant switch.',
  },
  {
    question: 'Why do Saturn\'s rings sit near Roche-limit physics?',
    answer: 'Saturn\'s rings occupy a region where icy material can persist as particles instead of accreting into one large moon. The Roche limit helps explain why ring particles remain dispersed close to the planet.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Primary body',
    satelliteType: 'Satellite type',
    orbitDistance: 'Orbital distance',
    rocheBoundary: 'Roche boundary',
    fluidLimit: 'Fluid limit',
    rigidLimit: 'Rigid limit',
    activeLimit: 'Active limit',
    safetyRatio: 'Safety ratio',
    orbitalPeriod: 'Orbital period',
    tidalStress: 'Tidal stress',
    ringFormation: 'Ring formation',
    stable: 'Stable orbit',
    grazing: 'Tidal grazing',
    fragmenting: 'Fragmenting',
    ring: 'Ring system',
    km: 'km',
    hours: 'h',
    density: 'Density',
    cohesion: 'Cohesion',
    planetRadius: 'Planet radius',
    reset: 'Reset',
    closePass: 'Close pass',
    moonTrack: 'Moon track',
    debrisTrack: 'Debris track',
    primaryEarth: 'Earth',
    primaryMars: 'Mars',
    primaryJupiter: 'Jupiter',
    primarySaturn: 'Saturn',
    primaryNeptune: 'Neptune',
    satelliteIcyMoon: 'Icy moon',
    satelliteRockyMoon: 'Rocky moon',
    satelliteRubblePile: 'Rubble pile',
    satelliteIronCore: 'Iron-rich moon',
    cohesionFluid: 'Fluid',
    cohesionFractured: 'Fractured',
    cohesionRigid: 'Rigid',
  },
  seo: [
    {
      type: 'title',
      text: 'Roche Limit Formula, Meaning, and How to Use This Calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The <strong>Roche limit</strong> is the minimum orbital distance at which a satellite held together mainly by its own gravity can orbit a larger body without being torn apart by tidal forces. People usually search for it when they want to know whether a moon, comet, asteroid, or artificial scenario would survive a close approach to a planet, or whether the material would spread into a ring. This calculator answers that question by combining the planet radius, the planet density, the satellite density, and the satellite\'s approximate internal strength.',
    },
    {
      type: 'paragraph',
      html: 'The key idea is simple: gravity is not equally strong across the satellite. The near side is pulled harder than the far side, creating a stretching force. If that tidal stretching is stronger than the satellite\'s self-gravity and material cohesion, the body can crack, shed mass, and eventually fragment. The Roche limit is therefore not just a distance; it is a comparison between external tidal stress and internal binding.',
    },
    {
      type: 'title',
      text: 'Roche Limit Equations Used by the Calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For a fluid or very weak satellite, the classical approximation is <strong>d = 2.44 R (rho_M / rho_m)^(1/3)</strong>. For a rigid satellite, a common approximation is <strong>d = 1.26 R (rho_M / rho_m)^(1/3)</strong>. In these equations, <strong>d</strong> is the Roche limit measured from the center of the planet, <strong>R</strong> is the radius of the primary body, <strong>rho_M</strong> is the density of the primary body, and <strong>rho_m</strong> is the density of the satellite.',
    },
    {
      type: 'list',
      items: [
        '<strong>Primary radius:</strong> Larger planets create a larger Roche-limit distance even when density is similar.',
        '<strong>Primary density:</strong> A denser primary increases tidal strength at a given multiple of its radius.',
        '<strong>Satellite density:</strong> A denser satellite has stronger self-gravity, so it can survive closer to the planet.',
        '<strong>Satellite strength:</strong> A fluid, icy, fractured, or rubble-pile object disrupts farther out than a compact rigid object.',
      ],
    },
    {
      type: 'table',
      headers: ['Model', 'Formula shape', 'Use it for', 'What the result means'],
      rows: [
        ['Fluid Roche limit', '2.44 R (rho_M / rho_m)^(1/3)', 'Icy moons, molten bodies, rubble piles, weak comets', 'The conservative breakup distance for objects that deform easily.'],
        ['Rigid Roche limit', '1.26 R (rho_M / rho_m)^(1/3)', 'Dense rocky or metallic bodies with material strength', 'A closer-in lower estimate where material strength delays disruption.'],
        ['Cohesion-adjusted display', 'Between the fluid and rigid cases', 'Quick scenario comparison in this simulator', 'A practical risk line for the selected satellite type, not a universal natural-law switch.'],
      ],
    },
    {
      type: 'title',
      text: 'Example: Why an Icy Moon Near Saturn Is Vulnerable',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturn is much less dense than Earth, but it is enormous. A low-density icy satellite has weak self-gravity compared with a compact rocky moon, so the density ratio still places the fluid Roche limit far from Saturn\'s cloud tops. That is one reason Roche-limit physics is central to understanding why Saturn can maintain a broad, bright ring system made mostly of icy particles instead of one large reassembled moon.',
    },
    {
      type: 'paragraph',
      html: 'If you choose Saturn and an icy moon in the calculator, then drag the orbit inward, watch the safety ratio. Above <strong>1.00x</strong>, the selected orbit is outside the active Roche boundary. Near <strong>1.00x</strong>, the moon is in a tidal grazing region where mass shedding or cracking becomes plausible. Below <strong>1.00x</strong>, the visualization shifts toward fragment arcs and ring formation because the selected model predicts disruption.',
    },
    {
      type: 'title',
      text: 'How to Interpret the Safety Ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The <strong>safety ratio</strong> is the current orbital distance divided by the selected Roche boundary. A ratio of <strong>1.25x</strong> means the orbit is 25% farther out than the active breakup estimate. A ratio of <strong>1.00x</strong> means the orbit is exactly on the selected Roche boundary. A ratio of <strong>0.80x</strong> means the satellite is well inside the selected disruption zone.',
    },
    {
      type: 'table',
      headers: ['Safety ratio', 'Displayed state', 'Practical reading'],
      rows: [
        ['Above 1.12x', 'Stable orbit', 'The satellite is outside the chosen Roche boundary for this simplified model.'],
        ['1.00x to 1.12x', 'Tidal grazing', 'The object is close enough that deformation, cracking, or surface shedding may matter.'],
        ['0.78x to 1.00x', 'Fragmenting', 'Self-gravity is no longer enough in the selected model; debris streams are plausible.'],
        ['Below 0.78x', 'Ring system', 'The original body is represented as dispersed material following neighboring orbits.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'The orbital period readout is included because close approaches are not only about distance. Material inside the disruption zone follows rapid, slightly different orbits. Once fragments separate, orbital shear spreads them around the planet, while collisions flatten and sort the debris into a disk-like ring.',
    },
    {
      type: 'title',
      text: 'Why the Roche Limit Can Create Rings',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When a satellite breaks apart outside the Roche limit, the fragments may eventually collide and reaccumulate into a smaller moon. Inside the Roche limit, nearby fragments cannot easily merge into one stable self-gravitating body because tidal forces keep pulling the material apart. The result can be a long-lived ring, especially when the debris is icy, collisional, and continuously stirred by small moons or resonances.',
    },
    {
      type: 'paragraph',
      html: 'Ring formation is gradual. A disrupted moon first becomes elongated, then sheds particles and larger fragments. Those fragments occupy slightly different orbital radii, so they drift ahead or behind one another. Over time, collisions damp vertical motion and the material settles into a thin disk. This is why the simulator shows a transition from a single moon to arcs and then to a fuller ring rather than treating breakup as an instant explosion.',
    },
    {
      type: 'title',
      text: 'Important Limits of This Roche Limit Calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The calculator is designed for fast scientific intuition, not high-fidelity mission design. Real satellites are affected by rotation, orbital eccentricity, internal layering, tensile strength, porosity, temperature, tidal heating, previous fractures, impacts, and resonances with other moons. A spinning rubble pile on an eccentric orbit can fail differently from a cold monolithic rock on a circular orbit, even if their average densities look similar.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use the fluid limit</strong> when the object is weak, icy, molten, highly fractured, or made of loose aggregate.',
        '<strong>Use the rigid limit</strong> as a lower-bound estimate for compact bodies with meaningful internal strength.',
        '<strong>Read the active limit</strong> as the simulator\'s chosen working boundary for the selected satellite type.',
        '<strong>Do not read the result</strong> as an exact prediction for a named real moon without a detailed geophysical model.',
      ],
    },
    {
      type: 'title',
      text: 'Common Questions This Tool Helps Answer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use this tool when you want to estimate questions such as: How close can a moon get to Earth before breaking apart? Why are Saturn\'s rings inside a Roche-limit region? Would a rocky moon survive closer than an icy moon? How does density change the Roche limit? What is the difference between the fluid and rigid Roche limit? The controls are built around those comparisons, so changing one variable immediately shows how the breakup distance, safety ratio, and ring-formation visualization respond.',
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
