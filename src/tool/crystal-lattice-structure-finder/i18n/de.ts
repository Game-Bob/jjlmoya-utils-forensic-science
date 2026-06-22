import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kristallgitter-struktur-finder';
const title = 'Kristallgitter Struktur Erkunder';
const description = 'Erkunden Sie einfach kubische, kubisch flächenzentrierte und hexagonal dichtest gepackte Elementarzellen mit interaktivem 3D-Viewer, Packungsdichte, Koordinationszahl und theoretischem Dichtrechner.';

const howTo = [
  {
    name: 'Wählen Sie ein Gitter oder Material',
    text: 'Beginnen Sie mit einer Strukturfamilie wie einfach kubisch (SC), FCC oder HCP, oder wählen Sie ein reales Materialvoreinstellung aus, um dessen Gitterkonstante und Atom- bzw. Formelmasse zu laden.',
  },
  {
    name: 'Drehen Sie die Elementarzelle',
    text: 'Ziehen Sie an den Winkel- und Zoom-Reglern, um zu sehen, welche Atome auf Ecken, Flächen oder im Inneren der konventionellen Zelle sitzen.',
  },
  {
    name: 'Packungsdichte und Dichte ablesen',
    text: 'Vergleichen Sie Packungsdichte, Koordinationszahl, Atome pro Zelle, Zellenmasse, Zellvolumen und theoretische Dichte für die gewählte Struktur.',
  },
  {
    name: 'Eigene Konstanten testen',
    text: 'Bearbeiten Sie Gitterparameter a, c/a-Verhältnis und Masse, um zu sehen, wie sich die theoretische Dichte ändert, wenn der Kristall expandiert, schrumpft oder seine Zusammensetzung wechselt.',
  },
];

