import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'global-albedo-snowball-simulator';
const title = '지구 알베도 및 스노우볼 어스 시뮬레이터';
const description = '지구 열복사 균형, 태양 상수 변화, 온실가스 농도, 얼음-알베도 피드백을 탐색하여 빙상이 후퇴하는지, 안정화되는지, 또는 스노우볼 기후를 유발하는지 확인하세요.';

const howTo = [
  {
    name: '입사 태양광 설정',
    text: '태양 상수 슬라이더를 움직여 어두운 젊은 태양 시나리오, 현재 지구의 태양광, 또는 더 밝은 미래 강제력을 테스트하세요.',
  },
  {
    name: '온실가스 농도 조정',
    text: '온실가스 농도를 변경하여 복사 강제력이 더 높은 행성 알베도와 어떻게 경쟁하는지 확인하세요.',
  },
  {
    name: '행성에 얼음 심기',
    text: '작은 극관 또는 얼음으로 덮인 큰 세계에서 시작하세요. 모델은 피드백 루프를 반복하며 얼음이 전진하는지 후퇴하는지 보여줍니다.',
  },
  {
    name: '기후 상태 읽기',
    text: '온도, 흡수된 복사, 최종 얼음 덮임, 타임라인 곡선을 사용하여 온대, 스노우볼, 그리고 온실 결과를 비교하세요.',
  },
];

