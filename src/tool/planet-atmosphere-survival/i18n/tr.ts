import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'gezegen-atmosfer-hayatta-kalma-hesaplayicisi';
const title = 'Gezegen Atmosferinde Hayatta Kalma Hesaplayicisi';
const description = 'Mars, Venus, Titan, Jupiter veya Everest te uzay giysisi olmadan ne kadar hayatta kalabilirsiniz? Bu etkilesimli hesaplayici, basinc, sicaklik, oksijen, karbondioksit, toksisite ve ruzgar tehlikelerinden korunmasiz insan hayatta kalma suresini tahmin eder.';

const howTo = [
  {
    name: 'Gercek atmosfer verilerini yuklemek icin bir hedef secin',
    text: 'Mars, Venus, Titan, Jupiter veya Everest zirvesi hazir ayarini secerek bu ortam icin gercekci basinc, sicaklik, gaz karisimi ve ruzgar degerlerini aninda ayarlayin.',
  },
  {
    name: 'Devrilme noktasini kesfetmek icin kosullari ayarlayin',
    text: 'Basinc, sicaklik, oksijen ve karbondioksit kaydiricilarini hareket ettirerek hangi tehlikenin once olumcul hale geldigini gorun. Kucuk degisiklikler sinirlayici faktoru tamamen degistirebilir.',
  },
  {
    name: 'Hayatta kalma saatini ve en zayif halkayi okuyun',
    text: 'Zamanlayici, ciddi biyolojik stres olusmadan onceki tahmini sureyi gosterir. Sinirlayici faktor etiketi, su anda hangi tehlikenin en acil tehdit oldugunu tam olarak size soyler.',
  },
  {
    name: 'Risk haritasinda tehlikeleri gorsel olarak karsilastirin',
    text: 'Radyal kollu cizelge ve zaman akisi grafigi, basinc, isi, soguk, hipoksi, toksisite ve ruzgarin her birinin zaman icinde toplam riske nasil katkida bulundugunu gosterir.',
  },
];

