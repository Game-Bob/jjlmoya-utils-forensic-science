import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensische-wissenschaft",
  title: "Werkzeuge fuer forensische Wissenschaft",
  description: "Forensische Hilfswerkzeuge fuer strukturierte Falltriage, transparente Berechnungen und beweisbewusste Berichte.",
  seo: [
    {
      type: 'title',
      text: "Forensische Wissenschaftswerkzeuge fuer beweisbewusste Berechnungen und Falltriage",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Diese Kategorie sammelt forensische Rechner und strukturierte Hilfen, die Beweise interpretieren, Annahmen dokumentieren und falsche Genauigkeit vermeiden. Sie ersetzt keine Fachleute, Labore oder validierten Protokolle, sondern macht fruehe Fallpruefung klarer: welche Daten vorliegen, welche Annahmen die Berechnung nutzt, was das Ergebnis stuetzen kann und welche Unsicherheit bleibt.",
    },
    {
      type: 'paragraph',
      html: "Forensische Arbeit kann Entscheidungen mit hohen Folgen beeinflussen. Deshalb muss jedes Werkzeug seine Grenzen sichtbar machen: Bereiche statt scheinbarer Sicherheit, Screening statt formeller Begutachtung und Hinweise auf fehlende Daten vor einer Schlussfolgerung.",
    },
    {
      type: 'title',
      text: "Was in diese Kategorie forensischer Hilfswerkzeuge gehoert",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Age assessment tools:</strong> dental, skeletal, and maturity indicators with explicit uncertainty.',
        '<strong>Evidence interpretation tools:</strong> structured calculators that show assumptions, confidence, and limitations.',
        '<strong>Case triage tools:</strong> fast workflows that help decide what data are missing before formal analysis.',
        '<strong>Reporting support:</strong> outputs that encourage clear language, ranges, caveats, and traceable reasoning.',
      ],
    },
    {
      type: 'title',
      text: "Forensische Rechner verantwortungsvoll nutzen",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Nutzen Sie diese Werkzeuge als Entscheidungs- und Erklaerungshilfen, nicht als endgueltige Autoritaet fuer rechtliche, medizinische, migrationsbezogene, schutzbezogene oder Opferidentifikationsentscheidungen.",
    },
    {
      type: 'table',
      headers: ['Good use', 'Poor use', 'Why it matters'],
      rows: [
        ["Screen a case file before specialist review.", "Replace specialist review with a calculator result.", "Forensic conclusions must be defensible and methodologically valid."],
        ["Explain uncertainty to non-specialists.", "Report one exact answer without caveats.", "False precision can mislead legal or safeguarding decisions."],
        ["Compare how assumptions affect a result.", "Hide assumptions from the report.", "Transparent assumptions make the result easier to audit."],
        ["Identify missing evidence.", "Ignore poor data quality.", "Weak inputs can make even a correct formula unreliable."],
      ],
    },
  ],
};
