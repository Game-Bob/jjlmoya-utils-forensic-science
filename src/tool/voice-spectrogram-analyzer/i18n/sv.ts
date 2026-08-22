import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "rost-spektrogram-analysator-online";
const title = "Rost Spektrogram Analysator Online";
const description = "Visualisera frekvens, tid, intensitet och formanter för två ljudfiler privat i din webbläsare.";

const howTo = [
  {
    "name": "Välj två prov",
    "text": "Använd lokala filer eller syntetiska exempel."
  },
  {
    "name": "Ställ in frekvenstak",
    "text": "Välj 4, 6 eller 8 kHz efter rösttyp."
  },
  {
    "name": "Läs spektrogrammet",
    "text": "Granska tid, frekvens och formantlinjer."
  },
  {
    "name": "Lyssna och jämför",
    "text": "Jämför F1, F2 och F3 i utbildningssyfte."
  }
];

const faq = [
  {
    "question": "Vad visar ett röstspektrogram?",
    "answer": "Ett spektrogram visar tid horisontellt, frekvens vertikalt och ljudstyrka genom ljusstyrka."
  },
  {
    "question": "Laddas mina inspelningar upp?",
    "answer": "Nej. All bearbetning sker lokalt i din webbläsare."
  },
  {
    "question": "Vad betyder F1, F2 och F3?",
    "answer": "De är uppskattningar av röstkanalens resonanser."
  },
  {
    "question": "Kan verktyget identifiera en talare?",
    "answer": "Nej. Visuell likhet utgör inte ett biometriskt bevis."
  },
  {
    "question": "Varför ändras formanter med frekvenstaket?",
    "answer": "Skalan påverkar hur spektraltoppar separeras."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "Endast lokalt",
    "privacyNote": "Dina inspelningar stannar på din enhet. Avkodning och analys sker i webbläsaren.",
    "loadHeading": "Ladda två ljudfiler för analys",
    "sampleALabel": "Prov A",
    "sampleBLabel": "Prov B",
    "chooseFileLabel": "Välj ljudfil",
    "replaceFileLabel": "Byt ljudfil",
    "dropHint": "Dra en ljudfil hit (max 25 MB). De första 20 sekunderna analyseras.",
    "presetHint": "Testa direkt med två syntetiska vokalstudier.",
    "presetWarmLabel": "Varm vokalstudie",
    "presetBrightLabel": "Ljus vokalstudie",
    "emptySampleLabel": "Väntar på ljud",
    "readySampleLabel": "Spektralplatta klar",
    "decodingSampleLabel": "Beräknar spektralplatta",
    "errorSampleLabel": "Provet kunde inte analyseras",
    "durationLabel": "Varaktighet",
    "ceilingHeading": "Frekvenstak",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "Speglad röstspektrogram scen",
    "mirrorViewLabel": "Speglade plattor",
    "splitViewLabel": "Parallella plattor",
    "playALabel": "Spela prov A",
    "playBLabel": "Spela prov B",
    "stopLabel": "Stoppa",
    "timeAxisLabel": "Tid",
    "frequencyAxisLabel": "Frekvens",
    "intensityLegendLabel": "Ljusare färg indikerar högre energi",
    "formantLegendLabel": "Uppskattade formantlinjer",
    "sampleAEmptyCanvasLabel": "Ladda prov A för att visa spektrumet",
    "sampleBEmptyCanvasLabel": "Ladda prov B för att visa spektrumet",
    "comparisonHeading": "Analys av klangresonans",
    "comparisonNote": "Genomsnittliga spektraltoppar. Skillnaderna är fysiska mätvärden, inte ett bevis på identitet.",
    "formantOneLabel": "Första resonansområde (F1)",
    "formantTwoLabel": "Andra resonansområde (F2)",
    "formantThreeLabel": "Tredje resonansområde (F3)",
    "averageLabel": "Genomsnitt",
    "differenceLabel": "Skillnad",
    "unavailableLabel": "Inte tillgänglig",
    "statusEmptyLabel": "Ladda ett prov för att börja",
    "statusSingleLabel": "En platta är klar",
    "statusReadyLabel": "Båda spektralplattorna är klara",
    "limitError": "Filen överskrider den lokala gränsen på 25 MB.",
    "decodeError": "Webbläsaren kunde inte avkoda ljudformatet.",
    "browserError": "Web Audio API är inte tillgängligt i denna webbläsare.",
    "educationalNote": "Pedagogiskt verktyg. Formantlinjer ska inte användas för forensisk röstidentifiering."
},
  seo: [
    { type: 'title', text: "Hur ett röstspektrogram förvandlar ljud till en visuell bild", level: 2 },
    { type: 'paragraph', html: "Ett <strong>röstspektrogram</strong> förvandlar en inspelning till en karta med tid på den horisontella axeln och frekvens på den vertikala axeln. Starkare energi visas med ljusare färg. Detta gör utdragna vokaler, övertoner, tystnad och resonanser lättare att observera än på en vanlig vågform. Visualiseringen underlättar spektralanalysen på ett mycket detaljerat och överskådligt sätt vid varje tillfälle." },
    { type: 'paragraph', html: "Analysatorn delar upp signalen i korta överlappande avsnitt, tillämpar ett Hamming-fönster och beräknar energifördelningen per frekvens via FFT. Ett kort avsnitt bestämmer den exakta tidpunkten, medan frekvensupplösningen visar var energin koncentreras. På grund av osäkerhetsprincipen finns det alltid en avvägning mellan tids- och frekvensupplösning. Inställningarna styr den visuella skärpan och precisionen vid analysen. Detta gör det lättare att utvärdera röstens egenskaper i detalj." },

    { type: 'diagnostic', variant: 'info', title: "Privat bearbetning i webbläsaren", html: "Visualisera frekvens, tid, intensitet och formanter för två ljudfiler privat i din webbläsare. Alla dina inspelningar stannar kvar på din enhet utan att skickas någonstans." },
    { type: 'stats', columns: 3, items: [
      { value: "Tid", label: "Läs från vänster till höger" },
      { value: "Hz", label: "Frekvensposition" },
      { value: "Energi", label: "Visas som ljusstyrka" }
    ] },
    { type: 'title', text: "Att tolka formanter på ett korrekt sätt", level: 3 },
    { type: 'paragraph', html: "Formanter är resonansområden som formas av talapparaten. F1 och F2 används inom fonetik för att i detalj beskriva vokalhöjd och artikulationsställe. Denna analysator spårar utjämnade toppar i tre frekvensområden så att användaren kan koppla synliga band till F1, F2 och F3 på ett intuitivt och tydligt sätt." },
    { type: 'paragraph', html: "Professionell formantmätning använder vanligtvis linjär prediktiv kodning (LPC) anpassad för talaren. Grundtonens övertoner, rumseko och bakgrundsbuller kan förskjuta enkla uppskattningar. Använd dessa linjer som pedagogiska riktlinjer och kontrollera alltid det underliggande spektrumet för visuell verifiering av frekvenserna." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 till 1000 Hz","Första resonansområdet, kopplat till vokalöppning"],["F2","900 till 3000 Hz","Andra resonansområdet, kopplat till tungposition"],["F3","2000 till 4500 Hz","Högre resonansområde, påverkat av talapparaten"]] },
    { type: 'title', text: "Frekvensinställningars påverkan på analysen", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Lågt tak (4 kHz)", description: "Bättre vy för låga frekvenser", points: ["Användbart för vokaler", "Kan exkludera hög energi", "Garanterar inte högre precision"] },
      { title: "Högt tak (6/8 kHz)", description: "Mer övre detaljer", highlight: true, points: ["För ljusa röster", "Visar frikativor", "Komprimerar nedre band"] }
    ] },
    { type: 'title', text: "En ansvarsfull jämförelse av två ljudprov", level: 3 },
    { type: 'paragraph', html: "Att jämföra två plattor är mest användbart när båda inspelningarna innehåller samma vokal eller fras under liknande akustiska förhållanden. De visade skillnaderna är absoluta fysiska mätvärden mellan spektraltopparna. De utgör inte en procentuell likhet eller ett biometriskt bevis på identitet." },
    { type: 'list', items: ["<strong>Jämför samma talade innehåll:</strong> upprepade vokaler eller ord är lättare att jämföra.","<strong>Använd liknande inspelningsförhållanden:</strong> mikrofon och rumsakustik påverkar spektrumet kraftigt.","<strong>Lyssna med markören:</strong> koppla visuella händelser till det exakta ljudögonblicket.","<strong>Undvik identitetspåståenden:</strong> ett liknande spektrogram bevisar inte talaridentitet."] },
    { type: 'summary', title: "Sammanfattning av analysatorn", items: ["Generera ett ljudspektrogram lokalt från kompatibla filer.","Utforska två prov i speglade eller parallella plattor.","Lär dig hur spektral energi och formantområden förändras.","Behåll en beskrivande och pedagogisk ansats."] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
