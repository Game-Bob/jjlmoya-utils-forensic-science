import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kozmik-enflasyon-hesaplayici';
const description = 'Kozmik enflasyon donemi sirasinda erken evrenin ustel genislemesini hesaplayin.';
const title = 'Kozmik Enflasyon Hesaplayici: Erken Evren Genislemesi';

const howTo = [
  {
    name: 'Degerleri secin',
    text: 'Sonuclari gormek icin kaydiricilari surukleyin.',
  },
  {
    name: 'Olcek faktorlerini karsilastirin',
    text: 'Uzayin kac kat buyudugunu gorun.',
  },
  {
    name: 'Dinamik bukulmeyi analiz edin',
    text: 'Tuval uzayin genislemesini gosterir.',
  },
];

const faq = [
  {
    "question": "Kozmik enflasyon nedir ve neden gerceklesmistir?",
    "answer": "Kozmik enflasyon, evrenin ilk saniyelerinin cok kucuk bir diliminde (yaklasik Big Bang'den 10^-36 saniye sonra) uzayin ultra hizli ve ustel olarak genisledigini öne suren bir teoridir. Enflaton adı verilen teorik bir skalar alanin, sahte vakumun yuksek enerji yogunlugu durumunda bulunması nedeniyle gerceklesmistir. Bu durum negatif basinc ve uzay-zaman dokusunu esneten itici bir yercekimi kuvveti yaratmistir."
  },
  {
    "question": "e-folds (e-katlanma) sayisi ne anlama gelir?",
    "answer": "e-folds sayisi, ustel genisleme evresinin suresini olcer. Bir e-fold, evrenin boyutunun Euler sayisi (yaklasik 2.718) ile carpildigi sureyi temsil eder. Evren N e-folds gecirirse, olcek faktoru e^N kat artar. Standart kozmolojik modeller, duzluk ve ufuk problemlerini dogru sekilde cozmek icin en az 50 ila 60 e-folds gerektirir."
  },
  {
    "question": "Enflasyon ufuk problemini nasil cozer?",
    "answer": "Ufuk problemi, isik hizinin birbirleriyle etkilesime girmelerine izin vermeyecegi kadar uzak evren bolgelerinin, neden neredeyse ayni kozmik mikrodalga arka plan sicakligina sahip oldugunu sorgular. Enflasyon bunu, ustel genislemeden once gozlenebilir evrenin tamamının causal olarak baglantili ve termal olarak homojen kucuk bir bolge oldugunu ve aniden gorsel ufkun otesine esnetildigini gostererek cozer."
  },
  {
    "question": "Duzluk problemi nedir ve nasil cozulur?",
    "answer": "Evrenin bugunku enerji yogunlugu, kritik yogunluga son derece yakindir; bu da uzayin minimum hata payiyla duz oldugu anlamina gelir. Enflasyon olmasaydi, duzlukten sapmalar zamanla ustel olarak buyuyecek ve Big Bang aninda imkansiz bir hassas ayar gerektirecekti. Enflasyon uzaysal egriligi o kadar siddetle esnetir ki baslangictaki tum egrilikler kaybolur, tipki devasa bir kurenin yuzeyinin yerel olarak tamamen duz gorunmesi gibi."
  },
  {
    "question": "Yeniden isinma (reheating) sureci nedir?",
    "answer": "Yeniden isinma, enflasyonun sonunu belirleyen termal gecistir. Enflasyon sirasinda evren, hacmin ustel genislemesi nedeniyle mutlak sifira yakin sicakliklara kadar sogur. Enflaton alani potansiyelinin minimumuna dustugunde, kalan enerjisi kuantum etkilesimleri yoluyla Standart Model parcaciklari olarak uzaya aktarilir ve evreni geleneksel Big Bang evresini baslatan sicak ve yogun bir plazma ile doldurur."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kozmik Enflasyon Hesaplayici',
    efoldsLabel: 'e-folds Sayisi (N)',
    energyLabel: 'Baslangic Enerji Olcegi (GeV)',
    scaleFactorResult: 'Olcek Faktoru Büyümesi',
    reheatingTempResult: 'Tahmini Yeniden Isinma Sicakligi',
    chartTitle: 'Uzay-Zaman Dokusu Bukulmesi',
    presetGuth: 'Standart (Guth)',
    presetChaotic: 'Kaotik',
    presetExtreme: 'Uch Limitler',
    efoldsTooltip: 'Tipik modeller 50 ila 60 e-folds ongormektedir.',
    energyTooltip: 'GUT olcegi yaklasik 10^16 GeV civarindadir.',
    scaleFactorTooltip: 'Toplam genisleme faktorunu temsil eder.',
    reheatingTooltip: 'Enflasyon sonundaki sicaklik.',
    analogyInsuff: 'Orta duzeyde enflasyon. Bu genisleme yetersizdir.',
    analogyProton: 'Evren, bir saniyenin cok kucuk bir diliminde bir proton boyutundan bir galaksi boyutuna genisledi.',
    analogyObservable: 'Evren, 10^-32 saniyede atom alti bir olcekten gozlenebilir evrenden daha buyuk bir boyuta genisledi.',
  },
  seo: [
  {
    "type": "title",
    "text": "KOZMOLOJİ: Kozmik Enflasyon Teorisi ve Uzay-Zaman Genislemesi",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Kozmik enflasyon, parcacik fizigini gozlemsel astrofizikle birlestiren temel tasi temsil eder. 1980'lerin basinda fizikciler Alan Guth ve Andrei Linde tarafindan onerilen bu teori, erken evrenin enflaton olarak bilinen skalar bir alanin enerji yogunlugu tarafindan yonlendirilen ustel bir genisleme evresinden gectigini öne surer. Bu genisleme, evrenin hacmini bir saniyenin cok kucuk bir diliminde en az 10^26 kat artirarak, klasik Big Bang modelinin derin celiskilerini cozmus ve kozmik yapi olusumu icin teorik cerceveyi saglamistir."
  },
  {
    "type": "title",
    "text": "Enflasyon Modelleri ve Parametrelerinin Karsilastirilmasi",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Enflaton alani icin farkli potansiyeller, farkli genisleme oranlari ve yeniden isinma sicakliklari uretir. Bu hesaplayicida simüle edilen baslica modellerin ozellikleri asagidadir:"
  },
  {
    "type": "table",
    "headers": [
      "Enflasyon Modeli",
      "e-folds Araligi (N)",
      "Enerji Olcegi (GeV)",
      "Fiziksel ve Dinamik Sonuc"
    ],
    "rows": [
      [
        "<strong>Standart Guth</strong>",
        "50 - 60",
        "10^16",
        "Duzluk ve ufuk problemlerini cozer; enflasyon yavas bir faz gecisinde baloncuk olusumuyla biter."
      ],
      [
        "<strong>Kaotik Enflasyon (Linde)</strong>",
        "60 veya daha fazla",
        "10^16",
        "Enflaton basit bir parabolik potansiyelden asagiya dogru yavasca yuvarlanir; ani faz gecisi sorunlarini onler."
      ],
      [
        "<strong>Uch Limitler</strong>",
        "90 veya daha fazla",
        "10^19 (Planck)",
        "Kuantum yercekimi limitine yakin enerjiler; ilksel uzay-zamanin devasa esnemesi."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Klasik Big Bang Problemlerinin Cozumu",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Enflasyon gelistirilmeden once, klasik Big Bang kozmolojisi ciddi teorik tutarsizliklardan muzdaripti. Kozmik mikrodalga arka planinin homojenliginden kaynaklanan ufuk problemi ve uzayin kritik yogunlugu ile iliskili duzluk problemi, son derece olası olmayan baslangic kosullarina ihtiyac duyuldugunu gosteriyordu. Enflasyon, termal olarak homojen bir mikro bolgeyi esneterek ve yerel uzay geometrisini dinamik olarak duzlestirerek her iki zorlugu da dogal olarak cozer. Ek olarak, erken evrende bol miktarda olusmasi gereken manyetik monopollerin konsantrasyonunu seyreltir."
  },
  {
    "type": "title",
    "text": "Enflasyon Modelinin Gozlemsel Astronomik Kanitlari",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Kozmik enflasyon teorisi sadece zarif bir matematiksel yapi degildir; COBE, WMAP ve Planck gibi uzay uydulari tarafindan onaylanmis guclu dolayli kanitlara sahiptir:"
  },
  {
    "type": "list",
    "items": [
      "<strong>CMB Homojenligi:</strong> Kozmik mikrodalga arka plan isinmasi, gorunur gökyüzünün zit yonlerinde sadece 100,000'de 1 oraninda degiskenlik gosteren homojen bir sicaklik sunar.",
      "<strong>Duz Geometri:</strong> Evrenin egrilik olcumleri, uzayin %1'den daha az bir hata payiyla duz oldugunu dogrular ki bu da buyuk enflasyon esnemesiyle tutarlidir.",
      "<strong>Monopollerin Yoklugu:</strong> Gozlenebilir evrenimizde kararli, yuksek kütleli manyetik monopollerin tamamen yok olmasını mantikli bir sekilde aciklar.",
      "<strong>Dalgalanma Spektrumu:</strong> Kozmik arka planda gozlenen anizotropiler, yavas yuvarlanan enflaton modellerinin ongordugu gibi, spektral indeksin 1'in biraz altinda oldugunu gosterir."
    ]
  },
  {
    "type": "title",
    "text": "Kuantum Dalgalanmalari ve Galaksilerin Tohumlari",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Kozmik enflasyonun en olaganustu yani, kozmik bir mikroskop gorevi gorme yetenegidir. Enflaton alaninin mikroskobik kuantum dalgalanmalari, ustel genisleme doneminde astronomik olceklere kadar esnetildi. Enflasyonun sonunda bu dalgalanmalar madde yogunlugu degisimleri (ilksel pertürbasyonlar) olarak dondu. Bu yogunluk farkliliklari, milyarlarca yil boyunca maddeyi bir araya getirerek ilk yildizlari, galaksileri, galaksi kumelerini ve bugun gozlemledigimiz kozmik agi olusturan yercekimi tohumlari islevini gordu."
  }
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
