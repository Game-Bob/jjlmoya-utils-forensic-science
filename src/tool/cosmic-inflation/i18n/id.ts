import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-inflasi-kosmik';
const description = 'Hitung ekspansi eksponensial alam semesta awal selama zaman inflasi kosmik.';
const title = 'Kalkulator Inflasi Kosmik: Ekspansi Alam Semesta Awal';

const howTo = [
  {
    name: 'Pilih nilai',
    text: 'Seret slider untuk melihat hasil.',
  },
  {
    name: 'Bandingkan faktor skala',
    text: 'Lihat berapa banyak orde magnitudo ruang telah mengembang.',
  },
  {
    name: 'Analisis distorsi dinamis',
    text: 'Kanvas menunjukkan ekspansi ruang.',
  },
];

const faq = [
  {
    "question": "Apa itu inflasi kosmik dan mengapa itu terjadi?",
    "answer": "Inflasi kosmik adalah teori yang menyatakan adanya ekspansi ruang yang sangat cepat dan eksponensial pada detik-detik awal alam semesta, tepatnya sekitar 10^-36 detik setelah Big Bang. Hal ini terjadi karena medan skalar teoritis, yang disebut inflaton, berada dalam keadaan densitas energi tinggi dari vakum palsu, yang menghasilkan tekanan negatif dan gaya gravitasi tolak-menolak yang meregangkan jaringan ruang-waktu."
  },
  {
    "question": "Apa arti dari jumlah e-folds?",
    "answer": "Jumlah e-folds mengukur durasi fase ekspansi eksponensial. Satu e-fold mewakili waktu di mana ukuran alam semesta dikalikan dengan bilangan Euler (sekitar 2,718). Jika alam semesta mengalami N e-folds, faktor skalanya meningkat sebesar faktor e^N. Model kosmologi standar membutuhkan setidaknya 50 hingga 60 e-folds untuk memecahkan masalah kerataan dan horison dengan benar."
  },
  {
    "question": "Bagaimana inflasi memecahkan masalah horison?",
    "answer": "Masalah horison mempertanyakan mengapa wilayah alam semesta yang sangat jauh memiliki suhu radiasi latar belakang kosmik yang hampir identik, meskipun kecepatan cahaya tidak memungkinkan mereka untuk berinteraksi untuk mencapai keseimbangan. Inflasi memecahkan hal ini dengan menunjukkan bahwa, sebelum ekspansi eksponensial, seluruh alam semesta terobservasi adalah wilayah kecil yang terhubung secara kausal dalam keseimbangan termal, yang seketika meregang melampaui horison visual."
  },
  {
    "question": "Apa itu masalah kerataan dan bagaimana cara menyelesaikannya?",
    "answer": "Kerapatan energi alam semesta saat ini sangat dekat dengan kerapatan kritis, yang berarti ruang itu rata dengan margin kesalahan minimal. Tanpa inflasi, penyimpangan awal dari kerataan akan tumbuh secara eksponensial seiring waktu, membutuhkan penalaan halus yang mustahil pada saat Big Bang. Inflasi meregangkan kelengkungan spasial dengan sangat kuat sehingga kelengkungan awal diencerkan, mirip dengan bagaimana permukaan bola raksasa tampak rata secara lokal."
  },
  {
    "question": "Apa itu proses pemanasan ulang atau reheating?",
    "answer": "Pemanasan ulang adalah transisi termal yang menandai akhir dari inflasi. Selama inflasi, alam semesta mendingin hingga suhu mendekati nol mutlak karena ekspansi volume secara eksponensial. Ketika medan inflaton meluruh ke titik minimum potensialnya, sisa energinya dituangkan ke dalam ruang sebagai partikel Model Standar melalui interaksi kuantum, mengisi kosmos dengan plasma panas dan padat yang memulai fase Big Bang tradisional."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulator Inflasi Kosmik',
    efoldsLabel: 'Jumlah e-folds (N)',
    energyLabel: 'Skala Energi Awal (GeV)',
    scaleFactorResult: 'Pertumbuhan Faktor Skala',
    reheatingTempResult: 'Perkiraan Suhu Pemanasan Ulang',
    chartTitle: 'Distorsi Jaringan Ruang-Waktu',
    presetGuth: 'Standar (Guth)',
    presetChaotic: 'Kaois',
    presetExtreme: 'Batas Ekstrim',
    efoldsTooltip: 'Model khas memprediksi antara 50 dan 60 e-folds.',
    energyTooltip: 'Skala GUT adalah sekitar 10^16 GeV.',
    scaleFactorTooltip: 'Mempresentasikan faktor ekspansi total.',
    reheatingTooltip: 'Suhu pada akhir inflasi.',
    analogyInsuff: 'Inflasi moderat. Ekspansi ini tidak mencukupi.',
    analogyProton: 'Alam semesta mengembang dari ukuran proton ke ukuran galaksi dalam waktu singkat.',
    analogyObservable: 'Alam semesta mengembang dari skala subatomik ke ukuran yang lebih besar dari alam semesta terobservasi dalam 10^-32 detik.',
  },
  seo: [
  {
    "type": "title",
    "text": "KOSMOLOGI: Teori Inflasi Kosmik dan Ekspansi Ruang-Waktu",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Inflasi kosmik mewakili pilar fundamental yang menghubungkan fisika partikel dengan astrofisika observasional. Diusulkan pada awal 1980-an oleh fisikawan seperti Alan Guth dan Andrei Linde, teori ini menyatakan bahwa alam semesta awal mengalami fase ekspansi eksponensial yang didorong oleh kerapatan energi medan skalar yang dikenal sebagai inflaton. Ekspansi ini meningkatkan volume alam semesta dengan faktor setidaknya 10^26 dalam waktu yang sangat singkat, memecahkan paradoks mendalam dari model Big Bang klasik dan menyediakan kerangka kerja teoritis bagi pembentukan struktur kosmik."
  },
  {
    "type": "title",
    "text": "Perbandingan Model dan Parameter Inflasi",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Potensial yang berbeda untuk medan inflaton menghasilkan tingkat ekspansi dan suhu pemanasan ulang yang berbeda. Berikut adalah karakteristik dari model-model utama yang disimulasikan dalam kalkulator ini:"
  },
  {
    "type": "table",
    "headers": [
      "Model Inflasi",
      "Rentang e-folds (N)",
      "Skala Energi (GeV)",
      "Hasil Fisik dan Dinamis"
    ],
    "rows": [
      [
        "<strong>Standar Guth</strong>",
        "50 - 60",
        "10^16",
        "Memecahkan kerataan dan horison; inflasi berakhir melalui nukleasi gelembung dalam transisi fase lambat."
      ],
      [
        "<strong>Inflasi Kacau (Linde)</strong>",
        "60 atau lebih",
        "10^16",
        "Inflaton menggelinding perlahan menuruni potensial parabolik sederhana; menghindari masalah transisi fase yang tiba-tiba."
      ],
      [
        "<strong>Batas Ekstrim</strong>",
        "90 atau lebih",
        "10^19 (Planck)",
        "Energi mendekati batas gravitasi kuantum; peregangan masif dari ruang-waktu primordial."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Memecahkan Masalah Big Bang Klasik",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Sebelum inflasi dikembangkan, kosmologi Big Bang klasik menderita ketidakkonsistenan teoritis yang parah. Masalah horison, yang berasal dari keseragaman latar belakang gelombang mikro kosmik, dan masalah kerataan, yang terkait dengan kerapatan kritis ruang, menunjukkan perlunya kondisi awal yang sangat tidak mungkin. Inflasi secara alami memecahkan kedua kesulitan tersebut dengan meregangkan mikro-wilayah yang homogen secara termal dan meratakan geometri spasial lokal secara dinamis. Selain itu, ini mengencerkan konsentrasi monopol magnetik yang seharusnya terbentuk dalam jumlah banyak di alam semesta awal."
  },
  {
    "type": "title",
    "text": "Bukti Astronomi Observasional dari Model Inflasi",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Teori inflasi kosmik bukan sekadar konstruksi matematika yang elegan; teori ini memiliki bukti tidak langsung yang kuat yang dikonfirmasi oleh satelit luar angkasa seperti COBE, WMAP, dan Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Homogenitas CMB:</strong> Radiasi latar belakang gelombang mikro kosmik menunjukkan suhu seragam dengan variasi hanya 1 bagian dalam 100.000 pada sisi berlawanan dari langit yang terlihat.",
      "<strong>Geometri Rata:</strong> Pengukuran kelengkungan alam semesta mengonfirmasi bahwa ia datar secara spasial dengan margin kesalahan kurang dari 1%, konsisten dengan peregangan inflasi masif.",
      "<strong>Absennya Monopol:</strong> Menjelaskan secara logis ketiadaan total monopol magnetik bermassa besar yang stabil di alam semesta terobservasi kita.",
      "<strong>Spektrum Fluktuasi:</strong> Anisotropi yang diamati pada latar belakang kosmik menunjukkan indeks spektral sedikit di bawah 1, persis seperti yang diprediksi oleh model inflaton slow-roll."
    ]
  },
  {
    "type": "title",
    "text": "Fluktuasi Kuantum dan Benih Galaksi",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Aspek paling luar biasa dari inflasi kosmik adalah kemampuannya untuk bertindak sebagai mikroskop kosmik. Fluktuasi kuantum mikroskopis dari medan inflaton diregangkan ke skala astronomi selama periode ekspansi eksponensial. Pada akhir inflasi, fluktuasi ini membeku sebagai variasi kerapatan materi (perturbasi primordial). Perbedaan kerapatan ini berfungsi sebagai benih gravitasi yang, selama miliaran tahun, menarik materi bersama-sama untuk melahirkan bintang pertama, galaksi, gugus galaksi, dan jaring kosmik yang kita amati saat ini."
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
      description: description,
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
