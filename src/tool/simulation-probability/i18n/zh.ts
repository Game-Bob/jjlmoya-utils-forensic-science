import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulation-probability-calculator';
const title = '模拟概率计算器：你是否生活在虚拟宇宙中？';
const description = '使用尼克·波斯特罗姆的三解困境论证分析我们的现实是否是一场模拟。通过 4 个关键参数计算存在概率。';

const faq = [
  {
    question: '波斯特罗姆的论证到底是什么？',
    answer: '尼克·波斯特罗姆提出，如果后人类文明拥有足够的计算能力，它可以创造出数百万个先前宇宙的模拟。如果发生这种情况，被模拟个体的数量将远高于原始生物个体。因此从统计学上讲，你更有可能是被模拟的，而不是原始的。',
  },
  {
    question: '高概率是否意味着我们绝对是一场模拟？',
    answer: '不。高概率表明这是一个必须考虑的严肃可能性，但它不是证明。该论证基于关于未来技术的假设，而这些假设可能无法实现。',
  },
  {
    question: '如果我们知道自己是一场模拟，会对我们产生什么影响？',
    answer: '从哲学上讲，许多人认为这不会改变任何根本性的东西。如果你和你的亲人一起被模拟，你们的经历、情感和关系仍然是真实且可感知的。重要的是生活体验，而不是其背后的承载物。',
  },
  {
    question: '是否有科学证据表明我们处于模拟中？',
    answer: '目前还没有结论性的证据。一些物理学家将量子力学中的异常现象（如量子化、纠缠）视为可能的"计算优化"，但这些都是推测性的解释。',
  },
  {
    question: '我应该给"N"（模拟规模）赋予什么值？',
    answer: '这取决于您对计算机未来的信念。低值（100-1000）假设资源有限。高值（数百万）假设拥有几乎无限的计算能力。大多数科学讨论使用介于 1000 到 1 万亿之间的值。',
  },
];

const howTo = [
  {
    name: '调整技术进步概率',
    text: '估算人类达到后人类水平的可能性。50% 是中性的；如果您相信 AI 和计算将继续呈指数级增长，请增加此值。',
  },
  {
    name: '设置生存率',
    text: '考虑人类不自我毁灭的概率。考虑战争、气候变化、大流行病等因素。高值代表对我们未来的乐观态度。',
  },
  {
    name: '评估模拟兴趣',
    text: '如果人类达到后人类水平，他们会想创造过去模拟吗？考虑动机：科学研究、娱乐、历史保护。',
  },
  {
    name: '解读结果',
    text: '观察概率如何变化。结果大于 90% 表明，如果假设成立，模拟几乎是不可避免的。尝试调整参数以探索不同的未来。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: '已复制',
    noHistory: '暂无历史记录',
    load: '加载',
    delete: '删除',
    simulationParameters: '模拟参数',
    fpLabel: 'fp',
    fpSub: '技术进步',
    flLabel: 'fl',
    flSub: '物种生存',
    fiLabel: 'fi',
    fiSub: '模拟兴趣',
    nLabel: 'N',
    nSub: '模拟规模',
    probabilityTitle: '模拟概率',
    trilemmaResult: '三解困境结论',
    scenario1: '情景 1：灭绝',
    scenario2: '情景 2：缺乏兴趣',
    scenario3: '情景 3：我们处于模拟中',
    fpDescription: '人类实现模拟具有意识的宇宙的技术能力的概率。',
    flDescription: '在达到后人类水平之前避免崩溃（灭绝、战争）的概率。',
    fiDescription: '决定创建其祖先模拟的高级文明的百分比。',
    nDescription: '每个高级文明通常同时运行的模拟世界的数量。',
    verdictDetail: '数据表明，您的意识极有可能是由软件进程生成的。',
  },
  seo: [
    {
      type: 'title',
      text: '我们生活在模拟中吗？尼克·波斯特罗姆论证背后的科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '我们的现实可能是一个人造结构，一个极其先进的计算机模拟，这个想法已经从科幻小说变成了严肃的哲学和科学辩论。2003 年，牛津大学哲学家尼克·波斯特罗姆发表了一篇题为 <em>"你是否生活在计算机模拟中？"</em> 的文章，他在文中提出了一个挑战我们存在认知的"三解困境"论证。',
    },
    {
      type: 'paragraph',
      html: '此模拟概率计算器使用源自波斯特罗姆假设的关键参数，来估算您的意识实际上是由后人类文明执行的软件进程结果的可能性。',
    },
    {
      type: 'title',
      text: '模拟论证的支柱',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '波斯特罗姆的论证并不是说我们一定处于模拟中，而是说以下三个命题中至少有一个几乎肯定是正确的：',
    },
    {
      type: 'list',
      items: [
        '<strong>过早灭绝：</strong> 人类物种将在达到能够运行祖先模拟的后人类阶段之前灭绝。',
        '<strong>技术冷感：</strong> 任何后人类文明都会出于伦理或娱乐原因，对运行其祖先的模拟不感兴趣。',
      ],
    },
    {
      type: 'title',
      text: '如何理解这些参数',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '为了正确使用此工具，了解模型变量的含义至关重要：',
    },
    {
      type: 'table',
      headers: ['变量', '核心概念', '含义'],
      rows: [
        ['<strong>fp</strong>', '技术进步', '文明达到模拟意识能力的概率。'],
        ['<strong>fl</strong>', '生存率', '文明在达到该点之前不会自我毁灭的概率。'],
        ['<strong>fi</strong>', '模拟兴趣', '决定利用其力量创造虚拟世界的文明比例。'],
        ['<strong>N</strong>', '模拟规模', '单个后人类文明会创造的模拟总数。'],
      ],
    },
    {
      type: 'title',
      text: '为什么得出的概率通常这么高？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果我们假设后人类文明拥有巨大的计算能力（如戴森球或木星大脑），那么模拟数量 <strong>N</strong> 可能是数十亿量级。如果 <em>N</em> 很大，即使利息值 (<em>fi</em>) 较低，被模拟个体的数量也将比原始个体多出几个数量级。',
    },
    {
      type: 'title',
      text: '证据与计算限制',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '从量子物理学到宇宙学，一些科学家正在寻找现实分辨率中的"缺陷"或限制。如果宇宙具有最小长度（普朗克长度）或看起来像代码优化（如量子纠缠）的行为，那么该假设在数字物理学领域就会获得支持者。',
    },
    {
      type: 'title',
      text: '伦理反思',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果我们发现自己是一场模拟，我们的道德观会改变吗？对于波斯特罗姆来说，重要的是意识的体验。一个被模拟的意识也会像生物意识一样经历痛苦和爱。',
    },
    {
      type: 'title',
      text: '计算器应用场景',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>科学教育：</strong> 了解应用于宇宙学的概率模型。',
        '<strong>当代哲学：</strong> 以互动方式探索波斯特罗姆的三解困境。',
        '<strong>未来学：</strong> 分析物种生存率对我们命运的影响。',
        '<strong>存在好奇心：</strong> 评估您对技术未来的信念。',
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

