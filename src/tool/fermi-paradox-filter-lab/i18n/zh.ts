const description = '使用德雷克方程参数、演化过滤器、信号生命周期和时间投影，对费米悖论进行建模，估算银河系中可探测文明的数量。';
const slug = 'fermi-paradox-filter-lab';
const title = '费米悖论过滤器实验室';

const howTo = [
  {
    name: '估算德雷克管线',
    text: '调整恒星形成率、宜居行星、生命、智慧和技术滑块，定义银河系产生可探测文明的频率。',
  },
  {
    name: '设置过滤器强度',
    text: '增加演化过滤器的强度，使崩溃、自我毁灭、生态不稳定或技术瓶颈更快地淘汰文明。',
  },
  {
    name: '比较生命周期与时间视野',
    text: '将信号生命周期与投影时间视野结合使用。即使文明稳定诞生，短生命周期也可能让银河系变得寂静。',
  },
  {
    name: '解读时间曲线',
    text: '图表展示可探测文明随时间的变化，将共存与灭绝直观呈现，而不必将费米悖论简化为一个数字。',
  },
];

const faq = [
  {
    question: '这个费米悖论模拟器计算什么？',
    answer: '它将德雷克方程的各项与生存过滤器及时间视野相结合，估算银河系中可能同时处于可探测状态的智慧文明数量。',
  },
  {
    question: '它能预测真实的外星文明吗？',
    answer: '不能。这是一个探索性模型。其价值在于观察假设之间的相互作用：一个星系可能在漫长的历史中产生许多文明，但同时与我们有重叠的却寥寥无几。',
  },
  {
    question: '什么是大过滤器？',
    answer: '大过滤器是指从简单化学到长寿技术文明之间，存在一个或多个极其困难或危险的步骤。',
  },
  {
    question: '为什么信号生命周期如此重要？',
    answer: '可探测性取决于时间上的重叠。一个仅广播几个世纪的文明可能真实存在，但对于在不同纪元观测的其他文明而言是不可见的。',
  },
  {
    question: '如何选择生命和智慧比例？',
    answer: '在悲观的生命稀有场景中使用较低的值，在探索生物学或智慧在稳定的宜居世界上频繁出现的可能性时使用较高的值。',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: '预计可探测文明随时间变化',
    metricsLabel: '费米模型指标',
    controlsLabel: '费米模型控制',
    birthRate: '诞生率',
    peakCivilizations: '文明峰值',
    finalCivilizations: '最终文明数',
    silenceScore: '寂静评分',
    starFormationRate: '恒星形成率',
    habitableFraction: '宜居行星比例',
    lifeFraction: '生命出现比例',
    intelligenceFraction: '智慧比例',
    technologyFraction: '技术比例',
    signalLifetime: '信号生命周期',
    filterSeverity: '过滤器强度',
    horizonYears: '投影时间视野',
    maxLabel: '最大',
    yearUnit: '年',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: '一个实用的费米悖论模拟器，用于德雷克方程假设分析',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '费米悖论提出：如果银河系包含数千亿颗恒星和无数行星，为什么夜空如此寂静？本工具将德雷克方程与演化过滤器及可探测文明的时间投影相结合，将这个问题转化为一个交互式模型。',
    },
    {
      type: 'paragraph',
      html: '不同于给出一个静态的单一估计，该模拟器展示了文明如何诞生、变得可探测，然后在另一个社会有机会听到它们之前就消失。这个时间问题对于 SETI 至关重要，因为两个技术文明必须在空间、时间和信号行为上均有重叠。',
    },
    {
      type: 'title',
      text: '模型如何使用德雷克方程参数',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '第一组控制代表简化的德雷克管线。恒星形成提供新的恒星系统。其中一部分系统形成宜居行星，一部分宜居行星产生生命，一部分有生命的世界产生智慧，而一部分智慧物种通过技术变得可探测。',
    },
    {
      type: 'table',
      headers: ['控制项', '含义', '效果'],
      rows: [
        ['恒星形成率', '银河系每年新恒星的数量', '提高或降低可能系统的原始供给'],
        ['宜居行星比例', '拥有稳定世界且液态水化学得以持续的系统比例', '控制进入生物学管线的星系份额'],
        ['生命出现比例', '宜居世界上出现简单生命的概率', '检验生命稀有论与生命常见论假设'],
        ['智慧比例', '生命演化出具备技术能力的认知能力的概率', '代表生物学和生态学的瓶颈'],
        ['技术比例', '智慧产生可探测信号的概率', '涉及文化、工程和通信选择'],
      ],
    },
    {
      type: 'title',
      text: '为什么过滤器能让繁忙的星系看起来空旷',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '过滤器强度滑块将许多可能的失败点压缩为一种生存压力：小行星撞击、气候不稳定、自我毁灭、资源崩溃、人工智能风险，或任何其他缩短可探测阶段的瓶颈。强过滤器并不意味着文明不会出现，而是意味着它们很少能长时间保持可见。',
    },
    {
      type: 'paragraph',
      html: '这一区别至关重要。银河系可能在漫长的时间中产生了数千个技术物种，却在我们的短暂聆听窗口内几乎没有留下活跃的邻居。该图表通过绘制选定投影时间视野内可探测文明的数量，使这一差异直观可见。',
    },
    {
      type: 'title',
      text: '解读寂静评分',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当最终重叠的可探测文明数量较低时，寂静评分会升高。高寂静并不证明人类是孤独的；它表明所选的假设使得无法探测到信号并不令人意外。低寂静意味着模型预期一个更嘈杂的星系，因此证据缺失就变得更加耐人寻味。',
    },
    {
      type: 'list',
      items: [
        '<strong>高诞生率 + 低过滤器：</strong> 拥挤的星系，SETI 的寂静更难解释。',
        '<strong>高诞生率 + 高过滤器：</strong> 许多文明出现，但极少能存活足够长的时间以产生重叠。',
        '<strong>低生物学比例：</strong> 生命或智慧是稀有的，因此文明在技术发挥作用之前就已经注定沉寂。',
        '<strong>短信号生命周期：</strong> 文明可能存在，但广播时间太短，接触的可能性很低。',
      ],
    },
    {
      type: 'title',
      text: '教学、辩论与 SETI 直觉的应用场景',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '费米悖论过滤器实验室适用于天文学课程、天体生物学讨论、科学传播以及关于人类未来的哲学辩论。它有助于区分三个经常被混为一谈的问题：文明诞生的频率、它们保持可探测状态的时间，以及它们的时间线是否与我们重叠。',
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
