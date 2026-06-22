const slug = 'zellverjuengungs-rechner';
const description = 'Berechnen Sie, wie viel Prozent Ihres Körpers sich seit Ihrer Geburt erneuert hat. Schätzungen basierend auf der Zellteilungsrate von Organen, Knochen und Geweben. Das Schiff des Theseus greifbar gemacht.';
const title = 'Zellvorgangs Rechner: Wie viel vom ursprünglichen "Ich" ist noch übrig?';
const howTo = [
    {
      name: 'Alter anpassen',
      text: 'Schieben Sie den Regler von 1 auf 105 Jahre. Dies ist die wichtigste Variable für die Erneuerungsberechnungen.',
    },
    {
      name: 'Hauptprozentsatz beobachten',
      text: 'Die große Zahl in der Mitte zeigt, wie viel Prozent Ihrer aktuellen Materie "neu" ist (seit der Geburt erneuert).',
    },
    {
      name: 'Fortschrittsbalken analysieren',
      text: 'Jeder Balken steht für ein anderes Gewebe: Haut/Blut, Knochen, Organe und Gehirn. Beachten Sie, wie sich das Gehirn kaum verändert, während sich die Haut ständig erneuert.',
    },
    {
      name: 'Über die eigene Identität nachdenken',
      text: 'Wenn 99% von Ihnen aus neuer Materie bestehen, wer sind Sie dann wirklich? Nutzen Sie dieses Tool als Ausgangspunkt für Überlegungen zur persönlichen Kontinuität und dem Schiff-des-Theseus-Paradoxon.',
    },
  ];
