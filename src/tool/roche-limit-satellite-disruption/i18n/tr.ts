const slug = 'roche-siniri-uydu-parcalanmasi-hesaplama';
const title = 'Roche Siniri Hesaplayici ve Uydu Parcalanma Simulatoru';
const description = 'Gezegenler ve uydular icin Roche sinirini hesaplayin, akiskan ve katI kirilma mesafelerini karsilastirin ve gelgit kuvvetlerinin bir uyduyu nasil bir halka sistemine donusturdugunu gorsellestirin.';

const howTo = [
  {
    name: 'Ana gok cismini secin',
    text: 'Uyduyu ceken gezegeni secin. Hesaplayici, Roche siniri ve yorunge periyodu tahminleri icin yaricap, yogunluk ve kutle bilgilerini yukler.',
  },
  {
    name: 'Uydu turunu secin',
    text: 'Bir buzlu uydu, kayali uydu, moloz yigini veya demirce zengin bir cisim secin. Yogunluk ve ic kohezyon, kirilma sinirini degistirir.',
  },
  {
    name: 'Yorunge kaydiricisini hareket ettirin',
    text: 'Yorunge mesafesini ice veya disa surukleyin. Gorsel disk, uydunun Roche sinirinin disinda, ona dokunarak, parcalanarak veya bir halkaya donuserek olup olmadigini gosterir.',
  },
  {
    name: 'Sinirlari karsilastirin',
    text: 'Gostergeleri kullanarak klasik akiskan Roche sinirini, daha dusuk olan kati cisim tahminini ve kohezyona gore ayarlanmis calisma sinirini karsilastirin.',
  },
];

