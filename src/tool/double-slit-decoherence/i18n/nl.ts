import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dubbelspleet-decoherentie-simulator';
const title = 'Dubbele spleet Experiment en Decoherentie Simulator';
const description = 'Schakel welke-weg-detectoren in en uit om te zien hoe kwantuminterferentie vervaagt tot twee deeltjesbanden in een visuele dubbele-spleet simulator.';

const howTo = [
  {
    name: 'Begin met de detector uit',
    text: 'Laat de welke-weg-detector uitgeschakeld en kijk hoe het scherm heldere en donkere interferentiepatronen vormt uit coherente kansamplitudes.',
  },
  {
    name: 'Verhoog de detectorsterkte',
    text: 'Verhoog de detectorregeling om welke-weg-informatie te introduceren. Naarmate de detector sterker wordt, neemt de coherentie af en vervagen de patronen.',
  },
  {
    name: 'Verander de spleetgeometrie',
    text: 'Pas de spleetafstand en spleetbreedte aan om te zien hoe geometrie de patroonafstand, envelopbreedte en de uiteindelijke verdeling op het scherm beïnvloedt.',
  },
  {
    name: 'Lees de live-metingen',
    text: 'Gebruik patroonzichtbaarheid, welke-weg-informatie en coherentie om het visuele patroon te verbinden met het kwantummeetverhaal.',
  },
];

