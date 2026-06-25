import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-image-metadata-authenticity-analyzer';
const title = '图像元数据与真实性法证分析器';
const description = '在浏览器本地检查图像头信息、EXIF 拍摄数据、GPS 坐标、编辑软件痕迹以及原始字节。';

const howTo = [
  { name: '保留原始证据', text: '请基于法证副本开展分析，并在本工具之外保存源文件及其加密哈希。' },
  { name: '本地载入图像', text: '拖放或选择 JPEG 或 PNG。文件只会在浏览器内存中读取，不会上传。' },
  { name: '查看元数据与位置', text: '将拍摄时间、相机信息、软件字段和 GPS 字段与案件叙述及获取记录进行比对。' },
  { name: '解读完整性信号', text: '将编辑痕迹和缺失字段视为调查线索，而不是操纵结论。' },
  { name: '检查十六进制预览', text: '利用高亮显示的头部和元数据区域识别容器结构，并记录偏移量以便进一步检验。' },
];

const faq = [
  { question: '元数据能证明照片是真实的吗？', answer: '不能。元数据可以被删除、复制或修改。真实性判断需要结合文件结构、来源、哈希、视觉检查、压缩分析以及经过验证的法证方法。' },
  { question: '出现 Adobe 或 GIMP 痕迹是否就说明存在恶意编辑？', answer: '不是。它只表明某个软件可能写入了元数据或导出了文件。合法的色彩校正、编辑流程或证据整理也可能留下同样的痕迹。' },
  { question: '图像会被上传吗？', answer: '不会。分析在浏览器内存中完成。但在任何软件中打开敏感材料之前，仍应遵守你所在机构的证据处理政策。' },
  { question: '为什么 GPS 数据可能缺失？', answer: '可能是相机不支持 GPS、定位记录被关闭、平台移除了元数据，或者文件经过重新编码。' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacy: '仅限本地二进制检查',
    dropTitle: '将图像放到证据台上',
    dropHint: '把 JPEG 或 PNG 拖到这里，或选择一个文件。不会上传任何内容。',
    chooseFile: '选择图像',
    replaceFile: '替换图像',
    waiting: '等待证据',
    metadata: '拍摄元数据',
    integrity: '完整性信号',
    location: '记录位置',
    hex: '十六进制证据窗口',
    hexHint: '前 512 字节 · 青色头部 · 琥珀色元数据 · 中性图像数据',
    noData: '无可读值',
    noGps: '未找到可读的 GPS 坐标。',
    mapLink: '在 OpenStreetMap 中打开坐标',
    score: '启发式置信度',
    disclaimer: '高分并不等于真实性。请保留原始文件、计算加密哈希，并使用经过验证的实验室流程得出案件结论。',
    fileName: '文件',
    fileSize: '大小',
    fileType: '容器',
    camera: '相机',
    captured: '拍摄于',
    software: '软件',
    coordinates: '坐标',
    statusNoObvious: '未发现明显编辑迹象',
    statusReview: '建议复核',
    statusEditing: '检测到编辑痕迹',
    processing: '正在读取二进制证据...',
    loadError: '无法分析该文件。请选择有效的 JPEG 或 PNG 图像。',
  },
  seo: [
    { type: 'title', text: '如何分析图像元数据和真实性信号', level: 2 },
    { type: 'paragraph', html: '图像元数据法证分析器可以帮助调查人员、记者、法务团队、合规审查人员和研究者回答一个高意图问题：<strong>图像元数据究竟能告诉我们什么？</strong> 元数据能够提供关于拍摄、地点、软件处理和文件结构的线索，但它并不是独立的真相机器。它最大的价值在于分流和筛查，帮助你判断哪些文件值得进一步深入检查。' },
    { type: 'paragraph', html: '这个浏览器工具面向那些不满足于原始 EXIF 转储的用户。它会在本地读取所选 JPEG 或 PNG，并集中呈现相机字段、拍摄时间、软件标签、坐标、容器线索以及文件开头字节。这回应了诸如 <em>照片真实性检查</em>、<em>EXIF 元数据分析</em>、<em>如何判断图片是否被编辑</em> 等常见搜索意图。' },
    { type: 'paragraph', html: '最重要的原则是：结果应该被视为语境，而不是裁决。一个文件可能拥有有用的元数据却依然具有误导性；也可能元数据很少但依然真实。因此，元数据必须作为证据层之一，与来源、哈希、证言、设备历史和经过验证的检验方法进行交叉比对。' },
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
