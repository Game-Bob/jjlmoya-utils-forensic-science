import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'fire-pattern-origin-analyzer';
const title = '화재 패턴 발화지점 분석기';
const description = 'V자 패턴, 심층 탄화, 그을음 그림자, 클린번 지표를 평면도에 매핑한 후 화재 확산 벡터를 투영하여 가장 가능성 높은 발화 영역을 추정합니다.';

const howTo = [
  {
    name: '현장 평면도 가져오기',
    text: '증거 벡터를 배치하기 전에 평면도 이미지를 작업 공간으로 드래그하거나 디스크에서 불러옵니다.',
  },
  {
    name: '클릭하여 방사형 증거 선택기 열기',
    text: '연소 흔적 위에 포인터를 놓고 상황별 방사형 메뉴를 열어 지도에서 직접 지표 유형을 선택합니다.',
  },
  {
    name: '드래그하여 벡터 미세 조정 및 수렴 관찰',
    text: '캔버스 스냅 기능으로 각 전파 벡터를 확장하고 증거가 축적됨에 따라 확률 필드가 실시간으로 재계산되는 것을 관찰합니다.',
  },
  {
    name: '기술 스냅샷 내보내기',
    text: '추후 검토를 위해 발화지점 좌표, 신뢰도, 분산, 레이어 상태, 전체 벡터 세트를 포함한 구조화된 보고서를 생성합니다.',
  },
];

