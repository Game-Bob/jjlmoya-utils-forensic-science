import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'trekroppsproblem-simulator';
const title = 'Trekroppsproblem Simulator';
const description = 'Simulera tre gravitationskroppar i ett tvådimensionellt plan med redigerbara massor, hastighetsvektorer, spår och stabila eller kaotiska förinställningar.';

const howTo = [
  {
    name: 'Välj en orbital förinställning',
    text: 'Börja med åttaslingbanan för en stabil referens, Lagranges triangel för en roterande jämvikt eller slangbella-förinställningen för ett synbart kaotiskt möte.',
  },
  {
    name: 'Justera massor och hastighetsvektorer',
    text: 'Använd reglagen för varje kropp för att ändra massa och initiala hastighetskomponenter. Små förändringar kan bevara ett mönster, deformera det eller förstöra det helt.',
  },
  {
    name: 'Läs diagnostiken',
    text: 'Övervaka total energi, närmaste och största avstånd samt masscentrum för att förstå om den numeriska banan förblir bunden eller driver isär.',
  },
];

const faq = [
  {
    question: 'Vad är trekroppsproblemet?',
    answer: 'Trekroppsproblemet undersöker hur tre massor rör sig när varje kropp gravitationellt attraherar de två andra. Till skillnad från tvåkroppsproblemet finns det ingen allmän sluten formel som löser varje möjlig konfiguration, så de flesta praktiska fall utforskas med numerisk integration.',
  },
  {
    question: 'Varför är trekroppsbanor instabila?',
    answer: 'Många trekroppssystem är känsliga för initiala villkor. En liten förändring i hastighet, position eller massa ändrar tidpunkten för nära möten, och dessa möten kan dramatiskt utbyta energi. Resultatet är ett system som kan förbli bundet ett tag och sedan plötsligt kasta ut en kropp.',
  },
  {
    question: 'Vad visar åttasling-förinställningen?',
    answer: 'Åttasling-förinställningen är en berömd periodisk lösning för tre lika massor. Varje kropp följer samma väg med en fasförskjutning, vilket visar att trekroppsproblemet kan innehålla eleganta stabila öar inom ett mycket större kaotiskt landskap.',
  },
  {
    question: 'Är detta en fysikaliskt exakt astronomisimulator?',
    answer: 'Detta verktyg använder en mjukad newtonmodell och en symplektisk hastighets-Verlet-steg så att rörelsen känns trogen och stabil för inlärning. Det är designat för interaktiv utforskning snarare än högprecisionsepemeridprediktion.',
  },
  {
    question: 'Hur ska jag tolka total energi?',
    answer: 'Negativ total energi indikerar vanligtvis ett bundet system, medan energi nära noll kan göra flykt lättare. I en numerisk simulering varnar stor energidrift också för att tidssteget eller mötesgeometrin belastar integratorn.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Laboratorium för gravitationskaos',
    canvasLabel: 'Interaktiv tvådimensionell trekroppsbanas canvas',
    presetsLabel: 'Orbitala förinställningar',
    figureEightPreset: 'Åttaslinga',
    lagrangePreset: 'Lagranges triangel',
    slingshotPreset: 'Slangbella',
    pauseButton: 'Paus',
    playButton: 'Spela',
    resetButton: 'Återställ',
    speedLabel: 'Simuleringshastighet',
    trailLabel: 'Spårlängd',
    massLabel: 'Massa',
    velocityXLabel: 'Hastighet X',
    velocityYLabel: 'Hastighet Y',
    energyLabel: 'Total energi',
    separationLabel: 'Separationsintervall',
    centerMassLabel: 'Masscentrum',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktiv trekroppsproblem-simulator för orbitalt kaos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Trekroppsproblemet är en av de tydligaste demonstrationerna av att enkla lagar kan producera komplicerad rörelse. Newtons gravitation ger en kompakt kraftregel, men så snart en tredje massiv kropp ansluter sig till systemet, omformar varje bana kontinuerligt de två andra. Denna simulator låter dig experimentera direkt med den instabiliteten: välj en känd konfiguration, justera massor och hastighetsvektorer och observera om kropparna bildar en återkommande bana, en roterande triangel eller en kaotisk spridningshändelse.',
    },
    {
      type: 'title',
      text: 'Vad förinställningarna visar',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Förinställning', 'Fysisk idé', 'Vad att titta efter'],
      rows: [
        ['<strong>Åttaslinga</strong>', 'En periodisk lösning med lika massor där alla tre kroppar delar samma slinga.', 'Banans organisation bevaras endast när symmetri och hastighetsbalans noggrant upprätthålls.'],
        ['<strong>Lagranges triangel</strong>', 'Tre kroppar upptar en liksidig triangel som roterar runt masscentrum.', 'Massbalans och tangentiell hastighet hindrar triangeln från att kollapsa inåt.'],
        ['<strong>Slangbella</strong>', 'Ett nära möte överför energi mellan kropparna.', 'En kropp kan vinna fart medan en annan blir mer bunden, vilket avslöjar varför kaotiska utkastningar inträffar.'],
      ],
    },
    {
      type: 'title',
      text: 'Varför små förändringar spelar roll',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I en tvåkroppsbana ger masscentrum och den orbitala ellipsen en stabil geometrisk bild. I ett trekroppssystem fungerar nära passager som gravitationella förhandlingar: en kropp kan låna orbital energi, ändra riktning kraftigt eller omvandla en ordnad slinga till en spridningshändelse. Den känsligheten är varför verkliga astrofysiska system som trippelstjärnor, planet-måne-möten och planetesimaler i tidiga solsystem ofta kräver numerisk integration snarare än en enda enkel formel.',
    },
    {
      type: 'title',
      text: 'Hur man använder diagnostiken',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Total energi</strong> hjälper dig bedöma om systemet är bundet och om den numeriska integrationen förblir stabil.',
        '<strong>Separationsintervall</strong> visar de närmaste och avlägsnaste pardistanserna, vilket gör nästan kollisioner och utkastningar lätta att upptäcka.',
        '<strong>Masscentrum</strong> bör förbli relativt stabilt när det initiala rörelsemängden är balanserad; drift tyder på en avsiktligt asymmetrisk inställning eller en ändrad hastighetsvektor.',
        '<strong>Spårlängd</strong> avslöjar långsiktig struktur: korta spår betonar den aktuella interaktionen, medan långa spår blottar upprepande slingor och långsam orbital precession.',
      ],
    },
    {
      type: 'title',
      text: 'Numerisk modell som används i verktyget',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulatorn använder newtonsk omvänt-kvadrat-attraktion med en liten mjukningsterm som förhindrar visuella explosioner under extremt nära passager. Rörelsen drivs fram med ett hastighets-Verlet-steg, ett vanligt val för orbitala demonstrationer eftersom det hanterar energibeteende bättre än en enkel Euler-uppdatering. Resultatet är en responsiv pedagogisk modell som gör det kvalitativa beteendet hos trekroppsproblemet synligt utan att låtsas ersätta professionell himlamekanikprogramvara.',
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
