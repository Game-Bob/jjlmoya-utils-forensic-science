import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensic-toolmark-striation-matcher';
const title = '法医工具痕迹线条比对器';
const description = '上传已知和待检的工具痕迹图像，在分屏对比显微镜中进行对齐，并通过视觉控制检查条纹线条的连续性。';

const howTo = [
  {
    name: '加载比对图像',
    text: '从您自己的案卷材料、笔记或训练集中上传已知测试痕迹图像和待检痕迹图像。',
  },
  {
    name: '移动对比分屏线',
    text: '在光学观察器上拖动分屏线以露出更多已知或待检的痕迹，同时将两个样本保持在同一个视场中。',
  },
  {
    name: '调整偏移、旋转、缩放和对比度',
    text: '使用微米级控制平移和旋转待检图像，然后调整缩放、对比度和亮度，使微弱的线条保持可见。',
  },
  {
    name: '导出对比图',
    text: '视觉对齐完成后，导出 PNG 对比视图以供讨论、课堂评估或案卷笔记插图使用。',
  },
];

const faq = [
  {
    question: '什么是法医工具痕迹比对？',
    answer: '法医工具痕迹比对是指对工具接触、切割、刮擦、撬动或压缩另一个表面时产生的痕迹进行检验。检验员比对检验件和已知测试痕迹之间的种类特征、痕迹质量以及微观线条细节。',
  },
  {
    question: '这个在线工具能确定留下痕迹的准确工具吗？',
    answer: '不能。本工作空间仅用于视觉对齐和教育。它不计算物证溯源、概率、误差率或自动化的法医鉴定结论。',
  },
  {
    question: '为什么偏移、旋转和缩放在工具痕迹比对中很重要？',
    answer: '工具角度、压力、比例、相机位置和侧向放置的细微差异可能使相似的线条图案显得未对齐。偏移、旋转和缩放控制有助于将两张图像置于可比的观察位置。',
  },
  {
    question: '哪些图像最适合进行工具痕迹的视觉对齐？',
    answer: '使用清晰、光照良好且尽可能垂直拍摄的图像，且痕迹区域有足够的重叠。避免严重模糊、极端反光、透视变形，或线条区域过短或受损而无法比对的图像。',
  },
  {
    question: '用户在对齐两张工具痕迹图像后应该记录什么？',
    answer: '记录每张图像的来源、是待检还是已知、所用的对齐设置、应用的任何图像调整、可见的一致或不一致区域以及图像质量的局限性。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: '已知和待检工具痕迹线条的分屏对比显微镜视图',
    splitLabel: '移动对比分屏线',
    units: '偏移单位系统',
    metric: '公制',
    imperial: '英制',
    toolProfile: '工具轮廓',
    loadImages: '1. 加载',
    alignImage: '2. 对齐待检图像',
    adjustImage: '3. 微调可见度',
    outputControls: '输出控制',
    demoOptions: '演示选项',
    uploadKnown: '已知/测试图像',
    uploadQuestioned: '待检图像',
    noFile: '未加载图像',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: '螺丝刀尖',
    prybar: '撬棍边缘',
    boltCutter: '断线钳口',
    offset: '水平偏移',
    rotation: '角旋转',
    zoom: '图像缩放',
    contrast: '对比度',
    brightness: '亮度',
    microns: '微米',
    thousandths: '千分之一英寸',
    degrees: '度',
    correlation: '模式 / 得分',
    verdictStrong: '强对齐',
    verdictPartial: '部分对齐',
    verdictWeak: '弱对齐',
    center: '居中',
    fineTip: '细微拉曳线',
    wideEdge: '宽压印痕',
    crushJaw: '成对挤压脊',
    grid: '网格',
    exportImage: '导出视图',
    exportFilename: 'toolmark-comparison-view.png',
    phaseFit: '相位拟合',
    rotationFit: '旋转拟合',
    knownMark: '已知测试痕',
    questionedMark: '待检痕迹',
    reliefGraph: '数字化微观表面起伏',
    visualMode: '视觉',
    visualVerdict: '人工比对',
    visualInterpretation: '仅限视觉对齐。不计算自动化的法医鉴定结论。',
    interpMatch: '演示预览。上传图像以对比真实痕迹。',
    interpPossible: '演示预览。调整对齐或上传图像。',
    interpMismatch: '演示预览。重新居中或上传图像。',
    disclaimer: '仅限视觉工作空间。',
  },
  seo: [
    {
      type: 'title',
      text: '在线法医工具痕迹对比显微镜',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: '视觉工作区',
      title: '在浏览器中对比待检和已知的工具痕迹图像',
      html: '此工具痕迹对比工作空间允许您上传两张图像，将它们置于分屏比对显微镜布局中，并调整待检痕迹，直到可以并排检查条纹线、擦痕、压痕或微观线条。它专为法医学学生、讲师、调查员和法律团队设计，帮助他们在无需安装专业显微镜软件的情况下，清晰地解释<strong>已知与待检工具痕迹的比对</strong>。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2次上传', label: '已知和待检图像', icon: 'mdi:image-plus' },
        { value: '分屏视图', label: '比对显微镜布局', icon: 'mdi:compare-horizontal' },
        { value: '对齐', label: '偏移、旋转和缩放控制', icon: 'mdi:axis-arrow' },
        { value: '导出 PNG', label: '保存对比视图', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: '此工具痕迹比对工作空间在何时有用',
      items: [
        '教学如何通过比对显微镜将已知测试痕迹置于待检痕迹旁。',
        '使用真实的或训练用的工具痕迹图像准备课堂演示。',
        '解释为什么对齐、比例、旋转、光照和对比度会影响对线条的解读。',
        '创建一个清晰的视觉插图或案卷笔记图像来显示对齐的视图，而不是声称自动识别。',
        '在决定痕迹是否适合进行正式的实验室比对之前筛查图像质量。',
      ],
    },
    {
      type: 'title',
      text: '如何在线比对工具痕迹图像',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '首先加载一张<strong>已知测试痕迹</strong>图像和一张<strong>待检痕迹</strong>图像。已知痕迹通常是在受控条件下用特定工具产生的。待检痕迹是从现场、物体、门框、锁、切割表面或其他来源未知的物品上提取的痕迹。本工作空间的目的不是自动判定身份，而是将两张图像置于有用的视觉关系中，以便用户检查连续性和差异性。',
    },
    {
      type: 'paragraph',
      html: '两张图像加载完毕后，使用分屏滑块露出两侧的更多或更少区域。调整水平偏移使线条相位相符，然后旋转待检图像以补偿相机角度或工具角度。缩放有助于比对在不同放大倍率下捕获的两张图像。对比度和亮度有助于显现微弱的划痕或浅显的痕迹，但应记录这些调整，因为它们改变了图像的显示外观。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '工作区可以帮助您观察的内容',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '良好的分屏设置使您在仔细对齐后更易于检查两个痕迹是否共享可比的视觉结构。',
          points: ['相似的脊线或线条方向', '连续穿过数个相邻特征', '需要校正的比例和旋转差异', '痕迹质量足够强以供检查的区域', '可能提早结束比对的明显种类特征不符'],
        },
        {
          title: '它不能证明什么',
          icon: 'mdi:alert-circle-outline',
          description: '此浏览器工具不是经过验证的法医鉴定系统，不应用作此类系统。',
          points: ['无自动同源结论', '无随机匹配概率', '无群频估算', '不能替代对原始物证的检验', '不能替代实验室质量保证或同行评审'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['控制项', '改变的内容', '为什么重要'],
      rows: [
        ['已知/测试图像上传', '加载对照或参考痕迹。', '已知侧应来自记录在案的测试痕迹或训练示例。'],
        ['待检图像上传', '加载来源未知的痕迹。', '移动并调整这一侧以寻找可比的方向。'],
        ['分屏手柄', '改变每张图像的可见量。', '可移动的分屏线有助于检查线条是否在边界上视觉上连续。'],
        ['水平偏移', '向左或向右移动待检图像。', '细微的侧向移动可使相应的脊线进入或退出相位。'],
        ['旋转', '旋转待检图像。', '工具角度、相机角度和固定装置可能会在图像之间产生角度偏差。'],
        ['缩放', '改变显示的放大倍率。', '在判断细节之前，必须使不同的图像比例具有可比性。'],
        ['对比度和亮度', '调整显示的可见度。', '低对比度的线条可能变得更容易看到，但应记录调整。'],
        ['导出视图', '保存当前对齐的 PNG。', '适用于课堂评估、笔记、讨论或明确指出局限性的报告。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: '图像质量',
      title: '糟糕的图像可能使良好的比对变得不可能',
      html: '工具痕迹比对非常依赖图像质量。模糊、反光、压缩伪影、强阴影、透视变形以及极短的线条区域都可能产生误导性的视觉印象。如果痕迹不能清晰地定向、缩放和照亮，那么适当的结论可能是该图像不适合进行有意义的比对。',
    },
    {
      type: 'summary',
      title: '比对两个痕迹前的实用清单',
      items: [
        '确认哪张图像是待检痕迹，哪张图像是已知测试痕迹。',
        '检查两张图像是否显示相同的通用痕迹类型、工具接触区域和工作面方向。',
        '避免比对孤立的单根线条；寻找在有用长度上持续存在的相邻细节。',
        '保守使用对比度和亮度，并记录何时应用了图像增强。',
        '仅将对齐的视图导出为所显示内容的图示，而非身份的证明。',
      ],
    },
    {
      type: 'title',
      text: '已知与待检工具痕迹物证',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '待检工具痕迹通常是从涉及事件的物品上提取的，例如门上的撬痕、电线上的切口、金属上的刮痕或较软表面上的挤压痕。已知痕迹是在受控或有记录的条件下用怀疑的工具产生的。在正式的法医工作中，检验员在花时间研究细微的线条细节之前，会先考虑种类特征是否一致。如果种类特征不符，小区域内的微观相似性不足以支持关联。',
    },
    {
      type: 'paragraph',
      html: '浏览器工作空间故意保持保守。它帮助您对齐图像并讨论视觉特征，但它不模拟工具磨损、子类特征、基底变形、制造标记、检验员阈值、测量不确定度或误差率。负责任的工作流程将导出的图像视为沟通辅助工具，而非鉴定结果。',
    },
    {
      type: 'proscons',
      title: '在线工具痕迹图像比对的优势与局限性',
      items: [
        { pro: '无需安装桌面软件即可加载两张图像并检查对齐的快速方法。', con: '浏览器视图不是经过校准的法医比对显微镜。' },
        { pro: '有助于教学分屏对比和方向如何影响用户看到的内容。', con: '图像增强可以提高可见度，但也可以改变特征的呈现方式。' },
        { pro: '导出的 PNG 视图有助于笔记、讨论和视觉说明。', con: '导出的视图无法保存完整的物证背景、元数据或保管链。' },
        { pro: '适用于用户上传的真实图像，而不仅仅是合成痕迹。', con: '该工具无法确定这两个痕迹是否来自同一工具。' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '待检痕迹', definition: '从物品或现场提取的、来源未知的痕迹。' },
        { term: '已知测试痕迹', definition: '用特定工具制成的受控痕迹，用于与待检痕迹进行比对。' },
        { term: '线条 (Striation)', definition: '工具表面在另一种材料上滑动时产生的微观线或脊。' },
        { term: '种类特征', definition: '一类工具所共享的特征，如刀刃宽度、大体形状或工具类型。' },
        { term: '个体特征', definition: '制造、使用、损坏或磨损可能产生的微细表面特征。' },
        { term: '子类特征', definition: '由于制造工艺而由工具子集共享的特征；它们会使来源解释复杂化。' },
        { term: '适用性', definition: '关于痕迹是否包含足够质量和数量的细节以支持比对的判定。' },
      ],
    },
    {
      type: 'tip',
      title: '此页面旨在解答的搜索词',
      html: '寻找此类工作空间的用户经常搜索诸如 <strong>工具痕迹对比显微镜在线</strong>、<strong>法医条纹比对</strong>、<strong>已知与待检工具痕迹</strong>、<strong>从图像比对工具痕迹</strong> 以及 <strong>法医对比显微镜模拟器</strong> 等短语。页面围绕这些实际任务构建：上传、对齐、检查、记录和理解局限性。',
    },
    {
      type: 'table',
      headers: ['常见用户问题', '简短回答'],
      rows: [
        ['我可以上传自己的工具痕迹图像吗？', '可以。该工具围绕用户上传的已知和待检图像设计。'],
        ['应用程序会判定这两个痕迹是否匹配吗？', '不会。它仅支持视觉对齐，不做出法医同源结论。'],
        ['为什么移动的是待检图像而不是两者都移动？', '保持已知侧稳定可以更容易地记录待检图像是如何调整的。'],
        ['我可以将其用于枪支或弹壳痕迹吗？', '它可以帮助演示图像对齐概念，但枪支和弹壳比对需要特定学科的步骤和经过验证的审查。'],
        ['我可以在笔记中包含导出的 PNG 吗？', '可以，前提是它被明确描述为使用视觉调整控制产生的说明性视图。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: '法医警示',
      title: '描述工具痕迹比对时使用谨慎的语言',
      html: '避免将视觉对齐转化为比证据支持更强烈的结论。合适的语言取决于司法管辖区、实验室政策、验证、图像质量、检验员审查和案件背景。此在线工具应被描述为视觉比对辅助工具，而非鉴定工具的经过验证的方法。',
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
