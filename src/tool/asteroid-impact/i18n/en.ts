const slug = 'asteroid-impact-simulator';
const description = 'Simulate asteroid impacts with real physics. Calculate energy, crater, thermal radiation and shockwave. Would you survive Chicxulub?';
const title = 'Asteroid Impact Simulator: Apocalypse Calculator';
const howTo = [
    {
      name: 'Choose projectile size',
      text: 'Enter the asteroid diameter, from a small 10-meter meteorite to a 10-kilometer planet killer.',
    },
    {
      name: 'Configure velocity and angle',
      text: 'Adjust the approach velocity and entry angle (45° is the statistically most likely value).',
    },
    {
      name: 'Define asteroid nature',
      text: 'Select whether the asteroid is made of rock, iron, or ice to calculate the crater depth correctly.',
    },
    {
      name: 'Analyze survival verdict',
      text: 'Drag the asteroid onto the map and indicate how far away you are to see the effects of radiation, earthquake, and shockwave.',
    },
  ];
const faq = [
    {
      question: 'How is impact energy calculated?',
      answer: 'Primary energy is kinetic: (1/2) * mass * velocity². We use realistic densities (e.g. 3000 kg/m³ for rocky asteroids) and typical atmospheric entry velocities (11 to 72 km/s). The resulting energy is measured in Megatons of TNT.',
    },
    {
      question: 'What is a thermal shockwave?',
      answer: 'Upon entering the atmosphere, the asteroid compresses the air so violently that it creates a fireball a thousand times brighter than the Sun. The resulting thermal radiation can cause third-degree burns and set forests ablaze miles from the impact.',
    },
    {
      question: 'Why don\'t some asteroids create craters?',
      answer: 'Smaller rocks (<50m) usually fragment and explode in the atmosphere due to air pressure (Airburst), as happened in Chelyabinsk. The energy is released as a powerful pressure shockwave, but it doesn\'t hit the ground as a solid body.',
    },
    {
      question: 'What is the real probability of an impact?',
      answer: 'Small impacts (like Russia in 2013) happen every decade. Catastrophic impacts (Tunguska-style) every few centuries. A global extinction event like Chicxulub happens approximately every 100 million years.',
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
    activateGPS: 'Activate GPS',
    analysisLabel: 'Analysis',
    dragToMap: 'DRAG TO MAP',
    diameterLabel: 'Diameter',
    velocityLabel: 'Velocity',
    typeLabel: 'Type',
    historicalData: 'Historical Data',
    composition: 'Composition',
    rock: 'Rock',
    iron: 'Iron',
    ice: 'Ice',
    clearAll: 'Clear all',
    searching: 'Searching...',
    gpsActive: 'GPS Active',
    gpsError: 'GPS Error',
    verdictSafe: 'SAFE ZONE',
    verdictSafeSub: 'No threats',
    verdictShock: 'SHOCK WAVE',
    verdictShockSub: 'Structural damage',
    verdictBurned: 'THERMAL RADIATION',
    verdictBurnedSub: 'Extreme danger',
    verdictVaporized: 'GROUND ZERO',
    verdictVaporizedSub: 'Direct impact',
    presetAerial: 'Aerial',
    presetForest: 'Forest',
    presetComet: 'Comet',
    presetELE: 'E.L.E.',
  },
  seo: [
    {
      type: 'title',
      text: 'When the Sky Falls: The Physics of Cosmic Apocalypse',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Asteroids are not just space rocks. They are cosmic bullets traveling at 20 km/s, capable of releasing more energy than all nuclear weapons on the planet combined. This simulator translates abstract physics into tangible human consequences.',
    },
    {
      type: 'title',
      text: 'The Doomsday Equation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'It all starts with kinetic energy: <strong>E = ½mv²</strong>. A 100-meter asteroid traveling at 20 km/s releases approximately 0.5 megatons of TNT. For context, the Hiroshima bomb was 0.015 megatons.',
    },
    {
      type: 'paragraph',
      html: 'But size scales exponentially. An object 10 times larger has 1,000 times more volume (and mass), releasing energy equivalent to <strong>500 megatons</strong>. Chicxulub, the dinosaur killer, released the equivalent of <strong>100 million megatons</strong>.',
    },
    {
      type: 'paragraph',
      html: 'A 1 km asteroid striking Earth would release more energy than all of the planet\'s nuclear weapons detonated simultaneously.',
    },
    {
      type: 'title',
      text: 'Anatomy of Destruction: Concentric Layers of Apocalypse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>The Crater (Ground Zero):</strong> The crater diameter scales with E^0.3. A 1-megaton impact creates a ~1 km crater. Everything inside is instantly vaporized.',
        '<strong>Thermal Radiation (The Flash):</strong> The fireball emits intense infrared radiation. At distances of E^0.41 km, clothing ignites and skin suffers third-degree burns.',
        '<strong>Shockwave (The Hammer):</strong> The overpressure wave travels at supersonic speed. At 1 psi, glass shatters. At 5 psi, buildings collapse.',
        '<strong>Earthquake (The Seismic Echo):</strong> The impact generates global seismic waves. Chicxulub caused a magnitude 11 earthquake, breaking the Richter scale.',
      ],
    },
    {
      type: 'title',
      text: 'Historical Impacts: Lessons from the Past',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Location & Year', 'Size', 'Energy', 'Effects'],
      rows: [
        ['Chelyabinsk, Russia (2013)', '20 meters', '500 kilotons', 'Shockwave at 100 km, 1,500 injured, broken windows'],
        ['Tunguska, Siberia (1908)', '50-60 meters', '10-15 megatons', 'Flattened 2,000 km² of forest, 80 million trees felled'],
        ['Chicxulub, Gulf of Mexico (66 M years)', '10 km', '100 million megatons', 'Extinction of 75% of life on Earth'],
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


