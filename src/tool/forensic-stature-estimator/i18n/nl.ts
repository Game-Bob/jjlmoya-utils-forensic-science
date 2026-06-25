import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensische-lengteschatting-trotter-gleser-calculator';
const title = 'Forensische Lichaamslengte Schatting';
const description = 'Schat de levende lichaamslengte van menselijke resten aan de hand van lange beenderen met de regressievergelijkingen van Trotter en Gleser.';

const howTo = [
  {
    name: 'Selecteer bot en variabelen',
    text: 'Kies het specifieke lange bot dat moet worden gemeten (Dijbeen, Scheenbeen, Opperarmbeen, Kuitbeen, Spaakbeen of Ellepijp) samen met biologisch geslacht, afkomst en leeftijd.'
  },
  {
    name: 'Bepaal de botlengte',
    text: 'Pas de schuifmaat op het virtuele osteometrische bord aan om de maximale lengte van het bot in centimeters te specificeren.'
  },
  {
    name: 'Bereken de geschatte lengte',
    text: 'De rekenmachine past de Trotter-Gleser-regressieformules toe en trekt 0,06 cm per jaar af voor individuen ouder dan 30 jaar.'
  },
  {
    name: 'Interpreteer intervallen en foutmarges',
    text: 'Bekijk de geschatte lengte, de standaardfout (SEE) en het 95% voorspellingsinterval.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Hoe werken de regressievergelijkingen van Trotter en Gleser?',
    answer: 'De vergelijkingen gebruiken lineaire regressie om de correlatie tussen levende lengte en de maximale lengte van lange beenderen te modelleren.'
  },
  {
    key: 'faq-2',
    question: 'Waarom vereist de tool biologisch geslacht en afkomst?',
    answer: 'Menselijke lichaamsproporties variëren per geslacht en geografische afkomst. Mannen en vrouwen hebben verschillende verhoudingen tussen ledematen en totale lengte.'
  },
  {
    key: 'faq-3',
    question: 'Waarom is er een leeftijdscorrectiefactor?',
    answer: 'De levende lengte neemt na de vroege volwassenheid geleidelijk af door compressie van de tussenwervelschijven. Er wordt 0,06 cm afgetrokken voor elk jaar ouder dan 30.'
  },
  {
    key: 'faq-4',
    question: 'Wat is de standaardfout van de schatting (SEE)?',
    answer: 'De SEE vertegenwoordigt de standaarddeviatie van de residuen in het regressiemodel en geeft de nauwkeurigheid van de voorspelling aan.'
  },
  {
    key: 'faq-5',
    question: 'Welke lange beenderen geven de meest nauwkeurige resultaten?',
    answer: 'De beenderen van de onderste ledematen (dijbeen en scheenbeen) geven de meest nauwkeurige schattingen omdat ze direct bijdragen aan de lichaamslengte.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Forensische Lichaamslengte Schatting',
    desc: 'Simuleer osteometrische metingen en bereken de levende lichaamslengte met lineaire regressie.',
    configTitle: 'Osteometrische Configuratie',
    boneLabel: 'Botspecimen',
    lengthLabel: 'Botlengte',
    unitLabel: 'Systeemenheid',
    metricOption: 'Metrisch (cm)',
    imperialOption: 'Imperiaal (inch)',
    sexLabel: 'Biologisch Geslacht',
    ancestryLabel: 'Afkomstgroep',
    ageLabel: 'Leeftijd bij Overlijden (jaar)',
    maleOption: 'Man',
    femaleOption: 'Vrouw',
    whiteOption: 'Wit / Kaukasisch',
    blackOption: 'Zwart / Afro-Amerikaans',
    asianOption: 'Aziatisch / Mongoloïde',
    femurName: 'Femur (Dijbeen)',
    tibiaName: 'Tibia (Scheenbeen)',
    humerusName: 'Humerus (Opperarmbeen)',
    fibulaName: 'Fibula (Kuitbeen)',
    radiusName: 'Radius (Spaakbeen)',
    ulnaName: 'Ulna (Ellepijp)',
    resultsTitle: 'Resultaten Lengteschatting',
    estimateLabel: 'Geschatte Lichaamslengte',
    errorLabel: 'Standaardfout (SEE)',
    rangeLabel: '95% Voorspellingsinterval',
    formulaLabel: 'Regressievergelijking',
    formulaBoneFactor: 'Botfactor',
    formulaConstant: 'Constante',
    formulaAgeCorrection: 'Leeftijdscorrectie',
    formulaStdError: 'Standaardfout (SEE)',
    fallbackAlert: 'Er is geen directe Trotter-Gleser formule voor Aziatische vrouwen; de referentievergelijkingen voor Kaukasische vrouwen worden gebruikt als forensisch alternatief.',
    boardInstructions: 'Sleep de schuifmaat of gebruik de invoervelden om het bot te meten.',
    rulerLabelMetric: 'Metrische Schaal (mm)',
    rulerLabelImperial: 'Imperiale Schaal (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Uitgebreide gids voor lengteschatting in de forensische antropologie',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Het schatten van de lichaamslengte is een fundamenteel onderdeel van de biologische profilering in de fysische antropologie, bioarcheologie en forensische wetenschap. Wanneer menselijke resten worden gevonden, helpt de reconstructie van de levende lengte bij het identificeren van vermiste personen.'
    },
    {
      type: 'paragraph',
      html: 'Met deze digitale simulator van een osteometrisch bord kunnen studenten en professionals de lineaire regressiemodellen verkennen die zijn ontwikkeld door Mildred Trotter en Goldine C. Gleser.'
    },
    {
      type: 'title',
      text: 'De Trotter-Gleser-regressieformules begrijpen',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter en Goldine C. Gleser publiceerden hun formules in 1952 en 1958. De vergelijkingen hebben de vorm: Lichaamslengte = (Helling × Botlengte) + Constante ± Standaardfout. Omdat verhoudingen verschillen, gelden er aparte formules per geslacht en afkomst.'
    },
    {
      type: 'table',
      headers: ['Botspecimen', 'Model Kaukasische Man', 'Model Kaukasische Vrouw', 'Forensisch nut & Betrouwbaarheid'],
      rows: [
        ['Femur (Dijbeen)', 'Lengte = 2.32 × Femur + 65.53 ± 3.94 cm', 'Lengte = 2.47 × Femur + 54.10 ± 3.72 cm', 'Hoogste betrouwbaarheid. Het dijbeen draagt het meeste gewicht en hangt direct samen met de standlengte.'],
        ['Tibia (Scheenbeen)', 'Lengte = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Lengte = 2.90 × Tibia + 61.53 ± 3.66 cm', 'Hoge betrouwbaarheid. Let op dat gemeten wordt zonder de binnenenkel conform Trotters protocol.'],
        ['Fibula (Kuitbeen)', 'Lengte = 2.60 × Fibula + 75.50 ± 3.86 cm', 'Lengte = 2.93 × Fibula + 59.61 ± 3.57 cm', 'Zeer betrouwbaar, maar het kuitbeen is dun en breekt snel in historische contexten.'],
        ['Humerus (Opperarm)', 'Lengte = 2.89 × Humerus + 78.10 ± 4.57 cm', 'Lengte = 3.36 × Humerus + 57.97 ± 4.45 cm', 'Matige betrouwbaarheid. Opperarmbeenderen dragen geen gewicht en hebben grotere standaardfouten.'],
        ['Radius (Spaakbeen)', 'Lengte = 3.79 × Radius + 79.42 ± 4.66 cm', 'Lengte = 4.74 × Radius + 54.93 ± 4.45 cm', 'Lagere betrouwbaarheid door grotere individuele variatie in de onderarmverhoudingen.']
      ]
    },
    {
      type: 'title',
      text: 'Leeftijdsgebonden lengteverlies en correctie',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Lichaamslengte is na het 30e levensjaar niet statisch. Door compressie van de tussenwervelschijven treedt er een geleidelijk lengteverlies op. Trotter en Gleser adviseerden om 0,06 cm af te trekken voor elk jaar boven de 30: Verlies = 0,06 × (Leeftijd - 30).'
    },
    {
      type: 'title',
      text: 'Methodologische verschillen bij de tibiabezwering',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Een bekend probleem betreft de tibia-metingen. In de studie van 1952 werd het scheenbeen gemeten exclusief de binnenenkel (malleolus medialis), maar in 1958 werd deze wel meegerekend. Toepassing van de formules uit 1952 op een inclusief gemeten scheenbeen leidt tot systematische overschatting.'
    },
    {
      type: 'title',
      text: 'Seculaire trends en historische referentiedata',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'De referentiedata stammen van individuen geboren rond 1900. Door verbeterde voeding zijn moderne populaties gemiddeld langer geworden (seculaire trend). Hedendaagse forensisch onderzoekers vullen Trotter-Gleser daarom vaak aan met database-software zoals FORDISC.'
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
