import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dreikoerperproblem-simulator';
const title = 'Dreikörperproblem Simulator';
const description = 'Simuliere drei Gravitationskörper in einer zweidimensionalen Ebene mit einstellbaren Massen, Geschwindigkeitsvektoren, Spuren und stabilen oder chaotischen Voreinstellungen.';

const howTo = [
  {
    name: 'Wähle eine orbitale Voreinstellung',
    text: 'Beginne mit der Achterbahn für einen stabilen Referenzfall, dem Lagrange-Dreieck für ein rotierendes Gleichgewicht oder der Schleudervoreinstellung für eine sichtbar chaotische Begegnung.',
  },
  {
    name: 'Passe Massen und Geschwindigkeitsvektoren an',
    text: 'Nutze die Schieberegler für jeden Körper, um Masse und anfängliche Geschwindigkeitskomponenten zu ändern. Kleine Änderungen können ein Muster bewahren, verformen oder vollständig zerstören.',
  },
  {
    name: 'Lies die Diagnosewerte',
    text: 'Beobachte die Gesamtenergie, die nächste und entfernteste Entfernung sowie den Massenschwerpunkt, um zu verstehen, ob die numerische Umlaufbahn gebunden bleibt oder auseinanderdriftet.',
  },
];

const faq = [
  {
    question: 'Was ist das Dreikörperproblem?',
    answer: 'Das Dreikörperproblem fragt, wie sich drei Massen bewegen, wenn jeder Körper die beiden anderen gravitativ anzieht. Anders als beim Zweikörperproblem gibt es keine allgemeine geschlossene Gleichung, die jede mögliche Konfiguration löst, daher werden die meisten praktischen Fälle mit numerischer Integration untersucht.',
  },
  {
    question: 'Warum sind Dreikörperumlaufbahnen instabil?',
    answer: 'Viele Dreikörpersysteme sind empfindlich gegenüber Anfangsbedingungen. Eine winzige Änderung der Geschwindigkeit, Position oder Masse verändert den Zeitpunkt naher Begegnungen, und diese Begegnungen können dramatisch Energie austauschen. Das Ergebnis ist ein System, das eine Weile gebunden bleiben und dann plötzlich einen Körper ausstoßen kann.',
  },
  {
    question: 'Was zeigt die Achterbahn-Voreinstellung?',
    answer: 'Die Achterbahn-Voreinstellung ist eine berühmte periodische Lösung für drei gleiche Massen. Jeder Körper folgt derselben Bahn mit einem Phasenversatz und zeigt, dass das Dreikörperproblem elegante stabile Inseln innerhalb einer viel größeren chaotischen Landschaft enthalten kann.',
  },
  {
    question: 'Ist dies ein physikalisch exakter Astronomie-Simulator?',
    answer: 'Dieses Werkzeug verwendet ein abgeschwächtes newtonsches Modell und einen symplektischen Geschwindigkeits-Verlet-Schritt, damit die Bewegung für das Lernen treu und stabil wirkt. Es ist für die interaktive Erkundung konzipiert, nicht für die hochpräzise Ephemeridenvorhersage.',
  },
  {
    question: 'Wie sollte ich die Gesamtenergie interpretieren?',
    answer: 'Negative Gesamtenergie deutet normalerweise auf ein gebundenes System hin, während Energie nahe Null eine Flucht erleichtern kann. In einer numerischen Simulation warnt eine große Energiedrift auch davor, dass der Zeitschritt oder die Begegnungsgeometrie den Integrator überlastet.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Gravitations-Chaos-Labor',
    canvasLabel: 'Interaktive zweidimensionale Dreikörper-Orbit-Leinwand',
    presetsLabel: 'Orbitale Voreinstellungen',
    figureEightPreset: 'Achterbahn',
    lagrangePreset: 'Lagrange-Dreieck',
    slingshotPreset: 'Schleuder',
    pauseButton: 'Pause',
    playButton: 'Abspielen',
    resetButton: 'Zurücksetzen',
    speedLabel: 'Simulationsgeschwindigkeit',
    trailLabel: 'Spurlänge',
    massLabel: 'Masse',
    velocityXLabel: 'Geschwindigkeit X',
    velocityYLabel: 'Geschwindigkeit Y',
    energyLabel: 'Gesamtenergie',
    separationLabel: 'Entfernungsbereich',
    centerMassLabel: 'Massenschwerpunkt',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktiver Dreikörperproblem-Simulator für orbitales Chaos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Dreikörperproblem ist eine der klarsten Demonstrationen dafür, dass einfache Gesetze komplizierte Bewegungen erzeugen können. Die newtonsche Gravitation liefert eine kompakte Kraftregel, aber sobald ein dritter massiver Körper zum System hinzukommt, formt jeder Orbit kontinuierlich die beiden anderen um. Dieser Simulator lässt dich direkt mit dieser Instabilität experimentieren: Wähle eine bekannte Konfiguration, passe Massen und Geschwindigkeitsvektoren an und beobachte, ob die Körper eine sich wiederholende Umlaufbahn, ein rotierendes Dreieck oder ein chaotisches Streuereignis bilden.',
    },
    {
      type: 'title',
      text: 'Was die Voreinstellungen zeigen',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Voreinstellung', 'Physikalische Idee', 'Worauf achten'],
      rows: [
        ['<strong>Achterbahn</strong>', 'Eine periodische Lösung mit gleichen Massen, bei der alle drei Körper dieselbe Schleife teilen.', 'Der Orbit bleibt nur organisiert, wenn Symmetrie und Geschwindigkeitsgleichgewicht sorgfältig erhalten bleiben.'],
        ['<strong>Lagrange-Dreieck</strong>', 'Drei Körper besetzen ein gleichseitiges Dreieck, das sich um den Massenschwerpunkt dreht.', 'Massenbilanz und Tangentialgeschwindigkeit verhindern, dass das Dreieck nach innen kollabiert.'],
        ['<strong>Schleuder</strong>', 'Eine nahe Begegnung überträgt Energie zwischen den Körpern.', 'Ein Körper kann an Geschwindigkeit gewinnen, während ein anderer stärker gebunden wird, was zeigt, warum chaotische Ausstöße auftreten.'],
      ],
    },
    {
      type: 'title',
      text: 'Warum kleine Änderungen wichtig sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bei einem Zweikörper-Orbit bieten der Massenschwerpunkt und die Orbitalellipse ein stabiles geometrisches Bild. In einem Dreikörpersystem wirken nahe Vorbeiflüge wie gravitative Verhandlungen: Ein Körper kann orbitale Energie ausleihen, scharf die Richtung ändern oder eine geordnete Schleife in ein Streuereignis verwandeln. Diese Empfindlichkeit ist der Grund, warum reale astrophysikalische Systeme wie Dreifachsterne, Planeten-Mond-Begegnungen und frühe Sonnensystem-Planetesimale oft numerische Integration erfordern und nicht eine einzige einfache Formel.',
    },
    {
      type: 'title',
      text: 'Wie man die Diagnose verwendet',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Gesamtenergie</strong> hilft dir zu beurteilen, ob das System gebunden ist und ob die numerische Integration stabil bleibt.',
        '<strong>Entfernungsbereich</strong> zeigt die nächsten und entferntesten Paarabstände, wodurch Beinahekollisionen und Ausstöße leicht zu erkennen sind.',
        '<strong>Massenschwerpunkt</strong> sollte relativ stabil bleiben, wenn der anfängliche Impuls ausgeglichen ist; eine Drift deutet auf eine absichtlich asymmetrische Konfiguration oder einen geänderten Geschwindigkeitsvektor hin.',
        '<strong>Spurlänge</strong> offenbart die langfristige Struktur: Kurze Spuren betonen die aktuelle Interaktion, während lange Spuren sich wiederholende Schleifen und langsame orbitale Präzession sichtbar machen.',
      ],
    },
    {
      type: 'title',
      text: 'Im Werkzeug verwendetes numerisches Modell',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Simulator verwendet die newtonsche invers-quadratische Anziehung mit einem kleinen Glättungsterm, der visuelle Explosionen bei extrem nahen Vorbeiflügen verhindert. Die Bewegung wird mit einem Geschwindigkeits-Verlet-Schritt vorangetrieben, einer gängigen Wahl für Orbit-Demonstrationen, da er das Energieverhalten besser handhabt als ein einfaches Euler-Update. Das Ergebnis ist ein reaktionsschnelles Bildungsmodell, das das qualitative Verhalten des Dreikörperproblems sichtbar macht, ohne professionelle Himmelsmechanik-Software ersetzen zu wollen.',
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
