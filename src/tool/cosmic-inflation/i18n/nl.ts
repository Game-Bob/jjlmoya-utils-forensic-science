import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kosmische-inflatie-calculator';
const description = 'Bereken de exponentiele uitdijing van het vroege heelal tijdens het kosmische inflatietijdperk.';
const title = 'Kosmische Inflatie Calculator: Uitdijing Vroege Heelal';

const howTo = [
  {
    name: 'Selecteer waarden',
    text: 'Sleep de schuifregelaars om resultaten te zien.',
  },
  {
    name: 'Vergelijk schaalfactoren',
    text: 'Bekijk met hoeveel orde van grootte de ruimte is uitgebreid.',
  },
  {
    name: 'Analyseer dynamische vervorming',
    text: 'Het canvas toont de expansie van de ruimte.',
  },
];

const faq = [
  {
    "question": "Wat is kosmische inflatie en waarom vond het plaats?",
    "answer": "Kosmische inflatie is een theorie die een ultrasnelle, exponentiele uitdijing van de ruimte postuleert in de allereerste fracties van een seconde van het universum, specifiek rond 10^-36 seconden na de oerknal. Het vond plaats omdat een theoretisch scalair veld, de inflaton genaamd, zich in een toestand van hoge energiedichtheid van een vals vacuum bevond, wat een negatieve druk en een afstotende zwaartekracht genereerde die het weefsel van de ruimte-tijd uitrekte."
  },
  {
    "question": "Wat betekent het aantal e-folds?",
    "answer": "Het aantal e-folds meet de duur van de exponentiele uitdijingsfase. Een e-fold vertegenwoordigt de tijd waarin de omvang van het universum wordt vermenigvuldigd met het getal van Euler (ongeveer 2.718). Als het universum N e-folds ondergaat, neemt de schaalfactor toe met een factor e^N. Standaard kosmologische modellen vereisen ten minste 50 tot 60 e-folds om de vlakheids- en horizonproblemen correct op te lossen."
  },
  {
    "question": "Hoe lost inflatie het horizonprobleem op?",
    "answer": "Het horizonprobleem vraagt waarom extreem verre regio's van het universum bijna identieke temperaturen van de kosmische achtergrondstraling hebben, hoewel de lichtsnelheid hen niet in staat zou hebben gesteld om met elkaar te communiceren om een evenwicht te bereiken. Inflatie lost dit op door aan te tonen dat, voorafgaand aan de exponentiele uitdijing, het hele waarneembare universum een minuscule regio was die causaal verbonden en thermisch homogeen was, die onmiddellijk buiten de visuele horizon werd uitgerekt."
  },
  {
    "question": "Wat is het vlakheidsprobleem en hoe wordt het opgelost?",
    "answer": "De energiedichtheid van het huidige heelal ligt extreem dicht bij de kritieke dichtheid, wat betekent dat de ruimte vlak is met een minimale foutmarge. Zonder inflatie zou elke initiele afwijking van de vlakheid in de loop van de tijd exponentieel zijn gegroeid, wat een onmogelijke fijninstelling bij de oerknal zou vereisen. Inflatie rekt de ruimtelijke kromming zo heftig uit dat elke initiele kromming wordt verdund, vergelijkbaar met hoe het oppervlak van een gigantische bol lokaal perfect vlak lijkt."
  },
  {
    "question": "Wat is het herverwarmingsproces of reheating?",
    "answer": "Herverwarming is de thermische overgang die het einde van de inflatie markeert. Tijdens de inflatie koelt het universum af tot temperaturen nabij het absolute nulpunt als gevolg van de exponentiele expansie van het volume. Wanneer het inflatonveld vervalt tot het minimum van zijn potentiaal, wordt de resterende energie via kwantuminteracties in de ruimte gedumpt in de vorm van deeltjes van het Standaardmodel, waardoor de kosmos wordt gevuld met een heet en dicht plasma dat de traditionele oerknalfase inluidt."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kosmische Inflatie Calculator',
    efoldsLabel: 'Aantal e-folds (N)',
    energyLabel: 'Initiele Energieschaal (GeV)',
    scaleFactorResult: 'Groei van de Schaalfactor',
    reheatingTempResult: 'Geschatte Herverwarmingstemperatuur',
    chartTitle: 'Vervorming van het Ruimte-Tijdweefsel',
    presetGuth: 'Standaard (Guth)',
    presetChaotic: 'Chaotisch',
    presetExtreme: 'Extreme Limieten',
    efoldsTooltip: 'Typische modellen voorspellen tussen 50 en 60 e-folds.',
    energyTooltip: 'De GUT-schaal ligt rond 10^16 GeV.',
    scaleFactorTooltip: 'Vertegenwoordigt de totale expansiefactor.',
    reheatingTooltip: 'De temperatuur aan het einde van de inflatie.',
    analogyInsuff: 'Matige inflatie. Deze expansie is onvoldoende.',
    analogyProton: 'Het heelal dijde in een fractie van een seconde uit van de grootte van een proton naar de grootte van een melkwegstelsel.',
    analogyObservable: 'Het heelal dijde in 10^-32 seconden uit van een subatomaire schaal naar groter dan het waarneembare heelal.',
  },
  seo: [
  {
    "type": "title",
    "text": "KOSMOLOGIE: Kosmische Inflatictheorie en Ruimte-Tijdexpansie",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Kosmische inflatie vertegenwoordigt de fundamentele pijler die de deeltjesfysica verbindt met de observationele astrofysica. Voorgesteld in de vroege jaren 1980 door fysici Alan Guth en Andrei Linde, postuleert deze theorie dat het vroege universum een fase van exponentiele expansie onderging, aangedreven door de energiedichtheid van een scalair veld dat bekend staat als het inflaton. Deze expansie vergrootte het volume van het universum met een factor van ten minste 10^26 in een fractie van een seconde, waarmee diepe paradoxen van het klassieke oerknalmodel werden opgelost en het theoretische kader werd gecreeerd voor de vorming van kosmische structuren."
  },
  {
    "type": "title",
    "text": "Vergelijking van Inflatiemodellen en Parameters",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Verschillende potentialen voor het inflatonveld produceren verschillende expansiesnelheden en herverwarmingstemperaturen. Hieronder staan de kenmerken van de belangrijkste modellen die in deze calculator worden gesimuleerd:"
  },
  {
    "type": "table",
    "headers": [
      "Inflatiemodel",
      "e-folds Bereik (N)",
      "Energieschaal (GeV)",
      "Fysisch en Dynamisch Resultaat"
    ],
    "rows": [
      [
        "<strong>Standaard Guth</strong>",
        "50 - 60",
        "10^16",
        "Lost vlakheid en horizon op; inflatie eindigt via bellennucleatie in een langzame fase-overgang."
      ],
      [
        "<strong>Chaotische Inflatie (Linde)</strong>",
        "60 of meer",
        "10^16",
        "Het inflaton rolt geleidelijk langs een eenvoudig parabolisch potentieel; vermijdt abrupte fase-overgangsproblemen."
      ],
      [
        "<strong>Extreme Limieten</strong>",
        "90 of meer",
        "10^19 (Planck)",
        "Energieen nabij de kwantumzwaartekrachtgrens; enorme uitrekking van de primordiale ruimte-tijd."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Oplossen van Klassieke Oerknalproblemen",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Voordat inflatie werd ontwikkeld, leed de klassieke oerknal-kosmologie aan ernstige theoretische inconsistenties. Het horizonprobleem, voortkomend uit de homogeniteit van de kosmische achtergrondstraling, und het vlakheidsprobleem, geassocieerd met de kritieke dichtheid van de ruimte, suggereerden de noodzaak van uiterst onwaarschijnlijke beginvoorwaarden. Inflatie lost beide problemen op natuurlijke wijze op door een thermisch homogene micro-regio uit te rekken en de lokale ruimtelijke geometrie dynamisch vlak te maken. Bovendien verdunt het de concentratie van magnetische monopolen die zich in overvloed in het vroege heelal hadden moeten vormen."
  },
  {
    "type": "title",
    "text": "Observationeel Astronomisch Bewijs voor het Inflatiemodel",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "De theorie van de kosmische inflatie is niet louter een elegante wiskundige constructie; er is solide indirect bewijs voor, bevestigd door ruimtesatellieten zoals COBE, WMAP en Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>CMB Homogeniteit:</strong> De kosmische achtergrondstraling vertoont een uniforme temperatuur met variaties van slechts 1 deel op 100,000 aan weerszijden van de zichtbare hemel.",
      "<strong>Vlakke Geometrie:</strong> Metingen van de kromming van het heelal bevestigen dat het ruimtelijk vlak is binnen een foutmarge van minder dan 1%, consistent met enorme inflatoire uitrekking.",
      "<strong>Afwezigheid van Monopolen:</strong> Verklaart logisch de volledige afwezigheid van stabiele, zware magnetische monopolen in ons waarneembare heelal.",
      "<strong>Fluctuatiespectrum:</strong> De waargenomen anisotropieen in de kosmische achtergrond tonen een spectrale index die net onder de 1 ligt, precies zoals voorspeld door slow-roll inflatonmodellen."
    ]
  },
  {
    "type": "title",
    "text": "Kwantumfluctuaties en de Zaden van Galactische Structuren",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Het meest buitengewone aspect van kosmische inflatie is het vermogen om te fungeren als een kosmische microscoop. Microscopische kwantumfluctuaties van het inflatonveld werden tijdens de periode van exponentiele expansie uitgerekt tot astronomische schalen. Aan het einde van de inflatie bevroren deze fluctuaties als dichtheidsvariaties (primordiale perturbaties). Deze dichtheidsverschillen dienden als zwaartekrachtzaden die, over miljarden jaren, materie naar zich toe trokken om leven te geven aan de eerste sterren, sterrenstelsels, clusters en het kosmische web dat we vandaag waarnemen."
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
