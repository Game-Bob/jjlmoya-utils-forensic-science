import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "scienza-forense",
  title: "Strumenti di scienza forense",
  description: "Utilita forensi per triage strutturato dei casi, calcoli trasparenti e report consapevoli delle prove.",
  seo: [
    {
      type: 'title',
      text: "Strumenti di scienza forense per calcoli basati sulle prove e triage dei casi",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Questa categoria raccoglie calcolatori forensi e utilita strutturate per interpretare prove, documentare ipotesi ed evitare falsa precisione. Non sostituisce esperti o protocolli validati; chiarisce la revisione iniziale dei casi.",
    },
    {
      type: 'paragraph',
      html: "Il lavoro forense puo influenzare decisioni importanti. Questi strumenti devono quindi mostrare intervalli, limiti e dati mancanti prima di ogni conclusione.",
    },
    {
      type: 'title',
      text: "Cosa appartiene a questa categoria di utilita forensi",
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
      text: "Usare responsabilmente i calcolatori forensi",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Usa questi strumenti come supporto a decisioni e spiegazioni, non come autorita finale per decisioni legali, mediche, migratorie o di identificazione.",
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
