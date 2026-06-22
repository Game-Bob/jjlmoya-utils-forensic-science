import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'halveringstid-radioaktivt-sonderfall-kalkylator';
const title = 'Kalkylator for halveringstid och radioaktivt sonderfall';
const description = 'Simulera radioaktivt sonderfall med verkliga isotoper, halveringstidsformel, stokastiskt atomfalt, aterstaende mangd och relativ aktivitet.';

const howTo = [
  { name: 'Valj isotop', text: 'Börja med kol-14, jod-131, uran-238, teknetium-99m eller radon-222. Varje preset laddar en realistisk halveringstid och ett vanligt vetenskapligt sammanhang.' },
  { name: 'Stall in provstorlek och tid', text: 'Justera antalet atomer som visas och flytta tiden framat for att se hur den aterstaende andelen foljer halveringstidens exponentiella lag.' },
  { name: 'Jamfor exakt matematik och atomart slumpbeteende', text: 'Anvand det deterministiska resultatet som forvantat varde och studera atomfaltet for att se varfor sma prov varierar runt den teoretiska kurvan.' },
  { name: 'Tolka aktiviteten', text: 'Aktiviteten minskar i samma proportion som de icke sonderfallna karnorna, sa mataren visar hur stor del av den ursprungliga stralningshastigheten som finns kvar.' },
];

const faq = [
  { question: 'Vad betyder halveringstid?', answer: 'Halveringstid ar tiden det tar for halften av de instabila karnorna i ett prov att sonderfalla i genomsnitt. Efter en halveringstid aterstar 50%, efter tva 25% och efter tre 12,5%.' },
  { question: 'Varfor stammer atomfaltet inte alltid exakt med procenten?', answer: 'Radioaktivt sonderfall ar probabilistiskt. Formeln ger den forvantade andelen for ett mycket stort prov, medan fältet simulerar enskilda atomer med slumpmassiga trosklar.' },
  { question: 'Ar aktivitetsmataren samma sak som aterstaende atomer?', answer: 'For en enda isotop ar aktiviteten proportionell mot antalet icke sonderfallna karnor. Om 30% av atomerna finns kvar ar aktiviteten ocksa ungefar 30% av startaktiviteten.' },
  { question: 'Kan kalkylatorn anvandas for kol-14-datering?', answer: 'Ja, som begreppslig berakning. Verklig laboratoriedatering korrigerar ocksa kalibreringskurvor, kontaminering och provberedning.' },
  { question: 'Sonderfaller varje isotop till en enda stabil produkt?', answer: 'Inte alltid. Vissa isotoper sonderfaller via kedjor med flera dotterprodukter. Verktyget modellerar moderisotopens halveringstid.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotop',
    sampleAtoms: 'Atomer i provet',
    elapsedTime: 'Forfluten tid',
    halfLife: 'Halveringstid',
    remaining: 'Aterstar',
    decayed: 'Sonderfallit',
    activity: 'Relativ aktivitet',
    timeUnit: 'Tidsenhet',
    expectedCurve: 'Forvantad kurva',
    atomField: 'Atomfalt',
    presetUse: 'Vanlig anvandning',
    oneHalfLife: '1 halveringstid',
    twoHalfLives: '2 halveringstider',
    fourHalfLives: '4 halveringstider',
    custom: 'Anpassad',
    liveAtoms: 'Aktiva atomer',
    decayedAtoms: 'Sonderfallna atomer',
    resetSeed: 'Nytt atommonster',
  },
  seo: [
    { type: 'title', text: 'Kalkylator for radioaktiv halveringstid: atomer, aktivitet och isotoper', level: 2 },
    { type: 'paragraph', html: 'Anvand kalkylatorn for att uppskatta hur mycket av en instabil isotop som finns kvar efter en viss tid. Den ar byggd for vanliga sokningar om halveringstid: formeln, verkliga isotoper, aterstaende moderkarnor, sonderfallna karnor och relativ aktivitet.' },
    { type: 'paragraph', html: 'Berakningen anvander <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. Atomfaltet visar samtidigt hur enskilda karnor sonderfaller slumpmassigt, aven om ett stort prov foljer en jamn exponentiell kurva.' },
    { type: 'table', headers: ['Tid', 'Faktor', 'Aterstaende moderkarnor', 'Relativ aktivitet'], rows: [['0 halveringstider', '(1/2)^0', '100%', '100%'], ['1 halveringstid', '(1/2)^1', '50%', '50%'], ['2 halveringstider', '(1/2)^2', '25%', '25%'], ['3 halveringstider', '(1/2)^3', '12,5%', '12,5%'], ['5 halveringstider', '(1/2)^5', '3,125%', '3,125%'], ['10 halveringstider', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Exempel och anvandning', level: 3 },
    { type: 'table', headers: ['Isotop', 'Halveringstid', 'Vanlig sokavsikt', 'Vad resultatet visar'], rows: [['Kol-14', '5 730 ar', 'Radiokoldatering', 'Hur mycket kol-14-aktivitet som finns kvar.'], ['Jod-131', '8,02 dagar', 'Medicin och nukleara handelser', 'Hur aktiviteten faller over dagar.'], ['Teknetium-99m', '6,01 timmar', 'Bilddiagnostik', 'Varfor aktiviteten avtar inom en klinisk arbetsdag.'], ['Uran-238', '4,47 miljarder ar', 'Geologisk datering', 'Varfor langlivade isotoper kan matas over jordens historia.'], ['Radon-222', '3,82 dagar', 'Inomhusstralning', 'Hur en gasformig exponeringskalla forandras.']] },
    { type: 'paragraph', html: 'For en enda moderisotop ar aktivitet proportionell mot antalet icke sonderfallna karnor. Verktyget ar anvandbart i undervisning, kemi, radiokoldatering, medicinsk isotopplanering och stralskyddsutbildning.' },
    { type: 'paragraph', html: 'Modellen anvander en enda halveringstid. Verkliga matningar kan krava korrigeringar for detektoreffektivitet, bakgrundsstralning, dotterprodukter, biologisk eliminering, kemisk form, skarmning och kalibreringskurvor. Anvand resultatet som pedagogisk uppskattning, inte som medicinsk eller dosimetrisk radgivning.' },
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

