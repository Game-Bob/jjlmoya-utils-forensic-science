import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-entropia-secondo-principio';
const title = 'Simulatore di Entropia e Secondo Principio della Termodinamica';
const description = 'Guarda camere di particelle calda e fredda mescolarsi, equalizzarsi e spingere l\'entropia verso l\'alto con un simulatore visivo di diffusione e un grafico dell\'entropia in tempo reale.';

const howTo = [
  {
    name: 'Imposta le temperature sinistra e destra',
    text: 'Scegli una camera più fredda e una più calda per creare uno squilibrio termico iniziale. Differenze maggiori rendono più facile vedere l\'avvicinamento irreversibile all\'equilibrio.',
  },
  {
    name: 'Regola l\'apertura della barriera',
    text: 'Apri o restringi il passaggio tra le due camere. Un\'apertura più ampia consente a particelle ed energia di diffondersi più velocemente, quindi la curva dell\'entropia sale più rapidamente.',
  },
  {
    name: 'Osserva la scatola delle particelle',
    text: 'Le particelle blu rappresentano movimento a bassa energia e quelle arancioni movimento ad alta energia. Con l\'accumularsi di collisioni e attraversamenti, la scatola diventa più mescolata e meno ordinata.',
  },
  {
    name: 'Leggi il grafico dell\'entropia',
    text: 'Segui come la miscelazione spaziale e l\'equalizzazione termica si combinano in un unico punteggio di entropia crescente. La curva è pensata per costruire l\'intuizione del perché i sistemi isolati evolvono verso macrostrati più probabili.',
  },
];

