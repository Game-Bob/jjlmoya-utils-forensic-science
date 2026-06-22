import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sfeer-energie-simulator';
const title = 'Dyson Sfeer Energieopvang Simulator';
const description = 'Schat Dyson zwerm, ring, schaal en statietcollector ontwerpen voor verschillende sterren. Bereken opgevangen vermogen, baanstraal, materiaalmassa en de dekking die nodig is om een beoogde Kardasjev schaal te bereiken.';

const howTo = [
  {
    name: 'Kies een ster type',
    text: 'Begin met een M dwerg, een zonachtige ster, een A-type ster, een rode reus of een blauwe reus. De simulator gebruikt representatieve helderheid en massa waarden om de collectorstraal en baanperiode te schatten.',
  },
  {
    name: 'Selecteer de megastructuur architectuur',
    text: 'Vergelijk een Dyson zwerm, equatoriale ring, stijve schaal of statiet spiegelenwolk. Elk ontwerp heeft andere opvangrendement, materiaaldichtheid en stabiliteitsaannames.',
  },
  {
    name: 'Stel dekking en bedrijfstemperatuur in',
    text: 'Verhoog de dekking om meer ster vermogen op te vangen en pas de bedrijfstemperatuur aan om de collectoren dichter bij of verder van de ster te plaatsen.',
  },
  {
    name: 'Kies een Kardasjev doel',
    text: 'Gebruik de doelschuifregelaar om te zien hoeveel van de ster moet worden omhuld om een beschavingsbreed vermogensdoel te bereiken.',
  },
];

