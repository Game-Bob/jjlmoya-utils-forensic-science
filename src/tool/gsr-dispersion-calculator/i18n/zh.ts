import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'gsr-dispersion-calculator';
const title = '射击残留物（GSR）扩散距离计算器';
const description = '根据射击距离、弹药类型、扩散分布、烟灰沉积和热效应，模拟在目标表面上射击残留物的分布图样，用于法医学教学。';

const howTo = [
  {
    name: '设置枪口到目标的距离',
    text: '将距离控制杆从接触范围移动到三米，观察相同的射击如何从紧凑、有热变化的沉积物变为宽广、稀疏 pleasure 的残留物颗粒场。',
  },
  {
    name: '选择弹药配置文件',
    text: '选择 9 mm 手枪、.38 左轮手枪或 12 号口径散弹枪配置文件。每个配置文件会改变模拟所用的颗粒计数、扩散系数和估计的防热效应范围。',
  },
  {
    name: '检查目标布和扩散圆锥体',
    text: '使用目标布比较颗粒密度和放射状扩散，然后使用侧面圆锥体了解射击羽流在到达目标平面之前是如何物理膨胀的。',
  },
  {
    name: '解读距离类别',
    text: '查看分类的距离类别和预期所见。结果描述了接触、近接触、近距离和远距离图样的教学意义，而不作为具体的案件鉴定结论。',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '射击残留物的扩散能确定绝对准确的射击距离吗？',
    answer: '不能。GSR 图样仅支持估算一个射击距离范围，而非一个精确的数值。真实的射击距离判定需要对特定枪支、弹药、目标材料、射击角度进行检验，并在控制条件下进行比较试射。',
  },
  {
    key: 'faq-2',
    question: '为什么极近距离射击会显示更多的烟灰和烧灼痕迹？',
    answer: '在极短距离内，高温气体、烟灰、未燃烧的火药颗粒以及底火中的金属颗粒在射击羽流膨胀和冷却之前就已撞击目标，导致发黑、烧焦、撕裂和枪口印痕。',
  },
  {
    key: 'faq-3',
    question: '雷管底火 GSR 中通常包含哪些化学元素？',
    answer: '传统的 GSR 分析专注于含有铅、钡和锑的颗粒，尽管现代的无铅弹药可能改变这种特征化学元素谱。SEM-EDS 分析通常结合颗粒的形态和化学成分进行综合评估。',
  },
  {
    key: 'faq-4',
    question: '为什么模拟器使用高斯径向分布模型？',
    answer: '高斯径向分布是一个很有用的教学近似模型，因为大多数颗粒都集中在撞击中心附近。在实际情况中，风向、射击角度、枪支设计或织物结构可能会引起非对称图样。',
  },
  {
    key: 'faq-5',
    question: '这个计算器适用于出具法庭证据报告吗？',
    answer: '不适用。这仅是一个教学可视化工具。正式的物证司法鉴定必须依赖经过验证的实验室规程、质量控制、实物比对图样以及有资质的鉴定人员的评估。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: '射击距离',
    units: '单位系统',
    metric: '公制',
    imperial: '英制',
    unitMeter: '米',
    unitCentimeter: '厘米',
    unitFoot: '英尺',
    unitInch: '英寸',
    ammo: '弹药配置文件',
    ammoPistol9mm: '9 mm 手枪',
    ammoRevolver38: '.38 左轮手枪',
    ammoShotgun12: '12 号口径散弹枪',
    target: '目标布',
    cone: '残留物羽流',
    canvasAria: '目标布上的射击残留物颗粒扩散图样',
    rangeStripAria: '距离类别',
    category: '距离解读',
    categoryContactLabel: '接触射击 / 枪口贴片',
    categoryNearContactLabel: '近接触射击 / 烧灼区',
    categoryCloseRangeLabel: '近距离射击 / 火药纹身区',
    categoryDistantLabel: '远距离或不确定距离',
    density: '颗粒密度',
    thermal: '热效应',
    radius: '估计图样半径',
    radiusSuffix: '半径',
    expected: '预期所见',
    expectedContact: '预期在目标区有高密度的中心沉积物、枪口印痕风险、烟灰发黑、撕裂和热变性。',
    expectedNearContact: '浓重的烟灰和火药颗粒集中在射入孔周围，形成明显但仍紧凑的径向晕环。',
    expectedCloseRange: '火药纹身和金属残留物加宽为可测量的环；热效应和烟灰变得微不足道。',
    expectedDistant: '颗粒非常稀疏且分布广泛。确定射击距离需要化学检验、显微镜观察和比较试射。',
    contact: '接触',
    near: '近接触',
    close: '近距离',
    distant: '远距离',
    disclaimer: '仅供教学展示。使用 GSR 判定射击距离需要进行控制条件下的比对试射、目标物质比对以及经验证的化学分析方法。',
  },
  seo: [
    {
      type: 'title',
      text: '根据 GSR 射击残留物分布估算射击距离',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: '教学模型',
      title: '该计算器解答什么',
      html: '此 GSR 扩散计算器展示残留物分布是更像接触射击、近接触射击、近距离射击，还是远距离射击。它是为了辅助学习 <strong>使用射击残留物判定射击距离</strong> 的科学原理，而不是为了出具具体的法医鉴定意见。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 米', label: '模拟的枪口到目标距离', icon: 'mdi:ruler' },
        { value: '4', label: '包含的射击距离类别', icon: 'mdi:crosshairs-question' },
        { value: '3', label: '比对的弹药配置文件', icon: 'mdi:ammunition' },
        { value: '2', label: '单位系统：公制和英制', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: '如何解读模拟的分布图样',
      level: 3,
    },
    {
      type: 'summary',
      title: '快速判读清单',
      items: [
        '中心高密度烟灰、烧灼、撕裂或枪口印痕提示接触或近接触射击。',
        '紧凑的黑色中心四周分布有火药颗粒提示极近距离，需要试射以精确判定范围。',
        '扩散的火药纹身且几乎无烟灰，通常符合热效应消失后的近距离射击。',
        '在远距离时没有肉眼可见的残留物，并不证明不存在 GSR；化学提取或显微镜观察可能仍会发现微粒。',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '本工具的用途',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: '图形化展示了射击距离、残留物密度、颗粒扩散和热效应之间的相互关系。',
          points: ['课堂教学演示', '技术搜索意图解答', '法医学及科学物证词汇', '公制和英制单位比对'],
        },
        {
          title: '本模拟的局限性',
          icon: 'mdi:alert-circle-outline',
          description: '在没有实验室对实物进行检验的情况下，无法判定具体案件中的真实射击距离。',
          points: ['无法分析案件实物', '无化学定性试验', '未使用涉案枪支进行试射', '无司法证明效力'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['常见疑问', '分布中的关键线索', '技术解答'],
      rows: [
        ['接触射击是什么样的？', '重度烟灰、烧灼、裂创或枪口印痕。', '接触射击的判断可能性高，但发射气体膨胀和目标物弹性会严重影响外观。'],
        ['枪支距离目标多远？', '入射口附近有高密度残留物并伴有紧凑的火药晕。', '分布图样支持估算距离范围，但必须与比对试射数据相核对。'],
        ['什么是火药纹身（Tattooing）？', '未燃烧火药颗粒撞击造成的点状损伤和极少量的烟灰。', '其扩散程度受弹药类型、目标织物、射击角度和中间障碍物影响。'],
        ['远距离时残留物会彻底消失吗？', '微粒极度分散，肉眼无明显宏观沉积。', '视觉特征显著减少，但底火微粒依然可以通过实验室分析检出。'],
      ],
    },
    {
      type: 'title',
      text: '模拟模型的物理科学原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '本模拟器采用高斯径向分布在冲击中心周围随机分布微粒。短距离产生狭窄且高密度的沉积；距离增加导致扩散范围扩大且平均密度降低。模型将热烟灰与金属底火颗粒分开计算，因为热烟灰的物理达到距离远短于微观金属颗粒的散落范围。',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: '射击残留物（Gunshot Residue）：发射时由底火、火药、弹头和高温气体产生的所有颗粒和化合物。' },
        { term: '烟灰发黑', definition: '富含碳的黑色沉积物，通常仅在接触和极近距离射击时肉眼可见。' },
        { term: '火药纹身', definition: '未燃烧或部分燃烧的火药颗粒撞击目标表面产生的微小点状痕迹或损伤。' },
        { term: '枪口印痕', definition: '接触射击时由于高压气体和热量将枪口形状烙印在目标表面形成的痕迹。' },
        { term: '比对试射', definition: '使用涉案枪支和同批次弹药在已知距离下对相同目标材料进行的实验发射。' },
      ],
    },
    {
      type: 'title',
      text: '法医学射击距离类别和预期所见',
      level: 3,
    },
    {
      type: 'table',
      headers: ['射击类别', '常见物理特征', '鉴定解读限制'],
      rows: [
        ['接触', '中心大量沉积、烟灰、烧灼、破裂、枪口印痕。', '织物的弹性和气体压力可能会极大地改变孔洞的直径形态。'],
        ['近接触', '射入孔周围有致密的烟灰和紧凑的火药晕。', '宽松的衣物或中间障碍物可能会阻挡预期的残留物分布。'],
        ['近距离', '无明显烟灰沉积的火药纹身和扩散微粒。', '相同的距离在棉织物、牛仔布、皮肤或纸张上显示不同的分布图样。'],
        ['远距离', '无肉眼可见痕迹，或仅有宽范围散在的微观颗粒。', '当肉眼特征消失时，化学显色法和扫描电镜能谱（SEM-EDS）分析至关重要。'],
      ],
    },
    {
      type: 'tip',
      title: '实务解读提示',
      html: '评估射击残留物时应始终将其作为一个 <strong>范围比对问题</strong>，绝不能断定为单一的精确数值。科学严谨的结论只能来自于将送检物证与在相同条件下获取的试射样片进行直接比对。',
    },
    {
      type: 'title',
      text: '分布图样分析前的文档记录规程',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        '记录目标织物的物理特性（织物类型、颜色、厚度、弹性以及是否有折叠）。',
        '记录枪支的制造厂商、型号、枪管长度、弹药批号、火药类型和枪口装置。',
        '拍摄分布图样，照片中必须包含比例尺、照明方向和物证链记录。',
        '分别分析烟灰、烧灼、未燃火药颗粒、擦拭圈和织物撕裂创。',
        '在正式司法鉴定出具具体射击距离之前，必须先进行控制条件下的比对试射。',
      ],
    },
    {
      type: 'proscons',
      title: '数字化模拟与实验室弹道检验的对比',
      items: [
        { pro: '能够直观地帮助理解射击残留物颗粒如何随着距离增加而扩散。', con: '无法复制特定枪支个体、弹药批次或目标织物的特定理化特征。' },
        { pro: '理清并明确了各个射击距离类别之间的概念差异。', con: '无法替代化学显色试验或扫描电子显微镜（SEM-EDS）分析。' },
        { pro: '帮助认识肉眼视觉宏观分析的物理局限性。', con: '在没有实验室实验验证和有资质的鉴定官评估前，不具备法庭证据效力。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: '司法鉴定警告',
      title: '排除法庭和诉讼目的使用',
      html: '计算机模拟无法替代真实案件的物证鉴定。它不能评估枪支维护状态、火药化学特征、中间障碍物或检样提取质量。本页面仅供教学参考，真实案件请联系经国家认可的专业司法鉴定机构。',
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
