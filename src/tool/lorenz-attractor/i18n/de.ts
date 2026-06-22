import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'lorenz-attraktor-chaos-simulator';
const title = 'Lorenz Attraktor Chaos Simulator: Der Schmetterlingseffekt in 3D';
const description = 'Erkunden Sie die Chaostheorie mit dieser interaktiven 3D-Lorenz-Attraktor-Simulation. Visualisieren Sie den Schmetterlingseffekt.';

const howTo = [
  {
    name: 'Leinwand drehen',
    text: 'Klicken und ziehen Sie im 3D-Viewport, um den Attraktor zu drehen und seine komplexe Geometrie zu erkunden.'
  },
  {
    name: 'Schieberegler anpassen',
    text: 'Ändern Sie die Parameter Sigma, Rho und Beta, um zu beobachten, wie das System in chaotisches Verhalten übergeht.'
  },
  {
    name: 'Divergenz beobachten',
    text: 'Beobachten Sie, wie der Abstand zwischen zwei anfangs fast identischen Trajektorien exponentiell wächst.'
  },
  {
    name: 'Pause und Reset',
    text: 'Verwenden Sie die Steuerelemente, um die Simulation anzuhalten oder auf die Standardwerte zurückzusetzen.'
  }
];

const faq = [
  {
    question: 'Was ist der Lorenz-Attraktor?',
    answer: 'Der Lorenz-Attraktor ist eine grafische Darstellung chaotischer Lösungen des Lorenz-Systems, eines dreidimensionalen mathematischen Modells, das das Verhalten von konvektiven Fluiden beschreibt.'
  },
  {
    question: 'Was ist der Schmetterlingseffekt?',
    answer: 'Es ist die sensible Abhängigkeit eines Systems von seinen Anfangsbedingungen, bei der winzige Änderungen große, divergente Auswirkungen im späteren Verlauf haben können.'
  },
  {
    question: 'Was bedeuten die Parameter?',
    answer: 'Sigma (σ) ist die Prandtl-Zahl (Verhältnis von Viskosität zu Wärmeleitfähigkeit), Rho (ρ) die Rayleigh-Zahl (Intensität der konvektiven Erwärmung) und Beta (β) das geometrische Aspektverhältnis der Konvektionszelle.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopiert',
    noHistory: 'Kein Verlauf',
    load: 'Laden',
    delete: 'Löschen',
    title: 'Lorenz Attraktor',
    subTitle: 'Deterministisches Chaos',
    parameterControls: 'Systemparameter',
    simulationSpeed: 'Geschwindigkeit (dt)',
    initialPerturbation: 'Anfängliche Störung (dx)',
    trajectories: 'Trajektorien',
    distance: 'Divergenzabstand',
    exponentialGrowth: 'Exponentielle Divergenz',
    resetDefault: 'Reset',
    clearPath: 'Pfad löschen',
    play: 'Resume',
    pause: 'Pause',
    coords: 'Koordinaten',
    divergenceExplanation: 'Das Divergenzdiagramm zeigt den euklidischen Abstand zwischen den beiden Trajektorien im Laufe der Zeit.'
  },
  seo: [
    { type: 'title', text: 'Deterministisches Chaos: Die Lorenz-Gleichungen verstehen', level: 2 },
    { type: 'paragraph', html: 'Das Lorenz-System ist ein Meilenstein der nichtlinearen Dynamik und Chaostheorie. Es wurde 1963 vom Meteorologen <strong>Edward Lorenz</strong> entwickelt und entstand aus einem vereinfachten Modell der atmosphärischen Konvektion. Seine Entdeckung, dass einfache, deterministische Gleichungen hochkomplexes, nichtperiodisches Verhalten erzeugen können, hat unser Verständnis physikalischer Systeme grundlegend verändert.' },
    { type: 'title', text: 'Schmetterlingseffekt: Sensitive Abhängigkeit von Anfangsbedingungen', level: 3 },
    { type: 'paragraph', html: 'Das charakteristische Merkmal chaotischer Systeme ist die <strong>sensitive Abhängigkeit von den Anfangsbedingungen</strong>, bekannt als <strong>Schmetterlingseffekt</strong>. In diesem Simulator starten zwei Trajektorien (T1 in Cyan, T2 in Pink) mit einem winzigen Anfangsunterschied. Nach kurzer Zeit verstärken die nichtlinearen Terme diesen Unterschied, und die Pfade divergieren vollständig.' },
    {
      type: 'table',
      headers: ['Parameter', 'Standardwert', 'Physikalische Bedeutung'],
      rows: [
        ['σ (Sigma)', '10.0', 'Prandtl-Zahl: bestimmt die innere Reibung des Fluids.'],
        ['ρ (Rho)', '28.0', 'Rayleigh-Zahl: Haupttreiber des Chaos; Heizintensität.'],
        ['β (Beta)', '8/3', 'Aspektverhältnis: Steuert die Form und Rotationsgeschwindigkeit der Orbits.']
      ],
    },
    { type: 'title', text: 'Phasenraum, Seltsame Attraktoren und Fraktale', level: 3 },
    { type: 'paragraph', html: 'In der klassischen Physik enden Trajektorien oft in stabilen Punkten oder wiederholen sich. Das Lorenz-System tut weder das eine noch das andere: Die Bahn schlingt sich unendlich im dreidimensionalen Raum, ohne sich selbst zu schneiden. Diese unbegrenzte, sich nicht wiederholende Struktur ist in einem endlichen Volumen des Phasenraums eingeschlossen und bildet einen <strong>seltsamen Attraktor</strong> mit fraktaler Geometrie (Hausdorff-Dimension ca. 2.06).' }
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
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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