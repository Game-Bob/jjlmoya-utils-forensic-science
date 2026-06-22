import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'faz-diyagrami-kritik-nokta-goruntuleyici';
const title = 'Faz Diyagrami ve Kritik Nokta Goruntuleyici';
const description = 'Uclu nokta ve kritik nokta isaretcileriyle interaktif bir basinc-sicaklik faz diyagraminda kati, sivi, gaz ve superkritik bolgeleri kesfedin.';

const howTo = [
  {
    name: 'Bir madde secin',
    text: 'Su, karbondioksit ve azot arasinda gecis yaparak gercek uclu noktalarin ve kritik noktalarin faz haritasini nasil yeniden sekillendirdigini gorun.',
  },
  {
    name: 'Sicakligi ve basinci hareket ettirin',
    text: 'Kaydiricilari kullanarak numuneyi basinc-sicaklik duzlemine yerlestirin. Diyagram, aktif faz bolgesini ve canli numune isaretcisini gunceller.',
  },
  {
    name: 'Kritik haleyi izleyin',
    text: 'Buhar-sivi sinirinin sonuna dogru hareket ederek gizli isinin kayboldugunu ve sivi-gaz ayriminin superkritik bir akiskana donustugunu gorun.',
  },
  {
    name: 'Ogretim panelini okuyun',
    text: 'Faz etiketi, gizli isi sayaci ve nokta okumalarini kullanarak gorsel diyagrami termodinamik kelime dagarcigiyla iliskilendirin.',
  },
];

