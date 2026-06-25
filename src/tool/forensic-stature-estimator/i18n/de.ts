import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensischer-koerperhoehenrechner-trotter-gleser-methode';
const title = 'Forensischer Körperhöhenschätzer';
const description = 'Schätzen Sie die Lebendkörperhöhe anhand menschlicher Langknochen mit den Regressionsgleichungen von Trotter und Gleser unter Berücksichtigung von Geschlecht, Abstammung und Alterskorrektur.';

const howTo = [
  {
    name: 'Knochen und Variablen auswählen',
    text: 'Wählen Sie den zu messenden Langknochen (Femur, Tibia, Humerus, Fibula, Radius oder Ulna) sowie das biologische Geschlecht, die Abstammungsgruppe und das Sterbealter des Individuums aus.'
  },
  {
    name: 'Knochenlänge ermitteln',
    text: 'Stellen Sie den Messschieber auf dem virtuellen osteometrischen Messbrett auf die maximale Länge des Knochenpräparats in Zentimetern ein.'
  },
  {
    name: 'Körperhöhe berechnen',
    text: 'Der Rechner wendet die entsprechenden Trotter-Gleser-Regressionsgleichungen an und zieht bei Personen über 30 Jahren 0,06 cm pro Lebensjahr ab.'
  },
  {
    name: 'Intervalle und Fehler interpretieren',
    text: 'Überprüfen Sie die geschätzte Körperhöhe, den Standardfehler der Schätzung (SEE) und das 95%-Prognoseintervall.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Wie funktionieren die Regressionsgleichungen von Trotter und Gleser?',
    answer: 'Die Gleichungen nutzen lineare Regression, um die Korrelation zwischen der Lebendgröße und der Maximallänge von Langknochen abzubilden. Der Rechner wendet populations- und geschlechtsspezifische Steigungen und Konstanten an.'
  },
  {
    key: 'faq-2',
    question: 'Warum erfordert das Tool biologisches Geschlecht und Abstammung?',
    answer: 'Die menschlichen Körperproportionen variieren je nach Geschlecht und geografischer Herkunft. Männer haben im Durchschnitt andere Gliedmaßen-zu-Körperhöhe-Verhältnisse als Frauen.'
  },
  {
    key: 'faq-3',
    question: 'Warum gibt es einen Alterskorrekturfaktor?',
    answer: 'Die Körperhöhe nimmt ab dem 30. Lebensjahr durch die Kompression der Bandscheiben und Haltungsänderungen ab. Trotter und Gleser empfahlen einen Abzug von 0,06 cm pro Jahr über 30.'
  },
  {
    key: 'faq-4',
    question: 'Was ist der Standardfehler der Schätzung (SEE)?',
    answer: 'Der SEE ist die Standardabweichung der Residuen im Regressionsmodell und gibt die Genauigkeit der Vorhersage für den jeweiligen Knochen an.'
  },
  {
    key: 'faq-5',
    question: 'Welche Langknochen liefern die genauesten Schätzungen?',
    answer: 'Die Knochen der unteren Gliedmaßen (Femur und Tibia) liefern die genauesten Schätzungen, da sie direkt zur Körperhöhe beitragen. Knochen der oberen Extremitäten weisen höhere Standardfehler auf.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Forensischer Körperhöhenschätzer',
    desc: 'Simulieren Sie Messungen auf einem osteometrischen Messbrett und berechnen Sie die Körperhöhe mittels linearer Regression.',
    configTitle: 'Osteometrische Konfiguration',
    boneLabel: 'Knochenpräparat',
    lengthLabel: 'Knochenlänge',
    unitLabel: 'Einheitensystem',
    metricOption: 'Metrisch (cm)',
    imperialOption: 'Imperial (Zoll)',
    sexLabel: 'Biologisches Geschlecht',
    ancestryLabel: 'Abstammungsgruppe',
    ageLabel: 'Sterbealter (Jahre)',
    maleOption: 'Männlich',
    femaleOption: 'Weiblich',
    whiteOption: 'Weiß / Kaukasisch',
    blackOption: 'Schwarz / Afroamerikanisch',
    asianOption: 'Asiatisch / Mongolid',
    femurName: 'Femur (Oberschenkelknochen)',
    tibiaName: 'Tibia (Schienbein)',
    humerusName: 'Humerus (Oberarmknochen)',
    fibulaName: 'Fibula (Wadenbein)',
    radiusName: 'Radius (Speiche)',
    ulnaName: 'Ulna (Elle)',
    resultsTitle: 'Ergebnisse der Höhenschätzung',
    estimateLabel: 'Geschätzte Körperhöhe',
    errorLabel: 'Standardfehler (SEE)',
    rangeLabel: '95% Prognoseintervall',
    formulaLabel: 'Regressionsgleichung',
    formulaBoneFactor: 'Knochenfaktor',
    formulaConstant: 'Konstante',
    formulaAgeCorrection: 'Alterskorrektur',
    formulaStdError: 'Standardfehler (SEE)',
    fallbackAlert: 'Es gibt keine direkte Trotter-Gleser-Gleichung für asiatische Frauen; die Referenzgleichungen für weiße Frauen werden als forensischer Fallback verwendet.',
    boardInstructions: 'Verschieben Sie den Messschieber oder nutzen Sie die Eingabefelder zur Knochenmessung.',
    rulerLabelMetric: 'Metrische Skala (mm)',
    rulerLabelImperial: 'Imperiale Skala (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Umfassender Leitfaden zur Körperhöhenschätzung in der forensischen Anthropologie',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Die Körperhöhenschätzung stellt eine fundamentale Säule der biologischen Profilerstellung in der physischen Anthropologie, Bioarchäologie und Rechtsmedizin dar. Bei der Bergung menschlicher Überreste hilft die Rekonstruktion der Körperhöhe dabei, die Identität mit Vermisstenregistern abzugleichen. Die Körperhöhe wird durch die Messung der maximalen Länge von Langknochen geschätzt, die aufgrund genetischer und umweltbedingter Faktoren eng mit der Gesamtlänge des Körpers korrelieren.'
    },
    {
      type: 'paragraph',
      html: 'Dieser digitale Messbrett-Simulator ermöglicht es Studierenden und Praktikern, die von Mildred Trotter und Goldine C. Gleser entwickelten linearen Regressionsmodelle zu erforschen. Durch Eingabe von Knochenart, Geschlecht, Abstammung und Alter lässt sich analysieren, wie sich Körperproportionen auf die mathematischen Konstanten auswirken.'
    },
    {
      type: 'title',
      text: 'Die Trotter-Gleser-Regressionsformeln verstehen',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter und Goldine C. Gleser veröffentlichten ihre wegweisenden Formeln in den Jahren 1952 und 1958. Die Gleichungen folgen dem linearen Muster: Körperhöhe = (Steigung × Knochenlänge) + Konstante ± Standardfehler. Da sich Knochen-zu-Körperhöhen-Verhältnisse unterscheiden, werden separate Gleichungen verwendet.'
    },
    {
      type: 'table',
      headers: ['Knochenpräparat', 'Formel für weiße Männer', 'Formel für weiße Frauen', 'Forensische Nützlichkeit & Zuverlässigkeit'],
      rows: [
        ['Femur (Oberschenkel)', 'Körperhöhe = 2.32 × Femur + 65.53 ± 3.94 cm', 'Körperhöhe = 2.47 × Femur + 54.10 ± 3.72 cm', 'Höchste Zuverlässigkeit. Der Oberschenkelknochen trägt das Hauptgewicht und korreliert direkt mit der Standgröße.'],
        ['Tibia (Schienbein)', 'Körperhöhe = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Körperhöhe = 2.90 × Tibia + 61.53 ± 3.66 cm', 'Hohe Zuverlässigkeit. Es muss darauf geachtet werden, dass die Tibia ohne den Innenknöchel gemessen wird, um Trotters Protokoll von 1952 zu entsprechen.'],
        ['Fibula (Wadenbein)', 'Körperhöhe = 2.60 × Fibula + 75.50 ± 3.86 cm', 'Körperhöhe = 2.93 × Fibula + 59.61 ± 3.57 cm', 'Sehr zuverlässig, die Fibula ist jedoch dünn und in archäologischen Kontexten oft frakturiert.'],
        ['Humerus (Oberarm)', 'Körperhöhe = 2.89 × Humerus + 78.10 ± 4.57 cm', 'Körperhöhe = 3.36 × Humerus + 57.97 ± 4.45 cm', 'Mäßige Zuverlässigkeit. Oberarmknochen tragen kein Gewicht und weisen größere Standardfehler auf.'],
        ['Radius (Speiche)', 'Körperhöhe = 3.79 × Radius + 79.42 ± 4.66 cm', 'Körperhöhe = 4.74 × Radius + 54.93 ± 4.45 cm', 'Geringere Zuverlässigkeit. Der Unterarm zeigt stärkere proportionale Entwicklungsunterschiede.']
      ]
    },
    {
      type: 'title',
      text: 'Altersbedingter Höhenverlust und Korrekturen',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Die Lebendkörperhöhe ist im Erwachsenenalter nicht statisch. Ab dem 30. Lebensjahr kommt es zu einem allmählichen Höhenverlust durch die Kompression der Bandscheiben. Trotter und Gleser empfahlen, für jedes Jahr über 30 Jahre 0,06 cm abzuziehen: Höhenverlust = 0,06 × (Alter - 30).'
    },
    {
      type: 'title',
      text: 'Methodische Abweichungen beim Tibia-Messprotokoll',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Ein bekanntes methodisches Problem betrifft Trotters Schienbeinmessungen. Im Jahr 1952 wurde die Tibia unter Ausschluss des Innenknöchels (Malleolus medialis) gemessen, 1958 hingegen mit. Die Anwendung der 1952er-Formeln auf eine inklusive gemessene Tibia führt zu einer systematischen Überschätzung.'
    },
    {
      type: 'title',
      text: 'Säkulare Trends und Anwendbarkeit historischer Daten',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Da Trotters Stichproben Ende des 19. und Anfang des 20. Jahrhunderts geboren wurden, spiegeln die Formeln historische Lebensbedingungen wider. Die moderne Zunahme der Durchschnittsgröße (säkularer Trend) führt dazu, dass Rechtsmediziner heute auch neuere Datenbanken wie FORDISC hinzuziehen.'
    }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
