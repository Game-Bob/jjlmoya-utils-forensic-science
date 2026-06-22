import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'doppelspalt-dekoharenz-simulator';
const title = 'Doppelspaltexperiment und Dekohärenzsimulator';
const description = 'Schalten Sie Welche-Weg-Detektoren ein und aus, um zu sehen, wie Quanteninterferenz in zwei Teilchenbänder verblasst.';

const howTo = [
  {
    name: 'Beginnen Sie mit ausgeschaltetem Detektor',
    text: 'Lassen Sie den Welche-Weg-Detektor deaktiviert und beobachten Sie, wie der Schirm helle und dunkle Interferenzstreifen aus kohärenten Wahrscheinlichkeitsamplituden bildet.',
  },
  {
    name: 'Detektorstärke erhöhen',
    text: 'Erhöhen Sie die Detektorsteuerung, um Welche-Weg-Informationen einzuführen. Je stärker der Detektor wird, desto mehr fällt die Kohärenz und die Streifen verschwimmen.',
  },
  {
    name: 'Spaltgeometrie verändern',
    text: 'Passen Sie Spaltabstand und Spaltbreite an, um zu sehen, wie die Geometrie den Streifenabstand, die Einhüllendenbreite und die endgültige Verteilung auf dem Schirm verändert.',
  },
  {
    name: 'Live-Metriken ablesen',
    text: 'Nutzen Sie Streifenkontrast, Welche-Weg-Information und Kohärenz, um das visuelle Muster mit der Quantenmessungsgeschichte zu verbinden.',
  },
];

