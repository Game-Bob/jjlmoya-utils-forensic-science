const description = 'Doğumdan bu yana vücudunuzun yüzde kaçının yenilendiğini hesaplayın. Organ, kemik ve dokuların hücre bölünme hızına dayalı tahminler. Theseus\'un Gemisi paradoksunu somutlaştırın.';
const slug = 'hucresel-yenilenme-hesaplayici';
const title = 'Hücresel Yenilenme Hesaplayıcı: Orijinal "Sen"den Geriye Ne Kaldı?';
const howTo = [
    {
      name: 'Yaşınızı ayarlayın',
      text: 'Seçiciyi 1 ile 105 yaş arasında kaydırın. Bu, yenilenme hesaplamaları için en önemli değişkendir.',
    },
    {
      name: 'Ana yüzdeyi gözlemleyin',
      text: 'Merkezdeki büyük sayı, mevcut maddenizin yüzde kaçının "yeni" (doğumdan bu yana yenilenmiş) olduğunu gösterir.',
    },
    {
      name: 'İlerleme çubuklarını analiz edin',
      text: 'Her bir çubuk farklı bir dokuyu temsil eder: deri/kan, kemik, organlar ve beyin. Deri sürekli yenilenirken beynin neredeyse hiç değişmediğine dikkat edin.',
    },
    {
      name: 'Kimliğiniz üzerine düşünün',
      text: 'Eğer sizin %99\'unuz yeni maddeyse, gerçekte kimsiniz? Bu aracı, kişisel süreklilik ve Theseus\'un Gemisi paradoksu üzerine düşünmek için bir başlangıç noktası olarak kullanın.',
    },
  ];
