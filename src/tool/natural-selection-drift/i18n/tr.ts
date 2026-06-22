import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'dogal-secilim-genetik-suruklenme-simulatoru';
const title = 'Dogal secilim ve genetik suruklenme simulatörü';
const description =
  'Secilim baskisi, mutasyon, suruklenme ve uremenin alel frekanslarini gercek zamanli nasil degistirdigini gorun.';

const faq = [
  { question: 'Dogal secilim ile genetik suruklenme arasindaki fark nedir?', answer: 'Dogal secilim rastgele degildir. Genetik suruklenme alel frekanslarinda rastgele bir degisikliktir.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Populasyon buyuklugu',
    generations: 'Nesiller',
    mutationRate: 'Mutasyon orani',
    selectionPressure: 'Secilim baskisi',
    driftIntensity: 'Suruklenme yogunlugu',
    alleleCount: 'Baslangic allelleri',
    innovationRate: 'Inovasyon orani',
    run: 'Simulasyonu baslat',
    dominantTrait: 'Baskin ozellik',
    fitness: 'Nihai fitness',
    diversity: 'Genetik cesitlilik',
    evolutionConsole: 'Evrim konsolu',
    populationLabel: 'Populasyon',
    aliveLabel: 'canli',
    alleleCountsLabel: 'Alel sayilari',
    alleleDefault: 'Alel 1',
    populationValueLabel: 'Populasyon',
  },
  seo: [
    { type: 'title', text: 'Dogal secilim vs genetik suruklenme: canli populasyonla evrimi anlayin', level: 2 },
    { type: 'paragraph', html: 'Bu simulatör dogal secilim ve genetik suruklenmeyi birlikte gosterir.' },
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
