import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-energi-bola-dyson';
const title = 'Simulator Penangkapan Energi Bola Dyson';
const description = 'Perkirakan desain kawanan, cincin, cangkang, dan awan statit Dyson untuk bintang yang berbeda. Hitung daya tangkapan, radius orbit, massa material, dan cakupan yang diperlukan untuk mencapai skala Kardashev target.';

const howTo = [
  {
    name: 'Pilih jenis bintang',
    text: 'Mulai dengan katai M, bintang seperti Matahari, bintang tipe A, raksasa merah, atau raksasa biru. Simulator menggunakan nilai luminositas dan massa representatif untuk memperkirakan radius kolektor dan periode orbit.',
  },
  {
    name: 'Pilih arsitektur megastruktur',
    text: 'Bandingkan kawanan Dyson, cincin khatulistiwa, cangkang kaku, atau awan cermin statit. Setiap desain memiliki efisiensi tangkapan, kepadatan material, dan asumsi stabilitas yang berbeda.',
  },
  {
    name: 'Atur cakupan dan suhu operasi',
    text: 'Tingkatkan cakupan untuk menangkap lebih banyak daya bintang, lalu sesuaikan suhu operasi untuk mendekatkan atau menjauhkan kolektor dari bintang.',
  },
  {
    name: 'Sesuaikan target Kardashev',
    text: 'Gunakan penggeser target untuk melihat seberapa banyak bintang harus ditutup untuk mencapai target daya skala peradaban.',
  },
];

