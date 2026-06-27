import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensic-glass-becke-line-simulator';
const title = '법의학 유리 굴절률 베케선 시뮬레이터';
const description = '침적액을 가열하여 굴절률을 일치시키고 밝은 하로가 사라지는 것을 관찰함으로써 법의학적 유리 비교를 위한 베케선 방법을 시뮬레이션합니다.';

const howTo = [
  {
    name: '감정 대상 유리 프로필 선택',
    text: '소다 석회 유리, 붕규산 실험실 유리, 납 크리스탈 유리, 강화 창유리 등 일반적인 유리 참조 프로필을 선택합니다.',
  },
  {
    name: '핫스테이지 온도 조정',
    text: '온도 슬라이더를 움직여 가상 침적액의 굴절률을 변경합니다.',
  },
  {
    name: '베케선 이동 관찰',
    text: '초점 방향 컨트롤을 사용하여 밝은 선이 안쪽으로 이동하는지, 바깥쪽으로 이동하는지 또는 일치점에서 거의 사라지는지 확인합니다.',
  },
  {
    name: '굴절률 차이 읽기',
    text: '액체 RI, 유리 RI, 델타 RI 및 일치 비율을 비교하여 굴절률이 일치할 때 하로가 희미해지는 이유를 이해합니다.',
  },
];

