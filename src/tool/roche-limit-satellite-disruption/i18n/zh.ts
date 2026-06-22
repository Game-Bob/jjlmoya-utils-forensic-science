import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'roche-limit-satellite-disruption';
const title = '洛希极限计算器与卫星解体模拟器';
const description = '计算行星与卫星的洛希极限，比较流体与刚性解体距离，可视化潮汐力如何将卫星转变为环系统。';

const howTo = [
  {
    name: '选择主天体',
    text: '选择拉伸卫星的行星。计算器将加载其半径、密度和质量，用于洛希极限和轨道周期估算。',
  },
  {
    name: '选择卫星类型',
    text: '选择冰卫星、岩石卫星、碎石堆或富铁天体。密度和内聚力的不同会改变解体边界。',
  },
  {
    name: '移动轨道滑块',
    text: '向内或向外拖动轨道距离。视觉圆盘会显示卫星处于洛希极限之外、擦碰极限、正在碎裂还是已变为环。',
  },
  {
    name: '比较极限值',
    text: '使用读数比较经典流体洛希极限与较低的刚性体估算值以及经内聚力调整的有效极限。',
  },
];

const faq = [
  {
    question: '什么是洛希极限？',
    answer: '洛希极限是距离大质量主天体的一段距离，在此距离处，跨越较小轨道天体的潮汐力变得足够强，足以克服该小天体的自引力。在该边界以内，脆弱的或类流体的卫星可能被撕裂。',
  },
  {
    question: '为什么有流体洛希极限和刚性洛希极限之分？',
    answer: '流体卫星容易变形，潮汐力可以加剧其拉长，使其在更远的距离外被瓦解。刚性卫星凭借材料强度抵抗变形，因此简单的刚性估算将解体位置估算得更靠近主天体。',
  },
  {
    question: '洛希极限内的每个卫星都会立即变成环吗？',
    answer: '不会。真实的解体取决于自转、成分、裂缝、孔隙率、加热、撞击和材料强度。本工具展示的是经典引力边界，并采用过渡带来传达风险，而不是一个瞬间切换的开关。',
  },
  {
    question: '为什么土星环位于洛希极限附近？',
    answer: '土星环占据了一个区域，在此区域中冰物质可以以颗粒形式存在，而不是聚集成一颗大卫星。洛希极限有助于解释为什么环颗粒能够在靠近行星的地方保持分散。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: '主天体',
    satelliteType: '卫星类型',
    orbitDistance: '轨道距离',
    rocheBoundary: '洛希边界',
    fluidLimit: '流体极限',
    rigidLimit: '刚性极限',
    activeLimit: '有效极限',
    safetyRatio: '安全比率',
    orbitalPeriod: '轨道周期',
    tidalStress: '潮汐应力',
    ringFormation: '环形成',
    stable: '稳定轨道',
    grazing: '潮汐擦碰',
    fragmenting: '碎裂中',
    ring: '环系统',
    km: 'km',
    hours: '小时',
    density: '密度',
    cohesion: '内聚力',
    planetRadius: '行星半径',
    reset: '重置',
    closePass: '近距离飞越',
    moonTrack: '卫星轨迹',
    debrisTrack: '碎片轨迹',
    primaryEarth: '地球',
    primaryMars: '火星',
    primaryJupiter: '木星',
    primarySaturn: '土星',
    primaryNeptune: '海王星',
    satelliteIcyMoon: '冰质卫星',
    satelliteRockyMoon: '岩质卫星',
    satelliteRubblePile: '碎石堆',
    satelliteIronCore: '富铁卫星',
    cohesionFluid: '流体',
    cohesionFractured: '破裂',
    cohesionRigid: '刚性',
  },
  seo: [
    {
      type: 'title',
      text: '洛希极限公式、含义及如何使用本计算器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>洛希极限</strong>是指一颗主要靠自身引力维持的卫星在绕大天体运行时，不会被潮汐力撕裂的最小轨道距离。人们通常搜索它，是为了想知道某颗卫星、彗星、小行星或人造场景能否在近距离飞越行星时幸存，或者物质是否会扩散成环。本计算器通过结合行星半径、行星密度、卫星密度以及卫星的近似内部强度来回答这个问题。',
    },
    {
      type: 'paragraph',
      html: '关键思想很简单：引力在卫星上并非均匀分布。近端受到的拉力大于远端，从而产生拉伸力。如果这种潮汐拉伸力强于卫星的自引力和物质内聚力，天体就会破裂、脱落质量并最终碎裂。因此，洛希极限不仅仅是一个距离；它是外部潮汐应力与内部结合力之间的比较。',
    },
    {
      type: 'title',
      text: '计算器使用的洛希极限公式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '对于流体或非常弱的卫星，经典近似公式为 <strong>d = 2.44 R (rho_M / rho_m)^(1/3)</strong>。对于刚性卫星，常用近似公式为 <strong>d = 1.26 R (rho_M / rho_m)^(1/3)</strong>。在这些公式中，<strong>d</strong> 是从行星中心测量的洛希极限，<strong>R</strong> 是主天体的半径，<strong>rho_M</strong> 是主天体的密度，<strong>rho_m</strong> 是卫星的密度。',
    },
    {
      type: 'list',
      items: [
        '<strong>主天体半径：</strong>即使密度相似，较大的行星也会产生更大的洛希极限距离。',
        '<strong>主天体密度：</strong>密度较大的主天体在给定半径倍数处会增强潮汐强度。',
        '<strong>卫星密度：</strong>密度较大的卫星具有更强的自引力，因此可以在更靠近行星的位置幸存。',
        '<strong>卫星强度：</strong>流体状、冰质、破裂或碎石堆天体比致密的刚性天体在更远处解体。',
      ],
    },
    {
      type: 'table',
      headers: ['模型', '公式形式', '适用场景', '结果含义'],
      rows: [
        ['流体洛希极限', '2.44 R (rho_M / rho_m)^(1/3)', '冰卫星、熔融天体、碎石堆、弱彗星', '易于变形的天体的保守解体距离。'],
        ['刚性洛希极限', '1.26 R (rho_M / rho_m)^(1/3)', '具有材料强度的致密岩石或金属天体', '材料强度延缓解体的较近下限估算值。'],
        ['内聚力调整显示', '介于流体和刚性之间', '本模拟器中的快速场景比较', '针对所选卫星类型的实用风险线，并非普遍的自然法则开关。'],
      ],
    },
    {
      type: 'title',
      text: '示例：为什么土星附近的冰卫星容易解体',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '土星的密度远小于地球，但它体积巨大。低密度的冰卫星自引力较弱，无法与致密的岩石卫星相比，因此密度比仍然使流体洛希极限远离土星的云顶。这就是为什么洛希极限物理学对于理解土星为何能维持一个宽广明亮的、主要由冰颗粒组成而非一颗重新聚集的大卫星的环系统至关重要。',
    },
    {
      type: 'paragraph',
      html: '如果在计算器中选择土星和一颗冰卫星，然后向内拖动轨道，观察安全比率。当比率高于 <strong>1.00x</strong> 时，所选轨道位于有效洛希边界之外。接近 <strong>1.00x</strong> 时，卫星处于潮汐擦碰区域，质量脱落或破裂成为可能。低于 <strong>1.00x</strong> 时，可视化向碎片弧和环形成转变，因为所选模型预测会发生解体。',
    },
    {
      type: 'title',
      text: '如何解读安全比率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>安全比率</strong>是当前轨道距离除以所选洛希边界。比率为 <strong>1.25x</strong> 意味着轨道比有效解体估算值远 25%。比率为 <strong>1.00x</strong> 意味着轨道恰好位于所选洛希边界上。比率为 <strong>0.80x</strong> 意味着卫星已深入所选解体区域内部。',
    },
    {
      type: 'table',
      headers: ['安全比率', '显示状态', '实际含义'],
      rows: [
        ['高于 1.12x', '稳定轨道', '卫星在此简化模型中位于所选洛希边界之外。'],
        ['1.00x 至 1.12x', '潮汐擦碰', '天体足够近，变形、破裂或表面脱落可能产生影响。'],
        ['0.78x 至 1.00x', '碎裂中', '在所选模型中，自引力已不足以维持；碎片流是可能的。'],
        ['低于 0.78x', '环系统', '原始天体被表示为沿相邻轨道散布的物质。'],
      ],
    },
    {
      type: 'paragraph',
      html: '显示轨道周期的原因在于，近距离飞越不仅关乎距离。解体区域内的物质沿快速、略有差异的轨道运动。一旦碎片分离，轨道剪切力将它们散布在行星周围，而碰撞则使碎片扁平化并按大小分选，形成盘状环。',
    },
    {
      type: 'title',
      text: '为什么洛希极限能产生环',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当卫星在洛希极限外碎裂时，碎片最终可能碰撞并重新聚集成一颗较小的卫星。在洛希极限内，附近的碎片难以合并成一个稳定的自引力天体，因为潮汐力不断将物质拉开。其结果可能是一个长寿命的环，尤其是当碎片是冰质的、存在碰撞、并受到小卫星或共振持续扰动时。',
    },
    {
      type: 'paragraph',
      html: '环的形成是渐进的。一颗被瓦解的卫星首先被拉长，然后脱落颗粒和较大的碎片。这些碎片占据略有不同的轨道半径，因此它们会彼此超前或滞后。随着时间的推移，碰撞抑制了垂直运动，物质沉降成一个薄盘。这就是为什么模拟器展示的是从单颗卫星到碎片弧再到更完整的环的过渡，而不是将解体视为一次瞬间爆炸。',
    },
    {
      type: 'title',
      text: '本洛希极限计算器的重要限制',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '本计算器旨在提供快速的科学直觉，而非高保真的任务设计。真实的卫星受到自转、轨道偏心率、内部分层、抗拉强度、孔隙率、温度、潮汐加热、既有裂缝、撞击以及其他卫星的共振影响。一个在偏心轨道上旋转的碎石堆与一个在圆形轨道上的寒冷整体岩石可能以不同的方式失效，即使它们的平均密度看起来相似。',
    },
    {
      type: 'list',
      items: [
        '<strong>使用流体极限</strong>适用于弱的、冰质的、熔融的、高度碎裂的或由松散集合体组成的天体。',
        '<strong>使用刚性极限</strong>作为具有实际内部强度的致密天体的下限估算值。',
        '<strong>读取有效极限</strong>作为模拟器针对所选卫星类型选择的工作边界。',
        '<strong>不要将结果</strong>解读为对某个真实命名卫星的精确预测，这需要详细的地球物理模型。',
      ],
    },
    {
      type: 'title',
      text: '本工具帮助解答的常见问题',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '使用本工具来估算以下问题：一颗卫星在解体前能距离地球多近？为什么土星环位于洛希极限区域内？岩石卫星是否比冰卫星能在更近的距离幸存？密度如何改变洛希极限？流体洛希极限和刚性洛希极限有什么区别？控制组件正是围绕这些比较而构建，因此改变一个变量即可立即显示解体距离、安全比率和环形成可视化如何响应。',
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
