import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'brandmuster-ursprungsanalysator';
const title = 'Brandmuster Ursprungsanalysator';
const description = 'Kartieren Sie V-Muster, tiefe Verkohlung, Rußschatten und Reinbrand-Indikatoren auf einem Raumplan und projizieren Sie Brandausbreitungsvektoren, um den wahrscheinlichsten Ursprungsbereich zu schätzen.';

const howTo = [
  {
    name: 'Raumplan importieren',
    text: 'Ziehen Sie ein Planbild in den Arbeitsbereich oder laden Sie es von der Festplatte, bevor Sie Beweisvektoren platzieren.',
  },
  {
    name: 'Klicken, um das radiale Beweisauswahlmenü zu öffnen',
    text: 'Platzieren Sie den Zeiger über einem Brandmerkmal, öffnen Sie das kontextbezogene Radialmenü und wählen Sie den Indikatortyp direkt auf der Karte.',
  },
  {
    name: 'Ziehen, um Vektoren zu verfeinern und Konvergenz zu beobachten',
    text: 'Erweitern Sie jeden Ausbreitungsvektor mit Einrasten auf der Zeichenfläche und beobachten Sie, wie das Wahrscheinlichkeitsfeld in Echtzeit neu berechnet wird, während sich die Beweise ansammeln.',
  },
  {
    name: 'Technische Momentaufnahme exportieren',
    text: 'Erstellen Sie einen strukturierten Bericht mit Ursprungskoordinaten, Konfidenz, Varianz, Ebenenzustand und dem vollständigen Vektorsatz zur späteren Überprüfung.',
  },
];

