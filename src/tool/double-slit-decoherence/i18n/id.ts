import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-celah-ganda-dekoherensi';
const title = 'Simulator Eksperimen Celah Ganda dan Dekoherensi';
const description = 'Nyalakan dan matikan detektor jalur mana untuk melihat interferensi kuantum memudar menjadi dua pita partikel dalam simulator celah ganda visual.';

const howTo = [
  {
    name: 'Mulai dengan detektor mati',
    text: 'Biarkan detektor jalur mana dinonaktifkan dan saksikan layar membentuk pinggiran interferensi terang dan gelap dari amplitudo probabilitas yang koheren.',
  },
  {
    name: 'Tingkatkan kekuatan detektor',
    text: 'Naikkan kontrol detektor untuk memperkenalkan informasi jalur mana. Semakin kuat detektor, semakin turun koherensi dan pinggiran memudar.',
  },
  {
    name: 'Ubah geometri celah',
    text: 'Sesuaikan jarak celah dan lebar celah untuk melihat bagaimana geometri mengubah jarak pinggiran, lebar selubung, dan distribusi akhir di layar.',
  },
  {
    name: 'Baca metrik langsung',
    text: 'Gunakan visibilitas pinggiran, informasi jalur mana, dan koherensi untuk menghubungkan pola visual dengan kisah pengukuran kuantum.',
  },
];

