import { content as enContent } from './en';
import { createDnaLocale } from '../localize';

export const content = createDnaLocale({
  locale: 'zh',
  slug: 'dna-profile-match-probability-lab',
  title: 'DNA档案随机匹配概率实验室',
  description: '了解等位基因频率和哈代温伯格规则如何形成用于学习的DNA档案随机匹配概率。',
  ui: {
    ...enContent.ui,
    controls: '档案设置', controlKicker: '创建档案', controlHelper: '选择教学预设，或打开每个位点编辑等位基因和群体频率。', presets: '教学预设', presetbalanced: '平衡型', presethomozygote: '纯合子', presetclassroom: '简单课堂', loci: '个位点', locus: '位点', locusName: '位点名称', alleleA: '等位基因A', alleleB: '等位基因B', frequencyA: '频率A (%)', frequencyB: '频率B (%)', removeLocus: '删除位点', addLocus: '添加位点', disclaimer: '教学模拟器。不识别个人、不验证案件，也不能替代实验室计算。', sceneKicker: '信号轨迹', electropherogram: '档案轨迹', sceneNote: '每个位点用两个峰显示输入的两个等位基因。峰高只是频率的视觉提示，不是实验室信号。', peakHeight: '峰高随输入频率变化', results: '概率结果', resultKicker: '随机匹配概率', locusBreakdown: '逐个位点计算', genotype: '基因型', rule: '规则', frequency: '基因型频率', badgeNeedsData: '需要数据', badgeExploratory: '探索性', badgeCalculated: '计算模型', needsData: '请为每个位点填写两个等位基因和0到100%的频率；一对频率的总和不能超过100%。', exploratoryResult: '这个小型档案适合学习方法。增加位点可能让档案更罕见，但不会让模型成为案件结论。', calculatedResult: '结果根据输入频率和简化的独立性假设计算。', notCalculated: '未计算', completeFields: '填写档案字段后才能查看结果。', ofRandomProfiles: '在此教学模型的随机档案中', missingValue: '未命名位点', pattern: '档案模式', calculation: '计算', meaning: '含义', homozygote: '两个相同等位基因', heterozygote: '两个不同等位基因', independentLoci: '多个独立位点', homozygoteMeaning: '等位基因频率与自身相乘。', heterozygoteMeaning: '两个等位基因频率相乘后再加倍。', independentLociMeaning: '每个位点都会影响档案的综合频率。',
  },
  seo: {
    calculatorTitle: 'DNA档案随机匹配概率计算器', intro: '这个DNA档案概率实验室帮助学生和好奇的读者了解，在简化的群体遗传学模型中，一个小型常染色体STR档案如何变成概率。为每个位点输入两个等位基因及其频率，计算器会应用哈代温伯格规则并相乘各个位点频率，显示一个教学用的随机匹配结果。', methodTitle: '基因型规则如何工作', method: '界面展示完整的计算过程：轨迹显示输入的等位基因，表格显示每个基因型频率，最终结果用十的幂的一分之一表示。纯合子使用p²，杂合子使用2pq。预设使用合成的教学数值，并不是官方群体数据库。', populationTitle: '群体频率为什么重要', population: '等位基因频率是从群体数据库中估计出来的。参考群体、抽样方式、数据库规模、亲缘关系、群体结构和验证都会影响解释。只有在频率代表相关群体、档案来自单一来源且位点可视为独立时，乘积才可估计该档案在随机无亲缘人群中的出现频率。改变假设也会改变结果的含义。', interpretation: '这个结果是依赖输入数值的条件性陈述。模型没有考虑人员选择、亲缘关系、混合档案或数据库搜索的影响。因此，教学示例应当和群体、方法以及不确定性一起阅读，而不应脱离这些条件单独解释。', application: '练习时可以先选择一个预设，只修改一个位点，然后观察表格和总概率的变化。这样可以看到罕见等位基因如何改变单个位点的贡献。请记录输入值、频率来源和独立性假设；这个界面用于教学和自学，不是法医学意见。', limitsTitle: '教学限制', limits: '在真实案件中，还需要记录人员选择、数据库、混合档案、群体结构和专家解释。本工具不分析电泳图、不修正群体结构、不计算似然比，也不搜索DNA数据库。', tipTitle: '把它当作模型，而不是结论', tip: '很小的随机匹配概率不能证明身份或有罪。请用它解释算术过程，并保留数据来源、群体、假设和不确定性。', list: ['<strong>一个群体:</strong> 不要混用无法比较的数据库频率。', '<strong>显示假设:</strong> 实验室假设人员无亲缘关系且位点之间为简化独立。', '<strong>区分概率和身份:</strong> 罕见档案不是来源或有罪的证明。', '<strong>记录数据:</strong> 正式报告需要来源、方法、不确定性和解释。'],
  },
  faq: [
    { question: '随机匹配概率是什么意思？', answer: '它估计在所选频率和假设下，随机选择的无亲缘关系人员拥有输入档案的概率。这不是有罪概率，也不是某个样本来自特定人员的概率。' },
    { question: '基因型频率如何计算？', answer: '纯合子使用p²，杂合子使用2pq，然后将各个位点频率相乘。' },
    { question: '为什么预设频率是合成的？', answer: '它们是用于学习的小型示例。真实法医学工作需要经过验证、具有代表性并且有记录的群体数据库。' },
    { question: '工具可以比较两个人吗？', answer: '不可以。它不接收生物样本、不比较档案、不搜索数据库，也不识别任何人，只展示数学模型。' },
    { question: '为什么很小的概率不是结论？', answer: '因为解释取决于数据库、人员选择、档案质量、模型假设和专业判断。' },
  ],
  howTo: [
    { name: '选择教学预设', text: '从平衡型、纯合子或简单课堂预设开始。' },
    { name: '编辑一个位点', text: '输入名称、两个等位基因以及每个等位基因的百分比频率。' },
    { name: '阅读位点规则', text: '表格会显示纯合子的p²和杂合子的2pq。' },
    { name: '谨慎解释结果', text: '把结果当作教学模型，并保持假设可见。' },
  ],
});
