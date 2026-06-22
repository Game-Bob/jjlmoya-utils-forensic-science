const slug = 'simulations-wahrscheinlichkeits-rechner';
const description = 'Analysieren Sie, ob unsere Realität eine Simulation ist, basierend auf Nick Bostroms Trilemma-Argument. Berechnen Sie die existenzielle Wahrscheinlichkeit mit 4 Schlüsselparametern.';
const title = 'Simulationswahrscheinlichkeits Rechner: Leben Sie in einem virtuellen Universum?';
const howTo = [
    {
      name: 'Technologischen Fortschritt anpassen',
      text: 'Schätzen Sie die Wahrscheinlichkeit ein, dass die Menschheit die posthumane Ebene erreicht. 50% ist neutral; erhöhen Sie den Wert, wenn Sie glauben, dass KI und Computertechnik weiterhin exponentiell voranschreiten.',
    },
    {
      name: 'Überlebensrate festlegen',
      text: 'Berücksichtigen Sie die Wahrscheinlichkeit, dass sich die Menschheit nicht selbst zerstört. Faktoren wie Kriege, Klimawandel, Pandemien spielen eine Rolle. Hohe Werte = Optimismus für unsere Zukunft.',
    },
    {
      name: 'Interesse am Simulieren bewerten',
      text: 'Wenn die Menschheit die posthumane Ebene erreicht, würde sie Simulationen ihrer Vergangenheit erstellen wollen? Berücksichtigen Sie Motivationen: wissenschaftliche Forschung, Unterhaltung, historische Bewahrung.',
    },
    {
      name: 'Ergebnis interpretieren',
      text: 'Beobachten Sie, wie sich die Wahrscheinlichkeiten ändern. Ergebnisse > 90% legen nahe, dass eine Simulation fast unvermeidlich ist, wenn die Annahmen erfüllt sind. Spielen Sie mit den Parametern, um verschiedene Zukünfte zu erkunden.',
    },
  ];
