import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'seuchenausbreitung-sir-simulator';
const title = 'Epidemie SIR Simulator';
const description = 'Erkunde die Ausbreitung von Krankheitserregern mit einem interaktiven SIR-Modell, das R0, Letalitat, Impfung, Infektionsdauer, Spitzenbelastung und Ubertragungskurven in Echtzeit anpasst.';

const howTo = [
  {
    name: 'Reproduktionszahl einstellen',
    text: 'Bewege den R0-Regler, um einzustellen, wie viele Sekundarinfektionen eine infektiose Person in einer vollstandig empfanglichen Bevolkerung verursachen wurde.',
  },
  {
    name: 'Impfung und Impfstoffwirksamkeit hinzufugen',
    text: 'Erhohe die Impfabdeckung oder Impfstoffwirksamkeit, um geschutzte Personen aus dem empfanglichen Pool zu entfernen und die effektive Reproduktionszahl zu senken.',
  },
  {
    name: 'Letalitat und Infektionsdauer anpassen',
    text: 'Andere die Sterblichkeitsrate und die Anzahl der infektiosen Tage, um zu sehen, wie sich schwerwiegende Folgen und der Kurvenverlauf verandern.',
  },
  {
    name: 'SIR-Kurven ablesen',
    text: 'Nutze das Diagramm und den Tagesinspektor, um Kurven fur Empfangliche, Infizierte, Genesene und geschatzte Todesfalle wahrend des simulierten Ausbruchs zu vergleichen.',
  },
];

