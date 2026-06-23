import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dental-skeletal-third-molar-age-estimator';
const title = 'Zahnärztlicher, skelettaler und Weisheitszahn-Altersschätzer';
const description = 'Schätzen Sie ein forensisches Altersintervall anhand der Zahnentwicklung, der Skelettreife und der Weisheitszahn-Indikatoren für Screening und Falltriage.';

const howTo = [
  {
    name: 'Wählen Sie den Beweisschwerpunkt',
    text: 'Wählen Sie gemischte Evidenz für eine ausgewogene Triage, zahnärztliche Priorität, wenn Zahnbefunde aussagekräftiger sind, oder skelettale Priorität, wenn radiografische Skelettindikatoren die Hauptquelle darstellen.',
  },
  {
    name: 'Bewerten Sie jeden Reifeindikator',
    text: 'Stufen Sie jedes Stadium von 0 bis 8 ein. Niedrigere Stadien stehen für eine frühe Entwicklung, mittlere für die adoleszente Reifung und höhere für reife oder nahezu reife Befunde.',
  },
  {
    name: 'Betrachten Sie das Intervall, nicht nur das zentrale Alter',
    text: 'Verwenden Sie die Mindest-, Wahrscheinlichkeits- und Höchstalterswerte gemeinsam. Die forensische Altersschätzung muss als Intervall ausgedrückt werden, da die biologische Entwicklung individuell stark variiert.',
  },
  {
    name: 'Prüfen Sie Diskrepanzen zwischen den Indikatoren',
    text: 'Sollten zahnärztliche, skelettale und Weisheitszahn-Stadien auf unterschiedliche Altersbereiche hinweisen, behandeln Sie das Ergebnis als explorativ und ziehen Sie weitere Beweise heran, bevor Sie Schlussfolgerungen treffen.',
  },
];