const faq = [
  {
    question: 'Waarom verandert het patroon wanneer detectoren worden ingeschakeld?',
    answer: 'Een detector die kan onthullen welke spleet het deeltje gebruikte, vernietigt de fase-relatie tussen de twee alternatieven. Zonder die coherentie interfereren de twee kanspaden niet langer en nadert het scherm twee brede deeltjesbanden.',
  },
  {
    question: 'Betekent deze simulator dat het bewustzijn de golffunctie doet instorten?',
    answer: 'Nee. De simulator richt zich op fysieke welke-weg-informatie en decoherentie. Een detector, omgeving of elke interactie die het pad onderscheidbaar maakt, kan interferentie onderdrukken zonder een bewuste waarnemer te vereisen.',
  },
  {
    question: 'Wat is patroonzichtbaarheid?',
    answer: 'Patroonzichtbaarheid vergelijkt heldere en donkere gebieden op het scherm. Hoge zichtbaarheid betekent sterk interferentiecontrast. Lage zichtbaarheid betekent dat de donkere gaten zijn opgevuld en het patroon zich meer gedraagt als twee onafhankelijke deeltjesstromen.',
  },
  {
    question: 'Is dit een volledige kwantummechanica-oplosser?',
    answer: 'Nee. Het is een educatief model dat een dubbele-spleet interferentie-envelop combineert met een decoherentieregeling. Het is gebouwd om het meeteffect visueel uit te leggen, niet om een Schrödingervergelijking-simulatie voor een echte opstelling te vervangen.',
  },
  {
    question: 'Waarom beïnvloedt de spleetafstand de patroonafstand?',
    answer: 'Grotere afstand creëert een sneller faseverschil over het scherm, waardoor heldere en donkere banden dichter bij elkaar komen. Kleinere afstand spreidt de patronen verder uit elkaar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Dubbele-spleet opstelling',
    controls: 'Dubbele-spleet bediening',
    results: 'Dubbele-spleet resultaten',
    kicker: 'Meetregeling',
    detectorToggle: 'Welke-weg-detector inschakelen',
    detectorStrength: 'Detectorsterkte',
    slitSeparation: 'Spleetafstand',
    slitWidth: 'Spleetbreedte',
    unobserved: 'Ongeobserveerd',
    observed: 'Geobserveerd',
    waveMode: 'Interferentie',
    particleMode: 'Deeltjesbanden',
    fringeVisibility: 'Patroonzichtbaarheid',
    whichPath: 'Welke-weg-info',
    coherence: 'Coherentie',
    readoutNote: 'Interferentie blijft bestaan wanneer beide paden ononderscheidbaar blijven. Meting maakt padinformatie beschikbaar en het scherm verliest zijn donkere patronen.',
  },
  seo: [
    {
      type: 'title',
      text: 'Dubbele-spleet experiment simulator met decoherentie en welke-weg-detectie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze dubbele-spleet simulator verandert het klassieke kwantumexperiment in een interactief visueel model. Met de detector uitgeschakeld toont het scherm een interferentiepatroon: heldere en donkere banden ontstaan omdat de twee mogelijke paden coherent blijven. Wanneer een welke-weg-detector wordt toegevoegd, verandert het patroon geleidelijk in twee brede deeltjesbanden omdat de pad-alternatieven onderscheidbaar worden.',
    },
    {
      type: 'paragraph',
      html: 'De tool is ontworpen voor leerlingen die een duidelijke uitleg zoeken waarom waarneming het dubbele-spleet resultaat verandert. Het vermijdt de vage zinsnede "de waarnemer verandert de werkelijkheid" en richt zich in plaats daarvan op het fysiek nuttige idee: interferentie vereist ononderscheidbare alternatieven, terwijl meting en omgevingsverstrengeling de fase-relatie verwijderen die nodig is voor patronen.',
    },
    {
      type: 'title',
      text: 'Wat het dubbele-spleet experiment aantoont',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In de ongeobserveerde opstelling wordt een enkel kwantumobject beschreven door kansamplitudes die aan beide spleten zijn gekoppeld. Die amplitudes tellen op met fase. Op sommige posities op het scherm versterken ze elkaar, waardoor heldere banden ontstaan; op andere posities heffen ze elkaar op, waardoor donkere banden ontstaan. Die afwisselende structuur is het kenmerk van interferentie.',
    },
    {
      type: 'paragraph',
      html: 'Als een detector registreert welke spleet werd gebruikt, houden de alternatieven op ononderscheidbaar te zijn. Het scherm ontvangt niet langer een coherente som van amplitudes. Het ontvangt een mengsel van twee pad-afhankelijke uitkomsten, zodat de donkere interferentiegaten opvullen en het resultaat eruitziet als deeltjes die door de ene of de andere spleet gaan.',
    },
    {
      type: 'title',
      text: 'De simulator lezen',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Bediening of meting', 'Wat het verandert', 'Waarop te letten'],
      rows: [
        ['Detectorsterkte', 'Hoeveel welke-weg-informatie beschikbaar is', 'Hogere waarden verminderen de patroonzichtbaarheid en versterken het tweebandendeeltjespatroon.'],
        ['Spleetafstand', 'De afstand tussen de twee openingen', 'Grotere afstand maakt interferentiebanden dichter op elkaar op het scherm.'],
        ['Spleetbreedte', 'De grootte van elke opening', 'Bredere spleten vernauwen de diffractie-envelop en hervormen de algehele helderheid.'],
        ['Patroonzichtbaarheid', 'Contrast tussen heldere en donkere schermgebieden', 'Een hoog getal betekent dat coherente interferentie nog zichtbaar is.'],
        ['Coherentie', 'Hoeveel fase-relatie blijft tussen paden', 'Coherentie daalt naarmate de detector paden onderscheidbaar maakt.'],
      ],
    },
    {
      type: 'title',
      text: 'Decoherentie zonder mystiek',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Decoherentie is het verlies van bruikbare fasecoherentie wanneer een kwantumsysteem gecorreleerd raakt met een detector of omgeving. In een dubbele-spleet experiment kan die correlatie welke-weg-informatie dragen. Zodra het pad in principe is geregistreerd, zelfs als niemand de registratie leest, wordt het interferentiepatroon onderdrukt.',
    },
    {
      type: 'paragraph',
      html: 'Dit onderscheid is belangrijk omdat veel uitleggen de rol van menselijke waarneming overdrijven. De belangrijke fysica is niet zicht of bewustzijn; het is of de experimentele opstelling de ononderscheidbaarheid behoudt of vernietigt van de alternatieven die anders zouden interfereren.',
    },
    {
      type: 'title',
      text: 'Beperkingen van dit educatieve model',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De simulator gebruikt een compact optisch-stijl dubbele-spleet patroon en combineert het met een detectorsterkte-model voor decoherentie. Het is uitstekend voor intuïtie, klassikale demonstraties en conceptuele herhaling, maar het is geen numerieke oplossing van een volledig kwantumapparaat met detector Hilbert-ruimtes, ruisbronnen of laboratoriumkalibratie.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gebruik het om concepten te begrijpen:</strong> interferentie, welke-weg-informatie, coherentie en meting.',
        '<strong>Gebruik het niet voor experimenteel ontwerp:</strong> echte dubbele-spleet experimenten vereisen nauwkeurige berekeningen van golflengte, opening, detector en propagatie.',
        '<strong>Focus op de trend:</strong> naarmate de onderscheidbaarheid toeneemt, neemt het interferentiecontrast af.',
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
