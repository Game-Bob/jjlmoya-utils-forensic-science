import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'black-hole-event-horizon-simulator';
const title = '黑洞事件视界模拟器：施瓦西半径、光子球与时间膨胀';
const description = '通过交互式的质量、轨道距离、时间膨胀、光子球、逃逸速度和施瓦西半径计算，探索黑洞的事件视界。';

const howTo = [
  {
    name: '选择黑洞质量',
    text: '移动质量滑块，从恒星质量黑洞到超大质量黑洞，实时观察施瓦西半径的变化。',
  },
  {
    name: '将探测器移至视界附近',
    text: '以施瓦西半径为单位设置距离，比较安全的外部轨道、光子球区域以及事件视界的边缘。',
  },
  {
    name: '检查相对论效应',
    text: '观察逃逸速度、引力时间膨胀、红移和轨道周期，了解在视界附近直觉为何失效。',
  },
  {
    name: '比较关键半径',
    text: '利用事件视界、光子球和ISCO的参考环，理解非旋转黑洞周围的不同物理边界。',
  },
];

const faq = [
  {
    question: '什么是黑洞的事件视界？',
    answer: '事件视界是逃逸速度达到光速的边界。一旦物体跨越此界限，包括光在内的任何信号都无法返回外部宇宙。',
  },
  {
    question: '施瓦西半径意味着什么？',
    answer: '施瓦西半径是针对非旋转、不带电黑洞定义的事件视界半径。该半径与质量成正比，即质量加倍，视界半径也加倍。',
  },
  {
    question: '什么是光子球？',
    answer: '光子球位于1.5倍施瓦西半径处，是光线能够以不稳定轨道绕黑洞运行的区域。微小的扰动即会导致光子逃逸或坠入黑洞。',
  },
  {
    question: '什么是ISCO？',
    answer: 'ISCO是"最内层稳定圆形轨道"（Innermost Stable Circular Orbit）的缩写。对于非旋转黑洞，它位于3倍施瓦西半径（即6倍引力半径）处，是有质量粒子能维持的最后稳定轨道。',
  },
  {
    question: '为什么时间膨胀在视界附近会显著增加？',
    answer: '在施瓦西时空中，处于更强引力场中的时钟相对于远处观测者走得更慢。随着探测器接近事件视界，时间膨胀因子趋近于零。',
  },
  {
    question: '这个模拟器能模拟旋转黑洞吗？',
    answer: '不能。本模拟器基于施瓦西度规，假设黑洞不旋转且不带电。真实的黑洞多为旋转黑洞，其自转会改变视界大小、ISCO位置及吸积盘动力学。',
  },
  {
    question: '为什么超大质量黑洞的潮汐力反而较小？',
    answer: '视界处的潮汐梯度随黑洞质量的增加而减小。小型黑洞会在视界附近剧烈撕裂物体，而超大质量黑洞在此处的局部潮汐力相对温和。',
  },
  {
    question: '这是真实的黑洞照片吗？',
    answer: '这是一个教育示意图，而非光线追踪模拟。光环和吸积盘按施瓦西半径缩放，旨在让用户直观比较不同的物理区域。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: '事件视界场图',
    visualCaption: '探测器在缩放后的施瓦西时空中移动。明亮的参考环标记了视界、光子球和最内层稳定圆形轨道。',
    controlsTitle: '黑洞控制',
    eventHorizon: '事件视界',
    photonSphere: '光子球',
    isco: 'ISCO',
    rsLabel: '施瓦西半径',
    diameterLabel: '直径',
    timeLabel: '时间膨胀',
    redshiftLabel: '红移',
    statusSafe: '位于稳定轨道区外',
    statusPhoton: '位于光子球区内',
    statusInside: '视界内',
    diameter: '视界直径',
    lightCrossing: '光穿行时间',
    timeDilation: '相对远处观测者的时钟速率',
    redshift: '引力红移',
    mass: '黑洞质量',
    distance: '探测器距离',
    speed: '轨道速度',
    escapeVelocity: '逃逸速度',
    orbitalPeriod: '轨道周期',
    tidalGradient: '潮汐梯度',
    kilometerUnit: '公里',
    millisecondUnit: '毫秒',
    secondUnit: '秒',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: '太阳质量',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 太阳质量',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: '黑洞事件视界模拟器：施瓦西半径、光子球与时间膨胀',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '本模拟器将施瓦西黑洞的核心概念转化为交互式视觉模型。通过调整黑洞质量、移动探测器，用户可以直观比较事件视界、光子球、最内层稳定圆形轨道、逃逸速度、引力红移及时间膨胀的响应关系。',
    },
    {
      type: 'paragraph',
      html: '本工具专为天文爱好者、物理教师及科普探索者设计，通过将数值与空间图表结合，帮助用户理解黑洞的本质：事件视界并非物质表面，为何光子具有特殊的不稳定轨道，以及为何稳定的圆周运动在视界外停止。',
    },
    {
      type: 'title',
      text: '事件视界半径的计算方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '对于非旋转、不带电黑洞，其事件视界半径即为<strong>施瓦西半径</strong>。计算公式为<strong>Rs = 2GM / c^2</strong>，其中G为万有引力常数，M为质量，c为光速。1个太阳质量对应的施瓦西半径约为2.95公里。',
    },
    {
      type: 'paragraph',
      html: '施瓦西半径与质量呈线性关系，因此10倍太阳质量的黑洞半径约为29.5公里；而像人马座A*那样400万倍太阳质量的黑洞，其半径约为1180万公里。模拟器采用对数滑块，方便用户同时探索恒星级与超大质量黑洞。',
    },
    {
      type: 'table',
      headers: ['区域', '施瓦西半径倍数', '含义'],
      rows: [
        ['事件视界', '1.0 Rs', '逃逸速度等于光速的单向边界'],
        ['光子球', '1.5 Rs', '光线可在此做不稳定的圆周运动'],
        ['ISCO', '3.0 Rs', '有质量粒子的最内层稳定圆轨道'],
        ['弱引力场', '6 Rs及以上', '引力较弱，轨道易于维持稳定'],
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
      description,
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