import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'exoplanet-biosignatur-detektor';
const title = 'Exoplanet biosignaturdetektor';
const description = 'Justera absorptionslinjer för syre, metan och ozon i ett simulerat transmissionsspektrum från en exoplanet. Utvärdera biologisk beboelighet, möjlig kontaminering från teknosignaturer och risken för falska positiva resultat baserat på spektrala bevis.';

const howTo = [
  {
    name: 'Välj värdstjärna',
    text: 'Välj en K-dvärg, en solliknande stjärna eller en M-dvärg. Stjärntypen påverkar risken för falska positiva resultat eftersom ultraviolett strålning, flare-aktivitet och atmosfärisk fotokemi påverkar tolkningen av syre och ozon.',
  },
  {
    name: 'Justera spektrallinjerna',
    text: 'Flytta reglagen för syre, metan och ozon tills de observerade absorptionsmarkörerna överensstämmer med referensbanden i det simulerade spektrumet.',
  },
  {
    name: 'Ställ in brus och atmosfärisk kontext',
    text: 'Öka instrumentbruset för att se hur konfidensen minskar. Justera vattenånga och koldioxid för att representera en våtare, torrare, tätare eller fotokemiskt mer komplex atmosfär.',
  },
  {
    name: 'Läs av beboelighetsindexen',
    text: 'Jämför indikatorerna för biologi, teknologi och risken för falska positiva resultat. Ett starkt resultat kräver att flera gaser befinner sig i kemisk ojämvikt, snarare än en isolerad spektrallinje.',
  },
];

