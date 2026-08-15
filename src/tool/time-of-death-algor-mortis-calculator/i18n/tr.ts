import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'olum-zamani-hesaplama-algor-mortis';
const title = 'Olum Zamani Hesaplama Algor Mortis Henssge Nomogrami';
const description = 'Rektal olum sicakligi ve ortam kosullarina gore Henssge cift ustel nomogrami ile olum sonrasi zamani hesaplayin.';

const howTo = [
  { name: 'Rektal ve ortam sicakliklarini girin', text: 'Olay yerinde olculen derin rektal sicakligi ve ortalama ortam hava sicakligini sisteme yazin.' },
  { name: 'Vucut agirligi ve duzeltme katsayisini secin', text: 'Cesedin kilogram cinsinden agirligini girin ve giysi veya su ortam katsayisini belirleyin.' },
  { name: 'Sicaklik olcum saatini belirtin', text: 'Termal olcumun yapildigi kesin saati yazin veya Su Anki Saat butonuna tiklayin.' },
  { name: 'Olum zaman araligini analiz edin', text: 'Hesaplanan olum sonrasi sureyi ve yuzde 95 guven araligindaki olum saat penceresini inceleyin.' }
];

const faq = [
  { question: 'Adli tipta Algor Mortis ne anlama gelir?', answer: 'Algor Mortis dolasimin durmasindan sonra vucut isisinin cevre ortam ile dengeye ulasana kadar kademeli olarak dusmesidir.' },
  { question: 'Henssge nomogrami neden dogrusal kurallara tercih edilir?', answer: 'Cunku ilk saatlerdeki isi platosunu ve vucut agirligi ile giysi izolasyonuna bagli cift ustel sogumayi dogru modeller.' },
  { question: 'Sicakliga dayali olum zamani tahmini ne kadar guvenilirdir?', answer: 'Kontrollu standart kosullarda ilk 10 saatteki yuzde 95 guven araligi yaklasik arti eksi 2.8 saattir.' },
  { question: 'Olum sonrasi isi platosu nedir?', answer: 'Olumden sonraki ilk 1 ila 3 saatlik donemde derin rektal sicakligin isi gradyani nedeniyle neredeyse degismedigi gecikme evresidir.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Olum Sonrasi Sure Tahmini ve Henssge Nomogrami',
    disclaimer: 'Bu arac sadece egitim ve akademik simulasyon amaclidir. Resmi adli raporlar adli otopsi ve olu lekelerinin incelenmesini gerektirir.',
    unitSystemLabel: 'Birim sistemi',
    unitMetricLabel: 'Metrik',
    unitImperialLabel: 'Emperyal',
    presetsHeader: 'Standart adli senaryolar',
    presetCustom: 'Ozel parametreler',
    presetNakedCalm: 'Durgun odada ciplak (20°C)',
    presetDressedIndoor: 'Ic mekanda giyinik (19.5°C)',
    presetWinterOutdoor: 'Kisin acik havada (4°C)',
    presetSubmergedWater: 'Durgun suda batmis (12°C)',
    presetHeavyDuvet: 'Yatakta kalin yorgan altinda (18°C)',
    inputsHeader: 'Olcum degerleri ve cevre parametreleri',
    rectalTempLabel: 'Derin rektal sicaklik',
    ambientTempLabel: 'Ortam sicakligi',
    bodyWeightLabel: 'Vucut agirligi',
    factorLabel: 'Cevresel duzeltme faktoru',
    measurementTimeLabel: 'Olcum saati',
    factorNaked: 'Durgun havada ciplak',
    factorLightClothes: 'Hafif giysi (1-2 kat)',
    factorStandardClothes: 'Normal sokak kiyafeti (3-4 kat)',
    factorHeavyWinter: 'Kalin kislik giysiler',
    factorLightBlanket: 'Ince battaniyeli yatak',
    factorHeavyDuvet: 'Kalin kus tuyu yorganli yatak',
    factorStillWater: 'Durgun suya batmis',
    factorFlowingWater: 'Akan soguk suya batmis',
    factorWetClothing: 'Ruzgarda islak kiyafet',
    factorMovingAir: 'Vantilatorlu hareketli hava',
    resultsHeader: 'Olum sonrasi sure analizi',
    estimatedPmiLabel: 'Tahmini olumden gecen sure',
    deathWindowLabel: 'Olasi olum saat penceresi',
    confidenceMarginLabel: 'Guven araligi (95%)',
    coolingPhaseLabel: 'Termodinamik evre',
    coolingRateLabel: 'Anlik isi kaybi hizi',
    glaisterEstimateLabel: 'Glaister kurali karsilastirmasi',
    chartHeader: 'Henssge cift ustel soguma egrisi',
    chartXAxis: 'Olum sonrasi saat',
    chartYAxis: 'Cekirdek sicaklik',
    chartNowMarker: 'Kaydedilen olcum',
    chartPlateauMarker: 'Baslangic platosu',
    phasePlateau: 'Plato evresi',
    phaseDescent: 'Ustel dusus',
    phaseEquilibrium: 'Termal denge',
    phaseHyperthermia: 'Hipertermi uyarisi',
    hoursUnit: 'saat',
    minutesUnit: 'dk',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/sa',
    fahrenheitPerHour: '°F/sa',
    resetBtn: 'Sifirla',
    nowBtn: 'Simdi',
    coreThermometerLabel: 'Cekirdek sicaklik',
    baselineAmbientLabel: 'Cevre tabani',
    referenceBodyTempLabel: 'Referans vucut isisi'
  },
  seo: [
    { type: 'title', text: 'Ceset Sogumasinin Fiziksel Temelleri ve Olum Zamani Tahmini', level: 2 },
    { type: 'paragraph', html: 'Olumden sonra gecen surenin (Postmortem Interval veya PMI) belirlenmesi adli tip patolojisinin ve olay yeri inceleme ekiplerinin en temel gorevlerinden biridir. <strong>Algor Mortis</strong> dolasimin durmasindan ve hucresel metabolizmanin sona ermesinden sonra vucut isisinin cevre ortama isi aktarimiyla kademeli olarak sogumasini ve termal dengeye ulasmasini ifade eder. Derin rektal isi olcumu ve dogrulanmis termodinamik modeller kullanilarak olum saati bilimsel, kesin ve objektif olarak daraltilabilir.' },
    { type: 'paragraph', html: 'Cesetten cevreye isi yayilimi isima, iletim, dogal hava konveksiyonu ve ter buharlasmasi gibi fiziksel yollarla gerceklesir. Ic organlar isisini once dis deri tabakasina aktardigi icin basit dogrusal formulasyonlarin aciklayamayacagi karmasik bir isi gradyani olusur.' },
    { type: 'diagnostic', variant: 'info', title: 'Cesedin Termodinamik Soguma Sureci', html: 'Isi kaybi ilk dakikadan itibaren dogrusal bir cizgi seklinde ilerlemez. Ilk saatlerde <em>sicaklik platosu</em> denilen bir gecikme evresi gozlenir, ardindan dik bir cift ustel dusus baslar ve ortam sicakligina asimptotik olarak yaklasir.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Normal rektal referans' },
      { value: '±2.8 sa', label: 'Ilk 10 saat %95 guven' },
      { value: 'Cift Ustel', label: 'Henssge matematik modeli' }
    ] },
    { type: 'title', text: 'Claus Henssge Cift Ustel Denklemi', level: 3 },
    { type: 'paragraph', html: 'Glaister kurali gibi basit dogrusal yaklasimlar saatte yaklasik 0.83 santigrat derece sabit isi kaybi varsayiyordu. Ancak bu yontem toplam vucut kutlesini, kumas katmanlarinin yalitimini ve baslangictaki felsefi isi platosunu hesaba katmiyordu.' },
    { type: 'code', ariaLabel: 'Henssge Denklemi', code: 'Q = (T_rektal - T_ortam) / (37.2 - T_ortam)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (VucutAgirligi^0.625 * DuzeltmeKatsayisi) - 0.0284' },
    { type: 'paragraph', html: 'Profesor Claus Henssge vucut yuzeyinin isi iletimini ve derin ic organlarin termal ataletini ayni anda aciklayan cift ustel bir denklem formulu gelistirerek adli bilime kazandirmistir.' },
    { type: 'paragraph', html: 'Boyutsuz termal Q katsayisi vucudun olum anindaki ortam sicakligina gore kalan isi payini temsil eder. Bu matematiksel yapi her turlu cevre kosulunda hesaplamanin yuksek dogrulukla yapilmasini saglar.' },
    { type: 'title', text: 'Cevre ve Giysi Duzeltme Katsayilari', level: 3 },
    { type: 'paragraph', html: 'Isi transferi hizi vucut kutlesine, ceset etrafindaki hava akimina ve koruyucu tekstil katmanlarina dogrudan baglidir.' },
    { type: 'table', headers: ['Olay Yeri Durumu', 'Cf Katsayisi', 'Fiziksel Etki'], rows: [
      ['Durgun havada ciplak', '1.0', 'Standart radyasyon ve dogal konveksiyon'],
      ['Hafif giysi (1-2 kat)', '1.1', 'Deri konvektif isi kaybini hafif azaltma'],
      ['Normal sokak giysisi (3-4 kat)', '1.2', 'Gövde ve uzuvlarda orta duzey termal bariyer'],
      ['Kalin kislik kiyafetler', '1.4', 'Sicak hava hapsederek yuksek yalitim'],
      ['Yatakta kalin kus tuyu yorgan', '1.8', 'Cok yuksek isi tutma ve gecikmeli soguma'],
      ['Durgun suda batmis', '0.5', 'Suyun isi iletkenligi havanin 24 katidir'],
      ['Akan soguk suda batmis', '0.35', 'Zorlanmis sivi konveksiyonu isi cekilmesini hizlandirir']
    ] },
    { type: 'title', text: 'Soguma Surecinin Termodinamik Evreleri', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Olum Sonrasi Isi Platosu', description: 'Ilk 1 ila 3 saat boyunca deri sogurken derin rektal sicaklik neredeyse hic dusmez.', points: ['Merkezden cevreye isi gradyani olusumu', 'Dogrusal formullerin sureyi kucuk gordugu evre', 'Denklemdeki -0.25 exp(-5kt) terimiyle modellenir'] },
      { title: 'Hizli Ustel Dusus', description: 'Gradyan olustuktan sonra isi kaybi vucut kutlesine bagli olarak en yuksek hassasiyetle gerceklesir.', highlight: true, points: ['En yuksek analitik olcum duyarliligi', 'En dar istatistiksel hata marji', 'Termometrik yontem icin en ideal zaman araligi'] }
    ] },
    { type: 'title', text: 'Olay Yerinde Sicaklik Olcum Kurallari', level: 3 },
    { type: 'paragraph', html: 'Sicaklik olcum protokollerine kesinlikle uyulmasi hazirlanan adli raporlarin mahkeme onunde gecerliligi acisindan buyuk onem tasir.' },
    { type: 'list', items: [
      '<strong>Derin rektal olcum:</strong> kalibre edilmis dijital probu en az 8-10 cm rektuma yerlestirin.',
      '<strong>Ceset yaninda ortam sicakligi:</strong> termometreyi cesede 10 cm den yakin mesafeye koyun.',
      '<strong>Ortamin termal stabilitesini denetleyin:</strong> calisan isitici, acik pencere veya gunes isigini not edin.',
      '<strong>Giysilerin nem durumunu kontrol edin:</strong> islak giysiler buharlasma ile sogumayi buyuk olcude hizlandirir.'
    ] },
    { type: 'summary', title: 'Metodolojik Ozet', items: [
      'Henssge nomogrami adli tipta isi olcumuyle olum zamani tayini icin uluslararasi standarttir.',
      'Sonuc kesin tek bir saat yerine standart sapmali bir zaman araligi olarak verilmelidir.',
      'Olu sertligi, olu lekeleri ve kas uyarilabilirligi ile birlikte degerlendirilmelidir.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
