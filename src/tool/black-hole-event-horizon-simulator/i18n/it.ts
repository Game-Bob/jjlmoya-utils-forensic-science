import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-orizzonte-eventi';
const title = 'Simulatore dell\'Orizzonte degli Eventi di un Buco Nero';
const description = 'Esplora l\'orizzonte degli eventi di un buco nero con calcoli interattivi: massa, distanza orbitale, dilatazione temporale, sfera dei fotoni, velocità di fuga e raggio di Schwarzschild.';

const howTo = [
  {
    name: 'Scegli la massa del buco nero',
    text: 'Muovi il cursore della massa da un buco nero stellare a uno supermassiccio e osserva il raggio di Schwarzschild scalare in tempo reale.',
  },
  {
    name: 'Avvicina la sonda all\'orizzonte',
    text: 'Imposta la distanza in raggi di Schwarzschild per confrontare un\'orbita esterna sicura, la regione della sfera dei fotoni e il bordo dell\'orizzonte degli eventi.',
  },
  {
    name: 'Ispeziona gli effetti relativistici',
    text: 'Leggi la velocità di fuga, la dilatazione gravitazionale del tempo, il redshift e il periodo orbitale per capire perché l\'intuizione ordinaria viene meno vicino all\'orizzonte.',
  },
  {
    name: 'Confronta i raggi caratteristici',
    text: 'Usa gli anelli guida dell\'orizzonte degli eventi, della sfera dei fotoni e dell\'ISCO per comprendere i diversi confini attorno a un buco nero senza rotazione.',
  },
];

