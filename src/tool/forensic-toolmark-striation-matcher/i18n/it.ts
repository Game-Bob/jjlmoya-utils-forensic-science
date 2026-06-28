import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'comparatore-estrie-impronte-utensili-forense';
const title = 'Comparatore di strie e impronte di utensili forense';
const description = 'Carica immagini di impronte note e dubbie, allineale in un microscopio di confronto a schermo diviso e ispeziona la continuità delle strie con controlli visivi.';

const howTo = [
  {
    name: 'Carica le immagini di confronto',
    text: 'Carica un\'immagine di impronta di prova nota e un\'immagine di impronta dubbia dal tuo materiale di caso, note o set di addestramento.',
  },
  {
    name: 'Sposta la divisione del confronto',
    text: 'Trascina sul visualizzatore ottico per esporre una parte maggiore dell\'impronta nota o di quella dubbia, mantenendo entrambi i campioni in un unico campo.',
  },
  {
    name: 'Regola offset, rotazione, zoom e contrasto',
    text: 'Usa i controlli micrometrici per traslare e ruotare l\'immagine dubbia, quindi regola zoom, contrasto e luminosità per mantenere visibili le strie più tenui.',
  },
  {
    name: 'Esporta la vista di confronto',
    text: 'Quando l\'allineamento visivo è pronto, esporta una vista PNG per discussioni, revisioni in classe o illustrazioni per le note del caso.',
  },
];

