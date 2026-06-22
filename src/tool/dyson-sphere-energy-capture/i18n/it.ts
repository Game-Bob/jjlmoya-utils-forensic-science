import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-energia-sfera-dyson';
const title = 'Simulatore di Cattura Energetica della Sfera di Dyson';
const description = 'Stima progetti di sciame, anello, guscio e nube di statiti di Dyson per stelle diverse. Calcola la potenza catturata, il raggio orbitale, la massa del materiale e la copertura necessaria per raggiungere una scala Kardashev target.';

const howTo = [
  {
    name: 'Scegli un tipo di stella',
    text: 'Inizia con una nana M, una stella simile al Sole, una stella di tipo A, una gigante rossa o una gigante blu. Il simulatore usa valori rappresentativi di luminosità e massa per stimare il raggio del collettore e il periodo orbitale.',
  },
  {
    name: 'Seleziona l\'architettura della megastruttura',
    text: 'Confronta uno sciame di Dyson, un anello equatoriale, un guscio rigido o una nuvola di specchi statiti. Ogni progetto ha diversa efficienza di cattura, densità di materiale e ipotesi di stabilità.',
  },
  {
    name: 'Imposta copertura e temperatura operativa',
    text: 'Aumenta la copertura per catturare più potenza stellare, poi regola la temperatura operativa per avvicinare o allontanare i collettori dalla stella.',
  },
  {
    name: 'Seleziona un obiettivo Kardashev',
    text: 'Usa il cursore dell\'obiettivo per vedere quanta parte della stella deve essere coperta per raggiungere un obiettivo di potenza a scala di civiltà.',
  },
];

