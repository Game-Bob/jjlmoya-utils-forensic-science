import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'pendeteksi-biosignature-exoplanet';
const title = 'Pendeteksi Biosignature Exoplanet';
const description = 'Sejajarkan garis serapan oksigen, metana, dan ozon dalam spektrum transmisi exoplanet simulasi. Evaluasi kelayakhunian biologis, kemungkinan kontaminasi teknosignature, dan risiko positif palsu berdasarkan bukti spektral.';

const howTo = [
  {
    name: 'Pilih bintang induk',
    text: 'Pilih antara katai K, bintang mirip Matahari, atau katai M. Jenis bintang sangat memengaruhi risiko positif palsu karena fluks ultraviolet, suar bintang, dan fotokimia atmosfer mengubah interpretasi terhadap oksigen dan ozon.',
  },
  {
    name: 'Sejajarkan garis spektral',
    text: 'Geser kontrol untuk oksigen, metana, dan ozon hingga penanda serapan yang diamati cocok dengan pita referensi pada spektrum simulasi.',
  },
  {
    name: 'Atur derau dan konteks atmosfer',
    text: 'Tingkatkan derau instrumen untuk melihat penurunan tingkat kepercayaan data. Sesuaikan uap air dan karbon dioksida untuk mensimulasikan kondisi atmosfer yang lebih basah, kering, rapat, atau kompleks secara fotokimia.',
  },
  {
    name: 'Interprete indeks kelayakhunian',
    text: 'Bandingkan nilai biologis, teknologi, dan kelayakhunian. Hasil yang valid memerlukan keberadaan beberapa gas dalam ketidaksetimbangan, bukan sekadar deteksi garis tunggal.',
  },
];

