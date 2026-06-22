import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'uc-cisim-problemi-simulatoru';
const title = 'Üç Cisim Problemi Simülatörü';
const description = 'Düzenlenebilir kütleler, hız vektörleri, izler ve kararlı veya kaotik ön ayarlarla iki boyutlu bir düzlemde üç kütleçekimsel cismi simüle edin.';

const howTo = [
  {
    name: 'Bir yörünge ön ayarı seçin',
    text: 'Kararlı bir referans için sekiz figürü yörüngesiyle, dönen bir denge için Lagrange üçgeniyle veya görünür şekilde kaotik bir karşılaşma için sapan ön ayarıyla başlayın.',
  },
  {
    name: 'Kütleleri ve hız vektörlerini ayarlayın',
    text: 'Her cisim için kaydırıcıları kullanarak kütleyi ve başlangıç hızı bileşenlerini değiştirin. Küçük değişiklikler bir deseni koruyabilir, deforme edebilir veya tamamen yok edebilir.',
  },
  {
    name: 'Tanıları okuyun',
    text: 'Sayısal yörüngenin bağlı kalıp kalmadığını veya dağılıp dağılmadığını anlamak için toplam enerjiyi, en yakın ve en uzak ayrılmayı ve kütle merkezini izleyin.',
  },
];

