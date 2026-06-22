import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'rilevatore-biosegnali-esopianeti';
const title = 'Rilevatore di Biosegnali per Esopianeti';
const description = "Allinea le righe di assorbimento di ossigeno, metano e ozono in uno spettro di trasmissione esoplanetario simulato. Valuta l'abitabilità biologica, il rischio di contaminazione da tecnosegnali e la probabilità di falsi positivi basandoti sulle evidenze spettrali.";

const howTo = [
  {
    name: 'Scegli la stella ospite',
    text: "Seleziona una nana K, una stella simile al Sole o una nana M. Il tipo di stella influisce significativamente sul rischio di falsi positivi, poiché il flusso ultravioletto, i brillamenti e la fotochimica atmosferica alterano l'interpretazione dei livelli di ossigeno e ozono.",
  },
  {
    name: 'Allinea le righe spettrali',
    text: 'Regola i cursori di ossigeno, metano e ozono finché i marcatori di assorbimento osservati non coincidono con le bande di riferimento nello spettro simulato.',
  },
  {
    name: 'Regola rumore e contesto atmosferico',
    text: "Aumenta il rumore strumentale per testare l'affidabilità del segnale. Modifica i parametri di vapore acqueo e anidride carbonica per simulare un'atmosfera più umida, secca, densa o chimicamente complessa.",
  },
  {
    name: 'Interpreta gli indici di abitabilità',
    text: 'Confronta i punteggi biologico, tecnologico e di abitabilità. Un risultato probante richiede la presenza di molteplici gas in disequilibrio, anziché la semplice osservazione di una riga isolata.',
  },
];

