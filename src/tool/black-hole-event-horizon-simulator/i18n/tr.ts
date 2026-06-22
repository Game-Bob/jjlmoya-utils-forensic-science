import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kara-delik-olay-ufku-simulatoru';
const title = 'Kara Delik Olay Ufku Simülatörü: Schwarzschild Yarıçapı, Foton Küresi ve Zaman Genişlemesi';
const description = 'Bir kara deliğin olay ufkunu; kütle, yörünge mesafesi, zaman genişlemesi, foton küresi, kaçış hızı ve Schwarzschild yarıçapı ile etkileşimli olarak keşfedin.';

const howTo = [
  {
    name: 'Kara deliğin kütlesini seçin',
    text: 'Kütle kaydırıcısını bir yıldız kütleli kara delikten süper kütleli kara deliğe sürükleyin ve Schwarzschild yarıçapının gerçek zamanda ölçeklenmesini izleyin.',
  },
  {
    name: 'Probu ufka yakınlaştırın',
    text: 'Mesafeyi Schwarzschild yarıçapları cinsinden ayarlayarak daha güvenli bir dış yörüngeyi, foton küresi bölgesini ve olay ufkunun kenarını karşılaştırın.',
  },
  {
    name: 'Göreceli etkileri inceleyin',
    text: 'Kaçış hızı, kütle çekimsel zaman genişlemesi, kızıla kayma ve yörünge periyodunu okuyarak sıradan sezgilerin neden ufka yakın bir yerde geçersiz olduğunu görün.',
  },
  {
    name: 'Belirli yarıçapları karşılaştırın',
    text: 'Olay ufku, foton küresi ve ISCO kılavuz halkalarını kullanarak dönmeyen bir kara deliğin etrafındaki farklı sınırları anlayın.',
  },
];

