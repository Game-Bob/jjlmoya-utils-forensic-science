const slug = 'lorenz-attractor';
const title = '로렌츠 아틀랙터 카오스 시뮬레이터: 3D 나비 효과';
const description = '인터랙티브 3D 로렌츠 아틀랙터 시뮬레이션으로 카오스 이론을 탐구하고 나비 효과를 시각화하세요.';

const howTo = [
  {
    "name": "화면 회전",
    "text": "3D 뷰포트를 클릭하고 드래그하여 아틀랙터를 다양한 각도에서 관찰하세요."
  },
  {
    "name": "슬라이더 조정",
    "text": "시그마, 로, 베타 매개변수를 수정하여 카오스로 진입하는 상태를 관찰하세요."
  },
  {
    "name": "발산 관찰",
    "text": "두 궤적 사이의 거리가 지수함수적으로 증가하는 과정을 확인하세요."
  },
  {
    "name": "일시정지 및 리셋",
    "text": "컨트롤을 사용해 시뮬레이션을 일시정지하거나 기본값으로 초기화하세요."
  }
];

const faq = [
  {
    "question": "로렌츠 아틀랙터란 무엇인가요?",
    "answer": "로렌츠 아틀랙터는 로렌츠 방정식계에서 나타나는 카오스적 해의 집합입니다."
  },
  {
    "question": "나비 효과란 무엇인가요?",
    "answer": "비선형 시스템에서 초기 조건의 미세한 변화가 시간이 지나며 거대한 차이를 만들어내는 현상입니다."
  },
  {
    "question": "매개변수들은 무엇을 나타내나요?",
    "answer": "시그마는 프란틀 수, 로는 레일리 수, 베타는 기하학적 종횡비를 의미합니다."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "복사됨",
  "noHistory": "기록 없음",
  "load": "불러오기",
  "delete": "삭제",
  "title": "로렌츠 아틀랙터",
  "subTitle": "결정론적 카오스",
  "parameterControls": "시스템 매개변수",
  "simulationSpeed": "속도 (dt)",
  "initialPerturbation": "초기 미세 차이 (dx)",
  "trajectories": "궤적",
  "distance": "발산 거리",
  "exponentialGrowth": "지수 발산",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "좌표",
  "divergenceExplanation": "발산 그래프는 두 궤적 간의 유클리드 거리 변화를 실시간으로 나타냅니다."
},
  seo: [
    { type: 'title', text: "결정론적 혼돈: 로렌츠 방정식 이해하기", level: 2 },
    { type: 'paragraph', html: "로렌츠 시스템은 비선형 동역학 및 혼돈 이론의 역사적 기초입니다. 1963년 기상학자이자 수학자 <strong>에드워드 로렌츠</strong>에 의해 처음 유도된 이 모델은 대기 대류의 단순화된 표현에서 탄생했습니다. 로렌츠는 복잡한 유체 역학 방정식을 세 개의 연립 상미분 방정식으로 단순화했습니다. 이 단순하고 결정론적인 방정식들이 복잡하고 비주기적이며 혼돈적인 거동을 만들어낼 수 있다는 발견은 물리 시스템에 대한 우리의 이해를 바꾸었습니다." },
    { type: 'paragraph', html: "이 시스템은 3차원 위상 공간의 좌표를 시간에 따라 추적하는 세 개의 연립 미분 방정식으로 정의됩니다:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> 대류 운동의 속도를 나타냅니다. 매개변수 &sigma; (프란틀 수)는 유체 점성 대 열전도율의 비율을 의미합니다.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> 상승 및 하강 대류 전류 간의 온도 차이를 나타냅니다. &rho; (레일리 수)는 대류 가열 강도를 의미합니다.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> 수직 온도 프로파일의 왜곡을 추적합니다. &beta;는 대류 셀의 기하학적 종횡비입니다.",
      ],
    },
    { type: 'title', text: "나비 효과: 초기 조건에 대한 민감한 의존성", level: 3 },
    { type: 'paragraph', html: "혼돈 시스템의 정의적 특성은 <strong>초기 조건에 대한 민감한 의존성</strong>이며, 이는 <strong>나비 효과</strong>로 널리 알려져 있습니다. 이 시뮬레이터는 미세한 초기 분리를 가진 두 궤적(T1: 시안, T2: 분홍)을 실행하여 이를 보여줍니다. 처음에는 거의 동일한 경로를 따르지만, 잠시 후 비선형 항이 차이를 증폭시켜 경로가 완전히 분기됩니다." },
    {
      type: 'table',
      headers: ["매개변수","표준값","물리적 의미","변경 시 거동"],
      rows: [
        ["&sigma; (시그마)","10.0","프란틀 수","유체의 내부 마찰을 결정합니다. 값이 클수록 온도 구배에 대한 속도 변화의 반응이 빨라집니다."],
        ["&rho; (로)","28.0","레일리 수","&rho; = 1 미만에서는 원점이 유일한 안정점입니다. &rho; = 28에서 시스템은 완전히 혼돈 상태입니다."],
        ["&beta; (베타)","8/3 (2.667)","기하학적 종횡비","대류 셀의 폭 대 높이 비율을 제어합니다. 궤도의 규모와 회전 속도를 조절합니다."],
      ],
    },
    { type: 'title', text: "위상 공간, 이상한 끌개, 프랙탈", level: 3 },
    { type: 'paragraph', html: "고전 물리학에서 궤적은 결국 고정점에 정착하거나 한계 사이클로 반복됩니다. 로렌츠 시스템은 그 어느 것도 하지 않습니다: 경로는 3차원에서 자신과 교차하지 않고 무한히 반복되어 하우스도르프 차원 약 2.06의 프랙탈 기하학을 가진 <strong>이상한 끌개</strong>를 형성합니다." },
    { type: 'title', text: "과학에서의 혼돈 이론 응용", level: 3 },
    { type: 'paragraph', html: "로렌츠 끌개의 교훈은 날씨 예측을 훨씬 넘어서며 많은 현대 연구 분야에 영향을 미쳤습니다:" },
    {
      type: 'list',
      items: [
      "<strong>기상학:</strong> 날씨 예측 가능성의 근본적인 한계를 확립하여 앙상블 예측 방법을 이끌었습니다.",
      "<strong>암호학:</strong> 혼돈 궤도의 결정론적이지만 예측 불가능한 특성은 안전한 의사 난수 키 생성 및 민감한 데이터 암호화에 사용됩니다.",
      "<strong>심장학:</strong> 심장 리듬을 모델링하는 데 사용됩니다. 건강한 심장은 혼돈적 특성을 보이는 반면, 주기적 리듬은 병리를 나타낼 수 있습니다.",
      "<strong>공학:</strong> 현수교 및 기계 시스템의 혼돈 공명을 분석하고 방지하여 안정적인 구조 설계를 지원합니다.",
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
      description: description,
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
