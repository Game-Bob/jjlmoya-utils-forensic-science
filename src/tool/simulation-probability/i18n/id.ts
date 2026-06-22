const slug = 'kalkulator-probabilitas-simulasi';
const description = 'Analisis apakah realitas kita adalah simulasi menggunakan argumen trilema Nick Bostrom. Hitung probabilitas eksistensial dengan 4 parameter kunci.';
const title = 'Kalkulator Probabilitas Simulasi: Apakah Anda Tinggal di Semesta Virtual?';
const howTo = [
    {
      name: 'Sesuaikan Kemajuan Teknologi',
      text: 'Perkirakan probabilitas umat manusia mencapai tingkat pasca-manusia. 50% adalah netral; tingkatkan jika Anda yakin AI dan komputasi akan terus berkembang secara eksponensial.',
    },
    {
      name: 'Tetapkan Tingkat Kelangsungan Hidup',
      text: 'Pertimbangkan probabilitas umat manusia tidak menghancurkan diri sendiri. Faktor dalam perang, perubahan iklim, pandemi. Nilai tinggi = optimisme tentang masa depan kita.',
    },
    {
      name: 'Evaluasi Minat dalam Mensimulasi',
      text: 'Jika umat manusia mencapai tingkat pasca-manusia, apakah ia ingin membuat simulasi masa lalunya? Pertimbangkan motivasi: penelitian ilmiah, hiburan, pelestarian sejarah.',
    },
    {
      name: 'Tafsirkan hasilnya',
      text: 'Amati bagaimana probabilitas berubah. Hasil > 90% menunjukkan bahwa simulasi hampir tidak terelakkan jika asumsi terpenuhi. Bermainlah dengan parameter untuk menjelajahi masa depan yang berbeda.',
    },
  ];
