import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkylator-alkoholkoncentration-widmark';
const title = 'Widmarks Promille Simulator';
const description = 'Simulera kroppens upptag, distribution och förbränning av alkohol med Widmarks formel.';

const howTo = [
  {
    name: 'Ställ in subject profil',
    text: 'Ange vikt, biologiskt kön samt vätskenivå för att beräkna Widmark-faktorn (r).',
  },
  {
    name: 'Välj magsäckens innehåll',
    text: 'Välj tom mage, lätt måltid eller full måltid för att ställa in absorptionshastigheten.',
  },
  {
    name: 'Lägg till drycker',
    text: 'Skriv in volym, alkoholhalt och tidpunkt för konsumtionen.',
  },
  {
    name: 'Analysera kurva',
    text: 'Följ kroppens alkoholkurva och se tiden till nykterhet.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Vad är Widmarks formel?',
    answer: 'Widmarks formel är en matematisk modell för att beräkna blodalkoholkoncentrationen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profil',
    weight: 'Vikt (kg)',
    sex: 'Biologiskt kön',
    male: 'Man',
    female: 'Kvinna',
    hydration: 'Vätskenivå',
    hydrationLow: 'Låg',
    hydrationNormal: 'Normal',
    hydrationHigh: 'Hög',
    stomachState: 'Magsäckens innehåll',
    stomachEmpty: 'Tom (Snabb)',
    stomachLight: 'Lätt måltid (Medel)',
    stomachFull: 'Full måltid (Långsam)',
    drinksTimeline: 'Konsumtionsförlopp',
    addDrink: 'Lägg till dryck',
    drinkVolume: 'Volym (ml)',
    drinkAbv: 'Alkoholhalt (% vol)',
    drinkTime: 'Tid (Timme)',
    drinksList: 'Konsumerade drycker',
    remove: 'Ta bort',
    beer: 'Öl (330ml, 5%)',
    wine: 'Vin (150ml, 12%)',
    spirits: 'Sprit (40ml, 40%)',
    peakBac: 'Högsta BAC',
    timeToSober: 'Tid till nykter',
    sober: 'Nykter',
    currentBac: 'Aktuell BAC',
    drivingLimitAlert: 'Körstatus',
    safeLimit: 'Under gränsen',
    warningLimit: 'Varningsgräns överskriden',
    dangerLimit: 'Farogräns överskriden',
    graphTitle: 'Blodalkoholkoncentration under 12 timmar',
    timeAxisLabel: 'Tid (Timmar)',
    bacAxisLabel: 'Promille (g/L)',
    legalLimitText: 'Lagstadgad gräns',
    noDrinksText: 'Lägg till drycker för att simulera.',
    hours: 'timmar',
    soberStatus: 'Nykter om {time} tim.',
    neverSober: 'Överstiger 12t',
    noteDisclaimer: 'Endast för utbildningsändamål. Kör aldrig alkoholpåverkad.',
    noteWidmark: 'Baserad på Widmarks ekvation och linjär leverförbränning.',
  },
  seo: [
    {
      type: 'title',
      text: 'Rättstoxikologi och Etylalkoholens Farmakokinetik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Upptaget, distributionen och förbränningen av etanol i den mänskliga kroppen är fundamentala begrepp inom rättsmedicin. Det mesta av alkoholupptaget sker i tunntarmen. Mat i magen fördröjer magsäckstömningen och sänker därmed den maximala promillehalten.',
    },
    {
      type: 'paragraph',
      html: 'Simulatorn modellerar detta via Widmarks ekvation: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Leverförbränningen sker via nollte ordningens kinetik med en linjär minskning om ca 0.15 g/L per timme.',
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
      applicationCategory: 'ForensicApplication',
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
