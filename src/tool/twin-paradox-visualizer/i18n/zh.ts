import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'twin-paradox-visualizer';
const title = '双生子悖论可视化器: 狭义相对论的时间膨胀';
const description = '直观展示狭义相对论如何让高速旅行的双胞胎比留在地球上的那个更年轻地返回。';

const howTo = [
  {
    name: '设置飞船速度',
    text: '使用速度滑块选择光速的百分比，观察洛伦兹因子如何增加。',
  },
  {
    name: '选择地球参考系的任务时长',
    text: '调整留在参考系中的双胞胎在整个往返旅程中度过的年数。',
  },
  {
    name: '比较时钟和世界线',
    text: '读取年龄差、飞船经过时间、地球参考系距离以及标志着旅行双胞胎变换惯性系的弯曲世界线。',
  },
];

const faq = [
  {
    question: '狭义相对论中的双生子悖论是什么？',
    answer: '双生子悖论是一个思想实验，其中一个双胞胎以相对论速度在太空旅行，后来返回地球时比留在家里的双胞胎更年轻。它感觉上是悖论，因为一开始每个双胞胎都可以描述对方在运动，但旅行双胞胎在折返时改变了惯性系，因此通过时空的两条路径并不对称。',
  },
  {
    question: '为什么旅行双胞胎衰老得更慢？',
    answer: '在狭义相对论中，经过的固有时取决于通过时空的路径。相对于惯性观测者以速度v运动的时钟，其走时慢了一个洛伦兹因子gamma。旅行者在去程和返程中积累的固有时比留在地球上的双胞胎少。',
  },
  {
    question: '加速度是导致年龄差异的原因吗？',
    answer: '加速度很重要，因为它让旅行者能够反转方向并与地球重逢，但年龄差是根据完整的时空路径计算的，而不仅仅是加速度。即使折返非常短暂，旅行路径仍然会比地球路径包含更少的固有时。',
  },
  {
    question: '洛伦兹因子gamma是什么意思？',
    answer: '洛伦兹因子gamma等于1除以1减去v平方除以c平方的平方根。它告诉你惯性系之间的时间间隔、长度和能量有多大差异。在日常速度下，gamma几乎为1，但在接近光速时会急剧上升。',
  },
  {
    question: '这种效应能在现实生活中测量到吗？',
    answer: '能。时间膨胀已经通过快速粒子、飞机上的原子钟、卫星定位系统和粒子加速器测量过。双生子悖论使用了一个极端的旅行故事，但其背后的时钟效应是现代物理学中经常验证的一部分。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: '双生子悖论时空可视化',
    controlsTitle: '双生子悖论控制',
    worldlineLabel: '地球双胞胎与旅行双胞胎的世界线图',
    earthTwin: '地球双胞胎年龄',
    travelingTwin: '旅行者年龄',
    presetCruise: '巡航',
    presetRelativistic: '相对论性',
    presetExtreme: '极端',
    velocityLabel: '飞船速度',
    earthYearsLabel: '地球经过时间',
    ageGapLabel: '重逢时年龄差',
    gammaLabel: '洛伦兹因子',
    shipTimeLabel: '旅行者固有时',
    distanceLabel: '折返距离',
    yearsUnit: '年',
    yearsShortUnit: '年',
  },
  seo: [
    {
      type: 'title',
      text: '狭义相对论双生子悖论计算器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '双生子悖论可视化器将狭义相对论中最著名的思想之一转化为交互式时空图。将飞船速度设为光速的一个百分比，选择地球上经过多少年，计算器就会算出洛伦兹因子、旅行者固有时、重逢时的年龄差以及到折返点的距离。视觉布局将地球时钟与飞船时钟分开，使得不对称性显而易见，而不是隐藏在公式之中。',
    },
    {
      type: 'title',
      text: '计算原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '核心量是洛伦兹因子: gamma = 1 / sqrt(1 - v^2 / c^2)。对于恒定巡航速度的简单往返旅程，旅行者经历的时间等于地球参考系任务时长除以gamma。这两个时长之差就是双胞胎重逢时的年龄差。该工具还显示地球参考系中的折返距离，等于总地球时间的一半乘以以光年每年为单位的飞船速度。',
    },
    {
      type: 'table',
      headers: ['速度', '洛伦兹因子', '旅行者时钟速率', '物理意义'],
      rows: [
        ['0.50c', '1.155', '地球速率的86.6%', '显著但适度的相对论效应。'],
        ['0.86c', '1.960', '地球速率的51.0%', '旅行者在巡航期间衰老速度大约减半。'],
        ['0.98c', '5.025', '地球速率的19.9%', '极端的时间膨胀主导了任务结果。'],
      ],
    },
    {
      type: 'title',
      text: '为什么情况不对称',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '乍一看，每个双胞胎都可以说对方在运动，这使得结果看似矛盾。解决之道在于，地球双胞胎大致保持在一个惯性系中，而旅行双胞胎则离开、反转方向并返回。这种惯性系的改变给旅行者带来了通过时空的不同路径。本工具绘制的世界线在折返事件处弯曲，而地球双胞胎的世界线保持笔直。',
    },
    {
      type: 'title',
      text: '如何阅读世界线图',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '世界线是一个物体通过时空而非仅仅通过空间的图谱。在本可视化器中，垂直的地球线代表留在家中的双胞胎。倾斜的红色路径代表离开地球并返回的旅行者。增加速度会使旅行者路径的倾斜更加明显，并减少飞船时钟上积累的固有时。',
    },
    {
      type: 'list',
      items: [
        '<strong>年龄差:</strong> 重逢时旅行者年轻了多少。',
        '<strong>洛伦兹因子:</strong> 将地球参考系时间与旅行者固有时联系起来的倍数。',
        '<strong>旅行者固有时:</strong> 飞船时钟测量的实际经过时间。',
        '<strong>折返距离:</strong> 旅行者反转航向前在地球参考系中的向外距离。',
      ],
    },
    {
      type: 'title',
      text: '时间膨胀的实际证据',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '双生子悖论是一个简洁的思想实验，但时间膨胀并非推测。上层大气中产生的缪子之所以能存活足够长的时间到达地面，是因为从地球视角看，它们运动的时钟变慢了。飞机上的原子钟实验和精密卫星导航也需要相对论修正。本可视化器背后的数学原理与现代GPS系统使用的时间基础设施是相同的。',
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
