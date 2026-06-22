import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'crystal-lattice-structure-finder';
const title = '결정격자 구조 탐색기';
const description = '단순 입방, 면심 입방 (FCC), 육방 조밀 충진 (HCP) 단위 세포를 대화형 3D 뷰어, 원자 충진율, 배위수, 이론 밀도 계산기와 함께 탐색하세요.';

const howTo = [
  {
    name: '격자 또는 재료 선택',
    text: '단순 입방, FCC, HCP와 같은 구조군에서 시작하거나 실제 재료 프리셋을 선택하여 격자 상수와 원자 또는 화학식량을 불러옵니다.',
  },
  {
    name: '단위 세포 회전',
    text: '각도 및 확대/축소 컨트롤을 드래그하여 기존 세포의 모서리, 면 또는 내부에 어떤 원자가 있는지 확인합니다.',
  },
  {
    name: '충진율과 밀도 확인',
    text: '선택한 구조에 대해 원자 충진율, 배위수, 세포당 원자 수, 세포 질량, 세포 부피 및 이론 밀도를 비교합니다.',
  },
  {
    name: '사용자 정의 상수 테스트',
    text: '격자 매개변수 a, c/a 비율 및 질량을 편집하여 결정이 팽창, 수축 또는 조성이 변경될 때 이론 밀도가 어떻게 변하는지 확인합니다.',
  },
];

