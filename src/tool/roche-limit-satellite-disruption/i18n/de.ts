import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'roche-grenze-satellitenzerstoerung-rechner';
const title = 'Roche Grenze Rechner und Satellitenzerstörungssimulator';
const description = 'Berechne die Roche Grenze für Planeten und Monde, vergleiche fluide und starre Zerfallsdistanzen und visualisiere, wie Gezeitenkräfte einen Satelliten in ein Ringsystem verwandeln.';

const howTo = [
  {
    name: 'Wähle den Primärkörper',
    text: 'Wähle den Planeten, dessen Schwerkraft den Satelliten dehnt. Der Rechner lädt seinen Radius, seine Dichte und seine Masse für die Roche Grenze und Umlaufzeitschätzungen.',
  },
  {
    name: 'Wähle den Satellitentyp',
    text: 'Wähle einen Eismond, Gesteinsmond, Trümmerhaufen oder eisenreichen Körper. Dichte und innere Kohäsion verändern die Zerfallsgrenze.',
  },
  {
    name: 'Bewege den Orbitregler',
    text: 'Ziehe die orbitale Distanz nach innen oder außen. Die visuelle Scheibe zeigt, ob der Satellit außerhalb der Roche Grenze ist, sie streift, fragmentiert oder bereits zu einem Ring wird.',
  },
  {
    name: 'Vergleiche die Grenzen',
    text: 'Nutze die Anzeigen, um die klassische fluide Roche Grenze mit der niedrigeren starren Schätzung und der kohäsionsangepassten Betriebsgrenze zu vergleichen.',
  },
];

