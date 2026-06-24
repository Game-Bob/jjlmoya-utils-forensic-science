import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-alkoholu-widmarka';
const title = 'Symulator Stężenia Alkoholu Widmarka';
const description = 'Symuluj wchłanianie, dystrybucję i eliminację alkoholu w organizmie człowieka przy użyciu wzoru Widmarka.';

const howTo = [
  {
    name: 'Skonfiguruj profil fizyczny',
    text: 'Wprowadź masę ciała, płeć biologiczną oraz stopień nawodnienia, aby wyznaczyć współczynnik Widmarka (r).',
  },
  {
    name: 'Wybierz zawartość żołądka',
    text: 'Wybierz pusty żołądek, lekki lub pełny posiłek, co wpłynie na tempo wchłaniania alkoholu.',
  },
  {
    name: 'Dodaj napoje alkoholowe',
    text: 'Wprowadź objętość, zawartość procentową alkoholu oraz czas konsumpcji.',
  },
  {
    name: 'Analizuj wyniki',
    text: 'Zweryfikuj zmiany stężenia i prognozowany czas trzeźwienia.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Czym jest wzór Widmarka?',
    answer: 'Wzór Widmarka to model matematyczny służący do szacowania stężenia alkoholu we krwi.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profil',
    weight: 'Waga (kg)',
    sex: 'Płeć biologiczna',
    male: 'Mężczyzna',
    female: 'Kobieta',
    hydration: 'Nawodnienie',
    hydrationLow: 'Niskie',
    hydrationNormal: 'Normalne',
    hydrationHigh: 'Wysokie',
    stomachState: 'Zawartość żołądka',
    stomachEmpty: 'Pusty (Szybko)',
    stomachLight: 'Lekki posiłek (Średnio)',
    stomachFull: 'Pełny posiłek (Powoli)',
    drinksTimeline: 'Oś czasu spożycia',
    addDrink: 'Dodaj napój',
    drinkVolume: 'Objętość (ml)',
    drinkAbv: 'Zawartość alkoholu (% vol)',
    drinkTime: 'Czas (Godzina)',
    drinksList: 'Spożyte napoje',
    remove: 'Usuń',
    beer: 'Piwo (330ml, 5%)',
    wine: 'Wino (150ml, 12%)',
    spirits: 'Wódka (40ml, 40%)',
    peakBac: 'Szczyt BAC',
    timeToSober: 'Czas do trzeźwości',
    sober: 'Trzeźwy',
    currentBac: 'Aktualne BAC',
    drivingLimitAlert: 'Status kierowcy',
    safeLimit: 'Poniżej limitu',
    warningLimit: 'Przekroczono próg ostrzegawczy',
    dangerLimit: 'Przekroczono próg niebezpieczny',
    graphTitle: 'Stężenie alkoholu we krwi w ciągu 12 godzin',
    timeAxisLabel: 'Czas (Godziny)',
    bacAxisLabel: 'Promile (g/L)',
    legalLimitText: 'Standardowy limit prawny',
    noDrinksText: 'Dodaj napoje, aby rozpocząć symulację.',
    hours: 'godzin',
    soberStatus: 'Trzeźwy za {time} godz.',
    neverSober: 'Przekracza 12h',
    noteDisclaimer: 'Wyłącznie do celów edukacyjnych. Nigdy nie jedź po alkoholu.',
    noteWidmark: 'Oparte na równaniu Widmarka i liniowej eliminacji.',
  },
  seo: [
    {
      type: 'title',
      text: 'Toksykologia Sądowa i Farmakokinetyka Etanolu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wchłanianie, dystrybucja i eliminacja etanolu w organizmie człowieka to kluczowe zagadnienia toksykologii sądowej. Większość alkoholu wchłania się w jelicie cienkim. Obecność pokarmu opóźnia opróżnianie żołądka, spłaszczając szczyt stężenia alkoholu we krwi.',
    },
    {
      type: 'paragraph',
      html: 'Nasz symulator modeluje ten proces przy użyciu równania: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Eliminacja wątrobowa zachodzi według kinetyki rzędu zerowego z liniowym spadkiem stężenia o około 0.15 g/L na godzinę.',
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
