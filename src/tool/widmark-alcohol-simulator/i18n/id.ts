import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-kadar-alkohol-widmark';
const title = 'Simulator Kadar Alkohol Darah Widmark';
const description = 'Simulasikan penyerapan, distribusi, dan eliminasi alkohol dalam tubuh manusia menggunakan formula Widmark.';

const howTo = [
  {
    name: 'Konfigurasikan profil fisik subjek',
    text: 'Sesuaikan berat badan, jenis kelamin biologis, dan tingkat hidrasi.',
  },
  {
    name: 'Tentukan kondisi lambung',
    text: 'Pilih antara lambung kosong, makanan ringan, atau makanan berat.',
  },
  {
    name: 'Tambahkan minuman',
    text: 'Masukkan volume, kadar alkohol (ABV), dan waktu konsumsi.',
  },
  {
    name: 'Analisis kurva',
    text: 'Periksa perubahan grafik kadar alkohol dan estimasi waktu sadar.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Apa itu formula Widmark?',
    answer: 'Formula Widmark adalah model matematika untuk memperkirakan konsentrasi alkohol dalam darah.',
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
      html: 'Penyerapan, distribusi, dan eliminasi etanol dalam tubuh manusia adalah konsep kunci dalam ilmu forensik. Sebagian besar alkohol diserap di usus halus. Makanan di lambung memperlambat pengosongan lambung, sehingga menurunkan puncak kadar alkohol dalam darah.',
    },
    {
      type: 'paragraph',
      html: 'Model ini bekerja dengan persamaan: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Eliminasi hati mengikuti kinetika orde nol dengan penurunan linier konstan sekitar 0.15 g/L per jam.',
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
