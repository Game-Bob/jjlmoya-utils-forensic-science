import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-ursprung-blodstanksmuster';
const title = '3D Simulator for berakning av ursprung for blodstanksmuster';
const description = 'Modellera elliptiska blodfläckar på ett vertikalt plan, uppskatta träffvinklar och visualisera projicerade banor i en interaktiv 3D-scen.';

const howTo = [
  { name: 'Mata in eller justera fläckar', text: 'Använd tabellen eller 2D-ytan för att definiera varje fläcks position, bredd, längd och orientering för dess huvudaxel.' },
  { name: 'Kontrollera träffvinklar', text: 'Kalkylatorn uppskattar träffvinkeln från förhållandet mellan bredd och längd med hjälp av invers sinusfunktion.' },
  { name: 'Granska 3D-konvergensen', text: 'Rotera vyn för att jämföra de projicerade banorna och den uppskattade ursprungssfären.' },
  { name: 'Kontrollera osäkerheten', text: 'Använd spridningsvärdet som en praktisk varningsindikator: stor spridning av linjer innebär att det beräknade ursprunget är mindre stabilt.' },
];

const faq = [
  { question: 'Kan ett webbverktyg avgöra den verkliga källan till en blödning?', answer: 'Nej. Det kan visa och utvärdera geometriska samband, men slutsatser i ett fall kräver validerade metoder, dokumentation av platsen, kalibrering av skala och kvalificerad blodstänksmönsteranalys.' },
  { question: 'Varför beräknas träffvinkeln från bredd och längd?', answer: 'För en ideal elliptisk fläck approximeras sinus för träffvinkeln genom att dela bredden med längden. Verkliga fläckar kan förvrängas av ytans struktur, rinningar, överföring eller mätfel.' },
  { question: 'Vad representerar den uppskattade 3D-ursprungssfären?', answer: 'Det är den minsta kvadrat-konvergensberäkningen mellan de projicerade banlinjerna, inte en garanterad punktkälla.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Metrisk',
    imperial: 'Imperial',
    unitsLabel: 'Enheter',
    addStain: 'Lägg till fläck',
    reset: 'Återställ',
    surface: 'Träffyta',
    viewport3dLabel: '3D-vy för banor',
    stainLabel: 'Fläck',
    table: 'Mätningar',
    origin: 'Uppskattat ursprung',
    spread: 'Linjespridning',
    confidence: 'Konfidens',
    impact: 'Träffvinkel',
    high: 'Hög',
    medium: 'Medium',
    low: 'Låg',
    x: 'X',
    y: 'Y',
    width: 'Bredd',
    length: 'Längd',
    rotation: 'Rotation',
    remove: 'Ta bort',
    cm: 'cm',
    inch: 'tum',
    degree: 'grader',
    rotateHint: 'Dra i 3D-vyn för att rotera rekonstruktionen.',
    disclaimer: 'Endast för utbildningsrekonstruktion. Tolka med validerade platsmätningar och dokumenterad osäkerhet.',
  },
  seo: [
    { type: 'title', text: 'Hur en 3D Simulator for berakning av ursprung for blodstanksmuster fungerar', level: 2 },
    { type: 'paragraph', html: 'En simulator för ursprung av blodstänksmönster hjälper användare att utforska en av de centrala geometriska frågorna inom blodstänksanalys: <strong>var i rummet kan blodkällan ha varit när dropparna träffade en yta?</strong> Verktyget modellerar fläckar som ellipser på ett vertikalt plan, beräknar en träffvinkel från varje förhållande mellan bredd och längd, projicerar banor bakåt i en 3D-scen och uppskattar ett praktiskt konvergensområde.' },
    { type: 'diagnostic', variant: 'warning', title: 'Adliell varning', html: 'Resultatet är ett rekonstruktionshjälpmedel, inte en slutgiltig slutsats i ett fall. Verkliga fläckar kan påverkas av ytans struktur, satellitstänk, koagulering, rinningar, avtorkning, överföring, perspektivfel och ofullständig dokumentation av skala.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(B/L)', label: 'Formel för träffvinkel' },
      { value: '3+', label: 'Rekommenderade oberoende fläckar' },
      { value: '3D', label: 'Konvergensområde för banor' },
    ] },
    { type: 'title', text: 'Formel för träffvinkel', level: 3 },
    { type: 'paragraph', html: 'För en enkel elliptisk fläck approximeras träffvinkeln vanligtvis som <strong>arcsin(bredd / längd)</strong>. En fläck som mäts till 1 cm bredd och 2 cm längd ger därför en träffvinkel på 30 grader. Det förhållandet är användbart eftersom det omvandlar ett platt märke till en banhöjd, men det förutsätter att den uppmätta fläcken är representativ och inte förvrängd.' },
    { type: 'code', ariaLabel: 'Beräkning av träffvinkel', code: 'träffvinkel = arcsin(fläckens bredd / fläckens längd)\nexempel: arcsin(1 cm / 2 cm) = 30 grader' },
    { type: 'paragraph', html: 'Detta är en vanlig sökintention bakom frågor som <em>kalkylator för träffvinkel på blodfläckar</em>, <em>formel för träffvinkel för blodstänk</em> och <em>hur man beräknar blodstänksbana</em>. Det viktiga är att formeln bara besvarar en del av rekonstruktionen. Den uppskattar banans höjd i förhållande till träffytan; den identifierar inte i sig källan, mekanismen, vapnet eller händelseförloppet.' },
    { type: 'title', text: 'Hur man mäter fläckar innan data matas in', level: 3 },
    { type: 'paragraph', html: 'De mest användbara indata kommer från kalibrerade, vinkelräta fotografier eller direkta platsmätningar. Mät fläckens elliptiska huvudkropp, inte satellitstänk, svansar, rinningar eller sekundära fläckar. Bredden ska mätas längs den korta axeln och längden längs den långa axeln. Rotationen bör följa den långa axelns riktning på träffytan. Små fel i längd, bredd eller orientering kan flytta den projicerade banan avsevärt när den utvidgas i 3D-rymden.' },
    { type: 'table', headers: ['Mätkvalitet', 'Sannolik effekt', 'Praktisk åtgärd'], rows: [
      ['Den långa axeln är tydlig', 'Rotationen är mer tillförlitlig', 'Använd den synliga långa axeln och dokumentera orienteringsmetoden.'],
      ['Bredden eller längden är förvrängd', 'Träffvinkeln kan vara partisk', 'Markera osäkerheten och jämför med angränsande fläckar.'],
      ['Få fläckar konvergerar', 'Ursprungsuppskattningen blir instabil', 'Lägg till oberoende fläckar innan du tolkar 3D-ursprunget.'],
      ['Skala saknas', 'Alla avstånd blir endast illustrativa', 'Rapportera inte verkliga ursprungskoordinater utan kalibrering.'],
    ] },
    { type: 'title', text: 'Att läsa 3D-konvergensen', level: 3 },
    { type: 'paragraph', html: 'Ursprungssfären i detta verktyg beräknas som den punkt som ligger närmast alla projicerade banlinjer. När linjer passerar nära varandra är spridningsvärdet litet och konfidensen förbättras. När linjer divergerar visas sfären fortfarande, men den bör tolkas som en svag minsta kvadrat-kompromiss snarare än en exakt källa.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Konvergensområde', description: 'En tvådimensionell uppskattning på träffytan, som ofta används för att se var de långa axlarnas riktningar möts när man tittar framifrån.', points: ['Användbar för en första bedömning', 'Representerar inte vertikal höjd i sig'] },
      { title: 'Ursprungsområde eller Ursprungsvolym', description: 'En tredimensionell uppskattning som kombinerar riktningen på planet med träffvinkeln för att projicera banor i rymden.', highlight: true, points: ['Förklarar möjlig höjd på källan', 'Känslig för osäkerhet i mätning och vinkel'] },
    ] },
    { type: 'paragraph', html: 'Användare söker ofta efter en <em>kalkylator för ursprungspunkt för blodstänk</em> och förväntar sig en enda exakt koordinat. I praktiken kräver en god tolkning försiktighet. Ursprunget förstås bäst som en region som stöds av flera banor. Om de ritade linjerna bildar ett tätt knippe är modellen mer koherent. Om de passerar genom en stor volym talar rekonstruktionen om för dig att mätningarna, fläckvalet eller antagandena behöver ses över.' },
    { type: 'title', text: 'Vanliga orsaker till att banorna inte möts', level: 3 },
    { type: 'proscons', title: 'Starka indata jämfört med svaga indata', items: [
      { pro: 'Flera välformade elliptiska fläckar med tydliga långaxlar', con: 'Endast en eller två fläckar, eller fläckar som valts ut för att de verkar passa en teori' },
      { pro: 'Kalibrerade mätningar tagna vinkelrätt mot träffytan', con: 'Snea foton, okänd skala eller kopierade skärmdumpar' },
      { pro: 'Oberoende fläckar från samma händelsemekanism', con: 'Blandade passiva droppar, överföringsfläckar, kaststänk, rinningar eller sekundära träffmönster' },
    ] },
    { type: 'paragraph', html: 'En dålig konvergens betyder inte automatiskt att verktyget har fel. Det kan innebära att fläckarna inte tillhör samma mönster, att fotografiet är perspektivförvrängt, att den långa axeln fellästes, att fläcken inte är en ren ellips eller att den fysiska händelsen är mer komplex än en enkel punktkällmodell. Det är värdefull information. Ett rekonstruktionsverktyg bör visa oenighet snarare än att dölja den bakom en tillförlitlig siffra.' },
    { type: 'title', text: 'Vad detta verktyg är bra för', level: 3 },
    { type: 'list', items: [
      '<strong>Använd flera fläckar:</strong> Tre eller fler oberoende fläckar ger en mer meningsfull konvergensuppskattning.',
      '<strong>Bevaka spridningen:</strong> En hög spridning varnar för att linjerna inte stämmer överens i 3D.',
      '<strong>Behåll skalan:</strong> Centimeter- eller tumvärden måste komma från kalibrerade fotografier eller platsmätningar.',
      '<strong>Skilj utbildning från formell rapportering:</strong> Denna visualisering är bäst för utbildning, planering och förklaring före formell granskning.',
    ] },
    { type: 'card', title: 'Bästa arbetsflöde', html: 'Börja med att rita upp en liten uppsättning fläckar av hög kvalitet. Kontrollera om de 2D-riktningarna för långaxeln verkar logiska. Granska sedan 3D-banorna, notera spridningen och ändra en mätning i taget för att se vilken fläck som styr rekonstruktionen. Den känslighetskontrollen är ofta mer användbar än den råa ursprungskoordinaten.' },
    { type: 'title', text: 'När man inte bör lita på en ursprungsuppskattning för blodstänk', level: 3 },
    { type: 'paragraph', html: 'Lita inte på en enkel ursprungsuppskattning när fläckarna är kraftigt förvrängda, träffytan är böjd eller oregelbunden, mönstret inkluderar överföringsfläckar eller utandad kasta-av, ytan flyttades eller platsen saknar en tillförlitlig skala. Samma försiktighet gäller när fläckar kommer från olika mekanismer eller olika tidpunkter i händelseförloppet. En ren 3D-visualisering kan fortfarande vara vilseledande om indatamönstret inte är lämpligt för geometrisk rekonstruktion.' },
    { type: 'glossary', items: [
      { term: 'Träffvinkel', definition: 'Den uppskattade vinkeln mellan droppens bana och träffytan, vanligtvis beräknad från förhållandet mellan bredd och längd för en elliptisk fläck.' },
      { term: 'Banlinje', definition: 'En projicerad linje som visar en möjlig bakåtriktad färdbana från en fläck in i det tredimensionella rummet.' },
      { term: 'Konvergensområde', definition: 'Det ungefärliga området där fläckarnas riktningar skär varandra när de projiceras på träffplanet.' },
      { term: 'Ursprungsområde', definition: 'Det ungefärliga tredimensionella området från vilket blodet kan ha kommit, baserat på flera projicerade banor.' },
    ] },
    { type: 'summary', title: 'Bästa användning', items: [
      'Använd analysatorn för att förstå banans geometri och testa mätkänsligheten.',
      'Jämför ursprungssfären med spridningsvärdet innan du litar på en rekonstruktion.',
      'Använd inte visualiseringen som ett självständigt adliellt utlåtande.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
