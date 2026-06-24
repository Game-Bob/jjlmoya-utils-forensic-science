import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'penentuan-jenis-kelamin-biologis-morfologi-kerangka-antropologi-forensik';
const title = 'Penentu Jenis Kelamin Antropologi Forensik';
const description = 'Perkirakan jenis kelamin biologis dari indikator morfologi tengkorak dan panggul menggunakan model probabilitas Bayesian.';

const howTo = [
  {
    name: 'Pilih wilayah anatomi untuk dianalisis',
    text: 'Putuskan apakah akan menganalisis panggul, tengkorak, atau keduanya. Mengevaluasi kedua area meningkatkan akurasi dan keyakinan klasifikasi jenis kelamin biologis akhir.',
  },
  {
    name: 'Nilai setiap sifat morfologi',
    text: 'Periksa spesimen tulang dan beri skor pada indikator utama pada skala 1 (Hiper-feminin) hingga 5 (Hiper-maskulin) berdasarkan petunjuk visual.',
  },
  {
    name: 'Masukkan skor ke mesin Bayesian',
    text: 'Gunakan penggeser untuk memasukkan skor untuk setiap sifat. Klasifikasi secara otomatis memperbarui probabilitas posterior untuk kategori laki-laki dan perempuan.',
  },
  {
    name: 'Tafsirkan hasil probabilitas',
    text: 'Tinjau indikator keyakinan akhir, klasifikasi jenis kelamin yang dominan, dan baca catatan diagnostik forensik untuk memahami variasi biologis.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Apa itu metode Phenice dalam penentuan jenis kelamin panggul?',
    answer: 'Metode Phenice, yang diterbitkan oleh T. W. Phenice pada tahun 1969, berfokus pada tiga karakteristik panggul tertentu: lengkung ventral, konkavitas subpubik, und bagian medial dari ramus ischiopubic. Ini tetap menjadi salah satu metode morfologi paling andal dalam antropologi forensik, menghasilkan tingkat akurasi melebihi 95 persen bila diterapkan pada sisa-sisa kerangka yang terawat baik.',
  },
  {
    key: 'faq-2',
    question: 'Mengapa panggul lebih disukai daripada tengkorak untuk estimasi jenis kelamin?',
    answer: 'Panggul adalah bagian yang paling menunjukkan dimorfisme seksual dari kerangka manusia karena mencerminkan adaptasi fungsional untuk melahirkan anak pada wanita. Tekanan evolusioner telah membentuk panggul wanita menjadi lebih lebar, lebih dangkal, dan memiliki sudut yang lebih lebar daripada panggul pria, sedangkan dimorfisme tengkorak terutama terkait dengan ukuran tubuh secara keseluruhan dan perkembangan otot.',
  },
  {
    key: 'faq-3',
    question: 'Bagaimana klasifikator Bayesian memperkirakan probabilitas jenis kelamin?',
    answer: 'Klasifikator kami menggunakan model pembaruan Bayesian. Ini mengasumsikan probabilitas prior 50 persen untuk kedua jenis kelamin. Untuk setiap penanda anatomi yang dinilai, model mengalikan prior dengan kemungkinan mendapatkan skor spesifik tersebut pada populasi laki-laki versus perempuan. Skor yang dihasilkan dinormalisasi.',
  },
  {
    key: 'faq-4',
    question: 'Apa yang diwakili oleh skor 3 dalam analisis morfologi?',
    answer: 'Skor 3 mewakili morfologi yang tidak pasti atau netral. Ini menunjukkan bahwa sifat tersebut menunjukkan karakteristik yang berada di tengah-tengah spektrum dimorfisme seksual manusia, tidak menunjukkan sifat khas perempuan (1-2) maupun laki-laki (4-5).',
  },
  {
    key: 'faq-5',
    question: 'Bisakah model ini menentukan jenis kelamin sisa-sisa kerangka anak-anak?',
    answer: 'Tidak. Penentuan jenis kelamin morfologis sangat tidak andal untuk sisa-sisa anak-anak karena karakteristik morfologi yang membedakan kerangka laki-laki dan perempuan tidak berkembang sepenuhnya hingga masa pubertas. Antropolog forensik umumnya mengandalkan pengujian genetik atau indikator gigi untuk anak-anak.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Morfologi Panggul',
    craniumRegion: 'Morfologi Tengkorak',
    subpubicAngle: 'Sudut Subpubik',
    subpubicAngleDesc: 'Sudut yang terbentuk di bawah simfisis pubis.',
    subpubicAngleFem: 'Sudut U lebar (>90°)',
    subpubicAngleMasc: 'Sudut V sempit (<70°)',
    sciaticNotch: 'Takik Sciatic Besar',
    sciaticNotchDesc: 'Takik sciatic besar di ilium posterior.',
    sciaticNotchFem: 'Takik U lebar dan dangkal',
    sciaticNotchMasc: 'Takik sempit dan dalam',
    ventralArc: 'Lengkung Ventral',
    ventralArcDesc: 'Punggungan tulang yang melintasi pubis anterior.',
    ventralArcFem: 'Punggungan tinggi yang menonjol',
    ventralArcMasc: 'Garis tidak ada atau sangat samar',
    preauricularSulcus: 'Sulcus Preauricular',
    preauricularSulcusDesc: 'Alur yang berdekatan dengan sendi sakroiliaka.',
    preauricularSulcusFem: 'Alur yang dalam dan berlubang',
    preauricularSulcusMasc: 'Tidak ada atau mulus',
    mastoidProcess: 'Prosesus Mastoid',
    mastoidProcessDesc: 'Tonjolan tulang di belakang saluran telinga.',
    mastoidProcessFem: 'Tonjolan kecil dan pendek',
    mastoidProcessMasc: 'Tonjolan besar dan panjang',
    supraorbitalRidge: 'Punggungan Supraorbital',
    supraorbitalRidgeDesc: 'Tonjolan punggungan alis (glabella).',
    supraorbitalRidgeFem: 'Dahi halus dan datar',
    supraorbitalRidgeMasc: 'Punggungan alis yang menonjol',
    mentalEminence: 'Eminensia Mental (Dagu)',
    mentalEminenceDesc: 'Bentuk dan kejelasan dagu.',
    mentalEminenceFem: 'Dagu bulat dan runcing',
    mentalEminenceMasc: 'Dagu lebar dan persegi',
    nuchalCrest: 'Puncak Nuchal',
    nuchalCrestDesc: 'Punggungan tulang di bagian belakang tengkorak.',
    nuchalCrestFem: 'Bidang oksipital halus',
    nuchalCrestMasc: 'Tonjolan kasar dan seperti kait',
    selectOption: 'Pilih skor...',
    score1: '1 - Hiper-feminin',
    score2: '2 - Feminin',
    score3: '3 - Indeterminat',
    score4: '4 - Maskulin',
    score5: '5 - Hiper-maskulin',
    notEvaluated: 'Tidak dievaluasi',
    resultsTitle: 'Hasil Penentuan Jenis Kelamin',
    femaleProbLabel: 'Probabilitas Perempuan',
    maleProbLabel: 'Probabilitas Laki-laki',
    predominantLabel: 'Klasifikasi Dominan',
    confidenceLabel: 'Keyakinan Estimasi',
    weakConf: 'Lemah (Sedikit indikator yang dinilai)',
    moderateConf: 'Sedang',
    strongConf: 'Kuat',
    femaleClass: 'Perempuan',
    maleClass: 'Laki-laki',
    indeterminateClass: 'Indeterminat',
    noteNoData: 'Silakan beri skor setidaknya satu penanda anatomi untuk memulai perhitungan.',
    noteTriageOnly: 'Ini adalah alat skrining pendidikan. Penilaian forensik formal memerlukan analisis metrik dan tinjauan multi-ahli.',
    noteBayesianEst: 'Probabilitas dihitung secara dinamis menggunakan matriks probabilitas Bayesian non-parametrik.',
    pelvicTitle: 'Panduan Referensi Panggul',
    cranialTitle: 'Panduan Referensi Tengkorak',
    pelvisDesc: 'Panggul wanita diadaptasi untuk melahirkan, menghasilkan struktur yang lebih lebar dan sudut yang lebih dangkal. Panggul pria lebih kokoh, sempit, dan berorientasi vertikal.',
    cranialDesc: 'Tengkorak pria umumnya lebih besar dan lebih kokoh, dengan prosesus mastoid yang lebih besar, punggungan alis yang menonjol, dan perlekatan otot yang kasar. Tengkorak wanita lebih anggun, dengan punggungan yang lebih halus dan dagu yang bulat.',
  },
  seo: [
    {
      type: 'title',
      text: 'Pengantar Penentuan Jenis Kelamin Osteologis dalam Antropologi Forensik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memperkirakan jenis kelamin biologis adalah salah satu langkah utama dalam menetapkan profil biologis untuk sisa-sisa kerangka yang tidak diketahui dalam antropologi forensik, toksikologi, dan arkeologi. Bersama dengan tinggi badan, usia saat kematian, dan afinitas leluhur, estimasi jenis kelamin membantu mempersempit kumpulan orang hilang yang potensial. Kerangka manusia menunjukkan dimorfisme seksual, yaitu perbedaan fisik antara jantan dan betina dari suatu spesies. Dimorfisme ini tercermin dalam ukuran (kekokohan vs keanggunan) dan bentuk (khususnya adaptasi panggul yang terkait dengan melahirkan anak).',
    },
    {
      type: 'paragraph',
      html: 'Alat interaktif ini memungkinkan siswa forensik, pemeriksa medis, dan peserta pelatihan untuk mengevaluasi tanda-tanda morfologi panggul dan tengkorak. Dengan memasukkan skor berdasarkan panduan visual, pengguna dapat mengamati bagaimana penanda tulang individu berkontribusi pada model statistik kumulatif.',
    },
    {
      type: 'title',
      text: 'Dimorfisme Panggul dan Metode Phenice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Panggul diakui secara universal sebagai wilayah kerangka yang paling akurat untuk penentuan jenis kelamin biologis. Panggul wanita lebih lebar, memiliki jalan lahir yang lebih besar, takik sciatic yang lebih lebar, dan sudut subpubik yang melebihi sembilan puluh derajat. Sebaliknya, panggul pria dicirikan oleh sudut subpubik berbentuk V yang sempit dan takik sciatic yang sempit. Metode Phenice berfokus pada tiga fitur spesifik tulang pubis: lengkung ventral, konkavitas subpubik, dan bagian medial dari ramus ischiopubic. Kehadiran lengkung ventral yang terdefinisi dengan baik adalah indikator jenis kelamin perempuan yang sangat kuat, sedangkan ketidakhadirannya adalah khas pada pria.',
    },
    {
      type: 'title',
      text: 'Dimorfisme Tengkorak dan Penanda Kekokohan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ketika tulang panggul hilang atau tidak terawat dengan baik, tengkorak berfungsi sebagai alternatif utama untuk estimasi jenis kelamin. Evaluasi tengkorak didasarkan pada kekokohan, karena tengkorak pria umumnya menunjukkan lokasi perlekatan otot yang lebih menonjol dan prosesus tulang yang lebih besar karena perbedaan perkembangan yang didorong oleh hormon. Prosesus mastoid, yang terletak di belakang telinga, lebih besar dan lebih lebar pada pria. Punggungan supraorbital atau glabella menonjol pada pria, sedangkan dahi wanita tetap halus dan vertikal. Dagu (eminensia mental) cenderung persegi dan lebar pada pria, sedangkan wanita menyajikan struktur dagu yang lebih bulat dan runcing.',
    },
    {
      type: 'table',
      headers: ['Tanda Anatomi', 'Karakteristik Feminin (Skor 1-2)', 'Karakteristik Maskulin (Skor 4-5)', 'Nilai Forensik'],
      rows: [
        ['Sudut Subpubik', 'Sudut lebar, tumpul (seringkali melebihi 90 derajat).', 'Sudut sempit, lancip (biasanya kurang dari 70 derajat).', 'Nilai diagnostik individu tertinggi untuk penentuan jenis kelamin panggul.'],
        ['Takik Sciatic', 'Takik lebar dan dangkal yang menyerupai bentuk U.', 'Takik sempit dan dalam yang menyerupai bentuk jempol.', 'Penanda yang sangat tahan lama, sering diawetkan dalam sisa-sisa yang terfragmentasi.'],
        ['Prosesus Mastoid', 'Kecil, pendek, dan menonjol minimal di bawah meatus pendengaran.', 'Besar, panjang, dan menonjol secara signifikan ke bawah.', 'Penanda tengkorak yang andal, tahan terhadap pelapukan.'],
        ['Punggungan Alis', 'Glabella halus dan rata dengan profil dahi vertikal.', 'Punggungan alis menonjol dengan dahi miring.', 'Membedakan tengkorak pria yang kokoh dari tengkorak wanita yang anggun.'],
      ],
    },
    {
      type: 'title',
      text: 'Pemodelan Matematika Bayesian dalam Klasifikasi Morfologi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Penilaian forensik tradisional mengandalkan klasifikasi subjektif, yang dapat menyebabkan bias pengamat. Antropologi forensik modern memasukkan model probabilitas statistik untuk mengukur ketidakpastian. Statistik Bayesian sangat ideal untuk tujuan ini, dimulai dengan probabilitas prior yang sama (lima puluh persen laki-laki, lima puluh persen perempuan) dan memperbaruinya saat bukti baru diperkenalkan. Ketika sifat panggul menunjukkan morfologi yang sangat feminin (sudut subpubik lebar, skor 1), kemungkinan klasifikasi perempuan meningkat, mengesampingkan penanda perantara atau bertentangan yang ada di tengkorak.',
    },
    {
      type: 'paragraph',
      html: 'Simulator digital ini menerapkan mesin Bayesian non-parametrik. Perhitungan memberikan persentase probabilitas, bukan output biner yang kaku, yang sejalan dengan pedoman forensik modern yang menekankan pelaporan interval kepercayaan dan tingkat kesalahan dalam kesaksian pengadilan. Keyakinan klasifikasi tergantung pada jumlah tanda yang dievaluasi, dengan skor dari wilayah panggul dan tengkorak memberikan hasil yang paling kuat.',
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
