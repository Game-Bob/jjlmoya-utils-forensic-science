import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calcolatore-dispersione-residui-sparo-gsr';
const title = 'Calcolatore Dispersione Residui dello Sparo (GSR)';
const description = 'Simula modelli educativi di dispersione dei residui di sparo su una superficie bersaglio in base a distanza di sparo, tipo di munizioni, dispersione radiale ed effetti termici.';

const howTo = [
  {
    name: 'Impostare la distanza di sparo',
    text: 'Spostare il comando della distanza dal contatto diretto fino a tre metri per osservare come il deposito passa da una traccia compatta e termicamente alterata a un campo di particelle disperso.',
  },
  {
    name: 'Selezionare un profilo di munizioni',
    text: 'Scegliere tra una pistola 9 mm, un revolver .38 o un fucile a canna liscia calibro 12. Ogni profilo modifica il numero di particelle, il fattore di dispersione e l\'estensione termica stimata.',
  },
  {
    name: 'Valutare il bersaglio e il cono di sparo',
    text: 'Utilizzare il bersaglio in tessuto per confrontare la densità delle particelle e la dispersione radiale, osservando il cono laterale per comprendere l\'espansione fisica della nube di residui.',
  },
  {
    name: 'Interpretare la categoria di distanza',
    text: 'Esaminare la classificazione ottenuta e i risultati attesi. I risultati descrivono il significato didattico dei pattern da contatto, contatto ravvicinato, distanza ravvicinata e lunga distanza.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'La dispersione dei residui di sparo può determinare la distanza esatta di un colpo?',
    answer: 'No. I pattern di GSR supportano una stima dell\'intervallo di distanza, non un valore esatto. La determinazione reale richiede l\'analisi dell\'arma da fuoco, delle munizioni, del materiale del bersaglio, dell\'angolo e l\'esecuzione di spari di prova comparativi in condizioni controllate.',
  },
  {
    key: 'faq-2',
    question: 'Perché gli spari a bruciapelo mostrano più fuliggine e bruciature?',
    answer: 'A distanze molto brevi, gas caldi, fuliggine, polvere incombusta e particelle metalliche dell\'innesco colpiscono il bersaglio prima che la nube si sia espansa e raffreddata, causando annerimento, bruciature e lacerazioni.',
  },
  {
    key: 'faq-3',
    question: 'Quali elementi chimici sono associati ai residui di sparo dell\'innesco?',
    answer: 'L\'analisi classica dei GSR si concentra su particelle contenenti piombo, bario e antimonio, sebbene munizioni moderne prive di piombo possano modificare questo profilo. I metodi SEM-EDS valutano congiuntamente la morfologia e la chimica delle particelle.',
  },
  {
    key: 'faq-4',
    question: 'Perché il simulatore utilizza un modello di distribuzione radiale gaussiano?',
    answer: 'La distribuzione gaussiana è un\'approssimazione didattica utile poiché la maggior parte delle particelle si concentra vicino al centro dell\'impatto. Nella realtà, vento, angolo di tiro o tipo di tessuto possono causare asimmetrie.',
  },
  {
    key: 'faq-5',
    question: 'Questo calcolatore è adatto per perizie giudiziarie?',
    answer: 'No. Si tratta di uno strumento didattico. Una perizia forense ufficiale deve basarsi su protocolli di laboratorio validati, controlli di qualità, spari di prova fisici e valutazione da parte di un esperto qualificato.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Distanza di tiro',
    units: 'Sistema di unità',
    metric: 'Metrico',
    imperial: 'Imperiale',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Profilo munizioni',
    ammoPistol9mm: 'Pistola 9 mm',
    ammoRevolver38: 'Revolver .38',
    ammoShotgun12: 'Fucile calibro 12',
    target: 'Bersaglio in tessuto',
    cone: 'Cono dei residui',
    canvasAria: 'Dispersione delle particelle di residui di sparo sul bersaglio in tessuto',
    rangeStripAria: 'Categorie di distanza',
    category: 'Interpretazione della distanza',
    categoryContactLabel: 'Contatto diretto / appoggiato',
    categoryNearContactLabel: 'Contatto ravvicinato / a bruciapelo',
    categoryCloseRangeLabel: 'Distanza ravvicinata / zona di tatuaggio',
    categoryDistantLabel: 'Lunga distanza o indeterminata',
    density: 'Densità particelle',
    thermal: 'Effetto termico',
    radius: 'Raggio stimato del pattern',
    radiusSuffix: 'di raggio',
    expected: 'Risultato atteso',
    expectedContact: 'Si attende un deposito centrale denso, possibile impronta della volata dell\'arma, annerimento da fuliggine, lacerazione del tessuto e alterazione termica nella zona d\'impatto.',
    expectedNearContact: 'Fuliggine densa e granuli di polvere concentrati intorno all\'orifizio d\'ingresso, con un alone radiale stretto e compatto.',
    expectedCloseRange: 'Il tatuaggio di polvere e i residui metallici si allargano in un anello misurabile; gli effetti termici e la fuliggine diventano trascurabili.',
    expectedDistant: 'Le particelle sono molto disperse e scarse. Determinare la distanza richiede analisi chimiche, microscopia e spari di confronto.',
    contact: 'Contatto',
    near: 'A bruciapelo',
    close: 'Distanza ravvicinata',
    distant: 'Lunga distanza',
    disclaimer: 'Solo modello didattico. La determinazione della distanza di sparo tramite GSR richiede spari di prova controllati, confronto dei supporti fisici e metodi chimici validati.',
  },
  seo: [
    {
      type: 'title',
      text: 'Stima della Distanza di Sparo dai Pattern di GSR',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Modello educativo',
      title: 'Cosa illustra questo calcolatore',
      html: 'Questo calcolatore della dispersione dei GSR illustra se un pattern di residui somiglia a uno sparo a contatto, a bruciapelo, a distanza ravvicinata o a lunga distanza. È progettato per l\'insegnamento dei concetti di <strong>determinazione della distanza di sparo</strong> tramite GSR, non per redigere perizie reali.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'distanza di sparo simulata', icon: 'mdi:ruler' },
        { value: '4', label: 'categorie di distanza spiegate', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'profili di munizioni confrontati', icon: 'mdi:ammunition' },
        { value: '2', label: 'sistemi di unità: metrico e imperiale', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'Come Interpretare il Pattern Simulato',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Lista di controllo rapida',
      items: [
        'Fuliggine centrale densa, bruciature, lacerazioni o impronta della volata indicano uno sparo a contatto o a bruciapelo.',
        'Un centro scuro compatto circondato da grani di polvere suggerisce una distanza molto breve, richiedendo spari di prova per delimitarla.',
        'Un tatuaggio disperso con poca fuliggine è caratteristico dei tiri a distanza ravvicinata, dopo l\'attenuazione degli effetti termici.',
        'L\'assenza di residui visibili a lunga distanza non esclude la presenza di GSR; analisi chimiche o microscopiche sono comunque indicate.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'A cosa serve questo strumento',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Permette di visualizzare graficamente la relazione tra distanza di sparo, densità di residui, dispersione di particelle ed effetti termici.',
          points: ['Dimostrazione didattica', 'Spiegazione tecnica', 'Nomenclatura forense', 'Confronto metrico e imperiale'],
        },
        {
          title: 'Quali limiti presenta',
          icon: 'mdi:alert-circle-outline',
          description: 'Non può calcolare la distanza reale di tiro in un caso giudiziario senza lo studio dei reperti fisici.',
          points: ['Non analizza campioni reali', 'Nessuna conferma chimica', 'Nessuno sparo sperimentale con l\'arma in causa', 'Nessun valore legale'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Domanda comune', 'Indizio chiave nel pattern', 'Risposta tecnica'],
      rows: [
        ['Come si presenta un colpo a contatto diretto?', 'Fuliggine densa, bruciature, lacerazione a croce o impronta di volata.', 'È compatibile con uno sparo a contatto, ma l\'elasticità del tessuto e i gas di scarico possono modificarne la morfologia.'],
        ['A quale distanza si trovava l\'arma?', 'Residui concentrati vicino all\'ingresso con un alone compatto.', 'Il pattern supporta un\'ipotesi di intervallo di distanza, ma il confronto con spari di prova è indispensabile.'],
        ['Cos\'è il tatuaggio da polvere da sparo?', 'Punteggiatura causata dall\'impatto di grani di polvere incombusti con poca fuliggine.', 'La sua dispersione varia in base a munizioni, tipo di tessuto, angolo e ostacoli intermedi.'],
        ['I residui scompaiono a lunga distanza?', 'Dispersione estremamente ampia e assenza di depositi visibili.', 'La traccia visibile diminuisce, ma le particelle dell\'innesco possono essere identificate in laboratorio.'],
      ],
    },
    {
      type: 'title',
      text: 'Principi Scientifici della Simulazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il simulatore utilizza una distribuzione radiale gaussiana per posizionare le particelle attorno al centro dell\'impatto. Distanze brevi generano depositi stretti e densi; distanze maggiori aumentano l\'ampiezza del pattern e riducono la densità media. Il modello differenzia la fuliggine dalle particelle dell\'innesco poiché l\'annerimento termico ha un raggio d\'azione fisico notevolmente più limitato.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Residui dello sparo (Gunshot Residue): particelle prodotte da innesco, polvere, proiettile e gas caldi generati dallo sparo.' },
        { term: 'Fuliggine', definition: 'Deposito carbonioso scuro visibile principalmente negli spari a contatto o a distanze molto ravvicinate.' },
        { term: 'Tatuaggio', definition: 'Lesioni o segni puntiformi causati dall\'impatto sulla pelle di grani di polvere incombusti o semicombusti.' },
        { term: 'Impronta di volata', definition: 'Segno o bruciatura che riproduce la sagoma della volata dell\'arma a causa dell\'estrema vicinanza di gas e calore.' },
        { term: 'Sparo di prova', definition: 'Sparo comparativo eseguito a distanze note con l\'arma e le munizioni in esame su un supporto identico.' },
      ],
    },
    {
      type: 'title',
      text: 'Categorie Forensi di Distanza',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Categoria', 'Reperti comuni', 'Limiti di interpretazione'],
      rows: [
        ['Contatto', 'Deposito centrale massivo, fuliggine, bruciatura, lacerazione o impronta della volata.', 'L\'elasticità del tessuto e lo scarico dei gas possono deformare notevolmente il diametro del foro.'],
        ['Contatto ravvicinato', 'Alone denso di fuliggine e polvere intorno all\'orifizio d\'ingresso.', 'Indumenti larghi o un ostacolo interposto possono deviare la distribuzione attesa.'],
        ['Distanza ravvicinata', 'Tatuaggio di polvere e particelle disperse senza fuliggine evidente.', 'La medesima distanza produce pattern differenti su cotone, jeans, pelle o carta.'],
        ['Lunga distanza', 'Residui visibili scarsi o assenti, ampia dispersione microscopica.', 'Analisi chimiche e microscopia elettronica a scansione sono fondamentali per rilevare particelle invisibili.'],
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio pratico di interpretazione',
      html: 'Valutate i residui dello sparo sempre sotto forma di <strong>intervallo di confronto</strong> e mai come un valore numerico fisso. La conclusione scientifica solida deriva dal confronto diretto con spari sperimentali identici.',
    },
    {
      type: 'title',
      text: 'Protocollo di Campionamento e Registrazione del Pattern',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Documentare le caratteristiche fisiche del supporto: tipo di tessuto, colore, spessore, elasticità e pieghe.',
        'Registrare marca, modello, lunghezza della canna dell\'arma, lotto di munizioni e dispositivi alla volata.',
        'Fotografare il pattern con riferimento metrico di scala, illuminazione adeguata e tracciabilità.',
        'Analizzare separatamente fuliggine, bruciature, polvere incombusta, anello di detersione e lacerazioni.',
        'Eseguire sempre spari di prova prima di formulare conclusioni sulla distanza dello sparo.',
      ],
    },
    {
      type: 'proscons',
      title: 'Simulazione digitale rispetto ad analisi balistica di laboratorio',
      items: [
        { pro: 'Facilita la comprensione didattica dell\'espansione dei residui all\'aumentare della distanza.', con: 'Non riproduce le caratteristiche esatte di un\'arma specifica o di un particolare lotto di polvere.' },
        { pro: 'Chiarisce le differenze concettuali tra le categorie di distanza di tiro.', con: 'Non sostituisce i test chimici né la microscopia elettronica a scansione (SEM-EDS).' },
        { pro: 'Aiuta a comprendere i limiti fisici dell\'analisi visiva macroscopica.', con: 'Manca di valore legale senza calibrazione sperimentale e valutazione peritale.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Avvertenza forense',
      title: 'Esclusione dell\'uso giudiziario',
      html: 'Un modello di simulazione digitale non può sostituire l\'evidenza fisica di un caso reale. Non può valutare lo stato dell\'arma, la chimica dei residui o la qualità del campionamento. Utilizzate questa pagina esclusivamente a scopo didattico e affidatevi a laboratori autorizzati per casi reali.',
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
