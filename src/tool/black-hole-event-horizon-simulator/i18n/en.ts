import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'black-hole-event-horizon-simulator';
const title = 'Black Hole Event Horizon Simulator';
const description = 'Explore a black hole event horizon with interactive mass, orbit distance, time dilation, photon sphere, escape velocity, and Schwarzschild radius calculations.';

const howTo = [
  {
    name: 'Choose the black hole mass',
    text: 'Move the mass slider from a stellar mass black hole to a supermassive black hole and watch the Schwarzschild radius scale in real time.',
  },
  {
    name: 'Move the probe near the horizon',
    text: 'Set the distance in Schwarzschild radii to compare a safer outside orbit, the photon sphere region, and the edge of the event horizon.',
  },
  {
    name: 'Inspect relativistic effects',
    text: 'Read the escape velocity, gravitational time dilation, redshift, and orbital period to see why ordinary intuition breaks down close to the horizon.',
  },
  {
    name: 'Compare named radii',
    text: 'Use the event horizon, photon sphere, and ISCO guide rings to understand the different boundaries around a non rotating black hole.',
  },
];

const faq = [
  {
    question: 'What is the event horizon of a black hole?',
    answer: 'The event horizon is the boundary where escape velocity reaches the speed of light. Once an object crosses it, no signal moving at or below light speed can return to the outside universe.',
  },
  {
    question: 'What does the Schwarzschild radius mean?',
    answer: 'The Schwarzschild radius is the event horizon radius for a non rotating, uncharged black hole. It grows linearly with mass, so doubling the mass doubles the horizon radius.',
  },
  {
    question: 'What is the photon sphere?',
    answer: 'The photon sphere is a region at 1.5 Schwarzschild radii where light can orbit the black hole in an unstable path. Tiny disturbances make photons either escape outward or fall inward.',
  },
  {
    question: 'What is the ISCO?',
    answer: 'ISCO means innermost stable circular orbit. For a non rotating black hole it lies at 3 Schwarzschild radii, or 6 gravitational radii, and marks the last stable circular orbit for massive particles.',
  },
  {
    question: 'Why does time dilation increase near the horizon?',
    answer: 'In Schwarzschild geometry, clocks deeper in the gravitational field tick slower relative to distant observers. The displayed factor approaches zero as the probe approaches the event horizon.',
  },
  {
    question: 'Can this simulator model a rotating black hole?',
    answer: 'No. It uses the Schwarzschild solution, which assumes no spin and no electric charge. Real astrophysical black holes often rotate, and spin changes the horizon size, ISCO location, and disk behavior.',
  },
  {
    question: 'Why are supermassive black holes less tidally violent at the horizon?',
    answer: 'The tidal gradient at the horizon decreases as black hole mass increases. A small stellar mass black hole can stretch objects violently near the horizon, while a supermassive black hole can have a gentler local gradient at that boundary.',
  },
  {
    question: 'Does the visualization show a real black hole image?',
    answer: 'It is an educational diagram, not a ray traced observation. The rings and disk are scaled to the simplified Schwarzschild radii so the physical zones are easy to compare.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Event horizon field map',
    visualCaption: 'The probe moves through scaled Schwarzschild geometry. The bright guide rings mark the horizon, photon sphere, and innermost stable circular orbit.',
    controlsTitle: 'Black hole controls',
    eventHorizon: 'Event horizon',
    photonSphere: 'Photon sphere',
    isco: 'ISCO',
    rsLabel: 'Schwarzschild radius',
    diameterLabel: 'Diameter',
    timeLabel: 'Time dilation',
    redshiftLabel: 'Redshift',
    statusSafe: 'Outside stable orbit region',
    statusPhoton: 'Inside the photon sphere zone',
    statusInside: 'At the horizon limit',
    diameter: 'Horizon diameter',
    lightCrossing: 'Light crossing time',
    timeDilation: 'Clock rate vs far observer',
    redshift: 'Gravitational redshift',
    mass: 'Black hole mass',
    distance: 'Probe distance',
    speed: 'Probe orbital speed',
    escapeVelocity: 'Escape velocity',
    orbitalPeriod: 'Probe orbital period',
    tidalGradient: 'Tidal gradient',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'solar masses',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 solar masses',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Black hole event horizon simulator for Schwarzschild radius, photon sphere, and time dilation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This black hole event horizon simulator turns the core ideas of Schwarzschild black holes into an interactive visual model. Change the black hole mass, move a probe inward or outward, and compare how the event horizon, photon sphere, innermost stable circular orbit, escape velocity, gravitational redshift, and time dilation respond.',
    },
    {
      type: 'paragraph',
      html: 'The simulator is built for astronomy students, physics teachers, science writers, and curious learners who want more than a static formula. The display connects the numbers to a spatial diagram so you can see why the event horizon is not a material surface, why photons have a special unstable orbit, and why stable circular motion stops before the horizon is reached.',
    },
    {
      type: 'title',
      text: 'How the event horizon radius is calculated',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For a non rotating, uncharged black hole, the event horizon radius is the <strong>Schwarzschild radius</strong>. It is calculated as <strong>Rs = 2GM / c^2</strong>, where G is the gravitational constant, M is the black hole mass, and c is the speed of light. One solar mass corresponds to a Schwarzschild radius of about 2.95 kilometers.',
    },
    {
      type: 'paragraph',
      html: 'Because the Schwarzschild radius scales linearly with mass, a 10 solar mass black hole has a radius near 29.5 kilometers, while a 4 million solar mass black hole like Sagittarius A* has a radius of about 11.8 million kilometers. The mass slider uses a logarithmic scale so stellar mass and supermassive cases can fit in the same control.',
    },
    {
      type: 'table',
      headers: ['Region', 'Radius in Schwarzschild radii', 'What it means'],
      rows: [
        ['Event horizon', '1.0 Rs', 'The one way boundary where escape velocity equals light speed.'],
        ['Photon sphere', '1.5 Rs', 'The unstable circular orbit for light around a Schwarzschild black hole.'],
        ['ISCO', '3.0 Rs', 'The innermost stable circular orbit for massive particles.'],
        ['Weak field', '6 Rs and beyond', 'Gravity is still strong, but circular orbits are easier to sustain.'],
      ],
    },
    {
      type: 'title',
      text: 'Escape velocity and why the horizon is a causal boundary',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Escape velocity is the speed an object would need in order to reach arbitrarily far away without additional propulsion. In Newtonian language, the escape velocity at the Schwarzschild radius equals c. General relativity gives the deeper interpretation: the future light cones tip inward so that all future directed paths inside the horizon move toward smaller radius.',
    },
    {
      type: 'paragraph',
      html: 'The escape velocity readout is useful intuition, but it should not be read as a complete relativistic description. Near the horizon, space and time are curved strongly enough that global coordinates, local measurements, and what a distant observer sees are not interchangeable. That is exactly why a visual simulator helps separate the named radii and their meanings.',
    },
    {
      type: 'title',
      text: 'Time dilation and gravitational redshift near a black hole',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A clock held at a fixed radius outside a Schwarzschild black hole ticks slower compared with a far away observer. The simplified factor shown here is <strong>sqrt(1 - Rs / r)</strong>. At 3 Rs, the clock rate is about 0.82 of the distant rate. At 1.1 Rs, it drops to about 0.30, meaning the distant observer sees processes near that radius as strongly slowed.',
    },
    {
      type: 'paragraph',
      html: 'Gravitational redshift follows the same geometry. Light climbing out of the gravitational well loses energy, so its wavelength stretches. The displayed redshift grows rapidly close to the horizon, which is one reason accretion disks and near horizon emission require relativistic modeling rather than ordinary orbital mechanics.',
    },
    {
      type: 'title',
      text: 'Photon sphere and ISCO explained',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The photon sphere at 1.5 Rs is where light can, in principle, follow a circular orbit around a Schwarzschild black hole. The orbit is unstable: a tiny outward perturbation lets the photon escape, and a tiny inward perturbation sends it toward the horizon. This region shapes strong gravitational lensing and contributes to the bright ring structure seen in black hole images.',
    },
    {
      type: 'paragraph',
      html: 'The ISCO at 3 Rs is the innermost stable circular orbit for massive particles around a non rotating black hole. Inside the ISCO, circular orbits require idealized conditions and are not stable against small disturbances. In accretion disk theory, the ISCO helps set the inner edge of the brightest disk emission for simple black hole models.',
    },
    {
      type: 'title',
      text: 'Stellar mass vs supermassive black holes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A surprising lesson is that bigger black holes can feel less destructive at the horizon. The radius grows in direct proportion to mass, but the tidal gradient near the horizon decreases for larger mass. A stellar mass black hole can produce extreme stretching over human sized distances near the horizon. A supermassive black hole can have a horizon so large that the local tidal gradient at the crossing is much smaller.',
    },
    {
      type: 'paragraph',
      html: 'The simulator includes a tidal gradient readout in Earth gravities per meter. It is a simplified radial gradient estimate, but it helps show why the phrase "spaghettification at the horizon" depends strongly on mass. The event horizon is a causal boundary, not always the place where tidal forces first become fatal.',
    },
    {
      type: 'title',
      text: 'Limitations of this black hole simulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>No spin:</strong> the tool uses Schwarzschild geometry. A Kerr black hole has frame dragging, an ergosphere, and spin dependent ISCO radii.',
        '<strong>No accretion physics:</strong> the glowing disk is a guide layer, not a plasma simulation with temperature, opacity, magnetic fields, or Doppler beaming.',
        '<strong>No ray tracing:</strong> the diagram is scaled for learning. It does not render the exact lensing pattern a camera would observe near the black hole.',
        '<strong>No infalling coordinate view:</strong> the time dilation factor describes a stationary clock outside the horizon as compared with a far observer. Free fall experiences the geometry differently.',
      ],
    },
    {
      type: 'title',
      text: 'Useful classroom experiments',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Scale the Milky Way center:</strong> set the mass near 4 million solar masses and compare the horizon diameter with planetary orbit scales.',
        '<strong>Find the photon sphere:</strong> move the distance slider to 1.5 Rs and note how close it is to the event horizon compared with the ISCO at 3 Rs.',
        '<strong>Compare tidal gradients:</strong> set 10 solar masses, then 1 billion solar masses, while keeping the probe near 1.1 Rs. The horizon radius grows enormously while the local tidal gradient falls.',
        '<strong>Track clock slowing:</strong> move from 10 Rs toward 1.02 Rs and watch the time dilation factor approach zero.',
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
