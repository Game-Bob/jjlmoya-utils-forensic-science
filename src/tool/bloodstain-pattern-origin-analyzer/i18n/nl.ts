import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'analysator-herkomst-bloedspatpatronen';
const title = '3D Analysator voor de herkomst van bloedspatpatronen';
const description = 'Modelleer elliptische bloedspatten op een verticaal vlak, schat impacthoeken en visualiseer geprojecteerde trajecten in een interactieve 3D-scène.';

const howTo = [
  { name: 'Voer spatten in of pas ze aan', text: 'Gebruik de tabel of het 2D-oppervlak om de positie, breedte, lengte en oriëntatie van de lange as van elke spat te definiëren.' },
  { name: 'Bekijk impacthoeken', text: 'De calculator schat de hoek van impact uit de verhouding tussen breedte en lengte met behulp van de boogsinusrelatie.' },
  { name: 'Inspecteer de 3D-convergentie', text: 'Draai het weergavevenster om geprojecteerde trajecten en de geschatte oorsprongssfeer te vergelijken.' },
  { name: 'Controleer onzekerheid', text: 'Gebruik de spreidingswaarde als een praktische waarschuwingsindicator: brede lijnenscheiding betekent dat de uitgezette oorsprong minder stabiel is.' },
];

const faq = [
  { question: 'Kan een browsertool de werkelijke bron van bloedvergieten bepalen?', answer: 'Nee. Het kan geometrische relaties onderwijzen en beoordelen, maar conclusies over een zaak vereisen gevalideerde methoden, scènedocumentatie, schaalkalibratie en gekwalificeerde bloedspatpatroonanalyse.' },
  { question: 'Waarom wordt de impacthoek berekend uit breedte en lengte?', answer: 'Voor een ideale elliptische spat wordt de sinus van de impacthoek benaderd door de breedte gedeeld door de lengte. Echte spatten kunnen worden vervormd door oppervlaktetextuur, vloeiing, overdracht of meetfouten.' },
  { question: 'Wat stelt de 3D-oorsprongssfeer voor?', answer: 'Het is de kleinste-kwadratenconvergentieschatting tussen geprojecteerde trajectlijnen, geen gegarandeerde puntbron.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Metrisch',
    imperial: 'Imperiaal',
    unitsLabel: 'Eenheden',
    addStain: 'Spat toevoegen',
    reset: 'Reset',
    surface: 'Impactoppervlak',
    viewport3dLabel: '3D-trajectweergave',
    stainLabel: 'Spat',
    table: 'Metingen',
    origin: 'Geschatte oorsprong',
    spread: 'Lijnenspreiding',
    confidence: 'Betrouwbaarheid',
    impact: 'Impacthoek',
    high: 'Hoog',
    medium: 'Gemiddeld',
    low: 'Laag',
    x: 'X',
    y: 'Y',
    width: 'Breedte',
    length: 'Lengte',
    rotation: 'Rotatie',
    remove: 'Verwijderen',
    cm: 'cm',
    inch: 'in',
    degree: 'graden',
    rotateHint: 'Sleep de 3D-weergave om de reconstructie te draaien.',
    disclaimer: 'Uitsluitend educatieve reconstructie. Interpreteer met gevalideerde scènemetingen en gedocumenteerde onzekerheid.',
  },
  seo: [
    { type: 'title', text: 'Hoe een 3D Analysator voor de herkomst van bloedspatpatronen werkt', level: 2 },
    { type: 'paragraph', html: 'Een analysator voor de herkomst van bloedspatpatronen helpt gebruikers bij het verkennen van een van de kernvragen in bloedspatpatroonanalyse: <strong>waar in de ruimte bevond de bloedbron zich toen druppels een oppervlak raakten?</strong> Deze tool modelleert spatten als ellipsen op een verticaal vlak, berekent een impacthoek uit elke verhouding tussen breedte en lengte, projecteert trajecten terug in een 3D-scène en schat een praktisch convergentiegebied.' },
    { type: 'diagnostic', variant: 'warning', title: 'Forensische waarschuwing', html: 'De output is een reconstructiehulpmiddel, geen conclusie over een zaak. Echte spatten kunnen worden beïnvloed door de textuur van het doeloppervlak, satellietsatten, stolling, vloeiing, vegen, overdracht, perspectieffouten en onvolledige schaaldocumentatie.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(B/L)', label: 'Formule impacthoek' },
      { value: '3+', label: 'Aanbevolen onafhankelijke spatten' },
      { value: '3D', label: 'Trajectconvergentieruimte' },
    ] },
    { type: 'title', text: 'Formule impacthoek', level: 3 },
    { type: 'paragraph', html: 'Voor een eenvoudige elliptische spat wordt de impacthoek gewoonlijk benaderd als <strong>arcsin(breedte / lengte)</strong>. Een spat met een gemeten breedte van 1 cm en een lengte van 2 cm geeft dus een impacthoek van 30 graden. Die relatie is nuttig omdat deze een vlakke markering omzet in een trajecthoogte, maar er wordt van uitgegaan dat de gemeten spat representatief is en niet vervormd.' },
    { type: 'code', ariaLabel: 'Berekening impacthoek', code: 'impacthoek = arcsin(spatbreedte / spatlengte)\nvoorbeeld: arcsin(1 cm / 2 cm) = 30 graden' },
    { type: 'paragraph', html: 'Dit is een veelvoorkomende zoekintentie achter zoekopdrachten zoals <em>impacthoek calculator bloedspatten</em>, <em>formule impacthoek bloedspatten</em> en <em>hoe bereken je het traject van bloedspatten</em>. Het belangrijke punt is dat de formule slechts één deel van de reconstructie beantwoordt. Het schat de hoogte van het traject ten opzichte van het doeloppervlak; het identificeert op zichzelf niet de bron, het mechanisme, het wapen of de volgorde van de gebeurtenissen.' },
    { type: 'title', text: 'Hoe spatten te meten voordat u gegevens invoert', level: 3 },
    { type: 'paragraph', html: 'De meest bruikbare invoer is afkomstig van gekalibreerde, loodrechte foto s of directe scènemetingen. Meet het elliptische hoofdlichaam van de spat, niet satellieten, staarten, vloeimarkeringen of secundaire spatten. De breedte moet over de korte as worden genomen en de lengte langs de lange as. Rotatie moet de richting van de lange as op het doeloppervlak volgen. Kleine fouten in lengte, breedte of oriëntatie kunnen het geprojecteerde traject aanzienlijk verschuiven zodra het in de 3D-ruimte wordt uitgebreid.' },
    { type: 'table', headers: ['Metingkwaliteit', 'Waarschijnlijk effect', 'Praktische reactie'], rows: [
      ['Lange as is duidelijk', 'Rotatie is betrouwbaarder', 'Gebruik de zichtbare lange as en documenteer de oriëntatiemethode.'],
      ['Breedte of lengte is vervormd', 'Impacthoek kan vertekend zijn', 'Markeer onzekerheid en vergelijk met naburige spatten.'],
      ['Weinig spatten convergeren', 'Schatting van de oorsprong wordt instabiel', 'Voeg onafhankelijke spatten toe voordat u de 3D-oorsprong interpreteert.'],
      ['Schaal ontbreekt', 'Alle afstanden worden louter illustratief', 'Rapporteer geen real-world oorsprongscoördinaten zonder kalibratie.'],
    ] },
    { type: 'title', text: 'De 3D-convergentie aflezen', level: 3 },
    { type: 'paragraph', html: 'De oorsprongssfeer in deze tool wordt berekend als het punt dat het dichtst bij alle geprojecteerde trajectlijnen ligt. Wanneer lijnen dicht bij elkaar passeren, is de spreidingswaarde klein en verbetert de betrouwbaarheid. Wanneer lijnen uiteenlopen, verschijnt de sfeer nog steeds, maar moet deze worden gelezen als een zwak compromis van de kleinste kwadraten in plaats van een precieze bron.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Convergentiegebied', description: 'Een tweedimensionale schatting op het doeloppervlak, vaak gebruikt om te zien waar de richtingen van de lange as elkaar kruisen wanneer ze van voren worden bekeken.', points: ['Nuttig voor een eerste beoordeling', 'Vertegenwoordigt op zichzelf geen verticale hoogte'] },
      { title: 'Oorsprongsgebied of Oorsprungsvolume', description: 'Een driedimensionale schatting die de richting op het vlak combineert met de impacthoek om trajecten in de ruimte te projecteren.', highlight: true, points: ['Verklaart de mogelijke bronhoogte', 'Gevoelig voor meting- en hoekonzekerheid'] },
    ] },
    { type: 'paragraph', html: 'Gebruikers zoeken vaak naar een <em>calculator voor het herkomstpunt van bloedspatten</em> en verwachten een enkele exacte coördinaat. In de praktijk is een goede interpretatie voorzichtiger. De oorsprong kan beter worden begrepen als een gebied dat door meerdere trajecten wordt ondersteund. Als de getekende lijnen een strakke bundel vormen, is het model coherenter. Als ze door een groot volume gaan, vertelt de reconstructie u dat de metingen, spatselectie of aannames moeten worden herzien.' },
    { type: 'title', text: 'Veelvoorkomende redenen waarom trajecten elkaar niet ontmoeten', level: 3 },
    { type: 'proscons', title: 'Sterke invoer versus zwakke invoer', items: [
      { pro: 'Verschillende goed gevormde elliptische spatten met duidelijke lange assen', con: 'Slechts één of twee spatten, of spatten geselecteerd omdat ze in een theorie lijken te passen' },
      { pro: 'Gekalibreerde metingen loodrecht op het impactoppervlak genomen', con: 'Schuine foto s, onbekende schaal of gekopieerde screenshots' },
      { pro: 'Onafhankelijke spatten van hetzelfde gebeurtenismechanisme', con: 'Gemengde passieve druppels, overdrachtsspatten, weggeslingerd bloed, vloeiing of secundaire impactpatronen' },
    ] },
    { type: 'paragraph', html: 'Een slechte convergentie betekent niet automatisch dat de tool fout is. Het kan betekenen dat de spatten niet tot hetzelfde patroon behoren, de foto perspectief-vervormd is, de lange as verkeerd is afgelezen, de spat geen zuivere ellips is of de fysieke gebeurtenis complexer is dan een eenvoudig puntbronmodel. Dat is waardevolle informatie. Een reconstructietool moet onenigheid blootleggen in plaats van deze te verbergen achter een betrouwbaar uitziend getal.' },
    { type: 'title', text: 'Waar deze tool goed voor is', level: 3 },
    { type: 'list', items: [
      '<strong>Gebruik meerdere spatten:</strong> drie of meer onafhankelijke spatten zorgen voor een zinvollere convergentieschatting.',
      '<strong>Let op de spreiding:</strong> een hoge spreiding waarschuwt dat de lijnen in 3D niet nauw overeenstemmen.',
      '<strong>Behoud de schaal:</strong> centimeter- of inch-waarden moeten afkomstig zijn van gekalibreerde foto s of scènemetingen.',
      '<strong>Scheid onderwijs van formele rapportage:</strong> deze visualisatie is het best voor onderwijs, planning en uitleg voorafgaand aan een formele beoordeling.',
    ] },
    { type: 'card', title: 'Beste werkstroom', html: 'Begin met het uitzetten van een kleine set spatten van hoge kwaliteit. Controleer of de 2D-richtingen van de lange as visueel zinvol zijn. Inspecteer vervolgens de 3D-trajecten, noteer de spreiding en verander één meting tegelijk om te zien welke spat de reconstructie stuurt. Die gevoeligheidscontrole is vaak nuttiger dan de ruwe oorsprongscoördinaat.' },
    { type: 'title', text: 'Wanneer niet te vertrouwen op een schatting van de oorsprong van bloedspatten', level: 3 },
    { type: 'paragraph', html: 'Vertrouw niet op een eenvoudige schatting van de oorsprong wanneer de spatten zwaar vervormd zijn, het doeloppervlak gebogen of onregelmatig is, het patroon overdrachtsspatten of geprojecteerd uitgeademd bloed bevat, het oppervlak is verplaatst of de scène geen betrouwbare schaal heeft. Dezelfde voorzichtigheid geldt wanneer spatten afkomstig zijn van verschillende mechanismen of verschillende momenten in de gebeurtenis. Een strak uitziende 3D-visualisatie kan nog steeds misleidend zijn als het invoerpatroon niet geschikt is voor geometrische reconstructie.' },
    { type: 'glossary', items: [
      { term: 'Impacthoek', definition: 'De geschatte hoek tussen het druppeltraject en het doeloppervlak, gewoonlijk berekend uit de verhouding tussen breedte en lengte van een elliptische spat.' },
      { term: 'Trajectlijn', definition: 'Een geprojecteerde lijn die een mogelijk terugwaarts pad van een spat in de driedimensionale ruimte laat zien.' },
      { term: 'Convergentiegebied', definition: 'Het geschatte gebied waar spatrichtingen elkaar kruisen wanneer ze op het doelvlak worden geprojecteerd.' },
      { term: 'Oorsprongsgebied', definition: 'Het geschatte driedimensionale gebied waar bloed vandaan kan zijn gekomen, gebaseerd op meerdere geprojecteerde trajecten.' },
    ] },
    { type: 'summary', title: 'Optimaal gebruik', items: [
      'Gebruik de analysator om trajectgeometrie te begrijpen en meetgevoeligheid te testen.',
      'Vergelijk de oorsprongssfeer met de spreidingswaarde voordat u een reconstructie vertrouwt.',
      'Gebruik de visualisatie niet als een op zichzelf staand forensisch oordeel.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
