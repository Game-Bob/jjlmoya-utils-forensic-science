import type { ToolLocaleContent } from '../../../types';

const slug = 'forensik-varsayimsal-kan-testi-simulasyonu';
const title = 'Adli Varsayimsal Kan Testi Simulatoru';
const description = 'Kastle-Meyer ve Luminol reaktifleri ile varsayimsal kan testlerini simule edin. Gercek kani yalanci pozitiflerden ayirt edin.';

const howTo = [
  {
    "name": "Numune secin",
    "text": "Standdaki test numunelerinden gercek kan veya yalanci pozitif olabilecek birini secin."
  },
  {
    "name": "Test yontemi secin",
    "text": "Renk degisimine dayali Kastle-Meyer testini veya isildamaya dayali Luminol testini secin."
  },
  {
    "name": "Reaktifleri uygulayin",
    "text": "Kastle-Meyer reaktifi ve ardından Hidrojen Peroksit damlatin veya Luminol uygulayin."
  },
  {
    "name": "Reaksiyonu yorumlayin",
    "text": "Reaksiyonu sınıflandırmak icin karanlikta renk degisimini veya mavi isildamayi izleyin."
  }
];

const faq = [
  {
    "key": "faq-1",
    "question": "Neden varsayimsal test denir?",
    "answer": "Varsayimsal testler, katalitik aktiviteye dayali on taramalardir. Hassasiyetleri cok yuksektir ancak tamamen spesifik degillerdir."
  },
  {
    "key": "faq-2",
    "question": "Kastle-Meyer testinde ne yalanci pozitiflik yapar?",
    "answer": "Test, hemin peroksidaz benzeri aktivitesine dayanir. Pas kimyasal oksitleyiciler veya bitki peroksidazlari reaksiyonu katalizleyebilir."
  },
  {
    "key": "faq-3",
    "question": "Luminol reaksiyonu nasil gerceklesir?",
    "answer": "Luminol, hemoglobindeki demir katalizorlugunde hidrojen peroksitle reaksiyona girer. Uyarilmis luminol temel seviyeye donerken mavi isik yayar."
  },
  {
    "key": "faq-4",
    "question": "Camasir suyu yalanci pozitiflik yapar mi?",
    "answer": "Evet, sodyum hipoklorit guclu bir oksitleyicidir. Reaktifleri katalizorsuz dogrudan oksitleyerek hizla sonen bir isildama yapar."
  },
  {
    "key": "faq-5",
    "question": "Varsayimsal ve dogrulama testleri arasindaki fark nedir?",
    "answer": "Varsayimsal testler lekeleri bulmak icin hizli ve ucuzdur. Dogrulama testleri insan kaninin varligini kesin olarak kanitlar."
  }
];

