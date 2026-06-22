const description = 'Modellieren Sie das Fermi-Paradoxon mit Drake-Gleichungsparametern, evolutionären Filtern, Signallebensdauer und einer Zeitprojektion nachweisbarer Milchstraßenzivilisationen.';
const slug = 'fermi-paradoxon-filter-labor';
const title = 'Fermi Paradoxon Filter Labor';

const howTo = [
  {
    name: 'Drake-Pipeline abschätzen',
    text: 'Bewegen Sie die Regler für Sternentstehung, bewohnbare Planeten, Leben, Intelligenz und Technologie, um festzulegen, wie oft die Milchstraße nachweisbare Zivilisationen hervorbringt.',
  },
  {
    name: 'Filterstärke einstellen',
    text: 'Erhöhen Sie den evolutionären Filter, wenn Kollaps, Selbstzerstörung, ökologische Instabilität oder technologische Engpässe Zivilisationen schneller auslöschen sollen.',
  },
  {
    name: 'Lebensdauer mit Horizont vergleichen',
    text: 'Nutzen Sie Signallebensdauer und Projektionshorizont zusammen. Eine kurze Lebensdauer kann eine Galaxie still erscheinen lassen, selbst wenn regelmäßig Zivilisationen entstehen.',
  },
  {
    name: 'Zeitliche Kurve lesen',
    text: 'Das Diagramm zeigt nachweisbare Zivilisationen im Zeitverlauf und macht Koexistenz und Aussterben sichtbar, anstatt das Fermi-Paradoxon auf eine einzige Zahl zu reduzieren.',
  },
];

