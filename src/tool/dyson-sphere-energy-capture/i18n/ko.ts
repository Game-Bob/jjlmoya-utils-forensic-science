import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = '다이슨 구 에너지 포획 시뮬레이터';
const description = '다이슨 군집, 고리, 강체 껍질, 스테이타이트 구름 설계를 포획 전력, 궤도 반지름, 재료 질량, 카르다쇼프 척도로 비교합니다.';

const howTo = [
  {
    name: '항성 유형 선택',
    text: 'M형 왜성, 태양형 G형 별, A형 별, 적색 거성, 청색 거성 중 하나를 선택하여 광도와 질량을 설정합니다.',
  },
  {
    name: '구조 유형 선택',
    text: '군집, 고리, 강체 껍질, 스테이타이트 미러 구름의 포획 가정을 비교합니다.',
  },
  {
    name: '커버리지와 온도 조정',
    text: '커버리지와 동작 온도를 변경하여 포획 전력과 안전 궤도 반지름이 어떻게 달라지는지 확인합니다.',
  },
  {
    name: '카르다쇼프 목표 확인',
    text: '카르다쇼프 목표 슬라이더로 선택한 에너지 규모에 필요한 항성 출력 비율을 추정합니다.',
  },
];

const faq = [
  {
    question: '다이슨 군집이란 무엇인가요?',
    answer: '항성 주위를 도는 수많은 독립적인 수집기의 집합체로, 강체 껍질보다 현실적인 구조로 평가받습니다.',
  },
  {
    question: '왜 반지름이 변하나요?',
    answer: '수집기의 동작 온도와 항성의 광도에 따라 반지름이 결정됩니다. 고온의 수집기는 항성에 더 가까이 궤도를 돌 수 있습니다.',
  },
  {
    question: '카르다쇼프 등급이란 무엇인가요?',
    answer: '포획한 와트 수를 대수적인 문명 에너지 척도로 변환한 값입니다.',
  },
  {
    question: '재료 질량이 정확한가요?',
    answer: '아니요. 면적, 단위 면적당 밀도, 안정성 가정을 기반으로 한 교육적 추정치입니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: '다이슨 수집기 시각화',
    starType: '항성 유형',
    structureType: '구조',
    coverage: '수집기 커버리지',
    operatingTemp: '동작 온도',
    kardashevTarget: '카르다쇼프 목표',
    kardashevRating: '현재 등급',
    capturedPower: '포획 전력',
    optimalRadius: '최적 반지름',
    targetCoverage: '목표 커버리지',
    materialMass: '재료 질량',
    captureMeter: '목표 포획 진행도',
    statusReady: '시스템을 조정하여 수집기 수요를 추정하세요.',
    statusUnderbuilt: '커버리지가 선택한 목표 아래에 있습니다.',
    statusBalanced: '커버리지가 선택한 목표에 근접합니다.',
    statusExtreme: '이 구성은 목표를 크게 초과합니다.',
    orbitalPeriod: '궤도 주기',
    collectorArea: '수집기 면적',
    mercuryMasses: '{value} 수성 질량',
    kilograms: '{value} kg',
    daysUnit: '{value} 일',
    starMDwarf: 'M형 왜성',
    starSun: '태양형 G형 별',
    starA: 'A형 별',
    starRedGiant: '적색 거성',
    starBlueGiant: '청색 거성',
    structureSwarm: '다이슨 군집',
    structureRing: '적도 고리',
    structureShell: '강체 껍질',
    structureStatite: '스테이타이트 미러 구름',
  },
  seo: [
    { type: 'title', text: '다이슨 구 에너지 포획 시뮬레이터', level: 2 },
    { type: 'paragraph', html: '이 시뮬레이터는 1차 근사 항성 에너지 계산을 사용하여 다이슨 군집, 고리, 껍질, 스테이타이트 구름 개념을 비교합니다.' },
    { type: 'paragraph', html: '포획 전력, 열 궤도 반지름, 수집기 면적, 궤도 주기, 재료 질량, 카르다쇼프 목표 커버리지를 추정합니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
