import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-sir-epidemia';
const title = 'Simulatore SIR di epidemie';
const description = 'Esplora la propagazione di agenti patogeni con un modello SIR interattivo che regola R0, letalità, vaccinazione, periodo infettivo, carico di picco e curve di trasmissione in tempo reale.';

const howTo = [
  {
    name: 'Imposta il numero di riproduzione di base',
    text: 'Sposta il cursore di R0 per rappresentare quante infezioni secondarie causerebbe una persona infetta in una popolazione completamente suscettibile.',
  },
  {
    name: 'Aggiungi vaccinazione ed efficacia vaccinale',
    text: 'Aumenta la copertura vaccinale o l\'efficacia per rimuovere le persone protette dal pool dei suscettibili e abbassare il numero di riproduzione effettivo.',
  },
  {
    name: 'Regola letalità e durata infettiva',
    text: 'Modifica la percentuale di letalità e il numero di giorni infettivi per osservare come rispondono gli esiti gravi e la tempistica delle curve.',
  },
  {
    name: 'Leggi le curve SIR',
    text: 'Usa il grafico e l\'ispezione giornaliera per confrontare le curve di suscettibili, infetti, recuperati e decessi stimati durante l\'epidemia simulata.',
  },
];

const faq = [
  {
    question: 'Cosa mostra un modello SIR?',
    answer: 'Un modello SIR divide una popolazione in gruppi di suscettibili, infetti e recuperati. Stima come le persone si spostano tra questi gruppi nel tempo man mano che avvengono trasmissione e guarigione.',
  },
  {
    question: 'Come cambia la curva la vaccinazione?',
    answer: 'La vaccinazione riduce la popolazione suscettibile quando previene l\'infezione. In questo simulatore, una vaccinazione efficace abbassa il numero di riproduzione effettivo e può ridurre o ritardare il picco di infezione.',
  },
  {
    question: 'R0 e Re sono la stessa cosa?',
    answer: 'No. R0 descrive la propagazione in una popolazione completamente suscettibile. Re e il numero di riproduzione effettivo dopo che immunità, vaccinazione o cambiamenti comportamentali hanno ridotto il numero di persone che possono essere infettate.',
  },
  {
    question: 'Perche la curva degli infetti raggiunge un picco e poi scende?',
    answer: 'La curva degli infetti scende quando ogni persona infetta genera meno nuovi infetti rispetto al numero di persone che escono dal gruppo degli infetti per guarigione o decesso. L\'esaurimento dei suscettibili e il motore principale in un modello SIR di base.',
  },
  {
    question: 'Puo questo strumento prevedere un\'epidemia reale?',
    answer: 'E uno strumento didattico e di scenario, non una previsione. Le epidemie reali necessitano di struttura per età, reti di contatto, geografia, ritardi di notifica, cambiamenti comportamentali, varianti, immunità calante e dati calibrati.',
  },
  {
    question: 'Qual e la differenza tra tasso di attacco e picco di infetti?',
    answer: 'Il tasso di attacco misura la proporzione totale della popolazione mai infettata entro la fine dell\'epidemia. Il picco di infetti misura il numero massimo di persone contemporaneamente infette in un dato momento. Un picco basso non garantisce un tasso di attacco basso e viceversa.',
  },
  {
    question: 'Cosa significa visivamente Re inferiore a 1?',
    answer: 'Quando Re scende sotto 1, ogni persona infetta genera in media meno di una nuova infezione. Nel grafico, la curva degli infetti non sale mai bruscamente e può declinare immediatamente dal seme iniziale, il che significa che l\'epidemia non può sostenersi.',
  },
  {
    question: 'Come influisce il periodo infettivo sull\'epidemia?',
    answer: 'Un periodo infettivo più lungo prolunga il tempo durante il quale ogni persona infetta può trasmettere l\'agente patogeno. Questo allunga la timeline dell\'epidemia, ritarda il picco e, a parità di R0, può produrre una curva più ampia con un picco più basso.',
  },
  {
    question: 'Perche la letalità non modifica la curva degli infetti?',
    answer: 'In questo modello SIR, la letalità influisce solo sul conteggio dei decessi che si dirama dal gruppo dei recuperati. Non retroagisce sulla trasmissione perché sia i decessi che le guarigioni rimuovono persone dal pool infettivo alla stessa velocità.',
  },
  {
    question: 'Cos\'e la soglia di immunità di gregge?',
    answer: 'La soglia di immunità di gregge e la frazione della popolazione che deve essere immune affinché Re scenda sotto 1. Si approssima come 1 - 1/R0. Per il morbillo con R0 intorno a 12, la soglia supera il 91%. Per l\'influenza stagionale con R0 intorno a 1,3, la soglia e vicina al 23%.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Scenario epidemico in tempo reale',
    curveChart: 'Curve di trasmissione SIR',
    inspectDay: 'Ispeziona il giorno della simulazione',
    legend: 'Legenda delle curve',
    susceptible: 'Suscettibili',
    infected: 'Infetti',
    recovered: 'Recuperati o immuni',
    deaths: 'Decessi',
    controls: 'Controlli epidemici',
    modelName: 'Modello a compartimenti',
    peakInfected: 'Picco infetti',
    peakDay: 'Giorno del picco',
    attackRate: 'Tasso di attacco',
    estimatedDeaths: 'Decessi stimati',
    r0: 'Numero di riproduzione di base R0',
    lethality: 'Letalità',
    vaccination: 'Copertura vaccinale',
    vaccineEffectiveness: 'Efficacia del vaccino',
    infectiousDays: 'Periodo infettivo',
    initialInfected: 'Infetti iniziali',
    dayLabel: 'Giorno',
    daysUnit: 'giorni',
    infectiousLabel: 'infetti',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore SIR di epidemie per R0, vaccinazione, letalità e curve di trasmissione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore SIR di epidemie ti permette di esplorare come un agente patogeno si propaga in una popolazione quando le persone suscettibili si infettano e poi lasciano il gruppo infettivo attraverso la guarigione o il decesso. E progettato per studenti, comunicatori scientifici, studenti di salute pubblica e chiunque voglia una spiegazione visiva rapida del perché piccoli cambiamenti nella trasmissione o nell\'immunità possono rimodellare un\'epidemia.',
    },
    {
      type: 'paragraph',
      html: 'I controlli interattivi si concentrano sulle variabili che le persone più spesso vogliono testare: <strong>R0</strong>, letalità, copertura vaccinale, efficacia del vaccino, durata infettiva e quota iniziale di infetti. Il grafico si aggiorna immediatamente in modo che le curve di suscettibili, infetti, recuperati, immuni e decessi possano essere confrontate come un unico sistema epidemico connesso.',
    },
    {
      type: 'title',
      text: 'Come funziona il modello SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un modello SIR di base divide la popolazione in tre compartimenti principali. <strong>S</strong> sono le persone suscettibili che possono ancora essere infettate. <strong>I</strong> sono le persone attualmente infette che possono trasmettere l\'agente patogeno. <strong>R</strong> sono le persone che non sono più infettive perché guarite, immuni o comunque uscite dalla catena di trasmissione. Questo simulatore traccia anche i decessi stimati come un ramo di esito grave dal gruppo che esce dall\'infezione.',
    },
    {
      type: 'paragraph',
      html: 'Il tasso di trasmissione e legato a R0 e al periodo infettivo. Se R0 e alto o le persone rimangono infettive più a lungo, vengono generate più nuove infezioni prima che il gruppo infettivo si riduca. Se la vaccinazione rimuove abbastanza persone dal pool dei suscettibili, il numero di riproduzione effettivo diminuisce e il picco epidemico può diventare molto più piccolo.',
    },
    {
      type: 'table',
      headers: ['Controllo', 'Cosa modifica', 'Effetto tipico sulla curva'],
      rows: [
        ['R0', 'Potenziale di trasmissione prima di considerare l\'immunità', 'R0 più alto fa salire più velocemente la curva degli infetti e raggiungere un picco più alto.'],
        ['Copertura vaccinale', 'Quota di persone rimosse dal pool dei suscettibili quando protette', 'Una copertura più alta riduce Re e può appiattire l\'epidemia.'],
        ['Efficacia del vaccino', 'Quanto la vaccinazione previene l\'infezione in questo modello semplificato', 'Un\'efficacia più alta rende la stessa copertura più protettiva.'],
        ['Periodo infettivo', 'Tempo medio in cui le persone rimangono infettive', 'Un periodo infettivo più lungo modifica la tempistica e può prolungare l\'epidemia.'],
        ['Letalità', 'Quota di persone che escono dall\'infezione conteggiate come decessi', 'Una letalità più alta alza la curva dei decessi senza aumentare direttamente la trasmissione.'],
      ],
    },
    {
      type: 'title',
      text: 'Intuizione su R0, Re e immunità di gregge',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 e il numero medio di casi secondari causati da una persona infetta in una popolazione completamente suscettibile. Re, il numero di riproduzione effettivo, e più basso quando alcune persone sono già immuni, vaccinate, isolate o comunque non disponibili per l\'infezione. In questo simulatore, la vaccinazione efficace riduce direttamente la suscettibilità, quindi il Re visualizzato diminuisce all\'aumentare della copertura protetta.',
    },
    {
      type: 'paragraph',
      html: 'Un\'approssimazione comune dell\'immunità di gregge e <strong>1 - 1 / R0</strong>. Per un R0 di 3, la soglia e circa il 66,7% di immunità efficace. Il simulatore aiuta a rendere tangibile questa soglia: quando la vaccinazione efficace e al di sotto della soglia, le epidemie possono ancora crescere; quando e al di sopra, la trasmissione fa fatica a mantenersi.',
    },
    {
      type: 'title',
      text: 'Cosa significa il numero di picco di infetti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il picco di infetti e il numero massimo di persone contemporaneamente infette nella popolazione simulata. E spesso operativamente più importante del totale delle infezioni perché ospedali, laboratori, programmi di isolamento e squadre di contact tracing subiscono la pressione dei casi attivi simultanei. Abbassare il picco può essere importante anche quando il tasso di attacco finale non e ridotto a zero.',
    },
    {
      type: 'paragraph',
      html: 'Il tasso di attacco stima la quota dell\'intera popolazione infettata entro la fine della simulazione. Un tasso di attacco alto significa che l\'agente patogeno ha raggiunto molte persone prima che la suscettibilità si esaurisse o fosse controllata. Un tasso basso significa che immunità, vaccinazione o una trasmissione debole hanno impedito una diffusione estesa.',
    },
    {
      type: 'title',
      text: 'Valori reali di R0 e cosa implicano per l\'immunità di gregge',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il numero di riproduzione di base R0 non e una costante biologica fissa per un agente patogeno. Dipende da modelli di contatto, densità di popolazione, abitudini culturali e fattori ambientali. Lo stesso virus può avere valori di R0 diversi in una città densa rispetto a un\'area rurale, o in una stagione con maggior affollamento al chiuso. I valori seguenti sono intervalli di riferimento indicativi tratti da studi pubblicati.',
    },
    {
      type: 'table',
      headers: ['Agente patogeno', 'Intervallo R0 tipico', 'Soglia immunità di gregge (1 - 1/R0)', 'Caratteristica principale di trasmissione'],
      rows: [
        ['Influenza stagionale', '1,2 - 1,4', '17% - 29%', 'Breve periodo infettivo, variazione stagionale'],
        ['SARS-CoV-2 (originale)', '2,0 - 3,0', '50% - 67%', 'Trasmissione presintomatica, vie aeree'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '80% - 87%', 'Carica virale aumentata, diffusione più rapida'],
        ['SARS-CoV-2 (Omicron)', '8,0 - 12,0', '87% - 92%', 'Immunoevasione, tropismo vie respiratorie superiori'],
        ['Polio', '5,0 - 7,0', '80% - 86%', 'Via fecale-orale, lungo shedding asintomatico'],
        ['Vaiolo', '5,0 - 7,0', '80% - 86%', 'Eradicato tramite campagna vaccinale globale'],
        ['Morbillo', '12,0 - 18,0', '92% - 94%', 'Estremamente contagioso, airborne, lungo periodo infettivo'],
        ['Pertosse', '12,0 - 17,0', '92% - 94%', 'Immunita calante permette infezioni ricorrenti'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Una soglia di immunità di gregge alta non significa automaticamente che la vaccinazione sia inutile quando la copertura e al di sotto della soglia. Anche un\'immunità parziale rallenta la trasmissione, abbassa il picco, riduce gli esiti gravi e fa guadagnare tempo ai sistemi sanitari. Il simulatore dimostra questo effetto quando sposti il cursore della vaccinazione attraverso valori intermedi.',
    },
    {
      type: 'title',
      text: 'Come cambia il numero di riproduzione effettivo Re durante un\'epidemia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re e il numero di riproduzione effettivo in un dato punto dell\'epidemia. A differenza di R0, che assume una popolazione completamente suscettibile, Re tiene conto di immunità, vaccinazione e qualsiasi altro fattore che riduce la suscettibilità. In questo simulatore, Re viene calcolato come <strong>R0 x (1 - frazione protetta)</strong>, dove la frazione protetta e la quota della popolazione effettivamente immune attraverso la vaccinazione.',
    },
    {
      type: 'paragraph',
      html: 'Il valore di Re visualizzato nell\'intestazione del simulatore si aggiorna mentre muovi i controlli. Quando Re rimane sopra 1, l\'epidemia cresce. Quando scende sotto 1, ogni persona infetta genera in media meno di una nuova infezione e l\'epidemia non può sostenersi. Questa e l\'intuizione centrale del controllo epidemico: portare e mantenere Re sotto 1 attraverso immunità, comportamento o interventi.',
    },
    {
      type: 'title',
      text: 'Tasso di attacco, carico di picco e cosa rivelano sulla gravità dell\'epidemia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il tasso di attacco e la frazione della popolazione totale infettata durante l\'intera epidemia simulata. E la metrica riassuntiva più citata dopo un\'ondata epidemica. Un tasso di attacco alto significa che l\'agente patogeno ha infettato la maggior parte dei suscettibili prima che l\'esaurimento o il controllo fermassero la trasmissione. Un tasso basso significa che immunità, vaccinazione o una trasmissione intrinsecamente debole hanno impedito un\'infezione diffusa.',
    },
    {
      type: 'paragraph',
      html: 'Il picco di infetti - il numero massimo di persone contemporaneamente infette - e più rilevante per la pressione sanitaria a breve termine. Un\'ondata con un tasso di attacco moderato ma un picco molto alto e acuto può sopraffare gli ospedali anche se i casi totali non sono estremi. Al contrario, una curva lenta e appiattita può avere un tasso di attacco simile distribuito su molte settimane, dando al sistema sanitario il tempo di gestire i casi. Ecco perché i funzionari della salute pubblica sottolineano l\'importanza di <strong>appiattire la curva</strong> come obiettivo operativo distinto dal prevenire tutte le infezioni.',
    },
    {
      type: 'title',
      text: 'Appiattire la curva e la capacità sanitaria nel modello SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La curva degli infetti in un modello SIR può essere interpretata come il numero di persone che necessitano di cure simultaneamente. In un\'epidemia reale, ogni persona che ha bisogno di un letto d\'ospedale, supporto di ossigeno o terapia intensiva attinge a un pool finito di risorse. Quando la curva degli infetti supera la capacità disponibile, la mortalita per tutte le cause aumenta perché il sistema non può fornire cure adeguate.',
    },
    {
      type: 'paragraph',
      html: 'La vaccinazione, in questo modello, appiattisce la curva rimuovendo le persone dal pool dei suscettibili prima che possano infettarsi. Ridurre R0 attraverso altre misure - mascherine, ventilazione, distanziamento, test, isolamento - abbasserebbe anche il picco in un modello più completo. La simulazione rende visibile il meccanismo: all\'aumentare della copertura vaccinale efficace, il picco si riduce, si sposta più avanti o scompare del tutto.',
    },
    {
      type: 'title',
      text: 'La matematica alla base del modello SIR visualizzata',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nel modello SIR, il tasso di nuove infezioni per passo temporale dipende da tre quantità: il tasso di trasmissione <strong>beta</strong>, il numero corrente di persone infette <strong>I</strong> e la frazione della popolazione effettiva che e ancora suscettibile <strong>S / N</strong>. Il prodotto <strong>beta x I x S / N</strong> e chiamato forza dell\'infezione. Ogni giorno, questa forza determina quante persone suscettibili entrano nel compartimento degli infetti.',
    },
    {
      type: 'paragraph',
      html: 'Le persone lasciano il compartimento infetto al tasso di recupero <strong>gamma = 1 / periodo infettivo</strong>. Il bilancio tra la forza dell\'infezione e il tasso di recupero determina se l\'epidemia cresce o si riduce. Quando beta x S / N supera gamma, le nuove infezioni superano i recuperi e l\'epidemia si espande. Quando la frazione suscettibile S / N e sufficientemente diminuita, gamma domina e l\'epidemia si contrae.',
    },
    {
      type: 'paragraph',
      html: 'Il parametro <strong>beta</strong> non e direttamente visibile nell\'interfaccia. Viene invece derivato da R0 e dal periodo infettivo attraverso la relazione <strong>beta = R0 x gamma</strong>. Questo e il motivo per cui modificare R0 o il periodo infettivo produce forme di curva simili ma non identiche. Entrambi i parametri influenzano la forza dell\'infezione, ma il periodo infettivo allunga anche l\'asse temporale dell\'epidemia.',
    },
    {
      type: 'title',
      text: 'Come usare questo simulatore per apprendere e insegnare',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Confronta scenari con R0 alto e basso:</strong> imposta R0 a 1,5 (intervallo dell\'influenza stagionale) e poi a 6,0 (intervallo pre-vaccinazione della polio). Nota come cambiano l\'altezza del picco, la tempistica del picco e il tasso di attacco anche quando tutti gli altri controlli sono identici.',
        '<strong>Esplora la soglia di immunità di gregge:</strong> inizia con R0 a 3,0 e nessuna vaccinazione. Osserva il tasso di attacco. Poi aggiungi copertura vaccinale finche Re non scende sotto 1. Confronta il picco e il tasso di attacco con copertura appena sotto e appena sopra la soglia.',
        '<strong>Testa l\'effetto di una risposta lenta vs. rapida:</strong> imposta la copertura vaccinale a diversi livelli e osserva quando si verifica il picco. Una copertura più alta non solo riduce l\'altezza del picco ma di solito lo ritarda, facendo guadagnare tempo per la preparazione sanitaria.',
        '<strong>Separa letalità e trasmissione:</strong> imposta la letalità allo 0% e osserva la curva degli infetti. Poi imposta la letalità al 10% senza cambiare le altre impostazioni. La curva degli infetti non cambia, ma il numero di decessi aumenta. Questo dimostra perché il tasso di letalità e la velocità di trasmissione sono dimensioni epidemiologiche distinte.',
        '<strong>Esamina l\'effetto del periodo infettivo:</strong> confronta un periodo infettivo di 4 giorni con uno di 18 giorni a parità di R0. Il periodo più lungo allunga la curva, ritarda il picco e produce un\'ondata più lunga ma più bassa.',
        '<strong>Esercizio in classe - trova la soglia:</strong> chiedi agli studenti di trovare la copertura vaccinale minima che porta Re sotto 1 per un dato R0, poi confronta il risultato con la formula 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'Quando e perché usare questo simulatore',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Studenti di epidemiologia:</strong> connetti il framework matematico SIR a forme di curva interattive prima di lavorare con equazioni differenziali o programmare i propri modelli.',
        '<strong>Comunicatori scientifici e giornalisti:</strong> genera grafici, screenshot o spiegazioni dal vivo che mostrano perché R0, vaccinazione e periodo infettivo sono importanti per le traiettorie epidemiche.',
        '<strong>Studenti di salute pubblica:</strong> testa come diverse combinazioni di interventi spostano il picco epidemico e il tasso di attacco per sviluppare intuizione sui compromessi nella risposta alle epidemie.',
        '<strong>Chiunque sia curioso sulla matematica delle epidemie:</strong> esplora il modello SIR senza bisogno di scrivere codice o installare software. Ogni controllo aggiorna il grafico in tempo reale.',
      ],
    },
    {
      type: 'title',
      text: 'Estensioni del modello: SEIR, SIRS e oltre',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore usa una struttura SIR di base. Diverse estensioni comuni aggiungono realismo. Un modello <strong>SEIR</strong> aggiunge un compartimento esposto (E) per le persone che sono infette ma non ancora infettive, rappresentando il periodo di incubazione. Il gruppo esposto sposta il picco epidemico più avanti rispetto al modello SIR perché le infezioni passano del tempo nella fase latente prima di contribuire alla trasmissione.',
    },
    {
      type: 'paragraph',
      html: 'Un modello <strong>SIRS</strong> permette agli individui recuperati di perdere l\'immunità nel tempo e rientrare nel compartimento suscettibile. Questo modella agenti patogeni come la pertosse o SARS-CoV-2 con immunità calante e produce ondate epidemiche sostenute o ricorrenti. Un <strong>modello strutturato per età</strong> suddivide la popolazione in gruppi di età con diverse matrici di contatto e profili di gravità, essenziale per malattie dove bambini e anziani hanno esiti molto diversi.',
    },
    {
      type: 'paragraph',
      html: 'Altre estensioni aggiungono diffusione geografica (modelli metapopolazionali), cambiamenti comportamentali (tassi di contatto adattivi), rumore stocastico (per popolazioni piccole dove l\'estinzione casuale e importante) e tempistica degli interventi (chiusure scolastiche, lockdown, restrizioni di viaggio che si attivano e disattivano). Ogni estensione aggiunge complessità essenziale per le previsioni ma può oscurare le dinamiche di trasmissione fondamentali che il modello SIR di base illustra in modo chiaro.',
    },
    {
      type: 'title',
      text: 'Limitazioni di questo simulatore epidemico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questo e un modello SIR deterministico compatto. Non include gruppi di età, struttura familiare, scuole, viaggi, superdiffusione, periodi di incubazione, trasmissione asintomatica, stagionalità, varianti, immunità calante, cambiamenti comportamentali, ritardi di test o interventi di salute pubblica che si attivano e disattivano nel tempo. Questi dettagli sono essenziali per le previsioni reali.',
    },
    {
      type: 'paragraph',
      html: 'Il modello assume una popolazione ben mescolata dove ogni persona suscettibile ha la stessa probabilità di contatto con ogni persona infetta. Le popolazioni reali hanno reti di contatto con forte clustering, assortativita per età, struttura geografica e variazione individuale nell\'infettività. Queste caratteristiche possono creare crescita iniziale più lenta, eventi di superdiffusione e modelli epidemici eterogenei che un modello omogeneo non cattura.',
    },
    {
      type: 'paragraph',
      html: 'Usa il simulatore per comprendere i meccanismi e confrontare scenari, non per prendere decisioni mediche, politiche o di emergenza. La valutazione epidemica nel mondo reale richiede dati di sorveglianza, contesto locale, analisi dell\'incertezza e modellistica epidemiologica specializzata.',
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
