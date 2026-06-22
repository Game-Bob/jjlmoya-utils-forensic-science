import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sfar-energiinfangning-simulator';
const title = 'Dysonsfär Energiinfångning Simulator';
const description = 'Uppskatta Dyson-svärm, ring, skal och statit-konstruktioner för olika stjärnor. Beräkna infångad effekt, omloppsradie, materialmassa och täckning som behövs för att nå en mål-Kardashevskala.';

const howTo = [
  {
    name: 'Välj en stjärntyp',
    text: 'Börja med en M-dvärg, solliknande stjärna, A-stjärna, röd jätte eller blå jätte. Simulatorn använder representativa ljusstyrke- och massvärden för att uppskatta kollektorradie och omloppstid.',
  },
  {
    name: 'Välj megastrukturens arkitektur',
    text: 'Jämför en Dyson-svärm, ekvatorialring, stelt skal eller statit-spegelmoln. Varje konstruktion har olika antaganden om infångningseffektivitet, materialtäthet och stabilitet.',
  },
  {
    name: 'Ställ in täckning och drifttemperatur',
    text: 'Öka täckningen för att fånga mer stjärnkraft, justera sedan drifttemperaturen för att flytta kollektorerna närmare eller längre bort från stjärnan.',
  },
  {
    name: 'Välj ett Kardashev-mål',
    text: 'Använd mål-reglaget för att se hur mycket av stjärnan som måste omfattas för att nå en energinivå på civilisationsskala.',
  },
];

