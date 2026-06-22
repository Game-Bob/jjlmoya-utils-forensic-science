import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "ciencia-forense",
  title: "Ferramentas de ciencia forense",
  description: "Utilitarios forenses para triagem estruturada de casos, calculos transparentes e relatorios conscientes das evidencias.",
  seo: [
    {
      type: 'title',
      text: "Ferramentas de ciencia forense para calculos conscientes das evidencias e triagem de casos",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Esta categoria reune calculadoras forenses e utilitarios estruturados para interpretar evidencias, documentar pressupostos e evitar falsa precisao. Ela nao substitui especialistas ou protocolos validados; torna a revisao inicial do caso mais clara.",
    },
    {
      type: 'paragraph',
      html: "O trabalho forense pode influenciar decisoes importantes. Por isso, estas ferramentas devem mostrar intervalos, limites e dados ausentes antes de qualquer conclusao.",
    },
    {
      type: 'title',
      text: "O que pertence a esta categoria de utilitarios forenses",
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
      text: "Usar calculadoras forenses com responsabilidade",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Use estas ferramentas como apoio a decisao e explicacao, nao como autoridade final para decisoes legais, medicas, migratorias ou de identificacao.",
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
