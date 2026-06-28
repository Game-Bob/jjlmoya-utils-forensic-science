import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'alat-analisis-asal-pola-bercak-darah';
const title = '3D Alat Analisis Asal Pola Bercak Darah';
const description = 'Modelkan bercak darah elips pada bidang vertikal, estimasi sudut benturan, dan visualisasikan proyeksi lintasan dalam adegan 3D interaktif.';

const howTo = [
  { name: 'Masukkan atau sesuaikan bercak', text: 'Gunakan tabel atau permukaan 2D untuk menentukan posisi, lebar, panjang, dan orientasi sumbu panjang dari setiap bercak.' },
  { name: 'Tinjau sudut benturan', text: 'Kalkulator memperkirakan sudut benturan dari rasio lebar-terhadap-panjang menggunakan hubungan arksinus.' },
  { name: 'Periksa konvergensi 3D', text: 'Putar viewport untuk membandingkan proyeksi lintasan dan estimasi bola titik asal.' },
  { name: 'Periksa ketidakpastian', text: 'Gunakan nilai sebaran sebagai indikator peringatan praktis: pemisahan garis yang lebar berarti titik asal yang dipetakan kurang stabil.' },
];

const faq = [
  { question: 'Apakah alat peramban dapat menentukan sumber pertumpahan darah yang sebenarnya?', answer: 'Tidak. Alat ini dapat mengajarkan dan menyaring hubungan geometris, tetapi kesimpulan kasus memerlukan metode tervalidasi, dokumentasi tempat kejadian perkara, kalibrasi skala, dan analisis pola bercak darah yang memenuhi syarat.' },
  { question: 'Mengapa sudut benturan dihitung dari lebar dan panjang?', answer: 'Untuk bercak elips yang ideal, sinus dari sudut benturan didekati dengan lebar dibagi panjang. Bercak nyata dapat terdistorsi oleh tekstur permukaan, aliran, transfer, atau kesalahan pengukuran.' },
  { question: 'Apa yang diwakili oleh bola titik asal 3D?', answer: 'Ini adalah estimasi konvergensi kuadrat terkecil di antara proyeksi garis lintasan, bukan sumber titik yang dijamin.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Metrik',
    imperial: 'Imperial',
    unitsLabel: 'Unit',
    addStain: 'Tambah bercak',
    reset: 'Atur Ulang',
    surface: 'Permukaan benturan',
    viewport3dLabel: 'Viewport lintasan 3D',
    stainLabel: 'Bercak',
    table: 'Pengukuran',
    origin: 'Estimasi asal',
    spread: 'Sebaran garis',
    confidence: 'Keyakinan',
    impact: 'Sudut benturan',
    high: 'Tinggi',
    medium: 'Sedang',
    low: 'Rendah',
    x: 'X',
    y: 'Y',
    width: 'Lebar',
    length: 'Panjang',
    rotation: 'Rotasi',
    remove: 'Hapus',
    cm: 'cm',
    inch: 'in',
    degree: 'derajat',
    rotateHint: 'Seret tampilan 3D untuk memutar rekonstruksi.',
    disclaimer: 'Hanya rekonstruksi pendidikan. Tafsirkan dengan pengukuran tempat kejadian yang divalidasi dan ketidakpastian yang didokumentasikan.',
  },
  seo: [
    { type: 'title', text: 'Cara Kerja 3D Alat Analisis Asal Pola Bercak Darah', level: 2 },
    { type: 'paragraph', html: 'Alat analisis asal pola bercak darah membantu pengguna menjelajahi salah satu pertanyaan geometris inti dalam analisis pola bercak darah: <strong>di mana dalam ruang sumber darah berada ketika tetesan menabrak permukaan?</strong> Alat ini memodelkan bercak sebagai elips pada bidang vertikal, menghitung sudut benturan dari setiap rasio lebar-ke-panjang, memproyeksikan lintasan ke belakang ke dalam adegan 3D, dan memperkirakan wilayah konvergensi praktis.' },
    { type: 'diagnostic', variant: 'warning', title: 'Peringatan forensik', html: 'Hasilnya adalah bantuan rekonstruksi, bukan kesimpulan kasus. Bercak nyata dapat dipengaruhi oleh tekstur target, bercak satelit, pembekuan, aliran, pembersihan, transfer, kesalahan perspektif, dan dokumentasi skala yang tidak lengkap.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(W/L)', label: 'Formula sudut benturan' },
      { value: '3+', label: 'Bercak independen yang disarankan' },
      { value: '3D', label: 'Ruang konvergensi lintasan' },
    ] },
    { type: 'title', text: 'Formula Sudut Benturan', level: 3 },
    { type: 'paragraph', html: 'Untuk bercak elips sederhana, sudut benturan biasanya didekati sebagai <strong>arcsin(lebar / panjang)</strong>. Bercak yang diukur dengan lebar 1 cm dan panjang 2 cm menghasilkan sudut benturan 30 derajat. Hubungan itu berguna karena mengubah tanda datar menjadi elevasi lintasan, tetapi dengan asumsi bercak yang diukur representatif dan tidak terdistorsi.' },
    { type: 'code', ariaLabel: 'Perhitungan sudut benturan', code: 'sudut benturan = arcsin(lebar bercak / panjang bercak)\ncontoh: arcsin(1 cm / 2 cm) = 30 derajat' },
    { type: 'paragraph', html: 'Ini adalah niat pencarian umum di balik kueri seperti <em>kalkulator sudut benturan bercak darah</em>, <em>rumus sudut benturan cipratan darah</em>, dan <em>cara menghitung lintasan bercak darah</em>. Poin pentingnya adalah rumus tersebut hanya menjawab satu bagian dari rekonstruksi. Rumus ini memperkirakan elevasi perjalanan relatif terhadap permukaan target; tidak dengan sendirinya mengidentifikasi sumber, mekanisme, senjata, atau urutan kejadian.' },
    { type: 'title', text: 'Cara Mengukur Bercak Sebelum Memasukkan Data', level: 3 },
    { type: 'paragraph', html: 'Input yang paling berguna berasal dari foto tegak lurus terkalibrasi atau pengukuran tempat kejadian langsung. Ukur badan elips utama dari bercak, bukan satelit, ekor, tanda aliran, atau bercak sekunder. Lebar harus diambil di sepanjang sumbu pendek dan panjang di sepanjang sumbu panjang. Rotasi harus mengikuti arah sumbu panjang pada bidang target. Kesalahan kecil dalam panjang, lebar, atau orientasi dapat menggeser proyeksi lintasan dalam jumlah besar setelah diperluas ke ruang 3D.' },
    { type: 'table', headers: ['Kualitas pengukuran', 'Kemungkinan efek', 'Tanggapan praktis'], rows: [
      ['Sumbu panjang jelas', 'Rotasi lebih andal', 'Gunakan sumbu panjang yang terlihat dan dokumentasikan metode orientasi.'],
      ['Lebar atau panjang terdistorsi', 'Sudut benturan mungkin bias', 'Tandai ketidakpastian dan bandingkan dengan bercak tetangga.'],
      ['Sedikit bercak yang konvergen', 'Estimasi asal menjadi tidak stabil', 'Tambahkan bercak independen sebelum menafsirkan asal 3D.'],
      ['Skala hilang', 'Semua jarak menjadi ilustrasi saja', 'Jangan melaporkan koordinat asal dunia nyata tanpa kalibrasi.'],
    ] },
    { type: 'title', text: 'Membaca Konvergensi 3D', level: 3 },
    { type: 'paragraph', html: 'Bola asal dalam alat ini dihitung sebagai titik yang terletak paling dekat dengan semua proyeksi garis lintasan. Ketika garis lewat di dekat satu sama lain, nilai sebaran kecil dan keyakinan meningkat. Ketika garis menyimpang, bola masih muncul, tetapi harus dibaca sebagai kompromi kuadrat terkecil yang lemah daripada sumber yang tepat.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Area konvergensi', description: 'Estimasi dua dimensi pada bidang target, sering digunakan untuk melihat di mana arah sumbu panjang bertemu jika dilihat dari depan.', points: ['Berguna untuk penyaringan tahap pertama', 'Tidak mewakili tinggi vertikal dengan sendirinya'] },
      { title: 'Area atau volume asal', description: 'Estimasi tiga dimensi yang menggabungkan arah pada bidang dengan sudut benturan untuk memproyeksikan lintasan ke dalam ruang.', highlight: true, points: ['Menjelaskan kemungkinan tinggi sumber', 'Sensitif terhadap ketidakpastian pengukuran dan sudut'] },
    ] },
    { type: 'paragraph', html: 'Pengguna sering mencari <em>kalkulator titik asal cipratan darah</em> mengharapkan satu koordinat tepat. Dalam praktiknya, penafsiran yang baik lebih hati-hati. Titik asal lebih baik dipahami sebagai wilayah yang didukung oleh beberapa lintasan. Jika garis yang dipetakan membentuk bundel yang rapat, modelnya lebih koheren. Jika mereka melewati volume yang luas, rekonstruksi memberi tahu Anda bahwa pengukuran, pemilihan bercak, atau asumsi memerlukan peninjauan.' },
    { type: 'title', text: 'Alasan Umum Lintasan Tidak Bertemu', level: 3 },
    { type: 'proscons', title: 'Input kuat vs input lemah', items: [
      { pro: 'Beberapa bercak elips yang terbentuk dengan baik dengan sumbu panjang yang jelas', con: 'Hanya satu atau dua bercak, atau bercak yang dipilih karena tampaknya sesuai dengan teori' },
      { pro: 'Pengukuran terkalibrasi yang diambil tegak lurus terhadap permukaan benturan', con: 'Foto miring, skala tidak diketahui, atau tangkapan layar yang disalin' },
      { pro: 'Bercak independen dari mekanisme kejadian yang sama', con: 'Campuran tetesan pasif, bercak transfer, cipratan ayunan, aliran, atau pola benturan sekunder' },
    ] },
    { type: 'paragraph', html: 'Konvergensi yang buruk tidak secara otomatis berarti alat tersebut salah. Ini mungkin berarti bercak tidak termasuk dalam pola yang sama, foto terdistorsi perspektif, sumbu panjang salah dibaca, bercak bukan elips yang bersih, atau kejadian fisik lebih kompleks daripada model sumber titik sederhana. Itu adalah informasi yang berharga. Alat rekonstruksi harus mengekspos ketidaksepakatan alih-alih menyembunyikannya di balik angka yang tampak yakin.' },
    { type: 'title', text: 'Kegunaan Alat Ini', level: 3 },
    { type: 'list', items: [
      '<strong>Gunakan beberapa bercak:</strong> tiga atau lebih bercak independen memberikan estimasi konvergensi yang lebih bermakna.',
      '<strong>Perhatikan sebaran:</strong> sebaran yang tinggi memperingatkan bahwa garis-garis tersebut tidak sesuai erat dalam 3D.',
      '<strong>Pertahankan skala:</strong> nilai sentimeter atau inci harus berasal dari foto terkalibrasi atau pengukuran adegan.',
      '<strong>Pisahkan pengajaran dari pelaporan:</strong> visualisasi ini paling baik untuk pendidikan, perencanaan, dan penjelasan sebelum peninjauan formal.',
    ] },
    { type: 'card', title: 'Alur kerja terbaik', html: 'Mulailah dengan memplot sekumpulan kecil bercak berkualitas tinggi. Periksa apakah arah sumbu panjang 2D masuk akal secara visual. Kemudian periksa lintasan 3D, perhatikan sebaran, dan ubah satu pengukuran pada satu waktu untuk melihat bercak mana yang mendorong rekonstruksi. Pemeriksaan sensitivitas itu sering kali lebih berguna daripada koordinat asal mentah.' },
    { type: 'title', text: 'Kapan Tidak Mengandalkan Estimasi Asal Bercak Darah', level: 3 },
    { type: 'paragraph', html: 'Jangan mengandalkan estimasi asal yang sederhana ketika bercak sangat terdistorsi, permukaan target melengkung atau tidak beraturan, polanya mencakup transfer atau darah yang dikeluarkan karena bernapas, permukaan dipindahkan, atau tempat kejadian tidak memiliki skala yang andal. Peringatan yang sama berlaku ketika bercak berasal dari mekanisme yang berbeda atau momen yang berbeda dalam kejadian. Visualisasi 3D yang tampak bersih masih bisa menyesatkan jika pola input tidak cocok untuk rekonstruksi geometris.' },
    { type: 'glossary', items: [
      { term: 'Sudut benturan', definition: 'Estimasi sudut antara jalur tetesan dan permukaan target, biasanya dihitung dari rasio lebar-ke-panjang bercak elips.' },
      { term: 'Garis lintasan', definition: 'Garis yang diproyeksikan menunjukkan kemungkinan jalur mundur perjalanan dari bercak ke ruang tiga dimensi.' },
      { term: 'Area konvergensi', definition: 'Wilayah perkiraan tempat arah bercak berpotongan saat dilihat pada bidang target.' },
      { term: 'Area asal', definition: 'Wilayah tiga dimensi perkiraan tempat darah mungkin berasal, berdasarkan beberapa proyeksi lintasan.' },
    ] },
    { type: 'summary', title: 'Penggunaan terbaik', items: [
      'Gunakan penganalisis untuk memahami geometri lintasan dan menguji sensitivitas pengukuran.',
      'Bandingkan bola asal dengan nilai sebaran sebelum mempercayai rekonstruksi.',
      'Jangan gunakan visualisasi sebagai opini forensik yang berdiri sendiri.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
