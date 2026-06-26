import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-jarak-tembak-sebaran-gsr-sisa-mesiu';
const title = 'Kalkulator Jarak Tembak Sebaran GSR';
const description = 'Simulasikan pola sebaran sisa tembakan (GSR) edukatif pada permukaan target berdasarkan jarak tembak, jenis amunisi, pembusukan kepadatan, dan efek termal.';

const howTo = [
  {
    name: 'Atur jarak moncong ke target',
    text: 'Geser kontrol jarak dari kontak langsung hingga tiga meter untuk melihat bagaimana sisa tembakan berubah dari deposit padat dan terbakar menjadi medan partikel yang tersebar luas.',
  },
  {
    name: 'Pilih profil amunisi',
    text: 'Pilih profil pistol 9 mm, revolver .38, atau senapan laras licin kaliber 12. Setiap profil mengubah jumlah partikel, faktor penyebaran, dan estimasi jangkauan termal.',
  },
  {
    name: 'Periksa kain target dan kerucut sebaran',
    text: 'Gunakan kain target untuk mengevaluasi kepadatan partikel dan penyebaran radial, dan amati kerucut samping untuk memahami ekspansi fisik awan residu sebelum mencapai target.',
  },
  {
    name: 'Tafsirkan kategori jarak',
    text: 'Tinjau klasifikasi jarak dan temuan yang diharapkan. Hasilnya menjelaskan makna edukatif dari pola kontak langsung, kontak dekat, jarak dekat, dan jarak jauh.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Apakah sebaran sisa tembakan dapat menentukan jarak tembak yang pasti?',
    answer: 'Tidak. Pola GSR mendukung estimasi rentang jarak, bukan jarak pasti. Kesimpulan nyata memerlukan pemeriksaan senjata api, amunisi, bahan target, sudut tembak, dan uji tembak perbandingan dalam kondisi terkendali.',
  },
  {
    key: 'faq-2',
    question: 'Mengapa tembakan sangat dekat menunjukkan lebih banyak jelaga dan luka bakar?',
    answer: 'Pada jarak sangat dekat, gas panas, jelaga, butiran mesiu yang tidak terbakar, dan partikel logam dari primer mengenai target sebelum awan residu memuai dan mendingin, menyebabkan penghitaman, luka bakar, dan robekan.',
  },
  {
    key: 'faq-3',
    question: 'Unsur kimia apa saja yang umumnya dikaitkan dengan GSR primer?',
    answer: 'Analisis GSR tradisional berfokus pada partikel yang mengandung timbal, barium, dan antimon. Meskipun amunisi modern bebas timbal dapat mengubah profil kimia ini, metode SEM-EDS mengevaluasi morfologi dan kimia partikel secara bersamaan.',
  },
  {
    key: 'faq-4',
    question: 'Mengapa simulator menggunakan model radial Gaussian?',
    answer: 'Distribusi radial Gaussian merupakan pendekatan edukatif yang berguna karena sebagian besar partikel berkonsentrasi di dekat pusat dampak. Pada kenyataannya, angin, sudut target, desain senjata, atau jenis kain dapat menyebabkan asimetri.',
  },
  {
    key: 'faq-5',
    question: 'Apakah kalkulator ini cocok untuk pembuatan laporan hukum?',
    answer: 'Tidak. Ini adalah visualisasi edukatif. Laporan forensik resmi harus mengandalkan protokol laboratorium yang tervalidasi, kontrol kualitas, pola uji tembak fisik, dan penilaian oleh ahli bersertifikat.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Jarak tembak',
    units: 'Sistem satuan',
    metric: 'Metrik',
    imperial: 'Imperial',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Profil amunisi',
    ammoPistol9mm: 'Pistol 9 mm',
    ammoRevolver38: 'Revolver .38',
    ammoShotgun12: 'Senapan kaliber 12',
    target: 'Kain target',
    cone: 'Awan residu',
    canvasAria: 'Sebaran partikel sisa tembakan pada kain target',
    rangeStripAria: 'Kategori jarak',
    category: 'Penafsiran jarak',
    categoryContactLabel: 'Kontak langsung / menempel target',
    categoryNearContactLabel: 'Kontak dekat / rentang luka bakar',
    categoryCloseRangeRange: 'Jarak dekat / zona rajah mesiu',
    categoryDistantLabel: 'Jarak jauh atau jarak tidak menentu',
    density: 'Kepadatan partikel',
    thermal: 'Efek termal',
    radius: 'Estimasi radius pola',
    radiusSuffix: 'radius',
    expected: 'Temuan yang diharapkan',
    expectedContact: 'Deposit pusat yang padat, risiko cetakan moncong senjata, jelaga hitam, robekan, dan perubahan termal diperkirakan terjadi di zona target.',
    expectedNearContact: 'Jelaga tebal dan partikel mesiu tetap terkonsentrasi di sekitar area masuk, dengan halo radial yang tampak namun tetap kompak.',
    expectedCloseRange: 'Rajah mesiu dan residu logam melebar menjadi cincin yang dapat diukur; efek termal dan jelaga menjadi sangat minim.',
    expectedDistant: 'Partikelsangat jarang dan tersebar luas. Penentuan jarak memerlukan analisis kimia, mikroskopi, dan tembakan percobaan perbandingan.',
    contact: 'Kontak',
    near: 'Kontak dekat',
    close: 'Jarak dekat',
    distant: 'Jarak jauh',
    disclaimer: 'Hanya model edukatif. Penentuan jarak tembak GSR memerlukan uji tembak terkendali, perbandingan bahan target, dan metode kimia tervalidasi.',
  },
  seo: [
    {
      type: 'title',
      text: 'Estimasi Jarak Tembak Berdasarkan Pola Sebaran GSR',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Model edukatif',
      title: 'Apa yang dijelaskan kalkulator ini',
      html: 'Kalkulator sebaran GSR ini mengilustrasikan apakah pola sisa tembakan menyerupai tembakan kontak langsung, kontak dekat, jarak dekat, atau jarak jauh. Ini dirancang untuk mempelajari prinsip <strong>penentuan jarak tembak</strong> melalui GSR, bukan untuk mengeluarkan opini forensik resmi.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'simulasi jarak moncong ke target', icon: 'mdi:ruler' },
        { value: '4', label: 'kategori rentang jarak dijelaskan', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'profil amunisi dibandingkan', icon: 'mdi:ammunition' },
        { value: '2', label: 'sistem satuan: metrik dan imperial', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'Cara Membaca Pola Simulasi',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Daftar periksa interpretasi cepat',
      items: [
        'Jelaga pusat yang padat, luka bakar, robekan, atau cetakan moncong senjata menunjukkan kontak langsung atau kontak dekat.',
        'Pusat gelap yang kompak dikelilingi butiran mesiu menunjukkan jarak yang sangat pendek, membutuhkan uji tembak untuk mempersempitnya.',
        'Rajah mesiu yang tersebar dengan sedikit jelaga biasanya cocok untuk jarak dekat setelah efek panas menghilang.',
        'Ketiadaan residu yang terlihat pada jarak jauh tidak membuktikan tidak adanya GSR; analisis kimia atau mikroskopi masih dapat mendeteksinya.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kegunaan alat ini',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Memvisualisasikan hubungan antara jarak tembak, kepadatan residu, penyebaran partikel, dan efek termal.',
          points: ['Demonstrasi kelas', 'Penjelasan maksud pencarian', 'Terminologi forensik', 'Perbandingan metrik dan imperial'],
        },
        {
          title: 'Batasan alat ini',
          icon: 'mdi:alert-circle-outline',
          description: 'Tidak dapat menentukan jarak tembak nyata dalam kasus forensik tanpa bukti fisik dan validasi.',
          points: ['Tidak ada unggah bukti fisik', 'Tanpa konfirmasi kimia', 'Tanpa uji tembak senjata spesifik', 'Tanpa kekuatan hukum'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pertanyaan umum', 'Petunjuk kunci pola', 'Jawaban teknis'],
      rows: [
        ['Seperti apa tembakan kontak langsung?', 'Jelaga padat, luka bakar, robekan menyilang, atau kemungkinan cetakan moncong.', 'Interpretasi kontak langsung mungkin masuk akal, tetapi ekspansi gas dan elastisitas kain dapat memengaruhi tampilannya.'],
        ['Seberapa dekat senjata tersebut?', 'Residu terkonsentrasi di dekat lubang masuk dengan halo mesiu yang kompak.', 'Pola mendukung hipotesis rentang jarak, tetapi perbandingan dengan uji tembak eksperimental tetap diperlukan.'],
        ['Apa itu rajah mesiu (tatuaj)?', 'Bintik-bintik akibat tumbukan butiran mesiu tidak terbakar dengan sedikit jelaga.', 'Penyebarannya bervariasi tergantung pada amunisi, jenis kain, sudut tembak, dan penghalang di antaranya.'],
        ['Apakah GSR dapat hilang pada jarak jauh?', 'Partikel sangat jarang dan tidak ada pola makroskopis yang terlihat.', 'Tanda visual berkurang, tetapi partikel primer masih dapat dideteksi dengan metode laboratorium.'],
      ],
    },
    {
      type: 'title',
      text: 'Prinsip Ilmiah Model Simulasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulator menggunakan distribusi radial Gaussian untuk menempatkan partikel di sekitar pusat dampak secara acak namun terarah. Jarak moncong yang pendek menghasilkan deposit residu yang sangat sempit, tebal, dan padat di area pusat. Sebaliknya, jarak penembakan yang lebih jauh meningkatkan luas penyebaran partikel secara signifikan dan menurunkan rata-rata kepadatan partikel per satuan luas. Model matematika ini secara khusus memisahkan partikel jelaga halus yang mudah terbang dari partikel logam berat yang lebih padat dan stabil, karena efek thermal dan pembakaran jelaga memiliki batas jangkauan fisik yang jauh lebih pendek dibandingkan dengan deteksi partikel mikroskopis.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Residu sisa tembakan (Gunshot Residue): partikel yang dihasilkan oleh primer, mesiu, proyektil, dan gas panas selama penembakan.' },
        { term: 'Penghitaman jelaga', definition: 'Deposit karbon gelap yang biasanya paling terlihat pada kontak langsung dan jarak sangat dekat.' },
        { term: 'Rajah mesiu', definition: 'Luka bintik-bintik kecil pada target yang disebabkan oleh tumbukan butiran mesiu tidak terbakar atau terbakar sebagian.' },
        { term: 'Cetakan moncong', definition: 'Tanda fisik pada target yang mereproduksi bentuk moncong senjata akibat tekanan gas dan panas pada tembakan menempel.' },
        { term: 'Tembakan percobaan', definition: 'Tembakan pembanding yang dilakukan pada jarak yang diketahui dengan senjata dan amunisi yang sama pada kain target identik.' },
      ],
    },
    {
      type: 'title',
      text: 'Kategori Rentang Jarak dan Temuan Fisik',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kategori Jarak', 'Temuan umum', 'Batasan interpretasi'],
      rows: [
        ['Kontak', 'Deposit pusat masif, jelaga, luka bakar, robekan, cetakan moncong.', 'Elastisitas kain dan tekanan gas dapat mengubah diameter lubang secara signifikan.'],
        ['Kontak dekat', 'Jelaga padat dan halo mesiu yang rapat di sekitar lubang masuk.', 'Pakaian longgar atau penghalang antara dapat mengalihkan sebaran residu yang diharapkan.'],
        ['Jarak dekat', 'Rajah mesiu, partikel tersebar tanpa kehadiran jelaga yang signifikan.', 'Jarak yang sama menghasilkan pola berbeda pada katun, denim, kulit, atau kertas.'],
        ['Jarak jauh', 'Residu visual sangat jarang atau tidak ada, sebaran mikroskopis luas.', 'Analisis kimia dan mikroskopi elektron sangat penting ketika tanda visual makroskopis hilang.'],
      ],
    },
    {
      type: 'tip',
      title: 'Tips penafsiran praktis',
      html: 'Evaluasi residu tembakan selalu sebagai <strong>analisis rentang perbandingan</strong> dan bukan nilai angka pasti. Kesimpulan ilmiah yang kuat diperoleh dengan membandingkan bukti fisik target dengan pola eksperimental.',
    },
    {
      type: 'title',
      text: 'Protokol Dokumentasi Sebelum Analisis Pola',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Dokumentasikan sifat kain target: jenis kain, warna, ketebalan, elastisitas, dan adanya lipatan.',
        'Catat merek, model, panjang laras senjata api, nomor lot amunisi, jenis mesiu, dan alat tambahan moncong.',
        'Foto pola dengan skala pembanding, pencahayaan tegak lurus, dan catatan rantai bukti (chain of custody).',
        'Analisis secara terpisah keberadaan jelaga, luka bakar, mesiu tidak terbakar, cincin usap, dan robekan kain.',
        'Lakukan selalu tembakan percobaan pembanding sebelum menetapkan kesimpulan jarak tembak.',
      ],
    },
    {
      type: 'proscons',
      title: 'Simulasi virtual dibandingkan dengan pemeriksaan laboratorium balistik',
      items: [
        { pro: 'Memudahkan pemahaman visual tentang bagaimana residu menyebar seiring bertambahnya jarak.', con: 'Tidak mereproduksi karakteristik senjata api, lot amunisi, atau kain target secara spesifik.' },
        { pro: 'Menjelaskan perbedaan konseptual antara kategori rentang jarak.', con: 'Tidak menggantikan uji kimia atau mikroskopi elektron pemindai (SEM-EDS).' },
        { pro: 'Membantu memahami batasan fisik dari analisis visual makroskopis langsung.', con: 'Tidak memiliki nilai hukum tanpa validasi laboratorium eksperimental dan penilaian ahli resmi.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Peringatan forensik',
      title: 'Pengecualian penggunaan untuk tujuan hukum',
      html: 'Simulasi komputer tidak dapat menggantikan bukti fisik nyata. Simulator tidak mengevaluasi kondisi senjata, kimia mesiu, penghalang antara, atau kualitas pengumpulan sampel. Gunakan halaman ini hanya untuk tujuan edukasi dan hubungi laboratorium forensik resmi untuk investigasi nyata.',
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
