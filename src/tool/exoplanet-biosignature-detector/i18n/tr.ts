import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'otegezegen-biyo-imza-algilayici';
const title = 'Ötegezegen Biyo İmza Algılayıcı';
const description = 'Simüle edilmiş bir ötegezegen geçiş tayfındaki oksijen, metan ve ozon soğurma çizgilerini hizalayın. Tayfsal kanıtlardan biyolojik yaşanabilirliği, olası teknolojik imza kirliliğini ve yanlış pozitif riskini değerlendirin.';

const howTo = [
  {
    name: 'Ana yıldızı seçin',
    text: 'Bir K cücesi, Güneş-benzeri yıldız veya M cücesi seçin. Yıldız türü, morötesi akı, parlamalar ve atmosferik fotokimya oksijen ile ozon yorumunu etkilediğinden yanlış pozitif riskini değiştirir.',
  },
  {
    name: 'Tayf çizgilerini hizalayın',
    text: 'Oksijen, metan ve ozon kontrollerini kullanarak gözlenen soğurma işaretlerini simüle edilmiş tayftaki referans bantlarıyla çakıştırın.',
  },
  {
    name: 'Gürültü ve atmosferik bağlamı ayarlayın',
    text: 'Alet gürültüsünü artırarak veri güvenilirliğinin nasıl değiştiğini gözlemleyin. Su buharı ve karbondioksiti ayarlayarak daha nemli, kuru, yoğun veya fotokimyasal açıdan şüpheli atmosfer senaryolarını inceleyin.',
  },
  {
    name: 'Yaşanabilirlik göstergelerini yorumlayın',
    text: 'Biyolojik ve teknolojik yaşanabilirlik çıktılarını yanlış pozitif riskiyle karşılaştırın. Güçlü bir sonuç için tek bir izole çizgi değil, kimyasal dengesizlik halindeki birden çok gazın varlığı gerekir.',
  },
];

