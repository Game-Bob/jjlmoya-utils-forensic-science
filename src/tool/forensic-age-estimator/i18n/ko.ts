import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dental-skeletal-third-molar-age-estimator';
const title = '치아, 골격 및 제3대구치 기반 연령 추정기';
const description = '치아 발달, 골격 성숙도 및 제3대구치 지표를 바탕으로 법의학적 연령 구간을 추정하여 사례 선별 및 분류를 지원합니다.';

const howTo = [
  {
    name: '증거 강조 유형 선택',
    text: '균형 잡힌 분류를 위해 "혼합 증거"를, 치과적 소견이 더 명확할 때 "치아 우선"을, 방사선학적 골격 지표가 주요 정보원일 때 "골격 우선"을 선택하세요.',
  },
  {
    name: '각 성숙도 지표 평가',
    text: '각 지표를 0단계에서 8단계로 평가합니다. 낮은 단계는 초기 발달, 중간 단계는 청소년기 성숙, 높은 단계는 성숙 또는 성숙에 근접한 상태를 나타냅니다.',
  },
  {
    name: '단일 연령이 아닌 추정 구간으로 해석',
    text: '최소, 추정, 최대 연령 값을 함께 확인하세요. 생물학적 발달은 개인차가 크므로 법의학적 연령 평가는 반드시 구간으로 표현해야 합니다.',
  },
  {
    name: '지표 간 불일치 확인',
    text: '치아, 골격 및 제3대구치 단계가 서로 다른 연령 범위를 가리킬 경우, 결과를 탐색적 자료로 간주하고 추가 증거를 확보한 뒤 최종 판단을 내리십시오.',
  },
];

