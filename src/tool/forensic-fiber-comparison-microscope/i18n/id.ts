import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'mikroskop-perbandingan-serat-forensik';
const title = 'Simulator Mikroskop Perbandingan Serat Forensik';
const description = 'Bangun profil serat tekstil yang dipertanyakan, bandingkan dengan referensi yang diketahui, dan interpretasikan bukti morfologi, polarisasi, dan spektrum warna UV-Vis.';

const howTo = [
  {
    name: 'Bangun profil serat yang dipertanyakan',
    text: 'Atur bahan, diameter, arah pilinan, respons polarisasi, dan profil warna untuk serat yang ditemukan.',
  },
  {
    name: 'Pilih serat perbandingan yang diketahui',
    text: 'Pilih serat pakaian tersangka seperti katun, wol, poliester, atau nilon di sisi kanan.',
  },
  {
    name: 'Sesuaikan fokus dan polarisasi',
    text: 'Geser pengatur fokus dan putar polarisator untuk mengamati ketajaman, garis permukaan, dan respons bias ganda (birefringence).',
  },
  {
    name: 'Bandingkan morfologi dan spektrum UV-Vis',
    text: 'Gunakan skor morfologi, skor spektrum, kecocokan gabungan, dan kurva absorbansi untuk memutuskan apakah sampel konsisten atau jelas berbeda.',
  },
];

