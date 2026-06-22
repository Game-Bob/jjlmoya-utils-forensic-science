const slug = 'microwave-leak-detector';
const description = 'WiFiネットワークのリアルタイム干渉を測定することで、電子レンジから放射線が漏れているかどうかを分析します。科学的な安全ツールです。';
const title = '電子レンジ漏洩検知器：WiFi干渉可視化ツール';
const howTo = [
    {
      name: '2.4GHzのWiFiネットワークに接続する',
      text: '干渉が測定可能になるように、携帯電話やノートPCが5GHz帯に接続されていないことを確認してください。',
    },
    {
      name: 'ベースラインのレイテンシテストを開始',
      text: '電子レンジをオフにした状態で開始ボタンを押し、安定した接続の基準値を確立します。',
    },
    {
      name: '電子レンジをオンにする',
      text: 'コップ一杯の水を30〜60秒間加熱し、デバイスを持ってレンジの近くに立ちます。',
    },
    {
      name: 'リアルタイムグラフを分析',
      text: 'レンジの稼働中に、レイテンシが100〜200ms以上に上昇するか、またはパケット損失が発生するかを観察します。',
    },
  ];
const faq = [
    {
      question: 'ウェブサイトがどうやって電子レンジを検知するのですか？',
      answer: '魔法のセンサーではなく、ネットワークのレイテンシを利用しています。2.4GHzのWiFiと電子レンジは両方とも同じ周波数（約2450MHz）で動作します。もし電子レンジのシールドが不十分だと、WiFiと衝突する「ノイズ」を発生させ、レイテンシ（ping）が劇的に増加します。',
    },
    {
      question: '電子レンジから漏洩があると危険ですか？',
      answer: 'わずかなWiFi干渉は正常なことであり、電力は距離とともに急速に減衰するため、直ちに健康にリスクがあるわけではありません。しかし、大幅な漏洩がある場合は、ドアやメッシュの密閉性が低いことを示しており、技術的安全性のために点検が必要です。',
    },
    {
      question: 'なぜ5GHzのWiFiではテストができないのですか？',
      answer: '5GHzのWiFiは、電子レンジよりもはるかに高い周波数帯域で動作しているからです。テストを効果的に行うには、デバイスがルーターの2.4GHzネットワークに接続されている必要があります。',
    },
    {
      question: 'グラフ上のレイテンシのスパイクは何を意味していますか？',
      answer: '電子レンジの使用中に継続的なスパイクが発生する場合、電磁信号が「漏れ」て空気を飽和させ、WiFiのデータパケットが予定通りに届くのを妨げていることを示唆しています。',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'コピー済み',
    noHistory: '履歴なし',
    load: '読み込む',
    delete: '削除',
    microwaveDetection: '電子レンジ検知',
    shieldingAnalysis: 'シールド分析',
    startTest: 'テスト開始',
    stopTest: 'テスト停止',
    waitingForStart: '開始を待機中...',
    detectingInterference: '干渉を検知中...',
    baseLevel: 'ベースレベル',
    activeLevel: 'アクティブレベル',
    leakProbability: '漏洩の可能性',
    lowLeak: '低',
    mediumLeak: '中',
    highLeak: '高',
    pingLabel: 'レイテンシ (ms)',
    packetLossLabel: 'パケット損失 (%)',
    rfInterferenceMonitor: 'RF干渉モニター',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / ジッター',
    systemReady: 'システム準備完了',
    physicalRequirement: '物理的要件',
    physicalDesc: 'この検知器は2.4GHz帯（電子レンジの周波数）の干渉を利用します。正しく動作させるために、2.4GHzのWiFiネットワーク（5GHz/6GHzではなく）に接続していることを確認するか、デバイスの近くでスマートフォンを使用してください。',
    understandStart: '理解しました、スキャンを開始',
    rfInterferenceTitle: '干渉モニター',
    connectToAnalyze: '熱干渉分析を開始するには接続してください。',
    audioFeedback: '音声フィードバック',
    muteUnmute: 'ミュート / 解除',
    static: '静的',
  },
  seo: [
    {
      type: 'title',
      text: '波動物理学：あなたの電子レンジは本当に放射線を漏らしているのか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '電子レンジは、現代のキッチンにおいて最も誤解されている家電製品かもしれません。純粋主義者には嫌われ、実利主義者には愛されるこのツールは、閉じ込められたエネルギーと外の世界との絶え間ない戦いを隠し持っています。',
    },
    {
      type: 'paragraph',
      html: '純粋に物理学的な観点から見ると、電子レンジは<strong>空洞共振器</strong>であり、非常に特定の周波数である<strong>2.45 GHz</strong>の電磁放射を水分子に照射するように設計されています。この周波数は恣意的なものではなく、水粒子の双極子振動を引き起こし、摩擦によって熱を発生させるために必要です。問題は、これが802.11b/g/n WiFi規格で使用されている周波数と全く同じであるということです。',
    },
    {
      type: 'title',
      text: '電磁干渉 (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '2.4GHz帯で動作するWiFiデバイスは、電子レンジと同じ「空気」を奪い合っています。完璧なレンジであれば、<strong>ファラデーケージ</strong>（ドアや内壁に見える金属メッシュ）がエネルギーを100%封じ込めているはずです。',
    },
    {
      type: 'paragraph',
      html: 'しかし、長期的にはどんなケージも完璧ではありません。ドアのシール、マグネットのラッチ、金属の摩耗などにより、少量のエネルギーが漏れ出す可能性があります。これらのレベルは通常、人体に対する安全基準をはるかに下回っていますが、WiFiネットワークカードにとっては<strong>巨大</strong>なノイズとなり、レイテンシ、パケット損失、および当ツールが測定する特徴的な「ジッター」を引き起こします。',
    },
    {
      type: 'title',
      text: '自家製ファラデーケージテスト',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'デジタルのジッター測定ほど正確ではありませんが、レンジのシールド状態をチェックする非常に簡単なアナログ的な方法があります。',
    },
    {
      type: 'list',
      items: [
        '<strong>ステップ 1 - 電話：</strong> 携帯電話を電子レンジの中に入れます（<strong>いかなる状況でも電源を入れないでください！</strong> ドアを閉めるだけです）。',
        '<strong>ステップ 2 - 通話：</strong> 別の電話からその中にある電話に電話をかけます。もし電話が鳴れば、ファラデーケージに欠陥があるか、携帯電話の周波数に調整されていません。もし「圏外」であれば、シールドは正しく機能しています。',
      ],
    },
    {
      type: 'title',
      text: '神話 vs 科学的現実',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>「電子レンジは水の分子構造を変える」</strong> - 嘘。電子レンジの放射線は<em>非電離放射線</em>です。化学結合を切断したり、DNAを改変したりするほどのエネルギーはありません。単に水分子を振動させ、その運動エネルギー（温度）を高めるだけです。',
        '<strong>「放射線が食品に蓄積される」</strong> - 嘘。マイクロ波は光のようなものです。スイッチを切れば消えてしまいます。温まった食べ物はマイクロ波を放出しません。キャンプファイヤーや鍋と同じように、赤外線（熱）を放出するだけです。',
        '<strong>「回っている皿を見ると目が悪くなる」</strong> - 部分的に真実。ドアのガラスには、2.45GHzの波長を遮断するメッシュが設計されています。しかし、もしメッシュが損傷していれば、ガラスはマイクロ波を止めません。目の水晶体は熱に非常に敏感で血流が悪いため、長時間の直接被曝（漏洩箇所の近くなど）は熱性白内障を引き起こす可能性があります。',
      ],
    },
    {
      type: 'title',
      text: 'このデジタル検知器の仕組みは？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当ツールは放射線を直接測定するわけではありません（スマートフォンにはそのためのセンサーはありません）が、<strong>主な症状</strong>を測定します。2.45GHzの放射線分子がレンジから漏れると、デバイスのWiFi信号と「衝突」します。これにより、以下が発生します：',
    },
    {
      type: 'list',
      items: [
        '<strong>パケットの再送信：</strong> ルーターがメッセージの破損を検知して再送する必要が生じ、レイテンシが増加します。',
        '<strong>ジッターの変動：</strong> 応答時間の不安定さの尺度です。高いジッターは、大規模な外部干渉の明確なサインです。',
        '<strong>パフォーマンスの低下：</strong> 電波スペクトルの飽和により、転送速度が急落します。',
        '<strong>背景ノイズ：</strong> 電子レンジがノイズを注入し、「ノイズフロア」を上昇させます。これにより、デバイスが実際のデータと放射線の混信を区別することが困難になります。',
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

