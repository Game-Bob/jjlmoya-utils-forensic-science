import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'penganalisis-forensik-metadata-dan-keaslian-gambar';
const title = 'Penganalisis Forensik Metadata dan Keaslian Gambar';
const description = 'Periksa header gambar, detail EXIF pengambilan, koordinat GPS, jejak perangkat lunak edit, dan byte mentah secara lokal di browser Anda.';

const howTo = [
  { name: 'Pertahankan bukti asli', text: 'Bekerjalah dari salinan forensik dan simpan berkas sumber beserta hash kriptografinya di luar alat browser ini.' },
  { name: 'Muat gambar secara lokal', text: 'Seret atau pilih JPEG atau PNG. Berkas dibaca di memori browser dan tidak diunggah.' },
  { name: 'Tinjau metadata dan lokasi', text: 'Bandingkan waktu pengambilan, identitas kamera, perangkat lunak, dan kolom GPS dengan narasi kasus serta catatan akuisisi.' },
  { name: 'Tafsirkan sinyal integritas', text: 'Perlakukan tanda perangkat lunak edit dan kolom yang hilang sebagai petunjuk investigatif, bukan bukti manipulasi.' },
  { name: 'Periksa pratinjau heksadesimal', text: 'Gunakan area header dan metadata yang disorot untuk mengenali struktur kontainer dan mencatat offset untuk pemeriksaan lanjutan.' },
];

