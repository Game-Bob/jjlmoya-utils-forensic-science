const description = 'Modelkan paradoks Fermi dengan masukan persamaan Drake, filter evolusioner, masa hidup sinyal, dan proyeksi waktu peradaban Bima Sakti yang terdeteksi.';
const slug = 'laboratorium-filter-paradoks-fermi';
const title = 'Laboratorium Filter Paradoks Fermi';

const howTo = [
  {
    name: 'Estimasi jalur Drake',
    text: 'Geser pengatur pembentukan bintang, planet layak huni, kehidupan, kecerdasan, dan teknologi untuk menentukan seberapa sering Bima Sakti menciptakan peradaban yang terdeteksi.',
  },
  {
    name: 'Atur kekuatan filter',
    text: 'Tingkatkan filter evolusioner ketika Anda ingin keruntuhan, kehancuran diri, ketidakstabilan ekologis, atau hambatan teknologi untuk menghilangkan peradaban lebih cepat.',
  },
  {
    name: 'Bandingkan masa hidup dengan cakrawala',
    text: 'Gunakan masa hidup sinyal dan cakrawala proyeksi bersama-sama. Masa hidup yang pendek dapat membuat galaksi sunyi meskipun peradaban lahir secara teratur.',
  },
  {
    name: 'Baca kurva temporal',
    text: 'Grafik menunjukkan peradaban yang terdeteksi sepanjang waktu, membuat koeksistensi dan kepunahan terlihat alih-alih mereduksi paradoks Fermi menjadi satu angka.',
  },
];

