import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-sir-penyebaran-wabah';
const title = 'Simulator SIR Wabah Penyakit';
const description = 'Jelajahi penyebaran patogen dengan model SIR interaktif yang menyesuaikan R0, tingkat kematian, vaksinasi, periode infeksi, beban puncak, dan kurva transmisi secara real time.';

const howTo = [
  {
    name: 'Atur angka reproduksi',
    text: 'Geser penggeser R0 untuk menentukan berapa banyak infeksi sekunder yang disebabkan oleh satu orang terinfeksi dalam populasi yang sepenuhnya rentan.',
  },
  {
    name: 'Tambahkan vaksinasi dan efektivitas vaksin',
    text: 'Tingkatkan cakupan vaksinasi atau efektivitasnya untuk mengeluarkan orang yang terlindungi dari kelompok rentan dan menurunkan angka reproduksi efektif.',
  },
  {
    name: 'Sesuaikan tingkat kematian dan durasi infeksi',
    text: 'Ubah persentase kematian dan jumlah hari infeksi untuk melihat bagaimana dampak keparahan dan waktu kurva merespons.',
  },
  {
    name: 'Baca kurva SIR',
    text: 'Gunakan grafik dan pemeriksa hari untuk membandingkan kurva rentan, terinfeksi, sembuh, dan perkiraan kematian selama simulasi wabah berlangsung.',
  },
];

