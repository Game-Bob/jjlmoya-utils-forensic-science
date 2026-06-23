import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dental-skeletal-third-molar-age-estimator';
const title = 'Gebits-, skelet- en verstandskiesleeftijdsschatter';
const description = 'Schat een forensisch leeftijdsinterval op basis van gebitsontwikkeling, skeletale maturiteit en verstandskiesindicatoren voor screening en casustriage.';

const howTo = [
  {
    name: 'Selecteer de bewijsklemtoon',
    text: 'Kies "Gemengd bewijs" voor gebalanceerde triage, "Gebitsprioriteit" wanneer gebitsbevindingen robuuster zijn, of "Skeletprioriteit" wanneer radiografische skeletindicatoren de primaire bron vormen.',
  },
  {
    name: 'Beoordeel elke maturiteitsindicator',
    text: 'Studeer elk stadium in van 0 tot 8. Lagere stadia duiden op vroege ontwikkeling, middelste stadia op adolescente rijping en hogere stadia op rijpe of bijna-rijpe bevindingen.',
  },
  {
    name: 'Interpreteer het interval, niet alleen de centrale leeftijd',
    text: 'Hanteer de minimum-, waarschijnlijke en maximumleeftijd in samenhang. Forensische leeftijdsbeoordeling moet worden uitgedrukt als een interval, aangezien biologische ontwikkeling individueel sterk varieert.',
  },
  {
    name: 'Controleer op discrepanties tussen indicatoren',
    text: 'Indien gebits-, skelet- en verstandskiesstadia naar uiteenlopende leeftijdsbereiken wijzen, behandel het resultaat dan als exploratief en verzamel aanvullend bewijs voordat u conclusies trekt.',
  },
];