const faq = [
  {
    question: 'Apa perbedaan antara bola Dyson dan kawanan Dyson?',
    answer: 'Bola Dyson kaku adalah cangkang kontinu di sekitar bintang, sedangkan kawanan Dyson adalah kumpulan besar kolektor orbit independen. Sebagian besar diskusi teknik lebih menyukai kawanan karena cangkang padat akan tidak stabil secara struktural dan sangat intensif material.',
  },
  {
    question: 'Bagaimana simulator memilih radius optimal?',
    answer: 'Ia memperkirakan jarak di mana kolektor yang memancar dari kedua sisi mencapai suhu operasi yang dipilih di bawah luminositas bintang yang dipilih. Kolektor yang lebih panas dapat mengorbit lebih dekat, sedangkan kolektor yang lebih dingin memerlukan radius yang lebih besar.',
  },
  {
    question: 'Apa arti peringkat Kardashev di sini?',
    answer: 'Nilai Kardashev dihitung dari daya yang ditangkap menggunakan bentuk logaritmik umum K = (log10(P) - 6) / 10, di mana P adalah daya dalam watt. Nilai mendekati K1 mewakili penggunaan energi skala planet, sedangkan K2 mendekati keluaran bintang penuh.',
  },
  {
    question: 'Apakah massa material realistis?',
    answer: 'Ini adalah perkiraan pendidikan tingkat pertama berdasarkan area kolektor, kepadatan area, dan faktor stabilitas. Desain nyata akan membutuhkan penjagaan stasiun, transmisi daya, kerugian penambangan, redundansi, pembuangan panas, dan infrastruktur manufaktur.',
  },
  {
    question: 'Mengapa bintang terang memerlukan sistem kolektor yang begitu besar?',
    answer: 'Bintang dengan luminositas tinggi mendorong radius termal aman ke luar. Itu meningkatkan luas permukaan yang dibutuhkan untuk fraksi cakupan tertentu, sehingga permintaan material dapat meningkat lebih cepat daripada daya yang ditangkap secara intuitif.',
  },
  {
    question: 'Bisakah peradaban mencapai Tipe II Kardashev dengan cakupan parsial?',
    answer: 'Ya, jika bintang induk cukup terang dan kolektornya efisien. Di sekitar bintang seperti Matahari, mendekati Tipe II memerlukan penangkapan sebagian besar luminositas matahari, tetapi di sekitar bintang yang lebih terang, target daya yang sama dapat memerlukan fraksi cakupan yang lebih rendah.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualisasi kolektor Dyson',
    starType: 'Jenis bintang',
    structureType: 'Struktur',
    coverage: 'Cakupan kolektor',
    operatingTemp: 'Suhu operasi',
    kardashevTarget: 'Target Kardashev',
    kardashevRating: 'Peringkat saat ini',
    capturedPower: 'Daya tertangkap',
    optimalRadius: 'Radius optimal',
    targetCoverage: 'Cakupan target',
    materialMass: 'Massa material',
    captureMeter: 'Kemajuan menuju target',
    statusReady: 'Sesuaikan sistem untuk memperkirakan kebutuhan kolektor.',
    statusUnderbuilt: 'Cakupan masih di bawah target Kardashev yang dipilih. Tambahkan kolektor atau pilih bintang yang lebih terang.',
    statusBalanced: 'Cakupan dan keluaran bintang mendekati target skala peradaban yang dipilih.',
    statusExtreme: 'Konfigurasi ini melampaui target. Dayanya sangat besar, tetapi kebutuhan material naik cepat.',
    orbitalPeriod: 'Periode orbit',
    collectorArea: 'Area kolektor',
    mercuryMasses: '{value} massa Merkurius',
    kilograms: '{value} kg',
    daysUnit: '{value} hari',
    starMDwarf: 'Katai M',
    starSun: 'Bintang tipe G seperti Matahari',
    starA: 'Bintang tipe A',
    starRedGiant: 'Raksasa merah',
    starBlueGiant: 'Raksasa biru',
    structureSwarm: 'Kawanan Dyson',
    structureRing: 'Cincin khatulistiwa',
    structureShell: 'Cangkang kaku',
    structureStatite: 'Awan cermin statit',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator Penangkapan Energi Bola Dyson',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bola Dyson bukan hanya gambar fiksi ilmiah tentang bintang di dalam cangkang. Ini adalah keluarga konsep megastruktur yang mungkin untuk mencegat luminositas bintang: kawanan satelit, cincin khatulistiwa, awan cermin tipis, dan cangkang kaku yang terkenal namun bermasalah. Simulator ini mengubah ide-ide tersebut menjadi angka sehingga Anda dapat membandingkan bagaimana jenis bintang, suhu kolektor, cakupan, dan desain struktur mengubah anggaran energi.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator memperkirakan daya tangkapan, radius termal orbit, area kolektor, periode orbit, massa material, dan cakupan yang diperlukan untuk target skala Kardashev yang dipilih. Dibangun untuk siswa, pembangun dunia, komunikator sains, dan siapa pun yang mencoba memahami mengapa peradaban Tipe II sulit: tantangannya bukan hanya daya, tetapi juga area, panas, penambangan, stabilitas, dan logistik orbit.',
    },
    {
      type: 'title',
      text: 'Bagaimana Radius Dyson Diperkirakan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Radius optimal dihitung dari luminositas bintang dan suhu operasi kolektor. Kolektor yang dekat dengan bintang terang menerima fluks intens dan harus beroperasi panas atau membuang panas dalam jumlah besar. Bergerak ke luar mengurangi tekanan termal, tetapi area kolektor yang diperlukan tumbuh dengan kuadrat jarak. Kompromi ini menjelaskan mengapa fraksi cakupan yang sama bisa sederhana di sekitar katai M redup dan sangat besar di sekitar raksasa biru.',
    },
    {
      type: 'title',
      text: 'Perbandingan Kawanan Dyson, Cincin, Cangkang, dan Awan Statit',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kawanan Dyson:</strong> banyak kolektor orbit independen. Ini adalah arsitektur skala besar yang paling masuk akal karena dapat dibangun secara bertahap dan tidak memerlukan cangkang bintang yang kaku.',
        '<strong>Cincin khatulistiwa:</strong> pita kolektor yang lebih sempit dengan efisiensi cakupan yang lebih rendah. Lebih mudah dibayangkan sebagai megastruktur pertama, tetapi tidak dapat menangkap keluaran bintang penuh tanpa menjadi kawanan yang lebih luas.',
        '<strong>Cangkang kaku:</strong> ikonik secara visual tetapi tidak menguntungkan secara mekanis. Cangkang di sekitar bintang memiliki masalah stabilitas dan material yang parah, sehingga simulator memberinya massa tinggi dan stabilitas rendah.',
        '<strong>Awan cermin statit:</strong> reflektor sangat ringan yang sebagian ditahan oleh tekanan radiasi. Ini mengurangi permintaan material tetapi memiliki toleransi termal yang lebih rendah dan persyaratan kontrol yang menuntut.',
      ],
    },
    {
      type: 'title',
      text: 'Cakupan yang Diperlukan untuk Skala Kardashev',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skala Kardashev menyatakan penggunaan energi peradaban secara logaritmik. Dalam alat ini, watt yang ditangkap dikonversi ke peringkat K menggunakan K = (log10(P) - 6) / 10. Kawanan Dyson parsial di sekitar Matahari dapat melampaui penggunaan energi manusia saat ini dengan banyak orde magnitudo jauh sebelum mencapai status Tipe II penuh. Hasil cakupan target menunjukkan fraksi luminositas bintang yang harus dicegat untuk tujuan yang dipilih.',
    },
    {
      type: 'table',
      headers: ['Pilihan desain', 'Keuntungan utama', 'Hambatan utama'],
      rows: [
        ['Kawanan Dyson', 'Dapat dibangun bertahap dengan orbit independen', 'Kontrol lalu lintas dan transmisi daya'],
        ['Cincin khatulistiwa', 'Area awal lebih rendah dan geometri lebih sederhana', 'Cakupan terbatas'],
        ['Cangkang kaku', 'Intersepsi maksimal dalam diagram sederhana', 'Ketidakstabilan struktural dan massa sangat besar'],
        ['Awan statit', 'Kepadatan area sangat rendah', 'Penjagaan stasiun presisi dan batas panas'],
      ],
    },
    {
      type: 'title',
      text: 'Massa Material dan Pemeriksaan Realitas Penambangan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Perkiraan material mengalikan area kolektor dengan kepadatan area yang diasumsikan dan faktor stabilitas desain. Ini sengaja melaporkan massa dalam massa Merkurius ketika angkanya menjadi astronomis, karena banyak diskusi kawanan Dyson membayangkan membongkar planet kecil atau asteroid untuk bahan baku. Bahkan kolektor tipis menjadi masif ketika tersebar di skala unit astronomi.',
    },
    {
      type: 'paragraph',
      html: 'Gunakan hasilnya sebagai panduan orde magnitudo daripada cetak biru. Rekayasa megastruktur nyata akan membutuhkan model kerusakan radiasi, siklus termal, penghindaran tabrakan, kontrol sikap, transmisi daya, hasil manufaktur, dan evolusi orbit jangka panjang. Nilai simulator adalah membuat kendala pertama terlihat segera.',
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
