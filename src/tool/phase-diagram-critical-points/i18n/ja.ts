import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'phase-diagram-critical-points-visualizer';
const title = '相図と臨界点ビジュアライザー';
const description = 'インタラクティブな圧力-温度相図で固体、液体、気体、超臨界領域を探索。三重点と臨界点のマーカーを表示します。';

const howTo = [
  {
    name: '物質を選ぶ',
    text: '水、二酸化炭素、窒素を切り替えて、実際の三重点と臨界点が相図をどう変えるかを確認できます。',
  },
  {
    name: '温度と圧力を動かす',
    text: 'スライダーを使ってサンプルを圧力-温度平面上に配置します。図はアクティブな相領域とライブサンプルマーカーをリアルタイムで更新します。',
  },
  {
    name: '臨界ハローを観察する',
    text: '気液境界の終端に向かって移動すると、潜熱が消失し液体と気体の区別がなくなり超臨界流体になる様子を確認できます。',
  },
  {
    name: '解説パネルを読む',
    text: '相ラベル、潜熱メーター、点の読み取り値を使って、視覚的な図と熱力学の用語を結び付けましょう。',
  },
];

const faq = [
  {
    question: '相図とは何ですか？',
    answer: '相図は、温度と圧力の異なる組み合わせにおいて物質のどの状態が安定であるかを示した図です。境界線は、二つの相が平衡状態で共存できる条件を示しています。',
  },
  {
    question: '臨界点では何が起こりますか？',
    answer: '臨界点で気液境界は終了します。臨界温度と臨界圧力を超えると、物質は超臨界流体となり、液体と気体の明確な区別はなくなります。',
  },
  {
    question: 'なぜ水の融解曲線は異なるのですか？',
    answer: '水は特異で、融点付近では氷が液体の水よりも密度が低くなります。圧力を上げると密度の高い液相が有利になるため、固液境界の傾きは他の多くの物質とは異なります。',
  },
  {
    question: 'プロットされた曲線は実験的に正確ですか？',
    answer: 'いいえ。このツールは公開されている三重点と臨界点の値に基づいた簡略化された曲線を使用しています。概念学習用に設計されており、プロセス工学や安全計算の代用にはなりません。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: '相図のコントロール',
    substance: '物質',
    units: '単位',
    scientificUnits: '科学単位 (K, MPa)',
    metricUnits: 'メートル単位 (摂氏, kPa)',
    imperialUnits: 'ヤードポンド法 (華氏, psi)',
    temperature: '温度',
    pressure: '圧力',
    diagram: '圧力-温度相図',
    sample: 'サンプルの状態',
    phase: '安定相',
    triplePoint: '三重点',
    criticalPoint: '臨界点',
    vaporCurve: '気液境界',
    meltingLine: '固液境界',
    latentHeat: '潜熱コントラスト',
    criticalProximity: '臨界近接度',
    coordinates: '座標',
    solid: '固体',
    liquid: '液体',
    gas: '気体',
    supercritical: '超臨界',
    low: '低',
    high: '高',
    reset: 'リセット',
    interpretation: '解釈',
    note: '境界線は共存を示し、領域は選択された条件で最も安定な相を示します。',
  },
  seo: [
    {
      type: 'title',
      text: '三重点、沸騰曲線、臨界点のためのインタラクティブな相図ビジュアライザー',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'この相図ビジュアライザーは、抽象的な圧力-温度チャートをインタラクティブなマップに変えます。物質を選び、温度と圧力を動かして、サンプルが固体、液体、気体、または超臨界流体として振る舞うかを確認してください。目標は、相境界を空間的に感じられるようにすることです。線を越えると安定状態が変わり、臨界点に近づくと相境界の意味そのものが変わります。',
    },
    {
      type: 'paragraph',
      html: 'このツールは、学生、教師、サイエンスライター、そして相図の明確な説明を求めるすべての人に向けて作られています。入門的な熱力学で最も重要な特徴、すなわち三つの相が共存する三重点、気液曲線、固液境界、そして液体と気体の区別が消える臨界端点に焦点を当てています。',
    },
    {
      type: 'title',
      text: '圧力-温度図の読み方',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '相図は一方の軸に温度、もう一方の軸に圧力を配置します。各領域は、その条件下で安定な相を示します。領域間の線は共存曲線です。これらの線に沿って、一方の相が他方を完全に置き換えるのではなく、二つの相が平衡を保つことができます。',
    },
    {
      type: 'table',
      headers: ['図の特徴', '意味', 'ツールで注目する点'],
      rows: [
        ['三重点', '固体、液体、気体が共存', '境界が集まる低温の接合点。'],
        ['気液曲線', '沸騰または凝縮の平衡', '三重点から臨界点までの曲線。'],
        ['固液境界', '融解または凍結の平衡', '固体領域と液体領域を分ける急勾配の線。'],
        ['臨界点', '気液境界の終点', '潜熱が消失する強調表示された端点。'],
        ['超臨界領域', '液体と気体の明確な区別なし', '臨界点を超えた高温高圧領域。'],
      ],
    },
    {
      type: 'title',
      text: '臨界点が重要な理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '臨界点以下では、沸騰は相転移です。液体と蒸気は共存でき、温度が境界条件に固定されている間に潜熱としてエネルギーを吸収できます。臨界点でその境界は終了します。それ以上では密度は連続的に変化し、物質は通常の液体や気体ではなく超臨界流体として記述されます。',
    },
    {
      type: 'paragraph',
      html: 'これは化学、惑星科学、工業抽出、冷凍、高圧物理学において重要です。例えば二酸化炭素は水と比較して比較的容易な条件で超臨界になるため、超臨界CO2は抽出や材料加工に利用されます。水はより高い温度と圧力を必要とするため、その臨界点は電力システムや地球物理学にとって重要です。',
    },
    {
      type: 'title',
      text: 'このビジュアライザーが簡略化していること',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '実際の相図には、多形、準安定状態、非理想混合物、複数の固相、実験的に適合された状態方程式が含まれる場合があります。この教育ツールは意図的にモデルをコンパクトに保っています。各物質を認識可能な基準値に固定し、滑らかな教育用曲線を描くことで、熱力学の表を参照しなくても主要なアイデアを簡単に確認できます。',
    },
    {
      type: 'list',
      items: [
        '<strong>直感のために使う:</strong> 圧力鍋、ドライアイス、沸騰、超臨界流体がなぜ異なる振る舞いをするのかを説明するのに役立ちます。',
        '<strong>工学的な限界値には使わない:</strong> 簡略化された曲線は認定された物性データの代わりにはなりません。',
        '<strong>トポロジーに注目する:</strong> 最も重要な学習成果は、相領域がどのように接続され、境界がどこで終わるかを理解することです。',
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
