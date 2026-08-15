import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'time-of-death-algor-mortis-calculator';
const title = '사후경과시간 사냉 계산기 헨스게 노모그램';
const description = '직장 체온과 주변 환경 온도를 바탕으로 헨스게 이중 지수식 노모그램을 적용하여 사망 추정 시간을 산출합니다.';

const howTo = [
  { name: '직장 심부 체온 및 주변 온도 입력', text: '사건 현장에서 측정한 직장 심부 온도와 주변 환경 기온을 입력합니다.' },
  { name: '체중 및 환경 보정 계수 설정', text: '시신의 체중을 킬로그램 단위로 입력하고 착의 상태나 수중 침수 여부에 따른 보정 계수를 선택합니다.' },
  { name: '온도 측정 시각 지정', text: '온도를 측정한 정확한 시각을 입력하거나 현재 시각 버튼을 클릭합니다.' },
  { name: '사후경과시간 및 냉각 곡선 분석', text: '추정된 사후경과시간과 95퍼센트 신뢰구간의 사망 시간대 및 열역학적 곡선을 확인합니다.' }
];

const faq = [
  { question: '법의학에서 사냉이란 무엇입니까', answer: '사냉은 심장 박동 정지 후 체열 생성이 중단되어 시신 체온이 주변 환경 온도와 평형에 도달할 때까지 점진적으로 하강하는 물리적 현상입니다.' },
  { question: '선형 공식보다 헨스게 노모그램이 선호되는 이유는 무엇입니까', answer: '사망 초기 체온 안정기와 체중 및 착의 상태에 따른 비선형 이중 지수 냉각 특성을 정확하게 반영하기 때문입니다.' },
  { question: '체온 기반 사망 시각 추정의 정확도는 어느 정도입니까', answer: '통제된 표준 조건에서 첫 10시간 동안의 95퍼센트 통계적 신뢰 한계는 약 플러스마이너스 2.8시간입니다.' },
  { question: '사후 체온 안정기란 무엇입니까', answer: '사망 후 초기 1시간에서 3시간 동안 체표면이 먼저 냉각되는 동안 직장 심부 온도가 거의 떨어지지 않는 지연 기간을 의미합니다.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: '사후경과시간 추정 및 열 감쇠 노모그램',
    disclaimer: '본 계산기는 교육 및 학술 시뮬레이션 전용입니다. 공식적인 법의학적 감정은 사법 부검 및 시반 시강의 종합적 분석이 필수적입니다.',
    unitSystemLabel: '단위계',
    unitMetricLabel: '미터법',
    unitImperialLabel: '야드파운드법',
    presetsHeader: '표준 법의학 시나리오',
    presetCustom: '사용자 지정 설정',
    presetNakedCalm: '무풍 실내 나체 (20°C)',
    presetDressedIndoor: '실내 평상복 착용 (19.5°C)',
    presetWinterOutdoor: '겨울철 야외 환경 (4°C)',
    presetSubmergedWater: '정수 수중 침수 (12°C)',
    presetHeavyDuvet: '침대 두꺼운 거위털 이불 (18°C)',
    inputsHeader: '현장 측정값 및 환경 파라미터',
    rectalTempLabel: '직장 심부 체온',
    ambientTempLabel: '주변 환경 온도',
    bodyWeightLabel: '시신 체중',
    factorLabel: '환경 보정 계수',
    measurementTimeLabel: '체온 측정 시각',
    factorNaked: '무풍 공기 중 나체',
    factorLightClothes: '얇은 옷 1에서 2겹',
    factorStandardClothes: '평상복 3에서 4겹',
    factorHeavyWinter: '두꺼운 겨울 방한복',
    factorLightBlanket: '침대 얇은 담요',
    factorHeavyDuvet: '침대 두꺼운 우모 이불',
    factorStillWater: '정체된 수중에 침수',
    factorFlowingWater: '흐르는 차가운 물에 침수',
    factorWetClothing: '젖은 의복 및 바람',
    factorMovingAir: '선풍기 등 유동 공기',
    resultsHeader: '사후경과시간 분석 결과',
    estimatedPmiLabel: '사망 후 추정 경과시간',
    deathWindowLabel: '추정 사망 시간대',
    confidenceMarginLabel: '95퍼센트 신뢰구간',
    coolingPhaseLabel: '열역학적 단계',
    coolingRateLabel: '순간 열 손실률',
    glaisterEstimateLabel: '글레이스터 선형 공식 비교',
    chartHeader: '헨스게 이중 지수 냉각 궤적',
    chartXAxis: '사후 경과 시간',
    chartYAxis: '심부 체온',
    chartNowMarker: '측정 체온',
    chartPlateauMarker: '초기 체온 안정기',
    phasePlateau: '체온 안정기',
    phaseDescent: '지수 하강기',
    phaseEquilibrium: '열 평형 상태',
    phaseHyperthermia: '생전 고열 주의',
    hoursUnit: '시간',
    minutesUnit: '분',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: '초기화',
    nowBtn: '현재 시각',
    coreThermometerLabel: '심부 체온',
    baselineAmbientLabel: '환경 기준선',
    referenceBodyTempLabel: '정상 기준 체온'
  },
  seo: [
    { type: 'title', text: '사체 냉각의 열역학적 원리와 사후경과시간 추정', level: 2 },
    { type: 'paragraph', html: '사후경과시간(PMI)의 판정은 법의학 사망 원인 규명의 핵심 과제입니다. <strong>사냉(Algor Mortis)</strong>은 심박동 정지 이후 인체의 열 생산이 멈추면서 체온이 주변 환경 온도와 평형을 이룰 때까지 냉각되는 현상입니다. 직장 심부 체온 측정과 열역학적 모델을 결합하여 사망 시점을 과학적으로 역추산합니다.' },
    { type: 'diagnostic', variant: 'info', title: '시신 냉각의 물리적 거동', html: '시신의 체온 하강은 선형적으로 진행되지 않습니다. 초기 <em>체온 안정기</em>라 불리는 지연 구간을 거친 후 급격한 지수 감쇠 곡선을 나타냅니다.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: '정상 직장 기준 체온' },
      { value: '±2.8시간', label: '초기 10시간 95% 신뢰범위' },
      { value: '이중 지수식', label: '헨스게 수학적 모델' }
    ] },
    { type: 'title', text: '클라우스 헨스게의 이중 지수 공식', level: 3 },
    { type: 'paragraph', html: '과거에 사용되던 글레이스터 법칙은 시간당 0.83도 하강이라는 일률적인 가정을 적용했으나 체질량과 착의 상태의 단열 효과를 반영하지 못하는 한계가 있었습니다.' },
    { type: 'code', ariaLabel: '헨스게 공식', code: 'Q = (T_직장 - T_주변) / (37.2 - T_주변)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (체중^0.625 * 보정계수) - 0.0284' },
    { type: 'paragraph', html: '헨스게 교수가 정립한 이중 지수 방정식은 피부 표면 열전달과 내부 심부 장기의 열 관성을 복합적으로 계산하여 신뢰도 높은 추정 구간을 도출합니다.' },
    { type: 'title', text: '환경 및 의복 상태별 보정 계수', level: 3 },
    { type: 'paragraph', html: '열 방출 속도는 체표면적과 공기 유동 및 섬유 단열층에 따라 큰 편차를 보입니다.' },
    { type: 'table', headers: ['현장 상황', '보정 계수', '물리적 기전'], rows: [
      ['무풍 실내 나체', '1.0', '표준 복사 및 자연 대류 냉각'],
      ['얇은 옷 1에서 2겹', '1.1', '피부 대류 열 손실의 완만한 감소'],
      ['평상복 3에서 4겹', '1.2', '몸통 및 사지의 중간 수준 단열'],
      ['두꺼운 방한복', '1.4', '공기층 포획을 통한 강력한 단열'],
      ['침대 두꺼운 우모 이불', '1.8', '극히 높은 보온성으로 냉각 지연'],
      ['정체된 수중에 침수', '0.5', '물의 열전도율은 공기의 약 24배'],
      ['흐르는 차가운 물에 침수', '0.35', '강제 대류에 의한 급격한 열 흡수']
    ] },
    { type: 'title', text: '사후 냉각의 열역학적 단계 구분', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: '사후 체온 안정기', description: '사망 후 1에서 3시간 동안 체표면이 먼저 식는 동안 직장 심부 온도는 매우 서서히 떨어집니다.', points: ['중심부에서 외주부로 열구배 형성', '선형 공식이 과소평가하는 구간', '공식의 마이너스 0.25 항으로 보정'] },
      { title: '급격한 지수 하강기', description: '열구배 형성 후 체중에 비례하는 일정한 속도로 열이 방출되는 구간입니다.', highlight: true, points: ['가장 높은 분석 민감도', '통계적 오차가 가장 좁은 구간', '온도 측정법 적용의 최적 시간대'] }
    ] },
    { type: 'title', text: '현장 체온 측정 시 실무 준수사항', level: 3 },
    { type: 'list', items: [
      '<strong>직장 심부 체온 정확한 측정:</strong> 교정된 디지털 온도계 탐침을 직장 내 8에서 10cm 깊이로 삽입합니다.',
      '<strong>시신 근접 환경 온도 측정:</strong> 시신으로부터 10cm 이내의 위치에서 기온을 측정합니다.',
      '<strong>현장 환경 안정성 확인:</strong> 난방기 가동, 개방된 창문, 직사광선 유무를 기록합니다.',
      '<strong>의복 습기 여부 확인:</strong> 젖은 옷은 증발열로 인해 냉각 속도를 현저히 가속합니다.'
    ] },
    { type: 'summary', title: '방법론 요약', items: [
      '헨스게 노모그램은 국제적으로 표준화된 사후경과시간 온도 측정 기법입니다.',
      '단일 시각이 아닌 표준편차를 포함한 확률적 시간 구간으로 감정서를 작성해야 합니다.',
      '시강, 시반 및 근육의 초생체 반응 검사 결과를 종합하여 결론을 도출합니다.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
