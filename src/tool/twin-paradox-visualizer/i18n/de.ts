import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'zwillingsparadoxon-visualisierer';
const title = 'Zwillingsparadoxon Visualisierer: Spezielle Relativitätstheorie Zeitdilatation';
const description = 'Visualisieren Sie, wie die spezielle Relativitätstheorie einen schnell reisenden Zwilling jünger zurückkehren lässt als den Zwilling, der auf der Erde geblieben ist.';

const howTo = [
  {
    name: 'Geschwindigkeit des Raumschiffs einstellen',
    text: 'Nutzen Sie den Geschwindigkeitsregler, um einen Bruchteil der Lichtgeschwindigkeit zu wählen, und beobachten Sie, wie der Lorentzfaktor ansteigt.',
  },
  {
    name: 'Missionsdauer im Erdsystem festlegen',
    text: 'Stellen Sie ein, wie viele Jahre für den auf der Erde verbleibenden Zwilling während der gesamten Hin- und Rückreise vergehen.',
  },
  {
    name: 'Uhren und Weltlinien vergleichen',
    text: 'Lesen Sie den Altersunterschied, die vergangene Zeit im Raumschiff, die Entfernung im Erdsystem und die gekrümmte Weltlinie ab, die den Wechsel des Inertialsystems des reisenden Zwillings markiert.',
  },
];

