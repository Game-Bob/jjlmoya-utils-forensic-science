import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'limite-di-roche-calcolatrice-disruzione-satellite';
const title = 'Calcolatrice del Limite di Roche e Simulatore di Disruzione di Satelliti';
const description = 'Calcola il limite di Roche per pianeti e lune, confronta le distanze di rottura fluida e rigida, e visualizza come le forze di marea trasformano un satellite in un sistema di anelli.';

const howTo = [
  {
    name: 'Scegli il corpo primario',
    text: 'Seleziona il pianeta la cui gravità sta stirando il satellite. La calcolatrice carica il suo raggio, densità e massa per le stime del limite di Roche e del periodo orbitale.',
  },
  {
    name: 'Seleziona il tipo di satellite',
    text: 'Scegli una luna ghiacciata, una luna rocciosa, un cumulo di detriti o un corpo ricco di ferro. Densità e coesione interna cambiano il confine di rottura.',
  },
  {
    name: 'Muovi il cursore orbitale',
    text: 'Trascina la distanza orbitale verso l\'interno o l\'esterno. Il disco visivo mostra se il satellite è fuori dal limite di Roche, lo sfiora, si frammenta o sta diventando un anello.',
  },
  {
    name: 'Confronta i limiti',
    text: 'Usa le letture per confrontare il limite di Roche fluido classico con la stima rigida inferiore e il limite operativo regolato dalla coesione.',
  },
];