const faq = [
  {
    question: 'Kan deze forensische leeftijdsschatter de wettelijke meerderjarigheid bepalen?',
    answer: 'Nee. Dit is een screeningscalculator voor educatief en triagegebruik. Wettelijke leeftijdsbepaling vereist gevalideerde lokale protocollen, bevoegde experts, gedocumenteerd identiteitsonderzoek en jurisdictiespecifieke normen.',
  },
  {
    question: 'Waarom toont het resultaat een leeftijdsinterval?',
    answer: 'Gebitsdoorbraak, skeletfusie en verstandskiesontwikkeling variëren per afkomst, voeding, gezondheid, geslacht, referentiepopulatie en beeldvormingsmethode. Een interval biedt een nauwkeuriger beeld dan een enkele exacte leeftijd.',
  },
  {
    question: 'Wat betekent "Gemengd bewijs"?',
    answer: 'Gemengd bewijs balanceert gebitsontwikkeling, skeletale maturiteit en verstandskiesstadium. Gebruik deze optie wanneer geen enkele indicator in het dossier significant betrouwbaarder is dan de andere.',
  },
  {
    question: 'Zijn verstandskiezen betrouwbaar voor elke zaak?',
    answer: 'Verstandskiezen zijn nuttig in de late adolescentie en jonge volwassenheid, maar vertonen een hoge variabiliteit. Ontbrekende verstandskiezen, pathologie, populatieverschillen en radiografische kwaliteit kunnen hun forensische waarde beperken.',
  },
  {
    question: 'Moet dit worden gebruikt voor echte casuïstiek?',
    answer: 'Alleen als voorlopig hulpmiddel. Bij echte casuïstiek moeten gevalideerde methoden, gekalibreerde referentiegegevens, onafhankelijke beoordeling en transparante rapportage van onzekerheid en beperkingen worden toegepast.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Forensisch casusbord',
    controls: 'Forensische leeftijdsregelaars',
    results: 'Forensische leeftijdsresultaten',
    maturityProfile: 'Dynamisch maturiteitsprofiel',
    screeningOnly: 'Screening schatting',
    evidenceType: 'Bewijsklemtoon',
    mixedEvidence: 'Gemengd bewijs',
    dentalPriority: 'Gebitsprioriteit',
    skeletalPriority: 'Skeletprioriteit',
    dentalStage: 'Gebitsontwikkelingsstadium',
    epiphysealStage: 'Epifysair fusiestadium',
    thirdMolarStage: 'Verstandskiesstadium',
    minimumAge: 'Minimum',
    likelyAge: 'Waarschijnlijk',
    maximumAge: 'Maximum',
    maturityScore: 'Maturiteitsscore',
    stageLabel: 'Stadium',
    ageUnit: 'jaar',
    dentalShort: 'Gebit',
    boneShort: 'Bot',
    molarShort: 'Molaar',
    dentalStageHelp: 'Kroon-, wortel- en apexvorming.',
    epiphysealStageHelp: 'Groeischijfsluiting en skeletfusie.',
    molarStageHelp: 'Verstandskiesmineralisatie en apexsluiting.',
    dentalStage0: 'Afwezig',
    dentalStage1: 'Knobbel',
    dentalStage2: 'Kroon',
    dentalStage3: 'Wortel begin',
    dentalStage4: 'Wortel helft',
    dentalStage5: 'Wortel lang',
    dentalStage6: 'Apex smal',
    dentalStage7: 'Apex sluitend',
    dentalStage8: 'Compleet',
    epiphysealStage0: 'Open',
    epiphysealStage1: 'Rand',
    epiphysealStage2: 'Vernauwing',
    epiphysealStage3: 'Brug',
    epiphysealStage4: 'Half gefuseerd',
    epiphysealStage5: 'Meestal gefuseerd',
    epiphysealStage6: 'Alleen lijn',
    epiphysealStage7: 'Bijna gesloten',
    epiphysealStage8: 'Gesloten',
    molarStage0: 'Afwezig',
    molarStage1: 'Knobbel',
    molarStage2: 'Kroon begin',
    molarStage3: 'Kroon volledig',
    molarStage4: 'Wortel begin',
    molarStage5: 'Wortel helft',
    molarStage6: 'Wortel lang',
    molarStage7: 'Apex sluitend',
    molarStage8: 'Compleet',
    confidenceexploratory: 'Exploratief',
    confidencemoderate: 'Matig',
    confidencestrong: 'Sterk',
    noteTriage: 'Gebruik als triageschatting, niet als wettelijke leeftijdsbepaling.',
    noteFinalAssessment: 'De uiteindelijke forensische leeftijdsbeoordeling moet radiologie, gebitsonderzoek, gedocumenteerde geschiedenis en jurisdictiespecifieke normen integreren.',
    noteWideInterval: 'De indicatoren verschillen meer dan vier jaar, dus het interval is verbreed.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensische leeftijdsschatter: gebits-, skelet- en verstandskies-screeningcalculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze forensische leeftijdsschatter voor een snelle, transparante organisatie van biologisch maturiteitsbewijs vóór een formele beoordeling. De calculator integreert gebitsontwikkeling, epifysaire fusie en het verstandskiesstadium tot een geschat leeftijdsinterval. De tool adresseert zoekopdrachten zoals <strong>forensische leeftijdsschattingscalculator</strong>, <strong>gebitsleeftijdsbeoordeling</strong> en <strong>skeletale maturiteitsschatting</strong>, waarbij gebruikers inzicht krijgen in de betekenis van indicatoren, de combinatie ervan en de gehanteerde onzekerheidsmarges.',
    },
    {
      type: 'paragraph',
      html: 'De uitkomst wordt bewust weergegeven als <strong>minimum-, waarschijnlijke en maximumleeftijd</strong>. Een puntschatting is vaak misleidend, daar biologische ontwikkeling sterk varieert door voeding, gezondheid, afkomst en omgevingsfactoren. Beschouw deze calculator als een gestructureerd screeningshulpmiddel en niet als een juridisch sluitend bewijs.',
    },
    {
      type: 'title',
      text: 'Wat de drie maturiteitsindicatoren betekenen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De schuifregelaars (0–8) bieden een praktische abstractie voor het vergelijken van verschillende biologische systemen. Stadium 0 duidt op zeer vroege of afwezige maturiteit; stadium 8 op volledige maturiteit. Deze stadia zijn niet gebonden aan één specifieke klinische methode, maar faciliteren cross-systeem vergelijkingen binnen een intervalschatting.',
    },
    {
      type: 'table',
      headers: ['Indicator', 'Beschrijving', 'Context', 'Voorzichtigheid'],
      rows: [
        ['Gebitsontwikkeling', 'Vorming en doorbraak (excl. verstandskiezen).', 'Primaire metriek voor kinderen en adolescenten.', 'Kan worden vertekend door gebitspathologie, extracties of populatiespecifieke verschillen.'],
        ['Epifysaire fusie', 'Progressieve sluiting van groeischijven.', 'Sleutelindicator voor late adolescentie en jonge volwassenheid.', 'Sterk afhankelijk van het geobserveerde bot, geslacht en gezondheidsstatus.'],
        ['Verstandskiesstadium', 'Vorming en rijping van verstandskiezen.', 'Cruciaal voor beoordeling in late adolescentie.', 'Zeer variabel; vereist zorgvuldige analyse van agenesie en impactie.'],
      ],
    },
    {
      type: 'title',
      text: 'Het leeftijdsinterval interpreteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beschouw de drie waarden in samenhang. De <strong>waarschijnlijke leeftijd</strong> is de gewogen centrale schatting op basis van de gekozen bewijsklemtoon. De <strong>minimum-</strong> en <strong>maximumwaarden</strong> definiëren de praktische onzekerheidsmarge. Overeenstemming tussen indicatoren versmalt de bandbreedte; tegenstrijdige signalen verbreden het interval en verlagen de betrouwbaarheidsscore.',
    },
    {
      type: 'table',
      headers: ['Resultaatpatroon', 'Interpretatie', 'Aanbevolen actie'],
      rows: [
        ['Smalle band / Sterk vertrouwen', 'Indicatoren stemmen overeen.', 'Documenteer bevindingen en evalueer of formele validatie vereist is.'],
        ['Matige band', 'Discrepantie of invloed van bewijsweging.', 'Verifieer beeldkwaliteit en stadietoewijzing.'],
        ['Brede exploratieve band', 'Indicatoren in conflict.', 'Vertrouw niet enkel op deze schatting; zoek aanvullende dossiers of specialistische beoordeling.'],
      ],
    },
    {
      type: 'title',
      text: 'Selectie van bewijsmodus',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Gemengd bewijs</strong> is de standaardmodus voor screening, omdat het alle indicatoren balanceert. Kies <strong>gebitsprioriteit</strong> bij uitzonderlijk robuuste gebitsdossiers. Kies <strong>skeletprioriteit</strong> wanneer radiografische skeletgegevens de meest complete dataset vormen. Deze modi verbeteren de kwaliteit van zwak bewijs niet, maar passen enkel de wiskundige weging aan.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gebitsprioriteit:</strong> wanneer gebitsontwikkeling duidelijk is gestageerd en verstandskiesgegevens beschikbaar zijn.',
        '<strong>Skeletprioriteit:</strong> wanneer epifysaire fusie het best gedocumenteerde maturiteitssignaal is.',
        '<strong>Gemengd bewijs:</strong> optimaal voor een gebalanceerd eerste overzicht.',
        '<strong>Vertrouwenslabel:</strong> gebruik dit om discrepanties te herkennen vóór interpretatie.',
      ],
    },
    {
      type: 'title',
      text: 'Forensische leeftijdsbepaling is geen identiteitsbewijs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Leeftijdsschatting is ondersteunend, nooit sluitend bewijs voor identiteit. In juridische of beschermingscontexten (zoals rampenidentificatie of migratie) is een multidisciplinaire aanpak essentieel. Verantwoorde rapporten moeten expliciet de gehanteerde methodiek, referentiepopulatie, waarnemerskwalificaties en bekende beperkingen vermelden.',
    },
    {
      type: 'paragraph',
      html: 'Deze tool is ontworpen voor <strong>educatie, triage en transparante communicatie</strong>. Het benadrukt waarom conclusies over leeftijd voorzichtig moeten zijn en waarom kritieke drempels (zoals de 18e verjaardag) nooit enkel op basis van een vereenvoudigde calculator mogen worden vastgesteld.',
    },
    {
      type: 'title',
      text: 'Forensische rapportagechecklist',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bronvermelding:</strong> Noteer expliciet of stadia zijn gebaseerd op gebitsonderzoek, panoramische X-stralen of skeletbeelden (hand-pols, clavicula, enz.).',
        '<strong>Ontbrekende/zwakke data:</strong> Documenteer afwezigheden, slechte beeldkwaliteit of anomalieën duidelijk.',
        '<strong>Methodologische validatie:</strong> Waarborg dat geselecteerde methoden erkend zijn binnen de lokale jurisdictie.',
        '<strong>Transparantie over onzekerheid:</strong> Rapporteer altijd een bereik en vermijd terminologie die een exacte chronologische leeftijd suggereert.',
        '<strong>Specialistische beoordeling:</strong> Risicovolle zaken moeten verplicht worden getoetst door forensische odontologen, radiologen of antropologen.',
      ],
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