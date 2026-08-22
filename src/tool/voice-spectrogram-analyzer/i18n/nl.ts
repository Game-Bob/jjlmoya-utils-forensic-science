import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "stem-spectrogram-analysator-online";
const title = "Stem Spectrogram Analysator Online";
const description = "Visualiseer frequentie, tijd, intensiteit en formantwaarden van twee geluidsfragmenten privé in uw browser.";

const howTo = [
  {
    "name": "Kies twee audiosamples",
    "text": "Gebruik lokale bestanden of synthetische voorbeelden."
  },
  {
    "name": "Stel frequentieplafond in",
    "text": "Kies 4, 6 of 8 kHz passend bij het stemtype."
  },
  {
    "name": "Lees het spectrogram",
    "text": "Bekijk tijd, frequentie en formantgidsen."
  },
  {
    "name": "Luister en vergelijk",
    "text": "Vergelijk F1, F2 en F3 waarden op een verantwoorde manier."
  }
];

const faq = [
  {
    "question": "Wat toont een stemspectrogram?",
    "answer": "Een spectrogram toont tijd op de horizontale as, frequentie op de verticale as en signaalintensiteit via helderheid."
  },
  {
    "question": "Worden mijn opnamen geüpload?",
    "answer": "Nee. Alles wordt lokaal berekend in uw browser."
  },
  {
    "question": "Wat betekenen F1, F2 en F3?",
    "answer": "Het zijn educatieve schattingen van de resonanties van het spraakkanaal."
  },
  {
    "question": "Kan deze analysator een spreker identificeren?",
    "answer": "Nee. Visuele gelijkenis bewijst geen identiteit."
  },
  {
    "question": "Waarom veranderen formanten bij een ander frequentieplafond?",
    "answer": "De frequentieschaal beïnvloedt hoe pieken worden gescheiden."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "Alleen lokaal",
    "privacyNote": "Uw opnamen blijven op dit apparaat. Analyse en decodering worden uitgevoerd in de browser.",
    "loadHeading": "Laad twee geluiden om te analyseren",
    "sampleALabel": "Sample A",
    "sampleBLabel": "Sample B",
    "chooseFileLabel": "Kies audio",
    "replaceFileLabel": "Vervang audio",
    "dropHint": "Sleep hier een audiobestand naartoe (max. 25 MB). De eerste 20 seconden worden geanalyseerd.",
    "presetHint": "Probeer direct de twee synthetische klinkerstudies.",
    "presetWarmLabel": "Warme klinkerstudie",
    "presetBrightLabel": "Heldere klinkerstudie",
    "emptySampleLabel": "Wachten op audio",
    "readySampleLabel": "Spectraalplaat gereed",
    "decodingSampleLabel": "Spectraalplaat verwerken",
    "errorSampleLabel": "Sample kon niet worden geanalyseerd",
    "durationLabel": "Duur",
    "ceilingHeading": "Frequentieplafond",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "Gespiegelde stem spectrogram stage",
    "mirrorViewLabel": "Gespiegelde platen",
    "splitViewLabel": "Parallele platen",
    "playALabel": "Speel sample A",
    "playBLabel": "Speel sample B",
    "stopLabel": "Stoppen",
    "timeAxisLabel": "Tijd",
    "frequencyAxisLabel": "Frequentie",
    "intensityLegendLabel": "Heldere inkt duidt op hogere energie",
    "formantLegendLabel": "Geschatte formantgidsen",
    "sampleAEmptyCanvasLabel": "Laad sample A om het spectrum te bekijken",
    "sampleBEmptyCanvasLabel": "Laad sample B om het spectrum te bekijken",
    "comparisonHeading": "Analyse van resonantiepatronen",
    "comparisonNote": "Gemiddelde pieken in stemhebbende fragmenten. Verschillen zijn metingen, geen identiteitsbewijs.",
    "formantOneLabel": "Eerste resonantiegebied (F1)",
    "formantTwoLabel": "Tweede resonantiegebied (F2)",
    "formantThreeLabel": "Derde resonantiegebied (F3)",
    "averageLabel": "Gemiddelde",
    "differenceLabel": "Verschil",
    "unavailableLabel": "Niet beschikbaar",
    "statusEmptyLabel": "Laad een sample om te beginnen",
    "statusSingleLabel": "Eén plaat is gereed",
    "statusReadyLabel": "Beide spectraalplaten zijn gereed",
    "limitError": "Bestand overschrijdt de lokale limiet van 25 MB.",
    "decodeError": "Browser kon dit audioformaat niet decoderen.",
    "browserError": "Web Audio API niet beschikbaar in deze browser.",
    "educationalNote": "Educatieve visualisatietool. Formantgidsen zijn schattingen en niet geschikt voor forensische sprekeridentificatie."
},
  seo: [
    { type: 'title', text: "Hoe een spectrogram geluid omzet in een visueel landschap", level: 2 },
    { type: 'paragraph', html: "Een <strong>stemspectrogram</strong> zet een opname om in een kaart met tijd op de horizontale as en frequentie op de verticale as. Sterkere energie verschijnt als een helderdere kleur. Dit maakt aangehouden klinkers, boventonen, stilte en resonanties gemakkelijker waar te nemen dan op een gewone golfvorm. Deze visualisatie vergemakkelijkt de gedetailleerde analyse van het geluidssignaal op elk moment. Hierdoor krijgen onderzoekers een helder inzicht in de akoestische kenmerken." },
    { type: 'paragraph', html: "De analysator verdeelt het signaal in korte overlappende segmenten, past een Hamming-venster toe en berekent de energieverdeling per frequentie via FFT. Een kort segment bepaalt het exacte tijdstip, terwijl de frequentieresolutie toont waar energie zich concentreert. Vanwege het onzekerheidsprincipe is er altijd een afweging tussen tijd- en frequentieresolutie. Deze instellingen bepalen de scherpte." },

    { type: 'diagnostic', variant: 'info', title: "Privéverwerking in de browser", html: "Visualiseer frequentie, tijd, intensiteit en formantwaarden van twee geluidsfragmenten privé in uw browser." },
    { type: 'stats', columns: 3, items: [
      { value: "Tijd", label: "Lees van links naar rechts" },
      { value: "Hz", label: "Frequentiepositie" },
      { value: "Energie", label: "Weergegeven als helderheid" }
    ] },
    { type: 'title', text: "Formanten interpreteren zonder overdrijving", level: 3 },
    { type: 'paragraph', html: "Formanten zijn resonantiegebieden die gevormd worden door het spraakkanaal. F1 en F2 worden in de fonetiek gebruikt om klinkerhoogte en articulatieplaats gedetailleerd te beschrijven. Deze analysator volgt vloeiende pieken in drie frequentiegebieden zodat gebruikers zichtbare banden kunnen koppelen aan het gedrag van F1, F2 en F3 op een intuïtieve wijze." },
    { type: 'paragraph', html: "Professionele formantmeting gebruikt meestal een Lineaire Predictieve Codering (LPC) afgestemd op de spreker. Grondtonen, nasalisatie, galm en achtergrondruis kunnen eenvoudige schattingen beïnvloeden. Gebruik deze gidsen als educatieve hulp en controleer altijd het onderliggende visuele spectrum." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 tot 1000 Hz","Eerste resonantiegebied, gerelateerd aan klinkeropening"],["F2","900 tot 3000 Hz","Tweede resonantiegebied, gerelateerd aan tongpositie"],["F3","2000 tot 4500 Hz","Hoger resonantiegebied, beïnvloed door het spraakkanaal"]] },
    { type: 'title', text: "De invloed van frequentie-instellingen", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Lage grens (4 kHz)", description: "Beter zicht op lage frequenties", points: ["Nuttig voor klinkers", "Kan hoge energie uitsluiten", "Garandeert geen hogere nauwkeurigheid"] },
      { title: "Hoge grens (6/8 kHz)", description: "Meer bovenste details", highlight: true, points: ["Voor heldere stemmen", "Toont wrijvingsklanken", "Comprimeert onderste banden"] }
    ] },
    { type: 'title', text: "Een verantwoorde vergelijking van twee audiosamples", level: 3 },
    { type: 'paragraph', html: "Het vergelijken van twee platen is het meest nuttig wanneer beide opnamen dezelfde klinker of zin bevatten onder soortgelijke akoestische omstandigheden. De weergegeven verschillen zijn absolute fysieke metingen tussen de spectrale pieken. Ze vormen geen gelijkheidspercentage of biometrisch identiteitsbewijs." },
    { type: 'list', items: ["<strong>Vergelijk dezelfde gesproken inhoud:</strong> herhaalde klinkers of woorden zijn eenvoudiger te vergelijken.","<strong>Gebruik gelijke opname-omstandigheden:</strong> microfoon en kamerakoestiek beïnvloeden het spectrum sterk.","<strong>Luister met de cursor:</strong> koppel visuele gebeurtenissen aan het exacte geluidsmoment.","<strong>Vermijd identiteitsclaims:</strong> een vergelijkbaar spectrogram bewijst geen sprekeridentiteit."] },
    { type: 'summary', title: "Samenvatting van de analysator", items: ["Genereer lokaal een audiospectrogram uit compatibele bestanden.","Verken twee samples op gespiegelde of parallele platen.","Leer hoe spectrale energie en formantgebieden veranderen.","Houd vergelijkingen beschrijvend en educatief."] }
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
