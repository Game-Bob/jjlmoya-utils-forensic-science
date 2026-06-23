import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dental-skeletal-third-molar-age-estimator';
const title = '牙齿、骨骼与第三磨牙年龄估算器';
const description = '基于牙齿发育、骨骼成熟度和第三磨牙指标进行法医年龄区间估算，辅助案件筛查与分诊。';

const howTo = [
  {
    name: '选择证据侧重点',
    text: '选择"混合证据"以进行综合分诊；若牙齿证据更为详实，请选择"牙齿优先"；若骨骼X射线指标更为可靠，请选择"骨骼优先"。',
  },
  {
    name: '评估各成熟度指标',
    text: '将每个指标设定在0到8的阶段。较低阶段代表发育早期，中间阶段代表青少年期成熟，较高阶段则代表成熟或接近成熟。',
  },
  {
    name: '参考区间而非单一年龄',
    text: '应综合考量最小值、可能值和最大值。由于生物发育存在个体差异，法医年龄评估应始终以区间形式呈现。',
  },
  {
    name: '核实各指标间的一致性',
    text: '若牙齿、骨骼和第三磨牙阶段指向不同的年龄范围，请将结果视为"探索性"，并在做出最终判断前收集更多证据。',
  },
];

const faq = [
  {
    question: '该法医年龄估算器能否判定法定成年年龄？',
    answer: '不能。本工具仅用于教学和分诊筛查。法定年龄判定必须遵循当地经认可的规程，并由具备资质的专家结合身份档案及司法管辖区特定标准进行评估。',
  },
  {
    question: '为什么结果显示的是一个年龄区间？',
    answer: '牙齿萌出、骨骼融合及第三磨牙发育受血统、营养、健康状况、性别、参照人群及影像检查方法等多种因素影响。以区间形式呈现比单一精确年龄更符合科学严谨性。',
  },
  {
    question: '"混合证据"是什么意思？',
    answer: '"混合证据"模式综合考量了牙齿发育、骨骼成熟度和第三磨牙阶段。当没有单一指标在特定案件中表现出显著的可靠性优势时，建议使用此模式。',
  },
  {
    question: '第三磨牙在所有案例中都可靠吗？',
    answer: '第三磨牙对于青少年后期和青年期的评估很有价值，但其个体变异很大。牙齿先天缺失、病理变化、人口学差异以及影像质量都会限制其诊断价值。',
  },
  {
    question: '该工具能否直接用于实际法律案件？',
    answer: '仅可作为初步辅助参考。实际案件评估必须使用经同行评审的方法、校准后的参照数据，并由独立专家进行审查，同时需透明地报告结果的不确定性和局限性。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: '法医案件面板',
    controls: '法医年龄估算控制',
    results: '法医年龄估算结果',
    maturityProfile: '动态成熟度概况',
    screeningOnly: '筛查估算',
    evidenceType: '证据侧重点',
    mixedEvidence: '混合证据',
    dentalPriority: '牙齿优先',
    skeletalPriority: '骨骼优先',
    dentalStage: '牙齿发育阶段',
    epiphysealStage: '骨骺融合阶段',
    thirdMolarStage: '第三磨牙阶段',
    minimumAge: '最小值',
    likelyAge: '可能值',
    maximumAge: '最大值',
    maturityScore: '成熟度评分',
    stageLabel: '阶段',
    ageUnit: '岁',
    dentalShort: '牙齿',
    boneShort: '骨骼',
    molarShort: '磨牙',
    dentalStageHelp: '牙冠、牙根及根尖形成情况。',
    epiphysealStageHelp: '生长板闭合与骨融合进度。',
    molarStageHelp: '第三磨牙矿化与根尖闭合情况。',
    dentalStage0: '缺失',
    dentalStage1: '牙尖形成',
    dentalStage2: '牙冠形成',
    dentalStage3: '牙根起始',
    dentalStage4: '牙根达一半',
    dentalStage5: '牙根长成',
    dentalStage6: '根尖狭窄',
    dentalStage7: '根尖闭合中',
    dentalStage8: '发育完成',
    epiphysealStage0: '开放',
    epiphysealStage1: '边缘模糊',
    epiphysealStage2: '变窄',
    epiphysealStage3: '桥接形成',
    epiphysealStage4: '一半融合',
    epiphysealStage5: '大部分融合',
    epiphysealStage6: '仅剩痕迹',
    epiphysealStage7: '接近闭合',
    epiphysealStage8: '闭合',
    molarStage0: '缺失',
    molarStage1: '牙尖形成',
    molarStage2: '牙冠起始',
    molarStage3: '牙冠完整',
    molarStage4: '牙根起始',
    molarStage5: '牙根达一半',
    molarStage6: '牙根长成',
    molarStage7: '根尖闭合中',
    molarStage8: '发育完成',
    confidenceexploratory: '探索性',
    confidencemoderate: '中等',
    confidencestrong: '高度可靠',
    noteTriage: '仅作筛查估算参考，不可替代法定年龄判定。',
    noteFinalAssessment: '最终法医评估需结合影像学检查、临床牙科评估、病史记录及司法辖区特定标准。',
    noteWideInterval: '各指标间存在超过四年的偏差，区间已自动放大。',
  },
  seo: [
    {
      type: 'title',
      text: '法医年龄估算器：牙齿、骨骼与第三磨牙筛查计算工具',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当您需要在正式评估前快速、透明地整理生物成熟度证据时，请使用本法医年龄估算器。该工具整合了牙齿发育、骨骺融合及第三磨牙发育阶段，为您提供估算的年龄区间。它旨在响应<strong>法医年龄估算计算器</strong>、<strong>牙科年龄评估</strong>、<strong>骨骼成熟度年龄估算</strong>以及<strong>第三磨牙年龄估算</strong>等专业查询需求。用户可借此深入了解各项指标的含义、组合方式及结果的不确定性度量。',
    },
    {
      type: 'paragraph',
      html: '估算结果被明确表述为<strong>最小年龄、可能年龄和最大年龄</strong>。由于个体发育速度的差异，单一的精确数字往往具有误导性。营养、健康、血统、参照人群、成像质量及观察者差异均会影响结果的准确性。本计算器旨在提供结构化的筛查支持，不应视作司法裁判依据。',
    },
    {
      type: 'title',
      text: '三大成熟度指标解析',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '0至8阶段的滑块设定将复杂的发育过程抽象为标准化数值。阶段0代表成熟度极低或缺失，阶段8代表发育成熟。这种抽象化处理不仅能够辅助初学者快速上手，还能让专家直观对比牙齿、骨骼及第三磨牙指标在区间估算中的权重表现。',
    },

    {
      type: 'table',
      headers: ['指标', '描述', '应用场景', '注意事项'],
      rows: [
        ['牙齿发育', '除第三磨牙外牙齿的形成与萌出。', '儿童及青少年的主要评估指标。', '牙病、拔牙及种族差异可能引入偏差。'],
        ['骨骺融合', '骨骼系统中生长板的进行性闭合。', '针对青少年及青年期的重要指标。', '受特定骨骼部位、性别及内分泌水平影响。'],
        ['第三磨牙', '智齿的形成与矿化进程。', '其他牙齿发育完成后的补充评估指标。', '个体变异极大，需评估有无先天缺失及阻生。'],
      ],
    },
    {
      type: 'title',
      text: '如何解读年龄区间',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '请综合考量三个年龄数值。<strong>可能年龄</strong>是基于您选择的证据侧重点计算出的加权中心点。<strong>最小值</strong>和<strong>最大值</strong>展示了实际操作中的不确定性范围。当各项指标趋于一致时，范围会收窄；而当牙齿、骨骼及第三磨牙结论不一，范围会扩大，此时置信度标签将相应降低。',
    },
    {
      type: 'table',
      headers: ['结果状态', '含义', '建议操作'],
      rows: [
        ['窄区间/置信度高', '各项指标吻合，发育阶段一致。', '记录原始数据，评估是否需要更高级别的司法验证。'],
        ['中等区间', '存在轻微分歧或权重设置影响了中心点。', '校准影像质量及阶段评估标准。'],
        ['宽区间/探索性', '指标冲突明显，指向不同的生理阶段。', '切勿仅凭该估算下结论；请参考补充文档或请求专家会诊。'],
      ],
    },
    {
      type: 'title',
      text: '证据模式选择指南',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>混合证据</strong>模式是筛查的默认设置，适用于综合评估。若牙齿记录详尽且无可争议，建议选择<strong>牙齿优先</strong>；若骨骼放射学检查更为全面权威，则建议选择<strong>骨骼优先</strong>。这些模式仅调整数学权重，并不能提升原数据本身的基础质量。',
    },
    {
      type: 'list',
      items: [
        '<strong>牙齿优先：</strong>牙齿分期清晰且第三磨牙数据完整时使用。',
        '<strong>骨骼优先：</strong>当骨骺融合提供了最详尽的成熟度证据时使用。',
        '<strong>混合证据：</strong>理想的初步快速评估模式。',
        '<strong>置信度标签：</strong>请密切关注，以在做出判断前警惕数据间的冲突。',
      ],
    },
    {
      type: 'title',
      text: '法医年龄评估的局限性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '年龄评估仅能作为辅助支持材料，不能等同于身份确定。在法律保护、刑事责任判定、灾难识别及移民身份等领域，必须采用多学科综合评估。规范的报告应当详尽陈述使用的方法学、参照人群、影像来源、专家资质及已知的边界限制。',
    },
    {
      type: 'paragraph',
      html: '本工具定位于<strong>教育培训、临床分诊及透明化沟通</strong>。我们强调：在面对法律意义重大的年龄阈值判定（例如18周岁）时，不应仅依赖任何简化的计算工具。',
    },
    {
      type: 'title',
      text: '法医报告自检清单',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>证据溯源：</strong>注明影像类型（如口内牙科片、全景片、手腕骨骨龄片或锁骨CT等）。',
        '<strong>缺失/非典型数据：</strong>明确标注先天缺失、低画质或解剖发育变异情况。',
        '<strong>方法论合法性：</strong>确保所用评估方法在当前司法管辖区内是被认可的。',
        '<strong>不确定性呈现：</strong>始终提供范围区间，避免使用暗示"绝对年龄"的表述。',
        '<strong>专家复核：</strong>涉及重大法律影响的案件，必须交由专业法医牙科专家、放射科医生或人类学家复核。',
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