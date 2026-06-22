import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'yasanabilir-bolge-simulatoru';
const description = 'Yıldız ve gezegen konfigürasyonlarını kullanarak farklı yıldız türlerinin etrafındaki yaşanabilir bölgeleri (Goldilocks bölgesi) hesaplayın ve görselleştirin.';
const title = 'Yıldız Yaşanabilir Bölge Simülatörü: Goldilocks Bölgelerini Bulun';

const howTo = [
  {
    name: 'Bir Yıldız Ön Ayarı Seçin',
    text: 'Mavi devlerden kırmızı cücelere kadar standart kütle, parlaklık ve sıcaklık gibi fiziksel özellikleri yüklemek için bir yıldız türü seçin.',
  },
  {
    name: 'Gezegen Parametrelerini Ayarlayın',
    text: 'Gezegenin yörünge uzaklığını (yarı büyük eksen), albedo değerini ve atmosferik sera ısınma etkisini etkileşimli sürgülerle değiştirin.',
  },
  {
    name: 'Yörüngeyi ve Yaşanabilirliği Analiz Edin',
    text: 'Gezegenin yıldız etrafındaki yörüngesini gerçek zamanlı gözlemleyin. Denge ve yüzey sıcaklıklarının sıvı suyu destekleyip desteklemediğini kontrol edin.',
  },
];

