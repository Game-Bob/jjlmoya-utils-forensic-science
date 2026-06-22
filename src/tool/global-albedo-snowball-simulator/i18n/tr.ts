import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kuresel-albedo-kar-topu-simulatoru';
const title = 'Küresel Albedo ve Kar Topu Dünya Simülatörü';
const description = 'Dünyanın termal radyasyon dengesini, güneş sabiti değişikliklerini, sera gazı konsantrasyonunu ve buz-albedo geri bildirimini keşfederek buz tabakalarının geri çekilip çekilmediğini, stabilize olup olmadığını veya bir kar topu iklimini tetikleyip tetiklemediğini görün.';

const howTo = [
  {
    name: 'Gelen güneş ışığını ayarlayın',
    text: 'Güneş sabiti sürgüsünü hareket ettirerek daha sönük genç Güneş senaryolarını, mevcut Dünya güneş ışığını veya daha parlak gelecek zorlamasını test edin.',
  },
  {
    name: 'Sera gazı konsantrasyonunu ayarlayın',
    text: 'Sera gazı konsantrasyonunu değiştirerek radyatif zorlamanın daha yüksek gezegen albedosu ile nasıl rekabet ettiğini görün.',
  },
  {
    name: 'Gezegeni buzla tohumlayın',
    text: 'Küçük bir kutup başlığı veya büyük bir buzla kaplı dünya ile başlayın. Model geri bildirim döngüsünü yineler ve buzun ilerleyip ilerlemediğini veya geri çekildiğini gösterir.',
  },
  {
    name: 'İklim durumunu okuyun',
    text: 'Sıcaklık, emilen radyasyon, nihai buz örtüsü ve zaman çizelgesi eğrisini kullanarak ılıman, kar topu ve sera sonuçlarını karşılaştırın.',
  },
];