const faq = [
  {
    question: 'Kara deliğin olay ufku nedir?',
    answer: 'Olay ufku, kaçış hızının ışık hızına ulaştığı sınırdır. Bir nesne onu geçtiğinde, ışık hızında veya daha yavaş hareket eden hiçbir sinyal dış evrene geri dönemez.',
  },
  {
    question: 'Schwarzschild yarıçapı ne anlama gelir?',
    answer: 'Schwarzschild yarıçapı, dönmeyen ve yüksüz bir kara deliğin olay ufku yarıçapıdır. Kütleyle doğrusal olarak büyür, bu nedenle kütleyi iki katına çıkarmak ufuk yarıçapını da iki katına çıkarır.',
  },
  {
    question: 'Foton küresi nedir?',
    answer: 'Foton küresi, 1,5 Schwarzschild yarıçapı uzaklıkta, ışığın bir kara delik etrafında kararsız bir yörüngede dolanabildiği bölgedir. Küçük bozulmalar fotonların ya dışarı kaçmasına ya da içeri düşmesine neden olur.',
  },
  {
    question: 'ISCO nedir?',
    answer: 'ISCO, en içteki kararlı dairesel yörünge (Innermost Stable Circular Orbit) anlamına gelir. Dönmeyen bir kara delik için 3 Schwarzschild yarıçapında veya 6 kütle çekim yarıçapında bulunur ve kütleli parçacıklar için son kararlı dairesel yörüngeyi belirler.',
  },
  {
    question: 'Zaman genişlemesi neden ufka yakın bir yerde artar?',
    answer: 'Schwarzschild geometrisinde, kütle çekim alanının daha derinlerindeki saatler, uzak gözlemcilere göre daha yavaş çalışır. Görüntülenen faktör, prob olay ufkuna yaklaştıkça sıfıra yaklaşır.',
  },
  {
    question: 'Bu simülatör dönen bir kara deliği modelleyebilir mi?',
    answer: 'Hayır. Dönüş ve elektrik yükü olmadığını varsayan Schwarzschild çözümünü kullanır. Gerçek astrofiziksel kara delikler genellikle döner ve dönüş; ufuk boyutunu, ISCO konumunu ve disk davranışını değiştirir.',
  },
  {
    question: 'Süper kütleli kara delikler ufukta neden daha az gelgitsel olarak şiddetlidir?',
    answer: 'Ufuktaki gelgit gradyanı, kara delik kütlesi arttıkça azalır. Küçük bir yıldız kütleli kara delik, nesneleri ufka yakın bir yerde şiddetle gerebilirken, süper kütleli bir kara delik bu sınırda daha yumuşak bir yerel gradyana sahip olabilir.',
  },
  {
    question: 'Görselleştirme gerçek bir kara delik görüntüsünü mü gösteriyor?',
    answer: 'Bu bir ışın izleme gözlemi değil, eğitsel bir diyagramdır. Halkalar ve disk, fiziksel bölgelerin karşılaştırılması kolay olsun diye basitleştirilmiş Schwarzschild yarıçaplarına ölçeklendirilmiştir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Olay ufku alan haritası',
    visualCaption: 'Prob, ölçeklendirilmiş Schwarzschild geometrisinde hareket eder. Parlak kılavuz halkaları ufku, foton küresini ve en içteki kararlı dairesel yörüngeyi işaretler.',
    controlsTitle: 'Kara delik kontrolleri',
    eventHorizon: 'Olay ufku',
    photonSphere: 'Foton küresi',
    isco: 'ISCO',
    rsLabel: 'Schwarzschild yarıçapı',
    diameterLabel: 'Çap',
    timeLabel: 'Zaman genişlemesi',
    redshiftLabel: 'Kızıla kayma',
    statusSafe: 'Kararlı yörünge bölgesinin dışında',
    statusPhoton: 'Foton küresi bölgesinin içinde',
    statusInside: 'Ufuk sınırında',
    diameter: 'Ufuk çapı',
    lightCrossing: 'Işık geçiş süresi',
    timeDilation: 'Uzak gözlemciye göre saat hızı',
    redshift: 'Kütle çekimsel kızıla kayma',
    mass: 'Kara delik kütlesi',
    distance: 'Prob mesafesi',
    speed: 'Prob yörünge hızı',
    escapeVelocity: 'Kaçış hızı',
    orbitalPeriod: 'Prob yörünge periyodu',
    tidalGradient: 'Gelgit gradyanı',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 'sn',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'güneş kütlesi',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '%0 c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 güneş kütlesi',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '%32 c',
  },
  seo: [
    {
      type: 'title',
      text: 'Kara delik olay ufku simülatörü: Schwarzschild yarıçapı, foton küresi ve zaman genişlemesi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu kara delik olay ufku simülatörü, Schwarzschild kara deliklerinin temel fikirlerini etkileşimli bir görsel modele dönüştürür. Kara delik kütlesini değiştirin, bir probu içine veya dışına doğru hareket ettirin ve olay ufku, foton küresi, en içteki kararlı dairesel yörünge, kaçış hızı, kütle çekimsel kızıla kayma ve zaman genişlemesinin nasıl tepki verdiğini karşılaştırın.',
    },
    {
      type: 'paragraph',
      html: 'Simülatör; statik bir formülden daha fazlasını isteyen astronomi öğrencileri, fizik öğretmenleri, bilim yazarları ve meraklı öğrenciler için yapılmıştır. Ekran, sayıları uzamsal bir diyagramla bağlayarak olay ufkunun neden maddesel bir yüzey olmadığını, fotonların neden özel bir kararsız yörüngesi olduğunu ve kararlı dairesel hareketin neden ufka ulaşmadan önce durduğunu görsel olarak anlamanızı sağlar.',
    },
    {
      type: 'title',
      text: 'Olay ufku yarıçapı nasıl hesaplanır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dönmeyen, yüksüz bir kara delik için olay ufku yarıçapı <strong>Schwarzschild yarıçapıdır</strong>. <strong>Rs = 2GM / c^2</strong> olarak hesaplanır; burada G kütle çekim sabiti, M kara delik kütlesi ve c ışık hızıdır. Bir güneş kütlesi yaklaşık 2,95 kilometrelik bir Schwarzschild yarıçapına karşılık gelir.',
    },
    {
      type: 'paragraph',
      html: 'Schwarzschild yarıçapı kütleyle doğrusal olarak ölçeklendiğinden, 10 güneş kütleli bir kara delik yaklaşık 29,5 km yarıçapa sahipken, Yay A* gibi 4 milyon güneş kütleli bir kara delik yaklaşık 11,8 milyon km yarıçapa sahiptir. Kütle kaydırıcısı, yıldız kütleli ve süper kütleli durumların aynı kontrolde ele alınabilmesi için logaritmik bir ölçek kullanır.',
    },
    {
      type: 'table',
      headers: ['Bölge', 'Schwarzschild yarıçapı cinsinden yarıçap', 'Anlamı'],
      rows: [
        ['Olay ufku', '1.0 Rs', 'Kaçış hızının ışık hızına eşit olduğu tek yönlü sınır.'],
        ['Foton küresi', '1.5 Rs', 'Bir Schwarzschild kara deliği etrafında ışık için kararsız dairesel yörünge.'],
        ['ISCO', '3.0 Rs', 'Kütleli parçacıklar için en içteki kararlı dairesel yörünge.'],
        ['Zayıf alan', '6 Rs ve ötesi', 'Kütle çekimi hala güçlüdür ancak dairesel yörüngeleri sürdürmek daha kolaydır.'],
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