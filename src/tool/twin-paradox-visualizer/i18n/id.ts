import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'visualisator-paradoks-kembar';
const title = 'Visualisator Paradoks Kembar: Dilatasi Waktu Relativitas Khusus';
const description = 'Visualisasikan bagaimana relativitas khusus membuat seorang kembar yang bepergian cepat kembali lebih muda daripada kembaran yang tinggal di Bumi.';

const howTo = [
  {
    name: 'Atur kecepatan pesawat ruang angkasa',
    text: 'Gunakan penggeser kecepatan untuk memilih fraksi kecepatan cahaya dan amati faktor Lorentz meningkat.',
  },
  {
    name: 'Pilih durasi misi dalam kerangka Bumi',
    text: 'Sesuaikan berapa tahun yang berlalu bagi kembaran yang tetap di Bumi selama perjalanan pergi dan pulang.',
  },
  {
    name: 'Bandingkan jam dan garis dunia',
    text: 'Baca selisih usia, waktu yang berlalu di pesawat, jarak dalam kerangka Bumi, dan garis dunia bengkok yang menandai perubahan kerangka inersia kembaran yang bepergian.',
  },
];

const faq = [
  {
    question: 'Apa itu paradoks kembar dalam relativitas khusus?',
    answer: 'Paradoks kembar adalah eksperimen pikiran di mana seorang kembar bepergian melalui ruang angkasa dengan kecepatan relativistik dan kemudian kembali ke Bumi lebih muda daripada kembaran yang tinggal di rumah. Hal ini terasa paradoksal karena awalnya setiap kembar dapat menggambarkan yang lain bergerak, tetapi kembaran yang bepergian mengubah kerangka inersia saat berbalik arah, sehingga kedua jalur melalui ruang-waktu tidak simetris.',
  },
  {
    question: 'Mengapa kembaran yang bepergian menua lebih sedikit?',
    answer: 'Dalam relativitas khusus, waktu proper yang berlalu tergantung pada jalur melalui ruang-waktu. Sebuah jam yang bergerak dengan kecepatan v relatif terhadap pengamat inersia berdetak lebih lambat sebesar faktor Lorentz gamma. Pelancong mengakumulasi waktu proper yang lebih sedikit di sepanjang lintasan pergi dan pulang dibandingkan dengan kembaran yang tinggal di Bumi.',
  },
  {
    question: 'Apakah percepatan yang menyebabkan perbedaan usia?',
    answer: 'Percepatan itu penting karena memungkinkan pelancong membalikkan arah dan bersatu kembali dengan Bumi, tetapi selisih usia dihitung dari jalur ruang-waktu secara keseluruhan, bukan dari percepatan saja. Bahkan jika pembalikan arah sangat singkat, jalur perjalanan tetap akan mengandung waktu proper yang lebih sedikit daripada jalur Bumi.',
  },
  {
    question: 'Apa arti faktor Lorentz gamma?',
    answer: 'Faktor Lorentz gamma sama dengan 1 dibagi dengan akar kuadrat dari 1 dikurangi v kuadrat dibagi c kuadrat. Ini menunjukkan seberapa kuat interval waktu, panjang, dan energi berbeda antara kerangka inersia. Pada kecepatan sehari-hari gamma hampir 1, tetapi di dekat kecepatan cahaya ia meningkat tajam.',
  },
  {
    question: 'Dapatkah efek ini diukur dalam kehidupan nyata?',
    answer: 'Ya. Dilatasi waktu telah diukur dengan partikel cepat, jam atom yang diterbangkan di pesawat, sistem penentuan waktu satelit, dan akselerator partikel. Paradoks kembar menggunakan cerita perjalanan yang ekstrem, tetapi efek jam yang mendasarinya adalah bagian dari fisika modern yang secara rutin diverifikasi.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Visualisasi ruang-waktu paradoks kembar',
    controlsTitle: 'Kontrol paradoks kembar',
    worldlineLabel: 'Diagram garis dunia untuk kembaran Bumi dan kembaran yang bepergian',
    earthTwin: 'Usia kembaran Bumi',
    travelingTwin: 'Usia pelancong',
    presetCruise: 'Jelajah',
    presetRelativistic: 'Relativistik',
    presetExtreme: 'Ekstrem',
    velocityLabel: 'Kecepatan pesawat',
    earthYearsLabel: 'Waktu berlalu di Bumi',
    ageGapLabel: 'Selisih usia saat bersatu kembali',
    gammaLabel: 'Faktor Lorentz',
    shipTimeLabel: 'Waktu proper pelancong',
    distanceLabel: 'Jarak pembalikan arah',
    yearsUnit: 'tahun',
    yearsShortUnit: 'tahun',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Paradoks Kembar untuk Relativitas Khusus',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Visualisator paradoks kembar mengubah salah satu ide paling terkenal dalam relativitas khusus menjadi diagram ruang-waktu interaktif. Atur kecepatan pesawat ruang angkasa sebagai fraksi kecepatan cahaya, pilih berapa tahun yang berlalu di Bumi, dan kalkulator menghitung faktor Lorentz, waktu proper pelancong, selisih usia saat bersatu kembali, dan jarak pergi ke titik pembalikan arah. Tata letak visual memisahkan jam Bumi dari jam pesawat ruang angkasa sehingga asimetri terlihat alih-alih tersembunyi di dalam rumus.',
    },
    {
      type: 'title',
      text: 'Bagaimana Perhitungan Bekerja',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Besaran intinya adalah faktor Lorentz: gamma = 1 / sqrt(1 - v^2 / c^2). Untuk perjalanan pergi-pulang sederhana dengan kecepatan jelajah konstan, waktu yang dialami oleh pelancong adalah durasi misi dalam kerangka Bumi dibagi dengan gamma. Selisih antara kedua durasi tersebut adalah selisih usia saat kembar bersatu kembali. Alat ini juga menunjukkan jarak pembalikan arah dalam kerangka Bumi, yaitu setengah dari total waktu Bumi dikalikan dengan kecepatan pesawat dalam tahun cahaya per tahun.',
    },
    {
      type: 'table',
      headers: ['Kecepatan', 'Faktor Lorentz', 'Laju Jam Pelancong', 'Makna Fisik'],
      rows: [
        ['0.50c', '1.155', '86.6% dari laju Bumi', 'Efek relativistik yang terasa namun moderat.'],
        ['0.86c', '1.960', '51.0% dari laju Bumi', 'Pelancong menua kira-kira setengah lebih cepat selama jelajah.'],
        ['0.98c', '5.025', '19.9% dari laju Bumi', 'Dilatasi waktu ekstrem mendominasi hasil misi.'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Situasi Tidak Simetris',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sekilas setiap kembar dapat mengatakan yang lain bergerak, yang membuat hasilnya tampak kontradiktif. Pemecahannya adalah bahwa kembaran Bumi tetap kira-kira dalam satu kerangka inersia, sementara kembaran yang bepergian pergi, membalikkan arah, dan kembali. Perubahan kerangka inersia itu memberikan pelancong jalur yang berbeda melalui ruang-waktu. Garis dunia yang digambar oleh alat ini membelok pada peristiwa pembalikan arah, sementara garis dunia kembaran Bumi tetap lurus.',
    },
    {
      type: 'title',
      text: 'Membaca Diagram Garis Dunia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Garis dunia adalah peta suatu objek melalui ruang-waktu, bukan hanya melalui ruang. Dalam visualisator ini, garis vertikal Bumi mewakili kembaran yang tinggal di rumah. Jalur merah miring mewakili pelancong yang meninggalkan Bumi dan kembali lagi. Meningkatkan kecepatan membuat jalur pelancong menjadi lebih condong secara dramatis dan mengurangi jumlah waktu proper yang terakumulasi pada jam pesawat ruang angkasa.',
    },
    {
      type: 'list',
      items: [
        '<strong>Selisih usia:</strong> seberapa lebih muda pelancong saat bersatu kembali.',
        '<strong>Faktor Lorentz:</strong> pengali yang menghubungkan waktu kerangka Bumi dengan waktu proper pelancong.',
        '<strong>Waktu proper pelancong:</strong> waktu aktual yang berlalu yang diukur oleh jam di pesawat ruang angkasa.',
        '<strong>Jarak pembalikan arah:</strong> jarak pergi dalam kerangka Bumi sebelum pelancong membalikkan arah.',
      ],
    },
    {
      type: 'title',
      text: 'Bukti Praktis untuk Dilatasi Waktu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Paradoks kembar adalah eksperimen pikiran yang bersih, tetapi dilatasi waktu tidaklah spekulatif. Muon yang tercipta di atmosfer atas bertahan cukup lama untuk mencapai tanah karena jam bergerak mereka terdilatasi dari perspektif Bumi. Eksperimen jam atom di pesawat dan navigasi satelit presisi juga memerlukan koreksi relativistik. Matematika yang sama di balik visualisator ini adalah bagian dari infrastruktur penentuan waktu yang digunakan oleh sistem GPS modern.',
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
