import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensischer-duennschichtchromatographie-tintensimulator';
const title = 'Forensischer Dünnschichtchromatographie Tintensimulator (TLC)';
const description = 'Simulieren Sie die Dünnschichtchromatographie verdächtiger Schreibtinten, visualisieren Sie die Entwicklung der Fließmittelfront, trennen Sie Farbstoffbanden und berechnen Sie genaue Rf-Werte für jedes Pigment.';

const howTo = [
  {
    name: 'Verdächtige Tinte oder Vergleichsstift auswählen',
    text: 'Wählen Sie die Tinte des Erpresserbriefs oder das Profil eines verdächtigen Stifts aus. Jede Tinte enthält eine andere Kombination von Farbstoffkomponenten mit unterschiedlicher Polarität und Affinität zur stationären Phase.',
  },
  {
    name: 'Mobile Phase auswählen',
    text: 'Ändern Sie das Lösungsmittelsystem, um zu sehen, wie die Polarität des Lösungsmittels die Kapillarwirkung und die relative Wanderung der einzelnen Farbstoffbanden beeinflusst.',
  },
  {
    name: 'TLC-Platte entwickeln',
    text: 'Verschieben Sie den Schieberegler für die Entwicklungszeit und beobachten Sie, wie die Lösungsmittelfront auf der Platte aufsteigt, während sich die getrennten Banden oberhalb der Startlinie abzeichnen.',
  },
  {
    name: 'Rf-Tabelle ablesen',
    text: 'Vergleichen Sie den Abstand jedes Pigments mit dem Abstand der Lösungsmittelfront. Der Simulator berechnet den Rf-Wert als Pigmentabstand geteilt durch den Lösungsmittelabstand.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Was bedeutet der Rf-Wert in der Dünnschichtchromatographie?',
    answer: 'Der Rf-Wert ist der Retentionsfaktor: die von der Substanz zurückgelegte Strecke geteilt durch die von der Lösungsmittelfront zurückgelegte Strecke ab derselben Startlinie. Er ist dimensionslos und liegt normalerweise zwischen 0 und 1.',
  },
  {
    key: 'faq-2',
    question: 'Kann die TLC beweisen, dass zwei Tintenproben vom selben Stift stammen?',
    answer: 'Nein. Die TLC kann zeigen, ob die Farbstoffmuster übereinstimmen oder nicht, aber eine eindeutige Herkunftsbestimmung erfordert validierte Vergleichsmethoden, Kontrollen, Dokumentation und fachmännische Bewertung.',
  },
  {
    key: 'faq-3',
    question: 'Warum ändert das Wechseln des Lösungsmittels das Bandenmuster?',
    answer: 'Farbstoffe verteilen sich unterschiedlich zwischen der stationären und der mobilen Phase. Ein Lösungsmittel mit einer besseren Polaritätsanpassung kann einen Farbstoff weiter transportieren, was seinen Rf-Wert erhöht.',
  },
  {
    key: 'faq-4',
    question: 'Warum ist die Startlinie wichtig?',
    answer: 'Sowohl die Strecke der Lösungsmittelfront als auch die des Pigments müssen ab der Startlinie gemessen werden. Eine Messung ab der Unterkante der Platte führt zu falschen Rf-Werten.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Dünnschichtchromatographie-Kammer mit Entwicklungsplatte',
    rulerAria: 'Virtuelles Millimeterlineal zur Messung von Lösungsmittelfront und Pigmentbanden',
    rulerMarks: '80,60,40,20,0',
    units: 'Einheitensystem',
    metric: 'Metrisch',
    imperial: 'Imperial',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'Min',
    inkSample: 'Tintenprobe',
    ransomNote: 'Verdächtige Tinte (Erpresserbrief)',
    bluePen: 'Beschlagnahmter blauer Kugelschreiber',
    blackPen: 'Beschlagnahmter schwarzer Kugelschreiber',
    gelPen: 'Beschlagnahmter Gelschreiber',
    solventSystem: 'Mobile Phase',
    ethanolWater: 'Ethanol / Wasser',
    butanolAcetic: 'Butanol / Essigsäure',
    isopropanolAmmonia: 'Isopropanol / Ammoniak',
    developmentTime: 'Entwicklungszeit',
    frontDistance: 'Lösungsmittelweg',
    matchScore: 'Musterähnlichkeit',
    solventFront: 'Lösungsmittelfront',
    originLine: 'Startlinie',
    pigment: 'Pigmentbande',
    pigmentCyanDye: 'Cyan-Farbstoff',
    pigmentVioletDye: 'Violett-Farbstoff',
    pigmentGrayCarrier: 'Grauer Träger',
    pigmentNavyDye: 'Dunkelblau-Farbstoff',
    pigmentYellowDye: 'Gelb-Farbstoff',
    pigmentRedDye: 'Rot-Farbstoff',
    pigmentBlueDye: 'Blau-Farbstoff',
    pigmentDarkBinder: 'Dunkles Bindemittel',
    pigmentTealDye: 'Teal-Farbstoff',
    pigmentMagentaDye: 'Magenta-Farbstoff',
    pigmentGelBinder: 'Gel-Bindemittel',
    distance: 'Abstand',
    rfValue: 'Rf-Wert',
    disclaimer: 'Nur zu Bildungszwecken. Der forensische Tintenvergleich erfordert Originaldokumente, validierte Labormethoden, Referenzstandards und qualifizierte Urkundenprüfer.',
  },
  seo: [
    {
      type: 'title',
      text: 'Dünnschichtchromatographie für den forensischen Tintenvergleich',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Lehr-Simulator',
      title: 'Was dieser TLC Tintensimulator vermittelt',
      html: 'Dieses Tool erklärt, wie die <strong>Dünnschichtchromatographie von Schreibtinten</strong> einen sichtbaren Tintenstrich in mehrere Farbstoffbanden auftrennen kann. Es wurde für Studierende der Forensik, Lernende der Urkundenprüfung und alle entwickelt, die verstehen möchten, wie Rf-Werte anhand einer entwickelten TLC-Platte berechnet werden.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d Bande / d Lösungsmittel', label: 'Formel für den Retentionsfaktor', icon: 'mdi:division' },
        { value: '4', label: 'Verglichene Tintenprofile', icon: 'mdi:pen' },
        { value: '3', label: 'Simulierte mobile Phasen', icon: 'mdi:flask-outline' },
        { value: '2', label: 'Metrische und imperiale Anzeigen', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Checkliste für korrekte TLC Messungen',
      items: [
        'Markieren Sie die Startlinie vor Beginn der Entwicklung oberhalb des Lösungsmittelspiegels.',
        'Entnehmen Sie die Platte, bevor das Lösungsmittel den oberen Rand erreicht.',
        'Markieren Sie die Lösungsmittelfront sofort, da sie verdunsten kann und dann schwer zu sehen ist.',
        'Messen Sie den Weg des Pigments und den des Lösungsmittels ab derselben Startlinie.',
        'Geben Sie Rf-Werte stets zusammen mit dem Lösungsmittelsystem, dem Plattentyp, den Entwicklungsbedingungen und den Kontrollen an.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Was die TLC unterstützen kann',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Die TLC kann zeigen, ob verdächtige und bekannte Tinten unter denselben Bedingungen ein ähnliches Farbstofftrennungsverhalten aufweisen.',
          points: ['Vergleich zur Vorauswahl', 'Visualisierung des Farbstoffmusters', 'Rf-Dokumentation', 'Auswahl von Proben für Bestätigungstests'],
        },
        {
          title: 'Was die TLC allein nicht beweisen kann',
          icon: 'mdi:alert-circle-outline',
          description: 'Die TLC allein kann einen Stift nicht eindeutig identifizieren, ein Dokument nicht datieren und die Urheberschaft nicht beweisen.',
          points: ['Keine eindeutige Herkunftsbestimmung', 'Keine Identifizierung des Schreibers', 'Standardmäßig kein Rückschluss auf das Alter', 'Kein Ersatz für validierte Protokolle'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Häufige Frage', 'Beteiligtes TLC-Konzept', 'Detaillierte Antwort'],
      rows: [
        ['Wie berechnet man den Rf-Wert?', 'Abstand des Farbstoffs geteilt durch den Abstand der Lösungsmittelfront.', 'Messen Sie beide Werte ab der Startlinie und teilen Sie sie durcheinander. Das Ergebnis ist dimensionslos.'],
        ['Warum spalten sich Tinten in Farben auf?', 'Unterschiedliche Farbstoffe besitzen eine unterschiedliche Affinität zur stationären und mobilen Phase.', 'Ein einzelner geschriebener Strich kann mehrere Farbstoffe enthalten, die mit unterschiedlicher Geschwindigkeit wandern.'],
        ['Können zwei Stifte dasselbe TLC-Muster haben?', 'Ja, ähnliche Rezepturen können sehr ähnliche Muster erzeugen.', 'Ähnlichkeit stützt die Annahme von Konsistenz, beweist aber nicht die Herkunft von einem bestimmten Stift.'],
        ['Warum hat sich mein Rf-Wert verändert?', 'Lösungsmittel, Platte, Luftfeuchtigkeit, Sättigung, Temperatur und Fleckgröße beeinflussen die Wanderung.', 'Rf-Werte sind nur vergleichbar, wenn die Bedingungen kontrolliert und dokumentiert sind.'],
      ],
    },
    {
      type: 'title',
      text: 'Wie der Simulator die Auftrennung modelliert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Modell beschreibt die Bewegung der Lösungsmittelfront als einen kapillaren Aufstiegsprozess, der sich im Laufe der Zeit verlangsamt. Jedem Farbstoff wird ein Rf-Wert zugewiesen, der auf zwei vereinfachten Eigenschaften basiert: seiner Affinität zum mobilen Lösungsmittel und seiner Polaritätsübereinstimmung mit der ausgewählten mobilen Phase. Dies dient didaktischen Zwecken und entspricht keiner instrumentellen Chemie, bewahrt jedoch die für Lernende wesentliche Beziehung: Das Lösungsmittel bewegt sich zuerst, die Farbstoffe verteilen sich zwischen den Phasen und der Rf-Wert wird aus den gemessenen Wegstrecken berechnet.',
    },
    {
      type: 'paragraph',
      html: 'Die Dünnschichtchromatographie ist aufgrund ihrer Einfachheit, Schnelligkeit und Kosteneffizienz ein weit verbreitetes Analyseverfahren in forensischen Laboratorien. Im Rahmen der Urkundenprüfung wird sie hauptsächlich zum Vergleich der Farbstoffzusammensetzung verschiedener Tintenproben eingesetzt. Forensiker entnehmen einer verdächtigen Urkunde mit einem Skalpell oder einer Hohlnadel ein winziges Tintenpartikel, lösen es in einem geeigneten Lösungsmittel wie Pyridin oder Methanol und tragen es zusammen mit Referenzstandards auf die TLC Platte auf.',
    },
    {
      type: 'paragraph',
      html: 'Nachdem die Platte in einer geschlossenen Kammer entwickelt wurde, trennen sich die einzelnen Tintenbestandteile aufgrund ihrer unterschiedlichen Verteilung zwischen der stationären Kieselgelphase und der mobilen Lösungsmittelphase. Das resultierende Chromatogramm liefert ein visuelles Identifikationsmerkmal der Tinte und zeigt charakteristische Farbbanden in bestimmten Höhen. Urkundenprüfer berechnen anschließend den Retentionsfaktor für jede sichtbare Farbstoffbande, um festzustellen, ob die fragliche Tinte chemisch mit einem verdächtigen Schreibgerät übereinstimmt oder einer bekannten Marke und Formel in einer Tintendatenbank entspricht.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Stationary phase', definition: 'Die Beschichtung auf der TLC-Platte, üblicherweise Kieselgel, die mit den Verbindungen interagiert und deren Bewegung verlangsamt.' },
        { term: 'Mobile phase', definition: 'Das Lösungsmittelsystem, das durch die Platte aufsteigt und die Farbstoffkomponenten mit sich führt.' },
        { term: 'Origin line', definition: 'Die mit Bleistift gezogene Linie, auf der die Tintenprobe vor der Entwicklung aufgetragen wird.' },
        { term: 'Solvent front', definition: 'Der höchste Punkt, den die mobile Phase erreicht, bevor die Platte entnommen wird.' },
        { term: 'Rf value', definition: 'Der Retentionsfaktor: Wanderungsstrecke der Substanz geteilt durch die Wanderungsstrecke der Lösungsmittelfront.' },
      ],
    },
    {
      type: 'tip',
      title: 'Praktischer Interpretationshinweis',
      html: 'In der forensischen Urkundenprüfung kann eine Abweichung besonders wertvoll sein, da sie eine Stiftrezeptur ausschließen kann. Ein übereinstimmendes TLC-Muster ist weniger aussagekräftig: Es zeigt nur, dass die Proben unter diesen Bedingungen chemisch konsistent sind, nicht dass sie zwingend vom selben Stift stammen.',
    },
    {
      type: 'proscons',
      title: 'Stärken und Grenzen des TLC Tintenvergleichs',
      items: [
        { pro: 'Schnell, kostengünstig und visuell anschaulich zur Trennung von Tintenfarbstoffen.', con: 'In der Regel destruktiv, da eine kleine Probe aus dem Dokument entnommen werden muss.' },
        { pro: 'Rf-Werte bieten eine strukturierte Methode zum Vergleich verdächtiger und bekannter Proben.', con: 'Rf-Werte verschieben sich bei Änderungen von Lösungsmittel, Platte, Luftfeuchtigkeit und Entwicklungsbedingungen.' },
        { pro: 'Nützlich als Screening-Methode vor fortgeschritteneren Analysen.', con: 'Erlaubt ohne weitere Beweise keine eindeutige Zuordnung zu einer bestimmten Schreibquelle.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische Vorsicht',
      title: 'Überbewerten Sie die Tintenchromatographie nicht',
      html: 'Eine Browser-Simulation kann weder Papier, Tintenalter, Extraktionschemie, Plattenqualität noch Verunreinigungen untersuchen oder eine instrumentelle Bestätigung ersetzen. Nutzen Sie sie, um die Messlogik und die Grenzen der Interpretation zu verstehen, und verlassen Sie sich bei echten Beweisen auf validierte Methoden der forensischen Urkundenprüfung.',
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
