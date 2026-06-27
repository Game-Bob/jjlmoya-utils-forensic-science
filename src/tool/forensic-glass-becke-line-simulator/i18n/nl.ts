import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'becke-lijn-glas-brekingsindex-simulator';
const title = 'Forensische Glas Brekingsindex Becke lijn Simulator';
const description = 'Simuleer de Becke-lijn methode voor forensische glasvergelijking door een immersievloeistof te verwarmen, brekingsindices te matchen en de heldere halo te zien verdwijnen.';

const howTo = [
  {
    name: 'Selecteer een betwist glasprofiel',
    text: 'Kies een veelvoorkomend glasreferentieprofiel zoals natronkalkglas, borosilicaatglas, loodkristal of gehard vensterglas.',
  },
  {
    name: 'Pas de temperatuur van de verwarmbare objecttafel aan',
    text: 'Verschuif de temperatuurregelaar om de brekingsindex van de virtuele immersievloeistof te veranderen.',
  },
  {
    name: 'Observeer de beweging van de Becke-lijn',
    text: 'Gebruik de focusrichtingsknop om te zien of de heldere lijn naar binnen of naar buiten beweegt, of bijna verdwijnt op het matchpunt.',
  },
  {
    name: 'Lees het indexverschil af',
    text: 'Vergelijk vloeistof-RI, glas-RI, delta-RI en matchpercentage om te begrijpen waarom de halo zwakker wordt in de buurt van indexovereenstemming.',
  },
];

