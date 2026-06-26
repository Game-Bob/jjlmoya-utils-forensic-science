import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-microcrystal-drug-simulator';
const title = '법의학 미세결정 약물 시험 시뮬레이터';
const description = '의심되는 통제 물질과 고전적인 법의학 시약을 결합하고 결정 습성, 성장 속도 및 편광 특성을 비교하여 교육용 미세결정 약물 스크리닝 패턴을 시뮬레이션합니다.';

const howTo = [
  {
    name: '의심되는 샘플 선택',
    text: '코카인, 헤로인, 암페타민 또는 메탐페타민을 선택하여 미지의 물질에 대한 교육용 프로필을 로드합니다.',
  },
  {
    name: '미세결정 시약 도포',
    text: '염화백금, 염화금, 드라겐도르프 시약 사이를 전환하여 시약 화학이 결정 형태를 어떻게 변화시키는지 확인합니다.',
  },
  {
    name: '시뮬레이션된 편광 조정',
    text: '편광 제어기를 이동하여 가상 현미경 시야 내에서 복굴절 대비를 증감시킵니다.',
  },
  {
    name: '기준 패턴과 결과 비교',
    text: '결정 습성 라벨, 일치 점수, 성장 속도 및 해석 노트를 사용하여 패턴이 전형적인 기준 패턴인지, 부분 일치인지 또는 비특이적인지 판단합니다.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '미세결정 시험은 불법 약물에 대한 확정 시험입니까?',
    answer: '아닙니다. 미세결정 시험은 예비적 또는 비교용 스크리닝 도구입니다. 실제 압수 약물의 식별은 적절한 대조군과 GC-MS, LC-MS 또는 적외선 분광법과 같은 확정적인 기기 분석 방법을 포함하는 검증된 분석 체계를 따라야 합니다.',
  },
  {
    key: 'faq-2',
    question: '왜 다른 시약들이 다른 결정 모양을 만듭니까?',
    answer: '시약이 표적 화합물의 작용기와 염, 착물 또는 침전물을 형성하기 때문입니다. 용해도, 산의 세기, 농도, 불순물 및 건조 속도가 관찰되는 결정 습성이 침상, 로제트상, 프리즘상, 판상 또는 약한 분산상 중 어떤 형태로 나타날지에 영향을 미칩니다.',
  },
  {
    key: 'faq-3',
    question: '편광은 미세결정 관찰에 어떤 이점을 제공합니까?',
    answer: '편광은 대비를 증가시키고 복굴절을 나타내어 결정의 가장자리, 가지 및 내부 구조를 더 쉽게 비교할 수 있도록 합니다. 다만, 기준 표준물질 및 대조군의 필요성을 없애지는 않습니다.',
  },
  {
    key: 'faq-4',
    question: '양성처럼 보이는 패턴이 여전히 오해를 불러일으킬 수 있는 이유는 무엇입니까?',
    answer: '희석제, 혼합물, 분해된 물질, 시약의 노후화, 오염 및 분석가의 기대치 모두가 모호하거나 중첩되는 형태를 생성할 수 있습니다. 이것이 예비 결과를 신중하게 해석해야 하는 이유입니다.',
  },
  {
    key: 'faq-5',
    question: '이 시뮬레이터로 미지의 물질을 식별할 수 있습니까?',
    answer: '아닙니다. 이것은 일반적인 형태학 개념의 교육적 시각화 도구입니다. 실제 증거를 테스트하거나, 화학 반응을 측정하거나, 실험실 분석 결론을 내릴 수 없습니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: '편광 현미경',
    canvasAria: '애니메이션 미세결정 성장 영역',
    sample: '의심되는 샘플',
    sampleCocaine: '코카인',
    sampleHeroin: '헤로인',
    sampleAmphetamine: '암페타민',
    sampleMethamphetamine: '메탐페타민',
    reagent: '시약 보관대',
    reagentPlatinum: '염화백금',
    reagentGold: '염화금',
    reagentDragendorff: '드라겐도르프',
    polarization: '편광 대비',
    confidence: '일치도',
    growth: '성장',
    birefringence: '복굴절',
    regrow: '결정 재성장',
    warningLabel: '법의학적 주의',
    warningTitle: '스크리닝 주의',
    matchReference: '기준 패턴',
    matchPartial: '부분 일치',
    matchNonSpecific: '비특이적',
    habitFeatheryNeedles: '깃털 모양 침상 다발',
    habitRosettes: '로제트 별 모양 배열',
    habitBranchingPrisms: '가지 모양 프리즘',
    habitPlates: '얇은 판상',
    habitWeakScatter: '희박한 비특이적 분산',
    cueCocainePlatinumChloride: '깃털 모양 및 가지 모양 침상 결정 다발은 코카인과 염화백금 조합에서 기대되는 교육용 표준 패턴입니다.',
    cueCocaineGoldChloride: '염화금은 오렌지 갈색의 가지 모양 결정을 형성할 수 있지만, 이 패턴은 염화백금보다 특이성이 낮습니다.',
    cueCocaineDragendorff: '드라겐도르프 시약은 여기서 약한 알칼로이드 반응을 보입니다. 형태는 스크리닝 정보로만 취급되어야 합니다.',
    cueHeroinPlatinumChloride: '판상 침전물이 나타날 수 있지만, 이 조합은 강력한 확정적 교육용 일치 패턴이 아닙니다.',
    cueHeroinGoldChloride: '로제트 다발과 둥근 별 모양 배열은 이 시뮬레이터에서 헤로인의 기준 패턴입니다.',
    cueHeroinDragendorff: '드라겐도르프 시약은 식별 증명이 아니라 알칼로이드 스크리닝과 일치하는 오렌지색 가지 모양 프리즘을 생성합니다.',
    cueAmphetaminePlatinumChloride: '빠르게 가지를 치는 프리즘은 선택된 시약 하에서 흥분제 유형의 교육용 패턴을 시사합니다.',
    cueAmphetamineGoldChloride: '희박한 결정화는 시각적 결과를 비특이적으로 보고해야 함을 의미합니다.',
    cueAmphetamineDragendorff: '침상 분무 결정은 빠르게 성장하며 예비 암페타민 비교 교육에 유용합니다.',
    cueMethamphetaminePlatinumChloride: '편광 로제트가 형성될 수 있으나, 결과는 여전히 예비적인 형태 비교로 남습니다.',
    cueMethamphetamineGoldChloride: '얇은 판상이 보이지만, 다른 화합물과의 중첩으로 인해 특이성이 제한됩니다.',
    cueMethamphetamineDragendorff: '밀도가 높은 오렌지색 가지 모양 프리즘은 이 세트에서 메탐페타민에 대해 가장 강력한 교육용 일치 패턴을 제공합니다.',
    disclaimer: '교육용 스크리닝 모델입니다. 실제 약물 식별에는 검증된 기준 표준물질, 시약 대조군, 보관 체계(체인 오브 커스터디) 및 확정적인 기기 분석이 필요합니다.',
  },
  seo: [
    {
      type: 'title',
      text: '법의학에서의 미세결정 약물 시험',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: '교육용 시뮬레이터',
      title: '이 미세결정 시뮬레이터의 목적',
      html: '이 도구는 의심되는 약물이 시약과 혼합된 후 클래식 법의학 미세결정 시험이 어떻게 인식 가능한 결정 습성을 생성하는지 설명합니다. 브라우저 결과를 증거로 취급하지 않고 학생이 <strong>결정 형태</strong>, 성장 속도 및 편광 대비를 비교하는 데 도움을 줍니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: '교육용 샘플 프로필', icon: 'mdi:flask-outline' },
        { value: '3', label: '전통적인 시약 옵션', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: '모델링된 결정 습성', icon: 'mdi:shape-outline' },
        { value: '0', label: '법적 식별 권리 주장', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: '결정 습성을 해석하는 방법',
      level: 3,
    },
    {
      type: 'summary',
      title: '비교를 위한 실제적인 체크리스트',
      items: [
        '미지의 샘플을 비교하기 전에 알려진 기준 표준물질과 빈 시약 대조군으로 시작하십시오.',
        '시약, 농도, 드롭 크기, 건조 시간, 온도 및 현미경 배율을 기록합니다.',
        '먼저 전체적인 결정 습성(침상, 로제트상, 판상, 프리즘상, 가지 모양 또는 약한 분산)을 비교합니다.',
        '부분적이거나 희박한 성장은 확신적인 식별이 아니라 추가 테스트가 필요한 이유로 취급하십시오.',
      ],
    },
    {
      type: 'table',
      headers: ['관찰된 결정 습성', '자주 묻는 질문', '신중한 해석'],
      rows: [
        ['깃털 모양 침상', '이것이 염화백금과 코카인의 조합처럼 보입니까?', '유용한 교육용 매치가 될 수 있지만, 혼합물 및 시약 조건에 따라 결정 습성이 달라질 수 있습니다.'],
        ['로제트상', '별 모양 결정은 확정적입니까?', '로제트는 대조군이 일치할 때 비교를 지원할 수 있으나 단독으로는 충분하지 않습니다.'],
        ['가지 모양 프리즘', '왜 흥분제 스크리닝은 종종 빠르게 성장합니까?', '일부 염은 용매가 증발함에 따라 빠르게 핵을 형성하고 가지를 칩니다. 성장 속도는 보조적 소견이며 확정적이지 않습니다.'],
        ['약한 분산', '약한 패턴은 약물이 존재하지 않음을 의미합니까?', '아닙니다. 낮은 농도, 불순물, 오래된 시약 또는 불량한 준비 과정으로 인해 결정 성장이 억제될 수 있습니다.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '미세결정 스크리닝이 유용한 경우',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '훈련된 분석가가 대조군과 기준 자료를 사용하는 경우 신속한 시각적 비교.',
          points: ['교실 실습 시연', '결정 형태 용어 학습', '예비적인 분류', '시약 효과 비교'],
        },
        {
          title: '미세결정 스크리닝이 대체할 수 없는 것',
          icon: 'mdi:alert-circle-outline',
          description: '실제 압수 약물에 대한 검증된 확정적 화학 분석 결론.',
          points: ['기기 분석을 통한 확인', '공인된 절차 준수', '매트릭스 특이적 밸리데이션', '불확도 문서화'],
        },
      ],
    },
    {
      type: 'title',
      text: '미세결정 시험에 관한 과학적 배경',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '미세결정 시험은 법의학 화학자들이 의심되는 통제 물질을 식별하기 위해 사용하는 역사적이고 매우 민감한 화학적 스크리닝 시험입니다. 소량의 약물 샘플을 산에 녹인 후 염화금 또는 염화백금과 같은 특정 중금속 시약과 결합하면 배위 착물 또는 불용성 염이 침전됩니다. 약물의 분자 구조는 생성되는 결정의 성장 속도, 배향 및 대칭성을 결정하여 고유한 미세학적 모양 또는 습성을 생성합니다.',
    },
    {
      type: 'paragraph',
      html: '이러한 습성을 편광 현미경 하에서 분석하면 법의학 시험관은 결정이 빛을 두 개의 광선으로 나누어 선명한 색상과 높은 대비를 생성하는 복굴절 같은 광학적 특성을 관찰할 수 있습니다. 가스 크로마토그래피 질량 분석법과 같은 기기 분석법이 확정적인 식별을 위한 미세결정 시험을 대부분 대체했지만, 미세결정 스크리닝은 신속성, 저비용 및 다른 방법으로는 구별하기 어려울 수 있는 광학 이성질체를 분리하는 능력 덕분에 여전히 가치 있는 기술로 유지되고 있습니다.',
    },
    {
      type: 'paragraph',
      html: '교육 현장에서 이러한 반응을 시뮬레이션하는 것은 학생들이 화학 시약과 물리적 결정 형태의 관계를 이해하는 데 도움이 됩니다. 코카인, 헤로인 및 다양한 암페타민이 서로 다른 시약에 어떻게 반응하는지 관찰함으로써 학생들은 단일 양성 시험이 최종 법의학적 결론이 아님을 배웁니다. 올바른 약물 스크리닝 프로토콜은 미지의 샘플을 알려진 기준 물질과 비교하고, 관찰된 결정 패턴의 타당성과 특이성을 확보하기 위해 시약 공시험을 함께 수행할 것을 요구합니다.',
    },
    {
      type: 'glossary',
      items: [
        { term: '결정 습성', definition: '침상, 판상, 프리즘상, 로제트상 등 결정의 눈에 보이는 형태나 성장 모양.' },
        { term: '핵생성', definition: '더 큰 결정 구조가 성장하는 출발점이 되는 미세한 결정 중심이 초기에 형성되는 현상.' },
        { term: '복굴절', definition: '편광 하에서 결정이 더 밝게 보이거나 색상을 띠게 만드는 광학적 거동.' },
        { term: '예비 시험', definition: '가능성 있는 클래스 또는 화합물을 시사하지만 그 자체로는 동일성을 증명하지 못하는 스크리닝 시험.' },
        { term: '기준 표준물질', definition: '미지의 패턴과 비교하기 위해 동일한 조건에서 검사되는 알려진 물질.' },
      ],
    },
    {
      type: 'tip',
      title: '실제 증거물 분석에 관한 모범 실무',
      html: '미세결정 형태학을 조사의 한 부분으로 활용하십시오. 신뢰할 수 있는 워크플로우에는 공시험, 양성 대조군, 시약 노후화 문서화, 필요한 경우 독립적인 검토 및 승인된 법의학 분석 계획 하에서의 확정 시험이 포함됩니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: '법의학적 주의',
      title: '아름다운 결정이 법적인 식별 결과를 의미하지는 않습니다',
      html: '시뮬레이터는 시각적 일치도 점수와 법의학적 결론을 의도적으로 구분하고 있습니다. 실제 감정 과정에서는 혼합물, 희석제, 오염, 시약 성능, 분석가의 훈련 정도 및 검증된 실험실 절차를 종합적으로 고려해야 합니다.',
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