const faq = [
  {
    question: 'Können Brandmuster den genauen Punkt beweisen, an dem ein Feuer begann?',
    answer: 'Nein. Brandmuster können helfen, Ursprungshypothesen zu entwickeln und zu testen, aber Belüftung, Löschmaßnahmen, Brandlast, Flashover und nachträgliche Störungen können Muster verzerren. Die tatsächliche Ursprungsbestimmung erfordert eine systematische Untersuchung.',
  },
  {
    question: 'Warum sind V-Muster in der Brandermittlung wichtig?',
    answer: 'V-Muster spiegeln oft die Aufwärts- und Auswärtsausbreitung von Flammen auf vertikalen Oberflächen wider. Sie können auf einen tiefer gelegenen Ursprungsbereich hinweisen, müssen aber mit anderen Beweisen verglichen werden, bevor Schlussfolgerungen gezogen werden.',
  },
  {
    question: 'Was zeigt tiefe Verkohlung an?',
    answer: 'Tiefe Verkohlung kann auf längere Erhitzung, höheren Wärmefluss oder Brennstoffeffekte hinweisen. Sie ist ein nützlicher Kontext, markiert aber nicht automatisch den Ursprung, da Materialien unterschiedlich schnell verkohlen.',
  },
  {
    question: 'Warum mehrere Vektoren statt eines einzelnen Pfeils verwenden?',
    answer: 'Ein einzelnes Muster kann irreführend sein. Mehrere unabhängige Vektoren reduzieren den Einfluss einer beschädigten Wand, eines einzelnen Brennstoffpakets oder eines einzelnen Belüftungswegs.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Interaktiver forensischer Arbeitsbereich zum Zeichnen von Brandausbreitungsvektoren',
    vPattern: 'V-Muster',
    deepChar: 'Tiefe Verkohlung',
    sootShadow: 'Rußschatten',
    cleanBurn: 'Reinbrand',
    loadPlan: 'Plan laden',
    generateReport: 'Bericht erstellen',
    pointerLabel: 'Zeiger',
    resetVectors: 'Zurücksetzen',
    estimatedOrigin: 'Geschätzter Ursprung',
    visibleLayers: 'Sichtbare Beweisebenen',
    vectorsLabel: 'VEKTOREN',
    confidenceLabel: 'KONFIDENZ',
    varianceLabel: 'VARIANZ',
    modeLabel: 'MODUS',
    guideSummary: 'So verwenden Sie dieses Werkzeug',
    flowPanelTitle: 'Arbeitsablauf',
    legendPanelTitle: 'Beweislegende',
    readoutPanelTitle: 'Ergebnisanzeige',
    flow1Kicker: 'SCHRITT 1',
    flow1Icon: '1',
    flow1Title: 'Laden',
    flow1Text: 'Szenenplan hochladen',
    flow2Kicker: 'SCHRITT 2',
    flow2Icon: '2',
    flow2Title: 'Hinweis wählen',
    flow2Text: 'Auf Brandspur klicken',
    flow3Kicker: 'SCHRITT 3',
    flow3Icon: '3',
    flow3Title: 'Vektor ziehen',
    flow3Text: 'Brandrichtung zielen',
    flow4Kicker: 'SCHRITT 4',
    flow4Icon: '4',
    flow4Title: 'Ergebnis lesen',
    flow4Text: 'Fußzeile prüfen + exportieren',
    basicsTitle: 'Was Sie zuerst tun sollten',
    basicsIntro: 'Laden Sie einen klaren Plan, markieren Sie nur Muster, die Sie begründen können, und verteilen Sie Vektoren auf verschiedene Oberflächen, statt denselben Hinweis zu wiederholen.',
    indicatorsTitle: 'Was jeder Beweistyp bedeutet',
    vPatternShort: 'Wandbrand öffnet sich nach oben',
    vPatternExplain: 'Ein V-Muster ist die vertraute Aufwärts-und-Auswärts-Brandform, die oft an einer Wand zu sehen ist. Es kann darauf hindeuten, dass Hitze und Flammen von einem tieferen Bereich aufstiegen, ist aber kein automatischer Beweis für den genauen Ursprung.',
    deepCharShort: 'Bereich härter oder länger gebrannt',
    deepCharExplain: 'Tiefe Verkohlung bedeutet, dass ein Material in einem Bereich stärker verbrannt, geschwärzt oder verzehrt erscheint als in seiner Umgebung. Sie kann auf längere oder intensivere Erhitzung hinweisen, aber Brennstoffart und Materialdicke spielen eine große Rolle.',
    sootShadowShort: 'Rauch blockiert oder umgelenkt',
    sootShadowExplain: 'Ein Rußschatten ist ein geschützter oder unterschiedlich verdunkelter Bereich, der darauf hindeutet, dass ein Objekt, eine Oberfläche oder ein Luftstrom die Rußablagerung veränderte. Er kann helfen zu rekonstruieren, was vorhanden war oder wie sich Rauch bewegte.',
    cleanBurnShort: 'Weniger Ruß durch Hitze oder Luftstrom',
    cleanBurnExplain: 'Reinbrand ist ein Bereich, in dem Ruß heller, entfernt oder abwesend erscheint, weil Hitze, Belüftung oder direkte Flammeneinwirkung ihn anders beeinflussten. Er ist nützlich, aber nicht jeder saubere Bereich markiert den Ursprung.',
    resultsTitle: 'So lesen Sie das Ergebnis',
    resultsIntro: 'Verwenden Sie die Fußzeile als schnelle Gesundheitsprüfung für Ihre Kartierung, nicht als endgültige forensische Schlussfolgerung.',
    resultsPoint1: 'Wie viele Beweislinien aktiv sind.',
    resultsPoint2: 'Wie stark die aktiven Vektoren übereinstimmen.',
    resultsPoint3: 'Wie breit der Ursprungsbereich noch ist.',
    resultsPoint4: 'Was das Werkzeug von Ihnen als Nächstes erwartet.',
    awaitingVector: 'Warte auf Vektor',
    selectIndicator: 'Indikator auswählen',
    refiningVector: 'Vektor verfeinern',
    needsMoreVectors: 'Weitere Vektoren erforderlich',
    wideArea: 'Breiter Ursprungsbereich',
    focusedArea: 'Fokussierter Ursprungsbereich',
    dropPlan: 'Planbild ablegen oder zum Hochladen klicken',
    needsMoreVectorsText: 'Zeichnen Sie mindestens zwei klare Richtungspfeile. Drei oder mehr unabhängige Beobachtungen machen die Konvergenz meist deutlich leichter interpretierbar.',
    wideAreaText: 'Die projizierten Linien schneiden sich, aber die Streuung ist noch breit. Vergleichen Sie in einer realen Szene Belüftung, Brandlast, Löscheffekte und Zeugeninformationen, bevor Sie den Ursprung eingrenzen.',
    focusedAreaText: 'Die Vektoren konvergieren in einem kompakten Bereich. Betrachten Sie dies als starkes Lehrsignal für die Ursprungshypothesenentwicklung, nicht als endgültige forensische Schlussfolgerung.',
    disclaimer: 'Nur für Bildungszwecke. Die tatsächliche Brandursprungs- und -ursachenermittlung sollte anerkannten Richtlinien, Sicherheitsprotokollen vor Ort, Dokumentationsstandards und qualifizierter Expertenprüfung folgen.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktive Brandursprungsanalyse aus Brandmuster-Vektoren',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Lehrsimulator',
      title: 'Was dieser Brandmuster Ursprungsanalysator lehrt',
      html: 'Dieses Browser-Werkzeug demonstriert, wie Ermittler von physischen Brandmustern auf einen wahrscheinlichen <strong>Ursprungsbereich</strong> schließen. Benutzer kartieren sichtbare Beweise, zeichnen gerichtete Ausbreitungsvektoren und beobachten, wie die projizierten Linien konvergieren oder divergieren. Das Modell ist bewusst lehrreich: Es lehrt Geometrie und Musterinterpretation, nicht rechtliche Ursachenbestimmung.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 Ebenen', label: 'V-Muster, Verkohlung, Ruß, Reinbrand', icon: 'mdi:layers-triple' },
        { value: '2D-Plan', label: 'struktureller Raumplan', icon: 'mdi:floor-plan' },
        { value: '3+ Pfeile', label: 'empfohlene Beobachtungen', icon: 'mdi:vector-line' },
        { value: '0-100 %', label: 'Konfidenzeingabe', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Ein disziplinierter Arbeitsablauf für die Brandmusterinterpretation',
      items: [
        'Beginnen Sie mit Sicherheit, Tatortsicherung, Fotos, Skizzen und systematischer Dokumentation, bevor Sie Muster interpretieren.',
        'Trennen Sie Mustertypen, damit V-förmige Schäden, Verkohlungstiefe, Rußablagerung und Reinbrand nicht zu einer Annahme zusammengefasst werden.',
        'Zeichnen Sie Richtungsindikatoren nur dort, wo das physische Muster eine vertretbare Ausbreitungsrichtung unterstützt.',
        'Suchen Sie nach Konvergenz zwischen unabhängigen Beobachtungen, anstatt sich auf den dramatischsten Schaden zu verlassen.',
        'Verwenden Sie den geschätzten Ursprungsbereich als Hypothese, die gegen Brennstoffe, Zündquellen, Belüftung, elektrische Beweise und Zeugenaussagen getestet wird.',
      ],
    },
    {
      type: 'table',
      headers: ['Muster', 'Potenzieller Wert', 'Hauptwarnung'],
      rows: [
        ['V-Muster', 'Kann Aufwärts- und Auswärtsausbreitung von einem tieferen Bereich nahelegen.', 'Kann durch Belüftung, Flashover, Wandgeometrie und Löschmaßnahmen verändert werden.'],
        ['Tiefe Verkohlung', 'Kann auf anhaltende Hitzeeinwirkung oder intensive Verbrennung hinweisen.', 'Brennstoffart und Materialdicke beeinflussen die Verkohlungstiefe stark.'],
        ['Rußschatten', 'Kann geschützte Bereiche, Objektplatzierung oder Luftstromeffekte aufzeigen.', 'Verschobene Möbel oder Löschaktivitäten können die Interpretation verändern.'],
        ['Reinbrand', 'Kann hohe Hitze, Belüftung oder späte Brandphase zeigen.', 'Identifiziert nicht automatisch den zuerst entzündeten Gegenstand.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bessere Ursprungshypothesen',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Die besten Hypothesen erklären mehrere Beobachtungen gleichzeitig.',
          points: ['Unabhängige Vektoren konvergieren', 'Beweise passen zu bekannten Belüftungswegen', 'Brennstoffpakete sind erfasst', 'Alternative Ursprünge werden aktiv getestet'],
        },
        {
          title: 'Schwache Ursprungshypothesen',
          icon: 'mdi:alert-circle-outline',
          description: 'Schwache Hypothesen stützen sich oft auf ein einziges Muster ohne Prüfung von Verzerrungsfaktoren.',
          points: ['Ein einzelner verbrannter Bereich wird als Beweis behandelt', 'Flashover wird ignoriert', 'Löschschäden sind nicht dokumentiert', 'Zündquellenbeweise werden vorausgesetzt'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wie das Vektormodell funktioniert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeder Pfeil wird als projizierte Linie der Brandausbreitung behandelt. Der Schätzer berechnet paarweise Linienschnittpunkte, filtert Punkte, die innerhalb einer angemessenen Plangrenze liegen, mittelt die verbleibenden Kreuzungen und meldet einen Radius basierend auf der Streuung dieser Schnittpunkte. Ein kleiner Radius mit mehreren Vektoren erzeugt ein stärkeres Konvergenzsignal. Das Schnittmodell funktioniert, indem es die parametrischen Gleichungen zweier Linien löst, die von ihren jeweiligen Beweismarkierungen ausgehen. Wenn zwei Vektoren auf eine gemeinsame Region zeigen, trägt ihr theoretischer Kreuzungspunkt eine Koordinate zum Mittelungspool bei. Je mehr unabhängige Vektoren teilnehmen, desto besser kann der Schätzer Kreuzungen herausfiltern, die weit vom Hauptcluster entfernt liegen, und so den Einfluss einer einzelnen Beobachtung reduzieren, die möglicherweise schlecht ausgerichtet oder falsch interpretiert wurde.',
    },
    {
      type: 'paragraph',
      html: 'Dieser geometrische Ansatz spiegelt eine Unterrichtsübung wider: Er hilft Studenten zu verstehen, warum die Ursprungsanalyse besser wird, wenn Beobachtungen von verschiedenen Oberflächen und Mustertypen stammen. Er zeigt auch ein häufiges Problem: Pfeile können sich schneiden, selbst wenn die zugrunde liegende Interpretation schlecht ist, daher darf das mathematische Zentrum niemals das brandwissenschaftliche Urteil ersetzen. In einer echten Untersuchung vergleichen Praktiker das dargestellte Ergebnis mit Belüftungswegen, Brandlastverteilung, strukturellen Schäden und Zeugenaussagen, bevor sie eine Koordinate als wahrscheinlichen Ursprung behandeln. Das Werkzeug fördert diese Gewohnheit, indem es die Varianz neben dem geschätzten Punkt anzeigt und die Benutzer daran erinnert, dass ein enges Kreuzungscluster nur so stark ist wie die Qualität der Beobachtungen, die es erzeugt haben.',
    },
    {
      type: 'paragraph',
      html: 'Über die grundlegende Schnittlogik hinaus wendet der Schätzer eine Randbeschränkung an, sodass Kreuzungen, die weit außerhalb des Raumplans liegen, ausgeschlossen werden. Dies verhindert, dass Ausreißer das gemittelte Zentrum in unmögliche Richtungen ziehen. Der endgültige Radius stellt die Standardabweichung der verbleibenden Kreuzungskoordinaten dar und liefert ein direktes Maß dafür, wie konsistent die aktiven Vektoren übereinstimmen. Ein Radius unter zehn Prozent der Planspannweite zeigt eine starke Konvergenz an. Ein Radius von mehr als einem Viertel des Plans signalisiert, dass die Beweise noch keinen fokussierten Ursprung unterstützen und mehr oder bessere Beobachtungen erforderlich sind, bevor Schlussfolgerungen gezogen werden.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ursprungsbereich', definition: 'Der allgemeine Bereich, in dem die verfügbaren Beweise den Brandbeginn nahelegen.' },
        { term: 'V-Muster', definition: 'Ein Brandmuster, das oft als Aufwärts- und Auswärtsschaden auf einer vertikalen Oberfläche erscheint.' },
        { term: 'Reinbrand', definition: 'Ein hellerer oder sauberer Bereich, der entsteht, wenn Ruß unter hoher Hitze oder Luftstrom wegbrennt oder nicht abgelagert wird.' },
        { term: 'Rußschatten', definition: 'Ein geschützter oder unterschiedlich abgelagerter Rußbereich, der Informationen über Objekte, Luftstrom oder Hitzeeinwirkung bewahren kann.' },
        { term: 'Vektorkonvergenz', definition: 'Die Häufung projizierter Richtungsindikatoren um einen gemeinsamen Bereich.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische Vorsicht',
      title: 'Konvergenz nicht in Gewissheit verwandeln',
      html: 'Ein enger Schnittpunktcluster ist nur nützlich, wenn die Beobachtungen gültig sind. Reale Untersuchungen müssen Belüftung, Flashover, Brennstoffpakete, elektrische Systeme, Gerätebeweise, Zeugenaussagen, Löschmaßnahmen und Tatortveränderungen berücksichtigen.',
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
