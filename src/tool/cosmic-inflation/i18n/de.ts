import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kosmische-inflation-rechner';
const description = 'Berechnen Sie die exponentielle Ausdehnung des fruehen Universums waehrend der kosmischen Inflationsphase.';
const title = 'Kosmischer Inflationsrechner: Ausdehnung des fruehen Universums';

const howTo = [
  {
    name: 'Werte auswaehlen',
    text: 'Ziehen Sie die Schieberegler, um Ergebnisse anzuzeigen.',
  },
  {
    name: 'Skalenfaktoren vergleichen',
    text: 'Sehen Sie, um wie viele Groessenordnungen sich der Raum ausgedehnt hat.',
  },
  {
    name: 'Dynamische Verzerrung analysieren',
    text: 'Die Leinwand zeigt die Expansion des Raumes.',
  },
];

const faq = [
  {
    "question": "Was ist die kosmische Inflation und warum fand sie statt?",
    "answer": "Die kosmische Inflation ist eine Theorie, die eine ultraschnelle, exponentielle Expansion des Raums in den ersten Sekundenbruchteilen des Universums postuliert, konkret etwa 10^-36 Sekunden nach dem Urknall. Sie trat auf, weil sich ein theoretisches skalares Feld, das Inflaton genannt wird, in einem Zustand hoher Energiedichte eines falschen Vakuums befand, was einen negativen Druck und eine abstoßende Gravitationskraft erzeugte, die das Gefüge der Raumzeit dehnte."
  },
  {
    "question": "Was bedeutet die Anzahl der E-Folds?",
    "answer": "Die Anzahl der E-Folds misst die Dauer der exponentiellen Expansionsphase. Ein E-Fold stellt die Zeit dar, in der sich die Größe des Universums mit der Eulerschen Zahl (ca. 2,718) multipliziert. Wenn das Universum N E-Folds durchläuft, erhöht sich sein Skalenfaktor um einen Faktor von e^N. Standardmäßige kosmologische Modelle erfordern mindestens 50 bis 60 E-Folds, um die Flachheits- und Horizontprobleme zu lösen."
  },
  {
    "question": "Wie löst die Inflation das Horizontproblem?",
    "answer": "Das Horizontproblem fragt, warum extrem weit entfernte Regionen des Universums nahezu identische Temperaturen der kosmischen Mikrowellen-Hintergrundstrahlung aufweisen, obwohl die Lichtgeschwindigkeit es ihnen nicht erlaubt hätte, miteinander zu interagieren, um ein Gleichgewicht zu erreichen. Die Inflation löst dies, indem sie zeigt, dass vor der exponentiellen Expansion das gesamte beobachtbare Universum eine winzige, thermisch homogene Region war, die kausal verbunden war und augenblicklich über den visuellen Horizont hinaus gedehnt wurde."
  },
  {
    "question": "Was ist das Flachheitsproblem und wie wird es gelöst?",
    "answer": "Die Energiedichte des heutigen Universums liegt extrem nahe an der kritischen Dichte, was bedeutet, dass der Raum mit einer minimalen Fehlermarge flach ist. Ohne Inflation wäre jede anfängliche Abweichung von der Flachheit im Laufe der Zeit exponentiell gewachsen, was eine unmögliche Feinabstimmung beim Urknall erfordert hätte. Die Inflation dehnt die räumliche Krümmung so heftig, dass jede anfängliche Krümmung verdünnt wird, ähnlich wie die Oberfläche einer riesigen Kugel lokal perfekt flach erscheint."
  },
  {
    "question": "Was ist der Reheating-Prozess?",
    "answer": "Das Reheating (Wiederaufheizung) ist der thermische Übergang, der das Ende der Inflation markiert. Während der Inflation kühlt das Universum aufgrund der exponentiellen Expansion des Volumens auf Temperaturen nahe dem absoluten Nullpunkt ab. Wenn das Inflatonfeld auf das Minimum seines Potenzials abfällt, wird seine verbleibende Energie durch Quantenwechselwirkungen in Form von Teilchen des Standardmodells in den Raum abgegeben, wodurch der Kosmos mit einem heißen, dichten Plasma gefüllt wird, das die traditionelle Urknallphase einleitet."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kosmischer Inflationsrechner',
    efoldsLabel: 'Anzahl der E-Folds (N)',
    energyLabel: 'Anfaengliche Energieskala (GeV)',
    scaleFactorResult: 'Skalenfaktor-Wachstum',
    reheatingTempResult: 'Geschaetzte Reheating-Temperatur',
    chartTitle: 'Verzerrung des Raum-Zeit-Gewebes',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Chaotisch',
    presetExtreme: 'Extreme Grenzen',
    efoldsTooltip: 'Typische Modelle sagen zwischen 50 und 60 E-Folds voraus.',
    energyTooltip: 'Die GUT-Skala liegt bei etwa 10^16 GeV.',
    scaleFactorTooltip: 'Stellt den gesamten Expansionsfaktor dar.',
    reheatingTooltip: 'Die Temperatur nach dem Ende der Inflation.',
    analogyInsuff: 'Moderate Inflation. Diese Expansion reicht nicht aus.',
    analogyProton: 'Das Universum dehnte sich in Bruchteilen einer Sekunde von der Groesse eines Protons auf die Groesse einer Galaxie aus.',
    analogyObservable: 'Das Universum dehnte sich in 10^-32 Sekunden von einer subatomaren Skala auf eine Groesse aus, die groesser als das beobachtbare Universum ist.',
  },
  seo: [
  {
    "type": "title",
    "text": "KOSMOLOGIE: Theorie der kosmischen Inflation und Raum-Zeit-Expansion",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Die kosmische Inflation ist der grundlegende Pfeiler, der Teilchenphysik und beobachtende Astrophysik verbindet. Diese Anfang der 1980er Jahre von Physikern wie Alan Guth und Andrei Linde vorgeschlagene Theorie besagt, dass das frühe Universum eine Phase exponentieller Expansion durchlief, die von der Energiedichte eines als Inflaton bekannten skalaren Feldes angetrieben wurde. Diese Expansion vergrößerte das Volumen des Universums in einem winzigen Bruchteil einer Sekunde um einen Faktor von mindestens 10^26, wodurch tiefe Paradoxien des klassischen Urknallmodells gelöst wurden und der theoretische Rahmen für die Entstehung kosmischer Strukturen geschaffen wurde."
  },
  {
    "type": "title",
    "text": "Vergleich von Inflationsmodellen und -parametern",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Verschiedene Potenziale für das Inflatonfeld erzeugen unterschiedliche Expansionsraten und Wiederaufheizungstemperaturen. Im Folgenden sind die Merkmale der wichtigsten in diesem Rechner simulierten Modelle aufgeführt:"
  },
  {
    "type": "table",
    "headers": [
      "Inflationsmodell",
      "E-Folds Bereich (N)",
      "Energieskala (GeV)",
      "Physikalisches und dynamisches Ergebnis"
    ],
    "rows": [
      [
        "<strong>Standard Guth</strong>",
        "50 - 60",
        "10^16",
        "Löst Flachheit und Horizont; Inflation endet durch Blasenbildung in einem langsamen Phasenübergang."
      ],
      [
        "<strong>Chaotische Inflation (Linde)</strong>",
        "60 oder mehr",
        "10^16",
        "Das Inflaton rollt sanft ein einfaches parabolisches Potenzial hinab; vermeidet abrupte Phasenübergangsprobleme."
      ],
      [
        "<strong>Extreme Grenzen</strong>",
        "90 oder mehr",
        "10^19 (Planck)",
        "Energien nahe der Quantengravitationsgrenze; massive Dehnung der primordialen Raumzeit."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Lösung klassischer Urknallprobleme",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Vor der Entwicklung der Inflation litt die klassische Urknallkosmologie unter schwerwiegenden theoretischen Inkonsistenzen. Das Horizontproblem, das sich aus der Homogenität des kosmischen Mikrowellenhintergrunds ergibt, und das Flachheitsproblem, das mit der kritischen Dichte des Raums zusammenhängt, deuteten auf die Notwendigkeit extrem unwahrscheinlicher Anfangsbedingungen hin. Die Inflation löst beide Schwierigkeiten auf natürliche Weise, indem sie eine thermisch homogene Mikroregion dehnt und die lokale räumliche Geometrie dynamisch flach macht. Darüber hinaus verdünnt sie die Konzentration magnetischer Monopole, die sich im frühen Universum reichlich hätten bilden müssen."
  },
  {
    "type": "title",
    "text": "Astronomische Beobachtungsdaten des Inflationsmodells",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Die Theorie der kosmischen Inflation ist nicht nur ein elegantes mathematisches Konstrukt; sie verfügt über solide indirekte Beweise, die von Satelliten wie COBE, WMAP und Planck bestätigt wurden:"
  },
  {
    "type": "list",
    "items": [
      "<strong>CMB-Homogenität:</strong> Die kosmische Mikrowellen-Hintergrundstrahlung zeigt eine gleichmäßige Temperatur mit Abweichungen von nur 1 zu 100.000 auf gegenüberliegenden Seiten des sichtbaren Himmels.",
      "<strong>Flache Geometrie:</strong> Messungen der Krümmung des Universums bestätigen, dass es räumlich flach ist mit einer Fehlermarge von weniger als 1%, was mit einer massiven inflationsbedingten Dehnung übereinstimmt.",
      "<strong>Fehlen von Monopolen:</strong> Erklärt logisch das vollständige Fehlen stabiler, hochmassiver magnetischer Monopole in unserem beobachtbaren Universum.",
      "<strong>Fluktuationsspektrum:</strong> Die beobachteten Anisotropien im kosmischen Hintergrund zeigen einen Spektralindex leicht unter 1, genau wie von Slow-Roll-Inflatonmodellen vorhergesagt."
    ]
  },
  {
    "type": "title",
    "text": "Quantenfluktuationen und die Keime der Galaxien",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Der außergewöhnlichste Aspekt der kosmischen Inflation ist ihre Fähigkeit, als kosmisches Mikroskop zu wirken. Mikroskopische Quantenfluktuationen des Inflatonfeldes wurden während der Phase der exponentiellen Expansion auf astronomische Skalen gedehnt. Am Ende der Inflation froren diese Fluktuationen als Dichteschwankungen (primordiale Störungen) ein. Diese Dichteunterschiede dienten als Gravitationskeime, die über Milliarden von Jahren Materie anzogen und die ersten Sterne, Galaxien, Galaxienhaufen und das kosmische Netz, das wir heute beobachten, hervorbrachten."
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
