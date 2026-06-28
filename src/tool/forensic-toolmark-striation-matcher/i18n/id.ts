import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'pembanding-goresan-tanda-alat-forensik';
const title = 'Pembanding goresan tanda alat forensik';
const description = 'Unggah gambar tanda alat bukti dan tanda alat uji, sejajarkan dalam mikroskop pembanding layar terpisah, dan periksa kontinuitas goresan dengan kontrol visual.';

const howTo = [
  {
    name: 'Muat gambar perbandingan',
    text: 'Unggah gambar tanda uji yang diketahui dan gambar tanda bukti dari materi kasus, catatan, atau set pelatihan Anda sendiri.',
  },
  {
    name: 'Pindahkan pembagi perbandingan',
    text: 'Seret pembagi pada penampil optik untuk mengekspos lebih banyak tanda uji atau tanda bukti sambil menjaga kedua sampel dalam satu bidang.',
  },
  {
    name: 'Sesuaikan pergeseran, rotasi, zoom, dan kontras',
    text: 'Gunakan kontrol mikrometer untuk menggeser dan memutar gambar bukti, lalu atur zoom, kontras, dan kecerahan agar goresan tipis tetap terlihat.',
  },
  {
    name: 'Ekspor tampilan perbandingan',
    text: 'Setelah penyelarasan visual siap, ekspor tampilan PNG untuk diskusi, tinjauan kelas, atau ilustrasi catatan kasus.',
  },
];

