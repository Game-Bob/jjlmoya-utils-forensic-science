import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'three-body-problem-simulator';
const title = '삼체 문제 시뮬레이터';
const description = '편집 가능한 질량, 속도 벡터, 궤적 및 안정적 또는 혼란스러운 프리셋을 갖춘 2차원 평면에서 세 개의 중력체를 시뮬레이션합니다.';

const howTo = [
  {
    name: '궤도 프리셋 선택',
    text: '안정적인 기준점으로 8자 궤도, 회전 평형을 위한 라그랑주 삼각형, 또는 시각적으로 혼란스러운 조우를 위한 슬링샷 프리셋으로 시작하세요.',
  },
  {
    name: '질량과 속도 벡터 조정',
    text: '각 물체의 슬라이더를 사용하여 질량과 초기 속도 성분을 변경하세요. 작은 변화도 패턴을 유지하거나, 변형시키거나, 완전히 파괴할 수 있습니다.',
  },
  {
    name: '진단값 읽기',
    text: '총 에너지, 최근접 및 최원격 거리, 질량 중심을 주시하여 수치 궤도가 유계인지 아니면 분리되고 있는지 파악하세요.',
  },
];

const faq = [
  {
    question: '삼체 문제란 무엇인가요?',
    answer: '삼체 문제는 세 개의 질량체가 서로 중력으로 끌어당길 때 어떻게 움직이는지에 대한 문제입니다. 이체 문제와 달리 모든 가능한 구성을 해결하는 일반적인 폐쇄형 방정식이 없으므로 대부분의 실제 사례는 수치 적분으로 탐구됩니다.',
  },
  {
    question: '삼체 궤도가 불안정한 이유는 무엇인가요?',
    answer: '많은 삼체계는 초기 조건에 민감합니다. 속도, 위치, 질량의 미세한 변화가 근접 조우의 타이밍을 바꾸고, 이러한 조우는 에너지를 극적으로 교환할 수 있습니다. 그 결과 한동안 유계를 유지하다가 갑자기 하나의 물체를 방출하는 시스템이 발생합니다.',
  },
  {
    question: '8자 프리셋은 무엇을 보여주나요?',
    answer: '8자 프리셋은 세 개의 동일한 질량에 대한 유명한 주기 해입니다. 각 물체는 위상 오프셋을 가지고 동일한 경로를 따라가며, 삼체 문제가 훨씬 더 큰 혼란스러운 풍경 속에서도 우아하고 안정적인 섬을 포함할 수 있음을 보여줍니다.',
  },
  {
    question: '이것은 물리적으로 정확한 천문학 시뮬레이터인가요?',
    answer: '이 도구는 학습을 위해 운동이 충실하고 안정적으로 느껴지도록 소프트화된 뉴턴 모델과 심플렉틱 속도 베를레법을 사용합니다. 고정밀 천체력 예측보다는 대화형 탐험을 위해 설계되었습니다.',
  },
  {
    question: '총 에너지는 어떻게 해석해야 하나요?',
    answer: '음의 총 에너지는 일반적으로 결합된 시스템을 나타내며, 0에 가까운 에너지는 탈출을 더 쉽게 만듭니다. 수치 시뮬레이션에서 큰 에너지 드리프트는 시간 간격이나 조우 기하학이 적분기에 부하를 주고 있음을 경고합니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: '중력 혼돈 연구실',
    canvasLabel: '대화형 2차원 삼체 궤도 캔버스',
    presetsLabel: '궤도 프리셋',
    figureEightPreset: '8자',
    lagrangePreset: '라그랑주 삼각형',
    slingshotPreset: '슬링샷',
    pauseButton: '일시정지',
    playButton: '재생',
    resetButton: '초기화',
    speedLabel: '시뮬레이션 속도',
    trailLabel: '궤적 길이',
    massLabel: '질량',
    velocityXLabel: '속도 X',
    velocityYLabel: '속도 Y',
    energyLabel: '총 에너지',
    separationLabel: '분리 범위',
    centerMassLabel: '질량 중심',
  },
  seo: [
    {
      type: 'title',
      text: '궤도 혼돈을 위한 대화형 삼체 문제 시뮬레이터',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '삼체 문제는 단순한 법칙이 복잡한 운동을 만들어낼 수 있다는 가장 명확한 증명 중 하나입니다. 뉴턴 중력은 간결한 힘의 규칙을 제공하지만, 세 번째 질량체가 시스템에 합류하는 순간 각 궤도는 다른 두 궤도를 지속적으로 변형시킵니다. 이 시뮬레이터를 통해 그 불안정성을 직접 실험할 수 있습니다. 알려진 구성을 선택하고, 질량과 속도 벡터를 조정하며, 물체들이 반복 궤도, 회전하는 삼각형, 또는 혼란스러운 산란 이벤트를 형성하는지 관찰하세요.',
    },
    {
      type: 'title',
      text: '프리셋이 보여주는 것',
      level: 3,
    },
    {
      type: 'table',
      headers: ['프리셋', '물리적 아이디어', '관찰할 점'],
      rows: [
        ['<strong>8자</strong>', '세 물체가 모두 동일한 루프를 공유하는 등질량 주기 해.', '대칭성과 속도 균형이 신중하게 유지될 때만 궤도가 조직된 상태를 유지합니다.'],
        ['<strong>라그랑주 삼각형</strong>', '세 물체가 질량 중심 주위로 회전하는 정삼각형을 차지합니다.', '질량 균형과 접선 속도가 삼각형이 안쪽으로 붕괴하는 것을 방지합니다.'],
        ['<strong>슬링샷</strong>', '근접 조우가 물체 간 에너지를 전달합니다.', '한 물체는 속도를 얻는 반면 다른 물체는 더 강하게 결합되어 혼란스러운 방출이 왜 발생하는지 보여줍니다.'],
      ],
    },
    {
      type: 'title',
      text: '작은 변화가 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이체 궤도에서는 질량 중심과 궤도 타원이 안정적인 기하학적 이미지를 제공합니다. 삼체계에서는 근접 통과가 중력 협상처럼 작용합니다. 물체가 궤도 에너지를 빌리거나, 방향을 급격히 바꾸거나, 질서 있는 루프를 산란 이벤트로 전환할 수 있습니다. 이러한 민감성은 삼중성, 행성-달 조우, 초기 태양계 미행성체와 같은 실제 천체 물리학 시스템이 단일한 간단한 공식보다 수치 적분을 필요로 하는 이유입니다.',
    },
    {
      type: 'title',
      text: '진단값 사용 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>총 에너지</strong>는 시스템이 결합되어 있는지와 수치 적분이 안정적으로 유지되는지 판단하는 데 도움이 됩니다.',
        '<strong>분리 범위</strong>는 가장 가깝고 가장 먼 쌍 거리를 보여주어, 충돌 직전 상황과 방출을 쉽게 식별할 수 있게 합니다.',
        '<strong>질량 중심</strong>은 초기 운동량이 균형을 이룰 때 상대적으로 안정적으로 유지되어야 합니다. 드리프트는 의도적으로 비대칭적인 설정이나 변경된 속도 벡터를 암시합니다.',
        '<strong>궤적 길이</strong>는 장기적인 구조를 드러냅니다. 짧은 궤적은 현재 상호작용을 강조하고, 긴 궤적은 반복 루프와 느린 궤도 세차 운동을 노출합니다.',
      ],
    },
    {
      type: 'title',
      text: '도구에 사용된 수치 모델',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '시뮬레이터는 극도로 가까운 통과 중 시각적 폭발을 방지하는 작은 소프트닝 항이 포함된 뉴턴 역제곱 인력을 사용합니다. 운동은 속도 베를레법으로 진행되며, 이는 단순한 오일러 업데이트보다 에너지 거동을 더 잘 처리하기 때문에 궤도 데모에서 일반적인 선택입니다. 그 결과 전문적인 천체 역학 소프트웨어를 대체하지 않으면서 삼체 문제의 정성적 거동을 시각화하는 반응형 교육 모델이 탄생했습니다.',
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
