import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'natural-selection-drift';
const title = '自然選択と遺伝的浮動のシミュレーター';
const description =
  '選択圧、突然変異、浮動、繁殖が対立遺伝子頻度をどう変えるかをリアルタイムで確認できます。';

const faq = [
  { question: '自然選択と遺伝的浮動の違いは何ですか?', answer: '自然選択は偶然ではありません。遺伝的浮動は対立遺伝子頻度の偶然的な変化です。' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: '個体数',
    generations: '世代',
    mutationRate: '突然変異率',
    selectionPressure: '選択圧',
    driftIntensity: '浮動強度',
    alleleCount: '初期対立遺伝子',
    innovationRate: '新規変異率',
    run: 'シミュレーション開始',
    dominantTrait: '優勢形質',
    fitness: '最終適応度',
    diversity: '遺伝的多様性',
    evolutionConsole: '進化コンソール',
    populationLabel: '個体群',
    aliveLabel: '生存数',
    alleleCountsLabel: '対立遺伝子数',
    alleleDefault: '対立遺伝子1',
    populationValueLabel: '個体群',
  },
  seo: [
    { type: 'title', text: '自然選択と遺伝的浮動を生きた個体群で理解する', level: 2 },
    { type: 'paragraph', html: 'このツールは、進化の仕組みを視覚的に理解するための実践的なシミュレーターです。' },
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
