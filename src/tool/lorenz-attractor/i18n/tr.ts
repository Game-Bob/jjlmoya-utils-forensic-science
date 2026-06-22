const slug = 'lorenz-atractor';
const title = 'Lorenz Çekeri Kaos Simülatörü: 3D Kelebek Etkisi';
const description = 'Bu etkilesimli 3D Lorenz cekeri simulasyonu ile kaos teorisini kesfedin. Kelebek etkisini gorsellestirin.';

const howTo = [
  {
    "name": "Gorunumu dondurun",
    "text": "Cekeri dondurmek icin 3D ekran uzerinde tiklayip surukleyin."
  },
  {
    "name": "Surguleri ayarlayin",
    "text": "Kaos davranisini gozlemlemek icin Sigma, Rho ve Beta parametrelerini degistirin."
  },
  {
    "name": "Sapmayi izleyin",
    "text": "Iki yorunge arasindaki mesafenin ustel olarak buyumesini izleyin."
  },
  {
    "name": "Duraklat ve sifirla",
    "text": "Simulasyonu duraklatmak veya varsayilanlara sifirlamak icin kontrolleri kullanin."
  }
];

const faq = [
  {
    "question": "Lorenz Çekeri nedir?",
    "answer": "Lorenz cekeri, Lorenz denklem sisteminin kaotik cozumler kumesidir."
  },
  {
    "question": "Kelebek Etkisi nedir?",
    "answer": "Dogrusal olmayan bir sistemde baslangic kosullarina hassas baglilik durumudur."
  },
  {
    "question": "Parametreler neyi temsil eder?",
    "answer": "Sigma Prandtl sayisini, Rho Rayleigh sayisini, Beta ise geometrik en-boy oranini temsil eder."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Kopyalandi",
  "noHistory": "Gecmis yok",
  "load": "Yukle",
  "delete": "Sil",
  "title": "Lorenz Çekeri",
  "subTitle": "Belirlenimci Kaos",
  "parameterControls": "Sistem Parametreleri",
  "simulationSpeed": "Simulasyon Hizi (dt)",
  "initialPerturbation": "Baslangic Sapmasi (dx)",
  "trajectories": "Yorungeler",
  "distance": "Sapma Mesafesi",
  "exponentialGrowth": "Ustel Sapma",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Koordinatlar",
  "divergenceExplanation": "Sapma grafigi, iki yorunge arasindaki Oklid mesafesinin zaman icindeki degisimini gosterir."
},
  seo: [
    { type: 'title', text: "Belirlenimci Kaos: Lorenz Denklemlerini Anlamak", level: 2 },
    { type: 'paragraph', html: "Lorenz sistemi, dogrusal olmayan dinamik ve kaos teorisinde tarihi bir formulasyondur. 1963 yilinda meteorolog ve matematikci <strong>Edward Lorenz</strong> tarafindan turetilen model, atmosferik konveksiyonun basitlestirilmis bir temsilinden dogdu. Lorenz, karmasik akiskan dinamigi denklemlerini uc birlesik adi diferansiyel denklemle ozetledi. Bu basit ve deterministik denklemlerin karmasik, periyodik olmayan ve kaotik davranis uretebileceginin kesfi, fiziksel sistemler hakkindaki anlayisimizi degistirdi." },
    { type: 'paragraph', html: "Sistem, uc boyutlu faz uzayinda bir koordinati zaman icinde izleyen uc birlesik diferansiyel denklemle tanimlanir:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> Konvektif hareket hizini aciklar. &sigma; parametresi (Prandtl sayisi) akiskanin viskozitesinin isil iletkenligine oranini temsil eder.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> Yukari ve asagi konveksiyon akimlari arasindaki sicaklik farkini temsil eder. &rho; (Rayleigh sayisi) konvektif isinmanin yogunlugunu temsil eder.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> Dikey sicaklik profilinin dogrusal gradyandan sapmasini izler. &beta;, konvektif fiziksel hucrenin geometrik en-boy oranini temsil eder.",
      ],
    },
    { type: 'title', text: "Kelebek Etkisi: Baslangic Kosullarına Hassas Bagimlilik", level: 3 },
    { type: 'paragraph', html: "Kaotik sistemlerin belirleyici ozelligi, <strong>baslangic kosullarina hassas bagimliliklari</strong>dir; bu durum populer olarak <strong>Kelebek Etkisi</strong> olarak bilinir. Bu simulator, baslangic perturbasyonunu belirleyen kaydirici ile ayarlanan kucuk bir ayrilikla baslayan iki yoru (T1 Cyan, T2 Pembe) calistirarak bunu gostermektedir. Baslangicta neredeyse ayni yolu izlerler. Kisa bir sureyle dogrusal olmayan terimler farki buyutecek ve yollar tamamen birbirinden ayrilacak." },
    {
      type: 'table',
      headers: ["Parametre","Standart Deger","Fiziksel Baglam","Degistirildiginde Davranis"],
      rows: [
        ["&sigma; (Sigma)","10.0","Prandtl Sayisi","Akiskanin ic surtusmesini belirler. Daha yuksek degerler, sicaklik gradyanlarina gore hiz degisikliklerinin tepkisini hizlandirir."],
        ["&rho; (Rho)","28.0","Rayleigh Sayisi","Kaosun ana suruculeri. &rho; = 1'in altinda, orijin tek kararli noktadir. &rho; = 28'de sistem tamamen kaotiktir."],
        ["&beta; (Beta)","8/3 (2.667)","Geometrik En-Boy Orani","Konveksiyon hucrelerinin genislik-yukseklik oranini kontrol eder. Yoarunge olcegini ve donus hizini degistirir."],
      ],
    },
    { type: 'title', text: "Faz Uzayi, Tuhaf Cezbediciler ve Fraktallar", level: 3 },
    { type: 'paragraph', html: "Klasik fizikte yoarungeler sabit noktalarda karara oturur veya sinir cevrimleri olarak kendini tekrar eder. Lorenz sistemi her ikisini de yapmaz: yol, uc boyutlu uzayda kendisiyle hic kesismeden sonsuz bir sekilde dolasir ve Hausdorff boyutu yaklasik 2,06 olan fraktal geometriye sahip bir <strong>tuhaf cezbedici</strong> olusturur." },
    { type: 'title', text: "Kaos Teorisinin Bilimeteki Uygulamalari", level: 3 },
    { type: 'paragraph', html: "Lorenz cezbedicisinden cikartilan dersler, hava tahmininin cok otesine gecer ve pek cok modern calisma alanini etkilemistir:" },
    {
      type: 'list',
      items: [
      "<strong>Meteoroloji:</strong> Hava ongorulebilirliginin temel sinirlarini ortaya koydu ve topluluk tahmin yontemlerine one surucu oldu.",
      "<strong>Kriptografi:</strong> Kaotik yoarungelerin deterministik ancak ongorelemez yapisi, guvenli psodorandom anahtarlar uretmek icin kullanilir.",
      "<strong>Kardiyoloji:</strong> Kalp ritimlerini modellemek icin kullanilir; saglikli kalplar kaotik ozellikler sergilerken, periyodik ritimler patolojiyi gosterebilir.",
      "<strong>Muhendislik:</strong> Asili kopruler ve mekanik sistemlerdeki kaotik rezonans analiz edip onlenerek kararli yapilar tasarlanmasina yardimci olur.",
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
