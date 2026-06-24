import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-blood-alcohol-simulator';
const title = '魏德马克血液酒精浓度模拟器';
const description = '使用魏德马克公式模拟人体内乙醇的吸收、分布和代谢消除过程。';

const howTo = [
  {
    name: '配置身体物理参数',
    text: '输入体重、生物学性别与脱水状况。这些生理特征直接计算魏德马克稀释因子（r），它决定了乙醇在体内的分布容积。',
  },
  {
    name: '设定胃部饱腹状态',
    text: '可选择空腹、适量饮食或饱腹。该设置动态调整吸收速率常数（ka），用以展示食物对血液酒精浓度曲线的减缓与延迟作用。',
  },
  {
    name: '在时间线上添加饮酒记录',
    text: '通过指定毫升数体积、酒精体积分数百分比（ABV）以及相对于模拟开始的饮酒小时来添加单次饮酒记录。',
  },
  {
    name: '分析生成的血液酒精浓度曲线',
    text: '观察并检查12小时内的血液酒精浓度（BAC）图表。将峰值水平、达到峰值的时间以及完全清醒的总时长与标准驾车限制进行对比。',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '什么是魏德马克公式？它在法医科学中如何被应用？',
    answer: '魏德马克公式是由 Erik M. P. Widmark 于 1932 年提出的一种经典数学模型。它基于摄入的纯酒精质量、体重、生物学分布系数（r）和随时间推移的线性消除速率来估算血液酒精浓度。法医毒物化学家在实际案情中常使用此公式进行逆向计算，以推算涉案人员在事故发生精确时刻的血液酒精浓度。',
  },
  {
    key: 'faq-2',
    question: '胃部食物是如何影响血液酒精浓度（BAC）曲线形状的？',
    answer: '胃内的食物会延缓胃排空进程，从而阻碍酒精迅速进入拥有巨大吸收表面积的小肠。在模拟器中，这一延迟效应通过降低吸收速率常数（ka）进行数学建模，其结果表现为 BAC 曲线峰值向后推迟，且最大峰值浓度显著降低。',
  },
  {
    key: 'faq-3',
    question: '为什么酒精从体内的清除遵循零级动力学而非一级动力学？',
    answer: '多数药物的清除遵循一级代谢动力学，即清除速率与血药浓度成正比。但酒精的消除遵循零级动力学，因为肝脏中负责代谢酒精的主要酶（乙醇脱氢酶，简称ADH）在非常低的血液酒精浓度下（约 0.02 g/L）就已经处于完全饱和状态。因此，肝脏以恒定的最大速度降解酒精，无论摄入量有多少。',
  },
  {
    key: 'faq-4',
    question: '哪些生物学因素会导致魏德马克稀释因子 r 的个体差异？',
    answer: '魏德马克稀释因子（r）代表体水分与总体重的比例。由于乙醇极易溶于水而不易溶于脂肪，因此它仅分布在体水分中。肌肉组织水分含量较高（约 75%），而脂肪组织含水量极低。因此，体脂率较高或处于脱水状态的个体其稀释因子 r 较小，摄入相同量酒精时产生的 BAC 峰值更高。',
  },
  {
    key: 'faq-5',
    question: '我可以使用该模拟器来从法律上证明我清醒并可以安全驾驶吗？',
    answer: '绝对不行。本模拟器仅用于教学与科普展示。在实际生活中，个体的肝脏健康状况、基因多态性、药物相互作用、睡眠不足、精神压力及胃肠道物理状态均能引入极大的误差。严禁将此模拟结果作为决定饮酒后能否驾驶的法律依据。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: '个人身体参数',
    weight: '体重 (kg)',
    sex: '生物学性别',
    male: '男性',
    female: '女性',
    hydration: '水分状态',
    hydrationLow: '脱水/偏低',
    hydrationNormal: '正常',
    hydrationHigh: '充沛/偏高',
    stomachState: '胃部状态',
    stomachEmpty: '空腹 (吸收较快)',
    stomachLight: '适量进食 (吸收中等)',
    stomachFull: '饱腹 (吸收减缓)',
    drinksTimeline: '饮酒时间线',
    addDrink: '添加饮品',
    drinkVolume: '容量 (毫升)',
    drinkAbv: '酒精度 (% vol)',
    drinkTime: '时间 (小时)',
    drinksList: '已添加饮品',
    remove: '移除',
    beer: '啤酒 (330ml, 5%)',
    wine: '葡萄酒 (150ml, 12%)',
    spirits: '烈酒 (40ml, 40%)',
    peakBac: 'BAC峰值',
    timeToSober: '完全解酒时间',
    sober: '清醒',
    currentBac: '当前 BAC',
    drivingLimitAlert: '驾驶状态',
    safeLimit: '低于限制',
    warningLimit: '超出预警限制',
    dangerLimit: '超出醉驾限制',
    graphTitle: '12小时血液酒精浓度变化曲线',
    timeAxisLabel: '时间 (小时)',
    bacAxisLabel: '浓度 (g/L)',
    legalLimitText: '标准酒驾限制值',
    noDrinksText: '添加饮品以生成模拟曲线。',
    hours: '小时',
    soberStatus: '{time} 小时内清醒',
    neverSober: '超出 12小时 窗口',
    noteDisclaimer: '本模拟器仅用于教学展示。饮酒后切勿驾车。',
    noteWidmark: '基于魏德马克公式和零级消除动力学。',
  },
  seo: [
    {
      type: 'title',
      text: '法医毒物化学与乙醇体内动力学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '理解乙醇在人体内的<strong>吸收、分布与代谢消除过程</strong>是法医学和交通事故分析的核心基础。当人饮酒时，酒精经食道进入胃部，只有极少部分直接在此处被血液吸收。由于小肠拥有极大的表面积，绝大多数的乙醇吸收发生于十二指肠和空肠。胃排空进入小肠的速度是酒精吸收的主要限速步骤，这解释了为什么胃部食物会对酒精吸收曲线起到明显的平缓与缓冲作用。',
    },
    {
      type: 'paragraph',
      html: '本交互式模拟器基于 Erik M. P. Widmark 的经典公式，结合连续房室模拟模型展示12小时内的酒精浓度变化。通过调整被测个体的生理参数并添加饮酒记录，用户能直观观察到酒精的数学累积与肝脏零级代谢的线性衰减。',
    },
    {
      type: 'title',
      text: '魏德马克公式的数学推导与计算',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '经典的魏德马克方程在假定酒精被瞬间吸收和分布的理想状态下，计算理论上的最大血液酒精浓度：<strong>BAC = (A / (W * r)) - (&beta; * t)</strong>。其中，<em>A</em> 表示所摄入纯乙醇的质量（以克为单位），<em>W</em> 是主体的体重（公斤），而 <em>r</em> 是魏德马克分布系数。参数 <em>&beta;</em> 表示每小时血液酒精浓度的消除速度，而 <em>t</em> 是自吸收开始后经历的时间。',
    },
    {
      type: 'paragraph',
      html: '要将饮品的液体毫升体积转化为纯乙醇质量克数，我们将毫升体积乘以酒精百分比（ABV）再乘以乙醇的密度（约 0.8 g/ml）。例如，330 ml 的 5% ABV 啤酒包含：330 * 0.05 * 0.8 = 13.2 克纯乙醇。这部分酒精将被体水分稀释。模拟器根据性别（男性的标准基准值为 0.68，女性因脂肪占比较高，基准值为 0.55）以及脱水程度动态调整 r 系数。',
    },
    {
      type: 'title',
      text: '物理因素对分布容积和胃排空常数的影响',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '乙醇的分布容积直接由身体的解剖组成决定。酒精高度亲水而疏水（不溶于脂质）。肌肉组织含有约 75% 的水，而脂肪组织几乎不含水。所以同等体重下，肌肉发达的个体拥有更大的稀释因子 r，其所达到的峰值 BAC 明显低于体脂率较高的个体。此外，急性脱水会缩减体内总自由水空间，使得相同的酒精剂量稀释空间变小，从而导致 BAC 曲线整体上抬。',
    },
    {
      type: 'table',
      headers: ['生理学变量', '生物化学机制', '药代动力学影响', '法医学及审判意义'],
      rows: [
        ['总体重', '决定身体总稀释水池的大小。', '与最大峰值 BAC 浓度成反比。', '为血液酒精浓度的逆向推导计算建立基础体积。'],
        ['生物学性别', '决定典型的肌肉与脂肪比率。', '女性的 r 系数（0.55）低于男性（0.68），因而产生更高 BAC。', '解释了为什么同等饮酒量下女性更容易出现较高醉酒程度。'],
        ['水分状态', '改变体内组织中可自由利用的水分体积。', '脱水会导致 r 下降约 0.05，进而显著拉高 BAC 曲线。', '用于校正高温环境下劳动或运动后的酒精估算精度。'],
        ['胃部状态', '食物能够有效阻碍胃排空，滞留酒精在胃内。', '大幅降低吸收速度常数 ka，使 BAC 曲线的峰值平坦并延后。', '合理解释了饱腹饮酒后测量出的偏低酒精数值。'],
      ],
    },
    {
      type: 'title',
      text: '代谢消除动力学：恒速零级肝脏清除率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '酒精在体内分布后，主要由肝脏中乙醇脱氢酶（ADH）代谢为乙醛。因为该酶系统极其高效，在血液酒精浓度达到极低值（0.02 g/L）时就已被彻底饱和。这导致了零级动力学代谢特征，即单位时间内清除固定质量的酒精。法医毒物化学中普遍采用的平均消除速率（&beta;<sub>60</sub>）为每小时 0.15 g/L，这产生了解酒过程中特征性的线性下降斜率。',
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
      applicationCategory: 'ForensicApplication',
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
