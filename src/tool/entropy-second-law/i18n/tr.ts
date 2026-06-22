import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'entropi-ikinci-yasa-simulatoru';
const title = 'Entropi ve Termodinamiğin İkinci Yasası Simülatörü';
const description = 'Sıcak ve soğuk parçacık odalarının karışmasını, dengelenmesini ve entropiyi yükseltmesini görsel bir difüzyon simülatörü ve canlı entropi grafiği ile izleyin.';

const howTo = [
  {
    name: 'Sol ve sağ sıcaklıkları ayarlayın',
    text: 'Bir başlangıç termal dengesizliği oluşturmak için daha soğuk bir oda ve daha sıcak bir oda seçin. Fark büyüdükçe dengeye doğru geri dönüşü olmayan yaklaşımı görmek kolaylaşır.',
  },
  {
    name: 'Bariyer açıklığını ayarlayın',
    text: 'İki oda arasındaki geçidi açın veya daraltın. Daha geniş bir açıklık, parçacıkların ve enerjinin daha hızlı yayılmasını sağlar, böylece entropi eğrisi daha hızlı yükselir.',
  },
  {
    name: 'Parçacık kutusunu gözlemleyin',
    text: 'Mavi parçacıklar düşük enerjili hareketi, turuncu parçacıklar ise yüksek enerjili hareketi temsil eder. Çarpışmalar ve geçişler biriktikçe kutu daha karışık ve daha az düzenli hale gelir.',
  },
  {
    name: 'Entropi grafiğini okuyun',
    text: 'Mekansal karışma ve termal dengelemenin tek bir yükselen entropi puanında nasıl birleştiğini takip edin. Eğri, izole sistemlerin neden daha olası makro durumlara doğru evrildiğine dair sezgi geliştirmek içindir.',
  },
];