const faq = [
  {
    question: 'Apa yang ditunjukkan oleh model SIR?',
    answer: 'Model SIR membagi populasi menjadi kelompok rentan, terinfeksi, dan sembuh. Model ini memperkirakan bagaimana pergerakan orang antar kelompok tersebut seiring waktu saat transmisi dan pemulihan terjadi.',
  },
  {
    question: 'Bagaimana vaksinasi mengubah kurva?',
    answer: 'Vaksinasi mengurangi populasi rentan ketika mencegah infeksi. Dalam simulator ini, vaksinasi efektif menurunkan angka reproduksi efektif dan dapat mengecilkan atau menunda puncak infeksi.',
  },
  {
    question: 'Apakah R0 sama dengan Re?',
    answer: 'Tidak. R0 menggambarkan penyebaran pada populasi yang sepenuhnya rentan. Re adalah angka reproduksi efektif setelah kekebalan, vaksinasi, atau perubahan perilaku mengurangi jumlah orang yang dapat terinfeksi.',
  },
  {
    question: 'Mengapa kurva terinfeksi mencapai puncak lalu turun?',
    answer: 'Kurva terinfeksi turun ketika setiap orang yang terinfeksi menghasilkan lebih sedikit infeksi baru dibandingkan jumlah orang yang meninggalkan kelompok terinfeksi melalui kesembuhan atau kematian. Penurunan jumlah rentan adalah pendorong utama dalam model SIR dasar.',
  },
  {
    question: 'Dapatkah simulator ini memprediksi wabah nyata?',
    answer: 'Ini adalah alat pengajaran dan skenario, bukan peramal. Wabah nyata membutuhkan struktur usia, jaringan kontak, geografi, keterlambatan pelaporan, perubahan perilaku, varian, kekebalan yang berkurang, dan data yang terkalibrasi.',
  },
  {
    question: 'Apa perbedaan antara attack rate dan puncak terinfeksi?',
    answer: 'Attack rate mengukur total proporsi populasi yang pernah terinfeksi pada akhir wabah. Puncak terinfeksi mengukur jumlah maksimum orang yang terinfeksi secara bersamaan pada satu waktu. Puncak yang rendah tidak menjamin attack rate yang rendah, dan sebaliknya.',
  },
  {
    question: 'Apa artinya Re di bawah 1 secara visual?',
    answer: 'Ketika Re turun di bawah 1, setiap orang terinfeksi menghasilkan rata-rata kurang dari satu infeksi baru. Pada grafik, kurva terinfeksi tidak pernah naik tajam dan mungkin langsung menurun dari awal infeksi, yang berarti wabah tidak dapat bertahan.',
  },
  {
    question: 'Bagaimana periode infeksi memengaruhi wabah?',
    answer: 'Periode infeksi yang lebih panjang memperpanjang waktu di mana setiap orang terinfeksi dapat menularkan patogen. Ini meregangkan garis waktu wabah, menunda puncak, dan untuk R0 yang sama, dapat menghasilkan kurva yang lebih lebar dengan tinggi puncak yang lebih rendah.',
  },
  {
    question: 'Mengapa tingkat kematian tidak mengubah kurva terinfeksi?',
    answer: 'Dalam model SIR ini, tingkat kematian hanya memengaruhi jumlah kematian yang bercabang dari kelompok sembuh. Ini tidak memengaruhi transmisi karena kematian dan kesembuhan sama-sama mengeluarkan orang dari kelompok menular dengan laju yang sama.',
  },
  {
    question: 'Apa itu ambang kekebalan kelompok?',
    answer: 'Ambang kekebalan kelompok adalah fraksi populasi yang harus kebal agar Re turun di bawah 1. Ini diperkirakan sebagai 1 - 1/R0. Untuk campak dengan R0 sekitar 12, ambangnya di atas 91%. Untuk flu musiman dengan R0 sekitar 1,3, ambangnya mendekati 23%.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Skenario wabah langsung',
    curveChart: 'Kurva transmisi SIR',
    inspectDay: 'Periksa hari simulasi',
    legend: 'Legenda kurva',
    susceptible: 'Rentan',
    infected: 'Terinfeksi',
    recovered: 'Sembuh atau kebal',
    deaths: 'Kematian',
    controls: 'Kendali wabah',
    modelName: 'Model kompartemen',
    peakInfected: 'Puncak terinfeksi',
    peakDay: 'Hari puncak',
    attackRate: 'Attack rate',
    estimatedDeaths: 'Perkiraan kematian',
    r0: 'Angka reproduksi dasar R0',
    lethality: 'Tingkat kematian',
    vaccination: 'Cakupan vaksinasi',
    vaccineEffectiveness: 'Efektivitas vaksin',
    infectiousDays: 'Periode infeksi',
    initialInfected: 'Awal terinfeksi',
    dayLabel: 'Hari',
    daysUnit: 'hari',
    infectiousLabel: 'menular',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator SIR wabah untuk R0, vaksinasi, tingkat kematian, dan kurva transmisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simulator SIR wabah ini memungkinkan Anda menjelajahi bagaimana patogen menyebar dalam populasi ketika orang rentan terinfeksi dan kemudian meninggalkan kelompok menular melalui kesembuhan atau kematian. Dirancang untuk mahasiswa, komunikator sains, pelajar kesehatan masyarakat, dan siapa pun yang ingin penjelasan visual cepat tentang mengapa perubahan kecil dalam transmisi atau kekebalan dapat mengubah bentuk wabah.',
    },
    {
      type: 'paragraph',
      html: 'Kendali interaktif berfokus pada variabel yang paling sering ingin diuji orang: <strong>R0</strong>, tingkat kematian, cakupan vaksinasi, efektivitas vaksin, durasi infeksi, dan proporsi awal terinfeksi. Grafik diperbarui secara langsung sehingga kurva rentan, terinfeksi, sembuh, kebal, dan kematian dapat dibandingkan sebagai satu sistem wabah yang terhubung.',
    },
    {
      type: 'title',
      text: 'Bagaimana model SIR bekerja',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model SIR dasar membagi populasi menjadi tiga kompartemen utama. <strong>S</strong> adalah orang rentan yang masih bisa terinfeksi. <strong>I</strong> adalah orang yang saat ini menular dan dapat menularkan patogen. <strong>R</strong> adalah orang yang sudah tidak menular karena sembuh, mendapatkan kekebalan, atau meninggalkan rantai transmisi. Simulator ini juga melacak perkiraan kematian sebagai cabang hasil parah dari kelompok yang meninggalkan infeksi.',
    },
    {
      type: 'paragraph',
      html: 'Laju transmisi terkait dengan R0 dan periode infeksi. Jika R0 tinggi atau orang tetap menular lebih lama, lebih banyak infeksi baru yang dihasilkan sebelum kelompok terinfeksi menyusut. Jika vaksinasi mengeluarkan cukup banyak orang dari kelompok rentan, angka reproduksi efektif turun dan puncak wabah bisa menjadi jauh lebih kecil.',
    },
    {
      type: 'table',
      headers: ['Kendali', 'Apa yang diubah', 'Efek tipikal pada kurva'],
      rows: [
        ['R0', 'Potensi transmisi sebelum kekebalan dipertimbangkan', 'R0 yang lebih tinggi membuat kurva terinfeksi naik lebih cepat dan puncak lebih tinggi.'],
        ['Cakupan vaksinasi', 'Proporsi orang yang dipindahkan dari kelompok rentan ketika terlindungi', 'Cakupan yang lebih tinggi menurunkan Re dan dapat meratakan wabah.'],
        ['Efektivitas vaksin', 'Seberapa banyak vaksinasi mencegah infeksi dalam model sederhana ini', 'Efektivitas yang lebih tinggi membuat cakupan yang sama lebih protektif.'],
        ['Periode infeksi', 'Rata-rata waktu orang tetap menular', 'Infeksi yang lebih panjang mengubah waktu dan dapat memperpanjang wabah.'],
        ['Tingkat kematian', 'Proporsi orang yang meninggalkan infeksi yang dihitung sebagai kematian', 'Tingkat kematian yang lebih tinggi menaikkan kurva kematian tanpa secara langsung meningkatkan transmisi.'],
      ],
    },
    {
      type: 'title',
      text: 'Intuisi R0, Re, dan kekebalan kelompok',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 adalah rata-rata jumlah kasus sekunder yang disebabkan oleh satu orang terinfeksi dalam populasi yang sepenuhnya rentan. Re, angka reproduksi efektif, lebih rendah ketika beberapa orang sudah kebal, divaksinasi, diisolasi, atau tidak tersedia untuk infeksi. Dalam simulator ini, vaksinasi efektif secara langsung mengurangi kerentanan, sehingga Re yang ditampilkan turun seiring dengan meningkatnya cakupan perlindungan.',
    },
    {
      type: 'paragraph',
      html: 'Perkiraan kekebalan kelompok yang umum adalah <strong>1 - 1 / R0</strong>. Untuk R0 sebesar 3, ambangnya sekitar 66,7% kekebalan efektif. Simulator membantu membuat ambang ini terasa nyata: ketika vaksinasi efektif berada di bawah ambang, wabah masih bisa tumbuh; ketika di atas ambang, transmisi kesulitan untuk bertahan.',
    },
    {
      type: 'title',
      text: 'Apa arti angka puncak terinfeksi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Puncak terinfeksi adalah jumlah maksimum orang yang terinfeksi secara bersamaan dalam populasi simulasi. Ini seringkali lebih penting secara operasional daripada total infeksi karena rumah sakit, laboratorium, program isolasi, dan tim pelacakan kontak mengalami tekanan dari kasus aktif bersamaan. Menurunkan puncak bisa menjadi penting meskipun attack rate akhir tidak turun menjadi nol.',
    },
    {
      type: 'paragraph',
      html: 'Attack rate memperkirakan proporsi seluruh populasi yang terinfeksi pada akhir simulasi. Attack rate yang tinggi berarti patogen mencapai banyak orang sebelum kerentanan habis atau terkendali. Attack rate yang rendah berarti kekebalan, vaksinasi, atau transmisi yang lemah mencegah penyebaran luas.',
    },
    {
      type: 'title',
      text: 'Nilai R0 di dunia nyata dan implikasinya terhadap kekebalan kelompok',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Angka reproduksi dasar R0 bukanlah konstanta biologis tetap untuk suatu patogen. Ini tergantung pada pola kontak, kepadatan populasi, kebiasaan budaya, dan faktor lingkungan. Virus yang sama dapat memiliki nilai R0 yang berbeda di kota padat versus daerah pedesaan, atau di musim dengan lebih banyak kerumunan di dalam ruangan. Nilai-nilai di bawah ini adalah kisaran referensi ilustratif dari studi yang dipublikasikan.',
    },
    {
      type: 'table',
      headers: ['Patogen', 'Kisaran R0 tipikal', 'Ambang kekebalan kelompok (1 - 1/R0)', 'Fitur transmisi utama'],
      rows: [
        ['Influenza musiman', '1,2 - 1,4', '17% - 29%', 'Periode infeksi pendek, variasi musiman'],
        ['SARS-CoV-2 (leluhur)', '2,0 - 3,0', '50% - 67%', 'Transmisi pra-gejala, jalur aerosol'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '80% - 87%', 'Peningkatan viral load, penyebaran lebih cepat'],
        ['SARS-CoV-2 (Omicron)', '8,0 - 12,0', '87% - 92%', 'Evasi kekebalan, tropisme saluran napas atas'],
        ['Polio', '5,0 - 7,0', '80% - 86%', 'Rute fekal-oral, penumpahan asimtomatik panjang'],
        ['Cacar', '5,0 - 7,0', '80% - 86%', 'Diberantas melalui kampanye vaksinasi global'],
        ['Campak', '12,0 - 18,0', '92% - 94%', 'Sangat menular, airborne, periode infeksi panjang'],
        ['Batuk rejan (pertusis)', '12,0 - 17,0', '92% - 94%', 'Kekebalan yang berkurang memungkinkan infeksi ulang'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Ambang kekebalan kelompok yang tinggi tidak berarti vaksinasi sia-sia ketika cakupan di bawah ambang. Bahkan kekebalan parsial memperlambat transmisi, menurunkan puncak, mengurangi hasil parah, dan memberi waktu bagi sistem kesehatan. Simulator mendemonstrasikan efek ini ketika Anda menggerakkan penggeser vaksinasi melalui nilai-nilai menengah.',
    },
    {
      type: 'title',
      text: 'Bagaimana angka reproduksi efektif Re berubah selama wabah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re adalah angka reproduksi efektif pada titik tertentu dalam wabah. Tidak seperti R0 yang mengasumsikan populasi sepenuhnya rentan, Re memperhitungkan kekebalan, vaksinasi, dan faktor lain yang mengurangi kerentanan. Dalam simulator ini, Re dihitung sebagai <strong>R0 x (1 - fraksi terlindungi)</strong>, di mana fraksi terlindungi adalah proporsi populasi yang secara efektif kebal melalui vaksinasi.',
    },
    {
      type: 'paragraph',
      html: 'Nilai Re yang ditampilkan di header simulator diperbarui saat Anda menggerakkan kendali. Ketika Re tetap di atas 1, wabah tumbuh. Ketika turun di bawah 1, setiap orang terinfeksi menghasilkan rata-rata kurang dari satu infeksi baru, dan epidemi tidak dapat bertahan. Ini adalah wawasan inti di balik pengendalian epidemi: membawa dan menjaga Re di bawah 1 melalui kekebalan, perilaku, atau intervensi.',
    },
    {
      type: 'title',
      text: 'Attack rate, beban puncak, dan apa yang diungkapkan tentang keparahan wabah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Attack rate adalah fraksi dari total populasi yang terinfeksi selama simulasi wabah berlangsung. Ini adalah ringkasan metrik yang paling sering dikutip setelah gelombang epidemi. Attack rate yang tinggi berarti patogen menginfeksi sebagian besar orang rentan sebelum penurunan atau pengendalian menghentikan transmisi. Attack rate yang rendah berarti kekebalan, vaksinasi, atau transmisi yang lemah mencegah infeksi luas.',
    },
    {
      type: 'paragraph',
      html: 'Puncak terinfeksi - jumlah maksimum orang yang terinfeksi secara bersamaan - lebih penting untuk tekanan perawatan kesehatan jangka pendek. Gelombang dengan attack rate sedang tetapi puncak yang sangat tinggi dan tajam dapat membanjiri rumah sakit meskipun total kasus tidak ekstrem. Sebaliknya, kurva yang lambat dan datar dapat memiliki attack rate yang sama tersebar selama berminggu-minggu, memberi sistem waktu untuk menangani kasus. Inilah mengapa pejabat kesehatan masyarakat menekankan <strong>meratakan kurva</strong> sebagai tujuan operasional yang berbeda dari mencegah semua infeksi.',
    },
    {
      type: 'title',
      text: 'Meratakan kurva dan kapasitas perawatan kesehatan dalam model SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kurva terinfeksi dalam model SIR dapat diartikan sebagai jumlah orang yang membutuhkan perawatan secara bersamaan. Dalam wabah nyata, setiap orang yang membutuhkan tempat tidur rumah sakit, dukungan oksigen, atau perawatan intensif menggunakan sumber daya yang terbatas. Ketika kurva terinfeksi naik lebih tinggi dari kapasitas yang tersedia, angka kematian dari semua penyebab meningkat karena sistem tidak dapat memberikan perawatan yang memadai.',
    },
    {
      type: 'paragraph',
      html: 'Vaksinasi, dalam model ini, meratakan kurva dengan mengeluarkan orang dari kelompok rentan sebelum mereka dapat terinfeksi. Mengurangi R0 melalui tindakan lain - masker, ventilasi, jarak fisik, pengujian, isolasi - juga akan menurunkan puncak dalam model yang lebih lengkap. Simulasi membuat mekanismenya terlihat: seiring meningkatnya cakupan vaksinasi efektif, puncak menyusut, bergeser lebih lambat, atau hilang sama sekali.',
    },
    {
      type: 'title',
      text: 'Matematika di balik model SIR yang divisualisasikan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dalam model SIR, laju infeksi baru per langkah waktu tergantung pada tiga besaran: laju transmisi <strong>beta</strong>, jumlah orang yang saat ini menular <strong>I</strong>, dan fraksi populasi efektif yang masih rentan <strong>S / N</strong>. Produk <strong>beta x I x S / N</strong> disebut kekuatan infeksi. Setiap hari, kekuatan ini menentukan berapa banyak orang rentan yang pindah ke kompartemen terinfeksi.',
    },
    {
      type: 'paragraph',
      html: 'Orang meninggalkan kompartemen terinfeksi pada laju pemulihan <strong>gamma = 1 / periode infeksi</strong>. Keseimbangan antara kekuatan infeksi dan laju pemulihan menentukan apakah epidemi tumbuh atau menyusut. Ketika beta x S / N melebihi gamma, infeksi baru melebihi pemulihan dan wabah meluas. Ketika fraksi rentan S / N telah cukup turun, gamma mendominasi dan wabah menyusut.',
    },
    {
      type: 'paragraph',
      html: 'Parameter <strong>beta</strong> tidak terlihat langsung di antarmuka. Sebaliknya, ini diturunkan dari R0 dan periode infeksi melalui hubungan <strong>beta = R0 x gamma</strong>. Inilah mengapa mengubah R0 atau periode infeksi menghasilkan bentuk kurva yang serupa tetapi tidak identik. Kedua parameter memengaruhi kekuatan infeksi, tetapi periode infeksi juga meregangkan sumbu waktu wabah.',
    },
    {
      type: 'title',
      text: 'Cara menggunakan simulator ini untuk pembelajaran dan pengajaran',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bandingkan skenario R0 tinggi vs. rendah:</strong> atur R0 ke 1,5 (kisaran flu musiman) lalu ke 6,0 (kisaran polio pra-vaksinasi). Perhatikan bagaimana tinggi puncak, waktu puncak, dan attack rate berubah meskipun semua kendali lainnya identik.',
        '<strong>Jelajahi ambang kekebalan kelompok:</strong> mulai dengan R0 di 3,0 tanpa vaksinasi. Catat attack rate. Kemudian tambahkan cakupan vaksinasi hingga Re turun di bawah 1. Bandingkan puncak dan attack rate pada cakupan tepat di bawah dan di atas ambang.',
        '<strong>Uji efek respons lambat vs. cepat:</strong> atur cakupan vaksinasi pada berbagai tingkat dan amati kapan puncak terjadi. Cakupan yang lebih tinggi tidak hanya mengurangi tinggi puncak tetapi biasanya menundanya, memberi waktu untuk persiapan perawatan kesehatan.',
        '<strong>Pisahkan tingkat kematian dari transmisi:</strong> atur tingkat kematian ke 0% dan amati kurva terinfeksi. Kemudian atur tingkat kematian ke 10% tanpa mengubah pengaturan lainnya. Kurva terinfeksi tidak berubah, tetapi jumlah kematian meningkat. Ini menunjukkan mengapa tingkat kematian kasus dan kecepatan transmisi adalah dimensi epidemiologis yang berbeda.',
        '<strong>Periksa efek periode infeksi:</strong> bandingkan periode infeksi 4 hari dengan periode 18 hari pada R0 yang sama. Periode yang lebih panjang meregangkan kurva, menunda puncak, dan menghasilkan gelombang yang lebih panjang tetapi lebih rendah.',
        '<strong>Latihan kelas - temukan ambangnya:</strong> minta siswa menemukan cakupan vaksinasi minimum yang membawa Re di bawah 1 untuk R0 tertentu, lalu bandingkan hasilnya dengan rumus 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'Kapan dan mengapa menggunakan simulator ini',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Mahasiswa epidemiologi:</strong> hubungkan kerangka SIR matematis dengan bentuk kurva interaktif sebelum bekerja dengan persamaan diferensial atau memprogram model mereka sendiri.',
        '<strong>Komunikator sains dan jurnalis:</strong> hasilkan plot, tangkapan layar, atau penjelasan langsung yang menunjukkan mengapa R0, vaksinasi, dan periode infeksi penting untuk lintasan wabah.',
        '<strong>Pelajar kesehatan masyarakat:</strong> uji bagaimana kombinasi intervensi yang berbeda menggeser puncak epidemi dan attack rate untuk mengembangkan intuisi tentang trade-off dalam respons wabah.',
        '<strong>Siapa pun yang penasaran dengan matematika epidemi:</strong> jelajahi model SIR tanpa perlu menulis kode atau menginstal perangkat lunak. Setiap kendali memperbarui grafik secara real time.',
      ],
    },
    {
      type: 'title',
      text: 'Ekstensi model: SEIR, SIRS, dan seterusnya',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulator ini menggunakan struktur SIR dasar. Beberapa ekstensi umum menambahkan realisme. <strong>Model SEIR</strong> menambahkan kompartemen terpapar (E) untuk orang yang terinfeksi tetapi belum menular, yang mewakili masa inkubasi. Kelompok terpapar menunda puncak epidemi keluar dibandingkan dengan model SIR karena infeksi menghabiskan waktu dalam fase laten sebelum berkontribusi pada transmisi.',
    },
    {
      type: 'paragraph',
      html: '<strong>Model SIRS</strong> memungkinkan individu yang sembuh kehilangan kekebalan seiring waktu dan masuk kembali ke kompartemen rentan. Ini memodelkan patogen seperti pertusis atau SARS-CoV-2 dengan kekebalan yang berkurang dan menghasilkan gelombang wabah yang berkelanjutan atau berulang. <strong>Model terstruktur usia</strong> membagi populasi ke dalam kelompok usia dengan matriks kontak dan profil keparahan yang berbeda, yang penting untuk penyakit di mana anak-anak dan lansia memiliki hasil yang sangat berbeda.',
    },
    {
      type: 'paragraph',
      html: 'Ekstensi lainnya menambahkan penyebaran geografis (model metapopulasi), perubahan perilaku (laju kontak adaptif), kebisingan stokastik (untuk populasi kecil di mana kepunahan acak penting), dan waktu intervensi (penutupan sekolah, lockdown, pembatasan perjalanan yang menyala dan mati). Setiap ekstensi menambahkan kompleksitas yang penting untuk peramalan tetapi dapat mengaburkan dinamika transmisi inti yang diilustrasikan dengan bersih oleh model SIR dasar.',
    },
    {
      type: 'title',
      text: 'Keterbatasan simulator wabah ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ini adalah model SIR deterministik yang ringkas. Tidak termasuk kelompok usia, struktur rumah tangga, sekolah, perjalanan, superspreading, masa inkubasi, transmisi asimtomatik, musiman, varian, kekebalan yang berkurang, perubahan perilaku, keterlambatan pengujian, atau intervensi kesehatan masyarakat yang menyala dan mati seiring waktu. Detail-detail tersebut penting untuk peramalan nyata.',
    },
    {
      type: 'paragraph',
      html: 'Model mengasumsikan populasi yang tercampur merata di mana setiap orang rentan memiliki probabilitas kontak yang sama dengan setiap orang menular. Populasi nyata memiliki jaringan kontak dengan pengelompokan kuat, asortativitas usia, struktur geografis, dan variasi individu dalam penularan. Fitur-fitur ini dapat menciptakan pertumbuhan awal yang lebih lambat, peristiwa superspreading, dan pola wabah heterogen yang tidak ditangkap oleh model homogen.',
    },
    {
      type: 'paragraph',
      html: 'Gunakan simulator untuk memahami mekanisme dan membandingkan skenario, bukan untuk membuat keputusan medis, kebijakan, atau darurat. Penilaian wabah dunia nyata membutuhkan data surveilans, konteks lokal, analisis ketidakpastian, dan pemodelan epidemiologis spesialis.',
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
