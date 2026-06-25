import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-stature-estimation-skeletal-remains-trotter-gleser-calculator';
const title = '法医身長推定電卓';
const description = '生物学的性別、祖先集団、年齢補正を考慮し、Trotter-Gleserの線形回帰式を用いて長骨から生前の身長を推定します。';

const howTo = [
  {
    name: '骨と変数を選択',
    text: '測定する長骨（大腿骨、脛骨、上腕骨、腓骨、橈骨、または尺骨）と、生物学的性別、祖先、年齢を選択します。'
  },
  {
    name: '骨の長さを測定',
    text: '仮想骨測定板のスライダーを動かして、骨の最大長をセンチメートル単位で指定します。'
  },
  {
    name: '推定身長を計算',
    text: '電卓が対応するTrotter-Gleser回帰式を適用し、30歳以上の場合は1歳ごとに0.06 cmを減算します。'
  },
  {
    name: '結果と誤差範囲の解釈',
    text: '推定身長、推定の標準誤差（SEE）、および95%予測区間を確認します。'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Trotter-Gleserの回帰式はどのように機能しますか？',
    answer: 'この方程式は、生前の身長と長骨の最大長との間の相関を線形回帰を用いてモデル化したものです。'
  },
  {
    key: 'faq-2',
    question: 'なぜ生物学的性別と祖先が必要なのですか？',
    answer: '人間の身体プロポーションは、性別や地理的集団によって異なります。男性と女性では四肢の比率が異なり、祖先によっても発達比率が異なります。'
  },
  {
    key: 'faq-3',
    question: 'なぜ年齢補正が必要なのですか？',
    answer: '成人の身長は、椎間板の圧迫や姿勢の変化により、30歳以降徐々に減少します。TrotterとGleserは、30歳を過ぎると1年ごとに0.06 cmを差し引くことを推奨しました。'
  },
  {
    key: 'faq-4',
    question: '推定の標準誤差（SEE）とは何ですか？',
    answer: 'SEEは、回帰モデルにおける残差の標準偏差を表し、予測された身長の精度を示します。'
  },
  {
    key: 'faq-5',
    question: 'どの長骨が最も正確な身長推定を可能にしますか？',
    answer: '大腿骨や脛骨などの下肢骨は、身長に直接寄与するため、最も正確な推定が可能です。上腕骨などの上肢骨は標準誤差が大きくなります。'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '法医身長推定電卓',
    desc: '骨測定板シミュレーターを用いて、線形回帰による生前の身長推定を行います。',
    configTitle: '骨測定パラメータ',
    boneLabel: '骨標本',
    lengthLabel: '骨の長さ',
    unitLabel: '単位システム',
    metricOption: 'メトリック (cm)',
    imperialOption: 'インペリアル (in)',
    sexLabel: '生物学的性別',
    ancestryLabel: '祖先集団',
    ageLabel: '死亡年齢 (歳)',
    maleOption: '男性',
    femaleOption: '女性',
    whiteOption: '白色人種 / コーカソイド',
    blackOption: '黒色人種 / ネグロイド',
    asianOption: 'アジア人種 / モンゴロイド',
    femurName: '大腿骨 (太ももの骨)',
    tibiaName: '脛骨 (すねの骨)',
    humerusName: '上腕骨 (二の腕の骨)',
    fibulaName: '腓骨 (ふくらはぎの骨)',
    radiusName: '橈骨 (前腕の骨)',
    ulnaName: '尺骨 (前腕の骨)',
    resultsTitle: '身長推定結果',
    estimateLabel: '推定身長',
    errorLabel: '標準誤差 (SEE)',
    rangeLabel: '95% 予測区間',
    formulaLabel: '回帰方程式',
    formulaBoneFactor: '骨係数',
    formulaConstant: '定数',
    formulaAgeCorrection: '年齢補正',
    formulaStdError: '標準誤差 (SEE)',
    fallbackAlert: 'アジア系女性用の直接的なTrotter-Gleser式は存在しないため、法医学的代替手段として白色人種女性の参照式を使用しています。',
    boardInstructions: 'キャリパーをドラッグするか、数値を入力して骨を測定してください。',
    rulerLabelMetric: 'メトリックスケール (mm)',
    rulerLabelImperial: 'インペリアルスケール (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: '法医人類学における身長推定の包括的ガイド',
      level: 2
    },
    {
      type: 'paragraph',
      html: '身長推定は、物理人類学、生体考古学、および法医学における生物学的プロファイル作成の基本的な要素です。骨格遺体が発見された際、生前の身長を復元することは、行方不明者リストとの照合に不可欠です。'
    },
    {
      type: 'paragraph',
      html: 'このデジタル骨測定板シミュレーターは、Mildred TrotterとGoldine C. Gleserが開発した線形回帰モデルの学習を目的としています。'
    },
    {
      type: 'title',
      text: 'Trotter-Gleser回帰式の仕組み',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'TrotterとGleserは1952年と1958年に方程式を発表しました。式は次の通りです: 身長 = (傾き × 骨の長さ) + 定数 ± 標準誤差。性別や祖先によって比率が異なるため、異なる式が適用されます。'
    },
    {
      type: 'table',
      headers: ['長骨標本', '白色人種男性回帰モデル', '白色人種女性回帰モデル', '法医学的有用性と信頼性'],
      rows: [
        ['大腿骨 (Femur)', '身長 = 2.32 × 大腿骨 + 65.53 ± 3.94 cm', '身長 = 2.47 × 大腿骨 + 54.10 ± 3.72 cm', '最も高い信頼性。大腿骨は下肢の主要な負重骨であり、立位身長と直接関連します。'],
        ['脛骨 (Tibia)', '身長 = 2.42 × 脛骨 + 81.93 ± 4.00 cm', '身長 = 2.90 × 脛骨 + 61.53 ± 3.66 cm', '高い信頼性。Trotterのオリジナルプロトコルに従い、内果（うちくるぶし）を除外して測定する必要があります。'],
        ['腓骨 (Fibula)', '身長 = 2.60 × 腓骨 + 75.50 ± 3.86 cm', '身長 = 2.93 × 腓骨 + 59.61 ± 3.57 cm', '非常に信頼性が高いですが、腓骨は細く、考古学的遺跡では破損しやすいです。'],
        ['上腕骨 (Humerus)', '身長 = 2.89 × 上腕骨 + 78.10 ± 4.57 cm', '身長 = 3.36 × 上腕骨 + 57.97 ± 4.45 cm', '中程度の信頼性。上肢骨は体重を支持せず、標準誤差が大きくなります。'],
        ['橈骨 (Radius)', '身長 = 3.79 × 橈骨 + 79.42 ± 4.66 cm', '身長 = 4.74 × 橈骨 + 54.93 ± 4.45 cm', '前腕の比率には個体差が大きいため、信頼性は低くなります。']
      ]
    },
    {
      type: 'title',
      text: '加齢に伴う身長減少と補正',
      level: 3
    },
    {
      type: 'paragraph',
      html: '生前の身長は成人期を通じて一定ではありません。30歳以降、椎間板の圧迫などにより身長が減少します。TrotterとGleserは、30歳を過ぎると1年ごとに0.06 cmを差し引く補正を推奨しました: 減少量 = 0.06 × (年齢 - 30)。'
    },
    {
      type: 'title',
      text: '脛骨測定プロトコルの相違点',
      level: 3
    },
    {
      type: 'paragraph',
      html: '法医人類学で有名な問題に、脛骨の測定プロトコルがあります。1952年の研究では内果を除外して測定していましたが、1958年には含まれていました。1952年の式を内果を含めて測定した脛骨に適用すると、身長が系統的に過大評価されます。'
    },
    {
      type: 'title',
      text: '世俗的趨勢と歴史的データの適用可能性',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Trotter-Gleserのデータは、19世紀後半から20th世紀初頭に生まれた個体を対象としているため、当時の栄養状態を反映しています。栄養状態の改善に伴い現代人は平均身長が高くなる世俗的趨勢（secular trend）があります。このため現代の実務ではFORDISC等の最新ソフトウェアも併用されます。'
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
