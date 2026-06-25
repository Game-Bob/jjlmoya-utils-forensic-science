import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-uji-dugaan-darah-forensik';
const title = 'Simulator Uji Dugaan Darah Forensik';
const description = 'Simulasikan uji dugaan darah menggunakan reagen Kastle-Meyer dan Luminol. Bedakan darah asli dari hasil positif palsu.';

const howTo = [
  {
    "name": "Pilih Sampel",
    "text": "Pilih sampel dari rak untuk diuji, bisa berupa darah atau bahan positif palsu."
  },
  {
    "name": "Pilih Metode Uji",
    "text": "Tentukan untuk menggunakan tes warna Kastle-Meyer atau tes pendaran Luminol."
  },
  {
    "name": "Terapkan Reagen",
    "text": "Tambahkan tetesan reagen Kastle-Meyer diikuti Hidrogen Peroksida, atau langsung gunakan Luminol."
  },
  {
    "name": "Tafsirkan Reaksi",
    "text": "Amati perubahan warna atau pendaran biru dalam gelap untuk mengklasifikasikan reaksi."
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "Mengapa disebut uji dugaan?",
    "answer": "Uji dugaan adalah skrining awal berdasarkan aktivitas katalitik. Tes ini sangat sensitif tetapi kurang spesifik, sehingga memerlukan uji konfirmasi lanjutan."
  },
  {
    "key": "faq-2",
    "question": "Apa penyebab positif palsu pada tes Kastle-Meyer?",
    "answer": "Tes ini bergantung pada aktivitas heme. Zat pengoksidasi, ion logam (seperti besi pada karat), atau peroksidase tumbuhan dapat mengkatalisis reaksi."
  },
  {
    "key": "faq-3",
    "question": "Bagaimana reaksi Luminol terjadi?",
    "answer": "Luminol bereaksi dengan hidrogen peroksida dengan bantuan katalis besi dari hemoglobin. Reaksi ini memancarkan cahaya biru saat kembali ke keadaan dasar."
  },
  {
    "key": "faq-4",
    "question": "Apakah pemutih pakaian memicu positif palsu?",
    "answer": "Ya, natrium hipoklorit adalah oksidator kuat yang langsung mengoksidasi fenolftalin atau luminol tanpa bantuan katalis."
  },
  {
    "key": "faq-5",
    "question": "Apa beda uji dugaan dengan uji konfirmasi?",
    "answer": "Uji dugaan cepat dan sensitif untuk melokalisasi bercak. Uji konfirmasi membuktikan keberadaan darah manusia secara pasti."
  }
];

