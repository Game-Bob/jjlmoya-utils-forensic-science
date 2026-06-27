import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'becke-linien-glas-brechungsindex-simulator';
const title = 'Forensischer Becke Linien Simulator für Glas Brechungsindex';
const description = 'Simulieren Sie die Becke-Linien-Methode für den forensischen Glasvergleich, indem Sie eine Immersionsflüssigkeit erhitzen, die Brechungsindizes abgleichen und das Verschwinden des hellen Halos beobachten.';

const howTo = [
  {
    name: 'Fragliches Glasprofil auswählen',
    text: 'Wählen Sie ein gängiges Glasreferenzprofil wie Natronkalkglas, Borosilikatglas, Bleikristall oder gehärtetes Fensterglas.',
  },
  {
    name: 'Heiztisch-Temperatur anpassen',
    text: 'Bewegen Sie den Temperaturregler, um den Brechungsindex der virtuellen Immersionsflüssigkeit zu ändern.',
  },
  {
    name: 'Bewegung der Becke-Linie beobachten',
    text: 'Verwenden Sie die Fokussierungsrichtung, um zu sehen, ob sich die helle Linie nach innen oder außen bewegt oder am Übereinstimmungspunkt fast verschwindet.',
  },
  {
    name: 'Indexdifferenz ablesen',
    text: 'Vergleichen Sie Flüssigkeits-RI, Glas-RI, Delta-RI und Übereinstimmungsprozentsatz, um zu verstehen, warum der Halo nahe der Indexübereinstimmung schwächer wird.',
  },
];

