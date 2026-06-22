const howTo = [
    {
      name: 'Siapkan gambar cawan',
      text: 'Letakkan cawan Petri Anda di atas latar belakang gelap atau gunakan trans-iluminator agar koloni terlihat kontras dengan jelas.',
    },
    {
      name: 'Identifikasi tipe koloni',
      text: 'Gunakan warna penanda yang berbeda untuk mengelompokkan koloni berdasarkan morfologi, warna, atau ukuran.',
    },
    {
      name: 'Tandai setiap koloni',
      text: 'Klik pada setiap koloni yang terlihat. Alat ini secara otomatis memberi nomor pada setiap klik untuk mencegah pengulangan atau terlewatnya koloni.',
    },
    {
      name: 'Hitung konsentrasi akhir',
      text: 'Masukkan volume yang ditanam dan faktor pengenceran untuk mendapatkan hasil akhir dalam CFU/ml atau CFU/g.',
    },
  ];
const faq = [
    {
      question: 'Apa itu penghitungan CFU?',
      answer: 'Satuan Pembentuk Koloni (CFU) adalah pengukuran yang memperkirakan jumlah bakteri atau sel jamur yang hidup dalam sebuah sampel. Diasumsikan bahwa setiap koloni yang terlihat berasal dari satu sel atau kelompok sel tunggal.',
    },
    {
      question: 'Mengapa penghitung digital lebih baik daripada penghitungan manual?',
      answer: 'Penghitungan digital menghindari kesalahan manusia dalam "kehilangan jejak" saat menandai koloni secara visual. Alat kami juga memungkinkan diferensiasi tipe koloni berdasarkan warna, memfasilitasi analisis cawan campuran.',
    },
    {
      question: 'Bagaimana cara menghitung CFU per mililiter?',
      answer: 'Jumlah koloni yang dihitung dikalikan dengan faktor pengenceran terbalik. Misalnya, jika Anda menghitung 30 koloni dalam pengenceran 1:100, sampel asli mengandung 3000 CFU/ml.',
    },
    {
      question: 'Kapan cawan dianggap "tidak dapat dihitung"?',
      answer: 'Dalam standar mikrobiologi, jika terdapat lebih dari 250-300 koloni, cawan tersebut dianggap terlalu padat (Too Numerous To Count, TNTC) dan datanya tidak dapat diandalkan karena adanya kompetisi koloni.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'penghitung-koloni';
const title = 'Penghitung Koloni: Alat Penghitung CFU Digital untuk Cawan Petri';
const description = 'Alat digital untuk menghitung koloni bakteri pada cawan Petri. Membedakan jenis, menghindari kesalahan, dan menghitung CFU dengan presisi.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Klik untuk mengunggah cawan Petri Anda',
    uploadSubtitle: 'Unggah foto cawan Anda dan mulai menghitung koloni',
    currentModeLabel: 'Mode Saat Ini',
    typeA: 'Tipe A',
    typeB: 'Tipe B',
    colonyType: 'Tipe Koloni',
    counting: 'Penghitungan',
    totalCFU: 'Total CFU',
    undo: 'Urungkan',
    clearAll: 'Hapus Semua',
    infoClick: 'Klik pada cawan untuk menandai koloni',
    infoChange: 'Ubah tipe sebelum menandai',
    confirmClear: 'Apakah Anda yakin ingin menghapus semua koloni yang ditandai?',
  },
  seo: [
    {
      type: 'title',
      text: 'Mikrobiologi Digital: Penghitungan Koloni yang Presisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Menghitung koloni bakteri pada cawan Petri adalah teknik dasar dalam mikrobiologi. Secara tradisional dilakukan dengan penghitung manual dan spidol, namun sangat mudah untuk salah hitung atau menandai koloni yang sama dua kali. Alat digital ini menghilangkan kesalahan tersebut dan memungkinkan diferensiasi visual antar tipe koloni.',
    },
    {
      type: 'title',
      text: 'Mengapa Penghitungan Koloni Itu Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jumlah koloni pada cawan berbanding lurus dengan konsentrasi mikroorganisme yang hidup dalam sampel asli. Data ini sangat penting dalam:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kontrol Kualitas Makanan:</strong> Mendeteksi kontaminasi bakteri.',
        '<strong>Penelitian Farmasi:</strong> Mengevaluasi kemanjuran antibiotik.',
        '<strong>Diagnosis Klinis:</strong> Mengukur infeksi dalam sampel pasien.',
        '<strong>Bioteknologi:</strong> Mengoptimalkan kultur produksi untuk protein rekombinan.',
      ],
    },
    {
      type: 'title',
      text: 'Satuan Pembentuk Koloni (CFU)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Setiap koloni yang terlihat pada cawan diasumsikan berasal dari satu sel yang hidup. Itulah sebabnya mereka disebut <strong>CFU</strong> (Colony Forming Units).',
    },
    {
      type: 'paragraph',
      html: '<strong>Rumus Konsentrasi:</strong><br><code>CFU/mL = (Koloni yang Dihitung × Faktor Pengenceran) / Volume yang Ditanam</code>',
    },
    {
      type: 'title',
      text: 'Praktik Terbaik untuk Penghitungan',
      level: 3,
    },
    {
      type: 'title',
      text: 'Rentang yang Dapat Dihitung',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Rentang ideal untuk penghitungan manual adalah <strong>30 hingga 300 koloni</strong> per cawan. Di bawah 30, kesalahan statistik terlalu tinggi. Di atas 300, koloni mulai menyatu dan perbedaan individu menjadi tidak mungkin dilakukan.',
    },
    {
      type: 'title',
      text: 'Tipe Koloni',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Pada media selektif atau diferensial, umum untuk melihat beberapa morfologi koloni:',
    },
    {
      type: 'list',
      items: [
        '<strong>Tipe A (Teal/Hijau):</strong> Koloni besar berlendir, khas bakteri Gram-negatif yang memfermentasi laktosa.',
        '<strong>Tipe B (Merah Muda/Ungu):</strong> Koloni kecil transparan, non-fermenter.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Alat kami memungkinkan diferensiasi hingga dua tipe koloni dengan warna berbeda, memfasilitasi penghitungan diferensial tanpa memerlukan penanda fisik.',
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

