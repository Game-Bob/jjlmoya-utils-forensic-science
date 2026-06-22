import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'diagram-fase-titik-kritis-visualisator';
const title = 'Diagram Fase dan Visualisator Titik Kritis';
const description = 'Jelajahi daerah padat, cair, gas, dan superkritis pada diagram fase tekanan-suhu interaktif dengan penanda titik tripel dan titik kritis.';

const howTo = [
  {
    name: 'Pilih zat',
    text: 'Beralihlah antara air, karbon dioksida, dan nitrogen untuk melihat bagaimana titik tripel dan titik kritis nyata mengubah peta fase.',
  },
  {
    name: 'Gerakkan suhu dan tekanan',
    text: 'Gunakan penggeser untuk menempatkan sampel pada bidang tekanan-suhu. Diagram memperbarui daerah fase aktif dan penanda sampel langsung.',
  },
  {
    name: 'Amati lingkaran kritis',
    text: 'Bergeraklah menuju ujung batas uap-cair untuk melihat kalor laten memudar dan perbedaan cair-gas runtuh menjadi fluida superkritis.',
  },
  {
    name: 'Baca panel pengajaran',
    text: 'Gunakan label fase, meter kalor laten, dan pembacaan titik untuk menghubungkan diagram visual dengan kosakata termodinamika.',
  },
];