const faq = [
  { question: 'Apakah metadata dapat membuktikan bahwa sebuah foto autentik?', answer: 'Tidak. Metadata dapat dihapus, disalin, atau diubah. Autentikasi memerlukan kombinasi struktur berkas, asal-usul, hash, pemeriksaan visual, analisis kompresi, dan metode forensik yang tervalidasi.' },
  { question: 'Apakah tanda Adobe atau GIMP membuktikan pengeditan berbahaya?', answer: 'Tidak. Itu hanya menunjukkan bahwa perangkat lunak mungkin menulis metadata atau mengekspor berkas. Koreksi warna yang sah, pemrosesan editorial, atau persiapan bukti dapat menghasilkan tanda yang sama.' },
  { question: 'Apakah gambar diunggah?', answer: 'Tidak. Analisis dilakukan di memori browser. Meski begitu, ikuti kebijakan penanganan barang bukti organisasi Anda sebelum membuka materi sensitif di perangkat lunak apa pun.' },
  { question: 'Mengapa data GPS bisa hilang?', answer: 'Kamera mungkin tidak mendukung GPS, perekaman lokasi mungkin dimatikan, platform mungkin menghapus metadata, atau berkas mungkin telah dikode ulang.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacy: 'Pemeriksaan biner hanya lokal',
    dropTitle: 'Tempatkan gambar di meja bukti',
    dropHint: 'Jatuhkan JPEG atau PNG di sini, atau pilih berkas. Tidak ada yang diunggah.',
    chooseFile: 'Pilih gambar',
    replaceFile: 'Ganti gambar',
    waiting: 'Menunggu bukti',
    metadata: 'Metadata pengambilan',
    integrity: 'Sinyal integritas',
    location: 'Lokasi terekam',
    hex: 'Jendela bukti heksadesimal',
    hexHint: '512 byte pertama · header sian · metadata amber · data gambar netral',
    noData: 'Tidak ada nilai yang terbaca',
    noGps: 'Koordinat GPS yang terbaca tidak ditemukan.',
    mapLink: 'Buka koordinat di OpenStreetMap',
    score: 'Keyakinan heuristik',
    disclaimer: 'Skor tinggi tidak menetapkan keaslian. Simpan berkas asli, hitung hash kriptografis, dan gunakan alur kerja laboratorium tervalidasi untuk kesimpulan kasus.',
    fileName: 'Berkas',
    fileSize: 'Ukuran',
    fileType: 'Kontainer',
    camera: 'Kamera',
    captured: 'Diambil',
    software: 'Perangkat lunak',
    coordinates: 'Koordinat',
    statusNoObvious: 'Tidak ada indikator edit yang jelas',
    statusReview: 'Peninjauan disarankan',
    statusEditing: 'Tanda pengeditan terdeteksi',
    processing: 'Membaca bukti biner...',
    loadError: 'Berkas tidak dapat dianalisis. Pilih gambar JPEG atau PNG yang valid.',
  },
  seo: [
    { type: 'title', text: 'Cara menganalisis metadata gambar dan indikator keaslian', level: 2 },
    { type: 'paragraph', html: 'Penganalisis metadata gambar forensik membantu penyidik, jurnalis, tim hukum, peninjau kepatuhan, dan peneliti menjawab pertanyaan berniat tinggi: <strong>apa yang sebenarnya dapat diungkap metadata gambar tentang sebuah foto?</strong> Metadata dapat memberi petunjuk tentang pengambilan, lokasi, pemrosesan perangkat lunak, dan struktur berkas, tetapi tidak berfungsi sebagai mesin kebenaran yang berdiri sendiri. Nilai terbesarnya ada pada triase: membantu mengidentifikasi berkas mana yang layak diperiksa lebih dalam dan kontradiksi mana yang memerlukan tindak lanjut.' },
    { type: 'paragraph', html: 'Alat berbasis browser ini dirancang untuk pengguna yang menginginkan lebih dari sekadar dump EXIF mentah. Alat ini membaca JPEG atau PNG yang dipilih secara lokal dan menampilkan bidang kamera, cap waktu pengambilan, tag perangkat lunak, koordinat, petunjuk kontainer, dan byte awal berkas di satu tempat. Ini sesuai dengan niat pencarian umum seperti <em>pemeriksa keaslian foto</em>, <em>analisis metadata EXIF</em>, atau <em>cara mengetahui apakah gambar diedit</em>.' },
    { type: 'paragraph', html: 'Prinsip utamanya adalah hasil harus dibaca sebagai konteks, bukan vonis. Berkas dapat memiliki metadata berguna dan tetap menyesatkan. Berkas juga dapat memiliki metadata sangat sedikit dan tetap autentik. Karena itu, praktik forensik yang baik memperlakukan metadata sebagai satu lapisan bukti yang harus dibandingkan dengan asal-usul, hash, keterangan saksi, riwayat perangkat, dan metode pemeriksaan tervalidasi.' },
    { type: 'title', text: 'Apa yang Bisa dan Tidak Bisa Dikatakan oleh EXIF', level: 3 },
    { type: 'paragraph', html: 'Data EXIF dapat memberi tahu merek dan model kamera, tanggal dan waktu pengambilan, panjang fokus, bukaan, kecepatan rana, ISO, apakah lampu kilat menyala, orientasi kamera, dan koordinat GPS jika perangkat merekamnya. Informasi ini sangat berguna untuk memverifikasi keterangan saksi, menyusun linimasa peristiwa, atau mengidentifikasi perangkat yang digunakan. Namun, EXIF tidak dapat membuktikan siapa yang membidikkan kamera, apakah subjek foto direkayasa, atau apakah gambar telah diedit sebelum dimasukkan ke dalam proses hukum. Metadata dapat dihapus dengan alat sederhana, disalin dari berkas lain, atau dimodifikasi dengan maksud menipu. Karena itu, bidang EXIF harus diperlakukan sebagai petunjuk awal, bukan putusan akhir.' },
    { type: 'title', text: 'Cara Membaca Metadata GPS dengan Bijak', level: 3 },
    { type: 'paragraph', html: 'Koordinat GPS yang tertanam dalam metadata dapat memberikan bukti lokasi yang kuat, tetapi hanya jika diperiksa secara kritis. Pertama, periksa presisi koordinat: format derajat desimal dengan enam angka desimal menunjukkan akurasi hingga sekitar sepuluh sentimeter, sementara data yang lebih kasar mungkin berasal dari IP geolokasi, bukan penerima GPS sungguhan. Kedua, bandingkan zona waktu dan arah hadap kamera dengan catatan akuisisi resmi. Ketiga, waspadai foto yang diunduh dari media sosial; platform seperti Facebook, Twitter, dan WhatsApp sering menghapus data lokasi, sehingga koordinat yang bertahan bisa menandakan gambar dibagikan sebelum diunggah alih-alih diambil di tempat tersebut. Akhirnya, gunakan alat eksternal seperti OpenStreetMap atau citra satelit untuk melakukan referensi silang visual antara koordinat dan deklarasi lokasi dalam berkas.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

