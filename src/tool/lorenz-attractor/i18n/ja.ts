const slug = 'lorenz-attractor';
const title = 'ローレンツ・アトラクター・カオス・シミュレーター：3Dバタフライ・エフェクト';
const description = 'このインタラクティブな3Dローレンツ・アトラクター・シミュレーションでカオス理論を探索してください。';

const howTo = [
  {
    "name": "キャンバスを回転する",
    "text": "3Dビューポート上をドラッグして、アトラクターを回転させます。"
  },
  {
    "name": "スライダーを調整する",
    "text": "Sigma、Rho、Betaパラメーターを調整してカオスを観察します。"
  },
  {
    "name": "発散を観察する",
    "text": "2つの軌道間の距離が指数関数的に増大する様子を観察します。"
  },
  {
    "name": "一時停止とリセット",
    "text": "コントロールボタンを使用して、シミュレーションの停止や初期化を行います。"
  }
];

const faq = [
  {
    "question": "ローレンツ・アトラクターとは何ですか？",
    "answer": "ローレンツ・アトラクターは、ローレンツ方程式系のカオス的な解の集合です。"
  },
  {
    "question": "バタフライ・エフェクトとは何ですか？",
    "answer": "初期条件に対する鋭敏な依存性のことで、わずかな差が将来的に決定的な違いを生みます。"
  },
  {
    "question": "各パラメーターは何を意味しますか？",
    "answer": "Sigmaはプラントル数、Rhoはレイリー数、Betaはアスペクト比に関連します。"
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "コピーされました",
  "noHistory": "履歴なし",
  "load": "読み込み",
  "delete": "削除",
  "title": "ローレンツ・アトラクター",
  "subTitle": "決定論的カオス",
  "parameterControls": "システムパラメーター",
  "simulationSpeed": "速度 (dt)",
  "initialPerturbation": "初期微小差 (dx)",
  "trajectories": "軌道",
  "distance": "発散距離",
  "exponentialGrowth": "指数関数的発散",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "座標",
  "divergenceExplanation": "発散グラフは、2つの軌道間のユークリッド距離の経時変化を示しています。"
},
  seo: [
    { type: 'title', text: "決定論的カオス: ローレンツ方程式を理解する", level: 2 },
    { type: 'paragraph', html: "ローレンツ系は、非線形力学とカオス理論における歴史的な定式化です。1963年に気象学者・数学者の<strong>エドワード・ローレンツ</strong>によって導出されたこのモデルは、大気対流の単純化された表現から生まれました。ローレンツは複雑な流体力学方程式を3つの連立常微分方程式に単純化しました。これらの単純で決定論的な方程式が複雑・非周期的・カオス的な挙動を生み出せるという発見は、物理系に対する私たちの理解を一変させました。" },
    { type: 'paragraph', html: "この系は、3次元位相空間における座標を時間で追う3つの連立微分方程式で定義されます:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> 対流運動の速度を表します。パラメータ &sigma;（プラントル数）は流体粘性と熱伝導率の比を表します。",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> 上昇・下降対流電流間の温度差を表します。&rho;（レイリー数）は対流加熱の強度を表します。",
      "<strong>dz/dt = x * y - &beta; * z:</strong> 垂直温度プロファイルの歪みを追います。&beta; は対流セルの幾何学的アスペクト比です。",
      ],
    },
    { type: 'title', text: "バタフライ効果: 初期条件への鋭敏な依存性", level: 3 },
    { type: 'paragraph', html: "カオス系の決定的特性は<strong>初期条件への鋭敏な依存性</strong>であり、一般に<strong>バタフライ効果</strong>として知られています。このシミュレーターでは、わずかな初期分離を持つ2つの軌道（T1：シアン、T2：ピンク）を実行することでこれを示します。最初はほぼ同じ経路をたどりますが、短時間後に非線形項が差を増幅させ、経路は完全に分岐します。" },
    {
      type: 'table',
      headers: ["パラメータ","標準値","物理的意味","変更時の挙動"],
      rows: [
        ["&sigma; (シグマ)","10.0","プラントル数","流体の内部摩擦を決定します。値が大きいほど、温度勾配に対する速度変化の反応が速くなります。"],
        ["&rho; (ロー)","28.0","レイリー数","&rho; = 1未満では原点が唯一の安定点です。&rho; = 28でシステムは完全にカオス状態になります。"],
        ["&beta; (ベータ)","8/3 (2.667)","幾何学的アスペクト比","対流セルの幅対高さの比を制御します。軌道のスケールと回転速度を変更します。"],
      ],
    },
    { type: 'title', text: "位相空間、奇妙なアトラクター、フラクタル", level: 3 },
    { type: 'paragraph', html: "古典物理学では、軌道は最終的に固定点に落ち着くか、限界サイクルとして繰り返します。ローレンツ系はそのどちらも行いません: 経路は3次元で自身と交差することなく無限に回転し、ハウスドルフ次元 約 2.06 のフラクタル幾何学を持つ<strong>奇妙なアトラクター</strong>を形成します。" },
    { type: 'title', text: "科学におけるカオス理論の応用", level: 3 },
    { type: 'paragraph', html: "ローレンツアトラクターから得られた教訓は気象予測をはるかに超え、多くの現代的な研究分野に影響を与えました:" },
    {
      type: 'list',
      items: [
      "<strong>気象学:</strong> 天気予測可能性の根本的な限界を確立し、アンサンブル予報手法につながりました。",
      "<strong>暗号理論:</strong> カオス軌道の決定論的でありながら予測不可能な性質は、安全な擬似乱数鍵の生成や機密データの暗号化に使用されます。",
      "<strong>心臓病学:</strong> 心臓リズムのモデル化に使用され、健康な心臓はカオス的特性を示すのに対し、周期的リズムは病理を示す場合があります。",
      "<strong>工学:</strong> 吊り橋や機械システムのカオス共振を分析・回避することで、安定した構造物の設計を支援します。",
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
