import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fractaal-calculator';
const title = 'Mandelbrot Fractaal Calculator & Self Similarity Explorer';
const description = 'Verken de Mandelbrotverzameling, zoom in op zelfgelijkende fractalranden en vergelijk iteratiediepte, kleurcontrast en complexe vlakcoordinaten.';

const howTo = [
  {
    name: 'Kies een gebied van de Mandelbrotverzameling',
    text: 'Begin bij de volledige verzameling of spring direct naar een gedetailleerd gebied zoals de zeepaardvallei of een spiraalminibrot.',
  },
  {
    name: 'Zoom door op de afbeelding te klikken',
    text: 'Klik op een willekeurig punt op het canvas om het complexe vlak te hercentreren en de fractal rond dat coordinaat te vergroten.',
  },
  {
    name: 'Pas iteratiediepte en kleurcontrast aan',
    text: 'Verhoog het iteratiebudget om fijnere randstructuren te onthullen en pas vervolgens contrast en palet aan om ontsnappingstijdbanden beter leesbaar te maken.',
  },
];

const faq = [
  {
    question: 'Wat laat de Mandelbrotverzameling-calculator zien?',
    answer: 'Het laat zien welke complexe getallen c de recurrente betrekking z(n+1) = z(n)^2 + c begrensd houden wanneer gestart wordt vanuit z = 0. Punten die binnen het geselecteerde iteratiebudget nooit ontsnappen, worden gekleurd als leden van de verzameling, terwijl buitenpunten worden gekleurd op basis van hoe snel hun baan ontsnapt.',
  },
  {
    question: 'Waarom bevat de Mandelbrotgrens zoveel detail?',
    answer: 'De grens scheidt stabiele en ontsnappende banen, en kleine coordinaatveranderingen nabij die grens kunnen het gedrag op lange termijn volledig veranderen. Deze gevoeligheid creert geneste bollen, spiralen, filamenten en miniatuurkopieen die op vele vergrotingsniveaus verschijnen.',
  },
  {
    question: 'Is de Mandelbrotverzameling werkelijk zelfgelijkend?',
    answer: 'Het is niet perfect zelfgelijkend op dezelfde strikte manier als een Sierpinski-driehoek, maar het is rijkelijk quasi-zelfgelijkend. Kleine kopieen van de hele verzameling verschijnen door het hele vlak, vaak vervormd en verbonden door uitgebreide vertakkingsstructuren.',
  },
  {
    question: 'Wat regelt het iteratieaantal?',
    answer: 'Het iteratieaantal bepaalt hoe lang de calculator elk punt test voordat het beslist dat het waarschijnlijk tot de verzameling behoort. Hogere waarden onthullen diepere filamenten en schonere minibrots, maar vereisen meer berekening per pixel.',
  },
  {
    question: 'Waarom veranderen de kleuren buiten het zwarte gebied?',
    answer: 'De kleuren buiten zijn gebaseerd op ontsnappingstijd: punten die snel ontsnappen krijgen andere kleuren dan punten die vele iteraties dicht bij de verzameling blijven. Gladde kleuring vermindert harde banden en maakt de geometrie van naburige banen gemakkelijker te inspecteren.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot Fractaal Calculator',
    canvasLabel: 'Interactief Mandelbrotverzameling-canvas',
    presetsLabel: 'Mandelbrotgebied-voorinstellingen',
    presetFull: 'Volledige Verzameling',
    presetSeahorse: 'Zeepaardvallei',
    presetSpiral: 'Spiraalminibrot',
    centerPoint: 'Middelpunt',
    magnification: 'Vergroting',
    visibleWindow: 'Zichtbaar venster',
    renderBudget: 'Iteraties',
    iterationsLabel: 'Iteratiediepte',
    contrastLabel: 'Ontsnappingscontrast',
    colorLabel: 'Kleurveld',
    paletteEmber: 'Gloeiende banden',
    paletteLagoon: 'Laguneplasma',
    paletteInk: 'Inktspectrum',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Set Calculator for Fractals, Escape Time, and Self-Similarity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze Mandelbrotfractaal-calculator rendert de klassieke complexe-vlakverzameling gedefinieerd door de iteratie <strong>z(n+1) = z(n)^2 + c</strong>. Hij is ontworpen voor verkenning in plaats van passief bekijken: elke klik hercentreert het vlak, elke zoom stelt een kleinere wiskundige omgeving bloot en de iteratieschuifregelaar laat u bepalen hoe diep de calculator de grens moet testen voordat een punt als stabiel of ontsnappend wordt gekleurd.',
    },
    {
      type: 'title',
      text: 'How to Read the Mandelbrot Image',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De donkere centrale vorm markeert punten waarvan de banen binnen het huidige iteratiebudget begrensd blijven. De gekleurde buitenkant is een ontsnappingstijdkaart. Een punt dat dicht bij de verzameling is gekleurd, kan honderden iteraties overleven voordat de magnitude de ontsnappingsstraal overschrijdt, terwijl een punt ver weg bijna onmiddellijk ontsnapt. De meest wetenschappelijk interessante geometrie bevindt zich meestal niet binnen de gevulde vorm, maar langs de grens waar begrensd en onbegrensd gedrag elkaar verweven.',
    },
    {
      type: 'table',
      headers: ['Bediening', 'Wat het verandert', 'Wanneer verhogen'],
      rows: [
        ['<strong>Iteratiediepte</strong>', 'Hoeveel recurrentiestappen worden getest per pixel.', 'Gebruik hogere waarden na het inzoomen op dunne filamenten of miniatuurkopieen.'],
        ['<strong>Ontsnappingscontrast</strong>', 'Hoe sterk gladde ontsnappingswaarden worden gescheiden in zichtbare banden.', 'Verhoog het wanneer het beeld er vlak uitziet; verlaag het wanneer kleuren te hard zijn.'],
        ['<strong>Palet</strong>', 'De kleurtoewijzing toegepast op buitenpunten.', 'Wissel van palet om structuren te onthullen die verborgen kunnen zijn door een enkel kleurveld.'],
      ],
    },
    {
      type: 'title',
      text: 'Self-Similarity and Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een reden waarom de Mandelbrotverzameling zo beroemd is, is de quasi-zelfgelijkheid. Terwijl u inzoomt op antennes, spiralen en valleien, komt u herhaaldelijk kleine Mandelbrot-achtige eilanden tegen, vaak minibrots genoemd. Deze kopieen zijn niet louter decoratief. Hun rangschikking weerspiegelt de dynamiek van kwadratische afbeeldingen, inclusief periodieke bollen, bifurcatiepatronen en gebieden waar banen lange tijd gevangen blijven voordat ze ontsnappen.',
    },
    {
      type: 'title',
      text: 'Why Higher Iterations Matter at Deep Zoom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bij het overzicht van de volledige verzameling geeft een bescheiden iteratielimiet een herkenbaar beeld. Bij diepere vergroting duurt het echter veel langer voordat veel grenspunten onthullen of ze ontsnappen. Als de iteratielimiet te laag is, kunnen fijne structuren er vals massief of modderig uitzien. Het verhogen van het iteratieaantal verbetert de grensclassificatie en laat de calculator smalle uitlopers, spiraalarmen en satellietbollen met meer vertrouwen oplossen.',
    },
    {
      type: 'title',
      text: 'Mathematical Meaning of the Complex Coordinates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De coordinaatuitlezing toont het huidige middelpunt van de viewport als een complex getal c = a + bi. De horizontale as is het reele deel en de verticale as het imaginaire deel. Door op het canvas te klikken kiest u een nieuw complex coordinaat, waarna het zichtbare venster eromheen wordt vergroot. Dit maakt de tool nuttig voor het leren hoe visuele gebieden van de fractal overeenkomen met precieze locaties in het complexe vlak.',
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
