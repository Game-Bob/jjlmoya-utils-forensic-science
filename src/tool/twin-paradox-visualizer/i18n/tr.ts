import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'ikiz-paradoksu-goruntuleyici';
const title = 'Ikiz Paradoksu Goruntuleyici: Ozel Gorelilik Zamani Genislemesi';
const description = 'Ozel goreliligin, hizli seyahat eden bir ikizin, Dunya\'da kalan ikizden daha genc donmesini nasil sagladigini goruntuleyin.';

const howTo = [
  {
    name: 'Uzay aracinin hizini ayarlayin',
    text: 'Hiz kaydiricisini kullanarak isik hizinin bir kesrini secin ve Lorentz faktorunun arttigini izleyin.',
  },
  {
    name: 'Dunya referans cercevesinde gorev suresini secin',
    text: 'Gidis-donus yolculugu boyunca Dunya\'da kalan ikiz icin kac yil gectigini ayarlayin.',
  },
  {
    name: 'Saatleri ve dunya cizgilerini karsilastirin',
    text: 'Yas farkini, uzay aracinda gecen sureyi, Dunya referans cercevesindeki mesafeyi ve seyahat eden ikizin eylemsizlik cercevesi degistirdigi bukulmus dunya cizgisini okuyun.',
  },
];

const faq = [
  {
    question: 'Ozel gorelilikte ikiz paradoksu nedir?',
    answer: 'Ikiz paradoksu, bir ikizin relativistik hizla uzayda seyahat ettigi ve daha sonra Dunya\'ya evde kalan ikizden daha genc dondugu bir dusunce deneyidir. Ilk bakista paradoksal gelir cunku her ikiz baslangicta digerini hareket ediyor olarak tanimlayabilir, ancak seyahat eden ikiz donus yaparken eylemsizlik cercevesini degistirir, bu nedenle uzay-zamandaki iki yol simetrik degildir.',
  },
  {
    question: 'Seyahat eden ikiz neden daha az yaslanir?',
    answer: 'Ozel gorelilikte, gecen oz zaman uzay-zamandaki yola baglidir. Eylemsiz bir gozlemciye gore v hiziyla hareket eden bir saat, Lorentz faktoru gamma kadar daha yavas calisir. Gezgin, Dunya\'da kalan ikizden daha az oz zaman biriktirir.',
  },
  {
    question: 'Yas farkina ivme mi neden olur?',
    answer: 'Ivme, gezginin yon degistirmesine ve Dunya ile yeniden bulusmasina izin verdigi icin onemlidir, ancak yas farki yalnizca ivmeden degil, tum uzay-zaman yolundan hesaplanir. Donus cok kisa olsa bile, gezgin yolu yine de Dunya yolundan daha az oz zaman icerir.',
  },
  {
    question: 'Lorentz faktoru gamma ne anlama gelir?',
    answer: 'Lorentz faktoru gamma, 1 bolu 1 eksi v kare bolu c karenin karekokune esittir. Zaman araliklari, uzunluklar ve enerjilerin eylemsizlik cerceveleri arasinda ne kadar guclu farklilastigini gosterir. Gunluk hizlarda gamma neredeyse 1\'dir, ancak isik hizina yakinlastikca keskin bir sekilde yukselir.',
  },
  {
    question: 'Bu etki gercek hayatta olculebilir mi?',
    answer: 'Evet. Zaman genislemesi, hizli parcaciklar, ucaklarda tasinan atom saatleri, uydu konumlandirma sistemleri ve parcacik hizlandiricilari ile olculmustur. Ikiz paradoksu asiri bir seyahat hikayesi kullanir, ancak altta yatan saat etkisi modern fizigin rutin olarak dogrulanmis bir parcasidir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Ikiz paradoksu uzay-zaman goruntulemesi',
    controlsTitle: 'Ikiz paradoksu kontrolleri',
    worldlineLabel: 'Dunya ikizi ve seyahat eden ikiz icin dunya cizgisi diyagrami',
    earthTwin: 'Dunya ikizinin yasi',
    travelingTwin: 'Gezginin yasi',
    presetCruise: 'Seyir',
    presetRelativistic: 'Relativistik',
    presetExtreme: 'Asiri',
    velocityLabel: 'Gemi hizi',
    earthYearsLabel: 'Dunya gecen sure',
    ageGapLabel: 'Yeniden bulusmada yas farki',
    gammaLabel: 'Lorentz faktoru',
    shipTimeLabel: 'Gezginin oz zamani',
    distanceLabel: 'Donus mesafesi',
    yearsUnit: 'yıl',
    yearsShortUnit: 'yıl',
  },
  seo: [
    {
      type: 'title',
      text: 'Ozel Gorelilik icin Ikiz Paradoksu Hesaplayicisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ikiz paradoksu goruntuleyici, ozel goreliligin en unlu fikirlerinden birini etkilesimli bir uzay-zaman diyagramina donusturur. Bir uzay araci hizini isik hizinin bir kesri olarak ayarlayin, Dunya\'da kac yil gectigini secin ve hesaplayici Lorentz faktorunu, gezginin oz zamanini, yeniden bulusmadaki yas farkini ve donus noktasina olan mesafeyi hesaplar. Gorsel duzen, Dunya saatini uzay araci saatinden ayirir, boylece asimetri formullerin icinde saklanmak yerine gorunur hale gelir.',
    },
    {
      type: 'title',
      text: 'Hesaplama Nasil Calisir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temel nicelik Lorentz faktorudur: gamma = 1 / sqrt(1 - v^2 / c^2). Sabit seyir hizina sahip basit bir gidis-donus yolculugu icin, gezginin deneyimledigi sure, Dunya referans cercevesindeki gorev suresinin gamma\'ya bolunmesidir. Bu iki sure arasindaki fark, ikizler yeniden bulustugunda yas farkidir. Araci ayrica Dunya referans cercevesindeki donus mesafesini de gosterir; bu da toplam Dunya suresinin yarisinin, yil basina isik yili cinsinden gemi hiziyla carpimidir.',
    },
    {
      type: 'table',
      headers: ['Hiz', 'Lorentz Faktoru', 'Gezgin Saat Hizi', 'Fiziksel Anlami'],
      rows: [
        ['0.50c', '1.155', 'Dunya hizinin %86.6\'si', 'Fark edilir ancak orta derecede bir relativistik etki.'],
        ['0.86c', '1.960', 'Dunya hizinin %51.0\'i', 'Gezgin, seyir sirasinda yaklasik yari yariya daha yavas yaslanir.'],
        ['0.98c', '5.025', 'Dunya hizinin %19.9\'u', 'Asiri zaman genislemesi, gorev sonucuna hakim olur.'],
      ],
    },
    {
      type: 'title',
      text: 'Durum Neden Simetrik Degil',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ilk bakista her ikiz digerinin hareket ettigini soyleyebilir, bu da sonucu celiskili gosterir. Cozum, Dunya ikizinin yaklasik olarak bir eylemsizlik cercevesinde kalirken, seyahat eden ikizin ayrilmasi, yon degistirmesi ve geri donmesidir. Bu eylemsizlik cercevesi degisikligi, gezgine uzay-zamanda farkli bir yol verir. Bu aracin cizdigi dunya cizgisi donus olayinda bukulurken, Dunya ikizinin dunya cizgisi duz kalir.',
    },
    {
      type: 'title',
      text: 'Dunya Cizgisi Diyagramini Okuma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dunya cizgisi, bir nesnenin yalnizca uzayda degil, uzay-zamandaki haritasidir. Bu goruntuleyicide, dikey Dunya cizgisi evde kalan ikizi temsil eder. Acili kirmizi yol, Dunya\'dan ayrilan ve geri donen gezgini temsil eder. Hizi artirmak, gezgin yolunun daha dramatik bir sekilde egilmesine ve uzay araci saatinde biriken oz zaman miktarinin azalmasina neden olur.',
    },
    {
      type: 'list',
      items: [
        '<strong>Yas farki:</strong> gezginin yeniden bulusmada ne kadar genc oldugu.',
        '<strong>Lorentz faktoru:</strong> Dunya referans cercevesi zamanini gezginin oz zamanina baglayan carpan.',
        '<strong>Gezginin oz zamani:</strong> uzay aracindaki bir saatle olculen gercek gecen sure.',
        '<strong>Donus mesafesi:</strong> gezginin yon degistirmeden once Dunya referans cercevesindeki disa dogru mesafesi.',
      ],
    },
    {
      type: 'title',
      text: 'Zaman Genislemesi icin Pratik Kanit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ikiz paradoksu temiz bir dusunce deneyidir, ancak zaman genislemesi spekulatif degildir. Ust atmosferde olusturulan muonlar, Dunya perspektifinden hareket eden saatleri genisledigi icin yere ulasacak kadar uzun yasarlar. Ucaklardaki atom saati deneyleri ve hassas uydu navigasyonu da relativistik duzeltmeler gerektirir. Bu goruntuleyicinin arkasindaki ayni matematik, modern GPS sistemleri tarafindan kullanilan zamanlama altyapisinin bir parcasidir.',
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
