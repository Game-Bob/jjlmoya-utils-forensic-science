import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-blood-alcohol-simulator';
const title = 'ウィドマーク血中アルコール濃度シミュレーター';
const description = 'ウィドマーク公式を用いて、人体におけるアルコールの吸収、分布、消失をシミュレートします。';

const howTo = [
  {
    name: '身体パラメータの設定',
    text: '体重、性別、水分レベルを設定してウィドマーク係数(r)を決定します。',
  },
  {
    name: '胃の状態の設定',
    text: '空腹、軽食、または満腹を選択して吸収速度を設定します。',
  },
  {
    name: '飲料を追加する',
    text: '追加する飲料の量、アルコール度数、時間を入力します。',
  },
  {
    name: 'シミュレーション変化の確認',
    text: '時間の経過に伴う血中濃度の変化と、酔いが覚める時間をチェックします。',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'ウィドマーク公式とは何ですか？',
    answer: '血中アルコール濃度を算出するための数理モデルです。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: '被験者プロフィール',
    weight: '体重 (kg)',
    sex: '生物学的性別',
    male: '男性',
    female: '女性',
    hydration: '水分状態',
    hydrationLow: '低い',
    hydrationNormal: '通常',
    hydrationHigh: '高い',
    stomachState: '胃の状態',
    stomachEmpty: '空腹 (速い)',
    stomachLight: '軽食 (普通)',
    stomachFull: '満腹 (遅い)',
    drinksTimeline: '飲酒のタイムライン',
    addDrink: '飲料を追加',
    drinkVolume: '量 (ml)',
    drinkAbv: 'アルコール度数 (% vol)',
    drinkTime: '時間 (時間後)',
    drinksList: '追加された飲料',
    remove: '削除',
    beer: 'ビール (330ml, 5%)',
    wine: 'ワイン (150ml, 12%)',
    spirits: '蒸留酒 (40ml, 40%)',
    peakBac: 'ピーク濃度',
    timeToSober: '酔いが覚めるまでの時間',
    sober: '素面',
    currentBac: '現在の濃度',
    drivingLimitAlert: '運転可否ステータス',
    safeLimit: '基準値以下',
    warningLimit: '注意基準超過',
    dangerLimit: '危険基準超過',
    graphTitle: '12時間の血中アルコール濃度変化',
    timeAxisLabel: '経過時間 (時間)',
    bacAxisLabel: '濃度 (g/L)',
    legalLimitText: '標準運転基準値',
    noDrinksText: '飲料を追加してシミュレーションを開始してください。',
    hours: '時間',
    soberStatus: '{time} 時間で素面',
    neverSober: '12時間を超過',
    noteDisclaimer: '教育目的のシミュレーションです。飲酒運転は絶対にしないでください。',
    noteWidmark: 'ウィドマーク方程式およびゼロ次消失モデルに基づいています。',
  },
  seo: [
    {
      type: 'title',
      text: '法中毒学とエタノールの薬物動態',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'エタノールの吸収、分布、および消失は法医学における基本概念です。アルコールの大部分は小腸で吸収されます。胃に食物があると胃排泄が遅れ、血中アルコール濃度のピークが下がります。',
    },
    {
      type: 'paragraph',
      html: 'このモデルは次の式に従います： <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>。肝臓での代謝はゼロ次反応で、1時間あたり約0.15 g/Lの割合で直線的に減少します。',
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
      applicationCategory: 'ForensicApplication',
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
