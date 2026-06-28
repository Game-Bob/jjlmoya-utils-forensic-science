import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'brandmonster-ursprungsanalysator';
const title = 'Brandmönster ursprungsanalysator';
const description = 'Kartlägg V-mönster, djup förkolning, sot-skuggor och renbränningsindikatorer på en rumsplan och projicera brandspridningsvektorer för att uppskatta det mest sannolika ursprungsområdet.';

const howTo = [
  {
    name: 'Importera en platsplan',
    text: 'Dra en planbild till arbetsytan eller läs in den från disk innan du placerar bevisvektorer.',
  },
  {
    name: 'Klicka för att öppna den radiella bevisväljaren',
    text: 'Placera pekaren över ett brännmärke, öppna den kontextuella radiella menyn och välj indikatortyp direkt på kartan.',
  },
  {
    name: 'Dra för att finjustera vektorer och observera konvergens',
    text: 'Förläng varje spridningsvektor med duk-snappning och observera hur sannolikhetsfältet räknas om i realtid när bevisen ackumuleras.',
  },
  {
    name: 'Exportera den tekniska ögonblicksbilden',
    text: 'Generera en strukturerad rapport med ursprungskoordinater, konfidens, varians, lagerstatus och den kompletta vektormängden för senare granskning.',
  },
];