const faq = [
  {
    question: 'Cos\'è il limite di Roche?',
    answer: 'Il limite di Roche è la distanza da un corpo primario massiccio alla quale le forze di marea su un corpo orbitante più piccolo diventano abbastanza forti da superare l\'autogravità del corpo minore. All\'interno di quel limite, un satellite debole o fluido può essere smembrato.',
  },
  {
    question: 'Perché esistono limiti di Roche fluidi e rigidi?',
    answer: 'Un satellite fluido si deforma facilmente, quindi le maree possono amplificarne l\'allungamento e disintegrarlo più lontano dal pianeta. Un satellite rigido può resistere alla deformazione con la resistenza del materiale, quindi la stima rigida semplice colloca la rottura più vicino al primario.',
  },
  {
    question: 'Ogni luna all\'interno del limite di Roche diventa istantaneamente anelli?',
    answer: 'No. La disruzione reale dipende da rotazione, composizione, crepe, porosità, riscaldamento, impatti e resistenza del materiale. Questo strumento mostra il limite gravitazionale classico e usa una banda di transizione per comunicare il rischio anziché un interruttore istantaneo.',
  },
  {
    question: 'Perché gli anelli di Saturno sono legati alla fisica del limite di Roche?',
    answer: 'Gli anelli di Saturno occupano una regione dove il materiale ghiacciato può persistere come particelle invece di accrescersi in una grande luna. Il limite di Roche aiuta a spiegare perché le particelle degli anelli rimangono disperse vicino al pianeta.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Corpo primario',
    satelliteType: 'Tipo di satellite',
    orbitDistance: 'Distanza orbitale',
    rocheBoundary: 'Limite di Roche',
    fluidLimit: 'Limite fluido',
    rigidLimit: 'Limite rigido',
    activeLimit: 'Limite attivo',
    safetyRatio: 'Rapporto di sicurezza',
    orbitalPeriod: 'Periodo orbitale',
    tidalStress: 'Sollecitazione di marea',
    ringFormation: 'Formazione di anelli',
    stable: 'Orbita stabile',
    grazing: 'Sfioramento di marea',
    fragmenting: 'Frammentazione',
    ring: 'Sistema ad anelli',
    km: 'km',
    hours: 'h',
    density: 'Densità',
    cohesion: 'Coesione',
    planetRadius: 'Raggio planetario',
    reset: 'Reimposta',
    closePass: 'Passaggio ravvicinato',
    moonTrack: 'Traccia lunare',
    debrisTrack: 'Traccia di detriti',
    primaryEarth: 'Terra',
    primaryMars: 'Marte',
    primaryJupiter: 'Giove',
    primarySaturn: 'Saturno',
    primaryNeptune: 'Nettuno',
    satelliteIcyMoon: 'Luna ghiacciata',
    satelliteRockyMoon: 'Luna rocciosa',
    satelliteRubblePile: 'Cumulo di detriti',
    satelliteIronCore: 'Luna ricca di ferro',
    cohesionFluid: 'Fluido',
    cohesionFractured: 'Fratturato',
    cohesionRigid: 'Rigido',
  },
  seo: [
    {
      type: 'title',
      text: 'Formula del Limite di Roche, Significato e Come Usare Questa Calcolatrice',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>limite di Roche</strong> è la distanza orbitale minima alla quale un satellite tenuto insieme principalmente dalla propria gravità può orbitare un corpo più grande senza essere distrutto dalle forze di marea. Le persone lo cercano di solito quando vogliono sapere se una luna, cometa, asteroide o scenario artificiale sopravviverebbe a un avvicinamento a un pianeta, o se il materiale si disperderebbe in un anello. Questa calcolatrice risponde a quella domanda combinando il raggio del pianeta, la densità del pianeta, la densità del satellite e la resistenza interna approssimativa del satellite.',
    },
    {
      type: 'paragraph',
      html: 'L\'idea chiave è semplice: la gravità non è ugualmente forte su tutto il satellite. Il lato vicino è attratto più fortemente del lato lontano, creando una forza di stiramento. Se quello stiramento di marea è più forte dell\'autogravità e della coesione materiale del satellite, il corpo può incrinarsi, perdere massa e eventualmente frammentarsi. Il limite di Roche non è quindi solo una distanza; è un confronto tra sollecitazione di marea esterna e legame interno.',
    },
    {
      type: 'title',
      text: 'Equazioni del Limite di Roche Usate dalla Calcolatrice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per un satellite fluido o molto debole, l\'approssimazione classica è <strong>d = 2.44 R (rho_M / rho_m)^(1/3)</strong>. Per un satellite rigido, un\'approssimazione comune è <strong>d = 1.26 R (rho_M / rho_m)^(1/3)</strong>. In queste equazioni, <strong>d</strong> è il limite di Roche misurato dal centro del pianeta, <strong>R</strong> è il raggio del corpo primario, <strong>rho_M</strong> è la densità del corpo primario e <strong>rho_m</strong> è la densità del satellite.',
    },
    {
      type: 'list',
      items: [
        '<strong>Raggio del primario:</strong> Pianeti più grandi creano una distanza di Roche maggiore anche quando la densità è simile.',
        '<strong>Densità del primario:</strong> Un primario più denso aumenta l\'intensità della marea a un dato multiplo del suo raggio.',
        '<strong>Densità del satellite:</strong> Un satellite più denso ha un\'autogravità più forte, quindi può sopravvivere più vicino al pianeta.',
        '<strong>Resistenza del satellite:</strong> Un oggetto fluido, ghiacciato, fratturato o a cumulo di detriti si disintegra più lontano di un oggetto rigido compatto.',
      ],
    },
    {
      type: 'table',
      headers: ['Modello', 'Forma della formula', 'Usalo per', 'Cosa significa il risultato'],
      rows: [
        ['Limite di Roche fluido', '2.44 R (rho_M / rho_m)^(1/3)', 'Lune ghiacciate, corpi fusi, cumuli di detriti, comete deboli', 'La distanza di rottura conservativa per oggetti che si deformano facilmente.'],
        ['Limite di Roche rigido', '1.26 R (rho_M / rho_m)^(1/3)', 'Corpi rocciosi densi o metallici con resistenza materiale', 'Una stima inferiore più vicina dove la resistenza del materiale ritarda la disruzione.'],
        ['Visualizzazione regolata dalla coesione', 'Tra i casi fluido e rigido', 'Confronto rapido di scenari in questo simulatore', 'Una linea di rischio pratica per il tipo di satellite selezionato, non un interruttore universale di legge naturale.'],
      ],
    },
    {
      type: 'title',
      text: 'Esempio: Perché una Luna Ghiacciata Vicino a Saturno è Vulnerabile',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturno è molto meno denso della Terra, ma è enorme. Un satellite ghiacciato a bassa densità ha un\'autogravità debole rispetto a una luna rocciosa compatta, quindi il rapporto di densità colloca ancora il limite di Roche fluido lontano dalle cime delle nuvole di Saturno. Questo è uno dei motivi per cui la fisica del limite di Roche è centrale per capire perché Saturno può mantenere un ampio e brillante sistema di anelli composto principalmente da particelle ghiacciate invece di una grande luna riassemblata.',
    },
    {
      type: 'paragraph',
      html: 'Se scegli Saturno e una luna ghiacciata nella calcolatrice, poi trascini l\'orbita verso l\'interno, osserva il rapporto di sicurezza. Sopra <strong>1.00x</strong>, l\'orbita selezionata è fuori dal limite di Roche attivo. Vicino a <strong>1.00x</strong>, la luna è in una regione di sfioramento di marea dove la perdita di massa o l\'incrinatura diventano plausibili. Sotto <strong>1.00x</strong>, la visualizzazione si sposta verso archi di frammenti e formazione di anelli perché il modello selezionato predice la disruzione.',
    },
    {
      type: 'title',
      text: 'Come Interpretare il Rapporto di Sicurezza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>rapporto di sicurezza</strong> è la distanza orbitale attuale divisa per il limite di Roche selezionato. Un rapporto di <strong>1.25x</strong> significa che l\'orbita è il 25% oltre la stima di rottura attiva. Un rapporto di <strong>1.00x</strong> significa che l\'orbita è esattamente sul limite di Roche selezionato. Un rapporto di <strong>0.80x</strong> significa che il satellite è ben dentro la zona di disruzione selezionata.',
    },
    {
      type: 'table',
      headers: ['Rapporto di sicurezza', 'Stato visualizzato', 'Lettura pratica'],
      rows: [
        ['Sopra 1.12x', 'Orbita stabile', 'Il satellite è fuori dal limite di Roche scelto per questo modello semplificato.'],
        ['1.00x a 1.12x', 'Sfioramento di marea', 'L\'oggetto è abbastanza vicino che deformazione, incrinatura o perdita superficiale possono contare.'],
        ['0.78x a 1.00x', 'Frammentazione', 'L\'autogravità non è più sufficiente nel modello selezionato; correnti di detriti sono plausibili.'],
        ['Sotto 0.78x', 'Sistema ad anelli', 'Il corpo originale è rappresentato come materiale disperso che segue orbite vicine.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'La lettura del periodo orbitale è inclusa perché gli avvicinamenti non riguardano solo la distanza. Il materiale all\'interno della zona di disruzione segue orbite rapide e leggermente diverse. Una volta che i frammenti si separano, il taglio orbitale li disperde intorno al pianeta, mentre le collisioni appiattiscono e ordinano i detriti in un disco simile a un anello.',
    },
    {
      type: 'title',
      text: 'Perché il Limite di Roche Può Creare Anelli',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando un satellite si rompe fuori dal limite di Roche, i frammenti possono eventualmente collidere e riaccumularsi in una luna più piccola. All\'interno del limite di Roche, i frammenti vicini non possono facilmente fondersi in un corpo autogravitante stabile perché le forze di marea continuano a separare il materiale. Il risultato può essere un anello di lunga durata, specialmente quando i detriti sono ghiacciati, collisionali e continuamente mescolati da piccole lune o risonanze.',
    },
    {
      type: 'paragraph',
      html: 'La formazione degli anelli è graduale. Una luna disgregata prima si allunga, poi perde particelle e frammenti più grandi. Quei frammenti occupano raggi orbitali leggermente diversi, quindi derivano avanti o indietro l\'uno dall\'altro. Col tempo, le collisioni smorzano il movimento verticale e il materiale si deposita in un disco sottile. Ecco perché il simulatore mostra una transizione da una singola luna ad archi e poi a un anello completo anziché trattare la rottura come un\'esplosione istantanea.',
    },
    {
      type: 'title',
      text: 'Importanti Limitazioni di Questa Calcolatrice del Limite di Roche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La calcolatrice è progettata per intuizione scientifica rapida, non per progettazione di missioni ad alta fedeltà. I satelliti reali sono influenzati da rotazione, eccentricità orbitale, stratificazione interna, resistenza alla trazione, porosità, temperatura, riscaldamento di marea, fratture precedenti, impatti e risonanze con altre lune. Un cumulo di detriti rotante su un\'orbita eccentrica può cedere diversamente da una roccia monolitica fredda su un\'orbita circolare, anche se le loro densità medie sembrano simili.',
    },
    {
      type: 'list',
      items: [
        '<strong>Usa il limite fluido</strong> quando l\'oggetto è debole, ghiacciato, fuso, altamente fratturato o fatto di aggregato sciolto.',
        '<strong>Usa il limite rigido</strong> come stima inferiore per corpi compatti con resistenza interna significativa.',
        '<strong>Leggi il limite attivo</strong> come il limite di lavoro scelto dal simulatore per il tipo di satellite selezionato.',
        '<strong>Non interpretare il risultato</strong> come una previsione esatta per una luna reale nominata senza un modello geofisico dettagliato.',
      ],
    },
    {
      type: 'title',
      text: 'Domande Comuni a Cui Questo Strumento Aiuta a Rispondere',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Usa questo strumento quando vuoi stimare domande come: Quanto vicino può arrivare una luna alla Terra prima di rompersi? Perché gli anelli di Saturno sono all\'interno di una regione del limite di Roche? Una luna rocciosa sopravvivrebbe più vicino di una luna ghiacciata? Come cambia la densità il limite di Roche? Qual è la differenza tra il limite di Roche fluido e rigido? I controlli sono costruiti intorno a questi confronti, quindi cambiare una variabile mostra immediatamente come rispondono la distanza di rottura, il rapporto di sicurezza e la visualizzazione della formazione di anelli.',
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
