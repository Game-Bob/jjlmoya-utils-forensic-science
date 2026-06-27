import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensic-glass-becke-line-simulator';
const title = '法医学玻璃折射率贝克线模拟器';
const description = '通过加热浸渍液、匹配折射率并观察明亮的晕圈消失，来模拟用于法医学玻璃对比的贝克线方法。';

const howTo = [
  {
    name: '选择待检玻璃特征档案',
    text: '选择常见的玻璃参考特征，如钠钙玻璃、硼硅酸盐实验室玻璃、铅晶质玻璃或钢化窗玻璃。',
  },
  {
    name: '调节热台温度',
    text: '移动温度滑块以改变虚拟浸渍液的折射率。',
  },
  {
    name: '观察贝克线的移动',
    text: '使用焦距方向控制，观察明亮线条在匹配点时是向内移动、向外移动还是几乎消失。',
  },
  {
    name: '读取折射率差值',
    text: '对比液体折射率、玻璃折射率、折射率差值（delta RI）和匹配百分比，以理解为什么在折射率趋于一致时晕圈会变暗。',
  },
];

const faq = [
  {
    question: '什么是法医学玻璃分析中的贝克线？',
    answer: '贝克线是当玻璃碎片与浸渍液的折射率不同时，在它们边界附近看到的明亮晕圈。在调焦过程中它的移动方向有助于判断哪种材料具有更高的折射率。',
  },
  {
    question: '为什么要加热浸渍液？',
    answer: '许多浸渍液的折射率会随着温度的升高而降低。通过加热液体使其折射率与玻璃匹配，边界的对比度就会减弱，碎片边缘也将变得难以看清。',
  },
  {
    question: '仅凭折射率能确定玻璃的来源吗？',
    answer: '不能。折射率可以支持种类对比和排除，但法医学的来源解释还需要考虑元素组成、厚度、颜色、断裂背景、对照样、测量不确定度以及经过验证的实验室程序。',
  },
  {
    question: '贝克线消失意味着什么？',
    answer: '这意味着在模拟的条件下，液体和玻璃的折射率非常接近。在实际的显微镜检测中，这种消失需要通过校准的温度控制和参考标准物质来进行判断。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: '显示浸渍液中玻璃碎片的虚拟显微镜图像',
    units: '温度单位系统',
    metric: '公制',
    imperial: '英制',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: '参考玻璃',
    sodaLime: '钠钙容器玻璃',
    borosilicate: '硼硅酸盐实验室玻璃',
    leadCrystal: '装饰用铅晶质玻璃',
    tempered: '钢化窗玻璃',
    stageTemperature: '热台温度',
    focusDirection: '调焦方向',
    focusRaised: '调高焦距',
    focusLowered: '调低焦距',
    liquidRi: '液体折射率',
    glassRi: '玻璃折射率',
    deltaRi: '折射率差值',
    matchMeter: '折射率匹配度',
    canvasHalo: '可见贝克晕圈',
    canvasFocusSeparator: ' - ',
    canvasMatched: '边缘几乎匹配',
    interpMatched: '边界已接近光学匹配。在实际的贝克线测试中，该区域正是晕圈变暗且碎片边缘最难定位的地方。',
    interpGlassHigher: '玻璃具有更高的折射率。调高焦距时，贝克线的表现表明光线向边界的玻璃一侧聚集。',
    interpLiquidHigher: '浸渍液具有更高的折射率。晕圈将向液体一侧偏移，直到温度变化使液体折射率更接近玻璃。',
    disclaimer: '仅供教育模拟使用。实际的法医学玻璃对比需要校准的折射率测量设备、已知标准物质、不确定度报告以及有资质的人员来解释。',
  },
  seo: [
    {
      type: 'title',
      text: '法医学玻璃贝克线折射率测试',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: '教学模拟器',
      title: '本玻璃折射率模拟器演示的内容',
      html: '本模拟器展示了随着液体折射率趋近于玻璃折射率，浸渍油中的玻璃碎片如何变得更明显或更不明显。专为学习<strong>贝克线显微镜技术</strong>、热台折射率匹配以及玻璃对比证据局限性的法医学学生设计。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n 玻璃 - n 液体', label: '显示的折射率对比', icon: 'mdi:delta' },
        { value: '15-145 C', label: '热台温度范围', icon: 'mdi:thermometer' },
        { value: '4', label: '玻璃特征档案', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: '可转换的温度单位', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: '实用的贝克线观察清单',
      items: [
        '使用干净且完全浸入合适折射率液体中的微小玻璃碎片。',
        '在边界稍上方和稍下方进行调焦，观察明亮线条看起来向哪一侧移动。',
        '在接近估计的匹配点时缓慢升高温度，因为线条可能在极小的范围内消退。',
        '记录温度、液体类型、校准标准、观察到的匹配表现以及不确定度。',
        '将折射率视为种类证据：不匹配可以予以排除，而匹配则需要更多的背景信息支持。',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '折射率对比可以支持的方面',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '在受控条件下，折射率有助于对比待检玻璃碎片与已知参考玻璃。',
          points: ['种类特征对比', '当折射率有明显差异时予以排除', '元素分析前的筛选', '教学边界光学行为'],
        },
        {
          title: '仅凭折射率无法证明的方面',
          icon: 'mdi:alert-circle-outline',
          description: '匹配的折射率并不能唯一定位某块窗玻璃、瓶子、汽车车窗或案发现场来源。',
          points: ['不能单独用于个体来源认定', '在没有现场背景的情况下无法重建案情', '无法替代对照样', '无法从浏览器模型中得出法律结论'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['用户疑问', '显微镜概念', '谨慎解答'],
      rows: [
        ['为什么明亮边缘会移动？', '两种折射率边界的折射。', '当提高焦距时，贝克线倾向于向折射率较高的材料移动。'],
        ['为什么边缘会消失？', '折射率匹配。', '当玻璃与液体的折射率几乎相等时，边界对比度降低，晕圈变弱。'],
        ['为什么要加热液体？', '热折射率系数。', '模拟的液体折射率随温度升高而降低，从而可以与不同类型的玻璃进行匹配。'],
        ['匹配结论是绝对的吗？', '种类证据的局限性。', '匹配仅支持一致性；许多玻璃物体可能共享相似的折射率。'],
      ],
    },
    {
      type: 'title',
      text: '模拟模型工作原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '该模型为每个玻璃特征分配一个参考折射率，并将浸渍液视为温度敏感介质。随着热台升温，液体折射率以固定的热系数降低。然后，模拟器计算玻璃折射率与液体折射率之间的差值，并利用该差值来控制晕圈亮度、晕圈偏移、匹配百分比和解释消息。',
    },
    {
      type: 'paragraph',
      html: '显微镜的可视区域故意设计为定性的。它不尝试对每条光路进行光线追踪。相反，它保留了核心的教学关系：高折射率对比产生明亮的边界；低对比度产生微弱边界；在接近匹配点时，玻璃边缘看起来可能会在液体中消失。',
    },
    {
      type: 'paragraph',
      html: '在专业的法医学实验室中，热台的温度校准是使用已知折射率的参考玻璃样本进行的。由于浸渍液的折射率会随温度发生可预测的变化（通常表示为 dn/dT），科学家可以通过测量贝克线消失的精确温度，将玻璃折射率精确计算至小数点后四位。本模拟器利用线性公式对这种温度依赖行为进行建模，使学生能够通过仔细控制热台温度来练习寻找精确的匹配点。',
    },
    {
      type: 'paragraph',
      html: '在分析玻璃证据时，折射率被视为种类特征证据（类属证据）。虽然案发现场碎片与嫌疑人衣物上的玻璃折射率相匹配与共同来源一致，但它并不能唯一确定来源，因为许多玻璃物体的折射率值完全相同。因此，法医学专家必须保守地解释匹配结果，在报告匹配时表述为一致性，同时强调仅凭光学性质无法进行确定性的来源认定。',
    },
    {
      type: 'glossary',
      items: [
        { term: '折射率', definition: '衡量材料与真空相比折射光线强弱的度量。' },
        { term: '浸渍液', definition: '在显微折射率对比中，用于环绕碎片且具有已知光学性质的液体。' },
        { term: '贝克线', definition: '当两种透明材料的折射率不同时，在边界处看到的明亮线条或晕圈。' },
        { term: '匹配点', definition: '浸渍液与玻璃具有几乎相同折射率的温度区域。' },
        { term: '种类证据', definition: '可以将物品与一组可能的来源（而非单一的独特来源）联系起来的证据。' },
      ],
    },
    {
      type: 'tip',
      title: '学生理解提示',
      html: '在玻璃证据中，明确的折射率不匹配通常比匹配更有说服力，因为它能排除所设想的来源。匹配虽然有用，但其说服力取决于人口统计数据、测量精度、元素组成和案情背景。',
    },
    {
      type: 'proscons',
      title: '贝克线玻璃折射率测试的优缺点',
      items: [
        { pro: '快速、直观，非常适合教学透明材料的对比。', con: '观察者的判断和调焦技术会影响线条的视在移动。' },
        { pro: '校准后，温度匹配可以估算出具有实用精度的折射率。', con: '在实际工作中，热控制、液体老化、污染和标准非常关键。' },
        { pro: '对于排除具有明显不同光学性质的玻璃碎片非常有用。', con: '如果没有更广泛的分析和背景证据，无法个体认定唯一来源。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: '司法警示',
      title: '保持结论的适度性',
      html: '浏览器贝克线模拟是一种教学辅助工具，而不是实验室方法。正式的玻璃证据解释应依赖于经过验证的仪器、书面程序、校准记录、不确定度评估、同行评审以及符合管辖权要求的报告语言。',
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
