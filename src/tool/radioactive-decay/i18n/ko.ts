import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'radioactive-decay-half-life-calculator';
const title = '방사성 붕괴 반감기 계산기';
const description = '실제 동위원소, 반감기 공식, 확률적 원자 필드, 남은 양, 상대 방사능으로 방사성 붕괴를 시뮬레이션합니다.';

const howTo = [
  { name: '동위원소 선택', text: '탄소-14, 요오드-131, 우라늄-238, 테크네튬-99m, 라돈-222 중에서 시작하세요. 각 프리셋에는 현실적인 반감기와 대표적인 과학적 사용 맥락이 들어 있습니다.' },
  { name: '시료와 시간 설정', text: '표시할 원자 수를 조정하고 시간을 이동해 남은 비율이 반감기의 지수 법칙을 어떻게 따르는지 확인합니다.' },
  { name: '정확한 계산과 원자 단위의 우연성 비교', text: '결정론적 결과를 기대값으로 보고, 원자 필드에서 작은 시료가 이론 곡선 주변에서 흔들리는 이유를 살펴봅니다.' },
  { name: '방사능 해석', text: '방사능은 붕괴하지 않은 핵의 수와 같은 비율로 줄어들기 때문에, 초기 방사선률 대비 얼마나 남았는지 볼 수 있습니다.' },
];

const faq = [
  { question: '반감기란 무엇인가요?', answer: '반감기는 시료 안의 불안정한 원자핵 절반이 평균적으로 붕괴하는 데 걸리는 시간입니다. 한 반감기 뒤에는 50%, 두 반감기 뒤에는 25%, 세 반감기 뒤에는 12.5%가 남습니다.' },
  { question: '원자 필드가 정확한 비율과 항상 맞지 않는 이유는 무엇인가요?', answer: '방사성 붕괴는 확률적입니다. 공식은 큰 시료의 기대 비율을 주고, 원자 필드는 개별 원자에 무작위 임계값을 부여해 시뮬레이션합니다.' },
  { question: '방사능 표시가 남은 원자 수와 같은 뜻인가요?', answer: '하나의 동위원소에서는 방사능이 붕괴하지 않은 핵의 수에 비례합니다. 원자가 30% 남으면 순간 방사능도 약 30%입니다.' },
  { question: '탄소 연대 측정에 사용할 수 있나요?', answer: '개념 이해에는 사용할 수 있습니다. 실제 실험실 연대 측정은 보정 곡선, 오염, 시료 준비도 함께 고려합니다.' },
  { question: '모든 동위원소가 하나의 안정한 생성물로 붕괴하나요?', answer: '항상 그렇지는 않습니다. 여러 딸핵종을 거치는 붕괴 사슬도 있습니다. 이 도구는 부모 동위원소의 반감기를 모델링합니다.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: '동위원소',
    sampleAtoms: '시료 원자',
    elapsedTime: '경과 시간',
    halfLife: '반감기',
    remaining: '남음',
    decayed: '붕괴됨',
    activity: '상대 방사능',
    timeUnit: '시간 단위',
    expectedCurve: '예상 곡선',
    atomField: '원자 필드',
    presetUse: '주요 용도',
    oneHalfLife: '1 반감기',
    twoHalfLives: '2 반감기',
    fourHalfLives: '4 반감기',
    custom: '사용자 설정',
    liveAtoms: '활성 원자',
    decayedAtoms: '붕괴한 원자',
    resetSeed: '새 원자 패턴',
  },
  seo: [
    { type: 'title', text: '방사성 반감기 계산기: 남은 원자, 방사능, 동위원소 예시', level: 2 },
    { type: 'paragraph', html: '이 방사성 붕괴 계산기는 불안정한 동위원소가 일정 시간이 지난 뒤 얼마나 남는지 추정합니다. 반감기 공식, 실제 동위원소 계산, 남은 부모핵, 붕괴한 핵, 방사능 감소를 찾는 검색 의도에 맞춰 구성되어 있습니다.' },
    { type: 'paragraph', html: '사용 공식은 <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>입니다. <strong>N0</strong>는 초기 부모핵 수, <strong>N(t)</strong>는 시간 <strong>t</strong> 뒤의 기대 잔량, <strong>T1/2</strong>는 반감기입니다.' },
    { type: 'table', headers: ['경과 시간', '계수', '남은 부모핵', '상대 방사능'], rows: [['0 반감기', '(1/2)^0', '100%', '100%'], ['1 반감기', '(1/2)^1', '50%', '50%'], ['2 반감기', '(1/2)^2', '25%', '25%'], ['3 반감기', '(1/2)^3', '12.5%', '12.5%'], ['5 반감기', '(1/2)^5', '3.125%', '3.125%'], ['10 반감기', '(1/2)^10', '0.098%', '0.098%']] },
    { type: 'title', text: '동위원소 예시와 결과 해석', level: 3 },
    { type: 'table', headers: ['동위원소', '대략적인 반감기', '주요 용도', '결과의 의미'], rows: [['탄소-14', '5,730년', '방사성 탄소 연대 측정', '한때 생물이었던 물질에 남은 탄소-14 방사능.'], ['요오드-131', '8.02일', '의학 치료와 핵 사고', '며칠 동안 방사능이 얼마나 빠르게 줄어드는지.'], ['테크네튬-99m', '6.01시간', '진단 영상', '임상 하루 안에 유용한 의학적 방사능이 감소하는 이유.'], ['우라늄-238', '44.7억 년', '지질 연대 측정', '긴 수명의 동위원소가 지구 역사 규모에서 측정 가능한 이유.'], ['라돈-222', '3.82일', '실내 방사선', '기체 노출원이 어떻게 변하는지.']] },
    { type: 'paragraph', html: '하나의 부모 동위원소에서는 방사능이 붕괴하지 않은 핵 수에 비례합니다. 원자 필드는 개별 붕괴의 무작위성을 보여 주고, 큰 시료에서는 매끄러운 지수 곡선에 가까워집니다.' },
    { type: 'paragraph', html: '이 모델은 하나의 반감기로 부모 동위원소를 다룹니다. 실제 측정에는 검출기 효율, 배경 방사선, 분기비, 딸핵종, 생물학적 배출, 화학적 형태, 차폐, 보정 곡선이 필요할 수 있습니다. 의료 지시, 선량 평가, 실험실 분석을 대체하지 않습니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
