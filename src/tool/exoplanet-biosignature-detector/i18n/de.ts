import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'exoplaneten-biosignatur-detektor';
const title = 'Exoplaneten Biosignatur Detektor';
const description = 'Richten Sie Absorptionslinien von Sauerstoff, Methan und Ozon in einem simulierten Transmissionsspektrum eines Exoplaneten aus. Bewerten Sie die biologische Habitabilität, mögliche Technosignatur-Kontamination sowie das Risiko falsch-positiver Befunde anhand spektraler Indikatoren.';

const howTo = [
  {
    name: 'Wählen Sie den Zentralstern',
    text: 'Wählen Sie einen K-Zwerg, einen sonnenähnlichen Stern oder einen M-Zwerg. Der Sterntyp beeinflusst das Risiko falsch-positiver Ergebnisse maßgeblich, da UV-Strahlung, Flares und atmosphärische Photochemie die Interpretation von Sauerstoff und Ozon verändern.',
  },
  {
    name: 'Richten Sie die Spektrallinien aus',
    text: 'Verschieben Sie die Regler für Sauerstoff, Methan und Ozon, bis die beobachteten Absorptionsmarker mit den Referenzbanden im simulierten Spektrum übereinstimmen.',
  },
  {
    name: 'Stellen Sie Rauschen und atmosphärischen Kontext ein',
    text: 'Erhöhen Sie das Instrumentenrauschen, um die Konfidenz des Signals zu prüfen. Passen Sie Wasserdampf und Kohlendioxid an, um eine feuchtere, trockenere, dichtere oder photochemisch komplexere Atmosphäre zu simulieren.',
  },
  {
    name: 'Lesen Sie die Habitabilitätsindizes ab',
    text: 'Vergleichen Sie die biologischen, technologischen und habitablen Bewertungen. Ein belastbares Ergebnis erfordert mehrere Gase im Ungleichgewicht, anstatt nur eine einzelne isolierte Linie.',
  },
];

