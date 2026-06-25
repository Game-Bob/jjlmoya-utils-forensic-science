import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-presumptive-blood-testing-luminol-kastle-meyer-simulator';
const title = '法医推定血液测试模拟器';
const description = '使用 Kastle-Meyer 和鲁米诺试剂模拟法医推定血液测试。区分真实血液与常见假阳性物质。';

const howTo = [
  {
    "name": "选择检测样本",
    "text": "从试管架中选择待测样本，样本包括血液或常见假阳性物质。"
  },
  {
    "name": "选择测试方法",
    "text": "决定进行 Kastle-Meyer 显色测试或鲁米诺发光测试。"
  },
  {
    "name": "添加化学试剂",
    "text": "滴加 Kastle-Meyer 试剂和过氧化氢，或直接使用鲁米诺溶液。"
  },
  {
    "name": "解释反应结果",
    "text": "在黑暗中观察颜色变化或蓝色荧光，以对反应进行分类。"
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "为什么称其为推定测试？",
    "answer": "推定测试是基于催化活性的初步筛选。虽然灵敏度极高，但特异性不足，可能会产生假阳性，必须进行确证测试。"
  },
  {
    "key": "faq-2",
    "question": "Kastle-Meyer 测试假阳性的原因是什么？",
    "answer": "该测试依赖血红素的过氧化物酶样活性。任何含有化学氧化剂、金属离子（如铁锈中的铁）或植物过氧化物酶的物质都会催化显色。"
  },
  {
    "key": "faq-3",
    "question": "鲁米诺化学发光反应是如何发生的？",
    "answer": "鲁米诺在血红蛋白铁催化下与过氧化氢反应。处于激发态的氨基邻苯二甲酸根离子在回到基态时释放蓝光。"
  },
  {
    "key": "faq-4",
    "question": "家用漂白剂会引起假阳性吗？",
    "answer": "会。次氯酸钠是强氧化剂，无需催化剂即可直接氧化酚酞林或鲁米诺，产生快速衰减的强发光。"
  },
  {
    "key": "faq-5",
    "question": "推定测试与确证测试的区别是什么？",
    "answer": "推定测试快速且高灵敏度，用于在现场定位污渍。确证测试则能绝对证实人类血液的存在。"
  }
];

