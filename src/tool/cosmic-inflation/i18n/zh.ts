import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cosmic-inflation-calculator';
const description = '计算宇宙暴胀时期早期宇宙的指数级膨胀。';
const title = '宇宙暴胀计算器：早期宇宙膨胀';

const howTo = [
  {
    name: '选择数值',
    text: '拖动滑块查看结果。',
  },
  {
    name: '比较尺度因子',
    text: '观察空间膨胀了多少个数量级。',
  },
  {
    name: '分析动态扭曲',
    text: '画布显示了空间的膨胀。',
  },
];

const faq = [
  {
    "question": "什么是宇宙暴胀，它为什么会发生？",
    "answer": "宇宙暴胀是一个理论，它假设在宇宙最初的极短时间内（具体在大爆炸后约 10^-36 秒），空间经历了超高速和指数级的膨胀。它的发生是因为一种被称为暴胀子的理论标量场处于假真空的高能量密度状态，从而产生了负压力和排斥性重力，拉伸了时空结构。"
  },
  {
    "question": "e-folds（e-折叠数）的数量意味着什么？",
    "answer": "e-folds数测量指数级膨胀阶段的持续时间。一次 e-fold 表示宇宙大小乘以欧拉数（约 2.718）所需的时间。如果宇宙经历 N 次 e-folds，其尺度因子将增加 e^N 倍。标准的宇宙学模型要求至少 50 到 60 个 e-folds 才能正确解决平坦性和视界问题。"
  },
  {
    "question": "暴胀如何解决视界问题？",
    "answer": "视界问题质疑为什么宇宙中极其遥远的区域具有几乎相同的宇宙微波背景（CMB）辐射温度，即使光速本不允许它们相互作用以达到热平衡。暴胀通过表明在指数级膨胀之前，整个可观测宇宙是一个因果连接且热均匀 purchasing 的微小区域，然后瞬间被拉伸到视界之外，从而解决了这个问题。"
  },
  {
    "question": "什么是平坦性问题，它是如何解决的？",
    "answer": "今天宇宙的能量密度极其接近临界密度，这意味着空间是平坦的，误差极小。如果没有暴胀，任何初始的平坦性偏差都会随着时间指数级增长，从而在大爆炸时需要不可能的精细调节。暴胀极其剧烈地拉伸了空间曲率，稀释了任何初始曲率，类似于巨大的球体表面在局部看起来完全是平坦的。"
  },
  {
    "question": "什么是再加热（reheating）过程？",
    "answer": "再加热是标志着暴胀结束的热转变。在暴胀期间，由于体积的指数级膨胀，宇宙冷却到接近绝对零度的温度。当暴胀子场衰变到其势能的最小值时，其剩余能量通过量子相互作用以标准模型粒子的形式倾泻到空间中，使宇宙充满了炽热而高密度的等离子体，从而开始了传统的标准大爆炸阶段。"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '宇宙暴胀计算器',
    efoldsLabel: 'e-folds数量 (N)',
    energyLabel: '初始能量尺度 (GeV)',
    scaleFactorResult: '尺度因子增长',
    reheatingTempResult: '估计再加热温度',
    chartTitle: '时空结构扭曲',
    presetGuth: '标准（古斯）',
    presetChaotic: '混沌',
    presetExtreme: '极端极限',
    efoldsTooltip: '典型模型预测在50到60个e-folds之间。',
    energyTooltip: 'GUT尺度约为10^16 GeV。',
    scaleFactorTooltip: '代表总膨胀系数。',
    reheatingTooltip: '暴胀结束时的温度。',
    analogyInsuff: '中度暴胀。这种膨胀是不够的。',
    analogyProton: '宇宙在极短时间内从质子大小膨胀到星系大小。',
    analogyObservable: '宇宙在10^-32秒内从亚原子尺度膨胀到大于可观测宇宙的范围。',
  },
  seo: [
  {
    "type": "title",
    "text": "宇宙学：宇宙暴胀理论与时空膨胀",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "宇宙暴胀是连接粒子物理学与观测天体物理学的基本支柱。该理论由物理学家阿兰·古斯和安德雷·林德于 1980 年代初提出，假设早期宇宙经历了一个由暴胀子的标量场能量密度驱动的指数级膨胀阶段。这种膨胀在极短的时间内使宇宙的体积增加了至少 10^26 倍，解决了经典大爆炸模型的深刻悖论，并为宇宙结构的形成提供了理论框架。"
  },
  {
    "type": "title",
    "text": "暴胀模型和参数的比较",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "暴胀子场的不同势能会产生不同的膨胀率和再加热温度。以下是本计算器中模拟的主要模型特征："
  },
  {
    "type": "table",
    "headers": [
      "暴胀模型",
      "e-folds 范围 (N)",
      "能量尺度 (GeV)",
      "物理和动态结果"
    ],
    "rows": [
      [
        "<strong>标准古斯</strong>",
        "50 - 60",
        "10^16",
        "解决平坦性和视界问题；暴胀通过缓慢相变中的气泡成核而结束。"
      ],
      [
        "<strong>混沌暴胀 (林德)</strong>",
        "60 或更多",
        "10^16",
        "暴胀子沿着简单的抛物线势能平缓滚动；避免了突然的相变问题。"
      ],
      [
        "<strong>极端极限</strong>",
        "90 或更多",
        "10^19 (普ランク)",
        "接近量子引力极限的能量；原始时空的巨大拉伸。"
      ]
    ]
  },
  {
    "type": "title",
    "text": "解决经典大爆炸问题",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "在暴胀理论发展之前，经典大爆炸宇宙学存在严重的理论不一致。源于宇宙微波背景均匀性的视界问题，以及与空间临界密度相关的平坦性问题，都表明需要极不可能的初始条件。暴胀通过拉伸热均匀的微观区域并动态展平局部空间几何形状，自然地解决了这两个难题。此外，它稀释了早期宇宙中本应大量形成的磁单极子的浓度。"
  },
  {
    "type": "title",
    "text": "暴胀模型的观测天文学证据",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "宇宙暴胀理论不仅是一个优雅的数学结构；它还有由 COBE、WMAP 和 Planck 等空间卫星确认的强有力的间接证据："
  },
  {
    "type": "list",
    "items": [
      "<strong>CMB 均匀性:</strong> 宇宙微波背景辐射表现出均匀的温度，在可见天空的相反两侧仅有十万分之一的变化。",
      "<strong>平坦几何:</strong> 宇宙曲率的测量证实，空间是平坦的，误差小于 1%，这与巨大的暴胀拉伸相一致。",
      "<strong>单极子的缺乏:</strong> 逻辑上解释了在我们的可观测宇宙中完全没有稳定的、高密度的磁单极子。",
      "<strong>涨落光谱:</strong> 在宇宙背景中观察到的各向异性显示光谱指数略低于 1，正如慢滚暴胀子模型所预测的那样。"
    ]
  },
  {
    "type": "title",
    "text": "量子涨落与星系的种子",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "宇宙暴胀最非凡的方面在于它能够充当宇宙显微镜。在指数级膨胀期间，暴胀子场的微观量子涨落被拉伸到天文尺度。在暴胀结束时，这些涨落冻结为物质密度变化（原始扰动）。这些密度差异充当了引力种子，在数十亿年的时间里拉拢物质，诞生了第一批恒星、星系、星系团以及我们今天观察到的宇宙网。"
  }
],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
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
