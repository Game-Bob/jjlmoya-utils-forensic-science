const description = 'Modelleer de Fermi-paradox met Drake-vergelijking invoer, evolutionaire filters, signaalleeftijd en een tijdprojectie van detecteerbare Melkweg-beschavingen.';
const slug = 'fermi-paradox-filter-laboratorium';
const title = 'Fermi Paradox Filter Laboratorium';

const howTo = [
  {
    name: 'Schat de Drake-pijplijn',
    text: 'Verplaats de schuifregelaars voor stervorming, bewoonbare planeten, leven, intelligentie en technologie om te bepalen hoe vaak de Melkweg detecteerbare beschavingen voortbrengt.',
  },
  {
    name: 'Stel de filtersterkte in',
    text: 'Verhoog de evolutionaire filter wanneer u instorting, zelfvernietiging, ecologische instabiliteit of technologische knelpunten wilt simuleren die beschavingen sneller laten verdwijnen.',
  },
  {
    name: 'Vergelijk levensduur met horizon',
    text: 'Gebruik signaalleeftijd en projectiehorizon samen. Een korte levensduur kan een sterrenstelsel stil maken, zelfs als er regelmatig beschavingen ontstaan.',
  },
  {
    name: 'Lees de temporele curve',
    text: 'De grafiek toont detecteerbare beschavingen door de tijd heen, waardoor co-existentie en uitsterving zichtbaar worden in plaats van de Fermi-paradox te reduceren tot één getal.',
  },
];

