const slug = 'kalkulator-pembaruan-seluler';
const description = 'Hitung persentase tubuh Anda yang telah diperbarui sejak lahir. Estimasi berdasarkan tingkat pembelahan sel organ, tulang, dan jaringan. Paradoks Theseus yang menjadi nyata.';
const title = 'Kalkulator Pembaruan Seluler: Berapa Banyak yang Tersisa dari "Dirimu" yang Asli?';
const howTo = [
    {
      name: 'Sesuaikan usia Anda',
      text: 'Geser pemilih dari 1 hingga 105 tahun. Ini adalah variabel terpenting untuk perhitungan pembaruan.',
    },
    {
      name: 'Amati persentase utama',
      text: 'Angka besar di tengah menunjukkan berapa persentase materi Anda saat ini yang "baru" (diperbarui sejak lahir).',
    },
    {
      name: 'Analisis bilah kemajuan',
      text: 'Setiap batang mewakili jaringan yang berbeda: kulit/darah, tulang, organ, dan otak. Perhatikan bagaimana otak hampir tidak berubah sementara kulit terus-menerus diperbarui.',
    },
    {
      name: 'Renungkan identitas Anda',
      text: 'Jika 99% dari diri Anda adalah materi baru, siapakah Anda sebenarnya? Gunakan alat ini sebagai titik awal untuk refleksi tentang kontinuitas pribadi dan Paradoks Theseus.',
    },
  ];