const bibliography = [
  {
    "name": "Kastle-Meyer test - Wikipedia",
    "url": "https://en.wikipedia.org/wiki/Kastle%E2%80%93Meyer_test"
  },
  {
    "name": "Grodsky, M., Wright, K. & Kirk, P. L. (1951). Simplified preliminary blood testing. An improved technique and comparative study of methods. Journal of Criminal Law and Criminology.",
    "url": "https://scholarlycommons.law.northwestern.edu/jclc/vol42/iss1/10/"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "title": "血液测试模拟器",
  "desc": "使用鲁米诺和 Kastle-Meyer 试剂进行虚拟实验室实验，以检测血液并分析假阳性。",
  "configTitle": "实验室控制",
  "sampleLabel": "选择检体样本",
  "reagentLabel": "选择化学试剂",
  "lightsLabel": "照度控制",
  "btnLightsOff": "关闭照明",
  "btnLightsOn": "开启照明",
  "btnReset": "清洗反应皿",
  "resultsTitle": "推定测试结果",
  "sampleBlood": "血液样本（对照组）",
  "sampleRust": "铁锈（氧化铁）",
  "sampleBleach": "漂白剂（次氯酸钠）",
  "samplePotato": "土豆（植物过氧化物酶）",
  "sampleSaliva": "唾液样本",
  "reagentKM": "Kastle-Meyer 试剂",
  "reagentH2O2": "过氧化氢 (H2O2)",
  "reagentLuminol": "鲁米诺溶液",
  "resultTruePositive": "真阳性（检测到血液）",
  "resultFalsePositive": "假阳性（非血液催化剂）",
  "resultNegative": "阴性反应",
  "statusLabel": "反应状态",
  "reactionLabel": "反应解释说明",
  "dropReagentBtn": "滴加化学试剂",
  "activeCompounds": "活性化合物",
  "reactionSpeed": "反应速度",
  "reactionDuration": "反应持续时间",
  "specimenBase": "检体基质",
  "kmPending": "已滴加 Kastle-Meyer 试剂。请添加过氧化氢 (H2O2) 以催化显色反应。",
  "h2o2Only": "已滴加过氧化氢。在没有 Kastle-Meyer 指示剂的情况下无肉眼可见反应。",
  "noReaction": "未观察到反应。样本保持澄清无色。",
  "luminolBlood": "黑暗中立即观察到强烈的蓝色荧光。血红蛋白中的血红素基团催化氧化了鲁米诺。真阳性。",
  "luminolBleach": "立即观察到极强烈的蓝色荧光，但在2秒内迅速衰减。漂白剂直接氧化了鲁米诺。假阳性。",
  "luminolRust": "观察到微弱的蓝色荧光。铁锈中的金属离子微弱地催化了氧化反应，荧光逐渐减弱。假阳性。",
  "luminolPotato": "无可见发光。在这些条件下，土豆过氧化物酶不具备催化氧化鲁米诺的结构。阴性。",
  "luminolNegative": "黑暗中未观察到发光。该化合物不催化鲁米诺氧化。阴性。",
  "kmBlood": "滴加过氧化氢后立即观察到鲜艳的粉红色。血液中的血红素催化氧化了酚酞林为酚酞。真阳性。",
  "kmBleach": "立即出现深粉红色。次氯酸钠在没有过氧化氢的情况下直接氧化了酚酞林。假阳性。",
  "kmRust": "数秒后出现缓慢、微弱的棕粉色。铁锈催化反应的速度非常慢。假阳性。",
  "kmPotato": "延迟后出现缓慢、暗淡的粉红色。土豆过氧化物酶微弱地催化了反应。假阳性。",
  "kmNegative": "未观察到颜色变化。溶液保持无色。阴性。"
},
  seo: [
  {
    "type": "title",
    "text": "法医推定血液测试完全指南",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "推定血液测试是案发现场用于筛查潜在血迹的初步高灵敏度检测方法。在进行复杂的 DNA 鉴定以及高度特异的确证测试之前，刑事侦查人员依赖这些快速测试对衣物、凶器或可疑表面上的潜在生物检材进行快速定位与排查。由于这些测试方法主要靶向血红蛋白中铁血红素的过氧化物酶样活性，因此它们被定义为推定测试。阳性反应结果仅表明血液存在的极大可能性，若要在司法审判中提供决定性证据，必须通过实验室次级确证测试排除其他生化伪影，以确保证据的可信度和法律效力。"
  },
  {
    "type": "title",
    "text": "Kastle-Meyer 显色测试的化学原理与反应步骤",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Kastle-Meyer（KM）测试是一种催化呈色反应，利用无色的还原酚酞（又称酚酞林）被催化氧化为粉红色的酚酞来判定血液的存在。实验操作顺序有极为严苛的要求：首先将酚酞林试剂滴加在提取好的样本上。如果样本中含有血液，血红蛋白中的血红素基团会充当有机催化剂。接着滴加过氧化氢溶液，血红素迅速催化过氧化氢的分解并同时将酚酞林氧化为酚酞，产生肉眼可见的鲜艳粉红色呈色反应。如果呈色反应延迟出现或超过十五秒，通常被视为由于空气中氧气慢速氧化导致的阴性或假阳性结果。"
  },
  {
    "type": "title",
    "text": "鲁米诺化学发光在法医痕迹检验中的应用",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "鲁米诺（C8H7N3O2）是一种在碱性溶液中与氧化剂和过渡金属催化剂反应时，会在黑暗环境中发射出特征性蓝色荧光的化学物质。法医现场勘查人员会对可能被清洗或清除过的犯罪现场大面积喷洒稀释的鲁米诺溶液。当试剂与肉眼难辨的微量血迹接触时，血红蛋白的铁离子将剧烈催化氧化反应，产生处于激发态的氨基邻苯二甲酸根离子。该离子在回归基态时释放蓝光能量。由于这种化学发光强度较低，因此为了进行摄影记录或肉眼识别，现场必须处于绝对黑暗的密闭状态下。"
  },
  {
    "type": "table",
    "headers": [
      "检测检材基质",
      "Kastle-Meyer 呈色特征",
      "鲁米诺化学发光特征",
      "法医学鉴定分类"
    ],
    "rows": [
      [
        "人类血液对照样",
        "加入 H2O2 后瞬间呈鲜艳粉红色。",
        "强烈且持久的蓝青色荧光发光（长达8秒）。",
        "真阳性。血红素提供了高效的化学催化活性。"
      ],
      [
        "家用次氯酸钠漂白剂",
        "在未加入 H2O2 前即瞬间变粉红色。",
        "极强但瞬时衰减的蓝色荧光发光（低于2秒）。",
        "假阳性。强氧化剂无需任何催化剂即可直接反应。"
      ],
      [
        "金属氧化铁（铁锈）",
        "数秒的延迟后呈缓慢而暗淡的棕粉色。",
        "微弱、暗淡且分布不均的蓝色荧光。",
        "假阳性。自由铁离子催化效率极低导致慢反应。"
      ],
      [
        "马铃薯（植物过氧化酶）",
        "明显延迟后出现非常微弱的淡粉红色。",
        "在暗室中无法检测到任何发光现象。",
        "假阳性 (KM) / 阴性 (LUM)。"
      ]
    ]
  },
  {
    "type": "title",
    "text": "区分真实血液和常见假阳性物质的技术方法",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "在痕迹检验中，将真实血液与日常生活中的假阳性物质相区分是一项极其关键的技能。家用洗涤剂（如漂白剂）可不依赖过氧化氢直接氧化呈色指示剂。法医专家通过反应动力学的耗时差异予以鉴别：漂白剂在未滴加过氧化氢前就会引起 KM 试剂显色，且其鲁米诺发光衰减速度极快。此外，植物过氧化物酶（例如马铃薯或洋葱中的酶）在受热时会发生蛋白质变性而完全失去催化活性，而血液中的血红蛋白具有极高的热稳定性，加热处理后仍可正常显色，这为排除植物源干扰提供了有效手段。"
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
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
