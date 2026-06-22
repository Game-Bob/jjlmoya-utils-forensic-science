import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'natural-selection-drift';
const title = '自然选择和遗传漂变模拟器';
const description =
  '实时观察选择压力、突变、漂变和繁殖如何改变等位基因频率。';

const faq = [
  { question: '自然选择和遗传漂变有什么区别?', answer: '自然选择不是随机的。遗传漂变是等位基因频率的随机变化。' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: '种群规模',
    generations: '世代',
    mutationRate: '突变率',
    selectionPressure: '选择压力',
    driftIntensity: '漂变强度',
    alleleCount: '初始等位基因',
    innovationRate: '创新率',
    run: '开始模拟',
    dominantTrait: '优势性状',
    fitness: '最终适应度',
    diversity: '遗传多样性',
    evolutionConsole: '进化控制台',
    populationLabel: '种群',
    aliveLabel: '存活',
    alleleCountsLabel: '等位基因数量',
    alleleDefault: '等位基因 1',
    populationValueLabel: '种群',
  },
  seo: [
    { type: 'title', text: '用动态种群理解自然选择和遗传漂变', level: 2 },
    { type: 'paragraph', html: '这个模拟器帮助你把进化概念和实时变化联系起来。' },
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