const faq = [
  {
    question: '법의학 유리 분석에서 베케선이란 무엇입니까？',
    answer: '베케선은 유리 파편과 침적액의 굴절률이 다를 때 그 경계 근처에서 관찰되는 밝은 하로(광륜)입니다. 초점을 맞추는 동안의 이동 방향은 어느 물질의 굴절률이 더 높은지 결정하는 데 도움이 됩니다.',
  },
  {
    question: '침적액을 가열하는 것이 왜 중요합니까？',
    answer: '많은 침적액은 온도가 상승함에 따라 굴절률이 감소합니다. 액체를 가열하여 굴절률을 유리와 일치시키면 경계 대비가 사라지고 파편 가장자리를 보기 어려워집니다.',
  },
  {
    question: '굴절률만으로 유리 출처를 식별할 수 있습니까？',
    answer: '아니요. RI는 클래스 비교 및 배제를 지원할 수 있지만, 법의학적 출처 해석은 원소 구성, 두께, 색상, 파단 맥락, 대조군, 불확실성 및 검증된 실험실 절차도 함께 고려합니다.',
  },
  {
    question: '베케선이 사라진다는 것은 무엇을 의미합니까？',
    answer: '해당 시뮬레이션 조건에서 액체와 유리의 굴절률이 매우 유사함을 의미합니다. 실제 현미경 관찰에서는 교정된 온도 제어 및 참조 물질을 통해 소실을 판단합니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: '침적액 내 유리 파편을 보여주는 가상 현미경 뷰',
    units: '온도 단위계',
    metric: '미터법',
    imperial: '야드파운드법',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: '참조 유리',
    sodaLime: '소다 석회 용기 유리',
    borosilicate: '붕규산 실험실 유리',
    leadCrystal: '장식용 납 크리스탈 유리',
    tempered: '강화 창유리',
    stageTemperature: '스테이지 온도',
    focusDirection: '초점 방향',
    focusRaised: '초점 올리기',
    focusLowered: '초점 내리기',
    liquidRi: '액체 RI',
    glassRi: '유리 RI',
    deltaRi: '델타 RI',
    matchMeter: 'RI 일치도',
    canvasHalo: '가시적인 베케 하로',
    canvasFocusSeparator: ' - ',
    canvasMatched: '가장자리 거의 일치함',
    interpMatched: '경계가 광학적 일치 상태에 가깝습니다. 실제 베케선 시험에서 이 영역은 하로가 희미해지고 파편 가장자리를 찾기가 가장 어려운 부분입니다.',
    interpGlassHigher: '유리의 굴절률이 더 높습니다. 초점을 올렸을 때 베케선 거동은 빛이 경계의 유리 쪽으로 집중됨을 나타냅니다.',
    interpLiquidHigher: '침적액의 굴절률이 더 높습니다. 온도가 액체 굴절률을 유리 쪽으로 가깝게 가져갈 때까지 하로는 액체 쪽으로 이동합니다.',
    disclaimer: '교육용 시뮬레이션 전용입니다. 실제 법의학 유리 비교에는 교정된 굴절률 장비, 알려진 표준, 불확실성 보고 및 자격을 갖춘 해석이 필요합니다.',
  },
  seo: [
    {
      type: 'title',
      text: '법의학 유리를 위한 베케선 굴절률 시험',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: '교학용 시뮬레이터',
      title: '이 유리 RI 시뮬레이터가 보여주는 것',
      html: '이 시뮬레이터는 액체 굴절률이 유리 굴절률에 가까워짐에 따라 침적 오일 속 유리 파편이 왜 더 잘 보이거나 덜 보이는지 보여줍니다. 이는 <strong>베케선 현미경법</strong>, 핫스테이지 RI 매칭 및 유리 비교 증거의 한계를 학습하는 법의학 전공 학생들을 위해 제작되었습니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n 유리 - n 액체', label: '표시된 굴절률 대비', icon: 'mdi:delta' },
        { value: '15-145 C', label: '핫스테이지 범위', icon: 'mdi:thermometer' },
        { value: '4', label: '유리 프로필', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: '변환 가능한 온도 단위', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: '실용적인 베케선 관찰 체크리스트',
      items: [
        '적절한 굴절률 액체에 완전히 잠긴 깨끗하고 작은 유리 파편을 사용하십시오.',
        '경계의 약간 위와 아래에 초점을 맞추고 밝은 선이 어느 쪽으로 이동하는지 관찰하십시오.',
        '선이 좁은 범위에서 희미해질 수 있으므로 예상 일치점 부근에서는 온도를 천천히 올리십시오.',
        '온도, 액체 유형, 교정 표준, 관찰된 일치 거동 및 불확실성을 기록하십시오.',
        'RI를 클래스 증거로 취급하십시오. 불일치는 배제할 수 있는 반면, 일치는 추가적인 맥락이 필요합니다.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'RI 비교가 뒷받침할 수 있는 것',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '굴절률은 통제된 조건 하에서 감정 대상 유리 파편을 알려진 참조 유리와 비교하는 데 도움을 줄 수 있습니다.',
          points: ['클래스 특성 비교', 'RI가 명확히 다를 때 배제', '원소 분석 전 스크리닝', '광학 경계 거동 교육'],
        },
        {
          title: 'RI만으로 증명할 수 없는 것',
          icon: 'mdi:alert-circle-outline',
          description: '일치하는 RI는 창유리, 병, 차량 창문 또는 사건 현장 출처를 고유하게 식별하지 못합니다.',
          points: ['그 자체만으로는 개별 출처 특정 불가능', '현장 맥락 없는 재구성 불가능', '대조군 대체 불가능', '브라우저 모델을 통한 법적 결론 도출 불가능'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['사용자 질문', '현미경 개념', '상세한 답변'],
      rows: [
        ['밝은 가장자리가 왜 이동하나요？', '두 굴절률 경계에서의 굴절.', '초점을 올리면 베케선은 굴절률이 더 높은 물질 쪽으로 이동하는 경향이 있습니다.'],
        ['가장자리가 왜 사라지나요？', '굴절률 일치.', '유리와 액체의 RI가 거의 같을 때 경계 대비가 감소하고 하로가 약해집니다.'],
        ['액체를 왜 가열하나요？', '열적 RI 계수.', '시뮬레이션된 액체 RI는 온도에 따라 감소하므로 다양한 유리 유형과의 매칭이 가능합니다.'],
        ['일치가 결정적인가요？', '클래스 증거의 한계.', '일치는 일관성만을 지지할 뿐이며, 많은 유리 물체가 유사한 RI를 공유할 수 있습니다.'],
      ],
    },
    {
      type: 'title',
      text: '시뮬레이션 모델 작동 방식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 모델은 각 유리 프로필에 기준 굴절률을 할당하고 침적액을 온도에 민감한 매체로 취급합니다. 핫스테이지가 가열됨에 따라 액체 지수는 고정된 열 계수만큼 감소합니다. 그런 다음 시뮬레이터는 유리 RI와 액체 RI의 차이를 계산하여 하로 밝기, 하로 오프셋, 일치 비율 및 해석 메시지를 제어하는 데 사용합니다.',
    },
    {
      type: 'paragraph',
      html: '시각적 현미경 필드는 의도적으로 정성적입니다. 모든 광학 경로를 광선 추적(ray-trace)하려고 시도하지 않습니다. 대신 필수적인 교육적 관계를 보존합니다. 즉, 강한 RI 대비는 밝은 경계를 생성하고, 낮은 대비는 희미한 경계를 생성하며, 일치점 부근에서는 유리 가장자리가 액체 속으로 사라지는 것처럼 보일 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '전문적인 법의학 실험실에서는 굴절률이 알려진 참조 유리 시료를 사용하여 핫스테이지의 온도를 교정합니다. 침적액의 굴절률은 온도가 상승함에 따라 예측 가능한 방식으로 변화하므로(일반적으로 dn/dT로 표시됨), 베케선이 소실되는 정확한 온도를 측정함으로써 과학자는 유리의 굴절률을 소수점 넷째 자리까지 계산할 수 있습니다. 이 시뮬레이터는 선형 방정식을 사용하여 이 온도 의존적 거동을 모델링하므로, 학생들이 가열 스테이지를 신중하게 제어하여 정확한 일치점을 찾는 연습을 할 수 있도록 지원합니다.',
    },
    {
      type: 'paragraph',
      html: '유리 증거를 분석할 때, 굴절률은 클래스 특성 증거로 간주됩니다. 사건 현장의 유리 파편과 용의자의 의류에서 검출된 유리의 굴절률이 일치하는 것이 공통된 출처와 일치할 수는 있지만, 많은 유리 물체가 동일한 굴절률 값을 공유하므로 출처를 고유하게 식별하지는 못합니다. 따라서 법의학 전문가는 일치하는 결과를 신중하게 해석해야 하며, 광학적 특성만으로는 결정적인 출처 특정이 불가능함을 강조하면서 일관성의 관점에서 일치를 보고해야 합니다.',
    },
    {
      type: 'glossary',
      items: [
        { term: '굴절률', definition: '진공과 비교하여 물질이 빛을 얼마나 강하게 굴절시키는지에 대한 척도.' },
        { term: '침적액', definition: '현미경 RI 비교 시 파편을 둘러싸기 위해 사용되는 알려진 광학적 특성을 가진 액체.' },
        { term: '베케선', definition: '두 투명 물질의 굴절률이 다를 때 경계에서 관찰되는 밝은 선 또는 하로.' },
        { term: '일치점', definition: '침적액과 유리가 거의 동일한 굴절률을 갖는 온도 영역.' },
        { term: '클래스 증거', definition: '품목을 단일 고유 출처가 아니라 가능한 출처 그룹과 연관시킬 수 있는 증거.' },
      ],
    },
    {
      type: 'tip',
      title: '학생을 위한 해석 팁',
      html: '유리 증거에서 명확한 RI 불일치는 제안된 출처를 배제할 수 있기 때문에 일치보다 더 강력한 경우가 많습니다. 일치도 유용하지만 그 강도는 모집단 데이터, 측정 정밀도, 원소 구성 및 사건 맥락에 따라 달라집니다.',
    },
    {
      type: 'proscons',
      title: '베케선 유리 RI 시험의 강점과 한계',
      items: [
        { pro: '신속하고 시각적이며 투명 물질 비교 교육에 탁월합니다.', con: '관찰자의 판단과 초점 기술이 선의 명백한 이동에 영향들 미칠 수 있습니다.' },
        { pro: '온도 매칭은 교정 시 유용한 정밀도로 RI를 추정할 수 있습니다.', con: '실제 작업에서는 열 제어, 액체 노화, 오염 및 표준 물질이 중요합니다.' },
        { pro: '광학적 특성이 분명히 다른 유리 파편을 배제하는 데 유용합니다.', con: '더 광범위한 분석 및 맥락적 증거 없이는 출처를 개별화할 수 없습니다.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: '법의학적 주의',
      title: '결론을 비례적으로 유지하십시오',
      html: '브라우저 베케선 시뮬레이션은 학습 보조 도구일 뿐 실험실 방법이 아닙니다. 공식적인 유리 증거 해석은 검증된 장비, 문서화된 절차, 교정 기록, 불확실성 추정치, 동료 검토 및 관할 권한에 적합한 보고 용어에 의존해야 합니다.',
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