const faq = [
  {
    question: 'Perché l\'entropia aumenta in questo simulatore?',
    answer: 'Lo stato iniziale è artificialmente ordinato: un lato è più freddo, l\'altro più caldo. Una volta che la barriera permette lo scambio, ci sono molte più disposizioni mescolate che separate, quindi il sistema si muove naturalmente verso il macrostrato enormemente più probabile.',
  },
  {
    question: 'Questo dimostra esattamente il secondo principio?',
    answer: 'No. È un modello didattico a particelle, non un codice di laboratorio di dinamica molecolare. Cattura l\'intuizione centrale alla base della diffusione irreversibile e dell\'equalizzazione termica, che è l\'intento di ricerca della maggior parte degli utenti quando chiedono perché l\'entropia tende ad aumentare.',
  },
  {
    question: 'Cosa significano qui entropia spaziale ed entropia termica?',
    answer: 'L\'entropia spaziale misura quanto uniformemente le particelle sono distribuite tra le camere sinistra e destra. L\'entropia termica in questo simulatore misura quanto è piccolo il divario energetico tra le due metà. Il punteggio totale combina entrambe in modo che gli utenti possano vedere mescolamento e flusso di calore contemporaneamente.',
  },
  {
    question: 'Perché le particelle continuano a muoversi anche vicino all\'equilibrio?',
    answer: 'L\'equilibrio non significa che il movimento si fermi. Significa che lo squilibrio macroscopico scompare. Le molecole continuano a muoversi, collidere e scambiare energia, ma non rimane alcuna direzione persistente su larga scala da sfruttare.',
  },
  {
    question: 'L\'entropia può mai diminuire momentaneamente?',
    answer: 'Nei sistemi microscopici, piccole fluttuazioni sono possibili. Questo strumento visivo attenua quelle fluttuazioni ed enfatizza la tendenza statistica generale: in un grande sistema isolato, gli stati ordinati a bassa entropia sono enormemente meno probabili degli stati mescolati.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Mescolamento irreversibile',
    results: 'Risultati del simulatore di entropia',
    particleBox: 'Scatola di diffusione delle particelle',
    barrier: 'Barriera',
    entropyGraph: 'Grafico dell\'entropia nel tempo',
    liveTrace: 'Tracciato in tempo reale',
    highEntropy: 'alta',
    midEntropy: 'media',
    lowEntropy: 'bassa',
    controls: 'Controlli del simulatore di entropia',
    leftTemperature: 'Temperatura sinistra',
    rightTemperature: 'Temperatura destra',
    gateAperture: 'Apertura della barriera',
    pause: 'Pausa',
    reset: 'Reimposta',
    resume: 'Riprendi',
    totalEntropy: 'Entropia totale',
    particleBalance: 'Particelle sinistra/destra',
    spatialEntropy: 'Entropia spaziale',
    thermalEntropy: 'Entropia termica',
    energyGap: 'Divario energetico',
    noteLabel: 'Interpretazione',
    stateGradient: 'Gradiente',
    stateMixing: 'Mescolamento',
    stateEquilibrium: 'Equilibrio',
    note: 'La probabilità del macrostrato punta verso il massimo disordine.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore di entropia per il secondo principio della termodinamica e la diffusione irreversibile',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Usa questo simulatore di entropia per visualizzare una delle idee più importanti della fisica: i sistemi isolati evolvono da stati artificialmente ordinati verso stati mescolati più probabili. Invece di leggere una definizione statica di entropia, puoi guardare in tempo reale una camera calda e una fredda scambiarsi particelle ed energia mentre una curva in diretta traccia l\'aumento del disordine.',
    },
    {
      type: 'paragraph',
      html: 'Questo strumento è progettato per l\'intento di ricerca più comune dietro domande come "perché l\'entropia aumenta", "come funziona il secondo principio" e "cos\'è la diffusione termica". L\'obiettivo non è solo dare uno slogan sul disordine, ma collegare l\'entropia con probabilità, flusso di calore, mescolamento ed equilibrio in un modo che risulti immediatamente visibile.',
    },
    {
      type: 'title',
      text: 'Cosa significa il secondo principio della termodinamica in termini pratici',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il secondo principio afferma che per un sistema isolato, i processi spontanei si muovono verso macrostrati con entropia più elevata. Nel linguaggio comune, significa che una disposizione termica fortemente organizzata, come particelle calde da un lato e fredde dall\'altro, non rimane separata a meno che non venga continuamente fornito lavoro per mantenerla.',
    },
    {
      type: 'paragraph',
      html: 'Ciò non accade perché la materia "preferisce il caos" in senso mistico. Accade perché ci sono enormemente più configurazioni microscopiche corrispondenti a uno stato mescolato che a uno separato. L\'entropia collega quindi la termodinamica al conteggio: maggiore è il numero di microstati compatibili, maggiore è l\'entropia.',
    },
    {
      type: 'title',
      text: 'Come funziona questo simulatore di diffusione dell\'entropia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La scatola delle particelle parte in una configurazione a bassa entropia con uno squilibrio di temperatura attraverso una barriera. Quando il passaggio tra le camere è aperto, le particelle attraversano, collidono e trasportano energia da un lato all\'altro. La simulazione tiene traccia di due ingredienti intuitivi: l\'<strong>entropia spaziale</strong>, che aumenta man mano che le particelle diventano meno segregate, e l\'<strong>entropia termica</strong>, che aumenta man mano che le distribuzioni di energia sinistra e destra diventano meno diverse.',
    },
    {
      type: 'paragraph',
      html: 'Il punteggio di entropia totale mostrato sullo schermo è un indicatore didattico costruito da questi due ingredienti. Non è una funzione di stato da laboratorio e non pretende di riprodurre l\'intera meccanica statistica. Il suo scopo è aiutare gli utenti a costruire un\'intuizione corretta: il flusso di calore irreversibile e la diffusione muovono entrambi il sistema verso l\'equilibrio perché l\'equilibrio corrisponde a molte più configurazioni accessibili.',
    },
    {
      type: 'table',
      headers: ['Segnale visivo', 'Cosa rappresenta', 'Perché è importante'],
      rows: [
        ['Particelle blu vs arancioni', 'Energia cinetica relativa', 'Mostra che le differenze di temperatura sono in realtà differenze nel movimento microscopico medio.'],
        ['Apertura della barriera', 'Facilità di scambio tra le camere', 'Permette di vedere perché la velocità di diffusione cambia quando cambia il percorso di trasporto.'],
        ['Indicatore di entropia spaziale', 'Uniformità di distribuzione delle particelle', 'Spiega che il solo mescolamento rende già il macrostrato più probabile.'],
        ['Indicatore di entropia termica', 'Quanto diventa piccolo il divario energetico', 'Mostra che l\'equilibrio non riguarda solo la posizione ma anche la condivisione dell\'energia.'],
        ['Curva dell\'entropia', 'Andamento nel tempo', 'Trasforma l\'idea astratta di irreversibilità in un processo di rilassamento unidirezionale visibile.'],
      ],
    },
    {
      type: 'title',
      text: 'Perché l\'entropia può aumentare anche se ogni particella segue un moto semplice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gli studenti spesso presumono che il secondo principio richieda attrito, intenzione o una speciale "forza della freccia del tempo". Il punto più profondo è statistico. Ogni particella segue regole locali, ma quando molte particelle interagiscono, il numero di macrostrati mescolati domina completamente il numero di macrostrati ordinati. Il sistema passa quindi quasi tutto il suo tempo in configurazioni mescolate e solo una frazione estremamente piccola in configurazioni nettamente separate.',
    },
    {
      type: 'paragraph',
      html: 'Ecco perché una goccia di colorante si diffonde nell\'acqua, perché una stanza si equalizza in temperatura dopo aver spento un riscaldatore, e perché un oggetto caldo si raffredda a contatto con uno più freddo. Il processo inverso non è proibito dal moto newtoniano in senso microscopico stretto, ma è statisticamente così improbabile per sistemi grandi che non viene mai osservato a scale umane.',
    },
    {
      type: 'title',
      text: 'Entropia, equilibrio e idee sbagliate comuni',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>L\'entropia non è solo "disordine":</strong> l\'idea più precisa è il numero di configurazioni microscopiche compatibili con la stessa descrizione macroscopica.',
        '<strong>L\'equilibrio non significa immobilità:</strong> le particelle continuano a muoversi costantemente, ma i loro squilibri su larga scala si annullano.',
        '<strong>Il flusso di calore è direzionale perché la probabilità è direzionale:</strong> ci sono enormemente più modi di condividere l\'energia che di mantenerla nettamente separata.',
        '<strong>L\'entropia bassa non è impossibile:</strong> richiede semplicemente vincoli, preparazione o lavoro dall\'esterno del sistema isolato.',
        '<strong>Questo simulatore è qualitativo:</strong> fornisce intuizione fisica, non calorimetria esatta, funzioni di partizione o coefficienti di trasporto molecolare.',
      ],
    },
    {
      type: 'title',
      text: 'Quando usare questo simulatore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Usalo per dimostrazioni in classe, ripasso di fisica, educazione chimica, scrittura scientifica e spiegazioni concettuali rapide. È particolarmente utile quando qualcuno capisce che il calore fluisce dal caldo al freddo ma non vede ancora come questo si colleghi alla probabilità, al conteggio dei macrostrati e al secondo principio della termodinamica.',
    },
    {
      type: 'paragraph',
      html: 'Se il tuo obiettivo è un calcolo termodinamico rigoroso per un gas reale, un ciclo motore o un sistema di laboratorio, avrai bisogno di equazioni di stato, condizioni al contorno e parametri sperimentalmente fondati. Se il tuo obiettivo è l\'intuizione del perché la diffusione è irreversibile e perché l\'entropia tende ad aumentare, questo simulatore è costruito esattamente per quella domanda.',
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
