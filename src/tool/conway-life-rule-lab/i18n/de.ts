import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'conway-spiel-des-lebens-regellabor';
const title = 'Conway Spiel des Lebens Regellabor';
const description = 'Spiele, bearbeite und vergleiche Conway-artige zelluläre Automaten mit B/S-Regeln, Mustersaaten, Live-Metriken und responsivem Simulationsfeld.';

const howTo = [
  {
    name: 'Feld besäen',
    text: 'Wähle ein Muster wie einen Gleiter, Pulsar oder Gosper-Kanone, platziere es auf dem Gitter oder erzeuge eine zufällige Population.',
  },
  {
    name: 'Simulation starten',
    text: 'Nutze Start, Pause, Schritt und Tempo-Steuerung, um Geburten, Tode, Dichte und Stabilität über Zeit zu beobachten.',
  },
  {
    name: 'Regel ändern',
    text: 'Wechsle Voreinstellungen oder gib eine B/S-Regel wie B3/S23, B36/S23 oder B3678/S34678 ein, um verschiedene Automaten zu vergleichen.',
  },
];

const faq = [
  {
    question: 'Was ist B/S-Notation im Spiel des Lebens?',
    answer: 'Die B/S-Notation listet die Nachbarzahlen, die eine neue lebende Zelle erzeugen, und die Zahlen, die eine bestehende lebende Zelle überleben lassen. Conways Spiel des Lebens ist B3/S23: tote Zellen werden mit genau drei Nachbarn geboren, lebende Zellen überleben mit zwei oder drei Nachbarn.',
  },
  {
    question: 'Warum heißt dieses Werkzeug Regellabor statt nur Simulator?',
    answer: 'Die klassische Conway-Regel ist enthalten, aber der Simulator ist dafür gebaut, Familien von Life-artigen zellulären Automaten zu vergleichen. Das Bearbeiten der Geburts- und Überlebenszahlen ändert das Langzeitverhalten und erzeugt Replikatoren, Wellen, Inselgruppen oder unkontrolliertes Wachstum.',
  },
  {
    question: 'Was bedeutet Stabilität im Simulator?',
    answer: 'Stabilität schätzt, wie stark sich die Kolonie in der letzten Generation verändert hat. Hohe Stabilität bedeutet wenige Geburten und Tode relativ zur Population; niedrige Stabilität bedeutet turbulentes oder schnell reorganisierendes Feld.',
  },
  {
    question: 'Hat das Feld Ränder?',
    answer: 'Die Simulation verwendet toroidales Wickeln: der linke Rand verbindet sich mit dem rechten, und oben verbindet sich mit unten. So bewegen sich Muster natürlich weiter, ohne an harten Grenzen zu verschwinden.',
  },
  {
    question: 'Kann ich ein eigenes Startmuster zeichnen?',
    answer: 'Ja. Pausiere die Simulation und klicke oder tippe auf Zellen, um sie umzuschalten. Du kannst handgezeichnete Zellen mit eingebauten Mustern kombinieren und das Ergebnis dann unter beliebiger Regelvoreinstellung ausführen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Feld für Life-artige zelluläre Automaten',
    play: 'Start',
    pause: 'Pause',
    step: 'Schritt',
    clear: 'Leere Leinwand',
    randomize: 'Zufall',
    ruleLabel: 'Regelnotation',
    ruleHelp: 'Geburt / Überleben',
    speedLabel: 'Tempo',
    densityLabel: 'Startdichte',
    patternLabel: 'Muster',
    placePattern: 'Muster setzen',
    generation: 'Generation',
    population: 'Population',
    density: 'Dichte',
    stability: 'Stabilität',
    births: 'Geburten',
    deaths: 'Tode',
    achievementsLabel: 'Laborprotokoll',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Oszillation mit Periode 2 erkannt',
    achievementImmortal: 'Unsterblich',
    achievementImmortalDescription: 'Generation 500 mit vollständiger Stabilität erreicht',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Eine dünne Zufallssaat überschritt 1.000 lebende Zellen',
    presetClassic: 'Conway Classic',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Tag und Nacht',
    patternGlider: 'Gleiter',
    patternGosper: 'Gosper-Kanone',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-Pentomino',
    colonyStatus: 'Koloniesignal',
    statusFrozen: 'stabil',
    statusGrowing: 'wachsend',
    statusFading: 'rückläufig',
    statusChaotic: 'volatil',
    invalidRule: 'Verwende B/S-Notation wie B3/S23.',
  },
  seo: [
    { type: 'title', text: 'Conway Spiel des Lebens Simulator mit bearbeitbaren Regeln', level: 2 },
    { type: 'paragraph', html: 'Dieses Regellabor lässt dich den klassischen zellulären Automaten ausführen und seine Regeln gezielt verändern und vergleichen. Das Feld unterstützt direktes Zeichnen, Musterpositionen, Zufallssaaten, schrittweise Inspektion, variables Tempo und Live-Messungen für Population, Dichte, Geburten, Tode und Stabilität.' },
    { type: 'title', text: 'Wie B/S-Regeln das Spiel verändern', level: 3 },
    { type: 'paragraph', html: 'Life-artige zelluläre Automaten werden oft in <strong>B/S-Notation</strong> geschrieben. Die B-Seite definiert, wie viele lebende Nachbarn eine tote Zelle braucht, um zu entstehen; die S-Seite definiert, wie viele Nachbarn eine lebende Zelle zum Überleben braucht. Conways ursprüngliche Regel <strong>B3/S23</strong> ist berühmt, weil sie in einem schmalen Bereich zwischen Aussterben und unkontrolliertem Wachstum liegt.' },
    { type: 'title', text: 'Live-Metriken lesen', level: 3 },
    { type: 'paragraph', html: 'Population und Dichte zeigen, wie viele Zellen am Leben sind, aber sie erzählen nicht die ganze Geschichte. Geburten und Tode zeigen das aktuelle Aktivitätsniveau, während Stabilität abschätzt, ob die Kolonie sich in einen Oszillator einpendelt, in Stilleben einfriert oder turbulent bleibt.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
