import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'three-body-problem-simulator';
const title = '三体问题模拟器';
const description = '在二维平面上模拟三个引力体，可编辑质量、速度矢量、轨迹，并支持稳定或混沌预设。';

const howTo = [
  {
    name: '选择轨道预设',
    text: '从八字形轨道开始作为稳定基准，选择拉格朗日三角作为旋转平衡，或者选择弹弓预设观察明显的混沌交会。',
  },
  {
    name: '调整质量与速度矢量',
    text: '使用每个天体的滑块改变质量和初始速度分量。微小的改变可以保留模式、使其变形，或彻底破坏它。',
  },
  {
    name: '读取诊断信息',
    text: '关注总能量、最近和最远间距以及质心，以判断数值轨道是否保持有界还是正在漂散。',
  },
];

const faq = [
  {
    question: '什么是三体问题？',
    answer: '三体问题探究三个质量体在彼此引力作用下的运动方式。与二体问题不同，不存在一个通用的封闭方程来求解所有可能的构型，因此大多数实际案例都通过数值积分来探索。',
  },
  {
    question: '为什么三体轨道不稳定？',
    answer: '许多三体系统对初始条件非常敏感。速度、位置或质量的微小变化都会改变近距离交会的时机，而这些交会可以戏剧性地交换能量。结果就是一个系统可能在一段时间内保持有界，然后突然抛射出其中一个天体。',
  },
  {
    question: '八字形预设展示了什么？',
    answer: '八字形预设是三个等质量体的一个著名周期解。每个天体以相位偏移的方式沿着相同的路径运动，展示了三体问题在更大的混沌景观中可以包含优雅的稳定孤岛。',
  },
  {
    question: '这是一个物理上精确的天文学模拟器吗？',
    answer: '该工具使用软化牛顿模型和辛速度韦尔莱步进，使运动感觉逼真且稳定，适合学习。它专为交互式探索而设计，而非高精度的星历预测。',
  },
  {
    question: '如何解读总能量？',
    answer: '负的总能量通常表示有界系统，而接近零的能量则可能使逃逸更容易。在数值模拟中，较大的能量漂移也警告时间步长或交会几何形状正在对积分器造成压力。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: '引力混沌实验室',
    canvasLabel: '交互式二维三体轨道画布',
    presetsLabel: '轨道预设',
    figureEightPreset: '八字形',
    lagrangePreset: '拉格朗日三角',
    slingshotPreset: '弹弓',
    pauseButton: '暂停',
    playButton: '播放',
    resetButton: '重置',
    speedLabel: '模拟速度',
    trailLabel: '轨迹长度',
    massLabel: '质量',
    velocityXLabel: '速度 X',
    velocityYLabel: '速度 Y',
    energyLabel: '总能量',
    separationLabel: '间距范围',
    centerMassLabel: '质心',
  },
  seo: [
    {
      type: 'title',
      text: '交互式三体问题模拟器 - 探索轨道混沌',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '三体问题是证明简单定律可以产生复杂运动的最清晰例证之一。牛顿引力给出了一个简洁的力法则，但一旦第三个质量体加入系统，每条轨道都会持续重塑另外两条。这款模拟器让您直接体验这种不稳定性：选择已知构型，调整质量和速度矢量，观察天体是形成重复轨道、旋转三角形还是混沌散射事件。',
    },
    {
      type: 'title',
      text: '预设所展示的物理原理',
      level: 3,
    },
    {
      type: 'table',
      headers: ['预设', '物理概念', '观察要点'],
      rows: [
        ['<strong>八字形</strong>', '三个等质量天体共享同一条环路的周期解。', '只有当对称性和速度平衡被精心保持时，轨道才能保持有序。'],
        ['<strong>拉格朗日三角</strong>', '三个天体占据一个绕质心旋转的等边三角形。', '质量平衡和切向速度防止三角向内坍缩。'],
        ['<strong>弹弓</strong>', '近距离交会时天体间传递能量。', '一个天体获得速度，同时另一个天体被更紧密地束缚，揭示了混沌抛射发生的原因。'],
      ],
    },
    {
      type: 'title',
      text: '微小改变为何重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在二体轨道中，质心和轨道椭圆提供了稳定的几何图像。而在三体系统中，近距离通过如同引力谈判：一个天体可以借用轨道能量、急剧改变方向，或将有序的环路转变为散射事件。这种敏感性正是真实天体物理系统（如三合星、行星-卫星交会和早期太阳系的星子）通常需要数值积分而非单一简单公式的原因。',
    },
    {
      type: 'title',
      text: '如何使用诊断信息',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>总能量</strong>帮助您判断系统是否受约束以及数值积分是否保持稳定。',
        '<strong>间距范围</strong>显示最近和最远的天体对距离，使近碰撞和抛射易于识别。',
        '<strong>质心</strong>在初始动量平衡时应保持相对稳定；漂移则暗示非对称设置或速度矢量的改变。',
        '<strong>轨迹长度</strong>揭示了长期结构：短轨迹强调当前相互作用，而长轨迹则暴露重复环路和缓慢的轨道进动。',
      ],
    },
    {
      type: 'title',
      text: '工具中使用的数值模型',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '该模拟器使用牛顿反平方引力，并带有一个小的软化项，以防止极端接近通过时出现视觉爆炸。运动通过速度韦尔莱步进推进，这是轨道演示的常见选择，因为它比简单的欧拉更新更好地处理能量行为。结果是一个响应迅速的教育模型，使三体问题的定性行为可见，同时不试图取代专业的天体力学软件。',
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
