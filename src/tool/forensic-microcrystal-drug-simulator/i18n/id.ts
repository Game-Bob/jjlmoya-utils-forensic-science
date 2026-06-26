import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-uji-narkoba-mikrokristal-forensik';
const title = 'Simulator Uji Narkoba Mikrokristal Forensik';
const description = 'Simulasikan pola penapisan narkoba mikrokristal untuk tujuan pendidikan dengan menggabungkan zat terlarang yang dicurigai dengan reagen forensik klasik dan membandingkan bentuk kristal, kecepatan pertumbuhan, serta respons cahaya terpolarisasi.';

const howTo = [
  {
    name: 'Pilih sampel yang dicurigai',
    text: 'Pilih kokain, heroin, amfetamin, atau metamfetamin untuk memuat profil pengajaran zat yang tidak diketahui.',
  },
  {
    name: 'Terapkan reagen mikrokristal',
    text: 'Beralih antara platina klorida, emas klorida, dan reagen Dragendorff untuk melihat bagaimana kimia reagen mengubah morfologi kristal.',
  },
  {
    name: 'Sesuaikan polarisasi simulasi',
    text: 'Geser kontrol polarisasi untuk meningkatkan atau mengurangi kontras birefringence dalam bidang mikroskop virtual.',
  },
  {
    name: 'Bandingkan hasil dengan referensi',
    text: 'Gunakan label bentuk kristal, skor kecocokan, kecepatan pertumbuhan, dan catatan interpretasi untuk memutuskan apakah pola tersebut mirip referensi, sebagian cocok, atau tidak spesifik.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Apakah uji mikrokristal bersifat konfirmatif untuk narkoba ilegal?',
    answer: 'Tidak. Uji mikrokristal adalah alat penapisan presumtif atau komparatif. Identifikasi narkoba sitaan yang sebenarnya harus mengikuti skema tervalidasi yang mencakup kontrol yang sesuai dan metode instrumental konfirmatif seperti GC-MS, LC-MS, atau spektroskopi inframerah.',
  },
  {
    key: 'faq-2',
    question: 'Mengapa reagen yang berbeda menghasilkan bentuk kristal yang berbeda?',
    answer: 'Reagen membentuk garam, kompleks, atau endapan dengan gugus fungsi pada senyawa target. Kelarutan, kekuatan asam, konsentrasi, pengotor, dan laju pengeringan memengaruhi apakah bentuk kristal yang diamati muncul sebagai jarum, roset, prisma, lempengan, atau sebaran lemah.',
  },
  {
    key: 'faq-3',
    question: 'Apa fungsi cahaya terpolarisasi pada pemeriksaan mikrokristal?',
    answer: 'Cahaya terpolarisasi dapat meningkatkan kontras dan menunjukkan birefringence, membuat tepi, percabangan, dan struktur kristal internal lebih mudah dibandingkan. Ini tidak menghilangkan kebutuhan akan standar referensi dan kontrol.',
  },
  {
    key: 'faq-4',
    question: 'Mengapa pola yang tampak positif masih bisa menyesatkan?',
    answer: 'Zat pencampur, campuran, bahan yang terdegradasi, usia reagen, kontaminasi, dan ekspektasi analis semuanya dapat menghasilkan morfologi yang ambigu atau tumpang tindih. Itulah mengapa hasil presumtif harus diinterpretasikan dengan hati-hati.',
  },
  {
    key: 'faq-5',
    question: 'Apakah simulator ini dapat mengidentifikasi zat yang tidak diketahui?',
    answer: 'Tidak. Ini adalah visualisasi edukatif dari konsep morfologi umum. Simulator ini tidak dapat menguji bukti nyata, mengukur sifat kimia, atau mengeluarkan kesimpulan laboratorium.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Mikroskop polarisasi',
    canvasAria: 'Bidang pertumbuhan mikrokristal animasi',
    sample: 'Sampel dicurigai',
    sampleCocaine: 'Kokain',
    sampleHeroin: 'Heroin',
    sampleAmphetamine: 'Amfetamin',
    sampleMethamphetamine: 'Metamfetamin',
    reagent: 'Rak reagen',
    reagentPlatinum: 'Platina klorida',
    reagentGold: 'Emas klorida',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Kontras polarisasi',
    confidence: 'Kecocokan',
    growth: 'Pertumbuhan',
    birefringence: 'Birefr.',
    regrow: 'Tumbuhkan ulang kristal',
    warningLabel: 'Peringatan forensik',
    warningTitle: 'Peringatan penapisan',
    matchReference: 'Mirip referensi',
    matchPartial: 'Cocok sebagian',
    matchNonSpecific: 'Tidak spesifik',
    habitFeatheryNeedles: 'Bundel jarum berbulu',
    habitRosettes: 'Semburan bintang roset',
    habitBranchingPrisms: 'Prisma bercabang',
    habitPlates: 'Lempengan tipis',
    habitWeakScatter: 'Sebaran lemah tidak spesifik',
    cueCocainePlatinumChloride: 'Bundel jarum berbulu dan bercabang adalah pola pengajaran yang diharapkan untuk kokain dengan platina klorida.',
    cueCocaineGoldChloride: 'Emas klorida dapat membentuk kristal bercabang oranye-cokelat, tetapi polanya kurang spesifik dibandingkan platina klorida.',
    cueCocaineDragendorff: 'Reagen Dragendorff memberikan respons alkaloid lemah di sini; morfologi harus diperlakukan sebagai informasi penapisan saja.',
    cueHeroinPlatinumChloride: 'Endapan seperti lempengan mungkin muncul, tetapi pasangan ini bukan kecocokan pengajaran konfirmatif yang kuat.',
    cueHeroinGoldChloride: 'Kluster roset dan semburan bintang bulat adalah pola heroin mirip referensi dalam simulator ini.',
    cueHeroinDragendorff: 'Dragendorff menghasilkan prisma bercabang oranye yang konsisten dengan penapisan alkaloid, bukan bukti identitas.',
    cueAmphetaminePlatinumChloride: 'Prisma bercabang cepat menunjukkan pola pengajaran seperti stimulan di bawah reagen yang dipilih.',
    cueAmphetamineGoldChloride: 'Kristalisasi yang jarang berarti temuan visual harus dilaporkan sebagai tidak spesifik.',
    cueAmphetamineDragendorff: 'Semprotan jarum tumbuh dengan cepat dan berguna untuk mengajarkan perbandingan amfetamin presumtif.',
    cueMethamphetaminePlatinumChloride: 'Roset terpolarisasi dapat terbentuk, tetapi hasilnya tetap merupakan perbandingan morfologi presumtif.',
    cueMethamphetamineGoldChloride: 'Bentuk lempengan tipis terlihat, meskipun tumpang tindih dengan senyawa lain membatasi spesifisitas.',
    cueMethamphetamineDragendorff: 'Prisma bercabang oranye pekat memberikan kecocokan pengajaran terkuat untuk metamfetamin dalam set ini.',
    disclaimer: 'Model penapisan untuk tujuan pendidikan saja. Identifikasi narkoba yang sebenarnya memerlukan standar referensi tervalidasi, kontrol reagen, rantai pengawasan, dan analisis instrumental konfirmatif.',
  },
  seo: [
    {
      type: 'title',
      text: 'Pengujian Narkoba Mikrokristal dalam Ilmu Forensik',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulator pengajaran',
      title: 'Tujuan simulator mikrokristal ini',
      html: 'Alat ini menjelaskan bagaimana uji mikrokristal forensik klasik dapat menghasilkan bentuk kristal yang dapat dikenali setelah narkoba yang dicurigai dicampur dengan reagen. Ini membantu mahasiswa membandingkan <strong>morfologi kristal</strong>, kecepatan pertumbuhan, dan kontras cahaya terpolarisasi tanpa memperlakukan hasil browser sebagai bukti.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'profil sampel pengajaran', icon: 'mdi:flask-outline' },
        { value: '3', label: 'pilihan reagen tradisional', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'bentuk kristal yang dimodelkan', icon: 'mdi:shape-outline' },
        { value: '0', label: 'klaim identifikasi hukum', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Cara Menginterpretasikan Bentuk Kristal',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Daftar periksa perbandingan praktis',
      items: [
        'Mulailah dengan standar referensi yang diketahui dan kontrol reagen kosong sebelum membandingkan sampel yang tidak diketahui.',
        'Catat reagen, konsentrasi, ukuran tetesan, waktu pengeringan, suhu, dan perbesaran mikroskop.',
        'Bandingkan bentuk keseluruhan terlebih dahulu: jarum, roset, lempengan, prisma, bercabang, atau sebaran lemah.',
        'Perlakukan pertumbuhan parsial atau jarang sebagai alasan untuk pengujian lebih lanjut, bukan sebagai identifikasi yang meyakinkan.',
      ],
    },
    {
      type: 'table',
      headers: ['Bentuk kristal yang diamati', 'Pertanyaan umum pengguna', 'Interpretasi yang hati-hati'],
      rows: [
        ['Jarum berbulu', 'Apakah ini terlihat seperti kokain dengan platina klorida?', 'Ini bisa menjadi kecocokan pengajaran yang berguna, tetapi campuran dan kondisi reagen dapat mengubah bentuk kristal.'],
        ['Roset', 'Apakah kristal semburan bintang bersifat diagnostik?', 'Roset dapat mendukung perbandingan ketika kontrol cocok, tetapi tidak cukup jika berdiri sendiri.'],
        ['Prisma bercabang', 'Mengapa penapisan stimulan sering kali tumbuh cepat?', 'Beberapa garam bernukleasi dengan cepat dan bercabang saat pelarut menguap; kecepatan bersifat mendukung, bukan konfirmatif.'],
        ['Sebaran lemah', 'Apakah pola yang lemah berarti tidak ada narkoba yang terkandung?', 'Tidak. Konsentrasi rendah, pengotor, reagen yang sudah lama, atau preparasi yang buruk dapat menghambat pertumbuhan kristal.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Penapisan mikrokristal membantu dalam',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Perbandingan visual cepat ketika analis terlatih menggunakan kontrol dan bahan referensi.',
          points: ['Demonstrasi kelas', 'Kosakata morfologi', 'Triase presumtif', 'Perbandingan efek reagen'],
        },
        {
          title: 'Penapisan mikrokristal tidak dapat menggantikan',
          icon: 'mdi:alert-circle-outline',
          description: 'Kimia konfirmatif tervalidasi untuk kesimpulan narkoba sitaan yang sebenarnya.',
          points: ['Konfirmasi instrumental', 'Prosedur terakreditasi', 'Validasi spesifik matriks', 'Dokumentasi ketidakpastian'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Latar Belakang Ilmiah tentang Pengujian Mikrokristal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uji mikrokristal mewakili kelas uji penapisan kimia yang historis dan sangat sensitif yang digunakan oleh ahli kimia forensik untuk mengidentifikasi zat terlarang yang dicurigai. Ketika sejumlah kecil sampel narkoba dilarutkan dalam asam dan digabungkan dengan reagen logam berat tertentu, seperti emas klorida atau platina klorida, kompleks koordinasi atau garam yang tidak larut akan mengendap. Struktur molekul narkoba menentukan laju pertumbuhan, orientasi, dan simetri kristal yang dihasilkan, menghasilkan bentuk atau morfologi mikroskopis yang khas.',
    },
    {
      type: 'paragraph',
      html: 'Menganalisis morfologi ini di bawah mikroskop cahaya terpolarisasi memungkinkan pemeriksa forensik untuk mengamati sifat optik seperti birefringence, di mana kristal membagi cahaya menjadi dua sinar, menciptakan warna-warna cerah dan kontras tinggi. Meskipun metode instrumental seperti kromatografi gas-spektrometri massa sebagian besar telah menggantikan uji mikrokristal untuk identifikasi konfirmatif, penapisan mikrokristal tetap menjadi teknik yang dihargai karena kecepatannya, biayanya yang rendah, dan kemampuannya untuk memisahkan isomer optik yang mungkin menantang untuk dibedakan dengan cara lain.',
    },
    {
      type: 'paragraph',
      html: 'Dalam lingkungan pendidikan, mensimulasikan reaksi-reaksi ini membantu mahasiswa memahami hubungan antara reagen kimia dan morfologi kristal fisik. Dengan mengamati bagaimana kokain, heroin, dan berbagai amfetamin merespons reagen yang berbeda, mahasiswa belajar bahwa satu tes positif bukanlah kesimpulan forensik akhir. Protokol penapisan narkoba yang tepat memerlukan perbandingan sampel yang tidak diketahui dengan bahan referensi yang diketahui dan melakukan pengujian blanko reagen untuk memastikan validitas dan spesifisitas pola kristal yang diamati.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Bentuk kristal', definition: 'Bentuk fisik atau pola pertumbuhan kristal yang terlihat, seperti jarum, lempengan, prisma, atau roset.' },
        { term: 'Nukleasi', definition: 'Pembentukan awal pusat kristal kecil tempat struktur yang lebih besar tumbuh.' },
        { term: 'Birefringence', definition: 'Perilaku optik yang dapat membuat kristal tampak lebih terang atau berwarna di bawah cahaya terpolarisasi.' },
        { term: 'Uji presumtif', definition: 'Uji penapisan yang menyarankan kemungkinan kelas atau senyawa tetapi tidak membuktikan identitas dengan sendirinya.' },
        { term: 'Standar referensi', definition: 'Bahan yang diketahui yang diuji di bawah kondisi yang sama untuk membandingkan pola yang tidak diketahui.' },
      ],
    },
    {
      type: 'tip',
      title: 'Praktik terbaik untuk bukti nyata',
      html: 'Gunakan morfologi mikrokristal sebagai salah satu jalur penyelidikan. Alur kerja yang andal mencakup blanko reagen, kontrol positif, dokumentasi usia reagen, tinjauan independen jika diperlukan, dan pengujian konfirmatif di bawah skema narkoba sitaan yang diterima.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Peringatan forensik',
      title: 'Kristal yang indah bukanlah identifikasi hukum',
      html: 'Simulator ini secara sengaja memisahkan skor kecocokan visual dari kesimpulan forensik. Pekerjaan kasus nyata harus memperhitungkan zat pencampur, campuran, kontaminasi, kinerja reagen, pelatihan analis, dan prosedur laboratorium tervalidasi.',
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
