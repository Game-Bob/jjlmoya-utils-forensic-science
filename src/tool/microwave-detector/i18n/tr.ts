const slug = 'mikrodalga-sizinti-dedektoru';
const description = 'WiFi ağınızdaki gerçek zamanlı paraziti ölçerek mikrodalga fırınınızın radyasyon sızdırıp sızdırmadığını analiz edin. Bilimsel bir güvenlik aracı.';
const title = 'Mikrodalga Sızıntı Dedektörü: WiFi Parazit Görselleştirici';
const howTo = [
    {
      name: '2.4GHz WiFi ağına bağlanın',
      text: 'Parazitin ölçülebilir olması için cep telefonunuzun veya dizüstü bilgisayarınızın 5GHz bandına bağlı OLMADIĞINDAN emin olun.',
    },
    {
      name: 'Temel gecikme testini başlatın',
      text: 'Sabit bir bağlantı temeli oluşturmak için mikrodalga kapalıyken başlat düğmesine basın.',
    },
    {
      name: 'Mikrodalgayı çalıştırın',
      text: 'Bir bardak suyu 30-60 saniye ısıtın ve cihazınızla birlikte aletin yakınında durun.',
    },
    {
      name: 'Gerçek zamanlı grafiği analiz edin',
      text: 'Cihaz çalışırken gecikmenin 100-200ms üzerine çıkıp çıkmadığını veya paket kaybı olup olmadığını gözlemleyin.',
    },
  ];