const faq = [
  {
    question: 'Was ist eine Elementarzelle in einem Kristallgitter?',
    answer: 'Eine Elementarzelle ist der kleinste sich wiederholende dreidimensionale Kasten, der den Raum ausfüllen kann, um den Kristall aufzubauen. Ihre Atome können mit benachbarten Zellen geteilt werden, sodass die Netto-Atome pro Zelle kleiner sein können als die Anzahl der auf den Grenzen gezeichneten Kugeln.',
  },
  {
    question: 'Warum haben FCC und HCP denselben Packungsfaktor?',
    answer: 'FCC und ideales HCP sind beides dichtest gepackte Anordnungen gleicher Kugeln. Sie stapeln dichte dreieckige Schichten in unterschiedlicher Reihenfolge  -  ABCABC für FCC und ABAB für HCP  -  aber beide füllen etwa 74 Prozent des Raums mit Atomen.',
  },
  {
    question: 'Wie wird die theoretische Dichte berechnet?',
    answer: 'Der Rechner teilt die Masse innerhalb einer Elementarzelle durch das Volumen der Elementarzelle. Die Zellenmasse ergibt sich aus Atomen oder Formeleinheiten pro Zelle multipliziert mit der Molmasse und geteilt durch die Avogadro-Konstante.',
  },
  {
    question: 'Warum kann die gemessene Dichte vom theoretischen Ergebnis abweichen?',
    answer: 'Reale Proben können Leerstellen, Verunreinigungen, Poren, Korngrenzen, Isotopenmischungen, thermische Ausdehnung oder mehrere Phasen enthalten. Der theoretische Wert geht von einem perfekten Kristall mit der gewählten Gitterkonstante aus.',
  },
  {
    question: 'Ist Halit wirklich ein FCC-Metallgitter?',
    answer: 'Nein. Halit ist ionisches Steinsalz, kein Metall. Die Voreinstellung verwendet die konventionelle FCC-abgeleitete Zelle, weil NaCl vier Formeleinheiten pro kubischer Zelle besitzt, was sie für die Übung der Dichteberechnung nützlich macht.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Interaktive Kristall-Elementarzelle',
    material: 'Material',
    lattice: 'Gitter',
    rotation: 'Rotation',
    zoom: 'Zoom',
    latticeA: 'Gitterkonstante a',
    cRatio: 'c/a-Verhältnis',
    molarMass: 'Molmasse',
    atomsPerCell: 'Atome pro Zelle',
    packingFactor: 'Packungsdichte',
    coordination: 'Koordination',
    density: 'Dichte',
    cellVolume: 'Zellvolumen',
    cellMass: 'Zellenmasse',
    radius: 'Atomradius',
    cornerAtoms: 'Eckenatome',
    faceAtoms: 'Flächenatome',
    interiorAtoms: 'Innenatome',
    materialNote: 'Materialhinweis',
    formula: 'Formel',
    resetView: 'Ansicht zurücksetzen',
    crystalProperties: 'Kristalleigenschaften',
    physicalMetrics: 'Physikalische Kennzahlen',
    latticeSimpleCubic: 'Einfach kubisch',
    latticeFcc: 'Kubisch flächenzentriert',
    latticeHcp: 'Hexagonal dichtest gepackt',
    shortSc: 'SC',
    shortFcc: 'FCC',
    shortHcp: 'HDP',
    materialCopper: 'Kupfer',
    materialCopperNote: 'Häufiges FCC-Metall mit hoher elektrischer Leitfähigkeit.',
    materialAluminum: 'Aluminium',
    materialAluminumNote: 'Leichtes FCC-Metall, häufig als Dichtevergleich in Lehrbüchern verwendet.',
    materialPolonium: 'Alpha-Polonium',
    materialPoloniumNote: 'Seltenes Beispiel eines einfach kubischen Elementkristalls.',
    materialMagnesium: 'Magnesium',
    materialMagnesiumNote: 'HDP-Metall mit einem c/a-Verhältnis nahe der idealen Packung.',
    materialTitanium: 'Alpha-Titan',
    materialTitaniumNote: 'Raumtemperatur-HDP-Phase von Titan.',
    materialHalite: 'Halit (Näherung)',
    materialHaliteNote: 'Steinsalz wird über seine konventionelle FCC-Zelle mit vier NaCl-Formeleinheiten modelliert.',
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
    latticeBodyCenteredCubic: 'Kubisch raumzentriert',
    latticeCesiumChloride: 'Cäsiumchlorid',
    latticeDiamondCubic: 'Diamantkubisch',
    latticeFaceCenteredCubic: 'Kubisch flächenzentriert',
    latticeHexagonalClosePacked: 'Hexagonal dichtest gepackt',
    latticePerovskite: 'Kubischer Perowskit',
    latticeRockSalt: 'Steinsalz',
    latticeRutile: 'Rutil',
    latticeWurtzite: 'Wurtzit',
    latticeZincBlende: 'Zinkblende',
    materialAlphaIron: 'Alpha-Eisen',
    materialAlphaIronNote: 'Raumtemperaturphase von Eisen mit kubisch raumzentrierter Struktur.',
    materialTungsten: 'Wolfram',
    materialTungstenNote: 'Dichtes BCC-Refraktärmetall mit sehr hohem Schmelzpunkt.',
    materialSilicon: 'Silicium',
    materialSiliconNote: 'Diamantkubischer Halbleiter für integrierte Schaltungen.',
    materialDiamond: 'Diamant',
    materialDiamondNote: 'Kovalentes Kohlenstoffnetzwerk in diamantkubischer Struktur.',
    materialCesiumChloride: 'Cäsiumchlorid',
    materialCesiumChlorideNote: 'Ionenstruktur aus ineinander greifenden einfach kubischen Gittern mit achtfacher Koordination.',
    materialZincSulfide: 'Zinksulfid',
    materialZincSulfideNote: 'Sphalerit, auch Zinkblende genannt, mit tetraedrischer Koordination.',
    materialGalliumNitride: 'Galliumnitrid',
    materialGalliumNitrideNote: 'Wurtzit-Halbleiter für LEDs und Leistungselektronik.',
    materialStrontiumTitanate: 'Strontiumtitanat',
    materialStrontiumTitanateNote: 'Kubisches Perowskitoxid, oft als Substrat und dielektrisches Modell verwendet.',
    materialRutileTitania: 'Rutil-Titania',
    materialRutileTitaniaNote: 'Rutil-TiO2-Struktur mit oktaedrischer Titan-Koordination.',
  },
  seo: [
    {
      type: 'title',
      text: 'Kristallgitter Struktur Erkunder für Elementarzellen, Packungsdichte und Dichte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Kristallgitter Struktur Erkunder hilft, das Bild einer Elementarzelle mit den Berechnungen zu verbinden, die Studierende und Materialwissenschaftler üblicherweise benötigen. Sie können einfach kubische, kubisch flächenzentrierte und hexagonal dichtest gepackte Strukturen untersuchen und dann Packungsdichte, Koordinationszahl, Atome pro Zelle, Atomradius aus dem Gitterparameter, Zellvolumen, Zellenmasse und theoretische Dichte anhand realer Materialvoreinstellungen oder eigener Eingaben berechnen.',
    },
    {
      type: 'paragraph',
      html: 'Der interaktive Viewer ist auf die typische Schwierigkeit in der Kristallographie ausgelegt: Grenzflächenatome sind sichtbar, aber nur ein Bruchteil jedes Grenzflächenatoms gehört zur ausgewählten Zelle. Durch Drehen des Modells wird der Unterschied zwischen Eckpositionen, Flächenpositionen und Innenpositionen leichter erkennbar, bevor Sie die numerische Formel verwenden.',
    },
    {
      type: 'title',
      text: 'Einfach kubisch, FCC und HCP im Vergleich',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Struktur', 'Netto-Atome pro Zelle', 'Koordinationszahl', 'Packungsdichte', 'Typische Beispiele'],
      rows: [
        ['Einfach kubisch', '1', '6', '52,36 %', 'Alpha-Polonium ist das klassische Elementbeispiel.'],
        ['Kubisch flächenzentriert (FCC)', '4', '12', '74,05 %', 'Kupfer, Aluminium, Nickel, Silber, Gold und viele duktile Metalle.'],
        ['Hexagonal dichtest gepackt (HCP)', '6', '12', '74,05 %', 'Magnesium, Alpha-Titan, Zink, Kobalt und Beryllium.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Einfach kubische Packung ist leicht zu veranschaulichen, weil die Atome entlang der Würfelkante aneinanderstoßen und jedes Eckatom ein Achtel zur Zelle beiträgt. FCC fügt Atome in der Mitte jeder Fläche hinzu, sodass die Atome entlang der Flächendiagonalen aneinanderstoßen und die Nettoanzahl vier Atome pro konventioneller kubischer Zelle beträgt. HCP verwendet hexagonale Schichten anstelle eines kubischen Kastens, aber ideales HCP erreicht dieselbe dichtest gepackte Grenze wie FCC.',
    },
    {
      type: 'title',
      text: 'Formel für die Packungsdichte',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Packungsdichte (auch Raumerfüllung) ist der Anteil des Elementarzellenvolumens, der von harten Kugelatomen eingenommen wird. Sie berechnet sich als <strong>APF = Volumen der Atome in der Zelle / Volumen der Elementarzelle</strong>. Für einfach kubisch ergibt sich pi / 6, da ein Atom mit Radius a/2 in die kubische Zelle passt. FCC und ideales HCP erreichen beide etwa 0,7405, was dem maximalen Packungsanteil für gleiche Kugeln entspricht.',
    },
    {
      type: 'paragraph',
      html: 'Der Packungsfaktor ist nicht dasselbe wie die Dichte. Die Packungsdichte beschreibt, wie effizient identische Kugeln den Raum füllen, während die Dichte auch von der Molmasse und den Gitterabmessungen abhängt. Ein leichtes HCP-Metall und ein schweres FCC-Metall können ähnliche Packungsfaktoren, aber sehr unterschiedliche Dichten aufweisen.',
    },
    {
      type: 'title',
      text: 'Formel für die theoretische Dichte des Rechners',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Rechner verwendet <strong>rho = nM / (NA Vzelle)</strong>. In dieser Gleichung ist <strong>n</strong> die Anzahl der Atome oder Formeleinheiten pro Zelle, <strong>M</strong> die Molmasse in Gramm pro Mol, <strong>NA</strong> die Avogadro-Konstante und <strong>Vzelle</strong> das Volumen der Elementarzelle in Kubikzentimetern. Kubische Zellen verwenden a^3. Hexagonale Zellen verwenden (3 sqrt(3) / 2) a^2 c, wobei c über das c/a-Verhältnis eingegeben wird.',
    },
    {
      type: 'paragraph',
      html: 'Da Gitterkonstanten üblicherweise in Angström tabelliert werden, rechnet der Rechner Angström vor der Dichteberechnung in Zentimeter um. Eine kleine Änderung der Gitterkonstante kann die Dichte merklich beeinflussen, da das Volumen bei kubischen Zellen mit der dritten Potenz skaliert.',
    },
    {
      type: 'title',
      text: 'Verwendung der Gittervoreinstellungen für Metalle und Minerale',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kupfer und Aluminium:</strong> vergleichen Sie zwei FCC-Metalle mit gleicher Netto-Atomzahl pro Zelle, aber unterschiedlichen Molmassen und Gitterkonstanten.',
        '<strong>Magnesium und Alpha-Titan:</strong> untersuchen Sie die HCP-Packung und sehen Sie, wie das c/a-Verhältnis das hexagonale Zellvolumen verändert.',
        '<strong>Alpha-Polonium:</strong> studieren Sie die seltene einfach kubische Struktur und ihre geringere Packungseffizienz.',
        '<strong>Halit:</strong> üben Sie die Formeleinheit-Dichte mit einer mineralischen NaCl-Konventionszelle anstelle eines Einzelelement-Metalls.',
      ],
    },
    {
      type: 'title',
      text: 'Grenzen eines Hartkugel-Elementarzellen-Modells',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieses Werkzeug verwendet idealisierte geometrische Modelle. Reale Kristalle haben Elektronendichte anstelle von harten Grenzen, und die Gitterkonstanten ändern sich mit Temperatur, Druck, Zusammensetzung und Defekten. Ionen- und kovalente Kristalle können auch Basisatome, partielle Besetzungen und Symmetrieoperationen erfordern, die über die drei hier gezeigten Lehrstrukturen hinausgehen.',
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie die Ergebnisse für Bildung, schnelle Abschätzungen und den Vergleich gängiger Gitterfamilien. Für eine publizierfähige Kristallographie verifizieren Sie Gitterparameter, Phase, Stöchiometrie und Platzbesetzung anhand primärer Beugungsdaten oder einer kuratierten kristallographischen Datenbank.',
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
