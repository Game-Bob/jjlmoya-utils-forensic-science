const slug = 'microwave-leak-detector';
const description = 'WiFi 네트워크의 실시간 간섭을 측정하여 전자레인지에서 방사선이 누설되고 있는지 분석합니다. 과학적인 안전 점검 도구입니다.';
const title = '전자레인지 누설 탐지기: WiFi 간섭 시각화 도구';
const howTo = [
    {
      name: '2.4GHz WiFi 네트워크 연결',
      text: '간섭이 측정될 수 있도록 스마트폰이나 노트북이 5GHz 대역에 연결되어 있지 않은지 확인하세요.',
    },
    {
      name: '기본 지연 시간 테스트 시작',
      text: '전자레인지를 끈 상태에서 시작 버튼을 눌러 안정적인 연결 기준선을 설정합니다.',
    },
    {
      name: '전자레인지 켜기',
      text: '물 한 컵을 30~60초 동안 데우면서 기기를 들고 전자레인지 근처에 서 있습니다.',
    },
    {
      name: '실시간 그래프 분석',
      text: '기기 작동 중에 지연 시간이 100~200ms 이상으로 올라가거나 패킷 손실이 발생하는지 관찰합니다.',
    },
  ];
const faq = [
    {
      question: '웹사이트가 어떻게 전자레인지를 감지할 수 있나요?',
      answer: '마법 같은 센서가 아니라 네트워크 지연 시간을 이용합니다. 2.4GHz WiFi와 전자레인지는 모두 같은 주파수(약 2450 MHz)에서 작동합니다. 전자레인지 차폐가 부실하면 WiFi와 충돌하는 "노이즈"를 생성하여 지연 시간(ping)을 급격히 증가시킵니다.',
    },
    {
      question: '전자레인지가 새면 위험한가요?',
      answer: '약간의 WiFi 간섭은 정상이며 전력은 거리에 따라 급격히 감쇠하므로 즉각적인 건강상의 위험을 의미하지는 않습니다. 하지만 심한 누설은 도어나 메시의 밀폐가 불량하다는 신호이므로 기술적 안전을 위해 점검이 필요합니다.',
    },
    {
      question: '왜 5GHz WiFi에서는 테스트가 안 되나요?',
      answer: '5GHz WiFi는 전자레인지보다 훨씬 높은 주파수 대역에서 작동하기 때문입니다. 효과적인 테스트를 위해서는 기기가 공유기의 2.4GHz 네트워크에 연결되어 있어야 합니다.',
    },
    {
      question: '그래프의 지연 시간 급증(스파이크)은 무엇을 의미하나요?',
      answer: '전자레인지 작동 중에 지속적인 급증이 발생한다면 전자기 신호가 외부로 "누설"되어 공기를 포화시키고 WiFi 데이터 패킷이 제시간에 도착하는 것을 방해하고 있음을 시사합니다.',
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
    microwaveDetection: '전자레인지 탐지',
    shieldingAnalysis: '차폐 분석',
    startTest: '테스트 시작',
    stopTest: '테스트 중단',
    waitingForStart: '시작 대기 중...',
    detectingInterference: '간섭 탐지 중...',
    baseLevel: '기본 레벨',
    activeLevel: '활성 레벨',
    leakProbability: '누설 가능성',
    lowLeak: '낮음',
    mediumLeak: '중간',
    highLeak: '높음',
    pingLabel: '지연 시간 (ms)',
    packetLossLabel: '패킷 손실 (%)',
    rfInterferenceMonitor: 'RF 간섭 모니터',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / 지터',
    systemReady: '시스템 준비됨',
    physicalRequirement: '물리적 요구 사항',
    physicalDesc: '이 탐지기는 2.4GHz 대역(전자레인지 주파수)의 간섭을 이용합니다. 올바른 작동을 위해 2.4GHz WiFi 네트워크(5GHz/6GHz 아님)에 연결되어 있는지 확인하거나 기기 근처에서 휴대폰을 사용하세요.',
    understandStart: '이해함, 스캔 시작',
    rfInterferenceTitle: '간섭 모니터',
    connectToAnalyze: '열 간섭 분석을 시작하려면 연결하세요.',
    audioFeedback: '오디오 피드백',
    muteUnmute: '음소거 / 해제',
    static: '정적',
  },
  seo: [
    {
      type: 'title',
      text: '파동 물리학: 당신의 전자레인지에서 정말 방사선이 샐까요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '전자레인지는 현대 주방에서 가장 오해받는 가전제품 중 하나입니다. 순수주의자들에게는 비난받고 실용주의자들에게는 사랑받는 이 기기는 차단된 에너지와 외부 세계 사이의 끊임없는 전투를 숨기고 있습니다.',
    },
    {
      type: 'paragraph',
      html: '순수하게 물리학적인 관점에서 보면 전자레인지는 매우 특정한 주파수인 <strong>2.45 GHz</strong>의 전자기 방사선을 물 분자에 쏘도록 설계된 <strong>공동 공진기</strong>입니다. 이 주파수는 임의적인 것이 아닙니다. 물 입자의 쌍극자 진동을 일으켜 마찰을 통해 열을 발생시키는 데 필수적입니다. 문제는 이것이 802.11b/g/n WiFi 표준에서 사용하는 주파수와 정확히 같다는 점입니다.',
    },
    {
      type: 'title',
      text: '전자기 간섭 (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '2.4GHz 대역에서 작동하는 모든 WiFi 장치는 전자레인지와 동일한 "공기"를 놓고 경쟁합니다. 완벽한 레인지라면 <strong>파라데이 케이지</strong>(도어와 내부 벽면에 보이는 금속 메시)가 에너지를 100% 가두어야 합니다.',
    },
    {
      type: 'paragraph',
      html: '하지만 장기적으로 완벽한 케이지는 존재하지 않습니다. 도어 실, 마그네틱 래치, 금속 마모로 인해 미량의 에너지가 누설될 수 있습니다. 이러한 수치는 대개 인체 안전 기준치보다 훨씬 낮지만, WiFi 네트워크 카드에는 <strong>엄청난</strong> 영향을 주어 지연 시간, 패킷 손실, 그리고 본 도구가 측정하는 특유의 "지터" 현상을 일으킵니다.',
    },
    {
      type: 'title',
      text: '가정용 파라데이 케이지 테스트',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '디지털 지터 측정만큼 정확하지는 않지만, 전자레인지의 차폐 상태를 확인하는 매우 간단한 아날로그 방식이 있습니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>1단계 - 휴대폰:</strong> 휴대폰을 전자레인지 안에 넣습니다(<strong>절대로 작동 버튼을 누르지 마세요!</strong> 문만 닫으세요).',
        '<strong>2단계 - 전화 걸기:</strong> 다른 전화기로 안에 있는 휴대폰에 전화를 겁니다. 만약 벨이 울린다면 파라데이 케이지에 결함이 있거나 셀룰러 주파수에 맞춰져 있지 않은 것입니다. "전원이 꺼져 있거나 연결할 수 없다"는 안내가 나온다면 차폐가 제대로 작동하는 것입니다.',
      ],
    },
    {
      type: 'title',
      text: '괴담 vs 과학적 사실',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"전자레인지는 물의 분자 구조를 바꾼다"</strong> - 거짓. 전자레인지의 방사선은 <em>비전리 방사선</em>입니다. 화학 결합을 끊거나 DNA를 변형시킬 만큼의 에너지가 없습니다. 단순히 물 분자를 진동시켜 운동 에너지(온도)를 높일 뿐입니다.',
        '<strong>"음식에 방사선이 축적된다"</strong> - 거짓. 전자기파는 빛과 같습니다. 스위치를 끄면 즉시 사라집니다. 데워진 음식은 전자기파를 방출하지 않으며, 모닥불이나 팬처럼 적외선(열)만 방출합니다.',
        '<strong>"회전하는 접시를 보고 있으면 눈이 나빠진다"</strong> - 부분적으로 사실. 도어의 유리는 2.45GHz 파장을 차단하는 메시로 설계되어 있습니다. 하지만 메시가 손상되었다면 유리는 전자기파를 막지 못합니다. 눈의 수정체는 열에 매우 민감하고 혈액 순환이 잘 되지 않아, 누설 부위 근처에서 장시간 직접 노출되면 열성 백내장이 발생할 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '이 디지털 탐지기는 어떻게 작동하나요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '본 도구는 방사선을 직접 측정하지는 않지만(스마트폰에는 해당 센서가 없습니다), <strong>주요 증상</strong>을 측정합니다. 2.45GHz 방사선 분자가 유출되면 기기의 WiFi 신호와 "충돌"합니다. 이는 다음을 유발합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>패킷 재전송:</strong> 라우터가 메시지가 손상된 것을 감지하고 다시 보내야 하므로 지연 시간이 증가합니다.',
        '<strong>지터 변동:</strong> 응답 시간의 불안정성을 측정하는 지표입니다. 높은 지터는 강력한 외부 간섭의 명백한 신호입니다.',
        '<strong>성능 저하:</strong> 무선 스펙트럼 포화로 인해 전송 속도가 급감합니다.',
        '<strong>배경 노이즈:</strong> 전자레인지가 노이즈를 주입하여 "노이즈 플로어"를 높임으로써 기기가 실제 데이터와 전자기적 무질서를 구분하기 어렵게 만듭니다.',
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

