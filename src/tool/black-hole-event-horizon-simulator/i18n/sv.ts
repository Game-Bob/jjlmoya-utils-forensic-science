import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'svart-hal-handelsehorisont-simulator';
const title = 'Simulator för svarta håls händelsehorisont: Schwarzschildradie, fotonsfär och tidsdilatation';
const description = 'Utforska händelsehorisonten för ett svart hål med interaktiva beräkningar av massa, omloppsavstånd, tidsdilatation, fotonsfär, flykthastighet och Schwarzschildradie.';

const howTo = [
  {
    name: 'Välj den svarta hålets massa',
    text: 'Flytta massreglaget från ett stjärnmassigt svart hål till ett supermassivt svart hål och se hur Schwarzschildradien skalar i realtid.',
  },
  {
    name: 'För sonden nära horisonten',
    text: 'Ställ in avståndet i Schwarzschildradier för att jämföra en säker yttre omloppsbana, fotonsfärsområdet och kanten av händelsehorisonten.',
  },
  {
    name: 'Inspektera relativistiska effekter',
    text: 'Läs av flykthastighet, gravitationell tidsdilatation, rödförskjutning och omloppstid för att förstå varför vanlig intuition bryter samman nära horisonten.',
  },
  {
    name: 'Jämför namngivna radier',
    text: 'Använd vägledande ringar för händelsehorisont, fotonsfär och ISCO för att förstå de olika gränserna kring ett icke-roterande svart hål.',
  },
];