const faq = [
    {
      question: 'Tam olarak "hücresel yenilenme" nedir?',
      answer: 'Yaşlanmış veya hasar görmüş hücrelerin öldüğü (apoptoz) ve yerine mitoz bölünme ile üretilen yeni hücrelerin geçtiği doğal süreçtir. Bu döngü, dokuların işlevsel kalması ve hasarların onarılması için temeldir.',
    },
    {
      question: 'Beyin neden bu kadar yavaş yenilenir?',
      answer: 'Serebral korteksteki nöronlar doğumdan önce üretilir ve genellikle tekrar bölünmezler. Bu, nörolojik istikrar sağlar: temel "kablolamanız" sabit kalır. Ancak glial (destek) hücreleri yenilenir. Hafıza atomlarda değil, bağlantılarda saklanır.',
    },
    {
      question: 'Her 7 yılda bir "yeni insanlar" olduğumuz doğru mu?',
      answer: 'Bu bir basitleştirmedir ve doğru değildir. Kanınız 4 ayda, deriniz bir ayda, iskeletiniz 10 yılda yenilenir. Beyniniz büyük ölçüde değişmeden kalır. 7 yıl sayısı tarihseldir (Aristo bahsetmiştir) ancak biyolojik olarak kesin olmayan bir ortalamadır.',
    },
    {
      question: 'Vücudum %99 yeniyse, hala aynı kişi miyim?',
      answer: 'Evet. Kimlik atomların değil; bilginin, bilincin ve hafızanın sürekliliğidir. Bir nehir gibisiniz: Su sürekli değişir ama nehir kalır. Theseus\'un Gemisi paradoksu, kimliğin maddede değil, örüntüde olduğunu öne sürer.',
    },
    {
      question: 'Hangi dokular en hızlı yenilenir?',
      answer: 'Kan ve deri başı çeker. Kemik iliğiniz her gün 200 milyar kan hücresi üretir. Dakikada yaklaşık 30.000 deri hücresi kaybedersiniz. Bu yüzden çok iyi iyileşirler ve çok belirgin şekilde yaşlanırlar: hücresel yaş açısından gençtirler.',
    },
    {
      question: 'Göz merceği gerçekten yenilenmiyor mu?',
      answer: 'Doğru. Mercek hücreleri embriyonik gelişim sırasında yerleşir ve ömür boyu korunur. 100 yaşında, merceğinizin merkezi hücreleri anne karnındakiyle aynı olabilir. Bu biyolojik bir zaman kapsülüdür.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopyalandı',
    noHistory: 'Geçmiş yok',
    load: 'Yükle',
    delete: 'Sil',
    biologicalTimeline: 'Biyolojik Zaman Çizelgesi',
    ageUnit: 'evrim yılı',
    matterNewPercent: 'Maddeniz şu oranda yenidir:',
    atomicRenewal: 'Atomik Yenilenme',
    skinAndBlood: 'Deri ve Kan',
    boneRemodeling: 'Kemik Yeniden Yapılanması',
    organicMatrix: 'Organik Matris',
    perennialCells: 'Kalıcı Hücreler',
    disclaimerText: 'Hesaplamalar, izotop çalışmalarına göre ortalama hücresel ömre dayanmaktadır. Kan ve deri haftalar içinde yenilenirken, göz merceği proteinleri ve beyin korteksinizin büyük bir kısmı embriyonik gelişimden itibaren aynı kalır. Fiziksel olarak, sürekli akış halindeki dinamik bir yapıdasınız.',
  },
  seo: [
    {
      type: 'title',
      text: 'Ne kadarınız gerçekten "sizin"? Hücresel yenilenme bilimi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vücudunuz sürekli hareket halindeki bir nehir gibidir. Her saniye milyonlarca hücre ölür ve yerini yenileri alır. Yedi yıl içinde, vücudunuzdaki hemen hemen her atom değiştirilmiş olacaktır. Ancak bu istatistik derin bir yanılgıdır çünkü organizmanızın farklı bölümleri radikal derecede farklı hızlarda yenilenir.',
    },
    {
      type: 'paragraph',
      html: '<strong>Theseus\'un Gemisi Paradoksu</strong> olarak bilinen bu paradoks eski bir soruyu gündeme getirir: Bir şeyin tüm parçalarını değiştirirseniz, o hala aynı şey midir? Sizin durumunuzda bu gerçek bir sorudur. Bugün vücudunuzu oluşturan atomlar 10 yıl öncekilerle aynı değil ama <em>siz</em> hala sizsiniz.',
    },
    {
      type: 'title',
      text: 'Hücresel Döngü: Dinamik Vücudunuzun Bir Haritası',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yenilenme hızı dokuya göre çarpıcı biçimde değişir:',
    },
    {
      type: 'table',
      headers: ['Doku', 'Hücre Ortalama Ömrü', 'Tam Yenilenme', 'Açıklama'],
      rows: [
        ['<strong>Kan</strong>', '120 gün', '4 ay', 'Alyuvarlar en hızlılarıdır. Kemik iliğiniz her gün 200 milyar alyuvar üretir.'],
        ['<strong>Deri</strong>', '2-4 hafta', '1 ay', 'Son derece hızlı yenilenme. Dakikada yaklaşık 30.000 deri hücresi kaybedersiniz.'],
        ['<strong>Kemik</strong>', '10 yıl', 'On yıl', 'İskelet daha korumacıdır. Yine de 10 yıl sonra pratik olarak tüm iskeletinizi değiştirmiş olursunuz.'],
        ['<strong>Organlar</strong>', '15 yıl', '1,5 on yıl', 'Karaciğer aylar içinde yenilenir. Kalp ise yıllar içinde. Ritimlerin mozaiği.'],
        ['<strong>Beyin</strong>', '80+ yıl (nöronlar)', 'Neredeyse hiç', 'Doğumdaki kortikal nöronlarınız aynı kalır. Ancak glia (destek hücreleri) yenilenir.'],
      ],
    },
    {
      type: 'title',
      text: 'Göz Merceği: Sizin En Eski Parçanız',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vücudunuzda özel bir yapı vardır: <strong>göz merceği</strong>. Merceği oluşturan hücreler fetal gelişim sırasında yerleşir ve asla değiştirilmez. 100 yaşına kadar yaşasanız bile, merceğinizin merkezi hücreleri hala anne karnındakilerle aynı olacaktır. Onlar, tam anlamıyla sizin en eski parçanızdır.',
    },
    {
      type: 'title',
      text: 'Toplam Yenilenme Hesabı: Ağırlıkların Paradoksu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu hesaplayıcı, farklı dokuların ağırlıklı ortalamasını kullanır:',
    },
    {
      type: 'list',
      items: [
        '<strong>%30 deri ve kan:</strong> Genç yaşlarda neredeyse tam yenilenme.',
        '<strong>%35 iskelet:</strong> Kademeli yenilenme, 10 yılda %100\'e ulaşır.',
        '<strong>%25 organlar:</strong> Daha yavaş yenilenme, organa göre değişken.',
        '<strong>%10 beyin:</strong> Nöronlarda minimum değişim, destek yapılarında maksimum değişim.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Sonuç olarak 25 yaşında, mevcut maddenizin yaklaşık <strong>%93\'ü yenidir</strong>. 80 yaşına geldiğinizde, doğumda sahip olduğunuzdan %99\'dan daha fazla farklı atomdan oluşuyor olabilirsiniz.',
    },
    {
      type: 'title',
      text: 'Felsefi Çıkarımlar: Kimlik Madde Değil, Bilgidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vücudunuz her on yılda bir tamamen yenileniyorsa, neden hala "siz"siniz? Cevap, kimliğin belirli atomlarda değil, o atomların tuttuğu <strong>bilgi örüntüsünde</strong> yatmasıdır. Siz bir şarkı gibisiniz: titreyen hava aynı hava değildir ama örüntü devam eder.',
    },
    {
      type: 'paragraph',
      html: 'Bunun derin çıkarımları vardır: Vücudunuz bir şey değil, bir süreçtir. Siz, değişim boyunca devam eden, kendi kendini düzenleyen bir örüntüsünüz. Atomlara sahip değilsiniz; onları geçici olarak yönlendiren bir yapısınız.',
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

