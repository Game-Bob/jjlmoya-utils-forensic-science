import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'adli-antropoloji-biyolojik-cinsiyet-belirleme-kafatasi-pelvis-morfolojisi';
const title = 'Adli Antropoloji Cinsiyet Belirleyici';
const description = 'Bayes olasılık modeli kullanarak kafatası ve pelvis morfolojisi göstergelerinden biyolojik cinsiyeti tahmin edin.';

const howTo = [
  {
    name: 'Analiz edilecek anatomik bölgeyi seçin',
    text: 'Pelvis mi, kafatası mı yoksa her ikisini birden mi analiz edeceğinize karar verin. Her iki bölgenin değerlendirilmesi biyolojik cinsiyet sınıflandırmasının doğruluğunu ve güvenini artırır.',
  },
  {
    name: 'Her morfolojik özelliği değerlendirin',
    text: 'Kemik örneklerini inceleyin ve görsel kılavuzları referans alarak anahtar göstergeleri 1 (hiper-kadınsı) ila 5 (hiper-erkeksi) arasında derecelendirin.',
  },
  {
    name: 'Puanları Bayes motoruna girin',
    text: 'Her özellik için puanı girmek üzere kaydırıcıları kullanın. Sınıflandırıcı, erkek ve kadın kategorileri için son olasılığı otomatik olarak günceller.',
  },
  {
    name: 'Olasılık sonuçlarını yorumlayın',
    text: 'Nihai güven göstergesini, baskın cinsiyet sınıflandırmasını gözden geçirin ve biyolojik varyasyonları anlamak için adli tanı notlarını okuyun.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Pelvik cinsiyet tayininde Phenice yöntemi nedir?',
    answer: 'T. W. Phenice tarafından 1969 yılında yayınlanan Phenice yöntemi, üç spesifik pelvik özelliğe odaklanır: ventral ark, subpubik konkavite ve iskiopubik ramusun medial görünümü. İyi korunmuş iskelet kalıntılarına uygulandığında %95\'i aşan doğruluk oranlarıyla adli antropolojide en güvenilir morfolojik yöntemlerden biri olmaya devam etmektedir.',
  },
  {
    key: 'faq-2',
    question: 'Cinsiyet tahmini için neden pelvis kafatasına tercih edilir?',
    answer: 'Pelvis, kadınlarda doğum yapmaya yönelik fonksiyonel adaptasyonu yansıttığı için insan iskeletinin en belirgin cinsel dimorfizm gösteren kısmıdır. Evrimsel baskı, kadın pelvisini erkek pelvisine göre daha geniş, daha sığ ve daha geniş açılara sahip olacak şekilde şekillendirmiştir; kafatası dimorfizmi ise esas olarak genel vücut büyüklüğü ve kas gelişimi ile ilgilidir.',
  },
  {
    key: 'faq-3',
    question: 'Bayes sınıflandırıcısı cinsiyet olasılığını nasıl tahmin eder?',
    answer: 'Sınıflandırıcımız bir Bayes güncelleme modeli kullanır. Her iki cinsiyet için de %50\'lik bir a priori olasılık kabul eder. Değerlendirilen her anatomik belirteç için model, a priori olasılığı o puanın erkek veya kadın popülasyonlarında elde edilme olasılığı ile çarpar. Sonuçlar normalleştirilerek son olasılık dağılımı oluşturulur.',
  },
  {
    key: 'faq-4',
    question: 'Morfolojik analizde 3 puanı neyi temsil eder?',
    answer: '3 puanı, belirsiz veya nötr bir morfolojiyi temsil eder. Bu, özelliğin insan cinsel dimorfizmi spektrumunun ortasında yer alan ve ne belirgin şekilde kadınsı (1-2) ne de belirgin şekilde erkeksi (4-5) özellikler göstermeyen nitelikler sergilediğini gösterir.',
  },
  {
    key: 'faq-5',
    question: 'Bu model çocuk veya genç yaştaki iskelet kalıntılarının cinsiyetini belirleyebilir mi?',
    answer: 'Hayır. Morfolojik cinsiyet tayini, ergenlik döneminden önceki çocuk ve genç kalıntıları için son derece güvenilirdir; çünkü erkek ve kadın iskeletlerini birbirinden ayıran morfolojik özellikler ergenliğe kadar tam olarak gelişmez. Adli antropologlar bu yaş grubu için osteolojik belirteçler yerine genellikle genetik testlere veya diş göstergelerine güvenirler.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Pelvis Morfolojisi',
    craniumRegion: 'Kafası Morfolojisi',
    subpubicAngle: 'Subpubik Açı',
    subpubicAngleDesc: 'Pubik kemiklerin altında oluşan açı.',
    subpubicAngleFem: 'Geniş U şeklinde açı (>90°)',
    subpubicAngleMasc: 'Dar V şeklinde açı (<70°)',
    sciaticNotch: 'Büyük Siyatik Çentik',
    sciaticNotchDesc: 'Arka iliumdaki büyük siyatik çentik.',
    sciaticNotchFem: 'Geniş ve sığ U-çentik',
    sciaticNotchMasc: 'Dar ve derin çentik',
    ventralArc: 'Ventral Ark',
    ventralArcDesc: 'Ön pubis boyunca uzanan kemik sırtı.',
    ventralArcFem: 'Belirgin yükseltilmiş kemik sırtı',
    ventralArcMasc: 'Belirgin olmayan veya silik çizgi',
    preauricularSulcus: 'Preauriküler Oluk',
    preauricularSulcusDesc: 'Sakroiliak eklemin yanındaki oluk.',
    preauricularSulcusFem: 'Derin, çukurlu oluk',
    preauricularSulcusMasc: 'Belirgin olmayan veya tamamen düz',
    mastoidProcess: 'Mastoid Çıkıntı',
    mastoidProcessDesc: 'Kulak kanalının arkasındaki kemik çıkıntısı.',
    mastoidProcessFem: 'Küçük ve kısa çıkıntı',
    mastoidProcessMasc: 'Büyük ve uzun çıkıntı',
    supraorbitalRidge: 'Supraorbital Kaş Kemeri',
    supraorbitalRidgeDesc: 'Kaş kemerinin (glabella) çıkıntısı.',
    supraorbitalRidgeFem: 'Düzgün, düz alın yapısı',
    supraorbitalRidgeMasc: 'Belirgin, öne doğru çıkıntılı kemer',
    mentalEminence: 'Mental Çıkıntı (Çene)',
    mentalEminenceDesc: 'Çenenin şekli ve belirginliği.',
    mentalEminenceFem: 'Yuvarlak, sivri çene yapısı',
    mentalEminenceMasc: 'Geniş, kare çene yapısı',
    nuchalCrest: 'Ense Kemeri (Nuchal Crest)',
    nuchalCrestDesc: 'Kafatasının arkasındaki kemik sırtları.',
    nuchalCrestFem: 'Düzgün oksipital düzlem',
    nuchalCrestMasc: 'Pürüzlü, kanca benzeri ense çıkıntısı',
    selectOption: 'Puan seçin...',
    score1: '1 - Hiper-kadınsı',
    score2: '2 - Kadınsı',
    score3: '3 - Belirsiz',
    score4: '4 - Erkeksi',
    score5: '5 - Hiper-erkeksi',
    notEvaluated: 'Değerlendirilmedi',
    resultsTitle: 'Cinsiyet Tayini Sonuçları',
    femaleProbLabel: 'Kadın Olasılığı',
    maleProbLabel: 'Erkek Olasılığı',
    predominantLabel: 'Baskın Sınıflandırma',
    confidenceLabel: 'Tahmin Güveni',
    weakConf: 'Zayıf (Az sayıda gösterge puanlandı)',
    moderateConf: 'Orta',
    strongConf: 'Güçlü',
    femaleClass: 'Kadın',
    maleClass: 'Erkek',
    indeterminateClass: 'Belirsiz',
    noteNoData: 'Hesaplamalara başlamak için lütfen en az bir anatomik belirteci puanlayın.',
    noteTriageOnly: 'Bu eğitim amaçlı bir tarama aracıdır. Resmi adli değerlendirme, metrik analizler ve çoklu uzman incelemesi gerektirir.',
    noteBayesianEst: 'Olasılıklar, parametrik olmayan bir Bayes olabilirlik matrisi kullanılarak dinamik olarak hesaplanır.',
    pelvicTitle: 'Pelvis Referans Kılavuzu',
    cranialTitle: 'Kafatası Referans Kılavuzu',
    pelvisDesc: 'Kadın pelvisi doğuma adapte olmuştur, bu da daha geniş yapılar ve daha sığ açılarla sonuçlanır. Erkek pelvisi daha sağlam, dar ve dikey olarak yönlendirilmiştir.',
    cranialDesc: 'Erkek kafatası genellikle daha büyük ve daha sağlamdır; daha büyük mastoid çıkıntılara, belirgin kaş kemerlerine ve pürüzlü kas yapışma yerlerine sahiptir. Kadın kafatası daha zarif, daha düz ense kemerlerine ve yuvarlak bir çeneye sahiptir.',
  },
  seo: [
    {
      type: 'title',
      text: 'Adli Antropolojide Osteolojik Cinsiyet Belirlemeye Giriş',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Biyolojik cinsiyetin tahmin edilmesi, adli antropoloji, toksikoloji ve arkeolojide bilinmeyen iskelet kalıntıları için biyolojik profil oluşturmanın birincil adımlarından biridir. Boy uzunluğu, ölüm yaşı ve atasal yakınlık ile birlikte cinsiyet tahmini, potansiyel kayıp kişilerin havuzunu daraltmaya yardımcı olur. İnsan iskeletleri, bir türün erkekleri ve dişileri arasındaki fiziksel fark olan cinsel dimorfizm gösterir. Bu dimorfizm hem boyutta (tıknazlık ve narinlik) hem de şekil olarak (özellikle doğumla ilgili pelvik adaptasyonlar) yansıtılır.',
    },
    {
      type: 'paragraph',
      html: 'Bu etkileşimli araç, adli tıp öğrencilerinin, tıp doktorlarının ve stajyerlerin pelvis ve kafatasının morfolojik belirteçlerini değerlendirmesine olanak tanır. Kullanıcılar, görsel kılavuzlara dayalı puanlar girerek, bireysel kemik belirteçlerinin kümülatif bir istatistiksel modele nasıl katkıda bulunduğunu gözlemleyebilirler.',
    },
    {
      type: 'title',
      text: 'Pelvik Dimorfizm ve Phenice Yöntemi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pelvis, biyolojik cinsiyet belirleme için iskeletin en doğru bölgesi olarak evrensel olarak kabul edilir. Kadın pelvisleri daha geniştir, daha büyük bir doğum kanalına, daha geniş bir siyatik çentiğe sahiptir ve subpubik açısı doksan dereceyi aşar. Tersine, erkek pelvisleri dar, V şeklindeki subpubik açılar ve dar siyatik çentik ile karakterize edilir. Phenice yöntemi pubik kemiğin üç spesifik özelliğine odaklanır: ventral ark, subpubik konkavite ve iskiopubik ramusun medial görünümü. İyi tanımlanmış bir ventral arkın varlığı, kadın cinsiyetinin son derece güçlü bir göstergesidir, oysa erkeklerde olmaması tipiktir.',
    },
    {
      type: 'title',
      text: 'Kafası Dimorfizmi ve Sağlamlık Belirteçleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pelvis kemikleri eksik olduğunda veya zayıf korunduğunda kafatası cinsiyet tahmini için birincil alternatif olarak hizmet eder. Kafatası değerlendirmesi sağlamlığa dayanır, çünkü erkek kafatasları genellikle hormon güdümlü gelişimsel farklılıklar nedeniyle daha belirgin kas yapışma alanları ve daha büyük kemik çıkıntıları gösterir. Kulağın arkasında bulunan mastoid çıkıntı erkeklerde daha büyük ve geniştir. Supraorbital kaş kemeri veya glabella erkeklerde belirgin ve çıkıntılı iken kadınlarda pürüzsüz ve dikey kalır. Çene (mental çıkıntı) erkeklerde kare ve geniş olma eğilimindeyken kadınlar daha yuvarlak, sivri bir çene yapısı sunar.',
    },
    {
      type: 'table',
      headers: ['Anatomik Belirteç', 'Kadınsı Özellikler (Puan 1-2)', 'Erkeksi Özellikler (Puan 4-5)', 'Adli Tıp Değeri'],
      rows: [
        ['Subpubik Açı', 'Geniş, geniş açı (genellikle 90 dereceyi aşar).', 'Dar, dar açı (genellikle 70 dereceden az).', 'Pelvik cinsiyet tayini için en yüksek bireysel tanısal değer.'],
        ['Siyatik Çentik', 'U şekline benzeyen geniş, sığ çentik.', 'Başparmak şekline benzeyen dar, derin çentik.', 'Parçalanmış kalıntılarda sıklıkla korunan son derece dayanıklı belirteç.'],
        ['Mastoid Çıkıntı', 'Küçük, kısa ve kulak kanalının altında minimum düzeyde çıkıntı yapan.', 'Büyük, uzun ve önemli ölçüde aşağıya doğru çıkıntı yapan.', 'Hava koşullarına dayanıklı, güvenilir kafatası belirteci.'],
        ['Kaş Kemeri', 'Dikey alın profiline sahip pürüzsüz, düz glabella.', 'Eğimli bir alına sahip belirgin, çıkıntılı kemer.', 'Sağlam erkek kafataslarını zarif kadın kafataslarından ayırır.'],
      ],
    },
    {
      type: 'title',
      text: 'Morfolojik Sınıflandırmalarda Bayes Matematiksel Modellemesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Geleneksel adli tıp değerlendirmeleri, gözlemci yanlılığına yol açabilecek öznel sınıflandırmaya dayanıyordu. Modern adli antropoloji, belirsizliği nicelleştirmek için istatistiksel olasılık modellerini dahil eder. Bayes istatistikleri bu amaç için idealdir, eşit bir a priori olasılıkla (%50 erkek, %50 dişi) başlar ve yeni kanıtlar sunuldukça bunu günceller. Pelvik özellikler yüksek oranda kadınsı morfoloji gösterdiğinde (geniş subpubik açı, puan 1), dişi sınıflandırma olasılığı artar ve kafatasındaki ara veya çelişkili belirteçleri geçersiz kılar.',
    },
    {
      type: 'paragraph',
      html: 'Bu dijital simülatör, parametrik olmayan bir Bayes motoru uygular. Hesaplamalar, mahkeme ifadelerinde güven aralıklarının ve hata oranlarının bildirilmesini vurgulayan modern adli tıp kılavuzlarıyla uyumlu olan ikili bir çıktı yerine bir olasılık yüzdesi sağlar. Sınıflandırma güveni, değerlendirilen belirteçlerin sayısına bağlıdır ve hem pelvik hem de kraniyal bölgelerden alınan puanlar en sağlam çıktıları sağlar.',
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
