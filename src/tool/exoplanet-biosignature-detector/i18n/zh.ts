import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'exoplanet-biosignature-detector';
const title = '系外行星生物信号探测器';
const description = '在模拟的系外行星透射光谱中对齐氧气、甲烷和臭氧的吸收线。评估生物宜居性、可能的技术信号污染以及来自光谱证据的误报风险。';

const howTo = [
  {
    name: '选择主恒星',
    text: '选择一颗K型矮星、类日恒星或M型矮星。恒星的类型会影响误报风险，因为紫外辐射、耀斑和大气光化学过程会改变对氧气和臭氧的判断。',
  },
  {
    name: '对齐光谱线',
    text: '调整氧气、甲烷和臭氧的控制滑块，使观测到的吸收标记与模拟光谱中的参考波段对齐。',
  },
  {
    name: '设置噪声与大气环境',
    text: '增大仪器噪声可以直观地看到置信度如何下降。调整水蒸气和二氧化碳含量，模拟更湿润、更干燥、更稠密或光化学特征更可疑的大气环境。',
  },
  {
    name: '解读宜居性指标',
    text: '对比生物指数、技术指数、误报风险和宜居性读数。一个强有力的结果需要多种气体处于非平衡状态，而不是仅仅依赖某一条孤立的光谱线。',
  },
];

