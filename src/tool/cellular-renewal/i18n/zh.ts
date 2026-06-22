const slug = 'cellular-renewal-calculator';
const description = '计算自出生以来你身体更新的百分比。基于器官、骨骼和组织的细胞分裂率进行估算。让"忒修斯之船"悖论变得触手可及。';
const title = '细胞更新计算器：最初的"你"还剩下多少？';
const howTo = [
    {
      name: '调整你的年龄',
      text: '将选择器从 1 岁滑动到 105 岁。这是更新计算中最重要的变量。',
    },
    {
      name: '观察核心百分比',
      text: '中间的大数字显示了你当前物质中有多少百分比是"新的"（自出生以来更新的部分）。',
    },
    {
      name: '分析进度条',
      text: '每个进度条代表不同的组织：皮肤/血液、骨骼、器官和大脑。注意大脑几乎没有变化，而皮肤则在不断更新。',
    },
    {
      name: '思考你的身份',
      text: '如果你的 99% 都是新物质，那么你究竟是谁？将此工具作为思考个人连续性和忒修斯之船悖论的起点。',
    },
  ];
const faq = [
    {
      question: '到底什么是"细胞更新"？',
      answer: '这是一种自然过程，衰老或受损的细胞通过凋亡死亡，并由通过有丝分裂产生的新细胞取代。这个过程对于维持组织功能和修复损伤至关重要。',
    },
    {
      question: '为什么大脑更新如此缓慢？',
      answer: '大脑皮层的神经元产生于出生前，通常不会再分裂。这提供了神经系统的稳定性：你的基本"布线"保持不变。然而，神经胶质（支持）细胞确实会更新。记忆存储在连接中，而非原子中。',
    },
    {
      question: '每 7 年我们就变成"全新的人"是真的吗？',
      answer: '这是一种简化，并不准确。你的血液在 4 个月内更新，皮肤在一个月内，骨架在 10 年内。你的大脑基本保持不变。7 年这个数字具有历史意义（亚里士多德提到过），但在生物学上是一个不精确的平均值。',
    },
    {
      question: '如果我的身体 99% 是新的，我依然是同一个人吗？',
      answer: '是的。身份是信息、意识和记忆的连续性，而非原子的连续性。你如同一条河：水流不断更替，但河依然是那条河。"忒修斯之船"悖论表明，身份存在于模式中，而非物质中。',
    },
    {
      question: '哪些组织更新最快？',
      answer: '血液和皮肤处于领先地位。你的骨髓每天产生 2,000 亿个血细胞。你每分钟流失约 30,000 个皮肤细胞。这就是为什么它们愈合得很快且老化迹象显著：从细胞年龄来看，它们很年轻。',
    },
    {
      question: '眼晶状体真的不更新吗？',
      answer: '正确。晶状体细胞是在胚胎发育期间沉积的并伴随终身。在 100 岁时，你晶状体中心的细胞可能和你还在子宫里时一样。它是一个生物时间胶囊。',
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
    noHistory: '无历史记录',
    load: '加载',
    delete: '删除',
    biologicalTimeline: '生物时间线',
    ageUnit: '进化的年份',
    matterNewPercent: '你的物质更新率为',
    atomicRenewal: '原子更新',
    skinAndBlood: '皮肤和血液',
    boneRemodeling: '骨骼重塑',
    organicMatrix: '有机基质',
    perennialCells: '常年细胞',
    disclaimerText: '计算基于同位素研究得出的平均细胞寿命。虽然血液和皮肤在数周内即可更新，但晶状体蛋白和大语言皮层的大部分区域自胚胎发育以来一直保持不变。从物理上讲，你是一个处于不断变化中的动态结构。',
  },
  seo: [
    {
      type: 'title',
      text: '你身体里有多少东西真正属于"你"？细胞更新的科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '你的身体是一条不断流动的河流。每一秒钟，都有数以百万计的细胞死亡并被新的细胞取代。在七年内，你身体里几乎每一个原子都会被替换。然而，这个统计数据具有深刻的误导性，因为你身体不同部位的更新速度截然不同。',
    },
    {
      type: 'paragraph',
      html: '这个悖论被称为<strong>忒修斯之船悖论</strong>，它提出了一个古老的问题：如果你替换了一件物品的所有零件，它还是原来那件吗？在你的案例中，这是一个字面意义上的问题。构成你今天身体的原子并不是 10 年前的那些，但<em>你</em>依然是你。',
    },
    {
      type: 'title',
      text: '细胞周转：你动态身体的蓝图',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '更新速度因组织而异，且差异巨大：',
    },
    {
      type: 'table',
      headers: ['组织', '细胞平均寿命', '完全更新', '描述'],
      rows: [
        ['<strong>血液</strong>', '120 天', '4 个月', '红细胞是最快的。你的骨髓每天产生 2,000 亿个。'],
        ['<strong>皮肤</strong>', '2-4 周', '1 个月', '极速更新。你每分钟损失约 30,000 个皮肤细胞。'],
        ['<strong>骨骼</strong>', '10 年', '十年', '骨架相对保守。即便如此，10 年后，你几乎替换了整个骨架。'],
        ['<strong>器官</strong>', '15 年', '1.5 十年', '肝脏在数月内更新。心脏则需要数年。这是一个节奏的马赛克。'],
        ['<strong>大脑</strong>', '80 年以上（神经元）', '几乎从未更新', '你出生时的皮层神经元会伴随终身。但神经胶质（支持细胞）确实在更新。'],
      ],
    },
    {
      type: 'title',
      text: '眼晶状体：你身上最古老的部分',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '你身体里有一个特殊的结构：<strong>眼晶状体</strong>。构成晶状体的细胞是在胎儿发育期间沉积的，且永远不会被替换。如果你活到 100 岁，你晶状体中心的细胞依然是你还在母亲子宫里时的那些。它们字面上是你身上最古老的部分。',
    },
    {
      type: 'title',
      text: '总更新量计算：权重悖论',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '此计算器使用不同组织的加权平均值：',
    },
    {
      type: 'list',
      items: [
        '<strong>30% 皮肤和血液：</strong> 年轻时几乎完全更新。',
        '<strong>35% 骨架：</strong> 渐进式更新，10 年达到 100%。',
        '<strong>25% 器官：</strong> 更新较慢，因器官而异。',
        '<strong>10% 大脑：</strong> 神经元变化极小，支持结构变化极大。',
      ],
    },
    {
      type: 'paragraph',
      html: '结果是，在 25 岁时，大约 <strong>93% 的当前物质是新的</strong>。到 80 岁时，构成你的原子中，可能有超过 99% 都不同于你出生时的那些。',
    },
    {
      type: 'title',
      text: '哲学启示：身份是信息，而非物质',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果你的身体每十年都是全新的，为什么它还是"你"？答案是身份不在于特定的原子，而在于这些原子所承载的<strong>信息模式</strong>。你就如同一首歌：振动的空气已不相同，但旋律依然存在。',
    },
    {
      type: 'paragraph',
      html: '这具有深远的意义：你的身体是一个过程，而不是一个物体。你是一个在变化中持续存在的自我组织模式。你并不拥有原子；你是一个临时引导它们的结构。',
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