const faq = [
  {
    question: 'Was ist die Becke-Linie bei der forensischen Glasanalyse?',
    answer: 'Die Becke-Linie ist ein heller Lichtsaum (Halo), der nahe der Grenze zwischen einem Glasfragment und einer Immersionsflüssigkeit zu sehen ist, wenn sich deren Brechungsindizes unterscheiden. Ihre Bewegung beim Fokussieren hilft zu bestimmen, welches Material den höheren Brechungsindex hat.',
  },
  {
    question: 'Warum ist das Erhitzen der Immersionsflüssigkeit wichtig?',
    answer: 'Der Brechungsindex vieler Immersionsflüssigkeiten sinkt mit steigender Temperatur. Durch Erhitzen der Flüssigkeit, bis ihr Index dem des Glases entspricht, verblasst der Grenzkontrast und die Fragmentkante wird schwer erkennbar.',
  },
  {
    question: 'Kann der Brechungsindex allein eine Glasquelle identifizieren?',
    answer: 'Nein. Der Brechungsindex kann den Klassenvergleich und den Ausschluss unterstützen, aber die forensische Quelleninterpretation berücksichtigt auch die Elementarzusammensetzung, Dicke, Farbe, den Bruchkontext, Kontrollen, Messunsicherheiten und validierte Laborverfahren.',
  },
  {
    question: 'Was bedeutet es, wenn die Becke-Linie verschwindet?',
    answer: 'Es bedeutet, dass Flüssigkeit und Glas unter diesen simulierten Bedingungen sehr ähnliche Brechungsindizes aufweisen. In der realen Mikroskopie wird das Verschwinden mit kalibrierter Temperaturregelung und Referenzmaterialien beurteilt.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Virtuelle Mikroskopansicht mit einem Glasfragment in Immersionsflüssigkeit',
    units: 'Temperatureinheitensystem',
    metric: 'Metrisch',
    imperial: 'Imperial',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Glasreferenz',
    sodaLime: 'Natronkalk-Behälterglas',
    borosilicate: 'Borosilikat-Laborglas',
    leadCrystal: 'Bleikristall-Dekorglas',
    tempered: 'Gehärtetes Fensterglas',
    stageTemperature: 'Heiztisch-Temperatur',
    focusDirection: 'Fokusrichtung',
    focusRaised: 'Fokus anheben',
    focusLowered: 'Fokus absenken',
    liquidRi: 'Flüssigkeits-RI',
    glassRi: 'Glas-RI',
    deltaRi: 'Delta-RI',
    matchMeter: 'RI-Übereinstimmung',
    canvasHalo: 'sichtbarer Becke-Halo',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'Kante fast übereinstimmend',
    interpMatched: 'Die Grenze befindet sich nahe der optischen Übereinstimmung. Bei einem realen Becke-Linien-Test ist dies der Bereich, in dem der Halo schwach wird und die Fragmentkante am schwersten zu lokalisieren ist.',
    interpGlassHigher: 'Das Glas hat den höheren Brechungsindex. Bei angehobenem Fokus zeigt das Verhalten der Becke-Linie, dass sich das Licht zur Glasseite der Grenze hin konzentriert.',
    interpLiquidHigher: 'Die Immersionsflüssigkeit hat den höheren Brechungsindex. Der Halo verschiebt sich zur Flüssigkeitsseite, bis die Temperatur den Flüssigkeitsindex näher an das Glas bringt.',
    disclaimer: 'Nur zu Bildungszwecken. Der reale forensische Glasvergleich erfordert kalibrierte Brechungsindex-Geräte, bekannte Standards, Unsicherheitsberichte und eine qualifizierte Interpretation.',
  },
  seo: [
    {
      type: 'title',
      text: 'Becke-Linien-Brechungsindex-Prüfung für forensisches Glas',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Lehr-Simulator',
      title: 'Was dieser Glas RI Simulator demonstriert',
      html: 'Dieser Simulator zeigt, warum ein Glasfragment in Immersionsöl mehr oder weniger sichtbar wird, wenn sich der Brechungsindex der Flüssigkeit dem Brechungsindex des Glases nähert. Er wurde für Studenten der Forensik entwickelt, die <strong>Becke-Linien-Mikroskopie</strong>, Heiztisch-RI-Abgleich und die Grenzen von Glasvergleichs-Beweisen erlernen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n Glas - n Flüssigkeit', label: 'gezeigter Indexkontrast', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'Heiztisch-Bereich', icon: 'mdi:thermometer' },
        { value: '4', label: 'Glasprofile', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'konvertierbare Temperatureinheiten', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Praktische Checkliste zur Beobachtung der Becke Linie',
      items: [
        'Verwenden Sie ein sauberes, kleines Glasfragment, das vollständig in eine geeignete Brechungsindex-Flüssigkeit eingetaucht ist.',
        'Fokussieren Sie leicht über und unter der Grenze und beobachten Sie, in welche Richtung sich die helle Linie zu bewegen scheint.',
        'Erhöhen Sie die Temperatur in der Nähe des geschätzten Übereinstimmungspunkts langsam, da die Linie in einem engen Bereich verblassen kann.',
        'Notieren Sie Temperatur, Flüssigkeitstyp, Kalibrierstandard, beobachtetes Übereinstimmungsverhalten und Unsicherheit.',
        'Behandeln Sie den RI als Klassenmerkmal: Eine Nichtübereinstimmung kann ausschließen, während eine Übereinstimmung zusätzlichen Kontext erfordert.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Was ein RI Vergleich unterstützen kann',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Der Brechungsindex kann helfen, fragliche Glasfragmente unter kontrollierten Bedingungen mit bekannten Referenzgläsern zu vergleichen.',
          points: ['Klassenmerkmals-Vergleich', 'Ausschluss bei deutlicher RI-Abweichung', 'Screening vor der Elementaranalyse', 'Vermittlung des optischen Grenzverhaltens'],
        },
        {
          title: 'Was der RI allein nicht beweisen kann',
          icon: 'mdi:alert-circle-outline',
          description: 'Ein übereinstimmender RI identifiziert keine Scheibe, Flasche, Autoscheibe oder Tatortquelle eindeutig.',
          points: ['Keine individuelle Quellenzuordnung für sich allein', 'Keine Rekonstruktion ohne Tatortkontext', 'Kein Ersatz für Kontrollen', 'Keine rechtliche Schlussfolgerung aus einem Browsermodell'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Benutzerfrage', 'Mikroskopiekonzept', 'Sorgfältige Antwort'],
      rows: [
        ['Warum bewegt sich die helle Kante?', 'Brechung an einer Grenze zwischen zwei Brechungsindizes.', 'Die Becke-Linie tendiert dazu, sich zum Material mit dem höheren Brechungsindex zu bewegen, wenn der Fokus angehoben wird.'],
        ['Warum verschwindet die Kante?', 'Indexabgleich.', 'Wenn Glas- und Flüssigkeits-RI fast gleich sind, sinkt der Grenzkontrast und der Halo wird schwach.'],
        ['Warum die Flüssigkeit erhitzen?', 'Thermischer RI-Koeffizient.', 'Der simulierte Flüssigkeits-RI nimmt mit der Temperatur ab, was einen Abgleich mit verschiedenen Glastypen ermöglicht.'],
        ['Ist eine Übereinstimmung schlüssig?', 'Einschränkung durch Klassenmerkmale.', 'Eine Übereinstimmung stützt nur die Konsistenz; viele Glasobjekte können einen ähnlichen RI aufweisen.'],
      ],
    },
    {
      type: 'title',
      text: 'Wie das Simulationsmodell funktioniert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Modell weist jedem Glasprofil einen Referenz-Brechungsindex zu und behandelt die Immersionsflüssigkeit als temperatursensitives Medium. Wenn sich der Heiztisch erwärmt, sinkt der Flüssigkeitsindex um einen festen thermischen Koeffizienten. Der Simulator berechnet dann die Differenz zwischen Glas-RI und Flüssigkeits-RI und steuert damit Halo-Helligkeit, Halo-Versatz, Übereinstimmungsprozentsatz und die Interpretationsmeldung.',
    },
    {
      type: 'paragraph',
      html: 'Das visuelle Mikroskopfeld ist absichtlich qualitativ gehalten. Es versucht nicht, jeden optischen Pfad physikalisch exakt nachzuzeichnen. Stattdessen bewahrt es die wesentliche didaktische Beziehung: Starker RI-Kontrast erzeugt eine helle Grenze, geringerer Kontrast eine schwache Grenze und nahe dem Übereinstimmungspunkt scheint die Glaskante in der Flüssigkeit zu verschwinden.',
    },
    {
      type: 'paragraph',
      html: 'In professionellen forensischen Labors wird die Kalibrierung des Heiztischs mit Glasreferenzproben bekannter Brechungsindizes durchgeführt. Da sich der Brechungsindex der Immersionsflüssigkeit vorhersehbar mit der Temperatur ändert (normalerweise als dn/dT bezeichnet), ermöglicht die genaue Temperatur, bei der die Becke-Linie verschwindet, dem Wissenschaftler, den Brechungsindex des Glases bis auf vier Dezimalstellen genau zu berechnen. Dieser Simulator modelliert dieses temperaturabhängige Verhalten mithilfe einer linearen Formel, sodass die Schüler das Auffinden des genauen Übereinstimmungspunkts durch sorgfältige Steuerung der Heizstufe üben können.',
    },
    {
      type: 'paragraph',
      html: 'Bei der Analyse von Glasbeweisen wird der Brechungsindex als Klassenmerkmal eingestuft. Obwohl ein übereinstimmender Brechungsindex zwischen einem Fragment vom Tatort und der Kleidung eines Verdächtigen mit einer gemeinsamen Quelle übereinstimmt, identifiziert er die Quelle nicht eindeutig, da viele Glasobjekte identische Brechungsindizes aufweisen. Daher müssen forensische Experten übereinstimmende Ergebnisse zurückhaltend interpretieren und die Übereinstimmung im Sinne der Konsistenz melden, während sie gleichzeitig betonen, dass eine endgültige Quellenzuordnung allein auf der Grundlage optischer Eigenschaften nicht möglich ist.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Brechungsindex', definition: 'Ein Maß dafür, wie stark ein Material Licht im Vergleich zum Vakuum ablenkt.' },
        { term: 'Immersionsflüssigkeit', definition: 'Eine Flüssigkeit mit bekannten optischen Eigenschaften, die verwendet wird, um ein Fragment beim mikroskopischen RI-Vergleich zu umgeben.' },
        { term: 'Becke-Linie', definition: 'Die helle Linie oder der Halo, der an einer Grenze zu sehen ist, wenn zwei transparente Materialien unterschiedliche Brechungsindizes haben.' },
        { term: 'Übereinstimmungspunkt', definition: 'Der Temperaturbereich, in dem die Immersionsflüssigkeit und das Glas fast denselben Brechungsindex haben.' },
        { term: 'Klassenbeweis', definition: 'Beweismittel, die ein Objekt eher mit einer Gruppe möglicher Quellen als mit einer einzelnen, eindeutigen Quelle in Verbindung bringen können.' },
      ],
    },
    {
      type: 'tip',
      title: 'Interpretationstipp für Studenten',
      html: 'Bei Glasbeweisen ist eine klare RI-Abweichung oft aussagekräftiger als eine Übereinstimmung, da sie eine vermutete Quelle ausschließen kann. Eine Übereinstimmung ist nützlich, aber ihre Aussagekraft hängt von Populationsdaten, der Messpräzision, der Elementarzusammensetzung und dem Fallkontext ab.',
    },
    {
      type: 'proscons',
      title: 'Stärken und Grenzen der Becke Linien Glas RI Prüfung',
      items: [
        { pro: 'Schnell, visuell und hervorragend zur Vermittlung des Vergleichs transparenter Materialien.', con: 'Beobachterurteil und Fokussierungstechnik können die scheinbare Linienbewegung beeinflussen.' },
        { pro: 'Der Temperaturabgleich kann den RI bei Kalibrierung mit nützlicher Präzision schätzen.', con: 'Temperaturregelung, Flüssigkeitsalterung, Kontamination und Standards sind in der realen Praxis von Bedeutung.' },
        { pro: 'Nützlich zum Ausschluss von Glasfragmenten mit deutlich unterschiedlichen optischen Eigenschaften.', con: 'Kann eine Quelle nicht ohne breitere analytische und kontextuelle Beweise individualisieren.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensische Vorsicht',
      title: 'Die Schlussfolgerung verhältnismäßig halten',
      html: 'Eine Browser-Becke-Linien-Simulation ist eine Lernhilfe, keine Labormethode. Die formelle Interpretation von Glasbeweisen sollte sich auf validierte Instrumente, schriftliche Verfahren, Kalibrierprotokolle, Unsicherheitsschätzungen, Peer-Reviews und eine der jeweiligen Gerichtsbarkeit angemessene Berichterstattung stützen.',
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