const bibliography = [
  {
    "name": "Kastle-Meyer test - Wikipedia",
    "url": "https://en.wikipedia.org/wiki/Kastle%E2%80%93Meyer_test"
  },
  {
    "name": "Grodsky, M., Wright, K. & Kirk, P. L. (1951). Simplified preliminary blood testing. An improved technique and comparative study of methods. Journal of Criminal Law and Criminology.",
    "url": "https://scholarlycommons.law.northwestern.edu/jclc/vol42/iss1/10/"
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "title": "Kan Testi Simulatoru",
  "desc": "Kan tespiti yapmak ve yalanci pozitifleri analiz etmek icin Luminol ve Kastle-Meyer ile sanal deneyler yapin.",
  "configTitle": "Laboratuvar Kontrolleri",
  "sampleLabel": "Numune Secin",
  "reagentLabel": "Reaktif Secin",
  "lightsLabel": "Aydinlatma",
  "btnLightsOff": "Isiklari Kapat",
  "btnLightsOn": "Isiklari Ac",
  "btnReset": "Kabi Sifirla",
  "resultsTitle": "On Test Sonuclari",
  "sampleBlood": "Kan Numunesi (Kontrol)",
  "sampleRust": "Pas (Demir Oksit)",
  "sampleBleach": "Camasir Suyu (Sodyum Hipoklorit)",
  "samplePotato": "Patates (Bitki Peroksidazi)",
  "sampleSaliva": "Tukuruk Numunesi",
  "reagentKM": "Kastle-Meyer Reaktifi",
  "reagentH2O2": "Hidrojen Peroksit (H2O2)",
  "reagentLuminol": "Luminol Cozeltisi",
  "resultTruePositive": "Dogru Pozitif (Kan Tespit Edildi)",
  "resultFalsePositive": "Yalanci Pozitif (Kan Disi Katalizor)",
  "resultNegative": "Negatif Reaksiyon",
  "statusLabel": "Reaksiyon Durumu",
  "reactionLabel": "Reaksiyon Aciklamasi",
  "dropReagentBtn": "Damla Uygula",
  "activeCompounds": "Aktif Bilesikler",
  "reactionSpeed": "Reaksiyon Hizi",
  "reactionDuration": "Reaksiyon Suresi",
  "specimenBase": "Numune Tabani",
  "kmPending": "Kastle-Meyer reaktif uygulandi. Renk degisimini katalizlemek icin Hidrojen Peroksit (H2O2) ekleyin.",
  "h2o2Only": "Hidrojen peroksit uygulandi. Kastle-Meyer indikatoru olmadan gorunur reaksiyon yok.",
  "noReaction": "Reaksiyon gozlenmedi. Numune berrak kalir.",
  "luminolBlood": "Karanlikta hemen yogun mavi isilti gozlendi. Hemoglobindeki hem gruplari luminolu katalitik olarak oksitledi. Dogru Pozitif.",
  "luminolBleach": "Hemen cok yogun mavi isilti gozlendi ve 2 saniyeden kisa surede sondu. Camasir suyu luminolu dogrudan oksitler. Yalanci Pozitif.",
  "luminolRust": "Zayif, sonuk mavi isilti gozlendi. Pastaki metal iyonlari oksidasyonu zayif sekilde katalizler. Yalanci Pozitif.",
  "luminolPotato": "Luminescence yok. Patates peroksidazlari bu kosullarda luminol oksidasyonunu katalizlemez. Negatif.",
  "luminolNegative": "Karanlikta luminescence gozlenmedi. Bilesik luminol oksidasyonunu katalizlemez. Negatif.",
  "kmBlood": "Hidrojen peroksit eklendiginde hemen parlak pembe renk gozlendi. Kan numunesindeki hem, fenolftalini fenolftaleine oksitledi. Dogru Pozitif.",
  "kmBleach": "Hemen guclu pembe renk degisimi. Sodyum hipoklorit fenolftalini peroksitsiz dogrudan oksitler. Yalanci Pozitif.",
  "kmRust": "Birkac saniye sonra yavas, zayif kahverengimsi pembe renk olusumu. Pas reaksiyonu cok daha yavas katalizler. Yalanci Pozitif.",
  "kmPotato": "Gecikmeden sonra yavas, soluk pembe renk olusumu. Bitki peroksidazlari reaksiyonu zayif katalizler. Yalanci Pozitif.",
  "kmNegative": "Renk degisimi gozlenmedi. Cozelti renksiz kalir. Negatif."
},
  seo: [
  {
    "type": "title",
    "text": "Adli Tip Varsayimsal Kan Testleri Kilavuzu",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Varsayimsal kan testleri, olay yerlerinde olası kan lekelerini tespit etmek icin kullanilan hassas tarama yontemleridir. Karmaasik DNA analizlerinden ve dogrulama testlerinden once, adli uzmanlar giysiler, silahlar ve diger yuzeylerdeki biyolojik kalintilari belirlemek icin bu hızlı yontemlere basvururlar. Bu testler, hemoglobindeki demir iceren hem grubunun peroksidaz benzeri aktivitesini hedeflediginden varsayımsaldır. Pozitif bir sonuc kan varlıgını guclu sekilde gosterir, ancak diger kimyasal reaksiyonlari dislamak icin laboratuvarda ikinci bir dogrulama testi yapılması sarttır."
  },
  {
    "type": "title",
    "text": "Kastle-Meyer Kimyasal Renk Testi Calisma Mekanizmasi ve Adimlari",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Kastle-Meyer (KM) renk testi, renksiz fenolftalinin pembe renkli fenolftaleine yukseltgenmesi esasına dayanır. Reaksiyon sırası cok onemlidir: once numuneye fenolftalin reaktifi damlatılır. Kan varsa hem grubu katalizor gorevi gorur. Ardından hidrojen peroksit damlatıldıgında, hem peroksidin parcalanmasını hızlandırır ve reaktifi hemen pembe fenolftaleine oksitleyerek parlak pembe bir renk verir. On bes saniyeden sonra olusan yavas renk degisimi, havadaki oksijenin etkisiyle olusan negatif veya sahte sonuc kabul edilir."
  },
  {
    "type": "title",
    "text": "Luminol ve Adli Kimyasal Luminesans Teknigi Detaylari",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Luminol, alkali ortamda bir oksitleyici ve metal katalizor varlıgında karanlıkta mavi-cyan isık yayan bir kimyasaldır. Olay yeri inceleme ekipleri, temizlendigi dusunulen genis alanlara luminol solusyonu puskurtur. Solusyon gozle gorulmeyen kan lekeleriyle temas ettiginde, hemoglobindeki demir oksidasyon reaksiyonunu katalizler. Bu reaksiyon sonucunda uyarılmıs aminofitalat iyonu olusur ve bu iyon temel seviyeye donerken enerji yayar. Mavi ısık emisyonu dusuk yogunlukta oldugundan, fotograflamak icin tam karanlık gerekir."
  },
  {
    "type": "table",
    "headers": [
      "Test Edilen Madde",
      "Kastle-Meyer Tepkisi",
      "Luminol Isildama Profili",
      "Adli Tip Teshisi"
    ],
    "rows": [
      [
        "Kan Kontrol Numunesi",
        "H2O2 damlatıldıgında hemen parlak pembe renk.",
        "Yogun ve kararlı mavi isilti (8s).",
        "Dogru Pozitif. Hem grubu yuksek katalitik aktivite saglar."
      ],
      [
        "Camasir Suyu",
        "H2O2 damlatılmadan once pembe renk.",
        "Yogun ancak 2s icinde kaybolan isildama.",
        "Yalanci Pozitif. Guclu oksitleyici katalizorsuz dogrudan reaksiyon verir."
      ],
      [
        "Demir Oksit (Pas)",
        "Yavas ve zayıf kahverengimsi pembe renk.",
        "Zayıf, sonuk mavi isildama.",
        "Yalanci Pozitif. Serbest demir iyonları dusuk verimle katalizler."
      ],
      [
        "Patates (Peroksidaz)",
        "Gecikmeli ve cok hafif pembe renk.",
        "Karanlıkta hicbir isildama gozlenmez.",
        "Yalanci Pozitif (KM) / Negatif (LUM)."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Kani Diger Yalanci Pozitiflerden Ayirt Etme Yontemleri ve Analiz",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Kani sahte reaksiyonlardan ayırmak, adli delillerin guvenilirligi acısından kritiktir. Sodyum hipoklorit iceren camasir suları reaktifi peroksitsiz oksitler. Uzmanlar bunu reaksiyonun hızı ve suresine bakarak ayırt ederler: camasir suyu peroksitsiz renk verir ve luminol ısısı hemen soner. Bitkisel peroksidazlar ise ısı uygulandıgında yapısı bozularak inaktif hale gelirken, kandaki hemoglobin ısıya dayanıklı oldugundan ısıtıldıktan sonra bile reaksiyon vermeye devam eder."
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
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
