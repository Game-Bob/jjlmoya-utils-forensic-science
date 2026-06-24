import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calcolatore-alcolemia-widmark';
const title = 'Simulatore Tasso Alcolemico Widmark';
const description = 'Simula l\'assorbimento, la distribuzione e l\'eliminazione dell\'alcol nel corpo umano utilizzando la formula di Widmark.';

const howTo = [
  {
    name: 'Configura il profilo biologico del soggetto',
    text: 'Inserisci il peso corporeo, il sesso biologico e il livello di idratazione. Questi parametri biologici calcolano il fattore di Widmark (r) per definire il volume di distribuzione dell\'etanolo.',
  },
  {
    name: 'Seleziona lo stato dello stomaco',
    text: 'Scegli tra stomaco vuoto, pasto leggero o pasto completo. Questo parametro regola la costante di velocità di assorbimento (ka) mostrando l\'effetto del cibo sulla curva alcolemica.',
  },
  {
    name: 'Aggiungi bevande alla linea temporale',
    text: 'Inserisci le bevande specificando il volume in millilitri, la gradazione alcolica (ABV) e l\'ora in cui è iniziata la consumazione rispetto all\'inizio della simulazione.',
  },
  {
    name: 'Analizza la curva alcolemica risultante',
    text: 'Controlla l\'andamento della concentrazione di alcol nel sangue (BAC) per 12 ore. Confronta il picco massimo, il tempo per raggiungerlo e lo smaltimento totale con i limiti legali.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Cos\'è la formula di Widmark e come viene applicata nella tossicologia forense?',
    answer: 'La formula di Widmark è un modello matematico formulato da Erik M. P. Widmark nel 1932. Consente di calcolare la concentrazione stimata di alcol nel sangue in base alla massa di alcol ingerita, al peso corporeo, a un fattore di distribuzione di genere (r) e a una clearance lineare. Gli esperti forensi la impiegano per stime retrospettive del tasso alcolemico al momento di un reato.',
  },
  {
    key: 'faq-2',
    question: 'In che modo il cibo nello stomaco modifica la forma della curva alcolemica?',
    answer: 'Il cibo rallenta lo svuotamento gastrico, trattenendo l\'alcol nello stomaco e rallentandone il passaggio all\'intestino tenue, dove l\'assorbimento è rapidissimo. Nel simulatore, questo comportamento viene modellato diminuendo la costante di assorbimento (ka), riducendo notevolmente il picco massimo e spostandolo in avanti nel tempo.',
  },
  {
    key: 'faq-3',
    question: 'Perché lo smaltimento dell\'alcol segue una cinetica di ordine zero?',
    answer: 'La maggior parte dei farmaci segue una cinetica di eliminazione di primo ordine (velocità proporzionale alla concentrazione). L\'alcol viene rimosso con cinetica di ordine zero poiché gli enzimi epatici responsabili del suo metabolismo (in particolare l\'alcol deidrogenasi - ADH) si saturano a livelli molto bassi di alcolemia (circa 0,02 g/L). La velocità di smaltimento è quindi massima e costante.',
  },
  {
    key: 'faq-4',
    question: 'Quali sono i fattori biologici che determinano la variazione del fattore Widmark r?',
    answer: 'Il fattore r rappresenta la quota di acqua corporea in rapporto al peso totale del soggetto. Poiché l\'etanolo è idrofilo e lipofobo, si dissolve soltanto nell\'acqua corporea. I muscoli contengono molta acqua, mentre il grasso ne contiene pochissima. Persone con maggiore massa grassa o in stato di disidratazione hanno un r minore, il che determina picchi di alcolemia più elevati.',
  },
  {
    key: 'faq-5',
    question: 'Il simulatore ha valore legale per dimostrare l\'idoneità alla guida?',
    answer: 'Assolutamente no. Questo strumento ha esclusivamente finalità didattiche ed educative. Nella realtà fisiologica intervengono variabili come genetica enzimatica, tolleranza, farmaci e variazioni individuali dell\'assorbimento gastrico. Non bisogna mai fare affidamento su un calcolo matematico per mettersi alla guida.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profilo',
    weight: 'Peso (kg)',
    sex: 'Sesso biologico',
    male: 'Maschio',
    female: 'Femmina',
    hydration: 'Idratazione',
    hydrationLow: 'Bassa',
    hydrationNormal: 'Normale',
    hydrationHigh: 'Alta',
    stomachState: 'Stato stomaco',
    stomachEmpty: 'Vuoto (Rapido)',
    stomachLight: 'Pasto leggero (Medio)',
    stomachFull: 'Pasto completo (Lento)',
    drinksTimeline: 'Cronologia consumi',
    addDrink: 'Aggiungi bevanda',
    drinkVolume: 'Volume (ml)',
    drinkAbv: 'Gradazione (% vol)',
    drinkTime: 'Tempo (Ora)',
    drinksList: 'Bevande consumate',
    remove: 'Rimuovi',
    beer: 'Birra (330ml, 5%)',
    wine: 'Vino (150ml, 12%)',
    spirits: 'Superalcolico (40ml, 40%)',
    peakBac: 'Picco BAC',
    timeToSober: 'Tempo per sobrietà',
    sober: 'Sobrio',
    currentBac: 'BAC attuale',
    drivingLimitAlert: 'Stato di guida',
    safeLimit: 'Sotto il limite',
    warningLimit: 'Limite avviso superato',
    dangerLimit: 'Limite pericolo superato',
    graphTitle: 'Concentrazione alcolemica in 12 ore',
    timeAxisLabel: 'Tempo (Ore)',
    bacAxisLabel: 'Tasso (g/L)',
    legalLimitText: 'Limite legale standard',
    noDrinksText: 'Aggiungi bevande per simulare.',
    hours: 'ore',
    soberStatus: 'Sobrio in {time} ore',
    neverSober: 'Supera 12h',
    noteDisclaimer: 'Solo a scopo didattico. Non guidare dopo aver bevuto.',
    noteWidmark: 'Basato sulla formula di Widmark e metabolismo lineare.',
  },
  seo: [
    {
      type: 'title',
      text: 'Tossicologia Forense e Cinetica dell\'Etanolo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La comprensione dei processi di <strong>assorbimento, distribuzione ed eliminazione dell\'etanolo</strong> è un requisito essenziale in tossicologia forense e nella ricostruzione degli incidenti stradali. In seguito all\'assunzione, l\'alcol scende lungo l\'esofago fino allo stomaco, dove ha luogo un primo, modesto assorbimento. Tuttavia, la parte preponderante dell\'assorbimento dell\'etanolo avviene nel duodeno e nell\'intestino tenue per via dell\'enorme area superficiale disponibile. Lo svuotamento gastrico rappresenta il passaggio limitante, spiegando perché i pasti rallentino vistosamente la curva alcolemica.',
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore implementa le equazioni di Erik M. P. Widmark e un modello compartimentale continuo su 12 ore. Regolando i parametri biologici, gli utenti possono osservare graficamente l\'accumulo e la discesa lineare della concentrazione alcolemica.',
    },
    {
      type: 'title',
      text: 'Derivazione dell\'equazione di Widmark',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'equazione fondamentale di Widmark calcola la concentrazione teorica di alcol nel sangue assumendo un assorbimento istantaneo: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. In questa formula, <em>A</em> indica la massa di etanolo puro in grammi, <em>W</em> è il peso in chilogrammi, e <em>r</em> è il fattore di distribuzione di Widmark. Il parametro <em>&beta;</em> esprime il tasso di eliminazione oraria, mentre <em>t</em> è il tempo trascorso.',
    },
    {
      type: 'paragraph',
      html: 'Per ricavare la massa di alcol dalle bevande, si moltiplica il volume (ml) per la percentuale di alcol (ABV) e per la densità dell\'etanolo (circa 0,8 g/ml). Ad esempio, 330 ml di birra al 5% contengono 13,2 grammi di alcol. Questa quantità si diluisce in base all\'acqua corporea totale del soggetto. Il simulatore adatta il fattore r in base al sesso biologico (0,68 per gli uomini, 0,55 per le donne) e allo stato di idratazione.',
    },
    {
      type: 'title',
      text: 'Fattori fisiologici e volume di distribuzione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il volume di distribuzione dell\'etanolo dipende esclusivamente dalla composizione corporea del soggetto. Essendo l\'etanolo idrofilo e lipofobo, si distribuisce unicamente nei liquidi corporei. I muscoli presentano circa il 75% di acqua, a differenza del tessuto adiposo che ne ha pochissima. Pertanto, un soggetto muscoloso mostrerà un fattore r maggiore e un picco di alcolemia più basso rispetto a un individuo di pari peso ma con maggiore grasso corporeo. La disidratazione riduce l\'acqua totale disponibile, aumentando il picco BAC.',
    },
    {
      type: 'table',
      headers: ['Variabile fisiologica', 'Meccanismo biologico', 'Effetto farmacocinetico', 'Rilevanza forense'],
      rows: [
        ['Peso corporeo', 'Definisce il volume complessivo di acqua corporea.', 'Inversamente proporzionale alla concentrazione massima.', 'Rappresenta la base per la ricostruzione retrospettiva.'],
        ['Sesso biologico', 'Influenza il rapporto muscolo-grasso del corpo.', 'Il fattore r è inferiore nelle donne (0,55), elevando il picco.', 'Spiega la maggiore vulnerabilità biologica femminile.'],
        ['Idratazione', 'Modifica la quantità di acqua libera nei tessuti.', 'La disidratazione riduce r di 0,05, innalzando la curva.', 'Adatta la tolleranza nel calcolo per sforzo fisico o calore.'],
        ['Stato dello stomaco', 'Il cibo rallenta lo svuotamento dello stomaco.', 'Riduce la costante di assorbimento ka, appiattendo il picco.', 'Spiega tassi alcolemici ridotti a seguito di pasti copiosi.'],
      ],
    },
    {
      type: 'title',
      text: 'Eliminazione oraria: Cinetica di ordine zero',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una volta assorbito, l\'etanolo viene metabolizzato per la quasi totalità dal fegato tramite l\'alcol deidrogenasi (ADH). Questo enzima si satura molto rapidamente a concentrazioni minime (0,02 g/L), instaurando una cinetica di eliminazione di ordine zero. Di conseguenza, il fegato smaltisce una quantità fissa e costante di alcol per unità di tempo. Il tasso di eliminazione forense standard (&beta;<sub>60</sub>) è fissato a 0,15 g/L all\'ora, generando la tipica discesa rettilinea visibile sul grafico.',
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
