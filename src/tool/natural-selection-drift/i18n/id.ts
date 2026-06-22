import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulator-seleksi-alam-drift-genetik';
const title = 'Simulator seleksi alam dan drift genetik';
const description =
  'Lihat secara real time bagaimana tekanan seleksi, mutasi, drift, dan reproduksi mengubah frekuensi alel.';

const faq = [
  { question: 'Apa perbedaan seleksi alam dan drift genetik?', answer: 'Seleksi alam tidak acak. Drift genetik adalah perubahan acak pada frekuensi alel.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Ukuran populasi',
    generations: 'Generasi',
    mutationRate: 'Laju mutasi',
    selectionPressure: 'Tekanan seleksi',
    driftIntensity: 'Intensitas drift',
    alleleCount: 'Alel awal',
    innovationRate: 'Laju inovasi',
    run: 'Mulai simulasi',
    dominantTrait: 'Sifat dominan',
    fitness: 'Fitness akhir',
    diversity: 'Keragaman genetik',
    evolutionConsole: 'Konsol evolusi',
    populationLabel: 'Populasi',
    aliveLabel: 'hidup',
    alleleCountsLabel: 'Jumlah alel',
    alleleDefault: 'Alel 1',
    populationValueLabel: 'Populasi',
  },
  seo: [
    { type: 'title', text: 'Seleksi alam vs drift genetik: pahami evolusi dengan populasi hidup', level: 2 },
    { type: 'paragraph', html: 'Simulator ini memberi cara yang jelas dan praktis untuk melihat seleksi dan drift.' },
  ],
  faq,
  bibliography,
  howTo: [],
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] },
  ],
};
