import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "voice-spectrogram-analyzer-online";
const title = "音声スペクトログラム解析ツール オンライン";
const description = "2つの音声サンプルの周波数、時間、音量強度、推定フォルマントをブラウザ内でローカルに解析・比較します。";

const howTo = [
  {
    "name": "音声サンプルを選択",
    "text": "手元の音声ファイルまたはプリセットを読み込みます。"
  },
  {
    "name": "周波数上限を設定",
    "text": "声の性質に合わせて4kHz、6kHz、8kHzを選択します。"
  },
  {
    "name": "スペクトログラムを確認",
    "text": "時間、周波数、フォルマントの分布を観察します。"
  },
  {
    "name": "再生して比較",
    "text": "カーソルと音声を同期させながら比較します。"
  }
];

const faq = [
  {
    "question": "音声スペクトログラムとは何ですか？",
    "answer": "横軸に時間、縦軸に周波数、色の明るさで音の強さを表したグラフです。"
  },
  {
    "question": "録音データはサーバーに送信されますか？",
    "answer": "いいえ。すべての処理はお使いのブラウザ内で完結します。"
  },
  {
    "question": "F1、F2、F3ガイドとは？",
    "answer": "声道の共鳴周波数（フォルマント）の推定位置を示す補助線です。"
  },
  {
    "question": "このツールで話者を特定できますか？",
    "answer": "いいえ。見た目の類似性だけで個人の同一性を判定することはできません。"
  },
  {
    "question": "周波数上限を変えるとフォルマントが変わる理由は？",
    "answer": "表示範囲が変わることで、検出されるピークの分離具合が変化するためです。"
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "ローカル専用",
    "privacyNote": "音声ファイルは外部サーバーに送信されません。ブラウザ内でローカル処理されます。",
    "loadHeading": "解析する2つの音声ファイルを読み込み",
    "sampleALabel": "サンプル A",
    "sampleBLabel": "サンプル B",
    "chooseFileLabel": "音声を選択",
    "replaceFileLabel": "声を変更",
    "dropHint": "ここに音声ファイルをドラッグ＆ドロップ（最大25MB）。最初の20秒間を解析します。",
    "presetHint": "合成母音サンプルですぐにテストできます。",
    "presetWarmLabel": "温かみのある母音サンプル",
    "presetBrightLabel": "明朗な母音サンプル",
    "emptySampleLabel": "音声待機中",
    "readySampleLabel": "スペクトルプレート作成完了",
    "decodingSampleLabel": "スペクトルプレート解析中",
    "errorSampleLabel": "解析に失敗しました",
    "durationLabel": "再生時間",
    "ceilingHeading": "周波数上限設定",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "ミラー表示スペクトログラムステージ",
    "mirrorViewLabel": "対向表示",
    "splitViewLabel": "並列表示",
    "playALabel": "サンプルAを再生",
    "playBLabel": "サンプルBを再生",
    "stopLabel": "停止",
    "timeAxisLabel": "時間",
    "frequencyAxisLabel": "周波数",
    "intensityLegendLabel": "明るい色ほど音響エネルギーが強力",
    "formantLegendLabel": "推定フォルマントガイドライン",
    "sampleAEmptyCanvasLabel": "サンプルAを読み込むとスペクトログラムが表示されます",
    "sampleBEmptyCanvasLabel": "サンプルBを読み込むとスペクトログラムが表示されます",
    "comparisonHeading": "共鳴周波数分析",
    "comparisonNote": "有声音フレームにおける平均スペクトルピーク位置。差分は物理測定値であり同一性の証明ではありません。",
    "formantOneLabel": "第1共鳴領域 (F1)",
    "formantTwoLabel": "第2共鳴領域 (F2)",
    "formantThreeLabel": "第3共鳴領域 (F3)",
    "averageLabel": "平均値",
    "differenceLabel": "差分",
    "unavailableLabel": "利用不可",
    "statusEmptyLabel": "音声を選択して開始",
    "statusSingleLabel": "1つのプレートが準備完了",
    "statusReadyLabel": "両方のプレートが準備完了",
    "limitError": "ファイルサイズがローカル制限の25MBを超えています。",
    "decodeError": "このブラウザでは対応していない音声形式です。",
    "browserError": "Web Audio APIが非対応のブラウザです。",
    "educationalNote": "学習用可視化ツールです。フォルマントガイドは簡易計算に基づくため、声紋鑑定や個人特定には使用できません。"
},
  seo: [
    { type: 'title', text: "スペクトログラムが音を視覚的な風景に変える仕組み", level: 2 },
    { type: 'paragraph', html: "<strong>音声スペクトログラム</strong>は、録音データを横軸に時間、縦軸に周波数を配置したマップに変換します。強度の高い音響エネルギーは明るい色として表示されます。これにより、単純な波形表示よりも持続母音、高調波、無音状態、および共鳴の変化をはっきりと確認・分析できます。音響信号の視覚的理解が容易になります。" },
    { type: 'paragraph', html: "本解析ツールは、信号を短いオーバーラップ区間に分割し、ハン窓を適用した上で高速フーリエ変換（FFT）を実行して周波数ごとのエネルギー分布を計算します。区間を短くすると時間的な発生タイミングが明確になり、周波数分解能を高めるとエネルギーの集中場所が判明します。不確定性原理のため時間と周波数の分解能には常にトレードオフが存在します。" },
    { type: 'diagnostic', variant: 'info', title: "ブラウザ内プライベート処理", html: "2つの音声サンプルの周波数、時間、音量強度、推定フォルマントをブラウザ内でローカルに解析・比較します。" },
    { type: 'stats', columns: 3, items: [
      { value: "時間", label: "左から右へ読み取り" },
      { value: "Hz", label: "周波数位置" },
      { value: "エネルギー", label: "明るさで表現" }
    ] },
    { type: 'title', text: "フォルマントを正しく読み解く", level: 3 },
    { type: 'paragraph', html: "フォルマントとは、声道形状によって形成される共鳴領域です。音声学においてF1とF2は母音の高さや舌の位置を表すために頻繁に使用されます。本ツールは3つの周波数領域における滑らかなピークを追跡し、視覚的な帯域とF1、F2、F3の挙動を結びつけて観察できるように設計されています。" },
    { type: 'paragraph', html: "専門的なフォルマント計測では、話者に合わせて調整された線形予測符号化（LPC）手順が用いられます。 pitch高調波、鼻声化、部屋の反響、背景ノイズは簡易的なピーク推定をずらす要因となります。表示されるガイドラインは教育的な参考目安として利用し、常に背景のスペクトル表示と合わせて確認してください。" },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 〜 1000 Hz","第1共鳴領域。母音の口の開き具合に関連"],["F2","900 〜 3000 Hz","第2共鳴領域。舌の前後位置に関連"],["F3","2000 〜 4500 Hz","高次共鳴領域。声道全体の形状に影響を受ける"]] },
    { type: 'title', text: "周波数設定が解析結果に与える影響", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "低い上限 (4 kHz)", description: "低周波数の観察に最適", points: ["母音の観察に有用", "高音域エネルギーを除外する可能性", "高精度を保証するものではありません"] },
      { title: "高い上限 (6/8 kHz)", description: "高音域の詳細を表示", highlight: true, points: ["明るい声に最適", "摩擦音を表示", "低音域を垂直方向に圧縮"] }
    ] },
    { type: 'title', text: "2つの音声サンプルの適正な比較方法", level: 3 },
    { type: 'paragraph', html: "2つのプレートの比較は、両方の録音が同様の音響環境で同じ母音やフレーズを含んでいる場合に最も効果的です。表示される差分はスペクトルピーク間の絶対的な物理測定値であり、同一性の割合や個人識別の証明を提供するものではありません。" },
    { type: 'list', items: ["<strong>同じ発話内容を比較する:</strong> 繰り返された母音や単語は、異なるフレーズよりも比較が容易です。","<strong>録音条件を揃える:</strong> マイクの種類や部屋の音響特性はスペクトルに大きく影響します。","<strong>カーソルを合わせて聴く:</strong> 視覚的なイベントと実際の音の瞬間を同期させて確認します。","<strong>個人特定を避ける:</strong> 類似したスペクトログラムであっても同一人物の証明にはなりません。"] },
    { type: 'summary', title: "本解析ツールの要点まとめ", items: ["ブラウザ対応ファイルからローカルでスペクトログラムを生成。","ミラー表示または並列表示で2つのサンプルを同期比較。","音響エネルギーと推定フォルマント領域の変化を学習。","鑑定ではなく記述的・教育的な目的で活用。"] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
