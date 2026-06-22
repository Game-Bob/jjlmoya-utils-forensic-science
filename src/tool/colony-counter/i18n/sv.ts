const howTo = [
    {
      name: 'Förbered bilden av plattan',
      text: 'Placera din petriskål mot en mörk bakgrund eller använd en ljusbord så att kolonierna kontrasterar tydligt.',
    },
    {
      name: 'Identifiera kolonityper',
      text: 'Använd olika markeringsfärger för att gruppera kolonier efter morfologi, färg eller storlek.',
    },
    {
      name: 'Markera varje koloni',
      text: 'Klicka på varje synlig koloni. Verktyget numrerar automatiskt varje klick för att förhindra upprepning eller missade kolonier.',
    },
    {
      name: 'Beräkna slutkoncentration',
      text: 'Ange spridd volym och utspädningsfaktor för att få slutresultatet i CFU/ml eller CFU/g.',
    },
  ];
const faq = [
    {
      question: 'Vad är CFU-räkning?',
      answer: 'Kolonibildande enheter (CFU) är ett mått som uppskattar antalet livsdugliga bakterier eller svampceller i ett prov. Man antar att varje synlig koloni härstammar från en enskild cell eller grupp av celler.',
    },
    {
      question: 'Varför är en digital räknare bättre än manuell räkning?',
      answer: 'Digital räkning undviker mänskliga fel som att "tappa bort sig" när man markerar kolonier visuellt. Vårt verktyg tillåter dessutom differentiering av kolonityper med färger, vilket underlättar analys av blandplattor.',
    },
    {
      question: 'Hur beräknas CFU per milliliter?',
      answer: 'Antalet räknade kolonier multipliceras med den inverterade utspädningsfaktorn. Om du till exempel räknar 30 kolonier i en 1:100 utspädning innehåller originalprovet 3000 CFU/ml.',
    },
    {
      question: 'När anses en platta vara "oräknelig"?',
      answer: 'Inom standardmikrobiologi anses plattan vara för tät (Too Numerous To Count, TNTC) om det finns fler än 250-300 kolonier, och data blir otillförlitliga på grund av konkurrens mellan kolonierna.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'koloniraknare';
const title = 'Koloniräknare: Digitalt CFU räknevertkyg för petriskålar';
const description = 'Digitalt verktyg för att räkna bakteriekolonier på petriskålar. Differentiera typer, undvik fel och beräkna CFU med precision.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Klicka för att ladda upp din petriskål',
    uploadSubtitle: 'Ladda upp ett foto av din platta och börja räkna kolonier',
    currentModeLabel: 'Nuvarande läge',
    typeA: 'Typ A',
    typeB: 'Typ B',
    colonyType: 'Kolonityp',
    counting: 'Räknar',
    totalCFU: 'Totalt CFU',
    undo: 'Ångra senaste',
    clearAll: 'Rensa allt',
    infoClick: 'Klicka på plattan för att markera kolonier',
    infoChange: 'Byt typ innan du markerar',
    confirmClear: 'Är du säker på att du vill rensa alla markerade kolonier?',
  },
  seo: [
    {
      type: 'title',
      text: 'Digital mikrobiologi: Exakt koloniräkning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att räkna bakteriekolonier på petriskålar är en grundläggande teknik inom mikrobiologi. Traditionellt utförs det med en manuell räknare och penna, men det är lätt att räkna fel eller markera samma koloni två gånger. Detta digitala verktyg eliminerar dessa fel och möjliggör visuell differentiering mellan kolonityper.',
    },
    {
      type: 'title',
      text: 'Varför koloniräkning är viktigt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antalet kolonier på en platta är direkt proportionellt mot koncentrationen av livsdugliga mikroorganismer i det ursprungliga provet. Dessa data är kritiska inom:',
    },
    {
      type: 'list',
      items: [
        '<strong>Livsmedelskontroll:</strong> Detektera bakteriell kontaminering.',
        '<strong>Läkemedelsforskning:</strong> Utvärdera antibiotikas effektivitet.',
        '<strong>Klinisk diagnostik:</strong> Kvantifiera infektioner i patientprover.',
        '<strong>Bioteknik:</strong> Optimera produktionskulturer för rekombinanta proteiner.',
      ],
    },
    {
      type: 'title',
      text: 'Kolonibildande enheter (CFU)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Varje synlig koloni på en platta antas härstamma från en enda livsduglig cell. Det är därför de kallas <strong>CFU</strong> (Colony Forming Units).',
    },
    {
      type: 'paragraph',
      html: '<strong>Koncentrationsformel:</strong><br><code>CFU/mL = (Antal räknade kolonier × Utspädningsfaktor) / Spridd volym</code>',
    },
    {
      type: 'title',
      text: 'Bästa praxis för räkning',
      level: 3,
    },
    {
      type: 'title',
      text: 'Räknebart intervall',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Det ideala intervallet för manuell räkning är <strong>30 till 300 kolonier</strong> per platta. Under 30 är det statistiska felet för högt. Över 300 börjar kolonier smälta samman och individuell urskiljning blir omöjlig.',
    },
    {
      type: 'title',
      text: 'Kolonityper',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'På selektiva eller differentiella medier är det vanligt att se flera kolonimorfologier:',
    },
    {
      type: 'list',
      items: [
        '<strong>Typ A (Blågrön/Grön):</strong> Stora, mukoida kolonier, typiska för gramnegativa laktosfermenterande bakterier.',
        '<strong>Typ B (Rosa/Lila):</strong> Små, genomskinliga kolonier, icke-fermenterare.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Vårt verktyg tillåter differentiering av upp till två kolonityper med distinkta färger, vilket underlättar differentiell räkning utan behov av fysiska markörer.',
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

