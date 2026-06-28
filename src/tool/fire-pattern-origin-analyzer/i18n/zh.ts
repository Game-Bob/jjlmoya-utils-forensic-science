import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'fire-pattern-origin-analyzer';
const title = '火灾模式起火点分析器';
const description = '在房间平面图上绘制V形模式、深层炭化、烟尘阴影和清洁燃烧指标，然后投射火灾蔓延向量以估算最可能的起火区域。';

const howTo = [
  {
    name: '导入现场平面图',
    text: '在放置证据向量之前，将平面图图像拖入工作区或从磁盘加载。',
  },
  {
    name: '点击打开径向证据选择器',
    text: '将指针放在燃烧痕迹上，打开上下文径向菜单，直接在地图上选择指标类型。',
  },
  {
    name: '拖动以细化向量并观察收敛',
    text: '通过画布吸附延长每条传播向量，并随着证据积累实时观察概率场的重新计算。',
  },
  {
    name: '导出技术快照',
    text: '生成包含起源坐标、置信度、方差、图层状态和完整向量集的结构化报告，供后续审查。',
  },
];

const faq = [
  {
    question: '燃烧模式能证明火灾的确切起火点吗？',
    answer: '不能。火灾模式有助于生成和检验起源假设，但通风、灭火、燃料负荷、闪燃和火灾后干扰可能扭曲模式。真正的起火点确定需要系统调查。',
  },
  {
    question: '为什么V形模式在火灾调查中很重要？',
    answer: 'V形模式通常反映火焰在垂直表面上向上和向外蔓延。它们可能指向较低的起火区域，但在得出结论之前必须与其他证据进行比较。',
  },
  {
    question: '深层炭化表明什么？',
    answer: '深层炭化可能表明加热时间更长、热通量更高或燃料效应。这是有用的背景信息，但由于材料炭化速率不同，不会自动标记起火点。',
  },
  {
    question: '为什么要使用多个向量而不是一个箭头？',
    answer: '单一模式可能会产生误导。多个独立向量减少了一面损坏墙壁、一个燃料包或一条通风路径的影响。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: '用于绘制火灾蔓延向量的交互式法庭科学工作区',
    vPattern: 'V形模式',
    deepChar: '深层炭化',
    sootShadow: '烟尘阴影',
    cleanBurn: '清洁燃烧',
    loadPlan: '加载平面图',
    generateReport: '生成报告',
    pointerLabel: '指针',
    resetVectors: '重置',
    estimatedOrigin: '估算起火点',
    visibleLayers: '可见证据图层',
    vectorsLabel: '向量',
    confidenceLabel: '置信度',
    varianceLabel: '方差',
    modeLabel: '模式',
    guideSummary: '如何使用此工具',
    flowPanelTitle: '工作流程',
    legendPanelTitle: '证据图例',
    readoutPanelTitle: '结果面板',
    flow1Kicker: '第1步',
    flow1Icon: '1',
    flow1Title: '加载',
    flow1Text: '上传现场平面图',
    flow2Kicker: '第2步',
    flow2Icon: '2',
    flow2Title: '选择线索',
    flow2Text: '点击燃烧痕迹',
    flow3Kicker: '第3步',
    flow3Icon: '3',
    flow3Title: '拖动向量',
    flow3Text: '瞄准火灾方向',
    flow4Kicker: '第4步',
    flow4Icon: '4',
    flow4Title: '读取结果',
    flow4Text: '检查底部面板并导出',
    basicsTitle: '首先应该做什么',
    basicsIntro: '加载清晰的平面图，只标记你能合理解释的模式，并在不同表面上分布向量，而不是重复相同的线索。',
    indicatorsTitle: '每种证据类型的含义',
    vPatternShort: '墙面燃烧向上敞开',
    vPatternExplain: 'V形模式是常见于墙壁上的向上和向外燃烧形状。它可能表明热量和火焰从较低区域上升，但不是确切起火点的自动证明。',
    deepCharShort: '区域燃烧更剧烈或更持久',
    deepCharExplain: '深层炭化意味着某个区域的材料比周围看起来更焦黑或耗损。这可能表明加热时间更长或更强烈，但燃料类型和材料厚度影响很大。',
    sootShadowShort: '烟气被阻挡或转向',
    sootShadowExplain: '烟尘阴影是一个受保护或不同暗度的区域，表明物体、表面或气流改变了烟尘沉积方式。它有助于还原当时存在什么或烟气如何移动。',
    cleanBurnShort: '热量或气流导致烟尘减少',
    cleanBurnExplain: '清洁燃烧指烟尘看起来更淡、被清除或缺失的区域，因为热量、通风或直接火焰暴露对其产生了不同影响。这很有用，但并非每个清洁区域都标记起火点。',
    resultsTitle: '如何读取结果',
    resultsIntro: '将底部面板用作绘图的快速健康检查，而非最终的法庭科学结论。',
    resultsPoint1: '有多少条证据线处于活动状态。',
    resultsPoint2: '活动向量的一致程度。',
    resultsPoint3: '起火区域的宽度有多大。',
    resultsPoint4: '工具期望你接下来做什么。',
    awaitingVector: '等待向量',
    selectIndicator: '选择指标',
    refiningVector: '细化向量中',
    needsMoreVectors: '需要更多向量',
    wideArea: '宽阔的起火区域',
    focusedArea: '集中的起火区域',
    dropPlan: '拖放平面图图像或点击上传',
    needsMoreVectorsText: '至少绘制两条明确的方向箭头。三个或更多独立观察通常会使收敛更容易解释。',
    wideAreaText: '投影线相交，但散布仍然很宽。在实际现场中，缩小起火区域前应比较通风、燃料负荷、灭火效果和目击者信息。',
    focusedAreaText: '向量汇聚到一个紧凑区域。将此视为用于起火点假设开发的有力教学信号，而非最终的法庭科学结论。',
    disclaimer: '仅供教育模拟。实际的火灾起源和原因调查应遵循公认的指南、现场安全规程、文档标准和合格的专家审查。',
  },
  seo: [
    {
      type: 'title',
      text: '基于燃烧模式向量的交互式火灾起源分析',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: '教学模拟器',
      title: '本火灾模式起源分析器教什么',
      html: '此浏览器工具演示调查人员如何从物理火灾模式推断可能的<strong>起火区域</strong>。用户绘制可见证据、绘制方向性传播向量，并观察投影线汇聚或分散。该模型有意采用教育性设计：教授几何学和模式解读，而非法律原因判定。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4个图层', label: 'V形模式、炭化、烟尘、清洁燃烧', icon: 'mdi:layers-triple' },
        { value: '二维平面图', label: '结构房间地图', icon: 'mdi:floor-plan' },
        { value: '3+个箭头', label: '建议观察数量', icon: 'mdi:vector-line' },
        { value: '0-100%', label: '置信度输入', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: '火灾模式解读的严谨工作流程',
      items: [
        '在解读模式之前，从安全、现场保护、拍照、草图和系统文档开始。',
        '将模式类型分开，避免将V形损伤、炭化深度、烟尘沉积和清洁燃烧归为一个假设。',
        '仅在物理模式支持可辩护的传播方向处绘制方向指示器。',
        '寻找独立观察之间的收敛，而非依赖最显眼的损伤。',
        '将估算的起火区域作为假设，对照燃料、点火源、通风、电气证据和目击者陈述进行检验。',
      ],
    },
    {
      type: 'table',
      headers: ['模式', '潜在价值', '主要注意事项'],
      rows: [
        ['V形模式', '可能表明从较低区域向上和向外的火焰传播。', '可能因通风、闪燃、墙壁几何和灭火而改变。'],
        ['深层炭化', '可能表明持续受热或强烈燃烧。', '燃料类型和材料厚度对炭化深度影响很大。'],
        ['烟尘阴影', '可揭示受保护区域、物体位置或气流效应。', '移动家具或灭火活动可能改变解读。'],
        ['清洁燃烧', '可显示高温、通风或燃烧后期阶段。', '不会自动识别最先引燃的材料。'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '更好的起火点假设',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '最佳假设能同时解释多个观察。',
          points: ['独立向量汇聚', '证据与已知通风路径吻合', '燃料包已考虑', '积极检验替代起火点'],
        },
        {
          title: '薄弱的起火点假设',
          icon: 'mdi:alert-circle-outline',
          description: '薄弱假设通常依赖单一模式而不检验扭曲因素。',
          points: ['将一处剧烈炭化区域视为证据', '忽视闪燃', '灭火损伤未记录', '点火源证据被假定'],
        },
      ],
    },
    {
      type: 'title',
      text: '向量模型如何工作',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '每支箭头被视为火灾传播的投影线。估算器计算成对线交点，过滤合理平面边界内的点，对剩余交叉点取平均，并根据这些交点的散布报告半径。小半径配合多个向量产生更强的收敛信号。',
    },
    {
      type: 'paragraph',
      html: '这种几何方法反映了课堂绘图练习：帮助学生理解为什么当观察来自不同表面和模式类型时，起源分析会改善。它也揭示了一个常见问题：即使底层解读不佳，箭头仍可能相交，因此数学中心绝不能取代火灾科学判断。',
    },
    {
      type: 'glossary',
      items: [
        { term: '起火区域', definition: '现有证据表明火灾开始的总体区域。' },
        { term: 'V形模式', definition: '一种火灾模式，通常在垂直表面呈现为向上和向外的损伤。' },
        { term: '清洁燃烧', definition: '在高温或气流条件下，烟尘被烧掉或未沉积形成的较亮或较干净的区域。' },
        { term: '烟尘阴影', definition: '一个受保护或沉积状态不同的烟尘区域，可保存有关物体、气流或热暴露的信息。' },
        { term: '向量收敛', definition: '投影方向指示器围绕共同区域的聚集。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: '法庭科学警示',
      title: '不要将收敛变成确定性',
      html: '紧密的交点簇仅在观察有效时才有用。实际调查必须考虑通风、闪燃、燃料包、电气系统、电器证据、目击者陈述、灭火和现场扰动。',
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