const faq = [
  {
    question: 'Was berechnet dieser Fermi-Paradoxon-Simulator?',
    answer: 'Er kombiniert Terme der Drake-Gleichung mit einem Überlebensfilter und einem Zeithorizont, um abzuschätzen, wie viele technologische Zivilisationen gleichzeitig in der Milchstraße nachweisbar sein könnten.',
  },
  {
    question: 'Ist das eine Vorhersage echter außerirdischer Zivilisationen?',
    answer: 'Nein. Es ist ein exploratives Modell. Der Wert liegt darin zu sehen, wie Annahmen zusammenspielen: Eine Galaxie kann im Laufe der Geschichte viele Zivilisationen hervorbringen und dennoch nur sehr wenige haben, die zeitlich mit uns überlappen.',
  },
  {
    question: 'Was ist der Große Filter?',
    answer: 'Der Große Filter ist die Idee, dass einer oder mehrere Schritte zwischen einfacher Chemie und langlebigen technologischen Zivilisationen extrem unwahrscheinlich oder gefährlich sind.',
  },
  {
    question: 'Warum ist die Signallebensdauer so entscheidend?',
    answer: 'Nachweisbarkeit hängt von Überlappung ab. Eine Zivilisation, die nur wenige Jahrhunderte sendet, kann real sein, aber für eine andere Zivilisation, die in einer anderen Epoche beobachtet, unsichtbar bleiben.',
  },
  {
    question: 'Wie sollte ich die Anteile für Leben und Intelligenz wählen?',
    answer: 'Verwenden Sie niedrige Werte für ein pessimistisches Szenario mit seltenem Leben und höhere Werte, wenn Sie die Möglichkeit erkunden, dass Biologie oder Intelligenz auf stabilen bewohnbaren Welten häufig entstehen.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Projizierte nachweisbare Zivilisationen im Zeitverlauf',
    metricsLabel: 'Kennzahlen des Fermi-Modells',
    controlsLabel: 'Steuerung des Fermi-Modells',
    birthRate: 'Geburtenrate',
    peakCivilizations: 'Maximale Zivilisationen',
    finalCivilizations: 'Endgültige Zivilisationen',
    silenceScore: 'Stille-Score',
    starFormationRate: 'Sternentstehungsrate',
    habitableFraction: 'Anteil bewohnbarer Planeten',
    lifeFraction: 'Anteil der Lebensentstehung',
    intelligenceFraction: 'Anteil der Intelligenz',
    technologyFraction: 'Anteil der Technologie',
    signalLifetime: 'Signallebensdauer',
    filterSeverity: 'Filterstärke',
    horizonYears: 'Projektionshorizont',
    maxLabel: 'max',
    yearUnit: 'a',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'Ein praktischer Fermi-Paradoxon-Simulator für Annahmen der Drake-Gleichung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Fermi-Paradoxon fragt, warum der Nachthimmel still erscheint, obwohl die Milchstraße Hunderte Milliarden Sterne und viele Planeten enthält. Dieses Tool verwandelt diese Frage in ein interaktives Modell, indem es die Drake-Gleichung mit evolutionären Filtern und einer Zeitprojektion nachweisbarer Zivilisationen kombiniert.',
    },
    {
      type: 'paragraph',
      html: 'Statt einer einzelnen statischen Schätzung zeigt der Simulator, wie Zivilisationen entstehen, nachweisbar werden und wieder verschwinden können, bevor eine andere Gesellschaft die Chance hat, sie zu hören. Dieses Timing-Problem ist zentral für SETI, denn zwei technologische Kulturen müssen sich in Raum, Zeit und Signalverhalten überlappen.',
    },
    {
      type: 'title',
      text: 'Wie das Modell die Parameter der Drake-Gleichung nutzt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die ersten Regler bilden eine vereinfachte Drake-Pipeline. Die Sternentstehung liefert neue Sternsysteme. Ein Teil dieser Systeme bildet bewohnbare Planeten, ein Teil der bewohnbaren Planeten entwickelt Leben, ein Teil der belebten Welten bringt Intelligenz hervor, und ein Teil der intelligenten Spezies wird durch Technologie nachweisbar.',
    },
    {
      type: 'table',
      headers: ['Regler', 'Bedeutung', 'Effekt'],
      rows: [
        ['Sternentstehungsrate', 'Neue Sterne pro Jahr in der Milchstraße', 'Erhöht oder verringert das Rohangebot möglicher Systeme'],
        ['Anteil bewohnbarer Planeten', 'Anteil der Systeme mit stabilen Welten, auf denen flüssiges Wasser beständig sein kann', 'Steuert, wie viel der Galaxie in die biologische Pipeline eintritt'],
        ['Anteil der Lebensentstehung', 'Wahrscheinlichkeit, dass auf einer bewohnbaren Welt einfaches Leben beginnt', 'Testet Annahmen über seltenes versus häufiges Leben'],
        ['Anteil der Intelligenz', 'Wahrscheinlichkeit, dass Leben eine technologiefähige Kognition entwickelt', 'Stellt biologische und ökologische Engpässe dar'],
        ['Anteil der Technologie', 'Wahrscheinlichkeit, dass Intelligenz nachweisbare Signale produziert', 'Erfasst kulturelle, technische und kommunikative Entscheidungen'],
      ],
    },
    {
      type: 'title',
      text: 'Warum Filter eine belebte Galaxie leer erscheinen lassen können',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Regler für die Filterstärke fasst viele mögliche Versagenspunkte in einen einzigen Überlebensdruck zusammen: Asteroideneinschläge, instabile Klimata, Selbstzerstörung, Ressourcenkollaps, Risiken künstlicher Intelligenz oder andere Engpässe, die die nachweisbare Phase verkürzen. Ein starker Filter bedeutet nicht, dass Zivilisationen nie entstehen. Es bedeutet, dass sie selten lange sichtbar bleiben.',
    },
    {
      type: 'paragraph',
      html: 'Diese Unterscheidung ist wichtig. Die Milchstraße könnte in der Tiefe der Zeit Tausende technologischer Spezies hervorgebracht haben, während kaum Nachbarn in unserem eigenen schmalen Lauschfenster aktiv sind. Das Diagramm macht diesen Unterschied sichtbar, indem es nachweisbare Zivilisationen über den gewählten Projektionshorizont hinweg darstellt.',
    },
    {
      type: 'title',
      text: 'Den Stille-Score interpretieren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Stille-Score steigt, wenn die endgültige Anzahl überlappender nachweisbarer Zivilisationen niedrig ist. Hohe Stille beweist nicht, dass der Mensch allein ist; sie zeigt, dass die gewählten Annahmen eine Nichtentdeckung nicht überraschend machen. Niedrige Stille bedeutet, dass das Modell eine lautere Galaxie erwartet, sodass das Fehlen von Beweisen interessanter wird.',
    },
    {
      type: 'list',
      items: [
        '<strong>Hohe Geburtenrate plus niedriger Filter:</strong> eine dicht besiedelte Galaxie, in der SETI-Stille schwerer zu erklären ist.',
        '<strong>Hohe Geburtenrate plus hoher Filter:</strong> viele Zivilisationen entstehen, aber nur wenige überleben lange genug, um sich zu überlappen.',
        '<strong>Niedrige biologische Anteile:</strong> Leben oder Intelligenz ist selten, sodass Stille entstehen kann, bevor Technologie überhaupt relevant wird.',
        '<strong>Kurze Signallebensdauer:</strong> Zivilisationen mögen existieren, aber zu kurz senden, als dass Kontakt wahrscheinlich wäre.',
      ],
    },
    {
      type: 'title',
      text: 'Anwendungsfälle für Lehre, Debatte und SETI-Intuition',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Fermi-Paradoxon Filter-Labor ist nützlich im Astronomieunterricht, in der Astrobiologie-Diskussion, der Wissenschaftskommunikation und in philosophischen Debatten über die Zukunft der Menschheit. Es hilft, drei oft vermischte Fragen zu trennen: wie oft Zivilisationen entstehen, wie lange sie nachweisbar bleiben und ob ihre Zeitlinien mit unserer überlappen.',
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
