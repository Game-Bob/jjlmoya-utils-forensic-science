import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-tlc-ink-simulator';
const title = '法医TLC墨水色谱模拟器';
const description = '模拟可疑书写墨水的薄层色谱分析，可视化溶剂前沿的展开，分离染料带，并计算每个色素的精确Rf值。';

const howTo = [
  {
    name: '选择可疑墨水或对比笔迹',
    text: '选择勒索信墨水或候选笔型配置。每种墨水都含有不同的染料成分，对固定相的亲和力和极性各不相同。',
  },
  {
    name: '选择移动相',
    text: '改变溶剂系统以观察溶剂极性如何改变毛细展开以及各染料带的相对迁移。',
  },
  {
    name: '展开TLC薄层板',
    text: '移动展开时间滑块，观察溶剂前沿随薄层板上升，而分离的色带显示在原线之上。',
  },
  {
    name: '读取Rf值表',
    text: '比较每个色素距离与溶剂前沿距离。模拟器通过将色素距离除以溶剂前沿距离来计算Rf。',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '薄层色谱中的Rf值是什么意思？',
    answer: 'Rf是比移值（Retention factor）：化合物迁移的距离除以溶剂前沿从同一原线迁移的距离。它是无量纲的，通常范围在0到1之间。',
  },
  {
    key: 'faq-2',
    question: 'TLC分析能否证明两个墨水样本来自同一支笔？',
    answer: '不能。TLC可以显示染料分离图案是否一致，但来源判定需要经过验证的对比方法、对照样品、文书记录以及专家的综合解释。',
  },
  {
    key: 'faq-3',
    question: '为什么更换溶剂会改变色带图案？',
    answer: '染料在固定相和移动相之间的分配行为不同。极性匹配更好的溶剂能将染料携带得更远，从而增加其Rf值。',
  },
  {
    key: 'faq-4',
    question: '为什么原线（起始线）很重要？',
    answer: '溶剂前沿距离和色素迁移距离都必须从原线开始测量。从薄层板底部测量会导致错误的Rf值。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: '带有展开板的薄层色谱展开室',
    rulerAria: '用于测量溶剂前沿和色素色带的虚拟毫米刻度尺',
    rulerMarks: '80,60,40,20,0',
    units: '单位制',
    metric: '公制',
    imperial: '英制',
    unitMillimeter: '毫米',
    unitInch: '英寸',
    unitMinute: '分钟',
    inkSample: '墨水样本',
    ransomNote: '可疑勒索信墨水',
    bluePen: '扣押的蓝色圆珠笔',
    blackPen: '扣押的黑色圆珠笔',
    gelPen: '扣押的中性笔',
    solventSystem: '移动相',
    ethanolWater: '乙醇 / 水',
    butanolAcetic: '丁醇 / 乙酸',
    isopropanolAmmonia: '异丙醇 / 氨水',
    developmentTime: '展开时间',
    frontDistance: '溶剂迁移路程',
    matchScore: '图案相似度',
    solventFront: '溶剂前沿',
    originLine: '原线（起点）',
    pigment: '色素带',
    pigmentCyanDye: '青色染料',
    pigmentVioletDye: '紫色染料',
    pigmentGrayCarrier: '灰色载体',
    pigmentNavyDye: '深蓝色染料',
    pigmentYellowDye: '黄色染料',
    pigmentRedDye: '红色染料',
    pigmentBlueDye: '蓝色染料',
    pigmentDarkBinder: '暗色粘合剂',
    pigmentTealDye: '蓝绿色染料',
    pigmentMagentaDye: '洋红色染料',
    pigmentGelBinder: '凝胶粘合剂',
    distance: '距离',
    rfValue: 'Rf值',
    disclaimer: '仅用于教学模拟。法医墨水对比需要原始文件、经验证的实验室方法、参考标准品以及合格的文书鉴定人员。',
  },
  seo: [
    {
      type: 'title',
      text: '用于法医墨水对比的薄层色谱分析（TLC）',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: '教学模拟器',
      title: '此TLC墨水模拟器如何帮助您理解色谱分析',
      html: '本工具解释了<strong>书写墨水的薄层色谱分析</strong>如何将一条肉眼可见的墨水线分离成多个染料带。它专为法医学学生、文件鉴定初学者以及任何试图理解如何从已展开的TLC板计算Rf值的人而设计。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d 谱带 / d 溶剂', label: '比移值（Rf）计算公式', icon: 'mdi:division' },
        { value: '4', label: '对比的墨水配置文件', icon: 'mdi:pen' },
        { value: '3', label: '模拟的移动相', icon: 'mdi:flask-outline' },
        { value: '2', label: '公制与英制读数显示', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: '正确的TLC测量步骤清单',
      items: [
        'In展开开始前，在溶剂液面之上标记好铅笔原线。',
        '在溶剂到达顶端边缘前取出薄层板。',
        '立即标记溶剂前沿，因为溶剂可能会蒸发或变得难以看清。',
        '从同一条原线起测量色素迁移距离和溶剂迁移距离。',
        '在报告Rf值时，请务必注明溶剂系统、薄层板类型、展开条件以及对照组。',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'TLC分析可以支持的结论',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'TLC可以显示可疑墨水和已知墨水在相同条件下是否具有相似的染料分离行为。',
          points: ['筛查性对比', '染料图案可视化', 'Rf值文件记录', '选择用于确证性测试的样本'],
        },
        {
          title: 'TLC单独不能证明的结论',
          icon: 'mdi:alert-circle-outline',
          description: '单独的TLC分析不能唯一识别某支笔、确定文件日期或证明书写人身份。',
          points: ['不能实现唯一来源判定', '不能识别书写人', '默认不能得出墨水老化结论', '不能替代经验证的专业规程'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['常见用户提问', '涉及的TLC概念', '审慎的解答'],
      rows: [
        ['如何计算Rf值？', '染料的距离除以溶剂前沿的距离。', '均从原线开始测量，然后相除。结果是无量纲的无单位数值。'],
        ['为什么墨水会分裂成不同颜色？', '不同的染料对固定相和移动相具有不同的亲和力。', '单次书写笔画中可能包含多种迁移速率不同的着色剂。'],
        ['两支笔可能会有相同的TLC色谱图案吗？', '会，相似的墨水配方会产生非常接近的分离图案。', '图案相似性仅能证明化学一致性，而非对某一特定笔的个体化识别。'],
        ['为什么我的Rf值改变了？', '溶剂、薄层板、湿度、展开室饱和度、温度以及点样大小都会影响迁移。', 'Rf值只有在条件得到完全控制和记录的情况下才具有可比性。'],
      ],
    },
    {
      type: 'title',
      text: '模拟器如何模拟分离过程',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '该模型将溶剂前沿的运动处理为随时间减速的毛细上升过程，同时根据两个简化的属性为每种染料分配Rf值：它对移动溶剂的亲和力以及它与所选移动相的极性匹配。这属于教学用简化模型，而非分析仪器级别的化学过程，但它保留了用户需要学习的核心物理关系：溶剂首先移动，染料在两相之间分配，然后从测得的迁移距离计算Rf。',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stationary phase', definition: 'TLC薄层板上的涂层（通常为硅胶），它与化合物相互作用并减缓其运动。' },
        { term: 'Mobile phase', definition: '在薄层板上上升并携带染料成分共同迁移的溶剂系统。' },
        { term: 'Origin line', definition: '在展开前，将墨水样本点样到薄层板上时所画的铅笔线。' },
        { term: 'Solvent front', definition: '在薄层板被取出之前，移动相上升到达的最高点。' },
        { term: 'Rf value', definition: '比移值：化合物迁移距离除以溶剂前沿迁移距离所得的比值。' },
      ],
    },
    {
      type: 'tip',
      title: '实际鉴定判读建议',
      html: '在法医文书鉴定工作中，色谱图案"不匹配"特别有用，因为它可以直接排除某支候选笔的配方。而"匹配"的TLC色谱图论证力较弱：它仅说明样本在这些条件下具有化学一致性，并不意味着它们必然来自同一支笔。',
    },
    {
      type: 'proscons',
      title: 'TLC墨水对比的优势与局限性',
      items: [
        { pro: '对于分离墨水染料而言，快速、廉价且视觉直观。', con: '通常具有破坏性，因为必须从文件上提取微量样本。' },
        { pro: 'Rf值为比较可疑样本和已知样本提供了一种结构化的方法。', con: '当溶剂、薄层板、湿度和展开条件发生变化时，Rf值会发生漂移。' },
        { pro: '在进行更高级的分析之前，非常适合作为一种筛查方法。', con: '如果没有更广泛的证据支持，不能直接得出唯一的笔源结论。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: '法医警示',
      title: '切勿夸大墨水色谱分析的论证作用',
      html: '浏览器模拟无法检查纸张、墨水年龄、提取化学过程、薄层板质量、污染或进行仪器确证。使用它来学习测量逻辑和解释限制，而在处理实际案件证据时，请完全依赖经过验证的专业法医文书检验鉴定方法。',
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
