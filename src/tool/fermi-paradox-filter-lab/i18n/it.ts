const description = 'Modella il paradosso di Fermi con i parametri dell\'equazione di Drake, filtri evolutivi, durata del segnale e una proiezione temporale delle civiltà rilevabili della Via Lattea.';
const slug = 'laboratorio-filtro-paradosso-fermi';
const title = 'Laboratorio Filtro del Paradosso di Fermi';

const howTo = [
  {
    name: 'Stimare la pipeline di Drake',
    text: 'Regola i cursori di formazione stellare, pianeta abitabile, vita, intelligenza e tecnologia per definire con quale frequenza la Via Lattea produce civiltà rilevabili.',
  },
  {
    name: 'Impostare l\'intensità del filtro',
    text: 'Aumenta il filtro evolutivo per simulare collasso, autodistruzione, instabilità ecologica o colli di bottiglia tecnologici che eliminano le civiltà più rapidamente.',
  },
  {
    name: 'Confrontare la durata del segnale con l\'orizzonte',
    text: 'Usa la durata del segnale e l\'orizzonte di proiezione insieme. Una durata breve può rendere una galassia silenziosa anche quando le civiltà nascono regolarmente.',
  },
  {
    name: 'Leggere la curva temporale',
    text: 'Il grafico mostra le civiltà rilevabili nel tempo, rendendo visibili la coesistenza e l\'estinzione invece di ridurre il paradosso di Fermi a un singolo numero.',
  },
];

