import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'entropi-andra-lagen-simulator';
const title = 'Entropi och termodynamikens andra lag simulator';
const description = 'Se hur varma och kalla partikelkammare blandas, utjämnas och driver entropin uppåt med en visuell diffusionssimulator och ett live-entropidiagram.';

const howTo = [
  {
    name: 'Ställ in vänster och höger temperatur',
    text: 'Välj en kallare kammare och en varmare kammare för att skapa en initial termisk obalans. Större skillnader gör den irreversibla vägen mot jämvikt lättare att se.',
  },
  {
    name: 'Justera barriärens öppning',
    text: 'Öppna eller minska passagen mellan de två kamrarna. En bredare öppning låter partiklar och energi diffundera snabbare, så att entropikurvan stiger snabbare.',
  },
  {
    name: 'Observera partikellådan',
    text: 'Blå partiklar representerar rörelse med lägre energi och orange partiklar representerar rörelse med högre energi. När kollisioner och korsningar ackumuleras blir lådan mer blandad och mindre ordnad.',
  },
  {
    name: 'Läs entropidiagrammet',
    text: 'Följ hur rumslig blandning och termisk utjämning kombineras till en enda stigande entropipoäng. Kurvan är avsedd att bygga intuition för varför isolerade system utvecklas mot mer sannolika makrotillstånd.',
  },
];

