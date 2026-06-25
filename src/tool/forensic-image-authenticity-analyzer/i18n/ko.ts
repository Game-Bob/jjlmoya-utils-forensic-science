import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-image-metadata-authenticity-analyzer';
const title = '이미지 메타데이터 및 진위성 포렌식 분석기';
const description = '이미지 헤더, EXIF 촬영 정보, GPS 좌표, 편집 소프트웨어 흔적, 원시 바이트를 브라우저에서 로컬로 점검합니다.';

const howTo = [
  { name: '원본 증거 보존', text: '포렌식 사본으로 작업하고 원본 파일과 암호학적 해시는 이 브라우저 도구 외부에 보관하세요.' },
  { name: '이미지 로컬 불러오기', text: 'JPEG 또는 PNG를 드래그하거나 선택하세요. 파일은 브라우저 메모리에서만 읽히며 업로드되지 않습니다.' },
  { name: '메타데이터와 위치 확인', text: '촬영 시각, 카메라 정보, 소프트웨어, GPS 필드를 사건 서술 및 수집 기록과 비교하세요.' },
  { name: '무결성 신호 해석', text: '편집 흔적과 누락 필드는 조작의 증거가 아니라 조사 단서로 취급하세요.' },
  { name: '16진 미리보기 확인', text: '강조된 헤더 및 메타데이터 영역을 사용해 컨테이너 구조를 파악하고 심화 분석용 오프셋을 기록하세요.' },
];

const faq = [
  { question: '메타데이터만으로 사진의 진위를 입증할 수 있나요?', answer: '아니요. 메타데이터는 제거, 복사, 수정될 수 있습니다. 진위성 판단에는 파일 구조, 출처, 해시, 시각적 검사, 압축 분석, 검증된 포렌식 방법을 함께 사용해야 합니다.' },
  { question: 'Adobe 또는 GIMP 흔적은 악의적 편집의 증거인가요?', answer: '아니요. 소프트웨어가 메타데이터를 기록했거나 파일을 내보냈을 가능성을 보여줄 뿐입니다. 정당한 색보정, 편집부 처리, 증거 준비 과정에서도 같은 흔적이 남을 수 있습니다.' },
  { question: '이미지가 업로드되나요?', answer: '아니요. 분석은 브라우저 메모리에서 수행됩니다. 그래도 민감한 자료를 어떤 소프트웨어에서든 열기 전에 조직의 증거 취급 정책을 따르세요.' },
  { question: 'GPS 데이터가 없을 수 있는 이유는 무엇인가요?', answer: '카메라가 GPS를 지원하지 않거나, 위치 기록이 꺼져 있거나, 플랫폼이 메타데이터를 제거했거나, 파일이 재인코딩되었을 수 있습니다.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacy: '로컬 전용 바이너리 검사',
    dropTitle: '증거 테이블에 이미지를 올리세요',
    dropHint: '여기에 JPEG 또는 PNG를 놓거나 파일을 선택하세요. 업로드는 이루어지지 않습니다.',
    chooseFile: '이미지 선택',
    replaceFile: '이미지 교체',
    waiting: '증거 대기 중',
    metadata: '촬영 메타데이터',
    integrity: '무결성 신호',
    location: '기록된 위치',
    hex: '16진 증거 창',
    hexHint: '처음 512바이트 · 시안 헤더 · 호박색 메타데이터 · 중립 이미지 데이터',
    noData: '읽을 수 있는 값 없음',
    noGps: '읽을 수 있는 GPS 좌표를 찾지 못했습니다.',
    mapLink: 'OpenStreetMap에서 좌표 열기',
    score: '휴리스틱 신뢰도',
    disclaimer: '높은 점수는 진위를 입증하지 않습니다. 원본을 보존하고 암호학적 해시를 계산하며, 사건 결론에는 검증된 실험실 절차를 사용하세요.',
    fileName: '파일',
    fileSize: '크기',
    fileType: '컨테이너',
    camera: '카메라',
    captured: '촬영됨',
    software: '소프트웨어',
    coordinates: '좌표',
    statusNoObvious: '명백한 편집 징후 없음',
    statusReview: '재검토 권장',
    statusEditing: '편집 서명 감지',
    processing: '바이너리 증거 읽는 중...',
    loadError: '파일을 분석할 수 없습니다. 유효한 JPEG 또는 PNG 이미지를 선택하세요.',
  },
  seo: [
    { type: 'title', text: '이미지 메타데이터와 진위성 신호를 분석하는 방법', level: 2 },
    { type: 'paragraph', html: '이미지 메타데이터 포렌식 분석기는 수사관, 기자, 법무팀, 컴플라이언스 검토자, 연구자가 <strong>이미지 메타데이터가 사진에 대해 실제로 무엇을 말해 줄 수 있는가</strong>라는 높은 의도의 질문에 답하도록 돕습니다. 메타데이터는 촬영, 위치, 소프트웨어 처리, 파일 구조에 대한 유용한 단서를 줄 수 있지만 독립적인 진실 판정 기계는 아닙니다. 가장 큰 가치는 트리아지에 있습니다.' },
    { type: 'paragraph', html: '이 브라우저 기반 도구는 단순한 EXIF 덤프 이상을 원하는 사용자를 위해 설계되었습니다. 선택한 JPEG 또는 PNG를 로컬에서 읽고 카메라 필드, 촬영 시각, 소프트웨어 태그, 좌표, 컨테이너 단서, 초기 바이트를 한곳에 보여줍니다. 이는 <em>사진 진위 확인</em>, <em>EXIF 메타데이터 분석</em>, <em>이미지가 편집되었는지 확인하는 방법</em> 같은 검색 의도를 지원합니다.' },
    { type: 'paragraph', html: '핵심 원칙은 결과를 판결이 아니라 맥락으로 읽어야 한다는 점입니다. 메타데이터가 유용해도 이미지가 오해를 부를 수 있고, 메타데이터가 거의 없어도 이미지가 진짜일 수 있습니다. 따라서 메타데이터는 출처, 해시, 증언, 기기 이력, 검증된 검사법과 대조해야 하는 하나의 증거 층으로 다뤄야 합니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

