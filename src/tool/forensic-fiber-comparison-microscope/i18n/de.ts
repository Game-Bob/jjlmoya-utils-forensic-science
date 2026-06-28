import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensischer-faservergleich-mikroskop';
const title = 'Forensischer Faservergleich Mikroskop Simulator';
const description = 'Erstellen Sie ein Profil für eine fragliche Textilfaser, vergleichen Sie es mit bekannten Referenzen und interpretieren Sie Morphologie, Polarisation und UV-Vis-Farbstoffspektren.';

const howTo = [
  {
    name: 'Erstellen Sie das Profil der fraglichen Faser',
    text: 'Legen Sie Material, Durchmesser, Zwirnrichtung, Polarisationsverhalten und Farbstoffprofil für die gefundene Faser fest.',
  },
  {
    name: 'Wählen Sie eine bekannte Vergleichsfaser',
    text: 'Wählen Sie auf der rechten Seite eine Faser eines verdächtigen Kleidungsstücks wie Baumwolle, Wolle, Polyester oder Nylon.',
  },
  {
    name: 'Fokus und Polarisation anpassen',
    text: 'Verschieben Sie den Fokusregler und drehen Sie den Polarisator, um Schärfe, Oberflächenstrukturen und Doppelbrechung zu beobachten.',
  },
  {
    name: 'Morphologie und UV-Vis-Spektren vergleichen',
    text: 'Vergleichen Sie Morphologiewert, Spektrumwert, Gesamtübereinstimmung und Absorptionskurven, um zu entscheiden, ob die Proben übereinstimmen oder sich deutlich unterscheiden.',
  },
];

