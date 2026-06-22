import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-kuresi-enerji-yakalama-simulatoru';
const title = 'Dyson Küresi Enerji Yakalama Simülatörü';
const description = 'Farklı yıldızlar için Dyson sürüsü, halkası, kabuğu ve statit toplayıcı tasarımlarını tahmin edin. Yakalama gücünü, yörünge yarıçapını, malzeme kütlesini ve hedef Kardashev ölçeğine ulaşmak için gereken kapsamayı hesaplayın.';

const howTo = [
  {
    name: 'Bir yıldız türü seçin',
    text: 'Bir M cücesi, Güneş benzeri yıldız, A-tipi yıldız, kırmızı dev veya mavi dev ile başlayın. Simülatör, toplayıcı yarıçapı ve yörünge periyodunu tahmin etmek için temsili parlaklık ve kütle değerlerini kullanır.',
  },
  {
    name: 'Mega yapı mimarisini seçin',
    text: 'Bir Dyson sürüsü, ekvatoral halka, rijit kabuk veya statit ayna bulutunu karşılaştırın. Her tasarımın farklı yakalama verimliliği, malzeme yoğunluğu ve kararlılık varsayımları vardır.',
  },
  {
    name: 'Kapsama ve çalışma sıcaklığını ayarlayın',
    text: 'Daha fazla yıldız gücü yakalamak için kapsamayı artırın, ardından toplayıcıları yıldıza yaklaştırmak veya uzaklaştırmak için çalışma sıcaklığını ayarlayın.',
  },
  {
    name: 'Bir Kardashev hedefi belirleyin',
    text: 'Hedef kaydırıcısını kullanarak bir uygarlık ölçeğindeki güç hedefine ulaşmak için yıldızın ne kadarının kapsanması gerektiğini görün.',
  },
];