const faq = [
  {
    question: 'Kann dieser forensische Altersschätzer die rechtliche Volljährigkeit bestimmen?',
    answer: 'Nein. Dies ist ein Screening-Rechner für Bildungs- und Triagezwecke. Die rechtliche Altersbestimmung erfordert validierte lokale Protokolle, qualifizierte Sachverständige, eine sorgfältige Identitätsdokumentation und die Einhaltung gerichtsspezifischer Standards.',
  },
  {
    question: 'Warum zeigt das Ergebnis ein Altersintervall an?',
    answer: 'Zahndurchbruch, Skelettfusion und Weisheitszahnentwicklung variieren je nach Abstammung, Ernährung, Gesundheitszustand, Geschlecht, Referenzpopulation und Bildgebungsmethode. Ein Intervall ist wesentlich präziser und ehrlicher als ein einzelnes exaktes Alter.',
  },
  {
    question: 'Was bedeutet gemischte Evidenz?',
    answer: 'Gemischte Evidenz gleicht Zahnentwicklung, Skelettreife und Weisheitszahnstadium aus. Verwenden Sie diesen Modus, wenn kein einzelner Indikator für den Fall eindeutig zuverlässiger ist.',
  },
  {
    question: 'Sind Weisheitszähne in jedem Fall zuverlässig?',
    answer: 'Weisheitszähne sind in der späten Adoleszenz und im jungen Erwachsenenalter nützlich, weisen aber eine hohe Variabilität auf. Agenesie, Pathologien, Populationsunterschiede und die radiografische Bildqualität können ihren forensischen Wert einschränken.',
  },
  {
    question: 'Sollte dieses Tool bei echten Fällen verwendet werden?',
    answer: 'Nur als vorläufige Orientierungshilfe. Bei echten Fällen müssen validierte Methoden, kalibrierte Referenzdaten, eine unabhängige Überprüfung sowie eine transparente Dokumentation der Unsicherheiten und Einschränkungen erfolgen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Forensische Falltafel',
    controls: 'Forensische Alterskontrollen',
    results: 'Forensische Altersergebnisse',
    maturityProfile: 'Dynamisches Reifeprofil',
    screeningOnly: 'Screening-Schätzung',
    evidenceType: 'Beweisschwerpunkt',
    mixedEvidence: 'Gemischte Evidenz',
    dentalPriority: 'Zahnärztliche Priorität',
    skeletalPriority: 'Skelettale Priorität',
    dentalStage: 'Zahnentwicklungsstadium',
    epiphysealStage: 'Epiphysenfugenstadium',
    thirdMolarStage: 'Weisheitszahnstadium',
    minimumAge: 'Minimum',
    likelyAge: 'Wahrscheinlich',
    maximumAge: 'Maximum',
    maturityScore: 'Reifepunktzahl',
    stageLabel: 'Stadium',
    ageUnit: 'Jahre',
    dentalShort: 'Zahn',
    boneShort: 'Knochen',
    molarShort: 'Molar',
    dentalStageHelp: 'Kronen-, Wurzel- und Apexbildung.',
    epiphysealStageHelp: 'Wachstumsfugenschluss und Skelettfusion.',
    molarStageHelp: 'Weisheitszahn-Mineralisation und Apexschluss.',
    dentalStage0: 'Fehlend',
    dentalStage1: 'Höcker',
    dentalStage2: 'Krone',
    dentalStage3: 'Wurzelbeginn',
    dentalStage4: 'Wurzelhälfte',
    dentalStage5: 'Wurzel lang',
    dentalStage6: 'Apex eng',
    dentalStage7: 'Apex schließt',
    dentalStage8: 'Vollständig',
    epiphysealStage0: 'Offen',
    epiphysealStage1: 'Rand',
    epiphysealStage2: 'Verengung',
    epiphysealStage3: 'Brücke',
    epiphysealStage4: 'Halb fusioniert',
    epiphysealStage5: 'Größtenteils fusioniert',
    epiphysealStage6: 'Nur Linie',
    epiphysealStage7: 'Fast geschlossen',
    epiphysealStage8: 'Geschlossen',
    molarStage0: 'Fehlend',
    molarStage1: 'Höcker',
    molarStage2: 'Kronenbeginn',
    molarStage3: 'Krone vollständig',
    molarStage4: 'Wurzelbeginn',
    molarStage5: 'Wurzelhälfte',
    molarStage6: 'Wurzel lang',
    molarStage7: 'Apex schließt',
    molarStage8: 'Vollständig',
    confidenceexploratory: 'Explorativ',
    confidencemoderate: 'Moderat',
    confidencestrong: 'Stark',
    noteTriage: 'Als Triage-Schätzung verwenden, nicht als rechtliche Altersbestimmung.',
    noteFinalAssessment: 'Die endgültige forensische Altersbeurteilung sollte Radiologie, zahnärztliche Untersuchung, Anamnese und gerichtsspezifische Standards kombinieren.',
    noteWideInterval: 'Die Indikatoren weichen um mehr als vier Jahre voneinander ab, daher wurde das Intervall erweitert.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensischer Altersschätzer: Zahn-, Skelett- und Weisheitszahn-Screening-Rechner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie diesen forensischen Altersschätzer für eine schnelle und transparente Organisation biologischer Reifebelege vor einer formellen Beurteilung. Der Rechner kombiniert Zahnentwicklung, Epiphysenfusion und das Weisheitszahnstadium zu einem geschätzten Altersintervall. Er adressiert Suchanfragen wie <strong>forensischer Altersschätzungsrechner</strong>, <strong>Zahnaltersbestimmung</strong>, <strong>Skelettreife-Altersschätzung</strong> und <strong>Weisheitszahn-Altersschätzung</strong>: Benutzer erfahren, was die Indikatoren bedeuten, wie sie kombiniert werden und wie mit Unsicherheiten umzugehen ist.',
    },
    {
      type: 'paragraph',
      html: 'Das Ergebnis wird explizit als <strong>Mindestalter, wahrscheinliches Alter und Höchstalter</strong> dargestellt. Ein einzelnes exaktes Alter wäre irreführend, da die biologische Entwicklung interindividuell variiert. Faktoren wie Ernährung, Gesundheit, Abstammung, Geschlecht, Referenzpopulation, Bildqualität, Pathologien und Beobachterunterschiede beeinflussen die Interpretation. Behandeln Sie den Rechner als strukturierte Screening-Hilfe, nicht als rechtliche Schlussfolgerung.',
    },
    {
      type: 'title',
      text: 'Bedeutung der drei Reifeindikatoren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die drei Schieberegler repräsentieren allgemeine Entwicklungsstadien von 0 bis 8. Stadium 0 signalisiert eine sehr frühe oder fehlende Reife; Stadium 8 eine vollständige oder nahezu vollständige Reife. Die Stadien sind nicht an eine einzelne klinische Methode gebunden, sondern bieten eine praktische Abstraktion für einen direkten Vergleich der Indikatoren innerhalb einer Intervallschätzung.',
    },
    {
      type: 'table',
      headers: ['Indikator', 'Repräsentation', 'Nützlichkeit', 'Wichtige Vorsicht'],
      rows: [
        ['Zahnentwicklung', 'Bildung, Durchbruch und Reife der Zähne (exkl. Weisheitszähne).', 'Altersschätzung bei Kindern und Jugendlichen anhand der Zahnreife.', 'Zahnerkrankungen, fehlende Zähne, Restaurationen und populationsspezifische Unterschiede können die Interpretation verzerren.'],
        ['Epiphysenfusion', 'Progressiver Verschluss der Wachstumsfugen im Skelett.', 'Altersschätzung bei Jugendlichen oder jungen Erwachsenen anhand der Skelettreife.', 'Der Fusionszeitpunkt variiert je nach beobachtetem Knochen, Geschlecht, endokriner Gesundheit und Bildgebungsverfahren.'],
        ['Weisheitszahnstadium', 'Entwicklung und Reifung der Weisheitszähne.', 'Beurteilung des Alters im späten Jugend- oder jungen Erwachsenenalter, wenn andere Zähne bereits reif sind.', 'Hohe Variabilität; Agenesie, Extraktion, Retention und Bildqualität sind kritische Faktoren.'],
      ],
    },
    {
      type: 'title',
      text: 'Interpretation des Altersintervalls',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Betrachten Sie alle drei Werte gemeinsam. Das <strong>wahrscheinliche Alter</strong> ist die gewichtete zentrale Schätzung basierend auf dem gewählten Beweisschwerpunkt. Die <strong>Mindest-</strong> und <strong>Höchstwerte</strong> definieren den praktischen Unsicherheitsbereich. Bei Übereinstimmung der Indikatoren wird das Band enger; bei widersprüchlichen Signalen aus Zahn-, Skelett- und Weisheitszahn-Befunden erweitert sich das Band und der Konfidenzgrad sinkt.',
    },
    {
      type: 'table',
      headers: ['Ergebnismuster', 'Interpretation', 'Empfohlener nächster Schritt'],
      rows: [
        ['Enges Intervall, hohe Konfidenz', 'Indikatoren stimmen überein und weisen auf eine ähnliche Entwicklungsphase hin.', 'Quellindikatoren dokumentieren und prüfen, ob eine formal validierte Methode erforderlich ist.'],
        ['Moderates Intervall', 'Diskrepanzen vorhanden oder der Beweisschwerpunkt beeinflusst das zentrale Alter.', 'Bildqualität und Stadienzuweisung prüfen; gegebenenfalls Priorisierung zwischen Zahn- und Skelettbefunden abwägen.'],
        ['Weites exploratives Intervall', 'Reifeindikatoren widersprechen sich oder deuten auf unterschiedliche Entwicklungsperioden hin.', 'Nicht allein auf die Schätzung verlassen; weitere Unterlagen, zusätzliche Bildgebung oder fachärztliche Prüfung einholen.'],
      ],
    },
    {
      type: 'title',
      text: 'Wahl des Evidenzmodus (Zahn-, Skelett- oder gemischt)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Gemischte Evidenz</strong> ist der Standardmodus für allgemeines Screening, da sie alle Indikatoren ausbalanciert. Wählen Sie <strong>zahnärztliche Priorität</strong> bei vollständigen und gut dokumentierten Zahnbefunden. Wählen Sie <strong>Skelettpriorität</strong>, wenn radiografische Skelettbefunde die stärkste Datenbasis bilden. Der Modus wertet schwache Beweise nicht auf, er gewichtet lediglich die verfügbaren Indikatoren entsprechend.',
    },
    {
      type: 'list',
      items: [
        '<strong>Zahnärztliche Priorität:</strong> wenn Zahnentwicklung klar eingestuft und Weisheitszahn-Daten verfügbar sind.',
        '<strong>Skelettpriorität:</strong> wenn die Epiphysenfusion das am besten dokumentierte Reifesignal darstellt.',
        '<strong>Gemischte Evidenz:</strong> für eine erste ausgewogene Übersicht.',
        '<strong>Konfidenzmarkierung:</strong> nutzen, um Diskrepanzen zu erkennen, bevor eine Überinterpretation erfolgt.',
      ],
    },
    {
      type: 'title',
      text: 'Forensische Altersschätzung ist kein Identitätsnachweis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine Altersschätzung kann eine Fallakte stützen, ersetzt jedoch keine dokumentarische Identitätsprüfung. In Kontexten wie Migration, Schutzbedarf, Strafrecht oder Vermisstenfällen muss die Beurteilung multidisziplinär erfolgen. Ein verantwortungsvoller Bericht muss Methode, Referenzpopulation, Bildquelle, Qualifikation des Beobachters sowie Konfidenzintervalle und Limitationen explizit ausweisen.',
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool dient primär der <strong>Bildung, Triage, Protokollplanung und transparenten Kommunikation</strong>. Es verdeutlicht, warum Altersschlussfolgerungen vorsichtig zu ziehen sind und warum rechtlich relevante Schwellenwerte (wie das 18. Lebensjahr) niemals allein auf Basis eines vereinfachten Rechners entschieden werden dürfen.',
    },
    {
      type: 'title',
      text: 'Checkliste für den forensischen Bericht',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Beweisquelle bestätigen:</strong> Dokumentieren Sie, ob die Stadien aus Zahn- oder Röntgenaufnahmen (Panoramaröntgen, Hand-Handgelenk, Schlüsselbein etc.) stammen.',
        '<strong>Fehlende/schwache Daten vermerken:</strong> Fehlende Weisheitszähne, schlechte Bildqualität oder Anomalien müssen im Bericht klar benannt werden.',
        '<strong>Validierte Methoden nutzen:</strong> Nutzen Sie für rechtliche Entscheidungen spezifisch validierte Zahn- oder Skelettmethoden.',
        '<strong>Unsicherheit klar kommunizieren:</strong> Geben Sie Spannen an und vermeiden Sie sprachliche Formulierungen, die ein exaktes chronologisches Alter suggerieren.',
        '<strong>Fachärztliche Überprüfung:</strong> Hochrisikofälle sollten zwingend durch qualifizierte forensische Odontologen, Radiologen oder Anthropologen geprüft werden.',
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