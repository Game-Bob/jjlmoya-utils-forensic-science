import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-origine-traiettoria-macchie-sangue';
const title = 'Simulatore tridimensionale dell origine di traiettoria delle macchie di sangue';
const description = 'Modella macchie di sangue ellittiche su un piano verticale, stima gli angoli di impatto e visualizza le traiettorie proiettate in una scena 3D interattiva.';

const howTo = [
  { name: 'Inserisci o regola le macchie', text: 'Usa la tabella o la superficie 2D per definire la posizione, la larghezza, la lunghezza e l orientamento dell asse maggiore di ciascuna macchia.' },
  { name: 'Verifica gli angoli di impatto', text: 'Il calcolatore stima l angolo di impatto dal rapporto larghezza/lunghezza utilizzando la funzione arcoseno.' },
  { name: 'Ispeziona la convergenza 3D', text: 'Ruota la vista per confrontare le traiettorie proiettate e la sfera di origine stimata.' },
  { name: 'Controlla l incertezza', text: 'Usa il valore di dispersione come indicatore di avvertimento pratico: una separazione ampia delle linee indica che l origine tracciata è meno stabile.' },
];

const faq = [
  { question: 'Uno strumento web può determinare la reale origine del flusso sanguigno?', answer: 'No. Può insegnare e valutare le relazioni geometriche, ma le conclusioni su un caso reale richiedono metodi convalidati, documentazione della scena, calibrazione della scala e analisi qualificata delle tracce ematiche.' },
  { question: 'Perché l angolo di impatto viene calcolato da larghezza e lunghezza?', answer: 'Per una macchia ellittica ideale, il seno dell angolo di impatto è approssimato dividendo la larghezza per la lunghezza. Le macchie reali possono essere distorte dalla consistenza della superficie, dal flusso, dal trasferimento o da errori di misurazione.' },
  { question: 'Cosa rappresenta la sfera di origine 3D?', answer: 'Rappresente la stima di convergenza dei minimi quadrati tra le linee di traiettoria proiettate, non una sorgente puntiforme garantita.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Metrico',
    imperial: 'Imperiale',
    unitsLabel: 'Unità',
    addStain: 'Aggiungi macchia',
    reset: 'Reimposta',
    surface: 'Superficie di impatto',
    viewport3dLabel: 'Area di visualizzazione 3D',
    stainLabel: 'Macchia',
    table: 'Misurazioni',
    origin: 'Origine stimata',
    spread: 'Dispersione delle linee',
    confidence: 'Confidenza',
    impact: 'Angolo di impatto',
    high: 'Alta',
    medium: 'Media',
    low: 'Bassa',
    x: 'X',
    y: 'Y',
    width: 'Larghezza',
    length: 'Lunghezza',
    rotation: 'Rotazione',
    remove: 'Rimuovi',
    cm: 'cm',
    inch: 'in',
    degree: 'gradi',
    rotateHint: 'Trascina la vista 3D per ruotare la ricostruzione.',
    disclaimer: 'Ricostruzione solo a scopo didattico. Interpreta con misurazioni della scena convalidate e incertezza documentata.',
  },
  seo: [
    { type: 'title', text: 'Come funziona un analizzatore 3D dell origine delle macchie di sangue', level: 2 },
    { type: 'paragraph', html: 'Un analizzatore dell origine delle macchie di sangue aiuta gli utenti a esplorare una delle domande geometriche fondamentali nell analisi delle macchie di sangue: <strong>dove nello spazio potrebbe essersi trovata la sorgente di sangue quando le goccioline hanno colpito una superficie?</strong> Questo strumento modella le macchie come ellissi su un piano verticale, calcola un angolo di impatto dal rapporto tra larghezza e lunghezza di ciascuna, proietta le traiettorie all indietro in una scena 3D e stima una regione di convergenza pratica.' },
    { type: 'diagnostic', variant: 'warning', title: 'Avvertenza forense', html: 'Il risultato è un ausilio per la ricostruzione, non la conclusione di un caso. Le macchie reali possono essere influenzate dalla struttura del supporto, spruzzi secondari, coagulazione, flusso, pulizia, trasferimento, errori di prospettiva e documentazione incompleta della scala.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(W/L)', label: 'Formula dell angolo di impatto' },
      { value: '3+', label: 'Macchie indipendenti consigliate' },
      { value: '3D', label: 'Spazio di convergenza delle traiettorie' },
    ] },
    { type: 'title', text: 'Formula dell angolo di impatto', level: 3 },
    { type: 'paragraph', html: 'Per una macchia ellittica semplice, l angolo di impatto viene comunemente approssimato come <strong>arcsin(larghezza / lunghezza)</strong>. Una macchia larga 1 cm e lunga 2 cm produce quindi un angolo di impatto di 30 gradi. Questa relazione è utile perché converte un segno piatto in un inclinazione della traiettoria, ma presuppone che la macchia misurata sia rappresentativa e non distorta.' },
    { type: 'code', ariaLabel: 'Calcolo dell angolo di impatto', code: 'angolo di impatto = arcsin(larghezza macchia / lunghezza macchia)\nesempio: arcsin(1 cm / 2 cm) = 30 gradi' },
    { type: 'paragraph', html: 'Questa è una comune intenzione di ricerca dietro a query come <em>calcolatore dell angolo di impatto delle macchie di sangue</em>, <em>formula dell angolo di impatto degli spruzzi di sangue</em> e <em>come calcolare la traiettoria delle macchie di sangue</em>. Il punto cruciale è che la formula risponde solo a una parte della ricostruzione. Stima l elevazione del percorso rispetto alla superficie di impatto; non identifica da sola la sorgente, il meccanismo, l arma o la sequenza degli eventi.' },
    { type: 'title', text: 'Come misurare le macchie prima di inserire i dati', level: 3 },
    { type: 'paragraph', html: 'I dati più utili provengono da fotografie perpendicolari calibrate o da misurazioni dirette della scena. Misura il corpo ellittico principale della macchia, non gli spruzzi secondari, le code, i segni di scorrimento o le macchie secondarie. La larghezza deve essere misurata lungo l asse minore e la lunghezza lungo l asse maggiore. La rotazione deve seguire la direzione dell asse maggiore sul piano di impatto. Piccoli errori in lunghezza, larghezza o orientamento possono deviare notevolmente la traiettoria proiettata una volta estesa nello spazio 3D.' },
    { type: 'table', headers: ['Qualità delle misurazioni', 'Effetto probabile', 'Risposta pratica'], rows: [
      ['L asse maggiore è chiaro', 'La rotazione è più affidabile', 'Usa l asse maggiore visibile e documenta il metodo di orientamento.'],
      ['La larghezza o la lunghezza è distorta', 'L angolo di impatto può essere influenzato', 'Segnala l incertezza e confronta con le macchie vicine.'],
      ['Poche macchie convergono', 'La stima dell origine diventa instabile', 'Aggiungi macchie indipendenti prima di interpretare l origine 3D.'],
      ['Manca la scala', 'Tutte le distanze diventano puramente illustrative', 'Non riportare coordinate reali dell origine senza calibrazione.'],
    ] },
    { type: 'title', text: 'Lettura della convergenza 3D', level: 3 },
    { type: 'paragraph', html: 'La sfera di origine in questo strumento è calcolata come il punto più vicino a tutte le linee di traiettoria proiettate. Quando le linee passano vicine l una all altra, il valore di dispersione è piccolo e la confidenza migliora. Quando le linee divergono, la sfera appare comunque, ma deve essere interpretata come un debole compromesso dei minimi quadrati piuttosto che come una sorgente precisa.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Area di convergenza', description: 'Una stima bidimensionale sul piano di impatto, spesso utilizzata per visualizzare dove si intersecano le direzioni degli assi maggiori se viste di fronte.', points: ['Utile per una prima valutazione', 'Non rappresenta la altezza verticale da sola'] },
      { title: 'Area o volume di origine', description: 'Una stima tridimensionale che combina la direzione sul piano con l angolo di impatto per proiettare le traiettorie nello spazio.', highlight: true, points: ['Spiega la possibile altezza della sorgente', 'Sensibile all incertezza delle misurazioni e dell angolo'] },
    ] },
    { type: 'paragraph', html: 'Gli utenti cercano spesso un <em>calcolatore del punto di origine degli spruzzi di sangue</em> aspettandosi una singola coordinata esatta. In pratica, una corretta interpretazione richiede cautela. L origine è meglio compresa come una regione supportata da più traiettorie. Se le linee tracciate formano un fascio stretto, il modello è più coerente. Se passano attraverso un volume ampio, la ricostruzione indica che le misurazioni, la selezione delle macchie o le ipotesi necessitano di una revisione.' },
    { type: 'title', text: 'Motivi comuni per cui le traiettorie non si incontrano', level: 3 },
    { type: 'proscons', title: 'Dati di input affidabili vs dati di input incerti', items: [
      { pro: 'Diverse macchie ellittiche ben formate con assi maggiori chiari', con: 'Solo una o due macchie, o macchie selezionate perché sembrano adattarsi a una teoria preconcetta' },
      { pro: 'Misurazioni calibrate prese perpendicolarmente alla superficie di impatto', con: 'Foto oblique, scala sconosciuta o schermate copiate' },
      { pro: 'Macchie indipendenti dallo stesso meccanismo dell evento', con: 'Gocciolamento passivo misto, macchie da trasferimento, spruzzi da retroproiezione, scorrimento o impatti secondari' },
    ] },
    { type: 'paragraph', html: 'Una convergenza debole non significa automaticamente che lo strumento sia difettoso. Può significare che le macchie non appartengono allo stesso schema, la fotografia è distorta dalla prospettiva, l asse maggiore è stato letto male, la macchia non è un ellisse pulita o l evento fisico è più complesso di un semplice modello a sorgente puntiforme. Questa è un informazione preziosa. Uno strumento di ricostruzione deve mostrare i disaccordi invece di nasconderli dietro un numero apparentemente sicuro.' },
    { type: 'title', text: 'A cosa serve questo strumento', level: 3 },
    { type: 'list', items: [
      '<strong>Usa più macchie:</strong> tre o più macchie indipendenti forniscono una stima di convergenza più significativa.',
      '<strong>Osserva la dispersione:</strong> una dispersione elevata avverte che le traiettorie non concordano da vicino in 3D.',
      '<strong>Conserva la scala:</strong> i valori in centimetri o pollici devono provenire da fotografie calibrate o misurazioni della scena.',
      '<strong>Separa la didattica dai rapporti formali:</strong> questa visualizzazione è ideale per la formazione, la pianificazione e le spiegazioni prima di un esame formale.',
    ] },
    { type: 'card', title: 'Flusso di lavoro raccomandato', html: 'Inizia tracciando un piccolo set di macchie di alta qualità. Verifica se le direzioni degli assi maggiori in 2D hanno un senso visivo. Ispeziona quindi le traiettorie 3D, nota la dispersione e modifica una misurazione alla volta per vedere come ciascuna macchia influenza la ricostruzione. Questa analisi di sensibilità è spesso più utile rispetto alla semplice coordinata di origine grezza.' },
    { type: 'title', text: 'Quando non affidarsi a una stima dell origine delle macchie di sangue', level: 3 },
    { type: 'paragraph', html: 'Non affidarti a una stima semplice dell origine quando le macchie sono fortemente distorte, la superficie di impatto è curva o irregolare, il modello include macchie da trasferimento o sangue espirato proiettato, la superficie è stata spostata o la scena manca di una scala affidabile. La stessa cautela si applica quando le macchie provengono da meccanismi diversi o momenti distinti dell evento. Una visualizzazione 3D apparentemente pulita può essere fuorviante se il modello di input non è adatto per una ricostruzione geometrica.' },
    { type: 'glossary', items: [
      { term: 'Angolo di impatto', definition: 'L angolo stimato tra la traiettoria della goccia e la superficie di impatto, comunemente calcolato dal rapporto larghezza/lunghezza di una macchia ellittica.' },
      { term: 'Linea di traiettoria', definition: 'Una linea proiettata che mostra un possibile percorso inverso da una macchia verso lo spazio tridimensionnel.' },
      { term: 'Area di convergenza', definition: 'La regione approssimativa in cui si intersecano le direzioni delle macchie quando proiettate sul piano di impatto.' },
      { term: 'Area di origine', definition: 'La regione tridimensionale approssimativa da cui potrebbe provenire il sangue, basata su più traiettorie proiettate.' },
    ] },
    { type: 'summary', title: 'Uso ottimale', items: [
      'Usa l analizzatore per comprendere la geometria delle traiettorie e testare la sensibilità delle misurazioni.',
      'Confronta la sfera di origine con il valore di dispersione prima di affidarti a una ricostruzione.',
      'Non utilizzare la visualizzazione come una perizia forense autonoma.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
