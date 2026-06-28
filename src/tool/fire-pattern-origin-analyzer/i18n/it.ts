import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'analizzatore-origine-modelli-incendio';
const title = 'Analizzatore dell\'origine tramite modelli di incendio';
const description = 'Mappa modelli a V, carbonizzazione profonda, ombre di fuliggine e indicatori di bruciatura pulita su una planimetria, quindi proietta vettori di propagazione del fuoco per stimare l\'area d\'origine più probabile.';

const howTo = [
  {
    name: 'Importare una planimetria della scena',
    text: 'Trascina un\'immagine della planimetria nell\'area di lavoro o caricala dal disco prima di posizionare i vettori di prova.',
  },
  {
    name: 'Cliccare per aprire il selettore radiale delle prove',
    text: 'Posiziona il puntatore su un segno di bruciatura, apri il menu radiale contestuale e scegli il tipo di indicatore direttamente sulla mappa.',
  },
  {
    name: 'Trascinare per rifinire i vettori e osservare la convergenza',
    text: 'Estendi ogni vettore di propagazione con aggancio sulla tela e osserva il campo di probabilità ricalcolarsi in tempo reale man mano che le prove si accumulano.',
  },
  {
    name: 'Esportare l\'istantanea tecnica',
    text: 'Genera un rapporto strutturato con coordinate dell\'origine, confidenza, varianza, stato dei livelli e l\'insieme completo dei vettori per una revisione successiva.',
  },
];

