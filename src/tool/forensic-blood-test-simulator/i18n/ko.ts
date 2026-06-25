import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-presumptive-blood-testing-luminol-kastle-meyer-simulator';
const title = '법의학 예비 혈액 검사 시뮬레이터';
const description = '카슬-마이어 및 루미놀 시약을 이용한 예비 혈액 검사 시뮬레이터. 위양성 물질과 혈액을 구분합니다.';

const howTo = [
  {
    "name": "검체 선택",
    "text": "랙에서 혈액 또는 위양성 물질로 구성된 샘플을 선택합니다."
  },
  {
    "name": "검사 방법 선택",
    "text": "카슬-마이어 시험 또는 루미놀 발광 시험 중 하나를 선택합니다."
  },
  {
    "name": "시약 투여",
    "text": "카슬-마이어 시약에 이어 과산화수소를 떨어뜨리거나 루미놀 용액을 직접 주입합니다."
  },
  {
    "name": "반응 해석",
    "text": "어둠 속의 푸른 빛이나 핑크색 변화를 관찰하여 판정합니다."
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "왜 예비 검사라고 부르나요?",
    "answer": "예비 검사는 촉매 활성에 기반한 스크리닝 검사입니다. 감도는 매우 높지만 특이성이 낮아 위양성이 발생할 수 있어 확정 검사가 필요합니다."
  },
  {
    "key": "faq-2",
    "question": "카슬-마이어 검사에서 위양성이 나타나는 원인은 무엇인가요?",
    "answer": "헤모글로빈 헤미의 페록시다아제 활성을 이용하기 때문에 녹 속의 철 이온, 식물성 페록시다아제에 의해서도 반응이 유도됩니다."
  },
  {
    "key": "faq-3",
    "question": "루미놀 반응은 어떻게 발생하나요?",
    "answer": "루미놀은 철 촉매가 존재할 때 과산화수소와 반응하여 들뜬 아미노프탈레이트 이온을 생성하고, 청색광을 냅니다."
  },
  {
    "key": "faq-4",
    "question": "가정용 표백제는 위양성을 유발하나요?",
    "answer": "네, 차아염소산나트륨은 강한 산화제로 촉매 없이 루미놀이나 페놀프탈린을 직접 산화시켜 빠르게 사라지는 강한 발광을 냅니다."
  },
  {
    "key": "faq-5",
    "question": "예비 검사와 확정 검사의 차이는 무엇인가요?",
    "answer": "예비 검사는 현장에서 흔적을 찾는 신속 고감도 검사이며, 확정 검사는 인간 혈액의 존재를 증명하는 정밀 검사입니다."
  }
];

