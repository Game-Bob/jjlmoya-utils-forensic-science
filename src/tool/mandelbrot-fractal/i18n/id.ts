import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-fraktal-mandelbrot';
const title = 'Kalkulator Fraktal Mandelbrot dan Penjelajah Kesamaan Diri';
const description = 'Jelajahi himpunan Mandelbrot, perbesar batas fraktal yang serupa dengan dirinya sendiri, dan bandingkan kedalaman iterasi, kontras warna, serta koordinat bidang kompleks.';

const howTo = [
  {
    name: 'Pilih wilayah dari himpunan Mandelbrot',
    text: 'Mulai dari himpunan penuh atau langsung loncat ke wilayah dengan detail tinggi seperti lembah kuda laut atau minibrot spiral.',
  },
  {
    name: 'Perbesar dengan mengklik gambar',
    text: 'Klik titik mana pun pada kanvas untuk memusatkan ulang bidang kompleks dan memperbesar fraktal di sekitar koordinat tersebut.',
  },
  {
    name: 'Sesuaikan kedalaman iterasi dan kontras warna',
    text: 'Tingkatkan anggaran iterasi untuk mengungkap struktur batas yang lebih halus, lalu sesuaikan kontras dan palet agar pita waktu pelarian lebih mudah dibaca.',
  },
];

