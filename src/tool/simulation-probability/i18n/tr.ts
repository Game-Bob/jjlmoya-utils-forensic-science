const description = 'Nick Bostrom\'un trilemma argümanını kullanarak gerçekliğimizin bir simülasyon olup olmadığını analiz edin. 4 ana parametre ile varoluşsal olasılığı hesaplayın.';
const slug = 'simulasyon-olasiligi-hesaplayici';
const title = 'Simülasyon Olasılığı Hesaplayıcı: Sanal Bir Evrende mi Yaşıyorsunuz?';
const howTo = [
    {
      name: 'Teknolojik İlerlemeyi Ayarlayın',
      text: 'İnsanlığın post-insan seviyesine ulaşma olasılığını tahmin edin. %50 nötrdür; yapay zeka ve bilişimin katlanarak ilerlemeye devam edeceğine inanıyorsanız artırın.',
    },
    {
      name: 'Hayatta Kalma Oranını Belirleyin',
      text: 'İnsanlığın kendi kendini yok etmeme olasılığını düşünün. Savaşlar, iklim değişikliği, pandemilerdeki faktörler. Yüksek değerler = geleceğimiz hakkında iyimserlik.',
    },
    {
      name: 'Simüle Etme Merakını Değerlendirin',
      text: 'Eğer insanlık post-insan seviyesine ulaşırsa geçmişinin simülasyonlarını yaratmak ister mi? Motivasyonları düşünün: bilimsel araştırma, eğlence, tarihsel koruma.',
    },
    {
      name: 'Sonucu yorumlayın',
      text: 'Olasılıkların nasıl değiştiğini gözlemleyin. %90\'ın üzerindeki sonuçlar, varsayımlar karşılanırsa simülasyonun neredeyse kaçınılmaz olduğunu gösterir. Farklı gelecekleri keşfetmek için parametrelerle oynayın.',
    },
  ];
