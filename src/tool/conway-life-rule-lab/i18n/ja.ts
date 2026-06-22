import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'conway-life-rule-lab';
const title = 'コンウェイのライフゲーム規則ラボ';
const description = 'B/Sルール、パターンシード、ライブ指標、レスポンシブな盤面で、コンウェイ型セル・オートマトンを操作、編集、比較します。';

const howTo = [
  {
    name: '盤面を配置する',
    text: 'グライダー、パルサー、ゴスパー銃などのパターンを選び、グリッドに配置するか、生存個体をランダムに生成します。',
  },
  {
    name: 'シミュレーションを実行する',
    text: '再生・一時停止・ステップ・テンポのコントロールを使い、誕生・死滅・密度・安定度の変化を観察します。',
  },
  {
    name: 'ルールを変更する',
    text: 'プリセットを切り替えるか、B3/S23、B36/S23、B3678/S34678 などのB/S記法を入力して、異なるオートマトンを比較します。',
  },
];

const faq = [
  {
    question: 'ライフゲームのB/S記法とは何ですか？',
    answer: 'B/S記法は、死んだセルが新たに誕生するための隣接数と、生きているセルが生存するための隣接数を示します。コンウェイのライフゲームはB3/S23です：死セルはちょうど3つの隣接で誕生し、生セルは2つまたは3つの隣接で生存します。',
  },
  {
    question: 'なぜこのツールは単なるシミュレータではなく規則ラボと呼ばれるのですか？',
    answer: 'クラシックなコンウェイルールが含まれていますが、このシミュレータはLife系セル・オートマトンのファミリーを比較するために構築されています。誕生数と生存数を変更すると、長期的な挙動が変わり、複製器、波、凍った島、カオス成長、または絶滅を生み出します。',
  },
  {
    question: 'シミュレータの安定度とは何を意味しますか？',
    answer: '安定度は、最後の世代で群集がどの程度変化したかを推定します。安定度が高いと、個体数に対して誕生や死滅が少ないことを意味し、安定度が低いと、盤面が乱流状態にあるか急速に再編成されていることを意味します。',
  },
  {
    question: '盤面に端はありますか？',
    answer: 'シミュレーションはトーラス状ラッピングを使用しており、左端が右端と接続し、上端が下端と接続しています。これによりパターンは自然に移動し続け、硬い境界で消えません。',
  },
  {
    question: '自分の開始パターンを描けますか？',
    answer: 'はい。シミュレーションを一時停止し、盤面のセルをクリックまたはタップして切り替えることができます。手描きのセルを組み込みパターンと組み合わせ、任意のルールプリセットで実行できます。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Life系セル・オートマトン盤面',
    play: '再生',
    pause: '一時停止',
    step: 'ステップ',
    clear: '空のキャンバス',
    randomize: 'ランダム',
    ruleLabel: 'ルール表記',
    ruleHelp: '誕生 / 生存カウント',
    speedLabel: 'テンポ',
    densityLabel: '初期密度',
    patternLabel: 'パターン',
    placePattern: 'パターン配置',
    generation: '世代',
    population: '個体数',
    density: '密度',
    stability: '安定度',
    births: '誕生',
    deaths: '死滅',
    achievementsLabel: 'ラボ記録',
    achievementPulsar: 'パルサー',
    achievementPulsarDescription: '周期2の振動を検出',
    achievementImmortal: '不滅',
    achievementImmortalDescription: '完全安定で500世代に到達',
    achievementBigBang: 'ビッグバン',
    achievementBigBangDescription: '低密度ランダムシードが生存セル1,000を超過',
    presetClassic: '古典Conway',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Day & Night',
    patternGlider: 'グライダー',
    patternGosper: 'ゴスパー銃',
    patternPulsar: 'パルサー',
    patternRPentomino: 'Rペントミノ',
    colonyStatus: 'コロニー信号',
    statusFrozen: '安定',
    statusGrowing: '拡大中',
    statusFading: '減衰中',
    statusChaotic: '不安定',
    invalidRule: 'B3/S23 のような B/S 表記を使ってください。',
  },
  seo: [
    { type: 'title', text: 'コンウェイのライフゲームシミュレータ（ルール編集可能）', level: 2 },
    { type: 'paragraph', html: 'このコンウェイのライフゲーム規則ラボでは、クラシックなセル・オートマトンを実行し、ルールを意図的に変更・比較できます。盤面は直接描画、パターン配置、ランダムシード、ステップごとの検査、可変テンポ、個体数・密度・誕生・死滅・安定度のライブ計測をサポートしています。' },
    { type: 'title', text: 'B/Sルールがゲームを変える仕組み', level: 3 },
    { type: 'paragraph', html: 'Life系セル・オートマトンはしばしば<strong>B/S記法</strong>で記述されます。B側は死セルが誕生するために必要な生きた隣接数を定義し、S側は生セルが生存するために必要な隣接数を定義します。コンウェイのオリジナルルール<strong>B3/S23</strong>は、絶滅と無制御成長の間の狭い領域に位置することで有名です。' },
    { type: 'title', text: 'ライブ指標の読み方', level: 3 },
    { type: 'paragraph', html: '個体数と密度は何個のセルが生きているかを示しますが、全体像を伝えるわけではありません。誕生と死滅は現在の活動レベルを示し、安定度は群集がオシレータに落ち着きつつあるか、静的構造に凍りつきつつあるか、乱流状態を保っているかを推定します。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