const faq = [
  {
    question: 'Was ist die Roche Grenze?',
    answer: 'Die Roche Grenze ist der Abstand von einem massiven Primärkörper, bei dem die Gezeitenkräfte auf einen kleineren umlaufenden Körper stark genug werden, um die Eigengravitation des kleineren Körpers zu überwinden. Innerhalb dieser Grenze kann ein schwacher oder fluider Satellit auseinandergerissen werden.',
  },
  {
    question: 'Warum gibt es fluide und starre Roche Grenzen?',
    answer: 'Ein fluider Satellit verformt sich leicht, daher können Gezeiten seine Verlängerung verstärken und ihn weiter vom Planeten entfernt zerstören. Ein starrer Satellit kann der Verformung durch Materialfestigkeit widerstehen, daher setzt die einfache starre Schätzung den Zerfall näher am Primärkörper an.',
  },
  {
    question: 'Wird jeder Mond innerhalb der Roche Grenze sofort zu Ringen?',
    answer: 'Nein. Echte Zerstörung hängt von Rotation, Zusammensetzung, Rissen, Porosität, Erwärmung, Einschlägen und Materialfestigkeit ab. Dieses Werkzeug zeigt die klassische Gravitationsgrenze und verwendet ein Übergangsband, um Risiko zu kommunizieren, statt einen sofortigen Schalter.',
  },
  {
    question: 'Warum hängen Saturnringe mit der Roche Grenze Physik zusammen?',
    answer: 'Saturns Ringe befinden sich in einer Region, in der eisiges Material als Partikel bestehen bleiben kann, statt zu einem großen Mond zu akkretieren. Die Roche Grenze hilft zu erklären, warum Ringpartikel nahe am Planeten verteilt bleiben.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Primärkörper',
    satelliteType: 'Satellitentyp',
    orbitDistance: 'Orbitale Entfernung',
    rocheBoundary: 'Roche Grenze',
    fluidLimit: 'Fluide Grenze',
    rigidLimit: 'Starre Grenze',
    activeLimit: 'Aktive Grenze',
    safetyRatio: 'Sicherheitsverhältnis',
    orbitalPeriod: 'Umlaufzeit',
    tidalStress: 'Gezeitenstress',
    ringFormation: 'Ringbildung',
    stable: 'Stabiler Orbit',
    grazing: 'Gezeitenstreifung',
    fragmenting: 'Fragmentierung',
    ring: 'Ringsystem',
    km: 'km',
    hours: 'h',
    density: 'Dichte',
    cohesion: 'Kohäsion',
    planetRadius: 'Planetenradius',
    reset: 'Zurücksetzen',
    closePass: 'Naher Vorbeiflug',
    moonTrack: 'Mondspur',
    debrisTrack: 'Trümmerspur',
    primaryEarth: 'Erde',
    primaryMars: 'Mars',
    primaryJupiter: 'Jupiter',
    primarySaturn: 'Saturn',
    primaryNeptune: 'Neptun',
    satelliteIcyMoon: 'Eismond',
    satelliteRockyMoon: 'Gesteinsmond',
    satelliteRubblePile: 'Trümmerhaufen',
    satelliteIronCore: 'Eisenreicher Mond',
    cohesionFluid: 'Fluid',
    cohesionFractured: 'Gebrochen',
    cohesionRigid: 'Starr',
  },
  seo: [
    {
      type: 'title',
      text: 'Roche Grenze Formel, Bedeutung und Wie Man Diesen Rechner Nutzt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die <strong>Roche Grenze</strong> ist der minimale orbitale Abstand, bei dem ein Satellit, der hauptsächlich durch seine eigene Schwerkraft zusammengehalten wird, einen größeren Körper umkreisen kann, ohne durch Gezeitenkräfte auseinandergerissen zu werden. Menschen suchen danach, wenn sie wissen wollen, ob ein Mond, Komet, Asteroid oder ein künstliches Szenario eine nahe Begegnung mit einem Planeten überleben würde, oder ob sich das Material zu einem Ring ausbreiten würde. Dieser Rechner beantwortet diese Frage, indem er den Planetenradius, die Planetendichte, die Satellitendichte und die ungefähre innere Festigkeit des Satelliten kombiniert.',
    },
    {
      type: 'paragraph',
      html: 'Die Kernidee ist einfach: Die Schwerkraft ist nicht überall auf dem Satelliten gleich stark. Die nahe Seite wird stärker angezogen als die ferne Seite, was eine Dehnungskraft erzeugt. Wenn diese Gezeitendehnung stärker ist als die Eigengravitation und Materialkohäsion des Satelliten, kann der Körper reißen, Masse verlieren und schließlich fragmentieren. Die Roche Grenze ist daher nicht nur eine Entfernung; sie ist ein Vergleich zwischen äußerem Gezeitenstress und innerer Bindung.',
    },
    {
      type: 'title',
      text: 'Vom Rechner Verwendete Roche Grenze Gleichungen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Für einen fluiden oder sehr schwachen Satelliten ist die klassische Näherung <strong>d = 2.44 R (rho_M / rho_m)^(1/3)</strong>. Für einen starren Satelliten ist eine gebräuchliche Näherung <strong>d = 1.26 R (rho_M / rho_m)^(1/3)</strong>. In diesen Gleichungen ist <strong>d</strong> die vom Planetenmittelpunkt gemessene Roche Grenze, <strong>R</strong> der Radius des Primärkörpers, <strong>rho_M</strong> die Dichte des Primärkörpers und <strong>rho_m</strong> die Dichte des Satelliten.',
    },
    {
      type: 'list',
      items: [
        '<strong>Primärradius:</strong> Größere Planeten erzeugen eine größere Roche Grenze, selbst bei ähnlicher Dichte.',
        '<strong>Primärdichte:</strong> Ein dichterer Primär erhöht die Gezeitenstärke bei einem gegebenen Vielfachen seines Radius.',
        '<strong>Satellitendichte:</strong> Ein dichterer Satellit hat eine stärkere Eigengravitation, kann also näher am Planeten überleben.',
        '<strong>Satellitenfestigkeit:</strong> Ein fluides, eisiges, zerklüftetes oder trümmerartiges Objekt zerfällt weiter entfernt als ein kompaktes starres Objekt.',
      ],
    },
    {
      type: 'table',
      headers: ['Modell', 'Formelform', 'Verwendung', 'Bedeutung des Ergebnisses'],
      rows: [
        ['Fluide Roche Grenze', '2.44 R (rho_M / rho_m)^(1/3)', 'Eismonde, geschmolzene Körper, Trümmerhaufen, schwache Kometen', 'Die konservative Zerfallsentfernung für Objekte, die sich leicht verformen.'],
        ['Starre Roche Grenze', '1.26 R (rho_M / rho_m)^(1/3)', 'Dichte Gesteins oder metallische Körper mit Materialfestigkeit', 'Eine nähere niedrigere Schätzung, bei der Materialfestigkeit die Zerstörung verzögert.'],
        ['Kohäsionsangepasste Anzeige', 'Zwischen fluiden und starren Fällen', 'Schneller Szenarienvergleich in diesem Simulator', 'Eine praktische Risikolinie für den gewählten Satellitentyp, kein universeller Naturgesetzschalter.'],
      ],
    },
    {
      type: 'title',
      text: 'Beispiel: Warum ein Eismond nahe Saturn verwundbar ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturn ist viel weniger dicht als die Erde, aber er ist enorm. Ein eisiger Satellit niedriger Dichte hat eine schwache Eigengravitation im Vergleich zu einem kompakten Gesteinsmond, daher setzt das Dichteverhältnis die fluide Roche Grenze weit von Saturns Wolkenobergrenzen entfernt. Das ist ein Grund, warum die Roche Grenze Physik zentral dafür ist, zu verstehen, warum Saturn ein breites, helles Ringsystem aus meist eisigen Partikeln aufrechterhalten kann, anstatt eines einzigen großen neu zusammengesetzten Mondes.',
    },
    {
      type: 'paragraph',
      html: 'Wenn du Saturn und einen Eismond im Rechner wählst und dann den Orbit nach innen ziehst, beobachte das Sicherheitsverhältnis. Über <strong>1.00x</strong> liegt der gewählte Orbit außerhalb der aktiven Roche Grenze. Nahe <strong>1.00x</strong> befindet sich der Mond in einer Gezeitenstreifungsregion, in der Massenverlust oder Rissbildung plausibel wird. Unter <strong>1.00x</strong> wechselt die Visualisierung zu Fragmentbögen und Ringbildung, weil das gewählte Modell Zerstörung vorhersagt.',
    },
    {
      type: 'title',
      text: 'Wie man das Sicherheitsverhältnis interpretiert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das <strong>Sicherheitsverhältnis</strong> ist die aktuelle orbitale Entfernung geteilt durch die gewählte Roche Grenze. Ein Verhältnis von <strong>1.25x</strong> bedeutet, dass der Orbit 25% weiter entfernt ist als die aktive Zerfallsschätzung. Ein Verhältnis von <strong>1.00x</strong> bedeutet, dass der Orbit genau auf der gewählten Roche Grenze liegt. Ein Verhältnis von <strong>0.80x</strong> bedeutet, dass der Satellit tief in der gewählten Zerstörungszone liegt.',
    },
    {
      type: 'table',
      headers: ['Sicherheitsverhältnis', 'Angezeigter Zustand', 'Praktische Bedeutung'],
      rows: [
        ['Über 1.12x', 'Stabiler Orbit', 'Der Satellit ist außerhalb der gewählten Roche Grenze für dieses vereinfachte Modell.'],
        ['1.00x bis 1.12x', 'Gezeitenstreifung', 'Das Objekt ist nahe genug, dass Verformung, Rissbildung oder Oberflächenverlust relevant sein können.'],
        ['0.78x bis 1.00x', 'Fragmentierung', 'Die Eigengravitation reicht im gewählten Modell nicht mehr aus; Trümmerströme sind plausibel.'],
        ['Unter 0.78x', 'Ringsystem', 'Der ursprüngliche Körper wird als verteiltes Material dargestellt, das benachbarten Orbits folgt.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Die Umlaufzeitanzeige ist enthalten, weil nahe Begegnungen nicht nur von der Entfernung abhängen. Material innerhalb der Zerstörungszone folgt schnellen, leicht unterschiedlichen Orbits. Sobald sich Fragmente trennen, verteilt orbitale Scherung sie um den Planeten, während Kollisionen den Trümmer in eine scheibenartige Ringstruktur platten und sortieren.',
    },
    {
      type: 'title',
      text: 'Warum die Roche Grenze Ringe erzeugen kann',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn ein Satellit außerhalb der Roche Grenze auseinanderbricht, können die Fragmente schließlich kollidieren und sich zu einem kleineren Mond wieder ansammeln. Innerhalb der Roche Grenze können nahe Fragmente nicht leicht zu einem stabilen selbstgravitierenden Körper verschmelzen, weil Gezeitenkräfte das Material weiterhin auseinanderziehen. Das Ergebnis kann ein langlebiger Ring sein, besonders wenn der Trümmer eisig, kollisional und durch kleine Monde oder Resonanzen kontinuierlich durchmischt ist.',
    },
    {
      type: 'paragraph',
      html: 'Die Ringbildung ist allmählich. Ein zerstörter Mond verlängert sich zuerst, verliert dann Partikel und größere Fragmente. Diese Fragmente nehmen leicht unterschiedliche orbitale Radien ein, so dass sie vor oder hintereinander abdriften. Im Laufe der Zeit dämpfen Kollisionen die vertikale Bewegung und das Material setzt sich in einer dünnen Scheibe ab. Deshalb zeigt der Simulator einen Übergang von einem einzelnen Mond zu Bögen und dann zu einem volleren Ring, anstatt den Zerfall als sofortige Explosion zu behandeln.',
    },
    {
      type: 'title',
      text: 'Wichtige Grenzen Dieses Roche Grenze Rechners',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Rechner ist für schnelle wissenschaftliche Intuition konzipiert, nicht für hochpräzise Missionsplanung. Echte Satelliten werden von Rotation, Orbitalexzentrizität, innerer Schichtung, Zugfestigkeit, Porosität, Temperatur, Gezeitenaufheizung, früheren Brüchen, Einschlägen und Resonanzen mit anderen Monden beeinflusst. Ein rotierender Trümmerhaufen auf einer exzentrischen Umlaufbahn kann anders versagen als ein kalter monolithischer Fels auf einer Kreisbahn, selbst wenn ihre Durchschnittsdichten ähnlich aussehen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Verwende die fluide Grenze</strong>, wenn das Objekt schwach, eisig, geschmolzen, stark zerklüftet oder aus losem Aggregat besteht.',
        '<strong>Verwende die starre Grenze</strong> als untere Schätzung für kompakte Körper mit bedeutender innerer Festigkeit.',
        '<strong>Lies die aktive Grenze</strong> als die vom Simulator gewählte Arbeitsgrenze für den gewählten Satellitentyp.',
        '<strong>Interpretiere das Ergebnis nicht</strong> als exakte Vorhersage für einen benannten realen Mond ohne detailliertes geophysikalisches Modell.',
      ],
    },
    {
      type: 'title',
      text: 'Häufige Fragen, die Dieses Werkzeug Beantworten Hilft',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verwende dieses Werkzeug, wenn du Fragen schätzen willst wie: Wie nah kann ein Mond der Erde kommen, bevor er auseinanderbricht? Warum befinden sich Saturns Ringe innerhalb einer Roche Grenzen Region? Würde ein Gesteinsmond näher überleben als ein Eismond? Wie verändert die Dichte die Roche Grenze? Was ist der Unterschied zwischen der fluiden und der starren Roche Grenze? Die Steuerungen sind um diese Vergleiche herum aufgebaut, so dass das Ändern einer Variable sofort zeigt, wie die Zerfallsentfernung, das Sicherheitsverhältnis und die Ringbildungsvisualisierung reagieren.',
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
