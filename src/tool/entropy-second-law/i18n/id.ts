import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-entropi-hukum-kedua';
const title = 'Simulator Entropi dan Hukum Kedua Termodinamika';
const description = 'Saksikan ruang partikel panas dan dingin bercampur, menyetarakan, dan mendorong entropi naik dengan simulator difusi visual dan grafik entropi langsung.';

const howTo = [
  {
    name: 'Atur suhu kiri dan kanan',
    text: 'Pilih ruang yang lebih dingin dan ruang yang lebih panas untuk menciptakan ketidakseimbangan termal awal. Perbedaan yang lebih besar membuat pendekatan ireversibel menuju kesetimbangan lebih mudah terlihat.',
  },
  {
    name: 'Sesuaikan bukaan penghalang',
    text: 'Buka atau persempit lorong antara kedua ruang. Bukaan yang lebih lebar memungkinkan partikel dan energi berdifusi lebih cepat, sehingga kurva entropi naik lebih cepat.',
  },
  {
    name: 'Amati kotak partikel',
    text: 'Partikel biru mewakili gerakan berenergi rendah dan partikel oranye mewakili gerakan berenergi tinggi. Seiring bertambahnya tabrakan dan persilangan, kotak menjadi lebih tercampur dan kurang teratur.',
  },
  {
    name: 'Baca grafik entropi',
    text: 'Lacak bagaimana pencampuran spasial dan pemerataan termal bergabung menjadi satu skor entropi yang meningkat. Kurva ini dimaksudkan untuk membangun intuisi mengapa sistem terisolasi berevolusi menuju makrostate yang lebih mungkin.',
  },
];

