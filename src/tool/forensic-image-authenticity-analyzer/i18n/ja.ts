import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-image-metadata-authenticity-analyzer';
const title = '画像メタデータと真正性の法科学アナライザー';
const description = '画像ヘッダー、EXIF撮影情報、GPS座標、編集ソフトの痕跡、先頭バイト列をブラウザ上でローカル解析します。';

const howTo = [
  { name: '原本証拠を保全する', text: '法科学コピーを用いて作業し、元ファイルとその暗号学的ハッシュはこのブラウザツールの外で保管してください。' },
  { name: '画像をローカルで読み込む', text: 'JPEG または PNG をドラッグするか選択します。ファイルはブラウザメモリ内で読み込まれ、アップロードされません。' },
  { name: 'メタデータと位置情報を確認する', text: '撮影時刻、カメラ情報、ソフトウェア、GPS フィールドを、事案記録や取得記録と照合してください。' },
  { name: '完全性シグナルを解釈する', text: '編集ソフトの署名や欠落フィールドは、改ざんの証明ではなく調査の手掛かりとして扱ってください。' },
  { name: '16進プレビューを確認する', text: '強調表示されたヘッダー領域とメタデータ領域を使ってコンテナ構造を把握し、詳細調査用のオフセットを記録してください。' },
];

const faq = [
  { question: 'メタデータだけで写真の真正性を証明できますか？', answer: 'いいえ。メタデータは削除、複製、改変が可能です。真正性評価には、ファイル構造、来歴、ハッシュ、視覚検査、圧縮解析、検証済みの法科学手法を組み合わせる必要があります。' },
  { question: 'Adobe や GIMP の痕跡は悪意ある編集の証拠ですか？', answer: 'いいえ。ソフトウェアがメタデータを書き込んだ、またはファイルを書き出した可能性を示すだけです。正当な色補正、編集部での処理、証拠資料化でも同じ痕跡が残ることがあります。' },
  { question: '画像はアップロードされますか？', answer: 'いいえ。解析はブラウザメモリ内で行われます。ただし、機微な資料を開く前に、所属組織の証拠取扱方針に従ってください。' },
  { question: 'GPS データがないのはなぜですか？', answer: 'カメラが GPS に対応していない、位置記録が無効だった、プラットフォームがメタデータを削除した、あるいは再エンコードされた可能性があります。' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacy: 'ローカル限定のバイナリ検査',
    dropTitle: '画像を証拠テーブルに置く',
    dropHint: 'JPEG または PNG をここにドロップするか、ファイルを選択してください。アップロードは行われません。',
    chooseFile: '画像を選択',
    replaceFile: '画像を差し替え',
    waiting: '証拠待機中',
    metadata: '撮影メタデータ',
    integrity: '完全性シグナル',
    location: '記録された位置',
    hex: '16進証拠ウィンドウ',
    hexHint: '先頭 512 バイト · シアンのヘッダー · アンバーのメタデータ · 中立的な画像データ',
    noData: '読み取れる値なし',
    noGps: '読み取れる GPS 座標は見つかりませんでした。',
    mapLink: '座標を OpenStreetMap で開く',
    score: 'ヒューリスティック信頼度',
    disclaimer: '高いスコアは真正性を証明しません。原本を保全し、暗号学的ハッシュを計算し、事案判断には検証済みのラボ手順を用いてください。',
    fileName: 'ファイル',
    fileSize: 'サイズ',
    fileType: 'コンテナ',
    camera: 'カメラ',
    captured: '撮影',
    software: 'ソフトウェア',
    coordinates: '座標',
    statusNoObvious: '明白な編集兆候なし',
    statusReview: '再確認を推奨',
    statusEditing: '編集署名を検出',
    processing: 'バイナリ証拠を読み取り中...',
    loadError: 'ファイルを解析できませんでした。有効な JPEG または PNG 画像を選択してください。',
  },
  seo: [
    { type: 'title', text: '画像メタデータと真正性シグナルを分析する方法', level: 2 },
    { type: 'paragraph', html: '画像メタデータの法科学アナライザーは、捜査官、記者、法務担当、コンプライアンス担当、研究者が、<strong>画像メタデータは写真について何を本当に示せるのか</strong>という高意図の問いに答えるのを助けます。メタデータは撮影、位置、ソフトウェア処理、ファイル構造に関する手掛かりを与えますが、それ自体が真実判定機ではありません。最大の価値はトリアージにあり、どのファイルをより深く調べるべきかを示します。' },
    { type: 'paragraph', html: 'このブラウザツールは単なる EXIF ダンプ以上のものを求めるユーザー向けです。選択した JPEG / PNG をローカルで読み取り、カメラ項目、撮影時刻、ソフトウェアタグ、座標、コンテナ手掛かり、先頭バイトをまとめて表示します。これは <em>写真の真正性チェック</em>、<em>EXIF メタデータ解析</em>、<em>画像が編集されたか確認する方法</em> といった検索意図に対応します。' },
    { type: 'paragraph', html: '最も重要な原則は、結果を評決ではなく文脈として読むことです。メタデータが有用でも画像が誤解を招く場合がありますし、メタデータが少なくても画像が真正である場合もあります。そのため、メタデータは来歴、ハッシュ、証言、デバイス履歴、検証済み手法と照合すべき一つの証拠層として扱う必要があります。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

