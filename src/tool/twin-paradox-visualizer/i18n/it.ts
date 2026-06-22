import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'visualizzatore-paradosso-gemelli';
const title = 'Visualizzatore del Paradosso dei Gemelli: Dilatazione del Tempo nella Relativita Ristretta';
const description = 'Visualizza come la relativita ristretta fa sì che un gemello che viaggia veloce torni piu giovane del gemello rimasto sulla Terra.';

const howTo = [
  {
    name: 'Imposta la velocita della navicella',
    text: 'Usa il cursore della velocita per scegliere una frazione della velocita della luce e osserva il fattore di Lorentz aumentare.',
  },
  {
    name: 'Scegli la durata della missione nel sistema Terra',
    text: 'Regola quanti anni passano per il gemello che resta sulla Terra durante l intero viaggio di andata e ritorno.',
  },
  {
    name: 'Confronta gli orologi e le linee d universo',
    text: 'Leggi la differenza di eta, il tempo trascorso nella navicella, la distanza nel sistema Terra e la linea d universo piegata che segna il cambiamento di sistema inerziale del gemello viaggiatore.',
  },
];

const faq = [
  {
    question: 'Cos e il paradosso dei gemelli nella relativita ristretta?',
    answer: 'Il paradosso dei gemelli e un esperimento mentale in cui un gemello viaggia nello spazio a velocita relativistica e poi torna sulla Terra piu giovane del gemello rimasto a casa. Sembra paradossale perche inizialmente ciascun gemello puo descrivere l altro come in movimento, ma il gemello viaggiatore cambia sistema inerziale quando inverte la rotta, quindi i due percorsi attraverso lo spaziotempo non sono simmetrici.',
  },
  {
    question: 'Perche il gemello viaggiatore invecchia meno?',
    answer: 'Nella relativita ristretta, il tempo proprio trascorso dipende dal percorso attraverso lo spaziotempo. Un orologio che si muove a velocita v rispetto a un osservatore inerziale ticchetta piu lentamente secondo il fattore di Lorentz gamma. Il viaggiatore accumula meno tempo proprio lungo le tratte di andata e ritorno rispetto al gemello rimasto sulla Terra.',
  },
  {
    question: 'E l accelerazione a causare la differenza di eta?',
    answer: 'L accelerazione e importante perche permette al viaggiatore di invertire la direzione e riunirsi alla Terra, ma la differenza di eta viene calcolata dall intero percorso spaziotemporale, non solo dall accelerazione. Anche se l inversione fosse molto breve, il percorso del viaggiatore conterrebbe comunque meno tempo proprio rispetto al percorso terrestre.',
  },
  {
    question: 'Cosa significa il fattore di Lorentz gamma?',
    answer: 'Il fattore di Lorentz gamma e uguale a 1 diviso per la radice quadrata di 1 meno v al quadrato fratto c al quadrato. Indica quanto fortemente intervalli di tempo, lunghezze ed energie differiscono tra sistemi inerziali. Alle velocita quotidiane gamma e quasi 1, ma vicino alla velocita della luce aumenta bruscamente.',
  },
  {
    question: 'Questo effetto puo essere misurato nella vita reale?',
    answer: 'Sì. La dilatazione del tempo e stata misurata con particelle veloci, orologi atomici trasportati su aerei, sistemi di sincronizzazione satellitare e acceleratori di particelle. Il paradosso dei gemelli usa una storia di viaggio estrema, ma l effetto orologio sottostante e una parte regolarmente verificata della fisica moderna.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Visualizzazione spaziotemporale del paradosso dei gemelli',
    controlsTitle: 'Controlli del paradosso dei gemelli',
    worldlineLabel: 'Diagramma della linea d universo per il gemello terrestre e il gemello viaggiatore',
    earthTwin: 'Eta del gemello terrestre',
    travelingTwin: 'Eta del viaggiatore',
    presetCruise: 'Crociera',
    presetRelativistic: 'Relativistico',
    presetExtreme: 'Estremo',
    velocityLabel: 'Velocita della nave',
    earthYearsLabel: 'Tempo trascorso sulla Terra',
    ageGapLabel: 'Differenza di eta al ricongiungimento',
    gammaLabel: 'Fattore di Lorentz',
    shipTimeLabel: 'Tempo proprio del viaggiatore',
    distanceLabel: 'Distanza di inversione',
    yearsUnit: 'anni',
    yearsShortUnit: 'anni',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolatore del Paradosso dei Gemelli per la Relativita Ristretta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il visualizzatore del paradosso dei gemelli trasforma una delle idee piu famose della relativita ristretta in un diagramma spaziotemporale interattivo. Imposta la velocita di una navicella come frazione della velocita della luce, scegli quanti anni passano sulla Terra, e il calcolatore calcola il fattore di Lorentz, il tempo proprio del viaggiatore, la differenza di eta al ricongiungimento e la distanza di andata fino al punto di inversione. La disposizione visiva separa l orologio terrestre dall orologio della navicella in modo che l asimmetria sia visibile invece di essere nascosta dentro le formule.',
    },
    {
      type: 'title',
      text: 'Come funziona il calcolo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La quantita centrale e il fattore di Lorentz: gamma = 1 / sqrt(1 - v^2 / c^2). Per un semplice viaggio di andata e ritorno con velocita di crociera costante, il tempo vissuto dal viaggiatore e la durata della missione nel sistema Terra divisa per gamma. La differenza tra queste due durate e la differenza di eta quando i gemelli si riuniscono. Lo strumento mostra anche la distanza di inversione nel sistema Terra, che e la meta del tempo totale terrestre moltiplicata per la velocita della nave in anni luce per anno.',
    },
    {
      type: 'table',
      headers: ['Velocita', 'Fattore di Lorentz', 'Ritmo dell Orologio del Viaggiatore', 'Significato Fisico'],
      rows: [
        ['0.50c', '1.155', '86.6% del ritmo terrestre', 'Un effetto relativistico notevole ma moderato.'],
        ['0.86c', '1.960', '51.0% del ritmo terrestre', 'Il viaggiatore invecchia circa la meta piu lentamente durante la crociera.'],
        ['0.98c', '5.025', '19.9% del ritmo terrestre', 'La dilatazione temporale estrema domina l esito della missione.'],
      ],
    },
    {
      type: 'title',
      text: 'Perche la situazione non e simmetrica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A prima vista ogni gemello puo dire che l altro si muove, il che rende il risultato apparentemente contraddittorio. La risoluzione e che il gemello terrestre rimane approssimativamente in un sistema inerziale, mentre il gemello viaggiatore parte, inverte la direzione e ritorna. Quel cambiamento di sistema inerziale da al viaggiatore un percorso diverso attraverso lo spaziotempo. La linea d universo disegnata da questo strumento si piega all evento di inversione, mentre la linea d universo del gemello terrestre rimane dritta.',
    },
    {
      type: 'title',
      text: 'Lettura del diagramma della linea d universo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una linea d universo e una mappa di un oggetto attraverso lo spaziotempo piuttosto che attraverso il solo spazio. In questo visualizzatore, la linea verticale della Terra rappresenta il gemello che resta a casa. Il percorso rosso inclinato rappresenta il viaggiatore che lascia la Terra e ritorna. L aumento della velocita fa inclinare il percorso del viaggiatore in modo piu drammatico e riduce la quantita di tempo proprio accumulata sull orologio della navicella.',
    },
    {
      type: 'list',
      items: [
        '<strong>Differenza di eta:</strong> quanto piu giovane e il viaggiatore al ricongiungimento.',
        '<strong>Fattore di Lorentz:</strong> il moltiplicatore che collega il tempo del sistema Terra al tempo proprio del viaggiatore.',
        '<strong>Tempo proprio del viaggiatore:</strong> il tempo effettivamente trascorso misurato da un orologio sulla navicella.',
        '<strong>Distanza di inversione:</strong> la distanza di andata nel sistema Terra prima che il viaggiatore inverta la rotta.',
      ],
    },
    {
      type: 'title',
      text: 'Prove pratiche della dilatazione del tempo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il paradosso dei gemelli e un esperimento mentale chiaro, ma la dilatazione del tempo non e speculativa. I muoni creati nell atmosfera superiore sopravvivono abbastanza a lungo da raggiungere il suolo perche i loro orologi in movimento sono dilatati dalla prospettiva terrestre. Gli esperimenti con orologi atomici su aerei e la navigazione satellitare di precisione richiedono anch essi correzioni relativistiche. La stessa matematica alla base di questo visualizzatore fa parte dell infrastruttura di temporizzazione utilizzata dai moderni sistemi GPS.',
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
