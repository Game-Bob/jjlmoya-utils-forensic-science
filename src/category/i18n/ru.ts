import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "sudebnaya-nauka",
  title: "Инструменты судебной науки",
  description: "Судебные утилиты для структурированной сортировки дел, прозрачных расчетов и отчетов с учетом доказательств.",
  seo: [
    {
      type: 'title',
      text: "Инструменты судебной науки для расчетов с учетом доказательств и сортировки дел",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Эта категория собирает судебные калькуляторы и структурированные утилиты для интерпретации доказательств, документирования допущений и избегания ложной точности. Она не заменяет экспертов или валидированные протоколы, а делает первичный разбор дела понятнее.",
    },
    {
      type: 'paragraph',
      html: "Судебная работа может влиять на важные решения. Поэтому эти инструменты должны показывать диапазоны, ограничения и недостающие данные до написания вывода.",
    },
    {
      type: 'title',
      text: "Что входит в эту категорию судебных утилит",
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
      text: "Ответственное использование судебных калькуляторов",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Используйте эти инструменты как поддержку решений и объяснений, а не как окончательное основание для юридических, медицинских, миграционных или идентификационных решений.",
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