const faq = [
  {
    question: 'Bir insan uzay giysisi olmadan Mars ta hayatta kalabilir mi?',
    answer: 'Hayir. Mars son derece dusuk basinca (Dunya nin %1 inden az), neredeyse hic solunabilir oksijene ve cogunlukla karbondioksit atmosferine sahiptir. Basinc ve oksijen destegi olmadan saniyeler icinde bilinc kaybi ve dakikalar icinde ciddi yaralanma meydana gelir.',
  },
  {
    question: 'Atmosfer basinci neden insan hayati icin bu kadar kritiktir?',
    answer: 'Armstrong siniri (yaklasik 6,3 kPa) altinda su, vucut sicakliginda kaynayabilir. Dusuk basinc, hava %100 oksijen olsa bile oksijenin kan dolasimina girmesini engeller. Bu nedenle basinc en hizli olumcul tehlikelerden biridir.',
  },
  {
    question: 'En yasanabilir atmosfere sahip gezegen hangisidir?',
    answer: 'Gunes Sistemi hedefleri arasinda, yuksek rakimli Dunya (Everest) en yasanabilir olanidir, ancak aklimatizasyon olmadan hala tehlikelidir. Titan, basinci yonetilebilir oldugu icin diger secenekler arasinda en az dusmanca olanidir, ancak oksijenden yoksundur ve kriyojenik olarak soguktur. Dunya disinda hicbir gezegen veya uydu solunabilir bir atmosfere sahip degildir.',
  },
  {
    question: 'Venus isi nedeniyle mi yoksa basinc nedeniyle mi daha kotu?',
    answer: 'Her ikisi de yuzeyde asiridir. Venus ezici basinca (Dunya nin 92 kati) ve bir mutfak firinindan daha sicak bir yuzey sicakligina sahiptir. Bu tehlikeler birlikte hareket eder, bu nedenle arac her ikisini de aninda baskin tehditler olarak isaretler.',
  },
  {
    question: 'Titan neden Mars tan daha uzun bir hayatta kalma tahminine sahip?',
    answer: 'Titan yogun bir atmosfere sahiptir, bu nedenle basincin kendisi aninda bir sorun degildir. Hayatta kalma suresi asiri soguk (yaklasik -180°C) ve oksijenin tamamen yoklugu ile sinirlidir. Mars once basincta basarisiz olur, Titan ise sicaklikta basarisiz olur.',
  },
  {
    question: 'Uzayda giysisiz olumun ana nedenleri nelerdir?',
    answer: 'En hizli olduruculer, saniyeler icinde ebullizm ve hipoksiye neden olan vakum maruziyetidir (basinc kaybi), ardindan asiri sicaklik, toksik gaz bilesimi ve ruzgar kaynakli isi kaybi gelir. Hesaplayici alti tehlike kategorisinin tumunu izler.',
  },
  {
    question: 'Bu arac uzay gorev planlamasi icin uygun mudur?',
    answer: 'Hayir. Basitlestirilmis biyolojik esikler kullanan egitsel bir modeldir. Gercek dekompresyon, hipoksi, toksik gaz, termal yaralanma ve gorev risk analizi, guvenlik icin uzman tibbi ve muhendislik degerlendirmesi gerektirir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Atmosferik risk haritasi',
    timeline: 'Biyolojik risk zaman akisi',
    controls: 'Atmosfer kontrolleri',
    destination: 'Hedef',
    pressure: 'Basinc',
    temperature: 'Sicaklik',
    oxygen: 'Oksijen',
    co2: 'Karbondioksit',
    limitingFactor: 'Sinirlayici faktor',
    verdict: 'Karar',
    exposureSummary: 'Maruz kalma özeti',
    atmosphericModel: 'Atmosferik maruz kalma modeli',
    survivalEnvelope: 'hayatta kalma sınırı',
    survival: 'Hayatta kalma',
    mode: 'Mod',
    metric: 'Metrik',
    imperial: 'Imperial',
    unitSystem: 'Birim sistemi',
    vitalStress: 'hayati stres',
    timeLabel: 'zaman',
    estimatedSurvival: 'tahmini hayatta kalma',
    hazardPressure: 'Basınç',
    hazardTemperature: 'Sıcaklık',
    hazardOxygen: 'Oksijen',
    hazardToxicity: 'Toksisite',
    hazardWind: 'Rüzgar',
    presetMars: 'Mars',
    presetVenus: 'Venüs yüzeyi',
    presetTitan: 'Titan',
    presetJupiter: 'Jüpiter bulut katmanı',
    presetEverest: 'Dünya, Everest zirvesi',
    noteMars: 'Neredeyse vakum, aşırı soğuk ve neredeyse hiç oksijen yok.',
    noteVenus: 'Ezici basınç ve fırın sıcağı hemen hükmeder.',
    noteTitan: 'Yoğun nitrojen havası ama ölümcül soğuk ve oksijen yok.',
    noteJupiter: 'Hidrojen açısından zengin atmosfer, şiddetli soğuk ve sert rüzgarlar.',
    noteEverest: 'Eğitimli dağcılar için hayatta kalınabilir, ancak hipoksi ve soğuk ciddidir.',
    verdictSeconds: 'Saniye',
    verdictMinutes: 'Dakika',
    verdictHours: 'Saat',
    verdictExtended: 'Uzun süreli maruz kalma riski',
  },
  seo: [
    {
      type: 'title',
      text: 'Gezegen Atmosferinde Hayatta Kalma Hesaplayicisi: Mars, Venus, Titan veya Jupiter te Uzay Giysisi Olmadan Ne Kadar Hayatta Kalabilirsiniz?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uzay giysisi olmadan baska bir gezegenin atmosferine aniden maruz kalsaydiniz, ne kadar hayatta kalirdiniz? Bu hesaplayici, Mars, Venus, Titan, Jupiter ve Everest te toplam basinc, oksijen bulunurlugu, sicaklik, karbondioksit konsantrasyonu, toksik kimya ve ruzgar stresi olmak uzere alti tehlikeyi simule ederek korunmasiz insan hayatta kalma suresini tahmin eder. Uzay meraklilari ve ogrencilerin en sik sordugu sorulari yanitlar: hangi gezegen sizi en hizli oldurur, hangi tehlike gercek tehdittir ve hayatta kalmak icin neye ihtiyaciniz olurdu.',
    },
    {
      type: 'paragraph',
      html: 'Sonuc, egitsel bir tahmindir, bir gorev planlama sayisi degildir. Farkli dunyalarin neden cok farkli sekillerde tehlikeli oldugunu karsilastirmaya yardimci olmak icin tasarlanmistir. Mars saniyeler icinde basinc ve hipokside basarisiz olur. Venus ezici basinci firin isisiyla birlestirir. Titan kriyojeniktir ve oksijeni yoktur. Gaz devi bulut katmanlari toksik bilesimler ve supersonik ruzgarlar ekler. Her ortam, Dunya yi essiz sekilde yasanabilir yapan sey hakkinda farkli bir sey ogretir.',
    },
    {
      type: 'title',
      text: 'En Yasanabilir Atmosfere Sahip Gezegen Hangisidir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu hesaplayicidaki hedefler arasinda, Dunya nin yuksek rakimli ortamlari (Everest zirvesi gibi) en yasanabilir olanlaridir, ancak hazirlik olmadan hala tehlikelidir. Diger gezegenler arasinda, Titan en affedici basinca sahiptir ancak sicaklik ve oksijende basarisiz olur. Dunya disinda hicbir hedef su anda solunabilir bir atmosfer sunmamaktadir. Hesaplayici, her dunyanin neden basarisiz oldugunu ve hangi tehlikenin once kritik esigi gectigini tam olarak gormenize yardimci olur.',
    },
    {
      type: 'title',
      text: 'Her Tehlike Vucudu Nasil Etkiler',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Basinc (dusuk):</strong> 6,3 kPa altinda vucut sivilari kaynayabilir (ebullizm). Bunun uzerinde bile, dusuk basinc oksijen emilimini engeller. Bu, neredeyse vakum ortamlarindaki en hizli oldurucudur.',
        '<strong>Basinc (yuksek):</strong> asiri basinc solunum gazlarini sikistirir, nitrojen narkozu riskini artirir ve akcigerler ile sinuslere mekanik hasar verebilir.',
        '<strong>Oksijen kismi basinci:</strong> solunabilir oksijen hem gaz yuzdesine hem de toplam basinca baglidir. Ince bir atmosfer %21 oksijene sahip olabilir ancak yine de hipoksiye neden olabilir.',
        '<strong>Sicaklik (isi):</strong> yaklasik 60°C uzerinde protein denaturasyonu ve organ yetmezligi hizla baslar. Venus yuzey sicakligi 460°C yi asar.',
        '<strong>Sicaklik (soguk):</strong> donma noktasinin altinda, donma ve hipotermi baslar. Titan in -180°C gibi kriyojenik sicakliklarinda, doku donmasi neredeyse anidir.',
        '<strong>Karbondioksit toksisitesi:</strong> CO2 yaklasik %5 in uzerinde bas donmesi, bas agrisi ve bilinc kaybina neden olur. Bircok gezegen atmosferi cogunlukla CO2 dir.',
        '<strong>Tok-sik kimya:</strong> kukurt bilesikleri, amonyak, metan ve hidrojen korozif, bogucu veya kimyasal olarak tehlikeli olabilir.',
        '<strong>Ruzgar:</strong> yuksek ruzgarlar konveksiyon yoluyla isi kaybini hizlandirir, ruzgar soguguna neden olur, enkaz firlatir ve bir kisiyi fiziksel olarak dengesizlestirebilir.',
      ],
    },
    {
      type: 'title',
      text: 'Mars: Dusuk Basinc Neden Her Seyden Once Oldurur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mars yaklasik 0,6 kPa lik bir yuzey basincina sahiptir ve suyun vucut sicakliginda kaynayabildigi 6,3 kPa lik Armstrong sinirinin cok altindadir. Korunmasiz maruziyet, 15 saniye icinde ebullizme, hizli hipoksiye ve bilinc kaybina neden olur. Soguk (ortalama -60°C) ve karbondioksit acisindan zengin atmosfer hesaba katilsa bile, basinc ve oksijen yoksunlugu zaman akisina hakimdir. Islevsel bir basinc giysisi ve oksijen kaynagi, Mars ta hayatta kalmak icin kesinlikle en az gerekenlerdir.',
    },
    {
      type: 'title',
      text: 'Venus: Asiri Basinc ve Isinin Birlikte Hareketi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Venus un yuzeyi, 92 Dunya atmosferi basincina (yaklasik 9,3 MPa, su altinda 900 metreye esdeger) ve 462°C yuzey sicakligina sahiptir. Atmosfer %96 karbondioksit ve bulutlari sulfurik asit icerir. Bu tehlikeler sirali degil, eszamanli olarak hareket eder: basinc ezer, isi pisirir ve CO2 zehirler. Bu hesaplayicida Venus, birden fazla tehlikenin neredeyse ayni anda olumcul esigi gectigi tek hedeftir.',
    },
    {
      type: 'title',
      text: 'Titan: Dunya Disindaki Gunes Sistemi ndeki En Dost Basinc',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturn un uydusu Titan, yuzey basincinin (yaklasik 147 kPa veya Dunya nin 1,45 kati) aslinda bir insanin tolere edebilecegi bir aralikta olmasi nedeniyle sira disidir. Yalnizca bu degisken icin basinc giysisine gerek olmazdi. Bununla birlikte, Titan in neredeyse hic oksijeni yoktur, yuzey sicakligi -179°C dir ve metan-azot atmosferine sahiptir. Hesaplayici basinci yonetilebilir olarak gosterir, ancak sicaklik ve oksijen yoksunlugu hemen hakim olur. Titan, hayatta kalmanin yalnizca bir olcume degil, tum tehlike profiline bagli oldugunu hatirlatir.',
    },
    {
      type: 'title',
      text: 'Hayatta Kalma Zamanlayicisi ve Risk Haritasi Nasil Yorumlanir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hayatta kalma zamanlayicisi, korunmasiz bir kiside ciddi biyolojik stres olusmadan onceki sureyi tahmin eder. Sinirlayici faktor etiketi, hangi tehlikenin once kritik esigi gectigini belirler. Radyal tehlike kollari, izlenen alti tehlikenin her birinin goreceli siddetini gosterir ve zaman akisi grafigi, maruziyet penceresi boyunca birlestirilmis riskin nasil biriktigini gorsellestirir. Bu gorsel araclar, belirli bir ortamin neden tehlikeli oldugunu ve hangi koruyucu sistemin en onemli olacagini bir bakista gormenize yardimci olur.',
    },
    {
      type: 'table',
      headers: ['Hedef', 'Olumcul tehlikeler', 'En hizli tehdit', 'Giysinin cozmesi gereken'],
      rows: [
        ['Mars', 'Vakum benzeri, hipoksi, soguk, CO2', 'Basinc < Armstrong siniri', 'Basinc giysisi, oksijen, termal yalitim'],
        ['Venus yuzeyi', 'Ezici basinc, 462°C isi, CO2, sulfurik asit', 'Basinc ve isi eszamanli', 'Agir sogutma, basinc govdesi, solunum cihazi'],
        ['Titan', 'Oksijen yok, -179°C soguk, metan', 'Sicaklik ve hipoksi', 'Oksijen kaynagi, asiri termal koruma'],
        ['Jupiter bulut katmani', 'Oksijen yok, hidrojen zengin, soguk, yuksek ruzgar', 'Hipoksi ve solunabilir gaz eksikligi', 'Sizdirmaz solunum sistemi, termal kontrol'],
        ['Everest zirvesi', 'Hipoksi, soguk, ruzgar', 'Oksijen kismi basinci cok dusuk', 'Oksijen maskesi, soguk hava ekipmani, aklimatizasyon'],
      ],
    },
    {
      type: 'title',
      text: 'Uzay Giysisi Olmadan Hayatta Kalmak Icin Ne Gerekirdi?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gercekci olarak, Dunya disinda bilinen hicbir Gunes Sistemi cismi, korunmasiz insan hayatta kalisina bir kac dakikadan fazla izin vermez ve cogu saniyeler icinde oldurur. Bu hesaplayicinin degeri guvenli bir gezegen bulmakta degil, her ortamin neden dusmanca oldugunun ozel nedenlerini anlamaktadir. Bu bilgi, gezegen bilimi egitimini, uzay habitat tasarimini, astronot egitim onceliklerini ve bir atmosferin gercekten yasami destekleyebilecegi potansiyel olarak yasanabilir otegezegen arayisini yonlendirir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ogrenmek icin kullanin:</strong> Mars ta basinci iki katina cikarmak gibi bir degiskeni degistirmenin hayatta kalma penceresini nasil degistirdigini gorun.',
        '<strong>Karsilastirma icin kullanin:</strong> Titan ve Venus un her ikisi de yasanamaz olmasina ragmen Titan in neden daha fazla sure verdigini karsilastirin.',
        '<strong>Tartisma icin kullanin:</strong> terraform edilmis bir atmosferin solunabilir kosullara ulasmak icin neye ihtiyaci olacagini kesfedin.',
        '<strong>Gercek kararlar icin kullanmayin:</strong> hesaplayici basitlestirilmis esikler kullanir. Acil durum planlamasi profesyonel havacilik ve uzay tibbi gerektirir.',
      ],
    },
    {
      type: 'title',
      text: 'Onemli Sinirlamalar ve Egitim Amaci',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gercek hayatta kalma, bireysel saglik, giyim, efor seviyesi, nem, gunes radyasyonu, dekompresyon gecmisi, solunum gazi karisimi, kurtarma zamani ve diger bircok degiskene baglidir. Gezegen atmosfer verileri de yukseklik, mevsim ve olcum kaynagina gore degisir. Bu arac, bilim egitimi icin basitlestirilmis biyolojik esikler ve temsili cevresel veriler kullanir. Ogrencilere, ogretmenlere, uzay meraklilarina ve bilim yazarlarina gezegenlerin yasanabilirligini anlamalarina yardimci olmak icin tasarlanmistir, gercek uzay operasyonlarina rehberlik etmek icin degil.',
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
