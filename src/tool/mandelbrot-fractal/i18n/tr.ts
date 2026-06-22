import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fraktal-hesaplayici';
const title = 'Mandelbrot Fraktal Hesaplayici & Self Similarity Explorer';
const description = 'Mandelbrot kumesini kesfedin, kendine benzeyen fraktal sinirlara yakinsayin ve yineleme derinligi, renk kontrasti ve karmasik duzlem koordinatlarini karsilastirin.';

const howTo = [
  {
    name: 'Mandelbrot kumesinin bir bolgesini secin',
    text: 'Tam kumeden baslayin veya denizati vadisi ya da spiral minibrot gibi yuksek detayli bir bolgeye dogrudan atlayin.',
  },
  {
    name: 'Gorsele tiklayarak yakinsayin',
    text: 'Canvas uzerindeki herhangi bir noktaya tiklayarak karmasik duzlemi yeniden merkezleyin ve fraktali o koordinat etrafinda buyutun.',
  },
  {
    name: 'Yineleme derinligini ve renk kontrastini ayarlayin',
    text: 'Daha ince sinir yapisini ortaya cikarmak icin yineleme butcesini artirin, ardindan kacis suresi bantlarini daha okunabilir hale getirmek icin kontrast ve paleti ayarlayin.',
  },
];

