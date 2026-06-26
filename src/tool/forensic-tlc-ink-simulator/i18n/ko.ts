import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-tlc-ink-simulator';
const title = '법과학 TLC 잉크 크로마토그래피 시뮬레이터';
const description = '용의자 필기 잉크의 박층 크로마토그래피(TLC)를 시뮬레이션하고, 용매 전선의 전개를 시각화하며, 색소 밴드를 분리하고 각 색소의 정확한 Rf 값을 계산합니다.';

const howTo = [
  {
    name: '의뢰된 잉크 또는 비교 펜 선택',
    text: '협박장에 사용된 잉크나 비교 대상 펜 프로필을 선택합니다. 각 잉크는 고정상에 대한 흡착력과 극성이 서로 다른 다양한 염료 성분을 포함하고 있습니다.',
  },
  {
    name: '전개 용매(이동상) 선택',
    text: '용매 시스템을 변경하여 용매 극성이 모세관 상승 현상 및 각 염료 밴드의 상대적 이동에 어떤 영향을 미치는지 관찰합니다.',
  },
  {
    name: 'TLC 판 전개',
    text: '전개 시간 슬라이더를 조절하여 용매 전선이 판을 따라 상승하는 동안 원선 위에 분리된 밴드가 나타나는 것을 확인합니다.',
  },
  {
    name: 'Rf 값 테이블 확인',
    text: '각 색소의 이동 거리와 용매 전선의 이동 거리를 비교합니다. 시뮬레이터는 색소 이동 거리를 용매 전선 이동 거리로 나누어 정확한 Rf 값을 산출합니다.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '박층 크로마토그래피에서 Rf 값은 무엇을 의미하나요?',
    answer: 'Rf는 전개율(retention factor) 또는 이동률을 뜻하며, 동일한 원선에서 출발한 용매 전선의 이동 거리에 대한 화합물(색소)의 이동 거리 비율입니다. 단위는 없으며 보통 0에서 1 사이의 값을 가집니다.',
  },
  {
    key: 'faq-2',
    question: 'TLC 분석만으로 두 잉크 샘플이 동일한 펜에서 나왔음을 증명할 수 있나요?',
    answer: '아니요. TLC는 염료의 분리 패턴이 일치하는지 여부(모순이 없는지)를 보여줄 뿐이며, 출처를 확정하기 위해서는 검증된 비교 분석법, 대조군, 문서화 및 전문가의 해석이 필요합니다.',
  },
  {
    key: 'faq-3',
    question: '용매를 바꾸면 왜 밴드 패턴이 달라지나요?',
    answer: '염료들은 고정상과 이동상 사이에 분배되는 거동이 서로 다릅니다. 선택한 이동상과 극성이 잘 맞는 염료는 용매에 의해 더 멀리 이동하므로 Rf 값이 증가합니다.',
  },
  {
    key: 'faq-4',
    question: '왜 원선(출발선)이 중요할까요?',
    answer: '용매 전선의 이동 거리와 색소의 이동 거리는 모두 원선에서부터 측정해야 합니다. 판의 맨 아래쪽 끝부터 측정하면 잘못된 Rf 값이 나옵니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: '전개 판이 들어있는 박층 크로마토그래피 전개조',
    rulerAria: '용매 전선과 색소 밴드를 측정하기 위한 가상 밀리미터 자',
    rulerMarks: '80,60,40,20,0',
    units: '단위계',
    metric: '미터법',
    imperial: '야드파운드법',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: '분',
    inkSample: '잉크 샘플',
    ransomNote: '의뢰된 협박장 잉크',
    bluePen: '압수된 청색 볼펜',
    blackPen: '압수된 흑색 볼펜',
    gelPen: '압수된 겔형 펜',
    solventSystem: '이동상',
    ethanolWater: '에탄올 / 물',
    butanolAcetic: '부탄올 / 아세트산',
    isopropanolAmmonia: '이소프로판올 / 암모니아',
    developmentTime: '전개 시간',
    frontDistance: '용매 이동',
    matchScore: '패턴 유사도',
    solventFront: '용매 전선',
    originLine: '원선 (출발선)',
    pigment: '색소 밴드',
    pigmentCyanDye: '청록색 염료',
    pigmentVioletDye: '보라색 염료',
    pigmentGrayCarrier: '회색 캐리어',
    pigmentNavyDye: '남색 염료',
    pigmentYellowDye: '노란색 염료',
    pigmentRedDye: '빨간색 염료',
    pigmentBlueDye: '파란색 염료',
    pigmentDarkBinder: '어두운 바인더',
    pigmentTealDye: '청록색 염료',
    pigmentMagentaDye: '자홍색 염료',
    pigmentGelBinder: '겔 바인더',
    distance: '거리',
    rfValue: 'Rf 값',
    disclaimer: '교육용 시뮬레이션입니다. 법과학적 잉크 비교 분석에는 실제 문서, 검증된 실험실 분석법, 표준 물질 및 자격을 갖춘 문서 감정인이 필요합니다.',
  },
  seo: [
    {
      type: 'title',
      text: '법과학 잉크 비교를 위한 박층 크로마토그래피(TLC)',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: '학습용 시뮬레이터',
      title: '이 TLC 잉크 시뮬레이터로 배울 수 있는 내용',
      html: '이 도구는 <strong>필기구 잉크의 박층 크로마토그래피</strong>를 통해 육안으로 보이는 하나의 잉크 선이 어떻게 여러 염료 밴드로 분리될 수 있는지 설명합니다. 법과학 전공자, 문서 감정을 학습하는 사람, 그리고 전개된 TLC 판에서 Rf 값이 계산되는 원리를 배우고자 하는 모든 사람을 위해 설계되었습니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d 밴드 / d 용매', label: '전개율(Rf) 계산식', icon: 'mdi:division' },
        { value: '4', label: '비교된 잉크 프로필', icon: 'mdi:pen' },
        { value: '3', label: '시뮬레이션된 이동상', icon: 'mdi:flask-outline' },
        { value: '2', label: '미터법 및 야드파운드법 표시', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: '정확한 TLC 측정을 위한 체크리스트',
      items: [
        '전개를 시작하기 전에 용매 수면보다 높은 위치에 연필로 원선을 표시하십시오.',
        '용매가 판의 상단 끝에 도달하기 전에 판을 꺼내십시오.',
        '용매는 쉽게 증발하여 확인하기 어려워지므로, 판을 꺼낸 즉시 용매 전선을 표시하십시오.',
        '색소 이동 거리와 용매 이동 거리는 반드시 동일한 원선에서부터 측정하십시오.',
        'Rf 값을 보고할 때는 전개 용매, 판의 종류, 전개 조건 및 대조군을 함께 명시하십시오.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'TLC로 입증(지원)할 수 있는 항목',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'TLC는 동일한 조건하에서 의뢰 잉크와 용의 잉크가 유사한 염료 분리 거동을 보이는지 확인해 줄 수 있습니다.',
          points: ['선별 비교', '염료 패턴의 시각화', 'Rf 값 문서화', '정밀 분석용 샘플 선정'],
        },
        {
          title: 'TLC 단독으로 입증할 수 없는 항목',
          icon: 'mdi:alert-circle-outline',
          description: 'TLC 단독 분석으로는 특정 펜 개체를 식별하거나, 문서 작성 시기를 추정하거나, 필자를 밝혀낼 수 없습니다.',
          points: ['동일한 펜이라는 단정 불가', '필자 식별 불가', '기본적으로 문서 작성 시기 추정 불가', '검증된 정밀 프로토콜을 대체할 수 없음'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['자주 묻는 질문', '관련 TLC 개념', '상세한 답변'],
      rows: [
        ['Rf 값은 어떻게 계산하나요?', '색소 이동 거리를 용매 전선 이동 거리로 나눕니다.', '출발선인 원선에서 두 거리를 각각 측정한 후 나눕니다. 결과값은 단위가 없습니다.'],
        ['잉크가 여러 색으로 분리되는 이유는 무엇인가요?', '서로 다른 염료들이 고정상 및 이동상에 대해 각기 다른 친화도(흡착력)를 가지기 때문입니다.', '한 줄의 필적이라도 이동 속도가 다른 여러 가지 색소 성분이 포함되어 있을 수 있습니다.'],
        ['두 개의 다른 펜이 동일한 TLC 패턴을 보일 수도 있나요?', '네, 잉크 제조 공식이 유사한 펜들은 매우 흡사한 크로마토그래피 패턴을 나타낼 수 있습니다.', '패턴의 일치는 두 샘플의 화학적 모순이 없음을 나타낼 뿐이며, 특정 한 자루의 펜으로 개체 식별되는 것을 의미하지는 않습니다.'],
        ['Rf 값이 변한 이유는 무엇인가요?', '전개 용매, 판의 종류, 습도, 챔버 포화도, 온도 및 스폿(점적) 크기가 이동 거리에 영향을 줍니다.', 'Rf 값은 모든 조건이 완벽히 제어되고 기록된 경우에만 상호 비교가 가능합니다.'],
      ],
    },
    {
      type: 'title',
      text: '시뮬레이터의 분리 모델링 방식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 모델은 용매 전선의 이동을 시간 경과에 따라 감속하는 모세관 상승 현상으로 처리하며, 각 염료는 이동하는 용매에 대한 친화도와 선택한 이동상과의 극성 일치도라는 두 가지 단순화된 속성에 따라 Rf 값을 할당받습니다. 이는 분석기기를 이용한 화학 정밀 분석은 아니며 교육 목적으로 기획되었지만, 용매가 먼저 이동하고 염료가 상 사이에서 분배되며 Rf 값은 측정된 이동 거리로부터 계산된다는 핵심 원리를 학습할 수 있게 해 줍니다.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stationary phase', definition: 'TLC 판 위에 도포된 코팅 물질(대개 실리카겔)로, 화합물과 상호작용하여 화합물의 이동 속도를 늦추는 역할을 합니다.' },
        { term: 'Mobile phase', definition: '판을 따라 위로 상승하며 염료 성분을 함께 나르는 전개 용매 시스템입니다.' },
        { term: 'Origin line', definition: '전개하기 전에 잉크 샘플을 점적하는 곳에 연필로 그어놓은 선입니다.' },
        { term: 'Solvent front', definition: '판을 전개조에서 꺼내기 전까지 이동상이 도달한 가장 높은 지점입니다.' },
        { term: 'Rf value', definition: '전개율(retention factor)로, 화합물 이동 거리를 용매 전선 이동 거리로 나눈 비율 값입니다.' },
      ],
    },
    {
      type: 'tip',
      title: '실무적 감정 팁',
      html: '법과학 문서 감정 업무에서 크로마토그램의 "불일치"는 후보 펜의 잉크 공식을 확실하게 배제할 수 있으므로 매우 유용합니다. 반면 TLC 패턴의 "일치"는 해당 조건하에서 화학적 모순이 없음을 말해줄 뿐이며, 반드시 동일한 펜에서 기록되었다는 귀속적 결론을 보장하지는 않습니다.',
    },
    {
      type: 'proscons',
      title: 'TLC 잉크 비교의 장점과 한계',
      items: [
        { pro: '빠르고 저렴하며 잉크 염료 분리 거동을 시각적, 직관적으로 파악할 수 있습니다.', con: '문서에서 소량의 샘플을 떼어내야 하므로 일반적으로 destructive(파괴적) 분석입니다.' },
        { pro: 'Rf 값을 활용하면 의뢰 샘플과 비교 샘플을 구조화된 방식으로 쉽게 비교할 수 있습니다.', con: '용매, 판, 습도, 전개 온도 조건이 조금만 달라져도 Rf 값이 어긋납니다.' },
        { pro: '더 정밀한 분석 단계로 넘어가기 전의 선별 검사법으로 매우 유용합니다.', con: '보다 광범위한 법적 증거가 뒷받침되지 않는 한, 특정 펜이라는 고유 출처 확정은 불가합니다.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: '법과학적 주의 사항',
      title: '잉크 크로마토그래피 분석의 가치를 과대평가하지 마십시오',
      html: '웹 브라우저 시뮬레이션은 종이 재질, 잉크 경년 변화, 추출 화학, 판의 품질, 오염, 혹은 기기 분석에 의한 확인 시험 등을 대신할 수 없습니다. 이 시뮬레이터는 측정의 원리와 해석상의 한계를 학습하는 용도로만 사용하고, 실제 감정 시에는 검증된 사법 문서 감정 분석법에 의존하십시오.',
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
