import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'conway-game-of-life-regellab';
const title = 'Conway Game of Life Regellab';
const description = 'Speel, bewerk en vergelijk Conway-achtige cellulaire automaten met B/S-regels, patroonzaad, live-metingen en een responsief simulatiebord.';

const howTo = [
  {
    name: 'Het bord inzaaien',
    text: 'Kies een patroon zoals een glider, pulsar of het Gosper-kanon, plaats het op het raster of genereer een willekeurige populatie.',
  },
  {
    name: 'De simulatie starten',
    text: 'Gebruik de bedieningselementen voor afspelen, pauzeren, stap en tempo om te zien hoe geboortes, sterftes, dichtheid en stabiliteit zich ontwikkelen.',
  },
  {
    name: 'De regel wijzigen',
    text: 'Wissel tussen presets of typ een B/S-regel zoals B3/S23, B36/S23 of B3678/S34678 om verschillende automaten te vergelijken.',
  },
];

const faq = [
  {
    question: 'Wat is B/S-notatie in Game of Life?',
    answer: 'B/S-notatie geeft de aantallen buren aan die een nieuwe levende cel creëren en de aantallen die een bestaande levende cel laten overleven. Conway Life is B3/S23: dode cellen worden geboren met precies drie buren, en levende cellen overleven met twee of drie buren.',
  },
  {
    question: 'Waarom heet dit een regellab in plaats van alleen een simulator?',
    answer: 'De klassieke Conway-regel is inbegrepen, maar de simulator is gebouwd om families van Life-achtige cellulaire automaten te vergelijken. Het bewerken van de geboorte- en overlevingsaantallen verandert het langetermijngedrag, waardoor replicatoren, golven, bevroren eilanden, chaotische groei of uitsterving ontstaat.',
  },
  {
    question: 'Wat betekent stabiliteit in de simulator?',
    answer: 'Stabiliteit schat hoe sterk de kolonie veranderde tijdens de laatste generatie. Hoge stabiliteit betekent weinig cellen geboren of gestorven ten opzichte van de populatie; lage stabiliteit betekent dat het bord turbulent is of snel reorganiseert.',
  },
  {
    question: 'Heeft het bord randen?',
    answer: 'De simulatie gebruikt toroidale omwikkeling: de linkerrand verbindt met de rechterrand en boven verbindt met onder. Dit zorgt ervoor dat patronen natuurlijk blijven bewegen zonder te verdwijnen bij harde grenzen.',
  },
  {
    question: 'Kan ik mijn eigen startpatroon tekenen?',
    answer: 'Ja. Pauzeer de simulatie en klik of tik op cellen op het bord om ze te wisselen. Je kunt handgetekende cellen combineren met ingebouwde patronen en het resultaat dan uitvoeren onder elke regelpreset.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Bord voor Life-achtige cellulaire automaten',
    play: 'Afspelen',
    pause: 'Pauze',
    step: 'Stap',
    clear: 'Leeg canvas',
    randomize: 'Willekeurig',
    ruleLabel: 'Regelnotatie',
    ruleHelp: 'Geboorte / overleving',
    speedLabel: 'Tempo',
    densityLabel: 'Startdichtheid',
    patternLabel: 'Patroon',
    placePattern: 'Patroon plaatsen',
    generation: 'Generatie',
    population: 'Populatie',
    density: 'Dichtheid',
    stability: 'Stabiliteit',
    births: 'Geboortes',
    deaths: 'Sterftes',
    achievementsLabel: 'Laboratoriumlog',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Oscillatie met periode 2 gedetecteerd',
    achievementImmortal: 'Onsterfelijk',
    achievementImmortalDescription: 'Generatie 500 bereikt met volledige stabiliteit',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Een schaarse willekeurige seed overschreed 1.000 levende cellen',
    presetClassic: 'Conway klassiek',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Dag & nacht',
    patternGlider: 'Glider',
    patternGosper: 'Gosper-kanon',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentomino',
    colonyStatus: 'Koloniesignaal',
    statusFrozen: 'stabiel',
    statusGrowing: 'groeiend',
    statusFading: 'afnemend',
    statusChaotic: 'volatiel',
    invalidRule: 'Gebruik B/S-notatie zoals B3/S23.',
  },
  seo: [
    { type: 'title', text: 'Conway Game of Life Simulator met bewerkbare regels', level: 2 },
    { type: 'paragraph', html: 'Dit regellab laat je het klassieke cellulaire automaton uitvoeren en zijn regels bewust veranderen en vergelijken. Het bord ondersteunt direct tekenen, patroonplaatsing, willekeurige zaden, stapsgewijze inspectie, variabel tempo en live-metingen voor populatie, dichtheid, geboortes, sterftes en stabiliteit.' },
    { type: 'title', text: 'Hoe B/S-regels het spel veranderen', level: 3 },
    { type: 'paragraph', html: 'Life-achtige cellulaire automaten worden vaak geschreven in <strong>B/S-notatie</strong>. De B-kant definieert hoeveel levende buren een dode cel nodig heeft om geboren te worden; de S-kant definieert hoeveel buren een levende cel nodig heeft om te overleven. Conways originele regel, <strong>B3/S23</strong>, is beroemd omdat het in een smal gebied ligt tussen uitsterven en ongecontroleerde groei.' },
    { type: 'title', text: 'De live-metingen lezen', level: 3 },
    { type: 'paragraph', html: 'Populatie en dichtheid tonen hoeveel cellen er leven, maar vertellen niet het volledige verhaal. Geboortes en sterftes onthullen het huidige activiteitsniveau, terwijl stabiliteit schat of de kolonie zich stabiliseert in een oscillator, bevriest tot stillevens, of turbulent blijft.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