const faq = [
  {
    question: 'Apa yang dihitung oleh simulator paradoks Fermi ini?',
    answer: 'Simulator ini menggabungkan istilah persamaan Drake dengan filter kelangsungan hidup dan cakrawala waktu untuk memperkirakan berapa banyak peradaban teknologi yang mungkin terdeteksi pada waktu yang sama di Bima Sakti.',
  },
  {
    question: 'Apakah ini prediksi peradaban alien nyata?',
    answer: 'Tidak. Ini adalah model eksploratif. Nilainya terletak pada melihat bagaimana asumsi berinteraksi: sebuah galaksi dapat menghasilkan banyak peradaban sepanjang sejarah namun tetap memiliki sangat sedikit yang tumpang tindih dengan kita.',
  },
  {
    question: 'Apa itu Great Filter?',
    answer: 'Great Filter adalah gagasan bahwa satu atau lebih langkah antara kimia sederhana dan peradaban teknologi yang berumur panjang sangat tidak mungkin atau berbahaya.',
  },
  {
    question: 'Mengapa masa hidup sinyal begitu penting?',
    answer: 'Keterdeteksian bergantung pada tumpang tindih. Peradaban yang menyiarkan sinyal hanya beberapa abad mungkin nyata tetapi tidak terlihat oleh peradaban lain yang mengamati di era yang berbeda.',
  },
  {
    question: 'Bagaimana cara memilih fraksi kehidupan dan kecerdasan?',
    answer: 'Gunakan nilai rendah untuk skenario langka-kehidupan yang pesimistis dan nilai lebih tinggi saat mengeksplorasi kemungkinan bahwa biologi atau kecerdasan sering muncul di dunia layak huni yang stabil.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Proyeksi peradaban yang terdeteksi sepanjang waktu',
    metricsLabel: 'Metrik model Fermi',
    controlsLabel: 'Kontrol model Fermi',
    birthRate: 'Tingkat kelahiran',
    peakCivilizations: 'Puncak peradaban',
    finalCivilizations: 'Peradaban akhir',
    silenceScore: 'Skor kesunyian',
    starFormationRate: 'Tingkat pembentukan bintang',
    habitableFraction: 'Fraksi planet layak huni',
    lifeFraction: 'Fraksi kemunculan kehidupan',
    intelligenceFraction: 'Fraksi kecerdasan',
    technologyFraction: 'Fraksi teknologi',
    signalLifetime: 'Masa hidup sinyal',
    filterSeverity: 'Tingkat keparahan filter',
    horizonYears: 'Cakrawala proyeksi',
    maxLabel: 'maks',
    yearUnit: 'thn',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator paradoks Fermi praktis untuk asumsi persamaan Drake',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Paradoks Fermi menanyakan mengapa langit malam tampak sunyi jika Bima Sakti mengandung ratusan miliar bintang dan banyak planet. Alat ini mengubah pertanyaan tersebut menjadi model interaktif dengan menggabungkan persamaan Drake dengan filter evolusioner dan proyeksi waktu peradaban yang terdeteksi.',
    },
    {
      type: 'paragraph',
      html: 'Alih-alih memberikan satu estimasi statis, simulator menunjukkan bagaimana peradaban dapat lahir, menjadi terdeteksi, dan lenyap sebelum masyarakat lain memiliki kesempatan mendengarnya. Masalah waktu ini sangat penting bagi SETI karena dua budaya teknologi harus tumpang tindih dalam ruang, waktu, dan perilaku sinyal.',
    },
    {
      type: 'title',
      text: 'Bagaimana model menggunakan parameter persamaan Drake',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kontrol pertama mewakili jalur Drake yang disederhanakan. Pembentukan bintang memasok sistem bintang baru. Sebagian dari sistem tersebut membentuk planet layak huni, sebagian planet layak huni mengembangkan kehidupan, sebagian dunia kehidupan menghasilkan kecerdasan, dan sebagian spesies cerdas menjadi terdeteksi melalui teknologi.',
    },
    {
      type: 'table',
      headers: ['Kontrol', 'Arti', 'Efek'],
      rows: [
        ['Tingkat pembentukan bintang', 'Bintang baru per tahun di Bima Sakti', 'Menaikkan atau menurunkan pasokan mentah sistem yang mungkin'],
        ['Fraksi planet layak huni', 'Bagian sistem dengan dunia stabil di mana kimia air cair dapat bertahan', 'Mengontrol seberapa banyak galaksi yang masuk ke jalur biologis'],
        ['Fraksi kemunculan kehidupan', 'Probabilitas bahwa kehidupan sederhana dimulai di dunia layak huni', 'Menguji asumsi langka-kehidupan versus umum-kehidupan'],
        ['Fraksi kecerdasan', 'Probabilitas bahwa kehidupan berevolusi menjadi kognisi yang mampu berteknologi', 'Mewakili hambatan biologis dan ekologis'],
        ['Fraksi teknologi', 'Probabilitas bahwa kecerdasan menghasilkan sinyal yang terdeteksi', 'Menangkap pilihan budaya, rekayasa, dan komunikasi'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa filter dapat membuat galaksi sibuk tampak kosong',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pengatur tingkat keparahan filter memadatkan banyak kemungkinan titik kegagalan menjadi satu tekanan kelangsungan hidup: dampak asteroid, iklim tidak stabil, kehancuran diri, keruntuhan sumber daya, risiko kecerdasan buatan, atau hambatan lain yang memperpendek fase terdeteksi. Filter yang kuat tidak berarti peradaban tidak pernah muncul. Ini berarti mereka jarang tetap terlihat untuk waktu yang lama.',
    },
    {
      type: 'paragraph',
      html: 'Perbedaan itu penting. Bima Sakti mungkin telah menghasilkan ribuan spesies teknologi selama waktu yang dalam namun meninggalkan hampir tidak ada tetangga yang aktif selama jendela pendengaran sempit kita sendiri. Grafik membuat perbedaan ini terlihat dengan memplot peradaban yang terdeteksi melalui cakrawala proyeksi yang dipilih.',
    },
    {
      type: 'title',
      text: 'Menafsirkan skor kesunyian',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skor kesunyian meningkat ketika jumlah akhir peradaban yang terdeteksi dan tumpang tindih rendah. Kesunyian tinggi tidak membuktikan bahwa manusia sendirian; ini menunjukkan bahwa asumsi yang dipilih membuat tidak-terdeteksi tidak mengejutkan. Kesunyian rendah berarti model mengharapkan galaksi yang lebih ramai, sehingga ketiadaan bukti menjadi lebih menarik.',
    },
    {
      type: 'list',
      items: [
        '<strong>Tingkat kelahiran tinggi dengan filter rendah:</strong> galaksi padat di mana kesunyian SETI lebih sulit dijelaskan.',
        '<strong>Tingkat kelahiran tinggi dengan filter tinggi:</strong> banyak peradaban muncul, tetapi sedikit yang bertahan cukup lama untuk tumpang tindih.',
        '<strong>Fraksi biologis rendah:</strong> kehidupan atau kecerdasan langka, sehingga kesunyian dapat muncul sebelum teknologi menjadi relevan.',
        '<strong>Masa hidup sinyal pendek:</strong> peradaban mungkin ada tetapi menyiarkan terlalu singkat sehingga kontak tidak mungkin terjadi.',
      ],
    },
    {
      type: 'title',
      text: 'Penggunaan untuk pengajaran, debat, dan intuisi SETI',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Laboratorium Filter Paradoks Fermi berguna dalam pelajaran astronomi, diskusi astrobiologi, komunikasi sains, dan debat filosofis tentang masa depan umat manusia. Ini membantu memisahkan tiga pertanyaan yang sering digabungkan: seberapa sering peradaban lahir, berapa lama mereka tetap terdeteksi, dan apakah garis waktu mereka tumpang tindih dengan kita.',
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