const faq = [
  {
    question: 'Mandelbrot kumesi hesaplayicisi ne gosterir?',
    answer: 'z = 0 dan baslandiginda z(n+1) = z(n)^2 + c yinelemesini sinirli tutan karmasik sayilari c gosterir. Secilen yineleme butcesi icinde asla kacmayan noktalar kumenin uyeleri olarak renklendirilirken, dis noktalar yorungelerinin ne kadar hizli kactigina gore renklendirilir.',
  },
  {
    question: 'Mandelbrot kume siniri neden bu kadar cok detay iceriyor?',
    answer: 'Sinir, kararli ve kacan yorungeleri ayirir ve bu sinir yakinindaki kucuk koordinat degisiklikleri uzun vadeli davranisi tamamen degistirebilir. Bu hassasiyet, ice ice gecmis ampuller, spiraller, filamentler ve bircok buyutme seviyesinde ortaya cikan minyatur kopyalar olusturur.',
  },
  {
    question: 'Mandelbrot kumesi gercekten kendine benzer mi?',
    answer: 'Bir Sierpinski ucgeni ile ayni katı anlamda mukemmel sekilde kendine benzemez, ancak zengin bir yari-kendine benzerlige sahiptir. Tum kumenin kucuk kopyalari duzlem boyunca, genellikle bozulmus ve ayrintili dallanma yapilariyla birbirine baglanmis olarak gorunur.',
  },
  {
    question: 'Yineleme sayisi neyi kontrol eder?',
    answer: 'Yineleme sayisi, hesaplayicinin her noktayi muhtemelen kumeye ait olduguna karar vermeden once ne kadar sure test edecegini kontrol eder. Daha yuksek degerler daha derin filamentleri ve daha temiz minibrotlari ortaya cikarir, ancak piksel basina daha fazla hesaplama gerektirir.',
  },
  {
    question: 'Siyah bolgenin disinda renkler neden degisiyor?',
    answer: 'Dis renkler kacis suresine dayanir: hizli kacan noktaler, bircok yineleme boyunca kumeye yakin kalan noktalardan farkli renkler alir. Yumusak renklendirme sert bantlari azaltir ve yakin yorungelerin geometrisini incelemeyi kolaylastirir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot Fraktal Hesaplayici',
    canvasLabel: 'Etkilesimli Mandelbrot kumesi canvas',
    presetsLabel: 'Mandelbrot bolgesi on ayarlari',
    presetFull: 'Tam Kume',
    presetSeahorse: 'Denizati Vadisi',
    presetSpiral: 'Spiral Minibrot',
    centerPoint: 'Merkez',
    magnification: 'Buyutme',
    visibleWindow: 'Gorunur pencere',
    renderBudget: 'Yineleme',
    iterationsLabel: 'Yineleme derinligi',
    contrastLabel: 'Kacis kontrasti',
    colorLabel: 'Renk alani',
    paletteEmber: 'Kor bantlari',
    paletteLagoon: 'Lagun plazmasi',
    paletteInk: 'Murekkep spektrumu',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Set Calculator for Fractals, Escape Time, and Self-Similarity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu Mandelbrot fraktal hesaplayicisi, <strong>z(n+1) = z(n)^2 + c</strong> yinelemesiyle tanimlanan klasik karmasik duzlem kumesini render eder. Pasif izlemeden ziyade kesif icin tasarlanmistir: her tiklayis duzlemi yeniden merkezler, her yakinsama daha kucuk bir matematiksel komsulugu ortaya cikarir ve yineleme kaydiricisi, hesaplayicinin bir noktayi kararli veya kacan olarak renklendirmeden once siniri ne kadar derin test etmesi gerektigine karar vermenizi saglar.',
    },
    {
      type: 'title',
      text: 'How to Read the Mandelbrot Image',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Koyu merkezi sekil, yorungeleri mevcut yineleme butcesi icinde sinirli kalan noktalari isaretler. Renkli dis kisim bir kacis suresi haritasidir. Kumeye yakin renklendirilmis bir nokta, buyuklugu kacis yaricapini asmadan once yuzlerce yineleme hayatta kalabilirken, uzaktaki bir nokta neredeyse aninda kacar. Bilimsel olarak en ilginc geometri genellikle dolu seklin icinde degil, sinirli ve sinirsiz davranisin ic ice gectigi sinir boyuncadir.',
    },
    {
      type: 'table',
      headers: ['Kontrol', 'Neyi degistirir', 'Ne zaman artirilmali'],
      rows: [
        ['<strong>Yineleme derinligi</strong>', 'Her piksel icin kac yineleme adiminin test edildigi.', 'Ince filamentlere veya minyatur kopyalara yakinsadiktan sonra daha yuksek degerler kullanin.'],
        ['<strong>Kacis kontrasti</strong>', 'Yumusak kacis degerlerinin gorunur bantlara ne kadar guclu ayrildigi.', 'Goruntu duz gorundugunde yukseltin; renkler cok sert oldugunda dusurun.'],
        ['<strong>Palet</strong>', 'Dis noktalara uygulanan renk eslemesi.', 'Bir renk alani tarafindan gizlenebilecek yapilari ortaya cikarmak icin paletleri degistirin.'],
      ],
    },
    {
      type: 'title',
      text: 'Self-Similarity and Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mandelbrot kumesinin bu kadar unlu olmasinin bir nedeni yari-kendine benzerligidir. Antenlere, spirallere ve vadilere yakinsadikca, minibrotlar olarak adlandirilan kucuk Mandelbrot benzeri adalarla tekrar tekrar karsilasirsiniz. Bu kopyalar sadece dekoratif degildir. Dizilisleri, periyodik ampuller, bifurcation patternleri ve yorungelerin kacmadan once uzun sureler boyunca kapali kaldigi bolgeler dahil olmak uzere, karesel haritalarin dinamigini yansitir.',
    },
    {
      type: 'title',
      text: 'Why Higher Iterations Matter at Deep Zoom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tam kume goruntusunde, makul bir yineleme siniri taninabilir bir goruntu verir. Ancak daha derin buyutmede, bircok sinir noktasi kacip kacmadiklarini ortaya cikarmak icin cok daha uzun surer. Yineleme siniri cok dusukse, ince yapilar yanlislikla kat veya bulanik gorunebilir. Yineleme sayisini yukseltmek sinir siniflandirmasini iyilestirir ve hesaplayicinin dar dallari, spiral kollari ve uydu ampulleri daha fazla guvenle cozmesini saglar.',
    },
    {
      type: 'title',
      text: 'Mathematical Meaning of the Complex Coordinates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Koordinat okumasi, goruntuleme alaninin mevcut merkezini karmasik bir sayi olarak c = a + bi gosterir. Yatay eksen gercek kisim, dikey eksen ise sanal kisimdir. Canvas uzerine tiklamak yeni bir karmasik koordinat secer ve ardindan gorunur pencereyi onun etrafinda buyutur. Bu, araci fraktalin gorsel bolgelerinin karmasik duzlemdeki kesin konumlara nasil karsilik geldigini ogrenmek icin kullanisli hale getirir.',
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
