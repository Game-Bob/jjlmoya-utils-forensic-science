import { content as enContent } from './en';
import { createDnaLocale } from '../localize';

export const content = createDnaLocale({
  locale: 'ko',
  slug: 'dna-profile-match-probability-lab',
  title: 'DNA 프로필 일치 확률 실험실',
  description: '대립유전자 빈도와 하디-바인베르크 규칙이 DNA 프로필의 무작위 일치 확률을 어떻게 만드는지 학습합니다.',
  ui: {
    ...enContent.ui,
    controls: '프로필 설정', controlKicker: '프로필 만들기', controlHelper: '학습용 프리셋을 사용하거나 각 로커스를 열어 대립유전자와 집단 빈도를 수정하세요.', presets: '학습용 프리셋', presetbalanced: '균형형', presethomozygote: '동형접합', presetclassroom: '간단한 수업', loci: '로커스', locus: '로커스', locusName: '로커스 이름', alleleA: '대립유전자 A', alleleB: '대립유전자 B', frequencyA: '빈도 A(%)', frequencyB: '빈도 B(%)', removeLocus: '로커스 삭제', addLocus: '로커스 추가', disclaimer: '교육용 시뮬레이터입니다. 사람을 식별하거나 사건을 검증하지 않으며 검사실 계산을 대신하지 않습니다.', sceneKicker: '신호 트레이스', electropherogram: '프로필 트레이스', sceneNote: '각 로커스에 입력한 두 대립유전자를 두 개의 피크로 표시합니다. 높이는 빈도의 시각적 단서일 뿐 검사실 신호가 아닙니다.', peakHeight: '피크 높이는 입력 빈도에 비례', results: '확률 결과', resultKicker: '무작위 일치 확률', locusBreakdown: '로커스별 계산', genotype: '유전자형', rule: '규칙', frequency: '유전자형 빈도', badgeNeedsData: '데이터 필요', badgeExploratory: '탐색적', badgeCalculated: '계산된 모델', needsData: '각 로커스에 두 대립유전자와 0~100%의 빈도를 입력하세요. 한 쌍의 빈도 합은 100%를 넘을 수 없습니다.', exploratoryResult: '이 작은 프로필은 방법을 배우는 데 유용합니다. 로커스를 늘리면 더 희귀해질 수 있지만 사건 결론이 되지는 않습니다.', calculatedResult: '입력한 빈도와 단순화된 독립성 가정으로 곱을 계산합니다.', notCalculated: '계산되지 않음', completeFields: '결과를 보려면 프로필 필드를 완성하세요.', ofRandomProfiles: '이 학습 모델에서 무작위 프로필 중', missingValue: '이름 없는 로커스', pattern: '프로필 패턴', calculation: '계산', meaning: '의미', homozygote: '같은 대립유전자 2개', heterozygote: '서로 다른 대립유전자 2개', independentLoci: '여러 독립 로커스', homozygoteMeaning: '대립유전자 빈도를 자기 자신과 곱합니다.', heterozygoteMeaning: '두 대립유전자 빈도를 곱한 뒤 두 배로 합니다.', independentLociMeaning: '각 로커스가 결합 프로필 빈도에 기여합니다.',
  },
  seo: {
    calculatorTitle: 'DNA 프로필 무작위 일치 확률 계산기',
    intro: '이 DNA 프로필 확률 실험실은 학생과 관심 있는 독자가 단순화된 집단 유전학 모델에서 작은 상염색체 STR 프로필이 확률로 바뀌는 과정을 살펴보도록 돕습니다. 각 로커스에 두 대립유전자와 빈도를 입력하면 하디-바인베르크 규칙을 적용하고 로커스 빈도를 곱해 학습용 무작위 일치 확률을 보여 줍니다.',
    methodTitle: '유전자형 규칙의 작동 방식',
    method: '입력한 대립유전자는 트레이스에, 각 유전자형 빈도는 표에 표시되어 계산 과정을 확인할 수 있습니다. 동형접합은 p², 이형접합은 2pq를 사용한 뒤 로커스 값을 곱합니다. 프리셋은 공식 집단 데이터베이스가 아니라 학습을 위한 합성 값입니다.',
    populationTitle: '집단 빈도가 중요한 이유',
    population: '대립유전자 빈도는 집단 데이터베이스에서 얻은 추정치입니다. 참조 집단, 표본 추출, 데이터베이스 규모, 친족 관계, 집단 하위구조와 검증이 해석에 영향을 줍니다. 입력 빈도가 관련 집단을 나타내고 프로필이 단일 출처이며 로커스가 독립이라는 가정이 모두 맞을 때만 곱셈 결과를 무관한 무작위 사람들에서의 빈도로 해석할 수 있습니다.',
    interpretation: '이 결과는 입력한 값에 따른 조건부 설명입니다. 특정 인물의 선택, 친족 관계, 혼합 프로필 또는 데이터베이스 검색의 영향은 고려하지 않습니다. 따라서 학습 예시는 집단, 방법과 불확실성을 함께 보아야 하며 단독 결론으로 사용해서는 안 됩니다.',
    limitsTitle: '교육적 한계',
    limits: '실제 사건에서는 사람을 선택한 방법, 데이터베이스, 혼합 프로필, 집단 하위구조와 전문가 해석도 기록해야 합니다. 이 도구는 전기영동도를 분석하거나 하위구조를 보정하거나 우도비를 계산하거나 DNA 데이터베이스를 검색하지 않습니다.',
    tipTitle: '판정이 아닌 모델로 사용하세요',
    tip: '작은 무작위 일치 확률은 신원이나 유죄를 의미하지 않습니다. 산술을 설명하는 데 사용하고 데이터 출처, 집단, 가정과 불확실성을 계속 표시하세요.',
    list: ['<strong>하나의 집단:</strong> 비교할 수 없는 데이터베이스의 빈도를 섞지 마세요.', '<strong>가정 표시:</strong> 무관한 사람과 로커스 간 단순화된 독립성을 가정합니다.', '<strong>확률과 신원 분리:</strong> 희귀한 프로필은 출처나 유죄의 증거가 아닙니다.', '<strong>데이터 기록:</strong> 공식 보고서에는 출처, 방법, 불확실성과 해석이 필요합니다.'],
  },
  faq: [
    { question: '무작위 일치 확률은 무엇을 의미하나요?', answer: '선택한 빈도와 가정에 따라 무작위로 선택한 비친족이 입력 프로필을 가질 확률을 추정합니다. 유죄 확률이나 특정 시료의 출처 확률이 아닙니다.' },
    { question: '유전자형 빈도는 어떻게 계산하나요?', answer: '동형접합에는 p², 이형접합에는 2pq를 사용하고 각 로커스의 빈도를 곱합니다.' },
    { question: '프리셋 빈도가 합성 값인 이유는 무엇인가요?', answer: '학습용 작은 예시이기 때문입니다. 실제 법과학 작업에는 검증되고 대표성 있는 집단 데이터베이스가 필요합니다.' },
    { question: '두 사람을 비교하거나 시료를 식별할 수 있나요?', answer: '아니요. 생물학적 시료를 받거나 프로필을 비교하거나 데이터베이스를 검색하지 않고 수학적 모델만 다룹니다.' },
    { question: '작은 확률이 왜 판정이 아닌가요?', answer: '데이터베이스, 선택 방법, 프로필 품질, 가정과 전문가 해석에 따라 의미가 달라지기 때문입니다.' },
  ],
  howTo: [
    { name: '학습용 프리셋 선택', text: '균형형, 동형접합 또는 간단한 수업 프리셋으로 시작하세요.' },
    { name: '로커스 편집', text: '이름, 두 대립유전자와 각 빈도를 백분율로 입력하세요.' },
    { name: '로커스 규칙 읽기', text: '표에서 동형접합은 p², 이형접합은 2pq로 표시됩니다.' },
    { name: '결과를 신중하게 해석', text: '교육용 모델로 보고 가정을 계속 확인하세요.' },
  ],
});