const faq = [
    {
      question: 'Was genau ist Bostroms Argument?',
      answer: 'Nick Bostrom schlägt vor, dass eine posthumane Zivilisation, wenn sie über genügend Rechenleistung verfügt, Millionen von Simulationen früherer Universen erstellen könnte. In diesem Fall wäre die Zahl der simulierten Wesen massiv höher als die der ursprünglichen biologischen Wesen. Statistisch gesehen ist es daher wahrscheinlicher, dass Sie simuliert sind.',
    },
    {
      question: 'Bedeuten hohe Wahrscheinlichkeiten, dass wir definitiv eine Simulation sind?',
      answer: 'Nein. Hohe Wahrscheinlichkeiten legen nahe, dass es eine ernsthafte Möglichkeit ist, die in Betracht gezogen werden muss, aber es ist kein Beweis. Das Argument basiert auf Annahmen über die Zukunft der Technologie, die sich möglicherweise nicht erfüllen.',
    },
    {
      question: 'Wie würde es uns beeinflussen, wenn wir wüssten, dass wir eine Simulation sind?',
      answer: 'Philosophisch gesehen argumentieren viele, dass sich dadurch nichts Grundlegendes ändert. Wenn Sie und Ihre Lieben gemeinsam simuliert werden, bleiben Ihre Erfahrungen, Emotionen und Beziehungen real und spürbar. Die gelebte Erfahrung ist das, was zählt, nicht das Substrat.',
    },
    {
      question: 'Gibt es wissenschaftliche Beweise dafür, dass wir uns in einer Simulation befinden?',
      answer: 'Es gibt keine schlüssigen Beweise. Einige Physiker deuten auf Anomalien in der Quantenmechanik (Quantisierung, Verschränkung) als mögliche "Rechenoptimierungen" hin, aber das sind spekulative Interpretationen.',
    },
    {
      question: 'Welchen Wert sollte ich für "N" (Simulations-Maßstab) einsetzen?',
      answer: 'Das hängt von Ihren Überzeugungen über die Zukunft der Computertechnik ab. Niedrige Werte (100-1000) gehen von Ressourcenbeschränkungen aus. Hohe Werte (Millionen) setzen praktisch unbegrenzte Rechenleistung voraus. Die meisten wissenschaftlichen Diskussionen verwenden Werte zwischen 1000 und 1 Billion.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopiert',
    noHistory: 'Kein Verlauf',
    load: 'Laden',
    delete: 'Löschen',
    simulationParameters: 'Simulationsparameter',
    fpLabel: 'fp',
    fpSub: 'Technologischer Fortschritt',
    flLabel: 'fl',
    flSub: 'Überleben der Spezies',
    fiLabel: 'fi',
    fiSub: 'Interesse am Simulieren',
    nLabel: 'N',
    nSub: 'Simulations-Maßstab',
    probabilityTitle: 'Simulationswahrscheinlichkeit',
    trilemmaResult: 'Trilemma-Urteil',
    scenario1: 'Szenario 1: Aussterben',
    scenario2: 'Szenario 2: Desinteresse',
    scenario3: 'Szenario 3: Wir sind simuliert',
    fpDescription: 'Wahrscheinlichkeit, dass die Menschheit die technische Fähigkeit erreicht, Universen mit Bewusstsein zu simulieren.',
    flDescription: 'Wahrscheinlichkeit, einen Kollaps (Aussterben, Krieg) vor Erreichen der posthumanen Ebene zu vermeiden.',
    fiDescription: 'Prozentsatz fortgeschrittener Zivilisationen, die sich entscheiden, Simulationen ihrer Vorfahren zu erstellen.',
    nDescription: 'Anzahl der simulierten Welten, die jede fortgeschrittene Zivilisation typischerweise gleichzeitig betreibt.',
    verdictDetail: 'Die Daten legen nahe, dass es extrem wahrscheinlich ist, dass Ihr Bewusstsein ein Softwareprozess ist.',
  },
  seo: [
    {
      type: 'title',
      text: 'Leben wir in einer Simulation? Die Wissenschaft hinter Nick Bostroms Argument',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Idee, dass unsere Realität eine künstliche Konstruktion sein könnte, eine extrem fortgeschrittene Computersimulation, hat sich von der Science-Fiction zu einer ernsthaften philosophischen und wissenschaftlichen Debatte entwickelt. Im Jahr 2003 veröffentlichte der Philosoph Nick Bostrom von der Universität Oxford einen Artikel mit dem Titel <em>"Leben Sie in einer Computersimulation?"</em>, in dem er ein Trilemma-Argument vorschlug, das unsere Wahrnehmung der Existenz in Frage stellt.',
    },
    {
      type: 'paragraph',
      html: 'Dieser Simulations-Wahrscheinlichkeits-Rechner verwendet Schlüsselparameter aus Bostroms Hypothese, um die Chancen zu schätzen, dass Ihr Bewusstsein tatsächlich das Ergebnis eines Softwareprozesses ist, der von einer posthumanen Zivilisation ausgeführt wird.',
    },
    {
      type: 'title',
      text: 'Die Säulen des Simulationsarguments',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bostroms Argument besagt nicht, dass wir uns in einer Simulation befinden, sondern dass mindestens eine der folgenden drei Thesen fast sicher wahr ist:',
    },
    {
      type: 'list',
      items: [
        '<strong>Vorzeitiges Aussterben:</strong> Die menschliche Spezies wird aussterben, bevor sie ein posthumans Stadium erreicht, in dem sie Ahnen-Simulationen durchführen kann.',
        '<strong>Technologisches Desinteresse:</strong> Eine posthumane Zivilisation wird aus ethischen oder rekreativen Gründen kein Interesse daran haben, Simulationen ihrer Vorfahren durchzuführen.',
        '<strong>Allgegenwärtige Simulation:</strong> Wir leben fast sicher in einer Simulation, weil die Anzahl der simulierten Geister die Anzahl der ursprünglichen biologischen Geister massiv übersteigt.',
      ],
    },
    {
      type: 'title',
      text: 'Wie die Parameter zu interpretieren sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um dieses Werkzeug korrekt zu verwenden, ist es wichtig zu verstehen, was die Modellvariablen darstellen:',
    },
    {
      type: 'table',
      headers: ['Variable', 'Konzept', 'Bedeutung'],
      rows: [
        ['<strong>fp</strong>', 'Technologischer Fortschritt', 'Wahrscheinlichkeit, dass eine Zivilisation die Fähigkeit erreicht, Geister zu simulieren.'],
        ['<strong>fl</strong>', 'Überlebensrate', 'Wahrscheinlichkeit, dass sich die Zivilisation nicht selbst zerstört, bevor sie diesen Punkt erreicht.'],
        ['<strong>fi</strong>', 'Interesse am Simulieren', 'Prozentsatz der Zivilisationen, die sich entscheiden, ihre Macht zur Erstellung virtueller Welten zu nutzen.'],
        ['<strong>N</strong>', 'Simulations-Maßstab', 'Gesamtzahl der Simulationen, die eine einzelne posthumane Zivilisation erstellen würde.'],
      ],
    },
    {
      type: 'title',
      text: 'Warum ist die Wahrscheinlichkeit meist so hoch?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn wir davon ausgehen, dass eine posthumane Zivilisation über immense Rechenleistung verfügen würde (wie die einer Dyson-Sphäre oder eines Jupiter-Gehirns), könnte die Zahl <strong>N</strong> (Simulationen) in die Milliarden gehen. Wenn <em>N</em> sehr groß ist, wird selbst bei geringem Interesse (<em>fi</em>) die Zahl der simulierten Wesen die der ursprünglichen Wesen um Größenordnungen übersteigen.',
    },
    {
      type: 'title',
      text: 'Beweise und Rechengrenzen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Von der Quantenphysik bis zur Kosmologie suchen einige Wissenschaftler nach "Glitches" oder Grenzen in der Auflösung unserer Realität. Wenn das Universum eine Mindestlänge hat (Planck-Länge) oder Verhaltensweisen zeigt, die wie Code-Optimierungen aussehen (wie Quantenverschränkung), gewinnt die Hypothese im Bereich der digitalen Physik an Anhängern.',
    },
    {
      type: 'title',
      text: 'Ethische Reflexion',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn wir herausfinden würden, dass wir eine Simulation sind, würde sich unsere Moral ändern? Für Bostrom zählt die Erfahrung des Bewusstseins. Ein simulierter Geist leidet und liebt genau wie ein biologischer.',
    },
    {
      type: 'title',
      text: 'Anwendungsfälle des Rechners',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Wissenschaftliche Bildung:</strong> Verständnis probabilistischer Modelle angewandt auf die Kosmologie.',
        '<strong>Zeitgenössische Philosophie:</strong> Bostroms Trilemma interaktiv erkunden.',
        '<strong>Futurologie:</strong> Analyse der Auswirkungen der Überlebensrate der Spezies auf unser Schicksal.',
        '<strong>Existenzielle Neugier:</strong> Eigene Überzeugungen über die Zukunft der Technologie bewerten.',
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
      description: description,
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

