import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-kan-alkolu-hesaplayici';
const title = 'Widmark Kan Alkolü Simülatörü';
const description = 'Widmark formülünü kullanarak insan vücudundaki alkol emilimini, dağılımını ve eliminasyonunu simüle edin.';

const howTo = [
  {
    name: 'Kişi profilini ayarlayın',
    text: 'Widmark faktörünü (r) belirlemek için kilo, biyolojik cinsiyet ve dehidrasyon durumunu girin. Bu değişkenler etanolün vücuttaki dağılım hacmini belirler.',
  },
  {
    name: 'Mide durumunu seçin',
    text: 'Emilim oranını değiştirmek için boş mide, hafif yemek veya ağır yemek seçeneğini seçin. Bu, gıdaların emilim hız sabiti (ka) üzerindeki yavaşlatıcı etkisini gösterir.',
  },
  {
    name: 'İçecek ekleyin',
    text: 'Tüketilen içecek hacmini (ml), alkol oranını (ABV) ve tüketim saatini simülasyon başlangıcına göre girin.',
  },
  {
    name: 'Grafiği inceleyin',
    text: '12 saatlik kan alkol seviyesi (BAC) grafiğini inceleyin. Zirve seviyesini, zirveye ulaşma süresini ve yasal sınırlara göre tahmini ayılma sürelerini kontrol edin.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Widmark formülü nedir ve adli tıpta nasıl kullanılır?',
    answer: 'Widmark formülü, 1932 yılında Erik M. P. Widmark tarafından geliştirilen matematiksel bir modeldir. Tüketilen alkol miktarı, vücut ağırlığı, cinsiyete bağlı dağılım faktörü (r) ve doğrusal eliminasyon hızına dayanarak kandaki alkol konsantrasyonunu tahmin eder. Adli toksikologlar bu formülü kaza anındaki alkol seviyesini geriye dönük hesaplamak için kullanırlar.',
  },
  {
    key: 'faq-2',
    question: 'Midede besin bulunması kan alkol eğrisini nasıl etkiler?',
    answer: 'Midedeki yiyecekler mide boşalmasını geciktirerek alkolün emilim bölgesi olan ince bağırsağa geçişini yavaşlatır. Simülasyonda bu durum emilim hız sabitinin (ka) düşürülmesiyle modellenir; bu da alkolün zirveye ulaşma süresini öteler ve zirvedeki alkol konsantrasyonunu önemli ölçüde azaltır.',
  },
  {
    key: 'faq-3',
    question: 'Alkolün vücuttan atılımı neden birinci derece yerine sıfırıncı derece kinetiğe uyar?',
    answer: 'Birçok ilaç vücuttan birinci derece kinetikle (konsantrasyonla orantılı olarak) atılır. Alkol ise sıfırıncı derece kinetikle atılır çünkü karaciğerde alkolü yıkan birincil enzim olan alkol dehidrogenaz (ADH), çok düşük alkol seviyelerinde bile (yaklaşık 0.02 g/L) tamamen doygunluğa ulaşır. Bu nedenle karaciğer, kandaki alkol miktarından bağımsız olarak sabit bir hızda alkolü elime eder.',
  },
  {
    key: 'faq-4',
    question: 'Hangi biyolojik faktörler Widmark r faktöründe bireysel farklılıklara yol açar?',
    answer: 'Widmark r faktörü, vücuttaki toplam su miktarının toplam ağırlığa oranını temsil eder. Etanol hidrofilik (suda çözünen) ve lipofobik (yağda çözünmeyen) olduğundan sadece vücut suyunda dağılır. Kas dokusu yüksek oranda su içerirken, yağ dokusunda su miktarı çok azdır. Vücut yağı yüksek veya susuz kalmış bireylerde r faktörü daha küçüktür ve bu da daha yüksek alkol seviyesine yol açar.',
  },
  {
    key: 'faq-5',
    question: 'Bu simülatörün sonuçlarını yasal olarak araç kullanabileceğimin kanıtı olarak sunabilir miyim?',
    answer: 'Kesinlikle hayır. Bu simülatör yalnızca eğitim amaçlı bir araçtır. Gerçek hayatta karaciğer sağlığı, enzim genetiği, ilaç etkileşimleri, yorgunluk ve mide içeriği gibi değişkenler büyük bireysel farklılıklar yaratır. Araç kullanma kararınızı asla matematiksel bir simülasyona dayandırmamalısınız.',
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
      html: 'Etanolün insan vücudundaki <strong>emilimi, dağılımı ve eliminasyonu</strong> adli tıp ve trafik kazası analizlerinin en temel konularından biridir. Tüketilen alkolün küçük bir kısmı mideden emilirken, büyük kısmı geniş yüzey alanı nedeniyle ince bağırsakta kana karışır. Mide boşalma hızı alkol emilimini sınırlayan en önemli faktördür; bu nedenle midede besin bulunması emilim hızını ve kandaki alkol konsantrasyonunun tepe noktasını önemli ölçüde düşürür.',
    },
    {
      type: 'paragraph',
      html: 'Bu simülatör, Erik Widmark\'ın klasik denklemlerini 12 saatlik kesintisiz bir kompartman modeliyle birleştirir. Bireysel fizyolojik parametreler ayarlanarak alkolün zamana bağlı birikimi ve ardından karaciğer tarafından doğrusal olarak temizlenmesi gözlemlenebilir.',
    },
    {
      type: 'title',
      text: 'Widmark Denkleminin Matematiksel Çıkarımı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temel Widmark denklemi, alkolün vücut suyunda anında dağıldığını varsayarak teorik kan alkol seviyesini hesaplar: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Burada <em>A</em> tüketilen saf etanolün gram cinsinden kütlesi, <em>W</em> kg cinsinden vücut ağırlığı ve <em>r</em> Widmark dağılım faktörüdür. <em>&beta;</em> saatlik eliminasyon hızını, <em>t</em> ise emilim başlangıcından itibaren geçen süreyi ifade eder.',
    },
    {
      type: 'paragraph',
      html: 'Sıvı içecek hacminin saf etanol gramına dönüştürülmesi, hacmin (ml) alkol derecesiyle (ABV) ve etanol yoğunluğuyla (yaklaşık 0,8 g/ml) çarpılmasıyla yapılır. Örneğin, %5 alkollü 330 ml bir bira 13,2 gram saf alkol içerir. Bu kütle toplam vücut suyunda seyreltilir. Simülatör, r faktörünü biyolojik cinsiyete (erkeklerde 0,68 ve kadınlarda 0,55) ve hidrasyon durumuna göre dinamik olarak uyarlar.',
    },
    {
      type: 'title',
      text: 'Fizyolojik Değişkenler ve Dağılım Hacmi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Etanolün dağılım hacmi doğrudan vücut bileşimine bağlıdır. Alkol suda çözünür ancak yağda çözünmez. Kas dokusu yaklaşık %75 su içerirken, yağ dokusu neredeyse hiç su barındırmaz. Dolayısıyla kaslı bir bireyin r faktörü daha yüksek olup, aynı kilodaki yağ oranı yüksek bir bireye göre daha düşük alkol zirvesi gösterir. Dehidrasyon da toplam vücut suyunu azaltarak zirve BAC değerini yükseltir.',
    },
    {
      type: 'table',
      headers: ['Fizyolojik Değişken', 'Biyolojik Mekanizma', 'Farmakokinetik Etki', 'Adli Tıp Açısından Önemi'],
      rows: [
        ['Vücut Ağırlığı', 'Vücuttaki toplam su havuzunun hacmini belirler.', 'Zirve BAC seviyesiyle ters orantılıdır.', 'Geriye dönük adli hesaplamalar için temel oluşturur.'],
        ['Biyolojik Cinsiyet', 'Kas ve yağ dokusunun tipik dağılımını belirler.', 'Kadınlarda r faktörü daha düşüktür (0,55), bu da zirveyi artırır.', 'Kadınların alkole karşı biyolojik duyarlılığını açıklar.'],
        ['Hidrasyon Seviyesi', 'Dokulardaki serbest su miktarını değiştirir.', 'Dehidrasyon r faktörünü 0,05 azaltarak eğriyi yükseltir.', 'Ağır efor veya susuzluk durumlarında hesaplamayı ayarlar.'],
        ['Mide Doluluğu', 'Besinler midenin boşalma hızını yavaşlatır.', 'Emilim sabiti ka\'yı düşürerek eğriyi düzleştirir.', 'Yemek sonrası yüksek miktarda alkol alımında düşük değerleri açıklar.'],
      ],
    },
    {
      type: 'title',
      text: 'Eliminasyon Kinetiği: Karaciğerde Sıfırıncı Derece Temizlenme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kana karışan alkolün büyük kısmı karaciğerde alkol dehidrogenaz (ADH) enzimi tarafından parçalanır. Bu enzim çok düşük konsantrasyonlarda (0,02 g/L) bile tamamen doygunluğa ulaştığı için sıfırıncı derece kinetik devreye girer. Yani karaciğer, kandaki alkol miktarından bağımsız olarak zaman birimi başına sabit bir miktar alkolü yok eder. Yasal kabul gören ortalama eliminasyon hızı (&beta;<sub>60</sub>) saatte 0,15 g/L\'dir. Bu doğrusal düşüş grafikteki düz aşağı yönlü eğriyi oluşturur.',
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
