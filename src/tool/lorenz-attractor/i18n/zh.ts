const slug = 'lorenz-attractor';
const title = '洛伦兹吸引子混沌模拟器：3D蝴蝶效应';
const description = '通过这个交互式3D洛伦兹吸引子模拟探索混沌理论。可视化蝴蝶效应。';

const howTo = [
  {
    "name": "旋转画布",
    "text": "在3D视口上点击并拖动以旋转吸引子。"
  },
  {
    "name": "调节滑块",
    "text": "修改Sigma、Rho和Beta参数以观察混沌的产生。"
  },
  {
    "name": "观察发散",
    "text": "观察两条轨迹之间的距离是如何呈指数级增长的。"
  },
  {
    "name": "暂停与重置",
    "text": "使用控制按钮暂停模拟或重置参数。"
  }
];

const faq = [
  {
    "question": "什么是洛伦兹吸引子？",
    "answer": "洛伦兹吸引子是洛伦兹方程组的一组混沌解。"
  },
  {
    "question": "什么是蝴蝶效应？",
    "answer": "非线性系统中对初始条件的敏感依赖性，微小的初始差异会导致巨大的长期差异。"
  },
  {
    "question": "参数代表什么？",
    "answer": "Sigma代表普朗特数，Rho代表瑞利数，Beta与物理尺寸几何比相关。"
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "已复制",
  "noHistory": "无历史记录",
  "load": "加载",
  "delete": "删除",
  "title": "洛伦兹吸引子",
  "subTitle": "决定论混沌",
  "parameterControls": "系统参数",
  "simulationSpeed": "速度 (dt)",
  "initialPerturbation": "初始微扰 (dx)",
  "trajectories": "轨迹",
  "distance": "发散距离",
  "exponentialGrowth": "指数发散",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "坐标",
  "divergenceExplanation": "发散图显示了两条轨迹之间的欧几里得距离随时间的变化。"
},
  seo: [
    { type: 'title', text: "确定性混沌：理解洛伦兹方程", level: 2 },
    { type: 'paragraph', html: "洛伦兹系统是非线性动力学和混沌理论中的里程碑式成果。1963年，气象学家兼数学家<strong>爱德华·洛伦兹</strong>从大气对流的简化模型中推导出该方程组。洛伦兹将复杂的流体动力学方程简化为三个耦合的常微分方程。他发现这些简单的确定性方程能够产生高度复杂、非周期性的混沌行为，从而彻底改变了我们对物理系统的认识。" },
    { type: 'paragraph', html: "该系统由三个耦合微分方程定义，在时间维度上追踪三维相空间中的坐标：" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x)：</strong>描述对流运动的速率。参数 &sigma;（普朗特数）表示流体粘度与导热系数之比。",
      "<strong>dy/dt = x * (&rho; - z) - y：</strong>代表上升和下降对流流之间的温度差。&rho;（瑞利数）代表对流加热强度。",
      "<strong>dz/dt = x * y - &beta; * z：</strong>追踪垂直温度剖面的畸变。&beta; 是对流物理单元的几何纵横比。",
      ],
    },
    { type: 'title', text: "蝴蝶效应：对初始条件的敏感依赖", level: 3 },
    { type: 'paragraph', html: "混沌系统的决定性特征是其<strong>对初始条件的敏感依赖</strong>，通俗称为<strong>蝴蝶效应</strong>。本模拟器通过运行两条轨迹（T1为青色，T2为粉色）来展示这一现象，两条轨迹的起始点仅有微小差异。起初，它们几乎沿同一路径运行；短时间后，非线性项将差异放大，两条路径完全分叉。" },
    {
      type: 'table',
      headers: ["参数","标准值","物理含义","改变时的行为"],
      rows: [
        ["&sigma; (西格玛)","10.0","普朗特数","决定流体内部摩擦。值越大，速度变化对温度梯度的响应越快。"],
        ["&rho; (罗)","28.0","瑞利数","&rho; = 1以下，原点是唯一的稳定点。在 &rho; = 28时，系统完全进入混沌状态。"],
        ["&beta; (贝塔)","8/3 (2.667)","几何纵横比","控制对流单元的宽高比，改变轨道的尺度和旋转速度。"],
      ],
    },
    { type: 'title', text: "相空间、奇怪吸引子与分形", level: 3 },
    { type: 'paragraph', html: "在经典物理学中，轨迹最终稳定在不动点，或以极限环的形式重复。洛伦兹系统两者皆不：轨迹在三维空间中无限盘旋而从不自我交叉，形成豪斯多夫维数 约 2.06 的分形几何<strong>奇怪吸引子</strong>。" },
    { type: 'title', text: "混沌理论在科学中的应用", level: 3 },
    { type: 'paragraph', html: "洛伦兹吸引子的启示远不止于气象预报，已对众多现代研究领域产生深远影响：" },
    {
      type: 'list',
      items: [
      "<strong>气象学：</strong>确立了天气可预测性的根本限制，催生了集合预报方法。",
      "<strong>密码学：</strong>混沌轨道确定但不可预测的特性被用于生成安全的伪随机密钥，加密敏感数据流。",
      "<strong>心脏病学：</strong>用于心脏节律建模，健康心脏呈现混沌特征，而周期性节律可能预示病理状态。",
      "<strong>工程学：</strong>通过分析并规避悬索桥和机械系统中的混沌共振，助力设计稳定结构。",
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
