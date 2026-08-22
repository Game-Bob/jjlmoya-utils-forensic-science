import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "stimmen-spektrogramm-analysator-online";
const title = "Stimmen Spektrogramm Analysator Online";
const description = "Visualisieren Sie Frequenz, Zeit, Intensität und Formanten von zwei Audiodateien lokal und privat in Ihrem Browser.";

const howTo = [
  {
    "name": "Zwei Proben wählen",
    "text": "Laden Sie lokale Audiodateien oder nutzen Sie die synthetischen Vokalstudien."
  },
  {
    "name": "Frequenz-Obergrenze festlegen",
    "text": "Wählen Sie 4, 6 oder 8 kHz passend zum Stimmumfang."
  },
  {
    "name": "Spektralplatten ablesen",
    "text": "Inspezieren Sie Zeit, Frequenz, Intensität und Formanten."
  },
  {
    "name": "Anhören und vergleichen",
    "text": "Spielen Sie die Proben ab und vergleichen Sie die Durchschnittswerte."
  }
];

const faq = [
  {
    "question": "Was zeigt ein Spektrogramm der Stimme?",
    "answer": "Ein Spektrogramm stellt Zeit auf der horizontalen Achse, Frequenz auf der vertikalen Achse und Signalintensität durch Helligkeit dar."
  },
  {
    "question": "Werden meine Aufnahmen hochgeladen?",
    "answer": "Nein. Alle Berechnungen erfolgen vollständig lokal im Browser."
  },
  {
    "question": "Was bedeuten F1, F2 und F3?",
    "answer": "Es sind Schätzungen der ersten drei Hauptresonanzen des Vokaltrakts."
  },
  {
    "question": "Kann das Tool einen Sprecher identifizieren?",
    "answer": "Nein. Visuelle Ähnlichkeiten ersetzen kein forensisches Gutachten."
  },
  {
    "question": "Warum ändern sich die Formanten bei anderer Frequenzgrenze?",
    "answer": "Die Wahl des Frequenzbereichs verändert die sichtbaren Resonanzspitzen."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "Nur lokal",
    "privacyNote": "Ihre Aufnahmen bleiben auf Ihrem Gerät. Analyse und Dekodierung laufen direkt im Browser.",
    "loadHeading": "Zwei Audiodateien zum Vergleichen laden",
    "sampleALabel": "Probe A",
    "sampleBLabel": "Probe B",
    "chooseFileLabel": "Audio auswählen",
    "replaceFileLabel": "Audio ersetzen",
    "dropHint": "Ziehen Sie eine Audiodatei hierher (max. 25 MB). Die ersten 20 Sekunden werden analysiert.",
    "presetHint": "Starten Sie sofort mit den zwei synthetischen Vokalstudien.",
    "presetWarmLabel": "Warme Vokalstudie",
    "presetBrightLabel": "Helle Vokalstudie",
    "emptySampleLabel": "Warten auf Audio",
    "readySampleLabel": "Spektralplatte erstellt",
    "decodingSampleLabel": "Spektralplatte wird berechnet",
    "errorSampleLabel": "Probe konnte nicht analysiert werden",
    "durationLabel": "Dauer",
    "ceilingHeading": "Frequenz-Obergrenze",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "Spiegel-Spektrogramm-Bühne",
    "mirrorViewLabel": "Gegenübergestellt",
    "splitViewLabel": "Parallel",
    "playALabel": "Probe A abspielen",
    "playBLabel": "Probe B abspielen",
    "stopLabel": "Stoppen",
    "timeAxisLabel": "Zeit",
    "frequencyAxisLabel": "Frequenz",
    "intensityLegendLabel": "Hellere Tinte bedeutet höhere Energie",
    "formantLegendLabel": "Geschätzte Formant-Linien",
    "sampleAEmptyCanvasLabel": "Laden Sie Probe A für das Spektrogramm",
    "sampleBEmptyCanvasLabel": "Laden Sie Probe B für das Spektrogramm",
    "comparisonHeading": "Analyse der Resonanzmuster",
    "comparisonNote": "Durchschnittliche Spektralspitzen in stimmhaften Abschnitten. Die Abweichungen sind Messwerte, kein Übereinstimmungsprozentsatz.",
    "formantOneLabel": "Erste Resonanzregion (F1)",
    "formantTwoLabel": "Zweite Resonanzregion (F2)",
    "formantThreeLabel": "Dritte Resonanzregion (F3)",
    "averageLabel": "Durchschnitt",
    "differenceLabel": "Differenz",
    "unavailableLabel": "Nicht verfügbar",
    "statusEmptyLabel": "Laden Sie eine Probe zum Starten",
    "statusSingleLabel": "Eine Spektralplatte ist bereit",
    "statusReadyLabel": "Beide Spektralplatten sind bereit",
    "limitError": "Die Datei überschreitet das lokale Limit von 25 MB.",
    "decodeError": "Das Audioformat konnte vom Browser nicht dekodiert werden.",
    "browserError": "Web Audio API ist in diesem Browser nicht verfügbar.",
    "educationalNote": "Didaktisches Signalwerkzeug. Formantlinien dienen der Veranschaulichung und sind nicht für forensische Gutachten geeignet."
},
  seo: [
    { type: 'title', text: "Wie ein Spektrogramm Schall in ein visuelles Bild verwandelt", level: 2 },
    { type: 'paragraph', html: "Ein <strong>Stimmen-Spektrogramm</strong> verwandelt eine Aufnahme in eine Karte mit Zeit auf der horizontalen Achse und Frequenz auf der vertikalen Achse. Stärkere Energie erscheint als hellere Farbe. Dies macht anhaltende Vokale, Obereltöne, Stille und Resonanzen leichter erkennbar als in einer einfachen Wellenform. Die Visualisierung ermöglicht eine direkte und detaillierte Analyse von Sprachmustern im Frequenzbereich. Dadurch lassen sich akustische Merkmale präzise untersuchen." },
    { type: 'paragraph', html: "Der Analysator unterteilt das Signal in kurze überlappende Abschnitte, wendet ein Hamming-Fenster an und berechnet die Energieverteilung über die Frequenzen mittels FFT. Ein kurzer Abschnitt bestimmt den genauen Zeitpunkt, während die Frequenzauflösung zeigt, wo sich die Energie konzentriert. Aufgrund der Unschärferelation der Signalverarbeitung gibt es immer einen Kompromiss zwischen Zeit- und Frequenzauflösung. Diese Eigenschaften bestimmen die visuelle Schärfe." },
    { type: 'diagnostic', variant: 'info', title: "Private Verarbeitung im Browser", html: "Visualisieren Sie Frequenz, Zeit, Intensität und Formanten von zwei Audiodateien lokal und privat in Ihrem Browser." },
    { type: 'stats', columns: 3, items: [
      { value: "Zeit", label: "Von links nach rechts lesen" },
      { value: "Hz", label: "Frequenzposition" },
      { value: "Energie", label: "Als Helligkeit dargestellt" }
    ] },
    { type: 'title', text: "Formanten lesen ohne Ergebnisse zu übertreiben", level: 3 },
    { type: 'paragraph', html: "Formanten sind Resonanzbereiche, die durch den Vokaltrakt geformt werden. F1 und F2 werden in der Phonetik verwendet, um die Vokalhöhe und den Artikulationsort zu beschreiben. Dieser Analysator verfolgt breite Spektralspitzen in drei Frequenzbereichen, damit Benutzer sichtbare Bänder mit dem Verhalten von F1, F2 und F3 verbinden können." },
    { type: 'paragraph', html: "Eine professionelle Formantmessung nutzt normalerweise ein gewichtetes Linear Prediction Coding Verfahren und passt die Frequenzobergrenze an den Sprecher an. Grundtonharmonische, Nasalierung, Raumhall und Hintergrundgeräusche können einfache Schätzungen verschieben. Nutzen Sie diese Linien als didaktische Orientierung und prüfen Sie stets das visuelle Spektrum im Hintergrund." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 bis 1000 Hz","Erste Resonanzregion, verbunden mit Vokalöffnung"],["F2","900 bis 3000 Hz","Zweite Resonanzregion, verbunden mit der Zungenposition"],["F3","2000 bis 4500 Hz","Höhere Resonanzregion, beeinflusst durch die Geometrie des Vokaltrakts"]] },
    { type: 'title', text: "Warum Frequenzgrenzen das Bild verändern", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Niedrige Grenze (4 kHz)", description: "Bessere Sicht auf untere Frequenzen", points: ["Nützlich für Vokale", "Kann hohe Energie ausschließen", "Garantiert keine höhere Genauigkeit"] },
      { title: "Hohe Grenze (6/8 kHz)", description: "Mehr obere Details", highlight: true, points: ["Für helle Stimmen", "Zeigt Reibelaute", "Komprimiert untere Bänder"] }
    ] },
    { type: 'title', text: "Ein verantwortungsvoller Vergleich zweier Proben", level: 3 },
    { type: 'paragraph', html: "Der Vergleich zweier Platten ist am nützlichsten, wenn die Aufnahmen denselben Vokal oder Satz unter ähnlichen akustischen Bedingungen enthalten. Die angezeigten Abweichungen sind absolute Differenzen zwischen Spektralspitzen. Sie stellen kein Übereinstimmungsprozent und keinen biometrischen Identitätsbeweis dar." },
    { type: 'list', items: ["<strong>Gleichen Inhalt vergleichen:</strong> Wiederholte Vokale oder Wörter lassen sich leichter vergleichen als unterschiedliche Sätze.","<strong>Ähnliche Aufnahmebedingungen nutzen:</strong> Mikrofon und Raumakustik beeinflussen das Spektrum maßgeblich.","<strong>Mit dem Cursor zuhören:</strong> Verbinden Sie visuelle Ereignisse mit dem exakten Klangmoment.","<strong>Keine Identitätsansprüche stellen:</strong> Ein ähnlich aussehendes Spektrogramm beweist keine Sprecheridentität."] },
    { type: 'summary', title: "Zusammenfassung des Analysators", items: ["Erstellen Sie ein Audiospektrogramm lokal aus dateibasierten Formaten.","Erkunden Sie zwei Proben in gespiegelten oder parallelen Platten.","Lernen Sie, wie sich spektrale Energie und Formantbereiche verändern.","Halten Sie Vergleiche beschreibend und didaktisch anstatt forensisch."] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
