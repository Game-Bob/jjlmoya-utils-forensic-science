const slug = 'simulation-probability-calculator';
const description = '닉 보스트롬의 삼자택일 논증을 사용하여 우리의 현실이 시뮬레이션인지 분석합니다. 4가지 핵심 매개변수를 통해 존재 확률을 계산해 보세요.';
const title = '시뮬레이션 확률 계산기: 우리는 가상 우주에 살고 있을까?';
const howTo = [
    {
      name: '기술적 진보 조정',
      text: '인류가 포스트휴먼 수준에 도달할 확률을 추정하세요. 50%는 중립적이며, AI와 컴퓨팅 기술이 기하급수적으로 계속 발전할 것이라고 믿는다면 값을 높이세요.',
    },
    {
      name: '생존율 설정',
      text: '인류가 자멸하지 않을 확률을 고려하세요. 전쟁, 기후 변화, 팬데믹 등이 변수가 됩니다. 높은 값은 인류의 미래에 대한 낙관론을 의미합니다.',
    },
    {
      name: '시뮬레이션 관심도 평가',
      text: '인류가 포스트휴먼 수준에 도달했을 때 과거의 시뮬레이션을 만들고 싶어 할까요? 과학적 연구, 엔터테인먼트, 역사적 보존 등의 동기를 고려해 보세요.',
    },
    {
      name: '결과 해석',
      text: '확률이 어떻게 변하는지 관찰하세요. 확률이 90% 이상으로 나오면 가정이 충족될 경우 시뮬레이션이 거의 불가피함을 시사합니다. 매개변수를 조정하며 다양한 미래를 탐색해 보세요.',
    },
  ];