const faq = [
  {
    question: 'Vad är en biosignatur inom exoplanetspektroskopi?',
    answer: 'En biosignatur är en fjärravläsbar egenskap som kan tyda på biologisk aktivitet. Vanliga kandidater i atmosfärsspektra är syre, ozon, metan och vattenånga, särskilt i kombinationer som normalt skulle reagera bort om de inte ständigt fylls på av levande organismer.',
  },
  {
    question: 'Varför är kombinationen av syre och metan så viktig?',
    answer: 'Syre och metan reagerar kemiskt med varandra. Om båda finns i betydande halter tyder det på en kemisk ojämvikt i atmosfären, vilket är en starkare indikation på potentiellt liv än närvaron av en enskild gas.',
  },
  {
    question: 'Kan syre ge ett falskt positivt resultat?',
    answer: 'Ja. Syre kan ansamlas abiotiskt genom exempelvis fotolys av vatten vid stjärnstrålning eller genom vulkanisk aktivitet. Därför rapporterar verktyget risken för falska positiva resultat istället för att betrakta syre som ett absolut bevis.',
  },
  {
    question: 'Varför analyseras ozon separat från syre?',
    answer: 'Ozon bildas genom fotokemiska processer från syre och har tydliga spektrala egenskaper. Det fungerar som en användbar indirekt indikator, särskilt när direkta syreband är svåra att isolera, men kräver noggrann atmosfärisk kontext.',
  },
  {
    question: 'Vad innebär det teknologiska indexet?',
    answer: 'Det teknologiska indexet är en spekulativ varningsindikator för fall där atmosfärsspektrumet är så ovanligt, brusigt eller energirikt att man inte kan utesluta artificiella källor (teknosignaturer). Det är inte en bekräftad upptäckt.',
  },
  {
    question: 'Är detta en realistisk modell för exoplanetanalys?',
    answer: 'Nej. Detta är en pedagogisk simulator som förenklar komplex spektroskopi till en interaktiv modell. Verklig vetenskaplig analys kräver avancerad strålningstransport, Bayesiansk inferens och rigorösa korrigeringar för instrumentfel och stjärnkontamination.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualisering av exoplanettransmissionsspektrum',
    starClass: 'Värdstjärna',
    starK: 'Tyst K-dvärg',
    starSun: 'G-stjärna (solliknande)',
    starM: 'Aktiv M-dvärg',
    noise: 'Instrumentbrus',
    oxygenLine: 'Syremarkör',
    methaneLine: 'Metanmarkör',
    ozoneLine: 'Ozonmarkör',
    waterVapor: 'Vattenånga',
    carbonDioxide: 'CO2-kontext',
    habitabilityIndex: 'Beboelighetsindex',
    biologicalIndex: 'Biologisk',
    technologicalIndex: 'Teknologisk',
    falsePositiveRisk: 'Risken för falskt positivt',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Slutsats',
    dataLive: 'Datasyntes i realtid',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Justera de spektrala markörerna för att utvärdera atmosfärens sammansättning.',
    verdictWeak: 'Spektrumet är svagt: uppgifterna stöder ännu inte en livsvänlig tolkning.',
    verdictPromising: 'Spektrumet är lovande: flera biosignaturmarkörer stämmer delvis överens.',
    verdictStrong: 'Spektrumet är starkt: syre, metan och ozon bildar en tydlig signal om kemisk ojämvikt.',
    verdictAmbiguous: 'Signalen är intressant men tvetydig: hög risk för stellara eller atmosfäriska felkällor.',
  },
  seo: [
    { type: 'title', text: 'Exoplanet biosignaturdetektor', level: 2 },
    {
      type: 'paragraph',
      html: 'Exoplanet-biosignaturdetektorn är en interaktiv spektroskopisimulator för att utforska hur livsrelaterade gaser kan manifesteras i ljus som filtreras genom en avlägsen atmosfär. Verktyget kräver att du justerar absorptionslinjer för syre, metan och ozon, och väger resultatet mot brus, vattenånga, koldioxid och värdstjärnans egenskaper.',
    },
    {
      type: 'paragraph',
      html: 'Detta är kärnan i biosignaturforskning: en enskild gas är sällan ett bevis. De mest övertygande fallen kombinerar flera gaser, fysisk kontext och en rigorös uteslutning av abiotiska processer. Simulatorn synliggör dessa vetenskapliga avvägningar i ett intuitivt gränssnitt.',
    },
    { type: 'title', text: 'Hur transmissionsspektroskopi avslöjar atmosfärens sammansättning', level: 3 },
    {
      type: 'paragraph',
      html: 'Under en planetpassage filtreras en liten del av stjärnans ljus genom planetens atmosfär, där molekyler absorberar specifika våglängder. Detta lämnar "avtryck" i det uppmätta spektrumet. Astronomer jämför dessa avtryck med laboratoriedata för att identifiera gaser, trots störningar från moln, temperatur och instrumentbrus.',
    },
    { type: 'title', text: 'Syre, metan och ozon, en synergi av signaler', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Syre (O2):</strong> Upprätthålls på jorden av fotosyntes, men kan ansamlas abiotiskt under vissa förhållanden.',
        '<strong>Metan (CH4):</strong> Kan vara av biologiskt eller geologiskt ursprung. Blir mest relevant i kombination med oxiderande gaser.',
        '<strong>Ozon (O3):</strong> En fotokemisk biprodukt av syre; ofta lättare att upptäcka och fungerar som en viktig indirekt ledtråd.',
        '<strong>Vatten och CO2:</strong> Vatten är en förutsättning för beboelighet, medan koldioxid hjälper till att estimera växthuseffekten och identifiera falska positiva scenarier.',
      ],
    },
    { type: 'title', text: 'Varför risken för falska positiva resultat är avgörande', level: 3 },
    {
      type: 'paragraph',
      html: 'En hög syrehalt garanterar inte liv. Abiotiska processer, såsom vattenfotolys genom stjärnstrålning, kan efterlikna biosignaturer. Aktiva M-dvärgar är särskilt problematiska då stjärnaktivitet kan omforma atmosfärkemin. Simulatorn ökar riskindikatorn när en biologisk förklaring förlorar sin styrka.',
    },
    {
      type: 'table',
      headers: ['Signalmönster', 'Tolkning', 'Noteringar'],
      rows: [
        ['Endast O2', 'Potentiellt syrerik atmosfär', 'Abiotiskt ursprung möjligt (vattenförlust)'],
        ['Endast CH4', 'Reducerande miljö eller aktiv geologi', 'Svagt bevis för liv i isolering'],
        ['O2 + CH4', 'Kemisk ojämvikt', 'Kräver djupgående analys och kontaminationskontroll'],
        ['O2 + O3 + vatten', 'Jordliknande kontext', 'Molnbildning och stjärnaktivitet är kritiska variabler'],
      ],
    },
    { type: 'title', text: 'Index för biologisk och teknologisk beboelighet', level: 3 },
    {
      type: 'paragraph',
      html: 'Det biologiska indexet fokuserar på kemisk ojämvikt (O2 + CH4). Det teknologiska indexet är avsiktligt spekulativt och lyfter fram anomala atmosfäriska parametrar som kan tyda på industriell förorening, avsiktlig modifiering eller observationsartefakter.',
    },
    {
      type: 'paragraph',
      html: 'Använd simulatorn som ett verktyg för logisk träning. Verklig biosignaturanalys kräver komplex modellering, korrigering av systematiska teleskopfel och noggrann osäkerhetsberäkning. Det pedagogiska värdet ligger i disciplinen att kontrollera bevisen och alltid beakta alternativa förklaringar.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
