const slug = 'planet-atmosphaere-ueberlebens-rechner';
const title = 'Planetenatmosphare Uberlebensrechner';
const description = 'Wie lange uberleben Sie ohne Raumanzug auf Mars, Venus, Titan, Jupiter oder dem Everest? Dieser interaktive Rechner schatzt die ungeschutzte menschliche Uberlebenszeit anhand von Druck, Temperatur, Sauerstoff, Kohlendioxid, Toxizitat und Windgefahren.';

const howTo = [
  {
    name: 'Wahlen Sie ein Ziel, um echte Atmospharendaten zu laden',
    text: 'Wahlen Sie Mars, Venus, Titan, Jupiter oder den Everest-Gipfel als Voreinstellung, um sofort realistische Druck-, Temperatur-, Gaszusammensetzungs- und Windwerte fur diese Umgebung zu erhalten.',
  },
  {
    name: 'Passen Sie die Bedingungen an, um den Kipppunkt zu erkunden',
    text: 'Bewegen Sie die Schieberegler fur Druck, Temperatur, Sauerstoff und Kohlendioxid, um zu sehen, welche Gefahr zuerst todlich wird. Kleine Anderungen konnen den limitierenden Faktor vollstandig verschieben.',
  },
  {
    name: 'Lesen Sie die Uberlebensuhr und das schwächste Glied ab',
    text: 'Der Timer zeigt die geschatzte Zeit bis zum Einsetzen schwerer biologischer Belastung. Die Anzeige des limitierenden Faktors sagt Ihnen genau, welche Gefahr momentan die dringendste Bedrohung darstellt.',
  },
  {
    name: 'Vergleichen Sie Gefahren visuell auf der Risikokarte',
    text: 'Die radialen Speichen und das Zeitstrahldiagramm zeigen, wie Druck, Hitze, Kalte, Hypoxie, Toxizitat und Wind jeweils zum Gesamtrisiko im Zeitverlauf beitragen.',
  },
];

