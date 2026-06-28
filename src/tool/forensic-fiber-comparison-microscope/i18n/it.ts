import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'microscopio-confronto-fibre-forense';
const title = 'Simulatore di microscopio di confronto per fibre forensi';
const description = 'Crea il profilo di una fibra tessile dubbia, confrontalo con riferimenti noti e interpreta morfologia, polarizzazione e spettro del colorante UV-Vis.';

const howTo = [
  {
    name: 'Crea il profilo della fibra dubbia',
    text: 'Imposta il materiale, il diametro, la direzione di torsione, la risposta alla polarizzazione e il profilo del colorante per la fibra recuperata.',
  },
  {
    name: 'Scegli una fibra di confronto nota',
    text: 'Seleziona sul lato destro la fibra di un indumento sospetto, come cotone, lana, poliestere o nylon.',
  },
  {
    name: 'Regola messa a fuoco e polarizzazione',
    text: 'Muovi il cursore di messa a fuoco e ruota il polarizzatore per osservare la nitidez, le creste superficiali e il comportamento di birifrangenza.',
  },
  {
    name: 'Confronta morfologia e spettri UV-Vis',
    text: 'Usa il punteggio morfologico, il punteggio dello spettro, la corrispondenza combinata e le curve di assorbimento per decidere se i campioni sono compatibili o chiaramente diversi.',
  },
];

