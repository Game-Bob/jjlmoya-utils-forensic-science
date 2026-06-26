import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mikrokristalline-drogenanalyse-simulator';
const title = 'Forensischer Mikrokristalliner Drogentest Simulator';
const description = 'Simulieren Sie didaktische mikrokristalline Drogenscreening-Muster, indem Sie verdächtige Substanzen mit klassischen forensischen Reagenzien kombinieren und Kristalltracht, Wachstumsgeschwindigkeit und die Reaktion unter polarisiertem Licht vergleichen.';

const howTo = [
  {
    name: 'Wählen Sie eine verdächtige Probe aus',
    text: 'Wählen Sie Kokain, Heroin, Amphetamin oder Methamphetamin aus, um ein didaktisches Profil für die unbekannte Substanz zu laden.',
  },
  {
    name: 'Tragen Sie ein mikrokristallines Reagenz auf',
    text: 'Wechseln Sie zwischen Platinchlorid, Goldchlorid und Dragendorff-Reagenz, um zu sehen, wie die Reagenzienchemie die Kristallmorphologie verändert.',
  },
  {
    name: 'Passen Sie die simulierte Polarisation an',
    text: 'Verschieben Sie den Polarisationsregler, um den doppelbrechenden Kontrast im virtuellen Mikroskopfeld zu erhöhen oder zu verringern.',
  },
  {
    name: 'Vergleichen Sie das referenzähnliche Ergebnis',
    text: 'Verwenden Sie die Tracht-Bezeichnung, die Übereinstimmungsbewertung, die Wachstumsgeschwindigkeit und den Interpretationshinweis, um zu entscheiden, ob das Muster referenzähnlich, partiell oder unspezifisch ist.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Sind mikrokristalline Tests für illegale Drogen bestätigend?',
    answer: 'Nein. Mikrokristalline Tests sind präsumtive oder vergleichende Screening-Methoden. Eine echte Identifizierung sichergestellter Drogen sollte validierten Schemata folgen, die geeignete Kontrollen und bestätigende instrumentelle Methoden wie GC-MS, LC-MS oder Infrarotspektroskopie umfassen.',
  },
  {
    key: 'faq-2',
    question: 'Warum erzeugen verschiedene Reagenzien unterschiedliche Kristallformen?',
    answer: 'Das Reagenz bildet Salze, Komplexe oder Niederschläge mit funktionellen Gruppen in der Zielverbindung. Löslichkeit, Säurestärke, Konzentration, Verunreinigungen und Trocknungsrate beeinflussen, ob die beobachtete Tracht als Nadeln, Rosetten, Prismen, Platten oder schwache Streuung erscheint.',
  },
  {
    key: 'faq-3',
    question: 'Was fügt polarisiertes Licht zur mikrokristallinen Untersuchung hinzu?',
    answer: 'Polarisiertes Licht kann den Kontrast erhöhen und Doppelbrechung sichtbar machen, wodurch Kanten, Verzweigungen und die innere Kristallstruktur leichter zu vergleichen sind. Es ersetzt nicht die Notwendigkeit von Referenzstandards und Kontrollen.',
  },
  {
    key: 'faq-4',
    question: 'Warum kann ein positiv aussehendes Muster dennoch irreführend sein?',
    answer: 'Streckmittel, Mischungen, abgebautes Material, Reagenzienalter, Verunreinigungen und Erwartungen des Analysten können zu mehrdeutigen oder sich überschneidenden Morphologien führen. Daher müssen präsumtive Ergebnisse vorsichtig interpretiert werden.',
  },
  {
    key: 'faq-5',
    question: 'Kann dieser Simulator eine unbekannte Substanz identifizieren?',
    answer: 'Nein. Es handelt sich um eine didaktische Visualisierung gängiger Morphologiekonzepte. Es kann keine echten Beweismittel testen, keine Chemie messen oder eine Laboranalyse abschließen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Polarisationsmikroskop',
    canvasAria: 'Animiertes mikrokristallines Wachstumsfeld',
    sample: 'Verdächtige Probe',
    sampleCocaine: 'Kokain',
    sampleHeroin: 'Heroin',
    sampleAmphetamine: 'Amphetamin',
    sampleMethamphetamine: 'Methamphetamin',
    reagent: 'Reagenzienregal',
    reagentPlatinum: 'Platinchlorid',
    reagentGold: 'Goldchlorid',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Polarisationskontrast',
    confidence: 'Übereinstimmung',
    growth: 'Wachstum',
    birefringence: 'Doppelbrechung',
    regrow: 'Kristalle nachwachsen lassen',
    warningLabel: 'Forensische Vorsicht',
    warningTitle: 'Screening-Warnung',
    matchReference: 'Referenzähnlich',
    matchPartial: 'Teilweise Übereinstimmung',
    matchNonSpecific: 'Unspezifisch',
    habitFeatheryNeedles: 'Federartige Nadelbündel',
    habitRosettes: 'Rosetten-Sternenbilder',
    habitBranchingPrisms: 'Verzweigte Prismen',
    habitPlates: 'Dünne Plättchen',
    habitWeakScatter: 'Spärliche unspezifische Streuung',
    cueCocainePlatinumChloride: 'Federartige und verzweigte Nadelbündel sind das erwartete Lehrmuster für Kokain mit Platinchlorid.',
    cueCocaineGoldChloride: 'Goldchlorid kann verzweigte orange-braune Kristalle bilden, das Muster ist jedoch weniger spezifisch als mit Platinchlorid.',
    cueCocaineDragendorff: 'Dragendorff zeigt hier eine schwache Alkaloidreaktion; die Morphologie sollte nur als Screening-Information behandelt werden.',
    cueHeroinPlatinumChloride: 'Plättchenartige Ablagerungen können auftreten, diese Paarung ist jedoch kein starker bestätigender Lehrmuster-Match.',
    cueHeroinGoldChloride: 'Rosettencluster und abgerundete Sternenbilder sind das referenzähnliche Heroinmuster in diesem Simulator.',
    cueHeroinDragendorff: 'Dragendorff erzeugt orangefarbene verzweigte Prismen, die mit einem Alkaloidschnitt übereinstimmen und keinen Identitätsnachweis darstellen.',
    cueAmphetaminePlatinumChloride: 'Schnell verzweigte Prismen deuten auf ein stimulanzienähnliches Lehrmuster unter dem gewählten Reagenz hin.',
    cueAmphetamineGoldChloride: 'Spärliche Kristallisation bedeutet, dass der visuelle Befund als unspezifisch gemeldet werden sollte.',
    cueAmphetamineDragendorff: 'Nadel-Sprays wachsen schnell und sind nützlich für die Lehre von präsumtiven Amphetamin-Vergleichen.',
    cueMethamphetaminePlatinumChloride: 'Polarisierte Rosetten können sich bilden, das Ergebnis bleibt jedoch ein präsumtiver Morphologievergleich.',
    cueMethamphetamineGoldChloride: 'Dünne Plättchenformen sind sichtbar, obwohl die Überschneidung mit anderen Verbindungen die Spezifität einschränkt.',
    cueMethamphetamineDragendorff: 'Dichte orangefarbene verzweigte Prismen bieten die stärkste Lehrmuster-Übereinstimmung für Methamphetamin in diesem Set.',
    disclaimer: 'Nur didaktisches Screening-Modell. Die reale Identifizierung von Drogen erfordert validierte Referenzstandards, Reagenzienkontrollen, eine Überwachungskette und eine bestätigende instrumentelle Analyse.',
  },
  seo: [
    {
      type: 'title',
      text: 'Mikrokristalline Drogentests in der forensischen Wissenschaft',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Lehr-Simulator',
      title: 'Wofür dieser mikrokristalline Simulator gedacht ist',
      html: 'Dieses Tool erklärt, wie klassische forensische mikrokristalline Tests erkennbare Kristalltrachten erzeugen können, nachdem eine verdächtige Droge mit einem Reagenz vermischt wurde. Es hilft Studenten, die <strong>Kristallmorphologie</strong>, die Wachstumsgeschwindigkeit und den Polarisationskontrast zu vergleichen, ohne das Browser-Ergebnis als Beweismittel zu behandeln.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'didaktische Probenprofile', icon: 'mdi:flask-outline' },
        { value: '3', label: 'traditionelle Reagenzienoptionen', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'modellierte Kristalltrachten', icon: 'mdi:shape-outline' },
        { value: '0', label: 'rechtliche Identitätsansprüche', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Wie man die Kristalltracht interpretiert',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Praktische Vergleichsliste',
      items: [
        'Beginnen Sie mit einem bekannten Referenzstandard und einer Blindprobe des Reagenzes, bevor Sie eine unbekannte Substanz vergleichen.',
        'Notieren Sie Reagenz, Konzentration, Tropfengröße, Trocknungszeit, Temperatur und Mikroskopvergrößerung.',
        'Vergleichen Sie zuerst die Gesamttracht: Nadeln, Rosetten, Plättchen, Prismen, Verzweigungen oder schwache Streuung.',
        'Behandeln Sie partielles oder spärliches Wachstum als Grund für weitere Tests, nicht als sichere Identifizierung.',
      ],
    },
    {
      type: 'table',
      headers: ['Beobachtete Tracht', 'Häufige Fragen von Anwendern', 'Vorsichtige Interpretation'],
      rows: [
        ['Federartige Nadeln', 'Sieht das aus wie Kokain mit Platinchlorid?', 'Es kann eine nützliche didaktische Übereinstimmung sein, aber Mischungen und Reagenzienbedingungen können die Tracht verändern.'],
        ['Rosetten', 'Sind sternförmige Kristalle diagnostisch?', 'Rosetten können einen Vergleich unterstützen, wenn die Kontrollen übereinstimmen, aber sie reichen allein nicht aus.'],
        ['Verzweigte Prismen', 'Warum wachsen Stimulanzien-Screenings oft so schnell?', 'Einige Salze bilden schnell Kristallisationskeime und verzweigen sich, wenn das Lösungsmittel verdunstet; die Geschwindigkeit ist unterstützend, nicht bestätigend.'],
        ['Schwache Streuung', 'Bedeutet ein schwaches Muster, dass keine Droge vorhanden ist?', 'Nein. Eine niedrige Konzentration, Verunreinigungen, ein gealtertes Reagenz oder eine schlechte Vorbereitung können das Kristallwachstum unterdrücken.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Das mikrokristalline Screening hilft bei',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Schneller visueller Vergleich, wenn ein geschulter Analyst Kontrollen und Referenzmaterialien verwendet.',
          points: ['Demonstrationen im Unterricht', 'Morphologie-Vokabular', 'Präsumtive Einordnung', 'Vergleich der Reagenzienwirkung'],
        },
        {
          title: 'Das mikrokristalline Screening ersetzt nicht',
          icon: 'mdi:alert-circle-outline',
          description: 'Validierte bestätigende Chemie für eine echte Aussage über sichergestellte Drogen.',
          points: ['Instrumentelle Bestätigung', 'Akkreditierte Verfahren', 'Matrixspezifische Validierung', 'Dokumentation von Unsicherheiten'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wissenschaftlicher Hintergrund zu mikrokristallinen Tests',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mikrokristalline Tests stellen eine historische und hochempfindliche Klasse von chemischen Screening-Tests dar, die von forensischen Chemikern zur Identifizierung verdächtiger kontrollierter Substanzen eingesetzt werden. Wenn eine kleine Menge einer Drogenprobe in einer Säure gelöst und mit einem spezifischen Schwermetallreagenz wie Goldchlorid oder Platinchlorid kombiniert wird, fällt ein Koordinationskomplex oder ein unlösliches Salz aus. Die molekulare Struktur der Droge bestimmt die Wachstumsrate, Ausrichtung und Symmetrie der resultierenden Kristalle und erzeugt charakteristische mikroskopische Formen oder Trachten.',
    },
    {
      type: 'paragraph',
      html: 'Die Analyse dieser Trachten unter einem Polarisationsmikroskop ermöglicht es forensischen Untersuchern, optische Eigenschaften wie die Doppelbrechung zu beobachten, bei der der Kristall das Licht in zwei Strahlen aufspaltet, wodurch lebendige Farben und ein hoher Kontrast entstehen. Obwohl instrumentelle Methoden wie die Gaschromatographie-Massenspektrometrie mikrokristalline Tests für die bestätigende Identifizierung weitgehend ersetzt haben, bleibt das mikrokristalline Screening aufgrund seiner Schnelligkeit, seiner geringen Kosten und seiner Fähigkeit, optische Isomere zu trennen, die mit anderen Mitteln nur schwer zu unterscheiden sind, eine geschätzte Technik.',
    },
    {
      type: 'paragraph',
      html: 'In Bildungseinrichtungen hilft die Simulation dieser Reaktionen den Studenten, die Beziehung zwischen chemischen Reagenzien und physikalischer Kristallmorphologie zu verstehen. Durch die Beobachtung, wie Kokain, Heroin und verschiedene Amphetamine auf unterschiedliche Reagenzien reagieren, lernen die Studenten, dass ein einzelner positiver Test keine endgültige forensische Schlussfolgerung darstellt. Angemessene Drogenscreening-Protokolle erfordern den Vergleich unbekannter Proben mit bekannten Referenzmaterialien und die Durchführung von Reagenzienblindproben, um die Gültigkeit und Spezifität der beobachteten Kristallmuster sicherzustellen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kristalltracht', definition: 'Die sichtbare Form oder Wachstumsform eines Kristalls, wie Nadeln, Plättchen, Prismen oder Rosetten.' },
        { term: 'Kristallisation', definition: 'Die erste Bildung winziger Kristallzentren, aus denen größere Strukturen wachsen.' },
        { term: 'Doppelbrechung', definition: 'Optisches Verhalten, das Kristalle unter polarisiertem Licht heller oder farbig erscheinen lassen kann.' },
        { term: 'Präsumtiver Test', definition: 'Ein Screening-Test, der auf eine mögliche Klasse oder Verbindung hindeutet, aber die Identität nicht selbst beweist.' },
        { term: 'Referenzstandard', definition: 'Ein bekanntes Material, das unter denselben Bedingungen getestet wurde, um das unbekannte Muster zu vergleichen.' },
      ],
    },
    {
      type: 'tip',
      title: 'Best Practice für echte Beweismittel',
      html: 'Nutzen Sie die mikrokristalline Morphologie als einen Teil der Untersuchung. Ein zuverlässiger Arbeitsablauf umfasst Blindproben, positive Kontrollen, die Dokumentation des Reagenzienalters, eine unabhängige Überprüfung bei Bedarf und bestätigende Tests im Rahmen eines akzeptierten Schemas für sichergestellte Drogen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Forensische Vorsicht',
      title: 'Ein schöner Kristall ist keine rechtliche Identifizierung',
      html: 'Der Simulator trennt bewusst eine visuelle Übereinstimmungsbewertung von einer forensischen Schlussfolgerung. Die reale Fallarbeit muss Mischungen, Streckmittel, Verunreinigungen, Reagenzienleistung, Analystenschulung und validierte Laborverfahren berücksichtigen.',
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
      applicationCategory: 'ForensicApplication',
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
