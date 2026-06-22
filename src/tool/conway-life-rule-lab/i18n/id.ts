import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'lab-aturan-game-of-life-conway';
const title = 'Lab Aturan Game of Life Conway';
const description = 'Mainkan, edit, dan bandingkan automata seluler bergaya Conway dengan aturan B/S, benih pola, metrik langsung, dan papan simulasi responsif.';

const howTo = [
  {
    name: 'Semai papan',
    text: 'Pilih pola seperti glider, pulsar, atau meriam Gosper, letakkan di kisi atau acak populasi awal.',
  },
  {
    name: 'Jalankan simulasi',
    text: 'Gunakan kontrol putar, jeda, langkah, dan tempo untuk mengamati kelahiran, kematian, kepadatan, dan stabilitas berkembang dari waktu ke waktu.',
  },
  {
    name: 'Ubah aturan',
    text: 'Ganti preset atau ketik aturan B/S seperti B3/S23, B36/S23, atau B3678/S34678 untuk membandingkan automata yang berbeda.',
  },
];

const faq = [
  {
    question: 'Apa itu notasi B/S dalam Game of Life?',
    answer: 'Notasi B/S mencantumkan jumlah tetangga yang menciptakan sel hidup baru dan jumlah yang membiarkan sel hidup yang ada bertahan. Game of Life Conway adalah B3/S23: sel mati lahir dengan tepat tiga tetangga, dan sel hidup bertahan dengan dua atau tiga tetangga.',
  },
  {
    question: 'Mengapa alat ini disebut lab aturan dan bukan hanya simulator?',
    answer: 'Aturan Conway klasik disertakan, tetapi simulatornya dirancang untuk membandingkan keluarga automata seluler seperti Life. Mengedit jumlah kelahiran dan kelangsungan hidup mengubah perilaku jangka panjang, menghasilkan replikator, gelombang, pulau beku, pertumbuhan kacau, atau kepunahan.',
  },
  {
    question: 'Apa arti stabilitas dalam simulator?',
    answer: 'Stabilitas memperkirakan seberapa banyak koloni berubah selama generasi terakhir. Stabilitas tinggi berarti sedikit sel yang lahir atau mati relatif terhadap populasi; stabilitas rendah berarti papan turbulen atau mengatur ulang dengan cepat.',
  },
  {
    question: 'Apakah papan memiliki tepi?',
    answer: 'Simulasi menggunakan pembungkus toroidal, sehingga tepi kiri terhubung ke tepi kanan dan atas terhubung ke bawah. Ini membuat pola bergerak secara alami tanpa menghilang di batas keras.',
  },
  {
    question: 'Bisakah saya menggambar pola awal sendiri?',
    answer: 'Ya. Jeda simulasi dan klik atau ketuk sel di papan untuk mengalihkannya. Anda dapat menggabungkan sel yang digambar tangan dengan pola bawaan dan menjalankan hasilnya di bawah preset aturan apa pun.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Papan automata seluler mirip Life',
    play: 'Putar',
    pause: 'Jeda',
    step: 'Langkah',
    clear: 'Kanvas kosong',
    randomize: 'Acak',
    ruleLabel: 'Notasi aturan',
    ruleHelp: 'Kelahiran / bertahan',
    speedLabel: 'Tempo',
    densityLabel: 'Kepadatan awal',
    patternLabel: 'Pola',
    placePattern: 'Tempatkan pola',
    generation: 'Generasi',
    population: 'Populasi',
    density: 'Kepadatan',
    stability: 'Stabilitas',
    births: 'Kelahiran',
    deaths: 'Kematian',
    achievementsLabel: 'Catatan lab',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Osilasi periode 2 terdeteksi',
    achievementImmortal: 'Abadi',
    achievementImmortalDescription: 'Generasi 500 dicapai dengan stabilitas penuh',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Benih acak jarang melewati 1.000 sel hidup',
    presetClassic: 'Conway klasik',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Siang & malam',
    patternGlider: 'Glider',
    patternGosper: 'Meriam Gosper',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentomino',
    colonyStatus: 'Sinyal koloni',
    statusFrozen: 'stabil',
    statusGrowing: 'mengembang',
    statusFading: 'menurun',
    statusChaotic: 'bergejolak',
    invalidRule: 'Gunakan notasi B/S seperti B3/S23.',
  },
  seo: [
    { type: 'title', text: 'Simulator Game of Life Conway dengan Aturan yang Dapat Diedit', level: 2 },
    { type: 'paragraph', html: 'Lab aturan Game of Life Conway ini memungkinkan Anda menjalankan automata seluler klasik dan kemudian mengubah serta membandingkan aturannya. Papan mendukung penggambaran langsung, penempatan pola, benih acak, inspeksi langkah demi langkah, tempo variabel, dan pengukuran langsung untuk populasi, kepadatan, kelahiran, kematian, dan stabilitas.' },
    { type: 'title', text: 'Bagaimana aturan B/S mengubah permainan', level: 3 },
    { type: 'paragraph', html: 'Automata seluler seperti Life sering ditulis dalam <strong>notasi B/S</strong>. Sisi B mendefinisikan berapa banyak tetangga hidup yang dibutuhkan sel mati untuk lahir; sisi S mendefinisikan berapa banyak tetangga yang dibutuhkan sel hidup untuk bertahan. Aturan asli Conway, <strong>B3/S23</strong>, terkenal karena berada di wilayah sempit antara kepunahan dan pertumbuhan tak terkendali.' },
    { type: 'title', text: 'Membaca metrik langsung', level: 3 },
    { type: 'paragraph', html: 'Populasi dan kepadatan menunjukkan berapa banyak sel yang hidup, tetapi mereka tidak menceritakan keseluruhan cerita. Kelahiran dan kematian mengungkapkan tingkat aktivitas saat ini, sementara stabilitas memperkirakan apakah koloni sedang menetap ke osilator, membeku menjadi struktur diam, atau tetap bergejolak.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
