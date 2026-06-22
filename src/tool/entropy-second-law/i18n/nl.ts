import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'entropie-tweede-wet-simulator';
const title = 'Entropie en Tweede Wet van de Thermodynamica Simulator';
const description = 'Bekijk hoe hete en koude deeltjeskamers zich vermengen, gelijkmatig worden en de entropie doen stijgen met een visuele diffusiesimulator en een live entropiegrafiek.';

const howTo = [
  {
    name: 'Stel de linker- en rechtertemperatuur in',
    text: 'Kies een koudere kamer en een warmere kamer om een initiële thermische onbalans te creëren. Grotere verschillen maken de onomkeerbare benadering van evenwicht beter zichtbaar.',
  },
  {
    name: 'Pas de barrièreopening aan',
    text: 'Open of versmal de doorgang tussen de twee kamers. Een bredere opening laat deeltjes en energie sneller diffunderen, waardoor de entropiecurve sneller stijgt.',
  },
  {
    name: 'Observeer de deeltjesbox',
    text: 'Blauwe deeltjes staan voor beweging met lagere energie en oranje deeltjes voor beweging met hogere energie. Naarmate botsingen en oversteken toenemen, wordt de box gemengder en minder geordend.',
  },
  {
    name: 'Lees de entropiegrafiek',
    text: 'Volg hoe ruimtelijke vermenging en thermische equalisatie samenkomen in één stijgende entropiescore. De curve is bedoeld om intuïtie op te bouwen voor waarom geïsoleerde systemen naar waarschijnlijkere macrotoestanden evolueren.',
  },
];

