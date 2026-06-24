import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-blood-alcohol-simulator';
const title = '위드마크 혈중 알코올 농도 시뮬레이터';
const description = '위드마크 공식을 사용하여 인체의 알코올 흡수, 분포, 배설 과정을 시뮬레이션합니다.';

const howTo = [
  {
    name: '신체 파라미터 설정',
    text: '체중, 생물학적 성별, 수분 섭취 상태를 입력합니다. 이 생물학적 특성은 체내 에탄올의 분포 용적을 나타내는 위드마크 인자(r)를 산출하는 데 활용됩니다.',
  },
  {
    name: '위장의 음식 상태 설정',
    text: '공복, 가벼운 식사, 또는 든든한 식사를 선택합니다. 이 설정은 흡수 속도 상수(ka)를 조정하여 음식물이 알코올 농도 곡선에 미치는 완화 및 지연 효과를 보여줍니다.',
  },
  {
    name: '타임라인에 음주 정보 추가',
    text: '음료의 용량(ml), 알코올 도수(ABV) 및 시뮬레이션 시작 기준 마신 시간을 지정하여 개별 음주 기록을 추가합니다.',
  },
  {
    name: '혈중 알코올 농도 곡선 분석',
    text: '12시간 동안의 혈중 알코올 농도(BAC) 변화 그래프를 확인합니다. 최고치, 최고점 도달 시간, 그리고 완전히 깨는 데 걸리는 시간을 비교해 봅니다.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '위드마크 공식이란 무엇이며 법의학에서 어떻게 사용되나요?',
    answer: '위드마크 공식은 1932년 에릭 M. P. 위드마크가 개발한 수학적 모델입니다. 섭취한 순수 알코올 질량, 체중, 성별 분포 인자(r) 및 선형 제거 속도를 바탕으로 혈중 알코올 농도를 추정합니다. 법독물학자들은 사고 당시의 BAC를 추정하기 위해 이 공식을 사용한 역추적 계산을 수행합니다.',
  },
  {
    key: 'faq-2',
    question: '위장의 음식물은 혈중 알코올 농도 곡선 모양에 어떤 영향을 미치나요?',
    answer: '위장 속 음식물은 위 배출 속도를 늦추어 알코올이 대부분 흡수되는 소장으로 넘어가는 과정을 지연시킵니다. 시뮬레이션에서는 이를 흡수 속도 상수(ka)의 감소로 모델링하며, 결과적으로 최고 농도 도달 시간을 지연시키고 최고 수치를 크게 낮춥니다.',
  },
  {
    key: 'faq-3',
    question: '알코올 분해가 1차 속도론이 아닌 영차 속도론을 따르는 이유는 무엇인가요?',
    answer: '대부분의 약물은 농도에 비례해 분해되는 1차 속도론을 따릅니다. 반면 알코올 분해는 알코올 탈수소효소(ADH)가 매우 낮은 농도(약 0.02 g/L)에서 이미 완전히 포화되기 때문에 영차 속도론을 따릅니다. 따라서 간은 혈중 농도와 무관하게 매시간 일정한 최대 속도로 알코올을 분해합니다.',
  },
  {
    key: 'faq-4',
    question: '위드마크 r 인자의 개인별 편차를 만드는 생물학적 요인은 무엇인가요?',
    answer: '위드마크 r 인자는 총 체수분량 대비 체중의 비율입니다. 에탄올은 극도로 친수성이고 친지성이 낮으므로 오직 체수분에만 분포합니다. 근육 조직은 수분 함량(약 75%)이 높은 반면 지방 조직은 거의 없습니다. 따라서 체지방률이 높거나 탈수 상태인 사람은 분포 용적이 작아져 동일 용량 섭취 시 BAC가 더 높게 나타납니다.',
  },
  {
    key: 'faq-5',
    question: '이 시뮬레이터 수치를 운전이 가능한 법적 증거로 제출할 수 있나요?',
    answer: '절대 불가합니다. 본 시뮬레이터는 순수 교육용 도구입니다. 실제 상황에서는 개인의 효소 활성도, 간 건강 상태, 약물 복용, 피로도 및 위장 음식 상태 등이 큰 변수를 유발합니다. 수학적 시뮬레이션 결과에만 의존하여 운전 여부를 결정해서는 안 됩니다.',
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
      html: '에탄올의 <strong>흡수, 분포, 배설</strong>에 관한 생리학적 과정을 이해하는 것은 법의학 및 교통사고 분석의 기초 요건입니다. 섭취된 알코올은 식도를 거쳐 위장으로 이동하며, 여기서 매우 일부만 혈류로 직접 흡수됩니다. 대다수의 에탄올 흡수는 거대한 표면적을 가진 십이지장과 소장 상부에서 급격하게 발생합니다. 위장에서 소장으로 넘어가는 배출 속도가 전체 알코올 흡수의 주된 한계 단계이므로, 위장 내 음식물의 유무가 혈중 농도 상승 곡선을 조절하는 데 핵심적인 역할을 합니다.',
    },
    {
      type: 'paragraph',
      html: '이 인터랙티브 시뮬레이터는 에릭 M. P. 위드마크의 고전 방정식을 채택하고 12시간 연속 모델을 통해 농도 변화를 예측합니다. 개인 신체 파라미터를 조절하고 마신 음료를 추가해 알코올의 수학적 누적과 간 분해 대사의 선형 감소를 한눈에 모니터링할 수 있습니다.',
    },
    {
      type: 'title',
      text: '위드마크 방정식의 수학적 유도',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '기본 위드마크 방정식은 체내 수분 전체에 알코올이 즉각 분산된다고 가정한 이론적 최대 혈중 농도를 계산합니다: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. 여기서 <em>A</em>는 섭취한 순수 에탄올의 질량(g), <em>W</em>는 피실험자의 체중(kg), <em>r</em>은 위드마크 분포 계수입니다. <em>&beta;</em>는 시간당 농도 소실 속도를 나타내며, <em>t</em>는 흡수 시작 시점부터 경과한 시간입니다.',
    },
    {
      type: 'paragraph',
      html: '음료의 용량(ml)을 순수 알코올 질량(g)으로 환산하려면, 부피에 알코올 도수(ABV)와 에탄올의 밀도(약 0.8 g/ml)를 곱합니다. 가령 5% ABV의 330 ml 맥주는 13.2 g의 순수 에탄올을 함유하고 있습니다. 이 질량은 신체의 총 수분량에 희석됩니다. 시뮬레이터는 성별(남성 0.68, 여성 0.55) 및 탈수 수준에 따라 r 계수를 동적으로 조절합니다.',
    },
    {
      type: 'title',
      text: '물리적 요인이 분포 용적과 위 배출 속도에 미치는 영향',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '에탄올의 분포 용적은 체성분에 의해 직접적으로 결정됩니다. 알코올은 극도로 수용성이며 지용성이 낮습니다. 근육 조직은 약 75%의 수분을 포함하는 반면 지방 조직은 거의 함유하지 않습니다. 따라서 동일한 체중이라도 근육질의 개인이 더 큰 희석 인자 r을 가지므로 peak BAC가 체지방률이 높은 사람에 비해 현저히 낮습니다. 또한 탈수 상태는 총 수분량을 줄여 농도 최고점을 상승시킵니다.',
    },
    {
      type: 'table',
      headers: ['생리학적 변수', '생화학적 메커니즘', '약물동태학적 영향', '법의학적 의의'],
      rows: [
        ['체중', '체내 총 수분 풀의 용량을 결정한다.', 'BAC 최고 농도 수치와 반비례한다.', '소급 계산에서 희석 기준 용적을 제공한다.'],
        ['생물학적 성별', '근육과 지방의 전형적인 비율 차이를 결정한다.', '여성의 r 계수(0.55)는 남성(0.68)보다 낮아 peak BAC가 높다.', '동일 섭취량 대비 여성의 신체적 취약성을 설명한다.'],
        ['수분 상태', '조직 내 자유 수분 용량을 변화시킨다.', '탈수는 r을 0.05 가량 감소시켜 곡선을 상승시킨다.', '고온 노동이나 운동 후 알코올 잔류량 계산을 보정한다.'],
        ['위장 상태', '음식물이 위장의 배출 속도를 늦춘다.', '흡수 상수 ka를 낮추어 농도 곡선 최고점을 완만하게 만든다.', '식후 음주시 알코올 농도가 상대적으로 낮게 측정되는 현상을 설명한다.'],
      ],
    },
    {
      type: 'title',
      text: '대사 제거 속도론: 일정한 속도의 영차 간 제거율',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '체내 분산된 알코올은 주로 간의 ADH 효소에 의해 아세트알데히드로 분해됩니다. 이 효소는 극히 낮은 BAC(0.02 g/L) 수준에서 이미 완벽히 포화되므로, 단위 시간당 일정 질량의 알코올만 제거하는 영차 속도론을 나타냅니다. 법의학적으로 널리 쓰이는 평균 제거율(&beta;<sub>60</sub>)은 시간당 0.15 g/L이며, 이는 소실 과정에서 그래프 상의 일직선 하강 곡선을 생성합니다.',
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
