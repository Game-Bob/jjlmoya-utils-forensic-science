const slug = 'microwave-leak-detector';
const description = '通过测量 WiFi 网络的实时干扰，分析您的微波炉是否正在泄漏辐射。一款科学的安全检测工具。';
const title = '微波泄漏检测器：WiFi 干扰可视化工具';
const howTo = [
    {
      name: '连接到 2.4GHz WiFi 网络',
      text: '确保您的手机或笔记本电脑没有连接到 5GHz 频段，以便干扰是可以被测量的。',
    },
    {
      name: '开始基础延迟测试',
      text: '在微波炉关闭的情况下按下开始按钮，以建立稳定的连接基准。',
    },
    {
      name: '开启微波炉',
      text: '加热一杯水 30-60 秒，并拿着设备站在微波炉附近。',
    },
    {
      name: '分析实时图表',
      text: '观察设备运行时延迟是否升至 100-200ms 以上，或者是否发生丢包。',
    },
  ];
const faq = [
    {
      question: '网站是如何检测我的微波炉的？',
      answer: '我们不使用神奇的传感器，而是利用网络延迟。2.4GHz WiFi 和微波炉都在相同的频率（约 2450 MHz）下工作。如果微波炉屏蔽失效，它会产生与 WiFi 冲突的"噪声"，从而剧烈增加延迟（Ping）。',
    },
    {
      question: '如果我的微波炉有泄漏，危险吗？',
      answer: '轻微的 WiFi 干扰是正常的，并不意味着有即刻的健康风险，因为功率会随距离迅速衰减。然而，大规模泄漏表明炉门密封或金属网性能不佳，应检查以确保技术安全。',
    },
    {
      question: '为什么测试不能在 5GHz WiFi 下运行？',
      answer: '因为 5GHz WiFi 的频段远高于微波炉的频率。为了使测试有效，您的设备必须连接到路由器的 2.4GHz 网络。',
    },
    {
      question: '图表上的延迟尖峰意味着什么？',
      answer: '微波炉运行期间持续出现的尖峰表明电磁信号正在"逃逸"并使空气饱和，导致 WiFi 数据包无法按时送达。',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: '已复制',
    noHistory: '暂无历史记录',
    load: '加载',
    delete: '删除',
    microwaveDetection: '微波检测',
    shieldingAnalysis: '屏蔽分析',
    startTest: '开始测试',
    stopTest: '停止测试',
    waitingForStart: '等待开始...',
    detectingInterference: '正在检测干扰...',
    baseLevel: '基础水平',
    activeLevel: '活动水平',
    leakProbability: '泄漏概率',
    lowLeak: '低',
    mediumLeak: '中',
    highLeak: '高',
    pingLabel: '延迟 (ms)',
    packetLossLabel: '丢包率 (%)',
    rfInterferenceMonitor: '射频干扰监测',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / 抖动',
    systemReady: '系统就绪',
    physicalRequirement: '硬件要求',
    physicalDesc: '此检测器利用 2.4GHz 频段（微波频率）的干扰。为了正常工作，请确保您已连接到 2.4GHz WiFi 网络（而非 5GHz/6GHz），或者在微波炉附近使用您的手机。',
    understandStart: '明白了，开始扫描',
    rfInterferenceTitle: '干扰监测器',
    connectToAnalyze: '连接以开始热干扰分析。',
    audioFeedback: '音频反馈',
    muteUnmute: '静音 / 取消静音',
    static: '静态',
  },
  seo: [
    {
      type: 'title',
      text: '波物理学：您的微波炉真的在泄漏辐射吗？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '微波炉是现代厨房中最被误解的电器。它被纯粹主义者厌恶，被务实主义者喜爱，它隐藏着被禁锢的能量与外部世界之间不断的博弈。',
    },
    {
      type: 'paragraph',
      html: '从纯粹的物理角度来看，微波炉是一个 <strong>空腔谐振器</strong>，旨在利用特定频率（<strong>2.45 GHz</strong>）的电磁辐射轰击水分子。这个频率并非随意设定；它是引起水粒子偶极振荡所必需的，从而通过摩擦产生热量。问题在于，这正是 802.11b/g/n WiFi 标准所使用的频率。',
    },
    {
      type: 'title',
      text: '电磁干扰 (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '任何在 2.4GHz 频段运行的 WiFi 设备都在与您的微波炉争夺同一片"空间"。在一个完美的微波炉中，<strong>法拉第笼</strong>（即您在炉门和内壁上看到的金属网）应 100% 阻隔能量。',
    },
    {
      type: 'paragraph',
      html: '然而，长远来看，没有任何屏蔽笼是完美的。炉门密封条、磁性搭扣和金属磨损都可能导致少量能量逸出。虽然这些水平通常远低于人体安全限值，但对于 WiFi 网卡来说却是<strong>巨大</strong>的干扰，会导致延迟、丢包以及我们工具测量的特征性"抖动"。',
    },
    {
      type: 'title',
      text: '自制法拉第笼测试',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '有一种非常简单的物理方法可以检查微波炉屏蔽的基本状态，尽管它不如我们的数字抖动测量精确：',
    },
    {
      type: 'list',
      items: [
        '<strong>步骤 1 - 手机：</strong> 将手机放入微波炉内（<strong>切记严禁开启微波炉！</strong> 只需关上炉门即可）。',
        '<strong>步骤 2 - 拨打：</strong> 尝试从另一台设备拨打该手机。如果手机响了，说明法拉第笼有缺陷或未针对蜂窝频率进行优化。如果提示"不在服务区"，则说明屏蔽工作正常。',
      ],
    },
    {
      type: 'title',
      text: '迷信 vs 科学事实',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"微波会改变水分子的结构"</strong> - 错误。微波辐射是 <em>非电离辐射</em>。它没有足够的能量来打破化学键或改变 DNA。它只是使水分子振动，从而增加其动能（温度）。',
        '<strong>"辐射会累积在食物中"</strong> - 错误。微波就像光：一旦关掉开关，它们就消失了。加热后的食物不会发出微波辐射，只会像营火或平底锅一样发出红外辐射（热量）。',
        '<strong>"盯着转盘看会损伤眼睛"</strong> - 部分属实。炉门玻璃设计有金属网，可以阻隔 2.45GHz 波长的辐射。然而，如果金属网损坏，玻璃将无法阻挡微波。眼睛的晶状体对热量非常敏感且血液循环较差，因此长时间直接暴露（在泄漏点附近）可能会导致热致白内障。',
      ],
    },
    {
      type: 'title',
      text: '此数字检测器是如何工作的？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '我们的工具并不直接测量辐射（智能手机没有相关传感器），但它测量辐射的<strong>主要症状</strong>。当 2.45GHz 的辐射分子从微波炉逃逸时，它会与您设备的 WiFi 信号"碰撞"。这会导致：',
    },
    {
      type: 'list',
      items: [
        '<strong>数据包重传：</strong> 路由器检测到消息到达时已损坏，必须重新发送，从而增加了延迟。',
        '<strong>抖动变化：</strong> 这是衡量响应时间不稳定性的指标。高抖动是存在大规模外部干扰的明确信号。',
        '<strong>性能下降：</strong> 由于射频频谱饱和，传输速度骤降。',
        '<strong>背景噪声：</strong> 微波炉注入的噪声提高了"噪声底限"，使设备难以区分真实数据和电磁混乱。',
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

