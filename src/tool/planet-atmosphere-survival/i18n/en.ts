import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-atmosphere-survival-calculator';
const title = 'Planet Atmosphere Survival Calculator';
const description = 'How long can you survive without a spacesuit on Mars, Venus, Titan, Jupiter, or Everest? This interactive calculator estimates unprotected human survival time from pressure, temperature, oxygen, carbon dioxide, toxicity, and wind hazards.';

const howTo = [
  {
    name: 'Pick a destination to load real atmosphere data',
    text: 'Select Mars, Venus, Titan, Jupiter, or the Everest summit preset to instantly set realistic pressure, temperature, gas mix, and wind values for that environment.',
  },
  {
    name: 'Tweak conditions to explore the tipping point',
    text: 'Move pressure, temperature, oxygen, and carbon dioxide sliders to see which hazard turns lethal first. Small changes can shift the limiting factor completely.',
  },
  {
    name: 'Read the survival clock and the weakest link',
    text: 'The timer shows the estimated time before severe biological stress. The limiting factor label tells you exactly which hazard is the most urgent threat right now.',
  },
  {
    name: 'Compare hazards visually on the risk map',
    text: 'The radial spokes and timeline chart show how pressure, heat, cold, hypoxia, toxicity, and wind each contribute to the total risk over time.',
  },
];