const faq = [
  {
    question: 'Was ist eine Biosignatur in der Exoplaneten-Spektroskopie?',
    answer: 'Eine Biosignatur ist ein aus der Ferne nachweisbares Merkmal, das auf biologische Prozesse hindeuten könnte. In atmosphärischen Spektren zählen Sauerstoff, Ozon, Methan, Wasserdampf sowie Kombinationen von Gasen, die eigentlich chemisch miteinander reagieren sollten, zu den wichtigsten Kandidaten, sofern ein Prozess ihr Niveau in der Atmosphäre konstant hält.',
  },
  {
    question: 'Warum ist die Kombination aus Sauerstoff und Methan so bedeutsam?',
    answer: 'Sauerstoff und Methan reagieren chemisch miteinander. Sind beide in nennenswerten Mengen vorhanden, deutet dies auf ein chemisches Ungleichgewicht hin, ein weitaus stärkerer Hinweis auf Leben als das Vorhandensein eines einzelnen Gases. Der Simulator gewichtet dieses Paar daher besonders stark.',
  },
  {
    question: 'Kann Sauerstoff ein falsch-positives Signal sein?',
    answer: 'Ja. Sauerstoff kann auch abiotisch entstehen, etwa durch Wasserverlust, Photolyse, schwache vulkanische Senken oder ungewöhnliche stellare UV-Umgebungen. Deshalb bewertet das Tool das Risiko falsch-positiver Ergebnisse, anstatt Sauerstoff isoliert als Beweis für Leben zu werten.',
  },
  {
    question: 'Warum wird Ozon getrennt von Sauerstoff aufgeführt?',
    answer: 'Ozon entsteht photochemisch aus Sauerstoff und besitzt sehr markante spektrale Merkmale. Es kann als indirekter Indikator für Sauerstoff dienen, besonders wenn direkte Sauerstoffbanden schwer zu beobachten sind. Auch hier ist die Einordnung in den atmosphärischen Kontext entscheidend.',
  },
  {
    question: 'Was bedeutet der technologische Index?',
    answer: 'Der technologische Index ist ein spekulativer Warnwert. Er weist auf Fälle hin, in denen ein Spektrum so energiereich, verrauscht oder chemisch ungewöhnlich wirkt, dass eine künstliche Quelle nicht kategorisch ausgeschlossen werden sollte. Es handelt sich explizit nicht um einen Detektionsnachweis.',
  },
  {
    question: 'Handelt es sich um ein echtes Exoplaneten-Retrieval-Modell?',
    answer: 'Nein. Dies ist ein edukativer Simulator, der zentrale spektroskopische Konzepte in ein interaktives Bewertungsmodell überführt. Echte wissenschaftliche Retrievals nutzen komplexe Strahlungstransport-Modelle, Stellar-Kontamination-Korrekturen, Wolkenmodelle und Bayessche Inferenz.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Exoplaneten-Transmissionsspektrum-Visualisierung',
    starClass: 'Zentralstern',
    starK: 'Ruhiger K-Zwerg',
    starSun: 'Sonnenähnlicher G-Stern',
    starM: 'Aktiver M-Zwerg',
    noise: 'Instrumentenrauschen',
    oxygenLine: 'Sauerstoff-Marker',
    methaneLine: 'Methan-Marker',
    ozoneLine: 'Ozon-Marker',
    waterVapor: 'Wasserdampf-Kontext',
    carbonDioxide: 'CO2-Kontext',
    habitabilityIndex: 'Habitabilitätsindex',
    biologicalIndex: 'Biologisch',
    technologicalIndex: 'Technologisch',
    falsePositiveRisk: 'Falsch-positiv-Risiko',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Fazit',
    dataLive: 'Datensynthese aktiv',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Richten Sie die Spektralmarker aus, um die atmosphärischen Hinweise zu bewerten.',
    verdictWeak: 'Das Spektrum ist schwach: Die Linien stützen noch keine lebensfreundliche Interpretation.',
    verdictPromising: 'Das Spektrum ist vielversprechend: Mehrere Biosignatur-Marker sind teilweise ausgerichtet.',
    verdictStrong: 'Das Spektrum ist stark: Sauerstoff, Methan und Ozon bilden ein kohärentes Ungleichgewichts-Signal.',
    verdictAmbiguous: 'Das Signal ist interessant, aber mehrdeutig: Stellare oder atmosphärische Fehlalarme bleiben wahrscheinlich.',
  },
  seo: [
    {
      type: 'title',
      text: 'Exoplaneten Biosignatur Detektor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Exoplaneten-Biosignatur-Detektor ist ein interaktiver Spektroskopie-Simulator, der erkundet, wie lebensrelevante Gase im Licht erscheinen könnten, das durch eine ferne Atmosphäre fällt. Statt ein einzelnes Molekül als Ja-oder-Nein-Antwort zu behandeln, fordert das Tool Sie auf, Sauerstoff-, Methan- und Ozon-Absorptionsmerkmale auszurichten und das Ergebnis gegen Rauschen, Wasserdampf, Kohlendioxid sowie das Verhalten des Zentralsterns abzuwägen.',
    },
    {
      type: 'paragraph',
      html: 'Darin liegt die zentrale Schwierigkeit der Biosignatur-Forschung: Sauerstoff kann spannend sein, Methan kann spannend sein, Ozon kann spannend sein, doch keines ist für sich genommen ein Beweis. Die überzeugendsten Fälle kombinieren mehrere Gase, den physikalischen Kontext und eine sorgfältige Prüfung auf nicht-biologische Erklärungen. Der Simulator macht diese Abwägungen in einer kompakten, laborähnlichen Oberfläche sichtbar.',
    },
    {
      type: 'title',
      text: 'Wie Transmissionsspektroskopie atmosphärische Gase sichtbar macht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn ein Planet vor seinem Stern vorbeizieht, gelangt ein winziger Teil des Sternenlichts durch die Atmosphäre des Planeten, bevor es das Teleskop erreicht. Moleküle absorbieren bestimmte Wellenlängen und hinterlassen schmale oder breite Einbrüche im gemessenen Spektrum. Durch den Vergleich dieser Einbrüche mit Labormessungen können Astronomen ableiten, welche Gase vorhanden sein könnten, wenngleich Wolken, Dunst, Temperatur, Sternenflecken und instrumentelles Rauschen die Analyse erschweren.',
    },
    {
      type: 'title',
      text: 'Sauerstoff, Methan und Ozon als kombiniertes Signal',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sauerstoff O2:</strong> Auf der Erde wird reichlich Sauerstoff durch Fotosynthese erzeugt. Abiotischer Sauerstoff kann sich jedoch unter bestimmten planetaren Bedingungen ansammeln.',
        '<strong>Methan CH4:</strong> Methan kann biologischen, geologischen oder Einschlag-Ursprungs sein. Es wird aussagekräftiger, wenn es zusammen mit oxidierenden Gasen auftritt.',
        '<strong>Ozon O3:</strong> Ozon ist ein photochemisches Produkt von Sauerstoff und in manchen Spektralbereichen leichter nachweisbar, bleibt aber ein indirekter Hinweis.',
        '<strong>Wasser- und CO2-Kontext:</strong> Wasser unterstützt die Habitabilität, während Kohlendioxid hilft, den Treibhauseffekt, die Photochemie und falsch-positive Szenarien einzuordnen.',
      ],
    },
    {
      type: 'title',
      text: 'Warum falsch-positive Ergebnisse wichtig sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein hoher Sauerstoffwert bedeutet nicht automatisch Biologie. Wasserverlust kann Sauerstoff zurücklassen, stellare Ultraviolett-Strahlung kann Moleküle spalten, und eine geringe vulkanische Produktion reduzierender Gase kann den Sauerstoffgehalt ansteigen lassen. Aktive M-Zwerge sind besonders knifflig, da Flares und Photochemie die atmosphärische Zusammensetzung verändern können. Die Falsch-positiv-Anzeige steigt, wenn Rauschen, Sterntyp oder atmosphärischer Kontext eine biologische Erklärung unsicherer machen.',
    },
    {
      type: 'table',
      headers: ['Signalmuster', 'Interpretation', 'Vorsicht'],
      rows: [
        ['Nur O2', 'Mögliche sauerstoffreiche Atmosphäre', 'Kann abiotisch sein nach Wasserverlust oder ungewöhnlicher Photochemie'],
        ['Nur CH4', 'Mögliche reduzierende Atmosphäre oder aktive Geologie', 'Methan allein ist kein starker Lebenshinweis'],
        ['O2 plus CH4', 'Chemisches Ungleichgewicht, nähere Untersuchung nötig', 'Erfordert robustes Retrieval und Kontaminationsprüfung'],
        ['O2 plus O3 plus Wasser', 'Kohärentere erdähnliche Umgebung', 'Wolken und stellare Aktivität bleiben relevant'],
      ],
    },
    {
      type: 'title',
      text: 'Biologische und technologische Habitabilitätsindizes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der biologische Index betont das chemische Ungleichgewicht, insbesondere Sauerstoff gemeinsam mit Methan, und berücksichtigt dann Ozonschirmwirkung sowie Wasserkontext. Der technologische Index ist bewusst spekulativ gehalten: Er hebt Fälle hervor, in denen die Atmosphäre so energiereich, verrauscht oder chemisch ungewöhnlich wirkt, dass künstliche Verschmutzung, gezielte atmosphärische Veränderung oder Beobachtungsartefakte in Betracht gezogen werden sollten, bevor eine einfache Lebensgeschichte erzählt wird.',
    },
    {
      type: 'paragraph',
      html: 'Nutzen Sie das Tool als Denkhilfe, nicht als Beweisgenerator. Eine echte Biosignatur-Bewertung würde mehrere Atmosphärenmodelle vergleichen, Sternspektren einbeziehen, Teleskopsystematik korrigieren, Wolkenopazität abschätzen und Unsicherheiten berechnen. Der edukative Wert liegt darin, dass es dieselbe Disziplin fordert: Hinweise ausrichten, Kontext prüfen und falsch-positive Ergebnisse im Blick behalten.',
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