const faq = [
    {
      question: 'Bir web sitesi mikrodalgamı nasıl algılayabilir?',
      answer: 'Sihirli sensörler değil, ağ gecikmesini kullanıyoruz. Hem 2.4GHz WiFi hem de mikrodalga fırınlar aynı frekansta (yaklaşık 2450 MHz) çalışır. Mikrodalga zırhı başarısız olursa, WiFi ile çarpışan ve gecikmeyi (ping) büyük ölçüde artıran "gürültü" üretir.',
    },
    {
      question: 'Mikrodalgamın sızdırması tehlikeli mi?',
      answer: 'Küçük WiFi parazitleri normaldir ve güç mesafeyle hızla azaldığı için acil bir sağlık riski oluşturmaz. Ancak masif bir sızıntı, teknik güvenlik açısından kontrol edilmesi gereken kapı veya file yalıtımının zayıf olduğunu gösterir.',
    },
    {
      question: 'Test neden 5GHz WiFi ile çalışmıyor?',
      answer: 'Çünkü 5GHz WiFi, mikrodalgadan çok daha yüksek bir frekans bandında çalışır. Testin etkili olması için cihazınızın yönlendiricinin 2.4GHz ağına bağlı olması gerekir.',
    },
    {
      question: 'Grafikteki gecikme sıçramaları ne anlama geliyor?',
      answer: 'Mikrodalga çalışırken sürekli sıçramalar olması, elektromanyetik sinyalin "kaçtığını" ve havayı doyurarak WiFi veri paketlerinin zamanında ulaşmasını engellediğini gösterir.',
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
    microwaveDetection: 'Mikrodalga Algılama',
    shieldingAnalysis: 'Zırh Analizi',
    startTest: 'Testi Başlat',
    stopTest: 'Testi Durdur',
    waitingForStart: 'Başlatılması bekleniyor...',
    detectingInterference: 'Parazit algılanıyor...',
    baseLevel: 'Temel Seviye',
    activeLevel: 'Aktif Seviye',
    leakProbability: 'Sızıntı Olasılığı',
    lowLeak: 'Düşük',
    mediumLeak: 'Orta',
    highLeak: 'Yüksek',
    pingLabel: 'Gecikme (ms)',
    packetLossLabel: 'Paket Kaybı (%)',
    rfInterferenceMonitor: 'RF Parazit Monitörü',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / jitter',
    systemReady: 'Sistem Hazır',
    physicalRequirement: 'Fiziksel Gereksinim',
    physicalDesc: 'Bu dedektör 2.4GHz bandındaki (mikrodalga frekansı) paraziti kullanır. Düzgün çalışması için 2.4GHz WiFi ağına bağlı olduğunuzdan (5GHz/6GHz değil) emin olun veya telefonunuzu cihazın yakınında kullanın.',
    understandStart: 'Anlaşıldı, Taramayı Başlat',
    rfInterferenceTitle: 'Parazit Monitörü',
    connectToAnalyze: 'Termal parazit analizini başlatmak için bağlanın.',
    audioFeedback: 'Sesli Geri Bildirim',
    muteUnmute: 'SESİ KAPAT / AÇ',
    static: 'Statik',
  },
  seo: [
    {
      type: 'title',
      text: 'DALGA FİZİĞİ: Mikrodalga Fırınınız Gerçekten Radyasyon Sızdırıyor mu?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mikrodalga fırın, modern mutfağın en çok yanlış anlaşılan aletidir. Safçılar tarafından nefret edilen ve pragmatistler tarafından sevilen bu alet, hapsedilmiş enerji ile dış dünya arasında sürekli bir savaşı gizler.',
    },
    {
      type: 'paragraph',
      html: 'Tamamen fiziksel bir bakış açısıyla, mikrodalga fırın, su moleküllerini çok spesifik bir frekansta elektromanyetik radyasyonla bombalamak üzere tasarlanmış bir <strong>kovuk rezonatörüdür</strong>: <strong>2.45 GHz</strong>. Bu frekans gelişigüzel seçilmemiştir; su parçacıklarının dipol salınımına neden olarak sürtünme yoluyla ısı üretmek için gereklidir. Sorun şu ki, bu frekans 802.11b/g/n WiFi standardı tarafından kullanılan frekansla tamamen aynıdır.',
    },
    {
      type: 'title',
      text: 'Elektromanyetik Parazit (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '2.4GHz bandında çalışan herhangi bir WiFi cihazı, mikrodalga fırınınızla aynı "hava" için rekabet eder. Kusursuz bir fırında, <strong>Faraday Kafesi</strong> (kapıda ve iç duvarlarda gördüğünüz metal file), enerjinin %100\'ünü hapsetmelidir.',
    },
    {
      type: 'paragraph',
      html: 'Ancak uzun vadede hiçbir kafes mükemmel değildir. Kapı contaları, manyetik mandallar ve metal aşınması küçük miktarlarda enerjinin dışarı sızmasına izin verebilir. Bu seviyeler genellikle insanlar için güvenlik sınırlarının çok altında olsa da, bir WiFi ağ kartı için <strong>devastır</strong>; gecikmeye, paket kaybına ve aracımızın ölçtüğü karakteristik "jitter" değerine neden olur.',
    },
    {
      type: 'title',
      text: 'Ev Yapımı Faraday Kafesi Testi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fırınınızın zırh durumunu kontrol etmenin çok basit bir analog yolu vardır, ancak bu bizim dijital jitter ölçümümüzden daha az doğrudur:',
    },
    {
      type: 'list',
      items: [
        '<strong>Adım 1 - Telefon:</strong> Cep telefonunuzu mikrodalga fırının içine yerleştirin (<strong>HİÇBİR KOŞULDA FIRINI ÇALIŞTIRMAYIN!</strong> Sadece kapıyı kapatın).',
        '<strong>Adım 2 - Arama:</strong> O telefonu başka bir cihazdan aramayı deneyin. Eğer telefon çalarsa, Faraday kafesi kusurludur veya hücresel frekanslar için ayarlanmamıştır. Eğer "ulaşılamıyor" diyorsa, zırhlama düzgün çalışıyordur.',
      ],
    },
    {
      type: 'title',
      text: 'Efsaneler vs Bilimsel Gerçeklik',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Mikrodalgalar suyun moleküler yapısını değiştirir"</strong> - YANLIŞ. Mikrodalga radyasyonu <em>iyonlaştırıcı olmayan</em> bir radyasyondur. Kimyasal bağları koparacak veya DNA\'yı değiştirecek kadar enerjisi yoktur. Sadece su moleküllerini titreştirerek kinetik enerjilerini (sıcaklıklarını) artırır.',
        '<strong>"Radyasyon gıdalarda birikir"</strong> - YANLIŞ. Mikrodalgalar ışık gibidir: düğmeyi kapattığınızda giderler. Sıcak yiyecekler mikrodalga radyasyonu yaymaz, tıpkı bir kamp ateşi veya bir tava gibi sadece kızılötesi radyasyon (ısı) yayar.',
        '<strong>"Dönen tabağı izlemek gözlerinize zarar verir"</strong> - KISMEN DOĞRU. Kapı camı, 2.45GHz dalga boylarını engelleyen bir file ile tasarlanmıştır. Ancak file hasarlıysa, cam mikrodalgaları durduramaz. Göz merceği ısıya karşı çok hassastır ve kan dolaşımı zayıftır, bu nedenle (bir sızıntının yakınında) uzun süreli doğrudan maruz kalma termal katarakta neden olabilir.',
      ],
    },
    {
      type: 'title',
      text: 'Bu dijital dedektör nasıl çalışır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aracımız radyasyonu doğrudan ölçmez (akıllı telefonlarda bunun için sensör yoktur), ancak <strong>ana semptomu</strong> ölçer. Bir 2.45GHz radyasyon molekülü fırından kaçtığında, cihazınızın WiFi sinyaliyle "çarpışır". Bu şunlara neden olur:',
    },
    {
      type: 'list',
      items: [
        '<strong>Paket Tekrarları:</strong> Yönlendirici, mesajın bozuk geldiğini algılar ve yeniden göndermek zorunda kalır, bu da gecikmeyi artırır.',
        '<strong>Jitter Varyasyonu:</strong> Bu, tepki süresindeki istikrarsızlığın ölçüsüdür. Yüksek jitter, masif dış parazitin kesin bir işaretidir.',
        '<strong>Performans Düşüşü:</strong> Radyo spektrumunun doygunluğu nedeniyle transfer hızı hızla düşer.',
        '<strong>Arka Plan Gürültüsü:</strong> Mikrodalga, "gürültü tabanını" yükselten bir gürültü enjekte ederek cihazın gerçek veriler ile radyoaktif kaos arasında ayrım yapmasını zorlaştırır.',
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