const bibliography = [
  {
    "name": "Kastle-Meyer test - Wikipedia",
    "url": "https://en.wikipedia.org/wiki/Kastle%E2%80%93Meyer_test"
  },
  {
    "name": "Grodsky, M., Wright, K. & Kirk, P. L. (1951). Simplified preliminary blood testing. An improved technique and comparative study of methods. Journal of Criminal Law and Criminology.",
    "url": "https://scholarlycommons.law.northwestern.edu/jclc/vol42/iss1/10/"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "title": "혈액 검사 시뮬레이터",
  "desc": "루미놀 및 카슬-마이어 시약을 이용해 혈액을 감지하고 위양성 반응을 분석하는 가상 실험.",
  "configTitle": "실험실 제어",
  "sampleLabel": "검체 샘플 선택",
  "reagentLabel": "시약 선택",
  "lightsLabel": "조명 제어",
  "btnLightsOff": "소등하기",
  "btnLightsOn": "점등하기",
  "btnReset": "플레이트 세척",
  "resultsTitle": "예비 검사 결과",
  "sampleBlood": "혈액 샘플 (대조군)",
  "sampleRust": "녹 (산화철)",
  "sampleBleach": "표백제 (차아염소산나트륨)",
  "samplePotato": "감자 (식물 효소)",
  "sampleSaliva": "타액 샘플",
  "reagentKM": "카슬-마이어 시약",
  "reagentH2O2": "과산화수소 (H2O2)",
  "reagentLuminol": "루미놀 용액",
  "resultTruePositive": "진양성 (혈액 감지됨)",
  "resultFalsePositive": "위양성 (비혈액 촉매)",
  "resultNegative": "음성 반응",
  "statusLabel": "반응 상태",
  "reactionLabel": "반응 설명",
  "dropReagentBtn": "시약 투여",
  "activeCompounds": "활성 화합물",
  "reactionSpeed": "반응 속도",
  "reactionDuration": "반응 지속 시간",
  "specimenBase": "검체 베이스",
  "kmPending": "카슬-마이어 시약이 도포되었습니다. 과산화수소(H2O2)를 추가하여 변색을 촉매합니다.",
  "h2o2Only": "과산화수소가 도포되었습니다. 변화를 관찰할 수 없습니다.",
  "noReaction": "반응이 관찰되지 않습니다. 샘플은 투명하게 유지됩니다.",
  "luminolBlood": "어둠 속에서 즉시 강한 푸른 빛이 관찰되었습니다. 헤모글로빈의 헤미가 루미놀의 산화를 촉매했습니다. 진양성.",
  "luminolBleach": "즉시 매우 강한 푸른 빛이 관찰되었으나 2초 내에 빠르게 소멸했습니다. 위양성.",
  "luminolRust": "약한 푸른 빛이 관찰되었습니다. 산화철의 철 이온이 산화를 약하게 촉매했습니다. 위양성.",
  "luminolPotato": "발광이 관찰되지 않습니다. 식물 페록시다아제는 이 조건 하에서 루미놀 산화를 유도하지 못합니다. 음성.",
  "luminolNegative": "어둠 속에서 발광이 관찰되지 않습니다. 화합물이 루미놀 산화를 촉매하지 않습니다. 음성.",
  "kmBlood": "과산화수소를 추가하자 즉시 밝은 분홍색 변색이 관찰되었습니다. 진양성.",
  "kmBleach": "즉시 진한 분홍색으로 변색되었습니다. 차아염소산나트륨이 페놀프탈린을 직접 산화시켰습니다. 위양성.",
  "kmRust": "수 초의 지연 후에 느리고 약한 갈색빛 분홍색이 나타났습니다. 위양성.",
  "kmPotato": "지연 후에 옅은 분홍색이 나타났습니다. 식물 페록시다아제가 반응을 약하게 촉매했습니다. 위양성.",
  "kmNegative": "색상 변화가 관찰되지 않습니다. 용액은 무색으로 유지됩니다. 음성."
},
  seo: [
  {
    "type": "title",
    "text": "법의학 예비 혈액 검사 가이드",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "예비 혈액 검사(추정 시험)는 사건 현장이나 과학수사 연구실에서 혈액 흔적의 가능성을 스크리닝하기 위해 수행하는 고감도 분석 기법입니다. 또는 추가 확정 시험 등 많은 비용과 시간이 소요되는 분석을 수행하기 전에, 수사관들은 옷이나 흉기, 벽면 등에 남겨진 보이지 않는 생체 성분의 위치를 신속하게 특정하고자 이 검사를 수행합니다. 헤모글로빈의 유기철 화합물인 헤민(Hemin) 촉매 활성을 표적으로 하므로 예비 시험으로 분류되며, 양성 반응은 혈액의 잠재성을 강력하게 지시하지만 최종 증거로 법정에 사용하기 위해서는 화학적 유사 물질을 완전히 배제하는 확정 시험이 반드시 필요합니다."
  },
  {
    "type": "title",
    "text": "카슬 마이어 시험의 화학적 반응 원리와 순서",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "카슬-마이어(KM) 시험은 환원 상태의 무색 분말인 페놀프탈린이 산화 과정을 거쳐 선명한 분홍색의 페놀프탈레인으로 전환되는 변색 반응에 기반합니다. 실험 절차는 매우 엄격하게 지켜져야 합니다. 먼저 시료에 페놀프탈린 지시약을 주입하면, 혈액이 존재할 경우 헤모글로빈의 헤미 성분이 유기 촉매로써 준비 상태를 형성합니다. 그 직후 과산화수소를 가했을 때 헤미 촉매가 과산화수소의 분해를 유도하며 무색의 지시약을 즉각적으로 선명한 핑크색으로 변색시킵니다. 시약 투여 후 15초 이상 지연되어 서서히 분홍빛으로 변하는 경우에는 자연계의 산화 현상으로 인한 위양성 반응으로 해석됩니다."
  },
  {
    "type": "title",
    "text": "루미놀과 과학수사의 화학 발광 메커니즘 관찰",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "루미놀(C8H7N3O2)은 알칼리성 수용액 조건 하에서 산화제와 결합해 반응할 때, 전이 금속 촉매의 도움을 받아 어둠 속에서 밝은 푸른 빛(화학 발광)을 발산하는 성질을 가지고 있습니다. 과학수사요원들은 사건 현장의 넓은 구역에 고르게 희석한 루미놀 솔루션을 뿌려 분석합니다. 눈에 보이지 않던 혈흔 유래 잔류물이 접촉하는 즉시 혈중 헤모글로빈의 철 이온이 산화 반응을 기하급수적으로 가속화합니다. 이 과정에서 아미노프탈레이트 이온이 에너지를 가득 머금은 여기 상태로 변한 후, 기저 상태로 복귀하면서 파란색 파장의 빛 에너지를 방출합니다. 이 반응광은 다소 희미하므로 완전히 어두운 환경이 요구됩니다."
  },
  {
    "type": "table",
    "headers": [
      "시험 대상 샘플",
      "카슬-마이어 반응 결과",
      "루미놀 발광 결과",
      "법의학적 진단 판정"
    ],
    "rows": [
      [
        "혈액 대조군",
        "H2O2 주입과 동시에 선명한 핑크색 즉각 변색.",
        "밝고 일정한 푸른 발광 최대 8초 지속.",
        "진양성. 헤미 촉매가 안정적인 활성력을 제공."
      ],
      [
        "염소계 가정용 표백제",
        "H2O2 투여를 하기도 전에 분홍색으로 변색.",
        "순간적으로 매우 강하지만 2초 내에 소멸.",
        "위양성. 강력한 산화제가 지시약을 직접 산화."
      ],
      [
        "산화철 (녹슨 철가루)",
        "수 초간 정체 후 천천히 약한 브라운 핑크 변색.",
        "어둡고 희미한 블루 스펙트럼 발광.",
        "위양성. 유리 철 이온이 낮은 효율로 반응 유도."
      ],
      [
        "감자 즙 (페록시다아제)",
        "한참 지연된 후 서서히 희미한 분홍빛 변색.",
        "어둠 속에서 확인 가능한 푸른 빛 관찰 안 됨.",
        "위양성 (KM) / 음성 (LUM)."
      ]
    ]
  },
  {
    "type": "title",
    "text": "진짜 혈흔과 다양한 위양성 반응의 분별법에 대하여",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "차아염소산나트륨이 포함된 화장실 세정제나 환경 속 철 이온 등으로 나타나는 위양성을 정확하게 판별해내는 지식은 감정서 작성의 신뢰성을 확보하는 데 필수적입니다. 표백제 계열은 과산화수소 없이도 지시약 자체를 바로 산화시켜 핑크빛으로 변화시키고 루미놀과의 발광 역시 수 초 이내에 극단적으로 소멸하므로 시간 경과 추이를 보면 쉽게 드러납니다. 또한 식물 뿌리에 많은 페록시다아제 효소는 고온 가열 처리를 거치면 구조가 변형되어 촉매 활성을 완전히 잃어버리지만, 혈액 속 헤모글로빈은 열에 대해 높은 내성을 보이므로 현장 채취본을 살짝 끓여 다시 테스트함으로써 식물성 위양성을 배제할 수 있습니다."
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
