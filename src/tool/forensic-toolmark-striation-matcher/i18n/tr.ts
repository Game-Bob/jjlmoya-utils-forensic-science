import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'adli-alet-izi-yiv-karsilastirici';
const title = 'Adli alet izi yiv karşılaştırıcı';
const description = 'Şüpheli ve bilinen alet izi görüntülerini yükleyin, bunları bölünmüş bir karşılaştırma mikroskobunda hizalayın ve görsel kontrollerle yiv sürekliliğini inceleyin.';

const howTo = [
  {
    name: 'Karşılaştırma görüntülerini yükleyin',
    text: 'Kendi vaka materyalinizden, notlarınızdan veya eğitim setinizden bilinen bir test izi görüntüsünü ve şüpheli bir iz görüntüsünü yükleyin.',
  },
  {
    name: 'Karşılaştırma bölücüyü hareket ettirin',
    text: 'Her iki örneği tek bir alanda tutarken bilinen veya şüpheli izin daha fazlasını ortaya çıkarmak için optik görüntüleyici üzerinde sürükleyin.',
  },
  {
    name: 'Ofset, döndürme, yakınlaştırma ve kontrastı ayarlayın',
    text: 'Şüpheli izi kaydırmak ve döndürmek için mikrometre kontrollerini kullanın, ardından belirsiz yivlerin görünür kalması için yakınlaştırma, kontrast ve parlaklığı ayarlayın.',
  },
  {
    name: 'Karşılaştırma görünümünü dışa aktarın',
    text: 'Görsel hizalama hazır olduğunda, tartışma, sınıf incelemesi veya vaka notu gösterimi için bir PNG görünümü dışa aktarın.',
  },
];