const faq = [
    {
      question: 'Apa sebenarnya "pembaruan seluler" itu?',
      answer: 'Ini adalah proses alami di mana sel-sel yang menua atau rusak mati (apoptosis) dan digantikan oleh sel-sel baru yang dihasilkan melalui pembelahan mitosis. Siklus ini sangat penting untuk menjaga jaringan tetap fungsional dan memperbaiki kerusakan.',
    },
    {
      question: 'Mengapa otak diperbarui begitu lambat?',
      answer: 'Neuron di korteks serebral dihasilkan sebelum lahir dan umumnya tidak membelah lagi. Ini memberikan stabilitas neurologis: "pengkabelan" mendasar Anda tetap konstan. Namun, sel glial (pendukung) memang diperbarui. Memori disimpan dalam koneksi, bukan dalam atom.',
    },
    {
      question: 'Apakah benar setiap 7 tahun kita menjadi "orang baru"?',
      answer: 'Itu adalah penyederhanaan. Tidak akurat. Darah Anda diperbarui dalam 4 bulan, kulit dalam sebulan, kerangka dalam 10 tahun. Otak Anda sebagian besar tetap tidak berubah. Angka 7 tahun bersifat historis (Aristoteles menyebutkannya) tetapi secara biologis itu adalah rata-rata yang tidak tepat.',
    },
    {
      question: 'Jika tubuh saya 99% baru, apakah saya masih orang yang sama?',
      answer: 'Ya. Identitas adalah kontinuitas informasi, kesadaran, dan memori, bukan atom. Anda seperti sungai: airnya berubah terus-menerus, tetapi sungainya tetap ada. Paradoks Theseus menunjukkan bahwa identitas terletak pada polanya, bukan materinya.',
    },
    {
      question: 'Jaringan mana yang diperbarui paling cepat?',
      answer: 'Darah dan kulit memimpin. Sumsum tulang Anda memproduksi 200 miliar sel darah setiap hari. Anda kehilangan ~30.000 sel kulit per menit. Inilah sebabnya mengapa mereka sembuh dengan sangat baik dan menua dengan sangat nyata: mereka muda dalam hal usia seluler.',
    },
    {
      question: 'Apakah lensa mata benar-benar tidak diperbarui?',
      answer: 'Benar. Sel-sel lensa disimpan selama perkembangan embrio dan disimpan seumur hidup. Pada usia 100 tahun, sel-sel pusat lensa Anda bisa sama seperti saat Anda berada di dalam rahim. Ini adalah kapsul waktu biologis.',
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
    biologicalTimeline: 'Garis Waktu Biologis',
    ageUnit: 'tahun evolusi',
    matterNewPercent: 'Materi Anda baru sebesar',
    atomicRenewal: 'Pembaruan Atom',
    skinAndBlood: 'Kulit dan Darah',
    boneRemodeling: 'Remodeling Tulang',
    organicMatrix: 'Matriks Organik',
    perennialCells: 'Sel Perenial',
    disclaimerText: 'Perhitungan didasarkan pada rata-rata masa hidup seluler menurut studi isotop. Meskipun darah dan kulit diperbarui dalam hitungan minggu, protein lensa mata dan sebagian besar korteks serebral Anda tetap ada sejak perkembangan embrio. Secara fisik, Anda adalah struktur dinamis dalam fluks konstan.',
  },
  seo: [
    {
      type: 'title',
      text: 'Berapa banyak dari dirimu yang benar-benar "milikmu"? Sains pembaruan seluler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tubuh Anda adalah sungai yang terus bergerak. Setiap detik, jutaan sel mati dan digantikan oleh sel baru. Dalam tujuh tahun, praktis setiap atom dalam tubuh Anda akan telah diganti. Namun, statistik ini sangat menyesatkan, karena bagian tubuh yang berbeda diperbarui dengan kecepatan yang sangat berbeda.',
    },
    {
      type: 'paragraph',
      html: 'Paradoks ini, yang dikenal sebagai <strong>Paradoks Kapal Theseus</strong>, mengajukan pertanyaan kuno: jika Anda mengganti semua bagian dari sesuatu, apakah itu masih hal yang sama? Dalam kasus Anda, ini adalah pertanyaan harfiah. Atom-atom yang membentuk tubuh Anda hari ini bukanlah atom yang sama dengan 10 tahun lalu, tetapi <em>Anda</em> tetaplah Anda.',
    },
    {
      type: 'title',
      text: 'Pergantian Seluler: Peta Tubuh Dinamis Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kecepatan pembaruan bervariasi secara dramatis menurut jaringan:',
    },
    {
      type: 'table',
      headers: ['Jaringan', 'Rata-rata Masa Hidup Seluler', 'Pembaruan Penuh', 'Deskripsi'],
      rows: [
        ['<strong>Darah</strong>', '120 hari', '4 bulan', 'Sel darah merah adalah yang tercepat. Sumsum tulang Anda memproduksi 200 miliar setiap hari.'],
        ['<strong>Kulit</strong>', '2-4 minggu', '1 bulan', 'Pembaruan yang sangat cepat. Anda kehilangan ~30.000 sel kulit per menit.'],
        ['<strong>Tulang</strong>', '10 tahun', 'Satu dekade', 'Kerangka lebih konservatif. Namun, setelah 10 tahun, Anda praktis telah mengganti seluruh kerangka Anda.'],
        ['<strong>Organ</strong>', '15 tahun', '1,5 dekade', 'Hati diperbarui dalam hitungan bulan. Jantung, dalam hitungan tahun. Mosaik ritme.'],
        ['<strong>Otak</strong>', '80+ tahun (neuron)', 'Hampir tidak pernah', 'Neuron kortikal Anda berasal sejak lahir. Tetapi glia (sel pendukung) memang diperbarui.'],
      ],
    },
    {
      type: 'title',
      text: 'Lensa Mata: Bagian Tertua dari Dirimu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ada satu struktur dalam tubuh Anda yang istimewa: <strong>lensa mata</strong>. Sel-sel yang membentuk lensa disimpan selama perkembangan janin dan tidak pernah diganti. Jika Anda hidup sampai usia 100 tahun, sel-sel pusat lensa Anda akan tetap sama dengan yang Anda miliki saat di dalam rahim ibu. Mereka, secara harfiah, adalah bagian tertua dari diri Anda.',
    },
    {
      type: 'title',
      text: 'Perhitungan Pembaruan Total: Paradoks Bobot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator ini menggunakan rata-rata tertimbang dari berbagai jaringan:',
    },
    {
      type: 'list',
      items: [
        '<strong>30% kulit dan darah:</strong> Pembaruan yang hampir lengkap di usia yang lebih muda.',
        '<strong>35% kerangka:</strong> Pembaruan progresif, mencapai 100% pada 10 tahun.',
        '<strong>25% organ:</strong> Pembaruan yang lebih lambat, bervariasi menurut organ.',
        '<strong>10% otak:</strong> Perubahan minimal pada neuron, maksimal pada struktur pendukung.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Hasilnya adalah pada usia 25 tahun, sekitar <strong>93% dari materi Anda saat ini adalah baru</strong>. Pada usia 80 tahun, Anda dapat tersusun dari lebih dari 99% atom yang berbeda dari yang Anda miliki saat lahir.',
    },
    {
      type: 'title',
      text: 'Implikasi Filosofis: Identitas adalah Informasi, Bukan Materi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika tubuh Anda benar-benar baru setiap dekade, mengapa itu tetap "Anda"? Jawabannya adalah bahwa identitas tidak terletak pada atom-atom tertentu, melainkan pada <strong>pola informasi</strong> yang dipegang oleh atom-atom tersebut. Anda seperti sebuah lagu: bukan udara yang bergetar yang sama, tetapi polanya tetap ada.',
    },
    {
      type: 'paragraph',
      html: 'Ini memiliki implikasi yang mendalam: tubuh Anda adalah sebuah proses, bukan sebuah benda. Anda adalah pola pengorganisasian diri yang bertahan melalui perubahan. Anda tidak memiliki atom; Anda adalah struktur yang menyalurkan mereka untuk sementara.',
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

