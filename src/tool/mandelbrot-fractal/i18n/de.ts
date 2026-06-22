import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fraktal-rechner';
const title = 'Mandelbrot Fraktal Rechner & Selbstähnlichkeits Explorer';
const description = 'Erkunden Sie die Mandelbrot-Menge, zoomen Sie in selbstähnliche Fraktalgrenzen hinein und vergleichen Sie Iterationstiefe, Farbkontrast und Koordinaten der komplexen Ebene.';

const howTo = [
  {
    name: 'Wählen Sie eine Region der Mandelbrot-Menge',
    text: 'Beginnen Sie mit der gesamten Menge oder springen Sie direkt zu einer detailreichen Region wie dem Seepferdchental oder einem spiralförmigen Minibrot.',
  },
  {
    name: 'Zoomen Sie durch Klicken auf das Bild',
    text: 'Klicken Sie auf einen beliebigen Punkt auf der Leinwand, um die komplexe Ebene neu zu zentrieren und den Fraktal um diesen Punkt zu vergrößern.',
  },
  {
    name: 'Passen Sie Iterationstiefe und Farbkontrast an',
    text: 'Erhöhen Sie das Iterationsbudget, um feinere Grenzstrukturen sichtbar zu machen, und passen Sie dann Kontrast und Farbpalette an, um die Fluchtzeitbänder besser lesbar zu machen.',
  },
];

const faq = [
  {
    question: 'Was zeigt der Mandelbrot-Mengen-Rechner?',
    answer: 'Er zeigt, welche komplexen Zahlen c die Rekursion z(n+1) = z(n)^2 + c beschränkt halten, wenn man bei z = 0 beginnt. Punkte, die innerhalb des gewählten Iterationsbudgets nie entkommen, werden als Elemente der Menge eingefärbt, während äußere Punkte danach gefärbt werden, wie schnell ihre Umlaufbahn entkommt.',
  },
  {
    question: 'Warum enthält der Mandelbrot-Rand so viele Details?',
    answer: 'Der Rand trennt stabile und entkommende Umlaufbahnen. Schon winzige Koordinatenänderungen in der Nähe dieses Randes können das Langzeitverhalten vollständig verändern. Diese Empfindlichkeit erzeugt ineinander verschachtelte Knoten, Spiralen, Filamente und miniaturisierte Kopien, die auf vielen Vergrößerungsstufen erscheinen.',
  },
  {
    question: 'Ist die Mandelbrot-Menge wirklich selbstähnlich?',
    answer: 'Sie ist nicht perfekt selbstähnlich im gleichen strengen Sinne wie ein Sierpinski-Dreieck, aber sie ist reichhaltig quasi-selbstähnlich. Kleine Kopien der gesamten Menge erscheinen überall in der Ebene, oft verzerrt und durch aufwändige verzweigte Strukturen verbunden.',
  },
  {
    question: 'Was steuert die Iterationsanzahl?',
    answer: 'Die Iterationsanzahl bestimmt, wie lange der Rechner jeden Punkt testet, bevor er entscheidet, dass er wahrscheinlich zur Menge gehört. Höhere Werte legen tiefere Filamente und sauberere Minibrots frei, erfordern aber mehr Berechnung pro Pixel.',
  },
  {
    question: 'Warum ändern sich die Farben außerhalb des schwarzen Bereichs?',
    answer: 'Die Farben außen basieren auf der Fluchtzeit: Punkte, die schnell entkommen, erhalten andere Farben als Punkte, die viele Iterationen in der Nähe der Menge bleiben. Glättende Farbgebung reduziert harte Bänder und erleichtert die Untersuchung der Geometrie benachbarter Umlaufbahnen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot Fraktal Rechner',
    canvasLabel: 'Interaktive Mandelbrot-Mengen-Leinwand',
    presetsLabel: 'Mandelbrot-Region-Voreinstellungen',
    presetFull: 'Gesamte Menge',
    presetSeahorse: 'Seepferdchental',
    presetSpiral: 'Spiral-Minibrot',
    centerPoint: 'Zentrum',
    magnification: 'Vergrößerung',
    visibleWindow: 'Sichtbarer Ausschnitt',
    renderBudget: 'Iterationen',
    iterationsLabel: 'Iterationstiefe',
    contrastLabel: 'Fluchtkontrast',
    colorLabel: 'Farbfeld',
    paletteEmber: 'Glutbänder',
    paletteLagoon: 'Lagunen-Plasma',
    paletteInk: 'Tinten-Spektrum',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot-Mengen-Rechner für Fraktale, Fluchtzeit und Selbstähnlichkeit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Mandelbrot-Fraktal-Rechner rendert die klassische Menge der komplexen Ebene, definiert durch die Iteration <strong>z(n+1) = z(n)^2 + c</strong>. Er ist für die Erkundung konzipiert, nicht für die passive Betrachtung. Jeder Klick zentriert die Ebene neu, jeder Zoom legt eine kleinere mathematische Nachbarschaft frei, und der Iterationsschieberegler lässt Sie entscheiden, wie tief der Rechner die Grenze testen soll, bevor er einen Punkt als stabil oder entweichend färbt.',
    },
    {
      type: 'title',
      text: 'Wie man das Mandelbrot-Bild liest',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die dunkle zentrale Form markiert Punkte, deren Umlaufbahnen innerhalb des aktuellen Iterationsbudgets beschränkt bleiben. Die farbige Außenseite ist eine Fluchtzeitkarte. Ein Punkt, der nahe der Menge gefärbt ist, kann hunderte von Iterationen überstehen, bevor sein Betrag den Fluchtradius überschreitet, während ein weit entfernter Punkt fast sofort entkommt. Die wissenschaftlich interessanteste Geometrie befindet sich normalerweise nicht innerhalb der gefüllten Form, sondern entlang der Grenze, wo beschränktes und unbeschränktes Verhalten ineinandergreifen.',
    },
    {
      type: 'table',
      headers: ['Steuerung', 'Was sie ändert', 'Wann erhöhen'],
      rows: [
        ['<strong>Iterationstiefe</strong>', 'Wie viele Rekursionsschritte für jeden Pixel getestet werden.', 'Höhere Werte nach dem Zoomen in dünne Filamente oder miniaturisierte Kopien verwenden.'],
        ['<strong>Fluchtkontrast</strong>', 'Wie stark glatte Fluchtwerte in sichtbare Bänder getrennt werden.', 'Erhöhen, wenn das Bild flach aussieht; senken, wenn die Farben zu hart sind.'],
        ['<strong>Palette</strong>', 'Die Farbzuordnung, die auf äußere Punkte angewendet wird.', 'Paletten wechseln, um Strukturen sichtbar zu machen, die von einem Farbfeld verdeckt werden könnten.'],
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