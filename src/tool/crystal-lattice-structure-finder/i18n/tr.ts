import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kristal-kafes-yapi-bulucu';
const title = 'Kristal Kafes Yapısı Bulucu';
const description = 'Basit kübik, yüzey merkezli kübik (YMK) ve hekzagonal sıkı paket (HSP) birim hücrelerini interaktif 3D görüntüleyici, atomik paketleme faktörü, koordinasyon sayısı ve teorik yoğunluk hesaplayıcı ile keşfedin.';

const howTo = [
  {
    name: 'Bir kafes veya malzeme seçin',
    text: 'Basit kübik, YMK veya HSP gibi bir yapı ailesinden başlayın veya kafes sabitini ve atomik ya da formül kütlesini yüklemek için gerçek bir malzeme ön ayarı seçin.',
  },
  {
    name: 'Birim hücreyi döndürün',
    text: 'Hangi atomların köşelerde, yüzeylerde veya geleneksel hücrenin içinde olduğunu incelemek için açı ve yakınlaştırma kontrollerini sürükleyin.',
  },
  {
    name: 'Paketleme ve yoğunluğu okuyun',
    text: 'Seçilen yapı için atomik paketleme faktörünü, koordinasyon sayısını, hücre başına atomu, hücre kütlesini, hücre hacmini ve teorik yoğunluğu karşılaştırın.',
  },
  {
    name: 'Özel sabitleri test edin',
    text: 'Kristal genişlediğinde, büzüldüğünde veya bileşim değiştirdiğinde teorik yoğunluğun nasıl değiştiğini görmek için kafes parametresi a, c/a oranı ve kütleyi düzenleyin.',
  },
];

