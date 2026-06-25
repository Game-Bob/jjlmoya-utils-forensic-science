import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'adli-goruntu-metadata-ve-ozgunluk-analizoru';
const title = 'Adli Görüntü Metadata ve Özgünlük Analizörü';
const description = 'Görüntü başlıklarını, EXIF çekim ayrıntılarını, GPS koordinatlarını, düzenleme yazılımı izlerini ve ham baytları tarayıcıda yerel olarak inceleyin.';

const howTo = [
  { name: 'Orijinal delili koruyun', text: 'Adli kopya üzerinden çalışın ve kaynak dosyayı ile kriptografik özetini bu tarayıcı aracının dışında saklayın.' },
  { name: 'Görüntüyü yerel olarak yükleyin', text: 'Bir JPEG veya PNG sürükleyin ya da seçin. Dosya tarayıcı belleğinde okunur ve yüklenmez.' },
  { name: 'Metadata ve konumu gözden geçirin', text: 'Çekim zamanı, kamera kimliği, yazılım ve GPS alanlarını olay anlatımı ve edinim kayıtlarıyla karşılaştırın.' },
  { name: 'Bütünlük sinyallerini yorumlayın', text: 'Düzenleme imzaları ve eksik alanları manipülasyon kanıtı değil, soruşturma ipucu olarak değerlendirin.' },
  { name: 'Onaltılık önizlemeyi inceleyin', text: 'Vurgulanan başlık ve metadata bölgelerini kullanarak kapsayıcı yapısını tanıyın ve daha derin inceleme için ofsetleri belgeleyin.' },
];

