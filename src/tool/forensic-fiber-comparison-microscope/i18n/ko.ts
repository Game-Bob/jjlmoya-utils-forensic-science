import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensic-fiber-comparison-microscope';
const title = '법과학 섬유 비교 현미경 시뮬레이터';
const description = '감정 대상이 되는 미지의 섬유 프로필을 작성하고, 알려진 기준 섬유와 비교하며 형태학적 특성, 편광 반응 및 UV-Vis 염료 흡수 스펙트럼 증거를 해석합니다.';

const howTo = [
  {
    name: '미지 섬유의 프로필 설정',
    text: '회수된 섬유의 재질, 직경, 꼬임 방향, 편광 반응 및 염료 프로필을 설정합니다.',
  },
  {
    name: '비교 대상이 되는 대조 섬유 선택',
    text: '오른쪽에서 면, 양모, 폴리에스테르 또는 나일론 등 용의자 의류에서 확보된 섬유를 선택합니다.',
  },
  {
    name: '초점 및 편광 조절',
    text: '초점 슬라이더를 움직이고 편광자를 회전하여 선명도, 표면 요철 및 복굴절 반응을 관찰합니다.',
  },
  {
    name: '형태학적 특징 및 UV-Vis 스펙트럼 비교',
    text: '형태 점수, 스펙트럼 점수, 종합 일치도 및 흡수 곡선을 사용하여 샘플이 일치하는지 또는 명확히 다른지 판정합니다.',
  },
];

