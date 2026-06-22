const slug = 'asteroid-impact-simulator';
const description = '実際の物理法則に基づいて小惑星の衝突をシミュレートします。エネルギー、クレーター、熱放射、衝撃波を計算。あなたはチクシュルーブ衝突を生き延びられますか？';
const title = '小惑星衝突シミュレーター：終末計算機';
const howTo = [
    {
      name: '投射物のサイズを選択',
      text: '10メートルの小さな隕石から、10キロメートルの惑星キラーまで、小惑星の直径を入力します。',
    },
    {
      name: '速度と角度を設定',
      text: '接近速度と突入角度を調整します（統計的に最も可能性が高い値は45°です）。',
    },
    {
      name: '小惑星の性質を定義',
      text: 'クレーターの深さを正しく計算するために、小惑星が岩石、鉄、氷のいずれでできているかを選択します。',
    },
    {
      name: '生存の判定を分析',
      text: '小惑星をマップ上にドラッグし、自分がどれだけ離れているかを入力して、放射線、地震、衝撃波の影響を確認します。',
    },
  ];
const faq = [
    {
      question: '衝突エネルギーはどのように計算されますか？',
      answer: '主なエネルギーは運動エネルギー、つまり(1/2) * 質量 * 速度²です。岩石質の小惑星には3,000 kg/m³などの現実的な密度を使用し、典型的な大気圏突入速度（11〜72 km/s）を想定しています。結果として得られるエネルギーはTNT換算のメガトンで測定されます。',
    },
    {
      question: '熱衝撃波とは何ですか？',
      answer: '大気圏に突入する際、小惑星は空気を激しく圧縮し、太陽の千倍以上も明るい火の玉を作り出します。その結果生じる熱放射は、三度熱傷を引き起こし、衝突地点から何マイルも離れた森林を炎上させる可能性があります。',
    },
    {
      question: 'クレーターを作らない小惑星があるのはなぜですか？',
      answer: '小型の岩石（50m未満）は、チェリャビンスクで起きたように、通常は大気圧によって空中分解・爆発（空中爆発）します。エネルギーは強力な圧力衝撃波として放出されますが、固体として地面に打ち付けられることはありません。',
    },
    {
      question: '衝突の現実的な確率はどのくらいですか？',
      answer: '小規模な衝突（2013年のロシアのようなもの）は10年ごとに発生します。壊滅的な衝突（ツングースカ級）は数世紀ごとです。チクシュルーブのような地球規模の絶滅イベントは、およそ1億年ごとに発生します。',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'コピー済み',
    noHistory: '履歴なし',
    load: '読み込む',
    delete: '削除',
    activateGPS: 'GPSを有効にする',
    analysisLabel: '分析',
    dragToMap: 'マップにドラッグ',
    diameterLabel: '直径',
    velocityLabel: '速度',
    typeLabel: 'タイプ',
    historicalData: '歴史的データ',
    composition: '組成',
    rock: '岩石',
    iron: '鉄',
    ice: '氷',
    clearAll: 'すべて消去',
    searching: '検索中...',
    gpsActive: 'GPS有効',
    gpsError: 'GPSエラー',
    verdictSafe: '安全地帯',
    verdictSafeSub: '脅威なし',
    verdictShock: '衝撃波',
    verdictShockSub: '構造的ダメージ',
    verdictBurned: '熱放射',
    verdictBurnedSub: '極めて危険',
    verdictVaporized: 'グラウンド・ゼロ',
    verdictVaporizedSub: '直接衝突',
    presetAerial: '空中爆発',
    presetForest: '森林',
    presetComet: '彗星',
    presetELE: 'E.L.E.（大量絶滅）',
  },
  seo: [
    {
      type: 'title',
      text: '空が落ちてくるとき：宇宙の終末の物理学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '小惑星は単なる宇宙の岩ではありません。それらは秒速20kmで移動する宇宙の弾丸であり、地球上の全核兵器を合わせたものよりも多くのエネルギーを放出する可能性があります。このシミュレーターは、抽象的な物理学を具体的な人間の結末へと翻訳します。',
    },
    {
      type: 'title',
      text: '審判の数式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'すべては運動エネルギーから始まります：<strong>E = ½mv²</strong>。秒速20kmで移動する直径100mの小惑星は、約0.5メガトンのTNTに相当するエネルギーを放出します。参考に、広島型原爆は0.015メガトンでした。',
    },
    {
      type: 'paragraph',
      html: 'しかし、サイズは指数関数的にスケールします。直径が10倍になると、体積（および質量）は1,000倍になり、<strong>500メガトン</strong>に相当するエネルギーを放出します。恐竜を絶滅させたチクシュルーブ衝突では、<strong>1億メガトン</strong>相当が放出されました。',
    },
    {
      type: 'paragraph',
      html: '直径1kmの小惑星が地球に衝突すると、地球上のすべての核兵器を同時に爆発させたよりも多くのエネルギーが放出されます。',
    },
    {
      type: 'title',
      text: '破壊の解剖学：終末の同心円状レイヤー',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>クレーター（グラウンド・ゼロ）：</strong> クレーターの直径はE^0.3に比例します。1メガトンの衝突は約1kmのクレーターを作ります。内部にあるものはすべて一瞬で蒸発します。',
        '<strong>熱放射（閃光）：</strong> 火の玉は強烈な赤外線を放出します。E^0.41 kmの距離では、衣類が発火し、皮膚は三度熱傷を負います。',
        '<strong>衝撃波（ハンマー）：</strong> 過圧波は超音速で伝わります。1 psiではガラスが砕け、5 psiでは建物が崩壊します。',
        '<strong>地震（震動の反響）：</strong> 衝突は地球規模の地震波を発生させます。チクシュルーブはマグニチュード11の地震を引き起こし、リヒタースケールを振り切りました。',
      ],
    },
    {
      type: 'title',
      text: '歴史的な衝突：過去からの教訓',
      level: 3,
    },
    {
      type: 'table',
      headers: ['場所と年', 'サイズ', 'エネルギー', '影響'],
      rows: [
        ['ロシア、チェリャビンスク（2013年）', '20メートル', '500キロトン', '100km先まで届いた衝撃波、1,500人の負傷者、窓ガラスの破損'],
        ['シベリア、ツングースカ（1908年）', '50-60メートル', '10-15メガトン', '2,000 km²の森林がなぎ倒され、8,000万本の木が消失'],
        ['メキシコ湾、チクシュルーブ（6,600万年前）', '10キロメートル', '1億メガトン', '地球上の生命の75%が絶滅'],
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