const faq = [
  {
    question: 'Wat is de Becke-lijn bij forensische glasanalyse?',
    answer: 'De Becke-lijn is een heldere halo (lichtrand) die te zien is nabij de grens tussen een glasfragment en een immersievloeistof wanneer hun brekingsindices verschillen. De beweging tijdens het scherpstellen helpt bepalen welk materiaal de hoogste brekingsindex heeft.',
  },
  {
    question: 'Waarom is het verwarmen van de immersievloeistof belangrijk?',
    answer: 'De brekingsindex van veel immersievloeistoffen daalt naarmate de temperatuur stijgt. Door de vloeistof te verwarmen tot de index overeenkomt met die van het glas, vervaagt het contrast op de grens en wordt de rand van het fragment moeilijk zichtbaar.',
  },
  {
    question: 'Kan brekingsindex op zichzelf een glasbron identificeren?',
    answer: 'Nee. RI kan klasse-vergelijking en uitsluiting ondersteunen, maar forensische broninterpretatie houdt ook rekening met elementsamenstelling, dikte, kleur, breukcontext, controles, onzekerheid en gevalideerde laboratoriumprocedures.',
  },
  {
    question: 'Wat betekent het als de Becke-lijn verdwijnt?',
    answer: 'Het betekent dat de vloeistof en het glas onder die gesimuleerde omstandigheden zeer vergelijkbare brekingsindices hebben. In de echte microscopie wordt het verdwijnen beoordeeld met gekalibreerde temperatuurregeling en referentiematerialen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Virtueel microscoopbeeld dat een glasfragment in immersievloeistof toont',
    units: 'Temperatuureenhedensysteem',
    metric: 'Metrisch',
    imperial: 'Imperiaal',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Glasreferentie',
    sodaLime: 'Natronkalk-verpakkingsglas',
    borosilicate: 'Borosilicaat-laboratoriumglas',
    leadCrystal: 'Loodkristal-decoratieglas',
    tempered: 'Gehard vensterglas',
    stageTemperature: 'Temperatuur objecttafel',
    focusDirection: 'Focusrichting',
    focusRaised: 'Focus omhoog',
    focusLowered: 'Focus omlaag',
    liquidRi: 'Vloeistof RI',
    glassRi: 'Glas RI',
    deltaRi: 'Delta RI',
    matchMeter: 'RI-overeenkomst',
    canvasHalo: 'zichtbare Becke-halo',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'rand bijna gelijk',
    interpMatched: 'De grens is dicht bij een optische match. Bij een echte Becke-lijntest is dit het gebied waar de halo zwak wordt en de fragmentrand het moeilijkst te lokaliseren is.',
    interpGlassHigher: 'Het glas heeft de hogere brekingsindex. Bij een verhoogde focus geeft het gedrag van de Becke-lijn aan dat het licht zich concentreert naar de glaszijde van de grens.',
    interpLiquidHigher: 'De immersievloeistof heeft de hogere brekingsindex. De halo verschuift naar de vloeistofzijde totdat de temperatuur de vloeistofindex dichter bij het glas brengt.',
    disclaimer: 'Uitsluitend educatieve simulatie. Echte forensische glasvergelijking vereist gekalibreerde brekingsindexapparatuur, bekende standaarden, onzekerheidsrapportage en gekwalificeerde interpretatie.',
  },
  seo: [
    {
      type: 'title',
      text: 'Becke-lijn brekingsindextest voor forensisch glas',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Educatieve simulator',
      title: 'Wat deze glas RI simulator aantoont',
      html: 'Deze simulator laat zien waarom een glasfragment min of meer zichtbaar wordt in immersieolie naarmate de brekingsindex van de vloeistof de brekingsindex van het glas nadert. Het is gemaakt voor studenten forensische wetenschappen die <strong>Becke-lijnmicroscopie</strong> leren, RI-matching met verwarmbare tafels en de limieten van glasvergelijkingsbewijs.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n glas - n vloeistof', label: 'getoond indexcontrast', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'bereik van de verwarmbare tafel', icon: 'mdi:thermometer' },
        { value: '4', label: 'glasprofielen', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'converteerbare temperatuureenheden', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktische checklist voor het observeren van de Becke lijn',
      items: [
        'Gebruik een schoon, klein glasfragment dat volledig is ondergedompeld in een geschikte brekingsindexvloeistof.',
        'Stel iets boven en onder de grens scherp en kijk naar welke kant de heldere lijn lijkt te bewegen.',
        'Verhoog de temperatur langzaam in de buurt van het geschatte matchpunt omdat de lijn over een smal bereik kan vervagen.',
        'Noteer temperatuur, vloeistoftype, kalibratiestandaard, waargenomen matchgedrag en onzekerheid.',
        'Behandel RI als klasse-bewijs: een mismatch kan uitsluiten, terwijl een match extra context vereist.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Wat RI vergelijking kan ondersteunen',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'De brekingsindex kan helpen bij het vergelijken van betwiste glasfragmenten met bekende referentieglazen onder gecontroleerde omstandigheden.',
          points: ['Vergelijking van klasse-eigenschappen', 'Uitsluiting wanneer de RI duidelijk verschilt', 'Screening voorafgaand aan elementenanalyse', 'Onderwijzen van optisch gedrag op grenzen'],
        },
        {
          title: 'Wat RI alleen niet kan bewijzen',
          icon: 'mdi:alert-circle-outline',
          description: 'Een overeenkomstige RI identificeert niet uniek een ruit, fles, voertuigruit of bron op de plaats delict.',
          points: ['Geen individuele brontoewijzing op zich', 'Geen reconstructie zonder context van de plaats delict', 'Geen vervanging voor controles', 'Geen juridische conclusie uit een browsermodel'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Gebruikersvraag', 'Microscopieconcept', 'Zorgvuldig antwoord'],
      rows: [
        ['Waarom beweegt de heldere rand?', 'Breking op een grens tussen twee brekingsindices.', 'De Becke-lijn heeft de neiging om naar het materiaal met de hogere brekingsindex te bewegen wanneer de focus wordt verhoogd.'],
        ['Waarom verdwijnt de rand?', 'Indexovereenstemming.', 'Wanneer glas en vloeistof-RI bijna gelijk zijn, daalt het contrast op de grens en wordt de halo zwak.'],
        ['Waarom de vloeistof verwarmen?', 'Thermische RI-coëfficiënt.', 'De gesimuleerde vloeistof-RI daalt met de temperatuur, waardoor een match met verschillende glastypen mogelijk is.'],
        ['Is een match sluitend?', 'Beperking van klasse-bewijs.', 'Een match ondersteunt alleen consistentie; veel glazen objecten kunnen een vergelijkbare RI delen.'],
      ],
    },
    {
      type: 'title',
      text: 'Hoe het simulatiemodel werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het model wijst aan elk glasprofiel een referentiebrekingsindex toe en behandelt de immersievloeistof als een temperatuurgevoelig medium. Terwijl de verwarmbare tafel opwarmt, daalt de vloeistofindex met een vaste thermische coëfficiënt. De simulator berekent vervolgens het verschil tussen glas-RI en vloeistof-RI, en gebruikt dat verschil om de helderheid van de halo, de halo-verschuiving, het matchpercentage en het interpretatiebericht te regelen.',
    },
    {
      type: 'paragraph',
      html: 'Het visuele microscoopveld is bewust kwalitatief. Het probeert niet elk optisch pad te traceren. In plaats daarvan behoudt het de essentiële didactische relatie: sterk RI-contrast produceert een heldere grens; lager contrast produceert een zwakke grens; en nabij het matchpunt kan de glasrand in de vloeistof lijken te verdwijnen.',
    },
    {
      type: 'paragraph',
      html: 'In professionele forensische laboratoria wordt de kalibratie van de verwarmbare tafel uitgevoerd met behulp van glasreferentiemonsters met een bekende brekingsindex. Omdat de brekingsindex van de immersievloeistof voorspelbaar varieert met de temperatuur (meestal aangeduid als dn/dT), stelt de exacte temperatuur waarop de Becke-lijn verdwijnt de wetenschapper in staat om de brekingsindex van het glas tot op vier decimalen nauwkeurig te berekenen. Deze simulator modelleert dit temperatuurafhankelijke gedrag met behulp van een lineaire formule, zodat studenten kunnen oefenen met het vinden van het exacte matchpunt door de verwarmingstafel zorgvuldig te regelen.',
    },
    {
      type: 'paragraph',
      html: 'Bij het analyseren van glasbewijs wordt de brekingsindex beschouwd als klasse-eigenschapsbewijs. Hoewel een overeenkomstige brekingsindex tussen een fragment op een plaats delict en de kleding van een verdachte consistent is met een gemeenschappelijke bron, identificeert het de bron niet op unieke wijze, omdat veel glazen objecten identieke brekingsindexwaarden delen. Daarom moeten forensische experts overeenkomstige resultaten conservatief interpreteren en de overeenkomst rapporteren in termen van consistentie, terwijl ze benadrukken dat een definitieve brontoewijzing niet mogelijk is op basis van alleen optische eigenschappen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Brekingsindex', definition: 'Een maat voor hoe sterk een materiaal licht afbuigt in vergelijking met vacuüm.' },
        { term: 'Immersievloeistof', definition: 'Een vloeistof met bekende optische eigenschappen die wordt gebruikt om een fragment te omringen tijdens microscopische RI-vergelijking.' },
        { term: 'Becke-lijn', definition: 'De heldere lijn of halo die te zien is op een grens wanneer twee transparante materialen verschillende brekingsindices hebben.' },
        { term: 'Matchpunt', definition: 'Het temperatuurgebied waar de immersievloeistof en het glas bijna dezelfde brekingsindex hebben.' },
        { term: 'Klasse-bewijs', definition: 'Bewijsmateriaal dat een item kan associëren met een groep mogelijke bronnen in plaats van één unieke bron.' },
      ],
    },
    {
      type: 'tip',
      title: 'Interpretatietip voor studenten',
      html: 'Bij glasbewijs is een duidelijke RI-mismatch vaak krachtiger dan een match omdat het een voorgestelde bron kan uitsluiten. Een match is nuttig, maar de kracht ervan hangt af van populatiegegevens, meetprecisie, elementsamenstelling en de casuscontext.',
    },
    {
      type: 'proscons',
      title: 'Sterke punten en limieten van Becke lijn glas RI testen',
      items: [
        { pro: 'Snel, visueel en uitstekend geschikt voor het onderwijzen van de vergelijking van transparante materialen.', con: 'Het oordeel van de waarnemer en de focustechniek kunnen de schijnbare lijnbeweging beïnvloeden.' },
        { pro: 'Temperatuurmatching kan de RI met nuttige precisie schatten wanneer gekalibreerd.', con: 'Thermische regeling, veroudering van vloeistoffen, verontreiniging en standaarden zijn van belang in echt werk.' },
        { pro: 'Nuttig voor het uitsluiten van glasfragmenten met duidelijk verschillende optische eigenschappen.', con: 'Kan een bron niet individualiseren zonder breder analytisch en contextueel bewijs.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische waarschuwing',
      title: 'Houd de conclusie proportioneel',
      html: 'Een Becke-lijnsimulatie in de browser is een leermiddel, geen laboratoriummethode. Formele interpretatie van glasbewijs moet gebaseerd zijn op gevalideerde instrumenten, schriftelijke procedures, kalibratiegegevens, onzekerheidsschattingen, collegiale toetsing en de juiste rapportagetaal for het rechtsgebied.',
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
