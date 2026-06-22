import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'crystal-lattice-structure-finder';
const title = '晶格结构探索器';
const description = '通过交互式3D查看器、原子堆积因子、配位数和理论密度计算器，探索简单立方、面心立方 (FCC) 和六方密堆积 (HCP) 晶胞。';

const howTo = [
  {
    name: '选择晶格或材料',
    text: '从简单立方、FCC或HCP等结构家族开始，或选择真实材料预设以加载其晶格常数和原子或化学式质量。',
  },
  {
    name: '旋转晶胞',
    text: '拖动角度和缩放控件，检查哪些原子位于传统晶胞的角、面或内部。',
  },
  {
    name: '查看堆积和密度',
    text: '比较所选结构的原子堆积因子、配位数、每晶胞原子数、晶胞质量、晶胞体积和理论密度。',
  },
  {
    name: '测试自定义常数',
    text: '编辑晶格参数a、c/a比和质量，观察晶体膨胀、收缩或成分变化时理论密度的变化。',
  },
];

const faq = [
  {
    question: '晶格中的晶胞是什么？',
    answer: '晶胞是可以填充空间以构建晶体的最小重复三维盒子。其原子可能与相邻晶胞共享，因此每晶胞净原子数可能小于边界上绘制的球体数量。',
  },
  {
    question: '为什么FCC和HCP具有相同的堆积因子？',
    answer: 'FCC和理想HCP都是等径球体的密堆积排列。它们以不同的顺序堆叠密集的三角形层 -  - FCC为ABCABC，HCP为ABAB -  - 但两者都约占据空间体积的74%。',
  },
  {
    question: '理论密度如何计算？',
    answer: '计算器将一个晶胞内的质量除以晶胞体积。晶胞质量由每晶胞原子或化学式单元数乘以摩尔质量再除以阿伏伽德罗常数得到。',
  },
  {
    question: '实测密度为什么可能与理论结果不同？',
    answer: '实际样品可能包含空位、杂质、孔隙、晶界、同位素混合物、热膨胀或多相。理论值假设所选晶格常数下的完美晶体。',
  },
  {
    question: '岩盐真的是FCC金属晶格吗？',
    answer: '不是。岩盐是离子型石盐，不是金属。预设使用其传统的FCC衍生晶胞，因为NaCl每立方晶胞有四个化学式单元，使其适合密度计算练习。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: '交互式晶体晶胞',
    material: '材料',
    lattice: '晶格',
    rotation: '旋转',
    zoom: '缩放',
    latticeA: '晶格常数 a',
    cRatio: 'c/a 比',
    molarMass: '摩尔质量',
    atomsPerCell: '每晶胞原子数',
    packingFactor: '堆积因子',
    coordination: '配位数',
    density: '密度',
    cellVolume: '晶胞体积',
    cellMass: '晶胞质量',
    radius: '原子半径',
    cornerAtoms: '角原子',
    faceAtoms: '面原子',
    interiorAtoms: '内部原子',
    materialNote: '材料说明',
    formula: '化学式',
    resetView: '重置视图',
    crystalProperties: '晶体性质',
    physicalMetrics: '物理指标',
    latticeSimpleCubic: '简单立方',
    latticeFcc: '面心立方 (FCC)',
    latticeHcp: '六方密堆积 (HCP)',
    shortSc: 'SC',
    shortFcc: 'FCC',
    shortHcp: 'HCP',
    materialCopper: '铜',
    materialCopperNote: '导电性高的常见FCC金属。',
    materialAluminum: '铝',
    materialAluminumNote: '导热性良好的轻质FCC金属。',
    materialPolonium: '钋',
    materialPoloniumNote: '具有简单立方结构的稀有元素。',
    materialMagnesium: '镁',
    materialMagnesiumNote: '强度重量比优异的轻质HCP金属。',
    materialTitanium: '钛',
    materialTitaniumNote: '航空航天应用中广泛使用的高强度HCP金属。',
    materialHalite: '岩盐',
    materialHaliteNote: '具有四个NaCl单元的FCC衍生传统晶胞的离子型石盐。',
    shortSimpleCubic: 'SC',
    shortFaceCenteredCubic: 'FCC',
    shortHexagonalClosePacked: 'HCP',
    shortBodyCenteredCubic: 'BCC',
    shortDiamondCubic: 'DC',
    shortRockSalt: 'NaCl',
    shortCesiumChloride: 'CsCl',
    shortZincBlende: 'ZnS',
    shortWurtzite: 'WZ',
    shortPerovskite: 'ABO3',
    shortRutile: 'TiO2',
    latticeBodyCenteredCubic: '体心立方',
    latticeCesiumChloride: '氯化铯',
    latticeDiamondCubic: '金刚石立方',
    latticeFaceCenteredCubic: '面心立方',
    latticeHexagonalClosePacked: '六方密堆积',
    latticePerovskite: '立方钙钛矿',
    latticeRockSalt: '岩盐',
    latticeRutile: '金红石',
    latticeWurtzite: '纤锌矿',
    latticeZincBlende: '闪锌矿',
    materialAlphaIron: 'α铁',
    materialAlphaIronNote: '室温下的体心立方铁相。',
    materialTungsten: '钨',
    materialTungstenNote: '致密的BCC难熔金属，熔点很高。',
    materialSilicon: '硅',
    materialSiliconNote: '用于集成电路的金刚石立方半导体。',
    materialDiamond: '金刚石',
    materialDiamondNote: '金刚石立方结构中的共价碳网络。',
    materialCesiumChloride: '氯化铯',
    materialCesiumChlorideNote: '相互穿插的简单立方离子结构，配位数为八。',
    materialZincSulfide: '硫化锌',
    materialZincSulfideNote: '闪锌矿结构，具有四面体配位。',
    materialGalliumNitride: '氮化镓',
    materialGalliumNitrideNote: '用于LED和功率电子的纤锌矿半导体。',
    materialStrontiumTitanate: '钛酸锶',
    materialStrontiumTitanateNote: '常用作衬底和介电模型的立方钙钛矿氧化物。',
    materialRutileTitania: '金红石二氧化钛',
    materialRutileTitaniaNote: '具有钛八面体配位的金红石TiO2结构。',
  },
  seo: [
    {
      type: 'title',
      text: '晶胞、堆积因子和密度的晶格结构探索器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这款晶格结构探索器有助于将晶胞的图形与学生和材料科学家通常需要的计算联系起来。您可以查看简单立方、面心立方和六方密堆积结构，然后从真实材料预设或自定义输入计算原子堆积因子、配位数、每晶胞原子数、由晶格参数得出的原子半径、晶胞体积、晶胞质量和理论密度。',
    },
    {
      type: 'paragraph',
      html: '交互式查看器专为晶体学中的常见难点而设计：边界原子可见，但每个边界原子只有一部分属于所选晶胞。旋转模型可以使角位点、面位点和内部位点之间的差异在使用数值公式之前更容易观察。',
    },
    {
      type: 'title',
      text: '简单立方、FCC和HCP比较',
      level: 3,
    },
    {
      type: 'table',
      headers: ['结构', '每晶胞净原子数', '配位数', '原子堆积因子', '典型例子'],
      rows: [
        ['简单立方', '1', '6', '52.36%', 'α-钋是经典的元素实例。'],
        ['面心立方 (FCC)', '4', '12', '74.05%', '铜、铝、镍、银、金及许多延展性金属。'],
        ['六方密堆积 (HCP)', '6', '12', '74.05%', '镁、α-钛、锌、钴和铍。'],
      ],
    },
    {
      type: 'paragraph',
      html: '简单立方堆积易于可视化的原因是原子沿立方体棱边接触，每个角原子贡献八分之一给晶胞。FCC在每个面的中心添加原子，因此原子沿面对角线接触，传统立方晶胞的净原子数变为四个。HCP使用六方层而非立方盒子，但理想HCP可达到与FCC相同的密堆积极限。',
    },
    {
      type: 'title',
      text: '原子堆积因子公式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '原子堆积因子是晶胞体积中由硬球原子占据的比例。计算公式为<strong>APF = 晶胞内原子体积 / 晶胞体积</strong>。对于简单立方，由于一个半径为a/2的原子恰好位于立方晶胞内，因此结果为π/6。FCC和理想HCP均达到约0.7405，这是等径球体的最大堆积率。',
    },
    {
      type: 'paragraph',
      html: '堆积因子与密度不同。APF描述的是相同球体填充空间的效率，而密度还取决于摩尔质量和晶格尺寸。轻质HCP金属和重质FCC金属可能具有相似的堆积因子，但密度却相差很大。',
    },
    {
      type: 'title',
      text: '计算器使用的理论密度公式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '计算器使用<strong>ρ = nM / (NA V胞)</strong>。在该公式中，<strong>n</strong>是每晶胞的原子数或化学式单元数，<strong>M</strong>是摩尔质量（克/摩尔），<strong>NA</strong>是阿伏伽德罗常数，<strong>V胞</strong>是晶胞体积（立方厘米）。立方晶胞使用a³。六方晶胞使用(3√3 / 2)a²c，其中c通过c/a比输入。',
    },
    {
      type: 'paragraph',
      html: '由于晶格常数通常以埃为单位列表，计算器在计算密度之前会先将埃转换为厘米。晶格常数的微小变化会对密度产生显著影响，因为立方晶胞的体积与边长三次方成正比。',
    },
    {
      type: 'title',
      text: '如何使用金属和矿物的晶格预设',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>铜和铝：</strong>比较两种每晶胞净原子数相同但摩尔质量和晶格常数不同的FCC金属。',
        '<strong>镁和α-钛：</strong>查看HCP堆积，观察c/a比如何改变六方晶胞体积。',
        '<strong>α-钋：</strong>研究罕见的简单立方结构及其较低的堆积效率。',
        '<strong>岩盐：</strong>使用矿物型NaCl传统晶胞而非单元素金属，练习化学式单元密度计算。',
      ],
    },
    {
      type: 'title',
      text: '硬球晶胞模型的局限性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '此工具使用理想化的几何模型。实际晶体具有电子密度而非硬边界，晶格常数随温度、压力、成分和缺陷而变化。离子晶体和共价晶体还可能需要基元原子、部分占据和对称操作，这超出了此处展示的三种教学结构。',
    },
    {
      type: 'paragraph',
      html: '结果可用于教育、快速估算和常见晶格家族之间的比较。若要达到可发表质量的晶体学水平，请通过原始衍射数据或经过整理的晶体学数据库验证晶格参数、相、化学计量和位点占有率。',
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
      applicationCategory: 'EducationalApplication',
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
