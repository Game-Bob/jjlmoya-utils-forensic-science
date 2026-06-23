import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dental-skeletal-third-molar-age-estimator';
const title = 'Tand-, skelett- och visdomstandsåldersskattare';
const description = 'Uppskatta ett forensiskt åldersintervall baserat på tandutveckling, skelettmognad och visdomstandsindikatorer för screening och falltriage.';

const howTo = [
  {
    name: 'Välj bevisbetoning',
    text: 'Välj "Blandade bevis" för en balanserad triage, "Tandprioritet" när tandfynd är mer robusta, eller "Skelettprioritet" när radiografiska skelettindikatorer utgör den primära källan.',
  },
  {
    name: 'Poängsätt varje mognadsindikator',
    text: 'Gradera varje stadium från 0 till 8. Lägre stadier representerar tidig utveckling, mellersta stadier representerar adolescent mognad, och högre stadier representerar mogna eller nästan mogna fynd.',
  },
  {
    name: 'Interpretera intervallet, inte bara den centrala åldern',
    text: 'Betrakta minimi-, sannolik och maximiålder tillsammans. Forensisk åldersbedömning bör alltid uttryckas som ett intervall, eftersom biologisk utveckling varierar individuellt.',
  },
  {
    name: 'Kontrollera diskrepanser mellan indikatorer',
    text: 'Om tand-, skelett- och visdomstandsstadier pekar på avvikande åldersintervall, bör resultatet behandlas som explorativt och kompletterande bevis sökas innan slutsatser dras.',
  },
];

