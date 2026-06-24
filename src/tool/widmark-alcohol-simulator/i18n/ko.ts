import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-blood-alcohol-simulator';
const title = '위드마크 혈중 알코올 농도 시뮬레이터';
const description = '위드마크 공식을 사용하여 인체의 알코올 흡수, 분포, 배설 과정을 시뮬레이션합니다.';

const howTo = [
  {
    name: '사용자 신체 설정',
    text: '체중, 성별, 수분 섭취 수준을 지정하여 위드마크 인자(r)를 산출합니다.',
  },
  {
    name: '위장 음식 상태 설정',
    text: '공복, 가벼운 식사, 또는 든든한 식사를 선택해 흡수율을 제어합니다.',
  },
  {
    name: '음주량 기록',
    text: '음료 용량, 도수, 섭취한 시간대를 입력합니다.',
  },
  {
    name: '시뮬레이션 확인',
    text: '수치 변화와 분해 예측 시간을 실시간 모니터링합니다.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '위드마크 공식이란 무엇인가요?',
    answer: '체내 알코올 농도를 예측하는 수리학적 공식입니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: '사용자 프로필',
    weight: '체중 (kg)',
    sex: '생물학적 성별',
    male: '남성',
    female: '여성',
    hydration: '수분 섭취 상태',
    hydrationLow: '낮음',
    hydrationNormal: '보통',
    hydrationHigh: '높음',
    stomachState: '위장 상태',
    stomachEmpty: '공복 (빠름)',
    stomachLight: '가벼운 식사 (보통)',
    stomachFull: '과식/포식 (느림)',
    drinksTimeline: '음주 타임라인',
    addDrink: '음료 추가',
    drinkVolume: '용량 (ml)',
    drinkAbv: '알코올 도수 (% vol)',
    drinkTime: '시간 (시간)',
    drinksList: '마신 음료 목록',
    remove: '삭제',
    beer: '맥주 (330ml, 5%)',
    wine: '와인 (150ml, 12%)',
    spirits: '양주 (40ml, 40%)',
    peakBac: '최고 BAC',
    timeToSober: '술 깨는 시간',
    sober: '술 깸',
    currentBac: '현재 BAC',
    drivingLimitAlert: '운전 가능 상태',
    safeLimit: '기준치 미만',
    warningLimit: '주의 수치 초과',
    dangerLimit: '운전 금지 수치 초과',
    graphTitle: '12시간 혈중 알코올 농도 변화',
    timeAxisLabel: '시간 (시간)',
    bacAxisLabel: '농도 (g/L)',
    legalLimitText: '표준 단속 기준치',
    noDrinksText: '음주 정보를 추가해 시뮬레이션을 진행하세요.',
    hours: '시간',
    soberStatus: '{time} 시간 후 깨어남',
    neverSober: '12시간 초과',
    noteDisclaimer: '교육용 시뮬레이터입니다. 음주 후 절대 운전하지 마세요.',
    noteWidmark: '위드마크 방정식과 영차 소실 모델에 기초합니다.',
  },
  seo: [
    {
      type: 'title',
      text: '법독물학 및 에탄올의 약물동태학',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '에탄올의 흡수, 분포, 배설은 법의학의 가장 핵심적인 개념입니다. 알코올의 대부분은 소장에서 흡수됩니다. 위 내의 음식물은 위배출을 지연시켜 최고 혈중 알코올 농도를 낮춥니다.',
    },
    {
      type: 'paragraph',
      html: '이 시뮬레이션은 다음 공식을 사용합니다: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. 간 대사는 영차 속도론을 따르며 매 시간당 약 0.15 g/L의 속도로 직선 소실됩니다.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
