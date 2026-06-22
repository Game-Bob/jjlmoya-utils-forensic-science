import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-masalah-tiga-benda';
const title = 'Simulator Masalah Tiga Benda';
const description = 'Simulasikan tiga benda gravitasi dalam bidang dua dimensi dengan massa yang dapat diedit, vektor kecepatan, jejak, serta prasetel stabil atau kacau.';

const howTo = [
  {
    name: 'Pilih prasetel orbital',
    text: 'Mulailah dengan orbit angka delapan untuk tolok ukur yang stabil, segitiga Lagrange untuk keseimbangan berotasi, atau prasetel ketapel untuk pertemuan yang tampak kacau.',
  },
  {
    name: 'Sesuaikan massa dan vektor kecepatan',
    text: 'Gunakan penggeser untuk setiap benda guna mengubah massa dan komponen kecepatan awal. Perubahan kecil dapat mempertahankan pola, mengubahnya, atau menghancurkannya sepenuhnya.',
  },
  {
    name: 'Baca diagnostik',
    text: 'Pantau energi total, jarak pisah terdekat dan terjauh, serta pusat massa untuk memahami apakah orbit numerik tetap terikat atau mulai menjauh.',
  },
];

const faq = [
  {
    question: 'Apa itu masalah tiga benda?',
    answer: 'Masalah tiga benda menanyakan bagaimana tiga massa bergerak ketika setiap benda menarik dua benda lainnya secara gravitasi. Tidak seperti masalah dua benda, tidak ada persamaan bentuk tertutup umum yang menyelesaikan setiap kemungkinan konfigurasi, sehingga sebagian besar kasus praktis dieksplorasi dengan integrasi numerik.',
  },
  {
    question: 'Mengapa orbit tiga benda tidak stabil?',
    answer: 'Banyak sistem tiga benda sensitif terhadap kondisi awal. Perubahan kecil pada kecepatan, posisi, atau massa mengubah waktu pertemuan dekat, dan pertemuan tersebut dapat saling bertukar energi secara dramatis. Hasilnya adalah sistem yang mungkin tetap terikat untuk sementara waktu dan kemudian tiba-tiba mengeluarkan satu benda.',
  },
  {
    question: 'Apa yang ditunjukkan oleh prasetel angka delapan?',
    answer: 'Prasetel angka delapan adalah solusi periodik terkenal untuk tiga massa yang sama. Setiap benda mengikuti jalur yang sama dengan pergeseran fase, menunjukkan bahwa masalah tiga benda dapat mengandung pulau-pulau stabil yang elegan di dalam lanskap kacau yang jauh lebih besar.',
  },
  {
    question: 'Apakah ini simulator astronomi yang akurat secara fisik?',
    answer: 'Alat ini menggunakan model Newton yang dilunakkan dan langkah Verlet kecepatan simplektik sehingga gerakannya terasa setia dan stabil untuk pembelajaran. Alat ini dirancang untuk eksplorasi interaktif daripada prediksi ephemeris berpresisi tinggi.',
  },
  {
    question: 'Bagaimana cara menafsirkan energi total?',
    answer: 'Energi total negatif biasanya menunjukkan sistem yang terikat, sementara energi yang mendekati nol dapat memudahkan pelepasan. Dalam simulasi numerik, penyimpangan energi yang besar juga memperingatkan bahwa langkah waktu atau geometri pertemuan membebani integrator.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Laboratorium kekacauan gravitasi',
    canvasLabel: 'Kanvas orbit tiga benda interaktif dua dimensi',
    presetsLabel: 'Prasetel orbital',
    figureEightPreset: 'Angka delapan',
    lagrangePreset: 'Segitiga Lagrange',
    slingshotPreset: 'Ketapel',
    pauseButton: 'Jeda',
    playButton: 'Putar',
    resetButton: 'Setel ulang',
    speedLabel: 'Kecepatan simulasi',
    trailLabel: 'Panjang jejak',
    massLabel: 'Massa',
    velocityXLabel: 'Kecepatan X',
    velocityYLabel: 'Kecepatan Y',
    energyLabel: 'Energi total',
    separationLabel: 'Rentang pisah',
    centerMassLabel: 'Pusat massa',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator Masalah Tiga Benda Interaktif untuk Kekacauan Orbital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Masalah tiga benda adalah salah satu demonstrasi paling jelas bahwa hukum sederhana dapat menghasilkan gerakan yang rumit. Gravitasi Newton memberikan aturan gaya yang ringkas, tetapi begitu benda masif ketiga bergabung ke dalam sistem, setiap orbit terus-menerus membentuk kembali dua orbit lainnya. Simulator ini memungkinkan Anda bereksperimen langsung dengan ketidakstabilan tersebut: pilih konfigurasi yang dikenal, sesuaikan massa dan vektor kecepatan, dan amati apakah benda-benda tersebut membentuk orbit berulang, segitiga berotasi, atau peristiwa hamburan kacau.',
    },
    {
      type: 'title',
      text: 'Apa yang Ditunjukkan oleh Prasetel',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Prasetel', 'Ide fisika', 'Apa yang diamati'],
      rows: [
        ['<strong>Angka delapan</strong>', 'Solusi periodik massa sama di mana ketiga benda berbagi lingkaran yang sama.', 'Orbit tetap terorganisir hanya ketika simetri dan keseimbangan kecepatan dipertahankan dengan hati-hati.'],
        ['<strong>Segitiga Lagrange</strong>', 'Tiga benda menempati segitiga sama sisi yang berputar di sekitar pusat massa.', 'Keseimbangan massa dan kecepatan tangensial mencegah segitiga runtuh ke dalam.'],
        ['<strong>Ketapel</strong>', 'Pertemuan dekat mentransfer energi antar benda.', 'Satu benda dapat memperoleh kecepatan sementara benda lain menjadi lebih terikat, mengungkapkan mengapa ejeksi kacau terjadi.'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Perubahan Kecil Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dalam orbit dua benda, pusat massa dan elips orbital memberikan gambaran geometris yang stabil. Dalam sistem tiga benda, lintasan dekat bertindak seperti negosiasi gravitasi: sebuah benda dapat meminjam energi orbital, mengubah arah secara tajam, atau mengubah lingkaran teratur menjadi peristiwa hamburan. Sensitivitas itulah mengapa sistem astrofisika nyata seperti bintang tiga, pertemuan planet-bulan, dan planetesimal tata surya awal sering memerlukan integrasi numerik daripada satu rumus sederhana.',
    },
    {
      type: 'title',
      text: 'Cara Menggunakan Diagnostik',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Energi total</strong> membantu Anda menilai apakah sistem terikat dan apakah integrasi numerik tetap stabil.',
        '<strong>Rentang pisah</strong> menunjukkan jarak pasangan terdekat dan terjauh, membuat hampir tabrakan dan ejeksi mudah dikenali.',
        '<strong>Pusat massa</strong> harus tetap relatif stabil ketika momentum awal seimbang; penyimpangan menunjukkan pengaturan yang sengaja asimetris atau vektor kecepatan yang diubah.',
        '<strong>Panjang jejak</strong> mengungkapkan struktur jangka panjang: jejak pendek menekankan interaksi saat ini, sementara jejak panjang mengekspos lingkaran berulang dan presesi orbital lambat.',
      ],
    },
    {
      type: 'title',
      text: 'Model Numerik yang Digunakan dalam Alat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulator ini menggunakan tarikan kuadrat terbalik Newton dengan istilah pelunakan kecil yang mencegah ledakan visual selama lintasan yang sangat dekat. Gerakan dimajukan dengan langkah Verlet kecepatan, pilihan umum untuk demonstrasi orbital karena menangani perilaku energi lebih baik daripada pembaruan Euler sederhana. Hasilnya adalah model pendidikan responsif yang membuat perilaku kualitatif masalah tiga benda terlihat tanpa berpura-pura menggantikan perangkat lunak mekanika langit profesional.',
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
