import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperature-timeline';
const description = '探索地球在整个地质时期的平均气温历史。';
const title = '地球平均气温时间线';

const howTo = [
  {
    name: '选择地质时期',
    text: '点击刻度尺上的刻度。',
  },
  {
    name: '检查温度',
    text: '读取全球平均温度。',
  },
  {
    name: '观察行星',
    text: '观察画布对热状态的反应。',
  },
];

const faq = [
  {
    "question": "地球过去的温度比现在高吗？",
    "answer": "是的，地球曾经历过比现在温暖得多的气候。在中生代（恐龙时代）和始新世早期，地球处于没有极地冰帽的温室状态，全球平均气温超过 22 度，比今天的平均气温高出约 7 到 8 度。然而，向这些时期的过渡是在数百万年的时间尺度上发生的，从而允许生物进行进化适应。"
  },
  {
    "question": "是什么导致了'雪球地球'现象？",
    "answer": "雪球地球（全球冰期）主要发生在新生代（约 7 亿年前）。它是由于超大陆罗迪尼亚裂解后，硅酸盐岩石的化学风化加速，导致温室气体极端减少而触发的。冰从两极延伸到赤道，反射太阳辐射（反照率效应），并将地球锁在全球冻结循环中，直到数百万年火山二氧化碳积累后才被打破。"
  },
  {
    "question": "地球如何长期调节自身温度？",
    "answer": "地球拥有一个由地质碳循环控制的自然温室，主要由板块构造和硅酸盐风化调节。当行星变暖时，酸雨与硅酸盐岩石反应更快，将二氧化碳从大气中吸收到海底沉积为碳酸盐，从而减少温室效应。如果行星变冷，风化减少，但火山活动继续释放二氧化碳，使地球逐渐再次变暖。"
  },
  {
    "question": "人新世的气候变化与地质过去有何不同？",
    "answer": "根本区别在于变化的速度。虽然地质过去的自然气候过渡通常发生在数万年或数百万年的时间尺度上（为生物迁移和进化留出余地），但人新世的变暖发生在几十年内。这种热变化速度比几乎所有记录在案的先前事件都要快指数级，超出了当前生物圈的适应能力，导致加速的物种大灭绝。"
  },
  {
    "question": "什么是古新世-始新世极热事件（PETM）？",
    "answer": "PETM 是发生在大约 5600 万年前的极端全球变暖事件。它是由于碳快速而大量地注入大气（可能来自海洋甲烷水合物的释放或北大西洋火山活动）引起的，在几千年中将全球温度提高了 5 到 8 度。它被认为是现代气候变化的最佳地质模拟，导致了严重的海洋酸化和底栖生物的大规模灭绝。"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '地球气温时间线',
    sub: '探索地球的地质气候时期',
    ageLabel: '年龄:',
    tempLabel: '平均气温:',
    selectPrompt: '选择地质时期。',
    epoch_archean_name: '太古宙',
    epoch_archean_age: '40亿至25亿年前',
    epoch_archean_desc: '富含甲烷和二氧化碳的极热地球。',
    epoch_proterozoic_name: '元古宙',
    epoch_proterozoic_age: '25亿至5.41亿年前',
    epoch_proterozoic_desc: '氧气上升导致休伦冰期及雪球地球。',
    epoch_paleozoic_name: '古生代',
    epoch_paleozoic_age: '5.41亿至2.52亿年前',
    epoch_paleozoic_desc: '海洋生命爆发与向陆地迁移。',
    epoch_mesozoic_name: '中生代',
    epoch_mesozoic_age: '2.52亿至6600万年前',
    epoch_mesozoic_desc: '温室气候下的恐龙时代。',
    epoch_cenozoic_name: '新生代',
    epoch_cenozoic_age: '6600万年前至今',
    epoch_cenozoic_desc: '逐渐冷却并走向第四纪冰期。',
    epoch_anthropocene_name: '人新世',
    epoch_anthropocene_age: '现代与未来',
    epoch_anthropocene_desc: '温室气体排放导致的快速变暖。',
  },
  seo: [
  {
    "type": "title",
    "text": "历史气候学：地球在整个地质时期的热演化",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "地球的气候从未停滞不前。在它存在了 45 亿年的历史中，我们的星球一直在两个基本状态之间摆动：温室状态（greenhouse）和冰室状态（icehouse）。理解这些大尺度的波动不仅是一个地质学上的好奇，而且是理解当前人为地球变暖速度和严重性的不可或缺的工具。通过研究海洋化石中的氧同位素和冰芯中捕获的气泡，古气候学家们已经重建了过去地球温度的精确记录。"
  },
  {
    "type": "title",
    "text": "按地质宙和代划分的温度记录",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "地球的历史分为由生物学和地质学变化定义的主要时间间隔。以下是该时间线中可用的每个时期的估计平均温度列表："
  },
  {
    "type": "table",
    "headers": [
      "地质年代",
      "大约年龄",
      "平均温度",
      "气候学里程碑和特征"
    ],
    "rows": [
      [
        "<strong>太古宙</strong>",
        "40 亿至 25 亿年前",
        "30 °C",
        "早期炎热的地球。微弱的年轻太阳由富含甲烷的极端温室效应补偿。"
      ],
      [
        "<strong>元古宙</strong>",
        "25 亿至 5.41 亿年前",
        "12 °C",
        "游离氧的增加；导致甲烷崩溃并引发全球冰期（'雪球地球'）。"
      ],
      [
        "<strong>古生代</strong>",
        "5.41 亿至 2.52 亿年前",
        "20 °C",
        "巨大的海洋生物多样性和陆地殖民。以火山爆发和极端变暖结束。"
      ],
      [
        "<strong>中生代</strong>",
        "2.52 亿至 6600 万年前",
        "22 °C",
        "极地无冰的温室时代代表（超级温室）。恐龙的黄金时代。"
      ],
      [
        "<strong>新生代</strong>",
        "6600 万年前至今",
        "14 °C",
        "由大陆洋流驱动的渐进式冷却，导致第四纪冰期循环。"
      ],
      [
        "<strong>人新世</strong>",
        "现代与未来",
        "15.2 °C",
        "人为温室气体排放引起的急剧而异常的变暖。"
      ]
    ]
  },
  {
    "type": "title",
    "text": "过去的热极端：从全球冰期到中生代酷热",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "行星的历史包括极端的极端气候事件。在元古宙，原始光合作用大规模释放氧气，氧化了大气中的甲烷，使地球陷入休伦冰期，这是'雪球地球'时期之一，冰川延伸到赤道纬度。相反，在中生代和古新世期间，强烈的板块火山活动使大气中的二氧化碳饱和，将全球平均温度提高到当前水平的 10 度以上。这些时期完全没有极地冰，在北极纬度地区生长着温带森林，并允许恐龙等变温动物繁衍。"
  },
  {
    "type": "title",
    "text": "在地质尺度上驱动行星气候的因素",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "地球的长期气候是受几个相互关联的自然机制支配的微妙热力学平衡的结果："
  },
  {
    "type": "list",
    "items": [
      "<strong>米兰科维奇循环:</strong> 地球轨道离心率、自转轴倾角和岁差的微小周期性变化改变了接收到的太阳辐射。",
      "<strong>硅酸盐-碳酸盐碳循环:</strong> 长期地球化学温室。雨水吸收二氧化碳并将其转化为硅酸盐沉积在海洋中。",
      "<strong>板块构造:</strong> 大陆漂移改变了全球洋流，并形成了加速二氧化碳化学风化的山脉。",
      "<strong>反照率反馈效应:</strong> 冰雪的存在反射阳光，通过反馈循环进一步冷却行星。"
    ]
  },
  {
    "type": "title",
    "text": "人新世：生物圈中前所未有的热加速度",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "从稳定的全新世向人新世的过渡标志着人类对地球系统产生直接影响的时代到来。与过去热事件（其轨道或火山原因在数万年的时间尺度上发生作用）不同，当前的变暖是由数十年来大量燃烧数百万年积累的化石碳所驱动的。当前温室气体的积累速度和全球平均温度的上升速度明显快于二叠纪末大灭绝或 PETM 时期，给地球的生物多样性带来了前所未有的适应挑战。"
  }
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