const faq = [
  {
    question: 'Can a human survive on Mars without a spacesuit?',
    answer: 'No. Mars has extremely low pressure (less than 1% of Earths), almost no breathable oxygen, and a mostly carbon dioxide atmosphere. Loss of consciousness would occur in seconds and severe injury within minutes without pressure and oxygen support.',
  },
  {
    question: 'Why is atmospheric pressure so critical for human survival?',
    answer: 'Below the Armstrong limit (roughly 6.3 kPa), water can boil at body temperature. Low pressure also prevents oxygen from entering the bloodstream even if the air is 100% oxygen. That is why pressure is one of the fastest lethal hazards.',
  },
  {
    question: 'Which planet has the most survivable atmosphere?',
    answer: 'Among Solar System destinations, high-altitude Earth (Everest) is the most survivable, though still dangerous without acclimatization. Titan is the least hostile of the other options because its pressure is manageable, but it lacks oxygen and is cryogenically cold. No planet or moon besides Earth has a breathable atmosphere.',
  },
  {
    question: 'Is Venus worse because of heat or pressure?',
    answer: 'Both are extreme at the surface. Venus has crushing pressure (92 times Earths) and a surface temperature hotter than a kitchen oven. These hazards act together so the tool flags both as immediate dominant threats.',
  },
  {
    question: 'Why does Titan have a longer survival estimate than Mars?',
    answer: 'Titan has a dense atmosphere, so pressure itself is not an immediate problem. The survival time is limited by extreme cold (around -180°C) and the complete lack of oxygen. Mars fails on pressure first, Titan fails on temperature.',
  },
  {
    question: 'What are the main causes of death in space without a suit?',
    answer: 'The fastest killers are vacuum exposure (pressure loss causing ebullism and hypoxia within seconds), followed by extreme temperature, toxic gas composition, and wind-driven heat loss. The calculator tracks all six hazard categories.',
  },
  {
    question: 'Is this tool suitable for space mission planning?',
    answer: 'No. It is an educational model that uses simplified biological thresholds. Real decompression, hypoxia, toxic gas, thermal injury, and mission risk analysis require expert medical and engineering evaluation for safety.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Atmospheric risk map',
    timeline: 'Biological risk timeline',
    controls: 'Atmosphere controls',
    destination: 'Destination',
    pressure: 'Pressure',
    temperature: 'Temperature',
    oxygen: 'Oxygen',
    co2: 'Carbon dioxide',
    limitingFactor: 'Limiting factor',
    verdict: 'Verdict',
    exposureSummary: 'Exposure summary',
    atmosphericModel: 'Atmospheric exposure model',
    survivalEnvelope: 'survival envelope',
    survival: 'Survival',
    mode: 'Mode',
    metric: 'Metric',
    imperial: 'Imperial',
    unitSystem: 'Unit system',
    vitalStress: 'vital stress',
    timeLabel: 'time',
    estimatedSurvival: 'estimated survival',
    hazardPressure: 'Pressure',
    hazardTemperature: 'Temperature',
    hazardOxygen: 'Oxygen',
    hazardToxicity: 'Toxicity',
    hazardWind: 'Wind',
    presetMars: 'Mars',
    presetVenus: 'Venus surface',
    presetTitan: 'Titan',
    presetJupiter: 'Jupiter cloud deck',
    presetEverest: 'Earth, Everest summit',
    noteMars: 'Near vacuum, extreme cold, and almost no breathable oxygen.',
    noteVenus: 'Crushing pressure and oven-like heat dominate immediately.',
    noteTitan: 'Dense nitrogen air but lethal cold and no oxygen.',
    noteJupiter: 'Hydrogen-rich atmosphere, severe cold, and violent winds.',
    noteEverest: 'Survivable for trained climbers, but hypoxia and cold are serious.',
    verdictSeconds: 'Seconds',
    verdictMinutes: 'Minutes',
    verdictHours: 'Hours',
    verdictExtended: 'Extended exposure risk',
  },
  seo: [
    {
      type: 'title',
      text: 'Planet Atmosphere Survival Calculator: How Long Can You Survive Without a Spacesuit on Mars, Venus, Titan, or Jupiter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'If you were suddenly exposed to another planets atmosphere without a spacesuit, how long would you survive? This calculator estimates unprotected human survival time on Mars, Venus, Titan, Jupiter, and Everest by simulating six hazards: total pressure, oxygen availability, temperature, carbon dioxide concentration, toxic chemistry, and wind stress. It answers the questions that space enthusiasts and students ask most: which planet kills you fastest, which hazard is the real threat, and what would you need to survive.',
    },
    {
      type: 'paragraph',
      html: 'The result is an educational estimate, not a mission planning number. It is designed to help compare why different worlds are dangerous in very different ways. Mars fails on pressure and hypoxia within seconds. Venus combines crushing pressure with oven heat. Titan is cryogenic and has no oxygen. Gas giant cloud decks add toxic compositions and supersonic winds. Each environment teaches something different about what makes Earth uniquely habitable.',
    },
    {
      type: 'title',
      text: 'Which Planet Has the Most Survivable Atmosphere?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Among the destinations in this calculator, Earths high-altitude environments (like the Everest summit) are the most survivable, though still dangerous without preparation. Among other planets, Titan has the most forgiving pressure but fails on temperature and oxygen. No destination besides Earth currently offers a breathable atmosphere. The calculator helps you see exactly why each world fails and which hazard crosses the critical threshold first.',
    },
    {
      type: 'title',
      text: 'How Each Hazard Affects the Body',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pressure (low):</strong> below 6.3 kPa body fluids can boil (ebullism). Even above that, low pressure prevents oxygen absorption. This is the fastest killer in near-vacuum environments.',
        '<strong>Pressure (high):</strong> extreme pressure compresses breathing gases, increases nitrogen narcosis risk, and can mechanically damage lungs and sinuses.',
        '<strong>Oxygen partial pressure:</strong> breathable oxygen depends on both the gas percentage and total pressure. A thin atmosphere can have 21% oxygen yet still cause hypoxia.',
        '<strong>Temperature (heat):</strong> above roughly 60°C protein denaturation and organ failure begin rapidly. Venus surface temperature exceeds 460°C.',
        '<strong>Temperature (cold):</strong> below freezing, frostbite and hypothermia set in. At cryogenic temperatures like Titans -180°C, tissue freezing is almost immediate.',
        '<strong>Carbon dioxide toxicity:</strong> CO2 above roughly 5% causes dizziness, headache, and loss of consciousness. Many planetary atmospheres are mostly CO2.',
        '<strong>Toxic chemistry:</strong> sulfur compounds, ammonia, methane, and hydrogen can be corrosive, asphyxiating, or chemically hazardous.',
        '<strong>Wind:</strong> high winds accelerate heat loss through convection, cause wind chill, blast debris, and can physically destabilize a person.',
      ],
    },
    {
      type: 'title',
      text: 'Mars: Why Low Pressure Kills Before Anything Else',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mars has a surface pressure of roughly 0.6 kPa, far below the Armstrong limit of 6.3 kPa where water can boil at body temperature. Unprotected exposure would cause ebullism, rapid hypoxia, and loss of consciousness in under 15 seconds. Even if the cold (average -60°C) and carbon-dioxide-rich atmosphere are factored in, pressure and oxygen deprivation dominate the timeline. A functional pressure garment and oxygen supply are the absolute minimum for survival on Mars.',
    },
    {
      type: 'title',
      text: 'Venus: Extreme Pressure and Heat Acting Together',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The surface of Venus has a pressure of 92 Earth atmospheres (roughly 9.3 MPa, equivalent to being 900 meters underwater) and a surface temperature of 462°C. The atmosphere is 96% carbon dioxide with clouds of sulfuric acid. These hazards act simultaneously rather than sequentially: pressure crushes, heat cooks, and CO2 poisons. In this calculator, Venus is the only destination where multiple hazards cross the lethal threshold at nearly the same instant.',
    },
    {
      type: 'title',
      text: 'Titan: The Friendliest Pressure in the Solar System Outside Earth',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturns moon Titan is unusual because its surface pressure (about 147 kPa, or 1.45 times Earths) is actually within a range a human could tolerate. No pressure suit would be needed for that variable alone. However, Titan has essentially no oxygen, a surface temperature of -179°C, and a methane-nitrogen atmosphere. The calculator shows pressure as manageable, but temperature and oxygen deprivation dominate immediately. Titan is a reminder that survival depends on the whole hazard profile, not just one measurement.',
    },
    {
      type: 'title',
      text: 'How to Interpret the Survival Timer and Risk Map',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The survival timer estimates the interval before severe biological stress occurs in an unprotected person. The limiting factor label identifies which hazard crosses the critical threshold first. The radial hazard spokes show the relative severity of each of the six tracked hazards, and the timeline graph displays how combined risk accumulates over the exposure window. These visual tools help you see at a glance why a given environment is dangerous and which protective system would matter most.',
    },
    {
      type: 'table',
      headers: ['Destination', 'Killer hazards', 'Fastest threat', 'What a suit must fix'],
      rows: [
        ['Mars', 'Near-vacuum, hypoxia, cold, CO2', 'Pressure < Armstrong limit', 'Pressure garment, oxygen, thermal insulation'],
        ['Venus surface', 'Crushing pressure, 462°C heat, CO2, sulfuric acid', 'Pressure and heat simultaneously', 'Heavy cooling, pressure hull, breathing apparatus'],
        ['Titan', 'No oxygen, -179°C cold, methane', 'Temperature and hypoxia', 'Oxygen supply, extreme thermal protection'],
        ['Jupiter cloud deck', 'No oxygen, hydrogen-rich, cold, high wind', 'Hypoxia and lack of breathable gas', 'Sealed breathing system, thermal control'],
        ['Everest summit', 'Hypoxia, cold, wind', 'Oxygen partial pressure too low', 'Oxygen mask, cold weather gear, acclimatization'],
      ],
    },
    {
      type: 'title',
      text: 'What Would It Take to Survive Without a Spacesuit?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realistically, no known Solar System body besides Earth allows unprotected human survival for more than a few minutes, and most kill within seconds. The value of this calculator is not in finding a safe planet, but in understanding the specific reasons each environment is hostile. This knowledge guides planetary science education, space habitat design, astronaut training priorities, and the search for potentially habitable exoplanets where an atmosphere might actually support life.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use it for learning:</strong> see how changing one variable, like doubling pressure on Mars, changes the survival window.',
        '<strong>Use it for comparison:</strong> contrast why Titan gives more time than Venus despite both being unsurvivable.',
        '<strong>Use it for discussion:</strong> explore what a terraformed atmosphere would need to reach breathable conditions.',
        '<strong>Do not use it for real decisions:</strong> the calculator uses simplified thresholds. Emergency planning requires professional aerospace medicine.',
      ],
    },
    {
      type: 'title',
      text: 'Important Limitations and Educational Purpose',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Real survival depends on individual health, clothing, exertion level, humidity, solar radiation, decompression history, breathing gas mixture, rescue timing, and many other variables. Planetary atmosphere data also varies by altitude, season, and measurement source. This tool uses simplified biological thresholds and representative environmental data for science education. It is designed to help students, teachers, space enthusiasts, and science writers understand planetary habitability, not to guide actual space operations.',
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
