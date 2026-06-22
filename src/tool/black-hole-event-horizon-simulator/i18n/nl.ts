import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'zwart-gat-gebeurtenishorizon-simulator';
const title = 'Zwart Gat Gebeurtenishorizon Simulator';
const description = 'Verken de gebeurtenishorizon van een zwart gat met interactieve berekeningen van massa, baanafstand, tijddilatatie, fotonenbol, ontsnappingssnelheid en Schwarzschild-straal.';

const howTo = [
  {
    name: 'Kies de massa van het zwarte gat',
    text: 'Beweeg de massaschuif van een stellair zwart gat naar een superzwaar zwart gat en zie hoe de Schwarzschild-straal in realtime schaalt.',
  },
  {
    name: 'Breng de sonde naar de horizon',
    text: 'Stel de afstand in Schwarzschild-stralen in om een veilige buitenbaan, het fotonenbol-gebied en de rand van de gebeurtenishorizon te vergelijken.',
  },
  {
    name: 'Inspecteer relativistische effecten',
    text: 'Lees de ontsnappingssnelheid, gravitationele tijddilatatie, roodverschuiving en omlooptijd af om te begrijpen waarom gewone intuïtie nabij de horizon tekortschiet.',
  },
  {
    name: 'Vergelijk de karakteristieke stralen',
    text: 'Gebruik de geleideringen voor de gebeurtenishorizon, fotonenbol en ISCO om de verschillende grenzen rond een niet-roterend zwart gat te begrijpen.',
  },
];