const faq = [
  {
    question: 'Apakah mikroskopi serat dapat mengidentifikasi pakaian pasti asal serat tersebut?',
    answer: 'Biasanya tidak. Perbandingan serat dapat menunjukkan konsistensi atau perbedaan antara serat yang dipertanyakan dan tekstil yang diketahui, tetapi atribusi sumber individu memerlukan konteks yang cermat, metode yang divalidasi, dan sering kali analisis kimia atau instrumental tambahan.',
  },
  {
    question: 'Mengapa menggunakan cahaya terpolarisasi dalam perbandingan serat?',
    answer: 'Cahaya terpolarisasi membantu mengungkapkan bias ganda (birefringence), perilaku kepunahan (extinction), dan perbedaan struktural antara serat alami dan sintetis. Serat sintetis sering kali menunjukkan respons polarisasi yang lebih kuat karena orientasi molekul.',
  },
  {
    question: 'Apa kegunaan spektrum UV-Vis?',
    answer: 'Sementara mikroskopi mendeskripsikan bentuk dan perilaku optik, absorbansi UV-Vis dapat membandingkan perilaku zat warna di berbagai panjang gelombang. Serat serupa dengan zat warna yang berbeda dapat terpisah dengan jelas di plot spektral.',
  },
  {
    question: 'Mengapa hasilnya ditampilkan sebagai skor, bukan identifikasi akhir?',
    answer: 'Bukti jejak forensik harus dilaporkan secara proporsional. Skor tersebut adalah ringkasan edukasi tentang morfologi dan kesamaan warna, bukan kesimpulan laboratorium atau opini hukum.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Mikroskop forensik virtual bidang terpisah membandingkan dua serat tekstil',
    chartAria: 'Grafik absorbansi UV-Vis membandingkan spektrum zat warna serat yang dipertanyakan dan diketahui',
    questionedSample: 'Sampel dipertanyakan',
    fixedEvidence: 'Bukti tetap yang ditemukan',
    builderSummaryDefault: 'Katun / 18 µm / tidak teratur / indigo',
    customQuestionedLabel: 'Kasus serat yang dipertanyakan',
    material: 'Bahan',
    cotton: 'Katun',
    woolMaterial: 'Wol',
    polyesterMaterial: 'Poliester',
    nylonMaterial: 'Nilon',
    materialcotton: 'katun',
    materialwool: 'wol',
    materialpolyester: 'poliester',
    materialnylon: 'nilon',
    twist: 'Pilinan',
    irregularTwist: 'Tidak teratur',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Diameter',
    polarResponse: 'Respons polar',
    dyeProfile: 'Profil warna',
    indigoDye: 'Indigo',
    crimsonDye: 'Crimson',
    navyDye: 'Navy',
    violetDye: 'Violet',
    dyeindigo: 'indigo',
    dyecrimson: 'crimson',
    dyenavy: 'navy',
    dyeviolet: 'violet',
    knownSample: 'Perbandingan diketahui',
    questionedCotton: 'Serat katun biru yang dipertanyakan',
    suspectCotton: 'Serat katun kemeja tersangka',
    wool: 'Serat sweter wol merah',
    polyester: 'Serat jaket poliester navy',
    nylon: 'Serat lapisan nilon violet',
    focus: 'Fokus halus',
    polarizer: 'Sudut polarisator',
    morphology: 'Morfologi',
    spectrum: 'UV-Vis',
    birefringence: 'Bias ganda',
    combinedMatch: 'Kecocokan gabungan',
    uvVisTitle: 'Overlay absorbansi UV-Vis',
    statusStrong: 'Konsistensi tinggi',
    statusPartial: 'Perbandingan campuran',
    statusDifferent: 'Pengecualian didukung',
    verdictStrong: 'Serat yang dipertanyakan dan diketahui sangat konsisten dalam hal diameter, pilinan, perilaku optik, dan spektrum zat warna. Dalam kasus nyata, laporkan ini sebagai dukungan untuk kemungkinan sumber tekstil yang sama, bukan sebagai identifikasi individu.',
    verdictPartial: 'Perbandingan bersifat campuran. Beberapa karakteristik kelas cocok, tetapi morfologi, respons zat warna, atau bias ganda menunjukkan perbedaan yang cukup sehingga pemeriksaan lebih lanjut diperlukan sebelum asosiasi yang hati-hati dilakukan.',
    verdictDifferent: 'Serat tidak konsisten pada karakteristik kelas utama. Hasil simulasi mendukung pengecualian tekstil yang diketahui ini sebagai sumber yang mungkin untuk serat yang dipertanyakan.',
    disclaimer: 'Simulasi pendidikan saja. Perbandingan serat forensik yang nyata memerlukan mikroskopi yang divalidasi, kontrol, dokumentasi, pengamanan kontaminasi, tinjauan sejawat, dan interpretasi bukti jejak yang berkualifikasi.',
  },
  seo: [
    {
      type: 'title',
      text: 'Perbandingan Serat Forensik dengan Mikroskopi Bidang Terpisah dan Spektrum UV-Vis',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulator pengajaran',
      title: 'Apa yang ditunjukkan oleh mikroskop serat virtual ini',
      html: 'Simulator ini memodelkan alur kerja praktis di balik <strong>perbandingan serat forensik</strong>: deskripsikan serat tekstil yang dipertanyakan, bandingkan dengan referensi yang diketahui, sesuaikan fokus, putar filter polarisasi, dan bandingkan respons zat warna dengan kurva absorbansi UV-Vis yang disederhanakan. Ini dirancang untuk siswa yang mempelajari bukti jejak, bukan untuk pengambilan keputusan kasus.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 bidang', label: 'tampilan mikroskop terpisah', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'kisaran spektrum terlihat', icon: 'mdi:chart-bell-curve' },
        { value: '4 kelas', label: 'katun, wol, poliester, nilon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'rotasi polarisator', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Pengamatan inti dalam perbandingan serat tekstil',
      items: [
        'Ukur atau perkirakan diameter serat sambil memperhatikan variasi alami di sepanjang serat.',
        'Catat arah pilinan, garis permukaan, fitur mirip medula, partikel kusam (delustering), dan petunjuk penampang jika tersedia.',
        'Gunakan cahaya terpolarisasi untuk membandingkan bias ganda, perilaku kepunahan, dan perubahan kecerahan di bawah rotasi.',
        'Bandingkan warna secara mikroskopis, lalu gunakan informasi zat warna instrumental ketika kasus membutuhkan diskriminasi yang lebih besar.',
        'Laporkan apakah temuan tersebut konsisten, berbeda, atau tidak meyakinkan; hindari kata-kata yang menyiratkan sumber pakaian yang unik tanpa dukungan.',
      ],
    },
    {
      type: 'table',
      headers: ['Pengamatan', 'Membantu menjawab apa', 'Batasan'],
      rows: [
        ['Diameter dan morfologi', 'Apakah serat-serat tersebut secara fisik serupa?', 'Variasi manufaktur dapat tumpang tindih antar pakaian.'],
        ['Pilinan dan detail permukaan', 'Apakah fitur alami atau sintetis cocok?', 'Kerusakan, peregangan, dan pemasangan preparat dapat mengubah penampilan.'],
        ['Respons cahaya terpolarisasi', 'Apakah sifat optik cocok?', 'Bias ganda adalah bukti tingkat kelas, bukan tanda unik.'],
        ['Spektrum zat warna UV-Vis', 'Apakah zat warna konsisten?', 'Zat warna serupa mungkin tampak dekat; ekstraksi dan pengaturan instrumen berpengaruh.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Apa yang mendukung konsistensi',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Beberapa karakteristik kelas independen cocok antara serat yang dipertanyakan dan diketahui.',
          points: ['Kisaran diameter yang sebanding', 'Jenis serat umum yang sama', 'Perilaku polarisasi yang serupa', 'Puncak absorbansi zat warna yang tumpang tindih'],
        },
        {
          title: 'Apa yang mendukung pengecualian',
          icon: 'mdi:close-circle-outline',
          description: 'Perbedaan yang jelas dan dapat diulang muncul dalam karakteristik yang seharusnya cocok untuk sumber tekstil yang sama.',
          points: ['Ketidakcocokan alami versus sintetis', 'Pilinan atau morfologi permukaan yang berbeda', 'Spektrum zat warna yang sangat berbeda', 'Respons bias ganda yang tidak kompatibel'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cara Kerja Model Simulasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model ini menyimpan basis data referensi kecil dengan diameter, arah pilinan, kelas serat, bias ganda, keluarga zat warna, dan titik absorbansi UV-Vis. Serat yang dipertanyakan dapat dikonfigurasi oleh pengguna, sehingga skor perbandingan merespons profil kasus, bukan sampel kelas yang tetap. Tampilan mikroskop visual kemudian merespons fokus dan sudut polarisator sehingga siswa dapat melihat mengapa pengaturan optik penting.',
    },
    {
      type: 'paragraph',
      html: 'Kontrol polarisator sangat berguna untuk serat sintetis. Poliester dan nilon diberi nilai bias ganda yang lebih kuat, sehingga kecerahannya berubah lebih terlihat saat polarisator berputar. Katun alami dan wol juga merespons, tetapi efek simulasi lebih halus. Ini mencerminkan gagasan pengajaran bahwa orientasi molekul dan struktur serat memengaruhi perilaku optik.',
    },
    {
      type: 'paragraph',
      html: 'Grafik UV-Vis adalah overlay yang disederhanakan, bukan pengganti spektrofotometer. Dalam pekerjaan bukti jejak nyata, perbandingan zat warna mungkin memerlukan mikrospektrofotometri, kromatografi lapis tipis, kimia ekstraksi, kontrol referensi, dan ketidakpastian yang didokumentasikan. Grafik tersebut ada untuk mengajarkan mengapa dua serat yang terlihat mirip di bawah mikroskop mungkin masih terpisah oleh kimia zat warna.',
    },
    {
      type: 'paragraph',
      html: 'Pemeriksa forensik harus mendokumentasikan setiap langkah proses analisis serat. Ini termasuk mengambil foto terperinci, mencatat pengukuran, dan menjaga rantai kepemilikan untuk semua bukti fisik. Simulator membantu siswa memahami pentingnya dokumentasi sistematis dan perbandingan objektif dalam pekerjaan kasus forensik. Dengan berinteraksi dengan pengaturan yang berbeda, pengguna dapat mempelajari bagaimana jalur cahaya, ketebalan sampel, dan konsentrasi zat warna memengaruhi kurva spektral dan penampilan fisik.',
    },
    {
      type: 'paragraph',
      html: 'Pemeriksa forensik harus mendokumentasikan setiap langkah proses analisis serat. Ini termasuk mengambil foto terperinci, mencatat pengukuran, dan menjaga rantai kepemilikan untuk semua bukti fisik. Simulator membantu siswa memahami pentingnya dokumentasi sistematis dan perbandingan objektif dalam pekerjaan kasus forensik. Dengan berinteraksi dengan pengaturan yang berbeda, pengguna dapat mempelajari bagaimana jalur cahaya, ketebalan sampel, dan konsentrasi zat warna memengaruhi kurva spektral dan penampilan fisik.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Serat dipertanyakan', definition: 'Serat yang ditemukan dari TKP, korban, tersangka, alat, kendaraan, atau barang lain yang sumbernya tidak diketahui.' },
        { term: 'Serat diketahui', definition: 'Serat referensi yang dikumpulkan dari tekstil atau objek yang diketahui untuk dibandingkan dengan sampel yang dipertanyakan.' },
        { term: 'Bias ganda', definition: 'Perilaku optik di mana suatu bahan memiliki indeks bias yang berbeda tergantung pada arah cahaya atau polarisasi.' },
        { term: 'Spektrum UV-Vis', definition: 'Plot yang menunjukkan seberapa kuat zat warna atau bahan menyerap cahaya pada panjang gelombang yang berbeda.' },
        { term: 'Karakteristik kelas', definition: 'Properti yang dapat menghubungkan bukti dengan sekelompok sumber yang mungkin, bukan satu sumber yang unik.' },
      ],
    },
    {
      type: 'tip',
      title: 'Tip interpretasi untuk siswa',
      html: 'Skor kesamaan yang tinggi harus dibaca sebagai <strong>konsistensi</strong>, bukan identitas. Bukti jejak paling kuat ketika mikroskopi, kimia, konteks transfer, persistensi, metode pengambilan, dan kontrol kontaminasi semuanya menunjuk ke arah yang sama.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Jaga agar kesimpulan tetap dalam batasan bukti',
      html: 'Mikroskop browser tidak dapat memvalidasi kecocokan serat. Laporan resmi harus menjelaskan pengamatan, dasar perbandingan, batasan, dan tingkat dukungan tanpa melebih-lebihkan atribusi sumber.',
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
