const description = 'Simula gli impatti di asteroidi con fisica reale. Calcola energia, cratere, radiazione termica e onda d\'urto. Sopravviveresti a Chicxulub?';
const title = 'Simulatore di Impatto di Asteroidi: Calcolatore dell\'Apocalisse';
const slug = 'simulatore-impatto-asteroide';
const howTo = [
    {
      name: 'Scegli la dimensione del proiettile',
      text: 'Inserisci il diametro dell\'asteroide, da un piccolo meteorite di 10 metri a un killer di pianeti di 10 chilometri.',
    },
    {
      name: 'Configura velocità e angolo',
      text: 'Regola la velocità di avvicinamento e l\'angolo di ingresso (45° è il valore statisticamente più probabile).',
    },
    {
      name: 'Definisci la natura dell\'asteroide',
      text: 'Seleziona se l\'asteroide è fatto di roccia, ferro o ghiaccio per calcolare correttamente la profondità del cratere.',
    },
    {
      name: 'Analizza il verdetto di sopravvivenza',
      text: 'Trascina l\'asteroide sulla mappa e indica a che distanza ti trovi per vedere gli effetti di radiazione, terremoto e onda d\'urto.',
    },
  ];
const faq = [
    {
      question: 'Come viene calcolata l\'energia dell\'impatto?',
      answer: 'L\'energia primaria è cinetica: (1/2) * massa * velocità². Utilizziamo densità realistiche (es. 3000 kg/m³ per gli asteroidi rocciosi) e velocità tipiche di ingresso nell\'atmosfera (da 11 a 72 km/s). L\'energia risultante è misurata in megatoni di tritolo.',
    },
    {
      question: 'Cos\'è un\'onda d\'urto termica?',
      answer: 'Entrando nell\'atmosfera, l\'asteroide comprime l\'aria così violentemente da creare una palla di fuoco mille volte più luminosa del Sole. La radiazione termica risultante può causare ustioni di terzo grado e incendiare foreste a chilometri di distanza dall\'impatto.',
    },
    {
      question: 'Perché alcuni asteroidi non creano crateri?',
      answer: 'Le rocce più piccole (<50m) solitamente si frammentano ed esplodono nell\'atmosfera a causa della pressione dell\'aria (Airburst), come è successo a Chelyabinsk. L\'energia viene rilasciata come una potente onda d\'urto di pressione, ma non colpisce il suolo come un corpo solido.',
    },
    {
      question: 'Qual è la reale probabilità di un impatto?',
      answer: 'Piccoli impatti (come quello in Russia nel 2013) accadono ogni decennio. Impatti catastrofici (stile Tunguska) ogni pochi secoli. Un evento di estinzione globale come Chicxulub accade approssimativamente ogni 100 milioni di anni.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copiato',
    noHistory: 'Nessuna cronologia',
    load: 'Carica',
    delete: 'Elimina',
    activateGPS: 'Attiva GPS',
    analysisLabel: 'Analisi',
    dragToMap: 'TRASCINA SULLA MAPPA',
    diameterLabel: 'Diametro',
    velocityLabel: 'Velocità',
    typeLabel: 'Tipo',
    historicalData: 'Dati Storici',
    composition: 'Composizione',
    rock: 'Roccia',
    iron: 'Ferro',
    ice: 'Ghiaccio',
    clearAll: 'Cancella tutto',
    searching: 'Ricerca in corso...',
    gpsActive: 'GPS Attivo',
    gpsError: 'Errore GPS',
    verdictSafe: 'ZONA SICURA',
    verdictSafeSub: 'Nessuna minaccia',
    verdictShock: 'ONDA D\'URTO',
    verdictShockSub: 'Danni strutturali',
    verdictBurned: 'RADIAZIONE TERMICA',
    verdictBurnedSub: 'Pericolo estremo',
    verdictVaporized: 'GROUND ZERO',
    verdictVaporizedSub: 'Impatto diretto',
    presetAerial: 'Aereo',
    presetForest: 'Foresta',
    presetComet: 'Cometa',
    presetELE: 'E.L.E.',
  },
  seo: [
    {
      type: 'title',
      text: 'Quando il Cielo Cade: La Fisica dell\'Apocalisse Cosmica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gli asteroidi non sono solo rocce spaziali. Sono proiettili cosmici che viaggiano a 20 km/s, capaci di rilasciare più energia di tutte le armi nucleari del pianeta messe insieme. Questo simulatore traduce la fisica astratta in conseguenze umane tangibili.',
    },
    {
      type: 'title',
      text: 'L\'Equazione del Giorno del Giudizio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tutto inizia con l\'energia cinetica: <strong>E = ½mv²</strong>. Un asteroide di 100 metri che viaggia a 20 km/s rilascia circa 0,5 megatoni di tritolo. Per contestualizzare, la bomba di Hiroshima era di 0,015 megatoni.',
    },
    {
      type: 'paragraph',
      html: 'Ma la dimensione scala in modo esponenziale. Un oggetto 10 volte più grande ha un volume (e una massa) 1.000 volte superiore, rilasciando l\'energia equivalente a <strong>500 megatoni</strong>. Chicxulub, il killer dei dinosauri, ha rilasciato l\'equivalente di <strong>100 milioni di megatoni</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Un asteroide di 1 km che colpisse la Terra rilascerebbe più energia di tutte le armi nucleari del pianeta fatte esplodere simultaneamente.',
    },
    {
      type: 'title',
      text: 'Anatomia della Distruzione: Livelli Concentrici di Apocalisse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Il Cratere (Ground Zero):</strong> Il diametro del cratere scala con E^0,3. Un impatto da 1 megatone crea un cratere di circa 1 km. Tutto ciò che si trova all\'interno viene istantaneamente vaporizzato.',
        '<strong>Radiazione Termica (Il Flash):</strong> La palla di fuoco emette intense radiazioni infrarosse. A distanze di E^0,41 km, gli indumenti prendono fuoco e la pelle subisce ustioni di terzo grado.',
        '<strong>Onda d\'Urto (Il Martello):</strong> L\'onda di sovrapressione viaggia a velocità supersonica. A 1 psi, il vetro si frantuma. A 5 psi, gli edifici crollano.',
        '<strong>Terremoto (L\'Eco Sismica):</strong> L\'impatto genera onde sismiche globali. Chicxulub causò un terremoto di magnitudo 11, rompendo la scala Richter.',
      ],
    },
    {
      type: 'title',
      text: 'Impatti Storici: Lezioni dal Passato',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Luogo e Anno', 'Dimensione', 'Energia', 'Effetti'],
      rows: [
        ['Chelyabinsk, Russia (2013)', '20 metri', '500 kilotoni', 'Onda d\'urto a 100 km, 1.500 feriti, finestre rotte'],
        ['Tunguska, Siberia (1908)', '50-60 metri', '10-15 megatoni', '2.000 km² di foresta rasa al suolo, 80 milioni di alberi abbattuti'],
        ['Chicxulub, Golfo del Messico (66 M di anni fa)', '10 km', '100 milioni di megatoni', 'Estinzione del 75% della vita sulla Terra'],
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


