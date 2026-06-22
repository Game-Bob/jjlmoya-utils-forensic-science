import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-spharen-energie-gewinnung-simulator';
const title = 'Dyson Sphären Energiegewinnungs Simulator';
const description = 'Schätzen Sie Dyson-Schwarm-, Ring-, Hüllen- und Statit-Kollektor-Entwürfe für verschiedene Sterne. Berechnen Sie die eingefangene Leistung, den Umlaufradius, die Materialmasse und die erforderliche Abdeckung für eine Ziel-Kardaschow-Skala.';

const howTo = [
  {
    name: 'Wählen Sie einen Sterntyp',
    text: 'Beginnen Sie mit einem M-Zwerg, einem sonnenähnlichen Stern, einem A-Stern, einem Roten Riesen oder einem Blauen Riesen. Der Simulator verwendet repräsentative Leuchtkraft- und Massewerte, um Kollektorradius und Umlaufzeit zu schätzen.',
  },
  {
    name: 'Wählen Sie die Megastruktur-Architektur',
    text: 'Vergleichen Sie einen Dyson-Schwarm, einen Äquatorring, eine starre Hülle oder eine Statit-Spiegelwolke. Jeder Entwurf hat unterschiedliche Einfangeffizienz, Materialdichte und Stabilitätsannahmen.',
  },
  {
    name: 'Stellen Sie Abdeckung und Betriebstemperatur ein',
    text: 'Erhöhen Sie die Abdeckung, um mehr Sternleistung einzufangen, und passen Sie die Betriebstemperatur an, um die Kollektoren näher an den Stern oder weiter weg zu bringen.',
  },
  {
    name: 'Wählen Sie ein Kardaschow-Ziel',
    text: 'Nutzen Sie den Zielregler, um zu sehen, wie viel vom Stern umschlossen werden muss, um ein zivilisationsweites Energieziel zu erreichen.',
  },
];

