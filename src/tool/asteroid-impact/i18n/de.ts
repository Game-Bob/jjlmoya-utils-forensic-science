const slug = 'asteroideneinschlag-simulator';
const description = 'Simulieren Sie Asteroideneinschläge mit realer Physik. Berechnen Sie Energie, Krater, Wärmestrahlung und Schockwelle. Würden Sie Chicxulub überleben?';
const title = 'Asteroideneinschlag Simulator: Apokalypse Rechner';
const howTo = [
    {
      name: 'Projektilgröße wählen',
      text: 'Geben Sie den Asteroidendurchmesser ein, von einem kleinen 10-Meter-Meteoriten bis hin zu einem 10-Kilometer-Planetenkiller.',
    },
    {
      name: 'Geschwindigkeit und Winkel konfigurieren',
      text: 'Passen Sie die Annäherungsgeschwindigkeit und den Eintrittswinkel an (45° ist statistisch der wahrscheinlichste Wert).',
    },
    {
      name: 'Natur des Asteroiden definieren',
      text: 'Wählen Sie aus, ob der Asteroid aus Gestein, Eisen oder Eis besteht, um die Kratertiefe korrekt zu berechnen.',
    },
    {
      name: 'Überlebensurteil analysieren',
      text: 'Ziehen Sie den Asteroiden auf die Karte und geben Sie an, wie weit Sie entfernt sind, um die Auswirkungen von Strahlung, Erdbeben und Schockwelle zu sehen.',
    },
  ];
