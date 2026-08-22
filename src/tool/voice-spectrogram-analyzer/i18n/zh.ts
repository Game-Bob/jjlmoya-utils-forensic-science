import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "voice-spectrogram-analyzer-online";
const title = "在线声音语图频谱分析仪";
const description = "在浏览器中私密可视化两段音频样品的频率、时间、音强及估计共振峰（Formant）特征。";

const howTo = [
  {
    "name": "选择两段音频样品",
    "text": "加载本地音频或使用合成元音示例。"
  },
  {
    "name": "设置频率上限",
    "text": "根据声音类型选择 4、6 或 8 kHz。"
  },
  {
    "name": "解读语图频谱",
    "text": "观察时间、频率分布及共振峰特征。"
  },
  {
    "name": "播放并对比",
    "text": "结合同步光标聆听并对比 F1、F2、F3 平均值。"
  }
];

const faq = [
  {
    "question": "声音语图（Spectrogram）展示了什么？",
    "answer": "语图横轴代表时间，纵轴代表频率，颜色的亮度代表声音信号的能量强度。"
  },
  {
    "question": "我的录音会被上传吗？",
    "answer": "不会。所有解码与分析均在您的浏览器本地进行。"
  },
  {
    "question": "F1、F2 和 F3 参考线是什么？",
    "answer": "它们是对声道前三个主要共振峰（Formant）位置的教学估计。"
  },
  {
    "question": "此工具能否用于说话人身份鉴定？",
    "answer": "不能。视觉相似度或共振峰接近度不能作为法庭声纹身份证明。"
  },
  {
    "question": "为什么更改频率上限会影响共振峰估计？",
    "answer": "频率显示范围的变化会改变频谱峰值的分离与平滑效果。"
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "仅限本地",
    "privacyNote": "您的录音文件保存在本地设备中。解码与频谱分析完全在浏览器内运行。",
    "loadHeading": "加载两段音频进行对比分析",
    "sampleALabel": "样品 A",
    "sampleBLabel": "样品 B",
    "chooseFileLabel": "选择音频",
    "replaceFileLabel": "更换音频",
    "dropHint": "将音频文件拖放到此处（最大 25 MB）。将分析前 20 秒。",
    "presetHint": "直接使用预设的合成元音研究样品。",
    "presetWarmLabel": "暖音元音研究",
    "presetBrightLabel": "亮音元音研究",
    "emptySampleLabel": "等待音频输入",
    "readySampleLabel": "频谱图生成完毕",
    "decodingSampleLabel": "正在生成频谱图",
    "errorSampleLabel": "无法分析该音频样品",
    "durationLabel": "时长",
    "ceilingHeading": "频率上限设置",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "镜像声音语图展示台",
    "mirrorViewLabel": "镜像对照",
    "splitViewLabel": "平行对照",
    "playALabel": "播放样品 A",
    "playBLabel": "播放样品 B",
    "stopLabel": "停止播放",
    "timeAxisLabel": "时间",
    "frequencyAxisLabel": "频率",
    "intensityLegendLabel": "颜色越亮代表声音能量越强",
    "formantLegendLabel": "估计共振峰参考线",
    "sampleAEmptyCanvasLabel": "加载样品 A 以显示其语图频谱",
    "sampleBEmptyCanvasLabel": "加载样品 B 以显示其语图频谱",
    "comparisonHeading": "声道共振特征分析",
    "comparisonNote": "浊音段的平均频谱峰值位置。差值为物理测量结果，不代表相似度百分比。",
    "formantOneLabel": "第一共振区 (F1)",
    "formantTwoLabel": "第二共振区 (F2)",
    "formantThreeLabel": "第三共振区 (F3)",
    "averageLabel": "平均值",
    "differenceLabel": "差值",
    "unavailableLabel": "不可用",
    "statusEmptyLabel": "加载音频样品以开始",
    "statusSingleLabel": "一个样品已准备就绪",
    "statusReadyLabel": "两个样品的频谱图均已就绪",
    "limitError": "文件大小超过了 25 MB 的本地分析限制。",
    "decodeError": "浏览器无法解码此音频格式。",
    "browserError": "当前浏览器不支持 Web Audio API。",
    "educationalNote": "仅用于教学与信号可视化。共振峰参考线基于简化的频谱峰值平滑算法，不能用于司法声纹鉴定或生物特征识别。"
},
  seo: [
    { type: 'title', text: "语图如何将声音信号转化为视觉图谱", level: 2 },
    { type: 'paragraph', html: "<strong>声音语图（Spectrogram）</strong>将录音信号转化为横轴为时间、纵轴为频率的视觉图谱。强音响能量以更亮的颜色呈现。这使得持续母音、谐波、静音及共振峰的变化比普通波形图更易于观察与分析。直观的图谱极大降低了声音分析的门槛。" },
    { type: 'paragraph', html: "分析仪将信号切分为重叠的短帧，应用汉明窗（Hamming Window）并通过快速傅里叶变换（FFT）计算各频率的能量分布。短帧能精准定位事件发生的时间，而频率分辨率则揭示能量集中的位置。受信号处理不确定性原理限制，时间与频率分辨率之间始终存在权衡。" },
    { type: 'diagnostic', variant: 'info', title: "浏览器本地私密处理", html: "在浏览器中私密可视化两段音频样品的频率、时间、音强及估计共振峰（Formant）特征。" },
    { type: 'stats', columns: 3, items: [
      { value: "时间", label: "从左至右读取时间轴" },
      { value: "Hz", label: "频率位置" },
      { value: "能量", label: "通过颜色亮度呈现" }
    ] },
    { type: 'title', text: "理性解读共振峰数据", level: 3 },
    { type: 'paragraph', html: "共振峰（Formant）是由声道形状塑造的共振区域。在语音学中，F1 和 F2 常用于描述母音的高度与发音位置。本分析仪追踪三个频率区域内的平滑峰值，帮助使用者将视觉谱带与 F1、F2、F3 的动态变化联系起来。" },
    { type: 'paragraph', html: "专业共振峰测量通常采用针对说话人定制的线性预测编码（LPC）算法。基音谐波、鼻音化、房间混响及背景噪声均可能导致简易峰值估计产生偏差。请将辅助线作为教学参考，并结合背景中的实际语图进行综合判断。" },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 至 1000 Hz","第一共振区，与开口度及母音高度相关"],["F2","900 至 3000 Hz","第二共振区，与舌位前后相关"],["F3","2000 至 4500 Hz","高阶共振区，受声道整体几何形状影响"]] },
    { type: 'title', text: "频率设置对语图分析的影响", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "较低上限 (4 kHz)", description: "更清晰展示低频声道特征", points: ["适合观察母音", "可能排除高频能量", "并不保证更高精度"] },
      { title: "较高上限 (6/8 kHz)", description: "展示更多高频细节", highlight: true, points: ["适合高音调语音", "清晰显示摩擦音", "垂直压缩低频区域"] }
    ] },
    { type: 'title', text: "两段语音样品的科学对比方法", level: 3 },
    { type: 'paragraph', html: "对比两组图谱在两段录音包含相同母音或短语且录音环境相似时最为有效。显示的差值为峰值位置之间的绝对物理测量值，并不代表相似度百分比或生物特征身份证明。" },
    { type: 'list', items: ["<strong>对比相同的发音内容：</strong> 重复的母音或单词比不同短语更容易对比。","<strong>保持录音条件一致：</strong> 麦克风类型和房间声学对频谱有显著影响。","<strong>结合光标同步聆听：</strong> 将视觉特征与对应的声音时刻精准关联。","<strong>避免做出身份认定：</strong> 相似的语图并不能证明两段录音来自同一说话人。"] },
    { type: 'summary', title: "语图分析仪核心要点总结", items: ["在浏览器本地从兼容音频文件中生成声音语图。","在镜像或平行图板中双样对照分析。","学习声学能量与估计共振峰区域的动态变化。","保持描述性与教学导向，而非司法鉴定。"] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
