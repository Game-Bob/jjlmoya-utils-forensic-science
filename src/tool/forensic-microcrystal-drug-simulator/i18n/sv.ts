import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensisk-mikrokristallin-drogtest-simulator';
const title = 'Forensisk Mikrokristallin Drogtest Simulator';
const description = 'Simulera pedagogiska mikrokristallina drogscreeningsmönster genom att kombinera misstänkta substanser med klassiska forensiska reagenser och jämföra kristallhabitus, tillväxthastighet och polarisationsljussvar.';

const howTo = [
  {
    name: 'Välj ett misstänkt prov',
    text: 'Välj kokain, heroin, amfetamin ou metamfetamin för att ladda en pedagogisk profil för det okända materialet.',
  },
  {
    name: 'Applicera ett mikrokristallint reagens',
    text: 'Växla mellan platinaklorid, guldklorid och Dragendorff-reagens för att se hur reagenskemi förändrar kristallmorfologin.',
  },
  {
    name: 'Justera simulerad polarisation',
    text: 'Flytta polarisationskontrollen för att öka eller minska dubbelbrytande kontrast i det virtuella mikroskopfältet.',
  },
  {
    name: 'Jämför det referensliknande resultatet',
    text: 'Använd habitusetiketten, matchningspoängen, tillväxthastigheten och tolkningsnoteringen för att avgöra om mönstret är referensliknande, partiellt eller ospecifikt.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Är mikrokristallina tester bekräftande för illegala droger?',
    answer: 'Nej. Mikrokristallina tester är presumtiva eller jämförande screeningsverktyg. Verklig identifiering av beslagtagna droger bör följa validerade scheman som inkluderar lämpliga kontroller och bekräftande instrumentella metoder som GC-MS, LC-MS eller infrarödspektroskopi.',
  },
  {
    key: 'faq-2',
    question: 'Varför ger olika reagenser olika kristallformer?',
    answer: 'Reagenset bildar salter, komplex eller fällningar med funktionella grupper i målföreningen. Löslighet, syrastyrka, koncentration, orenheter och torkningshastighet påverkar om det observerade habituset visas som nålar, rosetter, prisma, plattor eller svag spridning.',
  },
  {
    key: 'faq-3',
    question: 'Vad tillför polariserat ljus till mikrokristallin undersökning?',
    answer: 'Polariserat ljus kan öka kontrasten och avslöja dubbelbrytning, vilket gör kanter, förgreningar och intern kristallstruktur lättare att jämföra. Det tar inte bort behovet av referensstandarder och kontroller.',
  },
  {
    key: 'faq-4',
    question: 'Varför kan ett positivt utseende mönster fortfarande vara vilseledande?',
    answer: 'Streckmedel, blandningar, nedbrutet material, reagensålder, kontaminering och analytikerförväntan kan alla producera tvetydiga eller överlappande morfologier. Det är därför presumtiva resultat måste tolkas försiktigt.',
  },
  {
    key: 'faq-5',
    question: 'Kan den här simulatorn identifiera en okänd substans?',
    answer: 'Nej. Det är en pedagogisk visualisering av vanliga morfologikoncept. Den kan inte testa verkliga bevis, mäta kemi eller utfärda en laboratoriekonklusion.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Polariserat mikroskop',
    canvasAria: 'Animerat mikrokristallint tillväxtfält',
    sample: 'Misstänkt prov',
    sampleCocaine: 'Kokain',
    sampleHeroin: 'Heroin',
    sampleAmphetamine: 'Amfetamin',
    sampleMethamphetamine: 'Metamfetamin',
    reagent: 'Reagenshylla',
    reagentPlatinum: 'Platinaklorid',
    reagentGold: 'Guldklorid',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Polariserad kontrast',
    confidence: 'Matchning',
    growth: 'Tillväxt',
    birefringence: 'Dubbelbr.',
    regrow: 'Odla om kristaller',
    warningLabel: 'Forensisk varning',
    warningTitle: 'Screeningvarning',
    matchReference: 'Referensliknande',
    matchPartial: 'Partiell matchning',
    matchNonSpecific: 'Ospecifik',
    habitFeatheryNeedles: 'Fjäderlika nålbuntar',
    habitRosettes: 'Stjärnformiga rosetter',
    habitBranchingPrisms: 'Förgrenade prismer',
    habitPlates: 'Tunna plattor',
    habitWeakScatter: 'Gles ospecifik spridning',
    cueCocainePlatinumChloride: 'Fjäderlika och förgrenade nålbuntar är det förväntade pedagogiska mönstret för kokain med platinaklorid.',
    cueCocaineGoldChloride: 'Guldklorid kan bilda förgrenade orangebruna kristaller, men mönstret är mindre specifikt än med platinaklorid.',
    cueCocaineDragendorff: 'Dragendorff ger en svag alkaloidreaktion här; morfologi bör endast behandlas som screeningsinformation.',
    cueHeroinPlatinumChloride: 'Plattliknande avsättningar kan förekomma, men denna parning är inte en stark bekräftande pedagogisk matchning.',
    cueHeroinGoldChloride: 'Rosettkluster och avrundade stjärnformer är det referensliknande heroinmönstret i denna simulator.',
    cueHeroinDragendorff: 'Dragendorff producerar orange förgrenade prismer som är förenliga med en alkaloidscreening, inte ett identitetsbevis.',
    cueAmphetaminePlatinumChloride: 'Snabbt förgrenade prismer tyder på ett stimulantliknande pedagogiskt mönster under det valda reagenset.',
    cueAmphetamineGoldChloride: 'Gles kristallisering innebär att det visuella fyndet bör rapporteras som ospecifikt.',
    cueAmphetamineDragendorff: 'Nålsprayer växer snabbt och är användbara för att lära ut presumtiva amfetaminjämförelser.',
    cueMethamphetaminePlatinumChloride: 'Polariserade rosetter kan bildas, men resultatet förblir en presumtiv morfologijämförelse.',
    cueMethamphetamineGoldChloride: 'Tunna plattformar är synliga, även om överlappning med andra föreningar begränsar specificiteten.',
    cueMethamphetamineDragendorff: 'Täta orange förgrenade prismer ger den starkaste pedagogiska matchningen för metamfetamin i denna uppsättning.',
    disclaimer: 'Endast pedagogisk screeningsmodell. Verklig drogidentifiering kräver validerade referensstandarder, reagenskontroller, chain of custody och bekräftande instrumentell analys.',
  },
  seo: [
    {
      type: 'title',
      text: 'Mikrokristallin Drogtestning i Forensisk Vetenskap',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Pedagogisk simulator',
      title: 'Vad denna mikrokristallina simulator är till för',
      html: 'Detta verktyg förklarar hur klassiska forensiska mikrokristallina tester kan producera igenkännbara kristallhabitus efter att en misstänkt drog har blandats med ett reagens. Det hjälper studenter att jämföra <strong>kristallmorfologi</strong>, tillväxthastighet och polarisationsljuskontrast utan att behandla webbläsarresultatet som bevis.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'pedagogiska provprofiler', icon: 'mdi:flask-outline' },
        { value: '3', label: 'traditionella reagensalternativ', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'kristallhabitus modellerade', icon: 'mdi:shape-outline' },
        { value: '0', label: 'juridiska identifieringsanspråk', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Hur man Tolkar Kristallhabitus',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Praktisk jämförelsechecklista',
      items: [
        'Börja med en känd referensstandard och en blank reagenskontroll innan du jämför en okänd substans.',
        'Notera reagens, koncentration, droppstorlek, torktid, temperatur och mikroskopförstoring.',
        'Jämför det övergripande habituset först: nålar, rosetter, plattor, prismer, förgreningar eller svag spridning.',
        'Behandla partiell eller gles tillväxt som anledning till ytterligare testning, inte som en säker identifiering.',
      ],
    },
    {
      type: 'table',
      headers: ['Observerat habitus', 'Vanliga frågor från användare', 'Försiktig tolkning'],
      rows: [
        ['Fjäderlika nålar', 'Ser det här ut som kokain med platinaklorid?', 'Det kan vara en användbar pedagogisk matchning, men blandningar och reagensförhållanden kan förändra habituset.'],
        ['Rosetter', 'Är stjärnformiga kristaller diagnostiska?', 'Rosetter kan stödja en jämförelse när kontroller matchar, men de är inte tillräckliga ensamma.'],
        ['Förgrenade prismer', 'Varför växer stimulantscreeningar ofta snabbt?', 'Vissa salter nuklerar snabbt och förgrenar sig när lösningsmedlet avdunstar; hastighet är stödjande, inte bekräftande.'],
        ['Svag spridning', 'Betyder ett svagt mönster att ingen drog är närvarande?', 'Nej. Låg koncentration, orenheter, åldrat reagens eller dålig beredning kan hämma kristalltillväxt.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Mikrokristallin screening hjälper till med',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Snabb visuell jämförelse när en utbildad analytiker använder kontroller och referensmaterial.',
          points: ['Klassrumsdemonstrationer', 'Morfologivokabulär', 'Presumtiv triage', 'Jämförelse av reagenseffekt'],
        },
        {
          title: 'Mikrokristallin screening kan inte ersätta',
          icon: 'mdi:alert-circle-outline',
          description: 'Validerad bekräftande kemi för en verklig drogbeslagsslutsats.',
          points: ['Instrumentell bekräftelse', 'Ackrediterade procedurer', 'Matrisspecifik validering', 'Dokumentation av osäkerhet'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vetenskaplig Bakgrund om Mikrokristallin Testning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mikrokristallina tester representerar en historisk och mycket känslig klass av kemiska screeningsanalyser som används av forensiska kemister för att identifiera misstänkta substanser. När en liten mängd av ett drogprov löses i en syra och kombineras med ett specifikt tungmetallreagens, såsom guldklorid eller platinaklorid, fälls ett koordinationskomplex eller olösligt salt ut. Drogsubstansens molekylära struktur dikterar tillväxthastighet, orientering och symmetri hos de resulterande kristallerna, vilket ger karaktäristiska mikroskopiska former eller habitus.',
    },
    {
      type: 'paragraph',
      html: 'Att analysera dessa habitus under ett polariserande mikroskop gör det möjligt för forensiska undersökare att observera optiska egenskaper som dubbelbrytning, där kristallen delar ljuset i två strålar, vilket skapar levande färger och hög kontrast. Även om instrumentella metoder som gaskromatografi-masspektrometri till stor del har ersatt mikrokristallina tester för bekräftande identifiering, förblir mikrokristallin screening en värdefull teknik på grund av dess snabbhet, låga kostnad och förmåga att separera optiska isomerer som kan vara svåra att skilja med andra medel.',
    },
    {
      type: 'paragraph',
      html: 'I pedagogiska miljöer hjälper simulering av dessa reaktioner studenter att förstå förhållandet mellan kemiska reagenser och fysikalisk kristallmorfologi. Genom att observera hur kokain, heroin och olika amfetaminer reagerar på olika reagenser lär sig studenterna att ett enda positivt test inte är en slutgiltig forensisk konklusion. Korrekta drogscreeningsprotokoll kräver att man jämför okända prover med kända referensmaterial och utför reagensblindprover för att säkerställa giltigheten och specificiteten hos de observerade kristallmönstren.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kristallhabitus', definition: 'Den synliga formen eller tillväxtformen hos en kristall, såsom nålar, plattor, prismer eller rosetter.' },
        { term: 'Nukleation', definition: 'Den första bildningen av små kristallcentra från vilka större strukturer växer.' },
        { term: 'Dubbelbrytning', definition: 'Optiskt beteende som kan få kristaller att framstå som ljusare eller färgade under polariserat ljus.' },
        { term: 'Presumtivt test', definition: 'Ett screeningtest som antyder en möjlig klass eller förening men inte bevisar identiteten i sig själv.' },
        { term: 'Referensstandard', definition: 'Ett känt material som testats under samma förhållanden för att jämföra det okända mönstret.' },
      ],
    },
    {
      type: 'tip',
      title: 'Bästa praxis för verkliga bevis',
      html: 'Använd mikrokristallmorfologi som en undersökningslinje. Ett tillförlitligt arbetsflöde inkluderar blindprover, positiva kontroller, dokumentation av reagensålder, oberoende granskning vid behov och bekräftande testning under ett accepterat beslagsschema.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Forensisk varning',
      title: 'En vacker kristall är inte en juridisk identifiering',
      html: 'Simulatorn separerar medvetet en visuell matchningspoäng från en forensisk konklusion. Verkligt fallarbete måste ta hänsyn till blandningar, streckmedel, kontaminering, reagensprestanda, analytikerutbildning och validerade laboratorieprocedurer.',
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