const faq = [
  {
    question: 'Waarom stijgt entropie in deze simulator?',
    answer: 'De begintoestand is kunstmatig geordend: de ene kant is kouder, de andere warmer. Zodra de barrière uitwisseling toestaat, zijn er veel meer gemengde arrangementen dan gescheiden arrangementen, dus beweegt het systeem van nature naar de overweldigend waarschijnlijkere macrotoestand.',
  },
  {
    question: 'Bewijst dit de tweede wet exact?',
    answer: 'Nee. Dit is een didactisch deeltjesmodel, geen moleculaire dynamica laboratoriumcode. Het vangt de kernintuïtie achter onomkeerbare diffusie en thermische equalisatie, wat de zoekintentie is van de meeste gebruikers die vragen waarom entropie de neiging heeft te stijgen.',
  },
  {
    question: 'Wat betekenen ruimtelijke entropie en thermische entropie hier?',
    answer: 'Ruimtelijke entropie meet hoe gelijkmatig deeltjes zijn verdeeld over de linker- en rechterkamer. Thermische entropie meet in deze simulator hoe klein de energieklloof tussen de twee helften is. De totaalscore combineert beide zodat gebruikers vermenging en warmtestroom tegelijk kunnen zien.',
  },
  {
    question: 'Waarom blijven de deeltjes bewegen, zelfs nabij evenwicht?',
    answer: 'Evenwicht betekent niet dat beweging stopt. Het betekent dat de macroscopische onbalans verdwijnt. Moleculen bewegen, botsen en wisselen nog steeds energie uit, maar er is geen aanhoudende grootschalige richting meer om te benutten.',
  },
  {
    question: 'Kan entropie ooit tijdelijk dalen?',
    answer: 'In microscopische systemen zijn kleine fluctuaties mogelijk. Deze visuele tool vlakt die fluctuaties uit en benadrukt de algehele statistische trend: in een groot geïsoleerd systeem zijn laag-entropie geordende toestanden enorm veel minder waarschijnlijk dan gemengde toestanden.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Onomkeerbare vermenging',
    results: 'Entropiesimulator resultaten',
    particleBox: 'Deeltjesdiffusiebox',
    barrier: 'Barrière',
    entropyGraph: 'Entropie in de tijd grafiek',
    liveTrace: 'Live trace',
    highEntropy: 'hoog',
    midEntropy: 'midden',
    lowEntropy: 'laag',
    controls: 'Entropiesimulator bediening',
    leftTemperature: 'Linker temperatuur',
    rightTemperature: 'Rechter temperatuur',
    gateAperture: 'Barrièreopening',
    pause: 'Pauze',
    reset: 'Reset toestand',
    resume: 'Hervat',
    totalEntropy: 'Totale entropie',
    particleBalance: 'Deeltjes links/rechts',
    spatialEntropy: 'Ruimtelijke entropie',
    thermalEntropy: 'Thermische entropie',
    energyGap: 'Energieklloof',
    noteLabel: 'Interpretatie',
    stateGradient: 'Gradiënt',
    stateMixing: 'Menging',
    stateEquilibrium: 'Evenwicht',
    note: 'Macrotoestandwaarschijnlijkheid wijst naar maximale wanorde.',
  },
  seo: [
    {
      type: 'title',
      text: 'Entropiesimulator voor de tweede wet van de thermodynamica en onomkeerbare diffusie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze entropiesimulator om een van de belangrijkste ideeën in de natuurkunde te visualiseren: geïsoleerde systemen evolueren van kunstmatig geordende toestanden naar waarschijnlijkere gemengde toestanden. In plaats van een statische definitie van entropie te lezen, kunt u een hete kamer en een koude kamer in realtime deeltjes en energie zien uitwisselen terwijl een live curve de stijging van wanorde bijhoudt.',
    },
    {
      type: 'paragraph',
      html: 'Dit hulpmiddel is ontworpen voor de meest voorkomende zoekintentie achter vragen zoals "waarom neemt entropie toe", "hoe werkt de tweede wet" en "wat is thermische diffusie". Het doel is niet alleen een slogan over wanorde te geven, maar entropie te verbinden met waarschijnlijkheid, warmtestroom, menging en evenwicht op een manier die direct zichtbaar aanvoelt.',
    },
    {
      type: 'title',
      text: 'Wat de tweede wet van de thermodynamica in praktische termen betekent',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De tweede wet zegt dat voor een geïsoleerd systeem spontane processen naar macrotoestanden met hogere entropie bewegen. In alledaagse taal betekent dat een sterk georganiseerde thermische opstelling, zoals hete deeltjes aan de ene kant en koude deeltjes aan de andere kant, niet gescheiden blijft tenzij er continu arbeid wordt geleverd om het in stand te houden.',
    },
    {
      type: 'paragraph',
      html: 'Dat gebeurt niet omdat materie "chaos verkiest" in een mystieke zin. Het gebeurt omdat er enorm veel meer microscopische arrangementen zijn die overeenkomen met een gemengde toestand dan met een gescheiden toestand. Entropie verbindt daarom thermodynamica met tellen: hoe groter het aantal compatibele microtoestanden, hoe groter de entropie.',
    },
    {
      type: 'title',
      text: 'Hoe deze entropie-diffusiesimulator werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De deeltjesbox start in een laag-entropie configuratie met een temperatuuronevenwicht over een barrière. Wanneer de doorgang tussen de kamers open is, steken deeltjes over, botsen ze en dragen ze energie van de ene kant naar de andere. De simulatie volgt twee intuïtieve ingrediënten: <strong>ruimtelijke entropie</strong>, die toeneemt naarmate deeltjes minder gesegregeerd raken, en <strong>thermische entropie</strong>, die toeneemt naarmate de linker- en rechterenergieverdelingen minder verschillend worden.',
    },
    {
      type: 'paragraph',
      html: 'De totale entropiescore die op het scherm wordt getoond, is een onderwijsproxy die is opgebouwd uit die twee ingrediënten. Het is geen laboratorium-grade toestandsfunctie en beweert niet de volledige statistische mechanica te reproduceren. Het doel is gebruikers te helpen de juiste intuïtie op te bouwen: onomkeerbare warmtestroom en diffusie bewegen beide het systeem naar evenwicht omdat evenwicht overeenkomt met veel meer toegankelijke arrangementen.',
    },
    {
      type: 'table',
      headers: ['Visueel signaal', 'Wat het vertegenwoordigt', 'Waarom het belangrijk is'],
      rows: [
        ['Blauwe vs oranje deeltjes', 'Relatieve kinetische energie', 'Toont dat temperatuurverschillen eigenlijk verschillen in gemiddelde microscopische beweging zijn.'],
        ['Barrièreopening', 'Gemak van uitwisseling tussen kamers', 'Laat zien waarom de diffusiesnelheid verandert wanneer het transportpad verandert.'],
        ['Ruimtelijke entropiemeter', 'Hoe gelijkmatig deeltjes verspreid zijn', 'Verklaart dat mengen alleen al de macrotoestand waarschijnlijker maakt.'],
        ['Thermische entropiemeter', 'Hoe klein de links-rechts energieklloof wordt', 'Toont dat evenwicht niet alleen over positie gaat maar ook over het delen van energie.'],
        ['Entropiecurve', 'Trend over tijd', 'Verandert het abstracte idee van onomkeerbaarheid in een zichtbaar eenrichtingsrelaxatieproces.'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom entropie kan stijgen terwijl elk deeltje eenvoudige beweging gehoorzaamt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Studenten nemen vaak aan dat de tweede wet wrijving, intentie of een speciale "pijl van de tijd kracht" vereist. Het diepere punt is statistisch. Elk deeltje volgt lokale regels, maar wanneer veel deeltjes interageren, domineert het aantal gemengde macrotoestanden het aantal geordende macrotoestanden volledig. Het systeem brengt daarom bijna al zijn tijd door in gemengde configuraties en slechts een extreem klein deel in netjes gescheiden configuraties.',
    },
    {
      type: 'paragraph',
      html: 'Daarom verspreidt een druppel kleurstof zich in water, waarom een kamer in temperatuur equaliseert nadat een verwarming is uitgeschakeld, en waarom een heet voorwerp afkoelt in contact met een kouder voorwerp. Het omgekeerde proces is niet verboden door Newtoniaanse beweging in strikt microscopische zin, maar het is zo statistisch onwaarschijnlijk voor grote systemen dat het effectief nooit wordt waargenomen op menselijke schaal.',
    },
    {
      type: 'title',
      text: 'Entropie, evenwicht en veelvoorkomende misvattingen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Entropie is niet zomaar "rommeligheid":</strong> het preciezere idee is het aantal microscopische arrangementen dat compatibel is met dezelfde macroscopische beschrijving.',
        '<strong>Evenwicht betekent niet stilstand:</strong> deeltjes blijven constant bewegen, maar hun grootschalige onevenwichtigheden heffen elkaar op.',
        '<strong>Warmtestroom is directioneel omdat waarschijnlijkheid directioneel is:</strong> er zijn overweldigend meer manieren om energie te delen dan om het scherp gescheiden te houden.',
        '<strong>Lage entropie is niet onmogelijk:</strong> het vereist eenvoudigweg beperkingen, voorbereiding of arbeid van buiten het geïsoleerde systeem.',
        '<strong>Deze simulator is kwalitatief:</strong> het geeft fysische intuïtie, geen exacte calorimetrie, partitiefuncties of moleculaire transportcoëfficiënten.',
      ],
    },
    {
      type: 'title',
      text: 'Wanneer deze simulator te gebruiken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gebruik het voor klassikale demonstraties, natuurkundeherhalingen, scheikundeonderwijs, wetenschappelijk schrijven en snelle conceptuele uitleg. Het is vooral nuttig wanneer iemand begrijpt dat warmte van warm naar koud stroomt, maar nog niet ziet hoe dat verbonden is met waarschijnlijkheid, macrotoestandtelling en de tweede wet van de thermodynamica.',
    },
    {
      type: 'paragraph',
      html: 'Als uw doel een rigoureuze thermodynamische berekening is voor een echt gas, motorcyclus of laboratoriumsysteem, heeft u toestandsvergelijkingen, randvoorwaarden en experimenteel onderbouwde parameters nodig. Als uw doel intuïtie is voor waarom diffusie onomkeerbaar is en waarom entropie de neiging heeft te stijgen, dan is deze simulator precies voor die vraag gebouwd.',
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
