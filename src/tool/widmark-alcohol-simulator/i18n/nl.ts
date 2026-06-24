import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-promillage-calculator';
const title = 'Widmark Promillage Simulator';
const description = 'Simuleer de absorptie, distributie en eliminatie van alcohol in het menselijk lichaam met de formule van Widmark.';

const howTo = [
  {
    name: 'Stel het subject profiel in',
    text: 'Voer het gewicht, biologisch geslacht en hydratatieniveau in om de Widmark factor (r) te bepalen.',
  },
  {
    name: 'Kies de maaginhoud',
    text: 'Selecteer lege maag, lichte maaltijd of volle maaltijd om de absorptiesnelheid te beïnvloeden.',
  },
  {
    name: 'Voeg drankjes toe',
    text: 'Vul het volume, het alcoholpercentage en de tijd van consumptie in.',
  },
  {
    name: 'Simulatie bekijken',
    text: 'Bekijk de resulterende grafiek en de metabolische tijden.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Wat is de formule van Widmark?',
    answer: 'De formule van Widmark is een wiskundig model om de bloedalcoholconcentratie te schatten.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profiel',
    weight: 'Gewicht (kg)',
    sex: 'Biologisch geslacht',
    male: 'Man',
    female: 'Vrouw',
    hydration: 'Hydratatie',
    hydrationLow: 'Laag',
    hydrationNormal: 'Normaal',
    hydrationHigh: 'Hoog',
    stomachState: 'Maaginhoud',
    stomachEmpty: 'Leeg (Snel)',
    stomachLight: 'Lichte maaltijd (Medium)',
    stomachFull: 'Volle maaltijd (Langzaam)',
    drinksTimeline: 'Consumptieverloop',
    addDrink: 'Drankje toevoegen',
    drinkVolume: 'Volume (ml)',
    drinkAbv: 'Alcoholpercentage (% vol)',
    drinkTime: 'Tijd (Uur)',
    drinksList: 'Geconsumeerde drankjes',
    remove: 'Verwijderen',
    beer: 'Bier (330ml, 5%)',
    wine: 'Wijn (150ml, 12%)',
    spirits: 'Sterke drank (40ml, 40%)',
    peakBac: 'Piek BAC',
    timeToSober: 'Tijd till nuchter',
    sober: 'Nuchter',
    currentBac: 'Actuele BAC',
    drivingLimitAlert: 'Rijstatus',
    safeLimit: 'Onder limiet',
    warningLimit: 'Waarschuwingslimiet overschreden',
    dangerLimit: 'Gevaargrens overschreden',
    graphTitle: 'Bloedalcoholgehalte over 12 uur',
    timeAxisLabel: 'Tijd (Uur)',
    bacAxisLabel: 'Promillage (g/L)',
    legalLimitText: 'Wettelijke limiet',
    noDrinksText: 'Voeg drankjes toe om de curve te simuleren.',
    hours: 'uur',
    soberStatus: 'Nüchtern in {time} uur',
    neverSober: 'Langer dan 12u',
    noteDisclaimer: 'Uitsluitend voor educatieve doeleinden. Rijd niet na alcoholgebruik.',
    noteWidmark: 'Gebaseerd op de Widmark-formule en lineaire klaring.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensische Toxicologie en Farmacokinetiek van Ethanol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De absorptie, distributie en eliminatie van ethanol in het menselijk lichaam zijn cruciale concepten binnen de forensische wetenschap. Na consumptie wordt alcohol deels via de maag en hoofdzakelijk via de dunne darm opgenomen. Voedsel in de maag vertraagt de maaglediging en verlaagt daardoor de piekwaarde van de alcoholconcentratie.',
    },
    {
      type: 'paragraph',
      html: 'Dit model maakt gebruik van de formule: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. De lever metaboliseert alcohol via nulde-orde kinetiek met een lineaire daling van ongeveer 0.15 g/L per uur.',
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
