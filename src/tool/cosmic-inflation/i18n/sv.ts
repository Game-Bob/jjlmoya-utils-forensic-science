import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kosmisk-inflation-kalkylator';
const description = 'Berakna den exponentiella expansionen av det tidiga universum under den kosmiska inflationspoken.';
const title = 'Kosmisk Inflationskalkylator: Tidig Universumexpansion';

const howTo = [
  {
    name: 'Valj varden',
    text: 'Dra i skjutreglagen for att se resultaten.',
  },
  {
    name: 'Jampfor skalfaktorer',
    text: 'Se hur manga storleksordningar rymden har expanderat.',
  },
  {
    name: 'Analysera dynamisk distorsion',
    text: 'Duken visar rymdens expansion.',
  },
];

const faq = [
  {
    "question": "Vad ar kosmisk inflation och varfor intraffade den?",
    "answer": "Kosmisk inflation ar en teori som postulerar en ultrasnabb och exponentiell expansion av rymden i universums allra tidigaste sekundbrokdelar, specifikt runt 10^-36 sekunder efter Big Bang. Det intraffade eftersom ett teoretiskt skalart falt, kallat inflaton, befann sig i ett tillstand av hog energitathat i ett falskt vakuum, vilket genererade ett negativt tryck och en repulsiv gravitation som strackte ut rymd-tidens vav."
  },
  {
    "question": "Vad betyder antalet e-folds?",
    "answer": "Antalet e-folds mater varaktigheten av den exponentiella expansionsfasen. Ett e-fold representerar den tid under vilken universums storlek multipliceras med Eulers tal (ungefar 2.718). Om universum genomgar N e-folds okar dess skalfaktor med en faktor e^N. Standard kosmologiska modeller kraver minst 50 till 60 e-folds for att losa platthets- och horisontproblemen."
  },
  {
    "question": "Hur loser inflationen horisontproblemet?",
    "answer": "Horisontproblemet fragar varfor extremt avlagsna regioner i universum har nastan identiska temperaturer i den kosmiska bakgrundsstralningen, trots att ljusets hastighet inte skulle ha tillatit dem att interagera for att na termisk jamvikt. Inflationen loser detta genom att visa att hela det observerbara universum fore den exponentiella expansionen var en pytteliten, kausalt sammanhangande och termiskt homogen region som omedelbart stracktes ut bortom den visuella horisonten."
  },
  {
    "question": "Vad ar platthetsproblemet och hur loses det?",
    "answer": "Energithatheten i dagens universum ligger extremt nara den kritiska tatheten, vilket innebar att rymden ar platt med en minimal felmarginal. Utan inflation skulle varje initial avvikelse fran platthet ha vaxt exponentiellt med tiden, vilket hade kraft en omojlig finjustering vid Big Bang. Inflationen stracker ut den rumsliga krokningen sa valdsamt att varje initial krokning spads ut, pa samma satt som ytan pa en jattesfar framstar som platt lokalt."
  },
  {
    "question": "Vad ar ateruppvarmningsprocessen (reheating)?",
    "answer": "Ateruppvarmning ar den termiska overgang som markerar slutet pa inflationen. Under inflationen kyls universum ner till temperaturer nara den absoluta nollpunkten pa grund av den exponentiella volymexpansionen. Nar inflatonfaltets energi faller till sitt potentials minimum, dumps dess aterstaende energi ut i rymden som standardmodellpartiklar genom kvantinteraktioner, vilket fyller kosmos med ett hett och tatt plasma som inleder den traditionella Big Bang-fasen."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kosmisk Inflationskalkylator',
    efoldsLabel: 'Antal e-folds (N)',
    energyLabel: 'Initial Energiskala (GeV)',
    scaleFactorResult: 'Skalfaktortillvaxt',
    reheatingTempResult: 'Uppskattad Ateruppvarmningstemperatur',
    chartTitle: 'Distorsion av Rymd-Tidvaven',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Kaotisk',
    presetExtreme: 'Extrema Granser',
    efoldsTooltip: 'Typiska modeller forutser mellan 50 och 60 e-folds.',
    energyTooltip: 'GUT-skalan ar runt 10^16 GeV.',
    scaleFactorTooltip: 'Representerar den totala expansionsfaktorn.',
    reheatingTooltip: 'Temperaturen vid slutet av inflationen.',
    analogyInsuff: 'Måttlig inflation. Denna expansion är otillräcklig.',
    analogyProton: 'Universum expanderade från ett protons storlek till en galaxs storlek på en bråkdel av en sekund.',
    analogyObservable: 'Universum expanderade från en subatomär skala till större än det observerbara universum på 10^-32 sekunder.',
  },
  seo: [
  {
    "type": "title",
    "text": "KOSMOLOGI: Teorin om Kosmisk Inflation och Rymd-Tidexpansion",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Kosmisk inflation representerar den fundamentala pelaren som forenar partikelfysik med observationell astrofysik. Teorin foreslogs i borjan av 1980-talet av fysiker som Alan Guth och Andrei Linde, och postulerar att det tidiga universum genomgick en fas av exponentiell expansion som drevs av energitatheten i ett skalart falt kant som inflaton. Denna expansion okade universums volym med en faktor pa minst 10^26 pa en brokdel av en sekund, vilket loste djupa paradoxer i den klassiska Big Bang-modellen och gav det teoretiska ramverket for kosmisk strukturbildning."
  },
  {
    "type": "title",
    "text": "Jamforelse av Inflationsmodeller och Parametrar",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Olika potentialer for inflatonfaltets ger upphov till olika expansionshastigheter och ateruppvarmningstemperaturer. Nedan visas egenskaperna for de huvudsakliga modellerna som simuleras i denna kalkylator:"
  },
  {
    "type": "table",
    "headers": [
      "Inflationsmodell",
      "e-folds Intervall (N)",
      "Energiskala (GeV)",
      "Fysiskt och Dynamiskt Resultat"
    ],
    "rows": [
      [
        "<strong>Standard Guth</strong>",
        "50 - 60",
        "10^16",
        "Loser platthet och horisont; inflationen slutar genom bubbelbildning i en langsam fasovergang."
      ],
      [
        "<strong>Kaotisk Inflation (Linde)</strong>",
        "60 eller mer",
        "10^16",
        "Inflaton rullar mjukt nerfor en enkel parabolisk potential; undviker problem med plotsliga fasovergangar."
      ],
      [
        "<strong>Extrema Granser</strong>",
        "90 eller mer",
        "10^19 (Planck)",
        "Energier nara kvantgravitationsgransen; massiv utstrackning av den primordiala rymd-tiden."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Losning av Klassiska Big Bang-Problem",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Innan inflationen utvecklades led den klassiska Big Bang-kosmologin av allvarliga teoretiska bristande overensstammelser. Horisontproblemet, som har sitt ursprung i homogeniteten hos den kosmiska bakgrundsstralningen, och platthetsproblemet, associerat med rymdens kritiska tathet, antydde behovet av extremt osannolika initiala villkor. Inflationen loser naturligt bada svarigheterna genom att stracka ut en termiskt homogen mikrogrupp och dynamiskt platta ut den lokala rymdgeometrin. Dessutom spader den ut koncentrationen av magnetiska monopoler som borde ha bildats i stor mangd i det tidiga universum."
  },
  {
    "type": "title",
    "text": "Observationella Astronomiska Bevis for Inflationsmodellen",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Teorin om kosmisk inflation ar inte bara en elegant matematisk konstruktion; den har solida indirekta bevis bekraftade av rymdsatelliter som COBE, WMAP och Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>CMB-homogenitet:</strong> Den kosmiska bakgrundsstralningen visar en enhetlig temperatur med variationer pa endast 1 del pa 100,000 pa motsatta sidor av den synliga himlen.",
      "<strong>Platt Geometri:</strong> Matningar av universums krokning bekraftar att den ar rumsligt platt inom mindre an 1% felmarginal, vilket ar forenligt med en massiv inflationsrelaterad utstrackning.",
      "<strong>Franvaro av Monopoler:</strong> Forklarar logiskt den fullstandiga avsaknaden av stabila, tunga magnetiska monopoler i vart observerbara universum.",
      "<strong>Fluktationsspektrum:</strong> De observerade anisotropierna i den kosmiska bakgrunden visar ett spektralindex nagot under 1, exakt som forutspatt av slow-roll inflatonmodeller."
    ]
  },
  {
    "type": "title",
    "text": "Kvantfluktuationer och Galaxernas Fro",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Den mest extraordinara aspekten av kosmisk inflation ar dess formaga att fungera som ett kosmiskt mikroskop. Mikroskopiska kvantfluktuationer i inflatonfaltets stracktes ut till astronomiska skaler under perioden av exponentiell expansion. Vid inflationens slut frystes dessa fluktuationer som tathetsvariationer (primordiala storningar). Dessa tathetsskillnader fungerade som gravitationsfro som under miljarder ar drog till sig materia for att ge upphov till de forsta stjarnorna, galaxerna, galaxhoparna och den kosmiska vav vi observerar idag."
  }
],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
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
