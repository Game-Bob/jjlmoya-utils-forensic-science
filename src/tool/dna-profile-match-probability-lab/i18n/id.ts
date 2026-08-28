import { content as enContent } from './en';
import { createDnaLocale } from '../localize';

export const content = createDnaLocale({
  locale: 'id',
  slug: 'lab-probabilitas-kecocokan-profil-dna',
  title: 'Lab Probabilitas Kecocokan Profil DNA',
  description: 'Pelajari bagaimana frekuensi alel dan aturan Hardy-Weinberg membentuk probabilitas kecocokan acak profil DNA untuk pembelajaran.',
  ui: {
    ...enContent.ui,
    controls: 'Kontrol profil', controlKicker: 'Susun profil', controlHelper: 'Gunakan preset pembelajaran atau buka setiap lokus untuk mengubah alel dan frekuensi populasinya.', presets: 'Preset pembelajaran', presetbalanced: 'Seimbang', presethomozygote: 'Homozigot', presetclassroom: 'Kelas sederhana', loci: 'lokus', locus: 'Lokus', locusName: 'Nama lokus', alleleA: 'Alel A', alleleB: 'Alel B', frequencyA: 'Frekuensi A (%)', frequencyB: 'Frekuensi B (%)', removeLocus: 'Hapus lokus', addLocus: 'Tambah lokus', disclaimer: 'Simulator pendidikan. Tidak mengidentifikasi orang, memvalidasi kasus, atau menggantikan perhitungan laboratorium.', sceneKicker: 'Jejak sinyal', electropherogram: 'Jejak profil', sceneNote: 'Dua puncak menunjukkan dua alel yang dimasukkan pada setiap lokus. Tingginya hanya petunjuk visual frekuensi, bukan sinyal laboratorium.', peakHeight: 'Tinggi puncak mengikuti frekuensi', results: 'Hasil probabilitas', resultKicker: 'Probabilitas kecocokan acak', locusBreakdown: 'Perhitungan tiap lokus', genotype: 'Genotipe', rule: 'Aturan', frequency: 'Frekuensi genotipe', badgeNeedsData: 'Data diperlukan', badgeExploratory: 'Eksploratif', badgeCalculated: 'Model terhitung', needsData: 'Lengkapi setiap lokus dengan dua alel dan frekuensi 0 hingga 100%; jumlah sepasang frekuensi tidak boleh lebih dari 100%.', exploratoryResult: 'Profil kecil ini berguna untuk belajar. Lokus tambahan dapat membuat profil lebih jarang, tetapi tidak menjadikan model ini kesimpulan kasus.', calculatedResult: 'Produk dihitung dari frekuensi yang dimasukkan dengan asumsi independensi yang disederhanakan.', notCalculated: 'Belum dihitung', completeFields: 'Lengkapi bidang profil untuk melihat hasil.', ofRandomProfiles: 'profil acak dalam model pembelajaran ini', missingValue: 'Lokus tanpa nama', pattern: 'Pola profil', calculation: 'Perhitungan', meaning: 'Makna', homozygote: 'Dua alel sama', heterozygote: 'Dua alel berbeda', independentLoci: 'Beberapa lokus independen', homozygoteMeaning: 'Frekuensi alel dikalikan dengan dirinya sendiri.', heterozygoteMeaning: 'Kedua frekuensi alel dikalikan lalu digandakan.', independentLociMeaning: 'Setiap lokus menyumbang frekuensi gabungan profil.',
  },
  seo: {
    calculatorTitle: 'Kalkulator probabilitas kecocokan profil DNA',
    intro: 'Lab probabilitas profil DNA ini membantu pelajar dan pembaca umum memahami bagaimana profil STR autosomal kecil menjadi probabilitas dalam model genetika populasi yang disederhanakan. Masukkan dua alel dan frekuensinya untuk setiap lokus. Kalkulator menerapkan aturan Hardy-Weinberg lalu mengalikan frekuensi lokus untuk menampilkan kecocokan acak sebagai contoh pembelajaran.',
    methodTitle: 'Cara kerja aturan genotipe',
    method: 'Antarmuka menjaga proses tetap terlihat: jejak menunjukkan alel yang dimasukkan, tabel menunjukkan setiap frekuensi genotipe, dan hasil akhir ditulis sebagai satu banding pangkat sepuluh. Homozigot menggunakan p², sedangkan heterozigot menggunakan 2pq. Preset sengaja memakai nilai sintetis untuk belajar, bukan basis data populasi resmi.',
    populationTitle: 'Mengapa frekuensi populasi penting',
    population: 'Frekuensi alel adalah perkiraan dari basis data populasi. Populasi rujukan, cara pengambilan sampel, ukuran basis data, kekerabatan, substruktur populasi, dan validasi memengaruhi tafsir. Jika frekuensi menggambarkan populasi yang relevan, profil merupakan sumber tunggal yang bersih, dan lokus dianggap independen, produk ini memperkirakan frekuensi profil pada orang acak yang tidak berkerabat. Perubahan asumsi mengubah makna hasil.',
    interpretation: 'Hasil ini adalah pernyataan bersyarat berdasarkan nilai yang dimasukkan. Model tidak mempertimbangkan pemilihan tersangka, orang yang berkerabat, campuran, atau pengaruh pencarian basis data. Karena itu, contoh pembelajaran harus selalu dibaca bersama populasi, metode, dan ketidakpastiannya.',
    application: 'Untuk latihan yang baik, pilih satu preset terlebih dahulu, ubah hanya satu lokus, lalu amati perubahan pada tabel dan probabilitas akhir. Dengan cara ini terlihat bahwa alel langka dapat mengubah kontribusi sebuah lokus secara besar. Catat nilai yang dimasukkan, asal frekuensi, dan asumsi independensi yang disederhanakan. Tampilan ini cocok untuk kelas, belajar mandiri, dan penjelasan transparan tentang langkah perhitungan, bukan untuk pendapat forensik.',
    limitsTitle: 'Batasan pendidikan',
    limits: 'Dalam kasus nyata, pemilihan orang, basis data, campuran profil, substruktur populasi, dan interpretasi ahli juga harus didokumentasikan. Aplikasi kecil ini tidak menganalisis elektroferogram, tidak memperbaiki substruktur, tidak menghitung rasio kemungkinan, dan tidak mencari basis data DNA.',
    tipTitle: 'Gunakan sebagai model, bukan putusan',
    tip: 'Probabilitas kecocokan acak yang kecil bukan bukti identitas atau kesalahan. Gunakan alat ini untuk menjelaskan aritmetika dan tampilkan sumber data, populasi, asumsi, serta ketidakpastiannya.',
    list: ['<strong>Satu populasi:</strong> Jangan mencampur frekuensi dari basis data yang tidak sebanding.', '<strong>Asumsi terlihat:</strong> Lab ini mengasumsikan orang tidak berkerabat dan lokus independen secara sederhana.', '<strong>Pisahkan probabilitas dan identitas:</strong> Profil langka bukan bukti sumber atau kesalahan.', '<strong>Dokumentasikan data:</strong> Laporan formal memerlukan sumber, metode, ketidakpastian, dan tafsir.'],
  },
  faq: [
    { question: 'Apa arti probabilitas kecocokan acak?', answer: 'Ini memperkirakan peluang orang tidak berkerabat yang dipilih secara acak memiliki profil yang dimasukkan menurut frekuensi dan asumsi terpilih. Ini bukan probabilitas kesalahan atau asal sampel tertentu.' },
    { question: 'Bagaimana frekuensi genotipe dihitung?', answer: 'Untuk homozigot digunakan p². Untuk heterozigot digunakan 2pq, lalu frekuensi setiap lokus dikalikan.' },
    { question: 'Mengapa frekuensi preset bersifat sintetis?', answer: 'Preset adalah contoh kecil untuk belajar. Pekerjaan forensik memerlukan basis data populasi yang tervalidasi, representatif, dan terdokumentasi.' },
    { question: 'Apakah alat ini membandingkan dua orang?', answer: 'Tidak. Alat ini tidak menerima sampel biologis, tidak membandingkan profil, dan tidak mengidentifikasi siapa pun; alat ini hanya mengeksplorasi model matematika.' },
    { question: 'Mengapa probabilitas kecil bukan putusan?', answer: 'Tafsir bergantung pada basis data, pemilihan, kualitas profil, asumsi, dan penilaian profesional.' },
  ],
  howTo: [
    { name: 'Pilih preset pembelajaran', text: 'Mulai dengan preset seimbang, homozigot, atau kelas sederhana.' },
    { name: 'Edit sebuah lokus', text: 'Masukkan nama, dua alel, dan frekuensi tiap alel sebagai persentase.' },
    { name: 'Baca aturan lokus', text: 'Tabel menampilkan p² untuk homozigot dan 2pq untuk heterozigot.' },
    { name: 'Tafsirkan dengan hati-hati', text: 'Anggap hasil sebagai model pendidikan dan pertahankan asumsi tetap terlihat.' },
  ],
});