const faq = [
  {
    question: 'Apa yang ditampilkan kalkulator himpunan Mandelbrot?',
    answer: 'Alat ini menunjukkan bilangan kompleks c mana yang membuat rekurensi z(n+1) = z(n)^2 + c tetap terbatas saat dimulai dari z = 0. Titik yang tidak pernah lolos dalam anggaran iterasi yang dipilih diwarnai sebagai anggota himpunan, sedangkan titik di luar diwarnai berdasarkan seberapa cepat orbitnya meloloskan diri.',
  },
  {
    question: 'Mengapa batas Mandelbrot mengandung begitu banyak detail?',
    answer: 'Batas tersebut memisahkan orbit yang stabil dan yang meloloskan diri, dan perubahan koordinat kecil di dekat batas itu dapat mengubah perilaku jangka panjang secara total. Sensitivitas ini menciptakan bulb yang bersarang, spiral, filamen, dan salinan miniatur yang muncul di banyak tingkat perbesaran.',
  },
  {
    question: 'Apakah himpunan Mandelbrot benar-benar serupa dengan dirinya sendiri?',
    answer: 'Himpunan ini tidak sepenuhnya serupa dengan dirinya sendiri dalam arti ketat yang sama seperti segitiga Sierpinski, tetapi ia kaya akan kuasi-kesamaan diri. Salinan kecil dari seluruh himpunan muncul di seluruh bidang, sering kali terdistorsi dan terhubung oleh struktur bercabang yang rumit.',
  },
  {
    question: 'Apa yang dikendalikan oleh jumlah iterasi?',
    answer: 'Jumlah iterasi mengontrol berapa lama kalkulator menguji setiap titik sebelum memutuskan bahwa titik tersebut mungkin termasuk dalam himpunan. Nilai yang lebih tinggi mengungkap filamen yang lebih dalam dan minibrot yang lebih bersih, tetapi membutuhkan lebih banyak komputasi per piksel.',
  },
  {
    question: 'Mengapa warna berubah di luar wilayah hitam?',
    answer: 'Warna di luar didasarkan pada waktu pelarian: titik yang cepat lolos menerima warna berbeda dari titik yang tetap dekat dengan himpunan selama banyak iterasi. Pewarnaan halus mengurangi pita yang keras dan memudahkan inspeksi geometri orbit di sekitarnya.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulator Fraktal Mandelbrot',
    canvasLabel: 'Kanvas interaktif himpunan Mandelbrot',
    presetsLabel: 'Praset wilayah Mandelbrot',
    presetFull: 'Himpunan Penuh',
    presetSeahorse: 'Lembah Kuda Laut',
    presetSpiral: 'Minibrot Spiral',
    centerPoint: 'Pusat',
    magnification: 'Perbesaran',
    visibleWindow: 'Jendela terlihat',
    renderBudget: 'Iterasi',
    iterationsLabel: 'Kedalaman iterasi',
    contrastLabel: 'Kontras pelarian',
    colorLabel: 'Bidang warna',
    paletteEmber: 'Pita bara',
    paletteLagoon: 'Plasma laguna',
    paletteInk: 'Spektrum tinta',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Himpunan Mandelbrot untuk Fraktal, Waktu Pelarian, dan Kesamaan Diri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator fraktal Mandelbrot ini merender himpunan klasik bidang kompleks yang didefinisikan oleh iterasi <strong>z(n+1) = z(n)^2 + c</strong>. Alat ini dirancang untuk eksplorasi daripada pengamatan pasif: setiap klik memusatkan ulang bidang, setiap perbesaran memperlihatkan lingkungan matematis yang lebih kecil, dan penggeser iterasi memungkinkan Anda memutuskan seberapa dalam kalkulator harus menguji batas sebelum mewarnai titik sebagai stabil atau meloloskan diri.',
    },
    {
      type: 'title',
      text: 'Cara Membaca Gambar Mandelbrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bentuk gelap di tengah menandai titik-titik yang orbitnya tetap terbatas dalam anggaran iterasi saat ini. Bagian luar yang berwarna adalah peta waktu pelarian. Titik yang diwarnai dekat dengan himpunan dapat bertahan ratusan iterasi sebelum magnitudonya melebihi radius pelarian, sementara titik yang jauh meloloskan diri hampir seketika. Geometri yang paling menarik secara ilmiah biasanya tidak berada di dalam bentuk yang terisi, melainkan di sepanjang batas di mana perilaku terbatas dan tidak terbatas saling berjalin.',
    },
    {
      type: 'table',
      headers: ['Kontrol', 'Apa yang diubah', 'Kapan meningkatkannya'],
      rows: [
        ['<strong>Kedalaman iterasi</strong>', 'Berapa langkah rekurensi yang diuji untuk setiap piksel.', 'Gunakan nilai lebih tinggi setelah memperbesar filamen tipis atau salinan miniatur.'],
        ['<strong>Kontras pelarian</strong>', 'Seberapa kuat nilai pelarian yang halus dipisahkan menjadi pita yang terlihat.', 'Naikkan saat gambar terlihat datar; turunkan saat warna terlalu keras.'],
        ['<strong>Palet</strong>', 'Pemetaan warna yang diterapkan pada titik di luar.', 'Ganti palet untuk mengungkap struktur yang mungkin tersembunyi oleh satu bidang warna.'],
      ],
    },
    {
      type: 'title',
      text: 'Kesamaan Diri dan Minibrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Salah satu alasan himpunan Mandelbrot sangat terkenal adalah kuasi-kesamaan dirinya. Saat Anda memperbesar antena, spiral, dan lembah, Anda berulang kali menemukan pulau kecil mirip Mandelbrot yang sering disebut minibrot. Salinan ini tidak sekadar dekoratif. Susunannya mencerminkan dinamika peta kuadratik, termasuk bulb periodik, pola bifurkasi, dan wilayah di mana orbit tetap terperangkap untuk waktu yang lama sebelum meloloskan diri.',
    },
    {
      type: 'title',
      text: 'Mengapa Iterasi Lebih Tinggi Penting pada Perbesaran Dalam',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pada tampilan himpunan penuh, batas iterasi yang sederhana memberikan gambar yang dapat dikenali. Namun pada perbesaran yang lebih dalam, banyak titik batas membutuhkan waktu lebih lama untuk mengungkapkan apakah mereka meloloskan diri. Jika batas iterasi terlalu rendah, struktur halus dapat terlihat padat atau keruh secara salah. Meningkatkan jumlah iterasi memperbaiki klasifikasi batas dan memungkinkan kalkulator menyelesaikan sulur sempit, lengan spiral, dan bulb satelit dengan lebih percaya diri.',
    },
    {
      type: 'title',
      text: 'Makna Matematis dari Koordinat Kompleks',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pembacaan koordinat menunjukkan pusat area pandang saat ini sebagai bilangan kompleks c = a + bi. Sumbu horizontal adalah bagian real dan sumbu vertikal adalah bagian imajiner. Mengklik kanvas memilih koordinat kompleks baru, lalu memperbesar jendela yang terlihat di sekitarnya. Ini membuat alat ini berguna untuk mempelajari bagaimana wilayah visual fraktal berhubungan dengan lokasi yang tepat di bidang kompleks.',
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
