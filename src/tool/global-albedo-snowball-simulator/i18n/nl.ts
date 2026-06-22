import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'globale-albedo-sneeuwbal-simulator';
const title = 'Globale Albedo en Sneeuwbal Aarde Simulator';
const description = 'Verken de thermische stralingsbalans van de aarde, veranderingen in de zonneconstante, concentratie van broeikasgassen en ijs-albedo-terugkoppeling om te zien of ijskappen zich terugtrekken, stabiliseren of een sneeuwbalklimaat veroorzaken.';

const howTo = [
  {
    name: 'Inkomend zonlicht instellen',
    text: 'Verplaats de schuifregelaar van de zonneconstante om zwakkere jonge-zon-scenario\'s, huidig zonlicht op aarde of helderdere toekomstige forcering te testen.',
  },
  {
    name: 'Broeikasgasconcentratie aanpassen',
    text: 'Wijzig de concentratie van broeikasgassen om te zien hoe stralingsforcering concurreert met een hogere planetaire albedo.',
  },
  {
    name: 'De planeet met ijs bedekken',
    text: 'Begin met een kleine poolkap of een grote met ijs bedekte wereld. Het model doorloopt de terugkoppelingslus en toont of ijs zich uitbreidt of terugtrekt.',
  },
  {
    name: 'De klimaattoestand aflezen',
    text: 'Gebruik de temperatuur, geabsorbeerde straling, uiteindelijke ijsbedekking en de tijdlijncurve om gematigde, sneeuwbal- en broeikasresultaten te vergelijken.',
  },
];