const faq = [
  {
    question: "Cos'è una biosegnale nella spettroscopia esoplanetaria?",
    answer: 'Una biosegnale è una caratteristica rilevabile a distanza che potrebbe derivare da processi biologici. Negli spettri atmosferici, i candidati più rilevanti includono ossigeno, ozono, metano, vapore acqueo e combinazioni di gas che dovrebbero chimicamente reagire tra loro, a meno che un processo biologico non ne mantenga l\'abbondanza costante.',
  },
  {
    question: 'Perché la combinazione ossigeno-metano è così rivelatrice?',
    answer: "L'ossigeno e il metano reagiscono chimicamente. La loro presenza simultanea a livelli significativi indica un disequilibrio chimico, un segnale di potenziale vita molto più forte rispetto alla rilevazione di un singolo gas isolato. Il simulatore assegna a questa coppia una ponderazione superiore.",
  },
  {
    question: "L'ossigeno può costituire un falso positivo?",
    answer: "Assolutamente. L'ossigeno può essere generato da processi abiotici come la perdita d'acqua, la fotolisi, scambi vulcanici o ambienti stellari con forte radiazione UV. Ecco perché lo strumento valuta il rischio di falsi positivi, anziché considerare l'ossigeno come prova definitiva.",
  },
  {
    question: "Perché distinguere l'ozono dall'ossigeno?",
    answer: "L'ozono è un sottoprodotto fotochimico dell'ossigeno dotato di firme spettrali molto marcate. Funge da indicatore indiretto prezioso, specialmente quando le bande dirette di O2 sono difficili da isolare, sebbene la sua interpretazione dipenda strettamente dal contesto atmosferico.",
  },
  {
    question: "Cosa rappresenta l'indice tecnologico?",
    answer: "Si tratta di un punteggio d'allerta speculativo che segnala casi in cui lo spettro appare così energetico, rumoroso o chimicamente atipico da non poter escludere categoricamente un'origine artificiale. Non costituisce una prova di rilevazione.",
  },
  {
    question: 'Si tratta di un modello reale di analisi dati?',
    answer: 'No. È un simulatore didattico che traduce concetti chiave della spettroscopia in un modello interattivo. I modelli scientifici reali si basano su complessi trasferimenti radiativi, correzioni per contaminazione stellare, modelli di nuvolosità e inferenza bayesiana.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: "Visualizzazione dello spettro di trasmissione esoplanetario",
    starClass: 'Stella ospite',
    starK: 'Nana K tranquilla',
    starSun: 'Stella G simile al Sole',
    starM: 'Nana M attiva',
    noise: 'Rumore strumentale',
    oxygenLine: 'Marcatore ossigeno',
    methaneLine: 'Marcatore metano',
    ozoneLine: 'Marcatore ozono',
    waterVapor: 'Contesto vapore acqueo',
    carbonDioxide: 'Contesto CO2',
    habitabilityIndex: 'Indice di abitabilità',
    biologicalIndex: 'Biologico',
    technologicalIndex: 'Tecnologico',
    falsePositiveRisk: 'Rischio di falso positivo',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Conclusione',
    dataLive: 'Sintesi dati in tempo reale',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Allinea i marcatori spettrali per valutare gli indici atmosferici.',
    verdictWeak: 'Lo spettro è debole: le righe non giustificano ancora un\'interpretazione biologica.',
    verdictPromising: 'Lo spettro è promettente: molteplici marcatori di biosegnali sono parzialmente allineati.',
    verdictStrong: 'Lo spettro è robusto: ossigeno, metano e ozono formano un segnale coerente di disequilibrio.',
    verdictAmbiguous: 'Il segnale è interessante ma ambiguo: i rischi di falsi positivi stellari o atmosferici restano elevati.',
  },
  seo: [
    {
      type: 'title',
      text: 'Rilevatore di Biosegnali per Esopianeti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Il rilevatore di biosegnali per esopianeti è un simulatore spettroscopico interattivo che permette di esplorare la firma luminosa dei gas legati alla vita che filtrano un'atmosfera lontana. Invece di fornire una risposta binaria per una singola molecola, lo strumento invita ad allineare le caratteristiche di assorbimento di ossigeno, metano e ozono, ponderando i risultati in base a rumore, vapore acqueo, anidride carbonica e attività della stella ospite.",
    },
    {
      type: 'paragraph',
      html: "Questa è la sfida principale dell'esobiologia: ossigeno, metano o ozono sono indizi affascinanti, ma nessuno basta da solo come prova. Le scoperte più solide combinano più gas, un contesto fisico rigoroso e un'accurata eliminazione delle cause non biologiche. Il simulatore rende queste analisi accessibili attraverso un'interfaccia da laboratorio.",
    },
    {
      type: 'title',
      text: 'Come la spettroscopia di trasmissione rivela i gas atmosferici',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Quando un pianeta transita davanti alla sua stella, una parte minima della luce stellare viene filtrata dalla sua atmosfera. Le molecole assorbono lunghezze d'onda specifiche, creando cadute caratteristiche nello spettro. Confrontando questi segnali con i dati di laboratorio, gli astronomi possono inferire la composizione atmosferica, sebbene nuvole, foschia, temperatura e rumore strumentale complichino questa operazione.",
    },
    {
      type: 'title',
      text: 'Ossigeno, metano e ozono: un segnale combinato',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Ossigeno O2:</strong> Sulla Terra, la fotosintesi mantiene tassi elevati, ma un ossigeno abiotico può accumularsi in scenari planetari specifici.",
        '<strong>Metano CH4:</strong> Di origine biologica, geologica o meteoritica, guadagna pertinenza quando rilevato congiuntamente ad agenti ossidanti.',
        "<strong>Ozono O3:</strong> Prodotto per fotochimica dall'ossigeno, è spesso più facile da rilevare in certe bande spettrali, offrendo un prezioso indice indiretto.",
        "<strong>Acqua e CO2:</strong> L'acqua favorisce l'abitabilità, mentre la CO2 aiuta a modellare l'effetto serra e la fotochimica, facilitando l'identificazione dei falsi positivi.",
      ],
    },
    {
      type: 'title',
      text: 'La sfida dei falsi positivi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Una rilevazione elevata di ossigeno non prova necessariamente la vita. La perdita d'acqua, la fotodissociazione o il vulcanismo possono produrre livelli ingannevoli. Le nane M sono particolarmente complesse a causa delle loro eruzioni stellari. L'indicatore di falso positivo aumenta se il rumore dello strumento o il contesto fisico rendono l'interpretazione biologica incerta.",
    },
    {
      type: 'table',
      headers: ['Segnale rilevato', 'Interpretazione', 'Cautela'],
      rows: [
        ["O2 solo", "Atmosfera ricca di ossigeno", "Origine abiotica possibile (perdita d'acqua, fotochimica)"],
        ['CH4 solo', 'Atmosfera riducente o geologia attiva', 'Non è una prova solida di vita biologica'],
        ['O2 + CH4', 'Disequilibrio chimico', 'Richiede analisi approfondita e verifiche di contaminazione'],
        ['O2 + O3 + Acqua', 'Contesto simile alla Terra', 'Attenzione a nubi e attività stellare residua'],
      ],
    },
    {
      type: 'title',
      text: 'Indici di abitabilità biologica e tecnologica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "L'indice biologico privilegia il disequilibrio chimico (O2 + CH4), integrando ozono e acqua. L'indice tecnologico rimane volutamente speculativo: segnala atmosfere così anomale, energetiche o rumorose da richiedere l'esame di possibili inquinamenti artificiali o modifiche deliberate prima di concludere per un'origine biologica.",
    },
    {
      type: 'paragraph',
      html: "Utilizza questo strumento come ausilio al ragionamento critico. Una valutazione scientifica reale confronta molti modelli, integra gli spettri stellari, corregge i bias strumentali e calcola rigorosamente le incertezze. Il valore didattico risiede in questo rigore: allineare le prove, verificare il contesto e restare vigili di fronte ai falsi positivi.",
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
      description,
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