const faq = [
  {
    question: 'Kann die Fasermikroskopie das genaue Kleidungsstück bestimmen, aus dem eine Faser stammt?',
    answer: 'In der Regel nein. Der Faservergleich kann Übereinstimmungen oder Unterschiede zwischen einer fraglichen Faser und einem bekannten Textil aufzeigen. Eine individuelle Zuordnung erfordert jedoch sorgfältige Kontextanalysen, validierte Methoden und häufig zusätzliche chemische oder instrumentelle Analysen.',
  },
  {
    question: 'Warum wird beim Faservergleich polarisiertes Licht verwendet?',
    answer: 'Polarisiertes Licht hilft, Doppelbrechung, Auslöschungsverhalten und strukturelle Unterschiede zwischen Natur- und Synthesefasern sichtbar zu machen. Synthetische Fasern zeigen aufgrund der molekularen Ausrichtung oft ein stärkeres Polarisationsverhalten.',
  },
  {
    question: 'Was bringt das UV-Vis-Spektrum zusätzlich?',
    answer: 'Während die Mikroskopie Form und optisches Verhalten beschreibt, vergleicht die UV-Vis-Absorbanz das Verhalten von Farbstoffen über verschiedene Wellenlängen hinweg. Ähnliche Fasern mit unterschiedlichen Farbstoffen können sich im Spektraldiagramm deutlich voneinander abheben.',
  },
  {
    question: 'Warum werden die Ergebnisse als Werte und nicht als endgültige Identifizierung dargestellt?',
    answer: 'Forensische Spurenspuren sollten verhältnismäßig bewertet werden. Die Werte sind pädagogische Zusammenfassungen der morphologischen und farblichen Ähnlichkeit, keine Laborergebnisse oder rechtlichen Gutachten.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Virtuelles forensisches Vergleichsmikroskop zum Vergleich zweier Textilfasern',
    chartAria: 'UV-Vis-Absorptionsdiagramm zum Vergleich von Farbstoffspektren der fraglichen und bekannten Faser',
    questionedSample: 'Fragliche Faser',
    fixedEvidence: 'Gesichertes Beweismittel',
    builderSummaryDefault: 'Baumwolle / 18 µm / unregelmäßig / Indigo',
    customQuestionedLabel: 'Fragliche Fallfaser',
    material: 'Material',
    cotton: 'Baumwolle',
    woolMaterial: 'Wolle',
    polyesterMaterial: 'Polyester',
    nylonMaterial: 'Nylon',
    materialcotton: 'Baumwolle',
    materialwool: 'Wolle',
    materialpolyester: 'Polyester',
    materialnylon: 'Nylon',
    twist: 'Zwirnrichtung',
    irregularTwist: 'Unregelmäßig',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Durchmesser',
    polarResponse: 'Polarisationsverhalten',
    dyeProfile: 'Farbstoffprofil',
    indigoDye: 'Indigo',
    crimsonDye: 'Karmesinrot',
    navyDye: 'Marineblau',
    violetDye: 'Violett',
    dyeindigo: 'Indigo',
    dyecrimson: 'Karmesinrot',
    dyenavy: 'Marineblau',
    dyeviolet: 'Violett',
    knownSample: 'Bekannter Vergleich',
    questionedCotton: 'Fragliche blaue Baumwollfaser',
    suspectCotton: 'Verdächtige Hemden-Baumwollfaser',
    wool: 'Rote Wollpulloverfaser',
    polyester: 'Marineblaue Polyesterjackenfaser',
    nylon: 'Violette Nylonfutterfaser',
    focus: 'Feinfokus',
    polarizer: 'Polarisatorwinkel',
    morphology: 'Morphologie',
    spectrum: 'UV-Vis',
    birefringence: 'Doppelbrechung',
    combinedMatch: 'Gesamtübereinstimmung',
    uvVisTitle: 'UV-Vis-Absorptionsüberlagerung',
    statusStrong: 'Hohe Übereinstimmung',
    statusPartial: 'Eingeschränkter Vergleich',
    statusDifferent: 'Ausschluss gestützt',
    verdictStrong: 'Die fragliche und die bekannte Faser stimmen in Durchmesser, Zwirnrichtung, optischem Verhalten und Farbstoffspektrum weitgehend überein. In einem echten Fall wird dies als Beleg für eine mögliche gemeinsame Textilquelle gewertet, nicht als individuelle Identifizierung.',
    verdictPartial: 'Der Vergleich ist gemischt. Einige Klassenmerkmale stimmen überein, aber Morphologie, Farbstoffverhalten oder Doppelbrechung weisen genügend Unterschiede auf, sodass vor einer vorsichtigen Zuordnung weitere Untersuchungen erforderlich wären.',
    verdictDifferent: 'Die Fasern stimmen in wesentlichen Klassenmerkmalen nicht überein. Das simulierte Ergebnis stützt den Ausschluss dieses bekannten Textils als wahrscheinliche Quelle für die fragliche Faser.',
    disclaimer: 'Nur zu Bildungszwecken. Der reale forensische Faservergleich erfordert validierte Mikroskopie, Kontrollen, Dokumentation, Schutzmaßnahmen gegen Kontamination, Peer-Review und qualifizierte Spurenauswertung.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensischer Faservergleich mit Vergleichsmikroskopie und UV-Vis-Spektren',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Lehr-Simulator',
      title: 'Was dieses virtuelle Fasermikroskop zeigt',
      html: 'Dieser Simulator modelliert den praktischen Ablauf beim <strong>forensischen Faservergleich</strong>: Beschreiben der fraglichen Textilfaser, Vergleichen mit einer bekannten Referenz, Anpassen des Fokus, Drehen von Polarisationsfiltern und Vergleichen der Farbstoffabsorption über eine vereinfachte UV-Vis-Kurve. Er wurde für Studierende der Spurenkunde entwickelt, nicht für Fallentscheidungen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 Felder', label: 'Vergleichsmikroskop-Ansicht', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'sichtbarer Spektralbereich', icon: 'mdi:chart-bell-curve' },
        { value: '4 Klassen', label: 'Baumwolle, Wolle, Polyester, Nylon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'Polarisatordrehung', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Wesentliche Beobachtungen beim Textilfaservergleich',
      items: [
        'Messen oder schätzen Sie den Faserdurchmesser und dokumentieren Sie natürliche Schwankungen entlang des Fadens.',
        'Erfassen Sie Zwirnrichtung, Oberflächenrillen, markkanalähnliche Merkmale, Mattierungspartikel und Querschnittsmerkmale, falls vorhanden.',
        'Nutzen Sie polarisiertes Licht, um Doppelbrechung, Auslöschungsverhalten und Helligkeitsänderungen bei Drehung zu vergleichen.',
        'Vergleichen Sie die Farbe mikroskopisch und nutzen Sie instrumentelle Farbstoffanalysen, falls der Fall eine höhere Unterscheidbarkeit erfordert.',
        'Geben Sie an, ob die Ergebnisse übereinstimmend, unterschiedlich oder uneindeutig sind; vermeiden Sie Formulierungen, die ohne Belege auf ein einziges Kleidungsstück hindeuten.',
      ],
    },
    {
      type: 'table',
      headers: ['Beobachtung', 'Welche Frage sie beantwortet', 'Einschränkung'],
      rows: [
        ['Durchmesser und Morphologie', 'Sind die Fasern physikalisch ähnlich?', 'Herstellungsbedingte Schwankungen können sich zwischen Kleidungsstücken überschneiden.'],
        ['Zwirnung und Oberflächendetails', 'Stimmen natürliche oder synthetische Merkmale überein?', 'Beschädigungen, Dehnung und Einbettung können das Aussehen verändern.'],
        ['Verhalten im polarisierten Licht', 'Stimmen die optischen Eigenschaften überein?', 'Doppelbrechung ist ein Klassenmerkmal, kein individueller Nachweis.'],
        ['UV-Vis-Farbstoffspektrum', 'Sind die Farbstoffe konsistent?', 'Ähnliche Farbstoffe können sich ähneln; Extraktion und Geräteeinstellungen sind entscheidend.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Was für eine Übereinstimmung spricht',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Mehrere unabhängige Klassenmerkmale zwischen der fraglichen und bekannten Faser stimmen überein.',
          points: ['Vergleichbarer Durchmesserbereich', 'Gleicher allgemeiner Fasertyp', 'Ähnliches Polarisationsverhalten', 'Überlagernde Absorptionsmaxima des Farbstoffs'],
        },
        {
          title: 'Was für einen Ausschluss spricht',
          icon: 'mdi:close-circle-outline',
          description: 'Es zeigt sich ein klarer, reproduzierbarer Unterschied in einem Merkmal, das bei einer gemeinsamen Textilquelle übereinstimmen müsste.',
          points: ['Abweichung zwischen Natur- und Synthesefaser', 'Unterschiedliche Zwirnung oder Oberflächenmorphologie', 'Deutlich abweichendes Farbstoffspektrum', 'Unvereinbares Doppelbrechungsverhalten'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Funktionsweise des Simulationsmodells',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Modell nutzt eine kleine Referenzdatenbank mit Werten für Durchmesser, Zwirnrichtung, Faserklasse, Doppelbrechung, Farbstoffgruppe und UV-Vis-Absorptionspunkten. Die fragliche Faser ist benutzerkonfigurierbar, sodass der Vergleichswert auf das Fallprofil reagiert und nicht auf eine feste Beispielprobe. Die visuelle Mikroskopansicht reagiert auf Fokus und Polarisatorwinkel, um Studierenden die Bedeutung optischer Einstellungen zu verdeutlichen.',
    },
    {
      type: 'paragraph',
      html: 'Die Polarisatorsteuerung ist besonders nützlich für Synthesefasern. Polyester und Nylon sind stärkere Doppelbrechungswerte zugewiesen, sodass sich ihre Helligkeit bei Drehung des Polarisators deutlicher verändert. Natürliche Baumwolle und Wolle reagieren ebenfalls, jedoch dezenter. Dies vermittelt den Lerneffekt, dass molekulare Ausrichtung und Faserstruktur das optische Verhalten beeinflussen.',
    },
    {
      type: 'paragraph',
      html: 'Das UV-Vis-Diagramm ist eine vereinfachte Überlagerung und kein Ersatz für ein Spektrophotometer. In der realen Spurenarbeit erfordert der Farbstoffvergleich Mikrospektrophotometrie, Dünnschichtchromatographie, Extraktionschemie, Referenzkontrollen und dokumentierte Messunsicherheiten. Das Diagramm verdeutlicht, warum zwei mikroskopisch ähnlich aussehende Fasern dennoch unterschiedliche Farbstoffchemikalien aufweisen können.',
    },
    {
      type: 'paragraph',
      html: 'Forensische Gutachter müssen jeden Schritt des Faseranalyseprozesses dokumentieren. Dies umfasst detaillierte Fotoaufnahmen, das Protokollieren von Messungen und die Einhaltung der Asservatenkette für alle physischen Beweismittel. Der Simulator hilft Studierenden, die Bedeutung einer systematischen Dokumentation und eines objektiven Vergleichs in der forensischen Arbeit zu verstehen. Durch die Interaktion mit verschiedenen Einstellungen können Benutzer lernen, wie sich Lichtweg, Probendicke und Farbstoffkonzentration auf die Spektralkurven und das physische Erscheinungsbild auswirken.',
    },
    {
      type: 'paragraph',
      html: 'Forensische Gutachter müssen jeden Schritt des Faseranalyseprozesses dokumentieren. Dies umfasst detaillierte Fotoaufnahmen, das Protokollieren von Messungen und die Einhaltung der Asservatenkette für alle physischen Beweismittel. Der Simulator hilft Studierenden, die Bedeutung einer systematischen Dokumentation und eines objektiven Vergleichs in der forensischen Arbeit zu verstehen. Durch die Interaktion mit verschiedenen Einstellungen können Benutzer lernen, wie sich Lichtweg, Probendicke und Farbstoffkonzentration auf die Spektralkurven und das physische Erscheinungsbild auswirken.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fragliche Faser', definition: 'Eine am Tatort, am Opfer, am Verdächtigen, an einem Werkzeug oder Fahrzeug gesicherte Faser unbekannter Herkunft.' },
        { term: 'Bekannte Faser', definition: 'Eine von einem bekannten Textil oder Objekt gesicherte Referenzfaser zum Vergleich mit der fraglichen Probe.' },
        { term: 'Doppelbrechung', definition: 'Optisches Verhalten, bei dem ein Material je nach Lichtrichtung oder Polarisation unterschiedliche Brechungsindizes aufweist.' },
        { term: 'UV-Vis-Spektrum', definition: 'Diagramm, das zeigt, wie stark ein Farbstoff oder Material Licht bei verschiedenen Wellenlängen absorbiert.' },
        { term: 'Klassenmerkmal', definition: 'Eine Eigenschaft, die ein Beweismittel einer Gruppe möglicher Quellen zuordnet, anstatt eine einzige Quelle eindeutig zu bestimmen.' },
      ],
    },
    {
      type: 'tip',
      title: 'Interpretationstipp für Studierende',
      html: 'Ein hoher Ähnlichkeitswert sollte als <strong>Übereinstimmung</strong> und nicht als Identität verstanden werden. Spurenbelege sind am stärksten, wenn Mikroskopie, Chemie, Übertragungskontext, Persistenz, Sicherungsmethode und Kontaminationskontrollen übereinstimmen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Schlussfolgerungen auf Beweiswert beschränken',
      html: 'Ein Browsermikroskop kann keine Faserübereinstimmung validieren. Formelle Berichte sollten Beobachtungen, Vergleichsgrundlagen, Einschränkungen und den Grad der Unterstützung beschreiben, ohne die Zuordnung zur Quelle zu übertreiben.',
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
