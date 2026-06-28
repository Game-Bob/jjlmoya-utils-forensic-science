import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'yangin-izi-koken-analizoru';
const title = 'Yangın İzi Köken Analizörü';
const description = 'V-desenlerini, derin kömürleşmeyi, is gölgelerini ve temiz yanma göstergelerini bir oda planına işaretleyin, ardından en olası köken alanını tahmin etmek için yangın yayılım vektörlerini yansıtın.';

const howTo = [
  {
    name: 'Olay yeri planını içe aktarın',
    text: 'Kanıt vektörlerini yerleştirmeden önce bir plan görüntüsünü çalışma alanına sürükleyin veya diskten yükleyin.',
  },
  {
    name: 'Dairesel kanıt seçiciyi açmak için tıklayın',
    text: 'İmleci bir yanık işareti üzerine getirin, bağlamsal dairesel menüyü açın ve doğrudan harita üzerinde gösterge türünü seçin.',
  },
  {
    name: 'Vektörleri hassaslaştırmak ve yakınsamayı gözlemlemek için sürükleyin',
    text: 'Her yayılım vektörünü tuval yakalama ile uzatın ve kanıtlar biriktikçe olasılık alanının gerçek zamanlı olarak yeniden hesaplanmasını izleyin.',
  },
  {
    name: 'Teknik anlık görüntüyü dışa aktarın',
    text: 'Daha sonra incelenmek üzere köken koordinatlarını, güven düzeyini, varyansı, katman durumunu ve eksiksiz vektör setini içeren yapılandırılmış bir rapor oluşturun.',
  },
];

