const slug = 'calcolatore-sopravvivenza-atmosfera-pianetaria';
const title = 'Calcolatore di Sopravvivenza in Atmosfera Planetaria';
const description = 'Quanto tempo puoi sopravvivere senza tuta spaziale su Marte, Venere, Titano, Giove o l\'Everest? Questo calcolatore interattivo stima il tempo di sopravvivenza umana non protetta basandosi su pressione, temperatura, ossigeno, anidride carbonica, tossicita e pericoli del vento.';

const howTo = [
  {
    name: 'Scegli una destinazione per caricare dati atmosferici reali',
    text: 'Seleziona il preset Marte, Venere, Titano, Giove o la vetta dell\'Everest per impostare istantaneamente valori realistici di pressione, temperatura, miscela di gas e vento per quell\'ambiente.',
  },
  {
    name: 'Modifica le condizioni per esplorare il punto di svolta',
    text: 'Muovi i cursori di pressione, temperatura, ossigeno e anidride carbonica per vedere quale pericolo diventa letale per primo. Piccoli cambiamenti possono spostare completamente il fattore limitante.',
  },
  {
    name: 'Leggi l\'orologio di sopravvivenza e l\'anello piu debole',
    text: 'Il timer mostra il tempo stimato prima che si verifichi un grave stress biologico. L\'etichetta del fattore limitante ti dice esattamente quale pericolo e la minaccia piu urgente in questo momento.',
  },
  {
    name: 'Confronta i pericoli visivamente sulla mappa dei rischi',
    text: 'I raggi radiali e il grafico della linea temporale mostrano come pressione, calore, freddo, ipossia, tossicita e vento contribuiscono ciascuno al rischio totale nel tempo.',
  },
];