const faq = [
  {
    question: 'Üç cisim problemi nedir?',
    answer: 'Üç cisim problemi, her bir cismin diğer ikisini kütleçekimsel olarak çekmesi durumunda üç kütlenin nasıl hareket ettiğini sorgular. İki cisim probleminden farklı olarak, her olası konfigürasyonu çözen genel bir kapalı form denklemi yoktur, bu nedenle pratik vakaların çoğu sayısal entegrasyonla keşfedilir.',
  },
  {
    question: 'Üç cisim yörüngeleri neden kararsızdır?',
    answer: 'Birçok üç cisim sistemi başlangıç koşullarına duyarlıdır. Hız, konum veya kütledeki küçük bir değişiklik yakın karşılaşmaların zamanlamasını değiştirir ve bu karşılaşmalar enerjiyi dramatik bir şekilde değiş tokuş edebilir. Sonuç, bir süre bağlı kalıp ardından aniden bir cismi fırlatabilen bir sistemdir.',
  },
  {
    question: 'Sekiz figürü ön ayarı neyi gösterir?',
    answer: 'Sekiz figürü ön ayarı, üç eşit kütle için ünlü bir periyodik çözümdür. Her cisim aynı yolu bir faz kaymasıyla takip eder ve üç cisim probleminin çok daha büyük bir kaotik manzara içinde zarif kararlı adalar içerebileceğini gösterir.',
  },
  {
    question: 'Bu fiziksel olarak tam doğru bir astronomi simülatörü müdür?',
    answer: 'Bu araç, hareketin öğrenme için sadık ve kararlı hissettirmesi amacıyla yumuşatılmış bir Newton modeli ve semplektik hız Verlet adımı kullanır. Yüksek hassasiyetli gök günlüğü tahmininden ziyade etkileşimli keşif için tasarlanmıştır.',
  },
  {
    question: 'Toplam enerjiyi nasıl yorumlamalıyım?',
    answer: 'Negatif toplam enerji genellikle bağlı bir sistemi gösterirken, sıfıra yakın enerji kaçışı kolaylaştırabilir. Sayısal bir simülasyonda, büyük enerji sapması ayrıca zaman adımının veya karşılaşma geometrisinin entegratörü zorladığı konusunda uyarır.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Kütleçekimsel kaos laboratuvarı',
    canvasLabel: 'Etkileşimli iki boyutlu üç cisim yörünge tuvali',
    presetsLabel: 'Yörünge ön ayarları',
    figureEightPreset: 'Sekiz figürü',
    lagrangePreset: 'Lagrange üçgeni',
    slingshotPreset: 'Sapan',
    pauseButton: 'Duraklat',
    playButton: 'Oynat',
    resetButton: 'Sıfırla',
    speedLabel: 'Simülasyon hızı',
    trailLabel: 'İz uzunluğu',
    massLabel: 'Kütle',
    velocityXLabel: 'Hız X',
    velocityYLabel: 'Hız Y',
    energyLabel: 'Toplam enerji',
    separationLabel: 'Ayrılma aralığı',
    centerMassLabel: 'Kütle merkezi',
  },
  seo: [
    {
      type: 'title',
      text: 'Yörüngesel Kaos için Etkileşimli Üç Cisim Problemi Simülatörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Üç cisim problemi, basit yasaların karmaşık hareket üretebileceğinin en açık göstergelerinden biridir. Newton kütleçekimi kompakt bir kuvvet kuralı verir, ancak üçüncü bir kütleli cisim sisteme katıldığı anda her yörünge sürekli olarak diğer ikisini yeniden şekillendirir. Bu simülatör, bu kararsızlıkla doğrudan deney yapmanızı sağlar: bilinen bir konfigürasyon seçin, kütleleri ve hız vektörlerini ayarlayın ve cisimlerin tekrarlayan bir yörünge, dönen bir üçgen veya kaotik bir saçılma olayı oluşturup oluşturmadığını izleyin.',
    },
    {
      type: 'title',
      text: 'Ön Ayarların Gösterdikleri',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ön Ayar', 'Fiziksel fikir', 'Nelere dikkat edilmeli'],
      rows: [
        ['<strong>Sekiz figürü</strong>', 'Her üç cismin aynı döngüyü paylaştığı eşit kütleli periyodik bir çözüm.', 'Yörünge yalnızca simetri ve hız dengesi dikkatlice korunduğunda organize kalır.'],
        ['<strong>Lagrange üçgeni</strong>', 'Üç cisim, kütle merkezi etrafında dönen bir eşkenar üçgen işgal eder.', 'Kütle dengesi ve teğetsel hız, üçgenin içe çökmesini engeller.'],
        ['<strong>Sapan</strong>', 'Yakın bir karşılaşma cisimler arasında enerji transfer eder.', 'Bir cisim hız kazanırken diğeri daha sıkı bağlı hale gelir ve kaotik fırlatmaların neden oluştuğunu ortaya çıkarır.'],
      ],
    },
    {
      type: 'title',
      text: 'Küçük Değişiklikler Neden Önemlidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İki cisim yörüngesinde, kütle merkezi ve yörünge elipsi istikrarlı bir geometrik resim sağlar. Üç cisim sisteminde, yakın geçişler kütleçekimsel müzakereler gibi davranır: bir cisim yörüngesel enerji ödünç alabilir, keskin bir şekilde yön değiştirebilir veya düzenli bir döngüyü saçılma olayına dönüştürebilir. Bu hassasiyet, üçlü yıldızlar, gezegen-ay karşılaşmaları ve erken güneş sistemi gezegenimsileri gibi gerçek astrofiziksel sistemlerin tek bir basit formül yerine genellikle sayısal entegrasyon gerektirmesinin nedenidir.',
    },
    {
      type: 'title',
      text: 'Tanılar Nasıl Kullanılır',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Toplam enerji</strong>, sistemin bağlı olup olmadığını ve sayısal entegrasyonun kararlı kalıp kalmadığını değerlendirmenize yardımcı olur.',
        '<strong>Ayrılma aralığı</strong>, en yakın ve en uzak çift mesafelerini göstererek neredeyse çarpışmaları ve fırlatmaları kolayca tespit etmenizi sağlar.',
        '<strong>Kütle merkezi</strong>, başlangıç momentumu dengeli olduğunda nispeten sabit kalmalıdır; sapma, kasıtlı olarak asimetrik bir kurulum veya değiştirilmiş bir hız vektörü olduğunu gösterir.',
        '<strong>İz uzunluğu</strong>, uzun vadeli yapıyı ortaya çıkarır: kısa izler mevcut etkileşimi vurgularken, uzun izler tekrarlayan döngüleri ve yavaş yörüngesel devinimi sergiler.',
      ],
    },
    {
      type: 'title',
      text: 'Araçta Kullanılan Sayısal Model',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simülatör, aşırı yakın geçişler sırasında görsel patlamaları önleyen küçük bir yumuşatma terimi ile Newton ters-kare çekimini kullanır. Hareket, basit bir Euler güncellemesinden daha iyi enerji davranışı sağladığı için yörünge gösterimlerinde yaygın bir seçim olan hız Verlet adımıyla ilerletilir. Sonuç, profesyonel gök mekaniği yazılımının yerini almaya çalışmadan üç cisim probleminin niteliksel davranışını görünür kılan duyarlı bir eğitim modelidir.',
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
