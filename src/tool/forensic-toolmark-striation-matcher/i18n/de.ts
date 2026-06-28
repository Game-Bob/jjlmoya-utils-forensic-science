import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensischer-werkzeugspuren-riefen-vergleicher';
const title = 'Forensischer Riefenvergleicher für Werkzeugspuren';
const description = 'Laden Sie fragliche und bekannte Werkzeugspurbilder hoch, richten Sie sie in einem geteilten Vergleichsmikroskop aus und untersuchen Sie die Kontinuität der Riefen mit visuellen Steuerelementen.';

const howTo = [
  {
    name: 'Vergleichsbilder laden',
    text: 'Laden Sie ein bekanntes Prüfspurbild und ein fragliches Spurenbild aus Ihrem eigenen Fallmaterial, Ihren Notizen oder Ihrem Schulungsset hoch.',
  },
  {
    name: 'Vergleichsschnitt verschieben',
    text: 'Ziehen Sie über den optischen Betrachter, um mehr von der bekannten oder fraglichen Spur freizulegen, während beide Proben in einem Feld bleiben.',
  },
  {
    name: 'Versatz, Drehung, Zoom und Kontrast anpassen',
    text: 'Verwenden Sie die Mikrometer-Steuerelemente, um das fragliche Bild zu verschieben und zu drehen, und passen Sie dann Zoom, Kontrast und Helligkeit an, damit feine Riefen sichtbar bleiben.',
  },
  {
    name: 'Vergleichsansicht exportieren',
    text: 'Wenn die visuelle Ausrichtung bereit ist, exportieren Sie eine PNG-Ansicht für Diskussionen, Klassenbewertungen oder Fallnotizen.',
  },
];