const faq = [
  {
    question: 'Un essere umano puo sopravvivere su Marte senza tuta spaziale?',
    answer: 'No. Marte ha una pressione estremamente bassa (meno dell\'1% di quella terrestre), quasi nessun ossigeno respirabile e un\'atmosfera composta principalmente da anidride carbonica. La perdita di coscienza avverrebbe in secondi e lesioni gravi in pochi minuti senza supporto di pressione e ossigeno.',
  },
  {
    question: 'Perche la pressione atmosferica e cosi critica per la sopravvivenza umana?',
    answer: 'Al di sotto del limite di Armstrong (circa 6,3 kPa), l\'acqua puo bollire alla temperatura corporea. La bassa pressione impedisce anche all\'ossigeno di entrare nel flusso sanguigno anche se l\'aria e 100% ossigeno. Ecco perche la pressione e uno dei pericoli letali piu veloci.',
  },
  {
    question: 'Quale pianeta ha l\'atmosfera piu vivibile?',
    answer: 'Tra le destinazioni del Sistema Solare, la Terra ad alta quota (Everest) e la piu vivibile, sebbene ancora pericolosa senza acclimatazione. Titano e il meno ostile delle altre opzioni perche la sua pressione e gestibile, ma manca di ossigeno ed e criogenicamente freddo. Nessun pianeta o luna oltre alla Terra ha un\'atmosfera respirabile.',
  },
  {
    question: 'Venere e peggiore per il calore o per la pressione?',
    answer: 'Entrambi sono estremi sulla superficie. Venere ha una pressione schiacciante (92 volte quella terrestre) e una temperatura superficiale piu calda di un forno da cucina. Questi pericoli agiscono insieme, quindi lo strumento li segnala entrambi come minacce dominanti immediate.',
  },
  {
    question: 'Perche Titano ha una stima di sopravvivenza piu lunga di Marte?',
    answer: 'Titano ha un\'atmosfera densa, quindi la pressione in se non e un problema immediato. Il tempo di sopravvivenza e limitato dal freddo estremo (circa -180 gradi C) e dalla completa mancanza di ossigeno. Marte fallisce sulla pressione, Titano fallisce sulla temperatura.',
  },
  {
    question: 'Quali sono le principali cause di morte nello spazio senza tuta?',
    answer: 'I killer piu veloci sono l\'esposizione al vuoto (perdita di pressione che causa ebollismo e ipossia in secondi), seguiti da temperatura estrema, composizione di gas tossici e perdita di calore dovuta al vento. Il calcolatore tiene traccia di tutte e sei le categorie di pericolo.',
  },
  {
    question: 'Questo strumento e adatto per la pianificazione di missioni spaziali?',
    answer: 'No. E un modello educativo che utilizza soglie biologiche semplificate. La vera analisi di decompressione, ipossia, gas tossici, lesioni termiche e rischi di missione richiede una valutazione esperta medica e ingegneristica per la sicurezza.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Mappa dei rischi atmosferici',
    timeline: 'Cronologia dei rischi biologici',
    controls: 'Controlli dell\'atmosfera',
    destination: 'Destinazione',
    pressure: 'Pressione',
    temperature: 'Temperatura',
    oxygen: 'Ossigeno',
    co2: 'Anidride carbonica',
    limitingFactor: 'Fattore limitante',
    verdict: 'Verdetto',
    exposureSummary: 'Riepilogo esposizione',
    atmosphericModel: 'Modello di esposizione atmosferica',
    survivalEnvelope: 'involucro di sopravvivenza',
    survival: 'Sopravvivenza',
    mode: 'Modalità',
    metric: 'Metrico',
    imperial: 'Imperiale',
    unitSystem: 'Sistema di unità',
    vitalStress: 'stress vitale',
    timeLabel: 'tempo',
    estimatedSurvival: 'sopravvivenza stimata',
    hazardPressure: 'Pressione',
    hazardTemperature: 'Temperatura',
    hazardOxygen: 'Ossigeno',
    hazardToxicity: 'Tossicità',
    hazardWind: 'Vento',
    presetMars: 'Marte',
    presetVenus: 'Superficie di Venere',
    presetTitan: 'Titano',
    presetJupiter: 'Letto di nuvole di Giove',
    presetEverest: "Terra, vetta dell'Everest",
    noteMars: 'Quasi vuoto, freddo estremo e quasi nessun ossigeno respirabile.',
    noteVenus: 'Pressione schiacciante e calore da forno dominano immediatamente.',
    noteTitan: 'Aria densa di azoto ma freddo letale e senza ossigeno.',
    noteJupiter: 'Atmosfera ricca di idrogeno, freddo severo e venti violenti.',
    noteEverest: 'Sopravvivenza possibile per alpinisti addestrati, ma ipossia e freddo sono gravi.',
    verdictSeconds: 'Secondi',
    verdictMinutes: 'Minuti',
    verdictHours: 'Ore',
    verdictExtended: 'Rischio di esposizione prolungata',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolatore di Sopravvivenza in Atmosfera Planetaria: Quanto Tempo Puoi Sopravvivere Senza Tuta Spaziale su Marte, Venere, Titano o Giove?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se fossi improvvisamente esposto all\'atmosfera di un altro pianeta senza tuta spaziale, quanto tempo sopravvivresti? Questo calcolatore stima il tempo di sopravvivenza umana non protetta su Marte, Venere, Titano, Giove e l\'Everest simulando sei pericoli: pressione totale, disponibilita di ossigeno, temperatura, concentrazione di anidride carbonica, chimica tossica e stress del vento. Risponde alle domande che gli appassionati di spazio e gli studenti pongono piu spesso: quale pianeta ti uccide piu velocemente, quale pericolo e la vera minaccia e di cosa avresti bisogno per sopravvivere.',
    },
    {
      type: 'paragraph',
      html: 'Il risultato e una stima educativa, non un numero per la pianificazione di missioni. E progettato per aiutare a confrontare perche mondi diversi sono pericolosi in modi molto diversi. Marte fallisce per pressione e ipossia in pochi secondi. Venere combina una pressione schiacciante con un calore da forno. Titano e criogenico e non ha ossigeno. I mantelli nuvolosi dei giganti gassosi aggiungono composizioni tossiche e venti supersonici. Ogni ambiente insegna qualcosa di diverso su cio che rende la Terra unicamente abitabile.',
    },
    {
      type: 'title',
      text: 'Quale pianeta ha l\'atmosfera piu vivibile?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tra le destinazioni di questo calcolatore, gli ambienti di alta quota della Terra (come la vetta dell\'Everest) sono i piu vivibili, sebbene ancora pericolosi senza preparazione. Tra gli altri pianeti, Titano ha la pressione piu tollerabile ma fallisce su temperatura e ossigeno. Nessuna destinazione diversa dalla Terra offre attualmente un\'atmosfera respirabile. Il calcolatore ti aiuta a vedere esattamente perche ogni mondo fallisce e quale pericolo supera per primo la soglia critica.',
    },
    {
      type: 'title',
      text: 'Come ogni pericolo colpisce il corpo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pressione (bassa):</strong> al di sotto di 6,3 kPa i fluidi corporei possono bollire (ebollismo). Anche al di sopra, la bassa pressione impedisce l\'assorbimento di ossigeno. Questo e il killer piu veloce in ambienti di quasi-vuoto.',
        '<strong>Pressione (alta):</strong> la pressione estrema comprime i gas respiratori, aumenta il rischio di narcosi da azoto e puo danneggiare meccanicamente polmoni e seni nasali.',
        '<strong>Pressione parziale di ossigeno:</strong> l\'ossigeno respirabile dipende sia dalla percentuale di gas che dalla pressione totale. Un\'atmosfera sottile puo avere il 21% di ossigeno ma causare comunque ipossia.',
        '<strong>Temperatura (calore):</strong> al di sopra di circa 60 gradi C, la denaturazione delle proteine e l\'insufficienza d\'organo iniziano rapidamente. La temperatura superficiale di Venere supera i 460 gradi C.',
        '<strong>Temperatura (freddo):</strong> sotto lo zero, si instaurano congelamento e ipotermia. A temperature criogeniche come i -180 gradi C di Titano, il congelamento dei tessuti e quasi immediato.',
        '<strong>Tossicita dell\'anidride carbonica:</strong> la CO2 al di sopra di circa il 5% provoca capogiri, mal di testa e perdita di coscienza. Molte atmosfere planetarie sono principalmente CO2.',
        '<strong>Chimica tossica:</strong> composti di zolfo, ammoniaca, metano e idrogeno possono essere corrosivi, asfissianti o chimicamente pericolosi.',
        '<strong>Vento:</strong> i venti forti accelerano la perdita di calore per convezione, provocano raffreddamento da vento, lanciano detriti e possono destabilizzare fisicamente una persona.',
      ],
    },
    {
      type: 'title',
      text: 'Marte: Perche la bassa pressione uccide prima di tutto il resto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Marte ha una pressione superficiale di circa 0,6 kPa, ben al di sotto del limite di Armstrong di 6,3 kPa dove l\'acqua puo bollire alla temperatura corporea. L\'esposizione non protetta causerebbe ebollismo, ipossia rapida e perdita di coscienza in meno di 15 secondi. Anche considerando il freddo (media di -60 gradi C) e l\'atmosfera ricca di anidride carbonica, la pressione e la privazione di ossigeno dominano la linea temporale. Un indumento pressurizzato funzionante e una fornitura di ossigeno sono il minimo assoluto per sopravvivere su Marte.',
    },
    {
      type: 'title',
      text: 'Venere: Pressione estrema e calore che agiscono insieme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La superficie di Venere ha una pressione di 92 atmosfere terrestri (circa 9,3 MPa, equivalente a essere a 900 metri sott\'acqua) e una temperatura superficiale di 462 gradi C. L\'atmosfera e composta per il 96% di anidride carbonica con nubi di acido solforico. Questi pericoli agiscono simultaneamente piuttosto che sequenzialmente: la pressione schiaccia, il calore cuoce e la CO2 avvelena. In questo calcolatore, Venere e l\'unica destinazione in cui piu pericoli superano la soglia letale quasi nello stesso istante.',
    },
    {
      type: 'title',
      text: 'Titano: La pressione piu amichevole del Sistema Solare al di fuori della Terra',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La luna di Saturno, Titano, e insolita perche la sua pressione superficiale (circa 147 kPa, o 1,45 volte quella terrestre) e in realtà entro un intervallo che un essere umano potrebbe tollerare. Non sarebbe necessaria una tuta pressurizzata solo per quella variabile. Tuttavia, Titano non ha praticamente ossigeno, una temperatura superficiale di -179 gradi C e un\'atmosfera di metano e azoto. Il calcolatore mostra la pressione come gestibile, ma la temperatura e la privazione di ossigeno dominano immediatamente. Titano e un promemoria che la sopravvivenza dipende dall\'intero profilo di pericolo, non da una singola misurazione.',
    },
    {
      type: 'title',
      text: 'Come interpretare il timer di sopravvivenza e la mappa dei rischi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il timer di sopravvivenza stima l\'intervallo prima che si verifichi un grave stress biologico in una persona non protetta. L\'etichetta del fattore limitante identifica quale pericolo supera per primo la soglia critica. I raggi di pericolo radiali mostrano la gravita relativa di ciascuno dei sei pericoli monitorati, e il grafico della linea temporale mostra come il rischio combinato si accumula durante la finestra di esposizione. Questi strumenti visivi ti aiutano a vedere a colpo d\'occhio perche un dato ambiente e pericoloso e quale sistema di protezione sarebbe piu importante.',
    },
    {
      type: 'table',
      headers: ['Destinazione', 'Pericoli mortali', 'Minaccia piu veloce', 'Cosa deve risolvere una tuta'],
      rows: [
        ['Marte', 'Quasi vuoto, ipossia, freddo, CO2', 'Pressione < limite di Armstrong', 'Indumento pressurizzato, ossigeno, isolamento termico'],
        ['Superficie di Venere', 'Pressione schiacciante, calore di 462 gradi C, CO2, acido solforico', 'Pressione e calore simultaneamente', 'Raffreddamento pesante, scafo pressurizzato, apparecchio respiratorio'],
        ['Titano', 'Nessun ossigeno, freddo di -179 gradi C, metano', 'Temperatura e ipossia', 'Fornitura di ossigeno, protezione termica estrema'],
        ['Manto nuvoloso di Giove', 'Nessun ossigeno, ricco di idrogeno, freddo, vento forte', 'Ipossia e mancanza di gas respirabile', 'Sistema respiratorio sigillato, controllo termico'],
        ['Vetta dell\'Everest', 'Ipossia, freddo, vento', 'Pressione parziale di ossigeno troppo bassa', 'Maschera per ossigeno, attrezzatura per freddo, acclimatazione'],
      ],
    },
    {
      type: 'title',
      text: 'Cosa servirebbe per sopravvivere senza tuta spaziale?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realisticamente, nessun corpo conosciuto del Sistema Solare oltre alla Terra consente la sopravvivenza umana non protetta per piu di pochi minuti, e la maggior parte uccide in pochi secondi. Il valore di questo calcolatore non sta nel trovare un pianeta sicuro, ma nel comprendere le ragioni specifiche per cui ogni ambiente e ostile. Questa conoscenza guida l\'educazione alle scienze planetarie, la progettazione di habitat spaziali, le priorita di addestramento degli astronauti e la ricerca di esopianeti potenzialmente abitabili dove un\'atmosfera potrebbe effettivamente sostenere la vita.',
    },
    {
      type: 'list',
      items: [
        '<strong>Usalo per imparare:</strong> guarda come cambiare una variabile, come raddoppiare la pressione su Marte, modifica la finestra di sopravvivenza.',
        '<strong>Usalo per confrontare:</strong> contrasta perche Titano da piu tempo di Venere nonostante entrambi siano invivibili.',
        '<strong>Usalo per discutere:</strong> esplora cio di cui un\'atmosfera terraformata avrebbe bisogno per raggiungere condizioni respirabili.',
        '<strong>Non usarlo per decisioni reali:</strong> il calcolatore utilizza soglie semplificate. La pianificazione di emergenza richiede medicina aerospaziale professionale.',
      ],
    },
    {
      type: 'title',
      text: 'Limitazioni importanti e scopo educativo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La sopravvivenza reale dipende dalla salute individuale, dall\'abbigliamento, dal livello di sforzo, dall\'umidita, dalla radiazione solare, dalla storia di decompressione, dalla miscela di gas respiratorio, dai tempi di salvataggio e da molte altre variabili. I dati dell\'atmosfera planetaria variano anche in base all\'altitudine, alla stagione e alla fonte di misurazione. Questo strumento utilizza soglie biologiche semplificate e dati ambientali rappresentativi per l\'educazione scientifica. E progettato per aiutare studenti, insegnanti, appassionati di spazio e scrittori scientifici a comprendere l\'abitabilita planetaria, non per guidare operazioni spaziali reali.',
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