const faq = [
  {
    question: 'Qual è la differenza tra una sfera di Dyson e uno sciame di Dyson?',
    answer: 'Una sfera di Dyson rigida è un guscio continuo attorno a una stella, mentre uno sciame di Dyson è una grande collezione di collettori orbitali indipendenti. La maggior parte delle discussioni ingegneristiche favorisce gli sciami perché un guscio solido sarebbe strutturalmente instabile ed estremamente intensivo in materiali.',
  },
  {
    question: 'Come sceglie il simulatore il raggio ottimale?',
    answer: 'Stima la distanza alla quale i collettori che irradiano da entrambi i lati raggiungono la temperatura operativa selezionata sotto la luminosità stellare scelta. I collettori più caldi possono orbitare più vicino, mentre quelli più freddi richiedono raggi maggiori.',
  },
  {
    question: 'Cosa significa qui la valutazione Kardashev?',
    answer: 'Il valore Kardashev viene calcolato dalla potenza catturata usando la forma logaritmica comune K = (log10(P) - 6) / 10, dove P è la potenza in watt. Un valore vicino a K1 rappresenta un uso energetico su scala planetaria, mentre K2 si avvicina alla produzione stellare completa.',
  },
  {
    question: 'La massa del materiale è realistica?',
    answer: 'È una stima educativa di primo ordine basata sull\'area del collettore, sulla densità areale e su un fattore di stabilità.I progetti reali necessiterebbero di mantenimento in posizione, trasmissione di potenza, perdite minerarie, ridondanza, dissipazione del calore e infrastrutture di fabbricazione.',
  },
  {
    question: 'Perché le stelle luminose richiedono sistemi di collettori così grandi?',
    answer: 'Le stelle ad alta luminosità spingono il raggio termico sicuro verso l\'esterno.Questo aumenta la superficie necessaria per una data frazione di copertura, quindi la domanda di materiale può crescere più velocemente di quanto la potenza catturata sembri intuitivamente.',
  },
  {
    question: 'Una civiltà può raggiungere il Tipo II di Kardashev con copertura parziale?',
    answer: 'Sì, se la stella ospite è abbastanza luminosa e i collettori sono efficienti. Intorno a una stella simile al Sole, raggiungere vicino al Tipo II richiede di catturare una grande frazione della luminosità solare, ma intorno a stelle più luminose, lo stesso obiettivo di potenza può richiedere una frazione di copertura inferiore.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualizzazione del collettore Dyson',
    starType: 'Tipo di stella',
    structureType: 'Struttura',
    coverage: 'Copertura del collettore',
    operatingTemp: 'Temperatura operativa',
    kardashevTarget: 'Obiettivo Kardashev',
    kardashevRating: 'Valutazione attuale',
    capturedPower: 'Potenza catturata',
    optimalRadius: 'Raggio ottimale',
    targetCoverage: 'Copertura obiettivo',
    materialMass: 'Massa del materiale',
    captureMeter: 'Progresso verso l\'obiettivo',
    statusReady: 'Regola il sistema per stimare la domanda del collettore.',
    statusUnderbuilt: 'La copertura è sotto il target Kardashev selezionato. Aggiungi collettori o scegli una stella più luminosa.',
    statusBalanced: 'Copertura e potenza stellare sono vicine all\'obiettivo di scala civilizzativa selezionato.',
    statusExtreme: 'Questa configurazione supera l\'obiettivo.Cattura una potenza enorme, ma la richiesta di materiale cresce rapidamente.',
    orbitalPeriod: 'Periodo orbitale',
    collectorArea: 'Area del collettore',
    mercuryMasses: '{value} masse di Mercurio',
    kilograms: '{value} kg',
    daysUnit: '{value} giorni',
    starMDwarf: 'Nana M',
    starSun: 'Stella di tipo G come il Sole',
    starA: 'Stella di tipo A',
    starRedGiant: 'Gigante rossa',
    starBlueGiant: 'Gigante blu',
    structureSwarm: 'Sciame di Dyson',
    structureRing: 'Anello equatoriale',
    structureShell: 'Guscio rigido',
    structureStatite: 'Nuvola di specchi statiti',
  },
  seo: [
    { type: 'title', text: 'Simulatore di Cattura Energetica della Sfera di Dyson', level: 2 },
    { type: 'paragraph', html: 'Una sfera di Dyson non è solo un\'immagine di fantascienza di una stella all\'interno di un guscio. È una famiglia di possibili concetti di megastruttura per intercettare la luminosità stellare: sciami di satelliti, anelli equatoriali, nuvole sottili di specchi e il famoso ma problematico guscio rigido. Questo simulatore trasforma quelle idee in numeri in modo da poter confrontare come il tipo di stella, la temperatura del collettore, la copertura e il progetto strutturale cambiano il bilancio energetico.' },
    {
      type: 'paragraph', html: 'Il calcolatore stima la potenza catturata, il raggio termico orbitale, l\'area del collettore, il periodo orbitale, la massa del materiale e la copertura necessaria per un obiettivo di scala Kardashev scelto.È costruito per studenti, costruttori di mondi, comunicatori scientifici e chiunque cerchi di capire perché le civiltà di Tipo II sono difficili: la sfida non è solo la potenza, ma l\'area, il calore, l\'estrazione mineraria, la stabilità e la logistica orbitale.'
    },
    { type: 'title', text: 'Come viene stimato il raggio di Dyson', level: 3 },
    {
      type: 'paragraph', html: 'Il raggio ottimale viene calcolato dalla luminosità stellare e dalla temperatura operativa del collettore. Un collettore vicino a una stella luminosa riceve un flusso intenso e deve funzionare caldo o respingere enormi quantità di calore. Allontanarsi riduce lo stress termico, ma l\'area del collettore richiesta cresce con il quadrato della distanza.Questo compromesso spiega perché la stessa frazione di copertura può essere modesta intorno a una debole nana M ed enorme intorno a una gigante blu.'
    },
    { type: 'title', text: 'Confronto tra Sciame di Dyson, Anello, Guscio e Nuvola di Statiti', level: 3 },
    {
      type: 'list', items: [
        '<strong>Sciame di Dyson:</strong> molti collettori orbitali indipendenti. È l\'architettura su larga scala più plausibile perché può essere costruita gradualmente e non richiede un guscio stellare rigido.',
        '<strong>Anello equatoriale:</strong> una fascia di collettori più stretta con minore efficienza di copertura. È più facile da immaginare come prima megastruttura, ma non può catturare l\'intera produzione stellare senza diventare uno sciame più ampio.',
        '<strong>Guscio rigido:</strong> iconicamente visivo ma meccanicamente sfavorevole. Un guscio attorno a una stella ha gravi problemi di stabilità e materiale, quindi il simulatore gli assegna massa elevata e bassa stabilità.',
        '<strong>Nuvola di specchi statiti:</strong> riflettori ultraleggeri tenuti parzialmente dalla pressione di radiazione. Riduce la domanda di materiale ma ha una tolleranza termica inferiore e requisiti di controllo impegnativi.'
      ]
    }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};