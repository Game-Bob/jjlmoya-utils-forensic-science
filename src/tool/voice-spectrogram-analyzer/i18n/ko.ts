import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "voice-spectrogram-analyzer-online";
const title = "음성 스펙트로그램 분석기 온라인";
const description = "두 개의 오디오 샘플의 주파수, 시간, 강도 및 추정 포르망트 패턴을 브라우저에서 개인적으로 분석하고 비교합니다.";

const howTo = [
  {
    "name": "두 개의 샘플 선택",
    "text": "로컬 오디오 파일이나 합성 모음 예제를 선택합니다."
  },
  {
    "name": "주파수 상한선 설정",
    "text": "음성 특성에 맞게 4kHz, 6kHz, 8kHz 중 선택합니다."
  },
  {
    "name": "스펙트로그램 분석",
    "text": "시간, 주파수, 포르망트 영역을 확인합니다."
  },
  {
    "name": "재생 및 비교",
    "text": "동기화된 커서로 소리를 들으며 공명 평균값을 비교합니다."
  }
];

const faq = [
  {
    "question": "음성 스펙트로그램은 무엇을 보여주나요?",
    "answer": "가로축은 시간, 세로축은 주파수, 색상의 밝기는 음향 에너지를 나타냅니다."
  },
  {
    "question": "내 녹음 파일이 업로드되나요?",
    "answer": "아니오. 모든 디코딩과 분석은 브라우저 내에서 로컬로 진행됩니다."
  },
  {
    "question": "F1, F2, F3 가이드는 무엇인가요?",
    "answer": "성도의 공명 주파수를 추정한 교육용 안내선입니다."
  },
  {
    "question": "이 도구로 화자를 식별할 수 있나요?",
    "answer": "아니오. 시각적 유사성만으로 화자의 동일성을 판단할 수 없습니다."
  },
  {
    "question": "주파수 상한선에 따라 포르망트가 달라지는 이유는?",
    "answer": "표시되는 주파수 범위에 따라 탐지되는 스펙트럼 피크가 달라지기 때문입니다."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "로컬 전용",
    "privacyNote": "녹음 파일은 이 기기에만 유지됩니다. 분석과 디코딩은 브라우저 내부에서 실행됩니다.",
    "loadHeading": "분석할 두 개의 음성 선택",
    "sampleALabel": "샘플 A",
    "sampleBLabel": "샘플 B",
    "chooseFileLabel": "오디오 선택",
    "replaceFileLabel": "오디오 교체",
    "dropHint": "오디오 파일을 여기에 끌어다 놓으세요 (최대 25MB). 처음 20초가 분석됩니다.",
    "presetHint": "합성 모음 연구 샘플로 즉시 테스트해보세요.",
    "presetWarmLabel": "따뜻한 모음 샘플",
    "presetBrightLabel": "밝은 모음 샘플",
    "emptySampleLabel": "오디오 대기 중",
    "readySampleLabel": "스펙트럼 플레이트 생성됨",
    "decodingSampleLabel": "스펙트럼 플레이트 분석 중",
    "errorSampleLabel": "샘플을 분석할 수 없습니다",
    "durationLabel": "재생 시간",
    "ceilingHeading": "주파수 상한선",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "미러 음성 스펙트로그램 스테이지",
    "mirrorViewLabel": "대칭 표시",
    "splitViewLabel": "병렬 표시",
    "playALabel": "샘플 A 재생",
    "playBLabel": "샘플 B 재생",
    "stopLabel": "정지",
    "timeAxisLabel": "시간",
    "frequencyAxisLabel": "주파수",
    "intensityLegendLabel": "밝은 색상일수록 강한 음향 에너지를 나타냅니다",
    "formantLegendLabel": "추정 포르망트 가이드",
    "sampleAEmptyCanvasLabel": "샘플 A를 불러오면 스펙트럼이 표시됩니다",
    "sampleBEmptyCanvasLabel": "샘플 B를 불러오면 스펙트럼이 표시됩니다",
    "comparisonHeading": "공명 주파수 분석",
    "comparisonNote": "유성음 구간의 평균 스펙트럼 피크 위치입니다. 차이는 물리적 측정값이며 동일성 증명이 아닙니다.",
    "formantOneLabel": "첫 번째 공명 영역 (F1)",
    "formantTwoLabel": "두 번째 공명 영역 (F2)",
    "formantThreeLabel": "세 번째 공명 영역 (F3)",
    "averageLabel": "평균",
    "differenceLabel": "차이",
    "unavailableLabel": "사용 불가",
    "statusEmptyLabel": "샘플을 불러와 시작하세요",
    "statusSingleLabel": "한 개의 플레이트가 준비되었습니다",
    "statusReadyLabel": "두 개의 스펙트럼 플레이트가 모두 준비되었습니다",
    "limitError": "파일 크기가 로컬 제한인 25MB를 초과합니다.",
    "decodeError": "브라우저가 이 오디오 형식을 디코딩할 수 없습니다.",
    "browserError": "이 브라우저에서는 Web Audio API를 사용할 수 없습니다.",
    "educationalNote": "교육용 시각화 도구입니다. 포르망트 가이드는 간이 계산에 기반하므로 화자 식별용으로 사용할 수 없습니다."
},
  seo: [
    { type: 'title', text: "스펙트로그램이 소리를 시각적 지도로 변환하는 원리", level: 2 },
    { type: 'paragraph', html: "<strong>음성 스펙트로그램</strong>은 녹음 데이터를 가로축 시간, 세로축 주파수로 배치한 시각적 지도로 변환합니다. 강한 음향 에너지는 더 밝은 색상으로 표현됩니다. 이는 단일 파형보다 지속 모음, 고조파, 정적 및 공명의 변화를 훨씬 명확하게 분석할 수 있게 해줍니다. 오디오 신호의 시각적 이해가 쉬워집니다." },
    { type: 'paragraph', html: "분석기는 신호를 짧은 중첩 구간으로 나누고 해밍 창을 적용한 후 FFT를 통해 주파수별 에너지 분포를 계산합니다. 짧은 구간은 특정 사건의 정확한 시점을 판별하게 해주며, 주파수 분해능은 에너지가 집중된 위치를 보여줍니다. 신호 처리의 불확정성 원리로 인해 시간과 주파수 분해능 사이에는 절충이 존재합니다." },
    { type: 'diagnostic', variant: 'info', title: "브라우저 내부 개인 처리", html: "두 개의 오디오 샘플의 주파수, 시간, 강도 및 추정 포르망트 패턴을 브라우저에서 개인적으로 분석하고 비교합니다." },
    { type: 'stats', columns: 3, items: [
      { value: "시간", label: "왼쪽에서 오른쪽으로 읽기" },
      { value: "Hz", label: "주파수 위치" },
      { value: "에너지", label: "밝기로 표현" }
    ] },
    { type: 'title', text: "포르망트 올바르게 해석하기", level: 3 },
    { type: 'paragraph', html: "포르망트는 성도 모양에 의해 형성되는 공명 영역입니다. 음성학에서 F1과 F2는 모음의 높낮이와 혀의 위치를 설명하는 데 흔히 사용됩니다. 본 분석기는 3개 주파수 영역의 매끄러운 피크를 추적하여 시각적 대역과 F1, F2, F3의 동작을 연결하여 관찰할 수 있도록 돕습니다." },
    { type: 'paragraph', html: "전문적인 포르망트 측정은 일반적으로 화자에 맞춘 선형 예측 부호화(LPC) 절차를 사용합니다. 피치 고조파, 비음화, 방 안의 울림, 배경 소음은 단순 추정치를 변형시킬 수 있습니다. 가이드라인을 교육적 참고용으로 활용하고 배경의 스펙트럼 표시를 함께 확인하세요." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 ~ 1000 Hz","첫 번째 공명 영역, 모음의 구강 개포도와 관련"],["F2","900 ~ 3000 Hz","두 번째 공명 영역, 혀의 전후 위치와 관련"],["F3","2000 ~ 4500 Hz","고차 공명 영역, 성도 전체의 형상에 영향을 받음"]] },
    { type: 'title', text: "주파수 설정이 분석에 미치는 영향", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "낮은 상한 (4 kHz)", description: "저주파 관찰에 용이", points: ["모음 관찰에 유용", "고주파 에너지 제외 가능성", "더 높은 정밀도를 보장하지는 않음"] },
      { title: "높은 상한 (6/8 kHz)", description: "더 많은 고주파 세부정보", highlight: true, points: ["밝은 음성에 적합", "마찰음 표시", "저주파 대역 압축"] }
    ] },
    { type: 'title', text: "책임감 있는 두 오디오 샘플 비교", level: 3 },
    { type: 'paragraph', html: "두 플레이트의 비교는 두 녹음이 동일한 모음이나 문장을 유사한 음향 조건에서 포함할 때 가장 유용합니다. 표시된 차이는 스펙트럼 피크 간의 절대적 물리 측정값이며 동일성 비율이나 생체 인식을 증명하지 않습니다." },
    { type: 'list', items: ["<strong>동일한 발화 내용 비교:</strong> 반복된 모음이나 단어는 서로 다른 문장보다 비교가 용이합니다.","<strong>녹음 환경 맞추기:</strong> 마이크와 방의 음향 특성은 스펙트럼에 큰 영향을 미칩니다.","<strong>커서와 함께 청취:</strong> 시각적 사건과 실제 소리의 순간을 동기화하여 확인합니다.","<strong>화자 동일성 주장 자제:</strong> 유사하게 보이는 스펙트로그램이라도 동일 화자를 증명하지 않습니다."] },
    { type: 'summary', title: "분석기 요약", items: ["지원되는 파일에서 로컬로 스펙트로그램을 생성합니다.","대칭 또는 병렬 플레이트에서 두 샘플을 시각적으로 탐색합니다.","음향 에너지와 포르망트 영역의 변화를 학습합니다.","법의학적 판정이 아닌 기술적·교육적 목적을 유지합니다."] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
