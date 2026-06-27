import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'simulator-garis-becke-indeks-bias-kaca';
const title = 'Simulator Garis Becke Indeks Bias Kaca Forensik';
const description = 'Simulasikan metode garis Becke untuk perbandingan kaca forensik dengan memanaskan cairan imersi, mencocokkan indeks bias, dan melihat halo terang menghilang.';

const howTo = [
  {
    name: 'Pilih profil kaca yang diperiksa',
    text: 'Pilih profil referensi kaca umum seperti soda-lime, borosilikat, kristal timbal, atau kaca jendela temper.',
  },
  {
    name: 'Sesuaikan suhu meja pemanas (hot-stage)',
    text: 'Geser penggeser suhu untuk mengubah indeks bias cairan imersi virtual.',
  },
  {
    name: 'Amati pergerakan garis Becke',
    text: 'Gunakan kontrol arah fokus untuk melihat apakah garis terang bergerak ke dalam, ke luar, atau hampir menghilang pada titik kecocokan.',
  },
  {
    name: 'Baca perbedaan indeks',
    text: 'Bandingkan RI cairan, RI kaca, delta RI, dan persentase kecocokan untuk memahami mengapa halo meredup mendekati kesesuaian indeks.',
  },
];

const faq = [
  {
    question: 'Apa yang dimaksud dengan garis Becke dalam analisis kaca forensik?',
    answer: 'Garis Becke adalah halo terang yang terlihat di dekat batas antara fragmen kaca dan cairan imersi ketika indeks bias keduanya berbeda. Pergerakannya selama pemfokusan membantu menentukan bahan mana yang memiliki indeks bias lebih tinggi.',
  },
  {
    question: 'Mengapa pemanasan cairan imersi itu penting?',
    answer: 'Banyak cairan imersi mengalami penurunan indeks bias seiring kenaikan suhu. Dengan memanaskan cairan hingga indeks biasnya cocok dengan kaca, kontras batas memudar dan tepi fragmen menjadi sulit dilihat.',
  },
  {
    question: 'Bisakah indeks bias mengidentifikasi sumber kaca dengan sendirinya?',
    answer: 'Tidak. RI dapat mendukung perbandingan dan eksklusi kelas, tetapi interpretasi sumber forensik juga mempertimbangkan komposisi unsur, ketebalan, warna, konteks retakan, kontrol, ketidakpastian, dan prosedur laboratorium yang divalidasi.',
  },
  {
    question: 'Apa artinya ketika garis Becke menghilang?',
    answer: 'Ini berarti cairan dan kaca memiliki indeks bias yang sangat mirip di bawah kondisi simulasi tersebut. Dalam mikroskopi nyata, hilangnya garis dinilai dengan kontrol suhu terkalibrasi dan bahan referensi.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Tampilan mikroskop virtual yang menunjukkan fragmen kaca dalam cairan imersi',
    units: 'Sistem unit suhu',
    metric: 'Metrik',
    imperial: 'Imperial',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Referensi kaca',
    sodaLime: 'Kaca wadah soda-lime',
    borosilicate: 'Kaca laboratorium borosilikat',
    leadCrystal: 'Kaca dekoratif kristal timbal',
    tempered: 'Kaca jendela temper',
    stageTemperature: 'Suhu meja pemanas',
    focusDirection: 'Arah fokus',
    focusRaised: 'Naikkan fokus',
    focusLowered: 'Turunkan fokus',
    liquidRi: 'RI Cairan',
    glassRi: 'RI Kaca',
    deltaRi: 'Delta RI',
    matchMeter: 'Kecocokan RI',
    canvasHalo: 'halo Becke terlihat',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'tepi hampir cocok',
    interpMatched: 'Batas mendekati kecocokan optik. Dalam pengujian garis Becke yang sebenarnya, ini adalah wilayah di mana halo meredup dan tepi fragmen paling sulit ditemukan lokasinya.',
    interpGlassHigher: 'Kaca memiliki indeks bias yang lebih tinggi. Dengan fokus dinaikkan, perilaku garis Becke menunjukkan cahaya berkonsentrasi ke arah sisi kaca dari batas.',
    interpLiquidHigher: 'Cairan imersi memiliki indeks bias yang lebih tinggi. Halo bergeser ke arah sisi cairan sampai suhu membawa indeks cairan lebih dekat ke kaca.',
    disclaimer: 'Hanya simulasi pendidikan. Perbandingan kaca forensik yang sebenarnya membutuhkan peralatan indeks bias terkalibrasi, standar yang diketahui, pelaporan ketidakpastian, dan interpretasi yang memenuhi syarat.',
  },
  seo: [
    {
      type: 'title',
      text: 'Pengujian Indeks Bias Garis Becke untuk Kaca Forensik',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulator pengajaran',
      title: 'Apa yang ditunjukkan oleh simulator RI kaca ini',
      html: 'Simulator ini menunjukkan mengapa fragmen kaca menjadi lebih atau kurang terlihat dalam minyak imersi saat indeks bias cairan mendekati indeks bias kaca. Alat ini dibuat untuk siswa sains forensik yang mempelajari <strong>mikroskopi garis Becke</strong>, pencocokan RI hot-stage, dan batas-batas bukti perbandingan kaca.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n kaca - n cairan', label: 'kontras indeks yang ditampilkan', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'kisaran meja pemanas', icon: 'mdi:thermometer' },
        { value: '4', label: 'profil kaca', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'unit suhu yang dapat dikonversi', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Daftar periksa pengamatan garis Becke praktis',
      items: [
        'Gunakan fragmen kaca kecil yang bersih yang terendam sepenuhnya dalam cairan indeks bias yang sesuai.',
        'Fokuskan sedikit di atas dan di bawah batas dan perhatikan ke sisi mana garis terang tampak bergerak.',
        'Naikkan suhu perlahan mendekati titik kecocokan yang diperkirakan karena garis dapat memudar dalam kisaran yang sempit.',
        'Catat suhu, jenis cairan, standar kalibrasi, perilaku kecocokan yang diamati, dan ketidakpastian.',
        'Perlakukan RI sebagai bukti kelas: ketidakcocokan dapat mengeksklusi, sedangkan kecocokan memerlukan konteks tambahan.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Apa yang dapat didukung oleh perbandingan RI',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Indeks bias dapat membantu membandingkan fragmen kaca yang diperiksa dengan kaca referensi yang diketahui di bawah kondisi terkendali.',
          points: ['Perbandingan karakteristik kelas', 'Eksklusi ketika RI berbeda jelas', 'Penyaringan sebelum analisis unsur', 'Mengajarkan perilaku batas optik'],
        },
        {
          title: 'Apa yang tidak dapat dibuktikan oleh RI saja',
          icon: 'mdi:alert-circle-outline',
          description: 'RI yang cocok tidak mengidentifikasi secara unik panel kaca, botol, kaca jendela kendaraan, atau sumber tempat kejadian perkara.',
          points: ['Tidak ada atribusi sumber individu dengan sendirinya', 'Tidak ada rekonstruksi tanpa konteks TKP', 'Bukan pengganti untuk kontrol', 'Tidak ada kesimpulan hukum dari model peramban'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pertanyaan pengguna', 'Konsep mikroskopi', 'Jawaban hati-hati'],
      rows: [
        ['Mengapa tepi terang bergerak?', 'Refraksi pada batas antara dua indeks bias.', 'Garis Becke cenderung bergerak ke arah bahan dengan indeks bias lebih tinggi saat fokus dinaikkan.'],
        ['Mengapa tepi menghilang?', 'Pencocokan indeks.', 'Ketika RI kaca dan cairan hampir sama, kontras batas menurun dan halo menjadi lemah.'],
        ['Mengapa memanaskan cairan?', 'Koefisien RI termal.', 'RI cairan yang disimulasikan menurun seiring suhu, memungkinkan kecocokan dengan jenis kaca yang berbeda.'],
        ['Apakah kecocokan itu konklusif?', 'Batasan bukti kelas.', 'Kecocokan hanya mendukung konsistensi; banyak objek kaca dapat berbagi RI yang serupa.'],
      ],
    },
    {
      type: 'title',
      text: 'Cara Kerja Model Simulasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model menetapkan indeks bias referensi untuk setiap profil kaca dan memperlakukan cairan imersi sebagai media yang sensitif terhadap suhu. Saat meja pemanas menghangat, indeks bias cairan menurun dengan koefisien termal tetap. Simulator kemudian menghitung perbedaan antara RI kaca dan RI cairan, menggunakan perbedaan tersebut untuk mengontrol kecerahan halo, pergeseran halo, persentase kecocokan, dan pesan interpretasi.',
    },
    {
      type: 'paragraph',
      html: 'Bidang mikroskop visual sengaja dibuat kualitatif. Bidang ini tidak mencoba melacak setiap jalur optik. Sebaliknya, simulasi ini mempertahankan hubungan pelatihan esensial: kontras RI yang kuat menghasilkan batas yang terang; kontras yang lebih rendah menghasilkan batas yang redup; dan mendekati titik kecocokan, tepi kaca dapat tampak menghilang dalam cairan.',
    },
    {
      type: 'paragraph',
      html: 'Di laboratorium forensik profesional, kalibrasi meja pemanas (hot-stage) dilakukan menggunakan sampel kaca referensi dengan indeks bias yang diketahui. Karena indeks bias cairan imersi bervariasi secara terprediksi terhadap suhu (biasanya dilambangkan sebagai dn/dT), suhu pasti saat garis Becke menghilang memungkinkan ilmuwan untuk menghitung indeks bias kaca hingga ketelitian empat angka desimal. Simulator ini memodelkan perilaku yang bergantung pada suhu ini menggunakan rumus linier, yang memungkinkan siswa berlatih menemukan titik kecocokan yang tepat dengan mengontrol meja pemanas secara hati-hati.',
    },
    {
      type: 'paragraph',
      html: 'Saat menganalisis bukti kaca, indeks bias dianggap sebagai bukti karakteristik kelas. Meskipun indeks bias yang cocok antara fragmen di tempat kejadian perkara dan pakaian tersangka konsisten dengan sumber yang sama, hal itu tidak secara unik mengidentifikasi sumber tersebut karena banyak objek kaca memiliki nilai indeks bias yang identik. Oleh karena itu, para ahli forensik harus menafsirkan hasil yang cocok secara konservatif, melaporkan kecocokan dalam hal konsistensi sambil menekankan bahwa atribusi sumber yang pasti tidak mungkin dilakukan hanya berdasarkan sifat optik.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Indeks bias', definition: 'Ukuran seberapa kuat suatu bahan membelokkan cahaya dibandingkan dengan ruang hampa.' },
        { term: 'Cairan imersi', definition: 'Cairan dengan sifat optik yang diketahui yang digunakan untuk mengelilingi fragmen selama perbandingan RI mikroskopis.' },
        { term: 'Garis Becke', definition: 'Garis terang atau halo yang terlihat pada batas ketika dua bahan transparan memiliki indeks bias yang berbeda.' },
        { term: 'Titik kecocokan', definition: 'Wilayah suhu di mana cairan imersi dan kaca memiliki indeks bias yang hampir sama.' },
        { term: 'Bukti kelas', definition: 'Bukti yang dapat mengasosiasikan suatu barang dengan kelompok sumber yang mungkin, bukan satu sumber unik.' },
      ],
    },
    {
      type: 'tip',
      title: 'Tip interpretasi untuk siswa',
      html: 'Dalam bukti kaca, ketidakcocokan RI yang jelas sering kali lebih kuat daripada kecocokan karena dapat mengeksklusi sumber yang diajukan. Kecocokan itu berguna, tetapi kekuatannya bergantung pada data populasi, presisi pengukuran, komposisi unsur, dan konteks kasus.',
    },
    {
      type: 'proscons',
      title: 'Kekuatan dan batasan pengujian RI kaca garis Becke',
      items: [
        { pro: 'Cepat, visual, dan sangat baik untuk mengajarkan perbandingan bahan transparan.', con: 'Penilaian pengamat dan teknik fokus dapat memengaruhi pergerakan garis yang terlihat.' },
        { pro: 'Pencocokan suhu dapat memperkirakan RI dengan presisi yang berguna saat terkalibrasi.', con: 'Kontrol termal, penuaan cairan, kontaminasi, dan standar sangat penting dalam pekerjaan nyata.' },
        { pro: 'Berguna untuk mengeksklusi fragmen kaca dengan sifat optik yang berbeda jelas.', con: 'Tidak dapat mengindividualisasikan sumber tanpa bukti analitis dan kontekstual yang lebih luas.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Peringatan forensik',
      title: 'Jaga kesimpulan tetap proporsional',
      html: 'Simulasi garis Becke peramban adalah alat bantu belajar, bukan metode laboratorium. Interpretasi bukti kaca formal harus mengandalkan instrumen yang divalidasi, prosedur tertulis, catatan kalibrasi, perkiraan ketidakpastian, tinjauan sejawat, dan bahasa pelaporan yang sesuai dengan yurisdiksi.',
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
