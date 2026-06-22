import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "nauka-sadowa",
  title: "Narzedzia nauki sadowej",
  description: "Narzedzia forensyczne do uporzadkowanej triage spraw, przejrzystych obliczen i raportowania swiadomego dowodow.",
  seo: [
    {
      type: 'title',
      text: "Narzedzia nauki sadowej do obliczen swiadomych dowodow i triage spraw",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Ta kategoria gromadzi kalkulatory forensyczne i uporzadkowane narzedzia do interpretacji dowodow, dokumentowania zalozen i unikania falszywej precyzji. Nie zastepuje ekspertow ani zwalidowanych protokolow; wyjasnia wczesna ocene sprawy.",
    },
    {
      type: 'paragraph',
      html: "Praca forensyczna moze wplywac na wazne decyzje. Dlatego te narzedzia powinny pokazywac zakresy, ograniczenia i brakujace dane przed napisaniem wniosku.",
    },
    {
      type: 'title',
      text: "Co nalezy do tej kategorii narzedzi forensycznych",
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
      text: "Odpowiedzialne uzywanie kalkulatorow forensycznych",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Uzywaj tych narzedzi jako pomocy decyzyjnej i wyjasniajacej, nie jako ostatecznego autorytetu dla decyzji prawnych, medycznych, migracyjnych lub identyfikacyjnych.",
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
