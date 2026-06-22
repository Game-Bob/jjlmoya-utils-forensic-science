const howTo = [
    {
      name: 'Plattenbild vorbereiten',
      text: 'Platzieren Sie Ihre Petri-Schale vor einem dunklen Hintergrund oder verwenden Sie einen Illuminator, damit sich die Kolonien deutlich abheben.',
    },
    {
      name: 'Kolonietypen identifizieren',
      text: 'Verwenden Sie verschiedene Markierungsfarben, um Kolonien nach Morphologie, Farbe oder Größe zu gruppieren.',
    },
    {
      name: 'Jede Kolonie markieren',
      text: 'Klicken Sie auf jede sichtbare Kolonie. Das Werkzeug nummeriert jeden Klick automatisch, um Wiederholungen oder das Übersehen von Kolonien zu vermeiden.',
    },
    {
      name: 'Endkonzentration berechnen',
      text: 'Geben Sie das ausplattierte Volumen und den Verdünnungsfaktor ein, um das Endergebnis in KBE/ml oder KBE/g zu erhalten.',
    },
  ];
const faq = [
    {
      question: 'Was ist die KBE-Zählung?',
      answer: 'Die Zählung der koloniebildenden Einheiten (KBE) ist ein Maß zur Schätzung der Anzahl lebensfähiger Bakterien- oder Pilzzellen in einer Probe. Es wird davon ausgegangen, dass jede sichtbare Kolonie aus einer einzelnen Zelle oder Zellgruppe entstanden ist.',
    },
    {
      question: 'Warum ist ein digitaler Zähler besser als die manuelle Zählung?',
      answer: 'Ein digitaler Zähler verhindert menschliche Fehler beim "Verlieren des Überblicks" während der visuellen Markierung von Kolonien. Unser Werkzeug ermöglicht zusätzlich die farbliche Unterscheidung von Kolonietypen, was die Analyse von Mischplatten erleichtert.',
    },
    {
      question: 'Wie werden die KBE pro Milliliter berechnet?',
      answer: 'Die Anzahl der gezählten Kolonien wird mit dem Kehrwert des Verdünnungsfaktors multipliziert. Wenn Sie beispielsweise 30 Kolonien in einer 1:100-Verdünnung zählen, enthält die ursprüngliche Probe 3000 KBE/ml.',
    },
    {
      question: 'Wann gilt eine Platte als "nicht auszählbar"?',
      answer: 'In der Standardmikrobiologie gilt eine Platte als zu dicht besiedelt (Too Numerous To Count, TNTC), wenn sie mehr als 250-300 Kolonien aufweist. Die Daten sind dann aufgrund der Konkurrenz zwischen den Kolonien unzuverlässig.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kolonienzaehler';
const title = 'Kolonienzähler: Digitales Werkzeug zur KBE Zählung für Petri Schalen';
const description = 'Digitales Werkzeug zum Zählen von Bakterienkolonien auf Petri-Schalen. Unterscheiden Sie Typen, vermeiden Sie Fehler und berechnen Sie die KBE präzise.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Klicken Sie hier, um Ihre Petri-Schale hochzuladen',
    uploadSubtitle: 'Laden Sie ein Foto Ihrer Schale hoch und beginnen Sie mit der Zählung der Kolonien',
    currentModeLabel: 'Aktueller Modus',
    typeA: 'Typ A',
    typeB: 'Typ B',
    colonyType: 'Kolonietyp',
    counting: 'Zählung',
    totalCFU: 'Gesamt-KBE',
    undo: 'Rückgängig machen',
    clearAll: 'Alles löschen',
    infoClick: 'Klicken Sie auf die Schale, um Kolonien zu markieren',
    infoChange: 'Typ vor dem Markieren ändern',
    confirmClear: 'Sind Sie sicher, dass Sie alle markierten Kolonien löschen möchten?',
  },
  seo: [
    {
      type: 'title',
      text: 'Digitale Mikrobiologie: Präzise Koloniezählung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Zählen von Bakterienkolonien auf Petri-Schalen ist eine grundlegende Technik in der Mikrobiologie. Da sie traditionell mit einem Handzähler und einem Stift durchgeführt wird, verliert man leicht den Überblick oder markiert dieselbe Kolonie doppelt. Dieses digitale Werkzeug eliminiert diese Fehler und ermöglicht eine visuelle Unterscheidung zwischen den Kolonietypen.',
    },
    {
      type: 'title',
      text: 'Warum die Koloniezählung wichtig ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Anzahl der Kolonien auf einer Schale ist direkt proportional zur Konzentration der lebensfähigen Mikroorganismen in der ursprünglichen Probe. Diese Daten sind von entscheidender Bedeutung in folgenden Bereichen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Lebensmittelqualitätskontrolle:</strong> Erkennung von bakterieller Kontamination.',
        '<strong>Pharmazeutische Forschung:</strong> Bewertung der Wirksamkeit von Antibiotika.',
        '<strong>Klinische Diagnose:</strong> Quantifizierung von Infektionen in Patientenproben.',
        '<strong>Biotechnologie:</strong> Optimierung von Produktionskulturen für rekombinante Proteine.',
      ],
    },
    {
      type: 'title',
      text: 'Koloniebildende Einheiten (KBE)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es wird davon ausgegangen, dass jede sichtbare Kolonie auf einer Schale von einer einzelnen lebensfähigen Zelle stammt. Deshalb werden sie als <strong>KBE</strong> (Koloniebildende Einheiten) bezeichnet.',
    },
    {
      type: 'paragraph',
      html: '<strong>Konzentrationsformel:</strong><br><code>KBE/mL = (Gezählte Kolonien × Verdünnungsfaktor) / Ausplattiertes Volumen</code>',
    },
    {
      type: 'title',
      text: 'Best Practices für die Zählung',
      level: 3,
    },
    {
      type: 'title',
      text: 'Zählbarer Bereich',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Der ideale Bereich für die manuelle Zählung liegt bei <strong>30 bis 300 Kolonien</strong> pro Schale. Unter 30 ist der statistische Fehler zu hoch. Über 300 beginnen die Kolonien zu verschmelzen, was eine individuelle Unterscheidung unmöglich macht.',
    },
    {
      type: 'title',
      text: 'Kolonietypen',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Auf selektiven oder differenzierenden Medien ist es üblich, mehrere Koloniemorphologien zu sehen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Typ A (Blaugrün/Grün):</strong> Große, mukoide Kolonien, typisch für Gram-negative, laktosefermentierende Bakterien.',
        '<strong>Typ B (Rosa/Lila):</strong> Kleine, durchscheinende Kolonien, Nicht-Fermenter.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Unser Werkzeug ermöglicht die Unterscheidung von bis zu zwei Kolonietypen mit unterschiedlichen Farben, was die differenzielle Zählung ohne den Einsatz physischer Markierungen erleichtert.',
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