const faq = [
  {
    question: 'Warum ändert sich das Muster, wenn die Detektoren eingeschaltet werden?',
    answer: 'Ein Detektor, der preisgeben kann, welchen Spalt das Teilchen genutzt hat, zerstört die Phasenbeziehung zwischen den beiden Alternativen. Ohne diese Kohärenz interferieren die beiden Wahrscheinlichkeitspfade nicht mehr, und der Schirm nähert sich zwei breiten Teilchenbändern an.',
  },
  {
    question: 'Bedeutet dieser Simulator, dass das Bewusstsein die Wellenfunktion kollabieren lässt?',
    answer: 'Nein. Der Simulator konzentriert sich auf physikalische Welche-Weg-Information und Dekohärenz. Ein Detektor, eine Umgebung oder jede Wechselwirkung, die den Pfad unterscheidbar macht, kann Interferenz unterdrücken, ohne einen bewussten Beobachter zu erfordern.',
  },
  {
    question: 'Was ist der Streifenkontrast?',
    answer: 'Der Streifenkontrast vergleicht helle und dunkle Bereiche auf dem Schirm. Ein hoher Kontrast bedeutet starken Interferenzkontrast. Ein niedriger Kontrast bedeutet, dass sich die dunklen Lücken gefüllt haben und das Muster sich eher wie zwei unabhängige Teilchenströme verhält.',
  },
  {
    question: 'Ist dies ein vollständiger Quantenmechanik-Löser?',
    answer: 'Nein. Es ist ein lehrreiches Modell, das eine Doppelspalt-Interferenzhüllkurve mit einer Dekohärenz-Steuerung verbindet. Es wurde entwickelt, um den Messeffekt visuell zu erklären, nicht um eine Schrödingergleichungssimulation für einen realen Aufbau zu ersetzen.',
  },
  {
    question: 'Warum beeinflusst der Spaltabstand den Streifenabstand?',
    answer: 'Ein größerer Abstand erzeugt einen schnelleren Phasenunterschied über den Schirm, sodass helle und dunkle Bänder näher zusammenrücken. Ein kleinerer Abstand verteilt die Streifen weiter auseinander.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Doppelspalt-Apparatur',
    controls: 'Doppelspalt-Steuerung',
    results: 'Doppelspalt-Ergebnisse',
    kicker: 'Messkontrolle',
    detectorToggle: 'Welche-Weg-Detektor aktivieren',
    detectorStrength: 'Detektorstärke',
    slitSeparation: 'Spaltabstand',
    slitWidth: 'Spaltbreite',
    unobserved: 'Unbeobachtet',
    observed: 'Beobachtet',
    waveMode: 'Interferenz',
    particleMode: 'Teilchenbänder',
    fringeVisibility: 'Streifenkontrast',
    whichPath: 'Welche-Weg-Info',
    coherence: 'Kohärenz',
    readoutNote: 'Interferenz überlebt, wenn beide Pfade ununterscheidbar bleiben. Messung macht Pfadinformationen verfügbar und der Schirm verliert seine dunklen Streifen.',
  },
  seo: [
    {
      type: 'title',
      text: 'Doppelspalt-Experiment Simulator mit Dekohärenz und Welche-Weg-Detektion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Doppelspalt-Simulator verwandelt das klassische Quantenexperiment in ein interaktives visuelles Modell. Bei ausgeschaltetem Detektor zeigt der Schirm ein Interferenzmuster: helle und dunkle Bänder entstehen, weil die beiden möglichen Pfade kohärent bleiben. Wenn ein Welche-Weg-Detektor hinzugefügt wird, wandelt sich das Muster allmählich in zwei breite Teilchenbänder, weil die Pfad-Alternativen unterscheidbar werden.',
    },
    {
      type: 'paragraph',
      html: 'Das Tool richtet sich an Lernende, die nach einer klaren Erklärung suchen, warum Beobachtung das Doppelspalt-Ergebnis verändert. Es vermeidet die vage Formulierung "der Beobachter verändert die Realität" und konzentriert sich stattdessen auf die physikalisch nützliche Idee: Interferenz erfordert ununterscheidbare Alternativen, während Messung und Umgebungsverschränkung die für Streifen notwendige Phasenbeziehung entfernen.',
    },
    {
      type: 'title',
      text: 'Was das Doppelspalt-Experiment demonstriert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Im unbeobachteten Aufbau wird ein einzelnes Quantenobjekt durch Wahrscheinlichkeitsamplituden beschrieben, die beiden Spalten zugeordnet sind. Diese Amplituden addieren sich mit Phase. An manchen Stellen des Schirms verstärken sie sich gegenseitig und erzeugen helle Bänder; an anderen Stellen löschen sie sich aus und erzeugen dunkle Bänder. Diese abwechselnde Struktur ist das Kennzeichen von Interferenz.',
    },
    {
      type: 'paragraph',
      html: 'Wenn ein Detektor aufzeichnet, welcher Spalt benutzt wurde, hören die Alternativen auf, ununterscheidbar zu sein. Der Schirm erhält nicht länger eine kohärente Summe von Amplituden. Er erhält eine Mischung aus zwei pfadbedingten Ergebnissen, sodass sich die dunklen Interferenzlücken füllen und das Ergebnis wie Teilchen aussieht, die durch den einen oder den anderen Spalt gehen.',
    },
    {
      type: 'title',
      text: 'So lesen Sie den Simulator',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Steuerung oder Metrik', 'Was sie verändert', 'Worauf Sie achten sollten'],
      rows: [
        ['Detektorstärke', 'Wie viel Welche-Weg-Information verfügbar ist', 'Höhere Werte verringern den Streifenkontrast und verstärken das Zweiband-Teilchenmuster.'],
        ['Spaltabstand', 'Der Abstand zwischen den beiden Öffnungen', 'Größerer Abstand macht die Interferenzbänder auf dem Schirm enger.'],
        ['Spaltbreite', 'Die Größe jeder Öffnung', 'Breitere Spalten verengen die Beugungshüllkurve und verändern die Gesamthelligkeit.'],
        ['Streifenkontrast', 'Kontrast zwischen hellen und dunklen Schirmbereichen', 'Ein hoher Wert bedeutet, dass kohärente Interferenz noch sichtbar ist.'],
        ['Kohärenz', 'Wie viel Phasenbeziehung zwischen den Pfaden bleibt', 'Die Kohärenz sinkt, wenn der Detektor die Pfade unterscheidbar macht.'],
      ],
    },
    {
      type: 'title',
      text: 'Dekohärenz ohne Mystik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dekohärenz ist der Verlust nutzbarer Phasenkohärenz, wenn ein Quantensystem mit einem Detektor oder der Umgebung korreliert wird. In einem Doppelspalt-Experiment kann diese Korrelation Welche-Weg-Informationen tragen. Sobald der Pfad prinzipiell aufgezeichnet ist - selbst wenn niemand die Aufzeichnung liest - wird das Interferenzmuster unterdrückt.',
    },
    {
      type: 'paragraph',
      html: 'Diese Unterscheidung ist wichtig, weil viele Erklärungen die Rolle der menschlichen Beobachtung überbetonen. Die wesentliche Physik ist nicht Sehen oder Bewusstsein, sondern ob der Versuchsaufbau die Ununterscheidbarkeit der Alternativen bewahrt oder zerstört, die andernfalls interferieren würden.',
    },
    {
      type: 'title',
      text: 'Grenzen dieses Lehrmodells',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Simulator verwendet ein kompaktes optisches Doppelspaltmuster und kombiniert es mit einem Detektorstärke-Modell für Dekohärenz. Er eignet sich hervorragend für Intuition, Unterrichtsvorführungen und konzeptionelle Wiederholungen, ist aber keine numerische Lösung eines vollständigen Quantenapparats mit Detektor-Hilberträumen, Rauschquellen oder Laborkalibrierung.',
    },
    {
      type: 'list',
      items: [
        '<strong>Nutzen Sie es zum Konzeptverständnis:</strong> Interferenz, Welche-Weg-Information, Kohärenz und Messung.',
        '<strong>Nicht für Experimentierentwürfe verwenden:</strong> Echte Doppelspalt-Experimente erfordern präzise Berechnungen von Wellenlänge, Apertur, Detektor und Ausbreitung.',
        '<strong>Achten Sie auf den Trend:</strong> Mit zunehmender Unterscheidbarkeit sinkt der Interferenzkontrast.',
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