const faq = [
  {
    question: 'Mengapa pola berubah ketika detektor dinyalakan?',
    answer: 'Detektor yang dapat mengungkapkan celah mana yang digunakan partikel menghancurkan hubungan fase antara dua alternatif. Tanpa koherensi itu, dua jalur probabilitas tidak lagi berinterferensi dan layar mendekati dua pita partikel lebar.',
  },
  {
    question: 'Apakah simulator ini berarti kesadaran meruntuhkan fungsi gelombang?',
    answer: 'Tidak. Simulator berfokus pada informasi fisik jalur mana dan dekoherensi. Detektor, lingkungan, atau interaksi apa pun yang membuat jalur dapat dibedakan dapat menekan interferensi tanpa memerlukan pengamat sadar.',
  },
  {
    question: 'Apa itu visibilitas pinggiran?',
    answer: 'Visibilitas pinggiran membandingkan daerah terang dan gelap di layar. Visibilitas tinggi berarti kontras interferensi kuat. Visibilitas rendah berarti celah gelap telah terisi dan pola berperilaku lebih seperti dua aliran partikel independen.',
  },
  {
    question: 'Apakah ini pemecah mekanika kuantum lengkap?',
    answer: 'Tidak. Ini adalah model edukatif yang menggabungkan selubung interferensi celah ganda dengan kontrol dekoherensi. Dibangun untuk menjelaskan efek pengukuran secara visual, bukan untuk menggantikan simulasi persamaan Schrodinger untuk peralatan nyata.',
  },
  {
    question: 'Mengapa jarak celah memengaruhi jarak pinggiran?',
    answer: 'Jarak yang lebih besar menciptakan perbedaan fase yang lebih cepat di layar, sehingga pita terang dan gelap menjadi lebih rapat. Jarak yang lebih kecil menyebarkan pinggiran lebih jauh.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Alat celah ganda',
    controls: 'Kontrol celah ganda',
    results: 'Hasil celah ganda',
    kicker: 'Kontrol pengukuran',
    detectorToggle: 'Aktifkan detektor jalur mana',
    detectorStrength: 'Kekuatan detektor',
    slitSeparation: 'Jarak celah',
    slitWidth: 'Lebar celah',
    unobserved: 'Tidak diamati',
    observed: 'Diamati',
    waveMode: 'Interferensi',
    particleMode: 'Pita partikel',
    fringeVisibility: 'Visibilitas pinggiran',
    whichPath: 'Info jalur mana',
    coherence: 'Koherensi',
    readoutNote: 'Interferensi bertahan ketika kedua jalur tetap tidak dapat dibedakan. Pengukuran membuat informasi jalur tersedia dan layar kehilangan pinggiran gelapnya.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator eksperimen celah ganda dengan dekoherensi dan deteksi jalur mana',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simulator celah ganda ini mengubah eksperimen kuantum klasik menjadi model visual interaktif. Dengan detektor mati, layar menunjukkan pola interferensi: pita terang dan gelap dihasilkan karena dua jalur yang mungkin tetap koheren. Ketika detektor jalur mana ditambahkan, pola berubah secara bertahap menjadi dua pita partikel lebar karena alternatif jalur menjadi dapat dibedakan.',
    },
    {
      type: 'paragraph',
      html: 'Alat ini dirancang untuk pelajar yang mencari penjelasan jelas mengapa pengamatan mengubah hasil celah ganda. Ini menghindari frasa samar "pengamat mengubah realitas" dan sebagai gantinya berfokus pada ide yang berguna secara fisik: interferensi membutuhkan alternatif yang tidak dapat dibedakan, sementara pengukuran dan keterikatan lingkungan menghilangkan hubungan fase yang diperlukan untuk pinggiran.',
    },
    {
      type: 'title',
      text: 'Apa yang ditunjukkan oleh eksperimen celah ganda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dalam pengaturan yang tidak diamati, objek kuantum tunggal dijelaskan oleh amplitudo probabilitas yang terkait dengan kedua celah. Amplitudo tersebut dijumlahkan dengan fase. Di beberapa posisi di layar mereka saling memperkuat, menghasilkan pita terang; di posisi lain mereka saling membatalkan, menghasilkan pita gelap. Struktur bergantian itu adalah tanda interferensi.',
    },
    {
      type: 'paragraph',
      html: 'Jika detektor mencatat celah mana yang digunakan, alternatif berhenti menjadi tidak dapat dibedakan. Layar tidak lagi menerima jumlah koheren dari amplitudo. Ia menerima campuran dari dua hasil yang dikondisikan jalur, sehingga celah gelap interferensi terisi dan hasilnya terlihat seperti partikel yang melewati satu celah atau yang lain.',
    },
    {
      type: 'title',
      text: 'Cara membaca simulator',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kontrol atau metrik', 'Apa yang diubah', 'Apa yang harus diperhatikan'],
      rows: [
        ['Kekuatan detektor', 'Berapa banyak informasi jalur mana yang tersedia', 'Nilai lebih tinggi mengurangi visibilitas pinggiran dan meningkatkan pola partikel dua pita.'],
        ['Jarak celah', 'Jarak antara dua bukaan', 'Jarak yang lebih lebar membuat pita interferensi lebih rapat di layar.'],
        ['Lebar celah', 'Ukuran setiap bukaan', 'Celah lebih lebar mempersempit selubung difraksi dan membentuk ulang kecerahan keseluruhan.'],
        ['Visibilitas pinggiran', 'Kontras antara daerah layar terang dan gelap', 'Angka tinggi berarti interferensi koheren masih terlihat.'],
        ['Koherensi', 'Berapa banyak hubungan fase yang tersisa di antara jalur', 'Koherensi turun saat detektor membuat jalur dapat dibedakan.'],
      ],
    },
    {
      type: 'title',
      text: 'Dekoherensi tanpa mistisisme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dekoherensi adalah hilangnya koherensi fase yang dapat digunakan ketika sistem kuantum menjadi berkorelasi dengan detektor atau lingkungan. Dalam eksperimen celah ganda, korelasi itu dapat membawa informasi jalur mana. Setelah jalur dicatat secara prinsip, bahkan jika tidak ada yang membaca catatan itu, pola interferensi ditekan.',
    },
    {
      type: 'paragraph',
      html: 'Perbedaan ini penting karena banyak penjelasan melebih-lebihkan peran pengamatan manusia. Fisika yang penting bukanlah penglihatan atau kesadaran; melainkan apakah pengaturan eksperimental mempertahankan atau menghancurkan ketidakdapatdibedakan dari alternatif yang seharusnya saling berinterferensi.',
    },
    {
      type: 'title',
      text: 'Keterbatasan model edukatif ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulator menggunakan pola celah ganda gaya optik yang ringkas dan menggabungkannya dengan model kekuatan detektor untuk dekoherensi. Sangat baik untuk intuisi, demonstrasi kelas, dan revisi konseptual, tetapi bukan solusi numerik dari peralatan kuantum lengkap dengan ruang Hilbert detektor, sumber kebisingan, atau kalibrasi laboratorium.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gunakan untuk memahami konsep:</strong> interferensi, informasi jalur mana, koherensi, dan pengukuran.',
        '<strong>Jangan gunakan untuk desain eksperimental:</strong> eksperimen celah ganda nyata memerlukan perhitungan panjang gelombang, bukaan, detektor, dan propagasi yang tepat.',
        '<strong>Fokus pada tren:</strong> seiring meningkatnya kemampuan dibedakan, kontras interferensi menurun.',
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
