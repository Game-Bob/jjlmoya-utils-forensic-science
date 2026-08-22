import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "ses-spektrogram-analizoru-online";
const title = "Ses Spektrogram Analizoru Online";
const description = "İki ses örneğinin frekans, zaman, yoğunluk ve tahmini formant kalıplarını tarayıcınızda gizlice görselleştirin.";

const howTo = [
  {
    "name": "İki örnek seçin",
    "text": "Yerel ses dosyaları veya hazır sentetik örnekler kullanın."
  },
  {
    "name": "Frekans tavanını ayarlayın",
    "text": "Sese uygun olarak 4, 6 veya 8 kHz seçin."
  },
  {
    "name": "Spektrogramı inceleyin",
    "text": "Zaman, frekans ve formant çizgilerini gözlemleyin."
  },
  {
    "name": "Dinleyin ve karşılaştırın",
    "text": "F1, F2 ve F3 ortalamalarını eğitim amacıyla karşılaştırın."
  }
];

const faq = [
  {
    "question": "Ses spektrogramı ne gösterir?",
    "answer": "Spektrogram zamanı yatay eksende, frekansı dikey eksende ve ses enerjisini parlaklıkla gösterir."
  },
  {
    "question": "Ses kayıtlarım yükleniyor mu?",
    "answer": "Hayır. Tüm işlemler tarayıcınızda yerel olarak yapılır."
  },
  {
    "question": "F1, F2 ve F3 ne anlama gelir?",
    "answer": "Ses yolunun rezonanslarının eğitici tahminleridir."
  },
  {
    "question": "Bu araç konuşmacı kimliğini tespit edebilir mi?",
    "answer": "Hayır. Görsel benzerlik adli kimlik kanıtı oluşturmaz."
  },
  {
    "question": "Frekans tavanı değişince formantlar neden değişir?",
    "answer": "Frekans ölçeği spektral tepelerin ayrışmasını etkiler."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "Yalnızca yerel",
    "privacyNote": "Ses kayıtlarınız cihazınızda kalır. Çözümleme ve analiz tarayıcı içinde çalışır.",
    "loadHeading": "Analiz edilecek iki ses yükleyin",
    "sampleALabel": "Örnek A",
    "sampleBLabel": "Örnek B",
    "chooseFileLabel": "Ses seç",
    "replaceFileLabel": "Sesi değiştir",
    "dropHint": "Buraya bir ses dosyası sürükleyin (maks. 25 MB). İlk 20 saniye analiz edilir.",
    "presetHint": "Hazır sentetik ünlü çalışmalarıyla hemen test edin.",
    "presetWarmLabel": "Sıcak ünlü çalışması",
    "presetBrightLabel": "Parlak ünlü çalışması",
    "emptySampleLabel": "Ses bekleniyor",
    "readySampleLabel": "Spektral plaka hazır",
    "decodingSampleLabel": "Spektral plaka işleniyor",
    "errorSampleLabel": "Örnek analiz edilemedi",
    "durationLabel": "Süre",
    "ceilingHeading": "Frekans tavanı",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "Aynalı ses spektrogram sahnesi",
    "mirrorViewLabel": "Aynalı plakalar",
    "splitViewLabel": "Paralel plakalar",
    "playALabel": "Örnek A çal",
    "playBLabel": "Örnek B çal",
    "stopLabel": "Durdur",
    "timeAxisLabel": "Zaman",
    "frequencyAxisLabel": "Frekans",
    "intensityLegendLabel": "Daha parlak renk daha yüksek enerjiyi gösterir",
    "formantLegendLabel": "Tahmini formant çizgileri",
    "sampleAEmptyCanvasLabel": "Spektrumu görmek için örnek A yükleyin",
    "sampleBEmptyCanvasLabel": "Spektrumu görmek için örnek B yükleyin",
    "comparisonHeading": "Rezonans kalıpları analizi",
    "comparisonNote": "Sesli bölümlerdeki ortalama spektral tepe noktaları. Farklar fiziksel ölçümlerdir, kimlik kanıtı değildir.",
    "formantOneLabel": "Birinci rezonans bölgesi (F1)",
    "formantTwoLabel": "İkinci rezonans bölgesi (F2)",
    "formantThreeLabel": "Üçüncü rezonans bölgesi (F3)",
    "averageLabel": "Ortalama",
    "differenceLabel": "Fark",
    "unavailableLabel": "Mevcut değil",
    "statusEmptyLabel": "Başlamak için bir örnek yükleyin",
    "statusSingleLabel": "Bir plaka hazır",
    "statusReadyLabel": "Her iki spektral plaka hazır",
    "limitError": "Dosya 25 MB yerel analiz sınırını aşıyor.",
    "decodeError": "Tarayıcı bu ses biçimini çözemedi.",
    "browserError": "Web Audio API bu tarayıcıda desteklenmiyor.",
    "educationalNote": "Eğitim amaçlı görselleştirme aracı. Formant çizgileri adli konuşmacı kimlik tespiti için kullanılamaz."
},
  seo: [
    { type: 'title', text: "Ses spektrogramı sesi detaylı bir görsel haritaya nasıl dönüştürür", level: 2 },
    { type: 'paragraph', html: "Bir <strong>ses spektrogramı</strong> kaydı, yatay eksende zaman ve dikey eksende frekans bulunan görsel bir haritaya dönüştürür. Daha güçlü enerji daha parlak bir renk olarak görünür. Bu durum, uzatılan ünlüleri, harmonikleri, sessizliği ve rezonansları sıradan bir dalga biçimine göre çok daha net gözlemlemeyi sağlar. Görselleştirme sinyal analizini kolaylaştırır ve ayrıntılı bir bakış sunarak ses incelemesini oldukça hızlandırır ve verimli kılar." },
    { type: 'paragraph', html: "Analizör sinyali kısa örtüşen parçalara böler, Hamming penceresi uygular ve FFT kullanarak frekansa göre enerji dağılımını hesaplar. Kısa bir parça olayın tam zamanını belirlerken, frekans çözünürlüğü enerjinin nerede yoğunlaştığını gösterir. Belirsizlik ilkesi nedeniyle zaman ve frekans çözünürlüğü arasında her zaman bir denge vardır. Bu ayarlar görünüm netliğini belirler ve hassasiyeti artırır. Böylece ses özelliklerini daha detaylı değerlendirmek, incelemek ve karşılaştırmak mümkün hale gelir." },

    { type: 'diagnostic', variant: 'info', title: "Tarayıcıda gizli işleme", html: "İki ses örneğinin frekans, zaman, yoğunluk ve tahmini formant kalıplarını tarayıcınızda gizlice görselleştirin. Tüm ses kayıtlarınız sunuculara yüklenmeden cihazınızda kalır." },
    { type: 'stats', columns: 3, items: [
      { value: "Zaman", label: "Soldan sağa okuyun" },
      { value: "Hz", label: "Frekans konumu" },
      { value: "Enerji", label: "Parlaklık olarak gösterilir" }
    ] },
    { type: 'title', text: "Formantları doğru yorumlamak", level: 3 },
    { type: 'paragraph', html: "Formantlar ses yolu tarafından şekillendirilen rezonans bölgeleridir. F1 ve F2 fonetikte ünlü yüksekliğini ve eklemleme yerini ayrıntılı olarak açıklamak için kullanılır. Bu analizör, kullanıcıların görünür bantları F1, F2 ve F3 davranışıyla sezgisel ve doğru bir şekilde ilişkilendirebilmesi için üç frekans bölgesindeki düzeltilmiş tepeleri takip eder." },
    { type: 'paragraph', html: "Profesyonel formant ölçümü genellikle konuşmacıya uyarlanmış Doğrusal Öngörümlü Kodlama (LPC) kullanır. Ana ses harmonikleri, yankı ve arka plan gürültüsü basit tahminleri kaydırabilir. Bu kılavuzları eğitici bir referans olarak kullanın ve her zaman arka plandaki görsel spektrumu doğrulamak için kontrol edin." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 - 1000 Hz","Birinci rezonans bölgesi, ünlü açıklığı ile ilişkili"],["F2","900 - 3000 Hz","İkinci rezonans bölgesi, dil konumu ile ilişkili"],["F3","2000 - 4500 Hz","Üst rezonans bölgesi, ses yolu geometrisinden etkilenir"]] },
    { type: 'title', text: "Frekans ayarlarının analize etkisi", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Düşük tavan (4 kHz)", description: "Alt frekanslar için daha iyi görünüm", points: ["Ünlüler için kullanışlı", "Yüksek enerjiyi dışarıda bırakabilir", "Daha yüksek doğruluk garanti etmez"] },
      { title: "Yüksek tavan (6/8 kHz)", description: "Daha fazla üst detay", highlight: true, points: ["Parlak sesler için", "Sürtünmeli sesleri gösterir", "Alt bantları sıkıştırır"] }
    ] },
    { type: 'title', text: "İki ses örneğini sorumlulukla karşılaştırmak", level: 3 },
    { type: 'paragraph', html: "İki plakayı karşılaştırmak, her iki kayıt benzer akustik koşullarda aynı ünlüyü veya cümleyi içerdiğinde en faydalı olanıdır. Görüntülenen farklar spektral tepeler arasındaki mutlak fiziksel ölçümlerdir. Bir benzerlik yüzdesi veya biyometrik kimlik kanıtı oluşturmazlar." },
    { type: 'list', items: ["<strong>Aynı konuşma içeriğini karşılaştırın:</strong> tekrarlanan ünlüler veya kelimeler daha kolay karşılaştırılır.","<strong>Kayıt koşullarını eşitleyin:</strong> mikrofon ve oda akustiği spektrumu güçlü bir şekilde etkiler.","<strong>İmleçle dinleyin:</strong> görsel olayları tam ses anıyla ilişkilendirin.","<strong>Kimlik iddiasında bulunmayın:</strong> benzer görünen bir spektrogram konuşmacı kimliğini kanıtlamaz."] },
    { type: 'summary', title: "Analizör özeti", items: ["Uyumlu dosyalardan yerel olarak bir ses spektrogramı oluşturun.","İki örneği aynalı veya paralel plakalarda keşfedin.","Spektral enerjinin ve formant bölgelerinin nasıl değiştiğini öğrenin.","Açıklayıcı ve eğitici bir yaklaşım sürdürün."] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
