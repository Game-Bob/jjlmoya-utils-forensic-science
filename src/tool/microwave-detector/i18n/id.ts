const slug = 'detektor-kebocoran-microwave';
const description = 'Analisis apakah microwave Anda membocorkan radiasi dengan mengukur interferensi waktu nyata pada jaringan WiFi Anda. Alat keselamatan ilmiah.';
const title = 'Detektor Kebocoran Microwave: Visualisator Interferensi WiFi';
const howTo = [
    {
      name: 'Hubungkan ke jaringan WiFi 2,4GHz',
      text: 'Pastikan ponsel atau laptop Anda TIDAK terhubung ke pita 5GHz sehingga interferensi dapat diukur.',
    },
    {
      name: 'Mulai tes latensi dasar',
      text: 'Tekan tombol mulai dengan microwave mati untuk menetapkan garis dasar koneksi yang stabil.',
    },
    {
      name: 'Nyalakan microwave',
      text: 'Panaskan segelas air selama 30-60 detik dan berdirilah di dekat peralatan dengan perangkat Anda.',
    },
    {
      name: 'Analisis grafik waktu nyata',
      text: 'Amati apakah latensi naik di atas 100-200ms atau jika paket hilang terjadi saat perangkat sedang berjalan.',
    },
  ];
const faq = [
    {
      question: 'Bagaimana sebuah website bisa mendeteksi microwave saya?',
      answer: 'Kami tidak menggunakan sensor ajaib, tetapi latensi jaringan. Baik WiFi 2,4GHz maupun oven microwave beroperasi pada frekuensi yang sama (sekitar 2450 MHz). Jika pelindung microwave gagal, ia menghasilkan "noise" yang bertabrakan dengan WiFi, secara drastis meningkatkan latensi (ping).',
    },
    {
      question: 'Apakah berbahaya jika microwave saya bocor?',
      answer: 'Interferensi WiFi kecil adalah normal dan tidak menyiratkan risiko kesehatan segera, karena daya meluruh dengan cepat seiring jarak. Namun, kebocoran masif menunjukkan penyegelan pintu atau jaring yang buruk, yang harus diperiksa untuk keamanan teknis.',
    },
    {
      question: 'Mengapa tes tidak berfungsi dengan WiFi 5GHz?',
      answer: 'Karena WiFi 5GHz beroperasi pada pita frekuensi yang jauh lebih tinggi daripada microwave. Agar tes efektif, perangkat Anda harus terhubung ke jaringan 2,4GHz router.',
    },
    {
      question: 'Apa arti lonjakan latensi pada grafik?',
      answer: 'Lonjakan konstan selama pengoperasian microwave menunjukkan bahwa sinyal elektromagnetik "keluar" dan menjenuhkan udara, mencegah paket data WiFi tiba tepat waktu.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Disalin',
    noHistory: 'Tidak ada riwayat',
    load: 'Muat',
    delete: 'Hapus',
    microwaveDetection: 'Deteksi Microwave',
    shieldingAnalysis: 'Analisis Pelindung',
    startTest: 'Mulai Tes',
    stopTest: 'Hentikan Tes',
    waitingForStart: 'Menunggu untuk memulai...',
    detectingInterference: 'Mendeteksi interferensi...',
    baseLevel: 'Level Dasar',
    activeLevel: 'Level Aktif',
    leakProbability: 'Probabilitas Kebocoran',
    lowLeak: 'Rendah',
    mediumLeak: 'Sedang',
    highLeak: 'Tinggi',
    pingLabel: 'Latensi (ms)',
    packetLossLabel: 'Paket Hilang (%)',
    rfInterferenceMonitor: 'Monitor Interferensi RF',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / jitter',
    systemReady: 'Sistem Siap',
    physicalRequirement: 'Persyaratan Fisik',
    physicalDesc: 'Detektor ini menggunakan interferensi pada pita 2,4GHz (frekuensi microwave). Agar berfungsi dengan baik, pastikan Anda terhubung ke jaringan WiFi 2,4GHz (bukan 5GHz/6GHz) atau gunakan ponsel Anda di dekat perangkat.',
    understandStart: 'Mengerti, Mulai Pemindaian',
    rfInterferenceTitle: 'Monitor Interferensi',
    connectToAnalyze: 'Hubungkan untuk memulai analisis interferensi termal.',
    audioFeedback: 'Umpan Balik Audio',
    muteUnmute: 'MUTE / UNMUTE',
    static: 'Statis',
  },
  seo: [
    {
      type: 'title',
      text: 'FISIKA GELOMBANG: Apakah Microwave Anda Benar-benar Membocorkan Radiasi?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Microwave adalah peralatan yang paling disalahpahami di dapur modern. Dibenci oleh kaum murni dan dicintai oleh kaum pragmatis, ia menyembunyikan pertempuran konstan antara energi yang terkandung dan dunia luar.',
    },
    {
      type: 'paragraph',
      html: 'Dari sudut pandang fisika murni, oven microwave adalah <strong>resonator rongga</strong> yang dirancang untuk membombardir molekul air dengan radiasi elektromagnetik pada frekuensi yang sangat spesifik: <strong>2,45 GHz</strong>. Frekuensi ini tidak sembarangan; diperlukan untuk menyebabkan osilasi dipol partikel air, menghasilkan panas melalui gesekan. Masalahnya adalah ini adalah frekuensi yang sama persis dengan yang digunakan oleh standar WiFi 802.11b/g/n.',
    },
    {
      type: 'title',
      text: 'Interferensi Elektromagnetik (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Setiap perangkat WiFi yang beroperasi di pita 2,4GHz bersaing untuk "udara" yang sama dengan microwave Anda. Dalam oven yang sempurna, <strong>Sangkar Faraday</strong> (jaring logam yang Anda lihat di pintu dan dinding dalam) harus mengandung 100% energi.',
    },
    {
      type: 'paragraph',
      html: 'Namun, tidak ada sangkar yang sempurna dalam jangka panjang. Segel pintu, kait magnetik, dan keausan logam dapat memungkinkan sejumlah kecil energi keluar. Meskipun level ini biasanya jauh di bawah batas aman bagi manusia, mereka <strong>sangat besar</strong> bagi kartu jaringan WiFi, menyebabkan latensi, paket hilang, dan "jitter" karakteristik yang diukur oleh alat kami.',
    },
    {
      type: 'title',
      text: 'Tes Sangkar Faraday Buatan Sendiri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ada cara analog yang sangat sederhana untuk memeriksa kondisi dasar pelindung oven Anda, meskipun kurang akurat dibandingkan pengukuran jitter digital kami:',
    },
    {
      type: 'list',
      items: [
        '<strong>Langkah 1 - Telepon:</strong> Letakkan ponsel Anda di dalam microwave (<strong>DALAM KEADAAN APA PUN JANGAN NYALAKAN OVEN!</strong> Cukup tutup pintunya).',
        '<strong>Langkah 2 - Panggilan:</strong> Coba panggil ponsel tersebut dari perangkat lain. Jika ponsel berdering, sangkar Faraday rusak atau tidak selaras untuk frekuensi seluler. Jika memberikan "di luar jangkauan," pelindung berfungsi dengan benar.',
      ],
    },
    {
      type: 'title',
      text: 'Mitos vs Realitas Ilmiah',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Microwave mengubah struktur molekul air"</strong> - SALAH. Radiasi microwave bersifat <em>non-ionisasi</em>. Ia tidak memiliki cukup energi untuk memutus ikatan kimia atau mengubah DNA. Ia hanya menggetarkan molekul air, meningkatkan energi kinetiknya (suhu).',
        '<strong>"Radiasi menumpuk di makanan"</strong> - SALAH. Microwave seperti cahaya: begitu Anda mematikan saklar, mereka hilang. Makanan panas tidak memancarkan radiasi microwave, hanya radiasi inframerah (panas) seperti api unggun atau wajan.',
        '<strong>"Menonton piring berputar merusak mata Anda"</strong> - SEBAGIAN BENAR. Kaca pintu dirancang dengan jaring yang memblokir panjang gelombang 2,45GHz. Namun, jika jaring tersebut rusak, kaca tidak akan menghentikan microwave. Lensa mata sangat sensitif terhadap panas dan memiliki sirkulasi darah yang buruk, sehingga paparan langsung yang lama (di dekat kebocoran) dapat menyebabkan katarak termal.',
      ],
    },
    {
      type: 'title',
      text: 'Bagaimana detektor digital ini bekerja?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alat kami tidak mengukur radiasi secara langsung (smartphone tidak memiliki sensor untuk ini), tetapi mengukur <strong>gejala utama</strong>. Ketika molekul radiasi 2,45GHz keluar dari oven, ia "bertabrakan" dengan sinyal WiFi perangkat Anda. Ini menyebabkan:',
    },
    {
      type: 'list',
      items: [
        '<strong>Retransmisi Paket:</strong> Router mendeteksi bahwa pesan tiba dalam keadaan rusak dan harus mengirimnya kembali, sehingga meningkatkan latensi.',
        '<strong>Variasi Jitter:</strong> Ini adalah ukuran ketidakstabilan dalam waktu respons. Jitter yang tinggi adalah tanda yang jelas dari interferensi eksternal yang masif.',
        '<strong>Penurunan Performa:</strong> Kecepatan transfer anjlok karena saturasi spektrum radio.',
        '<strong>Noise Latar Belakang:</strong> Microwave menyuntikkan noise yang menaikkan "noise floor," sehingga menyulitkan perangkat untuk membedakan antara data nyata dan kekacauan radioaktif.',
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