const faq = [
  {
    question: 'Cosa calcola questo simulatore del paradosso di Fermi?',
    answer: 'Combina i termini dell\'equazione di Drake con un filtro di sopravvivenza e un orizzonte temporale per stimare quante civiltà tecnologiche potrebbero essere rilevabili contemporaneamente nella Via Lattea.',
  },
  {
    question: 'È una previsione di civiltà aliene reali?',
    answer: 'No. È un modello esplorativo. Il valore sta nel vedere come interagiscono le ipotesi: una galassia può produrre molte civiltà nel corso della storia eppure averne pochissime che si sovrappongono a noi.',
  },
  {
    question: 'Cos\'è il Grande Filtro?',
    answer: 'Il Grande Filtro è l\'idea che uno o più passaggi tra la chimica semplice e una civiltà tecnologica longeva siano estremamente improbabili o pericolosi.',
  },
  {
    question: 'Perché la durata del segnale è così importante?',
    answer: 'La rilevabilità dipende dalla sovrapposizione. Una civiltà che trasmette solo per pochi secoli può essere reale ma invisibile a un\'altra civiltà che osserva in un\'epoca diversa.',
  },
  {
    question: 'Come dovrei scegliere le frazioni di vita e intelligenza?',
    answer: 'Usa valori bassi per uno scenario pessimistico di vita rara e valori più alti quando esplori la possibilità che la biologia o l\'intelligenza emergano spesso su mondi abitabili stabili.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Proiezione delle civiltà rilevabili nel tempo',
    metricsLabel: 'Metriche del modello di Fermi',
    controlsLabel: 'Controlli del modello di Fermi',
    birthRate: 'Tasso di nascita',
    peakCivilizations: 'Picco di civiltà',
    finalCivilizations: 'Civiltà finali',
    silenceScore: 'Punteggio di silenzio',
    starFormationRate: 'Tasso di formazione stellare',
    habitableFraction: 'Frazione di pianeti abitabili',
    lifeFraction: 'Frazione di emergenza della vita',
    intelligenceFraction: 'Frazione di intelligenza',
    technologyFraction: 'Frazione tecnologica',
    signalLifetime: 'Durata del segnale',
    filterSeverity: 'Severità del filtro',
    horizonYears: 'Orizzonte di proiezione',
    maxLabel: 'max',
    yearUnit: 'a',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'Un simulatore pratico del paradosso di Fermi per le ipotesi dell\'equazione di Drake',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il paradosso di Fermi chiede perché il cielo notturno appaia silenzioso se la Via Lattea contiene centinaia di miliardi di stelle e molti pianeti. Questo strumento trasforma quella domanda in un modello interattivo combinando l\'equazione di Drake con filtri evolutivi e una proiezione temporale delle civiltà rilevabili.',
    },
    {
      type: 'paragraph',
      html: 'Invece di fornire una singola stima statica, il simulatore mostra come le civiltà possano nascere, diventare rilevabili e scomparire prima che un\'altra società abbia la possibilità di sentirle. Quel problema temporale è centrale per SETI perché due culture tecnologiche devono sovrapporsi nello spazio, nel tempo e nel comportamento del segnale.',
    },
    {
      type: 'title',
      text: 'Come il modello usa i parametri dell\'equazione di Drake',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I primi controlli rappresentano una pipeline di Drake semplificata. La formazione stellare fornisce nuovi sistemi stellari. Una frazione di questi sistemi forma pianeti abitabili, una frazione dei pianeti abitabili sviluppa vita, una frazione dei mondi viventi produce intelligenza e una frazione delle specie intelligenti diventa rilevabile attraverso la tecnologia.',
    },
    {
      type: 'table',
      headers: ['Controllo', 'Significato', 'Effetto'],
      rows: [
        ['Tasso di formazione stellare', 'Nuove stelle all\'anno nella Via Lattea', 'Alza o abbassa la quantità grezza di sistemi possibili'],
        ['Frazione di pianeti abitabili', 'Percentuale di sistemi con mondi stabili dove la chimica dell\'acqua liquida potrebbe persistere', 'Controlla quanta parte della galassia entra nella pipeline biologica'],
        ['Frazione di emergenza della vita', 'Probabilità che la vita semplice inizi su un mondo abitabile', 'Verifica le ipotesi di vita rara rispetto a vita comune'],
        ['Frazione di intelligenza', 'Probabilità che la vita evolva cognizione capace di tecnologia', 'Rappresenta i colli di bottiglia biologici ed ecologici'],
        ['Frazione tecnologica', 'Probabilità che l\'intelligenza produca segnali rilevabili', 'Cattura le scelte culturali, ingegneristiche e comunicative'],
      ],
    },
    {
      type: 'title',
      text: 'Perché i filtri possono far sembrare vuota una galassia affollata',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il cursore della severità del filtro comprime molti possibili punti di fallimento in un\'unica pressione di sopravvivenza: impatti di asteroidi, climi instabili, autodistruzione, collasso delle risorse, rischio dell\'intelligenza artificiale o qualsiasi altro collo di bottiglia che accorci la fase rilevabile. Un filtro forte non significa che le civiltà non sorgano mai. Significa che raramente rimangono visibili a lungo.',
    },
    {
      type: 'paragraph',
      html: 'Questa distinzione è importante. La Via Lattea potrebbe aver prodotto migliaia di specie tecnologiche nel corso del tempo profondo, lasciando quasi nessun vicino attivo durante la nostra ristretta finestra di ascolto. Il grafico rende visibile questa differenza tracciando le civiltà rilevabili attraverso l\'orizzonte di proiezione selezionato.',
    },
    {
      type: 'title',
      text: 'Interpretare il punteggio di silenzio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il punteggio di silenzio aumenta quando il numero finale di civiltà rilevabili sovrapposte è basso. Un silenzio elevato non prova che gli umani siano soli; mostra che le ipotesi scelte rendono la non-rilevazione poco sorprendente. Un silenzio basso significa che il modello si aspetta una galassia più rumorosa, quindi l\'assenza di prove diventa più interessante.',
    },
    {
      type: 'list',
      items: [
        '<strong>Alto tasso di nascita più filtro basso:</strong> una galassia affollata dove il silenzio di SETI è più difficile da spiegare.',
        '<strong>Alto tasso di nascita più filtro alto:</strong> molte civiltà appaiono, ma poche sopravvivono abbastanza a lungo per sovrapporsi.',
        '<strong>Frazioni biologiche basse:</strong> la vita o l\'intelligenza sono rare, quindi il silenzio può emergere prima ancora che la tecnologia conti.',
        '<strong>Durata del segnale breve:</strong> le civiltà possono esistere ma trasmettere troppo brevemente perché il contatto sia probabile.',
      ],
    },
    {
      type: 'title',
      text: 'Casi d\'uso per didattica, dibattito e intuizione SETI',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il Laboratorio Filtro del Paradosso di Fermi è utile in lezioni di astronomia, discussioni di astrobiologia, comunicazione scientifica e dibattiti filosofici sul futuro dell\'umanità. Aiuta a separare tre domande spesso mescolate: con quale frequenza nascono le civiltà, quanto rimangono rilevabili e se le loro tempistiche si sovrappongono alle nostre.',
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