const faq = [
  {
    question: 'Che cos\'è un confronto forense di impronte di utensili?',
    answer: 'Il confronto forense delle impronte di utensili esamina i segni prodotti quando un utensile entra in contatto, taglia, graffia, fa leva o comprime un\'altra superficie. Gli esaminatori confrontano caratteristiche di classe, qualità dell\'impronta e dettagli microscopici delle strie tra impronte dubbie e impronte di prova note.',
  },
  {
    question: 'Questo strumento online può identificare l\'esatto utensile che ha prodotto un\'impronta?',
    answer: 'No. Questa area di lavoro serve per l\'allineamento visivo e l\'apprendimento. Non calcola l\'attribuzione della fonte, la probabilità, il tasso di errore o una conclusione forense automatizzata.',
  },
  {
    question: 'Perché l\'offset, la rotazione e lo zoom sono importanti nel confronto delle impronte?',
    answer: 'Piccole differenze nell\'angolo dell\'utensile, pressione, scala, posizione della fotocamera e posizionamento laterale possono far apparire disallineate serie di strie simili. I controlli di offset, rotazione e zoom aiutano a posizionare due immagini in una posizione di visualizzazione comparabile.',
  },
  {
    question: 'Quali immagini funzionano meglio per l\'allineamento visivo delle impronte di utensili?',
    answer: 'Usa immagini nitide, ben illuminate e riprese il più perpendicolarmente possibile, con una sufficiente sovrapposizione nella regione dell\'impronta. Evita sfocature marcate, riflessi estremi, distorsioni prospettiche e immagini in cui l\'area delle strie è troppo corta o danneggiata.',
  },
  {
    question: 'Cosa deve documentare un utente dopo aver allineato due immagini di impronte?',
    answer: 'Documenta la fonte di ciascuna immagine, se si tratta di un\'impronta dubbia o nota, le impostazioni di allineamento utilizzate, eventuali regolazioni dell\'immagine applicate, le aree visibili di accordo o disaccordo e i limiti di qualità dell\'immagine.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Vista al microscopio di confronto divisa di strie di impronte di utensili note e dubbie',
    splitLabel: 'Sposta divisione confronto',
    units: 'Sistema di unità di offset',
    metric: 'Metrico',
    imperial: 'Imperiale',
    toolProfile: 'Profilo utensile',
    loadImages: '1. Carica',
    alignImage: '2. Allinea immagine dubbia',
    adjustImage: '3. Regola visibilità',
    outputControls: 'Controlli di output',
    demoOptions: 'Opzioni demo',
    uploadKnown: 'Immagine nota/prova',
    uploadQuestioned: 'Immagine dubbia',
    noFile: 'Nessuna immagine caricata',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Punta di cacciavite',
    prybar: 'Bordo di piede di porco',
    boltCutter: 'Ganascia di cesoia',
    offset: 'Offset orizzontale',
    rotation: 'Rotazione angolare',
    zoom: 'Zoom immagine',
    contrast: 'Contrasto',
    brightness: 'Luminosità',
    microns: 'micron',
    thousandths: 'millesimi',
    degrees: 'gradi',
    correlation: 'Modo / punteggio',
    verdictStrong: 'allineamento forte',
    verdictPartial: 'allineamento parziale',
    verdictWeak: 'allineamento debole',
    center: 'Centra',
    fineTip: 'linee sottili di trascinamento',
    wideEdge: 'compressione ampia',
    crushJaw: 'creste di schiacciamento accoppiate',
    grid: 'Griglia',
    exportImage: 'Esporta vista',
    exportFilename: 'vista-confronto-impronte-utensili.png',
    phaseFit: 'Adattamento di fase',
    rotationFit: 'Adattamento di rotazione',
    knownMark: 'Impronta nota',
    questionedMark: 'Impronta dubbia',
    reliefGraph: 'Rilievo micro-superficiale digitalizzato',
    visualMode: 'Visivo',
    visualVerdict: 'confronto manual',
    visualInterpretation: 'Solo allineamento visivo. Non viene calcolata alcuna conclusione forense automatizzata.',
    interpMatch: 'Anteprima demo. Carica immagini per confrontare impronte reali.',
    interpPossible: 'Anteprima demo. Regola l\'allineamento o carica immagini.',
    interpMismatch: 'Anteprima demo. Ricentra o carica immagini.',
    disclaimer: 'Solo area di lavoro visiva.',
  },
  seo: [
    {
      type: 'title',
      text: 'Microscopio di confronto di impronte di utensili forense online',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Spazio visivo',
      title: 'Confronta immagini di impronte di utensili dubbie e note nel tuo browser',
      html: 'Questa area di lavoro per il confronto delle impronte di utensili ti consente di caricare due immagini, posizionarle in un microscopio di confronto a schermo diviso e regolare l\'impronta dubbia finché le linee di strie, segni di pressione, graffi o solchi microscopici possono essere esaminati fianco a fianco. È progettato per studenti di scienze forensi, docenti, investigatori e team legali che necessitano di un modo chiaro per spiegare il <strong>confronto tra impronte di utensili note e dubbie</strong> senza installare software di microscopia specializzato.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 caricamenti', label: 'immagini note e dubbie', icon: 'mdi:image-plus' },
        { value: 'schermo diviso', label: 'layout microscopio di confronto', icon: 'mdi:compare-horizontal' },
        { value: 'allineamento', label: 'controlli di offset, rotazione e zoom', icon: 'mdi:axis-arrow' },
        { value: 'esporta PNG', label: 'salva la vista di confronto', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'Quando questa area di lavoro per il confronto delle impronte è utile',
      items: [
        'Insegnare come i microscopi di confronto posizionano un\'impronta di prova nota accanto a un\'impronta dubbia.',
        'Preparare dimostrazioni in classe con immagini di impronte reali o di addestramento.',
        'Spiegare in che modo l\'allineamento, la scala, la rotazione, l\'illuminazione e il contrasto influenzano l\'interpretazione delle strie.',
        'Creare una chiara illustrazione visiva per le note del caso o i rapporti senza dichiarare un\'identificazione automatizzata.',
        'Valutare la qualità dell\'immagine prima di decidere se un\'impronta è idonea per un confronto formale in laboratorio.',
      ],
    },
    {
      type: 'title',
      text: 'Come confrontare le immagini delle impronte di utensili online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Inizia caricando un\'immagine di un\'<strong>impronta nota</strong> e un\'immagine di un\'<strong>impronta dubbia</strong>. Un\'impronta nota viene solitamente prodotta in condizioni controllate con un utensile specifico sospettato. Un\'impronta dubbia è quella recuperata da una scena, oggetto, telaio della porta, serratura o altro elemento la cui origine è sconosciuta. L\'obiettivo del comparatore non è decidere l\'identità in modo automatico, ma porre le due immagini in una relazione visiva utile affinché l\'utente possa ispezionare la continuità e le discrepanze.',
    },
    {
      type: 'paragraph',
      html: 'Una volta caricate entrambe le immagini, usa il cursore di divisione per mostrare più o meno di ciascun lato. Regola l\'offset orizzontale per mettere in fase le strie, quindi ruota l\'immagine dubbia per compensare l\'angolo della fotocamera o dell\'utensile. Lo zoom aiuta quando le due immagini sono state acquisite a ingrandimenti diversi. Il contrasto e la luminosità aiutano a rivelare graffi deboli o impronte superficiali, ma queste regolazioni devono essere documentate poiché modificano l\'aspetto originale dell\'immagine.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Cosa ti consente di osservare l\'area di lavoro',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Una buona configurazione divisa rende più facile ispezionare se due impronte condividono una struttura visiva comparabile dopo un attento allineamento.',
          points: ['Direzione simile delle strie o delle creste', 'Continuità su più dettagli vicini', 'Differenze di scala e rotazione che richiedono correzione', 'Aree in cui la qualità dell\'impronta è sufficiente per l\'analisi', 'Discrepanze evidenti delle caratteristiche di classe che possono terminare anticipatamente il confronto'],
        },
        {
          title: 'Cosa non può provare',
          icon: 'mdi:alert-circle-outline',
          description: 'Questo strumento per browser non è un sistema di identificazione forense validato e non deve essere utilizzato come tale.',
          points: ['Nessuna conclusione automatizzata di origine comune', 'Nessuna probabilità di corrispondenza casuale', 'Nessuna stima della frequenza di popolazione', 'Non sostituisce l\'esame delle prove fisiche originali', 'Non sostituisce il controllo di qualità del laboratorio o la revisione paritaria'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Controllo', 'Cosa modifica', 'Perché è importante'],
      rows: [
        ['Caricamento immagine nota', 'Carica l\'impronta di controllo o riferimento.', 'Il lato noto deve provenire da un\'impronta di prova documentata o da un esempio di addestramento.'],
        ['Caricamento immagine dubbia', 'Carica l\'impronta di origine sconosciuta.', 'Questo lato viene spostato e regolato per cercare un orientamento comparabile.'],
        ['Cursore di divisione', 'Modifica la porzione visibile di ciascuna immagine.', 'Una divisione mobile aiuta a controllare se le linee continuano visivamente oltre il confine.'],
        ['Offset orizzontale', 'Sposta l\'immagine dubbia a sinistra o a destra.', 'Piccoli spostamenti laterali possono mettere le creste corrispondenti in fase o fuori fase.'],
        ['Rotazione', 'Ruota l\'immagine dubbia.', 'L\'angolo dell\'utensile, della fotocamera o del montaggio può creare deviazioni angolari tra le immagini.'],
        ['Zoom', 'Modifica l\'ingrandimento mostrato.', 'Scale di immagine differenti devono essere rese comparabili prima di valutare i dettagli.'],
        ['Contrasto e luminosità', 'Regolano la visibilità mostrata.', 'Le strie a basso contrasto possono diventare più facili da vedere, ma le regolazioni devono essere annotate.'],
        ['Esporta vista', 'Salva un file PNG dell\'allineamento corrente.', 'Utile per verifiche in classe, note, discussioni o rapporti che descrivano chiaramente i limiti.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Qualità immagine',
      title: 'Una cattiva immagine può rendere impossibile un buon confronto',
      html: 'Il confronto delle impronte di utensili dipende fortemente dalla qualità dell\'immagine. Sfocature, riflessi, artefatti di compressione, ombre pronunciate, distorsioni prospettiche e solchi molto corti possono creare impressioni visive fuorvianti. Se un\'impronta non può essere orientata, scalata e illuminata chiaramente, la conclusione appropriata potrebbe essere che l\'immagine non è idonea per un confronto significativo.',
    },
    {
      type: 'summary',
      title: 'Lista di controllo pratica prima di confrontare due impronte',
      items: [
        'Conferma quale immagine è l\'impronta dubbia e quale l\'impronta nota o di prova.',
        'Verifica che entrambe le immagini mostrino lo stesso tipo di impronta generale, la stessa area di contatto dell\'utensile e lo stesso orientamento.',
        'Evita di confrontare singole linee isolate; cerca sequenze di dettagli contigui che persistono per una lunghezza utile.',
        'Usa il contrasto e la luminosità con moderazione e registra quando sono state applicate migliorie alle immagini.',
        'Esporta la vista allineata solo come illustrazione di ciò che è stato visualizzato, non come prova di identità.',
      ],
    },
    {
      type: 'title',
      text: 'Evidenze di impronte note rispetto a impronte dubbie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un\'impronta dubbia viene solitamente recuperata da un oggetto coinvolto in un incidente, come un segno di leva su una porta, un taglio su un filo, un graffio su metallo o un segno di compressione su una superficie più morbida. Un\'impronta nota viene prodotta da un utensile sospetto in condizioni controllate o documentate. Nel lavoro forense formale, gli esaminatori valutano se le caratteristiche di classe sono coerenti prima di dedicare tempo al dettaglio delle strie fini. Se le caratteristiche di classe non corrispondono, la somiglianza microscopica in una piccola area non è sufficiente a supportare un\'associazione.',
    },
    {
      type: 'paragraph',
      html: 'L\'area di lavoro del browser è intenzionalmente conservativa. Ti aiuta ad allineare le immagini e a discutere le caratteristiche visive, ma non modella l\'usura dell\'utensile, le caratteristiche di sottoclasse, la deformazione del substrato, i segni di fabbricazione, le soglie decisionali dell\'esaminatore, l\'incertezza di misura o i tassi di errore. Un flusso di lavoro responsabile considera l\'immagine esportata come un ausilio di comunicazione, non come un risultato di identificazione.',
    },
    {
      type: 'proscons',
      title: 'Punti di forza e limiti del confronto online delle immagini delle impronte di utensili',
      items: [
        { pro: 'Modo rapido per caricare due immagini e controllare l\'allineamento senza installare software desktop.', con: 'La vista del browser non è un microscopio di confronto forense calibrato.' },
        { pro: 'Utile per insegnare come il confronto a schermo diviso e l\'orientamento influenzano ciò che l\'utente vede.', con: 'Il miglioramento dell\'immagine può migliorare la visibilità, ma può anche alterare l\'aspetto delle caratteristiche.' },
        { pro: 'Le viste PNG esportate sono utili per note, discussioni e spiegazioni visive.', con: 'Una vista esportata non conserva il contesto probatorio completo, i metadati o la catena di custodia.' },
        { pro: 'Funziona con immagini reali caricate dall\'utente anziché solo impronte sintetiche.', con: 'Lo strumento non può determinare se due impronte provengono dallo stesso utensile.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Impronta dubbia', definition: 'Un\'impronta recuperata da un oggetto o da una scena del crimine la cui origine è sconosciuta.' },
        { term: 'Impronta di prova nota', definition: 'Un\'impronta controllata creata con un utensile specifico per il confronto con l\'impronta dubbia.' },
        { term: 'Stria', definition: 'Una linea o solco microscopico creato quando la superficie di un utensile scorre su un altro materiale.' },
        { term: 'Caratteristiche di classe', definition: 'Caratteristiche condivise da un gruppo di utensili, come la larghezza della lama, la forma generale o il tipo di utensile.' },
        { term: 'Caratteristiche individuali', definition: 'Dettagli fini della superficie che possono derivare da produzione, uso, danno o usura.' },
        { term: 'Caratteristiche di sottoclasse', definition: 'Caratteristiche condivise da un sottogruppo di utensili a causa dei processi di produzione; possono complicare l\'interpretazione dell\'origine.' },
        { term: 'Idoneità', definition: 'Un giudizio sul fatto che un\'impronta contenga una qualità e una quantità di dettagli sufficienti a supportare il confronto.' },
      ],
    },
    {
      type: 'tip',
      title: 'Termini di ricerca consigliati a cui questa pagina risponde',
      html: 'Gli utenti che cercano questo tipo di area di lavoro spesso cercano frasi come <strong>microscopio di confronto impronte utensili online</strong>, <strong>confronto strie forense</strong>, <strong>impronta nota vs dubbia</strong>, <strong>confrontare impronte utensili da immagini</strong> e <strong>simulatore microscopio confronto forense</strong>. La pagina è costruita attorno a questi compiti reali: caricare, allineare, ispezionare, documentare e comprendere i limiti.',
    },
    {
      type: 'table',
      headers: ['Domanda comune dell\'utente', 'Risposta breve'],
      rows: [
        ['Posso caricare le mie immagini di impronte di utensili?', 'Sì. Lo strumento è progettato per immagini dubbie e note caricate dall\'utente.'],
        ['L\'applicazione decide se le due impronte corrispondono?', 'No. Supporta solo l\'allineamento visivo e non emette una conclusione forense sull\'origine comune.'],
        ['Perché si sposta l\'immagine dubbia anziché entrambe?', 'Mantenere il lato noto fisso rende più semplice documentare come è stata regolata l\'immagine dubbia.'],
        ['Posso usarlo per impronte di armi da fuoco o bossoli?', 'Può aiutare a dimostrare i concetti di allineamento dell\'immagine, ma il confronto di armi da fuoco e cartucce richiede procedure specifiche della disciplina e revisioni validate.'],
        ['Posso includere il PNG esportato nelle mie note?', 'Sì, a condizione che sia chiaramente descritto come una vista illustrativa prodotta mediante controlli di regolazione visiva.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Cautela forense',
      title: 'Usa un linguaggio prudente quando descrivi i confronti di impronte di utensili',
      html: 'Evita di trasformare un allineamento visivo in una conclusione più forte di quanto le prove supportino. Il linguaggio appropriato dipende dalla giurisdizione, dalla politica del laboratorio, dalla validazione, dalla qualità dell\'immagine, dalla revisione dell\'esaminatore e dal contesto del caso. Questo strumento online deve essere descritto come un ausilio per il confronto visivo, non come un metodo validato per individualizzare un utensile.',
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
