const description = 'Fermi paradoksunu Drake denklemi girdileri, evrimsel filtreler, sinyal ömrü ve algılanabilir Samanyolu medeniyetlerinin zaman projeksiyonu ile modelleyin.';
const slug = 'fermi-paradoksu-filtre-laboratuvari';
const title = 'Fermi Paradoksu Filtre Laboratuvarı';

const howTo = [
  {
    name: 'Drake hattını tahmin edin',
    text: 'Yıldız oluşumu, yaşanabilir gezegen, yaşam, zeka ve teknoloji kaydırıcılarını hareket ettirerek Samanyolu\'nun ne sıklıkla algılanabilir medeniyetler ürettiğini tanımlayın.',
  },
  {
    name: 'Filtre gücünü ayarlayın',
    text: 'Çöküş, kendi kendini yok etme, ekolojik istikrarsızlık veya teknolojik darboğazların medeniyetleri daha hızlı yok etmesini istediğinizde evrimsel filtreyi artırın.',
  },
  {
    name: 'Ömür ile ufku karşılaştırın',
    text: 'Sinyal ömrünü ve projeksiyon ufkunu birlikte kullanın. Kısa bir ömür, medeniyetler düzenli olarak doğsa bile bir galaksiyi sessiz kılabilir.',
  },
  {
    name: 'Zamansal eğriyi okuyun',
    text: 'Grafik, algılanabilir medeniyetleri zaman içinde gösterir; birlikte varoluşu ve yok oluşu görünür kılar, Fermi paradoksunu tek bir sayıya indirgemez.',
  },
];

