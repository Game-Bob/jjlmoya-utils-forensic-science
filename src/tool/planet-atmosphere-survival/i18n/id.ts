const slug = 'kalkulator-kelangsungan-hidup-atmosfer-planet';
const title = 'Kalkulator Kelangsungan Hidup di Atmosfer Planet';
const description = 'Berapa lama Anda bisa bertahan tanpa pakaian antariksa di Mars, Venus, Titan, Jupiter, atau Everest? Kalkulator interaktif ini memperkirakan waktu bertahan hidup manusia tanpa perlindungan berdasarkan tekanan, suhu, oksigen, karbon dioksida, toksisitas, dan bahaya angin.';

const howTo = [
  {
    name: 'Pilih tujuan untuk memuat data atmosfer nyata',
    text: 'Pilih preset Mars, Venus, Titan, Jupiter, atau puncak Everest untuk langsung mengatur tekanan, suhu, campuran gas, dan nilai angin yang realistis untuk lingkungan tersebut.',
  },
  {
    name: 'Sesuaikan kondisi untuk menjelajahi titik kritis',
    text: 'Gerakkan penggeser tekanan, suhu, oksigen, dan karbon dioksida untuk melihat bahaya mana yang menjadi lethal pertama. Perubahan kecil dapat menggeser faktor pembatas sepenuhnya.',
  },
  {
    name: 'Baca jam bertahan hidup dan tautan terlemah',
    text: 'Timer menunjukkan perkiraan waktu sebelum stres biologis parah terjadi. Label faktor pembatas memberi tahu Anda secara tepat bahaya mana yang merupakan ancaman paling mendesak saat ini.',
  },
  {
    name: 'Bandingkan bahaya secara visual di peta risiko',
    text: 'Jari-jari radial dan grafik linimasa menunjukkan bagaimana tekanan, panas, dingin, hipoksia, toksisitas, dan angin masing-masing berkontribusi terhadap total risiko dari waktu ke waktu.',
  },
];

