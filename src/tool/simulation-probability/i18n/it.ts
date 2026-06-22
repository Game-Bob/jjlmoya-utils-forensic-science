const description = 'Analizza se la nostra realtà è una simulazione usando l\'argomento del trilemma di Nick Bostrom. Calcola la probabilità esistenziale con 4 parametri chiave.';
const slug = 'calcolatore-probabilita-simulazione';
const title = 'Calcolatore di Probabilità di Simulazione: Vivi in un Universo Virtuale?';
const howTo = [
    {
      name: 'Regola il Progresso Tecnologico',
      text: 'Stima la probabilità che l\'umanità raggiunga il livello post-umano. Il 50% è neutro; aumenta se credi che l\'IA e l\'informatica continueranno a progredire esponenzialmente.',
    },
    {
      name: 'Imposta il Tasso di Sopravvivenza',
      text: 'Considera la probabilità che l\'umanità non si autodistrugga. Fattori come guerre, cambiamenti climatici, pandemie. Valori alti = ottimismo sul nostro futuro.',
    },
    {
      name: 'Valuta l\'Interesse nel Simulare',
      text: 'Se l\'umanità raggiungerà il livello post-umano, vorrà creare simulazioni del proprio passato? Considera le motivazioni: ricerca scientifica, intrattenimento, conservazione storica.',
    },
    {
      name: 'Interpreta il risultato',
      text: 'Osserva come cambiano le probabilità. Risultati > 90% suggeriscono che la simulazione è quasi inevitabile se i presupposti vengono soddisfatti. Gioca con i parametri per esplorare diversi futuri.',
    },
  ];
