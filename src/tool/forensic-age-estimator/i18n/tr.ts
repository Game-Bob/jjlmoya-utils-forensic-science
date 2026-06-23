import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dis-iskelet-ucuncu-azi-yasi-tahmin-edici';
const title = 'Diş, İskelet ve Üçüncü Azı Yaşı Tahmin Edici';
const description = 'Diş gelişimi, iskelet olgunluğu ve üçüncü azı dişi göstergelerinden adli yaş aralığı tahmini yaparak triyaj ve vaka sınıflandırmasına yardımcı olur.';

const howTo = [
  {
    name: 'Kanıt vurgusunu seçin',
    text: 'Dengeli bir triyaj için "Karma kanıt", diş bulguları daha güçlü olduğunda "Diş önceliği" veya radyografik iskelet göstergeleri ana veri kaynağı olduğunda "İskelet önceliği" seçeneğini kullanın.',
  },
  {
    name: 'Her olgunluk göstergesini puanlayın',
    text: 'Aşamaları 0 ile 8 arasında derecelendirin. Düşük aşamalar erken gelişimi, orta aşamalar ergenlik dönemi olgunlaşmasını, yüksek aşamalar ise olgun veya olgunluğa yakın bulguları temsil eder.',
  },
  {
    name: 'Sadece merkezi yaşı değil, aralığı değerlendirin',
    text: 'Minimum, olası ve maksimum yaş değerlerini bir bütün olarak dikkate alın. Biyolojik gelişim bireyler arasında değişkenlik gösterdiğinden, adli yaş değerlendirmesi daima bir aralık olarak ifade edilmelidir.',
  },
  {
    name: 'Göstergeler arasındaki tutarsızlıkları kontrol edin',
    text: 'Diş, iskelet ve üçüncü azı dişine ait aşamalar farklı yaş aralıklarına işaret ediyorsa, sonucu "keşifsel" (exploratory) olarak değerlendirin ve nihai sonuca varmadan önce daha kapsamlı kanıtlar toplayın.',
  },
];