const faq = [
  { question: 'Metadata bir fotoğrafın özgün olduğunu kanıtlayabilir mi?', answer: 'Hayır. Metadata kaldırılabilir, kopyalanabilir veya değiştirilebilir. Kimlik doğrulama; dosya yapısı, köken, özetler, görsel inceleme, sıkıştırma analizi ve doğrulanmış adli yöntemlerin birlikte kullanılmasını gerektirir.' },
  { question: 'Adobe veya GIMP imzası kötü niyetli düzenlemeyi kanıtlar mı?', answer: 'Hayır. Yalnızca bir yazılımın metadata yazmış veya dosyayı dışa aktarmış olabileceğini gösterir. Meşru renk düzeltme, editoryal iş akışı veya delil hazırlığı aynı izi bırakabilir.' },
  { question: 'Görüntü yükleniyor mu?', answer: 'Hayır. Analiz tarayıcı belleğinde yapılır. Yine de hassas materyali herhangi bir yazılımda açmadan önce kuruluşunuzun delil işleme politikasını izleyin.' },
  { question: 'GPS verileri neden eksik olabilir?', answer: 'Kamera GPS desteklemiyor olabilir, konum kaydı kapalı olabilir, bir platform metadata\'yı kaldırmış olabilir veya dosya yeniden kodlanmış olabilir.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacy: 'Yalnızca yerel ikili inceleme',
    dropTitle: 'Görüntüyü delil masasına yerleştirin',
    dropHint: 'Buraya bir JPEG veya PNG bırakın ya da dosya seçin. Hiçbir şey yüklenmez.',
    chooseFile: 'Görüntü seç',
    replaceFile: 'Görüntüyü değiştir',
    waiting: 'Delil bekleniyor',
    metadata: 'Çekim metadata\'sı',
    integrity: 'Bütünlük sinyalleri',
    location: 'Kaydedilen konum',
    hex: 'Onaltılık delil penceresi',
    hexHint: 'İlk 512 bayt · camgöbeği başlık · kehribar metadata · nötr görüntü verisi',
    noData: 'Okunabilir değer yok',
    noGps: 'Okunabilir GPS koordinatı bulunamadı.',
    mapLink: 'Koordinatları OpenStreetMap\'te aç',
    score: 'Sezgisel güven',
    disclaimer: 'Yüksek puan özgünlüğü kanıtlamaz. Orijinali koruyun, kriptografik özetler hesaplayın ve vaka sonuçları için doğrulanmış laboratuvar iş akışları kullanın.',
    fileName: 'Dosya',
    fileSize: 'Boyut',
    fileType: 'Kapsayıcı',
    camera: 'Kamera',
    captured: 'Çekildi',
    software: 'Yazılım',
    coordinates: 'Koordinatlar',
    statusNoObvious: 'Belirgin düzenleme göstergesi yok',
    statusReview: 'İnceleme önerilir',
    statusEditing: 'Düzenleme imzası tespit edildi',
    processing: 'İkili delil okunuyor...',
    loadError: 'Dosya analiz edilemedi. Geçerli bir JPEG veya PNG görüntüsü seçin.',
  },
  seo: [
    { type: 'title', text: 'Görüntü metadata\'sı ve özgünlük göstergeleri nasıl analiz edilir', level: 2 },
    { type: 'paragraph', html: 'Adli görüntü metadata analizörü; araştırmacıların, gazetecilerin, hukuk ekiplerinin, uyum denetçilerinin ve araştırmacıların <strong>görüntü metadata\'sı bir fotoğraf hakkında gerçekten ne söyleyebilir?</strong> sorusuna cevap bulmasına yardımcı olur. Metadata, çekim, konum, yazılım işlemesi ve dosya yapısı hakkında yararlı ipuçları sunabilir; ancak tek başına bir doğruluk makinesi değildir. En büyük değeri ön elemede ortaya çıkar.' },
    { type: 'paragraph', html: 'Bu tarayıcı aracı, ham EXIF dökümünden daha fazlasını isteyen kullanıcılar için tasarlanmıştır. Seçilen JPEG veya PNG\'yi yerel olarak okur ve kamera alanlarını, çekim zaman damgalarını, yazılım etiketlerini, koordinatları, kapsayıcı ipuçlarını ve dosyanın ilk baytlarını tek yerde gösterir. Bu da <em>fotoğraf özgünlük kontrolü</em>, <em>EXIF metadata analizi</em> ve <em>bir görüntünün düzenlenip düzenlenmediği nasıl anlaşılır</em> gibi arama niyetlerine karşılık gelir.' },
    { type: 'paragraph', html: 'En önemli ilke, sonucun hüküm olarak değil bağlam olarak okunması gerektiğidir. Bir dosya yararlı metadata içerebilir ve yine de yanıltıcı olabilir. Bu nedenle metadata; köken, özetler, tanık anlatımları ve doğrulanmış inceleme yöntemleriyle karşılaştırılması gereken bir kanıt katmanı olarak ele alınmalıdır.' },
    { type: 'title', text: 'EXIF\'in Söyleyebilecekleri ve Söyleyemeyecekleri', level: 3 },
    { type: 'paragraph', html: 'EXIF (Exchangeable Image File Format) metadata\'sı bir fotoğraf makinesinin çekim anında dosyaya kaydettiği teknik bilgiler bütünüdür. Kamera modeli ve üreticisi, çekim tarihi ve saati, enstantane hızı, diyafram açıklığı, ISO değeri, odak uzaklığı, flaş kullanımı, beyaz dengesi ve çözünürlük gibi parametreleri içerir. Bu alanlar bir fotoğrafın hangi koşullar altında çekildiğine dair değerli ipuçları sağlar. Ancak EXIF metadata\'sının sınırlamalarını anlamak da en az içerdiği bilgiler kadar önemlidir. EXIF alanları standart metadata düzenleme araçlarıyla kolayca değiştirilebilir, kopyalanabilir veya tamamen silinebilir. Bir fotoğrafın EXIF verilerinin bozulmamış olması, o fotoğrafın orijinal olduğu anlamına gelmez. Bu nedenle EXIF analizi, her zaman diğer adli yöntemlerle ve bağımsız kanıtlarla desteklenmesi gereken bir başlangıç noktasıdır.' },
    { type: 'title', text: 'GPS Metadata\'yı Sorumlu Bir Şekilde Okuma', level: 3 },
    { type: 'paragraph', html: 'GPS metadata\'sı bir görüntünün çekildiği coğrafi konumu enlem ve boylam koordinatları olarak kaydeder. Bazı kameralar ve akıllı telefonlar ayrıca yükseklik, yön ve GPS hassasiyet bilgilerini de ekler. Bu veriler bir fotoğrafın nerede çekildiğini harita üzerinde doğrulamak için kritik öneme sahiptir. GPS metadata\'sını sorumlu bir şekilde okumak, bu verileri mutlak gerçek olarak değil, doğrulanması gereken bir ipucu olarak ele almayı gerektirir. Koordinatlar yanlış olabilir, kasıtlı olarak değiştirilmiş olabilir veya GPS sinyali alınamayan bir ortamda çekim yapıldığı için hatalı kaydedilmiş olabilir. Ayrıca, mahremiyet ve güvenlik açısından, GPS metadata\'sı hassas konum bilgilerini ifşa edebileceğinden, delil paylaşımı öncesinde bu alanların temizlenmesi veya maskelenmesi değerlendirilmelidir.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

