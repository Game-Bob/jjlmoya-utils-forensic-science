import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "penganalisis-spektrogram-suara-online";
const title = "Penganalisis Spektrogram Suara Online";
const description = "Visualisasikan frekuensi, waktu, intensitas, dan estimasi formant dari dua sampel audio secara privat di peramban Anda.";

const howTo = [
  {
    "name": "Pilih dua sampel audio",
    "text": "Gunakan file audio lokal atau studi vokal sintetis."
  },
  {
    "name": "Atur batas frekuensi",
    "text": "Pilih 4, 6, atau 8 kHz sesuai jangkauan suara."
  },
  {
    "name": "Baca spektrogram",
    "text": "Amati waktu, frekuensi, dan panduan formant."
  },
  {
    "name": "Dengarkan dan bandingkan",
    "text": "Bandingkan rata-rata F1, F2, dan F3 secara deskriptif."
  }
];

const faq = [
  {
    "question": "Apa yang ditampilkan oleh spektrogram suara?",
    "answer": "Spektrogram memetakan waktu secara horizontal, frekuensi secara vertikal, dan intensitas sinyal melalui kecerahan warna."
  },
  {
    "question": "Apakah rekaman saya diunggah?",
    "answer": "Tidak. Semua proses berjalan secara lokal di perangkat Anda."
  },
  {
    "question": "Apa itu F1, F2, dan F3?",
    "answer": "Merupakan estimasi edukatif dari tiga puncak resonansi utama saluran vokal."
  },
  {
    "question": "Apakah alat ini dapat mengidentifikasi pembicara?",
    "answer": "Tidak. Kemiripan visual tidak mengonfirmasi identitas pembicara."
  },
  {
    "question": "Mengapa estimasi formant berubah dengan batas frekuensi?",
    "answer": "Perubahan skala frekuensi memengaruhi pemisahan puncak spektral."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "Hanya lokal",
    "privacyNote": "Rekaman Anda tetap di perangkat ini. Proses dekode dan analisis berjalan di peramban.",
    "loadHeading": "Muat dua suara untuk dianalisis",
    "sampleALabel": "Sampel A",
    "sampleBLabel": "Sampel B",
    "chooseFileLabel": "Pilih audio",
    "replaceFileLabel": "Ganti audio",
    "dropHint": "Tarik file audio ke sini (maksimal 25 MB). 20 detik pertama akan dianalisis.",
    "presetHint": "Mulai langsung dengan dua studi vokal sintetis.",
    "presetWarmLabel": "Studi vokal hangat",
    "presetBrightLabel": "Studi vokal cerah",
    "emptySampleLabel": "Menunggu audio",
    "readySampleLabel": "Plat spektral siap",
    "decodingSampleLabel": "Memproses plat spektral",
    "errorSampleLabel": "Sampel tidak dapat dianalisis",
    "durationLabel": "Durasi",
    "ceilingHeading": "Batas frekuensi atas",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "Panggung spektrogram suara cermin",
    "mirrorViewLabel": "Plat cermin",
    "splitViewLabel": "Plat sejajar",
    "playALabel": "Putar sampel A",
    "playBLabel": "Putar sampel B",
    "stopLabel": "Hentikan",
    "timeAxisLabel": "Waktu",
    "frequencyAxisLabel": "Frekuensi",
    "intensityLegendLabel": "Tinta lebih terang menunjukkan energi lebih kuat",
    "formantLegendLabel": "Garis panduan estimasi formant",
    "sampleAEmptyCanvasLabel": "Muat sampel A untuk menampilkan spektrum",
    "sampleBEmptyCanvasLabel": "Muat sampel B untuk menampilkan spektrum",
    "comparisonHeading": "Analisis jejak resonansi",
    "comparisonNote": "Nilai rata-rata puncak spektral. Perbedaan adalah hasil pengukuran, bukan persentase kemiripan atau bukti identitas.",
    "formantOneLabel": "Wilayah resonansi pertama (F1)",
    "formantTwoLabel": "Wilayah resonansi kedua (F2)",
    "formantThreeLabel": "Wilayah resonansi ketiga (F3)",
    "averageLabel": "Rata-rata",
    "differenceLabel": "Selisih",
    "unavailableLabel": "Tidak tersedia",
    "statusEmptyLabel": "Muat sampel untuk memulai",
    "statusSingleLabel": "Satu plat siap",
    "statusReadyLabel": "Dua plat spektral siap",
    "limitError": "Ukuran file melebihi batas analisis lokal 25 MB.",
    "decodeError": "Peramban tidak dapat mendekode format audio ini.",
    "browserError": "Web Audio API tidak tersedia di peramban ini.",
    "educationalNote": "Alat visualisasi edukatif. Garis formant tidak boleh digunakan untuk identifikasi pembicara forensik."
},
  seo: [
    { type: 'title', text: "Bagaimana spektrogram suara mengubah suara menjadi lanskap visual", level: 2 },
    { type: 'paragraph', html: "Spektrogram suara mengubah rekaman menjadi peta visual yang sangat jelas dengan waktu pada sumbu horizontal dan frekuensi pada sumbu vertikal. Energi yang lebih kuat muncul sebagai warna yang lebih cerah. Ini membuat vokal yang ditahan, harmonik, keheningan, dan resonansi lebih mudah diamati dibandingkan bentuk gelombang biasa. Visualisasi ini mempermudah analisis sinyal suara secara mendalam dan terstruktur di setiap frekuensi. Hasilnya memungkinkan pemahaman karakter vokal secara ilmiah." },
    { type: 'paragraph', html: "Penganalisis membagi sinyal menjadi segmen-segmen pendek yang tumpang tindih, menerapkan jendela Hamming, dan menghitung distribusi energi berdasarkan frekuensi menggunakan FFT. Segmen pendek menentukan waktu secara tepat, sedangkan resolusi frekuensi menunjukkan konsentrasi energi. Prinsip ketidakpastian selalu membuat kompromi antara resolusi waktu dan frekuensi. Pengaturan ini menentukan ketajaman tampilan." },

    { type: 'diagnostic', variant: 'info', title: "Pemrosesan privat di peramban", html: "Visualisasikan frekuensi, waktu, intensitas, dan estimasi formant dari dua sampel audio secara privat di peramban Anda." },
    { type: 'stats', columns: 3, items: [
      { value: "Waktu", label: "Baca dari kiri ke kanan" },
      { value: "Hz", label: "Posisi frekuensi" },
      { value: "Energi", label: "Ditampilkan sebagai kecerahan" }
    ] },
    { type: 'title', text: "Membaca formant secara bijak", level: 3 },
    { type: 'paragraph', html: "Formant adalah wilayah resonansi yang dibentuk oleh saluran vokal. F1 dan F2 digunakan dalam fonetik untuk menjelaskan tinggi vokal dan tempat artikulasi secara mendalam. Penganalisis ini melacak puncak halus di tiga wilayah frekuensi agar pengguna dapat menghubungkan pita yang terlihat dengan perilaku F1, F2, dan F3 secara lebih intuitif dan akurat." },
    { type: 'paragraph', html: "Pengukuran formant profesional umumnya menggunakan Linear Predictive Coding yang disesuaikan dengan pembicara. Harmonik nada dasar, desah, gema ruangan, dan kompresi dapat menggeser perkiraan sederhana. Gunakan garis panduan ini sebagai referensi edukatif dan selalu periksa spektrum visual di belakangnya." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 hingga 1000 Hz","Wilayah resonansi pertama, berkaitan dengan bukaan vokal"],["F2","900 hingga 3000 Hz","Wilayah resonansi kedua, berkaitan dengan posisi lidah"],["F3","2000 hingga 4500 Hz","Wilayah resonansi atas, dipengaruhi oleh saluran vokal"]] },
    { type: 'title', text: "Pengaruh pengaturan frekuensi pada analisis", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Batas bawah (4 kHz)", description: "Tampilan frekuensi rendah lebih baik", points: ["Berguna untuk vokal", "Dapat mengabaikan energi tinggi", "Tidak menjamin akurasi tinggi"] },
      { title: "Batas atas (6/8 kHz)", description: "Lebih banyak detail atas", highlight: true, points: ["Untuk suara cerah", "Menampilkan gesekan", "Mengecilkan pita bawah"] }
    ] },
    { type: 'title', text: "Perbandingan dua sampel audio secara bertanggung jawab", level: 3 },
    { type: 'paragraph', html: "Perbandingan dua sampel paling berguna ketika kedua rekaman berisi vokal atau kalimat yang sama dalam kondisi akustik yang serupa. Perbedaan yang ditampilkan adalah jarak fisik mutlak antara puncak frekuensi. Perbedaan tersebut bukan persentase kemiripan atau bukti identitas biologis." },
    { type: 'list', items: ["<strong>Gunakan konten yang sama:</strong> vokal atau kata yang sama lebih mudah dibandingkan.","<strong>Samakan kondisi rekaman:</strong> mikrofon dan akustik ruangan sangat memengaruhi spektrum.","<strong>Dengarkan dengan kursor:</strong> hubungkan peristiwa visual dengan waktu suara yang tepat.","<strong>Hindari klaim identitas:</strong> spektrogram yang mirip tidak membuktikan identitas pembicara."] },
    { type: 'summary', title: "Ringkasan penganalisis", items: ["Hasilkan spektrogram audio secara lokal dari file yang kompatibel.","Jelajahi dua sampel dalam plat cermin atau sejajar.","Pelajari bagaimana energi spektral dan wilayah formant berubah.","Jaga pendekatan deskriptif dan edukatif."] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