const faq = [
  {
    question: '연소 패턴으로 화재가 시작된 정확한 지점을 증명할 수 있나요?',
    answer: '아니요. 화재 패턴은 발화지점 가설을 생성하고 검증하는 데 도움이 될 수 있지만, 환기, 진압, 연료 부하, 플래시오버, 화재 후 교란으로 인해 패턴이 왜곡될 수 있습니다. 실제 발화지점 판정에는 체계적인 조사가 필요합니다.',
  },
  {
    question: '화재 조사에서 V자 패턴이 중요한 이유는 무엇인가요?',
    answer: 'V자 패턴은 종종 수직 표면에서 화염의 상향 및 외향 확산을 반영합니다. 더 낮은 발화 영역을 가리킬 수 있지만, 결론을 내리기 전에 다른 증거와 비교해야 합니다.',
  },
  {
    question: '심층 탄화는 무엇을 나타내나요?',
    answer: '심층 탄화는 더 긴 가열 시간, 더 높은 열 유속, 또는 연료 효과를 나타낼 수 있습니다. 유용한 맥락이지만, 재료마다 탄화 속도가 다르기 때문에 자동으로 발화지점을 표시하지는 않습니다.',
  },
  {
    question: '왜 하나의 화살표 대신 여러 벡터를 사용하나요?',
    answer: '단일 패턴은 오해를 불러일으킬 수 있습니다. 여러 독립 벡터는 하나의 손상된 벽, 하나의 연료 패키지, 또는 하나의 환기 경로의 영향을 줄입니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: '화재 확산 벡터를 그리기 위한 인터랙티브 법과학 작업 공간',
    vPattern: 'V자 패턴',
    deepChar: '심층 탄화',
    sootShadow: '그을음 그림자',
    cleanBurn: '클린번',
    loadPlan: '평면도 불러오기',
    generateReport: '보고서 생성',
    pointerLabel: '포인터',
    resetVectors: '초기화',
    estimatedOrigin: '추정 발화지점',
    visibleLayers: '표시 중인 증거 레이어',
    vectorsLabel: '벡터',
    confidenceLabel: '신뢰도',
    varianceLabel: '분산',
    modeLabel: '모드',
    guideSummary: '이 도구 사용 방법',
    flowPanelTitle: '워크플로우',
    legendPanelTitle: '증거 범례',
    readoutPanelTitle: '결과 패널',
    flow1Kicker: '1단계',
    flow1Icon: '1',
    flow1Title: '불러오기',
    flow1Text: '현장 평면도 업로드',
    flow2Kicker: '2단계',
    flow2Icon: '2',
    flow2Title: '단서 선택',
    flow2Text: '연소 흔적 클릭',
    flow3Kicker: '3단계',
    flow3Icon: '3',
    flow3Title: '벡터 드래그',
    flow3Text: '화재 방향 조준',
    flow4Kicker: '4단계',
    flow4Icon: '4',
    flow4Title: '결과 확인',
    flow4Text: '하단 패널 확인 및 내보내기',
    basicsTitle: '가장 먼저 해야 할 일',
    basicsIntro: '명확한 평면도를 불러오고, 정당화할 수 있는 패턴만 표시하며, 동일한 단서를 반복하지 않고 다양한 표면에 벡터를 분산시키세요.',
    indicatorsTitle: '각 증거 유형의 의미',
    vPatternShort: '벽 연소가 위쪽으로 열림',
    vPatternExplain: 'V자 패턴은 벽에서 흔히 볼 수 있는 위쪽 및 바깥쪽 연소 형태입니다. 열과 화염이 더 낮은 영역에서 상승했음을 시사할 수 있지만, 정확한 발화지점의 자동적 증명은 아닙니다.',
    deepCharShort: '더 강하게 또는 더 오래 탄 영역',
    deepCharExplain: '심층 탄화는 한 영역의 재료가 주변보다 더 심하게 연소, 탄화 또는 소실된 것처럼 보이는 것입니다. 더 길거나 더 강한 가열을 나타낼 수 있지만, 연료 유형과 재료 두께가 크게 영향을 미칩니다.',
    sootShadowShort: '연기가 차단되거나 방향 전환됨',
    sootShadowExplain: '그을음 그림자는 물체, 표면 또는 기류가 그을음 침착 방식을 변경했음을 시사하는 보호되거나 다르게 어두워진 영역입니다. 무엇이 있었는지 또는 연기가 어떻게 이동했는지 재구성하는 데 도움이 됩니다.',
    cleanBurnShort: '열 또는 기류로 인한 그을음 감소',
    cleanBurnExplain: '클린번은 열, 환기 또는 직접적인 화염 노출로 인해 그을음이 더 밝게 보이거나 제거되거나 없는 영역입니다. 유용하지만, 모든 깨끗한 영역이 발화지점을 표시하는 것은 아닙니다.',
    resultsTitle: '결과 읽는 방법',
    resultsIntro: '하단 패널을 매핑의 빠른 상태 확인으로 사용하고, 최종 법과학적 결론으로 사용하지 마세요.',
    resultsPoint1: '활성화된 증거 선의 개수.',
    resultsPoint2: '활성 벡터들의 일치 강도.',
    resultsPoint3: '발화지점 영역의 남은 범위.',
    resultsPoint4: '도구가 다음에 기대하는 조치.',
    awaitingVector: '벡터 대기 중',
    selectIndicator: '지표 선택',
    refiningVector: '벡터 미세 조정 중',
    needsMoreVectors: '더 많은 벡터 필요',
    wideArea: '넓은 발화지점 영역',
    focusedArea: '좁혀진 발화지점 영역',
    dropPlan: '평면도 이미지를 드롭하거나 클릭하여 업로드',
    needsMoreVectorsText: '최소 2개의 명확한 방향 화살표를 그리세요. 3개 이상의 독립적인 관찰이 있으면 일반적으로 수렴을 훨씬 더 쉽게 해석할 수 있습니다.',
    wideAreaText: '투영된 선이 교차하지만, 분산이 여전히 넓습니다. 실제 현장에서는 발화지점을 좁히기 전에 환기, 연료 부하, 진압 효과, 목격자 정보를 비교하세요.',
    focusedAreaText: '벡터가 컴팩트한 영역으로 수렴합니다. 이를 발화지점 가설 개발을 위한 강력한 교육적 신호로 간주하고, 최종 법과학적 결론으로 간주하지 마세요.',
    disclaimer: '교육용 시뮬레이션 전용입니다. 실제 화재 발화지점 및 원인 조사는 인정된 지침, 현장 안전 프로토콜, 문서화 표준 및 자격을 갖춘 전문가 검토를 따라야 합니다.',
  },
  seo: [
    {
      type: 'title',
      text: '연소 패턴 벡터를 통한 인터랙티브 화재 발화지점 분석',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: '교육용 시뮬레이터',
      title: '이 화재 패턴 발화지점 분석기가 가르치는 것',
      html: '이 브라우저 도구는 조사관이 물리적 화재 패턴으로부터 가능성 있는 <strong>발화지점 영역</strong>으로 추론하는 방법을 보여줍니다. 사용자는 가시적 증거를 매핑하고, 방향성 확산 벡터를 그리고, 투영된 선이 수렴하거나 분산되는 것을 관찰합니다. 이 모델은 의도적으로 교육적이며, 기하학과 패턴 해석을 가르치며, 법적 원인 판정을 하는 것이 아닙니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4개 레이어', label: 'V자 패턴, 탄화, 그을음, 클린번', icon: 'mdi:layers-triple' },
        { value: '2D 평면도', label: '구조적 방 지도', icon: 'mdi:floor-plan' },
        { value: '3개 이상 화살표', label: '권장 관측 수', icon: 'mdi:vector-line' },
        { value: '0~100%', label: '신뢰도 입력', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: '화재 패턴 해석을 위한 규율 있는 워크플로우',
      items: [
        '패턴을 해석하기 전에 안전, 현장 보존, 사진, 스케치 및 체계적 문서화로 시작하세요.',
        'V자형 손상, 탄화 깊이, 그을음 침착, 클린번을 하나의 가정으로 축소하지 않도록 패턴 유형을 분리하세요.',
        '물리적 패턴이 방어 가능한 전파 방향을 뒷받침하는 곳에만 방향 지표를 그리세요.',
        '가장 극적인 손상에 의존하지 말고 독립적 관찰 간의 수렴을 찾으세요.',
        '추정 발화지점 영역을 가설로 사용하여 연료, 발화원, 환기, 전기적 증거 및 목격자 진술과 대조하세요.',
      ],
    },
    {
      type: 'table',
      headers: ['패턴', '잠재적 가치', '주요 주의사항'],
      rows: [
        ['V자 패턴', '더 낮은 영역에서 상향 및 외향 화염 전파를 시사할 수 있음.', '환기, 플래시오버, 벽 기하학, 진압 활동에 의해 변경될 수 있음.'],
        ['심층 탄화', '지속적인 열 노출 또는 강한 연소를 나타낼 수 있음.', '연료 유형과 재료 두께가 탄화 깊이에 크게 영향.'],
        ['그을음 그림자', '보호 영역, 물체 배치 또는 기류 효과를 드러낼 수 있음.', '가구 이동이나 진압 활동이 해석을 변경할 수 있음.'],
        ['클린번', '고열, 환기 또는 연소 후반 단계를 보여줄 수 있음.', '최초 발화 물질을 자동으로 식별하지 않음.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '더 나은 발화지점 가설',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '최상의 가설은 여러 관측을 동시에 설명합니다.',
          points: ['독립 벡터가 수렴함', '증거가 알려진 환기 경로와 일치함', '연료 패키지가 고려됨', '대체 발화지점을 적극적으로 검증 중'],
        },
        {
          title: '취약한 발화지점 가설',
          icon: 'mdi:alert-circle-outline',
          description: '취약한 가설은 왜곡 요인을 검증하지 않고 단일 패턴에 의존하는 경우가 많습니다.',
          points: ['하나의 극적인 탄화 영역을 증거로 취급함', '플래시오버가 무시됨', '진압 손상이 문서화되지 않음', '발화원 증거가 가정됨'],
        },
      ],
    },
    {
      type: 'title',
      text: '벡터 모델 작동 방식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '각 화살표는 화재 전파의 투영선으로 처리됩니다. 추정기는 쌍별 선 교차점을 계산하고, 합리적인 평면도 경계 내에 있는 점을 필터링하고, 남은 교차점을 평균화하여 해당 교차점의 분산에 기반한 반경을 보고합니다. 여러 벡터에서 반경이 작으면 더 강한 수렴 신호가 생성됩니다. 교차 모델은 각 증거 마커에서 연장되는 두 선의 매개변수 방정식을 해결하여 작동합니다. 두 벡터가 공유 영역을 가리키면 이론적 교차점이 평균화 풀에 하나의 좌표를 기여합니다. 더 많은 독립 벡터가 참여할수록 추정기는 주요 클러스터에서 멀리 떨어진 교차점을 더 많이 걸러내어 방향이 잘못되었거나 잘못 해석되었을 수 있는 단일 관측의 영향을 효과적으로 줄일 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '이 기하학적 접근 방식은 교실 스케치 연습을 반영합니다. 학생들이 다양한 표면과 패턴 유형의 관찰을 통해 발화지점 분석이 개선되는 이유를 이해하는 데 도움이 됩니다. 또한 근본적인 해석이 미흡하더라도 화살표가 교차할 수 있는 일반적인 문제를 드러냅니다. 따라서 수학적 중심이 화재 과학 판단을 대체해서는 안 됩니다. 실제 조사에서 실무자는 어떤 좌표를 가능성 있는 발화점으로 취급하기 전에 플롯된 결과를 환기 경로, 연료 부하 분포, 구조적 손상 및 목격자 진술과 비교합니다. 이 도구는 추정 지점 옆에 분산을 표시하고, 밀집된 교차 클러스터는 그것을 생성한 관측의 질만큼만 강하다는 것을 사용자에게 상기시킴으로써 이러한 습관을 장려합니다.',
    },
    {
      type: 'paragraph',
      html: '기본적인 교차 논리를 넘어, 추정기는 방 평면도에서 멀리 떨어진 교차점이 제외되도록 경계 제약을 적용합니다. 이는 이상치가 평균 중심을 불가능한 위치로 끄는 것을 방지합니다. 최종 반경은 남은 교차 좌표의 표준 편차를 나타내며, 활성 벡터가 얼마나 일관되게 일치하는지에 대한 직접적인 척도를 제공합니다. 평면도 범위의 10% 미만의 반경은 강한 수렴을 나타냅니다. 평면도의 4분의 1을 초과하는 반경은 증거가 아직 집중된 발화점을 뒷받침하지 않으며 결론을 내리기 전에 더 많거나 더 나은 관측이 필요함을 나타냅니다.',
    },
    {
      type: 'glossary',
      items: [
        { term: '발화지점 영역', definition: '이용 가능한 증거가 화재가 시작되었음을 시사하는 일반적인 영역.' },
        { term: 'V자 패턴', definition: '종종 수직 표면의 위쪽과 바깥쪽 손상으로 나타나는 화재 패턴.' },
        { term: '클린번', definition: '높은 열이나 기류 조건에서 그을음이 연소되거나 침착되지 않아 발생한 더 밝거나 깨끗한 영역.' },
        { term: '그을음 그림자', definition: '물체, 기류, 열 노출에 대한 정보를 보존할 수 있는, 보호되거나 다르게 침착된 그을음 영역.' },
        { term: '벡터 수렴', definition: '투영된 방향 지표들이 공통 영역 주변으로 모여드는 것.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: '법과학적 주의',
      title: '수렴을 확신으로 바꾸지 마세요',
      html: '밀집된 교차점 클러스터는 관측이 유효할 때만 유용합니다. 실제 조사에서는 환기, 플래시오버, 연료 패키지, 전기 시스템, 가전제품 증거, 목격자 진술, 진압 활동, 현장 교란을 고려해야 합니다.',
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