const faq = [
  {
    question: 'Kan brännmönster bevisa den exakta punkten där en brand startade?',
    answer: 'Nej. Brandmönster kan hjälpa till att generera och testa ursprungshypoteser, men ventilation, släckning, bränslebelastning, övertändning och störningar efter brand kan förvränga mönster. Verklig ursprungsbestämning kräver en systematisk undersökning.',
  },
  {
    question: 'Varför är V-mönster viktiga vid brandutredning?',
    answer: 'V-mönster återspeglar ofta uppåt- och utåtriktad flamspridning på vertikala ytor. De kan peka mot ett lägre ursprungsområde, men måste jämföras med andra bevis innan slutsatser dras.',
  },
  {
    question: 'Vad indikerar djup förkolning?',
    answer: 'Djup förkolning kan indikera längre uppvärmning, högre värmeflöde eller bränsleeffekter. Det är användbar kontext, men markerar inte automatiskt ursprunget eftersom material förkolnar i olika takt.',
  },
  {
    question: 'Varför använda flera vektorer istället för en pil?',
    answer: 'Ett enda mönster kan vara missvisande. Flera oberoende vektorer minskar påverkan från en skadad vägg, ett enskilt bränslepaket eller en enskild ventilationsväg.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Interaktiv kriminalteknisk arbetsyta för att rita brandspridningsvektorer',
    vPattern: 'V-mönster',
    deepChar: 'Djup förkolning',
    sootShadow: 'Sotskugga',
    cleanBurn: 'Renbränning',
    loadPlan: 'Ladda plan',
    generateReport: 'Generera rapport',
    pointerLabel: 'Pekare',
    resetVectors: 'Återställ',
    estimatedOrigin: 'Uppskattat ursprung',
    visibleLayers: 'Synliga bevislager',
    vectorsLabel: 'VEKTORER',
    confidenceLabel: 'KONFIDENS',
    varianceLabel: 'VARIANS',
    modeLabel: 'LÄGE',
    guideSummary: 'Hur du använder detta verktyg',
    flowPanelTitle: 'Arbetsflöde',
    legendPanelTitle: 'Teckenförklaring',
    readoutPanelTitle: 'Resultatpanel',
    flow1Kicker: 'STEG 1',
    flow1Icon: '1',
    flow1Title: 'Ladda',
    flow1Text: 'Ladda upp platsplanen',
    flow2Kicker: 'STEG 2',
    flow2Icon: '2',
    flow2Title: 'Välj spår',
    flow2Text: 'Klicka på brännmärket',
    flow3Kicker: 'STEG 3',
    flow3Icon: '3',
    flow3Title: 'Dra vektor',
    flow3Text: 'Rikta brandspridning',
    flow4Kicker: 'STEG 4',
    flow4Icon: '4',
    flow4Title: 'Läs resultat',
    flow4Text: 'Kontrollera sidfot + exportera',
    basicsTitle: 'Vad du bör göra först',
    basicsIntro: 'Ladda en tydlig plan, markera endast mönster du kan motivera och sprid vektorer över olika ytor istället för att upprepa samma spår.',
    indicatorsTitle: 'Vad varje bevistyp betyder',
    vPatternShort: 'Väggbränna öppnar sig uppåt',
    vPatternExplain: 'Ett V-mönster är den välkända uppåt- och utåtriktade brännformen som ofta ses på en vägg. Det kan antyda att värme och lågor steg från ett lägre område, men det är inte ett automatiskt bevis för den exakta ursprungspunkten.',
    deepCharShort: 'Område bränt hårdare eller längre',
    deepCharExplain: 'Djup förkolning innebär att ett material verkar mer bränt, svärtat eller förbrukat i ett område än runt omkring. Det kan indikera längre eller intensivare uppvärmning, men bränsletyp och materialtjocklek spelar stor roll.',
    sootShadowShort: 'Rök blockerad eller omdirigerad',
    sootShadowExplain: 'En sotskugga är ett skyddat eller annorlunda mörknat område som antyder att ett föremål, en yta eller ett luftflöde förändrade hur sot avsattes. Det kan hjälpa till att rekonstruera vad som fanns eller hur rök rörde sig.',
    cleanBurnShort: 'Mindre sot på grund av värme eller luftflöde',
    cleanBurnExplain: 'Renbränning är ett område där sot verkar ljusare, borttaget eller frånvarande eftersom värme, ventilation eller direkt flampåverkan påverkade det annorlunda. Det är användbart, men inte varje rent område markerar ursprunget.',
    resultsTitle: 'Hur du läser resultatet',
    resultsIntro: 'Använd sidfoten som en snabb hälsokontroll för din kartläggning, inte som en slutgiltig kriminalteknisk slutsats.',
    resultsPoint1: 'Hur många bevislinjer som är aktiva.',
    resultsPoint2: 'Hur starkt de aktiva vektorerna stämmer överens.',
    resultsPoint3: 'Hur brett ursprungsområdet fortfarande är.',
    resultsPoint4: 'Vad verktyget förväntar sig att du gör härnäst.',
    awaitingVector: 'Väntar på vektor',
    selectIndicator: 'Välj indikator',
    refiningVector: 'Finjusterar vektor',
    needsMoreVectors: 'Fler vektorer behövs',
    wideArea: 'Brett ursprungsområde',
    focusedArea: 'Fokuserat ursprungsområde',
    dropPlan: 'Släpp planbild eller klicka för att ladda upp',
    needsMoreVectorsText: 'Rita minst två tydliga riktningspilar. Tre eller fler oberoende observationer gör vanligtvis konvergensen mycket lättare att tolka.',
    wideAreaText: 'De projicerade linjerna skär varandra, men spridningen är fortfarande bred. Jämför på en verklig plats ventilation, bränslebelastning, släckningseffekter och vittnesinformation innan du avgränsar ursprunget.',
    focusedAreaText: 'Vektorerna konvergerar mot ett kompakt område. Behandla detta som en stark undervisningssignal för utveckling av ursprungshypoteser, inte som en slutgiltig kriminalteknisk slutsats.',
    disclaimer: 'Endast utbildningssimulering. Verklig utredning av brandorsak och brandursprung bör följa accepterade riktlinjer, säkerhetsprotokoll på plats, dokumentationsstandarder och kvalificerad expertgranskning.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktiv brandursprungsanalys från brännmönstervektorer',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Undervisningssimulator',
      title: 'Vad denna brandmönster ursprungsanalysator lär ut',
      html: 'Detta webbläsarverktyg demonstrerar hur utredare resonerar från fysiska brandmönster till ett sannolikt <strong>ursprungsområde</strong>. Användare kartlägger synliga bevis, ritar riktade spridningsvektorer och observerar hur de projicerade linjerna konvergerar eller divergerar. Modellen är avsiktligt pedagogisk: den lär ut geometri och mönstertolkning, inte juridisk orsaksbestämning.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 lager', label: 'V-mönster, förkolning, sot, renbränning', icon: 'mdi:layers-triple' },
        { value: '2D-plan', label: 'strukturell rumskarta', icon: 'mdi:floor-plan' },
        { value: '3+ pilar', label: 'rekommenderade observationer', icon: 'mdi:vector-line' },
        { value: '0-100%', label: 'konfidensindata', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Ett disciplinerat arbetsflöde för brandmönstertolkning',
      items: [
        'Börja med säkerhet, platsbevarande, foton, skisser och systematisk dokumentation innan du tolkar mönster.',
        'Separera mönstertyper så att V-formade skador, förkolningsdjup, sotavsättning och renbränning inte reduceras till ett enda antagande.',
        'Rita riktningsindikatorer endast där det fysiska mönstret stöder en försvarbar spridningsriktning.',
        'Leta efter konvergens bland oberoende observationer istället för att förlita dig på den mest dramatiska skadan.',
        'Använd det uppskattade ursprungsområdet som en hypotes att testa mot bränslen, antändningskällor, ventilation, elektriska bevis och vittnesmål.',
      ],
    },
    {
      type: 'table',
      headers: ['Mönster', 'Potentiellt värde', 'Huvudsaklig försiktighet'],
      rows: [
        ['V-mönster', 'Kan antyda uppåt- och utåtriktad flamspridning från ett lägre område.', 'Kan förändras av ventilation, övertändning, vägggeometri och släckning.'],
        ['Djup förkolning', 'Kan indikera långvarig värmeexponering eller intensiv förbränning.', 'Bränsletyp och materialtjocklek påverkar förkolningsdjupet starkt.'],
        ['Sotskugga', 'Kan avslöja skyddade områden, objektplacering eller luftflödeseffekter.', 'Flyttade möbler eller släckningsaktivitet kan förändra tolkningen.'],
        ['Renbränning', 'Kan visa hög värme, ventilation eller förbränning i sent skede.', 'Identifierar inte automatiskt det först antända materialet.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bättre ursprungshypoteser',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'De bästa hypoteserna förklarar flera observationer samtidigt.',
          points: ['Oberoende vektorer konvergerar', 'Bevis passar kända ventilationsvägar', 'Bränslepaket är redovisade', 'Alternativa ursprung testas aktivt'],
        },
        {
          title: 'Svaga ursprungshypoteser',
          icon: 'mdi:alert-circle-outline',
          description: 'Svaga hypoteser förlitar sig ofta på ett enda mönster utan att testa förvrängningsfaktorer.',
          points: ['Ett dramatiskt förkolat område behandlas som bevis', 'Övertändning ignoreras', 'Släckskador är inte dokumenterade', 'Antändningskällbevis antas'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hur vektormodellen fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Varje pil behandlas som en projicerad linje för brandspridning. Estimatorn beräknar parvisa linjeskärningar, filtrerar punkter som faller inom en rimlig plangräns, genomsnittar de återstående skärningarna och rapporterar en radie baserad på spridningen av dessa skärningar. En liten radie med flera vektorer ger en starkare konvergenssignal. Skärningsmodellen fungerar genom att lösa de parametriska ekvationerna för två linjer som sträcker sig från sina respektive bevismarkörer. När två vektorer pekar mot ett delat område bidrar deras teoretiska skärningspunkt med en koordinat till medelvärdesgruppen. Ju fler oberoende vektorer som deltar, desto mer kan estimatorn filtrera bort skärningar som ligger långt från huvudklustret, vilket effektivt minskar påverkan från en enskild observation som kan vara dåligt orienterad eller misstolkad.',
    },
    {
      type: 'paragraph',
      html: 'Denna geometriska ansats speglar en klassrums-skitssövning: den hjälper studenter att se varför ursprungsanalys förbättras när observationer kommer från olika ytor och mönstertyper. Den blottlägger också ett vanligt problem: pilar kan skära varandra även när den underliggande tolkningen är dålig, så det matematiska centrumet får aldrig ersätta brandvetenskaplig bedömning. I en verklig utredning jämför praktiker det plottade resultatet med ventilationsvägar, bränslebelastningsfördelning, strukturella skador och vittnesmål innan de behandlar någon koordinat som troligt ursprung. Verktyget uppmuntrar denna vana genom att visa varians bredvid den uppskattade punkten och påminna användarna om att ett tätt skärningskluster endast är så starkt som kvaliteten på de observationer som producerade det.',
    },
    {
      type: 'paragraph',
      html: 'Utöver den grundläggande skärningslogiken tillämpar estimatorn en gränsrestriktion så att skärningar som ligger långt utanför rumsplanen utesluts. Detta förhindrar att avvikande värden drar det genomsnittliga centrumet mot omöjliga platser. Den slutliga radien representerar standardavvikelsen för de återstående skärningskoordinaterna, vilket ger ett direkt mått på hur konsekvent de aktiva vektorerna överensstämmer. En radie under tio procent av planspannet indikerar stark konvergens. En radie som överstiger en fjärdedel av planen signalerar att bevisen ännu inte stöder ett fokuserat ursprung och att fler eller bättre observationer behövs innan slutsatser dras.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ursprungsområde', definition: 'Det allmänna område där tillgängliga bevis tyder på att branden började.' },
        { term: 'V-mönster', definition: 'Ett brandmönster som ofta uppträder som uppåt- och utåtriktad skada på en vertikal yta.' },
        { term: 'Renbränning', definition: 'Ett ljusare eller renare område som uppstår när sot bränns bort eller inte avsätts under hög värme eller luftflöde.' },
        { term: 'Sotskugga', definition: 'Ett skyddat eller annorlunda avsatt sotområde som kan bevara information om föremål, luftflöde eller värmeexponering.' },
        { term: 'Vektorkonvergens', definition: 'Klustringen av projicerade riktningsindikatorer runt ett gemensamt område.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Kriminalteknisk försiktighet',
      title: 'Omvandla inte konvergens till säkerhet',
      html: 'Ett tätt skärningskluster är endast användbart när observationerna är giltiga. Verkliga utredningar måste beakta ventilation, övertändning, bränslepaket, elsystem, apparatbevis, vittnesmål, släckning och platsstörning.',
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
