import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensische-wetenschap",
  title: "Forensische hulpmiddelen",
  description: "Forensische hulpmiddelen voor gestructureerde zaaktriage, transparante berekeningen en bewijsbewuste rapportage.",
  seo: [
    {
      type: 'title',
      text: "Forensische hulpmiddelen voor bewijsbewuste berekeningen en zaaktriage",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Deze categorie verzamelt forensische calculators en gestructureerde hulpmiddelen om bewijs te interpreteren, aannames te documenteren en schijnnauwkeurigheid te vermijden. Ze vervangt geen experts of gevalideerde protocollen; ze maakt vroege zaakbeoordeling duidelijker.",
    },
    {
      type: 'paragraph',
      html: "Forensisch werk kan belangrijke beslissingen beinvloeden. Daarom tonen deze tools bereiken, beperkingen en ontbrekende gegevens voordat een conclusie wordt geschreven.",
    },
    {
      type: 'title',
      text: "Wat hoort in deze categorie forensische hulpmiddelen",
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
      text: "Forensische calculators verantwoord gebruiken",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Gebruik deze tools als beslis- en uitlegondersteuning, niet als eindautoriteit voor juridische, medische, migratie- of identificatiebeslissingen.",
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