const faq = [
  {
    question: 'Apa itu perbandingan tanda alat forensik?',
    answer: 'Perbandingan tanda alat forensik memeriksa tanda yang dihasilkan ketika alat menyentuh, memotong, mengikis, mencungkil, atau menekan permukaan lain. Pemeriksa membandingkan karakteristik kelas, kualitas tanda, dan detail goresan mikroskopis antara tanda bukti dan tanda uji yang diketahui.',
  },
  {
    question: 'Apakah alat online ini dapat mengidentifikasi alat persis yang membuat tanda?',
    answer: 'Tidak. Ruang kerja ini untuk penyelarasan visual dan pendidikan. Alat ini tidak menghitung atribusi sumber, probabilitas, tingkat kesalahan, atau kesimpulan forensik otomatis.',
  },
  {
    question: 'Mengapa pergeseran, rotasi, dan zoom penting dalam perbandingan tanda alat?',
    answer: 'Perbedaan kecil dalam sudut alat, tekanan, skala, posisi kamera, dan penempatan lateral dapat membuat goresan serupa tampak tidak sejajar. Kontrol pergeseran, rotasi, dan zoom membantu menempatkan dua gambar ke dalam posisi tampilan yang sebanding.',
  },
  {
    question: 'Gambar apa yang paling baik untuk penyelarasan tanda alat visual?',
    answer: 'Gunakan gambar yang tajam, cukup pencahayaan, dan diambil se-tegak lurus mungkin, dengan tumpang tindih yang cukup di wilayah tanda. Hindari kekaburan parah, silau ekstrem, distorsi perspektif, dan gambar di mana area goresan terlalu pendek atau rusak untuk dibandingkan.',
  },
  {
    question: 'Apa yang harus didokumentasikan pengguna setelah menyelaraskan dua gambar tanda alat?',
    answer: 'Dokumentasikan sumber masing-masing gambar, apakah itu bukti atau uji, pengaturan penyelarasan yang digunakan, penyesuaian gambar yang diterapkan, area kesesuaian atau ketidaksesuaian yang terlihat, dan batasan kualitas gambar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Tampilan mikroskop pembanding layar terpisah dari goresan tanda alat uji dan bukti',
    splitLabel: 'Pindahkan pembagi perbandingan',
    units: 'Sistem unit pergeseran',
    metric: 'Metrik',
    imperial: 'Imperial',
    toolProfile: 'Profil alat',
    loadImages: '1. Muat',
    alignImage: '2. Sejajarkan gambar bukti',
    adjustImage: '3. Atur visibilitas',
    outputControls: 'Kontrol output',
    demoOptions: 'Opsi demo',
    uploadKnown: 'Gambar uji/diketahui',
    uploadQuestioned: 'Gambar bukti',
    noFile: 'Tidak ada gambar dimuat',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Ujung obeng',
    prybar: 'Tepi linggis',
    boltCutter: 'Rahang pemotong baut',
    offset: 'Pergeseran horizontal',
    rotation: 'Rotasi sudut',
    zoom: 'Zoom gambar',
    contrast: 'Kontras',
    brightness: 'Kecerahan',
    microns: 'mikron',
    thousandths: 'seperseribu',
    degrees: 'derajat',
    correlation: 'Mode / skor',
    verdictStrong: 'penyelarasan kuat',
    verdictPartial: 'penyelarasan parsial',
    verdictWeak: 'penyelarasan lemah',
    center: 'Tengah',
    fineTip: 'garis seret halus',
    wideEdge: 'kompresi lebar',
    crushJaw: 'punggungan remuk berpasangan',
    grid: 'Kisi',
    exportImage: 'Ekspor tampilan',
    exportFilename: 'tampilan-perbandingan-tanda-alat.png',
    phaseFit: 'Kesesuaian fase',
    rotationFit: 'Kesesuaian rotasi',
    knownMark: 'Tanda uji diketahui',
    questionedMark: 'Tanda bukti',
    reliefGraph: 'Relief permukaan mikro digital',
    visualMode: 'Visual',
    visualVerdict: 'perbandingan manual',
    visualInterpretation: 'Penyelarasan visual saja. Tidak ada kesimpulan forensik otomatis yang dihitung.',
    interpMatch: 'Pratinjau demo. Unggah gambar untuk membandingkan tanda nyata.',
    interpPossible: 'Pratinjau demo. Sesuaikan penyelarasan atau unggah gambar.',
    interpMismatch: 'Pratinjau demo. Pusatkan kembali atau unggah gambar.',
    disclaimer: 'Ruang kerja visual saja.',
  },
  seo: [
    {
      type: 'title',
      text: 'Mikroskop Pembanding Tanda Alat Forensik Online',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Ruang kerja visual',
      title: 'Bandingkan gambar tanda alat bukti dan uji di browser Anda',
      html: 'Ruang kerja perbandingan tanda alat ini memungkinkan Anda mengunggah dua gambar, menempatkannya ke dalam mikroskop pembanding layar terpisah, dan menyesuaikan tanda bukti hingga alur goresan, tanda gesekan, tanda tekanan, atau goresan mikroskopis dapat diperiksa berdampingan. Ini dirancang untuk siswa sains forensik, instruktur, penyelidik, dan tim hukum yang memerlukan cara jelas untuk menjelaskan <strong>perbandingan tanda alat uji vs bukti</strong> tanpa menginstal perangkat lunak mikroskopi khusus.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 unggahan', label: 'gambar uji dan bukti', icon: 'mdi:image-plus' },
        { value: 'layar pisah', label: 'tata letak mikroskop pembanding', icon: 'mdi:compare-horizontal' },
        { value: 'penyelarasan', label: 'kontrol pergeseran, rotasi, dan zoom', icon: 'mdi:axis-arrow' },
        { value: 'ekspor PNG', label: 'simpan tampilan perbandingan', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'Kapan ruang kerja perbandingan tanda alat ini berguna',
      items: [
        'Mengajarkan bagaimana mikroskop pembanding menempatkan tanda uji yang diketahui di samping tanda bukti.',
        'Mempersiapkan demonstrasi kelas dengan gambar tanda alat nyata atau latihan.',
        'Menjelaskan mengapa penyelarasan, skala, rotasi, pencahayaan, dan kontras mempengaruhi interpretasi goresan.',
        'Membuat ilustrasi visual yang bersih atau gambar catatan kasus yang menunjukkan tampilan sejajar tanpa mengklaim identifikasi otomatis.',
        'Menyaring kualitas gambar sebelum memutuskan apakah suatu tanda cocok untuk perbandingan laboratorium formal.',
      ],
    },
    {
      type: 'title',
      text: 'Cara Membandingkan Gambar Tanda Alat Secara Online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mulailah dengan memuat gambar <strong>tanda uji yang diketahui</strong> dan gambar <strong>tanda bukti</strong>. Tanda yang diketahui biasanya dibuat di bawah kondisi terkendali dengan alat tertentu. Tanda bukti adalah tanda yang ditemukan dari TKP, objek, kusen pintu, kunci, atau barang lain yang sumbernya tidak diketahui. Tujuan dari ruang kerja ini bukan untuk memutuskan identitas secara otomatis; tujuannya adalah untuk menempatkan kedua gambar ke dalam hubungan visual yang berguna sehingga pengguna dapat memeriksa kontinuitas dan ketidaksesuaian.',
    },
    {
      type: 'paragraph',
      html: 'Setelah kedua gambar dimuat, gunakan penggeser terpisah untuk mengekspos lebih banyak atau lebih sedikit dari kedua sisi. Sesuaikan pergeseran horizontal untuk menyelaraskan fase alur goresan, lalu putar gambar bukti untuk mengompensasi sudut kamera atau sudut alat. Zoom membantu ketika kedua gambar diambil pada perbesaran yang berbeda. Kontras dan kecerahan membantu mengungkapkan goresan tipis atau tanda dangkal, tetapi penyesuaian ini harus didokumentasikan karena mengubah tampilan gambar yang ditampilkan.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Apa yang dapat dibantu oleh ruang kerja untuk Anda lihat',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Pengaturan layar terpisah yang baik memudahkan pemeriksaan apakah dua tanda berbagi struktur visual yang sebanding setelah penyelarasan yang cermat.',
          points: ['Arah goresan atau punggungan serupa', 'Kontinuitas di beberapa fitur tetangga', 'Perbedaan skala dan rotasi yang perlu diperbaiki', 'Area di mana kualitas tanda cukup kuat untuk diperiksa', 'Ketidakcocokan fitur kelas yang jelas yang dapat mengakhiri perbandingan lebih awal'],
        },
        {
          title: 'Apa yang tidak dapat dibuktikannya',
          icon: 'mdi:alert-circle-outline',
          description: 'Alat browser ini bukan sistem identifikasi forensik tervalidasi dan tidak boleh digunakan seperti itu.',
          points: ['Tidak ada kesimpulan sumber yang sama otomatis', 'Tidak ada probabilitas kecocokan acak', 'Tidak ada estimasi frekuensi populasi', 'Bukan pengganti pemeriksaan bukti asli', 'Bukan pengganti jaminan kualitas laboratorium atau tinjauan sejawat'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Kontrol', 'Apa yang diubah', 'Mengapa itu penting'],
      rows: [
        ['Unggah gambar uji', 'Memuat tanda kontrol atau referensi.', 'Sisi yang diketahui harus berasal dari tanda uji yang didokumentasikan atau contoh pelatihan.'],
        ['Unggah gambar bukti', 'Memuat tanda yang sumbernya tidak diketahui.', 'Sisi ini dipindahkan dan disesuaikan untuk mencari orientasi yang sebanding.'],
        ['Pegangan pemisah', 'Mengubah seberapa banyak dari setiap gambar yang terlihat.', 'Pemisah yang dapat dipindahkan membantu memeriksa apakah garis berlanjut secara visual melintasi batas.'],
        ['Pergeseran horizontal', 'Menggeser gambar bukti ke kiri atau kanan.', 'Pergeseran lateral kecil dapat membawa punggungan yang sesuai masuk atau keluar dari fase.'],
        ['Rotasi', 'Memutar gambar bukti.', 'Sudut alat, sudut kamera, dan dudukan dapat membuat penyimpangan sudut antar gambar.'],
        ['Zoom', 'Mengubah perbesaran yang ditampilkan.', 'Skala gambar yang berbeda harus dibuat sebanding sebelum menilai detail.'],
        ['Kontras dan kecerahan', 'Menyesuaikan visibilitas yang ditampilkan.', 'Goresan kontras rendah mungkin menjadi lebih mudah dilihat, tetapi penyesuaian harus dicatat.'],
        ['Ekspor tampilan', 'Menyimpan PNG dari penyelarasan saat ini.', 'Berguna untuk tinjauan kelas, catatan, diskusi, atau laporan yang menyatakan batasan dengan jelas.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Kualitas gambar',
      title: 'Gambar yang buruk dapat membuat perbandingan yang baik menjadi mustahil',
      html: 'Perbandingan tanda alat sangat bergantung pada kualitas gambar. Kekaburan, silau, artefak kompresi, bayangan kuat, distorsi perspektif, dan goresan yang sangat pendek semuanya dapat membuat kesan visual yang menyesatkan. Jika tanda tidak dapat diorientasikan, diskalakan, dan diterangi dengan jelas, kesimpulan yang tepat adalah bahwa gambar tersebut tidak cocok untuk perbandingan yang bermakna.',
    },
    {
      type: 'summary',
      title: 'Daftar periksa praktis sebelum membandingkan dua tanda',
      items: [
        'Konfirmasikan gambar mana yang merupakan tanda bukti dan gambar mana yang merupakan tanda uji.',
        'Periksa bahwa kedua gambar menunjukkan jenis tanda umum, area kontak alat, dan orientasi permukaan kerja yang sama.',
        'Hindari membandingkan garis tunggal yang terisolasi; cari kumpulan detail tetangga yang bertahan pada panjang yang berguna.',
        'Gunakan kontras dan kecerahan secara konservatif dan catat saat peningkatan gambar diterapkan.',
        'Ekspor tampilan sejajar hanya sebagai ilustrasi dari apa yang ditampilkan, bukan sebagai bukti identitas.',
      ],
    },
    {
      type: 'title',
      text: 'Bukti Tanda Alat Uji versus Bukti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tanda alat bukti biasanya ditemukan dari barang yang terlibat dalam suatu insiden, seperti tanda linggis di pintu, potongan pada kawat, goresan pada logam, atau tanda tekanan pada permukaan yang lebih lunak. Tanda uji diproduksi dari alat yang dicurigai di bawah kondisi terkendali atau didokumentasikan. Dalam pekerjaan forensik formal, pemeriksa mempertimbangkan apakah karakteristik kelas konsisten sebelum menghabiskan waktu pada detail goresan halus. Jika karakteristik kelas tidak sesuai, kesamaan mikroskopis di wilayah kecil tidak cukup untuk mendukung suatu asosiasi.',
    },
    {
      type: 'paragraph',
      html: 'Ruang kerja browser sengaja dibuat konservatif. Ini membantu Anda menyelaraskan gambar dan mendiskusikan fitur visual, tetapi tidak memodelkan keausan alat, karakteristik subkelas, deformasi substrat, tanda manufaktur, ambang batas pemeriksa, ketidakpastian pengukuran, atau tingkat kesalahan. Alur kerja yang bertanggung jawab memperlakukan gambar yang diekspor sebagai alat bantu komunikasi, bukan sebagai hasil identifikasi.',
    },
    {
      type: 'proscons',
      title: 'Kekuatan dan batasan perbandingan gambar tanda alat online',
      items: [
        { pro: 'Cara cepat untuk memuat dua gambar dan memeriksa penyelarasan tanpa menginstal perangkat lunak desktop.', con: 'Tampilan browser bukan mikroskop pembanding forensik yang dikalibrasi.' },
        { pro: 'Berguna untuk mengajarkan bagaimana perbandingan layar terpisah dan orientasi memengaruhi apa yang dilihat pengguna.', con: 'Peningkatan gambar dapat meningkatkan visibilitas tetapi juga dapat mengubah bagaimana fitur muncul.' },
        { pro: 'Tampilan PNG yang diekspor berguna untuk catatan, diskusi, dan penjelasan visual.', con: 'Tampilan yang diekspor tidak mempertahankan konteks bukti lengkap, metadata, oatau rantai penjagaan.' },
        { pro: 'Bekerja dengan gambar asli yang diunggah pengguna, bukan hanya tanda sintetis.', con: 'Alat ini tidak dapat menentukan apakah dua tanda berasal dari alat yang sama.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Tanda bukti', definition: 'Tanda yang ditemukan dari barang atau TKP yang sumbernya tidak diketahui.' },
        { term: 'Tanda uji diketahui', definition: 'Tanda terkendali yang dibuat dengan alat tertentu untuk dibandingkan dengan tanda bukti.' },
        { term: 'Goresan (Striation)', definition: 'Garis atau punggungan mikroskopis yang tercipta saat permukaan alat bergeser di atas bahan lain.' },
        { term: 'Karakteristik kelas', definition: 'Fitur yang dimiliki bersama oleh sekelompok alat, seperti lebar bilah, bentuk umum, atau jenis alat.' },
        { term: 'Karakteristik individu', definition: 'Fitur permukaan halus yang mungkin timbul dari pembuatan, penggunaan, kerusakan, atau keausan.' },
        { term: 'Karakteristik subkelas', definition: 'Fitur yang dimiliki bersama oleh subset alat karena proses manufaktur; mereka dapat mempersulit interpretasi sumber.' },
        { term: 'Kesesuaian', definition: 'Keputusan tentang apakah suatu tanda berisi kualitas dan kuantitas detail yang cukup untuk mendukung perbandingan.' },
      ],
    },
    {
      type: 'tip',
      title: 'Istilah pencarian baik yang dirancang untuk dijawab halaman ini',
      html: 'Pengguna yang mencari ruang kerja jenis ini sering kali mencari frasa seperti <strong>mikroskop pembanding tanda alat online</strong>, <strong>perbandingan goresan forensik</strong>, <strong>tanda uji vs bukti</strong>, <strong>bandingkan tanda alat dari gambar</strong>, dan <strong>simulator mikroskop pembanding forensik</strong>. Halaman ini dibangun di sekitar tugas-tugas nyata tersebut: unggah, sejajarkan, periksa, dokumentasikan, dan pahami batasan.',
    },
    {
      type: 'table',
      headers: ['Pertanyaan umum pengguna', 'Jawaban singkat'],
      rows: [
        ['Dapatkah saya mengunggah gambar tanda alat saya sendiri?', 'Ya. Alat ini dirancang untuk gambar uji dan bukti yang diunggah pengguna.'],
        ['Apakah aplikasi memutuskan apakah kedua tanda cocok?', 'Tidak. Alat ini hanya mendukung penyelarasan visual dan tidak membuat kesimpulan sumber forensik.'],
        ['Mengapa gambar bukti bergerak, bukan keduanya?', 'Menjaga sisi uji tetap stabil memudahkan untuk mendokumentasikan bagaimana gambar bukti disesuaikan.'],
        ['Dapatkah saya menggunakannya untuk tanda senjata api atau selongsong?', 'Ini dapat membantu menunjukkan konsep penyelarasan gambar, tetapi perbandingan senjata api dan selongsong memerlukan prosedur khusus disiplin ilmu dan tinjauan tervalidasi.'],
        ['Dapatkah saya menyertakan PNG yang diekspor dalam catatan?', 'Ya, jika digambarkan dengan jelas sebagai tampilan ilustrasi yang dihasilkan dengan kontrol penyesuaian visual.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Peringatan forensik',
      title: 'Gunakan bahasa yang cermat saat menjelaskan perbandingan tanda alat',
      html: 'Hindari mengubah penyelarasan visual menjadi kesimpulan yang lebih kuat daripada yang didukung bukti. Bahasa yang tepat bergantung pada yurisdiksi, kebijakan laboratorium, validasi, kualitas gambar, tinjauan pemeriksa, dan konteks kasus. Alat online ini harus dijelaskan sebagai alat bantu perbandingan visual, bukan sebagai metode tervalidasi untuk mengindividualisasikan alat.',
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
