import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-stature-estimation-skeletal-remains-trotter-gleser-calculator';
const title = '법의학 신장 추정기';
const description = 'Mildred Trotter와 Goldine Gleser의 선형 회귀 공식을 사용하여 장골 측정값으로부터 생전 신장을 추정하며, 성별, 조상 및 연령 보정을 반영합니다.';

const howTo = [
  {
    name: '뼈 및 변수 선택',
    text: '측정할 장골(대퇴골, 경골, 상완골, 비골, 요골 또는 척골)과 대상자의 성별, 조상 그룹, 나이를 선택합니다.'
  },
  {
    name: '뼈 길이 측정',
    text: '가상 골측정판의 슬라이더를 조절하여 센티미터 단위로 뼈의 최대 길이를 지정합니다.'
  },
  {
    name: '추정 신장 계산',
    text: '계산기가 해당 Trotter-Gleser 회귀 공식을 적용하며, 30세 이상의 경우 매년 0.06 cm를 차감합니다.'
  },
  {
    name: '오차 및 신뢰구간 해석',
    text: '추정 신장, 추정 표준 오차(SEE), 95% 예측 구간을 확인하여 인구 변이를 고려합니다.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Trotter와 Gleser의 회귀 공식은 어떻게 작동합니까?',
    answer: '이 공식들은 생전 신장과 장골의 최대 길이 간의 상관관계를 모델링하기 위해 선형 회귀 분석을 사용합니다. 뼈 길이를 입력하면 성별 및 인구 집단별 상수들이 적용됩니다.'
  },
  {
    key: 'faq-2',
    question: '생물학적 성별과 조상 그룹 정보가 왜 필요합니까?',
    answer: '인체의 비례는 성별과 지리적 인구 집단에 따라 다릅니다. 남성은 일반적으로 여성과 사지 대 신장 비율이 다르며, 조상 집단별로도 고유한 발달 비례를 보입니다.'
  },
  {
    key: 'faq-3',
    question: '신장 추정에 왜 연령 보정 요인이 들어갑니까?',
    answer: '성인 초기 이후 척추 원반의 압박 및 자세 변화로 인해 생전 키가 점차 줄어듭니다. Trotter와 Gleser는 30세 이후 매년 0.06 cm씩 차감할 것을 권장했습니다.'
  },
  {
    key: 'faq-4',
    question: '추정 표준 오차(SEE)란 무엇입니까?',
    answer: 'SEE는 회귀 모델 잔차의 표준 편차를 의미하며, 특정 뼈에서 예측된 신장의 정확도를 나타냅니다.'
  },
  {
    key: 'faq-5',
    question: '어떤 장골이 가장 정확한 신장 추정치를 제공합니까?',
    answer: '하체 뼈, 특히 대퇴골과 경골은 신장에 직접적으로 기여하기 때문에 가장 정확한 신장 추정을 가능하게 합니다. 상체 뼈는 표준 오차가 더 큽니다.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '법의학 신장 추정기',
    desc: '골측정판 측정을 시뮬레이션하고 선형 회gui 분석을 사용하여 생전 신장을 계산합니다.',
    configTitle: '골측정 설정',
    boneLabel: '뼈 표본',
    lengthLabel: '뼈 길이',
    unitLabel: '단위 시스템',
    metricOption: '미터법 (cm)',
    imperialOption: '야드파운드법 (in)',
    sexLabel: '생물학적 성별',
    ancestryLabel: '조상 그룹',
    ageLabel: '사망 시 연령 (세)',
    maleOption: '남성',
    femaleOption: '여성',
    whiteOption: '백인 / 코카소이드',
    blackOption: '흑인 / 네그로이드',
    asianOption: '아시아인 / 몽골로이드',
    femurName: '대퇴골 (허벅지 뼈)',
    tibiaName: '경골 (정강이 뼈)',
    humerusName: '상완골 (위팔 뼈)',
    fibulaName: '비골 (종아리 뼈)',
    radiusName: '요골 (노뼈)',
    ulnaName: '척골 (자뼈)',
    resultsTitle: '신장 추정 결과',
    estimateLabel: '추정 신장',
    errorLabel: '표준 오차 (SEE)',
    rangeLabel: '95% 예측 구간',
    formulaLabel: '회귀 공식',
    formulaBoneFactor: '뼈 요인',
    formulaConstant: '상수',
    formulaAgeCorrection: '연령 보정',
    formulaStdError: '표준 오차 (SEE)',
    fallbackAlert: '아시아인 여성에 대한 직접적인 Trotter-Gleser 회귀 공식이 없으므로, 백인 여성 참고 공식을 법의학적 대체 수단으로 사용합니다.',
    boardInstructions: '캘리퍼 핸들을 드래그하거나 입력창을 사용하여 뼈의 길이를 측정하십시오.',
    rulerLabelMetric: '미터 눈금 (mm)',
    rulerLabelImperial: '임페리얼 눈금 (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: '법의인류학 분야 신장 추정에 대한 종합 가이드',
      level: 2
    },
    {
      type: 'paragraph',
      html: '신장 추정은 신체인류학, 생물고고학 및 법의학 분야의 생물학적 프로파일링에서 핵심적인 요소입니다. 인골이 발견되었을 때 생전 신장을 재구성하면 실종자 기록과 교차 대조하여 신원을 확인하는 데 유용합니다. 신장은 전체 키와 상관관계가 높은 장골의 최대 길이를 측정하여 추정합니다.'
    },
    {
      type: 'paragraph',
      html: '이 디지털 골측정판 시뮬레이터는 Mildred Trotter와 Goldine C. Gleser가 정립한 선형 회귀 모델을 학습할 수 있도록 돕습니다.'
    },
    {
      type: 'title',
      text: 'Trotter-Gleser 회귀 공식의 이해',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter와 Goldine C. Gleser는 1952년과 1958년에 신장 추정 공식을 발표했습니다. 이 공식의 기본 형태는 다음과 같습니다: 신장 = (기울기 × 뼈 길이) + 상수 ± 표준 오차. 성별 및 조상 집단에 따라 다른 공식이 적용됩니다.'
    },
    {
      type: 'table',
      headers: ['장골 표본', '백인 남성 회귀 모델', '백인 여성 회귀 모델', '법의학적 유용성 및 신뢰도'],
      rows: [
        ['대퇴골 (Femur)', '신장 = 2.32 × 대퇴골 + 65.53 ± 3.94 cm', '신장 = 2.47 × 대퇴골 + 54.10 ± 3.72 cm', '가장 높은 신뢰도. 대퇴골은 직립 신장에 가장 직접적으로 기여하는 뼈입니다.'],
        ['경골 (Tibia)', '신장 = 2.42 × 경골 + 81.93 ± 4.00 cm', '신장 = 2.90 × 경골 + 61.53 ± 3.66 cm', '높은 신뢰도. Trotter의 기존 연구 방식대로 안쪽 복사뼈(내과)를 제외하고 측정해야 합니다.'],
        ['비골 (Fibula)', '신장 = 2.60 × 비골 + 75.50 ± 3.86 cm', '신장 = 2.93 × 비골 + 59.61 ± 3.57 cm', '신뢰도가 매우 높으나, 비골은 얇기 때문에 고고학 현장에서 훼손되거나 소실되기 쉽습니다.'],
        ['상완골 (Humerus)', '신장 = 2.89 × 상완골 + 78.10 ± 4.57 cm', '신장 = 3.36 × 상완골 + 57.97 ± 4.45 cm', '보통 수준의 신뢰도. 팔뼈는 체중을 직접 지탱하지 않아 오차 범위가 상대적으로 넓습니다.'],
        ['요골 (Radius)', '신장 = 3.79 × 요골 + 79.42 ± 4.66 cm', '신장 = 4.74 × 요골 + 54.93 ± 4.45 cm', '아랫팔 뼈는 발달 비례의 개인차가 커 상대적으로 신뢰도가 낮습니다.']
      ]
    },
    {
      type: 'title',
      text: '가령에 따른 신장 감소와 보정',
      level: 3
    },
    {
      type: 'paragraph',
      html: '생전 신장은 성인기 내내 일정하지 않습니다. 30세 이후부터 척추의 퇴행 등으로 인해 키가 점차 줄어듭니다. Trotter와 Gleser는 30세 이후 매년 0.06 cm씩 빼주는 연령 보정을 권장했습니다: 신장 감소량 = 0.06 × (연령 - 30).'
    },
    {
      type: 'title',
      text: '경골 측정 기준의 방법론적 차이점',
      level: 3
    },
    {
      type: 'paragraph',
      html: '법의인류학에서 흔히 겪는 방법론적 혼란 중 하나는 경골 측정 방식입니다. 1952년 연구에서는 내과를 제외하고 측정했으나, 1958년 연구에는 내과가 포함되었습니다. 1952년 공식을 내과가 포함된 경골 측정값에 적용하면 키가 과대평가될 수 있습니다.'
    },
    {
      type: 'title',
      text: '세속적 추세와 역사적 참조 자료의 한계',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Trotter-Gleser의 표본들은 19세기 말 및 20세기 초 출생자들이므로 당시의 영양 상태를 반영하고 있습니다. 영양 상태의 현대화에 따라 평균 신장이 커지는 경향(세속적 추세)이 있습니다. 이 때문에 실제 법의학 현장에서는 FORDISC 같은 현대 데이터베이스도 병용됩니다.'
    }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
