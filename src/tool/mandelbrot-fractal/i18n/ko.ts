import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fractal-calculator';
const title = 'Mandelbrot Fractal Calculator & Self Similarity Explorer';
const description = 'Mandelbrot 집합을 탐험하고, 자기유사 프랙탈 경계를 확대하며, 반복 깊이, 색상 대비, 복소평면 좌표를 비교해 보세요.';

const howTo = [
  {
    name: 'Mandelbrot 집합의 영역 선택',
    text: '전체 집합에서 시작하거나, seahorse valley 또는 스파이럴 미니브로트와 같은 고해상도 영역으로 바로 이동하세요.',
  },
  {
    name: '이미지를 클릭하여 확대',
    text: '캔버스의 아무 지점이나 클릭하면 복소평면이 재중심화되고 해당 좌표를 중심으로 프랙탈이 확대됩니다.',
  },
  {
    name: '반복 깊이와 색상 대비 조정',
    text: '반복 예산을 늘리면 더 미세한 경계 구조가 드러납니다. 그런 다음 대비와 팔레트를 조정하여 탈출 시간 밴드를 더 읽기 쉽게 만드세요.',
  },
];

const faq = [
  {
    question: 'Mandelbrot 집합 계산기는 무엇을 보여주나요?',
    answer: 'z = 0에서 시작할 때 점화식 z(n+1) = z(n)^2 + c를 유계로 유지하는 복소수 c를 보여줍니다. 선택한 반복 예산 내에서 절대 발산하지 않는 점은 집합의 구성원으로 색칠되고, 외부 점은 궤도가 발산하는 속도에 따라 색칠됩니다.',
  },
  {
    question: 'Mandelbrot 집합의 경계에는 왜 이렇게 많은 세부 정보가 포함되어 있나요?',
    answer: '경계는 안정 궤도와 발산 궤도를 분리하며, 그 경계 근처의 미세한 좌표 변화가 장기적인 행동을 완전히 바꿀 수 있습니다. 이러한 민감성은 중첩된 벌브, 나선, 필라멘트 및 여러 확대 수준에서 나타나는 미니어처 복사본을 생성합니다.',
  },
  {
    question: 'Mandelbrot 집합은 정말로 자기유사한가요?',
    answer: '시어핀스키 삼각형과 같은 엄격한 의미에서 완벽하게 자기유사하지는 않지만, 풍부한 준자기유사성을 가지고 있습니다. 전체 집합의 작은 복사본이 평면 전체에 나타나며, 종종 왜곡되고 정교한 분기 구조로 연결됩니다.',
  },
  {
    question: '반복 횟수는 무엇을 제어하나요?',
    answer: '반복 횟수는 계산기가 각 점을 테스트한 후 집합에 속할 것이라고 결정하기까지의 시간을 제어합니다. 더 높은 값은 더 깊은 필라멘트와 더 선명한 미니브로트를 드러내지만, 픽셀당 더 많은 계산이 필요합니다.',
  },
  {
    question: '검은 영역 밖에서 색상이 변하는 이유는 무엇인가요?',
    answer: '외부 색상은 탈출 시간에 기반합니다. 빨리 발산하는 점은 여러 반복 동안 집합 근처에 머무르는 점과 다른 색상을 받습니다. 부드러운 컬러링은 거친 밴드를 줄이고 근처 궤도의 기하학적 구조를 검사하기 쉽게 만듭니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot Fractal Calculator',
    canvasLabel: '인터랙티브 Mandelbrot 집합 캔버스',
    presetsLabel: 'Mandelbrot 영역 프리셋',
    presetFull: '전체 집합',
    presetSeahorse: 'Seahorse Valley',
    presetSpiral: '스파이럴 미니브로트',
    centerPoint: '중심',
    magnification: '배율',
    visibleWindow: '가시 창',
    renderBudget: '반복 횟수',
    iterationsLabel: '반복 깊이',
    contrastLabel: '발산 대비',
    colorLabel: '색상 필드',
    paletteEmber: '엠버 밴드',
    paletteLagoon: '라군 플라즈마',
    paletteInk: '잉크 스펙트럼',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Set Calculator for Fractals, Escape Time, and Self-Similarity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 Mandelbrot 프랙탈 계산기는 반복 <strong>z(n+1) = z(n)^2 + c</strong>로 정의되는 고전적인 복소평면 집합을 렌더링합니다. 수동적인 시청보다는 탐험을 위해 설계되었습니다. 모든 클릭은 평면을 재중심화하고, 각 확대는 더 작은 수학적 이웃을 노출시키며, 반복 슬라이더는 점을 안정 또는 발산으로 색칠하기 전에 계산기가 경계를 얼마나 깊이 테스트할지 결정하게 합니다.',
    },
    {
      type: 'title',
      text: 'How to Read the Mandelbrot Image',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '어두운 중앙 모양은 현재 반복 예산 내에서 궤도가 유계로 유지되는 점을 나타냅니다. 색칠된 외부는 탈출 시간 맵입니다. 집합 가까이 색칠된 점은 크기가 탈출 반경을 초과하기 전에 수백 번의 반복을 견딜 수 있지만, 멀리 있는 점은 거의 즉시 발산합니다. 가장 과학적으로 흥미로운 기하학적 구조는 일반적으로 채워진 모양 내부가 아니라 유계와 비유계 행동이 얽혀 있는 경계를 따라 있습니다.',
    },
    {
      type: 'table',
      headers: ['제어', '변경 사항', '증가해야 할 때'],
      rows: [
        ['<strong>반복 깊이</strong>', '각 픽셀에 대해 테스트되는 점화 단계의 수입니다.', '얇은 필라멘트나 미니어처 복사본으로 확대한 후 더 높은 값을 사용하세요.'],
        ['<strong>발산 대비</strong>', '부드러운 발산 값이 가시 밴드로 분리되는 강도입니다.', '이미지가 평평해 보일 때 올리고, 색상이 너무 강할 때 내리세요.'],
        ['<strong>팔레트</strong>', '외부 점에 적용되는 색상 매핑입니다.', '팔레트를 전환하여 하나의 색상 필드로는 숨겨질 수 있는 구조를 드러내세요.'],
      ],
    },
    {
      type: 'title',
      text: 'Self-Similarity and Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mandelbrot 집합이 그렇게 유명한 이유 중 하나는 준자기유사성 때문입니다. 안테나, 나선, 계곡으로 확대해 들어가면 미니브로트라고 불리는 작은 Mandelbrot 같은 섬들을 반복해서 만나게 됩니다. 이러한 복사본은 단순한 장식이 아닙니다. 그 배열은 주기적인 벌브, 분기 패턴, 그리고 궤도가 발산하기 전에 오랜 기간 동안 갇혀 있는 영역을 포함한 이차 사상의 동역학을 반영합니다.',
    },
    {
      type: 'title',
      text: 'Why Higher Iterations Matter at Deep Zoom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '전체 집합 보기에서는 적당한 반복 제한으로 인식 가능한 이미지를 얻을 수 있습니다. 그러나 더 깊은 배율에서는 많은 경계 점이 발산 여부를 드러내는 데 훨씬 더 오래 걸립니다. 반복 제한이 너무 낮으면 미세 구조가 잘못하여 단단하거나 흐릿하게 보일 수 있습니다. 반복 횟수를 늘리면 경계 분류가 개선되고 계산기가 가는 덩굴손, 나선 팔, 위성 벌브를 더 확실하게 해상할 수 있습니다.',
    },
    {
      type: 'title',
      text: 'Mathematical Meaning of the Complex Coordinates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '좌표 판독값은 뷰포트의 현재 중심을 복소수 c = a + bi로 표시합니다. 수평 축은 실수부이고 수직 축은 허수부입니다. 캔버스를 클릭하면 새 복소 좌표를 선택한 다음 그 주위의 가시 창을 확대합니다. 이는 프랙탈의 시각적 영역이 복소평면의 정확한 위치에 어떻게 대응하는지 학습하는 데 유용한 도구가 됩니다.',
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
