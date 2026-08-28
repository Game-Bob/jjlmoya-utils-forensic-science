import { content as enContent } from './en';
import { createDnaLocale } from '../localize';

export const content = createDnaLocale({
  locale: 'de',
  slug: 'dna-profil-uebereinstimmungswahrscheinlichkeit-labor',
  title: 'Labor für die Übereinstimmungswahrscheinlichkeit von DNA Profilen',
  description: 'Erkunden Sie, wie Allelfrequenzen und Hardy-Weinberg-Regeln eine lehrreiche Wahrscheinlichkeit für zufällige DNA-Profilübereinstimmungen ergeben.',
  ui: {
    ...enContent.ui,
    controls: 'Profilsteuerung', controlKicker: 'Profil aufbauen', controlHelper: 'Starten Sie mit einem Unterrichts-Preset oder öffnen Sie einen Locus, um Allele und Populationsfrequenzen zu bearbeiten.',
    presets: 'Unterrichts-Presets', presetbalanced: 'Ausgewogen', presethomozygote: 'Homozygoten', presetclassroom: 'Einfacher Kurs', loci: 'Loci', locus: 'Locus', locusName: 'Name des Locus', alleleA: 'Allel A', alleleB: 'Allel B', frequencyA: 'Frequenz A (%)', frequencyB: 'Frequenz B (%)', removeLocus: 'Locus entfernen', addLocus: 'Locus hinzufügen',
    disclaimer: 'Lehrsimulation. Sie identifiziert keine Person, bewertet keinen Fall und ersetzt keine Laborberechnung.', sceneKicker: 'Signalspur', electropherogram: 'Profilspur', sceneNote: 'Zwei Spitzen zeigen die eingegebenen Allele jedes Locus. Die Höhe ist nur ein visueller Hinweis auf die Frequenz.', peakHeight: 'Spitzenhöhe folgt der eingegebenen Frequenz', results: 'Wahrscheinlichkeitsergebnisse', resultKicker: 'Wahrscheinlichkeit einer Zufallsübereinstimmung', locusBreakdown: 'Berechnung Locus für Locus', genotype: 'Genotyp', rule: 'Regel', frequency: 'Genotypfrequenz', badgeNeedsData: 'Daten fehlen', badgeExploratory: 'Explorativ', badgeCalculated: 'Berechnetes Modell', needsData: 'Füllen Sie jeden Locus mit zwei Allelen und Frequenzen zwischen 0 und 100 Prozent aus; die Summe eines Frequenzpaars darf höchstens 100 Prozent betragen.', exploratoryResult: 'Dieses kleine Profil eignet sich zum Lernen. Mehr Loci können ein Profil seltener machen, machen das Modell aber nicht zu einer Fallbewertung.', calculatedResult: 'Das Produkt wird aus den eingegebenen Frequenzen unter vereinfachten Annahmen zur Unabhängigkeit berechnet.', notCalculated: 'Nicht berechnet', completeFields: 'Füllen Sie die Profilfelder aus, um ein Ergebnis zu sehen.', ofRandomProfiles: 'zufälliger Profile unter diesem Unterrichtsmodell', missingValue: 'Unbenannter Locus', pattern: 'Profiltyp', calculation: 'Berechnung', meaning: 'Bedeutung', homozygote: 'Zwei gleiche Allele', heterozygote: 'Zwei verschiedene Allele', independentLoci: 'Mehrere unabhängige Loci', homozygoteMeaning: 'Die Allelfrequenz wird mit sich selbst multipliziert.', heterozygoteMeaning: 'Die beiden Allelfrequenzen werden multipliziert und verdoppelt.', independentLociMeaning: 'Jeder Locus trägt zur kombinierten Profilfrequenz bei.',
  },
  seo: {
    calculatorTitle: 'DNA-Profil-Rechner für zufällige Übereinstimmungswahrscheinlichkeit',
    intro: 'Dieses Labor zur DNA-Profil-Wahrscheinlichkeit zeigt Studierenden und interessierten Lesern, wie aus einem kleinen autosomalen STR-Profil eine Wahrscheinlichkeit unter einem vereinfachten populationsgenetischen Modell entsteht. Geben Sie zwei Allele und ihre Frequenzen für jeden Locus ein. Der Rechner wendet die Hardy-Weinberg-Regel an und multipliziert die Locus-Frequenzen zu einer lehrreichen Zufallsübereinstimmung.',
    methodTitle: 'So funktioniert die Genotypregel',
    method: 'Die Benutzeroberfläche hält den Rechenweg sichtbar: Die Spur zeigt die eingegebenen Allele, die Tabelle zeigt jeden Genotyp und das Endergebnis wird als eins unter einer Zehnerpotenz ausgegeben. Ein homozygoter Locus verwendet p², ein heterozygoter Locus 2pq. Die Presets enthalten bewusst synthetische Unterrichtswerte und keine offizielle Populationsdatenbank.',
    populationTitle: 'Warum Populationsfrequenzen wichtig sind',
    population: 'Allelfrequenzen sind Schätzungen aus Populationsdatenbanken. Referenzpopulation, Stichprobe, Datenbankgröße, Verwandtschaft, Populationsstruktur und Validierung beeinflussen die Interpretation. Wenn die eingegebenen Frequenzen die relevante Population beschreiben, das Profil eine saubere Einzelquelle ist und die Loci als unabhängig gelten, schätzt das Produkt die Häufigkeit bei zufälligen unverwandten Personen. Ändert sich eine Annahme, ändert sich auch die Bedeutung des Ergebnisses.',
    interpretation: 'Das Ergebnis ist eine bedingte Aussage über die eingegebenen Werte. Es berücksichtigt weder die Auswahl einer verdächtigen Person noch die Möglichkeit verwandter Personen, Mischspuren oder einen Datenbanksuch-Effekt. Deshalb sollte ein Unterrichtsbeispiel immer zusammen mit seiner Population, Methode und Unsicherheit gelesen werden.',
    application: 'Für eine sinnvolle Übung kann man zuerst ein Preset wählen, danach nur einen Locus verändern und beobachten, wie sich die Tabelle und die Endwahrscheinlichkeit ändern. So wird sichtbar, dass seltene Allele den Beitrag eines Locus stark verändern können. Anschließend sollte man die Eingabewerte, die Herkunft der Frequenzen und die vereinfachte Unabhängigkeitsannahme notieren. Die Darstellung ist für Unterricht, Selbststudium und eine transparente Erklärung der Rechenschritte gedacht, nicht für eine forensische Stellungnahme.',
    limitsTitle: 'Lehrgrenzen',
    limits: 'In einem echten Fall müssen Auswahl der Person, Datenbank, Mischprofile, Populationsstruktur und fachkundige Interpretation dokumentiert werden. Diese kleine Anwendung analysiert keine Elektropherogramme, korrigiert keine Populationsstruktur, berechnet keine Likelihood-Ratios und durchsucht keine DNA-Datenbank.',
    tipTitle: 'Als Modell verwenden, nicht als Urteil',
    tip: 'Eine kleine Zufallsübereinstimmungswahrscheinlichkeit ist weder eine Aussage über Schuld noch über Identität. Verwenden Sie die Tool als Rechenhilfe und halten Sie Datenquelle, Population, Annahmen und Unsicherheit sichtbar.',
    list: ['<strong>Eine Population:</strong> Mischen Sie keine Frequenzen aus nicht vergleichbaren Datenbanken.', '<strong>Annahmen sichtbar halten:</strong> Das Labor nimmt unverwandte Personen und vereinfachte Locus-Unabhängigkeit an.', '<strong>Wahrscheinlichkeit trennen:</strong> Ein seltenes Profil ist kein Beweis für Quelle oder Schuld.', '<strong>Daten dokumentieren:</strong> Ein formaler Bericht braucht Quelle, Methode, Unsicherheit und Interpretation.'],
  },
  faq: [
    { question: 'Was bedeutet die Wahrscheinlichkeit einer Zufallsübereinstimmung?', answer: 'Sie schätzt, wie wahrscheinlich es ist, dass eine zufällig ausgewählte unverwandte Person dieses Profil unter den gewählten Frequenzen und Annahmen besitzt. Sie ist nicht die Wahrscheinlichkeit von Schuld oder Herkunft einer Probe.' },
    { question: 'Wie wird eine Genotypfrequenz berechnet?', answer: 'Für einen Homozygoten verwendet das Labor p². Für einen Heterozygoten verwendet es 2pq; danach werden die Locusfrequenzen multipliziert.' },
    { question: 'Warum sind die Preset-Frequenzen synthetisch?', answer: 'Sie sind kleine Unterrichtsbeispiele. Forensische Arbeit benötigt eine validierte, repräsentative und dokumentierte Populationsdatenbank.' },
    { question: 'Kann die Anwendung zwei Personen vergleichen?', answer: 'Nein. Sie nimmt keine biologischen Proben an, vergleicht keine Profile und identifiziert niemanden. Sie zeigt nur ein mathematisches Modell.' },
    { question: 'Warum ist eine sehr kleine Wahrscheinlichkeit kein Urteil?', answer: 'Die Bedeutung hängt von Datenbank, Auswahl, Profilqualität, Unabhängigkeitsannahmen und fachlicher Interpretation ab.' },
  ],
  howTo: [
    { name: 'Ein Unterrichts-Preset wählen', text: 'Starten Sie mit dem ausgewogenen, homozygoten oder einfachen Kurs-Preset.' },
    { name: 'Einen Locus bearbeiten', text: 'Geben Sie Namen, zwei Allele und die Frequenz jedes Allels als Prozentwert ein.' },
    { name: 'Die Locusregel lesen', text: 'Die Tabelle zeigt p² für Homozygoten und 2pq für Heterozygoten.' },
    { name: 'Das Gesamtergebnis vorsichtig deuten', text: 'Lesen Sie das Ergebnis als Unterrichtsmodell und halten Sie seine Annahmen sichtbar.' },
  ],
});
