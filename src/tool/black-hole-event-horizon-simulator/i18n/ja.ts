import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'black-hole-event-horizon-simulator';
const title = 'ブラックホール事象の地平面シミュレーター';
const description = 'ブラックホールの事象の地平面を、質量、軌道距離、時間の遅れ、光子球、脱出速度、シュワルツシルト半径のインタラクティブな計算で探索しましょう。';

const howTo = [
  {
    name: 'ブラックホールの質量を選ぶ',
    text: '質量スライダーを動かして、恒星質量ブラックホールから超大質量ブラックホールまで変化させ、シュワルツシルト半径がリアルタイムで変化する様子を観察しましょう。',
  },
  {
    name: '探査機を地平面の近くに移動する',
    text: 'シュワルツシルト半径単位で距離を設定し、安全な外部軌道、光子球領域、事象の地平面の端を比較しましょう。',
  },
  {
    name: '相対論的効果を調べる',
    text: '脱出速度、重力による時間の遅れ、赤方偏移、公転周期を読み取って、地平面の近くで日常的な直感がなぜ通用しなくなるのかを理解しましょう。',
  },
  {
    name: '名前付き半径を比較する',
    text: '事象の地平面、光子球、ISCOのガイドリングを使って、非回転ブラックホールの周りの異なる境界を理解しましょう。',
  },
];

const faq = [
  {
    question: 'ブラックホールの事象の地平面とは何ですか？',
    answer: '事象の地平面とは、脱出速度が光速に達する境界です。物体がこれを越えると、光速以下のいかなる信号も外部の宇宙に戻ることができません。',
  },
  {
    question: 'シュワルツシルト半径とは何を意味しますか？',
    answer: 'シュワルツシルト半径は、非回転・無電荷のブラックホールにおける事象の地平面の半径です。質量に比例して大きくなるため、質量が2倍になれば地平面の半径も2倍になります。',
  },
  {
    question: '光子球とは何ですか？',
    answer: '光子球はシュワルツシルト半径の1.5倍の位置にある領域で、光がブラックホールの周りを不安定な軌道で周回できます。わずかな摂動で光子は外側へ脱出するか、内側へ落下します。',
  },
  {
    question: 'ISCOとは何ですか？',
    answer: 'ISCOは最も内側の安定した円軌道を意味します。非回転ブラックホールの場合、シュワルツシルト半径の3倍（重力半径の6倍）に位置し、質量を持つ粒子がとりうる最後の安定した円軌道を示します。',
  },
  {
    question: '地平面の近くで時間の遅れが大きくなるのはなぜですか？',
    answer: 'シュワルツシルト時空では、重力場のより深くにある時計は遠方の観測者に比べて遅く刻まれます。表示される係数は、探査機が事象の地平面に近づくにつれてゼロに近づきます。',
  },
  {
    question: 'このシミュレーターは回転するブラックホールをモデル化できますか？',
    answer: 'いいえ。このシミュレーターはシュワルツシルト解を使用しており、スピンと電荷がないことを前提としています。実際の天体物理学上のブラックホールは多くの場合回転しており、スピンは地平面の大きさ、ISCOの位置、円盤の振る舞いを変化させます。',
  },
  {
    question: '超大質量ブラックホールの地平面での潮汐力が弱いのはなぜですか？',
    answer: '地平面での潮汐勾配はブラックホールの質量が大きくなるほど減少します。小型の恒星質量ブラックホールは地平面近くで物体を激しく引き伸ばすことができますが、超大質量ブラックホールではその境界での局所的な勾配がより穏やかになります。',
  },
  {
    question: 'この可視化は実際のブラックホール画像を示していますか？',
    answer: 'これは教育用の図であり、レイトレーシングによる観測ではありません。リングと円盤は簡略化されたシュワルツシルト半径に合わせてスケーリングされており、物理的な領域を比較しやすくしています。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: '事象の地平面フィールドマップ',
    visualCaption: '探査機はスケーリングされたシュワルツシルト時空を移動します。明るいガイドリングは地平面、光子球、最も内側の安定した円軌道を示しています。',
    controlsTitle: 'ブラックホール制御',
    eventHorizon: '事象の地平面',
    photonSphere: '光子球',
    isco: 'ISCO',
    rsLabel: 'シュワルツシルト半径',
    diameterLabel: '直径',
    timeLabel: '時間の遅れ',
    redshiftLabel: '赤方偏移',
    statusSafe: '安定軌道領域の外側',
    statusPhoton: '光子球領域の内側',
    statusInside: '地平面の限界',
    diameter: '地平面の直径',
    lightCrossing: '光の横断時間',
    timeDilation: '遠方観測者との時計の比率',
    redshift: '重力赤方偏移',
    mass: 'ブラックホール質量',
    distance: '探査機の距離',
    speed: '探査機の軌道速度',
    escapeVelocity: '脱出速度',
    orbitalPeriod: '探査機の公転周期',
    tidalGradient: '潮汐勾配',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: '太陽質量',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0倍',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10太陽質量',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'ブラックホール事象の地平面シミュレーター：シュワルツシルト半径、光子球、時間の遅れ',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このブラックホール事象の地平面シミュレーターは、シュワルツシルトブラックホールの核となる概念をインタラクティブな視覚モデルに変換します。ブラックホールの質量を変更し、探査機を内外に移動させて、事象の地平面、光子球、最も内側の安定した円軌道、脱出速度、重力赤方偏移、時間の遅れがどのように変化するかを比較できます。',
    },
    {
      type: 'paragraph',
      html: 'このシミュレーターは、静的な公式以上のものを求める天文学の学生、物理学の教師、サイエンスライター、好奇心旺盛な学習者のために作られています。表示は数値と空間図を結びつけ、事象の地平面が物質的な表面ではない理由、光子が特別な不安定軌道を持つ理由、そして地平面に到達する前に安定した円運動が止まる理由を視覚的に理解できます。',
    },
    {
      type: 'title',
      text: '事象の地平面半径の計算方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '非回転・無電荷のブラックホールの場合、事象の地平面半径は<strong>シュワルツシルト半径</strong>です。これは<strong>Rs = 2GM / c^2</strong>で計算されます。Gは重力定数、Mはブラックホール質量、cは光速です。太陽質量1つ分は約2.95kmのシュワルツシルト半径に相当します。',
    },
    {
      type: 'paragraph',
      html: 'シュワルツシルト半径は質量に比例するため、10太陽質量のブラックホールは約29.5kmの半径を持ち、いて座A*のような400万太陽質量のブラックホールは約1180万kmの半径を持ちます。質量スライダーは対数スケールを使用しているため、恒星質量と超大質量の両方のケースを同じコントロールで操作できます。',
    },
    {
      type: 'table',
      headers: ['領域', 'シュワルツシルト半径での半径', '意味'],
      rows: [
        ['事象の地平面', '1.0 Rs', '脱出速度が光速に等しくなる一方通行の境界。'],
        ['光子球', '1.5 Rs', 'シュワルツシルトブラックホール周辺での光の不安定な円軌道。'],
        ['ISCO', '3.0 Rs', '質量を持つ粒子がとりうる最も内側の安定した円軌道。'],
        ['弱重力場', '6 Rs 以上', '重力は依然として強いが、円軌道を維持しやすい領域。'],
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