const faq = [
  {
    question: 'Wat berekent deze Fermi-paradox-simulator?',
    answer: 'Het combineert Drake-vergelijking termen met een overlevingsfilter en een tijdshorizon om te schatten hoeveel technologische beschavingen tegelijkertijd detecteerbaar kunnen zijn in de Melkweg.',
  },
  {
    question: 'Is dit een voorspelling van echte buitenaardse beschavingen?',
    answer: 'Nee. Het is een verkennend model. De waarde zit in het zien hoe aannames elkaar beïnvloeden: een sterrenstelsel kan in de loop van de geschiedenis veel beschavingen voortbrengen terwijl er maar heel weinig zijn die overlappen met de onze.',
  },
  {
    question: 'Wat is de Grote Filter?',
    answer: 'De Grote Filter is het idee dat een of meer stappen tussen eenvoudige chemie en een langlevende technologische beschaving uiterst onwaarschijnlijk of gevaarlijk zijn.',
  },
  {
    question: 'Waarom is signaalleeftijd zo belangrijk?',
    answer: 'Detecteerbaarheid hangt af van overlap. Een beschaving die slechts enkele eeuwen uitzendt, kan echt zijn maar onzichtbaar voor een andere beschaving die in een ander tijdperk waarneemt.',
  },
  {
    question: 'Hoe moet ik de fracties voor leven en intelligentie kiezen?',
    answer: 'Gebruik lage waarden voor een pessimistisch zeldzaam-leven scenario en hogere waarden bij het verkennen van de mogelijkheid dat biologie of intelligentie vaak ontstaat op stabiele bewoonbare werelden.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Geprojecteerde detecteerbare beschavingen door de tijd',
    metricsLabel: 'Fermi-model statistieken',
    controlsLabel: 'Fermi-model instellingen',
    birthRate: 'Geboortecijfer',
    peakCivilizations: 'Piek aantal beschavingen',
    finalCivilizations: 'Uiteindelijk aantal beschavingen',
    silenceScore: 'Stilte-score',
    starFormationRate: 'Stervormingssnelheid',
    habitableFraction: 'Fractie bewoonbare planeten',
    lifeFraction: 'Fractie levensontstaan',
    intelligenceFraction: 'Fractie intelligentie',
    technologyFraction: 'Fractie technologie',
    signalLifetime: 'Signaalleeftijd',
    filterSeverity: 'Filtersterkte',
    horizonYears: 'Projectiehorizon',
    maxLabel: 'max',
    yearUnit: 'jr',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'Een praktische Fermi-paradox-simulator voor Drake-vergelijking aannames',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De Fermi-paradox vraagt waarom de nachtelijke hemel stil lijkt terwijl de Melkweg honderden miljarden sterren en vele planeten bevat. Deze tool verandert die vraag in een interactief model door de Drake-vergelijking te combineren met evolutionaire filters en een tijdprojectie van detecteerbare beschavingen.',
    },
    {
      type: 'paragraph',
      html: 'In plaats van een enkele statische schatting te geven, toont de simulator hoe beschavingen kunnen ontstaan, detecteerbaar worden en verdwijnen voordat een andere samenleving de kans heeft ze te horen. Dat timingprobleem staat centraal bij SETI omdat twee technologische culturen moeten overlappen in ruimte, tijd en signaalgedrag.',
    },
    {
      type: 'title',
      text: 'Hoe het model Drake-vergelijking parameters gebruikt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De eerste instellingen vertegenwoordigen een vereenvoudigde Drake-pijplijn. Stervorming levert nieuwe stellaire systemen. Een fractie van die systemen vormt bewoonbare planeten, een fractie van bewoonbare planeten ontwikkelt leven, een fractie van levende werelden produceert intelligentie, en een fractie van intelligente soorten wordt detecteerbaar door technologie.',
    },
    {
      type: 'table',
      headers: ['Instelling', 'Betekenis', 'Effect'],
      rows: [
        ['Stervormingssnelheid', 'Nieuwe sterren per jaar in de Melkweg', 'Verhoogt of verlaagt de ruwe voorraad mogelijke systemen'],
        ['Fractie bewoonbare planeten', 'Aandeel van systemen met stabiele werelden waar vloeibaar-water chemie kan bestaan', 'Bepaalt hoeveel van het sterrenstelsel de biologische pijplijn ingaat'],
        ['Fractie levensontstaan', 'Kans dat eenvoudig leven begint op een bewoonbare wereld', 'Test zeldzaam-leven versus algemeen-leven aannames'],
        ['Fractie intelligentie', 'Kans dat leven zich ontwikkelt tot technologie-capabele cognitie', 'Vertegenwoordigt biologische en ecologische knelpunten'],
        ['Fractie technologie', 'Kans dat intelligentie detecteerbare signalen produceert', 'Vat cultuur, techniek en communicatiekeuzes samen'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom filters een druk sterrenstelsel leeg kunnen laten lijken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De schuifregelaar voor filtersterkte comprimeert vele mogelijke faalpunten in één overlevingsdruk: asteroïde-inslagen, instabiele klimaten, zelfvernietiging, hulpbronuitputting, kunstmatige intelligentie risico, of elk ander knelpunt dat de detecteerbare fase verkort. Een sterke filter betekent niet dat beschavingen nooit ontstaan. Het betekent dat ze zelden lang zichtbaar blijven.',
    },
    {
      type: 'paragraph',
      html: 'Dat onderscheid is belangrijk. De Melkweg zou duizenden technologische soorten kunnen hebben voortgebracht over diepe tijd, terwijl er bijna geen buren actief zijn tijdens ons eigen smalle luistervenster. De grafiek maakt dit verschil zichtbaar door detecteerbare beschavingen door de geselecteerde projectiehorizon heen te plotten.',
    },
    {
      type: 'title',
      text: 'Het interpreteren van de stilte-score',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De stilte-score stijgt wanneer het uiteindelijke aantal overlappende detecteerbare beschavingen laag is. Hoge stilte bewijst niet dat de mens alleen is; het toont aan dat de gekozen aannames niet-detectie niet verrassend maken. Lage stilte betekent dat het model een luider sterrenstelsel verwacht, dus de afwezigheid van bewijs wordt interessanter.',
    },
    {
      type: 'list',
      items: [
        '<strong>Hoog geboortecijfer plus lage filter:</strong> een druk sterrenstelsel waar SETI-stilte moeilijker te verklaren is.',
        '<strong>Hoog geboortecijfer plus hoge filter:</strong> veel beschavingen verschijnen, maar weinig overleven lang genoeg om te overlappen.',
        '<strong>Lage biologische fracties:</strong> leven of intelligentie is zeldzaam, dus stilte kan ontstaan nog voordat technologie er toe doet.',
        '<strong>Korte signaalleeftijd:</strong> beschavingen kunnen bestaan maar zenden te kort uit om contact waarschijnlijk te maken.',
      ],
    },
    {
      type: 'title',
      text: 'Gebruiksmogelijkheden voor onderwijs, debat en SETI-intuïtie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het Fermi Paradox Filter Laboratorium is nuttig bij astronomielessen, astrobiologie discussies, wetenschapscommunicatie en filosofische debatten over de toekomst van de mensheid. Het helpt drie vragen te scheiden die vaak door elkaar worden gehaald: hoe vaak beschavingen ontstaan, hoe lang ze detecteerbaar blijven, en of hun tijdlijnen overlappen met de onze.',
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