const faq = [
    {
      question: 'Wie wird die Einschlagsenergie berechnet?',
      answer: 'Die primäre Energie ist kinetisch: (1/2) * Masse * Geschwindigkeit². Wir verwenden realistische Dichten (z. B. 3000 kg/m³ für steinige Asteroiden) und typische Eintrittsgeschwindigkeiten in die Atmosphäre (11 bis 72 km/s). Die resultierende Energie wird in Megatonnen TNT gemessen.',
    },
    {
      question: 'Was ist eine thermische Schockwelle?',
      answer: 'Beim Eintritt in die Atmosphäre komprimiert der Asteroid die Luft so heftig, dass ein Feuerball entsteht, der tausendmal heller als die Sonne ist. Die daraus resultierende Wärmestrahlung kann Verbrennungen dritten Grades verursachen und Wälder in meilenweiter Entfernung vom Einschlagort in Brand setzen.',
    },
    {
      question: 'Warum erzeugen manche Asteroiden keine Krater?',
      answer: 'Kleinere Gesteine (<50m) zerfallen und explodieren aufgrund des Luftdrucks meist in der Atmosphäre (Airburst), wie in Tscheljabinsk geschehen. Die Energie wird als gewaltige Druckwelle freigesetzt, trifft aber nicht als fester Körper am Boden auf.',
    },
    {
      question: 'Wie hoch ist die tatsächliche Wahrscheinlichkeit eines einschlags?',
      answer: 'Kleinere Einschläge (wie Russland 2013) ereignen sich jedes Jahrzehnt. Katastrophale Einschläge (Typ Tunguska) alle paar Jahrhunderte. Ein globales Massenaussterben wie bei Chicxulub findet etwa alle 100 Millionen Jahre statt.',
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
    activateGPS: 'GPS aktivieren',
    analysisLabel: 'Analyse',
    dragToMap: 'AUF DIE KARTE ZIEHEN',
    diameterLabel: 'Durchmesser',
    velocityLabel: 'Geschwindigkeit',
    typeLabel: 'Typ',
    historicalData: 'Historische Daten',
    composition: 'Zusammensetzung',
    rock: 'Gestein',
    iron: 'Eisen',
    ice: 'Eis',
    clearAll: 'Alles löschen',
    searching: 'Suche...',
    gpsActive: 'GPS aktiv',
    gpsError: 'GPS-Fehler',
    verdictSafe: 'SICHERHEITSZONE',
    verdictSafeSub: 'Keine Bedrohung',
    verdictShock: 'SCHOCKWELLE',
    verdictShockSub: 'Strukturschäden',
    verdictBurned: 'WÄRMESTRAHLUNG',
    verdictBurnedSub: 'Extreme Gefahr',
    verdictVaporized: 'GROUND ZERO',
    verdictVaporizedSub: 'Direkter Einschlag',
    presetAerial: 'Luftdetonation',
    presetForest: 'Wald',
    presetComet: 'Komet',
    presetELE: 'E.L.E. (Globales Aussterben)',
  },
  seo: [
    {
      type: 'title',
      text: 'Wenn der Himmel fällt: Die Physik der kosmischen Apokalypse',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Asteroiden sind nicht einfach nur Weltraumgestein. Sie sind kosmische Geschosse, die mit 20 km/s fliegen und mehr Energie freisetzen können als alle Atomwaffen auf der Erde zusammen. Dieser Simulator übersetzt abstrakte Physik in greifbare menschliche Konsequenzen.',
    },
    {
      type: 'title',
      text: 'Die Gleichung des Jüngsten Gerichts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alles beginnt mit der kinetischen Energie: <strong>E = ½mv²</strong>. Ein 100-Meter-Asteroid, der mit 20 km/s fliegt, setzt etwa 0,5 Megatonnen TNT frei. Zum Vergleich: Die Hiroshima-Bombe hatte eine Sprengkraft von 0,015 Megatonnen.',
    },
    {
      type: 'paragraph',
      html: 'Aber die Größe skaliert exponentiell. Ein Objekt, das zehnmal größer ist, hat das 1.000-fache Volumen (und die 1.000-fache Masse) und setzt eine Energie frei, die <strong>500 Megatonnen</strong> entspricht. Chicxulub, der Dinosaurier-Killer, setzte das Äquivalent von <strong>100 Millionen Megatonnen</strong> frei.',
    },
    {
      type: 'paragraph',
      html: 'Ein 1 km großer Asteroid, der auf die Erde trifft, würde mehr Energie freisetzen als alle Atomwaffen des Planeten, wenn sie gleichzeitig gezündet würden.',
    },
    {
      type: 'title',
      text: 'Anatomie der Zerstörung: Konzentrische Schichten der Apokalypse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Der Krater (Ground Zero):</strong> Der Kraterdurchmesser skaliert mit E^0,3. Ein Einschlag von 1 Megatonne erzeugt einen Krater von ca. 1 km. Alles im Inneren wird sofort verdampft.',
        '<strong>Wärmestrahlung (Der Blitz):</strong> Der Feuerball emittiert intensive Infrarotstrahlung. In einer Entfernung von E^0,41 km entzündet sich Kleidung und die Haut erleidet Verbrennungen dritten Grades.',
        '<strong>Schockwelle (Der Hammer):</strong> Die Überdruckwelle breitet sich mit Überschallgeschwindigkeit aus. Bei 1 psi zerbricht Glas. Bei 5 psi stürzen Gebäude ein.',
        '<strong>Erdbeben (Das seismische Echo):</strong> Der Einschlag erzeugt globale seismische Wellen. Chicxulub verursachte ein Erdbeben der Stärke 11, was die Richterskala sprengte.',
      ],
    },
    {
      type: 'title',
      text: 'Historische Einschläge: Lehren aus der Vergangenheit',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ort & Jahr', 'Größe', 'Energie', 'Auswirkungen'],
      rows: [
        ['Tscheljabinsk, Russland (2013)', '20 Meter', '500 Kilotonnen', 'Schockwelle bei 100 km, 1.500 Verletzte, zerbrochene Fenster'],
        ['Tunguska, Sibirien (1908)', '50-60 Meter', '10-15 Megatonnen', '2.000 km² Wald dem Erdboden gleichgemacht, 80 Millionen Bäume gefällt'],
        ['Chicxulub, Golf von Mexiko (vor 66 Mio. J.)', '10 km', '100 Mio. Megatonnen', 'Aussterben von 75 % des Lebens auf der Erde'],
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


