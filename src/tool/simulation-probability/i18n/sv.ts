const slug = 'simuleringssannolikhetskalkylator';
const description = 'Analysera om vår verklighet är en simulering med hjälp av Nick Bostroms trilemma-argument. Beräkna existentiell sannolikhet med 4 nyckelparametrar.';
const title = 'Simuleringssannolikhetskalkylator: Lever du i ett virtuellt universum?';
const howTo = [
    {
      name: 'Justera teknisk utveckling',
      text: 'Uppskatta sannolikheten att mänskligheten når posthuman nivå. 50% är neutralt; öka om du tror att AI och datorer kommer att fortsätta utvecklas exponentiellt.',
    },
    {
      name: 'Ställ in överlevnadsgrad',
      text: 'Överväg sannolikheten att mänskligheten inte förstör sig själv. Faktorer i krig, klimatförändringar, pandemier. Höga värden = optimism om vår framtid.',
    },
    {
      name: 'Utvärdera intresse för att simulera',
      text: 'Om mänskligheten når posthuman nivå, skulle den vilja skapa simuleringar av sitt förflutna? Överväg motiv: vetenskaplig forskning, underhållning, historiskt bevarande.',
    },
    {
      name: 'Tolka resultatet',
      text: 'Observera hur sannolikheterna ändras. Resultat > 90% tyder på att simulering är nästan oundviklig om antagandena uppfylls. Lek med parametrarna för att utforska olika framtider.',
    },
  ];
