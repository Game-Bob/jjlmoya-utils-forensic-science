import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = 'Dyson Sphere Energy Capture Simulator';
const description = 'Estimate Dyson swarm, ring, shell, and statite collector designs for different stars. Calculate capture power, orbital radius, material mass, and the coverage needed to reach a target Kardashev scale.';

const howTo = [
  {
    name: 'Choose a star type',
    text: 'Start with an M dwarf, Sun-like star, A-type star, red giant, or blue giant. The simulator uses representative luminosity and mass values to estimate collector radius and orbital period.',
  },
  {
    name: 'Select the megastructure architecture',
    text: 'Compare a Dyson swarm, equatorial ring, rigid shell, or statite mirror cloud. Each design has different capture efficiency, material density, and stability assumptions.',
  },
  {
    name: 'Set coverage and operating temperature',
    text: 'Increase coverage to capture more stellar power, then adjust the operating temperature to move the collectors closer to or farther from the star.',
  },
  {
    name: 'Match a Kardashev target',
    text: 'Use the target slider to see how much of the star must be enclosed to reach a civilization-scale power goal.',
  },
];

const faq = [
  {
    question: 'What is the difference between a Dyson sphere and a Dyson swarm?',
    answer: 'A rigid Dyson sphere is a continuous shell around a star, while a Dyson swarm is a large collection of independent orbiting collectors. Most engineering discussions favor swarms because a solid shell would be structurally unstable and extremely material-intensive.',
  },
  {
    question: 'How does the simulator choose the optimal radius?',
    answer: 'It estimates the distance where collectors radiating from both sides reach the selected operating temperature under the chosen stellar luminosity. Hotter collectors can orbit closer, while cooler collectors require larger radii.',
  },
  {
    question: 'What does the Kardashev rating mean here?',
    answer: 'The Kardashev value is calculated from captured power using the common logarithmic form K = (log10(P) - 6) / 10, where P is power in watts. A value near K1 represents planetary-scale energy use, while K2 approaches full stellar output.',
  },
  {
    question: 'Is the material mass realistic?',
    answer: 'It is an educational first-order estimate based on collector area, areal density, and a stability factor. Real designs would need station keeping, power transmission, mining losses, redundancy, heat rejection, and manufacturing infrastructure.',
  },
  {
    question: 'Why do bright stars require such large collector systems?',
    answer: 'High-luminosity stars push the safe thermal radius outward. That increases the surface area needed for a given coverage fraction, so material demand can rise faster than the captured power feels intuitive.',
  },
  {
    question: 'Can a civilization reach Kardashev Type II with partial coverage?',
    answer: 'Yes, if the host star is bright enough and the collectors are efficient. Around a Sun-like star, reaching near Type II requires capturing a major fraction of solar luminosity, but around more luminous stars the same power target can need lower fractional coverage.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson collector visualization',
    starType: 'Star type',
    structureType: 'Structure',
    coverage: 'Collector coverage',
    operatingTemp: 'Operating temperature',
    kardashevTarget: 'Kardashev target',
    kardashevRating: 'Current rating',
    capturedPower: 'Captured power',
    optimalRadius: 'Optimal radius',
    targetCoverage: 'Target coverage',
    materialMass: 'Material mass',
    captureMeter: 'Target capture progress',
    statusReady: 'Adjust the system to estimate collector demand.',
    statusUnderbuilt: 'Coverage is below the selected Kardashev target. Add collectors or choose a brighter star.',
    statusBalanced: 'Coverage and stellar output are close to the selected civilization-scale target.',
    statusExtreme: 'This configuration overshoots the target. It captures huge power, but material demand rises fast.',
    orbitalPeriod: 'Orbital period',
    collectorArea: 'Collector area',
    mercuryMasses: '{value} Mercury masses',
    kilograms: '{value} kg',
    daysUnit: '{value} days',
    starMDwarf: 'M dwarf',
    starSun: 'Sun-like G star',
    starA: 'A-type star',
    starRedGiant: 'Red giant',
    starBlueGiant: 'Blue giant',
    structureSwarm: 'Dyson swarm',
    structureRing: 'Equatorial ring',
    structureShell: 'Rigid shell',
    structureStatite: 'Statite mirror cloud',
  },
  seo: [
    {
      type: 'title',
      text: 'Dyson Sphere Energy Capture Simulator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A Dyson sphere is not just a science fiction image of a star inside a shell. It is a family of possible megastructure concepts for intercepting stellar luminosity: swarms of satellites, equatorial rings, thin mirror clouds, and the famous but problematic rigid shell. This simulator turns those ideas into numbers so you can compare how star type, collector temperature, coverage, and structure design change the energy budget.',
    },
    {
      type: 'paragraph',
      html: 'The calculator estimates captured power, thermal orbital radius, collector area, orbital period, material mass, and the coverage needed for a chosen Kardashev-scale target. It is built for students, worldbuilders, science communicators, and anyone trying to understand why Type II civilizations are hard: the challenge is not only power, but area, heat, mining, stability, and orbital logistics.',
    },
    {
      type: 'title',
      text: 'How the Dyson Radius Is Estimated',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The optimal radius is calculated from stellar luminosity and collector operating temperature. A collector close to a bright star receives intense flux and must run hot or reject huge amounts of heat. Moving outward reduces thermal stress, but the required collector area grows with the square of distance. This tradeoff is why the same coverage fraction can be modest around a dim M dwarf and enormous around a blue giant.',
    },
    {
      type: 'title',
      text: 'Dyson Swarm, Ring, Shell, and Statite Cloud Compared',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dyson swarm:</strong> many independent orbiting collectors. It is the most plausible large-scale architecture because it can be built gradually and does not require a rigid stellar shell.',
        '<strong>Equatorial ring:</strong> a narrower collector band with lower coverage efficiency. It is easier to imagine as a first megastructure, but cannot capture full stellar output without becoming a broader swarm.',
        '<strong>Rigid shell:</strong> visually iconic but mechanically unfavorable. A shell around a star has severe stability and material problems, so the simulator assigns it high mass and low stability.',
        '<strong>Statite mirror cloud:</strong> ultra-light reflectors held partly by radiation pressure. It reduces mass demand but has lower thermal tolerance and demanding control requirements.',
      ],
    },
    {
      type: 'title',
      text: 'Coverage Needed for the Kardashev Scale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The Kardashev scale expresses civilization power use logarithmically. In this tool, captured watts are converted to a K rating using K = (log10(P) - 6) / 10. A partial Dyson swarm around the Sun can exceed current human energy use by many orders of magnitude long before it reaches full Type II status. The target coverage result shows the fraction of stellar luminosity that must be intercepted for the selected goal.',
    },
    {
      type: 'table',
      headers: ['Design choice', 'Main advantage', 'Main bottleneck'],
      rows: [
        ['Dyson swarm', 'Buildable in stages with independent orbits', 'Traffic control and power beaming'],
        ['Equatorial ring', 'Lower initial area and simpler geometry', 'Limited coverage'],
        ['Rigid shell', 'Maximum interception in a simple diagram', 'Structural instability and huge mass'],
        ['Statite cloud', 'Very low areal density', 'Precise station keeping and heat limits'],
      ],
    },
    {
      type: 'title',
      text: 'Material Mass and Mining Reality Check',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The material estimate multiplies collector area by an assumed areal density and design stability factor. It intentionally reports mass in Mercury masses when the number becomes astronomical, because many Dyson swarm discussions imagine dismantling small planets or asteroids for raw material. Even thin collectors become massive when spread over astronomical-unit scales.',
    },
    {
      type: 'paragraph',
      html: 'Use the result as an order-of-magnitude guide rather than a blueprint. Real megastructure engineering would need radiation damage models, thermal cycles, collision avoidance, attitude control, power transmission, manufacturing yield, and long-term orbital evolution. The value of the simulator is that it makes the first constraints visible immediately.',
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