const faq = [
  {
    question: 'La microscopia delle fibre può identificare l\'esatto indumento da cui proviene una fibra?',
    answer: 'Di lavoro no. Il confronto delle fibre può mostrare compatibilità o differenze tra una fibra dubbia e un tessuto noto, ma l\'attribuzione a una fonte individuale richiede un contesto accurato, metodi convalidati e spesso analisi chimiche o strumentali aggiuntive.',
  },
  {
    question: 'Perché usare la luce polarizzata nel confronto delle fibre?',
    answer: 'La luce polarizzata aiuta a rivelare la birifrangenza, il comportamento di estinzione e le differenze strutturali entre fibre naturali e sintetiche. Le fibre sintetiche mostrano spesso una risposta di polarizzazione più forte a causa dell\'orientamento molecolare.',
  },
  {
    question: 'Cosa aggiunge lo spettro UV-Vis?',
    answer: 'Mentre la microscopia descrive la forma e il comportamento ottico, l\'assorbanza UV-Vis può confrontare il comportamento dei coloranti a diverse lunghezze d\'onda. Fibre simili con coloranti diversi possono essere distinte chiaramente nel grafico spettrale.',
  },
  {
    question: 'Perché i risultati sono mostrati come punteggi anziché come identificazione finale?',
    answer: 'Le tracce forensi devono essere valutate e riportate in modo proporzionale. I punteggi sono sintesi didattiche della somiglianza morfologica e cromatica, non una conclusione di laboratorio o un parere legale.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Microscopio forense virtuale a campo suddiviso per confrontare due fibre tessili',
    chartAria: 'Grafico di assorbanza UV-Vis che confronta gli spettri dei coloranti della fibra dubbia e di quella nota',
    questionedSample: 'Campione dubbio',
    fixedEvidence: 'Traccia recuperata fissa',
    builderSummaryDefault: 'Cotone / 18 µm / irregolare / indaco',
    customQuestionedLabel: 'Fibra dubbia del caso',
    material: 'Materiale',
    cotton: 'Cotone',
    woolMaterial: 'Lana',
    polyesterMaterial: 'Poliestere',
    nylonMaterial: 'Nylon',
    materialcotton: 'cotone',
    materialwool: 'lana',
    materialpolyester: 'poliestere',
    materialnylon: 'nylon',
    twist: 'Torsione',
    irregularTwist: 'Irregolare',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Diametro',
    polarResponse: 'Risposta polar',
    dyeProfile: 'Profilo colorante',
    indigoDye: 'Indaco',
    crimsonDye: 'Cremisi',
    navyDye: 'Blu navy',
    violetDye: 'Violetto',
    dyeindigo: 'indaco',
    dyecrimson: 'cremisi',
    dyenavy: 'blu navy',
    dyeviolet: 'violetto',
    knownSample: 'Confronto noto',
    questionedCotton: 'Fibra di cotone blu dubbia',
    suspectCotton: 'Fibra di cotone della camicia sospetta',
    wool: 'Fibra di maglione di lana rossa',
    polyester: 'Fibra di giacca di poliestere blu navy',
    nylon: 'Fibra di fodera in nylon viola',
    focus: 'Messa a fuoco fine',
    polarizer: 'Angolo del polarizzatore',
    morphology: 'Morfologia',
    spectrum: 'UV-Vis',
    birefringence: 'Birifrangenza',
    combinedMatch: 'Corrispondenza combinata',
    uvVisTitle: 'Sovrapposizione di assorbanza UV-Vis',
    statusStrong: 'Alta compatibilità',
    statusPartial: 'Confronto misto',
    statusDifferent: 'Esclusione supportata',
    verdictStrong: 'La fibra dubbia e quella nota mostrano un\'elevata compatibilità in diametro, torsione, comportamento ottico e spettro del colorante. In un caso reale, questo verrebbe riportato come supporto a una possibile fonte tessile comune, non come un\'identificazione individuale.',
    verdictPartial: 'Il confronto è misto. Alcune caratteristiche di classe coincidono, ma la morfologia, la risposta al colorante o la birifrangenza mostrano differenze tali da richiedere ulteriori esami prima di formulare qualsiasi cauta associazione.',
    verdictDifferent: 'Le fibre non sono compatibili per quanto riguarda le principali caratteristiche di classe. Il risultato simulato supporta l\'esclusione di questo tessuto noto come probabile fonte della fibra dubbia.',
    disclaimer: 'Simulazione solo a scopo didattico. Il reale confronto forense delle fibre richiede microscopia convalidata, controlli, documentazione, misure anticontaminazione, revisione paritaria e interpretazione qualificata delle tracce.',
  },
  seo: [
    {
      type: 'title',
      text: 'Confronto forense di fibre con microscopia a campo suddiviso e spettri UV-Vis',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulatore didattico',
      title: 'Cosa dimostra questo microscopio virtuale per fibre',
      html: 'Questo simulatore modella il flusso di lavoro pratico del <strong>confronto forense di fibre</strong>: descrivi la fibra tessile dubbia, confrontala con un riferimento noto, regola la messa a fuoco, ruota i filtri polarizzatori e confronta la risposta del colorante con una curva di assorbanza UV-Vis semplificata. È progettato per gli studenti di tracce forensi, non per decisioni su casi reali.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 campi', label: 'vista microscopio suddiviso', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'intervallo spettro visibile', icon: 'mdi:chart-bell-curve' },
        { value: '4 classi', label: 'cotone, lana, poliestere, nylon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'rotazione polarizzatore', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Osservazioni fondamentali nel confronto delle fibre tessili',
      items: [
        'Misura o stima il diametro della fibra notando le variazioni naturali lungo il filamento.',
        'Registra direzione di torsione, creste superficiali, caratteristiche midollari, particelle opacizzanti e indizi della sezione trasversale, se disponibili.',
        'Usa la luce polarizzata per confrontare birifrangenza, comportamento di estinzione e cambiamenti di luminosità sotto rotazione.',
        'Confronta il colore al microscopio, o usa l\'analisi strumentale del colorante se il caso richiede maggiore discriminazione.',
        'Riferisci se i risultati sono compatibili, diversi o inconcludenti; evita formulazioni che implichino una fonte tessile univoca senza supporto.',
      ],
    },
    {
      type: 'table',
      headers: ['Osservazione', 'A quale domanda risponde', 'Limite'],
      rows: [
        ['Diametro e morfologia', 'Le fibre sono fisicamente simili?', 'Le variazioni di produzione possono sovrapporsi tra indumenti diversi.'],
        ['Torsione e dettagli superficiali', 'Le caratteristiche naturali o sintetiche coincidono?', 'Danni, stiramento e montaggio possono alterare l\'aspetto.'],
        ['Risposta alla luce polarizzata', 'Le proprietà ottiche coincidono?', 'La birifrangenza è una prova di classe, non una firma univoca.'],
        ['Spettro del colorante UV-Vis', 'I coloranti sono compatibili?', 'Coloranti simili possono apparire vicini; l\'estrazione e le impostazioni dello strumento influiscono.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Cosa supporta la compatibilità',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Molteplici caratteristiche di classe indipendenti coincidono tra la fibra dubbia e quella nota.',
          points: ['Intervallo di diametro comparabile', 'Stesso tipo generale di fibra', 'Comportamento di polarizzazione simile', 'Picchi di assorbanza del colorante sovrapposti'],
        },
        {
          title: 'Cosa supporta l\'esclusione',
          icon: 'mdi:close-circle-outline',
          description: 'Una differenza netta e ripetibile appare in una caratteristica che dovrebbe coincidere per una fonte tessile comune.',
          points: ['Incompatibilità tra fibra naturale e sintetica', 'Torsione o morfologia superficiale diversa', 'Spettro del colorante marcatamente differente', 'Risposta di birifrangenza incompatibile'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Come funziona il modello di simulazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il modello memorizza un piccolo database di riferimento con diametro, direzione di torsione, classe della fibra, birifrangenza, famiglia di coloranti e punti di assorbanza UV-Vis. La fibra dubbia è configurabile dall\'utente, quindi il punteggio di confronto risponde al profilo del caso anziché a un campione fisso da aula. La vista del microscopio risponde alla messa a fuoco e all\'angolo del polarizzatore affinché gli studenti comprendano l\'importanza delle impostazioni ottiche.',
    },
    {
      type: 'paragraph',
      html: 'Il controllo del polarizzatore è particolarmente utile per le fibre sintetiche. A poliestere e nylon vengono assegnati valori di birifrangenza più elevati, pertanto la loro luminosità cambia in modo più evidente con la rotazione del polarizzatore. Il cotone naturale e la lana rispondono comunque, ma l\'effetto simulato è più sutil. Questo rispecchia l\'idea didattica che l\'orientamento molecolare e la struttura della fibra influiscano sul comportamento ottico.',
    },
    {
      type: 'paragraph',
      html: 'Il grafico UV-Vis è una sovrapposizione semplificata, non un sostituto di uno spettrofotometro. Nel lavoro reale sulle tracce forensi, il confronto dei coloranti può richiedere microspettrofotometria, cromatografia su strato sottile, chimica estrattiva, controlli di riferimento e incertezza documentata. Il grafico serve a mostrare perché due fibre che appaiono simili al microscopio possono comunque essere distinte tramite la chimica dei coloranti.',
    },
    {
      type: 'paragraph',
      html: 'Gli esaminatori forensi devono documentare ogni fase del processo di analisi delle fibre. Ciò include scattare fotografie dettagliate, registrare misurazioni e mantenere una catena di custodia per tutti i reperti fisici. Il simulatore aiuta gli studenti a comprendere l\'importanza della documentazione sistematica e del confronto obiettivo nel lavoro forense. Interagendo con diverse impostazioni, gli utenti possono apprendere in che modo il percorso della luce, lo spessore del campione e la concentrazione del colorante influenzano le curve spettrali e l\'aspetto fisico.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fibra dubbia', definition: 'Una fibra recuperata da una scena, vittima, sospetto, strumento, veicolo o altro oggetto la cui origine è sconosciuta.' },
        { term: 'Fibra nota', definition: 'Una fibra di referência prelevata da un tessuto o oggetto noto per il confronto con il campione dubbio.' },
        { term: 'Birifrangenza', definition: 'Comportamento ottico per cui un materiale presenta indici di rifrazione diversi a seconda della direzione della luce o della polarizzazione.' },
        { term: 'Spettro UV-Vis', definition: 'Grafico che mostra l\'intensità con cui un colorante o un materiale assorbe la luce a diverse lunghezze d\'onda.' },
        { term: 'Caratteistica di classe', definition: 'Proprietà che consente di associare una traccia a un gruppo di potenziali fonti anziché a una singola fonte univoca.' },
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio di interpretazione per gli studenti',
      html: 'Un punteggio elevato di somiglianza deve essere interpretato come <strong>compatibilità</strong>, non come identità. Le tracce sono più forti quando microscopia, chimica, contesto di trasferimento, persistenza, metodo di recupero e controlli anticontaminazione puntano tutti nella stessa direzione.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Mantenere la conclusione entro i limiti delle prove',
      html: 'Un microscopio nel browser non può convalidare una corrispondenza tra fibre. I rapporti formali devono descrivere le osservazioni, la base di confronto, le limitazioni e il livello di supporto senza esagerare l\'attribuzione dell\'origine.',
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
      applicationCategory: 'ForensicApplication',
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