const faq = [
  {
    question: 'Bu adli yaş tahmin aracı yasal erginliği belirleyebilir mi?',
    answer: 'Hayır. Bu araç eğitim ve triyaj amaçlı bir tarama hesaplayıcısıdır. Yasal yaş tespiti; doğrulanmış yerel protokoller, yetkili bilirkişi incelemeleri, resmî kimlik belgeleri ve ilgili yargı yetkisine özgü standartlar gerektirir.',
  },
  {
    question: 'Sonuç neden bir yaş aralığı olarak gösteriliyor?',
    answer: 'Diş sürmesi, iskelet kaynaşması ve üçüncü azı dişi gelişimi; soy, beslenme, sağlık durumu, cinsiyet, referans popülasyonu ve görüntüleme yöntemine göre farklılık gösterir. Bir aralık sunmak, tek bir kesin yaş belirtmekten daha bilimsel ve dürüst bir yaklaşımdır.',
  },
  {
    question: 'Karma kanıt ne anlama geliyor?',
    answer: 'Karma kanıt modu; diş gelişimi, iskelet olgunluğu ve üçüncü azı dişi aşamalarını dengeli bir şekilde değerlendirir. Belirli bir göstergenin diğerlerinden belirgin şekilde daha güvenilir olmadığı durumlarda bu modu kullanın.',
  },
  {
    question: 'Üçüncü azı dişleri her vaka için güvenilir midir?',
    answer: 'Üçüncü azı dişleri geç ergenlik ve genç yetişkinlik dönemlerinde faydalıdır ancak değişkenlik gösterirler. Diş eksikliği (agenezi), patolojiler, popülasyon farklılıkları ve radyografik görüntü kalitesi bu verilerin değerini kısıtlayabilir.',
  },
  {
    question: 'Bu araç gerçek vaka çalışmalarında kullanılmalı mı?',
    answer: 'Yalnızca ön bilgi sağlayan bir yardımcı araç olarak kullanılmalıdır. Gerçek vaka çalışmalarında; doğrulanmış yöntemler, kalibre edilmiş referans verileri, bağımsız uzman incelemesi ve belirsizlikler ile kısıtlamaların şeffaf bir şekilde raporlanması zorunludur.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Adli vaka panosu',
    controls: 'Adli yaş kontrolleri',
    results: 'Adli yaş sonuçları',
    maturityProfile: 'Dinamik olgunluk profili',
    screeningOnly: 'Tarama tahmini',
    evidenceType: 'Kanıt vurgusu',
    mixedEvidence: 'Karma kanıt',
    dentalPriority: 'Diş önceliği',
    skeletalPriority: 'İskelet önceliği',
    dentalStage: 'Diş gelişim aşaması',
    epiphysealStage: 'Epifiz kaynaşma aşaması',
    thirdMolarStage: 'Üçüncü azı aşaması',
    minimumAge: 'Minimum',
    likelyAge: 'Olası',
    maximumAge: 'Maksimum',
    maturityScore: 'Olgunluk puanı',
    stageLabel: 'Aşama',
    ageUnit: 'yıl',
    dentalShort: 'Diş',
    boneShort: 'Kemik',
    molarShort: 'Azı',
    dentalStageHelp: 'Taç, kök ve apeks (kök ucu) oluşumu.',
    epiphysealStageHelp: 'Büyüme plağı kapanması ve iskelet kaynaşması.',
    molarStageHelp: 'Üçüncü azı mineralizasyonu ve kök ucu kapanması.',
    dentalStage0: 'Yok',
    dentalStage1: 'Tüberkül',
    dentalStage2: 'Taç',
    dentalStage3: 'Kök başlangıcı',
    dentalStage4: 'Kök yarı',
    dentalStage5: 'Kök uzun',
    dentalStage6: 'Apeks dar',
    dentalStage7: 'Apeks kapanıyor',
    dentalStage8: 'Tamamlandı',
    epiphysealStage0: 'Açık',
    epiphysealStage1: 'Kenar',
    epiphysealStage2: 'Daralma',
    epiphysealStage3: 'Köprü',
    epiphysealStage4: 'Yarı kaynaşmış',
    epiphysealStage5: 'Çoğunlukla kaynaşmış',
    epiphysealStage6: 'Sadece çizgi',
    epiphysealStage7: 'Neredeyse kapalı',
    epiphysealStage8: 'Kapalı',
    molarStage0: 'Yok',
    molarStage1: 'Tüberkül',
    molarStage2: 'Taç başlangıcı',
    molarStage3: 'Taç tam',
    molarStage4: 'Kök başlangıcı',
    molarStage5: 'Kök yarı',
    molarStage6: 'Kök uzun',
    molarStage7: 'Apeks kapanıyor',
    molarStage8: 'Tamamlandı',
    confidenceexploratory: 'Keşifsel',
    confidencemoderate: 'Orta',
    confidencestrong: 'Güçlü',
    noteTriage: 'Yasal yaş tespiti olarak değil, triyaj tahmini olarak kullanın.',
    noteFinalAssessment: 'Nihai adli yaş değerlendirmesi; radyoloji, diş muayenesi, belgelenmiş tıbbi geçmiş ve yargı yetkisine özgü standartları birleştirmelidir.',
    noteWideInterval: 'Göstergeler dört yıldan fazla farklılık gösterdiğinden aralık genişletilmiştir.',
  },
  seo: [
    {
      type: 'title',
      text: 'Adli Yaş Tahmin Edici: Diş, İskelet ve Üçüncü Azı Tarama Hesaplayıcısı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Resmi bir değerlendirmeden önce biyolojik olgunluk kanıtlarını düzenlemenin hızlı ve şeffaf bir yoluna ihtiyaç duyduğunuzda bu adli yaş tahmin ediciyi kullanın. Hesaplayıcı; diş gelişimi, epifiz kaynaşması ve üçüncü azı aşamasını birleştirerek tahmini bir yaş aralığı sunar. Bu araç; <strong>adli yaş tahmin hesaplayıcısı</strong>, <strong>diş yaşı değerlendirmesi</strong>, <strong>iskelet olgunluğu yaş tahmini</strong> ve <strong>üçüncü azı yaş tahmini</strong> gibi konularda arama yapan profesyonellerin ihtiyaçlarını karşılamak üzere tasarlanmıştır.',
    },
    {
      type: 'paragraph',
      html: 'Sonuçlar kasıtlı olarak <strong>minimum yaş, olası yaş ve maksimum yaş</strong> olarak ifade edilir. Biyolojik gelişim hızı kişiden kişiye değiştiğinden, tek bir kesin yaş belirtmek yanıltıcı olabilir. Beslenme, sağlık durumu, soy, cinsiyet, referans popülasyonu, görüntü kalitesi, patolojiler ve gözlemci değişkenliği sonucu etkileyebilir. Bu aracı yasal bir hüküm olarak değil, yapılandırılmış bir tarama desteği olarak ele alın.',
    },
    {
      type: 'title',
      text: 'Üç olgunluk göstergesinin anlamı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '0-8 arasındaki aşamalar, gelişimsel süreci özetleyen pratik göstergelerdir. Aşama 0, olgunluk kanıtının henüz olmadığını veya çok erken evrede olduğunu; aşama 8 ise tam veya tama yakın olgunluğu ifade eder. Bu aşamalar tek bir klinik yönteme bağlı değildir; diş, iskelet ve üçüncü azı verilerinin aralık tahminini nasıl değiştirdiğini karşılaştırmanıza olanak tanır.',
    },
    {
      type: 'table',
      headers: ['Gösterge', 'Açıklama', 'Kullanım Amacı', 'Dikkat Edilmesi Gerekenler'],
      rows: [
        ['Diş gelişimi', 'Üçüncü azı dışındaki dişlerin oluşumu ve sürmesi.', 'Çocuk ve ergenlerde diş olgunluğundan yaş tahmini.', 'Diş hastalıkları, çekimler ve popülasyon farklılıkları sonucu etkileyebilir.'],
        ['Epifiz kaynaşması', 'İskelet yapılarındaki büyüme plaklarının aşamalı kapanması.', 'Ergen ve genç erişkinlerde iskelet olgunluğundan yaş tahmini.', 'Kemiğe, cinsiyete, endokrin sağlığına ve görüntüleme yöntemine bağlıdır.'],
        ['Üçüncü azı aşaması', 'Yirmilik dişlerin oluşumu ve olgunlaşması.', 'Diğer dişler olgunlaştıktan sonra ergenlik sonu ve genç erişkinlik değerlendirmesi.', 'Yüksek değişkenlik; diş eksikliği ve gömülülük durumu önemlidir.'],
      ],
    },
    {
      type: 'title',
      text: 'Yaş aralığı nasıl yorumlanır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Üç yaş değerini bir bütün olarak değerlendirin. <strong>Olası yaş</strong>, seçilen kanıt türüne göre ağırlıklandırılmış merkezi tahmindir. <strong>Minimum</strong> ve <strong>maksimum</strong> değerler, pratikteki belirsizlik bandını gösterir. Göstergeler uyumlu olduğunda bu bant daralır; diş, iskelet ve üçüncü azı verileri çeliştiğinde bant genişler ve güven etiketi düşer.',
    },
    {
      type: 'table',
      headers: ['Sonuç Deseni', 'Anlamı', 'Önerilen Adım'],
      rows: [
        ['Dar aralık / Güçlü güven', 'Göstergeler uyumlu ve benzer gelişim aralığına işaret ediyor.', 'Kanıtları belgeleyin ve vakada daha resmi bir yöntem gerekip gerekmediğini değerlendirin.'],
        ['Orta düzey aralık', 'Bazı uyuşmazlıklar var veya ağırlıklandırma merkezi tahmini değiştiriyor.', 'Görüntü kalitesini ve aşama seçimini yeniden kontrol edin.'],
        ['Geniş keşifsel aralık', 'Göstergeler çelişkili veya farklı gelişim dönemlerini işaret ediyor.', 'Sadece bu tahmine güvenmeyin; daha iyi kayıtlar, ek görüntüleme veya uzman incelemesi isteyin.'],
      ],
    },
    {
      type: 'title',
      text: 'Diş, iskelet veya karma kanıt modunu seçme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Karma kanıt</strong>, tüm göstergeleri dengelediği için genel taramalarda varsayılan moddur. Diş gözlemleri tam, iyi belgelenmiş ve iskelet verilerinden daha güvenilir olduğunda <strong>diş önceliğini</strong> seçin. Radyografik iskelet bulguları en güçlü veri kaynağı olduğunda <strong>iskelet önceliğini</strong> seçin. Bu modlar zayıf veriyi güçlendirmez, yalnızca mevcut göstergelerin matematiksel ağırlığını değiştirir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Diş önceliği:</strong> Gelişimin açıkça evrelendirildiği ve üçüncü azı verilerinin mevcut olduğu durumlar.',
        '<strong>İskelet önceliği:</strong> Epifiz kaynaşmasının en iyi belgelenmiş olgunluk sinyali olduğu durumlar.',
        '<strong>Karma kanıt:</strong> Uzman görüşünden ziyade, dengeli bir ön değerlendirme hedeflendiğinde.',
        '<strong>Güven etiketi:</strong> Tahmini aşırı yorumlamadan önce uyuşmazlıkları fark etmek için izleyin.',
      ],
    },
    {
      type: 'title',
      text: 'Adli yaş tahmininin sınırları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yaş tahmini vaka dosyasını destekleyici bir veridir, kimliğin mutlak kanıtı değildir. Göç, koruma, cezai sorumluluk veya mağdur kimlik tespiti gibi durumlarda değerlendirme mutlaka multidisipliner olmalıdır. Sorumlu bir rapor; kullanılan yöntemi, referans popülasyonunu, görüntüleme kaynağını, uzmanın yetkinliğini ve sonuçtaki belirsizlikleri açıkça belirtmelidir.',
    },
    {
      type: 'paragraph',
      html: 'Bu araç <strong>eğitim, triyaj, protokol planlaması ve şeffaf iletişim</strong> amacıyla tasarlanmıştır. Yaş çıkarımlarında dikkatli olunması gerektiğini, çelişkili göstergelerin önemini ve 18 yaş gibi yasal eşiklerin yalnızca basit bir hesaplayıcıyla belirlenemeyeceğini hatırlatır.',
    },
    {
      type: 'title',
      text: 'Raporlama öncesi kontrol listesi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Veri kaynağını doğrulayın:</strong> Aşamaların diş muayenesi, panoramik röntgen, el-bilek görüntüsü, klavikula görüntülemesi veya başka bir protokol kaynaklı olup olmadığını not edin.',
        '<strong>Eksik/zayıf verileri belirtin:</strong> Eksik azı dişleri, düşük görüntü kalitesi, anomaliler raporda görünür olmalıdır.',
        '<strong>Geçerli yöntemleri kullanın:</strong> Yasal veya idari bir sonuç çıkarmadan önce bölgeye uygun diş veya iskelet yöntemlerini seçin.',
        '<strong>Belirsizliği raporlayın:</strong> Bir aralık sunun, uyuşmazlıkları açıklayın ve kesin kronolojik yaş belirten dilden kaçının.',
        '<strong>Uzman incelemesi isteyin:</strong> Kritik öneme sahip vakalar mutlaka adli diş hekimleri, radyologlar veya antropologlar tarafından incelenmelidir.',
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