const faq = [
  {
    question: '什么是系外行星光谱学中的生物信号？',
    answer: '生物信号是一种可通过遥感探测到的特征，其来源可能是生命活动。在大气光谱中，常见的候选包括氧气、臭氧、甲烷、水蒸气，以及那些本应发生反应消失、却似乎有某种过程在持续补充的气体组合。',
  },
  {
    question: '为什么氧气加甲烷的组合值得关注？',
    answer: '氧气和甲烷在化学上会相互反应。如果两者都以可观的水平同时存在，说明大气可能处于化学非平衡状态，这比单独检测到任何一种气体都更有研究价值。模拟器会对这一组合赋予更高的权重。',
  },
  {
    question: '氧气会不会是误报？',
    answer: '会的。氧气可以在没有生命的情况下通过水逃逸、光解作用、微弱的火山汇或异常的恒星紫外环境积累。这就是为什么该工具会报告误报风险，而不是把氧气当作确凿证据。',
  },
  {
    question: '为什么要把臭氧和氧气分开考虑？',
    answer: '臭氧是氧气通过光化学作用产生的，具有显著的光谱特征。在直接观测氧气波段较困难时，臭氧可以作为氧气的间接指示物，但仍需结合大气环境综合判断。',
  },
  {
    question: '技术指数是什么意思？',
    answer: '技术指数是一种探索性的预警评分，用于标记那些大气光谱看起来过于活跃、嘈杂或化学特征异常，以至于不应排除人工源的情况。它并不构成探测声明。',
  },
  {
    question: '这是一个真正的系外行星反演模型吗？',
    answer: '不是。它是一个教学模拟器，将核心光谱学理念转化为交互式评分模型。真正的反演需要借助辐射传输、恒星污染校正、云模型、仪器系统误差和贝叶斯推断。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: '系外行星透射光谱可视化',
    starClass: '主恒星',
    starK: '安静K型矮星',
    starSun: '类日G型星',
    starM: '活跃M型矮星',
    noise: '仪器噪声',
    oxygenLine: '氧气标记',
    methaneLine: '甲烷标记',
    ozoneLine: '臭氧标记',
    waterVapor: '水蒸气环境',
    carbonDioxide: 'CO₂环境',
    habitabilityIndex: '宜居性指数',
    biologicalIndex: '生物指数',
    technologicalIndex: '技术指数',
    falsePositiveRisk: '误报风险',
    oxygen: 'O₂',
    methane: 'CH₄',
    ozone: 'O₃',
    oxygenShort: 'O₂',
    methaneShort: 'CH₄',
    ozoneShort: 'O₃',
    conclusion: '结论',
    dataLive: '数据实时合成',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: '调整光谱标记以评估大气证据。',
    verdictWeak: '光谱较弱：当前谱线尚不足以支持宜居解读。',
    verdictPromising: '光谱有希望：多个生物信号标记已部分对齐。',
    verdictStrong: '光谱很强：氧气、甲烷和臭氧形成了连贯的非平衡信号。',
    verdictAmbiguous: '信号有趣但存疑：恒星或大气的误报因素仍然偏高。',
  },
  seo: [
    {
      type: 'title',
      text: '系外行星生物信号探测器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '系外行星生物信号探测器是一个交互式光谱学模拟器，用于探索生命相关气体如何出现在透过遥远大气层的光线中。该工具不会把单一分子当作是非题来处理，而是引导你对齐氧气、甲烷和臭氧的吸收特征，然后综合噪声、水蒸气、二氧化碳以及主恒星行为给出评分。',
    },
    {
      type: 'paragraph',
      html: '这正是生物信号科学的核心难题：氧气可能令人兴奋，甲烷可能令人兴奋，臭氧也可能令人兴奋，但没有哪一种是单独成立的证据。最有说服力的案例需要多种气体结合、物理环境佐证，以及对非生物解释的仔细排查。该模拟器以紧凑的实验室风格界面，让这些权衡变得清晰可见。',
    },
    {
      type: 'title',
      text: '透射光谱如何揭示大气气体成分',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当一颗行星从其恒星前方经过时，极少量的星光会穿过行星大气层到达望远镜。不同分子会吸收特定波长的光，在测量光谱中留下或窄或宽的凹陷。通过对比观测到的凹陷与实验室标定的谱线位置，天文学家可以推断哪些气体可能存在，不过云层、雾霾、温度、恒星黑子和仪器噪声都会增加反演的复杂度。',
    },
    {
      type: 'title',
      text: '氧气、甲烷和臭氧的联合信号',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>氧气 O₂：</strong>在地球上，丰富的氧气由光合作用维持，但在某些行星演化历史中，非生物过程也可能积累氧气。',
        '<strong>甲烷 CH₄：</strong>甲烷可能来自生物活动、地质作用或撞击事件。当它与氧化性气体一同被发现时，其暗示意义会更强。',
        '<strong>臭氧 O₃：</strong>臭氧是氧气的光化学产物，在某些光谱波段更容易被探测到，但它终究只是一个间接线索。',
        '<strong>水和CO₂的环境背景：</strong>水是宜居性的支撑，二氧化碳则有助于理解温室状态、光化学过程以及误报情景。',
      ],
    },
    {
      type: 'title',
      text: '为什么误报问题至关重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '高氧气得分并不自动意味着生命活动的存在。水逃逸可能留下残余的氧气，恒星的紫外辐射可能分解分子，低水平的火山还原气体输出也可能让氧气逐渐积累。活跃的M型矮星尤其棘手，因为耀斑和光化学作用会重塑大气成分。当噪声、恒星类型或大气环境使得生物解释的可靠性降低时，误报读数就会上升。',
    },
    {
      type: 'table',
      headers: ['信号模式', '解读', '注意事项'],
      rows: [
        ['仅有 O₂', '可能存在富氧大气', '水逃逸或异常光化学作用可导致非生物成因'],
        ['仅有 CH₄', '可能为还原性大气或活跃地质活动', '仅凭甲烷不足以构成强有力的生命证据'],
        ['O₂ 加 CH₄', '化学非平衡，值得进一步研究', '需要稳健的反演与污染排查'],
        ['O₂ 加 O₃ 加水', '更具连贯性的类地环境', '云层和恒星活动仍需考虑'],
      ],
    },
    {
      type: 'title',
      text: '生物与技术宜居性指数',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '生物指数侧重化学非平衡性，尤其是氧气与甲烷的共存，然后叠加臭氧屏蔽和水环境因素。技术指数则有意保持探索性：它标记那些大气看起来过于活跃、嘈杂或化学特征异常的场景；在讲述简单的生命故事之前，应先考虑人为污染、有意为之的大气改造或观测假象。',
    },
    {
      type: 'paragraph',
      html: '请将本工具作为推理辅助手段而非结论生成器使用。真正的生物信号评估需要比较多种大气模型，纳入恒星光谱，校正望远镜系统误差，估计云层不透明度，并计算不确定性。本工具的教育价值在于它强制你遵循同样的严谨路径：对齐证据，检验环境背景，始终警惕误报。',
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
