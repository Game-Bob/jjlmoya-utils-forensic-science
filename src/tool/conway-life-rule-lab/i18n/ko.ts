import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'conway-life-rule-lab';
const title = '콘웨이 생명 게임 규칙 연구실';
const description = 'B/S 규칙, 패턴 시드, 실시간 지표, 반응형 보드로 콘웨이형 세포 자동자를 플레이하고 편집하며 비교합니다.';

const howTo = [
  {
    name: '보드 씨 뿌리기',
    text: '글라이더, 펄서, 고스퍼 건 등의 패턴을 선택해 격자에 배치하거나 개체군을 무작위로 생성합니다.',
  },
  {
    name: '시뮬레이션 실행',
    text: '재생, 일시정지, 단계, 템포 컨트롤로 탄생, 죽음, 밀도, 안정성의 변화를 관찰합니다.',
  },
  {
    name: '규칙 변경',
    text: '프리셋을 전환하거나 B3/S23, B36/S23, B3678/S34678 같은 B/S 표기를 입력해 다양한 자동자를 비교합니다.',
  },
];

const faq = [
  {
    question: '생명 게임의 B/S 표기란 무엇인가요?',
    answer: 'B/S 표기는 새로운 살아있는 셀을 만드는 이웃 수와 기존 살아있는 셀이 생존하는 이웃 수를 나열합니다. 콘웨이 생명 게임은 B3/S23입니다: 죽은 셀은 정확히 세 이웃으로 탄생하고, 살아있는 셀은 두 개 또는 세 개의 이웃으로 생존합니다.',
  },
  {
    question: '왜 이 도구가 단순 시뮬레이터가 아닌 규칙 연구실인가요?',
    answer: '클래식 콘웨이 규칙이 포함되어 있지만, 시뮬레이터는 생명형 세포 자동자 계열을 비교하기 위해 구축되었습니다. 탄생 및 생존 수를 편집하면 장기 행동이 변하여 복제자, 파동, 얼어붙은 섬, 혼돈 성장 또는 멸종을 생성합니다.',
  },
  {
    question: '시뮬레이터에서 안정성은 무엇을 의미하나요?',
    answer: '안정성은 마지막 세대에서 군집이 얼마나 변화했는지 추정합니다. 높은 안정성은 개체 수에 비해 탄생하거나 죽은 셀이 적음을 의미하고, 낮은 안정성은 보드가 난류 상태이거나 빠르게 재편성되고 있음을 의미합니다.',
  },
  {
    question: '보드에 가장자리가 있나요?',
    answer: '시뮬레이션은 토러스형 감싸기를 사용하므로 왼쪽 가장자리는 오른쪽 가장자리와 연결되고 위쪽은 아래쪽과 연결됩니다. 이렇게 하면 패턴이 딱딱한 경계에서 사라지지 않고 자연스럽게 이동합니다.',
  },
  {
    question: '직접 시작 패턴을 그릴 수 있나요?',
    answer: '네. 시뮬레이션을 일시정지하고 보드의 셀을 클릭하거나 탭하여 전환할 수 있습니다. 손으로 그린 셀을 내장 패턴과 결합하고 어떤 규칙 프리셋 아래서도 결과를 실행할 수 있습니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Life 계열 세포 자동자 보드',
    play: '재생',
    pause: '일시정지',
    step: '단계',
    clear: '빈 캔버스',
    randomize: '무작위',
    ruleLabel: '규칙 표기',
    ruleHelp: '탄생 / 생존 수',
    speedLabel: '템포',
    densityLabel: '초기 밀도',
    patternLabel: '패턴',
    placePattern: '패턴 배치',
    generation: '세대',
    population: '개체 수',
    density: '밀도',
    stability: '안정성',
    births: '탄생',
    deaths: '죽음',
    achievementsLabel: '실험 기록',
    achievementPulsar: '펄서',
    achievementPulsarDescription: '주기 2 진동 감지',
    achievementImmortal: '불멸',
    achievementImmortalDescription: '완전 안정 상태로 500세대 도달',
    achievementBigBang: '빅뱅',
    achievementBigBangDescription: '낮은 밀도의 무작위 시드가 살아있는 셀 1,000개를 초과',
    presetClassic: '콘웨이 클래식',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: '낮과 밤',
    patternGlider: '글라이더',
    patternGosper: '고스퍼 건',
    patternPulsar: '펄서',
    patternRPentomino: 'R-펜토미노',
    colonyStatus: '군집 신호',
    statusFrozen: '안정',
    statusGrowing: '확장 중',
    statusFading: '감소 중',
    statusChaotic: '불안정',
    invalidRule: 'B3/S23 같은 B/S 표기를 사용하세요.',
  },
  seo: [
    { type: 'title', text: '규칙 편집 가능한 콘웨이 생명 게임 시뮬레이터', level: 2 },
    { type: 'paragraph', html: '이 콘웨이 생명 게임 규칙 연구실에서는 클래식 세포 자동자를 실행하고 규칙을 의도적으로 변경 및 비교할 수 있습니다. 보드는 직접 그리기, 패턴 배치, 무작위 시드, 단계별 검사, 가변 템포, 개체 수·밀도·탄생·죽음·안정성의 실시간 측정을 지원합니다.' },
    { type: 'title', text: 'B/S 규칙이 게임을 어떻게 바꾸는가', level: 3 },
    { type: 'paragraph', html: '생명형 세포 자동자는 흔히 <strong>B/S 표기</strong>로 작성됩니다. B 쪽은 죽은 셀이 탄생하기 위해 필요한 살아있는 이웃 수를 정의하고, S 쪽은 살아있는 셀이 생존하기 위해 필요한 이웃 수를 정의합니다. 콘웨이의 원래 규칙인 <strong>B3/S23</strong>은 멸종과 무제한 성장 사이의 좁은 영역에 위치하기 때문에 유명합니다.' },
    { type: 'title', text: '실시간 지표 읽기', level: 3 },
    { type: 'paragraph', html: '개체 수와 밀도는 살아있는 셀이 얼마나 되는지 보여주지만 전체 이야기를 전하지는 않습니다. 탄생과 죽음은 현재 활동 수준을 드러내고, 안정성은 군집이 진동자에 안정되고 있는지, 정지 구조에 고정되고 있는지, 아니면 난류 상태를 유지하고 있는지 추정합니다.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
