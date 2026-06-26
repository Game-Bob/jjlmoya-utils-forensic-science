import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-kromatografi-lapis-tipis-tlc-tinta';
const title = 'Simulator Kromatografi Lapis Tipis (TLC) Tinta Forensik';
const description = 'Simulasikan kromatografi lapis tipis tinta tulisan yang dicurigai, visualisasikan pergerakan batas pelarut, pisahkan pita warna pigmen, dan hitung nilai Rf yang tepat untuk setiap pigmen.';

const howTo = [
  {
    name: 'Pilih tinta yang dipertanyakan atau pena pembanding',
    text: 'Pilih tinta surat tebusan atau profil pena kandidat. Setiap tinta mengandung kumpulan komponen pewarna yang berbeda dengan polaritas dan afinitas fase diam yang berbeda.',
  },
  {
    name: 'Pilih fase gerak',
    text: 'Ubah sistem pelarut untuk melihat bagaimana polaritas pelarut mengubah pengembangan kapiler dan migrasi relatif dari setiap pita pewarna.',
  },
  {
    name: 'Kembangkan lempeng TLC',
    text: 'Pindahkan penggeser waktu pengembangan dan saksikan batas pelarut naik melalui lempeng sementara pita-pita yang terpisah muncul di atas garis asal.',
  },
  {
    name: 'Baca tabel Rf',
    text: 'Bandingkan jarak setiap pigmen dengan jarak batas pelarut. Simulator menghitung Rf sebagai jarak pigmen dibagi jarak batas pelarut.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Apa arti Rf dalam kromatografi lapis tipis?',
    answer: 'Rf is faktor retensi: jarak yang ditempuh oleh senyawa dibagi dengan jarak yang ditempuh oleh batas pelarut dari garis asal yang sama. Ini tidak memiliki satuan dan biasanya berkisar antara 0 hingga 1.',
  },
  {
    key: 'faq-2',
    question: 'Apakah TLC dapat membuktikan bahwa dua sampel tinta berasal dari pena yang sama?',
    answer: 'Tidak. TLC dapat menunjukkan apakah pola pewarna konsisten atau tidak konsisten, tetapi atribusi sumber memerlukan metode perbandingan yang divalidasi, kontrol, dokumentasi, dan interpretasi ahli.',
  },
  {
    key: 'faq-3',
    question: 'Mengapa mengubah pelarut mengubah pola pita?',
    answer: 'Pewarna membagi secara berbeda antara fase diam dan fase gerak. Pelarut dengan kecocokan polaritas yang lebih baik dapat membawa pewarna lebih jauh, meningkatkan nilai Rf-nya.',
  },
  {
    key: 'faq-4',
    question: 'Mengapa garis asal itu penting?',
    answer: 'Jarak batas pelarut dan jarak pigmen harus diukur dari garis asal. Mengukur dari bagian bawah lempeng menghasilkan nilai Rf yang salah.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Ruang kromatografi lapis tipis dengan lempeng pengembang',
    rulerAria: 'Penggaris milimeter virtual untuk mengukur batas pelarut dan pita pigmen',
    rulerMarks: '80,60,40,20,0',
    units: 'Sistem satuan',
    metric: 'Metrik',
    imperial: 'Imperial',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'menit',
    inkSample: 'Sampel tinta',
    ransomNote: 'Tinta surat tebusan yang dicurigai',
    bluePen: 'Pena bolpoin biru yang disita',
    blackPen: 'Pena bolpoin hitam yang disita',
    gelPen: 'Pena gel yang disita',
    solventSystem: 'Fase gerak',
    ethanolWater: 'Etanol / air',
    butanolAcetic: 'Butanol / asam asetat',
    isopropanolAmmonia: 'Isopropanol / amonia',
    developmentTime: 'Waktu pengembangan',
    frontDistance: 'Perjalanan pelarut',
    matchScore: 'Kemiripan pola',
    solventFront: 'Batas pelarut',
    originLine: 'Asal',
    pigment: 'Pita pigmen',
    pigmentCyanDye: 'pewarna sian',
    pigmentVioletDye: 'pewarna violet',
    pigmentGrayCarrier: 'pembawa abu-abu',
    pigmentNavyDye: 'pewarna biru tua',
    pigmentYellowDye: 'pewarna kuning',
    pigmentRedDye: 'pewarna merah',
    pigmentBlueDye: 'pewarna biru',
    pigmentDarkBinder: 'pengikat gelap',
    pigmentTealDye: 'pewarna teal',
    pigmentMagentaDye: 'pewarna magenta',
    pigmentGelBinder: 'pengikat gel',
    distance: 'Jarak',
    rfValue: 'Nilai Rf',
    disclaimer: 'Hanya simulasi pendidikan. Perbandingan tinta forensik memerlukan dokumen asli, metode laboratorium yang divalidasi, standar referensi, dan pemeriksa dokumen yang berkualifikasi.',
  },
  seo: [
    {
      type: 'title',
      text: 'Kromatografi Lapis Tipis untuk Perbandingan Tinta Forensik',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Simulator pengajaran',
      title: 'Apa yang simulator tinta TLC ini bantu Anda pahami',
      html: 'Alat ini menjelaskan bagaimana <strong>kromatografi lapis tipis tinta tulis</strong> dapat memisahkan garis tinta yang terlihat menjadi beberapa pita pewarna. Ini dirancang untuk siswa sains forensik, pelajar pemeriksaan dokumen, dan siapa saja yang mencoba memahami bagaimana nilai Rf dihitung dari lempeng TLC yang dikembangkan.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d pita / d pelarut', label: 'rumus faktor retensi', icon: 'mdi:division' },
        { value: '4', label: 'profil tinta dibandingkan', icon: 'mdi:pen' },
        { value: '3', label: 'fase gerak disimulasikan', icon: 'mdi:flask-outline' },
        { value: '2', label: 'pembacaan metrik dan imperial', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Daftar periksa pengukuran TLC yang benar',
      items: [
        'Tandai garis asal di atas permukaan pelarut sebelum pengembangan dimulai.',
        'Keluarkan lempeng sebelum pelarut mencapai tepi atas.',
        'Tandai batas pelarut segera karena dapat menguap atau menjadi sulit dilihat.',
        'Ukur perjalanan pigmen dan perjalanan pelarut dari garis asal yang sama.',
        'Laporkan nilai Rf beserta sistem pelarut, jenis lempeng, kondisi pengembangan, dan kontrol.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Apa yang Dapat Didukung TLC',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'TLC dapat menunjukkan apakah tinta yang dipertanyakan dan dikenal memiliki perilaku pemisahan pewarna yang serupa di bawah kondisi yang sama.',
          points: ['Perbandingan skrining', 'Visualisasi pola pewarna', 'Dokumentasi Rf', 'Pemilihan sampel untuk pengujian konfirmasi'],
        },
        {
          title: 'Apa yang Tidak Dapat Dibuktikan TLC Sendiri',
          icon: 'mdi:alert-circle-outline',
          description: 'TLC saja tidak dapat mengidentifikasi pena secara unik, menentukan tanggal dokumen, atau membuktikan kepenulisan.',
          points: ['Tidak ada atribusi sumber yang unik', 'Tidak ada identifikasi penulis', 'Tidak ada kesimpulan penuaan secara default', 'Bukan pengganti protokol yang divalidasi'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pertanyaan pengguna', 'Konsep TLC yang terlibat', 'Jawaban hati-hati'],
      rows: [
        ['Bagaimana cara menghitung Rf?', 'Jarak pewarna dibagi jarak batas pelarut.', 'Ukur keduanya dari garis asal, lalu bagi. Hasilnya tidak memiliki satuan.'],
        ['Mengapa tinta terpisah menjadi warna-warna?', 'Pewarna yang berbeda memiliki afinitas yang berbeda untuk fase diam dan fase gerak.', 'Satu goresan tulisan dapat berisi beberapa pewarna yang bermigrasi dengan kecepatan berbeda.'],
        ['Dapatkah dua pena memiliki pola TLC yang sama?', 'Ya, formulasi serupa dapat menghasilkan pola yang mirip.', 'Kemiripan mendukung konsistensi, bukan individualisasi ke satu pena.'],
        ['Mengapa Rf saya berubah?', 'Pelarut, lempeng, kelembapan, kejenuhan, suhu, dan ukuran bintik mempengaruhi migrasi.', 'Nilai Rf hanya dapat dibandingkan jika kondisi dikontrol dan didokumentasikan.'],
      ],
    },
    {
      type: 'title',
      text: 'Bagaimana Simulator Memodelkan Pemisahan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model memperlakukan pergerakan batas pelarut sebagai proses kenaikan kapiler yang melambat seiring waktu, sementara setiap pewarna menerima nilai Rf berdasarkan dua sifat yang disederhanakan: afinitasnya terhadap pelarut yang bergerak dan kecocokan polaritasnya dengan fase gerak yang dipilih. Ini sengaja bersifat edukatif daripada kimia tingkat instrumen, tetapi tetap mempertahankan hubungan inti yang perlu dipelajari pengguna: pelarut bergerak terlebih dahulu, pewarna membagi di antara fase-fase, dan Rf dihitung dari jarak perjalanan yang diukur.',
    },
    {
      type: 'paragraph',
      html: 'Kromatografi lapis tipis adalah teknik analitis yang diterima secara luas di laboratorium forensik karena kesederhanaan, kecepatan, dan efektivitas biayanya. Dalam konteks pemeriksaan dokumen, ini terutama digunakan untuk membandingkan komposisi pewarna dari berbagai sampel tinta. Ilmuwan forensik mengekstrak sampel kecil tinta dari dokumen yang dipertanyakan menggunakan neşter atau jarum berlubang, melarutkannya dalam pelarut yang sesuai seperti piridin atau metanol, and meneteskannya ke lempeng TLC bersama dengan standar tinta referensi.',
    },
    {
      type: 'paragraph',
      html: 'Setelah lempeng dikembangkan dalam ruang tertutup, komponen individu dari tinta memisah berdasarkan pembagian diferensial mereka antara fase diam silika gel dan fase gerak pelarut. Kromatogram yang dihasilkan memberikan sidik jari visual dari tinta, menampilkan pita warna yang berbeda pada ketinggian tertentu. Pemeriksa dokumen kemudian menghitung faktor retensi untuk setiap pita pewarna yang terlihat, membantu menentukan apakah tinta yang dipertanyakan secara kimiawi konsisten dengan alat tulis tersangka atau jika cocok dengan merek dan formula yang dikenal dalam basis data referensi tinta.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stationary phase', definition: 'Lapisan pada lempeng TLC, biasanya silika gel, yang berinteraksi dengan senyawa dan memperlambat pergerakannya.' },
        { term: 'Mobile phase', definition: 'Sistem pelarut yang naik melalui lempeng dan membawa komponen pewarna bersamanya.' },
        { term: 'Origin line', definition: 'Garis pensil tempat sampel tinta diterapkan sebelum pengembangan.' },
        { term: 'Solvent front', definition: 'Titik tertinggi yang dicapai oleh fase gerak sebelum lempeng dikeluarkan.' },
        { term: 'Rf value', definition: 'Faktor retensi: jarak perjalanan senyawa dibagi jarak perjalanan batas pelarut.' },
      ],
    },
    {
      type: 'tip',
      title: 'Tip interpretasi praktis',
      html: 'Dalam pekerjaan dokumen forensik, ketidakcocokan dapat sangat berguna karena dapat mengecualikan formulasi pena kandidat. Pola TLC yang cocok lebih lemah: ini menunjukkan sampel konsisten secara kimiawi di bawah kondisi tersebut, bukan berarti sampel tersebut pasti berasal dari pena yang sama.',
    },
    {
      type: 'proscons',
      title: 'Kekuatan dan batasan perbandingan tinta TLC',
      items: [
        { pro: 'Cepat, murah, dan intuitif secara visual untuk memisahkan pewarna tinta.', con: 'Biasanya merusak karena sampel kecil diambil dari dokumen.' },
        { pro: 'Nilai Rf menciptakan cara terstruktur untuk membandingkan sampel yang dicurigai dan diketahui.', con: 'Nilai Rf bergeser ketika pelarut, lempeng, kelembapan, dan kondisi pengembangan berubah.' },
        { pro: 'Berguna sebagai metode skrining sebelum analisis yang lebih canggih.', con: 'Tidak dapat membuat kesimpulan sumber pena yang unik tanpa bukti yang lebih luas.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Peringatan forensik',
      title: 'Jangan melebih lebihkan kromatografi tinta',
      html: 'Simulasi browser tidak dapat memeriksa kertas, usia tinta, kimia ekstraksi, kualitas lempeng, kontaminasi, atau konfirmasi instrumental. Gunakan untuk mempelajari logika pengukuran dan batasan interpretasi, lalu andalkan metode pemeriksaan dokumen forensik yang divalidasi untuk bukti nyata.',
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
