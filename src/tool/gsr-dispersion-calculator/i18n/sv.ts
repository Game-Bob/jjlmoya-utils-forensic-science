import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkylator-skjutavstand-gsr-partikelspridning';
const title = 'Kalkylator för GSR partikelspridning och Skjutavstånd';
const description = 'Simulera pedagogiska spridningsmönster för krutstänk och tändsatsrester (GSR) på en målyta baserat på skjutavstånd, ammunitionstyp och värmeeffekter.';

const howTo = [
  {
    name: 'Ställ in skjutavståndet',
    text: 'Dra avståndsreglaget från direkt kontakt upp till tre meter för att se hur skjutspåret förändras från en kompakt, brännskadad zon till ett brett, glest partikelfält.',
  },
  {
    name: 'Välj en ammunitionsprofil',
    text: 'Välj profil för en 9 mm pistol, .38 revolver eller kaliber 12 hagelgevär. Varje profil ändrar partikelantal, spridningsfaktor och beräknad termisk räckvidd.',
  },
  {
    name: 'Analysera målet och spridningskonen',
    text: 'Använd tygmålet för att jämföra partikeltäthet och radiell spridning, och titta på sidokonen för att förstå hur krutmolnet expanderar innan det träffar målet.',
  },
  {
    name: 'Tolka avståndskategorin',
    text: 'Granska den klassificering som visas och förväntade fynd. Resultatet beskriver den didaktiska innebörden av kontaktskott, nära kontakt, kort avstånd och långt avstånd.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Kan spridningen av tändsatsrester fastställa ett exakt skjutavstånd?',
    answer: 'Nej. GSR-mönster kan stödja en uppskattning av ett avståndsintervall, inte ett exakt avstånd. En slutgiltig bedömning kräver undersökning av det specifika vapnet, ammunitionen, målytan, vinkeln samt provskjutningar under kontrollerade förhållanden.',
  },
  {
    key: 'faq-2',
    question: 'Varför ger skott på extremt nära håll mer sot och brännskador?',
    answer: 'Vid mycket korta avstånd träffar heta gaser, sot, oförbränt krut och metallpartiklar från tändsatsen målet innan molnet har hunnit expandera och svalna, vilket orsakar svärtning, svedning och sönderslitning.',
  },
  {
    key: 'faq-3',
    question: 'Vilka grundämnen förknippas vanligtvis med tändsatsrester?',
    answer: 'Traditionell GSR-analys inriktas på partiklar som innehåller bly, barium och antimon. Även om modern blyfri ammunition kan ändra profilen, utvärderar SEM-EDS-metoder partikelmorfologi och kemi tillsammans.',
  },
  {
    key: 'faq-4',
    question: 'Varför använder simulatorn en Gaussisk radiell spridningsmodell?',
    answer: 'En Gauss-liknande radiell modell är en användbar pedagogisk förenkling eftersom de flesta partiklar koncentreras nära mitten. I verkligheten kan vind, träffvinkel, vapendesign eller tygstruktur orsaka asymmetrier.',
  },
  {
    key: 'faq-5',
    question: 'Är denna kalkylator lämplig för forensiska utlåtanden?',
    answer: 'Nej. Det är en pedagogisk modell. Ett officiellt kriminaltekniskt utlåtande måste baseras på validerade laboratorieprotokoll, kvalitetskontroller, fysiska provskjutningsmönster och bedömning av behörig expert.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Skjutavstånd',
    units: 'Enhetssystem',
    metric: 'Metrisk',
    imperial: 'Imperial',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Ammunitionsprofil',
    ammoPistol9mm: '9 mm pistol',
    ammoRevolver38: '.38 revolver',
    ammoShotgun12: 'Kaliber 12 hagelgevär',
    target: 'Tygmål',
    cone: 'Krutgasmoln',
    canvasAria: 'Partikelspridning av skjutrester på tygmålet',
    rangeStripAria: 'Avståndskategorier',
    category: 'Avståndstolkning',
    categoryContactLabel: 'Kontaktskott / mynningskontakt',
    categoryNearContactLabel: 'Nära kontakt / brännskadeområde',
    categoryCloseRangeLabel: 'Kort avstånd / kruttatueringszon',
    categoryDistantLabel: 'Långt avstånd eller obestämbart avstånd',
    density: 'Partikeltäthet',
    thermal: 'Termisk effekt',
    radius: 'Beräknad mönsterradie',
    radiusSuffix: 'radie',
    expected: 'Förväntat fynd',
    expectedContact: 'En mycket tät central avlagring, risk för mynningsavtryck, sotsvärtning, sönderrivet tyg och termiska skador förväntas i målområdet.',
    expectedNearContact: 'Kraftigt sot och krutpartiklar förblir koncentrerade runt ingångsöppningen, med en tydlig men kompakt radiell gloria.',
    expectedCloseRange: 'Kruttatuering och metallrester breder ut sig i en mätbar ring; termiska effekter och sot blir minimala.',
    expectedDistant: 'Partiklar är sällsynta och brett spridda. Avståndsbedömning kräver kemisk analys, mikroskopi och jämförande provskjutningar.',
    contact: 'Kontakt',
    near: 'Nära kontakt',
    close: 'Kort avstånd',
    distant: 'Långt avstånd',
    disclaimer: 'Pedagogisk modell. GSR-avståndsbestämning kräver kontrollerade provskjutningar, jämförelse av målytor och validerade kemiska analysmetoder.',
  },
  seo: [
    {
      type: 'title',
      text: 'Skjutavståndsbedömning baserad på spridningsmönster för GSR',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Pedagogisk modell',
      title: 'Vad denna kalkylator besvarar',
      html: 'Denna GSR-avståndskalkylator illustrerar om ett krutstänksmönster liknar ett kontaktskott, ett skott på nära håll, kort avstånd eller långt avstånd. Den är avsedd för utbildning om principerna för <strong>skjutavståndsbedömning</strong>, inte för att utfärda expertutlåtanden i brottmål.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'simulerat skjutavstånd', icon: 'mdi:ruler' },
        { value: '4', label: 'förklarade avståndskategorier', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'jämförda ammunitionsprofiler', icon: 'mdi:ammunition' },
        { value: '2', label: 'enhetssystem: metriskt och imperialt', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'Hur man läser det simulerade mönstret',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Snabb tolkningschecklista',
      items: [
        'Tätt centralt sot, brännskador, sönderrivet tyg eller mynningsavtryck tyder på kontaktskott eller nära kontakt.',
        'En kompakt mörk kärna omgiven av krutkorn tyder på ett mycket kort avstånd, där provskjutningar krävs för att precisera det.',
        'Spridd kruttatuering med minimalt sot passar oftast ett skott på kort avstånd utanför värmeeffekternas räckvidd.',
        'Glesa synliga rester utesluter inte närvaro av GSR; mikroskopi eller kemisk analys kan fortfarande påvisa partiklar.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vad verktyget hjälper till med',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Det visualiserar sambandet mellan skjutavstånd, krutstänkstäthet, partikelspridning och värmeeffekter.',
          points: ['Klassrumsdemonstration', 'Förklaring av sökintentioner', 'Kriminalteknisk terminologi', 'Jämförelse av enheter'],
        },
        {
          title: 'Vad det inte kan bevisa',
          icon: 'mdi:alert-circle-outline',
          description: 'Det kan inte fastställa det faktiska skjutavståndet i ett verkligt fall utan analys av fysiska bevis.',
          points: ['Ingen uppladdning av bevis', 'Ingen kemisk bekräftelse', 'Inga provskjutningar med det aktuella vapnet', 'Inget juridiskt bevisvärde'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Vanlig fråga', 'Nyckeltråd i mönstret', 'Tekniskt svar'],
      rows: [
        ['Hur ser ett kontaktskott ut?', 'Tätt sot, brännskador, sönderrivet tyg eller mynningsavtryck.', 'En tolkningshypotes om kontakt är rimlig, men gasexpansion och tygets elasticitet kan påverka utseendet kraftigt.'],
        ['Hur nära var vapnet?', 'Koncentrerade rester nära ingångshålet med en kompakt krutgloria.', 'Mönstret ger stöd för ett avståndsintervall, men provskjutning för jämförelse är nödvändig.'],
        ['Vad är kruttatuering?', 'Punktformade märken efter oförbrända krutkorn med lite eller inget sot.', 'Spridningen varierar beroende på ammunition, tygmaterial, skjutvinkel och mellanliggande hinder.'],
        ['Kan GSR försvinna på avstånd?', 'Mycket få partiklar och inget synligt makroskopiskt mönster.', 'De synliga spåren avtar, men tändsatspartiklar kan fortfarande identifieras i laboratorium.'],
      ],
    },
    {
      type: 'title',
      text: 'Vetenskaplig beräkning av modellen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulatorn använder en Gauss-liknande radiell distribution för att placera partiklar runt träffpunkten på ett slumpmässigt men realistiskt sätt. Korta skjutavstånd ger mycket trånga, kompakta och extremt täta koncentrationer av krutspår i den centrala zonen; längre avstånd ökar den radiella spridningen av partiklar avsevärt och sänker medeltätheten per kvadratcentimeter på målytan. Den matematiska modellen separerar även fina sotmoln från tyngre metalliska tändsatspartiklar eftersom de termiska effekterna och sotet har en mycket kortare fysikalisk räckvidd jämfört med detektionsområdet för de mikroskopiska partiklarna. Denna simulering ger därför en utmärkt pedagogisk introduktion till hur forensiska experter analyserar fysiska spår vid brottsplatsundersökningar.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Tändsatsrester och krutstänk (Gunshot Residue): partiklar från tändsats, krut, projektil och heta gaser vid avfyrning.' },
        { term: 'Sotsvärtning', definition: 'Mörk kolförening som främst syns vid kontaktskott och mycket korta skjutavstånd.' },
        { term: 'Kruttatuering', definition: 'Små punktformade märken i målytan orsakade av oförbrända eller delvis förbrända krutkorn.' },
        { term: 'Mynningsavtryck', definition: 'Ett avtryck på målytan som efterliknar pipans mynning på grund av gastryck och värme vid kontaktskott.' },
        { term: 'Provskjutning', definition: 'Jämförande skott på kända avstånd med det misstänkta vapnet och ammunitionen på ett identiskt tygstycke.' },
      ],
    },
    {
      type: 'title',
      text: 'Avståndsklasser och förväntade fynd',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kategori', 'Typiska fynd', 'Tolkningsbegränsning'],
      rows: [
        ['Kontakt', 'Massiv central avlagring, sot, brännskador, sönderrivet tyg, mynningsavtryck.', 'Tygets elasticitet och gasernas tryck kan förändra ingångshålets diameter avsevärt.'],
        ['Nära kontakt', 'Kompakt sot- och krutgloria runt ingångsöppningen.', 'Löst sittande kläder eller ett mellanliggande föremål kan avleda partiklarna.'],
        ['Kort avstånd', 'Kruttatuering, krutpartiklar utan framträdande sotskikt.', 'Samma avstånd ger olika mönster på bomull, denim, hud eller papper.'],
        ['Långt avstånd', 'Sällsynta partiklar, vid spridning eller inga synliga makroskopiska spår.', 'Kemisk analys och svepelektronmikroskopi blir helt avgörande när de synliga spåren uteblir.'],
      ],
    },
    {
      type: 'tip',
      title: 'Praktiskt tolkningsråd',
      html: 'Utvärdera alltid skjutrester som ett <strong>jämförelseproblem för intervall</strong> och aldrig som ett absolut siffervärde. Säkra kriminaltekniska slutsatser kräver direkt jämförelse med provskjutningsmönster.',
    },
    {
      type: 'title',
      text: 'Dokumentationschecklista före mönsteranalys',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Udokumentera målytans egenskaper: tygtyp, färg, tjocklek, elasticitet och eventuella veck.',
        'Registrera vapenmodell, piplängd, ammunitionsparti, kruttyp och eventuella mynningsbromsar.',
        'Fotografera mönstret med måttband, rätt belysning och dokumenterad chain of custody.',
        'Sök separat efter sot, brännskador, oförbränt krut, avstrykningsring och mekaniska skador.',
        'Utför alltid jämförande provskjutningar innan avståndsintervall anges i kriminaltekniskt arbete.',
      ],
    },
    {
      type: 'proscons',
      title: 'Digital simulering kontra forensisk laboratorieanalys',
      items: [
        { pro: 'Underlättar förståelsen för hur partikelspridningen ökar när avståndet växer.', con: 'Tar inte hänsyn till det specifika vapnet, ammunitionspartiet eller tygets struktur.' },
        { pro: 'Förtydligar skillnaderna mellan de olika avståndskategorierna.', con: 'Ersätter inte kemiska analysmetoder eller svepelektronmikroskopi (SEM-EDS).' },
        { pro: 'Hjälper till att förstå de fysiska begränsningarna med visuell mönsteranalys.', con: 'Saknar juridiskt bevisvärde utan laboratoriets validering och expertbedömning.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Kriminalteknisk varning',
      title: 'Uteslutande av juridisk användning',
      html: 'En datorsimulering kan aldrig ersätta de fysiska bevisen i ett verkligt fall. Den kan inte bedöma vapnets skick, krutkemi, hinder på vägen eller kvaliteten på bevisinsamlingen. Använd denna sida enbart för utbildningsändamål och vänd dig till behöriga laboratorier för riktiga undersökningar.',
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
      applicationCategory: 'ForensicApplication',
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
