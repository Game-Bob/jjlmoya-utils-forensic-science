import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'crystal-lattice-structure-finder';
const title = '結晶格子構造ファインダー';
const description = '単純立方格子、面心立方格子 (FCC)、六方最密充填 (HCP) の単位格子をインタラクティブな3Dビューア、原子充填率、配位数、理論密度計算機で探索できます。';

const howTo = [
  {
    name: '格子または材料を選択',
    text: '単純立方格子、FCC、HCPなどの構造ファミリーから始めるか、実際の材料プリセットを選択して格子定数と原子または式量質量を読み込みます。',
  },
  {
    name: '単位格子を回転',
    text: '角度とズームコントロールをドラッグして、どの原子が従来のセルの角、面、または内部にあるかを確認します。',
  },
  {
    name: '充填率と密度を確認',
    text: '選択した構造の原子充填率、配位数、セルあたりの原子数、セル質量、セル体積、理論密度を比較します。',
  },
  {
    name: 'カスタム定数をテスト',
    text: '格子パラメータa、c/a比、質量を編集して、結晶が膨張、収縮、または組成が変化したときに理論密度がどのように変わるかを確認します。',
  },
];

const faq = [
  {
    question: '結晶格子における単位格子とは？',
    answer: '単位格子は、空間を埋め尽くして結晶を構築することができる最小の繰り返し三次元箱です。その原子は隣接するセルと共有される可能性があるため、セルあたりの正味原子数は境界上に描かれた球の数よりも少なくなることがあります。',
  },
  {
    question: 'FCCとHCPの充填率が同じなのはなぜ？',
    answer: 'FCCと理想的なHCPはどちらも同じ大きさの球の最密充填配置です。FCCはABCABC、HCPはABABという異なる順序で密な三角形層を積み重ねますが、どちらも空間の約74パーセントを原子で満たします。',
  },
  {
    question: '理論密度はどのように計算されますか？',
    answer: '計算機は1つの単位格子内の質量を単位格子の体積で割ります。セル質量は、セルあたりの原子数または式単位にモル質量を掛け、アボガドロ定数で割ることで得られます。',
  },
  {
    question: '測定密度が理論結果と異なるのはなぜですか？',
    answer: '実際の試料には、空孔、不純物、気孔、粒界、同位体混合物、温度膨張、または複数の相が含まれる可能性があります。理論値は選択された格子定数を持つ完全な結晶を仮定しています。',
  },
  {
    question: '岩塩 (halite) は実際にFCC金属格子ですか？',
    answer: 'いいえ。岩塩はイオン性の岩塩であり、金属ではありません。プリセットが従来のFCC派生セルを使用するのは、NaClが立方セルあたり4つの式単位を持つため、密度計算の練習に役立つからです。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'インタラクティブ結晶単位格子',
    material: '材料',
    lattice: '格子',
    rotation: '回転',
    zoom: 'ズーム',
    latticeA: '格子定数 a',
    cRatio: 'c/a比',
    molarMass: 'モル質量',
    atomsPerCell: 'セルあたりの原子数',
    packingFactor: '充填率',
    coordination: '配位数',
    density: '密度',
    cellVolume: 'セル体積',
    cellMass: 'セル質量',
    radius: '原子半径',
    cornerAtoms: '角の原子',
    faceAtoms: '面の原子',
    interiorAtoms: '内部の原子',
    materialNote: '材料ノート',
    formula: '化学式',
    resetView: '表示をリセット',
    crystalProperties: '結晶の特性',
    physicalMetrics: '物理的指標',
    latticeSimpleCubic: '単純立方格子',
    latticeFcc: '面心立方格子 (FCC)',
    latticeHcp: '六方最密充填 (HCP)',
    shortSc: 'SC',
    shortFcc: 'FCC',
    shortHcp: 'HCP',
    materialCopper: '銅',
    materialCopperNote: '電気伝導率の高い一般的なFCC金属。',
    materialAluminum: 'アルミニウム',
    materialAluminumNote: '熱伝導率が高く、軽量なFCC金属。',
    materialPolonium: 'ポロニウム',
    materialPoloniumNote: '単純立方格子構造を持つ希少元素。',
    materialMagnesium: 'マグネシウム',
    materialMagnesiumNote: '強度対重量比に優れた軽量HCP金属。',
    materialTitanium: 'チタン',
    materialTitaniumNote: '航空宇宙用途で広く使用される高強度HCP金属。',
    materialHalite: '岩塩',
    materialHaliteNote: '4つのNaCl単位を持つFCC派生従来型セルのイオン性岩塩。',
    shortSimpleCubic: 'SC',
    shortFaceCenteredCubic: 'FCC',
    shortHexagonalClosePacked: 'HCP',
    shortBodyCenteredCubic: 'BCC',
    shortDiamondCubic: 'DC',
    shortRockSalt: 'NaCl',
    shortCesiumChloride: 'CsCl',
    shortZincBlende: 'ZnS',
    shortWurtzite: 'WZ',
    shortPerovskite: 'ABO3',
    shortRutile: 'TiO2',
    latticeBodyCenteredCubic: '体心立方',
    latticeCesiumChloride: '塩化セシウム型',
    latticeDiamondCubic: 'ダイヤモンド立方',
    latticeFaceCenteredCubic: '面心立方',
    latticeHexagonalClosePacked: '六方最密充填',
    latticePerovskite: '立方ペロブスカイト',
    latticeRockSalt: '岩塩型',
    latticeRutile: 'ルチル型',
    latticeWurtzite: 'ウルツ鉱型',
    latticeZincBlende: '閃亜鉛鉱型',
    materialAlphaIron: 'α鉄',
    materialAlphaIronNote: '室温での体心立方構造の鉄相。',
    materialTungsten: 'タングステン',
    materialTungstenNote: '非常に高い融点を持つ高密度のBCC耐火金属。',
    materialSilicon: 'シリコン',
    materialSiliconNote: '集積回路で使われるダイヤモンド立方半導体。',
    materialDiamond: 'ダイヤモンド',
    materialDiamondNote: 'ダイヤモンド立方構造の共有結合性炭素ネットワーク。',
    materialCesiumChloride: '塩化セシウム',
    materialCesiumChlorideNote: '八配位を持つ相互貫入した単純立方イオン構造。',
    materialZincSulfide: '硫化亜鉛',
    materialZincSulfideNote: '閃亜鉛鉱型とも呼ばれる四面体配位構造。',
    materialGalliumNitride: '窒化ガリウム',
    materialGalliumNitrideNote: 'LEDやパワーエレクトロニクスで使われるウルツ鉱型半導体。',
    materialStrontiumTitanate: 'チタン酸ストロンチウム',
    materialStrontiumTitanateNote: '基板や誘電体モデルとしてよく使われる立方ペロブスカイト酸化物。',
    materialRutileTitania: 'ルチル型チタニア',
    materialRutileTitaniaNote: 'チタンの八面体配位を持つルチル型TiO2構造。',
  },
  seo: [
    {
      type: 'title',
      text: '単位格子、充填率、密度のための結晶格子構造ファインダー',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'この結晶格子構造ファインダーは、単位格子のイメージと、学生や材料科学者が通常必要とする計算とを結び付けるのに役立ちます。単純立方格子、面心立方格子、六方最密充填構造を調べ、原子充填率、配位数、セルあたりの原子数、格子パラメータからの原子半径、セル体積、セル質量、理論密度を実際の材料プリセットまたはカスタム入力から計算できます。',
    },
    {
      type: 'paragraph',
      html: 'インタラクティブビューアは、結晶学における一般的な難しさを考慮して設計されています。境界原子は見えますが、各境界原子の一部だけが選択されたセルに属します。モデルを回転させると、数式を使用する前に、角のサイト、面のサイト、内部のサイトの違いがよりわかりやすくなります。',
    },
    {
      type: 'title',
      text: '単純立方格子、FCC、HCPの比較',
      level: 3,
    },
    {
      type: 'table',
      headers: ['構造', 'セルあたりの正味原子数', '配位数', '原子充填率', '代表的な例'],
      rows: [
        ['単純立方格子', '1', '6', '52.36%', 'アルファポロニウムが古典的な元素の例です。'],
        ['面心立方格子 (FCC)', '4', '12', '74.05%', '銅、アルミニウム、ニッケル、銀、金、および多くの延性金属。'],
        ['六方最密充填 (HCP)', '6', '12', '74.05%', 'マグネシウム、アルファチタン、亜鉛、コバルト、ベリリウム。'],
      ],
    },
    {
      type: 'paragraph',
      html: '単純立方格子の充填は、原子が立方体の辺に沿って接触し、各角の原子がセルに8分の1を寄与するため、視覚化が容易です。FCCは各面の中心に原子を追加するため、原子は面の対角線に沿って接触し、従来の立方セルあたりの正味数は4原子になります。HCPは立方体の箱の代わりに六方層を使用しますが、理想的なHCPはFCCと同じ最密充填限界に達します。',
    },
    {
      type: 'title',
      text: '原子充填率の計算式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '原子充填率は、単位格子の体積のうち硬球原子が占める割合です。<strong>APF = セル内の原子の体積 / 単位格子の体積</strong>として計算されます。単純立方格子の場合、半径a/2の1つの原子が立方セルに収まるため、pi / 6になります。FCCと理想的なHCPはどちらも約0.7405に達し、これは等しい球の最大充填率です。',
    },
    {
      type: 'paragraph',
      html: '充填率は密度と同じではありません。APFは同一の球が空間をどの程度効率的に充填するかを表しますが、密度はモル質量や格子寸法にも依存します。軽いHCP金属と重いFCC金属は、類似した充填率を持ちながらも非常に異なる密度を持つことがあります。',
    },
    {
      type: 'title',
      text: '計算機で使用される理論密度の計算式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '計算機は<strong>rho = nM / (NA Vcell)</strong>を使用します。この式において、<strong>n</strong>はセルあたりの原子数または式単位、<strong>M</strong>はグラム毎モルでのモル質量、<strong>NA</strong>はアボガドロ定数、<strong>Vcell</strong>は立方センチメートルでの単位格子の体積です。立方セルはa^3を使用します。六方セルは(3 sqrt(3) / 2) a^2 cを使用し、cはc/a比によって指定されます。',
    },
    {
      type: 'paragraph',
      html: '格子定数は通常オングストロームで表記されるため、計算機は密度計算の前にオングストロームをセンチメートルに変換します。格子定数のわずかな変化は、立方セルの場合、体積が三乗でスケーリングするため、密度に顕著な影響を与える可能性があります。',
    },
    {
      type: 'title',
      text: '金属および鉱物の格子プリセットの使用方法',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>銅とアルミニウム:</strong> セルあたりの正味原子数は同じだがモル質量と格子定数が異なる2つのFCC金属を比較します。',
        '<strong>マグネシウムとアルファチタン:</strong> HCP充填を調べ、c/a比が六方セル体積をどのように変えるかを確認します。',
        '<strong>アルファポロニウム:</strong> 稀な単純立方格子構造とその低い充填効率を学びます。',
        '<strong>岩塩:</strong> 単一元素の金属ではなく、鉱物タイプのNaCl従来セルを使用して式単位密度の練習をします。',
      ],
    },
    {
      type: 'title',
      text: '硬球単位格子モデルの限界',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'このツールは理想化された幾何学モデルを使用しています。実際の結晶は硬い境界ではなく電子密度を持ち、格子定数は温度、圧力、組成、欠陥によって変化します。イオン結晶や共有結合結晶では、ここに示した3つの教育用構造を超える基底原子、部分占有、対称操作が必要になる場合もあります。',
    },
    {
      type: 'paragraph',
      html: '結果は教育、簡単な推定、一般的な格子ファミリーの比較に使用してください。出版品質の結晶学には、一次回折データまたは厳選された結晶学データベースから格子パラメータ、相、化学量論、サイト占有率を検証してください。',
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
      applicationCategory: 'EducationalApplication',
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
