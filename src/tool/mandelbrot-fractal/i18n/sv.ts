import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fraktalkalkylator';
const title = 'Mandelbrot fraktalkalkylator & Självlikhetsutforskare';
const description = 'Utforska Mandelbrotmängden, zooma in på självliknande fraktalgränser och jämför itereringsdjup, färgkontrast och komplexa koordinater.';

const howTo = [
  {
    name: 'Välj ett område av Mandelbrotmängden',
    text: 'Börja med hela mängden eller hoppa direkt till ett högupplöst område som hästskodalen eller en spiralminibrot.',
  },
  {
    name: 'Zooma genom att klicka på bilden',
    text: 'Klicka på valfri punkt på canvas-ytan för att återcentrera det komplexa planet och förstora fraktalen runt den koordinaten.',
  },
  {
    name: 'Justera itereringsdjup och färgkontrast',
    text: 'Öka itereringsbudgeten för att avslöja finare gränsstrukturer, justera sedan kontrast och palett för att göra flykttidsbanden lättare att tyda.',
  },
];

const faq = [
  {
    question: 'Vad visar Mandelbrotmängdskalkylatorn?',
    answer: 'Den visar vilka komplexa tal c som håller rekursionen z(n+1) = z(n)^2 + c begränsad när man börjar från z = 0. Punkter som aldrig "flyr" inom den valda itereringsbudgeten färgsätts som medlemmar av mängden, medan yttre punkter färgsätts baserat på hur snabbt deras bana flyr mot oändligheten.',
  },
  {
    question: 'Varför innehåller Mandelbrotmängdens gräns så mycket detaljer?',
    answer: 'Gränsen separerar stabila från flyende banor, och små koordinatförändringar nära den gränsen kan fullständigt ändra långtidsbeteendet. Denna känslighet skapar kapslade bubblor, spiraler, filament och miniatyrkopior som uppträder på många förstoringsnivåer.',
  },
  {
    question: 'Är Mandelbrotmängden verkligen självliknande?',
    answer: 'Den är inte perfekt självliknande på samma strikta sätt som en Sierpinski-triangel, men den är rikligt kvasi-självliknande. Små kopior av hela mängden uppträder överallt i det komplexa planet, ofta förvridna och sammanbundna av utstuderade grenstrukturer.',
  },
  {
    question: 'Vad styr itereringsantalet?',
    answer: 'Itereringsantalet styr hur länge kalkylatorn testar varje punkt innan den beslutar att den sannolikt tillhör mängden. Högre värden avslöjar djupare filament och renare minibrots, men kräver mer beräkningskapacitet per pixel.',
  },
  {
    question: 'Varför ändras färgerna utanför det svarta området?',
    answer: 'De yttre färgerna baseras på flykttid: punkter som flyr snabbt får andra färger än punkter som håller sig nära mängden under många iterationer. Jämn färgläggning minskar hårda band och gör geometrin hos närliggande banor lättare att inspektera.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot fraktalkalkylator',
    canvasLabel: 'Interaktiv Mandelbrotmängd-canvas',
    presetsLabel: 'Förinställda Mandelbrotområden',
    presetFull: 'Hela mängden',
    presetSeahorse: 'Hästskodalen',
    presetSpiral: 'Spiralminibrot',
    centerPoint: 'Centrum',
    magnification: 'Förstoring',
    visibleWindow: 'Synligt fönster',
    renderBudget: 'Iterationer',
    iterationsLabel: 'Itereringsdjup',
    contrastLabel: 'Flyktkontrast',
    colorLabel: 'Färgfält',
    paletteEmber: 'Glödbands',
    paletteLagoon: 'Lagunplasma',
    paletteInk: 'Spektrum',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrotmängdskalkylator för fraktaler, flykttid och självlikhet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna Mandelbrot-fraktalkalkylator renderar den klassiska mängden i det komplexa planet, definierad av iterationen <strong>z(n+1) = z(n)^2 + c</strong>. Den är designad för utforskning: varje klick återcentrerar planet, varje zoom exponerar en ny matematisk omgivning, och itereringsreglaget låter dig bestämma hur djupt kalkylatorn ska testa gränsen.',
    },
    {
      type: 'title',
      text: 'Hur man läser Mandelbrot-bilden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den mörka centrala formen markerar punkter vars banor förblir begränsade inom den aktuella itereringsbudgeten. Det färglagda yttre är en flykttidskarta. En punkt färglagd nära mängden kan överleva hundratals iterationer innan dess magnitud överstiger flyktradien, medan en punkt långt borta flyr nästan omedelbart. Den mest intressanta geometrin finns oftast längs gränsen där begränsat och obegränsat beteende sammanflätas.',
    },
    {
      type: 'table',
      headers: ['Kontroll', 'Vad den ändrar', 'När den ska ökas'],
      rows: [
        ['<strong>Itereringsdjup</strong>', 'Hur många rekursionssteg som testas för varje pixel.', 'Använd högre värden efter inzoomning på tunna filament eller miniatyrkopior.'],
        ['<strong>Flyktkontrast</strong>', 'Hur starkt jämna flyktvärden separeras i synliga band.', 'Höj den när bilden ser plan ut; sänk den när färgerna är för hårda.'],
        ['<strong>Palett</strong>', 'Färgmappningen som tillämpas på yttre punkter.', 'Växla paletter för att avslöja strukturer som kan vara dolda av ett enda färgfält.'],
      ],
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