import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'time-of-death-algor-mortis-calculator';
const title = '死亡时间尸冷计算器 亨斯格列线图';
const description = '根据直肠深部温度和环境温度采用亨斯格双指数列线图模型推算死后经过时间与死亡时间窗口。';

const howTo = [
  { name: '输入直肠温度与环境温度', text: '输入现场测量的尸体直肠深部温度以及案发现场的环境气温。' },
  { name: '设定尸体体重与环境修正系数', text: '输入尸体重量并根据着衣情况盖被或水浸环境选择相应的修正系数。' },
  { name: '输入温度测量具体时刻', text: '输入进行体温测量时的具体时间或直接点击当前时间按钮。' },
  { name: '分析死后间隔与降温曲线', text: '查看推算的死后经过时间九十五百分比置信区间的死亡时间段及热力学曲线。' }
];

const faq = [
  { question: '法医学中的尸冷现象是什么', answer: '尸冷是指人死后血液循环停止体内产热终止尸体温度逐渐下降直至与周围环境温度平衡的物理过程。' },
  { question: '为什么亨斯格列线图优于线性估算公式', answer: '因为该模型精确涵盖了死亡初期的体温平台期以及受体重和衣物隔热影响的双指数非线性降温规律。' },
  { question: '基于尸体温度推算死亡时间的精确度如何', answer: '在受控的标准环境下死亡后前十小时内的百分之九十五统计置信区间约为正负二点八小时。' },
  { question: '什么是死后初期体温平台期', answer: '指死亡后的一至三小时内由于体表先冷却而深部核心温度几乎不发生明显下降的过渡延迟阶段。' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: '死后经过时间推算与热衰减列线图分析',
    disclaimer: '本工具仅用于教学与学术模拟。正式司法鉴定必须结合法医解剖尸斑尸僵及现场勘验综合判定。',
    unitSystemLabel: '单位系统',
    unitMetricLabel: '公制',
    unitImperialLabel: '英制',
    presetsHeader: '法医学标准预设场景',
    presetCustom: '自定义参数',
    presetNakedCalm: '静止室内裸体 (20°C)',
    presetDressedIndoor: '室内常规着衣 (19.5°C)',
    presetWinterOutdoor: '冬季室外寒冷 (4°C)',
    presetSubmergedWater: '浸没于静水中 (12°C)',
    presetHeavyDuvet: '床上覆盖厚羽绒被 (18°C)',
    inputsHeader: '现场测量读数与环境参数',
    rectalTempLabel: '直肠深部核心温度',
    ambientTempLabel: '周围环境温度',
    bodyWeightLabel: '尸体体重',
    factorLabel: '环境修正系数',
    measurementTimeLabel: '测量时间',
    factorNaked: '静止空气中裸体',
    factorLightClothes: '单薄衣物 1至2层',
    factorStandardClothes: '常规日常着装 3至4层',
    factorHeavyWinter: '厚重冬季防寒服',
    factorLightBlanket: '床上单薄毛毯',
    factorHeavyDuvet: '床上厚羽绒被',
    factorStillWater: '浸泡于静止水中',
    factorFlowingWater: '浸泡于流动冷水中',
    factorWetClothing: '湿衣物伴随风吹',
    factorMovingAir: '风扇等流动空气',
    resultsHeader: '死后经过时间推算分析',
    estimatedPmiLabel: '估计死后经过时间',
    deathWindowLabel: '推测死亡时间窗口',
    confidenceMarginLabel: '置信区间 (95%)',
    coolingPhaseLabel: '热力学阶段',
    coolingRateLabel: '瞬时散热速率',
    glaisterEstimateLabel: '格莱斯特线性对比',
    chartHeader: '亨斯格双指数降温变化轨迹',
    chartXAxis: '死后小时数',
    chartYAxis: '核心体温',
    chartNowMarker: '测量时刻读数',
    chartPlateauMarker: '初期平台期',
    phasePlateau: '平台期阶段',
    phaseDescent: '指数快速下降期',
    phaseEquilibrium: '热平衡期',
    phaseHyperthermia: '生前高热警示',
    hoursUnit: '小时',
    minutesUnit: '分',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: '重置',
    nowBtn: '当前时间',
    coreThermometerLabel: '核心温度',
    baselineAmbientLabel: '环境基准',
    referenceBodyTempLabel: '生前标准体温'
  },
  seo: [
    { type: 'title', text: '尸体冷却热力学原理与死亡时间科学推断', level: 2 },
    { type: 'paragraph', html: '准确推断死后经过时间（PMI）是法医病理学现场勘验的核心任务之一。<strong>尸冷（Algor Mortis）</strong>是指人体死亡后产热机能停止在环境介质中由热传递规律主导的热量散失过程。通过测量深部直肠温度并运用经典热力学双指数方程可以科学界定死者死亡的时间范围。' },
    { type: 'diagnostic', variant: 'info', title: '尸体降温的物理特性', html: '尸体冷却过程并非直线恒速进行。在死亡最初期存在明显的<em>体温平台期</em>随后进入陡峭的双指数迅速下降阶段。' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: '正常直肠基准温度' },
      { value: '±2.8h', label: '早期95%置信界限' },
      { value: '双指数模型', label: '亨斯格数学方程' }
    ] },
    { type: 'title', text: '克劳斯 亨斯格双指数公式解析', level: 3 },
    { type: 'paragraph', html: '早期法医常用的格莱斯特公式假设尸温每小时匀速下降约零点八三摄氏度。然而线性假设完全忽略了体型差异着衣厚度以及体温平台期对推断结果的巨大干扰。' },
    { type: 'code', ariaLabel: '亨斯格方程', code: 'Q = (T_直肠 - T_环境) / (37.2 - T_环境)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (体重^0.625 * 修正系数) - 0.0284' },
    { type: 'paragraph', html: '亨斯格教授建立的双指数数学方程同步考量了体表浅层热传导与深部内脏热惯性从而使推算结果具备极高的统计可靠性。' },
    { type: 'title', text: '常见环境与衣物修正系数对照', level: 3 },
    { type: 'paragraph', html: '散热速率直接取决于体表有效散热面积空气对流速度以及纺织物隔热层的厚度。' },
    { type: 'table', headers: ['现场状况', '修正系数', '物理效应'], rows: [
      ['静止空气中裸体', '1.0', '标准辐射与自然对流散热'],
      ['单薄衣物 1至2层', '1.1', '轻微减缓皮肤对流热散失'],
      ['日常标准着装 3至4层', '1.2', '躯干四肢形成中度隔热屏障'],
      ['厚重冬季防寒服', '1.4', '滞留静止空气层形成高度隔热'],
      ['床上覆盖厚羽绒被', '1.8', '强保暖性显著延缓尸体冷却'],
      ['浸没于静水中', '0.5', '水的导热系数约为空气的二十四倍'],
      ['浸没于流动冷水中', '0.35', '强制对流加剧热量极速散失']
    ] },
    { type: 'title', text: '尸体冷却的热力学发展阶段', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: '死后体温平台期', description: '死后一至三小时内体表先冷却而深部直肠温度保持基本恒定。', points: ['由内向外温度梯度逐步形成', '线性公式在此区间严重低估死后时间', '公式中负零点二五指数项精确修正'] },
      { title: '快速双指数下降期', description: '温度梯度确立后热量以与体重相关的稳定速率快速向周围介质散失。', highlight: true, points: ['温度测量法最敏感的黄金时间', '统计学误差区间最小', '法医体温推算法的最佳应用期'] }
    ] },
    { type: 'title', text: '法医现场体温测量操作规范', level: 3 },
    { type: 'list', items: [
      '<strong>精准测量深部直肠温度:</strong> 使用校准数字热敏电阻探头插入直肠深处八至十厘米。',
      '<strong>测量尸体周围近旁气温:</strong> 温度计置于距尸体表面不超过十厘米处记录。',
      '<strong>核查现场热环境稳定性:</strong> 详细记录取暖设备开放门窗或直射阳光等变动因素。',
      '<strong>检查衣物潮湿状态:</strong> 潮湿纺织品蒸发吸热会显著加快尸体降温速度。'
    ] },
    { type: 'summary', title: '方法学要点总结', items: [
      '亨斯格列线图是国际法医界广泛公认的尸温死后时间推断金标准。',
      '出具鉴定意见时应给出带有标准差的时间段而非单一定点时刻。',
      '必须与尸僵发展程度尸斑分布及超生反应检测进行多指标交叉验证。'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
