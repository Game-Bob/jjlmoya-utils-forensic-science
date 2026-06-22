import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "adli-bilim",
  title: "Adli bilim araclari",
  description: "Yapilandirilmis vaka triyaji, seffaf hesaplamalar ve kanita duyarli raporlama icin adli yardimci araclar.",
  seo: [
    {
      type: 'title',
      text: "Kanita duyarli hesaplamalar ve vaka triyaji icin adli bilim araclari",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Bu kategori kanitlari yorumlamak, varsayimlari belgelemek ve sahte kesinlikten kacinmak icin adli hesaplayicilar ve yapilandirilmis araclar toplar. Uzmanlarin veya dogrulanmis protokollerin yerini almaz; erken vaka incelemesini netlestirir.",
    },
    {
      type: 'paragraph',
      html: "Adli calisma onemli kararlari etkileyebilir. Bu nedenle araclar sonuc yazilmadan once araliklari, sinirlari ve eksik verileri gostermelidir.",
    },
    {
      type: 'title',
      text: "Bu kategoriye neler girer",
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
      text: "Adli hesaplayicilari sorumlu kullanma",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Bu araclari karar ve aciklama destegi olarak kullanin; hukuki, tibbi, goc veya kimliklendirme kararlarinda nihai otorite olarak kullanmayin.",
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
