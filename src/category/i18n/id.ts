import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "ilmu-forensik",
  title: "Alat ilmu forensik",
  description: "Utilitas forensik untuk triase kasus terstruktur, perhitungan transparan, dan pelaporan yang sadar bukti.",
  seo: [
    {
      type: 'title',
      text: "Alat ilmu forensik untuk perhitungan sadar bukti dan triase kasus",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Kategori ini dibuat untuk niat pencarian praktis: menafsirkan bukti, mendokumentasikan asumsi, dan menghindari presisi palsu. Kategori ini tidak menggantikan ahli atau protokol tervalidasi; tujuannya membuat tinjauan awal kasus lebih jelas.",
    },
    {
      type: 'paragraph',
      html: "Pekerjaan forensik dapat memengaruhi keputusan penting. Karena itu alat harus menampilkan rentang, batasan, dan data yang hilang sebelum kesimpulan ditulis.",
    },
    {
      type: 'title',
      text: "Apa yang termasuk kategori utilitas forensik ini",
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
      text: "Menggunakan kalkulator forensik secara bertanggung jawab",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Gunakan alat ini sebagai bantuan keputusan dan penjelasan, bukan sebagai otoritas akhir untuk keputusan hukum, medis, migrasi, perlindungan, atau identifikasi.",
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
