import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-tlc-ink-simulator';
const title = '法科学TLCインククロマトグラフィーシミュレーター';
const description = '疑わしい筆記インクの薄層クロマトグラフィー（TLC）をシミュレートし、溶媒フロントの上昇を可視化、色素バンドを分離し、各色素の正確なRf値を計算します。';

const howTo = [
  {
    name: '疑わしいインクまたは比較対象のペンを選択する',
    text: '脅迫状のインク、または容疑者のペンプロファイルを選択します。インクごとに、固定相への吸着力や極性が異なる色素成分が含まれています。',
  },
  {
    name: '移動相を選択する',
    text: '溶媒システムを変更して、溶媒の極性の違いによって毛細管現象による上昇や、各色素バンドの相対的な移動速度がどのように変化するかを確認します。',
  },
  {
    name: 'TLCプレートを展開する',
    text: '展開時間のスライダーを動かし、溶媒フロントがプレートを上昇する様子を観察します。分離した色素バンドが原線（スポット位置）の上に現れます。',
  },
  {
    name: 'Rf値の表を読み取る',
    text: '各色素の移動距離と溶媒フロントの移動距離を比較します。シミュレーターは、色素の移動距離を溶媒フロントの移動距離で割って正確なRf値を算出します。',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '薄層クロマトグラフィー（TLC）におけるRf値とは何ですか？',
    answer: 'Rf値は「比移値（Retention factor）」のことで、同一の原線から溶媒フロントが移動した距離に対する、化合物（色素）が移動した距離の比率です。単位はなく、通常は0から1の範囲になります。',
  },
  {
    key: 'faq-2',
    question: 'TLCだけで2つのインクサンプルが同じペンで書かれたと証明できますか？',
    answer: 'いいえ。TLCは色素の分離パターンが一致しているか（矛盾しないか）を示すことはできますが、特定のペンを光源として確定するには、検証された比較方法、対照試料、文書化、および専門家による総合的な解釈が必要です。',
  },
  {
    key: 'faq-3',
    question: '溶媒を変更すると、なぜ色素の分離パターンが変わるのですか？',
    answer: '色素は固定相と移動相の間で異なる分配挙動を示します。極性が溶媒とより適合する色素は、移動相によって遠くまで運ばれるため、Rf値が高くなります。',
  },
  {
    key: 'faq-4',
    question: 'なぜ原線（スタートライン）が重要なのですか？',
    answer: '溶媒フロントの移動距離と色素の移動距離は、どちらも原線から測定する必要があります。プレートの下端から測定すると、誤ったRf値が算出されてしまいます。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: '展開プレート付きの薄層クロマトグラフィーチャンバー',
    rulerAria: '溶媒フロントと色素バンドを測定するための仮想ミリメートル定規',
    rulerMarks: '80,60,40,20,0',
    units: '単位系',
    metric: 'メートル法',
    imperial: 'ヤード・ポンド法',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: '分',
    inkSample: 'インクサンプル',
    ransomNote: '疑わしい脅迫状のインク',
    bluePen: '押収された青色ボールペン',
    blackPen: '押収された黒色ボールペン',
    gelPen: '押収されたゲルインクペン',
    solventSystem: '移動相',
    ethanolWater: 'エタノール / 水',
    butanolAcetic: 'ブタノール / 酢酸',
    isopropanolAmmonia: 'イソプロパノール / アンモニア',
    developmentTime: '展開時間',
    frontDistance: '溶媒の移動距離',
    matchScore: 'パターンの類似度',
    solventFront: '溶媒フロント',
    originLine: '原線（スタートライン）',
    pigment: '色素バンド',
    pigmentCyanDye: 'シアン染料',
    pigmentVioletDye: 'バイオレット染料',
    pigmentGrayCarrier: 'グレーキャリア',
    pigmentNavyDye: 'ネイビー染料',
    pigmentYellowDye: 'イエロー染料',
    pigmentRedDye: 'レッド染料',
    pigmentBlueDye: 'ブルー染料',
    pigmentDarkBinder: 'ダークバインダー',
    pigmentTealDye: 'ティール染料',
    pigmentMagentaDye: 'マゼンタ染料',
    pigmentGelBinder: 'ゲルバインダー',
    distance: '移動距離',
    rfValue: 'Rf値',
    disclaimer: '教育用シミュレーションのみ。法科学的なインク比較には、オリジナル文書、検証された実験方法、参照標準物質、および資格を持つ文書鑑定官が必要です。',
  },
  seo: [
    {
      type: 'title',
      text: '法科学におけるインク比較のための薄層クロマトグラフィー（TLC）',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: '学習用シミュレーター',
      title: 'このTLCインクシミュレーターで理解できること',
      html: 'このツールは、<strong>筆記インクの薄層クロマトグラフィー</strong>によって、目に見える1本のインク線が複数の色素バンドに分離する仕組みを説明します。法科学を学ぶ学生、文書鑑定の学習者、保存および展開されたTLCプレートからRf値がどのように計算されるかを理解したい人のために設計されています。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d バンド / d 溶媒', label: '比移値（Rf）の計算式', icon: 'mdi:division' },
        { value: '4', label: '比較されるインクプロファイル', icon: 'mdi:pen' },
        { value: '3', label: 'シミュレートされる移動相', icon: 'mdi:flask-outline' },
        { value: '2', label: 'メートル法とヤード・ポンド法の表示', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: '正しいTLC測定チェックリスト',
      items: [
        '展開を開始する前に、溶媒の液面より高い位置に鉛筆で原線をマークします。',
        '溶媒がプレートの上端に達する前にプレートを取り出します。',
        '溶媒は蒸発して見えにくくなるため、取り出したらすぐに溶媒フロントの位置をマークします。',
        '色素の移動距離と溶媒の移動距離は、必ず同じ原線から測定します。',
        'Rf値を報告する際は、溶媒システム、プレートの種類、展開条件、および対照試料（コントロール）を明記します。',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'TLCで証明（サポート）できること',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'TLCは、同一の条件下において、疑わしいインクと既知のインクが同様の色素分離挙動を示すかどうかを確認できます。',
          points: ['スクリーニング比較', '色素パターンの可視化', 'Rf値の記録文書化', '確認試験に進めるためのサンプル選定'],
        },
        {
          title: 'TLC単独では証明できないこと',
          icon: 'mdi:alert-circle-outline',
          description: 'TLC単独では、特定のペン個体を特定したり、文書の作成年代を特定したり、筆者をつてい特定したりすることはできません。',
          points: ['特定のペン個体への一意の帰属は不可', '筆者の識別は不可', '標準ではインク経年変化の結論は出せない', '検証されたプロトコルの代替にはならない'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['よくある質問', '関連するTLCの概念', '詳しい回答'],
      rows: [
        ['Rf値はどのように計算しますか？', '色素の移動距離を溶媒フロントの移動距離で割ります。', '両方を原線から測定し、割り算を行います。結果には単位はありません。'],
        ['インクが複数の色に分かれるのはなぜですか？', '染料の種類によって、固定相および移動相に対する親和性（吸着力・溶解度）が異なるためです。', '1本の筆跡であっても、移動速度が異なる複数の色素が含まれている場合があります。'],
        ['2本のペンで同じTLCパターンになることはありますか？', 'はい、配合が類似していれば非常によく似た分離パターンを示すことがあります。', 'パターンの類似は化学的な矛盾のなさを示すのみで、特定の1本のペンに個体識別できるわけではありません。'],
        ['Rf値が変化したのはなぜですか？', '溶媒、プレート、湿度、チャンバーの飽和度、温度、スポットの大きさが移動に影響を与えます。', 'Rf値は、条件が完全に制御および記録されている場合のみ比較可能です。'],
      ],
    },
    {
      type: 'title',
      text: 'シミュレーターの分離モデルについて',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'このモデルでは、溶媒フロントの移動を時間とともに減速する毛細管上昇プロセスとして扱い、各色素には、移動する溶媒への親和性と選択された移動相との極性の適合性という2つの簡略化された属性に基づいてRf値が割り当てられています。これは分析機器による化学分析ではなく、教育向けに意図的に簡略化されたものですが、「溶媒が先に移動し、色素が両相間に分配され、測定された移動距離からRf値が算出される」というユーザーが学ぶべき核心的な関係性を再現しています。',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stationary phase', definition: 'TLCプレート上のコーティング（一般的にはシリカゲル）で、化合物と相互作用してその移動速度を遅くします。' },
        { term: 'Mobile phase', definition: 'プレートを上昇し、色素成分を一緒に運ぶ溶媒システムです。' },
        { term: 'Origin line', definition: '展開前にインクサンプルをスポットする、鉛筆で引いたラインです。' },
        { term: 'Solvent front', definition: 'プレートを取り出す前に、移動相が到達した最も高い位置（溶媒前線）です。' },
        { term: 'Rf value', definition: '比移値（retention factor）。化合物の移動距離を溶媒フロントの移動距離で割った値です。' },
      ],
    },
    {
      type: 'tip',
      title: '実務的な鑑定上のヒント',
      html: '法科学的な文書鑑定において、「不一致」は候補となるペンの配合を排除できるため、特に有用な結果となります。一方で、「一致」を示すTLCパターンは、その条件下で化学的に矛盾がないことを示すにとどまり、必ずしも同一のペンから書かれたことを決定づけるものではありません。',
    },
    {
      type: 'proscons',
      title: 'TLCインク比較の長所と限界',
      items: [
        { pro: '迅速、安価であり、インク色素の分離挙動を視覚的かつ直感的に把握できます。', con: '文書から小さなサンプルを切り取る必要があるため、通常は破壊検査となります。' },
        { pro: 'Rf値を用いることで、疑わしいサンプルと既知のサンプルを構造化された方法で比較できます。', con: '溶媒、プレート、湿度、展開条件が変わるとRf値が変動します。' },
        { pro: 'より高度な分析を行う前のスクリーニング手法として非常に有用です。', con: 'より広範な証拠がない限り、ペンという個体レベルでの鑑定結論は下せません。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: '鑑定上の注意点',
      title: 'インククロマトグラフィーの証拠価値を過大評価しないこと',
      html: 'ブラウザシミュレーターでは、紙質、インクの経年変化、抽出化学、プレートの品質、汚染、または機器分析による確認試験を行うことはできません。測定理論と鑑定における解釈の限界を学ぶためにこれを使用し、実際の鑑定では検証済みの法科学的文書鑑定方法に基づいてください。',
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
