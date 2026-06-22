const slug = 'magnetron-lek-detector';
const description = 'Analyseer of je magnetron straling lekt door real-time interferentie op je WiFi-netwerk te meten. Een wetenschappelijk veiligheidshulpmiddel.';
const title = 'Magnetron Lek Detector: WiFi interferentie Visualisator';
const howTo = [
    {
      name: 'Maak verbinding met 2,4 GHz WiFi-netwerk',
      text: 'Zorg ervoor dat je mobiel of laptop NIET met de 5 GHz-band is verbonden, zodat de interferentie meetbaar is.',
    },
    {
      name: 'Start basis latentietest',
      text: 'Druk op de startknop met de magnetron uit om een stabiele verbindingsbasislijn vast te stellen.',
    },
    {
      name: 'Zet de magnetron aan',
      text: 'Verwarm een glas water gedurende 30-60 seconden en ga met je apparaat bij het toestel staan.',
    },
    {
      name: 'Analyseer real-time grafiek',
      text: 'Observeer of de latentie boven de 100-200 ms stijgt of dat er packetverlies optreedt terwijl het apparaat aan staat.',
    },
  ];
const faq = [
    {
      question: 'Hoe kan een website mijn magnetron detecteren?',
      answer: 'We gebruiken geen magische sensoren, maar netwerklatentie. Zowel 2,4 GHz WiFi als magnetronovens werken op dezelfde frequentie (ca. 2450 MHz). Als de afscherming van de magnetron faalt, genereert deze "ruis" die botst met de WiFi, waardoor de latentie (ping) drastisch toeneemt.',
    },
    {
      question: 'Is het gevaarlijk als mijn magnetron lekt?',
      answer: 'Kleine WiFi-interferentie is normaal en betekent geen onmiddellijk gezondheidsrisico, aangezien het vermogen snel afneemt met de afstand. Een massaal lek duidt echter op een slechte afdichting van de deur of het gaas, wat gecontroleerd moet worden voor technische veiligheid.',
    },
    {
      question: 'Waarom werkt de test niet met 5 GHz WiFi?',
      answer: 'Omdat 5 GHz WiFi op een veel hogere frequentieband werkt dan een magnetron. Om de test effectief te laten zijn, moet je apparaat verbonden zijn met het 2,4 GHz-netwerk van de router.',
    },
    {
      question: 'Wat betekenen de latentiepieken op de grafiek?',
      answer: 'Constante pieken tijdens het gebruik van de magnetron suggereren dat het elektromagnetische signaal "ontsnapt" en de lucht verzadigt, waardoor WiFi-datapakketten niet op tijd kunnen aankomen.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Gekopieerd',
    noHistory: 'Geen geschiedenis',
    load: 'Laden',
    delete: 'Verwijderen',
    microwaveDetection: 'Magnetron Detectie',
    shieldingAnalysis: 'Afschermingsanalyse',
    startTest: 'Start Test',
    stopTest: 'Stop Test',
    waitingForStart: 'Wachten op start...',
    detectingInterference: 'Interferentie detecteren...',
    baseLevel: 'Basisniveau',
    activeLevel: 'Actief Niveau',
    leakProbability: 'Lekkans',
    lowLeak: 'Laag',
    mediumLeak: 'Gemiddeld',
    highLeak: 'Hoog',
    pingLabel: 'Latentie (ms)',
    packetLossLabel: 'Packetverlies (%)',
    rfInterferenceMonitor: 'RF-interferentie Monitor',
    mwLeakDetector: 'MW LEK DETECTOR v2.0',
    jitterUnit: 'ms / jitter',
    systemReady: 'Systeem Gereed',
    physicalRequirement: 'Fysieke Vereiste',
    physicalDesc: 'Deze detector maakt gebruik van interferentie op de 2,4 GHz-band (de magnetronfrequentie). Om goed te werken, moet je verbonden zijn met een 2,4 GHz WiFi-netwerk (niet 5 GHz/6 GHz) of je telefoon dicht bij het apparaat houden.',
    understandStart: 'Begrepen, Start Scan',
    rfInterferenceTitle: 'Interferentie Monitor',
    connectToAnalyze: 'Verbind om thermische interferentie-analyse te starten.',
    audioFeedback: 'Audio Feedback',
    muteUnmute: 'DEMPEN / ONT-DEMPEN',
    static: 'Statisch',
  },
  seo: [
    {
      type: 'title',
      text: 'GOLFFYSICA: Lekt je magnetron werkelijk straling?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De magnetron is het meest onbegrepen apparaat in de moderne keuken. Gehaat door puristen en geliefd door pragmatici, verbergt het een constante strijd tussen ingesloten energie und de buitenwereld.',
    },
    {
      type: 'paragraph',
      html: 'Vanuit een puur fysiek standpunt is een magnetronoven een <strong>trilholte</strong> die is ontworpen om watermoleculen te bestoken met elektromagnetische straling op een zeer specifieke frequentie: <strong>2,45 GHz</strong>. Deze frequentie is niet willekeurig; het is noodzakelijk om de dipooloscillatie van waterdeeltjes te veroorzaken, wat warmte genereert door wrijving. Het probleem is dat dit precies dezelfde frequentie is als die wordt gebruikt door de 802.11b/g/n WiFi-standaard.',
    },
    {
      type: 'title',
      text: 'Elektromagnetische Interferentie (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Elk WiFi-apparaat dat op de 2,4 GHz-band werkt, concurreert om dezelfde "lucht" als je magnetron. In een perfecte oven zou de <strong>Kooi van Faraday</strong> (het metalen gaas dat je op de deur en binnenwanden ziet) 100% van de energie moeten binnenhouden.',
    },
    {
      type: 'paragraph',
      html: 'Geen enkele kooi is echter op de lange termijn perfect. Deurrubbers, magnetische sluitingen en metaalslijtage kunnen ervoor zorgen dat kleine hoeveelheden energie ontsnappen. Hoewel deze niveaus meestal ver onder de veiligheidslimieten voor mensen liggen, zijn ze <strong>gigantisch</strong> voor een WiFi-netwerkkaart, wat latentie, packetverlies en de karakteristieke "jitter" veroorzaakt die onze tool meet.',
    },
    {
      type: 'title',
      text: 'De Huis-tuin-en-keuken-kooi van Faraday-test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Er is een zeer eenvoudige analoge manier om de basisstatus van de afscherming van je oven te controleren, hoewel deze minder nauwkeurig is dan onze digitale jittermeting:',
    },
    {
      type: 'list',
      items: [
        '<strong>Stap 1 - De Telefoon:</strong> Plaats je mobiele telefoon in de magnetron (<strong>ZET DE OVEN ONDER GEEN BEDING AAN!</strong> Sluit alleen de deur).',
        '<strong>Stap 2 - De Oproep:</strong> Probeer die telefoon te bellen vanaf een ander apparaat. Als de telefoon overgaat, is de kooi van Faraday defect of niet afgestemd op mobiele frequenties. Als hij "buiten bereik" geeft, werkt de afscherming correct.',
      ],
    },
    {
      type: 'title',
      text: 'Mythen vs Wetenschappelijke Realiteit',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Magnetrons veranderen de moleculaire structuur van water"</strong> - ONWAAR. Magnetronstraling is <em>niet-ioniserend</em>. Het heeft niet genoeg energie om chemische verbindingen te verbreken of DNA te veranderen. Het trilt simpelweg de watermoleculen, waardoor hun kinetische energie (temperatuur) toeneemt.',
        '<strong>"Straling hoop zich op in voedsel"</strong> - ONWAAR. Microgolven zijn als licht: zodra je de schakelaar uitzet, zijn ze weg. Warm voedsel zendt geen magnetronstraling uit, alleen infrarode straling (warmte), net als een kampvuur of een pan.',
        '<strong>"Kijken naar het draaiende bord beschadigt je ogen"</strong> - GEDEELTELIJK WAAR. Het glas van de deur is ontworpen met een gaas dat golflengten van 2,45 GHz blokkeert. Als het gaas echter beschadigd is, houdt het glas de microgolven niet tegen. De ooglens is erg gevoelig voor hitte en heeft een slechte doorbloeding, dus langdurige directe blootstelling (nabij een lek) zou thermische grauwe staar kunnen veroorzaken.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe werkt deze digitale detector?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Onze tool meet straling niet direct (smartphones hebben hier geen sensoren voor), maar meet het <strong>belangrijkste symptoom</strong>. Wanneer een 2,45 GHz stralingsmolecuul uit de oven ontsnapt, "botst" het met het WiFi-signaal van je apparaat. Dit veroorzaakt:',
    },
    {
      type: 'list',
      items: [
        '<strong>Packet-hertransmissies:</strong> De router detecteert dat het bericht corrupt is aangekomen en moet het opnieuw verzenden, wat de latentie verhoogt.',
        '<strong>Jitter-variatie:</strong> Dit is de maatstaf voor instabiliteit in responstijd. Hoge jitter is een onmiskenbaar teken van massale externe interferentie.',
        '<strong>Prestatiedaling:</strong> De overdrachtssnelheid keldert door verzadiging van het radiospectrum.',
        '<strong>Achtergrondruis:</strong> De magnetron injecteert ruis die de "ruisvloer" verhoogt, waardoor het apparaat moeilijk onderscheid kan maken tussen echte data en radioactieve chaos.',
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

