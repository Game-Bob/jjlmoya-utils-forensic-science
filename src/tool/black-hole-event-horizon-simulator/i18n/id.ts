import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulator-ufuk-peristiwa-lubang-hitam';
const title = 'Simulator Ufuk Peristiwa Lubang Hitam';
const description = 'Jelajahi ufuk peristiwa lubang hitam dengan perhitungan interaktif massa, jarak orbit, dilatasi waktu, bola foton, kecepatan lepas, dan radius Schwarzschild.';

const howTo = [
  {
    name: 'Pilih massa lubang hitam',
    text: 'Gerakkan penggeser massa dari lubang hitam bermassa bintang hingga lubang hitam supermasif dan saksikan radius Schwarzschild berubah secara langsung.',
  },
  {
    name: 'Pindahkan wahana dekat ufuk',
    text: 'Atur jarak dalam radius Schwarzschild untuk membandingkan orbit luar yang aman, wilayah bola foton, dan tepi ufuk peristiwa.',
  },
  {
    name: 'Periksa efek relativistik',
    text: 'Baca kecepatan lepas, dilatasi waktu gravitasi, pergeseran merah, dan periode orbit untuk memahami mengapa intuisi biasa gagal di dekat ufuk.',
  },
  {
    name: 'Bandingkan radius yang disebut',
    text: 'Gunakan cincin panduan ufuk peristiwa, bola foton, dan ISCO untuk memahami batas-batas berbeda di sekitar lubang hitam yang tidak berotasi.',
  },
];

