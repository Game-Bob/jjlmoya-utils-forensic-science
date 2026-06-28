import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'penganalisis-asal-pola-kebakaran';
const title = 'Penganalisis Asal Pola Kebakaran';
const description = 'Petakan pola-V, arang dalam, bayangan jelaga, dan indikator bakar bersih pada denah ruangan, lalu proyeksikan vektor penyebaran api untuk memperkirakan area asal yang paling mungkin.';

const howTo = [
  {
    name: 'Impor denah tempat kejadian',
    text: 'Seret gambar denah ke ruang kerja atau muat dari disk sebelum menempatkan vektor bukti.',
  },
  {
    name: 'Klik untuk membuka pemilih bukti radial',
    text: 'Tempatkan penunjuk di atas tanda bakar, buka menu radial kontekstual, dan pilih jenis indikator langsung pada peta.',
  },
  {
    name: 'Seret untuk menyempurnakan vektor dan amati konvergensi',
    text: 'Perpanjang setiap vektor penyebaran dengan penjepretan pada kanvas dan amati medan probabilitas dihitung ulang secara waktu nyata seiring bertambahnya bukti.',
  },
  {
    name: 'Ekspor cuplikan teknis',
    text: 'Hasilkan laporan terstruktur dengan koordinat asal, keyakinan, varians, status lapisan, dan kumpulan vektor lengkap untuk ditinjau nanti.',
  },
];