const faq = [
  {
    question: '결정 격자에서 단위 세포란 무엇인가요?',
    answer: '단위 세포는 공간을 채워 결정을 형성할 수 있는 가장 작은 반복적인 3차원 상자입니다. 그 원자는 이웃 세포와 공유될 수 있으므로 세포당 순 원자 수는 경계에 그려진 구의 수보다 적을 수 있습니다.',
  },
  {
    question: 'FCC와 HCP가 동일한 충진율을 가지는 이유는 무엇인가요?',
    answer: 'FCC와 이상적인 HCP는 모두 동일한 구의 조밀 충진 배열입니다. FCC는 ABCABC, HCP는 ABAB의 다른 순서로 조밀한 삼각형 층을 쌓지만, 둘 다 공간의 약 74%를 원자로 채웁니다.',
  },
  {
    question: '이론 밀도는 어떻게 계산되나요?',
    answer: '계산기는 하나의 단위 세포 내 질량을 단위 세포 부피로 나눕니다. 세포 질량은 세포당 원자 또는 화학식 단위 수에 몰 질량을 곱하고 아보가드로 상수로 나누어 얻습니다.',
  },
  {
    question: '측정된 밀도가 이론 결과와 다른 이유는 무엇인가요?',
    answer: '실제 시료에는 공공, 불순물, 기공, 입계, 동위원소 혼합물, 온도 팽창 또는 여러 상이 포함될 수 있습니다. 이론 값은 선택된 격자 상수를 가진 완벽한 결정을 가정합니다.',
  },
  {
    question: 'Halite는 실제로 FCC 금속 격자인가요?',
    answer: '아닙니다. Halite는 이온성 암염이며 금속이 아닙니다. 프리셋이 기존 FCC 파생 세포를 사용하는 이유는 NaCl이 입방 세포당 4개의 화학식 단위를 가지고 있어 밀도 계산 연습에 유용하기 때문입니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: '대화형 결정 단위 세포',
    material: '재료',
    lattice: '격자',
    rotation: '회전',
    zoom: '확대/축소',
    latticeA: '격자 상수 a',
    cRatio: 'c/a 비율',
    molarMass: '몰 질량',
    atomsPerCell: '세포당 원자 수',
    packingFactor: '충진율',
    coordination: '배위수',
    density: '밀도',
    cellVolume: '세포 부피',
    cellMass: '세포 질량',
    radius: '원자 반지름',
    cornerAtoms: '모서리 원자',
    faceAtoms: '면 원자',
    interiorAtoms: '내부 원자',
    materialNote: '재료 노트',
    formula: '화학식',
    resetView: '보기 재설정',
    crystalProperties: '결정 특성',
    physicalMetrics: '물리적 측정값',
    latticeSimpleCubic: '단순 입방',
    latticeFcc: '면심 입방 (FCC)',
    latticeHcp: '육방 조밀 충진 (HCP)',
    shortSc: 'SC',
    shortFcc: 'FCC',
    shortHcp: 'HCP',
    materialCopper: '구리',
    materialCopperNote: '전기 전도도가 높은 일반적인 FCC 금속.',
    materialAluminum: '알루미늄',
    materialAluminumNote: '열 전도성이 우수한 경량 FCC 금속.',
    materialPolonium: '폴로늄',
    materialPoloniumNote: '단순 입방 구조를 가진 희귀 원소.',
    materialMagnesium: '마그네슘',
    materialMagnesiumNote: '강도 대 중량비가 우수한 경량 HCP 금속.',
    materialTitanium: '티타늄',
    materialTitaniumNote: '항공우주 분야에서 널리 사용되는 고강도 HCP 금속.',
    materialHalite: 'Halite',
    materialHaliteNote: '4개의 NaCl 단위를 가진 FCC 파생 전통적 세포의 이온성 암염.',
    shortSimpleCubic: 'SC',
    shortFaceCenteredCubic: 'FCC',
    shortHexagonalClosePacked: 'HCP',
    shortBodyCenteredCubic: 'BCC',
    shortDiamondCubic: 'DC',
    shortRockSalt: 'NaCl',
    shortCesiumChloride: 'CsCl',
    shortZincBlende: 'ZnS',
    shortWurtzite: 'WZ',
    shortPerovskite: 'ABO3',
    shortRutile: 'TiO2',
    latticeBodyCenteredCubic: '체심 입방',
    latticeCesiumChloride: '염화 세슘',
    latticeDiamondCubic: '다이아몬드 입방',
    latticeFaceCenteredCubic: '면심 입방',
    latticeHexagonalClosePacked: '육방 조밀 충전',
    latticePerovskite: '입방 페로브스카이트',
    latticeRockSalt: '암염',
    latticeRutile: '루타일',
    latticeWurtzite: '우르츠광',
    latticeZincBlende: '섬아연석',
    materialAlphaIron: '알파 철',
    materialAlphaIronNote: '상온의 체심 입방 철 상입니다.',
    materialTungsten: '텅스텐',
    materialTungstenNote: '매우 높은 녹는점을 가진 조밀한 BCC 내화 금속입니다.',
    materialSilicon: '실리콘',
    materialSiliconNote: '집적 회로에 쓰이는 다이아몬드 입방 반도체입니다.',
    materialDiamond: '다이아몬드',
    materialDiamondNote: '다이아몬드 입방 구조의 공유 결합 탄소 네트워크입니다.',
    materialCesiumChloride: '염화 세슘',
    materialCesiumChlorideNote: '팔배위의 상호 침투 단순 입방 이온 구조입니다.',
    materialZincSulfide: '황화 아연',
    materialZincSulfideNote: '섬아연석이라고도 하며 사면체 배위를 가집니다.',
    materialGalliumNitride: '질화 갈륨',
    materialGalliumNitrideNote: 'LED와 전력 전자에 쓰이는 우르츠광 반도체입니다.',
    materialStrontiumTitanate: '티탄산 스트론튬',
    materialStrontiumTitanateNote: '기판과 유전체 모델로 자주 쓰이는 입방 페로브스카이트 산화물입니다.',
    materialRutileTitania: '루타일 티타니아',
    materialRutileTitaniaNote: '티타늄의 팔면체 배위를 가진 루타일 TiO2 구조입니다.',
  },
  seo: [
    {
      type: 'title',
      text: '단위 세포, 충진율 및 밀도를 위한 결정격자 구조 탐색기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 결정격자 구조 탐색기는 단위 세포의 그림과 학생 및 재료 과학자들이 일반적으로 필요로 하는 계산을 연결하는 데 도움을 줍니다. 단순 입방, 면심 입방 및 육방 조밀 충진 구조를 검사한 다음, 실제 재료 프리셋 또는 사용자 정의 입력으로부터 원자 충진율, 배위수, 세포당 원자 수, 격자 매개변수로부터의 원자 반지름, 세포 부피, 세포 질량 및 이론 밀도를 계산할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '대화형 뷰어는 결정학의 일반적인 어려움을 위해 설계되었습니다. 경계 원자는 보이지만 각 경계 원자의 일부만 선택된 세포에 속합니다. 모델을 회전하면 수치 공식을 사용하기 전에 모서리 위치, 면 위치 및 내부 위치 간의 차이를 더 쉽게 확인할 수 있습니다.',
    },
    {
      type: 'title',
      text: '단순 입방, FCC 및 HCP 비교',
      level: 3,
    },
    {
      type: 'table',
      headers: ['구조', '세포당 순 원자 수', '배위수', '원자 충진율', '대표적인 예'],
      rows: [
        ['단순 입방', '1', '6', '52.36%', '알파 폴로늄이 고전적인 원소 예입니다.'],
        ['면심 입방 (FCC)', '4', '12', '74.05%', '구리, 알루미늄, 니켈, 은, 금 및 많은 연성 금속.'],
        ['육방 조밀 충진 (HCP)', '6', '12', '74.05%', '마그네슘, 알파 티타늄, 아연, 코발트 및 베릴륨.'],
      ],
    },
    {
      type: 'paragraph',
      html: '단순 입방 충진은 원자가 입방체 모서리를 따라 접촉하고 각 모서리 원자가 세포에 8분의 1을 기여하기 때문에 시각화하기 쉽습니다. FCC는 각 면의 중심에 원자를 추가하므로 원자는 면 대각선을 따라 접촉하며 기존 입방 세포당 순 개수는 4개의 원자가 됩니다. HCP는 입방체 대신 육방 층을 사용하지만 이상적인 HCP는 FCC와 동일한 조밀 충진 한계에 도달합니다.',
    },
    {
      type: 'title',
      text: '원자 충진율 공식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '원자 충진율은 단위 세포 부피 중 경질 구 원자가 차지하는 비율입니다. <strong>APF = 세포 내 원자의 부피 / 단위 세포 부피</strong>로 계산됩니다. 단순 입방의 경우 반지름 a/2인 하나의 원자가 입방 세포에 맞으므로 pi / 6이 됩니다. FCC와 이상적인 HCP는 모두 약 0.7405에 도달하며, 이는 동일한 구의 최대 충진율입니다.',
    },
    {
      type: 'paragraph',
      html: '충진율은 밀도와 같지 않습니다. APF는 동일한 구가 공간을 얼마나 효율적으로 채우는지를 설명하는 반면, 밀도는 몰 질량과 격자 크기에도 의존합니다. 가벼운 HCP 금속과 무거운 FCC 금속은 유사한 충진율을 가지지만 매우 다른 밀도를 가질 수 있습니다.',
    },
    {
      type: 'title',
      text: '계산기에서 사용하는 이론 밀도 공식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '계산기는 <strong>rho = nM / (NA Vcell)</strong>을 사용합니다. 이 식에서 <strong>n</strong>은 세포당 원자 또는 화학식 단위 수, <strong>M</strong>은 그램당 몰 단위의 몰 질량, <strong>NA</strong>는 아보가드로 상수, <strong>Vcell</strong>은 세제곱센티미터 단위의 단위 세포 부피입니다. 입방 세포는 a^3을 사용합니다. 육방 세포는 (3 sqrt(3) / 2) a^2 c를 사용하며, c는 c/a 비율을 통해 제공됩니다.',
    },
    {
      type: 'paragraph',
      html: '격자 상수는 일반적으로 옹스트롬 단위로 표기되므로, 계산기는 밀도 계산 전에 옹스트롬을 센티미터로 변환합니다. 격자 상수의 작은 변화는 입방 세포의 경우 부피가 세제곱으로 스케일링되므로 밀도에 눈에 띄게 영향을 미칠 수 있습니다.',
    },
    {
      type: 'title',
      text: '금속 및 광물에 대한 격자 프리셋 사용 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>구리와 알루미늄:</strong> 세포당 동일한 순 원자 수를 가지지만 몰 질량과 격자 상수가 다른 두 FCC 금속을 비교합니다.',
        '<strong>마그네슘과 알파 티타늄:</strong> HCP 충진을 검사하고 c/a 비율이 육방 세포 부피를 어떻게 변화시키는지 확인합니다.',
        '<strong>알파 폴로늄:</strong> 드문 단순 입방 구조와 낮은 충진 효율을 연구합니다.',
        '<strong>Halite:</strong> 단일 원소 금속 대신 광물 스타일의 NaCl 기존 세포를 사용하여 화학식 단위 밀도를 연습합니다.',
      ],
    },
    {
      type: 'title',
      text: '경질구 단위 세포 모델의 한계',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구는 이상화된 기하학적 모델을 사용합니다. 실제 결정은 단단한 경계 대신 전자 밀도를 가지며, 격자 상수는 온도, 압력, 조성 및 결함에 따라 변합니다. 이온 및 공유 결정은 또한 여기에 표시된 세 가지 교육용 구조를 넘어서는 기저 원자, 부분 점유 및 대칭 연산이 필요할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '결과는 교육, 빠른 추정 및 일반적인 격자 패밀리 비교에 사용하십시오. 출판 품질의 결정학을 위해서는 1차 회절 데이터 또는 선별된 결정학 데이터베이스에서 격자 매개변수, 상, 화학양론 및 사이트 점유율을 확인하십시오.',
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
      applicationCategory: 'EducationalApplication',
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
