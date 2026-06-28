import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensic-fiber-comparison-microscope';
const title = '法医纤维比对显微镜模拟器';
const description = '构建检材（未知来源）纺织纤维特征，与已知参考样本比对，并解读形态学、偏光及紫外-可见（UV-Vis）染料光谱证据。';

const howTo = [
  {
    name: '构建检材纤维特征',
    text: '设定回收纤维的材质、直径、捻向、偏光响应及染料特征。',
  },
  {
    name: '选择已知比对纤维',
    text: '在右侧选择来自嫌疑人衣物的已知纤维，如棉、羊毛、涤纶（聚酯纤维）或尼龙。',
  },
  {
    name: '调节焦距与偏光',
    text: '移动微调焦距滑块并旋转起偏镜，观察图像清晰度、表面纹理及双折射响应。',
  },
  {
    name: '比对形态及紫外-可见光谱',
    text: '结合形态评分、光谱评分、综合比对结果及吸光度曲线，判定样本是符合还是存在明显差异。',
  },
];

const faq = [
  {
    question: '纤维显微镜检查能确定纤维来自哪一件具体衣服吗？',
    answer: '通常不能。纤维比对可以显示检材纤维与已知纺织品之间的一致性或差异，但若要进行单一源归属判定，则需要仔细的背景关联、经过验证的方法，且通常需要额外的化学或仪器分析。',
  },
  {
    question: '为什么在纤维比对中使用偏振光？',
    answer: '偏振光有助于显示双折射、消光行为以及天然纤维与合成纤维之间的结构差异。由于分子定向的缘故，合成纤维通常表现出更强的偏光响应。',
  },
  {
    question: '紫外-可见（UV-Vis）光谱分析有何作用？',
    answer: '显微镜检查描述的是形态和光学行为，而紫外-可见吸光度可以比对不同波长下的染料行为。外观相似但染料不同的纤维在光谱图上会清晰地分离开来。',
  },
  {
    question: '为什么结果显示为评分而不是最终的身份鉴定结论？',
    answer: '法医微量物证的报告应当留有合理的余地。这些评分是关于形态和染料相似性的教学用总结，并非实验室鉴定结论或法律意见。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: '比对两根纺织纤维的虚拟分视场法医显微镜',
    chartAria: '比对检材与已知纤维染料光谱的紫外-可见吸光度图表',
    questionedSample: '检材样本',
    fixedEvidence: '固定的回收物证',
    builderSummaryDefault: '棉 / 18 µm / 不规则 / 靛蓝',
    customQuestionedLabel: '案中的检材纤维',
    material: '材质',
    cotton: '棉',
    woolMaterial: '羊毛',
    polyesterMaterial: '涤纶',
    nylonMaterial: '尼龙',
    materialcotton: '棉',
    materialwool: '羊毛',
    materialpolyester: '涤纶',
    materialnylon: '尼龙',
    twist: '捻向',
    irregularTwist: '不规则',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: '直径',
    polarResponse: '偏光响应',
    dyeProfile: '染料特征',
    indigoDye: '靛蓝',
    crimsonDye: '绯红',
    navyDye: '藏青',
    violetDye: '紫罗兰',
    dyeindigo: '靛蓝',
    dyecrimson: '绯红',
    dyenavy: '藏青',
    dyeviolet: '紫罗兰',
    knownSample: '已知比对样本',
    questionedCotton: '检材蓝色棉纤维',
    suspectCotton: '嫌疑人衬衫棉纤维',
    wool: '红色羊毛衫纤维',
    polyester: '藏青色涤纶夹克纤维',
    nylon: '紫罗兰色尼龙里料纤维',
    focus: '微调焦距',
    polarizer: '起偏镜角度',
    morphology: '形态学',
    spectrum: '紫外-可见',
    birefringence: '双折射',
    combinedMatch: '综合比对',
    uvVisTitle: '紫外-可见吸光度叠加图',
    statusStrong: '高度符合',
    statusPartial: '比对不一致',
    statusDifferent: '支持排除',
    verdictStrong: '检材与已知纤维在直径、捻向、光学行为和染料光谱上高度符合。在实际案件中，应将其报告为支持存在共同纺织品来源的可能，而不是单一的身份确认。',
    verdictPartial: '比对结果不一致。尽管部分种类特征符合，但形态、染料响应或双折射存在足够差异，在建立关联前需要进行更深入的检验。',
    verdictDifferent: '纤维在关键种类特征上不符合。模拟结果支持排除该已知纺织品作为检材纤维来源的可能。',
    disclaimer: '仅供教学模拟。真实的法医纤维比对需要经验证的显微镜检验、对照样本、案卷记录、防污染措施、同行评议以及具备资质的微量物证解读。',
  },
  seo: [
    {
      type: 'title',
      text: '通过分视场显微镜及紫外-可见光谱进行法医纤维比对',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: '教学模拟器',
      title: '本虚拟纤维显微镜展示的内容',
      html: '本模拟器还原了<strong>法医纤维比对</strong>的实际工作流程：描述检材纺织纤维特征、与已知参考样本比对、调节焦距、旋转偏振滤光片，并通过简化的紫外-可见吸光度曲线比较染料响应。它专门为学习微量物证的学生设计，不适用于实际案检决策。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2个视场', label: '分视场显微镜视图', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: '可见光谱范围', icon: 'mdi:chart-bell-curve' },
        { value: '4个大类', label: '棉、羊毛、涤纶、尼龙', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: '起偏镜旋转', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: '纺织纤维比对的关键观察点',
      items: [
        '测量或估算纤维直径，同时记录沿纤维单丝的自然变异。',
        '记录捻向、表面纹理、类似髓质的特征、消光剂颗粒以及可用的截面线索。',
        '使用偏振光比较旋转时的双折射、消光行为以及亮度变化。',
        '在显微镜下比对颜色，若案件需要更高的分辨度，则使用仪器分析染料信息。',
        '报告发现是符合、排除还是无法得出结论；避免在缺乏支持的情况下使用暗示存在唯一衣服来源的表述。',
      ],
    },
    {
      type: 'table',
      headers: ['观察点', '有助于回答什么问题', '局限性'],
      rows: [
        ['直径与形态', '纤维在物理上是否相似？', '制造偏差可能会导致不同衣物之间的特征发生重叠。'],
        ['捻向与表面细节', '天然或合成特征是否符合？', '损伤、拉伸及制片过程可能会改变外观。'],
        ['偏振光响应', '光学性质是否符合？', '双折射是种类证据，而不是唯一的特征标识。'],
        ['紫外-可见染料光谱', '染料是否符合？', '相似的染料光谱可能接近；提取方法和仪器设置至关重要。'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '何种情况支持符合',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '检材与已知纤维之间符合多个独立的种类特征。',
          points: ['直径范围相当', '相同的纤维大类', '相似的偏光行为', '染料吸光度峰值重合'],
        },
        {
          title: '何种情况支持排除',
          icon: 'mdi:close-circle-outline',
          description: '在若来源于共同纺织品则本应符合的特征上，出现了明确且可重复的差异。',
          points: ['天然与合成材质不匹配', '捻向或表面形态不同', '染料光谱明显不同', '双折射响应不兼容'],
        },
      ],
    },
    {
      type: 'title',
      text: '模拟模型的工作原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '该模型存储了一个小型参考数据库，包含直径、捻向、纤维类别、双折射、染料家族及紫外-可见吸光度数据点。检材纤维可由用户自行配置，因此比对评分响应的是案件设定，而非固定的教材样本。显微图像视图会响应焦距和起偏镜角度，以便学生直观理解光学设置的重要性。',
    },
    {
      type: 'paragraph',
      html: '起偏镜控制对于合成纤维尤其有用。涤纶和尼龙被分配了较强的双折射数值，因此随着起偏镜旋转，它们的亮度变化更为明显。天然棉和羊毛也会有响应，但模拟效果较为微妙。这体现了分子定向和纤维结构影响光学行为的教学理念。',
    },
    {
      type: 'paragraph',
      html: '紫外-可见图表是简化的叠加图，并非分光光度计的替代品。在真实的微量物证检验中，染料比对可能需要显微分光光度法、薄层色谱法、提取化学、参考对照样本和记录的不确定度。该图表旨在讲授为何在显微镜下看起来相似的两根纤维仍可通过染料化学性质进行区分。',
    },
    {
      type: 'paragraph',
      html: '法医鉴定人员必须记录纤维分析过程的每一步。这包括拍摄详细照片、记录测量数据以及维护所有物理证据的监管链。模拟器有助于学生理解法医实际检案中系统记录和客观比对的重要性。通过调节不同的设置，用户可以了解光路、样本厚度以及染料浓度如何影响光谱曲线和物理外观。',
    },
    {
      type: 'paragraph',
      html: '法医鉴定人员必须记录纤维分析过程的每一步。这包括拍摄详细照片、记录测量数据以及维护所有物理证据的监管链。模拟器有助于学生理解法医实际检案中系统记录和客观比对的重要性。通过调节不同的设置，用户可以了解光路、样本厚度以及染料浓度如何影响光谱曲线和物理外观。',
    },
    {
      type: 'glossary',
      items: [
        { term: '检材纤维', definition: '从现场、被害人、嫌疑人、工具、车辆或其他物品上提取的、来源不明的纤维。' },
        { term: '已知纤维', definition: '从已知纺织品或物体上收集的参考纤维，用于与检材样本进行比对。' },
        { term: '双折射', definition: '由于材料方向或偏振状态的不同，导致其对光的折射率发生改变的光学行为。' },
        { term: '紫外-可见光谱', definition: '显示染料或材料对不同波长光线吸收强度的图线。' },
        { term: '种类特征', definition: '能将证据与一组可能来源建立关联（而非确定唯一源）的属性。' },
      ],
    },
    {
      type: 'tip',
      title: '给学生的解读提示',
      html: '高相似度评分应解读为<strong>符合</strong>，而非同一。当显微镜检查、化学分析、转移背景、遗留时限、提取方法及防污染控制均指向同一方向时，微量物证的证明力最强。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: '使结论保持在证据限度内',
      html: '浏览器显微镜无法替代真实的纤维比对鉴定。正式报告应描述观察结果、比对依据、局限性及支持程度，而不应夸大源归属结论。',
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
