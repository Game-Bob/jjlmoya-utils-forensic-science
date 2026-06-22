import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'entropie-zweiter-hauptsatz-simulator';
const title = 'Simulator für Entropie und den zweiten Hauptsatz der Thermodynamik';
const description = 'Beobachte, wie heiße und kalte Teilchenkammern sich vermischen, angleichen und die Entropie nach oben treiben - mit einem visuellen Diffusionssimulator und einem Live-Entropie-Diagramm.';

const howTo = [
  {
    name: 'Linke und rechte Temperatur einstellen',
    text: 'Wähle eine kältere und eine heißere Kammer, um ein anfängliches thermisches Ungleichgewicht zu erzeugen. Größere Unterschiede machen den irreversiblen Weg zum Gleichgewicht besser sichtbar.',
  },
  {
    name: 'Die Barrierenöffnung anpassen',
    text: 'Öffne oder verenge den Durchlass zwischen den beiden Kammern. Eine breitere Öffnung lässt Teilchen und Energie schneller diffundieren, sodass die Entropiekurve steiler ansteigt.',
  },
  {
    name: 'Die Teilchenbox beobachten',
    text: 'Blaue Teilchen stellen energieärmere Bewegungen dar, orange Teilchen energiereichere. Mit zunehmenden Kollisionen und Übertritten wird die Box durchmischter und ungeordneter.',
  },
  {
    name: 'Das Entropie-Diagramm auswerten',
    text: 'Verfolge, wie sich räumliche Durchmischung und thermische Angleichung zu einem einzigen steigenden Entropiewert verbinden. Die Kurve soll ein Gefühl dafür vermitteln, warum isolierte Systeme zu wahrscheinlicheren Makrozuständen streben.',
  },
];

