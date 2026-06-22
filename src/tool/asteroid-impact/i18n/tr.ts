const description = 'Gerçek fizik kurallarıyla asteroid çarpmalarını simüle edin. Enerji, krater, termal radyasyon ve şok dalgasını hesaplayın. Chicxulub\'dan sağ çıkar mıydınız?';
const slug = 'asteroid-carpma-simulatoru';
const title = 'Asteroid Çarpma Simülatörü: Kıyamet Hesaplayıcı';
const howTo = [
    {
      name: 'Mermi boyutunu seçin',
      text: '10 metrelik küçük bir meteoritten 10 kilometrelik bir gezegen yok ediciye kadar asteroid çapını girin.',
    },
    {
      name: 'Hız ve açıyı ayarlayın',
      text: 'Yaklaşma hızını ve giriş açısını ayarlayın (istatistiksel olarak en olası değer 45°\'dir).',
    },
    {
      name: 'Asteroidin doğasını tanımlayın',
      text: 'Krater derinliğini doğru hesaplamak için asteroidin kaya mı, demir mi yoksa buz mu olduğunu seçin.',
    },
    {
      name: 'Hayatta kalma kararını analiz edin',
      text: 'Asteroidi haritaya sürükleyin ve radyasyon, deprem ve şok dalgasının etkilerini görmek için ne kadar uzakta olduğunuzu belirtin.',
    },
  ];
