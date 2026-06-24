import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'determinazione-sesso-biologico-morfologia-cranio-bacino-antropologia-forense';
const title = 'Determinatore del Sesso in Antropologia Forense';
const description = 'Stima il sesso biologico dalla morfologia cranica e pelvica utilizzando un modello di probabilità bayesiano.';

const howTo = [
  {
    name: 'Selezionare la regione anatomica da analizzare',
    text: 'Decidi se analizzare il bacino, il cranio o entrambi. La valutazione di entrambe le aree aumenta la precisione e l\'affidabilità della classificazione finale del sesso biologico.',
  },
  {
    name: 'Valutare ciascun tratto morfologico',
    text: 'Esamina i campioni ossei e assegna un punteggio ai punti chiave su una scala da 1 (iperfemminile) a 5 (ipermaschile) basandoti sui punti di riferimento visivi.',
  },
  {
    name: 'Inserire i punteggi nel motore bayesiano',
    text: 'Utilizza i selettori a scorrimento per inserire il punteggio di ciascun tratto. Il classificatore aggiorna automaticamente la probabilità a posteriori per le categorie maschile e femminile.',
  },
  {
    name: 'Interpretare i risultati di probabilità',
    text: 'Esamina l\'indicatore di fiducia finale, la classificazione del sesso predominante e leggi le note di diagnostica forense per comprendere le variazioni biologiche.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Che cos\'è il metodo di Phenice nella determinazione del sesso pelvico?',
    answer: 'Il metodo di Phenice, pubblicato da T. W. Phenice nel 1969, si concentra su tre caratteristiche pelviche specifiche: l\'arco ventrale, la concavità sottopubica e l\'aspetto mediale della branca ischiopubica. Rimane uno dei metodi morfologici più affidabili in antropologia forense, con tassi di precisione superiori al 95% se applicato a resti scheletrici ben conservati.',
  },
  {
    key: 'faq-2',
    question: 'Perché il bacino è preferito al cranio per la stima del sesso?',
    answer: 'Il bacino è la parte più sessualmente dimorfica dello scheletro umano poiché riflette l\'adattamento funzionale al parto nelle femmine. La pressione evolutiva ha modellato il bacino femminile per essere più largo, meno profondo e con angoli più ampi rispetto al bacino maschile, mentre il dimorfismo cranico è principalmente correlato alle dimensioni corporee generali e allo sviluppo muscolare.',
  },
  {
    key: 'faq-3',
    question: 'Come stima il classificatore bayesiano la probabilità del sesso?',
    answer: 'Il nostro classificatore utilizza un modello di aggiornamento bayesiano. Assume una probabilità a priori del 50% per entrambi i sessi. Per ciascun marcatore anatomico valutato, il modello moltiplica la probabilità a priori per la verosimiglianza di ottenere quel punteggio specifico nelle popolazioni maschili rispetto a quelle femminili. I punteggi risultanti vengono normalizzati.',
  },
  {
    key: 'faq-4',
    question: 'Cosa rappresenta un punteggio di 3 nell\'analisi morfologica?',
    answer: 'Un punteggio di 3 rappresenta una morfologia indeterminata o neutra. Ciò indica che il tratto mostra caratteristiche che si collocano al centro dello spettro del dimorfismo sessuale umano, non mostrando né tratti tipicamente femminili (1-2) né tipicamente maschili (4-5).',
  },
  {
    key: 'faq-5',
    question: 'Questo modello può determinare il sesso di resti scheletrici di bambini?',
    answer: 'No. La determinazione morfologica del sesso è altamente inaffidabile per i resti di subadulti poiché le caratteristiche morfologiche che differenziano gli scheletri maschili e femminili non si sviluppano completamente prima della pubertà. Gli antropologi forensi si affidano a test genetici o indicatori dentali per i subadulti.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Morfologia Pelvica',
    craniumRegion: 'Morfologia Cranica',
    subpubicAngle: 'Angolo Sottopubico',
    subpubicAngleDesc: 'L\'angolo formato sotto la sinfisi pubica.',
    subpubicAngleFem: 'Angolo ampio a U (>90°)',
    subpubicAngleMasc: 'Angolo stretto a V (<70°)',
    sciaticNotch: 'Grande Incisura Sciatica',
    sciaticNotchDesc: 'La grande incisura sciatica nell\'ileo posteriore.',
    sciaticNotchFem: 'Incisura ampia e superficiale',
    sciaticNotchMasc: 'Incisura stretta e profonda',
    ventralArc: 'Arco Ventrale',
    ventralArcDesc: 'Cresta ossea che attraversa il pube anteriore.',
    ventralArcFem: 'Cresta elevata prominente',
    ventralArcMasc: 'Linea assente o molto tenue',
    preauricularSulcus: 'Solco Preauricolare',
    preauricularSulcusDesc: 'Solco adiacente all\'articolazione sacroiliaca.',
    preauricularSulcusFem: 'Solco profondo e bucherellato',
    preauricularSulcusMasc: 'Assente o liscio',
    mastoidProcess: 'Processo Mastoideo',
    mastoidProcessDesc: 'Proiezione ossea dietro il canale uditivo.',
    mastoidProcessFem: 'Proiezione piccola e corta',
    mastoidProcessMasc: 'Proiezione grande e lunga',
    supraorbitalRidge: 'Arcata Sopraccigliare',
    supraorbitalRidgeDesc: 'Protrusione dell\'arcata sopraccigliare (glabella).',
    supraorbitalRidgeFem: 'Fronte liscia e piatta',
    supraorbitalRidgeMasc: 'Arcata prominente e sporgente',
    mentalEminence: 'Eminenza Mentoniera (Mento)',
    mentalEminenceDesc: 'La forma e la prominenza del mento.',
    mentalEminenceFem: 'Mento arrotondato e appuntito',
    mentalEminenceMasc: 'Mento largo e quadrato',
    nuchalCrest: 'Cresta Nucale',
    nuchalCrestDesc: 'Creste ossee nella parte posteriore del cranio.',
    nuchalCrestFem: 'Piano occipitale liscio',
    nuchalCrestMasc: 'Proiezione rugosa e uncinata',
    selectOption: 'Scegli punteggio...',
    score1: '1 - Iperfemminile',
    score2: '2 - Femminile',
    score3: '3 - Indeterminato',
    score4: '4 - Maschile',
    score5: '5 - Ipermaschile',
    notEvaluated: 'Non valutato',
    resultsTitle: 'Risultati della Determinazione del Sesso',
    femaleProbLabel: 'Probabilità Femminile',
    maleProbLabel: 'Probabilità Maschile',
    predominantLabel: 'Classificazione Predominante',
    confidenceLabel: 'Fiducia della Stima',
    weakConf: 'Debole (Pochi indicatori valutati)',
    moderateConf: 'Moderata',
    strongConf: 'Forte',
    femaleClass: 'Femminile',
    maleClass: 'Maschile',
    indeterminateClass: 'Indeterminato',
    noteNoData: 'Si prega di valutare almeno un marcatore anatomico per iniziare i calcoli.',
    noteTriageOnly: 'Questo è un ausilio di screening educativo. La valutazione forense formale richiede analisi metriche e revisione da parte di esperti.',
    noteBayesianEst: 'Le probabilità sono calcolate dinamicamente utilizzando una matrice di verosimiglianza bayesiana non parametrica.',
    pelvicTitle: 'Guida di Riferimento del Bacino',
    cranialTitle: 'Guia di Riferimento del Cranio',
    pelvisDesc: 'Il bacino femminile è adattato per il parto, con strutture più larghe e angoli più aperti. Il bacino maschile è più robusto, stretto e orientato verticalmente.',
    cranialDesc: 'Il cranio maschile è generalmente più grande e robusto, con processi mastoidei più grandi, arcate sopraccigliari prominenti e attacchi muscolari rugosi. Il cranio femminile è più gracile, con creste più lisce e mento arrotondato.',
  },
  seo: [
    {
      type: 'title',
      text: 'Introduzione alla determinazione osteologica del sesso in antropologia forense',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La stima del sesso biologico è uno dei passaggi fondamentali nella creazione di un profilo biologico per i resti scheletrici sconosciuti in antropologia forense, tossicologia e archeologia. Insieme alla statura, all\'età al momento del decesso e all\'affinità ancestrale, la stima del sesso aiuta a restringere il gruppo dei potenziali soggetti scomparsi. Gli scheletri umani mostrano un chiaro dimorfismo sessuale, ovvero differenze fisiche tra maschi e femmine della stessa specie. Questo dimorfismo si riflette sia nelle dimensioni (robustezza rispetto a gracilità) sia nella forma (in particolare gli adattamenti pelvici legati al parto).',
    },
    {
      type: 'paragraph',
      html: 'Questo strumento interattivo consente agli studenti di medicina legale, ai medici legali e ai tirocinanti di valutare i punti di riferimento morfologici del bacino e del cranio. Inserendo i punteggi basati su guide visive, gli utenti possono osservare come i singoli marcatori ossei contribuiscono a un modello statistico cumulativo.',
    },
    {
      type: 'title',
      text: 'Dimorfismo pelvico e metodo di Phenice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il bacino è universalmente riconosciuto come la regione più accurata dello scheletro per la determinazione del sesso biologico. I bacini femminili sono più larghi, hanno un canale del parto più grande, una grande incisura sciatica più ampia e un angolo sottopubico superiore a novanta gradi. Al contrario, i bacini maschili si caratterizzano per angoli sottopubici stretti a forma di V e un\'incisura sciatica stretta. Il metodo di Phenice si concentra su tre caratteristiche specifiche dell\'osso pubico: l\'arco ventrale, la concavità sottopubica e l\'aspetto mediale della branca ischiopubica. La presenza di un arco ventrale ben definito è un indicatore eccezionalmente forte del sesso femminile, mentre la sua assenza è tipica nei maschi.',
    },
    {
      type: 'title',
      text: 'Dimorfismo cranico e marcatori di robustezza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando le ossa del bacino sono mancanti o mal conservate, il cranio funge da alternativa primaria per la stima del sesso. La valutazione cranica si basa sulla robustezza, poiché i crani maschili presentano generalmente siti di inserzione muscolare più pronunciati e processi ossei più grandi a causa di differenze di sviluppo guidate dagli ormoni. Il processo mastoideo, situato dietro l\'orecchio, è più grande e più largo nei maschi. L\'arcata sopraccigliare o glabella è prominente e sporgente nei maschi, mentre rimane liscia e verticale nelle femmine. Il mento (eminenza mentoniera) tende a essere quadrato e largo nei maschi, mentre le femmine presentano una struttura del mento più arrotondata e appuntita.',
    },
    {
      type: 'table',
      headers: ['Punto di riferimento anatomico', 'Caratteristiche femminili (Punteggi 1-2)', 'Caratteristiche maschili (Punteggi 4-5)', 'Valore forense'],
      rows: [
        ['Angolo sottopubico', 'Angolo ampio, ottuso (spesso superiore a 90 gradi).', 'Angolo stretto, acuto (in genere inferiore a 70 gradi).', 'Massimo valore diagnostico individuale per la determinazione del sesso pelvico.'],
        ['Incisura sciatica', 'Incisura ampia e superficiale che ricorda una forma a U.', 'Incisura stretta e profonda che ricorda una forma a pollice.', 'Marcatore estremamente durevole, spesso conservato in resti frammentati.'],
        ['Processo mastoideo', 'Piccolo, corto e sporgente in modo minimo sotto il meato uditivo.', 'Grande, lungo e sporgente in modo significativo verso il basso.', 'Marcatore cranico affidabile, resistente agli agenti atmosferici.'],
        ['Arcata sopraccigliare', 'Glabella liscia e piatta con profilo frontale verticale.', 'Arcata prominente e sporgente con fronte inclinata.', 'Differenzia i crani maschili robusti da quelli femminili gracili.'],
      ],
    },
    {
      type: 'title',
      text: 'Modellazione matematica bayesiana nelle classificazioni morfologiche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le valutazioni forensi tradizionali si basavano su una classificazione soggettiva, che poteva portare a distorsioni da parte dell\'osservatore. L\'antropologia forense moderna integra modelli di probabilità statistica per quantificare l\'incertezza. La statistica bayesiana è ideale per questo scopo, partendo da una probabilità a priori uguale (cinquanta percento maschio, cinquanta percento femmina) e aggiornandola man mano che vengono introdotte nuove prove. Quando i tratti pelvici mostrano una morfologia altamente femminile (ampio angolo sottopubico, punteggio 1), la probabilità di classificazione femminile aumenta, superando i marcatori intermedi o contrastanti presenti nel cranio.',
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore digitale implementa un motore bayesiano non parametrico. I calcoli forniscono una percentuale di probabilità piuttosto che un output binario rigido, il che si allinea alle moderne linee guida forensi che enfatizzano la segnalazione degli intervalli di confidenza e dei tassi di errore nelle testimonianze in tribunale. La fiducia della classificazione dipende dal numero di punti di riferimento valutati, con punteggi provenienti sia dalle regioni pelviche che craniche che forniscono i risultati più robusti.',
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
