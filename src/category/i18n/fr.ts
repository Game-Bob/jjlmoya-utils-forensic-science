import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "science-forensique",
  title: "Outils de science forensique",
  description: "Utilitaires forensiques pour le triage structure des dossiers, les calculs transparents et les rapports attentifs aux preuves.",
  seo: [
    {
      type: 'title',
      text: "Outils de science forensique pour calculs fondes sur les preuves et triage des dossiers",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Cette categorie repond a une intention de recherche pratique: interpreter les preuves, documenter les hypotheses et eviter la fausse precision. Elle ne remplace pas les experts, les laboratoires ou les protocoles valides; elle clarifie l examen initial du dossier.",
    },
    {
      type: 'paragraph',
      html: "Le travail forensique peut influencer des decisions importantes. Chaque outil doit donc afficher des intervalles, des limites et les donnees manquantes avant toute conclusion formelle.",
    },
    {
      type: 'title',
      text: "Ce qui appartient a cette categorie d utilitaires forensiques",
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
      text: "Utiliser les calculateurs forensiques de facon responsable",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Utilisez ces outils comme aides a la decision et a l explication, pas comme autorite finale pour des decisions juridiques, medicales, migratoires, de protection ou d identification.",
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
