import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'pencari-struktur-kisi-kristal';
const title = 'Pencari Struktur Kisi Kristal';
const description = 'Jelajahi sel satuan kubus sederhana, kubus berpusat muka (FCC), dan heksagonal tumpukan rapat (HCP) dengan penampil 3D interaktif, faktor pengemasan atom, bilangan koordinasi, dan kalkulator densitas teoretis.';

const howTo = [
  {
    name: 'Pilih kisi atau material',
    text: 'Mulailah dari keluarga struktur seperti kubus sederhana, FCC, atau HCP, atau pilih preset material nyata untuk memuat konstanta kisi dan massa atom atau rumusnya.',
  },
  {
    name: 'Putar sel satuan',
    text: 'Seret kontrol sudut dan zoom untuk memeriksa atom mana yang berada di sudut, permukaan, atau di dalam sel konvensional.',
  },
  {
    name: 'Baca pengemasan dan densitas',
    text: 'Bandingkan faktor pengemasan atom, bilangan koordinasi, atom per sel, massa sel, volume sel, dan densitas teoretis untuk struktur yang dipilih.',
  },
  {
    name: 'Uji konstanta kustom',
    text: 'Edit parameter kisi a, rasio c/a, dan massa untuk melihat bagaimana densitas teoretis berubah ketika kristal memuai, menyusut, atau berubah komposisi.',
  },
];

