import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kan-lekesi-modeli-koken-analizoru';
const title = '3D Kan Lekesi Modeli Koken Analizörü';
const description = 'Dikey bir düzlemde eliptik kan lekelerini modelleyin, çarpma açılarını tahmin edin ve etkileşimli bir 3D sahnede yansıtılan yörüngeleri görselleştirin.';

const howTo = [
  { name: 'Lekeleri girin veya ayarlayın', text: 'Her bir lekenin konumunu, genişliğini, uzunluğunu ve uzun eksen yönünü tanımlamak için tabloyu veya 2D yüzeyi kullanın.' },
  { name: 'Çarpma açılarını inceleyin', text: 'Hesaplayıcı, arksinüs ilişkisini kullanarak genişlik/uzunluk oranından çarpma açısını tahmin eder.' },
  { name: '3D yakınsamayı denetleyin', text: 'Yansıtılan yörüngeleri ve tahmini köken küresini karşılaştırmak için görüş alanını döndürün.' },
  { name: 'Belirsizliği kontrol edin', text: 'Yayılma değerini pratik bir uyarı göstergesi olarak kullanın: geniş çizgi ayrımı, çizilen kökenin daha az kararlı olduğu anlamına gelir.' },
];

const faq = [
  { question: 'Bir tarayıcı aracı kan dökülmesinin gerçek kaynağını belirleyebilir mi?', answer: 'Hayır. Geometrik ilişkileri öğretebilir ve ön değerlendirme yapabilir, ancak vaka sonuçları doğrulanmış yöntemler, olay yeri dokümantasyonu, ölçek kalibrasyonu ve nitelikli kan lekesi modeli analizi gerektirir.' },
  { question: 'Çarpma açısı neden genişlik ve uzunluktan hesaplanır?', answer: 'İdeal bir eliptik leke için çarpma açısının sinüsü, genişliğin uzunluğa bölünmesiyle tahmin edilir. Gerçek lekeler yüzey dokusu, akış, transfer veya ölçüm hatası nedeniyle bozulabilir.' },
  { question: '3D köken küresi neyi temsil ediyor?', answer: 'Yansıtılan yörünge çizgileri arasındaki en küçük kareler yakınsama tahminidir, garantili bir nokta kaynak değildir.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Metrik',
    imperial: 'İmparatorluk',
    unitsLabel: 'Birimler',
    addStain: 'Leke ekle',
    reset: 'Sıfırla',
    surface: 'Çarpma yüzeyi',
    viewport3dLabel: '3D yörünge görünümü',
    stainLabel: 'Leke',
    table: 'Ölçümler',
    origin: 'Tahmini köken',
    spread: 'Çizgi yayılması',
    confidence: 'Güven düzeyi',
    impact: 'Çarpma açısı',
    high: 'Yüksek',
    medium: 'Orta',
    low: 'Düşük',
    x: 'X',
    y: 'Y',
    width: 'Genişlik',
    length: 'Uzunluk',
    rotation: 'Dönme',
    remove: 'Kaldır',
    cm: 'cm',
    inch: 'inç',
    degree: 'derece',
    rotateHint: 'Rekonstrüksiyonu döndürmek için 3D görünümü sürükleyin.',
    disclaimer: 'Yalnızca eğitim amaçlı rekonstrüksiyon. Doğrulanmış olay yeri ölçümleri ve belgelenmiş belirsizlikle yorumlayın.',
  },
  seo: [
    { type: 'title', text: '3D Kan Lekesi Modeli Koken Analizörü Nasıl Çalışır', level: 2 },
    { type: 'paragraph', html: 'Bir kan lekesi modeli köken analizörü, kullanıcıların kan lekesi modeli analizindeki temel geometrik sorulardan birini keşfetmesine yardımcı olur: <strong>damlacıklar bir yüzeye çarptığında kan kaynağı uzayda nerede bulunuyor olabilirdi?</strong> Bu araç, lekeleri dikey bir düzlemde elips olarak modeller, her bir genişlik/uzunluk oranından bir çarpma açısı hesaplar, yörüngeleri geriye doğru bir 3D sahneye yansıtır ve pratik bir yakınsama bölgesi tahmin eder.' },
    { type: 'diagnostic', variant: 'warning', title: 'Adli tıp uyarısı', html: 'Elde edilen sonuç bir rekonstrüksiyon yardımıdır, vaka kararı değildir. Gerçek lekeler hedef dokusu, uydu lekeler, pıhtılaşma, akış, silinme, transfer, perspektif hatası ve eksik ölçek belgelendirmesinden etkilenebilir.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(G/U)', label: 'Çarpma açısı formülü' },
      { value: '3+', label: 'Önerilen bağımsız leke sayısı' },
      { value: '3D', label: 'Yörünge yakınsama alanı' },
    ] },
    { type: 'title', text: 'Çarpma Açısı Formülü', level: 3 },
    { type: 'paragraph', html: 'Basit bir eliptik leke için çarpma açısı genellikle <strong>arcsin(genişlik / uzunluk)</strong> olarak tahmin edilir. Bu nedenle, 1 cm genişliğinde ve 2 cm uzunluğunda ölçülen bir leke 30 derecelik bir çarpma açısı üretir. Bu ilişki yararlıdır çünkü düz bir izi yörünge yüksekliğine dönüştürür; ancak ölçülen lekenin temsilci olduğunu ve bozulmadığını varsayar.' },
    { type: 'code', ariaLabel: 'Çarpma açısı hesabı', code: 'çarpma açısı = arcsin(leke genişliği / leke uzunluğu)\nörnek: arcsin(1 cm / 2 cm) = 30 derece' },
    { type: 'paragraph', html: 'Bu, <em>kan lekesi çarpma açısı hesaplayıcı</em>, <em>kan sıçraması çarpma açısı formülü</em> ve <em>kan lekesi yörüngesi nasıl hesaplanır</em> gibi sorguların arkasındaki yaygın bir arama amacıdır. Önemli olan nokta, formülün rekonstrüksiyonun yalnızca bir bölümüne yanıt vermesidir. Hedef yüzeye göre hareket yüksekliğini tahmin eder; kendi başına kaynağı, mekanizmayı, silahı veya olay sırasını tanımlamaz.' },
    { type: 'title', text: 'Verileri Girmeden Önce Lekeler Nasıl Ölçülür', level: 3 },
    { type: 'paragraph', html: 'En yararlı girdiler kalibre edilmiş, dik çekilmiş fotoğraflardan veya doğrudan olay yeri ölçümlerinden gelir. Lekelerin ana eliptik gövdesini ölçün; uyduları, kuyrukları, akış izlerini veya ikincil lekeleri ölçmeyin. Genişlik kısa eksen boyunca, uzunluk ise uzun eksen boyunca alınmalıdır. Dönme, hedef düzlemdeki uzun eksen yönünü takip etmelidir. Uzunluk, genişlik veya yönelimdeki küçük hatalar, yansıtılan yörüngeyi 3D uzayda uzatıldığında büyük miktarda kaydırabilir.' },
    { type: 'table', headers: ['Ölçüm kalitesi', 'Olası etki', 'Pratik yanıt'], rows: [
      ['Uzun eksen nettir', 'Dönme daha güvenilirdir', 'Görünür uzun ekseni kullanın ve yönelim yöntemini belgeleyin.'],
      ['Genişlik veya uzunluk bozuktur', 'Çarpma açısı sapmalı olabilir', 'Belirsizliği işaretleyin ve komşu lekelerle karşılaştırın.'],
      ['Az sayıda leke yakınsıyor', 'Köken tahmini kararsız hale gelir', '3D kökeni yorumlamadan önce bağımsız lekeler ekleyin.'],
      ['Ölçek eksik', 'Tüm mesafeler yalnızca örnekleme haline gelir', 'Kalibrasyon olmadan gerçek dünya köken koordinatlarını raporlamayın.'],
    ] },
    { type: 'title', text: '3D Yakınsamayı Okumak', level: 3 },
    { type: 'paragraph', html: 'Bu araçtaki köken küresi, yansıtılan tüm yörünge çizgilerine en yakın duran nokta olarak hesaplanır. Çizgiler birbirine yakın geçtiğinde, yayılma değeri küçülür ve güven düzeyi artar. Çizgiler saptığında, küre yine de görünür ancak kesin bir kaynak yerine zayıf bir en küçük kareler uzlaşması olarak okunmalıdır.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Yakınsama alanı', description: 'Hedef düzlemde iki boyutlu bir tahmin, genellikle önden bakıldığında uzun eksen yönlerinin nerede birleştiğini görmek için kullanılır.', points: ['İlk değerlendirme taraması için yararlıdır', 'Tek başına dikey yüksekliği temsil etmez'] },
      { title: 'Köken alanı veya hacmi', description: 'Yörüngeleri uzaya yansıtmak için düzlemdeki yönü çarpma açısıyla birleştiren üç boyutlu bir tahmin.', highlight: true, points: ['Olası kaynak yüksekliğini açıklar', 'Ölçüm ve açı belirsizliğine duyarlıdır'] },
    ] },
    { type: 'paragraph', html: 'Kullanıcılar genellikle tek bir kesin koordinat bekleyerek <em>kan sıçraması köken noktası hesaplayıcı</em> araması yaparlar. Pratikte, iyi bir yorumlama daha ihtiyatlıdır. Köken, birden fazla yörünge tarafından desteklenen bir bölge olarak daha iyi anlaşılır. Çizilen çizgiler sıkı bir demet oluşturuyorsa model daha tutarlıdır. Geniş bir hacimden geçiyorlarsa, rekonstrüksiyon size ölçümlerin, leke seçiminin veya varsayımların gözden geçirilmesi gerektiğini söylüyor demektir.' },
    { type: 'title', text: 'Yörüngelerin Birleşmeme Nedenleri', level: 3 },
    { type: 'proscons', title: 'Güçlü girdiler vs zayıf girdiler', items: [
      { pro: 'Net uzun eksenleri olan birkaç iyi biçimlendirilmiş eliptik leke', con: 'Sadece bir veya iki leke veya bir teoriye uyduğu için seçilen lekeler' },
      { pro: 'Çarpma yüzeyine dik olarak alınan kalibre edilmiş ölçümler', con: 'Eğik fotoğraflar, bilinmeyen ölçek veya kopyalanmış ekran görüntüleri' },
      { pro: 'Aynı olay mekanizmasından gelen bağımsız lekeler', con: 'Karışık pasif damlalar, transfer lekeleri, savrulma izleri, akış veya ikincil çarpma modelleri' },
    ] },
    { type: 'paragraph', html: 'Kötü bir yakınsama, aracın otomatik olarak yanlış olduğu anlamına gelmez. Lekelerin aynı modele ait olmadığı, fotoğrafın perspektif bozulmasına uğradığı, uzun eksenin yanlış okunduğu, lekenin temiz bir elips olmadığı veya fiziksel olayın basit bir nokta kaynak modelinden daha karmaşık olduğu anlamına gelebilir. Bu değerli bir bilgidir. Bir rekonstrüksiyon aracı, anlaşmazlığı güvenli görünen bir sayının arkasına saklamak yerine ortaya çıkarmalıdır.' },
    { type: 'title', text: 'Bu Araç Ne İçin İşe Yarar', level: 3 },
    { type: 'list', items: [
      '<strong>Birden fazla leke kullanın:</strong> üç veya daha fazla bağımsız leke daha anlamlı bir yakınsama tahmini sağlar.',
      '<strong>Yayılmayı izleyin:</strong> yüksek yayılma değeri, çizgilerin 3D de yakından uyuşmadığı konusunda uyarır.',
      '<strong>Ölçeği koruyun:</strong> santimetre veya inç değerleri kalibre edilmiş fotoğraflardan veya olay yeri ölçümlerinden gelmelidir.',
      '<strong>Eğitimi raporlamadan ayırın:</strong> bu görselleştirme, resmi incelemeden önce eğitim, planlama ve açıklama için en iyisidir.',
    ] },
    { type: 'card', title: 'En iyi çalışma akışı', html: 'Küçük bir yüksek kaliteli leke seti çizerek başlayın. 2D uzun eksen yönlerinin görsel olarak mantıklı olup olmadığını kontrol edin. Ardından 3D yörüngeleri inceleyin, yayılmayı not edin ve rekonstrüksiyonu hangi lekenin yönlendirdiğini görmek için her seferinde bir ölçümü değiştirin. Bu duyarlılık kontrolü genellikle ham köken koordinatından daha yararlıdır.' },
    { type: 'title', text: 'Ne Zaman Bir Kan Lekesi Köken Tahminine Güvenilmez', level: 3 },
    { type: 'paragraph', html: 'Lekeler aşırı derecede bozulduğunda, hedef yüzey kavisli veya düzensiz olduğunda, model transfer veya fırlatılan nefes kanı içerdiğinde, yüzey hareket ettirildiğinde veya olay yerinde güvenilir bir ölçek bulunmadığında basit bir köken tahminine güvenmeyin. Aynı ihtiyat, lekeler farklı mekanizmalardan veya olayın farklı anlarından geldiğinde de geçerlidir. Giriş modeli geometrik rekonstrüksiyon için uygun değilse, temiz görünen bir 3D görselleştirme yine de yanıltıcı olabilir.' },
    { type: 'glossary', items: [
      { term: 'Çarpma açısı', definition: 'Damlacık yolu ile hedef yüzey arasındaki tahmini açı, genellikle eliptik bir lekenin genişlik/uzunluk oranından hesaplanır.' },
      { term: 'Yörünge çizgisi', definition: 'Bir lekeden üç boyutlu uzaya doğru olası bir geriye dönük hareket yolunu gösteren yansıtılmış çizgi.' },
      { term: 'Yakınsama alanı', definition: 'Leke yönlerinin hedef düzlemde bakıldığında kesiştiği yaklaşık bölge.' },
      { term: 'Köken alanı', definition: 'Birden fazla yansıtılan yörüngeye dayanarak kanın kaynaklanmış olabileceği yaklaşık üç boyutlu bölge.' },
    ] },
    { type: 'summary', title: 'En iyi kullanım', items: [
      'Yörünge geometrisini anlamak ve ölçüm duyarlılığını test etmek için analizörü kullanın.',
      'Bir rekonstrüksiyona güvenmeden önce köken küresini yayılma değeriyle karşılaştırın.',
      'Görselleştirmeyi tek başına bir adli tıp görüşü olarak kullanmayın.',
    ] },
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
