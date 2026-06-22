import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'global-albedo-snowball-simulator';
const title = '全球反照率与雪球地球模拟器';
const description = '探索地球热辐射平衡、太阳常数变化、温室气体浓度以及冰反照率反馈，观察冰盖是退缩、稳定还是触发雪球气候。';

const howTo = [
  {
    name: '设置入射阳光',
    text: '移动太阳常数滑块，测试暗淡年轻太阳场景、当前地球阳光或更明亮的未来强迫。',
  },
  {
    name: '调整温室气体浓度',
    text: '改变温室气体浓度，观察辐射强迫如何与更高的行星反照率竞争。',
  },
  {
    name: '用冰播种行星',
    text: '从小极冠或大范围冰封的世界开始。模型迭代反馈循环，显示冰是前进还是退缩。',
  },
  {
    name: '读取气候状态',
    text: '使用温度、吸收辐射、最终冰覆盖和时间线曲线来比较温带、雪球和温室结果。',
  },
];

const faq = [
  {
    question: '什么是冰反照率反馈？',
    answer: '冰和雪比海洋或陆地反射更多的阳光。当冰扩张时，行星反照率上升，吸收的太阳能下降，冷却可能允许更多的冰形成。当冰退缩时，更暗的表面吸收更多能量，变暖加速。',
  },
  {
    question: '雪球地球是什么意思？',
    answer: '雪球地球是一种假想的气候状态，冰到达低纬度或几乎全球覆盖。地质证据表明，地球在新元古代可能接近过这种状态。',
  },
  {
    question: '这是一个完整的气候模型吗？',
    answer: '不是。它是一个用于学习的紧凑能量平衡模型。它忽略大气环流、云、海洋热传输、季节、地理和碳循环反馈，但捕捉了反照率反馈的核心辐射逻辑。',
  },
  {
    question: '为什么温室气体可以打破雪球状态？',
    answer: '温室气体通过增加辐射强迫来减少向外长波冷却。在雪球地球场景中，当硅酸盐风化减慢时，火山二氧化碳可以积累，最终使地球变暖到足以融化低纬度冰。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: '气候控制',
    solarConstant: '太阳常数',
    greenhouse: '温室气体',
    initialIce: '初始冰覆盖',
    temperature: '平衡温度',
    absorbed: '吸收的阳光',
    finalIce: '最终冰覆盖',
    albedo: '行星反照率',
    forcing: '温室强迫',
    state: '气候状态',
    timeline: '冰覆盖变化',
    years: '模型年',
    snowball: '雪球锁定',
    temperate: '温带平衡',
    hothouse: '温室退缩',
    retreating: '冰在退缩',
    advancing: '冰在前进',
    stable: '接近平衡',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: '辐射诊断',
  },
  seo: [
    {
      type: 'title',
      text: '用于冰反照率反馈和雪球地球的全球反照率模拟器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这个模拟器探索行星气候中最重要的反馈循环之一：冰覆盖、反射率和吸收阳光之间的联系。具有明亮冰的行星将更多入射太阳辐射反射回太空。这种冷却可以保持或扩大冰，进一步提高反照率，并将系统推向雪球地球状态。冰较少的行星吸收更多阳光，这可能加速冰消作用。',
    },
    {
      type: 'paragraph',
      html: '使用滑块改变太阳常数、温室气体浓度和初始冰覆盖。然后模型迭代一个简单的全球能量平衡，并显示气候是向广泛冰川作用、温带平衡还是高温低冰状态移动。它设计用于快速直觉：每个控制直接映射到辐射收支中的一个物理项。',
    },
    {
      type: 'title',
      text: '能量平衡如何估算',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '吸收的短波辐射估算为 S(1 - a) / 4，其中 S 是太阳常数，a 是行星反照率。除以四将地球圆盘拦截的阳光转换为整个球形表面的平均值。更高的反照率降低吸收的能量；更高的温室气体浓度增加正辐射强迫，从而提高地表温度估算。',
    },
    {
      type: 'table',
      headers: ['控制', '物理意义', '气候效应'],
      rows: [
        ['太阳常数', '地球轨道处的入射恒星能量', '更高的值使行星变暖并缩小冰。'],
        ['温室气体', '相对于参考大气层的长波辐射强迫', '更高的值使雪球锁定更困难。'],
        ['初始冰覆盖', '行星的初始反射率', '高值可以通过反照率反馈触发失控冷却。'],
      ],
    },
    {
      type: 'title',
      text: '为什么反照率反馈可能变得非线性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '冰反照率循环不是一个温和的单向调整。一旦冰到达行星的足够部分，更亮的表面可以去除如此多的吸收阳光，以至于夏季融化变得微弱。在相反方向，退缩的冰暴露出更暗的海洋和陆地，增加吸收，将行星推离冰川作用。这就是为什么类似的强迫可以根据初始冰覆盖产生不同的结果。',
    },
    {
      type: 'paragraph',
      html: '真实地球增加了许多复杂性：云、冰上的尘埃、海洋热传输、大陆位置、季节性阳光、海冰动态和碳循环。简单模型仍然有价值，因为它隔离了一阶辐射收支。它让你看到为什么雪球地球假说既依赖于微弱的阳光或高反照率触发因素，也依赖于后来用于逃脱的温室气体积累。',
    },
    {
      type: 'title',
      text: '模拟器解读',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>雪球锁定：</strong>最终冰覆盖非常高，平衡温度仍远低于冰点。',
        '<strong>温带平衡：</strong>模型以部分冰覆盖和中等吸收辐射稳定下来。',
        '<strong>温室退缩：</strong>冰崩溃到非常小的比例，而温室强迫和吸收的阳光保持高位。',
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
