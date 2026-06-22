import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = 'ダイソン球エネルギー捕捉シミュレータ';
const description = 'ダイソン群、リング、剛体シェル、ステイタイト雲の各設計を、捕捉電力、軌道半径、材料質量、カルダシェフスケール達成度で比較します。';

const howTo = [
  {
    name: '恒星の種類を選択',
    text: 'M型矮星、太陽型G型星、A型星、赤色巨星、青色巨星から選択し、光度と質量を設定します。',
  },
  {
    name: 'コレクター構造を選択',
    text: '群、リング、剛体シェル、ステイタイトミラー雲の各仮定を比較します。',
  },
  {
    name: 'カバレッジと温度を調整',
    text: 'カバレッジと動作温度を変更して、捕捉電力と安全軌道半径がどう変化するかを確認します。',
  },
  {
    name: 'カルダシェフ目標を読む',
    text: 'カルダシェフ目標スライダーを使い、選択したエネルギー規模に必要な恒星出力の割合を確認します。',
  },
];

const faq = [
  {
    question: 'ダイソン群とは何ですか？',
    answer: '恒星を周回する多数の独立したコレクターの集合体で、剛体シェルよりも現実的とされています。',
  },
  {
    question: 'なぜ軌道半径が変化するのですか？',
    answer: 'コレクターの動作温度と恒星の光度に基づいて半径が決まります。高温のコレクターは恒星に近い軌道を取れます。',
  },
  {
    question: 'カルダシェフ評価とは何ですか？',
    answer: '捕捉ワット数を対数的な文明エネルギースケールに変換したものです。',
  },
  {
    question: '材料質量は正確ですか？',
    answer: 'いいえ。面積、面積密度、安定性の仮定から算出した教育的な推定値です。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'ダイソンコレクター可視化',
    starType: '恒星の種類',
    structureType: '構造',
    coverage: 'コレクターカバレッジ',
    operatingTemp: '動作温度',
    kardashevTarget: 'カルダシェフ目標',
    kardashevRating: '現在の評価',
    capturedPower: '捕捉電力',
    optimalRadius: '最適半径',
    targetCoverage: '目標カバレッジ',
    materialMass: '材料質量',
    captureMeter: '目標捕捉進捗',
    statusReady: 'システムを調整してコレクター需要を推定してください。',
    statusUnderbuilt: 'カバレッジが選択した目標を下回っています。',
    statusBalanced: 'カバレッジは選択した目標に近い状態です。',
    statusExtreme: 'この構成は目標を大幅に上回っています。',
    orbitalPeriod: '軌道周期',
    collectorArea: 'コレクター面積',
    mercuryMasses: '{value} 水星質量',
    kilograms: '{value} kg',
    daysUnit: '{value} 日',
    starMDwarf: 'M型矮星',
    starSun: '太陽型G型星',
    starA: 'A型星',
    starRedGiant: '赤色巨星',
    starBlueGiant: '青色巨星',
    structureSwarm: 'ダイソン群',
    structureRing: '赤道リング',
    structureShell: '剛体シェル',
    structureStatite: 'ステイタイトミラー雲',
  },
  seo: [
    { type: 'title', text: 'ダイソン球エネルギー捕捉シミュレータ', level: 2 },
    { type: 'paragraph', html: 'このシミュレータは、ダイソン群、リング、シェル、ステイタイト雲の各概念を、一次近似の恒星エネルギー計算で比較します。' },
    { type: 'paragraph', html: '捕捉電力、熱軌道半径、コレクター面積、軌道周期、材料質量、カルダシェフ目標カバレッジを推定します。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
