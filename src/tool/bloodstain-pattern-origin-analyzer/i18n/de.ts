import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'analysator-ursprung-blutspurenmuster';
const title = '3D Analysator für den Ursprung von Blutspurenmustern';
const description = 'Modellieren Sie elliptische Blutspuren auf einer vertikalen Ebene, schätzen Sie Aufprallwinkel und visualisieren Sie projizierte Trajektorien in einer interaktiven 3D-Szene.';

const howTo = [
  { name: 'Spuren eingeben oder anpassen', text: 'Verwenden Sie die Tabelle oder die 2D-Fläche, um Position, Breite, Länge und Ausrichtung der Hauptachse jeder Spur zu definieren.' },
  { name: 'Aufprallwinkel überprüfen', text: 'Der Rechner schätzt den Aufprallwinkel aus dem Verhältnis von Breite zu Länge unter Verwendung der Arkussinus-Beziehung.' },
  { name: '3D-Konvergenz untersuchen', text: 'Drehen Sie das Ansichtsfenster, um die projizierten Flugbahnen und die geschätzte Ursprungskugel zu vergleichen.' },
  { name: 'Unsicherheit prüfen', text: 'Nutzen Sie den Streuungswert als praktischen Warnindikator: Eine weite Linientrennung bedeutet, dass der berechnete Ursprung weniger stabil ist.' },
];

