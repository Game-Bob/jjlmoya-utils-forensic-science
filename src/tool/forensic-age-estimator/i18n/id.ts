import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dental-skeletal-third-molar-age-estimator';
const title = 'Estimator Usia Gigi, Skelet, dan Molar Ketiga';
const description = 'Perkirakan interval usia forensik berdasarkan perkembangan gigi, kematangan skelet, dan indikator molar ketiga untuk keperluan skrining serta triase kasus.';

const howTo = [
  {
    name: 'Pilih penekanan bukti',
    text: 'Pilih "Bukti campuran" untuk hasil triase yang seimbang, "Prioritas gigi" jika temuan klinis gigi lebih kuat, atau "Prioritas skelet" jika indikator radiografi tulang menjadi sumber utama.',
  },
  {
    name: 'Nilai setiap indikator kematangan',
    text: 'Tentukan tahap untuk setiap indikator dari 0 hingga 8. Tahap rendah menunjukkan perkembangan awal, tahap menengah menunjukkan maturasi masa remaja, dan tahap tinggi menunjukkan temuan yang matang atau hampir matang.',
  },
  {
    name: 'Baca intervalnya, bukan hanya usia tengah',
    text: 'Gunakan nilai usia minimum, kemungkinan, dan maksimum secara bersamaan. Penilaian usia forensik harus dinyatakan sebagai interval karena variasi perkembangan biologis antar individu sangat signifikan.',
  },
  {
    name: 'Periksa diskrepansi antar indikator',
    text: 'Jika tahap perkembangan gigi, skelet, dan molar ketiga menunjukkan rentang usia yang berbeda, anggap hasil tersebut sebagai eksploratif dan kumpulkan bukti pendukung sebelum menarik kesimpulan.',
  },
];

