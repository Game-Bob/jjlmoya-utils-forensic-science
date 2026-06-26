import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-microcrystal-drug-simulator';
const title = '毒物微结晶测试模拟器';
const description = '通过将可疑受控物质与经典法医试药相结合，并对比结晶习性、生长速度和偏光反应，模拟用于教学的微结晶毒品筛查图谱。';

const howTo = [
  {
    name: '选择可疑检材',
    text: '选择可卡因、海洛因、苯丙胺或甲基苯丙胺，载入未知物质的教学参比图谱。',
  },
  {
    name: '加入微结晶试剂',
    text: '在氯化铂、氯化金和德拉根多夫试剂之间切换，观察试剂化学反应如何改变结晶形态。',
  },
  {
    name: '调节偏光对比度',
    text: '移动偏光控制器以增加或减少虚拟显微镜视野中的双折射对比度。',
  },
  {
    name: '与参比结果进行比对',
    text: '利用晶癖标签、匹配度评分、生长速度和解释说明，判定图谱是典型参比样、部分符合还是非特异性的。',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '微结晶测试能作为毒品的确认方法吗？',
    answer: '不能。微结晶测试属于初步筛查或比对工具。实际查获毒品的鉴定应遵循经论证的分析流程，包括适当的对照实验以及气相色谱质谱联用（GC-MS）、液相色谱质谱联用（LC-MS）或红外光谱等确认性仪器分析方法。',
  },
  {
    key: 'faq-2',
    question: '为什么不同的试剂会产生不同的结晶形状？',
    answer: '因为试剂与目标化合物中的官能团反应形成盐、络合物或沉淀。溶解度、酸强度、浓度、杂质和干燥速率均会影响观察到的晶癖呈针状、罗盘放射状、棱柱状、板状还是微弱散在颗粒。',
  },
  {
    key: 'faq-3',
    question: '偏光镜检为微结晶分析带来了什么？',
    answer: '偏光光路可提高对比度并显示双折射性，使结晶边缘、分枝和内部结构更容易进行比对。但这并不能消除使用已知参比物质和空白对照的必要性。',
  },
  {
    key: 'faq-4',
    question: '为什么看似阳性的结晶图谱仍可能产生误导？',
    answer: '稀释剂、混合物、降解检材、试剂变质、污染以及分析人员的直觉预期，都可能产生模糊或重叠的结晶形态。因此，对初步筛查结果的解读必须十分谨慎。',
  },
  {
    key: 'faq-5',
    question: '此模拟器可以鉴定未知物质吗？',
    answer: '不能。这只是一个用于结晶形态学教学的虚拟演示工具。它无法测试真实的物证、测量化学性质，亦不能出具实验室鉴定结论。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: '偏光显微镜',
    canvasAria: '微结晶动态生长视野',
    sample: '可疑检材',
    sampleCocaine: '可卡因',
    sampleHeroin: '海洛因',
    sampleAmphetamine: '苯丙胺',
    sampleMethamphetamine: '甲基苯丙胺',
    reagent: '试剂架',
    reagentPlatinum: '氯化铂',
    reagentGold: '氯化金',
    reagentDragendorff: '德拉根多夫',
    polarization: '偏光对比度',
    confidence: '匹配度',
    growth: '生长速度',
    birefringence: '双折射',
    regrow: '重新结晶',
    warningLabel: '法医警示',
    warningTitle: '筛查警示',
    matchReference: '典型参比',
    matchPartial: '部分符合',
    matchNonSpecific: '非特异性',
    habitFeatheryNeedles: '羽毛状针状结晶束',
    habitRosettes: '放射状罗盘形结晶',
    habitBranchingPrisms: '分枝状棱柱结晶',
    habitPlates: '薄板状结晶',
    habitWeakScatter: '稀疏的非特异性散在颗粒',
    cueCocainePlatinumChloride: '羽毛状和分枝状针状结晶束是可卡因与氯化铂反应的典型教学图谱。',
    cueCocaineGoldChloride: '氯化金可形成分枝状橙褐色结晶，但该图谱的特异性不如与氯化铂的反应。',
    cueCocaineDragendorff: '德拉根多夫试剂在此仅呈微弱的生物碱反应；其结晶形态仅应视作筛查参考信息。',
    cueHeroinPlatinumChloride: '可能出现板状沉淀，但该反应并不是强特异性的教学比对图谱。',
    cueHeroinGoldChloride: '罗盘放射状晶簇和圆形星状结晶是本模拟器中海洛因的参比晶型。',
    cueHeroinDragendorff: '德拉根多夫试剂产生橙色分枝状棱柱结晶，这与生物碱筛查相符，不可作为定性确证证据。',
    cueAmphetaminePlatinumChloride: '快速生长的分枝状棱柱结晶表明在所选试剂下呈现典型的兴奋剂类教学图谱。',
    cueAmphetamineGoldChloride: '结晶稀疏意味着该显微镜检发现应报告为非特异性。',
    cueAmphetamineDragendorff: '针状喷射结晶生长迅速，适用于苯丙胺预试验的教学比对。',
    cueMethamphetaminePlatinumChloride: '可能形成偏光罗盘形结晶，但结果依然仅属于初步形态学比对。',
    cueMethamphetamineGoldChloride: '可观察到薄板状晶型，不过与其他化合物存在重叠限制了其特异性。',
    cueMethamphetamineDragendorff: '稠密的橙色分枝状棱柱结晶提供了本组测试中甲基苯丙胺最显著的教学比对反应。',
    disclaimer: '仅供教学筛查模型演示。真实毒品鉴定需要经论证的对照标准品、试剂空白对照、保管链记录以及仪器确证分析。',
  },
  seo: [
    {
      type: 'title',
      text: '法医学中的微结晶毒品测试',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: '教学模拟器',
      title: '本微结晶模拟器的用途',
      html: '本工具演示了在可疑检材与化学试剂混合后，经典的法医微结晶测试如何产生易于识别的结晶习性。它帮助学生在无需将浏览器演示结果视作法律证据的前提下，对比<strong>结晶形态</strong>、生长速度和偏光镜下的双折射对比度。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: '教学样本档案', icon: 'mdi:flask-outline' },
        { value: '3', label: '经典试药选项', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: '模拟结晶形态', icon: 'mdi:shape-outline' },
        { value: '0', label: '法定化学定性声明', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: '如何解读结晶习性',
      level: 3,
    },
    {
      type: 'summary',
      title: '实用的显微镜检比对清单',
      items: [
        '在比对未知检材前，请先用已知的对照标准品和空白试剂进行平行测试。',
        '记录试剂种类、浓度、液滴大小、干燥时间、温度和显微镜放大倍率。',
        '首先对比整体晶癖：针状、放射状、板状、棱柱状、分枝状或稀疏的散在颗粒。',
        '将部分或稀疏的结晶视为需要进一步测试的依据，而非做出定性鉴定的凭证。',
      ],
    },
    {
      type: 'table',
      headers: ['观察到的晶癖', '用户常见问题', '谨慎的解读分析'],
      rows: [
        ['羽毛状针状', '这看起来像可卡因与氯化铂的反应吗？', '这可以作为一个有用的教学比对，但检材中的掺杂成分和反应环境会改变结晶习惯。'],
        ['放射状结晶', '放射状结晶具有定性诊断价值吗？', '当空白和阳性对照同时符合时，放射状结晶可提供有力的辅助比对依据，但单凭结晶无法确证。'],
        ['分枝状棱柱', '为什么兴奋剂的预试验结晶通常生长得很快？', '某些盐类在溶剂挥发时结晶核形成迅速并随之分枝；生长速度属于支持性发现，而非确证证据。'],
        ['稀疏散在颗粒', '结晶稀疏是否意味着检材中没有毒品成分？', '不是。低浓度、杂质干扰、试剂失效或制样不当都可能抑制晶体的正常生长。'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '微结晶筛查可辅助进行',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '当资深分析人员结合空白和阳性标准品使用时的快速视觉形态比对。',
          points: ['课堂实验演示', '掌握形态学专业术语', '初步快速分流', '不同试剂显色比对'],
        },
        {
          title: '微结晶筛查不能替代',
          icon: 'mdi:alert-circle-outline',
          description: '用于出具法定证据的经论证的确证性分析手段。',
          points: ['仪器分析确证', '实验室认可的分析规程', '针对特定基质的流程验证', '测量不确定度记录'],
        },
      ],
    },
    {
      type: 'title',
      text: '微结晶测试的科学背景',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '微结晶测试是法医化学家用于筛查可疑受控物质的一种经典且灵敏度极高的化学测试方法。当少量毒品样品溶于酸并与特定的重金属试剂（如氯化金或氯化铂）结合时，会发生配位络合或形成不溶性盐类沉淀。毒品分子的空间结构决定了所得晶体的生长速率、排列方向和对称性，从而产生独特的显微镜下形态或晶癖。',
    },
    {
      type: 'paragraph',
      html: '在偏光显微镜下分析这些晶癖，允许法医技术人员观察结晶的光学性质，例如双折射性（即晶体将光线分解为两束，从而产生明亮的干涉色和极高的衬度）。尽管以气相色谱质谱联用为代表的仪器方法已完全取代微结晶测试用于法定定性确证，但微结晶筛查因其检测迅速、成本低廉以及能够有效区分某些其他手段较难鉴别的手性同分异构体，在法医毒物化学中仍保留着其独特的学术与实用价值。',
    },
    {
      type: 'paragraph',
      html: '在教学活动中，模拟这些显微化学反应有助于学生理解化学试剂与物理晶体形态之间的对应关系。通过观察可卡因、海洛因和各种苯丙胺类药物对不同试药的结晶反应，学生能够直观地认识到单次阳性反应绝不能等同于法定鉴定结论。规范的毒品筛查流程要求必须平行测试已知对照标准品以及进行试剂空白对照，以验证所观察到的结晶图谱的有效性与特异性。',
    },
    {
      type: 'glossary',
      items: [
        { term: '晶癖', definition: '晶体显而易见的宏观外形或生长样式，如针状、板状、棱柱状或放射状。' },
        { term: '晶核形成', definition: '溶液中最初形成微小晶核的过程，更大规模的结晶构造由此生长。' },
        { term: '双折射', definition: '晶体在偏振光照射下呈现高亮或彩色干涉条纹的光学效应。' },
        { term: '预试验', definition: '一种提示可能存在某类物质或特定化合物的初筛测试，其本身无法定性。' },
        { term: '参比标准品', definition: '在相同实验条件下进行平行测试的已知纯度物质，用于与未知检材图谱做比对。' },
      ],
    },
    {
      type: 'tip',
      title: '针对真实检材的最佳实验室规范',
      html: '将微结晶形态作为综合鉴定意见的一个分支依据。一个可靠的实验室流程包括测试空白、阳性对照、记录试剂配制时效、必要时的双盲核对，以及在现行法医学规程指导下的仪器确证分析。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: '法医警示',
      title: '美丽结晶并不等同于法律定性',
      html: '本模拟器特意将直观的一致性评分与最终的法庭科学证据结论分隔开。真实的鉴定案件必须充分考虑添加剂、稀释剂、基质污染、试剂纯度、鉴定人员资质以及受控的实验室标准规程。',
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