const faq = [
  {
    question: 'Vad är skillnaden mellan en Dyson-sfar och en Dyson-svärm?',
    answer: 'Ett stelt Dyson-skal är ett kontinuerligt skal runt en stjärna, medan en Dyson-svärm är en stor samling oberoende kretsande kollektorer. De flesta tekniska diskussioner favoriserar svärmar eftersom ett fast skal skulle vara strukturellt instabilt och extremt materialkrävande.',
  },
  {
    question: 'Hur väljer simulatorn optimal radie?',
    answer: 'Den uppskattar avståndet där kollektorer som strålar från båda sidor når den valda drifttemperaturen under den givna stjärnans ljusstyrka. Hetare kollektorer kan gå i bana närmare, medan svalare kollektorer kräver större radier.',
  },
  {
    question: 'Vad betyder Kardashev-klassificeringen här?',
    answer: 'Kardashev-värdet beräknas från infångad effekt med den logaritmiska formeln K = (log10(P) - 6) / 10, där P är effekt i watt. Ett värde nära K1 representerar energianvändning på planetarisk skala, medan K2 närmar sig full stjärnkraft.',
  },
  {
    question: 'Är materialmassan realistisk?',
    answer: 'Det är en pedagogisk uppskattning av första ordningen baserad på kollektorarea, ytdensitet och en stabilitetsfaktor. Verkliga konstruktioner skulle kräva positionshållning, kraftöverföring, brytningsförluster, redundans, värmeavledning och tillverkningsinfrastruktur.',
  },
  {
    question: 'Varför kräver ljusa stjärnor så stora kollektorsystem?',
    answer: 'Stjärnor med hög ljusstyrka skjuter den säkra termiska radien utåt. Det ökar den yta som behövs för en given täckningsgrad, så materialbehovet kan stiga snabbare än den infångade effekten känns intuitiv.',
  },
  {
    question: 'Kan en civilisation nå Kardashev typ II med delvis täckning?',
    answer: 'Ja, om värdstjärnan är tillräckligt ljusstark och kollektorerna effektiva. Runt en solliknande stjärna kräver nära typ II att en stor del av solens ljusstyrka infångas, men runt ljusare stjärnor kan samma effektmål uppnås med lägre täckningsgrad.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson-kollektor visualisering',
    starType: 'Stjärntyp',
    structureType: 'Struktur',
    coverage: 'Kollektortäckning',
    operatingTemp: 'Drifttemperatur',
    kardashevTarget: 'Kardashev-mål',
    kardashevRating: 'Nuvarande klassificering',
    capturedPower: 'Infångad effekt',
    optimalRadius: 'Optimal radie',
    targetCoverage: 'Måltäckning',
    materialMass: 'Materialmassa',
    captureMeter: 'Framsteg mot mål',
    statusReady: 'Justera systemet för att uppskatta kollektorbehovet.',
    statusUnderbuilt: 'Täckningen ligger under det valda Kardashev-målet. Lägg till kollektorer eller välj en ljusare stjärna.',
    statusBalanced: 'Täckning och stjärnans effekt ligger nära det valda civilisationsmålet.',
    statusExtreme: 'Den här konfigurationen överskrider målet. Den fångar enorm effekt, men materialbehovet ökar snabbt.',
    orbitalPeriod: 'Omloppstid',
    collectorArea: 'Kollektorarea',
    mercuryMasses: '{value} Merkuriusmassor',
    kilograms: '{value} kg',
    daysUnit: '{value} dagar',
    starMDwarf: 'M-dvärg',
    starSun: 'G-stjärna (solliknande)',
    starA: 'A-stjärna',
    starRedGiant: 'Röd jätte',
    starBlueGiant: 'Blå jätte',
    structureSwarm: 'Dyson-svärm',
    structureRing: 'Ekvatorialring',
    structureShell: 'Stelt skal',
    structureStatite: 'Statit-spegelmoln',
  },
  seo: [
    { type: 'title', text: 'Dysonsfär Energiinfångning Simulator', level: 2 },
    { type: 'paragraph', html: 'En Dyson-sfär är inte bara en science fiction-bild av en stjärna inuti ett skal. Det är en familj av möjliga megastrukturkoncept för att fånga upp stjärnors ljusstyrka: svärmar av satelliter, ekvatorialringar, tunna spegelmoln och det berömda men problematiska stela skalet. Den här simulatorn omvandlar dessa idéer till siffror så att du kan jämföra hur stjärntyp, kollektortemperatur, täckning och konstruktionsdesign förändrar energibudgeten.' },
    { type: 'paragraph', html: 'Kalkylatorn uppskattar infångad effekt, termisk omloppsradie, kollektorarea, omloppstid, materialmassa och täckningen som behövs för ett valt Kardashev-mål. Den är byggd för studenter, världsbyggare, vetenskapskommunikatorer och alla som försöker förstå varför Typ II-civilisationer är svåra: utmaningen är inte bara energi, utan också area, värme, utvinning, stabilitet och orbital logistik.' },
    { type: 'title', text: 'Hur Dysonradien uppskattas', level: 3 },
    { type: 'paragraph', html: 'Den optimala radien beräknas från stjärnans ljusstyrka och kollektorns drifttemperatur. En kollektor nära en ljus stjärna får intensivt flöde och måste gå varm eller avleda enorma mängder värme. Att flytta utåt minskar termisk stress, men den krävda kollektorarean växer med kvadraten på avståndet. Denna avvägning förklarar varför samma täckningsgrad kan vara modest runt en svag M-dvärg och enorm runt en blå jätte.' },
    { type: 'title', text: 'Jämförelse av Dyson-svärm, ring, skal och statitmoln', level: 3 },
    {
      type: 'list', items: [
        '<strong>Dyson-svärm:</strong> Många oberoende kretsande kollektorer. Det är den mest trovärdiga storskaliga arkitekturen eftersom den kan byggas gradvis och kräver inget stelt stjärnskal.',
        '<strong>Ekvatorialring:</strong> Ett smalare kollektorband med lägre täckningseffektivitet. Den är lättare att föreställa sig som en första megastruktur.',
        '<strong>Stelt skal:</strong> Visuellt ikoniskt men mekaniskt ofördelaktigt. Ett skal runt en stjärna har allvarliga stabilitets- och materialproblem.',
        '<strong>Statit-spegelmoln:</strong> Ultralätta reflektorer som delvis hålls av strålningstryck. Det minskar materialbehovet men har lägre värmetålighet och kräver avancerad positionskontroll.'
      ]
    }
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