import type { ToolLocaleContent } from '../../../types';

const slug = 'forensisk-presumtivt-blodtest-simulator';
const title = 'Forensisk Presumtivt Blodtest Simulator';
const description = 'Simulera presumtiva blodtester med Kastle-Meyer och Luminol reagenser. Skilj på riktigt blod och falska positiva svar.';

const howTo = [
  {
    "name": "Välj ett prov",
    "text": "Välj ett prov från stället som ska testas, vilket kan vara blod eller ett falskt positivt material."
  },
  {
    "name": "Välj testmetod",
    "text": "Beslut om du vill utföra Kastle-Meyer färgtestet eller Luminol luminescenstestet."
  },
  {
    "name": "Applicera reagenser",
    "text": "Tillsätt droppar av Kastle-Meyer reagens följt av väteperoxid, eller applicera Luminol direkt."
  },
  {
    "name": "Tolka reaktionen",
    "text": "Observera färgförändringar eller en blå glöd i mörkret för att klassificera reaktionen."
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "Varför kallas det ett presumtivt test?",
    "answer": "Presumtiva tester är preliminära screeningar baserade på katalytisk aktivitet. De är mycket känsliga men inte helt specifika."
  },
  {
    "key": "faq-2",
    "question": "Vad orsakar ett falskt positivt svar i Kastle-Meyer-testet?",
    "answer": "Testet bygger på heme-gruppens aktivitet. Kemiska oxidationsmedel, metalljoner eller växtperoxidaser kan också katalysera reaktionen."
  },
  {
    "key": "faq-3",
    "question": "Hur sker Luminol reaktionen?",
    "answer": "Luminol reagerar med väteperoxid i närvaro av en katalysator som järnet i hemoglobin. Detta avger ett blått ljus vid återgång till grundtillståndet."
  },
  {
    "key": "faq-4",
    "question": "Kan blekmedel orsaka falska positiva svar?",
    "answer": "Ja, natriumhypoklorit är ett starkt oxidationsmedel. Det oxiderar direkt fenolftalin eller luminol utan katalysator med en snabbt bleknande reaktion."
  },
  {
    "key": "faq-5",
    "question": "Vad är skillnaden mellan presumtiva och konfirmerande tester?",
    "answer": "Presumtiva tester är snabba och billiga för att hitta fläckar. Konfirmerande tester bevisar närvaron av humanblod med säkerhet."
  }
];

