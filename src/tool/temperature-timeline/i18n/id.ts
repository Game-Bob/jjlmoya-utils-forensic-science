import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kronologi-suhu-planet';
const description = 'Jelajahi sejarah suhu rata-rata Bumi sepanjang era geologi.';
const title = 'Kronologi Suhu Rata Rata Planet';

const howTo = [
  {
    name: 'Pilih era',
    text: 'Klik takik pada penggaris skala.',
  },
  {
    name: 'Periksa suhu',
    text: 'Baca suhu rata-rata global.',
  },
  {
    name: 'Amati planet',
    text: 'Perhatikan kanvas bereaksi terhadap keadaan termal.',
  },
];

const faq = [
  {
    "question": "Apakah Bumi lebih panas di masa lalu daripada sekarang?",
    "answer": "Ya, Bumi telah mengalami iklim yang jauh lebih hangat daripada sekarang. Selama Mesozoikum (era dinosaurus) dan Eosen awal, planet ini berada dalam kondisi rumah kaca tanpa es kutub, dan suhu rata-rata global melebihi 22 derajat, sekitar 7 hingga 8 derajat lebih hangat daripada rata-rata saat ini. Namun, transisi ke periode tersebut terjadi dalam skala waktu jutaan tahun, memungkinkan adaptasi evolusioner."
  },
  {
    "question": "Apa yang menyebabkan fenomena Bumi Bola Salju?",
    "answer": "Bumi Bola Salju (glasisasi global) terjadi terutama selama Neoproterozoikum (sekitar 700 juta tahun yang lalu). Hal ini dipicu oleh penurunan ekstrem gas rumah kaca karena pelapukan kimiawi batuan silikat yang dipercepat setelah pecahnya superbenua Rodinia. Es meluas dari kutub ke ekuator, memantulkan radiasi matahari (efek albedo) dan menjebak planet ini dalam lingkaran beku global yang baru pecah setelah jutaan tahun akumulasi CO2 vulkanik."
  },
  {
    "question": "Bagaimana Bumi mengatur suhunya dalam jangka panjang?",
    "answer": "Bumi memiliki termostat alami yang dikendalikan oleh siklus karbon geologis, diatur terutama oleh tektonik lempeng dan pelapukan silikat. Ketika planet menghangat, hujan asam bereaksi lebih cepat dengan batuan silikat, menarik CO2 keluar dari atmosfer dan mengendapkannya di dasar laut sebagai karbonat, mengurangi efek rumah kaca. Jika planet mendingin, pelapukan berkurang tetapi aktivitas vulkanik terus melepaskan CO2, secara bertahap menghangatkan planet kembali."
  },
  {
    "question": "Bagaimana perubahan iklim Antroposen berbeda dari masa lalu geologis?",
    "answer": "Perbedaan mendasar terletak pada kecepatan perubahan. Sementara transisi iklim alami di masa lalu geologis biasanya terjadi selama puluhan ribu atau jutaan tahun (memberikan ruang untuk migrasi biologis dan evolusi), pemanasan Antroposen terjadi dalam hitungan dekade. Laju variasi termal ini secara eksponensial lebih cepat daripada hampir semua peristiwa yang didokumentasikan sebelumnya, melampaui kapasitas adaptasi biosfer saat ini dan menyebabkan kepunahan massal yang dipercepat."
  },
  {
    "question": "Apa itu Maksimum Termal Paleosen-Eosen (PETM)?",
    "answer": "PETM adalah peristiwa pemanasan global ekstrem yang terjadi sekitar 56 juta tahun yang lalu. Hal ini disebabkan oleh injeksi karbon yang cepat dan masif ke atmosfer (kemungkinan dari pelepasan hidrat metana laut atau vulkanisme Atlantik Utara), meningkatkan suhu global sebesar 5 hingga 8 derajat dalam beberapa ribu tahun. Ini dianggap sebagai analog geologis terbaik untuk perubahan iklim modern, yang mengakibatkan pengasaman laut yang parah dan kepunahan massal organisme bentik."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kronologi Suhu Bumi',
    sub: 'Jelajahi era iklim geologi Bumi',
    ageLabel: 'Usia:',
    tempLabel: 'Suhu Rata-rata:',
    selectPrompt: 'Pilih periode geologi.',
    epoch_archean_name: 'Eon Arkean',
    epoch_archean_age: '4.0 hingga 2.5 miliar tahun lalu',
    epoch_archean_desc: 'Bumi sangat panas dengan atmosfer kaya metana.',
    epoch_proterozoic_name: 'Eon Proterozoikum',
    epoch_proterozoic_age: '2.5 miliar hingga 541 juta tahun lalu',
    epoch_proterozoic_desc: 'Kenaikan oksigen memicu glasiasi Huronian.',
    epoch_paleozoic_name: 'Era Paleozoikum',
    epoch_paleozoic_age: '541 hingga 252 juta tahun lalu',
    epoch_paleozoic_desc: 'Ledakan kehidupan di samudra dan migrasi ke darat.',
    epoch_mesozoic_name: 'Era Mesozoikum',
    epoch_mesozoic_age: '252 hingga 66 juta tahun lalu',
    epoch_mesozoic_desc: 'Zaman dinosaurus dengan kondisi efek rumah kaca.',
    epoch_cenozoic_name: 'Era Kenozoikum',
    epoch_cenozoic_age: '66 juta tahun lalu hingga Sekarang',
    epoch_cenozoic_desc: 'Pendinginan bertahap menuju zaman es Kuarter.',
    epoch_anthropocene_name: 'Epoh Antroposen',
    epoch_anthropocene_age: 'Hari Ini dan Masa Depan',
    epoch_anthropocene_desc: 'Pemanasan cepat akibat emisi gas rumah kaca.',
  },
  seo: [
  {
    "type": "title",
    "text": "KLIMATOLOGI HISTORIS: Evolusi Termal Bumi Melalui Era Geologis",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Iklim Bumi tidak pernah statis. Selama 4,5 miliar tahun keberadaannya, planet kita telah berosilasi antara dua kondisi mendasar: kondisi rumah kaca (greenhouse) dan kondisi zaman es (icehouse). Memahami fluktuasi skala besar ini bukan hanya rasa ingin tahu geologis, tetapi alat yang sangat diperlukan untuk mengontekstualisasikan kecepatan dan keparahan pemanasan global antropogenik. Dengan mempelajari isotop oksigen dalam fosil laut dan gelembung udara yang terperangkap dalam inti es, para paleoklimatolog telah merekonstruksi catatan akurat tentang suhu Bumi di masa lalu."
  },
  {
    "type": "title",
    "text": "Catatan Suhu Berdasarkan Eon dan Era Geologis",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Sejarah Bumi dibagi menjadi interval waktu utama yang ditentukan oleh perubahan biologis dan geologis. Di bawah ini adalah daftar perkiraan suhu rata-rata untuk setiap zaman yang tersedia dalam lini masa ini:"
  },
  {
    "type": "table",
    "headers": [
      "Zaman Geologis",
      "Usia Perkiraan",
      "Suhu Rata-rata",
      "Tonggak dan Fitur Klimatologis"
    ],
    "rows": [
      [
        "<strong>Eon Arkean</strong>",
        "4.0 hingga 2.5 Ga",
        "30 °C",
        "Bumi panas awal. Matahari muda yang redup dikompensasikan oleh efek rumah kaca ekstrem yang kaya akan metana."
      ],
      [
        "<strong>Eon Proterozoikum</strong>",
        "2.5 Ga hingga 541 Ma",
        "12 °C",
        "Kenaikan oksigen bebas; menyebabkan runtuhnya metana dan memicu glasiasi global (\"Bumi Bola Salju\")."
      ],
      [
        "<strong>Era Paleozoikum</strong>",
        "541 hingga 252 Ma",
        "20 °C",
        "Keanekaragaman hayati laut yang besar dan kolonisasi darat. Berakhir dengan letusan gunung berapi dan pemanasan ekstrem."
      ],
      [
        "<strong>Era Mesozoikum</strong>",
        "252 hingga 66 Ma",
        "22 °C",
        "Periode hangat par excellence (super-rumah kaca tanpa es polar). Masa kejayaan dinosaurus."
      ],
      [
        "<strong>Era Kenozoikum</strong>",
        "66 Ma hingga hari ini",
        "14 °C",
        "Pendinginan progresif yang didorong oleh arus laut benua yang mengarah pada siklus zaman es Kuarter."
      ],
      [
        "<strong>Antroposen</strong>",
        "Sekarang & masa depan",
        "15.2 °C",
        "Pemanasan drastis dan tidak biasa yang disebabkan oleh emisi gas rumah kaca antropogenik."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Ekstrem Termal Masa Lalu: Dari Glasiasi Global ke Panas Mesozoikum",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Sejarah planet mencakup peristiwa iklim ekstrem. Pada Eon Proterozoikum, fotosintesis primitif melepaskan oksigen dalam skala besar, mengoksidasi metana atmosfer dan menjerumuskan planet ini ke dalam glasiasi Huronian, salah satu periode \"Bumi Bola Salju\" di mana gletser mencapai garis lintang khatulistiwa. Pada ekstrem yang berlawanan, selama Era Mesozoikum dan Paleosen, aktivitas vulkanik tektonik yang intens menjenuhkan atmosfer dengan CO2, meningkatkan suhu global rata-rata hingga 10 derajat di atas tingkat saat ini. Periode-periode ini sama sekali tidak memiliki es kutub, menampung hutan beriklim sedang di garis lintang Arktik dan memungkinkan dominasi reptil berdarah dingin seperti dinosaurus."
  },
  {
    "type": "title",
    "text": "Faktor yang Mendorong Iklim Planet pada Skala Geologis",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Iklim jangka panjang Bumi adalah hasil dari keseimbangan termodinamika halus yang diatur oleh beberapa mekanisme alam yang saling terhubung:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Siklus Milankovitch:</strong> Variasi periodik kecil dalam eksentrisitas orbit, kemiringan, dan presesi planet mengubah radiasi matahari yang diterima.",
      "<strong>Siklus Karbon Silikat-Karbonat:</strong> Termostat geokimia jangka panjang. Hujan menghilangkan CO2, mengubahnya menjadi silikat yang diendapkan di lautan.",
      "<strong>Tektonik Lempeng:</strong> Hanyutan benua mengubah arus laut global dan menciptakan pegunungan yang mempercepat pelapukan kimia CO2.",
      "<strong>Efek Umpan Balik Albedo:</strong> Keberadaan salju dan es memantulkan sinar matahari, mendinginkan planet lebih lanjut dalam lingkaran umpan balik."
    ]
  },
  {
    "type": "title",
    "text": "Antroposen: Akselerasi Termal yang Belum Pernah Ada Sebelumnya di Biosfer",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Transisi dari periode Holosen yang stabil ke Antroposen menandai era dampak langsung kemanusiaan terhadap sistem planet. Berbeda dengan peristiwa termal masa lalu, yang penyebab orbital atau vulkaniknya beroperasi selama skala waktu puluhan ribu tahun, pemanasan saat ini didorong oleh pembakaran masif cadangan karbon fosil yang terakumulasi selama jutaan tahun. Laju akumulasi gas rumah kaca saat ini dan peningkatan suhu rata-rata global terjadi secara signifikan lebih cepat daripada selama kepunahan Permian-Trias atau PETM, menimbulkan tantangan adaptif yang belum pernah ada sebelumnya bagi keanekaragaman hayati planet."
  }
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
