const slug = 'simulator-dampak-asteroid';
const description = 'Simulasikan dampak asteroid dengan fisika nyata. Hitung energi, kawah, radiasi termal, dan gelombang kejut. Apakah Anda akan selamat dari Chicxulub?';
const title = 'Simulator Dampak Asteroid: Kalkulator Kiamat';
const howTo = [
    {
      name: 'Pilih ukuran proyektil',
      text: 'Masukkan diameter asteroid, dari meteorit kecil berukuran 10 meter hingga pembunuh planet berukuran 10 kilometer.',
    },
    {
      name: 'Konfigurasikan kecepatan dan sudut',
      text: 'Sesuaikan kecepatan pendekatan dan sudut masuk (45° adalah nilai yang paling mungkin secara statistik).',
    },
    {
      name: 'Tentukan sifat asteroid',
      text: 'Pilih apakah asteroid terbuat dari batu, besi, atau es untuk menghitung kedalaman kawah dengan benar.',
    },
    {
      name: 'Analisis vonis kelangsungan hidup',
      text: 'Seret asteroid ke peta dan tunjukkan seberapa jauh Anda berada untuk melihat efek radiasi, gempa bumi, dan gelombang kejut.',
    },
  ];
const faq = [
    {
      question: 'Bagaimana energi dampak dihitung?',
      answer: 'Energi utama adalah kinetik: (1/2) * massa * kecepatan². Kami menggunakan densitas yang realistis (misalnya 3000 kg/m³ untuk asteroid berbatu) dan kecepatan masuk atmosfer yang khas (11 hingga 72 km/detik). Energi yang dihasilkan diukur dalam Megaton TNT.',
    },
    {
      question: 'Apa itu gelombang kejut termal?',
      answer: 'Saat memasuki atmosfer, asteroid menekan udara dengan sangat kuat sehingga menciptakan bola api yang ribuan kali lebih terang dari Matahari. Radiasi termal yang dihasilkan dapat menyebabkan luka bakar tingkat tiga dan membakar hutan bermil-mil dari titik dampak.',
    },
    {
      question: 'Mengapa beberapa asteroid tidak menciptakan kawah?',
      answer: 'Batuan yang lebih kecil (<50m) biasanya hancur dan meledak di atmosfer karena tekanan udara (Airburst), seperti yang terjadi di Chelyabinsk. Energinya dilepaskan sebagai gelombang tekanan yang kuat, tetapi tidak menghantam tanah sebagai benda padat.',
    },
    {
      question: 'Berapa probabilitas nyata dari sebuah dampak?',
      answer: 'Dampak kecil (seperti Rusia pada 2013) terjadi setiap dekade. Dampak bencana (gaya Tunguska) terjadi setiap beberapa abad. Peristiwa kepunahan global seperti Chicxulub terjadi sekitar setiap 100 juta tahun.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Disalin',
    noHistory: 'Tidak ada riwayat',
    load: 'Muat',
    delete: 'Hapus',
    activateGPS: 'Aktifkan GPS',
    analysisLabel: 'Analisis',
    dragToMap: 'SERET KE PETA',
    diameterLabel: 'Diameter',
    velocityLabel: 'Kecepatan',
    typeLabel: 'Jenis',
    historicalData: 'Data Historis',
    composition: 'Komposisi',
    rock: 'Batu',
    iron: 'Besi',
    ice: 'Es',
    clearAll: 'Hapus semua',
    searching: 'Mencari...',
    gpsActive: 'GPS Aktif',
    gpsError: 'Kesalahan GPS',
    verdictSafe: 'ZONA AMAN',
    verdictSafeSub: 'Tidak ada ancaman',
    verdictShock: 'GELOMBANG KEJUT',
    verdictShockSub: 'Kerusakan struktural',
    verdictBurned: 'RADIASI TERMAL',
    verdictBurnedSub: 'Bahaya ekstrem',
    verdictVaporized: 'TITIK NOL',
    verdictVaporizedSub: 'Dampak langsung',
    presetAerial: 'Udara',
    presetForest: 'Hutan',
    presetComet: 'Komet',
    presetELE: 'E.L.E.',
  },
  seo: [
    {
      type: 'title',
      text: 'Ketika Langit Runtuh: Fisika dari Kiamat Kosmik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Asteroid bukan sekadar batu ruang angkasa. Mereka adalah peluru kosmik yang melaju dengan kecepatan 20 km/detik, mampu melepaskan lebih banyak energi daripada seluruh senjata nuklir di planet ini jika digabungkan. Simulator ini menerjemahkan fisika abstrak menjadi konsekuensi manusia yang nyata.',
    },
    {
      type: 'title',
      text: 'Persamaan Hari Kiamat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Semuanya dimulai dengan energi kinetik: <strong>E = ½mv²</strong>. Sebuah asteroid berukuran 100 meter yang melaju dengan kecepatan 20 km/detik melepaskan sekitar 0,5 megaton TNT. Sebagai perbandingan, bom Hiroshima adalah 0,015 megaton.',
    },
    {
      type: 'paragraph',
      html: 'Namun ukurannya meningkat secara eksponensial. Sebuah objek yang 10 kali lebih besar memiliki volume (dan massa) 1.000 kali lebih besar, melepaskan energi yang setara dengan <strong>500 megaton</strong>. Chicxulub, pembunuh dinosaurus, melepaskan energi yang setara dengan <strong>100 juta megaton</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Asteroid berukuran 1 km yang menghantam Bumi akan melepaskan lebih banyak energi daripada seluruh senjata nuklir di planet ini yang diledakkan secara bersamaan.',
    },
    {
      type: 'title',
      text: 'Anatomi Kehancuran: Lapisan Konsentris Kiamat',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kawah (Titik Nol):</strong> Diameter kawah berskala dengan E^0.3. Dampak 1 megaton menciptakan kawah ~1 km. Segala sesuatu di dalamnya akan menguap seketika.',
        '<strong>Radiasi Termal (Kilatan):</strong> Bola api memancarkan radiasi inframerah yang intens. Pada jarak E^0.41 km, pakaian akan terbakar dan kulit mengalami luka bakar tingkat tiga.',
        '<strong>Gelombang Kejut (Palu):</strong> Gelombang tekanan berlebih merambat dengan kecepatan supersonik. Pada 1 psi, kaca pecah. Pada 5 psi, bangunan runtuh.',
        '<strong>Gempa Bumi (Gema Seismik):</strong> Dampak tersebut menghasilkan gelombang seismik global. Chicxulub menyebabkan gempa berkekuatan 11 magnitudo, melampaui skala Richter.',
      ],
    },
    {
      type: 'title',
      text: 'Dampak Historis: Pelajaran dari Masa Lalu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Lokasi & Tahun', 'Ukuran', 'Energi', 'Efek'],
      rows: [
        ['Chelyabinsk, Rusia (2013)', '20 meter', '500 kiloton', 'Gelombang kejut pada 100 km, 1.500 orang terluka, jendela pecah'],
        ['Tunguska, Siberia (1908)', '50-60 meter', '10-15 megaton', 'Meratakan 2.000 km² hutan, 80 juta pohon tumbang'],
        ['Chicxulub, Teluk Meksiko (66 juta tahun)', '10 km', '100 juta megaton', 'Kepunahan 75% kehidupan di Bumi'],
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


