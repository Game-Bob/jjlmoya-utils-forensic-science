const slug = 'mikrowellen-leck-detektor';
const description = 'Analysieren Sie, ob Ihre Mikrowelle Strahlung verliert, indem Sie Echtzeit-Interferenzen in Ihrem WLAN-Netzwerk messen. Ein wissenschaftliches Sicherheitswerkzeug.';
const title = 'Mikrowellen Leck Detektor: WLAN Interferenz Visualisierer';
const howTo = [
    {
      name: 'Mit 2,4-GHz-WLAN verbinden',
      text: 'Stellen Sie sicher, dass Ihr Handy oder Laptop NICHT mit dem 5-GHz-Band verbunden ist, damit die Interferenz messbar ist.',
    },
    {
      name: 'Basis-Latenztest starten',
      text: 'Drücken Sie die Starttaste bei ausgeschalteter Mikrowelle, um eine stabile Verbindungsgrundlinie zu erstellen.',
    },
    {
      name: 'Mikrowelle einschalten',
      text: 'Erhitzen Sie ein Glas Wasser für 30-60 Sekunden und stellen Sie sich mit Ihrem Gerät in die Nähe des Geräts.',
    },
    {
      name: 'Echtzeit-Grafik analysieren',
      text: 'Beobachten Sie, ob die Latenz über 100-200 ms steigt oder ob Paketverluste auftreten, während das Gerät läuft.',
    },
  ];
