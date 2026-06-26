import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'schiessrueckstand-verteilung-abstand-rechner-gsr';
const title = 'GSR Schiessrückstand Abstandsrechner';
const description = 'Simulieren Sie didaktische Verteilungsmuster von Schiessrückständen auf einer Zieloberfläche basierend auf Schussdistanz, Munitionstyp, Partikelstreuung und Sengwirkung.';

const howTo = [
  {
    name: 'Schussdistanz einstellen',
    text: 'Verschieben Sie den Distanzregler von direktem Kontakt bis auf drei Meter und beobachten Sie, wie sich die Ablagerung von einem kompakten, thermisch veränderten Bereich in ein breites, loses Partikelfeld verwandelt.',
  },
  {
    name: 'Aktivieren Sie ein Munitionsprofil',
    text: 'Wählen Sie ein Profil für 9-mm-Pistole, .38-Revolver oder 12-Gauge-Schrotflinte. Jedes Profil ändert die Partikelanzahl, den Streukoeffizienten und die geschätzte thermische Reichweite.',
  },
  {
    name: 'Zielscheibe und Ausbreitungskegel prüfen',
    text: 'Nutzen Sie die Gewebedarstellung, um Partikeldichte und radiale Verteilung zu vergleichen, und den Seitenkegel, um die physikalische Ausdehnung der Partikelwolke vor dem Aufprall zu verstehen.',
  },
  {
    name: 'Ergebnis der Distanzkategorie deuten',
    text: 'Prüfen Sie die ermittelte Bereichskategorie und die typischen Befunde. Das Ergebnis beschreibt die didaktische Bedeutung von Kontakt-, Nahkontakt-, Nahbereichs- und Fernschussmustern.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Kann die Verteilung von Schiessrückständen die exakte Schussentfernung beweisen?',
    answer: 'Nein. GSR-Muster unterstützen eine Schätzung des Entfernungsbereichs, keine zentimetergenaue Distanz. Reale Rückschlüsse erfordern die Untersuchung der spezifischen Waffe, der Munition, des Zielmaterials, des Winkels und vergleichende Testschüsse unter kontrollierten Bedingungen.',
  },
  {
    key: 'faq-2',
    question: 'Warum zeigen Kontaktschüsse stärkere Verrußungen und Verbrennungen?',
    answer: 'Bei sehr kurzen Distanzen treffen heiße Gase, Ruß, unverbranntes Pulver und metallische Zündsatzpartikel auf das Ziel, bevor sich die Wolke ausdehnen und abkühlen kann. Dies führt zu Schwärzung, Verschmorung, Geweberissen und Mündungsabdrücken.',
  },
  {
    key: 'faq-3',
    question: 'Welche Elemente werden typischerweise mit Zündmittel-GSR assoziiert?',
    answer: 'Die klassische GSR-Analyse konzentriert sich auf Partikel, die Blei, Barium und Antimon enthalten, obwohl moderne bleifreie Munition dieses Profil verändern kann. REM-EDS-Verfahren bewerten die Partikelmorphologie und -chemie gemeinsam.',
  },
  {
    key: 'faq-4',
    question: 'Warum verwendet der Simulator ein Gaußsches Radialmodell?',
    answer: 'Ein Gaußsches Modell ist eine nützliche didaktische Annäherung, da sich die meisten Partikel nahe dem Zentrum konzentrieren. Tatsächliche Muster können durch Wind, Schusswinkel, Waffenkonstruktion oder Gewebebeschaffenheit asymmetrisch sein.',
  },
  {
    key: 'faq-5',
    question: 'Eignet sich dieser Rechner für forensische Gutachten?',
    answer: 'Nein. Es handelt sich um ein rein pädagogisches Modell. Ein forensisches Gutachten muss sich auf validierte Laborprotokolle, Qualitätskontrollen, Original-Testmuster und die Bewertung durch qualifizierte Sachverständige stützen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Schussdistanz',
    units: 'Einheitensystem',
    metric: 'Metrisch',
    imperial: 'Imperial',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Munitionsprofil',
    ammoPistol9mm: '9-mm-Pistole',
    ammoRevolver38: '.38-Revolver',
    ammoShotgun12: '12-Gauge-Schrotflinte',
    target: 'Zielgewebe',
    cone: 'Rückstandswolke',
    canvasAria: 'Partikelverteilung der Schiessrückstände auf dem Zielgewebe',
    rangeStripAria: 'Entfernungskategorien',
    category: 'Distanzinterpretation',
    categoryContactLabel: 'Aufgesetzter Schuss / Kontaktbereich',
    categoryNearContactLabel: 'Nahezu aufgesetzt / Verbrennungsbereich',
    categoryCloseRangeLabel: 'Nahschuss / Pulvertätowierungsbereich',
    categoryDistantLabel: 'Fernschuss oder unbestimmte Distanz',
    density: 'Partikeldichte',
    thermal: 'Thermischer Effekt',
    radius: 'Geschätzter Musterradius',
    radiusSuffix: 'Radius',
    expected: 'Erwarteter Befund',
    expectedContact: 'Es werden eine dichte zentrale Ablagerung, das Risiko eines Mündungsabdrucks, Rußschwärzung, Geweberisse und thermische Veränderungen im Zielbereich erwartet.',
    expectedNearContact: 'Starker Ruß und Schmauchpartikel bleiben um den Einschussbereich konzentriert, mit einem sichtbaren, aber noch kompakten radialen Hof.',
    expectedCloseRange: 'Die Pulvertätowierung und metallische Rückstände weiten sich zu einem messbaren Ring aus; thermische Effekte und Ruß lassen spürbar nach.',
    expectedDistant: 'Die Partikel sind spärlich und weit verstreut. Eine Entfernungsbestimmung erfordert chemische Analysen und Vergleichsschüsse unter gleichen Bedingungen.',
    contact: 'Kontakt',
    near: 'Nahkontakt',
    close: 'Nahbereich',
    distant: 'Fernschuss',
    disclaimer: 'Pädagogisches Modell. Die GSR-Entfernungsbestimmung erfordert kontrollierte Testschüsse, den Vergleich von Zielmaterialien und validierte chemische Nachweise.',
  },
  seo: [
    {
      type: 'title',
      text: 'Schussentfernungsbestimmung anhand von GSR-Schiessrückstandsmustern',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Didaktisches Modell',
      title: 'Was dieser Rechner beantwortet',
      html: 'Dieser GSR-Distanzrechner veranschaulicht, ob ein Schmauchmuster einem Kontaktschuss, einem Nahkontakt, einem Nahschuss oder einem Fernschuss entspricht. Er dient dem Verständnis der <strong>Schussentfernungsbestimmung</strong> und ersetzt kein forensisches Gutachten.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'simulierte Mündungs-Ziel-Distanz', icon: 'mdi:ruler' },
        { value: '4', label: 'erklärte Entfernungskategorien', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'verglichene Munitionsprofile', icon: 'mdi:ammunition' },
        { value: '2', label: 'Einheitensysteme: Metrisch und Imperial', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'So interpretieren Sie das simulierte Muster',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Checkliste zur Schnellentwertung',
      items: [
        'Dichter zentraler Ruß, Verbrennungen, Risse oder ein Mündungsabdruck deuten auf einen aufgesetzten oder nahezu aufgesetzten Schuss hin.',
        'Ein kompakter dunkler Kern mit umgebenden Pulverkörnern spricht für eine sehr kurze Distanz; Testschüsse sind zur Eingrenzung nötig.',
        'Verstreute Pulvertätowierung ohne Ruß passt meist zu einem Nahschuss außerhalb der thermischen Reichweite.',
        'Spärliche sichtbare Rückstände beweisen nicht das Fehlen von GSR; chemische Analysen oder Mikroskopie können Partikel dennoch nachweisen.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Wobei das Tool hilft',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Es veranschaulicht den Zusammenhang zwischen Schussdistanz, Schmauchdichte, Partikelverteilung und Hitzeeffekten.',
          points: ['Unterrichts-Demonstration', 'Erklärung der Suchintention', 'Fachbegriffe der Forensik', 'Vergleich von Einheiten'],
        },
        {
          title: 'Was es nicht beweisen kann',
          icon: 'mdi:alert-circle-outline',
          description: 'Es kann die tatsächliche Schussdistanz in einem echten Fall nicht ohne physische Spuren und Validierung bestimmen.',
          points: ['Keine Beweismittel-Uploads', 'Kein chemischer Nachweis', 'Kein waffenspezifisches Testmuster', 'Keine rechtliche Beweiskraft'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Häufige Frage', 'Schlüsselmerkmal im Muster', 'Fachliche Antwort'],
      rows: [
        ['Wie sieht ein aufgesetzter Schuss aus?', 'Dichter Ruß, Verbrennung, Risse, Gewebeverschmelzung oder Mündungsabdruck.', 'Ein Kontaktschuss ist plausibel, aber Gasausdehnung und Gewebespannung beeinflussen das Erscheinungsbild stark.'],
        ['Wie nah war die Waffe?', 'Dichte Rückstände nahe dem Einschuss mit einem kompakten Pulverhof.', 'Das Muster stützt eine Entfernungshypothese, erfordert jedoch den Abgleich mit Testschüssen.'],
        ['Was ist eine Pulvertätowierung?', 'Punktförmige Spuren durch unverbrannte Pulverkörner mit wenig Ruß.', 'Die Verteilung variiert je nach Munition, Textilart, Schusswinkel und Zwischenbarrieren.'],
        ['Verschwindet GSR bei größerer Distanz?', 'Sehr spärliche oder keine sichtbaren Rückstände, weite Verteilung.', 'Sichtbare Spuren nehmen ab, Zündsatzpartikel können jedoch mikroskopisch nachgewiesen werden.'],
      ],
    },
    {
      type: 'title',
      text: 'Physikalische Berechnung des Modells',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Simulator nutzt eine mathematisch präzise radiale Gauß-Verteilung, um die Schmauchpartikel und Rückstände um das Einschusszentrum herum auf eine realistische und zufällige Weise zu platzieren. Sehr kurze Mündungs-Ziel-Distanzen erzeugen eine äußerst enge, konzentrierte und hochdichte Ablagerung der Schiessrückstände im unmittelbaren Zentrum; größere Entfernungen vergrößern die radiale Streuung der Partikel im Raum signifikant und verringern dadurch die durchschnittliche Dichte pro Quadratzentimeter auf der Gewebeoberfläche. Das Berechnungsmodell trennt zudem feine Rußablagerungen systematisch von den schwereren, metallischen Partikeln des Zündsatzes, da die thermische Sengwirkung und das Rußfeld eine wesentlich geringere physikalische Reichweite besitzen als die mikroskopisch nachweisbaren metallischen Rückstände. Diese visuelle Simulation bietet somit eine wertvolle didaktische Grundlage für das Verständnis forensischer Spurenanalysen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Schiessrückstände (Gunshot Residue): Partikel aus Zündsatz, Treibladungspulver, Projektil und heißen Gasen.' },
        { term: 'Rußschwärzung', definition: 'Dunkler Kohlenstoffniederschlag, der meist nur bei aufgesetzten und sehr nahen Schüssen sichtbar ist.' },
        { term: 'Pulvertätowierung', definition: 'Kleine, punktförmige Hauteinschläge oder Schmauchspuren durch unverbranntes Pulver.' },
        { term: 'Mündungsabdruck', definition: 'Abdruck der Mündung auf der Zieloberfläche durch den Druck und die Hitze beim aufgesetzten Schuss.' },
        { term: 'Vergleichsschuss', definition: 'Kontrollierte Schüsse aus bekannter Distanz mit Tatwaffe und Originalmunition zur Spurenbewertung.' },
      ],
    },
    {
      type: 'title',
      text: 'Entfernungsklassen und typische Befunde',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Bereichsklasse', 'Typische Befunde', 'Einschränkung der Interpretation'],
      rows: [
        ['Kontakt', 'Massive zentrale Ablagerung, Ruß, Verbrennung, Risse oder Mündungsabdruck.', 'Gewebeart und Gasausdehnung können den Defekt stark verändern.'],
        ['Nahkontakt', 'Kompakter Ruß- und Pulverhof um die Einschussstelle.', 'Lockere Kleidung oder Zwischenobjekte können das Verteilungsmuster beeinflussen.'],
        ['Nahbereich', 'Pulvertätowierung, Schmauchpartikel ohne wesentliche Rußbildung.', 'Dieselbe Distanz zeigt auf Baumwolle, Denim, Haut oder Papier unterschiedliche Muster.'],
        ['Fernschuss', 'Vereinzelte Partikel, weite Streuung oder keine makroskopischen Spuren.', 'Mikroskopische und chemische Nachweise gewinnen bei schwindenden sichtbaren Spuren an Bedeutung.'],
      ],
    },
    {
      type: 'tip',
      title: 'Praktischer Auswertungskurs',
      html: 'Betrachten Sie GSR-Spuren stets als ein <strong>Vergleichsproblem von Entfernungsbereichen</strong> und nicht als absoluten Zahlenwert. Eine wissenschaftliche Aussage erfordert stets den Abgleich mit Testmustern unter identischen Bedingungen.',
    },
    {
      type: 'title',
      text: 'Dokumentations-Checkliste vor der Musterbewertung',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Zielmaterial, Webart, Farbe, Dicke und eventuelle Gewebespannungen oder Falten dokumentieren.',
        'Waffenmodell, Lauflänge, Munitionsmarke, Pulverart und Mündungsaufsätze erfassen.',
        'Muster mit Maßstab, Ausrichtung, Lichtverhältnissen und Angaben zur Asservatenkette fotografieren.',
        'Separat nach Ruß, Verschmorung, unverbranntem Pulver, Abstreifring und Geweberissen suchen.',
        'Vor einer gutachterlichen Distanzzuordnung stets kontrollierte Vergleichsschüsse durchführen.',
      ],
    },
    {
      type: 'proscons',
      title: 'Digitale Simulation vs. forensische Laboranalyse',
      items: [
        { pro: 'Veranschaulicht die Zunahme der Partikelstreuung mit wachsender Schussdistanz.', con: 'Berücksichtigt keine waffen-, munitions- oder materialspezifischen Abweichungen.' },
        { pro: 'Verdeutlicht die Unterschiede der etablierten Distanzkategorien.', con: 'Ersetzt keine chemischen Nachweisverfahren oder Rasterelektronenmikroskopie (REM-EDS).' },
        { pro: 'Schärft das Verständnis für die Grenzen der rein visuellen Musteranalyse.', con: 'Besitzt ohne laborübliche Validierung und Sachverständigenprüfung keine Beweiskraft.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische Warnung',
      title: 'Ausschluss der gutachterlichen Verwendung',
      html: 'Ein Webmodell kann die physikalischen Beweise eines echten Falls nicht ersetzen. Es kann weder den Waffenzustand, die Pulverchemie, Zwischenhindernisse noch die Qualität der Spurensicherung bewerten. Nutzen Sie diese Seite ausschließlich zu Lehrzwecken und wenden Sie sich für echte Untersuchungen an akkreditierte Labore.',
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
