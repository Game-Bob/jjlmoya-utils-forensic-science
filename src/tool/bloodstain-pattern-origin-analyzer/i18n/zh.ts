import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'bloodstain-pattern-origin-analyzer';
const title = '3D血迹喷溅图案起点分析仪';
const description = '在垂直平面上模拟椭圆形血迹，估算撞击角度，并在交互式3D场景中可视化投影轨迹。';

const howTo = [
  { name: '输入或调整血迹', text: '使用表格或2D平面来定义每个血迹的位置、宽度、长度和长轴方向。' },
  { name: '查看撞击角度', text: '计算器利用反正弦关系，通过宽度与长度的比值估算撞击角度。' },
  { name: '检查3D收敛情况', text: '旋转视口以比对投影轨迹和估算的起点球体。' },
  { name: '检查不确定性', text: '将散布值作为实用的警示指标：线条间距较宽意味着绘制的起点稳定性较低。' },
];

const faq = [
  { question: '浏览器工具能确定实际流血事件的真实源头吗？', answer: '不能。它可以用于几何关系的教学和初步评估，但实际案件的结论需要经过验证的方法、现场记录、比例尺校准以及有资质的血迹图案分析。' },
  { question: '为什么要根据宽度和长度计算撞击角度？', answer: '对于理想的椭圆形血迹，撞击角度的正弦值可通过宽度除以长度来近似。实际血迹可能会因表面粗糙度、流动、转移或测量误差而发生变形。' },
  { question: '3D起点球体代表什么？', answer: '它是投影轨迹线之间的最小二乘法收敛估算值，而非保证存在的点源（精确起点）。' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: '公制',
    imperial: '英制',
    unitsLabel: '单位',
    addStain: '添加血迹',
    reset: '重置',
    surface: '承受体表面',
    viewport3dLabel: '3D轨迹视口',
    stainLabel: '血迹',
    table: '测量数据',
    origin: '估算起点',
    spread: '线条散布',
    confidence: '置信度',
    impact: '撞击角度',
    high: '高',
    medium: '中',
    low: '低',
    x: 'X',
    y: 'Y',
    width: '宽度',
    length: '长度',
    rotation: '旋转角度',
    remove: '移除',
    cm: 'cm',
    inch: '英寸',
    degree: '度',
    rotateHint: '拖动3D视图以旋转重建画面。',
    disclaimer: '仅用于教学重建。请结合经验证的现场测量数据和记录的不确定性进行解读。',
  },
  seo: [
    { type: 'title', text: '3D血迹喷溅图案起点分析仪的工作原理', level: 2 },
    { type: 'paragraph', html: '血迹喷溅图案起点分析仪能帮助用户探索血迹图案分析中的核心几何问题之一：<strong>当血滴撞击表面时，空间中的血源可能在什么位置？</strong> 该工具将垂直面上的血迹模拟为椭圆，通过每个血迹的宽长比计算撞击角度，将轨迹向后投影到3D场景中，并估算出一个实用的收敛区域。' },
    { type: 'diagnostic', variant: 'warning', title: '法医警示', html: '输出结果仅为重建辅助手段，而非案件最终结论。实际血迹可能受到承受体粗糙度、卫星状喷溅、凝固、流动、擦拭、转移、透视误差以及比例尺记录不完整的影响。' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(W/L)', label: '撞击角度公式' },
      { value: '3个以上', label: '建议的独立血迹数' },
      { value: '3D', label: '轨迹收敛空间' },
    ] },
    { type: 'title', text: '撞击角度公式', level: 3 },
    { type: 'paragraph', html: '对于简单的椭圆形血迹，撞击角度通常近似为 <strong>arcsin(宽度 / 长度)</strong>。例如，测得宽度为1厘米、长度为2厘米的血迹，对应的撞击角度为30度。这种关系非常实用，因为它能将扁平的痕迹转换为轨迹仰角，但它假设测得的血迹具有代表性且未发生变形。' },
    { type: 'code', ariaLabel: '撞击角度计算', code: '撞击角度 = arcsin(血迹宽度 / 血迹长度)\n例如: arcsin(1 cm / 2 cm) = 30度' },
    { type: 'paragraph', html: '这是诸如<em>血迹撞击角度计算器</em>、<em>喷溅血迹撞击角度公式</em>和<em>如何计算血迹轨迹</em>等搜索意图背后的常见需求。重点在于，该公式仅能解决重建工作的一部分。它估算的是相对于承受体表面的飞行仰角，其本身并不能确定血源、形成机制、凶器或事件发生顺序。' },
    { type: 'title', text: '在输入数据前如何测量血迹', level: 3 },
    { type: 'paragraph', html: '最有效的输入数据来源于经过校准的垂直拍摄照片或直接的现场测量。应测量血迹的主要椭圆体，而不是卫星状喷溅、拖尾、流淌痕迹或二次血迹。宽度应沿短轴测量，长度应沿长轴测量。旋转角度应符合承受体平面上的长轴方向。一旦延伸到3D空间中，长度、宽度或方向的微小误差都可能导致投影轨迹发生巨大偏移。' },
    { type: 'table', headers: ['测量质量', '可能的影响', '实际应对措施'], rows: [
      ['长轴清晰', '旋转角度更可靠', '使用可见的长轴，并记录确定方向的方法。'],
      ['宽度或长度变形', '撞击角度可能存在偏差', '标记不确定性，并与相邻血迹进行比对。'],
      ['收敛血迹过少', '起点估算变得不稳定', '在解读3D起点之前，先增加独立的血迹。'],
      ['缺失比例尺', '所有距离均仅具示意性质', '在没有校准的情况下，切勿报告实际的起点坐标。'],
    ] },
    { type: 'title', text: '解读3D收敛情况', level: 3 },
    { type: 'paragraph', html: '该工具中的起点球体是计算出的与所有投影轨迹线距离最近的点。当线条彼此接近时，散布值较小，置信度提高。当线条发散时，球体仍会显示，但应将其理解为较弱的最小二乘法折中值，而非精确的源头。' },
    { type: 'comparative', columns: 2, items: [
      { title: '收敛区域', description: '承受体平面上的二维估算，通常用于在正视图中观察长轴方向相交的位置。', points: ['适用于初步筛选', '其本身不代表垂直高度'] },
      { title: '起点区域或体积', description: '将平面方向与撞击角度结合，将轨迹投影到空间中的三维估算。', highlight: true, points: ['说明可能的血源高度', '对测量和角度的不确定性较敏感'] },
    ] },
    { type: 'paragraph', html: '用户经常搜索<em>血迹喷溅起点计算器</em>，期望得到一个单一的精确坐标。在实际应用中，合理的解读应更加谨慎。起点更适合被理解为由多条轨迹支持的区域。如果绘制的线条形成紧密的束状，则模型的一致性更高。如果它们穿过一个宽阔的空间体积，则重建在提醒您需要重新审核测量数据、血迹选择或假设。' },
    { type: 'title', text: '轨迹无法交汇的常见原因', level: 3 },
    { type: 'proscons', title: '可靠输入与薄弱输入对比', items: [
      { pro: '数个长轴清晰、形状规则的椭圆形血迹', con: '仅有一两个血迹，或者专门挑选出符合某种假设的血迹' },
      { pro: '垂直于撞击表面拍摄的校准测量数据', con: '倾斜照片、未知比例尺或复制的屏幕截图' },
      { pro: '来自同一事件机制的的独立血迹', con: '混杂了静止滴落血迹、转移血迹、甩溅痕迹、流淌痕迹或二次撞击图案' },
    ] },
    { type: 'paragraph', html: '收敛效果差并不一定意味着工具出错。这可能意味着血迹不属于同一喷溅图案、照片存在透视变形、长轴方向读取错误、血迹不是纯粹的椭圆，或者物理事件比简单的点源模型更为复杂。这是非常有价值的信息。重建工具应该展现这种分歧，而不是将其隐藏在看似确定的数字背后。' },
    { type: 'title', text: '本工具的适用场景', level: 3 },
    { type: 'list', items: [
      '<strong>使用多个血迹：</strong> 三个或更多独立的血迹能提供更有意义的收敛估算。',
      '<strong>注意散布值：</strong> 高散布值警告您线条在3D空间中契合度较低。',
      '<strong>保留比例尺：</strong> 厘米或英寸的数值必须来源于经校准的照片或现场测量。',
      '<strong>将教学与正式报告分开：</strong> 该可视化分析最适合用于正式评估前的教学、规划和阐释方案。',
    ] },
    { type: 'card', title: '最佳工作流程', html: '首先绘制一小组高质量血迹。检查2D长轴方向在视觉上是否合理。然后检查3D轨迹，注意散布值，并每次更改一项测量数据，以观察哪个血迹在主导重建。这种敏感性检查通常比原始的起点坐标更有用。' },
    { type: 'title', text: '何时不应依赖血迹起点估算', level: 3 },
    { type: 'paragraph', html: '当血迹严重变形、承受体表面弯曲或不规则、图案中包含转移血迹或喷射出的呼出血液、表面已被移动，或现场缺乏可靠的比例尺时，切勿依赖简单的起点估算。如果血迹来自不同的形成机制或事件的不同时间点，也应同样保持谨慎。如果输入的图案不适合进行几何重建，即使一见之下干净漂亮的3D可视化图像也可能会产生误导。' },
    { type: 'glossary', items: [
      { term: '撞击角度', definition: '血滴路径与承受体表面之间的估算角度，通常根据椭圆形血迹的宽长比计算。' },
      { term: '轨迹线', definition: '一条投影线，显示从血迹向三维空间反向延伸的可能飞行路径。' },
      { term: '收敛区域', description: '在承受体平面上观察时，血迹方向交叉的大致区域。' },
      { term: '起点区域', definition: '根据多条投影轨迹确定的血液可能来源于的大致三维空间区域。' },
    ] },
    { type: 'summary', title: '最佳应用', items: [
      '使用分析仪来理解轨迹几何学并测试测量的敏感性。',
      '在信任重建结果之前, 将起点球体与散布值进行对比。',
      '切勿将该可视化图像作为独立的法医鉴定意见。',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