const faq = [
  {
    question: 'Cos\'è l\'orizzonte degli eventi di un buco nero?',
    answer: 'L\'orizzonte degli eventi è il confine dove la velocità di fuga raggiunge la velocità della luce. Una volta che un oggetto lo attraversa, nessun segnale che si muova alla velocità della luce o inferiore può tornare all\'universo esterno.',
  },
  {
    question: 'Cosa significa il raggio di Schwarzschild?',
    answer: 'Il raggio di Schwarzschild è il raggio dell\'orizzonte degli eventi per un buco nero senza rotazione né carica elettrica. Cresce linearmente con la massa, quindi raddoppiare la massa raddoppia il raggio dell\'orizzonte.',
  },
  {
    question: 'Cos\'è la sfera dei fotoni?',
    answer: 'La sfera dei fotoni è una regione a 1,5 raggi di Schwarzschild dove la luce può orbitare attorno al buco nero in un percorso instabile. Piccole perturbazioni fanno sì che i fotoni fuggano verso l\'esterno o cadano verso l\'interno.',
  },
  {
    question: 'Cos\'è l\'ISCO?',
    answer: 'ISCO significa "Innermost Stable Circular Orbit" (orbita circolare stabile più interna). Per un buco nero senza rotazione si trova a 3 raggi di Schwarzschild, o 6 raggi gravitazionali, e segna l\'ultima orbita circolare stabile per particelle dotate di massa.',
  },
  {
    question: 'Perché la dilatazione temporale aumenta vicino all\'orizzonte?',
    answer: 'Nella geometria di Schwarzschild, gli orologi situati più in profondità nel campo gravitazionale segnano il tempo più lentamente rispetto a quelli di osservatori lontani. Il fattore visualizzato si avvicina a zero man mano che la sonda si avvicina all\'orizzonte degli eventi.',
  },
  {
    question: 'Questo simulatore può modellare un buco nero in rotazione?',
    answer: 'No. Utilizza la soluzione di Schwarzschild, che assume l\'assenza di rotazione e carica elettrica. I buchi neri astrofisici reali spesso ruotano, e la rotazione modifica la dimensione dell\'orizzonte, la posizione dell\'ISCO e il comportamento del disco d\'accrescimento.',
  },
  {
    question: 'Perché i buchi neri supermassicci sono meno "violenti" all\'orizzonte?',
    answer: 'Il gradiente di marea all\'orizzonte diminuisce all\'aumentare della massa del buco nero. Un piccolo buco nero stellare può stirare gli oggetti violentemente vicino all\'orizzonte, mentre un buco nero supermassiccio può avere un gradiente locale molto più dolce a quel confine.',
  },
  {
    question: 'La visualizzazione mostra un\'immagine reale di un buco nero?',
    answer: 'È un diagramma educativo, non un\'osservazione con ray tracing. Gli anelli e il disco sono scalati ai raggi di Schwarzschild semplificati affinché le zone fisiche siano facili da confrontare.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Mappa di campo dell\'orizzonte degli eventi',
    visualCaption: 'La sonda si muove attraverso la geometria di Schwarzschild scalata. Gli anelli guida luminosi marcano l\'orizzonte, la sfera dei fotoni e l\'orbita circolare stabile più interna.',
    controlsTitle: 'Controlli del buco nero',
    eventHorizon: 'Orizzonte degli eventi',
    photonSphere: 'Sfera dei fotoni',
    isco: 'ISCO',
    rsLabel: 'Raggio di Schwarzschild',
    diameterLabel: 'Diametro',
    timeLabel: 'Dilatazione temporale',
    redshiftLabel: 'Redshift',
    statusSafe: 'Fuori dalla regione di orbita stabile',
    statusPhoton: 'All\'interno della zona della sfera dei fotoni',
    statusInside: 'Al limite dell\'orizzonte',
    diameter: 'Diametro dell\'orizzonte',
    lightCrossing: 'Tempo di attraversamento della luce',
    timeDilation: 'Ritmo dell\'orologio vs osservatore lontano',
    redshift: 'Redshift gravitazionale',
    mass: 'Massa del buco nero',
    distance: 'Distanza della sonda',
    speed: 'Velocità orbitale della sonda',
    escapeVelocity: 'Velocità di fuga',
    orbitalPeriod: 'Periodo orbitale della sonda',
    tidalGradient: 'Gradiente di marea',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'masse solari',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 masse solari',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore dell\'orizzonte degli eventi: raggio di Schwarzschild, sfera dei fotoni e dilatazione temporale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore trasforma le idee fondamentali dei buchi neri di Schwarzschild in un modello visivo interattivo. Cambia la massa, sposta una sonda e confronta come reagiscono l\'orizzonte degli eventi, la sfera dei fotoni, l\'ISCO, la velocità di fuga, il redshift gravitazionale e la dilatazione temporale.',
    },
    {
      type: 'paragraph',
      html: 'Il simulatore è progettato per studenti, insegnanti e curiosi che cercano più di una semplice formula statica. Il display collega i dati numerici a un diagramma spaziale per illustrare perché l\'orizzonte non è una superficie materiale, perché i fotoni hanno un\'orbita instabile particolare e perché il moto circolare stabile si arresta prima dell\'orizzonte.',
    },
    {
      type: 'title',
      text: 'Come viene calcolato il raggio dell\'orizzonte degli eventi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per un buco nero senza rotazione né carica, il raggio dell\'orizzonte è il <strong>raggio di Schwarzschild</strong>. Si calcola come <strong>Rs = 2GM / c^2</strong>, dove G è la costante gravitazionale, M la massa del buco nero e c la velocità della luce. Una massa solare corrisponde a un raggio di circa 2,95 km.',
    },
    {
      type: 'paragraph',
      html: 'Poiché il raggio di Schwarzschild scala linearmente con la massa, un buco nero di 10 masse solari ha un raggio vicino a 29,5 km, mentre un buco nero supermassiccio come Sagittarius A* (4 milioni di masse solari) ha un raggio di circa 11,8 milioni di chilometri. Il cursore usa una scala logaritmica per coprire entrambi gli ordini di grandezza.',
    },
    {
      type: 'table',
      headers: ['Regione', 'Raggio (in Rs)', 'Significato'],
      rows: [
        ['Orizzonte degli eventi', '1.0 Rs', 'Confine unidirezionale dove la velocità di fuga eguaglia quella della luce.'],
        ['Sfera dei fotoni', '1.5 Rs', 'Orbite circolari instabili per la luce.'],
        ['ISCO', '3.0 Rs', 'Orbite circolari stabili più interne per particelle con massa.'],
        ['Campo debole', '6 Rs e oltre', 'La gravità resta forte, ma le orbite circolari sono più facili da sostenere.'],
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