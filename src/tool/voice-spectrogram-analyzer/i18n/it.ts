import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "analizzatore-spettrogramma-voce-online";
const title = "Analizzatore di Spettrogramma della Voce Online";
const description = "Visualizza frequenza, tempo, intensità ed stima dei formanti di due campioni audio in modo privato nel tuo browser.";

const howTo = [
  {
    "name": "Carica due campioni",
    "text": "Seleziona file audio locali o usa gli studi sintetici."
  },
  {
    "name": "Imposta il limite di frequenza",
    "text": "Scegli 4, 6 o 8 kHz a seconda del tipo di voce."
  },
  {
    "name": "Leggi lo spettrogramma",
    "text": "Analizza tempo, frequenza e guide dei formanti."
  },
  {
    "name": "Ascolta e confronta",
    "text": "Confronta le medie F1, F2 e F3 a scopo educativo."
  }
];

const faq = [
  {
    "question": "Cosa mostra uno spettrogramma vocale?",
    "answer": "Uno spettrogramma mostra il tempo sull asse orizzontale, la frequenza su quello verticale e l intensità tramite la luminosità."
  },
  {
    "question": "Le mie registrazioni vengono caricate su un server?",
    "answer": "No. Tutti i calcoli avvengono in locale nel tuo browser."
  },
  {
    "question": "Cosa rappresentano F1, F2 e F3?",
    "answer": "Sono stime didattiche delle risonanze del tratto vocale."
  },
  {
    "question": "Questo strumento può identificare un parlante?",
    "answer": "No. La somiglianza spettrale non costituisce una prova biometrica."
  },
  {
    "question": "Perché i formanti variano cambiando il limite di frequenza?",
    "answer": "La scala di frequenza modifica la separazione visiva dei picchi."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "Solo locale",
    "privacyNote": "Le tue registrazioni rimangono sul tuo dispositivo. L analisi avviene interamente nel browser.",
    "loadHeading": "Carica due suoni da analizzare",
    "sampleALabel": "Campione A",
    "sampleBLabel": "Campione B",
    "chooseFileLabel": "Seleziona audio",
    "replaceFileLabel": "Sostituisci audio",
    "dropHint": "Trascina un file audio qui (max 25 MB). Vengono analizzati i primi 20 secondi.",
    "presetHint": "Prova subito i due studi sintetici di vocali.",
    "presetWarmLabel": "Studio vocale calda",
    "presetBrightLabel": "Studio vocale brillante",
    "emptySampleLabel": "In attesa di audio",
    "readySampleLabel": "Piastra spettrale generata",
    "decodingSampleLabel": "Elaborazione piastra spettrale",
    "errorSampleLabel": "Impossibile analizzare il campione",
    "durationLabel": "Durata",
    "ceilingHeading": "Limite di frequenza",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "Mosaico spettrogrammi vocali specchiati",
    "mirrorViewLabel": "Piastre specchiate",
    "splitViewLabel": "Piastre parallele",
    "playALabel": "Riproduci campione A",
    "playBLabel": "Riproduci campione B",
    "stopLabel": "Interrompi",
    "timeAxisLabel": "Tempo",
    "frequencyAxisLabel": "Frequenza",
    "intensityLegendLabel": "Un inchiostro più luminoso indica maggiore energia",
    "formantLegendLabel": "Guida formanti stimati",
    "sampleAEmptyCanvasLabel": "Carica il campione A per visualizzare lo spettro",
    "sampleBEmptyCanvasLabel": "Carica il campione B per visualizzare lo spettro",
    "comparisonHeading": "Analisi delle risonanze spettrali",
    "comparisonNote": "Valori medi dei picchi spettrali. Le differenze sono misurazioni fisiche, non una percentuale di corrispondenza o prova di identità.",
    "formantOneLabel": "Prima regione di risonanza (F1)",
    "formantTwoLabel": "Seconda regione di risonanza (F2)",
    "formantThreeLabel": "Terza regione di risonanza (F3)",
    "averageLabel": "Media",
    "differenceLabel": "Differenza",
    "unavailableLabel": "Non disponibile",
    "statusEmptyLabel": "Carica un campione per iniziare",
    "statusSingleLabel": "Una piastra è pronta",
    "statusReadyLabel": "Entrambe le piastre spettrali sono pronte",
    "limitError": "Il file supera il limite di analisi locale di 25 MB.",
    "decodeError": "Il browser non ha potuto decodificare questo formato audio.",
    "browserError": "L API Web Audio non è disponibile in questo browser.",
    "educationalNote": "Strumento di visualizzazione didattico. Le guide dei formanti non devono essere utilizzate per l identificazione del parlante."
},
  seo: [
    { type: 'title', text: "Come uno spettrogramma trasforma il suono in immagine", level: 2 },
    { type: 'paragraph', html: "Uno <strong>spettrogramma vocale</strong> trasforma una registrazione in una mappa con il tempo sull asse orizzontale e la frequenza su quello verticale. Un energia più forte appare come colore più luminoso. Questo rende vocali tenute, armoniche, silenzi e risonanze più facili da osservare rispetto a una forma d onda classica. La visualizzazione aiuta l analisi spettrale." },
    { type: 'paragraph', html: "L analizzatore divide il segnale in brevi finestre sovrapposte, applica una finestra di Hamming e calcola la distribuzione dell energia per frequenza tramite la FFT. Una finestra breve individua il momento esatto di un evento, mentre la risoluzione in frequenza mostra dove si concentra l energia. A causa del principio di indeterminazione, esiste sempre un compromesso tra risoluzione temporale e frequenziale. Queste impostazioni determinano la definizione visiva." },
    { type: 'diagnostic', variant: 'info', title: "Elaborazione privata nel browser", html: "Visualizza frequenza, tempo, intensità ed stima dei formanti di due campioni audio in modo privato nel tuo browser." },
    { type: 'stats', columns: 3, items: [
      { value: "Tempo", label: "Lettura da sinistra a destra" },
      { value: "Hz", label: "Posizione in frequenza" },
      { value: "Energia", label: "Rappresentata come luminosità" }
    ] },
    { type: 'title', text: "Leggere i formanti in modo corretto", level: 3 },
    { type: 'paragraph', html: "I formanti sono regioni di risonanza modellate dal tratto vocale. F1 e F2 sono usati in fonetica per descrivere l altezza e il punto di articolazione delle vocali. Questo analizzatore traccia picchi smussati in tre regioni di frequenza in modo che l utente possa collegare le bande visibili al comportamento di F1, F2 e F3." },
    { type: 'paragraph', html: "La misurazione professionale dei formanti utilizza solitamente una codifica predittiva lineare (LPC) adattata al parlante. Le armoniche del fondamentale, il rumore di fondo, il riverbero e la compressione audio possono spostare le stime semplici. Utilizza queste guide come riferimenti didattici e controlla sempre lo spettro sottostante." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","da 180 a 1000 Hz","Prima regione di risonanza, associata all apertura della vocale"],["F2","da 900 a 3000 Hz","Seconda regione di risonanza, associata alla posizione della lingua"],["F3","da 2000 a 4500 Hz","Regione di risonanza superiore, influenzata dal tratto vocale"]] },
    { type: 'title', text: "L impatto delle impostazioni di frequenza", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Limite basso (4 kHz)", description: "Migliore vista per basse frequenze", points: ["Utile per vocali", "Può escludere alte frequenze", "Non garantisce maggiore precisione"] },
      { title: "Limite alto (6/8 kHz)", description: "Più dettagli superiori", highlight: true, points: ["Per voci brillanti", "Mostra fricative", "Comprime bande inferiori"] }
    ] },
    { type: 'title', text: "Un confronto responsabile tra due campioni", level: 3 },
    { type: 'paragraph', html: "Il confronto tra due campioni è particolarmente utile quando le registrazioni contengono la stessa vocale o frase in condizioni acustiche simili. Le differenze mostrate sono distanze fisiche assolute. Non costituiscono una percentuale di somiglianza né una prova biometrica di identità." },
    { type: 'list', items: ["<strong>Confrontare lo stesso contenuto parlato:</strong> vocali o parole identiche facilitano il confronto.","<strong>Uniformare le condizioni di registrazione:</strong> microfono e acustica influenzano notevolmente lo spettro.","<strong>Ascoltare con il cursore:</strong> collega gli eventi visivi al suono esatto.","<strong>Evitare affermazioni di identità:</strong> uno spettrogramma simile non dimostra l identità del parlante."] },
    { type: 'summary', title: "Sintesi dell analizzatore", items: ["Generare uno spettrogramma audio in locale da file compatibili.","Esplorare due campioni in piastre specchiate o parallele.","Imparare come variano l energia spettrale e i formanti.","Mantenere un approccio descrittivo e didattico."] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
