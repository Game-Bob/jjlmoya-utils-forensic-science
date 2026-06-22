import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'entropy-second-law-simulator';
const title = '熵与热力学第二定律模拟器';
const description = '通过可视化扩散模拟器和实时熵值图表，观察热粒子室与冷粒子室混合、均衡并推动熵增的过程。';

const howTo = [
  {
    name: '设置左右温度',
    text: '选择一个较冷的腔室和一个较热的腔室，以产生初始的热不平衡。温差越大，系统不可逆地趋向平衡的过程就越容易观察。',
  },
  {
    name: '调节隔板开口',
    text: '打开或收窄两个腔室之间的通道。开口越宽，粒子和能量的扩散速度就越快，熵值曲线的上升也就越迅速。',
  },
  {
    name: '观察粒子箱',
    text: '蓝色粒子代表低能量运动，橙色粒子代表高能量运动。随着碰撞和穿行的累积，粒子箱内变得越来越混合，有序度不断降低。',
  },
  {
    name: '解读熵值图表',
    text: '追踪空间混合与热均衡如何共同形成一个持续上升的熵值评分。该曲线旨在帮助直观理解孤立系统为何会向概率更高的宏观态演化。',
  },
];

const faq = [
  {
    question: '为什么在这个模拟器中熵会增加？',
    answer: '初始状态是人为有序的：一侧较冷，另一侧较热。一旦隔板允许交换，混合排列的数量远远多于分离排列的数量，因此系统自然地向概率压倒性地更高的宏观态移动。',
  },
  {
    question: '这能精确证明第二定律吗？',
    answer: '不能。这是一个教学用的粒子模型，而非分子动力学实验室代码。它捕捉了不可逆扩散和热均衡背后的核心直觉，这正是大多数用户询问熵为何趋于增加时的搜索意图。',
  },
  {
    question: '这里的空间熵和热熵是什么意思？',
    answer: '空间熵衡量粒子在左右两个腔室之间分布的均匀程度。该模拟器中的热熵衡量两半之间能量差距的大小。总熵值将两者融合，使用户可以同时观察混合和热流。',
  },
  {
    question: '为什么即使在接近平衡时粒子仍在运动？',
    answer: '平衡并不意味着运动停止。它意味着宏观不平衡的消失。分子仍然在运动、碰撞和交换能量，只是不再有可利用的持续大规模方向性。',
  },
  {
    question: '熵值会不会瞬间减小？',
    answer: '在微观系统中，小的涨落是可能的。这个可视化工具平滑了这些涨落，并强调整体的统计趋势：在一个大型孤立系统中，低熵有序状态的概率远低于混合状态。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: '不可逆混合',
    results: '熵模拟器结果',
    particleBox: '粒子扩散箱',
    barrier: '隔板',
    entropyGraph: '熵值随时间变化图',
    liveTrace: '实时轨迹',
    highEntropy: '高',
    midEntropy: '中',
    lowEntropy: '低',
    controls: '熵模拟器控制',
    leftTemperature: '左侧温度',
    rightTemperature: '右侧温度',
    gateAperture: '隔板开口',
    pause: '暂停',
    reset: '重置状态',
    resume: '继续',
    totalEntropy: '总熵',
    particleBalance: '左右粒子数',
    spatialEntropy: '空间熵',
    thermalEntropy: '热熵',
    energyGap: '能量差',
    noteLabel: '解读',
    stateGradient: '梯度',
    stateMixing: '混合',
    stateEquilibrium: '平衡',
    note: '宏观态概率指向最大无序。',
  },
  seo: [
    {
      type: 'title',
      text: '热力学第二定律与不可逆扩散的熵模拟器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '使用这个熵模拟器来可视化物理学中最重要的概念之一：孤立系统从人为有序状态向更可能的混合状态演化。无需阅读熵的静态定义，你可以观察热室与冷室实时交换粒子和能量，同时一条实时曲线追踪着无序度的上升。',
    },
    {
      type: 'paragraph',
      html: '该工具专为"为什么熵会增加"、"第二定律如何工作"以及"什么是热扩散"等问题背后最常见的搜索意图而设计。目标不仅仅是给出关于无序的口号，而是以直观可见的方式将熵与概率、热流、混合和平衡联系起来。',
    },
    {
      type: 'title',
      text: '热力学第二定律在实际中意味着什么',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '第二定律指出，对于孤立系统，自发过程会向熵值更高的宏观态发展。用日常语言来说，这意味着一个高度有序的热布局，例如热粒子在一侧而冷粒子在另一侧，除非持续提供功来维持，否则无法保持分离状态。',
    },
    {
      type: 'paragraph',
      html: '这并非因为物质在神秘意义上"偏爱混沌"。而是因为对应于混合态的微观排列数量远远超过分离态。因此，熵将热力学与计数联系起来：兼容的微观态数量越大，熵值就越大。',
    },
    {
      type: 'title',
      text: '这个熵扩散模拟器的工作原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '粒子箱从一种低熵构型开始，隔板两侧存在温度不平衡。当腔室之间的通道打开时，粒子穿越、碰撞并将能量从一侧携带到另一侧。该模拟追踪两个直观的要素：<strong>空间熵</strong>（随着粒子分离度降低而增加）和<strong>热熵</strong>（随着左右能量分布差异缩小而增加）。',
    },
    {
      type: 'paragraph',
      html: '屏幕上显示的总熵评分是由这两个要素构建的教学代理指标。它不是实验室级别的状态函数，也不声称能重现完整的统计力学。其目的是帮助用户建立正确的直觉：不可逆热流和扩散都将系统推向平衡，因为平衡对应着更多可及的排列方式。',
    },
    {
      type: 'table',
      headers: ['视觉信号', '代表含义', '重要性'],
      rows: [
        ['蓝色与橙色粒子', '相对动能', '表明温度差异实际上是平均微观运动的差异。'],
        ['隔板开口', '腔室间交换的难易程度', '让你理解为什么运输路径改变时扩散速率会发生变化。'],
        ['空间熵计量器', '粒子的均匀分布程度', '说明仅混合本身就已使宏观态概率更高。'],
        ['热熵计量器', '左右能量差距的缩小程度', '表明平衡不仅关乎位置，还关乎能量的共享。'],
        ['熵值曲线', '随时间变化的趋势', '将不可逆性的抽象概念转化为可见的单向弛豫过程。'],
      ],
    },
    {
      type: 'title',
      text: '为什么每个粒子都遵循简单运动，熵却能增加？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '学生常常认为第二定律需要摩擦力、意图或一种特殊的"时间之箭力"。更深层的要点是统计性的。每个粒子都遵循局部规则，但当许多粒子相互作用时，混合宏观态的数量完全压倒了有序宏观态的数量。因此，系统几乎将所有时间都花在混合构型上，而只有极微小的一部分时间花在整齐分离的构型上。',
    },
    {
      type: 'paragraph',
      html: '这就是为什么一滴染料在水中扩散，为什么关闭加热器后房间温度会均衡，以及为什么热物体与冷物体接触时会冷却。反向过程在严格的微观意义上并不被牛顿运动所禁止，但对于大型系统来说统计上极不可能，因此在人类尺度上实际上从未被观察到。',
    },
    {
      type: 'title',
      text: '熵、平衡与常见误解',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>熵不仅仅是"杂乱"：</strong>更精确的概念是与相同宏观描述兼容的微观排列数量。',
        '<strong>平衡并不意味着静止：</strong>粒子持续运动，但它们的大规模不平衡相互抵消。',
        '<strong>热流具有方向性是因为概率具有方向性：</strong>共享能量的方式远比保持其尖锐分离的方式多得多。',
        '<strong>低熵并非不可能：</strong>它只需要来自孤立系统外部的约束、准备或做功。',
        '<strong>此模拟器是定性的：</strong>它提供物理直觉，而非精确的量热、配分函数或分子输运系数。',
      ],
    },
    {
      type: 'title',
      text: '何时使用此模拟器',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '用于课堂演示、物理复习、化学教育、科学写作和快速概念解释。当有人理解热量从高温流向低温，但尚未看清这与概率、宏观态计数以及热力学第二定律之间的关联时，此工具尤为有用。',
    },
    {
      type: 'paragraph',
      html: '如果你的目标是针对真实气体、发动机循环或实验室系统进行严格的热力学计算，你将需要状态方程、边界条件和实验验证的参数。如果你的目标是理解扩散为何不可逆以及熵为何趋于增加，那么这个模拟器正是为此问题而构建的。',
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
