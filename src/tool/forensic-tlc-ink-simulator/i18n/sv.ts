import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensisk-tlc-kromatografisimulator-blaeck';
const title = 'Forensisk TLC kromatografisimulator för bläck';
const description = 'Simulera tunnskiktskromatografi av ifrågasatt skriftbläck, visualisera lösningsmedelsfrontens utveckling, separera färgämnesband och beräkna exakta Rf-värden för varje pigment.';

const howTo = [
  {
    name: 'Välj det ifrågasatta bläcket eller referenspennan',
    text: 'Välj bläcket från kravbrevet eller profilen för en misstänkt penna. Varje bläck innehåller olika färgämneskomponenter med olika polaritet och affinitet till den stationära fasen.',
  },
  {
    name: 'Välj mobil fas',
    text: 'Ändra lösningsmedelssystemet för att se hur lösningsmedlets polaritet förändrar kapillärutvecklingen och den relativa vandringen för varje färgämnesband.',
  },
  {
    name: 'Framkalla TLC-plattan',
    text: 'Flytta reglaget för framkallningstid och se lösningsmedelsfronten stiga på plattan medan separerade band framträder ovanför startlinjen.',
  },
  {
    name: 'Läs av Rf-tabellen',
    text: 'Jämför avståndet för varje pigment med avståndet för lösningsmedelsfronten. Simulatorn beräknar Rf-värdet som pigmentavståndet delat med lösningsmedelsfrontens avstånd.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Vad betyder Rf inom tunnskiktskromatografi?',
    answer: 'Rf är retentionsfaktorn: det avstånd som föreningen färdats delat med det avstånd som lösningsmedelsfronten färdats från samma startlinje. Det är enhetslöst och ligger normalt mellan 0 och 1.',
  },
  {
    key: 'faq-2',
    question: 'Kan TLC bevisa att två bläckprover kom från samma penna?',
    answer: 'Nej. TLC kan visa om färgämnesmönster är överensstämmande eller icke-överensstämmande, medans ursprungsbestämning kräver validerade jämförelsemetoder, kontroller, dokumentation och expertbedömning.',
  },
  {
    key: 'faq-3',
    question: 'Varför ändras bandmönstret när man byter lösningsmedel?',
    answer: 'Färgämnen fördelar sig olika mellan den stationära fasen och den mobila fasen. Ett lösningsmedel med en bättre polaritetsmatchning kan bära ett färgämne längre, vilket ökar dess Rf-värde.',
  },
  {
    key: 'faq-4',
    question: 'Varför är startlinjen viktig?',
    answer: 'Både lösningsmedelsfrontens avstånd och pigmentets avstånd måste mätas från startlinjen. Att mäta från plattans botten ger felaktiga Rf-värden.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Tunnskiktskromatografikammare med framkallningsplatta',
    rulerAria: 'Virtuell millimeterlinjal för att mäta lösningsmedelsfront och pigmentband',
    rulerMarks: '80,60,40,20,0',
    units: 'Enhetssystem',
    metric: 'Metrisk',
    imperial: 'Imperial',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'min',
    inkSample: 'Bläckprov',
    ransomNote: 'Ifrågasatt kravbrevbläck',
    bluePen: 'Beslagtagen blå kulspetspenna',
    blackPen: 'Beslagtagen svart kulspetspenna',
    gelPen: 'Beslagtagen gelpenna',
    solventSystem: 'Mobil fas',
    ethanolWater: 'Etanol / vatten',
    butanolAcetic: 'Butanol / ättiksyra',
    isopropanolAmmonia: 'Isopropanol / ammoniak',
    developmentTime: 'Framkallningstid',
    frontDistance: 'Lösningsmedelsvandring',
    matchScore: 'Mönsterlikhet',
    solventFront: 'Lösningsmedelsfront',
    originLine: 'Startlinje',
    pigment: 'Pigmentband',
    pigmentCyanDye: 'cyanfärgämne',
    pigmentVioletDye: 'violettfärgämne',
    pigmentGrayCarrier: 'grå bärare',
    pigmentNavyDye: 'marinblått färgämne',
    pigmentYellowDye: 'gult färgämne',
    pigmentRedDye: 'rött färgämne',
    pigmentBlueDye: 'blått färgämne',
    pigmentDarkBinder: 'mörkt bindemedel',
    pigmentTealDye: 'turkosblått färgämne',
    pigmentMagentaDye: 'magentafärgämne',
    pigmentGelBinder: 'gelbindemedel',
    distance: 'Avstånd',
    rfValue: 'Rf-värde',
    disclaimer: 'Endast pedagogisk simulering. Forensisk bläckjämförelse kräver originaldokument, validerade laboratoriemetoder, referensstandarder och kvalificerade dokumentundersökare.',
  },
  seo: [
    {
      type: 'title',
      text: 'Tunnskiktskromatografi för forensisk bläckjämförelse',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Pedagogisk simulator',
      title: 'Vad denna TLC bläcksimulator hjälper dig att förstå',
      html: 'Detta verktyg förklarar hur <strong>tunnskiktskromatografi av skriftbläck</strong> kan separera en synlig bläcklinje yn flera färgämnesband. Det är utformat för studenter inom forensisk vetenskap, blivande dokumentundersökare och alla som vill förstå hur Rf-värden beräknas från en framkallad TLC-platta.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d band / d lösningsmedel', label: 'formel för retentionsfaktor', icon: 'mdi:division' },
        { value: '4', label: 'jämförda bläckprofiler', icon: 'mdi:pen' },
        { value: '3', label: 'simulerade mobila faser', icon: 'mdi:flask-outline' },
        { value: '2', label: 'metriska och imperiala avläsningar', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklista för korrekt TLC mätning',
      items: [
        'Markera startlinjen ovanför lösningsmedelsnivån innan framkallningen startar.',
        'Ta ut plattan innan lösningsmedlet når den övre kanten.',
        'Markera lösningsmedelsfronten omedelbart eftersom den kan avdunsta eller bli svår att se.',
        'Mät pigmentvandring och lösningsmedelsvandring från samma startlinje.',
        'Rapportera Rf-värden tillsammans med lösningsmedelssystem, platt-typ, framkallningsförhållanden och kontroller.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vad TLC kan stödja',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'TLC kan visa om ifrågasatta och kända bläck har liknande färgseparation under samma förhållanden.',
          points: ['Screeningjämförelse', 'Visualisering av färgämnesmönster', 'Rf-dokumentation', 'Val av prover för konfirmatorisk analys'],
        },
        {
          title: 'Vad TLC inte kan bevisa ensamt',
          icon: 'mdi:alert-circle-outline',
          description: 'TLC i sig kan inte unikt identifiera en penna, datumbestämma ett dokument eller bevisa författarskap.',
          points: ['Ingen unik källattribuering', 'Ingen identifiering av skribent', 'Ingen åldersbestämning som standard', 'Inget substitut för validerade protokoll'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Vanlig fråga', 'Inblandat TLC-koncept', 'Noggrant svar'],
      rows: [
        ['Hur beräknar man Rf?', 'Färgämnets avstånd delat med lösningsmedelsfrontens avstånd.', 'Mät båda från startlinjen och dela sedan. Resultatet är enhetslöst.'],
        ['Varför delar bläck upp sig i färger?', 'Olika färgämnen har olika affinitet för den stationära och mobila fasen.', 'Ett enda skrivet streck kan innehålla flera färgämnen som vandrar med olika hastighet.'],
        ['Kan två pennor ha samma TLC-mönster?', 'Ja, liknande formuleringar kan producera snarlika mönster.', 'Likhet stöder överensstämmelse, inte individualisering till en specifik penna.'],
        ['Varför ändrades mitt Rf-värde?', 'Lösningsmedel, platta, luftfuktighet, mättnad, temperatur och punktstorlek påverkar vandringen.', 'Rf-värden är endast jämförbara när förhållandena är kontrollerade och dokumenterade.'],
      ],
    },
    {
      type: 'title',
      text: 'Hur simulatorn modellerar separation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Modellen behandlar lösningsmedelsfrontens rörelse som en kapillärprocess som avtar med tiden, medan varje färgämne tilldelas ett Rf-value baserat på två förenklade egenskaper: dess affinitet för det rörliga lösningsmedlet och dess polaritetsmatchning med den valda mobila fasen. Detta är avsiktligt pedagogiskt snarare än avancerad kemi, men det bevarar det grundläggande förhållande som användarna behöver lära sig: lösningsmedlet rör sig först, färgämnen fördelar sig mellan faserna och Rf beräknas från uppmätta vandringsavstånd.',
    },
    {
      type: 'paragraph',
      html: 'Tunnskiktskromatografi är en allmänt accepterad analytisk teknik i forensiska laboratorier på grund av dess enkelhet, snabbhet och kostnadseffektivitet. I samband med dokumentundersökning används den främst för att jämföra färgämnessammansättningen i olika bläckprover. Forensiska analytiker extraherar ett litet bläckprov från ett ifrågasatt dokument med en skalpell eller en hålnål, löser upp det i ett lämpligt lösningsmedel som pyridin eller metanol och applicerar det på TLC plattan tillsammans med referensbläckstandarder.',
    },
    {
      type: 'paragraph',
      html: 'När plattan väl har framkallats i en stängd kammare separeras bläckets enskilda komponenter baserat på deras olika fördelning mellan den stationära kiselgelfasen och den mobila lösningsmedelsfasen. Det resulterande kromatogrammet ger ett visuellt fingeravtryck av bläcket och visar tydliga färgband på specifika höjder. Dokumentundersökare beräknar sedan retentionsfaktorn för varje synligt färgämnesband, vilket hjälper till att avgöra om det ifrågasatta bläcket är kemiskt överensstämmande med en misstänkt penna eller om det matchar ett känt märke och formel i en referensdatabas.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stationär fas', definition: 'Skiktet på TLC-plattan, vanligtvis kiselgel, som interagerar med föreningar och fördröjer deras rörelse.' },
        { term: 'Mobil fas', definition: 'Lösningsmedelssystemet som stiger genom plattan och bär med sig färgämneskomponenterna.' },
        { term: 'Startlinje', definition: 'Blyertslinjen där bläckprovet appliceras före framkallning.' },
        { term: 'Lösningsmedelsfront', definition: 'Den högsta punkten som nås av den mobila fasen innan plattan tas ut.' },
        { term: 'Rf-värde', definition: 'Retentionsfaktorn: föreningens vandringsavstånd delat med lösningsmedelsfrontens vandringsavstånd.' },
      ],
    },
    {
      type: 'tip',
      title: 'Praktiskt tolkningstips',
      html: 'Vid forensisk dokumentundersökning kan en avvikelse vara särskilt användbar eftersom den kan utesluta en kandidatpenna. Ett överensstämmande TLC-mönster är svagare: det visar bara att proverna är kemiskt samstämmiga under de förhållandena, inte att de nödvändigtvis kommer från samma penna.',
    },
    {
      type: 'proscons',
      title: 'Styrkor och begränsningar med TLC bläckjämförelse',
      items: [
        { pro: 'Snabb, billig och visuellt intuitiv för att separera bläckfärgämnen.', con: 'Vanligtvis destruktiv eftersom ett litet prov måste tas från dokumentet.' },
        { pro: 'Rf-värden skapar ett strukturerat sätt att jämföra ifrågasatta och kända prover.', con: 'Rf-värden förskjuts när lösningsmedel, platta, luftfuktighet och framkallningsförhållanden ändras.' },
        { pro: 'Användbar som screeningmetod före mer avancerad analys.', con: 'Kan inte ge en unik slutsats om bläckkälla utan bredare bevisning.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensisk varning',
      title: 'Övervärdera inte bläckkromatografi',
      html: 'En webbläsarsimulering kan inte undersöka papper, bläckålder, extraktionskemi, plattkvalitet, kontaminering eller ge instrumentell bekräftelse. Använd den för att lära dig mätlogik och tolkningsgränser, och lita sedan på validerade metoder för forensisk dokumentundersökning för verkliga bevis.',
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
