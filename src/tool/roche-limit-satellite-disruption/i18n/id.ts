import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'batas-roche-kalkulator-disrupsi-satelit';
const title = 'Kalkulator Batas Roche dan Simulator Disrupsi Satelit';
const description = 'Hitung batas Roche untuk planet dan bulan, bandingkan jarak pecah fluida dan rigid, serta visualisasikan bagaimana gaya pasang surut mengubah satelit menjadi sistem cincin.';

const howTo = [
  {
    name: 'Pilih benda utama',
    text: 'Pilih planet yang gravitasinya meregangkan satelit. Kalkulator memuat radius, densitas, dan massanya untuk perkiraan batas Roche dan periode orbit.',
  },
  {
    name: 'Pilih tipe satelit',
    text: 'Pilih bulan es, bulan berbatu, tumpukan puing, atau benda kaya besi. Densitas dan kohesi internal mengubah batas pecah.',
  },
  {
    name: 'Gerakkan penggeser orbit',
    text: 'Seret jarak orbit ke dalam atau ke luar. Cakram visual menunjukkan apakah satelit berada di luar batas Roche, menyentuhnya, terfragmentasi, atau sudah menjadi cincin.',
  },
  {
    name: 'Bandingkan batas-batasnya',
    text: 'Gunakan pembacaan untuk membandingkan batas Roche fluida klasik dengan perkiraan rigid yang lebih rendah dan batas operasi yang disesuaikan dengan kohesi.',
  },
];

