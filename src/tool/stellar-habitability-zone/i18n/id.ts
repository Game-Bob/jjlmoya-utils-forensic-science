import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'zona-layak-huni-bintang';
const description = 'Hitung dan visualisasikan zona layak huni (zona Goldilocks) di sekitar berbagai jenis bintang menggunakan konfigurasi bintang dan planet.';
const title = 'Simulator Zona Layak Huni Bintang: Temukan Zona Goldilocks';

const howTo = [
  {
    name: 'Pilih Prasetel Bintang',
    text: 'Pilih jenis bintang dari Raksasa Biru hingga Katai Merah untuk memuat properti fisik standar seperti massa, luminositas, dan suhu.',
  },
  {
    name: 'Sesuaikan Parameter Planet',
    text: 'Ubah jarak orbit planet (sumbu semi-mayor), albedo, dan efek pemanasan rumah kaca atmosfer menggunakan penggeser interaktif.',
  },
  {
    name: 'Analisis Orbit dan Kelayakan Huni',
    text: 'Amati planet mengorbit bintang secara langsung. Periksa apakah suhu kesetimbangan dan permukaan mendukung air cair.',
  },
];

const faq = [
  {
    question: 'Apa itu zona layak huni circumstellar?',
    answer: 'Zona layak huni circumstellar (sering disebut zona Goldilocks) adalah wilayah di sekitar bintang di mana suhu permukaan planet cukup untuk mempertahankan air cair di bawah tekanan atmosfer tertentu. Zona ini didefinisikan oleh batas konservatif dan optimis berdasarkan luminositas bintang dan suhu efektif.',
  },
  {
    question: 'Bagaimana luminositas bintang memengaruhi zona layak huni?',
    answer: 'Luminositas bintang menentukan total keluaran energi bintang. Bintang yang lebih panas dan lebih masif (seperti bintang tipe O, B, atau A) sangat terang, menempatkan zona layak huni mereka lebih jauh. Bintang yang lebih dingin dan kurang masif (seperti katai merah tipe K atau M) memiliki luminositas rendah, menggeser zona layak huni mereka sangat dekat ke bintang.',
  },
  {
    question: 'Apa perbedaan antara suhu kesetimbangan dan suhu permukaan?',
    answer: 'Suhu kesetimbangan adalah suhu teoretis yang akan dimiliki sebuah planet dengan asumsi ia berperilaku sebagai benda hitam yang menyerap radiasi bintang dan meradiasikannya kembali ke luar angkasa. Suhu permukaan mencakup efek rumah kaca dari atmosfer planet, yang memerangkap panas dan menghangatkan planet lebih lanjut.',
  },
  {
    question: 'Mengapa albedo penting untuk kelayakan huni planet?',
    answer: 'Albedo adalah ukuran reflektivitas permukaan planet. Albedo yang lebih tinggi (mendekati 1,0) berarti planet memantulkan lebih banyak cahaya bintang yang masuk, mendinginkannya. Albedo yang lebih rendah berarti lebih banyak radiasi diserap, meningkatkan suhu keseluruhannya.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Simulator Zona Layak Huni Bintang',
    starPresetsLabel: 'Prasetel Spektral',
    customStarHeader: 'Parameter Bintang',
    starTemperature: 'Suhu Efektif (K)',
    starLuminosity: 'Luminositas (L/L⊙)',
    starMass: 'Massa (M/M⊙)',
    starRadius: 'Radius (R/R⊙)',
    planetHeader: 'Parameter Planet',
    planetDistance: 'Jarak Orbit (AU)',
    planetAlbedo: 'Albedo Bond',
    greenhouseDelta: 'Pemanasan Rumah Kaca (K)',
    resultsHeader: 'Hasil Simulasi',
    stellarFluxResult: 'Fluks Bintang yang Diterima',
    eqTempResult: 'Suhu Kesetimbangan',
    surfTempResult: 'Perkiraan Suhu Permukaan',
    orbitPeriodResult: 'Periode Orbit',
    orbitVelocityResult: 'Kecepatan Orbit',
    hzLimitsHeader: 'Batas Zona Layak Huni',
    innerLimit: 'Batas Dalam Konservatif',
    outerLimit: 'Batas Luar Konservatif',
    optInnerLimit: 'Batas Dalam Optimis',
    optOuterLimit: 'Batas Luar Optimis',
    orbitCanvasTitle: 'Visualisator Orbit Interaktif',
    statusLabel: 'Status Kelayakan Huni',
    statusTooHot: 'TERLALU PANAS (Air menguap)',
    statusHabitable: 'LAYAK HUNI (Air cair mungkin)',
    statusTooCold: 'TERLALU DINGIN (Air membeku)',
    statusExplanation: 'Berdasarkan batas konservatif, planet ini berada dalam status zona layak huni yang ditentukan.',
    unitsLabel: 'Sistem Satuan',
    unitsScientific: 'Ilmiah',
    unitsImperial: 'Imperial',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGI: Fisika Zona Layak Huni Bintang',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pencarian kehidupan di luar Bumi dimulai dengan memahami kondisi fisik yang diperlukan untuk air cair. Para astrobiolog menggunakan model matematika untuk memetakan batas-batas zona layak huni di sekitar berbagai jenis bintang. Simulator ini menggunakan model Kopparapu et al. (2013) untuk memperkirakan fluks energi yang diterima planet dan menentukan apakah mereka berada di zona Goldilocks. Zona layak huni didefinisikan sebagai wilayah di mana planet bermassa terrestrial dengan atmosfer CO2-H2O-N2 dapat mempertahankan air cair di permukaannya.',
    },
    {
      type: 'title',
      text: 'Rumus Matematika dan Fisika Atmosfer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Batas-batas zona layak huni ditentukan dengan menghitung fluks bintang efektif (Seff) yang diperlukan untuk memicu kondisi rumah kaca lari atau maksimum. Persamaan untuk Seff tergantung pada suhu efektif bintang (Teff):<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>di mana T* = Teff - 5780 K, dan koefisien (a, b, c, d) diturunkan secara empiris dari model iklim radiatif-konvektif 1D. Setelah Seff dihitung, jarak orbit d dalam satuan astronomi (AU) diberikan oleh:<br><br>d = sqrt(L / Seff)<br><br>di mana L adalah luminositas bintang relatif terhadap Matahari. Suhu kesetimbangan (Teq) planet dihitung dengan asumsi benda hitam bola dalam kesetimbangan termal:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>di mana R* adalah radius bintang, A adalah albedo bond planet, dan S adalah fluks bintang yang diterima dalam satuan konstanta matahari Bumi.',
    },
    {
      type: 'title',
      text: 'Klasifikasi Spektral dan Batas Layak Huni',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Karakteristik bintang sangat bervariasi di seluruh tipe spektral. Berikut adalah ringkasan properti tipikal dan batas HZ:',
    },
    {
      type: 'table',
      headers: [
        'Kelas Spektral',
        'Suhu (K)',
        'Luminositas (L/L⊙)',
        'Batas Dalam HZ (AU)',
        'Batas Luar HZ (AU)',
      ],
      rows: [
        ['Tipe O (Raksasa)', '40.000', '100.000', '300.0', '530.0'],
        ['Tipe B (Raksasa)', '20.000', '1.000', '30.1', '53.2'],
        ['Tipe A (Sirius)', '8.500', '20.0', '4.2', '7.4'],
        ['Tipe F (Procyon)', '6.500', '2.5', '1.5', '2.6'],
        ['Tipe G (Matahari)', '5.778', '1.0', '0.95', '1.67'],
        ['Tipe K (Katai)', '4.500', '0.15', '0.37', '0.65'],
        ['Tipe M (Katai)', '3.200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Dampak Kelas Spektral terhadap Kelayakan Huni',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Setiap kelas spektral menciptakan lingkungan radiasi dan gravitasi yang unik bagi planet-planetnya:<br><br><strong>Bintang Tipe O dan B:</strong> Bintang biru masif ini memancarkan radiasi ultraviolet (UV) yang intens dan memiliki umur yang sangat pendek (puluhan juta tahun). Air cair mungkin ada di dunia luar mereka, tetapi kehidupan tidak akan memiliki waktu yang cukup untuk berevolusi sebelum bintang meledak sebagai supernova.<br><br><strong>Bintang Tipe A dan F:</strong> Bintang-bintang ini lebih terang dan lebih panas dari Matahari. Zona layak huni mereka lebar dan jauh, meminimalkan efek penguncian pasang surut. Namun, tingkat radiasi near-UV yang tinggi dapat menyebabkan kerusakan parah pada molekul organik tanpa lapisan ozon pelindung.<br><br><strong>Bintang Tipe G (Seperti Matahari):</strong> Menyediakan fluks cahaya yang stabil selama miliaran tahun, bintang-bintang ini mewakili target utama untuk pencarian kehidupan. Output radiasi mereka sesuai dengan persyaratan biokimia standar.<br><br><strong>Bintang Tipe K (Katai Oranye):</strong> Dianggap oleh banyak astrobiolog sebagai inang "superlayak huni", katai oranye hidup selama puluhan miliar tahun, memancarkan lebih sedikit UV berbahaya daripada bintang tipe G, dan tidak rentan terhadap suar parah yang terkait dengan katai M yang lebih muda.<br><br><strong>Bintang Tipe M (Katai Merah):</strong> Bintang yang paling umum di galaksi. Karena zona layak huni mereka sangat dekat (biasanya < 0,2 AU), planet rentan terhadap penguncian pasang surut, yang berarti satu sisi secara permanen menghadap bintang. Selain itu, katai M aktif menghasilkan angin bintang dan suar energi tinggi yang dapat mengikis atmosfer planet.',
    },
    {
      type: 'title',
      text: 'Faktor Kritis dalam Lingkungan Layak Huni Planet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lingkungan fisik planet dibentuk oleh banyak variabel di luar sekadar jarak dari bintang induknya:',
    },
    {
      type: 'list',
      items: [
        '<strong>Efek Rumah Kaca Atmosfer:</strong> Gas rumah kaca alami menaikkan suhu permukaan di atas tingkat kesetimbangan benda hitam. Planet terestrial memerlukan siklus karbon-silikat untuk menstabilkan CO2 atmosfer dan mengatur suhu dalam skala waktu geologis.',
        '<strong>Albedo Bond Planet:</strong> Reflektivitas tinggi (karena awan, lapisan es, atau aerosol sulfat) mendinginkan planet, sedangkan reflektivitas rendah (tanah gelap, badan air) memerangkap lebih banyak energi bintang.',
        '<strong>Medan Magnet:</strong> Magnetosfer planet yang kuat melindungi atmosfer dari angin bintang, mencegah pelarian atmosfer non-termal dan kehilangan air.',
        '<strong>Dinamika Perangkap Air:</strong> Efek perangkap dingin di atmosfer atas mencegah uap air mencapai ketinggian tinggi di mana radiasi UV bintang akan memisahkannya menjadi hidrogen dan oksigen.',
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
