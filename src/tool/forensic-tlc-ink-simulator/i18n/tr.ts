import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'adli-tlc-murekkep-kromatografisi-simulatoru';
const title = 'Adli TLC Mürekkep Kromatografisi Simülatörü';
const description = 'Şüpheli yazı mürekkeplerinin ince tabaka kromatografisini simüle edin, çözücü cephesi gelişimini görselleştirin, boya bantlarını ayırın ve her pigment için kesin Rf değerlerini hesaplayın.';

const howTo = [
  {
    name: 'Şüpheli mürekkebi veya karşılaştırma kalemini seçin',
    text: 'Fidye mektubu mürekkebini veya şüpheli bir kalem profilini seçin. Her mürekkep, sabit faza karşı farklı polarite ve afiniteye sahip farklı boya bileşenleri seti içerir.',
  },
  {
    name: 'Mobil fazı seçin',
    text: 'Çözücü polaritesinin kapiler gelişimi ve her boya bandının bağıl sürüklenmesini nasıl değiştirdiğini görmek için çözücü sistemini değiştirin.',
  },
  {
    name: 'TLC plakasını geliştirin',
    text: 'Geliştirme süresi kaydırıcısını hareket ettirin ve ayrılmış bantlar başlangıç çizgisinin üzerinde belirirken çözücü cephesinin plaka boyunca yükselişini izleyin.',
  },
  {
    name: 'Rf tablosunu okuyun',
    text: 'Her bir pigment mesafesini çözücü cephesi mesafesiyle karşılaştırın. Simülatör, Rf değerini pigment mesafesinin çözücü cephesi mesafesine bölünmesiyle hesaplar.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'İnce tabaka kromatografisinde Rf ne anlama gelir?',
    answer: 'Rf, alıkonma faktörüdür (retention factor): bileşiğin katettiği mesafenin, çözücü cephesinin aynı başlangıç çizgisinden itibaren katettiği mesafeye bölünmesiyle elde edilir. Birimsizdir ve normalde 0 ile 1 arasındadır.',
  },
  {
    key: 'faq-2',
    question: 'TLC, iki mürekkep örneğinin aynı kalemden geldiğini kanıtlayabilir mi?',
    answer: 'Hayır. TLC, boya desenlerinin tutarlı veya tutarsız olup olmadığını gösterebilir, ancak kaynak tespiti doğrulanmış karşılaştırma yöntemleri, kontroller, belgelendirme ve uzman yorumu gerektirir.',
  },
  {
    key: 'faq-3',
    question: 'Çözücüyü değiştirmek neden bant desenini değiştirir?',
    answer: 'Boyalar, sabit faz ile mobil faz arasında farklı şekilde dağılır. Daha iyi bir polarite uyumuna sahip çözücü, bir boyayı daha uzağa taşıyarak Rf değerini artırabilir.',
  },
  {
    key: 'faq-4',
    question: 'Başlangıç çizgisi neden önemlidir?',
    answer: 'Hem çözücü cephesi mesafesi hem de pigment mesafesi başlangıç çizgisinden ölçülmelidir. Plakanın en altından ölçüm yapmak yanlış Rf değerleri üretir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Geliştirme plakalı ince tabaka kromatografisi odası',
    rulerAria: 'Çözücü cephesini ve pigment bantlarını ölçmek için sanal milimetrik cetvel',
    rulerMarks: '80,60,40,20,0',
    units: 'Birim sistemi',
    metric: 'Metrik',
    imperial: 'İmparatorluk',
    unitMillimeter: 'mm',
    unitInch: 'inç',
    unitMinute: 'dk',
    inkSample: 'Mürekkep örneği',
    ransomNote: 'Şüpheli fidye mektubu mürekkebi',
    bluePen: 'Ele geçirilen mavi tükenmez',
    blackPen: 'Ele geçirilen siyah tükenmez',
    gelPen: 'Ele geçirilen jel kalem',
    solventSystem: 'Mobil faz',
    ethanolWater: 'Etanol / su',
    butanolAcetic: 'Butanol / asetik asit',
    isopropanolAmmonia: 'İzopropanol / amonyak',
    developmentTime: 'Geliştirme süresi',
    frontDistance: 'Çözücü sürüklenmesi',
    matchScore: 'Desen benzerliği',
    solventFront: 'Çözücü cephesi',
    originLine: 'Başlangıç',
    pigment: 'Pigment bandı',
    pigmentCyanDye: 'camgöbeği boya',
    pigmentVioletDye: 'mor boya',
    pigmentGrayCarrier: 'gri taşıyıcı',
    pigmentNavyDye: 'lacivert boya',
    pigmentYellowDye: 'sarı boya',
    pigmentRedDye: 'kırmızı boya',
    pigmentBlueDye: 'mavi boya',
    pigmentDarkBinder: 'koyu bağlayıcı',
    pigmentTealDye: 'turkuaz boya',
    pigmentMagentaDye: 'macenta boya',
    pigmentGelBinder: 'jel bağlayıcı',
    distance: 'Mesafe',
    rfValue: 'Rf değeri',
    disclaimer: 'Sadece eğitim amaçlı simülasyon. Adli mürekkep karşılaştırması; orijinal belgeler, doğrulanmış laboratuvar yöntemleri, referans standartlar ve nitelikli belge inceleme uzmanları gerektirir.',
  },
  seo: [
    {
      type: 'title',
      text: 'Adli Mürekkep Karşılaştırması için İnce Tabaka Kromatografisi',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Öğretim simülatörü',
      title: 'Bu TLC mürekkep simülatörünün anlamanıza yardımcı olduğu hususlar',
      html: 'Bu araç, <strong>yazı mürekkeplerinin ince tabaka kromatografisinin</strong> görünür bir mürekkep çizgisini nasıl birden fazla boya bandına ayırabildiğini açıklar. Adli tıp öğrencileri, belge inceleme eğitimi alanlar ve geliştirilmiş bir TLC plakasından Rf değerlerinin nasıl hesaplandığını anlamak isteyen herkes için tasarlanmıştır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d bant / d çözücü', label: 'alıkonma faktörü formülü', icon: 'mdi:division' },
        { value: '4', label: 'karşılaştırılan mürekkep profili', icon: 'mdi:pen' },
        { value: '3', label: 'simüle edilen mobil faz', icon: 'mdi:flask-outline' },
        { value: '2', label: 'metrik ve imparatorluk göstergeleri', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Doğru TLC ölçüm kontrol listesi',
      items: [
        'Geliştirme başlamadan önce başlangıç çizgisini çözücü seviyesinin üzerinde işaretleyin.',
        'Çözücü üst kenara ulaşmadan önce plakayı çıkarın.',
        'Buharlaşabileceği veya görülmesi zorlaşabileceği için çözücü cephesini hemen işaretleyin.',
        'Pigment sürüklenmesini ve çözücü sürüklenmesini aynı başlangıç çizgisinden ölçün.',
        'Rf değerlerini çözücü sistemi, plaka tipi, geliştirme koşulları ve kontrollerle birlikte raporlayın.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'TLC\'nin Destekleyebileceği Durumlar',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'TLC, şüpheli ve bilinen mürekkeplerin aynı koşullar altında benzer boya ayrışma davranışı gösterip göstermediğini ortaya koyabilir.',
          points: ['Tarama karşılaştırması', 'Boya deseni görselleştirme', 'Rf belgelendirmesi', 'Doğrulayıcı testler için örnek seçimi'],
        },
        {
          title: 'TLC\'nin Tek Başına Kanıtlayamayacağı Durumlar',
          icon: 'mdi:alert-circle-outline',
          description: 'Tek başına TLC bir kalemi benzersiz şekilde tanımlayamaz, bir belgeye tarih atayamaz veya yazarlığı kanıtlayamaz.',
          points: ['Benzersiz kaynak ataması yok', 'Yazar tanımlama yok', 'Varsayılan olarak yaşlandırma kararı yok', 'Doğrulanmış protokollerin yerini almaz'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Sıkça sorulan soru', 'İlgili TLC kavramı', 'Detaylı yanıt'],
      rows: [
        ['Rf nasıl hesaplanır?', 'Boyanın mesafesi bölü çözücü cephesinin mesafesi.', 'Her ikisini de başlangıç çizgisinden ölçün, ardından bölün. Sonuç birimsizdir.'],
        ['Mürekkep neden renklere ayrılır?', 'Farklı boyaların sabit ve mobil fazlara karşı farklı afiniteleri vardır.', 'Tek bir yazılı şerit, farklı hızlarda sürüklenen birkaç renklendirici içerebilir.'],
        ['İki kalemin TLC deseni aynı olabilir mi?', 'Evet, benzer formülasyonlar yakın desenler üretebilir.', 'Benzerlik tutarlılığı destekler, tek bir kaleme özgüllemeyi değil.'],
        ['Rf değerim neden değişti?', 'Çözücü, plaka, nem, doygunluk, sıcaklık ve damlatma boyutu sürüklenmeyi etkiler.', 'Rf değerleri yalnızca koşullar kontrol edilip belgelendiğinde karşılaştırılabilirdir.'],
      ],
    },
    {
      type: 'title',
      text: 'Simülatör Ayrışmayı Nasıl Modelliyor?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model, çözücü cephesi hareketini zamanla yavaşlayan bir kapiler yükselme süreci olarak ele alırken, her bir boyaya iki basitleştirilmiş özelliğe dayalı bir Rf değeri atanır: hareket eden çözücüye olan ilgisi ve seçilen mobil faz ile olan polarite uyumu. Bu, cihaz düzeyinde kimyadan ziyade kasıtlı olarak eğitim amaçlıdır ancak kullanıcıların öğrenmesi gereken temel ilişkiyi korur: önce çözücü hareket eder, boyalar fazlar arasında bölünür ve Rf ölçülen sürüklenme mesafelerinden hesaplanır.',
    },
    {
      type: 'paragraph',
      html: 'İnce tabaka kromatografisi; basitliği, hızı ve maliyet etkinliği nedeniyle adli tıp laboratuvarlarında yaygın olarak kabul gören bir analitik tekniktir. Belge inceleme bağlamında, öncelikle farklı mürekkep numunelerinin boya bileşimlerini karşılaştırmak için kullanılır. Adli tıp uzmanları, şüpheli bir belgeden neşter veya içi boş bir iğne kullanarak küçük bir mürekkep parçası çıkarır, bunu piridin veya metanol gibi uygun bir çözücü içinde çözer ve referans mürekkep standartlarıyla birlikte TLC plakasına damlatır.',
    },
    {
      type: 'paragraph',
      html: 'Plaka kapalı bir odada geliştirildiğinde, mürekkebin bağımsız bileşenleri, sabit silika jel fazı ile mobil çözücü fazı arasındaki farklı dağılımlarına göre ayrılır. Elde edilen kromatogram, belirli yüksekliklerde belirgin renk bantları sergileyerek mürekkebin görsel bir parmak izini sağlar. Belge incelemecileri daha sonra görünür her boya bandı için alıkonma faktörünü hesaplayarak şüpheli mürekkebin şüpheli bir yazı aletiyle kimyasal olarak tutarlı olup olmadığını veya bir mürekkep referans veri tabanındaki bilinen bir marka ve formülle eşleşip eşleşmediğini belirlemeye yardımcı olur.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stationary phase', definition: 'TLC plakası üzerindeki kaplama (genellikle silika jel), bileşiklerle etkileşime girer ve hareketlerini yavaşlatır.' },
        { term: 'Mobile phase', definition: 'Plaka boyunca yükselen ve boya bileşenlerini beraberinde taşıyan çözücü sistemi.' },
        { term: 'Origin line', definition: 'Geliştirmeden önce mürekkep örneğinin uygulandığı kurşun kalem çizgisi.' },
        { term: 'Solvent front', definition: 'Plaka çıkarılmadan önce mobil fazın ulaştığı en yüksek nokta.' },
        { term: 'Rf value', definition: 'Alıkonma faktörü: bileşenin katettiği mesafenin çözücü cephesinin katettiği mesayefe bölünmesi.' },
      ],
    },
    {
      type: 'tip',
      title: 'Pratik yorumlama ipucu',
      html: 'Adli belge inceleme çalışmasında, bir uyuşmazlık özellikle yararlı olabilir çünkü aday bir kalem formülasyonunu eleyebilir. Eşleşen bir TLC deseni ise daha zayıftır: örneklerin o koşullar altında kimyasal olarak tutarlı olduğunu söyler, mutlaka aynı kalemden geldiklerini değil.',
    },
    {
      type: 'proscons',
      title: 'TLC mürekkep karşılaştırmasının güçlü yönleri ve sınırları',
      items: [
        { pro: 'Mürekkep boyalarını ayırmak için hızlı, ucuz ve görsel olarak sezgiseldir.', con: 'Genellikle tahrip edicidir çünkü belgeden küçük bir örnek çıkarılır.' },
        { pro: 'Rf değerleri, şüpheli ve bilinen örnekleri karşılaştırmak için yapılandırılmış bir yol oluşturur.', con: 'Çözücü, plaka, nem ve geliştirme koşulları değiştiğinde Rf değerleri kayar.' },
        { pro: 'Daha ileri analizlerden önce bir tarama yöntemi olarak kullanışlıdır.', con: 'Can\'t make a unique pen-source conclusion without broader evidence.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Adli uyarı',
      title: 'Mürekkep kromatografisini abartmayın',
      html: 'Bir tarayıcı simülasyonu kağıdı, mürekkep yaşını, ekstraksiyon kimyasını, plaka kalitesini, kontaminasyonu veya enstrümantal doğrulamayı inceleyemez. Ölçüm mantığını ve yorumlama sınırlarını öğrenmek için kullanın, ardından gerçek kanıtlar için doğrulanmış adli belge inceleme yöntemlerine güvenin.',
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
