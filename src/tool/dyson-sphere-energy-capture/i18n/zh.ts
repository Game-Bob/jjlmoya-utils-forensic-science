import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = '戴森球能量捕获模拟器';
const description = '通过捕获功率、轨道半径、材料质量和卡尔达肖夫尺度覆盖率，比较戴森群、环形、刚性壳和静态镜云等巨型结构设计。';

const howTo = [
  {
    name: '选择恒星类型',
    text: '选择M型矮星、类太阳G型星、A型星、红巨星或蓝巨星，以设定光度和质量。',
  },
  {
    name: '选择收集器结构',
    text: '比较戴森群、赤道环、刚性壳和静态镜云的不同捕获假设。',
  },
  {
    name: '调整覆盖率和温度',
    text: '改变覆盖率和工作温度，观察捕获功率和安全轨道半径如何变化。',
  },
  {
    name: '查看卡尔达肖夫目标',
    text: '使用卡尔达肖夫目标滑块估算达到所选文明能量等级所需的恒星输出比例。',
  },
];

const faq = [
  {
    question: '戴森群是什么？',
    answer: '戴森群是围绕恒星运行的大量独立收集器的集合，通常比刚性壳更具可行性。',
  },
  {
    question: '为什么轨道半径会变化？',
    answer: '轨道半径由收集器的工作温度和恒星光度共同决定。温度越高的收集器可以在更近的轨道上运行。',
  },
  {
    question: '卡尔达肖夫评级是什么意思？',
    answer: '它将捕获的瓦特数转换为对数制的文明能量等级。',
  },
  {
    question: '材料质量精确吗？',
    answer: '不精确。这是基于面积、面密度和稳定性假设的教育性估算。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: '戴森收集器可视化',
    starType: '恒星类型',
    structureType: '结构',
    coverage: '收集器覆盖率',
    operatingTemp: '工作温度',
    kardashevTarget: '卡尔达肖夫目标',
    kardashevRating: '当前评级',
    capturedPower: '捕获功率',
    optimalRadius: '最优半径',
    targetCoverage: '目标覆盖率',
    materialMass: '材料质量',
    captureMeter: '目标捕获进度',
    statusReady: '调整系统以估算收集器需求。',
    statusUnderbuilt: '覆盖率低于所选目标。',
    statusBalanced: '覆盖率接近所选目标。',
    statusExtreme: '此配置大幅超过目标。',
    orbitalPeriod: '轨道周期',
    collectorArea: '收集器面积',
    mercuryMasses: '{value} 水星质量',
    kilograms: '{value} 千克',
    daysUnit: '{value} 天',
    starMDwarf: 'M型矮星',
    starSun: '类太阳G型星',
    starA: 'A型星',
    starRedGiant: '红巨星',
    starBlueGiant: '蓝巨星',
    structureSwarm: '戴森群',
    structureRing: '赤道环',
    structureShell: '刚性壳',
    structureStatite: '静态镜云',
  },
  seo: [
    { type: 'title', text: '戴森球能量捕获模拟器', level: 2 },
    { type: 'paragraph', html: '本模拟器使用一阶恒星能量计算，比较戴森群、环形、壳体和静态云等概念。' },
    { type: 'paragraph', html: '估算捕获功率、热轨道半径、收集器面积、轨道周期、材料质量以及达到卡尔达肖夫目标所需的覆盖率。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