const faq = [
  {
    question: 'Bisakah manusia bertahan hidup di Mars tanpa pakaian antariksa?',
    answer: 'Tidak. Mars memiliki tekanan yang sangat rendah (kurang dari 1% Bumi), hampir tidak ada oksigen yang bisa dihirup, dan atmosfer yang sebagian besar terdiri dari karbon dioksida. Kehilangan kesadaran akan terjadi dalam hitungan detik dan cedera parah dalam hitungan menit tanpa dukungan tekanan dan oksigen.',
  },
  {
    question: 'Mengapa tekanan atmosfer begitu kritis bagi kelangsungan hidup manusia?',
    answer: 'Di bawah batas Armstrong (sekitar 6,3 kPa), air dapat mendidih pada suhu tubuh. Tekanan rendah juga mencegah oksigen masuk ke aliran darah bahkan jika udaranya 100% oksigen. Itulah sebabnya tekanan adalah salah satu bahaya mematikan yang paling cepat.',
  },
  {
    question: 'Planet mana yang memiliki atmosfer paling bisa dihuni?',
    answer: 'Di antara tujuan Tata Surya, Bumi dataran tinggi (Everest) adalah yang paling bisa dihuni, meskipun masih berbahaya tanpa aklimatisasi. Titan adalah yang paling tidak bermusuhan di antara pilihan lainnya karena tekanannya dapat dikelola, tetapi tidak memiliki oksigen dan sangat dingin secara kriogenik. Tidak ada planet atau bulan selain Bumi yang memiliki atmosfer yang dapat dihirup.',
  },
  {
    question: 'Apakah Venus lebih buruk karena panas atau tekanan?',
    answer: 'Keduanya ekstrem di permukaan. Venus memiliki tekanan yang menghancurkan (92 kali Bumi) dan suhu permukaan yang lebih panas dari oven dapur. Bahaya-bahaya ini bekerja bersama sehingga alat ini menandai keduanya sebagai ancaman dominan langsung.',
  },
  {
    question: 'Mengapa Titan memiliki perkiraan bertahan hidup yang lebih lama daripada Mars?',
    answer: 'Titan memiliki atmosfer yang padat, sehingga tekanan itu sendiri bukanlah masalah langsung. Waktu bertahan hidup dibatasi oleh dingin yang ekstrem (sekitar -180 derajat C) dan tidak adanya oksigen sama sekali. Mars gagal karena tekanan, Titan gagal karena suhu.',
  },
  {
    question: 'Apa penyebab utama kematian di luar angkasa tanpa pakaian antariksa?',
    answer: 'Pembunuh tercepat adalah paparan vakum (kehilangan tekanan yang menyebabkan ebullisme dan hipoksia dalam hitungan detik), diikuti oleh suhu ekstrem, komposisi gas beracun, dan kehilangan panas akibat angin. Kalkulator melacak semua enam kategori bahaya.',
  },
  {
    question: 'Apakah alat ini cocok untuk perencanaan misi luar angkasa?',
    answer: 'Tidak. Ini adalah model edukasi yang menggunakan ambang biologis yang disederhanakan. Analisis dekompresi, hipoksia, gas beracun, cedera termal, dan risiko misi yang sebenarnya memerlukan evaluasi ahli medis dan teknik untuk keselamatan.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Peta risiko atmosfer',
    timeline: 'Linimasa risiko biologis',
    controls: 'Kontrol atmosfer',
    destination: 'Tujuan',
    pressure: 'Tekanan',
    temperature: 'Suhu',
    oxygen: 'Oksigen',
    co2: 'Karbon dioksida',
    limitingFactor: 'Faktor pembatas',
    verdict: 'Vonis',
    exposureSummary: 'Ringkasan paparan',
    atmosphericModel: 'Model paparan atmosfer',
    survivalEnvelope: 'amplop kelangsungan hidup',
    survival: 'Kelangsungan hidup',
    mode: 'Mode',
    metric: 'Metrik',
    imperial: 'Imperial',
    unitSystem: 'Sistem unit',
    vitalStress: 'stres vital',
    timeLabel: 'waktu',
    estimatedSurvival: 'perkiraan kelangsungan hidup',
    hazardPressure: 'Tekanan',
    hazardTemperature: 'Suhu',
    hazardOxygen: 'Oksigen',
    hazardToxicity: 'Toksisitas',
    hazardWind: 'Angin',
    presetMars: 'Mars',
    presetVenus: 'Permukaan Venus',
    presetTitan: 'Titan',
    presetJupiter: 'Lapisan awan Jupiter',
    presetEverest: 'Bumi, puncak Everest',
    noteMars: 'Hampir vakum, dingin ekstrem, dan hampir tidak ada oksigen.',
    noteVenus: 'Tekanan menghancurkan dan panas oven mendominasi seketika.',
    noteTitan: 'Udara nitrogen padat tetapi dingin mematikan dan tanpa oksigen.',
    noteJupiter: 'Atmosfer kaya hidrogen, dingin parah, dan angin kencang.',
    noteEverest: 'Bertahan untuk pendaki terlatih, tetapi hipoksia dan dingin serius.',
    verdictSeconds: 'Detik',
    verdictMinutes: 'Menit',
    verdictHours: 'Jam',
    verdictExtended: 'Risiko paparan berkepanjangan',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Kelangsungan Hidup di Atmosfer Planet: Berapa Lama Anda Bisa Bertahan Tanpa Pakaian Antariksa di Mars, Venus, Titan, atau Jupiter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda tiba-tiba terpapar atmosfer planet lain tanpa pakaian antariksa, berapa lama Anda akan bertahan? Kalkulator ini memperkirakan waktu bertahan hidup manusia tanpa perlindungan di Mars, Venus, Titan, Jupiter, dan Everest dengan mensimulasikan enam bahaya: tekanan total, ketersediaan oksigen, suhu, konsentrasi karbon dioksida, kimia beracun, dan tekanan angin. Ini menjawab pertanyaan yang paling sering diajukan oleh penggemar luar angkasa dan pelajar: planet mana yang paling cepat membunuh Anda, bahaya mana yang merupakan ancaman nyata, dan apa yang Anda butuhkan untuk bertahan hidup.',
    },
    {
      type: 'paragraph',
      html: 'Hasilnya adalah perkiraan edukasi, bukan angka perencanaan misi. Ini dirancang untuk membantu membandingkan mengapa dunia yang berbeda berbahaya dengan cara yang sangat berbeda. Mars gagal karena tekanan dan hipoksia dalam hitungan detik. Venus menggabungkan tekanan yang menghancurkan dengan panas oven. Titan bersifat kriogenik dan tidak memiliki oksigen. Dek awan raksasa gas menambahkan komposisi beracun dan angin supersonik. Setiap lingkungan mengajarkan sesuatu yang berbeda tentang apa yang membuat Bumi layak huni secara unik.',
    },
    {
      type: 'title',
      text: 'Planet mana yang memiliki atmosfer paling bisa dihuni?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Di antara tujuan dalam kalkulator ini, lingkungan dataran tinggi Bumi (seperti puncak Everest) adalah yang paling bisa dihuni, meskipun masih berbahaya tanpa persiapan. Di antara planet lain, Titan memiliki tekanan yang paling toleran tetapi gagal dalam suhu dan oksigen. Tidak ada tujuan selain Bumi yang saat ini menawarkan atmosfer yang dapat dihirup. Kalkulator membantu Anda melihat dengan tepat mengapa setiap dunia gagal dan bahaya mana yang melampaui ambang kritis terlebih dahulu.',
    },
    {
      type: 'title',
      text: 'Bagaimana setiap bahaya mempengaruhi tubuh',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tekanan (rendah):</strong> di bawah 6,3 kPa cairan tubuh dapat mendidih (ebullisme). Bahkan di atas itu, tekanan rendah mencegah penyerapan oksigen. Ini adalah pembunuh tercepat di lingkungan hampir vakum.',
        '<strong>Tekanan (tinggi):</strong> tekanan ekstrem menekan gas pernapasan, meningkatkan risiko narkosis nitrogen, dan dapat merusak paru-paru serta sinus secara mekanis.',
        '<strong>Tekanan parsial oksigen:</strong> oksigen yang dapat dihirup tergantung pada persentase gas dan tekanan total. Atmosfer tipis dapat memiliki 21% oksigen namun tetap menyebabkan hipoksia.',
        '<strong>Suhu (panas):</strong> di atas sekitar 60 derajat C, denaturasi protein dan kegagalan organ dimulai dengan cepat. Suhu permukaan Venus melebihi 460 derajat C.',
        '<strong>Suhu (dingin):</strong> di bawah titik beku, radang dingin dan hipotermia mulai terjadi. Pada suhu kriogenik seperti Titan -180 derajat C, pembekuan jaringan hampir seketika.',
        '<strong>Toksisitas karbon dioksida:</strong> CO2 di atas sekitar 5% menyebabkan pusing, sakit kepala, dan kehilangan kesadaran. Banyak atmosfer planet sebagian besar adalah CO2.',
        '<strong>Kimia beracun:</strong> senyawa belerang, amonia, metana, dan hidrogen dapat bersifat korosif, menyebabkan sesak napas, atau berbahaya secara kimia.',
        '<strong>Angin:</strong> angin kencang mempercepat kehilangan panas melalui konveksi, menyebabkan angin dingin, menerbangkan puing-puing, dan dapat secara fisik membuat seseorang tidak stabil.',
      ],
    },
    {
      type: 'title',
      text: 'Mars: Mengapa Tekanan Rendah Membunuh Sebelum Yang Lain',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mars memiliki tekanan permukaan sekitar 0,6 kPa, jauh di bawah batas Armstrong 6,3 kPa di mana air dapat mendidih pada suhu tubuh. Paparan tanpa perlindungan akan menyebabkan ebullisme, hipoksia cepat, dan kehilangan kesadaran dalam waktu kurang dari 15 detik. Bahkan jika dingin (rata-rata -60 derajat C) dan atmosfer yang kaya karbon dioksida diperhitungkan, tekanan dan kekurangan oksigen mendominasi linimasa. Pakaian tekanan yang berfungsi dan pasokan oksigen adalah minimum mutlak untuk bertahan hidup di Mars.',
    },
    {
      type: 'title',
      text: 'Venus: Tekanan Ekstrem dan Panas Bekerja Bersama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Permukaan Venus memiliki tekanan 92 atmosfer Bumi (sekitar 9,3 MPa, setara dengan berada 900 meter di bawah air) dan suhu permukaan 462 derajat C. Atmosfernya 96% karbon dioksida dengan awan asam sulfat. Bahaya-bahaya ini bekerja secara simultan daripada berurutan: tekanan menghancurkan, panas memasak, dan CO2 meracuni. Dalam kalkulator ini, Venus adalah satu-satunya tujuan di mana beberapa bahaya melampaui ambang mematikan pada saat yang hampir bersamaan.',
    },
    {
      type: 'title',
      text: 'Titan: Tekanan Paling Ramah di Tata Surya di Luar Bumi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bulan Saturnus, Titan, tidak biasa karena tekanan permukaannya (sekitar 147 kPa, atau 1,45 kali Bumi) sebenarnya berada dalam kisaran yang dapat ditoleransi manusia. Tidak diperlukan pakaian tekanan untuk variabel itu saja. Namun, Titan pada dasarnya tidak memiliki oksigen, suhu permukaan -179 derajat C, dan atmosfer metana-nitrogen. Kalkulator menunjukkan tekanan dapat dikelola, tetapi suhu dan kekurangan oksigen mendominasi segera. Titan adalah pengingat bahwa kelangsungan hidup tergantung pada seluruh profil bahaya, bukan hanya satu pengukuran.',
    },
    {
      type: 'title',
      text: 'Cara Menginterpretasikan Timer Bertahan Hidup dan Peta Risiko',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Timer bertahan hidup memperkirakan interval sebelum stres biologis parah terjadi pada seseorang yang tidak dilindungi. Label faktor pembatas mengidentifikasi bahaya mana yang melampaui ambang kritis terlebih dahulu. Jari-jari bahaya radial menunjukkan tingkat keparahan relatif dari masing-masing enam bahaya yang dilacak, dan grafik linimasa menampilkan bagaimana risiko gabungan terakumulasi selama jendela paparan. Alat visual ini membantu Anda melihat sekilas mengapa lingkungan tertentu berbahaya dan sistem perlindungan mana yang paling penting.',
    },
    {
      type: 'table',
      headers: ['Tujuan', 'Bahaya mematikan', 'Ancaman tercepat', 'Apa yang harus diperbaiki pakaian antariksa'],
      rows: [
        ['Mars', 'Hampir vakum, hipoksia, dingin, CO2', 'Tekanan < batas Armstrong', 'Pakaian tekanan, oksigen, isolasi termal'],
        ['Permukaan Venus', 'Tekanan menghancurkan, panas 462 derajat C, CO2, asam sulfat', 'Tekanan dan panas secara simultan', 'Pendinginan berat, lambung tekanan, alat pernapasan'],
        ['Titan', 'Tidak ada oksigen, dingin -179 derajat C, metana', 'Suhu dan hipoksia', 'Pasokan oksigen, perlindungan termal ekstrem'],
        ['Dek awan Jupiter', 'Tidak ada oksigen, kaya hidrogen, dingin, angin kencang', 'Hipoksia dan kurangnya gas yang dapat dihirup', 'Sistem pernapasan tertutup, kontrol termal'],
        ['Puncak Everest', 'Hipoksia, dingin, angin', 'Tekanan parsial oksigen terlalu rendah', 'Masker oksigen, perlengkapan cuaca dingin, aklimatisasi'],
      ],
    },
    {
      type: 'title',
      text: 'Apa yang Dibutuhkan untuk Bertahan Hidup Tanpa Pakaian Antariksa?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Secara realistis, tidak ada benda Tata Surya yang dikenal selain Bumi yang memungkinkan kelangsungan hidup manusia tanpa perlindungan lebih dari beberapa menit, dan sebagian besar membunuh dalam hitungan detik. Nilai kalkulator ini bukan dalam menemukan planet yang aman, tetapi dalam memahami alasan spesifik mengapa setiap lingkungan tidak bersahabat. Pengetahuan ini memandu pendidikan sains planet, desain habitat luar angkasa, prioritas pelatihan astronot, dan pencarian exoplanet yang berpotensi layak huni di mana atmosfer mungkin benar-benar mendukung kehidupan.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gunakan untuk belajar:</strong> lihat bagaimana mengubah satu variabel, seperti menggandakan tekanan di Mars, mengubah jendela kelangsungan hidup.',
        '<strong>Gunakan untuk perbandingan:</strong> kontraskan mengapa Titan memberikan lebih banyak waktu daripada Venus meskipun keduanya tidak dapat dihuni.',
        '<strong>Gunakan untuk diskusi:</strong> jelajahi apa yang dibutuhkan atmosfer terraformed untuk mencapai kondisi yang dapat dihirup.',
        '<strong>Jangan gunakan untuk keputusan nyata:</strong> kalkulator menggunakan ambang yang disederhanakan. Perencanaan darurat memerlukan kedokteran aerospace profesional.',
      ],
    },
    {
      type: 'title',
      text: 'Keterbatasan Penting dan Tujuan Edukasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kelangsungan hidup nyata tergantung pada kesehatan individu, pakaian, tingkat aktivitas, kelembaban, radiasi matahari, riwayat dekompresi, campuran gas pernapasan, waktu penyelamatan, dan banyak variabel lainnya. Data atmosfer planet juga bervariasi berdasarkan ketinggian, musim, dan sumber pengukuran. Alat ini menggunakan ambang biologis yang disederhanakan dan data lingkungan yang representatif untuk pendidikan sains. Ini dirancang untuk membantu siswa, guru, penggemar luar angkasa, dan penulis sains memahami kelayakhunian planet, bukan untuk memandu operasi luar angkasa yang sebenarnya.',
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
