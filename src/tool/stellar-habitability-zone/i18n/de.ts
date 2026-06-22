import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'habitable-zonen-simulator';
const description = 'Berechnen und visualisieren Sie die habitable Zone (Goldlöckchen-Zone) um verschiedene Sterntypen mithilfe von stellaren und planetaren Konfigurationen.';
const title = 'Habitable Zonen Simulator: Goldlöckchen Zonen finden';

const howTo = [
  {
    name: 'Stellaren Pre-Set auswählen',
    text: 'Wählen Sie einen Sterntyp von Blauen Riesen bis hin zu Roten Zwergen aus, um physikalische Standardeigenschaften wie Masse, Leuchtkraft und Temperatur zu laden.',
  },
  {
    name: 'Planetare Parameter anpassen',
    text: 'Verändern Sie die Orbitaldistanz des Planeten (große Halbachse), das Albedo und den Treibhauseffekt der Atmosphäre mithilfe der interaktiven Schieberegler.',
  },
  {
    name: 'Umlaufbahn und Habitabilität analysieren',
    text: 'Beobachten Sie den Planeten in Echtzeit auf seiner Umlaufbahn. Prüfen Sie, ob die Gleichgewichts- und Oberflächentemperaturen flüssiges Wasser zulassen.',
  },
];