const faq = [
    {
      question: 'Was genau ist "Zellerneuerung"?',
      answer: 'Es ist der natürliche Prozess, bei dem gealterte oder beschädigte Zellen absterben (Apoptose) und durch neue Zellen ersetzt werden, die durch Mitose (Zellteilung) entstehen. Dieser Zyklus ist wichtig für den Erhalt von funktionsfähigem Gewebe und die Reparatur von Schäden.',
    },
    {
      question: 'Warum erneuert sich das Gehirn so langsam?',
      answer: 'Neuronen in der Großhirnrinde werden vor der Geburt gebildet und teilen sich in der Regel nicht mehr. Dies sorgt für neurologische Stabilität: Ihre grundlegende "Verkabelung" bleibt konstant. Gliazellen erneuern sich jedoch. Erinnerungen werden in Verbindungen gespeichert, nicht in Atomen.',
    },
    {
      question: 'Stimmt es, dass wir alle sieben Jahre "neue Menschen" sind?',
      answer: 'Das ist eine Vereinfachung und nicht ganz korrekt. Ihr Blut erneuert sich in 4 Monaten, Ihre Haut in einem Monat, Ihr Skelett in 10 Jahren. Ihr Gehirn bleibt weitgehend unverändert. Die Zahl 7 Jahre ist historisch (Aristoteles erwähnte sie), aber biologisch gesehen ein ungenauer Durchschnitt.',
    },
    {
      question: 'Wenn mein Körper zu 99% neu ist, bin ich dann noch dieselbe Person?',
      answer: 'Ja. Identität ist eine Kontinuität von Information, Bewusstsein und Erinnerung, nicht von Atomen. Sie sind wie ein Fluss: Das Wasser ändert sich ständig, aber der Fluss bleibt bestehen. Das Schiff-des-Theseus-Paradoxon legt nahe, dass die Identität im Muster liegt, nicht in der Materie.',
    },
    {
      question: 'Welche Gewebe erneuern sich am schnellsten?',
      answer: 'Blut und Haut führen die Liste an. Ihr Knochenmark produziert täglich 200 Milliarden Blutzellen. Sie verlieren ca. 30.000 Hautzellen pro Minute. Deshalb heilen sie so gut und altern so sichtbar: Sie sind in Bezug auf das Zellalter jung.',
    },
    {
      question: 'Erneuert sich die Augenlinse wirklich nicht?',
      answer: 'Korrekt. Die Linsenzellen werden während der Embryonalentwicklung angelegt und bleiben lebenslang erhalten. Mit 100 Jahren könnten die zentralen Zellen Ihrer Linse noch dieselben sein wie im Mutterleib. Es ist eine biologische Zeitkapsel.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopiert',
    noHistory: 'Kein Verlauf',
    load: 'Laden',
    delete: 'Löschen',
    biologicalTimeline: 'Biologische Zeitachse',
    ageUnit: 'Jahre der Evolution',
    matterNewPercent: 'Ihre Materie ist neu zu',
    atomicRenewal: 'Atomare Erneuerung',
    skinAndBlood: 'Haut und Blut',
    boneRemodeling: 'Knochenumbau',
    organicMatrix: 'Organische Matrix',
    perennialCells: 'Dauerhafte Zellen',
    disclaimerText: 'Berechnungen basieren auf der mittleren Lebensdauer von Zellen gemäß Isotopenstudien. Während sich Blut und Haut in Wochen erneuern, bleiben die Proteine der Augenlinse und große Teile Ihrer Großhirnrinde seit der Embryonalentwicklung erhalten. Physisch sind Sie eine dynamische Struktur in ständigem Fluss.',
  },
  seo: [
    {
      type: 'title',
      text: 'Wie viel von dir ist wirklich "du"? Die Wissenschaft der Zellerneuerung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ihr Körper ist wie ein Fluss in ständiger Bewegung. Jede Sekunde sterben Millionen von Zellen ab und werden durch neue ersetzt. In sieben Jahren wird praktisch jedes Atom in Ihrem Körper ausgetauscht worden sein. Diese Statistik ist jedoch zutiefst irreführend, da sich verschiedene Teile Ihres Organismus mit radikal unterschiedlichen Geschwindigkeiten erneuern.',
    },
    {
      type: 'paragraph',
      html: 'Dieses Paradoxon, bekannt als das <strong>Schiff-des-Theseus-Paradoxon</strong>, stellt eine uralte Frage: Wenn man alle Teile einer Sache ersetzt, ist es dann immer noch dieselbe Sache? In Ihrem Fall ist dies eine buchstäbliche Frage. Die Atome, aus denen Ihr Körper heute besteht, sind nicht dieselben wie vor zehn Jahren, aber <em>Sie</em> sind immer noch Sie.',
    },
    {
      type: 'title',
      text: 'Zellumschlag: Eine Karte Ihres dynamischen Körpers',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Erneuerungsgeschwindigkeit variiert je nach Gewebe drastisch:',
    },
    {
      type: 'table',
      headers: ['Gewebe', 'Mittlere Lebensdauer der Zellen', 'Vollständige Erneuerung', 'Beschreibung'],
      rows: [
        ['<strong>Blut</strong>', '120 Tage', '4 Monate', 'Rote Blutkörperchen gehören zu den schnellsten. Ihr Knochenmark produziert täglich 200 Milliarden.'],
        ['<strong>Haut</strong>', '2-4 Wochen', '1 Monat', 'Extrem schnelle Erneuerung. Sie verlieren ca. 30.000 Hautzellen pro Minute.'],
        ['<strong>Knochen</strong>', '10 Jahre', 'Ein Jahrzehnt', 'Das Skelett ist konservativer. Dennoch haben Sie nach 10 Jahren praktisch Ihr gesamtes Skelett ausgetauscht.'],
        ['<strong>Organe</strong>', '15 Jahre', '1,5 Jahrzehnte', 'Die Leber erneuert sich in Monaten. Das Herz in Jahren. Ein Mosaik aus Rhythmen.'],
        ['<strong>Gehirn</strong>', '80+ Jahre (Neuronen)', 'Fast nie', 'Ihre kortikalen Neuronen stammen von der Geburt. Aber Gliazellen (Stützzellen) erneuern sich.'],
      ],
    },
    {
      type: 'title',
      text: 'Die Augenlinse: Der älteste Teil von dir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es gibt eine Struktur in Ihrem Körper, die besonders ist: die <strong>Augenlinse</strong>. Die Zellen, aus denen die Linse besteht, werden während der fötalen Entwicklung angelegt und nie ersetzt. Wenn Sie 100 Jahre alt werden, sind die zentralen Zellen Ihrer Linse immer noch dieselben wie im Mutterleib. Sie sind buchstäblich der älteste Teil von Ihnen.',
    },
    {
      type: 'title',
      text: 'Berechnung der Gesamterneuerung: Das Paradox der Gewichte',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieser Rechner verwendet einen gewichteten Durchschnitt verschiedener Gewebe:',
    },
    {
      type: 'list',
      items: [
        '<strong>30% Haut und Blut:</strong> Nahezu vollständige Erneuerung in jungen Jahren.',
        '<strong>35% Skelett:</strong> Progressive Erneuerung, die nach 10 Jahren 100% erreicht.',
        '<strong>25% Organe:</strong> Langsamere Erneuerung, je nach Organ variabel.',
        '<strong>10% Gehirn:</strong> Minimale Veränderung der Neuronen, maximale in den Stützstrukturen.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Das Ergebnis ist, dass im Alter von 25 Jahren etwa <strong>93% Ihrer aktuellen Materie neu</strong> ist. Mit 80 Jahren könnten Sie aus mehr als 99% anderen Atomen bestehen als bei Ihrer Geburt.',
    },
    {
      type: 'title',
      text: 'Philosophische Implikationen: Identität ist Information, nicht Materie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Ihr Körper jedes Jahrzehnt komplett neu ist, warum sind es dann "Sie"? Die Antwort ist, dass die Identität nicht in spezifischen Atomen liegt, sondern im <strong>Informationsmuster</strong>, das diese Atome halten. Sie sind wie ein Lied: Es ist nicht dieselbe Luft, die vibriert, aber das Muster bleibt bestehen.',
    },
    {
      type: 'paragraph',
      html: 'Dies hat tiefgreifende Auswirkungen: Ihr Körper ist ein Prozess, kein Ding. Sie sind ein selbstorganisierendes Muster, das durch Veränderung hindurch besteht. Sie besitzen keine Atome; Sie sind eine Struktur, die sie vorübergehend kanalisiert.',
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

