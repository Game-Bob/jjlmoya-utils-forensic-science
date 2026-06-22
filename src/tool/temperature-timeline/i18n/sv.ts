import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatur-tidslinje';
const description = 'Utforska jordens genomsnittliga temperaturhistoria genom geologiska epoker.';
const title = 'Planetens Genomsnittliga Temperaturtidslinje';

const howTo = [
  {
    name: 'Valj en epok',
    text: 'Klicka pa ett streck pa skalan.',
  },
  {
    name: 'Kontrollera temperaturen',
    text: 'Las av den globala medeltemperaturen.',
  },
  {
    name: 'Observera planeten',
    text: 'Se hur duken reagerar pa det termiska tillstandet.',
  },
];

const faq = [
  {
    "question": "Har jorden varit varmare i det forflutna an den ar idag?",
    "answer": "Ja, jorden har upplevt klimat som varit betydligt varmare än dagens. Under mesozoikum (dinosauriernas tidsålder) och tidig eocen befann sig planeten i ett växthustillstånd utan polarisar, och de globala medeltemperaturerna översteg 22 grader, vilket är cirka 7 till 8 grader varmare än dagens genomsnitt. Övergångarna till dessa perioder skedde dock under miljoner år, vilket möjliggjorde evolutionär anpassning."
  },
  {
    "question": "Vad orsakade Snowball Earth-fenomenet?",
    "answer": "Snowball Earth (global nedisning) inträffade främst under neoproterozoikum (för cirka 700 miljoner år sedan). Det utlöstes av en extrem minskning av växthusgaser på grund av accelererad kemisk vittring av silikatbergarter efter uppbrytningen av superkontinenten Rodinia. Isen sträckte sig från polerna till ekvatorn, reflekterade solstrålning (albedoeffekt) och låste planeten i en global frysslinga som först bröts efter miljoner år av vulkanisk CO2-ackumulering."
  },
  {
    "question": "Hur reglerar jorden sin temperatur på lång sikt?",
    "answer": "Jorden har en naturlig termostat som styrs av det geologiska kolkretsloppet, vilket regleras främst av plattentektonik och silikatvittring. När planeten värms upp reagerar surt regn snabbare med silikatbergarter, vilket drar ut CO2 ur atmosfären och deponerar det på havsbotten som karbonater, vilket minskar växthuseffekten. Om planeten kyls ner minskar vittringen men vulkanisk aktivitet fortsätter att släppa ut CO2, vilket gradvis värmer upp planeten igen."
  },
  {
    "question": "Hur skiljer sig klimatförändringen i antropocen från det geologiska förflutna?",
    "answer": "Den grundläggande skillnaden ligger i förändringens hastighet. Medan naturliga klimatövergångar i det geologiska förflutna vanligtvis skedde under tiotusentals eller miljontals år (vilket gav utrymme för biologisk migration och evolution), sker antropocen uppvärmning under loppet av decennier. Denna termiska variationstakt är exponentiellt snabbare än nästan alla dokumenterade tidigare händelser, vilket överträffar den nuvarande biosfärens anpassningsförmåga och orsakar påskyndad massutdöende."
  },
  {
    "question": "Vad var Paleocene-Eocene Thermal Maximum (PETM)?",
    "answer": "PETM var en extrem global uppvärmningshändelse som inträffade för ungefär 56 miljoner år sedan. Den orsakades av ett snabbt och massivt utsläpp av kol i atmosfären (möjligen från utsläpp av marina metanhydrater eller nordatlantisk vulkanism), vilket höjde de globala temperaturerna med 5 till 8 grader på några tusen år. Det anses vara den bästa geologiska motsvarigheten till moderna klimatförändringar, vilket resulterade i allvarlig havsförsurning och massutdöenden av bentiska organismer."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Jordens Temperaturtidslinje',
    sub: 'Utforska jordens geologiska klimatperioder',
    ageLabel: 'Ålder:',
    tempLabel: 'Genomsnittstemperatur:',
    selectPrompt: 'Välj en geologisk period.',
    epoch_archean_name: 'Arkeikum',
    epoch_archean_age: '4,0 till 2,5 miljarder ar sedan',
    epoch_archean_desc: 'Extrem het jord med metanrik atmosfar.',
    epoch_proterozoic_name: 'Proterozoikum',
    epoch_proterozoic_age: '2,5 miljarder till 541 miljoner ar sedan',
    epoch_proterozoic_desc: 'Syrgashojning orsakar Huronian-nedisningen.',
    epoch_paleozoic_name: 'Paleozoikum',
    epoch_paleozoic_age: '541 till 252 miljoner ar sedan',
    epoch_paleozoic_desc: 'Livsexplosion i haven och kolonisation av land.',
    epoch_mesozoic_name: 'Mesozoikum',
    epoch_mesozoic_age: '252 till 66 miljoner ar sedan',
    epoch_mesozoic_desc: 'Dinosauriernas tidsalder under vaxthusforhallanden.',
    epoch_cenozoic_name: 'Kenozoikum',
    epoch_cenozoic_age: '66 miljoner ar sedan till nutid',
    epoch_cenozoic_desc: 'Gradvis avkylning mot kvartara istider.',
    epoch_anthropocene_name: 'Antropocen',
    epoch_anthropocene_age: 'Nutid och framtid',
    epoch_anthropocene_desc: 'Snabb uppvarmning drivet av vaxthusgaser.',
  },
  seo: [
  {
    "type": "title",
    "text": "HISTORISK KLIMATOLOGI: Jordens termiska evolution genom geologiska epoker",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Jordens klimat har aldrig varit statiskt. Under sina 4,5 miljarder år av existens har vår planet pendlat mellan två grundläggande tillstånd: växthustillståndet (greenhouse) och istillståndet (icehouse). Att förstå dessa storskaliga fluktuationer är inte bara en geologisk nyfikenhet, utan ett oumbärligt verktyg för att sätta in den antropogena globala uppvärmningens hastighet och allvar i sitt sammanhang. Genom att studera syreisotoper i marina fossiler och luftbubblor i isborrkärnor har paleoklimatologer rekonstruerat en exakt bild av jordens temperaturhistoria."
  },
  {
    "type": "title",
    "text": "Temperaturrekord efter geologisk eon och era",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Jordens historia är indelad i stora tidsintervall som definieras av biologiska och geologiska förändringar. Nedan är listan över uppskattade medeltemperaturer för varje epok som finns i denna tidslinje:"
  },
  {
    "type": "table",
    "headers": [
      "Geologisk Epok",
      "Ålder Aprox.",
      "Medeltemp.",
      "Klimatologiska Milstolpar och Egenskaper"
    ],
    "rows": [
      [
        "<strong>Arkeikum</strong>",
        "4,0 till 2,5 Ga",
        "30 °C",
        "Tidig het jord. En svag ung sol kompenserades av en extrem växthuseffekt rik på metan."
      ],
      [
        "<strong>Proterozoikum</strong>",
        "2,5 Ga till 541 Ma",
        "12 °C",
        "Ökning av fritt syre; orsakade metankollaps och utlöste globala nedisningar (\"Snowball Earth\")."
      ],
      [
        "<strong>Paleozoikum</strong>",
        "541 till 252 Ma",
        "20 °C",
        "Stor marin biologisk mångfald och landkolonisering. Avslutades med vulkanutbrott och extrem uppvärmning."
      ],
      [
        "<strong>Mesozoikum</strong>",
        "252 till 66 Ma",
        "22 °C",
        "Den varma perioden par excellence (superväxthus utan polaris). Dinosauriernas storhetstid."
      ],
      [
        "<strong>Kenozoikum</strong>",
        "66 Ma till idag",
        "14 °C",
        "Gradvis avkylning driven av kontinentala havsströmmar som ledde till kvartära istidscykler."
      ],
      [
        "<strong>Antropocen</strong>",
        "Nutid & framtid",
        "15.2 °C",
        "Drastisk och anomal uppvärmning orsakad av antropogena utsläpp av växthusgaser."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Förflutna termiska extremfall: Från global nedisning till mesozoisk värme",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Planetens historia omfattar extrema klimathändelser. Under proterozoikum frigjorde primitiv fotosyntes syre i stor skala, vilket oxiderade atmosfäriskt metan och störtade planeten i den huroniska istiden - en av de perioder av \"Snowball Earth\" då glaciärer nådde ekvatoriella breddgrader. I motsatt extrem, under mesozoikum och paleocen, mättade intensiv tektonisk vulkanisk aktivitet atmosfären med CO2, vilket höjde den genomsnittliga globala temperaturen till upp till 10 grader över nuvarande nivåer. Dessa perioder saknade helt polaris, med tempererade skogar i arktiska breddgrader och dominans av växelvarma reptiler som dinosaurier."
  },
  {
    "type": "title",
    "text": "Faktorer som styr planetens klimat på en geologisk skala",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Jordens långsiktiga klimat är resultatet av en känslig termodynamisk balans som styrs av flera sammankopplade naturliga mekanismer:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Milankovitch-cykler:</strong> Små periodiska variationer i planetens omloppsbanas excentricitet, lutning och precession ändrar den mottagna solstrålningen.",
      "<strong>Silikat-karbonat-kolcykeln:</strong> Den långsiktiga geokemiska termostaten. Regn tar bort CO2 och omvandlar det till silikater som deponeras i haven.",
      "<strong>Plattentektonik:</strong> Kontinentaldrift förändrar globala havsströmmar och skapar bergskedjor som påskyndar kemisk vittring av CO2.",
      "<strong>Albedofeedback:</strong> Närvaron av snö och is reflekterar solljus, vilket kyler planeten ytterligare i feedbackloopar."
    ]
  },
  {
    "type": "title",
    "text": "Antropocen: En oöverträffad termisk acceleration i biosfären",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Övergången från den stabila holocenperioden till antropocen markerar eran av mänsklighetens direkta inverkan på planetära system. Till skillnad från tidigare termiska händelser, vars orbitala eller vulkaniska orsaker verkade över tidsskalor på tiotusen år, drivs den nuvarande uppvärmningen av massiv förbränning av fossila kolreserver som ackumulerats under miljoner år. Den nuvarande takten av växthusgasackumulering och ökning av den globala medeltemperaturen sker betydligt snabbare än under perm-trias-utdöendet eller PETM, vilket utgör en oöverträffad anpassningsutmaning för planetens biologiska mångfald."
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
