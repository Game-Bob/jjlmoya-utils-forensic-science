import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'radioactive-decay-half-life-calculator';
const title = '半減期と放射性崩壊の計算機';
const description = '実在の同位体、半減期の式、確率的な原子フィールド、残存量、相対放射能を使って放射性崩壊をシミュレーションします。';

const howTo = [
  { name: '同位体を選ぶ', text: '炭素14、ヨウ素131、ウラン238、テクネチウム99m、ラドン222から始められます。各プリセットには現実的な半減期と代表的な用途が設定されています。' },
  { name: '試料と時間を設定する', text: '表示する原子数を調整し、時間を進めると、残存割合が半減期の指数法則に従う様子を確認できます。' },
  { name: '計算値と原子ごとの偶然性を比べる', text: '決定論的な値を期待値として使い、原子フィールドで小さな試料が理論曲線の周囲で揺らぐ理由を確認します。' },
  { name: '放射能を読む', text: '放射能は未崩壊の原子核数と同じ割合で低下するため、初期の放射線率に対してどれだけ残っているかが分かります。' },
];

const faq = [
  { question: '半減期とは何ですか?', answer: '半減期とは、不安定な原子核の半分が平均的に崩壊するまでの時間です。1半減期後に50%、2半減期後に25%、3半減期後に12.5%が残ります。' },
  { question: '原子フィールドが正確な割合と一致しないのはなぜですか?', answer: '放射性崩壊は確率的です。式は大きな試料の期待値を示し、原子フィールドは個々の原子にランダムなしきい値を与えてシミュレーションします。' },
  { question: '放射能メーターは残った原子数と同じですか?', answer: '単一の同位体では、放射能は未崩壊の原子核数に比例します。原子が30%残るなら、瞬間的な放射能もおよそ30%です。' },
  { question: '放射性炭素年代測定に使えますか?', answer: '概念理解には使えます。実際の年代測定では校正曲線、汚染、試料処理も補正します。' },
  { question: 'すべての同位体は1つの安定生成物に崩壊しますか?', answer: 'そうとは限りません。複数の娘生成物を含む崩壊系列をたどる同位体もあります。このツールは親同位体の半減期をモデル化します。' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: '同位体',
    sampleAtoms: '試料の原子数',
    elapsedTime: '経過時間',
    halfLife: '半減期',
    remaining: '残存',
    decayed: '崩壊済み',
    activity: '相対放射能',
    timeUnit: '時間単位',
    expectedCurve: '期待曲線',
    atomField: '原子フィールド',
    presetUse: '主な用途',
    oneHalfLife: '1半減期',
    twoHalfLives: '2半減期',
    fourHalfLives: '4半減期',
    custom: 'カスタム',
    liveAtoms: '未崩壊の原子',
    decayedAtoms: '崩壊した原子',
    resetSeed: '新しい原子パターン',
  },
  seo: [
    { type: 'title', text: '放射性半減期計算機: 残存原子、放射能、同位体の例', level: 2 },
    { type: 'paragraph', html: 'この放射性崩壊計算機では、不安定な同位体が一定時間後にどれだけ残るかを推定できます。半減期の式、実在の同位体への適用、残存する親核種、崩壊済み原子核、放射能の低下を調べる検索意図に対応します。' },
    { type: 'paragraph', html: '使用する式は <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong> です。<strong>N0</strong> は初期の親原子核数、<strong>N(t)</strong> は時間 <strong>t</strong> 後の期待残存数、<strong>T1/2</strong> は半減期です。' },
    { type: 'table', headers: ['経過時間', '係数', '残存する親核種', '相対放射能'], rows: [['0半減期', '(1/2)^0', '100%', '100%'], ['1半減期', '(1/2)^1', '50%', '50%'], ['2半減期', '(1/2)^2', '25%', '25%'], ['3半減期', '(1/2)^3', '12.5%', '12.5%'], ['5半減期', '(1/2)^5', '3.125%', '3.125%'], ['10半減期', '(1/2)^10', '0.098%', '0.098%']] },
    { type: 'title', text: '同位体の例と結果の読み方', level: 3 },
    { type: 'table', headers: ['同位体', 'およその半減期', '主な用途', '結果が示すこと'], rows: [['炭素14', '5,730年', '放射性炭素年代測定', 'かつて生物だった物質に残る炭素14の放射能。'], ['ヨウ素131', '8.02日', '医療治療と核事故', '数日単位で放射能がどれだけ速く下がるか。'], ['テクネチウム99m', '6.01時間', '診断画像', '有用な医療放射能が臨床の1日の中で低下する理由。'], ['ウラン238', '44.7億年', '地質年代測定', '長寿命同位体が地球史のスケールで測定可能な理由。'], ['ラドン222', '3.82日', '屋内放射線', '気体の被ばく源がどのように変化するか。']] },
    { type: 'paragraph', html: '単一の親同位体では、放射能は未崩壊の原子核数に比例します。原子フィールドは個々の崩壊のランダム性を示し、大きな試料では滑らかな指数曲線に近づきます。' },
    { type: 'paragraph', html: 'このモデルは1つの半減期で親同位体を扱います。実測では検出器効率、背景放射線、分岐比、娘生成物、生物学的排出、化学形、遮へい、校正曲線が必要になる場合があります。医療指示、線量評価、実験室分析の代わりには使わないでください。' },
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
