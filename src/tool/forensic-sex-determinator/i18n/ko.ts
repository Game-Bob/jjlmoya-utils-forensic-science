import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-anthropology-sex-determination-cranial-pelvic-morphology-bayesian';
const title = '법의인류학 성별 판정기';
const description = '베이지안 확률 모델을 사용하여 두개골 및 골반 형태학적 지표로부터 생물학적 성별을 추정합니다.';

const howTo = [
  {
    name: '분석할 해부학적 부위 선택',
    text: '골반, 두개골 또는 둘 다 분석할지 결정합니다. 두 영역을 모두 평가하면 최종 생물학적 성별 분류의 정확도와 신뢰도가 향상됩니다.',
  },
  {
    name: '각 형태학적 특징 평가',
    text: '뼈 표본을 검사하고 시각적 가이드를 참조하여 핵심 지표를 1(초여성적)에서 5(초남성적)의 척도로 점수를 매깁니다.',
  },
  {
    name: '베이지안 엔진에 점수 입력',
    text: '슬라이더를 사용하여 각 특징의 점수를 입력합니다. 분류기는 남성 및 여성 범주에 대한 사후 확률을 자동으로 업데이트합니다.',
  },
  {
    name: '확률 결과 해석',
    text: '최종 신뢰도 지표, 우세한 성별 분류를 검토하고 생물학적 변이를 이해하기 위해 법의학적 진단 노트를 읽습니다.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '골반 성별 판정에서 페니스(Phenice) 방법이란 무엇인가요?',
    answer: '1969년 T. W. 페니스에 의해 발표된 페니스 방법은 세 가지 특정 골반 특징, 즉 복측 호(ventral arc), 치골하 오목(subpubic concavity), 좌치골지 내측면(medial aspect of the ischiopubic ramus)에 초점을 맞춥니다. 잘 보존된 골격 유해에 적용할 경우 정확도가 95%를 초과하여 법의인류학에서 가장 신뢰할 수 있는 형태학적 방법 중 하나로 남아 있습니다.',
  },
  {
    key: 'faq-2',
    question: '성별 추정에서 왜 두개골보다 골반이 선호되나요?',
    answer: '골반은 여성의 출산에 대한 기능적 적응을 반영하기 때문에 인체 골격에서 성 이형성(sexual dimorphism)이 가장 뚜렷한 부위입니다. 진화적 압력은 여성 골반을 남성 골반보다 넓고 얕으며 더 넓은 각도를 갖도록 형성한 반면, 두개골 성 이형성은 주로 전반적인 신체 크기와 근육 발달과 관련이 있습니다.',
  },
  {
    key: 'faq-3',
    question: '베이지안 분류기는 성별 확률을 어떻게 추정하나요?',
    answer: '저희 분류기는 베이지안 업데이트 모델을 사용합니다. 양성에 대해 50%의 사전 확률을 가정합니다. 평가된 각 해부학적 마커에 대해 모델은 사전 확률에 남성 대 여성 집단에서 해당 특정 점수를 얻을 가능성(likelihood)을 곱하고 이를 정규화하여 사후 확률 분포를 생성합니다.',
  },
  {
    key: 'faq-4',
    question: '형태학적 분석에서 점수 3은 무엇을 나타내나요?',
    answer: '점수 3은 판정 불가 또는 중성적인 형태를 나타냅니다. 이는 해당 특징이 인간 성 이형성 스펙트럼의 중간에 위치하는 특성을 보이며, 전형적인 여성적(1-2) 특징이나 남성적(4-5) 특징을 모두 나타내지 않음을 의미합니다.',
  },
  {
    key: 'faq-5',
    question: '이 모델은 아동이나 청소년 유해의 성별을 판정할 수 있나요?',
    answer: '아닙니다. 사춘기 이전의 미성년자 유해에 대한 형태학적 성별 판정은 극히 신뢰할 수 없습니다. 남성과 여성의 골격을 구별하는 형태학적 특징은 사춘기 이후에야 완전히 발달하기 때문입니다. 법의인류학자들은 미성년자에 대해서는 골격 지표 대신 일반적으로 유전자 검사나 치아 지표에 의존합니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: '골반 형태학',
    craniumRegion: '두개골 형태학',
    subpubicAngle: '치골하각',
    subpubicAngleDesc: '치골결합 아래에 형성되는 각도.',
    subpubicAngleFem: '넓은 U자형 각도 (>90°)',
    subpubicAngleMasc: '좁은 V자형 각도 (<70°)',
    sciaticNotch: '대좌골절흔',
    sciaticNotchDesc: '장골 후부의 대좌골절흔.',
    sciaticNotchFem: '넓고 얕은 U자형 절흔',
    sciaticNotchMasc: '좁고 깊은 엄지 모양 절흔',
    ventralArc: '복측 호',
    ventralArcDesc: '치골 전면을 가로지르는 뼈의 능선.',
    ventralArcFem: '두드러지게 융기된 뼈 능선',
    ventralArcMasc: '없거나 매우 희미한 선',
    preauricularSulcus: '귓바퀴앞홈 (preauricular sulcus)',
    preauricularSulcusDesc: '천장관절에 인접한 홈.',
    preauricularSulcusFem: '깊고 점상의 홈',
    preauricularSulcusMasc: '없거나 완전히 매끄러움',
    mastoidProcess: '유양돌기',
    mastoidProcessDesc: '외이도 뒤쪽의 뼈 돌기.',
    mastoidProcessFem: '작고 짧은 돌기',
    mastoidProcessMasc: '크고 긴 튼튼한 돌기',
    supraorbitalRidge: '눈썹활 (안와상융기)',
    supraorbitalRidgeDesc: '눈썹활(眉間)의 돌출도.',
    supraorbitalRidgeFem: '매끄럽고 평평한 이마',
    supraorbitalRidgeMasc: '두드러지게 돌출된 눈썹활',
    mentalEminence: '턱끝융기 (턱)',
    mentalEminenceDesc: '턱의 모양과 돌출도.',
    mentalEminenceFem: '둥글고 뾰족한 턱',
    mentalEminenceMasc: '넓고 네모난 이중結節 턱',
    nuchalCrest: '목덜미능선 (项线)',
    nuchalCrestDesc: '두개골 뒷부분의 뼈 능선.',
    nuchalCrestFem: '매끄러운 후두평면',
    nuchalCrestMasc: '거칠고 갈고리 모양의 후두부 돌기',
    selectOption: '점수 선택...',
    score1: '1 - 초여성적',
    score2: '2 - 여성적',
    score3: '3 - 판정불가/중성',
    score4: '4 - 남성적',
    score5: '5 - 초남성적',
    notEvaluated: '평가되지 않음',
    resultsTitle: '성별 판정 결과',
    femaleProbLabel: '여성 확률',
    maleProbLabel: '남성 확률',
    predominantLabel: '우세한 분류',
    confidenceLabel: '추정 신뢰도',
    weakConf: '낮음 (평가된 지표가 너무 적음)',
    moderateConf: '보통',
    strongConf: '높음',
    femaleClass: '여성',
    maleClass: '남성',
    indeterminateClass: '판정불가',
    noteNoData: '계산을 시작하려면 하나 이상의 해부학적 마커를 평가해 주세요.',
    noteTriageOnly: '이것은 교육용 스크리닝 지원 도구입니다. 공식적인 법의학적 평가는 계측학적 분석 및 다수의 전문가 검토가 필요합니다.',
    noteBayesianEst: '확률은 비모수 베이지안 우도 매트릭스를 사용하여 동적으로 계산됩니다.',
    pelvicTitle: '골반 참고 가이드',
    cranialTitle: '두개골 참고 가이드',
    pelvisDesc: '여성 골반은 출산에 적응하여 구조가 더 넓고 각도가 완만합니다. 남성 골반은 더 튼튼하고 좁으며 수직 방향으로 배향되어 있습니다.',
    cranialDesc: '남성 두개골은 일반적으로 더 크고 튼튼하며, 유양돌기가 더 크고 눈썹활이 두드러지며 근육 부착 부위가 거칩니다. 여성 두개골은 더 섬세하며 목덜미능선이 매끄럽고 턱이 둥급니다.',
  },
  seo: [
    {
      type: 'title',
      text: '법의인류학에서의 골격 성별 판정 입문',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '생물학적 성별을 추정하는 것은 법의인류학, 독성학, 고고학에서 신원 미상의 골격 유해에 대한 생물학적 프로파일을 구축하는 가장 기본적인 단계 중 하나입니다. 신장, 사망 시 연령, 인구 집단 계통 추정과 함께 성별 추정은 잠재적 실종자의 범위를 좁히는 데 기여합니다. 인류 골격은 성 이형성, 즉 동종 내 남녀 간의 신체적 차이를 보입니다. 이러한 이형성은 크기(튼튼함 대 섬세함)와 모양(특히 출산과 관련된 골반의 적응적 변화) 모두에 반영됩니다.',
    },
    {
      type: 'paragraph',
      html: '이 대화형 도구를 통해 법의학 학생, 법의부검의, 연수생은 골반과 두개골의 형태학적 지표를 평가할 수 있습니다. 시각적 기준에 기반한 점수를 입력함으로써 개별 뼈 마커가 누적 통계 모델에 어떻게 기여하는지 관찰할 수 있습니다.',
    },
    {
      type: 'title',
      text: '골반의 성 이형성과 페니스 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '골반은 생물학적 성별 판정에서 가장 정확한 골격 영역으로 세계적으로 인정받고 있습니다. 여성 골반은 폭이 넓고 산도가 크며 대좌골절흔이 넓고 치골하각이 90도를 초과합니다. 반대로 남성 골반은 좁은 V자형 치골하각과 좁은 대좌골절흔을 특징으로 합니다. 페니스 방법은 치골의 세 가지 특정 특징(복측 호, 치골하 오목, 좌치골지 내측면)에 초점을 맞춥니다. 발달된 복측 호의 존재는 여성임을 나타내는 극히 강력한 지표이며, 남성에서는 보통 결여됩니다.',
    },
    {
      type: 'title',
      text: '두개골의 성 이형성과 튼튼함의 지표',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '골반뼈가 결손되었거나 보존 상태가 나쁜 경우, 두개골이 성별 추정의 제1대체 부위로 기능합니다. 두개골 평가는 튼튼함에 기반하여 수행됩니다. 호르몬에 의한 발육 차이로 인해 남성 두개골은 일반적으로 근육 부착 부위가 더 두드러지고 뼈 돌기가 커지기 때문입니다. 귀 뒤에 있는 유양돌기는 남성이 더 크고 넓습니다. 남성의 안와상융기(눈썹활)는 두드러지고 돌출되어 있지만, 여성은 매끄럽고 수직 상태를 유지합니다. 턱(턱끝융기)은 남성에서 네모나고 넓은 경향이 있지만, 여성은 더 둥글고 뾰족한 턱 구조를 보입니다.',
    },
    {
      type: 'table',
      headers: ['해부학적 지표', '여성적 특징 (점수 1-2)', '남성적 특징 (점수 4-5)', '법의학적 가치'],
      rows: [
        ['치골하각', '넓은 둔각 (종종 90도를 초과함).', '좁은 예각 (보통 70도 미만).', '골반 성별 판정에서 단일로서 가장 높은 진단 가치.'],
        ['대좌골절흔', 'U자형에 유사한 넓고 얕은 절흔.', '엄지손가락 모양에 유사한 좁고 깊은 절흔.', '파쇄된 유해에서도 보존되기 쉬운 극히 내구성이 높은 마커.'],
        ['유양돌기', '작고 짧으며 외이도 아래로의 돌출은 최소한임.', '크고 길며 아래쪽으로 현저히 돌출함.', '풍화에 강한 신뢰할 수 있는 두개골 마커.'],
        ['안와상융기', '매끄럽고 평평한 미간과 수직 이마 프로필.', '경사 이마를 동반한 두드러지게 돌출된 눈썹활.', '튼튼한 남성 두개골과 섬세한 여성 두개골을 구분함.'],
      ],
    },
    {
      type: 'title',
      text: '형태학적 분류에서의 베이지안 수학 모델',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '기존의 법의학적 평가는 주관적인 분류에 의존하여 관찰자 편향으로 이어질 가능성이 있었습니다. 현대 법의인류학은 불확실성을 정량화하기 위해 통계적 확률 모델을 도입하고 있습니다. 베이지안 통계는 이 목적에 최적이며, 동일한 사전 확률(남성 50%, 여성 50%)에서 시작하여 새로운 증거가 도입될 때마다 이를 업데이트합니다. 골반 특징이 고도로 여성적인 형태(넓은 치골하각, 점수 1)를 보일 경우, 여성 분류 확률은 상승하며 두개골에 존재하는 중간적 또는 모순되는 마커를 덮어씁니다.',
    },
    {
      type: 'paragraph',
      html: '이 디지털 시뮬레이터는 비모수 베이지안 우도 매트릭스를 사용한 베이지안 엔진을 구현하고 있습니다. 계산은 법정 증언에서 신뢰 구간과 오류율을 보고하는 것을 강조하는 현대 법의학 가이드라인에 따라, 경직된 이진 출력이 아닌 확률 백분율을 제공합니다. 분류의 신뢰도는 평가된 지표의 수에 의존하며, 골반과 두개골 양 영역 모두의 점수가 가장 견고한 결과를 제공합니다.',
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