const faq = [
  {
    question: 'Dyson küresi ile Dyson sürüsü arasındaki fark nedir?',
    answer: 'Rijit bir Dyson küresi, bir yıldızın etrafında sürekli bir kabukken, Dyson sürüsü bağımsız yörüngedeki toplayıcılardan oluşan büyük bir koleksiyondur. Mühendislik tartışmalarının çoğu sürüleri tercih eder, çünkü katı bir kabuk yapısal olarak kararsız ve son derece malzeme yoğun olurdu.',
  },
  {
    question: 'Simülatör en uygun yarıçapı nasıl seçer?',
    answer: 'Seçilen yıldız parlaklığı altında her iki tarafından ışın yayan toplayıcıların seçilen çalışma sıcaklığına ulaştığı mesafeyi tahmin eder. Daha sıcak toplayıcılar daha yakın yörüngeye girebilirken, daha soğuk toplayıcılar daha büyük yarıçap gerektirir.',
  },
  {
    question: 'Burada Kardashev derecesi ne anlama geliyor?',
    answer: 'Kardashev değeri, yakalanan güçten logaritmik formül K = (log10(P) - 6) / 10 kullanılarak hesaplanır, burada P watt cinsinden güçtür. K1\'e yakın bir değer gezegen ölçeğinde enerji kullanımını temsil ederken, K2 tam yıldız çıktısına yaklaşır.',
  },
  {
    question: 'Malzeme kütlesi gerçekçi mi?',
    answer: 'Toplayıcı alanı, yüzey yoğunluğu ve bir kararlılık faktörüne dayalı eğitsel birinci dereceden bir tahmindir. Gerçek tasarımlar durak bakımı, güç iletimi, madencilik kayıpları, yedeklilik, ısı atımı ve üretim altyapısı gerektirirdi.',
  },
  {
    question: 'Parlak yıldızlar neden bu kadar büyük toplayıcı sistemleri gerektiriyor?',
    answer: 'Yüksek parlaklıktaki yıldızlar güvenli termal yarıçapı dışarı iter. Bu, belirli bir kapsama oranı için gereken yüzey alanını artırır, bu nedenle malzeme talebi, yakalanan gücün sezgisel hissettirdiğinden daha hızlı yükselebilir.',
  },
  {
    question: 'Bir uygarlık kısmi kapsama ile Kardashev Tip II\'ye ulaşabilir mi?',
    answer: 'Evet, ana yıldız yeterince parlaksa ve toplayıcılar verimliyse. Güneş benzeri bir yıldızın etrafında Tip II\'ye yaklaşmak, güneş parlaklığının büyük bir kısmını yakalamayı gerektirir, ancak daha parlak yıldızların etrafında aynı güç hedefine daha düşük kapsama oranıyla ulaşılabilir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson toplayıcı görüntülemesi',
    starType: 'Yıldız türü',
    structureType: 'Yapı',
    coverage: 'Toplayıcı kapsaması',
    operatingTemp: 'Çalışma sıcaklığı',
    kardashevTarget: 'Kardashev hedefi',
    kardashevRating: 'Mevcut derece',
    capturedPower: 'Yakalanan güç',
    optimalRadius: 'En uygun yarıçap',
    targetCoverage: 'Hedef kapsama',
    materialMass: 'Malzeme kütlesi',
    captureMeter: 'Hedefe doğru ilerleme',
    statusReady: 'Toplayıcı talebini tahmin etmek için sistemi ayarlayın.',
    statusUnderbuilt: 'Kapsama seçilen Kardashev hedefinin altında. Toplayıcı ekleyin veya daha parlak bir yıldız seçin.',
    statusBalanced: 'Kapsama ve yıldız çıkışı seçilen uygarlık ölçeği hedefine yakın.',
    statusExtreme: 'Bu yapılandırma hedefi aşıyor. Çok büyük güç yakalar, ancak malzeme talebi hızla artar.',
    orbitalPeriod: 'Yörünge periyodu',
    collectorArea: 'Toplayıcı alanı',
    mercuryMasses: '{value} Merkür kütlesi',
    kilograms: '{value} kg',
    daysUnit: '{value} gün',
    starMDwarf: 'M cücesi',
    starSun: 'G tipi Güneş benzeri',
    starA: 'A tipi yıldız',
    starRedGiant: 'Kırmızı dev',
    starBlueGiant: 'Mavi dev',
    structureSwarm: 'Dyson sürüsü',
    structureRing: 'Ekvatoral halka',
    structureShell: 'Rijit kabuk',
    structureStatite: 'Statit ayna bulutu',
  },
  seo: [
    { type: 'title', text: 'Dyson Küresi Enerji Yakalama Simülatörü', level: 2 },
    { type: 'paragraph', html: 'Bir Dyson küresi, bir kabuğun içindeki bir yıldızın bilim kurgu görüntüsünden ibaret değildir. Yıldız parlaklığını yakalamak için olası mega yapı kavramlarından oluşan bir ailedir: uydu sürüleri, ekvatoral halkalar, ince ayna bulutları ve ünlü ancak sorunlu rijit kabuk. Bu simülatör bu fikirleri sayılara dönüştürerek yıldız türü, toplayıcı sıcaklığı, kapsama ve yapı tasarımının enerji bütçesini nasıl değiştirdiğini karşılaştırmanızı sağlar.' },
    { type: 'paragraph', html: 'Hesaplayıcı; yakalanan gücü, termal yörünge yarıçapını, toplayıcı alanını, yörünge periyodunu, malzeme kütlesini ve seçilen bir Kardashev ölçeği hedefi için gereken kapsamayı tahmin eder. Öğrenciler, dünya kurucuları, bilim iletişimcileri ve Tip II uygarlıklarının neden zor olduğunu anlamaya çalışan herkes için tasarlanmıştır.' },
    { type: 'title', text: 'Dyson Yarıçapı Nasıl Tahmin Edilir', level: 3 },
    { type: 'paragraph', html: 'En uygun yarıçap, yıldız parlaklığı ve toplayıcı çalışma sıcaklığından hesaplanır. Parlak bir yıldızın yakınındaki bir toplayıcı yoğun bir akış alır ve sıcak çalışmalı veya büyük miktarda ısıyı atmalıdır. Dışarı doğru hareket etmek termal stresi azaltır, ancak gereken toplayıcı alanı mesafenin karesiyle artar.' },
    { type: 'title', text: 'Dyson Sürüsü, Halka, Kabuk ve Statit Bulutu Karşılaştırması', level: 3 },
    {
      type: 'list', items: [
        '<strong>Dyson sürüsü:</strong> Birçok bağımsız yörüngedeki toplayıcı. Kademeli olarak inşa edilebildiği ve rijit bir yıldız kabuğu gerektirmediği için en olası büyük ölçekli mimaridir.',
        '<strong>Ekvatoral halka:</strong> Düşük kapsama verimliliğine sahip daha dar bir toplayıcı bandı. İlk mega yapı olarak hayal etmesi daha kolaydır.',
        '<strong>Rijit kabuk:</strong> Görsel olarak ikonik ancak mekanik olarak elverişsiz. Bir yıldızın etrafındaki kabuk ciddi kararlılık ve malzeme sorunlarına sahiptir.',
        '<strong>Statit ayna bulutu:</strong> Kısmen ışınım basıncıyla tutulan ultra hafif yansıtıcılar. Malzeme talebini azaltır ancak düşük ısı toleransına ve zorlu kontrol gereksinimlerine sahiptir.'
      ]
    }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};