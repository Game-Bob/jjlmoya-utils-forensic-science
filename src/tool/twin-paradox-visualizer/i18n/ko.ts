import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'twin-paradox-visualizer';
const title = '쌍둥이 역설 시각화 도구: 특수 상대성 이론 시간 팽창';
const description = '특수 상대성 이론이 어떻게 빠르게 여행하는 쌍둥이가 지구에 남은 쌍둥이보다 젊게 돌아오게 하는지 시각화합니다.';

const howTo = [
  {
    name: '우주선 속도 설정하기',
    text: '속도 슬라이더를 사용하여 광속의 일부를 선택하고 로런츠 인자가 증가하는 것을 관찰하세요.',
  },
  {
    name: '지구계 미션 길이 선택하기',
    text: '왕복 여행 동안 지구에 남아 있는 쌍둥이에게 경과하는 연수를 조정하세요.',
  },
  {
    name: '시계와 세계선 비교하기',
    text: '나이 차이, 우주선 경과 시간, 지구계 거리, 그리고 여행하는 쌍둥이가 관성계를 변경하는 휘어진 세계선을 확인하세요.',
  },
];

const faq = [
  {
    question: '특수 상대성 이론에서 쌍둥이 역설이란 무엇인가요?',
    answer: '쌍둥이 역설은 한 쌍둥이가 상대론적 속도로 우주를 여행한 후 지구로 돌아왔을 때 집에 남은 쌍둥이보다 더 젊다는 사고 실험입니다. 처음에는 각 쌍둥이가 상대방이 움직이고 있다고 설명할 수 있지만, 여행하는 쌍둥이는 방향을 전환할 때 관성계를 변경하기 때문에 시공간을 통과하는 두 경로가 대칭이 아니므로 역설적으로 느껴집니다.',
  },
  {
    question: '왜 여행하는 쌍둥이가 더 적게 나이를 먹나요?',
    answer: '특수 상대성 이론에서 경과된 고유 시간은 시공간을 통과하는 경로에 따라 달라집니다. 관성 관찰자에 대해 속도 v로 움직이는 시계는 로런츠 인자 감마만큼 더 느리게 똑딱입니다. 여행자는 지구에 남아 있는 쌍둥이보다 왕복 구간에서 더 적은 고유 시간을 축적합니다.',
  },
  {
    question: '가속도가 나이 차이의 원인인가요?',
    answer: '가속도는 여행자가 방향을 반전시키고 지구와 재회할 수 있게 하기 때문에 중요하지만, 나이 차이는 가속도만이 아니라 전체 시공간 경로에서 계산됩니다. 방향 전환이 매우 짧더라도 여행 경로는 여전히 지구 경로보다 더 적은 고유 시간을 포함합니다.',
  },
  {
    question: '로런츠 인자 감마는 무엇을 의미하나요?',
    answer: '로런츠 인자 감마는 1을 1에서 v 제곱을 c 제곱으로 나눈 값을 뺀 것의 제곱근으로 나눈 것과 같습니다. 이는 관성계 간에 시간 간격, 길이 및 에너지가 얼마나 강하게 다른지를 알려줍니다. 일상적인 속도에서는 감마가 거의 1이지만, 광속에 가까워지면 급격히 상승합니다.',
  },
  {
    question: '이 효과를 실제로 측정할 수 있나요?',
    answer: '네. 시간 팽창은 빠른 입자, 항공기에 탑재된 원자 시계, 위성 위치 확인 시스템 및 입자 가속기로 측정되었습니다. 쌍둥이 역설은 극단적인 여행 이야기를 사용하지만, 기본이 되는 시계 효과는 현대 물리학에서 일상적으로 검증된 부분입니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: '쌍둥이 역설 시공간 시각화',
    controlsTitle: '쌍둥이 역설 제어',
    worldlineLabel: '지구 쌍둥이와 여행하는 쌍둥이의 세계선 다이어그램',
    earthTwin: '지구 쌍둥이 나이',
    travelingTwin: '여행자 나이',
    presetCruise: '순항',
    presetRelativistic: '상대론적',
    presetExtreme: '극한',
    velocityLabel: '우주선 속도',
    earthYearsLabel: '지구 경과 시간',
    ageGapLabel: '재회 시 나이 차이',
    gammaLabel: '로런츠 인자',
    shipTimeLabel: '여행자 고유 시간',
    distanceLabel: '방향 전환 거리',
    yearsUnit: '년',
    yearsShortUnit: '년',
  },
  seo: [
    {
      type: 'title',
      text: '특수 상대성 이론을 위한 쌍둥이 역설 계산기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '쌍둥이 역설 시각화 도구는 특수 상대성 이론에서 가장 유명한 아이디어 중 하나를 대화형 시공간 다이어그램으로 변환합니다. 우주선 속도를 광속의 일부로 설정하고 지구에서 경과하는 연수를 선택하면 계산기가 로런츠 인자, 여행자의 고유 시간, 재회 시 나이 차이 및 방향 전환 지점까지의 거리를 계산합니다. 시각적 레이아웃은 지구 시계와 우주선 시계를 분리하여 비대칭성이 수식 안에 숨겨지지 않고 눈에 보이게 합니다.',
    },
    {
      type: 'title',
      text: '계산 작동 방식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '핵심 양은 로런츠 인자입니다: gamma = 1 / sqrt(1 - v^2 / c^2). 일정한 순항 속도를 가진 단순한 왕복 여행의 경우 여행자가 경험하는 시간은 지구계 미션 지속 시간을 감마로 나눈 것입니다. 이 두 시간의 차이가 쌍둥이가 재회할 때의 나이 차이입니다. 이 도구는 또한 지구계 방향 전환 거리를 표시하는데, 이는 총 지구 시간의 절반에 연간 광년 단위의 우주선 속도를 곱한 것입니다.',
    },
    {
      type: 'table',
      headers: ['속도', '로런츠 인자', '여행자 시계 속도', '물리적 의미'],
      rows: [
        ['0.50c', '1.155', '지구 속도의 86.6%', '눈에 띄지만 중간 정도의 상대론적 효과입니다.'],
        ['0.86c', '1.960', '지구 속도의 51.0%', '여행자는 순항 중 약 절반의 속도로 나이를 먹습니다.'],
        ['0.98c', '5.025', '지구 속도의 19.9%', '극심한 시간 팽창이 미션 결과를 지배합니다.'],
      ],
    },
    {
      type: 'title',
      text: '상황이 대칭이 아닌 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '언뜻 보면 각 쌍둥이는 상대방이 움직이고 있다고 말할 수 있으므로 결과가 모순적으로 보입니다. 해결책은 지구 쌍둥이는 대략 하나의 관성계에 머무르는 반면, 여행하는 쌍둥이는 출발하고 방향을 반전시킨 후 돌아온다는 것입니다. 이러한 관성계의 변화는 여행자에게 시공간을 통한 다른 경로를 제공합니다. 이 도구가 그리는 세계선은 방향 전환 지점에서 휘어지지만, 지구 쌍둥이의 세계선은 직선으로 유지됩니다.',
    },
    {
      type: 'title',
      text: '세계선 다이어그램 읽기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '세계선은 공간만이 아니라 시공간을 통한 물체의 지도입니다. 이 시각화 도구에서 수직인 지구선은 집에 머무는 쌍둥이를 나타냅니다. 각진 빨간색 경로는 지구를 떠나 돌아오는 여행자를 나타냅니다. 속도가 증가하면 여행자 경로가 더 극적으로 기울어지고 우주선 시계에 축적되는 고유 시간의 양이 줄어듭니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>나이 차이:</strong> 재회 시 여행자가 얼마나 더 젊은지.',
        '<strong>로런츠 인자:</strong> 지구계 시간을 여행자의 고유 시간에 연결하는 배수.',
        '<strong>여행자 고유 시간:</strong> 우주선 시계로 측정된 실제 경과 시간.',
        '<strong>방향 전환 거리:</strong> 여행자가 방향을 반전하기 전 지구계에서의 외부 거리.',
      ],
    },
    {
      type: 'title',
      text: '시간 팽창에 대한 실제적 증거',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '쌍둥이 역설은 깔끔한 사고 실험이지만, 시간 팽창은 추측이 아닙니다. 상층 대기에서 생성된 뮤온은 지구 관점에서 움직이는 시계가 지연되기 때문에 지면에 도달할 수 있을 만큼 오래 생존합니다. 항공기 원자 시계 실험과 정밀 위성 항법 역시 상대론적 보정이 필요합니다. 이 시각화 도구 뒤에 있는 동일한 수학이 현대 GPS 시스템에서 사용되는 타이밍 인프라의 일부입니다.',
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
