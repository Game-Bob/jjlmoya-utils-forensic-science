import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensische-geschlechtsbestimmung-anthropologische-morphologieanalyse';
const title = 'Forensischer Anthropologischer Geschlechtsbestimmer';
const description = 'Schätzen Sie das biologische Geschlecht anhand der Schädel- und Beckenmorphologie mithilfe eines bayesianischen Wahrscheinlichkeitsmodells.';

const howTo = [
  {
    name: 'Wählen Sie die zu analysierende anatomische Region',
    text: 'Entscheiden Sie, ob Sie das Becken, den Schädel oder beides analysieren möchten. Die Bewertung beider Bereiche erhöht die Genauigkeit und Zuverlässigkeit der endgültigen biologischen Geschlechtsbestimmung.',
  },
  {
    name: 'Bewerten Sie jedes morphologische Merkmal',
    text: 'Untersuchen Sie die Knochenpräparate und bewerten Sie die Schlüsselindikatoren auf einer Skala von 1 (hyperfeminin) bis 5 (hypermaskulin) basierend auf visuellen Anhaltspunkten.',
  },
  {
    name: 'Geben Sie die Werte in die Bayes-Engine ein',
    text: 'Verwenden Sie die Dropdown-Auswahllisten, um die Bewertung für jedes Merkmal einzugeben. Der Klassifikator aktualisiert automatisch die A-posteriori-Wahrscheinlichkeit für männliche und weibliche Kategorien.',
  },
  {
    name: 'Interpretieren Sie die Wahrscheinlichkeitsergebnisse',
    text: 'Überprüfen Sie den endgültigen Konfidenzindikator, die vorherrschende Geschlechtsklassifizierung und lesen Sie die forensischen Diagnosehinweise, um die biologischen Variationen zu verstehen.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Was ist die Phenice-Methode bei der Beckengeschlechtsbestimmung?',
    answer: 'Die 1969 von T. W. Phenice veröffentlichte Phenice-Methode konzentriert sich auf drei spezifische Beckenmerkmale: den ventralen Bogen, die subpubische Konkavität und den medialen Aspekt des Ramus ischiopubicus. Sie bleibt eine der zuverlässigsten morphologischen Methoden in der forensischen Anthropologie mit Genauigkeitsraten von über 95 Prozent bei gut erhaltenen Skelettresten.',
  },
  {
    key: 'faq-2',
    question: 'Warum wird das Becken gegenüber dem Schädel für die Geschlechtsschätzung bevorzugt?',
    answer: 'Das Becken ist der am stärksten geschlechtsdimorphe Teil des menschlichen Skeletts, da es die funktionelle Anpassung an die Geburt bei Frauen widerspiegelt. Der evolutionäre Druck hat das weibliche Becken so geformt, dass es breiter, flacher und mit größeren Winkeln als das männliche Becken ausgestattet ist, während der Schädeldimorphismus hauptsächlich mit der allgemeinen Körpergröße und Muskelentwicklung zusammenhängt.',
  },
  {
    key: 'faq-3',
    question: 'Wie schätzt der Bayes-Klassifikator die Geschlechtwahrscheinlichkeit?',
    answer: 'Unser Klassifikator verwendet ein bayesianisches Aktualisierungsmodell. Es nimmt eine A-priori-Wahrscheinlichkeit von 50 Prozent für beide Geschlechter an. Für jeden bewerteten anatomischen Marker multipliziert das Modell die A-priori-Wahrscheinlichkeit mit der Wahrscheinlichkeit, diesen spezifischen Wert in männlichen versus weiblichen Populationen zu erhalten. Die resultierenden Werte werden normalisiert, um eine A-posteriori-Wahrscheinlichkeitsverteilung zu erzeugen.',
  },
  {
    key: 'faq-4',
    question: 'Was bedeutet ein Wert von 3 in der morphologischen Analyse?',
    answer: 'Ein Wert von 3 stellt eine unbestimmte oder neutrale Morphologie dar. Dies weist darauf hin, dass das Merkmal Eigenschaften aufweist, die in der Mitte des Spektrums des menschlichen Sexualdimorphismus liegen und weder typisch weibliche noch typisch männliche Merkmale zeigen.',
  },
  {
    key: 'faq-5',
    question: 'Kann dieses Modell das Geschlecht von Skelettresten von Kindern bestimmen?',
    answer: 'Nein. Die morphologische Geschlechtsbestimmung ist bei Skelettresten von Kindern und Jugendlichen vor der Pubertät äußerst unzuverlässig, da sich die morphologischen Merkmale erst während der Pubertät vollständig ausprägen. Forensische Anthropologen verlassen sich in solchen Fällen auf genetische Tests oder dentale Indikatoren.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Beckenmorphologie',
    craniumRegion: 'Schädelmorphologie',
    subpubicAngle: 'Subpubischer Winkel',
    subpubicAngleDesc: 'Der unter der Schambeinfuge gebildete Winkel.',
    subpubicAngleFem: 'Breiter U-Winkel (>90°)',
    subpubicAngleMasc: 'Enger V-Winkel (<70°)',
    sciaticNotch: 'Große Beckeneinschnitte',
    sciaticNotchDesc: 'Der größere sciatic Einschnitt im hinteren Ilium.',
    sciaticNotchFem: 'Breiter, flacher U-Einschnitt',
    sciaticNotchMasc: 'Enger, tiefer Einschnitt',
    ventralArc: 'Ventraler Bogen',
    ventralArcDesc: 'Knochenkamm auf dem vorderen Schambein.',
    ventralArcFem: 'Ausgeprägter erhöhter Kamm',
    ventralArcMasc: 'Fehlende oder schwache Linie',
    preauricularSulcus: 'Sulcus preauricularis',
    preauricularSulcusDesc: 'Furche neben dem Iliosakralgelenk.',
    preauricularSulcusFem: 'Tiefe, grubige Furche',
    preauricularSulcusMasc: 'Fehlend oder glatt',
    mastoidProcess: 'Processus mastoideus',
    mastoidProcessDesc: 'Knochenvorsprung hinter dem Gehörgang.',
    mastoidProcessFem: 'Kleiner, kurzer Vorsprung',
    mastoidProcessMasc: 'Großer, langer Vorsprung',
    supraorbitalRidge: 'Supraorbitalwulst',
    supraorbitalRidgeDesc: 'Vorsprung des Augenbrauenbogens (Glabella).',
    supraorbitalRidgeFem: 'Glatte, flache Stirn',
    supraorbitalRidgeMasc: 'Ausgeprägter Augenbrauenwulst',
    mentalEminence: 'Kinnvorsprung',
    mentalEminenceDesc: 'Form und Prominenz des Kinns.',
    mentalEminenceFem: 'Rundes, spitzes Kinn',
    mentalEminenceMasc: 'Breites, quadratisches Kinn',
    nuchalCrest: 'Crista nuchae',
    nuchalCrestDesc: 'Knochenkämme an der Schädelrückseite.',
    nuchalCrestFem: 'Glatte Hinterhauptsfläche',
    nuchalCrestMasc: 'Rauher, hakenförmiger Sporn',
    selectOption: 'Wert wählen...',
    score1: '1 - Hyperfeminin',
    score2: '2 - Feminin',
    score3: '3 - Unbestimmt',
    score4: '4 - Maskulin',
    score5: '5 - Hypermaskulin',
    notEvaluated: 'Nicht bewertet',
    resultsTitle: 'Ergebnisse der Geschlechtsbestimmung',
    femaleProbLabel: 'Wahrscheinlichkeit Weiblich',
    maleProbLabel: 'Wahrscheinlichkeit Männlich',
    predominantLabel: 'Vorherrschende Klassifizierung',
    confidenceLabel: 'Schätzkonfidenz',
    weakConf: 'Schwach (Wenige Indikatoren bewertet)',
    moderateConf: 'Moderat',
    strongConf: 'Stark',
    femaleClass: 'Weiblich',
    maleClass: 'Männlich',
    indeterminateClass: 'Unbestimmt',
    noteNoData: 'Bitte bewerten Sie mindestens einen anatomischen Marker, um die Berechnungen zu starten.',
    noteTriageOnly: 'Dies ist eine pädagogische Screening-Hilfe. Eine formelle forensische Bewertung erfordert metrische Analysen und Gutachten.',
    noteBayesianEst: 'Die Wahrscheinlichkeiten werden dynamisch anhand einer nicht-parametrischen Bayes-Likelihood-Matrix berechnet.',
    pelvicTitle: 'Becken-Referenzhandbuch',
    cranialTitle: 'Schädel-Referenzhandbuch',
    pelvisDesc: 'Das weibliche Becken ist an die Geburt angepasst, was zu breiteren Strukturen und flacheren Winkeln führt. Das männliche Becken ist robuster, enger und vertikal orientierter.',
    cranialDesc: 'Der männliche Schädel ist im Allgemeinen größer und robuster, mit größeren Processus mastoidei, ausgeprägten Augenbrauenbögen und rauen Muskelansätzen. Der weibliche Schädel ist graziler mit glatteren Rändern und einem abgerundeten Kinn.',
  },
  seo: [
    {
      type: 'title',
      text: 'Einführung in die osteologische Geschlechtsbestimmung in der forensischen Anthropologie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Schätzung des biologischen Geschlechts ist einer der wichtigsten Schritte bei der Erstellung eines biologischen Profils für unbekannte Skelettreste in der forensischen Anthropologie, Toxikologie und Archäologie. Zusammen mit der Körpergröße, dem Sterbealter und der Abstammung hilft die Geschlechtsschätzung dabei, den Kreis potenzieller vermisster Personen einzugrenzen. Menschliche Skelette weisen einen ausgeprägten Sexualdimorphismus auf, d. h. körperliche Unterschiede zwischen Männchen und Weibchen einer Art. Dieser Dimorphismus spiegelt sich sowohl in der Größe (Robustheit versus Grazilität) als auch in der Form (insbesondere Beckenanpassungen für die Geburt) wider.',
    },
    {
      type: 'paragraph',
      html: 'Dieses interaktive Werkzeug ermöglicht es Studenten der Forensik, Gerichtsmedizinern und Auszubildenden, morphologische Merkmale des Beckens und des Schädels zu bewerten. Durch die Eingabe von Werten basierend auf visuellen Anhaltspunkten können Benutzer beobachten, wie einzelne Knochenmarker zu einem kumulativen statistischen Modell beitragen.',
    },
    {
      type: 'title',
      text: 'Beckendimorphismus und die Phenice-Methode',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Becken gilt allgemein als die genaueste Region des Skeletts zur Bestimmung des biologischen Geschlechts. Weibliche Becken sind breiter, haben einen größeren Geburtskanal, eine breitere Incisura ischiadica major und einen subpubischen Winkel von über neunzig Grad. Umgekehrt sind männliche Becken durch schmale, V-förmige subpubische Winkel und eine schmale Incisura ischiadica major gekennzeichnet. Die Phenice-Methode konzentriert sich auf drei spezifische Merkmale des Schambeins: den ventralen Bogen, die subpubische Konkavität und den medialen Aspekt des Ramus ischiopubicus. Das Vorhandensein eines gut definierten ventralen Bogens ist ein außergewöhnlich starker Indikator für das weibliche Geschlecht, während sein Fehlen bei Männern typisch ist.',
    },
    {
      type: 'title',
      text: 'Schädeldimorphismus und Robustheitsmarker',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Beckenknochen fehlen oder schlecht erhalten sind, dient der Schädel als primäre Alternative für die Geschlechtsschätzung. Die Schädelbewertung basiert auf der Robustheit, da männliche Schädel aufgrund hormonell bedingter Entwicklungsunterschiede im Allgemeinen ausgeprägtere Muskelansatzstellen und größere Knochenfortsätze aufweisen. Der Processus mastoideus hinter dem Ohr ist bei Männern größer und breiter. Die Glabella und der Supraorbitalwulst sind bei Männern prominent und vorspringend, während sie bei Frauen glatt und vertikal verlaufen. Das Kinn (Protuberantia mentalis) neigt bei Männern dazu, quadratisch und breit zu sein, während Frauen eine rundere, spitzere Kinnstruktur aufweisen.',
    },
    {
      type: 'table',
      headers: ['Anatomisches Merkmal', 'Weibliche Merkmale (Werte 1-2)', 'Männliche Merkmale (Werte 4-5)', 'Forensischer Wert'],
      rows: [
        ['Subpubischer Winkel', 'Breiter, stumpfer Winkel (oft über 90 Grad).', 'Enger, spitzer Winkel (typischerweise unter 70 Grad).', 'Höchster diagnostischer Wert für Beckengeschlechtsbestimmung.'],
        ['Incisura ischiadica major', 'Breiter, flacher Ausschnitt, U-förmig.', 'Enger, tiefer Ausschnitt, daumenartig.', 'Äußerst haltbarer Marker, der oft in fragmentierten Überresten erhalten bleibt.'],
        ['Processus mastoideus', 'Klein, kurz und ragt minimal unter den Gehörgang heraus.', 'Groß, lang und ragt deutlich nach unten heraus.', 'Zuverlässiger Schädelmarker, widerstandsfähig gegen Verwitterung.'],
        ['Supraorbitalwulst', 'Glatte, flache Glabella mit vertikalem Stirnprofil.', 'Prominenter, vorspringender Wulst mit geneigter Stirn.', 'Unterscheidet robuste männliche von grazileren weiblichen Schädeln.'],
      ],
    },
    {
      type: 'title',
      text: 'Mathematische Bayes-Modellierung in der morphologischen Klassifikation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Traditionelle forensische Bewertungen beruhten auf subjektiven Klassifikationen, was zu Beobachterfehlern führen konnte. Die moderne forensische Anthropologie nutzt statistische Wahrscheinlichkeitsmodelle, um Unsicherheiten zu quantifizieren. Die Bayes-Statistik ist für diesen Zweck ideal. Sie beginnt mit einer gleichen A-priori-Wahrscheinlichkeit (50 Prozent männlich, 50 Prozent weiblich) und aktualisiert diese, sobald neue Beweise vorliegen. Wenn Beckenmerkmale eine stark weibliche Morphologie aufweisen (breiter subpubischer Winkel, Wert 1), steigt die Wahrscheinlichkeit der weiblichen Klassifizierung und überstimmt intermediäre oder widersprüchliche Marker am Schädel.',
    },
    {
      type: 'paragraph',
      html: 'Dieser digitale Simulator implementiert eine nicht-parametrische Bayes-Engine. Die Berechnungen liefern einen Wahrscheinlichkeitsprozentsatz anstelle einer starren binären Ausgabe. Dies entspricht modernen forensischen Richtlinien, die die Angabe von Konfidenzintervallen und Fehlerraten bei Gerichtsaussagen fordern. Die Zuverlässigkeit der Klassifizierung hängt von der Anzahl der bewerteten Merkmale ab, wobei Bewertungen aus Becken- und Schädelregionen die robustesten Ergebnisse liefern.',
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
