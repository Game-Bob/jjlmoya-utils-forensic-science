import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'adli-boy-uzunlugu-tahmin-edici-trotter-gleser-hesaplayici';
const title = 'Adli Boy Uzunluğu Tahmin Edici';
const description = 'Biyolojik cinsiyet, soy ve yaş düzeltmesini dahil ederek Trotter ve Gleser regresyon denklemlerini kullanarak insan uzun kemiklerinden yaşayan boy uzunluğunu tahmin edin.';

const howTo = [
  {
    name: 'Kemik ve değişkenleri seçin',
    text: 'Ölçülecek spesifik uzun kemiği (Femur, Tibia, Humerus, Fibula, Radius veya Ulna) ve bireyin biyolojik cinsiyetini, soy grubunu ve yaşını seçin.'
  },
  {
    name: 'Kemik uzunluğunu belirleyin',
    text: 'Kemik örneğinin santimetre cinsinden maksimum uzunluğunu belirtmek için sanal osteometrik tahta üzerindeki kayar kumpası ayarlayın.'
  },
  {
    name: 'Tahmini boy uzunluğunu hesaplayın',
    text: 'Hesaplayıcı, 30 yaşın üzerindeki bireyler için her yıl için 0.06 cm çıkararak ilgili Trotter-Gleser regresyon denklemlerini uygular.'
  },
  {
    name: 'Aralıkları ve hataları yorumlayın',
    text: 'Popülasyon değişkenliğini hesaba katmak için tahmini boy uzunluğunu, Tahminin Standart Hatasını (SEE) ve %95 tahmin aralığını inceleyin.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Trotter ve Gleser regresyon denklemleri nasıl çalışır?',
    answer: 'Denklemler, yaşayan boy uzunluğu ile uzun kemiklerin maksimum uzunluğu arasındaki korelasyonu modellemek için doğrusal regresyon kullanır. Kemik uzunluğu girildiğinde, hesaplayıcı spesifik katsayıları uygular.'
  },
  {
    key: 'faq-2',
    question: 'Araç neden biyolojik cinsiyet ve soy bilgisi gerektiriyor?',
    answer: 'İnsan vücut oranları cinsiyete ve coğrafi popülasyonlara göre değişir. Erkekler genel olarak kadınlardan farklı uzuv-boy oranlarına sahiptir.'
  },
  {
    key: 'faq-3',
    question: 'Boy uzunluğu tahmininde neden yaş düzeltme faktörü var?',
    answer: 'Yaşayan boy uzunluğu, intervertebral disklerin sıkışması ve duruş değişiklikleri nedeniyle erken yetişkinlikten sonra kademeli olarak azalır. Trotter ve Gleser, 30 yaşından sonraki her yıl için 0.06 cm çıkarılmasını önermiştir.'
  },
  {
    key: 'faq-4',
    question: 'Tahminin Standart Hatası (SEE) nedir?',
    answer: 'SEE, regresyon modelindeki kalıntıların standart sapmasını temsil eder. Belirli bir kemik için tahmin edilen boyun doğruluğunun bir ölçüsünü sağlar.'
  },
  {
    key: 'faq-5',
    question: 'Hangi uzun kemikler en doğru boy tahminlerini sağlar?',
    answer: 'Alt uzuv kemikleri - özellikle femur ve tibia - doğrudan boy uzunluğuna katkıda bulundukları için en doğru boy tahminlerini sağlar. Üst uzuv kemiklerinin standart hataları daha yüksektir.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Adli Boy Uzunluğu Tahmin Edici',
    desc: 'Osteometrik tahta ölçümlerini simüle edin ve doğrusal regresyon kullanarak yaşayan boy uzunluğunu hesaplayın.',
    configTitle: 'Osteometrik Yapılandırma',
    boneLabel: 'Kemik Örneği',
    lengthLabel: 'Kemik Uzunluğu',
    unitLabel: 'Sistem Birimi',
    metricOption: 'Metrik (cm)',
    imperialOption: 'İmparatorluk (inç)',
    sexLabel: 'Biyolojik Cinsiyet',
    ancestryLabel: 'Soy Grubu',
    ageLabel: 'Ölüm Yaşı (yıl)',
    maleOption: 'Erkek',
    femaleOption: 'Kadın',
    whiteOption: 'Beyaz / Kafkas',
    blackOption: 'Siyah / Afro-Amerikan',
    asianOption: 'Asyalı / Moğoloid',
    femurName: 'Femur (Uyluk kemiği)',
    tibiaName: 'Tibia (Kaval kemiği)',
    humerusName: 'Humerus (Pazı kemiği)',
    fibulaName: 'Fibula (Baldır kemiği)',
    radiusName: 'Radius (Döner kemik)',
    ulnaName: 'Ulna (Dirsek kemiği)',
    resultsTitle: 'Boy Uzunluğu Tahmin Sonuçları',
    estimateLabel: 'Tahmini Boy Uzunluğu',
    errorLabel: 'Standart Hata (SEE)',
    rangeLabel: '%95 Tahmin Aralığı',
    formulaLabel: 'Regresyon Denklemi',
    formulaBoneFactor: 'Kemik Faktörü',
    formulaConstant: 'Sabit',
    formulaAgeCorrection: 'Yaş Düzeltmesi',
    formulaStdError: 'Standart Hata (SEE)',
    fallbackAlert: 'Asyalı kadınlar için doğrudan bir Trotter-Gleser denklemi mevcut değildir; adli bir alternatif olarak Beyaz kadın referans denklemleri kullanılmaktadır.',
    boardInstructions: 'Kemiği ölçmek için kumpas kolunu sürükleyin veya girişleri kullanın.',
    rulerLabelMetric: 'Metrik Ölçek (mm)',
    rulerLabelImperial: 'İmparatorluk Ölçeği (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Adli Antropolojide Boy Uzunluğu Tahminine İlişkin Kapsamlı Kılavuz',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Boy uzunluğu tahmini, fiziksel antropoloji, biyoarkeoloji ve adli tıp bilimlerinde biyolojik profil çıkarmanın temel bir bileşenidir. İskelet kalıntıları bulunduğunda, bireyin yaşayan boyunun yeniden yapılandırılması, araştırmacıların kayıp kişilerin kayıtlarıyla çapraz referans yapmasına yardımcı olur. Boy uzunluğu, genetik ve çevresel faktörlere bağlı iskelet oranları nedeniyle toplam boy ile yakından ilişkili olan uzun kemiklerin maksimum uzunluğu ölçülerek tahmin edilir.'
    },
    {
      type: 'paragraph',
      html: 'Bu dijital osteometrik tahta simülatörü, öğrencilerin ve uygulayıcıların Mildred Trotter ve Goldine C. Gleser tarafından geliştirilen doğrusal regresyon modellerini keşfetmelerine olanak tanır. Kemik tipi, biyolojik cinsiyet, soy ve ölüm yaşı gibi değişkenleri yapılandırarak kullanıcılar vücut oranlarının tahmin üzerindeki etkisini analiz edebilir.'
    },
    {
      type: 'title',
      text: 'Trotter-Gleser Regresyon Formüllerini Anlamak',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter ve Goldine C. Gleser temel boy uzunluğu tahmin denklemlerini 1952 ve 1958 yıllarında yayımlamışlardır. Matematiksel denklemler doğrusal formdadır: Boy Uzunluğu = (Eğim × Kemik Uzunluğu) + Sabit ± Standart Hata. Kemik-boy oranları gruplar arasında değiştiğinden cinsiyet ve soya göre ayrı denklemler kullanılır.'
    },
    {
      type: 'table',
      headers: ['Uzun Kemik Örneği', 'Beyaz Erkek Regresyon Modeli', 'Beyaz Kadın Regresyon Modeli', 'Adli Fayda ve Güvenilirlik'],
      rows: [
        ['Femur (Uyluk Kemiği)', 'Boy = 2.32 × Femur + 65.53 ± 3.94 cm', 'Boy = 2.47 × Femur + 54.10 ± 3.72 cm', 'En yüksek genel güvenilirlik. Femur, vücut boyuyla doğrudan ilişkili olan birincil ağırlık taşıyan alt uzuv kemiğidir.'],
        ['Tibia (Kaval Kemiği)', 'Boy = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Boy = 2.90 × Tibia + 61.53 ± 3.66 cm', 'Yüksek güvenilirlik. Trotter\'ın iç malleolü hariç tutan orijinal protokolüne uymak için dikkat edilmelidir.'],
        ['Fibula (Baldır Kemiği)', 'Boy = 2.60 × Fibula + 75.50 ± 3.86 cm', 'Boy = 2.93 × Fibula + 59.61 ± 3.57 cm', 'Oldukça güvenilirdir ancak fibula incedir ve arkeolojik bağlamlarda sıklıkla parçalanır veya kaybolur.'],
        ['Humerus (Pazı Kemiği)', 'Boy = 2.89 × Humerus + 78.10 ± 4.57 cm', 'Boy = 3.36 × Humerus + 57.97 ± 4.45 cm', 'Orta düzeyde güvenilirlik. Üst uzuv kemikleri ağırlık taşımaz ve daha yüksek standart hatalara sahiptir.'],
        ['Radius (Döner Kemik)', 'Boy = 3.79 × Radius + 79.42 ± 4.66 cm', 'Boy = 4.74 × Radius + 54.93 ± 4.45 cm', 'Düşük güvenilirlik. Ön kol kemikleri boy uzunluğuna oranla önemli gelişimsel farklılıklar gösterir.']
      ]
    },
    {
      type: 'title',
      text: 'Yaşa Bağlı Boy Azalması ve Ölüm Sonrası Düzeltmeler',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Yaşayan boy uzunluğu yetişkinlik boyunca durağan değildir. 30 yaşından itibaren insan vücudunda intervertebral disklerin sıkışması ve postural değişiklikler nedeniyle boy azalması başlar. Trotter ve Gleser, 30 yaşından sonraki her yıl için 0.06 cm çıkarılmasını önermiştir: Boy Kaybı = 0.06 × (Yaş - 30).'
    },
    {
      type: 'title',
      text: 'Metodolojik Farklılıklar ve Tibia Ölçüm Protokolleri',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Adli antropolojide iyi bilinen bir metodolojik sorun, Trotter\'ın tibia ölçümleriyle ilgilidir. 1952 çalışmasında tibia iç malleol hariç tutularak ölçülmüş, ancak 1958 çalışmasında protokol değiştirilmiştir. 1952 denklemlerini malleol dahil ölçülen bir tibiaya uygulamak sistematik boy fazla tahminine yol açar.'
    },
    {
      type: 'title',
      text: 'Seküler Eğilimler ve Tarihsel Referans Verilerinin Uygulanabilirliği',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Trotter ve Gleser\'in referans örnekleri 19. yüzyılın sonlarında ve 20. yüzyılın başlarında doğduğundan, denklemleri o dönemin beslenme koşullarını yansıtır. Geçtiğimiz yüzyılda popülasyonlar daha uzun boy ortalamalarına yol açan seküler eğilimler yaşamıştır. Bu nedenle modern vakalarda FORDISC gibi modern referans sistemleri de tercih edilir.'
    }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
