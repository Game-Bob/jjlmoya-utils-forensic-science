import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'adli-cam-kirilma-indisi-becke-cizgisi-simulatoru';
const title = 'Adli Cam Kırılma İndisi Becke Çizgisi Simülatörü';
const description = 'Bir daldırma sıvısını ısıtarak, kırılma indislerini eşleştirerek ve parlak halonun kayboluşunu izleyerek adli cam karşılaştırması için Becke çizgisi yöntemini simüle edin.';

const howTo = [
  {
    name: 'Şüpheli bir cam profili seçin',
    text: 'Kalsiyum-sodyum, borosilikat, kurşun kristali veya temperli pencere camı gibi yaygın bir cam referans profili seçin.',
  },
  {
    name: 'Isıtma tablası sıcaklığını ayarlayın',
    text: 'Sanal daldırma sıvısının kırılma indisini değiştirmek için sıcaklık kaydırıcısını hareket ettirin.',
  },
  {
    name: 'Becke çizgisi hareketini gözlemleyin',
    text: 'Parlak çizginin içe doğru mu, dışa doğru mu hareket ettiğini veya eşleşme noktasında neredeyse kaybolduğunu görmek için odak yönü kontrolünü kullanın.',
  },
  {
    name: 'İndis farkını okuyun',
    text: 'Halonun indis uyumuna yakın neden sönükleştiğini anlamak için sıvı RI, cam RI, delta RI ve eşleşme yüzdesini karşılaştırın.',
  },
];