const faq = [
  { question: 'Kann ein Browser-Tool die tatsächliche Quelle von Blut vergossenen Spuren bestimmen?', answer: 'Nein. Es kann geometrische Beziehungen vermitteln und vorläufig bewerten, aber Fallkonklusionen erfordern validierte Methoden, Tatortdokumentation, Maßstabskalierung und eine qualifizierte Blutspurenmusteranalyse.' },
  { question: 'Warum wird der Aufprallwinkel aus Breite und Länge berechnet?', answer: 'Bei einer idealen elliptischen Spur wird der Sinus des Aufprallwinkels durch die Breite geteilt durch die Länge angenähert. Reale Spuren können durch Oberflächenbeschaffenheit, Fließen, Übertragung oder Messfehler verzerrt sein.' },
  { question: 'Was stellt die 3D-Ursprungskugel dar?', answer: 'Sie ist die nach der Methode der kleinsten Quadrate berechnete Konvergenzschätzung zwischen den projizierten Trajektorienlinien, keine garantierte punktförmige Quelle.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Metrisch',
    imperial: 'Imperial',
    unitsLabel: 'Einheiten',
    addStain: 'Spur hinzufügen',
    reset: 'Zurücksetzen',
    surface: 'Aufprallfläche',
    viewport3dLabel: '3D-Trajektorien-Ansichtsfenster',
    stainLabel: 'Spur',
    table: 'Messungen',
    origin: 'Geschätzter Ursprung',
    spread: 'Linienstreuung',
    confidence: 'Konfidenz',
    impact: 'Aufprallwinkel',
    high: 'Hoch',
    medium: 'Mittel',
    low: 'Niedrig',
    x: 'X',
    y: 'Y',
    width: 'Breite',
    length: 'Länge',
    rotation: 'Rotation',
    remove: 'Entfernen',
    cm: 'cm',
    inch: 'in',
    degree: 'Grad',
    rotateHint: 'Ziehen Sie die 3D-Ansicht, um die Rekonstruktion zu drehen.',
    disclaimer: 'Nur zur pädagogischen Rekonstruktion. Interpretieren Sie mit validierten Tatortmessungen und dokumentierter Unsicherheit.',
  },
  seo: [
    { type: 'title', text: 'Wie ein 3D Analysator für den Ursprung von Blutspurenmustern funktioniert', level: 2 },
    { type: 'paragraph', html: 'Ein Analysator für den Ursprung von Blutspurenmustern hilft Anwendern dabei, eine der zentralen geometrischen Fragen der Blutspurenmusteranalyse zu untersuchen: <strong>Wo im Raum könnte sich die Blutquelle befunden haben, als die Tröpfchen auf eine Oberfläche trafen?</strong> Dieses Tool modelliert Spuren als Ellipsen auf einer vertikalen Ebene, berechnet einen Aufprallwinkel aus jedem Verhältnis von Breite zu Länge, projiziert die Trajektorien rückwärts in eine 3D-Szene und schätzt einen praktischen Konvergenzbereich.' },
    { type: 'diagnostic', variant: 'warning', title: 'Forensische Vorsicht', html: 'Die Ausgabe ist eine Rekonstruktionshilfe, kein Fallgutachten. Reale Spuren können durch die Struktur des Spurenträgers, Satellitenspritzer, Gerinnung, Fließen, Wischen, Übertragung, Perspektivfehler und unvollständige Maßstabsdokumentation beeinträchtigt werden.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(B/L)', label: 'Formel für Aufprallwinkel' },
      { value: '3+', label: 'Empfohlene unabhängige Spuren' },
      { value: '3D', label: 'Trajektorien-Konvergenzraum' },
    ] },
    { type: 'title', text: 'Formel für Aufprallwinkel', level: 3 },
    { type: 'paragraph', html: 'Für eine einfache elliptische Spur wird der Aufprallwinkel üblicherweise als <strong>arcsin(Breite / Länge)</strong> angenähert. Eine Spur mit einer Breite von 1 cm und einer Länge von 2 cm ergibt daher einen Aufprallwinkel von 30 Grad. Diese Beziehung ist nützlich, da sie eine flache Spur in einen Trajektorienwinkel umwandelt. Sie setzt jedoch voraus, dass die gemessene Spur repräsentativ und nicht verzerrt ist.' },
    { type: 'code', ariaLabel: 'Berechnung des Aufprallwinkels', code: 'Aufprallwinkel = arcsin(Spurenbreite / Spurenlänge)\nBeispiel: arcsin(1 cm / 2 cm) = 30 Grad' },
    { type: 'paragraph', html: 'Dies ist eine häufige Suchabsicht hinter Anfragen wie <em>Aufprallwinkel-Rechner für Blutspuren</em>, <em>Formel für den Aufprallwinkel von Blutspritzern</em> und <em>Wie berechnet man die Flugbahn von Blutspuren</em>. Der wichtige Punkt ist, dass die Formel nur einen Teil der Rekonstruktion beantwortet. Sie schätzt den Winkel des Weges relativ zur Aufprallfläche; sie identifiziert für sich genommen nicht die Quelle, den Entstehungsmechanismus, die Waffe oder die Ereignisreihenfolge.' },
    { type: 'title', text: 'Wie man Spuren vor der Dateneingabe misst', level: 3 },
    { type: 'paragraph', html: 'Die aussagekräftigsten Daten stammen aus kalibrierten, rechtwinkligen Fotografien oder direkten Tatortmessungen. Messen Sie den elliptischen Hauptkörper der Spur, nicht Satellitenspritzer, Ausläufer, Fließspuren oder sekundäre Spuren. Die Breite sollte über die kurze Achse und die Länge entlang der langen Achse gemessen werden. Die Rotation sollte der Richtung der Längsachse auf der Aufprallfläche folgen. Kleine Fehler bei Länge, Breite oder Ausrichtung können die projizierte Trajektorie erheblich verschieben, sobald sie im 3D-Raum verlängert wird.' },
    { type: 'table', headers: ['Messqualität', 'Wahrscheinliche Auswirkung', 'Praktische Reaktion'], rows: [
      ['Hauptachse ist klar', 'Rotation ist zuverlässiger', 'Nutzen Sie die sichtbare Hauptachse und dokumentieren Sie die Ausrichtungsmethode.'],
      ['Breite oder Länge ist verzerrt', 'Aufprallwinkel kann fehlerhaft sein', 'Kennzeichnen Sie Unsicherheiten und vergleichen Sie mit benachbarten Spuren.'],
      ['Wenige Spuren konvergieren', 'Ursprungsschätzung wird instabil', 'Fügen Sie unabhängige Spuren hinzu, bevor Sie den 3D-Ursprung interpretieren.'],
      ['Maßstab fehlt', 'Alle Entfernungen werden rein illustrativ', 'Geben Sie ohne Kalibrierung keine realen Koordinaten des Ursprungs an.'],
    ] },
    { type: 'title', text: 'Interpretation der 3D-Konvergenz', level: 3 },
    { type: 'paragraph', html: 'Die Ursprungskugel in diesem Tool wird als der Punkt berechnet, der allen projizierten Trajektorienlinien am nächsten liegt. Wenn Linien nahe beieinander verlaufen, ist der Streuungswert gering und das Vertrauen steigt. Wenn Linien auseinanderdriften, wird die Kugel zwar immer noch angezeigt, sollte jedoch als schwacher Kompromiss der kleinsten Quadrate und nicht als präzise Quelle verstanden werden.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Konvergenzbereich', description: 'Eine zweidimensionale Schätzung auf der Aufprallfläche, die häufig verwendet wird, um zu sehen, wo sich die Richtungen der Längsachsen in der Vorderansicht schneiden.', points: ['Nützlich für eine erste Prüfung', 'Stellt für sich genommen keine vertikale Höhe dar'] },
      { title: 'Ursprungsbereich oder Ursprungsvolumen', description: 'Eine dreidimensionale Schätzung, die die Richtung auf der Ebene mit dem Aufprallwinkel kombiniert, um Trajektorien in den Raum zu projizieren.', highlight: true, points: ['Erklärt die mögliche Höhe der Quelle', 'Empfindlich gegenüber Mess- und Winkelsicherheiten'] },
    ] },
    { type: 'paragraph', html: 'Anwender suchen oft nach einem <em>Ursprungspunkt-Rechner für Blutspritzer</em> und erwarten eine einzige exakte Koordinate. In der Praxis ist eine fundierte Interpretation vorsichtiger. Der Ursprung ist besser als ein Bereich zu verstehen, der durch mehrere Trajektorien gestützt wird. Wenn die berechneten Linien ein enges Bündel bilden, ist das Modell kohärenter. Wenn sie durch ein weites Volumen verlaufen, zeigt Ihnen die Rekonstruktion, dass die Messungen, die Spurenauswahl oder die Annahmen überprüft werden müssen.' },
    { type: 'title', text: 'Häufige Gründe, warum Trajektorien sich nicht treffen', level: 3 },
    { type: 'proscons', title: 'Starke Eingangsdaten im Vergleich zu schwachen Eingangsdaten', items: [
      { pro: 'Mehrere gut ausgeprägte elliptische Spuren mit klaren Hauptachsen', con: 'Nur ein oder zwei Spuren, oder Spuren, die ausgewählt wurden, weil sie zu einer Theorie passen' },
      { pro: 'Kalibrierte Messungen rechtwinklig zur Aufprallfläche', con: 'Schräge Fotos, unbekannter Maßstab oder kopierte Screenshots' },
      { pro: 'Unabhängige Spuren aus demselben Ereignisablauf', con: 'Mischung aus passiven Tropfen, Übertragungsspuren, Schleuderspuren, Fließen oder sekundären Aufprallmustern' },
    ] },
    { type: 'paragraph', html: 'Eine schlechte Konvergenz bedeutet nicht automatisch, dass das Tool fehlerhaft ist. Es kann bedeuten, dass die Spuren nicht zum selben Muster gehören, das Foto perspektivisch verzerrt ist, die Längsachse falsch abgelesen wurde, die Spur keine saubere Ellipse ist oder das physikalische Ereignis komplexer ist als ein einfaches Punktquellenmodell. Das ist eine wertvolle Erkenntnis. Ein Rekonstruktionstool sollte Widersprüche aufzeigen, anstatt sie hinter einer scheinbar sicheren Zahl zu verbergen.' },
    { type: 'title', text: 'Wofür dieses Tool nützlich ist', level: 3 },
    { type: 'list', items: [
      '<strong>Nutzen Sie mehrere Spuren:</strong> Drei oder mehr unabhängige Spuren liefern eine aussagekräftigere Konvergenzschätzung.',
      '<strong>Achten Sie auf die Streuung:</strong> Eine hohe Streuung warnt davor, dass die Linien im 3D-Raum nicht eng übereinstimmen.',
      '<strong>Maßstab bewahren:</strong> Zentimeter- oder Zoll-Werte müssen aus kalibrierten Fotos oder Tatortmessungen stammen.',
      '<strong>Lehre von Fallarbeit trennen:</strong> Diese Visualisierung eignet sich am besten für Ausbildung, Planung und Veranschaulichung vor einer formellen Prüfung.',
    ] },
    { type: 'card', title: 'Bester Arbeitsablauf', html: 'Beginnen Sie mit dem Eintragen einer kleinen Auswahl qualitativ hochwertiger Spuren. Prüfen Sie, ob die 2D-Richtungen der Längsachsen visuell Sinn ergeben. Untersuchen Sie dann die 3D-Trajektorien, notieren Sie die Streuung und ändern Sie jeweils nur eine Messung, um zu sehen, welche Spur die Rekonstruktion maßgeblich beeinflusst. Diese Sensitivitätsprüfung ist oft nützlicher als die rohe Ursprungskoordinate.' },
    { type: 'title', text: 'Wann man sich nicht auf eine Schätzung des Blutspurenursprungs verlassen sollte', level: 3 },
    { type: 'paragraph', html: 'Verlassen Sie sich nicht auf eine einfache Ursprungsschätzung, wenn die Spuren stark deformiert sind, der Spurenträger gekrümmt oder uneben ist, das Muster Wischspuren oder projiziertes Auswurfsblut enthält, die Oberfläche bewegt wurde oder der Tatort keinen verlässlichen Maßstab aufweist. Dieselbe Vorsicht ist geboten, wenn Spuren aus verschiedenen Entstehungsmechanismen oder zu unterschiedlichen Zeitpunkten des Ereignisses entstanden sind. Eine sauber aussehende 3D-Visualisierung kann irreführend sein, wenn das Spurenmuster nicht für eine geometrische Rekonstruktion geeignet ist.' },
    { type: 'glossary', items: [
      { term: 'Aufprallwinkel', definition: 'Der geschätzte Winkel zwischen der Flugbahn des Tröpfchens und dem Spurenträger, üblicherweise berechnet aus dem Verhältnis von Breite zu Länge einer elliptischen Spur.' },
      { term: 'Trajektorienlinie', definition: 'Eine projizierte Linie, die den möglichen rückwärtigen Flugweg von einer Spur in den dreidimensionalen Raum zeigt.' },
      { term: 'Konvergenzbereich', definition: 'Der ungefähre Bereich, in dem sich die Spurenrichtungen in der Projektion auf die Aufprallebene schneiden.' },
      { term: 'Ursprungsbereich', definition: 'Der ungefähre dreidimensionale Bereich, aus dem das Blut stammen könnte, basierend auf mehreren projizierten Trajektorien.' },
    ] },
    { type: 'summary', title: 'Optimale Nutzung', items: [
      'Nutzen Sie den Analysator, um die Geometrie der Trajektorien zu verstehen und die Sensitivität der Messungen zu testen.',
      'Vergleichen Sie die Ursprungskugel mit dem Streuungswert, bevor Sie einer Rekonstruktion vertrauen.',
      'Nutzen Sie die Visualisierung nicht als alleinige forensische Meinung.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