const faq = [
  {
    question: 'Bu simülatörde entropi neden yükseliyor?',
    answer: 'Başlangıç durumu yapay olarak düzenlenmiştir: bir taraf daha soğuk, diğer taraf daha sıcaktır. Bariyer değişime izin verdiğinde, ayrılmış düzenlemelerden çok daha fazla karışık düzenleme vardır, bu nedenle sistem doğal olarak ezici bir şekilde daha olası olan makro duruma doğru hareket eder.',
  },
  {
    question: 'Bu, ikinci yasayı tam olarak kanıtlıyor mu?',
    answer: 'Hayır. Bu, moleküler dinamik laboratuvar kodu değil, didaktik bir parçacık modelidir. Kullanıcıların entropinin neden artma eğiliminde olduğunu sorduklarında sahip oldukları arama amacı olan geri dönüşümsüz difüzyon ve termal dengelemenin ardındaki temel sezgiyi yakalar.',
  },
  {
    question: 'Burada uzamsal entropi ve termal entropi ne anlama geliyor?',
    answer: 'Uzamsal entropi, parçacıkların sol ve sağ odalar arasında ne kadar eşit dağıldığını ölçer. Bu simülatördeki termal entropi, iki yarı arasındaki enerji boşluğunun ne kadar küçük olduğunu ölçer. Toplam puan, kullanıcıların karışma ve ısı akışını aynı anda görebilmesi için her ikisini harmanlar.',
  },
  {
    question: 'Dengeye yakınken bile parçacıklar neden hareket etmeye devam ediyor?',
    answer: 'Denge, hareketin durduğu anlamına gelmez. Makroskobik dengesizliğin ortadan kalktığı anlamına gelir. Moleküller hâlâ hareket eder, çarpışır ve enerji alışverişi yapar, ancak kullanılacak kalıcı bir büyük ölçekli yön kalmamıştır.',
  },
  {
    question: 'Entropi hiçbir zaman anlık olarak azalabilir mi?',
    answer: 'Mikroskobik sistemlerde küçük dalgalanmalar mümkündür. Bu görsel araç, bu dalgalanmaları yumuşatır ve genel istatistiksel eğilimi vurgular: büyük bir izole sistemde, düşük entropili düzenli durumlar, karışık durumlardan çok daha az olasıdır.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Geri dönüşümsüz karışma',
    results: 'Entropi simülatörü sonuçları',
    particleBox: 'Parçacık difüzyon kutusu',
    barrier: 'Bariyer',
    entropyGraph: 'Zaman içinde entropi grafiği',
    liveTrace: 'Canlı iz',
    highEntropy: 'yüksek',
    midEntropy: 'orta',
    lowEntropy: 'düşük',
    controls: 'Entropi simülatörü kontrolleri',
    leftTemperature: 'Sol sıcaklık',
    rightTemperature: 'Sağ sıcaklık',
    gateAperture: 'Bariyer açıklığı',
    pause: 'Duraklat',
    reset: 'Durumu sıfırla',
    resume: 'Devam et',
    totalEntropy: 'Toplam entropi',
    particleBalance: 'Sol/sağ parçacıklar',
    spatialEntropy: 'Uzamsal entropi',
    thermalEntropy: 'Termal entropi',
    energyGap: 'Enerji boşluğu',
    noteLabel: 'Yorum',
    stateGradient: 'Gradyan',
    stateMixing: 'Karışma',
    stateEquilibrium: 'Denge',
    note: 'Makro durum olasılığı maksimum düzensizliğe işaret eder.',
  },
  seo: [
    {
      type: 'title',
      text: 'Termodinamiğin ikinci yasası ve geri dönüşümsüz difüzyon için entropi simülatörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu entropi simülatörünü fiziğin en önemli fikirlerinden birini görselleştirmek için kullanın: izole sistemler, yapay olarak düzenlenmiş durumlardan daha olası karışık durumlara doğru evrilir. Statik bir entropi tanımını okumak yerine, canlı bir eğri düzensizliğin yükselişini izlerken sıcak bir oda ile soğuk bir odanın gerçek zamanlı olarak parçacık ve enerji alışverişini izleyebilirsiniz.',
    },
    {
      type: 'paragraph',
      html: 'Bu araç, "entropi neden artar", "ikinci yasa nasıl çalışır" ve "termal difüzyon nedir" gibi soruların ardındaki en yaygın arama amacı için tasarlanmıştır. Amaç sadece düzensizlik hakkında bir slogan vermek değil, entropiyi olasılık, ısı akışı, karışma ve denge ile anında görünür hissettiren bir şekilde ilişkilendirmektir.',
    },
    {
      type: 'title',
      text: 'Termodinamiğin ikinci yasasının pratik anlamı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İkinci yasa, izole bir sistem için kendiliğinden süreçlerin daha yüksek entropili makro durumlara doğru hareket ettiğini söyler. Günlük dilde bu, sıcak parçacıklar bir tarafta ve soğuk parçacıklar diğer tarafta olacak şekilde güçlü bir şekilde organize edilmiş bir termal düzenlemenin, onu sürdürmek için sürekli iş sağlanmadıkça ayrı kalmayacağı anlamına gelir.',
    },
    {
      type: 'paragraph',
      html: 'Bu, maddenin mistik bir anlamda "kaosu tercih etmesi" nedeniyle olmaz. Karışık bir duruma karşılık gelen mikroskobik düzenlemelerin, ayrılmış bir durumdan çok daha fazla olması nedeniyle olur. Bu nedenle entropi, termodinamiği sayma ile ilişkilendirir: uyumlu mikro durumların sayısı ne kadar büyükse, entropi de o kadar büyük olur.',
    },
    {
      type: 'title',
      text: 'Bu entropi difüzyon simülatörü nasıl çalışır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Parçacık kutusu, bir bariyer boyunca sıcaklık dengesizliği olan düşük entropili bir konfigürasyonda başlar. Odalar arasındaki geçit açıkken, parçacıklar geçer, çarpışır ve enerjiyi bir taraftan diğerine taşır. Simülasyon iki sezgisel bileşeni izler: parçacıklar daha az ayrıştıkça artan <strong>uzamsal entropi</strong> ve sol ve sağ enerji dağılımları daha az farklı hale geldikçe artan <strong>termal entropi</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Ekranda gösterilen toplam entropi puanı, bu iki bileşenden oluşturulmuş bir öğretim vekilidir. Laboratuvar sınıfı bir durum işlevi değildir ve tam istatistiksel mekaniği yeniden ürettiğini iddia etmez. Amacı, kullanıcıların doğru sezgiyi geliştirmesine yardımcı olmaktır: geri dönüşümsüz ısı akışı ve difüzyon, sistemi dengeye doğru hareket ettirir çünkü denge çok daha fazla erişilebilir düzenlemeye karşılık gelir.',
    },
    {
      type: 'table',
      headers: ['Görsel sinyal', 'Temsil ettiği şey', 'Neden önemli'],
      rows: [
        ['Mavi vs turuncu parçacıklar', 'Bağıl kinetik enerji', 'Sıcaklık farklılıklarının aslında ortalama mikroskobik hareket farklılıkları olduğunu gösterir.'],
        ['Bariyer açıklığı', 'Odalar arası değişim kolaylığı', 'Taşıma yolu değiştiğinde difüzyon hızının neden değiştiğini görmenizi sağlar.'],
        ['Uzamsal entropi ölçer', 'Parçacıkların ne kadar eşit yayıldığı', 'Sadece karışmanın bile makro durumu daha olası hale getirdiğini açıklar.'],
        ['Termal entropi ölçer', 'Sol-sağ enerji boşluğunun ne kadar küçüldüğü', 'Dengenin sadece konumla değil, aynı zamanda enerji paylaşımıyla da ilgili olduğunu gösterir.'],
        ['Entropi eğrisi', 'Zaman içindeki eğilim', 'Geri dönüşümsüzlük soyut fikrini görünür bir tek yönlü gevşeme sürecine dönüştürür.'],
      ],
    },
    {
      type: 'title',
      text: 'Her parçacık basit harekete uyarken entropi neden artabilir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Öğrenciler genellikle ikinci yasanın sürtünme, niyet veya özel bir "zaman oku kuvveti" gerektirdiğini varsayar. Daha derin nokta istatistikseldir. Her parçacık yerel kurallara uyar, ancak birçok parçacık etkileşime girdiğinde, karışık makro durumların sayısı düzenli makro durumların sayısını tamamen domine eder. Bu nedenle sistem neredeyse tüm zamanını karışık konfigürasyonlarda ve yalnızca son derece küçük bir kısmını düzgün bir şekilde ayrılmış olanlarda geçirir.',
    },
    {
      type: 'paragraph',
      html: 'Bu nedenle bir damla boya suda yayılır, bir ısıtıcı kapatıldıktan sonra bir odanın sıcaklığı dengelenir ve sıcak bir nesne daha soğuk bir nesneyle temas ettiğinde soğur. Ters süreç, katı mikroskobik anlamda Newton hareketi tarafından yasaklanmamıştır, ancak büyük sistemler için istatistiksel olarak o kadar olasılık dışıdır ki insan ölçeğinde etkili bir şekilde asla gözlemlenmez.',
    },
    {
      type: 'title',
      text: 'Entropi, denge ve yaygın yanılgılar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Entropi sadece "dağınıklık" değildir:</strong> daha kesin fikir, aynı makroskobik tanımla uyumlu mikroskobik düzenlemelerin sayısıdır.',
        '<strong>Denge hareketsizlik anlamına gelmez:</strong> parçacıklar sürekli hareket etmeye devam eder, ancak büyük ölçekli dengesizlikleri birbirini götürür.',
        '<strong>Isı akışı yönlüdür çünkü olasılık yönlüdür:</strong> enerjiyi keskin bir şekilde ayrı tutmaktan çok daha fazla paylaşma yolu vardır.',
        '<strong>Düşük entropi imkansız değildir:</strong> sadece izole sistemin dışından kısıtlamalar, hazırlık veya iş gerektirir.',
        '<strong>Bu simülatör niteldir:</strong> kesin kalorimetri, bölüşüm fonksiyonları veya moleküler taşıma katsayıları değil, fiziksel sezgi sağlar.',
      ],
    },
    {
      type: 'title',
      text: 'Bu simülatör ne zaman kullanılmalı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sınıf gösterimleri, fizik tekrarı, kimya eğitimi, bilim yazarlığı ve hızlı kavramsal açıklamalar için kullanın. Özellikle ısının sıcaktan soğuğa aktığını anlayan ancak bunun olasılık, makro durum sayımı ve termodinamiğin ikinci yasasıyla nasıl bağlantılı olduğunu henüz göremeyen biri için faydalıdır.',
    },
    {
      type: 'paragraph',
      html: 'Amacınız gerçek bir gaz, motor çevrimi veya laboratuvar sistemi için titiz bir termodinamik hesaplama ise, durum denklemlerine, sınır koşullarına ve deneysel olarak temellendirilmiş parametrelere ihtiyacınız olacaktır. Amacınız difüzyonun neden geri dönüşümsüz olduğu ve entropinin neden yükselme eğiliminde olduğu konusunda sezgi ise, bu simülatör tam da bu soru için inşa edilmiştir.',
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
