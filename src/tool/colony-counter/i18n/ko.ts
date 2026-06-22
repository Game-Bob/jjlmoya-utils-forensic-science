const howTo = [
    {
      name: '접시 이미지 준비',
      text: '콜로니가 뚜렷하게 대비되도록 페트리 접시를 어두운 배경에 놓거나 투과 조명 장치를 사용하세요.',
    },
    {
      name: '콜로니 유형 식별',
      text: '형태, 색상 또는 크기에 따라 콜로니를 분류하기 위해 서로 다른 마커 색상을 사용하세요.',
    },
    {
      name: '각 콜로니 표시',
      text: '보이는 각 콜로니를 클릭하세요. 도구는 반복 클릭이나 누락을 방지하기 위해 각 클릭에 자동으로 번호를 매깁니다.',
    },
    {
      name: '최종 농도 계산',
      text: '최종 결과를 CFU/ml 또는 CFU/g 단위로 얻으려면 도말 부피와 희석 배수를 입력하세요.',
    },
  ];
const faq = [
    {
      question: 'CFU 측정이란 무엇인가요?',
      answer: '콜로니 형성 단위(CFU)는 샘플 내의 생존 가능한 세균 또는 진균 세포의 수를 추정하는 측정값입니다. 눈에 보이는 각 콜로니는 단일 세포 또는 세포 집단에서 시작된 것으로 간주합니다.',
    },
    {
      question: '디지털 카운터가 수동 측정보다 나은 이유는 무엇인가요?',
      answer: '디지털 측정은 콜로니를 시각적으로 표시하면서 숫자를 놓치는 인적 오류를 방지합니다. 또한 본 도구는 콜로니 유형을 색상으로 구분할 수 있어 혼합 배양 접시 분석에 용이합니다.',
    },
    {
      question: '밀리리터당 CFU는 어떻게 계산하나요?',
      answer: '측정된 콜로니 수에 희석 배수의 역수를 곱합니다. 예를 들어, 1:100 희석액에서 30개의 콜로니를 측정했다면 원래 샘플에는 3000 CFU/ml가 포함된 것입니다.',
    },
    {
      question: '접시가 "측정 불가"로 간주되는 경우는 언제인가요?',
      answer: '표준 미생물학에서 콜로니 수가 250~300개를 초과하면 접시가 너무 혼잡한 것(Too Numerous To Count, TNTC)으로 간주하며, 콜로니 간의 경쟁으로 인해 데이터의 신뢰성이 떨어집니다.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'colony-counter';
const title = '콜로니 카운터: 페트리 접시용 디지털 CFU 측정 도구';
const description = '페트리 접시의 세균 콜로니를 측정하기 위한 디지털 도구입니다. 유형을 구분하고 오류를 방지하며 CFU를 정밀하게 계산할 수 있습니다.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: '클릭하여 페트리 접시 이미지 업로드',
    uploadSubtitle: '접시 사진을 업로드하고 콜로니 측정을 시작하세요',
    currentModeLabel: '현재 모드',
    typeA: '유형 A',
    typeB: '유형 B',
    colonyType: '콜로니 유형',
    counting: '측정 중',
    totalCFU: '총 CFU',
    undo: '실행 취소',
    clearAll: '모두 지우기',
    infoClick: '접시를 클릭하여 콜로니를 표시하세요',
    infoChange: '표시하기 전에 유형을 변경하세요',
    confirmClear: '표시된 모든 콜로니를 지우시겠습니까?',
  },
  seo: [
    {
      type: 'title',
      text: '디지털 미생물학: 정밀한 콜로니 측정',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '페트리 접시의 세균 콜로니를 측정하는 것은 미생물학의 기본 기술입니다. 전통적으로 수동 카운터와 마커를 사용하여 수행되었으나, 숫자를 잊어버리거나 같은 콜로니를 두 번 표시하기 쉽습니다. 이 디지털 도구는 이러한 오류를 제거하고 콜로니 유형 간의 시각적 구분을 가능하게 합니다.',
    },
    {
      type: 'title',
      text: '콜로니 측정이 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '접시의 콜로니 수는 원래 샘플에 있는 생존 미생물의 농도에 직접 비례합니다. 이 데이터는 다음 분야에서 매우 중요합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>식품 품질 관리:</strong> 세균 오염 감지.',
        '<strong>제약 연구:</strong> 항생제 효능 평가.',
        '<strong>임상 진단:</strong> 환자 샘플의 감염 정량화.',
        '<strong>생명 공학:</strong> 재조합 단백질 생산을 위한 배양 최적화.',
      ],
    },
    {
      type: 'title',
      text: '콜로니 형성 단위 (CFU)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '접시에 보이는 각 콜로니는 하나의 생존 세포에서 유래한 것으로 가정합니다. 그래서 이를 <strong>CFU</strong>(Colony Forming Units: 콜로니 형성 단위)라고 부릅니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>농도 계산식:</strong><br><code>CFU/mL = (측정된 콜로니 수 × 희석 배수) / 도말 부피</code>',
    },
    {
      type: 'title',
      text: '측정 모범 사례',
      level: 3,
    },
    {
      type: 'title',
      text: '측정 가능한 범위',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '수동 측정의 이상적인 범위는 접시당 <strong>30~300개 콜로니</strong>입니다. 30개 미만은 통계적 오차가 너무 크고, 300개를 초과하면 콜로니가 뭉치기 시작하여 개별 구분이 불가능해집니다.',
    },
    {
      type: 'title',
      text: '콜로니 유형',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '선택 또는 감별 배지에서는 여러 콜로니 형태를 흔히 볼 수 있습니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>유형 A (청록색/초록색):</strong> 크고 점액성인 콜로니. 유당을 발효하는 그람 음성균의 전형적인 형태.',
        '<strong>유형 B (분홍색/보라색):</strong> 작고 반투명한 콜로니. 비발효균.',
      ],
    },
    {
      type: 'paragraph',
      html: '본 도구는 서로 다른 색상으로 최대 두 가지 콜로니 유형을 구분할 수 있어 물리적 마커 없이도 감별 측정을 용이하게 합니다.',
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

