import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dental-skeletal-third-molar-age-estimator';
const title = '歯科・骨格・第三大臼歯による年齢推定ツール';
const description = '歯の発生、骨格の成熟度、第三大臼歯の指標から法医学的年齢区間を推定し、スクリーニングとケースのトリアージを支援します。';

const howTo = [
  {
    name: '証拠の重点を選択する',
    text: 'バランスの取れたトリアージには「混合証拠」、歯科所見の信頼性が高い場合は「歯科優先」、X線による骨格指標が主な情報源の場合は「骨格優先」を選択してください。',
  },
  {
    name: '各成熟度指標を評価する',
    text: '各ステージを0から8の段階で評価します。低いステージは初期の発達、中間ステージは青年期の成熟、高いステージは成熟またはほぼ成熟した所見を表します。',
  },
  {
    name: '単一の年齢ではなく、推定区間として解釈する',
    text: '最小値、推定値、最大値を合わせて確認してください。生物学的発達には個人差があるため、法医学的な年齢評価は必ず区間として表現する必要があります。',
  },
  {
    name: '指標間の不一致を確認する',
    text: '歯科、骨格、第三大臼歯のステージ間に乖離がある場合、結果を探索的なものとして扱い、結論を下す前にさらに確実な証拠を収集してください。',
  },
];

