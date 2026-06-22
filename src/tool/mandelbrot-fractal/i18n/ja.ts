import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fractal-calculator';
const title = 'Mandelbrot Fractal Calculator & Self Similarity Explorer';
const description = 'マンデルブロ集合を探検し、自己相似のフラクタル境界をズームで観察。反復深度、色のコントラスト、複素平面座標を比較できます。';

const howTo = [
  {
    name: 'マンデルブロ集合の領域を選ぶ',
    text: '全体集合から始めるか、seahorse valley（海馬の谷）やスパイラルミニブロットなどの高精細領域に直接ジャンプします。',
  },
  {
    name: '画像をクリックしてズーム',
    text: 'キャンバス上の任意の点をクリックすると、複素平面が再中心化され、その座標を中心にフラクタルが拡大表示されます。',
  },
  {
    name: '反復深度と色のコントラストを調整',
    text: '反復予算を増やすとより細かい境界構造が現れます。続けてコントラストとパレットを調整し、エスケープタイムのバンドを見やすくします。',
  },
];

const faq = [
  {
    question: 'マンデルブロ集合計算機は何を表示しますか？',
    answer: 'z = 0 から開始したときに漸化式 z(n+1) = z(n)^2 + c が有界に保たれる複素数 c を表示します。選択した反復予算内で決して発散しない点は集合のメンバーとして着色され、外部の点は軌道が発散する速さに応じて色分けされます。',
  },
  {
    question: 'マンデルブロ集合の境界にはなぜこれほど多くの詳細が含まれているのですか？',
    answer: '境界は安定軌道と発散軌道を分けており、その境界付近での微小な座標変化が長期的な振る舞いを完全に変える可能性があります。この感度が、ネストされたバルブ、スパイラル、フィラメント、および多くの拡大レベルで現れるミニチュアコピーを生み出します。',
  },
  {
    question: 'マンデルブロ集合は本当に自己相似ですか？',
    answer: 'シェルピンスキーの三角形とまったく同じ厳密な意味では完全に自己相似ではありませんが、豊かな準自己相似性を持っています。集合全体の小さなコピーが平面全体に現れ、しばしば歪められ、精巧な分岐構造によって接続されています。',
  },
  {
    question: '反復回数は何を制御しますか？',
    answer: '反復回数は、各点がおそらく集合に属すると判断する前に計算機がテストする時間を制御します。より高い値はより深いフィラメントとより鮮明なミニブロットを明らかにしますが、ピクセルあたりの計算量が増加します。',
  },
  {
    question: '黒い領域の外側で色が変わるのはなぜですか？',
    answer: '外側の色はエスケープタイムに基づいています。すぐに発散する点は、多くの反復にわたって集合の近くに留まる点とは異なる色を受け取ります。スムースカラーリングは急激なバンドを減らし、近くの軌道の形状を検査しやすくします。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot Fractal Calculator',
    canvasLabel: 'インタラクティブなマンデルブロ集合キャンバス',
    presetsLabel: 'マンデルブロ領域プリセット',
    presetFull: '全体集合',
    presetSeahorse: 'Seahorse Valley',
    presetSpiral: 'スパイラルミニブロット',
    centerPoint: '中心座標',
    magnification: '倍率',
    visibleWindow: '可視ウィンドウ',
    renderBudget: '反復回数',
    iterationsLabel: '反復深度',
    contrastLabel: '発散コントラスト',
    colorLabel: 'カラーフィールド',
    paletteEmber: 'エンバーバンド',
    paletteLagoon: 'ラグーンプラズマ',
    paletteInk: 'インクスペクトラム',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Set Calculator for Fractals, Escape Time, and Self-Similarity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このMandelbrotフラクタル計算機は、反復 <strong>z(n+1) = z(n)^2 + c</strong> によって定義される古典的な複素平面集合をレンダリングします。受動的に見るだけでなく探索のために設計されています。すべてのクリックが平面を再中心化し、各ズームがより小さな数学的近傍を露出させ、反復スライダーで点を安定または発散として着色する前に計算機が境界をどの程度テストするかを決定できます。',
    },
    {
      type: 'title',
      text: 'How to Read the Mandelbrot Image',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '暗い中央の形状は、現在の反復予算内で軌道が有界に保たれる点を示します。色付きの外部はエスケープタイムマップです。集合の近くに着色された点は、その大きさが脱出半径を超えるまでに何百回もの反復に耐える可能性がありますが、遠くの点はほぼ即座に発散します。最も科学的に興味深い形状は通常、塗りつぶされた形状の内部ではなく、有界と非有界の振る舞いが交錯する境界に沿って見られます。',
    },
    {
      type: 'table',
      headers: ['コントロール', '変更内容', '増やすタイミング'],
      rows: [
        ['<strong>反復深度</strong>', '各ピクセルに対してテストされる漸化ステップの数。', '細いフィラメントやミニチュアコピーにズームインした後に高い値を使用します。'],
        ['<strong>発散コントラスト</strong>', 'スムーズな発散値がどの程度強く可視バンドに分離されるか。', '画像が平坦に見えるときに上げ、色が強すぎるときに下げます。'],
        ['<strong>パレット</strong>', '外部の点に適用される色マッピング。', 'パレットを切り替えて、1つのカラーフィールドでは隠れていた構造を明らかにします。'],
      ],
    },
    {
      type: 'title',
      text: 'Self-Similarity and Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'マンデルブロ集合がこれほど有名な理由の1つは、その準自己相似性です。アンテナ、スパイラル、谷にズームインすると、ミニブロットと呼ばれるマンデルブロに似た小さな島に繰り返し遭遇します。これらのコピーは単なる装飾ではありません。その配置は、周期バルブ、分岐パターン、および軌道が発散する前に長期間閉じ込められたままになる領域を含む、二次写像の力学を反映しています。',
    },
    {
      type: 'title',
      text: 'Why Higher Iterations Matter at Deep Zoom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '全体集合ビューでは、適度な反復制限で認識可能な画像が得られます。しかし、より深い倍率では、多くの境界点が発散するかどうかを明らかにするためにはるかに長い時間がかかります。反復制限が低すぎると、微細な構造が誤って固体のように見えたり不鮮明になったりする可能性があります。反復回数を増やすと境界分類が改善され、計算機が細い巻きひき、スパイラルアーム、および衛星バルブをより確実に解像できるようになります。',
    },
    {
      type: 'title',
      text: 'Mathematical Meaning of the Complex Coordinates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '座標表示は、ビューポートの現在の中心を複素数 c = a + bi として示します。水平軸は実部、垂直軸は虚部です。キャンバスをクリックすると新しい複素座標が選択され、その周りの可視ウィンドウが拡大されます。これにより、フラクタルの視覚的領域が複素平面内の正確な位置にどのように対応するかを学習するのに役立つツールとなります。',
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
