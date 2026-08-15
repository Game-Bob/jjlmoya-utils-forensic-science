import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'kalkulator-waktu-kematian-algor-mortis';
const title = 'Kalkulator Waktu Kematian Algor Mortis';
const description = 'Perkirakan interval pasca kematian dan waktu kematian menggunakan metode nomogram Henssge dan penurunan suhu tubuh.';

const howTo = [
  { name: 'Masukkan Suhu Rektal dan Lingkungan', text: 'Ketikkan suhu rektal inti yang diukur di tempat kejadian perkara beserta suhu udara sekitar.' },
  { name: 'Tentukan Berat Badan dan Faktor Koreksi', text: 'Masukkan berat tubuh dalam kilogram dan pilih faktor koreksi isolasi pakaian atau perendaman air.' },
  { name: 'Tentukan Waktu Pengukuran Suhu', text: 'Masukkan jam dan menit saat suhu diukur atau klik Waktu Sekarang.' },
  { name: 'Analisis Interval dan Kurva Pendinginan', text: 'Tinjau perkiraan waktu sejak kematian, rentang kepastian 95 persen, dan grafik termal.' }
];

const faq = [
  { question: 'Apa itu Algor Mortis dalam kedokteran forensik?', answer: 'Algor Mortis adalah proses penurunan suhu tubuh secara bertahap setelah kematian hingga mencapai keseimbangan dengan suhu lingkungan.' },
  { question: 'Mengapa nomogram Henssge lebih disukai daripada rumus linier?', answer: 'Karena memperhitungkan fase dataran tinggi suhu awal dan kurva pendinginan eksponensial ganda berdasarkan berat badan dan isolasi pakaian.' },
  { question: 'Seberapa akurat perkiraan waktu kematian berbasis suhu?', answer: 'Dalam kondisi standar yang terkontrol, margin kepercayaan 95 persen adalah sekitar kurang lebih 2.8 jam pada 10 jam pertama.' },
  { question: 'Apa yang dimaksud dengan dataran tinggi suhu pasca kematian?', answer: 'Dataran tinggi suhu adalah periode 1 hingga 3 jam pertama setelah kematian saat suhu rektal inti turun sangat lambat.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Estimator Interval Pasca Kematian dan Nomogram Pendinginan',
    disclaimer: 'Hanya untuk simulasi akademik dan edukasi. Kesimpulan forensik resmi memerlukan otopsi komprehensif dan evaluasi lebam mayat.',
    unitSystemLabel: 'Sistem Satuan',
    unitMetricLabel: 'Metrik',
    unitImperialLabel: 'Imperial',
    presetsHeader: 'Skenario Forensik Standar',
    presetCustom: 'Parameter Khusus',
    presetNakedCalm: 'Tanpa busana di ruangan tenang (20°C)',
    presetDressedIndoor: 'Berpakaian di dalam ruangan (19.5°C)',
    presetWinterOutdoor: 'Luar ruangan musim dingin (4°C)',
    presetSubmergedWater: 'Tenggelam dalam air tenang (12°C)',
    presetHeavyDuvet: 'Di bawah selimut tebal di ranjang (18°C)',
    inputsHeader: 'Parameter Lokasi dan Pengukuran Termal',
    rectalTempLabel: 'Suhu Rektal Inti',
    ambientTempLabel: 'Suhu Lingkungan',
    bodyWeightLabel: 'Berat Badan',
    factorLabel: 'Faktor Koreksi Lingkungan',
    measurementTimeLabel: 'Waktu Pengukuran',
    factorNaked: 'Tanpa busana di udara tenang',
    factorLightClothes: 'Pakaian tipis (1-2 lapis)',
    factorStandardClothes: 'Pakaian standar harian (3-4 lapis)',
    factorHeavyWinter: 'Pakaian musim dingin tebal',
    factorLightBlanket: 'Ranjang dengan selimut tipis',
    factorHeavyDuvet: 'Ranjang dengan selimut bulu tebal',
    factorStillWater: 'Tenggelam dalam air tenang',
    factorFlowingWater: 'Tenggelam dalam air dingin mengalir',
    factorWetClothing: 'Pakaian basah berangin',
    factorMovingAir: 'Udara bergerak dengan kipas angin',
    resultsHeader: 'Analisis Interval Pasca Kematian',
    estimatedPmiLabel: 'Perkiraan Waktu Sejak Kematian',
    deathWindowLabel: 'Rentang Waktu Kematian',
    confidenceMarginLabel: 'Margin Kepercayaan (95%)',
    coolingPhaseLabel: 'Fase Termodinamika',
    coolingRateLabel: 'Laju Kehilangan Panas Saat Ini',
    glaisterEstimateLabel: 'Perbandingan Rumus Glaister',
    chartHeader: 'Lintasan Pendinginan Eksponensial Ganda Henssge',
    chartXAxis: 'Jam Pasca Kematian',
    chartYAxis: 'Suhu Tubuh Inti',
    chartNowMarker: 'Nilai Pengukuran',
    chartPlateauMarker: 'Dataran Awal',
    phasePlateau: 'Fase Dataran Tinggi',
    phaseDescent: 'Penurunan Eksponensial',
    phaseEquilibrium: 'Keseimbangan Termal',
    phaseHyperthermia: 'Peringatan Hipertermia',
    hoursUnit: 'jam',
    minutesUnit: 'mnt',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/jam',
    fahrenheitPerHour: '°F/jam',
    resetBtn: 'Atur Ulang',
    nowBtn: 'Waktu Sekarang',
    coreThermometerLabel: 'Suhu Inti',
    baselineAmbientLabel: 'Batas Lingkungan',
    referenceBodyTempLabel: 'Suhu Normal'
  },
  seo: [
    { type: 'title', text: 'Prinsip Fisika Pendinginan Mayat dan Estimasi Saat Kematian', level: 2 },
    { type: 'paragraph', html: 'Menentukan interval pasca kematian (Postmortem Interval atau PMI) merupakan salah satu tujuan utama kedokteran forensik dalam proses penyelidikan hukum dan kriminalistik. <strong>Algor Mortis</strong> merujuk pada penurunan suhu tubuh secara bertahap setelah berhentinya sirkulasi darah dan aktivitas metabolisme seluler sampai mencapai keseimbangan termal dengan lingkungan sekitar. Melalui pengukuran suhu rektal dalam yang akurat dan penerapan hukum termodinamika pelepasan panas, dokter forensik dan penyidik dapat merekonstruksi rentang waktu terjadinya kematian secara objektif dan ilmiah.' },
    { type: 'paragraph', html: 'Pelepasan energi kalor dari dalam tubuh terjadi melalui mekanisme radiasi termal, konduksi kontak langsung, konveksi udara bebas, dan evaporasi kelembaban kulit. Karena organ dalam mentransfer panas terlebih dahulu ke lapisan jaringan terluar, penurunan suhu membentuk gradien fisis yang kompleks.' },
    { type: 'diagnostic', variant: 'info', title: 'Karakteristik Termodinamika Mayat', html: 'Pendinginan tubuh manusia setelah meninggal tidak berlangsung secara linier sejak menit pertama. Terdapat fase perlambatan awal yang dikenal sebagai <em>dataran tinggi suhu</em>, diikuti oleh penurunan eksponensial yang curam, dan akhirnya mendatar saat mendekati suhu lingkungan.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Referensi Inti Normotermal' },
      { value: '±2.8 jam', label: 'Margin Kepastian 10 Jam Pertama' },
      { value: 'Eksponensial Ganda', label: 'Model Matematis Henssge' }
    ] },
    { type: 'title', text: 'Persamaan Eksponensial Ganda Claus Henssge', level: 3 },
    { type: 'paragraph', html: 'Aturan perkiraan linier tradisional seperti rumus Glaister mengasumsikan penurunan suhu yang konstan sekitar 0.83 derajat Celsius per jam. Namun, pendekatan linier sederhana tersebut memiliki banyak kelemahan karena mengabaikan isolasi pakaian, massa badan, dan fenomena dataran tinggi suhu awal.' },
    { type: 'code', ariaLabel: 'Rumus Henssge', code: 'Q = (T_rektal - T_lingkungan) / (37.2 - T_lingkungan)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (BeratBadan^0.625 * FaktorKoreksi) - 0.0284' },
    { type: 'paragraph', html: 'Profesor Claus Henssge merumuskan persamaan matematika dengan dua fungsi eksponensial yang memperhitungkan gradien pendinginan permukaan kulit terluar dan pelepasan energi panas organ dalam secara simultan. Model komputasi ini memberikan estimasi waktu yang jauh lebih dapat diandalkan di pengadilan.' },
    { type: 'paragraph', html: 'Koefisien termal Q tanpa dimensi merepresentasikan proporsi sisa kalor tubuh relatif terhadap suhu lingkungan dasar saat kematian. Formulasi matematis ini memastikan perhitungan tetap stabil dan presisi di berbagai kondisi iklim.' },
    { type: 'title', text: 'Faktor Koreksi Lingkungan dan Pakaian', level: 3 },
    { type: 'paragraph', html: 'Laju perpindahan panas tubuh sangat dipengaruhi oleh berat badan, konveksi udara di ruangan, kelembaban, serta lapisan bahan pakaian yang menutupi tubuh jenazah.' },
    { type: 'table', headers: ['Kondisi Tempat Kejadian', 'Nilai Faktor Cf', 'Pengaruh Fisik'], rows: [
      ['Tanpa busana di udara tenang', '1.0', 'Radiasi dan konveksi alami standar'],
      ['Pakaian tipis (1-2 lapis)', '1.1', 'Sedikit mengurangi pelepasan panas kulit'],
      ['Pakaian harian biasa (3-4 lapis)', '1.2', 'Hambatan termal sedang pada batang tubuh'],
      ['Pakaian musim dingin tebal', '1.4', 'Isolasi tinggi yang memerangkap udara hangat'],
      ['Di bawah selimut tebal di ranjang', '1.8', 'Retensi panas sangat tinggi dan memperlambat pendinginan'],
      ['Tenggelam dalam air tenang', '0.5', 'Konduktivitas termal air 24 kali lebih tinggi dari udara'],
      ['Tenggelam dalam air dingin mengalir', '0.35', 'Konveksi paksa cairan mempercepat pelepasan kalor']
    ] },
    { type: 'title', text: 'Fase Termodinamika Pendinginan Tubuh', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Dataran Tinggi Suhu Awal', description: 'Selama 1 sampai 3 jam pertama setelah kematian, suhu rektal inti hampir tidak berubah saat gradien suhu ke kulit mulai terbentuk.', points: ['Pembentukan gradien inti ke permukaan', 'Rumus linier meremehkan durasi di fase ini', 'Dimodelkan oleh suku -0.25 exp(-5kt)'] },
      { title: 'Penurunan Eksponensial Cepat', description: 'Setelah gradien terbentuk, kalor dilepaskan secara konstan pada laju yang ditentukan oleh massa badan.', highlight: true, points: ['Sensitivitas analisis tertinggi', 'Interval keyakinan statistik paling sempit', 'Jendela optimal untuk metode termometri'] }
    ] },
    { type: 'title', text: 'Panduan Pengukuran Suhu Mayat di Tempat Kejadian', level: 3 },
    { type: 'paragraph', html: 'Kepatuhan terhadap protokol standar pengukuran suhu sangat penting dalam investigasi medikolegal. Kesalahan penempatan sensor atau fluktuasi suhu ruangan yang tidak tercatat dapat mengubah estimasi rentang waktu secara signifikan.' },
    { type: 'list', items: [
      '<strong>Ukur suhu rektal inti dalam:</strong> masukkan probe termistor digital yang terkalibrasi setidaknya 8 sampai 10 cm ke dalam rektum.',
      '<strong>Ukur suhu lingkungan di dekat mayat:</strong> letakkan sensor tidak lebih dari 10 cm dari tubuh jenazah.',
      '<strong>Dokumentasikan kestabilan ruangan:</strong> catat adanya pendingin ruangan, jendela terbuka, atau sinar matahari langsung.',
      '<strong>Periksa kebasahan pakaian:</strong> pakaian basah meningkatkan pendinginan evaporatif secara drastis.'
    ] },
    { type: 'summary', title: 'Ringkasan Metodologi', items: [
      'Nomogram Henssge adalah standar internasional yang diakui untuk estimasi waktu kematian termometrik.',
      'Selalu laporkan hasil dalam bentuk rentang waktu dengan deviasi standar, bukan satu titik waktu mutlak.',
      'Kombinasikan pemeriksaan suhu dengan rigor mortis, livor mortis, dan eksitabilitas otot supravital.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