const faq = [
  {
    question: '얼음-알베도 피드백이란 무엇인가요?',
    answer: '얼음과 눈은 바다나 육지보다 더 많은 태양광을 반사합니다. 얼음이 팽창하면 행성 알베도가 상승하고, 흡수된 태양 에너지가 감소하며, 냉각으로 인해 더 많은 얼음이 형성될 수 있습니다. 얼음이 후퇴하면 더 어두운 표면이 더 많은 에너지를 흡수하여 온난화가 가속화됩니다.',
  },
  {
    question: '스노우볼 어스란 무엇인가요?',
    answer: '스노우볼 어스는 얼음이 저위도 또는 거의 전 지구적으로 도달하는 가상의 기후 상태입니다. 지질학적 증거에 따르면 지구는 신원생대 동안 그러한 상태에 근접했을 수 있습니다.',
  },
  {
    question: '이것은 완전한 기후 모델인가요?',
    answer: '아닙니다. 학습용 컴팩트 에너지 균형 모델입니다. 대기 순환, 구름, 해양 열 수송, 계절, 지리, 탄소 순환 피드백은 무시하지만, 알베도 피드백의 핵심 복사 논리를 포착합니다.',
  },
  {
    question: '온실가스는 왜 스노우볼 상태를 깨뜨릴 수 있나요?',
    answer: '온실가스는 복사 강제력을 추가하여 나가는 장파 냉각을 줄입니다. 스노우볼 어스 시나리오에서는 규산염 풍화가 느려지면 화산성 이산화탄소가 축적되어 결국 저위도 얼음을 녹일 수 있을 만큼 행성을 따뜻하게 합니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: '기후 제어',
    solarConstant: '태양 상수',
    greenhouse: '온실가스',
    initialIce: '초기 얼음 덮임',
    temperature: '평형 온도',
    absorbed: '흡수된 태양광',
    finalIce: '최종 얼음 덮임',
    albedo: '행성 알베도',
    forcing: '온실 강제력',
    state: '기후 상태',
    timeline: '얼음 변화 추이',
    years: '모델 년',
    snowball: '스노우볼 고정',
    temperate: '온대 균형',
    hothouse: '온실 후퇴',
    retreating: '얼음 후퇴 중',
    advancing: '얼음 전진 중',
    stable: '평형에 가까움',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: '복사 진단',
  },
  seo: [
    {
      type: 'title',
      text: '얼음-알베도 피드백과 스노우볼 어스를 위한 지구 알베도 시뮬레이터',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 시뮬레이터는 행성 기후에서 가장 중요한 피드백 루프 중 하나인 얼음 덮임, 반사율, 흡수된 태양광 사이의 연결을 탐구합니다. 밝은 얼음을 가진 행성은 더 많은 입사 태양 복사를 우주로 반사합니다. 그 냉각은 얼음을 보존하거나 확장하여 알베도를 더 높이고 시스템을 스노우볼 어스 상태로 밀어넣을 수 있습니다. 얼음이 적은 행성은 더 많은 태양광을 흡수하여 빙하 해체를 가속화할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '슬라이더를 사용하여 태양 상수, 온실가스 농도 및 초기 얼음 덮임을 변경하세요. 그런 다음 모델은 간단한 지구 에너지 균형을 반복하며 기후가 광범위한 빙하 작용, 온대 균형 또는 뜨거운 저얼음 상태로 이동하는지 보여줍니다. 빠른 직관을 위해 설계되었습니다. 각 제어는 복사 예산의 물리적 용어에 직접 매핑됩니다.',
    },
    {
      type: 'title',
      text: '에너지 균형이 추정되는 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '흡수된 단파 복사는 S(1 - a) / 4로 추정됩니다. 여기서 S는 태양 상수이고 a는 행성 알베도입니다. 4로 나누면 지구 원반이 가로챈 태양광을 전체 구형 표면에 대한 평균으로 변환합니다. 알베도가 높을수록 흡수 에너지가 낮아집니다. 온실가스 농도가 높을수록 표면 온도 추정치를 높이는 양의 복사 강제력이 추가됩니다.',
    },
    {
      type: 'table',
      headers: ['제어', '물리적 의미', '기후 영향'],
      rows: [
        ['태양 상수', '지구 궤도에서의 입사 항성 에너지', '값이 높을수록 행성이 따뜻해지고 얼음이 줄어듭니다.'],
        ['온실가스', '기준 대기에 대한 장파 복사 강제력', '값이 높을수록 스노우볼 고정이 어려워집니다.'],
        ['초기 얼음 덮임', '행성의 초기 반사율', '높은 값은 알베도 피드백을 통해 폭주 냉각을 유발할 수 있습니다.'],
      ],
    },
    {
      type: 'title',
      text: '알베도 피드백이 비선형이 될 수 있는 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '얼음-알베도 루프는 부드러운 단방향 조정이 아닙니다. 얼음이 행성의 충분한 부분에 도달하면 더 밝은 표면이 흡수된 태양광을 너무 많이 제거하여 여름철 녹는 현상이 약해집니다. 반대 방향으로, 후퇴하는 얼음은 더 어두운 바다와 육지를 노출시켜 흡수를 증가시키고 행성을 빙하 작용에서 멀어지게 합니다. 이것이 초기 얼음 덮임에 따라 유사한 강제력이 다른 결과를 낳을 수 있는 이유입니다.',
    },
    {
      type: 'paragraph',
      html: '실제 지구는 구름, 얼음 위의 먼지, 해양 열 수송, 대륙 위치, 계절별 태양광, 해빙 역학 및 탄소 순환 등 많은 복잡성을 추가합니다. 단순한 모델은 1차 복사 예산을 분리하기 때문에 여전히 가치가 있습니다. 이를 통해 스노우볼 어스 가설이 약한 태양광 또는 높은 알베도 트리거와 탈출을 위한 후기 온실가스 축적 모두에 의존하는 이유를 알 수 있습니다.',
    },
    {
      type: 'title',
      text: '시뮬레이터 해석',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>스노우볼 고정:</strong> 최종 얼음 덮임이 매우 높고 평형 온도가 빙점보다 훨씬 낮게 유지됩니다.',
        '<strong>온대 균형:</strong> 모델이 부분적인 얼음 덮임과 적당한 흡수 복사로 안정됩니다.',
        '<strong>온실 후퇴:</strong> 온실 강제력과 흡수된 태양광이 높은 상태에서 얼음이 매우 작은 비율로 붕괴됩니다.',
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
      description,
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
