import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'becke-linje-glas-brytningsindex-simulator';
const title = 'Forensisk simulator för Becke linje och glasbrytningsindex';
const description = 'Simulera Becke-linjemetoden för forensisk glasjämförelse genom att värma en immersionsvätska, matcha brytningsindex och se hur den ljusa halon försvinner.';

const howTo = [
  {
    name: 'Välj en glasprofil under utredning',
    text: 'Välj en vanlig glasreferensprofil såsom sodaglas, borosilikatglas, blykristall eller härdat fönsterglas.',
  },
  {
    name: 'Justera temperaturen på värmebordet',
    text: 'Dra i temperaturreglaget för att ändra brytningsindexet för den virtuella immersionsvätskan.',
  },
  {
    name: 'Observera Becke-linjens rörelse',
    text: 'Använd fokusriktningskontrollen för att se om den ljusa linjen rör sig inåt, utåt eller nästan försvinner vid matchningspunkten.',
  },
  {
    name: 'Avläs indexdifferensen',
    text: 'Jämför vätskans RI, glasets RI, delta RI och matchningsprocent för tolkningen varför halon blir svag nära indexöverensstämmelse.',
  },
];

const faq = [
  {
    question: 'Vad är Becke-linjen vid forensisk glasanalys?',
    answer: 'Becke-linjen är en ljus halo (ljusring) som ses nära gränsen mellan ett glasfragment och en immersionsvätska när deras brytningsindex skiljer sig åt. Dess rörelse under fokusering hjälper till att avgöra vilket material som har det högre brytningsindexet.',
  },
  {
    question: 'Varför spelar uppvärmning av immersionsvätskan roll?',
    answer: 'Brytningsindexet för många immersionsvätskor minskar när temperaturen stiger. Genom att värma vätskan tills dess index matchar glasets bleknar gränskontrasten och fragmentets kant blir svår att se.',
  },
  {
    question: 'Kan brytningsindex ensamt identifiera en glaskälla?',
    answer: 'Nej. RI kan stödja klassjämförelse och uteslutning, mas forensisk källtolkning tar också hänsyn till elementsammansättning, tjocklek, färg, frakturkontext, kontroller, osäkerhet och validerade laboratorieprocedurer.',
  },
  {
    question: 'Vad betyder det när Becke-linjen försvinner?',
    answer: 'Det betyder att vätskan och glaset har mycket liknande brytningsindex under de simulerade förhållandena. I verklig mikroskopi bedöms försvinnandet med kalibrerad temperaturkontroll och referensmaterial.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Virtuell mikroskopvy som visar ett glasfragment i immersionsvätska',
    units: 'Temperaturenhetssystem',
    metric: 'Metrisch',
    imperial: 'Imperial',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Glasreferens',
    sodaLime: 'Sodaglas (förpackningsglas)',
    borosilicate: 'Borosilikatglas (laboratorieglas)',
    leadCrystal: 'Blykristall (dekorationsglas)',
    tempered: 'Härdat fönsterglas',
    stageTemperature: 'Värmebordstemperatur',
    focusDirection: 'Fokusriktning',
    focusRaised: 'Höj fokus',
    focusLowered: 'Sänk fokus',
    liquidRi: 'Vätske-RI',
    glassRi: 'Glas-RI',
    deltaRi: 'Delta-RI',
    matchMeter: 'RI-matchning',
    canvasHalo: 'synlig Becke-halo',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'kant nästan matchad',
    interpMatched: 'Gränsen är nära optisk matchning. I ett verkligt Becke-linjetest är detta det område där halon blir svag och fragmentets kant är svårast att lokalisera.',
    interpGlassHigher: 'Glaset har det högre brytningsindexet. Med höjt fokus indikerar Becke-linjens beteende att ljuset koncentreras mot glassidan av gränsen.',
    interpLiquidHigher: 'Immersionsvätskan har det högre brytningsindexet. Halon skiftar mot vätskesidan tills temperaturen för vätskans index närmare glaset.',
    disclaimer: 'Endast pedagogisk simulering. Verklig forensisk glasjämförelse kräver kalibrerad utrustning för brytningsindex, kända standarder, osäkerhetsrapportering och kvalificerad tolkning.',
  },
  seo: [
    {
      type: 'title',
      text: 'Brytningsindextest med Becke-linje för forensiskt glas',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Undervisningssimulator',
      title: 'Vad denna glas RI simulator visar',
      html: 'Denna simulator visar varför um glasfragment blir mer eller mindre synligt i immersionsolja när vätskans brytningsindex närmar sig glasets brytningsindex. Den är byggd för studenter i forensisk vetenskap som lär sig <strong>Becke-linjemikroskopi</strong>, matchning av RI på värmebord och gränserna för glasjämförelsebevis.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n glas - n vätska', label: 'visad indexkontrast', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'värmebordsintervall', icon: 'mdi:thermometer' },
        { value: '4', label: 'glasprofiler', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'konverterbara temperaturenheter', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktisk checklista för observation av Becke linje',
      items: [
        'Använd ett rent, litet glasfragment helt nedsänkt i en lämplig brytningsindexvätska.',
        'Fokusera något över och under gränsen och titta på vilken sida den ljusa linjen verkar röra sig mot.',
        'Höj temperaturen långsamt nära den uppskattade matchningspunkten eftersom linjen kan blekna över ett snävt intervall.',
        'Registrera temperatur, vätsketyp, kalibreringsstandard, observerat matchningsbeteende och osäkerhet.',
        'Behandla RI som klassbevis: en missmatchning kan utesluta, medan en matchning kräver ytterligare kontext.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vad en RI jämförelse kan stödja',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Brytningsindex kan hjälpa till att jämföra glasfragment under utredning med känt referensglas under kontrollerade förhållanden.',
          points: ['Jämförelse av klasselement', 'Uteslutning när RI skiljer sig tydligt', 'Undersökning före elementaranalys', 'Undervisning i optiskt beteende vid gränser'],
        },
        {
          title: 'Vad RI inte kan bevisa ensamt',
          icon: 'mdi:alert-circle-outline',
          description: 'Ett matchande RI identifierar inte unikt en ruta, flaska, fordonsruta eller källa på en brottsplats.',
          points: ['Ingen individuell källattributering i sig', 'Ingen rekonstruktion utan scenkontext', 'Ersätter inte kontroller', 'Ingen juridisk slutsats från en webbläsarmodell'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Användarfråga', 'Mikroskopikoncept', 'Noggrant svar'],
      rows: [
        ['Varför rör sig den ljusa kanten?', 'Brytning vid en gräns mellan två brytningsindex.', 'Becke-linjen tenderar att röra sig mot materialet med högre brytningsindex när fokus höjs.'],
        ['Varför försvinner kanten?', 'Indexmatchning.', 'När glas och vätske-RI är nästan lika, sjunker gränskontrasten och halon blir svag.'],
        ['Varför värma vätskan?', 'Termisk RI-koefficient.', 'Den simulerade vätskans RI minskar med temperaturen, vilket möjliggör matchning mot olika glastyper.'],
        ['Är en matchning avgörande?', 'Klassbevisbegränsning.', 'En matchning stöder endast överensstämmelse; många glasobjekt kan dela ett liknande RI.'],
      ],
    },
    {
      type: 'title',
      text: 'Hur simuleringsmodellen fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Modellen tilldelar varje glasprofil ett referensbrytningsindex och behandlar immersionsvätskan som ett temperaturkänsligt medium. När värmebordet värms upp minskar vätskans index med en fast termisk koefficient. Simulatorn beräknar sedan skillnaden mellan glasets RI och vätskans RI, och använder den skillnaden för att styra halostyrka, haloförskjutning, matchningsprocent och tolkningens meddelande.',
    },
    {
      type: 'paragraph',
      html: 'Det visuella mikroskopfältet är avsiktligt kvalitativt. Det försöker inte spåra varje optisk väg i detalj. Istället bevarar det det väsentliga pedagogiska förhållandet: stark RI-kontrast ger en ljus gräns; lägre kontrast ger en svag gräns; och nära matchningspunkten kan glasets kant se ut att försvinna i vätskan.',
    },
    {
      type: 'paragraph',
      html: 'I professionella forensiska laboratorier utförs kalibrering av värmebordet med hjälp av referensglasprover med känt brytningsindex. Eftersom brytningsindexet för immersionsvätskan varierar förutsägbart med temperaturen (vanligtvis betecknat som dn/dT), gör den exakta temperaturen vid vilken Becke-linjen försvinner det möjligt för forskaren att beräkna glasets brytningsindex med upp till fyra decimalers noggrannhet. Denna simulator modellerar detta temperaturberoende beteende med en linjär formel, vilket gör det möjligt för studenter att öva på att hitta den exakta matchningspunkten genom att noggrant styra värmebordet.',
    },
    {
      type: 'paragraph',
      html: 'Vid analys av glasbevis betraktas brytningsindex som klassbevis. Även om ett matchande brytningsindex mellan ett fragment från en brottsplats och en misstänkt persons kläder överensstämmer med en gemensam källa, identifierar det inte källan unikt eftersom många glasföremål delar identiska brytningsindexvärden. Därför måste forensiska experter tolka matchande resultat försiktigt och rapportera matchningen i termer av konsistens, samtidigt som de betonar att en slutgiltig källattributering inte är möjlig baserat enbart på optiska egenskaper.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Brytningsindex', definition: 'Ett mått på hur starkt ett material böjer ljuset jämfört med vakuum.' },
        { term: 'Immersionsvätska', definition: 'En vätska med kända optiska egenskaper som används för att omge ett fragment under mikroskopisk RI-jämförelse.' },
        { term: 'Becke-linje', definition: 'Den ljusa linjen eller halon som ses vid en gräns när två transparenta material har olika brytningsindex.' },
        { term: 'Matchningspunkt', definition: 'Det temperaturområde där immersionsvätskan och glaset har nästan samma brytningsindex.' },
        { term: 'Klassbevis', definition: 'Bevis som kan associera ett föremål med en grupp av möjliga källor snarare än en unik källa.' },
      ],
    },
    {
      type: 'tip',
      title: 'Tolkningstips för studenter',
      html: 'I glasbevis är en tydlig RI-missmatchning ofta starkare än en matchning eftersom den kan utesluta en föreslagen källa. En matchning är användbar, men dess styrka beror på populationsdata, mätprecision, elementsammansättning och fallkontext.',
    },
    {
      type: 'proscons',
      title: 'Styrkor och begränsningar med Becke linjeglas RI testning',
      items: [
        { pro: 'Snabb, visuell och utmärkt för att lära ut jämförelse av transparenta material.', con: 'Observatörens bedömning och fokuseringsteknik kan påverka linjens uppenbara rörelse.' },
        { pro: 'Temperaturmatchning kan uppskatta RI med användbar precision när den kalibreras.', con: 'Termisk kontroll, vätskeåldring, kontaminering och standarder är viktiga i verkligt arbete.' },
        { pro: 'Användbar för att utesluta glasfragment med tydligt olika optiska egenskaper.', con: 'Kan inte individualisera en källa utan bredare analytisk och kontextuell bevisning.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensisk försiktighet',
      title: 'Håll slutsatsen proportionerlig',
      html: 'En Becke-linjesimulering i en webbläsare är ett inlärningsverktyg, inte en laboratoriemetod. Formell tolkning av glasbevis bör baseras på validerade instrument, skriftliga procedurer, kalibreringsprotokoll, osäkerhetsuppskattningar, kollegial bedömning och rapporteringsspråk som är lämpligt för jurisdiktionen.',
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
