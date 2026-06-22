const description = 'Analizza se il tuo microonde emette radiazioni misurando l\'interferenza in tempo reale sulla tua rete WiFi. Uno strumento di sicurezza scientifica.';
const slug = 'rilevatore-perdite-microonde';
const title = 'Rilevatore Perdite Microonde: Visualizzatore Interferenze WiFi';
const howTo = [
    {
      name: 'Connettiti a una rete WiFi a 2.4 GHz',
      text: 'Assicurati che il tuo cellulare o laptop NON sia connesso alla banda a 5 GHz, in modo che l\'interferenza sia misurabile.',
    },
    {
      name: 'Avvia il test della latenza di base',
      text: 'Premi il pulsante di avvio con il microonde spento per stabilire una linea di base della connessione stabile.',
    },
    {
      name: 'Accendi il microonde',
      text: 'Scalda un bicchiere d\'acqua per 30-60 secondi e resta vicino all\'apparecchio con il tuo dispositivo.',
    },
    {
      name: 'Analizza il grafico in tempo reale',
      text: 'Osserva se la latenza sale sopra i 100-200 ms o se si verifica una perdita di pacchetti mentre l\'apparecchio è in funzione.',
    },
  ];
const faq = [
    {
      question: 'Come può un sito web rilevare il mio microonde?',
      answer: 'Non usiamo sensori magici, ma la latenza di rete. Sia il WiFi a 2.4 GHz che i forni a microonde operano alla stessa frequenza (circa 2450 MHz). Se la schermatura del microonde fallisce, genera "rumore" che collide con il WiFi, aumentando drasticamente la latenza (ping).',
    },
    {
      question: 'È pericoloso se il mio microonde ha una perdita?',
      answer: 'Piccole interferenze WiFi sono normali e non implicano un rischio immediato per la salute, poiché la potenza decade rapidamente con la distanza. Tuttavia, una perdita massiccia indica una scarsa tenuta della porta o della rete, che dovrebbe essere controllata per sicurezza tecnica.',
    },
    {
      question: 'Perché il test non funziona con il WiFi a 5 GHz?',
      answer: 'Perché il WiFi a 5 GHz opera su una banda di frequenza molto più alta di quella di un microonde. Affinché il test sia efficace, il tuo dispositivo deve essere connesso alla rete a 2.4 GHz del router.',
    },
    {
      question: 'Cosa significano i picchi di latenza sul grafico?',
      answer: 'Picchi costanti durante il funzionamento del microonde suggeriscono che il segnale elettromagnetico stia "fuggendo" e saturando l\'aria, impedendo ai pacchetti di dati WiFi di arrivare in tempo.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copiato',
    noHistory: 'Nessuna cronologia',
    load: 'Carica',
    delete: 'Elimina',
    microwaveDetection: 'Rilevamento Microonde',
    shieldingAnalysis: 'Analisi Schermatura',
    startTest: 'Avvia Test',
    stopTest: 'Ferma Test',
    waitingForStart: 'In attesa di avvio...',
    detectingInterference: 'Rilevamento interferenze...',
    baseLevel: 'Livello Base',
    activeLevel: 'Livello Attivo',
    leakProbability: 'Probabilità Perdita',
    lowLeak: 'Bassa',
    mediumLeak: 'Media',
    highLeak: 'Alta',
    pingLabel: 'Latenza (ms)',
    packetLossLabel: 'Pacchetti Persi (%)',
    rfInterferenceMonitor: 'Monitor Interferenze RF',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / jitter',
    systemReady: 'Sistema Pronto',
    physicalRequirement: 'Requisiti Fisici',
    physicalDesc: 'Questo rilevatore utilizza l\'interferenza nella banda a 2.4GHz (la frequenza del microonde). Per funzionare correttamente, assicurati di essere connesso a una rete WiFi a 2.4GHz (non 5GHz/6GHz) o usa il telefono vicino all\'apparecchio.',
    understandStart: 'Capito, Avvia Scansione',
    rfInterferenceTitle: 'Monitor Interferenze',
    connectToAnalyze: 'Connettiti per avviare l\'analisi dell\'interferenza termica.',
    audioFeedback: 'Feedback Audio',
    muteUnmute: 'MUTO / AUDIO',
    static: 'Statico',
  },
  seo: [
    {
      type: 'title',
      text: 'FISICA DELLE ONDE: Il tuo microonde perde davvero radiazioni?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il microonde è l\'elettrodomestico più incompreso della cucina moderna. Odiato dai puristi e amato dai pragmatici, nasconde una battaglia costante tra energia contenuta e mondo esterno.',
    },
    {
      type: 'paragraph',
      html: 'Da un punto di vista puramente fisico, un forno a microonde è un <strong>risonatore a cavità</strong> progettato per bombardare le molecole d\'acqua con radiazioni elettromagnetiche a una frequenza molto specifica: <strong>2,45 GHz</strong>. Questa frequenza non è arbitraria; è necessaria per causare l\'oscillazione dipolare delle particelle d\'acqua, generando calore per attrito. Il problema è che questa è esattamente la stessa frequenza utilizzata dallo standard WiFi 802.11b/g/n.',
    },
    {
      type: 'title',
      text: 'Interferenza Elettromagnetica (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Qualsiasi dispositivo WiFi operante nella banda a 2,4 GHz compete per lo stesso "spazio" del tuo microonde. In un forno perfetto, la <strong>Gabbia di Faraday</strong> (la rete metallica che vedi sulla porta e sulle pareti interne) dovrebbe contenere il 100% dell\'energia.',
    },
    {
      type: 'paragraph',
      html: 'Tuttavia, nessuna gabbia è perfetta a lungo termine. Guarnizioni delle porte, chiusure magnetiche e usura dei metalli possono consentire la fuga di piccole quantità di energia. Sebbene questi livelli siano solitamente ben al di sotto dei limiti di sicurezza per l\'uomo, sono <strong>giganteschi</strong> per una scheda di rete WiFi, causando latenza, perdita di pacchetti e il caratteristico "jitter" misurato dal nostro strumento.',
    },
    {
      type: 'title',
      text: 'Il Test Casalingo della Gabbia di Faraday',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esiste un modo analogico molto semplice per verificare lo stato di base della schermatura del tuo forno, sebbene sia meno accurato della nostra misurazione digitale del jitter:',
    },
    {
      type: 'list',
      items: [
        '<strong>Passaggio 1 - Il Telefono:</strong> Metti il tuo cellulare all\'interno del microonde (<strong>IN NESSUN CASO ACCENDERE IL FORNO!</strong> Chiudi solo la porta).',
        '<strong>Passaggio 2 - La Chiamata:</strong> Prova a chiamare quel telefono da un altro dispositivo. Se il telefono squilla, la gabbia di Faraday è difettosa o non sintonizzata per le frequenze cellulari. Se risulta "irraggiungibile", la schermatura funziona correttamente.',
      ],
    },
    {
      type: 'title',
      text: 'Miti vs Realtà Scientifica',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Le microonde alterano la struttura molecolare dell\'acqua"</strong> - FALSO. La radiazione a microonde è <em>non ionizzante</em>. Non ha energia sufficiente per rompere i legami chimici o alterare il DNA. Semplicemente fa vibrare le molecole d\'acqua, aumentandone l\'energia cinetica (temperatura).',
        '<strong>"La radiazione si accumula nei cibi"</strong> - FALSO. Le microonde sono come la luce: una volta spento l\'interruttore, spariscono. Il cibo caldo non emette radiazioni a microonde, ma solo radiazioni infrarosse (calore) proprio come un falò o una padella.',
        '<strong>"Guardare il piatto che gira danneggia gli occhi"</strong> - PARZIALMENTE VERO. Il vetro della porta è progettato con una rete che blocca le lunghezze d\'onda a 2,45 GHz. Tuttavia, se la rete è danneggiata, il vetro non fermerà le microonde. Il cristallino dell\'occhio è molto sensibile al calore e ha una cattiva circolazione sanguigna, quindi un\'esposizione diretta prolungata (vicino a una perdita) potrebbe causare cataratta termica.',
      ],
    },
    {
      type: 'title',
      text: 'Come funziona questo rilevatore digitale?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il nostro strumento non misura direttamente la radiazione (gli smartphone non hanno sensori per questo), ma ne misura il <strong>sintomo principale</strong>. Quando una molecola di radiazione a 2,45 GHz fuoriesce dal forno, "entra in collisione" con il segnale WiFi del tuo dispositivo. Ciò causa:',
    },
    {
      type: 'list',
      items: [
        '<strong>Ritrasmissione dei pacchetti:</strong> Il router rileva che il messaggio è arrivato corrotto e deve reinviarlo, aumentando la latenza.',
        '<strong>Variazione del Jitter:</strong> Questa è la misura dell\'instabilità nel tempo di risposta. Un jitter elevato è un segno inequivocabile di una massiccia interferenza esterna.',
        '<strong>Calo delle prestazioni:</strong> La velocità di trasferimento precipita a causa della saturazione dello spettro radio.',
        '<strong>Rumore di fondo:</strong> Il microonde inietta rumore che alza il "rumore di fondo", rendendo difficile per il dispositivo distinguere tra dati reali e caos radioattivo.',
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