const faq = [
  {
    question: 'Apa itu batas Roche?',
    answer: 'Batas Roche adalah jarak dari benda utama masif di mana gaya pasang surut pada benda orbit yang lebih kecil menjadi cukup kuat untuk mengalahkan gravitasi diri benda yang lebih kecil tersebut. Di dalam batas tersebut, satelit yang lemah atau mirip fluida dapat tercerai-berai.',
  },
  {
    question: 'Mengapa ada batas Roche fluida dan rigid?',
    answer: 'Satelit fluida mudah berubah bentuk, sehingga pasang surut dapat memperkuat pemanjangannya dan menghancurkannya lebih jauh dari planet. Satelit rigid dapat menahan deformasi dengan kekuatan material, sehingga perkiraan rigid sederhana menempatkan pecah lebih dekat ke benda utama.',
  },
  {
    question: 'Apakah setiap bulan di dalam batas Roche langsung berubah menjadi cincin?',
    answer: 'Tidak. Disrupsi nyata tergantung pada rotasi, komposisi, retakan, porositas, pemanasan, tumbukan, dan kekuatan material. Alat ini menunjukkan batas gravitasi klasik dan menggunakan pita transisi untuk mengomunikasikan risiko, bukan saklar instan.',
  },
  {
    question: 'Mengapa cincin Saturnus terkait dengan fisika batas Roche?',
    answer: 'Cincin Saturnus menempati wilayah di mana material es dapat bertahan sebagai partikel, bukan bergabung menjadi satu bulan besar. Batas Roche membantu menjelaskan mengapa partikel cincin tetap tersebar dekat dengan planet.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Benda utama',
    satelliteType: 'Tipe satelit',
    orbitDistance: 'Jarak orbit',
    rocheBoundary: 'Batas Roche',
    fluidLimit: 'Batas fluida',
    rigidLimit: 'Batas rigid',
    activeLimit: 'Batas aktif',
    safetyRatio: 'Rasio keamanan',
    orbitalPeriod: 'Periode orbit',
    tidalStress: 'Tekanan pasang surut',
    ringFormation: 'Pembentukan cincin',
    stable: 'Orbit stabil',
    grazing: 'Sentuhan pasang surut',
    fragmenting: 'Terfragmentasi',
    ring: 'Sistem cincin',
    km: 'km',
    hours: 'j',
    density: 'Densitas',
    cohesion: 'Kohesi',
    planetRadius: 'Radius planet',
    reset: 'Atur ulang',
    closePass: 'Lintasan dekat',
    moonTrack: 'Jejak bulan',
    debrisTrack: 'Jejak puing',
    primaryEarth: 'Bumi',
    primaryMars: 'Mars',
    primaryJupiter: 'Jupiter',
    primarySaturn: 'Saturnus',
    primaryNeptune: 'Neptunus',
    satelliteIcyMoon: 'Bulan es',
    satelliteRockyMoon: 'Bulan berbatu',
    satelliteRubblePile: 'Tumpukan puing',
    satelliteIronCore: 'Bulan kaya besi',
    cohesionFluid: 'Fluida',
    cohesionFractured: 'Retak',
    cohesionRigid: 'Kaku',
  },
  seo: [
    {
      type: 'title',
      text: 'Rumus Batas Roche, Makna, dan Cara Menggunakan Kalkulator Ini',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Batas Roche</strong> adalah jarak orbit minimum di mana satelit yang sebagian besar terikat oleh gravitasinya sendiri dapat mengorbit benda yang lebih besar tanpa terkoyak oleh gaya pasang surut. Orang biasanya mencarinya ketika ingin tahu apakah bulan, komet, asteroid, atau skenario buatan akan bertahan dalam pendekatan dekat ke planet, atau apakah materialnya akan menyebar menjadi cincin. Kalkulator ini menjawab pertanyaan tersebut dengan menggabungkan radius planet, densitas planet, densitas satelit, dan perkiraan kekuatan internal satelit.',
    },
    {
      type: 'paragraph',
      html: 'Ide utamanya sederhana: gravitasi tidak sama kuat di seluruh bagian satelit. Sisi dekat tertarik lebih kuat daripada sisi jauh, menciptakan gaya peregangan. Jika regangan pasang surut itu lebih kuat daripada gravitasi diri dan kohesi material satelit, benda tersebut dapat retak, kehilangan massa, dan akhirnya terfragmentasi. Batas Roche karena itu bukan sekadar jarak; ini adalah perbandingan antara tekanan pasang surut eksternal dan ikatan internal.',
    },
    {
      type: 'title',
      text: 'Persamaan Batas Roche yang Digunakan oleh Kalkulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk satelit fluida atau sangat lemah, perkiraan klasiknya adalah <strong>d = 2.44 R (rho_M / rho_m)^(1/3)</strong>. Untuk satelit rigid, perkiraan umumnya adalah <strong>d = 1.26 R (rho_M / rho_m)^(1/3)</strong>. Dalam persamaan ini, <strong>d</strong> adalah batas Roche yang diukur dari pusat planet, <strong>R</strong> adalah radius benda utama, <strong>rho_M</strong> adalah densitas benda utama, dan <strong>rho_m</strong> adalah densitas satelit.',
    },
    {
      type: 'list',
      items: [
        '<strong>Radius utama:</strong> Planet yang lebih besar menciptakan jarak batas Roche yang lebih besar bahkan ketika densitasnya serupa.',
        '<strong>Densitas utama:</strong> Benda utama yang lebih padat meningkatkan kekuatan pasang surut pada kelipatan tertentu dari radiusnya.',
        '<strong>Densitas satelit:</strong> Satelit yang lebih padat memiliki gravitasi diri yang lebih kuat, sehingga dapat bertahan lebih dekat ke planet.',
        '<strong>Kekuatan satelit:</strong> Benda fluida, es, retak, atau tumpukan puing hancur lebih jauh daripada benda rigid kompak.',
      ],
    },
    {
      type: 'table',
      headers: ['Model', 'Bentuk rumus', 'Gunakan untuk', 'Arti hasil'],
      rows: [
        ['Batas Roche fluida', '2.44 R (rho_M / rho_m)^(1/3)', 'Bulan es, benda cair, tumpukan puing, komet lemah', 'Jarak pecah konservatif untuk benda yang mudah berubah bentuk.'],
        ['Batas Roche rigid', '1.26 R (rho_M / rho_m)^(1/3)', 'Benda berbatu padat atau logam dengan kekuatan material', 'Perkiraan yang lebih dekat di mana kekuatan material menunda disrupsi.'],
        ['Tampilan penyesuaian kohesi', 'Antara kasus fluida dan rigid', 'Perbandingan skenario cepat di simulator ini', 'Garis risiko praktis untuk tipe satelit yang dipilih, bukan saklar hukum alam universal.'],
      ],
    },
    {
      type: 'title',
      text: 'Contoh: Mengapa Bulan Es di Dekat Saturnus Rentan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturnus jauh lebih renggang daripada Bumi, tetapi ukurannya sangat besar. Satelit es dengan densitas rendah memiliki gravitasi diri yang lemah dibandingkan dengan bulan berbatu kompak, sehingga rasio densitas tetap menempatkan batas Roche fluida jauh dari puncak awan Saturnus. Itulah salah satu alasan fisika batas Roche menjadi kunci untuk memahami mengapa Saturnus dapat mempertahankan sistem cincin yang luas dan terang yang sebagian besar terdiri dari partikel es, bukan satu bulan besar yang terbentuk kembali.',
    },
    {
      type: 'paragraph',
      html: 'Jika Anda memilih Saturnus dan bulan es di kalkulator, lalu seret orbit ke dalam, perhatikan rasio keamanan. Di atas <strong>1.00x</strong>, orbit yang dipilih berada di luar batas Roche aktif. Mendekati <strong>1.00x</strong>, bulan berada di wilayah sentuhan pasang surut di mana pelepasan massa atau retakan menjadi masuk akal. Di bawah <strong>1.00x</strong>, visualisasi beralih ke busur fragmen dan pembentukan cincin karena model yang dipilih memperkirakan disrupsi.',
    },
    {
      type: 'title',
      text: 'Cara Menafsirkan Rasio Keamanan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Rasio keamanan</strong> adalah jarak orbit saat ini dibagi dengan batas Roche yang dipilih. Rasio <strong>1.25x</strong> berarti orbit 25% lebih jauh dari perkiraan pecah aktif. Rasio <strong>1.00x</strong> berarti orbit tepat berada di batas Roche yang dipilih. Rasio <strong>0.80x</strong> berarti satelit berada jauh di dalam zona disrupsi yang dipilih.',
    },
    {
      type: 'table',
      headers: ['Rasio keamanan', 'Status yang ditampilkan', 'Pembacaan praktis'],
      rows: [
        ['Di atas 1.12x', 'Orbit stabil', 'Satelit berada di luar batas Roche yang dipilih untuk model sederhana ini.'],
        ['1.00x hingga 1.12x', 'Sentuhan pasang surut', 'Benda cukup dekat sehingga deformasi, retakan, atau pelepasan permukaan mungkin terjadi.'],
        ['0.78x hingga 1.00x', 'Terfragmentasi', 'Gravitasi diri tidak lagi cukup dalam model yang dipilih; aliran puing masuk akal.'],
        ['Di bawah 0.78x', 'Sistem cincin', 'Benda asli direpresentasikan sebagai material tersebar yang mengikuti orbit di sekitarnya.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Pembacaan periode orbit disertakan karena pendekatan dekat tidak hanya tentang jarak. Material di dalam zona disrupsi mengikuti orbit yang cepat dan sedikit berbeda. Setelah fragmen terpisah, geseran orbit menyebarkannya di sekitar planet, sementara tumbukan meratakan dan mengurutkan puing menjadi cincin seperti piringan.',
    },
    {
      type: 'title',
      text: 'Mengapa Batas Roche Dapat Menciptakan Cincin',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ketika satelit pecah di luar batas Roche, fragmen pada akhirnya dapat bertabrakan dan berkumpul kembali menjadi bulan yang lebih kecil. Di dalam batas Roche, fragmen di dekatnya tidak mudah bergabung menjadi satu benda dengan gravitasi diri yang stabil karena gaya pasang surut terus menarik material terpisah. Hasilnya bisa berupa cincin yang berumur panjang, terutama ketika puingnya terdiri dari es, bersifat tumbukan, dan terus diaduk oleh bulan-bulan kecil atau resonansi.',
    },
    {
      type: 'paragraph',
      html: 'Pembentukan cincin berlangsung bertahap. Bulan yang hancur pertama-tama memanjang, lalu melepaskan partikel dan fragmen yang lebih besar. Fragmen-fragmen tersebut menempati radius orbit yang sedikit berbeda, sehingga mereka melayang di depan atau di belakang satu sama lain. Seiring waktu, tumbukan meredam gerakan vertikal dan material mengendap menjadi piringan tipis. Inilah sebabnya simulator menunjukkan transisi dari satu bulan menjadi busur dan kemudian menjadi cincin yang lebih utuh, alih-alih memperlakukan pecah sebagai ledakan instan.',
    },
    {
      type: 'title',
      text: 'Keterbatasan Penting Kalkulator Batas Roche Ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator ini dirancang untuk intuisi ilmiah yang cepat, bukan untuk desain misi dengan ketelitian tinggi. Satelit nyata dipengaruhi oleh rotasi, eksentrisitas orbit, pelapisan internal, kekuatan tarik, porositas, suhu, pemanasan pasang surut, retakan sebelumnya, tumbukan, dan resonansi dengan bulan lain. Tumpukan puing yang berputar pada orbit eksentrik dapat hancur secara berbeda dari batuan monolitik dingin pada orbit melingkar, bahkan jika densitas rata-ratanya terlihat serupa.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gunakan batas fluida</strong> ketika benda lemah, es, cair, sangat retak, atau terbuat dari agregat longgar.',
        '<strong>Gunakan batas rigid</strong> sebagai perkiraan batas bawah untuk benda kompak dengan kekuatan internal yang berarti.',
        '<strong>Baca batas aktif</strong> sebagai batas kerja yang dipilih simulator untuk tipe satelit yang dipilih.',
        '<strong>Jangan membaca hasil</strong> sebagai prediksi yang tepat untuk bulan nyata tertentu tanpa model geofisika yang terperinci.',
      ],
    },
    {
      type: 'title',
      text: 'Pertanyaan Umum yang Dibantu Alat Ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gunakan alat ini ketika Anda ingin memperkirakan pertanyaan seperti: Seberapa dekat bulan bisa mendekati Bumi sebelum pecah? Mengapa cincin Saturnus berada di dalam wilayah batas Roche? Apakah bulan berbatu bisa bertahan lebih dekat daripada bulan es? Bagaimana densitas mengubah batas Roche? Apa perbedaan antara batas Roche fluida dan rigid? Kontrol dibangun di sekitar perbandingan tersebut, sehingga mengubah satu variabel langsung menunjukkan bagaimana jarak pecah, rasio keamanan, dan visualisasi pembentukan cincin merespons.',
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
