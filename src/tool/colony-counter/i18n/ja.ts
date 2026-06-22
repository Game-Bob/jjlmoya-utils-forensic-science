const howTo = [
    {
      name: 'プレートの画像を準備する',
      text: 'コロニーがはっきりとコントラストを成すように、シャーレを暗い背景に置くか、透過照明装置を使用してください。',
    },
    {
      name: 'コロニータイプを特定する',
      text: '形態、色、またはサイズによってコロニーをグループ化するために、異なるマーカーの色を使用します。',
    },
    {
      name: '各コロニーをマークする',
      text: '目に見える各コロニーをクリックします。ツールは自動的に各クリックに番号を付け、重複や数え漏れを防ぎます。',
    },
    {
      name: '最終濃度を計算する',
      text: '塗抹量と希釈倍率を入力して、CFU/mlまたはCFU/gの最終結果を取得します。',
    },
  ];
const faq = [
    {
      question: 'CFUカウントとは何ですか？',
      answer: 'コロニー形成単位（CFU）は、サンプル中の生存している細菌や真菌細胞の数を推定する測定値です。目に見える各コロニーは、単一の細胞または細胞のグループから始まったとみなされます。',
    },
    {
      question: 'なぜデジタルカウンターは手動カウントより優れているのですか？',
      answer: 'デジタルカウントは、コロニーを視覚的にマークする際に「どこまで数えたか分からなくなる」というヒューマンエラーを回避します。また、当ツールではコロニータイプを色で区別できるため、混合プレートの分析が容易になります。',
    },
    {
      question: '1ミリリットルあたりのCFUはどのように計算されますか？',
      answer: 'カウントされたコロニー数に希釈倍率の逆数を掛けます。例えば、1:100希釈で30個のコロニーをカウントした場合、元のサンプルには3000 CFU/mlが含まれています。',
    },
    {
      question: 'プレートが「カウント不能」とみなされるのはいつですか？',
      answer: '標準的な微生物学では、コロニーが250〜300個を超える場合、プレートは混みすぎている（Too Numerous To Count, TNTC）とみなされ、コロニー同士の競合によりデータは信頼できなくなります。',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'colony-counter';
const title = 'コロニーカウンター：シャーレ用デジタルCFUカウントツール';
const description = 'シャーレ上の細菌コロニーをカウントするためのデジタルツール。タイプの区別、エラーの回避、CFUの正確な計算が可能です。';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'クリックしてシャーレの画像をアップロード',
    uploadSubtitle: 'プレートの写真をアップロードしてコロニーのカウントを開始',
    currentModeLabel: '現在のモード',
    typeA: 'タイプA',
    typeB: 'タイプB',
    colonyType: 'コロニータイプ',
    counting: 'カウント中',
    totalCFU: '合計CFU',
    undo: '一つ戻る',
    clearAll: 'すべてクリア',
    infoClick: 'プレートをクリックしてコロニーをマーク',
    infoChange: 'マークする前にタイプを変更',
    confirmClear: 'マークされたすべてのコロニーをクリアしてもよろしいですか？',
  },
  seo: [
    {
      type: 'title',
      text: 'デジタル微生物学：正確なコロニーカウント',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'シャーレ上の細菌コロニーをカウントすることは、微生物学における基本的な技術です。伝統的にはハンドカウンターとマーカーで行われてきましたが、カウントミスや同じコロニーを2回マークしてしまうことが容易に起こります。このデジタルツールはそれらのエラーを排除し、コロニータイプ間の視覚的な区別を可能にします。',
    },
    {
      type: 'title',
      text: 'なぜコロニーカウントが重要なのか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'プレート上のコロニー数は、元のサンプル中の生存微生物の濃度に正比例します。このデータは以下の分野で極めて重要です：',
    },
    {
      type: 'list',
      items: [
        '<strong>食品品質管理：</strong> 細菌汚染の検出。',
        '<strong>医薬品研究：</strong> 抗生物質の有効性評価。',
        '<strong>臨床診断：</strong> 患者サンプルの感染症の定量化。',
        '<strong>バイオテクノロジー：</strong> 組換えタンパク質の生産培養の最適化。',
      ],
    },
    {
      type: 'title',
      text: 'コロニー形成単位 (CFU)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'プレート上の各目に見えるコロニーは、単一の生存細胞に由来すると想定されます。そのため、これらは<strong>CFU</strong>（Colony Forming Units：コロニー形成単位）と呼ばれます。',
    },
    {
      type: 'paragraph',
      html: '<strong>濃度計算式：</strong><br><code>CFU/mL = (カウントされたコロニー数 × 希釈倍率) / 塗抹量</code>',
    },
    {
      type: 'title',
      text: 'カウントのベストプラクティス',
      level: 3,
    },
    {
      type: 'title',
      text: 'カウント可能な範囲',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '手動カウントの理想的な範囲は、1プレートあたり<strong>30〜300コロニー</strong>です。30未満では統計的誤差が大きすぎます。300を超えると、コロニーが融合し始め、個別の判別が不可能になります。',
    },
    {
      type: 'title',
      text: 'コロニータイプ',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '選択培地や鑑別培地では、複数のコロニー形態が見られるのが一般的です：',
    },
    {
      type: 'list',
      items: [
        '<strong>タイプA (ティール/グリーン)：</strong> 大きく粘液状のコロニー。乳糖分解性のグラム陰性菌に典型的。',
        '<strong>タイプB (ピンク/パープル)：</strong> 小さく半透明のコロニー。非分解菌。',
      ],
    },
    {
      type: 'paragraph',
      html: '当ツールでは、異なる色の最大2つのコロニータイプを区別できるため、物理的なマーカーを必要とせずに鑑別カウントが容易になります。',
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
      description: description,
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