const faq = [
  {
    question: 'Mengapa entropi naik di simulator ini?',
    answer: 'Keadaan awal dibuat teratur secara artifisial: satu sisi lebih dingin, sisi lain lebih panas. Setelah penghalang memungkinkan pertukaran, ada lebih banyak susunan campuran daripada susunan terpisah, sehingga sistem secara alami bergerak menuju makrostate yang jauh lebih mungkin.',
  },
  {
    question: 'Apakah ini membuktikan hukum kedua secara tepat?',
    answer: 'Tidak. Ini adalah model partikel didaktis, bukan kode laboratorium dinamika molekuler. Model ini menangkap intuisi inti di balik difusi ireversibel dan pemerataan termal, yang merupakan maksud pencarian sebagian besar pengguna ketika mereka bertanya mengapa entropi cenderung meningkat.',
  },
  {
    question: 'Apa yang dimaksud dengan entropi spasial dan entropi termal di sini?',
    answer: 'Entropi spasial mengukur seberapa merata partikel didistribusikan antara ruang kiri dan kanan. Entropi termal dalam simulator ini mengukur seberapa kecil celah energi antara kedua bagian. Skor total menggabungkan keduanya sehingga pengguna dapat melihat pencampuran dan aliran panas secara bersamaan.',
  },
  {
    question: 'Mengapa partikel terus bergerak bahkan di dekat kesetimbangan?',
    answer: 'Kesetimbangan tidak berarti gerakan berhenti. Itu berarti ketidakseimbangan makroskopis menghilang. Molekul masih bergerak, bertabrakan, dan bertukar energi, tetapi tidak ada arah skala besar yang persisten untuk dieksploitasi.',
  },
  {
    question: 'Bisakah entropi sesekali menurun sesaat?',
    answer: 'Dalam sistem mikroskopis, fluktuasi kecil mungkin terjadi. Alat visual ini menghaluskan fluktuasi tersebut dan menekankan tren statistik keseluruhan: dalam sistem terisolasi yang besar, keadaan teratur dengan entropi rendah jauh lebih kecil kemungkinannya dibandingkan keadaan campuran.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Pencampuran ireversibel',
    results: 'Hasil simulator entropi',
    particleBox: 'Kotak difusi partikel',
    barrier: 'Penghalang',
    entropyGraph: 'Grafik entropi terhadap waktu',
    liveTrace: 'Jejak langsung',
    highEntropy: 'tinggi',
    midEntropy: 'sedang',
    lowEntropy: 'rendah',
    controls: 'Kontrol simulator entropi',
    leftTemperature: 'Suhu kiri',
    rightTemperature: 'Suhu kanan',
    gateAperture: 'Bukaan penghalang',
    pause: 'Jeda',
    reset: 'Atur ulang',
    resume: 'Lanjutkan',
    totalEntropy: 'Entropi total',
    particleBalance: 'Partikel kiri/kanan',
    spatialEntropy: 'Entropi spasial',
    thermalEntropy: 'Entropi termal',
    energyGap: 'Celah energi',
    noteLabel: 'Interpretasi',
    stateGradient: 'Gradien',
    stateMixing: 'Pencampuran',
    stateEquilibrium: 'Kesetimbangan',
    note: 'Probabilitas makrostate menuju ketidakteraturan maksimum.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator entropi untuk hukum kedua termodinamika dan difusi ireversibel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gunakan simulator entropi ini untuk memvisualisasikan salah satu ide terpenting dalam fisika: sistem terisolasi berevolusi dari keadaan yang diatur secara artifisial menuju keadaan campuran yang lebih mungkin. Alih-alih membaca definisi entropi yang statis, kamu dapat menyaksikan ruang panas dan ruang dingin bertukar partikel dan energi secara real-time sementara kurva langsung melacak peningkatan ketidakteraturan.',
    },
    {
      type: 'paragraph',
      html: 'Alat ini dirancang untuk maksud pencarian paling umum di balik pertanyaan seperti "mengapa entropi meningkat", "bagaimana cara kerja hukum kedua", dan "apa itu difusi termal". Tujuannya bukan sekadar memberikan slogan tentang ketidakteraturan, tetapi menghubungkan entropi dengan probabilitas, aliran panas, pencampuran, dan kesetimbangan dengan cara yang terasa langsung terlihat.',
    },
    {
      type: 'title',
      text: 'Apa arti hukum kedua termodinamika dalam istilah praktis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hukum kedua menyatakan bahwa untuk sistem terisolasi, proses spontan bergerak menuju makrostate dengan entropi yang lebih tinggi. Dalam bahasa sehari-hari, itu berarti susunan termal yang sangat terorganisir, seperti partikel panas di satu sisi dan partikel dingin di sisi lain, tidak akan tetap terpisah kecuali kerja terus-menerus diberikan untuk mempertahankannya.',
    },
    {
      type: 'paragraph',
      html: 'Itu tidak terjadi karena materi "lebih suka kekacauan" dalam arti mistis. Itu terjadi karena ada jauh lebih banyak susunan mikroskopis yang sesuai dengan keadaan campuran daripada keadaan terpisah. Entropi karena itu menghubungkan termodinamika dengan penghitungan: semakin besar jumlah mikrostates yang kompatibel, semakin besar entropinya.',
    },
    {
      type: 'title',
      text: 'Bagaimana simulator difusi entropi ini bekerja',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kotak partikel dimulai dalam konfigurasi entropi rendah dengan ketidakseimbangan suhu di seberang penghalang. Ketika lorong antara ruang terbuka, partikel menyeberang, bertabrakan, dan membawa energi dari satu sisi ke sisi lain. Simulasi melacak dua komponen intuitif: <strong>entropi spasial</strong>, yang meningkat saat partikel menjadi kurang terpisah, dan <strong>entropi termal</strong>, yang meningkat saat distribusi energi kiri dan kanan menjadi kurang berbeda.',
    },
    {
      type: 'paragraph',
      html: 'Skor entropi total yang ditampilkan di layar adalah proksi pengajaran yang dibangun dari dua komponen tersebut. Ini bukan fungsi keadaan tingkat laboratorium dan tidak mengklaim mereproduksi mekanika statistik penuh. Tujuannya adalah membantu pengguna membangun intuisi yang benar: aliran panas ireversibel dan difusi keduanya menggerakkan sistem menuju kesetimbangan karena kesetimbangan sesuai dengan lebih banyak susunan yang dapat diakses.',
    },
    {
      type: 'table',
      headers: ['Sinyal visual', 'Apa yang diwakilinya', 'Mengapa itu penting'],
      rows: [
        ['Partikel biru vs oranye', 'Energi kinetik relatif', 'Menunjukkan bahwa perbedaan suhu sebenarnya adalah perbedaan dalam gerakan mikroskopis rata-rata.'],
        ['Bukaan penghalang', 'Kemudahan pertukaran antar ruang', 'Memungkinkan kamu melihat mengapa laju difusi berubah ketika jalur transportasi berubah.'],
        ['Pengukur entropi spasial', 'Seberapa merata partikel tersebar', 'Menjelaskan bahwa pencampuran saja sudah membuat makrostate lebih mungkin.'],
        ['Pengukur entropi termal', 'Seberapa kecil celah energi kiri-kanan', 'Menunjukkan bahwa kesetimbangan bukan hanya tentang posisi tetapi juga tentang berbagi energi.'],
        ['Kurva entropi', 'Tren dari waktu ke waktu', 'Mengubah ide abstrak tentang ireversibilitas menjadi proses relaksasi satu arah yang terlihat.'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa entropi dapat meningkat meskipun setiap partikel mematuhi gerakan sederhana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Siswa sering beranggapan bahwa hukum kedua memerlukan gesekan, niat, atau "gaya panah waktu" khusus. Poin yang lebih dalam bersifat statistik. Setiap partikel mengikuti aturan lokal, tetapi ketika banyak partikel berinteraksi, jumlah makrostate campuran sepenuhnya mendominasi jumlah makrostate teratur. Sistem karena itu menghabiskan hampir seluruh waktunya dalam konfigurasi campuran dan hanya sebagian kecil dalam konfigurasi yang terpisah rapi.',
    },
    {
      type: 'paragraph',
      html: 'Itulah sebabnya setetes pewarna menyebar di air, mengapa suhu ruangan menjadi setara setelah pemanas dimatikan, dan mengapa benda panas mendingin saat bersentuhan dengan benda yang lebih dingin. Proses sebaliknya tidak dilarang oleh gerakan Newtonian dalam arti mikroskopis yang ketat, tetapi secara statistik sangat tidak mungkin untuk sistem besar sehingga secara efektif tidak pernah diamati pada skala manusia.',
    },
    {
      type: 'title',
      text: 'Entropi, kesetimbangan, dan kesalahpahaman umum',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Entropi bukan sekadar "kekacauan":</strong> ide yang lebih tepat adalah jumlah susunan mikroskopis yang kompatibel dengan deskripsi makroskopis yang sama.',
        '<strong>Kesetimbangan bukan berarti diam:</strong> partikel terus bergerak secara konstan, tetapi ketidakseimbangan skala besarnya saling meniadakan.',
        '<strong>Aliran panas bersifat directional karena probabilitas bersifat directional:</strong> ada jauh lebih banyak cara untuk berbagi energi daripada menjaganya tetap terpisah secara tajam.',
        '<strong>Entropi rendah bukanlah hal yang mustahil:</strong> itu hanya memerlukan batasan, persiapan, atau kerja dari luar sistem terisolasi.',
        '<strong>Simulator ini bersifat kualitatif:</strong> ia memberikan intuisi fisika, bukan kalorimetri yang tepat, fungsi partisi, atau koefisien transportasi molekuler.',
      ],
    },
    {
      type: 'title',
      text: 'Kapan menggunakan simulator ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gunakan untuk demonstrasi kelas, revisi fisika, pendidikan kimia, penulisan sains, dan penjelasan konseptual cepat. Ini sangat berguna ketika seseorang memahami bahwa panas mengalir dari panas ke dingin tetapi belum melihat bagaimana itu terhubung dengan probabilitas, penghitungan makrostate, dan hukum kedua termodinamika.',
    },
    {
      type: 'paragraph',
      html: 'Jika tujuanmu adalah perhitungan termodinamika yang ketat untuk gas nyata, siklus mesin, atau sistem laboratorium, kamu akan memerlukan persamaan keadaan, kondisi batas, dan parameter yang didasarkan secara eksperimental. Jika tujuanmu adalah intuisi mengapa difusi bersifat ireversibel dan mengapa entropi cenderung naik, simulator ini dibangun tepat untuk pertanyaan itu.',
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