const faq = [
  {
    question: 'Wat is ijs-albedo-terugkoppeling?',
    answer: 'IJs en sneeuw weerkaatsen meer zonlicht dan oceaan of land. Wanneer ijs zich uitbreidt, stijgt de planetaire albedo, daalt de geabsorbeerde zonne-energie en kan afkoeling leiden tot nog meer ijsvorming. Wanneer ijs zich terugtrekt, absorbeert het donkerdere oppervlak meer energie en versnelt de opwarming.',
  },
  {
    question: 'Wat betekent Sneeuwbal Aarde?',
    answer: 'Sneeuwbal Aarde is een hypothetische klimaattoestand waarin ijs lage breedtegraden of bijna mondiale bedekking bereikt. Geologisch bewijs suggereert dat de aarde dergelijke toestanden mogelijk heeft benaderd tijdens het Neoproterozoïcum.',
  },
  {
    question: 'Is dit een volledig klimaatmodel?',
    answer: 'Nee. Het is een compact energiebalansmodel om van te leren. Het negeert atmosferische circulatie, wolken, oceanisch warmtetransport, seizoenen, geografie en koolstofcyclus-terugkoppelingen, maar het vangt de kern van de stralingslogica van albedo-terugkoppeling.',
  },
  {
    question: 'Waarom kunnen broeikasgassen een sneeuwbaltoestand doorbreken?',
    answer: 'Broeikasgassen verminderen de uitgaande langgolvige koeling door stralingsforcering toe te voegen. In Sneeuwbal Aarde-scenario\'s kan vulkanische koolstofdioxide zich ophopen wanneer silicatenverwering vertraagt, wat de planeet uiteindelijk genoeg opwarmt om ijs op lage breedtegraden te smelten.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Klimaatregelaars',
    solarConstant: 'Zonneconstante',
    greenhouse: 'Broeikasgassen',
    initialIce: 'Initiële ijsbedekking',
    temperature: 'Evenwichtstemperatuur',
    absorbed: 'Geabsorbeerd zonlicht',
    finalIce: 'Uiteindelijke ijsbedekking',
    albedo: 'Planetaire albedo',
    forcing: 'Broeikasforcering',
    state: 'Klimaattoestand',
    timeline: 'IJsontwikkeling',
    years: 'modeljaren',
    snowball: 'Sneeuwbalvergrendeling',
    temperate: 'Gematigd evenwicht',
    hothouse: 'Broeikasterugtrekking',
    retreating: 'IJs trekt zich terug',
    advancing: 'IJs breidt zich uit',
    stable: 'Dicht bij evenwicht',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Stralingsdiagnostiek',
  },
  seo: [
    {
      type: 'title',
      text: 'Globale albedosimulator voor ijs-albedo-terugkoppeling en Sneeuwbal Aarde',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze simulator verkent een van de belangrijkste terugkoppelingslussen in het planetaire klimaat: het verband tussen ijsbedekking, reflectiviteit en geabsorbeerd zonlicht. Een planeet met helder ijs weerkaatst meer inkomende zonnestraling terug naar de ruimte. Die afkoeling kan het ijs behouden of uitbreiden, waardoor de albedo verder stijgt en het systeem richting een Sneeuwbal Aarde-toestand wordt geduwd. Een planeet met minder ijs absorbeert meer zonlicht, wat het ijsvrij maken kan versnellen.',
    },
    {
      type: 'paragraph',
      html: 'Gebruik de schuifregelaars om de zonneconstante, de concentratie van broeikasgassen en de initiële ijsbedekking te wijzigen. Het model doorloopt vervolgens een eenvoudige mondiale energiebalans en toont of het klimaat beweegt naar uitgebreide vergletsjering, een gematigd evenwicht of een hete toestand met weinig ijs. Het is ontworpen voor snelle intuïtie: elke regelaar is direct gekoppeld aan een fysische term in het stralingsbudget.',
    },
    {
      type: 'title',
      text: 'Hoe de energiebalans wordt geschat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De geabsorbeerde kortgolvige straling wordt geschat als S(1 - a) / 4, waarbij S de zonneconstante is en a de planetaire albedo. De deling door vier zet het zonlicht dat door de aardse schijf wordt onderschept om in een gemiddelde over het gehele bolvormige oppervlak. Hogere albedo verlaagt de geabsorbeerde energie; een hogere broeikasgasconcentratie voegt positieve stralingsforcering toe die de schatting van de oppervlaktetemperatuur verhoogt.',
    },
    {
      type: 'table',
      headers: ['Regelaar', 'Fysische betekenis', 'Klimaateffect'],
      rows: [
        ['Zonneconstante', 'Inkomende stellaire energie in een baan om de aarde', 'Hogere waarden verwarmen de planeet en doen ijs krimpen.'],
        ['Broeikasgassen', 'Langgolvige stralingsforcering ten opzichte van een referentieatmosfeer', 'Hogere waarden maken sneeuwbalvergrendeling moeilijker.'],
        ['Initiële ijsbedekking', 'Startreflectiviteit van de planeet', 'Hoge waarden kunnen op hol geslagen afkoeling veroorzaken via albedo-terugkoppeling.'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom albedo-terugkoppeling niet-lineair kan worden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De ijs-albedo-lus is geen zachte eenrichtingsaanpassing. Zodra ijs een voldoende deel van de planeet bereikt, kan het helderdere oppervlak zoveel geabsorbeerd zonlicht wegnemen dat het zomersmeltzwak wordt. In de tegenovergestelde richting stelt terugtrekkend ijs donkerdere oceaan en land bloot, waardoor de absorptie toeneemt en de planeet van vergletsjering wegduwt. Daarom kunnen vergelijkbare forceringen verschillende uitkomsten produceren, afhankelijk van de initiële ijsbedekking.',
    },
    {
      type: 'paragraph',
      html: 'De echte aarde voegt veel complicaties toe: wolken, stof op ijs, oceanisch warmtetransport, continentale posities, seizoensgebonden zonlicht, zee-ijs dynamiek en de koolstofcyclus. Een eenvoudig model heeft nog steeds waarde omdat het het eerste-orde stralingsbudget isoleert. Het laat je zien waarom Sneeuwbal Aarde-hypothesen afhangen van zowel zwak zonlicht of hoge albedo-triggers als latere broeikasgasopbouw om te ontsnappen.',
    },
    {
      type: 'title',
      text: 'Interpretatie van de simulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sneeuwbalvergrendeling:</strong> de uiteindelijke ijsbedekking is zeer hoog en de evenwichtstemperatuur blijft ver onder het vriespunt.',
        '<strong>Gematigd evenwicht:</strong> het model stabiliseert met gedeeltelijke ijsbedekking en matige geabsorbeerde straling.',
        '<strong>Broeikasterugtrekking:</strong> ijs stort in tot een zeer kleine fractie terwijl de broeikasforcering en het geabsorbeerde zonlicht hoog blijven.',
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
