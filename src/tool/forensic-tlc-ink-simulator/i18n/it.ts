import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-cromatografia-strato-sottile-tlc-inchiostro';
const title = 'Simulatore di Cromatografia su Strato Sottile (TLC) di Inchiostri Forensi';
const description = 'Simula la cromatografia su strato sottile di inchiostri per scrittura sospetti, visualizza lo sviluppo del fronte del solvente, separa le bande di pigmento e calcola i valori di Rf esatti per ciascun pigmento.';

const howTo = [
  {
    name: 'Scegliere l\'inchiostro sospetto o la penna di confronto',
    text: 'Seleziona l\'inchiostro della lettera di riscatto o il profilo di una penna sospetta. Ogni inchiostro contiene un gruppo differente di coloranti con polarità e affinità specifiche per la fase stazionaria.',
  },
  {
    name: 'Selezionare la fase mobile',
    text: 'Modifica il sistema di solventi per osservare come la polarità del solvente altera lo sviluppo capillare e la migrazione relativa di ciascuna banda di colorante.',
  },
  {
    name: 'Sviluppare la piastra TLC',
    text: 'Muovi il cursore del tempo di sviluppo e osserva il fronte del solvente salire lungo la piastra mentre le bande separate compaiono sopra la linea di origine.',
  },
  {
    name: 'Leggere la tabella dei valori Rf',
    text: 'Confronta la distanza di ciascun pigmento con la distanza del fronte del solvente. Il simulatore calcola il valore Rf dividendo la distanza del pigmento per la distanza del fronte del solvente.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Cosa significa Rf nella cromatografia su strato sottile?',
    answer: 'L\'Rf è il fattore di ritenzione (retention factor): la distanza percorsa dal composto divisa per la distanza percorsa dal fronte del solvente dalla stessa linea di origine. È un valore adimensionale e varia normalmente da 0 a 1.',
  },
  {
    key: 'faq-2',
    question: 'La TLC può provare che due campioni di inchiostro provengono dalla stessa penna?',
    answer: 'No. La TLC può mostrare se i profili dei coloranti sono coerenti o meno, ma l\'attribuzione della fonte richiede metodi di confronto validati, controlli, documentazione e l\'interpretazione di un esperto.',
  },
  {
    key: 'faq-3',
    question: 'Perché il cambio di solvente altera il profilo delle bande?',
    answer: 'I coloranti si ripartiscono diversamente tra la fase stazionaria e la fase mobile. Un solvente con un\'affinità di polarità migliore può trascinare un colorante più lontano, aumentandone il valore Rf.',
  },
  {
    key: 'faq-4',
    question: 'Perché la linea di origine è importante?',
    answer: 'Sia la distanza del fronte del solvente che quella del pigmento devono essere misurate a partire della linea di origine. Misurare dal bordo inferiore della piastra produce valori Rf errati.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Camera di cromatografia su strato sottile con piastra di sviluppo',
    rulerAria: 'Righello millimetrato virtuale per misurare il fronte del solvente e le bande di pigmento',
    rulerMarks: '80,60,40,20,0',
    units: 'Sistema di unità',
    metric: 'Metrico',
    imperial: 'Imperiale',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'min',
    inkSample: 'Campione di inchiostro',
    ransomNote: 'Inchiostro sospetto della lettera di riscatto',
    bluePen: 'Penna a sfera blu sequestrata',
    blackPen: 'Penna a sfera nera sequestrata',
    gelPen: 'Penna gel sequestrata',
    solventSystem: 'Fase mobile',
    ethanolWater: 'Etanolo / acqua',
    butanolAcetic: 'Butanolo / acido acetico',
    isopropanolAmmonia: 'Isopropanolo / ammoniaca',
    developmentTime: 'Tempo di sviluppo',
    frontDistance: 'Percorso del solvente',
    matchScore: 'Somiglianza del profilo',
    solventFront: 'Fronte del solvente',
    originLine: 'Origine',
    pigment: 'Banda di pigmento',
    pigmentCyanDye: 'colorante ciano',
    pigmentVioletDye: 'colorante viola',
    pigmentGrayCarrier: 'veicolo grigio',
    pigmentNavyDye: 'colorante blu marino',
    pigmentYellowDye: 'colorante giallo',
    pigmentRedDye: 'colorante rosso',
    pigmentBlueDye: 'colorante blu',
    pigmentDarkBinder: 'legante scuro',
    pigmentTealDye: 'colorante verde acqua',
    pigmentMagentaDye: 'colorante magenta',
    pigmentGelBinder: 'legante gel',
    distance: 'Distanza',
    rfValue: 'Valore Rf',
    disclaimer: 'Solo per simulazione didattica. Il confronto forense degli inchiostri richiede documenti originali, metodi di laboratorio validati, standard di riferimento ed esaminatori di documenti qualificati.',
  },
  seo: [
    {
      type: 'title',
      text: 'Cromatografia su strato sottile per il confronto forense degli inchiostri',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Simulatore didattico',
      title: 'Cosa aiuta a comprendere questo simulatore TLC per inchiostri',
      html: 'Questo strumento spiega come la <strong>cromatografia su strato sottile di inchiostri da scrittura</strong> possa separare un tratto di inchiostro visibile in molteplici bande di colorante. È progettato per studenti di scienze forensi, apprendisti esaminatori di documenti e chiunque voglia capire come vengono calcolati i valori di Rf a partire da una piastra TLC sviluppata.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d banda / d solvente', label: 'formula del fattore di ritenzione', icon: 'mdi:division' },
        { value: '4', label: 'profili di inchiostro confrontati', icon: 'mdi:pen' },
        { value: '3', label: 'fasi mobili simulate', icon: 'mdi:flask-outline' },
        { value: '2', label: 'letture metriche e imperiali', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklist per misurazioni TLC corrette',
      items: [
        'Segnare la linea di origine sopra il livello del solvente prima dell\'inizio dello sviluppo.',
        'Rimuovere la piastra prima che il solvente raggiunga il bordo superiore.',
        'Segnare il fronte del solvente immediatamente poiché può evaporare o diventare difficile da vedere.',
        'Misurare il percorso del pigmento e del solvente a partire dalla stessa linea di origine.',
        'Riportare i valori di Rf insieme a sistema di solventi, tipo di piastra, condizioni di sviluppo e controlli.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Cosa la TLC può supportare',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'La TLC può mostrare se gli inchiostri sospetti e noti hanno un comportamento di separazione dei coloranti simile nelle stesse condizioni.',
          points: ['Confronto di screening', 'Visualizzazione del profilo dei coloranti', 'Documentazione dell\'Rf', 'Selezione dei campioni per test di conferma'],
        },
        {
          title: 'Cosa la TLC non può provare da sola',
          icon: 'mdi:alert-circle-outline',
          description: 'La TLC da sola non può identificare in modo univoco una penna, datare un documento o provare la paternità della scrittura.',
          points: ['Nessuna attribuzione esclusiva della fonte', 'Nessuna identificazione dello scrittore', 'Nessuna conclusione sull\'invecchiamento di default', 'Nessuna sostituzione dei protocolli validati'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Domanda comune', 'Concetto TLC coinvolto', 'Risposta dettagliata'],
      rows: [
        ['Come si calcola l\'Rf?', 'Distanza del colorante divisa per la distanza del fronte del solvente.', 'Misurare entrambe le distanze dalla linea di origine, quindi dividere. Il risultato non ha unità di misura.'],
        ['Perché gli inchiostri si dividono in colori?', 'Coloranti diversi hanno affinità diverse per le fasi stazionaria e mobile.', 'Un singolo tratto scritto può contenere diversi coloranti che migrano a velocità differenti.'] ,
        ['Due penne possono avere lo stesso profilo TLC?', 'Sì, formulazioni simili possono produrre profili molto vicini.', 'La somiglianza supporta la coerenza, non l\'individualizzazione a una sola penna.'],
        ['Perché il mio Rf è cambiato?', 'Solvente, piastra, umidità, saturazione, temperatura e dimensioni del punto influenzano la migrazione.', 'I valori di Rf sono confrontabili solo quando le condizioni sono controllate e documentate.'],
      ],
    },
    {
      type: 'title',
      text: 'Come il simulatore modella la separazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il modello tratta il movimento del fronte del solvente como un processo di risalita capillare che rallenta nel tempo, mentre a ogni colorante viene assegnato un valore di Rf basato su due proprietà semplificate: la sua affinità per il solvente in movimento e la sua compatibilità di polarità con la fase mobile selezionata. Questo ha uno scopo intenzionalmente didattico piuttosto che di chimica strumentale avanzata, ma preserva la relazione fondamentale che gli utenti devono apprendere: il solvente si muove per primo, i coloranti si ripartiscono tra le fasi e l\'Rf viene calcolato dalle distanze di percorso misurate.',
    },
    {
      type: 'paragraph',
      html: 'La cromatografia su strato sottile è una técnica analitica ampiamente accettata nei laboratori forensi per la sua semplicità, rapidità ed economicità. Nel contesto dell\'esame dei documenti, viene utilizzata principalmente per confrontare la composizione dei coloranti di diversi campioni di inchiostro. Gli scienziati forensi estraggono un piccolo frammento di inchiostro dal documento in esame utilizzando un bisturi o un ago cavo, lo dissolvono in un solvente adatto come la piridina o il metanolo, e lo depositano sulla piastra TLC insieme a inchiostri standard di riferimento.',
    },
    {
      type: 'paragraph',
      html: 'Una piastra sviluppata in una camera chiusa consente ai singoli componenti dell\'inchiostro di separarsi in base alla loro ripartizione differenziale tra la fase stazionaria di gel di silice e la fase mobile del solvente. Il cromatogramma risultante fornisce un\'impronta digitale visiva dell\'inchiostro, mostrando bande colorate distinte ad altezze specifiche. Gli esaminatori di documenti calcolano quindi il fattore di ritenzione per ogni banda di colorante visibile, aiutando a determinar si l\'inchiostro in questione è chimicamente coerente con uno strumento di scrittura sospetto o se corrisponde a un marchio e una formula noti in un database di riferimento.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fase stazionaria', definition: 'Il rivestimento sulla piastra TLC, comunemente gel di silice, che interagisce con i composti e ne rallenta il movimento.' },
        { term: 'Fase mobile', definition: 'Il sistema di solventi che risale lungo la piastra trascinando con sé i componenti del colorante.' },
        { term: 'Linea di origine', definition: 'La linea a matita dove viene applicato il campione di inchiostro prima dello sviluppo.' },
        { term: 'Fronte del solvente', definition: 'Il punto più alto raggiunto dalla fase mobile prima che la piastra venga rimossa.' },
        { term: 'Valore Rf', definition: 'Il fattore di ritenzione: distanza di percorso del composto divisa per la distanza di percorso del fronte del solvente.' },
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio pratico di interpretazione',
      html: 'Nell\'esame forense dei documenti, una discrepanza può essere particolarmente utile perché può escludere una formulazione di penna candidata. Un profilo TLC coincidente è un indizio più debole: indica che i campioni sono chimicamente coerenti in quelle condizioni, non che provengano necessariamente dalla stessa penna.',
    },
    {
      type: 'proscons',
      title: 'Punti di forza e limiti del confronto degli inchiostri tramite TLC',
      items: [
        { pro: 'Rapido, economico e visivamente intuitivo per separare i coloranti degli inchiostri.', con: 'Solitamente distruttivo perché un piccolo campione viene prelevato dal documento.' },
        { pro: 'I valori di Rf creano un modo strutturato per confrontare i campioni sospetti e noti.', con: 'I valori di Rf variano quando cambiano solvente, piastra, umidità e condizioni di sviluppo.' },
        { pro: 'Utile come metodo di screening prima di analisi più avanzate.', con: 'Non può portare a una conclusione univoca sulla penna di origine senza prove più ampie.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Cautela forense',
      title: 'Non sopravvalutare la cromatografia degli inchiostri',
      html: 'Una simulazione da browser non può esaminare la carta, l\'età dell\'inchiostro, la chimica di estrazione, la qualità della piastra, la contaminazione o la conferma strumentale. Utilizzala per apprendere la logica di misurazione e i limiti di interpretazione, quindi affidati a metodi di esame forense dei documenti validati per le prove reali.',
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
