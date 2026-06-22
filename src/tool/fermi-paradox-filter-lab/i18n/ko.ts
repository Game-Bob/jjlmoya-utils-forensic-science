const description = '드레이크 방정식 입력값, 진화 필터, 신호 수명, 그리고 탐지 가능한 은하수 문명의 시간적 투영을 통해 페르미 역설을 모델링합니다.';
const slug = 'fermi-paradox-filter-lab';
const title = '페르미 역설 필터 연구실';

const howTo = [
  {
    name: '드레이크 파이프라인 추정하기',
    text: '항성 형성, 거주 가능 행성, 생명체, 지능, 기술 슬라이더를 움직여 은하수가 탐지 가능한 문명을 얼마나 자주 만들어내는지 정의하세요.',
  },
  {
    name: '필터 강도 설정하기',
    text: '붕괴, 자멸, 생태 불안정 또는 기술적 병목 현상이 문명을 더 빠르게 제거하도록 하려면 진화 필터를 높이세요.',
  },
  {
    name: '수명과 지평선 비교하기',
    text: '신호 수명과 투영 지평선을 함께 사용하세요. 수명이 짧으면 문명이 규칙적으로 탄생하더라도 은하가 조용해 보일 수 있습니다.',
  },
  {
    name: '시간 곡선 읽기',
    text: '차트는 시간에 따른 탐지 가능한 문명을 보여주며, 공존과 멸종을 시각화하여 페르미 역설을 하나의 숫자로 축소하지 않습니다.',
  },
];

