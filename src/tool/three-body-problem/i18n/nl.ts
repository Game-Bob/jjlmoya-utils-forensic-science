import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'drielichamenprobleem-simulator';
const title = 'Drielichamenprobleem Simulator';
const description = 'Simuleer drie gravitatiehemellichamen in een tweedimensionaal vlak met bewerkbare massa\'s, snelheidsvectoren, sporen en stabiele of chaotische presets.';

const howTo = [
  {
    name: 'Kies een orbitale preset',
    text: 'Begin met het achtvormige baan voor een stabiele referentie, de Lagrange-driehoek voor een roterend evenwicht, of de katapultpreset voor een zichtbaar chaotische ontmoeting.',
  },
  {
    name: 'Pas massa\'s en snelheidsvectoren aan',
    text: 'Gebruik de schuifregelaars voor elk lichaam om de massa en initiële snelheidscomponenten te wijzigen. Kleine veranderingen kunnen een patroon behouden, vervormen of volledig vernietigen.',
  },
  {
    name: 'Lees de diagnostiek',
    text: 'Bekijk de totale energie, de dichtste en verste afstand en het massamiddelpunt om te begrijpen of de numerieke baan gebonden blijft of uit elkaar drijft.',
  },
];

const faq = [
  {
    question: 'Wat is het drielichamenprobleem?',
    answer: 'Het drielichamenprobleem onderzoekt hoe drie massa\'s bewegen wanneer elk lichaam de andere twee gravitationeel aantrekt. In tegenstelling tot het tweelichamenprobleem is er geen algemene gesloten vergelijking die elke mogelijke configuratie oplost, dus de meeste praktische gevallen worden verkend met numerieke integratie.',
  },
  {
    question: 'Waarom zijn drie-lichamenbanen instabiel?',
    answer: 'Veel drielichamensystemen zijn gevoelig voor begincondities. Een kleine verandering in snelheid, positie of massa verandert de timing van nabije ontmoetingen, en die ontmoetingen kunnen dramatisch energie uitwisselen. Het resultaat is een systeem dat een tijdje gebonden kan blijven en dan plotseling een lichaam uitstoot.',
  },
  {
    question: 'Wat laat de achtvormige preset zien?',
    answer: 'De achtvormige preset is een beroemde periodieke oplossing voor drie gelijke massa\'s. Elk lichaam volgt hetzelfde pad met een faseverschuiving, wat aantoont dat het drielichamenprobleem elegante stabiele eilanden kan bevatten binnen een veel groter chaotisch landschap.',
  },
  {
    question: 'Is dit een fysiek exacte astronomiesimulator?',
    answer: 'Dit instrument gebruikt een verzacht Newton-model en een symplectische snelheids-Verlet-stap zodat de beweging betrouwbaar en stabiel aanvoelt voor leren. Het is ontworpen voor interactieve verkenning in plaats van hoge-precisie efemeridevoorspelling.',
  },
  {
    question: 'Hoe moet ik totale energie interpreteren?',
    answer: 'Negatieve totale energie duidt meestal op een gebonden systeem, terwijl energie dicht bij nul ontsnapping gemakkelijker maakt. In een numerieke simulatie waarschuwt grote energiedrift ook dat de tijdstap of ontmoetingsgeometrie de integrator overbelast.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Zwaartekracht-chaoslaboratorium',
    canvasLabel: 'Interactief tweedimensionaal drielichamenbaan canvas',
    presetsLabel: 'Orbitale presets',
    figureEightPreset: 'Achtvorm',
    lagrangePreset: 'Lagrange-driehoek',
    slingshotPreset: 'Katapult',
    pauseButton: 'Pauze',
    playButton: 'Afspelen',
    resetButton: 'Resetten',
    speedLabel: 'Simulatiesnelheid',
    trailLabel: 'Spoorlengte',
    massLabel: 'Massa',
    velocityXLabel: 'Snelheid X',
    velocityYLabel: 'Snelheid Y',
    energyLabel: 'Totale energie',
    separationLabel: 'Scheidingsbereik',
    centerMassLabel: 'Massamiddelpunt',
  },
  seo: [
    {
      type: 'title',
      text: 'Interactieve drielichamenprobleem-simulator voor orbitale chaos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het drielichamenprobleem is een van de duidelijkste demonstraties dat eenvoudige wetten gecompliceerde beweging kunnen produceren. Newtons zwaartekracht geeft een compacte krachtregel, maar zodra een derde massief lichaam zich bij het systeem voegt, hervormt elke baan continu de andere twee. Deze simulator laat je direct experimenteren met die instabiliteit: kies een bekende configuratie, pas massa\'s en snelheidsvectoren aan en kijk of de lichamen een herhalende baan, een roterende driehoek of een chaotische verstrooiingsgebeurtenis vormen.',
    },
    {
      type: 'title',
      text: 'Wat de presets demonstreren',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Preset', 'Fysisch idee', 'Waar op te letten'],
      rows: [
        ['<strong>Achtvorm</strong>', 'Een periodieke gelijke-massa-oplossing waarbij alle drie de lichamen dezelfde lus delen.', 'De baan blijft alleen georganiseerd wanneer symmetrie en snelheidsbalans zorgvuldig worden bewaard.'],
        ['<strong>Lagrange-driehoek</strong>', 'Drie lichamen bezetten een gelijkzijdige driehoek die rond het massamiddelpunt roteert.', 'Massenbalans en tangentiële snelheid voorkomen dat de driehoek naar binnen klapt.'],
        ['<strong>Katapult</strong>', 'Een nabije ontmoeting draagt energie over tussen de lichamen.', 'Eén lichaam kan snelheid winnen terwijl een ander sterker gebonden raakt, wat onthult waarom chaotische uitstotingen optreden.'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom kleine veranderingen ertoe doen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In een twee-lichamenbaan bieden het massamiddelpunt en de orbitale ellips een stabiel geometrisch beeld. In een drielichamensysteem werken nabije passages als gravitationele onderhandelingen: een lichaam kan orbitale energie lenen, scherp van richting veranderen of een ordelijke lus omzetten in een verstrooiingsgebeurtenis. Die gevoeligheid is waarom echte astrofysische systemen zoals drievoudige sterren, planeet-maan-ontmoetingen en planetesimalen uit het vroege zonnestelsel vaak numerieke integratie vereisen in plaats van een enkele eenvoudige formule.',
    },
    {
      type: 'title',
      text: 'Hoe de diagnostiek te gebruiken',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Totale energie</strong> helpt je beoordelen of het systeem gebonden is en of de numerieke integratie stabiel blijft.',
        '<strong>Scheidingsbereik</strong> toont de dichtste en verste paaraffstanden, waardoor bijna-botsingen en uitstotingen gemakkelijk te herkennen zijn.',
        '<strong>Massamiddelpunt</strong> moet relatief stabiel blijven wanneer het initiële momentum in balans is; drift suggereert een opzettelijk asymmetrische opstelling of een veranderde snelheidsvector.',
        '<strong>Spoorlengte</strong> onthult de structuur op lange termijn: korte sporen benadrukken de huidige interactie, terwijl lange sporen herhalende lussen en langzame orbitale precessie blootleggen.',
      ],
    },
    {
      type: 'title',
      text: 'Numeriek model gebruikt in het instrument',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De simulator gebruikt Newtons inverse-kwadraat aantrekking met een kleine verzachtingsfactor die visuele explosies tijdens extreem nabije passages voorkomt. De beweging wordt voortgestuwd met een snelheids-Verlet-stap, een gebruikelijke keuze voor orbitale demonstraties omdat het energiegedrag beter beheert dan een eenvoudige Euler-update. Het resultaat is een responsief onderwijsmodel dat het kwalitatieve gedrag van het drielichamenprobleem zichtbaar maakt zonder te pretenderen professionele hemelmechanica-software te vervangen.',
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
