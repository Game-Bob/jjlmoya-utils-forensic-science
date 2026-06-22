import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'symulator-doboru-naturalnego-dryfu-genetycznego';
const title = 'Symulator doboru naturalnego i dryfu genetycznego';
const description =
  'Zobacz w czasie rzeczywistym, jak presja selekcyjna, mutacje, dryf i rozmnazanie zmieniaja czestosc alleli.';

const faq = [
  { question: 'Jaka jest roznica miedzy doborem naturalnym a dryfem genetycznym?', answer: 'Dobor naturalny nie jest losowy. Dryf genetyczny to losowa zmiana czestotliwosci alleli.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Wielkosc populacji',
    generations: 'Pokolenia',
    mutationRate: 'Tempo mutacji',
    selectionPressure: 'Presja selekcyjna',
    driftIntensity: 'Intensywnosc dryfu',
    alleleCount: 'Poczatkowe allele',
    innovationRate: 'Tempo innowacji',
    run: 'Uruchom symulacje',
    dominantTrait: 'Dominujaca cecha',
    fitness: 'Fitness koncowy',
    diversity: 'Róznorodnosc genetyczna',
    evolutionConsole: 'Konsola ewolucji',
    populationLabel: 'Populacja',
    aliveLabel: 'zywych',
    alleleCountsLabel: 'Liczba alleli',
    alleleDefault: 'Allel 1',
    populationValueLabel: 'Populacja',
  },
  seo: [
    { type: 'title', text: 'Dobor naturalny vs dryf genetyczny: zrozum ewolucje dzieki zywej populacji', level: 2 },
    { type: 'paragraph', html: 'Ten symulator pokazuje selekcje i dryf w sposob praktyczny i czytelny.' },
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
