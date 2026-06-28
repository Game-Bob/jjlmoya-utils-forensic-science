import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'adli-lif-karsilastirma-mikroskobu';
const title = 'Adli Lif Karşılaştırma Mikroskobu Simülatörü';
const description = 'Şüpheli bir tekstil lifi profili oluşturun, bunu bilinen referanslarla karşılaştırın ve morfoloji, polarizasyon ve UV-Vis boya spektrumu verilerini yorumlayın.';

const howTo = [
  {
    name: 'Şüpheli lif profilini oluşturun',
    text: 'Ele geçirilen lif için malzeme, çap, büküm yönü, polarizasyon tepkisi ve boya profilini belirleyin.',
  },
  {
    name: 'Bilinen bir karşılaştırma lifi seçin',
    text: 'Sağ tarafta pamuk, yün, polyester veya naylon gibi şüpheli bir giysi lifini seçin.',
  },
  {
    name: 'Odak ve polarizasyonu ayarlayın',
    text: 'Netliği, yüzey çıkıntılarını ve çift kırılma tepkisini gözlemlemek için ince odak kaydırıcısını hareket ettirin ve polarizörü döndürün.',
  },
  {
    name: 'Karşılaştırın morfoloji ve UV-Vis spektrumlarını',
    text: 'Örneklerin tutarlı mı yoksa açıkça farklı mı olduğuna karar vermek için morfoloji puanı, spektrum puanı, birleşik eşleşme ve absorpsiyon eğrilerini kullanın.',
  },
];

