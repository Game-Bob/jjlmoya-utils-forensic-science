import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-blutalkohol-simulator';
const title = 'Widmark Blutalkohol Simulator';
const description = 'Simulieren Sie die Aufnahme, Verteilung und den Abbau von Alkohol im menschlichen Körper mithilfe der Widmark-Formel und Nullter-Ordnung-Abbaukinetik.';

const howTo = [
  {
    name: 'Körperliche Parameter einstellen',
    text: 'Stellen Sie Körpergewicht, biologisches Geschlecht und Hydrationszustand ein. Diese Variablen bestimmen den Widmark-Faktor (r).',
  },
  {
    name: 'Mageninhalt festlegen',
    text: 'Wählen Sie zwischen leerem Magen, einer leichten Mahlzeit oder einer vollen Mahlzeit. Dies beeinflusst die Absorptionsgeschwindigkeit (ka).',
  },
  {
    name: 'Getränke hinzufügen',
    text: 'Geben Sie Volumen, Alkoholgehalt (Vol.-%) und die relative Zeit des Konsums ein.',
  },
  {
    name: 'Verlauf analysieren',
    text: 'Analysieren Sie die Kurve und den Abbau der Blutalkoholkonzentration.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Was ist die Widmark-Formel?',
    answer: 'Die Widmark-Formel ist ein vom schwedischen Chemiker Erik M. P. Widmark entwickeltes mathematisches Modell zur Bestimmung der Blutalkoholkonzentration.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profil',
    weight: 'Gewicht (kg)',
    sex: 'Biologisches Geschlecht',
    male: 'Männlich',
    female: 'Weiblich',
    hydration: 'Hydrationszustand',
    hydrationLow: 'Niedrig',
    hydrationNormal: 'Normal',
    hydrationHigh: 'Hoch',
    stomachState: 'Mageninhalt',
    stomachEmpty: 'Leer (Schnelle Aufnahme)',
    stomachLight: 'Leichte Mahlzeit (Mittlere Aufnahme)',
    stomachFull: 'Volle Mahlzeit (Langsame Aufnahme)',
    drinksTimeline: 'Konsum-Verlauf',
    addDrink: 'Getränk hinzufügen',
    drinkVolume: 'Volumen (ml)',
    drinkAbv: 'Alkoholgehalt (% Vol)',
    drinkTime: 'Zeit (Stunde)',
    drinksList: 'Konsumierte Getränke',
    remove: 'Entfernen',
    beer: 'Bier (330ml, 5%)',
    wine: 'Wein (150ml, 12%)',
    spirits: 'Spirituosen (40ml, 40%)',
    peakBac: 'Max. BAK',
    timeToSober: 'Zeit bis nüchtern',
    sober: 'Nüchtern',
    currentBac: 'Aktuelle BAK',
    drivingLimitAlert: 'Fahrberechtigung',
    safeLimit: 'Unter Grenzwert',
    warningLimit: 'Warnung überschritten',
    dangerLimit: 'Grenzwert überschritten',
    graphTitle: 'Blutalkoholkonzentration über 12 Stunden',
    timeAxisLabel: 'Zeit (Stunden)',
    bacAxisLabel: 'Promille (g/L)',
    legalLimitText: 'Standard-Grenzwert',
    noDrinksText: 'Fügen Sie Getränke hinzu, um die Kurve zu simulieren.',
    hours: 'Stunden',
    soberStatus: 'Nüchtern in {time} Std.',
    neverSober: 'Übersteigt 12 Std.',
    noteDisclaimer: 'Nur für Bildungszwecke. Setzen Sie sich nach dem Konsum nicht ans Steuer.',
    noteWidmark: 'Basiert auf der Widmark-Gleichung und konstantem Leberabbau.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensische Toxikologie: Widmark Blutalkoholrechner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Simulator veranschaulicht die physiologischen Prozesse der <strong>Absorption, Verteilung und des Abbaus von Ethanol</strong> im menschlichen Körper.',
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