const faq = [
  {
    question: '이 추정기가 법적 성인 여부를 판정할 수 있나요?',
    answer: '아니요. 본 도구는 교육 및 분류 목적의 선별 계산기입니다. 법적 연령 판정은 검증된 공식 프로토콜, 전문가의 감정, 공식 신분 확인 절차 및 관할권별 법적 기준을 따라야 합니다.',
  },
  {
    question: '결과가 연령 구간으로 표시되는 이유는 무엇인가요?',
    answer: '치아 맹출, 골격 유합 및 제3대구치 발달은 조상, 영양 상태, 건강, 성별, 참조 집단 및 영상 촬영 방식에 따라 크게 다릅니다. 단일 연령보다 구간으로 표시하는 것이 과학적으로 더 정확하고 정직합니다.',
  },
  {
    question: '혼합 증거란 무엇인가요?',
    answer: '혼합 증거는 치아 발달, 골격 성숙도 및 제3대구치 지표를 종합적으로 고려합니다. 특정 지표가 다른 지표보다 확실히 더 신뢰하기 어려운 상황에서 유용합니다.',
  },
  {
    question: '제3대구치는 모든 사례에서 신뢰할 수 있나요?',
    answer: '제3대구치는 후기 청소년기 및 초기 성인기 연령 평가에 유용하지만 변이가 매우 큽니다. 치아 결손, 병리, 집단 간 차이, 그리고 방사선 사진의 품질에 따라 그 가치가 제한될 수 있습니다.',
  },
  {
    question: '실제 법의학적 감정에 사용할 수 있나요?',
    answer: '예비적 보조 도구로만 활용해야 합니다. 실제 법의학적 감정에는 검증된 학술적 방법론, 보정된 참조 데이터, 전문가의 독립적 검토, 그리고 불확실성과 한계에 대한 투명한 기술이 반드시 수반되어야 합니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: '법의학 사례 보드',
    controls: '법의학 연령 컨트롤',
    results: '법의학 연령 결과',
    maturityProfile: '동적 성숙도 프로필',
    screeningOnly: '선별 추정치',
    evidenceType: '증거 강조 유형',
    mixedEvidence: '혼합 증거',
    dentalPriority: '치아 우선',
    skeletalPriority: '골격 우선',
    dentalStage: '치아 발달 단계',
    epiphysealStage: '골단판 유합 단계',
    thirdMolarStage: '제3대구치 단계',
    minimumAge: '최소',
    likelyAge: '추정',
    maximumAge: '최대',
    maturityScore: '성숙도 점수',
    stageLabel: '단계',
    ageUnit: '세',
    dentalShort: '치아',
    boneShort: '골격',
    molarShort: '대구치',
    dentalStageHelp: '치관, 치근 및 치근단 형성 상태.',
    epiphysealStageHelp: '성장판 폐쇄 및 골격 유합 정도.',
    molarStageHelp: '제3대구치 석회화 및 치근단 폐쇄 정도.',
    dentalStage0: '없음',
    dentalStage1: '교두',
    dentalStage2: '치관',
    dentalStage3: '치근 시작',
    dentalStage4: '치근 절반',
    dentalStage5: '치근 완성',
    dentalStage6: '치근단 좁음',
    dentalStage7: '치근단 폐쇄 중',
    dentalStage8: '완료',
    epiphysealStage0: '열림',
    epiphysealStage1: '가장자리',
    epiphysealStage2: '좁아짐',
    epiphysealStage3: '다리',
    epiphysealStage4: '절반 유합',
    epiphysealStage5: '거의 유합',
    epiphysealStage6: '선만 존재',
    epiphysealStage7: '거의 닫힘',
    epiphysealStage8: '닫힘',
    molarStage0: '없음',
    molarStage1: '교두',
    molarStage2: '치관 시작',
    molarStage3: '치관 완성',
    molarStage4: '치근 시작',
    molarStage5: '치근 절반',
    molarStage6: '치근 완성',
    molarStage7: '치근단 폐쇄 중',
    molarStage8: '완료',
    confidenceexploratory: '탐색적',
    confidencemoderate: '중등도',
    confidencestrong: '강함',
    noteTriage: '법적 연령 결정이 아닌 분류용 추정치로만 사용하십시오.',
    noteFinalAssessment: '최종 법의학적 연령 평가는 방사선 검사, 치과 검사, 임상 병력 및 관할권별 기준을 통합해야 합니다.',
    noteWideInterval: '지표 간 4년 이상의 차이가 발생하여 추정 구간이 확장되었습니다.',
  },
  seo: [
    {
      type: 'title',
      text: '법의학 연령 추정기: 치아, 골격 및 제3대구치 선별 계산기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '본 법의학 연령 추정기는 공식 감정 전 생물학적 성숙도 증거를 신속하고 투명하게 정리할 수 있도록 돕습니다. 치아 발달, 골단판 유합, 제3대구치 단계를 통합하여 연령 구간을 산출합니다. <strong>법의학 연령 추정</strong>, <strong>치아 연령 평가</strong>, <strong>골격 성숙도 연령 추정</strong> 등 관련 연구를 위해 설계되었으며, 사용자가 지표의 의미와 결합 방식, 그리고 결과에 포함된 불확실성을 이해할 수 있도록 지원합니다.',
    },
    {
      type: 'paragraph',
      html: '결과는 <strong>최소, 추정, 최대 연령</strong>으로 표시됩니다. 생물학적 발달은 개인차가 크므로 단일 연령 표기는 오해를 살 수 있습니다. 영양 상태, 조상, 성별, 집단 특성, 영상 품질, 치과적 변수 등 다양한 요인이 결과에 영향을 미치므로, 이 도구는 공식적인 법적 결론이 아닌 구조화된 선별 보조 도구로 활용하시기 바랍니다.',
    },
    {
      type: 'title',
      text: '성숙도 지표의 이해',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '0~8단계의 지표는 생물학적 발달을 추상화하여 시스템 간의 비교를 용이하게 합니다. 단계 0은 발달 초기 혹은 부재를, 단계 8은 성숙 완료를 의미합니다. 이는 특정 임상 방법을 대체하는 것이 아니라, 여러 생물학적 증거를 교차 검증하기 위한 체계적인 접근법을 제공합니다.',
    },
    {
      type: 'table',
      headers: ['지표', '설명', '검색 의도', '주의사항'],
      rows: [
        ['치아 발달', '제3대구치를 제외한 치아의 형성 및 맹출 상태.', '소아·청소년의 치아 성숙도 평가.', '치과 질환, 발치 여부, 참조 집단과의 불일치로 인한 오차 가능성.'],
        ['골단판 유합', '골격 구조 내 성장판의 진행성 폐쇄.', '청소년 및 초기 성인기 성숙도 평가.', '관찰 부위, 성별, 내분비 상태, 영상 촬영 방식에 의존적.'],
        ['제3대구치 단계', '사랑니의 형성 및 성숙도.', '다른 치아가 성숙한 후기 청소년기 평가.', '변이가 큼; 무형성(agenesis) 및 매복 여부 확인 필수.'],
      ],
    },
    {
      type: 'title',
      text: '연령 구간의 해석',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '세 연령 값을 종합적으로 해석해야 합니다. <strong>추정 연령</strong>은 증거 강조 유형에 따라 계산된 가중 중앙값입니다. <strong>최소</strong> 및 <strong>최대</strong> 값은 실용적인 불확실성 범위를 정의합니다. 지표들이 일치할수록 범위는 좁아지며, 지표들이 상충할 경우 범위는 확장되고 신뢰도 라벨은 낮아집니다.',
    },
    {
      type: 'table',
      headers: ['결과 패턴', '해석', '권장 조치'],
      rows: [
        ['강한 신뢰도의 좁은 구간', '지표들이 상호 일치함.', '증거 자료를 문서화하고 법적 유효성 검토 여부 확인.'],
        ['중등도 구간', '일부 불일치 발생 또는 가중치 영향.', '영상 품질 및 단계 할당 재검토.'],
        ['넓은 탐색적 구간', '지표들이 상충함.', '단독 판단 지양, 추가 증거 확보 및 전문가 협의.'],
      ],
    },
    {
      type: 'title',
      text: '증거 모드 선택 (치아·골격·혼합)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>혼합 증거</strong>는 모든 지표를 종합하므로 일반적인 선별에 권장됩니다. 치과 데이터가 매우 상세할 때는 <strong>치아 우선</strong>을, 방사선학적 골격 데이터가 가장 강력한 근거라면 <strong>골격 우선</strong>을 선택하세요. 모드 선택은 데이터의 품질 자체를 높이는 것이 아니라, 통계적인 가중치를 조정하는 역할을 합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>치아 우선:</strong> 발달 상태가 명확하고 제3대구치 자료가 확보된 경우.',
        '<strong>골격 우선:</strong> 골단판 유합 정보가 가장 잘 정리된 경우.',
        '<strong>혼합 증거:</strong> 균형 잡힌 초기 스크리닝이 필요한 경우.',
        '<strong>신뢰도 라벨:</strong> 과도한 해석을 방지하기 위한 지표로 활용.',
      ],
    },
    {
      type: 'title',
      text: '법의학적 추정치와 신원 증명',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '연령 추정은 감정을 뒷받침하는 근거일 뿐, 신원을 완벽히 증명하거나 문서 검증을 대체할 수 없습니다. 이민 심사, 보호 조치, 형사 책임, 희생자 식별 등의 상황에서는 반드시 다학제적 접근이 필요합니다. 보고서에는 사용된 방법론, 참조 집단, 관찰자의 전문성, 신뢰도 및 연구의 한계가 명확히 명시되어야 합니다.',
    },
    {
      type: 'paragraph',
      html: '본 도구는 <strong>교육, 분류, 프로토콜 기획 및 커뮤니케이션</strong> 목적으로 설계되었습니다. 연령 관련 결론 도출에는 항상 주의가 필요하며, 18세와 같은 법적 기준점을 단일 계산기 도구만으로 결정해서는 안 됩니다.',
    },
    {
      type: 'title',
      text: '보고서 작성 전 체크리스트',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>증거 출처 확인:</strong> 치과 검사, 파노라마 방사선, 수근골 또는 쇄골 영상 등 사용된 데이터원을 명시하세요.',
        '<strong>불완전 데이터 명시:</strong> 제3대구치 결손, 저화질 이미지, 발달 변이 등을 보고서에 기록하세요.',
        '<strong>방법론의 유효성 검증:</strong> 관할권에서 통용되는 전문적인 치과/골격 방법론을 선택하세요.',
        '<strong>불확실성 기술:</strong> 범위를 제시하고, 정확한 역연령을 암시하는 단정적 표현을 피하세요.',
        '<strong>전문가 리뷰:</strong> 중요도가 높은 사례는 반드시 법치의학자, 방사선과 의사, 인류학자의 재검토를 거치세요.',
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