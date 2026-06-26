import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensische-tlc-inkt-chromatografie-simulator';
const title = 'Forensische TLC Inkt Chromatografie Simulator';
const description = 'Simuleer dunne-laagchromatografie van betwiste schrijfinkten, visualiseer de ontwikkeling van het oplosmiddelfront, scheid kleurstofbanden en bereken de exacte Rf-waarden voor elk pigment.';

const howTo = [
  {
    name: 'Kies de betwiste inkt of de vergelijkingspen',
    text: 'Selecteer de inkt van de losgeldbrief of het profiel van een verdachte pen. Elke inkt bevat een andere set kleurstofcomponenten met verschillende polariteit en affiniteit voor de stationaire fase.',
  },
  {
    name: 'Selecteer de mobiele fase',
    text: 'Wijzig het oplosmiddelsysteem om te zien hoe de polariteit van het oplosmiddel de capillaire ontwikkeling en de relatieve migratie van elke kleurstofband beïnvloedt.',
  },
  {
    name: 'Ontwikkel de TLC-plaat',
    text: 'Verschuif de regelaar voor de ontwikkeltijd en zie hoe het oplosmiddelfront opstijgt langs de plaat, terwijl de gescheiden banden boven de startlijn verschijnen.',
  },
  {
    name: 'Lees de Rf-tabel af',
    text: 'Vergelijk de afstand van elk pigment met de afstand van het oplosmiddelfront. De simulator berekent de Rf-waarde als de pigmentafstand gedeeld door de afstand van het oplosmiddelfront.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Wat betekent Rf in dunne-laagchromatografie?',
    answer: 'Rf is de retentiefactor: de afstand afgelegd door de stof gedeeld door de afstand afgelegd door het oplosmiddelfront vanaf dezelfde startlijn. Deze factor is dimensieloos en ligt normaal tussen 0 en 1.',
  },
  {
    key: 'faq-2',
    question: 'Kan TLC bewijzen dat twee inktmonsters van dezelfde pen afkomstig zijn?',
    answer: 'Nee. TLC can aantonen of kleurstofpatronen consistent of inconsistent zijn, maar bronidentificatie vereist gevalideerde vergelijkingsmethoden, controles, documentatie en deskundige interpretatie.',
  },
  {
    key: 'faq-3',
    question: 'Waarom verandert het bandenpatroon als het oplosmiddel wordt gewijzigd?',
    answer: 'Kleurstoffen verdelen zich verschillend over de stationaire fase en de mobiele fase. Een oplosmiddel with een betere polariteitsmatch kan een kleurstof verder meevoeren, waardoor de Rf-waarde stijgt.',
  },
  {
    key: 'faq-4',
    question: 'Waarom is de startlijn belangrijk?',
    answer: 'Zowel de afstand van het oplosmiddelfront als de afstand van het pigment moeten vanaf de startlijn worden gemeten. Meten vanaf de onderkant van de plaat geeft onjuiste Rf-waarden.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Dunne-laagchromatografie-kamer met ontwikkelplaat',
    rulerAria: 'Virtuele millimeterliniaal voor het meten van het oplosmiddelfront en de pigmentbanden',
    rulerMarks: '80,60,40,20,0',
    units: 'Eenhedenstelsel',
    metric: 'Metrisch',
    imperial: 'Imperiaal',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'min',
    inkSample: 'Inktmonster',
    ransomNote: 'Betwiste inkt van losgeldbrief',
    bluePen: 'Inbeslaggenomen blauwe balpen',
    blackPen: 'Inbeslaggenomen zwarte balpen',
    gelPen: 'Inbeslaggenomen gelpen',
    solventSystem: 'Mobiele fase',
    ethanolWater: 'Ethanol / water',
    butanolAcetic: 'Butanol / azijnzuur',
    isopropanolAmmonia: 'Isopropanol / ammoniak',
    developmentTime: 'Ontwikkeltijd',
    frontDistance: 'Afgelegde weg oplosmiddel',
    matchScore: 'Gelijkenis patroon',
    solventFront: 'Oplosmiddelfront',
    originLine: 'Startlijn',
    pigment: 'Pigmentband',
    pigmentCyanDye: 'cyaan-kleurstof',
    pigmentVioletDye: 'violet-kleurstof',
    pigmentGrayCarrier: 'grijze drager',
    pigmentNavyDye: 'marineblauwe kleurstof',
    pigmentYellowDye: 'gele kleurstof',
    pigmentRedDye: 'rode kleurstof',
    pigmentBlueDye: 'blauwe kleurstof',
    pigmentDarkBinder: 'donker bindmiddel',
    pigmentTealDye: 'groenblauwe kleurstof',
    pigmentMagentaDye: 'magenta-kleurstof',
    pigmentGelBinder: 'gelbindmiddel',
    distance: 'Afstand',
    rfValue: 'Rf-waarde',
    disclaimer: 'Uitsluitend voor educatieve simulatie. Forensisch inktvergelijk vereist originele documenten, gevalideerde laboratoriummethoden, referentiestandaarden en gekwalificeerde documentonderzoekers.',
  },
  seo: [
    {
      type: 'title',
      text: 'Dunne-laagchromatografie for forensisch inktvergelijk',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Educatieve simulator',
      title: 'Wat deze TLC inktsimulator u helpt te begrijpen',
      html: 'Deze tool legt uit hoe <strong>dunne-laagchromatografie van schrijfinkt</strong> een zichtbare inktlijn kan scheiden in meerdere kleurstofbanden. Hij is ontworpen voor studenten forensische wetenschappen, beginnend documentonderzoekers en iedereen die wil begrijpen hoe Rf-waarden worden berekend op basis van een ontwikkelde TLC-plaat.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d band / d oplosmiddel', label: 'formule voor retentiefactor', icon: 'mdi:division' },
        { value: '4', label: 'vergeleken inktprofielen', icon: 'mdi:pen' },
        { value: '3', label: 'gesimuleerde mobiele fasen', icon: 'mdi:flask-outline' },
        { value: '2', label: 'metrische en imperialistische weergaven', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklist voor correcte TLC metingen',
      items: [
        'Markeer de startlijn boven het oplosmiddelniveau voordat de ontwikkeling begint.',
        'Verwijder de plaat voordat het oplosmiddel de bovenrand bereikt.',
        'Markeer het oplosmiddelfront onmiddellijk, omdat het kan verdampen of moeilijk te zien wordt.',
        'Meet de afstand van het pigment en het oplosmiddel vanaf dezelfde startlijn.',
        'Rapporteer Rf-waarden inclusief het oplosmiddelsysteem, plaattype, ontwikkelingsomstandigheden en controles.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Wat TLC kan ondersteunen',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'TLC kan aantonen of betwiste en bekende inkten onder dezelfde omstandigheden vergelijkbaar kleurstofscheidingsgedrag vertonen.',
          points: ['Screeningsvergelijking', 'Visualisatie van kleurstofpatroon', 'Rf-documentatie', 'Selectie van monsters voor bevestigend testen'],
        },
        {
          title: 'Wat TLC niet alleen kan bewijzen',
          icon: 'mdi:alert-circle-outline',
          description: 'TLC op zichzelf kan een pen niet uniek identificeren, een document niet dateren of het auteurschap bewijzen.',
          points: ['Geen unieke bronidentificatie', 'Geen identificatie van de schrijver', 'Standaard geen ouderdomsconclusie', 'Geen vervanging voor gevalideerde protocollen'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Veelgestelde vraag', 'Betrokken TLC-concept', 'Gedetailleerd antwoord'],
      rows: [
        ['Hoe bereken je de Rf-waarde?', 'Afstand van kleurstof gedeeld door afstand van oplosmiddelfront.', 'Meet beide vanaf de startlijn en deel ze door elkaar. Het resultaat heeft geen eenheid.'],
        ['Waarom splitsen inkten op in kleuren?', 'Verschillende kleurstoffen hebben een andere affiniteit voor de stationaire en mobiele fase.', 'Een enkele geschreven lijn kan verschillende kleurstoffen bevatten die met verschillende snelheden migreren.'],
        ['Kunnen twee pennen hetzelfde TLC-patroon hebben?', 'Ja, vergelijkbare formuleringen kunnen zeer vergelijkbare patronen opleveren.', 'Overeenkomst ondersteunt consistentie, geen unieke identificatie van één pen.'],
        ['Waarom is mijn Rf-waarde veranderd?', 'Oplosmiddel, plaat, vochtigheid, verzadiging, temperatuur en grootte van de stip beïnvloeden de migratie.', 'Rf-waarden zijn alleen vergelijkbaar als de omstandigheden gecontroleerd en gedocumenteerd zijn.'],
      ],
    },
    {
      type: 'title',
      text: 'Hoe de simulator de scheiding modelleert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het model behandelt de beweging van het oplosmiddelfront als een capillair stijgproces dat in de loop van de tijd vertraagt, terwijl aan elke kleurstof een Rf-waarde wordt toegekend op basis van twee vereenvoudigde eigenschappen: de affiniteit voor het bewegende oplosmiddel en de polariteitsmatch met de geselecteerde mobiele fase. Dit is bewust educatief in plaats van instrumentele chemie, maar het behoudt de kernrelatie die gebruikers moeten leren: het oplosmiddel beweegt eerst, kleurstoffen verdelen zich over de fasen, en Rf wordt berekend uit de gemeten afgelegde afstanden.',
    },
    {
      type: 'paragraph',
      html: 'Dunne-laagchromatografie is een algemeen geaccepteerde analytische techniek in forensische laboratoria vanwege de eenvoud, snelheid en kosteneffectiviteit. In de context van documentenonderzoek wordt het voornamelijk gebruikt om de kleurstofsamenstelling van verschillende inktmonsters te vergelijken. Forensisch onderzoekers nemen met een scalpel of een holle naald een klein monster inkt van het betwiste document, lossen dit op in een geschikt oplosmiddel zoals pyridine of methanol en brengen het aan op de TLC-plaat naast referentie-inktmonsters.',
    },
    {
      type: 'paragraph',
      html: 'Zodra de plaat in een gesloten kamer is ontwikkeld, scheiden de individuele componenten van de inkt zich op basis van hun verschillende verdeling tussen de stationaire silicagelfase and de mobiele oplosmiddelfase. Het resulterende chromatogram biedt een visuele vingerafdruk van de inkt en toont duidelijke kleuringsbanden op specifieke hoogten. Documentonderzoekers berekenen vervolgens de retentiefactor voor elke zichtbare kleurstofband, wat helpt om te bepalen of de betwiste inkt chemisch consistent is met een verdacht schrijfinstrument of overeenkomt met een bekend merk en bekende formule in een referentiedatabase.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stationaire fase', definition: 'De coating op de TLC-plaat, meestal silicagel, die een wisselwerking aangaat met verbindingen en hun beweging vertraagt.' },
        { term: 'Mobiele fase', definition: 'Het oplosmiddelsysteem dat langs de plaat omhoog stijgt en kleurstofcomponenten met zich meevoert.' },
        { term: 'Startlijn', definition: 'De potloodlijn waarop het inktmonster vóór de ontwikkeling wordt aangebracht.' },
        { term: 'Oplosmiddelfront', definition: 'Het hoogste punt dat door de mobiele fase wordt bereikt voordat de plaat wordt verwijderd.' },
        { term: 'Rf-waarde', definition: 'De retentiefactor: de afgelegde afstand van de stof gedeeld door de afgelegde afstand van het oplosmiddelfront.' },
      ],
    },
    {
      type: 'tip',
      title: 'Praktische interpretatietip',
      html: 'Bij forensisch documentonderzoek kan een afwijking bijzonder nuttig zijn, omdat deze een kandidaat-penformulering kan uitsluiten. Een overeenkomend TLC-patroon is zwakker: het geeft aan dat de monsters onder die omstandigheden chemisch consistent zijn, niet dat ze noodzakelijkerwijs van dezelfde pen afkomstig zijn.',
    },
    {
      type: 'proscons',
      title: 'Sterke punten en beperkingen van TLC inktvergelijking',
      items: [
        { pro: 'Snel, goedkoop en visueel intuïtief voor het scheiden van inktkleurstoffen.', con: 'Meestal destructief omdat een klein monster uit het document wordt verwijderd.' },
        { pro: 'Rf-waarden bieden een gestructureerde manier om betwiste en bekende monsters te vergelijken.', con: 'Rf-waarden verschuiven als oplosmiddel, plaat, vochtigheid en ontwikkelingsomstandigheden veranderen.' },
        { pro: 'Nuttig als screeningsmethode voorafgaand aan geavanceerdere analyses.', con: 'Kan zonder aanvullend bewijs geen unieke conclusie trekken over de penbron.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische waarschuwing',
      title: 'Overschat inktchromatografie niet',
      html: 'Een browsersimulatie kan geen papier, inktleeftijd, extractiechemie, plaatkwaliteit, besmetting of instrumentele bevestiging onderzoeken. Gebruik het om de meetlogica en interpretatielimieten te leren, en vertrouw op gevalideerde methoden voor forensisch documentonderzoek voor echt bewijsmateriaal.',
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
      applicationCategory: 'ForensicApplication',
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
