import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-doppia-fenditura-decoerenza';
const title = 'Simulatore dell\'Esperimento della Doppia Fenditura e Decoerenza';
const description = 'Attiva e disattiva i rivelatori di percorso per vedere l\'interferenza quantistica dissolversi in due bande di particelle in un simulatore visivo a doppia fenditura.';

const howTo = [
  {
    name: 'Inizia con il rivelatore spento',
    text: 'Lascia il rivelatore di percorso disattivato e osserva lo schermo formare frange di interferenza chiare e scure dalle ampiezze di probabilità coerenti.',
  },
  {
    name: 'Aumenta l\'intensità del rivelatore',
    text: 'Alza il controllo del rivelatore per introdurre informazioni sul percorso. Più il rivelatore diventa forte, più la coerenza diminuisce e le frange scompaiono.',
  },
  {
    name: 'Modifica la geometria delle fenditure',
    text: 'Regola la separazione e la larghezza delle fenditure per vedere come la geometria cambia la spaziatura delle frange, la larghezza dell\'inviluppo e la distribuzione finale sullo schermo.',
  },
  {
    name: 'Leggi le metriche in tempo reale',
    text: 'Usa la visibilità delle frange, l\'informazione sul percorso e la coerenza per collegare il pattern visivo con la storia della misura quantistica.',
  },
];

const faq = [
  {
    question: 'Perché il pattern cambia quando i rivelatori vengono accesi?',
    answer: 'Un rivelatore che può rivelare quale fenditura ha usato la particella distrugge la relazione di fase tra le due alternative. Senza quella coerenza, i due percorsi di probabilità non interferiscono più e lo schermo si avvicina a due ampie bande di particelle.',
  },
  {
    question: 'Questo simulatore significa che la coscienza collassa la funzione d\'onda?',
    answer: 'No. Il simulatore si concentra sull\'informazione fisica del percorso e sulla decoerenza. Un rivelatore, l\'ambiente o qualsiasi interazione che renda il percorso distinguibile può sopprimere l\'interferenza senza richiedere un osservatore cosciente.',
  },
  {
    question: 'Cos\'è la visibilità delle frange?',
    answer: 'La visibilità delle frange confronta le regioni chiare e scure sullo schermo. Un\'alta visibilità significa un forte contrasto di interferenza. Una bassa visibilità significa che gli spazi scuri si sono riempiti e il pattern si comporta più come due flussi di particelle indipendenti.',
  },
  {
    question: 'È un risolutore completo di meccanica quantistica?',
    answer: 'No. È un modello didattico che combina un inviluppo di interferenza a doppia fenditura con un controllo di decoerenza. È progettato per spiegare visivamente l\'effetto di misura, non per sostituire una simulazione dell\'equazione di Schrödinger per un apparato reale.',
  },
  {
    question: 'Perché la separazione delle fenditure influisce sulla spaziatura delle frange?',
    answer: 'Una separazione maggiore crea una differenza di fase più rapida attraverso lo schermo, quindi le bande chiare e scure si avvicinano. Una separazione minore distribuisce le frange più distantemente.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Apparato a doppia fenditura',
    controls: 'Controlli della doppia fenditura',
    results: 'Risultati della doppia fenditura',
    kicker: 'Controllo di misura',
    detectorToggle: 'Attiva rivelatore di percorso',
    detectorStrength: 'Intensità del rivelatore',
    slitSeparation: 'Separazione delle fenditure',
    slitWidth: 'Larghezza della fenditura',
    unobserved: 'Non osservato',
    observed: 'Osservato',
    waveMode: 'Interferenza',
    particleMode: 'Bande di particelle',
    fringeVisibility: 'Visibilità delle frange',
    whichPath: 'Informazione di percorso',
    coherence: 'Coerenza',
    readoutNote: 'L\'interferenza sopravvive quando entrambi i percorsi rimangono indistinguibili. La misura rende disponibile l\'informazione di percorso e lo schermo perde le sue frange scure.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore dell\'esperimento della doppia fenditura con decoerenza e rivelazione di percorso',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore a doppia fenditura trasforma il classico esperimento quantistico in un modello visivo interattivo. Con il rivelatore spento, lo schermo mostra un pattern di interferenza: bande chiare e scure prodotte perché i due percorsi possibili rimangono coerenti. Quando si aggiunge un rivelatore di percorso, il pattern si trasforma gradualmente in due ampie bande di particelle perché le alternative di percorso diventano distinguibili.',
    },
    {
      type: 'paragraph',
      html: 'Lo strumento è progettato per studenti che cercano una spiegazione chiara del perché l\'osservazione cambi il risultato della doppia fenditura. Evita la vaga frase "l\'osservatore cambia la realtà" e si concentra sull\'idea fisicamente utile: l\'interferenza richiede alternative indistinguibili, mentre la misura e l\'entanglement ambientale rimuovono la relazione di fase necessaria per le frange.',
    },
    {
      type: 'title',
      text: 'Come leggere il simulatore',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Controllo o metrica', 'Cosa cambia', 'Cosa cercare'],
      rows: [
        ['Intensità del rivelatore', 'Quanta informazione di percorso è disponibile', 'Valori più alti riducono la visibilità delle frange e aumentano il pattern a due bande.'],
        ['Separazione delle fenditure', 'La distanza tra le due aperture', 'Una separazione maggiore rende le bande di interferenza più ravvicinate sullo schermo.'],
        ['Visibilità delle frange', 'Contrasto tra regioni chiare e scure', 'Un numero alto significa che l\'interferenza coerente è visibile.'],
        ['Coerenza', 'Relazione di fase tra i percorsi', 'La coerenza diminuisce man mano che il rivelatore rende i percorsi distinguibili.'],
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