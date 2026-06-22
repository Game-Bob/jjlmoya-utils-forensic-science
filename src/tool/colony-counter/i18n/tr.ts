const howTo = [
    {
      name: 'Kap görüntüsünü hazırlayın',
      text: 'Kolonilerin net bir şekilde kontrast oluşturması için Petri kabınızı karanlık bir arka plana yerleştirin veya bir transilüminatör kullanın.',
    },
    {
      name: 'Koloni tiplerini belirleyin',
      text: 'Kolonileri morfoloji, renk veya boyuta göre gruplandırmak için farklı markör renkleri kullanın.',
    },
    {
      name: 'Her koloniyi işaretleyin',
      text: 'Görünür her koloniye tıklayın. Araç, tekrarları veya gözden kaçan kolonileri önlemek için her tıklamayı otomatik olarak numaralandırır.',
    },
    {
      name: 'Final konsantrasyonu hesaplayın',
      text: 'KOB/ml veya KOB/g cinsinden final sonucunu elde etmek için ekim hacmini ve dilüsyon faktörünü girin.',
    },
  ];
const faq = [
    {
      question: 'KOB sayımı nedir?',
      answer: 'Koloni Oluşturan Birimler (KOB), bir numunedeki canlı bakteri veya mantar hücrelerinin sayısını tahmin eden bir ölçümdür. Her görünür koloninin tek bir hücreden veya hücre grubundan kaynaklandığı varsayılır.',
    },
    {
      question: 'Dijital sayıcı neden manuel sayımdan daha iyidir?',
      answer: 'Dijital sayım, kolonileri görsel olarak işaretlerken "takibi kaybetme" gibi insan hatalarını önler. Aracımız ayrıca koloni tiplerinin renklerle ayırt edilmesini sağlayarak karma plakların analizini kolaylaştırır.',
    },
    {
      question: 'Mililitre başına KOB nasıl hesaplanır?',
      answer: 'Sayılan koloni sayısı, ters dilüsyon faktörü ile çarpılır. Örneğin, 1:100 dilüsyonda 30 koloni sayarsanız, orijinal numune 3000 KOB/ml içerir.',
    },
    {
      question: 'Bir kap ne zaman "sayılamaz" kabul edilir?',
      answer: 'Standart mikrobiyolojide, 250-300\'den fazla koloni varsa, kap çok kalabalık (Too Numerous To Count, TNTC) kabul edilir ve koloni rekabeti nedeniyle veriler güvenilir değildir.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'koloni-sayaci';
const title = 'Koloni Sayacı: Petri Kapları için Dijital KOB Sayım Aracı';
const description = 'Petri kaplarındaki bakteri kolonilerini saymak için dijital araç. Türleri ayırt edin, hataları önleyin ve KOB\'u hassasiyetle hesaplayın.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Petri kabınızı yüklemek için tıklayın',
    uploadSubtitle: 'Kabınızın fotoğrafını yükleyin ve kolonileri saymaya başlayın',
    currentModeLabel: 'Mevcut Mod',
    typeA: 'Tip A',
    typeB: 'Tip B',
    colonyType: 'Koloni Tipi',
    counting: 'Sayılıyor',
    totalCFU: 'Toplam KOB',
    undo: 'Sonuncuyu Geri Al',
    clearAll: 'Tümünü Temizle',
    infoClick: 'Kolonileri işaretlemek için kaba tıklayın',
    infoChange: 'İşaretlemeden önce tipi değiştirin',
    confirmClear: 'Tüm işaretli kolonileri temizlemek istediğinizden emin misiniz?',
  },
  seo: [
    {
      type: 'title',
      text: 'Dijital Mikrobiyoloji: Hassas Koloni Sayımı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Petri kaplarındaki bakteri kolonilerini saymak, mikrobiyolojide temel bir tekniktir. Geleneksel olarak manuel bir sayıcı ve markör kalemle yapılan bu işlemde, sayının karıştırılması veya aynı koloninin iki kez işaretlenmesi kolaydır. Bu dijital araç bu hataları ortadan kaldırır ve koloni tipleri arasında görsel ayrım yapılmasını sağlar.',
    },
    {
      type: 'title',
      text: 'Koloni Sayımı Neden Önemlidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir kaptaki koloni sayısı, orijinal numunedeki canlı mikroorganizma konsantrasyonu ile doğru orantılıdır. Bu veriler şu alanlarda kritiktir:',
    },
    {
      type: 'list',
      items: [
        '<strong>Gıda Kalite Kontrolü:</strong> Bakteriyel kontaminasyonun tespiti.',
        '<strong>İlaç Araştırmaları:</strong> Antibiyotik etkinliğinin değerlendirilmesi.',
        '<strong>Klinik Teşhis:</strong> Hasta numunelerindeki enfeksiyonların miktarının belirlenmesi.',
        '<strong>Biyoteknoloji:</strong> Rekombinant proteinler için üretim kültürlerinin optimize edilmesi.',
      ],
    },
    {
      type: 'title',
      text: 'Koloni Oluşturan Birimler (KOB)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir kaptaki her görünür koloninin tek bir canlı hücreden kaynaklandığı varsayılır. Bu yüzden bunlara <strong>KOB</strong> (Koloni Oluşturan Birimler) denir.',
    },
    {
      type: 'paragraph',
      html: '<strong>Konsantrasyon Formülü:</strong><br><code>KOB/mL = (Sayılan Koloniler × Dilüsyon Faktörü) / Ekim Hacmi</code>',
    },
    {
      type: 'title',
      text: 'Sayım İçin En İyi Uygulamalar',
      level: 3,
    },
    {
      type: 'title',
      text: 'Sayılabilir Aralık',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Manuel sayım için ideal aralık, kap başına <strong>30 ila 300 koloni</strong>dir. 30\'un altında istatistiksel hata çok yüksektir. 300\'ün üzerinde koloniler birleşmeye başlar ve bireysel ayrım imkansız hale gelir.',
    },
    {
      type: 'title',
      text: 'Koloni Tipleri',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Seçici veya diferansiyel besiyerlerinde, birden fazla koloni morfolojisi görmek yaygındır:',
    },
    {
      type: 'list',
      items: [
        '<strong>Tip A (Turkuaz/Yeşil):</strong> Büyük, mukoid koloniler, laktoz fermente eden Gram-negatif bakteriler için tipiktir.',
        '<strong>Tip B (Pembe/Mor):</strong> Küçük, yarı saydam koloniler, fermente etmeyenler.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Aracımız, farklı renklerle iki koloni tipine kadar ayrım yapılmasına olanak tanıyarak fiziksel markörlere gerek kalmadan diferansiyel sayımı kolaylaştırır.',
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
      description: description,
      applicationCategory: 'ScientificApplication',
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

