import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'double-slit-decoherence-simulator';
const title = '双缝实验与退相干模拟器';
const description = '打开或关闭路径探测器，在可视化双缝模拟器中观察量子干涉如何消褪为两条粒子带。';

const howTo = [
  {
    name: '从关闭探测器开始',
    text: '保持路径探测器禁用，观察屏幕如何从相干的概率振幅形成明暗相间的干涉条纹。',
  },
  {
    name: '增加探测器强度',
    text: '提高探测器控制以引入路径信息。随着探测器变强，相干性下降，条纹逐渐消失。',
  },
  {
    name: '改变狭缝几何形状',
    text: '调整狭缝间距和狭缝宽度，观察几何形状如何改变条纹间距、包络宽度以及屏幕上的最终分布。',
  },
  {
    name: '读取实时指标',
    text: '利用条纹可见度、路径信息和相干性，将视觉模式与量子测量故事联系起来。',
  },
];

const faq = [
  {
    question: '为什么打开探测器时图案会发生变化？',
    answer: '能够揭示粒子使用了哪个狭缝的探测器会破坏两个备选路径之间的相位关系。没有这种相干性，两个概率路径不再干涉，屏幕趋近于两条宽粒子带。',
  },
  {
    question: '这个模拟器意味着意识会坍缩波函数吗？',
    answer: '不。模拟器关注的是物理上的路径信息和退相干。探测器、环境或任何使路径可区分的相互作用都可以抑制干涉，无需有意识的观察者。',
  },
  {
    question: '什么是条纹可见度？',
    answer: '条纹可见度比较屏幕上的明亮区域和黑暗区域。高可见度意味着强干涉对比度。低可见度意味着暗隙已被填满，图案更像两股独立的粒子流。',
  },
  {
    question: '这是一个完整的量子力学求解器吗？',
    answer: '不。它是一个教育模型，将双缝干涉包络与退相干控制相结合。它旨在直观地解释测量效应，而不是替代真实装置的薛定谔方程模拟。',
  },
  {
    question: '为什么狭缝间距会影响条纹间距？',
    answer: '较大的间距在屏幕上产生更快的相位差，因此明暗条纹靠得更近。较小的间距使条纹分布得更开。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: '双缝装置',
    controls: '双缝控制',
    results: '双缝结果',
    kicker: '测量控制',
    detectorToggle: '启用路径探测器',
    detectorStrength: '探测器强度',
    slitSeparation: '狭缝间距',
    slitWidth: '狭缝宽度',
    unobserved: '未观测',
    observed: '已观测',
    waveMode: '干涉',
    particleMode: '粒子带',
    fringeVisibility: '条纹可见度',
    whichPath: '路径信息',
    coherence: '相干性',
    readoutNote: '当两条路径保持不可区分时，干涉得以幸存。测量使路径信息可用，屏幕失去了暗条纹。',
  },
  seo: [
    {
      type: 'title',
      text: '带退相干和路径探测的双缝实验模拟器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这个双缝模拟器将经典的量子实验转变为交互式视觉模型。探测器关闭时，屏幕显示出干涉图案：由于两个可能的路径保持相干，产生了明暗相间的条纹。当添加路径探测器时，图案逐渐变为两条宽粒子带，因为路径备选方案变得可区分。',
    },
    {
      type: 'paragraph',
      html: '该工具专为寻求清晰解释为何观测会改变双缝结果的学习者而设计。它避免了模糊的表述"观察者改变了现实"，而是聚焦于物理学上有用的观点：干涉需要不可区分的备选方案，而测量和环境纠缠消除了条纹所需的相位关系。',
    },
    {
      type: 'title',
      text: '双缝实验演示了什么',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在未观测的设置中，单个量子对象由与两个狭缝相关的概率振幅描述。这些振幅带有相位地相加。在屏幕上的某些位置，它们相互加强产生亮带；在其他位置，它们相互抵消产生暗带。这种交替结构就是干涉的特征。',
    },
    {
      type: 'paragraph',
      html: '如果探测器记录了使用了哪个狭缝，备选路径就不再不可区分。屏幕不再接收一个相干的振幅总和。它接收的是两个路径条件化结果的混合，因此暗干涉间隙被填满，结果看起来像是粒子穿过一个或另一个狭缝。',
    },
    {
      type: 'title',
      text: '如何阅读模拟器',
      level: 3,
    },
    {
      type: 'table',
      headers: ['控制或指标', '它改变什么', '需要注意什么'],
      rows: [
        ['探测器强度', '多少路径信息可用', '更高的值降低条纹可见度并增强双带粒子图案。'],
        ['狭缝间距', '两个开口之间的距离', '间距越大，干涉带在屏幕上的排列越紧密。'],
        ['狭缝宽度', '每个开口的大小', '更宽的狭缝会压缩衍射包络线并重塑整体亮度。'],
        ['条纹可见度', '屏幕明暗区域之间的对比度', '高数值意味着相干干涉仍然可见。'],
        ['相干性', '路径之间保留了多少相位关系', '随着探测器使路径变得可区分，相干性下降。'],
      ],
    },
    {
      type: 'title',
      text: '没有神秘主义的退相干',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '退相干是当量子系统与探测器或环境相关联时，可用相位相干性的丧失。在双缝实验中，这种关联可以携带路径信息。一旦路径在原则上被记录，即使没有人读取记录，干涉图案也会被抑制。',
    },
    {
      type: 'paragraph',
      html: '这个区别很重要，因为许多解释夸大了人类观察的作用。重要的物理学不是视觉或意识，而是实验装置是否保持或破坏了本来会干涉的备选方案的不可区分性。',
    },
    {
      type: 'title',
      text: '此教育模型的局限性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '模拟器使用紧凑的光学风格双缝图案，并结合了用于退相干的探测器强度模型。它非常适合直觉理解、课堂演示和概念复习，但不是带有探测器希尔伯特空间、噪声源或实验室校准的完整量子装置的数值解。',
    },
    {
      type: 'list',
      items: [
        '<strong>用于理解概念：</strong>干涉、路径信息、相干性和测量。',
        '<strong>不要用于实验设计：</strong>真正的双缝实验需要精确的波长、孔径、探测器和传播计算。',
        '<strong>关注趋势：</strong>随着可区分性的增加，干涉对比度下降。',
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
