import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'salgin-sir-simulatoru';
const title = 'Salgin SIR Simulatoru';
const description = 'Bir patojenin yayılimini, R0 degerini, ölüm oranini, asilama sürecini, bulaşıcı dönemi, zirve yukunu ve bulaş eğrilerini gerçek zamanli olarak ayarlayabilen etkilesimli bir SIR modeli ile keşfedin.';

const howTo = [
  {
    name: 'Üreme sayisini ayarlayin',
    text: 'R0 kaydiriçisini hareket ettirerek, bulaşıcı bir kişinin tamamen duyarıli bir populasyonda kac ikincil enfeksiyona yol acacagini belirleyin.',
  },
  {
    name: 'Asilama ve asi etkinligi ekleyin',
    text: 'Asilama kapsamini veya asi etkinligini artirarak korunan kişileri duyarıli gruptan çikarin ve efektif üreme sayisini düsürun.',
  },
  {
    name: 'Ölüm oranini ve bulaşıcı süreyi ayarlayin',
    text: 'Ölüm yüzdesini ve bulaşıcı gun sayisini degistirerek şiddetli sonuçlarin ve eğri zamanlamasinin nasil degistigini gorun.',
  },
  {
    name: 'SIR eğrilerini okuyun',
    text: 'Grafik ve gun inceleme araciyla simulasyon boyunca duyarıli, enfekte, iyileşmis ve tahmini ölüm eğrilerini karşilaştirin.',
  },
];

