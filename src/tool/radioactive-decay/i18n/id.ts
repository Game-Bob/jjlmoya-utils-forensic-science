import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-waktu-paruh-peluruhan-radioaktif';
const title = 'Kalkulator waktu paruh dan peluruhan radioaktif';
const description = 'Simulasikan peluruhan radioaktif dengan isotop nyata, rumus waktu paruh, medan atom stokastik, jumlah tersisa, dan aktivitas relatif.';

const howTo = [
  { name: 'Pilih isotop', text: 'Mulai dari Karbon-14, Iodin-131, Uranium-238, Teknesium-99m, atau Radon-222. Setiap preset memuat waktu paruh realistis dan konteks ilmiah penggunaannya.' },
  { name: 'Atur sampel dan waktu', text: 'Sesuaikan jumlah atom yang ditampilkan lalu majukan waktu untuk melihat fraksi tersisa mengikuti hukum eksponensial waktu paruh.' },
  { name: 'Bandingkan hitungan pasti dan peluang atomik', text: 'Gunakan hasil deterministik sebagai nilai harapan, lalu lihat medan atom untuk memahami mengapa sampel kecil berfluktuasi di sekitar kurva teori.' },
  { name: 'Tafsirkan aktivitas', text: 'Aktivitas turun sebanding dengan inti yang belum meluruh, sehingga meter menunjukkan sisa laju radiasi relatif terhadap sampel awal.' },
];

const faq = [
  { question: 'Apa arti waktu paruh?', answer: 'Waktu paruh adalah waktu yang dibutuhkan agar rata-rata separuh inti tidak stabil dalam sampel meluruh. Setelah satu waktu paruh tersisa 50%, setelah dua tersisa 25%, dan setelah tiga tersisa 12,5%.' },
  { question: 'Mengapa medan atom tidak selalu sama dengan persentase tepat?', answer: 'Peluruhan radioaktif bersifat probabilistik. Rumus memberi fraksi harapan untuk sampel sangat besar, sedangkan medan mensimulasikan atom individual dengan ambang acak.' },
  { question: 'Apakah aktivitas sama dengan atom tersisa?', answer: 'Untuk satu isotop, aktivitas sebanding dengan jumlah inti yang belum meluruh. Jika 30% atom tersisa, aktivitas sesaat juga sekitar 30% aktivitas awal.' },
  { question: 'Bisakah dipakai untuk penanggalan radiokarbon?', answer: 'Bisa untuk pemahaman konsep. Penanggalan Carbon-14 nyata juga memakai kurva kalibrasi, koreksi kontaminasi, dan persiapan sampel.' },
  { question: 'Apakah setiap isotop meluruh menjadi satu produk stabil?', answer: 'Tidak selalu. Beberapa isotop meluruh lewat rantai dengan beberapa produk anak. Alat ini memodelkan waktu paruh isotop induk.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotop',
    sampleAtoms: 'Atom sampel',
    elapsedTime: 'Waktu berlalu',
    halfLife: 'Waktu paruh',
    remaining: 'Tersisa',
    decayed: 'Meluruh',
    activity: 'Aktivitas relatif',
    timeUnit: 'Satuan waktu',
    expectedCurve: 'Kurva harapan',
    atomField: 'Medan atom',
    presetUse: 'Penggunaan umum',
    oneHalfLife: '1 waktu paruh',
    twoHalfLives: '2 waktu paruh',
    fourHalfLives: '4 waktu paruh',
    custom: 'Kustom',
    liveAtoms: 'Atom aktif',
    decayedAtoms: 'Atom meluruh',
    resetSeed: 'Pola atom baru',
  },
  seo: [
    { type: 'title', text: 'Kalkulator waktu paruh radioaktif: atom tersisa, aktivitas, dan contoh isotop', level: 2 },
    { type: 'paragraph', html: 'Gunakan kalkulator peluruhan radioaktif ini untuk memperkirakan berapa banyak isotop tidak stabil yang tersisa setelah waktu tertentu. Kontennya cocok untuk pencarian tentang rumus waktu paruh, contoh isotop nyata, inti induk tersisa, inti meluruh, dan penurunan aktivitas.' },
    { type: 'paragraph', html: 'Rumus yang digunakan adalah <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> adalah jumlah inti induk awal, <strong>N(t)</strong> jumlah harapan setelah waktu <strong>t</strong>, dan <strong>T1/2</strong> waktu paruh.' },
    { type: 'table', headers: ['Waktu berlalu', 'Faktor', 'Inti induk tersisa', 'Aktivitas relatif'], rows: [['0 waktu paruh', '(1/2)^0', '100%', '100%'], ['1 waktu paruh', '(1/2)^1', '50%', '50%'], ['2 waktu paruh', '(1/2)^2', '25%', '25%'], ['3 waktu paruh', '(1/2)^3', '12,5%', '12,5%'], ['5 waktu paruh', '(1/2)^5', '3,125%', '3,125%'], ['10 waktu paruh', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Contoh isotop dan cara membaca hasil', level: 3 },
    { type: 'table', headers: ['Isotop', 'Waktu paruh perkiraan', 'Kegunaan umum', 'Makna hasil'], rows: [['Karbon-14', '5.730 tahun', 'Penanggalan radiokarbon', 'Aktivitas Carbon-14 yang tersisa pada materi yang pernah hidup.'], ['Iodin-131', '8,02 hari', 'Terapi medis dan kejadian nuklir', 'Seberapa cepat aktivitas turun dalam hitungan hari.'], ['Teknesium-99m', '6,01 jam', 'Pencitraan diagnostik', 'Mengapa aktivitas medis berguna memudar dalam satu hari klinis.'], ['Uranium-238', '4,47 miliar tahun', 'Penanggalan geologi', 'Mengapa isotop berumur sangat panjang tetap terukur.'], ['Radon-222', '3,82 hari', 'Radiasi dalam ruang', 'Bagaimana sumber gas paparan berubah.']] },
    { type: 'paragraph', html: 'Medan atom sengaja stokastik: setiap inti meluruh secara acak, sementara sampel besar mendekati kurva halus. Model ini berguna untuk pendidikan fisika, kimia nuklir, radiokarbon, isotop medis, dan keselamatan radiasi.' },
    { type: 'paragraph', html: 'Kalkulator ini memakai satu waktu paruh untuk isotop induk. Pengukuran nyata dapat membutuhkan koreksi efisiensi detektor, radiasi latar, rasio percabangan, produk anak, eliminasi biologis, bentuk kimia, perisai, dan kurva kalibrasi. Jangan gunakan sebagai pengganti instruksi medis, dosimetri, atau analisis laboratorium.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

