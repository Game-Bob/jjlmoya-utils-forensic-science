import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'stellar-habitability-zone';
const description = 'Calculate and visualize the habitable zones (Goldilocks zone) around different types of stars using stellar and planetary configurations.';
const title = 'Stellar Habitable Zone Simulator: Find Goldilocks Zones';

const howTo = [
  {
    name: 'Select a Stellar Preset',
    text: 'Pick a stellar type from Blue Giants to Red Dwarfs to load standard physical properties like mass, luminosity, and temperature.',
  },
  {
    name: 'Adjust Planetary Parameters',
    text: 'Modify the planet\'s orbital distance (semi-major axis), albedo, and atmospheric greenhouse warming effect using the interactive sliders.',
  },
  {
    name: 'Analyze the Orbit and Habitability',
    text: 'Observe the planet orbiting the star in real-time. Check whether the equilibrium and surface temperatures support liquid water.',
  },
];

const faq = [
  {
    question: 'What is the circumstellar habitable zone?',
    answer: 'The circumstellar habitable zone (often called the Goldilocks zone) is the region around a star where planetary-surface temperatures are sufficient to maintain liquid water under a given atmospheric pressure. It is defined by conservative and optimistic boundaries based on stellar luminosity and effective temperature.',
  },
  {
    question: 'How does stellar luminosity affect the habitable zone?',
    answer: 'Stellar luminosity determines the total energy output of the star. Hotter and more massive stars (like O, B, or A-type stars) are extremely bright, placing their habitable zones much farther away. Cooler, less massive stars (like K or M-type red dwarfs) have low luminosities, shifting their habitable zones extremely close to the star.',
  },
  {
    question: 'What is the difference between equilibrium and surface temperature?',
    answer: 'Equilibrium temperature is the theoretical temperature a planet would have assuming it behaves as a blackbody absorbing stellar radiation and re-radiating it back to space. Surface temperature includes the greenhouse effect of the planet\'s atmosphere, which traps heat and warms the planet further.',
  },
  {
    question: 'Why is albedo important for planetary habitability?',
    answer: 'Albedo is the measure of reflectivity of the planet\'s surface. A higher albedo (closer to 1.0) means the planet reflects more incoming stellar light, cooling it down. A lower albedo means more radiation is absorbed, raising its overall temperature.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Stellar Habitable Zone Simulator',
    starPresetsLabel: 'Spectral Presets',
    customStarHeader: 'Stellar Parameters',
    starTemperature: 'Effective Temperature (K)',
    starLuminosity: 'Luminosity (L/L⊙)',
    starMass: 'Mass (M/M⊙)',
    starRadius: 'Radius (R/R⊙)',
    planetHeader: 'Planetary Parameters',
    planetDistance: 'Orbital Distance (AU)',
    planetAlbedo: 'Bond Albedo',
    greenhouseDelta: 'Greenhouse Warming (K)',
    resultsHeader: 'Simulation Results',
    stellarFluxResult: 'Stellar Flux Received',
    eqTempResult: 'Equilibrium Temperature',
    surfTempResult: 'Estimated Surface Temperature',
    orbitPeriodResult: 'Orbital Period',
    orbitVelocityResult: 'Orbital Velocity',
    hzLimitsHeader: 'Habitable Zone Boundaries',
    innerLimit: 'Conservative Inner Limit',
    outerLimit: 'Conservative Outer Limit',
    optInnerLimit: 'Optimistic Inner Limit',
    optOuterLimit: 'Optimistic Outer Limit',
    orbitCanvasTitle: 'Interactive Orbit Visualizer',
    statusLabel: 'Habitability Status',
    statusTooHot: 'TOO HOT (Water vaporizes)',
    statusHabitable: 'HABITABLE (Liquid water possible)',
    statusTooCold: 'TOO COLD (Water freezes)',
    statusExplanation: 'Based on conservative boundaries, this planet lies within the specified habitable zone status.',
    unitsLabel: 'Unit System',
    unitsScientific: 'Scientific',
    unitsImperial: 'Imperial',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGY: Physics of Stellar Habitable Zones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The search for life beyond Earth begins with understanding the physical conditions required for liquid water. Astrobiologists use mathematical models to map the boundaries of habitable zones around different star types. This simulator uses the Kopparapu et al. (2013) models to estimate the energy flux received by planets and determine if they lie in the Goldilocks zone. The habitable zone is defined as the region where a terrestrial-mass planet with a CO2-H2O-N2 atmosphere can maintain liquid water on its surface.',
    },
    {
      type: 'title',
      text: 'Mathematical Formulas and Atmospheric Physics',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The boundaries of the habitable zone are determined by calculating the effective stellar flux (Seff) required to trigger runaway or maximum greenhouse conditions. The equation for Seff depends on the star\'s effective temperature (Teff):<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>where T* = Teff - 5780 K, and the coefficients (a, b, c, d) are empirically derived from 1D radiative-convective climate models. Once Seff is computed, the orbital distance d in astronomical units (AU) is given by:<br><br>d = sqrt(L / Seff)<br><br>where L is the star\'s luminosity relative to the Sun. The equilibrium temperature (Teq) of the planet is calculated assuming a spherical blackbody in thermal equilibrium:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>where R* is the stellar radius, A is the planetary bond albedo, and S is the received stellar flux in units of Earth\'s solar constant.',
    },
    {
      type: 'title',
      text: 'Spectral Classification and Habitable Boundaries',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stellar characteristics vary widely across spectral types. Here is a summary of typical properties and HZ boundaries:',
    },
    {
      type: 'table',
      headers: [
        'Spectral Class',
        'Temperature (K)',
        'Luminosity (L/L⊙)',
        'HZ Inner Limit (AU)',
        'HZ Outer Limit (AU)',
      ],
      rows: [
        ['O-Type Giant', '40,000', '100,000', '300.0', '530.0'],
        ['B-Type Giant', '20,000', '1,000', '30.1', '53.2'],
        ['A-Type Sirius', '8,500', '20.0', '4.2', '7.4'],
        ['F-Type Procyon', '6,500', '2.5', '1.5', '2.6'],
        ['G-Type Sun', '5,778', '1.0', '0.95', '1.67'],
        ['K-Type Dwarf', '4,500', '0.15', '0.37', '0.65'],
        ['M-Type Dwarf', '3,200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Detailed Spectral Class Impact on Habitability',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Each spectral class creates a unique radiation and gravitational environment for its planets:<br><br><strong>O and B-Type Stars:</strong> These massive blue stars emit intense ultraviolet (UV) radiation and have extremely short lifespans (tens of millions of years). Liquid water might exist on their outer worlds, but life would have insufficient time to evolve before the star undergoes a supernova explosion.<br><br><strong>A and F-Type Stars:</strong> These stars are brighter and hotter than the Sun. Their habitable zones are wide and far out, minimizing the effects of tidal locking. However, high levels of near-UV radiation can cause severe damage to organic molecules without a protective ozone layer.<br><br><strong>G-Type Stars (Sun-like):</strong> Providing a stable luminous flux for billions of years, these stars represent the primary targets for life searches. Their radiation output matches standard biochemistry requirements.<br><br><strong>K-Type Stars (Orange Dwarfs):</strong> Considered by many astrobiologists as the "superhabitable" hosts, orange dwarfs live for tens of billions of years, emit less harmful UV than G-type stars, and are not as prone to the severe flaring associated with younger M-dwarfs.<br><br><strong>M-Type Stars (Red Dwarfs):</strong> The most common stars in the galaxy. Because their habitable zones lie extremely close (typically < 0.2 AU), planets are prone to tidal locking, meaning one side permanently faces the star. Additionally, active M-dwarfs produce high-energy stellar winds and flares that can strip planetary atmospheres.',
    },
    {
      type: 'title',
      text: 'Critical Factors in Planetary Habitable Environments',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A planet\'s physical environment is shaped by multiple variables beyond just distance from its host star:',
    },
    {
      type: 'list',
      items: [
        '<strong>Atmospheric Greenhouse Effect:</strong> Natural greenhouse gases raise the surface temperature above the blackbody equilibrium level. Terrestrial planets require carbon-silicate cycles to stabilize atmospheric CO2 and regulate temperatures over geological timescales.',
        '<strong>Planetary Bond Albedo:</strong> High reflectivity (due to clouds, ice caps, or sulfate aerosols) cools the planet, whereas low reflectivity (dark soils, water bodies) traps more stellar energy.',
        '<strong>Magnetic Fields:</strong> A strong planetary magnetosphere shields the atmosphere from solar and stellar winds, preventing non-thermal atmospheric escape and water loss.',
        '<strong>Water-Trap Dynamics:</strong> The cold-trap effect in the upper atmosphere prevents water vapor from reaching high altitudes where solar UV radiation would dissociate it into hydrogen and oxygen.',
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
