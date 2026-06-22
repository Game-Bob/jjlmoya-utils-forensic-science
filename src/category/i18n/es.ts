import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "ciencia-forense",
  title: "Herramientas de ciencia forense",
  description: "Utilidades forenses para triaje estructurado de casos, calculos transparentes e informes conscientes de la evidencia.",
  seo: [
    {
      type: 'title',
      text: "Herramientas de ciencia forense para calculos conscientes de la evidencia y triaje de casos",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Esta categoria de herramientas de ciencia forense responde a una intencion de busqueda practica: interpretar evidencia, documentar supuestos y evitar falsa precision. No sustituye a expertos, laboratorios ni protocolos validados; aclara la revision temprana de un caso: que datos existen, que asume el calculo, que puede apoyar el resultado y que incertidumbre permanece.",
    },
    {
      type: 'paragraph',
      html: "El trabajo forense suele afectar decisiones de alto impacto, por eso cada utilidad debe mostrar sus limites. Una calculadora forense util muestra rangos en lugar de fingir certeza, separa cribado de informe formal y ayuda a detectar evidencia faltante antes de escribir una conclusion.",
    },
    {
      type: 'title',
      text: "Que pertenece a esta categoria de utilidades forenses",
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
      text: "Como usar calculadoras forenses de forma responsable",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Usa estas herramientas como apoyo a decisiones y explicaciones, no como autoridad final para decisiones penales, civiles, medicas, migratorias, de proteccion o identificacion de victimas.",
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
