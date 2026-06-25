import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensischer-vortest-blut-simulator';
const title = 'Simulator für forensische Blut Vortests';
const description = 'Simulieren Sie forensische Blut-Vortests mit Kastle-Meyer- und Luminol-Reagenzien. Unterscheiden Sie echtes Blut von häufigen Fehlalarmen.';

const howTo = [
  {
    name: 'Probe auswählen',
    text: 'Wählen Sie eine Testprobe aus der Gradilla, die entweder Blut oder ein mögliches Falsch-Positiv-Material darstellt.'
  },
  {
    name: 'Testmethode wählen',
    text: 'Entscheiden Sie sich für den Kastle-Meyer-Farbtest oder den Luminol-Leuchttest.'
  },
  {
    name: 'Reagenzien auftragen',
    text: 'Geben Sie Tropfen des Kastle-Meyer-Reagenzes und danach Wasserstoffperoxid hinzu oder tragen Sie die Luminollösung direkt auf.'
  },
  {
    name: 'Reaktion auswerten',
    text: 'Beobachten Sie Farbänderungen oder blaues Leuchten im Dunkeln, um die Reaktion als richtig positiv, falsch positiv oder negativ einzustufen.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Warum heißt es Vortest?',
    answer: 'Vortests sind vorläufige Tests, die die mögliche Präsenz von Blut anzeigen. Sie sind sehr empfindlich, aber nicht absolut spezifisch, weshalb sie durch Bestätigungstests im Labor überprüft werden müssen.'
  },
  {
    key: 'faq-2',
    question: 'Was verursacht Fehlalarme beim Kastle-Meyer-Test?',
    answer: 'Der Test nutzt die peroxidaseähnliche Aktivität des Häms. Andere Oxidationsmittel, Metallionen (wie Eisen im Rost) oder Pflanzenperoxidasen (in Kartoffeln) können die Reaktion ebenfalls katalysieren.'
  },
  {
    key: 'faq-3',
    question: 'Wie funktioniert die Luminol-Reaktion?',
    answer: 'Luminol reagiert mit Wasserstoffperoxid in Gegenwart eines Katalysators wie dem Eisen im Hämoglobin. Die Reaktion regt Luminol an, das beim Zurückfallen in den Grundzustand blaues Licht abgibt.'
  },
  {
    key: 'faq-4',
    question: 'Kann Haushaltsbleiche ein falsches Ergebnis liefern?',
    answer: 'Ja, Natriumhypochlorit ist ein starkes Oxidationsmittel. Es oxidiert Phenolphthalin oder Luminol direkt ohne Katalysator, wobei die Reaktion schnell verblasst.'
  },
  {
    key: 'faq-5',
    question: 'Was unterscheidet Vortests von Bestätigungstests?',
    answer: 'Vortests sind schnell, günstig und hochsensibel, um Spuren am Tatort zu finden. Bestätigungstests sind hochspezifisch und beweisen die Präsenz von Humanblut zweifelsfrei.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Bluttest Simulator',
    desc: 'Führen Sie virtuelle Experimente mit Luminol- und Kastle-Meyer-Reagenzien durch, um Blut nachzuweisen und Fehlalarme zu analysieren.',
    configTitle: 'Laborsteuerung',
    sampleLabel: 'Probe auswählen',
    reagentLabel: 'Reagenz auswählen',
    lightsLabel: 'Beleuchtung',
    btnLightsOff: 'Licht ausschalten',
    btnLightsOn: 'Licht einschalten',
    btnReset: 'Schale zurücksetzen',
    resultsTitle: 'Testergebnisse',
    sampleBlood: 'Blutprobe (Kontrolle)',
    sampleRust: 'Rost (Eisenoxid)',
    sampleBleach: 'Bleichmittel (Natriumhypochlorit)',
    samplePotato: 'Kartoffel (Pflanzenperoxidase)',
    sampleSaliva: 'Speichelprobe',
    reagentKM: 'Kastle-Meyer-Reagenz',
    reagentH2O2: 'Wasserstoffperoxid (H2O2)',
    reagentLuminol: 'Luminollösung',
    resultTruePositive: 'Richtig positiv (Blut nachgewiesen)',
    resultFalsePositive: 'Falsch positiv (Fremdkatalysator)',
    resultNegative: 'Negative Reaktion',
    statusLabel: 'Reaktionsstatus',
    reactionLabel: 'Reaktionserklärung',
    dropReagentBtn: 'Tropfen auftragen',
    activeCompounds: 'Aktive Verbindungen',
    reactionSpeed: 'Reaktionsgeschwindigkeit',
    reactionDuration: 'Reaktionsdauer',
    specimenBase: 'Probenbasis',
    kmPending: 'Kastle-Meyer-Reagenz aufgetragen. Wasserstoffperoxid (H2O2) hinzufügen, um den Farbumschlag zu katalysieren.',
    h2o2Only: 'Wasserstoffperoxid aufgetragen. Keine sichtbare Reaktion ohne Kastle-Meyer-Indikator.',
    noReaction: 'Keine Reaktion beobachtet. Die Probe bleibt klar.',
    luminolBlood: 'Sofortiges intensives blaues Leuchten im Dunkeln beobachtet. Häm-Gruppen im Hämoglobin haben das Luminol katalytisch oxidiert. Richtig positiv.',
    luminolBleach: 'Sofortiges, sehr intensives blaues Leuchten beobachtet, das extrem schnell (unter 2 Sekunden) verblasste. Bleichmittel oxidiert Luminol direkt. Falsch positiv.',
    luminolRust: 'Schwaches, mattes blaues Leuchten beobachtet. Metallionen im Rost katalysieren die Oxidation schwach. Verblasst allmählich. Falsch positiv.',
    luminolPotato: 'Keine Lumineszenz. Pflanzenperoxidasen katalysieren unter diesen Bedingungen die Luminol-Oxidation nicht. Negativ.',
    luminolNegative: 'Keine Lumineszenz im Dunkeln beobachtet. Die Verbindung ist für die Luminol-Oxidation nicht katalytisch. Negativ.',
    kmBlood: 'Sofortige rosa Färbung nach Zugabe von Wasserstoffperoxid. Häm im Blut katalysierte die Reduktion von Peroxid und oxidierte Phenolphthalin zu Phenolphthalein. Richtig positiv.',
    kmBleach: 'Sofortiger starker rosa Farbumschlag. Natriumhypochlorit oxidiert Phenolphthalin direkt ohne Peroxid-Katalysator. Falsch positiv.',
    kmRust: 'Langsame, schwache bräunlich-rosa Färbung nach einigen Sekunden. Eisenoxide katalysieren die Reaktion viel langsamer. Falsch positiv.',
    kmPotato: 'Langsame, schwache rosa Färbung nach einer Verzögerung. Pflanzenperoxidasen katalysieren die Reaktion schwach. Falsch positiv.',
    kmNegative: 'Kein Farbumschlag beobachtet. Die Lösung bleibt farblos. Negativ.'
  },
  seo: [
    {
      type: 'title',
      text: 'Vollständiger Leitfaden für forensische Blut Vortests im Labor',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Forensische Vortests sind hochempfindliche Screening-Verfahren, die an Tatorten eingesetzt werden, um potenzielle Blutspuren aufzuspüren. Bevor aufwendige DNA-Analysen durchgeführt werden, nutzen Ermittler diese Schnelltests auf Kleidung, Waffen und Oberflächen. Da sie auf der peroxidaseähnlichen Aktivität des Häms basieren, sind sie vorläufig: Ein positives Ergebnis deutet auf Blut hin, erfordert jedoch eine labortechnische Bestätigung. Diese Vortests sind von entscheidender Bedeutung, um wertvolle Zeit und Ressourcen bei der Beweissicherung zu sparen. Sie helfen den Ermittlern vor Ort, verdächtige rote Flecken schnell einzuordnen und biologische Spuren für die spätere forensische Genetik gezielt auszuwählen.'
    },
    {
      type: 'title',
      text: 'Der Kastle Meyer Farbumschlagstest',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Der Kastle-Meyer-Test (KM) nutzt Phenolphthalin, die reduzierte farblose Form von Phenolphthalein. Zuerst wird das Reagenz auf die Probe aufgetragen. Bei Vorliegen von Blut wirkt Häm als Katalysator. Nach Zugabe von Wasserstoffperoxid (H2O2) oxidiert das Phenolphthalin schnell zu Phenolphthalein, was zu einer rosa Färbung führt. Ein verzögerter Umschlag nach mehr als 15-20 Sekunden gilt als negativ. Diese Reaktion zeichnet sich durch eine extrem hohe Empfindlichkeit aus und kann selbst winzige, unsichtbare Spuren nachweisen. Dennoch bleibt die Reaktion präsumtiv, da chemische Oxidationsmittel den Nachweis direkt aktivieren können.'
    },
    {
      type: 'title',
      text: 'Luminol und die Chemilumineszenz',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Luminol zeigt Chemilumineszenz (Leuchten im Dunkeln), wenn es in alkalischer Lösung mit einem Oxidationsmittel und einem Metallkatalysator reagiert. Das Eisen im Hämoglobin katalysiert diese Reaktion hervorragend. Es entsteht ein angeregtes Aminophthalat-Ion, das beim Entspannen blaues Licht abgibt. Für die Sichtbarkeit muss die Umgebung vollständig abgedunkelt sein. Luminol ist ein unverzichtbares Werkzeug, um gereinigte Tatorte zu untersuchen, da es selbst nach intensiver Reinigung noch mit unsichtbaren Blutrückständen reagiert. Die blaue Lumineszenz lässt sich fotografisch dokumentieren, um das Spurenmuster für die Rekonstruktion des Tathergangs festzuhalten.'
    },
    {
      type: 'table',
      headers: ['Substanz', 'Kastle-Meyer-Reaktionsprofil', 'Luminol-Leuchtprofil', 'Forensische Bewertung'],
      rows: [
        ['Blut-Kontrollprobe', 'Sofortige rosa Färbung bei H2O2-Zugabe.', 'Intensives, stabiles blaues Leuchten.', 'Richtig positiv. Häm wirkt als effizienter Katalysator.'],
        ['Haushaltsbleiche', 'Sofortiges Rosa noch vor H2O2-Zugabe.', 'Sehr intensives, kurzlebiges Leuchten.', 'Falsch positiv. Starke Oxidationsmittel reagieren direkt.'],
        ['Eisenoxid (Rost)', 'Langsame, bräunlich-rosa Färbung.', 'Sehr schwaches, mattes Leuchten.', 'Falsch positiv. Freie Eisenionen katalysieren schwach.'],
        ['Kartoffel (Peroxidase)', 'Langsame, schwache rosa Färbung.', 'Keine Lumineszenz feststellbar.', 'Falsch positiv (KM) / Negativ (Luminol).']
      ]
    },
    {
      type: 'title',
      text: 'Unterscheidung von Blut und häufigen Fehlalarmen',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Die Erkennung von Falsch-Positiven ist ein wesentlicher Bestandteil der forensischen Ausbildung. Starke Reinigungsmittel mit Natriumhypochlorit (Bleichmittel) oxidieren Indikatoren direkt und simulieren Blut. Experten unterscheiden sie jedoch durch die Analyse der Reaktionsdynamik: Bleichmittel reagiert ohne Peroxid im KM-Test, und seine Chemilumineszenz mit Luminol zerfällt fast augenblicklich. Pflanzenperoxidasen lassen sich durch Hitze inaktivieren, während Hämoglobin thermostabil bleibt. Diese forensische Differenzierung stellt sicher, dass nur echte biologische Spuren als Beweismittel vor Gericht zugelassen werden.'
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
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
