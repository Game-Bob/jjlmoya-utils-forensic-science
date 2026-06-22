import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-albedo-global-bola-salju';
const title = 'Simulator Albedo Global dan Bumi Bola Salju';
const description = 'Jelajahi keseimbangan radiasi termal Bumi, perubahan konstanta matahari, konsentrasi gas rumah kaca, dan umpan balik es-albedo untuk melihat apakah lapisan es menyusut, stabil, atau memicu iklim bola salju.';

const howTo = [
  {
    name: 'Atur sinar matahari masuk',
    text: 'Gerakkan penggeser konstanta matahari untuk menguji skenario Matahari muda redup, sinar matahari Bumi saat ini, atau dorongan masa depan yang lebih terang.',
  },
  {
    name: 'Sesuaikan konsentrasi gas rumah kaca',
    text: 'Ubah konsentrasi gas rumah kaca untuk melihat bagaimana forçasi radiatif bersaing dengan albedo planet yang lebih tinggi.',
  },
  {
    name: 'Taburi planet dengan es',
    text: 'Mulai dengan tudung kutub kecil atau dunia yang tertutup es luas. Model mengulang putaran umpan balik dan menunjukkan apakah es bertambah atau menyusut.',
  },
  {
    name: 'Baca keadaan iklim',
    text: 'Gunakan suhu, radiasi yang diserap, tutupan es akhir, dan kurva linimasa untuk membandingkan hasil sedang, bola salju, dan rumah kaca.',
  },
];

