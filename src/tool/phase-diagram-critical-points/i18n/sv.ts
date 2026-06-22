import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'fasdiagram-kritisk-punkt-visualiserare';
const title = 'Fasdiagram och Visualiserare av Kritisk Punkt';
const description = 'Utforska fast, flytande, gas och superkritiska regioner pa ett interaktivt tryck-temperaturfasdiagram med markeringar for trippelpunkt och kritisk punkt.';

const howTo = [
  {
    name: 'Valj ett amne',
    text: 'Vaxla mellan vatten, koldioxid och kavve for att se hur verkliga trippelpunkter och kritiska punkter omformar fasdiagrammet.',
  },
  {
    name: 'Forandra temperatur och tryck',
    text: 'Anvand reglagen for att placera provet pa tryck-temperaturplanet. Diagrammet uppdaterar den aktiva fasregionen och provmarkoren i realtid.',
  },
  {
    name: 'Betrakta den kritiska halo',
    text: 'Forflytta dig mot slutet av ang-vatskegransen for att se hur latent varme tonar bort och atskillnaden mellan vatska och gas upphor i en superkritisk fluid.',
  },
  {
    name: 'Las undervisningspanelen',
    text: 'Anvand fasettiketten, latentvarmemataren och punktavlasningarna for att koppla det visuella diagrammet till termodynamisk vokabular.',
  },
];