const faq = [
  {
    question: 'Was ist der Unterschied zwischen einer Dyson-Sphäre und einem Dyson-Schwarm?',
    answer: 'Eine starre Dyson-Sphäre ist eine durchgehende Hülle um einen Stern, während ein Dyson-Schwarm eine große Sammlung unabhängiger umlaufender Kollektoren ist. Die meisten technischen Diskussionen bevorzugen Schwärme, da eine feste Hülle strukturell instabil und extrem materialintensiv wäre.',
  },
  {
    question: 'Wie wählt der Simulator den optimalen Radius?',
    answer: 'Er schätzt die Entfernung, bei der Kollektoren, die von beiden Seiten abstrahlen, unter der gewählten Sternleuchtkraft die gewünschte Betriebstemperatur erreichen. Heißere Kollektoren können näher umlaufen, während kühlere Kollektoren größere Radien benötigen.',
  },
  {
    question: 'Was bedeutet die Kardaschow-Bewertung hier?',
    answer: 'Der Kardaschow-Wert wird aus der eingefangenen Leistung mit der logarithmischen Formel K = (log10(P) - 6) / 10 berechnet, wobei P die Leistung in Watt ist. Ein Wert nahe K1 steht für planetaren Energieverbrauch, während K2 sich der vollen Sternleistung annähert.',
  },
  {
    question: 'Ist die Materialmasse realistisch?',
    answer: 'Es handelt sich um eine erste bildungsspezifische Abschätzung basierend auf Kollektorfläche, Flächendichte und einem Stabilitätsfaktor. Echte Entwürfe würden Stationshaltung, Energieübertragung, Abbauverluste, Redundanz, Wärmeabfuhr und Fertigungsinfrastruktur benötigen.',
  },
  {
    question: 'Warum benötigen helle Sterne so große Kollektorsysteme?',
    answer: 'Sterne mit hoher Leuchtkraft verschieben den sicheren Wärmeradius nach außen. Das vergrößert die für einen bestimmten Abdeckungsanteil benötigte Oberfläche, sodass der Materialbedarf schneller steigen kann, als die eingefangene Leistung intuitiv wirkt.',
  },
  {
    question: 'Kann eine Zivilisation Kardaschow Typ II mit teilweiser Abdeckung erreichen?',
    answer: 'Ja, wenn der Mutterstern hell genug ist und die Kollektoren effizient sind. Bei einem sonnenähnlichen Stern erfordert das Erreichen von Typ II die Erfassung eines großen Teils der Sonnenleuchtkraft, aber bei helleren Sternen kann dasselbe Energieziel mit einem geringeren Abdeckungsanteil erreicht werden.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson-Kollektor-Visualisierung',
    starType: 'Sterntyp',
    structureType: 'Struktur',
    coverage: 'Kollektorabdeckung',
    operatingTemp: 'Betriebstemperatur',
    kardashevTarget: 'Kardaschow-Ziel',
    kardashevRating: 'Aktuelle Bewertung',
    capturedPower: 'Eingefangene Leistung',
    optimalRadius: 'Optimaler Radius',
    targetCoverage: 'Zielabdeckung',
    materialMass: 'Materialmasse',
    captureMeter: 'Fortschritt zum Ziel',
    statusReady: 'Passen Sie das System an, um den Kollektorbedarf zu schätzen.',
    statusUnderbuilt: 'Die Abdeckung liegt unter dem gewählten Kardaschow-Ziel. Fügen Sie Kollektoren hinzu oder wählen Sie einen helleren Stern.',
    statusBalanced: 'Abdeckung und Sternleistung liegen nahe am gewählten Ziel auf Zivilisationsskala.',
    statusExtreme: 'Diese Konfiguration überschreitet das Ziel. Sie erfasst enorme Leistung, aber der Materialbedarf steigt schnell.',
    orbitalPeriod: 'Umlaufzeit',
    collectorArea: 'Kollektorfläche',
    mercuryMasses: '{value} Merkur-Massen',
    kilograms: '{value} kg',
    daysUnit: '{value} Tage',
    starMDwarf: 'M-Zwerg',
    starSun: 'Sonnentyp G',
    starA: 'A-Stern',
    starRedGiant: 'Roter Riese',
    starBlueGiant: 'Blauer Riese',
    structureSwarm: 'Dyson-Schwarm',
    structureRing: 'Äquatorring',
    structureShell: 'Starre Hülle',
    structureStatite: 'Statit-Spiegelwolke',
  },
  seo: [
    { type: 'title', text: 'Dyson Sphären Energiegewinnungs Simulator', level: 2 },
    { type: 'paragraph', html: 'Eine Dyson-Sphäre ist nicht nur ein Science-Fiction-Bild eines Sterns in einer Hülle. Sie ist eine Familie möglicher Megastrukturkonzepte zum Abfangen von Sternleuchtkraft: Satellitenschwärme, Äquatorringe, dünne Spiegelwolken und die berühmte, aber problematische starre Hülle. Dieser Simulator verwandelt diese Ideen in Zahlen, damit Sie vergleichen können, wie Sterntyp, Kollektortemperatur, Abdeckung und Strukturentwurf das Energiebudget verändern.' },
    { type: 'paragraph', html: 'Der Rechner schätzt die eingefangene Leistung, den thermischen Umlaufradius, die Kollektorfläche, die Umlaufzeit, die Materialmasse und die für ein gewähltes Kardaschow-Ziel benötigte Abdeckung. Er ist für Studenten, Weltbauer, Wissenschaftskommunikatoren und alle entwickelt, die verstehen wollen, warum Typ-II-Zivilisationen schwer zu erreichen sind: Die Herausforderung ist nicht nur Energie, sondern auch Fläche, Wärme, Rohstoffabbau, Stabilität und orbitale Logistik.' },
    { type: 'title', text: 'Wie der Dyson Radius geschätzt wird', level: 3 },
    { type: 'paragraph', html: 'Der optimale Radius wird aus der Sternleuchtkraft und der Kollektor-Betriebstemperatur berechnet. Ein Kollektor nahe einem hellen Stern erfährt einen intensiven Fluss und muss heiß laufen oder enorme Wärmemengen abführen. Eine Bewegung nach außen reduziert die thermische Belastung, aber die erforderliche Kollektorfläche wächst mit dem Quadrat der Entfernung.' },
    { type: 'title', text: 'Dyson Schwarm, Ring, Hülle und Statit-Wolke im Vergleich', level: 3 },
    {
      type: 'list', items: [
        '<strong>Dyson-Schwarm:</strong> viele unabhängig umlaufende Kollektoren. Er ist die plausibelste großstrukturelle Architektur, da er schrittweise gebaut werden kann und keine starre Sternhülle erfordert.',
        '<strong>Äquatorring:</strong> ein schmaleres Kollektorband mit geringerer Abdeckungseffizienz. Er ist als erste Megastruktur leichter vorstellbar.',
        '<strong>Starre Hülle:</strong> visuell ikonisch, aber mechanisch ungünstig. Eine Hülle um einen Stern hat schwerwiegende Stabilitäts- und Materialprobleme.',
        '<strong>Statit-Spiegelwolke:</strong> extrem leichte Reflektoren, die teilweise durch Strahlungsdruck gehalten werden. Sie reduziert den Materialbedarf, hat aber eine geringere Wärmetoleranz und anspruchsvolle Kontrollanforderungen.'
      ]
    }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};