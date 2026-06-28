import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'brandspoor-oorsprong-analysator';
const title = 'Brandspoor Oorspronganalysator';
const description = 'Karteer V-patronen, diepe verkoling, roetschaduwen en schoonbrandindicatoren op een ruimteplan en projecteer brandvoortplantingsvectoren om het meest waarschijnlijke oorsprongsgebied te schatten.';

const howTo = [
  {
    name: 'Importeer een plattegrond',
    text: 'Sleep een plattegrondafbeelding naar de werkruimte of laad deze van schijf voordat u bewijsvectoren plaatst.',
  },
  {
    name: 'Klik om de radiale bewijsselector te openen',
    text: 'Plaats de aanwijzer op een brandspoor, open het contextuele radiale menu en kies het indicatortype rechtstreeks op de kaart.',
  },
  {
    name: 'Sleep om vectoren te verfijnen en convergentie te observeren',
    text: 'Verleng elke voortplantingsvector met canvas-uitlijning en observeer hoe het waarschijnlijkheidsveld in realtime wordt herberekend naarmate het bewijs zich opstapelt.',
  },
  {
    name: 'Exporteer de technische momentopname',
    text: 'Genereer een gestructureerd rapport met oorsprongscoördinaten, betrouwbaarheid, variantie, laagstatus en de volledige vectorset voor latere beoordeling.',
  },
];