const faq = [
  {
    question: 'Wat is het verschil tussen een Dyson sfeer en een Dyson zwerm?',
    answer: 'Een stijve Dyson sfeer is een continue schaal rond een ster, terwijl een Dyson zwerm een grote verzameling onafhankelijke baancollectoren is. De meeste technische discussies geven de voorkeur aan zwermen omdat een vaste schaal structureel onstabiel en extreem materiaalintensief zou zijn.',
  },
  {
    question: 'Hoe kiest de simulator de optimale straal?',
    answer: 'Het schat de afstand waar collectoren die aan beide zijden stralen de geselecteerde bedrijfstemperatuur bereiken onder de gekozen sterhelderheid. Heter collectoren kunnen dichterbij in een baan, terwijl koelere collectoren grotere stralen nodig hebben.',
  },
  {
    question: 'Wat betekent de Kardasjev beoordeling hier?',
    answer: 'De Kardasjev waarde wordt berekend uit opgevangen vermogen met de gangbare logaritmische vorm K = (log10(P) - 6) / 10, waarbij P het vermogen in watt is. Een waarde nabij K1 staat voor energiegebruik op planetaire schaal, terwijl K2 de volledige steropbrengst benadert.',
  },
  {
    question: 'Is de materiaalmassa realistisch?',
    answer: 'Het is een educatieve eerste orde schatting gebaseerd op collectoroppervlak, oppervlaktedichtheid en een stabiliteitsfactor. Echte ontwerpen zouden baanhandhaving, vermogenstransmissie, mijnverliezen, redundantie, warmteafvoer en fabricage infrastructuur nodig hebben.',
  },
  {
    question: 'Waarom hebben heldere sterren zulke grote collectorsystemen nodig?',
    answer: 'Sterren met hoge helderheid duwen de veilige thermische straal naar buiten. Dat vergroot het benodigde oppervlak voor een gegeven dekkingsfractie, waardoor de materiaalvraag sneller kan stijgen dan het opgevangen vermogen intuÃ¯tief aanvoelt.',
  },
  {
    question: 'Kan een beschaving Kardasjev Type II bereiken met gedeeltelijke dekking?',
    answer: 'Ja, als de gastster helder genoeg is en de collectoren efficiÃ"nt zijn. Rond een zonachtige ster vereist het benaderen van Type II het opvangen van een groot deel van de zonnehelderheid, maar rond helderdere sterren kan hetzelfde vermogensdoel een lagere dekkingsfractie nodig hebben.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson collector visualisatie',
    starType: 'Ster type',
    structureType: 'Structuur',
    coverage: 'Collectordekking',
    operatingTemp: 'Bedrijfstemperatuur',
    kardashevTarget: 'Kardasjev doel',
    kardashevRating: 'Huidige beoordeling',
    capturedPower: 'Opgevangen vermogen',
    optimalRadius: 'Optimale straal',
    targetCoverage: 'Doeldekking',
    materialMass: 'Materiaalmassa',
    captureMeter: 'Voortgang naar doel',
    statusReady: 'Pas het systeem aan om de collectorvraag te schatten.',
    statusUnderbuilt: 'De dekking ligt onder het gekozen Kardashev-doel. Voeg collectoren toe of kies een helderdere ster.',
    statusBalanced: 'Dekking en stervermogen liggen dicht bij het gekozen doel op beschavingsschaal.',
    statusExtreme: 'Deze configuratie overschrijdt het doel. Ze vangt enorm vermogen op, maar de materiaalvraag stijgt snel.',
    orbitalPeriod: 'Baanperiode',
    collectorArea: 'Collector oppervlak',
    mercuryMasses: '{value} Mercuriusmassa s',
    kilograms: '{value} kg',
    daysUnit: '{value} dagen',
    starMDwarf: 'M dwerg',
    starSun: 'G-type ster zoals de Zon',
    starA: 'A-type ster',
    starRedGiant: 'Rode reus',
    starBlueGiant: 'Blauwe reus',
    structureSwarm: 'Dyson zwerm',
    structureRing: 'Equatoriale ring',
    structureShell: 'Stijve schaal',
    structureStatite: 'Statiet spiegelenwolk',
  },
  seo: [
    {
      type: 'title',
      text: 'Dyson Sfeer Energieopvang Simulator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een Dyson sfeer is niet alleen een sciencefiction beeld van een ster in een schaal. Het is een familie van mogelijke megastructuur concepten voor het onderscheppen van sterhelderheid: zwermen satellieten, equatoriale ringen, dunne spiegelenwolken en de beroemde maar problematische stijve schaal. Deze simulator zet die ideeÃ"n om in getallen zodat u kunt vergelijken hoe ster type, collectortemperatuur, dekking en structuurontwerp het energiebudget veranderen.',
    },
    {
      type: 'paragraph',
      html: 'De rekenmachine schat het opgevangen vermogen, de thermische baanstraal, het collectoroppervlak, de baanperiode, de materiaalmassa en de dekking die nodig is voor een gekozen Kardasjev schaal doel. Het is gebouwd voor studenten, wereldbouwers, wetenschapscommunicators en iedereen die probeert te begrijpen waarom Type II beschavingen moeilijk zijn: de uitdaging is niet alleen vermogen, maar ook oppervlak, warmte, mijnbouw, stabiliteit en baand logistiek.',
    },
    {
      type: 'title',
      text: 'Hoe de Dyson straal wordt geschat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De optimale straal wordt berekend uit sterhelderheid en collectorbedrijfstemperatuur. Een collector dicht bij een heldere ster ontvangt intense flux en moet heet draaien of enorme hoeveelheden warmte afvoeren. Naar buiten bewegen vermindert thermische stress, maar het benodigde collectoroppervlak groeit met het kwadraat van de afstand. Deze afweging verklaart waarom dezelfde dekkingsfractie bescheiden kan zijn rond een zwakke M dwerg en enorm rond een blauwe reus.',
    },
    {
      type: 'title',
      text: 'Dyson Zwerm, Ring, Schaal en Statiet Wolk Vergeleken',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dyson zwerm:</strong> veel onafhankelijke baancollectoren. Het is de meest aannemelijke grootschalige architectuur omdat het stapsgewijs kan worden gebouwd en geen stijve sterschaal vereist.',
        '<strong>Equatoriale ring:</strong> een smallere collectorbundel met lagere dekkingsrendement. Het is gemakkelijker voor te stellen als eerste megastructuur, maar kan de volledige steropbrengst niet opvangen zonder een bredere zwerm te worden.',
        '<strong>Stijve schaal:</strong> visueel iconisch maar mechanisch ongunstig. Een schaal rond een ster heeft ernstige stabiliteits en materiaal problemen, dus de simulator kent er hoge massa en lage stabiliteit aan toe.',
        '<strong>Statiet spiegelenwolk:</strong> ultralichte reflectoren gedeeltelijk gehouden door stralingsdruk. Het vermindert de materiaalvraag maar heeft lagere thermische tolerantie en veeleisende controle vereisten.',
      ],
    },
    {
      type: 'title',
      text: 'Benodigde dekking voor de Kardasjev schaal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De Kardasjev schaal drukt beschavingsvermogens gebruik logaritmisch uit. In deze tool worden opgevangen watt omgezet in een K beoordeling met K = (log10(P) - 6) / 10. Een gedeeltelijke Dyson zwerm rond de Zon kan het huidige menselijke energiegebruik met vele orden van grootte overtreffen lang voordat het de volledige Type II status bereikt. Het doeldekkingsresultaat toont de fractie van sterhelderheid die moet worden onderschept voor het geselecteerde doel.',
    },
    {
      type: 'table',
      headers: ['Ontwerpkeuze', 'Belangrijkste voordeel', 'Belangrijkste knelpunt'],
      rows: [
        ['Dyson zwerm', 'Bouwbaar in fasen met onafhankelijke banen', 'Verkeerscontrole en vermogenstransmissie'],
        ['Equatoriale ring', 'Lager beginoppervlak en eenvoudigere geometrie', 'Beperkte dekking'],
        ['Stijve schaal', 'Maximale onderschepping in een eenvoudig diagram', 'Structurele instabiliteit en enorme massa'],
        ['Statiet wolk', 'Zeer lage oppervlaktedichtheid', 'Precieze baanhandhaving en warmtelimieten'],
      ],
    },
    {
      type: 'title',
      text: 'Materiaalmassa en mijnbouw realiteitscheck',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De materiaalschatting vermenigvuldigt het collectoroppervlak met een aangenomen oppervlaktedichtheid en ontwerpstabiliteitsfactor. Het rapporteert de massa opzettelijk in Mercurius massa wanneer het aantal astronomisch wordt, omdat veel Dyson zwerm discussies zich voorstellen dat kleine planeten of asteroÃ¯den worden ontmanteld voor grondstoffen. Zelfs dunne collectoren worden massief wanneer ze worden verspreid over astronomische eenheid schalen.',
    },
    {
      type: 'paragraph',
      html: 'Gebruik het resultaat als een grootte orde gids in plaats van een blauwdruk. Echte megastructuur engineering zou stralingsschade modellen, thermische cycli, botsingsvermijding, standregeling, vermogenstransmissie, fabricage opbrengst en lange termijn baanontwikkeling nodig hebben. De waarde van de simulator is dat het de eerste beperkingen onmiddellijk zichtbaar maakt.',
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