const faq = [
  {
    question: 'Yanık desenleri bir yangının tam olarak nerede başladığını kanıtlayabilir mi?',
    answer: 'Hayır. Yangın desenleri köken hipotezlerinin oluşturulmasına ve test edilmesine yardımcı olabilir, ancak havalandırma, söndürme, yakıt yükü, parlama ve yangın sonrası karışıklıklar desenleri bozabilir. Gerçek köken tespiti sistematik bir araştırma gerektirir.',
  },
  {
    question: 'Yangın araştırmasında V-desenleri neden önemlidir?',
    answer: 'V-desenleri genellikle dikey yüzeylerde alevlerin yukarı ve dışa doğru yayılımını yansıtır. Daha düşük bir köken alanına işaret edebilirler, ancak sonuç çıkarmadan önce diğer kanıtlarla karşılaştırılmalıdır.',
  },
  {
    question: 'Derin kömürleşme neyi gösterir?',
    answer: 'Derin kömürleşme, daha uzun ısınmayı, daha yüksek ısı akışını veya yakıt etkilerini gösterebilir. Yararlı bir bağlamdır, ancak malzemeler farklı hızlarda kömürleştiği için otomatik olarak kökeni göstermez.',
  },
  {
    question: 'Neden tek bir ok yerine birden fazla vektör kullanmalı?',
    answer: 'Tek bir desen yanıltıcı olabilir. Birden fazla bağımsız vektör, bir hasarlı duvarın, tek bir yakıt paketinin veya tek bir havalandırma yolunun etkisini azaltır.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Yangın yayılım vektörlerini çizmek için etkileşimli adli çalışma alanı',
    vPattern: 'V-deseni',
    deepChar: 'Derin kömürleşme',
    sootShadow: 'İs gölgesi',
    cleanBurn: 'Temiz yanma',
    loadPlan: 'Plan yükle',
    generateReport: 'Rapor oluştur',
    pointerLabel: 'İmleç',
    resetVectors: 'Sıfırla',
    estimatedOrigin: 'Tahmini köken',
    visibleLayers: 'Görünür kanıt katmanları',
    vectorsLabel: 'VEKTÖRLER',
    confidenceLabel: 'GÜVEN',
    varianceLabel: 'VARYANS',
    modeLabel: 'MOD',
    guideSummary: 'Bu araç nasıl kullanılır',
    flowPanelTitle: 'İş akışı',
    legendPanelTitle: 'Kanıt göstergesi',
    readoutPanelTitle: 'Sonuç paneli',
    flow1Kicker: 'ADIM 1',
    flow1Icon: '1',
    flow1Title: 'Yükle',
    flow1Text: 'Olay yeri planını yükleyin',
    flow2Kicker: 'ADIM 2',
    flow2Icon: '2',
    flow2Title: 'İpucu seç',
    flow2Text: 'Yanık izine tıklayın',
    flow3Kicker: 'ADIM 3',
    flow3Icon: '3',
    flow3Title: 'Vektörü sürükle',
    flow3Text: 'Yangın yönünü hedefle',
    flow4Kicker: 'ADIM 4',
    flow4Icon: '4',
    flow4Title: 'Sonucu oku',
    flow4Text: 'Altbilgiyi kontrol et + dışa aktar',
    basicsTitle: 'İlk yapmanız gerekenler',
    basicsIntro: 'Net bir plan yükleyin, yalnızca gerekçelendirebileceğiniz desenleri işaretleyin ve aynı ipucunu tekrarlamak yerine vektörleri farklı yüzeylere yayın.',
    indicatorsTitle: 'Her kanıt türü ne anlama gelir',
    vPatternShort: 'Duvar yanığı yukarı doğru açılır',
    vPatternExplain: 'V-deseni, bir duvarda sıkça görülen yukarı ve dışa doğru yanık şeklidir. Isı ve alevlerin daha düşük bir alandan yükseldiğini gösterebilir, ancak kesin kökenin otomatik kanıtı değildir.',
    deepCharShort: 'Alan daha sert veya daha uzun süre yanmış',
    deepCharExplain: 'Derin kömürleşme, bir malzemenin bir alanda çevresine göre daha fazla yanmış, kararmış veya tükenmiş görünmesidir. Daha uzun veya daha yoğun ısınmayı gösterebilir, ancak yakıt türü ve malzeme kalınlığı çok önemlidir.',
    sootShadowShort: 'Duman engellendi veya yönlendirildi',
    sootShadowExplain: 'İs gölgesi, bir nesnenin, yüzeyin veya hava akımının isin birikme şeklini değiştirdiğini gösteren korunmuş veya farklı kararmış bir alandır. Neyin mevcut olduğunu veya dumanın nasıl hareket ettiğini yeniden yapılandırmaya yardımcı olabilir.',
    cleanBurnShort: 'Isı veya hava akımı nedeniyle daha az is',
    cleanBurnExplain: 'Temiz yanma, ısı, havalandırma veya doğrudan aleve maruz kalmanın isi farklı şekilde etkilediği için isin daha açık, kaldırılmış veya yok olduğu bir alandır. Yararlıdır, ancak her temiz alan kökeni işaretlemez.',
    resultsTitle: 'Sonuç nasıl okunur',
    resultsIntro: 'Altbilgiyi haritalamanız için hızlı bir sağlık kontrolü olarak kullanın, nihai adli sonuç olarak değil.',
    resultsPoint1: 'Kaç kanıt çizgisi aktif.',
    resultsPoint2: 'Aktif vektörler ne kadar güçlü uyuşuyor.',
    resultsPoint3: 'Köken alanı hâlâ ne kadar geniş.',
    resultsPoint4: 'Araç sıradaki adımda ne yapmanızı bekliyor.',
    awaitingVector: 'Vektör bekleniyor',
    selectIndicator: 'Gösterge seç',
    refiningVector: 'Vektör hassaslaştırılıyor',
    needsMoreVectors: 'Daha fazla vektör gerekli',
    wideArea: 'Geniş köken alanı',
    focusedArea: 'Odaklanmış köken alanı',
    dropPlan: 'Plan görüntüsünü bırakın veya yüklemek için tıklayın',
    needsMoreVectorsText: 'En az iki net yön oku çizin. Üç veya daha fazla bağımsız gözlem genellikle yakınsamayı yorumlamayı çok daha kolay hale getirir.',
    wideAreaText: 'Yansıtılan çizgiler kesişiyor, ancak dağılım hâlâ geniş. Gerçek bir olay yerinde, kökeni daraltmadan önce havalandırma, yakıt yükü, söndürme etkileri ve tanık bilgilerini karşılaştırın.',
    focusedAreaText: 'Vektörler kompakt bir alana yakınsıyor. Bunu köken hipotezi geliştirme için güçlü bir öğretim sinyali olarak ele alın, nihai adli sonuç olarak değil.',
    disclaimer: 'Yalnızca eğitim simülasyonu. Gerçek yangın kökeni ve neden araştırması, kabul edilmiş kılavuzları, olay yeri güvenlik protokollerini, belgeleme standartlarını ve nitelikli uzman incelemesini takip etmelidir.',
  },
  seo: [
    {
      type: 'title',
      text: 'Yanık Deseni Vektörlerinden Etkileşimli Yangın Kökeni Analizi',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Öğretim simülatörü',
      title: 'Bu yangın izi köken analizörü ne öğretir',
      html: 'Bu tarayıcı aracı, araştırmacıların fiziksel yangın desenlerinden olası bir <strong>köken alanına</strong> nasıl akıl yürüttüğünü gösterir. Kullanıcılar görünür kanıtları haritalar, yönlü yayılım vektörleri çizer ve yansıtılan çizgilerin yakınsadığını veya dağıldığını gözlemler. Model kasıtlı olarak eğiticidir: geometri ve desen yorumlamayı öğretir, yasal neden belirlemeyi değil.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 katman', label: 'V-deseni, kömürleşme, is, temiz yanma', icon: 'mdi:layers-triple' },
        { value: '2D plan', label: 'yapısal oda haritası', icon: 'mdi:floor-plan' },
        { value: '3+ ok', label: 'önerilen gözlem sayısı', icon: 'mdi:vector-line' },
        { value: '%0-100', label: 'güven girişi', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Yangın deseni yorumlama için disiplinli bir iş akışı',
      items: [
        'Desenleri yorumlamadan önce güvenlik, olay yeri koruma, fotoğraflar, eskizler ve sistematik belgeleme ile başlayın.',
        'V-şekilli hasar, kömürleşme derinliği, is birikimi ve temiz yanma tek bir varsayıma indirgenmesin diye desen türlerini ayırın.',
        'Yön göstergelerini yalnızca fiziksel desenin savunulabilir bir yayılım yönünü desteklediği yerlerde çizin.',
        'En dramatik hasara güvenmek yerine bağımsız gözlemler arasında yakınsama arayın.',
        'Tahmini köken alanını, yakıtlar, tutuşma kaynakları, havalandırma, elektriksel kanıtlar ve tanık ifadelerine karşı test edilecek bir hipotez olarak kullanın.',
      ],
    },
    {
      type: 'table',
      headers: ['Desen', 'Potansiyel değer', 'Ana uyarı'],
      rows: [
        ['V-deseni', 'Daha düşük bir alandan yukarı ve dışa doğru alev yayılımını gösterebilir.', 'Havalandırma, parlama, duvar geometrisi ve söndürme ile değişebilir.'],
        ['Derin kömürleşme', 'Sürekli ısıya maruz kalma veya yoğun yanmayı gösterebilir.', 'Yakıt türü ve malzeme kalınlığı kömürleşme derinliğini güçlü şekilde etkiler.'],
        ['İs gölgesi', 'Korunan alanları, nesne yerleşimini veya hava akımı etkilerini ortaya çıkarabilir.', 'Taşınan mobilyalar veya söndürme faaliyeti yorumu değiştirebilir.'],
        ['Temiz yanma', 'Yüksek ısı, havalandırma veya geç aşama yanmayı gösterebilir.', 'İlk tutuşan malzemeyi otomatik olarak tanımlamaz.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Daha iyi köken hipotezleri',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'En iyi hipotezler aynı anda birden fazla gözlemi açıklar.',
          points: ['Bağımsız vektörler yakınsıyor', 'Kanıtlar bilinen havalandırma yollarına uyuyor', 'Yakıt paketleri hesaba katılmış', 'Alternatif kökenler aktif olarak test ediliyor'],
        },
        {
          title: 'Zayıf köken hipotezleri',
          icon: 'mdi:alert-circle-outline',
          description: 'Zayıf hipotezler genellikle bozulma faktörlerini test etmeden tek bir desene dayanır.',
          points: ['Dramatik bir kömürleşmiş alan kanıt olarak alınır', 'Parlama göz ardı edilir', 'Söndürme hasarı belgelenmemiş', 'Tutuşma kaynağı kanıtı varsayılır'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vektör Modeli Nasıl Çalışır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Her ok, yangın yayılımının yansıtılmış bir çizgisi olarak ele alınır. Tahminci ikili çizgi kesişimlerini hesaplar, makul bir plan sınırı içinde kalan noktaları filtreler, kalan kesişimlerin ortalamasını alır ve bu kesişimlerin dağılımına dayalı bir yarıçap raporlar. Birden fazla vektörle küçük bir yarıçap daha güçlü bir yakınsama sinyali üretir. Kesişim modeli, ilgili kanıt işaretçilerinden uzanan iki çizginin parametrik denklemlerini çözerek çalışır. İki vektör ortak bir bölgeye işaret ettiğinde, teorik kesişim noktaları ortalama havuzuna bir koordinat katar. Ne kadar çok bağımsız vektör katılırsa, tahminci ana kümeden uzakta kalan kesişimleri o kadar iyi filtreleyebilir ve kötü yönlendirilmiş veya yanlış yorumlanmış olabilecek tek bir gözlemin etkisini etkili bir şekilde azaltır.',
    },
    {
      type: 'paragraph',
      html: 'Bu geometrik yaklaşım bir sınıf çizim alıştırmasını yansıtır: öğrencilerin gözlemler farklı yüzeylerden ve desen türlerinden geldiğinde köken analizinin neden iyileştiğini anlamalarına yardımcı olur. Aynı zamanda yaygın bir sorunu ortaya çıkarır: altta yatan yorum zayıf olsa bile oklar kesişebilir, bu nedenle matematiksel merkez asla yangın bilimi yargısının yerini almamalıdır. Gerçek bir araştırmada, uygulayıcılar herhangi bir koordinatı olası köken olarak ele almadan önce çizilen sonucu havalandırma yolları, yakıt yükü dağılımı, yapısal hasar ve tanık ifadeleriyle karşılaştırır. Araç, tahmini noktanın yanında varyansı göstererek ve kullanıcılara sıkı bir kesişim kümesinin yalnızca onu üreten gözlemlerin kalitesi kadar güçlü olduğunu hatırlatarak bu alışkanlığı teşvik eder.',
    },
    {
      type: 'paragraph',
      html: 'Temel kesişim mantığının ötesinde, tahminci oda planının çok dışında kalan kesişimlerin hariç tutulması için bir sınır kısıtlaması uygular. Bu, aykırı değerlerin ortalanmış merkezi imkansız konumlara sürüklemesini önler. Nihai yarıçap, kalan kesişim koordinatlarının standart sapmasını temsil eder ve aktif vektörlerin ne kadar tutarlı bir şekilde uyuştuğunun doğrudan bir ölçüsünü verir. Plan açıklığının yüzde onunun altındaki bir yarıçap güçlü yakınsamayı gösterir. Planın dörtte birini aşan bir yarıçap, kanıtların henüz odaklanmış bir kökeni desteklemediğini ve sonuç çıkarmadan önce daha fazla veya daha iyi gözlem gerektiğini işaret eder.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Köken alanı', definition: 'Mevcut kanıtların yangının başladığını gösterdiği genel bölge.' },
        { term: 'V-deseni', definition: 'Genellikle dikey bir yüzeyde yukarı ve dışa doğru hasar olarak görünen bir yangın deseni.' },
        { term: 'Temiz yanma', definition: 'Yüksek ısı veya hava akımı koşullarında isin yanması veya birikmemesi sonucu oluşan daha açık veya temiz alan.' },
        { term: 'İs gölgesi', definition: 'Nesneler, hava akımı veya ısıya maruz kalma hakkında bilgi koruyabilen, korunmuş veya farklı birikmiş is alanı.' },
        { term: 'Vektör yakınsaması', definition: 'Yansıtılmış yön göstergelerinin ortak bir bölge etrafında kümelenmesi.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Adli uyarı',
      title: 'Yakınsamayı kesinliğe dönüştürmeyin',
      html: 'Sıkı bir kesişim kümesi yalnızca gözlemler geçerli olduğunda yararlıdır. Gerçek araştırmalar havalandırmayı, parlamayı, yakıt paketlerini, elektrik sistemlerini, cihaz kanıtlarını, tanık ifadelerini, söndürmeyi ve olay yeri karışıklığını hesaba katmalıdır.',
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
