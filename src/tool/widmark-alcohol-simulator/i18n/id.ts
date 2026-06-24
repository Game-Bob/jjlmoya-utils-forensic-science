import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-kadar-alkohol-widmark';
const title = 'Simulator Kadar Alkohol Darah Widmark';
const description = 'Simulasikan penyerapan, distribusi, dan eliminasi alkohol dalam tubuh manusia menggunakan formula Widmark.';

const howTo = [
  {
    name: 'Konfigurasikan profil fisik subjek',
    text: 'Masukkan berat badan, jenis kelamin biologis, dan tingkat hidrasi. Parameter biologis ini langsung memengaruhi nilai faktor Widmark (r) yang menentukan volume distribusi alkohol dalam tubuh.',
  },
  {
    name: 'Tentukan kondisi lambung',
    text: 'Pilih kondisi lambung kosong, makanan ringan, atau makanan berat. Pilihan ini menyesuaikan konstanta laju penyerapan (ka) untuk menunjukkan efek makanan pada kurva kadar alkohol.',
  },
  {
    name: 'Tambahkan minuman ke linimasa',
    text: 'Masukkan minuman dengan menentukan volume dalam mililiter, kadar alkohol (ABV), dan jam konsumsi relatif terhadap awal simulasi.',
  },
  {
    name: 'Analisis grafik kadar alkohol darah',
    text: 'Periksa kurva kadar alkohol darah (BAC) selama 12 jam. Bandingkan kadar puncak, waktu mencapai puncak, dan total waktu untuk kembali sadar terhadap batas berkendara.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Apa itu rumus Widmark dan bagaimana penerapannya dalam ilmu forensik?',
    answer: 'Rumus Widmark adalah model matematika yang dikembangkan oleh Erik M. P. Widmark pada tahun 1932. Rumus ini memperkirakan kadar alkohol darah berdasarkan massa alkohol yang dikonsumsi, berat badan, faktor distribusi (r), dan laju eliminasi linier. Toksikolog forensik menggunakan rumus ini untuk kalkulasi retrospektif guna menentukan kadar alkohol seseorang pada waktu kejadian tertentu.',
  },
  {
    key: 'faq-2',
    question: 'Bagaimana makanan di lambung memengaruhi bentuk kurva kadar alkohol darah?',
    answer: 'Makanan dalam lambung memperlambat pengosongan lambung, sehingga menghambat alkohol masuk ke usus halus yang merupakan tempat penyerapan utama. Dalam simulasi ini, efek tersebut dimodelkan dengan menurunkan konstanta laju penyerapan (ka), yang menggeser puncak kadar alkohol menjadi lebih lambat dan menurunkan tinggi puncak kadar alkohol.',
  },
  {
    key: 'faq-3',
    question: 'Mengapa pembersihan alkohol mengikuti kinetika orde nol dan bukan orde satu?',
    answer: 'Sebagian besar zat obat dibersihkan melalui kinetika orde satu, yang berarti laju eliminasi sebanding dengan konsentrasi. Pembersihan alkohol mengikuti kinetika orde nol karena enzim hati utama, alkohol dehidrogenase (ADH), menjadi jenuh sepenuhnya pada konsentrasi yang sangat rendah (sekitar 0,02 g/L). Akibatnya, hati mendetoksifikasi alkohol dengan kecepatan maksimum yang konstan.',
  },
  {
    key: 'faq-4',
    question: 'Faktor biologis apa yang memengaruhi variasi faktor Widmark r?',
    answer: 'Faktor Widmark r mewakili rasio kandungan air dalam tubuh terhadap berat total. Karena alkohol bersifat hidrofilik (larut air) dan lipofobik (tidak larut lemak), alkohol hanya menyebar di air tubuh. Jaringan otot mengandung persentase air yang tinggi, sedangkan lemak sangat sedikit. Seseorang dengan lemak tubuh tinggi memiliki faktor r lebih kecil, sehingga menghasilkan BAC lebih tinggi.',
  },
  {
    key: 'faq-5',
    question: 'Apakah simulator ini dapat digunakan untuk pembuktian hukum kelayakan berkendara?',
    answer: 'Sama sekali tidak. Simulator ini hanyalah alat edukasi. Pada kenyataannya, variasi genetik enzim, kesehatan hati, obat-obatan, kelelahan, dan kondisi makan menghasilkan perbedaan besar. Jangan pernah mengandalkan simulasi matematika untuk memutuskan kemampuan Anda mengemudi secara aman.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profil Subjek',
    weight: 'Berat (kg)',
    sex: 'Jenis Kelamin',
    male: 'Pria',
    female: 'Wanita',
    hydration: 'Tingkat Hidrasi',
    hydrationLow: 'Rendah',
    hydrationNormal: 'Normal',
    hydrationHigh: 'Tinggi',
    stomachState: 'Kondisi Lambung',
    stomachEmpty: 'Kosong (Cepat)',
    stomachLight: 'Makanan Ringan (Sedang)',
    stomachFull: 'Makanan Berat (Lambat)',
    drinksTimeline: 'Garis Waktu Konsumsi',
    addDrink: 'Tambah Minuman',
    drinkVolume: 'Volume (ml)',
    drinkAbv: 'Kadar Alkohol (% vol)',
    drinkTime: 'Waktu (Jam)',
    drinksList: 'Minuman Terkonsumsi',
    remove: 'Hapus',
    beer: 'Bir (330ml, 5%)',
    wine: 'Anggur (150ml, 12%)',
    spirits: 'Minuman Keras (40ml, 40%)',
    peakBac: 'Puncak BAC',
    timeToSober: 'Waktu Sadar',
    sober: 'Sadar',
    currentBac: 'BAC Saat Ini',
    drivingLimitAlert: 'Status Mengemudi',
    safeLimit: 'Di Bawah Batas',
    warningLimit: 'Batas Peringatan Terlampaui',
    dangerLimit: 'Batas Bahaya Terlampaui',
    graphTitle: 'Konsentrasi Alkohol Darah selama 12 Jam',
    timeAxisLabel: 'Waktu (Jam)',
    bacAxisLabel: 'Kadar (g/L)',
    legalLimitText: 'Batas Hukum Standar',
    noDrinksText: 'Tambahkan minuman untuk simulasi.',
    hours: 'jam',
    soberStatus: 'Sadar dalam {time} jam',
    neverSober: 'Lebih dari 12 jam',
    noteDisclaimer: 'Hanya untuk tujuan edukasi. Jangan mengemudi setelah minum.',
    noteWidmark: 'Berdasarkan persamaan Widmark dan eliminasi hati linier.',
  },
  seo: [
    {
      type: 'title',
      text: 'Toksikologi Forensik dan Farmakokinetika Etanol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pemahaman tentang <strong>penyerapan, distribusi, dan eliminasi etanol</strong> adalah kebutuhan dasar dalam ilmu forensik dan rekonstruksi kecelakaan lalu lintas. Ketika alkohol dikonsumsi, alkohol masuk ke lambung di mana sebagian kecil langsung diserap ke dalam darah. Namun, sebagian besar penyerapan terjadi di duodenum dan usus halus karena luas permukaannya yang sangat besar. Laju pengosongan lambung merupakan tahap pembatas utama dari penyerapan alkohol, yang menjelaskan mengapa keberadaan makanan memainkan peran penting dalam menurunkan kurva kadar alkohol darah.',
    },
    {
      type: 'paragraph',
      html: 'Simulator interaktif ini menggunakan persamaan klasik dari Erik M. P. Widmark dengan model kompartemen kontinu selama 12 jam. Dengan menyesuaikan parameter fisik, pengguna dapat memvisualisasikan akumulasi matematika dan penurunan kadar alkohol secara linier dari waktu ke waktu.',
    },
    {
      type: 'title',
      text: 'Penurunan Rumus Ekuasi Widmark',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rumus dasar Widmark memperkirakan kadar alkohol darah dengan asumsi penyerapan instan di seluruh volume air tubuh: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Di mana <em>A</em> adalah massa alkohol murni dalam gram, <em>W</em> adalah berat badan subjek dalam kilogram, dan <em>r</em> adalah faktor distribusi atau rasio volume distribusi. Parameter <em>&beta;</em> mewakili laju eliminasi per jam, dan <em>t</em> adalah waktu yang telah berlalu sejak awal penyerapan.',
    },
    {
      type: 'paragraph',
      html: 'Untuk menghitung massa etanol murni dari volume minuman, kita mengalikan volume (ml) dengan persentase alkohol (ABV) dan massa jenis etanol (sekitar 0,8 g/ml). Sebagai contoh, 330 ml bir dengan 5% ABV mengandung 13,2 gram etanol murni. Massa ini diencerkan berdasarkan air tubuh total subjek. Simulator ini menyesuaikan faktor r secara dinamis berdasarkan jenis kelamin biologis (pria 0,68 dan wanita 0,55) serta status hidrasi.',
    },
    {
      type: 'title',
      text: 'Variabel Fisiologis dan Pengaruhnya terhadap Volume Distribusi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Volume distribusi etanol dipengaruhi oleh komposisi tubuh karena alkohol bersifat hidrofilik dan lipofobik. Jaringan otot mengandung sekitar 75% air, sedangkan jaringan lemak hampir tidak mengandung air. Oleh karena itu, orang dengan massa otot tinggi akan memiliki volume distribusi yang lebih besar (faktor r lebih tinggi) dan menunjukkan BAC puncak yang lebih rendah daripada orang dengan berat sama yang memiliki persentase lemak tubuh lebih tinggi. Dehidrasi juga menurunkan volume air tubuh total dan meningkatkan tinggi puncak BAC.',
    },
    {
      type: 'table',
      headers: ['Variabel Fisiologis', 'Mekanisme Biologis', 'Efek Farmakokinetik', 'Signifikansi Forensik'],
      rows: [
        ['Berat Badan', 'Menentukan skala volume total air dalam tubuh.', 'Berbanding terbalik dengan kadar BAC puncak.', 'Menjadi dasar volume awal untuk kalkulasi retrospektif.'],
        ['Jenis Kelamin', 'Memengaruhi proporsi khas antara otot dan lemak tubuh.', 'Faktor r lebih rendah pada wanita (0,55) dibanding pria (0,68).', 'Menjelaskan kepekaan biologis yang lebih tinggi pada wanita.'],
        ['Status Hidrasi', 'Mengubah jumlah air bebas dalam kompartemen tubuh.', 'Dehidrasi menurunkan r sebesar 0,05, menaikkan kurva.', 'Menyesuaikan toleransi kalkulasi pada kondisi kelelahan.'],
        ['Kondisi Lambung', 'Makanan memperlambat pengosongan lambung.', 'Menurunkan laju absorpsi ka, meratakan puncak kurva.', 'Menjelaskan nilai kadar alkohol yang rendah setelah makan besar.'],
      ],
    },
    {
      type: 'title',
      text: 'Kinetika Eliminasi: Pembersihan Orde Nol di Hati',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Setelah masuk ke sirkulasi darah, alkohol dimetabolisme terutama di hati oleh enzim alkohol dehidrogenase (ADH). Enzim ini mengalami kejenuhan pada konsentrasi yang sangat rendah (0,02 g/L), sehingga metabolisme berlangsung dengan kecepatan konstan tanpa dipengaruhi kadar alkohol dalam darah. Rata-rata laju eliminasi forensik (&beta;<sub>60</sub>) ditetapkan sebesar 0,15 g/L per jam. Penurunan konstan ini menghasilkan kemiringan linier lurus pada kurva hingga mencapai angka nol.',
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