const faq = [
  {
    question: '섬유 현미경 검사로 섬유가 채취된 정확한 옷을 특정할 수 있나요？',
    answer: '일반적으로는 불가능합니다. 섬유 비교를 통해 미지 섬유와 알려진 섬유 제품 간의 일치성이나 차이점을 보여줄 수는 있지만, 개별적인 출처를 특정하려면 면밀한 맥락 분석, 검증된 기법, 그리고 대개 추가적인 화학적 또는 기기 분석이 필요합니다.',
  },
  {
    question: '섬유 비교에서 편광을 사용하는 이유는 무엇인가요？',
    answer: '편광은 천연 섬유와 합성 섬유 간의 복굴절, 소광 행동 및 구조적 차이를 밝히는 데 유용합니다. 합성 섬유는 분자 배향성으로 인해 종종 더 강한 편광 반응을 보입니다.',
  },
  {
    question: 'UV-Vis 스펙트럼은 어떤 정보를 추가로 제공하나요？',
    answer: '현미경 검사가 형태와 광학적 특성을 설명하는 반면, UV-Vis 흡광도는 다양한 파장에서 염료의 특성을 비교합니다. 겉보기에는 유사하지만 염료가 다른 섬유는 스펙트럼 플롯에서 명확하게 구별될 수 있습니다.',
  },
  {
    question: '왜 결과가 명확한 식별이 아닌 점수로 표시되나요？',
    answer: '법과학적 미세 증거는 비례적이고 신중하게 보고되어야 합니다. 점수는 형태 및 염료의 유사성을 보여주는 교육적 요약일 뿐이며, 감정서나 법적 의견이 아닙니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: '두 섬유를 비교하는 가상 분할 시야 법과학 현미경',
    chartAria: '미지 섬유와 대조 섬유의 염료 스펙트럼을 비교하는 UV-Vis 흡광도 차트',
    questionedSample: '미지 샘플',
    fixedEvidence: '회수된 고정 증거',
    builderSummaryDefault: '면 / 18 µm / 불규칙 / 인디고',
    customQuestionedLabel: '사건의 미지 섬유',
    material: '재질',
    cotton: '면',
    woolMaterial: '양모',
    polyesterMaterial: '폴리에스테르',
    nylonMaterial: '나일론',
    materialcotton: '면',
    materialwool: '양모',
    materialpolyester: '폴리에스테르',
    materialnylon: '나일론',
    twist: '꼬임',
    irregularTwist: '불규칙',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: '직경',
    polarResponse: '편광 반응',
    dyeProfile: '염료 프로필',
    indigoDye: '인디고',
    crimsonDye: '크림슨',
    navyDye: '네이비',
    violetDye: '바이올렛',
    dyeindigo: '인디고',
    dyecrimson: '크림슨',
    dyenavy: '네이비',
    dyeviolet: '바이올렛',
    knownSample: '대조 섬유',
    questionedCotton: '감정 대상 청색 면 섬유',
    suspectCotton: '용의자 셔츠 유래 면 섬유',
    wool: '적색 울 스웨터 섬유',
    polyester: '네이비 폴리에스테르 재킷 섬유',
    nylon: '바이올렛 나일론 안감 섬유',
    focus: '미세 초점',
    polarizer: '편광자 각도',
    morphology: '형태학',
    spectrum: 'UV-Vis',
    birefringence: '복굴절',
    combinedMatch: '종합 일치도',
    uvVisTitle: 'UV-Vis 흡광도 비교 그래프',
    statusStrong: '높은 일치성',
    statusPartial: '혼재된 비교 결과',
    statusDifferent: '배제 지지',
    verdictStrong: '미지 섬유와 대조 섬유는 직경, 꼬임, 광학적 행동 및 염료 스펙트럼에서 높은 수준의 일치성을 보입니다. 실제 사건에서는 이를 개별 식별이 아닌 공통 의류 출처일 가능성을 지지하는 증거로 보고해야 합니다.',
    verdictPartial: '비교 결과가 일관되지 않습니다. 일부 유목 특성은 일치하지만 형태, 염료 반응 또는 복굴절에 충분한 차이가 있어 관련성을 신중하게 추정하기 전에 더 자세한 시험이 필요합니다.',
    verdictDifferent: '섬유들이 주요 유목 특성에서 일치하지 않습니다. 시뮬레이션 결과는 알려진 이 의류가 미지 섬유의 출처일 가능성을 배제하는 것을 지지합니다.',
    disclaimer: '교육용 시뮬레이션 전용. 실제 법과학 섬유 비교는 검증된 현미경 검사, 컨트롤 사용, 문서화, 오염 방지 대책, 동료 평가 및 자격을 갖춘 미세 증거 해석 전문가를 필요로 합니다.',
  },
  seo: [
    {
      type: 'title',
      text: '분할 시야 현미경 및 UV-Vis 스펙트럼을 통한 법과학 섬유 비교',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: '교재용 시뮬레이터',
      title: '이 가상 섬유 현미경이 보여주는 원리',
      html: '이 시뮬레이터는 <strong>법과학적 섬유 비교</strong>의 실무 워크플로를 모델링합니다. 미지의 섬유를 묘사하고, 이를 대조용 섬유와 비교하며, 초점을 조정하고, 편광 필터를 회전하고, 단순화된 UV-Vis 흡광도 곡선으로 염료 반응을 비교합니다. 미세 증거를 학습하는 학생들을 위해 제작되었으며, 실제 감정용이 아닙니다. ',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2개 시야', label: '분할 현미경 시야', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: '가시광선 스펙트럼 범위', icon: 'mdi:chart-bell-curve' },
        { value: '4개 클래스', label: '면, 양모, 폴리에스테르, 나일론', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: '편광자 회전각', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: '의류 섬유 비교 시 핵심 관찰 사항',
      items: [
        '가닥을 따른 자연스러운 변화를 염두에 두고 섬유 직경을 측정하거나 추정합니다.',
        '꼬임 방향, 표면 요철, 수질(medulla) 유사 구조, 소광제 입자 및 단면 특징을 관찰하여 기록합니다.',
        '편광을 사용하여 회전 시 복굴절 반응, 소광 행동 및 밝기 변화를 비교합니다.',
        '색상을 현미경으로 일차 비교한 후, 사건에 더 높은 감별력이 요구될 때 기기를 이용한 염료 성분을 비교합니다.',
        '분석 결과가 일치하는지, 다른지, 혹은 판정 불능인지 보고해야 하며, 명확한 근거 없이 유일한 의류 출처라고 단정 짓는 표현은 피해야 합니다.',
      ],
    },
    {
      type: 'table',
      headers: ['관찰 항목', '판별에 도움을 주는 부분', '한계'],
      rows: [
        ['직경 및 형태학', '섬유들이 물리적으로 유사한가？', '제조상의 편차로 인해 서로 다른 의류 간에도 특성이 겹칠 수 있습니다.'],
        ['꼬임 및 표면 세부 정보', '천연 또는 합성 섬유의 특성이 일치하는가？', '손상, 연신 및 슬라이드 제작 과정에서 외관이 변할 수 있습니다.'],
        ['편광 반응', '광학적 특성이 일치하는가？', '복굴절은 유목 특징 증거일 뿐이며, 개별적인 고유 표식은 아닙니다.'],
        ['UV-Vis 염료 스펙트럼', '염료 성분이 일치하는가？', '유사한 염료는 곡선이 가깝게 나타날 수 있으며, 추출 조건과 기기 설정이 중요합니다.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '일치성을 지지하는 요소',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '미지 섬유와 대조 섬유 간에 여러 독립적인 유목 특성이 일치하는 경우.',
          points: ['유사한 직경 범위', '동일한 일반 섬유 유형', '유사한 편광 특성', '중첩되는 염료 흡수 피크'],
        },
        {
          title: '배제를 지지하는 요소',
          icon: 'mdi:close-circle-outline',
          description: '동일 출처라면 일치해야 할 특징에서 명확하고 재현성 있는 차이가 나타나는 경우.',
          points: ['천연 섬유와 합성 섬유의 불일치', '꼬임 방향 또는 표면 형태학의 차이', '현저히 다른 염료 스펙트럼', '호환되지 않는 복굴절 반응'],
        },
      ],
    },
    {
      type: 'title',
      text: '시뮬레이션 모델 작동 방식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 모델은 직경, 꼬임 방향, 섬유 종류, 복굴절율, 염료 계열 및 UV-Vis 흡광도 지점을 포함하는 참조 데이터베이스를 바탕으로 작동합니다. 미지 섬유는 사용자가 직접 구성할 수 있어 고정된 예제가 아닌 설정된 가상 사건 프로필에 따라 일치도가 변화합니다. 현미경 화면은 초점과 편광자 각도에 반응하여 광학 장비 설정의 중요성을 체득할 수 있도록 돕습니다.'
    },
    {
      type: 'paragraph',
      html: '편광 조작은 특히 합성 섬유에서 유용합니다. 폴리에스테르와 나일론에는 높은 복굴절율이 적용되어 있어 편광자가 회전함에 따라 시각적인 밝기 변화가 뚜렷합니다. 천연 면과 양모도 반응하지만 시뮬레이션 효과는 더 은은하게 나타납니다. 이는 분자 배향성과 섬유 내부 구조가 광학 특성에 영향을 미친다는 물리적 법칙을 보여줍니다.'
    },
    {
      type: 'paragraph',
      html: 'UV-Vis 차트는 원리 이해를 돕기 위한 간이 그래프이며, 분광광도계를 완전히 대체하는 것은 아닙니다. 실제 미세 증거 감정 업무에서 염료 비교는 현미분광광도법, 박층 크로마토그래피, 염료 추출 화학, 표준 시료 검사 및 측정 불확도 평가를 필요로 합니다. 이 그래프는 현미경 아래에서 비슷해 보이는 두 섬유가 염료 화학 분석을 통해 어떻게 구별될 수 있는지를 학습하도록 설계되었습니다.'
    },
    {
      type: 'paragraph',
      html: '법의학 분석가는 섬유 분석 프로세스의 모든 단계를 문서화해야 합니다. 여기에는 상세한 사진 촬영, 측정값 기록, 모든 물리적 증거에 대한 보관 체인 유지가 포함됩니다. 시뮬레이터는 학생들이 법의학 실무에서 체계적인 문서화와 객관적인 비교의 중요성을 이해하는 데 도움이 됩니다. 다양한 설정을 조작함으로써 사용자는 광로, 샘플 두께 및 염료 농도가 스펙트럼 곡선과 물리적 외관에 어떻게 영향을 미치는지 배울 수 있습니다.',
    },
    {
      type: 'glossary',
      items: [
        { term: '미지 섬유 (Questioned fiber)', definition: '현장, 피해자, 용의자, 도구, 차량 등에서 회수되었으나 출처를 알 수 없는 섬유.' },
        { term: '대조 섬유 (Known fiber)', definition: '미지 샘플과의 비교를 위해 알려진 섬유 제품이나 대상으로부터 채취한 기준 섬유.' },
        { term: '복굴절 (Birefringence)', definition: '빛의 방향이나 편광에 따라 물질이 서로 다른 굴절률을 가지는 광학적 특성.' },
        { term: 'UV-Vis 스펙트럼', definition: '염료나 소재가 다양한 파장의 빛을 흡수하는 세기를 나타낸 그래프.' },
        { term: '유목 특성 (Class characteristic)', definition: '증거를 고유한 단일 출처가 아닌 가능성이 있는 소스 그룹과 관련지어 좁혀 나갈 수 있는 물리적 성질.' },
      ],
    },
    {
      type: 'tip',
      title: '학생들을 위한 결과 해석 팁',
      html: '높은 유사도 점수는 동일성(Identity)이 아닌 <strong>일치성(Consistency)</strong>으로 해석해야 합니다. 미세 증거는 현미경 검사, 화학 분석, 전이 맥락, 잔존성, 채취 방법 및 오염 제어가 모두 동일한 방향을 가리킬 때 가장 강력한 증명력을 가집니다.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: '결론을 증거력이 허용하는 한계 내로 유지할 것',
      html: '브라우저 시뮬레이터가 섬유 일치를 확정 지을 수는 없습니다. 공식 보고서는 출처 판정을 과장하지 않고 관찰 사실, 비교 기준, 한계 및 증명력 수준을 객관적으로 작성해야 합니다.',
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
