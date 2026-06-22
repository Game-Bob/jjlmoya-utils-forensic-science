import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'phasendiagramm-kritischer-punkt-visualisierer';
const title = 'Phasendiagramm und Kritischer Punkt Visualisierer';
const description = 'Erkunden Sie feste, flüssige, gasförmige und überkritische Bereiche in einem interaktiven Druck-Temperatur-Phasendiagramm mit Tripelpunkt- und Kritischer-Punkt-Markierungen.';

const howTo = [
  {
    name: 'Substanz auswählen',
    text: 'Wechseln Sie zwischen Wasser, Kohlendioxid und Stickstoff, um zu sehen, wie reale Tripelpunkte und kritische Punkte das Phasenbild verändern.',
  },
  {
    name: 'Temperatur und Druck ändern',
    text: 'Nutzen Sie die Schieberegler, um die Probe auf der Druck-Temperatur-Ebene zu positionieren. Das Diagramm aktualisiert den aktiven Phasenbereich und die Live-Probenmarkierung.',
  },
  {
    name: 'Den kritischen Hof beobachten',
    text: 'Bewegen Sie sich zum Ende der Dampf-Flüssig-Grenze, um zu sehen, wie die latente Wärme verschwindet und der Flüssig-Gas-Unterschied in einer überkritischen Flüssigkeit aufgeht.',
  },
  {
    name: 'Das Lehrpanel lesen',
    text: 'Nutzen Sie die Phasenbezeichnung, den Indikator für latente Wärme und die Punktanzeigen, um das visuelle Diagramm mit thermodynamischen Fachbegriffen zu verknüpfen.',
  },
];

const faq = [
  {
    question: 'Was ist ein Phasendiagramm?',
    answer: 'Ein Phasendiagramm zeigt, welcher Aggregatzustand bei verschiedenen Kombinationen von Temperatur und Druck stabil ist. Die Grenzlinien markieren Bedingungen, unter denen zwei Phasen im Gleichgewicht nebeneinander existieren können.',
  },
  {
    question: 'Was passiert am kritischen Punkt?',
    answer: 'Am kritischen Punkt endet die Dampf-Flüssig-Grenze. Oberhalb der kritischen Temperatur und des kritischen Drucks wird das Material zu einer überkritischen Flüssigkeit, und es gibt keine scharfe Trennung zwischen Flüssigkeit und Gas mehr.',
  },
  {
    question: 'Warum hat Wasser eine andere Schmelzlinie?',
    answer: 'Wasser ist ungewöhnlich, da Eis in der Nähe des Schmelzpunkts eine geringere Dichte als flüssiges Wasser hat. Steigender Druck kann die dichtere flüssige Phase begünstigen, weshalb die Fest-Flüssig-Grenze einen anderen Verlauf hat als bei vielen anderen Substanzen.',
  },
  {
    question: 'Sind die dargestellten Kurven laborgenau?',
    answer: 'Nein. Das Werkzeug verwendet vereinfachte Kurven, die an publizierte Tripelpunkt- und Kritischer-Punkt-Werte angelehnt sind. Es ist für das konzeptionelle Lernen konzipiert, nicht für Verfahrenstechnik oder Sicherheitsberechnungen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Phasendiagramm-Steuerung',
    substance: 'Substanz',
    units: 'Einheiten',
    scientificUnits: 'Wissenschaftlich (K, MPa)',
    metricUnits: 'Metrisch (°C, kPa)',
    imperialUnits: 'Imperial (°F, psi)',
    temperature: 'Temperatur',
    pressure: 'Druck',
    diagram: 'Druck-Temperatur-Phasendiagramm',
    sample: 'Probenzustand',
    phase: 'Stabile Phase',
    triplePoint: 'Tripelpunkt',
    criticalPoint: 'Kritischer Punkt',
    vaporCurve: 'Dampf-Flüssig-Grenze',
    meltingLine: 'Fest-Flüssig-Grenze',
    latentHeat: 'Latentwärme-Kontrast',
    criticalProximity: 'Kritische Nähe',
    coordinates: 'Koordinaten',
    solid: 'Fest',
    liquid: 'Flüssig',
    gas: 'Gasförmig',
    supercritical: 'Überkritisch',
    low: 'niedrig',
    high: 'hoch',
    reset: 'Zurücksetzen',
    interpretation: 'Interpretation',
    note: 'Grenzlinien markieren Koexistenz; Bereiche markieren die stabilste Phase für die gewählten Bedingungen.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktiver Phasendiagramm-Visualisierer für Tripelpunkte, Siedekurven und kritische Punkte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Phasendiagramm-Visualisierer verwandelt ein abstraktes Druck-Temperatur-Diagramm in eine interaktive Karte. Wählen Sie eine Substanz, ändern Sie Temperatur und Druck, und sehen Sie, ob die Probe als Feststoff, Flüssigkeit, Gas oder überkritische Flüssigkeit vorhergesagt wird.',
    },
    {
      type: 'title',
      text: 'Wie man das Druck-Temperatur-Diagramm liest',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Diagrammmerkmal', 'Bedeutung', 'Was im Werkzeug zu beachten ist'],
      rows: [
        ['Tripelpunkt', 'Fest, flüssig und gasförmig koexistieren', 'Der Tieftemperatur-Knotenpunkt.'],
        ['Dampf-Flüssig-Grenze', 'Siede- oder Kondensationsgleichgewicht', 'Die Kurve vom Tripelpunkt zum kritischen Punkt.'],
        ['Fest-Flüssig-Grenze', 'Schmelz- oder Gefriergleichgewicht', 'Die Trennlinie zwischen Festkörper und Flüssigkeit.'],
        ['Kritischer Punkt', 'Ende der Dampf-Flüssig-Grenze', 'Der Endpunkt, an dem die latente Wärme verschwindet.'],
        ['Überkritischer Bereich', 'Keine scharfe Flüssig-Gas-Trennung', 'Der Hochtemperatur- und Hochdruckbereich.'],
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