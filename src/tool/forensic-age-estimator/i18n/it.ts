import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'stimatore-eta-dentale-scheletrica-terzo-molare';
const title = 'Stimatore dell\'età dentale, scheletrica e del terzo molare';
const description = 'Stima un intervallo di età forense basato sullo sviluppo dentale, la maturità scheletrica e gli indicatori del terzo molare per il triage e lo screening dei casi.';

const howTo = [
  {
    name: 'Seleziona l\'enfasi delle prove',
    text: 'Scegli "Prove miste" per un triage equilibrato, "Priorità dentale" se i reperti dentali sono più solidi, o "Priorità scheletrica" quando gli indicatori radiografici scheletrici costituiscono la fonte principale.',
  },
  {
    name: 'Valuta ogni indicatore di maturità',
    text: 'Attribuisci uno stadio da 0 a 8 a ciascun indicatore. Gli stadi inferiori indicano uno sviluppo precoce, quelli intermedi la maturazione adolescenziale, mentre quelli superiori risultati maturi o quasi maturi.',
  },
  {
    name: 'Interpreta l\'intervallo, non solo l\'età centrale',
    text: 'Considera congiuntamente i valori minimo, probabile e massimo. La valutazione forense dell\'età deve essere espressa come un intervallo, data l\'elevata variabilità dello sviluppo biologico individuale.',
  },
  {
    name: 'Verifica eventuali discrepanze tra gli indicatori',
    text: 'Se gli stadi dentali, scheletrici e del terzo molare indicano intervalli di età divergenti, tratta il risultato come esplorativo e raccogli ulteriori prove prima di formulare conclusioni.',
  },
];

