import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'simulatore-linea-becke-indice-rifrazione-vetro';
const title = 'Simulatore della linea di Becke e dell\'indice di rifrazione del vetro forense';
const description = 'Simula il metodo della linea di Becke per il confronto forense dei vetri riscaldando un liquido di immersione, allineando gli indici di rifrazione e osservando la scomparsa del halo luminoso.';

const howTo = [
  {
    name: 'Selezionare un profilo di vetro dubitato',
    text: 'Scegli un profilo di riferimento di vetro comune come il vetro sodico-calcico, borosilicato, cristallo al piombo o vetro temperato per finestre.',
  },
  {
    name: 'Regolare la temperatura della platina riscaldante',
    text: 'Sposta il cursore della temperatura per variare l\'indice di rifrazione del liquido di immersione virtuale.',
  },
  {
    name: 'Osservare il movimento della linea di Becke',
    text: 'Usa il controllo della direzione di messa a fuoco per vedere se la linea luminosa si sposta verso l\'interno, verso l\'esterno o se quasi scompare nel punto di coincidenza.',
  },
  {
    name: 'Leggere la differenza di indice',
    text: 'Confronta l\'IR del liquido, l\'IR del vetro, il delta di IR e la percentuale di corrispondenza per capire perché il halo si attenua vicino alla coincidenza di indici.',
  },
];

