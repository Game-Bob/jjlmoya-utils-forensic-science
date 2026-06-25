import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-estimasi-tinggi-badan-forensik-trotter-gleser';
const title = 'Estimator Tinggi Badan Forensik';
const description = 'Estimasi tinggi badan semasa hidup dari tulang panjang manusia menggunakan persamaan regresi Trotter dan Gleser dengan mempertimbangkan jenis kelamin, leluhur, dan koreksi usia.';

const howTo = [
  {
    name: 'Pilih tulang dan variabel',
    text: 'Pilih tulang panjang spesifik yang akan diukur (Femur, Tibia, Humerus, Fibula, Radius, atau Ulna) bersama dengan jenis kelamin biologis, kelompok leluhur, dan usia.'
  },
  {
    name: 'Tentukan panjang tulang',
    text: 'Sesuaikan jangka sorong pada papan osteometrik virtual untuk menentukan panjang maksimum tulang dalam sentimeter.'
  },
  {
    name: 'Hitung tinggi estimasi',
    text: 'Kalkulator menerapkan formula regresi Trotter-Gleser, mengurangi 0,06 cm per tahun untuk individu berusia di atas 30 tahun.'
  },
  {
    name: 'Tafsirkan rentang dan kesalahan',
    text: 'Tinjau estimasi tinggi badan, Standar Kesalahan Estimasi (SEE), dan rentang prediksi 95%.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Bagaimana cara kerja persamaan regresi Trotter dan Gleser?',
    answer: 'Persamaan ini menggunakan regresi linear untuk memodelkan korelasi antara tinggi badan semasa hidup dan panjang tulang.'
  },
  {
    key: 'faq-2',
    question: 'Mengapa alat ini membutuhkan jenis kelamin biologis dan kelompok leluhur?',
    answer: 'Proporsi tubuh manusia bervariasi berdasarkan jenis kelamin dan populasi geografis. Laki-laki umumnya memiliki rasio anggota tubuh terhadap tinggi badan yang berbeda dengan perempuan.'
  },
  {
    key: 'faq-3',
    question: 'Mengapa terdapat koreksi usia dalam estimasi tinggi badan?',
    answer: 'Tinggi badan berkurang setelah usia dewasa muda akibat kompresi bantalan tulang belakang. Trotter dan Gleser merekomendasikan pengurangan 0,06 cm setiap tahun di atas 30 tahun.'
  },
  {
    key: 'faq-4',
    question: 'Apa itu Standar Kesalahan Estimasi (SEE)?',
    answer: 'SEE mewakili standar deviasi dari residu dalam model regresi, mengukur keakuratan estimasi.'
  },
  {
    key: 'faq-5',
    question: 'Tulang panjang mana yang memberikan estimasi paling akurat?',
    answer: 'Tulang anggota gerak bawah, khususnya femur dan tibia, memberikan estimasi paling akurat karena berkontribusi langsung pada tinggi badan.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Estimator Tinggi Badan Forensik',
    desc: 'Simulasikan pengukuran papan osteometrik dan hitung tinggi badan semasa hidup menggunakan regresi linear.',
    configTitle: 'Konfigurasi Osteometrik',
    boneLabel: 'Spesimen Tulang',
    lengthLabel: 'Panjang Tulang',
    unitLabel: 'Sistem Satuan',
    metricOption: 'Metrik (cm)',
    imperialOption: 'Imperial (inci)',
    sexLabel: 'Jenis Kelamin Biologis',
    ancestryLabel: 'Kelompok Leluhur',
    ageLabel: 'Usia saat Kematian (tahun)',
    maleOption: 'Laki-laki',
    femaleOption: 'Perempuan',
    whiteOption: 'Putih / Kaukasia',
    blackOption: 'Hitam / Afro-Amerika',
    asianOption: 'Asia / Mongoloid',
    femurName: 'Femur (Tulang paha)',
    tibiaName: 'Tibia (Tulang kering)',
    humerusName: 'Humerus (Tulang lengan atas)',
    fibulaName: 'Fibula (Tulang betis)',
    radiusName: 'Radius (Tulang pengumpil)',
    ulnaName: 'Ulna (Tulang hasta)',
    resultsTitle: 'Hasil Estimasi Tinggi Badan',
    estimateLabel: 'Estimasi Tinggi Badan',
    errorLabel: 'Kesalahan Standar (SEE)',
    rangeLabel: 'Rentang Prediksi 95%',
    formulaLabel: 'Persamaan Regresi',
    formulaBoneFactor: 'Faktor Tulang',
    formulaConstant: 'Konstanta',
    formulaAgeCorrection: 'Koreksi Usia',
    formulaStdError: 'Kesalahan Standar (SEE)',
    fallbackAlert: 'Tidak ada persamaan Trotter-Gleser langsung untuk perempuan Asia; menggunakan persamaan referensi perempuan Kaukasia sebagai alternatif forensik.',
    boardInstructions: 'Geser jangka sorong atau gunakan input angka untuk mengukur tulang.',
    rulerLabelMetric: 'Skala Metrik (mm)',
    rulerLabelImperial: 'Skala Imperial (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Panduan Lengkap Estimasi Tinggi Badan dalam Antropologi Forensik',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Estimasi tinggi badan merupakan komponen fundamental dari profil biologis dalam antropologi fisik, bioarkeologi, dan ilmu forensik. Ketika sisa-sisa kerangka ditemukan, merekonstruksi tinggi badan semasa hidup membantu penyelidik mencocokkan data dengan catatan orang hilang.'
    },
    {
      type: 'paragraph',
      html: 'Simulator papan osteometrik digital ini memungkinkan siswa dan praktisi mengeksplorasi model regresi linear yang dikembangkan oleh Mildred Trotter dan Goldine C. Gleser.'
    },
    {
      type: 'title',
      text: 'Memahami Rumus Regresi Trotter-Gleser',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter dan Goldine C. Gleser mempublikasikan persamaan mereka pada tahun 1952 dan 1958. Rumus-rumusnya berbentuk linear: Tinggi = (Kemiringan × Panjang Tulang) + Konstanta ± Standar Kesalahan. Persamaan terpisah digunakan berdasarkan jenis kelamin dan leluhur.'
    },
    {
      type: 'table',
      headers: ['Spesimen Tulang Panjang', 'Model Laki-laki Kaukasia', 'Model Perempuan Kaukasia', 'Kegunaan & Keandalan Forensik'],
      rows: [
        ['Femur (Tulang Paha)', 'Tinggi = 2.32 × Femur + 65.53 ± 3.94 cm', 'Tinggi = 2.47 × Femur + 54.10 ± 3.72 cm', 'Keandalan tertinggi. Femur adalah tulang pembawa beban utama yang berkorelasi langsung dengan tinggi berdiri.'],
        ['Tibia (Tulang Kering)', 'Tinggi = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Tinggi = 2.90 × Tibia + 61.53 ± 3.66 cm', 'Keandalan tinggi. Pengukuran harus mengecualikan maleolus medial sesuai dengan protokol asli Trotter.'],
        ['Fibula (Tulang Betis)', 'Tinggi = 2.60 × Fibula + 75.50 ± 3.86 cm', 'Tinggi = 2.93 × Fibula + 59.61 ± 3.57 cm', 'Sangat andal, namun fibula tipis dan sering kali hancur dalam konteks arkeologis.'],
        ['Humerus (Lengan Atas)', 'Tinggi = 2.89 × Humerus + 78.10 ± 4.57 cm', 'Tinggi = 3.36 × Humerus + 57.97 ± 4.45 cm', 'Keandalan sedang. Anggota gerak atas tidak menahan beban tubuh.'],
        ['Radius (Pengumpil)', 'Tinggi = 3.79 × Radius + 79.42 ± 4.66 cm', 'Tinggi = 4.74 × Radius + 54.93 ± 4.45 cm', 'Keandalan lebih rendah karena variasi proporsional lengan bawah yang tinggi.']
      ]
    },
    {
      type: 'title',
      text: 'Pengurangan Tinggi Badan Terkait Usia',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Tinggi badan semasa hidup tidak statis selama masa dewasa. Mulai usia 30 tahun, tinggi badan berkurang perlahan karena kompresi cakram tulang belakang. Trotter dan Gleser menyarankan pengurangan 0,06 cm untuk setiap tahun di atas 30 tahun: Kehilangan = 0,06 × (Usia - 30).'
    },
    {
      type: 'title',
      text: 'Perbedaan Metodologis Pengukuran Tibia',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Masalah metodologis yang terkenal menyangkut pengukuran tibia. Pada studi 1952, tibia diukur tanpa maleolus medial, sedangkan pada studi 1958 maleolus disertakan. Menerapkan rumus 1952 pada tibia yang diukur dengan maleolus menyebabkan estimasi yang berlebihan.'
    },
    {
      type: 'title',
      text: 'Tren Sekuler dan Data Referensi Historis',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Sampel referensi Trotter-Gleser lahir pada akhir abad ke-19 dan awal abad ke-20. Karena peningkatan gizi, populasi modern mengalami peningkatan tinggi rata-rata (tren sekuler). Antropolog modern saat ini sering melengkapi analisis menggunakan database baru seperti FORDISC.'
    }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
