import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'natural-selection-drift';
const title = '자연 선택과 유전적 표류 시뮬레이터';
const description =
  '선택 압력, 돌연변이, 표류, 번식이 대립유전자 빈도를 어떻게 바꾸는지 실시간으로 볼 수 있습니다.';

const faq = [
  { question: '자연 선택과 유전적 표류의 차이는 무엇인가요?', answer: '자연 선택은 무작위가 아닙니다. 유전적 표류는 대립유전자 빈도의 우연한 변화입니다.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: '개체 수',
    generations: '세대',
    mutationRate: '돌연변이율',
    selectionPressure: '선택 압력',
    driftIntensity: '표류 강도',
    alleleCount: '초기 대립유전자',
    innovationRate: '혁신률',
    run: '시뮬레이션 시작',
    dominantTrait: '우성 형질',
    fitness: '최종 적합도',
    diversity: '유전적 다양성',
    evolutionConsole: '진화 콘솔',
    populationLabel: '집단',
    aliveLabel: '생존',
    alleleCountsLabel: '대립유전자 수',
    alleleDefault: '대립유전자 1',
    populationValueLabel: '집단',
  },
  seo: [
    { type: 'title', text: '자연 선택과 유전적 표류를 살아 있는 집단으로 이해하기', level: 2 },
    { type: 'paragraph', html: '이 도구는 진화의 핵심 개념을 시각적으로 빠르게 이해하도록 돕습니다.' },
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
