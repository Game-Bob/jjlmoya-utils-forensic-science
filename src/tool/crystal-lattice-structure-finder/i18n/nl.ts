import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kristalrooster-structuurzoeker';
const title = 'Kristalroosterstructuurzoeker';
const description = 'Verken eenvoudig kubische, kubisch vlakgecentreerde en hexagonaal dichtstgepakte eenheidscellen met een interactieve 3D-viewer, atoomvullingsfactor, coördinatiegetal en een theoretische dichtheidscalculator.';

const howTo = [
  {
    name: 'Kies een rooster of materiaal',
    text: 'Begin bij een structuurfamilie zoals eenvoudig kubisch, FCC of HCP, of selecteer een reëel materiaalpreset om de roosterconstante en atomaire of formulamassa te laden.',
  },
  {
    name: 'Roteer de eenheidscel',
    text: 'Sleep de hoek- en zoomregelaars om te onderzoeken welke atomen zich op hoeken, vlakken of binnenin de conventionele cel bevinden.',
  },
  {
    name: 'Lees vullingsgraad en dichtheid af',
    text: 'Vergelijk de atoomvullingsfactor, het coördinatiegetal, het aantal atomen per cel, de celmassa, het celvolume en de theoretische dichtheid voor de geselecteerde structuur.',
  },
  {
    name: 'Test eigen constanten',
    text: 'Pas de roosterparameter a, de c/a-verhouding en de massa aan om te zien hoe de theoretische dichtheid verandert wanneer het kristal uitzet, krimpt of van samenstelling wisselt.',
  },
];