const faq = [
  {
    question: 'Lif mikroskobu, bir lifin tam olarak hangi giysiden geldiğini belirleyebilir mi?',
    answer: 'Genellikle hayır. Lif karşılaştırması, şüpheli bir lif ile bilinen bir tekstil ürünü arasındaki tutarlılığı veya farklılıkları gösterebilir; ancak bireysel kaynak atfı, dikkatli bir bağlam analizi, doğrulanmış yöntemler ve sıklıkla ek kimyasal veya enstrümantal analizler gerektirir.',
  },
  {
    question: 'Lif karşılaştırmasında neden polarize ışık kullanılır?',
    answer: 'Polarize ışık, çift kırılmayı, sönme davranışını ve doğal ile sentetik lifler arasındaki yapısal farkları ortaya çıkarmaya yardımcı olur. Sentetik lifler, moleküler yönelim nedeniyle genellikle daha güçlü bir polarizasyon tepkisi gösterir.',
  },
  {
    question: 'UV-Vis spektrumu ne sağlar?',
    answer: 'Mikroskobi şekil ve optik davranışı tanımlarken, UV-Vis absorbans değeri boya davranışını farklı dalga boylarında karşılaştırabilir. Farklı boyalara sahip benzer lifler spektral grafikte net bir şekilde ayrılabilir.',
  },
  {
    question: 'Sonuçlar neden kesin bir teşhis yerine puan olarak gösteriliyor?',
    answer: 'Adli mikro deliller orantılı bir şekilde raporlanmalıdır. Puanlar, morfolojik ve boya benzerliğinin eğitim amaçlı özetleridir; laboratuvar sonucu veya hukuki mütalaa değildir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'İki tekstil lifini karşılaştıran sanal bölünmüş alan adli mikroskobu',
    chartAria: 'Şüpheli ve bilinen lif boya spektrumlarını karşılaştıran UV-Vis absorbans grafiği',
    questionedSample: 'Şüpheli örnek',
    fixedEvidence: 'Sabitlenen delil',
    builderSummaryDefault: 'Pamuk / 18 µm / düzensiz / indigo',
    customQuestionedLabel: 'Vakadaki şüpheli lif',
    material: 'Malzeme',
    cotton: 'Pamuk',
    woolMaterial: 'Yün',
    polyesterMaterial: 'Polyester',
    nylonMaterial: 'Naylon',
    materialcotton: 'pamuk',
    materialwool: 'yün',
    materialpolyester: 'polyester',
    materialnylon: 'naylon',
    twist: 'Büküm',
    irregularTwist: 'Düzensiz',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Çap',
    polarResponse: 'Polarize tepkisi',
    dyeProfile: 'Boya profili',
    indigoDye: 'Indigo',
    crimsonDye: 'Koyu Kırmızı',
    navyDye: 'Lacivert',
    violetDye: 'Menekşe',
    dyeindigo: 'indigo',
    dyecrimson: 'koyu kırmızı',
    dyenavy: 'lacivert',
    dyeviolet: 'menekşe',
    knownSample: 'Bilinen karşılaştırma',
    questionedCotton: 'Şüpheli mavi pamuk lifi',
    suspectCotton: 'Şüpheli gömlek pamuk lifi',
    wool: 'Kırmızı yün kazak lifi',
    polyester: 'Lacivert polyester ceket lifi',
    nylon: 'Menekşe naylon astar lifi',
    focus: 'İnce odak',
    polarizer: 'Polarizör açısı',
    morphology: 'Morfoloji',
    spectrum: 'UV-Vis',
    birefringence: 'Çift kırılma',
    combinedMatch: 'Birleşik eşleşme',
    uvVisTitle: 'UV-Vis absorbans çakıştırması',
    statusStrong: 'Yüksek tutarlılık',
    statusPartial: 'Karışık karşılaştırma',
    statusDifferent: 'Dışlama destekleniyor',
    verdictStrong: 'Şüpheli ve bilinen lifler çap, büküm, optik davranış ve boya spektrumunda yüksek düzeyde tutarlılık göstermektedir. Gerçek bir vakada bunu, bireysel bir teşhis olarak değil, olası ortak bir tekstil kaynağının desteği olarak raporlayın.',
    verdictPartial: 'Karşılaştırma karışıktır. Bazı sınıf özellikleri uyuşmaktadır, ama morfoloji, boya tepkisi veya çift kırılma, ihtiyatlı bir ilişkilendirmeden önce daha fazla inceleme gerektirecek kadar fark barındırmaktadır.',
    verdictDifferent: 'Lifler temel sınıf özellikleri genelinde tutarlı değildir. Simüle edilen sonuç, şüpheli lif için bu bilinen tekstil kaynağının dışlanmasını desteklemektedir.',
    disclaimer: 'Yalnızca eğitim amaçlı simülasyon. Gerçek adli lif karşılaştırması; doğrulanmış mikroskobi, kontroller, dokümantasyon, kontaminasyon önlemleri, akran değerlendirmesi ve yetkin mikro delil yorumlaması gerektirir.',
  },
  seo: [
    {
      type: 'title',
      text: 'Bölünmüş Alan Mikroskobisi ve UV-Vis Spektrumları ile Adli Lif Karşılaştırması',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Öğretim simülatörü',
      title: 'Bu sanal lif mikroskobunun gösterdiği özellikler',
      html: 'Bu simülatör, <strong>adli lif karşılaştırmasının</strong> arkasındaki pratik iş akışını modeller: şüpheli tekstil lifini tanımlayın, bilinen bir referansla karşılaştırın, odağı ayarlayın, polarize filtreleri döndürün ve boya tepkisini basitleştirilmiş bir UV-Vis absorbans eğrisi ile karşılaştırın. İz delil eğitimi alan öğrenciler için tasarlanmıştır, gerçek dava kararları için değildir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 alan', label: 'bölünmüş mikroskop görünümü', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'görünür spektrum aralığı', icon: 'mdi:chart-bell-curve' },
        { value: '4 sınıf', label: 'pamuk, yün, polyester, naylon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'polarizör rotasyonu', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Tekstil lifi karşılaştırmasında temel gözlemler',
      items: [
        'Lif boyunca doğal varyasyonu not ederek lif çapını ölçün veya tahmin edin.',
        'Mevcut olduğunda büküm yönünü, yüzey çıkıntılarını, medulla benzeri özellikleri, matlaştırıcı partikülleri ve enine kesit ipuçlarını kaydedin.',
        'Döndürme altında çift kırılmayı, sönme davranışını ve parlaklık değişikliklerini karşılaştırmak için polarize ışık kullanın.',
        'Rengi mikroskobik olarak karşılaştırın, ardından durum daha yüksek bir ayrım gerektirdiğinde enstrümantal boya verilerini kullanın.',
        'Bulguların tutarlı, farklı veya yetersiz olup olmadığını rapor edin; destekleyici kanıt olmadan benzersiz bir giysi kaynağına işaret eden ifadelerden kaçının.',
      ],
    },
    {
      type: 'table',
      headers: ['Gözlem', 'Neyi yanıtlamaya yardımcı olur', 'Sınır'],
      rows: [
        ['Çap ve morfoloji', 'Lifler fiziksel olarak benzer mi?', 'Üretim varyasyonları giysiler arasında örtüşebilir.'],
        ['Büküm ve yüzey detayı', 'Doğal veya sentetik özellikler uyuşuyor mu?', 'Hasar, gerilme ve preparat hazırlama görünümü değiştirebilir.'],
        ['Polarize ışık tepkisi', 'Optik özellikler uyuşuyor mu?', 'Çift kırılma sınıf düzeyinde kanıttır, benzersiz bir imza değildir.'],
        ['UV-Vis boya spektrumu', 'Boyalar tutarlı mı?', 'Benzer boyalar yakın görünebilir; ekstraksiyon ve cihaz ayarları önemlidir.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tutarlılığı destekleyen durumlar',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Şüpheli ve bilinen lifler arasında birden fazla bağımsız sınıf özelliği uyuşuyor.',
          points: ['Karşılaştırılabilir çap aralığı', 'Aynı genel lif türü', 'Benzer polarizasyon davranışı', 'Örtüşen boya absorbsiyon pikleri'],
        },
        {
          title: 'Dışlamayı destekleyen durumlar',
          icon: 'mdi:close-circle-outline',
          description: 'Ortak bir tekstil kaynağı için uyuşması gereken bir özellikte net ve tekrarlanabilir bir fark ortaya çıkıyor.',
          points: ['Doğal veya sentetik uyumsuzluğu', 'Farklı büküm veya yüzey morfolojisi', 'Belirgin şekilde farklı boya spektrumu', 'Uyumsuz çift kırılma tepkisi'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Simülasyon Modelinin Çalışma Prensibi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Model; çap, büküm yönü, lif sınıfı, çift kırılma, boya ailesi ve UV-Vis absorbans noktalarını içeren küçük bir referans veri tabanı depolar. Şüpheli lif kullanıcı tarafından yapılandırılabilir, böylece karşılaştırma puanı sabit bir sınıf örneği yerine vaka profiline yanıt verir. Görsel mikroskop görünümü odak ve polarizör açısına göre değişir, böylece öğrenciler optik ayarların neden önemli olduğunu görebilir.',
    },
    {
      type: 'paragraph',
      html: 'Polarizör kontrolü özellikle sentetik lifler için yararlıdır. Polyester ve naylona daha güçlü çift kırılma değerleri atanmıştır, bu nedenle polarizör döndükçe parlaklıkları daha görünür şekilde değişir. Doğal pamuk ve yün de tepki verir, ancak simüle edilen etki daha hafiftir. Bu, moleküler yönelim nedeniyle lif yapısının optik davranışı etkilediği öğretim fikrini yansıtır.',
    },
    {
      type: 'paragraph',
      html: 'UV-Vis grafiği basitleştirilmiş bir çakıştırmadır, bir spektrofotometrenin yerini almaz. Gerçek adli mikro delil çalışmalarında, boya karşılaştırması mikrospektrofotometri, ince tabaka kromatografisi, ekstraksiyon kimyası, referans kontrolleri ve belgelenmiş belirsizlik gerektirebilir. Grafik, mikroskop altında benzer görünen iki lifin boya kimyasıyla neden hala ayrılabileceğini öğretmek için mevcuttur.',
    },
    {
      type: 'paragraph',
      html: 'Adli tıp uzmanları lif analizi sürecinin her adımını belgelemelidir. Bu, ayrıntılı fotoğrafların çekilmesini, ölçümlerin kaydedilmesini ve tüm fiziksel kanıtlar için bir gözetim zincirinin sürdürülmesini içerir. Simülatör, öğrencilerin adli çalışmalarda sistematik belgelendirmenin ve nesnel karşılaştırmanın önemini anlamalarına yardımcı olur. Farklı ayarlarla etkileşime girerek, kullanıcılar ışık yolunun, numune kalınlığının ve boya konsantrasyonunun spektral eğrileri ve fiziksel görünümü nasıl etkilediğini öğrenebilirler. Böylelikle eğitim alan öğrenciler, laboratuvar standartlarına uygun şekilde mikroskobik inceleme, kimyasal analiz, kontaminasyon kontrolleri ve delil güvenliği gibi adli süreçleri bütünsel bir şekilde öğrenme ve uygulama fırsatı bulurlar.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Şüpheli lif', definition: 'Olay yerinden, kurbandan, şüpheliden, aletten, araçtan veya kaynağı bilinmeyen diğer ögelerden elde edilen lif.' },
        { term: 'Bilinen lif', definition: 'Şüpheli örnekle karşılaştırmak üzere bilinen bir tekstil veya nesneden toplanan referans lif.' },
        { term: 'Çift kırılma', definition: 'Işık yönüne veya polarizasyonuna bağlı olarak bir malzemenin farklı kırılma indislerine sahip olması durumu.' },
        { term: 'UV-Vis spektrumu', definition: 'Bir boyanın veya malzemenin ışığı farklı dalga boylarında ne kadar güçlü emdiğini gösteren grafik.' },
        { term: 'Sınıf özelliği', definition: 'Delilleri tek bir benzersiz kaynak yerine olası kaynaklar grubuyla ilişkilendirebilen özellik.' },
      ],
    },
    {
      type: 'tip',
      title: 'Öğrenciler için yorumlama ipucu',
      html: 'Yüksek bir benzerlik puanı kimlik tespiti olarak değil, <strong>tutarlılık</strong> olarak okunmalıdır. Mikro deliller; mikroskobi, kimya, transfer bağlamı, kalıcılık, kurtarma yöntemi ve kontaminasyon kontrolleri aynı yönü gösterdiğinde en güçlüdür.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Çıkarımı delil sınırları içinde tutun',
      html: 'Bir tarayıcı mikroskobu lif eşleşmesini doğrulayamaz. Resmi raporlar, kaynak atfını abartmadan gözlemleri, karşılaştırma temelini, sınırlılıkları ve destek düzeyini açıklamalıdır.',
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
