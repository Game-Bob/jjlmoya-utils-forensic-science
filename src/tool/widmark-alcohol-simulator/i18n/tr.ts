import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-kan-alkolu-hesaplayici';
const title = 'Widmark Kan Alkolü Simülatörü';
const description = 'Widmark formülünü kullanarak insan vücudundaki alkol emilimini, dağılımını ve eliminasyonunu simüle edin.';

const howTo = [
  {
    name: 'Kişi profilini ayarlayın',
    text: 'Widmark faktörünü (r) belirlemek için kilo, biyolojik cinsiyet ve dehidrasyon durumunu girin.',
  },
  {
    name: 'Mide durumunu seçin',
    text: 'Emilim oranını değiştirmek için boş mide, hafif yemek veya ağır yemek seçeneğini seçin.',
  },
  {
    name: 'İçecek ekleyin',
    text: 'Eklenen içecek hacmini, alkol oranını ve saati girin.',
  },
  {
    name: 'Grafiği inceleyin',
    text: 'Kan alkol seviyesi ve tahmini ayılma sürelerini kontrol edin.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Widmark formülü nedir?',
    answer: 'Widmark formülü, kandaki alkol konsantrasyonunu tahmin etmeye yarayan matematiksel bir modeldir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profil',
    weight: 'Kilo (kg)',
    sex: 'Biyolojik Cinsiyet',
    male: 'Erkek',
    female: 'Kadın',
    hydration: 'Hidrasyon Seviyesi',
    hydrationLow: 'Düşük',
    hydrationNormal: 'Normal',
    hydrationHigh: 'Yüksek',
    stomachState: 'Mide İçeriği',
    stomachEmpty: 'Boş (Hızlı)',
    stomachLight: 'Hafif Yemek (Orta)',
    stomachFull: 'Ağır Yemek (Yavaş)',
    drinksTimeline: 'Tüketim Zaman Çizelgesi',
    addDrink: 'İçecek Ekle',
    drinkVolume: 'Hacim (ml)',
    drinkAbv: 'Alkol Oranı (% vol)',
    drinkTime: 'Zaman (Saat)',
    drinksList: 'Tüketilen İçecekler',
    remove: 'Kaldır',
    beer: 'Bira (330ml, 5%)',
    wine: 'Şarap (150ml, 12%)',
    spirits: 'Yüksek Alkollü (%40)',
    peakBac: 'Zirve BAC',
    timeToSober: 'Ayılma Süresi',
    sober: 'Ayık',
    currentBac: 'Güncel BAC',
    drivingLimitAlert: 'Sürüş Durumu',
    safeLimit: 'Limit Altında',
    warningLimit: 'Uyarı Limiti Aşıldı',
    dangerLimit: 'Tehlike Limiti Aşıldı',
    graphTitle: '12 Saatlik Kan Alkol Konsantrasyonu',
    timeAxisLabel: 'Zaman (Saat)',
    bacAxisLabel: 'Promil (g/L)',
    legalLimitText: 'Standart Yasal Limit',
    noDrinksText: 'Simülasyon için içecek ekleyin.',
    hours: 'saat',
    soberStatus: '{time} saat içinde ayık',
    neverSober: '12 saati aşıyor',
    noteDisclaimer: 'Yalnızca eğitim amaçlıdır. Alkollüyken araç kullanmayın.',
    noteWidmark: 'Widmark formülü ve doğrusal karaciğer metabolizmasına dayanır.',
  },
  seo: [
    {
      type: 'title',
      text: 'Adli Toksikoloji ve Etanolün Farmakokinetiği',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Etanolün insan vücudundaki emilimi, dağılımı ve eliminasyonu adli toksikolojinin en temel konularından biridir. Alkolün büyük kısmı ince bağırsakta emilir. Midede besin bulunması mide boşalmasını geciktirerek zirve kan alkol seviyesini düşürür.',
    },
    {
      type: 'paragraph',
      html: 'Bu simülatör, şu denklemle çalışır: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Karaciğer metabolizması sıfırıncı derece kinetiğe uyar ve saatte yaklaşık 0.15 g/L oranında doğrusal olarak azalır.',
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
      applicationCategory: 'ForensicApplication',
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