const faq = [
  {
    question: 'Apa itu sel satuan dalam kisi kristal?',
    answer: 'Sel satuan adalah kotak tiga dimensi terkecil yang berulang yang dapat mengisi ruang untuk membangun kristal. Atom-atomnya dapat dibagi dengan sel tetangga, sehingga atom bersih per sel bisa lebih kecil dari jumlah bola yang digambar pada batas-batasnya.',
  },
  {
    question: 'Mengapa FCC dan HCP memiliki faktor pengemasan yang sama?',
    answer: 'FCC dan HCP ideal keduanya merupakan susunan rapat dari bola-bola yang sama. Mereka menumpuk lapisan segitiga rapat dalam urutan yang berbeda, ABCABC untuk FCC dan ABAB untuk HCP, tetapi keduanya mengisi sekitar 74 persen ruang dengan atom.',
  },
  {
    question: 'Bagaimana densitas teoretis dihitung?',
    answer: 'Kalkulator membagi massa di dalam satu sel satuan dengan volume sel satuan. Massa sel berasal dari atom atau unit rumus per sel dikalikan dengan massa molar dan dibagi dengan konstanta Avogadro.',
  },
  {
    question: 'Mengapa densitas terukur bisa berbeda dari hasil teoretis?',
    answer: 'Sampel nyata dapat mengandung kekosongan, ketidakmurnian, pori-pori, batas butir, campuran isotop, ekspansi suhu, atau banyak fase. Nilai teoretis mengasumsikan kristal sempurna dengan konstanta kisi yang dipilih.',
  },
  {
    question: 'Apakah halit benar-benar kisi logam FCC?',
    answer: 'Bukan. Halit adalah garam batu ionik, bukan logam. Preset menggunakan sel konvensional turunan FCC karena NaCl memiliki empat unit rumus per sel kubik, yang membuatnya berguna untuk latihan perhitungan densitas.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Sel satuan kristal interaktif',
    material: 'Material',
    lattice: 'Kisi',
    rotation: 'Rotasi',
    zoom: 'Zoom',
    latticeA: 'Konstanta kisi a',
    cRatio: 'Rasio c/a',
    molarMass: 'Massa molar',
    atomsPerCell: 'Atom per sel',
    packingFactor: 'Faktor pengemasan',
    coordination: 'Koordinasi',
    density: 'Densitas',
    cellVolume: 'Volume sel',
    cellMass: 'Massa sel',
    radius: 'Jari-jari atom',
    cornerAtoms: 'Atom sudut',
    faceAtoms: 'Atom permukaan',
    interiorAtoms: 'Atom interior',
    materialNote: 'Catatan material',
    formula: 'Rumus',
    resetView: 'Atur ulang tampilan',
    crystalProperties: 'Sifat kristal',
    physicalMetrics: 'Metrik fisik',
    latticeSimpleCubic: 'Kubus sederhana',
    latticeFcc: 'Kubus berpusat muka (FCC)',
    latticeHcp: 'Heksagonal tumpukan rapat (HCP)',
    shortSc: 'SC',
    shortFcc: 'FCC',
    shortHcp: 'HCP',
    materialCopper: 'Tembaga',
    materialCopperNote: 'Logam FCC umum dengan konduktivitas listrik tinggi.',
    materialAluminum: 'Aluminium',
    materialAluminumNote: 'Logam FCC ringan dengan konduktivitas termal yang baik.',
    materialPolonium: 'Polonium',
    materialPoloniumNote: 'Unsur langka dengan struktur kubus sederhana.',
    materialMagnesium: 'Magnesium',
    materialMagnesiumNote: 'Logam HCP ringan dengan rasio kekuatan terhadap berat yang baik.',
    materialTitanium: 'Titanium',
    materialTitaniumNote: 'Logam HCP kuat yang umum digunakan dalam aplikasi kedirgantaraan.',
    materialHalite: 'Halit',
    materialHaliteNote: 'Garam batu ionik dengan sel konvensional turunan FCC untuk empat unit NaCl.',
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
    latticeBodyCenteredCubic: 'Kubus berpusat badan',
    latticeCesiumChloride: 'Sesium klorida',
    latticeDiamondCubic: 'Kubus berlian',
    latticeFaceCenteredCubic: 'Kubus berpusat muka',
    latticeHexagonalClosePacked: 'Heksagonal tumpukan rapat',
    latticePerovskite: 'Perovskit kubus',
    latticeRockSalt: 'Garam batu',
    latticeRutile: 'Rutil',
    latticeWurtzite: 'Wurtzite',
    latticeZincBlende: 'Blenda seng',
    materialAlphaIron: 'Besi alfa',
    materialAlphaIronNote: 'Fase besi kubus berpusat badan pada suhu ruang.',
    materialTungsten: 'Tungsten',
    materialTungstenNote: 'Logam refraktori BCC yang padat dengan titik lebur sangat tinggi.',
    materialSilicon: 'Silikon',
    materialSiliconNote: 'Semikonduktor kubus berlian yang digunakan dalam sirkuit terpadu.',
    materialDiamond: 'Berlian',
    materialDiamondNote: 'Jaringan karbon kovalen dalam struktur kubus berlian.',
    materialCesiumChloride: 'Sesium klorida',
    materialCesiumChlorideNote: 'Struktur ionik kubus sederhana saling menembus dengan koordinasi delapan.',
    materialZincSulfide: 'Seng sulfida',
    materialZincSulfideNote: 'Sfalerit, juga disebut blenda seng, dengan koordinasi tetrahedral.',
    materialGalliumNitride: 'Galium nitrida',
    materialGalliumNitrideNote: 'Semikonduktor wurtzite yang digunakan pada LED dan elektronika daya.',
    materialStrontiumTitanate: 'Stronsium titanat',
    materialStrontiumTitanateNote: 'Oksida perovskit kubus yang sering digunakan sebagai substrat dan model dielektrik.',
    materialRutileTitania: 'Titania rutil',
    materialRutileTitaniaNote: 'Struktur TiO2 rutil dengan koordinasi oktahedral titanium.',
  },
  seo: [
    {
      type: 'title',
      text: 'Pencari struktur kisi kristal untuk sel satuan, faktor pengemasan, dan densitas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat pencari struktur kisi kristal ini membantu menghubungkan gambaran sel satuan dengan perhitungan yang biasanya dibutuhkan oleh mahasiswa dan ilmuwan material. Anda dapat memeriksa struktur kubus sederhana, kubus berpusat muka, dan heksagonal tumpukan rapat, lalu menghitung faktor pengemasan atom, bilangan koordinasi, atom per sel, jari-jari atom dari parameter kisi, volume sel, massa sel, dan densitas teoretis dari preset material nyata atau input kustom.',
    },
    {
      type: 'paragraph',
      html: 'Penampil interaktif dirancang untuk kesulitan umum dalam kristalografi: atom batas terlihat, tetapi hanya sebagian dari setiap atom batas yang menjadi milik sel yang dipilih. Memutar model membuat perbedaan antara situs sudut, situs permukaan, dan situs interior lebih mudah dilihat sebelum Anda menggunakan rumus numerik.',
    },
    {
      type: 'title',
      text: 'Kubus sederhana, FCC, dan HCP dibandingkan',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Struktur', 'Atom bersih per sel', 'Bilangan koordinasi', 'Faktor pengemasan atom', 'Contoh umum'],
      rows: [
        ['Kubus sederhana', '1', '6', '52,36%', 'Polonium alfa adalah contoh unsur klasik.'],
        ['Kubus berpusat muka (FCC)', '4', '12', '74,05%', 'Tembaga, aluminium, nikel, perak, emas, dan banyak logam ulet.'],
        ['Heksagonal tumpukan rapat (HCP)', '6', '12', '74,05%', 'Magnesium, titanium alfa, seng, kobalt, dan berilium.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Pengemasan kubus sederhana mudah divisualisasikan karena atom bersentuhan di sepanjang tepi kubus dan setiap atom sudut menyumbang seperdelapan ke sel. FCC menambahkan atom ke pusat setiap permukaan, sehingga atom bersentuhan di sepanjang diagonal permukaan dan jumlah bersih menjadi empat atom per sel kubik konvensional. HCP menggunakan lapisan heksagonal, bukan kotak kubik, tetapi HCP ideal mencapai batas rapat yang sama dengan FCC.',
    },
    {
      type: 'title',
      text: 'Rumus faktor pengemasan atom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Faktor pengemasan atom adalah fraksi volume sel satuan yang ditempati oleh atom bola keras. Dihitung sebagai <strong>APF = volume atom dalam sel / volume sel satuan</strong>. Untuk kubus sederhana, ini menjadi pi / 6 karena satu atom berjari-jari a/2 muat ke dalam sel kubik. FCC dan HCP ideal keduanya mencapai sekitar 0,7405, yang merupakan fraksi pengemasan maksimum untuk bola yang sama.',
    },
    {
      type: 'paragraph',
      html: 'Faktor pengemasan tidak sama dengan densitas. APF menggambarkan seberapa efisien bola identik mengisi ruang, sementara densitas juga bergantung pada massa molar dan dimensi kisi. Logam HCP ringan dan logam FCC berat dapat memiliki faktor pengemasan yang serupa tetapi densitas yang sangat berbeda.',
    },
    {
      type: 'title',
      text: 'Rumus densitas teoretis yang digunakan oleh kalkulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator menggunakan <strong>rho = nM / (NA Vsel)</strong>. Dalam persamaan ini, <strong>n</strong> adalah jumlah atom atau unit rumus per sel, <strong>M</strong> adalah massa molar dalam gram per mol, <strong>NA</strong> adalah konstanta Avogadro, dan <strong>Vsel</strong> adalah volume sel satuan dalam sentimeter kubik. Sel kubik menggunakan a^3. Sel heksagonal menggunakan (3 sqrt(3) / 2) a^2 c, dengan c disediakan melalui rasio c/a.',
    },
    {
      type: 'paragraph',
      html: 'Karena konstanta kisi biasanya ditabulasikan dalam angstrom, kalkulator mengonversi angstrom ke sentimeter sebelum menghitung densitas. Perubahan kecil pada konstanta kisi dapat memengaruhi densitas secara nyata karena volume berskala dengan pangkat tiga untuk sel kubik.',
    },
    {
      type: 'title',
      text: 'Cara menggunakan preset kisi untuk logam dan mineral',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tembaga dan aluminium:</strong> bandingkan dua logam FCC dengan jumlah atom bersih per sel yang sama tetapi massa molar dan konstanta kisi yang berbeda.',
        '<strong>Magnesium dan titanium alfa:</strong> periksa pengemasan HCP dan lihat bagaimana rasio c/a mengubah volume sel heksagonal.',
        '<strong>Polonium alfa:</strong> pelajari struktur kubus sederhana yang langka dan efisiensi pengemasannya yang lebih rendah.',
        '<strong>Halit:</strong> praktikkan densitas unit rumus dengan sel konvensional NaCl bergaya mineral, bukan logam unsur tunggal.',
      ],
    },
    {
      type: 'title',
      text: 'Keterbatasan model sel satuan bola keras',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alat ini menggunakan model geometris yang diidealkan. Kristal nyata memiliki kerapatan elektron daripada batas keras, dan konstanta kisi berubah dengan suhu, tekanan, komposisi, dan cacat. Kristal ionik dan kovalen juga dapat memerlukan atom basis, okupasi parsial, dan operasi simetri yang melampaui tiga struktur pengajaran yang ditampilkan di sini.',
    },
    {
      type: 'paragraph',
      html: 'Gunakan hasilnya untuk pendidikan, perkiraan cepat, dan perbandingan keluarga kisi umum. Untuk kristalografi yang layak publikasi, verifikasi parameter kisi, fase, stoikiometri, dan okupasi situs dari data difraksi primer atau basis data kristalografi yang dikurasi.',
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