const faq = [
  {
    question: 'Was ist das Zwillingsparadoxon in der speziellen Relativitätstheorie?',
    answer: 'Das Zwillingsparadoxon ist ein Gedankenexperiment, bei dem ein Zwilling mit relativistischer Geschwindigkeit durch das Weltall reist und später jünger zur Erde zurückkehrt als der auf der Erde gebliebene Zwilling. Es erscheint paradox, weil zunächst jeder Zwilling den anderen als bewegt beschreiben kann, aber der reisende Zwilling beim Umkehren das Inertialsystem wechselt, sodass die beiden Pfade durch die Raumzeit nicht symmetrisch sind.',
  },
  {
    question: 'Warum altert der reisende Zwilling weniger?',
    answer: 'In der speziellen Relativitätstheorie hängt die vergangene Eigenzeit vom Pfad durch die Raumzeit ab. Eine Uhr, die sich mit Geschwindigkeit v relativ zu einem Inertialsystem bewegt, tickt um den Lorentzfaktor gamma langsamer. Der Reisende sammelt auf dem Hin- und Rückweg weniger Eigenzeit an als der auf der Erde gebliebene Zwilling.',
  },
  {
    question: 'Verursacht die Beschleunigung den Altersunterschied?',
    answer: 'Beschleunigung ist wichtig, da sie dem Reisenden ermöglicht, die Richtung umzukehren und zur Erde zurückzukehren, aber der Altersunterschied wird aus dem gesamten Raumzeitpfad berechnet, nicht allein aus der Beschleunigung. Selbst wenn die Umkehr sehr kurz wäre, würde der Reisepfad immer noch weniger Eigenzeit enthalten als der Pfad auf der Erde.',
  },
  {
    question: 'Was bedeutet der Lorentzfaktor gamma?',
    answer: 'Der Lorentzfaktor gamma ist gleich 1 geteilt durch die Quadratwurzel aus 1 minus v Quadrat durch c Quadrat. Er gibt an, wie stark sich Zeitintervalle, Längen und Energien zwischen Inertialsystemen unterscheiden. Bei alltäglichen Geschwindigkeiten ist gamma fast 1, nahe der Lichtgeschwindigkeit steigt er jedoch stark an.',
  },
  {
    question: 'Kann dieser Effekt im wirklichen Leben gemessen werden?',
    answer: 'Ja. Die Zeitdilatation wurde mit schnellen Teilchen, auf Flugzeugen mitgeführten Atomuhren, Satellitennavigationssystemen und Teilchenbeschleunigern gemessen. Das Zwillingsparadoxon verwendet eine extreme Reisegeschichte, aber der zugrunde liegende Uhreneffekt ist ein routinemäßig bestätigter Bestandteil der modernen Physik.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Raumzeit-Visualisierung des Zwillingsparadoxons',
    controlsTitle: 'Steuerung des Zwillingsparadoxons',
    worldlineLabel: 'Weltliniendiagramm für den Erdzwilling und den reisenden Zwilling',
    earthTwin: 'Alter des Erdzwillings',
    travelingTwin: 'Alter des Reisenden',
    presetCruise: 'Reiseflug',
    presetRelativistic: 'Relativistisch',
    presetExtreme: 'Extrem',
    velocityLabel: 'Schiffsgeschwindigkeit',
    earthYearsLabel: 'Vergangene Zeit auf der Erde',
    ageGapLabel: 'Altersunterschied bei der Rückkehr',
    gammaLabel: 'Lorentzfaktor',
    shipTimeLabel: 'Eigenzeit des Reisenden',
    distanceLabel: 'Entfernung bis zum Wendepunkt',
    yearsUnit: 'Jahre',
    yearsShortUnit: 'Jahre',
  },
  seo: [
    {
      type: 'title',
      text: 'Zwillingsparadoxon Rechner für die Spezielle Relativitätstheorie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Zwillingsparadoxon Visualisierer verwandelt eine der berühmtesten Ideen der speziellen Relativitätstheorie in ein interaktives Raumzeitdiagramm. Stellen Sie eine Raumschiffgeschwindigkeit als Bruchteil der Lichtgeschwindigkeit ein, wählen Sie, wie viele Jahre auf der Erde vergehen, und der Rechner berechnet den Lorentzfaktor, die Eigenzeit des Reisenden, den Altersunterschied bei der Wiedervereinigung und die Entfernung bis zum Wendepunkt. Das visuelle Layout trennt die Erduhr von der Raumschiffuhr, sodass die Asymmetrie sichtbar wird, anstatt in Formeln versteckt zu sein.',
    },
    {
      type: 'title',
      text: 'Wie die Berechnung funktioniert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die zentrale Größe ist der Lorentzfaktor: gamma = 1 / sqrt(1 - v^2 / c^2). Für eine einfache Hin- und Rückreise mit konstanter Reisegeschwindigkeit ist die vom Reisenden erlebte Zeit die Missionsdauer im Erdsystem geteilt durch gamma. Der Unterschied zwischen diesen beiden Dauern ist der Altersunterschied bei der Wiedervereinigung der Zwillinge. Das Tool zeigt auch die Entfernung im Erdsystem bis zum Wendepunkt an, die der Hälfte der gesamten Erdzeit multipliziert mit der Schiffsgeschwindigkeit in Lichtjahren pro Jahr entspricht.',
    },
    {
      type: 'table',
      headers: ['Geschwindigkeit', 'Lorentzfaktor', 'Taktrate des Reisenden', 'Physikalische Bedeutung'],
      rows: [
        ['0.50c', '1.155', '86.6% der Erdrate', 'Ein spürbarer, aber moderater relativistischer Effekt.'],
        ['0.86c', '1.960', '51.0% der Erdrate', 'Der Reisende altert während des Reiseflugs etwa halb so schnell.'],
        ['0.98c', '5.025', '19.9% der Erdrate', 'Extreme Zeitdilatation dominiert das Missionsergebnis.'],
      ],
    },
    {
      type: 'title',
      text: 'Warum die Situation nicht symmetrisch ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Auf den ersten Blick kann jeder Zwilling sagen, der andere bewege sich, was das Ergebnis widersprüchlich erscheinen lässt. Die Auflösung ist, dass der Erdzwilling näherungsweise in einem Inertialsystem verbleibt, während der reisende Zwilling aufbricht, die Richtung umkehrt und zurückkehrt. Dieser Wechsel des Inertialsystems führt zu einem anderen Pfad durch die Raumzeit für den Reisenden. Die vom Tool gezeichnete Weltlinie knickt am Wendepunkt ab, während die Weltlinie des Erdzwillings gerade bleibt.',
    },
    {
      type: 'title',
      text: 'Das Weltliniendiagramm lesen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine Weltlinie ist eine Karte eines Objekts durch die Raumzeit und nicht nur durch den Raum. In diesem Visualisierer stellt die vertikale Erdinie den Zwilling dar, der zu Hause bleibt. Der abgewinkelte rote Pfad stellt den Reisenden dar, der die Erde verlässt und zurückkehrt. Höhere Geschwindigkeiten lassen den Reisepfad dramatischer abknicken und verringern die auf der Raumschiffuhr angesammelte Eigenzeit.',
    },
    {
      type: 'list',
      items: [
        '<strong>Altersunterschied:</strong> wie viel jünger der Reisende bei der Wiedervereinigung ist.',
        '<strong>Lorentzfaktor:</strong> der Multiplikator, der die Zeit im Erdsystem mit der Eigenzeit des Reisenden verknüpft.',
        '<strong>Eigenzeit des Reisenden:</strong> die tatsächlich vergangene Zeit, gemessen von einer Uhr an Bord des Raumschiffs.',
        '<strong>Entfernung bis zum Wendepunkt:</strong> die Entfernung im Erdsystem, bevor der Reisende die Richtung umkehrt.',
      ],
    },
    {
      type: 'title',
      text: 'Praktische Beweise für die Zeitdilatation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Zwillingsparadoxon ist ein klares Gedankenexperiment, aber die Zeitdilatation ist nicht spekulativ. Myonen, die in der oberen Atmosphäre entstehen, überleben lange genug, um den Boden zu erreichen, weil ihre bewegten Uhren aus Erdsicht dilatiert sind. Atomuhrexperimente in Flugzeugen und präzise Satellitennavigation erfordern ebenfalls relativistische Korrekturen. Dieselbe Mathematik, die hinter diesem Visualisierer steckt, ist Teil der Zeitmessinfrastruktur moderner GPS-Systeme.',
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