const faq = [
  {
    question: 'Questo stimatore può determinare la maggiore età legale?',
    answer: 'No. Si tratta di un calcolatore di screening destinato a fini educativi e di triage. La determinazione legale dell\'età richiede protocolli locali validati, il parere di esperti qualificati, una documentazione d\'identità rigorosa e il rispetto degli standard giurisdizionali specifici.',
  },
  {
    question: 'Perché il risultato mostra un intervallo di età?',
    answer: 'L\'eruzione dentale, la fusione scheletrica e lo sviluppo del terzo molare variano significativamente in base ad ascendenza, nutrizione, stato di salute, sesso, popolazione di riferimento e metodo di imaging. Un intervallo è più accurato e trasparente rispetto a una singola stima puntuale.',
  },
  {
    question: 'Cosa si intende per "Prove miste"?',
    answer: 'La modalità "Prove miste" bilancia l\'apporto dello sviluppo dentale, della maturità scheletrica e dello stadio del terzo molare. Utilizzala quando nessun singolo indicatore risulta chiaramente più affidabile degli altri per il caso in esame.',
  },
  {
    question: 'I terzi molari sono affidabili in ogni caso?',
    answer: 'I terzi molari sono utili nella tarda adolescenza e nella giovane età adulta, ma presentano un\'elevata variabilità. Agenesie, patologie, differenze popolazionali e la qualità radiografica possono limitarne considerevolmente il valore diagnostico.',
  },
  {
    question: 'Questo strumento può essere utilizzato per casi reali?',
    answer: 'Esclusivamente come ausilio preliminare. I casi reali richiedono l\'impiego di metodi validati, dati di riferimento calibrati, revisione indipendente e una rendicontazione trasparente di tutte le incertezze e le limitazioni del caso.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Pannello del caso forense',
    controls: 'Controlli età forense',
    results: 'Risultati età forense',
    maturityProfile: 'Profilo di maturità dinamico',
    screeningOnly: 'Stima di screening',
    evidenceType: 'Enfasi delle prove',
    mixedEvidence: 'Prove miste',
    dentalPriority: 'Priorità dentale',
    skeletalPriority: 'Priorità scheletrica',
    dentalStage: 'Stadio sviluppo dentale',
    epiphysealStage: 'Stadio fusione epifisaria',
    thirdMolarStage: 'Stadio del terzo molare',
    minimumAge: 'Minimo',
    likelyAge: 'Probabile',
    maximumAge: 'Massimo',
    maturityScore: 'Punteggio di maturità',
    stageLabel: 'Stadio',
    ageUnit: 'anni',
    dentalShort: 'Dentale',
    boneShort: 'Osseo',
    molarShort: 'Molare',
    dentalStageHelp: 'Formazione di corona, radice e apice.',
    epiphysealStageHelp: 'Chiusura della cartilagine di accrescimento e fusione scheletrica.',
    molarStageHelp: 'Mineralizzazione del terzo molare e chiusura dell\'apice.',
    dentalStage0: 'Assente',
    dentalStage1: 'Cuspide',
    dentalStage2: 'Corona',
    dentalStage3: 'Inizio radice',
    dentalStage4: 'Radice metà',
    dentalStage5: 'Radice lunga',
    dentalStage6: 'Apice stretto',
    dentalStage7: 'Apice in chiusura',
    dentalStage8: 'Completa',
    epiphysealStage0: 'Aperta',
    epiphysealStage1: 'Margine',
    epiphysealStage2: 'Restringimento',
    epiphysealStage3: 'Ponte',
    epiphysealStage4: 'Metà fusa',
    epiphysealStage5: 'Quasi fusa',
    epiphysealStage6: 'Solo linea',
    epiphysealStage7: 'Quasi chiusa',
    epiphysealStage8: 'Chiusa',
    molarStage0: 'Assente',
    molarStage1: 'Cuspide',
    molarStage2: 'Inizio corona',
    molarStage3: 'Corona completa',
    molarStage4: 'Inizio radice',
    molarStage5: 'Radice metà',
    molarStage6: 'Radice lunga',
    molarStage7: 'Apice in chiusura',
    molarStage8: 'Completa',
    confidenceexploratory: 'Esplorativo',
    confidencemoderate: 'Moderato',
    confidencestrong: 'Forte',
    noteTriage: 'Utilizzare come stima di triage, non come determinazione legale dell\'età.',
    noteFinalAssessment: 'La valutazione forense finale dovrebbe integrare radiologia, esame clinico, anamnesi documentata e standard giurisdizionali specifici.',
    noteWideInterval: 'Gli indicatori divergono per più di quattro anni; l\'intervallo è stato ampliato.',
  },
  seo: [
    {
      type: 'title',
      text: 'Stimatore dell\'età forense: calcolatore di screening dentale, scheletrico e del terzo molare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utilizza questo stimatore dell\'età forense per organizzare in modo rapido e trasparente i reperti di maturità biologica prima di una valutazione formale. Il calcolatore integra sviluppo dentale, fusione epifisaria e stadio del terzo molare per fornire un intervallo di età stimato. Risponde alle ricerche tipiche come <strong>calcolatore stima età forense</strong>, <strong>valutazione età dentale</strong> e <strong>stima età maturità scheletrica</strong>, chiarendo il significato degli indicatori e la gestione dell\'incertezza.',
    },
    {
      type: 'paragraph',
      html: 'I risultati sono presentati come <strong>età minima, probabile e massima</strong>. Una stima puntuale singola sarebbe fuorviante a causa dell\'ampia variabilità biologica. Questo strumento va considerato come un ausilio di screening strutturato, non come una conclusione giuridica definitiva.',
    },
    {
      type: 'title',
      text: 'Significato degli indicatori di maturità',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gli stadi (0-8) forniscono un\'astrazione pratica per confrontare sistemi biologici diversi. Lo stadio 0 indica una maturità assente o molto precoce, lo stadio 8 una maturità completa. Questi stadi facilitano il confronto incrociato senza essere vincolati a un singolo metodo clinico.',
    },
    {
      type: 'table',
      headers: ['Indicatore', 'Descrizione', 'Contesto', 'Attenzione'],
      rows: [
        ['Sviluppo dentale', 'Formazione ed eruzione (esclusi terzi molari).', 'Indicatore primario per bambini e adolescenti.', 'Biais possibili da malattie dentali o differenze di popolazione.'],
        ['Fusione epifisaria', 'Chiusura progressiva delle cartilagini di accrescimento.', 'Indicatore chiave per fine adolescenza e giovane età adulta.', 'Dipende criticamente dall\'osso analizzato, dal sesso e dallo stato endocrino.'],
        ['Stadio terzo molare', 'Formazione e maturazione dei denti del giudizio.', 'Cruciale per la valutazione tardo-adolescenziale.', 'Alta variabilità; richiede verifica di agenesie e inclusioni.'],
      ],
    },
    {
      type: 'title',
      text: 'Interpretazione dell\'intervallo di età',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>età probabile</strong> rappresenta la stima centrale ponderata. I valori <strong>minimo</strong> e <strong>massimo</strong> definiscono la banda di incertezza pratica. La convergenza degli indicatori restringe tale banda, mentre segnali contrastanti la allargano, riducendo il grado di confidenza.',
    },
    {
      type: 'table',
      headers: ['Schema dei risultati', 'Suggerimento', 'Azione consigliata'],
      rows: [
        ['Intervallo stretto / Confidenza forte', 'Gli indicatori concordano.', 'Documenta le fonti e valuta se è necessaria una validazione formale.'],
        ['Intervallo moderato', 'Discrepanze o peso dell\'evidenza impattano la stima.', 'Verifica qualità dell\'immagine e stadi assegnati.'],
        ['Intervallo esplorativo ampio', 'Indicatori in conflitto.', 'Non concludere solo sulla base di questo; cerca dati aggiuntivi o una revisione specialistica.'],
      ],
    },
    {
      type: 'title',
      text: 'Scelta della modalità di prova',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>prove miste</strong> sono il default per un triage equilibrato. Scegli <strong>priorità dentale</strong> per dati dentali eccezionalmente completi. Scegli <strong>priorità scheletrica</strong> se l\'evidenza radiografica ossea è la più solida. Queste modalità non migliorano la qualità dei dati deboli, ma regolano solo la ponderazione matematica.',
    },
    {
      type: 'list',
      items: [
        '<strong>Priorità dentale:</strong> se il quadro dentale è chiaro e i terzi molari sono presenti.',
        '<strong>Priorità scheletrica:</strong> se la fusione epifisaria è il reperto meglio documentato.',
        '<strong>Prove miste:</strong> ideale per una panoramica iniziale equilibrata.',
        '<strong>Indice di confidenza:</strong> monitoralo per rilevare discrepanze prima di sovrainterpretare.',
      ],
    },
    {
      type: 'title',
      text: 'Limiti forensi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La stima dell\'età è un supporto, mai una prova d\'identità. In ambito migratorio, penale o di identificazione vittime, l\'approccio deve essere multidisciplinare. Ogni rapporto deve dettagliare metodo, popolazione di riferimento, qualifiche dell\'osservatore e limitazioni note.',
    },
    {
      type: 'paragraph',
      html: 'Lo strumento serve per <strong>educazione, triage e comunicazione trasparente</strong>. Sottolineiamo perché le conclusioni forensi impongono cautela e perché soglie critiche (come i 18 anni) non possono basarsi esclusivamente su un calcolatore automatizzato.',
    },
    {
      type: 'title',
      text: 'Check-list per il rapporto forense',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Fonte dei reperti:</strong> Documenta se basati su esame clinico, ortopantomografia o imaging scheletrico (mano-polso, clavicola, ecc.).',
        '<strong>Dati mancanti/deboli:</strong> Indica chiaramente assenze, bassa qualità radiografica o anomalie.',
        '<strong>Validazione:</strong> Assicurati che i metodi scelti siano riconosciuti nella giurisdizione di riferimento.',
        '<strong>Incertezza:</strong> Esprimi sempre un intervallo; evita linguaggi che implichino un\'età cronologica esatta.',
        '<strong>Revisione specialistica:</strong> I casi critici vanno sempre sottoposti a odontologi forensi, radiologi o antropologi.',
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