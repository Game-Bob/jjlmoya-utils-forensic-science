import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-problema-tre-corpi';
const title = 'Simulatore del Problema dei Tre Corpi';
const description = 'Simula tre corpi gravitazionali in un piano bidimensionale con masse modificabili, vettori di velocità, scie e preset stabili o caotici.';

const howTo = [
  {
    name: 'Scegli un preset orbitale',
    text: 'Inizia con l\'orbita a figura otto per un riferimento stabile, il triangolo di Lagrange per un equilibrio rotante o il preset di fionda per un incontro visibilmente caotico.',
  },
  {
    name: 'Regola masse e vettori di velocità',
    text: 'Usa i cursori per ogni corpo per modificare la massa e le componenti iniziali della velocità. Piccoli cambiamenti possono preservare uno schema, deformarlo o distruggerlo completamente.',
  },
  {
    name: 'Leggi i diagnostici',
    text: 'Osserva l\'energia totale, la separazione minima e massima e il centro di massa per capire se l\'orbita numerica rimane limitata o si sta disgregando.',
  },
];

const faq = [
  {
    question: 'Cos\'è il problema dei tre corpi?',
    answer: 'Il problema dei tre corpi chiede come si muovono tre masse quando ciascun corpo attrae gravitazionalmente gli altri due. A differenza del problema dei due corpi, non esiste un\'equazione generale in forma chiusa che risolva ogni possibile configurazione, quindi la maggior parte dei casi pratici viene esplorata con integrazione numerica.',
  },
  {
    question: 'Perché le orbite a tre corpi sono instabili?',
    answer: 'Molti sistemi a tre corpi sono sensibili alle condizioni iniziali. Un minuscolo cambiamento di velocità, posizione o massa altera la tempistica degli incontri ravvicinati, e questi incontri possono scambiare energia in modo drammatico. Il risultato è un sistema che può rimanere limitato per un po\' e poi espellere improvvisamente un corpo.',
  },
  {
    question: 'Cosa mostra il preset a figura otto?',
    answer: 'Il preset a figura otto è una famosa soluzione periodica per tre masse uguali. Ogni corpo segue lo stesso percorso con uno sfasamento, dimostrando che il problema dei tre corpi può contenere eleganti isole stabili all\'interno di un paesaggio caotico molto più ampio.',
  },
  {
    question: 'Questo è un simulatore astronomico fisicamente esatto?',
    answer: 'Questo strumento utilizza un modello newtoniano smorzato e un passo di tipo Verlet di velocità simplettico in modo che il movimento sia fedele e stabile per l\'apprendimento. È progettato per l\'esplorazione interattiva piuttosto che per la previsione di effemeridi ad alta precisione.',
  },
  {
    question: 'Come dovrei interpretare l\'energia totale?',
    answer: 'L\'energia totale negativa di solito indica un sistema legato, mentre un\'energia vicina allo zero può facilitare la fuga. In una simulazione numerica, una grande deriva energetica avverte anche che il passo temporale o la geometria dell\'incontro stanno sollecitando l\'integratore.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Laboratorio di caos gravitazionale',
    canvasLabel: 'Tela interattiva bidimensionale per orbita a tre corpi',
    presetsLabel: 'Preset orbitali',
    figureEightPreset: 'Figura a otto',
    lagrangePreset: 'Triangolo di Lagrange',
    slingshotPreset: 'Fionda',
    pauseButton: 'Pausa',
    playButton: 'Riproduci',
    resetButton: 'Reimposta',
    speedLabel: 'Velocità di simulazione',
    trailLabel: 'Lunghezza scia',
    massLabel: 'Massa',
    velocityXLabel: 'Velocità X',
    velocityYLabel: 'Velocità Y',
    energyLabel: 'Energia totale',
    separationLabel: 'Intervallo di separazione',
    centerMassLabel: 'Centro di massa',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore interattivo del problema dei tre corpi per il caos orbitale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il problema dei tre corpi è una delle dimostrazioni più chiare che leggi semplici possano produrre moti complicati. La gravità newtoniana fornisce una regola di forza compatta, ma nel momento in cui un terzo corpo massivo si unisce al sistema, ogni orbita rimodella continuamente le altre due. Questo simulatore ti permette di sperimentare direttamente quell\'instabilità: scegli una configurazione nota, regola masse e vettori di velocità e osserva se i corpi formano un\'orbita ripetitiva, un triangolo rotante o un evento di dispersione caotica.',
    },
    {
      type: 'title',
      text: 'Cosa dimostrano i preset',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Preset', 'Idea fisica', 'Cosa osservare'],
      rows: [
        ['<strong>Figura a otto</strong>', 'Una soluzione periodica a masse uguali in cui tutti e tre i corpi condividono lo stesso anello.', 'L\'orbita rimane organizzata solo quando simmetria ed equilibrio di velocità sono accuratamente preservati.'],
        ['<strong>Triangolo di Lagrange</strong>', 'Tre corpi occupano un triangolo equilatero che ruota attorno al centro di massa.', 'L\'equilibrio delle masse e la velocità tangenziale impediscono al triangolo di collassare verso l\'interno.'],
        ['<strong>Fionda</strong>', 'Un incontro ravvicinato trasferisce energia tra i corpi.', 'Un corpo può guadagnare velocità mentre un altro diventa più strettamente legato, rivelando perché si verificano le espulsioni caotiche.'],
      ],
    },
    {
      type: 'title',
      text: 'Perché i piccoli cambiamenti contano',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In un\'orbita a due corpi, il centro di massa e l\'ellisse orbitale forniscono un\'immagine geometrica stabile. In un sistema a tre corpi, i passaggi ravvicinati agiscono come negoziazioni gravitazionali: un corpo può prendere in prestito energia orbitale, cambiare bruscamente direzione o convertire un anello ordinato in un evento di dispersione. Questa sensibilità è il motivo per cui i sistemi astrofisici reali come stelle triple, incontri pianeta-luna e planetesimi del primo sistema solare spesso richiedono integrazione numerica piuttosto che una singola formula semplice.',
    },
    {
      type: 'title',
      text: 'Come usare i diagnostici',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Energia totale</strong> ti aiuta a giudicare se il sistema è legato e se l\'integrazione numerica rimane stabile.',
        '<strong>Intervallo di separazione</strong> mostra le distanze di coppia più vicine e più lontane, rendendo facili da individuare quasi-collisioni ed espulsioni.',
        '<strong>Centro di massa</strong> dovrebbe rimanere relativamente stabile quando l\'impulso iniziale è bilanciato; una deriva suggerisce una configurazione intenzionalmente asimmetrica o un vettore di velocità modificato.',
        '<strong>Lunghezza scia</strong> rivela la struttura a lungo termine: scie corte enfatizzano l\'interazione attuale, mentre scie lunghe espongono anelli ripetitivi e lenta precessione orbitale.',
      ],
    },
    {
      type: 'title',
      text: 'Modello numerico usato nello strumento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il simulatore usa l\'attrazione newtoniana a quadrato inverso con un piccolo termine di softening che previene esplosioni visive durante passaggi estremamente ravvicinati. Il moto viene avanzato con un passo di tipo Verlet di velocità, una scelta comune per dimostrazioni orbitali perché gestisce il comportamento energetico meglio di un semplice aggiornamento di Eulero. Il risultato è un modello educativo reattivo che rende visibile il comportamento qualitativo del problema dei tre corpi senza pretendere di sostituire il software professionale di meccanica celeste.',
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