const faq = [
  {
    question: 'Apa itu umpan balik es-albedo?',
    answer: 'Es dan salju memantulkan lebih banyak sinar matahari daripada lautan atau daratan. Saat es meluas, albedo planet naik, energi matahari yang diserap turun, dan pendinginan dapat memungkinkan lebih banyak es terbentuk. Saat es menyusut, permukaan yang lebih gelap menyerap lebih banyak energi dan pemanasan semakin cepat.',
  },
  {
    question: 'Apa yang dimaksud dengan Bumi Bola Salju?',
    answer: 'Bumi Bola Salju adalah keadaan iklim hipotetis di mana es mencapai lintang rendah atau cakupan hampir global. Bukti geologis menunjukkan Bumi mungkin telah mendekati keadaan seperti itu selama era Neoproterozoikum.',
  },
  {
    question: 'Apakah ini model iklim lengkap?',
    answer: 'Tidak. Ini adalah model keseimbangan energi ringkas untuk pembelajaran. Model ini mengabaikan sirkulasi atmosfer, awan, transportasi panas laut, musim, geografi, dan umpan balik siklus karbon, tetapi menangkap logika radiatif inti dari umpan balik albedo.',
  },
  {
    question: 'Mengapa gas rumah kaca bisa memecah keadaan bola salju?',
    answer: 'Gas rumah kaca mengurangi pendinginan gelombang panjang keluar dengan menambahkan forçasi radiatif. Dalam skenario Bumi Bola Salju, karbon dioksida vulkanik dapat terakumulasi saat pelapukan silikat melambat, akhirnya menghangatkan planet cukup untuk mencairkan es di lintang rendah.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Kontrol iklim',
    solarConstant: 'Konstanta matahari',
    greenhouse: 'Gas rumah kaca',
    initialIce: 'Tutupan es awal',
    temperature: 'Suhu keseimbangan',
    absorbed: 'Sinar matahari diserap',
    finalIce: 'Tutupan es akhir',
    albedo: 'Albedo planet',
    forcing: 'Forçasi rumah kaca',
    state: 'Keadaan iklim',
    timeline: 'Linimasa es',
    years: 'tahun model',
    snowball: 'Kuncian bola salju',
    temperate: 'Keseimbangan sedang',
    hothouse: 'Mundur rumah kaca',
    retreating: 'Es menyusut',
    advancing: 'Es bertambah',
    stable: 'Dekat keseimbangan',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Diagnostik radiasi',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator albedo global untuk umpan balik es-albedo dan Bumi Bola Salju',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simulator ini mengeksplorasi salah satu putaran umpan balik terpenting dalam iklim planet: hubungan antara tutupan es, reflektivitas, dan sinar matahari yang diserap. Planet dengan es cerah memantulkan lebih banyak radiasi matahari yang masuk kembali ke angkasa. Pendinginan itu dapat mempertahankan atau memperluas es, meningkatkan albedo lebih jauh dan mendorong sistem menuju keadaan Bumi Bola Salju. Planet dengan lebih sedikit es menyerap lebih banyak sinar matahari, yang dapat mempercepat deglasiasi.',
    },
    {
      type: 'paragraph',
      html: 'Gunakan penggeser untuk mengubah konstanta matahari, konsentrasi gas rumah kaca, dan tutupan es awal. Model kemudian mengulang keseimbangan energi global sederhana dan menunjukkan apakah iklim bergerak menuju glasiasi luas, keseimbangan sedang, atau keadaan panas dengan sedikit es. Ini dirancang untuk intuisi cepat: setiap kontrol memetakan langsung ke istilah fisik dalam anggaran radiasi.',
    },
    {
      type: 'title',
      text: 'Bagaimana keseimbangan energi diperkirakan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Radiasi gelombang pendek yang diserap diperkirakan sebagai S(1 - a) / 4, di mana S adalah konstanta matahari dan a adalah albedo planet. Pembagian dengan empat mengubah sinar matahari yang dicegat oleh piringan Bumi menjadi rata-rata atas seluruh permukaan bola. Albedo lebih tinggi menurunkan energi yang diserap; konsentrasi gas rumah kaca lebih tinggi menambah forçasi radiatif positif yang menaikkan perkiraan suhu permukaan.',
    },
    {
      type: 'table',
      headers: ['Kontrol', 'Makna fisik', 'Efek iklim'],
      rows: [
        ['Konstanta matahari', 'Energi bintang masuk di orbit Bumi', 'Nilai lebih tinggi menghangatkan planet dan menyusutkan es.'],
        ['Gas rumah kaca', 'Forçasi radiatif gelombang panjang relatif terhadap atmosfer referensi', 'Nilai lebih tinggi membuat kuncian bola salju lebih sulit.'],
        ['Tutupan es awal', 'Reflektivitas awal planet', 'Nilai tinggi dapat memicu pendinginan tak terkendali melalui umpan balik albedo.'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa umpan balik albedo bisa menjadi nonlinier',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Putaran es-albedo bukanlah penyesuaian satu arah yang lembut. Setelah es mencapai cukup banyak planet, permukaan yang lebih cerah dapat menghilangkan begitu banyak sinar matahari yang diserap sehingga pencairan musim panas menjadi lemah. Dalam arah sebaliknya, es yang menyusut mengekspos lautan dan daratan yang lebih gelap, meningkatkan penyerapan dan mendorong planet menjauh dari glasiasi. Itulah sebabnya forçasi serupa dapat menghasilkan hasil berbeda tergantung pada tutupan es awal.',
    },
    {
      type: 'paragraph',
      html: 'Bumi nyata menambahkan banyak komplikasi: awan, debu di atas es, transportasi panas laut, posisi benua, sinar matahari musiman, dinamika es laut, dan siklus karbon. Model sederhana tetap bernilai karena mengisolasi anggaran radiasi orde pertama. Ini memungkinkan Anda melihat mengapa hipotesis Bumi Bola Salju bergantung pada sinar matahari lemah atau pemicu albedo tinggi dan akumulasi gas rumah kaca kemudian untuk melarikan diri.',
    },
    {
      type: 'title',
      text: 'Menafsirkan simulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kuncian bola salju:</strong> tutupan es akhir sangat tinggi dan suhu keseimbangan tetap jauh di bawah titik beku.',
        '<strong>Keseimbangan sedang:</strong> model menetap dengan tutupan es parsial dan radiasi yang diserap sedang.',
        '<strong>Mundur rumah kaca:</strong> es runtuh ke fraksi yang sangat kecil sementara forçasi rumah kaca dan sinar matahari yang diserap tetap tinggi.',
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
