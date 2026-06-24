import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-blutalkohol-simulator';
const title = 'Widmark Blutalkohol Simulator';
const description = 'Simulieren Sie die Aufnahme, Verteilung und den Abbau von Alkohol im menschlichen Körper mithilfe der Widmark-Formel und Nullter-Ordnung-Abbaukinetik.';

const howTo = [
  {
    name: 'Körperliche Parameter einstellen',
    text: 'Stellen Sie Körpergewicht, biologisches Geschlecht und Hydrationszustand ein. Diese Variablen bestimmen den Widmark-Faktor (r), der das Verteilungsvolumen bestimmt.',
  },
  {
    name: 'Mageninhalt festlegen',
    text: 'Wählen Sie zwischen leerem Magen, einer leichten Mahlzeit oder einer vollen Mahlzeit. Dies beeinflusst die Absorptionsgeschwindigkeit (ka) und flacht die Blutalkoholkurve ab.',
  },
  {
    name: 'Getränke hinzufügen',
    text: 'Geben Sie Volumen, Alkoholgehalt (Vol.-%) und die relative Zeit des Konsums ein, um den Kurvenverlauf zu simulieren.',
  },
  {
    name: 'Verlauf analysieren',
    text: 'Analysieren Sie die Kurve und den Abbau der Blutalkoholkonzentration (BAK) über einen Zeitraum von 12 Stunden.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Was ist die Widmark-Formel und wie wird sie in der Forensik angewendet?',
    answer: 'Die Widmark-Formel ist ein mathematisches Modell, das 1932 von Erik M. P. Widmark entwickelt wurde. Sie schätzt die Blutalkoholkonzentration basierend auf der konsumierten Alkoholmasse, dem Körpergewicht, dem Verteilungsfaktor (r) und einer linearen Eliminierungsrate. Forensische Toxikologen nutzen diese Formel für Rückrechnungen, um die BAK zum Zeitpunkt eines Unfalls zu bestimmen.',
  },
  {
    key: 'faq-2',
    question: 'Wie wirkt sich Nahrung im Magen auf die BAK-Kurve aus?',
    answer: 'Nahrung im Magen verzögert die Magenentleerung, wodurch der Alkohol langsamer in den Dünndarm gelangt. Da dort die Hauptaufnahme stattfindet, führt eine Verzögerung zu einer reduzierten Absorptionsrate (ka). Die Kurve flacht ab, und der maximale BAK-Wert sinkt deutlich.',
  },
  {
    key: 'faq-3',
    question: 'Warum erfolgt der Alkoholabbau nach einer Kinetik nullter Ordnung?',
    answer: 'Im Gegensatz zu den meisten Medikamenten wird Alkohol nach einer Kinetik nullter Ordnung abgebaut, da das hauptsächliche Enzym (Alkoholdehydrogenase - ADH) bereits bei sehr niedrigen Werten (ca. 0,02 g/L) vollständig gesättigt ist. Die Leber baut daher eine konstante Menge Alkohol pro Stunde ab, unabhängig von der Konzentration im Blut.',
  },
  {
    key: 'faq-4',
    question: 'Welche biologischen Faktoren beeinflussen den Widmark-Faktor r?',
    answer: 'Der Widmark-Faktor r beschreibt das Verhältnis von Körperwasser zum Gesamtgewicht. Da Ethanol hydrophil und lipophob ist, verteilt es sich nur im Körperwasser. Muskelgewebe enthält viel Wasser, Fettgewebe hingegen kaum. Menschen mit höherem Fettanteil oder Dehydratation haben daher ein geringeres Verteilungsvolumen, was zu einer höheren BAK führt.',
  },
  {
    key: 'faq-5',
    question: 'Kann ich diesen Simulator nutzen, um meine Fahrtauglichkeit rechtlich nachzuweisen?',
    answer: 'Nein. Dieser Simulator dient ausschließlich Bildungszwecken. Reale Faktoren wie Enzymgenetik, Lebergesundheit, Medikamente und Mageninhalt variieren stark. Verlassen Sie sich niemals auf mathematische Modelle, um Ihre Fahrtauglichkeit zu bestimmen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profil',
    weight: 'Gewicht (kg)',
    sex: 'Biologisches Geschlecht',
    male: 'Männlich',
    female: 'Weiblich',
    hydration: 'Hydrationszustand',
    hydrationLow: 'Niedrig',
    hydrationNormal: 'Normal',
    hydrationHigh: 'Hoch',
    stomachState: 'Mageninhalt',
    stomachEmpty: 'Leer (Schnelle Aufnahme)',
    stomachLight: 'Leichte Mahlzeit (Mittlere Aufnahme)',
    stomachFull: 'Volle Mahlzeit (Langsame Aufnahme)',
    drinksTimeline: 'Konsum-Verlauf',
    addDrink: 'Getränk hinzufügen',
    drinkVolume: 'Volumen (ml)',
    drinkAbv: 'Alkoholgehalt (% Vol)',
    drinkTime: 'Zeit (Stunde)',
    drinksList: 'Konsumierte Getränke',
    remove: 'Entfernen',
    beer: 'Bier (330ml, 5%)',
    wine: 'Wein (150ml, 12%)',
    spirits: 'Spirituosen (40ml, 40%)',
    peakBac: 'Max. BAK',
    timeToSober: 'Zeit bis nüchtern',
    sober: 'Nüchtern',
    currentBac: 'Aktuelle BAK',
    drivingLimitAlert: 'Fahrberechtigung',
    safeLimit: 'Unter Grenzwert',
    warningLimit: 'Warnung überschritten',
    dangerLimit: 'Grenzwert überschritten',
    graphTitle: 'Blutalkoholkonzentration über 12 Stunden',
    timeAxisLabel: 'Zeit (Stunden)',
    bacAxisLabel: 'Promille (g/L)',
    legalLimitText: 'Standard-Grenzwert',
    noDrinksText: 'Fügen Sie Getränke hinzu, um die Kurve zu simulieren.',
    hours: 'Stunden',
    soberStatus: 'Nüchtern in {time} Std.',
    neverSober: 'Übersteigt 12 Std.',
    noteDisclaimer: 'Nur für Bildungszwecke. Setzen Sie sich nach dem Konsum nicht ans Steuer.',
    noteWidmark: 'Basiert auf der Widmark-Gleichung und konstantem Leberabbau.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensische Toxikologie und Pharmakokinetik von Ethanol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Verständnis von <strong>Aufnahme, Verteilung und Abbau von Ethanol</strong> ist eine grundlegende Anforderung in der Rechtsmedizin und der Rekonstruktion von Verkehrsunfällen. Nach dem Konsum gelangt der Alkohol über die Speiseröhre in den Magen, wo ein kleiner Teil direkt resorbiert wird. Der Großteil der Resorption findet jedoch im Dünndarm statt. Die Entleerungsgeschwindigkeit des Magens ist der limitierende Faktor für die Alkoholresorption, weshalb der Konsum auf vollen Magen den Anstieg der BAK-Kurve deutlich verzögert.',
    },
    {
      type: 'paragraph',
      html: 'Dieser interaktive Simulator implementiert die klassischen Berechnungen von Erik M. P. Widmark in Kombination mit einer kontinuierlichen Kompartmentsimulation über 12 Stunden. Durch die Anpassung physiologischer Parameter können Anwender die mathematische Akkumulation und den linearen Abbau im zeitlichen Verlauf nachvollziehen.',
    },
    {
      type: 'title',
      text: 'Mathematische Herleitung der Widmark-Formel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die fundamentale Widmark-Formel berechnet die theoretische Blutalkoholkonzentration unter Annahme einer instantanen Absorption: <strong>BAK = (A / (W * r)) - (&beta; * t)</strong>. Dabei steht <em>A</em> für die Masse an reinem Ethanol in Gramm, <em>W</em> für das Körpergewicht in Kilogramm und <em>r</em> für den Widmark-Verteilungsfaktor. Die Variable <em>&beta;</em> stellt die stündliche Abbaurate dar, während <em>t</em> die verstrichene Zeit beschreibt.',
    },
    {
      type: 'paragraph',
      html: 'Zur Umrechnung des Getränkevolumens in Gramm reinen Alkohols multiplizieren wir das Volumen (ml) mit dem Alkoholgehalt (Vol.-%) und der Dichte von Ethanol (ca. 0,8 g/ml). Ein 330-ml-Bier mit 5% enthält somit 13,2 g reines Ethanol. Dieser Wert wird durch das Gesamtkörperwasser geteilt, welches vom Geschlecht (Standardwert Männer: 0,68; Frauen: 0,55) und dem Hydrationsniveau beeinflusst wird.',
    },
    {
      type: 'title',
      text: 'Physiologische Variablen und das Verteilungsvolumen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Verteilungsvolumen von Ethanol hängt maßgeblich von der Körperzusammensetzung ab. Da Ethanol hydrophil und lipophob ist, verteilt es sich ausschließlich im Körperwasser. Muskelgewebe besteht zu etwa 75% aus Wasser, wohingegen Fettgewebe kaum Wasser enthält. Ein muskulöser Mensch weist daher einen größeren Verteilungsfaktor r auf und erreicht bei gleicher Alkoholmenge eine niedrigere BAK als eine Person gleichen Gewichts mit höherem Körperfettanteil. Dehydration verringert das Körperwasser und steigert somit die maximale Konzentration.',
    },
    {
      type: 'table',
      headers: ['Physiologische Variable', 'Biologischer Mechanismus', 'Auswirkung auf Kinetik', 'Forensische Bedeutung'],
      rows: [
        ['Körpergewicht', 'Bestimmt das Gesamtvolumen des Körperwassers.', 'Umgekehrt proportional zur maximalen BAK.', 'Bildet die Basis für forensische Rückrechnungen.'],
        ['Geschlecht', 'Beeinflusst das typische Muskel-Fett-Verhältnis.', 'Faktor r ist bei Frauen niedriger (0,55), was die BAK erhöht.', 'Erklärt die höhere biologische Empfindlichkeit von Frauen.'],
        ['Hydrationszustand', 'Verändert das verfügbare freie Wasser im Körper.', 'Dehydration senkt r um 0,05, wodurch die Kurve steigt.', 'Erlaubt Korrekturen bei starker körperlicher Belastung.'],
        ['Mageninhalt', 'Nahrung verzögert die Magenentleerung.', 'Senkt die Absorptionsrate ka, flacht die Kurve ab.', 'Erklärt unerwartet niedrige Werte nach Mahlzeiten.'],
      ],
    },
    {
      type: 'title',
      text: 'Eliminationskinetik: Nullter Ordnung Abbau in der Leber',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nach dem Eintritt in den Blutkreislauf wird Alkohol primär in der Leber durch das Enzym Alkoholdehydrogenase (ADH) abgebaut. Da dieses Enzym bereits bei sehr geringen Konzentrationen gesättigt ist, verläuft der Abbau nach einer Kinetik nullter Ordnung. Dies bedeutet, dass pro Zeiteinheit eine konstante Alkoholmenge eliminiert wird. Der forensisch etablierte Mittelwert (&beta;<sub>60</sub>) beträgt 0,15 g/L pro Stunde, was dem Abbau von etwa 10 g reinem Alkohol pro Stunde entspricht. Dieser lineare Abbau erzeugt den geradlinigen Abfall der Kurve.',
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
