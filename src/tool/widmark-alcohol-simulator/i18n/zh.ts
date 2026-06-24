import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-blood-alcohol-simulator';
const title = '魏德马克血液酒精浓度模拟器';
const description = '使用魏德马克公式模拟人体内乙醇的吸收、分布和代谢消除过程。';

const howTo = [
  {
    name: '配置身体参数',
    text: '输入体重、性别与脱水状况来确定魏德马克稀释因子(r)。',
  },
  {
    name: '胃部饱腹状态',
    text: '可选择空腹、适量饮食或饱腹，从而调整吸收速度。',
  },
  {
    name: '记录饮酒',
    text: '输入对应的饮品容量、酒精浓度及饮酒的时间。',
  },
  {
    name: '观察曲线',
    text: '观察血液中酒精浓度的即时数值与完全消退所需时间。',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '什么是魏德马克公式？',
    answer: '它是估算体内血液酒精浓度的一种经典动力学数学模型。',
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
      html: '乙醇的吸收、分布和代谢消除是法医医学的基础课题。大部分酒精在小肠被吸收。胃内的食物会延缓胃排空，从而降低血液酒精浓度的峰值。',
    },
    {
      type: 'paragraph',
      html: '该模拟器工作方程式为： <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>。肝脏代谢符合零级动力学，以每小时约0.15 g/L的恒定速率呈线性衰减。',
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