const faq = [
  {
    question: 'Adli cam analizinde Becke çizgisi nedir?',
    answer: 'Becke çizgisi, kırılma indisleri farklı olduğunda bir cam parçası ile daldırma sıvısı arasındaki sınırın yakınında görülen parlak bir halodur. Odaklama sırasındaki hareketi, hangi malzemenin daha yüksek kırılma indisine sahip olduğunu belirlemeye yardımcı olur.',
  },
  {
    question: 'Daldırma sıvısını ısıtmak neden önemlidir?',
    answer: 'Birçok daldırma sıvısının kırılma indisi, sıcaklık arttıkça azalır. Sıvı, indisi camınkiyle eşleşene kadar ısıtılarak sınırdaki kontrast kaybolur ve parça kenarını görmek zorlaşır.',
  },
  {
    question: 'Kırılma indisi tek başına bir cam kaynağını tanımlayabilir mi?',
    answer: 'Hayır. RI, sınıf karşılaştırmasını ve elemeyi destekleyebilir, ancak adli kaynak yorumlaması aynı zamanda elementel bileşimi, kalınlığı, rengi, kırılma bağlamını, kontrolleri, belirsizliği ve doğrulanmış laboratuvar prosedürlerini de dikkate alır.',
  },
  {
    question: 'Becke çizgisinin kaybolması ne anlama gelir?',
    answer: 'Bu, sıvının ve camın bu simüle edilmiş koşullar altında çok benzer kırılma indislerine sahip olduğu anlamına gelir. Gerçek mikroskopide kaybolma, kalibre edilmiş sıcaklık kontrolü ve referans malzemelerle değerlendirilir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Daldırma sıvısı içindeki bir cam parçasını gösteren sanal mikroskop görünümü',
    units: 'Sıcaklık birim sistemi',
    metric: 'Metrik',
    imperial: 'İmparatorluk',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Cam referansı',
    sodaLime: 'Kalsiyum-sodyum ambalaj camı',
    borosilicate: 'Borosilikat laboratuvar camı',
    leadCrystal: 'Dekoratif kurşun kristal cam',
    tempered: 'Temperli pencere camı',
    stageTemperature: 'Tabla sıcaklığı',
    focusDirection: 'Odak yönü',
    focusRaised: 'Odağı kaldır',
    focusLowered: 'Odağı düşür',
    liquidRi: 'Sıvı RI',
    glassRi: 'Cam RI',
    deltaRi: 'Delta RI',
    matchMeter: 'RI Eşleşmesi',
    canvasHalo: 'görünür Becke halosu',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'kenar neredeyse eşleşti',
    interpMatched: 'Sınır, optik eşleşmeye yakın. Gerçek bir Becke çizgisi testinde, bu bölge halonun sönükleştiği ve parça kenarının yerini belirlemenin en zor olduğu yerdir.',
    interpGlassHigher: 'Cam daha yüksek kırılma indisine sahiptir. Yükseltilmiş odakla, Becke çizgisi davranışı ışığın sınırın cam tarafına doğru yoğunlaştığını gösterir.',
    interpLiquidHigher: 'Daldırma sıvısı daha yüksek kırılma indisine sahiptir. Sıcaklık, sıvı indisini cama yaklaştırana kadar halo sıvı tarafına kayar.',
    disclaimer: 'Yalnızca eğitim amaçlı simülasyon. Gerçek adli cam karşılaştırması, kalibre edilmiş kırılma indisi ekipmanı, bilinen standartlar, belirsizlik raporlaması ve nitelikli yorum gerektirir.',
  },
  seo: [
    {
      type: 'title',
      text: 'Adli Cam için Becke Çizgisi Kırılma İndisi Testi',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Öğretim simülatörü',
      title: 'Bu cam RI simülatörü neyi gösteriyor?',
      html: 'Bu simülatör, sıvı kırılma indisi cam kırılma indisine yaklaştıkça daldırma yağındaki bir cam parçasının neden daha fazla veya daha az görünür olduğunu gösterir. <strong>Becke çizgisi mikroskopisi</strong>, sıcak tabla RI eşleştirmesi ve cam karşılaştırma kanıtlarının sınırlarını öğrenen adli bilim öğrencileri için yapılmıştır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n cam - n sıvı', label: 'gösterilen indis kontrastı', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'ısıtma tablası aralığı', icon: 'mdi:thermometer' },
        { value: '4', label: 'cam profilleri', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'dönüştürülebilir sıcaklık birimleri', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Pratik Becke çizgisi gözlem kontrol listesi',
      items: [
        'Uygun bir kırılma indisi sıvısına tamamen batırılmış temiz, küçük bir cam parçası kullanın.',
        'Sınırın biraz üzerine ve altına odaklanın ve parlak çizginin hangi tarafa doğru hareket ettiğini izleyin.',
        'Tahmini eşleşme noktasına yakın sıcaklığı yavaşça artırın çünkü çizgi dar bir aralıkta solabilir.',
        'Sıcaklığı, sıvı türünü, kalibrasyon standardını, gözlemlenen eşleşme davranışını ve belirsizliği kaydedin.',
        'RI\'yi sınıf kanıtı olarak ele alın: bir uyumsuzluk eleyebilir, oysa bir eşleşme ek bağlam gerektirir.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'RI karşılaştırmasının destekleyebilecekleri',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Kırılma indisi, şüpheli cam parçalarının kontrollü koşullar altında bilinen referen camlarla karşılaştırılmasına yardımcı olabilir.',
          points: ['Sınıf özelliği karşılaştırması', 'RI net bir şekilde farklı olduğunda eleme', 'Elementel analizden önce tarama', 'Optik sınır davranışını öğretme'],
        },
        {
          title: 'RI\'nin tek başına kanıtlayamayacakları',
          icon: 'mdi:alert-circle-outline',
          description: 'Eşleşen bir RI; bir camı, şişeyi, araç camını veya olay yeri kaynağını benzersiz şekilde tanımlamaz.',
          points: ['Tek başına bireysel kaynak atfı yapılamaz', 'Olay yeri bağlamı olmadan yeniden yapılandırma yapılamaz', 'Kontrollerin yerine geçmez', 'Bir tarayıcı modelinden yasal bir sonuç çıkarılamaz'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Kullanıcı sorusu', 'Mikroskopi kavramı', 'Detaylı yanıt'],
      rows: [
        ['Parlak kenar neden hareket ediyor?', 'İki kırılma indisi arasındaki sınırda kırılma.', 'Becke çizgisi, odak yükseltildiğinde daha yüksek kırılma indisine sahip malzemeye doğru hareket etme eğilimindedir.'] ,
        ['Kenar neden kayboluyor?', 'İndis eşleşmesi.', 'Cam ve sıvı RI neredeyse eşit olduğunda, sınır kontrastı düşer ve halo zayıflar.'],
        ['Sıvıyı neden ısıtıyoruz?', 'Termal RI katsayısı.', 'Simüle edilen sıvı RI sıcaklıkla azalır ve farklı cam türleriyle eşleşmeye olanak tanır.'] ,
        ['Bir eşleşme kesin midir?', 'Sınıf kanıtı sınırlaması.', 'Bir eşleşme yalnızca tutarlılığı destekler; birçok cam nesne benzer bir RI paylaşabilir.'],
      ],
    },
    {
      type: 'title',
      text: 'Simülasyon Modelinin Çalışma Prensibi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model, her bir cam profiline bir referans kırılma indisi atar ve daldırma sıvısını sıcaklığa duyarlı bir ortam olarak ele alır. Sıcak tabla ısındıkça, sıvı indisi sabit bir termal katsayı oranında azalır. Simülatör daha sonra cam RI ve sıvı RI arasındaki farkı hesaplar ve bu farkı halo parlaklığını, halo kaymasını, eşleşme yüzdesini ve yorum mesajını kontrol etmek için kullanır.',
    },
    {
      type: 'paragraph',
      html: 'Görsel mikroskop alanı kasıtlı olarak nitelikseldir. Her optik yolu ışın izleme yöntemiyle hesaplamaya çalışmaz. Bunun yerine, temel eğitim ilişkisini korur: güçlü RI kontrastı parlak bir sınır üretir; daha düşük kontrast sönük bir sınır üretir; ve eşleşme noktasına yakın yerlerde cam kenarı sıvıda kayboluyor gibi görünebilir.',
    },
    {
      type: 'paragraph',
      html: 'Profesyonel adli laboratuvarlarda, ısıtma tablası kalibrasyonu, kırılma indisi bilinen referans cam numuneleri kullanılarak gerçekleştirilir. Daldırma sıvısının kırılma indisi sıcaklıkla öngörülebilir bir şekilde değiştiğinden (genellikle dn/dT olarak gösterilir), Becke çizgisinin kaybolduğu kesin sıcaklık, bilim insanının cam kırılma indisini virgülden sonra dört basamağa kadar hesaplamasını sağlar. Bu simülatör, bu sıcaklığa bağlı davranışı doğrusal bir formül kullanarak modeller ve öğrencilerin ısıtma tablasını dikkatli bir şekilde kontrol ederek kesin eşleşme noktasını bulma pratiği yapmalarına olanak tanır.',
    },
    {
      type: 'paragraph',
      html: 'Cam kanıtları analiz edilirken kırılma indisi, sınıf özelliği kanıtı olarak kabul edilir. Bir olay yeri parçası ile bir şüphelinin kıyafetleri arasında eşleşen bir kırılma indisi ortak bir kaynakla tutarlı olsa da, birçok cam nesne aynı kırılma indisi değerlerini paylaştığından kaynağı benzersiz bir şekilde tanımlamaz. Bu nedenle adli tıp uzmanları, eşleşen sonuçları ihtiyatlı bir şekilde yorumlamalı, eşleşmeyi tutarlılık açısından bildirirken, yalnızca optik özelliklere dayanarak kesin bir kaynak atfının mümkün olmadığını vurgulamalıdır.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kırılma indisi', definition: 'Bir malzemenin ışığı vakuma göre ne kadar güçlü büktüğünün ölçüsü.' },
        { term: 'Daldırma sıvısı', definition: 'Mikroskobik RI karşılaştırması sırasında bir parçayı çevrelemek için kullanılan, bilinen optik özelliklere sahip bir sıvı.' },
        { term: 'Becke çizgisi', definition: 'İki şeffaf malzemenin kırılma indisleri farklı olduğunda sınırda görülen parlak çizgi veya halo.' },
        { term: 'Eşleşme noktası', definition: 'Daldırma sıvısı ve camın neredeyse aynı kırılma indisine sahip olduğu sıcaklık bölgesi.' },
        { term: 'Sınıf kanıtı', definition: 'Bir öğeyi tek bir benzersiz kaynak yerine olası kaynaklardan oluşan bir grupla ilişkilendirebilen kanıt.' },
      ],
    },
    {
      type: 'tip',
      title: 'Öğrenciler için yorumlama ipucu',
      html: 'Cam kanıtlarında, net bir RI uyumsuzluğu genellikle bir eşleşmeden daha güçlüdür çünkü önerilen bir kaynağı eleyebilir. Bir eşleşme yararlıdır, ancak gücü popülasyon verilerine, ölçüm hassasiyetine, elementel bileşime ve vaka bağlamına bağlıdır.',
    },
    {
      type: 'proscons',
      title: 'Becke çizgisi cam RI testinin güçlü yönleri ve sınırları',
      items: [
        { pro: 'Hızlı, görsel ve şeffaf malzeme karşılaştırmasını öğretmek için mükemmel.', con: 'Gözlemcinin kararı ve odaklama tekniği, çizginin belirgin hareketini etkileyebilir.' },
        { pro: 'Sıcaklık eşleştirmesi, kalibre edildiğinde RI\'yi yararlı bir hassasiyetle tahmin edebilir.', con: 'Gerçek çalışmada termal kontrol, sıvı yaşlanması, kirlenme ve standartlar önemlidir.' },
        { pro: 'Açıkça farklı optik özelliklere sahip cam parçalarını elemek için kullanışlıdır.', con: 'Daha geniş analitik ve bağlamsal kanıtlar olmadan bir kaynağı bireyselleştiremez.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Adli temkin',
      title: 'Sonucu ölçülü tutun',
      html: 'Tarayıcı tabanlı Becke çizgisi simülasyonu bir öğrenme aracıdır, bir laboratuvar yöntemi değildir. Resmi cam kanıtı yorumu doğrulanmış araçlara, yazılı prosedürlere, kalibrasyon kayıtlarına, belirsizlik tahminlerine, akran değerlendirmesine ve yargı yetkisine uygun raporlama diline dayanmalıdır.',
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
