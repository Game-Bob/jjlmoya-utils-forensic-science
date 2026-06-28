import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "ilmu-forensik",
  title: "Alat Ilmu Forensik",
  description: "Utilitas forensik untuk triase kasus terstruktur, perhitungan transparan, dan pelaporan sadar bukti.",
  seo: [
    {
      type: 'title',
      text: "Alat Ilmu Forensik untuk Analisis Bukti dan Triase Kasus",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Perpustakaan ini menyediakan alat dan perhitungan khusus untuk analis forensik, profesional hukum, peneliti, dan penyelidik. Utilitas ilmu forensik membantu mengevaluasi bukti fisik yang dikumpulkan dari tempat kejadian perkara. Dengan menggunakan model terstruktur untuk lintasan bercak darah, estimasi usia, indeks bias kaca, dan analisis narkoba, tim dapat melakukan triase kasus awal. Setiap utilitas berfokus pada transparansi, menunjukkan asumsi dan membantu pengguna memahami batasan dari setiap formula forensik secara jelas.",
    },
    {
      type: 'paragraph',
      html: "Tinjauan kasus awal memerlukan penilaian bukti apa yang tersedia, apa yang diasumsikan oleh formula ilmiah, dan di mana ketidakpastian tetap ada. Kalkulator ini dirancang untuk mendukung pendidikan dan penyaringan awal. Mereka membantu dalam menentukan langkah analitis mana yang diperlukan sebelum melakukan pengujian laboratorium formal. Menggunakan alat-alat ini membantu mengidentifikasi kesenjangan dalam berkas bukti sejak awal dalam proses penyelidikan.",
    },
    {
      type: 'title',
      text: "Bidang Utama Perhitungan Forensik",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Estimasi usia:</strong> perhitungan skeletal, dental, dan kematangan dengan metrik ketidakpastian yang eksplisit.',
        '<strong>Interpretasi bukti:</strong> estimator terstruktur yang menampilkan formula, interval kepercayaan, dan batasan.',
        '<strong>Triase kasus:</strong> alat cepat yang menyoroti bukti yang hilang dan mengidentifikasi parameter yang diperlukan untuk pemeriksaan formal.',
        '<strong>Dukungan penyusunan laporan:</strong> utilitas yang mendorong pelaporan yang jelas menggunakan rentang nilai daripada presisi palsu.',
      ],
    },
    {
      type: 'title',
      text: "Panduan untuk Penggunaan Perangkat Lunak Forensik secara Bertanggung Jawab",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Setiap perhitungan forensik melibatkan tingkat kesalahan dan batas kepercayaan. Kalkulator tidak boleh menggantikan saksi ahli yang memenuhi syarat atau protokol laboratorium yang divalidasi. Sebaliknya, utilitas web ini paling baik digunakan untuk menjelajahi skenario, menjelaskan konsep kepada non-spesialis, dan memeriksa sensitivitas pengukuran sebelum menulis laporan akhir. Ini membantu mencegah kesalahpahaman di pengadilan mengenai presisi ilmiah.",
    },
    {
      type: 'table',
      headers: ['Penggunaan yang Sesuai', 'Penggunaan yang Tidak Sesuai', 'Pentingnya'],
      rows: [
        ["Menyaring berkas kasus sebelum pemeriksaan ahli formal.", "Menggunakan hasil kalkulator sebagai opini ahli akhir.", "Bukti forensik harus memenuhi standar validasi ilmiah yang ketat."],
        ["Menjelaskan ketidakpastian pengukuran dan rentang nilai kepada penyelidik.", "Melaporkan angka pasti tunggal tanpa menjelaskan batasan.", "Presisi palsu dapat menyebabkan keputusan yang salah dalam sistem peradilan."],
        ["Memeriksa bagaimana asumsi masukan memengaruhi hasil yang diperkirakan.", "Menyembunyikan parameter awal atau perhitungan dari catatan kasus.", "Transparansi memungkinkan hasil untuk diaudit dan direproduksi oleh orang lain."],
        ["Menentukan apakah kualitas data cukup untuk perhitungan.", "Menjalankan formula dengan pengukuran skala yang buruk atau tidak lengkap.", "Parameter masukan yang lemah membuat rekonstruksi matematis apa pun tidak dapat diandalkan."],
      ],
    },
  ],
};
