import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensische-wissenschaft",
  title: "Werkzeuge fuer forensische Wissenschaft",
  description: "Forensische Hilfswerkzeuge fuer strukturierte Falltriage, transparente Berechnungen und beweisbewusste Berichte.",
  seo: [
    {
      type: 'title',
      text: "Forensische Wissenschaftswerkzeuge zur Beweisanalyse und Falltriage",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Diese Bibliothek bietet spezialisierte Werkzeuge und Berechnungen für forensische Analysten, Juristen, Forscher und Ermittler. Forensische Wissenschaftsprogramme helfen bei der Bewertung physischer Beweismittel, die an Tatorten gesammelt wurden. Durch die Verwendung strukturierter Modelle für die Flugbahn von Blutspuren, die Altersbestimmung, den Glasbrechungsindex und die Drogenanalyse können Teams eine erste Falltriage durchführen. Jedes Tool konzentriert sich auf Transparenz, zeigt Annahmen auf und hilft den Benutzern, die Grenzen jeder forensischen Formel klar zu verstehen.",
    },
    {
      type: 'paragraph',
      html: "Eine frühzeitige Fallprüfung erfordert die Bewertung der verfügbaren Beweismittel, der Annahmen der wissenschaftlichen Formeln und der verbleibenden Unsicherheiten. Diese Rechner wurden entwickelt, um Ausbildung und vorläufiges Screening zu unterstützen. Sie helfen festzustellen, welche analytischen Schritte erforderlich sind, bevor formelle Labortests durchgeführt werden. Die Verwendung dieser Tools hilft dabei, Lücken in den Beweisakten frühzeitig im Ermittlungsprozess zu identifizieren.",
    },
    {
      type: 'title',
      text: "Schlüsselbereiche forensischer Berechnungen",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Altersbestimmung:</strong> Skelett-, Zahn- und Reifeberechnungen mit expliziten Unsicherheitsmetriken.',
        '<strong>Beweisinterpretation:</strong> strukturierte Schätzer, die Formeln, Konfidenzintervalle und Grenzwerte anzeigen.',
        '<strong>Falltriage:</strong> schnelle Tools, die fehlende Beweise hervorheben und für die formelle Untersuchung erforderliche Parameter identifizieren.',
        '<strong>Berichtsunterstützung:</strong> Dienstprogramme, die eine klare Berichterstattung unter Verwendung von Bereichen anstelle von Scheingenauigkeit fördern.',
      ],
    },
    {
      type: 'title',
      text: "Richtlinien für die verantwortungsvolle Nutzung forensischer Software",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Jede forensische Berechnung beinhaltet Fehlerraten und Konfidenzgrenzen. Ein Rechner sollte niemals einen qualifizierten Sachverständigen oder ein validiertes Laborprotokoll ersetzen. Stattdessen werden diese Web-Tools am besten verwendet, um Szenarien zu untersuchen, Laien Konzepte zu erklären und die Empfindlichkeit von Messungen zu überprüfen, bevor endgültige Berichte verfasst werden. Dies hilft, Missverständnisse im Gerichtssaal hinsichtlich wissenschaftlicher Präzision zu vermeiden.",
    },
    {
      type: 'table',
      headers: ['Angemessene Nutzung', 'Unangemessene Nutzung', 'Bedeutung'],
      rows: [
        ["Sichtung von Fallakten vor der formellen fachärztlichen Untersuchung.", "Verwendung eines Rechnerergebnisses als endgültiges Gutachten.", "Forensische Beweise müssen strengen Standards der wissenschaftlichen Validierung entsprechen."],
        ["Erläuterung von Messunsicherheiten und Bereichen gegenüber Ermittlern.", "Berichterstattung einer einzelnen genauen Zahl ohne Erklärung der Einschränkungen.", "Scheingenauigkeit kann zu fehlerhaften Entscheidungen in Justizsystemen führen."],
        ["Überprüfung, wie sich Eingangsannahmen auf das geschätzte Ergebnis auswirken.", "Verbergen von Anfangsparametern oder Berechnungen in der Fallakte.", "Transparenz ermöglicht es, Ergebnisse zu prüfen und von anderen zu reproduziere."],
        ["Feststellung, ob die Datenqualität für die Berechnung ausreicht.", "Ausführen von Formeln mit schlechten oder unvollständigen Maßstabsmessungen.", "Schwache Eingangsparameter machen jede mathematische Rekonstruktion unzuverlässig."],
      ],
    },
  ],
};