const faq = [
  {
    question: 'Faz diyagrami nedir?',
    answer: 'Faz diyagrami, maddenin hangi halinin farkli sicaklik ve basinc kombinasyonlarinda kararli oldugunu gosteren bir haritadir. Sinir cizgileri, iki fazin denge halinde bir arada bulunabilecegi kosullari isaretler.',
  },
  {
    question: 'Kritik noktada ne olur?',
    answer: 'Kritik noktada buhar-sivi siniri sona erer. Kritik sicaklik ve kritik basincin uzerinde, madde superkritik bir akiskan haline gelir ve sivi ile gaz arasinda keskin bir ayrim kalmaz.',
  },
  {
    question: 'Neden suyun erime cizgisi farklidir?',
    answer: 'Su, erime noktasi yakininda buzun sivi sudan daha az yogun olmasi nedeniyle sira disidir. Artan basinc, daha yogun olan sivi fazini destekleyebilir, bu nedenle kati-sivi siniri bircok maddeden farkli bir egime sahiptir.',
  },
  {
    question: 'Cizilen egriler laboratuvar acidan tam midir?',
    answer: 'Hayir. Araci, yayinlanmis uclu nokta ve kritik nokta degerlerine baglanmis basitlestirilmis egriler kullanir. Kavramsal ogrenme icin tasarlanmistir, proses muhendisligi veya guvenlik hesaplamalari icin degildir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Faz diyagrami kontrolleri',
    substance: 'Madde',
    units: 'Birimler',
    scientificUnits: 'Bilimsel (K, MPa)',
    metricUnits: 'Metrik (Santigrat, kPa)',
    imperialUnits: 'Imperial (Fahrenhayt, psi)',
    temperature: 'Sicaklik',
    pressure: 'Basinc',
    diagram: 'Basinc-sicaklik faz diyagrami',
    sample: 'Ornek durum',
    phase: 'Kararli faz',
    triplePoint: 'Uclu nokta',
    criticalPoint: 'Kritik nokta',
    vaporCurve: 'Buhar-sivi siniri',
    meltingLine: 'Kati-sivi siniri',
    latentHeat: 'Gizli isi karsilastirmasi',
    criticalProximity: 'Kritik yakinlik',
    coordinates: 'Koordinatlar',
    solid: 'Kati',
    liquid: 'Sivi',
    gas: 'Gaz',
    supercritical: 'Superkritik',
    low: 'dusuk',
    high: 'yuksek',
    reset: 'Sifirla',
    interpretation: 'Yorumlama',
    note: 'Sinir cizgileri bir arada bulunmayi isaretler; bolgeler secilen kosullar icin en kararli fazi gosterir.',
  },
  seo: [
    {
      type: 'title',
      text: 'Uclu noktalar, kaynama egrileri ve kritik noktalar icin interaktif faz diyagrami goruntuleyici',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu faz diyagrami goruntuleyici, soyut bir basinc-sicaklik grafigini interaktif bir haritaya donusturur. Bir madde secin, sicakligi ve basinci hareket ettirin ve numunenin kati, sivi, gaz veya superkritik bir akiskan olarak davranip davranmayacagini gorun. Amac, faz sinirlarini mekansal hissettirmektir: bir cizgiyi gecmek kararli durumu degistirirken, kritik noktaya yaklasmak bir faz sinirinin ne anlama geldigini degistirir.',
    },
    {
      type: 'paragraph',
      html: 'Arac, ogrenciler, ogretmenler, bilim yazarlari ve faz diyagramlarinin net bir aciklamasini arayan herkes icin olusturulmustur. Giris termodinamiginde en onemli olan ozellikleri vurgular: uc fazin bir arada bulundugu uclu nokta, buhar-sivi egrisi, kati-sivi siniri ve sivi-gaz ayriminin kayboldugu kritik uç nokta.',
    },
    {
      type: 'title',
      text: 'Basinc-sicaklik diyagrami nasil okunur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir faz diyagrami, sicakligi bir eksene ve basinci diger eksene yerlestirir. Her bolge, bu kosullar altinda kararli olan fazi gosterir. Bolgeler arasindaki cizgiler bir arada bulunma egrileridir: bu cizgiler boyunca, bir fazin digerinin yerini tamamen almasi yerine iki faz dengede kalabilir.',
    },
    {
      type: 'table',
      headers: ['Diyagram ozelligi', 'Anlami', 'Aracta izlenecek sey'],
      rows: [
        ['Uclu nokta', 'Kati, sivi ve gaz bir arada bulunur', 'Sinirlarin birlestigi dusuk sicaklikli kavsak.'],
        ['Buhar-sivi egrisi', 'Kaynama veya yogunlasma dengesi', 'Uclu noktadan kritik noktaya uzanan egri cizgi.'],
        ['Kati-sivi siniri', 'Erime veya donma dengesi', 'Kati ve sivi bolgelerini ayiran dik cizgi.'],
        ['Kritik nokta', 'Buhar-sivi sinirinin sonu', 'Gizli isinin kayboldugu vurgulanmis uç nokta.'],
        ['Superkritik bolge', 'Keskin sivi-gaz ayrimi yok', 'Kritik noktanin otesindeki yuksek sicaklik, yuksek basinc alani.'],
      ],
    },
    {
      type: 'title',
      text: 'Kritik nokta neden onemlidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kritik noktanin altinda, kaynama bir faz gecisidir: sivi ve buhar bir arada bulunabilir ve sicaklik sinir kosuluna bagli kalirken enerji gizli isi olarak emilebilir. Kritik noktada bu sinir sona erer. Bunun uzerinde yogunluk surekli olarak degisir ve madde normal bir sivi veya gazdan ziyade superkritik bir akiskan olarak tanimlanir.',
    },
    {
      type: 'paragraph',
      html: 'Bu, kimya, gezegen bilimi, endustriyel ekstraksiyon, sogutma ve yuksek basinc fiziginde onemlidir. Ornegin karbondioksit, suya kiyasla nispeten ulasilabilir kosullarda superkritik hale gelir, bu nedenle superkritik CO2 ekstraksiyon ve malzeme islemede kullanilir. Su, cok daha yuksek sicaklik ve basinc gerektirir, bu da kritik noktasini guc sistemleri ve jeofizik icin onemli kilar.',
    },
    {
      type: 'title',
      text: 'Bu goruntuleyicinin basitlestirdigi seyler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gercek faz diyagramlari polimorflar, yari-kararli durumlar, ideal olmayan karisimlar, birden fazla kati faz ve deneysel olarak uydurulmus hal denklemleri icerebilir. Bu egitim araci, modeli kasten kompakt tutar. Her maddeyi taninabilir referans degerlerine baglar ve bir termodinamik tablosuna ihtiyac duymadan ana fikirlerin incelenmesi kolay olsun diye yumusak ogretim egrileri cizer.',
    },
    {
      type: 'list',
      items: [
        '<strong>Sezgi icin kullanin:</strong> duduklulerin, kuru buzun, kaynamanin ve superkritik akiskanlarin neden farkli davrandigini aciklamaya yardimci olur.',
        '<strong>Muhendislik limitleri icin kullanmayin:</strong> basitlestirilmis egriler, sertifikali ozellik verilerinin yerini tutmaz.',
        '<strong>Topolojiye odaklanin:</strong> en onemli ogrenme ciktisi, faz bolgelerinin nasil baglandigini ve sinirlarin nerede bittigini anlamaktir.',
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