const faq = [
  {
    question: 'Buz-albedo geri bildirimi nedir?',
    answer: 'Buz ve kar, okyanus veya karadan daha fazla güneş ışığını yansıtır. Buz genişlediğinde, gezegen albedosu yükselir, emilen güneş enerjisi düşer ve soğuma daha fazla buz oluşumuna izin verebilir. Buz geri çekildiğinde, daha koyu yüzey daha fazla enerji emer ve ısınma hızlanır.',
  },
  {
    question: 'Kar Topu Dünya ne anlama geliyor?',
    answer: 'Kar Topu Dünya, buzun düşük enlemlere veya neredeyse küresel kapsama ulaştığı varsayımsal bir iklim durumudur. Jeolojik kanıtlar, Dünyanın Neoproterozoik çağda bu tür durumlara yaklaşmış olabileceğini göstermektedir.',
  },
  {
    question: 'Bu tam bir iklim modeli mi?',
    answer: 'Hayır. Öğrenme için kompakt bir enerji dengesi modelidir. Atmosferik sirkülasyonu, bulutları, okyanus ısı taşınımını, mevsimleri, coğrafyayı ve karbon döngüsü geri bildirimlerini görmezden gelir, ancak albedo geri bildiriminin temel radyatif mantığını yakalar.',
  },
  {
    question: 'Sera gazları neden bir kar topu durumunu kırabilir?',
    answer: 'Sera gazları, radyatif zorlama ekleyerek dışa giden uzun dalga soğutmasını azaltır. Kar Topu Dünya senaryolarında, silikat ayrışması yavaşladığında volkanik karbondioksit birikebilir ve sonunda düşük enlem buzlarını eritecek kadar gezegeni ısıtabilir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'İklim kontrolleri',
    solarConstant: 'Güneş sabiti',
    greenhouse: 'Sera gazları',
    initialIce: 'Başlangıç buz örtüsü',
    temperature: 'Denge sıcaklığı',
    absorbed: 'Emilen güneş ışığı',
    finalIce: 'Nihai buz örtüsü',
    albedo: 'Gezegen albedosu',
    forcing: 'Sera zorlaması',
    state: 'İklim durumu',
    timeline: 'Buz değişimi',
    years: 'model yılı',
    snowball: 'Kar topu kilitlemesi',
    temperate: 'Ilıman denge',
    hothouse: 'Sera geri çekilmesi',
    retreating: 'Buz geri çekiliyor',
    advancing: 'Buz ilerliyor',
    stable: 'Dengeye yakın',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Radyasyon tanılaması',
  },
  seo: [
    {
      type: 'title',
      text: 'Buz-albedo geri bildirimi ve Kar Topu Dünya için küresel albedo simülatörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu simülatör, gezegensel iklimdeki en önemli geri bildirim döngülerinden birini keşfeder: buz örtüsü, yansıtıcılık ve emilen güneş ışığı arasındaki bağlantı. Parlak buza sahip bir gezegen, gelen güneş radyasyonunun daha fazlasını uzaya geri yansıtır. Bu soğuma, buzu koruyabilir veya genişletebilir, albedoyu daha da yükselterek sistemi Kar Topu Dünya durumuna doğru iter. Daha az buza sahip bir gezegen daha fazla güneş ışığı emer ve bu da buzul çözülmeyi hızlandırabilir.',
    },
    {
      type: 'paragraph',
      html: 'Güneş sabitini, sera gazı konsantrasyonunu ve başlangıç buz örtüsünü değiştirmek için sürgüleri kullanın. Model daha sonra basit bir küresel enerji dengesini yineler ve iklimin geniş buzullaşmaya, ılıman bir dengeye veya sıcak bir düşük buz durumuna doğru hareket edip etmediğini gösterir. Hızlı sezgi için tasarlanmıştır: her kontrol, radyasyon bütçesindeki fiziksel bir terime doğrudan karşılık gelir.',
    },
    {
      type: 'title',
      text: 'Enerji dengesi nasıl tahmin edilir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Emilen kısa dalga radyasyonu S(1 - a) / 4 olarak tahmin edilir, burada S güneş sabiti ve a gezegen albedosudur. Dörde bölme, Dünyanın diski tarafından yakalanan güneş ışığını tüm küresel yüzey üzerinde bir ortalamaya dönüştürür. Daha yüksek albedo, emilen enerjiyi düşürür; daha yüksek sera gazı konsantrasyonu, yüzey sıcaklığı tahminini yükselten pozitif radyatif zorlama ekler.',
    },
    {
      type: 'table',
      headers: ['Kontrol', 'Fiziksel anlam', 'İklim etkisi'],
      rows: [
        ['Güneş sabiti', 'Dünya yörüngesinde gelen yıldız enerjisi', 'Daha yüksek değerler gezegeni ısıtır ve buzu küçültür.'],
        ['Sera gazları', 'Referans atmosfere göre uzun dalga radyatif zorlama', 'Daha yüksek değerler kar topu kilitlemesini zorlaştırır.'],
        ['Başlangıç buz örtüsü', 'Gezegenin başlangıç yansıtıcılığı', 'Yüksek değerler, albedo geri bildirimi yoluyla kontrolden çıkmış soğumayı tetikleyebilir.'],
      ],
    },
    {
      type: 'title',
      text: 'Albedo geri bildirimi neden doğrusal olmayabilir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Buz-albedo döngüsü yumuşak bir tek yönlü ayarlama değildir. Buz, gezegenin yeterli bir kısmına ulaştığında, daha parlak yüzey o kadar çok emilen güneş ışığını kaldırabilir ki yaz erimesi zayıflar. Ters yönde, geri çekilen buz daha koyu okyanus ve karayı açığa çıkarır, emilimi artırır ve gezegeni buzullaşmadan uzaklaştırır. Bu nedenle, benzer zorlama, başlangıçtaki buz örtüsüne bağlı olarak farklı sonuçlar üretebilir.',
    },
    {
      type: 'paragraph',
      html: 'Gerçek Dünya birçok karmaşıklık ekler: bulutlar, buz üzerinde toz, okyanus ısı taşınımı, kıta konumları, mevsimsel güneş ışığı, deniz buzu dinamikleri ve karbon döngüsü. Basit bir model, birinci dereceden radyasyon bütçesini izole ettiği için hala değerlidir. Kar Topu Dünya hipotezlerinin neden hem zayıf güneş ışığı veya yüksek albedo tetikleyicilerine hem de kaçış için daha sonraki sera gazı birikimine bağlı olduğunu görmenizi sağlar.',
    },
    {
      type: 'title',
      text: 'Simülatörün yorumlanması',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kar topu kilitlemesi:</strong> nihai buz örtüsü çok yüksektir ve denge sıcaklığı donma noktasının çok altında kalır.',
        '<strong>Ilıman denge:</strong> model kısmi buz örtüsü ve orta düzeyde emilen radyasyon ile dengelenir.',
        '<strong>Sera geri çekilmesi:</strong> sera zorlaması ve emilen güneş ışığı yüksek kalırken buz çok küçük bir orana çöker.',
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