const faq = [
    {
      question: 'Çarpma enerjisi nasıl hesaplanır?',
      answer: 'Birincil enerji kinetiktir: (1/2) * kütle * hız². Kayalık asteroidler için 3000 kg/m³ gibi gerçekçi yoğunluklar ve tipik atmosfere giriş hızları (11-72 km/s) kullanıyoruz. Sonuç enerjisi megaton TNT cinsinden ölçülür.',
    },
    {
      question: 'Termal şok dalgası nedir?',
      answer: 'Atmosfere girdiğinde asteroid, havayı o kadar şiddetle sıkıştırır ki Güneş\'ten bin kat daha parlak bir ateş topu oluşturur. Ortaya çıkan termal radyasyon üçüncü derece yanıklara neden olabilir ve çarpma noktasından millerce uzaktaki ormanları alevler içinde bırakabilir.',
    },
    {
      question: 'Bazı asteroidler neden krater oluşturmaz?',
      answer: 'Daha küçük kayalar (<50m), Chelyabinsk\'te olduğu gibi genellikle hava basıncı nedeniyle atmosferde parçalanır ve patlar (Hava Patlaması). Enerji güçlü bir basınç şok dalgası olarak açığa çıkar, ancak yere katı bir kütle olarak çarpmaz.',
    },
    {
      question: 'Bir çarpmanın gerçek olasılığı nedir?',
      answer: 'Küçük çarpmalar (2013 Rusya gibi) her on yılda bir olur. Felaket düzeyindeki çarpmalar (Tunguska tarzı) her birkaç yüzyılda bir. Chicxulub gibi küresel bir yok oluş olayı yaklaşık her 100 milyon yılda bir gerçekleşir.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopyalandı',
    noHistory: 'Geçmiş yok',
    load: 'Yükle',
    delete: 'Sil',
    activateGPS: 'GPS\'i Etkinleştir',
    analysisLabel: 'Analiz',
    dragToMap: 'HARİTAYA SÜRÜKLE',
    diameterLabel: 'Çap',
    velocityLabel: 'Hız',
    typeLabel: 'Tür',
    historicalData: 'Tarihsel Veriler',
    composition: 'Bileşim',
    rock: 'Kaya',
    iron: 'Demir',
    ice: 'Buz',
    clearAll: 'Tümünü temizle',
    searching: 'Aranıyor...',
    gpsActive: 'GPS Aktif',
    gpsError: 'GPS Hatası',
    verdictSafe: 'GÜVENLİ BÖLGE',
    verdictSafeSub: 'Tehdit yok',
    verdictShock: 'ŞOK DALGASI',
    verdictShockSub: 'Yapısal hasar',
    verdictBurned: 'TERMAL RADYASYON',
    verdictBurnedSub: 'Aşırı tehlike',
    verdictVaporized: 'SIFIR NOKTASI',
    verdictVaporizedSub: 'Doğrudan darbe',
    presetAerial: 'Hava Patlaması',
    presetForest: 'Orman',
    presetComet: 'Kuyruklu Yıldız',
    presetELE: 'E.L.E. (Toplu Yok Oluş)',
  },
  seo: [
    {
      type: 'title',
      text: 'Gök Kubbe Çöktüğünde: Kozmik Kıyametin Fiziği',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Asteroidler sadece uzay kayaları değildir. Onlar 20 km/s hızla ilerleyen, gezegendeki tüm nükleer silahların toplamından daha fazla enerji açığa çıkarabilen kozmik mermilerdir. Bu simülatör, soyut fiziği somut insani sonuçlara dönüştürür.',
    },
    {
      type: 'title',
      text: 'Kıyamet Günü Denklemi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Her şey kinetik enerji ile başlar: <strong>E = ½mv²</strong>. 20 km/s hızla ilerleyen 100 metrelik bir asteroid yaklaşık 0,5 megaton TNT açığa çıkarır. Karşılaştırma için; Hiroşima bombası 0,015 megatondu.',
    },
    {
      type: 'paragraph',
      html: 'Ancak boyut katlanarak artar. 10 kat daha büyük bir nesne 1.000 kat daha fazla hacme (ve kütleye) sahiptir ve <strong>500 megaton</strong> TNT\'ye eşdeğer enerji açığa çıkarır. Dinozorları yok eden Chicxulub, <strong>100 milyon megaton</strong> eşdeğeri enerji açığa çıkarmıştı.',
    },
    {
      type: 'paragraph',
      html: 'Dünya\'ya çarpan 1 km çapındaki bir asteroid, gezegendeki tüm nükleer silahların aynı anda patlatılmasından daha fazla enerji açığa çıkaracaktır.',
    },
    {
      type: 'title',
      text: 'Yıkımın Anatomisi: Kıyametin İç İçe Geçen Katmanları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Krater (Sıfır Noktası):</strong> Krater çapı E^0.3 ile orantılıdır. 1 megatonluk bir çarpma ~1 km krater oluşturur. İçerideki her şey anında buharlaşır.',
        '<strong>Termal Radyasyon (Flaş):</strong> Ateş topu yoğun kızılötesi radyasyon yayar. E^0.41 km mesafelerde giysiler tutuşur ve ciltte üçüncü derece yanıklar oluşur.',
        '<strong>Şok Dalgası (Balyoz):</strong> Aşırı basınç dalgası süpersonik hızla ilerler. 1 psi basınçta camlar kırılır. 5 psi basınçta binalar çöker.',
        '<strong>Deprem (Sismik Yankı):</strong> Çarpma küresel sismik dalgalar üretir. Chicxulub, Richter ölçeğini zorlayan 11 büyüklüğünde bir depreme neden olmuştur.',
      ],
    },
    {
      type: 'title',
      text: 'Tarihsel Çarpmalar: Geçmişten Dersler',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Yer ve Yıl', 'Boyut', 'Enerji', 'Etkiler'],
      rows: [
        ['Chelyabinsk, Rusya (2013)', '20 metre', '500 kiloton', '100 km\'de şok dalgası, 1.500 yaralı, kırılan pencereler'],
        ['Tunguska, Sibirya (1908)', '50-60 metre', '10-15 megaton', '2.000 km² orman yerle bir oldu, 80 milyon ağaç devrildi'],
        ['Chicxulub, Meksika Körfezi (66 M yıl önce)', '10 km', '100 milyon megaton', 'Dünya\'daki yaşamın %75\'inin yok olması'],
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