const faq = [
  {
    question: 'I modelli di bruciatura possono provare il punto esatto in cui è iniziato un incendio?',
    answer: 'No. I modelli di incendio possono aiutare a generare e testare ipotesi sull\'origine, ma ventilazione, spegnimento, carico di combustibile, flashover e disturbi post-incendio possono distorcere i modelli. La determinazione reale dell\'origine richiede un\'indagine sistematica.',
  },
  {
    question: 'Perché i modelli a V sono importanti nell\'indagine antincendio?',
    answer: 'I modelli a V spesso riflettono la propagazione verso l\'alto e verso l\'esterno delle fiamme su superfici verticali. Possono indicare un\'area d\'origine più bassa, ma devono essere confrontati con altre prove prima di trarre conclusioni.',
  },
  {
    question: 'Cosa indica la carbonizzazione profonda?',
    answer: 'La carbonizzazione profonda può indicare un riscaldamento più prolungato, un flusso termico maggiore o effetti del combustibile. È un contesto utile, ma non segna automaticamente l\'origine perché i materiali carbonizzano a velocità diverse.',
  },
  {
    question: 'Perché usare più vettori invece di una sola freccia?',
    answer: 'Un singolo modello può essere fuorviante. Più vettori indipendenti riducono l\'influenza di una parete danneggiata, un singolo pacchetto di combustibile o un unico percorso di ventilazione.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Area di lavoro forense interattiva per disegnare vettori di propagazione del fuoco',
    vPattern: 'Modello a V',
    deepChar: 'Carbonizzazione profonda',
    sootShadow: 'Ombra di fuliggine',
    cleanBurn: 'Bruciatura pulita',
    loadPlan: 'Carica planimetria',
    generateReport: 'Genera rapporto',
    pointerLabel: 'Puntatore',
    resetVectors: 'Reimposta',
    estimatedOrigin: 'Origine stimata',
    visibleLayers: 'Livelli di prova visibili',
    vectorsLabel: 'VETTORI',
    confidenceLabel: 'CONFIDENZA',
    varianceLabel: 'VARIANZA',
    modeLabel: 'MODALITÀ',
    guideSummary: 'Come usare questo strumento',
    flowPanelTitle: 'Flusso di lavoro',
    legendPanelTitle: 'Legenda delle prove',
    readoutPanelTitle: 'Pannello dei risultati',
    flow1Kicker: 'FASE 1',
    flow1Icon: '1',
    flow1Title: 'Carica',
    flow1Text: 'Carica la planimetria della scena',
    flow2Kicker: 'FASE 2',
    flow2Icon: '2',
    flow2Title: 'Scegli indizio',
    flow2Text: 'Clicca sul segno di bruciatura',
    flow3Kicker: 'FASE 3',
    flow3Icon: '3',
    flow3Title: 'Trascina vettore',
    flow3Text: 'Mira la direzione del fuoco',
    flow4Kicker: 'FASE 4',
    flow4Icon: '4',
    flow4Title: 'Leggi risultato',
    flow4Text: 'Controlla il piè di pagina + esporta',
    basicsTitle: 'Cosa fare prima',
    basicsIntro: 'Carica una planimetria chiara, segna solo i modelli che puoi giustificare e distribuisci i vettori su superfici diverse invece di ripetere lo stesso indizio.',
    indicatorsTitle: 'Cosa significa ogni tipo di prova',
    vPatternShort: 'Bruciatura murale che si apre verso l\'alto',
    vPatternExplain: 'Un modello a V è la familiare forma di bruciatura verso l\'alto e verso l\'esterno spesso vista su una parete. Può suggerire che il calore e le fiamme siano saliti da un\'area più bassa, ma non è una prova automatica dell\'origine esatta.',
    deepCharShort: 'Area bruciata più intensamente o più a lungo',
    deepCharExplain: 'La carbonizzazione profonda significa che un materiale appare più bruciato, annerito o consumato in un\'area rispetto a ciò che la circonda. Può indicare un riscaldamento più lungo o più intenso, ma il tipo di combustibile e lo spessore del materiale contano molto.',
    sootShadowShort: 'Fumo bloccato o reindirizzato',
    sootShadowExplain: 'Un\'ombra di fuliggine è un\'area protetta o diversamente annerita che suggerisce che un oggetto, una superficie o un flusso d\'aria ha modificato il modo in cui la fuliggine si è depositata. Può aiutare a ricostruire cosa era presente o come si è mosso il fumo.',
    cleanBurnShort: 'Meno fuliggine per calore o flusso d\'aria',
    cleanBurnExplain: 'La bruciatura pulita è un\'area in cui la fuliggine appare più chiara, rimossa o assente perché il calore, la ventilazione o l\'esposizione diretta alla fiamma l\'hanno influenzata diversamente. È utile, ma non ogni area pulita segna l\'origine.',
    resultsTitle: 'Come leggere il risultato',
    resultsIntro: 'Usa il piè di pagina come controllo rapido della tua mappatura, non come conclusione forense definitiva.',
    resultsPoint1: 'Quante linee di prova sono attive.',
    resultsPoint2: 'Quanto fortemente concordano i vettori attivi.',
    resultsPoint3: 'Quanto è ancora ampia l\'area d\'origine.',
    resultsPoint4: 'Cosa lo strumento si aspetta che tu faccia dopo.',
    awaitingVector: 'In attesa del vettore',
    selectIndicator: 'Seleziona indicatore',
    refiningVector: 'Rifinitura del vettore',
    needsMoreVectors: 'Servono più vettori',
    wideArea: 'Area d\'origine ampia',
    focusedArea: 'Area d\'origine concentrata',
    dropPlan: 'Rilascia l\'immagine della planimetria o clicca per caricare',
    needsMoreVectorsText: 'Disegna almeno due frecce direzionali chiare. Tre o più osservazioni indipendenti di solito rendono la convergenza molto più facile da interpretare.',
    wideAreaText: 'Le linee proiettate si intersecano, ma la dispersione è ancora ampia. In una scena reale, confronta ventilazione, carico di combustibile, effetti di spegnimento e informazioni dei testimoni prima di restringere l\'origine.',
    focusedAreaText: 'I vettori convergono in un\'area compatta. Consideralo un forte segnale didattico per lo sviluppo di ipotesi sull\'origine, non una conclusione forense definitiva.',
    disclaimer: 'Solo simulazione educativa. L\'indagine reale sull\'origine e la causa di un incendio deve seguire le guide accettate, i protocolli di sicurezza sulla scena, gli standard di documentazione e la revisione qualificata di esperti.',
  },
  seo: [
    {
      type: 'title',
      text: 'Analisi interattiva dell\'origine dell\'incendio dai vettori dei modelli di bruciatura',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Simulatore didattico',
      title: 'Cosa insegna questo analizzatore dell\'origine tramite modelli di incendio',
      html: 'Questo strumento browser dimostra come gli investigatori ragionano dai modelli fisici di incendio verso una probabile <strong>area d\'origine</strong>. Gli utenti mappano le prove visibili, disegnano vettori direzionali di propagazione e osservano le linee proiettate convergere o disperdersi. Il modello è intenzionalmente educativo: insegna geometria e interpretazione dei modelli, non la determinazione legale delle cause.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 livelli', label: 'Modello V, carbonizzazione, fuliggine, bruciatura pulita', icon: 'mdi:layers-triple' },
        { value: 'Planimetria 2D', label: 'mappa strutturale della stanza', icon: 'mdi:floor-plan' },
        { value: '3+ frecce', label: 'osservazioni raccomandate', icon: 'mdi:vector-line' },
        { value: '0-100%', label: 'input di confidenza', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Un flusso di lavoro disciplinato per l\'interpretazione dei modelli di incendio',
      items: [
        'Inizia con sicurezza, preservazione della scena, fotografie, schizzi e documentazione sistematica prima di interpretare i modelli.',
        'Separa i tipi di modello in modo che il danno a V, la profondità di carbonizzazione, il deposito di fuliggine e la bruciatura pulita non siano ridotti a un\'unica ipotesi.',
        'Disegna indicatori direzionali solo dove il modello fisico supporta una direzione di propagazione difendibile.',
        'Cerca la convergenza tra osservazioni indipendenti invece di affidarti al danno più appariscente.',
        'Usa l\'area d\'origine stimata come ipotesi da testare rispetto a combustibili, fonti di accensione, ventilazione, prove elettriche e testimonianze.',
      ],
    },
    {
      type: 'table',
      headers: ['Modello', 'Valore potenziale', 'Principale cautela'],
      rows: [
        ['Modello a V', 'Può suggerire propagazione verso l\'alto e verso l\'esterno da un\'area più bassa.', 'Può essere alterato da ventilazione, flashover, geometria delle pareti e spegnimento.'],
        ['Carbonizzazione profonda', 'Può indicare esposizione prolungata al calore o combustione intensa.', 'Il tipo di combustibile e lo spessore del materiale influenzano fortemente la profondità di carbonizzazione.'],
        ['Ombra di fuliggine', 'Può rivelare aree protette, posizionamento di oggetti o effetti del flusso d\'aria.', 'Lo spostamento di mobili o l\'attività di spegnimento possono cambiare l\'interpretazione.'],
        ['Bruciatura pulita', 'Può mostrare calore elevato, ventilazione o combustione in fase avanzata.', 'Non identifica automaticamente il primo materiale acceso.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ipotesi d\'origine migliori',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Le migliori ipotesi spiegano più osservazioni contemporaneamente.',
          points: ['I vettori indipendenti convergono', 'Le prove corrispondono ai percorsi di ventilazione noti', 'I pacchetti di combustibile sono contabilizzati', 'Le origini alternative sono testate attivamente'],
        },
        {
          title: 'Ipotesi d\'origine deboli',
          icon: 'mdi:alert-circle-outline',
          description: 'Le ipotesi deboli spesso si basano su un unico modello senza testare i fattori di distorsione.',
          points: ['Una singola area carbonizzata è trattata come prova', 'Il flashover è ignorato', 'Il danno da spegnimento non è documentato', 'Le prove della fonte di accensione sono presupposte'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Come funziona il modello vettoriale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ogni freccia è trattata come una linea proiettata di propagazione del fuoco. Lo stimatore calcola le intersezioni di linee a coppie, filtra i punti che rientrano in un limite ragionevole della planimetria, media gli incroci rimanenti e riporta un raggio basato sulla dispersione di quelle intersezioni. Un raggio piccolo con diversi vettori produce un segnale di convergenza più forte. Il modello di intersezione funziona risolvendo le equazioni parametriche di due linee che si estendono dai rispettivi marcatori di prova. Quando due vettori puntano verso una regione condivisa, il loro punto di incrocio teorico contribuisce con una coordinata al gruppo di mediazione. Più vettori indipendenti partecipano, più lo stimatore può filtrare gli incroci lontani dal cluster principale, riducendo efficacemente l\'influenza di ogni singola osservazione che potrebbe essere mal orientata o interpretata.',
    },
    {
      type: 'paragraph',
      html: 'Questo approccio geometrico rispecchia un esercizio in aula: aiuta gli studenti a capire perché l\'analisi dell\'origine migliora quando le osservazioni provengono da superfici e tipi di modello diversi. Espone anche un problema comune: le frecce possono intersecarsi anche quando l\'interpretazione sottostante è scarsa, quindi il centro matematico non deve mai sostituire il giudizio della scienza del fuoco. In un\'indagine reale, i professionisti confrontano il risultato tracciato con i percorsi di ventilazione, la distribuzione del carico di combustibile, i danni strutturali e le dichiarazioni dei testimoni prima di trattare qualsiasi coordinata come probabile origine. Lo strumento incoraggia questa abitudine mostrando la varianza accanto al punto stimato, ricordando agli utenti che un gruppo compatto di incroci è forte solo quanto la qualità delle osservazioni che lo hanno prodotto.',
    },
    {
      type: 'paragraph',
      html: 'Oltre alla logica di intersezione di base, lo stimatore applica un vincolo di confine in modo che gli incroci situati molto al di fuori del piano della stanza vengano esclusi. Ciò impedisce ai valori anomali di trascinare il centro medio verso posizioni impossibili. Il raggio finale rappresenta la deviazione standard delle coordinate di incrocio rimanenti, fornendo una misura diretta di quanto coerentemente i vettori attivi concordano. Un raggio inferiore al dieci percento dell\'estensione del piano indica una forte convergenza. Un raggio superiore a un quarto del piano segnala che le prove non supportano ancora un\'origine focalizzata e che sono necessarie più o migliori osservazioni prima di trarre conclusioni.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Area d\'origine', definition: 'La regione generale dove le prove disponibili suggeriscono che l\'incendio sia iniziato.' },
        { term: 'Modello a V', definition: 'Un modello di incendio che spesso appare come danno verso l\'alto e verso l\'esterno su una superficie verticale.' },
        { term: 'Bruciatura pulita', definition: 'Un\'area più chiara o più pulita causata quando la fuliggine viene bruciata o non si deposita in condizioni di calore elevato o flusso d\'aria.' },
        { term: 'Ombra di fuliggine', definition: 'Un\'area di fuliggine protetta o depositata diversamente che può conservare informazioni su oggetti, flusso d\'aria o esposizione al calore.' },
        { term: 'Convergenza vettoriale', definition: 'Il raggruppamento di indicatori direzionali proiettati intorno a una regione comune.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Cautela forense',
      title: 'Non trasformare la convergenza in certezza',
      html: 'Un gruppo di intersezioni compatto è utile solo quando le osservazioni sono valide. Le indagini reali devono tenere conto di ventilazione, flashover, pacchetti di combustibile, impianti elettrici, prove di elettrodomestici, testimonianze, spegnimento e alterazione della scena.',
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
