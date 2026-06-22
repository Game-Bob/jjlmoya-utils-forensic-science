import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'stellar-habitability-zone';
const description = '恒星と惑星の設定を使用して、さまざまなタイプの恒星の周りのハビタブルゾーン（ゴルディロックスゾーン）を計算し可視化します。';
const title = '恒星ハビタブルゾーンシミュレーター：ゴルディロックスゾーンを見つけよう';

const howTo = [
  {
    name: '恒星プリセットを選択',
    text: '青色巨星から赤色矮星まで恒星タイプを選び、質量、光度、温度などの標準的な物理特性を読み込みます。',
  },
  {
    name: '惑星パラメーターを調整',
    text: 'インタラクティブなスライダーを使って、惑星の軌道距離（軌道長半径）、アルベド、大気の温室効果による温暖化効果を変更します。',
  },
  {
    name: '軌道とハビタビリティを分析',
    text: '惑星が恒星の周りをリアルタイムで公転する様子を観察します。平衡温度と表面温度が液体の水を維持できるかどうかを確認します。',
  },
];

const faq = [
  {
    question: 'ハビタブルゾーンとは何ですか？',
    answer: 'ハビタブルゾーン（ゴルディロックスゾーンとも呼ばれる）は、恒星の周囲で、与えられた大気圧の下で惑星表面の温度が液体の水を維持するのに十分な領域です。これは、恒星の光度と実効温度に基づいて、保守的および楽観的な境界によって定義されます。',
  },
  {
    question: '恒星の光度はハビタブルゾーンにどのように影響しますか？',
    answer: '恒星の光度は、恒星の総エネルギー出力を決定します。より高温で大質量の恒星（O型、B型、A型など）は非常に明るく、ハビタブルゾーンをはるか遠くに配置します。より低温で低質量の恒星（K型やM型の赤色矮星など）は光度が低く、ハビタブルゾーンを恒星の非常に近くに移動させます。',
  },
  {
    question: '平衡温度と表面温度の違いは何ですか？',
    answer: '平衡温度は、惑星が黒体として振る舞い、恒星放射を吸収して宇宙に再放射すると仮定した場合の理論上の温度です。表面温度には、惑星の大気の温室効果が含まれ、熱を閉じ込めて惑星をさらに温暖化させます。',
  },
  {
    question: 'アルベドが惑星のハビタビリティにとって重要な理由は？',
    answer: 'アルベドは惑星表面の反射率の尺度です。アルベドが高い（1.0に近い）ほど、惑星はより多くの入射恒星光を反射して冷却されます。アルベドが低いほど、より多くの放射が吸収され、全体的な温度が上昇します。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '恒星ハビタブルゾーンシミュレーター',
    starPresetsLabel: 'スペクトルプリセット',
    customStarHeader: '恒星パラメーター',
    starTemperature: '実効温度 (K)',
    starLuminosity: '光度 (L/L⊙)',
    starMass: '質量 (M/M⊙)',
    starRadius: '半径 (R/R⊙)',
    planetHeader: '惑星パラメーター',
    planetDistance: '軌道距離 (AU)',
    planetAlbedo: 'ボンドアルベド',
    greenhouseDelta: '温室効果による温暖化 (K)',
    resultsHeader: 'シミュレーション結果',
    stellarFluxResult: '受けた恒星フラックス',
    eqTempResult: '平衡温度',
    surfTempResult: '推定表面温度',
    orbitPeriodResult: '公転周期',
    orbitVelocityResult: '軌道速度',
    hzLimitsHeader: 'ハビタブルゾーンの境界',
    innerLimit: '保守的内側限界',
    outerLimit: '保守的外側限界',
    optInnerLimit: '楽観的内側限界',
    optOuterLimit: '楽観的外側限界',
    orbitCanvasTitle: 'インタラクティブ軌道可視化',
    statusLabel: 'ハビタビリティステータス',
    statusTooHot: '高温すぎる（水が蒸発）',
    statusHabitable: 'ハビタブル（液体の水が可能）',
    statusTooCold: '低温すぎる（水が凍結）',
    statusExplanation: '保守的な境界に基づき、この惑星は指定されたハビタブルゾーンステータス内にあります。',
    unitsLabel: '単位系',
    unitsScientific: '科学単位',
    unitsImperial: 'ヤードポンド法',
  },
  seo: [
    {
      type: 'title',
      text: '宇宙生物学：恒星ハビタブルゾーンの物理学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '地球外生命の探索は、液体の水に必要な物理的条件を理解することから始まります。宇宙生物学者は数理モデルを使用して、さまざまな恒星タイプの周りのハビタブルゾーンの境界をマッピングします。このシミュレーターはKopparapu et al.（2013）のモデルを使用して、惑星が受け取るエネルギーフラックスを推定し、それらがゴルディロックスゾーンにあるかどうかを判断します。ハビタブルゾーンは、CO2-H2O-N2大気を持つ地球質量の惑星がその表面に液体の水を維持できる領域として定義されます。',
    },
    {
      type: 'title',
      text: '数式と大気物理学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ハビタブルゾーンの境界は、暴走温室または最大温室条件を引き起こすために必要な実効恒星フラックス（Seff）を計算することによって決定されます。Seffの方程式は恒星の実効温度（Teff）に依存します：<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>ここでT* = Teff - 5780 K、係数（a, b, c, d）は1次元放射対流気候モデルから経験的に導出されます。Seffが計算されると、天文単位（AU）での軌道距離dは次のように与えられます：<br><br>d = sqrt(L / Seff)<br><br>ここでLは太陽に対する恒星の光度です。惑星の平衡温度（Teq）は、熱平衡にある球状黒体を仮定して計算されます：<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>ここでR*は恒星半径、Aは惑星のボンドアルベド、Sは地球の太陽定数単位で受けた恒星フラックスです。',
    },
    {
      type: 'title',
      text: 'スペクトル分類とハビタブル境界',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '恒星の特性はスペクトルタイプによって大きく異なります。以下は典型的な特性とHZ境界の概要です：',
    },
    {
      type: 'table',
      headers: [
        'スペクトルクラス',
        '温度 (K)',
        '光度 (L/L⊙)',
        'HZ内側限界 (AU)',
        'HZ外側限界 (AU)',
      ],
      rows: [
        ['O型巨星', '40,000', '100,000', '300.0', '530.0'],
        ['B型巨星', '20,000', '1,000', '30.1', '53.2'],
        ['A型（シリウス）', '8,500', '20.0', '4.2', '7.4'],
        ['F型（プロキオン）', '6,500', '2.5', '1.5', '2.6'],
        ['G型（太陽）', '5,778', '1.0', '0.95', '1.67'],
        ['K型矮星', '4,500', '0.15', '0.37', '0.65'],
        ['M型矮星', '3,200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'スペクトルクラスがハビタビリティに与える影響',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '各スペクトルクラスは、その惑星に独自の放射および重力環境を生み出します：<br><br><strong>O型およびB型星：</strong>これらの大質量の青色星は強烈な紫外線（UV）放射を放出し、寿命が非常に短い（数千万年）。外側の世界には液体の水が存在する可能性がありますが、恒星が超新星爆発を起こす前に生命が進化するには時間が不十分です。<br><br><strong>A型およびF型星：</strong>これらの星は太陽よりも明るく高温です。ハビタブルゾーンは広く遠くまで及ぶため、潮汐ロックの影響を最小限に抑えます。しかし、高レベルの近紫外線放射は、保護オゾン層がない場合、有機分子に深刻な損傷を引き起こす可能性があります。<br><br><strong>G型星（太陽類似星）：</strong>数十億年にわたって安定した光束を提供し、生命探査の主要なターゲットです。その放射出力は標準的な生化学の要件に適合しています。<br><br><strong>K型星（オレンジ色矮星）：</strong>多くの宇宙生物学者によって「超ハビタブル」なホストと見なされています。オレンジ色矮星は数百億年生き、G型星よりも有害なUV放射が少なく、若いM型矮星に伴う激しいフレアを起こしにくいです。<br><br><strong>M型星（赤色矮星）：</strong>銀河で最も一般的な星です。ハビタブルゾーンが非常に近くにあるため（通常 < 0.2 AU）、惑星は潮汐ロックされやすく、一方の面が常に恒星の方向を向いています。さらに、活動的なM型矮星は高エネルギーの恒星風とフレアを生成し、惑星大気を剥ぎ取る可能性があります。',
    },
    {
      type: 'title',
      text: '惑星ハビタブル環境の重要因子',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '惑星の物理的環境は、主星からの距離だけでなく、複数の変数によって形成されます：',
    },
    {
      type: 'list',
      items: [
        '<strong>大気温室効果：</strong>自然の温室効果ガスは表面温度を黒体平衡レベル以上に上昇させます。地球型惑星は、炭酸塩ケイ酸塩サイクルが大気中のCO2を安定させ、地質学的タイムスケールで温度を調節する必要があります。',
        '<strong>惑星ボンドアルベド：</strong>高い反射率（雲、氷冠、硫酸エアロゾルによる）は惑星を冷却しますが、低い反射率（暗い土壌、水域）はより多くの恒星エネルギーを閉じ込めます。',
        '<strong>磁場：</strong>強力な惑星磁気圏は、太陽風や恒星風から大気を保護し、非熱的大気散逸と水の損失を防ぎます。',
        '<strong>水トラップ力学：</strong>上部大気の低温トラップ効果により、水蒸気が高高度に達するのを防ぎ、恒星UV放射が水素と酸素に解離するのを防ぎます。',
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
