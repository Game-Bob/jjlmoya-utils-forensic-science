import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'radyoaktif-bozunma-yari-omur-hesaplayici';
const title = 'Radyoaktif bozunma yari omur hesaplayici';
const description = 'Gercek izotoplarla radyoaktif bozunmayi, yari omur formulunu, stokastik atom alanini, kalan miktari ve goreli aktiviteyi simule edin.';

const howTo = [
  { name: 'Bir izotop secin', text: 'Karbon-14, Iyot-131, Uranyum-238, Teknesyum-99m veya Radon-222 ile baslayin. Her preset gercekci bir yari omur ve yaygin bilimsel baglam yukler.' },
  { name: 'Ornek ve zamani ayarlayin', text: 'Gosterilen atom sayisini ayarlayin ve zaman ilerledikce kalan oranin yari omur yasasini nasil izledigini gorun.' },
  { name: 'Kesin hesap ile atomik rastlantiyi karsilastirin', text: 'Deterministik sonucu beklenen deger olarak kullanin; kucuk orneklerin teorik egri etrafinda neden dalgalandigini atom alaninda izleyin.' },
  { name: 'Aktiviteyi yorumlayin', text: 'Aktivite, bozunmamis cekirdeklerle ayni oranda azalir. Gosterge, baslangic radyasyon hizinin ne kadarinin kaldigini gosterir.' },
];

const faq = [
  { question: 'Yari omur ne demektir?', answer: 'Yari omur, bir ornekteki kararsiz cekirdeklerin ortalama olarak yarisinin bozunmasi icin gereken suredir. Bir yari omurden sonra %50, iki yari omurden sonra %25, uc yari omurden sonra %12,5 kalir.' },
  { question: 'Atom alani neden tam yuzdeyle her zaman uyusmaz?', answer: 'Radyoaktif bozunma olasiliksaldir. Formul cok buyuk ornekler icin beklenen orani verir; alan ise rastgele esiklere sahip tek tek atomlari simule eder.' },
  { question: 'Aktivite gostergesi kalan atomlarla ayni sey mi?', answer: 'Tek bir izotop icin aktivite bozunmamis cekirdek sayisiyla orantilidir. Atomlarin %30 u kaldiysa anlik aktivite de yaklasik %30 olur.' },
  { question: 'Bu hesaplayici karbon tarihleme icin kullanilabilir mi?', answer: 'Kavramsal hesaplar icin evet. Gercek laboratuvar tarihlemesi kalibrasyon egrileri, kirlenme ve ornek hazirligini da duzeltir.' },
  { question: 'Her izotop tek bir kararli urune mi bozunur?', answer: 'Her zaman degil. Bazi izotoplar birden fazla kiz urun iceren zincirlerle bozunur. Bu arac ana izotopun yari omrunu modeller.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Izotop',
    sampleAtoms: 'Ornek atomlari',
    elapsedTime: 'Gecen sure',
    halfLife: 'Yari omur',
    remaining: 'Kalan',
    decayed: 'Bozunan',
    activity: 'Goreli aktivite',
    timeUnit: 'Zaman birimi',
    expectedCurve: 'Beklenen egri',
    atomField: 'Atom alani',
    presetUse: 'Yaygin kullanim',
    oneHalfLife: '1 yari omur',
    twoHalfLives: '2 yari omur',
    fourHalfLives: '4 yari omur',
    custom: 'Ozel',
    liveAtoms: 'Aktif atomlar',
    decayedAtoms: 'Bozunan atomlar',
    resetSeed: 'Yeni atom deseni',
  },
  seo: [
    { type: 'title', text: 'Radyoaktif yari omur hesaplayici: kalan atomlar, aktivite ve izotop ornekleri', level: 2 },
    { type: 'paragraph', html: 'Bu radyoaktif bozunma hesaplayicisi, kararsiz bir izotoptan belirli bir sure sonra ne kadar kaldigini tahmin eder. Yari omur formulu, gercek izotop uygulamalari, kalan ana cekirdekler, bozunan cekirdekler ve aktivite azalmasi gibi arama niyetlerini karsilar.' },
    { type: 'paragraph', html: 'Kullanilan formul <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. Atom alani ise tek tek cekirdeklerin rastgele bozundugunu gosterir; buyuk orneklerde duzgun egri ortaya cikar.' },
    { type: 'table', headers: ['Gecen sure', 'Faktor', 'Kalan ana cekirdek', 'Goreli aktivite'], rows: [['0 yari omur', '(1/2)^0', '100%', '100%'], ['1 yari omur', '(1/2)^1', '50%', '50%'], ['2 yari omur', '(1/2)^2', '25%', '25%'], ['3 yari omur', '(1/2)^3', '12,5%', '12,5%'], ['5 yari omur', '(1/2)^5', '3,125%', '3,125%'], ['10 yari omur', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Izotop ornekleri ve yorumlama', level: 3 },
    { type: 'table', headers: ['Izotop', 'Yaklasik yari omur', 'Yaygin kullanim', 'Sonucun anlami'], rows: [['Karbon-14', '5.730 yil', 'Radyokarbon tarihleme', 'Bir zamanlar canli olan maddede kalan Karbon-14 aktivitesi.'], ['Iyot-131', '8,02 gun', 'Tedavi ve nukleer olaylar', 'Aktivitenin gunler icinde ne kadar hizli dustugu.'], ['Teknesyum-99m', '6,01 saat', 'Tani goruntuleme', 'Yararli tibbi aktivitenin klinik gun icinde neden azaldigi.'], ['Uranyum-238', '4,47 milyar yil', 'Jeolojik tarihleme', 'Uzun omurlu izotoplarin neden olculebilir kaldigi.'], ['Radon-222', '3,82 gun', 'Ic mekan radyasyonu', 'Gaz kaynakli maruziyetin nasil degistigi.']] },
    { type: 'paragraph', html: 'Tek bir ana izotop icin aktivite bozunmamis cekirdek sayisiyla orantilidir. Arac egitim, nukleer kimya, radyokarbon sezgisi, tibbi izotop planlamasi ve radyasyon guvenligi icin yararlidir.' },
    { type: 'paragraph', html: 'Model tek bir yari omur kullanir. Gercek olcumlerde dedektor verimi, arka plan radyasyonu, dallanma oranlari, kiz urunler, biyolojik atilim, kimyasal form, zirlama ve kalibrasyon egrileri gerekebilir. Sonucu tıbbi talimat veya dozimetri yerine kullanmayin.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

