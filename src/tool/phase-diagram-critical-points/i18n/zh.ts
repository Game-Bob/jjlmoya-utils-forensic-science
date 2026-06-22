import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'phase-diagram-critical-points-visualizer';
const title = '相图与临界点可视化工具';
const description = '在带有三相点和临界点标记的交互式压力-温度相图中探索固态、液态、气态和超临界区域。';

const howTo = [
  {
    name: '选择物质',
    text: '在水、二氧化碳和氮气之间切换，观察真实的三相点和临界点如何重塑相图。',
  },
  {
    name: '移动温度和压力',
    text: '使用滑块将样品放置在压力-温度平面上。相图会实时更新活跃的相区域和样品标记。',
  },
  {
    name: '观察临界光晕',
    text: '向气液边界的末端移动，观察潜热逐渐消失，液体和气体的区别消失并转变为超临界流体。',
  },
  {
    name: '阅读教学面板',
    text: '使用相标签、潜热计和点读数，将可视化的相图与热力学术语联系起来。',
  },
];

const faq = [
  {
    question: '什么是相图？',
    answer: '相图显示了在不同温度和压力组合下，物质的哪种状态是稳定的。边界线标明了两个相可以平衡共存的条件。',
  },
  {
    question: '在临界点会发生什么？',
    answer: '在临界点，气液边界终止。超过临界温度和临界压力后，物质变成超临界流体，液体和气体之间不再有明确区分。',
  },
  {
    question: '为什么水的熔化线不同？',
    answer: '水很特殊，因为在熔点附近冰的密度低于液态水。增加压力有利于密度更高的液相，因此固液边界的斜率与许多其他物质不同。',
  },
  {
    question: '绘制的曲线在实验室中精确吗？',
    answer: '不精确。该工具使用基于已发布的三相点和临界点值的简化曲线。它专为概念学习而设计，不能替代过程工程或安全计算。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: '相图控制',
    substance: '物质',
    units: '单位',
    scientificUnits: '科学单位 (K, MPa)',
    metricUnits: '公制 (摄氏度, kPa)',
    imperialUnits: '英制 (华氏度, psi)',
    temperature: '温度',
    pressure: '压力',
    diagram: '压力-温度相图',
    sample: '样品状态',
    phase: '稳定相',
    triplePoint: '三相点',
    criticalPoint: '临界点',
    vaporCurve: '气液边界',
    meltingLine: '固液边界',
    latentHeat: '潜热对比',
    criticalProximity: '临界接近度',
    coordinates: '坐标',
    solid: '固态',
    liquid: '液态',
    gas: '气态',
    supercritical: '超临界',
    low: '低',
    high: '高',
    reset: '重置',
    interpretation: '解读',
    note: '边界线标示共存区域，区域标示所选条件下最稳定的相。',
  },
  seo: [
    {
      type: 'title',
      text: '交互式相图可视化工具：三相点、沸腾曲线和临界点',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这个相图可视化工具将抽象的压力-温度图表转变为交互式地图。选择一种物质，移动温度和压力，观察样品被预测为固态、液态、气态还是超临界流体。目标是让相边界具有空间感：越过一条线会改变稳定状态，而接近临界点则会改变相边界的含义。',
    },
    {
      type: 'paragraph',
      html: '该工具面向学生、教师、科学作家以及任何寻求相图清晰解释的人。它强调了入门热力学中最重要的特征：三相共存的三相点、气液曲线、固液边界以及液气区别消失的临界终点。',
    },
    {
      type: 'title',
      text: '如何阅读压力-温度相图',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '相图将温度放在一个轴上，压力放在另一个轴上。每个区域显示在该条件下稳定的相。区域之间的线是共存曲线：沿着这些线，两个相可以保持平衡，而不是一个相完全取代另一个相。',
    },
    {
      type: 'table',
      headers: ['相图特征', '含义', '在工具中观察什么'],
      rows: [
        ['三相点', '固态、液态和气态共存', '边界交汇的低温连接点。'],
        ['气液曲线', '沸腾或冷凝平衡', '从三相点到临界点的曲线。'],
        ['固液边界', '熔化或凝固平衡', '分隔固态和液态区域的陡峭线条。'],
        ['临界点', '气液边界的终点', '潜热消失的高亮端点。'],
        ['超临界区域', '无明显的液气区别', '临界点之外的高温高压区域。'],
      ],
    },
    {
      type: 'title',
      text: '为什么临界点很重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在临界点以下，沸腾是一种相变：液体和蒸汽可以共存，并且在温度与边界条件保持关联的同时，能量可以以潜热的形式被吸收。在临界点，该边界终止。在此之上，密度连续变化，物质被描述为超临界流体，而不是普通的液体或气体。',
    },
    {
      type: 'paragraph',
      html: '这在化学、行星科学、工业提取、制冷和高压物理学中都很重要。例如，二氧化碳在相对容易达到的条件下就能变成超临界状态，这就是为什么超临界CO2被用于萃取和材料加工。水需要更高的温度和压力，因此其临界点对于电力系统和地球物理学很重要。',
    },
    {
      type: 'title',
      text: '这个可视化工具简化了什么',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '真实的相图可能包含多晶型、亚稳态、非理想混合物、多种固相以及实验拟合的状态方程。这个教育工具有意保持模型简洁。它将每种物质锚定在可识别的参考值上，并绘制平滑的教学曲线，使得无需热力学表格也能轻松检查主要概念。',
    },
    {
      type: 'list',
      items: [
        '<strong>用于培养直觉：</strong>有助于解释为什么高压锅、干冰、沸腾和超临界流体表现不同。',
        '<strong>不可用于工程极限：</strong>简化曲线不能替代经过认证的物性数据。',
        '<strong>关注拓扑结构：</strong>最重要的学习成果是理解相区域如何连接以及边界在哪里结束。',
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
