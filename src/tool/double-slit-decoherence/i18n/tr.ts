import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cift-yarik-dekoherans-simulatoru';
const title = 'Çift Yarık Deneyi ve Dekoherans Simülatörü';
const description = 'Hangi-yol dedektörlerini açıp kapatarak kuantum girişiminin iki parçacık bandına nasıl dönüştüğünü görsel bir çift yarık simülatöründe izleyin.';

const howTo = [
  {
    name: 'Dedektörü kapalı halde başlatın',
    text: 'Hangi-yol dedektörünü devre dışı bırakın ve ekranın, koherent olasılık genliklerinden aydınlık ve karanlık girişim saçakları oluşturmasını izleyin.',
  },
  {
    name: 'Dedektör güçlendirmesini artırın',
    text: 'Hangi-yol bilgisi eklemek için dedektör kontrolünü yükseltin. Dedektör güçlendikçe koherens düşer ve saçaklar kaybolur.',
  },
  {
    name: 'Yarık geometrisini değiştirin',
    text: 'Yarık aralığını ve yarık genişliğini ayarlayarak geometrinin saçak aralığını, zarf genişliğini ve ekrandaki son dağılımı nasıl değiştirdiğini görün.',
  },
  {
    name: 'Canlı metrikleri okuyun',
    text: 'Saçak görünürlüğü, hangi-yol bilgisi ve koherens değerlerini kullanarak görsel deseni kuantum ölçüm hikayesiyle ilişkilendirin.',
  },
];

