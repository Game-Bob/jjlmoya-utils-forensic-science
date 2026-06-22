import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'fasendiagram-kritiek-punt-visualisatie';
const title = 'Fasendiagram en Kritiekpuntvisualisatie';
const description = 'Verken vaste stof, vloeistof, gas en superkritische gebieden op een interactief druk-temperatuurfasendiagram met tripelpunt- en kritiekpuntmarkeringen.';

const howTo = [
  {
    name: 'Kies een stof',
    text: 'Schakel tussen water, kooldioxide en stikstof om te zien hoe echte tripelpunten en kritieke punten het fasenlandschap veranderen.',
  },
  {
    name: 'Verplaats temperatuur en druk',
    text: 'Gebruik de schuifregelaars om het monster op het druk-temperatuurvlak te plaatsen. Het diagram werkt de actieve faseregio en de live monstermarkering bij.',
  },
  {
    name: 'Bekijk de kritieke halo',
    text: 'Beweeg naar het einde van de damp-vloeistofgrens om te zien hoe latente warmte vervaagt en het onderscheid tussen vloeistof en gas verdwijnt in een superkritische vloeistof.',
  },
  {
    name: 'Lees het onderwijspaneel',
    text: 'Gebruik het fase-label, de latente-warmtemeter en puntuitlezingen om het visuele diagram te verbinden met thermodynamische terminologie.',
  },
];