const faq = [
  {
    question: 'Kristal kafeste birim hücre nedir?',
    answer: 'Birim hücre, kristali oluşturmak için uzayı döşeyebilen en küçük tekrarlanan üç boyutlu kutudur. Atomları komşu hücrelerle paylaşılabilir, bu nedenle hücre başına net atom sayısı, sınırlarda çizilen küre sayısından daha az olabilir.',
  },
  {
    question: 'YMK ve HSP neden aynı paketleme faktörüne sahiptir?',
    answer: 'YMK ve ideal HSP, eşit kürelerin her ikisi de sıkı paketlenmiş düzenlemeleridir. Yoğun üçgen katmanları farklı dizilerde istiflerler, YMK için ABCABC ve HSP için ABAB, ancak her ikisi de alanın yaklaşık yüzde 74\'ünü atomlarla doldurur.',
  },
  {
    question: 'Teorik yoğunluk nasıl hesaplanır?',
    answer: 'Hesaplayıcı, bir birim hücrenin içindeki kütleyi birim hücre hacmine böler. Hücre kütlesi, hücre başına atom veya formül birimi sayısının mol kütlesi ile çarpılıp Avogadro sabitine bölünmesiyle elde edilir.',
  },
  {
    question: 'Ölçülen yoğunluk neden teorik sonuçtan farklı olabilir?',
    answer: 'Gerçek numuneler boşluklar, safsızlıklar, gözenekler, tane sınırları, izotopik karışımlar, sıcaklık genleşmesi veya birden çok faz içerebilir. Teorik değer, seçilen kafes sabitine sahip mükemmel bir kristali varsayar.',
  },
  {
    question: 'Halit gerçekten bir YMK metal kafesi midir?',
    answer: 'Hayır. Halit iyonik kaya tuzudur, bir metal değildir. Ön ayar, geleneksel YMK türevli hücresini kullanır çünkü NaCl kübik hücre başına dört formül birimine sahiptir, bu da onu yoğunluk hesaplama pratiği için kullanışlı kılar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'İnteraktif kristal birim hücre',
    material: 'Malzeme',
    lattice: 'Kafes',
    rotation: 'Döndürme',
    zoom: 'Yakınlaştırma',
    latticeA: 'Kafes sabiti a',
    cRatio: 'c/a oranı',
    molarMass: 'Mol kütlesi',
    atomsPerCell: 'Hücre başına atom',
    packingFactor: 'Paketleme faktörü',
    coordination: 'Koordinasyon',
    density: 'Yoğunluk',
    cellVolume: 'Hücre hacmi',
    cellMass: 'Hücre kütlesi',
    radius: 'Atom yarıçapı',
    cornerAtoms: 'Köşe atomları',
    faceAtoms: 'Yüzey atomları',
    interiorAtoms: 'İç atomlar',
    materialNote: 'Malzeme notu',
    formula: 'Formül',
    resetView: 'Görünümü sıfırla',
    crystalProperties: 'Kristal özellikleri',
    physicalMetrics: 'Fiziksel metrikler',
    latticeSimpleCubic: 'Basit kübik',
    latticeFcc: 'Yüzey merkezli kübik (YMK)',
    latticeHcp: 'Hegzagonal sıkı paket (HSP)',
    shortSc: 'SC',
    shortFcc: 'YMK',
    shortHcp: 'HSP',
    materialCopper: 'Bakır',
    materialCopperNote: 'Yüksek elektrik iletkenliğine sahip yaygın bir YMK metali.',
    materialAluminum: 'Alüminyum',
    materialAluminumNote: 'İyi termal iletkenliğe sahip hafif bir YMK metali.',
    materialPolonium: 'Polonyum',
    materialPoloniumNote: 'Basit kübik yapıya sahip nadir bir element.',
    materialMagnesium: 'Magnezyum',
    materialMagnesiumNote: 'İyi mukavemet-ağırlık oranına sahip hafif bir HSP metali.',
    materialTitanium: 'Titanyum',
    materialTitaniumNote: 'Havacılık uygulamalarında yaygın olarak kullanılan güçlü bir HSP metali.',
    materialHalite: 'Halit',
    materialHaliteNote: 'Dört NaCl birimi için YMK türevli geleneksel hücreye sahip iyonik kaya tuzu.',
    shortSimpleCubic: 'SC',
    shortFaceCenteredCubic: 'FCC',
    shortHexagonalClosePacked: 'HCP',
    shortBodyCenteredCubic: 'BCC',
    shortDiamondCubic: 'DC',
    shortRockSalt: 'NaCl',
    shortCesiumChloride: 'CsCl',
    shortZincBlende: 'ZnS',
    shortWurtzite: 'WZ',
    shortPerovskite: 'ABO3',
    shortRutile: 'TiO2',
    latticeBodyCenteredCubic: 'Hacim merkezli kübik',
    latticeCesiumChloride: 'Sezyum klorür',
    latticeDiamondCubic: 'Elmas kübik',
    latticeFaceCenteredCubic: 'Yüzey merkezli kübik',
    latticeHexagonalClosePacked: 'Hegzagonal sıkı paket',
    latticePerovskite: 'Kübik perovskit',
    latticeRockSalt: 'Kaya tuzu',
    latticeRutile: 'Rutil',
    latticeWurtzite: 'Wurtzit',
    latticeZincBlende: 'Çinko blendi',
    materialAlphaIron: 'Alfa demir',
    materialAlphaIronNote: 'Oda sıcaklığındaki hacim merkezli kübik demir fazı.',
    materialTungsten: 'Tungsten',
    materialTungstenNote: 'Çok yüksek erime noktasına sahip yoğun BCC refrakter metal.',
    materialSilicon: 'Silisyum',
    materialSiliconNote: 'Entegre devrelerde kullanılan elmas kübik yarı iletken.',
    materialDiamond: 'Elmas',
    materialDiamondNote: 'Elmas kübik yapıda kovalent karbon ağı.',
    materialCesiumChloride: 'Sezyum klorür',
    materialCesiumChlorideNote: 'Sekizli koordinasyona sahip iç içe geçmiş basit kübik iyonik yapı.',
    materialZincSulfide: 'Çinko sülfür',
    materialZincSulfideNote: 'Sfalerit, çinko blendi olarak da bilinir, tetrahedral koordinasyona sahiptir.',
    materialGalliumNitride: 'Galyum nitrür',
    materialGalliumNitrideNote: 'LED ve güç elektroniğinde kullanılan wurtzit yarı iletken.',
    materialStrontiumTitanate: 'Stronsiyum titanat',
    materialStrontiumTitanateNote: 'Altlık ve dielektrik model olarak kullanılan kübik perovskit oksit.',
    materialRutileTitania: 'Rutil titanya',
    materialRutileTitaniaNote: 'Titanyumun oktahedral koordinasyonuna sahip rutil TiO2 yapısı.',
  },
  seo: [
    {
      type: 'title',
      text: 'Kristal kafes yapısı bulucu ile birim hücreler, paketleme faktörü ve yoğunluk',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu kristal kafes yapısı bulucu, bir birim hücrenin görüntüsünü öğrencilerin ve malzeme bilimcilerin genellikle ihtiyaç duyduğu hesaplamalarla bağlamaya yardımcı olur. Basit kübik, yüzey merkezli kübik ve hekzagonal sıkı paket yapılarını inceleyebilir, ardından atomik paketleme faktörü, koordinasyon sayısı, hücre başına atom, kafes parametresinden atom yarıçapı, hücre hacmi, hücre kütlesi ve teorik yoğunluğu gerçek malzeme ön ayarlarından veya özel girdilerden hesaplayabilirsiniz.',
    },
    {
      type: 'paragraph',
      html: 'İnteraktif görüntüleyici, kristalografideki yaygın zorluk için tasarlanmıştır: sınır atomları görünür, ancak her bir sınır atomunun yalnızca bir kısmı seçilen hücreye aittir. Modeli döndürmek, sayısal formülü kullanmadan önce köşe bölgeleri, yüzey bölgeleri ve iç bölgeler arasındaki farkı görmeyi kolaylaştırır.',
    },
    {
      type: 'title',
      text: 'Basit kübik, YMK ve HSP karşılaştırması',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Yapı', 'Hücre başına net atom', 'Koordinasyon sayısı', 'Atomik paketleme faktörü', 'Tipik örnekler'],
      rows: [
        ['Basit kübik', '1', '6', '%52,36', 'Alfa polonyum klasik element örneğidir.'],
        ['Yüzey merkezli kübik', '4', '12', '%74,05', 'Bakır, alüminyum, nikel, gümüş, altın ve birçok sünek metal.'],
        ['Hekzagonal sıkı paket', '6', '12', '%74,05', 'Magnezyum, alfa titanyum, çinko, kobalt ve berilyum.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Basit kübik paketlemenin görselleştirilmesi kolaydır çünkü atomlar küp kenarı boyunca birbirine değer ve her köşe atomu hücreye sekizde bir katkıda bulunur. YMK, her yüzeyin merkezine atom ekler, böylece atomlar yüzey köşegenleri boyunca birbirine değer ve net sayı geleneksel kübik hücre başına dört atom olur. HSP, kübik bir kutu yerine hekzagonal katmanlar kullanır, ancak ideal HSP, YMK ile aynı sıkı paket sınırına ulaşır.',
    },
    {
      type: 'title',
      text: 'Atomik paketleme faktörü formülü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Atomik paketleme faktörü, sert küre atomları tarafından işgal edilen birim hücre hacminin oranıdır. <strong>APF = hücredeki atomların hacmi / birim hücre hacmi</strong> olarak hesaplanır. Basit kübik için bu pi / 6 olur çünkü yarıçapı a/2 olan bir atom kübik hücreye sığar. YMK ve ideal HSP, eşit küreler için maksimum paketleme oranı olan yaklaşık 0,7405\'e ulaşır.',
    },
    {
      type: 'paragraph',
      html: 'Paketleme faktörü yoğunluk ile aynı şey değildir. APF, özdeş kürelerin alanı ne kadar verimli doldurduğunu tanımlarken, yoğunluk aynı zamanda mol kütlesine ve kafes boyutlarına da bağlıdır. Hafif bir HSP metali ve ağır bir YMK metali benzer paketleme faktörlerine ancak çok farklı yoğunluklara sahip olabilir.',
    },
    {
      type: 'title',
      text: 'Hesaplayıcı tarafından kullanılan teorik yoğunluk formülü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı <strong>rho = nM / (NA Vhucre)</strong> formülünü kullanır. Bu denklemde, <strong>n</strong> hücre başına atom veya formül birimi sayısı, <strong>M</strong> gram bölü mol cinsinden mol kütlesi, <strong>NA</strong> Avogadro sabiti ve <strong>Vhucre</strong> santimetre küp cinsinden birim hücre hacmidir. Kübik hücreler a^3 kullanır. Hekzagonal hücreler (3 sqrt(3) / 2) a^2 c kullanır ve c, c/a oranı aracılığıyla sağlanır.',
    },
    {
      type: 'paragraph',
      html: 'Kafes sabitleri genellikle angstrom cinsinden tablolaştırıldığından, hesaplayıcı yoğunluğu hesaplamadan önce angstromu santimetreye dönüştürür. Kafes sabitindeki küçük bir değişiklik, kübik hücrelerde hacim üçüncü kuvvetle ölçeklendiğinden yoğunluğu gözle görülür şekilde etkileyebilir.',
    },
    {
      type: 'title',
      text: 'Metaller ve mineraller için kafes ön ayarları nasıl kullanılır',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bakır ve alüminyum:</strong> hücre başına aynı net atoma ancak farklı mol kütlelerine ve kafes sabitlerine sahip iki YMK metali karşılaştırın.',
        '<strong>Magnezyum ve alfa titanyum:</strong> HSP paketlemesini inceleyin ve c/a oranının hekzagonal hücre hacmini nasıl değiştirdiğini görün.',
        '<strong>Alfa polonyum:</strong> nadir basit kübik yapıyı ve daha düşük paketleme verimliliğini inceleyin.',
        '<strong>Halit:</strong> tek elementli bir metal yerine mineral tarzı bir NaCl geleneksel hücresi ile formül birimi yoğunluğu pratiği yapın.',
      ],
    },
    {
      type: 'title',
      text: 'Sert küre birim hücre modelinin sınırlamaları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu araç idealize edilmiş geometrik modeller kullanır. Gerçek kristaller sert sınırlar yerine elektron yoğunluğuna sahiptir ve kafes sabitleri sıcaklık, basınç, bileşim ve kusurlarla değişir. İyonik ve kovalent kristaller ayrıca burada gösterilen üç öğretim yapısının ötesine geçen baz atomları, kısmi doluluklar ve simetri işlemleri gerektirebilir.',
    },
    {
      type: 'paragraph',
      html: 'Sonuçları eğitim, hızlı tahminler ve yaygın kafes ailelerinin karşılaştırılması için kullanın. Yayın kalitesinde kristalografi için, kafes parametrelerini, fazı, stokiyometriyi ve bölge doluluğunu birincil kırınım verilerinden veya seçilmiş bir kristalografi veritabanından doğrulayın.',
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
      applicationCategory: 'EducationalApplication',
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
