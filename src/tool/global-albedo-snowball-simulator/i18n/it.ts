import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-albedo-globale-terra-palla-neve';
const title = 'Simulatore Globale di Albedo e Terra Palla di Neve';
const description = 'Esplora il bilancio della radiazione termica terrestre, le variazioni della costante solare, la concentrazione di gas serra e la retroazione ghiaccio-albedo per vedere se le calotte glaciali arretrano, si stabilizzano o innescano un clima palla di neve.';

const howTo = [
  { name: 'Imposta la luce solare entrante', text: 'Muovi il cursore della costante solare per testare scenari di Sole giovane più debole, luce solare terrestre attuale o forzamento futuro più luminoso.' },
  { name: 'Regola la concentrazione di gas serra', text: 'Modifica la concentrazione di gas serra per vedere come il forzamento radiativo compete con un albedo planetario più alto.' },
  { name: 'Semina il pianeta con ghiaccio', text: 'Inizia con una piccola calotta polare o un mondo ampiamente ghiacciato. Il modello itera il ciclo di retroazione e mostra se il ghiaccio avanza o arretra.' },
  { name: 'Leggi lo stato climatico', text: 'Usa la temperatura, la radiazione assorbita, la copertura di ghiaccio finale e la curva temporale per confrontare risultati temperati, palla di neve e serra calda.' },
];