const faq = [
  {
    question: 'Bisakah pola bakar membuktikan titik pasti di mana api bermula?',
    answer: 'Tidak. Pola kebakaran dapat membantu menghasilkan dan menguji hipotesis asal, tetapi ventilasi, pemadaman, beban bahan bakar, flashover, dan gangguan pasca-kebakaran dapat mengubah pola. Penentuan asal yang sesungguhnya memerlukan penyelidikan sistematis.',
  },
  {
    question: 'Mengapa pola-V penting dalam penyelidikan kebakaran?',
    answer: 'Pola-V sering mencerminkan penyebaran api ke atas dan ke luar pada permukaan vertikal. Pola ini dapat menunjuk ke area asal yang lebih rendah, tetapi harus dibandingkan dengan bukti lain sebelum menarik kesimpulan.',
  },
  {
    question: 'Apa yang ditunjukkan oleh arang dalam?',
    answer: 'Arang dalam dapat menunjukkan pemanasan yang lebih lama, fluks panas yang lebih tinggi, atau efek bahan bakar. Ini adalah konteks yang berguna, tetapi tidak secara otomatis menandai asal karena bahan terbakar pada laju yang berbeda.',
  },
  {
    question: 'Mengapa menggunakan beberapa vektor alih-alih satu panah?',
    answer: 'Satu pola bisa menyesatkan. Beberapa vektor independen mengurangi pengaruh satu dinding yang rusak, satu paket bahan bakar, atau satu jalur ventilasi.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Ruang kerja forensik interaktif untuk menggambar vektor penyebaran api',
    vPattern: 'Pola-V',
    deepChar: 'Arang dalam',
    sootShadow: 'Bayangan jelaga',
    cleanBurn: 'Bakar bersih',
    loadPlan: 'Muat denah',
    generateReport: 'Hasilkan laporan',
    pointerLabel: 'Penunjuk',
    resetVectors: 'Atur ulang',
    estimatedOrigin: 'Perkiraan asal',
    visibleLayers: 'Lapisan bukti terlihat',
    vectorsLabel: 'VEKTOR',
    confidenceLabel: 'KEYAKINAN',
    varianceLabel: 'VARIANS',
    modeLabel: 'MODE',
    guideSummary: 'Cara menggunakan alat ini',
    flowPanelTitle: 'Alur kerja',
    legendPanelTitle: 'Legenda bukti',
    readoutPanelTitle: 'Panel hasil',
    flow1Kicker: 'LANGKAH 1',
    flow1Icon: '1',
    flow1Title: 'Muat',
    flow1Text: 'Unggah denah tempat kejadian',
    flow2Kicker: 'LANGKAH 2',
    flow2Icon: '2',
    flow2Title: 'Pilih petunjuk',
    flow2Text: 'Klik tanda bakar',
    flow3Kicker: 'LANGKAH 3',
    flow3Icon: '3',
    flow3Title: 'Seret vektor',
    flow3Text: 'Arahkan perjalanan api',
    flow4Kicker: 'LANGKAH 4',
    flow4Icon: '4',
    flow4Title: 'Baca hasil',
    flow4Text: 'Periksa catatan kaki + ekspor',
    basicsTitle: 'Yang harus Anda lakukan pertama kali',
    basicsIntro: 'Muat denah yang jelas, tandai hanya pola yang dapat Anda justifikasi, dan sebarkan vektor di berbagai permukaan alih-alih mengulangi petunjuk yang sama.',
    indicatorsTitle: 'Arti setiap jenis bukti',
    vPatternShort: 'Bakar dinding membuka ke atas',
    vPatternExplain: 'Pola-V adalah bentuk bakar ke atas dan ke luar yang sering terlihat di dinding. Ini dapat menunjukkan bahwa panas dan api naik dari area yang lebih rendah, tetapi bukan bukti otomatis asal yang tepat.',
    deepCharShort: 'Area terbakar lebih keras atau lebih lama',
    deepCharExplain: 'Arang dalam berarti suatu bahan tampak lebih terbakar, menghitam, atau terkonsumsi di satu area daripada di sekitarnya. Ini dapat menunjukkan pemanasan yang lebih lama atau lebih intens, tetapi jenis bahan bakar dan ketebalan bahan sangat berpengaruh.',
    sootShadowShort: 'Asap terhalang atau dialihkan',
    sootShadowExplain: 'Bayangan jelaga adalah area yang terlindungi atau berbeda kegelapannya yang menunjukkan bahwa suatu objek, permukaan, atau aliran udara mengubah cara jelaga mengendap. Ini dapat membantu merekonstruksi apa yang ada atau bagaimana asap bergerak.',
    cleanBurnShort: 'Lebih sedikit jelaga karena panas atau aliran udara',
    cleanBurnExplain: 'Bakar bersih adalah area di mana jelaga tampak lebih terang, hilang, atau tidak ada karena panas, ventilasi, atau paparan api langsung memengaruhinya secara berbeda. Ini berguna, tetapi tidak setiap area bersih menandai asal.',
    resultsTitle: 'Cara membaca hasil',
    resultsIntro: 'Gunakan catatan kaki sebagai pemeriksaan cepat untuk pemetaan Anda, bukan sebagai kesimpulan forensik akhir.',
    resultsPoint1: 'Berapa banyak garis bukti yang aktif.',
    resultsPoint2: 'Seberapa kuat vektor aktif bersesuaian.',
    resultsPoint3: 'Seberapa luas area asal masih.',
    resultsPoint4: 'Apa yang diharapkan alat untuk Anda lakukan selanjutnya.',
    awaitingVector: 'Menunggu vektor',
    selectIndicator: 'Pilih indikator',
    refiningVector: 'Menyempurnakan vektor',
    needsMoreVectors: 'Diperlukan lebih banyak vektor',
    wideArea: 'Area asal luas',
    focusedArea: 'Area asal terfokus',
    dropPlan: 'Jatuhkan gambar denah atau klik untuk mengunggah',
    needsMoreVectorsText: 'Gambar setidaknya dua panah arah yang jelas. Tiga atau lebih pengamatan independen biasanya membuat konvergensi jauh lebih mudah ditafsirkan.',
    wideAreaText: 'Garis yang diproyeksikan berpotongan, tetapi penyebarannya masih lebar. Di tempat kejadian nyata, bandingkan ventilasi, beban bahan bakar, efek pemadaman, dan informasi saksi sebelum mempersempit asal.',
    focusedAreaText: 'Vektor berkumpul ke area yang kompak. Anggap ini sebagai sinyal pengajaran yang kuat untuk pengembangan hipotesis asal, bukan sebagai kesimpulan forensik akhir.',
    disclaimer: 'Simulasi edukatif saja. Penyelidikan asal dan penyebab kebakaran yang sesungguhnya harus mengikuti panduan yang diterima, protokol keselamatan tempat kejadian, standar dokumentasi, dan tinjauan ahli yang berkualifikasi.',
  },
  seo: [
    {
      type: 'title',
      text: 'Analisis Asal Kebakaran Interaktif dari Vektor Pola Bakar',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Simulator pengajaran',
      title: 'Apa yang diajarkan penganalisis asal pola kebakaran ini',
      html: 'Alat peramban ini menunjukkan bagaimana penyelidik menalar dari pola kebakaran fisik menuju <strong>area asal</strong> yang mungkin. Pengguna memetakan bukti yang terlihat, menggambar vektor arah penyebaran, dan mengamati garis yang diproyeksikan berkumpul atau menyebar. Model ini sengaja bersifat edukatif: mengajarkan geometri dan interpretasi pola, bukan penentuan sebab secara hukum.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 lapisan', label: 'Pola-V, arang, jelaga, bakar bersih', icon: 'mdi:layers-triple' },
        { value: 'Denah 2D', label: 'peta ruangan struktural', icon: 'mdi:floor-plan' },
        { value: '3+ panah', label: 'pengamatan yang direkomendasikan', icon: 'mdi:vector-line' },
        { value: '0-100%', label: 'masukan keyakinan', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Alur kerja yang disiplin untuk interpretasi pola kebakaran',
      items: [
        'Mulailah dengan keselamatan, pengamanan tempat kejadian, foto, sketsa, dan dokumentasi sistematis sebelum menafsirkan pola.',
        'Pisahkan jenis pola agar kerusakan berbentuk V, kedalaman arang, endapan jelaga, dan bakar bersih tidak disatukan menjadi satu asumsi.',
        'Gambar indikator arah hanya di mana pola fisik mendukung arah penyebaran yang dapat dipertahankan.',
        'Cari konvergensi di antara pengamatan independen alih-alih mengandalkan kerusakan yang paling dramatis.',
        'Gunakan area asal yang diperkirakan sebagai hipotesis untuk diuji terhadap bahan bakar, sumber penyalaan, ventilasi, bukti kelistrikan, dan keterangan saksi.',
      ],
    },
    {
      type: 'table',
      headers: ['Pola', 'Nilai potensial', 'Peringatan utama'],
      rows: [
        ['Pola-V', 'Dapat menunjukkan penyebaran api ke atas dan ke luar dari area yang lebih rendah.', 'Dapat diubah oleh ventilasi, flashover, geometri dinding, dan pemadaman.'],
        ['Arang dalam', 'Dapat menunjukkan paparan panas berkelanjutan atau pembakaran intens.', 'Jenis bahan bakar dan ketebalan bahan sangat memengaruhi kedalaman arang.'],
        ['Bayangan jelaga', 'Dapat mengungkapkan area terlindungi, penempatan objek, atau efek aliran udara.', 'Perabot yang dipindahkan atau aktivitas pemadaman dapat mengubah interpretasi.'],
        ['Bakar bersih', 'Dapat menunjukkan panas tinggi, ventilasi, atau pembakaran tahap akhir.', 'Tidak secara otomatis mengidentifikasi bahan pertama yang menyala.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Hipotesis asal yang lebih baik',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Hipotesis terbaik menjelaskan beberapa pengamatan sekaligus.',
          points: ['Vektor independen berkumpul', 'Bukti sesuai dengan jalur ventilasi yang diketahui', 'Paket bahan bakar diperhitungkan', 'Asal alternatif diuji secara aktif'],
        },
        {
          title: 'Hipotesis asal yang lemah',
          icon: 'mdi:alert-circle-outline',
          description: 'Hipotesis lemah sering mengandalkan satu pola tanpa menguji faktor distorsi.',
          points: ['Satu area arang dramatis dianggap sebagai bukti', 'Flashover diabaikan', 'Kerusakan pemadaman tidak didokumentasikan', 'Bukti sumber penyalaan diasumsikan'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cara Kerja Model Vektor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Setiap panah diperlakukan sebagai garis proyeksi penyebaran api. Penaksir menghitung perpotongan garis berpasangan, menyaring titik yang berada dalam batas denah yang wajar, merata-ratakan persilangan yang tersisa, dan melaporkan radius berdasarkan penyebaran perpotongan tersebut. Radius kecil dengan beberapa vektor menghasilkan sinyal konvergensi yang lebih kuat. Model persimpangan bekerja dengan menyelesaikan persamaan parametrik dari dua garis yang memanjang dari penanda bukti masing-masing. Ketika dua vektor menunjuk ke wilayah bersama, titik persilangan teoretisnya menyumbang satu koordinat ke kumpulan perataan. Semakin banyak vektor independen yang berpartisipasi, semakin banyak estimator dapat menyaring persilangan yang jauh dari kluster utama, secara efektif mengurangi pengaruh setiap pengamatan tunggal yang mungkin berorientasi buruk atau disalahartikan.',
    },
    {
      type: 'paragraph',
      html: 'Pendekatan geometris ini mencerminkan latihan membuat sketsa di kelas: membantu siswa melihat mengapa analisis asal meningkat ketika pengamatan berasal dari permukaan dan jenis pola yang berbeda. Ini juga mengungkap masalah umum: panah dapat berpotongan bahkan ketika interpretasi dasarnya buruk, sehingga pusat matematis tidak boleh menggantikan penilaian ilmu kebakaran. Dalam penyelidikan nyata, praktisi membandingkan hasil yang diplot dengan jalur ventilasi, distribusi beban bahan bakar, kerusakan struktural, dan keterangan saksi sebelum memperlakukan koordinat apa pun sebagai kemungkinan asal. Alat ini mendorong kebiasaan ini dengan menampilkan varians di samping titik yang diperkirakan, mengingatkan pengguna bahwa kluster persilangan yang rapat hanya sekuat kualitas pengamatan yang menghasilkannya.',
    },
    {
      type: 'paragraph',
      html: 'Di luar logika persimpangan dasar, estimator menerapkan batasan batas sehingga persilangan yang terletak jauh di luar denah ruangan dikecualikan. Ini mencegah pencilan menyeret pusat rata-rata menuju lokasi yang tidak mungkin. Radius akhir mewakili simpangan baku dari koordinat persilangan yang tersisa, memberikan ukuran langsung tentang seberapa konsisten vektor aktif bersesuaian. Radius di bawah sepuluh persen dari rentang denah menunjukkan konvergensi yang kuat. Radius yang melebihi seperempat denah menandakan bahwa bukti belum mendukung asal yang terfokus, dan diperlukan lebih banyak atau lebih baik pengamatan sebelum menarik kesimpulan.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Area asal', definition: 'Wilayah umum di mana bukti yang tersedia menunjukkan api bermula.' },
        { term: 'Pola-V', definition: 'Pola kebakaran yang sering muncul sebagai kerusakan ke atas dan ke luar pada permukaan vertikal.' },
        { term: 'Bakar bersih', definition: 'Area yang lebih terang atau bersih yang disebabkan ketika jelaga terbakar atau tidak mengendap dalam kondisi panas tinggi atau aliran udara.' },
        { term: 'Bayangan jelaga', definition: 'Area jelaga yang terlindungi atau mengendap berbeda yang dapat menyimpan informasi tentang objek, aliran udara, atau paparan panas.' },
        { term: 'Konvergensi vektor', definition: 'Pengelompokan indikator arah yang diproyeksikan di sekitar wilayah bersama.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Peringatan forensik',
      title: 'Jangan ubah konvergensi menjadi kepastian',
      html: 'Kelompok perpotongan yang rapat hanya berguna ketika pengamatannya valid. Penyelidikan nyata harus mempertimbangkan ventilasi, flashover, paket bahan bakar, sistem kelistrikan, bukti peralatan, keterangan saksi, pemadaman, dan gangguan tempat kejadian.',
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
