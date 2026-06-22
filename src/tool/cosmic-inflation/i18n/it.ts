import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calcolatore-inflazione-cosmica';
const description = 'Calcola l\'espansione esponenziale dell\'universo primordiale durante l\'epoca inflazionistica cosmica.';
const title = 'Calcolatore Inflazione Cosmica: Espansione Universo Primordiale';

const howTo = [
  {
    name: 'Scegli uno scenario o regola i valori',
    text: 'Seleziona una delle preset cosmologiche o trascina manualmente i cursori per configurare i parametri dell\'inflazione.',
  },
  {
    name: 'Osserva la crescita del fattore di scala',
    text: 'Verifica di quanti ordini di grandezza si è espanso lo spazio e leggi l\'analogia fisica che lo spiega.',
  },
  {
    name: 'Deforma il tessuto spazio-temporale',
    text: 'Guarda la griglia spazio-temporale in tempo reale che si espande o collassa sotto valori estremi.',
  },
];

const faq = [
  {
    "question": "Cosa è l\'inflazione cosmica e perché si è verificata?",
    "answer": "L\'inflazione cosmica è una teoria che postula un\'espansione ultra-rapida ed esponenziale dello spazio nei primi frazioni di secondo dell\'universo, specificamente intorno a 10^-36 secondi dopo il Big Bang. Si è verificata perché un campo scalare teorico, chiamato inflatone, si trovava in uno stato di alta densità energetica di falso vuoto, generando pressione negativa e una forza gravitazionale repulsiva che ha stirato il tessuto dello spazio-tempo."
  },
  {
    "question": "Cosa significa il numero di e-fold?",
    "answer": "Il numero di e-fold misura la durata della fase di espansione esponenziale. Un e-fold rappresenta il tempo in cui la dimensione dell\'universo viene moltiplicata per il numero di Eulero (circa 2,718). Se l\'universo subisce N e-fold, il suo fattore di scala aumenta di un fattore e^N. I modelli cosmologici standard richiedono almeno 50-60 e-fold per risolvere adeguatamente i problemi di piattezza e di orizzonte."
  },
  {
    "question": "Come risolve l\'inflazione il problema dell\'orizzonte?",
    "answer": "Il problema dell\'orizzonte chiede perché regioni estremamente distanti dell\'universo abbiano temperature della radiazione cosmica di fondo quasi identiche, anche se la velocità della luce non avrebbe permesso loro di interagire per raggiungere l\'equilibrio. L\'inflazione risolve ciò mostrando che, prima dell\'espansione esponenziale, l\'intero universo osservabile era una minuscola regione termicamente omogenea connessa causalmente, che è stata istantaneamente stirata oltre l\'orizzonte visivo."
  },
  {
    "question": "Qual è il problema della piattezza e come viene risolto?",
    "answer": "La densità energetica dell\'universo oggi è estremamente vicina alla densità critica, il che significa che lo spazio è piatto con un margine di errore minimo. Senza inflazione, qualsiasi deviazione iniziale dalla piattezza sarebbe cresciuta esponenzialmente nel tempo, richiedendo una regolazione impossibile al momento del Big Bang. L\'inflazione stira la curvatura spaziale in modo così violento che qualsiasi curvatura iniziale viene diluita, simile a come la superficie di una sfera gigante appare localmente piatta."
  },
  {
    "question": "Cos\'è il processo di riscaldamento?",
    "answer": "Il riscaldamento è la transizione termica che segna la fine dell\'inflazione. Durante l\'inflazione, l\'universo si raffredda fino a temperature prossime allo zero assoluto a causa dell\'espansione esponenziale del volume. Quando il campo di inflatone decade al minimo del suo potenziale, la sua energia residua viene riversata nello spazio come particelle del Modello Standard attraverso interazioni quantistiche, riempiendo il cosmo con un plasma caldo e denso che dà inizio alla fase tradizionale del Big Bang."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calcolatore Inflazione Cosmica',
    efoldsLabel: 'Numero di e-fold (N)',
    energyLabel: 'Scala Energetica Iniziale (GeV)',
    scaleFactorResult: 'Crescita del Fattore di Scala',
    reheatingTempResult: 'Temperatura di Riscaldamento Stimata',
    chartTitle: 'Distorsione del Tessuto Spazio-Temporale',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Caotico',
    presetExtreme: 'Limiti Estremi',
    efoldsTooltip: 'I modelli tipici prevedono tra 50 e 60 e-fold per risolvere i problemi di piattezza e orizzonte.',
    energyTooltip: 'La scala GUT è intorno a 10^16 GeV. Scale superiori sono vicine al limite di Planck.',
    scaleFactorTooltip: 'Rappresenta il fattore di espansione totale della dimensione dall\'inizio alla fine dell\'inflazione.',
    reheatingTooltip: 'La temperatura a cui l\'universo è stato riscaldato dopo la fine dell\'inflazione.',
    analogyInsuff: 'Inflazione moderata. Questa espansione è <span class="highlight">insufficiente</span> a risolvere il problema dell\'orizzonte.',
    analogyProton: 'L\'universo si è espanso dalle dimensioni di un <span class="highlight">protone</span> a quelle di una <span class="highlight">galassia</span> in una frazione di secondo.',
    analogyObservable: 'L\'universo si è espanso da una <span class="highlight">scala subatomica</span> a più grande dell\'<span class="highlight">universo osservabile</span> in 10^-32 secondi.',
  },
  seo: [
  {
    "type": "title",
    "text": "COSMOLOGIA: Teoria dell\'Inflazione Cosmica ed Espansione dello Spazio-Tempo",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "L\'inflazione cosmica rappresenta il pilastro fondamentale che collega la fisica delle particelle con l\'astrofisica osservativa. Proposta nei primi anni 1980 dai fisici Alan Guth e Andrei Linde, questa teoria postula che l\'universo primordiale abbia subito una fase di espansione esponenziale guidata dalla densità energetica di un campo scalare noto come inflatone. Questa espansione ha aumentato il volume dell\'universo di un fattore di almeno 10^26 in una minuscola frazione di secondo, risolvendo profondi paradossi del modello classico del Big Bang e fornendo il quadro teorico per la formazione delle strutture cosmiche."
  },
  {
    "type": "title",
    "text": "Confronto tra Modelli di Inflazione e Parametri",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Potenziali diversi per il campo di inflatone producono tassi di espansione e temperature di riscaldamento differenti. Di seguito sono riportate le caratteristiche dei principali modelli simulati in questo calcolatore:"
  },
  {
    "type": "table",
    "headers": [
      "Modello Inflazionistico",
      "Intervallo e-fold (N)",
      "Scala Energetica (GeV)",
      "Risultato Fisico e Dinamico"
    ],
    "rows": [
      [
        "<strong>Standard Guth</strong>",
        "50 - 60",
        "10^16",
        "Risolve piattezza e orizzonte; l\'inflazione termina mediante nucleazione di bolle in una transizione di fase lenta."
      ],
      [
        "<strong>Inflazione Caotica (Linde)</strong>",
        "60 o più",
        "10^16",
        "L\'inflatone rotola dolcemente lungo un potenziale parabolico semplice; evita i problemi di transizione di fase brusca."
      ],
      [
        "<strong>Limiti Estremi</strong>",
        "90 o più",
        "10^19 (Planck)",
        "Energie vicine al limite della gravità quantistica; stiramento massiccio dello spazio-tempo primordiale."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Risolvere i Problemi Classici del Big Bang",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Prima dello sviluppo dell\'inflazione, la cosmologia classica del Big Bang soffriva di gravi incoerenze teoriche. Il problema dell\'orizzonte, derivante dall\'omogeneità della radiazione cosmica di fondo, e il problema della piattezza, associato alla densità critica dello spazio, suggerivano la necessità di condizioni iniziali estremamente improbabili. L\'inflazione risolve naturalmente entrambe le difficoltà stirando una microregione termicamente omogenea e appiattendo dinamicamente la geometria spaziale locale. Inoltre, diluisce la concentrazione di monopoli magnetici che si sarebbero dovuti formare copiosamente nell\'universo primordiale."
  },
  {
    "type": "title",
    "text": "Prove Osservative Astronomiche del Modello Inflazionistico",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La teoria dell\'inflazione cosmica non è solo una costruzione matematica elegante; possiede solide prove indirette confermate da satelliti spaziali come COBE, WMAP e Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Omogeneità CMB:</strong> La radiazione cosmica di fondo mostra una temperatura uniforme con variazioni di solo 1 parte su 100.000 su lati opposti del cielo visibile.",
      "<strong>Geometria Piatta:</strong> Le misurazioni della curvatura dell\'universo confermano che esso è spazialmente piatto con un errore inferiore all\'1%, coerente con un massiccio stiramento inflazionistico.",
      "<strong>Assenza di Monopoli:</strong> Spiega logicamente la completa assenza di monopoli magnetici stabili e di alta massa nel nostro universo osservabile.",
      "<strong>Spettro di Fluttuazioni:</strong> Le anisotropie osservate nel fondo cosmico mostrano un indice spettrale leggermente inferiore a 1, esattamente come previsto dai modelli di inflatone a rotolamento lento."
    ]
  },
  {
    "type": "title",
    "text": "Fluttuazioni Quantistiche e i Semi delle Galassie",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "L\'aspetto piú straordinario dell\'inflazione cosmica è la sua capacità di agire come un microscopio cosmico. Le fluttuazioni quantistiche microscopiche del campo di inflatone sono state stirate a scale astronomiche durante il periodo di espansione esponenziale. Alla fine dell\'inflazione, queste fluttuazioni si sono congelate come variazioni di densità (perturbazioni primordiali). Queste differenze di densità hanno servito come semi gravitazionali che, in miliardi di anni, hanno attirato la materia per dare origine alle prime stelle, galassie, ammassi di galassie e alla rete cosmica che osserviamo oggi."
  }
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