const faq = [
  {
    question: 'Bir SIR modeli ne gösterir?',
    answer: 'Bir SIR modeli, bir populasyonu duyarıli, enfekte ve iyileşmis olmak üzere uc gruba ayirir. Bulaş ve iyileşme gerçeklestikce kişilerin zaman içinde bu gruplar arasinda nasil hareket ettigini tahmin eder.',
  },
  {
    question: 'Asilama eğriyi nasil degistirir?',
    answer: 'Asilama, enfeksiyonu önlediginde duyarıli populasyonu azaltir. Bu simulatorde, etkili asilama efektif üreme sayisini düsürür ve enfeksiyon zirvesini kücültebilir ya da geçiktirebilir.',
  },
  {
    question: 'R0 ile Re ayı sey mi?',
    answer: 'Hayir. R0, tamamen duyarıli bir populasyondaki yayılimi tanimlar. Re ise bagisiklik, asilama veya davranis degisiklikleri nedeniyle enfekte olabilecek kişi sayisi azaldiktan sonraki efektif üreme sayisidir.',
  },
  {
    question: 'Enfekte eğrisi neden zirve yaıpip sonra düser?',
    answer: 'Enfekte eğrisi, her bulaşıcı kişinin, iyileşme veya ölüm yoluyla enfekte gruptan ayrilan kişi sayisindan daha az yeni enfeksiyon uretmesiyle düser. Duyarıliligin tükenmesi, temel bir SIR modelindeki ana etkendir.',
  },
  {
    question: 'Bu arac gerçek bir salgini tahmin edebilir mi?',
    answer: 'Bu bir öğretim ve senaryo aracidir, bir tahmin araci degildir. Gerçek salginlar için yas yaıpisi, temas aglari, cografya, raporlama gecikmeleri, degisen davranislar, varyantlar, azalan bagisiklik ve kalibre edilmis veriler gerekir.',
  },
  {
    question: 'Atak hızi ile zirve enfekte arasindaki fark nedir?',
    answer: 'Atak hızi, salgin sonunda enfekte olan toplam populasyon oranini olcer. Zirve enfekte ise ayı anda enfekte olan maksimum kişi sayisini olcer. Düsük bir zirve, düsük bir atak hızi garantilemez ve bunun tersi de gecerlidir.',
  },
  {
    question: 'Re degerinin 1 altina dusmesi goşsel olarak ne anlama gelir?',
    answer: 'Re 1 altina düstügünde, her bulaşıcı kişi ortalama olarak birden az yeni enfeksiyon uretir. Grafikte enfekte eğrisi hic dik bir şekilde yüksekmez ve başlangiç tohumundan itibaren hemen düsebilir; bu, salginin kendini surdüremedigi anlamina gelir.',
  },
  {
    question: 'Bulaşiçi dönem salgini nasil etkiler?',
    answer: 'Daha uzun bir bulaşıcı dönem, her enfekte kişinin patojeni bulaştirabilecegi süreyi uzatir. Bu, salgin zaman çerçevesini gerdirir, zirveyi geçiktirir ve ayı R0 için daha düsük bir zirve yüksekligiyle daha genis bir eğri uretebilir.',
  },
  {
    question: 'Ölüm orani neden enfekte eğrilerini degistirmez?',
    answer: 'Bu SIR modelinde ölüm orani yalnizca iyileşmis grubundan ayrilan ölüm sayisini etkiler. Ölümler ve iyileşmelerin her ikişi de kişileri ayı hızla bulaşıcı havuzdan çikardigi için bulaş zincirine geri besleme yapmaz.',
  },
  {
    question: 'Şuru bagisikligi esigi nedir?',
    answer: 'Şuru bagisikligi esigi, Re degerinin 1 altina dusmesi için bagisik olmasi gereken populasyon oranidir. 1 - 1/R0 olarak yaklasiklandirilir. R0 degeri yaklasik 12 olan kızamik için esik %91in uzerindedir. R0 degeri yaklasik 1,3 olan mevsimsel grip için esik %23 civarindadir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Canli salgin senaryosu',
    curveChart: 'SIR bulaş eğrileri',
    inspectDay: 'Simulasyon gununu incele',
    legend: 'Egri açiklamalari',
    susceptible: 'Duyarıli',
    infected: 'Enfekte',
    recovered: 'Iyilesmis veya bagisik',
    deaths: 'Ölümler',
    controls: 'Salgin kontrolleri',
    modelName: 'Kompartiman modeli',
    peakInfected: 'Zirve enfekte',
    peakDay: 'Zirve gunu',
    attackRate: 'Atak hızi',
    estimatedDeaths: 'Tahmini ölümler',
    r0: 'Temel üreme sayisi R0',
    lethality: 'Ölüm orani',
    vaccination: 'Asilama kapsami',
    vaccineEffectiveness: 'Asi etkinligi',
    infectiousDays: 'Bulaşiçi dönem',
    initialInfected: 'Baslangic enfekte',
    dayLabel: 'Gun',
    daysUnit: 'gun',
    infectiousLabel: 'bulaşıcı',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'R0, asilama, ölüm orani ve bulaş eğrileri için salgin SIR simulatoru',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu salgin SIR simulatoru, duyarıli kişilerin enfekte olmasi ve ardindan iyileşme veya ölüm yoluyla bulaşıcı gruptan ayrilmasiyla bir patojenin populasyon içinde nasil yayildigini keşfetmenizi sağlar. Ögrenciler, bilim iletişimcileri, halk sağligi öğrencileri ve bulaş veya bagisikliktaki kücük degisikliklerin bir salgini nasil şekillendirebilecegine dair hızli bir goşsel açiklama isteyen herkes için tasarlanmistir.',
    },
    {
      type: 'paragraph',
      html: 'Etkilesimli kontroller, insanlarin en sik test etmek istedigi degiskenlere odaklanir: <strong>R0</strong>, ölüm orani, asilama kapsami, asi etkinligi, bulaşıcı süre ve başlangiç enfekte orani. Grafik aninda güncellenir, boylece duyarıli, enfekte, iyileşmis, bagisik ve ölüm eğrileri tek bir baglantili salgin sistemi olarak karşilaştirilabilir.',
    },
    {
      type: 'title',
      text: 'SIR modeli nasil çalişir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temel bir SIR modeli, populasyonu uc ana kompartimana ayirir. <strong>S</strong>, hala enfekte olabilecek duyarıli kişilerdir. <strong>I</strong>, patojeni bulaştirabilen su anki bulaşıcı kişilerdir. <strong>R</strong>, iyileşerek, bagisiklik kazanarak veya baska bir şekilde bulaş zincirinden cikarak artik bulaşıcı olmayan kişilerdir. Bu simulator ayrica, enfeksiyondan ayrilan gruptan şiddetli sonuç dali olarak tahmini ölümleri de izler.',
    },
    {
      type: 'paragraph',
      html: 'Bulaş hızi, R0 ve bulaşıcı dönem ile baglantilidir. R0 yüksekse veya kişiler daha uzun süre bulaşıcı kalırsa, enfekte grup kücülmeden önce daha fazla yeni enfeksiyon olusur. Asilama, duyarıli havuzdan yeterli sayida kişi çikarirsa, efektif üreme sayisi düser ve salgin zirvesi cok daha kücük hale gelebilir.',
    },
    {
      type: 'table',
      headers: ['Kontrol', 'Neyi degistirir', 'Tipik eğri etkişi'],
      rows: [
        ['R0', 'Bagisiklik hesaba katilmadan önce bulaş potansiyeli', 'Daha yüksek R0, enfekte eğrinin daha hızli yüksekmesine ve daha yüksek zirve yapmasina neden olur.'],
        ['Asilama kapsami', 'Korundugunda duyarıli havuzdan çikarilan kişi orani', 'Daha yüksek kapsam Re degerini düsürür ve salgini düzleştirebilir.'],
        ['Asi etkinligi', 'Bu basit modelde asilamanin enfeksiyonu ne kadar önledigi', 'Daha yüksek etkinlik, ayı kapsami daha koruyucu hale getirir.'],
        ['Bulaşiçi dönem', 'Kisilerin ortalama bulaşıcı kalma süresi', 'Daha uzun enfeksiyon zamanlamayi degistirir ve salgini uzatabilir.'],
        ['Ölüm orani', 'Enfeksiyondan ayrilan ve ölüm olarak sayilan kişi orani', 'Daha yüksek ölüm orani, bulaşi doğrudan artirmadan ölüm eğrilerini yüksektir.'],
      ],
    },
    {
      type: 'title',
      text: 'R0, Re ve sürü bagisikligi sezgisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0, tamamen duyarıli bir populasyonda bir bulaşıcı kişinin neden oldugu ortalama ikincil vaka sayisidir. Efektif üreme sayisi olan Re, bazi kişiler zaten bagisik, asili, izole veya enfeksiyon için uygun degilse daha düsüktur. Bu simulatorde, etkili asilama doğrudan duyarıliligi azaltir, boylece görüntülenen Re, korunan kapsam arttikca düser.',
    },
    {
      type: 'paragraph',
      html: 'Yaygin bir sürü bagisikligi yaklasimi <strong>1 - 1 / R0</strong> seklindedir. R0 degeri 3 için esik yaklasik %66,7 etkili bagisikliktir. Simulator bu esigi somut hale getirmeye yardimci olur: etkili asilama esigin altindayken salginlar hala büyüyebilir; esigin uzerindeyken bulaş kendini sürdürmekte zorlanir.',
    },
    {
      type: 'title',
      text: 'Zirve enfekte sayisi ne anlama gelir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zirve enfekte, simule edilen populasyonda ayı anda bulaşıcı olan maksimum kişi sayisidir. Toplam enfeksiyon sayisindan daha fazla operasyonel öneme sahiptir; çunku hastaneler, laboratuvarlar, izolasyon programlari ve temasli takip ekipleri eszamanli aktif vakalardan kaynakli başkı hisseder. Zirveyi düsürmek, nihai atak hızi sıfira indirilmese bile önemli olabilir.',
    },
    {
      type: 'paragraph',
      html: 'Atak hızi, çalişma sonunda toplam populasyonun enfekte olan oranini tahmin eder. Yüksek bir atak hızi, patojenin duyarılilik tükenmeden veya kontrol altina alinmadan önce birçok kişiye ulastigi anlamina gelir. Düsük bir atak hızi, bagisikligin, asilamanin veya zayif bulaşin genis yayılimi engelledigi anlamina gelir.',
    },
    {
      type: 'title',
      text: 'Gerçek dunya R0 degerleri ve sürü bagisikligi için anlamlari',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temel üreme sayisi R0, bir patojen için sabit bir biyolojik sabit degildir. Temas kaliplarina, nüfus yoğunluguna, kültürel aliskanliklara ve çevresel faktörlere baglidir. Ayı virüs, yoğun bir sehirde kirsal bir bölgeye veya daha fazla içi kalisin oldugu bir mevsime gore farkli R0 degerlerine sahip olabilir. Asagidaki degerler, yayinlanmis çalişmalardan alinmis gösteriçi referans araliklaridir.',
    },
    {
      type: 'table',
      headers: ['Patojen', 'Tipik R0 araligi', 'Şuru bagisikligi esigi (1 - 1/R0)', 'Temel bulaş ozelligi'],
      rows: [
        ['Mevsimsel grip', '1,2 - 1,4', '%17 - %29', 'Kısa bulaşıcı dönem, mevsimsel degisim'],
        ['SARS-CoV-2 (atasal)', '2,0 - 3,0', '%50 - %67', 'Presemptomatik bulaş, aerosol yollari'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '%80 - %87', 'Artmis viral yuk, daha hızli yayılim'],
        ['SARS-CoV-2 (Omicron)', '8,0 - 12,0', '%87 - %92', 'Bagisikliktan kacis, ust solunum yolu tropizmi'],
        ['Çocuk felci', '5,0 - 7,0', '%80 - %86', 'Fekal-oral yol, uzun asemptomatik sacilim'],
        ['Cicek hastaligi', '5,0 - 7,0', '%80 - %86', 'Kuresel asilama kampanyasiyla yok edilmistir'],
        ['Kİzamik', '12,0 - 18,0', '%92 - %94', 'Son derece bulaşıcı, havadan, uzun bulaşıcı dönem'],
        ['Boğmaca', '12,0 - 17,0', '%92 - %94', 'Azalan bagisiklik tekrarlayan enfeksiyonlara izin verir'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Yüksek bir sürü bagisikligi esigi, kapsam esigin altindayken asilamanin faydasiz oldugu anlamina gelmez. Kismi bagisiklik bile bulaşi yaıvaslatir, zirveyi düsürür, şiddetli sonuçlari azaltir ve sağlik sistemleri için zaman kazandirir. Simulator bu etkiyi, asilama kaydiriçisini ara degerlerden geçirirken göstermektedir.',
    },
    {
      type: 'title',
      text: 'Efektif üreme sayisi Re bir salgin sirasinda nasil degisir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re, salginin belirli bir noktasindaki efektif üreme sayisidir. Tamamen duyarıli bir populasyon varsayan R0un aksine, Re bagisikligi, asilamayi ve duyarıliligi azaltan diğer faktörleri hesaba katar. Bu simulatorde Re, <strong>R0 x (1 - korunan oran)</strong> olarak hesaplanir; burada korunan oran, asilama yoluyla etkili şekilde bagisik olan populasyonun payidir.',
    },
    {
      type: 'paragraph',
      html: 'Simulator basliginda görüntülenen Re degeri, kontrolleri hareket ettirdikce güncellenir. Re 1in uzerinde kaldiginda salgin büyür. Re 1in altina düstügünde, her enfekte kişi ortalama olarak birden az yeni enfeksiyon uretir ve salgin kendini surdüremez. Salgin kontrolunun temel icgorusu budur: Re degerini bagisiklik, davranis veya müdahalelerle 1in altinda tutmak.',
    },
    {
      type: 'title',
      text: 'Atak hızi, zirve yuku ve salgin şiddeti hakkinda neyi ortaya koyarlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Atak hızi, simule edilen salgin boyunca toplam populasyonun enfekte olan kismidir. Bir salgin dalgasindan sonra en sik kullanilan özet olcudur. Yüksek bir atak hızi, patojenin tükenme veya kontrol durmadan önce duyarıli kişilerin cogunu enfekte ettigi anlamina gelir. Düsük bir atak hızi, bagisiklik, asilama veya doğal olarak zayif bulaşin yaygın enfeksiyonu engelledigi anlamina gelir.',
    },
    {
      type: 'paragraph',
      html: 'Zirve enfekte - ayı anda bulaşıcı olan maksimum kişi sayisi - kısa vadeli sağlik sistemi başkinasi için daha önemlidir. Ilimli bir atak hızina ancak cok yüksek, keskin bir zirveye sahip bir dalga, toplam vakalar asiri olmasa bile hastaneleri bunalta bilir. Tersine, yaıvas ve düzleşmis bir eğri, haftalara yayilmis benzer bir atak hızina sahip olabilir ve sağlik sistemine vakalari yönetmesi için zaman tanir. Bu nedenle halk sağligi yetkilileri, tüm enfeksiyonlari önlemekten farkli bir operasyonel hedef olarak <strong>eğriyi düzleştirmeyi</strong> vurgular.',
    },
    {
      type: 'title',
      text: 'SIR modelinde eğriyi düzleştirme ve sağlik sistemi kapasitesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir SIR modelindeki enfekte eğrisi, ayı anda bakima ihtiyac duyan kişi sayisi olarak yorumlanabilir. Gerçek bir salginda, hastane yatagina, oksijen destegine veya yoğun bakima ihtiyac duyan her kişi sinirli kaynaklardan yararlanir. Enfekte eğrisi mevcut kapasitenin uzerine çiktiginda, sistem yeterli bakim sağlayamadigi için tüm nedenlere bagli ölüm orani artar.',
    },
    {
      type: 'paragraph',
      html: 'Bu modelde asilama, kişileri enfekte olmadan önce duyarıli havuzdan çikararak eğriyi düzleştirir. Maskeler, havalandirma, mesafe, test ve izolasyon gibi diğer önlemlerle R0yi düsürmek, daha kapsamli bir modelde zirveyi de düsürür. Simulasyon mekanizmayi gorunur kilar: etkili asilama kapsami arttikca zirve kücülur, geçikir veya tamamen kaybolur.',
    },
    {
      type: 'title',
      text: 'SIR modelinin arkasindaki matematik görüntüleniyor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'SIR modelinde, zaman adimi başina yeni enfeksiyon orani uc nicelige baglidir: bulaş hızi <strong>beta</strong>, su anki bulaşıcı kişi sayisi <strong>I</strong> ve hala duyarıli olan efektif populasyon orani <strong>S/N</strong>. <strong>beta x I x S / N</strong> carpimi enfeksiyon gücu olarak adlandirilir. Her gun, bu güc kac duyarıli kişinin enfekte kompartimanina gectigini belirler.',
    },
    {
      type: 'paragraph',
      html: 'Kisiler, enfekte kompartimanindan iyileşme hızi olan <strong>gamma = 1 / bulaşıcı dönem</strong> ile ayrilir. Enfeksiyon gücu ile iyileşme hızi arasindaki denge, salginin büyüyüp kücülecegini belirler. beta x S / N, gammayi geçtiginde yeni enfeksiyonlar iyileşmeleri geride birakir ve salgin yayilir. Duyarıli oran S/N yeterince düstügünde gamma başkin hale gelir ve salgin daralir.',
    },
    {
      type: 'paragraph',
      html: '<strong>Beta</strong> parametresi arayüzde doğrudan gorunmez. Bunun yerine, R0 ve bulaşıcı dönemden <strong>beta = R0 x gamma</strong> iliskişiyle turetilir. Bu nedenle R0 veya bulaşıcı dönemi degistirmek benzer ancak ayı olmayan eğri şekilleri uretir. Her iki parametre de enfeksiyon gücunu etkiler, ancak bulaşıcı dönem ayrica salginin zaman eksenini gerer.',
    },
    {
      type: 'title',
      text: 'Bu simulatoru öğrenme ve ogretme için nasil kullanabilirsiniz',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Yüksek ve düsük R0 senaryolarini karşilaştirin:</strong> R0yi 1,5e (mevsimsel grip araligi) ve ardindan 6,0a (asi öncesi çocuk felci araligi) ayarlayin. Diğer tüm kontroller ayı olsa bile zirve yüksekligi, zirve zamanlamasi ve atak hızinin nasil degistigine dikkat edin.',
        '<strong>Şuru bagisikligi esigini keşfedin:</strong> R0yi 3,0a ve asilamayi sıfira ayarlayarak baslayin. Atak hızini not edin. Ardindan Re 1in altina düsene kadar asilama kapsamini artirin. Esigin hemen altindaki ve ustundeki kapsamda zirve ve atak hızini karşilaştirin.',
        '<strong>Yavaş ve hızli müdahale etkişini test edin:</strong> asilama kapsamini farkli seviyelere ayarlayin ve zirvenin ne zaman gerçeklestigini gozlemleyin. Daha yüksek kapsam yalnizca zirve yüksekligini azaltmakla kalmaz, ayı zamanda genellikle zirveyi geçiktirerek sağlik hazirligi için zaman kazandirir.',
        '<strong>Ölüm oranini bulaştan ayirin:</strong> ölüm oranini %0 yaıpin ve enfekte eğrilerini gozlemleyin. Ardindan diğer ayarlari degistirmeden ölüm oranini %10 yaıpin. Enfekte eğrisi degismez, ancak ölüm sayisi artar. Bu, vaka ölüm orani ile bulaş hızinin farkli epidemiyolojik boyutlar oldugunu gösterir.',
        '<strong>Bulaşiçi dönem etkişini inceleyin:</strong> ayı R0 için 4 gunluk bulaşıcı dönemi 18 gunluk dönemle karşilaştirin. Daha uzun dönem eğriyi gerer, zirveyi geçiktirir ve daha uzun ancak daha düsük bir dalga uretir.',
        '<strong>Sinif içi egzersiz - esigi bulun:</strong> öğrencilerden belirli bir R0 için Re degerini 1in altina getiren minimum asilama kapsamini bulmalarini ve ardindan sonuçu 1 - 1/R0 formuluyle karşilaştirmalarini isteyin.',
      ],
    },
    {
      type: 'title',
      text: 'Bu simulator ne zaman ve neden kullanilir',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Epidemiyoloji öğrencileri:</strong> diferansiyel denklemlerle çalişmadan veya kendi modellerini programlamadan önce matematiksel SIR çerçevesini etkilesimli eğri şekillerine baglayin.',
        '<strong>Bilim iletişimcileri ve gazeteciler:</strong> R0, asilama ve bulaşıcı dönemin salgin yörungeleri için neden önemli oldugunu gösteren grafikler, ekran göruntuleri veya canli açiklamalar olusturun.',
        '<strong>Halk sağligi öğrencileri:</strong> farkli müdahale kombinasyonlarinin salgin zirvesini ve atak hızini nasil degistirdigini test ederek salgin yanitinda odunlesmeler hakkinda sezgi gelistirin.',
        '<strong>Salgin matematigini merak eden herkes:</strong> kod yazmaya veya yazilim kurmaya gerek kalmadan SIR modelini keşfedin. Her kontrol grafigi aninda günceller.',
      ],
    },
    {
      type: 'title',
      text: 'Model uzantilari: SEIR, SIRS ve otesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu simulator temel bir SIR yaıpisi kullanir. Birçok yaygın uzanti daha fazla gerçekcilik ekler. <strong>SEIR modeli</strong>, kuluclenme dönemini temsil eden, enfekte olmus ancak henuz bulaşıcı olmayan kişiler için bir maruz (E) kompartimani ekler. Maruz kalan grup, enfeksiyonlar bulaşa katkida bulunmadan önce latent fazda zaman gecirdigi için SIR modeline kiyasla salgin zirvesini geçiktirir.',
    },
    {
      type: 'paragraph',
      html: '<strong>SIRS modeli</strong>, iyileşmis bireylerin zaman içinde bagisikligini kaybederek duyarıli kompartimanina geri donmesine izin verir. Bu, boğmaca veya SARS-CoV-2 gibi azalan bagisikliga sahip patojenleri modeller ve sürekli veya tekrarlayan salgin dalgalari uretir. <strong>Yas yaıpili model</strong>, populasyonu farkli temas matrisleri ve şiddet profillerine sahip yas gruplarina ayirir; bu, çocuklar ve yaslilarin cok farkli sonuçlara sahip oldugu hastaliklar için gereklidir.',
    },
    {
      type: 'paragraph',
      html: 'Diğer uzantilar coğrafi yayılim (metapopulasyon modelleri), davranis degisikligi (uyarlanabilir temas oranlari), stokastik gurultu (rastgele yok olmanin önemli oldugu kücük populasyonlar için) ve müdahale zamanlamasini (acilan ve kapanan okul kapatmalari, karantinalar, seyahat kişitlamalari) ekler. Her uzanti, tahmin için gerekli ancak temel SIR modelinin temiz bir şekilde gösterdigi temel bulaş dinamiklerini gizleyebilen bir karmasiklik katar.',
    },
    {
      type: 'title',
      text: 'Bu salgin simulatorunun sinirlamalari',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu, kücük bir deterministik SIR modelidir. Yas gruplari, hane yaıpisi, okullar, seyahat, super yayılim, kuluclenme dönemleri, asemptomatik bulaş, mevsimsellik, varyantlar, azalan bagisiklik, davranis degisiklikleri, test gecikmeleri veya zaman içinde acilip kapanan halk sağligi müdahalelerini icermez. Bu detaylar gerçek tahmin için gereklidir.',
    },
    {
      type: 'paragraph',
      html: 'Model, her duyarıli kişinin her bulaşıcı kişiyle esit temas olasiligina sahip oldugu iyi karismis bir populasyon varsayar. Gerçek populasyonlar, güclu kumeleme, yas benzerligi, coğrafi yaıpi ve bulaşıcılikta bireysel farkliliklarla birlikte temas aglarina sahiptir. Bu özellikler, homojen bir modelin yakalamadigi daha yaıvas başlangiç buyumesi, super yayılim olaylari ve heterojen salgin modelleri olusturabilir.',
    },
    {
      type: 'paragraph',
      html: 'Simulatoru tibbi, politika veya acil durum kararlari almak için degil, mekanizmalari anlamak ve senaryolari karşilaştirmak için kullanin. Gerçek dunya salgin degerlendirmesi, surveyans verisi, yerel baglam, belirsizlik analizi ve uzman epidemiyolojik modelleme gerektirir.',
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
