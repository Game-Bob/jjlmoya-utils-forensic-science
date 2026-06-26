import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'satschot-afstand-berekenen-gsr-kruitsporen';
const title = 'GSR Kruitsporen Afstandscalculator';
const description = 'Simuleer didactische patronen van kruitsporen (GSR) op een doeloppervlak op basis van schootsafstand, munitietype, deeltjesverspreiding en thermische effecten.';

const howTo = [
  {
    name: 'Stel de schootsafstand in',
    text: 'Verschuif de afstandsregelaar van direct contact tot drie meter en zie hoe het kruitspoor verandert van een compacte, thermisch verbrande zone in een breed, los deeltjesveld.',
  },
  {
    name: 'Kies een munitieprofiel',
    text: 'Selecteer een profiel voor een 9mm-pistool, .38-revolver of kaliber 12 hagelgeweer om het aantal deeltjes, de spreidingscoëfficiënt en het geschatte thermische bereik aan te passen.',
  },
  {
    name: 'Bekijk het doeloppervlak en de pluim',
    text: 'Gebruik de textielweergave om de deeltjesdichtheid en radiale spreiding te beoordelen, en bekijk de zijkegel om de fysieke uitdijing van de kruitwolk te begrijpen.',
  },
  {
    name: 'Interpreteer de afstandscategorie',
    text: 'Controleer de verkregen classificatie en verwachte bevindingen. De resultaten beschrijven de didactische betekenis van contact-, nabij-contact-, nabij-bereik- en afstandsschotpatronen.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Kan de verspreiding van kruitsporen de exacte schootsafstand bewijzen?',
    answer: 'Nee. GSR-patronen ondersteunen een schatting van een afstandsinterval, geen exacte afstand. Een definitieve conclusie vereist onderzoek van het specifieke vuurwapen, de munitie, het doelmateriaal, de hoek en het uitvoeren van vergelijkende proefschoten onder gecontroleerde omstandigheden.',
  },
  {
    key: 'faq-2',
    question: 'Waarom vertonen schoten van heel dichtbij meer roet en verbranding?',
    answer: 'Bij zeer korte afstanden raken hete gassen, roet, onverbrand kruit en metaaldeeltjes uit het slaghoedje het doel voordat de pluim zich heeft kunnen uitdijen en afkoelen. Dit leidt tot roetaanslag, schroeiing en scheuring.',
  },
  {
    key: 'faq-3',
    question: 'Welke chemische elementen worden geassocieerd met slaghoedjes-GSR?',
    answer: 'Klassieke GSR-analyse richt zich op deeltjes die lood, barium en antimoon bevatten. Hoewel moderne loodvrije munitie dit profiel kan veranderen, evalueren SEM-EDS-methoden de morfologie en de chemie van de deeltjes samen.',
  },
  {
    key: 'faq-4',
    question: 'Waarom gebruikt de simulator een Gaussisch radiaal model?',
    answer: 'De Gaussische verdeling is een nuttige didactische benadering omdat de meeste deeltjes zich nabij het centrum concentreren. In de praktijk kunnen wind, schootsgrootte, hoek en stofstructuur voor asymmetrie zorgen.',
  },
  {
    key: 'faq-5',
    question: 'Is deze calculator geschikt voor forensische rapportages?',
    answer: 'Nee. Het is een educatief model. Een officieel forensisch rapport moet gebaseerd zijn op gevalideerde laboratoriumprotocollen, kwaliteitscontroles, fysieke vergelijkingspatronen en beoordeling door een gekwalificeerde deskundige.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Schootsafstand',
    units: 'Eenhedenstelsel',
    metric: 'Metrisch',
    imperial: 'Imperiaal',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Munitieprofiel',
    ammoPistol9mm: '9mm-pistool',
    ammoRevolver38: '.38-revolver',
    ammoShotgun12: 'Kaliber 12 hagelgeweer',
    target: 'Doelwit textiel',
    cone: 'Kruitwolkpluim',
    canvasAria: 'Kruitsporendeeltjesverspreiding op het doelwit textiel',
    rangeStripAria: 'Afstandscategorieën',
    category: 'Afstandsinterpretatie',
    categoryContactLabel: 'Contactschot / loopmonding op doel',
    categoryNearContactLabel: 'Nabij-contactschot / verbrandingsbereik',
    categoryCloseRangeLabel: 'Nabij-bereik / kruit-tatoeëringszone',
    categoryDistantLabel: 'Afstandsschot of onbepaalde afstand',
    density: 'Deeltjesdichtheid',
    thermal: 'Thermisch effect',
    radius: 'Geschatte patroonstraal',
    radiusSuffix: 'straal',
    expected: 'Verwachte bevinding',
    expectedContact: 'Een zeer dichte centrale afzetting, risico op een loopafdruk, roetschwärzung, scheuren en thermische beschadiging worden verwacht in de doelzone.',
    expectedNearContact: 'Zware roet- en kruitdeeltjes blijven geconcentreerd rond de inslagopening, met een zichtbare maar nog compacte radiale halo.',
    expectedCloseRange: 'Kruit-tatoeëring en metaalresiduen verbreden zich tot een meetbare ring; thermische effecten en roet worden minimaal.',
    expectedDistant: 'Deeltjes zijn schaars en wijd verspreid. Afstandsconclusies vereisen chemische extractie, microscopie en vergelijkende testschoten.',
    contact: 'Contact',
    near: 'Nabij-contact',
    close: 'Nabij-bereik',
    distant: 'Afstandsschot',
    disclaimer: 'Uitsluitend educatief model. GSR-schootsafstandsbestemming vereist gecontroleerde proefschoten, vergelijking van doelmaterialen en gevalideerde chemische methoden.',
  },
  seo: [
    {
      type: 'title',
      text: 'Schootsafstandsbestemming op Basis van GSR-Kruitspoorpatronen',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Educatief model',
      title: 'Wat deze calculator beantwoordt',
      html: 'Deze GSR-afstandscalculator illustreert of een kruitspoorpatroon lijkt op een contactschot, nabij-contactschot, nabij-bereikschot of afstandsschot. Het is bedoeld om de principes van <strong>schootsafstandsbestemming</strong> uit te leggen, niet voor het opstellen van een juridisch bewijsstuk.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'gesimuleerde schootsafstand', icon: 'mdi:ruler' },
        { value: '4', label: 'verklaarde afstandscategorieën', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'vergeleken munitieprofielen', icon: 'mdi:ammunition' },
        { value: '2', label: 'eenhedenstelsels: metrisch en imperiaal', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'Hoe het Gesimuleerde Patroon te Lezen',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Snelle interpretatiechecklist',
      items: [
        'Dichte centrale roet, verbranding, scheuren of een loopmondingsafdruk wijzen op een contactschot of nabij-contact.',
        'Een compacte donkere kern omringd door kruitkorrels suggereert een zeer korte afstand, waarbij testschoten nodig zijn voor precisie.',
        'Verspreide kruit-tatoeëring met weinig roet past meestal bij een nabij-bereikschot buiten het bereik van hitte-effecten.',
        'Spreidingspatronen op afstand sluiten de aanwezigheid van GSR niet uit; microscopie of chemische analyse kan sporen alsnog aantonen.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Waar de tool bij helpt',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Het visualiseert de relatie tussen schootsafstand, residudichtheid, deeltjesverspreiding en thermische effecten.',
          points: ['Klassikale demonstratie', 'Uitleg van zoekintenties', 'Forensische terminologie', 'Vergelijking metrisch en imperiaal'],
        },
        {
          title: 'Wat het niet kan bewijzen',
          icon: 'mdi:alert-circle-outline',
          description: 'Het kan de werkelijke schootsafstand in een echte zaak niet bepalen zonder analyse van fysieke bewijsstukken.',
          points: ['Geen upload van bewijsmateriaal', 'Geen chemische bevestiging', 'Geen wapenspecifiek testpatroon', 'Geen juridische bewijskracht'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Veelgestelde vraag', 'Cruciaal kenmerk in patroon', 'Technisch antwoord'],
      rows: [
        ['Hoe ziet een contactschot eruit?', 'Zware roet, verbranding, scheuring of loopmondingsafdruk.', 'Een contactinterpretatie is aannemelijk, maar gasexpansie en elasticiteit van het doel beïnvloeden het aspect sterk.'],
        ['Hoe dichtbij was het wapen?', 'Dichte residuen nabij de opening met een compacte kruitkrans.', 'Het patroon ondersteunt een afstandsvermoeden, maar vergelijking met proefschoten is noodzakelijk.'],
        ['Wat is kruit-tatoeëring?', 'Puntvormige inslagen door onverbrande kruitkorrels met minimale roet.', 'De spreiding varieert per munitietype, textielsoort, schoothoek en tussenliggende obstakels.'],
        ['Verdwijnt GSR bij grotere afstanden?', 'Zeer verspreide deeltjes en afwezigheid van zichtbare kruitkrans.', 'Visuele sporen nemen af, maar slaghoedjesdeeltjes kunnen microscopisch nog worden aangetoond.'],
      ],
    },
    {
      type: 'title',
      text: 'Wetenschappelijke Berekening van het Model',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De simulator maakt gebruik van een Gaussische radiale verdeling om deeltjes rond het inslagpunt te plaatsen op een willekeurige en realistische wijze. Korte schootsafstanden leiden tot een zeer smalle, compacte en uiterst dichte afzetting van kruitresten in de centrale zone; grotere afstanden vergroten de radiale spreiding aanzienlijk en verlagen de gemiddelde dichtheid van de deeltjes per vierkante centimeter. Dit rekenkundige model scheidt bovendien fijne roetpluimen van zwaardere, metallische slaghoedjesdeeltjes omdat de thermische effecten en het roet een veel kleiner fysiek bereik hebben dan de microscopisch detecteerbare metalen residuen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Kruitsporen (Gunshot Residue): deeltjes afkomstig van slaghoedje, kruit, projectiel en hete gassen tijdens het vuren.' },
        { term: 'Roetschwärzung', definition: 'Donkere koolstofafzetting die vooral zichtbaar is bij contactschoten en zeer korte afstanden.' },
        { term: 'Kruit-tatoeëring', definition: 'Puntvormige beschadigingen of kruitinslagen veroorzaakt door onverbrande of gedeeltelijk verbrande kruitkorrels.' },
        { term: 'Loopafdruk', definition: 'Afdruk op het doeloppervlak veroorzaakt door druk en hitte van de loopmonding bij een contactschot.' },
        { term: 'Proefschot', definition: 'Vergelijkend experiment met het verdachte wapen en originele munitie vanaf bekende afstanden op identiek doelstof.' },
      ],
    },
    {
      type: 'title',
      text: 'Afstandsklassen en Verwachte Bevindingen',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Bereiksklasse', 'Algemene bevindingen', 'Interpretatiebeperking'],
      rows: [
        ['Contact', 'Massieve centrale afzetting, roet, verbranding, scheuring of loopafdruk.', 'De elasticiteit van de stof en gasdruk kunnen de diameter van het defect sterk veranderen.'],
        ['Nabij-contact', 'Compacte roet- en kruitkrans rond de inslagopening.', 'Losse kleding of een tussenliggend object kan het verspreidingspatroon veranderen.'],
        ['Nabij-bereik', 'Kruit-tatoeëring, kruitdeeltjes zonder noemenswaardige roetaanslag.', 'Dezelfde afstand geeft verschillende patronen op katoen, denim, huid of papier.'],
        ['Afstandsschot', 'Minimale zichtbare residuen, brede spreiding of geen visueel kruitspoor.', 'Chemische analyses en rasterelektronenmicroscopie zijn essentieel bij het wegvallen van visuele sporen.'],
      ],
    },
    {
      type: 'tip',
      title: 'Praktische beoordelingstip',
      html: 'Beoordeel kruitsporen altijd als een <strong>vergelijkingsprobleem van afstandsintervallen</strong> en nooit als een vaste waarde. Wetenschappelijke conclusies vereisen vergelijking met testpatronen onder identieke omstandigheden.',
    },
    {
      type: 'title',
      text: 'Checkliste voor Documentatie voor Patroonanalyse',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Documenteer doelmateriaal, weefsel, kleur, dikte en eventuele spanning of vouwen in de stof.',
        'Registreer wapenmodel, looplengte, munitiepartij, kruitlading en eventuele mondingshulpstukken.',
        'Fotografeer het patroon met schaal, oriëntatie, belichting en gegevens over de keten van bewaring.',
        'Zoek afzonderlijk naar roet, schroeiing, onverbrand kruit, afstrijkring en scheuren in de stof.',
        'Voer altijd proefschoten uit voordat u een afstandsinterval toekent in forensisch werk.',
      ],
    },
    {
      type: 'proscons',
      title: 'Digitale simulatie versus forensische laboratoriumanalyse',
      items: [
        { pro: 'Visualiseert eenvoudig de toename van deeltjesspreiding bij grotere afstanden.', con: 'Houdt geen rekening met de specificiteit van het vuurwapen, de munitiepartij of de stof.' },
        { pro: 'Verduidelijkt de conceptuele verschillen tussen de afstandscategorieën.', con: 'Vervangt geen chemische tests of rasterelektronenmicroscopie (SEM-EDS).' },
        { pro: 'Geeft inzicht in de fysieke grenzen van visuele patroonanalyse.', con: 'Heeft geen juridische bewijskracht zonder laboratoriumvalidatie en deskundigenbeoordeling.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische waarschuwing',
      title: 'Uitsluiting van juridisch gebruik',
      html: 'Een computersimulatie kan de fysieke bewijsstukken in een echte zaak niet vervangen. Het kan noch de staat van het wapen, de kruitchemie, tussenbarrières of de kwaliteit van de monstername beoordelen. Gebruik deze pagina uitsluitend voor educatieve doeleinden en wend u voor echt onderzoek tot geautoriseerde laboratoria.',
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