const faq = [
  {
    question: 'Kunnen brandsporen het exacte punt bewijzen waar een brand begon?',
    answer: 'Nee. Brandsporen kunnen helpen bij het genereren en testen van oorsprongshypothesen, maar ventilatie, blussing, brandbelasting, flashover en verstoring na de brand kunnen patronen vervormen. Echte oorsprongsbepaling vereist een systematisch onderzoek.',
  },
  {
    question: 'Waarom zijn V-patronen belangrijk bij brandonderzoek?',
    answer: 'V-patronen weerspiegelen vaak de opwaartse en buitenwaartse vlamverspreiding op verticale oppervlakken. Ze kunnen wijzen naar een lager oorsprongsgebied, maar moeten worden vergeleken met ander bewijs voordat conclusies worden getrokken.',
  },
  {
    question: 'Wat geeft diepe verkoling aan?',
    answer: 'Diepe verkoling kan duiden op langere verhitting, hogere warmteflux of brandstofeffecten. Het is nuttige context, maar markeert niet automatisch de oorsprong omdat materialen met verschillende snelheden verkolen.',
  },
  {
    question: 'Waarom meerdere vectoren gebruiken in plaats van één pijl?',
    answer: 'Een enkel patroon kan misleidend zijn. Meerdere onafhankelijke vectoren verminderen de invloed van één beschadigde muur, één brandstofpakket of één ventilatiepad.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Interactieve forensische werkruimte voor het tekenen van brandvoortplantingsvectoren',
    vPattern: 'V-patroon',
    deepChar: 'Diepe verkoling',
    sootShadow: 'Roetschaduw',
    cleanBurn: 'Schoonbrand',
    loadPlan: 'Plattegrond laden',
    generateReport: 'Rapport genereren',
    pointerLabel: 'Aanwijzer',
    resetVectors: 'Herstellen',
    estimatedOrigin: 'Geschatte oorsprong',
    visibleLayers: 'Zichtbare bewijslagen',
    vectorsLabel: 'VECTOREN',
    confidenceLabel: 'BETROUWBAARHEID',
    varianceLabel: 'VARIANTIE',
    modeLabel: 'MODUS',
    guideSummary: 'Hoe deze tool te gebruiken',
    flowPanelTitle: 'Werkstroom',
    legendPanelTitle: 'Bewijslegenda',
    readoutPanelTitle: 'Resultaatpaneel',
    flow1Kicker: 'STAP 1',
    flow1Icon: '1',
    flow1Title: 'Laden',
    flow1Text: 'Upload de plattegrond',
    flow2Kicker: 'STAP 2',
    flow2Icon: '2',
    flow2Title: 'Spoor kiezen',
    flow2Text: 'Klik op het brandspoor',
    flow3Kicker: 'STAP 3',
    flow3Icon: '3',
    flow3Title: 'Vector slepen',
    flow3Text: 'Richt vuurrichting',
    flow4Kicker: 'STAP 4',
    flow4Icon: '4',
    flow4Title: 'Resultaat lezen',
    flow4Text: 'Controleer voettekst + exporteer',
    basicsTitle: 'Wat u eerst moet doen',
    basicsIntro: 'Laad een duidelijke plattegrond, markeer alleen patronen die u kunt rechtvaardigen en spreid vectoren over verschillende oppervlakken in plaats van hetzelfde spoor te herhalen.',
    indicatorsTitle: 'Wat elk bewijstype betekent',
    vPatternShort: 'Muurverbranding opent naar boven',
    vPatternExplain: 'Een V-patroon is de bekende opwaartse en buitenwaartse brandvorm die vaak op een muur te zien is. Het kan suggereren dat warmte en vlammen uit een lager gebied opstegen, maar het is geen automatisch bewijs van de exacte oorsprong.',
    deepCharShort: 'Gebied harder of langer verbrand',
    deepCharExplain: 'Diepe verkoling betekent dat een materiaal in één gebied meer verbrand, zwartgeblakerd of verteerd lijkt dan eromheen. Het kan duiden op langere of intensere verhitting, maar brandstoftype en materiaaldikte zijn sterk van invloed.',
    sootShadowShort: 'Rook geblokkeerd of omgeleid',
    sootShadowExplain: 'Een roetschaduw is een beschermd of anderszins verduisterd gebied dat suggereert dat een object, oppervlak of luchtstroom de roetafzetting veranderde. Het kan helpen reconstrueren wat aanwezig was of hoe rook bewoog.',
    cleanBurnShort: 'Minder roet door hitte of luchtstroom',
    cleanBurnExplain: 'Schoonbrand is een gebied waar roet lichter, verwijderd of afwezig lijkt omdat hitte, ventilatie of directe vlambootstelling het anders beïnvloedde. Het is nuttig, maar niet elk schoon gebied markeert de oorsprong.',
    resultsTitle: 'Hoe het resultaat te lezen',
    resultsIntro: 'Gebruik de voettekst als snelle gezondheidscontrole voor uw kartering, niet als definitieve forensische conclusie.',
    resultsPoint1: 'Hoeveel bewijslijnen actief zijn.',
    resultsPoint2: 'Hoe sterk de actieve vectoren overeenkomen.',
    resultsPoint3: 'Hoe breed het oorsprongsgebied nog is.',
    resultsPoint4: 'Wat de tool van u verwacht dat u vervolgens doet.',
    awaitingVector: 'Wacht op vector',
    selectIndicator: 'Indicator selecteren',
    refiningVector: 'Vector verfijnen',
    needsMoreVectors: 'Meer vectoren nodig',
    wideArea: 'Breed oorsprongsgebied',
    focusedArea: 'Gericht oorsprongsgebied',
    dropPlan: 'Sleep plattegrondafbeelding hierheen of klik om te uploaden',
    needsMoreVectorsText: 'Teken ten minste twee duidelijke richtingspijlen. Drie of meer onafhankelijke waarnemingen maken de convergentie meestal veel gemakkelijker te interpreteren.',
    wideAreaText: 'De geprojecteerde lijnen snijden elkaar, maar de spreiding is nog breed. Vergelijk in een echte scène ventilatie, brandbelasting, bluseffecten en getuigeninformatie voordat u de oorsprong verkleint.',
    focusedAreaText: 'De vectoren convergeren naar een compact gebied. Beschouw dit als een sterk leersignaal voor de ontwikkeling van oorsprongshypothesen, niet als een definitieve forensische conclusie.',
    disclaimer: 'Alleen educatieve simulatie. Werkelijk onderzoek naar brandoorsprong en -oorzaak moet erkende richtlijnen, veiligheidsprotocollen ter plaatse, documentatienormen en gekwalificeerde deskundigenbeoordeling volgen.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interactieve Brandoorspronganalyse op basis van Brandspoorvectoren',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Leersimulator',
      title: 'Wat deze brandspoor oorspronganalysator leert',
      html: 'Deze browsertool demonstreert hoe onderzoekers redeneren van fysieke brandsporen naar een waarschijnlijk <strong>oorsprongsgebied</strong>. Gebruikers karteren zichtbaar bewijs, tekenen gerichte voortplantingsvectoren en observeren hoe de geprojecteerde lijnen convergeren of divergeren. Het model is bewust leerzaam: het onderwijst geometrie en patrooninterpretatie, geen juridische oorzaakbepaling.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 lagen', label: 'V-patroon, verkoling, roet, schoonbrand', icon: 'mdi:layers-triple' },
        { value: '2D-plattegrond', label: 'structurele ruimtekaart', icon: 'mdi:floor-plan' },
        { value: '3+ pijlen', label: 'aanbevolen waarnemingen', icon: 'mdi:vector-line' },
        { value: '0-100%', label: 'betrouwbaarheidsinvoer', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Een gedisciplineerde werkstroom voor brandspoorinterpretatie',
      items: [
        'Begin met veiligheid, plaatsbehoud, foto\'s, schetsen en systematische documentatie voordat u patronen interpreteert.',
        'Scheid patroontypen zodat V-vormige schade, verkolingsdiepte, roetafzetting en schoonbrand niet tot één aanname worden samengevoegd.',
        'Teken richtingsindicatoren alleen waar het fysieke patroon een verdedigbare voortplantingsrichting ondersteunt.',
        'Zoek convergentie tussen onafhankelijke waarnemingen in plaats van te vertrouwen op de meest dramatische schade.',
        'Gebruik het geschatte oorsprongsgebied als hypothese om te toetsen aan brandstoffen, ontstekingsbronnen, ventilatie, elektrisch bewijs en getuigenverklaringen.',
      ],
    },
    {
      type: 'table',
      headers: ['Patroon', 'Potentiële waarde', 'Belangrijkste voorbehoud'],
      rows: [
        ['V-patroon', 'Kan opwaartse en buitenwaartse vlamvoortplanting vanuit een lager gebied suggereren.', 'Kan worden gewijzigd door ventilatie, flashover, wandgeometrie en blussing.'],
        ['Diepe verkoling', 'Kan wijzen op langdurige hitteblootstelling of intense verbranding.', 'Brandstoftype en materiaaldikte beïnvloeden de verkolingsdiepte sterk.'],
        ['Roetschaduw', 'Kan beschermde gebieden, objectplaatsing of luchtstroomeffecten onthullen.', 'Verplaatste meubels of blusactiviteit kunnen de interpretatie veranderen.'],
        ['Schoonbrand', 'Kan hoge hitte, ventilatie of verbranding in een laat stadium tonen.', 'Identificeert niet automatisch het eerst ontstoken materiaal.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Betere oorsprongshypothesen',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'De beste hypothesen verklaren meerdere waarnemingen tegelijkertijd.',
          points: ['Onafhankelijke vectoren convergeren', 'Bewijs past bij bekende ventilatiepaden', 'Brandstofpakketten zijn verantwoord', 'Alternatieve oorsprongen worden actief getest'],
        },
        {
          title: 'Zwakke oorsprongshypothesen',
          icon: 'mdi:alert-circle-outline',
          description: 'Zwakke hypothesen vertrouwen vaak op één patroon zonder vervormingsfactoren te testen.',
          points: ['Eén dramatisch verkoold gebied wordt als bewijs behandeld', 'Flashover wordt genegeerd', 'Blusschade is niet gedocumenteerd', 'Ontstekingsbronbewijs wordt verondersteld'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe het vectormodel werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Elke pijl wordt behandeld als een geprojecteerde lijn van brandvoortplanting. De schatter berekent paarsgewijze lijnkruisingen, filtert punten die binnen een redelijke plattegrondgrens vallen, middelt de resterende kruisingen en rapporteert een straal op basis van de spreiding van die kruisingen. Een kleine straal met meerdere vectoren produceert een sterker convergentiesignaal. Het snijmodel werkt door de parametrische vergelijkingen op te lossen van twee lijnen die zich uitstrekken vanaf hun respectieve bewijsmarkeringen. Wanneer twee vectoren naar een gedeeld gebied wijzen, draagt hun theoretische kruispunt een coördinaat bij aan de middelingverzameling. Hoe meer onafhankelijke vectoren deelnemen, hoe meer de schatter kruisingen kan wegfilteren die ver van de hoofdcluster liggen, waardoor de invloed van een enkele waarneming die mogelijk slecht georiënteerd of verkeerd geïnterpreteerd is, effectief wordt verminderd.',
    },
    {
      type: 'paragraph',
      html: 'Deze geometrische benadering weerspiegelt een schetsoefening in de klas: het helpt studenten te zien waarom oorsprongsanalyse verbetert wanneer waarnemingen van verschillende oppervlakken en patroontypen komen. Het legt ook een veelvoorkomend probleem bloot: pijlen kunnen kruisen zelfs wanneer de onderliggende interpretatie slecht is, dus het wiskundige centrum mag het brandwetenschappelijk oordeel nooit vervangen. In een echt onderzoek vergelijken praktijkmensen het geplotte resultaat met ventilatiepaden, brandbelastingverdeling, structurele schade en getuigenverklaringen voordat ze een coördinaat als waarschijnlijke oorsprong behandelen. De tool stimuleert deze gewoonte door variantie naast het geschatte punt weer te geven, en gebruikers eraan te herinneren dat een compact kruisingscluster alleen zo sterk is als de kwaliteit van de waarnemingen die het hebben voortgebracht.',
    },
    {
      type: 'paragraph',
      html: 'Naast de basis kruisingslogica past de schatter een grensbeperking toe zodat kruisingen die ver buiten de ruimteplattegrond liggen worden uitgesloten. Dit voorkomt dat uitschieters het gemiddelde centrum naar onmogelijke locaties trekken. De uiteindelijke straal vertegenwoordigt de standaardafwijking van de resterende kruisingscoördinaten, wat een directe maat geeft voor hoe consistent de actieve vectoren overeenkomen. Een straal onder de tien procent van de planomvang duidt op sterke convergentie. Een straal van meer dan een kwart van het plan geeft aan dat het bewijs nog geen gefocuste oorsprong ondersteunt en dat meer of betere waarnemingen nodig zijn voordat conclusies worden getrokken.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Oorsprongsgebied', definition: 'Het algemene gebied waar beschikbaar bewijs suggereert dat de brand begon.' },
        { term: 'V-patroon', definition: 'Een brandspoor dat vaak verschijnt als opwaartse en buitenwaartse schade op een verticaal oppervlak.' },
        { term: 'Schoonbrand', definition: 'Een lichter of schoner gebied veroorzaakt wanneer roet wordt weggebrand of niet wordt afgezet onder hoge hitte- of luchtstroomomstandigheden.' },
        { term: 'Roetschaduw', definition: 'Een beschermd of anders afgezet roetgebied dat informatie kan bewaren over objecten, luchtstroom of hitteblootstelling.' },
        { term: 'Vectorconvergentie', definition: 'Het clusteren van geprojecteerde richtingsindicatoren rond een gemeenschappelijk gebied.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische voorzichtigheid',
      title: 'Verander convergentie niet in zekerheid',
      html: 'Een compact kruispuntcluster is alleen nuttig wanneer de waarnemingen geldig zijn. Echte onderzoeken moeten rekening houden met ventilatie, flashover, brandstofpakketten, elektrische systemen, apparaatbewijs, getuigenverklaringen, blussing en verstoring van de plaats.',
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