const faq = [
  {
    question: 'Kann ein Mensch auf dem Mars ohne Raumanzug uberleben?',
    answer: 'Nein. Der Mars hat extrem niedrigen Druck (weniger als 1 % der Erde), fast keinen atembaren Sauerstoff und eine uberwiegend aus Kohlendioxid bestehende Atmosphare. Ohne Druck- und Sauerstoffversorgung wurde innerhalb von Sekunden Bewusstlosigkeit eintreten und innerhalb von Minuten schwere Verletzungen auftreten.',
  },
  {
    question: 'Warum ist der atmospharische Druck so entscheidend fur das menschliche Uberleben?',
    answer: 'Unterhalb der Armstrong-Grenze (etwa 6,3 kPa) kann Wasser bei Korpertemperatur sieden. Niedriger Druck verhindert zudem, dass Sauerstoff in den Blutkreislauf gelangt, selbst wenn die Luft zu 100 % aus Sauerstoff besteht. Deshalb ist Druck eine der schnellsten todlichen Gefahren.',
  },
  {
    question: 'Welcher Planet hat die uberlebbarste Atmosphare?',
    answer: 'Unter den Zielen im Sonnensystem ist die hochgelegene Erde (Everest) am uberlebbarsten, wenn auch ohne Akklimatisierung immer noch gefahrlich. Titan ist die am wenigsten feindliche der anderen Optionen, da sein Druck beherrschbar ist, aber es fehlt an Sauerstoff und es ist kryogen kalt. Kein Planet oder Mond außer der Erde hat eine atembare Atmosphare.',
  },
  {
    question: 'Ist Venus wegen Hitze oder Druck schlimmer?',
    answer: 'Beides ist an der Oberflache extrem. Die Venus hat einen erdruckenden Druck (92-mal so hoch wie auf der Erde) und eine Oberflachentemperatur, die heißer ist als ein Kuchender. Diese Gefahren wirken zusammen, sodass das Tool beide als unmittelbare dominante Bedrohungen kennzeichnet.',
  },
  {
    question: 'Warum hat Titan eine langere Uberlebensschatzung als der Mars?',
    answer: 'Titan hat eine dichte Atmosphare, sodass der Druck an sich kein unmittelbares Problem darstellt. Die Uberlebenszeit wird durch extreme Kalte (etwa -180 Grad C) und das vollstandige Fehlen von Sauerstoff begrenzt. Der Mars scheitert am Druck, Titan an der Temperatur.',
  },
  {
    question: 'Was sind die Haupttodesursachen im Weltraum ohne Anzug?',
    answer: 'Die schnellsten Killer sind Vakuumexposition (Druckverlust, der innerhalb von Sekunden zu Ebullismus und Hypoxie fuhrt), gefolgt von extremen Temperaturen, toxischer Gaszusammensetzung und windbedingtem Warmeverlust. Der Rechner erfasst alle sechs Gefahrenkategorien.',
  },
  {
    question: 'Ist dieses Tool fur die Planung von Weltraummissionen geeignet?',
    answer: 'Nein. Es handelt sich um ein Bildungsmodell, das vereinfachte biologische Schwellenwerte verwendet. Echte Dekompression, Hypoxie, toxische Gase, thermische Verletzungen und Missionsrisikoanalysen erfordern fur die Sicherheit eine fachmedizinische und ingenieurtechnische Bewertung.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Atmospharische Risikokarte',
    timeline: 'Biologischer Risikozeitstrahl',
    controls: 'Atmospharensteuerung',
    destination: 'Zielort',
    pressure: 'Druck',
    temperature: 'Temperatur',
    oxygen: 'Sauerstoff',
    co2: 'Kohlendioxid',
    limitingFactor: 'Limitierender Faktor',
    verdict: 'Urteil',
    exposureSummary: 'Expositionsübersicht',
    atmosphericModel: 'Atmosphärisches Expositionsmodell',
    survivalEnvelope: 'Überlebenshülle',
    survival: 'Überleben',
    mode: 'Modus',
    metric: 'Metrisch',
    imperial: 'Imperial',
    unitSystem: 'Einheitensystem',
    vitalStress: 'Vitalstress',
    timeLabel: 'Zeit',
    estimatedSurvival: 'geschätzte Überlebenszeit',
    hazardPressure: 'Druck',
    hazardTemperature: 'Temperatur',
    hazardOxygen: 'Sauerstoff',
    hazardToxicity: 'Toxizität',
    hazardWind: 'Wind',
    presetMars: 'Mars',
    presetVenus: 'Venusoberfläche',
    presetTitan: 'Titan',
    presetJupiter: 'Jupiterwolkendecke',
    presetEverest: 'Erde, Everestgipfel',
    noteMars: 'Fast Vakuum, extreme Kälte und fast kein Sauerstoff.',
    noteVenus: 'Erdrückender Druck und Ofenhitze dominieren sofort.',
    noteTitan: 'Dichte Stickstoffluft, aber tödliche Kälte und kein Sauerstoff.',
    noteJupiter: 'Wasserstoffreiche Atmosphäre, starke Kälte und heftige Winde.',
    noteEverest: 'Überlebensbar für trainierte Bergsteiger, aber Hypoxie und Kälte sind ernst.',
    verdictSeconds: 'Sekunden',
    verdictMinutes: 'Minuten',
    verdictHours: 'Stunden',
    verdictExtended: 'Verlängertes Expositionsrisiko',
  },
  seo: [
    {
      type: 'title',
      text: 'Planetenatmosphare Uberlebensrechner: Wie lange uberleben Sie ohne Raumanzug auf Mars, Venus, Titan oder Jupiter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie plotzlich ohne Raumanzug der Atmosphare eines anderen Planeten ausgesetzt waren, wie lange wurden Sie uberleben? Dieser Rechner schatzt die ungeschutzte menschliche Uberlebenszeit auf Mars, Venus, Titan, Jupiter und dem Everest, indem er sechs Gefahren simuliert: Gesamtdruck, Sauerstoffverfugbarkeit, Temperatur, Kohlendioxidkonzentration, toxische Chemie und Windbelastung. Er beantwortet die Fragen, die Weltraumbegeisterte und Schuler am haufigsten stellen: Welcher Planet totet Sie am schnellsten, welche Gefahr ist die eigentliche Bedrohung und was wurde man zum Uberleben brauchen.',
    },
    {
      type: 'paragraph',
      html: 'Das Ergebnis ist eine Bildungsschatzung, keine Missionsplanungszahl. Es soll helfen zu vergleichen, warum verschiedene Welten auf sehr unterschiedliche Weise gefahrlich sind. Der Mars versagt bei Druck und Hypoxie innerhalb von Sekunden. Die Venus kombiniert erdruckenden Druck mit Ofenhitze. Der Titan ist kryogen und hat keinen Sauerstoff. Die Wolkendecken der Gasriesen enthalten toxische Zusammensetzungen und uberschallschnelle Winde. Jede Umgebung lehrt etwas anderes daruber, was die Erde einzigartig bewohnbar macht.',
    },
    {
      type: 'title',
      text: 'Welcher Planet hat die uberlebbarste Atmosphare?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unter den Zielen in diesem Rechner sind die hochgelegenen Umgebungen der Erde (wie der Everest-Gipfel) am uberlebbarsten, wenn auch ohne Vorbereitung immer noch gefahrlich. Unter den anderen Planeten hat Titan den schonendsten Druck, versagt aber bei Temperatur und Sauerstoff. Kein Ziel außer der Erde bietet derzeit eine atembare Atmosphare. Der Rechner hilft Ihnen zu sehen, warum genau jede Welt scheitert und welche Gefahr zuerst die kritische Schwelle uberschreitet.',
    },
    {
      type: 'title',
      text: 'Wie jede Gefahr den Korper beeinflusst',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Druck (niedrig):</strong> unter 6,3 kPa konnen Korperflussigkeiten sieden (Ebullismus). Selbst daruber verhindert niedriger Druck die Sauerstoffaufnahme. Dies ist der schnellste Killer in nahezu Vakuumumgebungen.',
        '<strong>Druck (hoch):</strong> extremer Druck komprimiert Atemgase, erhoht das Risiko von Stickstoffnarkose und kann mechanisch Lungen und Nasennebenhohlen schadigen.',
        '<strong>Sauerstoffpartialdruck:</strong> atembarer Sauerstoff hangt sowohl vom Gasprozentsatz als auch vom Gesamtdruck ab. Eine dunnere Atmosphare kann 21 % Sauerstoff haben und dennoch Hypoxie verursachen.',
        '<strong>Temperatur (Hitze):</strong> oberhalb von etwa 60 Grad C beginnen Proteindenaturierung und Organversagen rasch. Die Oberflachentemperatur der Venus ubersteigt 460 Grad C.',
        '<strong>Temperatur (Kalte):</strong> unter dem Gefrierpunkt setzen Erfrierungen und Unterkuhlung ein. Bei kryogenen Temperaturen wie den -180 Grad C des Titans ist das Einfrieren von Gewebe nahezu augenblicklich.',
        '<strong>Kohlendioxidtoxizitat:</strong> CO2 oberhalb von etwa 5 % verursacht Schwindel, Kopfschmerzen und Bewusstlosigkeit. Viele Planetenatmospharen bestehen uberwiegend aus CO2.',
        '<strong>Toxische Chemie:</strong> Schwefelverbindungen, Ammoniak, Methan und Wasserstoff konnen korrosiv, erstickend oder chemisch gefahrlich sein.',
        '<strong>Wind:</strong> starke Winde beschleunigen den Warmeverlust durch Konvektion, verursachen Windchill, schleudern Schmutz und konnen eine Person physisch destabilisieren.',
      ],
    },
    {
      type: 'title',
      text: 'Mars: Warum niedriger Druck vor allem anderen totet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Mars hat einen Oberflächendruck von etwa 0,6 kPa, weit unter der Armstrong-Grenze von 6,3 kPa, bei der Wasser bei Korpertemperatur sieden kann. Ungeschutzte Exposition wurde innerhalb von weniger als 15 Sekunden zu Ebullismus, schneller Hypoxie und Bewusstlosigkeit fuhren. Selbst wenn die Kalte (durchschnittlich -60 Grad C) und die kohlendioxidreiche Atmosphare berucksichtigt werden, dominieren Druck und Sauerstoffmangel den Zeitstrahl. Eine funktionierende Druckkleidung und Sauerstoffversorgung sind das absolute Minimum zum Uberleben auf dem Mars.',
    },
    {
      type: 'title',
      text: 'Venus: Extremer Druck und Hitze wirken zusammen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Oberflache der Venus hat einen Druck von 92 Erdatmospharen (etwa 9,3 MPa, vergleichbar mit 900 Metern Wassertiefe) und eine Oberflachentemperatur von 462 Grad C. Die Atmosphare besteht zu 96 % aus Kohlendioxid mit Wolken aus Schwefelsaure. Diese Gefahren wirken gleichzeitig und nicht nacheinander: Druck erdruckt, Hitze kocht und CO2 vergiftet. In diesem Rechner ist die Venus das einzige Ziel, bei dem mehrere Gefahren gleichzeitig die todliche Schwelle uberschreiten.',
    },
    {
      type: 'title',
      text: 'Titan: Der freundlichste Druck im Sonnensystem außerhalb der Erde',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Saturnmond Titan ist ungewohnlich, weil sein Oberflachendruck (etwa 147 kPa, das 1,45-fache der Erde) tatsachlich in einem Bereich liegt, den ein Mensch vertragen konnte. Allein fur diese Variable ware kein Druckanzug notig. Der Titan hat jedoch so gut wie keinen Sauerstoff, eine Oberflachentemperatur von -179 Grad C und eine Methan-Stickstoff-Atmosphare. Der Rechner zeigt Druck als beherrschbar, aber Temperatur und Sauerstoffmangel dominieren sofort. Der Titan ist eine Erinnerung daran, dass Uberleben vom gesamten Gefahrenprofil abhangt, nicht nur von einer Messgrose.',
    },
    {
      type: 'title',
      text: 'Wie man die Uberlebensuhr und die Risikokarte interpretiert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Uberlebensuhr schatzt das Intervall bis zum Auftreten schwerer biologischer Belastung bei einer ungeschutzten Person. Die Anzeige des limitierenden Faktors identifiziert, welche Gefahr zuerst die kritische Schwelle uberschreitet. Die radialen Gefahrenspeichen zeigen die relative Schwere jeder der sechs erfassten Gefahren, und das Zeitstrahldiagramm zeigt, wie das kombinierte Risiko uber das Expositionsfenster hinweg ansteigt. Diese visuellen Werkzeuge helfen Ihnen, auf einen Blick zu erkennen, warum eine bestimmte Umgebung gefahrlich ist und welches Schutzsystem am wichtigsten ware.',
    },
    {
      type: 'table',
      headers: ['Ziel', 'Todliche Gefahren', 'Schnellste Bedrohung', 'Was ein Anzug beheben muss'],
      rows: [
        ['Mars', 'Beinahe-Vakuum, Hypoxie, Kalte, CO2', 'Druck < Armstrong-Grenze', 'Druckkleidung, Sauerstoff, Warmeschutz'],
        ['Venusoberflache', 'Erdruckender Druck, 462 Grad C Hitze, CO2, Schwefelsaure', 'Druck und Hitze gleichzeitig', 'Starke Kuhlung, Druckhulle, Atemgerat'],
        ['Titan', 'Kein Sauerstoff, -179 Grad C Kalte, Methan', 'Temperatur und Hypoxie', 'Sauerstoffversorgung, extremer Warmeschutz'],
        ['Jupiterwolkendecke', 'Kein Sauerstoff, wasserstoffreich, Kalte, starker Wind', 'Hypoxie und Mangel an atembarem Gas', 'Abgedichtetes Atemsystem, Temperaturkontrolle'],
        ['Everest-Gipfel', 'Hypoxie, Kalte, Wind', 'Sauerstoffpartialdruck zu niedrig', 'Sauerstoffmaske, Kaltwetterausrustung, Akklimatisierung'],
      ],
    },
    {
      type: 'title',
      text: 'Was ware notig, um ohne Raumanzug zu uberleben?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realistisch gesehen erlaubt kein bekannter Korper im Sonnensystem außer der Erde ein ungeschutztes menschliches Uberleben von mehr als ein paar Minuten, und die meisten toten innerhalb von Sekunden. Der Wert dieses Rechners liegt nicht darin, einen sicheren Planeten zu finden, sondern darin, die spezifischen Grunde zu verstehen, warum jede Umgebung feindselig ist. Dieses Wissen leitet die planetarische Wissenschaftsbildung, das Design von Weltraumhabitaten, Prioritaten in der Astronautenausbildung und die Suche nach potentiell bewohnbaren Exoplaneten, auf denen eine Atmosphare tatsachlich Leben unterstutzen konnte.',
    },
    {
      type: 'list',
      items: [
        '<strong>Nutzen Sie es zum Lernen:</strong> sehen Sie, wie die Anderung einer Variablen, wie die Verdopplung des Drucks auf dem Mars, das Uberlebensfenster verandert.',
        '<strong>Nutzen Sie es zum Vergleichen:</strong> kontrastieren Sie, warum Titan mehr Zeit gibt als Venus, obwohl beide nicht uberlebbar sind.',
        '<strong>Nutzen Sie es zur Diskussion:</strong> erkunden Sie, was eine terraformierte Atmosphare brauchte, um atembare Bedingungen zu erreichen.',
        '<strong>Nutzen Sie es nicht fur echte Entscheidungen:</strong> der Rechner verwendet vereinfachte Schwellenwerte. Notfallplanung erfordert professionelle Luft- und Raumfahrtmedizin.',
      ],
    },
    {
      type: 'title',
      text: 'Wichtige Einschrankungen und Bildungszweck',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das tatsachliche Uberleben hangt von der individuellen Gesundheit, Kleidung, Anstrengungsniveau, Luftfeuchtigkeit, Sonnenstrahlung, Dekompressionsgeschichte, Atemgasmischung, Rettungszeitpunkt und vielen anderen Variablen ab. Planetare Atmospharendaten variieren ebenfalls je nach Hohe, Jahreszeit und Messquelle. Dieses Tool verwendet vereinfachte biologische Schwellenwerte und reprasentative Umweltdaten fur die naturwissenschaftliche Bildung. Es soll Schulern, Lehrern, Weltraumbegeisterten und Wissenschaftsautoren helfen, planetare Bewohnbarkeit zu verstehen, nicht um tatsachliche Weltraumoperationen zu leiten.',
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
