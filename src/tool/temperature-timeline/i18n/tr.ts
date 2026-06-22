import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-sicaklik-kronolojisi';
const description = 'Jeolojik donemler boyunca Dunyanin ortalama sicaklik gecmisini kesfedin.';
const title = 'Gezegen Ortalama Sicaklik Kronolojisi';

const howTo = [
  {
    name: 'Bir donem secin',
    text: 'Olcek cetvelindeki bir celtige tiklayin.',
  },
  {
    name: 'Sicakligi kontrol edin',
    text: 'Kuresel ortalama sicakligi okuyun.',
  },
  {
    name: 'Gezegeni gozlemleyin',
    text: 'Tuvalin termal duruma nasil tepki verdigini izleyin.',
  },
];

const faq = [
  {
    "question": "Dunya gecmiste bugunden daha mi sicakti?",
    "answer": "Evet, Dunya bugunkunden cok daha sicak iklimler yasamistir. Mezozoyik (dinozorlar cagi) ve erken Eosen doneminde, gezegen kutup buzullari olmayan bir sera durumundaydi ve kuresel ortalama sicakliklar bugunku ortalamanin yaklasik 7 ila 8 derece uzerinde, 22 dereceyi asiyordu. Ancak bu donemlere gecisler milyonlarca yillik zaman dilimlerinde gerceklesti ve bu da evrimsel adaptasyona olanak tanidi."
  },
  {
    "question": "Kartopu Dunya fenomenine ne sebep oldu?",
    "answer": "Kartopu Dunya (kuresel buzul cagi) esas olarak Neoproterozoyik donemde (yaklasik 700 milyon yil once) meydana geldi. Rodinya superkıtasının parcalanmasının ardından silikat kayaclarinin hizlanan kimyasal asinmasi nedeniyle sera gazlarindaki asiri azalma ile tetiklendi. Buzullar kutuplardan ekvatora kadar uzanarak gunes radyasyonunu yansitti (albedo etkisi) ve gezegeni milyonlarca yillik volkanik CO2 birikiminden sonra kirilabilen kuresel bir donma dongusune soktu."
  },
  {
    "question": "Dunya uzun vadede sicakligini nasil duzenler?",
    "answer": "Dunya, esas olarak levha tektonigi ve silikat asinmasi ile duzenlenen, jeolojik karbon dongusu tarafından kontrol edilen dogal bir termostata sahiptir. Gezegen isindiginda, asit yagmuru silikat kayaclariyla daha hizli reaksiyona girerek CO2'yi atmosferden ceker ve okyanus tabanina karbonat olarak depolayarak sera etkisini azaltir. Gezegen sogursa, asinma azalir ancak volkanik aktivite CO2 salmaya devam ederek gezegeni yavasca tekrar isitir."
  },
  {
    "question": "Antroposen iklim degisikliginin jeolojik gecmistten farkı nedir?",
    "answer": "Temel fark degisimin hizinda yatmaktadir. Jeolojik gecmisteki dogal iklim gecisleri genellikle on binlerce veya milyonlarca yil boyunca gerceklesirken (biyolojik goc ve evrim icin pay birakirken), Antroposen isinmasi onlarca yil icinde gerceklesmektedir. Bu termal degisim orani, belgelenmis hemen hemen her onceki olaydan ustel olarak daha hizlidir, mevcut biosferin uyum kapasitesini asmakta ve hizlanmis kitlesel yok olusa neden olmaktadir."
  },
  {
    "question": "Paleosen-Eosen Termal Maksimumu (PETM) neydi?",
    "answer": "PETM, yaklasik 56 milyon yil once meydana gelen asiri bir kuresel isinma olayıdır. Atmosfere hizli ve kitlesel bir karbon enjeksiyonundan kaynaklanmıstir (muhtemelen okyanus metan hidratlarinin salinmasindan veya Kuzey Atlantik volkanizmasindan), kuresel sicakliklari birkaç bin yilda 5 ila 8 derece artirmistir. Modern iklim degisikligi icin en iyi jeolojik analog olarak kabul edilir ve okyanus asitlenmesine ve bentik organizmalarin kitlesel yok olusuna yol acmistir."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Dunyanin Sicaklik Kronolojisi',
    sub: 'Dunyanin jeolojik iklim donemlerini kesfedin',
    ageLabel: 'Yas:',
    tempLabel: 'Ortalama Sicaklik:',
    selectPrompt: 'Jeolojik bir donem secin.',
    epoch_archean_name: 'Arkeyan Devir',
    epoch_archean_age: '4,0 ila 2,5 milyar yil once',
    epoch_archean_desc: 'Metan ve CO2 zengini asiri sicak dunya.',
    epoch_proterozoic_name: 'Proterozoyik Devir',
    epoch_proterozoic_age: '2,5 milyar ila 541 milyon yil once',
    epoch_proterozoic_desc: 'Oksijen artisi Huron buzul cagina yol acti.',
    epoch_paleozoic_name: 'Paleozoyik Zaman',
    epoch_paleozoic_age: '541 ila 252 milyon yil once',
    epoch_paleozoic_desc: 'Denizlerde yasam patlamasi ve karaya gecis.',
    epoch_mesozoic_name: 'Mezozoyik Zaman',
    epoch_mesozoic_age: '252 ila 66 milyon yil once',
    epoch_mesozoic_desc: 'Sera kosullarinin hakim oldugu dinozorlar cagi.',
    epoch_cenozoic_name: 'Senozoyik Zaman',
    epoch_cenozoic_age: '66 milyon yil once ila Gunumuz',
    epoch_cenozoic_desc: 'Kuvaterner buzul caglarina giden soguma.',
    epoch_anthropocene_name: 'Antroposen Donem',
    epoch_anthropocene_age: 'Gunumuz ve Gelecek',
    epoch_anthropocene_desc: 'Sera gazi salinimi kaynakli hizli isinma.',
  },
  seo: [
  {
    "type": "title",
    "text": "TARİHSEL İKLİMBİLİM: Jeolojik Donemler Boyunca Dunyanin Termal Evrimi",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Dunyanin iklimi hicbir zaman statik olmamistir. 4,5 milyar yillik varolusu boyunca gezegenimiz iki temel durum arasinda gidip gelmistir: sera (greenhouse) durumu ve buzul cagi (icehouse) durumu. Bu buyuk olcekli dalgalanmalari anlamak sadece jeolojik bir merak degil, ayni zamanda insan kaynakli kuresel isinmanin hizini ve ciddiyetini anlamlandirmak icin vazgecilmez bir aractir. Paleoklimatologlar, deniz fosillerindeki oksijen izotoplarini ve buz cekirdeklerinde hapsolmus hava kabarciklarini inceleyerek, gecmisteki Dunya sicakliklarinin kesin bir kaydini cikarmislardir."
  },
  {
    "type": "title",
    "text": "Jeolojik Eon ve Doneme Gore Sicaklik Kaydi",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Dunya tarihi, biyolojik ve jeolojik degisimlerle tanimlanan ana zaman araliklarina bolunmustur. Asagida, bu kronolojide mevcut olan her donem icin tahmini ortalama sicakliklarin listesi yer almaktadir:"
  },
  {
    "type": "table",
    "headers": [
      "Jeolojik Donem",
      "Yaklasik Yas",
      "Ortalama Sicaklik",
      "İklimsel Donum Noktalari ve Ozellikler"
    ],
    "rows": [
      [
        "<strong>Arkeyan Devir</strong>",
        "4.0 ila 2.5 Ga",
        "30 °C",
        "Erken sicak Dunya. Sonuk sönük Gunes, metan bakimindan zengin asiri sera etkisiyle telafi edilmisti."
      ],
      [
        "<strong>Proterozoyik Devir</strong>",
        "2.5 Ga ila 541 Ma",
        "12 °C",
        "Serbest oksijenin artisi; metanin cokmesine neden oldu ve kuresel buzul caglarini (\"Kartopu Dunya\") tetikledi."
      ],
      [
        "<strong>Paleozoyik Zaman</strong>",
        "541 ila 252 Ma",
        "20 °C",
        "Buyuk denizel biyo-cesitlilik ve karaya gecis. Volkanik patlamalar ve asiri isinma ile sona erdi."
      ],
      [
        "<strong>Mezozoyik Zaman</strong>",
        "252 ila 66 Ma",
        "22 °C",
        "Sera donemi par excellence (kutup buzu olmayan super-sera). Dinozorlarin altin cagi."
      ],
      [
        "<strong>Senozoyik Zaman</strong>",
        "66 Ma ila bugun",
        "14 °C",
        "Kuvaterner buzul cagi dongulerine yol acan, kitalarin konumlanmasi ve okyanus akintilariyla yonlendirilen kademeli soguma."
      ],
      [
        "<strong>Antroposen</strong>",
        "Bugun & gelecek",
        "15.2 °C",
        "İnsan kaynakli sera gazi salinimlari nedeniyle gerceklesen ani ve siradisi isinma."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Gecmisin Termal Uclari: Kuresel Donmadan Mezozoyik Sicaklarina",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Gezegen tarihi asiri iklim olaylarini icerir. Proterozoyik Devirde, ilkel fotosentez buyuk olcekte oksijen salarak atmosferik metani oksitledi ve gezegeni, buzyallarin ekvator enlemlerine ulastigi \"Kartopu Dunya\" donemlerinden biri olan Huron buzul cagina soktu. Bunun tam tersi sekilde, Mezozoyik Zaman ve Paleosen sirasinda, yogun levha hareketlerine bagli volkanik aktivite atmosferi CO2 ile doyurarak ortalama kuresel sicakligi bugunku seviyelerin 10 derece uzerine cikardi. Bu donemlerde kutuplarda hic buz yoktu, Arktik enlemlerde iliman ormanlar yayilmisti ve dinozorlar gibi sogukkanli surungenler gelisti."
  },
  {
    "type": "title",
    "text": "Jeolojik Olcekte Gezegen İklimini Yonlendiren Faktorler",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Dunyanin uzun vadeli iklimi, birbiriyle baglantili birkac dogal mekanizma tarafından yonlendirilen hassas bir termodinamik dengenin sonucudur:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Milankovitch Donguleri:</strong> Gezegenin yorungesel eksantrikligi, egikligi ve presesyonundaki kucuk periyodik degisimler, alinan gunes radyasyonunu degistirir.",
      "<strong>Silikat-Karbonat Karbon Dongusu:</strong> Uzun vadeli jeokimyasal termostat. Yagmur CO2'yi atmosferden uzaklastirarak okyanus tabaninda silikat olarak biriktirir.",
      "<strong>Levha Tektonigi:</strong> Kita kaymasi kuresel deniz akintilarini degistirir ve CO2'nin kimyasal asinmasini hizlandiran dag siralari olusturur.",
      "<strong>Albedo Geri Besleme Etkisi:</strong> Kar ve buzun varligi gunes isigini yansitir, geri besleme donguleri yoluyla gezegeni daha da sogutur."
    ]
  },
  {
    "type": "title",
    "text": "Antroposen: Biyosferde Gorulmemis Bir Termal Hizlanma",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Kararli Holosen doneminden Antroposen'e gecis, insanligin gezegen sistemleri uzerindeki dogrudan etkisinin baslangicini isaret eder. Orbitel veya volkanik nedenleri on binlerce yil boyunca etki eden gecmisteki termal olaylarin aksine, modern isinma milyonlarca yilda biriken fosil karbonun sadece birkac on yilda kitleler halinde yakilmasindan kaynaklanmaktadir. Mevcut sera gazi birikim hizi ve kuresel ortalama sicaklik artis hizi, Permiyen sonu kitlesel yok olusundan veya PETM doneminden cok daha hizlidir ve gezegenin biyolojik cesitligine gorulmemis bir uyum meydan okumasi sunmaktadir."
  }
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