const faq = [
  {
    question: 'Ötegezegen tayfölçümünde biyo-imza nedir?',
    answer: 'Biyo-imza, uzaktan algılanabilen ve yaşam süreçlerinden kaynaklanmış olabilecek bir özelliktir. Atmosfer tayflarında oksijen, ozon, metan ve su buharı gibi gazlar yaygın adaylardır. Özellikle birbirleriyle tepkimeye girmesi beklenen ancak sürekli yenilenen gaz kombinasyonları önemli kanıtlardır.',
  },
  {
    question: 'Oksijen ve metan birlikteliği neden önemlidir?',
    answer: 'Oksijen ve metan kimyasal olarak birbirleriyle reaktiftir. İkisinin anlamlı seviyelerde bir arada bulunması, atmosferin kimyasal bir dengesizlik içinde olduğuna işaret eder. Bu durum, her bir gazın tek başına varlığından çok daha güçlü bir biyolojik işarettir.',
  },
  {
    question: 'Oksijen yanlış pozitif bir sinyal olabilir mi?',
    answer: 'Evet. Oksijen; suyun fotolizi, volkanik süreçler veya yıldız kaynaklı morötesi radyasyon gibi abiyotik (canlı olmayan) yollarla da birikebilir. Bu yüzden araç, oksijeni doğrudan kanıt kabul etmek yerine yanlış pozitif riskini hesaplar.',
  },
  {
    question: 'Ozon neden oksijenden ayrı değerlendiriliyor?',
    answer: 'Ozon, oksijenin fotokimyasal bir ürünüdür ve oldukça belirgin tayfsal özelliklere sahiptir. Oksijen bantlarının gözlenmesinin zor olduğu durumlarda dolaylı bir indikatör olarak kullanılabilir, ancak yine de doğru atmosferik bağlamın kurulmasını gerektirir.',
  },
  {
    question: 'Teknolojik gösterge ne anlama gelir?',
    answer: 'Teknolojik gösterge; atmosfer tayfının, yapay bir kaynağın (tekno-imza) göz ardı edilemeyecek kadar enerjik, gürültülü veya sıra dışı göründüğü durumlar için spekülatif bir uyarı puanıdır. Kesin bir tespit iddiası değildir.',
  },
  {
    question: 'Bu gerçek bir ötegezegen veri geriçatma (retrieval) modeli midir?',
    answer: 'Hayır. Bu araç, temel tayfölçüm kavramlarını etkileşimli bir puanlama modeline dönüştüren eğitsel bir simülatördür. Gerçek bilimsel geriçatma işlemleri; ışınım aktarımı, yıldız kirliliği düzeltmesi, bulut modelleri ve Bayes çıkarımı gibi çok daha karmaşık yöntemler kullanır.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Ötegezegen geçiş tayfı görselleştirmesi',
    starClass: 'Ana yıldız',
    starK: 'Sakin K cücesi',
    starSun: 'Güneş-benzeri G yıldızı',
    starM: 'Aktif M cücesi',
    noise: 'Alet gürültüsü',
    oxygenLine: 'Oksijen işareti',
    methaneLine: 'Metan işareti',
    ozoneLine: 'Ozon işareti',
    waterVapor: 'Su buharı bağlamı',
    carbonDioxide: 'CO2 bağlamı',
    habitabilityIndex: 'Yaşanabilirlik göstergesi',
    biologicalIndex: 'Biyolojik',
    technologicalIndex: 'Teknolojik',
    falsePositiveRisk: 'Yanlış pozitif riski',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Sonuç',
    dataLive: 'Canlı veri sentezi',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Kanıtları değerlendirmek için tayf işaretlerini hizalayın.',
    verdictWeak: 'Tayf zayıf: çizgiler henüz yaşam lehine bir yorumu desteklemiyor.',
    verdictPromising: 'Tayf umut verici: birden çok biyo-imza işareti kısmen hizalanmış durumda.',
    verdictStrong: 'Tayf güçlü: O2, CH4 ve O3 tutarlı bir kimyasal dengesizlik sinyali oluşturuyor.',
    verdictAmbiguous: 'Sinyal ilginç ancak belirsiz: yıldız veya atmosfer kaynaklı yanlış pozitif etkenler hâlâ yüksek.',
  },
  seo: [
    { type: 'title', text: 'Ötegezegen Biyo İmza Algılayıcı', level: 2 },
    {
      type: 'paragraph',
      html: 'Ötegezegen biyo-imza algılayıcı, yaşamla ilişkili gazların uzak bir atmosferden süzülen ışıkta nasıl görünebileceğini keşfetmek için tasarlanmış etkileşimli bir tayfölçüm simülatörüdür. Araç, oksijen, metan ve ozon soğurma özelliklerini hizalamanızı ister ve sonucu gürültü, su buharı, karbondioksit ve ana yıldız davranışı bağlamında değerlendirir.',
    },
    {
      type: 'paragraph',
      html: 'Biyo-imza biliminin temel zorluğu budur: oksijen, metan ve ozon heyecan verici olsalar da hiçbiri tek başına kanıt değildir. En ikna edici durumlar; birden çok gazı, fiziksel bağlamı ve biyolojik olmayan açıklamaların dikkatlice elenmesini birleştirir. Simülatör, bu bilimsel dengeleri kompakt bir laboratuvar arayüzünde görünür kılar.',
    },
    { type: 'title', text: 'Geçiş Tayfölçümü Atmosfer Gazlarını Nasıl Ortaya Çıkarır', level: 3 },
    {
      type: 'paragraph',
      html: 'Bir gezegen yıldızının önünden geçerken, yıldız ışığının çok küçük bir kısmı teleskoba ulaşmadan önce gezegenin atmosferinden geçer. Moleküller belirli dalga boylarını soğurarak ölçülen tayfta karakteristik düşüşler bırakır. Gök bilimciler, bu düşüşleri laboratuvar verileriyle karşılaştırarak atmosfer bileşimini çıkarırlar; ancak bulutlar, pus, sıcaklık ve aletsel gürültü bu süreci karmaşıklaştırır.',
    },
    { type: 'title', text: 'Oksijen, Metan ve Ozonun Birleşik Sinyali', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Oksijen (O2):</strong> Dünya\'da fotosentezle korunur, ancak bazı gezegen tarihlerinde abiyotik olarak birikebilir.',
        '<strong>Metan (CH4):</strong> Biyolojik, jeolojik veya çarpışma kaynaklı olabilir. Oksitleyici gazlarla birlikte bulunması daha anlamlıdır.',
        '<strong>Ozon (O3):</strong> Oksijenin fotokimyasal ürünüdür. Bazı aralıklarda tespiti daha kolay olup dolaylı bir ipucu sağlar.',
        '<strong>Su ve CO2 bağlamı:</strong> Su yaşanabilirliği desteklerken, karbondioksit sera durumu, fotokimya ve yanlış pozitif senaryolarının çerçevelenmesine yardımcı olur.',
      ],
    },
    { type: 'title', text: 'Yanlış Pozitifler Neden Önemlidir', level: 3 },
    {
      type: 'paragraph',
      html: 'Yüksek bir oksijen puanı otomatik olarak yaşam anlamına gelmez. Su kaybı oksijen biriktirebilir, yıldız morötesi ışınımı molekülleri parçalayabilir veya volkanik etkiler atmosferi değiştirebilir. Özellikle aktif M cüceleri gibi yıldızlarda parlamalar atmosfer bileşimini yeniden şekillendirebilir. Gürültü, yıldız türü veya bağlam biyolojik açıklamayı zayıflattığında yanlış pozitif göstergesi yükselir.',
    },
    {
      type: 'table',
      headers: ['Sinyal Deseni', 'Yorum', 'Dikkat'],
      rows: [
        ['Yalnızca O2', 'Oksijence zengin atmosfer', 'Su kaybı sonrası abiyotik olabilir'],
        ['Yalnızca CH4', 'İndirgeyici atmosfer veya aktif jeoloji', 'Metan tek başına yaşam kanıtı değildir'],
        ['O2 + CH4', 'Kimyasal dengesizlik', 'Sağlam geriçatma ve kirlilik kontrolleri gerektirir'],
        ['O2 + O3 + su', 'Daha tutarlı Dünya-benzeri bağlam', 'Bulut ve yıldız aktivitesi kritiktir'],
      ],
    },
    { type: 'title', text: 'Biyolojik ve Teknolojik Yaşanabilirlik Göstergeleri', level: 3 },
    {
      type: 'paragraph',
      html: 'Biyolojik gösterge, kimyasal dengesizliğe (O2 + CH4) odaklanır; buna ozon kalkanı ve su bağlamı eklenir. Teknolojik gösterge ise kasıtlı olarak spekülatiftir: atmosferin, yapay kirlilik, kasıtlı müdahaleler veya gözlem yapaylıklarının düşünülmesini gerektirecek kadar olağandışı göründüğü durumları işaret eder.',
    },
    {
      type: 'paragraph',
      html: 'Bu aracı bir kanıt üreticisi olarak değil, bir akıl yürütme yardımcısı olarak kullanın. Gerçek bir biyo-imza analizi; birçok atmosfer modelini karşılaştırmayı, yıldız tayflarını dahil etmeyi ve belirsizlikleri hesaplamayı gerektirir. Simülatörün eğitsel değeri, kanıtları hizalama, bağlamı kontrol etme ve yanlış pozitifleri daima göz önünde bulundurma disiplini kazandırmasıdır.',
    },
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
