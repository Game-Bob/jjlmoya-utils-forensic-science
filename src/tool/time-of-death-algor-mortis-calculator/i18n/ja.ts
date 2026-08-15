import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'time-of-death-algor-mortis-calculator';
const title = '死後経過時間死冷計算機 ヘンスゲノモグラム';
const description = '直腸温と環境温度からヘンスゲの二重指数式ノモグラムを用いて死後経過時間と推定死亡時刻を算出します。';

const howTo = [
  { name: '直腸温と周囲温度を入力', text: '現場で測定した深部直腸温度と周囲の平均環境温度を入力します。' },
  { name: '体重と環境補正係数を設定', text: '着衣の状態や水中浸漬に応じた補正係数および体重を入力します。' },
  { name: '測定時刻を指定', text: '温度を測定した正確な時刻を入力するか現在時刻をクリックします。' },
  { name: '死後経過時間と冷却曲線を分析', text: '推定死後経過時間と95パーセント信頼区間の死亡推定時間帯を確認します。' }
];

const faq = [
  { question: '法医学における死冷とは何ですか', answer: '死冷とは心停止後に体熱産生が停止し遺体温度が周囲温度と平衡に達するまで低下する物理的現象です。' },
  { question: 'ヘンスゲのノモグラムが推奨される理由は何ですか', answer: '初期の温度プラトー現象と体重や着衣による熱放散の二重指数関数的変化を正確にモデル化しているためです。' },
  { question: '体温による死亡時刻推定の精度はどの程度ですか', answer: '標準的な管理条件下では最初の10時間以内における95パーセント信頼区間はおよそプラスマイナス2.8時間です。' },
  { question: '死後温度プラトーとは何ですか', answer: '死後1から3時間の初期において深部直腸温度がほとんど低下せず熱勾配が形成される遅延期間を指します。' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: '死後経過時間推定および熱減衰ノモグラム',
    disclaimer: '本ツールは教育および学術シミュレーション専用です。正式な法医鑑定には司法解剖や死後硬直死斑の総合的評価が必要です。',
    unitSystemLabel: '単位系',
    unitMetricLabel: 'メートル法',
    unitImperialLabel: 'ヤードポンド法',
    presetsHeader: '標準法医学シナリオ',
    presetCustom: 'カスタム設定',
    presetNakedCalm: '無風室内裸体 (20°C)',
    presetDressedIndoor: '標準着衣室内 (19.5°C)',
    presetWinterOutdoor: '冬季屋外環境 (4°C)',
    presetSubmergedWater: '静水中浸漬 (12°C)',
    presetHeavyDuvet: '厚手羽毛布団着用 (18°C)',
    inputsHeader: '現場測定値および環境パラメータ',
    rectalTempLabel: '深部直腸温度',
    ambientTempLabel: '周囲環境温度',
    bodyWeightLabel: '推定体重',
    factorLabel: '環境補正係数',
    measurementTimeLabel: '温度測定時刻',
    factorNaked: '無風空気中裸体',
    factorLightClothes: '軽着衣 1から2枚',
    factorStandardClothes: '標準着衣 3から4枚',
    factorHeavyWinter: '厚手防寒着着用',
    factorLightBlanket: '薄手毛布使用',
    factorHeavyDuvet: '厚手羽毛布団使用',
    factorStillWater: '静水中に浸漬',
    factorFlowingWater: '冷流水中に浸漬',
    factorWetClothing: '濡れた着衣と風',
    factorMovingAir: '扇風機等の送風環境',
    resultsHeader: '死後経過時間解析結果',
    estimatedPmiLabel: '推定死後経過時間',
    deathWindowLabel: '死亡推定時間帯',
    confidenceMarginLabel: '95パーセント信頼区間',
    coolingPhaseLabel: '熱力学的フェーズ',
    coolingRateLabel: '瞬間冷却速度',
    glaisterEstimateLabel: 'グレイスター線形基準比較',
    chartHeader: 'ヘンスゲ二重指数冷却曲線',
    chartXAxis: '死後経過時間',
    chartYAxis: '深部直腸温度',
    chartNowMarker: '測定温度値',
    chartPlateauMarker: '初期プラトー',
    phasePlateau: 'プラトー期',
    phaseDescent: '指数関数的下降期',
    phaseEquilibrium: '熱平衡到達',
    phaseHyperthermia: '生前高体温警告',
    hoursUnit: '時間',
    minutesUnit: '分',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: 'リセット',
    nowBtn: '現在時刻',
    coreThermometerLabel: '深部体温',
    baselineAmbientLabel: '環境基準温度',
    referenceBodyTempLabel: '生前標準体温'
  },
  seo: [
    { type: 'title', text: '死冷の熱力学的原理と死後経過時間推定', level: 2 },
    { type: 'paragraph', html: '死後経過時間（PMI）の判定は法医学における最重要課題の一つです。<strong>死冷（Algor Mortis）</strong>は心停止後に人体の熱産生が絶たれ周囲温度と平衡に達するまで進行する体温降下現象です。深部直腸温の精密測定と熱力学モデルにより死亡時刻の確率的推定が可能となります。' },
    { type: 'diagnostic', variant: 'info', title: '死後冷却の熱力学的特性', html: '遺体の温度降下は直線的ではありません。初期に<em>温度プラトー</em>と呼ばれる下降の遅延が生じその後急峻な指数関数的降下期へ移行します。' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: '生前深部基準温度' },
      { value: '±2.8h', label: '初期95%信頼限界' },
      { value: '二重指数式', label: 'ヘンスゲ計算モデル' }
    ] },
    { type: 'title', text: 'クラウス ヘンスゲの二重指数方程式', level: 3 },
    { type: 'paragraph', html: 'かつて用いられたグレイスター則のような単純線形モデルは1時間あたり約0.83度の一定降下を仮定していましたが体重や着衣の影響を反映できませんでした。' },
    { type: 'code', ariaLabel: 'ヘンスゲの計算式', code: 'Q = (T_直腸 - T_周囲) / (37.2 - T_周囲)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (体重^0.625 * 補正係数) - 0.0284' },
    { type: 'paragraph', html: 'ヘンスゲ教授が提唱した二重指数式は体表からの熱勾配形成と深部体幹の熱慣性を同時に考慮しており信頼性の高い時間推定を実現します。' },
    { type: 'title', text: '環境および着衣による補正係数一覧', level: 3 },
    { type: 'paragraph', html: '熱伝達速度は体格や気流および衣服の断熱層によって大きく変化します。' },
    { type: 'table', headers: ['現場状況', '補正係数', '物理的機序'], rows: [
      ['無風室内裸体', '1.0', '標準的な放射および自然対流'],
      ['軽着衣 1から2枚', '1.1', '皮膚対流熱損失の軽微な抑制'],
      ['標準着衣 3から4枚', '1.2', '体幹および四肢の中等度断熱'],
      ['厚手防寒着着用', '1.4', '空気層保持による高度断熱'],
      ['厚手羽毛布団使用', '1.8', '極めて高い保温性による冷却遅延'],
      ['静水中に浸漬', '0.5', '水の熱伝導率は空気の約24倍'],
      ['冷流水中に浸漬', '0.35', '強制対流による急激な熱奪取']
    ] },
    { type: 'title', text: '死後冷却の熱力学的段階', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: '死後温度プラトー期', description: '死後1から3時間は体表が冷却される一方直腸温度はほとんど低下しません。', points: ['中心部から末梢への温度勾配形成', '線形計算では過小評価される領域', '方程式のマイナス0.25項で補正'] },
      { title: '急速指数降下期', description: '熱勾配形成後は体重に応じた一定の割合で熱が急速に放出されます。', highlight: true, points: ['最も測定感度が高い期間', '統計的誤差が最小の領域', '体温測定法の最適時間帯'] }
    ] },
    { type: 'title', text: '現場体温測定における実務的留意点', level: 3 },
    { type: 'list', items: [
      '<strong>深部直腸温度の確実な測定:</strong> 校正済み温度計プローブを直腸内に8から10cm挿入して測定します。',
      '<strong>遺体近傍の環境温度測定:</strong> 遺体から10cm以内の位置で周囲空気温度を測定します。',
      '<strong>現場環境の熱的安定性の確認:</strong> 暖房器具や開放窓および直射日光の有無を記録します。',
      '<strong>衣服の湿潤状態の確認:</strong> 濡れた衣類は気化熱により冷却速度を大幅に加速させます。'
    ] },
    { type: 'summary', title: '方法論のまとめ', items: [
      'ヘンスゲのノモグラム法は国際的に広く認知された死後経過時間推定基準です。',
      '単一の確定時刻ではなく標準偏差を伴う確率的時間帯として提示する必要があります。',
      '死後硬直や死斑および超生体反応の所見と総合的に照合して判定します。'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
