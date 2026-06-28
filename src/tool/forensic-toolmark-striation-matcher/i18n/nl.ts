import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensische-gereedschapssporen-krassen-vergelijker';
const title = 'Forensische vergelijker van gereedschapssporen en krassen';
const description = 'Upload betwiste en bekende gereedschapsspoorafbeeldingen, lijn ze uit in een gespleten vergelijkingsmicroscoop en inspecteer de continuïteit van de krassen met visuele regelaars.';

const howTo = [
  {
    name: 'Laad de vergelijkingsafbeeldingen',
    text: 'Upload een bekende testspoorafbeelding en een betwiste spoorafbeelding uit uw eigen casusmateriaal, aantekeningen of trainingsset.',
  },
  {
    name: 'Verschuif de vergelijkingssplitsing',
    text: 'Sleep over de optische kijker om meer van het bekende of betwiste spoor te onthullen terwijl beide monsters in één veld blijven.',
  },
  {
    name: 'Pas verschuiving, rotatie, zoom en contrast aan',
    text: 'Gebruik de micrometerregelaars om het betwiste spoor te verschuiven en te roteren, en pas vervolgens zoom, contrast en helderheid aan zodat fijne krassen zichtbaar blijven.',
  },
  {
    name: 'Exporteer het vergelijkingsweergave',
    text: 'Wanneer de visuele uitlijning gereed is, exporteert u een PNG-weergave voor discussie, klasbeoordeling of casusnotities.',
  },
];