const faq = [
  {
    question: 'Yıldız çevresi yaşanabilir bölge nedir?',
    answer: 'Yıldız çevresi yaşanabilir bölge (genellikle Goldilocks bölgesi olarak adlandırılır), belirli bir atmosfer basıncı altında bir gezegenin yüzey sıcaklığının sıvı suyu korumaya yettiği yıldız etrafındaki bölgedir. Yıldızın parlaklığı ve etkin sıcaklığına bağlı olarak muhafazakar ve iyimser sınırlarla tanımlanır.',
  },
  {
    question: 'Yıldız parlaklığı yaşanabilir bölgeyi nasıl etkiler?',
    answer: 'Yıldız parlaklığı, yıldızın toplam enerji çıkışını belirler. Daha sıcak ve daha büyük kütleli yıldızlar (O, B veya A tipi yıldızlar gibi) son derece parlaktır ve yaşanabilir bölgelerini çok daha uzağa yerleştirir. Daha soğuk, daha az kütleli yıldızlar (K veya M tipi kırmızı cüceler gibi) düşük parlaklığa sahiptir ve yaşanabilir bölgelerini yıldıza son derece yakınlaştırır.',
  },
  {
    question: 'Denge sıcaklığı ile yüzey sıcaklığı arasındaki fark nedir?',
    answer: 'Denge sıcaklığı, bir gezegenin yıldız radyasyonunu emen ve uzaya geri yayan küresel bir kara cisim gibi davrandığı varsayımıyla sahip olacağı teorik sıcaklıktır. Yüzey sıcaklığı ise ısıyı hapseden ve gezegeni daha fazla ısıtan atmosferik sera etkisini içerir.',
  },
  {
    question: 'Albedo değeri gezegen yaşanabilirliği için neden önemlidir?',
    answer: 'Albedo, gezegenin yüzeyinin yansıtıcılık ölçüsüdür. Daha yüksek bir albedo (1.0\'a yakın), gezegenin gelen yıldız ışığını daha fazla yansıttığı anlamına gelir ve onu soğutur. Daha düşük bir albedo, daha fazla radyasyonun emildiği ve genel sıcaklığın yükseldiği anlamına gelir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Yıldız Yaşanabilir Bölge Simülatörü',
    starPresetsLabel: 'Spektral Ön Ayarlar',
    customStarHeader: 'Yıldız Parametreleri',
    starTemperature: 'Etkin Sıcaklık (K)',
    starLuminosity: 'Parlaklık (L/L⊙)',
    starMass: 'Kütle (M/M⊙)',
    starRadius: 'Yarıçap (R/R⊙)',
    planetHeader: 'Gezegen Parametreleri',
    planetDistance: 'Yörünge Uzaklığı (AB)',
    planetAlbedo: 'Bond Albedosu',
    greenhouseDelta: 'Sera Isınması (K)',
    resultsHeader: 'Simülasyon Sonuçları',
    stellarFluxResult: 'Alınan Yıldız Akısı',
    eqTempResult: 'Denge Sıcaklığı',
    surfTempResult: 'Tahmini Yüzey Sıcaklığı',
    orbitPeriodResult: 'Yörünge Süresi',
    orbitVelocityResult: 'Yörünge Hızı',
    hzLimitsHeader: 'Yaşanabilir Bölge Sınırları',
    innerLimit: 'Muhafazakar İç Sınır',
    outerLimit: 'Muhafazakar Dış Sınır',
    optInnerLimit: 'İyimser İç Sınır',
    optOuterLimit: 'İyimser Dış Sınır',
    orbitCanvasTitle: 'Etkileşimli Yörünge Görselleştirici',
    statusLabel: 'Yaşanabilirlik Durumu',
    statusTooHot: 'ÇOK SICAK (Su buharlaşır)',
    statusHabitable: 'YAŞANABİLİR (Sıvı su mümkün)',
    statusTooCold: 'ÇOK SOĞUK (Su donar)',
    statusExplanation: 'Muhafazakar sınırlara dayanarak, bu gezegen belirtilen yaşanabilir bölge durumunun içinde yer almaktadır.',
    unitsLabel: 'Birim Sistemi',
    unitsScientific: 'Bilimsel',
    unitsImperial: 'İngiliz (Imperial)',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBİYOLOJİ: Yıldız Yaşanabilir Bölgelerinin Fiziği',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dünya dışındaki yaşam arayışı, sıvı su için gerekli fiziksel koşulların anlaşılmasıyla başlar. Astrobiyologlar, farklı yıldız türlerinin etrafındaki yaşanabilir bölgelerin sınırlarını haritalamak için matematiksel modeller kullanırlar. Bu simülatör, gezegenlerin aldığı enerji akısını tahmin etmek ve Goldilocks bölgesinde olup olmadıklarını belirlemek için Kopparapu ve ark. (2013) modellerini kullanır. Yaşanabilir bölge, CO2-H2O-N2 atmosferine sahip karasal kütleli bir gezegenin yüzeyinde sıvı suyu koruyabildiği bölge olarak tanımlanır.',
    },
    {
      type: 'title',
      text: 'Matematiksel Formüller ve Atmosfer Fiziği',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yaşanabilir bölgenin sınırları, kontrolsüz veya maksimum sera koşullarını tetiklemek için gereken etkin yıldız akısı (Seff) hesaplanarak belirlenir. Seff denklemi yıldızın etkin sıcaklığına (Teff) bağlıdır:<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>burada T* = Teff - 5780 K\'dir ve katsayılar (a, b, c, d) 1D radyatif-konvektif iklim modellerinden deneysel olarak türetilmiştir. Seff hesaplandıktan sonra, astronomik birim (AB) cinsinden yörünge mesafesi d şu şekilde verilir:<br><br>d = sqrt(L / Seff)<br><br>burada L, yıldızın Güneş\'e göre parlaklığıdır. Gezegenin denge sıcaklığı (Teq), ısıl dengede küresel bir kara cisim olduğu varsayılarak hesaplanır:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>burada R* yıldız yarıçapı, A gezegenin Bond albedosu ve S ise Dünya\'nın güneş sabiti birimleri cinsinden alınan yıldız akısıdır.',
    },
    {
      type: 'title',
      text: 'Spektral Sınıflandırma ve Yaşanabilir Sınırlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yıldız özellikleri, spektral tipler arasında büyük ölçüde değişir. İşte tipik özelliklerin ve yaşanabilir bölge (YB) sınırlarının bir özeti:',
    },
    {
      type: 'table',
      headers: [
        'Spektral Sınıf',
        'Sıcaklık (K)',
        'Parlaklık (L/L⊙)',
        'YB İç Sınırı (AB)',
        'YB Dış Sınırı (AB)',
      ],
      rows: [
        ['O-Tipi Dev', '40.000', '100.000', '300.0', '530.0'],
        ['B-Tipi Dev', '20.000', '1.000', '30.1', '53.2'],
        ['A-Tipi Sirius', '8.500', '20.0', '4.2', '7.4'],
        ['F-Tipi Procyon', '6.500', '2.5', '1.5', '2.6'],
        ['G-Tipi Güneş', '5.778', '1.0', '0.95', '1.67'],
        ['K-Tipi Cüce', '4.500', '0.15', '0.37', '0.65'],
        ['M-Tipi Cüce', '3.200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Spektral Sınıfların Yaşanabilirliğe Etkisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Her spektral sınıf, gezegenleri için benzersiz bir radyasyon ve kütleçekim ortamı yaratır:<br><br><strong>O ve B Tipi Yıldızlar:</strong> Bu devasa mavi yıldızlar yoğun ultraviyole (UV) radyasyon yayarlar ve son derece kısa ömürlüdürler (on milyonlarca yıl). Dış dünyalarında sıvı su bulunabilir, ancak yıldız süpernova patlaması geçirmeden önce yaşamın gelişmesi için yetersiz zamana sahip olacaktır.<br><br><strong>A ve F Tipi Yıldızlar:</strong> Bu yıldızlar Güneş\'ten daha parlak ve sıcaktır. Yaşanabilir bölgeleri geniş ve uzaktadır, bu da gelgit kilitlenmesi etkilerini en aza indirir. Ancak, yüksek düzeyde yakın UV radyasyonu, koruyucu bir ozon tabakası olmadığında organik moleküllere ciddi şekilde zarar verebilir.<br><br><strong>G Tipi Yıldızlar (Güneş benzeri):</strong> Milyarlarca yıl boyunca kararlı bir ışık akısı sağlayan bu yıldızlar, yaşam aramalarının birincil hedefleridir. Radyasyon çıkışları standart biyokimya gereksinimleriyle eşleşir.<br><br><strong>K Tipi Yıldızlar (Turuncu Cüceler):</strong> Birçok astrobiyolog tarafından "süper yaşanabilir" konakçılar olarak kabul edilir. Turuncu cüceler onlarca milyar yıl yaşar, G tipi yıldızlardan daha az zararlı UV yayarlar ve genç M cüceleriyle ilişkili şiddetli parlamalara o kadar eğilimli değillerdir.<br><br><strong>M Tipi Yıldızlar (Kırmızı Cüceler):</strong> Galaksideki en yaygın yıldızlardır. Yaşanabilir bölgeleri son derece yakın olduğu için (tipik olarak < 0.2 AB), gezegenler gelgit kilitlenmesine yatkındır (bir tarafı kalıcı olarak yıldıza bakar). Ek olarak, aktif M cüceleri gezegen atmosferlerini soyabilecek yüksek enerjili yıldız rüzgarları ve parlamalar üretir.',
    },
    {
      type: 'title',
      text: 'Gezegen Yaşanabilir Ortamlarında Kritik Faktörler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir gezegenin fiziksel çevresi, yalnızca ana yıldızına olan uzaklığının ötesinde birden fazla değişken tarafından şekillendirilir:',
    },
    {
      type: 'list',
      items: [
        '<strong>Atmosferik Sera Etkisi:</strong> Doğal sera gazları, yüzey sıcaklığını kara cisim denge seviyesinin üzerine çıkarır. Karasal gezegenler, atmosferik CO2\'yi stabilize etmek ve jeolojik zaman ölçeklerinde sıcaklıkları düzenlemek için karbonat-silikat döngülerine ihtiyaç duyar.',
        '<strong>Gezegen Bond Albedosu:</strong> Bulutlar, buz örtüleri veya sülfat aerosolleri nedeniyle yüksek yansıtıcılık gezegeni soğuturken, düşük yansıtıcılık (koyu topraklar, su kütleleri) daha fazla yıldız enerjisi hapseder.',
        '<strong>Manyetik Alanlar:</strong> Güçlü bir gezegen manyetosferi, atmosferi güneş ve yıldız rüzgarlarından koruyarak termal olmayan atmosferik kaçışı ve su kaybını önler.',
        '<strong>Soğuk Tuzak Dinamikleri:</strong> Üst atmosferdeki soğuk tuzak etkisi, su buharının yıldız UV radyasyonunun onu hidrojen ve oksijene ayrıştıracağı yüksek irtifalara ulaşmasını engeller.',
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
