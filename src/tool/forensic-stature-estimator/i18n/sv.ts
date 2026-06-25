import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensisk-kroppslangdsbedamning-trotter-gleser-kalkylator';
const title = 'Forensisk Kroppslängdsbedömare';
const description = 'Uppskatta en individs levande kroppslängd från mänskliga långa ben med Trotter och Glesers regressionsekvationer under hänsyn till biologiskt kön, ursprung och ålderskorrigering.';

const howTo = [
  {
    name: 'Välj ben och variabler',
    text: 'Välj det specifika långa benet som ska mätas (Femur, Tibia, Humerus, Fibula, Radius eller Ulna) tillsammans med biologiskt kön, ursprungsgrupp och individens ålder.'
  },
  {
    name: 'Bestäm benets längd',
    text: 'Justera det skjutbara skjutmåttet på det virtuella osteometriska bordet för att ange benets maximala längd i centimeter.'
  },
  {
    name: 'Beräkna kroppslängd',
    text: 'Kalkylatorn tillämpar motsvarande Trotter-Gleser-regressionsformler och drar av 0,06 cm per år för individer över 30 år.'
  },
  {
    name: 'Tolka intervall och felmarginaler',
    text: 'Granska den uppskattade längden, standardfelet (SEE) och det 95-procentiga prediktionsintervallet.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Hur fungerar regressionsformlerna från Trotter och Gleser?',
    answer: 'Ekvationerna använder linjär regression för att modellera korrelationen mellan levande kroppslängd och maximallängden på långa ben. Kalkylatorn tillämpar populations- och könsspecifika kofaktorer.'
  },
  {
    key: 'faq-2',
    question: 'Varför kräver verktyget biologiskt kön och ursprung?',
    answer: 'Mänskliga kroppsproportioner varierar mellan kön och geografiska populationer. Män har generellt andra förhållanden mellan lemlängd och kroppslängd än kvinnor.'
  },
  {
    key: 'faq-3',
    question: 'Varför finns det en ålderskorrigeringsfaktor?',
    answer: 'Kroppslängden minskar gradvis efter tidig vuxenålder på grund av att ryggradens diskar pressas samman. Trotter och Gleser rekommenderade att dra av 0,06 cm för varje år över 30.'
  },
  {
    key: 'faq-4',
    question: 'Vad är standardfelet för uppskattningen (SEE)?',
    answer: 'SEE representerar standardavvikelsen för residualerna i regressionsmodellen och visar den typiska avvikelsen från regressionslinjen.'
  },
  {
    key: 'faq-5',
    question: 'Vilka långa ben ger de mest exakta uppskattningarna?',
    answer: 'Ben i de nedre lemmarna - särskilt femur och tibia - ger de mest exakta uppskattningarna eftersom de direkt bidrar till en persons höjd. Övre lemmar har högre felmarginaler.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Forensisk Kroppslängdsbedömare',
    desc: 'Simulera mätningar på ett osteometriskt bord och beräkna levande kroppslängd med linjär regression.',
    configTitle: 'Osteometrisk Konfiguration',
    boneLabel: 'Benpreparat',
    lengthLabel: 'Benlängd',
    unitLabel: 'Systemenhet',
    metricOption: 'Metrisk (cm)',
    imperialOption: 'Imperial (tum)',
    sexLabel: 'Biologiskt Kön',
    ancestryLabel: 'Ursprungsgrupp',
    ageLabel: 'Ålder vid dödsfall (år)',
    maleOption: 'Man',
    femaleOption: 'Kvinna',
    whiteOption: 'Vit / Kaukasisk',
    blackOption: 'Svart / Afroamerikan',
    asianOption: 'Asiat / Mongolid',
    femurName: 'Femur (Lårben)',
    tibiaName: 'Tibia (Skenben)',
    humerusName: 'Humerus (Överarmsben)',
    fibulaName: 'Fibula (Vadben)',
    radiusName: 'Radius (Strålben)',
    ulnaName: 'Ulna (Armbågsben)',
    resultsTitle: 'Resultat för kroppslängdsbedömning',
    estimateLabel: 'Uppskattad Kroppslängd',
    errorLabel: 'Standardfel (SEE)',
    rangeLabel: '95% Prediktionsintervall',
    formulaLabel: 'Regressionsformel',
    formulaBoneFactor: 'Benfaktor',
    formulaConstant: 'Konstant',
    formulaAgeCorrection: 'Ålderskorrigering',
    formulaStdError: 'Standardfel (SEE)',
    fallbackAlert: 'Det finns ingen direkt Trotter-Gleser-formel för asiatiska kvinnor; referensformler för vita kvinnor används som ett forensiskt komplement.',
    boardInstructions: 'Dra skjutmåttet eller använd inmatningsfälten för att mäta benet.',
    rulerLabelMetric: 'Metrisk skala (mm)',
    rulerLabelImperial: 'Imperial skala (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Omfattande guide till kroppslängdsbedömning inom forensisk antropologi',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Uppskattning av kroppslängd är en grundläggande del av biologisk profilering inom fysisk antropologi, bioarkeologi och forensisk vetenskap. När skelettdelar hittas hjälper rekonstruktionen av individens levande höjd utredare att matcha mot register över försvunna personer. Kroppslängden uppskattas genom att mäta maximallängden på långa ben, vilka korrelerar starkt med kroppshöjden.'
    },
    {
      type: 'paragraph',
      html: 'Denna digitala osteometriska simulator gör det möjligt för studenter och forskare att utforska de linjära regressionsmodeller som utvecklades av Mildred Trotter och Goldine C. Gleser. Genom att konfigurera parametrar som bentyp, biologiskt kön, ursprung och ålder kan användaren studera hur kroppsproportioner påverkar formlerna.'
    },
    {
      type: 'title',
      text: 'Att förstå Trotter-Glesers regressionsformler',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter och Goldine C. Gleser publicerade sina regressionsformler under 1950-talet baserat på data från militära dödsfall och anatomiska samlingar. Ekvationerna har formen: Kroppslängd = (Lutning × Benlängd) + Konstant ± Standardfel. Separata formler används för kön och ursprung.'
    },
    {
      type: 'table',
      headers: ['Benpreparat', 'Regressionsmodell vita män', 'Regressionsmodell vita kvinnor', 'Forensisk nytta & Tillförlitlighet'],
      rows: [
        ['Femur (Lårben)', 'Kroppslängd = 2.32 × Femur + 65.53 ± 3.94 cm', 'Kroppslängd = 2.47 × Femur + 54.10 ± 3.72 cm', 'Högst tillförlitlighet. Femur är det huvudsakliga viktbärande benet i nedre extremiteten.'],
        ['Tibia (Skenben)', 'Kroppslängd = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Kroppslängd = 2.90 × Tibia + 61.53 ± 3.66 cm', 'Hög tillförlitlighet. Det är viktigt att mäta utan den mediala malleolen för att stämma överens med Trotters protokoll.'],
        ['Fibula (Vadben)', 'Kroppslängd = 2.60 × Fibula + 75.50 ± 3.86 cm', 'Kroppslängd = 2.93 × Fibula + 59.61 ± 3.57 cm', 'Mycket tillförlitlig, men fibula är tunn och ofta fragmenterad i historiska fynd.'],
        ['Humerus (Överarmsben)', 'Kroppslängd = 2.89 × Humerus + 78.10 ± 4.57 cm', 'Kroppslängd = 3.36 × Humerus + 57.97 ± 4.45 cm', 'Måttlig tillförlitlighet. Övre lemmar bär inte vikt och uppvisar större standardavvikelser.'],
        ['Radius (Strålben)', 'Kroppslängd = 3.79 × Radius + 79.42 ± 4.66 cm', 'Kroppslängd = 4.74 × Radius + 54.93 ± 4.45 cm', 'Lägre tillförlitlighet på grund av stor individuell variation i underarmens proportioner.']
      ]
    },
    {
      type: 'title',
      text: 'Åldersrelaterad längdminskning och korrigeringar',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Kroppslängden är inte konstant genom livet. Från 30 års ålder sker en gradvis minskning av längden på grund av disksammanpressning och förändrad kroppshållning. Trotter och Gleser rekommenderade att dra av 0,06 cm för varje år över 30: Längdförlust = 0,06 × (Ålder - 30).'
    },
    {
      type: 'title',
      text: 'Metodologiska avvikelser och tibia-mätprotokoll',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Ett välkänt problem rör mätningen av skenbenet (tibia). I Trotters studie från 1952 mättes skenbenet utan den mediala malleolen, medan den inkluderades i studien 1958. Att tillämpa 1952 års formler på en tibia som mätts med malleolen leder till en systematisk överskattning.'
    },
    {
      type: 'title',
      text: 'Sekulära trender och historiska referensdata',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Eftersom Trotter och Glesers referensdata kommer från personer födda under sena 1800-talet och tidiga 1900-talet, speglar formlerna dåtida levnadsvillkor. Nutida generationer är generellt längre (sekulär trend). Moderna forensiker kompletterar därför ofta formlerna med moderna verktyg som FORDISC.'
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
