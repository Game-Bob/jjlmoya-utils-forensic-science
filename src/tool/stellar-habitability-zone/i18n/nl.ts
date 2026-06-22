import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'leefbare-zone-simulator';
const description = 'Bereken en visualiseer de leefbare zone (Goudlokje-zone) rond verschillende soorten sterren met behulp van stellaire en planetaire configuraties.';
const title = 'Stellaire Leefbare Zone Simulator: Vind Goudlokje Zones';

const howTo = [
  {
    name: 'Selecteer een stellaire preset',
    text: 'Kies een type ster, van blauwe reuzen tot rode dwergen, om standaard fysieke eigenschappen zoals massa, lichtkracht en temperatuur te laden.',
  },
  {
    name: 'Pas planetaire parameters aan',
    text: 'Wijzig de omloopafstand van de planeet (halve lange as), het albedo en het broeikaseffect van de atmosfeer met behulp van de interactieve schuifregelaars.',
  },
  {
    name: 'Analyseer de baan en leefbaarheid',
    text: 'Bekijk de planeet in realtime rond de ster draaien. Controleer of de evenwichts- en oppervlaktetemperaturen vloeibaar water toelaten.',
  },
];

const faq = [
  {
    question: 'Wat is de circumstellaire leefbare zone?',
    answer: 'De circumstellaire leefbare zone (vaak de Goudlokje-zone genoemd) is het gebied rond een ster waar de temperaturen op het planeetoppervlak voldoende zijn om vloeibaar water in stand te houden onder een gegeven atmosferische druk. Deze zone wordt gedefinieerd door conservatieve en optimistische grenzen op basis van stellaire lichtkracht en effectieve temperatuur.',
  },
  {
    question: 'Hoe beïnvloedt de lichtkracht van een ster de leefbare zone?',
    answer: 'De lichtkracht van de ster bepaalt de totale energieafgifte van de ster. Hete, zware sterren (zoals O-, B- of A-type sterren) zijn extreem helder, waardoor hun leefbare zones veel verder weg liggen. Koelere, minder zware sterren (zoals oranje of rode dwergen van het type K of M) hebben een lage lichtkracht, waardoor hun leefbare zones zich extreem dicht bij de ster bevinden.',
  },
  {
    question: 'Wat is het verschil tussen evenwichts- en oppervlaktetemperatuur?',
    answer: 'De evenwichtstemperatuur is de theoretische temperatuur die een planeet zou hebben als we aannemen dat deze zich gedraagt als een zwart lichaam dat stellaire straling absorbeert en weer uitstraalt naar de ruimte. De oppervlaktetemperatuur omvat het broeikaseffect van de atmosfeer van de planeet, dat warmte vasthoudt en de planeet verder opwarmt.',
  },
  {
    question: 'Waarom is albedo belangrijk voor planetaire leefbaarheid?',
    answer: 'Albedo is de mate van reflectie van het oppervlak van de planeet. Een hoger albedo (dichter bij 1.0) betekent dat de planeet meer invallend sterrenlicht reflecteert, waardoor deze afkoelt. Een lager albedo betekent dat er meer straling wordt geabsorbeerd, waardoor de algehele temperatuur stijgt.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Stellaire Leefbare Zone Simulator',
    starPresetsLabel: 'Spectrale Presets',
    customStarHeader: 'Stellaire Parameters',
    starTemperature: 'Effectieve Temperatuur (K)',
    starLuminosity: 'Lichtkracht (L/L⊙)',
    starMass: 'Massa (M/M⊙)',
    starRadius: 'Straal (R/R⊙)',
    planetHeader: 'Planetaire Parameters',
    planetDistance: 'Baanafstand (AE)',
    planetAlbedo: 'Bond-albedo',
    greenhouseDelta: 'Broeikasopwarming (K)',
    resultsHeader: 'Simulatieresultaten',
    stellarFluxResult: 'Ontvangen Stellaire Flux',
    eqTempResult: 'Evenwichtstemperatuur',
    surfTempResult: 'Geschatte Oppervlaktetemperatuur',
    orbitPeriodResult: 'Omlooptijd',
    orbitVelocityResult: 'Baansnelheid',
    hzLimitsHeader: 'Grenzen Leefbare Zone',
    innerLimit: 'Conservatieve Binnengrens',
    outerLimit: 'Conservatieve Buitengrens',
    optInnerLimit: 'Optimistische Binnengrens',
    optOuterLimit: 'Optimistische Buitengrens',
    orbitCanvasTitle: 'Interactieve Baanvisualisatie',
    statusLabel: 'Leefbaarheidsstatus',
    statusTooHot: 'TE HEET (Water verdampt)',
    statusHabitable: 'LEEFBAAR (Vloeibaar water mogelijk)',
    statusTooCold: 'TE KOUD (Water bevriest)',
    statusExplanation: 'Op basis van conservatieve grenzen bevindt deze planeet zich binnen de gespecificeerde leefbare zone-status.',
    unitsLabel: 'Eenhedenstelsel',
    unitsScientific: 'Wetenschappelijk',
    unitsImperial: 'Imperiaal',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGIE: Fysica van Stellaire Leefbare Zones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De zoektocht naar leven buiten de aarde begint met het begrijpen van de fysieke omstandigheden die nodig zijn voor vloeibaar water. Astrobiologen gebruiken wiskundige modellen om de grenzen van leefbare zones rond verschillende sterrentypen in kaart te brengen. Deze simulator maakt gebruik van de modellen van Kopparapu et al. (2013) om de ontvangen energieflux van planeten te schatten en te bepalen of ze zich in de Goudlokje-zone bevinden. De leefbare zone wordt gedefinieerd als het gebied waar een planeet met een aardse massa en een CO2-H2O-N2 atmosfeer vloeibaar water op zijn oppervlak kan behouden.',
    },
    {
      type: 'title',
      text: 'Wiskundige Formules en Atmosferische Fysica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De grenzen van de leefbare zone worden bepaald door de effectieve stellaire flux (Seff) te berekenen die nodig is om een op hol geslagen of maximaal broeikaseffect te veroorzaken. De vergelijking voor Seff hangt af van de effectieve temperatuur van de ster (Teff):<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>waarbij T* = Teff - 5780 K, en de coëfficiënten (a, b, c, d) empirisch zijn afgeleid van 1D stralings-convectieve klimaatmodellen. Zodra Seff is berekend, wordt de baanafstand d in astronomische eenheden (AE) gegeven door:<br><br>d = sqrt(L / Seff)<br><br>waarbij L de lichtkracht van de ster is ten opzichte van de zon. De evenwichtstemperatuur (Teq) van de planeet wordt berekend uitgaande van een bolvormig zwart lichaam in thermisch evenwicht:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>waarbij R* de stellaire straal is, A het albedo van de planeet is, en S de ontvangen stellaire flux is in eenheden van de zonneconstante van de aarde.',
    },
    {
      type: 'title',
      text: 'Spectrale Classificatie en Leefbare Grenzen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stellaire kenmerken variëren sterk tussen de spectraalklassen. Hier is een samenvatting van typische eigenschappen en grenzen van de leefbare zone (LZ):',
    },
    {
      type: 'table',
      headers: [
        'Spectraalklasse',
        'Temperatuur (K)',
        'Lichtkracht (L/L⊙)',
        'LZ Binnengrens (AE)',
        'LZ Buitengrens (AE)',
      ],
      rows: [
        ['Type O (Reus)', '40.000', '100.000', '300.0', '530.0'],
        ['Type B (Reus)', '20.000', '1.000', '30.1', '53.2'],
        ['Type A (Sirius)', '8.500', '20.0', '4.2', '7.4'],
        ['Type F (Procyon)', '6.500', '2.5', '1.5', '2.6'],
        ['Type G (Zon)', '5.778', '1.0', '0.95', '1.67'],
        ['Type K (Dwerg)', '4.500', '0.15', '0.37', '0.65'],
        ['Type M (Dwerg)', '3.200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Impact van Spectraalklasse op Leefbaarheid',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Elke spectraalklasse creëert een unieke stralings- en zwaartekrachtomgeving voor haar planeten:<br><br><strong>O- en B-type sterren:</strong> Deze zware blauwe sterren zenden intense ultraviolette (UV) straling uit en hebben een extreem korte levensduur (tientallen miljoenen jaren). Vloeibaar water zou kunnen bestaan op hun buitenste werelden, maar het leven zou onvoldoende tijd hebben om te evolueren voordat de ster ontploft als supernova.<br><br><strong>A- en F-type sterren:</strong> Deze sterren zijn helderder en heter dan de zon. Hun leefbare zones zijn breed en ver weg, waardoor de effecten van synchrone rotatie worden geminimaliseerd. Echter, hoge niveaus van nabij-UV-straling kunnen ernstige schade toebrengen aan organische moleculen zonder een beschermende ozonlaag.<br><br><strong>G-type sterren (zonachtig):</strong> Deze sterren bieden miljarden jaren lang een stabiele lichtstroom en zijn de primaire doelen voor de zoektocht naar leven. Hun straling komt overeen met de eisen van standaard biochemie.<br><br><strong>K-type sterren (oranje dwergen):</strong> Door veel astrobiologen beschouwd als de "superleefbare" gastheren. Oranje dwergen leven tientallen miljarden jaren, zenden minder schadelijke UV-straling uit dan G-type sterren, en zijn niet zo gevoelig voor de zware zonnevlammen die gepaard gaan met jonge M-dwergen.<br><br><strong>M-type sterren (rode dwergen):</strong> De meest voorkomende sterren in het heelal. Omdat hun leefbare zones extreem dichtbij liggen (meestal < 0,2 AE), zijn planeten gevoelig voor synchrone rotatie (één kant is permanent naar de ster gericht). Daarnaast produceren actieve M-dwergen energierijke stellaire winden en zonnevlammen die planeetatmosferen kunnen wegblazen.',
    },
    {
      type: 'title',
      text: 'Kritieke Factoren in Planetaire Leefbare Omgevingen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De fysieke omgeving van een planeet wordt gevormd door meerdere variabelen, niet alleen de afstand tot de ster:<br><br>',
    },
    {
      type: 'list',
      items: [
        '<strong>Atmosferisch Broeikaseffect:</strong> Natuurlijke broeikasgassen verhogen de oppervlaktetemperaturen boven het evenwichtsniveau van het zwarte lichaam. Terrestrische planeten hebben koolstof-silicaatcycli nodig om atmosferische CO2 te stabiliseren en temperaturen over geologische tijdschalen te reguleren.',
        '<strong>Planetaire Bond-albedo:</strong> Hoge reflectie (door wolken, ijskappen of sulfaataerosolen) koelt de planeet af, terwijl een laag albedo (donkere bodems, wateroppervlaktes) meer stellaire energie vasthoudt.',
        '<strong>Magneetvelden:</strong> Een sterke planetaire magnetosfeer beschermt de atmosfeer tegen stellaire winden, waardoor niet-thermische atmosferische ontsnapping en waterverlies worden voorkomen.',
        '<strong>Koudeval-dynamiek:</strong> Het koudeval-effect in de hogere atmosfeer voorkomt dat waterdamp grote hoogten bereikt waar stellaire UV-straling het zou splitsen in waterstof en zuurstof.',
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
