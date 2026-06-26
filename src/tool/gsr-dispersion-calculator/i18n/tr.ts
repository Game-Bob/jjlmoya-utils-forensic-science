import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'ates-mesafesi-tayini-gsr-barut-artigi-hesaplama';
const title = 'GSR Barut Artığı Atış Mesafesi Hesaplayıcı';
const description = 'Atış mesafesi, mühimmat türü, parçacık dağılımı ve termal etkilere göre hedef yüzeyindeki eğitsel atış artığı (GSR) dağılım kalıplarını simüle edin.';

const howTo = [
  {
    name: 'Atış mesafesini ayarlayın',
    text: 'Mesafe kontrolünü bitişik atıştan üç metreye kadar kaydırarak, atış artığı dağılımının kompakt ve termal olarak değişmiş bir yapıdan geniş ve seyrek bir parçacık alanına dönüşmesini izleyin.',
  },
  {
    name: 'Mühimmat profili seçin',
    text: '9 mm tabanca, .38 revolver veya 12 kalibre av tüfeği profillerinden birini seçin. Her profil, parçacık sayısını, dağılım katsayısını ve tahmini termal etki menzilini değiştirir.',
  },
  {
    name: 'Hedef bezi ve dağılım konisini inceleyin',
    text: 'Parçacık yoğunluğunu ve radyaldaki dağılımı değerlendirmek için hedef bezini kullanın. Atış artığı bulutunun hedefe ulaşmadan önceki fiziksel genişlemesini anlamak için yan koniyi gözlemleyin.',
  },
  {
    name: 'Mesafe kategorisini yorumlayın',
    text: 'Elde edilen sınıflandırmayı ve beklenen bulguları inceleyin. Sonuç; bitişik, yakın, yakın-orta ve uzak mesafe atış kalıplarının eğitsel anlamını açıklar.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Atış artığı dağılımı kesin atış mesafesini kanıtlayabilir mi?',
    answer: 'Hayır. GSR dağılım kalıpları kesin bir mesafe değerini değil, tahmini bir mesafe aralığını destekler. Gerçek bir sonuca varmak için ilgili ateşli silahın, mühimmatın, hedef malzemesinin, atış açısının incelenmesi ve kontrollü koşullarda karşılaştırmalı test atışlarının yapılması gerekir.',
  },
  {
    key: 'faq-2',
    question: 'Bitişik atışlar neden daha fazla is ve yanık izi gösterir?',
    answer: 'Çok kısa mesafelerde, sıcak gazlar, is, yanmamış barut taneleri ve kapsülün metalik parçacıkları, atış bulutu genişleyip soğumaya fırsat bulamadan hedefe çarparak kararma, yanma ve yırtılmaya neden olur.',
  },
  {
    key: 'faq-3',
    question: 'Kapsül kaynaklı GSR ile hangi kimyasal elementler ilişkilendirilir?',
    answer: 'Geleneksel GSR analizi kurşun, baryum ve antimon içeren parçacıklara odaklanır. Modern kurşunsuz mühimmatlar bu kimyasal profili değiştirebilse de, SEM-EDS yöntemleri parçacık morfolojisini ve kimyasını birlikte değerlendirir.',
  },
  {
    key: 'faq-4',
    question: 'Simülatör neden Gauss tipi radyal dağılım modeli kullanıyor?',
    answer: 'Gauss dağılımı, parçacıkların çoğunun merkeze yakın toplanması nedeniyle faydalı bir eğitsel yaklaşımdır. Gerçekte rüzgar, atış açısı, silah tasarımı veya kumaş dokusu asimetriye yol açabilir.',
  },
  {
    key: 'faq-5',
    question: 'Bu hesaplayıcı adli rapor hazırlamak için uygun mudur?',
    answer: 'Hayır. Bu yazılım eğitsel bir modeldir. Resmi bir adli balistik raporu; valide edilmiş laboratuvar protokollerine, kalite kontrollere, fiziksel test atışlarına ve uzman bir bilirkişinin değerlendirmesine dayanmalıdır.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Atış mesafesi',
    units: 'Birim sistemi',
    metric: 'Metrik',
    imperial: 'İmparatorluk',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Mühimmat profili',
    ammoPistol9mm: '9 mm tabanca',
    ammoRevolver38: '.38 revolver',
    ammoShotgun12: '12 kalibre av tüfeği',
    target: 'Hedef bezi',
    cone: 'Artık bulutu',
    canvasAria: 'Hedef bezi üzerindeki atış artığı parçacık dağılımı',
    rangeStripAria: 'Mesafe kategorileri',
    category: 'Mesafe yorumu',
    categoryContactLabel: 'Bitişik atış / namlu hedef temasında',
    categoryNearContactLabel: 'Yakın atış / yanık menzilinde',
    categoryCloseRangeLabel: 'Yakın-orta atış / barut dövme bölgesi',
    categoryDistantLabel: 'Uzak atış veya belirsiz mesafe',
    density: 'Parçacık yoğunluğu',
    thermal: 'Termal etki',
    radius: 'Tahmini dağılım yarıçapı',
    radiusSuffix: 'yarıçapı',
    expected: 'Beklenen bulgu',
    expectedContact: 'Hedef bölgesinde yoğun bir merkezi birikim, namlu baskı izi riski, is kararması, yırtılma ve termal hasar beklenir.',
    expectedNearContact: 'Yoğun is ve barut tanecikleri, giriş deliğinin etrafında dar ve kompakt bir radyal halka oluşturacak şekilde toplanır.',
    expectedCloseRange: 'Barut dövmesi (tatuaj) ve metalik artıklar ölçülebilir bir halka halinde genişler; termal etkiler ve is asgari düzeye iner.',
    expectedDistant: 'Parçacıklar oldukça seyrek ve geniş bir alana yayılmıştır. Mesafe tayini kimyasal analiz, mikroskopi ve karşılaştırmalı test atışları gerektirir.',
    contact: 'Bitişik',
    near: 'Yakın',
    close: 'Yakın-orta',
    distant: 'Uzak',
    disclaimer: 'Sadece eğitsel modeldir. GSR ile atış mesafesi tayini; kontrollü test atışları, hedef malzemesi karşılaştırması ve doğrulanmış kimyasal yöntemler gerektirir.',
  },
  seo: [
    {
      type: 'title',
      text: 'GSR Atış Artığı Dağılımından Atış Mesafesi Tayini',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Eğitsel model',
      title: 'Bu hesaplayıcı neyi açıklar',
      html: 'Bu GSR dağılım hesaplayıcısı, bir atış artığı kalıbının bitişik, yakın, yakın-orta veya uzak atışlardan hangisine benzediğini gösterir. Amacı <strong>atış mesafesi tayini</strong> prensiplerini öğretmektir, resmi bilirkişi raporu yerine geçmez.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'simüle edilen atış mesafesi', icon: 'mdi:ruler' },
        { value: '4', label: 'açıklanan mesafe kategorisi', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'karşılaştırılan mühimmat profili', icon: 'mdi:ammunition' },
        { value: '2', label: 'birim sistemi: metrik ve imparatorluk', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'Simüle Edilen Dağılım Kalıbı Nasıl Okunur',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Hızlı yorumlama kontrol listesi',
      items: [
        'Merkezde yoğun is birikimi, yanma, yırtılma veya namlu izi, bitişik veya yakın atışa işaret eder.',
        'Yanmamış barut taneleriyle çevrili dar ve koyu bir merkez, mesafenin sınırlandırılması için test atışları gerektiren çok kısa mesafeyi gösterir.',
        'İs bulunmayan seyrek barut dövmesi (tatuaj), genellikle ısı etkilerinin kaybolduğu yakın-orta mesafe atışına uygundur.',
        'Uzaktan yapılan atışlarda gözle görülür artık olmaması GSR bulunmadığı anlamına gelmez; mikroskopi veya kimyasal analizler parçacıkları saptayabilir.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bu aracın faydalı olduğu alanlar',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Atış mesafesi, artık yoğunluğu, parçacık yayılımı ve ısı etkileri arasındaki ilişkiyi grafik olarak görselleştirir.',
          points: ['Sınıf içi gösterimler', 'Teknik açıklamalar', 'Adli tıp terminolojisi', 'Metrik ve imparatorluk birim karşılaştırması'],
        },
        {
          title: 'Neyi kanıtlayamaz',
          icon: 'mdi:alert-circle-outline',
          description: 'Fiziksel deliller incelenmeden gerçek bir olaydaki gerçek atış mesafesini belirleyemez.',
          points: ['Delil analizi yapmaz', 'Kimyasal doğrulama içermez', 'Olaydaki silahla test atışı yapmaz', 'Hukuki delil değeri yoktur'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Sıkça sorulan soru', 'Kalıptaki anahtar ipucu', 'Teknik yanıt'],
      rows: [
        ['Bitişik atış nasıl görünür?', 'Yoğun is, yanma, yırtılma veya namlu izi.', 'Bitişik atış yorumu olasıdır ancak gaz genleşmesi ve hedef kumaşın esnekliği görünümü değiştirebilir.'],
        ['Silah hedefe ne kadar yakındı?', 'Giriş deliği etrafında dar bir barut halkasıyla yoğunlaşmış artıklar.', 'Dağılım bir mesafe aralığı varsayımını destekler ancak karşılaştırmalı test atışları zorunludur.'],
        ['Barut dövmesi (tatuaj) nedir?', 'Yanmamış barut tanelerinin çarpmasıyla oluşan noktasal izler ve seyrek is.', 'Dağılımı mühimmat türüne, hedef kumaşa, atış açısına ve aradaki engellere göre değişir.'],
        ['Uzak mesafede artıklar tamamen yok olur mu?', 'Oldukça seyrek parçacıklar ve gözle görülür birikim olmaması.', 'Makroskobik belirtiler kaybolsa da kapsül parçacıkları laboratuvarda tespit edilebilir.'],
      ],
    },
    {
      type: 'title',
      text: 'Simülasyon Modelinin Bilimsel Esasları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simülatör, parçacıkları darbe merkezi etrafına yerleştirmek için rastgele ama fiziksel olarak tutarlı bir radyal Gauss dağılımı kullanır. Kısa atış mesafeleri hedef üzerinde dar, toplu ve oldukça yoğun bir atış artığı birikimi oluştururken; atış mesafesinin artması parçacıkların radyal alandaki dağılımını önemli ölçüde genişletir ve birim alan başına düşen ortalama yoğunluğu azaltır. Bu matematiksel model, is birikintilerini ağır metalik kapsül parçacıklarından özellikle ayırır; çünkü alev ve ısı kaynaklı termal kararma, mikroskobik olarak tespit edilebilen metalik artıkların yayılımına kıyasla çok daha sınırlı bir fiziksel menzile sahiptir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Atış artığı (Gunshot Residue): atış sırasında kapsül, barut, çekirdek ve sıcak gazlardan oluşan parçacıklar.' },
        { term: 'İs kararması', definition: 'Genellikle sadece bitişik ve çok yakın atışlarda görülen koyu karbon birikintisi.' },
        { term: 'Barut dövmesi (tatuaj)', definition: 'Yanmamış veya kısmen yanmış barut tanelerinin hedefte oluşturduğu noktasal izler.' },
        { term: 'Namlu izi', definition: 'Bitişik atışlarda gaz basıncı ve sıcaklık nedeniyle namlu ucunun hedefte bıraktığı iz.' },
        { term: 'Test atışı', definition: 'Şüpheli silah ve mühimmatla, bilinen mesafelerden özdeş hedef kumaşına yapılan karşılaştırma atışları.' },
      ],
    },
    {
      type: 'title',
      text: 'Mesafe Kategorileri ve Beklenen Bulgular',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Mesafe Sınıfı', 'Genel bulgular', 'Yorumlama sınırları'],
      rows: [
        ['Bitişik', 'Yoğun merkezi birikim, is, yanma, yırtılma, namlu izi.', 'Hedef kumaşın yapısı ve gaz basıncı delik çapını büyük ölçüde değiştirebilir.'],
        ['Yakın', 'Giriş deliği etrafında dar barut ve is halkası.', 'Bol kıyafetler veya araya giren nesneler parçacık dağılımını engelleyebilir.'],
        ['Yakın-orta', 'Barut dövmesi, belirgin is birikimi olmadan yayılan parçacıklar.', 'Aynı mesafe pamuk, kot, deri veya kağıt üzerinde farklı dağılımlar gösterir.'],
        ['Uzak', 'Seyrek parçacıklar, geniş yayılım veya makroskobik iz olmaması.', 'Gözle görülür izler kaybolduğunda kimyasal analizler ve taramalı elektron mikroskopisi önem kazanır.'],
      ],
    },
    {
      type: 'tip',
      title: 'Pratik değerlendirme ipucu',
      html: 'Atış artıklarını her zaman bir <strong>mesafe aralığı karşılaştırması</strong> olarak değerlendirin, asla kesin bir sayısal değer olarak görmeyin. Bilimsel sonuçlar, hedef bulguların deneysel test kalıplarıyla karşılaştırılmasıyla elde edilir.',
    },
    {
      type: 'title',
      text: 'Dağılım Analizi Öncesi Belgeleme Kontrol Listesi',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Hedef malzemenin özelliklerini belgeleyin: kumaş türü, dokuması, rengi, kalınlığı ve katlanma durumu.',
        'Silah modelini, namlu uzunluğunu, mühimmat serisini, barut türünü ve namlu ağzı aparatlarını kaydedin.',
        'Kalıbı ölçek çizgisi, uygun aydınlatma ve delil zinciri bilgilerini içerecek şekilde fotoğraflayın.',
        'İs, yanma, yanmamış barut, silme halkası ve yırtılmaları ayrı ayrı inceleyin.',
        'Adli çalışmalarda mesafe aralığı belirtmeden önce daima karşılaştırmalı test atışları gerçekleştirin.',
      ],
    },
    {
      type: 'proscons',
      title: 'Dijital simülasyon ve adli laboratuvar analizi karşılaştırması',
      items: [
        { pro: 'Mesafe arttıkça parçacık dağılımının nasıl genişlediğini anlamayı kolaylaştırır.', con: 'Belirli bir ateşli silahın, mühimmat serisinin veya hedef kumaşın özelliklerini yansıtamaz.' },
        { pro: 'Mesafe kategorileri arasındaki kavramsal farkları netleştirir.', con: 'Kimyasal testlerin veya taramalı elektron mikroskopisinin (SEM-EDS) yerini almaz.' },
        { pro: 'Gözle yapılan makroskobik analizlerin fiziksel sınırlarını kavramaya yardımcı olur.', con: 'Deneysel doğrulama ve uzman bilirkişi incelemesi olmadan hukuki geçerliliği yoktur.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Adli balistik uyarısı',
      title: 'Yasal amaçlı kullanım dışıdır',
      html: 'Bilgisayar simülasyonu, gerçek bir olaydaki fiziksel delillerin yerini alamaz. Silahın durumunu, barut kimyasını, aradaki engelleri veya örnekleme kalitesini değerlendiremez. Bu sayfayı yalnızca eğitim amaçlı kullanın; gerçek olay incelemeleri için yetkili laboratuvarlara başvurun.',
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
