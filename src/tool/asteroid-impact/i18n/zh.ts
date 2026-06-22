const slug = 'asteroid-impact-simulator';
const description = '使用真实物理模拟小行星撞击。计算能量、陨石坑、热辐射和冲击波。你能在希克苏鲁伯撞击中幸存吗？';
const title = '小行星撞击模拟器：末日计算器';
const howTo = [
    {
      name: '选择抛射物大小',
      text: '输入小行星直径，从 10 米的小陨石到 10 公里的星球杀手。',
    },
    {
      name: '配置速度和角度',
      text: '调整接近速度和进入角度（45° 是统计学上最可能的数值）。',
    },
    {
      name: '定义小行星性质',
      text: '选择小行星是由岩石、铁还是冰组成的，以正确计算陨石坑深度。',
    },
    {
      name: '分析生存裁决',
      text: '在地图上拖动小行星并指出您所在的距离，以查看辐射、地震和冲击波的影响。',
    },
  ];
const faq = [
    {
      question: '撞击能量是如何计算的？',
      answer: '主要能量是动能：(1/2) * 质量 * 速度²。我们使用真实的密度（例如岩石小行星为 3000 kg/m³）和典型的进入大气层速度（11 到 72 公里/秒）。产生的能量以兆吨 TNT（百万吨级）来衡量。',
    },
    {
      question: '什么是热冲击波？',
      answer: '进入大气层时，小行星会剧烈压缩空气，产生比太阳亮一千倍的火球。产生的热辐射会导致三度灼伤，并令数英里外的森林起火。',
    },
    {
      question: '为什么有些小行星不产生陨石坑？',
      answer: '较小的岩石（<50m）由于空气压力通常在大气中碎裂并爆炸（空爆），就像在车里雅宾斯克发生的那样。能量以强大的压力冲击波形式释放，但并不会作为固体直接撞击地面。',
    },
    {
      question: '撞击的真实概率是多少？',
      answer: '小型撞击（如 2013 年在俄罗斯发生的）每十年发生一次。灾难性撞击（通古斯式）每隔几个世纪发生一次。全球性灭绝事件（如希克苏鲁伯）大约每 1 亿年发生一次。',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: '已复制',
    noHistory: '无历史记录',
    load: '加载',
    delete: '删除',
    activateGPS: '启用 GPS',
    analysisLabel: '分析',
    dragToMap: '拖动到地图',
    diameterLabel: '直径',
    velocityLabel: '速度',
    typeLabel: '类型',
    historicalData: '历史数据',
    composition: '成分',
    rock: '岩石',
    iron: '铁',
    ice: '冰',
    clearAll: '清除全部',
    searching: '正在搜索...',
    gpsActive: 'GPS 已激活',
    gpsError: 'GPS 错误',
    verdictSafe: '安全区',
    verdictSafeSub: '无威胁',
    verdictShock: '冲击波',
    verdictShockSub: '结构损坏',
    verdictBurned: '热辐射',
    verdictBurnedSub: '极端危险',
    verdictVaporized: '爆心投影点',
    verdictVaporizedSub: '直接撞击',
    presetAerial: '空中爆破',
    presetForest: '森林',
    presetComet: '彗星',
    presetELE: 'E.L.E.（物种大灭绝）',
  },
  seo: [
    {
      type: 'title',
      text: '当天塌下来时：宇宙末日的物理学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '小行星不仅仅是太空岩石。它们是时速达 20 公里/秒的宇宙子弹，能够释放出比地球上所有核武器总和还要多的能量。本模拟器将抽象的物理学转化为切实的生存后果。',
    },
    {
      type: 'title',
      text: '末日方程',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '一切始于动能：<strong>E = ½mv²</strong>。一颗直径 100 米且速度为 20 公里/秒的小行星会释放出大约 0.5 兆吨 TNT 的能量。作为参考，广岛原子弹的威力为 0.015 兆吨。',
    },
    {
      type: 'paragraph',
      html: '但规模呈指数级增长。一个体积大 10 倍的物体其体积（及质量）大 1,000 倍，释放出的能量相当于 <strong>5 亿吨 TNT</strong>。希克苏鲁伯（恐龙杀手）释放出的能量相当于 <strong>1 亿兆吨</strong>。',
    },
    {
      type: 'paragraph',
      html: '一颗直径 1 公里的小行星撞击地球所释放的能量将超过地球上所有核武器同时引爆产生的能量。',
    },
    {
      type: 'title',
      text: '毁灭解剖学：末日的同心圆层',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>陨石坑（爆心投影点）：</strong> 陨石坑直径随 E^0.3 缩放。1 兆吨级撞击会产生一个约 1 公里的陨石坑。内部的一切都会瞬间汽化。',
        '<strong>热辐射（闪光）：</strong> 火球释放出强烈的红外辐射。在 E^0.41 公里的距离内，衣物会自燃，皮肤会遭受三度灼伤。',
        '<strong>冲击波（重锤）：</strong> 超压波以超音速传播。在 1 psi 时，玻璃会碎裂。在 5 psi 时，建筑物会倒塌。',
        '<strong>地震（地震回响）：</strong> 撞击产生全球地震波。希克苏鲁伯引起了 11 级地震，打破了黎克特制（里氏）震级。',
      ],
    },
    {
      type: 'title',
      text: '历史撞击：历史教训',
      level: 3,
    },
    {
      type: 'table',
      headers: ['地点和年份', '大小', '能量', '影响'],
      rows: [
        ['俄罗斯车里雅宾斯克 (2013)', '20 米', '50 万吨 TNT', '100 公里处产生冲击波，1,500 人受伤，窗户碎裂'],
        ['西伯利亚通古斯 (1908)', '50-60 米', '1,000-1,500 万吨 TNT', '平整了 2,000 平方公里的森林，8,000 万棵树倒下'],
        ['墨西哥湾希克苏鲁伯 (6,600 万年前)', '10 公里', '1 亿兆吨 TNT', '地球上 75% 的生命灭绝'],
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