const faq = [
  {
    question: 'Cos\'è la linea di Becke nell\'analisi forense del vetro?',
    answer: 'La linea di Becke è un alone luminoso osservato vicino al confine tra un frammento di vetro e un liquido di immersione quando i loro indici di rifrazione differiscono. Il suo movimento durante la messa a fuoco aiuta a determinar quale materiale possiede l\'indice di rifrazione più elevato.',
  },
  {
    question: 'Perché è importante riscaldare il liquido di immersione?',
    answer: 'L\'indice di rifrazione di molti liquidi di immersione diminuisce all\'aumentare della temperatura. Riscaldando il liquido fino a far corrispondere il suo indice a quello del vetro, il contrasto sul confine svanisce e il bordo del frammento diventa difficile da vedere.',
  },
  {
    question: 'L\'indice di rifrazione può identificare da solo la sorgente di un vetro?',
    answer: 'No. L\'indice di rifrazione può supportare il confronto e l\'esclusione di classe, ma l\'interpretazione forense della sorgente considera anche la composizione elementare, lo spessore, il colore, il contesto della frattura, i controlli, l\'incertezza e le procedure di laboratorio validate.',
  },
  {
    question: 'Cosa significa quando la linea di Becke scompare?',
    answer: 'Significa che il liquido e il vetro hanno indici di rifrazione molto simili in quelle condizioni simulate. Nella microscopia reale, la scomparsa viene valutata con un controllo di temperatura calibrato e materiali di riferimento.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Vista al microscopio virtuale che mostra un frammento di vetro in un liquido di immersione',
    units: 'Sistema di unità di misura della temperatura',
    metric: 'Metrico',
    imperial: 'Imperiale',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Vetro di riferimento',
    sodaLime: 'Vetro sodico-calcico per contenitori',
    borosilicate: 'Vetro borosilicato da laboratorio',
    leadCrystal: 'Cristallo al piombo decorativo',
    tempered: 'Vetro temperato per finestre',
    stageTemperature: 'Temperatura della platina',
    focusDirection: 'Direzione di messa a fuoco',
    focusRaised: 'Alza messa a fuoco',
    focusLowered: 'Abbassa messa a fuoco',
    liquidRi: 'IR liquido',
    glassRi: 'IR vetro',
    deltaRi: 'Delta di IR',
    matchMeter: 'Corrispondenza IR',
    canvasHalo: 'alone di Becke visibile',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'bordo casi corrispondente',
    interpMatched: 'Il confine è vicino alla coincidenza ottica. In un vero test della linea di Becke, questa è la regione in cui il halo diventa debole e il bordo del frammento è più difficile da individuare.',
    interpGlassHigher: 'Il vetro ha l\'indice di rifrazione più alto. Con la messa a fuoco sollevata, il comportamento della linea di Becke indica che la luce si concentra verso il lato del vetro del confine.',
    interpLiquidHigher: 'Il liquido di immersione ha l\'indice di rifrazione più alto. Il halo si sposta verso il lato del liquido finché la temperatura non avvicina l\'indice del liquido a quello del vetro.',
    disclaimer: 'Solo a scopo didattico. Il reale confronto forense del vetro richiede apparecchiature per l\'indice di rifrazione calibrate, standard noti, rapporti sull\'incertezza e un\'interpretazione qualificata.',
  },
  seo: [
    {
      type: 'title',
      text: 'Test dell\'indice di rifrazione tramite linea di Becke per vetro forense',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulatore didattico',
      title: 'Cosa dimostra questo simulatore di IR del vetro',
      html: 'Questo simulatore mostra perché un frammento di vetro diventa più o menos visibile nell\'olio di immersione man mano che l\'indice di rifrazione del liquido si avvicina a quello del vetro. È progettato per gli studenti di scienze forensi che apprendono la <strong>microscopia della linea di Becke</strong>, la corrispondenza dell\'IR su platina riscaldante e i limiti delle prove di confronto del vetro.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n vetro - n liquido', label: 'contrasto di indice mostrato', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'intervallo della platina riscaldante', icon: 'mdi:thermometer' },
        { value: '4', label: 'profili di vetro', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'unità di temperatura convertibili', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista di controllo pratica per l\'osservazione della linea di Becke',
      items: [
        'Usa un frammento di vetro pulito e piccolo completamente immerso in un liquido con indice di rifrazione appropriato.',
        'Metti a fuoco leggermente sopra e sotto il confine e osserva verso quale lato sembra muoversi la linea luminosa.',
        'Aumenta la temperatura lentamente vicino al punto di corrispondenza stimato perché la linea può svanire in un intervallo ristretto.',
        'Registra la temperatura, il tipo di liquido, lo standard di calibrazione, il comportamento di corrispondenza osservato e l\'incertezza.',
        'Tratta l\'IR come prova di classe: una discrepanza può escludere, mentre una corrispondenza richiede un contesto aggiuntivo.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Cosa può supportare il confronto dell\'IR',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'L\'indice di rifrazione può aiutare a confrontare frammenti di vetro dubitati con vetri di riferimento noti in condizioni controllate.',
          points: ['Confronto delle caratteristiche di classe', 'Esclusione quando l\'IR differisce chiaramente', 'Screening prima dell\'analisi elementare', 'Insegnamento del comportamento del confine ottico'],
        },
        {
          title: 'Cosa l\'IR non può provare da solo',
          icon: 'mdi:alert-circle-outline',
          description: 'Un IR corrispondente non identifica in modo univoco una lastra, una bottiglia, il finestrino di un veicolo o una sorgente sulla scena del crimine.',
          points: ['Nessuna attribuzione di sorgente individuale da sola', 'Nessuna ricostruzione senza contesto di scena', 'Non sostituisce i controlli', 'Nessuna conclusione legale da un modello di browser'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Domanda dell\'utente', 'Concetto di microscopia', 'Risposta dettagliata'],
      rows: [
        ['Perché il bordo luminoso si muove?', 'Rifrazione al confine tra due indici di rifrazione.', 'La linea di Becke tende a muoversi verso il materiale con indice di rifrazione più elevato quando si aumenta la messa a fuoco.'],
        ['Perché il bordo scompare?', 'Corrispondenza degli indici.', 'Quando l\'IR del vetro e del liquido sono quasi uguali, il contrasto sul confine diminuisce e l\'alone si attenua.'],
        ['Perché riscaldare il liquido?', 'Coefficiente termico dell\'IR.', 'L\'IR del liquido simulato diminuisce con la temperatura, consentendo la corrispondenza con diversi tipi di vetro.'],
        ['La corrispondenza è conclusiva?', 'Limitazione della prova di classe.', 'Una corrispondenza supporta solo la coerenza; molti oggetti di vetro possono condividere un IR simile.'],
      ],
    },
    {
      type: 'title',
      text: 'Come funziona il modello di simulazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il modello assegna a ciascun profilo di vetro un indice di rifrazione di riferimento e tratta il liquido di immersione come un mezzo termosensibile. Man mano che la platina si riscalda, l\'indice del liquido diminuisce secondo un coefficiente termico fisso. Il simulatore calcola quindi la differenza tra l\'IR del vetro e quello del liquido, utilizzando tale differenza per controllare la luminosità del halo, il disallineamento del halo, la percentuale di corrispondenza e il messaggio di interpretazione.',
    },
    {
      type: 'paragraph',
      html: 'Il campo visivo del microscopio is intenzionalmente qualitatio. Non tenta di tracciare i raggi di ogni percorso ottico. Invece, conserva la relazione didattica essenziale: un forte contrasto di IR produce un confine luminoso; un contrasto minore produce un confine debole; e vicino al punto di coincidenza, il bordo del vetro può sembrare svanire nel liquido.',
    },
    {
      type: 'paragraph',
      html: 'Nei laboratori forensi professionali, la calibrazione della platina riscaldante viene eseguita utilizzando campioni di vetro di riferimento con indice di rifrazione noto. Poiché l\'indice di rifrazione del liquido di immersione varia in modo prevedibile con la temperatura (solitamente indicato como dn/dT), la temperatura esatta alla quale la linea di Becke scompare consente allo scienziato di calcolare l\'indice di rifrazione del vetro fino a quattro decimali. Questo simulatore modella questo comportamento dipendente dalla temperatura utilizzando una formula lineare, consentendo agli studenti di esercitarsi a trovare il punto di corrispondenza esatto controllando attentamente la platina riscaldante.',
    },
    {
      type: 'paragraph',
      html: 'Quando si analizzano le prove sui vetri, l\'indice di rifrazione è considerato una prova con caratteristiche di classe. Sebbene una corrispondenza dell\'indice di rifrazione tra un frammento della scena del crimine e gli indumenti di un sospettato sia coerente con una fonte comune, essa non identifica la fonte in modo univoco poiché molti oggetti di vetro condividono valori di indice di rifrazione identici. Pertanto, gli esperti forensi devono interpretare i risultati coincidenti in modo prudente, segnalando la corrispondenza in termini di coerenza ed evidenziando al contempo che non è possibile un\'attribuzione definitiva della fonte basandosi solo sulle proprietà ottiche.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Indice di rifrazione', definition: 'Misura di quanto un materiale devia la luce rispetto al vuoto.' },
        { term: 'Liquide di immersione', definition: 'Liquido con proprietà ottiche note utilizzato per circondare un frammento durante il confronto microscopico dell\'IR.' },
        { term: 'Linea di Becke', definition: 'La linea o alone luminoso osservato su un confine quando due materiali trasparenti hanno indici di rifrazione diversi.' },
        { term: 'Punto di coincidenza', definition: 'La regione di temperatura in cui il liquido di immersione e il vetro hanno quasi lo stesso indice di rifrazione.' },
        { term: 'Prova di classe', definition: 'Prova che può associare un elemento a un gruppo di possibili fonti piuttosto che a una singola fonte esclusiva.' },
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio di interpretazione per gli studenti',
      html: 'Nelle prove sui vetri, una chiara discrepanza dell\'IR è spesso più potente di una corrispondenza perché può escludere una fonte proposta. Una corrispondenza è utile, ma la sua forza dipende dai dati di popolazione, dalla precisione della misurazione, dalla composizione elementare e dal contesto del caso.',
    },
    {
      type: 'proscons',
      title: 'Punti di forza e limiti del test dell\'IR del vetro tramite linea di Becke',
      items: [
        { pro: 'Rapido, visivo ed eccellente per insegnare il confronto tra materiali trasparenti.', con: 'Il giudizio dell\'osservatore e la tecnica di messa a fuoco possono influenzare il movimento apparente della linea.' },
        { pro: 'La corrispondenza della temperatura può stimare l\'IR con una precisione utile se calibrata.', con: 'Il controllo termico, l\'invecchiamento del liquido, la contaminazione e gli standard sono importanti nel lavoro reale.' },
        { pro: 'Utile per escludere frammenti di vetro con proprietà ottiche chiaramente diverse.', con: 'Non può individualizzare una fonte senza prove analitiche e contestuali più ampie.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Precauzione forense',
      title: 'Mantenere la conclusione proporzionale',
      html: 'Una simulazione della linea di Becke nel browser è un sussidio didattico, non un metodo di laboratorio. L\'interpretazione formale delle prove sui vetri dovrebbe basarsi su strumenti validati, procedure scritte, registrazioni di calibrazione, stime di incertezza, revisione paritaria e un linguaggio di rendicontazione appropriato alla giurisdizione.',
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