const faq = [
  {
    question: 'Was ist die zirkumstellare habitable Zone?',
    answer: 'Die zirkumstellare habitable Zone (oft auch als Goldlöckchen-Zone bezeichnet) ist der Bereich um einen Stern, in dem die Temperaturen auf der Planetenoberfläche ausreichen, um flüssiges Wasser unter einem bestimmten Atmosphärendruck aufrechtzuerhalten. Sie wird durch konservative und optimistische Grenzen definiert, die auf der Leuchtkraft und der Effektivtemperatur des Sterns basieren.',
  },
  {
    question: 'Wie beeinflusst die Leuchtkraft eines Sterns die habitable Zone?',
    answer: 'Die Leuchtkraft des Sterns bestimmt die Gesamtenergieabgabe des Sterns. Heißere und massereichere Sterne (wie O-, B- oder A-Sterne) sind extrem hell, wodurch ihre habitablen Zonen viel weiter entfernt liegen. Kühlere, weniger massereiche Sterne (wie orangefarbene oder rote Zwerge vom Typ K oder M) weisen eine geringe Leuchtkraft auf, was ihre habitablen Zonen extrem nah an den Stern verschiebt.',
  },
  {
    question: 'Was ist der Unterschied zwischen Gleichgewichts- und Oberflächentemperatur?',
    answer: 'Die Gleichgewichtstemperatur ist die theoretische Temperatur, die ein Planet hätte, wenn man annimmt, dass er sich wie ein Schwarzer Körper verhält, der die Sternstrahlung absorbiert und wieder in den Weltraum abgibt. Die Oberflächentemperatur schließt den Treibhauseffekt der Planetenatmosphäre ein, der Wärme speichert und den Planeten weiter erwärmt.',
  },
  {
    question: 'Warum ist die Albedo für die planetare Habitabilität wichtig?',
    answer: 'Die Albedo ist das Maß für das Reflexionsvermögen der Planetenoberfläche. Eine höhere Albedo (nahe 1.0) bedeutet, dass der Planet mehr des einfallenden Sternenlichts reflektiert, was ihn abkühlt. Eine niedrigere Albedo bedeutet, dass mehr Strahlung absorbiert wird, was die Gesamttemperatur erhöht.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Habitable Zonen Simulator',
    starPresetsLabel: 'Spektralklassen-Presets',
    customStarHeader: 'Stellare Parameter',
    starTemperature: 'Effektivtemperatur (K)',
    starLuminosity: 'Leuchtkraft (L/L⊙)',
    starMass: 'Masse (M/M⊙)',
    starRadius: 'Radius (R/R⊙)',
    planetHeader: 'Planetare Parameter',
    planetDistance: 'Orbitaldistanz (AE)',
    planetAlbedo: 'Bond-Albedo',
    greenhouseDelta: 'Treibhauserwärmung (K)',
    resultsHeader: 'Simulationsergebnisse',
    stellarFluxResult: 'Empfangener Strahlungsfluss',
    eqTempResult: 'Gleichgewichtstemperatur',
    surfTempResult: 'Geschätzte Oberflächentemperatur',
    orbitPeriodResult: 'Umlaufzeit',
    orbitVelocityResult: 'Bahngeschwindigkeit',
    hzLimitsHeader: 'Grenzen der habitablen Zone',
    innerLimit: 'Konservative Innengrenze',
    outerLimit: 'Konservative Außengrenze',
    optInnerLimit: 'Optimistische Innengrenze',
    optOuterLimit: 'Optimistische Außengrenze',
    orbitCanvasTitle: 'Interaktiver Orbit-Visualisierer',
    statusLabel: 'Habitabilitätsstatus',
    statusTooHot: 'ZU HEISS (Wasser verdampft)',
    statusHabitable: 'HABITABEL (Flüssiges Wasser möglich)',
    statusTooCold: 'ZU KALT (Wasser gefriert)',
    statusExplanation: 'Basierend auf konservativen Grenzen liegt dieser Planet innerhalb des angegebenen habitablen Zonenstatus.',
    unitsLabel: 'Einheitensystem',
    unitsScientific: 'Wissenschaftlich',
    unitsImperial: 'Imperial',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGIE: Physik stellarer habitabler Zonen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Suche nach Leben außerhalb der Erde beginnt mit dem Verständnis der physikalischen Bedingungen, die für flüssiges Wasser erforderlich sind. Astrobiologen nutzen mathematische Modelle, um die Grenzen habitabler Zonen um verschiedene Sterntypen zu kartieren. Dieser Simulator verwendet die Modelle von Kopparapu et al. (2013), um den von Planeten empfangenen Energiefluss abzuschätzen und festzustellen, ob sie in der Goldlöckchen-Zone liegen. Die habitable Zone ist definiert als die Region, in der ein erdgroßer Planet mit einer CO2-H2O-N2-Atmosphäre flüssiges Wasser auf seiner Oberfläche halten kann.',
    },
    {
      type: 'title',
      text: 'Mathematische Formeln und atmosphärische Physik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Grenzen der habitablen Zone werden bestimmt, indem der effektive stellare Strahlungsfluss (Seff) berechnet wird, der erforderlich ist, um einen unkontrollierbaren Treibhauseffekt oder ein Maximum-Treibhaus-Szenario auszulösen. Die Gleichung für Seff hängt von der Effektivtemperatur des Sterns (Teff) ab:<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>wobei T* = Teff - 5780 K ist und die Koeffizienten (a, b, c, d) empirisch aus 1D-Strahlungs-Konvektions-Klimamodellen abgeleitet wurden. Nach der Berechnung von Seff ist der Orbitalabstand d in Astronomischen Einheiten (AE) gegeben durch:<br><br>d = sqrt(L / Seff)<br><br>wobei L die Leuchtkraft des Sterns im Verhältnis zur Sonne ist. Die Gleichgewichtstemperatur (Teq) des Planeten wird unter der Annahme berechnet, dass sich der Planet wie ein kugelförmiger Schwarzer Körper im thermischen Gleichgewicht verhält:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>wobei R* der Sternradius, A die planetare Bond-Albedo und S der empfangene stellare Fluss in Einheiten der Solarkonstante der Erde ist.',
    },
    {
      type: 'title',
      text: 'Spektralklassifikation und habitable Grenzen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Eigenschaften von Sternen variieren je nach Spektraltyp erheblich. Hier ist eine Zusammenfassung der typischen Eigenschaften und HZ-Grenzen:',
    },
    {
      type: 'table',
      headers: [
        'Spektralklasse',
        'Temperatur (K)',
        'Leuchtkraft (L/L⊙)',
        'HZ Innengrenze (AE)',
        'HZ Außengrenze (AE)',
      ],
      rows: [
        ['O-Typ Riese', '40.000', '100.000', '300.0', '530.0'],
        ['B-Typ Riese', '20.000', '1.000', '30.1', '53.2'],
        ['A-Typ Sirius', '8.500', '20.0', '4.2', '7.4'],
        ['F-Type Procyon', '6.500', '2.5', '1.5', '2.6'],
        ['G-Typ Sonne', '5.778', '1.0', '0.95', '1.67'],
        ['K-Typ Zwerg', '4.500', '0.15', '0.37', '0.65'],
        ['M-Typ Zwerg', '3.200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Einfluss der Spektralklasse auf die Habitabilität',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jede Spektralklasse schafft eine einzigartige Strahlungs- und Gravitationsumgebung für ihre Planeten:<br><br><strong>O- und B-Typ-Sterne:</strong> Diese massereichen blauen Sterne senden intensive ultraviolette (UV) Strahlung aus und haben eine extrem kurze Lebensdauer (zehn Millionen Jahre). Flüssiges Wasser könnte zwar auf ihren äußeren Welten existieren, aber das Leben hätte nicht genug Zeit, um sich zu entwickeln, bevor der Stern in einer Supernova explodiert.<br><br><strong>A- und F-Typ-Sterne:</strong> Diese Sterne sind heller und heißer als die Sonne. Ihre habitablen Zonen sind breit und weit entfernt, was die Effekte einer gebundenen Rotation minimiert. Ein hohes Maß an naher UV-Strahlung kann jedoch ohne schützende Ozonschicht schwere Schäden an organischen Molekülen verursachen.<br><br><strong>G-Typ-Sterne (sonnenähnlich):</strong> Diese Sterne bieten über Milliarden von Jahren einen stabilen Strahlungsfluss und sind das primäre Ziel bei der Suche nach Leben. Ihre Strahlung entspricht den Standardbedingungen der Biochemie.<br><br><strong>K-Typ-Sterne (orangefarbene Zwerge):</strong> Von vielen Astrobiologen als "superhabitable" Wirte angesehen. Orangefarbene Zwerge leben Dutzende Milliarden Jahre, emittieren weniger schädliche UV-Strahlung als G-Sterne und neigen nicht zu den heftigen Strahlungsausbrüchen junger M-Zwerge.<br><br><strong>M-Typ-Sterne (rote Zwerge):</strong> Die häufigsten Sterne in der Galaxie. Da ihre habitablen Zonen extrem nah am Stern liegen (typischerweise < 0,2 AE), neigen Planeten zu einer gebundenen Rotation (eine Seite zeigt permanent zum Stern). Zudem erzeugen aktive M-Zwerge hochenergetische Sternwinde und Flares, die Planetenatmosphären wegpusten können.',
    },
    {
      type: 'title',
      text: 'Kritische Faktoren in planetaren habitablen Umgebungen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die physikalische Umgebung eines Planeten wird durch eine Vielzahl von Variablen geformt, die über die reine Entfernung von seinem Zentralstern hinausgehen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Atmosphärischer Treibhauseffekt:</strong> Natürliche Treibhausgase erhöhen die Oberflächentemperatur über das Gleichgewichtsniveau eines Schwarzen Körpers. Gesteinsplaneten benötigen Carbonat-Silicat-Zyklen, um das atmosphärische CO2 zu stabilisieren und die Temperaturen über geologische Zeiträume hinweg zu regulieren.',
        '<strong>Planetare Bond-Albedo:</strong> Ein hohes Reflexionsvermögen (durch Wolken, Eiskappen oder Sulfataerosole) kühlt den Planeten ab, während eine niedrige Albedo (dunkle Böden, Wassermassen) mehr Sternenergie einfängt.',
        '<strong>Magnetfelder:</strong> Eine starke planetare Magnetosphäre schützt die Atmosphäre vor Sonnen- und Sternwinden und verhindert den nicht-thermischen Verlust von Atmosphäre und Wasser.',
        '<strong>Kältefallen-Dynamik:</strong> Der Kältefalleneffekt in der oberen Atmosphäre verhindert, dass Wasserdampf große Höhen erreicht, in denen die solare UV-Strahlung das Wasser in Wasserstoff und Sauerstoff spalten würde.',
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