const faq = [
  {
    question: 'このツールで法的な成人年齢を決定できますか？',
    answer: 'いいえ。本ツールは教育およびトリアージ用途のスクリーニング用計算機です。法的な年齢決定には、検証された地域のプロトコル、資格のある専門家による鑑定、正式な身元確認書類、および管轄区域固有の基準が必須です。',
  },
  {
    question: 'なぜ結果が年齢区間で表示されるのですか？',
    answer: '歯の萌出、骨格癒合、第三大臼歯の発達は、祖先、栄養状態、健康状態、性別、参照集団、および画像診断法によって大きく異なります。単一の正確な年齢を提示するよりも、区間で示す方が科学的に適切です。',
  },
  {
    question: '「混合証拠」とはどういう意味ですか？',
    answer: '「混合証拠」は、歯の発生、骨格の成熟度、および第三大臼歯のステージを総合的に加味します。特定の指標が他の指標よりも明らかに信頼性が高いとは言えない場合に使用します。',
  },
  {
    question: '第三大臼歯はすべてのケースで信頼できますか？',
    answer: '第三大臼歯は青年期後期から若年成人期の評価に有用ですが、個人差が大きいため注意が必要です。欠如、病変、集団間の違い、X線画像の鮮明度により、その価値が制限される場合があります。',
  },
  {
    question: '実際の法医学的鑑定で使用すべきですか？',
    answer: 'あくまで予備的な補助ツールとして使用してください。実際の鑑定では、検証された学術的方法、調整された参照データ、専門家による独立したレビュー、および不確実性と限界の透明な報告が求められます。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: '法医学ケースボード',
    controls: '法医学的年齢コントロール',
    results: '法医学的年齢結果',
    maturityProfile: '動的成熟度プロファイル',
    screeningOnly: 'スクリーニング推定',
    evidenceType: '証拠の重点',
    mixedEvidence: '混合証拠',
    dentalPriority: '歯科優先',
    skeletalPriority: '骨格優先',
    dentalStage: '歯の発生ステージ',
    epiphysealStage: '骨端線癒合ステージ',
    thirdMolarStage: '第三大臼歯ステージ',
    minimumAge: '最小',
    likelyAge: '推定',
    maximumAge: '最大',
    maturityScore: '成熟度スコア',
    stageLabel: 'ステージ',
    ageUnit: '歳',
    dentalShort: '歯科',
    boneShort: '骨格',
    molarShort: '臼歯',
    dentalStageHelp: '歯冠、歯根、歯根尖の形成状態。',
    epiphysealStageHelp: '成長板の閉鎖と骨格癒合の程度。',
    molarStageHelp: '第三大臼歯の石灰化と歯根尖閉鎖の程度。',
    dentalStage0: 'なし',
    dentalStage1: '咬頭',
    dentalStage2: '歯冠',
    dentalStage3: '歯根開始',
    dentalStage4: '歯根半分',
    dentalStage5: '歯根完成',
    dentalStage6: '歯根尖狭小',
    dentalStage7: '歯根尖閉鎖中',
    dentalStage8: '完了',
    epiphysealStage0: '開放',
    epiphysealStage1: '縁',
    epiphysealStage2: '狭小化',
    epiphysealStage3: '架橋',
    epiphysealStage4: '半分癒合',
    epiphysealStage5: 'ほぼ癒合',
    epiphysealStage6: '線のみ',
    epiphysealStage7: 'ほぼ閉鎖',
    epiphysealStage8: '閉鎖',
    molarStage0: 'なし',
    molarStage1: '咬頭',
    molarStage2: '歯冠開始',
    molarStage3: '歯冠完成',
    molarStage4: '歯根開始',
    molarStage5: '歯根半分',
    molarStage6: '歯根完成',
    molarStage7: '歯根尖閉鎖中',
    molarStage8: '完了',
    confidenceexploratory: '探索的',
    confidencemoderate: '中等度',
    confidencestrong: '強い',
    noteTriage: '法的な年齢決定ではなく、トリアージのための推定値として扱ってください。',
    noteFinalAssessment: '最終的な法医学的年齢評価には、放射線診断、歯科検査、臨床履歴、および管轄区域固有の基準を統合する必要があります。',
    noteWideInterval: '各指標間に4年以上の乖離があるため、推定区間が拡大されています。',
  },
  seo: [
    {
      type: 'title',
      text: '法医学的年齢推定ツール：歯科・骨格・第三大臼歯スクリーニング計算機',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'この法医学的年齢推定ツールは、正式な鑑定の前に生物学的成熟度の証拠を整理するための迅速かつ透明性の高い方法を提供します。歯の発生、骨端線癒合、第三大臼歯のステージを組み合わせて年齢区間を算出します。<strong>法医学的年齢推定計算機</strong>、<strong>歯科年齢評価</strong>、<strong>骨格成熟度推定</strong>、<strong>第三大臼歯年齢推定</strong>といったニーズに対し、指標の解釈、組み合わせ方、および不確実性の考慮事項を明確に示します。',
    },
    {
      type: 'paragraph',
      html: '結果は<strong>最小年齢、推定年齢、最大年齢</strong>として表示されます。生物学的発達の個人差を考慮し、単一の正確な年齢を提示することは避けています。栄養状態、健康状態、祖先、性別、参照集団、画像品質、歯科疾患、観察者間変動などが解釈に影響を与える可能性があるため、法的な結論ではなく、あくまで構造化された補助ツールとして活用してください。',
    },
    {
      type: 'title',
      text: '3つの成熟度指標の解説',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'スライダーの0〜8ステージは、発達段階を抽象化したものです。ステージ0は成熟徴候の欠如、ステージ8は完全な成熟を示します。これらは特定の臨床メソッドそのものではなく、歯科・骨格・第三大臼歯の証拠を比較し、区間推定に反映させるための実用的な指標です。',
    },
    {
      type: 'table',
      headers: ['指標', '定義', '検索の目的', '主な注意点'],
      rows: [
        ['歯の発生', '第三大臼歯以外の歯の形成・萌出・成熟。', '小児・青年の歯科年齢評価。', '歯科疾患や欠損歯、集団特性によるバイアスに注意。'],
        ['骨端線癒合', '成長板の進行性閉鎖。', '青年期・若年成人の骨格成熟度評価。', '観察部位、性別、内分泌状態、画像法に依存する。'],
        ['第三大臼歯', '親知らずの形成・成熟度。', '他の歯が成熟した後の青年期後期の評価。', '欠如、抜歯、埋伏、画像精度が大きく影響する。'],
      ],
    },
    {
      type: 'title',
      text: '年齢区間の解釈',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '3つの値を総合的に読み解きます。<strong>推定年齢</strong>は、選択された証拠の重点に基づく加重中央値です。<strong>最小値</strong>と<strong>最大値</strong>は実用的な不確実性の範囲を示します。指標が一致すれば範囲は狭まり、不一致が大きければ範囲は広がり、信頼度ラベルが低下します。',
    },
    {
      type: 'table',
      headers: ['結果パターン', '示唆内容', '推奨される次のステップ'],
      rows: [
        ['強い信頼度・狭い区間', '指標が一致し、一貫した発達段階にある。', 'ソース指標を記録し、法的な検証が必要か検討する。'],
        ['中等度の区間', '不一致があるか、重点設定の影響がある。', '画質やステージ割り当て、優先指標を再評価する。'],
        ['広い探索的区間', '指標の矛盾や発達期間の不一致がある。', '単独の判断を避け、追加記録や専門家のレビューを求める。'],
      ],
    },
    {
      type: 'title',
      text: '証拠モードの選択（歯科・骨格・混合）',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>混合証拠</strong>は全ての指標をバランスさせるため、一般的なスクリーニングに適しています。歯科的所見が詳細で信頼性が高い場合は<strong>歯科優先</strong>を、骨格指標が最も強力なデータである場合は<strong>骨格優先</strong>を選択します。この選択は証拠の質そのものを高めるものではなく、数学的な重み付けを調整するものです。',
    },
    {
      type: 'list',
      items: [
        '<strong>歯科優先：</strong>歯の発生が明確で、第三大臼歯データが利用可能な場合に適しています。',
        '<strong>骨格優先：</strong>骨端線癒合が最も詳細に文書化されている場合に適しています。',
        '<strong>混合証拠：</strong>バランスの取れた最初のレビューに最適です。',
        '<strong>信頼度ラベル：</strong>過度な解釈を避けるための指標として活用してください。',
      ],
    },
    {
      type: 'title',
      text: '法医学的年齢推定と身元確認',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '年齢推定はケースをサポートするものであり、身元を確定したり、書類調査を代替するものではありません。移民、児童保護、刑事責任、災害犠牲者識別などの場面では、多角的な鑑定が必要です。責任ある鑑定報告書には、使用された方法、参照集団、画像ソース、鑑定者の資格、信頼度の言語的表現、および制限事項を明記してください。',
    },
    {
      type: 'paragraph',
      html: '本ツールは<strong>教育、トリアージ、プロトコル計画、透明性のあるコミュニケーション</strong>を目的としています。年齢結論には慎重さが求められ、18歳などの法的に重要な閾値を、計算機の結果のみで決定すべきではないことを常に認識してください。',
    },
    {
      type: 'title',
      text: 'レポート作成前のチェックリスト',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>証拠ソースの確認：</strong>歯科検査、パノラマX線、手根骨画像、鎖骨画像など、何に基づくステージ判定かを明記する。',
        '<strong>欠落・不確実データの記録：</strong>第三大臼歯の欠如、画質不良、発達異常はレポートに明示する。',
        '<strong>検証済み方法の使用：</strong>法的判断には、その地域で認められた歯科的・骨格的鑑定手法を選択する。',
        '<strong>不確実性の明示：</strong>「正確な暦年齢」を示唆する言葉を避け、推定区間として報告する。',
        '<strong>専門家によるレビュー：</strong>リスクの高いケースは、法歯科学者、放射線科医、人類学者による再鑑定を行う。',
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