const bibliography = [
  {
    "name": "Kastle-Meyer test - Wikipedia",
    "url": "https://en.wikipedia.org/wiki/Kastle%E2%80%93Meyer_test"
  },
  {
    "name": "Grodsky, M., Wright, K. & Kirk, P. L. (1951). Simplified preliminary blood testing. An improved technique and comparative study of methods. Journal of Criminal Law and Criminology.",
    "url": "https://scholarlycommons.law.northwestern.edu/jclc/vol42/iss1/10/"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "title": "Simulator Uji Darah",
  "desc": "Lakukan eksperimen laboratorium virtual dengan reagen Luminol dan Kastle-Meyer untuk mendeteksi darah.",
  "configTitle": "Kontrol Laboratorium",
  "sampleLabel": "Pilih Sampel Spesimen",
  "reagentLabel": "Pilih Reagen",
  "lightsLabel": "Pencahayaan",
  "btnLightsOff": "Matikan Lampu",
  "btnLightsOn": "Nyalakan Lampu",
  "btnReset": "Atur Ulang Wadah",
  "resultsTitle": "Hasil Uji Dugaan",
  "sampleBlood": "Sampel Darah (Kontrol)",
  "sampleRust": "Karat (Besi Oksida)",
  "sampleBleach": "Pemutih (Natrium Hipoklorit)",
  "samplePotato": "Kentang (Peroksidase Tumbuhan)",
  "sampleSaliva": "Sampel Air Liur",
  "reagentKM": "Reagen Kastle-Meyer",
  "reagentH2O2": "Hidrogen Peroksida (H2O2)",
  "reagentLuminol": "Larutan Luminol",
  "resultTruePositive": "Positif Benar (Darah Terdeteksi)",
  "resultFalsePositive": "Positif Palsu (Katalis Non-Darah)",
  "resultNegative": "Reaksi Negatif",
  "statusLabel": "Status Reaksi",
  "reactionLabel": "Penjelasan Reaksi",
  "dropReagentBtn": "Teteskan",
  "activeCompounds": "Senyawa Aktif",
  "reactionSpeed": "Kecepatan Reaksi",
  "reactionDuration": "Durasi Reaksi",
  "specimenBase": "Basis Spesimen",
  "kmPending": "Reagen Kastle-Meyer ditambahkan. Tambahkan Hidrogen Peroksida (H2O2) untuk mengkatalisis perubahan warna.",
  "h2o2Only": "Hidrogen Peroksida ditambahkan. Tidak ada reaksi visual tanpa indikator Kastle-Meyer.",
  "noReaction": "Tidak ada reaksi yang diamati. Sampel tetap bening.",
  "luminolBlood": "Pendaran biru intens segera terlihat dalam gelap. Gugus heme dalam hemoglobin mengoksidasi luminol. Positif Benar.",
  "luminolBleach": "Pendaran biru sangat intens segera terlihat dan memudar dalam waktu kurang dari 2 detik. Pemutih langsung mengoksidasi luminol. Positif Palsu.",
  "luminolRust": "Pendaran biru redup terlihat. Ion logam pada karat mengkatalisis oksidasi dengan lemah. Positif Palsu.",
  "luminolPotato": "Tidak ada pendaran. Peroksidase kentang tidak memiliki struktur katalitis untuk luminol. Negatif.",
  "luminolNegative": "Tidak ada pendaran terlihat dalam gelap. Senyawa tidak mengkatalisis oksidasi luminol. Negatif.",
  "kmBlood": "Warna merah muda cerah langsung terlihat setelah Hidrogen Peroksida ditambahkan. Heme dalam darah mengoksidasi fenolftalin menjadi fenolftalein. Positif Benar.",
  "kmBleach": "Perubahan warna merah muda langsung terjadi. Natrium hipoklorit langsung mengoksidasi fenolftalin tanpa hidrogen peroksida. Positif Palsu.",
  "kmRust": "Warna kecokelatan-merah muda yang lambat muncul setelah beberapa detik. Karat mengkatalisis reaksi dengan lambat. Positif Palsu.",
  "kmPotato": "Warna merah muda pudar yang lambat muncul setelah jeda waktu. Peroksidase kentang mengkatalisis reaksi dengan lemah. Positif Palsu.",
  "kmNegative": "Tidak ada perubahan warna. Larutan tetap bening. Negatif."
},
  seo: [
  {
    "type": "title",
    "text": "Panduan Lengkap Uji Dugaan Darah Forensik",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Uji dugaan darah merupakan metode skrining awal yang sangat sensitif yang digunakan oleh penyelidik di tempat kejadian perkara untuk mendeteksi keberadaan bercak darah. Sebelum melakukan analisis lanjutan seperti pengurutan DNA, tim forensik mengandalkan pengujian cepat ini pada pakaian, senjata tajam, dan permukaan keras lainnya. Karena pengujian ini menargetkan aktivitas katalitis dari heme yang mengandung zat besi dalam hemoglobin, sifatnya diklasifikasikan sebagai dugaan. Hasil positif menunjukkan potensi kuat adanya darah, tetapi penyelidikan lanjutan dengan uji konfirmasi tetap wajib dilakukan guna memastikan keabsahan biologis sampel tersebut."
  },
  {
    "type": "title",
    "text": "Prinsip Kerja Uji Kastle-Meyer",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Uji warna Kastle-Meyer (KM) didasarkan pada reaksi oksidasi fenolftalin yang tidak berwarna menjadi fenolftalein yang berwarna merah muda. Tahapan uji ini harus dilakukan secara teratur: pertama, larutan fenolftalin ditambahkan pada sampel spesimen. Jika terdapat darah, gugus heme dari hemoglobin akan bertindak sebagai katalis organik. Saat hidrogen peroksida diteteskan berikutnya, heme mempercepat pemecahan peroksida dan mengoksidasi fenolftalin menjadi fenolftalein secara instan, menghasilkan warna merah muda cerah. Perubahan warna yang lambat setelah lewat dari lima belas detik biasanya dianggap sebagai reaksi negatif."
  },
  {
    "type": "title",
    "text": "Luminol dan Pendaran Kimia Forensik",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Luminol adalah senyawa kimia yang menghasilkan pendaran cahaya biru khas di tempat gelap saat teroksidasi oleh hidrogen peroksida dengan bantuan katalis logam. Tim identifikasi menyemprotkan larutan luminol pada area luas di tempat kejadian perkara. Jika menyentuh sisa darah, kandungan besi dalam heme hemoglobin mengkatalisis reaksi kimia tersebut. Reaksi ini membentuk ion aminofitalat yang berada dalam tingkat energi tereksitasi dan memancarkan cahaya biru saat kembali ke tingkat energi dasar. Karena intensitas cahaya pendaran ini lemah, ruangan harus benar-benar gelap agar pendaran dapat terdokumentasi."
  },
  {
    "type": "table",
    "headers": [
      "Sampel Uji",
      "Reaksi Kastle-Meyer",
      "Reaksi Luminol",
      "Klasifikasi Uji"
    ],
    "rows": [
      [
        "Darah Manusia",
        "Perubahan warna merah muda cerah seketika setelah H2O2.",
        "Pendaran biru intens dan stabil.",
        "Positif Benar."
      ],
      [
        "Pemutih Pakaian",
        "Warna merah muda muncul sebelum H2O2 ditambahkan.",
        "Pendaran sangat kuat namun cepat padam.",
        "Positif Palsu."
      ],
      [
        "Besi Oksida (Karat)",
        "Warna merah muda kecokelatan yang lambat.",
        "Pendaran biru redup dan tidak merata.",
        "Positif Palsu."
      ],
      [
        "Kentang (Peroksidase)",
        "Warna merah muda pudar yang muncul lambat.",
        "Tidak memancarkan pendaran cahaya.",
        "Positif Palsu (KM) / Negatif (LUM)."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Membedakan Darah Asli dari Positif Palsu",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Kemampuan membedakan darah dari reaksi positif palsu merupakan bagian sangat krusial dalam analisis bukti forensik. Larutan pembersih yang mengandung natrium hipoklorit (pemutih) mengoksidasi reagen secara langsung tanpa perlu katalis tambahan. Penyelidik membedakan reaksi ini melalui dinamika waktu reaksi: pemutih memicu warna merah muda pada uji Kastle-Meyer tanpa penambahan peroksida dan pendaran luminolnya hilang sangat cepat. Sementara itu, enzim peroksidase dari tumbuhan dapat dinonaktifkan oleh suhu panas, berbeda dengan hemoglobin darah yang tahan terhadap panas."
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
