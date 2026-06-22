import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-frattale-mandelbrot';
const title = 'Simulatore di Frattale di Mandelbrot ed Esploratore di Autosimilarità';
const description = 'Esplora l\'insieme di Mandelbrot, ingrandisci i confini frattali autosimilari e confronta la profondità di iterazione, il contrasto cromatico e le coordinate del piano complesso.';

const howTo = [
  {
    name: 'Scegli una regione dell\'insieme di Mandelbrot',
    text: 'Inizia dall\'insieme completo o salta direttamente a una regione ad alto dettaglio, come la valle del cavalluccio marino o un minibrot a spirale.',
  },
  {
    name: 'Ingrandisci cliccando sull\'immagine',
    text: 'Clicca un punto qualsiasi sulla tela per ri-centrare il piano complesso e ingrandire il frattale attorno a quella coordinata.',
  },
  {
    name: 'Regola la profondità di iterazione e il contrasto cromatico',
    text: 'Aumenta il budget di iterazioni per rivelare una struttura di confine più fine, poi regola contrasto e tavolozza per rendere le bande di tempo di fuga più facili da leggere.',
  },
];

const faq = [
  {
    question: 'Cosa mostra il simulatore dell\'insieme di Mandelbrot?',
    answer: 'Mostra quali numeri complessi c mantengono limitata la ricorrenza z(n+1) = z(n)^2 + c partendo da z = 0. I punti che non sfuggono mai entro il budget di iterazione selezionato vengono colorati come membri dell\'insieme, mentre i punti esterni vengono colorati in base alla velocità con cui la loro orbita fuoriesce.',
  },
  {
    question: 'Perché il bordo di Mandelbrot contiene così tanti dettagli?',
    answer: 'Il bordo separa le orbite stabili da quelle in fuga, e minuscole variazioni di coordinate vicino a quel bordo possono cambiare completamente il comportamento a lungo termine. Questa sensibilità crea bulbi annidati, spirali, filamenti e copie in miniatura che appaiono a molti livelli di ingrandimento.',
  },
  {
    question: 'L\'insieme di Mandelbrot è veramente autosimilare?',
    answer: 'Non è perfettamente autosimilare nello stesso senso stretto di un triangolo di Sierpinski, ma è riccamente quasi-autosimilare. Piccole copie dell\'intero insieme appaiono in tutto il piano complesso, spesso distorte e collegate da elaborate strutture ramificate.',
  },
  {
    question: 'Cosa controlla il numero di iterazioni?',
    answer: 'Il numero di iterazioni controlla per quanto tempo il simulatore testa ogni punto prima di decidere che probabilmente appartiene all\'insieme. Valori più alti rivelano filamenti più profondi e minibrot più nitidi, ma richiedono più calcolo per pixel.',
  },
  {
    question: 'Perché i colori cambiano all\'esterno della regione nera?',
    answer: 'I colori esterni si basano sul tempo di fuga: i punti che fuggono rapidamente ricevono colori diversi dai punti che restano vicini all\'insieme per molte iterazioni. La colorazione uniforme riduce le bande nette e facilita l\'ispezione della geometria delle orbite vicine.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Simulatore Frattale di Mandelbrot',
    canvasLabel: 'Tela interattiva dell\'insieme di Mandelbrot',
    presetsLabel: 'Preimpostazioni delle regioni di Mandelbrot',
    presetFull: 'Insieme Completo',
    presetSeahorse: 'Valle del Cavalluccio Marino',
    presetSpiral: 'Minibrot a Spirale',
    centerPoint: 'Centro',
    magnification: 'Ingrandimento',
    visibleWindow: 'Finestra visibile',
    renderBudget: 'Iterazioni',
    iterationsLabel: 'Profondità di iterazione',
    contrastLabel: 'Contrasto di fuga',
    colorLabel: 'Campo colore',
    paletteEmber: 'Bande di brace',
    paletteLagoon: 'Plasma laguna',
    paletteInk: 'Spettro d\'inchiostro',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore dell\'Insieme di Mandelbrot per Frattali, Tempo di Fuga e Autosimilarità',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore frattale di Mandelbrot renderizza il classico insieme del piano complesso definito dall\'iterazione <strong>z(n+1) = z(n)^2 + c</strong>. È progettato per l\'esplorazione piuttosto che per la visione passiva: ogni clic ri-centra il piano, ogni ingrandimento espone un intorno matematico più piccolo, e il cursore di iterazione permette di decidere quanto a fondo il simulatore deve testare il bordo prima di colorare un punto come stabile o in fuga.',
    },
    {
      type: 'title',
      text: 'Come leggere l\'immagine di Mandelbrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La forma centrale scura segna i punti le cui orbite rimangono limitate entro il budget di iterazione corrente. L\'esterno colorato è una mappa del tempo di fuga. Un punto colorato vicino all\'insieme può sopravvivere centinaia di iterazioni prima che la sua magnitudine superi il raggio di fuga, mentre un punto lontano fugge quasi immediatamente. La geometria scientificamente più interessante non si trova solitamente all\'interno della forma piena, ma lungo il bordo dove i comportamenti limitati e illimitati si intrecciano.',
    },
    {
      type: 'table',
      headers: ['Controllo', 'Cosa modifica', 'Quando aumentarlo'],
      rows: [
        ['<strong>Profondità di iterazione</strong>', 'Quanti passi di ricorrenza vengono testati per ogni pixel.', 'Usa valori più alti dopo aver ingrandito filamenti sottili o copie in miniatura.'],
        ['<strong>Contrasto di fuga</strong>', 'Quanto fortemente i valori di fuga uniformi vengono separati in bande visibili.', 'Alzalo quando l\'immagine appare piatta; abbassalo quando i colori sono troppo marcati.'],
        ['<strong>Tavolozza</strong>', 'La mappatura dei colori applicata ai punti esterni.', 'Cambia tavolozza per rivelare strutture che potrebbero essere nascoste da un campo colore.'],
      ],
    },
    {
      type: 'title',
      text: 'Autosimilarità e Minibrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una delle ragioni per cui l\'insieme di Mandelbrot è così famoso è la sua quasi-autosimilarità. Mentre si ingrandiscono antenne, spirali e valli, si incontrano ripetutamente piccole isole simili a Mandelbrot spesso chiamate <em>minibrot</em>. Queste copie non sono meramente decorative. La loro disposizione riflette la dinamica delle mappe quadratiche, inclusi bulbi periodici, pattern di biforcazione e regioni dove le orbite rimangono intrappolate per lunghi periodi prima di fuggire.',
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