const faq = [
    {
      question: 'Wie kann eine Website meine Mikrowelle erkennen?',
      answer: 'Wir verwenden keine magischen Sensoren, sondern die Netzwerklatenz. Sowohl 2,4-GHz-WLAN als auch Mikrowellenherde arbeiten auf der gleichen Frequenz (ca. 2450 MHz). Wenn die Abschirmung der Mikrowelle versagt, erzeugt sie ein "Rauschen", das mit dem WLAN kollidiert und die Latenz (Ping) drastisch erhöht.',
    },
    {
      question: 'Ist es gefährlich, wenn meine Mikrowelle undicht ist?',
      answer: 'Geringe WLAN-Interferenzen sind normal und stellen kein unmittelbares Gesundheitsrisiko dar, da die Leistung mit der Entfernung schnell abnimmt. Ein massives Leck deutet jedoch auf eine schlechte Abdichtung der Tür oder des Gitters hin, was aus Gründen der technischen Sicherheit überprüft werden sollte.',
    },
    {
      question: 'Warum funktioniert der Test nicht mit 5-GHz-WLAN?',
      answer: 'Weil 5-GHz-WLAN auf einem viel höheren Frequenzband arbeitet als eine Mikrowelle. Damit der Test effektiv ist, muss Ihr Gerät mit dem 2,4-GHz-Netzwerk des Routers verbunden sein.',
    },
    {
      question: 'Was bedeuten die Latenzspitzen in der Grafik?',
      answer: 'Ständige Spitzen während des Mikrowellenbetriebs deuten darauf hin, dass das elektromagnetische Signal "entweicht" und die Luft sättigt, wodurch WLAN-Datenpakete nicht rechtzeitig ankommen können.',
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
    microwaveDetection: 'Mikrowellenerkennung',
    shieldingAnalysis: 'Abschirmungsanalyse',
    startTest: 'Test starten',
    stopTest: 'Test stoppen',
    waitingForStart: 'Warten auf Start...',
    detectingInterference: 'Interferenz wird erkannt...',
    baseLevel: 'Basispegel',
    activeLevel: 'Aktiver Pegel',
    leakProbability: 'Leckwahrscheinlichkeit',
    lowLeak: 'Niedrig',
    mediumLeak: 'Mittel',
    highLeak: 'Hoch',
    pingLabel: 'Latenz (ms)',
    packetLossLabel: 'Paketverlust (%)',
    rfInterferenceMonitor: 'HF-Interferenz-Monitor',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / Jitter',
    systemReady: 'System bereit',
    physicalRequirement: 'Physikalische Voraussetzung',
    physicalDesc: 'Dieser Detektor nutzt Interferenzen im 2,4-GHz-Band (der Mikrowellenfrequenz). Um ordnungsgemäß zu funktionieren, stellen Sie sicher, dass Sie mit einem 2,4-GHz-WLAN-Netzwerk verbunden sind (nicht 5 GHz/6 GHz) oder verwenden Sie Ihr Telefon in der Nähe des Geräts.',
    understandStart: 'Verstanden, Scan starten',
    rfInterferenceTitle: 'Interferenz-Monitor',
    connectToAnalyze: 'Verbinden Sie sich, um die thermische Interferenzanalyse zu starten.',
    audioFeedback: 'Audio-Feedback',
    muteUnmute: 'STUMM / LAUT',
    static: 'Statisch',
  },
  seo: [
    {
      type: 'title',
      text: 'WELLENPHYSIK: Verliert Ihre Mikrowelle wirklich Strahlung?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Mikrowelle ist das am meisten missverstandene Gerät in der modernen Küche. Von Puristen gehasst und von Pragmatikern geliebt, verbirgt sie einen ständigen Kampf zwischen eingeschlossener Energie und der Außenwelt.',
    },
    {
      type: 'paragraph',
      html: 'Aus rein physikalischer Sicht ist ein Mikrowellenherd ein <strong>Hohlraumresonator</strong>, der darauf ausgelegt ist, Wassermoleküle mit elektromagnetischer Strahlung bei einer ganz bestimmten Frequenz zu bombardieren: <strong>2,45 GHz</strong>. Diese Frequenz ist nicht willkürlich; sie ist notwendig, um die Dipolschwingung von Wasserpartikeln zu bewirken und durch Reibung Wärme zu erzeugen. Das Problem ist, dass dies genau die gleiche Frequenz ist, die vom WLAN-Standard 802.11b/g/n verwendet wird.',
    },
    {
      type: 'title',
      text: 'Elektromagnetische Interferenz (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jedes WLAN-Gerät, das im 2,4-GHz-Band betrieben wird, konkurriert mit Ihrer Mikrowelle um die gleiche "Luft". In einem perfekten Ofen sollte der <strong>Faradaysche Käfig</strong> (das Metallgitter, das Sie an der Tür und den Innenwänden sehen) 100% der Energie einschließen.',
    },
    {
      type: 'paragraph',
      html: 'Kein Käfig ist jedoch auf Dauer perfekt. Türdichtungen, Magnetverschlüsse und Metallabnutzung können dazu führen, dass kleine Mengen Energie entweichen. Obwohl diese Werte normalerweise weit unter den Sicherheitsgrenzwerten für Menschen liegen, sind sie für eine WLAN-Netzwerkkarte <strong>gigantisch</strong> und verursachen Latenz, Paketverlust und den charakteristischen "Jitter", den unser Werkzeug misst.',
    },
    {
      type: 'title',
      text: 'Der hausgemachte Faradaysche Käfigtest',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es gibt eine sehr einfache analoge Möglichkeit, den Grundzustand der Abschirmung Ihres Ofens zu überprüfen, obwohl dies weniger genau ist als unsere digitale Jitter-Messung:',
    },
    {
      type: 'list',
      items: [
        '<strong>Schritt 1 - Das Telefon:</strong> Legen Sie Ihr Mobiltelefon in die Mikrowelle (<strong>SCHALTEN SIE DEN OFEN UNTER KEINEN UMSTÄNDEN EIN!</strong> Schließen Sie nur die Tür).',
        '<strong>Schritt 2 - Der Anruf:</strong> Versuchen Sie, dieses Telefon von einem anderen Gerät aus anzurufen. Wenn das Telefon klingelt, ist der Faradaysche Käfig defekt oder nicht auf Mobilfunkfrequenzen abgestimmt. Wenn es "außer Reichweite" anzeigt, funktioniert die Abschirmung ordnungsgemäß.',
      ],
    },
    {
      type: 'title',
      text: 'Mythen vs. wissenschaftliche Realität',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Mikrowellen verändern die molekulare Struktur von Wasser"</strong> - FALSCH. Mikrowellenstrahlung ist <em>nicht-ionisierend</em>. Sie hat nicht genug Energie, um chemische Bindungen aufzubrechen oder die DNA zu verändern. Sie bringt lediglich Wassermoleküle zum Schwingen und erhöht so deren kinetische Energie (Temperatur).',
        '<strong>"Strahlung reichert sich in Lebensmitteln an"</strong> - FALSCH. Mikrowellen sind wie Licht: Sobald man den Schalter ausschaltet, sind sie weg. Heiße Lebensmittel senden keine Mikrowellenstrahlung aus, sondern nur Infrarotstrahlung (Wärme), genau wie ein Lagerfeuer oder eine Pfanne.',
        '<strong>"Das Beobachten der rotierenden Platte schadet den Augen"</strong> - TEILWEISE WAHR. Das Türglas ist mit einem Gitter versehen, das 2,45-GHz-Wellenlängen blockiert. Wenn das Gitter jedoch beschädigt ist, hält das Glas die Mikrowellen nicht auf. Die Augenlinse ist sehr hitzeempfindlich und schlecht durchblutet, sodass eine längere direkte Bestrahlung (in der Nähe eines Lecks) thermischen Katarakt verursachen könnte.',
      ],
    },
    {
      type: 'title',
      text: 'Wie funktioniert dieser digitale Detektor?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unser Werkzeug misst die Strahlung nicht direkt (Smartphones haben dafür keine Sensoren), sondern das <strong>Hauptsymptom</strong>. Wenn ein 2,45-GHz-Strahlungsmolekül aus dem Ofen entweicht, "kollidiert" es mit dem WLAN-Signal Ihres Geräts. Dies verursacht:',
    },
    {
      type: 'list',
      items: [
        '<strong>Paket-Neuübertragungen:</strong> Der Router erkennt, dass die Nachricht beschädigt angekommen ist und muss sie erneut senden, was die Latenz erhöht.',
        '<strong>Jitter-Variation:</strong> Dies ist das Maß für die Instabilität der Antwortzeit. Hoher Jitter ist ein eindeutiges Zeichen für massiv externe Interferenzen.',
        '<strong>Leistungsabfall:</strong> Die Übertragungsgeschwindigkeit sinkt aufgrund der Sättigung des Funkspektrums drastisch.',
        '<strong>Hintergrundrauschen:</strong> Die Mikrowelle speist Rauschen ein, das den "Rauschteppich" erhöht, was es dem Gerät erschwert, zwischen echten Daten und radioaktivem Chaos zu unterscheiden.',
      ],
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

