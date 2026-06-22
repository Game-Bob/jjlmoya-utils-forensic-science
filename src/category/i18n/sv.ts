import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "rattsmedicinsk-vetenskap",
  title: "Verktyg for forensisk vetenskap",
  description: "Forensiska verktyg for strukturerad arendetriage, transparenta berakningar och evidensmedveten rapportering.",
  seo: [
    {
      type: 'title',
      text: "Forensiska vetenskapsverktyg for evidensmedvetna berakningar och arendetriage",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Denna kategori samlar forensiska raknare och strukturerade verktyg for att tolka bevis, dokumentera antaganden och undvika falsk precision. Den ersatter inte experter eller validerade protokoll; den gor tidig arendegranskning tydligare.",
    },
    {
      type: 'paragraph',
      html: "Forensiskt arbete kan paverka viktiga beslut. Darfor ska verktygen visa intervall, begransningar och saknade data innan en slutsats skrivs.",
    },
    {
      type: 'title',
      text: "Vad som hor till denna kategori forensiska verktyg",
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
      text: "Anvand forensiska raknare ansvarsfullt",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Anvand verktygen som stod for beslut och forklaring, inte som slutlig auktoritet for juridiska, medicinska, migrations- eller identifieringsbeslut.",
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
