import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-stature-estimation-skeletal-remains-trotter-gleser-calculator';
const title = '法医身高推定计算器';
const description = '根据 Mildred Trotter 和 Goldine Gleser 的线性回归方程，结合生物学性别、祖先群体和年龄校正，从人类长骨测量值推定生前身高。';

const howTo = [
  {
    name: '选择骨骼和变量',
    text: '选择要测量的特定长骨（股骨、胫骨、肱骨、腓骨、桡骨或尺骨），以及个体的生物学性别、祖先群体和死亡年龄。'
  },
  {
    name: '测定骨骼长度',
    text: '在虚拟骨度板上调整滑动卡尺，以厘米为单位设定长骨标本的最大长度。'
  },
  {
    name: '计算推定身高',
    text: '计算器自动应用相应的 Trotter-Gleser 回归方程，对 30 岁以上的个体每年扣减 0.06 厘米。'
  },
  {
    name: '解读区间和误差',
    text: '查看推定身高、估算标准误差 (SEE) 和 95% 预测区间，以考虑群体变异性。'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Trotter 和 Gleser 回归方程是如何运作的？',
    answer: '这些方程使用线性回归来模拟生前身高与长骨最大长度之间的相关性。输入骨骼长度后，计算器应用特定的人群斜率和常数。'
  },
  {
    key: 'faq-2',
    question: '为什么需要输入性别和祖先？',
    answer: '人类的身体比例因性别和地理人群而异。男性的肢体与身高比例通常与女性不同，不同祖先群体也表现出独特发育比例。'
  },
  {
    key: 'faq-3',
    question: '为什么身高推定中需要年龄校正？',
    answer: '成年早期过后，由于椎间盘压缩和姿势改变，人的身高会逐渐缩短。Trotter 和 Gleser 建议对 30 岁以后的年龄每年扣减 0.06 厘米。'
  },
  {
    key: 'faq-4',
    question: '什么是估算标准误差 (SEE)？',
    answer: 'SEE 代表回归模型中残差的标准差，用于衡量特定骨骼预测身高的精确度。'
  },
  {
    key: 'faq-5',
    question: '哪些长骨能提供最准确的身高推定？',
    answer: '下肢骨（尤其是股骨和胫骨）能提供最准确的身高估计，因为它们直接构成人体的站立高度。上肢骨的标准误差较大。'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '法医身高推定计算器',
    desc: '模拟骨度板测量，并使用线性回归法推算生前身高。',
    configTitle: '骨测量配置',
    boneLabel: '骨骼标本',
    lengthLabel: '骨骼长度',
    unitLabel: '单位系统',
    metricOption: '公制 (cm)',
    imperialOption: '英制 (in)',
    sexLabel: '生物学性别',
    ancestryLabel: '祖先群体',
    ageLabel: '死亡 age (岁)',
    maleOption: '男性',
    femaleOption: '女性',
    whiteOption: '白人 / 高加索人',
    blackOption: '黑人 / 非裔美国人',
    asianOption: '亚洲人 / 蒙古人种',
    femurName: '股骨 (大腿骨)',
    tibiaName: '胫骨 (小腿骨)',
    humerusName: '肱骨 (上臂骨)',
    fibulaName: '腓骨 (小腿外侧骨)',
    radiusName: '桡骨 (前臂外侧骨)',
    ulnaName: '尺骨 (前臂内侧骨)',
    resultsTitle: '身高推定结果',
    estimateLabel: '推定身高',
    errorLabel: '标准误差 (SEE)',
    rangeLabel: '95% 预测区间',
    formulaLabel: '回归方程',
    formulaBoneFactor: '骨骼因子',
    formulaConstant: '常数',
    formulaAgeCorrection: '年龄校正',
    formulaStdError: '标准误差 (SEE)',
    fallbackAlert: '目前没有针对亚洲女性的直接 Trotter-Gleser 回归方程；已使用白人女性的参考方程作为法医学替代参考。',
    boardInstructions: '拖动卡尺手柄或使用输入框来测量骨骼长度。',
    rulerLabelMetric: '公制刻度 (mm)',
    rulerLabelImperial: '英制刻度 (in)',
    unitsCm: '厘米',
    unitsInches: '英寸',
    unitsFtIn: '英尺/英寸'
  },
  seo: [
    {
      type: 'title',
      text: '法医人类学中身高推定方法的全面指南',
      level: 2
    },
    {
      type: 'paragraph',
      html: '身高推定是体质人类学、生物考古学和法医学中建立生物学特征的关键环节。在发现骨骼遗骸时，重建死者的生前身高有助于调查人员与失踪人员记录进行比对。通过测量与身高密切相关的长骨最大长度来推定身高。'
    },
    {
      type: 'paragraph',
      html: '本数字骨度板模拟器旨在帮助学生和从业人员研究由 Mildred Trotter 和 Goldine C. Gleser 建立的线性回归模型。'
    },
    {
      type: 'title',
      text: '理解 Trotter-Gleser 回归公式',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter 和 Goldine C. Gleser 分别于 1952 年和 1958 年发表了其经典的身高推定公式。公式形式为：身高 = (斜率 × 骨长) + 常数 ± 标准误差。针对不同的性别和祖先群体使用不同的公式。'
    },
    {
      type: 'table',
      headers: ['长骨标本', '白人男性回归模型', '白人女性回归模型', '法医学实用性与可靠性'],
      rows: [
        ['股骨 (Femur)', '身高 = 2.32 × 股骨 + 65.53 ± 3.94 厘米', '身高 = 2.47 × 股骨 + 54.10 ± 3.72 厘米', '可靠性最高。股骨是下肢主要的负重骨，与身高直接相关。'],
        ['胫骨 (Tibia)', '身高 = 2.42 × 胫骨 + 81.93 ± 4.00 厘米', '身高 = 2.90 × 胫骨 + 61.53 ± 3.66 厘米', '可靠性高。必须注意遵循 Trotter 的原始测量规范，即不包括内踝。'],
        ['腓骨 (Fibula)', '身高 = 2.60 × 腓骨 + 75.50 ± 3.86 厘米', '身高 = 2.93 × 腓骨 + 59.61 ± 3.57 厘米', '十分可靠，但在考古遗骸中腓骨较细，经常发生碎裂或缺失。'],
        ['肱骨 (Humerus)', '身高 = 2.89 × 肱骨 + 78.10 ± 4.57 厘米', '身高 = 3.36 × 肱骨 + 57.97 ± 4.45 厘米', '可靠性中等。上肢骨不负重，标准误差较大。'],
        ['桡骨 (Radius)', '身高 = 3.79 × 桡骨 + 79.42 ± 4.66 厘米', '身高 = 4.74 × 桡骨 + 54.93 ± 4.45 厘米', '可靠性较低。前臂骨骼的发育比例个体差异较大。']
      ]
    },
    {
      type: 'title',
      text: '年龄相关身高萎缩与生前校正',
      level: 3
    },
    {
      type: 'paragraph',
      html: '成人的身高在生命后期并非静止不变。从 30 岁起，由于椎间盘受压等生理变化，人的身高会逐渐变矮。Trotter 和 Gleser 建议对 30 岁以后的年龄每年扣减 0.06 厘米：身高丧失量 = 0.06 × (年龄 - 30)。'
    },
    {
      type: 'title',
      text: '胫骨测量规范的方法学差异',
      level: 3
    },
    {
      type: 'paragraph',
      html: '法医人类学中一个广为人知的方法学问题是 Trotter 对胫骨的测量。在 1952 年的研究中，测量不包括内踝，而在 1958 年的后续研究中则包括了内踝。如果将 1952 年公式应用到包含内踝测得 invest 的胫骨上，会导致系统性偏高。'
    },
    {
      type: 'title',
      text: '长期趋势与历史参考数据的局限性',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Trotter-Gleser 的样本多出生于 19 世纪末和 20 世纪初，反映了当时的营养水平。在过去一个世纪中，随着膳食营养的改善，人类的平均身高有所增加（即长期趋高趋势）。因此，在现代法医实务中，常配合 FORDISC 等现代数据库进行分析。'
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
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