const faq = [
  {
    question: 'Dedektörler açıldığında desen neden değişiyor?',
    answer: 'Parçacığın hangi yarığı kullandığını ortaya çıkarabilen bir dedektör, iki alternatif yol arasındaki faz ilişkisini yok eder. Bu koherens olmadan, iki olası yol çubuğu daha fazla girişim yapmaz ve ekran iki geniş parçacık bandına yaklaşır.',
  },
  {
    question: 'Bu simülatör, bilincin dalga fonksiyonunu çökerttiği anlamına mı geliyor?',
    answer: 'Hayır. Simülatör fiziksel "hangi-yol" bilgisine ve dekoheransa odaklanır. Bir dedektör, çevre veya yolu ayırt edilebilir kılan herhangi bir etkileşim, bilinçli bir gözlemci gerektirmeden girişimi bastırabilir.',
  },
  {
    question: 'Saçak görünürlüğü nedir?',
    answer: 'Saçak görünürlüğü, ekrandaki aydınlık ve karanlık bölgelerin kontrastını ölçer. Yüksek görünürlük güçlü girişim deseni anlamına gelir. Düşük görünürlük ise karanlık boşlukların dolduğu ve desenin daha çok iki bağımsız parçacık akışı gibi davrandığı anlamına gelir.',
  },
  {
    question: 'Bu tam bir kuantum mekaniği çözücü mü?',
    answer: 'Hayır. Bu, çift yarık girişim zarfı ile dekoherans kontrolünü birleştiren eğitimsel bir modeldir. Ölçüm etkisini görsel olarak açıklamak için yapılmıştır; Schrödinger denklemi simülasyonunun yerini almak için değildir.',
  },
  {
    question: 'Yarık aralığı neden saçak aralığını etkiliyor?',
    answer: 'Daha geniş aralık, ekran boyunca daha hızlı bir faz farkı oluşturur, bu nedenle aydınlık ve karanlık bantlar birbirine yaklaşır. Daha küçük aralık ise saçakları genişletir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Çift yarık düzeneği',
    controls: 'Çift yarık kontrolleri',
    results: 'Çift yarık sonuçları',
    kicker: 'Ölçüm kontrolü',
    detectorToggle: 'Hangi-yol dedektörünü etkinleştir',
    detectorStrength: 'Dedektör güçlendirmesi',
    slitSeparation: 'Yarık aralığı',
    slitWidth: 'Yarık genişliği',
    unobserved: 'Gözlemlenmemiş',
    observed: 'Gözlemlenmiş',
    waveMode: 'Girişim',
    particleMode: 'Parçacık bantları',
    fringeVisibility: 'Saçak görünürlüğü',
    whichPath: 'Hangi-yol bilgisi',
    coherence: 'Koherens',
    readoutNote: 'Her iki yol da ayırt edilemez kaldığında girişim hayatta kalır. Ölçüm, yol bilgisini kullanılabilir hale getirir ve ekran karanlık saçaklarını kaybeder.',
  },
  seo: [
    {
      type: 'title',
      text: 'Dekoherans ve hangi-yol dedektörü ile çift yarık deneyi simülatörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu çift yarık simülatörü, klasik kuantum deneyini interaktif bir görsel modele dönüştürür. Dedektör kapalıyken ekran bir girişim deseni gösterir: iki olası yol koherent kaldığı için aydınlık ve karanlık bantlar oluşur. Hangi-yol dedektörü eklendiğinde, yol alternatifleri ayırt edilebilir hale geldiği için desen yavaş yavaş iki geniş parçacık bandına dönüşür.',
    },
    {
      type: 'paragraph',
      html: 'Araç, gözlemin çift yarık sonucunu neden değiştirdiğine dair net bir açıklama arayan öğrenciler için tasarlanmıştır. "Gözlemci gerçekliği değiştirir" gibi belirsiz ifadelerden kaçınır ve bunun yerine fiziksel olarak yararlı olan fikre odaklanır: Girişim, ayirt edilemez alternatifler gerektirirken, ölçüm ve çevre dolanıklığı, saçaklar için gerekli faz ilişkisini ortadan kaldırır.',
    },
    {
      type: 'title',
      text: 'Çift yarık deneyinin gösterdiği',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gözlemlenmemiş düzeneksel kurulumda, tek bir kuantum nesnesi her iki yarıkla ilişkili olasılık genlikleriyle tanımlanır. Bu genlikler faz ile toplanır. Ekranın bazı konumlarında birbirlerini güçlendirerek aydınlık bantlar oluştururlar; diğer konumlarda birbirlerini iptal ederek karanlık bantlar oluştururlar. Bu değişimli yapı, girişimin imzasıdır.',
    },
    {
      type: 'paragraph',
      html: 'Bir dedektör hangi yarığın kullanıldığını kaydederse, alternatifler ayırt edilemez olmaktan çıkar. Ekran artık koherent bir genlik toplamı almaz. Yol koşullu iki sonucun bir karışımını alır, bu nedenle karanlık girişim boşlukları dolar ve sonuç, parçacığın bir veya diğer yarıktan geçiyormuş gibi görünür.',
    },
    {
      type: 'title',
      text: 'Simülatör nasıl okunur',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kontrol veya metrik', 'Neyi değiştirir', 'Nelere dikkat edilmeli'],
      rows: [
        ['Dedektör güçlendirmesi', 'Ne kadar hangi-yol bilgisi mevcut', 'Daha yüksek değerler saçak görünürlüğünü azaltır ve parçacık desenini artırır.'],
        ['Yarık aralığı', 'İki açıklık arasındaki mesafe', 'Geniş aralık, girişim bantlarını ekranda daha sık hale getirir.'],
        ['Yarık genişliği', 'Her açıklığın boyutu', 'Daha geniş yarıklar kırınım zarfını daraltır ve genel parlaklığı yeniden şekillendirir.'],
        ['Saçak görünürlüğü', 'Ekran kontrastı', 'Yüksek bir sayı, koherent girişimin hala görünür olduğu anlamına gelir.'],
        ['Koherens', 'Yollar arasındaki faz ilişkisi', 'Dedektör yolları ayırt edilebilir kıldıkça koherens düşer.'],
      ],
    },
    {
      type: 'title',
      text: 'Gizemcilik olmadan dekoherans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dekoherans, bir kuantum sisteminin bir dedektör veya çevre ile ilişkilendirildiğinde kullanılabilir faz koherensinin kaybıdır. Bir çift yarık deneyinde bu ilişki, hangi-yol bilgisi taşıyabilir. Yol prensipte kaydedildiğinde, kimse kaydı okumasa bile, girişim deseni bastırılır.',
    },
    {
      type: 'paragraph',
      html: 'Bu ayrım önemlidir çünkü birçok açıklama insan gözleminin rolünü abartır. Önemli fizik, görme veya bilinç değildir; önemli olan, deney düzeneğinin aksi takdirde girişim yapacak alternatiflerin ayırt edilemezliğini koruyup korumadığıdır.',
    },
    {
      type: 'title',
      text: 'Bu eğitim modelinin sınırları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simülatör, kompakt bir optik tarzı çift yarık deseni kullanır ve bunu dekoherans için bir dedektör güçlendirmesi modeliyle birleştirir. Sezgi, sınıf gösterimleri ve kavramsal tekrar için mükemmeldir, ancak dedektör Hilbert uzayları, gürültü kaynakları veya laboratuvar kalibrasyonuna sahip tam bir kuantum düzeneğinin sayısal çözümü değildir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Kavramları anlamak için kullanın:</strong> girişim, hangi-yol bilgisi, koherens ve ölçüm.',
        '<strong>Deney tasarımı için kullanmayın:</strong> gerçek çift yarık deneyleri hassas dalga boyu, açıklık, dedektör ve yayılım hesaplamaları gerektirir.',
        '<strong>Eğilime odaklanın:</strong> ayırt edilebilirlik arttıkça, girişim kontrastı azalır.',
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