const faq = [
  {
    question: 'Roche siniri nedir?',
    answer: 'Roche siniri, buyuk bir ana cismin gelgit kuvvetlerinin, daha kucuk bir yorunge cismi uzerinde, o cismin kendi kutle cekimini asacak kadar guclu hale geldigi mesafedir. Bu sinirin icinde, zayif veya akiskan bir uydu parcalanabilir.',
  },
  {
    question: 'Neden akiskan ve kati Roche sinirlari var?',
    answer: 'Akiskan bir uydu kolayca deforme olur, bu nedenle gelgitler uzamasini artirabilir ve onu gezegenden daha uzakta parcalayabilir. Kati bir uydu, malzeme dayanimi ile deformasyona direnebilir, bu nedenle basit kati tahmini, kirilmayi ana cisme daha yakin bir yere koyar.',
  },
  {
    question: 'Roche sinirinin icindeki her ay aninda halkaya donusur mu?',
    answer: 'Hayir. Gercek parcalanma; donus, bilesim, catlaklar, gozeneklilik, isinma, carpma ve malzeme dayanimina baglidir. Bu arac, klasik kutle cekim sinirini gosterir ve anlik bir gecis yerine bir gecis bolgesi kullanarak riski iletir.',
  },
  {
    question: 'Saturn\'un halkalari neden Roche siniri fizigine yakin duruyor?',
    answer: 'Saturn\'un halkalari, buzlu malzemenin tek bir buyuk ay haline gelmek yerine parcaciklar olarak kalabildigi bir bolgede bulunur. Roche siniri, halka parcaciklarinin neden gezegene yakin bir sekilde dagilmis halde kaldigini aciklamaya yardimci olur.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Ana gok cismi',
    satelliteType: 'Uydu turu',
    orbitDistance: 'Yorunge mesafesi',
    rocheBoundary: 'Roche siniri',
    fluidLimit: 'Akiskan limit',
    rigidLimit: 'Kati limit',
    activeLimit: 'Aktif limit',
    safetyRatio: 'Guvenlik orani',
    orbitalPeriod: 'Yorunge periyodu',
    tidalStress: 'Gelgit gerilimi',
    ringFormation: 'Halka olusumu',
    stable: 'Kararli yorunge',
    grazing: 'Gelgit temasi',
    fragmenting: 'Parcalaniyor',
    ring: 'Halka sistemi',
    km: 'km',
    hours: 's',
    density: 'Yogunluk',
    cohesion: 'Kohezyon',
    planetRadius: 'Gezegen yaricapi',
    reset: 'Sifirla',
    closePass: 'Yakin gecis',
    moonTrack: 'Ay izi',
    debrisTrack: 'Enkaz izi',
    primaryEarth: 'Dünya',
    primaryMars: 'Mars',
    primaryJupiter: 'Jüpiter',
    primarySaturn: 'Satürn',
    primaryNeptune: 'Neptün',
    satelliteIcyMoon: 'Buzlu ay',
    satelliteRockyMoon: 'Kayalık ay',
    satelliteRubblePile: 'Enkaz yığını',
    satelliteIronCore: 'Demirce zengin ay',
    cohesionFluid: 'Akışkan',
    cohesionFractured: 'Çatlak',
    cohesionRigid: 'Rijit',
  },
  seo: [
    {
      type: 'title',
      text: 'Roche Siniri Formulu, Anlami ve Bu Hesaplayici Nasil Kullanilir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Roche siniri</strong>, temel olarak kendi kutle cekimiyle bir arada duran bir uydunun, gelgit kuvvetleri tarafindan parcalanmadan daha buyuk bir cismin yorungesinde dolanabilecegi minimum mesafedir. Insanlar genellikle bir ayin, kuyruklu yildizin, asteroitin veya yapay bir senaryonun bir gezegene yakin gecisinde hayatta kalip kalamayacagini veya malzemenin bir halkaya yayilip yayilmayacagini ogrenmek icin bu kavrami ararlar. Bu hesaplayici, gezegen yaricapi, gezegen yogunlugu, uydu yogunlugu ve uydunun yaklasik ic dayanimini bir araya getirerek bu soruyu yanitlar.',
    },
    {
      type: 'paragraph',
      html: 'Temel fikir basittir: kutle cekimi uydu boyunca esit gucte degildir. Ana cisme yakin taraf, uzak taraftan daha fazla cekilir ve bir germe kuvveti olusturur. Bu gelgit germesi, uydunun kendi kutle cekiminden ve malzeme kohezyonundan daha gucluyse, cisim catlayabilir, kutle kaybedebilir ve sonunda parcalanabilir. Bu nedenle Roche siniri sadece bir mesafe degildir; dis gelgit gerilimi ile ic baglanma arasinda bir karsilastirmadir.',
    },
    {
      type: 'title',
      text: 'Hesaplayici Tarafindan Kullanilan Roche Siniri Denklemleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Akiskan veya cok zayif bir uydu icin klasik yaklasik deger <strong>d = 2.44 R (rho_M / rho_m)^(1/3)</strong> seklindedir. Kati bir uydu icin yaygin bir yaklasik deger <strong>d = 1.26 R (rho_M / rho_m)^(1/3)</strong> seklindedir. Bu denklemlerde <strong>d</strong>, gezegenin merkezinden olculen Roche siniri, <strong>R</strong> ana cismin yaricapi, <strong>rho_M</strong> ana cismin yogunlugu ve <strong>rho_m</strong> uydunun yogunlugudur.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ana yaricap:</strong> Buyuk gezegenler, yogunluk benzer olsa bile daha buyuk bir Roche siniri mesafesi olusturur.',
        '<strong>Ana yogunluk:</strong> Yogun bir ana cisim, yaricapinin belirli bir katinda gelgit kuvvetini artirir.',
        '<strong>Uydu yogunlugu:</strong> Yogun bir uydunun kendi kutle cekimi daha gucludur, bu nedenle gezegene daha yakin hayatta kalabilir.',
        '<strong>Uydu dayanimi:</strong> Akiskan, buzlu, catlakli veya moloz yigini bir cisim, kompakt bir kati cisimden daha uzakta parcalanir.',
      ],
    },
    {
      type: 'table',
      headers: ['Model', 'Formul sekli', 'Kullanim alani', 'Sonucun anlami'],
      rows: [
        ['Akiskan Roche siniri', '2.44 R (rho_M / rho_m)^(1/3)', 'Buzlu uydular, erimis cisimler, moloz yiginlari, zayif kuyruklu yildizlar', 'Kolay deforme olan cisimler icin ihtiyatli kirilma mesafesi.'],
        ['Kati Roche siniri', '1.26 R (rho_M / rho_m)^(1/3)', 'Malzeme dayanimina sahip yogun kayali veya metalik cisimler', 'Malzeme dayaniminin parcalanmayi geciktirdigi daha yakin bir alt sinir.'],
        ['Kohezyona gore ayarli gosterim', 'Akiskan ve kati durum arasinda', 'Bu simulatorde hizli senaryo karsilastirmasi', 'Secilen uydu turu icin pratik bir risk cizgisi, evrensel bir doga yasasi degil.'],
      ],
    },
    {
      type: 'title',
      text: 'Ornek: Buzlu Bir Ay Neden Saturn Yakininda Savunmasizdir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturn, Dunya\'dan cok daha az yogundur, ancak cok buyuktur. Dusuk yogunluklu bir buzlu uydunun kendi kutle cekimi, kompakt bir kayali aya kiyasla zayiftir, bu nedenle yogunluk orani akiskan Roche sinirini Saturn\'un bulut tepelerinden hala uzaga yerlestirir. Roche siniri fiziginin, Saturn\'un neden buyuk bir yeniden birlesmis ay yerine cogunlukla buzlu parcaciklardan olusan genis ve parlak bir halka sistemini koruyabildigini anlamanin merkezinde olmasinin nedenlerinden biri budur.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayicida Saturn ve bir buzlu ay secip yorungeyi ice suruklerseniz guvenlik oranini izleyin. <strong>1.00x</strong> degerinin uzerinde, secilen yorunge aktif Roche sinirinin disindadir. <strong>1.00x</strong> degerine yakin, ay, kutle kaybi veya catlamanin olasi oldugu bir gelgit temas bolgesindedir. <strong>1.00x</strong> degerinin altinda, gorsellestirme parca yaylarina ve halka olusumuna dogru kayar, cunku secilen model parcalanmayi ongorur.',
    },
    {
      type: 'title',
      text: 'Guvenlik Orani Nasil Yorumlanir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Guvenlik orani</strong>, mevcut yorunge mesafesinin secilen Roche sinirina bolunmesidir. <strong>1.25x</strong> orani, yorungenin aktif kirilma tahmininden %25 daha uzakta oldugu anlamina gelir. <strong>1.00x</strong> orani, yorungenin tam olarak secilen Roche sinirinda oldugu anlamina gelir. <strong>0.80x</strong> orani, uydunun secilen parcalanma bolgesinin oldukca icinde oldugu anlamina gelir.',
    },
    {
      type: 'table',
      headers: ['Guvenlik orani', 'Goruntulenen durum', 'Pratik anlami'],
      rows: [
        ['1.12x uzeri', 'Kararli yorunge', 'Uydu, bu basitlestirilmis model icin secilen Roche sinirinin disindadir.'],
        ['1.00x ila 1.12x', 'Gelgit temasi', 'Cisim, deformasyon, catlama veya yuzey dokulmesinin onemli olabilecegi kadar yakindir.'],
        ['0.78x ila 1.00x', 'Parcalaniyor', 'Secilen modelde kendi kutle cekimi yeterli degildir; enkaz akislari olasi hale gelir.'],
        ['0.78x alti', 'Halka sistemi', 'Orijinal cisim, komsu yorungeleri izleyen dagilmis malzeme olarak temsil edilir.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Yorunge periyodu gostergesi dahil edilmistir, cunku yakin gecisler sadece mesafeyle ilgili degildir. Parcalanma bolgesinin icindeki malzeme, hizli ve birbirinden hafifce farkli yorungeleri izler. Parcalar ayrildiktan sonra, yorunge kaymasi onlari gezegenin etrafina yayarken, carpismalar enkazi duzlestirir ve bir disk benzeri halka halinde siralar.',
    },
    {
      type: 'title',
      text: 'Roche Siniri Neden Halka Olusturabilir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir uydu Roche sinirinin disinda parcalandiginda, parcalar zamanla carpisip daha kucuk bir ay halinde yeniden birlesebilir. Roche sinirinin icinde, yakin parcalar kolayca tek bir kararli kutle cekim cismi halinde birlesemez, cunku gelgit kuvvetleri malzemeyi ayirmaya devam eder. Sonuc, ozellikle enkaz buzlu, carpismali ve kucuk aylar veya rezonanslar tarafindan surekli karistirildiginda, uzun omurlu bir halka olabilir.',
    },
    {
      type: 'paragraph',
      html: 'Halka olusumu kademelidir. Parcalanan bir ay once uzar, sonra parcaciklar ve daha buyuk parcalar dokulur. Bu parcalar hafifce farkli yorunge yaricapLarinda bulunur, bu nedenle birbirlerinin onune veya arkasina gecerler. Zamanla, carpismalar dikey hareketi sondurur ve malzeme ince bir disk halinde yerlesir. Bu nedenle simulator, parcalanmayi anlik bir patlama olarak ele almak yerine, tek bir aydan yaylara ve daha sonra daha genis bir halkaya gecisi gosterir.',
    },
    {
      type: 'title',
      text: 'Bu Roche Siniri Hesaplayicisinin Onemli Sinirlamalari',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu hesaplayici, hizli bilimsel sezgi icin tasarlanmistir, yuksek dogruluklu gorev tasarimi icin degildir. Gercek uydular; donus, yorunge dis merkezligi, ic katmanlasma, cekme dayanimi, gozeneklilik, sicaklik, gelgit isinmasi, onceden olusan catlaklar, carpmalar ve diger aylarla rezonanslardan etkilenir. Dis merkezli bir yorungede donen bir moloz yigini, ortalama yogunluklari benzer gorunse bile, dairesel bir yorungedeki soguk monolitik bir kayadan farkli sekilde parcalanabilir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Akiskan limitini kullanin</strong> cisim zayif, buzlu, erimis, ileri derecede catlakli veya gevsek yigindan olusuyorsa.',
        '<strong>Kati limitini kullanin</strong> anlamli ic dayanima sahip kompakt cisimler icin bir alt sinir tahmini olarak.',
        '<strong>Aktif limiti okuyun</strong> simulatorun secilen uydu turu icin sectigi calisma siniri olarak.',
        '<strong>Sonucu, adi gecen gercek bir ay icin</strong> detayli bir jeofizik model olmadan kesin bir tahmin olarak okumayin.',
      ],
    },
    {
      type: 'title',
      text: 'Bu Aracin Yanitlamaya Yardimci Oldugu Yaygin Sorular',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Su tur sorulari tahmin etmek istediginizde bu araci kullanin: Bir ay, parcalanmadan Dunya\'ya ne kadar yaklasabilir? Saturn\'un halkalari neden bir Roche siniri bolgesinin icindedir? Kayali bir ay, buzlu bir aydan daha yakin hayatta kalabilir mi? Yogunluk Roche sinirini nasil degistirir? Akiskan ve kati Roche siniri arasindaki fark nedir? Kontroller bu karsilastirmalar etrafinda yapilandirilmistir, bu nedenle bir degiskeni degistirmek, kirilma mesafesi, guvenlik orani ve halka olusumu gorsellestirmesinin nasil tepki verdigini aninda gosterir.',
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