const faq = [
  {
    question: 'Dapatkah estimator usia forensik ini menentukan kedewasaan hukum?',
    answer: 'Tidak. Alat ini adalah kalkulator skrining untuk tujuan edukasi dan triase. Penentuan usia secara hukum memerlukan protokol lokal yang tervalidasi, penilaian oleh ahli, verifikasi identitas yang terdokumentasi, serta kepatuhan terhadap standar yurisdiksi setempat.',
  },
  {
    question: 'Mengapa hasil menunjukkan interval usia?',
    answer: 'Erupsi gigi, fusi skelet, dan perkembangan molar ketiga bervariasi bergantung pada faktor keturunan, nutrisi, kesehatan, jenis kelamin, populasi referensi, dan metode pencitraan. Penggunaan interval lebih akurat dan transparan daripada satu angka usia yang pasti.',
  },
  {
    question: 'Apa yang dimaksud dengan bukti campuran?',
    answer: 'Bukti campuran menyeimbangkan data dari perkembangan gigi, kematangan skelet, dan tahap molar ketiga. Gunakan opsi ini jika tidak ada satu indikator pun yang jauh lebih dapat diandalkan daripada indikator lainnya dalam berkas kasus tersebut.',
  },
  {
    question: 'Apakah molar ketiga dapat diandalkan untuk setiap kasus?',
    answer: 'Molar ketiga berguna pada masa remaja akhir hingga dewasa muda, namun memiliki variabilitas tinggi. Kondisi seperti agenesis, patologi, perbedaan populasi, dan kualitas radiografi dapat membatasi nilai diagnostiknya.',
  },
  {
    question: 'Haruskah alat ini digunakan untuk penanganan kasus nyata?',
    answer: 'Alat ini hanya berfungsi sebagai bantuan awal. Penanganan kasus nyata harus menggunakan metode yang tervalidasi, data referensi terkalibrasi, tinjauan independen, serta pelaporan ketidakpastian dan batasan secara transparan.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Papan kasus forensik',
    controls: 'Kontrol usia forensik',
    results: 'Hasil usia forensik',
    maturityProfile: 'Profil kematangan dinamis',
    screeningOnly: 'Perkiraan skrining',
    evidenceType: 'Penekanan bukti',
    mixedEvidence: 'Bukti campuran',
    dentalPriority: 'Prioritas gigi',
    skeletalPriority: 'Prioritas skelet',
    dentalStage: 'Tahap perkembangan gigi',
    epiphysealStage: 'Tahap fusi epifisis',
    thirdMolarStage: 'Tahap molar ketiga',
    minimumAge: 'Minimum',
    likelyAge: 'Kemungkinan',
    maximumAge: 'Maksimum',
    maturityScore: 'Skor kematangan',
    stageLabel: 'Tahap',
    ageUnit: 'tahun',
    dentalShort: 'Gigi',
    boneShort: 'Tulang',
    molarShort: 'Molar',
    dentalStageHelp: 'Pembentukan mahkota, akar, dan apeks.',
    epiphysealStageHelp: 'Penutupan lempeng pertumbuhan dan fusi skelet.',
    molarStageHelp: 'Mineralisasi molar ketiga dan penutupan apeks.',
    dentalStage0: 'Tidak ada',
    dentalStage1: 'Kuspa',
    dentalStage2: 'Mahkota',
    dentalStage3: 'Akar mulai',
    dentalStage4: 'Akar setengah',
    dentalStage5: 'Akar panjang',
    dentalStage6: 'Apeks sempit',
    dentalStage7: 'Apeks menutup',
    dentalStage8: 'Lengkap',
    epiphysealStage0: 'Terbuka',
    epiphysealStage1: 'Tepi',
    epiphysealStage2: 'Menyempit',
    epiphysealStage3: 'Jembatan',
    epiphysealStage4: 'Setengah menyatu',
    epiphysealStage5: 'Hampir menyatu',
    epiphysealStage6: 'Hanya garis',
    epiphysealStage7: 'Hampir tertutup',
    epiphysealStage8: 'Tertutup',
    molarStage0: 'Tidak ada',
    molarStage1: 'Kuspa',
    molarStage2: 'Mahkota mulai',
    molarStage3: 'Mahkota penuh',
    molarStage4: 'Akar mulai',
    molarStage5: 'Akar setengah',
    molarStage6: 'Akar panjang',
    molarStage7: 'Apeks menutup',
    molarStage8: 'Lengkap',
    confidenceexploratory: 'Eksploratif',
    confidencemoderate: 'Sedang',
    confidencestrong: 'Kuat',
    noteTriage: 'Gunakan sebagai estimasi triase, bukan sebagai penentuan usia hukum.',
    noteFinalAssessment: 'Penilaian usia forensik akhir harus mengintegrasikan radiologi, pemeriksaan klinis gigi, riwayat medis, serta standar yurisdiksi setempat.',
    noteWideInterval: 'Terdapat perbedaan antar indikator lebih dari empat tahun; interval telah diperlebar.',
  },
  seo: [
    {
      type: 'title',
      text: 'Estimator usia forensik: kalkulator skrining gigi, skelet, dan molar ketiga',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gunakan estimator usia forensik ini sebagai cara cepat dan transparan untuk mengatur data bukti kematangan biologis sebelum dilakukan penilaian formal. Kalkulator ini menggabungkan perkembangan gigi, fusi epifisis, dan tahap molar ketiga menjadi interval usia yang diperkirakan. Alat ini menjawab kebutuhan atas <strong>kalkulator estimasi usia forensik</strong>, <strong>penilaian usia gigi</strong>, serta <strong>estimasi usia kematangan skelet</strong>, sehingga pengguna memahami arti indikator, cara penggabungannya, dan batasan ketidakpastian yang melekat pada hasil.',
    },
    {
      type: 'paragraph',
      html: 'Hasil estimasi dinyatakan dalam <strong>usia minimum, kemungkinan, dan maksimum</strong>. Penggunaan titik estimasi tunggal dapat menyesatkan karena perkembangan biologis sangat bervariasi antar individu. Anggap kalkulator ini sebagai alat bantu skrining terstruktur, bukan sebagai kesimpulan hukum yang absolut.',
    },
    {
      type: 'title',
      text: 'Memahami indikator kematangan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skala tahap (0–8) memberikan abstraksi praktis untuk membandingkan sistem biologis yang berbeda. Tahap 0 menunjukkan bukti kematangan awal atau tidak ada, sementara tahap 8 menunjukkan kematangan lengkap. Tahap ini dirancang untuk perbandingan lintas sistem, bukan untuk menggantikan metode klinis spesifik.',
    },
    {
      type: 'table',
      headers: ['Indikator', 'Deskripsi', 'Konteks', 'Catatan'],
      rows: [
        ['Perkembangan gigi', 'Pembentukan dan erupsi (di luar molar ketiga).', 'Metrik utama untuk anak-anak dan remaja.', 'Dapat dipengaruhi oleh penyakit gigi, pencabutan, atau perbedaan populasi.'],
        ['Fusi epifisis', 'Penutupan lempeng pertumbuhan.', 'Indikator utama untuk remaja akhir dan dewasa muda.', 'Sangat bergantung pada tulang yang diperiksa, jenis kelamin, dan status kesehatan.'],
        ['Tahap molar ketiga', 'Pembentukan dan maturasi gigi bungsu.', 'Kritis untuk penilaian usia remaja akhir.', 'Memiliki variabilitas tinggi; periksa agenesis dan impaksi.'],
      ],
    },
    {
      type: 'title',
      text: 'Interpretasi interval usia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Perhatikan ketiga nilai usia secara bersamaan. <strong>Usia kemungkinan</strong> adalah estimasi tengah yang tertimbang. Nilai <strong>minimum</strong> dan <strong>maksimum</strong> mendefinisikan pita ketidakpastian. Konvergensi indikator akan menyempitkan pita ini, sementara sinyal yang bertentangan akan melebarkannya dan menurunkan tingkat kepercayaan.',
    },
    {
      type: 'table',
      headers: ['Pola hasil', 'Interpretasi', 'Tindakan'],
      rows: [
        ['Interval sempit / Kepercayaan kuat', 'Indikator selaras.', 'Dokumentasikan temuan dan periksa apakah validasi metode formal diperlukan.'],
        ['Interval sedang', 'Diskrepansi atau penekanan bukti mempengaruhi estimasi.', 'Verifikasi kualitas gambar dan penetapan tahap.'],
        ['Interval eksploratif lebar', 'Indikator bertentangan.', 'Jangan mengandalkan estimasi saja; cari catatan tambahan atau tinjauan spesialis.'],
      ],
    },
    {
      type: 'title',
      text: 'Pemilihan mode bukti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Bukti campuran</strong> adalah mode default yang menyeimbangkan semua indikator. Pilih <strong>prioritas gigi</strong> jika catatan klinis gigi sangat lengkap. Pilih <strong>prioritas skelet</strong> jika radiografi tulang merupakan data paling kuat. Mode ini tidak meningkatkan kualitas bukti yang lemah, namun menyesuaikan pembobotan matematisnya secara proporsional.',
    },
    {
      type: 'list',
      items: [
        '<strong>Prioritas gigi:</strong> saat perkembangan gigi jelas dan data molar ketiga tersedia.',
        '<strong>Prioritas skelet:</strong> saat fusi epifisis adalah sinyal terbaik yang terdokumentasi.',
        '<strong>Bukti campuran:</strong> ideal untuk skrining awal yang seimbang.',
        '<strong>Label kepercayaan:</strong> perhatikan untuk mengenali diskrepansi sebelum interpretasi.',
      ],
    },
    {
      type: 'title',
      text: 'Batasan forensik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Estimasi usia bersifat mendukung, bukan bukti mutlak identitas. Dalam konteks hukum, perlindungan, atau identifikasi korban bencana, penilaian harus dilakukan secara multidisiplin. Laporan resmi wajib merinci metodologi, populasi referensi, kualifikasi pengamat, dan batasan temuan.',
    },
    {
      type: 'paragraph',
      html: 'Alat ini dirancang untuk <strong>edukasi, triase, dan komunikasi transparan</strong>. Kami menekankan bahwa keputusan penting secara hukum—seperti ambang batas usia 18 tahun—tidak boleh didasarkan hanya pada kalkulator yang disederhanakan.',
    },
    {
      type: 'title',
      text: 'Daftar periksa laporan forensik',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dokumentasi sumber:</strong> Catat apakah tahap didasarkan pada pemeriksaan gigi klinis, panoramik, atau pencitraan tulang (misalnya tangan, klavikula).',
        '<strong>Data hilang/lemah:</strong> Dokumentasikan absennya molar ketiga, kualitas gambar buruk, atau anomali.',
        '<strong>Validasi metodologi:</strong> Pastikan metode yang dipilih diakui dalam yurisdiksi setempat.',
        '<strong>Komunikasi ketidakpastian:</strong> Selalu berikan rentang; hindari bahasa yang menyiratkan usia kronologis tepat.',
        '<strong>Tinjauan spesialis:</strong> Kasus berisiko tinggi wajib ditinjau oleh odontolog forensik, radiolog, atau antropolog.',
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