const faq = [
  {
    question: 'Apa itu biosignature dalam spektroskopi exoplanet?',
    answer: 'Biosignature adalah fitur yang dapat dideteksi dari jarak jauh dan berpotensi disebabkan oleh aktivitas biologis. Dalam spektrum atmosfer, kandidat utama meliputi oksigen, ozon, metana, uap air, dan kombinasi gas yang secara kimiawi seharusnya bereaksi habis, kecuali ada proses yang terus-menerus mengisi pasokannya.',
  },
  {
    question: 'Mengapa kombinasi oksigen dan metana sangat krusial?',
    answer: 'Oksigen dan metana bersifat reaktif. Keberadaan keduanya secara bersamaan dalam jumlah signifikan menunjukkan adanya ketidaksetimbangan kimia, sebuah indikator kehidupan yang jauh lebih kuat daripada keberadaan salah satu gas saja. Simulator ini memberikan bobot lebih pada pasangan ini.',
  },
  {
    question: 'Bisakah oksigen dianggap sebagai positif palsu?',
    answer: 'Ya. Oksigen dapat terakumulasi secara abiotik akibat hilangnya air, fotolisis, aktivitas vulkanik, atau paparan radiasi ultraviolet bintang yang ekstrem. Oleh karena itu, alat ini menghitung risiko positif palsu dan tidak langsung menganggap oksigen sebagai bukti kehidupan mutlak.',
  },
  {
    question: 'Mengapa ozon dikategorikan terpisah dari oksigen?',
    answer: 'Ozon adalah produk fotokimia dari oksigen dengan karakteristik spektral yang sangat tajam. Ozon berfungsi sebagai indikator tidak langsung, terutama saat pita serapan langsung oksigen sulit teramati, namun tetap memerlukan konteks atmosfer untuk interpretasi yang tepat.',
  },
  {
    question: 'Apa yang dimaksud dengan indeks teknologi?',
    answer: 'Indeks teknologi adalah skor peringatan spekulatif bagi spektrum atmosfer yang tampak sangat energetik, berderau, atau tidak lazim secara kimiawi, sehingga kemungkinan adanya sumber buatan tidak boleh diabaikan. Ini bukan klaim deteksi.',
  },
  {
    question: 'Apakah ini model nyata untuk pengambilan data exoplanet?',
    answer: 'Bukan. Ini adalah simulator edukatif yang menerjemahkan konsep dasar spektroskopi menjadi model penilaian interaktif. Pengambilan data ilmiah nyata menggunakan transfer radiasi kompleks, koreksi kontaminasi bintang, model awan, serta inferensi Bayesian.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualisasi spektrum transmisi exoplanet',
    starClass: 'Bintang induk',
    starK: 'Katai K tenang',
    starSun: 'Bintang G mirip Matahari',
    starM: 'Katai M aktif',
    noise: 'Derau instrumen',
    oxygenLine: 'Penanda oksigen',
    methaneLine: 'Penanda metana',
    ozoneLine: 'Penanda ozon',
    waterVapor: 'Konteks uap air',
    carbonDioxide: 'Konteks CO2',
    habitabilityIndex: 'Indeks kelayakhunian',
    biologicalIndex: 'Biologis',
    technologicalIndex: 'Teknologi',
    falsePositiveRisk: 'Risiko positif palsu',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Kesimpulan',
    dataLive: 'Sintesis data langsung',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Sejajarkan penanda spektral untuk mengevaluasi bukti atmosfer.',
    verdictWeak: 'Spektrum lemah: garis-garis belum mendukung interpretasi ramah kehidupan.',
    verdictPromising: 'Spektrum menjanjikan: beberapa penanda biosignature telah sejajar sebagian.',
    verdictStrong: 'Spektrum kuat: oksigen, metana, dan ozon membentuk sinyal ketidaksetimbangan yang koheren.',
    verdictAmbiguous: 'Sinyal menarik namun ambigu: risiko positif palsu dari bintang atau atmosfer masih tinggi.',
  },
  seo: [
    {
      type: 'title',
      text: 'Pendeteksi Biosignature Exoplanet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pendeteksi biosignature exoplanet adalah simulator spektroskopi interaktif untuk mengeksplorasi bagaimana gas-gas terkait kehidupan muncul dalam cahaya yang tersaring melalui atmosfer planet jauh. Alih-alih memberikan jawaban biner pada satu molekul, alat ini meminta Anda menyelaraskan fitur serapan oksigen, metana, dan ozon, lalu menimbang hasilnya terhadap derau, uap air, karbon dioksida, dan perilaku bintang induknya.',
    },
    {
      type: 'paragraph',
      html: 'Inilah tantangan utama dalam studi biosignature: oksigen, metana, dan ozon adalah temuan menarik, tetapi tidak satu pun dari mereka merupakan bukti definitif. Kasus yang meyakinkan harus menggabungkan beberapa gas, konteks fisik, dan eliminasi cermat terhadap penjelasan non-biologis. Simulator ini memvisualisasikan kompleksitas tersebut dalam antarmuka bergaya laboratorium.',
    },
    {
      type: 'title',
      text: 'Spektroskopi Transmisi dalam Mengungkap Gas Atmosfer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saat sebuah planet melintas di depan bintangnya, cahaya bintang tersaring melalui atmosfer planet. Molekul menyerap panjang gelombang spesifik, meninggalkan lekukan pada spektrum. Dengan membandingkan lekukan ini dengan data laboratorium, astronom dapat menyimpulkan keberadaan gas, meski awan, suhu, bintik bintang, dan derau instrumen mempersulit proses ini.',
    },
    {
      type: 'title',
      text: 'Oksigen, Metana, dan Ozon sebagai Sinyal Gabungan',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Oksigen O2:</strong> Di Bumi, dipertahankan oleh fotosintesis, namun oksigen abiotik tetap mungkin terakumulasi dalam sejarah planet tertentu.',
        '<strong>Metana CH4:</strong> Bisa berasal dari biologi, geologi, atau tumbukan. Menjadi lebih signifikan saat ditemukan bersama gas pengoksidasi.',
        '<strong>Ozon O3:</strong> Produk fotokimia oksigen, mudah dideteksi di rentang spektral tertentu sebagai penanda tidak langsung.',
        '<strong>Konteks Air & CO2:</strong> Air mendukung kelayakhunian, sementara CO2 membantu pemodelan efek rumah kaca dan fotokimia untuk mengidentifikasi positif palsu.',
      ],
    },
    {
      type: 'title',
      text: 'Pentingnya Memahami Positif Palsu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skor oksigen tinggi bukan jaminan adanya biologi. Kehilangan air, radiasi ultraviolet, atau aktivitas vulkanik bisa menghasilkan oksigen secara abiotik. Katai M sangat menantang karena aktivitas suar bintangnya. Indikator positif palsu meningkat jika derau atau konteks atmosfer membuat penjelasan biologis menjadi meragukan.',
    },
    {
      type: 'table',
      headers: ['Pola Sinyal', 'Interpretasi', 'Catatan'],
      rows: [
        ['O2 saja', 'Atmosfer kaya oksigen', 'Kemungkinan abiotik (hilangnya air, fotokimia)'],
        ['CH4 saja', 'Atmosfer reduktif/geologi aktif', 'Bukan bukti kuat untuk biologi'],
        ['O2 + CH4', 'Ketidaksetimbangan kimia', 'Perlu investigasi mendalam dan cek kontaminasi'],
        ['O2 + O3 + air', 'Konteks mirip Bumi', 'Pertimbangkan aktivitas awan dan bintang'],
      ],
    },
    {
      type: 'title',
      text: 'Indeks Kelayakhunian Biologis dan Teknologi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Indeks biologis memprioritaskan ketidaksetimbangan kimia (O2 + CH4), ditambah ozon dan air. Indeks teknologi bersifat spekulatif: menyoroti spektrum yang sangat tidak lazim atau energetik sehingga kemungkinan polusi buatan atau modifikasi atmosfer perlu dipertimbangkan sebelum menyimpulkan adanya kehidupan.',
    },
    {
      type: 'paragraph',
      html: 'Gunakan alat ini sebagai bantuan penalaran kritis. Penilaian biosignature nyata melibatkan pembandingan model atmosfer, spektroskopi bintang, koreksi instrumen, dan perhitungan ketidakpastian secara rigor. Nilai edukasi di sini adalah kedisiplinan dalam menyejajarkan bukti, memeriksa konteks, dan waspada terhadap positif palsu.',
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
