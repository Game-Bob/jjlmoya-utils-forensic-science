const howTo = [
    {
      name: '准备培养皿图像',
      text: '将培养皿放在深色背景下或使用透射照明器，使菌落形成鲜明对比。',
    },
    {
      name: '识别菌落类型',
      text: '使用不同的标记颜色，根据形态、颜色或大小对菌落进行分组。',
    },
    {
      name: '标记每个菌落',
      text: '点击每个可见菌落。工具会自动为每次点击编号，以防止重复或遗漏。',
    },
    {
      name: '计算最终浓度',
      text: '输入接种体积和稀释倍数，即可获得以 CFU/ml 或 CFU/g 为单位的最终结果。',
    },
  ];
const faq = [
    {
      question: '什么是 CFU 计数？',
      answer: '菌落形成单位 (CFU) 是一种估算样本中活细菌或真菌细胞数量的测量方法。假设每个可见菌落都起源于单个细胞或细胞群。',
    },
    {
      question: '为什么数字计数器比手动计数更好？',
      answer: '数字计数避免了在视觉标记菌落过程中"跟丢进度"的人为错误。此外，我们的工具允许按颜色区分菌落类型，从而简化了混合培养皿的分析。',
    },
    {
      question: '如何计算每毫升的 CFU？',
      answer: '将计得的菌落数乘以稀释倍数。例如，如果您在 1:100 稀释液中数得 30 个菌落，则原始样品含有 3000 CFU/ml。',
    },
    {
      question: '什么时候培养皿被认为是"不可计数的"？',
      answer: '在标准微生物学中，如果菌落超过 250-300 个，则认为培养皿过于拥挤（多不可计，TNTC），且由于菌落竞争，数据不可靠。',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'colony-counter';
const title = '菌落计数器：培养皿 CFU 数字计数工具';
const description = '用于培养皿细菌菌落计数的数字工具。区分类型，避免错误，并精确计算 CFU。';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: '点击上传培养皿图像',
    uploadSubtitle: '上传培养皿照片并开始计数菌落',
    currentModeLabel: '当前模式',
    typeA: '类型 A',
    typeB: '类型 B',
    colonyType: '菌落类型',
    counting: '计数中',
    totalCFU: '总 CFU',
    undo: '撤销上一步',
    clearAll: '清除全部',
    infoClick: '点击培养皿以标记菌落',
    infoChange: '在标记前更改类型',
    confirmClear: '确定要清除所有已标记的菌落吗？',
  },
  seo: [
    {
      type: 'title',
      text: '数字微生物学：精确菌落计数',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在培养皿上计数细菌菌落是微生物学中的一项基本技术。传统上使用手动计数器和记号笔进行，很容易漏计或重复标记同一个菌落。该数字工具消除了这些错误，并允许在菌落类型之间进行视觉区分。',
    },
    {
      type: 'title',
      text: '为什么菌落计数很重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '培养皿上的菌落数量与原始样品中活微生物的浓度成正比。这些数据在以下方面至关重要：',
    },
    {
      type: 'list',
      items: [
        '<strong>食品质量控制：</strong> 检测细菌污染。',
        '<strong>药物研究：</strong> 评估抗生素功效。',
        '<strong>临床诊断：</strong> 定性分析患者样本中的感染。',
        '<strong>生物技术：</strong> 优化重组蛋白的生产培养。',
      ],
    },
    {
      type: 'title',
      text: '菌落形成单位 (CFU)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '培养皿上每个肉眼可见的菌落都被认为起源于单个活细胞。这就是为什么它们被称为 <strong>CFU</strong>（菌落形成单位）。',
    },
    {
      type: 'paragraph',
      html: '<strong>浓度公式：</strong><br><code>CFU/mL = (计得的菌落数 × 稀释倍数) / 接种体积</code>',
    },
    {
      type: 'title',
      text: '计数的最佳实践',
      level: 3,
    },
    {
      type: 'title',
      text: '可计数范围',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '手动计数的理想范围是每皿 <strong>30 到 300 个菌落</strong>。低于 30，统计误差太大；高于 300，菌落开始融合成片，无法进行个体区分。',
    },
    {
      type: 'title',
      text: '菌落类型',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '在选择性或鉴别培养基上，通常会看到多种菌落形态：',
    },
    {
      type: 'list',
      items: [
        '<strong>类型 A (青色/绿色)：</strong> 大而粘稠的菌落，典型的革兰氏阴性乳糖发酵细菌。',
        '<strong>类型 B (粉色/紫色)：</strong> 小而透明的菌落，非发酵菌。',
      ],
    },
    {
      type: 'paragraph',
      html: '我们的工具允许区分多达两种具有不同颜色的菌落类型，在不需要物理标记的情况下简化了鉴别计数过程。',
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