const faq = [
  {
    question: 'Was ist ein forensischer Werkzeugspurenvergleich?',
    answer: 'Der forensische Werkzeugspurenvergleich untersucht Spuren, die entstehen, wenn ein Werkzeug eine andere Oberfläche berührt, schneidet, kratzt, aushebelt oder zusammendrückt. Gutachter vergleichen Klassenmerkmale, Spurenqualität und mikroskopische Riefendetails zwischen fraglichen Spuren und bekannten Prüfspuren.',
  },
  {
    question: 'Kann dieses Online-Tool das genaue Werkzeug identifizieren, das eine Spur hinterlassen hat?',
    answer: 'Nein. Dieser Arbeitsbereich dient der visuellen Ausrichtung und Ausbildung. Er berechnet keine Quellenzuordnung, Wahrscheinlichkeit, Fehlerrate oder eine automatisierte forensische Schlussfolgerung.',
  },
  {
    question: 'Warum sind Versatz, Drehung und Zoom beim Werkzeugspurenvergleich wichtig?',
    answer: 'Kleine Unterschiede im Werkzeugwinkel, Druck, Maßstab, in der Kameraposition und der seitlichen Platzierung können dazu führen, dass ähnliche Riefenverläufe unausgerichtet erscheinen. Versatz-, Drehung- und Zoom-Steuerelemente helfen dabei, zwei Bilder in eine vergleichbare Betrachtungsposition zu bringen.',
  },
  {
    question: 'Welche Bilder eignen sich am besten für die visuelle Werkzeugspurenausrichtung?',
    answer: 'Verwenden Sie scharfe, gut beleuchtete Bilder, die so rechtwinklig wie möglich aufgenommen wurden und genügend Überlappung im Spurbereich aufweisen. Vermeiden Sie starke Unschärfe, extreme Blendung, perspektivische Verzerrungen und Bilder, bei denen der Riefenbereich zu kurz oder beschädigt ist.',
  },
  {
    question: 'Was sollte ein Benutzer nach dem Ausrichten zweier Werkzeugspurbilder dokumentieren?',
    answer: 'Dokumentieren Sie die Quelle jedes Bildes, ob es sich um eine fragliche oder bekannte Spur handelt, die verwendeten Ausrichtungseinstellungen, alle angewendeten Bildanpassungen, sichtbare Bereiche der Übereinstimmung oder Nichtübereinstimmung sowie die Einschränkungen der Bildqualität.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Geteilte Vergleichsmikroskopansicht von bekannten und fraglichen Werkzeugspurenriefen',
    splitLabel: 'Vergleichsschnitt verschieben',
    units: 'Versatz-Einheitensystem',
    metric: 'Metrisch',
    imperial: 'Imperial',
    toolProfile: 'Werkzeugprofil',
    loadImages: '1. Laden',
    alignImage: '2. Fragliches Bild ausrichten',
    adjustImage: '3. Sichtbarkeit anpassen',
    outputControls: 'Ausgabesteuerung',
    demoOptions: 'Demo-Optionen',
    uploadKnown: 'Bekanntes/Prüfbild',
    uploadQuestioned: 'Fragliches Bild',
    noFile: 'Kein Bild geladen',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Schraubendreherspitze',
    prybar: 'Brechstangenkante',
    boltCutter: 'Bolzenschneiderbacke',
    offset: 'Horizontaler Versatz',
    rotation: 'Winkelrotation',
    zoom: 'Bildzoom',
    contrast: 'Kontrast',
    brightness: 'Helligkeit',
    microns: 'Mikrometer',
    thousandths: 'Tausendstel',
    degrees: 'Grad',
    correlation: 'Modus / Punktzahl',
    verdictStrong: 'starke Ausrichtung',
    verdictPartial: 'teilweise Ausrichtung',
    verdictWeak: 'schwache Ausrichtung',
    center: 'Zentrieren',
    fineTip: 'feine Schleiflinien',
    wideEdge: 'breite Kompression',
    crushJaw: 'gepaarte Quetschrippen',
    grid: 'Gitter',
    exportImage: 'Ansicht exportieren',
    exportFilename: 'werkzeugspur-vergleichsansicht.png',
    phaseFit: 'Phasenanpassung',
    rotationFit: 'Rotationsanpassung',
    knownMark: 'Bekannte Prüfspur',
    questionedMark: 'Fragliche Spur',
    reliefGraph: 'Digitalisiertes Mikro-Oberflächenrelief',
    visualMode: 'Visuell',
    visualVerdict: 'manueller Vergleich',
    visualInterpretation: 'Nur visuelle Ausrichtung. Es wird keine automatisierte forensische Schlussfolgerung berechnet.',
    interpMatch: 'Demo-Vorschau. Laden Sie Bilder hoch, um echte Spuren zu vergleichen.',
    interpPossible: 'Demo-Vorschau. Passen Sie die Ausrichtung an oder laden Sie Bilder hoch.',
    interpMismatch: 'Demo-Vorschau. Zentrieren Sie neu oder laden Sie Bilder hoch.',
    disclaimer: 'Nur visueller Arbeitsbereich.',
  },
  seo: [
    {
      type: 'title',
      text: 'Online Forensisches Werkzeugspuren-Vergleichsmikroskop',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Visueller Arbeitsbereich',
      title: 'Vergleichen Sie fragliche und bekannte Werkzeugspurbilder im Browser',
      html: 'Dieser Werkzeugspuren-Vergleichsarbeitsbereich ermöglicht es Ihnen, zwei Bilder hochzuladen, sie in einem geteilten Vergleichsmikroskop-Layout anzuzeigen und die fragliche Spur anzupassen, bis Riefenverläufe, Kratzspuren, Druckmarken oder mikroskopische Riefen nebeneinander untersucht werden können. Er wurde für Studenten der Forensik, Ausbilder, Ermittler und Rechtsteams entwickelt, die eine klare Möglichkeit benötigen, den <strong>Vergleich zwischen bekannten und fraglichen Werkzeugspuren</strong> zu erklären, ohne spezielle Mikroskopie-Software zu installieren.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 Uploads', label: 'bekannte und fragliche Bilder', icon: 'mdi:image-plus' },
        { value: 'Geteilte Ansicht', label: 'Vergleichsmikroskop-Layout', icon: 'mdi:compare-horizontal' },
        { value: 'Ausrichtung', label: 'Versatz-, Drehung- und Zoom-Steuerelemente', icon: 'mdi:axis-arrow' },
        { value: 'PNG-Export', label: 'Vergleichsansicht speichern', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'Wann dieser Vergleichsarbeitsbereich für Werkzeugspuren nützlich ist',
      items: [
        'Vermittlung des Konzepts, wie Vergleichsmikroskope eine bekannte Prüfspur neben eine fragliche Spur legen.',
        'Vorbereitung von Unterrichtsdemonstrationen mit echten Werkzeugspurbildern oder Schulungsbildern.',
        'Erklärung, warum Ausrichtung, Maßstab, Drehung, Beleuchtung und Kontrast die Riefeninterpretation beeinflussen.',
        'Erstellung einer sauberen visuellen Darstellung oder eines Fallnotizbildes, das die ausgerichtete Ansicht zeigt, ohne einen automatisierten Identitätsnachweis zu behaupten.',
        'Überprüfung der Bildqualität vor der Entscheidung, ob eine Spur für einen formellen Laborvergleich geeignet ist.',
      ],
    },
    {
      type: 'title',
      text: 'So vergleichen Sie Werkzeugspurbilder online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Laden Sie zunächst ein Bild einer <strong>bekannten Prüfspur</strong> und ein Bild einer <strong>fraglichen Spur</strong>. Eine bekannte Spur wird in der Regel unter kontrollierten Bedingungen mit einem bestimmten Werkzeug erzeugt. Eine fragliche Spur ist die Spur, die an einem Tatort, Objekt, Türrahmen, Schloss, einer Schnittfläche oder einem anderen Gegenstand gesichert wurde, dessen Quelle unbekannt ist. Das Ziel des Arbeitsbereichs besteht nicht darin, die Identität automatisch festzustellen, sondern die beiden Bilder in eine nützliche visuelle Beziehung zu bringen, damit der Benutzer die Kontinuität und Abweichungen untersuchen kann.',
    },
    {
      type: 'paragraph',
      html: 'Nachdem beide Bilder geladen sind, verwenden Sie den geteilten Schieberegler, um mehr oder weniger von einer Seite anzuzeigen. Passen Sie den horizontalen Versatz an, um Riefenverläufe in Phase zu bringen, und drehen Sie dann das fragliche Bild, um den Kamerawinkel oder Werkzeugwinkel auszugleichen. Der Zoom hilft, wenn die beiden Bilder mit unterschiedlichen Vergrößerungen aufgenommen wurden. Kontrast und Helligkeit helfen, schwache Kratzer, komprimierte Rippen oder flache Spuren sichtbar zu machen. Diese Anpassungen sollten jedoch dokumentiert werden, da sie das angezeigte Erscheinungsbild des Bildes verändern.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Was der Arbeitsbereich Ihnen zu sehen hilft',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Ein gutes Setup mit geteilter Ansicht erleichtert die Überprüfung, ob zwei Spuren nach sorgfältiger Ausrichtung eine vergleichbare visuelle Struktur aufweisen.',
          points: ['Ähnliche Rippen- oder Riefenrichtung', 'Kontinuität über mehrere benachbarte Merkmale hinweg', 'Maßstabs- und Drehunterschiede, die korrigiert werden müssen', 'Bereiche, in denen die Spurenqualität für eine Inspektion ausreicht', 'Offensichtliche Abweichungen der Klassenmerkmale, die den Vergleich vorzeitig beenden können'],
        },
        {
          title: 'Was es nicht beweisen kann',
          icon: 'mdi:alert-circle-outline',
          description: 'Dieses Browser-Tool ist kein validiertes forensisches Identifizierungssystem und sollte nicht als solches verwendet werden.',
          points: ['Keine automatisierte Schlussfolgerung auf dieselbe Quelle', 'Keine zufällige Übereinstimmungswahrscheinlichkeit', 'Keine Populationshäufigkeitsschätzung', 'Kein Ersatz für die Überprüfung der Originalbeweise', 'Kein Ersatz für die Qualitätssicherung im Labor oder die Peer-Review'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Steuerelement', 'Was es ändert', 'Warum es wichtig ist'],
      rows: [
        ['Upload bekanntes/Prüfbild', 'Lädt die Kontroll- oder Referenzspur.', 'Die bekannte Seite sollte von einer dokumentierten Prüfspur oder einem Schulungsbeispiel stammen.'],
        ['Upload fragliches Bild', 'Lädt die Spur, deren Quelle unbekannt ist.', 'Diese Seite wird verschoben und angepasst, um nach einer vergleichbaren Ausrichtung zu suchen.'],
        ['Teilungsgriff', 'Ändert, wie viel von jedem Bild sichtbar ist.', 'Ein verschiebbares Gitter hilft zu prüfen, ob Linien visuell über die Grenze hinweg fortgesetzt werden.'],
        ['Horizontaler Versatz', 'Verschiebt das fragliche Bild nach links oder rechts.', 'Kleine seitliche Verschiebungen können entsprechende Rippen in Phase oder aus der Phase bringen.'],
        ['Drehung', 'Dreht das fragliche Bild.', 'Werkzeugwinkel, Kamerawinkel und Montage können zu Winkelabweichungen zwischen den Bildern führen.'],
        ['Zoom', 'Ändert die angezeigte Vergrößerung.', 'Unterschiedliche Bildmaßstäbe müssen vergleichbar gemacht werden, bevor Details beurteilt werden können.'],
        ['Kontrast und Helligkeit', 'Passen die angezeigte Sichtbarkeit an.', 'Kontrastarme Riefen können leichter zu erkennen sein, aber Anpassungen sollten notiert werden.'],
        ['Ansicht exportieren', 'Speichert ein PNG der aktuellen Ausrichtung.', 'Nützlich für die Klassenbewertung, Notizen, Diskussionen oder Berichte, die Einschränkungen klar benennen.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Bildqualität',
      title: 'Eine schlechte Bildqualität kann einen guten Vergleich unmöglich machen',
      html: 'Der Werkzeugspurenvergleich hängt stark von der Bildqualität ab. Unschärfe, Blendung, Kompressionsartefakte, starke Schatten, perspektivische Verzerrungen und sehr kurze Riefenverläufe können irreführende visuelle Eindrücke erzeugen. Wenn eine Spur nicht klar ausgerichtet, skaliert und beleuchtet werden kann, ist die angemessene Schlussfolgerung möglicherweise, dass das Bild für einen aussagekräftigen Vergleich ungeeignet ist.',
    },
    {
      type: 'summary',
      title: 'Praktische Checkliste vor dem Vergleich zweier Spuren',
      items: [
        'Bestätigen Sie, welches Bild die fragliche Spur und welches das bekannte Prüfbild ist.',
        'Überprüfen Sie, ob beide Bilder denselben allgemeinen Spurtyp, dieselbe Werkzeugkontaktfläche und dieselbe Ausrichtung der Arbeitsfläche zeigen.',
        'Vermeiden Sie es, isolierte einzelne Linien zu vergleichen; suchen Sie nach Verläufen benachbarter Details, die über eine nutzbare Länge bestehen bleiben.',
        'Verwenden Sie Kontrast und Helligkeit zurückhaltend und dokumentieren Sie, wann eine Bildverbesserung angewendet wurde.',
        'Exportieren Sie die ausgerichtete Ansicht nur als Veranschaulichung dessen, was angezeigt wurde, nicht als Identitätsnachweis.',
      ],
    },
    {
      type: 'title',
      text: 'Bekannte versus fragliche Werkzeugspuren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine fragliche Werkzeugspur wird in der Regel von einem an einem Vorfall beteiligten Gegenstand gesichert, beispielsweise einer Hebelspur an einer Tür, einer Schnittspur an einem Draht, einem Kratzer auf Metall oder einer Kompressionsspur auf einer weicheren Oberfläche. Eine bekannte Spur wird mit einem verdächtigen Werkzeug unter kontrollierten oder dokumentierten Bedingungen erzeugt. Bei der formellen forensischen Arbeit prüfen Gutachter, ob die Klassenmerkmale übereinstimmen, bevor sie Zeit mit feinen Riefendetails verbringen. Wenn die Klassenmerkmale nicht übereinstimmen, reicht eine mikroskopische Ähnlichkeit in einem kleinen Bereich nicht aus, um eine Zuordnung zu stützen.',
    },
    {
      type: 'paragraph',
      html: 'Der Browser-Arbeitsbereich ist bewusst konservativ gehalten. Er hilft Ihnen, Bilder auszurichten und visuelle Merkmale zu diskutieren, bildet jedoch keine Werkzeugabnutzung, Subklassenmerkmale, Substratverformungen, Herstellungsspuren, Gutachterschwellenwerte, Messunsicherheiten oder Fehlerraten ab. Ein verantwortungsvoller Arbeitsablauf behandelt das exportierte Bild als Kommunikationshilfe, nicht als Identifikationsergebnis.',
    },
    {
      type: 'proscons',
      title: 'Stärken und Grenzen des Werkzeugspurbildvergleichs online',
      items: [
        { pro: 'Schnelle Möglichkeit, zwei Bilder zu laden und die Ausrichtung zu prüfen, ohne Desktop-Software zu installieren.', con: 'Die Browseransicht ist kein kalibriertes forensisches Vergleichsmikroskop.' },
        { pro: 'Nützlich für die Vermittlung der Auswirkungen von geteilter Ansicht und Ausrichtung auf das, was der Benutzer sieht.', con: 'Bildverbesserungen können die Sichtbarkeit verbessern, aber auch das Erscheinungsbild von Merkmalen verändern.' },
        { pro: 'Exportierte PNG-Ansichten sind hilfreich für Notizen, Diskussionen und visuelle Erklärungen.', con: 'Eine exportierte Ansicht bewahrt nicht den vollständigen Beweiskontext, die Metadaten oder die Aufbewahrungskette.' },
        { pro: 'Funktioniert mit echten benutzerhochgeladenen Bildern statt nur synthetischen Spuren.', con: 'Das Tool kann nicht feststellen, ob zwei Spuren vom selben Werkzeug stammen.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fragliche Spur', definition: 'Eine von einem Gegenstand oder Tatort gesicherte Spur, deren Quelle unbekannt ist.' },
        { term: 'Bekannte Prüfspur', definition: 'Eine kontrollierte Spur, die mit einem bestimmten Werkzeug zum Vergleich mit der fraglichen Spur erstellt wurde.' },
        { term: 'Riefe (Striation)', definition: 'Eine mikroskopische Linie oder Rille, die entsteht, wenn eine Werkzeugoberfläche über ein anderes Material gleitet.' },
        { term: 'Klassenmerkmale', definition: 'Merkmale, die von einer Gruppe von Werkzeugen geteilt werden, wie Klingenbreite, allgemeine Form oder Werkzeugtyp.' },
        { term: 'Individuelle Merkmale', definition: 'Feine Oberflächenmerkmale, die durch Herstellung, Gebrauch, Beschädigung oder Abnutzung entstehen können.' },
        { term: 'Subklassenmerkmale', definition: 'Merkmale, die von einer Untergruppe von Werkzeugen aufgrund von Herstellungsprozessen geteilt werden; sie können die Quellinterpretation erschweren.' },
        { term: 'Eignung', definition: 'Eine Beurteilung darüber, ob eine Spur genügend Qualität und Quantität an Details aufweist, um einen Vergleich zu stützen.' },
      ],
    },
    {
      type: 'tip',
      title: 'Gute Suchbegriffe, die diese Seite beantworten soll',
      html: 'Benutzer, die nach dieser Art von Arbeitsbereich suchen, suchen häufig nach Begriffen wie <strong>Werkzeugspuren-Vergleichsmikroskop online</strong>, <strong>forensischer Riefenvergleich</strong>, <strong>bekannte versus fragliche Werkzeugspur</strong>, <strong>Werkzeugspuren anhand von Bildern vergleichen</strong> und <strong>forensischer Vergleichsmikroskop-Simulator</strong>. Die Seite ist um diese realen Aufgaben herum aufgebaut: Hochladen, Ausrichten, Untersuchen, Dokumentieren und Grenzen verstehen.',
    },
    {
      type: 'table',
      headers: ['Häufige Benutzerfrage', 'Kurze Antwort'],
      rows: [
        ['Kann ich meine eigenen Werkzeugspurbilder hochladen?', 'Ja. Das Tool ist für benutzerhochgeladene bekannte und fragliche Bilder konzipiert.'],
        ['Entscheidet die App, ob beide Spuren übereinstimmen?', 'Nein. Sie unterstützt nur die visuelle Ausrichtung und trifft keine forensische Schlussfolgerung zur Quelle.'],
        ['Warum bewegt sich das fragliche Bild statt beider Bilder?', 'Die bekannte Seite stabil zu halten, erleichtert die Dokumentation der Anpassung des fraglichen Bildes.'],
        ['Kann ich es für Schusswaffen- oder Patronenspuren verwenden?', 'Es kann helfen, Konzepte zur Bildausrichtung zu demonstrieren, aber der Vergleich von Schusswaffen und Patronen erfordert disziplinspezifische Verfahren und eine validierte Überprüfung.'],
        ['Kann ich das exportierte PNG in meine Notizen aufnehmen?', 'Ja, wenn es klar als veranschaulichende Ansicht beschrieben wird, die mit visuellen Anpassungssteuerungen erstellt wurde.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische Vorsicht',
      title: 'Verwenden Sie eine vorsichtige Formulierung bei der Beschreibung von Werkzeugspurenvergleichen',
      html: 'Vermeiden Sie es, eine visuelle Ausrichtung als eine stärkere Schlussfolgerung darzustellen, als es die Beweise zulassen. Die angemessene Formulierung hängt von der Gerichtsbarkeit, den Laborrichtlinien, der Validierung, der Bildqualität, der Gutachterprüfung und dem Fallkontext ab. Dieses Online-Tool sollte als visuelle Vergleichshilfe beschrieben werden, nicht als validierte Methode zur Individualisierung eines Werkzeugs.',
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