const faq = [
  {
    question: '이 페르미 역설 시뮬레이터는 무엇을 계산하나요?',
    answer: '드레이크 방정식 항목을 생존 필터 및 시간 지평선과 결합하여 은하수에서 동시에 탐지 가능한 기술 문명의 수를 추정합니다.',
  },
  {
    question: '실제 외계 문명을 예측하는 건가요?',
    answer: '아닙니다. 탐색적 모델입니다. 가정이 어떻게 상호작용하는지 보는 데 가치가 있습니다. 한 은하가 역사 전체에 걸쳐 많은 문명을 생산하면서도 우리와 겹치는 문명은 매우 적을 수 있습니다.',
  },
  {
    question: '대여과기(Great Filter)란 무엇인가요?',
    answer: '대여과기는 단순한 화학에서 오래 지속되는 기술 문명에 이르는 하나 이상의 단계가 극도로 어렵거나 위험하다는 개념입니다.',
  },
  {
    question: '신호 수명이 왜 그렇게 중요한가요?',
    answer: '탐지 가능성은 중첩에 달려 있습니다. 불과 몇 세기 동안만 신호를 방출하는 문명은 실제로 존재하더라도 다른 시대에 관측하는 다른 문명에게는 보이지 않을 수 있습니다.',
  },
  {
    question: '생명체 및 지능 비율은 어떻게 선택해야 하나요?',
    answer: '비관적인 희귀 생명 시나리오에서는 낮은 값을 사용하고, 안정적인 거주 가능 세계에서 생물학이나 지능이 자주 출현할 가능성을 탐구할 때는 높은 값을 사용하세요.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: '시간에 따른 예상 탐지 가능 문명',
    metricsLabel: '페르미 모델 지표',
    controlsLabel: '페르미 모델 제어',
    birthRate: '탄생률',
    peakCivilizations: '최대 문명 수',
    finalCivilizations: '최종 문명 수',
    silenceScore: '침묵 점수',
    starFormationRate: '항성 형성률',
    habitableFraction: '거주 가능 행성 비율',
    lifeFraction: '생명체 출현 비율',
    intelligenceFraction: '지능 발달 비율',
    technologyFraction: '기술 발달 비율',
    signalLifetime: '신호 수명',
    filterSeverity: '필터 강도',
    horizonYears: '투영 지평선',
    maxLabel: '최대',
    yearUnit: '년',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: '드레이크 방정식 가정을 위한 실용적인 페르미 역설 시뮬레이터',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '페르미 역설은 은하수에 수천억 개의 별과 수많은 행성이 있는데 왜 밤하늘이 조용해 보이는지 묻습니다. 이 도구는 그 질문을 드레이크 방정식과 진화 필터, 탐지 가능한 문명의 시간적 투영을 결합한 대화형 모델로 바꿔줍니다.',
    },
    {
      type: 'paragraph',
      html: '단일한 정적 추정값을 제공하는 대신, 이 시뮬레이터는 문명이 어떻게 탄생하고, 탐지 가능해지며, 다른 사회가 그들을 들을 기회를 갖기도 전에 사라질 수 있는지 보여줍니다. 두 기술 문화가 공간, 시간, 신호 행동에서 중첩되어야 하기 때문에 이 타이밍 문제는 SETI의 핵심입니다.',
    },
    {
      type: 'title',
      text: '모델이 드레이크 방정식 매개변수를 사용하는 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '첫 번째 제어 항목들은 단순화된 드레이크 파이프라인을 나타냅니다. 항성 형성은 새로운 항성계를 공급합니다. 그중 일부는 거주 가능한 행성을 형성하고, 일부 거주 가능 행성은 생명체를 발달시키며, 일부 생명체가 있는 세계는 지능을 생산하고, 일부 지능 종은 기술을 통해 탐지 가능해집니다.',
    },
    {
      type: 'table',
      headers: ['변수', '의미', '영향'],
      rows: [
        ['항성 형성률', '은하수에서 연간 새로운 별의 수', '가능한 항성계의 원천 공급량을 높이거나 낮춥니다'],
        ['거주 가능 행성 비율', '액체 상태의 물 화학이 유지될 수 있는 안정적인 세계를 가진 항성계의 비율', '은하계의 얼마나 많은 부분이 생물학적 파이프라인에 진입하는지를 제어합니다'],
        ['생명체 출현 비율', '거주 가능한 세계에서 단순한 생명체가 시작될 확률', '희귀 생명 대 흔한 생명 가정을 테스트합니다'],
        ['지능 발달 비율', '생명체가 기술을 사용할 수 있는 인지 능력으로 진화할 확률', '생물학적 및 생태적 병목 현상을 나타냅니다'],
        ['기술 발달 비율', '지능이 탐지 가능한 신호를 생성할 확률', '문화, 공학, 의사소통 선택을 포착합니다'],
      ],
    },
    {
      type: 'title',
      text: '필터가 어떻게 북적이는 은하를 텅 빈 것처럼 보이게 하는가',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '필터 강도 슬라이더는 소행성 충돌, 불안정한 기후, 자멸, 자원 붕괴, 인공지능 위험 또는 탐지 가능한 단계를 단축시키는 모든 병목 현상 등 여러 가능한 실패 지점을 하나의 생존 압력으로 압축합니다. 강한 필터가 문명이 결코 발생하지 않는다는 것을 의미하지는 않습니다. 오래도록 보이지 않는 상태로 남아 있다는 뜻입니다.',
    },
    {
      type: 'paragraph',
      html: '그 구분은 중요합니다. 은하수는 깊은 시간에 걸쳐 수천 개의 기술 종을 생산했을 수 있지만, 우리의 좁은 관측 기간 동안 활동하는 이웃은 거의 남기지 않았을 수 있습니다. 차트는 선택한 투영 지평선을 통해 탐지 가능한 문명을 표시함으로써 이 차이를 시각적으로 보여줍니다.',
    },
    {
      type: 'title',
      text: '침묵 점수 해석하기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '침묵 점수는 중첩되는 탐지 가능한 문명의 최종 수가 낮을 때 올라갑니다. 침묵 점수가 높다고 해서 인류가 고독하다는 것을 증명하는 것은 아닙니다. 선택한 가정 하에서 비탐지가 놀랍지 않다는 것을 보여줍니다. 침묵 점수가 낮다는 것은 모델이 더 시끄러운 은하를 예상하므로 증거의 부재가 더 흥미로워집니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>높은 탄생률 + 낮은 필터:</strong> SETI 침묵을 설명하기 어려운 혼잡한 은하.',
        '<strong>높은 탄생률 + 높은 필터:</strong> 많은 문명이 나타나지만 중첩될 만큼 오래 살아남는 문명은 거의 없음.',
        '<strong>낮은 생물학적 비율:</strong> 생명체나 지능이 드물어 기술이 중요해지기 전에 침묵이 나타날 수 있음.',
        '<strong>짧은 신호 수명:</strong> 문명은 존재하지만 접촉이 일어나기에는 신호가 너무 짧음.',
      ],
    },
    {
      type: 'title',
      text: '교육, 토론 및 SETI 직관을 위한 활용 사례',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '페르미 역설 필터 연구실은 천문학 수업, 우주 생물학 토론, 과학 커뮤니케이션, 인류의 미래에 관한 철학적 논쟁에 유용합니다. 자주 혼합되는 세 가지 질문, 즉 문명이 얼마나 자주 태어나는지, 얼마나 오래 탐지 가능한 상태로 남아 있는지, 그 타임라인이 우리와 중첩되는지 여부를 분리하는 데 도움을 줍니다.',
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
