import type { ToolLocaleContent } from '../../../types';

const slug = 'forensische-presumptieve-bloedtest-simulator';
const title = 'Forensische Presumptieve Bloedtest Simulator';
const description = 'Simuleer presumptieve bloedtesten met behulp van Kastle-Meyer en Luminol reagentia. Onderscheid echt bloed van valse positieven.';

const howTo = [
  {
    "name": "Selecteer een monster",
    "text": "Kies een monster uit het rek om te testen, dit kan bloed of een vals positief materiaal zijn."
  },
  {
    "name": "Kies testmethode",
    "text": "Beslis of u de Kastle-Meyer kleurtest of de Luminol luminescentietest uitvoert."
  },
  {
    "name": "Breng reagentia aan",
    "text": "Voeg druppels Kastle-Meyer toe gevolgd door waterstofperoxide, of breng direct Luminol aan."
  },
  {
    "name": "Interpreteer de reactie",
    "text": "Observeer kleurveranderingen of een blauwe gloed in het donker om de reactie te classificeren."
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "Waarom is het een presumptieve test?",
    "answer": "Presumptieve testen zijn voorbereidende screenings op basis van katalytische activiteit. Ze zijn zeer gevoelig maar niet volledig specifiek, en vereisen confirmatie."
  },
  {
    "key": "faq-2",
    "question": "Wat veroorzaakt een vals positief bij Kastle-Meyer?",
    "answer": "De test leunt op de peroxidase-achtige activiteit van heem. Chemische oxiderende stoffen, metaalionen zoals roest, of plantenperoxidasen kunnen de reactie katalyseren."
  },
  {
    "key": "faq-3",
    "question": "Hoe werkt de Luminol reactie?",
    "answer": "Luminol reageer met waterstofperoxide in aanwezigheid van een katalysator zoals het ijzer in hemoglobine. Dit zorgt voor blauw licht bij terugkeer naar de grondtoestand."
  },
  {
    "key": "faq-4",
    "question": "Kan bleekmiddel een vals positief geven?",
    "answer": "Ja, natriumhypochloriet is een sterke oxidator. Het oxideert fenolftaline of luminol direct zonder katalysator, met een snel vervagende reactie."
  },
  {
    "key": "faq-5",
    "question": "Wat is het verschil tussen presumptieve en confirmatieve testen?",
    "answer": "Presumptieve testen zijn snel en gevoelig om vlekken te vinden. Confirmatieve testen bewijzen met zekerheid de aanwezigheid van menselijk bloed."
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
  "title": "Bloedtest Simulator",
  "desc": "Voer virtuele laboratoriumexperimenten uit met Luminol en Kastle-Meyer reagentia om bloed te detecteren.",
  "configTitle": "Laboratoriumregeling",
  "sampleLabel": "Selecteer Monster",
  "reagentLabel": "Selecteer Reagens",
  "lightsLabel": "Verlichting",
  "btnLightsOff": "Licht Uit",
  "btnLightsOn": "Licht Aan",
  "btnReset": "Schaal Resetten",
  "resultsTitle": "Testresultaten",
  "sampleBlood": "Bloedmonster (Controle)",
  "sampleRust": "Roest (Ijzeroxide)",
  "sampleBleach": "Bleekmiddel (Natriumhypochloriet)",
  "samplePotato": "Aardappel (Plantenperoxidase)",
  "sampleSaliva": "Speekselmonster",
  "reagentKM": "Kastle-Meyer Reagens",
  "reagentH2O2": "Waterstofperoxide (H2O2)",
  "reagentLuminol": "Luminoloplossing",
  "resultTruePositive": "Echt Positief (Bloed Gedetecteerd)",
  "resultFalsePositive": "Vals Positief (Niet-Bloed Katalysator)",
  "resultNegative": "Negatieve Reactie",
  "statusLabel": "Reactiestatus",
  "reactionLabel": "Reactie-Uitleg",
  "dropReagentBtn": "Druppel Aanbrengen",
  "activeCompounds": "Actieve Verbindingen",
  "reactionSpeed": "Reactiesnelheid",
  "reactionDuration": "Reactieduur",
  "specimenBase": "Monsterbasis",
  "kmPending": "Kastle-Meyer reagens aangebracht. Voeg waterstofperoxide (H2O2) toe om de kleurverandering te katalyseren.",
  "h2o2Only": "Waterstofperoxide aangebracht. Geen zichtbare reactie zonder Kastle-Meyer indicator.",
  "noReaction": "Geen reactie waargenomen. Het monster blijft helder.",
  "luminolBlood": "Directe intense blauwe gloed waargenomen in het donker. Heemgroepen in hemoglobine hebben luminol katalytisch geoxideerd. Echt Positief.",
  "luminolBleach": "Directe, zeer intense blauwe gloed waargenomen die zeer snel (binnen 2 seconden) vervaagde. Bleekmiddel oxideert luminol direct. Vals Positief.",
  "luminolRust": "Zwakke, doffe blauwe gloed waargenomen. Metaalionen in roest katalyseren de oxidatie zwak. Vals Positief.",
  "luminolPotato": "Geen luminescentie. Plantenperoxidasen katalyseren de oxidatie van luminol niet onder deze omstandigheden. Negatief.",
  "luminolNegative": "Geen luminescentie waargenomen in het donker. De verbinding is niet katalytisch voor luminoloxidatie. Negatief.",
  "kmBlood": "Directe heldere roze kleuring waargenomen na toevoeging van waterstofperoxide. Heem in bloed katalyseerde de oxidatie van fenolftaline naar fenolftaleïne. Echt Positief.",
  "kmBleach": "Directe sterke roze kleurverandering. Natriumhypochloriet oxideert fenolftaline direct zonder peroxide. Vals Positief.",
  "kmRust": "Langzame, zwakke bruinroze kleuring die na enkele seconden verschijnt. Roest katalyseert de reactie veel trager. Vals Positief.",
  "kmPotato": "Langzame, zwakke roze kleuring na een vertraging. Plantenperoxidasen katalyseren de reactie zwak. Vals Positief.",
  "kmNegative": "Geen kleurverandering waargenomen. De oplossing blijft kleurloos. Negatief."
},
  seo: [
  {
    "type": "title",
    "text": "Volledige Gids voor Forensische Bloedtesten",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Presumptieve bloedtesten zijn voorlopige, zeer gevoelige screeningstesten die op een delictlocatie worden gebruikt om verdachte rode vlekken te onderzoeken op de aanwezigheid van bloed. Voordat men dure en tijdrovende DNA-analyses of specifieke laboratoriumonderzoeken uitvoert, vertrouwen rechercheurs op deze snelle chemische tests om biologische sporen op kleding, wapens en oppervlakken te lokaliseren. Omdat deze screenings reageren op de peroxidase-achtige activiteit van de heemgroep in hemoglobine, zijn ze presumptief van aard. Een positieve reactie duidt sterk op de aanwezigheid van bloed, maar een confirmatieve laboratoriumtest is absoluut noodzakelijk om andere reactieve stoffen uit te sluiten."
  },
  {
    "type": "title",
    "text": "Werking van de Kastle-Meyer Indicatiereactie",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "De Kastle-Meyer kleurreactie (KM) is gebaseerd op de chemische oxidatie van fenolftaline naar fenolftaleïne. Dit proces moet in een strikte volgorde worden uitgevoerd: eerst brengt de onderzoeker de kleurloze fenolftaline aan op de te testen stof. Als er bloed aanwezig is, treedt de heemgroep van de hemoglobine op als een katalysator. Zodra waterstofperoxide wordt toegevoegd, versnelt heem de ontbinding van de peroxide, waardoor de fenolftaline direct oxideert naar het roze fenolftaleïne, wat een heldere roze kleur geeft. Een vertraagde kleurverandering na meer dan 15 seconden wordt beschouwd als negatief."
  },
  {
    "type": "title",
    "text": "Luminol en Forensische Chemische Luminescentie",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Luminol is een chemische verbinding die onder invloed van een oxidator en een metaalkatalysator een helderblauwe gloed in het donker afgeeft. Forensische experts spuiten een verdunde oplossing van luminol over grotere oppervlakken op de plaats van het misdrijf. Zodra de oplossing in contact komt met bloedresten, katalyseert het ijzer in de hemoglobine de reactie. Hierdoor ontstaat een aangeslagen aminophthalat-ion dat bij terugkeer naar de grondtoestand lichtenergie uitstraalt. Omdat deze lichtemissie zwak is, moet de ruimte volledig verduisterd zijn om de gloed waar te nemen en te fotograferen."
  },
  {
    "type": "table",
    "headers": [
      "Monster Type",
      "Kastle-Meyer Reactie",
      "Luminol Gloedprofiel",
      "Forensische Diagnostiek"
    ],
    "rows": [
      [
        "Bloed Controle",
        "Directe heldere roze verkleuring na H2O2.",
        "Intense en stabiele blauwe gloed tot 8s.",
        "Echt Positief. Heem levert de noodzakelijke katalytische activiteit."
      ],
      [
        "Bleekmiddel",
        "Roze kleur verschijnt direct voor H2O2.",
        "Zeer intense gloed die binnen 2s vervaagt.",
        "Vals Positief. Sterke oxidator reagerar zonder katalysator."
      ],
      [
        "Roest (Ijzeroxide)",
        "Langsame en zwakke bruinroze verkleuring.",
        "Zwakke, doffe blauwe gloed.",
        "Vals Positief. Vrije ijzerionen katalyseren met zeer lage efficiëntie."
      ],
      [
        "Aardappel (Enzymen)",
        "Langsame en zeer zwakke roze verkleuring.",
        "Geen gloed waargenomen in het donker.",
        "Vals Positief (KM) / Negatief (LUM)."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Onderscheid Tussen Echt Bloed en Vals Positieve Reacties",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Het correct uitsluiten van valse positieven is een cruciaal aspect van forensisch laboratoriumonderzoek. Reinigingsmiddelen met natriumhypochloriet (bleek) oxideren de indicator direct zonder dat er waterstofperoxide nodig is. Forensische experts herkennen dit door de tijd te meten: bleek reageert in de KM-test onmiddellijk zonder peroxide en de luminolgloed verdwijnt binnen twee seconden. Plantaardige peroxidasen (zoals in aardappelen of uien) worden bovendien geïnactiveerd door hitte, terwijl hemoglobine thermisch stabiel blijft en na verhitting nog steeds reageert."
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