const faq = [
    {
      question: 'Apa sebenarnya argumen Bostrom itu?',
      answer: 'Nick Bostrom mengusulkan bahwa jika peradaban pasca-manusia memiliki daya komputasi yang cukup, ia dapat menciptakan jutaan simulasi alam semesta sebelumnya. Jika itu terjadi, jumlah makhluk yang disimulasikan akan jauh lebih banyak daripada makhluk biologis asli. Secara statistik, oleh karena itu, Anda lebih mungkin disimulasikan daripada asli.',
    },
    {
      question: 'Apakah probabilitas tinggi berarti kita pasti sebuah simulasi?',
      answer: 'Tidak. Probabilitas tinggi menunjukkan bahwa itu adalah kemungkinan serius yang harus dipertimbangkan, tetapi itu bukan bukti. Argumen tersebut didasarkan pada asumsi tentang masa depan teknologi yang mungkin tidak terpenuhi.',
    },
    {
      question: 'Bagaimana jika kita mengetahui bahwa kita adalah simulasi akan mempengaruhi kita?',
      answer: 'Secara filosofis, banyak yang berargumen bahwa itu tidak mengubah sesuatu yang mendasar. Jika Anda dan orang-orang yang Anda cintai disimulasikan bersama, pengalaman, emosi, dan hubungan Anda tetap nyata dan dirasakan. Pengalaman yang dialami adalah yang penting, bukan substratnya.',
    },
    {
      question: 'Apakah ada bukti ilmiah bahwa kita berada dalam simulasi?',
      answer: 'Tidak ada bukti konklusif. Beberapa fisikawan menunjuk pada anomali dalam mekanika kuantum (kuantisasi, keterikatan) sebagai kemungkinan "optimalisasi komputasi", tetapi ini adalah interpretasi spekulatif.',
    },
    {
      question: 'Nilai apa yang harus saya tetapkan untuk "N" (skala simulasi)?',
      answer: 'Itu tergantung pada keyakinan Anda tentang masa depan komputasi. Nilai rendah (100-1000) mengasumsikan keterbatasan sumber daya. Nilai tinggi (jutaan) mengasumsikan daya komputasi yang praktis tidak terbatas. Sebagian besar diskusi ilmiah menggunakan nilai antara 1000 dan 1 triliun.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Disalin',
    noHistory: 'Tidak ada riwayat',
    load: 'Muat',
    delete: 'Hapus',
    simulationParameters: 'Parameter Simulasi',
    fpLabel: 'fp',
    fpSub: 'Kemajuan Teknologi',
    flLabel: 'fl',
    flSub: 'Kelangsungan Spesies',
    fiLabel: 'fi',
    fiSub: 'Minat dalam Mensimulasi',
    nLabel: 'N',
    nSub: 'Skala Simulasi',
    probabilityTitle: 'Probabilitas Simulasi',
    trilemmaResult: 'Putusan Trilema',
    scenario1: 'Skenario 1: Kepunahan',
    scenario2: 'Skenario 2: Ketidaktertarikan',
    scenario3: 'Skenario 3: Kita Disimulasikan',
    fpDescription: 'Probabilitas bahwa umat manusia mencapai kemampuan teknis untuk mensimulasikan alam semesta dengan kesadaran.',
    flDescription: 'Probabilitas menghindari keruntuhan (kepunahan, perang) sebelum mencapai tingkat pasca-manusia.',
    fiDescription: 'Persentase peradaban maju yang memutuskan untuk membuat simulasi nenek moyang mereka.',
    nDescription: 'Jumlah dunia simulasi yang biasanya dijalankan oleh setiap peradaban maju secara bersamaan.',
    verdictDetail: 'Data menunjukkan sangat mungkin bahwa kesadaran Anda adalah sebuah proses perangkat lunak.',
  },
  seo: [
    {
      type: 'title',
      text: 'Apakah kita hidup dalam simulasi? Sains di balik argumen Nick Bostrom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gagasan bahwa realitas kita bisa jadi merupakan konstruksi buatan, simulasi komputer yang sangat canggih, telah beralih dari fiksi ilmiah menjadi perdebatan filosofis dan ilmiah yang serius. Pada tahun 2003, filsuf Nick Bostrom dari Universitas Oxford menerbitkan sebuah artikel berjudul <em>"Are You Living in a Computer Simulation?"</em>, di mana ia mengusulkan argumen trilema yang menantang persepsi kita tentang keberadaan.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator probabilitas simulasi ini menggunakan parameter kunci yang diturunkan dari hipotesis Bostrom untuk memperkirakan kemungkinan bahwa kesadaran Anda, pada kenyataannya, adalah hasil dari proses perangkat lunak yang dijalankan oleh peradaban pasca-manusia.',
    },
    {
      type: 'title',
      text: 'Pilar Argumen Simulasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Argumen Bostrom tidak menyatakan bahwa kita berada dalam simulasi, tetapi setidaknya satu dari tiga proposisi berikut hampir pasti benar:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kepunahan Prematur:</strong> Spesies manusia akan punah sebelum mencapai tahap pasca-manusia yang mampu menjalankan simulasi nenek moyang.',
        '<strong>Ketidaktertarikan Teknologi:</strong> Peradaban pasca-manusia mana pun tidak akan tertarik untuk menjalankan simulasi nenek moyangnya karena alasan etis atau hiburan.',
        '<strong>Simulasi di Mana-mana:</strong> Hampir pasti kita hidup dalam simulasi karena jumlah pikiran yang disimulasikan secara masif melebihi jumlah pikiran biologis asli.',
      ],
    },
    {
      type: 'title',
      text: 'Cara Menafsirkan Parameter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk menggunakan alat ini dengan benar, sangat penting untuk memahami apa yang diwakili oleh variabel model:',
    },
    {
      type: 'table',
      headers: ['Variabel', 'Konsep', 'Makna'],
      rows: [
        ['<strong>fp</strong>', 'Kemajuan Teknologi', 'Probabilitas bahwa sebuah peradaban akan mencapai kapasitas untuk mensimulasikan pikiran.'],
        ['<strong>fl</strong>', 'Tingkat Kelangsungan Hidup', 'Probabilitas bahwa peradaban tersebut tidak menghancurkan diri sendiri sebelum mencapai titik itu.'],
        ['<strong>fi</strong>', 'Minat dalam Mensimulasi', 'Persentase peradaban yang memutuskan untuk menggunakan kekuatan mereka untuk menciptakan dunia virtual.'],
        ['<strong>N</strong>', 'Skala Simulasi', 'Jumlah total simulasi yang akan dibuat oleh satu peradaban pasca-manusia.'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa probabilitasnya biasanya begitu tinggi?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika kita berasumsi bahwa peradaban pasca-manusia akan memiliki daya komputasi yang sangat besar (seperti Dyson Sphere atau Jupiter Brain), angka <strong>N</strong> (simulasi) bisa mencapai miliaran. Jika <em>N</em> sangat besar, bahkan dengan nilai minat (<em>fi</em>) yang rendah, jumlah makhluk yang disimulasikan akan melebihi makhluk asli dalam urutan besarnya.',
    },
    {
      type: 'title',
      text: 'Bukti dan Batas Komputasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dari fisika kuantum hingga kosmologi, beberapa ilmuwan mencari "glitch" atau batasan dalam resolusi realitas kita. Jika alam semesta memiliki panjang minimum (Panjang Planck) atau perilaku yang terlihat seperti optimalisasi kode (seperti keterikatan kuantum), hipotesis ini mendapatkan penganut di bidang fisika digital.',
    },
    {
      type: 'title',
      text: 'Refleksi Etis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika kita menemukan bahwa kita adalah simulasi, apakah moral kita akan berubah? Bagi Bostrom, yang penting adalah pengalaman kesadaran. Pikiran yang disimulasikan menderita dan mencintai sama seperti pikiran biologis.',
    },
    {
      type: 'title',
      text: 'Kasus Penggunaan Kalkulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pendidikan Sains:</strong> Memahami model probabilitas yang diterapkan pada kosmologi.',
        '<strong>Filsafat Kontemporer:</strong> Menjelajahi trilema Bostrom secara interaktif.',
        '<strong>Futuroloji:</strong> Menganalisis dampak tingkat kelangsungan hidup spesies pada nasib kita.',
        '<strong>Keingintahuan Eksistensial:</strong> Mengevaluasi keyakinan Anda sendiri tentang masa depan teknologi.',
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
        text: step.text,
      })),
    },
  ],
};

