import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'stellar-habitability-zone';
const description = '使用恒星和行星配置计算并可视化不同类型恒星周围的宜居带（黄金带）。';
const title = '恒星宜居带模拟器：寻找黄金带';

const howTo = [
  {
    name: '选择恒星预设',
    text: '从蓝巨星到红矮星，选择恒星类型以加载标准物理属性，如质量、光度和温度。',
  },
  {
    name: '调整行星参数',
    text: '使用交互式滑块修改行星的轨道距离（半长轴）、反照率和大气温室效应升温。',
  },
  {
    name: '分析轨道与宜居性',
    text: '实时观察行星绕恒星运行。检查平衡温度与表面温度是否支持液态水。',
  },
];

const faq = [
  {
    question: '什么是恒星宜居带？',
    answer: '恒星宜居带（通常称为黄金带）是指恒星周围的一个区域，在该区域内，行星表面温度足以在给定大气压下维持液态水。它基于恒星光度和有效温度，由保守边界和乐观边界共同定义。',
  },
  {
    question: '恒星光度如何影响宜居带？',
    answer: '恒星光度决定了恒星的总能量输出。更热、更大质量的恒星（如O型、B型或A型星）极其明亮，使其宜居带位于更远的地方。更冷、质量更小的恒星（如K型或M型红矮星）光度较低，使其宜居带非常靠近恒星。',
  },
  {
    question: '平衡温度和表面温度有什么区别？',
    answer: '平衡温度是假设行星表现为吸收恒星辐射并将其重新辐射回太空的黑体时的理论温度。表面温度则包括了行星大气的温室效应，这种效应会捕获热量并进一步加热行星。',
  },
  {
    question: '为什么反照率对行星宜居性很重要？',
    answer: '反照率是行星表面反射率的度量。较高的反照率（接近1.0）意味着行星反射更多入射的恒星光线，从而冷却。较低的反照率意味着吸收更多辐射，从而提高整体温度。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '恒星宜居带模拟器',
    starPresetsLabel: '光谱预设',
    customStarHeader: '恒星参数',
    starTemperature: '有效温度 (K)',
    starLuminosity: '光度 (L/L⊙)',
    starMass: '质量 (M/M⊙)',
    starRadius: '半径 (R/R⊙)',
    planetHeader: '行星参数',
    planetDistance: '轨道距离 (AU)',
    planetAlbedo: '邦德反照率',
    greenhouseDelta: '温室效应升温 (K)',
    resultsHeader: '模拟结果',
    stellarFluxResult: '接收到的恒星通量',
    eqTempResult: '平衡温度',
    surfTempResult: '估计表面温度',
    orbitPeriodResult: '轨道周期',
    orbitVelocityResult: '轨道速度',
    hzLimitsHeader: '宜居带边界',
    innerLimit: '保守内边界',
    outerLimit: '保守外边界',
    optInnerLimit: '乐观内边界',
    optOuterLimit: '乐观外边界',
    orbitCanvasTitle: '交互式轨道可视化器',
    statusLabel: '宜居状态',
    statusTooHot: '太热（水蒸发）',
    statusHabitable: '宜居（可能存在液态水）',
    statusTooCold: '太冷（水结冰）',
    statusExplanation: '基于保守边界，该行星位于指定的宜居带状态内。',
    unitsLabel: '单位制',
    unitsScientific: '科学单位',
    unitsImperial: '英制单位',
  },
  seo: [
    {
      type: 'title',
      text: '天体生物学：恒星宜居带的物理学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '寻找地球以外的生命始于理解液态水所需的物理条件。天体生物学家使用数学模型来绘制不同类型恒星周围宜居带的边界。该模拟器使用Kopparapu等人（2013）的模型来估计行星接收到的能量通量，并判断它们是否位于黄金带内。宜居带定义为具有CO2-H2O-N2大气的类地行星能够在其表面维持液态水的区域。',
    },
    {
      type: 'title',
      text: '数学公式与大气物理学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '宜居带的边界通过计算引发失控温室或最大温室条件所需的有效恒星通量（Seff）来确定。Seff的方程取决于恒星的有效温度（Teff）：<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>其中T* = Teff - 5780 K，系数（a, b, c, d）由一维辐射对流气候模型经验推导得出。计算出Seff后，以天文单位（AU）为单位的轨道距离d由下式给出：<br><br>d = sqrt(L / Seff)<br><br>其中L是恒星相对于太阳的光度。行星的平衡温度（Teq）假设为处于热平衡的球形黑体进行计算：<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>其中R*是恒星半径，A是行星邦德反照率，S是以地球太阳常数单位接收到的恒星通量。',
    },
    {
      type: 'title',
      text: '光谱分类与宜居边界',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '恒星特征在不同光谱类型之间差异很大。以下是典型特性和HZ边界的总结：',
    },
    {
      type: 'table',
      headers: [
        '光谱类型',
        '温度 (K)',
        '光度 (L/L⊙)',
        'HZ内边界 (AU)',
        'HZ外边界 (AU)',
      ],
      rows: [
        ['O型巨星', '40,000', '100,000', '300.0', '530.0'],
        ['B型巨星', '20,000', '1,000', '30.1', '53.2'],
        ['A型（天狼星）', '8,500', '20.0', '4.2', '7.4'],
        ['F型（南河三）', '6,500', '2.5', '1.5', '2.6'],
        ['G型（太阳）', '5,778', '1.0', '0.95', '1.67'],
        ['K型矮星', '4,500', '0.15', '0.37', '0.65'],
        ['M型矮星', '3,200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: '光谱类型对宜居性的影响',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '每个光谱类型都为其行星创造了独特的辐射和引力环境：<br><br><strong>O型和B型星：</strong>这些大质量的蓝色恒星发出强烈的紫外线辐射，寿命极短（数千万年）。液态水可能存在于它们的外部世界，但在恒星发生超新星爆发之前，生命没有足够的时间进化。<br><br><strong>A型和F型星：</strong>这些恒星比太阳更亮、更热。它们的宜居带宽阔且遥远，最大限度地减少了潮汐锁定的影响。然而，如果没有保护性臭氧层，高强度的近紫外辐射会对有机分子造成严重损害。<br><br><strong>G型星（类太阳）：</strong>提供数十亿年的稳定光通量，这些恒星是生命搜索的主要目标。它们的辐射输出符合标准生物化学的要求。<br><br><strong>K型星（橙矮星）：</strong>被许多天体生物学家认为是"超级宜居"的宿主，橙矮星的寿命长达数百亿年，发出的有害紫外线比G型星少，也不像年轻的M型矮星那样容易产生强烈的耀斑。<br><br><strong>M型星（红矮星）：</strong>银河系中最常见的恒星。由于它们的宜居带非常接近（通常 < 0.2 AU），行星容易发生潮汐锁定，即一面永久朝向恒星。此外，活跃的M型矮星会产生高能恒星风和耀斑，可能剥离行星大气。',
    },
    {
      type: 'title',
      text: '行星宜居环境的关键因素',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '行星的物理环境由多个变量塑造，而不仅仅是与主恒星的距离：',
    },
    {
      type: 'list',
      items: [
        '<strong>大气温室效应：</strong>自然温室气体将表面温度提升至黑体平衡水平以上。类地行星需要碳硅酸盐循环来稳定大气中的CO2，并在地质时间尺度上调节温度。',
        '<strong>行星邦德反照率：</strong>高反射率（由于云层、冰盖或硫酸盐气溶胶）会冷却行星，而低反射率（深色土壤、水体）则会捕获更多恒星能量。',
        '<strong>磁场：</strong>强大的行星磁层保护大气免受恒星风的影响，防止非热大气逃逸和水分流失。',
        '<strong>水陷阱动力学：</strong>上层大气中的冷阱效应阻止水蒸气到达高海拔地区，避免太阳紫外辐射将其解离为氢和氧。',
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