const faq = [
  {
    question: 'Apa itu diagram fase?',
    answer: 'Diagram fase memetakan wujud zat mana yang stabil pada berbagai kombinasi suhu dan tekanan. Garis batas menandai kondisi di mana dua fase dapat hidup berdampingan dalam kesetimbangan.',
  },
  {
    question: 'Apa yang terjadi pada titik kritis?',
    answer: 'Pada titik kritis, batas uap-cair berakhir. Di atas suhu dan tekanan kritis, material menjadi fluida superkritis dan tidak ada perbedaan tajam antara cair dan gas.',
  },
  {
    question: 'Mengapa air memiliki garis leleh yang berbeda?',
    answer: 'Air tidak biasa karena es memiliki kerapatan lebih rendah daripada air cair di dekat titik leleh. Meningkatnya tekanan dapat mendukung fase cair yang lebih rapat, sehingga batas padat-cair memiliki kemiringan yang berbeda dari banyak zat.',
  },
  {
    question: 'Apakah kurva yang diplot akurat secara laboratorium?',
    answer: 'Tidak. Alat ini menggunakan kurva sederhana yang berlabuh pada nilai titik tripel dan titik kritis yang dipublikasikan. Alat ini dirancang untuk pembelajaran konseptual, bukan untuk rekayasa proses atau perhitungan keselamatan.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Kontrol diagram fase',
    substance: 'Zat',
    units: 'Satuan',
    scientificUnits: 'Ilmiah (K, MPa)',
    metricUnits: 'Metrik (Celsius, kPa)',
    imperialUnits: 'Imperial (Fahrenheit, psi)',
    temperature: 'Suhu',
    pressure: 'Tekanan',
    diagram: 'Diagram fase tekanan-suhu',
    sample: 'Keadaan sampel',
    phase: 'Fase stabil',
    triplePoint: 'Titik tripel',
    criticalPoint: 'Titik kritis',
    vaporCurve: 'Batas uap-cair',
    meltingLine: 'Batas padat-cair',
    latentHeat: 'Kontras kalor laten',
    criticalProximity: 'Kedekatan kritis',
    coordinates: 'Koordinat',
    solid: 'Padat',
    liquid: 'Cair',
    gas: 'Gas',
    supercritical: 'Superkritis',
    low: 'rendah',
    high: 'tinggi',
    reset: 'Atur ulang',
    interpretation: 'Interpretasi',
    note: 'Garis batas menandai kesetimbangan; daerah menandai fase paling stabil untuk kondisi yang dipilih.',
  },
  seo: [
    {
      type: 'title',
      text: 'Visualisator diagram fase interaktif untuk titik tripel, kurva didih, dan titik kritis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Visualisator diagram fase ini mengubah grafik tekanan-suhu abstrak menjadi peta interaktif. Pilih zat, gerakkan suhu dan tekanan, dan lihat apakah sampel diprediksi berperilaku sebagai padat, cair, gas, atau fluida superkritis. Tujuannya adalah membuat batas fase terasa spasial: melintasi garis mengubah keadaan stabil, sementara mendekati titik kritis mengubah arti batas fase itu sendiri.',
    },
    {
      type: 'paragraph',
      html: 'Alat ini dibuat untuk siswa, guru, penulis sains, dan siapa pun yang mencari penjelasan jelas tentang diagram fase. Alat ini menekankan fitur yang paling penting dalam termodinamika pengantar: titik tripel di mana tiga fase hidup berdampingan, kurva uap-cair, batas padat-cair, dan titik akhir kritis di mana perbedaan cair-gas menghilang.',
    },
    {
      type: 'title',
      text: 'Cara membaca diagram tekanan-suhu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Diagram fase menempatkan suhu pada satu sumbu dan tekanan pada sumbu lainnya. Setiap daerah menunjukkan fase yang stabil dalam kondisi tersebut. Garis di antara daerah adalah kurva kesetimbangan: di sepanjang garis tersebut, dua fase dapat tetap dalam kesetimbangan daripada satu fase menggantikan fase lainnya sepenuhnya.',
    },
    {
      type: 'table',
      headers: ['Fitur diagram', 'Makna', 'Apa yang diamati dalam alat'],
      rows: [
        ['Titik tripel', 'Padat, cair, dan gas hidup berdampingan', 'Persimpangan suhu rendah tempat batas-batas bertemu.'],
        ['Kurva uap-cair', 'Kesetimbangan didih atau kondensasi', 'Garis melengkung dari titik tripel ke titik kritis.'],
        ['Batas padat-cair', 'Kesetimbangan leleh atau beku', 'Garis curam yang memisahkan daerah padat dan cair.'],
        ['Titik kritis', 'Akhir dari batas uap-cair', 'Titik akhir yang disorot di mana kalor laten memudar.'],
        ['Daerah superkritis', 'Tidak ada perbedaan tajam cair-gas', 'Area bersuhu tinggi dan bertekanan tinggi di luar titik kritis.'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa titik kritis penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Di bawah titik kritis, pendidihan adalah transisi fase: cair dan uap dapat hidup berdampingan, dan energi dapat diserap sebagai kalor laten sementara suhu tetap terikat pada kondisi batas. Pada titik kritis, batas tersebut berakhir. Di atasnya, kerapatan berubah secara kontinu dan zat tersebut digambarkan sebagai fluida superkritis daripada cairan atau gas normal.',
    },
    {
      type: 'paragraph',
      html: 'Hal ini penting dalam kimia, ilmu planet, ekstraksi industri, refrigerasi, dan fisika tekanan tinggi. Karbon dioksida, misalnya, menjadi superkritis pada kondisi yang relatif terjangkau dibandingkan dengan air, itulah sebabnya CO2 superkritis digunakan dalam ekstraksi dan pemrosesan material. Air memerlukan suhu dan tekanan yang jauh lebih tinggi, menjadikan titik kritisnya penting untuk sistem tenaga dan geofisika.',
    },
    {
      type: 'title',
      text: 'Apa yang disederhanakan oleh visualisator ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Diagram fase nyata dapat mencakup polimorf, keadaan metastabil, campuran non-ideal, banyak fase padat, dan persamaan keadaan yang disesuaikan secara eksperimental. Alat pendidikan ini menjaga model tetap kompak dengan sengaja. Alat ini menjangkarkan setiap zat pada nilai referensi yang dikenal dan menggambar kurva pembelajaran yang halus sehingga ide-ide utama mudah diperiksa tanpa memerlukan tabel termodinamika.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gunakan untuk intuisi:</strong> ini membantu menjelaskan mengapa panci presto, es kering, pendidihan, dan fluida superkritis berperilaku berbeda.',
        '<strong>Jangan gunakan untuk batas rekayasa:</strong> kurva sederhana bukanlah pengganti data properti bersertifikat.',
        '<strong>Fokus pada topologi:</strong> hasil pembelajaran terpenting adalah bagaimana daerah fase terhubung dan di mana batas berakhir.',
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
