import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'phase-diagram-critical-points-visualizer';
const title = '상 다이어그램 및 임계점 시각화 도구';
const description = '삼중점과 임계점 마커가 있는 대화형 압력-온도 상 다이어그램에서 고체, 액체, 기체 및 초임계 영역을 탐색하세요.';

const howTo = [
  {
    name: '물질 선택하기',
    text: '물, 이산화탄소, 질소를 전환하여 실제 삼중점과 임계점이 상 다이어그램을 어떻게 바꾸는지 확인하세요.',
  },
  {
    name: '온도와 압력 조절하기',
    text: '슬라이더를 사용하여 샘플을 압력-온도 평면에 배치하세요. 다이어그램이 활성 상 영역과 실시간 샘플 마커를 업데이트합니다.',
  },
  {
    name: '임계 후광 관찰하기',
    text: '증기-액체 경계의 끝으로 이동하면 잠열이 사라지고 액체와 기체의 구분이 초임계 유체로 붕괴되는 것을 지켜보세요.',
  },
  {
    name: '교육 패널 읽기',
    text: '상 레이블, 잠열 측정기, 포인트 판독값을 사용하여 시각적 다이어그램과 열역학 용어를 연결하세요.',
  },
];

const faq = [
  {
    question: '상 다이어그램이란 무엇인가요?',
    answer: '상 다이어그램은 온도와 압력의 다양한 조합에서 물질의 어떤 상태가 안정적인지를 보여주는 지도입니다. 경계선은 두 상이 평형 상태에서 공존할 수 있는 조건을 표시합니다.',
  },
  {
    question: '임계점에서 어떤 일이 발생하나요?',
    answer: '임계점에서 증기-액체 경계가 끝납니다. 임계 온도와 압력 이상에서는 물질이 초임계 유체가 되어 액체와 기체 사이에 뚜렷한 구분이 없어집니다.',
  },
  {
    question: '왜 물의 융해선은 다른가요?',
    answer: '물은 녹는점 근처에서 얼음이 액체 물보다 밀도가 낮기 때문에 특이합니다. 압력을 높이면 밀도가 높은 액체상이 유리해져서 고체-액체 경계의 기울기가 다른 많은 물질과 달라집니다.',
  },
  {
    question: '그려진 곡선은 실험적으로 정확한가요?',
    answer: '아닙니다. 이 도구는 발표된 삼중점과 임계점 값에 기반한 단순화된 곡선을 사용합니다. 개념 학습을 위해 설계되었으며, 프로세스 공학이나 안전 계산을 위한 것이 아닙니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: '상 다이어그램 컨트롤',
    substance: '물질',
    units: '단위',
    scientificUnits: '과학 단위 (K, MPa)',
    metricUnits: '미터법 (섭씨, kPa)',
    imperialUnits: '야드파운드법 (화씨, psi)',
    temperature: '온도',
    pressure: '압력',
    diagram: '압력-온도 상 다이어그램',
    sample: '샘플 상태',
    phase: '안정 상',
    triplePoint: '삼중점',
    criticalPoint: '임계점',
    vaporCurve: '증기-액체 경계',
    meltingLine: '고체-액체 경계',
    latentHeat: '잠열 대비',
    criticalProximity: '임계 근접도',
    coordinates: '좌표',
    solid: '고체',
    liquid: '액체',
    gas: '기체',
    supercritical: '초임계',
    low: '낮음',
    high: '높음',
    reset: '초기화',
    interpretation: '해석',
    note: '경계선은 공존을 표시하고, 영역은 선택된 조건에서 가장 안정적인 상을 나타냅니다.',
  },
  seo: [
    {
      type: 'title',
      text: '삼중점, 끓는점 곡선 및 임계점을 위한 대화형 상 다이어그램 시각화 도구',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 상 다이어그램 시각화 도구는 추상적인 압력-온도 차트를 대화형 지도로 바꿉니다. 물질을 선택하고 온도와 압력을 움직여 샘플이 고체, 액체, 기체 또는 초임계 유체로 행동할지 예측해보세요. 목표는 상 경계를 공간적으로 느끼게 하는 것입니다. 선을 넘으면 안정 상태가 바뀌고, 임계점에 가까워지면 상 경계의 의미 자체가 변합니다.',
    },
    {
      type: 'paragraph',
      html: '이 도구는 학생, 교사, 과학 작가 및 상 다이어그램에 대한 명확한 설명을 찾는 모든 사람을 위해 만들어졌습니다. 초급 열역학에서 가장 중요한 특징, 즉 세 가지 상이 공존하는 삼중점, 증기-액체 곡선, 고체-액체 경계, 그리고 액체-기체 구분이 사라지는 임계 종점을 강조합니다.',
    },
    {
      type: 'title',
      text: '압력-온도 다이어그램 읽는 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '상 다이어그램은 한 축에 온도를, 다른 축에 압력을 배치합니다. 각 영역은 해당 조건에서 안정적인 상을 보여줍니다. 영역 사이의 선은 공존 곡선입니다. 이 선을 따라 두 상이 완전히 대체되는 것이 아니라 평형을 유지할 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['다이어그램 특징', '의미', '도구에서 관찰할 점'],
      rows: [
        ['삼중점', '고체, 액체, 기체 공존', '경계가 만나는 저온 접합부.'],
        ['증기-액체 곡선', '끓음 또는 응축 평형', '삼중점에서 임계점까지의 곡선.'],
        ['고체-액체 경계', '녹음 또는 얼음 평형', '고체와 액체 영역을 분리하는 가파른 선.'],
        ['임계점', '증기-액체 경계의 끝', '잠열이 사라지는 강조 표시된 끝점.'],
        ['초임계 영역', '액체-기체 구분 없음', '임계점 너머의 고온 고압 영역.'],
      ],
    },
    {
      type: 'title',
      text: '임계점이 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '임계점 아래에서 끓음은 상 전이입니다. 액체와 증기가 공존할 수 있고, 온도가 경계 조건에 묶여 있는 동안 에너지가 잠열로 흡수될 수 있습니다. 임계점에서 그 경계가 종료됩니다. 그 이상에서는 밀도가 연속적으로 변화하고 물질은 일반적인 액체나 기체가 아닌 초임계 유체로 설명됩니다.',
    },
    {
      type: 'paragraph',
      html: '이것은 화학, 행성 과학, 산업 추출, 냉동 및 고압 물리학에서 중요합니다. 예를 들어 이산화탄소는 물에 비해 비교적 접근하기 쉬운 조건에서 초임계가 되므로 초임계 CO2는 추출 및 재료 가공에 사용됩니다. 물은 훨씬 더 높은 온도와 압력이 필요하므로 그 임계점은 전력 시스템과 지구물리학에 중요합니다.',
    },
    {
      type: 'title',
      text: '이 시각화 도구가 단순화한 것',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '실제 상 다이어그램에는 다형체, 준안정 상태, 비이상 혼합물, 여러 고체상 및 실험적으로 적합된 상태 방정식이 포함될 수 있습니다. 이 교육 도구는 의도적으로 모델을 간결하게 유지합니다. 각 물질을 인식 가능한 기준 값에 고정하고 부드러운 교육 곡선을 그려 열역학 표가 없어도 주요 아이디어를 쉽게 확인할 수 있습니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>직관을 위해 사용하세요:</strong> 압력솥, 드라이아이스, 끓음 및 초임계 유체가 왜 다르게 행동하는지 설명하는 데 도움이 됩니다.',
        '<strong>공학 한계에는 사용하지 마세요:</strong> 단순화된 곡선은 인증된 물성 데이터를 대체할 수 없습니다.',
        '<strong>위상에 집중하세요:</strong> 가장 중요한 학습 결과는 상 영역이 어떻게 연결되고 경계가 어디서 끝나는지 이해하는 것입니다.',
      ],
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
      applicationCategory: 'ScientificApplication',
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
