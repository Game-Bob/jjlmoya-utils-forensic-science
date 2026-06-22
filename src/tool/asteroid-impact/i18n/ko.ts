const slug = 'asteroid-impact-simulator';
const description = '실제 물리 법칙으로 소행성 충돌을 시뮬레이션하세요. 에너지, 분화구, 열 복사 및 충격파를 계산합니다. 당신은 칙술루브에서 살아남을 수 있을까요?';
const title = '소행성 충돌 시뮬레이터: 아포칼립스 계산기';
const howTo = [
    {
      name: '투사체 크기 선택',
      text: '10미터 크기의 작은 운석부터 10킬로미터 크기의 행성 파괴자까지 소행성 직경을 입력하세요.',
    },
    {
      name: '속도 및 각도 설정',
      text: '접근 속도와 진입 각도를 조정하세요(통계적으로 45°가 가장 가능성이 높은 값입니다).',
    },
    {
      name: '소행성 성질 정의',
      text: '분화구 깊이를 정확하게 계산하기 위해 소행성이 암석, 철, 얼음 중 무엇으로 되어 있는지 선택하세요.',
    },
    {
      name: '생존 판정 분석',
      text: '지도로 소행성을 드래그하고 얼마나 떨어져 있는지 표시하여 방사능, 지진, 충격파의 영향을 확인하세요.',
    },
  ];
const faq = [
    {
      question: '충돌 에너지는 어떻게 계산되나요?',
      answer: '주요 에너지는 운동 에너지인 (1/2) * 질량 * 속도²입니다. 암석형 소행성의 경우 3,000 kg/m³와 같은 현실적인 밀도를 사용하며, 전형적인 대기권 진입 속도(11~72 km/s)를 적용합니다. 결과 에너지는 TNT 메가톤 단위로 측정됩니다.',
    },
    {
      question: '열 충격파란 무엇인가요?',
      answer: '대기권에 진입할 때 소행성은 공기를 매우 격렬하게 압축하여 태양보다 천 배 더 밝은 화구를 만듭니다. 그 결과 발생하는 열 복사는 3도 화상을 입히고 충격 지점에서 수 마일 떨어진 곳의 숲에 불을 붙일 수 있습니다.',
    },
    {
      question: '왜 어떤 소행성은 분화구를 만들지 않나요?',
      answer: '작은 암석(50m 미만)은 첼랴빈스크의 사례처럼 대기압으로 인해 공중에서 부서지고 폭발(공중 폭발)하는 경우가 많습니다. 에너지는 강력한 압력 충격파로 방출되지만, 고체 상태로 지면에 부딪히지는 않습니다.',
    },
    {
      question: '실제 충돌 확률은 어느 정도인가요?',
      answer: '소규모 충돌(2013년 러시아 등)은 10년마다 발생합니다. 대규모 충돌(퉁구스카급)은 수 세기마다 발생합니다. 칙술루브와 같은 전 지구적 멸종 사건은 약 1억 년마다 발생합니다.',
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
    activateGPS: 'GPS 활성화',
    analysisLabel: '분석',
    dragToMap: '지도로 드래그',
    diameterLabel: '직경',
    velocityLabel: '속도',
    typeLabel: '유형',
    historicalData: '역사적 데이터',
    composition: '구성',
    rock: '암석',
    iron: '철',
    ice: '얼음',
    clearAll: '모두 지우기',
    searching: '검색 중...',
    gpsActive: 'GPS 활성',
    gpsError: 'GPS 오류',
    verdictSafe: '안전 지대',
    verdictSafeSub: '위협 없음',
    verdictShock: '충격파',
    verdictShockSub: '구조적 손상',
    verdictBurned: '열 복사',
    verdictBurnedSub: '극심한 위험',
    verdictVaporized: '그라운드 제로',
    verdictVaporizedSub: '직접 충돌',
    presetAerial: '공중 폭발',
    presetForest: '산림',
    presetComet: '혜성',
    presetELE: 'E.L.E. (대량 멸종)',
  },
  seo: [
    {
      type: 'title',
      text: '하늘이 무너질 때: 우주 아포칼립스의 물리학',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '소행성은 단순한 우주의 바위가 아닙니다. 초당 20km로 이동하는 우주의 총알이며, 지구상의 모든 핵무기를 합친 것보다 더 많은 에너지를 방출할 수 있습니다. 이 시뮬레이터는 추상적인 물리학을 가시적인 인류의 결과로 번역합니다.',
    },
    {
      type: 'title',
      text: '심판의 날 방정식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '모든 것은 운동 에너지에서 시작됩니다: <strong>E = ½mv²</strong>. 초당 20km로 이동하는 100미터 크기의 소행성은 약 0.5메가톤의 TNT 에너지를 방출합니다. 참고로 히로시마 원폭은 0.015메가톤이었습니다.',
    },
    {
      type: 'paragraph',
      html: '하지만 크기는 기하급수적으로 커집니다. 10배 더 큰 물체는 부피(및 질량)가 1,000배 더 크며, <strong>500메가톤</strong>에 해당하는 에너지를 방출합니다. 공룡을 멸종시킨 칙술루브 충돌은 <strong>1억 메가톤</strong>에 해당하는 에너지를 방출했습니다.',
    },
    {
      type: 'paragraph',
      html: '1km 크기의 소행성이 지구에 충돌하면 지구상의 모든 핵무기를 동시에 터뜨린 것보다 더 많은 에너지가 방출됩니다.',
    },
    {
      type: 'title',
      text: '파괴의 해부학: 아포칼립스의 동심원 층',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>분화구 (그라운드 제로):</strong> 분화구 직경은 E^0.3에 비례합니다. 1메가톤의 충돌은 약 1km의 분화구를 만듭니다. 내부의 모든 것은 즉시 기화됩니다.',
        '<strong>열 복사 (섬광):</strong> 화구는 강렬한 적외선을 방출합니다. E^0.41 km 거리에서는 의복에 불이 붙고 피부는 3도 화상을 입습니다.',
        '<strong>충격파 (망치):</strong> 과압파는 초음속으로 이동합니다. 1 psi에서는 유리가 깨지고, 5 psi에서는 건물이 붕괴됩니다.',
        '<strong>지진 (지진의 메아리):</strong> 충돌은 전 지구적인 지진파를 발생시킵니다. 칙술루브는 리히터 규모를 넘어서는 규모 11의 지진을 일으켰습니다.',
      ],
    },
    {
      type: 'title',
      text: '역사적 충돌: 과거로부터의 교훈',
      level: 3,
    },
    {
      type: 'table',
      headers: ['위치 및 연도', '크기', '에너지', '영향'],
      rows: [
        ['러시아 첼랴빈스크 (2013년)', '20미터', '500킬로톤', '100km 밖까지 충격파 전달, 1,500명 부상, 유리창 파손'],
        ['시베리아 퉁구스카 (1908년)', '50-60미터', '10-15메가톤', '2,000 km²의 산림 황폐화, 8,000만 그루의 나무 쓰러짐'],
        ['멕시코만 칙술루브 (6,600만 년 전)', '10km', '1억 메가톤', '지구 생명체의 75% 멸종'],
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


