import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'global-albedo-snoboll-simulator';
const title = 'Global Albedo och Snöbollsjorden Simulator';
const description = 'Utforska jordens termiska strålningsbalans, förändringar i solkonstanten, växthusgaskoncentration och is-albedo-återkoppling för att se om istäcken drar sig tillbaka, stabiliseras eller utlöser ett snöbollsklimat.';

const howTo = [
  {
    name: 'Ställ in inkommande solljus',
    text: 'Flytta reglaget för solkonstanten för att testa svagare ung-sol-scenarier, nuvarande solljus på jorden eller starkare framtida forcering.',
  },
  {
    name: 'Justera växthusgaskoncentrationen',
    text: 'Ändra växthusgaskoncentrationen för att se hur strålningsforcering konkurrerar med högre planetarisk albedo.',
  },
  {
    name: 'Plantera is på planeten',
    text: 'Börja med en liten polarkalott eller en stor istäckt värld. Modellen itererar återkopplingsslingan och visar om isen avancerar eller drar sig tillbaka.',
  },
  {
    name: 'Läs av klimattillståndet',
    text: 'Använd temperaturen, absorberad strålning, slutlig istäckning och tidslinjekurvan för att jämföra tempererade, snöbolls- och växthusutfall.',
  },
];

const faq = [
  {
    question: 'Vad är is-albedo-återkoppling?',
    answer: 'Is och snö reflekterar mer solljus än hav eller land. När isen expanderar ökar den planetariska albedon, absorberad solenergi minskar och avkylning kan tillåta att ännu mer is bildas. När isen drar sig tillbaka absorberar den mörkare ytan mer energi och uppvärmningen accelererar.',
  },
  {
    question: 'Vad betyder Snöbollsjorden?',
    answer: 'Snöbollsjorden är ett hypotetiskt klimattillstånd där is når låga breddgrader eller nästan global täckning. Geologiska bevis tyder på att jorden kan ha närmat sig sådana tillstånd under neoproterozoikum.',
  },
  {
    question: 'Är detta en komplett klimatmodell?',
    answer: 'Nej. Det är en kompakt energibalansmodell för lärande. Den ignorerar atmosfärisk cirkulation, moln, oceanisk värmetransport, årstider, geografi och kolets kretslopp, men den fångar den centrala strålningslogiken i albedo-återkoppling.',
  },
  {
    question: 'Varför kan växthusgaser bryta ett snöbollstillstånd?',
    answer: 'Växthusgaser minskar utgående långvågig avkylning genom att tillföra strålningsforcering. I Snöbollsjorden-scenarier kan vulkanisk koldioxid ackumuleras när vittring av silikat långsammare, vilket så småningom värmer upp planeten tillräckligt för att smälta is på låga breddgrader.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Klimatreglage',
    solarConstant: 'Solkonstanten',
    greenhouse: 'Växthusgaser',
    initialIce: 'Inledande istäckning',
    temperature: 'Jämviktstemperatur',
    absorbed: 'Absorberat solljus',
    finalIce: 'Slutlig istäckning',
    albedo: 'Planetarisk albedo',
    forcing: 'Växthusforcering',
    state: 'Klimattillstånd',
    timeline: 'Isutveckling',
    years: 'modellår',
    snowball: 'Snöbollslåsning',
    temperate: 'Tempererad balans',
    hothouse: 'Växthusreträtt',
    retreating: 'Is drar sig tillbaka',
    advancing: 'Is avancerar',
    stable: 'Nära jämvikt',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Strålningsdiagnostik',
  },
  seo: [
    {
      type: 'title',
      text: 'Global albedosimulator för is-albedo-återkoppling och Snöbollsjorden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna simulator utforskar en av de viktigaste återkopplingsslingorna i planetariskt klimat: kopplingen mellan istäckning, reflektivitet och absorberat solljus. En planet med ljus is reflekterar mer inkommande solstrålning tillbaka till rymden. Den avkylningen kan bevara eller expandera isen, vilket höjer albedon ytterligare och trycker systemet mot ett Snöbollsjorden-tillstånd. En planet med mindre is absorberar mer solljus, vilket kan påskynda deglaciation.',
    },
    {
      type: 'paragraph',
      html: 'Använd reglagen för att ändra solkonstanten, växthusgaskoncentrationen och inledande istäckning. Modellen itererar sedan en enkel global energibalans och visar om klimatet rör sig mot omfattande glaciation, en tempererad jämvikt eller ett varmt lågistillstånd. Den är designad för snabb intuition: varje reglage mappar direkt till en fysisk term i strålningsbudgeten.',
    },
    {
      type: 'title',
      text: 'Hur energibalansen uppskattas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den absorberade kortvågiga strålningen uppskattas som S(1 - a) / 4, där S är solkonstanten och a är planetarisk albedo. Divisionen med fyra omvandlar solljus som fångas upp av jordens skiva till ett medelvärde över hela den sfäriska ytan. Högre albedo sänker absorberad energi; högre växthusgaskoncentration lägger till positiv strålningsforcering som höjer skattningen av yttemperaturen.',
    },
    {
      type: 'table',
      headers: ['Reglage', 'Fysisk betydelse', 'Klimateffekt'],
      rows: [
        ['Solkonstanten', 'Inkommande stjärnenergi vid jordens omloppsbana', 'Högre värden värmer planeten och minskar isen.'],
        ['Växthusgaser', 'Långvågig strålningsforcering relativt en referensatmosfär', 'Högre värden gör snöbollslåsning svårare.'],
        ['Inledande istäckning', 'Startreflektivitet hos planeten', 'Höga värden kan utlösa skenande avkylning genom albedo-återkoppling.'],
      ],
    },
    {
      type: 'title',
      text: 'Varför albedo-återkoppling kan bli olinjär',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Is-albedo-slingan är inte en skonsam envägsjustering. När isen når tillräckligt stor del av planeten kan den ljusare ytan ta bort så mycket absorberat solljus att sommarsmältningen blir svag. I motsatt riktning exponerar retirerande is mörkare hav och land, vilket ökar absorptionen och trycker planeten bort från glaciation. Det är därför liknande forcering kan producera olika utfall beroende på den inledande istäckningen.',
    },
    {
      type: 'paragraph',
      html: 'Verkliga jorden lägger till många komplikationer: moln, damm på is, oceanisk värmetransport, kontinentala positioner, säsongsbetonat solljus, havsisdynamik och kolets kretslopp. En enkel modell har fortfarande värde eftersom den isolerar första ordningens strålningsbudget. Den låter dig se varför Snöbollsjorden-hypoteser beror på både svagt solljus eller högalbedotriggers och senare växthusgasuppbyggnad för flykt.',
    },
    {
      type: 'title',
      text: 'Tolkning av simulatorn',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Snöbollslåsning:</strong> slutlig istäckning är mycket hög och jämviktstemperaturen förblir långt under fryspunkten.',
        '<strong>Tempererad balans:</strong> modellen stabiliseras med partiell istäckning och måttlig absorberad strålning.',
        '<strong>Växthusreträtt:</strong> is kollapsar till en mycket liten andel medan växthusforcering och absorberat solljus förblir höga.',
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