const faq = [
  {
    question: 'Kan denna forensiska åldersskattare fastställa juridisk myndighetsålder?',
    answer: 'Nej. Detta är ett screeningsverktyg för utbildnings- och triageändamål. Juridisk åldersbestämning kräver validerade lokala protokoll, kvalificerade experter, formell identitetsdokumentation och strikt efterlevnad av jurisdiktionsspecifika standarder.',
  },
  {
    question: 'Varför visas resultatet som ett åldersintervall?',
    answer: 'Tandframbrott, skelettfusion och visdomstandsutveckling påverkas av härkomst, nutrition, hälsostatus, kön, referenspopulation och bildtagningsmetod. Ett intervall ger en mer korrekt och transparent bild av den biologiska variabiliteten än en enskild punktskattning.',
  },
  {
    question: 'Vad betyder "Blandade bevis"?',
    answer: 'Läget "Blandade bevis" väger samman indata från tandutveckling, skelettmognad och visdomstandsstadier. Använd detta läge när ingen enskild indikator är klart mer tillförlitlig eller komplett för det specifika fallet.',
  },
  {
    question: 'Är visdomständer tillförlitliga i alla fall?',
    answer: 'Visdomständer är värdefulla i sen adolescens och ung vuxen ålder, men uppvisar hög variabilitet. Faktorer som agenesi (saknade anlag), patologi, populationsspecifika särdrag och radiografisk kvalitet kan avsevärt begränsa deras diagnostiska nytta.',
  },
  {
    question: 'Bör detta verktyg användas för formell ärendehantering?',
    answer: 'Det bör endast fungera som ett preliminärt stöd. Formell forensisk ärendehantering kräver validerade metoder, kalibrerade referensdata, oberoende expertgranskning samt transparent redovisning av osäkerheter och begränsningar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Forensisk falltavla',
    controls: 'Forensiska åldersreglage',
    results: 'Forensiska åldersresultat',
    maturityProfile: 'Dynamisk mognadsprofil',
    screeningOnly: 'Screeningsuppskattning',
    evidenceType: 'Bevisbetoning',
    mixedEvidence: 'Blandade bevis',
    dentalPriority: 'Tandprioritet',
    skeletalPriority: 'Skelettprioritet',
    dentalStage: 'Tandutvecklingsstadium',
    epiphysealStage: 'Epifysfusionsstadium',
    thirdMolarStage: 'Visdomstandsstadium',
    minimumAge: 'Minimum',
    likelyAge: 'Sannolik',
    maximumAge: 'Maximum',
    maturityScore: 'Mognadspoäng',
    stageLabel: 'Stadium',
    ageUnit: 'år',
    dentalShort: 'Tand',
    boneShort: 'Ben',
    molarShort: 'Molar',
    dentalStageHelp: 'Krona-, rot- och apexbildning.',
    epiphysealStageHelp: 'Slutning av tillväxtplattor och skelettfusion.',
    molarStageHelp: 'Visdomstandsmineralisering och apiceslutning.',
    dentalStage0: 'Saknas',
    dentalStage1: 'Spets',
    dentalStage2: 'Krona',
    dentalStage3: 'Rot början',
    dentalStage4: 'Rot halv',
    dentalStage5: 'Rot lång',
    dentalStage6: 'Apex smal',
    dentalStage7: 'Apex sluts',
    dentalStage8: 'Fullständig',
    epiphysealStage0: 'Öppen',
    epiphysealStage1: 'Kant',
    epiphysealStage2: 'Förträngning',
    epiphysealStage3: 'Bro',
    epiphysealStage4: 'Halv fusionerad',
    epiphysealStage5: 'Mestadels fusionerad',
    epiphysealStage6: 'Endast linje',
    epiphysealStage7: 'Nästan sluten',
    epiphysealStage8: 'Sluten',
    molarStage0: 'Saknas',
    molarStage1: 'Spets',
    molarStage2: 'Krona början',
    molarStage3: 'Krona full',
    molarStage4: 'Rot början',
    molarStage5: 'Rot halv',
    molarStage6: 'Rot lång',
    molarStage7: 'Apex sluts',
    molarStage8: 'Fullständig',
    confidenceexploratory: 'Explorativ',
    confidencemoderate: 'Måttlig',
    confidencestrong: 'Stark',
    noteTriage: 'Använd som triageuppskattning; ej som juridisk åldersbestämning.',
    noteFinalAssessment: 'Slutlig forensisk åldersbedömning måste integrera radiologi, klinisk tandundersökning, anamnes och jurisdiktionsspecifika standarder.',
    noteWideInterval: 'Indikatorer avviker med mer än fyra år; intervallet har breddats.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensisk åldersskattare: Tand-, skelett- och visdomstandsscreening',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna forensiska åldersskattare erbjuder ett transparent ramverk för att organisera biologiska mognadsbevis före en formell bedömning. Verktyget integrerar tandutveckling, epifysfusion och visdomstandsstadier för att generera ett estimerat åldersintervall. Det adresserar sökningar såsom <strong>forensisk åldersskattning</strong>, <strong>tandmognadsbedömning</strong> och <strong>skelettåldersuppskattning</strong>, och hjälper användaren att förstå hur indikatorer kombineras och vilken osäkerhet som föreligger.',
    },
    {
      type: 'paragraph',
      html: 'Resultaten presenteras som <strong>minimi-, sannolik och maximiålder</strong>. Punktskattningar är ofta missvisande då biologisk utveckling varierar kraftigt på grund av nutrition, hälsa, härkomst och miljöfaktorer. Detta verktyg bör betraktas som ett strukturerat screeninghjälpmedel, inte som ett definitivt juridiskt utlåtande.',
    },
    {
      type: 'title',
      text: 'Förståelse för mognadsindikatorer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mognadsskalorna (0–8) ger en praktisk abstraktion för att jämföra olika biologiska system. Stadium 0 signalerar tidig eller frånvarande mognad, medan stadium 8 representerar fullständighet. Dessa stadier ersätter inte namngivna kliniska metoder utan möjliggör en korsreferensanalys.',
    },
    ,
    {
      type: 'table',
      headers: ['Indikator', 'Beskrivning', 'Kontext', 'Varning'],
      rows: [
        ['Tandutveckling', 'Bildning och frambrott (exkl. visdomständer).', 'Primär mätare för barn och ungdomar.', 'Kan snedvridas av tandsjukdom, extraktioner eller populationsspecifika skillnader.'],
        ['Epifysfusion', 'Progressiv slutning av tillväxtplattor.', 'Nyckelindikator för sen adolescens och ung vuxen ålder.', 'Starkt beroende av specifikt ben, kön och hälsostatus.'],
        ['Visdomstandsstadium', 'Bildning och mognad av visdomständer.', 'Kritiskt för bedömning av unga vuxna.', 'Hög variabilitet; kräver noggrann analys av agenesi och retention.'],
      ],
    },
    {
      type: 'title',
      text: 'Att tolka åldersintervallet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Betrakta alla tre värden tillsammans. Den <strong>sannolika åldern</strong> utgör den viktade centrala skattningen baserat på vald bevisbetoning. <strong>Minimum-</strong> och <strong>maximumvärdena</strong> definierar osäkerhetsbandet. Överensstämmelse mellan indikatorer resulterar i ett snävare band; motstridiga signaler breddar intervallet och sänker förtroendegraden.',
    },
    {
      type: 'table',
      headers: ['Mönster', 'Antydan', 'Åtgärd'],
      rows: [
        ['Smal intervall / Starkt förtroende', 'Indikatorer stämmer överens.', 'Dokumentera fynd och bedöm om formell validering krävs.'],
        ['Måttligt intervall', 'Oenighet eller viktning påverkar resultatet.', 'Verifiera bildkvalitet och stadietilldelning.'],
        ['Brett explorativt intervall', 'Indikatorer i konflikt.', 'Lita inte enbart på denna skattning; sök kompletterande dokumentation eller specialistgranskning.'],
      ],
    },
    {
      type: 'title',
      text: 'Val av bevisläge',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Blandade bevis</strong> är standardläget, vilket balanserar alla indikatorer. Välj <strong>tandprioritet</strong> när tandjournaler är exceptionellt robusta. Välj <strong>skelettprioritet</strong> när radiografiska skelettfynd utgör den mest omfattande datapunkten. Dessa lägen förbättrar inte kvaliteten på svaga bevis, utan justerar endast den matematiska viktningen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Tandprioritet:</strong> använd när tandutveckling är tydligt stadieindelad och visdomstandsdata finns tillgängliga.',
        '<strong>Skelettprioritet:</strong> använd när epifysfusion är den bäst dokumenterade signalen.',
        '<strong>Blandade bevis:</strong> idealiskt för en balanserad initial screening.',
        '<strong>Förtroendelabel:</strong> bevaka denna för att identifiera diskrepanser före tolkning.',
      ],
    },
    {
      type: 'title',
      text: 'Forensiska begränsningar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Åldersuppskattning är ett stöd, aldrig ett slutet identitetsbevis. I juridiska eller skyddsmässiga sammanhang — såsom identifiering av katastrofoffer eller migrationsärenden — måste bedömningar vara multidisciplinära. Ansvariga rapporter måste detaljera den specifika metoden, referenspopulationen, observatörens kvalifikationer och kända begränsningar.',
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg är utformat för <strong>utbildning, triage och transparent kommunikation</strong>. Det förstärker varför åldersslutsatser kräver försiktighet och varför kritiska trösklar — såsom 18-årsdagen — aldrig bör avgöras enbart av en förenklad kalkylator.',
    },
    {
      type: 'title',
      text: 'Checklista för forensisk rapportering',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Källdokumentation:</strong> Notera uttryckligen om stadier baseras på tandundersökning, panoramarröntgen eller skelettbildtagning (t.ex. hand-handled, klavikel).',
        '<strong>Saknade/svaga data:</strong> Dokumentera tydligt avvikelser, dålig bildkvalitet eller anomalier.',
        '<strong>Metodologisk validering:</strong> Säkerställ att valda metoder är erkända inom den lokala jurisdiktionen.',
        '<strong>Osäkerhetshantering:</strong> Presentera alltid ett intervall; undvik språk som antyder exakt kronologisk ålder.',
        '<strong>Specialistgranskning:</strong> Högriskärenden måste valideras av forensiska odontologer, radiologer eller antropologer.',
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