const faq = [
  {
    question: 'Warum steigt die Entropie in diesem Simulator?',
    answer: 'Der Anfangszustand ist künstlich geordnet: eine Seite ist kälter, die andere heißer. Sobald die Barriere einen Austausch zulässt, gibt es weit mehr durchmischte Anordnungen als getrennte. Das System bewegt sich daher natürlicherweise in den überwältigend wahrscheinlicheren Makrozustand.',
  },
  {
    question: 'Beweist das den zweiten Hauptsatz exakt?',
    answer: 'Nein. Es handelt sich um ein didaktisches Teilchenmodell, nicht um einen molekulardynamischen Laborcode. Es vermittelt die grundlegende Intuition hinter irreversibler Diffusion und thermischer Angleichung " genau das, wonach die meisten Nutzer fragen, wenn sie wissen wollen, warum Entropie zunimmt.',
  },
  {
    question: 'Was bedeuten hier räumliche Entropie und thermische Entropie?',
    answer: 'Die räumliche Entropie misst, wie gleichmäßig die Teilchen zwischen linker und rechter Kammer verteilt sind. Die thermische Entropie misst in diesem Simulator, wie klein die Energielücke zwischen den beiden Hälften ist. Der Gesamtwert kombiniert beide, sodass Nutzer Durchmischung und Wärmefluss gleichzeitig sehen können.',
  },
  {
    question: 'Warum bewegen sich die Teilchen auch nahe dem Gleichgewicht weiter?',
    answer: 'Gleichgewicht bedeutet nicht, dass die Bewegung aufhört. Es bedeutet, dass das makroskopische Ungleichgewicht verschwindet. Moleküle bewegen, stoßen und tauschen weiterhin Energie aus, aber es gibt keine anhaltende großräumige Richtung mehr, die ausgenutzt werden könnte.',
  },
  {
    question: 'Kann die Entropie jemals kurzzeitig sinken?',
    answer: 'In mikroskopischen Systemen sind kleine Fluktuationen möglich. Dieses visuelle Tool glättet diese Fluktuationen und betont den statistischen Gesamttrend: in einem großen isolierten System sind geordnete Zustände mit niedriger Entropie extrem viel unwahrscheinlicher als durchmischte Zustände.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Irreversible Durchmischung',
    results: 'Ergebnisse des Entropie-Simulators',
    particleBox: 'Teilchen-Diffusionsbox',
    barrier: 'Barriere',
    entropyGraph: 'Entropie im Zeitverlauf',
    liveTrace: 'Live-Verlauf',
    highEntropy: 'hoch',
    midEntropy: 'mittel',
    lowEntropy: 'niedrig',
    controls: 'Steuerung des Entropie-Simulators',
    leftTemperature: 'Linke Temperatur',
    rightTemperature: 'Rechte Temperatur',
    gateAperture: 'Barrierenöffnung',
    pause: 'Pause',
    reset: 'Zurücksetzen',
    resume: 'Fortsetzen',
    totalEntropy: 'Gesamtentropie',
    particleBalance: 'Teilchen links/rechts',
    spatialEntropy: 'Räumliche Entropie',
    thermalEntropy: 'Thermische Entropie',
    energyGap: 'Energielücke',
    noteLabel: 'Interpretation',
    stateGradient: 'Gradient',
    stateMixing: 'Durchmischung',
    stateEquilibrium: 'Gleichgewicht',
    note: 'Die Wahrscheinlichkeit von Makrozuständen zeigt in Richtung maximaler Unordnung.',
  },
  seo: [
    {
      type: 'title',
      text: 'Entropie-Simulator für den zweiten Hauptsatz der Thermodynamik und irreversible Diffusion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nutze diesen Entropie-Simulator, um eine der wichtigsten Ideen der Physik zu visualisieren: isolierte Systeme entwickeln sich von künstlich geordneten Zuständen hin zu wahrscheinlicheren durchmischten Zuständen. Statt eine statische Definition von Entropie zu lesen, kannst du in Echtzeit beobachten, wie eine heiße und eine kalte Kammer Teilchen und Energie austauschen, während eine Live-Kurve den Anstieg der Unordnung verfolgt.',
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool ist auf die häufigste Suchintention hinter Fragen wie "Warum nimmt Entropie zu?", "Wie funktioniert der zweite Hauptsatz?" und "Was ist thermische Diffusion?" zugeschnitten. Ziel ist es nicht nur, einen Slogan über Unordnung zu liefern, sondern Entropie mit Wahrscheinlichkeit, Wärmefluss, Durchmischung und Gleichgewicht so zu verbinden, dass es unmittelbar sichtbar wird.',
    },
    {
      type: 'title',
      text: 'Was der zweite Hauptsatz der Thermodynamik praktisch bedeutet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der zweite Hauptsatz besagt, dass sich spontane Prozesse in einem isolierten System in Richtung von Makrozuständen mit höherer Entropie bewegen. Alltagssprachlich bedeutet das: eine stark organisierte thermische Anordnung " heiße Teilchen auf einer Seite, kalte auf der anderen " bleibt nur dann getrennt, wenn kontinuierlich Arbeit aufgewendet wird, um sie aufrechtzuerhalten.',
    },
    {
      type: 'paragraph',
      html: 'Das geschieht nicht, weil Materie im mystischen Sinne "Chaos bevorzugt". Es geschieht, weil es enorm viele mikroskopische Anordnungen gibt, die einem durchmischten Zustand entsprechen, im Vergleich zu einem getrennten. Entropie verbindet daher Thermodynamik mit Abzählen: je größer die Anzahl kompatibler Mikrozustände, desto größer die Entropie.',
    },
    {
      type: 'title',
      text: 'Wie dieser Entropie-Diffusionssimulator funktioniert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Teilchenbox startet in einer Konfiguration mit niedriger Entropie und einem Temperaturungleichgewicht auf beiden Seiten einer Barriere. Wenn der Durchlass zwischen den Kammern geöffnet ist, kreuzen Teilchen die Grenze, kollidieren und transportieren Energie von einer Seite zur anderen. Die Simulation verfolgt zwei intuitive Größen: die <strong>räumliche Entropie</strong>, die steigt, wenn die Teilchen weniger getrennt sind, und die <strong>thermische Entropie</strong>, die steigt, wenn sich die Energieverteilungen links und rechts angleichen.',
    },
    {
      type: 'paragraph',
      html: 'Der auf dem Bildschirm angezeigte Gesamtentropiewert ist ein didaktischer Proxy, der aus diesen beiden Größen gebildet wird. Es handelt sich nicht um eine laborreife Zustandsfunktion, und sie erhebt nicht den Anspruch, die vollständige statistische Mechanik abzubilden. Ihr Zweck ist es, Nutzern eine korrekte Intuition zu vermitteln: irreversibler Wärmefluss und Diffusion bewegen das System in Richtung Gleichgewicht, weil das Gleichgewicht weit mehr zugänglichen Anordnungen entspricht.',
    },
    {
      type: 'table',
      headers: ['Visuelles Signal', 'Bedeutung', 'Warum es wichtig ist'],
      rows: [
        ['Blaue vs. orange Teilchen', 'Relative kinetische Energie', 'Zeigt, dass Temperaturunterschiede eigentlich Unterschiede in der mittleren mikroskopischen Bewegung sind.'],
        ['Barrierenöffnung', 'Leichtigkeit des Austauschs zwischen den Kammern', 'Lässt dich erkennen, warum sich die Diffusionsrate ändert, wenn sich der Transportweg verändert.'],
        ['Räumlicher Entropie-Messer', 'Gleichmäßigkeit der Teilchenverteilung', 'Erklärt, dass allein die Durchmischung den Makrozustand bereits wahrscheinlicher macht.'],
        ['Thermischer Entropie-Messer', 'Wie klein die Energielücke wird', 'Zeigt, dass Gleichgewicht nicht nur eine Frage der Position, sondern auch der Energieverteilung ist.'],
        ['Entropiekurve', 'Trend über die Zeit', 'Verwandelt die abstrakte Idee der Irreversibilität in einen sichtbaren, einseitigen Relaxationsprozess.'],
      ],
    },
    {
      type: 'title',
      text: 'Warum Entropie zunehmen kann, obwohl jedes Teilchen einfachen Bewegungen folgt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Schüler und Studierende nehmen oft an, dass der zweite Hauptsatz Reibung, Absicht oder eine spezielle "Kraft des Zeitpfeils" erfordert. Der tiefere Punkt ist statistischer Natur. Jedes Teilchen folgt lokalen Regeln, aber wenn viele Teilchen interagieren, dominiert die Anzahl der durchmischten Makrozustände völlig die Anzahl der geordneten Makrozustände. Das System verbringt daher fast seine gesamte Zeit in durchmischten Konfigurationen und nur einen verschwindend geringen Anteil in ordentlich getrennten.',
    },
    {
      type: 'paragraph',
      html: 'Deshalb breitet sich ein Tintentropfen in Wasser aus, deshalb gleicht sich die Temperatur in einem Raum nach dem Ausschalten der Heizung an, und deshalb kühlt ein heißer Gegenstand in Kontakt mit einem kälteren ab. Der umgekehrte Vorgang ist im streng mikroskopischen Sinne nicht durch die newtonsche Bewegung verboten, aber er ist für große Systeme so statistisch unwahrscheinlich, dass er auf menschlichen Skalen praktisch nie beobachtet wird.',
    },
    {
      type: 'title',
      text: 'Entropie, Gleichgewicht und häufige Missverständnisse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Entropie ist nicht einfach "Unordnung":</strong> die präzisere Vorstellung ist die Anzahl der mikroskopischen Anordnungen, die mit derselben makroskopischen Beschreibung vereinbar sind.',
        '<strong>Gleichgewicht bedeutet nicht Stillstand:</strong> Teilchen bewegen sich ständig weiter, aber ihre großräumigen Ungleichgewichte heben sich auf.',
        '<strong>Wärmefluss ist gerichtet, weil Wahrscheinlichkeit gerichtet ist:</strong> es gibt überwältigend mehr Möglichkeiten, Energie zu teilen, als sie scharf getrennt zu halten.',
        '<strong>Niedrige Entropie ist nicht unmöglich:</strong> sie erfordert lediglich Randbedingungen, Präparation oder Arbeit von außerhalb des isolierten Systems.',
        '<strong>Dieser Simulator ist qualitativ:</strong> er vermittelt physikalische Intuition, keine exakte Kalorimetrie, Zustandssummen oder molekulare Transportkoeffizienten.',
      ],
    },
    {
      type: 'title',
      text: 'Wann dieser Simulator verwendet werden sollte',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nutze ihn für Unterrichtsdemonstrationen, Physikwiederholungen, Chemieunterricht, wissenschaftliche Texte und schnelle konzeptionelle Erklärungen. Er ist besonders nützlich, wenn jemand versteht, dass Wärme von heiß nach kalt fließt, aber noch nicht erkennt, wie dies mit Wahrscheinlichkeit, Makrozustands-Zählung und dem zweiten Hauptsatz der Thermodynamik zusammenhängt.',
    },
    {
      type: 'paragraph',
      html: 'Wenn du eine rigorose thermodynamische Berechnung für ein reales Gas, einen Motorkreislauf oder ein Laborsystem durchführen möchtest, benötigst du Zustandsgleichungen, Randbedingungen und experimentell gestützte Parameter. Wenn du jedoch eine Intuition dafür suchst, warum Diffusion irreversibel ist und warum Entropie tendenziell steigt, ist dieser Simulator genau für diese Frage gebaut.',
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