const faq = [
  {
    question: 'Adli alet izi karşılaştırması nedir?',
    answer: 'Adli alet izi karşılaştırması, bir alet başka bir yüzeye temas ettiğinde, kestiğinde, kazıdığında, zorladığında veya sıkıştırdığında üretilen izleri inceler. Uzmanlar, şüpheli izler ile bilinen test izleri arasındaki sınıf özelliklerini, iz kalitesini ve mikroskobik yiv detaylarını karşılaştırır.',
  },
  {
    question: 'Bu çevrimiçi araç, bir izi bırakan kesin aleti tanımlayabilir mi?',
    answer: 'Hayır. Bu çalışma alanı görsel hizalama ve eğitim amaçlıdır. Kaynak atıfı, olasılık, hata oranı veya otomatik bir adli sonuç hesaplamaz.',
  },
  {
    question: 'Alet izi karşılaştırmasında ofset, döndürme ve yakınlaştırma neden önemlidir?',
    answer: 'Alet açısı, basınç, ölçek, kamera konumu ve yanal yerleşimdeki küçük farklılıklar benzer yiv dizilimlerinin hizasız görünmesine neden olabilir. Ofset, döndürme ve yakınlaştırma kontrolleri iki görüntüyü karşılaştırılabilir bir görüntüleme konumuna getirmeye yardımcı olur.',
  },
  {
    question: 'Görsel alet izi hizalaması için en iyi hangi görüntüler çalışır?',
    answer: 'İz bölgesinde yeterli örtüşmeye sahip, mümkün olduğunca dik açıyla çekilmiş, keskin ve iyi aydınlatılmış görüntüler kullanın. Ağır bulanıklıktan, aşırı parlamadan, perspektif bozulmasından ve yiv alanının karşılaştırılamayacak kadar kısa veya hasarlı olduğu görüntülerden kaçının.',
  },
  {
    question: 'Bir kullanıcı iki alet izi görüntüsünü hizaladıktan sonra neyi belgelemelidir?',
    answer: 'Her görüntünün kaynağını, şüpheli mi yoksa bilinen mi olduğunu, kullanılan hizalama ayarlarını, uygulanan tüm görüntü ayarlamalarını, görünür anlaşma veya anlaşmazlık alanlarını ve görüntü kalitesinin sınırlılıklarını belgeleyin.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Bilinen ve şüpheli alet izi yivlerinin bölünmüş karşılaştırma mikroskobu görünümü',
    splitLabel: 'Karşılaştırma bölücüyü hareket ettir',
    units: 'Ofset birim sistemi',
    metric: 'Metrik',
    imperial: 'İmparatorluk',
    toolProfile: 'Alet profili',
    loadImages: '1. Yükle',
    alignImage: '2. Şüpheli görüntüyü hizala',
    adjustImage: '3. Görünürlüğü ayarla',
    outputControls: 'Çıkış kontrolleri',
    demoOptions: 'Demo seçenekleri',
    uploadKnown: 'Bilinen/test görüntüsü',
    uploadQuestioned: 'Şüpheli görüntü',
    noFile: 'Görüntü yüklenmedi',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Tornavida ucu',
    prybar: 'Levye kenarı',
    boltCutter: 'Cıvata kesici çene',
    offset: 'Yatay ofset',
    rotation: 'Açısal döndürme',
    zoom: 'Görüntü yakınlaştırma',
    contrast: 'Kontrast',
    brightness: 'Parlaklık',
    microns: 'mikron',
    thousandths: 'binde bir',
    degrees: 'derece',
    correlation: 'Mod / skor',
    verdictStrong: 'güçlü hizalama',
    verdictPartial: 'kısmi hizalama',
    verdictWeak: 'zayıf hizalama',
    center: 'Merkezle',
    fineTip: 'ince sürükleme çizgileri',
    wideEdge: 'geniş sıkıştırma',
    crushJaw: 'eşleştirilmiş ezilme sırtları',
    grid: 'Izgara',
    exportImage: 'Görünümü dışa aktar',
    exportFilename: 'alet-izi-karsilastirma-gorunumu.png',
    phaseFit: 'Faz uyumu',
    rotationFit: 'Döndürme uyumu',
    knownMark: 'Bilinen test izi',
    questionedMark: 'Şüpheli iz',
    reliefGraph: 'Dijitalleştirilmiş mikro yüzey kabartması',
    visualMode: 'Görsel',
    visualVerdict: 'manuel karşılaştırma',
    visualInterpretation: 'Yalnızca görsel hizalama. Otomatik bir adli sonuç hesaplanmaz.',
    interpMatch: 'Demo önizlemesi. Gerçek izleri karşılaştırmak için görüntüler yükleyin.',
    interpPossible: 'Demo önizlemesi. Hizalamayı ayarlayın veya görüntüler yükleyin.',
    interpMismatch: 'Demo önizlemesi. Yeniden merkezleyin veya görüntüler yükleyin.',
    disclaimer: 'Yalnızca görsel çalışma alanı.',
  },
  seo: [
    {
      type: 'title',
      text: 'Çevrimiçi Adli Alet İzi Karşılaştırma Mikroskobu',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Görsel çalışma alanı',
      title: 'Şüpheli ve bilinen alet izi görüntülerini tarayıcınızda karşılaştırın',
      html: 'Bu alet izi karşılaştırma çalışma alanı, iki görüntü yüklemenize, bunları bölünmüş ekranlı bir karşılaştırma mikroskobuna yerleştirmenize ve yiv çizgileri, sürtünme izleri, basınç işaretleri veya mikroskobik yivler yan yana incelenene kadar şüpheli izi ayarlamanıza olanak tanır. Özel mikroskopi yazılımı yüklemeden <strong>bilinen ve şüpheli alet izi karşılaştırmasını</strong> açıklamak isteyen adli tıp öğrencileri, eğitmenler, müfettişler ve hukuk ekipleri için tasarlanmıştır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 yükleme', label: 'bilinen ve şüpheli görüntüler', icon: 'mdi:image-plus' },
        { value: 'bölünmüş ekran', label: 'karşılaştırma mikroskobu düzeni', icon: 'mdi:compare-horizontal' },
        { value: 'hizalama', label: 'ofset, döndürme ve yakınlaştırma kontrolleri', icon: 'mdi:axis-arrow' },
        { value: 'PNG dışa aktar', label: 'karşılaştırma görünümünü kaydet', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'Bu alet izi karşılaştırma çalışma alanının yararlı olduğu durumlar',
      items: [
        'Karşılaştırma mikroskoplarının bilinen bir test izini şüpheli bir izin yanına nasıl yerleştirdiğini öğretmek.',
        'Gerçek veya eğitim alet izi görüntüleriyle sınıf gösterileri hazırlamak.',
        'Hizalama, ölçek, döndürme, ışıklandırma ve kontrastın yiv yorumlamasını neden etkilediğini açıklamak.',
        'Otomatik bir tanımlama iddiasında bulunmadan hizalanmış görünümü gösteren temiz bir görsel illüstrasyon veya vaka notu görüntüsü oluşturmak.',
        'Bir izin resmi laboratuvar karşılaştırması için uygun olup olmadığına karar vermeden önce görüntü kalitesini taramak.',
      ],
    },
    {
      type: 'title',
      text: 'Alet İzi Görüntüleri Çevrimiçi Nasıl Karşılaştırılır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bilinen bir <strong>test izi</strong> görüntüsü ve bir <strong>şüpheli iz</strong> görüntüsü yükleyerek başlayın. Bilinen bir iz, genellikle belirli bir aletle kontrollü koşullar altında üretilir. Şüpheli iz ise bir olay yerinden, nesneden, kapı kasasından, kilitten veya kaynağı bilinmeyen diğer öğelerden kurtarılan izdir. Çalışma alanının amacı kimliğe otomatik olarak karar vermek değil; kullanıcının sürekliliği ve uyuşmazlığı inceleyebilmesi için iki görüntüyü yararlı bir görsel ilişkiye yerleştirmektir.',
    },
    {
      type: 'paragraph',
      html: 'Her iki görüntü de yüklendikten sonra, her iki tarafın daha fazlasını veya daha azını göstermek için bölünmüş sürgüyü kullanın. Yiv dizilimlerini aynı faza getirmek için yatay ofseti ayarlayın, ardından kamera açısını veya alet açısını telafi etmek için şüpheli görüntüyü döndürün. Yakınlaştırma, iki görüntünün farklı büyütmelerde çekildiği durumlarda yardımcı olur. Kontrast ve parlaklık belirsiz çizikleri veya sığ izleri ortaya çıkarmaya yardımcı olur, ancak bu ayarlamalar görüntünün görüntülenen görünümünü değiştirdiği için belgelenmelidir.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Çalışma alanının görmenize yardımcı olabileceği şeyler',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'İyi bir bölünmüş görünüm kurulumu, dikkatli bir hizalamadan sonra iki izin benzer görsel yapıyı paylaşıp paylaşmadığını incelemeyi kolaylaştırır.',
          points: ['Benzer sırt veya yiv yönü', 'Birkaç komşu özellik boyunca süreklilik', 'Düzeltilmesi gereken ölçek ve döndürme farklılıkları', 'İz kalitesinin incelenecek kadar güçlü olduğu alanlar', 'Karşılaştırmayı erken bitirebilecek bariz sınıf özelliği uyumsuzlukları'],
        },
        {
          title: 'Neyi kanıtlayamaz',
          icon: 'mdi:alert-circle-outline',
          description: 'Bu tarayıcı aracı doğrulanmış bir adli tanımlama sistemi değildir ve bu şekilde kullanılmamalıdır.',
          points: ['Otomatik aynı kaynak sonucu yok', 'Rastgele eşleşme olasılığı yok', 'Nüfus sıklığı tahmini yok', 'Orijinal kanıt incelemesinin yerini almaz', 'Laboratuvar kalite güvencesi veya akran değerlendirmesinin yerini almaz'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Kontrol', 'Neyi değiştirir', 'Neden önemlidir'],
      rows: [
        ['Bilinen/test görüntüsü yükleme', 'Kontrol veya referans izini yükler.', 'Bilinen taraf belgelenmiş bir test izinden veya eğitim örneğinden gelmelidir.'],
        ['Şüpheli görüntü yükleme', 'Kaynağı bilinmeyen izi yükler.', 'Bu taraf karşılaştırılabilir bir yön aramak için taşınır ve ayarlanır.'],
        ['Bölücü tutamaç', 'Her görüntünün ne kadarının görüneceğini değiştirir.', 'Hareketli bir bölücü, çizgilerin sınır boyunca görsel olarak devam edip etmediğini incelemeye yardımcı olur.'],
        ['Yatay ofset', 'Şüpheli görüntüyü sola veya sağa hareket ettirir.', 'Küçük yanal kaymalar karşılık gelen sırtları faza sokabilir veya fazdan çıkarabilir.'],
        ['Döndürme', 'Şüpheli görüntüyü döndürür.', 'Alet açısı, kamera açısı ve montaj, görüntüler arasında açısal sapma oluşturabilir.'],
        ['Yakınlaştırma', 'Görüntülenen büyütmeyi değiştirir.', 'Detayları yargılamadan önce farklı görüntü ölçekleri karşılaştırılabilir hale getirilmelidir.'],
        ['Kontrast ve parlaklık', 'Görüntülenen görünürlüğü ayarlar.', 'Düşük kontrastlı yivlerin görülmesi kolaylaşabilir, ancak ayarlamalar not edilmelidir.'],
        ['Görünümü dışa aktar', 'Mevcut hizalamanın bir PNG\'sini kaydeder.', 'Sınıf incelemesi, notlar, tartışma veya sınırlılıkları açıkça belirten raporlar için yararlıdır.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Görüntü kalitesi',
      title: 'Kötü bir görüntü iyi bir karşılaştırmayı imkansız hale getirebilir',
      html: 'Alet izi karşılaştırması büyük ölçüde görüntü kalitesine bağlıdır. Bulanıklık, parlama, sıkıştırma artıkları, güçlü gölgeler, perspektif bozulması ve çok kısa yiv dizilimleri yanıltıcı görsel izlenimler oluşturabilir. Eğer bir iz net bir şekilde yönlendirilemiyor, ölçeklenemiyor ve aydınlatılamıyorsa, uygun sonuç görüntünün anlamlı bir karşılaştırma için uygun olmadığı olabilir.',
    },
    {
      type: 'summary',
      title: 'İki izi karşılaştırmadan önce pratik kontrol listesi',
      items: [
        'Hangi görüntünün şüpheli iz, hangi görüntünün bilinen test izi olduğunu onaylayın.',
        'Her iki görüntünün de aynı genel iz tipini, alet temas alanını ve çalışma yüzeyi yönünü gösterdiğini kontrol edin.',
        'İzole tek çizgileri karşılaştırmaktan kaçının; yararlı bir uzunluk boyunca devam eden komşu detay dizilimlerini arayın.',
        'Kontrast ve parlaklığı muhafazakar bir şekilde kullanın ve görüntü iyileştirmenin ne zaman uygulandığını kaydedin.',
        'Hizalanmış görünümü kimlik kanıtı olarak değil, yalnızca neyin görüntülendiğinin bir göstergesi olarak dışa aktarın.',
      ],
    },
    {
      type: 'title',
      text: 'Bilinen ve Şüpheli Alet İzi Kanıtları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Şüpheli bir alet izi genellikle kapıdaki bir levye izi, teldeki bir kesik izi, metal üzerindeki bir kazıma veya daha yumuşak bir yüzeydeki bir sıkıştırma izi gibi bir olaya karışan bir öğeden kurtarılır. Bilinen bir iz, şüpheli bir aletten kontrollü veya belgelenmiş koşullar altında üretilir. Resmi adli tıp çalışmalarında, uzmanlar ince yiv detaylarına zaman ayırmadan önce sınıf özelliklerinin tutarlı olup olmadığını değerlendirir. Sınıf özellikleri uyuşmuyorsa, küçük bir bölgedeki mikroskobik benzerlik bir ilişkilendirmeyi desteklemek için yeterli değildir.',
    },
    {
      type: 'paragraph',
      html: 'Tarayıcı çalışma alanı kasıtlı olarak muhafazakardır. Görüntüleri hizalamanıza ve görsel özellikleri tartışmanıza yardımcı olur, ancak alet aşınmasını, alt sınıf özelliklerini, alt tabaka deformasyonunu, üretim izlerini, uzman eşiklerini, ölçüm belirsizliğini veya hata oranlarını modellemez. Sorumlu bir iş akışı, dışa aktarılan görüntüyü bir kimlik tespiti sonucu olarak değil, bir iletişim yardımı olarak ele alır.',
    },
    {
      type: 'proscons',
      title: 'Çevrimiçi alet izi görüntüsü karşılaştırmasının güçlü yönleri ve sınırlılıkları',
      items: [
        { pro: 'Masaüstü yazılımı yüklemeden iki görüntüyü yüklemek ve hizalamayı incelemek için hızlı bir yol.', con: 'Tarayıcı görünümü kalibre edilmiş bir adli karşılaştırma mikroskobu değildir.' },
        { pro: 'Bölünmüş görünüm karşılaştırması ve yönlendirmenin kullanıcının gördüklerini nasıl etkilediğini öğretmek için yararlıdır.', con: 'Görüntü iyileştirme görünürlüğü artırabilir ancak özelliklerin nasıl göründüğünü de değiştirebilir.' },
        { pro: 'Dışa aktarılan PNG görünümleri notlar, tartışmalar ve görsel açıklamalar için yararlıdır.', con: 'Dışa aktarılan görünüm tam kanıt bağlamını, meta verileri veya zincirleme muhafaza sürecini korumaz.' },
        { pro: 'Yalnızca sentetik izler yerine gerçek kullanıcı tarafından yüklenen görüntülerle çalışır.', con: 'Araç, iki izin aynı aletten gelip gelmediğini belirleyemez.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Şüpheli iz', definition: 'Kaynağı bilinmeyen bir nesneden veya olay yerinden kurtarılan iz.' },
        { term: 'Bilinen test izi', definition: 'Şüpheli izle karşılaştırmak için belirli bir aletle yapılan kontrollü iz.' },
        { term: 'Yiv (Striation)', definition: 'Bir alet yüzeyi başka bir malzeme üzerinde kaydığında oluşan mikroskobik çizgi veya sırt.' },
        { term: 'Sınıf özellikleri', definition: 'Bıçak genişliği, genel şekil veya alet tipi gibi bir alet grubu tarafından paylaşılan özellikler.' },
        { term: 'Bireysel özellikler', definition: 'Üretim, kullanım, hasar veya aşınmadan kaynaklanabilecek ince yüzey özellikleri.' },
        { term: 'Alt sınıf özellikleri', definition: 'Üretim süreçleri nedeniyle bir alet alt grubu tarafından paylaşılan özellikler; kaynak yorumlamasını karmaşıklaştırabilir.' },
        { term: 'Uygunluk', definition: 'Bir izin, karşılaştırmayı desteklemek için yeterli kalite ve miktarda detay içerip içermediğine dair karar.' },
      ],
    },
    {
      type: 'tip',
      title: 'Bu sayfanın yanıtlamak üzere tasarlandığı iyi arama terimleri',
      html: 'Bu tür bir çalışma alanı arayan kullanıcılar sıklıkla <strong>çevrimiçi alet izi karşılaştırma mikroskobu</strong>, <strong>adli yiv karşılaştırma</strong>, <strong>bilinen ve şüpheli alet izi</strong>, <strong>görüntülerden alet izlerini karşılaştırma</strong> ve <strong>adli karşılaştırma mikroskobu simülatörü</strong> gibi ifadeleri ararlar. Sayfa bu gerçek görevler etrafında oluşturulmuştur: yükleme, hizalama, inceleme, belgeleme ve sınırlılıkları anlama.',
    },
    {
      type: 'table',
      headers: ['Yaygın kullanıcı sorusu', 'Kısa cevap'],
      rows: [
        ['Kendi alet izi görüntülerimi yükleyebilir miyim?', 'Evet. Araç, kullanıcı tarafından yüklenen bilinen ve şüpheli görüntüler etrafında tasarlanmıştır.'],
        ['Uygulama her iki izin eşleşip eşleşmediğine karar veriyor mu?', 'Hayır. Yalnızca görsel hizalamayı destekler ve adli bir kaynak sonucu çıkarmaz.'],
        ['Şüpheli görüntü neden her ikisi yerine hareket ediyor?', 'Bilinen tarafı sabit tutmak, şüpheli görüntünün nasıl ayarlandığını belgelemeyi kolaylaştırır.'],
        ['Ateşli silah veya kartuş izleri için kullanabilir miyim?', 'Görüntü hizalama kavramlarını göstermeye yardımcı olabilir, ancak ateşli silah ve kartuş karşılaştırması disipline özgü prosedürler ve doğrulanmış inceleme gerektirir.'],
        ['Dışa aktarılan PNG\'yi notlarıma dahil edebilir miyim?', 'Evet, görsel ayarlama kontrolleriyle üretilmiş açıklayıcı bir görünüm olarak açıkça tanımlandığı sürece.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Adli uyarı',
      title: 'Alet izi karşılaştırmalarını tanımlarken dikkatli bir dil kullanın',
      html: 'Görsel bir hizalamayı kanıtların desteklediğinden daha güçlü bir sonuca dönüştürmekten kaçının. Uygun dil yargı yetkisine, laboratuvar politikasına, doğrulamaya, görüntü kalitesine, uzman incelemesine ve vaka bağlamına bağlıdır. Bu çevrimiçi araç, bir aleti bireyselleştirmek için doğrulanmış bir yöntem olarak değil, görsel bir karşılaştırma yardımı olarak tanımlanmalıdır.',
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
