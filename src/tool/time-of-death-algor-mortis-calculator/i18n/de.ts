import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'todeszeitpunkt-berechnen-algor-mortis';
const title = 'Todeszeitpunkt Rechner mit Henssge Nomogramm';
const description = 'Berechnen Sie das postmortale Intervall und den Todeszeitpunkt anhand der Rektaltemperatur und des Henssge Abkühlungsmodells.';

const howTo = [
  { name: 'Rektal und Umgebungstemperatur erfassen', text: 'Geben Sie die gemessene tiefe Körperkerntemperatur und die Umgebungstemperatur am Fundort ein.' },
  { name: 'Körpergewicht und Korrekturfaktor wählen', text: 'Tragen Sie das Körpergewicht in Kilogramm ein und bestimmen Sie den Faktor für Kleidung oder Wasser.' },
  { name: 'Messzeitpunkt festlegen', text: 'Geben Sie die genaue Uhrzeit der thermischen Messung ein oder wählen Sie die aktuelle Uhrzeit.' },
  { name: 'Postmortales Intervall analysieren', text: 'Überprüfen Sie das berechnete Intervall, das 95 Prozent Konfidenzfenster und die Temperaturkurve.' }
];

const faq = [
  { question: 'Was bedeutet Algor Mortis in der Rechtsmedizin?', answer: 'Algor Mortis bezeichnet die fortschreitende postmortale Leichenabkühlung bis zum Erreichen des thermischen Umgebungsgleichgewichts.' },
  { question: 'Warum ist das Henssge Nomogramm genauer als lineare Faustregeln?', answer: 'Weil es das anfängliche Temperaturplateau sowie die doppel exponentielle Abkühlung unter Berücksichtigung von Körpermasse und Bekleidung abbildet.' },
  { question: 'Wie präzise ist die rektale Todeszeitbestimmung?', answer: 'Unter kontrollierten Standardbedingungen beträgt die statistische 95 Prozent Vertrauensgrenze in den ersten 10 Stunden etwa plus minus 2.8 Stunden.' },
  { question: 'Was versteht man unter dem postmortalen Temperaturplateau?', answer: 'Das Plateau beschreibt die ersten 1 bis 3 Stunden nach dem Tod, in denen die Kerntemperatur durch den bestehenden Temperaturgradienten kaum absinkt.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Postmortales Intervall und Henssge Nomogramm Rechner',
    disclaimer: 'Nur für Ausbildungs und Simulationszwecke. Gerichtsverwertbare Gutachten erfordern eine vollständige Obduktion und gesicherte Temperaturprotokolle.',
    unitSystemLabel: 'Einheitensystem',
    unitMetricLabel: 'Metrisch',
    unitImperialLabel: 'Imperial',
    presetsHeader: 'Forensische Standardszenarien',
    presetCustom: 'Benutzerdefinierte Werte',
    presetNakedCalm: 'Entkleidet in ruhigem Raum (20°C)',
    presetDressedIndoor: 'Bekleidet in Innenräumen (19.5°C)',
    presetWinterOutdoor: 'Winterliche Außenluft (4°C)',
    presetSubmergedWater: 'In stehendem Wasser (12°C)',
    presetHeavyDuvet: 'Unter dicker Daunendecke (18°C)',
    inputsHeader: 'Messwerte und Umgebungsparameter',
    rectalTempLabel: 'Rektale Kerntemperatur',
    ambientTempLabel: 'Umgebungstemperatur',
    bodyWeightLabel: 'Körpergewicht',
    factorLabel: 'Umgebungskorrekturfaktor',
    measurementTimeLabel: 'Messuhrzeit',
    factorNaked: 'Entkleidet in ruhender Luft',
    factorLightClothes: 'Leichte Kleidung (1-2 Schichten)',
    factorStandardClothes: 'Standardkleidung (3-4 Schichten)',
    factorHeavyWinter: 'Dicke Winterbekleidung',
    factorLightBlanket: 'Bett mit leichter Decke',
    factorHeavyDuvet: 'Bett mit dicker Daunendecke',
    factorStillWater: 'In stehendem Wasser',
    factorFlowingWater: 'In fließendem kaltem Wasser',
    factorWetClothing: 'Nasse Kleidung bei Windzug',
    factorMovingAir: 'Bewegte Luft mit Ventilator',
    resultsHeader: 'Analyse des postmortalen Intervalls',
    estimatedPmiLabel: 'Geschätzte Zeit seit Todeseintritt',
    deathWindowLabel: 'Wahrscheinlicher Todeszeitraum',
    confidenceMarginLabel: 'Konfidenzintervall (95%)',
    coolingPhaseLabel: 'Thermodynamische Phase',
    coolingRateLabel: 'Momentane Abkühlungsrate',
    glaisterEstimateLabel: 'Vergleich mit Glaister Regel',
    chartHeader: 'Henssge Doppel Exponentielle Abkühlungskurve',
    chartXAxis: 'Stunden postmortal',
    chartYAxis: 'Körpertemperatur',
    chartNowMarker: 'Messwert',
    chartPlateauMarker: 'Temperaturplateau',
    phasePlateau: 'Plateauphase',
    phaseDescent: 'Exponentieller Abfall',
    phaseEquilibrium: 'Thermisches Gleichgewicht',
    phaseHyperthermia: 'Warnung vor Hyperthermie',
    hoursUnit: 'Stunden',
    minutesUnit: 'Min',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: 'Zurücksetzen',
    nowBtn: 'Jetzt',
    coreThermometerLabel: 'Körperkerntemperatur',
    baselineAmbientLabel: 'Umgebungsgrenze',
    referenceBodyTempLabel: 'Normaltemperatur'
  },
  seo: [
    { type: 'title', text: 'Physikalische Grundlagen der Leichenabkühlung und Todeszeitschätzung', level: 2 },
    { type: 'paragraph', html: 'Die verlässliche Bestimmung der Todeszeit und des postmortalen Intervalls gehört zu den zentralen Aufgaben der rechtsmedizinischen Kriminalistik bei der Leichenschau am Fundort. <strong>Algor Mortis</strong> beschreibt den physikalischen Wärmeverlust eines menschlichen Körpers nach dem irreversiblen Herz Kreislauf Stillstand bis zum vollständigen Angleich an die herrschende Umgebungstemperatur. Durch tiefe rektale Temperaturmessung und thermodynamische mathematische Modelle lässt sich der Todeszeitpunkt wissenschaftlich eingrenzen und objektiv rekonstruieren.' },
    { type: 'diagnostic', variant: 'info', title: 'Thermodynamischer Abkühlungsverlauf', html: 'Die Leichenabkühlung erfolgt nicht linear ab der ersten Minute nach dem Todeseintritt. Sie weist eine charakteristische anfängliche Verzögerung namens <em>Temperaturplateau</em> auf, gefolgt von einem steilen doppel exponentiellen Temperaturabfall bis zum thermischen Ausgleich.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Rektale Normtemperatur' },
      { value: '±2.8 h', label: 'Konfidenzbereich erste 10h' },
      { value: '2 Exponenten', label: 'Henssge Berechnungsmodell' }
    ] },
    { type: 'title', text: 'Die Doppel Exponentielle Formel nach Claus Henssge', level: 3 },
    { type: 'paragraph', html: 'Einfache Faustformeln wie die historische Glaister Regel unterstellen einen konstanten Verlust von etwa 0.83 Grad Celsius pro Stunde. Dieses stark vereinfachte Vorgehen vernachlässigt jedoch den maßgeblichen Einfluss der Körpermasse, isolierender Bekleidungsschichten und das postmortale Plateau der tiefen Eingeweideorgane.' },
    { type: 'code', ariaLabel: 'Henssge Formel', code: 'Q = (T_rektal - T_umgebung) / (37.2 - T_umgebung)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (Koerpergewicht^0.625 * Korrekturfaktor) - 0.0284' },
    { type: 'paragraph', html: 'Professor Claus Henssge entwickelte eine doppel exponentielle Gleichung, welche die Wärmeübertragung von Körperkern und Körperschale präzise berücksichtigt. Die mathematische Auflösung nach der Zeit liefert das probabilistische postmortale Zeitfenster mit hoher forensischer Belastbarkeit.' },
    { type: 'title', text: 'Relevante Umwelt und Isolationskorrekturfaktoren', level: 3 },
    { type: 'paragraph', html: 'Die Wärmeabgabe hängt entscheidend von der Körperoberfläche, Luftströmungen am Auffindeort und isolierenden Textilschichten ab.' + " Eine sorgfältige Schätzung berücksichtigt zusätzlich die Umgebung, die Kleidung, die Körperlage, die Luftbewegung und die Zuverlässigkeit jeder Messung. Abweichungen können durch Feuchtigkeit, Wärmequellen, Untergrund oder eine unvollständige Dokumentation entstehen. Deshalb sollte das Ergebnis als Bereich mit Unsicherheit verstanden und durch weitere forensische Befunde, nicht durch eine einzelne Rechenzahl, eingeordnet werden." + " Die Aussage sollte immer im Zusammenhang mit der Probenahme, der Messqualität und der vollständigen Dokumentation bewertet werden. Kleine Unterschiede können durch Herstellung, Alterung, Verschmutzung oder Messbedingungen entstehen. Eine belastbare forensische Schlussfolgerung braucht deshalb nachvollziehbare Vergleichsproben, klare Unsicherheiten und eine unabhängige fachliche Prüfung." },
    { type: 'table', headers: ['Auffindesituation', 'Korrekturfaktor', 'Wirkungsmechanismus'], rows: [
      ['Entkleidet in stehender Raumluft', '1.0', 'Standardmäßige Wärmeabstrahlung und Eigenkonvektion'],
      ['Leichte Bekleidung (1-2 Lagen)', '1.1', 'Geringe Verminderung der konvektiven Wärmeabgabe'],
      ['Normale Straßenkleidung (3-4 Lagen)', '1.2', 'Mäßige thermische Barriere an Rumpf und Extremitäten'],
      ['Dicke Winterbekleidung', '1.4', 'Starke thermische Isolation durch Lufteinschluss'],
      ['Unter dicker Daunendecke im Bett', '1.8', 'Sehr hohe Wärmespeicherung und verzögerte Abkühlung'],
      ['In stehendem Wasser', '0.5', 'Wärmeleitfähigkeit von Wasser ist 24 mal höher als Luft'],
      ['In fließendem kaltem Wasser', '0.35', 'Erzwungene Konvektion beschleunigt den Entzug drastisch']
    ] },
    { type: 'title', text: 'Phasen der postmortalen Thermodynamik', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Postmortales Temperaturplateau', description: 'In den ersten 1 bis 3 Stunden fällt die rektale Temperatur kaum ab, während sich der Temperaturgradient zur Haut aufbaut.', points: ['Kern Schale Gradient bildet sich aus', 'Lineare Formeln unterschätzen die Zeitspanne', 'Mathematisch erfasst durch -0.25 exp(-5kt)'] },
      { title: 'Steiler Exponentieller Abfall', description: 'Nach Ausbildung des Gradienten erfolgt eine kontinuierliche Wärmeabgabe mit maximaler thermometrischer Aussagekraft.', highlight: true, points: ['Höchste analytische Trennschärfe', 'Engstes statistisches Vertrauensintervall', 'Optimaler Zeitraum für die Temperaturmethode'] }
    ] },
    { type: 'title', text: 'Methodische Hinweise zur Temperaturmessung am Fundort', level: 3 },
    { type: 'list', items: [
      '<strong>Tiefe rektale Kerntemperatur messen:</strong> Den kalibrierten Messfühler mindestens 8 bis 10 cm tief in das Rektum einführen.',
      '<strong>Umgebungstemperatur unmittelbar am Leichnam erfassen:</strong> Thermometer maximal 10 cm neben dem Körper platzieren.',
      '<strong>Thermische Konstanz des Fundorts dokumentieren:</strong> Heizkörper, offene Fenster oder Sonneneinstrahlung protokollieren.',
      '<strong>Feuchtigkeit der Kleidung prüfen:</strong> Nasse Stoffe steigern die Verdunstungskälte erheblich.'
    ] },
    { type: 'summary', title: 'Methodische Zusammenfassung', items: [
      'Das Henssge Nomogramm ist der international anerkannte Goldstandard der rechtsmedizinischen Todeszeitberechnung.',
      'Es sollte stets ein Zeitintervall mit Vertrauensgrenzen statt eines isolierten Zeitpunkts angegeben werden.',
      'Die Temperaturmessung ist mit Totenstarre, Totenflecken und supravitalen Reaktionen zu kombinieren.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