const faq = [
  {
    question: 'Wat is een eenheidscel in een kristalrooster?',
    answer: 'Een eenheidscel is de kleinste zich herhalende driedimensionale doos die de ruimte kan vullen om het kristal op te bouwen. De atomen kunnen worden gedeeld met naburige cellen, dus het netto aantal atomen per cel kan kleiner zijn dan het aantal bollen dat op de grenzen is getekend.',
  },
  {
    question: 'Waarom hebben FCC en HCP dezelfde vullingsfactor?',
    answer: 'FCC en ideaal HCP zijn beide dichtstgepakte rangschikkingen van gelijke bollen. Ze stapelen dichte driehoekige lagen in verschillende volgordes, ABCABC voor FCC en ABAB voor HCP, maar beide vullen ongeveer 74 procent van de ruimte met atomen.',
  },
  {
    question: 'Hoe wordt de theoretische dichtheid berekend?',
    answer: 'De calculator deelt de massa binnen één eenheidscel door het volume van de eenheidscel. De celmassa komt van het aantal atomen of formule-eenheden per cel vermenigvuldigd met de molaire massa en gedeeld door de constante van Avogadro.',
  },
  {
    question: 'Waarom kan de gemeten dichtheid afwijken van het theoretische resultaat?',
    answer: 'Echte monsters kunnen vacatures, onzuiverheden, poriën, korrelgrenzen, isotopenmengsels, thermische uitzetting of meerdere fasen bevatten. De theoretische waarde gaat uit van een perfect kristal met de geselecteerde roosterconstante.',
  },
  {
    question: 'Is haliet echt een FCC-metaalrooster?',
    answer: 'Nee. Haliet is ionisch steenzout, geen metaal. Het preset gebruikt de conventionele van FCC afgeleide cel omdat NaCl vier formule-eenheden per kubische cel heeft, wat het nuttig maakt voor het oefenen van dichtheidsberekeningen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Interactieve kristal-eenheidscel',
    material: 'Materiaal',
    lattice: 'Rooster',
    rotation: 'Rotatie',
    zoom: 'Zoom',
    latticeA: 'Roosterconstante a',
    cRatio: 'c/a-verhouding',
    molarMass: 'Molaire massa',
    atomsPerCell: 'Atomen per cel',
    packingFactor: 'Atoomvullingsfactor',
    coordination: 'Coördinatie',
    density: 'Dichtheid',
    cellVolume: 'Celvolume',
    cellMass: 'Celmassa',
    radius: 'Atoomstraal',
    cornerAtoms: 'Hoekatomen',
    faceAtoms: 'Vlakatomen',
    interiorAtoms: 'Inwendige atomen',
    materialNote: 'Materiaalopmerking',
    formula: 'Formule',
    resetView: 'Beeld resetten',
    crystalProperties: 'Kristaleigenschappen',
    physicalMetrics: 'Fysische meetwaarden',
    latticeSimpleCubic: 'Eenvoudig kubisch',
    latticeFcc: 'Kubisch vlakgecentreerd',
    latticeHcp: 'Hexagonaal dichtstgepakt',
    shortSc: 'SC',
    shortFcc: 'FCC',
    shortHcp: 'HDP',
    materialCopper: 'Koper',
    materialCopperNote: 'Veelvoorkomend FCC-metaal met hoge elektrische geleidbaarheid.',
    materialAluminum: 'Aluminium',
    materialAluminumNote: 'Licht FCC-metaal dat vaak wordt gebruikt als dichtheidsreferentie in leerboeken.',
    materialPolonium: 'Alfa-polonium',
    materialPoloniumNote: 'Zeldzaam voorbeeld van een eenvoudig kubisch elementair kristal.',
    materialMagnesium: 'Magnesium',
    materialMagnesiumNote: 'HDP-metaal met een c/a-verhouding dicht bij ideale stapeling.',
    materialTitanium: 'Alfa-titanium',
    materialTitaniumNote: 'HDP-fase van titanium bij kamertemperatuur.',
    materialHalite: 'Haliet (benadering)',
    materialHaliteNote: 'Steenzout wordt gemodelleerd via zijn conventionele FCC-cel met vier NaCl-formule-eenheden.',
    shortSimpleCubic: 'SC',
    shortFaceCenteredCubic: 'FCC',
    shortHexagonalClosePacked: 'HCP',
    shortBodyCenteredCubic: 'BCC',
    shortDiamondCubic: 'DC',
    shortRockSalt: 'NaCl',
    shortCesiumChloride: 'CsCl',
    shortZincBlende: 'ZnS',
    shortWurtzite: 'WZ',
    shortPerovskite: 'ABO3',
    shortRutile: 'TiO2',
    latticeBodyCenteredCubic: 'Ruimtegecentreerd kubisch',
    latticeCesiumChloride: 'Cesiumchloride',
    latticeDiamondCubic: 'Diamantkubisch',
    latticeFaceCenteredCubic: 'Vlakgecentreerd kubisch',
    latticeHexagonalClosePacked: 'Hexagonaal dichtst gepakt',
    latticePerovskite: 'Kubische perovskiet',
    latticeRockSalt: 'Steenzout',
    latticeRutile: 'Rutiel',
    latticeWurtzite: 'Wurtziet',
    latticeZincBlende: 'Zinkblende',
    materialAlphaIron: 'Alfa-ijzer',
    materialAlphaIronNote: 'Ruimtegecentreerd kubische ijzerfase bij kamertemperatuur.',
    materialTungsten: 'Wolfraam',
    materialTungstenNote: 'Dicht BCC-refractair metaal met een zeer hoog smeltpunt.',
    materialSilicon: 'Silicium',
    materialSiliconNote: 'Diamantkubische halfgeleider gebruikt in geïntegreerde schakelingen.',
    materialDiamond: 'Diamant',
    materialDiamondNote: 'Covalent koolstofnetwerk in diamantkubische structuur.',
    materialCesiumChloride: 'Cesiumchloride',
    materialCesiumChlorideNote: 'Interpenetrerende eenvoudige kubische ionstructuur met achtvoudige coördinatie.',
    materialZincSulfide: 'Zinksulfide',
    materialZincSulfideNote: 'Sfaleriet, ook zinkblende genoemd, met tetraëdrische coördinatie.',
    materialGalliumNitride: 'Galliumnitride',
    materialGalliumNitrideNote: 'Wurtziet-halfgeleider gebruikt in leds en vermogenselektronica.',
    materialStrontiumTitanate: 'Strontiumtitanaat',
    materialStrontiumTitanateNote: 'Kubisch perovskietoxide gebruikt als substraat en diëlektrisch model.',
    materialRutileTitania: 'Rutiel-titania',
    materialRutileTitaniaNote: 'Rutiel-TiO2-structuur met octaëdrische titaniumcoördinatie.',
  },
  seo: [
    {
      type: 'title',
      text: 'Kristalroosterstructuurzoeker voor eenheidscellen, atoomvullingsfactor en dichtheid',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze kristalroosterstructuurzoeker helpt om het beeld van een eenheidscel te verbinden met de berekeningen die studenten en materiaalwetenschappers doorgaans nodig hebben. U kunt eenvoudig kubische, kubisch vlakgecentreerde en hexagonaal dichtstgepakte structuren inspecteren en vervolgens de atoomvullingsfactor, het coördinatiegetal, het aantal atomen per cel, de atoomstraal uit de roosterparameter, het celvolume, de celmassa en de theoretische dichtheid berekenen op basis van reële materiaalpresets of eigen invoer.',
    },
    {
      type: 'paragraph',
      html: 'De interactieve viewer is ontworpen voor de veelvoorkomende moeilijkheid in kristallografie: atomen op de grenzen zijn zichtbaar, maar slechts een fractie van elk grensatoom behoort tot de geselecteerde cel. Door het model te roteren wordt het verschil tussen hoekplaatsen, vlakplaatsen en inwendige plaatsen gemakkelijker te zien voordat u de numerieke formule gebruikt.',
    },
    {
      type: 'title',
      text: 'Eenvoudig kubisch, FCC en HCP vergeleken',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Structuur', 'Netto atomen per cel', 'Coördinatiegetal', 'Atoomvullingsfactor', 'Typische voorbeelden'],
      rows: [
        ['Eenvoudig kubisch', '1', '6', '52,36%', 'Alfa-polonium is het klassieke elementaire voorbeeld.'],
        ['Kubisch vlakgecentreerd (FCC)', '4', '12', '74,05%', 'Koper, aluminium, nikkel, zilver, goud en veel ductiele metalen.'],
        ['Hexagonaal dichtstgepakt (HCP)', '6', '12', '74,05%', 'Magnesium, alfa-titanium, zink, kobalt en beryllium.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Eenvoudig kubische stapeling is gemakkelijk te visualiseren omdat atomen elkaar raken langs de kubusrand en elk hoekatoom een achtste bijdraagt aan de cel. FCC voegt atomen toe in het midden van elk vlak, zodat de atomen elkaar raken langs de vlakdiagonalen en de netto telling vier atomen per conventionele kubische cel wordt. HCP gebruikt hexagonale lagen in plaats van een kubische doos, maar ideaal HCP bereikt dezelfde dichtstapelingslimiet als FCC.',
    },
    {
      type: 'title',
      text: 'Formule voor de atoomvullingsfactor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De atoomvullingsfactor is de fractie van het eenheidscelvolume die wordt ingenomen door harde-bol-atomen. Het wordt berekend als <strong>APF = volume van atomen in de cel / eenheidscelvolume</strong>. Voor eenvoudig kubisch wordt dit pi / 6 omdat één atoom met straal a/2 in de kubische cel past. FCC en ideaal HCP bereiken beide ongeveer 0,7405, wat de maximale stapelingsfractie voor gelijke bollen is.',
    },
    {
      type: 'paragraph',
      html: 'Vullingsfactor is niet hetzelfde als dichtheid. APF beschrijft hoe efficiënt identieke bollen de ruimte vullen, terwijl dichtheid ook afhangt van de molaire massa en roosterafmetingen. Een licht HCP-metaal en een zwaar FCC-metaal kunnen vergelijkbare vullingsfactoren hebben maar zeer verschillende dichtheden.',
    },
    {
      type: 'title',
      text: 'Theoretische dichtheidsformule gebruikt door de calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De calculator gebruikt <strong>rho = nM / (NA Vcel)</strong>. In deze vergelijking is <strong>n</strong> het aantal atomen of formule-eenheden per cel, <strong>M</strong> de molaire massa in gram per mol, <strong>NA</strong> de constante van Avogadro en <strong>Vcel</strong> het eenheidscelvolume in kubieke centimeter. Kubische cellen gebruiken a^3. Hexagonale cellen gebruiken (3 sqrt(3) / 2) a^2 c, waarbij c wordt opgegeven via de c/a-verhouding.',
    },
    {
      type: 'paragraph',
      html: 'Omdat roosterconstanten meestal in ångström worden getabelleerd, converteert de calculator ångström naar centimeter voordat de dichtheid wordt berekend. Een kleine verandering in de roosterconstante kan de dichtheid merkbaar beïnvloeden omdat het volume bij kubische cellen schaalt met de derde macht.',
    },
    {
      type: 'title',
      text: 'Roosterpresets gebruiken voor metalen en mineralen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Koper en aluminium:</strong> vergelijk twee FCC-metalen met hetzelfde netto aantal atomen per cel maar verschillende molaire massa\'s en roosterconstanten.',
        '<strong>Magnesium en alfa-titanium:</strong> onderzoek HCP-stapeling en zie hoe de c/a-verhouding het hexagonale celvolume verandert.',
        '<strong>Alfa-polonium:</strong> bestudeer de zeldzame eenvoudig kubische structuur en de lagere stapelingsefficiëntie.',
        '<strong>Haliet:</strong> oefen formule-eenheidsdichtheid met een mineraalachtige NaCl-conventionele cel in plaats van een enkelvoudig metaal.',
      ],
    },
    {
      type: 'title',
      text: 'Beperkingen van een harde-bol-eenheidscelmodel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dit hulpmiddel gebruikt geïdealiseerde geometrische modellen. Echte kristallen hebben elektronendichtheid in plaats van harde grenzen, en roosterconstanten veranderen met temperatuur, druk, samenstelling en defecten. Ionische en covalente kristallen kunnen ook basisatomen, partiële bezettingen en symmetriebewerkingen vereisen die verder gaan dan de drie hier getoonde leerstructuren.',
    },
    {
      type: 'paragraph',
      html: 'Gebruik de resultaten voor educatie, snelle schattingen en vergelijking van gangbare roosterfamilies. Voor publiceerbare kristallografie verifieert u roosterparameters, fase, stoichiometrie en plaatsbezetting aan de hand van primaire diffractiegegevens of een samengestelde kristallografische database.',
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
      applicationCategory: 'EducationalApplication',
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