const faq = [
  {
    question: 'Wat is een forensische gereedschapsspoorvergelijking?',
    answer: 'Forensische gereedschapsspoorvergelijking onderzoekt sporen die ontstaan wanneer een gereedschap in contact komt met, snijdt in, krast op, wrikt aan of drukt op een ander oppervlak. Onderzoekers vergelijken klassekenmerken, spoorwaliteit en microscopische krasdetails tussen betwiste sporen en bekende testsporen.',
  },
  {
    question: 'Kan deze online tool het exacte gereedschap identificeren dat een spoor heeft gemaakt?',
    answer: 'Nee. Deze werkruimte is voor visuele uitlijning en educatie. Het berekent geen bronattributie, waarschijnlijkheid, foutenpercentage of een geautomatiseerde forensische conclusie.',
  },
  {
    question: 'Waarom zijn verschuiving, rotatie en zoom belangrijk bij het vergelijken van gereedschapssporen?',
    answer: 'Kleine verschillen in gereedschapshoek, druk, schaal, camerapositie en zijdelingse plaatsing kunnen ervoor zorgen dat vergelijkbare kraspatronen niet uitgelijnd lijken. Regelaars voor verschuiving, rotatie en zoom helpen om twee afbeeldingen in een vergelijkbare positie te plaatsen.',
  },
  {
    question: 'Welke afbeeldingen werken het best voor visuele gereedschapsspooruitlijning?',
    answer: 'Gebruik scherpe, goed belichte afbeeldingen die zo loodrecht mogelijk zijn genomen, met voldoende overlap in het spoorbereik. Vermijd sterke onscherpte, extreme schittering, perspectiefverkenning en afbeeldingen waarbij het krasgebied te kort of beschadigd is om te vergelijken.',
  },
  {
    question: 'Wat moet een gebruiker documenteren na het uitlijnen van twee gereedschapsspoorafbeeldingen?',
    answer: 'Documenteer de bron van elke afbeelding, of deze betwist of bekend is, de gebruikte uitlijningsinstellingen, eventuele toegepaste beeldbewerkingen, zichtbare gebieden van overeenstemming of afwijking, en de beperkingen van de beeldkwaliteit.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Gespleten vergelijkingsmicroscoopweergave van bekende en betwiste gereedschapssporenkrassen',
    splitLabel: 'Verschuif vergelijkingssplitsing',
    units: 'Verschuivingseenhedensysteem',
    metric: 'Metrisch',
    imperial: 'Imperiaal',
    toolProfile: 'Gereedschapsprofiel',
    loadImages: '1. Laden',
    alignImage: '2. Lijn betwiste afbeelding uit',
    adjustImage: '3. Pas zichtbaarheid aan',
    outputControls: 'Uitvoerregelaars',
    demoOptions: 'Demo-opties',
    uploadKnown: 'Bekende/testafbeelding',
    uploadQuestioned: 'Betwiste afbeelding',
    noFile: 'Geen afbeelding geladen',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Schroevendraaierpunt',
    prybar: 'Koevoetrand',
    boltCutter: 'Boutschaarklem',
    offset: 'Horizontale verschuiving',
    rotation: 'Hoekrotatie',
    zoom: 'Beeldzoom',
    contrast: 'Contrast',
    brightness: 'Helderheid',
    microns: 'micrometer',
    thousandths: 'duizendsten',
    degrees: 'graden',
    correlation: 'Modus / score',
    verdictStrong: 'sterke uitlijning',
    verdictPartial: 'gedeeltelijke uitlijning',
    verdictWeak: 'zwakke uitlijning',
    center: 'Centreren',
    fineTip: 'fijne sleeplijnen',
    wideEdge: 'brede compressie',
    crushJaw: 'gepaarde pletruggen',
    grid: 'Raster',
    exportImage: 'Exporteer weergave',
    exportFilename: 'gereedschapsspoor-vergelijkingsweergave.png',
    phaseFit: 'Fasepassing',
    rotationFit: 'Rotatiepassing',
    knownMark: 'Bekend testspoor',
    questionedMark: 'Betwist spoor',
    reliefGraph: 'Gedigitaliseerd micro-oppervlaktereliëf',
    visualMode: 'Visueel',
    visualVerdict: 'handmatige vergelijking',
    visualInterpretation: 'Alleen visuele uitlijning. Er wordt geen geautomatiseerde forensische conclusie berekend.',
    interpMatch: 'Demo-voorbeeld. Upload afbeeldingen om echte sporen te vergelijken.',
    interpPossible: 'Demo-voorbeeld. Pas de uitlijning aan of upload afbeeldingen.',
    interpMismatch: 'Demo-voorbeeld. Hercentreer of upload afbeeldingen.',
    disclaimer: 'Alleen visuele werkruimte.',
  },
  seo: [
    {
      type: 'title',
      text: 'Online Forensische Gereedschapssporen-Vergelijkingsmicroscoop',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Visuele werkruimte',
      title: 'Vergelijk betwiste en bekende gereedschapsspoorafbeeldingen in uw browser',
      html: 'Deze werkruimte voor de vergelijking van gereedschapssporen stelt u in staat om twee afbeeldingen te uploaden, ze in een gespleten vergelijkingsmicroscoopweergave te plaatsen en het betwiste spoor aan te passen tot kraslijnen, schraapsporen, drukmarges of microscopische krassen naast elkaar kunnen worden onderzocht. Het is ontworpen voor forensische studenten, docenten, rechercheurs en juridische teams die een duidelijke manier nodig hebben om de <strong>vergelijking tussen bekende en betwiste gereedschapssporen</strong> uit te leggen zonder speciale microscopiesoftware te installeren.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 uploads', label: 'bekende en betwiste afbeeldingen', icon: 'mdi:image-plus' },
        { value: 'gesplitst', label: 'vergelijkingsmicroscoopindeling', icon: 'mdi:compare-horizontal' },
        { value: 'uitlijning', label: 'regelaars voor verschuiving, rotatie en zoom', icon: 'mdi:axis-arrow' },
        { value: 'PNG-export', label: 'sla de vergelijking op', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'Wanneer deze werkruimte voor gereedschapsspoorvergelijking nuttig is',
      items: [
        'Uitleggen hoe vergelijkingsmicroscopen een bekend testspoor naast een betwist spoor plaatsen.',
        'Klassenvoorbeelden voorbereiden met echte gereedschapsspoorafbeeldingen of trainingsmateriaal.',
        'Uitleggen hoe uitlijning, schaal, rotatie, belichting en contrast de krasinterpretatie beïnvloeden.',
        'Een schone visuele illustratie maken voor casusnotities die de uitgelijnde weergave toont zonder een geautomatiseerde identificatie te claimen.',
        'De beeldkwaliteit beoordelen alvorens te beslissen of een spoor geschikt is voor een formeel laboratoriumonderzoek.',
      ],
    },
    {
      type: 'title',
      text: 'Gereedschapsspoorafbeeldingen online vergelijken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Begin met het laden van een <strong>bekend testspoor</strong> en een <strong>betwist spoor</strong>. Een bekend spoor wordt meestal onder gecontroleerde omstandigheden gemaakt met een specifiek gereedschap. Een betwist spoor is het spoor dat is veiliggesteld op een plaats delict, object, deurkozijn, slot of ander item waarvan de bron onbekend is. Het doel van de werkruimte is niet om automatisch de identiteit te bepalen, maar om de twee afbeeldingen in een nuttige visuele relatie te plaatsen, zodat de gebruiker de continuïteit en verschillen kan bestuderen.',
    },
    {
      type: 'paragraph',
      html: 'Zodra beide afbeeldingen zijn geladen, gebruikt u de splitsingsregelaar om meer of minder van elke zijde te tonen. Pas de horizontale verschuiving aan om de krassen in fase te brengen, en roteer vervolgens de betwiste afbeelding om de camerahoek of gereedschapshoek te compenseren. De zoom helpt wanneer de twee afbeeldingen met verschillende vergrotingen zijn genomen. Contrast en helderheid helpen om zwakke krassen of ondiepe sporen te onthullen, maar deze aanpassingen moeten worden gedocumenteerd omdat ze het getoonde uiterlijk van de afbeelding veranderen.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Wat de werkruimte u helpt te zien',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Een goede gespleten weergave maakt het gemakkelijker om te controleren of twee sporen een vergelijkbare visuele structuur delen na een zorgvuldige uitlijning.',
          points: ['Vergelijkbare kras- of spoorrichting', 'Continuïteit over meerdere naburige details', 'Schaal- en rotatieverschillen die correctie vereisen', 'Gebieden waar de spoorwaliteit goed genoeg is om te analyseren', 'Duidelijke klasseverschillen die de vergelijking vroegtijdig kunnen beëindigen'],
        },
        {
          title: 'Wat het niet kan bewijzen',
          icon: 'mdi:alert-circle-outline',
          description: 'Deze browsertool is geen gevalideerd forensisch identificatiesysteem en mag niet als zodanig worden gebruikt.',
          points: ['Geen geautomatiseerde conclusie over dezelfde bron', 'Geen toevallige overeenkomstwaarschijnlijkheid', 'Geen populatiefrequentie-schatting', 'Geen vervanging voor het onderzoek van het originele bewijsmateriaal', 'Geen vervanging voor de kwaliteitsborging van het laboratorium of collegiale toetsing'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Regelaar', 'Wat het verandert', 'Waarom het belangrijk is'],
      rows: [
        ['Bekende/testafbeelding upload', 'Laadt het controle- of referentiespoor.', 'De bekende zijde moet afkomstig zijn van een gedocumenteerd testspoor of trainingsexempel.'],
        ['Betwiste afbeelding upload', 'Laadt het spoor waarvan de bron onbekend is.', 'Deze zijde wordt verplaatst en aangepast om te zoeken naar een vergelijkbare oriëntatie.'],
        ['Splitsingsgreep', 'Verandert welk deel van elke afbeelding zichtbaar is.', 'Een verplaatsbare splitsing helpt om te controleren of lijnen visueel doorlopen over de grens.'],
        ['Horizontale verschuiving', 'Verplaatst de betwiste afbeelding naar links of rechts.', 'Kleine zijdelingse verschuivingen kunnen overeenkomstige krassen in of uit fase brengen.'],
        ['Rotatie', 'Roteert de betwiste afbeelding.', 'De hoek van het gereedschap, de camera of de montage kan hoekafwijkingen tussen de afbeeldingen veroorzaken.'],
        ['Zoom', 'Verandert de getoonde vergroting.', 'Verschillende beeldschalen moeten vergelijkbaar worden gemaakt voordat details worden beoordeeld.'],
        ['Contrast en helderheid', 'Passen de getoonde zichtbaarheid aan.', 'Krassen met een laag contrast kunnen gemakkelijker te zien worden, maar aanpassingen moeten worden genoteerd.'],
        ['Exporteer weergave', 'Slaat een PNG op van de huidige uitlijning.', 'Nuttig voor lesbesprekingen, aantekeningen, discussies of rapporten die de beperkingen duidelijk vermelden.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Beeldkwaliteit',
      title: 'Een slechte afbeelding kan een goede vergelijking onmogelijk maken',
      html: 'Gereedschapsspoorvergelijking hangt sterk af van de beeldkwaliteit. Onscherpte, schittering, compressie-artefacten, diepe schaduwen, perspectiefverkenning en zeer korte krassequenties kunnen allemaal misleidende visuele indrukken wekken. Als een spoor niet duidelijk kan worden georiënteerd, geschaald en belicht, is de juiste conclusie mogelijk dat de afbeelding ongeschikt is voor een zinvolle vergelijking.',
    },
    {
      type: 'summary',
      title: 'Praktische checklist voor het vergelijken van twee sporen',
      items: [
        'Bevestig welke afbeelding het betwiste spoor is en welke het bekende testspoor.',
        'Controleer of beide afbeeldingen hetzelfde algemene spoorstype, hetzelfde gereedschapscontactgebied en dezelfde oriëntatie tonen.',
        'Vermijd het vergelijken van losse, geïsoleerde lijnen; zoek naar sequenties van aangrenzende details over een nuttige lengte.',
        'Gebruik contrast en helderheid spaarzaam en noteer wanneer digitale beeldverbetering is toegepast.',
        'Exporteer de uitgelijnde weergave uitsluitend als een illustratie van wat werd weergegeven, niet als bewijs van identiteit.',
      ],
    },
    {
      type: 'title',
      text: 'Bekende versus betwiste gereedschapssporen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een betwist gereedschapsspoor wordt meestal veiliggesteld van een voorwerp dat bij een incident betrokken is, zoals een breekijzerspoor op een deur, een snede in een kabel, een kras op metaal of een deuk in een zachte ondergrond. Een bekend spoor wordt gemaakt met een verdacht gereedschap onder gecontroleerde omstandigheden. In formeel forensisch onderzoek beoordelen onderzoekers eerst of de klassekenmerken consistent zijn voordat ze tijd besteden aan fijne krasdetails. Als de klassekenmerken niet overeenkomen, is microscopische gelijkenis in een klein gebied niet voldoende om een verband aan te tonen.',
    },
    {
      type: 'paragraph',
      html: 'De browserwerkruimte is bewust conservatief. Het helpt u afbeeldingen uit te lijnen en visuele details te bespreken, maar modelleert geen gereedschapsslijtage, subklassekenmerken, substraatdeformatie, fabricagesporen, beslissingsgrenzen van onderzoekers, meetonzekerheid of foutenpercentages. Een verantwoorde workflow behandelt de geëxporteerde afbeelding als communicatiemiddel, niet als een identificatieresultaat.',
    },
    {
      type: 'proscons',
      title: 'Sterke punten en beperkingen van online gereedschapsspoorvergelijking',
      items: [
        { pro: 'Snelle manier om twee afbeeldingen te laden en de uitlijning te controleren zonder desktopsoftware te installeren.', con: 'De browserweergave is geen gekalibreerde forensische vergelijkingsmicroscoop.' },
        { pro: 'Handig om te leren hoe gespleten weergave en oriëntatie beïnvloeden wat de gebruiker ziet.', con: 'Beeldverbetering kan de zichtbaarheid verbeteren, maar kan ook het uiterlijk van kenmerken veranderen.' },
        { pro: 'Geëxporteerde PNG-bestanden zijn handig voor aantekeningen, discussies en visuele verklaringen.', con: 'Een geëxporteerde weergave bewaart niet de volledige bewijscontext, metadata of de bewijsketen.' },
        { pro: 'Werkt met echte door de gebruiker geüploade afbeeldingen in plaats van alleen synthetische sporen.', con: 'De tool kan niet bepalen of twee sporen van hetzelfde gereedschap afkomstig zijn.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Betwist spoor', definition: 'Een spoor dat is veiliggesteld op een plaats delict of van een voorwerp waarvan de bron onbekend is.' },
        { term: 'Bekend testspoor', definition: 'Een gecontroleerd spoor gemaakt met een specifiek gereedschap ter vergelijking met het betwiste spoor.' },
        { term: 'Kras (stria)', definition: 'Een microscopische lijn of groef die ontstaat wanneer het oppervlak van een gereedschap over een ander materiaal glijdt.' },
        { term: 'Klassekenmerken', definition: 'Eigenschappen die gedeeld worden door een groep gereedschappen, zoals breedte, algemene vorm of gereedschapstype.' },
        { term: 'Individuele kenmerken', definition: 'Fijne oppervlaktedetails die ontstaan door fabricage, gebruik, schade of slijtage.' },
        { term: 'Subklassekenmerken', definition: 'Kenmerken die gedeeld worden door een subgroep van gereedschappen als gevolg van productieprocessen; ze kunnen broninterpretatie bemoeilijken.' },
        { term: 'Geschiktheid', definition: 'Een oordeel of een spoor voldoende kwaliteit en hoeveelheid details bevat om vergelijking te ondersteunen.' },
      ],
    },
    {
      type: 'tip',
      title: 'Goede zoektermen waar deze pagina op is ontworpen',
      html: 'Gebruikers die op zoek zijn naar dit type werkruimte zoeken vaak naar termen als <strong>gereedschapssporen-vergelijkingsmicroscoop online</strong>, <strong>forensische krassenvergelijking</strong>, <strong>bekend vs betwist gereedschapsspoor</strong>, <strong>gereedschapssporen vergelijken van afbeeldingen</strong> en <strong>forensische vergelijkingsmicroscoopsimulator</strong>. De pagina is opgebouwd rond deze reële taken: uploaden, uitlijnen, onderzoeken, documenteren en beperkingen begrijpen.',
    },
    {
      type: 'table',
      headers: ['Veelgestelde gebruikersvraag', 'Kort antwoord'],
      rows: [
        ['Kan ik mijn eigen gereedschapsspoorafbeeldingen uploaden?', 'Ja. De tool is ontworpen rond door de gebruiker geüploade bekende en betwiste afbeeldingen.'],
        ['Bepaalt de app of beide sporen overeenkomen?', 'Nee. Het ondersteunt alleen visuele uitlijning en trekt geen forensische bronconclusie.'],
        ['Waarom beweegt de betwiste afbeelding in plaats van beide?', 'Het stabiel houden van de bekende zijde maakt het gemakkelijker om te documenteren hoe de betwiste afbeelding is aangepast.'],
        ['Kan ik het gebruiken voor vuurwapen- of hulssporen?', 'Het kan helpen om concepten van beelduitlijning te demonstreren, maar vergelijking van vuurwapens en hulzen vereist specifieke procedures en gevalideerd onderzoek.'],
        ['Kan ik de geëxporteerde PNG in mijn aantekeningen opnemen?', 'Ja, mits het duidelijk wordt beschreven als een illustratieve weergave die is gemaakt met behulp van handmatige regelaars.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische waarschuwing',
      title: 'Gebruik voorzichtige taal bij het beschrijven van gereedschapsspoorvergelijkingen',
      html: 'Vermijd het trekken van een sterkere conclusie uit een visuele uitlijning dan het bewijs toelaat. De juiste formulering hangt af van het rechtsgebied, het laboratoriumbeleid, validatie, de beeldkwaliteit, de beoordeling door onderzoekers en de context van de casus. Deze online tool moet worden beschreven als een visueel hulpmiddel bij vergelijking, niet als een gevalideerde methode voor het individualiseren van een gereedschap.',
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