const faq = [
  { question: 'Cos\'è la retroazione ghiaccio-albedo?', answer: 'Il ghiaccio e la neve riflettono più luce solare dell\'oceano o della terra. Quando il ghiaccio si espande, l\'albedo planetario aumenta, l\'energia solare assorbita diminuisce e il raffreddamento può permettere la formazione di ancora più ghiaccio. Quando il ghiaccio arretra, la superficie più scura assorbe più energia e il riscaldamento accelera.' },
  { question: 'Cosa significa Terra Palla di Neve?', answer: 'La Terra Palla di Neve è uno stato climatico ipotetico in cui il ghiaccio raggiunge basse latitudini o una copertura quasi globale. Prove geologiche suggeriscono che la Terra potrebbe essersi avvicinata a tali stati durante l\'era Neoproterozoica.' },
  { question: 'È un modello climatico completo?', answer: 'No. È un modello compatto di bilancio energetico per l\'apprendimento. Ignora la circolazione atmosferica, le nuvole, il trasporto di calore oceanico, le stagioni, la geografia e le retroazioni del ciclo del carbonio, ma cattura la logica radiativa fondamentale della retroazione dell\'albedo.' },
  { question: 'Perché i gas serra possono rompere uno stato palla di neve?', answer: 'I gas serra riducono il raffreddamento a onde lunghe uscente aggiungendo forzamento radiativo. Negli scenari di Terra Palla di Neve, l\'anidride carbonica vulcanica può accumularsi quando l\'alterazione dei silicati rallenta, riscaldando infine il pianeta abbastanza da sciogliere il ghiaccio alle basse latitudini.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Controlli climatici',
    solarConstant: 'Costante solare',
    greenhouse: 'Gas serra',
    initialIce: 'Copertura di ghiaccio iniziale',
    temperature: 'Temperatura di equilibrio',
    absorbed: 'Luce solare assorbita',
    finalIce: 'Copertura di ghiaccio finale',
    albedo: 'Albedo planetario',
    forcing: 'Forzamento serra',
    state: 'Stato climatico',
    timeline: 'Evoluzione del ghiaccio',
    years: 'anni del modello',
    snowball: 'Blocco palla di neve',
    temperate: 'Equilibrio temperato',
    hothouse: 'Ritiro serra calda',
    retreating: 'Ghiaccio in ritiro',
    advancing: 'Ghiaccio in avanzamento',
    stable: 'Vicino all\'equilibrio',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Diagnostica radiativa',
  },
  seo: [
    { type: 'title', text: 'Simulatore globale di albedo per la retroazione ghiaccio-albedo e la Terra Palla di Neve', level: 2 },
    { type: 'paragraph', html: 'Questo simulatore esplora uno dei cicli di retroazione più importanti nel clima planetario: il legame tra copertura di ghiaccio, riflettività e luce solare assorbita. Un pianeta con ghiaccio brillante riflette più radiazione solare entrante nello spazio. Quel raffreddamento può preservare o espandere il ghiaccio, aumentando ulteriormente l\'albedo e spingendo il sistema verso uno stato di Terra Palla di Neve. Un pianeta con meno ghiaccio assorbe più luce solare, accelerando la deglaciazione.' },
    { type: 'paragraph', html: 'Usa i cursori per modificare la costante solare, la concentrazione di gas serra e la copertura di ghiaccio iniziale. Il modello poi itera un semplice bilancio energetico globale e mostra se il clima si muove verso una glaciazione estesa, un equilibrio temperato o uno stato caldo con poco ghiaccio. Progettato per un\'intuizione rapida: ogni controllo corrisponde direttamente a un termine fisico nel bilancio radiativo.' },
    { type: 'title', text: 'Come viene stimato il bilancio energetico', level: 3 },
    { type: 'paragraph', html: 'La radiazione a onde corte assorbita è stimata come S(1 - a) / 4, dove S è la costante solare e a è l\'albedo planetario. La divisione per quattro converte la luce solare intercettata dal disco terrestre in una media su tutta la superficie sferica. Un albedo più alto riduce l\'energia assorbita; una maggiore concentrazione di gas serra aggiunge forzamento radiativo positivo che aumenta la stima della temperatura superficiale.' },
    {
      type: 'table',
      headers: ['Controllo', 'Significato fisico', 'Effetto climatico'],
      rows: [
        ['Costante solare', 'Energia stellare entrante nell\'orbita terrestre', 'Valori più alti riscaldano il pianeta e riducono il ghiaccio.'],
        ['Gas serra', 'Forzamento radiativo a onde lunghe relativo a un\'atmosfera di riferimento', 'Valori più alti rendono più difficile il blocco palla di neve.'],
        ['Copertura di ghiaccio iniziale', 'Riflettività iniziale del pianeta', 'Valori alti possono innescare un raffreddamento incontrollato attraverso la retroazione dell\'albedo.'],
      ],
    },
    { type: 'title', text: 'Perché la retroazione dell\'albedo può diventare non lineare', level: 3 },
    { type: 'paragraph', html: 'Il ciclo ghiaccio-albedo non è un aggiustamento delicato unidirezionale. Una volta che il ghiaccio raggiunge una porzione sufficiente del pianeta, la superficie più brillante può rimuovere così tanta luce solare assorbita che lo scioglimento estivo diventa debole. Nella direzione opposta, il ghiaccio in ritiro espone oceano e terra più scuri, aumentando l\'assorbimento e allontanando il pianeta dalla glaciazione. Ecco perché forzamenti simili possono produrre risultati diversi a seconda della copertura di ghiaccio iniziale.' },
    { type: 'paragraph', html: 'La Terra reale aggiunge molte complicazioni: nuvole, polvere sul ghiaccio, trasporto di calore oceanico, posizioni continentali, luce solare stagionale, dinamica del ghiaccio marino e il ciclo del carbonio. Un modello semplice ha comunque valore perché isola il bilancio radiativo di primo ordine. Permette di vedere perché le ipotesi di Terra Palla di Neve dipendono sia da luce solare debole o inneschi ad alto albedo sia dal successivo accumulo di gas serra per la fuga.' },
    { type: 'title', text: 'Interpretazione del simulatore', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Blocco palla di neve:</strong> la copertura di ghiaccio finale è molto alta e la temperatura di equilibrio rimane ben al di sotto del congelamento.',
        '<strong>Equilibrio temperato:</strong> il modello si stabilizza con copertura di ghiaccio parziale e radiazione assorbita moderata.',
        '<strong>Ritiro serra calda:</strong> il ghiaccio collassa a una frazione molto piccola mentre il forzamento serra e la luce solare assorbita rimangono alti.',
      ],
    },
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
