import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'stellar-habitability-zone';
const description = '항성 및 행성 구성을 사용하여 다양한 유형의 별 주변 생명체 거주가능 영역(골디락스 존)을 계산하고 시각화합니다.';
const title = '항성 생명체 거주가능 영역 시뮬레이터: 골디락스 존 찾기';

const howTo = [
  {
    name: '항성 프리셋 선택',
    text: '청색 거성에서 적색 왜성까지 항성 유형을 선택하여 질량, 광도, 온도와 같은 표준 물리적 특성을 불러옵니다.',
  },
  {
    name: '행성 매개변수 조정',
    text: '대화형 슬라이더를 사용하여 행성의 궤도 거리(긴반지름), 알베도, 대기 온실 효과를 수정합니다.',
  },
  {
    name: '궤도 및 거주가능성 분석',
    text: '행성이 항성 주위를 실시간으로 공전하는 모습을 관찰합니다. 평형 온도와 표면 온도가 액체 상태의 물을 유지할 수 있는지 확인합니다.',
  },
];

const faq = [
  {
    question: '생명체 거주가능 영역이란 무엇인가요?',
    answer: '생명체 거주가능 영역(종종 골디락스 존이라고 불림)은 주어진 대기압에서 행성 표면 온도가 액체 상태의 물을 유지하기에 충분한 별 주변 영역입니다. 이는 항성 광도와 유효 온도를 기반으로 보수적 및 낙관적 경계로 정의됩니다.',
  },
  {
    question: '항성 광도는 거주가능 영역에 어떻게 영향을 미치나요?',
    answer: '항성 광도는 별의 총 에너지 출력을 결정합니다. 더 뜨겁고 무거운 별(O, B, A형 별)은 매우 밝아 거주가능 영역을 훨씬 더 멀리 배치합니다. 더 차갑고 가벼운 별(K형 또는 M형 적색 왜성)은 광도가 낮아 거주가능 영역을 별에 매우 가깝게 이동시킵니다.',
  },
  {
    question: '평형 온도와 표면 온도의 차이는 무엇인가요?',
    answer: '평형 온도는 행성이 항성 복사를 흡수하고 우주로 재방출하는 흑체처럼 행동한다고 가정할 때의 이론적 온도입니다. 표면 온도는 행성 대기의 온실 효과를 포함하며, 이는 열을 가두어 행성을 더 따뜻하게 만듭니다.',
  },
  {
    question: '알베도가 행성 거주가능성에 중요한 이유는?',
    answer: '알베도는 행성 표면의 반사율을 측정한 것입니다. 알베도가 높을수록(1.0에 가까울수록) 행성이 더 많은 입사 항성광을 반사하여 냉각됩니다. 알베도가 낮을수록 더 많은 복사가 흡수되어 전체 온도가 상승합니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '항성 생명체 거주가능 영역 시뮬레이터',
    starPresetsLabel: '스펙트럼 프리셋',
    customStarHeader: '항성 매개변수',
    starTemperature: '유효 온도 (K)',
    starLuminosity: '광도 (L/L⊙)',
    starMass: '질량 (M/M⊙)',
    starRadius: '반경 (R/R⊙)',
    planetHeader: '행성 매개변수',
    planetDistance: '궤도 거리 (AU)',
    planetAlbedo: '본드 알베도',
    greenhouseDelta: '온실 효과 온난화 (K)',
    resultsHeader: '시뮬레이션 결과',
    stellarFluxResult: '받은 항성 플럭스',
    eqTempResult: '평형 온도',
    surfTempResult: '추정 표면 온도',
    orbitPeriodResult: '공전 주기',
    orbitVelocityResult: '궤도 속도',
    hzLimitsHeader: '거주가능 영역 경계',
    innerLimit: '보수적 내부 한계',
    outerLimit: '보수적 외부 한계',
    optInnerLimit: '낙관적 내부 한계',
    optOuterLimit: '낙관적 외부 한계',
    orbitCanvasTitle: '대화형 궤도 시각화 도구',
    statusLabel: '거주가능성 상태',
    statusTooHot: '너무 뜨거움 (물 증발)',
    statusHabitable: '거주가능 (액체 물 가능)',
    statusTooCold: '너무 추움 (물 얼음)',
    statusExplanation: '보수적 경계에 기반하여 이 행성은 지정된 거주가능 영역 상태 내에 있습니다.',
    unitsLabel: '단위 체계',
    unitsScientific: '과학 단위',
    unitsImperial: '야드파운드법',
  },
  seo: [
    {
      type: 'title',
      text: '우주생물학: 항성 거주가능 영역의 물리학',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '지구 너머 생명체를 찾는 것은 액체 상태의 물에 필요한 물리적 조건을 이해하는 것에서 시작됩니다. 우주생물학자들은 수학적 모델을 사용하여 다양한 항성 유형 주변의 거주가능 영역 경계를 매핑합니다. 이 시뮬레이터는 Kopparapu et al.(2013) 모델을 사용하여 행성이 받는 에너지 플럭스를 추정하고 골디락스 존에 있는지 판단합니다. 거주가능 영역은 CO2-H2O-N2 대기를 가진 지구 질량 행성이 표면에 액체 상태의 물을 유지할 수 있는 영역으로 정의됩니다.',
    },
    {
      type: 'title',
      text: '수학 공식과 대기 물리학',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '거주가능 영역의 경계는 폭주 온실 또는 최대 온실 조건을 유발하는 데 필요한 유효 항성 플럭스(Seff)를 계산하여 결정됩니다. Seff 방정식은 항성의 유효 온도(Teff)에 따라 달라집니다:<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>여기서 T* = Teff - 5780 K이며, 계수(a, b, c, d)는 1D 복사-대류 기후 모델에서 경험적으로 도출됩니다. Seff가 계산되면 천문 단위(AU)의 궤도 거리 d는 다음과 같이 주어집니다:<br><br>d = sqrt(L / Seff)<br><br>여기서 L은 태양에 대한 항성의 광도입니다. 행성의 평형 온도(Teq)는 열평형 상태의 구형 흑체를 가정하여 계산됩니다:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>여기서 R*은 항성 반경, A는 행성 본드 알베도, S는 지구 태양 상수 단위로 받은 항성 플럭스입니다.',
    },
    {
      type: 'title',
      text: '스펙트럼 분류와 거주가능 경계',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '항성 특성은 스펙트럼 유형에 따라 크게 다양합니다. 다음은 일반적인 특성과 HZ 경계의 요약입니다:',
    },
    {
      type: 'table',
      headers: [
        '스펙트럼 클래스',
        '온도 (K)',
        '광도 (L/L⊙)',
        'HZ 내부 한계 (AU)',
        'HZ 외부 한계 (AU)',
      ],
      rows: [
        ['O형 거성', '40,000', '100,000', '300.0', '530.0'],
        ['B형 거성', '20,000', '1,000', '30.1', '53.2'],
        ['A형 (시리우스)', '8,500', '20.0', '4.2', '7.4'],
        ['F형 (프로키온)', '6,500', '2.5', '1.5', '2.6'],
        ['G형 (태양)', '5,778', '1.0', '0.95', '1.67'],
        ['K형 왜성', '4,500', '0.15', '0.37', '0.65'],
        ['M형 왜성', '3,200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: '스펙트럼 클래스가 거주가능성에 미치는 영향',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '각 스펙트럼 클래스는 행성에 고유한 복사 및 중력 환경을 만듭니다:<br><br><strong>O형 및 B형 별:</strong> 이 거대한 청색 별은 강렬한 자외선(UV) 복사를 방출하며 수명이 매우 짧습니다(수천만 년). 외부 세계에는 액체 상태의 물이 존재할 수 있지만, 별이 초신성 폭발을 일으키기 전에 생명체가 진화하기에는 시간이 불충분합니다.<br><br><strong>A형 및 F형 별:</strong> 이 별들은 태양보다 밝고 뜨겁습니다. 거주가능 영역은 넓고 멀리 있어 조석 고정의 영향을 최소화합니다. 그러나 높은 수준의 근자외선 복사는 보호 오존층 없이 유기 분자에 심각한 손상을 줄 수 있습니다.<br><br><strong>G형 별(태양 유사):</strong> 수십억 년 동안 안정적인 광속을 제공하며 생명체 탐색의 주요 대상입니다. 이들의 복사 출력은 표준 생화학 요구 사항과 일치합니다.<br><br><strong>K형 별(주황색 왜성):</strong> 많은 우주생물학자들이 "초거주가능"한 항성으로 간주합니다. 주황색 왜성은 수백억 년을 살며 G형 별보다 유해한 UV 복사가 적고, 젊은 M형 왜성과 관련된 심한 플레어가 적습니다.<br><br><strong>M형 별(적색 왜성):</strong> 은하에서 가장 흔한 별입니다. 거주가능 영역이 매우 가깝기 때문에(일반적으로 < 0.2 AU) 행성은 조석 고정되기 쉬우며, 한쪽 면이 영구적으로 별을 향합니다. 또한 활동적인 M형 왜성은 고에너지 항성풍과 플레어를 생성하여 행성 대기를 벗겨낼 수 있습니다.',
    },
    {
      type: 'title',
      text: '행성 거주가능 환경의 중요 요인',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '행성의 물리적 환경은 모항성으로부터의 거리뿐만 아니라 여러 변수에 의해 결정됩니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>대기 온실 효과:</strong> 자연 온실가스는 표면 온도를 흑체 평형 수준 이상으로 높입니다. 지구형 행성은 탄소-규산염 순환을 통해 대기 CO2를 안정화하고 지질학적 시간 규모에 걸쳐 온도를 조절해야 합니다.',
        '<strong>행성 본드 알베도:</strong> 높은 반사율(구름, 빙하, 황산염 에어로졸로 인한)은 행성을 냉각시키는 반면, 낮은 반사율(어두운 토양, 수역)은 더 많은 항성 에너지를 가둡니다.',
        '<strong>자기장:</strong> 강력한 행성 자기권은 항성풍으로부터 대기를 보호하여 비열적 대기 탈출과 물 손실을 방지합니다.',
        '<strong>물 트랩 역학:</strong> 상층 대기의 냉각 트랙 효과는 수증기가 높은 고도에 도달하여 자외선 복사가 수소와 산소로 해리되는 것을 방지합니다.',
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
        text: step.text,
      })),
    },
  ],
};