const faq = [
  {
    question: 'Varför stiger entropin i denna simulator?',
    answer: 'Starttillståndet är artificiellt ordnat: ena sidan är kallare, den andra varmare. När barriären tillåter utbyte finns det många fler blandade arrangemang än separerade arrangemang, så systemet rör sig naturligt mot det överväldigande mer sannolika makrotillståndet.',
  },
  {
    question: 'Bevisar detta termodynamikens andra lag exakt?',
    answer: 'Nej. Detta är en pedagogisk partikelmodell, inte en molekyldynamisk laboratoriekod. Den fångar den grundläggande intuitionen bakom irreversibel diffusion och termisk utjämning, vilket är sökavsikten de flesta användare har när de frågar varför entropi tenderar att öka.',
  },
  {
    question: 'Vad betyder rumslig entropi och termisk entropi här?',
    answer: 'Rumslig entropi mäter hur jämnt partiklar är fördelade mellan vänster och höger kammare. Termisk entropi i denna simulator mäter hur liten energigapet är mellan de två halvorna. Den totala poängen blandar båda så att användare kan se blandning och värmeflöde samtidigt.',
  },
  {
    question: 'Varför fortsätter partiklarna att röra sig även nära jämvikt?',
    answer: 'Jämvikt betyder inte att rörelsen upphör. Det betyder att den makroskopiska obalansen försvinner. Molekyler rör sig fortfarande, kolliderar och utbyter energi, men det finns ingen kvarvarande ihållande storskalig riktning att utnyttja.',
  },
  {
    question: 'Kan entropin någonsin minska tillfälligt?',
    answer: 'I mikroskopiska system är små fluktuationer möjliga. Detta visuella verktyg jämnar ut dessa fluktuationer och betonar den övergripande statistiska trenden: i ett stort isolerat system är lågentropi ordnade tillstånd avsevärt mindre sannolika än blandade tillstånd.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Irreversibel blandning',
    results: 'Entropisimulatorns resultat',
    particleBox: 'Partikeldiffusionslåda',
    barrier: 'Barriär',
    entropyGraph: 'Entropi över tid-diagram',
    liveTrace: 'Live-spårning',
    highEntropy: 'hög',
    midEntropy: 'medel',
    lowEntropy: 'låg',
    controls: 'Entropisimulatorns kontroller',
    leftTemperature: 'Vänster temperatur',
    rightTemperature: 'Höger temperatur',
    gateAperture: 'Barriärens öppning',
    pause: 'Pausa',
    reset: 'Återställ tillstånd',
    resume: 'Fortsätt',
    totalEntropy: 'Total entropi',
    particleBalance: 'Partiklar vänster/höger',
    spatialEntropy: 'Rumslig entropi',
    thermalEntropy: 'Termisk entropi',
    energyGap: 'Energigap',
    noteLabel: 'Tolkning',
    stateGradient: 'Gradient',
    stateMixing: 'Blandning',
    stateEquilibrium: 'Jämvikt',
    note: 'Makrotillståndets sannolikhet pekar mot maximal oordning.',
  },
  seo: [
    {
      type: 'title',
      text: 'Entropisimulator för termodynamikens andra lag och irreversibel diffusion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Använd denna entropisimulator för att visualisera en av de viktigaste idéerna inom fysiken: isolerade system utvecklas från artificiellt ordnade tillstånd mot mer sannolika blandade tillstånd. Istället för att läsa en statisk definition av entropi kan du se en varm kammare och en kall kammare utbyta partiklar och energi i realtid medan en live-kurva spårar ökningen av oordning.',
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg är utformat för den vanligaste sökavsikten bakom frågor som "varför ökar entropin", "hur fungerar termodynamikens andra lag" och "vad är termisk diffusion". Målet är inte bara att ge en slogan om oordning, utan att koppla entropi till sannolikhet, värmeflöde, blandning och jämvikt på ett sätt som känns omedelbart synligt.',
    },
    {
      type: 'title',
      text: 'Vad termodynamikens andra lag innebär i praktiska termer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den andra lagen säger att för ett isolerat system rör sig spontana processer mot makrotillstånd med högre entropi. I vardagligt språk innebär det att en starkt organiserad termisk arrangemang, såsom heta partiklar på ena sidan och kalla partiklar på den andra, inte förblir separerad om inte arbete kontinuerligt tillförs för att upprätthålla den.',
    },
    {
      type: 'paragraph',
      html: 'Det händer inte för att materia "föredrar kaos" i en mystisk mening. Det händer för att det finns enormt många fler mikroskopiska arrangemang som motsvarar ett blandat tillstånd än ett separerat. Entropi kopplar därför termodynamik till räkning: ju större antal kompatibla mikrotillstånd, desto större entropi.',
    },
    {
      type: 'title',
      text: 'Hur denna entropidiffusionssimulator fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Partikellådan startar i en lågentropikonfiguration med en temperaturobalans över en barriär. När passagen mellan kamrarna är öppen korsar partiklar, kolliderar och bär energi från en sida till den andra. Simuleringen spårar två intuitiva ingredienser: <strong>rumslig entropi</strong>, som ökar när partiklar blir mindre segregerade, och <strong>termisk entropi</strong>, som ökar när vänster och höger energidistributioner blir mindre olika.',
    },
    {
      type: 'paragraph',
      html: 'Den totala entropipoängen som visas på skärmen är en pedagogisk proxy byggd från dessa två ingredienser. Det är inte en laboratorieklassad tillståndsfunktion och påstår sig inte återge fullständig statistisk mekanik. Dess syfte är att hjälpa användare att bygga korrekt intuition: irreversibelt värmeflöde och diffusion flyttar båda systemet mot jämvikt eftersom jämvikt motsvarar många fler tillgängliga arrangemang.',
    },
    {
      type: 'table',
      headers: ['Visuell signal', 'Vad den representerar', 'Varför det spelar roll'],
      rows: [
        ['Blå vs orange partiklar', 'Relativ kinetisk energi', 'Visar att temperaturskillnader egentligen är skillnader i genomsnittlig mikroskopisk rörelse.'],
        ['Barriärens öppning', 'Enkelhet i utbyte mellan kamrarna', 'Låter dig se varför diffusionshastigheten ändras när transportvägen ändras.'],
        ['Rumslig entropimätare', 'Hur jämnt partiklar är spridda', 'Förklarar att blandning ensam redan gör makrotillståndet mer sannolikt.'],
        ['Termisk entropimätare', 'Hur litet det vänster-höger energigapet blir', 'Visar att jämvikt inte bara handlar om position utan också om energidelning.'],
        ['Entropikurva', 'Trend över tid', 'Förvandlar den abstrakta idén om irreversibilitet till en synlig enkelriktad relaxationsprocess.'],
      ],
    },
    {
      type: 'title',
      text: 'Varför entropi kan öka trots att varje partikel lyder enkel rörelse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Studenter antar ofta att termodynamikens andra lag kräver friktion, avsikt eller en speciell "tids pil-kraft". Den djupare poängen är statistisk. Varje partikel följer lokala regler, men när många partiklar interagerar dominerar antalet blandade makrotillstånd helt antalet ordnade makrotillstånd. Systemet tillbringar därför nästan all sin tid i blandade konfigurationer och endast en extremt liten del i snyggt separerade sådana.',
    },
    {
      type: 'paragraph',
      html: 'Det är därför en droppe färg sprider sig i vatten, varför ett rum utjämnas i temperatur efter att en värmare stängts av, och varför ett varmt föremål svalnar i kontakt med ett kallare. Den omvända processen är inte förbjuden av newtonsk rörelse i strikt mikroskopisk mening, men den är så statistiskt osannolik för stora system att den i praktiken aldrig observeras i mänsklig skala.',
    },
    {
      type: 'title',
      text: 'Entropi, jämvikt och vanliga missuppfattningar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Entropi är inte bara "oordning":</strong> den mer precisa idén är antalet mikroskopiska arrangemang som är kompatibla med samma makroskopiska beskrivning.',
        '<strong>Jämvikt betyder inte stillhet:</strong> partiklar fortsätter att röra sig konstant, men deras storskaliga obalanser tar ut varandra.',
        '<strong>Värmeflöde är riktningsberoende eftersom sannolikhet är riktningsberoende:</strong> det finns överväldigande fler sätt att dela energi än att hålla den skarpt separerad.',
        '<strong>Låg entropi är inte omöjligt:</strong> det kräver helt enkelt begränsningar, förberedelse eller arbete utifrån det isolerade systemet.',
        '<strong>Denna simulator är kvalitativ:</strong> den ger fysisk intuition, inte exakt kalorimetri, partitionfunktioner eller molekylära transportkoefficienter.',
      ],
    },
    {
      type: 'title',
      text: 'När du ska använda denna simulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Använd den för klassrumsdemonstrationer, fysikrepetition, kemiundervisning, vetenskapligt skrivande och snabba konceptuella förklaringar. Den är särskilt användbar när någon förstår att värme flödar från varmt till kallt men ännu inte ser hur det kopplar till sannolikhet, makrotillståndsräkning och termodynamikens andra lag.',
    },
    {
      type: 'paragraph',
      html: 'Om ditt mål är en rigorös termodynamisk beräkning för en verklig gas, motorcykel eller laboratoriesystem, behöver du tillståndsekvationer, randvillkor och experimentellt grundade parametrar. Om ditt mål är intuition för varför diffusion är irreversibel och varför entropi tenderar att stiga, är denna simulator byggd för just den frågan.',
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