const faq = [
  {
    question: 'Vad ar ett fasdiagram?',
    answer: 'Ett fasdiagram visar vilket aggregationstillstand som ar stabilt vid olika kombinationer av temperatur och tryck. Granslinjerna markerar forhallanden dar tvafaser kan samexistera i jamvikt.',
  },
  {
    question: 'Vad hander vid den kritiska punkten?',
    answer: 'Vid den kritiska punkten slutar ang-vatskegransen. Over kritisk temperatur och kritiskt tryck blir materialet en superkritisk fluid och det finns ingen skarp atskillnad mellan vatska och gas.',
  },
  {
    question: 'Varfar har vatten en annorlunda smaltlinje?',
    answer: 'Vatten ar ovanligt eftersom is ar mindre tatt an flytande vatten nara smaltpunkten. Okande tryck kan gynna den tatarre vatskefasen, sa den fast-flytande gransen lutar annorlunda an for mangs andra amnen.',
  },
  {
    question: 'Ar de plottade kurvorna laboratoriemassigt exakta?',
    answer: 'Nej. Verktyget anvander forenklade kurvor som ar faskade vid publicerade trippelpunkt- och kritiskpunkt-varden. Det ar utformat for konceptuellt larande, inte for processteknik eller sakerhetsberakningar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Fasdiagramkontroller',
    substance: 'Amne',
    units: 'Enheter',
    scientificUnits: 'Vetenskapliga (K, MPa)',
    metricUnits: 'Metriska (Celsius, kPa)',
    imperialUnits: 'Imperieenheter (Fahrenheit, psi)',
    temperature: 'Temperatur',
    pressure: 'Tryck',
    diagram: 'Tryck-temperaturfasdiagram',
    sample: 'Provtillstand',
    phase: 'Stabil fas',
    triplePoint: 'Trippelpunkt',
    criticalPoint: 'Kritisk punkt',
    vaporCurve: 'Ang-vatskegrans',
    meltingLine: 'Fast-flytande grans',
    latentHeat: 'Latent varme kontrast',
    criticalProximity: 'Kritisk narbet',
    coordinates: 'Koordinater',
    solid: 'Fast',
    liquid: 'Vatska',
    gas: 'Gas',
    supercritical: 'Superkritisk',
    low: 'lag',
    high: 'hog',
    reset: 'Aterstall',
    interpretation: 'Tolkning',
    note: 'Granslinjer markerar samexistens; regioner markerar den mest stabila fasen for de valda forhallandena.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktiv fasdiagramvisualiserare for trippelpunkter, kokkurvor och kritiska punkter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den har fasdiagramvisualiseraren forwardlar ett abstrakt tryck-temperaturdiagram till en interaktiv karta. Valj ett amne, andra temperaturen och trycket och se om provet forutspas bete sig som en fast amne, vatska, gas eller superkritisk fluid. Målet ar att fasgranser ska kannas rumsliga: att korsa en linje andrar det stabila tillstandet, medan att narma sig den kritiska punkten andrar vad en fasgrans overhuvudtaget betyder.',
    },
    {
      type: 'paragraph',
      html: 'Verktyget ar byggt for studenter, larare, vetenskapsskribenter och alla som soker en tydlig forklaring av fasdiagram. Det betonar de egenskaper som betyder mest i introduktionstermodynamik: trippelpunkten dar tre faser samexisterar, ang-vatskekurvan, den fast-flytande gransen och den kritiska andpunkten dar atskillnaden mellan vatska och gas forsvinner.',
    },
    {
      type: 'title',
      text: 'Hur man laser tryck-temperaturdiagrammet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett fasdiagram placerar temperatur pa en axel och tryck pa den andra. Varje region visar fasen som ar stabil under dessa forhallanden. Linjerna mellan regionerna ar samexistenskurvor: langs dessa linjer kan tva faser forbli i jamvikt snarare an att en fas helt ersatter den andra.',
    },
    {
      type: 'table',
      headers: ['Diagramegenskap', 'Betydelse', 'Vad du ska titta pa i verktyget'],
      rows: [
        ['Trippelpunkt', 'Fast, flytande och gas samexisterar', 'Den lagtempererade knutpunkten dar granserna mots.'],
        ['Ang-vatskekurva', 'Kok- eller kondensationsjamvikt', 'Den bogade linjen fran trippelpunkten till den kritiska punkten.'],
        ['Fast-flytande grans', 'Smalten- eller frysningjamvikt', 'Den branta linjen som separerar fasta och flytande regioner.'],
        ['Kritisk punkt', 'Slutet pa ang-vatskegransen', 'Den markerade andpunkten dar latent varme tonar bort.'],
        ['Superkritiskt region', 'Ingen skarp atskillnad mellan vatska och gas', 'Det hogtempererade, hogtrycksomradet bortom den kritiska punkten.'],
      ],
    },
    {
      type: 'title',
      text: 'Varfor den kritiska punkten ar viktig',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Under den kritiska punkten ar kokning en fasovergang: vatska och anga kan samexistera, och energi kan absorberas som latent varme medan temperaturen forblir bunden till gransvillkoret. Vid den kritiska punkten upphor den gransen. Ovanfor den forandras tatheten kontinuerligt och amnet beskrivs som en superkritisk fluid snarare an en vanlig vatska eller gas.',
    },
    {
      type: 'paragraph',
      html: 'Detta har betydelse inom kemi, planetvetenskap, industriell extraktion, kylning och hogtrycksfysik. Koldioxid, till exempel, blir superkritisk vid relativt tillgangliga forhallanden jamfort med vatten, vilket ar varfor superkritisk CO2 anvands inom extraktion och materialbearbetning. Vatten kraver mycket hogre temperatur och tryck, vilket gor dess kritiska punkt viktig for kraftsystem och geofysik.',
    },
    {
      type: 'title',
      text: 'Vad denna visualiserare forenklar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verkliga fasdiagram kan innehalla polymorfer, metastabila tillstand, icke-ideala blandningar, flera fasta faser och experimentellt anpassade tillstandsekvationer. Detta utbildningsverktyg haller modellen avsiktligt kompakt. Det faskar varje amne till igenkannbara referensvarden och ritar mjuka larkurvor sa att huvudideerna ar latta att granska utan att behova en termodynamiktabell.',
    },
    {
      type: 'list',
      items: [
        '<strong>Anvand det for intuition:</strong> det hjalper till att forklara varfor tryckkokare, torris, kokning och superkritiska fluider beter sig olika.',
        '<strong>Anvand det inte for tekniska granser:</strong> forenklade kurvor ar ingen ersattning for certifierade egenskapsdata.',
        '<strong>Fokusera pa topologi:</strong> det viktigaste lardommalet ar hur fasregioner ar anslutna och var granser slutar.',
      ],
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
