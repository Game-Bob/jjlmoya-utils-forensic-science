import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'zona-abitabile-stellare';
const description = 'Calcola e visualizza la zona abitabile (zona Riccioli d\'oro) intorno a diversi tipi di stelle utilizzando configurazioni stellari e planetarie.';
const title = 'Simulatore di Zona Abitabile Stellare: Trova le Zone Riccioli d\'Oro';

const howTo = [
  {
    name: 'Seleziona un preset stellare',
    text: 'Scegli un tipo di stella, dalle giganti azzurre alle nane rosse, per caricare le proprietà fisiche standard come massa, luminosità e temperatura.',
  },
  {
    name: 'Regola i parametri planetari',
    text: 'Modifica la distanza orbitale del pianeta (semiasse maggiore), l\'albedo e l\'effetto serra dell\'atmosfera utilizzando i cursori interattivi.',
  },
  {
    name: 'Analizza l\'orbita e l\'abitabilità',
    text: 'Osserva il pianeta orbitare attorno alla stella in tempo reale. Controlla se la temperatura di equilibrio e di superficie consentono la presenza di acqua liquida.',
  },
];

const faq = [
  {
    question: 'Che cos\'è la zona abitabile circumstellare ?',
    answer: 'La zona abitabile circumstellare (spesso chiamata zona Riccioli d\'oro) è la regione attorno a una stella in cui le temperature sulla superficie planetaria sono sufficienti per mantenere l\'acqua allo stato liquido sotto una data pressione atmosferica. È definita da confini conservativi e ottimistici basati sulla luminosità stellare e sulla temperatura effettiva.',
  },
  {
    question: 'In che modo la luminosità stellare influenza la zona abitabile ?',
    answer: 'La luminosità stellare determina l\'energia totale emessa dalla stella. Le stelle più calde e massicce (come quelle di tipo O, B o A) sono estremamente brillanti, posizionando le loro zone abitabili molto più lontano. Le stelle più fredde e meno massicce (come le nane arancioni o rosse di tipo K o M) hanno basse luminosità, spostando le loro zone abitabili estremamente vicino alla stella.',
  },
  {
    question: 'Qual è la differenza tra temperatura di equilibrio e di superficie ?',
    answer: 'La temperatura di equilibrio è la temperatura teorica che un pianeta avrebbe assumendo che si comporti come un corpo nero che assorbe la radiazione stellare e la irradia nuovamente nello spazio. La temperatura di superficie include l\'effetto serra dell\'atmosfera del pianeta, che trattiene il calore e riscalda ulteriormente il pianeta.',
  },
  {
    question: 'Perché l\'albedo è importante per l\'abitabilità planetaria ?',
    answer: 'L\'albedo è la misura della riflettività della superficie del pianeta. Un albedo più alto (vicino a 1.0) significa che il pianeta riflette più luce stellare incidente, raffreddandolo. Un albedo inferiore significa che viene assorbita più radiazione, aumentandone la temperatura complessiva.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Simulatore di Zona Abitabile Stellare',
    starPresetsLabel: 'Preselezioni Spettrali',
    customStarHeader: 'Parametri Stellari',
    starTemperature: 'Temperatura Effettiva (K)',
    starLuminosity: 'Luminosità (L/L⊙)',
    starMass: 'Massa (M/M⊙)',
    starRadius: 'Raggio (R/R⊙)',
    planetHeader: 'Parametri Planetari',
    planetDistance: 'Distanza Orbitale (UA)',
    planetAlbedo: 'Albedo di Bond',
    greenhouseDelta: 'Riscaldamento Serra (K)',
    resultsHeader: 'Risultati della Simulazione',
    stellarFluxResult: 'Flusso Stellare Ricevuto',
    eqTempResult: 'Temperatura di Equilibrio',
    surfTempResult: 'Temperatura di Superficie Stimata',
    orbitPeriodResult: 'Periodo Orbitale',
    orbitVelocityResult: 'Velocità Orbitale',
    hzLimitsHeader: 'Limiti della Zona Abitabile',
    innerLimit: 'Limite Interno Conservativo',
    outerLimit: 'Limite Esterno Conservativo',
    optInnerLimit: 'Limite Interno Ottimistico',
    optOuterLimit: 'Limite Esterno Ottimistico',
    orbitCanvasTitle: 'Visualizzatore Orbitale Interattivo',
    statusLabel: 'Stato di Abitabilità',
    statusTooHot: 'TROPPO CALDO (L\'acqua evapora)',
    statusHabitable: 'ABITABILE (Acqua liquida possibile)',
    statusTooCold: 'TROPPO FREDDO (L\'acqua congela)',
    statusExplanation: 'Sulla base di confini conservativi, questo pianeta si trova nello stato della zona abitabile specificato.',
    unitsLabel: 'Sistema di Unità',
    unitsScientific: 'Scientifico',
    unitsImperial: 'Imperiale',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGIA: Fisica delle Zone Abitabili Stellari',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La ricerca della vita oltre la Terra inizia con la comprensione delle condizioni fisiche necessarie per l\'esistenza di acqua liquida. Gli astrobiologi utilizzano modelli matematici per mappare i confini delle zone abitabili intorno a diversi tipi di stelle. Questo simulatore utilizza i modelli di Kopparapu et al. (2013) per stimare il flusso di energia ricevuto dai pianeti e determinare se si trovano nella zona Riccioli d\'oro. La zona abitabile è definita come la regione in cui un pianeta di massa terrestre con un\'atmosfera di CO2-H2O-N2 può mantenere acqua liquida sulla sua superficie.',
    },
    {
      type: 'title',
      text: 'Formule Matematiche e Fisica Atmosferica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I limiti della zona abitabile sono determinati calcolando il flusso stellare effettivo (Seff) richiesto per innescare condizioni di serra sfuggente o serra massima. L\'equazione per Seff dipende dalla temperatura effettiva della stella (Teff):<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>dove T* = Teff - 5780 K, e i coefficienti (a, b, c, d) sono derivati empiricamente da modelli climatici radiativi-convettivi monodimensionali. Una vez calcolato Seff, la distanza orbitale d in unità astronomiche (UA) è data da:<br><br>d = sqrt(L / Seff)<br><br>dove L è la luminosità della stella rispetto al Sole. La temperatura di equilibrio (Teq) del pianeta è calcolata assumendo un corpo nero sferico in equilibrio termico:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>dove R* è il raggio stellare, A è l\'albedo di Bond del pianeta e S è il flusso stellare ricevuto in unità della costante solare terrestre.',
    },
    {
      type: 'title',
      text: 'Classificazione Spettrale e Limiti Abitabili',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le caratteristiche stellari variano ampiamente tra i tipi spettrali. Ecco una sintesi delle proprietà tipiche e dei limiti della ZH:',
    },
    {
      type: 'table',
      headers: [
        'Classe Spettrale',
        'Temperatura (K)',
        'Luminosità (L/L⊙)',
        'Limite Interno ZH (UA)',
        'Limite Esterno ZH (UA)',
      ],
      rows: [
        ['Tipo O (Gigante)', '40.000', '100.000', '300.0', '530.0'],
        ['Tipo B (Gigante)', '20.000', '1.000', '30.1', '53.2'],
        ['Tipo A (Sirio)', '8.500', '20.0', '4.2', '7.4'],
        ['Tipo F (Prozione)', '6.500', '2.5', '1.5', '2.6'],
        ['Tipo G (Sole)', '5.778', '1.0', '0.95', '1.67'],
        ['Tipo K (Nana)', '4.500', '0.15', '0.37', '0.65'],
        ['Tipo M (Nana)', '3.200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Impatto della Classe Spettrale sull\'Abitabilità',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ogni classe spettrale crea un ambiente radiazione e gravitazionale unico per i suoi pianeti:<br><br><strong>Stelle di tipo O e B:</strong> Queste massicce stelle blu emettono un\'intensa radiazione ultravioletta (UV) e hanno una durata di vita estremamente breve (decine di milioni di anni). L\'acqua liquida potrebbe esistere nei loro mondi esterni, ma la vita non avrebbe il tempo sufficiente per evolversi prima che la stella esploda in supernova.<br><br><strong>Stelle di tipo A e F:</strong> Queste stelle sono più luminose e calde del Sole. Le loro zone abitabili sono ampie e lontane, riducendo gli effetti del blocco mareale. Tuttavia, alti livelli di radiazione vicino al UV possono causare gravi danni alle molecole organiche in assenza di uno strato protettivo di ozono.<br><br><strong>Stelle di tipo G (simili al Sole):</strong> Fornendo un flusso luminoso stabile per miliardi di anni, rappresentano i bersagli principali per la ricerca della vita. La loro emissione spettrale corrisponde ai requisiti della biochimica terrestre.<br><br><strong>Stelle di tipo K (nane arancioni):</strong> Considerate da molti astrobiologi come le più "superabitabili", le nane arancioni vivono decine di miliardi di anni, emettono meno UV dannosi rispetto alle stelle di tipo G e non sono soggette ai violenti brillamenti tipici delle giovani nane M.<br><br><strong>Stelle di tipo M (nane rosse):</strong> Le stelle più comuni della galassia. Poiché la loro zona abitabile si trova estremamente vicino (tipicamente < 0.2 UA), i pianeti sono soggetti a blocco mareale (una faccia rivolta permanentemente alla stella). Inoltre, le nane M attive producono forti venti stellari e brillamenti ad alta energia in grado di strappare via le atmosfere planetarie.',
    },
    {
      type: 'title',
      text: 'Fattori Critici negli Ambienti Planetari Abitabili',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'ambiente fisico di un pianeta è modellato da molteplici variabili che vanno oltre la semplice distanza dalla stella ospite:',
    },
    {
      type: 'list',
      items: [
        '<strong>Effetto Serra Atmosferico:</strong> I gas serra naturali innalzano la temperatura superficiale al di sopra del livello di equilibrio del corpo nero. I pianeti rocciosi richiedono cicli carbonio-silicato per stabilizzare la CO2 atmosferica e regolare le temperature su scale temporali geologiche.',
        '<strong>Albedo di Bond Planetario:</strong> L\'elevata riflettività (dovuta a nubi, calotte glaciali o aerosol di solfato) raffredda il pianeta, mentre un albedo basso (suoli scuri, specchi d\'acqua) trattiene più energia stellare.',
        '<strong>Campi Magnetici:</strong> Una forte magnetosfera planetaria scherma l\'atmosfera dai venti solari e stellari, prevenendo la fuga atmosferica non termica e la perdita d\'acqua.',
        '<strong>Dinamica della Trappola del Freddo:</strong> L\'effetto trappola del freddo nell\'alta atmosfera impedisce al vapore acqueo di raggiungere quote elevate dove la radiazione UV stellare lo dissocerebbe in idrogeno e ossigeno.',
      ],
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
      description: description,
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