const faq = [
    {
      question: 'Bostrom\'un argümanı tam olarak nedir?',
      answer: 'Nick Bostrom, post-insan bir medeniyetin yeterli hesaplama gücüne sahip olması durumunda, önceki evrenlerin milyonlarca simülasyonunu oluşturabileceğini öne sürer. Eğer bu gerçekleşirse, simüle edilmiş varlıkların sayısı, orijinal biyolojik varlıklardan çok daha fazla olacaktır. İstatistiksel olarak bu durumda bir simülasyon olma olasılığınız orijinal olma olasılığınızdan daha yüksektir.',
    },
    {
      question: 'Yüksek olasılıklar kesinlikle bir simülasyon olduğumuz anlamına mı gelir?',
      answer: 'Hayır. Yüksek olasılıklar bunun düşünülmesi gereken ciddi bir ihtimal olduğunu gösterir, ancak bu bir kanıt değildir. Argüman, gerçekleşmeyebilecek teknoloji geleceği hakkındaki varsayımlara dayanmaktadır.',
    },
    {
      question: 'Bir simülasyon olduğumuzu bilmek bizi nasıl etkilerdi?',
      answer: 'Felsefi olarak birçoğu bunun temel hiçbir şeyi değiştirmeyeceğini savunuyor. Eğer siz ve sevdikleriniz birlikte simüle ediliyorsanız, deneyimleriniz, duygularınız ve ilişkileriniz gerçek ve hissedilir kalır. Önemli olan yaşanan deneyimdir, temel değil.',
    },
    {
      question: 'Bir simülasyonda olduğumuza dair bilimsel bir kanıt var mı?',
      answer: 'Kesin bir kanıt yoktur. Bazı fizikçiler kuantum mekaniğindeki anomalileri (kuantizasyon, dolanıklık) olası "hesaplamalı optimizasyonlar" olarak gösterse de bunlar spekülatif yorumlardır.',
    },
    {
      question: '"N" (simülasyon ölçeği) değerine ne atamalıyım?',
      answer: 'Bilgisayarın geleceği hakkındaki inançlarınıza bağlıdır. Düşük değerler (100-1000) kaynak kısıtlamalarını varsayar. Yüksek değerler (milyonlar) pratik olarak sınırsız hesaplama gücü varsayar. Çoğu bilimsel tartışma 1000 ile 1 trilyon arasındaki değerleri kullanır.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopyalandı',
    noHistory: 'Geçmiş yok',
    load: 'Yükle',
    delete: 'Sil',
    simulationParameters: 'Simülasyon Parametreleri',
    fpLabel: 'fp',
    fpSub: 'Teknolojik İlerleme',
    flLabel: 'fl',
    flSub: 'Türlerin Hayatta Kalması',
    fiLabel: 'fi',
    fiSub: 'Simüle Etme Merakı',
    nLabel: 'N',
    nSub: 'Simülasyon Ölçeği',
    probabilityTitle: 'Simülasyon Olasılığı',
    trilemmaResult: 'Trilemma Kararı',
    scenario1: 'Senaryo 1: Neslin Tükenmesi',
    scenario2: 'Senaryo 2: İlgisizlik',
    scenario3: 'Senaryo 3: Simüle Ediliyoruz',
    fpDescription: 'İnsanlığın bilinçli evrenleri simüle etmek için teknik kapasiteye ulaşma olasılığı.',
    flDescription: 'Post-insan seviyesine ulaşmadan önce çöküşten (neslin tükenmesi, savaş) kaçınma olasılığı.',
    fiDescription: 'İleri medeniyetlerin atalarının simülasyonlarını oluşturmaya karar verme yüzdesi.',
    nDescription: 'Her ileri medeniyetin tipik olarak aynı anda çalıştırdığı simüle edilmiş dünya sayısı.',
    verdictDetail: 'Veriler, bilincinizin bir yazılım süreci olmasının son derece muhtemel olduğunu gösteriyor.',
  },
  seo: [
    {
      type: 'title',
      text: 'Bir simülasyonda mı yaşıyoruz? Nick Bostrom\'un argümanının arkasındaki bilim',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gerçekliğimizin yapay bir kurgu, son derece gelişmiş bir bilgisayar simülasyonu olabileceği fikri, bilim kurgudan ciddi bir felsefi ve bilimsel tartışmaya dönüştü. 2003 yılında Oxford Üniversitesi\'nden filozof Nick Bostrom, varoluş algımıza meydan okuyan bir trilemma argümanı önerdiği <em>"Bir Bilgisayar Simülasyonunda mı Yaşıyorsunuz?"</em> başlıklı bir makale yayınladı.',
    },
    {
      type: 'paragraph',
      html: 'Bu simülasyon olasılığı hesaplayıcısı, bilincinizin aslında post-insan bir medeniyet tarafından yürütülen bir yazılım sürecinin sonucu olma olasılığını tahmin etmek için Bostrom\'un hipotezinden türetilen temel parametreleri kullanır.',
    },
    {
      type: 'title',
      text: 'Simülasyon Argümanının Temelleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bostrom\'un argümanı bir simülasyonun içinde olduğumuzu belirtmez, ancak aşağıdaki üç ifadeden en az birinin neredeyse kesinlikle doğru olduğunu söyler:',
    },
    {
      type: 'list',
      items: [
        '<strong>Erken Yok Oluş:</strong> İnsan türü, ata simülasyonlarını çalıştırabilecek bir post-insan aşamasına ulaşmadan önce yok olacaktır.',
        '<strong>Teknolojik İlgisizlik:</strong> Herhangi bir post-insan medeniyeti, etik veya eğlence nedenleriyle atalarının simülasyonlarını çalıştırmakla ilgilenmeyecektir.',
        '<strong>Her Yerdeki Simülasyon:</strong> Neredeyse kesinlikle bir simülasyonun içinde yaşıyoruz çünkü simüle edilmiş zihinlerin sayısı, orijinal biyolojik zihinlerin sayısını büyük ölçüde aşıyor.',
      ],
    },
    {
      type: 'title',
      text: 'Parametreler Nasıl Yorumlanır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu aracı doğru kullanmak için model değişkenlerinin neyi temsil ettiğini anlamak çok önemlidir:',
    },
    {
      type: 'table',
      headers: ['Değişken', 'Kavram', 'Anlamı'],
      rows: [
        ['<strong>fp</strong>', 'Teknolojik İlerleme', 'Bir medeniyetin zihinleri simüle etme kapasitesine ulaşma olasılığı.'],
        ['<strong>fl</strong>', 'Hayatta Kalma Oranı', 'Medeniyetin o noktaya ulaşmadan önce kendini yok etmeme olasılığı.'],
        ['<strong>fi</strong>', 'Simüle Etme Merakı', 'Güçlerini sanal dünyalar yaratmak için kullanmaya karar veren medeniyetlerin yüzdesi.'],
        ['<strong>N</strong>', 'Simülasyon Ölçeği', 'Tek bir post-insan medeniyetinin oluşturacağı toplam simülasyon sayısı.'],
      ],
    },
    {
      type: 'title',
      text: 'Olasılık neden genellikle bu kadar yüksektir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Post-insan bir medeniyetin muazzam bir hesaplama gücüne (Dyson Küresi veya Jüpiter Beyni gibi) sahip olacağını varsayarsak, <strong>N</strong> (simülasyonlar) sayısı milyarlarca olabilir. Eğer <em>N</em> çok büyükse, düşük ilgi (<em>fi</em>) değerlerinde bile simüle edilmiş varlıkların sayısı, orijinal varlıkları kat kat aşacaktır.',
    },
    {
      type: 'title',
      text: 'Kanıtlar ve Hesaplamalı Sınırlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kuantum fiziğinden kozmolojiye kadar bazı bilim insanları, gerçekliğimizin çözünürlüğündeki "glitch"leri veya sınırları arıyorlar. Eğer evrenin minimum bir uzunluğu (Planck Uzunluğu) varsa veya kuantum dolanıklığı gibi kod optimizasyonlarına benzeyen davranışları varsa, hipotez dijital fizik alanında taraftar kazanıyor.',
    },
    {
      type: 'title',
      text: 'Etik Düşünce',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir simülasyon olduğumuzu keşfetsek ahlakımız değişir miydi? Bostrom için önemli olan bilincin deneyimidir. Simüle edilmiş bir zihin de tıpkı biyolojik olan gibi acı çeker ve sever.',
    },
    {
      type: 'title',
      text: 'Hesaplayıcı Kullanım Durumları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bilim Eğitimi:</strong> Kozmolojiye uygulanan olasılıksal modelleri anlamak.',
        '<strong>Çağdaş Felsefe:</strong> Bostrom\'un trilemmasını etkileşimli olarak keşfetmek.',
        '<strong>Fütüroloji:</strong> Türlerin hayatta kalma oranının kaderimiz üzerindeki etkisini analiz etmek.',
        '<strong>Varoluşsal Merak:</strong> Teknolojinin geleceği hakkındaki kendi inançlarınızı değerlendirmek.',
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