const faq = [
    {
      question: 'In cosa consiste esattamente l\'argomento di Bostrom?',
      answer: 'Nick Bostrom propone che se una civiltà post-umana ha abbastanza potenza di calcolo, potrebbe creare milioni di simulazioni di universi precedenti. Se ciò accade, il numero di esseri simulati sarebbe massicciamente superiore rispetto agli esseri biologici originali. Statisticamente, quindi, è più probabile che tu sia simulato piuttosto che originale.',
    },
    {
      question: 'Probabilità elevate significano che siamo sicuramente una simulazione?',
      answer: 'No. Probabilità elevate suggeriscono che si tratta di una seria possibilità da considerare, ma non ne sono la prova. L\'argomento si basa su supposizioni sul futuro della tecnologia che potrebbero non realizzarsi.',
    },
    {
      question: 'In che modo sapere di essere una simulazione ci influenzerebbe?',
      answer: 'Filosoficamente, molti sostengono che non cambierebbe nulla di fondamentale. Se tu e i tuoi cari venite simulati insieme, le vostre esperienze, emozioni e relazioni rimangono reali e vissute. L\'esperienza vissuta è ciò che conta, non il substrato.',
    },
    {
      question: 'Esistono prove scientifiche del fatto che siamo in una simulazione?',
      answer: 'Non ci sono prove conclusive. Alcuni fisici indicano anomalie nella meccanica quantistica (quantizzazione, entanglement) come possibili "ottimizzazioni computazionali", ma si tratta di interpretazioni speculative.',
    },
    {
      question: 'Quale valore dovrei assegnare a "N" (scala della simulazione)?',
      answer: 'Dipende dalle tue convinzioni sul futuro dell\'informatica. Valori bassi (100-1000) presuppongono limitazioni delle risorse. Valori alti (milioni) presuppongono una potenza di calcolo praticamente illimitata. La maggior parte delle discussioni scientifiche utilizza valori compresi tra 1000 e 1 trilione.',
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
    simulationParameters: 'Parametri di Simulazione',
    fpLabel: 'fp',
    fpSub: 'Progresso Tecnologico',
    flLabel: 'fl',
    flSub: 'Sopravvivenza della Specie',
    fiLabel: 'fi',
    fiSub: 'Interesse nel Simulare',
    nLabel: 'N',
    nSub: 'Scala della Simulazione',
    probabilityTitle: 'Probabilità di Simulazione',
    trilemmaResult: 'Verdetto del Trilemma',
    scenario1: 'Scenario 1: Estinzione',
    scenario2: 'Scenario 2: Disinteresse',
    scenario3: 'Scenario 3: Siamo Simulati',
    fpDescription: 'Probabilità che l\'umanità raggiunga la capacità tecnica di simulare universi dotati di coscienza.',
    flDescription: 'Probabilità di evitare il collasso (estinzione, guerra) prima di raggiungere il livello post-umano.',
    fiDescription: 'Percentuale di civiltà avanzate che decidono di creare simulazioni dei propri antenati.',
    nDescription: 'Numero di mondi simulati che ogni civiltà avanzata solitamente esegue simultaneamente.',
    verdictDetail: 'I dati suggeriscono che è estremamente probabile che la tua coscienza sia un processo software.',
  },
  seo: [
    {
      type: 'title',
      text: 'Viviamo in una simulazione? La scienza dietro l\'argomento di Nick Bostrom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'idea che la nostra realtà possa essere una costruzione artificiale, una simulazione informatica estremamente avanzata, è passata dalla fantascienza a un serio dibattito filosofico e scientifico. Nel 2003, il filosofo Nick Bostrom dell\'Università di Oxford ha pubblicato un articolo intitolato <em>"Vivete in una simulazione informatica?"</em>, in cui proponeva un argomento basato su un trilemma che sfida la nostra percezione dell\'esistenza.',
    },
    {
      type: 'paragraph',
      html: 'Questo calcolatore della probabilità di simulazione utilizza parametri chiave derivati dall\'ipotesi di Bostrom per stimare le possibilità che la tua coscienza sia, in effetti, il risultato di un processo software eseguito da una civiltà post-umana.',
    },
    {
      type: 'title',
      text: 'I Pilastri dell\'Argomento della Simulazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'argomento di Bostrom non afferma che siamo in una simulazione, ma che almeno una delle seguenti tre proposizioni è quasi certamente vera:',
    },
    {
      type: 'list',
      items: [
        '<strong>Estinzione Prematura:</strong> La specie umana si estinguerà prima di raggiungere uno stadio post-umano capace di eseguire simulazioni degli antenati.',
        '<strong>Disinteresse Tecnologico:</strong> Qualsiasi civiltà post-umana non avrà interesse a eseguire simulazioni dei propri antenati per ragioni etiche o ricreative.',
        '<strong>Simulazione Ubiqua:</strong> Quasi certamente viviamo in una simulazione perché il numero di menti simulate supera massicciamente il numero di menti biologiche originali.',
      ],
    },
    {
      type: 'title',
      text: 'Come Interpretare i Parametri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per utilizzare correttamente questo strumento, è essenziale capire cosa rappresentano le variabili del modello:',
    },
    {
      type: 'table',
      headers: ['Variabile', 'Concetto', 'Significato'],
      rows: [
        ['<strong>fp</strong>', 'Progresso Tecnologico', 'Probabilità che una civiltà raggiunga la capacità di simulare menti.'],
        ['<strong>fl</strong>', 'Tasso di Sopravvivenza', 'Probabilità che la civiltà non si autodistrugga prima di raggiungere quel punto.'],
        ['<strong>fi</strong>', 'Interesse nel Simulare', 'Percentuale di civiltà che decidono di usare il loro potere per creare mondi virtuali.'],
        ['<strong>N</strong>', 'Scala della Simulazione', 'Numero totale di simulazioni che una singola civiltà post-umana creerebbe.'],
      ],
    },
    {
      type: 'title',
      text: 'Perché la probabilità è solitamente così alta?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se assumiamo che una civiltà post-umana avrebbe un\'immensa potenza di calcolo (come quella di una Sfera di Dyson o di un Cervello di Giove), il numero <strong>N</strong> (simulazioni) potrebbe essere dell\'ordine dei miliardi. Se <em>N</em> è molto grande, anche con bassi valori di interesse (<em>fi</em>), il numero di esseri simulati supererà di ordini di grandezza gli esseri originali.',
    },
    {
      type: 'title',
      text: 'Evidenze e Limiti Computazionali',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dalla fisica quantistica alla cosmologia, alcuni scienziati cercano "glitch" o limiti nella risoluzione della nostra realtà. Se l\'universo ha una lunghezza minima (Lunghezza di Planck) o comportamenti che sembrano ottimizzazioni del codice (come l\'entanglement quantistico), l\'ipotesi guadagna sostenitori nel campo della fisica digitale.',
    },
    {
      type: 'title',
      text: 'Riflessione Etica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se scoprissimo di essere una simulazione, cambierebbe la nostra morale? Per Bostrom, ciò che conta è l\'esperienza della coscienza. Una mente simulata soffre e ama proprio come una biologica.',
    },
    {
      type: 'title',
      text: 'Casi d\'Uso del Calcolatore',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Educazione Scientifica:</strong> Comprendere i modelli probabilistici applicati alla cosmologia.',
        '<strong>Filosofia Contemporanea:</strong> Esplorare il trilemma di Bostrom in modo interattivo.',
        '<strong>Futurologia:</strong> Analizzare l\'impatto del tasso di sopravvivenza della specie sul nostro destino.',
        '<strong>Curiosità Esistenziale:</strong> Valutare le proprie convinzioni sul futuro della tecnologia.',
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

