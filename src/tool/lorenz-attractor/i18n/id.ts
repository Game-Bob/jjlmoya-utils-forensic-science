const slug = 'atraktor-lorenz';
const title = 'Simulator Kekacauan Atraktor Lorenz Efek Kupu kupu dalam 3D';
const description = 'Jelajahi teori kekacauan dengan simulasi atraktor Lorenz 3D interaktif ini. Visualisasikan efek kupu-kupu.';

const howTo = [
  {
    "name": "Putar kanvas",
    "text": "Klik dan seret pada viewport 3D untuk memutar atraktor."
  },
  {
    "name": "Sesuaikan slider",
    "text": "Ubah parameter Sigma, Rho, dan Beta untuk mengamati transisi kekacauan."
  },
  {
    "name": "Amati divergensi",
    "text": "Perhatikan bagaimana jarak antara kedua lintasan tumbuh secara eksponensial."
  },
  {
    "name": "Jeda dan atur ulang",
    "text": "Gunakan kontrol untuk menjeda simulasi atau mengatur ulang parameter."
  }
];

const faq = [
  {
    "question": "Apa itu Atraktor Lorenz?",
    "answer": "Atraktor Lorenz adalah serangkaian solusi kacau dari sistem Lorenz."
  },
  {
    "question": "Apa itu Efek Kupu-kupu?",
    "answer": "Ketergantungan sensitif pada kondisi awal dalam sistem non-linear."
  },
  {
    "question": "Apa arti parameter tersebut?",
    "answer": "Sigma mewakili angka Prandtl, Rho angka Rayleigh, dan Beta rasio aspek geometri."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Disalin",
  "noHistory": "Tidak ada riwayat",
  "load": "Muat",
  "delete": "Hapus",
  "title": "Atraktor Lorenz",
  "subTitle": "Kekacauan Deterministik",
  "parameterControls": "Parameter Sistem",
  "simulationSpeed": "Kecepatan (dt)",
  "initialPerturbation": "Gangguan Awal (dx)",
  "trajectories": "Lintasan",
  "distance": "Jarak Divergensi",
  "exponentialGrowth": "Divergensi Eksponensial",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Koordinat",
  "divergenceExplanation": "Grafik divergensi menunjukkan jarak Euclidean antara kedua lintasan dari waktu ke waktu."
},
  seo: [
    { type: 'title', text: "Kekacauan Deterministik: Memahami Persamaan Lorenz", level: 2 },
    { type: 'paragraph', html: "Sistem Lorenz adalah formulasi bersejarah dalam dinamika nonlinear dan teori kekacauan. Awalnya diturunkan pada tahun 1963 oleh meteorolog dan matematikawan <strong>Edward Lorenz</strong>, model ini lahir dari representasi sederhana konveksi atmosfer. Lorenz menyederhanakan persamaan dinamika fluida yang kompleks menjadi tiga persamaan diferensial biasa yang digabungkan. Penemuannya bahwa persamaan deterministik sederhana ini dapat menghasilkan perilaku kompleks, non-periodik, dan kacau mengubah pemahaman kita tentang sistem fisik." },
    { type: 'paragraph', html: "Sistem ini didefinisikan oleh tiga persamaan diferensial tergabung yang melacak koordinat dalam ruang fase tiga dimensi seiring waktu:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> Menjelaskan laju gerak konvektif. Parameter &sigma; (bilangan Prandtl) mewakili rasio viskositas fluida terhadap konduktivitas termal.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> Mewakili perbedaan suhu antara arus konvektif naik dan turun. &rho; (bilangan Rayleigh) mewakili intensitas pemanasan konvektif.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> Melacak distorsi profil suhu vertikal. &beta; adalah rasio aspek geometrik sel konvektif.",
      ],
    },
    { type: 'title', text: "Efek Kupu-kupu: Ketergantungan Sensitif pada Kondisi Awal", level: 3 },
    { type: 'paragraph', html: "Ciri khas sistem kacau adalah <strong>ketergantungan sensitif pada kondisi awal</strong>, yang populer dikenal sebagai <strong>Efek Kupu-kupu</strong>. Simulator ini menunjukkan hal ini dengan menjalankan dua lintasan (T1 dalam Cyan dan T2 dalam Merah Muda) yang dimulai dengan pemisahan kecil. Pada awalnya, keduanya menempuh jalur yang hampir sama. Setelah waktu singkat, perbedaan awal diperkuat oleh suku-suku nonlinear sistem, dan jalur-jalur tersebut menyimpang sepenuhnya." },
    {
      type: 'table',
      headers: ["Parameter","Nilai Standar","Konteks Fisik","Perilaku saat Diubah"],
      rows: [
        ["&sigma; (Sigma)","10.0","Bilangan Prandtl","Menentukan gesekan internal fluida. Nilai yang lebih tinggi mempercepat reaksi perubahan kecepatan terhadap gradien suhu."],
        ["&rho; (Rho)","28.0","Bilangan Rayleigh","Penggerak utama kekacauan. Di bawah &rho; = 1, titik asal adalah satu-satunya titik stabil. Pada &rho; = 28, sistem sepenuhnya kacau."],
        ["&beta; (Beta)","8/3 (2.667)","Rasio Aspek Geometrik","Mengontrol rasio lebar-tinggi sel konveksi. Memodifikasi skala dan kecepatan rotasi orbit."],
      ],
    },
    { type: 'title', text: "Ruang Fase, Penarik Aneh, dan Fraktal", level: 3 },
    { type: 'paragraph', html: "Dalam fisika klasik, lintasan akhirnya stabil di titik tetap atau berulang sebagai siklus batas. Sistem Lorenz tidak melakukan keduanya: jalurnya melingkar tanpa batas dalam tiga dimensi tanpa pernah bersilangan, membentuk <strong>penarik aneh</strong> dengan geometri fraktal (dimensi Hausdorff sekitar 2,06)." },
    { type: 'title', text: "Penerapan Teori Kekacauan dalam Ilmu Pengetahuan", level: 3 },
    { type: 'paragraph', html: "Pelajaran dari penarik Lorenz jauh melampaui prakiraan cuaca dan telah mempengaruhi banyak bidang ilmu modern:" },
    {
      type: 'list',
      items: [
      "<strong>Meteorologi:</strong> Menetapkan batas fundamental prediktabilitas cuaca, yang mengarah ke metode prakiraan ansambel.",
      "<strong>Kriptografi:</strong> Sifat deterministik namun tidak dapat diprediksi dari orbit kacau digunakan untuk menghasilkan kunci semu-acak yang aman.",
      "<strong>Kardiologi:</strong> Digunakan untuk memodelkan ritme jantung, di mana jantung sehat menunjukkan karakteristik kacau.",
      "<strong>Teknik:</strong> Membantu merancang struktur stabil dengan menganalisis dan menghindari resonansi kacau dalam jembatan gantung.",
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
