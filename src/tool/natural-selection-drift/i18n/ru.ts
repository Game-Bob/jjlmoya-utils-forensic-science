import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulyator-estestvennogo-otbora-i-geneticheskogo-dreyfa';
const title = 'Симулятор естественного отбора и генетического дрейфа';
const description =
  'В реальном времени наблюдайте, как давление отбора, мутации, дрейф и размножение меняют частоты аллелей.';

const faq = [
  {
    question: 'В чем разница между естественным отбором и генетическим дрейфом?',
    answer: 'Естественный отбор - это неслучайный процесс, при котором полезные признаки становятся более распространенными. Генетический дрейф - это случайное изменение частот аллелей в популяции, не связанное с приспособленностью.'
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Размер популяции',
    generations: 'Поколения',
    mutationRate: 'Частота мутаций',
    selectionPressure: 'Давление отбора',
    driftIntensity: 'Сила дрейфа',
    alleleCount: 'Начальные аллели',
    innovationRate: 'Частота инноваций',
    run: 'Запустить симуляцию',
    dominantTrait: 'Доминантный признак',
    fitness: 'Итоговая приспособленность',
    diversity: 'Генетическое разнообразие',
    evolutionConsole: 'Эволюционная консоль',
    populationLabel: 'Популяция',
    aliveLabel: 'живых',
    alleleCountsLabel: 'Счетчик аллелей',
    alleleDefault: 'Аллель 1',
    populationValueLabel: 'Популяция',
  },
  seo: [
    { type: 'title', text: 'Естественный отбор vs генетический дрейф: понять эволюцию с живой популяцией', level: 2 },
    { type: 'paragraph', html: 'Эта модель помогает увидеть разницу между отбором и дрейфом через живую визуализацию.' },
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