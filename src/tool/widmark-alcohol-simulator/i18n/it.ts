import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calcolatore-alcolemia-widmark';
const title = 'Simulatore Tasso Alcolemico Widmark';
const description = 'Simula l\'assorbimento, la distribuzione e l\'eliminazione dell\'alcol nel corpo umano utilizzando la formula di Widmark.';

const howTo = [
  {
    name: 'Configura il profilo del soggetto',
    text: 'Imposta il peso, il sesso biologico e il livello di idratazione per calcolare il volume di distribuzione del tasso alcolemico.',
  },
  {
    name: 'Seleziona lo stato dello stomaco',
    text: 'Scegli tra vuoto, pasto leggero o pasto completo per simulare la velocità di svuotamento gastrico.',
  },
  {
    name: 'Aggiungi consumazioni',
    text: 'Inserisci il volume, la gradazione alcolica e l\'ora per tracciare la curva nel tempo.',
  },
  {
    name: 'Analizza la curva',
    text: 'Controlla l\'evoluzione temporale e stima il tempo di smaltimento dell\'alcol.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Cos\'è la formula di Widmark?',
    answer: 'La formula di Widmark è un modello matematico per stimare la concentrazione di alcol nel sangue.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profilo',
    weight: 'Peso (kg)',
    sex: 'Sesso biologico',
    male: 'Maschio',
    female: 'Femmina',
    hydration: 'Idratazione',
    hydrationLow: 'Bassa',
    hydrationNormal: 'Normale',
    hydrationHigh: 'Alta',
    stomachState: 'Stato stomaco',
    stomachEmpty: 'Vuoto (Rapido)',
    stomachLight: 'Pasto leggero (Medio)',
    stomachFull: 'Pasto completo (Lento)',
    drinksTimeline: 'Cronologia consumi',
    addDrink: 'Aggiungi bevanda',
    drinkVolume: 'Volume (ml)',
    drinkAbv: 'Gradazione (% vol)',
    drinkTime: 'Tempo (Ora)',
    drinksList: 'Bevande consumate',
    remove: 'Rimuovi',
    beer: 'Birra (330ml, 5%)',
    wine: 'Vino (150ml, 12%)',
    spirits: 'Superalcolico (40ml, 40%)',
    peakBac: 'Picco BAC',
    timeToSober: 'Tempo per sobrietà',
    sober: 'Sobrio',
    currentBac: 'BAC attuale',
    drivingLimitAlert: 'Stato di guida',
    safeLimit: 'Sotto il limite',
    warningLimit: 'Limite avviso superato',
    dangerLimit: 'Limite pericolo superato',
    graphTitle: 'Concentrazione alcolemica in 12 ore',
    timeAxisLabel: 'Tempo (Ore)',
    bacAxisLabel: 'Tasso (g/L)',
    legalLimitText: 'Limite legale standard',
    noDrinksText: 'Aggiungi bevande per simulare.',
    hours: 'ore',
    soberStatus: 'Sobrio in {time} ore',
    neverSober: 'Supera 12h',
    noteDisclaimer: 'Solo a scopo didattico. Non guidare dopo aver bevuto.',
    noteWidmark: 'Basato sulla formula di Widmark e metabolismo lineare.',
  },
  seo: [
    {
      type: 'title',
      text: 'Tossicologia Forense e Cinetica dell\'Etanolo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'assorbimento, la distribuzione e l\'eliminazione dell\'etanolo nel corpo umano rappresentano concetti fondamentali per la tossicologia forense. Dopo l\'ingestione, l\'alcol passa dallo stomaco dove una piccola frazione viene assorbita direttamente, per poi raggiungere il duodeno dove l\'assorbimento è massivo. La presenza di cibo rallenta lo svuotamento gastrico e riduce l\'altezza del picco alcolemico.',
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore implementa l\'equazione classica di Widmark per stimare l\'andamento temporale del tasso alcolemico: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. L\'eliminazione avviene tramite cinetica di ordine zero con un declino lineare costante pari a circa 0.15 g/L all\'ora.',
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