const faq = [
    {
      question: 'Vad exakt är Bostroms argument?',
      answer: 'Nick Bostrom föreslår att om en posthumansk civilisation har tillräckligt med datorkraft kan den skapa miljontals simuleringar av tidigare universum. Om det sker skulle antalet simulerade varelser vara massivt högre än ursprungliga biologiska varelser. Statistiskt sett är det därför mer troligt att du är simulerad än ursprunglig.',
    },
    {
      question: 'Betyder höga sannolikheter att vi definitivt är en simulering?',
      answer: 'Nej. Höga sannolikheter tyder på att det är en seriös möjlighet som måste övervägas, men det är inte ett bevis. Argumentet bygger på antaganden om teknikens framtid som kanske inte uppfylls.',
    },
    {
      question: 'Hur skulle vetskapen om att vi är en simulering påverka oss?',
      answer: 'Filosofiskt sett hävdar många att det inte förändrar något fundamentalt. Om du och dina nära och kära simuleras tillsammans förblir era upplevelser, känslor och relationer verkliga och kända. Den levda erfarenheten är det som betyder något, inte substratet.',
    },
    {
      question: 'Finns det vetenskapliga bevis för att vi är i en simulering?',
      answer: 'Det finns inga avgörande bevis. Vissa fysiker pekar på anomalier i kvantmekaniken (kvantisering, sammanflätning) som möjliga "beräkningsoptimeringar", men dessa är spekulativa tolkningar.',
    },
    {
      question: 'Vilket värde ska jag tilldela "N" (simuleringsskala)?',
      answer: 'Det beror på din övertygelse om datorernas framtid. Låga värden (100-1000) förutsätter resursbegränsningar. Höga värden (miljoner) förutsätter praktiskt taget obegränsad datorkraft. De flesta vetenskapliga diskussioner använder värden mellan 1000 och 1 biljon.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopierad',
    noHistory: 'Ingen historik',
    load: 'Ladda',
    delete: 'Radera',
    simulationParameters: 'Simuleringsparametrar',
    fpLabel: 'fp',
    fpSub: 'Teknisk utveckling',
    flLabel: 'fl',
    flSub: 'Artens överlevnad',
    fiLabel: 'fi',
    fiSub: 'Intresse för att simulera',
    nLabel: 'N',
    nSub: 'Simuleringsskala',
    probabilityTitle: 'Simuleringssannolikhet',
    trilemmaResult: 'Trilemma Verdict',
    scenario1: 'Scenario 1: Utrotning',
    scenario2: 'Scenario 2: Ointresse',
    scenario3: 'Scenario 3: Vi är simulerade',
    fpDescription: 'Sannolikhet att mänskligheten uppnår den tekniska förmågan att simulera universum med medvetande.',
    flDescription: 'Sannolikhet att undvika kollaps (utrotning, krig) innan man når posthuman nivå.',
    fiDescription: 'Procentandel avancerade civilisationer som beslutar sig för att skapa simuleringar av sina förfäder.',
    nDescription: 'Antal simulerade världar som varje avancerad civilisation vanligtvis kör samtidigt.',
    verdictDetail: 'Data tyder på att det är extremt troligt att ditt medvetande är en mjukvaruprocess.',
  },
  seo: [
    {
      type: 'title',
      text: 'Lever vi i en simulering? Vetenskapen bakom Nick Bostroms argument',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Idén att vår verklighet kan vara en konstgjord konstruktion, en extremt avancerad datorsimulering, har gått från science fiction till en seriös filosofisk och vetenskaplig debatt. År 2003 publicerade filosofen Nick Bostrom vid Oxfords universitet en artikel med titeln <em>"Are You Living in a Computer Simulation?"</em>, där han föreslog ett trilemma-argument som utmanar vår uppfattning om existensen.',
    },
    {
      type: 'paragraph',
      html: 'Denna simuleringssannolikhetskalkylator använder nyckelparametrar härledda från Bostroms hypotes för att uppskatta möjligheten att ditt medvetande i själva verket är resultatet av en mjukvaruprocess som körs av en posthumansk civilisation.',
    },
    {
      type: 'title',
      text: 'Grundpelarna i simuleringsargumentet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bostroms argument säger inte att vi är i en simulering, utan att minst ett av följande tre påståenden nästan säkert är sant:',
    },
    {
      type: 'list',
      items: [
        '<strong>Förtida utrotning:</strong> Mänskligheten kommer att dö ut innan den når ett posthumant stadium som kan köra simuleringar av förfäder.',
        '<strong>Tekniskt ointresse:</strong> En posthumansk civilisation kommer inte att ha något intresse av att köra simuleringar av sina förfäder av etiska eller rekreativa skäl.',
        '<strong>Allestädes närvarande simulering:</strong> Vi lever nästan säkert i en simulering eftersom antalet simulerade sinnen massivt överstiger antalet ursprungliga biologiska sinnen.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man tolkar parametrarna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För att använda detta verktyg korrekt är det viktigt att förstå vad modellvariablerna representerar:',
    },
    {
      type: 'table',
      headers: ['Variabel', 'Koncept', 'Innebörd'],
      rows: [
        ['<strong>fp</strong>', 'Teknisk utveckling', 'Sannolikhet att en civilisation når kapaciteten att simulera sinnen.'],
        ['<strong>fl</strong>', 'Överlevnadsgrad', 'Sannolikhet att civilisationen inte förstör sig själv innan den når den punkten.'],
        ['<strong>fi</strong>', 'Intresse för att simulera', 'Procentandel civilisationer som beslutar sig för att använda sin kraft för att skapa virtuella världar.'],
        ['<strong>N</strong>', 'Simuleringsskala', 'Totalt antal simuleringar som en enda posthumansk civilisation skulle skapa.'],
      ],
    },
    {
      type: 'title',
      text: 'Varför är sannolikheten vanligtvis så hög?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om vi antar att en posthumansk civilisation skulle ha enorm datorkraft (som den hos en Dyson-sfär eller en Jupiter-hjärna), kan numret <strong>N</strong> (simuleringar) vara i miljarder. Om <em>N</em> är mycket stort, kommer antalet simulerade varelser att överstiga de ursprungliga varelserna med många storleksordningar, även med låga värden på intresse (<em>fi</em>).',
    },
    {
      type: 'title',
      text: 'Bevis och beräkningsbegränsningar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Från kvantfysik till kosmologi, letar vissa forskare efter "glitchar" eller gränser i upplösningen av vår verklighet. Om universum har en minsta längd (Planck-längd) eller beteenden som ser ut som kodoptimeringar (som kvantsammanflätning), får hypotesen anhängare inom digital fysik.',
    },
    {
      type: 'title',
      text: 'Etisk reflektion',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om vi upptäckte att vi är en simulering, skulle vår moral förändras? För Bostrom är det upplevelsen av medvetande som räknas. Ett simulerat sinne lider och älskar precis som ett biologiskt.',
    },
    {
      type: 'title',
      text: 'Användningsområden för kalkylatorn',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Naturvetenskaplig utbildning:</strong> Förstå sannolikhetsmodeller tillämpade på kosmologi.',
        '<strong>Samtida filosofi:</strong> Utforska Bostroms trilemma interaktivt.',
        '<strong>Futurologi:</strong> Analysera artens överlevnadsgrads inverkan på vårt öde.',
        '<strong>Existentiell nyfikenhet:</strong> Utvärdera dina egna övertygelser om teknikens framtid.',
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

