import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-anthropology-sex-determination-cranial-pelvic-morphology-bayesian';
const title = '法医人类学性别鉴定器';
const description = '利用贝叶斯概率模型，根据颅骨和骨盆的形态学指标评估生物学性别。';

const howTo = [
  {
    name: '选择要分析的解剖区域',
    text: '决定是分析骨盆、颅骨还是两者都分析。评估这两个区域可以提高最终生物学性别分类的准确性和可信度。',
  },
  {
    name: '评估每个形态特征',
    text: '检查骨骼标本，并根据视觉参考将关键指标评定为 1（强女性化）至 5（强男性化）分。',
  },
  {
    name: '将评分输入贝叶斯分析引擎',
    text: '使用滑块输入每个特征的评分。分类器将自动更新男性和女性类别的后验概率。',
  },
  {
    name: '解读概率计算结果',
    text: '审查最终的置信度指标、主导性别分类，并阅读法医诊断注释以了解生物学变异。',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '骨盆性别鉴定中的 Phenice 方法是什么？',
    answer: 'Phenice 方法由 T. W. Phenice 于 1969 年发表，专注于三个特定的骨盆特征：腹侧弧、耻骨下凹和坐骨耻骨支内侧面。它仍然是法医人类学中最可靠的形态学方法之一，在应用于保存完好的骨骼遗骸时，准确率超过 95%。',
  },
  {
    key: 'faq-2',
    question: '为什么在性别评估中骨盆优于颅骨？',
    answer: '骨盆是人类骨骼中性双形最显著的部分，因为它反映了女性分娩的生理适应。进化压力使女性骨盆比男性骨盆更宽、更浅，且具有更宽的角度；而颅骨双形性主要与整体体型和肌肉发育有关，可靠性稍低。',
  },
  {
    key: 'faq-3',
    question: '贝叶斯分类器如何估算性别概率？',
    answer: '我们的分类器使用贝叶斯更新模型。它假设两性的先验概率均为 50%。对于评估的每个解剖标记，模型将先验概率乘以在男性与女性群体中获得该特定评分的似然度，最后归一化生成后验概率。',
  },
  {
    key: 'faq-4',
    question: '形态学分析中的 3 分代表什么？',
    answer: '3 分代表不确定或中性的形态。这表明该特征表现出的特征处于人类性双形光谱的中部，既没有表现出明显的女性特征（1-2 分），也没有表现出明显的男性特征（4-5 分）。',
  },
  {
    key: 'faq-5',
    question: '该模型可以对未成年人或儿童的骨骼遗骸进行性别鉴定吗？',
    answer: '不能。对青春期前的未成年人遗骸进行形态学性别鉴定是极不可靠的，因为区分男女骨骼的形态特征在青春期后才会完全发育。法医人类学家通常依赖基因检测或牙齿指标来评估未成年人。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: '骨盆形态学',
    craniumRegion: '颅骨形态学',
    subpubicAngle: '耻骨下角',
    subpubicAngleDesc: '耻骨联合下方形成的夹角。',
    subpubicAngleFem: '宽阔的 U 形角（>90°）',
    subpubicAngleMasc: '狭窄的 V 形角（<70°）',
    sciaticNotch: '坐骨大切迹',
    sciaticNotchDesc: '髂骨后部的坐骨大切迹。',
    sciaticNotchFem: '宽而浅的 U 形切迹',
    sciaticNotchMasc: '窄而深的拇指形切迹',
    ventralArc: '腹侧弧',
    ventralArcDesc: '横跨耻骨前表面的骨质脊。',
    ventralArcFem: '明显隆起的骨嵴',
    ventralArcMasc: '缺失或非常模糊的线',
    preauricularSulcus: '耳前沟',
    preauricularSulcusDesc: '靠近骶髂关节的凹沟。',
    preauricularSulcusFem: '深而呈点状的沟槽',
    preauricularSulcusMasc: '缺失或完全平滑',
    mastoidProcess: '乳突',
    mastoidProcessDesc: '外耳道后方的骨性突起。',
    mastoidProcessFem: '小而短的乳突',
    mastoidProcessMasc: '大而长的粗壮乳突',
    supraorbitalRidge: '眉脊',
    supraorbitalRidgeDesc: '眉弓（眉间）的突出程度。',
    supraorbitalRidgeFem: '平滑、平坦的额部',
    supraorbitalRidgeMasc: '显著突出的眉脊',
    mentalEminence: '颏隆凸（下巴）',
    mentalEminenceDesc: '下巴的形状和突出度。',
    mentalEminenceFem: '圆而尖的下巴',
    mentalEminenceMasc: '宽而方的双结节下巴',
    nuchalCrest: '项嵴',
    nuchalCrestDesc: '颅骨后部的骨嵴。',
    nuchalCrestFem: '平滑的枕平面',
    nuchalCrestMasc: '粗糙、钩状的枕骨突起',
    selectOption: '选择评分...',
    score1: '1 - 强女性化',
    score2: '2 - 女性化',
    score3: '3 - 中性/不确定',
    score4: '4 - 男性化',
    score5: '5 - 强男性化',
    notEvaluated: '未评估',
    resultsTitle: '性别鉴定结果',
    femaleProbLabel: '女性概率',
    maleProbLabel: '男性概率',
    predominantLabel: '主导分类',
    confidenceLabel: '评估置信度',
    weakConf: '弱（评估的指标过少）',
    moderateConf: '中等',
    strongConf: '强',
    femaleClass: '女性',
    maleClass: '男性',
    indeterminateClass: '不确定',
    noteNoData: '请至少评估一个解剖标记以开始计算。',
    noteTriageOnly: '本工具仅供教学筛选参考。正式的法医评估需要进行测量学分析和多专家会审。',
    noteBayesianEst: '概率是通过非参数贝叶斯似然矩阵动态计算的。',
    pelvicTitle: '骨盆参考指南',
    cranialTitle: '颅骨参考指南',
    pelvisDesc: '女性骨盆适应分娩，导致结构更宽、角度更浅。男性骨盆更粗壮、狭窄且呈垂直走向。',
    cranialDesc: '男性颅骨通常更大且更粗壮，乳突更大，眉脊更突出，肌肉附着点更粗糙。女性颅骨更纤细，项嵴更平滑，下巴较圆。',
  },
  seo: [
    {
      type: 'title',
      text: '法医人类学中骨骼性别鉴定导论',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '评估生物学性别是法医人类学、毒理学和考古学中为未知骨骼遗骸建立生物学特征的首要步骤之一。与身高、死亡年龄和族群亲缘关系一起，性别评估有助于缩小潜在失踪人员的范围。人类骨骼具有性双形性，即同一物种男女之间的生理差异。这种双形性既反映在大小上（粗壮与纤细），也反映在形状上（特别是与分娩相关的骨盆适应性变化）。',
    },
    {
      type: 'paragraph',
      html: '本交互式工具允许法医学学生、法医和实习人员评估骨盆和颅骨的形态学特征。通过输入基于视觉指南的评分，用户可以观察到各个骨骼标记如何对累积统计模型做出贡献。',
    },
    {
      type: 'title',
      text: '骨盆性双形与 Phenice 方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '骨盆被公认为骨骼中用于生物学性别鉴定最准确的区域。女性骨盆更宽，产道更大，坐骨大切迹更宽，耻骨下角超过九十度。相反，男性骨盆的特征是狭窄的 V 形耻骨下角和狭窄的坐骨大切迹。Phenice 方法侧重于耻骨的三个特定特征：腹侧弧、耻骨下凹和坐骨耻骨支的内侧面。发育良好的腹侧弧是女性极强的特征指标，而男性中该特征通常缺失。',
    },
    {
      type: 'title',
      text: '颅骨性双形与粗壮度标记',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当骨盆骨缺失或保存完好度较差时，颅骨可作为性别评估的首选替代部位。颅骨评估基于粗壮度，因为受激素驱动的发育差异影响，男性颅骨通常具有更明显的肌肉附着部位和更大的骨突。位于耳后的乳突在男性中更大、更宽。男性额部的眉脊或眉间显眼且突出，而女性则保持平滑且垂直。下巴（颏隆凸）在男性中倾向于呈方形且宽大，而女性则呈现出更圆、更尖的下巴结构。',
    },
    {
      type: 'table',
      headers: ['解剖标记', '女性特征（1-2分）', '男性特征（4-5分）', '法医学价值'],
      rows: [
        ['耻骨下角', '宽阔的钝角（通常超过90度）。', '狭窄的锐角（通常小于70度）。', '骨盆性别鉴定中单项诊断价值最高。'],
        ['坐骨大切迹', '宽而浅的切迹，呈 U 形。', '窄而深的切迹，呈拇指状。', '极耐损的标记，在碎片化遗骸中常得以保存。'],
        ['乳突', '小而短，在耳道下方突出极小。', '大而长，显著向下突出。', '可靠的颅骨标记，抗风化能力强。'],
        ['眉脊', '平滑、平坦的眉间，前额垂直。', '突出的眉脊，前额倾斜。', '区分粗壮的男性颅骨与纤细的女性颅骨。'],
      ],
    },
    {
      type: 'title',
      text: '形态学分类中的贝叶斯数学模型',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '传统的法医评估依赖于主观分类，这可能会导致观察者偏差。现代法医人类学引入了统计概率模型来量化不确定性。贝叶斯统计非常适合这一目的，它从相等的先验概率（男性 50%，女性 50%）开始，并随着新证据的引入进行更新。当骨盆特征显示出高度女性化的形态（宽耻骨下角，1 分）时，女性分类的概率会上升，从而覆盖颅骨中存在的中间或冲突标记。',
    },
    {
      type: 'paragraph',
      html: '该数字模拟器实现了非参数贝叶斯分析引擎。计算提供的是概率百分比，而不是死板的二分类输出，这符合现代法医学指南的要求，即在法庭证词中强调报告置信区间和错误率。分类的置信度取决于所评估的标记数量，结合骨盆和颅骨区域的评分能提供最稳健的结果。',
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
