import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-test-microcristallino-droghe';
const title = 'Simulatore Forense di Test Microcristallino per Droghe';
const description = 'Simula modelli educativi di screening microcristallino di droghe combinando sostanze controllate sospette con reagenti forensi classici e confrontando abito cristallino, velocità di crescita e birifrangenza.';

const howTo = [
  {
    name: 'Scegliere un campione sospetto',
    text: 'Selezionare cocaina, eroina, amfetamina o metamfetamina per caricare un profilo didattico del materiale sconosciuto.',
  },
  {
    name: 'Applicare un reagente microcristallino',
    text: 'Passare da cloruro di platino, cloruro d\'oro e reagente di Dragendorff per osservare come la chimica del reagente altera la morfologia del cristallo.',
  },
  {
    name: 'Regolare la polarizzazione simulata',
    text: 'Spostare il controllo della polarizzazione per aumentare o ridurre il contrasto birifrangente nel campo del microscopio virtuale.',
  },
  {
    name: 'Confrontare il risultato con il riferimento',
    text: 'Utilizzare l\'etichetta dell\'abito, il punteggio di corrispondenza, la velocità di crescita e la nota interpretativa per decidere se il modello è simile al riferimento, parziale o non specifico.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'I test microcristallini sono confermativi per le droghe illegali?',
    answer: 'No. I test microcristallini sono strumenti di screening presuntivo o comparativo. L\'identificazione reale delle droghe sequestrate deve seguire protocolli validati che includono controlli adeguati e metodi strumentali confermativi come GC-MS, LC-MS o spettroscopia infrarossa.',
  },
  {
    key: 'faq-2',
    question: 'Perché reagenti diversi producono forme di cristallo diverse?',
    answer: 'Il reagente forma sali, complessi o precipitati con gruppi funzionali nel composto target. Solubilità, forza dell\'acido, concentrazione, impurità e velocità di asciugatura influenzano la morfologia dell\'abito osservato sotto forma di aghi, rosette, prismi, piastre o debole dispersione.',
  },
  {
    key: 'faq-3',
    question: 'Cosa aggiunge la luce polarizzata all\'esame microcristallino?',
    answer: 'La luce polarizzata può aumentare il contrasto e rivelare la birifrangenza, facilitando il confronto di bordi, ramificazioni e struttura interna del cristallo. Non elimina la necessità di standard di riferimento e controlli.',
  },
  {
    key: 'faq-4',
    question: 'Perché un modello apparentemente positivo può essere comunque fuorviante?',
    answer: 'Sostanze da taglio, miscele, materiale degradato, invecchiamento del reagente, contaminazione e aspettative dell\'analista possono produrre morfologie ambigue o sovrapposte. Ecco perché i risultati presuntivi devono essere interpretati con cautela.',
  },
  {
    key: 'faq-5',
    question: 'Questo simulatore può identificare una sostanza sconosciuta?',
    answer: 'No. È una visualizzazione educativa di concetti morfologici comuni. Non può analizzare prove reali, misurare parametri chimici o emettere una conclusione di laboratorio.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Microscopio polarizzato',
    canvasAria: 'Campo di crescita microcristallino animato',
    sample: 'Campione sospetto',
    sampleCocaine: 'Cocaina',
    sampleHeroin: 'Eroina',
    sampleAmphetamine: 'Amfetamina',
    sampleMethamphetamine: 'Metamfetamina',
    reagent: 'Scaffale reagenti',
    reagentPlatinum: 'Cloruro di platino',
    reagentGold: 'Cloruro d\'oro',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Contrasto polarizzato',
    confidence: 'Corrispondenza',
    growth: 'Crescita',
    birefringence: 'Birifr.',
    regrow: 'Rigenera cristalli',
    warningLabel: 'Cautela forense',
    warningTitle: 'Avviso di screening',
    matchReference: 'Tipo riferimento',
    matchPartial: 'Match parziale',
    matchNonSpecific: 'Non specifico',
    habitFeatheryNeedles: 'Fasci di aghi piumosi',
    habitRosettes: 'Rosette a stella',
    habitBranchingPrisms: 'Prismi ramificati',
    habitPlates: 'Piastre sottili',
    habitWeakScatter: 'Dispersione scarsa non specifica',
    cueCocainePlatinumChloride: 'I fasci di aghi piumosi e ramificati sono il modello didattico atteso per la cocaina con cloruro di platino.',
    cueCocaineGoldChloride: 'Il cloruro d\'oro può formare cristalli ramificati arancione-marroni, ma il modello è meno specifico del cloruro di platino.',
    cueCocaineDragendorff: 'Il reagente di Dragendorff fornisce qui una debole risposta alcaloide; la morfologia deve essere trattata solo come informazione di screening.',
    cueHeroinPlatinumChloride: 'Possono comparire depositi a forma di piastra, ma questa associazione non rappresenta un forte match didattico confermativo.',
    cueHeroinGoldChloride: 'I gruppi di rosette e le stelle arrotondate sono il modello di eroina tipo riferimento in questo simulatore.',
    cueHeroinDragendorff: 'Il reagente di Dragendorff produce prismi ramificati arancioni coerenti con uno screening alcaloide, non una prova di identità.',
    cueAmphetaminePlatinumChloride: 'I prismi a ramificazione rapida suggeriscono un modello didattico di tipo stimolante sotto il reagente prescelto.',
    cueAmphetamineGoldChloride: 'La cristallizzazione scarsa significa che il risultato visivo deve essere segnalato come non specifico.',
    cueAmphetamineDragendorff: 'Gli spruzzi di aghi crescono rapidamente e sono utili per insegnare i confronti presuntivi dell\'amfetamina.',
    cueMethamphetaminePlatinumChloride: 'Si possono formare rosette polarizzate, ma il risultato rimane un confronto morfologico presuntivo.',
    cueMethamphetamineGoldChloride: 'Sono visibili forme a piastra sottile, sebbene la sovrapposizione con altri composti limiti la specificità.',
    cueMethamphetamineDragendorff: 'I prismi ramificati arancioni densi forniscono il match didattico più forte per la metamfetamina in questo set.',
    disclaimer: 'Modello di screening solo didattico. L\'identificazione reale delle droghe richiede standard di riferimento validati, controlli dei reagenti, catena di custodia e analisi strumentali confermative.',
  },
  seo: [
    {
      type: 'title',
      text: 'Test Microcristallino per Droghe in Scienza Forense',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulatore didattico',
      title: 'Scopo di questo simulatore microcristallino',
      html: 'Questo strumento spiega come i classici test microcristallini forensi possano produrre abiti cristallini riconoscibili dopo che una droga sospetta viene miscelata con un reagente. Aiuta gli studenti a confrontare la <strong>morfologia dei cristalli</strong>, la velocità di crescita e il contrasto sotto luce polarizzata senza trattare il risultato del browser come prova.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'profili di campioni didattici', icon: 'mdi:flask-outline' },
        { value: '3', label: 'opzioni di reagenti tradizionali', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'abiti cristallini modellati', icon: 'mdi:shape-outline' },
        { value: '0', label: 'dichiarazioni di identificazione legale', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Come Interpretare l\'Abito Cristallino',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Lista di controllo pratica per il confronto',
      items: [
        'Iniziare con uno standard di riferimento noto e un controllo del reagente in bianco prima di confrontare un campione sconosciuto.',
        'Registrare il reagente, la concentrazione, la dimensione della goccia, il tempo di asciugatura, la temperatura e l\'ingrandimento del microscopio.',
        'Confrontare prima l\'abito generale: aghi, rosette, piastre, prismi, ramificazioni o debole dispersione.',
        'Trattare la crescita parziale o scarsa come un motivo per ulteriori test, non come un\'identificazione sicura.',
      ],
    },
    {
      type: 'table',
      headers: ['Abito osservato', 'Domande frequenti degli utenti', 'Interpretazione prudente'],
      rows: [
        ['Aghi piumosi', 'Sembra cocaina con cloruro di platino?', 'Può essere un utile match didattico, ma le miscele e le condizioni del reagente possono alterare l\'abito.'],
        ['Rosette', 'Le rosette a stella sono diagnostiche?', 'Le rosette possono supportare un confronto quando i controlli corrispondono, ma non sono sufficienti da sole.'],
        ['Prismi ramificati', 'Perché gli screening dei stimolanti crescono spesso rapidamente?', 'Alcuni sali nucleano rapidamente e si ramificano all\'evaporare del solvente; la velocità è un indizio di supporto, non confermativo.'],
        ['Dispersione scarsa', 'Un modello debole significa che non è presente alcuna droga?', 'No. Bassa concentrazione, impurità, reagente invecchiato o cattiva preparazione possono bloccare la crescita del cristallo.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Lo screening microcristallino aiuta con',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Confronto visivo rapido quando un analista qualificato utilizza controlli e materiali di riferimento.',
          points: ['Dimostrazioni in classe', 'Vocabolario di morfologia', 'Triage presuntivo', 'Confronto dell\'effetto del reagente'],
        },
        {
          title: 'Lo screening microcristallino non può sostituire',
          icon: 'mdi:alert-circle-outline',
          description: 'Chimica confermativa validata per una conclusione reale su una droga sequestrata.',
          points: ['Conferma strumentale', 'Procedure accreditate', 'Validazione specifica per la matrice', 'Documentazione delle incertezze'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Contesto Scientifico sui Test Microcristallini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I test microcristallini rappresentano una classe storica e altamente sensibile di test di screening chimico utilizzati dai chimici forensi per identificare le sostanze controllate sospette. Quando una piccola quantità di un campione di droga viene disciolta in un acido e combinata con uno specifico reagente di metalli pesanti, come il cloruro d\'oro o il cloruro di platino, precipita un complesso di coordinazione o un sale insolubile. La struttura molecolare della droga determina la velocità di crescita, l\'orientamento e la simmetria dei cristalli risultanti, producendo forme o abiti microscopici caratteristici.',
    },
    {
      type: 'paragraph',
      html: 'L\'analisi di questi abiti sotto un microscopio a luce polarizzata consente agli esaminatori forensi di osservare proprietà ottiche come la birifrangenza, in cui il cristallo divide la luce in due raggi, creando colori vividi e un contrasto elevato. Sebbene i metodi strumentali come la gascromatografia-spettrometria di massa abbiano ampiamente sostituito i test microcristallini per l\'identificazione confermativa, lo screening microcristallino rimane una tecnica apprezzata grazie alla sua rapidità, al suo basso costo e alla sua capacità di separare isomeri ottici che possono essere difficili da differenziare con altri mezzi.',
    },
    {
      type: 'paragraph',
      html: 'Nei contesti educativi, la simulazione di queste reazioni aiuta gli studenti a comprendere la relazione tra i reagenti chimici e la morfologia fisica del cristallo. Osservando come la cocaina, l\'eroina e le varie amfetamine rispondono a diversi reagenti, gli studenti imparano che un singolo test positivo non costituisce una conclusione forense finale. I protocolli di screening delle droghe appropriati richiedono il confronto dei campioni sconosciuti con materiali di riferimento noti e l\'esecuzione di bianchi del reagente per garantire la validità e la specificità dei profili cristallini osservati.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Abito cristallino', definition: 'La forma visibile o il tipo di crescita di un cristallo, come aghi, piastre, prismi o rosette.' },
        { term: 'Nucleazione', definition: 'La formazione iniziale di minuscoli centri cristallini da cui si sviluppano strutture più grandi.' },
        { term: 'Birifrangenza', definition: 'Comportamento ottico che può far apparire i cristalli più luminosi o colorati sotto luce polarizzata.' },
        { term: 'Test presuntivo', definition: 'Un test di screening che suggerisce una classe o un composto possibile ma non prova l\'identità da solo.' },
        { term: 'Standard di riferimento', definition: 'Un materiale noto testato nelle stesse condizioni per confrontare il profilo sconosciuto.' },
      ],
    },
    {
      type: 'tip',
      title: 'Buone pratiche per le prove reali',
      html: 'Utilizzare la morfologia microcristallina come una linea di indagine. Un flusso di lavoro affidabile comprende bianchi del reagente, controlli positivi, documentazione dell\'invecchiamento del reagente, revisione indipendente se necessario e test confermativi nell\'ambito di un protocollo accettato per le droghe sequestrate.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Cautela forense',
      title: 'Un bel cristallo non è un\'identificazione legale',
      html: 'Il simulatore separa deliberatamente il punteggio di corrispondenza visiva da una conclusione forense. Il lavoro di caso reale deve considerare miscele, sostanze da taglio, contaminazione, prestazioni dei reagenti, formazione dell\'analista e procedure di laboratorio validate.',
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
