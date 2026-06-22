const howTo = [
    {
      name: 'Prepara l\'immagine della piastra',
      text: 'Posiziona la tua piastra Petri su uno sfondo scuro o usa un transilluminatore in modo che le colonie contrastino chiaramente.',
    },
    {
      name: 'Identifica i tipi di colonie',
      text: 'Usa diversi colori di marcatura per raggruppare le colonie per morfologia, colore o dimensione.',
    },
    {
      name: 'Contrassegna ogni colonia',
      text: 'Clicca su ogni colonia visibile. Lo strumento numera automaticamente ogni clic per evitare ripetizioni o omissioni.',
    },
    {
      name: 'Calcola la concentrazione finale',
      text: 'Inserisci il volume inoculato e il fattore di diluizione per ottenere il risultato finale in UFC/ml o UFC/g.',
    },
  ];
const faq = [
    {
      question: 'Cos\'è il conteggio delle UFC?',
      answer: 'Le Unità Formanti Colonia (UFC) sono una misura che stima il numero di batteri o cellule fungine vitali in un campione. Si presuppone che ogni colonia visibile provenga da una singola cellula o da un gruppo di cellule.',
    },
    {
      question: 'Perché un contatore digitale è migliore del conteggio manuale?',
      answer: 'Il conteggio digitale evita l\'errore umano di "perdere il segno" mentre si contrassegnano visivamente le colonie. Il nostro strumento consente inoltre di differenziare i tipi di colonie per colore, facilitando l\'analisi di piastre miste.',
    },
    {
      question: 'Come si calcolano le UFC per millilitro?',
      answer: 'Il numero di colonie contate viene moltiplicato per l\'inverso del fattore di diluizione. Ad esempio, se si contano 30 colonie in una diluizione 1:100, il campione originale contiene 3000 UFC/ml.',
    },
    {
      question: 'Quando una piastra è considerata "non contabile"?',
      answer: 'Nella microbiologia standard, se ci sono più di 250-300 colonie, la piastra è considerata troppo affollata (Too Numerous To Count, TNTC) e i dati sono inattendibili a causa della competizione tra le colonie.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'conta-colonie';
const title = 'Conta Colonie: Strumento Digitale per il Conteggio delle UFC su Piastre Petri';
const description = 'Strumento digitale per contare le colonie batteriche su piastre Petri. Differenzia i tipi, evita errori e calcola le UFC con precisione.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Clicca per caricare la tua piastra Petri',
    uploadSubtitle: 'Carica una foto della tua piastra e inizia a contare le colonie',
    currentModeLabel: 'Modalità Corrente',
    typeA: 'Tipo A',
    typeB: 'Tipo B',
    colonyType: 'Tipo di Colonia',
    counting: 'Conteggio',
    totalCFU: 'UFC Totali',
    undo: 'Annulla Ultimo',
    clearAll: 'Cancella Tutto',
    infoClick: 'Clicca sulla piastra per contrassegnare le colonie',
    infoChange: 'Cambia tipo prima di contrassegnare',
    confirmClear: 'Sei sicuro di voler cancellare tutte le colonie contrassegnate?',
  },
  seo: [
    {
      type: 'title',
      text: 'Microbiologia Digitale: Conteggio Preciso delle Colonie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il conteggio delle colonie batteriche su piastre Petri è una tecnica fondamentale in microbiologia. Tradizionalmente eseguita con un contatore manuale e un pennarello, è facile perdere il conto o contrassegnare la stessa colonia due volte. Questo strumento digitale elimina tali errori e consente la differenziazione visiva tra i tipi di colonie.',
    },
    {
      type: 'title',
      text: 'Perché il Conteggio delle Colonie è Importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il numero di colonie su una piastra è direttamente proporzionale alla concentrazione di microrganismi vitali nel campione originale. Questi dati sono critici in:',
    },
    {
      type: 'list',
      items: [
        '<strong>Controllo Qualità Alimentare:</strong> Rilevamento di contaminazioni batteriche.',
        '<strong>Ricerca Farmaceutica:</strong> Valutazione dell\'efficacia degli antibiotici.',
        '<strong>Diagnosi Clinica:</strong> Quantificazione delle infezioni nei campioni dei pazienti.',
        '<strong>Biotecnologia:</strong> Ottimizzazione delle colture di produzione per proteine ricombinanti.',
      ],
    },
    {
      type: 'title',
      text: 'Unità Formanti Colonia (UFC)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si assume che ogni colonia visibile su una piastra provenga da una singola cellula vitale. Ecco perché sono chiamate <strong>UFC</strong> (Unità Formanti Colonia).',
    },
    {
      type: 'paragraph',
      html: '<strong>Formula della Concentrazione:</strong><br><code>UFC/mL = (Colonie Contate × Fattore di Diluizione) / Volume Inoculato</code>',
    },
    {
      type: 'title',
      text: 'Migliori Pratiche per il Conteggio',
      level: 3,
    },
    {
      type: 'title',
      text: 'Intervallo di Conteggio',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'L\'intervallo ideale per il conteggio manuale è compreso tra <strong>30 e 300 colonie</strong> per piastra. Al di sotto di 30, l\'errore statistico è troppo elevato. Al di sopra di 300, le colonie iniziano a fondersi e la distinzione individuale diventa impossibile.',
    },
    {
      type: 'title',
      text: 'Tipi di Colonie',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Sui terreni selettivi o differenziali, è comune osservare diverse morfologie di colonie:',
    },
    {
      type: 'list',
      items: [
        '<strong>Tipo A (Verde acqua/Verde):</strong> Colonie grandi e mucoidi, tipiche dei batteri Gram-negativi fermentanti il lattosio.',
        '<strong>Tipo B (Rosa/Viola):</strong> Colonie piccole e traslucide, non fermentanti.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Il nostro strumento consente di differenziare fino a due tipi di colonie con colori distinti, facilitando il conteggio differenziale senza la necessità di marcatori fisici.',
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