const faq = [
  {
    question: 'Wat is de gebeurtenishorizon van een zwart gat?',
    answer: 'De gebeurtenishorizon is de grens waar de ontsnappingssnelheid de lichtsnelheid bereikt. Zodra een object deze overschrijdt, kan geen enkel signaal dat met of onder de lichtsnelheid beweegt, terugkeren naar het buitenuniversum.',
  },
  {
    question: 'Wat betekent de Schwarzschild-straal?',
    answer: 'De Schwarzschild-straal is de straal van de gebeurtenishorizon voor een niet-roterend, ongeladen zwart gat. Deze groeit lineair met de massa, dus verdubbeling van de massa verdubbelt de horizonstraal.',
  },
  {
    question: 'Wat is de fotonenbol?',
    answer: 'De fotonenbol is een gebied op 1,5 Schwarzschild-straal waar licht in een onstabiele baan om het zwarte gat kan cirkelen. Kleine verstoringen zorgen ervoor dat fotonen naar buiten ontsnappen of naar binnen vallen.',
  },
  {
    question: 'Wat is de ISCO?',
    answer: 'ISCO staat voor de binnenste stabiele cirkelbaan (Innermost Stable Circular Orbit). Voor een niet-roterend zwart gat ligt deze op 3 Schwarzschild-stralen (of 6 gravitationele stralen) en markeert de laatste stabiele cirkelbaan voor massieve deeltjes.',
  },
  {
    question: 'Waarom neemt tijddilatatie toe nabij de horizon?',
    answer: 'In de Schwarzschild-meetkunde tikken klokken dieper in het gravitatieveld langzamer ten opzichte van verre waarnemers. De weergegeven factor nadert nul naarmate de sonde de gebeurtenishorizon nadert.',
  },
  {
    question: 'Kan deze simulator een roterend zwart gat modelleren?',
    answer: 'Nee. Deze gebruikt de Schwarzschild-oplossing, die uitgaat van geen spin en geen elektrische lading. Echte astrofysische zwarte gaten roteren vaak, wat de horizonafmetingen, ISCO-locatie en het schijfgedrag verandert.',
  },
  {
    question: 'Waarom zijn superzware zwarte gaten minder "gewelddadig" aan de horizon?',
    answer: 'De getijdengradiënt aan de horizon neemt af naarmate de massa van het zwarte gat toeneemt. Een klein stellair zwart gat kan objecten hevig uitrekken nabij de horizon, terwijl een superzwaar zwart gat een zachtere lokale gradiënt aan die grens kan hebben.',
  },
  {
    question: 'Toont de visualisatie een echt beeld van een zwart gat?',
    answer: 'Het is een educatief diagram, geen ray-traced observatie. De ringen en de schijf zijn geschaald naar de vereenvoudigde Schwarzschild-stralen zodat de fysieke zones gemakkelijk te vergelijken zijn.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Gebeurtenishorizon veldkaart',
    visualCaption: 'De sonde beweegt door de geschaalde Schwarzschild-meetkunde. De felle geleideringen markeren de horizon, de fotonenbol en de binnenste stabiele cirkelbaan.',
    controlsTitle: 'Zwart gat bediening',
    eventHorizon: 'Gebeurtenishorizon',
    photonSphere: 'Fotonenbol',
    isco: 'ISCO',
    rsLabel: 'Schwarzschild-straal',
    diameterLabel: 'Diameter',
    timeLabel: 'Tijddilatatie',
    redshiftLabel: 'Roodverschuiving',
    statusSafe: 'Buiten stabiel baangebied',
    statusPhoton: 'Binnen de fotonenbol-zone',
    statusInside: 'Aan de horizonlimiet',
    diameter: 'Horizondiameter',
    lightCrossing: 'Lichtoversteektijd',
    timeDilation: 'Kloksnelheid vs. verre waarnemer',
    redshift: 'Gravitationele roodverschuiving',
    mass: 'Massa van het zwarte gat',
    distance: 'Afstand van de sonde',
    speed: 'Baansnelheid van de sonde',
    escapeVelocity: 'Ontsnappingssnelheid',
    orbitalPeriod: 'Omlooptijd van de sonde',
    tidalGradient: 'Getijdengradiënt',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'zonnemassa',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 zonnemassa',
    initialDistanceOutput: '3,0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Zwart gat gebeurtenishorizon simulator voor Schwarzschild-straal, fotonenbol en tijddilatatie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze simulator voor de gebeurtenishorizon van een zwart gat zet de kernconcepten van Schwarzschild-zwarte gaten om in een interactief visueel model. Verander de massa, verplaats een sonde en vergelijk hoe de gebeurtenishorizon, fotonenbol, ISCO, ontsnappingssnelheid, gravitationele roodverschuiving en tijddilatatie reageren.',
    },
    {
      type: 'paragraph',
      html: 'De simulator is gebouwd voor astronomiestudenten, natuurkundedocenten, wetenschapsjournalisten en nieuwsgierige leerlingen die meer willen dan een statische formule. Het display verbindt getallen met een ruimtelijk diagram, zodat u kunt zien waarom de gebeurtenishorizon geen materieel oppervlak is, waarom fotonen een speciale onstabiele baan hebben en waarom stabiele cirkelbeweging stopt voordat de horizon wordt bereikt.',
    },
    {
      type: 'title',
      text: 'Hoe de Schwarzschild-straal wordt berekend',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voor een niet-roterend, ongeladen zwart gat is de gebeurtenishorizon-straal de <strong>Schwarzschild-straal</strong>. Deze wordt berekend als <strong>Rs = 2GM / c^2</strong>, waarbij G de gravitatieconstante is, M de massa van het zwarte gat en c de lichtsnelheid. Eén zonnemassa komt overeen met een Schwarzschild-straal van ongeveer 2,95 kilometer.',
    },
    {
      type: 'paragraph',
      html: 'Omdat de Schwarzschild-straal lineair schaalt met de massa, heeft een zwart gat van 10 zonnemassa een straal van ongeveer 29,5 kilometer, terwijl een zwart gat van 4 miljoen zonnemassa zoals Sagittarius A* een straal heeft van ongeveer 11,8 miljoen kilometer. De massaschuif gebruikt een logaritmische schaal, zodat zowel stellaire als superzware zwarte gaten met dezelfde bediening kunnen worden verkend.',
    },
    {
      type: 'table',
      headers: ['Gebied', 'Straal in Schwarzschild-stralen', 'Betekenis'],
      rows: [
        ['Gebeurtenishorizon', '1,0 Rs', 'De eenrichtingsgrens waar ontsnappingssnelheid gelijk is aan lichtsnelheid.'],
        ['Fotonenbol', '1,5 Rs', 'De onstabiele cirkelbaan voor licht rond een Schwarzschild-zwart gat.'],
        ['ISCO', '3,0 Rs', 'De binnenste stabiele cirkelbaan voor massieve deeltjes.'],
        ['Zwak veld', '6 Rs en verder', 'De zwaartekracht is nog sterk, maar cirkelbanen zijn gemakkelijker te handhaven.'],
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