const faq = [
  {
    question: 'Apa itu ufuk peristiwa lubang hitam?',
    answer: 'Ufuk peristiwa adalah batas di mana kecepatan lepas mencapai kecepatan cahaya. Begitu suatu objek melintasinya, tidak ada sinyal yang bergerak pada atau di bawah kecepatan cahaya yang dapat kembali ke alam semesta luar.',
  },
  {
    question: 'Apa arti radius Schwarzschild?',
    answer: 'Radius Schwarzschild adalah jari-jari ufuk peristiwa untuk lubang hitam yang tidak berotasi dan tidak bermuatan. Radius ini tumbuh secara linear dengan massa, sehingga melipatgandakan massa akan melipatgandakan radius ufuk.',
  },
  {
    question: 'Apa itu bola foton?',
    answer: 'Bola foton adalah wilayah pada 1,5 radius Schwarzschild di mana cahaya dapat mengorbit lubang hitam dalam jalur yang tidak stabil. Gangguan kecil membuat foton lepas ke luar atau jatuh ke dalam.',
  },
  {
    question: 'Apa itu ISCO?',
    answer: 'ISCO berarti orbit lingkaran stabil terdalam. Untuk lubang hitam yang tidak berotasi, ISCO terletak pada 3 radius Schwarzschild, atau 6 radius gravitasi, dan menandai orbit lingkaran stabil terakhir bagi partikel bermassa.',
  },
  {
    question: 'Mengapa dilatasi waktu meningkat di dekat ufuk?',
    answer: 'Dalam geometri Schwarzschild, jam yang lebih dalam dalam medan gravitasi berdetak lebih lambat relatif terhadap pengamat jauh. Faktor yang ditampilkan mendekati nol saat wahana mendekati ufuk peristiwa.',
  },
  {
    question: 'Dapatkah simulator ini memodelkan lubang hitam yang berotasi?',
    answer: 'Tidak. Simulator ini menggunakan solusi Schwarzschild, yang mengasumsikan tanpa putaran dan tanpa muatan listrik. Lubang hitam astrofisika nyata sering berotasi, dan putaran mengubah ukuran ufuk, posisi ISCO, dan perilaku cakram.',
  },
  {
    question: 'Mengapa lubang hitam supermasif kurang kejam secara pasang surut di ufuk?',
    answer: 'Gradien pasang surut di ufuk menurun seiring bertambahnya massa lubang hitam. Lubang hitam bermassa bintang kecil dapat meregangkan benda secara dahsyat di dekat ufuk, sementara lubang hitam supermasif dapat memiliki gradien lokal yang lebih lembut di batas tersebut.',
  },
  {
    question: 'Apakah visualisasi ini menunjukkan gambar lubang hitam yang sebenarnya?',
    answer: 'Ini adalah diagram pendidikan, bukan pengamatan yang dilacak sinar. Cincin dan cakram diskalakan sesuai radius Schwarzschild yang disederhanakan sehingga zona fisik mudah dibandingkan.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Peta medan ufuk peristiwa',
    visualCaption: 'Wahana bergerak melalui geometri Schwarzschild yang diskalakan. Cincin panduan terang menandai ufuk, bola foton, dan orbit lingkaran stabil terdalam.',
    controlsTitle: 'Kontrol lubang hitam',
    eventHorizon: 'Ufuk peristiwa',
    photonSphere: 'Bola foton',
    isco: 'ISCO',
    rsLabel: 'Radius Schwarzschild',
    diameterLabel: 'Diameter',
    timeLabel: 'Dilatasi waktu',
    redshiftLabel: 'Pergeseran merah',
    statusSafe: 'Di luar wilayah orbit stabil',
    statusPhoton: 'Di dalam zona bola foton',
    statusInside: 'Pada batas ufuk',
    diameter: 'Diameter ufuk',
    lightCrossing: 'Waktu lintasan cahaya',
    timeDilation: 'Laju jam vs pengamat jauh',
    redshift: 'Pergeseran merah gravitasi',
    mass: 'Massa lubang hitam',
    distance: 'Jarak wahana',
    speed: 'Kecepatan orbit wahana',
    escapeVelocity: 'Kecepatan lepas',
    orbitalPeriod: 'Periode orbit wahana',
    tidalGradient: 'Gradien pasang surut',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'massa matahari',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 massa matahari',
    initialDistanceOutput: '3,0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator ufuk peristiwa lubang hitam untuk radius Schwarzschild, bola foton, dan dilatasi waktu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simulator ufuk peristiwa lubang hitam ini mengubah gagasan inti lubang hitam Schwarzschild menjadi model visual interaktif. Ubah massa lubang hitam, gerakkan wahana ke dalam atau ke luar, dan bandingkan bagaimana ufuk peristiwa, bola foton, orbit lingkaran stabil terdalam, kecepatan lepas, pergeseran merah gravitasi, dan dilatasi waktu merespons.',
    },
    {
      type: 'paragraph',
      html: 'Simulator ini dibuat untuk mahasiswa astronomi, guru fisika, penulis sains, dan pelajar yang ingin tahu lebih dari sekadar rumus statis. Tampilan menghubungkan angka-angka dengan diagram spasial sehingga Anda dapat melihat mengapa ufuk peristiwa bukan permukaan material, mengapa foton memiliki orbit tidak stabil khusus, dan mengapa gerak melingkar stabil berhenti sebelum ufuk tercapai.',
    },
    {
      type: 'title',
      text: 'Bagaimana radius ufuk peristiwa dihitung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk lubang hitam yang tidak berotasi dan tidak bermuatan, radius ufuk peristiwa adalah <strong>radius Schwarzschild</strong>. Ini dihitung sebagai <strong>Rs = 2GM / c^2</strong>, di mana G adalah konstanta gravitasi, M adalah massa lubang hitam, dan c adalah kecepatan cahaya. Satu massa matahari setara dengan radius Schwarzschild sekitar 2,95 kilometer.',
    },
    {
      type: 'paragraph',
      html: 'Karena radius Schwarzschild bertambah secara linear dengan massa, lubang hitam 10 massa matahari memiliki radius hampir 29,5 kilometer, sementara lubang hitam 4 juta massa matahari seperti Sagittarius A* memiliki radius sekitar 11,8 juta kilometer. Penggeser massa menggunakan skala logaritmik sehingga kasus massa bintang dan supermasif dapat muat dalam kontrol yang sama.',
    },
    {
      type: 'table',
      headers: ['Wilayah', 'Radius dalam radius Schwarzschild', 'Artinya'],
      rows: [
        ['Ufuk peristiwa', '1,0 Rs', 'Batas satu arah di mana kecepatan lepas sama dengan kecepatan cahaya.'],
        ['Bola foton', '1,5 Rs', 'Orbit lingkaran tidak stabil untuk cahaya di sekitar lubang hitam Schwarzschild.'],
        ['ISCO', '3,0 Rs', 'Orbit lingkaran stabil terdalam untuk partikel bermassa.'],
        ['Medan lemah', '6 Rs dan seterusnya', 'Gravitasi masih kuat, tetapi orbit lingkaran lebih mudah dipertahankan.'],
      ],
    },
    {
      type: 'title',
      text: 'Kecepatan lepas dan mengapa ufuk adalah batas kausal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kecepatan lepas adalah kecepatan yang dibutuhkan suatu objek untuk mencapai jarak yang cukup jauh tanpa dorongan tambahan. Dalam bahasa Newton, kecepatan lepas pada radius Schwarzschild sama dengan c. Relativitas umum memberikan interpretasi yang lebih dalam: kerucut cahaya masa depan miring ke dalam sehingga semua jalur berarah masa depan di dalam ufuk bergerak menuju radius yang lebih kecil.',
    },
    {
      type: 'paragraph',
      html: 'Pembacaan kecepatan lepas berguna sebagai intuisi, tetapi tidak boleh dibaca sebagai deskripsi relativistik yang lengkap. Di dekat ufuk, ruang dan waktu melengkung cukup kuat sehingga koordinat global, pengukuran lokal, dan apa yang dilihat pengamat jauh tidak dapat dipertukarkan. Itulah mengapa simulator visual membantu memisahkan radius yang disebut dan maknanya.',
    },
    {
      type: 'title',
      text: 'Dilatasi waktu dan pergeseran merah gravitasi di dekat lubang hitam',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebuah jam yang ditahan pada radius tetap di luar lubang hitam Schwarzschild berdetak lebih lambat dibandingkan dengan pengamat jauh. Faktor sederhana yang ditunjukkan di sini adalah <strong>sqrt(1 - Rs / r)</strong>. Pada 3 Rs, laju jam sekitar 0,82 dari laju jauh. Pada 1,1 Rs, turun menjadi sekitar 0,30, yang berarti pengamat jauh melihat proses di dekat radius tersebut sangat melambat.',
    },
    {
      type: 'paragraph',
      html: 'Pergeseran merah gravitasi mengikuti geometri yang sama. Cahaya yang memanjat keluar dari sumur gravitasi kehilangan energi, sehingga panjang gelombangnya meregang. Pergeseran merah yang ditampilkan tumbuh dengan cepat di dekat ufuk, yang merupakan salah satu alasan mengapa cakram akresi dan emisi dekat ufuk memerlukan pemodelan relativistik daripada mekanika orbit biasa.',
    },
    {
      type: 'title',
      text: 'Bola foton dan ISCO dijelaskan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bola foton pada 1,5 Rs adalah tempat cahaya, pada prinsipnya, dapat mengikuti orbit lingkaran di sekitar lubang hitam Schwarzschild. Orbit ini tidak stabil: gangguan kecil ke luar membuat foton lepas, dan gangguan kecil ke dalam mengirimnya menuju ufuk. Wilayah ini membentuk pelensaan gravitasi kuat dan berkontribusi pada struktur cincin terang yang terlihat dalam gambar lubang hitam.',
    },
    {
      type: 'paragraph',
      html: 'ISCO pada 3 Rs adalah orbit lingkaran stabil terdalam untuk partikel bermassa di sekitar lubang hitam yang tidak berotasi. Di dalam ISCO, orbit lingkaran memerlukan kondisi ideal dan tidak stabil terhadap gangguan kecil. Dalam teori cakram akresi, ISCO membantu menetapkan tepi dalam dari emisi cakram paling terang untuk model lubang hitam sederhana.',
    },
    {
      type: 'title',
      text: 'Lubang hitam bermassa bintang vs supermasif',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pelajaran yang mengejutkan adalah bahwa lubang hitam yang lebih besar bisa terasa kurang destruktif di ufuk. Radius bertambah sebanding dengan massa, tetapi gradien pasang surut di dekat ufuk menurun untuk massa yang lebih besar. Lubang hitam bermassa bintang dapat menghasilkan regangan ekstrem pada jarak seukuran manusia di dekat ufuk. Lubang hitam supermasif dapat memiliki ufuk yang begitu besar sehingga gradien pasang surut lokal pada saat penyeberangan jauh lebih kecil.',
    },
    {
      type: 'paragraph',
      html: 'Simulator ini menyertakan pembacaan gradien pasang surut dalam gravitasi Bumi per meter. Ini adalah perkiraan gradien radial yang disederhanakan, tetapi membantu menunjukkan mengapa ungkapan "spagetifikasi di ufuk" sangat bergantung pada massa. Ufuk peristiwa adalah batas kausal, bukan selalu tempat gaya pasang surut pertama kali menjadi fatal.',
    },
    {
      type: 'title',
      text: 'Keterbatasan simulator lubang hitam ini',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tidak ada putaran:</strong> alat ini menggunakan geometri Schwarzschild. Lubang hitam Kerr memiliki seretan bingkai, ergosfer, dan radius ISCO yang bergantung pada putaran.',
        '<strong>Tidak ada fisika akresi:</strong> cakram bercahaya adalah lapisan panduan, bukan simulasi plasma dengan suhu, opasitas, medan magnet, atau pancaran Doppler.',
        '<strong>Tidak ada pelacakan sinar:</strong> diagram diskalakan untuk pembelajaran. Ini tidak merender pola pelensaan tepat yang akan diamati kamera di dekat lubang hitam.',
        '<strong>Tidak ada tampilan koordinat jatuh:</strong> faktor dilatasi waktu menggambarkan jam diam di luar ufuk dibandingkan dengan pengamat jauh. Jatuh bebas mengalami geometri secara berbeda.',
      ],
    },
    {
      type: 'title',
      text: 'Eksperimen kelas yang berguna',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Skalakan pusat Bima Sakti:</strong> atur massa mendekati 4 juta massa matahari dan bandingkan diameter ufuk dengan skala orbit planet.',
        '<strong>Temukan bola foton:</strong> gerakkan penggeser jarak ke 1,5 Rs dan perhatikan seberapa dekatnya dengan ufuk peristiwa dibandingkan dengan ISCO pada 3 Rs.',
        '<strong>Bandingkan gradien pasang surut:</strong> atur 10 massa matahari, lalu 1 miliar massa matahari, sambil menjaga wahana tetap dekat 1,1 Rs. Radius ufuk tumbuh sangat besar sementara gradien pasang surut lokal turun.',
        '<strong>Lacak perlambatan jam:</strong> bergerak dari 10 Rs menuju 1,02 Rs dan saksikan faktor dilatasi waktu mendekati nol.',
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
