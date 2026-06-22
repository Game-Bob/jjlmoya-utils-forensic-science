import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'conway-life-rule-lab';
const title = '康威生命游戏规则实验室';
const description = '使用 B/S 规则、图案种子、实时指标和响应式模拟棋盘，运行、编辑并比较康威式细胞自动机。';

const howTo = [
  {
    name: '播种棋盘',
    text: '选择滑翔机、脉冲星或 Gosper 枪等图案，将其放置在网格上，或随机生成初始种群。',
  },
  {
    name: '运行模拟',
    text: '使用播放、暂停、单步和速度控制，观察诞生、死亡、密度和稳定性如何随时间演变。',
  },
  {
    name: '更改规则',
    text: '切换预设或输入 B/S 规则（如 B3/S23、B36/S23 或 B3678/S34678），以比较不同的自动机。',
  },
];

const faq = [
  {
    question: '生命游戏中的 B/S 记法是什么？',
    answer: 'B/S 记法列出创建新活细胞的邻居计数，以及让现有活细胞存活的计数。康威生命游戏是 B3/S23：死细胞在恰好三个邻居时诞生，活细胞在两个或三个邻居时存活。',
  },
  {
    question: '为什么这个工具叫规则实验室而不仅仅是模拟器？',
    answer: '经典的康威规则已包含在内，但模拟器的设计目标是比较类生命细胞自动机的不同家族。编辑诞生和存活计数会改变长期行为，产生复制器、波、冻结岛、混沌增长或灭绝。',
  },
  {
    question: '模拟器中的稳定性是什么意思？',
    answer: '稳定性估计群落在上一代中变化了多少。高稳定性意味着相对于种群而言诞生或死亡的细胞很少；低稳定性意味着棋盘处于动荡状态或正在快速重组。',
  },
  {
    question: '棋盘有边界吗？',
    answer: '模拟使用环形（toroidal）包裹，左边界连接到右边界，上方连接到下方。这使图案能够自然移动，而不会在硬边界处消失。',
  },
  {
    question: '我可以绘制自己的起始图案吗？',
    answer: '可以。暂停模拟，点击或轻触棋盘上的细胞以切换它们的状态。您可以将手绘细胞与内置图案结合，然后在任何规则预设下运行结果。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: '类生命游戏细胞自动机棋盘',
    play: '播放',
    pause: '暂停',
    step: '单步',
    clear: '空白画布',
    randomize: '随机',
    ruleLabel: '规则记法',
    ruleHelp: '诞生 / 存活计数',
    speedLabel: '节奏',
    densityLabel: '初始密度',
    patternLabel: '图案',
    placePattern: '放置图案',
    generation: '世代',
    population: '数量',
    density: '密度',
    stability: '稳定性',
    births: '诞生',
    deaths: '死亡',
    achievementsLabel: '实验日志',
    achievementPulsar: '脉冲星',
    achievementPulsarDescription: '检测到周期 2 振荡',
    achievementImmortal: '不朽',
    achievementImmortalDescription: '在完全稳定下达到第 500 代',
    achievementBigBang: '大爆炸',
    achievementBigBangDescription: '低密度随机种子超过 1,000 个活细胞',
    presetClassic: '经典康威',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: '昼夜',
    patternGlider: '滑翔机',
    patternGosper: 'Gosper 枪',
    patternPulsar: '脉冲星',
    patternRPentomino: 'R-五连块',
    colonyStatus: '群落信号',
    statusFrozen: '稳定',
    statusGrowing: '扩张中',
    statusFading: '衰退中',
    statusChaotic: '波动',
    invalidRule: '请使用 B3/S23 这样的 B/S 记法。',
  },
  seo: [
    { type: 'title', text: '可编辑规则的康威生命游戏模拟器', level: 2 },
    { type: 'paragraph', html: '这个康威生命游戏规则实验室让您运行经典细胞自动机，然后有意改变并比较其规则。棋盘支持直接绘制、图案放置、随机种子、逐步检查、可变节奏，以及种群、密度、诞生、死亡和稳定性的实时测量。' },
    { type: 'title', text: 'B/S 规则如何改变游戏', level: 3 },
    { type: 'paragraph', html: '类生命细胞自动机通常用 <strong>B/S 记法</strong>书写。B 侧定义死细胞诞生所需的活邻居数；S 侧定义活细胞存活所需的邻居数。康威的原始规则 <strong>B3/S23</strong> 之所以著名，是因为它处于灭绝与不受控增长之间的狭窄区域。' },
    { type: 'title', text: '读取实时指标', level: 3 },
    { type: 'paragraph', html: '种群和密度显示有多少细胞存活，但并未讲述完整的故事。诞生和死亡揭示当前活动水平，而稳定性则估计群落是否正在稳定为振荡器、冻结为静止结构，或保持动荡状态。' },
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