const faq = [
  {
    question: 'Vad är händelsehorisonten för ett svart hål?',
    answer: 'Händelsehorisonten är gränsen där flykthastigheten når ljushastigheten. När ett objekt väl passerat den kan ingen signal som rör sig med eller under ljushastigheten återvända till det yttre universumet.',
  },
  {
    question: 'Vad betyder Schwarzschildradien?',
    answer: 'Schwarzschildradien är händelsehorisontens radie för ett icke-roterande, oladdat svart hål. Den växer linjärt med massan, så att dubbla massan dubblar horisontradien.',
  },
  {
    question: 'Vad är fotonsfären?',
    answer: 'Fotonsfären är ett område vid 1,5 Schwarzschildradier där ljus kan kretsa kring det svarta hålet i en instabil bana. Små störningar får fotoner att antingen fly utåt eller falla inåt.',
  },
  {
    question: 'Vad är ISCO?',
    answer: 'ISCO står för "Innermost Stable Circular Orbit" (innersta stabila cirkulära omloppsbana). För ett icke-roterande svart hål ligger den vid 3 Schwarzschildradier (eller 6 gravitationsradier) och markerar den sista stabila omloppsbanan för massiva partiklar.',
  },
  {
    question: 'Varför ökar tidsdilatationen nära horisonten?',
    answer: 'I Schwarzschild-geometrin går klockor djupare i gravitationsfältet långsammare i förhållande till avlägsna betraktare. Den visade faktorn närmar sig noll allteftersom sonden närmar sig händelsehorisonten.',
  },
  {
    question: 'Kan den här simulatorn modellera ett roterande svart hål?',
    answer: 'Nej. Den använder Schwarzschild-lösningen, som förutsätter ingen rotation och ingen elektrisk laddning. Verkliga astrofysiska svarta hål roterar ofta, och rotationen ändrar horisontstorleken, ISCO-positionen och skivans beteende.',
  },
  {
    question: 'Varför är supermassiva svarta hål mindre "tidvattensvåldsamma" vid horisonten?',
    answer: 'Tidvattensgradienten vid horisonten minskar när massan hos det svarta hålet ökar. Ett litet stjärnmassigt svart hål kan sträcka ut objekt våldsamt nära horisonten, medan ett supermassivt svart hål kan ha en skonsammare lokal gradient vid den gränsen.',
  },
  {
    question: 'Visar visualiseringen en riktig bild av ett svart hål?',
    answer: 'Det är ett pedagogiskt diagram, inte en avbildning med strålkastning (ray-tracing). Ringarna och skivan är skalade till de förenklade Schwarzschildradierna så att de fysikaliska zonerna är lätta att jämföra.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Händelsehorisontens fältkarta',
    visualCaption: 'Sonden rör sig genom skalad Schwarzschild-geometri. De ljusa vägledande ringarna markerar horisonten, fotonsfären och den innersta stabila cirkulära omloppsbanan.',
    controlsTitle: 'Kontroller för svart hål',
    eventHorizon: 'Händelsehorisont',
    photonSphere: 'Fotonsfär',
    isco: 'ISCO',
    rsLabel: 'Schwarzschildradie',
    diameterLabel: 'Diameter',
    timeLabel: 'Tidsdilatation',
    redshiftLabel: 'Rödförskjutning',
    statusSafe: 'Utanför stabilt omloppsområde',
    statusPhoton: 'Inne i fotonsfärens zon',
    statusInside: 'Vid horisontgränsen',
    diameter: 'Horisontdiameter',
    lightCrossing: 'Ljuskorsningstid',
    timeDilation: 'Klockhastighet vs. avlägsen betraktare',
    redshift: 'Gravitationell rödförskjutning',
    mass: 'Svart håls massa',
    distance: 'Sondens avstånd',
    speed: 'Sondens omloppshastighet',
    escapeVelocity: 'Flykthastighet',
    orbitalPeriod: 'Sondens omloppstid',
    tidalGradient: 'Tidvattensgradient',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'solmassor',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 solmassor',
    initialDistanceOutput: '3,0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator för svarta håls händelsehorisont: Schwarzschildradie, fotonsfär och tidsdilatation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den här simulatorn för svarta håls händelsehorisont förvandlar kärnidéerna bakom Schwarzschilds svarta hål till en interaktiv visuell modell. Ändra massan, flytta en sond inåt eller utåt och jämför hur händelsehorisonten, fotonsfären, ISCO, flykthastigheten, gravitationell rödförskjutning och tidsdilatation svarar.',
    },
    {
      type: 'paragraph',
      html: 'Simulatorn är byggd för astronomistudenter, fysiklärare, vetenskapsskribenter och nyfikna lärlingar som vill ha mer än en statisk formel. Bildskärmen kopplar siffrorna till ett rumsligt diagram så att du kan se varför händelsehorisonten inte är en materiell yta, varför fotoner har en speciell instabil bana och varför stabil cirkulär rörelse upphör innan horisonten nås.',
    },
    {
      type: 'title',
      text: 'Hur händelsehorisontens radie beräknas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För ett icke-roterande, oladdat svart hål är händelsehorisontens radie <strong>Schwarzschildradien</strong>. Den beräknas som <strong>Rs = 2GM / c^2</strong>, där G är gravitationskonstanten, M är det svarta hålets massa och c är ljushastigheten. En solmassa motsvarar en Schwarzschildradie på cirka 2,95 kilometer.',
    },
    {
      type: 'paragraph',
      html: 'Eftersom Schwarzschildradien skalar linjärt med massan har ett svart hål med 10 solmassor en radie på cirka 29,5 kilometer, medan ett svart hål med 4 miljoner solmassor som Sagittarius A* har en radie på cirka 11,8 miljoner kilometer. Massreglaget använder en logaritmisk skala så att både stjärnmassa- och supermassiva fall får plats i samma kontroll.',
    },
    {
      type: 'table',
      headers: ['Region', 'Radie i Schwarzschildradier', 'Betydelse'],
      rows: [
        ['Händelsehorisont', '1,0 Rs', 'Den envägsspärr där flykthastigheten är lika med ljushastigheten.'],
        ['Fotonsfär', '1,5 Rs', 'Den instabila cirkulära omloppsbanan för ljus kring ett Schwarzschild-svart hål.'],
        ['ISCO', '3,0 Rs', 'Den innersta stabila cirkulära omloppsbanan för massiva partiklar.'],
        ['Svagt fält', '6 Rs och bortom', 'Gravitationen är fortfarande stark, men cirkulära omloppsbanor är lättare att upprätthålla.'],
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