const faq = [
  {
    question: 'Was zeigt ein SIR-Modell?',
    answer: 'Ein SIR-Modell teilt eine Bevolkerung in empfangliche, infizierte und genesene Gruppen ein. Es schatzt, wie Menschen im Laufe der Zeit zwischen diesen Gruppen wechseln, wahrend Ubertragung und Genesung stattfinden.',
  },
  {
    question: 'Wie verandert die Impfung die Kurve?',
    answer: 'Die Impfung reduziert die empfangliche Bevolkerung, wenn sie eine Infektion verhindert. In diesem Simulator senkt eine wirksame Impfung die effektive Reproduktionszahl und kann die Infektionsspitze verkleinern oder verzogern.',
  },
  {
    question: 'Ist R0 dasselbe wie Re?',
    answer: 'Nein. R0 beschreibt die Ausbreitung in einer vollstandig empfanglichen Bevolkerung. Re ist die effektive Reproduktionszahl, nachdem Immunitat, Impfung oder Verhaltensanderungen die Anzahl der Personen reduziert haben, die infiziert werden konnen.',
  },
  {
    question: 'Warum steigt die Infiziertenkurve an und fallt dann ab?',
    answer: 'Die Infiziertenkurve fallt, wenn jede infektiose Person weniger Neuinfektionen erzeugt als Personen die infizierte Gruppe durch Genesung oder Tod verlassen. Die abnehmende Empfanglichkeit ist der Haupttreiber in einem einfachen SIR-Modell.',
  },
  {
    question: 'Kann dieser Simulator eine echte Epidemie vorhersagen?',
    answer: 'Es ist ein Lehr- und Szenarienwerkzeug, keine Vorhersage. Echte Ausbruche benotigen Altersstrukturen, Kontaktnetzwerke, Geografie, Meldeverzogerungen, sich anderndes Verhalten, Varianten, nachlassende Immunitat und kalibrierte Daten.',
  },
  {
    question: 'Was ist der Unterschied zwischen Attack Rate und Spitzeninfizierten?',
    answer: 'Die Attack Rate misst den gesamten Anteil der Bevolkerung, der bis zum Ende des Ausbruchs jemals infiziert wurde. Die Spitzeninfizierten messen die maximale Anzahl gleichzeitig infektioser Personen zu einem Zeitpunkt. Eine niedrige Spitze garantiert keine niedrige Attack Rate und umgekehrt.',
  },
  {
    question: 'Was bedeutet Re unter 1 visuell?',
    answer: 'Wenn Re unter 1 fallt, erzeugt jede infektiose Person im Durchschnitt weniger als eine Neuinfektion. Im Diagramm steigt die Infiziertenkurve nie steil an und kann vom Startkeim sofort abfallen, was bedeutet, dass sich der Ausbruch nicht aufrechterhalten kann.',
  },
  {
    question: 'Wie wirkt sich die Infektionsdauer auf den Ausbruch aus?',
    answer: 'Eine langere Infektionsdauer verlangert die Zeitspanne, in der jede infizierte Person den Erreger ubertragen kann. Dies streckt den Ausbruchszeitverlauf, verzogert den Hohepunkt und kann bei gleichem R0 eine breitere Kurve mit niedrigerer Spitze erzeugen.',
  },
  {
    question: 'Warum verandert die Letalitat die Infiziertenkurve nicht?',
    answer: 'In diesem SIR-Modell beeinflusst die Letalitat nur die Todesfallzahl, die von der Gruppe der Genesenen abzweigt. Sie wirkt sich nicht auf die Ubertragung aus, da Todesfalle und Genesungen Personen mit der gleichen Rate aus dem infektiosen Pool entfernen.',
  },
  {
    question: 'Was ist die Herdenimmunitatsschwelle?',
    answer: 'Die Herdenimmunitatsschwelle ist der Anteil der Bevolkerung, der immun sein muss, damit Re unter 1 fallt. Sie wird naherungsweise als 1 - 1/R0 berechnet. Bei Masern mit R0 um 12 liegt die Schwelle uber 91%. Bei saisonaler Grippe mit R0 um 1,3 liegt die Schwelle bei etwa 23%.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Live-Epidemieszenario',
    curveChart: 'SIR-Ubertragungskurven',
    inspectDay: 'Simulationstag untersuchen',
    legend: 'Kurvenlegende',
    susceptible: 'Empfangliche',
    infected: 'Infizierte',
    recovered: 'Genesene oder immune',
    deaths: 'Todesfalle',
    controls: 'Epidemieparameter',
    modelName: 'Kompartimentmodell',
    peakInfected: 'Spitzeninfizierte',
    peakDay: 'Spitzentag',
    attackRate: 'Attack Rate',
    estimatedDeaths: 'Geschatzte Todesfalle',
    r0: 'Basisreproduktionszahl R0',
    lethality: 'Letalitat',
    vaccination: 'Impfabdeckung',
    vaccineEffectiveness: 'Impfstoffwirksamkeit',
    infectiousDays: 'Infektionsdauer',
    initialInfected: 'Anfanglich Infizierte',
    dayLabel: 'Tag',
    daysUnit: 'Tage',
    infectiousLabel: 'infektios',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Epidemie-SIR-Simulator fur R0, Impfung, Letalitat und Ubertragungskurven',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Epidemie-SIR-Simulator lasst dich erkunden, wie sich ein Krankheitserreger in einer Bevolkerung ausbreitet, wenn empfangliche Menschen infiziert werden und die infektiose Gruppe anschlie?end durch Genesung oder Tod verlassen. Entwickelt fur Studierende, Wissenschaftskommunikatoren, Lernende im offentlichen Gesundheitswesen und alle, die eine schnelle visuelle Erklarung dafur suchen, warum kleine Veranderungen bei Ubertragung oder Immunitat einen Ausbruch umgestalten konnen.',
    },
    {
      type: 'paragraph',
      html: 'Die interaktiven Steuerelemente konzentrieren sich auf die Variablen, die Menschen am haufigsten testen mochten: <strong>R0</strong>, Letalitat, Impfabdeckung, Impfstoffwirksamkeit, Infektionsdauer und den anfanglichen Infiziertenanteil. Das Diagramm aktualisiert sich sofort, sodass die Kurven fur Empfangliche, Infizierte, Genesene, Immune und Todesfalle als ein verbundenes Epidemiesystem verglichen werden konnen.',
    },
    {
      type: 'title',
      text: 'Wie das SIR-Modell funktioniert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein einfaches SIR-Modell unterteilt die Bevolkerung in drei Hauptkompartimente. <strong>S</strong> sind empfangliche Personen, die noch infiziert werden konnen. <strong>I</strong> sind aktuell infektiose Personen, die den Erreger ubertragen konnen. <strong>R</strong> sind Personen, die nicht mehr infektios sind, weil sie genesen sind, Immunitat erlangt haben oder anderweitig aus der Ubertragungskette ausgeschieden sind. Dieser Simulator erfasst auch geschatzte Todesfalle als schwerwiegenden Ausgangszweig der Gruppe, die die Infektion verlasst.',
    },
    {
      type: 'paragraph',
      html: 'Die Ubertragungsrate ist mit R0 und der Infektionsdauer verknupft. Wenn R0 hoch ist oder Menschen langer infektios bleiben, entstehen mehr Neuinfektionen, bevor die infizierte Gruppe schrumpft. Wenn die Impfung genug Personen aus dem empfanglichen Pool entfernt, sinkt die effektive Reproduktionszahl und die Ausbruchsspitze kann viel kleiner werden.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Was sich andert', 'Typischer Kurveneffekt'],
      rows: [
        ['R0', 'Ubertragungspotenzial vor Berucksichtigung der Immunitat', 'Hoheres R0 lasst die Infiziertenkurve schneller ansteigen und hoher gipfeln.'],
        ['Impfabdeckung', 'Anteil der Personen, die bei Schutz aus dem empfanglichen Pool entfernt werden', 'Hohere Abdeckung senkt Re und kann den Ausbruch abflachen.'],
        ['Impfstoffwirksamkeit', 'Wie stark die Impfung in diesem vereinfachten Modell eine Infektion verhindert', 'Hohere Wirksamkeit macht die gleiche Abdeckung schutzender.'],
        ['Infektionsdauer', 'Durchschnittliche Zeit, die Personen infektios bleiben', 'Langere Infektion verandert den Zeitverlauf und kann den Ausbruch verlangern.'],
        ['Letalitat', 'Anteil der Personen, die die Infektion verlassen und als Todesfalle gezahlt werden', 'Hohere Letalitat erhoht die Todesfallkurve, ohne die Ubertragung direkt zu steigern.'],
      ],
    },
    {
      type: 'title',
      text: 'R0, Re und Herdenimmunitat - Intuition',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 ist die durchschnittliche Anzahl von Sekundarfällen, die eine infektiose Person in einer vollstandig empfanglichen Bevolkerung verursacht. Re, die effektive Reproduktionszahl, ist niedriger, wenn einige Menschen bereits immun, geimpft, isoliert oder anderweitig nicht fur eine Infektion verfugbar sind. In diesem Simulator reduziert eine wirksame Impfung direkt die Empfanglichkeit, sodass das angezeigte Re mit steigender Schutzabdeckung fallt.',
    },
    {
      type: 'paragraph',
      html: 'Eine haufige Naherung fur die Herdenimmunitat ist <strong>1 - 1 / R0</strong>. Bei einem R0 von 3 liegt die Schwelle bei etwa 66,7% wirksamer Immunitat. Der Simulator macht diese Schwelle greifbar: Wenn die wirksame Impfung unter der Schwelle liegt, konnen Ausbruche weiter wachsen; liegt sie daruber, kann sich die Ubertragung kaum aufrechterhalten.',
    },
    {
      type: 'title',
      text: 'Was die Zahl der Spitzeninfizierten bedeutet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Spitzeninfizierten sind die maximale Anzahl gleichzeitig infektioser Personen in der simulierten Bevolkerung. Dies ist oft operativ wichtiger als die Gesamtzahl der Infektionen, da Krankenhauser, Labore, Isolationsprogramme und Kontaktverfolgungsteams den Druck durch gleichzeitige aktive Fälle spuren. Die Spitze zu senken kann wichtig sein, selbst wenn die endgultige Attack Rate nicht auf null reduziert wird.',
    },
    {
      type: 'paragraph',
      html: 'Die Attack Rate schatzt den Anteil der Gesamtbevolkerung, der bis zum Ende des Laufs infiziert wurde. Eine hohe Attack Rate bedeutet, dass der Erreger viele Menschen erreicht hat, bevor die Empfanglichkeit erschopft oder kontrolliert wurde. Eine niedrige Attack Rate bedeutet, dass Immunitat, Impfung oder schwache Ubertragung eine weitraumige Ausbreitung verhindert haben.',
    },
    {
      type: 'title',
      text: 'Reale R0-Werte und was sie fur die Herdenimmunitat bedeuten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Basisreproduktionszahl R0 ist keine feste biologische Konstante eines Erregers. Sie hangt von Kontaktmustern, Bevolkerungsdichte, kulturellen Gewohnheiten und Umweltfaktoren ab. Derselbe Virus kann in einer dichten Stadt andere R0-Werte haben als in einem landlichen Gebiet oder in einer Jahreszeit mit mehr Innenraumbesuch. Die folgenden Werte sind illustrative Referenzbereiche aus veroffentlichten Studien.',
    },
    {
      type: 'table',
      headers: ['Erreger', 'Typischer R0-Bereich', 'Herdenimmunitatsschwelle (1 - 1/R0)', 'Wichtigstes Ubertragungsmerkmal'],
      rows: [
        ['Saisonale Grippe', '1,2 - 1,4', '17% - 29%', 'Kurze Infektionsdauer, saisonale Schwankungen'],
        ['SARS-CoV-2 (Urtyp)', '2,0 - 3,0', '50% - 67%', 'Prasymptomatische Ubertragung, Aerosolwege'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '80% - 87%', 'Erhohte Viruslast, schnellere Ausbreitung'],
        ['SARS-CoV-2 (Omikron)', '8,0 - 12,0', '87% - 92%', 'Immunflucht, oberer Atemwegstropismus'],
        ['Polio', '5,0 - 7,0', '80% - 86%', 'Fakal-oraler Weg, langes asymptomatisches Ausscheiden'],
        ['Pocken', '5,0 - 7,0', '80% - 86%', 'Durch weltweite Impfkampagne ausgerottet'],
        ['Masern', '12,0 - 18,0', '92% - 94%', 'Extrem ansteckend, luftubertragen, lange Infektionsdauer'],
        ['Keuchhusten', '12,0 - 17,0', '92% - 94%', 'Nachlassende Immunitat ermoglicht Wiederholungsinfektionen'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Eine hohe Herdenimmunitatsschwelle bedeutet nicht automatisch, dass Impfung sinnlos ist, wenn die Abdeckung unter der Schwelle liegt. Selbst eine teilweise Immunitat verlangsamt die Ubertragung, senkt die Spitze, reduziert schwere Verlaufe und verschafft dem Gesundheitssystem Zeit. Der Simulator zeigt diesen Effekt, wenn du den Impfregler durch Zwischenwerte bewegst.',
    },
    {
      type: 'title',
      text: 'Wie sich die effektive Reproduktionszahl Re wahrend eines Ausbruchs verandert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re ist die effektive Reproduktionszahl zu einem bestimmten Zeitpunkt des Ausbruchs. Im Gegensatz zu R0, das eine vollstandig empfangliche Bevolkerung annimmt, berucksichtigt Re Immunitat, Impfung und alle anderen Faktoren, die die Empfanglichkeit reduzieren. In diesem Simulator wird Re berechnet als <strong>R0 x (1 - geschutzter Anteil)</strong>, wobei der geschutzte Anteil der durch Impfung wirksam immune Bevolkerungsanteil ist.',
    },
    {
      type: 'paragraph',
      html: 'Der im Simulator-Kopf angezeigte Re-Wert aktualisiert sich, wenn du die Regler bewegst. Wenn Re uber 1 bleibt, wachst der Ausbruch. Wenn Re unter 1 fallt, erzeugt jede infizierte Person im Durchschnitt weniger als eine Neuinfektion, und die Epidemie kann sich nicht aufrechterhalten. Dies ist die Kernbotschaft der Epidemiekontrolle: Re durch Immunitat, Verhalten oder Ma?nahmen unter 1 zu bringen und zu halten.',
    },
    {
      type: 'title',
      text: 'Attack Rate, Spitzenbelastung und was sie uber die Schwere eines Ausbruchs verraten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Attack Rate ist der Anteil der Gesamtbevolkerung, der wahrend des gesamten simulierten Ausbruchs infiziert wurde. Sie ist die am haufigsten genannte zusammenfassende Kennzahl nach einer Epidemiewelle. Eine hohe Attack Rate bedeutet, dass der Erreger die meisten empfanglichen Personen infiziert hat, bevor Erschopfung oder Kontrolle die Ubertragung stoppten. Eine niedrige Attack Rate bedeutet, dass Immunitat, Impfung oder eine von Natur aus schwache Ubertragung eine weitverbreitete Infektion verhindert haben.',
    },
    {
      type: 'paragraph',
      html: 'Die Spitzeninfizierten - die maximale Anzahl gleichzeitig infektioser Personen - sind fur den kurzzeitigen Druck auf das Gesundheitssystem wichtiger. Eine Welle mit moderater Attack Rate, aber einer sehr hohen, spitzen Kurve kann Krankenhauser uberfordern, selbst wenn die Gesamtfallzahlen nicht extrem sind. Umgekehrt kann eine langsame, abgeflachte Kurve eine ahnliche Attack Rate uber viele Wochen verteilt haben, was dem Gesundheitssystem Zeit gibt, die Fälle zu bewaltigen. Deshalb betonen Public-Health-Experten das <strong>Abflachen der Kurve</strong> als operatives Ziel, das sich von der Verhinderung samtlicher Infektionen unterscheidet.',
    },
    {
      type: 'title',
      text: 'Kurvenabflachung und Gesundheitskapazitat im SIR-Modell',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Infiziertenkurve in einem SIR-Modell kann als die Anzahl der Personen interpretiert werden, die gleichzeitig versorgt werden mussen. In einer echten Epidemie greift jede Person, die ein Krankenhausbett, Sauerstoffversorgung oder Intensivpflege benotigt, auf einen begrenzten Pool von Ressourcen zuruck. Wenn die Infiziertenkurve uber die verfugbare Kapazitat steigt, steigt die Sterblichkeit aus allen Grunden, weil das System keine adaquate Versorgung bieten kann.',
    },
    {
      type: 'paragraph',
      html: 'Die Impfung flacht in diesem Modell die Kurve ab, indem sie Personen aus dem empfanglichen Pool entfernt, bevor sie infiziert werden konnen. Die Reduzierung von R0 durch andere Ma?nahmen - Masken, Luftung, Abstand, Tests, Isolation - wurde in einem vollstandigeren Modell ebenfalls die Spitze senken. Die Simulation macht den Mechanismus sichtbar: Mit zunehmender wirksamer Impfabdeckung schrumpft die Spitze, verschiebt sich nach hinten oder verschwindet ganz.',
    },
    {
      type: 'title',
      text: 'Die Mathematik hinter dem SIR-Modell visualisiert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Im SIR-Modell hangt die Rate der Neuinfektionen pro Zeitschritt von drei Gro?en ab: der Ubertragungsrate <strong>beta</strong>, der aktuellen Anzahl infektioser Personen <strong>I</strong> und dem Anteil der effektiven Bevolkerung, der noch empfanglich ist <strong>S / N</strong>. Das Produkt <strong>beta x I x S / N</strong> wird als Infektionskraft bezeichnet. Jeden Tag bestimmt diese Kraft, wie viele empfangliche Personen in das Infiziertenkompartiment wechseln.',
    },
    {
      type: 'paragraph',
      html: 'Personen verlassen das Infiziertenkompartiment mit der Genesungsrate <strong>gamma = 1 / Infektionsdauer</strong>. Das Gleichgewicht zwischen Infektionskraft und Genesungsrate bestimmt, ob die Epidemie wachst oder schrumpft. Wenn beta x S / N gro?er als gamma ist, ubertreffen Neuinfektionen die Genesungen und der Ausbruch expandiert. Wenn der empfangliche Anteil S / N ausreichend gefallen ist, dominiert gamma und der Ausbruch zieht sich zuruck.',
    },
    {
      type: 'paragraph',
      html: 'Der Parameter <strong>beta</strong> ist in der Benutzeroberflache nicht direkt sichtbar. Stattdessen wird er aus R0 und der Infektionsdauer uber die Beziehung <strong>beta = R0 x gamma</strong> abgeleitet. Deshalb erzeugen Anderungen von R0 oder der Infektionsdauer ahnliche, aber nicht identische Kurvenformen. Beide Parameter beeinflussen die Infektionskraft, aber die Infektionsdauer streckt auch die Zeitachse des Ausbruchs.',
    },
    {
      type: 'title',
      text: 'Wie man diesen Simulator zum Lernen und Lehren nutzt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Vergleiche hohe und niedrige R0-Szenarien:</strong> Setze R0 auf 1,5 (saisonale Grippe) und dann auf 6,0 (Polio vor Impfung). Beobachte, wie sich Spitzenhohe, Spitzenzeitpunkt und Attack Rate andern, selbst wenn alle anderen Parameter identisch sind.',
        '<strong>Erkunde die Herdenimmunitatsschwelle:</strong> Starte mit R0 bei 3,0 und ohne Impfung. Notiere die Attack Rate. Fuge dann Impfabdeckung hinzu, bis Re unter 1 fallt. Vergleiche Spitze und Attack Rate bei Abdeckung knapp unterhalb und knapp oberhalb der Schwelle.',
        '<strong>Teste den Effekt von langsamer vs. schneller Reaktion:</strong> Stelle die Impfabdeckung auf verschiedene Werte ein und beobachte, wann die Spitze auftritt. Eine hohere Abdeckung reduziert nicht nur die Spitzenhohe, sondern verzogert sie meist auch und verschafft Zeit fur die Vorbereitung des Gesundheitssystems.',
        '<strong>Trenne Letalitat von Ubertragung:</strong> Setze die Letalitat auf 0% und beobachte die Infiziertenkurve. Setze die Letalitat dann auf 10%, ohne andere Einstellungen zu andern. Die Infiziertenkurve andert sich nicht, aber die Todesrate steigt. Dies zeigt, warum Fallsterblichkeitsrate und Ubertragungsgeschwindigkeit unterschiedliche epidemiologische Dimensionen sind.',
        '<strong>Untersuche den Effekt der Infektionsdauer:</strong> Vergleiche eine 4-tagige Infektionsdauer mit einer 18-tagigen bei gleichem R0. Die langere Dauer streckt die Kurve, verzogert die Spitze und erzeugt eine langere, aber niedrigere Welle.',
        '<strong>Klassenraumubung - Finde die Schwelle:</strong> Bitte Schuler, die minimale Impfabdeckung zu finden, die Re bei einem gegebenen R0 unter 1 bringt, und vergleiche das Ergebnis mit der Formel 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'Wann und warum dieser Simulator eingesetzt wird',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Epidemiologiestudierende:</strong> Verbinde das mathematische SIR-Grundgerust mit interaktiven Kurvenformen, bevor du mit Differentialgleichungen arbeitest oder eigene Modelle programmierst.',
        '<strong>Wissenschaftskommunikatoren und Journalisten:</strong> Erstelle Diagramme, Screenshots oder Live-Erklarungen, die zeigen, warum R0, Impfung und Infektionsdauer fur den Verlauf von Ausbruchen wichtig sind.',
        '<strong>Lernende im offentlichen Gesundheitswesen:</strong> Teste, wie verschiedene Interventionskombinationen die Epidemiespitze und Attack Rate verschieben, um ein Gefuhl fur die Zielkonflikte bei der Ausbruchsbekampfung zu entwickeln.',
        '<strong>Alle, die neugierig auf Epidemiemathematik sind:</strong> Erkunde das SIR-Modell, ohne Code schreiben oder Software installieren zu mussen. Jeder Regler aktualisiert das Diagramm in Echtzeit.',
      ],
    },
    {
      type: 'title',
      text: 'Modellerweiterungen: SEIR, SIRS und daruber hinaus',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieser Simulator verwendet eine einfache SIR-Struktur. Mehrere haufige Erweiterungen erhohen die Realitatsnahe. Ein <strong>SEIR-Modell</strong> fugt ein exponiertes (E)-Kompartiment fur Personen hinzu, die infiziert, aber noch nicht infektios sind - dies bildet die Inkubationszeit ab. Die exponierte Gruppe verschiebt die Epidemiespitze im Vergleich zum SIR-Modell nach au?en, da Infektionen Zeit in der Latenzphase verbringen, bevor sie zur Ubertragung beitragen.',
    },
    {
      type: 'paragraph',
      html: 'Ein <strong>SIRS-Modell</strong> ermoglicht es genesenen Personen, im Laufe der Zeit ihre Immunitat zu verlieren und wieder in das empfangliche Kompartiment einzutreten. Dies modelliert Erreger wie Keuchhusten oder SARS-CoV-2 mit nachlassender Immunitat und erzeugt anhaltende oder wiederkehrende Ausbruchswellen. Ein <strong>altersstrukturiertes Modell</strong> unterteilt die Bevolkerung in Altersgruppen mit unterschiedlichen Kontaktmatrizen und Schweregradprofilen, was fur Krankheiten wichtig ist, bei denen Kinder und altere Menschen sehr unterschiedliche Verlaufe haben.',
    },
    {
      type: 'paragraph',
      html: 'Weitere Erweiterungen fugen geografische Ausbreitung (Metapopulationsmodelle), Verhaltensanderungen (adaptive Kontaktraten), stochastisches Rauschen (fur kleine Bevolkerungen, bei denen zufalliges Aussterben eine Rolle spielt) und Interventionszeitpunkte (Schulschlie?ungen, Lockdowns, Reisebeschrankungen, die ein- und ausgeschaltet werden) hinzu. Jede Erweiterung fugt Komplexitat hinzu, die fur Vorhersagen unerlasslich ist, aber die zugrundeliegenden Ubertragungsdynamiken verdecken kann, die das einfache SIR-Modell klar veranschaulicht.',
    },
    {
      type: 'title',
      text: 'Grenzen dieses Epidemie-Simulators',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dies ist ein kompaktes deterministisches SIR-Modell. Es enthalt keine Altersgruppen, Haushaltsstruktur, Schulen, Reisen, Superspreading, Inkubationszeiten, asymptomatische Ubertragung, Saisonalitat, Varianten, nachlassende Immunitat, Verhaltensanderungen, Testverzogerungen oder Public-Health-Ma?nahmen, die im Laufe der Zeit ein- und ausgeschaltet werden. Diese Details sind fur echte Vorhersagen unerlasslich.',
    },
    {
      type: 'paragraph',
      html: 'Das Modell geht von einer gut durchmischten Bevolkerung aus, bei der jede empfangliche Person die gleiche Kontaktwahrscheinlichkeit mit jeder infektiosen Person hat. Reale Bevolkerungen haben Kontaktnetzwerke mit starker Clusterung, Altersassortativitat, geografischer Struktur und individueller Variabilitat der Infektiositat. Diese Merkmale konnen langsameres anfangliches Wachstum, Superspreading-Ereignisse und heterogene Ausbruchsmuster erzeugen, die ein homogenes Modell nicht erfasst.',
    },
    {
      type: 'paragraph',
      html: 'Nutze den Simulator, um Mechanismen zu verstehen und Szenarien zu vergleichen, nicht um medizinische, politische oder Notfallentscheidungen zu treffen. Die reale Epidemiebewertung erfordert Uberwachungsdaten, lokalen Kontext, Unsicherheitsanalyse und spezialisierte epidemiologische Modellierung.',
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