const faq = [
  {
    question: 'Wat is een fasendiagram?',
    answer: 'Een fasendiagram geeft weer welke fase van een stof stabiel is bij verschillende combinaties van temperatuur en druk. De grenslijnen geven de omstandigheden aan waar twee fasen in evenwicht kunnen naast elkaar bestaan.',
  },
  {
    question: 'Wat gebeurt er op het kritieke punt?',
    answer: 'Op het kritieke punt eindigt de damp-vloeistofgrens. Boven de kritieke temperatuur en druk wordt de stof een superkritische vloeistof en is er geen scherp onderscheid meer tussen vloeistof en gas.',
  },
  {
    question: 'Waarom heeft water een andere smeltlijn?',
    answer: 'Water is bijzonder omdat ijs bij het smeltpunt minder dicht is dan vloeibaar water. Toenemende druk kan de dichtere vloeistoffase begunstigen, waardoor de vast-vloeistofgrens een andere helling heeft dan bij veel andere stoffen.',
  },
  {
    question: 'Zijn de weergegeven curven exact zoals in het laboratorium?',
    answer: 'Nee. De tool gebruikt vereenvoudigde curven die zijn verankerd aan gepubliceerde tripelpunt- en kritiekpuntwaarden. Het is ontworpen voor conceptueel leren, niet voor procestechniek of veiligheidsberekeningen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Fasendiagrambediening',
    substance: 'Stof',
    units: 'Eenheden',
    scientificUnits: 'Wetenschappelijk (K, MPa)',
    metricUnits: 'Metrisch (Celsius, kPa)',
    imperialUnits: 'Imperiaal (Fahrenheit, psi)',
    temperature: 'Temperatuur',
    pressure: 'Druk',
    diagram: 'Druk-temperatuurfasendiagram',
    sample: 'Monstertoestand',
    phase: 'Stabiele fase',
    triplePoint: 'Tripelpunt',
    criticalPoint: 'Kritiek punt',
    vaporCurve: 'Damp-vloeistofgrens',
    meltingLine: 'Vast-vloeistofgrens',
    latentHeat: 'Latente-warmtecontrast',
    criticalProximity: 'Kritieke nabijheid',
    coordinates: 'Coordinaten',
    solid: 'Vast',
    liquid: 'Vloeistof',
    gas: 'Gas',
    supercritical: 'Superkritisch',
    low: 'laag',
    high: 'hoog',
    reset: 'Reset',
    interpretation: 'Interpretatie',
    note: 'Grenslijnen markeren co-existentie; regios markeren de meest stabiele fase voor de geselecteerde omstandigheden.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interactieve fasendiagramvisualisatie voor tripelpunten, kookcurven en kritieke punten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze fasendiagramvisualisatie verandert een abstracte druk-temperatuurkaart in een interactieve kaart. Kies een stof, verplaats de temperatuur en druk en zie of het monster zich als vaste stof, vloeistof, gas of superkritische vloeistof gedraagt. Het doel is om fasegrenzen ruimtelijk te laten aanvoelen: het overschrijden van een lijn verandert de stabiele toestand, terwijl het naderen van het kritieke punt verandert wat een fasegrens eigenlijk betekent.',
    },
    {
      type: 'paragraph',
      html: 'De tool is gebouwd voor studenten, docenten, wetenschapsjournalisten en iedereen die op zoek is naar een duidelijke uitleg van fasendiagrammen. Het benadrukt de kenmerken die het meest belangrijk zijn in de inleidende thermodynamica: het tripelpunt waar drie fasen naast elkaar bestaan, de damp-vloeistofcurve, de vast-vloeistofgrens en het kritieke eindpunt waar het onderscheid tussen vloeistof en gas verdwijnt.',
    },
    {
      type: 'title',
      text: 'Het druk-temperatuurdiagram lezen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een fasendiagram plaatst temperatuur op de ene as en druk op de andere. Elke regio toont de fase die stabiel is onder die omstandigheden. De lijnen tussen de regios zijn coexistentiecurven: langs die lijnen kunnen twee fasen in evenwicht blijven in plaats van dat de ene fase de andere volledig vervangt.',
    },
    {
      type: 'table',
      headers: ['Diagramkenmerk', 'Betekenis', 'Wat te bekijken in de tool'],
      rows: [
        ['Tripelpunt', 'Vaste stof, vloeistof en gas coexisteren', 'Het laagtemperatuur knooppunt waar de grenzen samenkomen.'],
        ['Damp-vloeistofcurve', 'Kook- of condensatie-evenwicht', 'De gebogen lijn van het tripelpunt naar het kritieke punt.'],
        ['Vast-vloeistofgrens', 'Smelt- of vriesevenwicht', 'De steile lijn die vaste-stof- en vloeistofgebieden scheidt.'],
        ['Kritiek punt', 'Einde van de damp-vloeistofgrens', 'Het gemarkeerde eindpunt waar latente warmte vervaagt.'],
        ['Superkritisch gebied', 'Geen scherp vloeistof-gasonderscheid', 'Het hoge-temperatuur, hoge-drukgebied voorbij het kritieke punt.'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom het kritieke punt belangrijk is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Onder het kritieke punt is koken een faseovergang: vloeistof en damp kunnen naast elkaar bestaan en energie kan worden geabsorbeerd als latente warmte terwijl de temperatuur gebonden blijft aan de grensconditie. Op het kritieke punt eindigt die grens. Daarboven verandert de dichtheid continu en wordt de stof beschreven als een superkritische vloeistof in plaats van een normale vloeistof of gas.',
    },
    {
      type: 'paragraph',
      html: 'Dit is belangrijk in de chemie, planetaire wetenschap, industrieele extractie, koeling en hogedrukfysica. Kooldioxide wordt bijvoorbeeld superkritisch bij relatief toegankelijke omstandigheden in vergelijking met water, daarom wordt superkritisch CO2 gebruikt in extractie en materiaalbewerking. Water vereist veel hogere temperatuur en druk, waardoor het kritieke punt belangrijk is voor energiesystemen en geofysica.',
    },
    {
      type: 'title',
      text: 'Wat deze visualisatie vereenvoudigt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Echte fasendiagrammen kunnen polymorfen, metastabiele toestanden, niet-ideale mengsels, meerdere vaste fasen en experimenteel aangepaste toestandsvergelijkingen bevatten. Deze educatieve tool houdt het model bewust compact. Het verankert elke stof aan herkenbare referentiewaarden en tekent vloeiende onderwijscurven, zodat de belangrijkste ideeën gemakkelijk te bekijken zijn zonder een thermodynamica-tabel.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gebruik het voor intuïtie:</strong> het helpt uitleggen waarom snelkookpannen, droogijs, koken en superkritische vloeistoffen zich anders gedragen.',
        '<strong>Gebruik het niet voor technische grenzen:</strong> vereenvoudigde curven zijn geen vervanging voor gecertificeerde eigenschapsgegevens.',
        '<strong>Focus op topologie:</strong> de belangrijkste leeruitkomst is hoe faseregio\'s verbonden zijn en waar grenzen eindigen.',
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