const bibliography = [
  {
    "name": "Kastle-Meyer test - Wikipedia",
    "url": "https://en.wikipedia.org/wiki/Kastle%E2%80%93Meyer_test"
  },
  {
    "name": "Grodsky, M., Wright, K. & Kirk, P. L. (1951). Simplified preliminary blood testing. An improved technique and comparative study of methods. Journal of Criminal Law and Criminology.",
    "url": "https://scholarlycommons.law.northwestern.edu/jclc/vol42/iss1/10/"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "title": "Blodtest Simulator",
  "desc": "Utför virtuella laboratorieexperiment med Luminol och Kastle-Meyer reagenser för att detektera blod.",
  "configTitle": "Laboratoriekontroller",
  "sampleLabel": "Välj Prov",
  "reagentLabel": "Välj Reagens",
  "lightsLabel": "Belysning",
  "btnLightsOff": "Släck Lampor",
  "btnLightsOn": "Tänd Lampor",
  "btnReset": "Återställ Skål",
  "resultsTitle": "Testresultat",
  "sampleBlood": "Blodprov (Kontroll)",
  "sampleRust": "Rost (Järnoxid)",
  "sampleBleach": "Blekmedel (Natriumhypochlorit)",
  "samplePotato": "Potatis (Växtperoxidase)",
  "sampleSaliva": "Salivprov",
  "reagentKM": "Kastle-Meyer Reagens",
  "reagentH2O2": "Väteperoxid (H2O2)",
  "reagentLuminol": "Luminollösning",
  "resultTruePositive": "Riktigt Positivt (Blod Detekterat)",
  "resultFalsePositive": "Falskt Positivt (Icke-Blod Katalysator)",
  "resultNegative": "Negativ Reaktion",
  "statusLabel": "Reaktionsstatus",
  "reactionLabel": "Reaktionsförklaring",
  "dropReagentBtn": "Applicera Droppe",
  "activeCompounds": "Aktiva Föreningar",
  "reactionSpeed": "Reaktionshastighet",
  "reactionDuration": "Reaktionsvaraktighet",
  "specimenBase": "Provbas",
  "kmPending": "Kastle-Meyer reagens har applicerats. Tillsätt Väteperoxid (H2O2) för att katalisera färgförändringen.",
  "h2o2Only": "Väteperoxid har applicerats. Ingen synlig reaktion utan Kastle-Meyer indikator.",
  "noReaction": "Ingen reaktion observerad. Provet förblir färglöst.",
  "luminolBlood": "Direkt intensiv blå glöd observerad i mörkret. Hemegrupper i hemoglobin oxiderade luminol katalytiskt. Riktigt Positivt.",
  "luminolBleach": "Direkt mycket intensiv blå glöd observerad som försvann på under 2 sekunder. Blekmedel oxiderar luminol direkt. Falskt Positivt.",
  "luminolRust": "Svag blå glöd observerad. Metalljoner i rost katalyserar oxidationen svagt. Falskt Positivt.",
  "luminolPotato": "Ingen luminescens. Växtperoxidaser katalyserar inte oxidationen av luminol under dessa förhållanden. Negativ.",
  "luminolNegative": "Ingen luminescens observerad i mörkret. Föreningen katalyserar inte luminoloxidation. Negativ.",
  "kmBlood": "Direkt stark rosa färgning efter tillsats av väteperoxid. Heme i blod katalyserade oxidationen av fenolftalin till fenolftalein. Riktigt Positivt.",
  "kmBleach": "Direkt stark rosa färgförändring. Natriumhypoklorit oxiderar fenolftalin direkt utan väteperoxid. Falskt Positivt.",
  "kmRust": "Långsam, svag brunrosa färgning efter några sekunder. Rost katalyserar reaktionen mycket långsammare. Falskt Positivt.",
  "kmPotato": "Långsam, svag rosa färgning efter en fördröjning. Växtperoxidaser katalyserar reaktionen svagt. Falskt Positivt.",
  "kmNegative": "Ingen färgförändring observerad. Lösningen förblir färglös. Negativ."
},
  seo: [
  {
    "type": "title",
    "text": "Fullständig Guide för Forensiska Blod Vortester i Laboratorium",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Presumtiva blodtester är preliminära, mycket känsliga screeninganalyser som används på brottsplatser och i kriminaltekniska laboratorier för att söka efter potentiella blodspår. Innan man genomför dyrbar och tidskrävande DNA-analys förlitar sig utredare på dessa snabba tester för att lokalisera biologiskt material på kläder, vapen och andra ytor. Eftersom dessa screeningtester reagerar på den peroxidase-liknande aktiviteten hos heme-gruppen i hemoglobin, är de presumtiva till sin karaktär. Ett positivt svar tyder starkt på blod, men ett konfirmerande test i laboratorium krävs alltid för att utesluta falska positiva svar."
  },
  {
    "type": "title",
    "text": "Hur Kastle-Meyer Färgtestet Fungerar i Detalj",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Kastle-Meyer färgtestet (KM) utnyttjar reducerad, färglös fenolftalin som oxideras till rosa fenolftalein. Reaktionssekvensen är mycket strikt: först appliceras det färglösa reagenset på provet. Om blod finns närvarande fungerar heme-gruppen som en organisk katalysator. När väteperoxid tillsätts katalyserar heme oxidationen av fenolftalin, vilket omedelbart ger en starkt rosa färg. En fördröjd färgförändring efter mer än femton sekunder betraktas som en negativ reaktion orsakad av omgivande syreoxidation."
  },
  {
    "type": "title",
    "text": "Luminol och Kemisk Luminescens i Forensisk Forskning",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Luminol är en kemisk förening som avger en blå-cyan färgad glöd i mörkret när den oxideras i närvaro av en metallkatalysator. Forensiker sprejar en utspädd alkalisk luminollösning över stora ytor på brottsplatsen. Vid kontakt med osynliga blodrester katalyserar järnet i hemoglobinet reaktionen med oxidationsmedlet. Denna reaktion bildar en exciterad aminophthalat-jon som avger ljusenergi när den återgår till sitt grundtillstånd. Eftersom ljusintensiteten är svag krävs fullständigt mörker för att observera och fotografera glöden."
  },
  {
    "type": "table",
    "headers": [
      "Testat Material",
      "Kastle-Meyer Profil",
      "Luminol Glödprofil",
      "Forensisk Bedömning"
    ],
    "rows": [
      [
        "Blod Kontrollprov",
        "Omedelbar stark rosa färgning efter H2O2.",
        "Intensiv och stabil blå-cyan glöd upp till 8s.",
        "Riktigt Positivt. Heme ger en effektiv katalytisk aktivitet."
      ],
      [
        "Blekmedel",
        "Rosa färgning redan före H2O2 tillsatts.",
        "Mycket intensiv glöd som försvinner inom 2s.",
        "Falskt Positivt. Stark oxidator reagerar direkt utan katalys."
      ],
      [
        "Järnoxid (Rost)",
        "Långsam och svag brunrosa färgning.",
        "Svag, matt blå glöd.",
        "Falskt Positivt. Fria järnjoner katalyserar svagt."
      ],
      [
        "Potatis (Peroxidase)",
        "Långsam och svag rosa färgning.",
        "Ingen luminescens observerad i mörkret.",
        "Falskt Positivt (KM) / Negativt (LUM)."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Särskilja Riktigt Blod Från Falska Positiva Svar på Laboratoriet",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Att skilja riktigt blod från falska positiva reaktioner är avgörande för bevisvärdet i domstol. Rengöringsmedel som natriumhypoklorit (blekmedel) oxiderar indikatorer direkt utan att väteperoxid behövs. Forensiska experter identifierar dem genom att studera reaktionshastigheten: blekmedel ger KM-reaktion direkt utan väteperoxid och dess luminolglöd slocknar nästan direkt. Dessutom inaktiveras växtperoxidaser av värme, medan hemoglobin är värmestabilt och behåller sin katalytiska förmåga efter upphettning."
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
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