const faq = [
    {
      question: '보스트롬의 논증이란 정확히 무엇인가요?',
      answer: '닉 보스트롬은 포스트휴먼 문명이 충분한 컴퓨팅 파워를 가지고 있다면 이전 우주의 시뮬레이션을 수백만 개 만들 수 있다고 제안합니다. 만약 그렇다면 시뮬레이션된 존재의 수는 원래 생물학적 존재보다 압도적으로 많아질 것입니다. 따라서 통계적으로 당신은 실제 존재보다 시뮬레이션된 존재일 가능성이 더 높습니다.',
    },
    {
      question: '높은 확률이 우리가 확실히 시뮬레이션이라는 뜻인가요?',
      answer: '아니요. 높은 확률은 고려해볼 만한 진지한 가능성임을 시사하지만 증거는 아닙니다. 이 논증은 실현되지 않을 수도 있는 기술의 미래에 대한 가정에 기반하고 있습니다.',
    },
    {
      question: '우리가 시뮬레이션이라는 사실을 아는 것이 우리에게 어떤 영향을 미칠까요?',
      answer: '철학적으로 많은 이들은 근본적인 것은 아무것도 변하지 않는다고 주장합니다. 당신과 당신의 사랑하는 사람들이 함께 시뮬레이션된 것이라면, 당신의 경험, 감정, 관계는 여전히 실재하며 느껴지는 것입니다. 중요한 것은 삶의 경험이지 그 바탕이 무엇인지가 아닙니다.',
    },
    {
      question: '우리가 시뮬레이션 속에 있다는 과학적 증거가 있나요?',
      answer: '결정적인 증거는 없습니다. 일부 물리학자들은 양자 역학의 변칙 현상(양자화, 얽힘 등)을 "계산적 최적화"의 가능성으로 지적하기도 하지만, 이는 추측에 기반한 해석입니다.',
    },
    {
      question: 'N(시뮬레이션 규모) 값에 얼마를 입력해야 하나요?',
      answer: '컴퓨팅의 미래에 대한 당신의 신념에 달려 있습니다. 낮은 값(100~1000)은 자원 제한을 가정한 것이고, 높은 값(수백만 이상)은 사실상 무제한의 컴퓨팅 파워를 가정한 것입니다. 대부분의 과학적 논의에서는 1,000에서 1조 사이의 값을 사용합니다.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: '복사됨',
    noHistory: '내역 없음',
    load: '불러오기',
    delete: '삭제',
    simulationParameters: '시뮬레이션 매개변수',
    fpLabel: 'fp',
    fpSub: '기술적 진보',
    flLabel: 'fl',
    flSub: '종의 생존',
    fiLabel: 'fi',
    fiSub: '시뮬레이션 관심도',
    nLabel: 'N',
    nSub: '시뮬레이션 규모',
    probabilityTitle: '시뮬레이션 확률',
    trilemmaResult: '삼자택일 결론',
    scenario1: '시나리오 1: 멸종',
    scenario2: '시나리오 2: 무관심',
    scenario3: '시나리오 3: 우리는 시뮬레이션 속 존재',
    fpDescription: '인류가 의식을 가진 우주를 시뮬레이션할 수 있는 기술적 수준에 도달할 확률입니다.',
    flDescription: '포스트휴먼 단계에 도달하기 전에 붕괴(멸종, 전쟁 등)를 피할 수 있는 확률입니다.',
    fiDescription: '고도로 발달한 문명이 조상 시뮬레이션을 만들기로 결정하는 비율입니다.',
    nDescription: '각 선진 문명이 일반적으로 동시에 실행하는 시뮬레이션 세계의 수입니다.',
    verdictDetail: '데이터에 따르면 당신의 의식이 소프트웨어 프로세스일 확률이 매우 높습니다.',
  },
  seo: [
    {
      type: 'title',
      text: '우리는 시뮬레이션 속에 살고 있을까? 닉 보스트롬 논증의 과학적 배경',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '우리의 현실이 인공적인 구조물, 즉 극도로 발달한 컴퓨터 시뮬레이션일 수 있다는 생각은 SF의 영역을 넘어 진지한 철학적, 과학적 논쟁의 대상이 되었습니다. 2003년 옥스퍼드 대학의 철학자 닉 보스트롬은 <em>"당신은 컴퓨터 시뮬레이션 속에 살고 있습니까?"</em>라는 논문을 통해 우리의 존재에 대한 인식에 도전하는 삼자택일(trilemma) 논증을 제안했습니다.',
    },
    {
      type: 'paragraph',
      html: '이 시뮬레이션 확률 계산기는 보스트롬의 가설에서 도출된 핵심 매개변수를 사용하여 당신의 의식이 실제로 포스트휴먼 문명에 의해 실행되는 소프트웨어 프로세스의 결과일 가능성을 추정합니다.',
    },
    {
      type: 'title',
      text: '시뮬레이션 논증의 기둥',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '보스트롬의 논증은 우리가 시뮬레이션 속에 있다고 단정하는 것이 아니라, 다음 세 가지 명제 중 적어도 하나는 거의 확실히 참이라고 주장합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>조기 멸종:</strong> 인류는 조상 시뮬레이션을 실행할 수 있는 포스트휴먼 단계에 도달하기 전에 멸종할 것이다.',
        '<strong>기술적 무관심:</strong> 포스트휴먼 문명은 윤리적 또는 오락적인 이유로 조상 시뮬레이션을 실행하는 데 관심이 없을 것이다.',
        '<strong>편재하는 시뮬레이션:</strong> 시뮬레이션된 마음의 수가 원래의 생물학적 마음의 수를 압도적으로 초과하기 때문에, 우리는 거의 확실히 시뮬레이션 속에 살고 있다.',
      ],
    },
    {
      type: 'title',
      text: '매개변수 해석 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구를 올바르게 사용하려면 모델 변수가 무엇을 의미하는지 이해하는 것이 필수적입니다.',
    },
    {
      type: 'table',
      headers: ['변수', '개념', '의미'],
      rows: [
        ['<strong>fp</strong>', '기술적 진보', '문명이 마음을 시뮬레이션할 수 있는 능력에 도달할 확률.'],
        ['<strong>fl</strong>', '생존율', '문명이 그 지점에 도달하기 전에 자멸하지 않을 확률.'],
        ['<strong>fi</strong>', '시뮬레이션 관심도', '가상 세계를 만들기 위해 그 힘을 사용하기로 결정하는 문명의 비율.'],
        ['<strong>N</strong>', '시뮬레이션 규모', '단일 포스트휴먼 문명이 생성할 총 시뮬레이션 수.'],
      ],
    },
    {
      type: 'title',
      text: '왜 확률이 대개 그렇게 높게 나올까요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '포스트휴먼 문명이 (다이슨 스피어나 주피터 브레인과 같은) 엄청난 컴퓨팅 파워를 가지고 있다고 가정하면, 시뮬레이션 수<strong>N</strong>은 수십억에 달할 수 있습니다. 만약 <em>N</em>이 매우 크다면, 관심도(<em>fi</em>) 수치가 낮더라도 시뮬레이션된 존재의 수는 원래 존재보다 수만 배 이상 많아지게 됩니다.',
    },
    {
      type: 'title',
      text: '증거와 계산적 한계',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '양자 물리학에서 우주론에 이르기까지, 일부 과학자들은 우리 현실의 해상도에서 "글리치(glitch)"나 한계를 찾으려 노력합니다. 만약 우주에 최소 길이(플랑크 길이)가 있거나 양자 얽힘과 같이 코드 최적화처럼 보이는 현상이 있다면, 디지털 물리학 분야에서 이 가설은 더 많은 지지를 얻게 됩니다.',
    },
    {
      type: 'title',
      text: '윤리적 성찰',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '우리가 시뮬레이션이라는 것을 알게 된다면 우리의 도덕성은 바뀔까요? 보스트롬에게 중요한 것은 의식의 경험입니다. 시뮬레이션된 마음도 생물학적인 마음과 마찬가지로 고통을 느끼고 사랑을 합니다.',
    },
    {
      type: 'title',
      text: '계산기 활용 사례',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>과학교육:</strong> 우주론에 적용되는 확률 모델 이해.',
        '<strong>현대철학:</strong> 보스트롬의 삼자택일을 대화형으로 탐구.',
        '<strong>미래학:</strong> 종의 생존율이 인류의 운명에 미치는 영향 분석.',
        '<strong>존재적 호기심:</strong> 기술의 미래에 대한 본인의 신념 평가.',
      ],
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
      description: description,
      applicationCategory: 'ScientificApplication',
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

