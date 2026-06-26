import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mikrokristal-uyusturucu-testi-simulatoru';
const title = 'Adli Mikrokristal Uyuşturucu Testi Simülatörü';
const description = 'Şüpheli kontrollü maddeleri klasik adli reaktiflerle birleştirerek ve kristal yapısını, büyüme hızını ve polarize ışık yanıtını karşılaştırarak eğitsel mikrokristal uyuşturucu tarama modellerini simüle edin.';

const howTo = [
  {
    name: 'Şüpheli bir örnek seçin',
    text: 'Bilinmeyen materyal için didaktik bir profil yüklemek üzere kokain, eroin, amfetamin veya metamfetamin seçin.',
  },
  {
    name: 'Mikrokristal reaktifi uygulayın',
    text: 'Reaktif kimyasının kristal morfolojisini nasıl değiştirdiğini görmek için platin klorür, altın klorür ve Dragendorff reaktifi arasında geçiş yapın.',
  },
  {
    name: 'Simüle edilmiş polarizasyonu ayarlayın',
    text: 'Sanal mikroskop alanındaki çift kırılımlı kontrastı artırmak veya azaltmak için polarizasyon kontrolünü hareket ettirin.',
  },
  {
    name: 'Referans benzeri sonucu karşılaştırın',
    text: 'Morfologinin referans benzeri mi, kısmi mi yoksa spesifik olmayan mı olduğuna karar vermek için yapı etiketini, eşleşme skorunu, büyüme hızını ve yorum notunu kullanın.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Mikrokristal testleri yasa dışı uyuşturucular için kesin doğrulayıcı mıdır?',
    answer: 'Hayır. Mikrokristal testleri ön tarama veya karşılaştırmalı tarama araçlarıdır. Gerçek uyuşturucu teşhisi, uygun kontrolleri ve GC-MS, LC-MS veya kızılötesi spektroskopi gibi doğrulayıcı enstrümantal yöntemleri içeren valide edilmiş şemaları izlemelidir.',
  },
  {
    key: 'faq-2',
    question: 'Farklı reaktifler neden farklı kristal şekilleri üretir?',
    answer: 'Reaktif, hedef bileşikteki fonksiyonel gruplarla tuzlar, kompleksler veya çökeltiler oluşturur. Çözünürlük, asit gücü, konsantrasyon, safsızlıklar ve kuruma hızı, gözlenen yapının iğneler, rozetler, prizmalar, plakalar veya zayıf dağılım şeklinde görünüp görünmeyeceğini etkiler.',
  },
  {
    key: 'faq-3',
    question: 'Polarize ışık mikrokristal incelemeye ne katar?',
    answer: 'Polarize ışık kontrastı artırabilir ve çift kırılımı ortaya çıkararak kenarların, dallanmaların ve iç kristal yapısının karşılaştırılmasını kolaylaştırabilir. Referans standartları ve kontrol ihtiyacını ortadan kaldırmaz.',
  },
  {
    key: 'faq-4',
    question: 'Pozitif görünen bir model neden hala yanıltıcı olabilir?',
    answer: 'Kesici maddeler, karışımlar, bozunmuş materyal, reaktif yaşı, kontaminasyon ve analist beklentisi belirsiz veya örtüşen morfolojiler üretebilir. Bu nedenle öncül sonuçlar ihtiyatla yorumlanmalıdır.',
  },
  {
    key: 'faq-5',
    question: 'Bu simülatör bilinmeyen bir maddeyi teşhis edebilir mi?',
    answer: 'Hayır. Yaygın morfoloji kavramlarının eğitsel bir görselleştirmesidir. Gerçek kanıtları test edemez, kimyasal ölçüm yapamaz veya laboratuvar sonucu veremez.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Polarize mikroskop',
    canvasAria: 'Animasyonlu mikrokristal büyüme alanı',
    sample: 'Şüpheli örnek',
    sampleCocaine: 'Kokain',
    sampleHeroin: 'Eroin',
    sampleAmphetamine: 'Amfetamin',
    sampleMethamphetamine: 'Metamfetamin',
    reagent: 'Reaktif rafı',
    reagentPlatinum: 'Platin klorür',
    reagentGold: 'Altın klorür',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Polarize kontrast',
    confidence: 'Eşleşme',
    growth: 'Büyüme',
    birefringence: 'Çift Kır.',
    regrow: 'Kristalleri yeniden büyüt',
    warningLabel: 'Adli uyarı',
    warningTitle: 'Tarama uyarısı',
    matchReference: 'Referans benzeri',
    matchPartial: 'Kısmi eşleşme',
    matchNonSpecific: 'Spesifik olmayan',
    habitFeatheryNeedles: 'Tüylü iğne demetleri',
    habitRosettes: 'Rozet yıldız patlamaları',
    habitBranchingPrisms: 'Dallanan prizmalar',
    habitPlates: 'İnce plakalar',
    habitWeakScatter: 'Seyrek spesifik olmayan dağılım',
    cueCocainePlatinumChloride: 'Tüylü ve dallanan iğne demetleri, platin klorür ile kokain için beklenen didaktik modeldir.',
    cueCocaineGoldChloride: 'Altın klorür dallanan turuncu-kahverengi kristaller oluşturabilir, ancak bu model platin klorürden daha az spesifiktir.',
    cueCocaineDragendorff: 'Dragendorff burada zayıf bir alkaloid yanıtı verir; morfoloji yalnızca tarama bilgisi olarak ele alınmalıdır.',
    cueHeroinPlatinumChloride: 'Plaka benzeri çökeltiler görünebilir, ancak bu eşleşme güçlü bir doğrulayıcı didaktik eşleşme değildir.',
    cueHeroinGoldChloride: 'Rozet kümeleri ve yuvarlak yıldız patlamaları bu simülatördeki referans benzeri eroin modelidir.',
    cueHeroinDragendorff: 'Dragendorff, kimlik kanıtı değil, bir alkaloid taramasıyla uyumlu turuncu dallanan prizmalar üretir.',
    cueAmphetaminePlatinumChloride: 'Hızlı dallanan prizmalar, seçilen reaktif altında uyarıcı benzeri bir didaktik modele işaret eder.',
    cueAmphetamineGoldChloride: 'Seyrek kristalleşme, görsel bulgunun spesifik olmayan olarak rapor edilmesi gerektiği anlamına gelir.',
    cueAmphetamineDragendorff: 'İğne spreyleri hızlı büyür ve didaktik amfetamin karşılaştırmalarını öğretmek için yararlıdır.',
    cueMethamphetaminePlatinumChloride: 'Polarize rozetler oluşabilir, ancak sonuç yine de öncül bir morfoloji karşılaştırmasıdır.',
    cueMethamphetamineGoldChloride: 'İnce plaka formları görünür, ancak diğer bileşiklerle örtüşme spesifikliği sınırlar.',
    cueMethamphetamineDragendorff: 'Yoğun turuncu dallanan prizmalar, bu sette metamfetamin için en güçlü didaktik eşleşmeyi sağlar.',
    disclaimer: 'Yalnızca eğitsel tarama modeli. Gerçek uyuşturucu tespiti, valide edilmiş referans standartları, reaktif kontrolleri, gözetim zinciri ve doğrulayıcı enstrümantal analiz gerektirir.',
  },
  seo: [
    {
      type: 'title',
      text: 'Adli Bilimde Mikrokristal Uyuşturucu Testleri',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Eğitim simülatörü',
      title: 'Bu mikrokristal simülatörünün amacı nedir',
      html: 'Bu araç, şüpheli bir uyuşturucu bir reaktifle karıştırıldıktan sonra klasik adli mikrokristal testlerinin nasıl tanınabilir kristal yapıları üretebileceğini açıklar. Öğrencilerin tarayıcı sonucunu kanıt olarak değerlendirmeden <strong>kristal morfolojisini</strong>, büyüme hızını ve polarize ışık kontrastını karşılaştırmasına yardımcı olur.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'eğitsel örnek profili', icon: 'mdi:flask-outline' },
        { value: '3', label: 'geleneksel reaktif seçeneği', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'kristal yapısı modellenmiştir', icon: 'mdi:shape-outline' },
        { value: '0', label: 'yasal tanımlama iddiası', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Kristal Yapısı Nasıl Yorumlanır',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Pratik karşılaştırma kontrol listesi',
      items: [
        'Bilinmeyen bir örneği karşılaştırmadan önce bilinen bir referans standardı ve boş reaktif kontrolü ile başlayın.',
        'Reaktifi, konsantrasyonu, damla boyutunu, kuruma süresini, sıcaklığı ve mikroskop büyütmesini kaydedin.',
        'Öncelikle genel yapıyı karşılaştırın: iğneler, rozetler, plakalar, prizmalar, dallanma veya zayıf dağılım.',
        'Kısmi veya seyrek büyümeyi güvenli bir kimlik tespiti olarak değil, daha ileri testlerin yapılması gerektiğinin bir nedeni olarak görün.',
      ],
    },
    {
      type: 'table',
      headers: ['Gözlemlenen yapı', 'Kullanıcıların sıklıkla sordukları', 'Dikkatli yorumlama'],
      rows: [
        ['Tüylü iğneler', 'Bu platin klorür ile kokain gibi görünüyor mu?', 'Yararlı bir didaktik eşleşme olabilir, ancak karışımlar ve reaktif koşulları yapıyı değiştirebilir.'],
        ['Rozetler', 'Yıldız patlaması kristalleri tanısal mıdır?', 'Rozetler, kontroller eşleştiğinde bir karşılaştırmayı destekleyebilir ancak tek başlarına yeterli değildir.'],
        ['Dallanan prizmalar', 'Uyarısı taramaları neden genellikle hızlı büyür?', 'Bazı tuzlar hızla çekirdeklenir ve çözücü buharlaştıkça dallanır; hız doğrulayıcı değil, destekleyicidir.'],
        ['Zayıf dağılım', 'Zayıf bir model uyuşturucu bulunmadığı anlamına mı gelir?', 'Hayır. Düşük konsantrasyon, safsızlık, eskiyen reaktif veya kötü hazırlama kristal büyümesini baskılayabilir.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Mikrokristal tarama şunlara yardımcı olur',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Eğitimli bir analist kontrolleri ve referans materyalleri kullandığında hızlı görsel karşılaştırma.',
          points: ['Sınıf gösterileri', 'Morfoloji kelime bilgisi', 'Öncül triyaj', 'Reaktif etkisi karşılaştırması'],
        },
        {
          title: 'Mikrokristal tarama şunun yerini alamaz',
          icon: 'mdi:alert-circle-outline',
          description: 'Gerçek bir uyuşturucu kararı için valide edilmiş doğrulayıcı kimya analizi.',
          points: ['Enstrümantal doğrulama', 'Akredite prosedürler', 'Matrise özgü validasyon', 'Belirsizlik dokümantasyonu'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Mikrokristal Testlerinin Bilimsel Arka Planı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mikrokristal testleri, adli kimyagerler tarafından şüpheli kontrollü maddeleri tanımlamak için kullanılan tarihi ve oldukça hassas bir kimyasal tarama testleri sınıfını temsil eder. Küçük bir uyuşturucu örneği asitte çözüldüğünde ve altın klorür veya platin klorür gibi belirli bir ağır metal reaktifi ile birleştirildiğinde, bir koordinasyon kompleksi veya çözünmeyen tuz çökelir. Uyuşturucunun moleküler yapısı, ortaya çıkan kristallerin büyüme hızını, yönelimini ve simetrisini belirleyerek belirgin mikroskobik şekiller veya yapılar üretir.',
    },
    {
      type: 'paragraph',
      html: 'Bu yapıların polarize ışık mikroskobu altında analiz edilmesi, adli tıp uzmanlarının, kristalin ışığı iki ışına bölerek canlı renkler ve yüksek kontrast oluşturduğu çift kırılım gibi optik özellikleri gözlemlemesine olanak tanır. Gaz kromatografisi kütle spektrometrisi gibi enstrümantal yöntemler, doğrulayıcı tanımlama için mikrokristal testlerinin yerini büyük ölçüde almış olsa da, mikrokristal taraması, hızı, düşük maliyeti ve diğer yollarla ayırt edilmesi zor olabilen optik izomerleri ayırma yeteneği nedeniyle değerli bir teknik olmaya devam etmektedir.',
    },
    {
      type: 'paragraph',
      html: 'Eğitim ortamlarında, bu reaksiyonların simüle edilmesi, öğrencilerin kimyasal reaktifler ile fiziksel kristal morfolojisi arasındaki ilişkiyi anlamalarına yardımcı olur. Kokain, eroin ve çeşitli amfetaminlerin farklı reaktiflere nasıl yanıt verdiğini gözlemleyerek, öğrenciler tek bir pozitif testin nihai bir adli sonuç olmadığını öğrenirler. Uygun uyuşturucu tarama protokolleri, bilinmeyen örneklerin bilinen referans materyalleriyle karşılaştırılmasını ve gözlenen kristal modellerinin geçerliliğini ve spesifikliğini sağlamak için reaktif kör testlerinin yapılmasını gerektirir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kristal yapısı', definition: 'İğneler, plakalar, prizmalar veya rozetler gibi bir kristalin görünür şekli veya büyüme biçimi.' },
        { term: 'Çekirdekleşme', definition: 'Daha büyük yapıların büyüdüğü küçük kristal merkezlerinin ilk oluşumu.' },
        { term: 'Çift kırılım', definition: 'Kristallerin polarize ışık altında daha parlak veya renkli görünmesini sağlayabilen optik davranış.' },
        { term: 'Öncül test', definition: 'Olası bir sınıfı veya bileşiği düşündüren ancak tek başına kimliği kanıtlamayan bir tarama testi.' },
        { term: 'Referans standart', definition: 'Bilinmeyen modeli karşılaştırmak için aynı koşullar altında test edilen bilinen bir materyal.' },
      ],
    },
    {
      type: 'tip',
      title: 'Gerçek kanıtlar için en iyi uygulama',
      html: 'Mikrokristal morfolojisini bir araştırma hattı olarak kullanın. Güvenilir bir iş akışı kör testleri, pozitif kontrolleri, reaktif yaşının belgelenmesini, gerektiğinde bağımsız incelemeyi ve kabul edilen bir adli uyuşturucu şeması altında doğrulayıcı testleri içerir.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Adli uyarı',
      title: 'Güzel bir kristal yasal bir teşhis değildir',
      html: 'Simülatör, görsel eşleşme skorunu adli bir sonuçtan kasıtlı olarak ayırır. Gerçek durumlarda karışımlar, kesici maddeler, kontaminasyon, reaktif performansı, analist eğitimi ve onaylanmış laboratuvar prosedürleri dikkate alınmalıdır.',
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