const faq = [
  {
    question: 'Bu Fermi paradoksu simülatörü ne hesaplar?',
    answer: 'Drake denklemi terimlerini bir hayatta kalma filtresi ve bir zaman ufku ile birleştirerek Samanyolu\'nda aynı anda kaç teknolojik medeniyetin algılanabilir olabileceğini tahmin eder.',
  },
  {
    question: 'Bu gerçek uzaylı medeniyetlerinin bir tahmini mi?',
    answer: 'Hayır. Bu keşif amaçlı bir modeldir. Değeri, varsayımların nasıl etkileşime girdiğini görmektir: bir galaksi tarih boyunca pek çok medeniyet üretebilir ama yine de bizimle örtüşen çok azı olabilir.',
  },
  {
    question: 'Büyük Filtre nedir?',
    answer: 'Büyük Filtre, basit kimyadan uzun ömürlü teknolojik medeniyete giden bir veya daha fazla adımın son derece düşük olasılıklı veya tehlikeli olduğu fikridir.',
  },
  {
    question: 'Sinyal ömrü neden bu kadar önemli?',
    answer: 'Algılanabilirlik örtüşmeye bağlıdır. Yalnızca birkaç yüzyıl boyunca sinyal yayınlayan bir medeniyet gerçek olabilir ancak farklı bir dönemde gözlem yapan başka bir medeniyet için görünmez kalabilir.',
  },
  {
    question: 'Yaşam ve zeka oranlarını nasıl seçmeliyim?',
    answer: 'Kötümser bir nadir-yaşam senaryosu için düşük değerler kullanın; biyolojinin veya zekanın istikrarlı yaşanabilir dünyalarda sıklıkla ortaya çıktığı olasılığını keşfederken daha yüksek değerler tercih edin.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Zaman içinde öngörülen algılanabilir medeniyetler',
    metricsLabel: 'Fermi modeli metrikleri',
    controlsLabel: 'Fermi modeli kontrolleri',
    birthRate: 'Doğum oranı',
    peakCivilizations: 'Zirve medeniyet sayısı',
    finalCivilizations: 'Nihai medeniyet sayısı',
    silenceScore: 'Sessizlik skoru',
    starFormationRate: 'Yıldız oluşum hızı',
    habitableFraction: 'Yaşanabilir gezegen oranı',
    lifeFraction: 'Yaşam oluşum oranı',
    intelligenceFraction: 'Zeka oranı',
    technologyFraction: 'Teknoloji oranı',
    signalLifetime: 'Sinyal ömrü',
    filterSeverity: 'Filtre şiddeti',
    horizonYears: 'Projeksiyon ufku',
    maxLabel: 'maks',
    yearUnit: 'yıl',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'Drake denklemi varsayımları için pratik bir Fermi paradoksu simülatörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fermi paradoksu, Samanyolu yüz milyarlarca yıldız ve gezegen içeriyorsa gece gökyüzünün neden sessiz göründüğünü sorgular. Bu araç, Drake denklemini evrimsel filtreler ve algılanabilir medeniyetlerin zaman projeksiyonu ile birleştirerek bu soruyu etkileşimli bir modele dönüştürür.',
    },
    {
      type: 'paragraph',
      html: 'Tek bir statik tahmin vermek yerine, simülatör medeniyetlerin nasıl doğduğunu, algılanabilir hale geldiğini ve başka bir toplumun onları duyma şansı bulamadan yok olduğunu gösterir. Bu zamanlama sorunu SETI için merkezi öneme sahiptir çünkü iki teknolojik kültürün uzay, zaman ve sinyal davranışında örtüşmesi gerekir.',
    },
    {
      type: 'title',
      text: 'Model Drake denklemi parametrelerini nasıl kullanır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İlk kontroller basitleştirilmiş bir Drake hattını temsil eder. Yıldız oluşumu yeni yıldız sistemleri sağlar. Bu sistemlerin bir kısmı yaşanabilir gezegenler oluşturur, yaşanabilir gezegenlerin bir kısmında yaşam gelişir, yaşayan dünyaların bir kısmı zeka üretir ve zeki türlerin bir kısmı teknoloji aracılığıyla algılanabilir hale gelir.',
    },
    {
      type: 'table',
      headers: ['Kontrol', 'Anlamı', 'Etkisi'],
      rows: [
        ['Yıldız oluşum hızı', 'Samanyolu\'nda yılda oluşan yeni yıldızlar', 'Olası sistemlerin hammadde arzını artırır veya azaltır'],
        ['Yaşanabilir gezegen oranı', 'Sıvı su kimyasının sürebileceği istikrarlı dünyalara sahip sistemlerin payı', 'Galaksinin biyolojik hatta ne kadar girdiğini kontrol eder'],
        ['Yaşam oluşum oranı', 'Yaşanabilir bir dünyada basit yaşamın başlama olasılığı', 'Nadir-yaşam ve yaygın-yaşam varsayımlarını test eder'],
        ['Zeka oranı', 'Yaşamın teknoloji üretebilen bilişe evrilme olasılığı', 'Biyolojik ve ekolojik darboğazları temsil eder'],
        ['Teknoloji oranı', 'Zekanın algılanabilir sinyaller üretme olasılığı', 'Kültür, mühendislik ve iletişim seçimlerini yakalar'],
      ],
    },
    {
      type: 'title',
      text: 'Filtreler neden yoğun bir galaksiyi boş gösterebilir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Filtre şiddeti kaydırıcısı, birçok olası başarısızlık noktasını tek bir hayatta kalma baskısında sıkıştırır: asteroit çarpmaları, istikrarsız iklimler, kendi kendini yok etme, kaynak çöküşü, yapay zeka riski veya algılanabilir aşamayı kısaltan diğer darboğazlar. Güçlü bir filtre, medeniyetlerin asla ortaya çıkmadığı anlamına gelmez. Uzun süre görünür kalamayacakları anlamına gelir.',
    },
    {
      type: 'paragraph',
      html: 'Bu ayrım önemlidir. Samanyolu, derin zaman boyunca binlerce teknolojik tür üretmiş olabilir ancak bizim dar dinleme penceremizde neredeyse hiç aktif komşu bırakmamış olabilir. Grafik, algılanabilir medeniyetleri seçilen projeksiyon ufku boyunca çizerek bu farkı görünür kılar.',
    },
    {
      type: 'title',
      text: 'Sessizlik skorunu yorumlama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sessizlik skoru, örtüşen algılanabilir medeniyetlerin nihai sayısı düşük olduğunda yükselir. Yüksek sessizlik, insanların yalnız olduğunu kanıtlamaz; seçilen varsayımların tespit edilememeyi şaşırtıcı olmaktan çıkardığını gösterir. Düşük sessizlik, modelin daha gürültülü bir galaksi beklediği anlamına gelir, bu nedenle kanıt yokluğu daha ilginç hale gelir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Yüksek doğum oranı artı düşük filtre:</strong> SETI sessizliğini açıklamanın daha zor olduğu kalabalık bir galaksi.',
        '<strong>Yüksek doğum oranı artı yüksek filtre:</strong> birçok medeniyet ortaya çıkar ancak çok azı örtüşecek kadar uzun yaşar.',
        '<strong>Düşük biyolojik oranlar:</strong> yaşam veya zeka nadirdir, bu nedenle sessizlik teknoloji devreye girmeden ortaya çıkabilir.',
        '<strong>Kısa sinyal ömrü:</strong> medeniyetler var olabilir ancak temas olasılığı için çok kısa süre sinyal yayınlarlar.',
      ],
    },
    {
      type: 'title',
      text: 'Öğretim, tartışma ve SETI sezgisi için kullanım alanları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fermi Paradoksu Filtre Laboratuvarı; astronomi derslerinde, astrobiyoloji tartışmalarında, bilim iletişiminde ve insanlığın geleceği hakkındaki felsefi tartışmalarda faydalıdır. Genellikle birbirine karıştırılan üç soruyu ayırmaya yardımcı olur: medeniyetlerin ne sıklıkta doğduğu, ne kadar süre algılanabilir kaldığı ve zaman çizelgelerinin bizimkiyle örtüşüp örtüşmediği.',
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
